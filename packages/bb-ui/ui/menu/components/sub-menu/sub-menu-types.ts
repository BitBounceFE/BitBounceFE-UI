/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:13:58
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-30 17:51:00
 * @FilePath: \bbui\packages\bb-ui\ui\menu\components\sub-menu\sub-menu-types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ExtractPropTypes } from 'vue';

export const subMenuProps = {
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  //  子菜单标题
  title: {
    type: String,
    default: ''
  }
} as const;

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
