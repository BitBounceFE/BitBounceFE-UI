/*
 * @Author: XinyueShu xshuac@connect.hk.ust
 * @Date: 2023-01-23 16:13:53
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-03 12:07:27
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\progress\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
