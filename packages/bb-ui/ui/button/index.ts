/*
 * @Author: thricefice thricefice@gmail.com
 * @Date: 2023-01-28 21:12:12
 * @LastEditors: thricefice thricefice@gmail.com
 * @LastEditTime: 2023-01-28 22:08:21
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\button\index.ts
 * @Description: button 入口文件
 */

import type { App } from 'vue';
import Button from './src/button';

const BButton = {
  install: function (app: App): void {
    app.component(Button.name, Button);
  },
  ...Button
};

export default BButton;

export { BButton };
