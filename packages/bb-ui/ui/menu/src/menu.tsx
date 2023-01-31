/*
 * @Author: xuepeng184 1831919639@qq.com
 * @Date: 2023-01-28 20:18:58
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-29 23:27:46
 * @FilePath: \bbui\packages\bb-ui\ui\menu\src\menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { computed, defineComponent, provide, toRefs } from 'vue';
import { menuProps, MenuProps } from './menu-types';
import { useNamespace } from '../../shared/hooks/use-namespace';

import './menu.scss';

const ns = useNamespace('menu');
export default defineComponent({
  name: 'BMenu',
  props: menuProps,
  setup(props: MenuProps, ctx) {
    // 利用toRefs解构
    const { mode, collapse } = toRefs(props);
    // 使用provide提供mode属性（是否垂直）
    provide('mode', mode);
    // 是否折叠
    provide('isCollapsed', props.collapse);

    // 计算出根节点的class
    const menuClassName = computed(() => {
      return {
        //  基础class
        [`${ns.b()}`]: true,
        // 竖直的class
        [`${ns.e('vertical')}`]: mode.value === 'vertical',
        // 横向的class
        [`${ns.e('horizontal')}`]: mode.value === 'horizontal',
        // 是否折叠,默认为false
        [`${ns.e('collapse')}`]: collapse.value
      };
    });

    return () => {
      return <ul class={menuClassName.value}></ul>;
    };
  }
});
