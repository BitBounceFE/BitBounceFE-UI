/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 10:18:21
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-27 14:38:55
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\tabs.tsx
 * @Description: Tabs 组件
 */
import { defineComponent, provide } from 'vue';
import { tabsProps, TabsProps } from './tabs-type';
import './tabs.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'BTabs',
  props: tabsProps,
  setup(props: TabsProps, { slots }) {
    const ns = useNamespace('tabs');
    console.log(ns);

    provide('tabsContextKey', {
      props
    });

    return () => <div>hhhh</div>;
  }
});
