/*
 * @Date: 2023-01-28 19:53:25
 * @LastEditors: fxjzz && 1042183935@qq.com
 * @LastEditTime: 2023-01-29 16:22:51
 * @FilePath: \BB-UI\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly'
  },
  extends: [
    'plugin:vue/vue3-recommended', // 这里需要注意 vue2 是`plugin:vue/essential`
    'standard',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
