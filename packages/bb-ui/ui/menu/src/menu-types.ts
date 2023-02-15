/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 20:19:11
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 17:58:41
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\menu\src\menu-types.ts
 * @Description: menu 的 prop 参数
 */
import { ExtractPropTypes, PropType } from 'vue';

export type MenuMode = PropType<'horizontal' | 'vertical'>;

export const menuProps = {
  //  横向还是竖直的 menu，默认为竖直
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
  //  是否启用路由模式，默认为 false
  router: {
    type: Boolean,
    default: false
  }
} as const;
export type MenuProps = ExtractPropTypes<typeof menuProps>;
