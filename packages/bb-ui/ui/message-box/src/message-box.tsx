import { defineComponent, computed, ref, watch } from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';

import {
  messageBoxProps,
  MessageBoxProps,
  messageBoxEmits
} from './message-box-types';
import './message-box.scss';

export default defineComponent({
  name: 'BMessageBox',
  components: {},
  props: messageBoxProps,
  emits: messageBoxEmits,
  setup(props: MessageBoxProps, { slots, emit }) {
    const ns = useNamespace('message-box');

    const bHeader = computed(() => {
      return slots.header || props.title;
    });
    const bFooter = computed(() => {
      return slots.footer;
    });

    // 控制弹窗打开与否
    const isShow = ref(false);
    const handleDelay: (fn: Function, delay: number) => void = (
      fn: Function,
      delay: number
    ) => {
      setTimeout(() => {
        fn();
      }, delay);
    };
    // 打开弹窗
    const openMessageBox: () => void = () => {
      if (props.openDelay > 0) {
        handleDelay(() => {
          isShow.value = true;
          emit('open');
        }, props.openDelay);
      } else {
        isShow.value = true;
        emit('open');
      }
    };
    // 延迟关弹窗
    const closeMessageBoxDelay: (closeDelay: number) => void = (
      closeDelay: number
    ) => {
      if (closeDelay > 0) {
        handleDelay(() => {
          isShow.value = false;
          emit('close');
        }, closeDelay);
      } else {
        isShow.value = false;
        emit('close');
      }
    };
    // 关闭弹窗
    const closeMessageBox: () => void = () => {
      if (props.beforeClose) {
        props.beforeClose(() => {
          closeMessageBoxDelay(props.closeDelay);
        });
      } else closeMessageBoxDelay(props.closeDelay);
    };

    watch(
      () => props.messageBoxValue,
      (newValue, oldValue) => {
        // 打开弹窗时
        if (newValue === true) {
          openMessageBox();
        }
        // 关闭弹窗时
        if (newValue === false) {
          closeMessageBox();
        }
      }
    );

    return () => (
      <div class={ns.e('mask')} v-show={isShow.value}>
        <div class={ns.b()}>
          <div class={ns.e('header')} v-show={bHeader}>
            {(slots.header && slots.header()) || props.title}
          </div>
          <div class={ns.e('default')}>{slots.default && slots.default()}</div>
          <div class={ns.e('footer')} v-show={bFooter}>
            {slots.footer && slots.footer()}
          </div>
        </div>
      </div>
    );
  }
});
