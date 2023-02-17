<!--
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-02-16 21:37:27
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-02-17 13:12:24
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\message-box\index.md
-->

# MessageBox 信息弹出框

:::tip

MessageBox 信息弹出框组件一般用于消息提示、确认消息。

:::

## 何时使用

起到与用户进行交互的作用，用户可以在 MessageBox 中阅读提示等操作。

## 基本用法

:::demo

```vue
<template>
  <b-button type="warning" @click="visible = true" :plain="true">Click to open the Message Box</b-button>
  <b-message-box
    :v-model="visible"
    v-show="visible"
    :title="header"
    @open="open"
    @close="close"
    :before-close="beforeClose"
    :close-delay="openDelay"
  >
    <span>It will permanently delete the file. Continue?</span>
    <template #footer>
      <span class="message-box-footer">
        <button @click="visible = false">Cancel</button>
        <button @click="visible = false" style="background:#79bbff;color:#fff">
          OK
        </button>
      </span>
    </template>
  </b-message-box>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const header = 'Warning';
    const visible = ref(false);
    const beforeClose = (done) => {
      return setTimeout(() => {
        done();
      }, 1000);
    };
    const openDelay = ref(2000);
    return {
      header,
      visible,
      open,
      close,
      openDelay,
      beforeClose
    };
  }
};
</script>

<style lang="scss" scoped>
.message-box-footer {
  display: flex;
  justify-content: end;
}
.message-box-footer button {
  width: 80px;
  margin: 10px 20px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
}
</style>
```

:::

## API

### 属性

| 属性名      | 类型           | 默认值 | 说明                                                                                           |
| ----------- | -------------- | ------ | ---------------------------------------------------------------------------------------------- |
| v-model     | boolean        | —      | 是否显示 MessageBox                                                                            |
| title       | string         | —      | 标题                                                                                           |
| beforeClose | function(done) | —      | 关闭前的回调，会暂停 MessageBox 的关闭。回调函数内执行 done 参数方法的时候才是真正关闭的时候。 |
| openDelay   | number         | 0      | MessageBox 打开的延时时间，单位毫秒。                                                          |
| closeDelay  | number         | 0      | MessageBox 关闭的延时时间，单位毫秒。                                                          |

### 插槽

| 插槽名 | 说明                  |
| ------ | --------------------- |
| —      | MessageBox 的内容     |
| header | MessageBox 标题的内容 |
| footer | MessageBox 底部的内容 |

### 事件

| 事件名 | 说明                  | 参数 |
| ------ | --------------------- | ---- |
| open   | MessageBox 打开的回调 | —    |
| close  | MessageBox 关闭的回调 | —    |
