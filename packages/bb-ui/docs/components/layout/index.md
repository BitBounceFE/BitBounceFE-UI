<!--
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-14 18:13:32
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-17 11:51:59
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\layout\index.md
-->

# Layout 布局

:::tip

定义了界面的视觉结构。

:::

## 基本用法

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，以及 col 组件的 `span` 属性我们就可以自由地组合布局。

:::demo

```vue
<template>
  <b-row>
    <b-col :span="24">
      <div class="col-content" style="background-color: gray;"></div>
    </b-col>
  </b-row>
  <b-row>
    <b-col :span="12">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="12">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
  </b-row>
  <b-row>
    <b-col :span="8">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="8">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="8">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
  </b-row>
  <b-row>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.bbui-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}
.bbui-col {
  border-radius: 4px;
}

.col-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

## 分栏间隔

行提供 `gutter` 属性来指定列之间的间距，其默认值为 0。

:::demo

```vue
<template>
  <b-row :gutter="20">
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
</template>
```

:::

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

:::demo

```vue
<template>
  <b-row :gutter="20">
    <b-col :span="16">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="8">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row :gutter="20">
    <b-col :span="8">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="8">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row :gutter="20">
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="16">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="4">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
</template>
```

:::

## 列偏移

通过指定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

:::demo

```vue
<template>
  <b-row :gutter="20">
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6" :offset="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row :gutter="20">
    <b-col :span="6" :offset="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6" :offset="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row :gutter="20">
    <b-col :span="12" :offset="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
</template>
```

:::

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

可以通过 `justify` 属性来定义子元素的排版方式，其取值包括 start、center、end、space-between、space-around。

:::demo

```vue
<template>
  <b-row class="row-bg" justify="start">
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row class="row-bg" justify="center">
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row class="row-bg" justify="end">
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row class="row-bg" justify="space-between">
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
  <b-row class="row-bg" justify="space-around">
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSkyBlue;"></div>
    </b-col>
    <b-col :span="6">
      <div class="col-content" style="background-color: LightSteelBlue;"></div>
    </b-col>
  </b-row>
</template>
```

:::

## API

### Row 属性

| 属性名  | 类型                                                                        | 默认值    | 说明           |
| ------- | --------------------------------------------------------------------------- | --------- | -------------- |
| gutter  | number                                                                      | 0         | 栅格间隔       |
| justify | `'center'` \| `'start'` \| `'end'` \| `'space-between'` \| `'space-around'` | `'start'` | 水平排列方式   |
| align   | `'top'` \|` 'middle'` \| `'bottom'`                                         | `'top'`   | 垂直排列方式   |
| tag     | string                                                                      | `'div'`   | 自定义元素标签 |

### Col 属性

| 参数   | 类型   | 默认    | 说明               |
| ------ | ------ | ------- | ------------------ |
| span   | number | 24      | 栅格占据的列数     |
| offset | number | 0       | 栅格左侧的间隔格数 |
| push   | number | 0       | 栅格向右移动格数   |
| pull   | number | 0       | 栅格向左移动格数   |
| tag    | string | `'div'` | 自定义元素标签     |
