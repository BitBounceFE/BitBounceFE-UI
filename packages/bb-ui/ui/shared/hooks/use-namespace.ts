
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
    cls += `-${element}`;
  }
  if (modifier) {
    cls += `-${modifier}`;
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
  // .ccui 项目 class 的命名空间
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