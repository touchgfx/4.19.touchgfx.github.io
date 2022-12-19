"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[46],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||r;return n?l.createElement(k,i(i({ref:t},d),{},{components:n})):l.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var l=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,i=(0,a.Z)(e.imageSource);return t?l.createElement("div",{className:"figure noshadow"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,e.children)):l.createElement("div",{className:"figure"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,e.children))}},29415:function(e,t,n){var l=n(67294),a=n(88678);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends l.Component{render(){return l.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}t.Z=i},88678:function(e,t,n){var l=n(67294);class a extends l.Component{render(){const e=`highlight highlight-${this.props.type}`;return l.createElement("div",{className:e},l.createElement("div",{className:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var l=n(67294),a=n(88678);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends l.Component{render(){return l.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=i},36579:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return b},frontMatter:function(){return g},metadata:function(){return N},toc:function(){return w}});var l=n(3905),a=n(44035),r=n(93054),i=n(29415),o=n(39130),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&k(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&k(e,n,t[n]);return e};const g={id:"hardware-selection-display",title:"\u663e\u793a\u5c4f"},v=void 0,N={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-display",id:"development/hardware-selection/hardware-components/hardware-selection-display",title:"\u663e\u793a\u5c4f",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-display.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-display",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-display",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-display",title:"\u663e\u793a\u5c4f"},sidebar:"docs",previous:{title:"MCU",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"},next:{title:"\u5916\u90e8\u5b58\u50a8\u5668",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"}},y={},w=[{value:"\u663e\u793a\u5c4f\u793a\u4f8b",id:"examples-of-displays",level:2},{value:"LCD-TFT",id:"lcd-tft",level:3},{value:"MIP",id:"mip",level:3},{value:"ePaper/eInk",id:"epapereink",level:3},{value:"\u663e\u793a\u5c4f\u63a5\u53e3\u603b\u89c8",id:"display-interface-overview",level:2},{value:"\u4eae\u5ea6\u548c\u80cc\u5149",id:"brightness-and-backlight",level:3},{value:"\u89c2\u770b\u4f4d\u7f6e\u548c\u989c\u8272\u53cd\u8f6c",id:"viewing-position-and-color-inversion",level:3},{value:"\u663e\u793a\u5c4f\u4f7f\u7528\u5bff\u547d",id:"display-lifetime",level:3},{value:"\u50cf\u7d20\u5bc6\u5ea6",id:"pixel-density",level:3},{value:"\u52a8\u6001\u8272\u57df",id:"dynamic-color-range",level:4},{value:"\u6297\u952f\u9f7f",id:"anti-aliasing",level:4},{value:"\u73af\u5883",id:"environment",level:3},{value:"\u89e6\u63a7/\u975e\u89e6\u63a7\u663e\u793a\u5c4f",id:"touch--non-touch-displays",level:3},{value:"\u7535\u5bb9\u5f0f\u89e6\u63a7",id:"capacitive-touch",level:4},{value:"\u7535\u963b\u5f0f\u89e6\u63a7",id:"resistive-touch",level:4},{value:"\u975e\u89e6\u63a7",id:"non-touch",level:4},{value:"\u5177\u6709RAM\u7684\u663e\u793a\u5c4f",id:"displays-with-ram",level:3},{value:"\u975e\u6b63\u65b9\u5f62\u50cf\u7d20/\u50cf\u7d20\u5bbd\u9ad8\u6bd4",id:"non-square-pixels--pixel-aspect-ratio",level:3},{value:"\u76d6\u677f\u73bb\u7483",id:"cover-lense",level:3}],f={toc:w};function b(e){var t,n=e,{components:p}=n,k=((e,t)=>{var n={};for(var l in e)m.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&c)for(var l of c(e))t.indexOf(l)<0&&s.call(e,l)&&(n[l]=e[l]);return n})(n,["components"]);return(0,l.kt)("wrapper",(t=h(h({},f),k),u(t,d({components:p,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,"\u76ee\u524d\u7684\u8d8b\u52bf\u662f\u4ea7\u54c1\u8d8a\u6765\u8d8a\u4e30\u5bcc\uff0c\u7528\u6237\u4f53\u9a8c\u589e\u5f3a\uff0c\u5d4c\u5165\u65b0\u7684\u66f4\u5927\u7684\u663e\u793a\u5c4f\uff0c\u800c\u8001\u5f0f\u7684\u5206\u6bb5\u5f0f\u663e\u793a\u5c4f\u6b63\u5728\u88ab\u5404\u79cd\u663e\u793a\u5c4f\u53d6\u4ee3\u3002"),(0,l.kt)("p",null,"\u672c\u7ae0\u5c06\u91cd\u70b9\u5728\u4ecb\u7ecd\u5d4c\u5165\u5f0fGUI\u4ea7\u54c1\u65f6\u9009\u62e9\u5408\u9002\u7684\u663e\u793a\u5c4f\u5e94\u8003\u8651\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/displays.webp",noShadow:!0,mdxType:"Figure"},"\u663e\u793a\u5c4f\u7684\u4e0d\u540c\u7c7b\u578b"),(0,l.kt)(r.Z,{mdxType:"Note"},"\u603b\u4f53\u800c\u8a00\uff0cTouchGFX\u53ef\u4ee5\u5728\u4efb\u4f55\u7c7b\u578b\u7684\u663e\u793a\u5c4f\u4e0a\u8fd0\u884c\uff0c\u4e0d\u53d7\u663e\u793a\u6280\u672f\u3001\u63a5\u53e3\u3001\u89c6\u89d2\u3001\u4eae\u5ea6\u7b49\u56e0\u7d20\u7684\u5f71\u54cd\u3002"),(0,l.kt)("h2",h({},{id:"examples-of-displays"}),"\u663e\u793a\u5c4f\u793a\u4f8b"),(0,l.kt)("p",null,"\u7531\u4e8e\u6bcf\u79cd\u663e\u793a\u5c4f\u7684\u5173\u952e\u56e0\u7d20\u4e0d\u540c\uff0c\u9009\u62e9\u5408\u9002\u7684\u663e\u793a\u6280\u672f\u53ef\u80fd\u5e76\u4e0d\u90a3\u4e48\u5bb9\u6613\u3002 \u4e0b\u9762\u4e00\u7ae0\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u4e0d\u540c\u6280\u672f\uff0c\u4e5f\u8bb8\u80fd\u5e2e\u52a9\u60a8\u627e\u5230\u6b63\u786e\u7684\u65b9\u5411\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e00\u79cd\u663e\u793a\u5c4f\u90fd\u5305\u542b\u50cf\u7d20\u884c\u548c\u50cf\u7d20\u5217\uff08\u5b83\u4eec\u7684\u9a71\u52a8\u65b9\u5f0f\u53ef\u80fd\u4e0d\u540c\uff09\uff0c\u90fd\u5177\u6709\u5185\u90e8\u548c/\u6216\u5916\u90e8\u663e\u793a\u63a7\u5236\u5668\u548c\u5e27\u7f13\u51b2RAM\u3002 \u4e0e\u5176\u4ed6\u6280\u672f\u76f8\u6bd4\uff0c\u6709\u4e9b\u6280\u672f\u9700\u8981\u9891\u7e41\u5730\u66f4\u65b0\u6bcf\u4e2a\u50cf\u7d20\uff0c\u800c\u8fd9\u79cd\u6280\u672f\u53ea\u5728GUI\u4e2d\u53d1\u751f\u53d8\u5316\u65f6\u624d\u66f4\u65b0\uff0c\u56e0\u6b64\u5e76\u6ca1\u6709\u5fc5\u8981\u66f4\u65b0\u6bcf\u4e2a\u50cf\u7d20\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u6709\u5927\u91cf\u4e0d\u540c\u7684\u663e\u793a\u6280\u672f\u3002 \u4e0b\u9762\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u6700\u5e38\u7528\u7684\u663e\u793a\u6280\u672f\u3002"),(0,l.kt)("h3",h({},{id:"lcd-tft"}),"LCD-TFT"),(0,l.kt)("p",null,"TFT\u662f\u6307\u8584\u819c\u6676\u4f53\u7ba1\uff0c\u662fLCD\u663e\u793a\u5c4f\u7684\u4e00\u79cd\u53d8\u578b\uff0c\u91c7\u7528\u6709\u6e90\u77e9\u9635\u3002 LCD-TFT\u6709\u5404\u79cd\u4e0d\u540c\u7684\u5206\u8fa8\u7387\u3001\u5c3a\u5bf8\u3001\u63a5\u53e3\u548c\u4ef7\u683c\u533a\u95f4\u7b49\uff0c\u88ab\u5e7f\u6cdb\u5e94\u7528\u5728\u5d4c\u5165\u5f0f\u4ea7\u54c1\u4e2d\u3002"),(0,l.kt)("p",null,"TFT-LCD\u7684\u4e00\u4e9b\u53d8\u578b\u5305\u62ecTN\u548cIPS\u9762\u677f\u3002 IPS TFT-LCD\u7684\u4f8b\u5b50\u6709STM32F769 DISCO\u677f\u548cSTM32H747 DISCO\u677f\uff0c\u4e8c\u8005\u90fd\u642d\u914d800*480 MIPI-DSI TFT IPS LCD\u663e\u793a\u5c4f\u3002 TFT-LCD TN\u663e\u793a\u5c4f\u7684\u4f8b\u5b50\u6709STM32F746G DISCO\u677f\u548cSTM32H7B3I-DK\u677f\u3002 \u4e24\u79cd\u6280\u672f\u5e26\u6765\u4e0d\u540c\u753b\u8d28\uff0c\u6709\u4e9b\u5dee\u5f02\u53ef\u80fd\u6765\u6e90\u4e8e\u989c\u8272\u5448\u73b0\u548c\u89c6\u89d2\uff0cIPS\u9762\u677f\u901a\u5e38\u662f\u6700\u597d\u7684\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/display-layers.webp",noShadow:!0,mdxType:"Figure"},"LCD-TFT\u56fe\u5c42\u793a\u4f8b"),(0,l.kt)("h3",h({},{id:"mip"}),"MIP"),(0,l.kt)("p",null,"MIP\u8868\u793a\u50cf\u7d20\u5b58\u50a8\uff0c\u5b83\u4f7f\u7528\u7684\u50cf\u7d20\u6280\u672f\u53ea\u5728\u5c4f\u5e55\u56fe\u50cf\u53d1\u751f\u53d8\u5316\u65f6\u624d\u9700\u8981\u7535\u6e90/\u6570\u636e\u3002 MIP\u663e\u793a\u5c4f\u662f\u4e00\u79cd\u4f4e\u529f\u8017\u663e\u793a\u5c4f\uff0c\u529f\u8017\u5c0f\u4e8e\u5168\u5f69GUI\u3002"),(0,l.kt)("h3",h({},{id:"epapereink"}),"ePaper/eInk"),(0,l.kt)("p",null,"eInk\u663e\u793a\u5c4f\u662f\u4f4e\u5f69\u663e\u793a\u5c4f\uff0c\u5b83\u662f\u4f4e\u529f\u8017\u3001\u5bbd\u89c6\u89d2\u548c\u6613\u8bfb\u578b\u5e94\u7528\u7684\u7406\u60f3\u9009\u62e9\u3002 TouchGFX Implementer SDATAWAY\u6f14\u793a\u4e86\u5728STM32F412\u4e0a\u8fd0\u884cTouchGFX\u5e94\u7528\u7684eInk\u663e\u793a\u5c4f\uff0c\u8be6\u60c5\u89c1\u7f51\u5740\uff1a",(0,l.kt)("a",h({parentName:"p"},{href:"https://www.touchgfx.com/cases/e-ink/"}),"https://www.touchgfx.com/cases/e-ink/")),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/e-ink.webp",noShadow:!0,mdxType:"Figure"},"E-Ink"),(0,l.kt)("h2",h({},{id:"display-interface-overview"}),"\u663e\u793a\u5c4f\u63a5\u53e3\u603b\u89c8"),(0,l.kt)("p",null,"\u663e\u793a\u5c4f\u901a\u8fc7\u4e0d\u540c\u7c7b\u578b\u7684\u63a5\u53e3\u8fde\u63a5\u5230MCU\u3002 \u663e\u793a\u5c4f\u63a5\u53e3\u7684\u53c2\u6570\u5404\u4e0d\u76f8\u540c\uff0c\u4e0b\u4e00\u8282\u5c06\u4ecb\u7ecd\u56fe\u50cf\u76f8\u5173\u53c2\u6570\uff0c\u4f8b\u5982\u9700\u8981\u7684\u5f15\u811a\u6570\u548c\u652f\u6301\u4e0d\u540c\u5206\u8fa8\u7387\u7684\u6700\u5927\u5e26\u5bbd\u3002"),(0,l.kt)("p",null,"TouchGFX\u53ef\u4f7f\u7528\u4efb\u4f55\u663e\u793a\u63a5\u53e3\uff0cSTM32\u5fae\u63a7\u5236\u5668\u63d0\u4f9b\u53ef\u8fde\u63a5Motorola 6800\u3001Intel 8080\u3001SPI\u3001RGB-TFT\u548cMIPI-DSI\u7684\u5404\u79cd\u663e\u793a\u63a5\u53e3\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\u63a5\u53e3"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\u5f15\u811a\u6570\u91cf"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\u76ee\u6807\u5206\u8fa8\u7387"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\u6700\u5927\u5e26\u5bbd"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\u4f18\u70b9"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\u7f3a\u70b9"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"SPI"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"4*"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u6700\u9ad8480*272"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"16 MHz"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u7b80\u5355\u786c\u4ef6\u63a5\u53e3\uff0c\u6bd4I2C\u5feb\uff0c"),(0,l.kt)("td",h({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u5e76\u884c8080/6800 (FMC)"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"8/16*"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u6700\u9ad8480*272"),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"RGB-TFT (LTDC)"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"8/18/24*"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u6700\u9ad81280*800"),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u9ad8\u6027\u80fd\uff0c\u4f4e\u6210\u672c"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u5f15\u811a\u6570\u91cf\u591a\uff0c\u5e76\u884c\u901a\u4fe1\u53ef\u80fd\u5bfc\u81f4EMC\u95ee\u9898\uff0c\u53ef\u80fd\u9700\u8981\u66f4\u9ad8\u65f6\u949f\u9891\u7387")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"MIPI-DSI (LTDC)"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"4/10"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u6700\u9ad81280*800"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"80Mbps-1.5Gbps"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u9ad8\u6027\u80fd\uff0c\u5f15\u811a\u6570\u91cf\u5c11\uff0c"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u590d\u6742\u7684\u534f\u8bae\u548c\u9a71\u52a8\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"LVDS**"),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"1366*768"),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u4f4eEMC/\u5e72\u6270\uff0c\u901f\u5ea6\u5feb"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\u9700\u8981\u6865\u63a5")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u5f15\u811a\u7528\u4e8e\uff1a\u89e6\u5c4f\u3001\u7535\u6e90\u3001\u63a7\u5236\u4fe1\u53f7\u7b49\u3002"))),(0,l.kt)("li",{parentName:"ul"},"** \u8fde\u63a5LVDS\u663e\u793a\u5c4f\u65f6\u9700\u8981\u8fdb\u884c\u6865\u63a5\u3002")),(0,l.kt)("h3",h({},{id:"brightness-and-backlight"}),"\u4eae\u5ea6\u548c\u80cc\u5149"),(0,l.kt)("p",null,"\u4eae\u5ea6\u5355\u4f4d\u901a\u5e38\u4f7f\u7528\u582a\u5fb7\u62c9\u6bcf\u5e73\u7c73\u3002 \u4eae\u5ea6\u662f\u663e\u793a\u5c4f\u6700\u8017\u7535\u7684\u90e8\u5206\u3002 \u5728\u9633\u5149\u4e0b\uff0c\u663e\u793a\u5c4f\u9700\u8981\u7ea6600 cd/M2\u7684\u4eae\u5ea6\u3002 \u66f4\u9ad8\u7684\u4eae\u5ea6\u901a\u5e38\u4f1a\u4f7f\u6e29\u5ea6\u4e0a\u5347\uff0c\u4ece\u800c\u7f29\u77edLED\u7684\u4f7f\u7528\u5bff\u547d\u3002"),(0,l.kt)("h3",h({},{id:"viewing-position-and-color-inversion"}),"\u89c2\u770b\u4f4d\u7f6e\u548c\u989c\u8272\u53cd\u8f6c"),(0,l.kt)("p",null,"\u5728\u5c06\u663e\u793a\u5c4f\u5d4c\u5165\u4ea7\u54c1\u65f6\uff0c\u5fc5\u987b\u9884\u89c1\u5e76\u4e86\u89e3\u7528\u6237\u53ef\u80fd\u5904\u4e8e\u7684\u89c2\u770b\u4f4d\u7f6e\u3002 \u4e00\u4e9b\u663e\u793a\u5c4f\u5728\u4ece\u7279\u5b9a\u4f4d\u7f6e\u89c2\u770b\u65f6\uff0c\u53ef\u80fd\u53d1\u751f\u989c\u8272\u53cd\u8f6c\u3002 \u8fd9\u610f\u5473\u7740\uff0c\u60f3\u8981\u5c06\u663e\u793a\u5c4f\u5b89\u88c5\u5728\u5408\u9002\u4f4d\u7f6e\uff0c\u5e76\u4f7f\u7528\u6237\u80fd\u591f\u5728\u64cd\u4f5c\u548c\u4f53\u9a8cGUI\u7684\u540c\u65f6\u8fd8\u80fd\u770b\u5230\u753b\u9762\u8bbe\u8ba1\u5e08\u8bbe\u8ba1\u7684\u6b63\u786e\u989c\u8272\uff0c\u5e76\u6ca1\u6709\u90a3\u4e48\u5bb9\u6613\u3002"),(0,l.kt)("p",null,"TN\u9762\u677f\u53ef\u80fd\u53d1\u751f\u989c\u8272\u53cd\u8f6c\u3002 \u6dfb\u52a0\u4e00\u5c42SWV\u819c\u6709\u52a9\u4e8e\u589e\u5927\u89c6\u89d2\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/viewing-position.webp",mdxType:"Figure"},"\u4ece\u4e0d\u540c\u89c2\u770b\u4f4d\u7f6e\u770b\u5230\u7684\u989c\u8272"),(0,l.kt)("h3",h({},{id:"display-lifetime"}),"\u663e\u793a\u5c4f\u4f7f\u7528\u5bff\u547d"),(0,l.kt)("p",null,"\u4f7f\u7528\u5bff\u547d\u7684\u5b9a\u4e49\u662f\u663e\u793a\u5c4f\u572825\u2103\u6761\u4ef6\u4e0b\u964d\u81f3\u4e00\u534a\u4eae\u5ea6\u6240\u7ecf\u5386\u7684\u65f6\u95f4\u3002 \u5982\u679c\u4ea7\u54c1\u7684\u751f\u547d\u5468\u671f\u957f\uff0c\u5219\u5fc5\u987b\u8003\u8651\u6b64\u53c2\u6570\u3002"),(0,l.kt)("h3",h({},{id:"pixel-density"}),"\u50cf\u7d20\u5bc6\u5ea6"),(0,l.kt)("p",null,"\u50cf\u7d20\u5bc6\u5ea6\u5b9a\u4e49\u4e86\u6bcf\u82f1\u5bf8\u6216\u5e73\u65b9\u82f1\u5bf8\u663e\u793a\u7684\u50cf\u7d20\u6570\u3002 \u53ef\u6839\u636e\u6700\u7ec8\u7528\u6237\u3001\u73af\u5883\u548c\u8bbe\u8ba1\u9700\u6c42\u7b49\u56e0\u7d20\u9009\u62e9\u5408\u9002\u7684\u50cf\u7d20\u5bc6\u5ea6\u3002 \u5177\u4f53\u6765\u8bf4\uff0c\u4e00\u90e8\u9ad8\u7aef\u624b\u673a\u76842340x1080\u50cf\u7d206.1\u82f1\u5bf8\u5c4f\u5e55\u7684\u50cf\u7d20\u5bc6\u5ea6\u4e3a\u6bcf\u5e73\u65b9\u82f1\u5bf8178,500\u4e2a\u50cf\u7d20\uff0c\u800c\u5e38\u7528\u7684800x480\u50cf\u7d205\u82f1\u5bf8TFT\u663e\u793a\u5c4f\u7684\u50cf\u7d20\u5bc6\u5ea6\u4e3a\u6bcf\u5e73\u65b9\u82f1\u5bf834,816\u4e2a\u50cf\u7d20\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/pixel-density.webp",noShadow:!0,mdxType:"Figure"},"\u4f4e\u3001\u4e2d\u3001\u9ad8\u50cf\u7d20\u5bc6\u5ea6"),(0,l.kt)("p",null,"\u4e00\u4e9b\u6807\u51c6\u5206\u8fa8\u7387\u3001\u663e\u793a\u5c4f\u5c3a\u5bf8\u548c\u50cf\u7d20\u5bc6\u5ea6\u662f\u7528\u6bcf\u5e73\u65b9\u82f1\u5bf8\u50cf\u7d20\u6570(PPI",(0,l.kt)("sup",null,"2"),") \u6765\u8861\u91cf\u7684\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",h({parentName:"tr"},{align:null})),(0,l.kt)("th",h({parentName:"tr"},{align:null})),(0,l.kt)("th",h({parentName:"tr"},{align:null})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"QVGA 320*240")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"2.4\u201d (27,777 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"3.5\u201d (13,061 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WQVGA 480*272")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"4,3\u201d (16,462 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"5\u201d (12,175 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"HVGA 480*320")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"3.5\u201d (27,167 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"VGA 640*480")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"5,7\u201d (19,698 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"6.4 (15,625 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WVGA 800*480")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"4\u201d (54,400 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"5\u201d (34,816 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WSVGA 1024*600")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"7\u201d (28,746 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"10,1\u201d (13,808 PPI",(0,l.kt)("sup",null,"2"),")")))),(0,l.kt)("p",null,"\u5c31\u67d0\u4e9b\u5e94\u7528\u800c\u8a00\uff0c\u9664\u975e\u89c2\u770b\u65f6\u4e0e\u663e\u793a\u5c4f\u4e4b\u95f4\u7684\u8ddd\u79bb\u975e\u5e38\u8fd1\uff0c\u5426\u5219\uff0c\u53ef\u80fd\u96be\u4ee5\u770b\u51fa\u4efb\u4f55\u5dee\u5f02\u3002 \u50cf\u7d20\u5bc6\u5ea6\u793a\u4f8b\uff1aSTM32F476DISCO\u4e3a16,462 PPI",(0,l.kt)("sup",null,"2"),"\uff0cSTM32F769DISCO\u4e3a54,400 PPI",(0,l.kt)("sup",null,"2"),"\u3002"),(0,l.kt)("p",null,"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u7684\u4e0d\u540c\u50cf\u7d20\u5bc6\u5ea6\u53ef\u80fd\u4f1a\u5f71\u54cd\u52a8\u6001\u8272\u57df\u548c\u6297\u952f\u9f7f\u6548\u679c\uff1a"),(0,l.kt)("h4",h({},{id:"dynamic-color-range"}),"\u52a8\u6001\u8272\u57df"),(0,l.kt)("p",null,"\u52a8\u6001\u8272\u57df\u662f\u6307\u4e24\u79cd\u5bf9\u6bd4\u8272\uff08\u5982\u9ed1\u8272\u548c\u767d\u8272\uff09\u4e4b\u6bd4\u3002 \u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u84dd\u8272\u548c\u767d\u8272\u5305\u542b\u4e0d\u540c\u5c42\u6b21\u7684\u767d\u8272\u548c\u84dd\u8272\u3002 \u56fe\u50cf\u5de6\u4fa7\u7684\u50cf\u7d20\u5bc6\u5ea6\u8f83\u4f4e\uff0c\u800c\u56fe\u50cf\u53f3\u4fa7\u4e3a\u4e86\u663e\u793a\u6240\u6709\u989c\u8272\uff0c\u5305\u542b\u7684\u50cf\u7d20\u66f4\u591a\uff0c\u56e0\u6b64\u4e0d\u540c\u989c\u8272\u4e0e\u8fb9\u7f18\u4e4b\u95f4\u7684\u8fc7\u6e21\u66f4\u5e73\u6ed1\u3002"),(0,l.kt)("h4",h({},{id:"anti-aliasing"}),"\u6297\u952f\u9f7f"),(0,l.kt)("p",null,"\u5f53\u50cf\u7d20\u5bc6\u5ea6\u8fc7\u4f4e\u65f6\uff0c\u53ef\u80fd\u4ea7\u751f\u9636\u68af\u6548\u5e94\u3002 \u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u6297\u952f\u9f7f\u6280\u672f\u53ef\u4f7f\u56fe\u50cf\u4e2d\u7684\u8fd9\u4e9b\u9636\u68af\u8fb9\u7f18\u53d8\u5f97\u5e73\u6ed1\u3002 \u53ef\u4ee5\u770b\u5230\uff0c\u524d\u4e24\u4e2a\u84dd\u8272\u5706\u5708\u663e\u793a\u51fa\u9636\u68af\u6548\u5e94\uff0c\u8fd9\u662f\u56e0\u4e3a\u50cf\u7d20\u5bc6\u5ea6\u4e0d\u5141\u8bb8\u663e\u793a\u5c4f\u663e\u793a\u8db3\u591f\u591a\u7684\u50cf\u7d20\uff0c\u4ee5\u81f4\u6ca1\u6709\u8db3\u591f\u9ad8\u7684\u8272\u57df\u6765\u5b9e\u73b0\u8db3\u591f\u9ad8\u7684\u53cd\u952f\u9f7f\u6548\u679c\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/anti-aliasing.webp",noShadow:!0,mdxType:"Figure"},"\u6297\u952f\u9f7f"),(0,l.kt)("h3",h({},{id:"environment"}),"\u73af\u5883"),(0,l.kt)("p",null,"\u5728\u51b3\u5b9a\u4f7f\u7528\u54ea\u79cd\u663e\u793a\u5c4f\u65f6\uff0c\u5fc5\u987b\u8003\u8651\u73af\u5883\u56e0\u7d20\u3002 \u56de\u7b54\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u662f\u5426\u663e\u793a\u5c4f\u53d7\u5230\u9633\u5149\u76f4\u5c04\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u662f\u5426\u7528\u5728\u9700\u8981\u6297\u51b2\u51fb\u7684\u6076\u52a3\u73af\u5883\u4e0b\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u662f\u5426\u64cd\u4f5c\u5458\u4f1a\u6234\u624b\u5957\u64cd\u4f5c\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u662f\u5426\u9700\u8981\u9632\u6b62\u6076\u610f\u7834\u574f\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u662f\u5426\u53ea\u901a\u8fc7\u7269\u7406\u6309\u94ae\u64cd\u4f5c\uff1f"))),(0,l.kt)("p",null,"\u56de\u7b54\u8fd9\u4e9b\u95ee\u9898\u5c06\u6709\u52a9\u4e8e\u60a8\u66f4\u597d\u5730\u7406\u89e3\u8981\u9009\u62e9\u54ea\u79cd\u89e6\u63a7\u6280\u672f\uff0c\u751a\u81f3\u662f\u5426\u9700\u8981\u89e6\u63a7\u3002"),(0,l.kt)(r.Z,{mdxType:"Note"},"TouchGFX\u5728\u89e6\u63a7\u548c\u975e\u89e6\u63a7\u663e\u793a\u5c4f\u4e0a\u8fd0\u884c\uff0cTouchGFX GUI\u53ef\u901a\u8fc7\u6309\u94ae\u3001\u624b\u52bf\u548c\u58f0\u97f3\u8fdb\u884c\u63a7\u5236\u3002"),(0,l.kt)("h3",h({},{id:"touch--non-touch-displays"}),"\u89e6\u63a7/\u975e\u89e6\u63a7\u663e\u793a\u5c4f"),(0,l.kt)("p",null,"\u76ee\u524d\u5e02\u573a\u4e0a\u6709\u4e0d\u540c\u7684\u89e6\u63a7\u6280\u672f\uff0c\u4f8b\u5982\uff1a\u7535\u963b\u5f0f\u3001\u7535\u5bb9\u5f0f\uff08\u8868\u9762\u3001\u6295\u5f71\uff09\u3001SAW(\u8868\u9762\u58f0\u6ce2\u5f0f)\u89e6\u63a7\u548c\u7ea2\u5916\u89e6\u63a7\u3002 \u672c\u8282\u5c06\u53ea\u4ecb\u7ecd\u5176\u4e2d\u7684\u67d0\u4e9b\u6280\u672f\uff1a"),(0,l.kt)("h4",h({},{id:"capacitive-touch"}),"\u7535\u5bb9\u5f0f\u89e6\u63a7"),(0,l.kt)("p",null,"\u8fd9\u662f\u6700\u6d41\u884c\u7684\u89e6\u63a7\u6280\u672f\u4e4b\u4e00\u3002 \u5b83\u6709\u4e24\u79cd\u611f\u5e94\u6280\u672f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5bb9\u5f0f\u7528\u4e8e\u5355\u6307\u89e6\u63a7"),(0,l.kt)("li",{parentName:"ul"},"\u4e92\u7535\u5bb9\u5f0f\u5141\u8bb8\u591a\u6307\u89e6\u63a7\uff0c\u4f46\u66b4\u9732\u5728\u6c34/\u6f6e\u6e7f\u73af\u5883\u4e2d\u65f6\u4f1a\u9762\u4e34\u56f0\u96be\uff08TouchGFX\u4e0d\u652f\u6301\u591a\u6307\u89e6\u63a7\uff09\u3002")),(0,l.kt)("p",null,"\u5927\u591a\u6570STM32 \u63a2\u7d22\u677f\u4f7f\u7528\u7535\u5bb9\u5f0f\u89e6\u63a7\uff0c\u5982STM32H7B3I \u63a2\u7d22\u677f\u3001STM32H750 \u63a2\u7d22\u677f\u548cSTM32F746G \u63a2\u7d22\u677f\u3002"),(0,l.kt)("h4",h({},{id:"resistive-touch"}),"\u7535\u963b\u5f0f\u89e6\u63a7"),(0,l.kt)("p",null,"\u7535\u963b\u5f0f\u89e6\u63a7\u662f\u4e00\u79cd\u901a\u8fc7\u673a\u68b0\u538b\u529b\u6fc0\u6d3b\u7684\u7b80\u5355\u6280\u672f\uff0c\u53ea\u9700\u8981ADC\u6216\u7b80\u5355\u7684\u89e6\u6478\u63a7\u5236\u5668\u3002 \u7531\u4e8e\u6280\u672f\u6210\u719f\uff0c\u4ef7\u683c\u901a\u5e38\u8f83\u4f4e\u3002 \u52a0\u5f3a\u4e86\u8868\u9762\u7684\u9632\u522e\u64e6\u548c\u9632\u6495\u88c2\u4fdd\u62a4\uff0c\u4f46\u9632\u6b62\u6076\u610f\u7834\u574f\u7684\u80fd\u529b\u8f83\u5dee\u3002 \u6b64\u5916\uff0c\u5728\u9633\u5149\u4e0b\u7684\u53ef\u8bfb\u6027\u8f83\u4f4e\u3002 STM32F429 DISCO\u677f\u4f7f\u7528\u7535\u963b\u5f0f\u89e6\u63a7\uff0c\u63d0\u4f9b\u53ef\u7528\u7684TouchGFX\u5e94\u7528\u793a\u4f8b\u3002"),(0,l.kt)("h4",h({},{id:"non-touch"}),"\u975e\u89e6\u63a7"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u901a\u8fc7\u6309\u94ae\u63a7\u5236GUI\uff0c\u53ea\u9700\u663e\u793a\u56fe\u50cf/\u89c6\u9891\uff0c\u800c\u5982\u679c\u901a\u8fc7\u53e6\u4e00\u4e2a\u8bbe\u5907\u8fdb\u884c\u5916\u90e8\u63a7\u5236\uff0c\u662f\u5426\u4e3a\u4ea7\u54c1\u6dfb\u52a0\u89e6\u63a7\u529f\u80fd\u751a\u81f3\u90fd\u65e0\u5173\u7d27\u8981\u3002 \u4e0d\u4e3a\u663e\u793a\u5c4f\u589e\u52a0\u89e6\u63a7\u5c42\u53ef\u4ee5\u964d\u4f4e\u663e\u793a\u5c4f\u4ef7\u683c\u3002"),(0,l.kt)("h3",h({},{id:"displays-with-ram"}),"\u5177\u6709RAM\u7684\u663e\u793a\u5c4f"),(0,l.kt)("p",null,"\u91c7\u7528Motorla 6800\u3001Intel 8080\u3001SPI\u6216MIPI-DSI\u63a5\u53e3\u7684\u663e\u793a\u5c4f\u901a\u5e38\u5185\u7f6eRAM\uff08GRAM\uff09\uff0c\u5176\u5927\u5c0f\u4e3a1\u4e2a\u5b8c\u6574\u7684\u5e27\u7f13\u51b2\u3002 \u8fd9\u4e9b\u7c7b\u578b\u7684\u663e\u793a\u5c4f\u53ef\u901a\u8fc7SPI\u3001FMC\u6216DSI\u4e3b\u673a\uff08LTDC\uff09\u8fde\u63a5\u5230MCU\u3002 \u663e\u793a\u5c4fRAM\u9700\u8981\u53e6\u4e00\u4e2a\u5916\u90e8RAM\uff08\u5e27\u7f13\u51b2\uff09\uff0c\u5b83\u53ef\u4ee5\u4f4d\u4e8eMCU\u4e2d\u6216\u5916\u90e8RAM\u4e2d\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/gram-mipi.webp",noShadow:!0,mdxType:"Figure"},"MIPI-DSI\u663e\u793a\u5c4f"),(0,l.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e0d\u9700\u8981\u5916\u90e8RAM\uff08MCU\u4ee5\u5916\uff09\u6765\u5b58\u50a8\u5e27\u7f13\u51b2\uff0c\u56e0\u6b64\u4f7f\u7528MCU\u4e2d\u53ef\u7528\u7684\u5185\u90e8RAM\u3002 \u5982\u679cMCU RAM\u5c0f\u4e8e1\u4e2a\u5b8c\u6574\u7684\u5e27\u7f13\u51b2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528TouchGFX\u90e8\u5206\u5e27\u7f13\u51b2\u7279\u6027\uff0c\u8fd9\u6837\u53ef\u4f7f\u5e27\u7f13\u51b2\u7684\u7a7a\u95f4\u5360\u7528\u91cf\u7ef4\u6301\u5728\u6781\u4f4e\u6c34\u5e73\u3002"),(0,l.kt)(i.Z,{mdxType:"FurtherReading"},"\u53c2\u89c1\u201c",(0,l.kt)(o.Z,{to:"../../scenarios/lowering-memory-usage-with-partial-framebuffer",mdxType:"Link"},"\u90e8\u5206\u5e27\u7f13\u51b2\u201d\u4e00\u8282\u4e86\u89e3\u66f4\u591a\u5185\u5bb9")),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/gram-spi.webp",noShadow:!0,mdxType:"Figure"},"SPI \u663e\u793a\u5c4f"),(0,l.kt)("h3",h({},{id:"non-square-pixels--pixel-aspect-ratio"}),"\u975e\u6b63\u65b9\u5f62\u50cf\u7d20/\u50cf\u7d20\u5bbd\u9ad8\u6bd4"),(0,l.kt)("p",null,"\u6700\u5e38\u89c1\u7684\u50cf\u7d20\u5f62\u72b6\u662f\u6b63\u65b9\u5f62\uff0c\u4f46\u67d0\u4e9b\u663e\u793a\u5c4f\u4f7f\u7528\u975e\u6b63\u65b9\u5f62\u50cf\u7d20\u3002 \u50cf\u7d20\u5bbd\u9ad8\u6bd4\u662f\u50cf\u7d20\u5bbd\u5ea6\u4e0e\u50cf\u7d20\u9ad8\u5ea6\u4e4b\u6bd4\u3002 \u56e0\u6b64\uff0c\u50cf\u7d20\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u5747\u4e3a100\u7684\u6b63\u65b9\u5f62\u50cf\u7d20\u7684\u5bbd\u9ad8\u6bd4\u4e3a1/1\u3002 \u975e\u6b63\u65b9\u5f62\u50cf\u7d20\u5219\u6709\u4e0d\u540c\u7684\u50cf\u7d20\u5bbd\u9ad8\u6bd4\u3002 \u5982\u679c\u753b\u9762\u8bbe\u8ba1\u5e08\u4e0d\u8003\u8651\u8fd9\u4e00\u70b9\uff0c\u5219\u663e\u793a\u7684\u4f4d\u56fe\u53ef\u80fd\u88ab\u62c9\u4f38\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/pixel-aspect.webp",noShadow:!0,mdxType:"Figure"},"\u88ab\u62c9\u4f38\u7684\u4f4d\u56fe"),(0,l.kt)("h3",h({},{id:"cover-lense"}),"\u76d6\u677f\u73bb\u7483"),(0,l.kt)("p",null,"\u7531\u4e8e\u663e\u793a\u5c4f\u662f\u5d4c\u5165\u5f0f\u56fe\u5f62\u7528\u6237\u754c\u9762\u4ea7\u54c1\u7684\u8868\u5c42\uff0c\u589e\u52a0\u76d6\u677f\u73bb\u7483\u53ef\u4ee5\u6539\u5584\u5916\u89c2\u548c\u89e6\u611f\u3002 \u76d6\u677f\u73bb\u7483\u53ef\u4ee5\u6539\u5584\u8bbe\u8ba1\u6548\u679c\u3001\u6297\u522e\u64e6\u6027\u3001\u6297\u51b2\u51fb\u6027\u548c\u989c\u8272\u7b49\u3002"))}b.isMDXComponent=!0}}]);