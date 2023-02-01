/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-30 21:37:30
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-01 14:19:15
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\upload\index.ts
 * @Description: upload上传组件
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 

 */

import type { App } from 'vue';
import Upload from './src/upload';

// 作为插件引入
Upload.install = function (app: App): void {
  app.component(Upload.name, Upload);
};

// 按需
export { Upload };

// 内部统一注册
export default {
  title: 'upload 上传文件',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Upload.name, Upload);
  }
};
