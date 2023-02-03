/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-30 08:47:02
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-03 12:08:43
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\select\index.ts
 * @Description: 导出
 */
import type { App } from 'vue';
import Select from './src/select';

export const BSelect = {
  title: 'Select 选择框',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Select.name, Select);
  }
};
export default BSelect;
