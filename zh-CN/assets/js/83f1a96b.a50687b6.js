"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2211],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),a=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=a(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=a(n),h=r,s=p["".concat(u,".").concat(h)]||p[h]||m[h]||i;return n?o.createElement(s,c(c({ref:t},d),{},{components:n})):o.createElement(s,c({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){var o=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,c=(0,r.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:c,target:"_blank"},o.createElement("img",{width:n,height:i,src:c})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:c,target:"_blank"},o.createElement("img",{width:n,height:i,src:c})),o.createElement("p",null,e.children))}},84541:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(67294),r=n(86010),i=n(99492),c=n(39130),l=n(35096),u=n(33084),a="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function m({href:e,children:t}){return o.createElement(c.Z,{href:e,className:(0,r.Z)("card padding--lg",a)},t)}function h({href:e,icon:t,title:n,description:i}){return o.createElement(m,{href:e},o.createElement("h2",{className:(0,r.Z)("text--truncate",d),title:n},t," ",n),i&&o.createElement("p",{className:(0,r.Z)("text--truncate",p),title:i},i))}function s({item:e}){const t=(0,i.Wl)(e);return t?o.createElement(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t;const n=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(null!=(t=e.docId)?t:void 0);return o.createElement(h,{href:e.href,icon:n,title:e.label,description:null==r?void 0:r.description})}function v({item:e}){switch(e.type){case"link":return o.createElement(f,{item:e});case"category":return o.createElement(s,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g({items:e,className:t}){return o.createElement("section",{className:(0,r.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(v,{item:e})))))}},83833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return T},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var o=n(3905),r=n(44035),i=n(84541),c=n(99492),l=Object.defineProperty,u=Object.defineProperties,a=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&h(e,n,t[n]);return e};const f={id:"development-introduction",title:"\u5f00\u53d1\u7b80\u4ecb"},v=void 0,g={unversionedId:"development/development-introduction",id:"development/development-introduction",title:"\u5f00\u53d1\u7b80\u4ecb",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",sourceDirName:"development",slug:"/development/development-introduction",permalink:"/4.19/zh-CN/docs/development/development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"development-introduction",title:"\u5f00\u53d1\u7b80\u4ecb"},sidebar:"docs",previous:{title:"\u5185\u5b58\u4f7f\u7528",permalink:"/4.19/zh-CN/docs/basic-concepts/memory-usage"},next:{title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-selection-introduction"}},T={},k=[{value:"\u4e3b\u8981\u64cd\u4f5c",id:"main-activities",level:2},{value:"\u4e3b\u8981\u90e8\u4ef6",id:"main-components",level:2},{value:"\u786c\u4ef6\u9009\u62e9",id:"hardware-selection",level:2},{value:"\u539f\u578b\u8bbe\u8ba1",id:"prototyping",level:3},{value:"\u5b9a\u5236\u786c\u4ef6",id:"custom-hardware",level:3},{value:"\u677f\u542f\u52a8\u642d\u5efa",id:"board-bring-up",level:2},{value:"STM32CubeMX",id:"stm32cubemx",level:3},{value:"TouchGFX\u677f\u5361\u8bbe\u7f6e\uff08TBS\uff09",id:"application-templates-ats",level:3},{value:"TouchGFX AL\u5f00\u53d1",id:"touchgfx-al-development",level:2},{value:"TouchGFX Generator",id:"touchgfx-generator",level:3},{value:"UI\u5f00\u53d1",id:"ui-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:3},{value:"TouchGFX\u677f\u5361\u8bbe\u7f6e",id:"application-templates",level:3},{value:"\u6f14\u793a\u548c\u793a\u4f8b",id:"ui-templates",level:3},{value:"\u5b9a\u5236\u786c\u4ef6",id:"custom-hardware-1",level:3},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"workflow",level:2},{value:"\u751f\u6210\u7684\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801",id:"generated-code-and-user-code",level:3},{value:"\u66f4\u6539\u7f16\u8bd1\u5668/IDE",id:"change-of-compileride",level:3}],X={toc:k};function w(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&d)for(var o of d(e))t.indexOf(o)<0&&m.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=s(s({},X),h),u(t,a({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"This section contains information on how to develop a TouchGFX application including, structure, workflow and tools."),(0,o.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,o.kt)("h2",s({},{id:"main-activities"}),"\u4e3b\u8981\u64cd\u4f5c"),(0,o.kt)("p",null,"\u4e00\u4e2aTouchGFX\u9879\u76ee\u4f1a\u6d89\u53ca\u5230\u5f00\u53d1\u9636\u6bb5\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002 \u6bcf\u4e2a\u64cd\u4f5c\u7684\u5de5\u4f5c\u91cf\u53d6\u51b3\u4e8e\u9879\u76ee\u7684\u76ee\u6807\u3002 \u5982\u679c\u60a8\u6b63\u5728\u6267\u884cUI\u539f\u578b\u8bbe\u8ba1\uff0c\u5219\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u90e8\u5206\u53ef\u4f7f\u7528\u9884\u5236\u4ee3\u7801\uff0c\u4ee5\u8df3\u8fc7\u5927\u591a\u6570\u6b65\u9aa4\uff0c\u4ece\u800c\u52a0\u5feb\u9879\u76ee\u5f00\u53d1\u901f\u5ea6\u3002 \u5982\u679c\u60a8\u57fa\u4e8e\u5b9a\u5236\u677f\u6765\u5b8c\u6210\u6574\u4e2a\u9879\u76ee\uff0c\u60a8\u5c06\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\u6d89\u53ca\u6240\u6709\u8fd9\u4e9b\u64cd\u4f5c\u3002"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-activities.webp",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u9879\u76ee\u7684\u4e3b\u8981\u64cd\u4f5c"),(0,o.kt)("h2",s({},{id:"main-components"}),"\u4e3b\u8981\u90e8\u4ef6"),(0,o.kt)("p",null,"\u60a8\u7684TouchGFX\u9879\u76ee\u7531\u4e94\u4e2a\u4e3b\u8981\u7684\u786c\u4ef6\u548c\u8f6f\u4ef6\u90e8\u4ef6\u7ec4\u6210\u3002 \u6bcf\u4e2a\u64cd\u4f5c\u90fd\u4f1a\u4e3a\u60a8\u7684TouchGFX\u9879\u76ee\u751f\u6210\u4e00\u4e2a\u4e3b\u8981\u90e8\u4ef6\u3002 TouchGFX Engine\u4e0d\u662f\u4efb\u4f55\u4e3b\u8981\u64cd\u4f5c\u7684\u8f93\u51fa\uff0c\u800c\u662fTouchGFX\u9879\u76ee\u7684\u8d77\u70b9\uff0c\u5728\u4e0b\u8f7d\u548c\u5b89\u88c5\u540e\u5373\u53ef\u4f7f\u7528\u3002"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-components.webp",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u9879\u76ee\u7684\u4e3b\u8981\u90e8\u4ef6"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u5404\u8282\u5c06\u6982\u8ff0\u6bcf\u4e2a\u64cd\u4f5c\u53ca\u90e8\u4ef6\u3002 \u672c\u7ae0\u5176\u4f59\u5404\u8282\u5c06\u8fdb\u4e00\u6b65\u8be6\u7ec6\u63cf\u8ff0\u6bcf\u4e2a\u64cd\u4f5c\u3002"),(0,o.kt)("h2",s({},{id:"hardware-selection"}),"\u786c\u4ef6\u9009\u62e9"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-004.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,o.kt)("p",null,"\u6b64\u64cd\u4f5c\u662fTouchGFX\u9879\u76ee\u4e2d\u7684\u521d\u59cb\u9879\u3002 \u9009\u62e9\u8981\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u786c\u4ef6\u3002 \u786e\u5b9a\u6240\u9700\u7684\u786c\u4ef6\u7ec4\u4ef6\uff0c\u5e76\u5f04\u6e05\u8fd9\u4e9b\u786c\u4ef6\u5bf9TouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u5f71\u54cd\u3002 \u5b8c\u6210\u6b64\u6b65\u540e\uff0c\u60a8\u5c31\u62e5\u6709\u4e86\u4e00\u4e2a\u53ef\u7528\u4e8eTouchGFX\u9879\u76ee\u7684\u663e\u793a\u677f\u3002"),(0,o.kt)("h3",s({},{id:"prototyping"}),"\u539f\u578b\u8bbe\u8ba1"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u6267\u884cUI\u539f\u578b\u8bbe\u8ba1\uff0c STM32\u8bc4\u4f30\u5957\u4ef6\u5219\u662f\u5feb\u901f\u542f\u52a8\u5e76\u8fd0\u884c\u7684\u7406\u60f3\u4e4b\u9009\u3002 \u8fd9\u91cc\u65e0\u9700\u8003\u8651\u786c\u4ef6\u7ec4\u4ef6\u3001\u4e0d\u540c\u7ec4\u4ef6\u95f4\u7684\u8fde\u63a5\u6216\u7c7b\u4f3c\u95ee\u9898\u3002 \u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u786c\u4ef6\u9009\u62e9\u64cd\u4f5c\u53ea\u9700\u57fa\u4e8eMCU\u6027\u80fd\u3001\u5b58\u50a8\u5668\u8bbe\u7f6e\u548c\u663e\u793a\u5c4f\u5c3a\u5bf8\u65b9\u9762\u9009\u62e9\u6700\u8d34\u8fd1\u60a8\u7684\u6700\u7ec8\u4ea7\u54c1\u7684STM32\u8bc4\u4f30\u5957\u4ef6\u3002"),(0,o.kt)("h3",s({},{id:"custom-hardware"}),"\u5b9a\u5236\u786c\u4ef6"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u8981\u521b\u5efa\u81ea\u5df1\u7684\u786c\u4ef6\u89e3\u51b3\u65b9\u6848\uff0c\u9009\u62e9\u5f88\u591a\uff0c\u540c\u65f6\u8981\u8003\u8651\u7684\u95ee\u9898\u4e5f\u591a\u3002 ",(0,o.kt)("a",s({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u786c\u4ef6\u9009\u62e9"),"\u5c06\u5e2e\u52a9\u60a8\u5b8c\u6210\u6b64\u4efb\u52a1\u3001\u56de\u7b54\u8bb8\u591a\u95ee\u9898\uff0c\u5e76\u63cf\u8ff0\u60a8\u7684\u9009\u62e9\u5982\u4f55\u5f71\u54cdTouchGFX\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u76f4\u5230\u9879\u76ee\u5f00\u53d1\u540e\u671f\uff0c\u5c06\u4e0d\u4f1a\u6709\u5b8c\u5907\u7684\u6700\u7ec8\u786c\u4ef6\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u901a\u5e38\u4f1a\u9009\u62e9\u4e00\u4e2a\u7c7b\u4f3c\u4e8e\u6700\u7ec8\u677f\u5b50\u7684STM32\u8bc4\u4f30\u5957\u4ef6\uff0c\u5e76\u5728UI\u5f00\u53d1\u7684\u7b2c\u4e00\u6b65\u4e2d\u4f7f\u7528\u8be5\u5957\u4ef6\u3002 \u5982\u679c\u60a8\u6ca1\u6709\u8fd9\u6837\u7684\u677f\uff0c\u4e5f\u53ef\u4ee5\u53ea\u4f7f\u7528\u5728PC\u4e0a\u8fd0\u884c\u7684TouchGFX Simulator\u6765\u5f00\u59cb\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u6b64\u6b65\u9aa4\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1<",(0,o.kt)("a",s({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u786c\u4ef6\u9009\u62e9"),"\u90e8\u5206\u3002"),(0,o.kt)("h2",s({},{id:"board-bring-up"}),"\u677f\u542f\u52a8\u642d\u5efa"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-003.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,o.kt)("p",null,"\u6b64\u64cd\u4f5c\u662f\u4e00\u9879\u8ba9TOUCHGFX\u8fd0\u884c\u4e8e\u4f60\u677f\u4e0a\u7684\u4e2d\u5fc3\u4efb\u52a1\u3002 \u8f93\u51fa\u7ec4\u4ef6\u88ab\u79f0\u4e3a\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u662f\u4e9b\u901a\u7528\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u7528\u4e8e\u8bbe\u7f6eMCU\u53ca\u6240\u6709\u5916\u8bbe\uff0c\u4e3a\u6267\u884c\u5e94\u7528\u7a0b\u5e8f\u505a\u51c6\u5907\u3002 \u8be5\u521d\u59cb\u5316\u4ee3\u7801\u72ec\u7acb\u4e8eTouchGFX\uff0c\u4ec5\u5904\u7406\u7eaf\u786c\u4ef6\u8bbe\u7f6e\u3002"),(0,o.kt)("h3",s({},{id:"stm32cubemx"}),"STM32CubeMX"),(0,o.kt)("p",null,"\u8be5\u64cd\u4f5c\u7684\u4e3b\u8981\u5de5\u5177\u662fSTM32CubeMX\u3002 \u5b83\u53ef\u4ee5\u5e2e\u52a9\u60a8\u914d\u7f6eMCU\u5e76\u751f\u6210\u57fa\u7840\u6027\u7684\u542f\u52a8\u4ee3\u7801\u3002 \u5bf9\u4e8e\u5916\u8bbe\uff08\u5982\u5916\u90e8RAM\u548c\u663e\u793a\u5c4f\uff09\uff0c\u60a8\u5c06\u81ea\u884c\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801\u548c\u7279\u5b9a\u5916\u8bbe\u9a71\u52a8\u7a0b\u5e8f\u3002 \u4e5f\u53ef\u4ee5\u5728\u4e0d\u4f7f\u7528STM32CubeMX\u7684\u60c5\u51b5\u4e0b\u5b8c\u6210\u6574\u4e2a\u677f\u7684\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u4e0d\u8fc7\u8fd9\u9700\u8981\u60a8\u5bf9STM32\u548c\u642d\u5efa\u542f\u52a8\u5f00\u53d1\u677f\u5177\u5907\u4e13\u5bb6\u7ea7\u6c34\u51c6\uff0c\u5426\u5219\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\u3002"),(0,o.kt)("h3",s({},{id:"application-templates-ats"}),"TouchGFX\u677f\u5361\u8bbe\u7f6e\uff08TBS\uff09"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u6267\u884cUI\u539f\u578b\u8bbe\u8ba1\u6216\u53ea\u60f3\u5c1d\u8bd5TouchGFX\uff0c\u5219\u60a8\u53ef\u4ee5\u8ba9\u5e94\u7528\u7a0b\u5e8f\u57fa\u4e8eTouchGFX Designer\u4e2d\u7684STM32\u6807\u51c6\u8bc4\u4f30\u5957\u4ef6\u4e2d\u7684\u67d0\u4e2a\u73b0\u6709TouchGFX\u677f\u5361\u8bbe\u7f6e\uff08TBS\uff09\u6765\u8fdb\u884c\u3002 \u8fd9\u5305\u62ec\u6240\u9700\u7684\u6240\u6709\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\u3002 TBS\u57fa\u4e8eSTM32CubeMX\u914d\u7f6e\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u60f3\u5c1d\u8bd5\u6216\u6dfb\u52a0\u5bf9\u66f4\u591a\u5916\u8bbe\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u5219\u53ef\u4ee5\u4fee\u6539\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u6b64\u6b65\u9aa4\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",s({parentName:"p"},{href:"board-bring-up/board-introduction"}),"\u5f00\u53d1\u677f\u642d\u5efa\u542f\u52a8"),"\u7ae0\u8282\u3002"),(0,o.kt)("h2",s({},{id:"touchgfx-al-development"}),"TouchGFX AL\u5f00\u53d1"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-002.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,o.kt)("p",null,"\u6b64\u64cd\u4f5c\u662fTouchGFX Engine\u5728\u5b8c\u5168\u521d\u59cb\u5316\u8fc7\u7684\u663e\u793a\u677f\uff08\u663e\u793a\u677f + \u677f\u521d\u59cb\u5316\u4ee3\u7801\uff09\u4e0a\u8fd0\u884c\u7684\u5173\u952e\u3002 \u8f93\u51fa\u7ec4\u4ef6\u88ab\u79f0\u4e3aTouchGFX\u62bd\u8c61\u5c42\uff08AL\uff09\uff0c\u8fd9\u662f\u4e00\u4e2a\u8f6f\u4ef6\u5c42\uff0c\u662f\u786c\u4ef6\u7684\u62bd\u8c61\uff0c\u5e76\u4f7fTouchGFX Engine\u53ef\u5728\u60a8\u7684\u5f00\u53d1\u677f\u4e0a\u8fd0\u884c\u3002"),(0,o.kt)("h3",s({},{id:"touchgfx-generator"}),"TouchGFX Generator"),(0,o.kt)("p",null,"\u6b64\u64cd\u4f5c\u7684\u4e3b\u8981\u5de5\u5177\u662fTouchGFX Generator\uff0c\u8fd9\u662f\u4e00\u4e2aSTM32CubeMX\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u8ba9\u60a8\u914d\u7f6e\u5e76\u751f\u6210\u5927\u591a\u6570TouchGFX AL\u4ee3\u7801\u3002 \u60a8\u4e5f\u5f88\u53ef\u80fd\u81ea\u884c\u7f16\u5199TouchGFX AL\u4ee3\u7801\u4e2d\u7684\u67d0\u4e9b\u90e8\u5206\u3002 TouchGFX Generator\u901a\u8fc7\u521b\u5efa\u8981\u5b9e\u73b0\u7684\u7a7a\u51fd\u6570\u6765\u5e2e\u52a9\u60a8\u5b8c\u6210\u6b64\u6b65\u9aa4\u3002"),(0,o.kt)("p",null,"\u8bf7\u7279\u522b\u6ce8\u610f\uff0c\u4e3a\u4f7fTouchGFX AL\u6b63\u5e38\u5de5\u4f5c\uff0c\u6b63\u786e\u5b8c\u6210\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\u5e76\u6b63\u786e\u914d\u7f6eMCU\u3001\u5916\u90e8RAM\u3001\u663e\u793a\u5c4f\u7b49\u975e\u5e38\u91cd\u8981\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u6267\u884cUI\u539f\u578b\u8bbe\u8ba1\u6216\u53ea\u60f3\u5c1d\u8bd5TouchGFX\uff0c\u5219\u60a8\u53ef\u4ee5\u8ba9\u5e94\u7528\u7a0b\u5e8f\u57fa\u4e8eTouchGFX Designer\u4e2d\u7684STM32\u6807\u51c6\u8bc4\u4f30\u5957\u4ef6\u4e2d\u7684\u67d0\u4e2a\u73b0\u6709TouchGFX\u677f\u5361\u8bbe\u7f6e\uff08TBS\uff09\u6765\u8fdb\u884c\u3002 \u8fd9\u5305\u62ec\u60a8\u9700\u8981\u7684\u6240\u6709TouchGFX AL\u4ee3\u7801\u3002 TBS\u57fa\u4e8eCubeMX\u548cTouchGFX Generator\u914d\u7f6e\uff0c\u5982\u679c\u60a8\u4ee5\u540e\u60f3\u505a\u5b9e\u9a8c\uff0c\u5219\u53ef\u4ee5\u4fee\u6539\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u6b64\u6b65\u9aa4\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",s({parentName:"p"},{href:"touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL\u5f00\u53d1"),"\u7ae0\u8282\u3002"),(0,o.kt)("h2",s({},{id:"ui-development"}),"UI\u5f00\u53d1"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-000.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,o.kt)("p",null,"\u60a8\u53ef\u80fd\u4f1a\u5728\u6b64\u64cd\u4f5c\u4e2d\u82b1\u8d39\u5927\u90e8\u5206\u7684\u9879\u76ee\u5f00\u53d1\u65f6\u95f4\u3002 \u60a8\u5c06\u5728\u8fd9\u91cc\u521b\u5efa\u7528\u6237\u754c\u9762\u4ee3\u7801\uff0c\u8be5\u4ee3\u7801\u5c06\u6784\u6210TouchGFX\u9879\u76ee\u7684\u53ef\u89c6\u90e8\u5206\uff0c\u8be5\u7ec4\u4ef6\u88ab\u79f0\u4e3aTouchGFX UI\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("h3",s({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,o.kt)("p",null,"\u6b64\u64cd\u4f5c\u7684\u4e3b\u8981\u5de5\u5177\u662fTouchGFX Designer\u4ee5\u53ca\u60a8\u6700\u559c\u7231\u7684IDE\u6216\u6587\u672c\u7f16\u8f91\u5668\u3002 \u5728TouchGFX Designer\u4e2d\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u3001\u8bbe\u8ba1\u548c\u521b\u5efa\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u89c6\u7a97\uff0c\u5e76\u7528C++\u4ee3\u7801\u751f\u6210UI\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u90e8\u5206\u3002 \u5bf9\u4e8e\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\uff08\u5904\u7406\u4e8b\u4ef6\uff0c\u4e0e\u7cfb\u7edf\u7684\u975eUI\u90e8\u5206\u8fdb\u884c\u901a\u4fe1\uff09\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528IDE\u6216\u6587\u672c\u7f16\u8f91\u5668\u7f16\u5199C++\u4ee3\u7801\uff0c\u8be5\u4ee3\u7801\u4e0eTouchGFX Designer\u751f\u6210\u7684\u4ee3\u7801\u4ea4\u4e92\u5171\u5b58\u3002"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-screen-4.17.webp",noShadow:!0,width:"300",mdxType:"Figure"}),(0,o.kt)("h3",s({},{id:"application-templates"}),"TouchGFX\u677f\u5361\u8bbe\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u6267\u884cUI\u539f\u578b\u8bbe\u8ba1\uff0c\u6216\u53ea\u662f\u60f3\u5c1d\u8bd5TouchGFX\uff0c\u800c\u4e0d\u5e0c\u671b\u82b1\u65f6\u95f4\u505a\u5176\u4ed6\u64cd\u4f5c\uff0c\u5219\u60a8\u53ef\u4ee5\u57fa\u4e8ePC\u4e0a\u7684TouchGFX Simulator\u6765\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\uff0c\u4e5f\u53ef\u57fa\u4e8e\u67d0\u4e2a\u6807\u51c6STM32\u8bc4\u4f30\u5957\u4ef6\u4e2d\u7684\u73b0\u6709TouchGFX\u677f\u5361\u8bbe\u7f6e\uff08TBS\uff09\u6765\u64cd\u4f5c\u3002 \u65e0\u8bba\u5982\u4f55\uff0c\u60a8\u90fd\u53ef\u4ee5\u7acb\u5373\u7740\u624b\u5f00\u53d1UI\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("h3",s({},{id:"ui-templates"}),"\u6f14\u793a\u548c\u793a\u4f8b"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u53ea\u662f\u60f3\u8fd0\u884c\u67d0\u4e9b\u5e94\u7528\u7a0b\u5e8f\u6216\u56e0\u6b64\u627e\u4e9b\u542f\u53d1\uff0c\u5219\u5728TouchGFX Designer\u4e2d\u521b\u5efa\u65b0\u9879\u76ee\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u67d0\u4e2aTouchGFX\u793a\u4f8b\u6765\u5f00\u59cb\u3002 \u5982\u679c\u8fd9\u6837\u7684\u8bdd\uff0c\u53ea\u9700\u7f16\u8bd1\u3001\u70e7\u5199\u4ee3\u7801\u5e76\u8fd0\u884c\uff0c\u65e0\u987b\u5176\u5b83\u64cd\u4f5c\u3002"),(0,o.kt)("h3",s({},{id:"custom-hardware-1"}),"\u5b9a\u5236\u786c\u4ef6"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u5b8c\u6210\u6240\u6709\u5176\u4ed6\u64cd\u4f5c\uff0c\u5373\u5df2\u7ecf\u4e3aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u51c6\u5907\u597d\u4e86\u8fd0\u884c\u677f\uff0c\u5219\u60a8\u53ef\u4ee5\u4ece\u5934\u5f00\u59cb\uff0c\u6216\u57fa\u4e8e\u67d0\u4e2a\u73b0\u6709\u793a\u4f8b\u5f00\u59cb\u3002 \u5982\u679c\u5b9a\u5236\u677f\u7684\u5206\u8fa8\u7387\u4e0e\u793a\u4f8b\u4e00\u81f4\uff0c\u5219\u793a\u4f8b\u4e5f\u5e94\u8be5\u80fd\u5728\u60a8\u7684\u5b9a\u5236\u677f\u4e0a\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u6b64\u6b65\u9aa4\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",s({parentName:"p"},{href:"ui-development/ui-development-introduction"}),"UI\u5f00\u53d1"),"\u7ae0\u8282\u3002"),(0,o.kt)("h2",s({},{id:"workflow"}),"\u5de5\u4f5c\u6d41\u7a0b"),(0,o.kt)("p",null,"\u5982\u60a8\u6240\u89c1\uff0cTouchGFX\u5f00\u53d1\u6d89\u53ca\u8bb8\u591a\u64cd\u4f5c\u548c\u5de5\u5177\u3002 \u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u60a8\u65e0\u9700\u4e00\u6b21\u6027\u5b8c\u6210\u6240\u6709\u64cd\u4f5c\uff0c\u800c\u4e14\u5728\u5f00\u59cb\u8fdb\u884cUI\u5f00\u53d1\u4e4b\u524d\uff0c\u4e0d\u4e00\u5b9a\u9700\u8981\u4f7f\u7528\u663e\u793a\u677f\u3001\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\u548cTouchGFX AL\u3002 \u53ef\u4f7f\u7528STM32\u8bc4\u4f30\u5957\u4ef6\u6216TouchGFX Simulator\u6765\u5b8c\u6210\u8fd9\u4e9b\u64cd\u4f5c\u3002"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",noShadow:!0,width:"700",mdxType:"Figure"},"TouchGFX Designer\u5de5\u4f5c\u6d41\u7a0b"),(0,o.kt)("h3",s({},{id:"generated-code-and-user-code"}),"\u751f\u6210\u7684\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801"),(0,o.kt)("p",null,"\u5728\u5f00\u53d1\u677f\u642d\u5efa\u542f\u52a8\u3001TouchGFX AL\u5f00\u53d1\u548cUI\u5f00\u53d1\u6240\u9700\u7684\u4e09\u4e2a\u8f6f\u4ef6\u64cd\u4f5c\u4e2d\uff0c\u60a8\u5c06\u4f7f\u7528\u5de5\u5177\u6765\u751f\u6210\u4ee3\u7801\u3002 \u8fd9\u4e9b\u5de5\u5177\u7684\u5171\u540c\u70b9\u662f\u5b83\u4eec\u4e0d\u4f1a\u751f\u6210\u60a8\u6240\u9700\u7684\u6240\u6709\u4ee3\u7801\uff0c\u60a8\u8fd8\u5c06\u5728\u9879\u76ee\u4e2d\u6dfb\u52a0\u7279\u5b9a\u7528\u6237\u4ee3\u7801\u3002 \u5bf9\u4e8e\u8fd9\u4e09\u79cd\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u5728\u4f7f\u7528\u5de5\u5177\u548c\u7f16\u5199\u4ee3\u7801\u4e4b\u95f4\u6765\u56de\u5207\u6362\u3002 \u5de5\u5177\u751f\u6210\u7684\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801\u662f\u72ec\u7acb\u7684\uff0c\u5e76\u53ef\u4ee5\u5206\u522b\u66f4\u65b0\u3002"),(0,o.kt)("p",null,"\u6709\u65f6\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728\u4e0d\u540c\u64cd\u4f5c\u4e4b\u95f4\u6765\u56de\u5207\u6362\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u5de5\u5177\u3002 \u5728\u8fdb\u884cTouchGFX AL\u5f00\u53d1\u65f6\uff0c\u60a8\u901a\u5e38\u4f1a\u4f7f\u7528\u975e\u5e38\u7b80\u5355\u7684TouchGFX UI\u6765\u6d4b\u8bd5TouchGFX AL\u3002 \u800c\u4e14\uff0c\u5728\u4e0d\u540c\u64cd\u4f5c\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u6ca1\u6709\u95ee\u9898\uff0c\u5de5\u5177\u3001\u751f\u6210\u4ee3\u7801\u548c\u60a8\u7684\u7528\u6237\u4ee3\u7801\u5171\u5b58\uff0c\u5e76\u5728\u66f4\u65b0\u65f6\u4e0d\u4f1a\u51fa\u73b0\u4efb\u4f55\u95ee\u9898\u3002"),(0,o.kt)("h3",s({},{id:"change-of-compileride"}),"\u66f4\u6539\u7f16\u8bd1\u5668/IDE"),(0,o.kt)("p",null,"\u5728\u8fd9\u4e9b\u64cd\u4f5c\u4e2d\uff0c\u60a8\u5fc5\u987b\u4e3a\u76ee\u6807\u677f\u7f16\u8bd1\u4ee3\u7801\u3002 TouchGFX\u652f\u6301\u7684\u7f16\u8bd1\u5668\u6709IAR\u3001ARMCC\u3001ARMCLANG\u548cGCC(STM32CubeIDE)\u3002 \u4e3aTouchGFX\u9879\u76ee\u9009\u62e9\u7684\u5de5\u5177\u94fe\u5728STM32CubeMX\u4e2d\u914d\u7f6e\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u8981\u8fdb\u884c\u66f4\u6539\uff0c\u5219\u5e94\u5728STM32CubeMX\u4e2d\u6253\u5f00TouchGFX project .ioc\u6587\u4ef6\uff0c\u5e76\u66f4\u6539\u5de5\u5177\u94fe\u8bbe\u7f6e\u3002 \u5728TouchGFX Designer\u4e2d\u9009\u62e9\u677f\u4ef6\u8bbe\u7f6e\uff08TBS\uff09\u65f6\u8981\u9884\u5148\u9009\u62e9\u4e00\u4e2a\u5de5\u5177\u94fe\uff0c\u56e0\u6b64\u60a8\u53ea\u80fd\u627e\u5230\u57fa\u4e8e\u4e00\u4e2a\u5de5\u5177\u94fe\u7684\u9879\u76ee\u6587\u4ef6\u3002 \u7531\u4e8eAT\u4e0e.ioc\u6587\u4ef6\u662f\u914d\u5957\u7684\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06\u5176\u6253\u5f00\u5e76\u66f4\u6539\u5de5\u5177\u94fe\uff0c\u4ee5\u9002\u5e94\u9879\u76ee\u9700\u6c42\u3002"))}w.isMDXComponent=!0}}]);