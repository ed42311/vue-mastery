module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
}
