# TypeScript 7 (native compiler) upgrade

This project's `pnpm type-check` now runs on the **TypeScript 7 native compiler**
(`tsgo`, shipped as `@typescript/native-preview`) instead of the classic
JavaScript `tsc`. Type-checking is **~4–7× faster** with zero changes to the
source code.

## Results

Measured on this repo (117 `.ts/.tsx` files, ~10k LOC):

| Compiler          | Mode                       | Time        |
| ----------------- | -------------------------- | ----------- |
| `tsc` 5.6.3       | cold (no cache)            | ~5,250 ms   |
| `tsc` 5.6.3       | warm (incremental cache)   | ~3,050 ms   |
| **`tsgo` 7.0**    | full check, **every** run  | **~730 ms** |

- **≈4.2× faster** than warm incremental `tsc`
- **≈7× faster** than cold `tsc`
- `tsgo` keeps no `.tsbuildinfo` cache, so it is ~730 ms on *every* run — there
  is no slow first run to warm up.

## How to use

```bash
pnpm type-check       # TS 7 native compiler (tsgo --noEmit) — fast, default
pnpm type-check:tsc   # classic tsc --noEmit — fallback / cross-check
```

Both compilers report **0 errors** on identical code (parity verified).

## What changed

1. **Dependency**: added `@typescript/native-preview` (dev). Provides the
   `tsgo` binary. Classic `typescript` is kept for the fallback script and for
   the Next.js build.
2. **`package.json`**: `type-check` → `tsgo --noEmit`; added `type-check:tsc`.
3. **`tsconfig.json`**: removed `baseUrl` and added
   `"noUncheckedSideEffectImports": false` for the CSS imports (both explained
   in the notices below).
4. **Two imports rewritten** to the `@/` alias (they previously relied on
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

Resolved identically by `tsc`, `tsgo`, and the Next.js build.

### 2. `noUncheckedSideEffectImports: false` — for CSS side-effect imports

`app/layout.tsx` (`import "./globals.css"`) and
`app/(localized)/[locale]/layout.tsx` (`import "@/app/globals.css"`) are
**side-effect imports** — no bindings, imported purely so the bundler injects
the stylesheet. Under tsgo they fail with:

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
| **tsgo / TS 7**   | `true`  | **`TS2882` error**                  |

So the source code is fine — **TS 7 flipped the default to the strict
behavior**, and now checks side-effect imports that classic `tsc` used to
ignore.

#### The fix used here

One line in `tsconfig.json` restores TS 5.6's lenient default:

```jsonc
"noUncheckedSideEffectImports": false
```

No extra file, and both `tsgo` and `tsc` pass. This was chosen over the ambient
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
*non-CSS* side-effect imports. Two caveats that make it less compelling here:

- It requires a **new file** (it can't go in `next-env.d.ts`, which is marked
  do-not-edit).
- The wildcard matches **any** `*.css` specifier whether the file exists or not,
  so it does **not** catch a typo'd/deleted CSS path either — its only extra
  guard is over *non-css* side-effect imports, of which this repo has none.

Both are valid; we took the one-liner. Switch to the `.d.ts` if you later add
non-CSS side-effect imports and want them checked.

#### Does this affect other frameworks?

`git log` confirms `app/layout.tsx` + `app/globals.css` came from the
**`create-next-app` (App Router)** template — Next only ships declarations for
CSS Modules (`*.module.css`), never for the global `import "./globals.css"` it
generates. So **every create-next-app project adopting tsgo hits this.**

- **Vite** — not affected: `vite/client` already declares `*.css` (+ images,
  etc.).
- **Create React App** — not affected: `react-scripts` ships asset/CSS
  declarations.
- **General rule** — anything that relied on classic `tsc` silently ignoring an
  unresolvable side-effect import (`import "./x.css"` / `.scss` / etc. with no
  matching `declare module`) will be flagged by tsgo.

## Scope & caveats

- **`next build` is unaffected.** Next still runs its own bundled classic `tsc`
  for the build-time type check, so CI build safety is unchanged. The speedup
  applies to the standalone `pnpm type-check` step (local + CI lint stage).
- **TS 7 / `tsgo` is a dev preview.** The pinned version is
  `7.0.0-dev.20260707.2`. Keep `type-check:tsc` around as a cross-check until
  TS 7 reaches a stable release. When bumping the preview, re-run both scripts
  and confirm they still agree.
- The `Unknown font format` warnings during `next build` are a **pre-existing**
  `next/font/local` issue (the `.woff` files are valid binaries) and are
  **unrelated** to this upgrade — the build still completes successfully.
