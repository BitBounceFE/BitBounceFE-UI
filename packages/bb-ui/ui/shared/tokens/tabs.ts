/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-02-02 10:18:56
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 10:21:27
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\shared\tokens\tabs.ts
 * @Description: tabsContextKey
 */
import type { Ref, InjectionKey } from 'vue';

export interface TabsContextType {
  active: Ref<string>;
}

export const TabsContextKey: InjectionKey<TabsContextType> =
  Symbol('tabsContextKey');
