/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 21:13:04
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-01 17:45:14
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\select\src\select.tsx
 * @Description: 写select的首页
 */
import { defineComponent, ref, Transition } from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { selectProps, SelectProps } from './select-types';
import './select.scss';
export default defineComponent({
  name: 'BSelect',
  directives: {
    // 控制select的打开与关闭逻辑
    myclick: {
      beforeMount(el: any, { value }): void {
        console.log(el);
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
    const ns = useNamespace('select');
    const input = ref(''); // 获取input实例
    const isShow = ref(false); // 根据这个布尔值是否展示下拉框
    const boxclass = ns.b();
    const sizeclass = boxclass + `-${props.size}`;
    const dataArr = ref([]); // 遍历这个数组
    // eslint-disable-next-line vue/no-setup-props-destructure
    const tempOptions = props.options;
    dataArr.value = tempOptions;
    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    // console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));
    const boxclass1 = 'bbui-select-content';
    // 点击li后更新input中的值

    const handleIsShow = (e) => {
      // console.log(e.target.getAttribute('value'));
      // if(e.target.getAttribute('disabled'))
      if (e.target.className === 'li-disabled') {
        return;
      }
      input.value = e.target.getAttribute('value');
      ctx.emit('update:modelValue', e.target.getAttribute('value'));
      ctx.emit('change', e.target.getAttribute('value'));
    };
    // 点击li后 关闭
    const handleLi = () => {
      isShow.value = false;
      dataArr.value = tempOptions;
    };
    // 空实现
    const handleLi1 = () => {};
    // 改变就过滤效果
    const changeArr = (e) => {
      dataArr.value = tempOptions?.filter((item) => {
        if (item.name.indexOf(e.target.value) !== -1) {
          return item;
        }
      });
      // console.log(dataArr.value);
      console.log(boxclass + '  ' + ns.e(props.size));
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
