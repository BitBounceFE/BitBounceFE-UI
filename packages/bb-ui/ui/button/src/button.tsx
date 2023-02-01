/*
 * @Author: thricefice thricefice@gmail.com
 * @Date: 2023-01-28 21:12:12
 * @LastEditors: thricefice thricefice@gmail.com
 * @LastEditTime: 2023-01-28 22:06:28
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\button\src\button.tsx
 * @Description: button 组件
 */

import { defineComponent, computed } from 'vue';
import { buttonProps, ButtonProps } from './button-types';
import './button.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'BButton',
  props: buttonProps,
  emits: ['click'],
  setup(props: ButtonProps, { slots, emit }) {
    const ns = useNamespace('button');
    const btnCls = computed(() => {
      return {
        [ns.b()]: true,
        [ns.m(props.type)]: !!props.type,
        [ns.m(`plain-${props.type}`)]: !!props.plain,
        [ns.m(props.size)]: !!props.size,
        [ns.m('round')]: props.round,
        [ns.m('circle')]: props.circle
      };
    });

    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      return (
        <button
          class={btnCls.value}
          type={props.nativeType}
          disabled={props.disabled}
          autofocus={props.autofocus}
          onClick={onClick}
        >
          {slots.default && slots.default()}
        </button>
      );
    };
  }
});
