import type { App } from 'vue';
import Dialog from './src/dialog';

export const BDialog = {
  title: 'Dialog 对话框',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.component(Dialog.name, Dialog);
  }
};
export default BDialog;
