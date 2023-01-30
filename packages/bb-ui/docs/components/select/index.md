## 基本使用

:::demo

```vue
<template>
  <div>
    <b-select :options="options" v-model="msg"></b-select>
    msg:{{ msg }}
  </div>
</template>

<script>
export default {
  name: 'selectBox',
  data() {
    return {
      options: [
        {
          name: '第一个数字值',
          value: '1234444'
        },
        {
          name: '第二个数字值',
          value: '453336'
        }
      ],
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
    <b-select :options="options" v-model="msg" :disabled="true"></b-select>
    msg:{{ msg }}
  </div>
</template>

<script>
export default {
  name: 'selectBox',
  data() {
    return {
      options: [
        {
          name: '第一个数字值',
          value: '1234444'
        },
        {
          name: '第二个数字值',
          value: '453336'
        }
      ],
      msg: ''
    };
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 禁用选项

:::demo

```vue
<template>
  <div>
    <b-select :options="options" v-model="msg"></b-select>
    msg:{{ msg }}
  </div>
</template>

<script>
export default {
  name: 'selectBox',
  data() {
    return {
      options: [
        {
          name: '第一个数字值',
          value: '1234444'
        },
        {
          name: '第二个数字值',
          value: '453336',
          disabled: true
        },
        {
          name: 'jack',
          value: '123'
        },
        {
          name: 'marry',
          value: '999'
        },
        {
          name: 'messy',
          value: '666'
        }
      ],
      msg: ''
    };
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 过滤筛选

:::demo

```vue
<template>
  <div>
    <b-select :options="options" v-model="msg" :searchable="true"></b-select>
    msg:{{ msg }}
  </div>
</template>

<script>
export default {
  name: 'selectBox',
  data() {
    return {
      options: [
        {
          name: '第一个数字值',
          value: '1234444'
        },
        {
          name: '第二个数字值',
          value: '453336',
          disabled: true
        },
        {
          name: 'jack',
          value: '123'
        },
        {
          name: 'marry',
          value: '999'
        },
        {
          name: 'messy',
          value: '666'
        }
      ],
      msg: ''
    };
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 尺寸 事件暴露

:::demo

```vue
<template>
  <div>
    <b-select
      :options="options"
      v-model="msg"
      size="big"
      @change="handleChange"
    ></b-select>
    msg:{{ msg }}
  </div>
</template>

<script>
export default {
  name: 'selectBox',
  data() {
    return {
      options: [
        {
          name: '第一个数字值',
          value: '1234444'
        },
        {
          name: '第二个数字值',
          value: '453336',
          disabled: true
        },
        {
          name: 'jack',
          value: '123'
        },
        {
          name: 'marry',
          value: '999'
        },
        {
          name: 'messy',
          value: '666'
        }
      ],
      msg: ''
    };
  },
  methods: {
    handleChange(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped></style>
```

:::
