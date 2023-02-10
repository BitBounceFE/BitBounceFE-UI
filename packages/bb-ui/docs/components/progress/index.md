<!--
 * @Author: XinyueShu xshuac@connect.hk.ust
 * @Date: 2023-01-23 17:19:32
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-02-01 14:55:30
 * @FilePath: /project/BitBounceFE-UI/packages/bb-ui/docs/components/progress/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Progress 进度条

+ 将信息聚合在卡片容器中展示。

## 何时使用

+ 基础卡片容器，其中可包含文字，列表，图片，段落，用于概览展示时。

## 基本用法

:::demo Card 示例

```vue

<template>
  <div>
    <c-progress type = "Circle" :percentage="percentage" strokeLinecap="butt"></c-progress>
    <button  v-on:click="increase">add</button>
    <button  @click="decrease">sub</button>
    <c-progress type = "dashboard" :percentage="percentage" strokeLinecap="butt"></c-progress>
  </div>

</template>

<script>
export default {
  // name: 'progressBar',
   data() {
      return {
        percentage: 50,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
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
  }

</script>

<style lang="scss" scoped>
</style>

:::

## c-Progress

c-card 参数

| 参数 | 类型 | 默认 | 说明 |
| ---- | ---- | ---- | ---- |
| header | string |  —    | 卡片的标题 可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 |
| body-style |object| '{ padding: '20px' }'| body 的样式  |
| shadow | string | always | 设置阴影显示时机 always / hover / never  |