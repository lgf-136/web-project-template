module.exports = {
  extends: [
    './base.config',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-debugger': 'off',
    // 解决 error 'count' is already declared in the upper scope on line 6 column 10 no-shadow
    'no-shadow': 'off',
    'react/prop-types': 'off',
  },
};

