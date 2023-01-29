/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 15:32:51
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-28 23:01:47
 * @FilePath: \bbui\packages\bb-ui\ui\card\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import type { App } from 'vue';
import Card from './src/card';

// 作为插件引入
Card.install = function (app: App): void {
  app.component(Card.name, Card);
};

// 按需
export { Card };

// 内部统一注册
export default {
  title: 'Card 卡片',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(Card.name, Card);
  }
};
