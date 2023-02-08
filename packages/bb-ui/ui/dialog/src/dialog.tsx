/*
 * @Date: 2023-02-06 19:02:38
 * @LastEditors: Diachao 3430737927@qq.com
 * @LastEditTime: 2023-02-06 19:30:55
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\dialog\src\dialog.tsx
 */
import { defineComponent, computed, ref, watch, Transition } from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';

import { dialogProps, DialogProps, dialogEmits } from './dialog-types';
import './dialog.scss';

export default defineComponent({
  name: 'BDialog',
  components: {},
  props: dialogProps,
  emits: dialogEmits,
  setup(props: DialogProps, { slots, attrs, emit }) {
    const ns = useNamespace('dialog');
    // 样式
    const dialogStyle = {
      width: props.width,
      'margin-top': props.top
    };

    const bHeader = computed(() => {
      return slots.header || props.title;
    });
    const bFooter = computed(() => {
      return slots.footer;
    });
    const modelShow = computed(() => {
      return props.vModel === undefined ? props.modelValue : props.vModel
    });
    // 控制弹窗打开与否
    const isShow = ref(false);
    // 事件延迟句柄
    const handleDelay: (fn: Function, delay: number) => void = (
      fn: Function,
      delay: number
    ) => {
      setTimeout(() => {
        fn();
      }, delay);
    };
    // 打开弹窗
    const openDialog: () => void = () => {
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
    const closeDialogDelay: (closeDelay: number) => void = (
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
    const closeDialog: () => void = () => {
      if (props.beforeClose) {
        props.beforeClose(() => {
          closeDialogDelay(props.closeDelay);
        });
      } else closeDialogDelay(props.closeDelay);
    };
    //打开动画结束时调用
    const afterEnter = () => {
      emit("opened")
    }
    //关闭动画结束时调用
    const afterLeave = () => {
      emit("closed")
    }
    watch(
      () => modelShow.value
      ,
      (newvModel, oldvModel) => {
        // 打开弹窗时
        if (newvModel === true) openDialog();
        // 关闭弹窗时
        if (newvModel === false) closeDialog();
      }
    );

    return () => (
      <Transition onAfterEnter={afterEnter} onAfterLeave={afterLeave}>
        <div class={ns.e('mask')} v-show={isShow.value}>
          <div class={ns.b()} style={dialogStyle}>
            <div class={ns.e('header')} v-show={bHeader}>
              {(slots.header && slots.header()) || props.title}
            </div>
            <div class={ns.e('default')}>{slots.default && slots.default()}</div>
            <div class={ns.e('footer')} v-show={bFooter}>
              {slots.footer && slots.footer()}
            </div>
          </div>
        </div>
      </Transition>
    );
  }
});
