import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-debugger': 'off',
      'no-console': 0,
      'class-methods-use-this': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-undef': 'off', 
      'prettier/prettier': ['error', { 'endOfLine': 'auto' }]
    },
  }
);