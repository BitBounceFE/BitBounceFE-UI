/*
 * @Author: thricefice thricefice@gmail.com
 * @Date: 2023-01-28 21:12:12
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 14:00:27
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\button\src\button-types.ts
 */
import type { PropType, ExtractPropTypes } from 'vue';

export type ButtonType =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'text';
export type ButtonSizeType = 'large' | 'default' | 'small';
export type ButtonNativeType = 'button' | 'submit' | 'reset';

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: ''
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button'
  }
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
