/*
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-09 14:21:35
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:56:37
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\upload\__test__\upload.test.ts
 * @Description: Unit test of Upload
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
