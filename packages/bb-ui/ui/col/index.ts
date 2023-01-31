/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-24 15:14:05
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-25 10:26:42
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\col\index.ts
 * @Description: Col 入口文件
 */
import type { App } from 'vue';
import Col from './src/col';

/**
 * @description: 注册全局组件
 * @param {App} app
 * @return {*}
 */
const BCol = {
  install: function (app: App): void {
    app.component(Col.name, Col);
  },
  ...Col
};

export default BCol;
export { BCol };
