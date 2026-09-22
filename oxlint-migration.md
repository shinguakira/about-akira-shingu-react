# ESLint → oxlint migration

Linting moved from ESLint 9 to [oxlint](https://oxc.rs) 1.85.0 — **~32× faster**
with the same 30 diagnostics on the same 30 source locations. ESLint and all
eleven of its plugins are gone from the project.

## Results

Measured on this repo (117 `.ts/.tsx` files, ~10k LOC), whole-repo run,
best of three:

| Linter          | Command    | Time        |
| --------------- | ---------- | ----------- |
| ESLint 9.39.5   | `eslint .` | ~18,100 ms  |
| **oxlint 1.85** | `oxlint .` | **~570 ms** |

Both report **30 warnings, 0 errors**, at identical `file:line:col` positions
and from equivalent rules:

| Rule                                                                | Count |
| ------------------------------------------------------------------- | ----- |
| unused vars (`unused-imports/no-unused-vars` → `no-unused-vars`)    | 15    |
| `react-hooks/set-state-in-effect` → `react/set-state-in-effect`     | 13    |
| `@typescript-eslint/no-explicit-any` → `typescript/no-explicit-any` | 1     |
| `react-hooks/static-components` → `react/static-components`         | 1     |

## How to use

```bash
pnpm lint              # oxlint — fast, default
pnpm lint:fix          # oxlint --fix
pnpm lint:type-aware   # + type-aware rules via oxlint-tsgolint (slower)
pnpm check-format      # prettier --check . — formatting lives here now
```

## What changed

1. **Dependencies**: added `oxlint` and `oxlint-tsgolint`; removed `eslint`,
   `eslint-config-next`, `eslint-config-prettier`, `eslint-plugin-import`,
   `eslint-plugin-jsx-a11y`, `eslint-plugin-prettier`, `eslint-plugin-react`,
   `eslint-plugin-react-hooks`, `eslint-plugin-unused-imports`,
   `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`.
   `pnpm install` dropped **308 packages**.
2. **`eslint.config.mjs` deleted**, replaced by
   [`.oxlintrc.json`](./.oxlintrc.json).
3. **`package.json`**: `lint` / `lint:fix` call `oxlint`; new
   `lint:type-aware`.
4. **`.pnpmfile.cjs` deleted** — it existed only to pin typescript-eslint to
   the classic TypeScript compiler (see
   [typescript7-upgrade.md](./typescript7-upgrade.md)). oxlint needs no
   JavaScript compiler API, so the whole workaround went away with it.

The starting `.oxlintrc.json` came from `npx @oxlint/migrate eslint.config.mjs`
(86 of 93 rules converted automatically), then was cleaned up by hand — see
[Departures from the generated config](#departures-from-the-generated-config).

## ⚠️ Specific notices

### 1. Prettier is no longer a lint rule

ESLint ran Prettier as the `prettier/prettier` rule via
`eslint-plugin-prettier`. oxlint can do the same through its **JS plugin**
bridge, and `@oxlint/migrate` generated exactly that
(`"jsPlugins": ["eslint-plugin-prettier"]`). It was removed, because that
bridge shells back out to Node for every file — with it enabled oxlint took
**~8,400 ms** instead of ~570 ms, i.e. it gave up most of the speed the
migration was for.

Nothing is lost: `pnpm check-format` already runs `prettier --check .` across
the **whole repo**, which is strictly broader than the ESLint rule (that one
only saw lintable source files, never `*.md`, `*.json` or `*.css`).

`eslint-config-prettier` disappears with it — the stylistic rules it used to
switch off are simply not enabled in `.oxlintrc.json`.

### 2. Unused imports are warnings now, not errors

`eslint-plugin-unused-imports` splits the core rule in two:
`no-unused-imports` (was **error**) and `no-unused-vars` (**warn**). oxlint
has no equivalent split — it implements the core `no-unused-vars`, which
covers imports and variables under one severity.

So the plugin's two rules collapse into one native rule carrying the old
`no-unused-vars` options:

```jsonc
"no-unused-vars": ["warn", {
  "vars": "all", "varsIgnorePattern": "^_",
  "args": "after-used", "argsIgnorePattern": "^_"
}]
```

**The deliberate change**: an unused import now warns instead of erroring. The
repo currently has zero unused imports and 15 unused type declarations, so the
reported output is unchanged — only the severity ceiling moved. `oxlint --fix`
still removes them.

### 3. Two rules were dropped for having no oxlint equivalent

`@oxlint/migrate --details` skipped 7 of 93 rules. Three are genuinely
unnecessary (`react/jsx-uses-react` and `react/jsx-uses-vars` are obsolete
under the React 17+ JSX transform; `react/no-deprecated` is covered by
`typescript/no-deprecated`). Two more (`react-hooks/config`,
`react-hooks/gating`) configure React Compiler options that oxlint fixes to
valid defaults, so there is nothing to configure.

That leaves two real gaps:

| Rule                                | Status                                                        |
| ----------------------------------- | ------------------------------------------------------------- |
| `import/no-extraneous-dependencies` | Not implemented in oxlint — **dropped**                       |
| `react/require-render-return`       | Nursery only — **dropped**; this repo has no class components |

`import/no-extraneous-dependencies` is the only one worth watching: importing a
devDependency from application code is no longer caught at lint time. `next
build` still fails on it in practice, since devDependencies are not installed
in a production install.

### 4. Type-aware rules now work — they could not under ESLint

This is the one capability the migration **adds** rather than preserves.
typescript-eslint's type-aware rules could not run on this project at all after
the TypeScript 7 upgrade: it imports the JavaScript compiler API, which
`typescript@7` no longer ships, and TS 7 support was
[closed as not planned](https://github.com/typescript-eslint/typescript-eslint/issues/12518).

oxlint's type-aware mode uses [`oxlint-tsgolint`](https://www.npmjs.com/package/oxlint-tsgolint),
a Go binary built on `typescript-go` — it **requires TypeScript 7.0+**, which
this project is already on. Five rules are declared in `.oxlintrc.json`:

```jsonc
"typescript/await-thenable": "warn",
"typescript/no-deprecated": "warn",
"typescript/no-floating-promises": "warn",
"typescript/no-misused-promises": "warn",
"typescript/no-unnecessary-type-assertion": "warn"
```

They are **inert by default**. oxlint only executes type-aware rules when
`--type-aware` is passed (or `options.typeAware` is set in the config, which it
deliberately is **not**), so `pnpm lint` stays at 570 ms and the same 30
warnings. `pnpm lint:type-aware` builds the TypeScript program and reports 52:

| Rule                              | Count | Note                                          |
| --------------------------------- | ----- | --------------------------------------------- |
| `typescript/no-deprecated`        | 18    | mostly shadcn's `ElementRef` → `ComponentRef` |
| `typescript/no-floating-promises` | 3     |                                               |
| `typescript/no-misused-promises`  | 1     |                                               |

These 22 are pre-existing findings that nothing was checking before, left as
warnings rather than fixed in the migration commit.

## Departures from the generated config

`npx @oxlint/migrate --type-aware --details eslint.config.mjs` produced a
working but 48 KB `.oxlintrc.json`. Four hand edits, all behaviour-checked
against the ESLint baseline:

1. **Dropped `jsPlugins`** (`eslint-plugin-prettier`,
   `eslint-plugin-unused-imports`) — notices 1 and 2 above. This keeps oxlint
   pure Rust, which is where the 32× comes from.
2. **Replaced 1,094 inlined globals** (copied out of `eslint-config-next`) with
   the `env` presets `browser` / `node` / `es2024`. `no-undef` is not enabled,
   so globals were doing nothing but taking up 40 KB.
3. **Flattened three overrides into the top level.** The generated overrides
   matched `**/*.{js,jsx,mjs,ts,tsx,...}`, which is every file oxlint lints
   here; only the TS-only block (`no-var`, `prefer-const`, `prefer-rest-params`,
   `prefer-spread`) still needs to be an override.
4. **Kept `jsx-a11y/alt-text`'s options.** The generated config re-declared it
   as a bare `"warn"` in a later override, which resets options to defaults. In
   an ESLint flat config a severity-only re-declaration _keeps_ the earlier
   options, so `{ "elements": ["img"], "img": ["Image"] }` was restored — that
   is what makes the rule check `next/image`.

`"categories": { "correctness": "off" }` was kept as generated. oxlint enables
its `correctness` category by default; leaving it off is what makes this a
migration rather than a new rule set. Turning it on is the obvious next step
and is a separate decision.

## Scope & caveats

- **`eslint-disable` comments still work.** oxlint honours
  `// eslint-disable-next-line` and friends, so no source comments were
  touched.
- **Editor setup is not covered here.** Anyone using the ESLint VS Code
  extension on this repo wants the
  [oxc extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
  instead; the repo ships no `.vscode/` settings either way.
- **No CI lint job exists** to update. `.github/workflows/` only has
  `auto-assign-reviewers.yml`.
- `oxlint` is pinned exactly (`1.85.0`) rather than caret-ranged, because rule
  coverage and defaults move quickly between oxlint minors and a floating bump
  can change the warning count under you.
