/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-30 12:11:11
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-10 16:17:41
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\components\tabs-nav\tabs-nav.tsx
 */
import { defineComponent, inject } from 'vue';

import { useNamespace } from '../../../../shared/hooks/use-namespace';
import {
  TabsContextType,
  TabsContextKey
} from '../../../../shared/tokens/index';

import { tabsNavProps, TabsNavProps } from './tabs-nav-types';
import './tabs-nav.scss';

export default defineComponent({
  name: 'BTabsNav',
  props: tabsNavProps,
  setup(props: TabsNavProps) {
    const tabsContext = inject<TabsContextType>(TabsContextKey);

    const ns = useNamespace('tabs');

    return () => (
      <div class={ns.e('nav')}>
        {props.panes.map((pane) => (
          <button
            class={[
              ns.e('nav-item'),
              pane.name === tabsContext.active.value ? 'active' : ''
            ]}
            onClick={() => {
              tabsContext.active.value = pane.name;
            }}
          >
            {typeof pane.label === 'string' ? pane.label : pane.name}
          </button>
        ))}
      </div>
    );
  }
});
