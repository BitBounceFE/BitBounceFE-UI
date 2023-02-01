/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-30 08:47:02
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-01 14:46:38
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\select\index.tsx
 * @Description: 导出
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
  
 */

import type { App } from 'vue';
import Select from './src/select';

// 作为插件引入
Select.install = function (app: App): void {
  app.component(Select.name, Select);
};

// 按需
export { Select };

// 内部统一注册
export default {
  title: 'Select  选择框',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Select.name, Select);
  }
};
