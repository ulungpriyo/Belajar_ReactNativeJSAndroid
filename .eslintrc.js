module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['prettier'],
  parser: 'babel-eslint',
  extends: [
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
