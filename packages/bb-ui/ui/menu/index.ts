/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 19:48:49
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:59:12
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\menu\index.ts
 */
import { App } from 'vue';
import { NOOP } from '@vue/shared';
import Menu from './src/menu';
import MenuItem from './src/components/menu-item/menu-item';
import SubMenu from './src/components/sub-menu/sub-menu';

export const BMenu = {
  title: 'Menu 菜单',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(Menu.name, Menu);
    app.component(MenuItem.name, MenuItem);
    app.component(SubMenu.name, SubMenu);
  }
};
export default BMenu;

export const BMenuItem = {
  install: NOOP,
  ...MenuItem
};
export const BSubMenu = {
  install: NOOP,
  ...SubMenu
};
