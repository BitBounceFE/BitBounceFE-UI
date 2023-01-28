import { defineComponent, computed, createVNode, createTextVNode, withDirectives, vShow } from "vue";
const cardProps = {
  shadow: {
    type: String,
    default: "always"
  },
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: Object,
    default: () => {
      return { padding: "20px" };
    }
  }
};
var card = "";
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
var Card = defineComponent({
  name: "BCard",
  props: cardProps,
  setup(props, {
    slots
  }) {
    const ns = useNamespace("card");
    console.log(ns.b(), ns.e("nse"), ns.m("nsm"), ns.em("em", "open"));
    const boxClass = `${ns.b()} ${ns.m(props.shadow)}-shadow`;
    const isHeader = computed(() => {
      return props.header || slots.header;
    });
    return () => createVNode("div", {
      "class": boxClass
    }, [createTextVNode("66666666666666"), withDirectives(createVNode("div", {
      "class": ns.m("header")
    }, [slots.header && slots.header() || props.header]), [[vShow, isHeader]]), createVNode("div", {
      "class": ns.m("body"),
      "style": props.bodyStyle
    }, [slots.default && slots.default()])]);
  }
});
Card.install = function(app) {
  app.component(Card.name, Card);
};
var CardInstall = {
  title: "Card \u5361\u7247",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Card.name, Card);
  }
};
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
var DialogInstall = {
  title: "Dialog \u5BF9\u8BDD\u6846",
  category: "\u53CD\u9988",
  status: "100%",
  install(app) {
    app.component(Dialog.name, Dialog);
  }
};
const iconProps = {};
var icon = "";
var Icon = defineComponent({
  name: "BIcon",
  props: iconProps,
  emits: [],
  setup(props, ctx) {
    return () => {
      return createVNode("div", {
        "class": "bbui-icon"
      }, [createTextVNode("icon")]);
    };
  }
});
var IconDirective = {
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeUnmount() {
  },
  unmounted() {
  }
};
const IconService = {};
Icon.install = function(app) {
  app.component(Icon.name, Icon);
};
var IconInstall = {
  title: "Icon \u56FE\u6807",
  category: "\u901A\u7528",
  status: void 0,
  install(app) {
    app.component(Icon.name, Icon);
    app.directive("Icon", IconDirective);
    app.config.globalProperties.$iconService = IconService;
  }
};
const installs = [
  CardInstall,
  DialogInstall,
  IconInstall
];
var vueBbui = {
  version: "1.0.8",
  install(app) {
    installs.forEach((p) => app.use(p));
  }
};
export { Card, Dialog, Icon, IconDirective, IconService, vueBbui as default };
