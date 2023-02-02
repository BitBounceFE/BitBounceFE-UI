/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 10:18:21
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 18:41:08
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\tabs.tsx
 * @Description: Tabs 组件
 */
import { computed, defineComponent, provide, watch, ref, reactive } from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';
import { TabsContextType, TabsContextKey } from '../../shared/tokens/index';

import { tabsProps, TabsProps } from './tabs-type';
import { TabPaneProps } from '../../tab-pane/src/tab-pane-type';
import { TabsNavProps } from './components/tabs-nav/tabs-nav-types';
import './tabs.scss';

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

    // 记录当前选择的 tab
    const active = ref(
      props.modelValue ? props.modelValue : navProps.panes[0].name || '0'
    );

    // modelValue 变化时更新 active
    watch(
      () => props.modelValue,
      (modelValue) => (active.value = modelValue)
    );

    const tabsContext = {
      active
    };
    provide<TabsContextType>(TabsContextKey, tabsContext);

    return () => (
      <div class={TabsCls}>
        <TabsNav {...navProps}></TabsNav>
        {slots.default && slots.default()}
      </div>
    );
  }
});
