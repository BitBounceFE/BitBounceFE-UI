/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-27 21:14:28
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:53:57
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\input\index.ts
 */
import type { App } from 'vue';
import Input from './src/input';

export const BInput = {
  title: 'Input 输入框',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Input.name, Input);
  }
};
export default BInput;
