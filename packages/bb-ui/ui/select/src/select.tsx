/*
 * @Author: BitBounceFE
 * @Date: 2023-01-16 21:13:04
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-16 14:16:31
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\select\src\select.tsx
 */
import { defineComponent, ref, Transition } from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';

import { selectProps, SelectProps } from './select-types';
import './select.scss';

export default defineComponent({
  name: 'BSelect',
  directives: {
    // 控制 select 的打开与关闭逻辑
    myclick: {
      beforeMount(el: any, { value }): void {
        // console.log(el);
        const handler: (e: Event) => void = (e) => {
          if (el.contains(e.target)) {
            // console.log('进去了！');
            value.value = true;
          } else {
            // console.log('在外面');
            value.value = false;
          }
        };
        document.addEventListener('click', handler, true);
      }
    }
  },
  props: selectProps,
  emits: ['update:modelValue', 'change'],
  setup(props: SelectProps, ctx) {
    const input = ref(''); // 获取 input 实例
    const isShow = ref(false); // 根据这个布尔值是否展示下拉框

    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    // console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));
    const ns = useNamespace('select');
    const boxclass = ns.b();
    const sizeclass = boxclass + `-${props.size}`;
    const boxclass1 = 'bbui-select-content';

    const dataArr = ref([]); // 遍历这个数组
    // eslint-disable-next-line vue/no-setup-props-destructure
    const tempOptions = props.options;
    dataArr.value = tempOptions;

    // 点击 li 后更新 input 中的值
    const handleIsShow = (e: Event) => {
      const target = e.target as HTMLElement;
      // console.log(e.target.getAttribute('value'));
      // if(e.target.getAttribute('disabled'))
      if (target.className === 'li-disabled') {
        return;
      }
      input.value = target.getAttribute('value');
      ctx.emit('update:modelValue', target.getAttribute('value'));
      ctx.emit('change', target.getAttribute('value'));
    };
    // 点击 li 后关闭
    const handleLi = () => {
      isShow.value = false;
      dataArr.value = tempOptions;
    };
    // 空实现
    const handleLi1 = () => {};
    // 改变就过滤效果
    const changeArr = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      dataArr.value = tempOptions?.filter((item) => {
        if (item.name.indexOf(value) !== -1) {
          return true;
        }
        return false;
      });
      // console.log(dataArr.value);
      // console.log(boxclass + '  ' + ns.e(props.size));
    };

    return () => (
      <div
        class={boxclass + ' ' + sizeclass}
        onClick={handleIsShow}
        v-myclick={isShow}
      >
        {props.searchable ? (
          <input
            type='text'
            value={props.modelValue}
            ref={input}
            class={props.disabled ? `bbui-select-disabled` : ``}
            onInput={changeArr}
          />
        ) : (
          <input
            type='text'
            readonly
            value={props.modelValue}
            ref={input}
            class={props.disabled ? `bbui-select-disabled` : ``}
          />
        )}
        <Transition name='slide-fade'>
          {isShow.value && !props.disabled ? (
            <div class={boxclass1}>
              {dataArr.value?.map((item) => {
                return (
                  <li
                    value={item.value}
                    onClick={item.disabled ? handleLi1 : handleLi}
                    class={item.disabled ? 'li-disabled' : ''}
                  >
                    {' '}
                    {item.name}{' '}
                  </li>
                );
              })}
            </div>
          ) : (
            ''
          )}
        </Transition>
      </div>
    );
  }
});
