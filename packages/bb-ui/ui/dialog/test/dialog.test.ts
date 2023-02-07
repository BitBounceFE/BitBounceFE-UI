import { shallowMount, mount } from '@vue/test-utils';
import { nextTick } from "vue"
import { expect, test, describe, vi } from 'vitest';
import { BDialog } from '../index';
import Dialog from '../src/dialog';
describe('BDialog.vue', async () => {

  //测试能否打开或关闭dialog
  test('render test', async () => {
    const wrapper = mount(Dialog)
    await nextTick()
    //默认为关闭
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(false)
    await wrapper.setProps({ vModel: true })
    //测试是否能打开
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(true)
    await wrapper.setProps({ vModel: false })
    //测试是否能关闭
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(false)
  })

  //一般props测试
  test('common props test', async () => {
    const wrapper = mount(Dialog, {
      props: {
        title: 'header title',
        width: "50%",
        top: "15vh"
      }
    })
    await nextTick()
    expect(wrapper.html()).toContain("header title")
    expect(wrapper.html()).toContain("50%")
    expect(wrapper.html()).toContain("15vh")

  });

  //延迟测试
  test('delay props test', async (done) => {
    const wrapper = mount(Dialog, {
      props: {
        openDelay: 1000,
        closeDelay: 1000
      }
    })
    await wrapper.setProps({ vModel: true })
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(false)

  });

  //props的function测试TODO
  test('dialog demo has created successfully', async () => {
    const wrapper = mount(Dialog, {
      props: {
        openDelay: 1000,
        closeDelay: 1000
      }
    })
  });
})
