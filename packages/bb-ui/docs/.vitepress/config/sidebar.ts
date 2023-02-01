/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 22:12:52
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-01 15:53:45
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\.vitepress\config\sidebar.ts
 * @Description: doc sidebar
 */

export default {
  '/': [
    {
      text: '快速开始',
      link: '/',
      items: [
        {
          text: '简介',
          link: '/introduce'
        }
      ]
    },
    {
      text: '通用',
      items: []
    },
    {
      text: '导航',
      items: [
        {
          text: 'Menu 菜单',
          link: '/components/menu/',
          status: '100%'
        }
      ]
    },
    {
      text: '反馈',
      items: [
        {
          text: 'Dialog 对话框',
          link: '/components/dialog/',
          status: '100%'
        },
        {
          text: 'MessageBox 弹窗',
          link: '/components/message-box/',
          status: '100%'
        }
      ]
    },
    {
      text: '数据录入',
      items: [
        {
          text: 'Input 输入框',
          link: '/components/input/',
          status: '100%'
        },
        {
          text: 'upload 上传文件',
          link: '/components/upload/',
          status: '100%'
        }
      ]
    },
    {
      text: '数据展示',
      items: [
        {
          text: 'Card 卡片',
          link: '/components/card/',
          status: '100%'
        },
        {
          text: 'Progress 进度条',
          link: 'components/progress/',
          status: '100%'
        }
      ]
    },
    {
      text: '布局',
      items: []
    }
  ]
};
