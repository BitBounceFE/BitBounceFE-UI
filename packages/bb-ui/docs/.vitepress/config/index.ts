/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-20 13:31:32
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-20 20:07:27
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\.vitepress\config\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';

export default {
  // base: '/BitBounceFE-UI/',
  lang: 'zh',
  title: 'bitbouncefe-ui',
  description: 'bitbouncefe-ui 组件库',
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
