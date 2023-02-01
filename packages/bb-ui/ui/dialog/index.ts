import type { App } from 'vue';
import Dialog from './src/dialog';

// 作为插件引入
Dialog.install = function (app: App): void {
  app.component(Dialog.name, Dialog);
};

// 按需
export { Dialog };

// 内部统一注册
export default {
  title: 'Dialog 对话框',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.component(Dialog.name, Dialog);
  }
};