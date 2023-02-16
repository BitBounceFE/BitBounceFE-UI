/*
 * @Author: syk syk@qq.com
 * @Date: 2023-02-11 11:19:04
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-14 00:26:01
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\select\test\select.test.ts
 * @Description: Unit test of Select
 */
import { mount } from '@vue/test-utils';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { expect, test, describe } from 'vitest';
import Select from '../src/select';
const ns = useNamespace('select');
const boxclass = ns.b();

describe('BSelect.vue', () => {
  // select 是否打开了
  test('create', () => {
    const wrapper = mount(Select, {
      props: {
        options: [
          {
            name: '第一个数字值',
            value: '1234444'
          },
          {
            name: '第二个数字值',
            value: '453336'
          }
        ]
      }
    });
    expect(wrapper.classes()).toContain(boxclass);
    wrapper.unmount();
  });
  // test props
  test('props', () => {
    const wrapper = mount(Select, {
      size: 'mid'
    });
    console.log(wrapper.html());
    expect(wrapper.classes()).toContain('bbui-select-mid');
  });
});
