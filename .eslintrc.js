module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,

  },
  plugins: [
    'cypress'
  ],
  extends: [
    'airbnb-base',
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  rules: {
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'class-methods-use-this': 0,
      'linebreak-style': ['error', 'windows']
  },
};
