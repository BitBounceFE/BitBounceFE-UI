# Dialog 对话框

::: tip

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::

## 何时使用

- 在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基本用法

:::demo

```vue
<template>
  <b-button type="primary" @click="add" :plain="true">Click to open the Dialog</b-button>
  <b-dialog
    v-model="dialogVisible"
    :title="header"
    @open="open"
    @close="close"
    :open-delay="openDelay"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <button @click="dialogVisible = false">Cancel</button>
        <button @click="dialogVisible = false">Confirm</button>
      </span>
    </template>
  </b-dialog>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const header = 'header';
    const dialogVisible = ref(false);
    const open = () => {
      console.log('open');
    };
    const close = () => {
      console.log('close');
    };
    const add = () => {
      dialogVisible.value = true;
    };
    const openDelay = ref(1000);
    return {
      header,
      dialogVisible,
      open,
      close,
      openDelay,
      add,
    };
  }
};
</script>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: end;
}
.dialog-footer button {
  width: 80px;
  margin: 0 10px;
  border: 1px solid #454ce1;
  border-radius: 2px;
}
</style>
```

:::

## API

### 属性

| 属性名                | 类型             | 默认值 | 说明                                                                                             |
| --------------------- | ---------------- | ------ | ------------------------------------------------------------------------------------------------ |
| v-model / model-value | boolean          | —      | 是否显示 Dialog                                                                                  |
| title                 | string           | —      | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入                                   |
| width                 | string \| number | 40%    | Dialog 的宽度                                                                                    |
| top                   | string           | 15vh   | Dialog CSS 中的 margin-top 值                                                                    |
| beforeClose           | function(done)   | -      | 关闭前的回调，会暂停 Dialog 的关闭。回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候。 |
| openDelay             | number           | 0      | Dialog 打开的延时时间，单位毫秒。                                                                |
| closeDelay            | number           | 0      | Dialog 关闭的延时时间，单位毫秒。                                                                |
| fullscreen            | boolean          | false  | 是否为全屏                                                                                       |
| modal                 | boolean          | true   | 是否需要遮罩层                                                                                   |
| closeOnPressEscape    | boolean          | true   | 是否可以通过按下 ESC 关闭 Dialog                                                                 |
| closeOnClickModal     | boolean          | true   | 是否可以通过点击 modal 关闭 Dialog                                                               |

:::tip

如果使用的是 model-value 参数，则 close-on-press-escape、close-on-click-modal 参数生效会无法触发 model-value 参数值的改变。如果想让 model-value 参数值改变，建议使用 v-model 或者在标签上添加 @update:modelValue 事件，通过事件进行 modelValue 值的转变。

:::

### 插槽

| 插槽名 | 说明                                                   |
| ------ | ------------------------------------------------------ |
| —      | Dialog 的内容                                          |
| header | 对话框标题的内容；会替换标题部分。                        |
| footer | Dialog 按钮操作区的内容                                |

### 事件

| 事件名 | 参数 | 说明                        |
| ------ | ---- | --------------------------- |
| open   | —    | Dialog 打开的回调           |
| close  | —    | Dialog 关闭的回调           |
| opened | —    | Dialog 打开动画结束时的回调 |
| closed | —    | Dialog 关闭动画结束时的回调 |
