/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 10:18:21
 * @LastEditors: thricefice thricefice@gmail.com
 * @LastEditTime: 2023-01-30 22:39:25
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\tabs.tsx
 * @Description: Tabs 组件
 */
import { computed, defineComponent, provide, watch, ref, reactive } from 'vue';
import { tabsProps, TabsProps } from './tabs-type';
import { TabPaneProps } from '../../tab-pane/src/tab-pane-type';
import { TabsNavProps } from './components/tabs-nav/tabs-nav-types';
import './tabs.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';
import TabsNav from './components/tabs-nav/tabs-nav';

export default defineComponent({
  name: 'BTabs',
  props: tabsProps,
  setup(props: TabsProps, { slots }) {
    const ns = useNamespace('tabs');
    const TabsCls = computed(() => [ns.b()]);

    const navProps: TabsNavProps = reactive({
      panes: slots.default().map((pane) => pane.props as TabPaneProps)
    });
    console.log(navProps);

    const active = ref(
      props.modelValue ? props.modelValue : navProps.panes[0].name || '0'
    );

    watch(
      () => props.modelValue,
      (modelValue) => (active.value = modelValue)
    );

    const tabsContext = {
      active
    };
    provide('tabsContextKey', tabsContext);

    return () => (
      <div class={TabsCls}>
        <TabsNav {...navProps}></TabsNav>
        {slots.default && slots.default()}
      </div>
    );
  }
});
