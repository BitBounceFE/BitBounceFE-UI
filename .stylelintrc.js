// .stylelintrc.js
module.exports = {
  // 注册 stylelint 的 prettier 插件
  plugins: ['stylelint-prettier', 'stylelint-selector-bem-pattern'],
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    // standard 规则集合的 scss 版本
    'stylelint-config-standard-scss',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    // // 接入 Prettier 规则
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',

    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss'
  ],
  // customSyntax: 'postcss-html', ????TODO
  ignoreFiles: [], // 忽略某些不想被检查的文件
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true,
    // bem
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      presetOptions: {
        namespace: 'bbui' // 指明命名空间，组件名必须以c-开头
      }
    },
    'selector-class-pattern': null
  }
};
