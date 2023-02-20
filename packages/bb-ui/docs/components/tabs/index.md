<!--
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-14 14:19:18
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-17 11:55:37
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\tabs\index.md
-->

# Tabs 选项卡

:::tip

选项卡切换组件。

:::

## 何时使用

用户需要在不同子任务、视图、模式之间切换。

## 基本用法

Tabs 组件提供了选项卡功能， 默认选中第一个标签页，也可以通过 value 属性来指定当前选中的标签页。

:::demo

```vue
<template>
  <b-tabs v-model="modelValue">
    <b-tab-pane label="Pane-A" name="pane-1">告诉老默，我想吃鱼了。</b-tab-pane>
    <b-tab-pane label="Pane-B" name="pane-2">
      什么档次，和我用一样的。
    </b-tab-pane>
    <b-tab-pane label="Pane-C" name="pane-3">
      我是卖鱼的，我对斤两特别敏感。
    </b-tab-pane>
    <b-tab-pane label="Pane-D" name="pane-4">
      弯路下山不减速，莽村有田你记住。
    </b-tab-pane>
  </b-tabs>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const modelValue = ref('pane-2');

    return {
      modelValue
    };
  }
};
</script>
```

:::

## Tabs 参数

| 参数    | 说明                          | 类型   | 默认值 |
| ------- | ----------------------------- | ------ | ------ |
| v-model | 绑定值，选中选项卡的 `name`。 | string | —      |

## Tab 参数

| 参数  | 类型   | 默认 | 说明                                                |
| ----- | ------ | ---- | --------------------------------------------------- |
| label | string | —    | 选项卡标题                                          |
| name  | string | —    | 与选项卡绑定值 value 对应的标识符，表示选项卡别名。 |
