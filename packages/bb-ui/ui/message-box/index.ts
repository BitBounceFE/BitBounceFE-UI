/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-01-30 13:52:20
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-01-31 12:11:00
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\message-box\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App } from 'vue';
import MessageBox from './src/message-box';

// 作为插件引入
MessageBox.install = function (app: App): void {
  app.component(MessageBox.name, MessageBox);
};

export { MessageBox };

export default {
  title: 'MessageBox 弹窗',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.component(MessageBox.name, MessageBox);
  },
};
