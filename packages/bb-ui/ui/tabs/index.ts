/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 10:17:58
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-03 12:09:51
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\index.ts
 * @Description: Tabs 入口文件
 *
 * Copyright (c) 2023 by Xia Yuang xiayuang@foxmail.com, All Rights Reserved.
 */
import type { App } from 'vue';
import { NOOP } from '@vue/shared';
import Tabs from './src/tabs';
import TabPane from './src/components/tab-pane/tab-pane';

export const BTabs = {
  title: 'Tabs 选项卡',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(Tabs.name, Tabs);
    app.component(TabPane.name, TabPane);
  }
};
export default BTabs;

export const BTabPane = {
  install: NOOP,
  ...TabPane
};
