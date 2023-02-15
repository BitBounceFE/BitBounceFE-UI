/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 21:13:04
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 19:27:14
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\upload\src\upload.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';

import { UploadProps, uploadProps } from './upload-types';
import './upload.scss';

export default defineComponent({
  name: 'BUpload',
  props: uploadProps,
  emits: ['change'],
  setup(props: UploadProps, ctx) {
    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    const ns = useNamespace('upload');
    console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));

    const Input = ref(''); // 获取input实例
    const fileList = ref([]);
    const change = (e: Event) => {
      fileList.value.unshift(...(e.target as HTMLInputElement).files);
      ctx.emit('change', fileList.value);
    };
    const handleSubmit = (e: Event) => {
      (Input.value as unknown as HTMLInputElement).click();
    };

    return () => (
      <div>
        <input
          type='file'
          class='bbui-upload-input'
          ref={Input}
          onChange={change}
          multiple={props.multiple}
        />
        <button class='bbui-upload-button' onClick={handleSubmit}>
          上传文件
        </button>
        <div class='bbui-upload-list'>
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
