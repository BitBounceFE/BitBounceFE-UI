/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 10:18:12
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 14:17:47
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\tabs-type.ts
 */
import { PropType, ExtractPropTypes } from 'vue';

export type TabsType = 'card' | 'border-card';
export type TabsPositonType = 'top' | 'right' | 'bottom' | 'left';

export const tabsProps = {
  modelValue: {
    type: String
  },
  type: {
    type: String as PropType<TabsType>,
    default: 'card'
  },
  closable: {
    type: Boolean,
    default: false
  },
  addable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  tabsPosition: {
    type: String as PropType<TabsPositonType>,
    default: 'top'
  },
  stretch: {
    type: Boolean,
    default: false
  }
} as const;

export type TabsProps = ExtractPropTypes<typeof tabsProps>;
