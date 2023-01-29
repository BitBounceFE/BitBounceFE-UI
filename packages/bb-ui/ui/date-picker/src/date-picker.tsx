/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 21:13:04
 * @LastEditors: fxjzz && 1042183935@qq.com
 * @LastEditTime: 2023-01-29 16:35:09
 * @FilePath: \BB-UI\packages\bb-ui\ui\date-picker\src\date-picker.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue';
import { datePickerProps, DatePickerProps } from './date-picker-types';
import './date-picker-types.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'DatePicker',
  props: datePickerProps,
  setup(props: DatePickerProps, { slots }) {
    const ns = useNamespace('date-picker');
    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));
  }
});
