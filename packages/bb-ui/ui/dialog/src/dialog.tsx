
import { defineComponent, computed,ref,reactive } from 'vue';
import { dialogProps, DialogProps } from './dialog-types';
import './dialog.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'BDialog',
  props: dialogProps,
  components:{},
  setup(props: DialogProps, { slots,attrs }) {
    const ns = useNamespace('dialog');
    const bHeader=computed(()=>{
      return slots.header||props.title
    })
    const bFooter=computed(()=>{
      return slots.footer
    })
    return () => (
      <div class={ns.b()} v-show={props.vModel}>
          <div class={ns.e('header')} v-show={bHeader}>
            {slots.header&&slots.header()|| props.title}
          </div>
          <div class={ns.e('default')}>
           {slots.default&&slots.default()}
          </div>
          <div class={ns.e('footer')} v-show={bFooter}>
          {slots.footer&&slots.footer()}
          </div>
      </div>
    );
  }
});