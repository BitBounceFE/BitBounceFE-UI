import { mount } from '@vue/test-utils';
import { nextTick, h } from 'vue';
import { expect, test, describe, vi } from 'vitest';
import Dialog from '../src/dialog';
describe('BDialog.vue', async () => {
  // 测试能否打开或关闭dialog
  test('render test', async () => {
    const wrapper = mount(Dialog);
    await nextTick();
    // 默认为关闭
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(false);
    await wrapper.setProps({ modelValue: true });
    // 测试是否能打开
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(true);
    await wrapper.setProps({ modelValue: false });
    // 测试是否能关闭
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(false);
  });

  // 一般 props 测试
  test('common props test', async () => {
    const wrapper = mount(Dialog, {
      props: {
        title: 'header title',
        width: '60%',
        top: '20vh'
      }
    });
    await nextTick();
    expect(wrapper.html()).toContain('header title');
    expect(wrapper.html()).toContain('60%');
    expect(wrapper.html()).toContain('20vh');
  });

  // modal 测试
  test('modal props test', async () => {
    const wrapper = mount(Dialog, {
      props: {
        modelValue: true,
        modal: false
      }
    });
    await nextTick();
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(true);
    expect(wrapper.find('.bbui-dialog__mask').html()).toContain(
      'bbui-dialog--mask'
    );
  });

  // fullscreen 测试
  test('fullscreen props test', async () => {
    const wrapper = mount(Dialog, {
      props: {
        modelValue: true,
        fullscreen: true
      }
    });
    await nextTick();
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(true);
    expect(wrapper.find('.bbui-dialog').html()).toContain('width: 100vw');
    expect(wrapper.find('.bbui-dialog').html()).toContain('height: 100vh');
    expect(wrapper.find('.bbui-dialog').html()).toContain('top: 0');
  });

  /*
  // close-on-press-escape 测试
  test('close-on-press-escape props test', async () => {
    const wrapper = mount(Dialog, {
      props: {
        modelValue: true
      }
    });
    const doc = mount(document);
    console.log(doc);
    await nextTick();
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(true);
    console.log(doc);
    await doc.trigger('keydown', { key: 'Escape' });
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(false);
  });
  */

  // close-on-click-modal测试
  test('close-on-click-modal props test', async () => {
    const wrapper = mount(Dialog, {
      props: {
        modelValue: true
      }
    });
    await nextTick();
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(true);
    await wrapper.find('.bbui-dialog__mask').trigger('click');
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(false);
  });

  // 延迟测试
  test('delay props test', async (done) => {
    const wrapper = mount(Dialog, {
      props: {
        openDelay: 1000,
        closeDelay: 1000
      }
    });
    await wrapper.setProps({ modelValue: true });
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(false);
  });

  // props 的 function 测试
  test('function props test', async () => {
    const beforeClose = vi.fn();
    const wrapper = mount(Dialog, {
      props: {
        beforeClose
      }
    });
    await nextTick();
    await wrapper.setProps({ modelValue: true });
    expect(wrapper.find('.bbui-dialog__mask').isVisible()).toBe(true);
    await wrapper.setProps({ modelValue: false });
    expect(beforeClose).toHaveBeenCalled();
  });

  // emit test
  test('emit test', async () => {
    const wrapper = mount(Dialog);
    await nextTick();
    // 触发 open
    await wrapper.setProps({ modelValue: true });
    expect(wrapper.emitted().open).toBeTruthy();
    // 触发 close
    await wrapper.setProps({ modelValue: false });
    expect(wrapper.emitted().close).toBeTruthy();
    // 触发 opened
    wrapper.vm.$emit('opened');
    expect(wrapper.emitted().opened).toBeTruthy();
    // 触发 closed
    wrapper.vm.$emit('closed');
    expect(wrapper.emitted().closed).toBeTruthy();
  });

  // slots test
  test('emit test', async () => {
    const wrapper = mount(Dialog, {
      slots: {
        default: 'Default',
        header: h('h1', {}, 'i am header slot'),
        footer: h('div', {}, 'i am footer slot')
      }
    });
    await nextTick();
    expect(wrapper.html()).toContain('Default');
    expect(wrapper.html()).toContain('<h1>i am header slot</h1>');
    expect(wrapper.html()).toContain('<div>i am footer slot</div>');
  });
});
