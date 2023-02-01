/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-29 21:09:12
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-01-29 21:30:49
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\input\src\input-types.tsx
 * @Description: sda
 * Copyright (c) 2023 by syk syk@qq.com, All Rights Reserved.
 */
import type { ExtractPropTypes, PropType } from 'vue';
export type InputSize = 'sm' | 'md' | 'lg';
export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'please input'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<InputSize>,
    default: 'md'
  }
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
