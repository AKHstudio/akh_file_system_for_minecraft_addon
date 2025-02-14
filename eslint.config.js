import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

// prettier-ignore
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.ts" , "**/*.js"],
    ignores: ["dist/**"],
  }, 
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
