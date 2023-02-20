/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-20 13:31:32
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-20 22:20:53
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\.vitepress\config\index.ts
 */
import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';

export default {
  // base: '/BitBounceFE-UI/',
  lang: 'zh',
  title: 'BitBounceFE-UI',
  description: 'BitBounceFE-UI 组件库',
  lastUpdated: true,
  // TODO 这里需要改
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  markdown,
  themeConfig: {
    sidebar,
    nav,
    logo: '/logo.svg'
  }
};
