/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:13:58
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-29 11:00:23
 * @FilePath: \bbui\packages\bb-ui\ui\menu\components\sub-menu\sub-menu-types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ExtractPropTypes } from 'vue';

export const subMenuProps = {
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
