# TypeScript 7 (native compiler) upgrade

This project type-checks with the **TypeScript 7 native compiler** instead of
the classic JavaScript `tsc` — **~11× faster** with zero changes to the source
code.

Since TS 7 went GA (`typescript@7.0.2`), this is the **released `typescript`
package**, no longer the `@typescript/native-preview` (`tsgo`) dev build. It is
the project's plain `typescript` dependency, so **`next build` type-checks with
TS 7 as well** (via `experimental.useTypeScriptCli` — see
[next16-upgrade.md](./next16-upgrade.md)).

The classic JavaScript compiler is still installed, but only as the
`type-check:tsc` cross-check — nothing in the toolchain imports the compiler
API any more: see
[Why the classic compiler is still installed](#why-the-classic-compiler-is-still-installed).

## Results

Measured on this repo (117 `.ts/.tsx` files, ~10k LOC) on the current Next 16
setup, where `include` also pulls in Next's generated route types:

| Compiler     | Mode                      | Time        |
| ------------ | ------------------------- | ----------- |
| `tsc` 5.6.3  | warm (incremental cache)  | ~11,200 ms  |
| **TS 7.0.2** | full check, **every** run | **~950 ms** |

- **≈11× faster** than warm incremental `tsc`
- TS 7 keeps no `.tsbuildinfo` cache, so it is ~950 ms on _every_ run — there
  is no slow first run to warm up.
- On the pre-upgrade Next 15 project (no `.next/dev/types` in `include`) the
  same comparison was ~3,035 ms vs ~620 ms.

## How to use

```bash
pnpm type-check       # TS 7 native compiler — fast, default
pnpm type-check:tsc   # classic tsc 5.6.3 — fallback / cross-check
pnpm build            # next build — also type-checks with TS 7
```

Both compilers report **0 errors** on identical code (parity verified).

Both scripts invoke their compiler by **explicit path** rather than through
`node_modules/.bin/tsc`. Both packages declare a `tsc` bin and pnpm links only
one of them, so a bare `tsc` would be ambiguous:

| Script           | Entry point                          | Why that path                                                                                                                                         |
| ---------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type-check`     | `node_modules/typescript/lib/tsc.js` | TS 7's `bin/tsc` is an extensionless ESM wrapper that Node 20.9 cannot run as a main entry — Next.js takes the same `lib/tsc.js` fallback internally. |
| `type-check:tsc` | `node_modules/typescript5/bin/tsc`   | `typescript5` is an npm alias for `typescript@5.6.3`.                                                                                                 |

## What changed

1. **Dependencies**: `typescript` is `7.0.2`; `typescript5` is an alias for
   `npm:typescript@5.6.3` (used only by the cross-check script).
2. **`package.json`**: `type-check` → TS 7; `type-check:tsc` → classic 5.6.3.
3. **`next.config.ts`**: `experimental.useTypeScriptCli: true`.
4. **`tsconfig.json`**: removed `baseUrl` and added
   `"noUncheckedSideEffectImports": false` for the CSS imports (both explained
   in the notices below).
5. **Two imports rewritten** to the `@/` alias (they previously relied on
   `baseUrl` — see notice 1).

## ⚠️ Specific notices

### 1. `baseUrl` was removed — two imports switched to `@/`

TS 7 **removed the `baseUrl` compiler option** (`error TS5102`). This repo used
`baseUrl: "."` so that two files could import from the project root without the
`@/` prefix:

```ts
// before (relied on baseUrl)
import profilePic from "public/images/profile/developer-pic-1.png";
import { ... } from "components/ui/shadcn/dialog";
```

Rather than emulate `baseUrl` with a broad `"*": ["./*"]` wildcard mapping
(which makes every bare specifier try a project-root lookup first), those two
imports were simply rewritten to the existing `@/` alias:

```ts
// after
import profilePic from "@/public/images/profile/developer-pic-1.png";
import { ... } from "@/components/ui/shadcn/dialog";
```

So `paths` keeps only the standard alias — no catch-all:

```jsonc
"paths": {
  "@/*": ["./*"]
}
```

Resolved identically by classic `tsc`, TS 7, and the Next.js build.

### 2. `noUncheckedSideEffectImports: false` — for CSS side-effect imports

`app/layout.tsx` (`import "./globals.css"`) and
`app/(localized)/[locale]/layout.tsx` (`import "@/app/globals.css"`) are
**side-effect imports** — no bindings, imported purely so the bundler injects
the stylesheet. Under TS 7 they fail with:

```
error TS2882: Cannot find module or type declarations for side-effect import of './globals.css'
```

#### Why — root cause (verified)

TypeScript can only accept an import it can resolve to a typed module
(`.ts` / `.tsx` / `.d.ts` / an ambient `declare module`). It has **no concept of
`.css`** — `--traceResolution` shows it strips the extension, looks only for
`.css.ts` / `.css.d.ts` / etc., finds nothing, and reports
`Module name './globals.css' was not resolved` under **both** compilers.

The difference is the compiler option **`noUncheckedSideEffectImports`**
(added in TS 5.6):

| Compiler          | default | undeclared `import "./globals.css"` |
| ----------------- | ------- | ----------------------------------- |
| classic `tsc` 5.6 | `false` | silently ignored → **exit 0**       |
| **TS 7**          | `true`  | **`TS2882` error**                  |

So the source code is fine — **TS 7 flipped the default to the strict
behavior**, and now checks side-effect imports that classic `tsc` used to
ignore.

#### The fix used here

One line in `tsconfig.json` restores TS 5.6's lenient default:

```jsonc
"noUncheckedSideEffectImports": false
```

No extra file, and both compilers pass. This was chosen over the ambient
declaration below because the only side-effect imports in this repo are the two
create-next-app CSS files, so the check has no real safety value here (see the
comparison), and a genuinely missing `.css` file would still fail the Next
**build** via the bundler.

#### Alternative fix (the official TS-team recommendation)

The [TS 5.6 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-6.html)
recommend an ambient wildcard declaration in a global `.d.ts` file:

```ts
// globals.d.ts
declare module "*.css" {}
```

This gives `*.css` a type so it resolves, while keeping the check **on** for
_non-CSS_ side-effect imports. Two caveats that make it less compelling here:

- It requires a **new file** (it can't go in `next-env.d.ts`, which is marked
  do-not-edit).
- The wildcard matches **any** `*.css` specifier whether the file exists or not,
  so it does **not** catch a typo'd/deleted CSS path either — its only extra
  guard is over _non-css_ side-effect imports, of which this repo has none.

Both are valid; we took the one-liner. Switch to the `.d.ts` if you later add
non-CSS side-effect imports and want them checked.

#### Does this affect other frameworks?

`git log` confirms `app/layout.tsx` + `app/globals.css` came from the
**`create-next-app` (App Router)** template — Next only ships declarations for
CSS Modules (`*.module.css`), never for the global `import "./globals.css"` it
generates. So **every create-next-app project adopting TS 7 hits this.**

- **Vite** — not affected: `vite/client` already declares `*.css` (+ images,
  etc.).
- **Create React App** — not affected: `react-scripts` ships asset/CSS
  declarations.
- **General rule** — anything that relied on classic `tsc` silently ignoring an
  unresolvable side-effect import (`import "./x.css"` / `.scss` / etc. with no
  matching `declare module`) will be flagged by TS 7.

## Scope & caveats

### Why the classic compiler is still installed

TS 7 ships the Go compiler and **drops the JavaScript compiler API** — the
published `typescript@7` package exports only `./lib/version.cjs` plus
`typescript/unstable/*`; there is no `lib/typescript.js`. Anything that
_imports_ the compiler therefore breaks on TS 7.

- **`next build`** — solved. Next resolves `typescript/package.json` and spawns
  its `tsc` binary when `experimental.useTypeScriptCli` is on
  ([vercel/next.js#95639](https://github.com/vercel/next.js/pull/95639)), so it
  runs TS 7 without the API. The flag is **absent in 15.5.x, 16.0.0, 16.1.0 and
  16.2.0–16.2.11, and present from 16.2.12** (checked per tag in
  `config-shared.ts`) — which is why the project is on 16.2.12.
- **typescript-eslint** — was not solved upstream. Its supported range is
  `>=4.8.4 <6.1.0` and TS 7 support was
  [closed as not planned](https://github.com/typescript-eslint/typescript-eslint/issues/12518);
  with TS 7 it crashes at lint time.

  While ESLint was still in the project, typescript-eslint — and only
  typescript-eslint — was pinned to the classic compiler through a
  `readPackage` hook in a `.pnpmfile.cjs`. That was necessary because
  `typescript` is a **peer** dependency of the typescript-eslint packages, so
  `pnpm.overrides` does not apply to it: verified empirically in a scratch
  project, with `pnpm.overrides` set to
  `"@typescript-eslint/typescript-estree>typescript": "5.6.3"` and root
  `typescript@7.0.2`, typescript-estree still resolved **7.0.2**.

  **This no longer applies.** The linter is now oxlint, which needs no
  JavaScript compiler API, so both the hook and `.pnpmfile.cjs` were deleted —
  see [oxlint-migration.md](./oxlint-migration.md). Nothing in the toolchain
  loads the compiler API any more, and `typescript5` survives only as the
  `type-check:tsc` cross-check.

### Other notes

- Keep `type-check:tsc` as a cross-check while the two compilers coexist; after
  bumping either one, run both and confirm they still agree.
- oxlint's type-aware rules (`pnpm lint:type-aware`) run on TS 7 itself through
  `oxlint-tsgolint`, so they need no classic-compiler pin — that was the
  capability typescript-eslint could not offer here at all.
