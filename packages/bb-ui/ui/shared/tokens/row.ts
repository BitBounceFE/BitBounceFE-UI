/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-02-02 09:49:16
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 10:01:20
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\shared\tokens\row.ts
 * @Description: rowContextKey
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import type { Ref, InjectionKey } from 'vue';

export interface RowContextType {
  gutter: Ref<Number>;
}

export const rowContextKey: InjectionKey<RowContextType> =
  Symbol('rowContextKey');
