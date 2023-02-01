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
var index = {
  title: "Card \u5361\u7247",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Card.name, Card);
  }
};
export { Card, index as default };
