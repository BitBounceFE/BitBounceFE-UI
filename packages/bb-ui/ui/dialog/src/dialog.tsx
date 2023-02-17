/*
 * @Date: 2023-02-06 19:02:38
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 14:07:26
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\dialog\src\dialog.tsx
 */
import {
  defineComponent,
  computed,
  ref,
  watch,
  Transition,
  onMounted
} from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';

import { dialogProps, DialogProps, dialogEmits } from './dialog-types';
import './dialog.scss';

export default defineComponent({
  name: 'BDialog',
  components: {},
  props: dialogProps,
  emits: dialogEmits,
  setup(props: DialogProps, { slots, emit }) {
    const ns = useNamespace('dialog');
    // 样式
    let dialogStyle = {
      width: props.width,
      'margin-top': props.top
    };
    // mask class
    const maskClass = ref(ns.e('mask'));
    const bHeader = computed(() => {
      return slots.header || props.title;
    });
    const bFooter = computed(() => {
      return slots.footer;
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
    // 是否全屏
    if (props.fullscreen) {
      dialogStyle.width = '100vw';
      dialogStyle.height = '100vh';
      dialogStyle['margin-top'] = '0';
    }
    // 是否有遮罩层
    if (!props.modal) {
      maskClass.value += ' ' + ns.m('mask');
    }
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
      if (isShow.value === false) return;
      if (props.beforeClose) {
        props.beforeClose(() => {
          closeDialogDelay(props.closeDelay);
        });
      } else closeDialogDelay(props.closeDelay);
    };
    if (props.closeOnPressEscape) {
      /* empty */
    }
    // 打开动画结束时调用
    const afterEnter = () => {
      emit('opened');
    };

    // 关闭动画结束时调用
    const afterLeave = () => {
      emit('closed');
    };

    // esc 的句柄函数
    const handleESC = () => {
      document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape' || e.keyCode !== 27) return;
        e.preventDefault();
        emit('update:modelValue', false);
        closeDialog();
      });
    };
    // modal 的句柄函数
    const handleClickModal = (e) => {
      if (e.target !== e.currentTarget) return;
      emit('update:modelValue', false);
      closeDialog();
    };
    watch(
      () => props.modelValue,
      (newvModel, oldvModel) => {
        // 打开弹窗时
        if (newvModel === true) openDialog();
        // 关闭弹窗时
        if (newvModel === false) closeDialog();
      }
    );
    // 生命周期
    onMounted(() => {
      if (props.closeOnPressEscape) handleESC();
      if (props.modelValue) {
        openDialog();
      }
    });

    return () => (
      <Transition onAfterEnter={afterEnter} onAfterLeave={afterLeave}>
        <div
          class={maskClass.value}
          v-show={isShow.value}
          onClick={(e) => handleClickModal(e)}
        >
          <div class={ns.b()} style={dialogStyle}>
            <div class={ns.e('header')} v-show={bHeader}>
              {(slots.header && slots.header()) || props.title}
            </div>
            <div class={ns.e('default')}>
              {slots.default && slots.default()}
            </div>
            <div class={ns.e('footer')} v-show={bFooter}>
              {slots.footer && slots.footer()}
            </div>
          </div>
        </div>
      </Transition>
    );
  }
});
