import { defineComponent, computed, ref, watch } from 'vue';
import { dialogProps, DialogProps, dialogEmits } from './dialog-types';
import './dialog.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';
export default defineComponent({
  name: 'BDialog',
  components: {},
  props: dialogProps,
  emits: dialogEmits,
  setup(props: DialogProps, { slots, attrs, emit }) {
    const ns = useNamespace('dialog');
    const bHeader = computed(() => {
      return slots.header || props.title;
    });
    const bFooter = computed(() => {
      return slots.footer;
    });
    // 样式
    const dialogStyle = {
      width: props.width,
      'margin-top': props.top
    };
    const delay = ref(false);
    // 事件回调
    watch(
      () => props.vModel,
      (newValue, oldValue) => {
        // 打开弹窗时
        if (newValue === true) emit('open');
        // 关闭弹窗时
        if (newValue === false) {
          if (props.beforeClose) {
            // 是否存在beforeClose
            delay.value = true;
            props.beforeClose(() => {
              delay.value = false;
              emit('close');
            });
          } else emit('close');
        }
      }
    );
    return () => (
      <div class={ns.e('mask')} v-show={props.vModel || delay.value}>
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
    );
  }
});
