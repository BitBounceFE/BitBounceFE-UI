/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 19:48:49
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-29 15:06:01
 * @FilePath: \bbui\packages\bb-ui\ui\menu\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Menu from './src/menu';
import MenuItem from './components/menu-item/menu-item';
import SubMenu from './components/sub-menu/sub-menu';
import { App } from 'vue';
// 按需导出
export { Menu };

export default {
  title: 'Menu菜单',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(Menu.name, Menu);
    app.component(MenuItem.name, MenuItem);
    app.component(SubMenu.name, SubMenu);
  }
};
