/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 22:13:21
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-01-23 17:16:03
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\.vitepress\theme\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Theme from "vitepress/theme";
import "./styles/index.scss";
import "vitepress-theme-demoblock/theme/styles/index.css";
import { registerComponents } from "./register-components.js";
// 引入组件 注册
import CardInstall from "../../../ui/card/index";
import ProgreInstall from "../../../ui/progress-component/index";
// 引入组件 注册
export default {
  ...Theme,
  enhanceApp({ app }) {
    //  注册组件
    app.use(CardInstall);
    app.use(ProgreInstall);
    registerComponents(app);
  },
};