<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-01-30 15:29:15
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-01-31 21:25:08
 * @FilePath: MessageBox文档
-->
# MessageBox 信息弹出框

- MessageBox 信息弹出框组件一般用于消息提示、确认消息。

## 何时使用

- 起到与用户进行交互的作用，用户可以在 MessageBox 中阅读提示等操作。

## 基本用法

:::demo MessageBox 示例
```vue
<template>
     <button @click="visible = true">
      Click to open the Message Box
    </button>
    <b-message-box :v-model="visible" v-show="visible" :title="header" @open="open" @close="close"
     :before-close="beforeClose" :close-delay="openDelay">
      <span>It will permanently delete the file. Continue?</span>
      <template #footer>
        <span class="message-box-footer">
          <button @click="visible = false">Cancel</button>
          <button @click="visible = false" style="background:#79bbff;color:#fff"> OK</button>
        </span>
      </template>
    <b-message-box>
</template>

<script lang="ts">
 import { ref } from 'vue'
 export default {
  setup(){
  const header='Warning'
  const visible = ref(false)
   const beforeClose=(done) => {
    return setTimeout(() => {
      done()
    },1000)
   }
   const openDelay = ref(2000)
    return {
      header,
      visible,
      open,
      close,
      openDelay,
      beforeClose
    }
  }
}
</script>

<style lang="scss" scoped>
.message-box-footer{
  display:flex;
  justify-content: end;
}
.message-box-footer button{
  width:80px;
  margin:10px 20px;
  border:1px solid #dcdfe6;
  border-radius:5px;
}
</style>
```

:::

## b-message-box

message-box 参数

| 参数       | 类型   | 默认                  | 说明                                                                            |
| ---------- | ------ | --------------------- | ------------------------------------------------------------------------------- |
| v-model     | boolean | false                     | 是否显示MessageBox |
| body-style | object | '{ padding: '20px' }' | body 的样式                                                                     |
| shadow     | string | always                | 设置阴影显示时机 always / hover / never                                         |