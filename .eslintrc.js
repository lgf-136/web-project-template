
module.exports = {
  extends: [ './config/eslint/typescript.config' ],
  rules: {
    '@typescript-eslint/no-var-requires': [ 0 ],
    complexity: [ 'error', { max: 20 } ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 1,
        maxEOF: 1,
      },
    ],
  },
  settings: {},
  plugins: [],
  overrides: [],
  ignorePatterns: [ 'src/**/*.d.ts' ],
};

