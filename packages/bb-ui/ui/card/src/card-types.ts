/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-28 19:53:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-29 15:00:26
 * @FilePath: \BB-UI\packages\bb-ui\ui\card\src\card-types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
