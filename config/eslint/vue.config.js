module.exports = {
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [ './base.config', 'plugin:vue/vue3-recommended' ],
  overrides: [
    {
      files: [ '*.vue' ],
      parser: 'vue-eslint-parser',
    },
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
};

