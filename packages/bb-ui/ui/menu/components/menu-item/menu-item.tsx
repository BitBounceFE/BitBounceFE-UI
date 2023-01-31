/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:18:18
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-29 14:56:24
 * @FilePath: \bbui\packages\bb-ui\ui\menu\components\menu-item\menu-item.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineComponent, inject, Ref, computed } from 'vue';
import { menuItemProps, MenuItemProps } from './menu-item-types';
import { useNamespace } from '../../../shared/hooks/use-namespace';

const ns = useNamespace('menu-item');

export default defineComponent({
  name: 'BMenuItem',
  props: menuItemProps,
  setup(props: MenuItemProps, ctx) {
    //  竖直还是水平模式，使用Ref定义防止.value报错
    const mode = inject('mode') as Ref<'vertical' | 'horizontal'>;

    // 计算出根节点的类名
    const menuItemClass = computed(() => {
      return {
        [`${ns.b()}`]: true
      };
    });
    return () => {
      return mode.value === 'horizontal' ? (
        <li class={menuItemClass.value}>
          {/* 等待添加过渡动画 */}
          <span>{ctx.slots.default?.()}</span>
        </li>
      ) : (
        <div></div>
      );
    };
  }
});
