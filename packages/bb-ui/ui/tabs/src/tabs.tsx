/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 10:18:21
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-28 19:19:59
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\tabs.tsx
 * @Description: Tabs 组件
 */
import { computed, defineComponent, provide, watch, ref } from 'vue';
import { tabsProps, TabsProps } from './tabs-type';
import './tabs.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'BTabs',
  props: tabsProps,
  setup(props: TabsProps, { slots }) {
    const ns = useNamespace('tabs');
    const TabsCls = computed(() => [ns.b()]);

    const active = ref(props.modelValue || '0');

    watch(
      () => props.modelValue,
      (modelValue) => (active.value = modelValue)
    );

    const tabsContext = {
      active
    };
    provide('tabsContextKey', tabsContext);

    return () => <div class={TabsCls}>{slots.default && slots.default()}</div>;
  }
});
