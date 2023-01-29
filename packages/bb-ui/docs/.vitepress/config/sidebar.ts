/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 22:12:52
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-28 22:34:33
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\.vitepress\config\sidebar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  "/": [
    {
      text: "快速开始",
      link: "/",
      items: [
        {
          text: "简介",
          link: "/introduce",
        },
      ],
    },
    {
      text: "数据展示",
      items: [
        {
          text: "Card 卡片",
          link: "/components/card/",
          status: "100%",
        },
        {
          text: "menu",
          link: "/components/menu/",
          status: "100%",
        },
      ],
    },
  ],
};