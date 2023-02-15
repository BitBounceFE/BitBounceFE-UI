/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-24 15:14:48
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-25 09:30:37
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\col\src\col-types.ts
 * @Description: Col Types
 */
import type { ExtractPropTypes } from 'vue';

export const colProps = {
  // 自定义元素标签
  tag: {
    type: String,
    default: 'div'
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  }
} as const;

export type ColProps = ExtractPropTypes<typeof colProps>;
