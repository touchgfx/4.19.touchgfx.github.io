"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5086],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,g=h["".concat(u,".").concat(m)]||h[m]||p[m]||c;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const c=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:c},this.props.children)}}t.Z=i},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,c=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:c,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:c,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},82985:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},73082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return T},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),c=n(70814),i=n(82985),a=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&m(e,n,t[n]);return e};const f={id:"updating-to-a-new-touchgfx-version",title:"\u66f4\u65b0\u81f3\u65b0\u7684TouchGFX\u7248\u672c"},d=void 0,v={unversionedId:"miscellaneous/updating-to-a-new-touchgfx-version",id:"miscellaneous/updating-to-a-new-touchgfx-version",title:"\u66f4\u65b0\u81f3\u65b0\u7684TouchGFX\u7248\u672c",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/miscellaneous/updating-to-a-new-touchgfx-version.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/updating-to-a-new-touchgfx-version",permalink:"/4.19/zh-CN/docs/miscellaneous/updating-to-a-new-touchgfx-version",tags:[],version:"current",frontMatter:{id:"updating-to-a-new-touchgfx-version",title:"\u66f4\u65b0\u81f3\u65b0\u7684TouchGFX\u7248\u672c"},sidebar:"docs",previous:{title:"Miscellaneous",permalink:"/4.19/zh-CN/docs/category/miscellaneous-1"},next:{title:"\u83b7\u53d6\u5e2e\u52a9",permalink:"/4.19/zh-CN/docs/miscellaneous/getting-help"}},b={},y=[{value:"\u66f4\u65b0TouchGFX Generator",id:"update-touchgfx-generator",level:2}],x={toc:y};function T(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},x),m),u(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u521b\u5efaTouchGFX Designer\u5e94\u7528\u65f6\uff0c\u521b\u5efa\u7684.touchgfx\u5de5\u7a0b\u6587\u4ef6\u7248\u672c\u4e0e\u7528\u6765\u521b\u5efa\u5e94\u7528\u7684TouchGFX\u7248\u672c\u76f8\u540c\u3002 \u4f46\u662f\uff0c\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u60a8\u53ea\u80fd\u4f7f\u7528TouchGFX\u7684\u7279\u5b9a\u7248\u672c\u7ee7\u7eed\u5f00\u53d1\u5e94\u7528\u3002"),(0,r.kt)("p",null,"TouchGFX\u5728\u8bbe\u8ba1\u4e0a\u5411\u540e\u517c\u5bb9\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4ec5\u9700\u4e00\u4e2a\u6781\u7b80\u5355\u7684\u6d41\u7a0b\u4f7f\u65e7\u7248\u672c\u5e94\u7528\u80fd\u591f\u5de5\u4f5c\u5728TouchGFX\u65b0\u7248\u672c\u4e0a\u3002"),(0,r.kt)("p",null,"\u60a8\u53ea\u9700\u6253\u5f00\u65b0\u5b89\u88c5\u7684TouchGFX Designer\u7248\u672c\uff0c\u5e76\u5c1d\u8bd5\u901a\u8fc7\u6700\u8fd1\u4f7f\u7528\u7684\u5e94\u7528\u6216\u201c\u6253\u5f00\u201d\u5bf9\u8bdd\u6846\u6253\u5f00\u65e7\u7248\u672c\u5e94\u7528\u3002 \u60a8\u5c06\u770b\u5230\u4e0b\u9762\u7684\u5f39\u7a97\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.png",mdxType:"Figure"},"\u7248\u672c\u66f4\u65b0\u5f39\u7a97"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u5f39\u7a97\u5185\u5bb9\u4f1a\u5148\u5efa\u8bae\u60a8\u5728\u8fd0\u884c\u66f4\u65b0\u7a0b\u5e8f\u524d\u5907\u4efd\u60a8\u7684\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u6309\u4e0b\u201c\u662f\u201d\u6309\u94ae\uff0c\u66f4\u65b0\u7a0b\u5e8f\u542f\u52a8\u3002 \u5b8c\u6210\u66f4\u65b0\u540e\uff0c\u5728TouchGFX Designer\u4e2d\u7167\u5e38\u6253\u5f00\u60a8\u7684\u5e94\u7528\uff0c\u73b0\u5728\u60a8\u53ef\u4ee5\u4f7f\u7528\u65b0\u7248\u672c\u4e86\u3002"),(0,r.kt)("p",null,"\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u5fc5\u987b\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u4e00\u4e9b\u624b\u52a8\u4fee\u6539\uff0c\u4ee5\u4f7f\u60a8\u7684\u5e94\u7528\u5b8c\u5168\u66f4\u65b0\u81f3\u65b0\u7684TouchGFX\u7248\u672c\u3002 \u5982\u679c\u60a8\u5bf9\u5c06\u5e94\u7528\u66f4\u65b0\u81f3\u65b0\u7248\u672c\u8fd8\u6709\u7591\u95ee\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",g({parentName:"p"},{href:"known-issues"}),"\u201c\u5df2\u77e5\u95ee\u9898\u201d"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",g({},{id:"update-touchgfx-generator"}),"\u66f4\u65b0TouchGFX Generator"),(0,r.kt)("p",null,"\u6309\u7167",(0,r.kt)("a",g({parentName:"p"},{href:"../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"}),"\u201c\u5728STM32CubeMX\u4e2d\u5b89\u88c5TouchGFX Generator\u201d\u6307\u5f15\uff0c\u5728STM32CubeMX "),"6.2.1\u6216\u66f4\u9ad8\u7248\u672c\u4e2d\u5b89\u88c5X-Cube-TouchGFX-4.17.0\u540e\uff0c\u6253\u5f00\u5de5\u7a0b\u5e76\u5bfc\u822a\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"\u201c\u8f6f\u4ef6\u5305\u201d"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"\u201c\u9009\u62e9\u7ec4\u4ef6\u201d"),"\uff08\u6216\u6309\u4e0b ",(0,r.kt)(i.Z,{mdxType:"Shortcut"},"Alt + U\u5feb\u6377\u952e"),")"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.png",mdxType:"Figure"},"\u8f6f\u4ef6\u5305\u7ec4\u4ef6\u9009\u62e9\u5668"),(0,r.kt)("p",null,"\u5728\u8be6\u60c5\u4e0e\u8b66\u544a\u7a97\u53e3\u4e2d\uff0c\u9009\u62e9\u8981\u8fc1\u79fb\u5230\u7684\u7248\u672c\u5e76\u6309\u4e0b\u201c\u5c1d\u8bd5\u201d\u6309\u94ae\u3002 STM32CubeMX\u5c06\u6267\u884c\u53ef\u8ffd\u8e2a\u7684\u8fc1\u79fb\u5e76\u663e\u793a\u7ed3\u679c\uff0c\u4e00\u4e9bref\u53c2\u6570\u4e0d\u80fd\u8fc1\u79fb\u5230\u65b0\u7248\u672c\uff0c\u56e0\u6b64\u4f1a\u663e\u793a\u4e3anull\u503c\u3002 \u9009\u62e9\u201c\u63a5\u53d7\u201d\u4fdd\u5b58\u8fc1\u79fb\uff0c\u7136\u540e\u6309\u4e0b\u201c\u786e\u5b9a\u201d\u5173\u95ed\u8f6f\u4ef6\u5305\u7ec4\u4ef6\u9009\u62e9\u7a97\u53e3\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.png",mdxType:"Figure"},"\u8f6f\u4ef6\u5305\u7ec4\u4ef6\u9009\u62e9\u5668: \u8fc1\u79fbTouchGFX Generator\u7684\u9009\u9879"),(0,r.kt)("p",null,"\u73b0\u5728\uff0cTouchGFX Generator\u5df2\u8fc1\u79fb\u81f3\u65b0\u7248\u672c\uff0c\u4fee\u6539\u5df2\u4fdd\u5b58\u5728.ioc\u6587\u4ef6\u4e2d\u3002 \u5728\u7528STM32CubeMX\u751f\u6210\u4ee3\u7801\u524d\uff0c\u8bf7\u786e\u8ba4TouchGFX Generator\u7684\u914d\u7f6e\u3002 \u5728\u7528STM32CubeMX\u751f\u6210\u4ee3\u7801\u540e\uff0c\u6253\u5f00TouchGFX Designer\u5e76\u9a8c\u8bc1UI\uff0c\u7136\u540e\u518d\u4eceTouchGFX Designer\u751f\u6210\u4ee3\u7801\u3002"),(0,r.kt)(c.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"\u5c06TouchGFX\u66f4\u65b0\u81f3\u65b0\u7248\u672c\u7684\u8fc1\u79fb\u8fc7\u7a0b\u5305\u542b\u4e24\u4e2a\u6b65\u9aa4\u3002 \u9700\u8981\u4eceSTM32CubeMX\u548cTouchGFX Designer\u751f\u6210\u4ee3\u7801\u3002"),(0,r.kt)("li",null,"\u5728STM32CubeMX\u4e2d\u6309\u4e0b\u201c\u751f\u6210\u4ee3\u7801\u201d\u6309\u94ae\u540e\uff0c\u4f1a\u5148\u5c06TouchGFX Generator\u63d0\u4f9b\u7684C++\u4ee3\u7801\u5b58\u76d8\u4fdd\u5b58\u3002")))}T.isMDXComponent=!0}}]);