/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-27 21:14:28
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-01-29 20:43:36
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\input\index.ts
 * @Description:
 * Copyright (c) 2023 by syk syk@qq.com, All Rights Reserved.
 */
import type { App } from 'vue';
import Input from './src/input.tsx';

// 作为插件引入
Input.install = function (app: App): void {
  app.component(Input.name, Input);
};

// 按需
export { Input };

// 内部统一注册
export default {
  title: 'Input 输入框',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Input.name, Input);
  }
};
