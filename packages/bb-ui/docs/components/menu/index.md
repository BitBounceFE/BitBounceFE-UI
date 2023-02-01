<!--
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:34:00
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-30 20:01:30
 * @FilePath: \bbui\packages\bb-ui\docs\components\menu\menu.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Menu 菜单

- Menu 菜单组件一般用于导航。

## 何时使用

- 在需要有规律地展示或者排列一系列的选项时。

## 基本用法

:::demo Menu 示例

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

## b-menu

menu 参数

| 参数         | 类型                    | 默认       | 说明                      |
| ------------ | ----------------------- | ---------- | ------------------------- |
| width        | string                  | ''         | 修改菜单的宽度            |
| mode         | 'vertical','horizontal' | 'vertical' | 设置菜单是横向或者竖直    |
| default-keys | Array                   | []         | 菜单的默认展开项的 key 值 |
