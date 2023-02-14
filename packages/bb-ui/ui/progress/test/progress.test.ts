/*
 * @Author: XinyueShu xshuac@connect.hk.ust
 * @Date: 2023-02-10 01:15:58
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-02-12 12:01:34
 * @FilePath: /BitBounceFE-UI/packages/bb-ui/ui/progress/test/progress.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { mount } from '@vue/test-utils';
import { BProgress } from '../index';
import { nextTick, h } from 'vue';
import { expect, test, describe, vi } from 'vitest';
import Progress from '../src/progress';

// 测试是否visible
test('render test', async () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 10,
      type: 'line',
      textInside: true
    }
  });
  await nextTick();
  // normal test for visible or not
  expect(wrapper.find('.bbui-progress').isVisible()).toBe(true);

  // test textInside
  expect(wrapper.find('.bbui-progress--line-inside-text').isVisible()).toBe(
    true
  );
});

test('common props type test', async () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 10,
      type: 'line'
    }
  });
  await nextTick();
  // test shape type line
  expect(wrapper.find('.bbui-progress--line-shape').isVisible()).toBe(true);
  // test percentage value
  expect(wrapper.html()).toContain('10%');
  // test show text
  expect(wrapper.find('.bbui-progress--line-text').isVisible()).toBe(true);

});

test('other props test', async () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 10,
      type: 'Circle',
      strokeWidth: 20,
      strokeLinecap: 'square'
    }
  });
  await nextTick();
  // test shape type circle
  // if it does not exist it should be empty or show errrors
  expect(wrapper.find('.bbui-progress--Circle-shape').isVisible()).toBe(false);

  // test customized strokewidth
  expect(wrapper.html()).toContain('20px');

  // test customized stroke linecap
  expect(wrapper.html()).toContain('square');
});

test('other props including colors test', async () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 10,
      type: 'dashboard',
      color: 'purple',
      defineBackColor: 'blue',
      textColor: 'grey'
    }
  });
  await nextTick();
  // test shape type circle
  // if it does not exist it should be empty or show errrors
  expect(wrapper.find('.bbui-progress--dashboard-shape').isVisible()).toBe(
    false
  );

  // test customized strokewidth
  expect(wrapper.html()).toContain('purple');

  // test customized stroke linecap
  expect(wrapper.html()).toContain('blue');

  // test customized stroke linecap
  expect(wrapper.html()).toContain('grey');
});

test('other props including colors test', async () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 10,
      type: 'dashboard'
    }
  });
  await nextTick();
  // test shape type circle
  // if it does not exist it should be empty or show errrors
  expect(wrapper.find('.bbui-progress--dashboard-shape').isVisible()).toBe(
    false
  );
});
