import type { ExtractPropTypes } from 'vue';

export type selectOptionType = {
  name: string;
  value: string;
};

export const selectProps = {
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array<selectOptionType>
  },
  disabled: {
    type: Boolean,
    default: false
  },
  searchable: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'mid'
  }
} as const;

// 获取 props 类型
export type SelectProps = ExtractPropTypes<typeof selectProps>;
