/*
 * @Author: Xia Yuang xiayuang@foxmail.com
 * @Date: 2023-01-27 14:14:49
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-10 14:17:28
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\tabs\src\components\tab-pane\tab-pane-type.ts
 * @Description: Tab Pane Type
 *
 * Copyright (c) 2023 by Xia Yuang xiayuang@foxmail.com, All Rights Reserved.
 */
import { ExtractPropTypes } from 'vue';

export const tabPaneProps = {
  label: {
    type: String,
    default: ''
  },
  diabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  closable: {
    type: Boolean,
    default: false
  }
} as const;

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
