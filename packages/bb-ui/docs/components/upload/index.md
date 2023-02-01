<!--
 * @Author: syk syk@qq.com
 * @Date: 2023-01-30 22:49:21
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-01 10:24:12
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\docs\components\upload\index.md
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
  -->

# Upload 文件上传

::: tip

此组件与其他组件库最大的不同是：只处理文件逻辑，业务逻辑不放在此组件处理。

:::





## 基本用法

点击上传后，通过`change`事件来接受文件信息。

:::demo

```vue
<template>
  <div>
    <b-upload @change="change"></b-upload>
  </div>
</template>

<script>
export default {
  name: 'upload',
  methods: {
    change(files) {
      console.log(files);
    }
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## 上传多个文件

通过传递 `multiple`属性来实现多个文件上传

:::demo

```vue
<template>
  <div>
    <b-upload @change="change" :multiple="true"></b-upload>
  </div>
</template>

<script>
export default {
  name: 'upload',
  methods: {
    change(files) {
      console.log(files);
    }
  }
};
</script>

<style lang="scss" scoped></style>
```

:::

## API

### 属性

| 属性名   | 说明                 | 类型    | 默认值 |
| -------- | -------------------- | ------- | ------ |
| multiple | 是否支持多个文件上传 | Boolean | false  |

### 事件

| 事件名 | 说明                                                 | 类型     |
| :----: | ---------------------------------------------------- | -------- |
| change | 当上传文件后，通过change事件第一个参数来接受文件信息 | Function |

