/*
 * @Author: XinyueShu xshuac@connect.hk.ust
 * @Date: 2023-01-23 16:13:53
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-01-23 16:58:06
 * @FilePath: /project/BitBounceFE-UI/packages/bb-ui/ui/progress-component/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import type { App } from 'vue';
// import Card from './src/progress';
import Progress from './src/progress';


// 作为插件引入
Progress.install = function (app: App): void {
  app.component(Progress.name, Progress);
};

// 按需
export { Progress };

// 内部统一注册
export default {
  title: 'Pogress 进度条',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(Progress.name, Progress);
  }
};