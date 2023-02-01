/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-24 15:15:07
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-25 11:12:37
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\row\src\row.tsx
 * @Description: row 组件
 */
import {
  computed,
  CSSProperties,
  defineComponent,
  h,
  provide,
  resolveComponent
} from 'vue';
import { rowProps, RowProps } from './row-types';
import './row.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'BRow',
  props: rowProps,
  setup(props: RowProps, { slots }) {
    const ns = useNamespace('row');
    const rowCls = computed(() => [
      ns.b(),
      ns.m(`justify-${props.justify}`),
      ns.m(`align-${props.align}`)
    ]);
    const style = computed(() => {
      const styles: CSSProperties = {};
      if (props.gutter) {
        // 意义不明
        styles.marginLeft = styles.marginRight = `-${props.gutter / 2}px`;
      }
      return styles;
    });

    /**
     * @description: 使用依赖注入将 gutter 提供给 col 组件
     */
    const gutter = computed(() => props.gutter);
    provide('rowContextKey', {
      gutter
    });

    return () =>
      /* tsx 难以使用动态组件 <component>，故使用渲染函数 h() 以实现动态标签名。 */
      h(
        resolveComponent(props.tag),
        {
          class: rowCls.value,
          style: style.value
        },
        slots.default()
      );
  }
});