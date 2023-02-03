/*
 * @Author: syk syk@qq.com
 * @Date: 2023-01-27 21:15:29
 * @LastEditors: fxjzz && 1042183935@qq.com
 * @LastEditTime: 2023-02-03 15:57:35
 * @FilePath: \BB-UI\packages\bb-ui\ui\input\src\input.tsx
 * @Description: input组件开发
 * Copyright (c) 2023 by syk syk@qq.com, All Rights Reserved
 */

import { defineComponent, shallowRef } from 'vue';
import { inputProps, InputProps } from './input-types';
import './input.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';
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

    const showType = props.showPassword ? 'password' : 'text';
    const ns = useNamespace('input');

    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    // console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));

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
