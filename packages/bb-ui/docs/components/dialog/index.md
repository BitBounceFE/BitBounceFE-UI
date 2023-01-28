# Dialog 对话框

+ //TODO

## 何时使用

+ //TODO

## 基本用法

:::demo Dialog 示例

```vue

<template>
     <button @click="dialogVisible=true">
     click to open the Dialog
    </button>
    <b-dialog  :vModel="dialogVisible" :title="header">
      
      <span>This is a message</span>

    <template #footer>
      <span class="dialog-footer">
        <button @click="dialogVisible = false">Cancel</button>
        <button @click="dialogVisible = false"> Confirm</button>
      </span>
    </template>
    <b-dialog>


</template>

<script lang="ts" >
 import { ref } from 'vue'
 export default {
  setup(){
  const header='header'
  const dialogVisible = ref(false)
    return {
      header,dialogVisible
    }
  }
}


</script>

<style lang="scss" scoped>
</style>
```

:::

## b-dialog

c-card 参数

| 参数 | 类型 | 默认 | 说明 |
| ---- | ---- | ---- | ---- |
| header | string |  —    | 卡片的标题 可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 |
| body-style |object| '{ padding: '20px' }'| body 的样式  |
| shadow | string | always | 设置阴影显示时机 always / hover / never  |