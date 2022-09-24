
module.exports = {
  extends: [ './config/eslint/vue-ts.config' ],
  rules: {
    complexity: [ 'error', { max: 20 } ],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 1,
        maxEOF: 1,
      },
    ],
  },
};

