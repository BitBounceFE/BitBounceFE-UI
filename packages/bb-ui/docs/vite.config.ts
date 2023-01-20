/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 22:07:48
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-16 23:22:10
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//开发用这套代码
import { defineConfig } from 'vite'

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';
// 这里
export default defineConfig({
  plugins: [vueJsx()],
  server:{
    port:3000
  }
})
