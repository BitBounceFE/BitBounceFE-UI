import { mount } from '@vue/test-utils';
import { nextTick, h } from 'vue';
import { expect, test, describe } from 'vitest';
import MessageBox from '../src/message-box';
describe('BMessageBox.vue', async () => {
  // 测试 mask
  test('render test', async () => {
    // 挂载组件，得到这个包裹器
    const wrapper = mount(MessageBox);
    await nextTick();
    // 默认为 false
    expect(wrapper.find('.bbui-message-box__mask').isVisible()).toBe(false);
    wrapper.unmount();
  });
  // props test
  test('common props test', async () => {
    const wrapper = mount(MessageBox, {
      props: {
        title: 'header title'
      }
    });
    await nextTick();
    expect(wrapper.html()).toContain('header title');
    wrapper.unmount();
  });

  // delay test
  test('delay props test', async (done) => {
    const wrapper = mount(MessageBox, {
      props: {
        openDelay: 100,
        closeDelay: 100
      }
    });
    await wrapper.setProps({ vModel: true });
    expect(wrapper.find('.bbui-message-box__mask').isVisible()).toBe(false);
    wrapper.unmount();
  });

  // slots test
  test('emit test', async () => {
    const wrapper = mount(MessageBox, {
      slots: {
        header: h('h1', {}, 'header slot'),
        default: 'Default',
        footer: h('div', {}, 'footer slot')
      }
    });
    await nextTick();
    expect(wrapper.html()).toContain('<h1>header slot</h1>');
    expect(wrapper.html()).toContain('Default');
    expect(wrapper.html()).toContain('<div>footer slot</div>');
    wrapper.unmount();
  });
});
