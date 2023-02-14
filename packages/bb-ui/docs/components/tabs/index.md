<!--
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-14 14:19:18
 * @LastEditors: ThreeFire1 thricefice@gmail.com
 * @LastEditTime: 2023-02-14 15:35:50
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\tabs\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Tabs 选项卡

+ 选项卡切换组件。

## 何时使用

+ 用户需要在不同子任务、视图、模式之间切换。

## Tabs基本用法

:::demo Tabs 基本用法

```vue

<template>
  <b-tabs v-model="modelValue" class="tabs">
    <b-tabpane label="Pane-A" name="pane-1">告诉老默，我想吃鱼了。</b-tabpane>
    <b-tabpane label="Pane-B" name="pane-2">什么档次，和我用一样的。</b-tabpane>
    <b-tabpane label="Pane-C" name="pane-3">我是卖鱼的，我对斤两特别敏感。</b-tabpane>
    <b-tabpane label="Pane-D" name="pane-4">弯路下山不减速，莽村有田你记住。</b-tabpane>
  </b-tabs>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const modelValue = ref('pane-1')
    return {
      modelValue
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
```

:::

## Tabs参数

| 参数 | 类型                                    | 默认  | 说明 |
| ---- |---------------------------------------|-----|----|
|  v-model  | string | -   |  绑定值，选中选项卡的 name    |

## Tab参数

| 参数 | 类型                      | 默认  | 说明 |
| --- |-------------------------|-----|---|
|  label  | string | -   | 选项卡标题  |
|   name  | string | -   |   与选项卡绑定值 value 对应的标识符，表示选项卡别名 |