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

 
//测试用这套代码

import { defineConfig } from 'vitest/config';

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
}); 

