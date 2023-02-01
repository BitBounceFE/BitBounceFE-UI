/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 22:13:21
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-01 14:10:27
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\docs\.vitepress\theme\index.ts
 * @Description: 组件注册
 */
import Theme from "vitepress/theme";
import "./styles/index.scss";
import "vitepress-theme-demoblock/theme/styles/index.css";
import { registerComponents } from "./register-components.js";
// 引入组件 注册
import CardInstall from "../../../ui/card/index";

import DialogInstall from "../../../ui/dialog/index";
import MenuInstall from '../../../ui/menu';
import MessageBoxInstall from '../../../ui/message-box';


import UploadInstall from "../../../ui/upload/index";
// 引入组件 注册

export default {
  ...Theme,
  enhanceApp({ app }) {
    //  注册组件
    app.use(CardInstall);
    app.use(DialogInstall);
    app.use(MenuInstall);
    app.use(MessageBoxInstall);

    app.use(UploadInstall)

    registerComponents(app);
  }
};
