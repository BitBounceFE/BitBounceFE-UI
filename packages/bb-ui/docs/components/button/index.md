<!--
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-14 13:27:48
 * @LastEditors: ThreeFire1 thricefice@gmail.com
 * @LastEditTime: 2023-02-14 21:42:04
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\button\index.md
 * @Description: Button doc
-->


# Button 按钮

::: tip

用于执行动作

:::

## 基础用法

使用`type`属性指定button组件样式

:::demo

```vue

<template>
  <div>
    <b-button>Default</b-button>
    <b-button type='primary'>Primary</b-button>
    <b-button type='success'>Success</b-button>
    <b-button type='warning'>Warning</b-button>
    <b-button type='danger'>Danger</b-button>
    <b-button type='info'>Info</b-button>
    <b-button type='text'>Text</b-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return {
      msg: 'button'
    };
  }
};
</script>

<style lang="scss" scoped>
.bbui-button {
  margin-right: 10px;
}
</style>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用button组件

:::demo

```vue
<template>
  <div>
    <b-button disabled={true}>Default </b-button>
    <b-button type='primary' disabled={true}>Primary</b-button>
    <b-button type='success' disabled={true}>Success</b-button>
    <b-button type='warning' disabled={true}>Warning</b-button>
    <b-button type='danger' disabled={true}>Danger</b-button>
    <b-button type='info' disabled={true}>Info</b-button>
    <b-button type='text' disabled={true}>Text</b-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return {
      msg: 'button'
    };
  }
};
</script>

<style lang="scss" scoped>
.bbui-button {
  margin-right: 10px;
}
</style>
```

:::

## 调整尺寸

通过`size`属性指定button组件尺寸大小

:::demo

```vue
<template>
  <div>
    <b-button size='large'>Default</b-button>
    <b-button type='primary' size='large'>Primary</b-button>
    <b-button type='success'>Success</b-button>
    <b-button type='warning'>Warning</b-button>
    <b-button type='danger' size='small'>Danger</b-button>
    <b-button type='info' size='small'>Info</b-button>
    <b-button type='text' size='small'>Text</b-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return {
      msg: 'button'
    };
  }
};
</script>

<style lang="scss" scoped>
.bbui-button {
  margin-right: 10px;
}
</style>
```

:::

## 圆角按钮

通过 `round` 属性指定是否使用button组件圆角样式

:::demo

```vue
<template>
  <div>
    <b-button round={true}>Default</b-button>
    <b-button type='primary' round={true}>Primary</b-button>
    <b-button type='success' round={true}>Success</b-button>
    <b-button type='warning' round={true}>Warning</b-button>
    <b-button type='danger' round={true}>Danger</b-button>
    <b-button type='info' round={true}>Info</b-button>
    <b-button type='text' round={true}>Text</b-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return {
      msg: 'button'
    };
  }
};
</script>

<style lang="scss" scoped>
.bbui-button {
  margin-right: 10px;
}
</style>
```

:::

## 圆形按钮

通过 `circle` 属性指定是否使用button组件圆形样式

:::demo

```vue
<template>
  <div>
    <b-button circle={true}>Default</b-button>
    <b-button type='primary' circle={true}>Primary</b-button>
    <b-button type='success' circle={true}>Success</b-button>
    <b-button type='warning' circle={true}>Warning</b-button>
    <b-button type='danger' circle={true}>Danger</b-button>
    <b-button type='info' circle={true}>Info</b-button>
    <b-button type='text' circle={true}>Text</b-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return {
      msg: 'button'
    };
  }
};
</script>

<style lang="scss" scoped>
.bbui-button {
  margin-right: 10px;
}
</style>
```

:::

## 朴素按钮

通过 `plain` 属性指定是否使用button组件朴素样式

:::demo

```vue
<template>
  <div>
    <b-button plain={true}>Default</b-button>
    <b-button type='primary' plain={true}>Primary</b-button>
    <b-button type='success' plain={true}>Success</b-button>
    <b-button type='warning' plain={true}>Warning</b-button>
    <b-button type='danger' plain={true}>Danger</b-button>
    <b-button type='info' plain={true}>Info</b-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return {
      msg: 'button'
    };
  }
};
</script>

<style lang="scss" scoped>
.bbui-button {
  margin-right: 10px;
}
</style>
```

:::

## API

### 属性

| 属性名        | 说明             | 类型              | 默认值           |
| ------------- | ---------------- | ----------------- | ---------------- |
| type      | 类型         | `primary \| success \| warning \| danger \| info \| text` | —             |
| size      | 尺寸         | `large \| small`         | —          |
| round | 是否为圆角按钮 | `Boolean`         | `false`          |
| circle | 是否为圆形按钮 | `Boolean`         | `false`          |
| plain | 是否为朴素按钮 | `Boolean`         | `false`          |
| disabled | 是否为禁用状态 | `Boolean`         | `false`          |
| autofocus | 原生 autofocus 属性 | `Boolean`         | `false`          |
| native-type | 原生 type 属性 | `button \| submit \| reset` | `button`  |

