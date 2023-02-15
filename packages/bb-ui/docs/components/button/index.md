<!--
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-14 13:27:48
 * @LastEditors: ThreeFire1 thricefice@gmail.com
 * @LastEditTime: 2023-02-14 19:53:23
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\docs\components\button\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


# Button 按钮

+ 常用的操作按钮。

## 何时使用

+ 按钮用于执行动作。

## 基本用法

:::demo Button 示例

```vue

<template>
  <p>基本样式</p>
  <div>
    <bbutton>Default</bbutton>
    <b-button type='primary'>Primary</b-button>
    <b-button type='success'>Success</b-button>
    <b-button type='warning'>Warning</b-button>
    <b-button type='danger'>Danger</b-button>
    <b-button type='info'>Info</b-button>
    <b-button type='text'>Text</b-button>
  </div>

  <p>禁用状态</p>
  <div>
    <b-button disabled={true}>Default </b-button>
    <b-button type='primary' disabled={true}>Primary</b-button>
    <b-button type='success' disabled={true}>Success</b-button>
    <b-button type='warning' disabled={true}>Warning</b-button>
    <b-button type='danger' disabled={true}>Danger</b-button>
    <b-button type='info' disabled={true}>Info</b-button>
    <b-button type='text' disabled={true}>Text</b-button>
  </div>

  <p>调整尺寸</p>
  <div>
    <b-button type='success' size='large'>Success</b-button>
    <b-button type='warning'>Warning</b-button>
    <b-button type='danger' size='small'>Danger</b-button>
  </div>

  <p>圆角按钮</p>
  <div>
    <b-button type='success' round={true}>Success</b-button>
    <b-button type='danger' size='small' round={true}>Danger</b-button>
  </div>

  <p>圆形按钮</p>
  <div>
    <b-button type='success' circle={true}>Success</b-button>
    <b-button type='danger' size='small' circle={true}>Danger</b-button>
  </div>

  <p>朴素按钮</p>
  <div>
    <b-button type='primary' plain={true}>Primary</b-button>
    <b-button type='success' plain={true}>Success</b-button>
    <b-button type='warning' plain={true}>Warning</b-button>
    <b-button type='danger' plain={true}>Danger</b-button>
    <b-button type='info' plain={true}>Info</b-button>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {
    return {
      msg: 'Button 按钮'
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
```

:::

## Button参数

| 参数 | 类型                                    | 默认 | 说明 |
| ---- |---------------------------------------| ---- | ---- |
| type | [ButtonType](#buttontype)             | -- | 类型 |
| size | [ButtonSizeType](#buttonsizetype)     | -- | 尺寸 |
| round | boolean                               | false | 是否为圆角按钮 |
| circle | boolean                               | false | 是否为圆形按钮 |
| plain | boolean                               | false | 是否为朴素按钮 |
| disabled | boolean                               | false | 是否为禁用状态 |
| autofocus | boolean                               | false | 原生 autofocus 属性 |
| native-type | [ButtonNativeType](#buttonnativetype) | button | 原生 type 属性 |

## Button类型定义

### ButtonType

```ts
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
```

### ButtonSizeType

```ts
export type ButtonSizeType = 'large' | 'default' | 'small';
```

### ButtonNativeType

```ts
export type ButtonSizeType = 'large' | 'default' | 'small';
```

