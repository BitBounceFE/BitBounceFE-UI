/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-24 15:15:15
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-25 09:27:09
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\row\src\row-types.ts
 * @Description: Row Props
 */
import type { PropType, ExtractPropTypes } from 'vue';

export type RowJustifyType =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around';

export type RowAlignType = 'top' | 'middle' | 'bottom';

export const rowProps = {
  /**
   * @description: 自定义元素标签
   */
  tag: {
    type: String,
    default: 'div'
  },
  /**
   * @description: 栅格间隔
   */
  gutter: {
    type: Number,
    default: 0
  },
  /**
   * @description: flex 布局下的水平排列方式
   */
  justify: {
    type: String as PropType<RowJustifyType>,
    default: 'start'
  },
  /**
   * @description: flex 布局下的垂直排列方式
   */
  align: {
    type: String as PropType<RowAlignType>,
    default: 'top'
  }
} as const;

export type RowProps = ExtractPropTypes<typeof rowProps>;
