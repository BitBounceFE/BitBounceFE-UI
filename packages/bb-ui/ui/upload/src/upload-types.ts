import type { ExtractPropTypes } from 'vue';

export const uploadProps = {
  multiple: {
    type: Boolean,
    default: false
  }
} as const;

// 获取 props 类型
export type UploadProps = ExtractPropTypes<typeof uploadProps>;
