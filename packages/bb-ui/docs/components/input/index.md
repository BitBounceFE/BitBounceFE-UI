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

## 基础用法

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

## 事件--change

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

## 事件--focus&blur

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
