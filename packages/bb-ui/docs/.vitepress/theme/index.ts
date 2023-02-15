/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-02-01 16:56:43
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-15 12:26:10
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\.vitepress\theme\index.ts
 * @Description: 组件注册
 */
import Theme from 'vitepress/theme';
import './styles/index.scss';
import 'vitepress-theme-demoblock/theme/styles/index.css';
import { registerComponents } from './register-components.js';
// 引入组件 注册
import DialogInstall from '../../../ui/dialog/index';
import MenuInstall from '../../../ui/menu';
import MessageBoxInstall from '../../../ui/message-box';
import ProgreInstall from '../../../ui/progress/index';
import UploadInstall from '../../../ui/upload/index';
import SelectInstall from '../../../ui/select/index';
import InputInstall from '../../../ui/input/index';
import LayoutInstall from '../../../ui/layout';
// 引入组件 注册

export default {
  ...Theme,
  enhanceApp({ app }) {
    //  注册组件
    app.use(ProgreInstall);
    app.use(DialogInstall);
    app.use(MenuInstall);
    app.use(MessageBoxInstall);
    app.use(UploadInstall);
    app.use(SelectInstall);
    app.use(InputInstall);
    app.use(LayoutInstall);
    registerComponents(app);
  }
};
