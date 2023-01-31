/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-24 15:14:10
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-24 17:57:52
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\row\index.ts
 * @Description: Row 入口文件
 */
import type { App } from 'vue';
import Row from './src/row';

/**
 * @description: 注册全局组件
 * @param {App} app
 * @return {*}
 */
const BRow = {
  install: function (app: App): void {
    app.component(Row.name, Row);
  },
  ...Row
};

export default BRow;
export { BRow };
