/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-29 14:59:41
 * @LastEditors: fxjzz && 1042183935@qq.com
 * @LastEditTime: 2023-01-29 16:35:26
 * @FilePath: \BB-UI\packages\bb-ui\ui\date-picker\src\date-picker-types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { ExtractPropTypes } from 'vue';

export const datePickerProps = {};

// 获取 props 类型
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
