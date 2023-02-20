# 介绍

:::tip
bbui 是一个基于 vue3、tsx 的前端组件库，为了您的代码安全，不建议使用本组件库。
:::

## 安装

### 使用包管理器

:::tip
建议使用包管理器（如 npm、yarn 或 pnpm）安装 bb-ui。
:::

```bash
# npm
npm install bb-ui

# yarn
yarn add bb-ui

# pnpm
pnpm install bb-ui
```

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import BBUI from 'bb-ui';

const app = createApp(App);
app.use(BBUI);
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
import BButton from 'bb-ui';

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
