module.exports = {
  plugins: ['jest'],
  extends: [
    '../.eslintrc.js',
    'plugin:jest/style',
  ],
  env: {
    'jest/globals': true,
  },
};
