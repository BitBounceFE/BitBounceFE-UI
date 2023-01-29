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
