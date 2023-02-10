/*
 * @Author: ThreeFire1 thricefice@gmail.com
 * @Date: 2023-02-09 14:21:35
 * @LastEditors: ThreeFire1 thricefice@gmail.com
 * @LastEditTime: 2023-02-09 16:01:05
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\button\test\button.test.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { describe, test, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { useNamespace } from '../../shared/hooks/use-namespace';
import Button from '../src/button';
import { ButtonType, ButtonSizeType } from '../src/button-types';

const ns = useNamespace('button');
const buttonClass = ns.b();
const getTypeClass = (type: ButtonType) => {
    return ns.m(type);
};

const getSizeClass = (type: ButtonSizeType) => {
    return ns.m(type);
};

const roundClass = ns.m('round');
const circleClass = ns.m('circle');

describe('Button', () => {

    it('create', () => {
        const Text = 'bbui';
        const wrapper = mount({
            setup() {
                return () => {
                    return <Button>{Text}</Button>;
                };
            },
        });

        expect(wrapper.classes()).toContain(buttonClass);

        //test slots
        expect(wrapper.text()).toEqual(Text);

        wrapper.unmount();
    });

    it('type', async () => {
        const wrapper = mount({
            setup() {
                return () => {
                    return <Button type='primary'></Button>;
                };
            },
        });
        expect(wrapper.classes()).toContain(getTypeClass('primary'));

        await wrapper.setProps({ type: 'success' });
        expect(wrapper.classes()).toContain(getTypeClass('success'));

        await wrapper.setProps({ type: 'warning' });
        expect(wrapper.classes()).toContain(getTypeClass('warning'));

        await wrapper.setProps({ type: 'danger' });
        expect(wrapper.classes()).toContain(getTypeClass('danger'));

        await wrapper.setProps({ type: 'info' });
        expect(wrapper.classes()).toContain(getTypeClass('info'));

        wrapper.unmount();
    });

    it('size', async () => {
        const wrapper = mount({
            setup() {
                return () => {
                    return <Button size='large'></Button>;
                };
            },
        });
        expect(wrapper.classes()).toContain(getSizeClass('large'));

        await wrapper.setProps({ size: 'small' });
        expect(wrapper.classes()).toContain(getSizeClass('small'));
    });

    it('round', async () => {
        const wrapper = mount({
            setup() {
                return () => {
                    return <Button round="true"></Button>;
                };
            },
        });
        expect(wrapper.classes()).toContain(roundClass);
    });

    it('circle', async () => {
        const wrapper = mount({
            setup() {
                return () => {
                    return <Button circle="true"></Button>;
                };
            },
        });
        expect(wrapper.classes()).toContain(circleClass);
    });

    it('disabled', async () => {
        const handleClick = vi.fn();
        const wrapper = mount({
          setup() {
            return () => {
              return <Button disabled onClick={handleClick}></Button>;
            };
          }
        });
        await wrapper.trigger('click');
        expect(handleClick).not.toBeCalled();
      });
});