import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierRecommended,
  {
    // Type-aware linting for the TypeScript sources only — the flat config and
    // postcss config are .mjs and are not part of tsconfig's `include`.
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx}"],
    plugins: { "unused-imports": unusedImports },
    settings: {
      react: { version: "detect" },
      "import/resolver": { typescript: {} },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
        },
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "warn",
      "react/react-in-jsx-scope": "off",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.tsx",
            "**/*.spec.tsx",
            "eslint.config.mjs",
            "*.config.{js,mjs,ts}",
            ".pnpmfile.cjs",
          ],
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn",
      // eslint-plugin-react-hooks v7 (pulled in by eslint-config-next 16) adds
      // compiler-powered rules that flag pre-existing patterns in this repo.
      // Kept as warnings so the Next 16 upgrade does not turn existing
      // components into hard lint failures — they are real findings to work
      // through, not noise.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/static-components": "warn",
      "@next/next/no-img-element": "warn",
      "jsx-a11y/alt-text": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
