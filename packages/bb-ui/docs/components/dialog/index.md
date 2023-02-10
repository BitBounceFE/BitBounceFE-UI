# Dialog 对话框

::: tip

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::

## 何时使用

+ 在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基本用法

:::demo Dialog 示例

```vue

<template>
     <button @click="add">
     click to open the Dialog
    </button>
    <b-dialog  v-model="dialogVisible" :title="header" @open="open" @close="close" >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <button @click="dialogVisible = false">Cancel</button>
        <button @click="dialogVisible = false"> Confirm</button>
      </span>
    </template>
    </b-dialog>


</template>

<script lang="ts"  >
 import { ref,watch,on } from 'vue'
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
    const opened=()=>{
    console.log('opened')
  }
     const closed=()=>{
    console.log('closed')
  }
   const add=()=>{
      dialogVisible.value=true
   }
   const openDelay=ref(1000)
    return {
      header,dialogVisible,open,close,openDelay,add,opened,closed
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
| v-model/model-value | boolean |  —    | 是否显示 Dialog |
| title | string |  —    | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入 |
| width |string / number| 40%| Dialog 的宽度  |
| top | string | 15vh | Dialog CSS 中的 margin-top 值  |
| before-close | Function(done) (done 用来关闭 Dialog) | - | 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候. |
| open-delay | number | 0 | Dialog 打开的延时时间，单位毫秒 |
| close-delay | number | 0 | Dialog 关闭的延时时间，单位毫秒 |
//TODO  test
| fullscreen | boolean | false | 是否为全屏 Dialog |
| modal | boolean | true | 是否为全屏 是否需要遮罩层 |
| close-on-press-escape | boolean | true | 是否可以通过按下 ESC 关闭 Dialog |
| close-on-click-modal | boolean | true | 是否可以通过点击 modal 关闭 Dialog |




#### 注意事项
  如果使用的是 model-value参数,则close-on-press-escape、close-on-click-modal参数生效会无法触发model-value
  参数值的改变.如果想让model-value参数值改变,建议使用v-model或者在标签上添加@update:modelValue="事件名",通过事件
  名进行modelValue值的转变


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
| opened | Dialog 打开动画结束时的回调 |  —    |
| closed | Dialog 关闭动画结束时的回调 |  —    | 
