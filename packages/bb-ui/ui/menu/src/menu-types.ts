/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 20:19:11
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-28 22:02:49
 * @FilePath: \bbui\packages\bb-ui\ui\menu\src\menu-types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//  menu的prop参数

import { ExtractPropTypes, PropType } from 'vue';

export type MenuMode = PropType<'horizontal' | 'vertical'>;

export const menuProps = {
  //  横向还是竖直的menu，默认为竖直
  mode: {
    type: String as MenuMode,
    default: 'vertical'
  },
  //  宽度
  width: {
    type: String,
    default: ''
  },
  // 竖直模式下是否水平折叠菜单
  collapse: {
    type: Boolean,
    default: true
  },
  // 默认展开的菜单项
  defaultKeys: {
    type: Array,
    default: []
  },
  //  是否启用路由模式，默认为false
  router: {
    type: Boolean,
    default: false
  }
} as const;

export type MenuProps = ExtractPropTypes<typeof menuProps>;
