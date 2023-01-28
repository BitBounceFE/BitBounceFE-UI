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
