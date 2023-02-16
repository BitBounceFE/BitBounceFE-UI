/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-27 21:15:29
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 14:11:42
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\input\src\input.tsx
 */
import { defineComponent, shallowRef } from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';

import { inputProps, InputProps } from './input-types';
import './input.scss';

export default defineComponent({
  name: 'BInput',
  props: inputProps,
  emits: ['update:modelValue', 'blur', 'change', 'clear', 'focus'],
  setup(props: InputProps, ctx) {
    const input = shallowRef<HTMLInputElement>();
    const onInput = (e: Event) => {
      ctx.emit('update:modelValue', (e.target as HTMLInputElement).value);
    };
    const onBlur = (e: Event) => {
      input.value?.blur();
      ctx.emit('blur', e);
    };
    const onFocus = (e: Event) => {
      input.value?.focus();
      ctx.emit('focus', e);
    };
    const onChange = (e: Event) => {
      ctx.emit('change', (e.target as HTMLInputElement).value);
    };

    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    // console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));
    const showType = props.showPassword ? 'password' : 'text';
    const ns = useNamespace('input');
    const disaClass = `${ns.b()}-disabled`;
    const boxClass = `${ns.b()}-${props.size}`;

    return () => (
      <div class={boxClass}>
        <input
          ref={input}
          type={showType}
          value={props.modelValue}
          onInput={onInput}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          placeholder={props.placeholder}
          disabled={!!props.disabled}
          class={props.disabled ? disaClass : ' '}
        />
      </div>
    );
  }
});
