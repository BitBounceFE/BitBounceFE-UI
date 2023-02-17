<!--
 * @Author: syk syk@qq.com
 * @Date: 2023-01-28 20:58:43
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-17 11:57:23
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\input\index.md
-->

# Input 输入框

::: tip

通过鼠标或键盘输入字符。

:::

## 基础用法

采用 v-model 实现数据的双向绑定。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg"></B-input>
    <br />
    输入内容：{{ msg || '未输入内容' }}
  </div>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      msg: ''
    };
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" :disabled="true"></B-input>
    <br />
    输入内容：{{ msg || '未输入内容' }}
  </div>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      msg: '',
      disabled1: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 密码框

使用 `show-password` 来控制是否选择密码框。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" show-password></B-input>
    <br />
    输入内容：{{ msg || '未输入内容' }}
  </div>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      msg: '',
      disabled1: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 尺寸

通过传递 `size` 属性，来控制 input 的大小。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" size="lg"></B-input>
    <br />
    输入内容：{{ msg || '未输入内容' }}
  </div>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      msg: ''
    };
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 提示信息

通过 `placeholder` 属性来给 input 框提示信息。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" placeholder="i am message"></B-input>
    <br />
    输入内容：{{ msg || '未输入内容' }}
  </div>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      msg: ''
    };
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 事件——输入变化

向外提供一个 `change` 事件，参数为 input 的值。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" size="lg" @change="func"></B-input>
    <br />
    输入内容：{{ msg || '未输入内容' }}
  </div>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      msg: ''
    };
  },
  methods: {
    func(value) {
      console.log(value);
      this.msg = value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 事件——焦点变化

向外提供 `focus` 事件和 `blur` 事件，触发时刻在光标聚焦和失焦时刻。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" size="lg" @blur="func1" @focus="func2"></B-input>
    事件触发信息：{{ msg || '未输入内容' }}
  </div>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      msg: ''
    };
  },
  methods: {
    func1(e) {
      console.log(e);
      this.msg = '失去';
    },
    func2(e) {
      console.log(e);
      this.msg = '获取';
    }
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## API

### 属性

| 属性名        | 类型             | 默认值           | 说明             |
| ------------- | ---------------- | ---------------- | ---------------- |
| v-model       | string           | `''`             | 绑定值           |
| disabled      | boolean          | false            | 是否禁用         |
| show-password | boolean          | false            | 是否为展示密码框 |
| size          | `'sm'` \| `'lg'` | —                | 尺寸大小         |
| placeholder   | string           | `'please input'` | 提示信息         |

### 事件

| 事件名 | 说明                           | 参数  |
| ------ | ------------------------------ | ----- |
| change | 当输入值改变时触发             | value |
| focus  | 当选择器的输入框获得焦点时触发 | —     |
| blur   | 当选择器的输入框失去焦点时触发 | —     |
