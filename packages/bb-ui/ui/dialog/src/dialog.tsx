
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
    //控制弹窗打开与否
    const isShow = ref(false);
    // 事件延迟句柄
    const handleDelay:(fn:Function,delay:number)=>void=(fn:Function,delay:number)=>{
         setTimeout(()=>{
           fn()
         },delay)
    }
    //打开弹窗
    const openDialog:()=>void=()=>{
      if(props.openDelay>0){
        handleDelay(()=>{
          isShow.value=true
          emit("open")
        },props.openDelay)
      }else{
        isShow.value=true
        emit('open')
      } 
    }
    //延迟关弹窗
    const closeDialogDelay:(closeDelay:number)=>void=(closeDelay:number)=>{
      if(closeDelay>0){
        handleDelay(()=>{
          isShow.value=false
          emit("close")
        },closeDelay)
      }else{
        isShow.value=false
        emit('close')
      } 
    }
        //关闭弹窗
      const closeDialog:()=>void=()=>{
          if(props.beforeClose){
            props.beforeClose(()=>{
              closeDialogDelay(props.closeDelay)
            })
          }else closeDialogDelay(props.closeDelay);
        }

    watch(
      () => props.vModel,
      (newValue, oldValue) => {
        // 打开弹窗时
        if (newValue === true) openDialog();
        // 关闭弹窗时
        if (newValue === false) closeDialog();
      }
    );
    return () => (
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
    );
  }
});
