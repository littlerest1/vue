module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: 'airbnb-base',

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },

  plugins: [
    'vue'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  root: true,

  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ]
}
