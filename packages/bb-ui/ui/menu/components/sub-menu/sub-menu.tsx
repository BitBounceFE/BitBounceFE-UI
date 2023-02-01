/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:14:07
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-30 19:40:53
 * @FilePath: \bbui\packages\bb-ui\ui\menu\components\sub-menu\sub-menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { SubMenuProps, subMenuProps } from './sub-menu-types';
import { useNamespace } from '../../../shared/hooks/use-namespace';
import { defineComponent, computed } from 'vue';

// 设置命名空间
const ns = useNamespace('submenu');

export default defineComponent({
  name: 'BSubMenu',
  props: subMenuProps,
  setup(props: SubMenuProps, ctx) {
    console.log(props);

    const subMenuClass = computed(() => {
      return {
        [`${ns.b()}`]: true
      };
    });

    return () => {
      return (
        <ul class={subMenuClass.value}>
          <div class={`${ns.b()}--title`}>
            <span>{props.title}</span>
          </div>
          <div class={`${ns.m('hor-con')}`}>{ctx.slots.default?.()}</div>
        </ul>
      );
    };
  }
});
