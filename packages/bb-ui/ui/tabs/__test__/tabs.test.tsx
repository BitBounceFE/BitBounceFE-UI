/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-02-10 13:03:44
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:56:08
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\__test__\tabs.test.tsx
 * @Description: Unit test of Tabs
 */
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { useNamespace } from '../../shared/hooks/use-namespace';
import Tabs from '../src/tabs';
import TabsNav from '../src/components/tabs-nav/tabs-nav';
import TabPane from '../src/components/tab-pane/tab-pane';

const TabsNs = useNamespace('tabs');
const TabPaneNs = useNamespace('tab-pane');

const tabs = TabsNs.b();
const tabsNav = TabsNs.e('nav');
const tabsNavItem = TabsNs.e('nav-item');
const tabPane = TabPaneNs.b();

const panes = [
  {
    label: 'Pane-A',
    name: 'pane-1',
    text: 'tab-1'
  },
  {
    label: 'Pane-B',
    name: 'pane-2',
    text: 'tab-2'
  },
  {
    label: 'Pane-C',
    name: 'pane-3',
    text: 'tab-3'
  },
  {
    label: 'Pane-D',
    name: 'pane-4',
    text: 'tab-4'
  }
];

describe('Tabs', () => {
  test('create', async () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Tabs>
            {{
              default: () =>
                panes.map((pane, index) => (
                  <TabPane key={index} name={pane.name}>
                    {pane.text}
                  </TabPane>
                ))
            }}
          </Tabs>
        );
      }
    });

    const navWrapper = wrapper.findComponent(TabsNav);
    const navItemWrappers = navWrapper.findAll(`.${tabsNavItem}`);
    const paneWrappers = wrapper.findAllComponents(TabPane);

    // 基本类名
    expect(wrapper.classes()).toContain(tabs);
    expect(navWrapper.classes()).toContain(tabsNav);
    expect(navItemWrappers.length).toEqual(paneWrappers.length);
    paneWrappers.forEach((paneWrapper) =>
      expect(paneWrapper.classes()).toContain(tabPane)
    );

    // 默认激活第 0 个 tab
    navItemWrappers.forEach((navItemWrapper, index) =>
      index === 0
        ? expect(navItemWrapper.classes('active')).toBeTruthy()
        : expect(navItemWrapper.classes('active')).toBeFalsy()
    );
    paneWrappers.forEach((paneWrapper, index) =>
      index === 0
        ? expect(paneWrapper.isVisible()).toBeTruthy()
        : expect(paneWrapper.isVisible()).toBeFalsy()
    );
  });

  test('modelValue', async () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Tabs v-model={panes[1].name}>
            {{
              default: () =>
                panes.map((pane, index) => (
                  <TabPane key={index} name={pane.name}>
                    {pane.text}
                  </TabPane>
                ))
            }}
          </Tabs>
        );
      }
    });

    const navWrapper = wrapper.findComponent(TabsNav);
    const navItemWrappers = navWrapper.findAll(`.${tabsNavItem}`);
    const paneWrappers = wrapper.findAllComponents(TabPane);

    // 根据 modelValue 激活第 1 个 tab
    navItemWrappers.forEach((navItemWrapper, index) =>
      index === 1
        ? expect(navItemWrapper.classes('active')).toBeTruthy()
        : expect(navItemWrapper.classes('active')).toBeFalsy()
    );
    paneWrappers.forEach((paneWrapper, index) =>
      index === 1
        ? expect(paneWrapper.isVisible()).toBeTruthy()
        : expect(paneWrapper.isVisible()).toBeFalsy()
    );

    // 修改 modelValue 为激活第 2 个 tab
    await wrapper.setProps({ modelValue: panes[2].name });
    navItemWrappers.forEach((navItemWrapper, index) =>
      index === 2
        ? expect(navItemWrapper.classes('active')).toBeTruthy()
        : expect(navItemWrapper.classes('active')).toBeFalsy()
    );
    paneWrappers.forEach((paneWrapper, index) =>
      index === 2
        ? expect(paneWrapper.isVisible()).toBeTruthy()
        : expect(paneWrapper.isVisible()).toBeFalsy()
    );
  });

  test('change active by clicking', async () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Tabs>
            {{
              default: () =>
                panes.map((pane, index) => (
                  <TabPane key={index} name={pane.name}>
                    {pane.text}
                  </TabPane>
                ))
            }}
          </Tabs>
        );
      }
    });

    const navWrapper = wrapper.findComponent(TabsNav);
    const navItemWrappers = navWrapper.findAll(`.${tabsNavItem}`);
    const paneWrappers = wrapper.findAllComponents(TabPane);

    // 点击激活其他 tab
    await navItemWrappers[2].trigger('click');
    navItemWrappers.forEach((navItemWrapper, index) =>
      index === 2
        ? expect(navItemWrapper.classes('active')).toBeTruthy()
        : expect(navItemWrapper.classes('active')).toBeFalsy()
    );
    paneWrappers.forEach((paneWrapper, index) =>
      index === 2
        ? expect(paneWrapper.isVisible()).toBeTruthy()
        : expect(paneWrapper.isVisible()).toBeFalsy()
    );
  });

  test('empty', () => {
    const wrapper = mount(() => <Tabs />);

    const navWrapper = wrapper.findComponent(TabsNav);
    expect(wrapper.classes()).toContain(tabs);
    expect(navWrapper.classes()).toContain(tabsNav);
  });
});

describe('Tabs Nav', () => {
  test('label', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Tabs>
            {{
              default: () =>
                panes.map((pane, index) => (
                  <TabPane key={index} label={pane.label} name={pane.name}>
                    {pane.text}
                  </TabPane>
                ))
            }}
          </Tabs>
        );
      }
    });

    const navWrapper = wrapper.findComponent(TabsNav);
    const navItemWrappers = navWrapper.findAll(`.${tabsNavItem}`);
    navItemWrappers.forEach((navItemWrapper, index) =>
      expect(navItemWrapper.text()).toEqual(panes[index].label)
    );
  });

  test('no label', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Tabs>
            {{
              default: () =>
                panes.map((pane, index) => (
                  <TabPane
                    key={index}
                    label={index % 2 === 0 ? pane.label : undefined}
                    name={pane.name}
                  >
                    {pane.text}
                  </TabPane>
                ))
            }}
          </Tabs>
        );
      }
    });

    const navWrapper = wrapper.findComponent(TabsNav);
    const navItemWrappers = navWrapper.findAll(`.${tabsNavItem}`);
    navItemWrappers.forEach((navItemWrapper, index) =>
      index % 2 === 0
        ? expect(navItemWrapper.text()).toEqual(panes[index].label)
        : expect(navItemWrapper.text()).toEqual(panes[index].name)
    );
  });

  test('empty label', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Tabs>
            {{
              default: () =>
                panes.map((pane, index) => (
                  <TabPane
                    key={index}
                    label={index % 2 === 0 ? pane.label : ''}
                    name={pane.name}
                  >
                    {pane.text}
                  </TabPane>
                ))
            }}
          </Tabs>
        );
      }
    });

    const navWrapper = wrapper.findComponent(TabsNav);
    const navItemWrappers = navWrapper.findAll(`.${tabsNavItem}`);
    navItemWrappers.forEach((navItemWrapper, index) =>
      index % 2 === 0
        ? expect(navItemWrapper.text()).toEqual(panes[index].label)
        : expect(navItemWrapper.text()).toEqual('')
    );
  });
});
