"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[185],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=u(n),s=o,f=m["".concat(l,".").concat(s)]||m[s]||p[s]||i;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children))}},84541:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),o=n(86010),i=n(99492),c=n(39130),a=n(35096),l=n(33084),u="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",u)},t)}function s({href:e,icon:t,title:n,description:i}){return r.createElement(p,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:n},t," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",m),title:i},i))}function f({item:e}){const t=(0,i.Wl)(e);return t?r.createElement(s,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function v({item:e}){var t;const n=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(s,{href:e.href,icon:n,title:e.label,description:null==o?void 0:o.description})}function h({item:e}){switch(e.type){case"link":return r.createElement(v,{item:e});case"category":return r.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y({items:e,className:t}){return r.createElement("section",{className:(0,o.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},5329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return b}});var r=n(3905),o=n(44035),i=n(84541),c=n(99492),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&s(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&s(e,n,t[n]);return e};const v={id:"ui-development-introduction",title:"UI\u5f00\u53d1\u4ecb\u7ecd"},h=void 0,y={unversionedId:"development/ui-development/ui-development-introduction",id:"development/ui-development/ui-development-introduction",title:"UI\u5f00\u53d1\u4ecb\u7ecd",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-development-introduction.mdx",sourceDirName:"development/ui-development",slug:"/development/ui-development/ui-development-introduction",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"ui-development-introduction",title:"UI\u5f00\u53d1\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"MIPI-DSI Video Mode",permalink:"/4.19/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"},next:{title:"Software Architecture",permalink:"/4.19/zh-CN/docs/category/software-architecture"}},g={},b=[],O={toc:b};function w(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},O),s),l(t,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-development-introduction/activities-selected-003.webp",noShadow:!0,width:"600",mdxType:"Figure"}),(0,r.kt)("p",null,"\u5f00\u53d1\u4e00\u4e2a\u529f\u80fd\u6027UI\u662f\u62e5\u6709\u4e00\u4e2a\u6210\u529f\u7684\u5d4c\u5165\u5f0f\u56fe\u5f62\u4ea7\u54c1\u7684\u6709\u673a\u7ec4\u6210\u90e8\u5206\uff0c\u56e0\u6b64\uff0cTouchGFX\u7684\u76ee\u6807\u4e0d\u4ec5\u662f\u63d0\u4f9b\u5feb\u901f\u6027\u80fd\uff0c\u8fd8\u63d0\u4f9b\u6d41\u7545\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"),(0,r.kt)("p",null,"UI\u5f00\u53d1\u4e00\u7ae0\u91cd\u70b9\u4ecb\u7ecdTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u8be6\u7ec6\u5f00\u53d1\u6d41\u7a0b\uff1a"),(0,r.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);