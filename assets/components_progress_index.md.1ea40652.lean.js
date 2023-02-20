import{_ as v,c as _,a as r,w as k,b as E,d as n,e as t,r as m,o as C,V as h}from"./app.b2fb87a7.js";const B={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:a,createElementVNode:o,openBlock:u,createElementBlock:c}=h;function l(p,g){const s=e("b-progress");return u(),c("div",null,[o("div",null,[a(s,{strokeWidth:10,percentage:30}),a(s,{strokeWidth:10,percentage:30,defineBackColor:"green"}),a(s,{textColor:"red",color:"yellow",strokeWidth:24,percentage:60,textInside:!0}),a(s,{percentage:90})])])}return{render:l,...{}}}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:a,createElementVNode:o,openBlock:u,createElementBlock:c}=h;function l(p,g){const s=e("b-progress");return u(),c("div",null,[o("div",null,[a(s,{type:"Circle",strokeWidth:8,percentage:35}),a(s,{color:"green",type:"Circle",strokeWidth:8,percentage:70,strokeLinecap:"butt"})])])}return{render:l,...{}}}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:a,createElementVNode:o,openBlock:u,createElementBlock:c}=h;function l(p,g){const s=e("b-progress");return u(),c("div",null,[o("div",null,[a(s,{type:"dashboard",strokeWidth:8,percentage:35}),a(s,{color:"green",type:"dashboard",strokeWidth:8,percentage:70,strokeLinecap:"butt"})])])}return{render:l,...{}}}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:a,createElementVNode:o,createTextVNode:u,withCtx:c,openBlock:l,createElementBlock:d}=h,p=o("br",null,null,-1);function g(i,L){const b=e("b-progress"),F=e("b-button");return l(),d("div",null,[o("div",null,[a(b,{percentage:i.percentage},null,8,["percentage"]),p,a(b,{color:"yellow",type:"Circle",strokeWidth:8,percentage:i.percentage},null,8,["percentage"]),a(b,{color:"green",type:"dashboard",strokeWidth:8,percentage:i.percentage,strokeLinecap:"butt"},null,8,["percentage"]),a(F,{type:"primary",size:"large",onClick:i.increase,plain:!0},{default:c(()=>[u("+")]),_:1},8,["onClick"]),a(F,{type:"primary",size:"large",onClick:i.decrease,plain:!0},{default:c(()=>[u("-")]),_:1},8,["onClick"])])])}return{render:g,...{data(){return{percentage:30}},methods:{increase(){this.percentage+=10,this.percentage>100&&(this.percentage=100)},decrease(){this.percentage-=10,this.percentage<0&&(this.percentage=0)}}}}}()}},z=JSON.parse('{"title":"Progress \u8FDB\u5EA6\u6761","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":2,"title":"\u73AF\u5F62\u8FDB\u5EA6\u6761","slug":"\u73AF\u5F62\u8FDB\u5EA6\u6761"},{"level":2,"title":"\u4EEA\u8868\u76D8","slug":"\u4EEA\u8868\u76D8"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"components/progress/index.md","lastUpdated":1676610810000}'),A=E('<h1 id="progress-\u8FDB\u5EA6\u6761" tabindex="-1">Progress \u8FDB\u5EA6\u6761 <a class="header-anchor" href="#progress-\u8FDB\u5EA6\u6761" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u8FDB\u5EA6\uFF0C\u544A\u77E5\u7528\u6237\u5F53\u524D\u72B6\u6001\u3002</p></div><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h2><ul><li>\u5411\u7528\u6237\u5C55\u793A\u64CD\u4F5C\u8FDB\u5EA6\u3002</li><li>\u5F53\u9700\u8981\u663E\u793A\u4E00\u4E2A\u64CD\u4F5C\u5B8C\u6210\u7684\u767E\u5206\u6BD4\u6216\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4 / \u603B\u6B65\u9AA4\u65F6\u3002</li></ul><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u7C7B\u578B\u8FDB\u5EA6\u6761</p>',6),y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(`
      `),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"defineBackColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("green"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(`
      `),n("span",{class:"token attr-name"},"textColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("red"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("yellow"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("24"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("60"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":textInside"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("90"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),D=n("h2",{id:"\u73AF\u5F62\u8FDB\u5EA6\u6761",tabindex:"-1"},[t("\u73AF\u5F62\u8FDB\u5EA6\u6761 "),n("a",{class:"header-anchor",href:"#\u73AF\u5F62\u8FDB\u5EA6\u6761","aria-hidden":"true"},"#")],-1),f=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Circle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("8"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("35"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("green"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Circle"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("8"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("70"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"strokeLinecap"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("butt"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),q=n("h2",{id:"\u4EEA\u8868\u76D8",tabindex:"-1"},[t("\u4EEA\u8868\u76D8 "),n("a",{class:"header-anchor",href:"#\u4EEA\u8868\u76D8","aria-hidden":"true"},"#")],-1),x=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dashboard"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("8"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("35"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("green"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dashboard"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("8"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("70"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"strokeLinecap"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("butt"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h2",{id:"\u5176\u4ED6",tabindex:"-1"},[t("\u5176\u4ED6 "),n("a",{class:"header-anchor",href:"#\u5176\u4ED6","aria-hidden":"true"},"#")],-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("percentage"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("yellow"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Circle"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("8"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("percentage"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-progress")]),t(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("green"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dashboard"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("8"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("percentage"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"strokeLinecap"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("butt"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-progress")]),n("span",{class:"token punctuation"},">")]),t(`
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("increase"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":plain"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),t("true")]),n("span",{class:"token punctuation"},">")]),t("+"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-button")]),n("span",{class:"token punctuation"},">")]),t(`
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("decrease"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":plain"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),t("true")]),n("span",{class:"token punctuation"},">")]),t("-"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"percentage"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"30"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"increase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("percentage "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("percentage "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("percentage "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"decrease"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("percentage "),n("span",{class:"token operator"},"-="),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("percentage "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("percentage "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),w=E('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>percentage</td><td>number</td><td>0</td><td>\u5FC5\u9009\uFF0C\u8FDB\u5EA6\u6761\u7684\u503C\u6700\u5927\u4E3A 100\u3002</td></tr><tr><td>type</td><td><code>&#39;line&#39;</code>\xA0|\xA0<code>&#39;dashboard&#39;</code>|<code>&#39;circle&#39;</code></td><td><code>&#39;line&#39;</code></td><td>\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u7C7B\u578B\u3002</td></tr><tr><td>strokeWidth</td><td>number</td><td>6</td><td>\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u7684\u5BBD\u5EA6\u3002</td></tr><tr><td>textInside</td><td>boolean</td><td>false</td><td>\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u663E\u793A\u6587\u5B57\u5185\u7F6E\u5728\u8FDB\u5EA6\u6761\u5185\uFF08\u4EC5 type \u4E3A line \u65F6\u53EF\u7528\uFF09\u3002</td></tr><tr><td>color</td><td>string</td><td><code>&#39;blue&#39;</code></td><td>\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u7684\u989C\u8272\u3002</td></tr><tr><td>width</td><td>number</td><td>126</td><td>\u53EF\u9009\uFF0C\u73AF\u5F62\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF08\u53EA\u5728 type \u4E3A Circle \u6216 dashboard \u65F6\u53EF\u7528\uFF09\u3002</td></tr><tr><td>showText</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9\u3002</td></tr><tr><td>strokeLinecap</td><td>string</td><td><code>&#39;round&#39;</code></td><td>\u53EF\u9009\uFF0Ccircle / dashboard \u7C7B\u578B\u8DEF\u5F84\u4E24\u7AEF\u7684\u5F62\u72B6\u3002</td></tr><tr><td>defineBackcolor</td><td>string</td><td><code>&#39;#eee&#39;</code></td><td>\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u7684\u80CC\u666F\u989C\u8272\u3002</td></tr><tr><td>textColor</td><td>string</td><td><code>&#39;black&#39;</code></td><td>\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u7684\u5B57\u4F53\u989C\u8272\u3002</td></tr></tbody></table>',3);function N(e,a,o,u,c,l){const d=m("render-demo-0"),p=m("demo"),g=m("render-demo-1"),s=m("render-demo-2"),i=m("render-demo-3");return C(),_("div",null,[A,r(p,{sourceCode:`<template>
  <div>
    <b-progress :strokeWidth="10" :percentage="30"></b-progress>
    <b-progress
      :strokeWidth="10"
      :percentage="30"
      defineBackColor="green"
    ></b-progress>
    <b-progress
      textColor="red"
      color="yellow"
      :strokeWidth="24"
      :percentage="60"
      :textInside="true"
    ></b-progress>
    <b-progress :percentage="90"></b-progress>
  </div>
</template>
`},{highlight:k(()=>[y]),default:k(()=>[r(d)]),_:1}),D,r(p,{sourceCode:`<template>
  <div>
    <b-progress type="Circle" :strokeWidth="8" :percentage="35"></b-progress>
    <b-progress
      color="green"
      type="Circle"
      :strokeWidth="8"
      :percentage="70"
      strokeLinecap="butt"
    ></b-progress>
  </div>
</template>
`},{highlight:k(()=>[f]),default:k(()=>[r(g)]),_:1}),q,r(p,{sourceCode:`<template>
  <div>
    <b-progress type="dashboard" :strokeWidth="8" :percentage="35"></b-progress>
    <b-progress
      color="green"
      type="dashboard"
      :strokeWidth="8"
      :percentage="70"
      strokeLinecap="butt"
    ></b-progress>
  </div>
</template>
`},{highlight:k(()=>[x]),default:k(()=>[r(s)]),_:1}),W,r(p,{sourceCode:`<template>
  <div>
    <b-progress :percentage="percentage"></b-progress>
    <br />
    <b-progress
      color="yellow"
      type="Circle"
      :strokeWidth="8"
      :percentage="percentage"
    ></b-progress>
    <b-progress
      color="green"
      type="dashboard"
      :strokeWidth="8"
      :percentage="percentage"
      strokeLinecap="butt"
    ></b-progress>
     <b-button type="primary" size="large" @click="increase" :plain=true>+</b-button>
     <b-button type="primary" size="large" @click="decrease" :plain=true>-</b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      percentage: 30
    };
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    }
  }
};
<\/script>
`},{highlight:k(()=>[V]),default:k(()=>[r(i)]),_:1}),w])}var P=v(B,[["render",N]]);export{z as __pageData,P as default};
