/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-24 15:14:40
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-25 10:28:52
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\col\src\col.tsx
 * @Description: col 组件
 */
import {
  computed,
  CSSProperties,
  defineComponent,
  h,
  inject,
  resolveComponent
} from 'vue';
import { colProps, ColProps } from './col-types';
import './col.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'BCol',
  props: colProps,
  setup(props: ColProps, { slots }) {
    /**
     * @description: 使用依赖注入获取 row 组件的 gutter 值，默认为 0。
     */
    const { gutter } = inject('rowContextKey', { gutter: computed(() => 0) });
    const ns = useNamespace('col');

    const colCls = computed(() => {
      const classes: string[] = [];

      const attrs = ['span', 'offset', 'pull', 'push'] as const;
      attrs.forEach((attr) => {
        const value = props[attr];
        if (typeof value === 'number' && value > 0) {
          classes.push(ns.m(`${attr}-${props[attr]}`));
        }
      });

      if (gutter.value) {
        classes.push(ns.m('is-guttered'));
      }

      return [ns.b(), ...classes];
    });

    const style = computed(() => {
      const styles: CSSProperties = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });

    return () =>
      /* tsx 难以使用动态组件 <component>，故使用渲染函数 h() 以实现动态标签名。 */
      h(
        resolveComponent(props.tag),
        {
          class: colCls.value,
          style: style.value
        },
        slots.default()
      );
  }
});
