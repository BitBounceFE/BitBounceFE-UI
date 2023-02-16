/* eslint-disable prettier/prettier */
/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-01-30 13:52:20
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:59:20
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\message-box\index.ts
 */
import type { App } from 'vue';
import MessageBox from './src/message-box';

export const BMessageBox = {
  title: 'MessageBox 弹窗',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.component(MessageBox.name, MessageBox);
  }
};
export default BMessageBox;
