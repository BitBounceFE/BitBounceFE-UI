/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 22:12:26
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-26 19:01:11
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\.vitepress\config\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';

export default {
  lang: 'en-US',
  title: 'vue-bbui',
  description: ' vue-bbui 组件库',
  lastUpdated: true,
  //TODO 这里需要改
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  markdown,
  themeConfig: {
    sidebar,
    nav,
    logo: '/logo.svg'
  }
};