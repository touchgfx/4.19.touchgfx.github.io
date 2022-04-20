"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2584],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(r),s=a,h=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return r?n.createElement(h,o(o({ref:e},c),{},{components:r})):n.createElement(h,o({ref:e},c))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(t,e,r){var n=r(67294),a=r(25026);e.Z=function(t){const e=t.noShadow||!1,r=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,t.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,t.children))}},88678:function(t,e,r){var n=r(67294);class a extends n.Component{render(){const t=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:t},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},93054:function(t,e,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}e.Z=o},84290:function(t,e,r){r.r(e),r.d(e,{assets:function(){return b},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return N}});var n=r(3905),a=r(39130),l=r(44035),o=r(93054),i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))d.call(e,r)&&s(t,r,e[r]);if(c)for(var r of c(e))m.call(e,r)&&s(t,r,e[r]);return t};const k={id:"board-introduction",title:"\u642d\u5efa\u958b\u767c\u677f"},g=void 0,f={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"\u642d\u5efa\u958b\u767c\u677f",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.19/zh-TW/docs/development/board-bring-up/board-introduction",tags:[],version:"current",frontMatter:{id:"board-introduction",title:"\u642d\u5efa\u958b\u767c\u677f"},sidebar:"docs",previous:{title:"\u5916\u90e8\u8a18\u61b6\u9ad4",permalink:"/4.19/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. \u5275\u5efa\u5c08\u6848",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/01-create-project"}},b={},N=[{value:"\u884c\u696d\u5de5\u5177\u5de5\u5177\u4ecb\u7d39",id:"tools-of-the-trade",level:2},{value:"\u529f\u80fd\u9a57\u8b49",id:"verification-of-functionality",level:2},{value:"\u7e3d\u9ad4\u6d41\u7a0b",id:"overall-process",level:2}],y={toc:N};function v(t){var e,r=t,{components:i}=r,s=((t,e)=>{var r={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&c)for(var n of c(t))e.indexOf(n)<0&&m.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=h(h({},y),s),p(e,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(l.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.png",noShadow:!0,width:"600",mdxType:"Figure"},"Project activity"),(0,n.kt)("p",null,"\u672c\u7ae0\u5c07\u5354\u52a9\u60a8\u5728\u65b0\u5e73\u81fa\u4e0a\u642d\u5efaTouchGFX\u3002 \u642d\u5efa\u958b\u767c\u677f\u610f\u5473\u8457\u5728\u5c07TouchGFX\u6dfb\u52a0\u9032\u4f86\u4e4b\u524d\uff0c\u5fc5\u9808\u78ba\u4fdd\u6240\u6709\u5fc5\u8981\u7684\u677f\u8f09\u90e8\u4ef6\u548c\u76f8\u61c9\u7684\u9a45\u52d5\u7a0b\u5f0f\u5747\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u64c1\u6709\u4e00\u500b\u5e36\u6709\u986f\u793a\u5668\u7684\u958b\u767c\u677f\uff0c\u5247\u6b64\u968e\u6bb5\u7684\u8a31\u591a\u64cd\u4f5c\u5c07\u5f88\u5bb9\u6613\u3002 \u5982\u679c\u60a8\u64c1\u6709\u7684\u662f\u584a\u5168\u65b0\u7684\u5b9a\u88fd\u677f\uff0c\u5247\u6b64\u968e\u6bb5\u53ef\u80fd\u9700\u8981\u82b1\u8cbb\u597d\u5e7e\u5929\u624d\u80fd\u5b8c\u6210\u3002 \u7531\u65bc\u5728\u4e0d\u7a69\u5b9a\u7684\u5e73\u81fa\u4e0a\u5f88\u96e3\u7de8\u5beb\u51fa\u826f\u597d\u7684\u7a0b\u5f0f\uff0c\u56e0\u6b64\u524d\u671f\u6e96\u5099\u5de5\u4f5c\u662f\u5f88\u91cd\u8981\u7684\u3002 \u6b64\u5916\uff0c\u7a69\u5b9a\u53ef\u9760\u7684\u5e73\u53f0\u8b93\u60a8\u66f4\u5c08\u6ce8\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u958b\u767c\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5c31\u662f\u8ca0\u8cac\u677f\u4e0a\u786c\u9ad4\u548c\u5e95\u5c64\u8edf\u9ad4\u7684\u958b\u767c\u4eba\u54e1\uff0c\u5247\u672c\u7ae0\u5f88\u9069\u5408\u60a8\u3002 \u5982\u679c\u60a8\u53ea\u95dc\u6ce8\u61c9\u7528\u7a0b\u5f0f\u7684\u5be6\u969bUI\u4ecb\u9762\u958b\u767c\uff0c\u5247\u672c\u7ae0\u4e0d\u592a\u9069\u5408\u60a8\u3002"),(0,n.kt)("p",null,"\u5728\u642d\u5efa\u958b\u767c\u677f\u6642\uff0c\u60a8\u61c9\u5b8c\u5168\u77ad\u89e3\u677f\u7684\u5143\u4ef6\u548c\u5916\u8a2d\u3001\u5143\u4ef6\u4e4b\u9593\u7684\u9023\u63a5\u3001\u6240\u7528\u5230\u7684\u901a\u8a0a\u5354\u5b9a\u4ee5\u53ca\u5404\u500b\u53ef\u7528\u548c/\u6216\u6240\u9700\u7684\u9a45\u52d5\u7a0b\u5f0f\u4ee3\u78bc\u3002"),(0,n.kt)("p",null,"\u4e0b\u4e00\u7ae0",(0,n.kt)(a.Z,{to:"../touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"TouchGFX AL\u958b\u767c"),"\u5c07\u8a0e\u8ad6\u5982\u4f55\u5275\u5efa\u5141\u8a31TouchGFX\u5728\u786c\u9ad4\u548c\u9a45\u52d5\u7a0b\u5f0f\u4e4b\u4e0a\u904b\u884c\u7684\u62bd\u8c61\u5c64\u3002"),(0,n.kt)("h2",h({},{id:"tools-of-the-trade"}),"\u884c\u696d\u5de5\u5177\u5de5\u5177\u4ecb\u7d39"),(0,n.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u642d\u5efaSTM32\u7684\u958b\u767c\u677f\u6642\u6240\u9700\u7684\u4e00\u4e9b\u91cd\u8981\u5de5\u5177\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\u5de5\u5177"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u4e00\u7a2e\u6613\u65bc\u4f7f\u7528\u7684\u5de5\u5177\uff0c\u7528\u65bc\u914d\u7f6eMCU\u4e26\u751f\u6210\u5305\u62ec\u5167\u90e8\u5468\u908a\u7684\u6574\u500b\u5c08\u6848\u521d\u59cb\u5316\u539f\u59cb\u7a0b\u5f0f\u78bc\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"STM32Cube\u97cc\u9ad4\u5957\u4ef6"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The STM32Cube Firmware for your MCU family contains many example projects and applications that show how to use various peripherals.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u4f9b\u61c9\u5546\u8cc7\u6599\u624b\u518a"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The datasheets for your external devices, like the display or flash, contain important information such as timing and voltage for correct initialisation of both MCU (e.g. through STM32CubeMX) and the external device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u4f9b\u61c9\u5546\u7684\u9a45\u52d5\u7a0b\u5f0f"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u70ba\u4e86\u7bc0\u7701\u6642\u9593\uff0c\u60a8\u61c9\u5411\u4f9b\u61c9\u5546\u7d22\u53d6\u5916\u90e8\u8a2d\u5099/\u5143\u4ef6\u7684\u9a45\u52d5\u7a0b\u5f0f\u78bc\u3002 \u901a\u5e38\u9700\u8981\u5c07\u4f9b\u61c9\u5546\u7684\u9a45\u52d5\u7a0b\u5f0f\u4ee3\u78bc\u79fb\u690d\u5230STM32\u7684MCU\u4e2d\uff0c\u9019\u81f3\u5c11\u6bd4\u5f9e\u982d\u958b\u59cb\u7de8\u5beb\u9a45\u52d5\u7a0b\u5f0f\u4ee3\u78bc\u66f4\u7c21\u55ae\u3002")))),(0,n.kt)("p",null,"\u5728\u958b\u767c\u677f\u642d\u5efa\u968e\u6bb5\u7684\u6240\u6709\u6e96\u5099\u5de5\u4f5c\u5747\u8207TouchGFX\u7121\u95dc\uff0c\u4e5f\u4e0d\u61c9\u6d89\u53ca\u4efb\u4f55TouchGFX\u7a0b\u5f0f\u78bc\u3002 \u76f8\u53cd\uff0c\u6240\u505a\u7684\u5de5\u4f5c\u548c\u6240\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u5c07\u70ba\u958b\u767cTouchGFX\u62bd\u8c61\u5c64\u5960\u5b9a\u5805\u5be6\u7684\u57fa\u790e\u3002"),(0,n.kt)("p",null,"\u5176\u4e3b\u8981\u76ee\u6a19\u5728\u65bc\u78ba\u4fdd\u786c\u9ad4\u548c\u5e95\u5c64\u8edf\u9ad4\u5be6\u969b\u4e0a\u6309\u7167\u6700\u7d42\u61c9\u7528\u7684\u9810\u671f\u904b\u884c\u3002"),(0,n.kt)("h2",h({},{id:"verification-of-functionality"}),"\u529f\u80fd\u9a57\u8b49"),(0,n.kt)("p",null,"\u5728\u958b\u767c\u677f\u4e2d\u57f7\u884c\u7684\u7a0b\u5f0f\u78bc\uff08\u57fa\u65bc\u4e00\u500b\u6216\u591a\u500b\u6e2c\u8a66\u5c08\u6848\uff09\u5c07\u7528\u65bc\u5169\u500b\u76ee\u7684\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null})),(0,n.kt)("th",h({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u62bd\u8c61\u5c64"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u662f\u5efa\u69cbTouchGFXAL\u4ee5\u53ca\u6700\u7d42\u57f7\u884c\u7684UI\u61c9\u7528\u7a0b\u5f0f\u7684\u57fa\u790e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u6e2c\u8a66\u7a0b\u5f0f\u78bc"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u5982\u679c\u6700\u7d42\u57f7\u884c\u60c5\u6cc1\u4e0d\u7b26\u5408\u9810\u671f\uff0c\u5247\u9700\u8981\u6839\u64da\u73fe\u6709\u958b\u767c\u677f\u7684\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u7de8\u5beb\u9a57\u8b49\u7a0b\u5f0f\u3002 \u5728\u958b\u767c\u677f\u642d\u5efa\u968e\u6bb5\uff0c\u5c07\u6703\u5275\u5efa\u8a31\u591a\u5c0f\u7a0b\u5f0f\uff0c\u4ee5\u9a57\u8b49\u6574\u500b\u958b\u767c\u677f\u548c\u6bcf\u500b\u5143\u4ef6\u6309\u7167\u9810\u671f\u5de5\u4f5c\u3002 \u9019\u4e9b\u9a57\u8b49\u7a0b\u5f0f\u5728\u6574\u500b\u642d\u5efa\u904e\u7a0b\u4e2d\u5f88\u6709\u50f9\u503c\uff0c\u5c24\u5176\u5728\u6e2c\u8a66\u60c5\u6cc1\u8b8a\u5f97\u4e0d\u78ba\u5b9a\u6642\uff0c\u53ef\u4ee5\u5c0d\u5176\u91cd\u65b0\u4fee\u6539\u4e26\u4e88\u4ee5\u5b8c\u5584\u3002")))),(0,n.kt)("p",null,"\u9452\u65bc\u4e0a\u8ff0\u5169\u500b\u539f\u56e0\uff0c\u6709\u7cfb\u7d71\u5730\u4fdd\u5b58\u5404\u985e\u9a57\u8b49\u7a0b\u5f0f\u6703\u975e\u5e38\u6709\u76ca\u3002 \u60a8\u4ee5\u5f8c\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u9019\u4e9b\u6e2c\u8a66\u7a0b\u5f0f\u3002 \u4f8b\u5982\uff0c\u7576\u66f4\u8907\u96dc\u7684\u61c9\u7528\u610f\u5916\u5931\u6557\u6642\uff0c\u53ef\u4f7f\u7528\u9019\u4e9b\u6e2c\u8a66\u7a0b\u5f0f\u9a57\u8b49\u65b0\u7248\u672c\u786c\u9ad4\u6216\u7528\u4f86\u67e5\u627e\u554f\u984c\u3002 \u9084\u5efa\u8b70\u7cfb\u7d71\u6027\u5730\u8a18\u9304\u5728\u958b\u767c\u671f\u9593\u5b8c\u6210\u7684\u4efb\u4f55\u6e2c\u91cf\u8cc7\u6599\uff0c\u5982\u8a18\u61b6\u9ad4\u983b\u5bec\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u662fTouchGFXAL\u7684\u57fa\u790e"),(0,n.kt)("h2",h({},{id:"overall-process"}),"\u7e3d\u9ad4\u6d41\u7a0b"),(0,n.kt)("p",null,"\u7531\u65bc\u6211\u5011\u7121\u6cd5\u77ad\u89e3\u60a8\u786c\u9ad4\u7684\u5177\u9ad4\u69cb\u9020\uff0c\u56e0\u6b64\u4ee5\u4e0b",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)(a.Z,{to:"how-to/01-create-project",mdxType:"Link"},"\u64cd\u4f5c")),"\u6307\u5357\u5c07\u4f5c\u70ba\u555f\u52d5\u548c\u6e96\u5099\u7528\u65bc\u904b\u884cTouchGFX\u958b\u767c\u677f\u7684\u4e00\u822c\u6027\u5206\u6b65\u6307\u5357\u3002"),(0,n.kt)("p",null,"\u672c\u6307\u5357\u7684\u6bcf\u4e00\u6b65\u90fd\u6d89\u53ca\u60a8\u7684\u786c\u9ad4\u548c/\u6216\u8edf\u9ad4\u5143\u4ef6\u7684\u4e00\u500b\u7279\u5b9a\u90e8\u5206\u53ca\u5176\u555f\u52d5\u3002 \u786c\u9ad4\u7684\u81ea\u5b9a\u7fa9\u5143\u4ef6\u90e8\u5206\u7684\u4e00\u500b\u7bc4\u4f8b\u53ef\u4ee5\u662f\u89f8\u63a7\u63a7\u5236\u5668\u3002 \u7e3d\u9ad4\u76ee\u6a19\u662f\u8207\u89f8\u63a7\u63a7\u5236\u5668\u9032\u884c\u901a\u4fe1\uff0c\u4ee5\u7372\u53d6\u6709\u95dc\u986f\u793a\u5668\u4e0a\u7684\u4efb\u4f55\u89f8\u63a7\u8cc7\u8a0a\u3002 \u767c\u9001\u7d66\u89f8\u63a7\u63a7\u5236\u5668\u7684\u7279\u5b9a\u6307\u4ee4\u53d6\u6c7a\u65bc\u60a8\u5728\u786c\u9ad4\u4e0a\u4f7f\u7528\u7684\u7279\u5b9a\u63a7\u5236\u5668\uff0c\u56e0\u6b64\u672c\u6307\u5357\u7121\u6cd5\u63d0\u4f9b\u5b8c\u6574\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002 \u70ba\u6b64\uff0c\u958b\u767c\u6642\u9700\u8981\u5c07\u6307\u5357\u8207\u89f8\u6478\u63a7\u5236\u5668\u6578\u64da\u624b\u518a\u4e2d\u7684\u8cc7\u8a0a\u76f8\u7d50\u5408\u3002"),(0,n.kt)(o.Z,{mdxType:"Note"},"\u95b1\u8b80\u4e26\u57f7\u884c\u6709\u95dc\u5b9a\u88fd\u958b\u767c\u677f\u7684\u642d\u5efa\u555f\u52d5\u7684\u5206\u6b65\u6307\u5357\u6642\uff0c\u6211\u5011\u5efa\u8b70\uff1a",(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u6bcf\u6b21\u50c5\u57f7\u884c\u4e00\u6b65"),(0,n.kt)("li",null,"\u5728\u7e7c\u7e8c\u4e0b\u4e00\u6b65\u4e4b\u524d\uff0c\u8acb\u5fb9\u5e95\u9a57\u8b49\u6bcf\u500b\u6b65\u9a5f"),(0,n.kt)("li",null,"\u7576\u67d0\u90e8\u5206\u672a\u80fd\u6309\u9810\u671f\u5de5\u4f5c\u6642\uff0c\u672c\u6307\u5357\u5c07\u4f5c\u70ba\u9664\u932f\u65b9\u6cd5\uff0c\u6216\u8005\u8fd4\u56de\u4e26\u91cd\u65b0\u57f7\u884c\u5148\u524d\u7684\u6b65\u9a5f\uff0c\u4ee5\u78ba\u4fdd\u6c92\u6709\u9055\u53cd\u9019\u4e9b\u6b65\u9a5f"),(0,n.kt)("li",null,"\u5982\u679c\u60a8\u9047\u5230\u610f\u5916\u60c5\u6cc1\uff0c\u8acb\u4e0d\u5fc5\u9a5a\u614c\uff0c\u7562\u7adf\u958b\u767c\u677f\u7684\u555f\u52d5\u642d\u5efa\u4e26\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b"))),(0,n.kt)("p",null,"\u6307\u5357\u4e2d\u7684\u6bcf\u4e00\u6b65\u90fd\u5c07\u9075\u5faa\u4ee5\u4e0b\u7d50\u69cb\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Motivation")," This part will explain the step and motivate why the step is an important step in preparing for running TouchGFX on your hardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Goal")," The goal part lists the goals for this step. \u9a57\u8b49\u9ede\u5217\u8868\u8a73\u8ff0\u4e86\u60a8\u61c9\u57f7\u884c\u7684\u7279\u5b9a\u6e2c\u8a66\u3002 \u9019\u4e9b\u9a57\u8b49\u9ede\u78ba\u4fdd\u60a8\u7684\u8edf\u9ad4\u6eff\u8db3\u5728\u786c\u9ad4\u4e0a\u6210\u529f\u904b\u884cTouchGFX\u7684\u689d\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prerequisites")," Here we list items that are required to perform the tasks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Do")," This part explains as concrete as possible how to write the software required to configure and use the hardware. \u7531\u65bc\u8edf\u9ad4\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u6c7a\u65bc\u60a8\u6240\u4f7f\u7528\u7684\u786c\u9ad4\uff0c\u67d0\u4e9b\u6b65\u9a5f\u4e0d\u53ef\u80fd\u975e\u5e38\u6e96\u78ba\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6b64\u90e8\u5206\u5728\u66f4\u9ad8\u968e\u5c64\u9762\u4e0a\u5217\u51fa\u4e86\u6b65\u9a5f\uff0c\u60a8\u9084\u5fc5\u9808\u627e\u5230\u8207\u60a8\u81ea\u5df1\u7684\u786c\u9ad4\u76f8\u95dc\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002")),(0,n.kt)("p",null,"\u5404\u500b\u52d5\u4f5c\u6b65\u9a5f\u5982\u4e0b\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\u6b65\u9a5f"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\u5167\u5bb9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/01-create-project"}),"Create Project")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Create an empty project in STM32CubeMX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/02-cpu-running"}),"CPU\u7684\u57f7\u884c")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u78ba\u4fddMCU\u4ee5\u9700\u8981\u7684\u901f\u5ea6\u57f7\u884c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/03-display-internal"}),"Display with framebuffer in internal RAM")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u5728\u5167\u90e8RAM\u4e2d\u5206\u914d\u5f71\u50cf\u7de9\u885d\u5340\u4e26\u5c07\u5167\u5bb9\u50b3\u8f38\u5230\u986f\u793a\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"External RAM")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u555f\u52d5\u5916\u90e8RAM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/05-display-external"}),"Display with framebuffer in external RAM")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u79fb\u81f3\u5916\u90e8RAM\uff0c\u4e26\u5c07\u50b3\u8f38\u5230\u986f\u793a\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"External addressable flash")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u555f\u52d5\u5916\u90e8\u5b58\u5132\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"\u5916\u90e8\u584a\u6a21\u5f0f\u5feb\u9583\u8a18\u61b6\u9ad4")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u555f\u52d5\u5916\u90e8\u584a\u6a21\u5f0f\u5feb\u9583\u8a18\u61b6\u9ad4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"Hardware acceleration")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u555f\u52d5Chrom-ART\u5716\u5f62\u52a0\u901f\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/09-touch-controller"}),"\u89f8\u63a7\u63a7\u5236\u5668")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u8a2d\u7f6e\u8207\u89f8\u63a7\u63a7\u5236\u5668\u7684\u901a\u4fe1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/10-physical-buttons"}),"\u6309\u9215")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u914d\u7f6e\u5c0d\u6309\u9215\u7684\u8a2a\u554f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/11-flash-loader"}),"\u5feb\u9583\u8a18\u61b6\u9ad4\u88dd\u8f09\u8edf\u9ad4")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\u958b\u767c\u4e00\u7a2e\u65b9\u6cd5\u5c07\u6578\u64da\u5beb\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4")))))}v.isMDXComponent=!0}}]);