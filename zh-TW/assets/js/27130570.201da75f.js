"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[497],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||h[m]||c;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const c=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:c},this.props.children)}}t.Z=a},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,c=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:c,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:c,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},82985:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},91098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return x},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),c=n(70814),a=n(82985),i=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&m(e,n,t[n]);return e};const f={id:"updating-to-a-new-touchgfx-version",title:"\u66f4\u65b0\u81f3\u65b0\u7684TouchGFX\u7248\u672c"},d=void 0,v={unversionedId:"miscellaneous/updating-to-a-new-touchgfx-version",id:"miscellaneous/updating-to-a-new-touchgfx-version",title:"\u66f4\u65b0\u81f3\u65b0\u7684TouchGFX\u7248\u672c",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/miscellaneous/updating-to-a-new-touchgfx-version.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/updating-to-a-new-touchgfx-version",permalink:"/4.19/zh-TW/docs/miscellaneous/updating-to-a-new-touchgfx-version",draft:!1,tags:[],version:"current",frontMatter:{id:"updating-to-a-new-touchgfx-version",title:"\u66f4\u65b0\u81f3\u65b0\u7684TouchGFX\u7248\u672c"},sidebar:"docs",previous:{title:"Miscellaneous",permalink:"/4.19/zh-TW/docs/category/miscellaneous-1"},next:{title:"\u7372\u53d6\u5e6b\u52a9",permalink:"/4.19/zh-TW/docs/miscellaneous/getting-help"}},b={},y=[{value:"\u66f4\u65b0TouchGFX Generator",id:"update-touchgfx-generator",level:2}],T={toc:y};function x(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},T),m),u(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u5275\u5efaTouchGFX Designer\u61c9\u7528\u6642\uff0c\u5275\u5efa\u7684.touchgfx\u5c08\u6848\u6a94\u6848\u7248\u672c\u8207\u7528\u4f86\u5275\u5efa\u61c9\u7528\u7684TouchGFX\u7248\u672c\u76f8\u540c\u3002 \u4f46\u662f\uff0c\u9019\u4e26\u4e0d\u610f\u5473\u8457\u53ea\u80fd\u4f7f\u7528TouchGFX\u7684\u7279\u5b9a\u7248\u672c\u7e7c\u7e8c\u958b\u767c\u61c9\u7528\u3002"),(0,r.kt)("p",null,"TouchGFX\u5728\u8a2d\u8a08\u4e0a\u5411\u5f8c\u76f8\u5bb9\uff0c\u5728\u5927\u591a\u6578\u60c5\u6cc1\u4e0b\uff0c\u5b83\u9700\u8981\u4e00\u500b\u6975\u7c21\u55ae\u7684\u6d41\u7a0b\u4f7f\u820a\u7248\u672c\u61c9\u7528\u80fd\u5920\u7528TouchGFX\u65b0\u7248\u672c\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u60a8\u53ea\u9700\u6253\u958b\u65b0\u5b89\u88dd\u7684TouchGFX Designer\u7248\u672c\uff0c\u4e26\u5617\u8a66\u901a\u904e\u6700\u8fd1\u4f7f\u7528\u7684\u61c9\u7528\u6216\u201c\u6253\u958b\u201d\u5c0d\u8a71\u65b9\u584a\u6253\u958b\u820a\u7248\u672c\u61c9\u7528\u3002 \u60a8\u5c07\u770b\u5230\u4e0b\u9762\u7684\u5f48\u7a97\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.webp",mdxType:"Figure"},"\u66f4\u65b0\u5f48\u7a97"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u5f48\u7a97\u9996\u5148\u6703\u5efa\u8b70\u60a8\u5728\u904b\u884c\u66f4\u65b0\u5668\u524d\u5099\u4efd\u61c9\u7528\u3002"),(0,r.kt)("p",null,"\u6309\u4e0b\u201cYes\u201d\u6309\u9215\uff0c\u66f4\u65b0\u5668\u5c07\u555f\u52d5\u3002 \u5b8c\u6210\u66f4\u65b0\u5f8c\uff0c\u5c07\u5728TouchGFX Designer\u4e2d\u7167\u5e38\u6253\u958b\u61c9\u7528\uff0c\u73fe\u5728\u53ef\u4ee5\u4f7f\u7528\u65b0\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u5728\u6975\u5c11\u6578\u60c5\u6cc1\u4e0b\uff0c\u60a8\u5fc5\u9808\u5c0d\u61c9\u7528\u9032\u884c\u4e00\u4e9b\u624b\u52d5\u4fee\u6539\uff0c\u4ee5\u4f7f\u61c9\u7528\u5b8c\u5168\u66f4\u65b0\u81f3\u65b0\u7684TouchGFX\u7248\u672c\u3002 \u5982\u679c\u60a8\u5c0d\u5c07\u61c9\u7528\u66f4\u65b0\u81f3\u65b0\u7248\u672c\u9084\u6709\u7591\u554f\uff0c\u8acb\u53c3\u95b1",(0,r.kt)("a",g({parentName:"p"},{href:"known-issues"}),"\u201c\u5df2\u77e5\u554f\u984c\u201d"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",g({},{id:"update-touchgfx-generator"}),"\u66f4\u65b0TouchGFX Generator"),(0,r.kt)("p",null,"\u6309\u7167",(0,r.kt)("a",g({parentName:"p"},{href:"../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"}),"\u201c\u5728STM32CubeMX\u4e2d\u5b89\u88ddTouchGFX Generator\u201d"),"\u5728STM32CubeMX 6.2.1\u6216\u66f4\u9ad8\u7248\u672c\u4e2d\u5b89\u88ddX-Cube-TouchGFX-4.17.0\u5f8c\uff0c\u6253\u958b\u5c08\u6848\u4e26\u5c0e\u822a\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"\u201c\u5957\u88dd\u8edf\u9ad4\u201d"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"\u201c\u9078\u64c7\u7d44\u4ef6\u201d"),"\uff08\u6216\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Alt + U\u9375\uff09\u3002"),")"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.webp",mdxType:"Figure"},"Software Pack Component Selector"),(0,r.kt)("p",null,"\u5728\u8a73\u60c5\u8207\u8b66\u544a\u8996\u7a97\u4e2d\uff0c\u9078\u64c7\u8981\u9077\u79fb\u5230\u7684\u7248\u672c\u4e26\u6309\u4e0b\u201ctry\u201d\u6309\u9215\u3002 STM32CubeMX\u5c07\u57f7\u884c\u8e64\u8de1\u9077\u79fb\u4e26\u986f\u793a\u7d50\u679c\uff0c\u4e00\u4e9bref\u53c3\u6578\u4e0d\u80fd\u9077\u79fb\u5230\u65b0\u7248\u672c\uff0c\u56e0\u6b64\u5c07\u986f\u793a\u70banull\u503c\u3002 \u9078\u64c7\u201c\u63a5\u53d7\u201d\u4fdd\u5b58\u9077\u79fb\uff0c\u7136\u5f8c\u6309\u4e0b\u201c\u78ba\u5b9a\u201d\u95dc\u9589Software Pack Component Selector\u8996\u7a97\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.webp",mdxType:"Figure"},"Software Pack Component Selector\uff1a\u9077\u79fbTouchGFX Generator\u7684\u53c3\u6578"),(0,r.kt)("p",null,"\u73fe\u5728\uff0cTouchGFX Generator\u5df2\u9077\u79fb\u81f3\u65b0\u7248\u672c\uff0c\u4fee\u6539\u5df2\u4fdd\u5b58\u5728.ioc\u6587\u4ef6\u4e2d\u3002 \u5728\u7528STM32CubeMX\u751f\u6210\u7a0b\u5f0f\u78bc\u524d\uff0c\u8acb\u78ba\u8a8dTouchGFX Generator\u7684\u914d\u7f6e\u3002 \u5728\u7528STM32CubeMX\u751f\u6210\u7a0b\u5f0f\u78bc\u5f8c\uff0c\u6253\u958bTouchGFX Designer\u4e26\u78ba\u8a8dUI\uff0c\u7136\u5f8c\u518d\u5f9eTouchGFX Designer\u751f\u6210\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)(c.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"\u9077\u79fb\u662f\u4e00\u500b\u5305\u542b\u5169\u500b\u6b65\u9a5f\u7684\u904e\u7a0b\uff0c\u5b83\u5c07TouchGFX\u66f4\u65b0\u81f3\u65b0\u7248\u672c\u3002 \u5b83\u9700\u8981\u5f9eSTM32CubeMX\u548cTouchGFX Designer\u751f\u6210\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("li",null,"\u5728STM32CubeMX\u4e2d\u6309\u4e0b\u201cGenerate Code\u201d\u6309\u9215\u5f8c\uff0c\u5148\u5c07TouchGFX Generator\u63d0\u4f9b\u7684C++\u7a0b\u5f0f\u78bc\u5beb\u5165\u786c\u789f\u3002")))}x.isMDXComponent=!0}}]);