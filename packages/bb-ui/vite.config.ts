/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-24 09:42:21
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-09 15:37:48
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/*
//开发用这套代码
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';
// 这里
import viteEslint from 'vite-plugin-eslint';
// stylelint插件
import viteStylelint from '@amatlash/vite-plugin-stylelint';
export default defineConfig({
  plugins: [vue(),vueJsx(),viteEslint(),viteStylelint({
    // 对某些文件排除检查
    exclude: /windicss|node_modules/
  })]
})
*/

// 测试用这套代码

import { defineConfig } from 'vitest/config';

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom', // 防止 document 报错 模拟浏览器环境
    transformMode: {
      // 原本 jsx tsx是用 ssr 解析  配置这个属性 则 jsx tsx 用 web 解析
      web: [/.[tj]sx$/]
    }
  }
});
