/*
 * @Author: XinyueShu xshuac@connect.hk.ust
 * @Date: 2023-01-23 16:13:53
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:59:29
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\progress\index.ts
 */
import type { App } from 'vue';
import Progress from './src/progress';

export const BProgress = {
  title: 'Pogress 进度条',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(Progress.name, Progress);
  }
};
export default BProgress;
