# Next.js 15 → 16 upgrade

This project was moved from **Next.js 15.0.7 to 16.2.12**, together with React
19.2 and the ESLint flat config. The main reason for going to 16.2.12
specifically: it is the first release that can type-check a build with
**TypeScript 7** (see [typescript7-upgrade.md](./typescript7-upgrade.md)).

```bash
pnpm dev          # next dev   — Turbopack, output in .next/dev
pnpm build        # next build — Turbopack + TS 7 type check
pnpm lint         # oxlint .   — `next lint` no longer exists
pnpm type-check   # TS 7 standalone check
```

## Dependency changes

| Package                     | Before                        | After   |
| --------------------------- | ----------------------------- | ------- |
| `next`                      | 15.0.7                        | 16.2.12 |
| `react` / `react-dom`       | `19.0.0-rc-02c0e824-20241028` | 19.2.8  |
| `@types/react`              | ^18                           | ^19     |
| `@types/react-dom`          | ^18                           | ^19     |
| `eslint`                    | ^8.57.1                       | ^9.39.5 |
| `eslint-config-next`        | 15.0.2                        | 16.2.12 |
| `eslint-plugin-react-hooks` | ^5.1.0                        | ^7.0.0  |
| `typescript`                | ^5 (5.6.3)                    | 7.0.2   |

React was on a **release candidate** build pinned from October 2024; it is now
on the 19.2 stable line that Next 16 expects.

## Breaking changes that actually hit this repo

### 1. `middleware.ts` → `proxy.ts`

Next 16 renamed the convention. The file was renamed with `git mv` and the
exported function `middleware()` is now `proxy()`. `export const config`
(the `matcher`) is unchanged, and this proxy never used the edge runtime — which
matters, because `proxy` only runs on the Node.js runtime.

### 2. `next lint` was removed

`next build` no longer lints, and the `next lint` command is gone.
`package.json` calls the linter CLI directly:

```json
"lint": "oxlint .",
"lint:fix": "oxlint . --fix"
```

### 3. ESLint 9 + flat config

> **Superseded.** The linter has since moved from ESLint to oxlint and
> `eslint.config.mjs` is gone — see
> [oxlint-migration.md](./oxlint-migration.md). This section records what the
> Next 16 upgrade did; the rules it describes were carried into
> `.oxlintrc.json` one for one.

`eslint-config-next@16` requires **ESLint >= 9** and ships flat configs, so
`.eslintrc.json` was replaced by an `eslint.config.mjs`
(`eslint-config-next/core-web-vitals` + `eslint-config-next/typescript` +
`eslint-plugin-prettier/recommended`, then the repo's own rules). All rules from
the old config were carried over verbatim.

Two behaviour changes worth knowing:

- **More files are linted.** `next lint` only looked at its default directories;
  `eslint .` covers the whole repo, so `hooks/`, `types/`, `constants/` and the
  root config files are now included. That surfaced two pre-existing errors in
  `hooks/usePwaInstall.ts` (an `interface` where the repo standardised on
  `type`, plus a formatting error) which are fixed.
- **`eslint-plugin-react-hooks` v5 → v7** adds compiler-powered rules.
  `react-hooks/set-state-in-effect` (13 hits) and
  `react-hooks/static-components` (1 hit) fire on **existing** components. They
  are set to `warn` so the upgrade does not convert working code into a red
  build — they are a real backlog to work through, not noise. oxlint
  implements both natively as `react/set-state-in-effect` and
  `react/static-components`, still at `warn`, still the same 14 hits.

Type-aware linting is kept (`parserOptions.projectService`), scoped to
`**/*.{ts,tsx}` so the `.mjs` config files — which are not in `tsconfig`'s
`include` — do not error.

### 4. `images.domains` → `images.remotePatterns`

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "portfolio-api-ten-delta.vercel.app" },
    { protocol: "https", hostname: "img.logo.dev" },
  ],
},
```

### 5. Turbopack rejected `app/favicon.ico`

`next build` uses Turbopack by default in 16, and the build failed with:

```
./app/favicon.ico
Processing image failed: unable to decode image data
Caused by: Format error decoding Ico: The PNG is not in RGBA format!
```

The icon was a 256×256 PNG-in-ICO at **16 bits per channel**. Turbopack's ICO
decoder only accepts 8-bit RGBA, while the Webpack pipeline in Next 15 accepted
it. The file was re-encoded to 8-bit RGBA (same 256×256 image, 198 KB → 82 KB).
Anything else that ships a 16-bit PNG will hit the same wall.

### 6. `tsconfig.json` rewritten by the build

`next build` applied its mandatory/suggested settings:

- `jsx`: `preserve` → **`react-jsx`** (mandatory — Next uses the automatic
  runtime)
- `include` gained `.next/dev/types/**/*.ts` (dev and build now write to
  separate output directories; `next dev` outputs to `.next/dev`)

### 7. A fixed bug, for free

The `Failed to load font file … Error: Unknown font format` warnings that the
Webpack build printed for the `next/font/local` Geist files on every `next build`
are **gone** under Turbopack.

## Not affected

- **Async request APIs** — `params` was already typed as `Promise<…>` and
  awaited in every page/layout, so the removal of the synchronous fallback
  changed nothing.
- **AMP, `next/legacy/image`, `serverRuntimeConfig`/`publicRuntimeConfig`,
  `experimental_ppr`, parallel-route `default.js`, custom `webpack` config** —
  none of these were used.
- **`revalidateTag`, `unstable_*` cache APIs** — not used.

## Verification

| Check                         | Result                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `pnpm build`                  | ✅ Turbopack compile + TS 7 type check, 27 static pages                                                             |
| `pnpm type-check` (TS 7)      | ✅ 0 errors, ~0.9–1.1 s                                                                                             |
| `pnpm type-check:tsc` (5.6.3) | ✅ 0 errors — parity with TS 7                                                                                      |
| `pnpm lint`                   | ✅ 0 errors, 44 warnings (see react-hooks note)                                                                     |
| Type-error gate               | ✅ a deliberate error fails the build with a raw `tsc` diagnostic (`error TS2322`), confirming the CLI checker runs |
| `pnpm dev`                    | ✅ ready in 2.8 s, home page renders, no console errors                                                             |
| `proxy.ts` at runtime         | ✅ `/` → `/en` redirect + `NEXT_LOCALE` cookie set, `/ja/skills` → 200                                              |
