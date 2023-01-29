/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-28 19:53:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-29 14:57:52
 * @FilePath: \BB-UI\packages\bb-ui\ui\card\index.ts
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
