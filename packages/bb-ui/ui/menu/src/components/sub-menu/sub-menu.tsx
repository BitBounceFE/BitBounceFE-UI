/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 22:14:07
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 18:02:03
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\menu\components\sub-menu\sub-menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, computed } from 'vue';

import { useNamespace } from '../../../../shared/hooks/use-namespace';

import { SubMenuProps, subMenuProps } from './sub-menu-types';

export default defineComponent({
  name: 'BSubMenu',
  props: subMenuProps,
  setup(props: SubMenuProps, ctx) {
    // 设置命名空间
    const ns = useNamespace('submenu');
    const subMenuClass = computed(() => {
      return {
        [`${ns.b()}`]: true,
        [`${ns.m('hor-con-hidden')}`]: true
      };
    });

    return () => {
      return (
        <div>
          <ul class={subMenuClass.value}>
            <div class={`${ns.b()}--title`}>
              <span>{props.title}</span>
            </div>
            <div class={`${ns.m('hor-con')}`}>{ctx.slots.default?.()}</div>
          </ul>
        </div>
      );
    };
  }
});
