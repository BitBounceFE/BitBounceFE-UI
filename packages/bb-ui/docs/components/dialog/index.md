# Dialog 对话框

+ //TODO

## 何时使用

+ 关闭按钮未完成

## 基本用法

:::demo Dialog 示例

```vue

<template>
     <button @click="dialogVisible=true">
     click to open the Dialog
    </button>
    <b-dialog  :v-model="dialogVisible" :title="header" @open="open" @close="close">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <button @click="dialogVisible = false">Cancel</button>
        <button @click="dialogVisible = false"> Confirm</button>
      </span>
    </template>
    <b-dialog>


</template>

<script lang="ts"  >
 import { ref } from 'vue'
 export default {
  setup(){
  const header='header'
  const dialogVisible = ref(false)
  const open=()=>{
    console.log('open')
  }
   const close=()=>{
    console.log('close')
  }
   const beforeClose=(done)=>{
    return setTimeout(()=>{
      console.log('beforeClose')
      done()
    },1000)
   }
    return {
      header,dialogVisible,open,close
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-footer{
  display:flex;
  justify-content: end;
}
.dialog-footer button{
  width:80px;
  margin:0 10px;
  border:1px solid #454ce1;
  border-radius:2px;
}
</style>
```

:::

## b-dialog

### b-dialog 参数

| 参数 | 类型 | 默认 | 说明 |
| ---- | ---- | ---- | ---- |
| v-model | boolean |  —    | 是否显示 Dialog |
| title | string |  —    | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入 |
| width |string / number| 50%| Dialog 的宽度  |
| top | string | 15vh | Dialog CSS 中的 margin-top 值  |
| before-close | Function(done) (done 用来关闭 Dialog) | - | 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候. |

### b-dialog 插槽

| 插槽名 | 说明 |
| ---- | ---- |
|   — |  Dialog 的内容  |
| header |对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| footer | Dialog 按钮操作区的内容|

### b-dialog 事件

| 事件名 | 说明 | 参数  |
| ---- | ---- | ---- | 
| open | Dialog 打开的回调 |  —    |
| close | Dialog 关闭的回调 |  —    | 
