/*
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-09 14:21:35
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-14 00:09:55
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\input\test\input.test.ts
 * @Description: Unit test of Button
 */

import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Input from '../src/input';
import { useNamespace } from '../../shared/hooks/use-namespace';
const ns = useNamespace('input');
const boxClass = `${ns.b()}-md`;
describe('Input', async () => {
  // 测试是否创建成功
  await test('create', async () => {
    const wrapper = await mount(Input);
    expect(wrapper.classes()).toContain(boxClass);
    wrapper.unmount();
  });
  // 测试props
  await test('props-disabled', async () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true
      }
    });
    expect(wrapper.html()).toContain('disabled');
    wrapper.unmount();
  });
  // 测试password属性
  await test('props-password', async () => {
    const wrapper = mount(Input, {
      props: {
        showPassword: true
      }
    });
    expect(wrapper.html()).toContain('password');
    wrapper.unmount();
  });
  // 测试showPassword属性
  await test('props-showPassword', async () => {
    const wrapper = mount(Input, {
      props: {
        showPassword: true
      }
    });
    expect(wrapper.html()).toContain('password');
    wrapper.unmount();
  });
  // 测试size属性
  await test('props-size', async () => {
    const wrapper = mount(Input, {
      props: {
        size: 'sm'
      }
    });
    expect(wrapper.html()).toContain('bbui-input-sm');
    wrapper.unmount();
  });
  // 测试placeholder属性
  await test('props-size', async () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'jack'
      }
    });
    expect(wrapper.html()).toContain('jack');
    wrapper.unmount();
  });
});
