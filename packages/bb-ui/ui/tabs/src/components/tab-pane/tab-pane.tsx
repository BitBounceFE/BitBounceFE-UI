/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 14:14:23
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 14:18:55
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\components\tab-pane\tab-pane.tsx
 */
import { computed, defineComponent, inject } from 'vue';

import { useNamespace } from '../../../../shared/hooks/use-namespace';
import {
  TabsContextType,
  TabsContextKey
} from '../../../../shared/tokens/index';

import { tabPaneProps, TabPaneProps } from './tab-pane-type';
import './tab-pane.scss';

export default defineComponent({
  name: 'BTabPane',
  props: tabPaneProps,
  setup(props: TabPaneProps, { slots }) {
    const tabsContext = inject<TabsContextType>(TabsContextKey);

    const ns = useNamespace('tab-pane');
    const tabPaneCls = computed(() => [ns.b()]);

    return () => (
      <div
        v-show={props.name === tabsContext.active.value}
        class={tabPaneCls.value}
      >
        {slots.default && slots.default()}
      </div>
    );
  }
});
