<!--
 * @Author: syk syk@qq.com
 * @Date: 2023-01-30 22:49:21
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-01-30 23:18:37
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\docs\components\upload\index.md
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->

## 基本用法

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
