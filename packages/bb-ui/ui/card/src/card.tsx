/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 21:13:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-20 15:56:45
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\card\src\card.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, computed } from 'vue';
import { cardProps, CardProps } from './card-types';
import './card.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'CCard',
  props: cardProps,
  setup(props: CardProps, { slots }) {
    const ns = useNamespace('card');

    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));

    const boxClass = `${ns.b()} ${ns.m(props.shadow)}-shadow`;

    const isHeader = computed(() => {
      return props.header || slots.header;
    });

    return () => (
      <div class={boxClass}>
        <div class={ns.m('header')} v-show={isHeader}>
          {(slots.header && slots.header()) || props.header}
        </div>
        <div class={ns.m('body')} style={props.bodyStyle}>
          {slots.default && slots.default()}
        </div>
      </div>
    );
  }
});