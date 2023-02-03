/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:18:18
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 18:00:36
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\menu\components\menu-item\menu-item.tsx
 * @Description: MenuItem 子组件
 */
import { defineComponent, inject, computed, toRefs } from 'vue';

import { useNamespace } from '../../../../shared/hooks/use-namespace';
import {
  MenuContextType,
  menuContextKey
} from '../../../../shared/tokens/index';

import { menuItemProps, MenuItemProps } from './menu-item-types';

export default defineComponent({
  name: 'BMenuItem',
  props: menuItemProps,
  setup(props: MenuItemProps, ctx) {
    const { mode } = inject<MenuContextType>(menuContextKey); // 竖直还是水平模式

    const ns = useNamespace('menu-item');
    //  是否禁用
    const { disabled } = toRefs(props);
    // 计算出根节点的类名
    const menuItemClass = computed(() => {
      return {
        [`${ns.b()}`]: true,
        [`${ns.b()}--disabled`]: disabled.value
      };
    });

    return () => {
      return mode.value === 'horizontal' ? (
        <li class={menuItemClass.value}>
          {/* 等待添加过渡动画 */}
          <span>{ctx.slots.default?.()}</span>
        </li>
      ) : (
        <li class={menuItemClass.value}>
          <span>{ctx.slots.default?.()}</span>
        </li>
      );
    };
  }
});
