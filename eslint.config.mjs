// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...eslintPluginPrettierRecommended.rules,
    },
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    rules: {
      'no-console': 'off',
    },
  },
);
