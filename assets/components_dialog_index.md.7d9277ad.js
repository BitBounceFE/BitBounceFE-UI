import{_ as v,c as y,a as D,w as h,b as C,r as m,o as _,V as b,d as t,e as n}from"./app.b2fb87a7.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:k,resolveComponent:l,withCtx:e,createVNode:c,createElementVNode:u,openBlock:F,createElementBlock:p}=b,i=u("span",null,"This is a message",-1),E={class:"dialog-footer"};function f(a,s){const d=l("b-button"),r=l("b-dialog");return F(),p("div",null,[c(d,{type:"primary",onClick:a.add,plain:!0},{default:e(()=>[k("Click to open the Dialog")]),_:1},8,["onClick"]),c(r,{modelValue:a.dialogVisible,"onUpdate:modelValue":s[2]||(s[2]=o=>a.dialogVisible=o),title:a.header,onOpen:a.open,onClose:a.close,"open-delay":a.openDelay},{footer:e(()=>[u("span",E,[u("button",{onClick:s[0]||(s[0]=o=>a.dialogVisible=!1)},"Cancel"),u("button",{onClick:s[1]||(s[1]=o=>a.dialogVisible=!1)},"Confirm")])]),default:e(()=>[i]),_:1},8,["modelValue","title","onOpen","onClose","open-delay"])])}const{ref:g}=b;return{render:f,...{setup(){const a="header",s=g(!1),d=()=>{console.log("open")},r=()=>{console.log("close")},o=()=>{s.value=!0},B=g(1e3);return{header:a,dialogVisible:s,open:d,close:r,openDelay:B,add:o}}}}}()}},P=JSON.parse('{"title":"Dialog \u5BF9\u8BDD\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":3,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"},{"level":3,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"}],"relativePath":"components/dialog/index.md","lastUpdated":1676613341000}'),A=C('<h1 id="dialog-\u5BF9\u8BDD\u6846" tabindex="-1">Dialog \u5BF9\u8BDD\u6846 <a class="header-anchor" href="#dialog-\u5BF9\u8BDD\u6846" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Dialog \u5F39\u51FA\u4E00\u4E2A\u5BF9\u8BDD\u6846\uFF0C\u9002\u5408\u9700\u8981\u5B9A\u5236\u6027\u66F4\u5927\u7684\u573A\u666F\u3002</p></div><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h2><ul><li>\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002</li></ul><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h2>',5),x=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("b-button")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("add"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":plain"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Click to open the Dialog"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("b-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("b-dialog")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("dialogVisible"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("header"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@open"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("open"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@close"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("close"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":open-delay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("openDelay"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("This is a message"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#footer"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("dialog-footer"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("dialogVisible = false"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Cancel"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("dialogVisible = false"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Confirm"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("b-dialog")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" header "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'header'"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" dialogVisible "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"open"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'open'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"close"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'close'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"add"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      dialogVisible`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" openDelay "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      header`),t("span",{class:"token punctuation"},","),n(`
      dialogVisible`),t("span",{class:"token punctuation"},","),n(`
      open`),t("span",{class:"token punctuation"},","),n(`
      close`),t("span",{class:"token punctuation"},","),n(`
      openDelay`),t("span",{class:"token punctuation"},","),n(`
      add`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("scss"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"scoped"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".dialog-footer"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" end"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".dialog-footer button"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 80px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"margin"),t("span",{class:"token punctuation"},":"),n(" 0 10px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"border"),t("span",{class:"token punctuation"},":"),n(" 1px solid #454ce1"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"border-radius"),t("span",{class:"token punctuation"},":"),n(" 2px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),w=C('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model / model-value</td><td>boolean</td><td>\u2014</td><td>\u662F\u5426\u663E\u793A Dialog</td></tr><tr><td>title</td><td>string</td><td>\u2014</td><td>Dialog \u5BF9\u8BDD\u6846 Dialog \u7684\u6807\u9898\uFF0C \u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \uFF08\u89C1\u4E0B\u8868\uFF09\u4F20\u5165</td></tr><tr><td>width</td><td>string | number</td><td>40%</td><td>Dialog \u7684\u5BBD\u5EA6</td></tr><tr><td>top</td><td>string</td><td>15vh</td><td>Dialog CSS \u4E2D\u7684 margin-top \u503C</td></tr><tr><td>beforeClose</td><td>function(done)</td><td>-</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Dialog \u7684\u5173\u95ED\u3002\u56DE\u8C03\u51FD\u6570\u5185\u6267\u884C done \u53C2\u6570\u65B9\u6CD5\u7684\u65F6\u5019\u624D\u662F\u771F\u6B63\u5173\u95ED\u5BF9\u8BDD\u6846\u7684\u65F6\u5019\u3002</td></tr><tr><td>openDelay</td><td>number</td><td>0</td><td>Dialog \u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\u3002</td></tr><tr><td>closeDelay</td><td>number</td><td>0</td><td>Dialog \u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\u3002</td></tr><tr><td>fullscreen</td><td>boolean</td><td>false</td><td>\u662F\u5426\u4E3A\u5168\u5C4F</td></tr><tr><td>modal</td><td>boolean</td><td>true</td><td>\u662F\u5426\u9700\u8981\u906E\u7F69\u5C42</td></tr><tr><td>closeOnPressEscape</td><td>boolean</td><td>true</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Dialog</td></tr><tr><td>closeOnClickModal</td><td>boolean</td><td>true</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4F7F\u7528\u7684\u662F model-value \u53C2\u6570\uFF0C\u5219 close-on-press-escape\u3001close-on-click-modal \u53C2\u6570\u751F\u6548\u4F1A\u65E0\u6CD5\u89E6\u53D1 model-value \u53C2\u6570\u503C\u7684\u6539\u53D8\u3002\u5982\u679C\u60F3\u8BA9 model-value \u53C2\u6570\u503C\u6539\u53D8\uFF0C\u5EFA\u8BAE\u4F7F\u7528 v-model \u6216\u8005\u5728\u6807\u7B7E\u4E0A\u6DFB\u52A0 @update:modelValue \u4E8B\u4EF6\uFF0C\u901A\u8FC7\u4E8B\u4EF6\u8FDB\u884C modelValue \u503C\u7684\u8F6C\u53D8\u3002</p></div><h3 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Dialog \u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>\u5BF9\u8BDD\u6846\u6807\u9898\u7684\u5185\u5BB9\uFF1B\u4F1A\u66FF\u6362\u6807\u9898\u90E8\u5206\u3002</td></tr><tr><td>footer</td><td>Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9</td></tr></tbody></table><h3 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>open</td><td>\u2014</td><td>Dialog \u6253\u5F00\u7684\u56DE\u8C03</td></tr><tr><td>close</td><td>\u2014</td><td>Dialog \u5173\u95ED\u7684\u56DE\u8C03</td></tr><tr><td>opened</td><td>\u2014</td><td>Dialog \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td></tr><tr><td>closed</td><td>\u2014</td><td>Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td></tr></tbody></table>',8);function q(k,l,e,c,u,F){const p=m("render-demo-0"),i=m("demo");return _(),y("div",null,[A,D(i,{sourceCode:`<template>
  <b-button type="primary" @click="add" :plain="true">Click to open the Dialog</b-button>
  <b-dialog
    v-model="dialogVisible"
    :title="header"
    @open="open"
    @close="close"
    :open-delay="openDelay"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <button @click="dialogVisible = false">Cancel</button>
        <button @click="dialogVisible = false">Confirm</button>
      </span>
    </template>
  </b-dialog>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const header = 'header';
    const dialogVisible = ref(false);
    const open = () => {
      console.log('open');
    };
    const close = () => {
      console.log('close');
    };
    const add = () => {
      dialogVisible.value = true;
    };
    const openDelay = ref(1000);
    return {
      header,
      dialogVisible,
      open,
      close,
      openDelay,
      add,
    };
  }
};
<\/script>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: end;
}
.dialog-footer button {
  width: 80px;
  margin: 0 10px;
  border: 1px solid #454ce1;
  border-radius: 2px;
}
</style>
`},{highlight:h(()=>[x]),default:h(()=>[D(p)]),_:1}),w])}var $=v(V,[["render",q]]);export{P as __pageData,$ as default};
