import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';

export default {
  lang: 'zh',
  title: 'bb-ui',
  description: 'bb-ui 组件库',
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
