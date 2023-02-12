/*
 * @Author: syk syk@qq.com
 * @Date: 2023-02-11 11:19:04
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-12 22:08:18
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\select\test\select.test.ts
 * @Description: unit test for select
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { mount } from '@vue/test-utils';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { expect, test, describe } from 'vitest';
import Select from '../src/select';
const ns = useNamespace('select');
const boxclass = ns.b();

describe('BSelect.vue', () => {
  // select是否打开了
  test('create', () => {
    const wrapper = mount(Select);
    expect(wrapper.classes()).toContain(boxclass);
    wrapper.unmount();
  });
});
