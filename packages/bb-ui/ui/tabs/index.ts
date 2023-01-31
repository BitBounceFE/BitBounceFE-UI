/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 10:17:58
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-27 16:31:26
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\index.ts
 * @Description: Tabs 入口文件
 *
 * Copyright (c) 2023 by Xia Yuang xiayuang@foxmail.com, All Rights Reserved.
 */
import type { App } from 'vue';
import Tabs from './src/tabs';

const BTabs = {
  install: function (app: App): void {
    app.component(Tabs.name, Tabs);
  },
  ...Tabs
};

export default BTabs;
export { BTabs };
