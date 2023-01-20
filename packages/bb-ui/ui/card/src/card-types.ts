import type { PropType, ExtractPropTypes } from 'vue';

type ShadowType = PropType<'always' | 'hover' | 'never'>;

export const cardProps = {
  shadow: {
    type: String as ShadowType,
    default: 'always'
  },
  header: {
    type: String,
    default: ''
  },
  bodyStyle: {
    type: Object,
    default: () => {
      return { padding: '20px' };
    }
  }
} as const;

// 获取 props 类型
export type CardProps = ExtractPropTypes<typeof cardProps>;