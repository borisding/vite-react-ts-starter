module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'selector-class-pattern': null,
    'color-function-notation': null
  }
};
