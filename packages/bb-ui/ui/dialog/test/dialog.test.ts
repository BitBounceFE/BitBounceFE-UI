import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { BDialog } from '../index';
test('dialog test', () => {
  const wrapper = shallowMount(BDialog, {
    props: {}
  });
  it('dialog demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
