<!--
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:34:00
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-17 11:52:58
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\menu\index.md
-->

# Menu 菜单

:::tip

Menu 菜单组件一般用于导航。

:::

## 何时使用

在需要有规律地展示或者排列一系列的选项时。

## 基本用法

:::demo

```vue
<template>
  <div>
    <b-menu style="margin-bottom: 200px" mode="horizontal" width="400px">
      <b-menu-item>javascript</b-menu-item>
      <b-sub-menu title="java">
        <b-menu-item>c</b-menu-item>
        <b-menu-item>c++</b-menu-item>
        <b-menu-item>c#</b-menu-item>
        <b-sub-menu title="php">
          <b-menu-item>Go</b-menu-item>
        </b-sub-menu>
      </b-sub-menu>
      <b-menu-item disabled>c语言</b-menu-item>
      <b-menu-item>python</b-menu-item>
    </b-menu>
  </div>
</template>
```

:::

## 竖直菜单

:::demo

```vue
<template>
  <div>
    <b-menu style="margin-bottom: 100px" width="200px">
      <b-menu-item>javascript</b-menu-item>
      <b-menu-item>java</b-menu-item>
      <b-menu-item disabled>c语言</b-menu-item>
      <b-menu-item>python</b-menu-item>
    </b-menu>
  </div>
</template>
```

:::

## API

### Menu 属性

| 属性名      | 类型                           | 默认值       | 说明                      |
| ----------- | ------------------------------ | ------------ | ------------------------- |
| width       | string                         | `''`         | 修改菜单的宽度            |
| mode        | `'vertical'` \| `'horizontal'` | `'vertical'` | 设置菜单是横向或者竖直    |
| defaultKeys | array                          | `[]`         | 菜单的默认展开项的 key 值 |

### MenuItem 属性

| 属性名   | 类型    | 默认值 | 说明     |
| -------- | ------- | ------ | -------- |
| disabled | boolean | false  | 是否禁用 |

### subMenu 属性

| 属性名   | 类型    | 默认值 | 说明     |
| -------- | ------- | ------ | -------- |
| disabled | boolean | false  | 是否禁用 |
