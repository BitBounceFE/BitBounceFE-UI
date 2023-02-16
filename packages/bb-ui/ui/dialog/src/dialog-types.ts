import type { ExtractPropTypes } from 'vue';

export const dialogProps = {
  vModel: {
    type: Boolean,
    default: undefined
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  },
  width: {
    type: [Number, String],
    default: '40%'
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: Function
  },
  top: {
    type: String,
    default: '15vh'
  },
  modal: {
    type: Boolean,
    default: true
  },
  appendToBody: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  alignCenter: {
    type: Boolean,
    default: false
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  }
};
// 获取 props 类型
export type DialogProps = ExtractPropTypes<typeof dialogProps>;

// 事件
export const dialogEmits = {
  open: () => true,
  close: () => true,
  opened: () => true,
  closed: () => true,
  openAutoFocus: () => true,
  closeAutoFocus: () => true,
  'update:modelValue': (e: boolean) => true
};
export type DialogEmits = typeof dialogEmits;
