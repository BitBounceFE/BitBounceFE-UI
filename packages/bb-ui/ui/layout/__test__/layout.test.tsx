/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-02-09 15:21:11
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 13:54:10
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\layout\__test__\layout.test.tsx
 * @Description: Unit test of Layout
 */
import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref, nextTick } from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import Row from '../src/components/row/row';
import Col from '../src/components/col/col';

const rowNs = useNamespace('row');
const colNs = useNamespace('col');

const row = rowNs.b();
const rowJustifyCenter = rowNs.m('justify-center');
const rowAlignMiddle = rowNs.m('align-middle');

const col = colNs.b();

describe('Row', () => {
  test('create', () => {
    const wrapper = mount(() => <Row />);
    expect(wrapper.classes()).toContain(row);
  });

  test('tag', () => {
    const wrapper = mount(() => <Row tag='main' />);
    expect(wrapper.findComponent('main').exists()).toBeTruthy();
  });

  test('justify', () => {
    const wrapper = mount(() => <Row justify='center' />);
    expect(wrapper.classes()).toContain(rowJustifyCenter);
  });
  test('align', () => {
    const wrapper = mount(() => <Row align='middle' />);
    expect(wrapper.classes()).toContain(rowAlignMiddle);
  });

  test('gutter', () => {
    const wrapper = mount(() => <Row gutter={20} />);
    const rowElm = wrapper.element as HTMLElement;
    expect(rowElm.style.marginLeft).toEqual('-10px');
    expect(rowElm.style.marginRight).toEqual('-10px');
  });
  test('change gutter', async () => {
    const gutter = ref(20);

    const wrapper = mount(() => <Row ref='row' gutter={gutter.value} />);

    const rowElm = wrapper.element as HTMLElement;
    expect(rowElm.style.marginLeft).toEqual('-10px');
    expect(rowElm.style.marginRight).toEqual('-10px');

    gutter.value = 40;
    await nextTick();
    expect(rowElm.style.marginLeft).toEqual('-20px');
    expect(rowElm.style.marginRight).toEqual('-20px');
  });
});

describe('Col', () => {
  test('create', () => {
    const wrapper = mount(() => <Col />);
    expect(wrapper.classes()).toContain(col);
  });

  test('tag', () => {
    const wrapper = mount(() => <Col tag='main' />);
    expect(wrapper.findComponent('main').exists()).toBeTruthy();
  });

  test('span', () => {
    const wrapper = mount(() => <Col span={12} />);
    expect(wrapper.classes()).toContain(colNs.m(`span-12`));
  });
  test('offset', () => {
    const wrapper = mount(() => <Col offset={12} />);
    expect(wrapper.classes()).toContain(colNs.m(`offset-12`));
  });
  test('push', () => {
    const wrapper = mount(() => <Col push={12} />);
    expect(wrapper.classes()).toContain(colNs.m(`push-12`));
  });
  test('pull', () => {
    const wrapper = mount(() => <Col pull={12} />);
    expect(wrapper.classes()).toContain(colNs.m(`pull-12`));
  });

  test('gutter', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Row gutter={20}>
            <Col ref='col' />
          </Row>
        );
      }
    });

    const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement;
    expect(colElm.style.paddingLeft).toEqual('10px');
    expect(colElm.style.paddingRight).toEqual('10px');
  });
  test('change gutter', async () => {
    const gutter = ref(20);

    const wrapper = mount({
      setup() {
        return () => (
          <Row gutter={gutter.value}>
            <Col ref='col' />
          </Row>
        );
      }
    });

    const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement;
    expect(colElm.style.paddingLeft).toEqual('10px');
    expect(colElm.style.paddingRight).toEqual('10px');

    gutter.value = 40;
    await nextTick();
    expect(colElm.style.paddingLeft).toEqual('20px');
    expect(colElm.style.paddingRight).toEqual('20px');
  });
});
