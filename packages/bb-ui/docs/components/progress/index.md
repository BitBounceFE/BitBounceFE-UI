<!--
 * @Author: XinyueShu xshuac@connect.hk.ust
 * @Date: 2023-01-23 17:19:32
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-01-29 23:37:22
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
    <!-- <c-card style="margin-bottom: 20px" header="这是标题">
      test
    </c-card> -->
    <!-- <c-progress type = "line":percentage="percentage" :strokeWidth=24  textColor="red"></c-progress> -->
    <c-progress type = "Circle":percentage="percentage" strokeLinecap="butt"></c-progress>
    <button  v-on:click="increase">add</button>
    <button  @click="decrease">  sub</button>

    <c-progress type = "dashboard":percentage="percentage" strokeLinecap="butt"></c-progress>
    
    <!-- <c-progress type = "Circle":percentage=50 strokeLinecap="butt"></c-progress> -->


    <!-- <c-card shadow="hover" style="margin-bottom: 20px" header="这是标题 hover">
      我们终将远行，和过去稚嫩的自己告别。这是一个流行告别的时代，陪你颠沛流离的人越来越少，直至没有。
      我们也要习惯昔日好友的渐行渐远，因为我们终将长大，长大到可以独自一人抵挡风雨。
    </c-card> -->

    <!-- <c-card shadow="never" style="margin-bottom: 20px" header="这是标题 never">
      我们终将远行，和过去稚嫩的自己告别。这是一个流行告别的时代，陪你颠沛流离的人越来越少，直至没有。
      我们也要习惯昔日好友的渐行渐远，因为我们终将长大，长大到可以独自一人抵挡风雨。
    </c-card> -->
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
```

:::
:::demo Card 示例

```vue

<template>
  <div>
    <c-progress type = "line":percentage="percentage" :strokeWidth=24 :textInside=true  textColor="red"></c-progress>
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
```

:::

## c-Progress

c-card 参数

| 参数 | 类型 | 默认 | 说明 |
| ---- | ---- | ---- | ---- |
| header | string |  —    | 卡片的标题 可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 |
| body-style |object| '{ padding: '20px' }'| body 的样式  |
| shadow | string | always | 设置阴影显示时机 always / hover / never  |