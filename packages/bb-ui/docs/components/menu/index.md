<!--
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:34:00
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-29 16:30:18
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
    <b-menu style="margin-bottom: 100px" mode="horizontal">
      <b-menu-item>首页</b-menu-item>
      <b-menu-item>java</b-menu-item>
      <b-menu-item>c语言</b-menu-item>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: 'MenuBox'
};
</script>

<style lang="scss" scoped></style>
```

:::

## b-menu

menu 参数

| 参数       | 类型   | 默认                  | 说明                                                                            |
| ---------- | ------ | --------------------- | ------------------------------------------------------------------------------- |
| header     | string | —                     | 卡片的标题 可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 |
| body-style | object | '{ padding: '20px' }' | body 的样式                                                                     |
| shadow     | string | always                | 设置阴影显示时机 always / hover / never                                         |
