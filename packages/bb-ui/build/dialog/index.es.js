import { defineComponent, computed, createVNode, createTextVNode } from "vue";
const dialogProps = {
  vModel: {
    type: Boolean,
    default: void 0
  },
  title: {
    type: String
  },
  width: {
    type: [Number, String],
    default: "50%"
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  top: {
    type: String,
    default: "15vh"
  },
  modal: {
    type: Boolean,
    default: true
  },
  appendToBody: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  beforeClose: {
    type: Function
  },
  draggable: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  alignCenter: {
    type: Boolean,
    default: false
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  }
};
var dialog = "";
function createBem(namespace, element, modifier) {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}
function useNamespace(block, needDot = false) {
  const namespace = needDot ? `.bbui-${block}` : `bbui-${block}`;
  const b = () => createBem(namespace);
  const e = (element) => element ? createBem(namespace, element) : "";
  const m = (modifier) => modifier ? createBem(namespace, "", modifier) : "";
  const em = (element, modifier) => element && modifier ? createBem(namespace, element, modifier) : "";
  return {
    b,
    e,
    m,
    em
  };
}
var Dialog = defineComponent({
  name: "BDialog",
  props: dialogProps,
  components: {},
  setup(props, {
    slots
  }) {
    const ns = useNamespace("dialog");
    computed(() => {
      return true;
    });
    return () => createVNode("div", null, [createTextVNode("66666666666666"), createVNode("div", {
      "class": ns.m("header")
    }, [slots.header && slots.header() || props.title]), createVNode("div", {
      "class": ns.m("body")
    }, [slots.default && slots.default()])]);
  }
});
Dialog.install = function(app) {
  app.component(Dialog.name, Dialog);
};
var index = {
  title: "Dialog \u5BF9\u8BDD\u6846",
  category: "\u53CD\u9988",
  status: "100%",
  install(app) {
    app.component(Dialog.name, Dialog);
  }
};
export { Dialog, index as default };
