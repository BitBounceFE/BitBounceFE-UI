/*
 * @Author: 周洁钰
 * @Date: 2023-01-20 15:15:58
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-01-31 12:52:41
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\message-box\src\message-box.tsx
 * @Description: message box组件
 */
import type { PropType,  ExtractPropTypes} from 'vue';
export type MessageBoxType = 'success' | 'failed' | 'warning' | 'info' | '';
export const messageBoxProps = {
  // MessageBox
  messageBoxValue: {
    type: Boolean,
    default: false,
  },
  // 弹窗类型
  type: {
    type: String as PropType<MessageBoxType>,
    default: 'normal'
  },
  beforeClose: {
    type: Function,
  },
  // MessageBox 的标题
  title: {
    type: String,
    default: '',
  },
  // 是否展示关闭按钮
  showClose: {
    type: Boolean,
    default: true,
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  // 弹框是否可拖拽
  draggable: {
    type: Boolean,
    default: true
  }
} as const;
export type MessageBoxProps = ExtractPropTypes<typeof messageBoxProps>;

// 事件
export const messageBoxEmits = {
  open: () => true,
  close: () => true,
};
export type MessageBoxEmits = typeof messageBoxEmits;