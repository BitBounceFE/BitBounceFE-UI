/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-30 12:11:11
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-30 13:59:25
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\components\tabs-nav\tabs-nav.tsx
 * @Description: Tabs Nav 组件
 */
import { defineComponent, inject } from 'vue';
import { tabsNavProps, TabsNavProps } from './tabs-nav-types';
import { TabsContextType } from '../../tabs-type';
import { useNamespace } from '../../../../shared/hooks/use-namespace';
import './tabs-nav.scss';

export default defineComponent({
  name: 'BTabsNav',
  props: tabsNavProps,
  setup(props: TabsNavProps) {
    const tabsContext = inject<TabsContextType>('tabsContextKey');

    const ns = useNamespace('tabs');

    return () =>
      props.panes.map((pane) => (
        <button
          class={[
            ns.e('nav'),
            pane.name === tabsContext.active.value ? 'active' : ''
          ]}
          onClick={() => {
            tabsContext.active.value = pane.name;
          }}
        >
          {pane.label}, {pane.name}
        </button>
      ));
  }
});
