/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-30 13:39:16
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-01-30 13:54:26
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\components\tabs-nav\tabs-nav-types.ts
 */
import { TabPaneProps } from '../tab-pane/tab-pane-type';

export const tabsNavProps = {
  panes: Array<TabPaneProps>
} as const;

export interface TabsNavProps {
  panes: TabPaneProps[];
}
