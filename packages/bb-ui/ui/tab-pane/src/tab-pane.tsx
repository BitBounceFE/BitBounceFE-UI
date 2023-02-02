/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 14:14:23
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 10:24:34
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tab-pane\src\tab-pane.tsx
 * @Description: Tab Pane 组件
 */
import { computed, defineComponent, inject } from 'vue';
import { tabPaneProps, TabPaneProps } from './tab-pane-type';
import './tab-pane.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { TabsContextType, TabsContextKey } from '../../shared/tokens/index';

export default defineComponent({
  name: 'BTabPane',
  props: tabPaneProps,
  setup(props: TabPaneProps, { slots }) {
    const tabsContext = inject<TabsContextType>(TabsContextKey);

    const ns = useNamespace('tab-pane');
    const tabPaneCls = computed(() => [ns.b()]);

    return () => (
      <div v-show={props.name === tabsContext.active.value} class={tabPaneCls}>
        {slots.default && slots.default()}
      </div>
    );
  }
});
