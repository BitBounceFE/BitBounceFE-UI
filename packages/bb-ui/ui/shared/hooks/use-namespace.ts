/*
 * @Author: 司文超
 * @Date: 2023-01-20 15:15:02
 * @LastEditors: xuepeng184 1831919639@qq.com
 * @LastEditTime: 2023-01-30 16:57:41
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\shared\hooks\use-namespace.ts
 * @Description: BEM 类名生成函数
 */
export type UseNamespace = {
  b: () => string;
  e: (el: string) => string;
  m: (mo: string) => string;
  em: (el: string, mo: string) => string;
};

function createBem(
  namespace: string,
  element?: string,
  modifier?: string
): string {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

/**
 * useNamespace
 *
 * @param block current block name
 * @param needDot Do you need a dot prefix (defalut: false)
 * @returns UseNamespace
 */
export function useNamespace(block: string, needDot = false): UseNamespace {
  // .bb-ui 项目 class 的命名空间
  const namespace = needDot ? `.bbui-${block}` : `bbui-${block}`;
  const b = () => createBem(namespace);
  const e = (element: string) => (element ? createBem(namespace, element) : '');
  const m = (modifier: string) =>
    modifier ? createBem(namespace, '', modifier) : '';
  const em = (element: string, modifier: string) =>
    element && modifier ? createBem(namespace, element, modifier) : '';
  return {
    b,
    e,
    m,
    em
  };
}
