/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 21:13:04
 * @LastEditors: syk syk@qq.com
 * @LastEditTime: 2023-02-01 11:08:29
 * @FilePath: \组件库\BitBounceFE-UI\packages\bb-ui\ui\upload\src\upload.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from 'vue';
import { UploadProps, uploadProps } from './upload-types';
import './upload.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'BUpload',
  props: uploadProps,
  emits: ['change'],
  setup(props: UploadProps, ctx) {
    const Input = ref(''); // 获取input实例
    const fileList = ref([]);
    const change = (e) => {
      fileList.value.unshift(...e.target.files);
      ctx.emit('change', fileList.value);
    };
    const ns = useNamespace('upload');
    const handleSubmit = (e: Event) => {
      (Input.value as unknown as HTMLInputElement).click();
    };
    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));

    return () => (
      <div>
        <input
          type='file'
          class={ns.e('input')}
          ref={Input}
          onChange={change}
          multiple={props.multiple}
        />
        <button class={ns.e('button')} onClick={handleSubmit}>
          上传文件
        </button>
        <div class={ns.e('list')}>
          {fileList.value.map((item, index) => {
            return (
              <>
                <li>
                  {' '}
                  {item.name}
                  <span
                    onClick={(Event) => {
                      // console.log(index);
                      fileList.value.splice(index, 1);
                    }}
                  >
                    删除
                  </span>
                </li>{' '}
              </>
            );
          })}
        </div>
      </div>
    );
  }
});
