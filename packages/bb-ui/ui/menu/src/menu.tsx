/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 20:18:58
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 17:59:07
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\menu\src\menu.tsx
 * @Description: Menu 组件
 */
import { computed, defineComponent, onMounted, provide, toRefs } from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';
import { MenuContextType, menuContextKey } from '../../shared/tokens/index';

import { menuProps, MenuProps } from './menu-types';
import './menu.scss';

export default defineComponent({
  name: 'BMenu',
  props: menuProps,
  setup(props: MenuProps, { slots }) {
    // 利用 toRefs 解构
    const { mode, collapse, defaultKeys } = toRefs(props);
    console.log(defaultKeys);

    // 使用 provide 提供属性
    provide<MenuContextType>(menuContextKey, {
      mode, // 是否垂直
      isCollapsed: collapse // 是否折叠
    });
    // 使用 provide 提供 mode 属性（是否垂直）
    provide('mode', mode);
    // 是否折叠
    provide('isCollapsed', props.collapse);

    // 计算出根节点的class
    const ns = useNamespace('menu');
    const menuClassName = computed(() => {
      return {
        //  基础 class
        [`${ns.b()}`]: true,
        // 竖直的class
        [`${ns.e('vertical')}`]: mode.value === 'vertical',
        // 横向的class
        [`${ns.e('horizontal')}`]: mode.value === 'horizontal',
        // 是否折叠,默认为false
        [`${ns.e('collapse')}`]: collapse.value
      };
    });

    //  挂载时添加鼠标进入的时间
    onMounted(() => {
      if (props.mode === 'horizontal') {
        const subElement = document.querySelectorAll('.bbui-submenu');
        console.log(subElement);
        subElement.forEach((item) => {
          item.addEventListener('mouseenter', (e) => {
            e.stopPropagation();
            item.classList.add('bbui-submenu--hor-con-show');
            item.classList.remove('bbui-submenu--hor-con-hidden');
          });
          item.addEventListener('mouseleave', (e) => {
            e.stopPropagation();
            item.classList.add('bbui-submenu--hor-con-hidden');
            item.classList.remove('bbui-submenu--hor-con-show');
          });
        });
      }
    });

    return () => {
      return (
        <ul class={menuClassName.value} style={[`width:${props.width}`]}>
          {slots.default?.()}
        </ul>
      );
    };
  }
});
