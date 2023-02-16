/*
 * @Author: thricefice thricefice@gmail.com
 * @Date: 2023-01-28 21:12:12
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:58:23
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\button\index.ts
 */
import type { App } from 'vue';
import Button from './src/button';

export const BButton = {
  title: 'Button 按钮',
  category: '通用',
  status: '100%',
  install: function (app: App): void {
    app.component(Button.name, Button);
  }
};
export default BButton;
