
module.exports = {
  extends: [ './config/eslint/typescript.config' ],
  rules: {
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
};

