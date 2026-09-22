/**
 * Pin typescript-eslint to the classic (JavaScript) TypeScript compiler.
 *
 * The root `typescript` dependency is TypeScript 7, which ships the Go compiler
 * and no longer exposes the JavaScript compiler API (`lib/typescript.js`).
 * Next.js handles that via `experimental.useTypeScriptCli` (it spawns `tsc`),
 * but typescript-eslint *imports* the API — its supported range is
 * `>=4.8.4 <6.1.0`, and TS 7 support was closed as not planned:
 * https://github.com/typescript-eslint/typescript-eslint/issues/12518
 *
 * `pnpm.overrides` cannot fix this: `typescript` is a peer dependency of the
 * typescript-eslint packages, so it is satisfied by the root dependency and
 * overrides do not apply. Dropping the peer and adding a real dependency does
 * work — each typescript-eslint package then resolves its own classic compiler
 * while the rest of the project (and `next build`) uses TS 7.
 *
 * Keep TYPESCRIPT_FOR_ESLINT in sync with the `typescript5` alias in
 * package.json (used by `pnpm type-check:tsc`).
 */
const TYPESCRIPT_FOR_ESLINT = "5.6.3";

function readPackage(pkg) {
  const isTypescriptEslint =
    pkg.name === "typescript-eslint" ||
    (typeof pkg.name === "string" &&
      pkg.name.startsWith("@typescript-eslint/"));

  if (isTypescriptEslint) {
    if (pkg.peerDependencies?.typescript) {
      delete pkg.peerDependencies.typescript;
    }
    if (pkg.peerDependenciesMeta?.typescript) {
      delete pkg.peerDependenciesMeta.typescript;
    }
    pkg.dependencies = {
      ...pkg.dependencies,
      typescript: TYPESCRIPT_FOR_ESLINT,
    };
  }

  return pkg;
}

module.exports = { hooks: { readPackage } };
