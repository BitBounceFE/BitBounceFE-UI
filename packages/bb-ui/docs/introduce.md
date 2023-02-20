<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-20 20:41:45
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-02-20 22:43:00
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\introduce.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 介绍

:::tip
BitBounce-UI 是一个基于 vue3、tsx 的前端组件库，为了您的代码安全，不建议使用本组件库。
:::

## 安装

### 使用包管理器

:::tip
建议使用包管理器（如 npm、yarn 或 pnpm）安装 bitbouncefe-ui。
:::

```bash
# npm
npm install bitbouncefe-ui

# yarn
yarn add bitbouncefe-ui

# pnpm
pnpm install bitbouncefe-ui
```

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import bbui from 'bitbouncefe-ui';
import 'bitbouncefe-ui/style.css';

const app = createApp(App);
app.use(bbui);
app.mount('#app');
```

```vue
<template>
  <!-- 使用 Button 组件 -->
  <b-button>测试</b-button>
</template>
```

### 按需引入

此外，可以单个组件按需引入。

#### 手动引入

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import BButton from 'bitbouncefe-ui';

const app = createApp(App);
app.use(Button);
app.mount('#app');
```

```vue
<template>
  <!-- 使用 Button 组件 -->
  <b-button>测试</b-button>
</template>
```
