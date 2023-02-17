<!--
 * @Author: XinyueShu
 * @Date: 2023-01-23 17:19:32
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-02-17 12:53:54
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\progress\index.md
-->

# Progress 进度条

:::tip

用于展示操作进度，告知用户当前状态。

:::

## 何时使用

- 向用户展示操作进度。
- 当需要显示一个操作完成的百分比或已完成的步骤 / 总步骤时。

## 基本用法

默认类型进度条

:::demo

```vue
<template>
  <div>
    <b-progress :strokeWidth="10" :percentage="30"></b-progress>
    <b-progress
      :strokeWidth="10"
      :percentage="30"
      defineBackColor="green"
    ></b-progress>
    <b-progress
      textColor="red"
      color="yellow"
      :strokeWidth="24"
      :percentage="60"
      :textInside="true"
    ></b-progress>
    <b-progress :percentage="90"></b-progress>
  </div>
</template>
```

:::

## 环形进度条

:::demo

```vue
<template>
  <div>
    <b-progress type="Circle" :strokeWidth="8" :percentage="35"></b-progress>
    <b-progress
      color="green"
      type="Circle"
      :strokeWidth="8"
      :percentage="70"
      strokeLinecap="butt"
    ></b-progress>
  </div>
</template>
```

:::

## 仪表盘

:::demo

```vue
<template>
  <div>
    <b-progress type="dashboard" :strokeWidth="8" :percentage="35"></b-progress>
    <b-progress
      color="green"
      type="dashboard"
      :strokeWidth="8"
      :percentage="70"
      strokeLinecap="butt"
    ></b-progress>
  </div>
</template>
```

:::

## 其他

:::demo

```vue
<template>
  <div>
    <b-progress :percentage="percentage"></b-progress>
    <br />
    <b-progress
      color="yellow"
      type="Circle"
      :strokeWidth="8"
      :percentage="percentage"
    ></b-progress>
    <b-progress
      color="green"
      type="dashboard"
      :strokeWidth="8"
      :percentage="percentage"
      strokeLinecap="butt"
    ></b-progress>
     <b-button type="primary" size="large" @click="increase" :plain=true>+</b-button>
     <b-button type="primary" size="large" @click="decrease" :plain=true>-</b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      percentage: 30
    };
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    }
  }
};
</script>
```

:::

## API

### 属性

| 属性名          | 类型                                  | 默认值    | 说明                                                                  |
| --------------- | ------------------------------------- | --------- | --------------------------------------------------------------------- |
| percentage      | number                                | 0         | 必选，进度条的值最大为 100。                                          |
| type            | `'line'` \| `'dashboard'`\|`'circle'` | `'line'`  | 可选，进度条类型。                                                    |
| strokeWidth     | number                                | 6         | 可选，进度条的宽度。                                                  |
| textInside      | boolean                               | false     | 可选，进度条显示文字内置在进度条内（仅 type 为 line 时可用）。        |
| color           | string                                | `'blue'`  | 可选，进度条的颜色。                                                  |
| width           | number                                | 126       | 可选，环形进度条画布宽度（只在 type 为 Circle 或 dashboard 时可用）。 |
| showText        | boolean                               | true      | 可选，是否显示进度条文字内容。                                        |
| strokeLinecap   | string                                | `'round'` | 可选，circle / dashboard 类型路径两端的形状。                         |
| defineBackcolor | string                                | `'#eee'`  | 可选，进度条的背景颜色。                                              |
| textColor       | string                                | `'black'` | 可选，进度条的字体颜色。                                              |
