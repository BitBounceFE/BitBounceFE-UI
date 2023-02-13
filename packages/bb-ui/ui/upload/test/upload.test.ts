/*
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-09 14:21:35
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-14 00:41:00
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\upload\test\upload.test.ts
 * @Description: Unit test of Button
 */

import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Upload from '../src/upload';

describe('Upload', async () => {
  // 测试是否创建成功
  test('create', () => {
    const wrapper = mount(Upload);
    expect(wrapper.html()).toContain('bbui-upload-button');
    wrapper.unmount();
  });
  // 测试props
  test('props', () => {
    const wrapper = mount(Upload, {
      props: {
        multiple: true
      }
    });
    expect(wrapper.html()).toContain('multiple');
    wrapper.unmount();
  });
});
