"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[812],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,s=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(s,l(l({ref:t},p),{},{components:n})):r.createElement(s,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},21116:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return C}});var r=n(3905),a=n(44035),o=n(93054),l=n(37793),i=n(22425),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&s(e,n,t[n]);return e};const f={id:"08-hardware-acceleration",title:"8. \u786c\u4ef6\u52a0\u901f\u5668",sidebar_label:"8. \u786c\u4ef6\u52a0\u901f\u5668"},b=void 0,v={unversionedId:"development/board-bring-up/how-to/08-hardware-acceleration",id:"development/board-bring-up/how-to/08-hardware-acceleration",title:"8. \u786c\u4ef6\u52a0\u901f\u5668",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/08-hardware-acceleration.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/08-hardware-acceleration",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/08-hardware-acceleration",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"08-hardware-acceleration",title:"8. \u786c\u4ef6\u52a0\u901f\u5668",sidebar_label:"8. \u786c\u4ef6\u52a0\u901f\u5668"},sidebar:"docs",previous:{title:"7. \u5757\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u95ea\u5b58",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"},next:{title:"9. \u89e6\u6478\u63a7\u5236\u5668",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/09-touch-controller"}},k={},C=[{value:"\u52a8\u673a",id:"motivation",level:2},{value:"\u76ee\u6807",id:"goal",level:2},{value:"\u9a8c\u8bc1",id:"verification",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u6267\u884c",id:"do",level:2},{value:"\u5199\u5165\u5e27\u7f13\u5b58",id:"write-to-framebuffer-memory",level:3},{value:"\u6027\u80fd\u7b26\u5408\u9884\u671f",id:"performance-is-as-expected",level:3}],y={toc:C};function w(e){var t,n=e,{components:c}=n,s=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},y),s),d(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h2",g({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"Chrom-ART (DMA2D)\u56fe\u5f62\u52a0\u901f\u5668\u80fd\u591f\u4f20\u8f93\u6765\u81ea\u5b58\u50a8\u5668\u7684\u90e8\u5206\u56fe\u50cf\u6570\u636e\uff0c\u5e76\u5c06\u5176\u653e\u5165\u6216\u5148\u6df7\u5408\u540e\u518d\u653e\u5165\u5e27\u7f13\u5b58\u3002 Chrom-ART\u53ef\u4ece\u5185\u90e8\u6216\u5916\u90e8\u5b58\u50a8\u5668\u8bfb\u53d6\u6570\u636e\u3002 \u540c\u6837\uff0c\u5b83\u53ef\u4ee5\u5199\u5165\u5185\u90e8\u6216\u5916\u90e8\u5b58\u50a8\u5668\u3002 \u5728\u7ed8\u5236\u56fe\u5f62\u65f6\u53ef\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u4ee5\u663e\u8457\u63d0\u9ad8\u663e\u793a\u6027\u80fd\uff0c\u540c\u65f6\u660e\u663e\u964d\u4f4e\u5e94\u7528\u7a0b\u5e8f\u7684MCU\u5360\u7528\u7387\u3002"),(0,r.kt)("p",null,"\u8bb8\u591aSTM32\u63a7\u5236\u5668\u5305\u542bChrom-ART\u52a0\u901f\u5668\uff0c\u5f53\u7136\u4e0d\u662f\u6240\u6709\u7684\u3002 \u68c0\u67e5\u60a8\u7684\u6570\u636e\u624b\u518c\u3002 DMA2D\u662fChrom-ART\u7684\u4ee3\u53f7\uff0c\u5e76\u5728\u4ee3\u7801\u548c\u6587\u6863\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)(o.Z,{mdxType:"Note"},"\u5982\u679c\u7684\u677f\u8f7d\u82af\u7247\u4e0d\u652f\u6301Chrom-ART\u786c\u4ef6\u52a0\u901f\u5668\uff0c\u5219\u8df3\u8fc7\u6b64\u6b65\u3002"),(0,r.kt)("h2",g({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"\u8be5\u6b65\u9aa4\u7684\u76ee\u6807\u662f\u4f7f\u80fdChrom-ART\u5e76\u4f7f\u7528\u5b83\u6765\u8bfb\u5199\u6570\u636e\u3002 \u76ee\u6807",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5728\u4e8e"),"\u68c0\u67e5Chrom-ART\u82af\u7247\u7684\u529f\u80fd\uff0c\u800c\u662f\u8981\u4eceChrom-ART\u7684\u89d2\u5ea6\u9a8c\u8bc1\u5b58\u50a8\u5668\u63a5\u53e3\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("h3",g({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u5df2\u914d\u7f6e"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u7528\u4e8e\u7ed8\u5236\u6240\u9700\u56fe\u5f62")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u8bfb\u53d6\u5b58\u50a8\u5668"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u7528\u4e8e\u7ed8\u5236\u56fe\u5f62\uff08M2M\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u5199\u5165\u5b58\u50a8\u5668"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u53ef\u7528\u4e8e\u7ed8\u5236\u56fe\u5f62\uff08M2M\u548cR2M\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u6027\u80fd"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u4ea7\u751f\u6240\u9700\u7684\u56fe\u5f62\u6027\u80fd")))),(0,r.kt)("h2",g({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e26Chrom-ART\u7684MCU\u3002")),(0,r.kt)("h2",g({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"The Chrom-ART is configured in STM32CubeMX under the ",(0,r.kt)("em",{parentName:"p"},"Multimedia -> DMA2D")," category. \u6fc0\u6d3bDMA2D\uff0c\u5e76\u6839\u636e\u60a8\u7684\u663e\u793a\u5668\u914d\u7f6e",(0,r.kt)("em",{parentName:"p"},"\u4f20\u8f93\u6a21\u5f0f"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u989c\u8272\u6a21\u5f0f"),"\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u56fe\u4e2d\uff0c\u6fc0\u6d3bDMA2D\uff0c\u5e76\u5c06\u5176\u914d\u7f6e\u4e3a\u5b58\u50a8\u5668\u5230\u5b58\u50a8\u5668\u4f20\u8f93\u6a21\u5f0f\u548cRGB565\u989c\u8272\u6a21\u5f0f\u3002 \u9009\u62e9\u4e0e\u60a8\u7684\u663e\u793a\u5668\u5339\u914d\u7684\u989c\u8272\u6a21\u5f0f\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u914d\u7f6eChrom-ART"),(0,r.kt)("p",null,"DMA2D\u5168\u5c40\u4e2d\u65ad\u5bf9\u4e8eTouchGFX\u5e94\u7528\u4e2d\u7684\u5e27\u7f13\u5b58\u8bbf\u95ee\u540c\u6b65\u81f3\u5173\u91cd\u8981\u3002 Ensure that the global interupt is enabled (NVIC tab) and that code generation for interrupt handlers is enabled (Code Generation tab) in the STM32CubeMX NVIC settings as shown below. \u5728\u8be5\u9636\u6bb5\uff0c\u4f18\u5148\u7ea7\u5e76\u4e0d\u91cd\u8981\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u4f7f\u80fdChrom-ART\u4e2d\u65ad"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d-codegen.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u4f7f\u80fdChrom-ART\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\u7684\u4ee3\u7801\u751f\u6210"),(0,r.kt)("h3",g({},{id:"write-to-framebuffer-memory"}),"\u5199\u5165\u5e27\u7f13\u5b58"),(0,r.kt)("p",null,"\u4e0b\u6587\u6982\u8ff0\u4e86\u5728\u76ee\u6807\u5b58\u50a8\u5668\u4e2d\u5c06\u7279\u5b9a\u989c\u8272\u586b\u5145\u5230\u77e9\u5f62\u4e2d\uff08\u5bc4\u5b58\u5668\u5230\u5b58\u50a8\u5668\u6a21\u5f0f\uff09\u3002 Check STM32Cube Firmware packs for a concrete project for your MCU."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'#include "stm32f7xx_hal.h"\n#include "stm32f7xx_hal_dma2d.h"\n...\n\nuint32_t color = 0xF800; //Red in RGB565\n\nhdma2d.Init.Mode = DMA2D_R2M;\nhdma2d.Init.ColorMode = DMA2D_RGB565;\n\nMODIFY_REG(hdma2d.Instance->CR, DMA2D_CR_MODE, DMA2D_R2M);\nMODIFY_REG(hdma2d.Instance->OPFCCR, DMA2D_OPFCCR_CM, DMA2D_RGB565);\nMODIFY_REG(hdma2d.Instance->OOR, DMA2D_OOR_LO, displayWidth - rectangleWidth);\n\nhdma2d.LayerCfg[1].InputColorMode = CM_RGB565;\nhdma2d.LayerCfg[1].InputOffset = 0;\n\nHAL_DMA2D_ConfigLayer(&hdma2d, 1);\n\nHAL_DMA2D_Start_IT(&hdma2d, color, (unsigned int)dstPtr, rectangleWidth, rectangleHeight);\n\n')),(0,r.kt)("p",null,"If the Transfer Completed setup is configured correctly in STM32CubeMX, a custom handler can be assigned to handle this event:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"    hdma2d.XferCpltCallback = DMA2D_XferCpltCallback;\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u5b9a\u4e49\u5904\u7406\u7a0b\u5e8f\uff0c\u4ee5\u9a8c\u8bc1\u201c\u4f20\u8f93\u5b8c\u6210\u201d\u4e2d\u65ad\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'extern "C" {\n    static void DMA2D_XferCpltCallback(DMA2D_HandleTypeDef* handle)\n    {\n        //Ensure that you this callback is called\n    }\n}\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528\u6307\u5411\u5b58\u50a8\u50cf\u7d20\u6570\u636e\u7684\u6307\u9488\u6765\u6d4b\u8bd5\u5b58\u50a8\u5668\u5230\u5b58\u50a8\u5668\u4f20\u8f93\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"HAL_DMA2D_Start_IT(&hdma2d,\n    (unsigned int)srcPtr,\n    (unsigned int)dstPtr,\n    displayWidth - nrOfPixels);\n\n")),(0,r.kt)("h3",g({},{id:"performance-is-as-expected"}),"\u6027\u80fd\u7b26\u5408\u9884\u671f"),(0,r.kt)("p",null,"\u5c06Chrom-ART\u7684\u6027\u80fd\u4e0e\u5148\u524d\u4ec5CPU\u8bfb\u5199\u5b58\u50a8\u5668\u7684\u6027\u80fd\u7ed3\u679c\u8fdb\u884c\u6bd4\u8f83\u3002 \u6211\u4eec\u53ef\u4ee5\u671f\u5f85\u4f7f\u7528Chrom-ART\u7684\u4ee3\u7801\u6bd4\u4e4b\u524d\u57fa\u4e8eCPU\u8bfb/\u5199\u64cd\u4f5c\u7684\u8bfb\u53d6\u6027\u80fd\u66f4\u9ad8\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u76f8\u6bd4\u6beb\u79d2\u7ea7\u8ba1\u6570\u7684sysTick\uff0c\u4f7f\u7528\u201cCCSTEP\u201d\u65f6\u949f\u5468\u671f\u5bc4\u5b58\u5668\u7684\u503c\u53ef\u4ee5\u66f4\u7cbe\u786e\u5730\u6d4b\u91cf\u65ad\u70b9\u4e4b\u95f4\u6240\u82b1\u8d39\u7684\u65f6\u949f\u6570\u3002"))}w.isMDXComponent=!0}}]);