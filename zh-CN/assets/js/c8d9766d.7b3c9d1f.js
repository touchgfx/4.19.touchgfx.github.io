"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3357],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},83001:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return y}});var n=r(3905),o=r(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&d(e,r,t[r]);return e};const m={id:"hardware-selection-introduction",title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd"},f=void 0,h={unversionedId:"development/hardware-selection/hardware-selection-introduction",id:"development/hardware-selection/hardware-selection-introduction",title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-selection-introduction.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/hardware-selection-introduction",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-selection-introduction",tags:[],version:"current",frontMatter:{id:"hardware-selection-introduction",title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u5f00\u53d1\u7b80\u4ecb",permalink:"/4.19/zh-CN/docs/development/development-introduction"},next:{title:"\u521d\u6b65\u8003\u8651",permalink:"/4.19/zh-CN/docs/development/hardware-selection/preliminary-considerations"}},v={},y=[],w={toc:y};function g(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},w),d),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/activities-selected-000.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u9879\u76ee\u6d3b\u52a8"),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/components-selected-000.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u9879\u76ee\u7ec4\u4ef6"),(0,n.kt)("p",null,"\u5728\u9009\u62e9\u8fd0\u884c\u56fe\u5f62\u7528\u6237\u754c\u9762\u7684\u786c\u4ef6\u5e73\u53f0\u65f6\uff0c\u9700\u8981\u8003\u8651\u548c\u8bc4\u4f30\u591a\u4e2a\u53c2\u6570\u3002 \u672c\u6587\u8bd5\u56fe\u89e3\u51b3\u6709\u5173MCU\u3001\u663e\u793a\u5668\u3001\u5916\u90e8\u5b58\u50a8\u5668\u3001UI\u6027\u80fd\u7b49\u65b9\u9762\u7684\u8003\u8651\u3002"),(0,n.kt)("p",null,"\u5efa\u8bae\u5728\u9009\u62e9\u786c\u4ef6\u7ec4\u4ef6\u4e4b\u524d\u9605\u8bfb\u6709\u5173\u521d\u59cb\u8003\u8651\u7684\u90e8\u5206\uff0c\u56e0\u4e3a\u6709\u51e0\u4e2a\u53c2\u6570\u548c\u51b3\u5b9a\u4f1a\u5f71\u54cd\u786c\u4ef6\u9009\u62e9\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"preliminary-considerations"}),"\u521d\u6b65\u8003\u8651")," - \u9488\u5bf9\u5bfb\u627e\u5408\u9002\u7684\u786c\u4ef6\u4e4b\u524d\u5e94\u5f53\u8003\u8651\u7684\u51e0\u4e2a\u56e0\u7d20\u7684\u6307\u5bfc\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"hardware-components/hardware-selection-mcu"}),"\u786c\u4ef6\u7ec4\u4ef6")," - \u6784\u6210\u786c\u4ef6\u89e3\u51b3\u65b9\u6848\u7684\u4e0d\u540c\u7ec4\u4ef6\u76f8\u5173\u4fe1\u606f\u4ee5\u53ca\u5176\u5bf9TouchGFX\u5e94\u7528\u7684\u5f71\u54cd\u3002")))}g.isMDXComponent=!0}}]);