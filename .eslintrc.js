const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',

      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',

      // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  overrides: [],
  globals: {},
  rules: {
    /* #region ESLint rules */

    // Possible Errors
    // 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：
    'no-debugger': [IS_PROD ? 'error' : 'off'],

    // Suggestions
    // 这些规则建议了不同的做事方式:
    'no-alert': [IS_PROD ? 'error' : 'off'], // 禁止使用 alert, confirm, 和 prompt
    'no-console': 'off',

    /* #endregion */

    /* #region @type-eslint rules */
    '@typescript-eslint/prefer-optional-chain': 'off',
    /* #endregion */
  },
};
