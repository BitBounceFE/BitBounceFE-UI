import type { Ref, InjectionKey } from 'vue';

export interface MenuContextType {
  mode: Ref<'vertical' | 'horizontal'>;
  isCollapsed: Ref<boolean>;
}

export const menuContextKey: InjectionKey<MenuContextType> =
  Symbol('menuContextKey');
