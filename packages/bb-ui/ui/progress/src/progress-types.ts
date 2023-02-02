/*
 * @Author: XinyueShu xshuac@connect.hk.ust
 * @Date: 2023-01-23 16:45:22
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 18:07:07
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\progress\src\progress-types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { PropType, ExtractPropTypes } from 'vue';

type shapeType = PropType<'line' | 'Circle' | 'dashboard'>;
type linecapType = PropType<'round' | 'butt' | 'square'>;
type statusType = PropType<'success' | 'exception' | 'warning'>;

export const progressProps = {
  percentage: {
    type: Number,
    default: 0,
    required: true, // atrribute percentage is required field
    validator: (val) => val >= 0 && val <= 100 // the value of percentage should [0,100]
  },
  type: {
    type: String as shapeType,
    default: 'line',
    validator: (val) => ['line', 'Circle', 'dahsboard'].indexOf(val) > -1
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  textInside: {
    type: Boolean,
    default: false
  },
  status: {
    // not yet finished
    type: String as statusType,
    default: ''
  },
  color: {
    type: String,
    Function,
    Array,
    default: 'rgb(52,137,255)'
  },
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: true
  },
  strokeLinecap: {
    type: String as linecapType,
    default: 'round'
  },
  format: {
    type: Function,
    default() {
      return 'Default function';
    }
  },
  defineBackColor: {
    type: String,
    default: '#eee'
  },
  textColor: {
    type: String,
    default: 'black'
  }
} as const;

// 获取 props 类型
export type ProgressProps = ExtractPropTypes<typeof progressProps>;
