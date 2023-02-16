/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-02-03 09:08:37
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:58:58
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\layout\index.ts
 */
import type { App } from 'vue';
import { NOOP } from '@vue/shared';
import Row from './src/components/row/row';
import Col from './src/components/col/col';

export const BLayout = {
  title: 'Layout 布局',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.component(Row.name, Row);
    app.component(Col.name, Col);
  }
};
export default BLayout;

// 子组件不应当单独全局注册
export const BRow = {
  install: NOOP,
  ...Row
};
export const BCol = {
  install: NOOP,
  ...Col
};
