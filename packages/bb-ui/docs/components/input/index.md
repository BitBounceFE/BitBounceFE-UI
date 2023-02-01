<!--
 * @Author: syk syk@qq.com
 * @Date: 2023-01-28 20:58:43
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-01-29 20:33:33
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\docs\components\input\index.md
 * @Description:
 *
 * Copyright (c) 2023 by syk syk@qq.com, All Rights Reserved.
-->



# Input 输入框

::: tip

通过鼠标或键盘输入字符

:::

## 基础用法

采用v-model实现数据的双向绑定。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg"></B-input>
    msg:{{ msg }}
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
    msg:{{ msg }}
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

使用`show-password`来控制是否选择密码框。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" show-password></B-input>
    msg:{{ msg }}
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

通过传递size属性，来控制input的大小。除了默认大小，还有`mid`和`lg`类型

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" size="lg"></B-input>
    msg:{{ msg }}
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

通过`placeholder`属性来给input框提示信息

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" placeholder="i am message"></B-input>
    msg:{{ msg }}
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

## 事件-change

向外提供一个`change`事件，参数为input的值

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" size="lg" @change="func"></B-input>
    msg:{{ msg }}
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

## 事件-focus&blur

向外提供`focus`事件和`blur`事件，触发时刻在光标聚焦和失焦时刻。

:::demo

```vue
<template>
  <div>
    <B-input v-model="msg" size="lg" @blur="func1" @focus="func2"></B-input>
    事件触发信息：{{ msg }}
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

| 属性名        | 说明             | 类型              | 默认值           |
| ------------- | ---------------- | ----------------- | ---------------- |
| v-model       | 绑定值           | `String`|`Number` | `""`             |
| disabled      | 是否禁用         | `Boolean`         | `false`          |
| show-password | 是否为展示密码框 | `Boolean`         | `false`          |
| size          | 尺寸大小         | `sm`|`lg`|`md`    | `md`             |
| placeholder   | 提示信息         | `String`          | `"please input"` |

### 事件

| 事件名 | 说明                                                 | 类型       |
| ------ | ---------------------------------------------------- | ---------- |
| change | 当 modelValue 改变时触发，第一个函数参数为modelValue | `Function` |
| focus  | 当选择器的输入框获得焦点时触发                       | `Function` |
| blur   | 当选择器的输入框失去焦点时触发                       | `Function` |

