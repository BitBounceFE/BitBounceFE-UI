# select 选择框

::: tip

当选项过多时，使用下拉菜单展示并选择内容。

:::

## 基本使用

传递 `options` 对象，`name` 为显示内容，`value` 为实际输入值。`v-model` 绑定选择的值。

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

传递 `disabled` 属性来禁用 select。

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

通过在 `options` 数组选项中添加 `disabled` 属性，来实现哪些选项禁用。

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

设置 `searchable` 属性来设置是否过滤筛选。

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

## 尺寸

通过设置 `size` 属性来控制大小。

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

## change 事件

向外暴露 `change` 事件，当选择某一选项时触发事件，事件第一个参数为选项 value 值。

:::demo

```vue
<template>
  <div>
    <b-select
      :options="options"
      v-model="msg"
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

## API

### 属性

| 属性名     | 类型             | 默认值  | 说明       |
| ---------- | ---------------- | ------- | ---------- |
| options    | array            | `[]`    | 选项数组   |
| disabled   | boolean          | false   | 是否禁用   |
| searchable | boolean          | false   | 是否可筛选 |
| size       | string           | `'mid'` | 大小       |
| v-model    | string \| number | —       | 选项的值   |

### 事件

| 事件名 | 说明             | 参数  |
| ------ | ---------------- | ----- |
| change | 当选择选项后触发 | value |
