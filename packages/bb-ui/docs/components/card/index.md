<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-24 09:42:21
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-26 18:58:27
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\card\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%Ad
-->

# Card 卡片

+ 将信息聚合在卡片容器中展示。

## 何时使用

+ 基础卡片容器，其中可包含文字，列表，图片，段落，用于概览展示时。

## 基本用法

:::demo Card 示例

```vue

<template>
  <div>
    <b-card style="margin-bottom: 20px" header="这是标题">
      我们终将远行，和过去稚嫩的自己告别。这是一个流行告别的时代，陪你颠沛流离的人越来越少，直至没有。
      我们也要习惯昔日好友的渐行渐远，因为我们终将长大，长大到可以独自一人抵挡风雨。
    </b-card>

    <b-card shadow="hover" style="margin-bottom: 20px" header="这是标题 hover">
      我们终将远行，和过去稚嫩的自己告别。这是一个流行告别的时代，陪你颠沛流离的人越来越少，直至没有。
      我们也要习惯昔日好友的渐行渐远，因为我们终将长大，长大到可以独自一人抵挡风雨。
    </b-card>

    <b-card shadow="never" style="margin-bottom: 20px" header="这是标题 never">
      我们终将远行，和过去稚嫩的自己告别。这是一个流行告别的时代，陪你颠沛流离的人越来越少，直至没有。
      我们也要习惯昔日好友的渐行渐远，因为我们终将长大，长大到可以独自一人抵挡风雨。
    </b-card>
  </div>

</template>

<script>
export default {
  name: 'cardBox'
};
</script>

<style lang="scss" scoped>
</style>
```

:::

## c-card

c-card 参数

| 参数 | 类型 | 默认 | 说明 |
| ---- | ---- | ---- | ---- |
| header | string |  —    | 卡片的标题 可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 |
| body-style |object| '{ padding: '20px' }'| body 的样式  |
| shadow | string | always | 设置阴影显示时机 always / hover / never  |