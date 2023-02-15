<!--
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-14 18:13:32
 * @LastEditors: ThreeFire1 thricefice@gmail.com
 * @LastEditTime: 2023-02-14 19:27:39
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\layout\index.md
 * @Description: Layout doc
-->

# Layout 布局

+ 定义了界面的视觉结构。

## 何时使用

+ 创建基础网格布局。

## 基本用法

:::demo Layout 示例

```vue

<template>
  <p>基本布局</p>
  <div>
    <b-row>
    <b-col :span="24"><div style="background-color:gray">Layout</div></b-col>
    </b-row>
  <b-row>
    <b-col :span="12"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="12"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
  </b-row>
  <b-row>
    <b-col :span="8"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="8"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
    <b-col :span="8"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
  </b-row>
  <b-row>
    <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="6"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
    <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="6"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
  </b-row>
  <b-row>
    <b-col :span="4"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="4"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
    <b-col :span="4"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="4"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
    <b-col :span="4"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="4"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
  </b-row>
  </div>

  <p>分栏间隔</p>
  <div>
    <b-row :gutter="20">
    <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
  </b-row>
  </div> 

  <p>混合布局</p>
  <div>
    <b-row :gutter="20">
        <b-col :span="16"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="8"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
    <b-row :gutter="20">
        <b-col :span="8"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="8"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="4"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="4"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
    <b-row :gutter="20">
        <b-col :span="4"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="16"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="4"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
  </div> 

  <p>列偏移</p>
  <div>
    <b-row :gutter="20">
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="6" :offset="6"
        ><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
    <b-row :gutter="20">
        <b-col :span="6" :offset="6"
        ><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="6" :offset="6"
        ><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
    <b-row :gutter="20">
        <b-col :span="12" :offset="6"
        ><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
  </div> 

  <p>对齐方式</p>
  <div>
    <b-row class="row-bg">
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
    <b-row class="row-bg" justify="center">
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
    <b-row class="row-bg" justify="end">
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
    <b-row class="row-bg" justify="space-between">
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
    <b-row class="row-bg" justify="space-around">
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSkyBlue  ">Layout</div></b-col>
        <b-col :span="6"><div style="background-color:LightSteelBlue ">Layout</div></b-col>
    </b-row>
  </div> 
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {
  }
})
</script>

<style lang="scss" scoped>
</style>
```

:::

## Row参数

| 参数 | 类型                                    | 默认 | 说明 |
| ---- |---------------------------------------| ---- | ---- |
| gutter |  number                           | 0 | 栅格间隔 |
| justify | [RowJustifyType](#rowjustifytype)| start | 水平排列方式 |
| align | [RowAlignType](#rowaligntype)      | top | 垂直排列方式 |
| tag | string                               | div | 自定义元素标签 |

## Row类型定义

### RowType

```ts
export type RowJustifyType =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around';
```
```ts
export type RowAlignType = 'top' | 'middle' | 'bottom';
```

## Col参数

| 参数 | 类型                                    | 默认 | 说明 |
| ---- |---------------------------------------| ---- | ---- |
| span |  number  | 24 | 栅格占据的列数 |
| offset | number | 0 | 栅格左侧的间隔格数 |
| push | number   | 0 | 栅格向右移动格数 |
| pull | number   | 0 | 栅格向左移动格数 |
| tag | string    | div | 自定义元素标签 |

