module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['prettier', 'airbnb', 'react-app', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'eslint-plugin-react'],
  rules: {
    'prettier/prettier': ['warn'],
    'prefer-promise-reject-errors': ['off'],
    'import/prefer-default-export': ['off'],
    'react/require-default-props': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/forbid-prop-types': ['off'],
    'no-return-assign': ['off'],
    'react/no-array-index-key': ['off'],
    'react/jsx-wrap-multilines': ['error', { prop: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-access-state-in-setstate': ['off'],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
