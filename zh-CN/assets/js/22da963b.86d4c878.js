"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9743],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=o},46421:function(e,t,r){r.r(t),r.d(t,{assets:function(){return M},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return g}});var n=r(3905),a=r(44035),l=r(93054),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(m)for(var r of m(t))c.call(t,r)&&u(e,r,t[r]);return e};const h={id:"hardware-selection-external-memories",title:"\u5916\u90e8\u5b58\u50a8\u5668"},f=void 0,k={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-external-memories",id:"development/hardware-selection/hardware-components/hardware-selection-external-memories",title:"\u5916\u90e8\u5b58\u50a8\u5668",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-external-memories.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-external-memories",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",tags:[],version:"current",frontMatter:{id:"hardware-selection-external-memories",title:"\u5916\u90e8\u5b58\u50a8\u5668"},sidebar:"docs",previous:{title:"\u663e\u793a\u5c4f",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-display"},next:{title:"\u542f\u52a8\u5f00\u53d1\u677f\u4ecb\u7ecd",permalink:"/4.19/zh-CN/docs/development/board-bring-up/board-introduction"}},M={},g=[{value:"\u975e\u6613\u5931\u6027\u5b58\u50a8\u5668",id:"non-volatile-memories",level:2},{value:"NOR Flash",id:"nor-flash",level:3},{value:"\u4e32\u884cNOR Flash\u5b58\u50a8\u5668",id:"serial-nor-flash-memories",level:4},{value:"NOR\u5355\u7ebf\u3001\u53cc\u7ebf\u3001\u56db\u7ebf\u3001\u516b\u7ebfFLASH",id:"nor-single-dual-quad-octo-flash-memories",level:5},{value:"\u5e76\u884cNOR Flash\u5b58\u50a8\u5668",id:"parallel-nor-flash-memories",level:4},{value:"NAND Flash\u5b58\u50a8\u5668",id:"nand-flash-memories",level:3},{value:"eMMC\u5b58\u50a8\u5668",id:"emmc-memories",level:3},{value:"\u6613\u5931\u6027\u5b58\u50a8\u5668",id:"volatile-memories",level:2},{value:"SRAM",id:"sram",level:3},{value:"SDRAM",id:"sdram",level:3},{value:"PSRAM",id:"psram",level:3},{value:"\u5176\u4ed6\u5b58\u50a8\u5668",id:"additional-memories",level:3},{value:"\u5916\u90e8RAM\u5bc6\u5ea6\u7684\u9009\u62e9",id:"selection-of-external-ram-density",level:3}],v={toc:g};function N(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),u),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u672c\u7ae0\u5185\u5bb9\u65e8\u5728\u5e2e\u52a9\u60a8\u4e3a\u5d4c\u5165\u5f0f\u56fe\u5f62\u7528\u6237\u754c\u9762\u9009\u62e9\u5916\u90e8\u5b58\u50a8\u5668\u3002 \u5728\u9605\u8bfb\u672c\u7ae0\u5185\u5bb9\u4e4b\u524d\uff0c\u5efa\u8bae\u60a8\u9605\u8bfb",(0,n.kt)("a",d({parentName:"p"},{href:"../preliminary-considerations"}),"\u521d\u6b65\u8003\u8651")," \u548c",(0,n.kt)("a",d({parentName:"p"},{href:"hardware-selection-mcu"}),"MCU"),"\uff0c\u4ee5\u4fbf\u4e86\u89e3\u5728\u9009\u62e9\u5408\u9002\u7684\u5916\u90e8\u5b58\u50a8\u5668\u65f6\u8981\u6ce8\u610f\u7684\u4e00\u4e9b\u91cd\u8981\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,n.kt)("p",null,"\u8fd0\u884cTouchGFX GUI\u5e94\u7528\u65f6\uff0c\u6709\u65f6\u9700\u8981\u4f7f\u7528\u5916\u90e8\u5b58\u50a8\u5668\u6765\u5b58\u50a8\u5e27\u7f13\u51b2\u3001\u4f4d\u56fe\u3001\u5b57\u4f53\u548c\u8f6c\u6362\u4fe1\u606f\u7b49\u3002 TouchGFX GUI\u7684\u8fd0\u884c\u4e0d\u4f9d\u8d56\u5916\u90e8\u5b58\u50a8\u5668\uff0c\u4f46\u9700\u8981\u4f7f\u7528\u5185\u90e8RAM\uff08\u5728MCU\u4e2d\uff09\u6216\u5916\u90e8RAM\u6765\u5b58\u50a8\u5e27\u7f13\u51b2\uff0c\u5e76\u7528\u5185\u90e8\u548c/\u6216\u5916\u90e8Flash\u6765\u5b58\u50a8\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u5b58\u50a8\u5668\u603b\u89c8\u5c55\u793a\u4e86\u4e00\u4e9b\u53ef\u4e0eSTM32 MCU\u4e00\u8d77\u4f7f\u7528\u7684\u5916\u90e8\u5b58\u50a8\u5668\u3002 \u4e00\u4e9b\u4e0d\u540c\u7684\u5b58\u50a8\u5668\u793a\u4f8b\u540c\u65f6\u63d0\u4f9b\u4e86\u4e32\u884c\u548c\u5e76\u884c\u63a5\u53e3\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/memory-overview.png",noShadow:!0,mdxType:"Figure"},"\u5b58\u50a8\u5668\u603b\u89c8"),(0,n.kt)("p",null,"\u4e0d\u540c\u7684STM32\u5fae\u63a7\u5236\u5668\u5177\u6709\u4e0d\u540c\u7684\u5916\u90e8\u5b58\u50a8\u5668\u63a5\u53e3\uff0c\u53ef\u4ee5\u8fde\u63a5\u4e0d\u540c\u7684\u5916\u90e8\u5b58\u50a8\u5668\u3002"),(0,n.kt)("h2",d({},{id:"non-volatile-memories"}),"\u975e\u6613\u5931\u6027\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"\u5728GUI\u5e94\u7528\u4e2d\uff0c\u975e\u6613\u5931\u6027\u5b58\u50a8\uff08Flash\uff09\u4e3b\u8981\u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u6216\u5168\u90e8\u56fe\u5f62\u6570\u636e\u8d44\u6e90\uff0c\u5982\u4f4d\u56fe\u3001\u5b57\u4f53\u3001\u8f6c\u6362\u4fe1\u606f\u548cTouchGFX\u5e94\u7528\u4ee3\u7801\u3002 STM32\u4ea7\u54c1\u652f\u6301\u975e\u6613\u5931\u6027\u5b58\u50a8\u5668\uff0c\u53ef\u4f7f\u7528\u5e76\u884c\u6216\u4e32\u884c\u5b58\u50a8\u5668\u548c\u4e0d\u540c\u914d\u7f6e\uff0c\u901a\u8fc7\u4e0d\u540c\u7c7b\u578b\u7684MCU\u63a5\u53e3\u8fdb\u884c\u8fde\u63a5\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/non-volatile-memory-overview.png",noShadow:!0,mdxType:"Figure"},"\u975e\u6613\u5931\u6027\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"\u6839\u636e\u4ee5\u4e0b\u8981\u7d20\u9009\u62e9\u975e\u6613\u5931\u6027\u5b58\u50a8\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bc6\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u7c7b\u578b\uff08\u5e76\u884c/\u4e32\u884c\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u6750\u6599\u6e05\u5355")),(0,n.kt)("h3",d({},{id:"nor-flash"}),"NOR Flash"),(0,n.kt)("p",null,"NOR Flash\u662f\u4e00\u79cd\u975e\u6613\u5931\u6027\u5b58\u50a8\u5668\uff0c\u5141\u8bb8\u5bf9\u5b58\u50a8\u5668\u4e2d\u7684\u4efb\u4f55\u533a\u57df\u8fdb\u884c\u968f\u673a\u5b58\u53d6\u3002"),(0,n.kt)("p",null,"NOR Flash\u7684\u5927\u5c0f\u901a\u5e38\u4ecb\u4e8e",(0,n.kt)("strong",{parentName:"p"},"128 Mbits"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"2 Gbits"),"\u4e4b\u95f4\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u5f53\u5206\u8fa8\u7387\u4e3a480x320\u3001\u8272\u6df1\u4e3a16\u4f4d\u6bcf\u50cf\u7d20\u65f6\uff0c\u7528\u6237\u754c\u9762\u9700\u8981\u7684\u5168\u5c4f\u80cc\u666f\u56fe\u50cf\u7ea6\u4e3a300 kB\u3002 \u5176\u4e2d\u4e0d\u5305\u62ec\u4f7f\u7528\u7684\u6309\u94ae\u3001\u6ed1\u52a8\u6761\u3001\u56fe\u6807\u548c\u5b57\u4f53\u4ee5\u53ca\u8bed\u8a00\u6570\u91cf\u7b49\u6240\u9700\u7684\u989d\u5916\u4f4d\u56fe\u3002 256 Mbits (32 MB) NOR Flash\u53ef\u5b58\u50a8\u6700\u591a\u7ea6100\u5f20\u5168\u5c4f\u56fe\u50cf\uff0c\u5982\u679c\u52a0\u4e0a\u9700\u8981\u7684\u5176\u4ed6\u56fe\u5f62\u8d44\u6e90\uff0c\u5c06\u5c11\u4e8e\u8fd9\u4e2a\u6570\u3002"),(0,n.kt)("p",null,"\u53ef\u5728",(0,n.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u5668\u6620\u5c04"),"\u6a21\u5f0f\u4e0b\u4f7f\u7528NOR Flash\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5916\u90e8FLASH\u88ab\u89c6\u4e3a\u8bfb\u64cd\u4f5c\u7684\u5185\u90e8\u5b58\u50a8\u5668\u3002 \u8be5\u6a21\u5f0f\u5141\u8bb8\u7cfb\u7edf\u4e3b\u673a\uff08\u5982DMA\u3001LTDC\u3001DMA2D\u3001GFXMMU\u6216SDMMC\uff09\u81ea\u4e3b\u8bbf\u95ee\u5b58\u50a8\u5668\uff0c\u5373\u4f7f\u5728CPU\u505c\u6b62\u65f6\u7684\u4f4e\u529f\u8017\u6a21\u5f0f\u4e0b\uff0c\u662f\u79fb\u52a8\u548c\u53ef\u7a7f\u6234\u5e94\u7528\u7684\u7406\u60f3\u9009\u62e9\u3002"),(0,n.kt)("p",null,"NOR Flash\u5b58\u50a8\u5668\u6709\u4e0d\u540c\u7684\u63a5\u53e3\u9009\u9879\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e76\u884cNOR Flash\uff08\u5177\u6709x8\u6216x16\u63a5\u53e3\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u4e32\u884cNOR Flash\uff08\u4e32\u884c\u5b58\u50a8\u5668\u7684\u5355\u3001\u53cc\u3001\u56db\u548c\u516b\u6570\u636e\u7ebf\uff0c\u4ee5\u53caHyperBus\u95ea\u5b58\uff09")),(0,n.kt)("h4",d({},{id:"serial-nor-flash-memories"}),"\u4e32\u884cNOR Flash\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"\u4e32\u884cNOR Flash\u5b58\u50a8\u5668\u88ab\u5e7f\u6cdb\u7528\u4f5c\u56fe\u5f62\u5e94\u7528\u4e2d\u7684\u5b58\u50a8\u5668\u3002"),(0,n.kt)("p",null,"\u8fd9\u7c7b\u5b58\u50a8\u5668\u5177\u6709\u8bf8\u5982\u4ee5\u4e0b\u4f18\u52bf\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u9891\u7387"),(0,n.kt)("li",{parentName:"ul"},"\u7b80\u5316\u5e76\u7f29\u5c0f\u4e86\u5370\u5237\u7535\u8def\u677f\uff08PCB\uff09\u533a"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f\u7684\u53ef\u5bfb\u5740\u533a\u4e3a\u6700\u5927",(0,n.kt)("strong",{parentName:"li"},"256 MB")),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u7684\u5f15\u811a\u6570\u4ecb\u4e8e",(0,n.kt)("strong",{parentName:"li"},"4"),"\u548c<",(0,n.kt)("strong",{parentName:"li"},"12"),"\u4e2a\u4e4b\u95f4")),(0,n.kt)("h5",d({},{id:"nor-single-dual-quad-octo-flash-memories"}),"NOR\u5355\u7ebf\u3001\u53cc\u7ebf\u3001\u56db\u7ebf\u3001\u516b\u7ebfFLASH"),(0,n.kt)("p",null,"NOR Flash\u5b58\u50a8\u5668\u6709\u4e0d\u540c\u7684\u6570\u636e\u7ebf\u914d\u7f6e\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5355\u7ebf"),(0,n.kt)("li",{parentName:"ul"},"\u53cc\u7ebf"),(0,n.kt)("li",{parentName:"ul"},"\u56db\u7ebf"),(0,n.kt)("li",{parentName:"ul"},"\u516b\u7ebf")),(0,n.kt)("p",null,"\u5207\u6362\u81f3\u914d\u5907\u66f4\u591a\u6570\u636e\u7ebf\u7684\u4e32\u884cNOR Flash\u5b58\u50a8\u5668\u53ef\u4ee5\u63d0\u9ad8\u6027\u80fd\u548c\u5b58\u50a8\u5668\u63a5\u53e3\u5e26\u5bbd\uff0c\u4f46\u4e5f\u9700\u8981\u66f4\u591a\u5f15\u811a\u6765\u8fde\u63a5STM32\u4ea7\u54c1\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u6839\u636e\u6570\u636e\u7ebf\u6570\u91cf\u5217\u51fa\u7684\u4e0d\u540cSPI\u5b58\u50a8\u5668\u603b\u89c8\uff1a"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/serial-modes.png",noShadow:!0,mdxType:"Figure"},"\u4e32\u884c\u63a5\u53e3\u603b\u89c8"),(0,n.kt)("h4",d({},{id:"parallel-nor-flash-memories"}),"\u5e76\u884cNOR Flash\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"\u5728\u6027\u80fd\u548c\u914d\u7f6e\u65b9\u9762\uff0c\u5e76\u884cNOR Flash\u5b58\u50a8\u5668\u5177\u6709\u4e0e\u4e32\u884c\u95ea\u5b58\u76f8\u540c\u7684\u4f18\u52bf\u3002 \u5e76\u884cNOR Flash\u53ef\u914d\u7f6e\u4e3a\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f\uff0c\u5e76\u80fd\u50cf\u5185\u90e8\u5b58\u50a8\u5668\u4e00\u6837\u8fdb\u884c\u5b58\u53d6\u3002 \u5e76\u884c\u548c\u4e32\u884cNOR Flash\u4e4b\u95f4\u7684\u5dee\u5f02\u5728\u4e8e\u5f15\u811a\u6570\u548c\u5370\u5237\u7535\u8def\u677f\uff08PCB\uff09\u7684\u590d\u6742\u5ea6\u3002"),(0,n.kt)("p",null,"Up to ",(0,n.kt)("strong",{parentName:"p"},"47 pins")," are needed for the NOR flash memory with up to 24 pins for address and 16 pins for data."),(0,n.kt)("h3",d({},{id:"nand-flash-memories"}),"NAND Flash\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"NAND Flash\u5b58\u50a8\u5668\u662f\u9700\u8981\u5927\u91cf\u56fe\u5f62\u8d44\u4ea7\u548c",(0,n.kt)("strong",{parentName:"p"},"\u66f4\u5feb\u5199\u5165\u4e0e\u64e6\u9664\u64cd\u4f5c"),"\u7684\u56fe\u5f62\u5e94\u7528\u7684\u7406\u60f3\u9009\u62e9\u3002 The NAND flash memories cannot be configured in a memory mapped mode and as a consequence, the NAND flash memories are ",(0,n.kt)("strong",{parentName:"p"},"not recommended for code execution"),"."),(0,n.kt)("p",null,"NAND flash ranges between ",(0,n.kt)("strong",{parentName:"p"},"1 Gbits")," to ",(0,n.kt)("strong",{parentName:"p"},"512 Gbits"),"."),(0,n.kt)("p",null,"\u5728\u4f7f\u7528NAND Flash\u65f6\uff0c\u901a\u5e38\u5fc5\u987b\u4f7f\u7528RAM\u4e2d\u7684\u7f13\u5b58\u3002 \u5982\u6b64\u4e00\u6765\uff0c\u53ef\u4ee5\u5c06\u5f53\u524d\u4f7f\u7528\u7684\u56fe\u5f62\u8d44\u4ea7\u79fb\u52a8\u5230RAM\uff0c\u5e76\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u5b83\u4eec\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/nand-flash.png",noShadow:!0,width:"500",mdxType:"Figure"},"NAND Flash\u5b58\u50a8\u5668"),(0,n.kt)("h3",d({},{id:"emmc-memories"}),"eMMC\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"eMMC\uff08\u5d4c\u5165\u5f0f\u591a\u5a92\u4f53\u5361\uff09\u7531MMC\u534f\u4f1a\u8ba2\u7acb\uff0c\u76f8\u5f53\u4e8e\u4e00\u4e2aNAND Flash\u52a0\u4e00\u4e2a\u4e3b\u96c6\u6210\u63a7\u5236\u5668\u3002 eMMC\u7684\u4e00\u4e2a\u660e\u663e\u4f18\u52bf\u662f\u5728\u5c01\u88c5\u4e2d\u96c6\u6210\u4e86\u63a7\u5236\u5668\uff0c\u4ece\u800c\u63d0\u4f9b\u4e86\u6807\u51c6\u63a5\u53e3\u548c\u95ea\u5b58\u7ba1\u7406\uff0c\u4f7f\u5236\u9020\u5546\u80fd\u591f\u5c06\u7cbe\u529b\u96c6\u4e2d\u5728\u4ea7\u54c1\u5f00\u53d1\u7684\u5176\u4ed6\u90e8\u4efd\uff0c\u8fdb\u800c\u7f29\u77ed\u4e0a\u5e02\u65f6\u95f4\u3002"),(0,n.kt)("p",null,"eMMC Flash\u7684\u5927\u5c0f\u4ecb\u4e8e",(0,n.kt)("strong",{parentName:"p"},"2 Gbits"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"128 Gbits"),"\u4e4b\u95f4\u3002"),(0,n.kt)("p",null,"\u76f8\u6bd4\u4e8eNAND\u548cNOR\uff0ceMMC\u7684\u968f\u673a\u8bfb\u53d6\u6027\u80fd\u76f8\u5bf9\u8f83\u4f4e\u3002 eMMC\u53ef\u80fd\u9700\u8981\u6dfb\u52a0\u7f13\u5b58\u6765\u514b\u670d\u968f\u673a\u8bfb\u53d6\u901f\u5ea6\u7f13\u6162\u7684\u95ee\u9898\u3002"),(0,n.kt)("p",null,"eMMC Flash\u5b58\u50a8\u5668\u9700\u8981\u6700\u591a",(0,n.kt)("strong",{parentName:"p"},"10\u4e2a\u5f15\u811a"),"\uff0c\u5305\u62ec8\u4e2a\u6570\u636e\u5f15\u811a\u548c2\u4e2a\u63a7\u5236\u5f15\u811a\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/emmc-flash.png",noShadow:!0,width:"500",mdxType:"Figure"},"eMMC\u5b58\u50a8\u5668"),(0,n.kt)("h2",d({},{id:"volatile-memories"}),"\u6613\u5931\u6027\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"\u5916\u90e8\u6613\u5931\u6027\u5b58\u50a8\u5668\u4e3b\u8981\u7528\u4e8e\u5b58\u50a8\u5e27\u7f13\u51b2\uff08\u82e5\u5185\u90e8MCU RAM\u4e0d\u591f\u7528\uff09\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u4e8e\u7f13\u5b58\u6765\u81ea\u975e\u5b58\u50a8\u5668\u6620\u5c04\u95ea\u5b58\u7684\u8d44\u4ea7\u3002 \u672c\u8282\u4e3b\u8981\u4ecb\u7ecdSRAM\u3001SDRAM\u548cPSRAM\uff0c\u5b83\u4eec\u901a\u5e38\u7528\u5728\u8fd0\u884cGUI\u7684\u5d4c\u5165\u5f0f\u7cfb\u7edf\u4e2d\u3002 \u4f46\u8fd8\u6709\u5176\u4ed6\u53ef\u7528\u7684\u53d8\u578b\uff0c\u5b58\u50a8\u5668\u5236\u9020\u5546\u5bf9\u5176\u5b58\u50a8\u5668\u4f7f\u7528\u4e0d\u540c\u547d\u540d\u6a21\u5f0f\uff0c\u5982\u201chyper RAM\u201d\u3001\u201cIoT RAM\u201d\u548c\u201coctal RAM\u201d\u3002 \u5176\u4e2d\u7684\u5927\u591a\u6570\u90fd\u53ef\u4ee5\u627e\u5230\u652f\u6301\u5b83\u7684STM32 MCU\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/volatile-memory-overview.png",noShadow:!0,mdxType:"Figure"},"\u6613\u5931\u6027\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"\u5728\u9009\u62e9\u5408\u9002\u7684\u5916\u90e8RAM\u65f6\uff0c\u5efa\u8bae\u6ce8\u610f\u4ee5\u4e0b\u8981\u7d20\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bc6\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u529f\u8017"),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3/\u5f15\u811a\u5c3a\u5bf8"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../../../basic-concepts/framebuffer#amount-of-framebuffers"}),"\u5e27\u7f13\u5b58\u7b56\u7565"))),(0,n.kt)("h3",d({},{id:"sram"}),"SRAM"),(0,n.kt)("p",null,"SRAM\u662f\u9759\u6001\u968f\u673a\u5b58\u53d6\u5b58\u50a8\u5668\uff0c\u53ea\u8981\u6709\u4f9b\u7535\uff0c\u5c31\u80fd\u4fdd\u5b58\u4f4d\u6570\u636e\u3002 \u4e00\u822c\u800c\u8a00\uff0cSRAM\u7684\u5b58\u53d6\u901f\u5ea6\u66f4\u5feb\uff0c\u4f46\u4ef7\u683c\u9ad8\u4e8eDRAM\uff0c\u5e76\u4e14\u5bc6\u5ea6\u66f4\u5c0f\u3002 \u76f8\u6bd4\u4e8eDRAM\uff0cSRAM\u7684\u5b58\u53d6\u65f6\u95f4\u901a\u5e38\u66f4\u77ed\uff0c\u56e0\u6b64\u66f4\u9002\u5408\u9700\u8981\u66f4\u591a\u52a8\u753b\u3001\u7f29\u653e\u548c\u65cb\u8f6c\u7b49\u64cd\u4f5c\u7684GUI\u3002 SRAM\u5177\u6709\u540c\u6b65\u548c\u5f02\u6b65\u6a21\u5f0f\uff0c\u540c\u6b65\u6a21\u5f0f\u63d0\u4f9b\u66f4\u9ad8\u7684\u5e26\u5bbd\u80fd\u529b\uff0c\u4f46\u63a5\u53e3\u66f4\u590d\u6742\u3002"),(0,n.kt)(l.Z,{mdxType:"Note"},"\u6b64\u5916\uff0c\u8fd8\u6709\u975e\u6613\u5931\u6027\u968f\u673a\u5b58\u53d6\u5b58\u50a8\u5668nvSRAM\uff0c\u4e5f\u80fd\u5b58\u50a8\u548c\u53ec\u56de\u6570\u636e\u3002"),(0,n.kt)("h3",d({},{id:"sdram"}),"SDRAM"),(0,n.kt)("p",null,"SDRAM\u662f\u4e00\u79cd\u52a8\u6001\u968f\u673a\u5b58\u53d6\u5b58\u50a8\u5668\uff0c\u5b83\u4fdd\u5b58\u7535\u5bb9\u4e0a\u7684\u6bcf\u4e00\u4e2a\u6570\u636e\u4f4d\u3002\u76f8\u6bd4\u4e8eSRAM\uff0cSDRAM\u80fd\u7528\u66f4\u5c0f\u7684\u7269\u7406\u7a7a\u95f4\u5b58\u50a8\u76f8\u540c\u6570\u91cf\u7684\u6570\u636e\u3002 \u4e3a\u4e86\u4fdd\u5b58\u6570\u636e\uff0cSDRAM\u9700\u8981\u4e0d\u65ad\u5237\u65b0\uff0c\u56e0\u6b64\u5176\u80fd\u8017\u9ad8\u4e8eSRAM\u3002"),(0,n.kt)("p",null,"SDRAM\u7684\u5bc6\u5ea6\u901a\u5e38\u4e3a16 Mbits\u81f3512 Mbits\uff0c\u901a\u8fc78\u300116\u548c32\u4f4d\u63a5\u53e3\u63d0\u4f9b\uff0c\u8fd0\u884c\u9891\u7387\u4e3a100-200 MHz\u3002"),(0,n.kt)("p",null,"\u53cc\u5e27\u7f13\u51b2\u7b56\u7565\u9700\u8981\u7ea618 Mbits\u7684RAM\uff0c\u56e0\u6b64\uff0c\u9002\u7528\u4e8e\u4fdd\u5b58\u4e24\u4e2a\u8fd0\u884c24bpp 800*480\u5206\u8fa8\u7387\u7684\u5e27\u7f13\u51b2\u7684SDRAM\u662f32 Mbits SDRAM\u3002"),(0,n.kt)("h3",d({},{id:"psram"}),"PSRAM"),(0,n.kt)("p",null,"PSRAM\u662f\u4f2a\u9759\u6001\u968f\u673a\u5b58\u53d6\u5b58\u50a8\u5668\uff0c\u5177\u6709DRAM\uff08\u63a7\u5236\u903b\u8f91\uff09\u7684\u5185\u90e8\u7ed3\u6784\u548cSRAM\u63a5\u53e3\u3002 \u5b83\u7684\u5bc6\u5ea6\u901a\u5e38\u4e3a8-256 Mbits\u3002 \u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684SDRAM\u548cSRAM\uff0cPSRAM\u7684\u4f18\u52bf\u5728\u4e8e\u901f\u5ea6\u66f4\u5feb\u4e14\u529f\u8017\u66f4\u4f4e\u3002"),(0,n.kt)("h3",d({},{id:"additional-memories"}),"\u5176\u4ed6\u5b58\u50a8\u5668"),(0,n.kt)("p",null,"\u65b0\u7684octal RAM\u548cHyper RAM\u5b58\u50a8\u5668\u5728\u5355\u548c\u53cc\u6570\u636e\u7387\u6a21\u5f0f\u4e0b\u4f7f\u7528\u4e32\u884c8\u4f4d\u63a5\u53e3\uff0c\u53ef\u5b9e\u73b0\u9ad8\u541e\u5410\u7387\u548c\u826f\u597d\u7684\u96c6\u6210\u5ea6\u3002"),(0,n.kt)("h3",d({},{id:"selection-of-external-ram-density"}),"\u5916\u90e8RAM\u5bc6\u5ea6\u7684\u9009\u62e9"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7b56\u7565\u662f\u5c06\u5e27\u7f13\u51b2\u653e\u5728\u5916\u90e8RAM\u4e2d\uff0c\u6b64\u8868\u662f\u5e02\u9762\u4e0a\u63d0\u4f9b\u7684\u4e0d\u540cRAM\u5bc6\u5ea6\u7684\u603b\u89c8\u3002"),(0,n.kt)("p",null,"\u5b83\u8fd8\u63d0\u4f9b\u4e86\u4ee51\u30012\u30014\u30018\u300116\u548c24\u4f4d\u6bcf\u50cf\u7d20\u7684\u5bc6\u5ea6\uff08\u9664\u4ee52\u53ef\u5f97\u51fa\u5355\u4e2a\u5e27\u7f13\u51b2\u6240\u9700\u5bc6\u5ea6\uff09\u8fd0\u884c\u53cc\u5e27\u7f13\u51b2\u8bbe\u7f6e\u6240\u9700RAM\u7684\u603b\u89c8\u3002"),(0,n.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5355\u5e27\u7f13\u51b2\u8bbe\u7f6e\u5df2\u7ecf\u8db3\u591f\uff0c\u5e76\u4e14\u5728\u67d0\u4e9bSTM32\u5fae\u63a7\u5236\u5668\u4e2d\uff0c\u4f1a\u6709\u8db3\u591f\u7684\u5185\u90e8RAM\u7528\u4e8e\u5bb9\u7eb3\u5e27\u7f13\u51b2\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/sdram-octospi-densities.png",noShadow:!0,mdxType:"Figure"},"SDRAM\u548cOctoSPI\u5bc6\u5ea6"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/required-ram-for-double-framebuffer-setup.png",noShadow:!0,mdxType:"Figure"},"\u53cc\u5e27\u7f13\u51b2\u8bbe\u7f6e\u6240\u9700RAM"))}N.isMDXComponent=!0}}]);