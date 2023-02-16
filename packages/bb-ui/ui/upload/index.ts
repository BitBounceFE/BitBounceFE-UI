/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-30 21:37:30
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 14:00:03
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\upload\index.ts
 */
import type { App } from 'vue';
import Upload from './src/upload';

export const BUpload = {
  title: 'Upload 上传文件',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Upload.name, Upload);
  }
};
export default BUpload;
