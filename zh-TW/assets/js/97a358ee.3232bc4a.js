"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9486],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=o},36001:function(e,t,r){r.r(t),r.d(t,{assets:function(){return M},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return g}});var n=r(3905),a=r(44035),l=r(93054),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(m)for(var r of m(t))c.call(t,r)&&u(e,r,t[r]);return e};const h={id:"hardware-selection-external-memories",title:"\u5916\u90e8\u8a18\u61b6\u9ad4"},f=void 0,k={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-external-memories",id:"development/hardware-selection/hardware-components/hardware-selection-external-memories",title:"\u5916\u90e8\u8a18\u61b6\u9ad4",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-external-memories.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-external-memories",permalink:"/4.19/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",tags:[],version:"current",frontMatter:{id:"hardware-selection-external-memories",title:"\u5916\u90e8\u8a18\u61b6\u9ad4"},sidebar:"docs",previous:{title:"\u986f\u793a\u5668",permalink:"/4.19/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-display"},next:{title:"\u642d\u5efa\u958b\u767c\u677f",permalink:"/4.19/zh-TW/docs/development/board-bring-up/board-introduction"}},M={},g=[{value:"\u975e\u63ee\u767c\u6027\u8a18\u61b6\u9ad4",id:"non-volatile-memories",level:2},{value:"NOR Flash",id:"nor-flash",level:3},{value:"\u4e32\u5217NOR Flash\u8a18\u61b6\u9ad4",id:"serial-nor-flash-memories",level:4},{value:"NOR\u55ae\u7dda\u3001\u96d9\u7dda\u3001\u56db\u7dda\u3001\u516b\u7dda\u5feb\u9583\u8a18\u61b6\u9ad4",id:"nor-single-dual-quad-octo-flash-memories",level:5},{value:"\u5e73\u884cNOR Flash\u8a18\u61b6\u9ad4",id:"parallel-nor-flash-memories",level:4},{value:"NAND\u5feb\u9583\u8a18\u61b6\u9ad4",id:"nand-flash-memories",level:3},{value:"eMMC\u8a18\u61b6\u9ad4",id:"emmc-memories",level:3},{value:"\u63ee\u767c\u6027\u8a18\u61b6\u9ad4",id:"volatile-memories",level:2},{value:"SRAM",id:"sram",level:3},{value:"SDRAM",id:"sdram",level:3},{value:"PSRAM",id:"psram",level:3},{value:"\u5176\u4ed6\u8a18\u61b6\u9ad4",id:"additional-memories",level:3},{value:"\u5916\u90e8RAM\u5bc6\u5ea6\u7684\u9078\u64c7",id:"selection-of-external-ram-density",level:3}],v={toc:g};function N(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),u),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u672c\u7ae0\u5167\u5bb9\u65e8\u5728\u5354\u52a9\u60a8\u70ba\u5d4c\u5165\u5f0f\u5716\u5f62\u5316\u4f7f\u7528\u8005\u4ecb\u9762\u9078\u64c7\u5916\u90e8\u8a18\u61b6\u9ad4\u3002 \u5728\u95b1\u8b80\u672c\u7ae0\u5167\u5bb9\u4e4b\u524d\uff0c\u5efa\u8b70\u60a8\u95b1\u8b80 ",(0,n.kt)("a",d({parentName:"p"},{href:"../preliminary-considerations"}),"\u521d\u6b65\u8003\u616e")," \u548c ",(0,n.kt)("a",d({parentName:"p"},{href:"hardware-selection-mcu"}),"MCU"),"\uff0c\u4ee5\u4fbf\u77ad\u89e3\u5728\u9078\u64c7\u5408\u9069\u7684\u5916\u90e8\u8a18\u61b6\u9ad4\u6642\u8981\u6ce8\u610f\u7684\u4e00\u4e9b\u91cd\u8981\u56e0\u7d20\u3002"),(0,n.kt)("p",null,"\u57f7\u884cTouchGFX GUI\u61c9\u7528\u6642\uff0c\u6709\u6642\u9700\u8981\u4f7f\u7528\u5916\u90e8\u8a18\u61b6\u9ad4\u4f86\u5b58\u5132\u5f71\u50cf\u7de9\u885d\u3001\u9ede\u9663\u5716\u3001\u5b57\u9ad4\u548c\u8f49\u63db\u8cc7\u8a0a\u7b49\u3002 TouchGFX GUI\u7684\u57f7\u884c\u4e0d\u4f9d\u8cf4\u5916\u90e8\u8a18\u61b6\u9ad4\uff0c\u4f46\u9700\u8981\u4f7f\u7528\u5167\u90e8RAM\uff08\u5728MCU\u4e2d\uff09\u6216\u5916\u90e8RAM\u4f86\u5b58\u5132\u5f71\u50cf\u7de9\u885d\uff0c\u4e26\u7528\u5167\u90e8\u548c/\u6216\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4f86\u5b58\u5132\u8cc7\u6599\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u8a18\u61b6\u9ad4\u7e3d\u89bd\u5c55\u793a\u4e86\u4e00\u4e9b\u53ef\u8207STM32 MCU\u4e00\u8d77\u4f7f\u7528\u7684\u5916\u90e8\u8a18\u61b6\u9ad4\u3002 \u4e00\u4e9b\u4e0d\u540c\u7684\u8a18\u61b6\u9ad4\u7bc4\u4f8b\u540c\u6642\u63d0\u4f9b\u4e86\u4e32\u5217\u548c\u5e73\u884c\u4ecb\u9762\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/memory-overview.png",noShadow:!0,mdxType:"Figure"},"\u8a18\u61b6\u9ad4\u7e3d\u89bd"),(0,n.kt)("p",null,"\u4e0d\u540c\u7684STM32\u5fae\u63a7\u5236\u5668\u5177\u6709\u4e0d\u540c\u7684\u5916\u90e8\u8a18\u61b6\u9ad4\u4ecb\u9762\uff0c\u53ef\u4ee5\u9023\u63a5\u4e0d\u540c\u7684\u5916\u90e8\u8a18\u61b6\u9ad4\u3002"),(0,n.kt)("h2",d({},{id:"non-volatile-memories"}),"\u975e\u63ee\u767c\u6027\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u5728GUI\u61c9\u7528\u4e2d\uff0c\u975e\u63ee\u767c\u6027\u5b58\u5132\uff08\u5feb\u9583\u8a18\u61b6\u9ad4\uff09\u4e3b\u8981\u7528\u65bc\u5b58\u5132\u4e00\u4e9b\u6216\u5168\u90e8\u5716\u5f62\u8cc7\u6599\u8cc7\u7522\uff0c\u5982\u9ede\u9663\u5716\u3001\u5b57\u9ad4\u3001\u8f49\u63db\u8cc7\u8a0a\u548cTouchGFX\u61c9\u7528\u4ee3\u78bc\u3002 STM32\u7522\u54c1\u652f\u63f4\u975e\u63ee\u767c\u6027\u8a18\u61b6\u9ad4\uff0c\u53ef\u4f7f\u7528\u5e73\u884c\u6216\u4e32\u5217\u8a18\u61b6\u9ad4\u548c\u4e0d\u540c\u914d\u7f6e\uff0c\u901a\u904e\u4e0d\u540c\u985e\u578b\u7684MCU\u4ecb\u9762\u9032\u884c\u9023\u63a5\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/non-volatile-memory-overview.png",noShadow:!0,mdxType:"Figure"},"\u975e\u63ee\u767c\u6027\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u6839\u64da\u4ee5\u4e0b\u8981\u7d20\u9078\u64c7\u975e\u63ee\u767c\u6027\u5b58\u5132\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bc6\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u4ecb\u9762\u985e\u5225\u578b\uff08\u4e26\u884c/\u4e32\u5217\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u6750\u6599\u6e05\u55ae")),(0,n.kt)("h3",d({},{id:"nor-flash"}),"NOR Flash"),(0,n.kt)("p",null,"NOR Flash\u662f\u4e00\u7a2e\u975e\u63ee\u767c\u6027\u8a18\u61b6\u9ad4\uff0c\u5141\u8a31\u5c0d\u8a18\u61b6\u9ad4\u4e2d\u7684\u4efb\u4f55\u5340\u57df\u9032\u884c\u96a8\u6a5f\u5b58\u53d6\u3002"),(0,n.kt)("p",null,"NOR Flash\u7684\u5927\u5c0f\u901a\u5e38\u4ecb\u65bc",(0,n.kt)("strong",{parentName:"p"},"128 Mbits"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"2 Gbits"),"\u4e4b\u9593\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u7576\u89e3\u6790\u5ea6\u70ba480x320\u3001\u8272\u6df1\u70ba16\u4f4d\u5143\u6bcf\u50cf\u7d20\u6642\uff0c\u4f7f\u7528\u8005\u4ecb\u9762\u9700\u8981\u7684\u5168\u5c4f\u80cc\u666f\u5716\u50cf\u7d04\u70ba300 kB\u3002 \u5176\u4e2d\u4e0d\u5305\u62ec\u4f7f\u7528\u7684\u6309\u9215\u3001\u6ed1\u52d5\u689d\u3001\u5716\u793a\u548c\u5b57\u9ad4\u4ee5\u53ca\u8a9e\u8a00\u6578\u91cf\u7b49\u6240\u9700\u7684\u984d\u5916\u9ede\u9663\u5716\u3002 256 Mbits (32 MB) NOR Flash\u53ef\u5b58\u5132\u6700\u591a\u7d04100\u5f35\u5168\u5c4f\u5716\u50cf\uff0c\u5982\u679c\u52a0\u4e0a\u5176\u4ed6\u9700\u8981\u7684\u5716\u5f62\uff0c\u5c07\u5c11\u65bc\u9019\u500b\u6578\u3002"),(0,n.kt)("p",null,"\u53ef\u5728",(0,n.kt)("strong",{parentName:"p"},"\u8a18\u61b6\u9ad4\u6620\u5c04")," \u6a21\u5f0f\u4e0b\u4f7f\u7528NOR Flash\uff0c\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u88ab\u8996\u70ba\u8b80\u53d6\u64cd\u4f5c\u7684\u5167\u90e8\u8a18\u61b6\u9ad4\u3002 \u8a72\u6a21\u5f0f\u5141\u8a31\u7cfb\u7d71\u4e3b\u6a5f\uff08\u5982DMA\u3001LTDC\u3001DMA2D\u3001GFXMMU\u6216SDMMC\uff09\u81ea\u4e3b\u8a2a\u554f\u8a18\u61b6\u9ad4\uff0c\u5373\u4f7f\u5728CPU\u505c\u6b62\u6642\u7684\u4f4e\u529f\u8017\u6a21\u5f0f\u4e0b\u4e5f\u4e0d\u4f8b\u5916\uff0c\u662f\u79fb\u52d5\u548c\u53ef\u7a7f\u6234\u61c9\u7528\u7684\u7406\u60f3\u9078\u64c7\u3002"),(0,n.kt)("p",null,"NOR Flash\u8a18\u61b6\u9ad4\u6709\u4e0d\u540c\u7684\u4ecb\u9762\u9078\u9805\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e73\u884cNOR Flash\uff08\u5177\u6709x8\u6216x16\u4ecb\u9762\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u4e32\u5217NOR Flash\uff08\u4e32\u5217\u8a18\u61b6\u9ad4\u7684\u55ae\u3001\u96d9\u3001\u56db\u548c\u516b\u8cc7\u6599\u7dda\uff0c\u4ee5\u53caHyperBus\u5feb\u9583\u8a18\u61b6\u9ad4\uff09")),(0,n.kt)("h4",d({},{id:"serial-nor-flash-memories"}),"\u4e32\u5217NOR Flash\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u4e32\u5217NOR Flash\u8a18\u61b6\u9ad4\u88ab\u5ee3\u6cdb\u7528\u4f5c\u70ba\u5716\u5f62\u61c9\u7528\u4e2d\u7684\u8a18\u61b6\u9ad4\u3002"),(0,n.kt)("p",null,"\u9019\u985e\u5b58\u5132\u5668\u5177\u6709\u8af8\u5982\u4ee5\u4e0b\u512a\u52e2\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u983b\u7387"),(0,n.kt)("li",{parentName:"ul"},"\u7c21\u5316\u4e26\u7e2e\u5c0f\u4e86\u5370\u5237\u96fb\u8def\u677f\uff08PCB\uff09\u7684\u5340\u57df"),(0,n.kt)("li",{parentName:"ul"},"\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\u7684\u53ef\u5b9a\u5740\u5340\u70ba\u6700\u5927",(0,n.kt)("strong",{parentName:"li"},"256Mbytes")),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u7684\u5f15\u8173\u6578\u4ecb\u65bc",(0,n.kt)("strong",{parentName:"li"},"4"),"\u548c",(0,n.kt)("strong",{parentName:"li"},"12"),"\u500b\u4e4b\u9593")),(0,n.kt)("h5",d({},{id:"nor-single-dual-quad-octo-flash-memories"}),"NOR\u55ae\u7dda\u3001\u96d9\u7dda\u3001\u56db\u7dda\u3001\u516b\u7dda\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"NOR Flash\u8a18\u61b6\u9ad4\u6709\u4e0d\u540c\u7684\u8cc7\u6599\u7dda\u914d\u7f6e\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u55ae\u7dda"),(0,n.kt)("li",{parentName:"ul"},"\u96d9\u7dda"),(0,n.kt)("li",{parentName:"ul"},"\u56db\u7dda"),(0,n.kt)("li",{parentName:"ul"},"\u516b\u7dda")),(0,n.kt)("p",null,"\u5207\u63db\u81f3\u914d\u5099\u66f4\u591a\u8cc7\u6599\u7dda\u7684\u4e32\u5217NOR Flash\u8a18\u61b6\u9ad4\u53ef\u4ee5\u63d0\u9ad8\u6027\u80fd\u548c\u8a18\u61b6\u9ad4\u4ecb\u9762\u983b\u5bec\uff0c\u4f46\u4e5f\u9700\u8981\u66f4\u591a\u5f15\u8173\u4f86\u9023\u63a5STM32\u7522\u54c1\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u6839\u64da\u8cc7\u6599\u7dda\u6578\u91cf\u5217\u51fa\u7684\u4e0d\u540cSPI\u8a18\u61b6\u9ad4\u7e3d\u89bd\uff1a"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/serial-modes.png",noShadow:!0,mdxType:"Figure"},"\u5e8f\u5217\u4ecb\u9762\u7e3d\u89bd"),(0,n.kt)("h4",d({},{id:"parallel-nor-flash-memories"}),"\u5e73\u884cNOR Flash\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u5728\u6027\u80fd\u548c\u914d\u7f6e\u65b9\u9762\uff0c\u5e73\u884cNOR Flash\u8a18\u61b6\u9ad4\u5177\u6709\u8207\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u76f8\u540c\u7684\u512a\u52e2\u3002 \u5e73\u884cNOR Flash\u53ef\u914d\u7f6e\u70ba\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\uff0c\u4e26\u80fd\u50cf\u5167\u90e8\u8a18\u61b6\u9ad4\u4e00\u6a23\u9032\u884c\u5b58\u53d6\u3002 \u5e73\u884c\u548c\u4e32\u5217NOR Flash\u4e4b\u9593\u7684\u5dee\u7570\u5728\u65bc\u5f15\u8173\u6578\u548c\u5370\u5237\u96fb\u8def\u677f\uff08PCB\uff09\u7684\u8907\u96dc\u5ea6\u3002"),(0,n.kt)("p",null,"Up to ",(0,n.kt)("strong",{parentName:"p"},"47 pins")," are needed for the NOR flash memory with up to 24 pins for address and 16 pins for data."),(0,n.kt)("h3",d({},{id:"nand-flash-memories"}),"NAND\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"NAND Flash\u8a18\u61b6\u9ad4\u662f\u9700\u8981\u5927\u91cf\u5716\u5f62\u8cc7\u6599\u548c ",(0,n.kt)("strong",{parentName:"p"},"\u66f4\u5feb\u5beb\u5165\u8207\u64e6\u9664\u64cd\u4f5c"),"\u7684\u5716\u5f62\u61c9\u7528\u7684\u7406\u60f3\u9078\u64c7\u3002 The NAND flash memories cannot be configured in a memory mapped mode and as a consequence, the NAND flash memories are ",(0,n.kt)("strong",{parentName:"p"},"not recommended for code execution"),"."),(0,n.kt)("p",null,"NAND flash ranges between ",(0,n.kt)("strong",{parentName:"p"},"1 Gbits")," to ",(0,n.kt)("strong",{parentName:"p"},"512 Gbits"),"."),(0,n.kt)("p",null,"\u5728\u4f7f\u7528NAND Flash\u6642\uff0c\u901a\u5e38\u5fc5\u9808\u4f7f\u7528RAM\u4e2d\u7684\u7de9\u5b58\u3002 \u5982\u6b64\u4e00\u4f86\uff0c\u53ef\u4ee5\u5c07\u7576\u524d\u4f7f\u7528\u7684\u5716\u5f62\u8cc7\u6599\u79fb\u52d5\u5230RAM\uff0c\u4e26\u5f9e\u7de9\u5b58\u4e2d\u7372\u53d6\u5b83\u5011\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/nand-flash.png",noShadow:!0,width:"500",mdxType:"Figure"},"NAND\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,n.kt)("h3",d({},{id:"emmc-memories"}),"eMMC\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"eMMC\uff08\u5d4c\u5165\u5f0f\u591a\u5a92\u9ad4\u5361\uff09\u7531MMC\u5354\u6703\u8a02\u7acb\uff0c\u76f8\u7576\u65bc\u4e00\u500bNAND Flash\u52a0\u4e00\u500b\u4e3b\u96c6\u6210\u63a7\u5236\u5668\u3002 eMMC\u7684\u4e00\u500b\u660e\u986f\u512a\u52e2\u662f\u5728\u5c01\u88dd\u4e2d\u96c6\u6210\u4e86\u63a7\u5236\u5668\uff0c\u5f9e\u800c\u63d0\u4f9b\u4e86\u6a19\u6e96\u4ecb\u9762\u548c\u5feb\u9583\u8a18\u61b6\u9ad4\u7ba1\u7406\uff0c\u4f7f\u88fd\u9020\u5546\u80fd\u5920\u5c07\u7cbe\u529b\u96c6\u4e2d\u5728\u7522\u54c1\u958b\u767c\u7684\u5176\u4ed6\u90e8\u4efd\uff0c\u9032\u800c\u7e2e\u77ed\u4e0a\u5e02\u6642\u9593\u3002"),(0,n.kt)("p",null,"eMMC Flash\u7684\u5927\u5c0f\u4ecb\u65bc",(0,n.kt)("strong",{parentName:"p"},"2 Gbits")," \u548c ",(0,n.kt)("strong",{parentName:"p"},"128 Gbits"),"\u4e4b\u9593\u3002"),(0,n.kt)("p",null,"\u76f8\u6bd4\u65bcNAND\u548cNOR\uff0ceMMC\u7684\u96a8\u6a5f\u8b80\u53d6\u6027\u80fd\u76f8\u5c0d\u8f03\u4f4e\u3002 eMMC\u53ef\u80fd\u9700\u8981\u6dfb\u52a0\u7de9\u5b58\u4f86\u514b\u670d\u96a8\u6a5f\u8b80\u53d6\u901f\u5ea6\u7de9\u6162\u7684\u554f\u984c\u3002"),(0,n.kt)("p",null,"eMMC Flash\u8a18\u61b6\u9ad4\u9700\u8981\u6700\u591a ",(0,n.kt)("strong",{parentName:"p"},"10\u500b\u5f15\u8173")," \uff0c\u5305\u62ec8\u500b\u8cc7\u6599\u5f15\u8173\u548c2\u500b\u63a7\u5236\u5f15\u8173\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/emmc-flash.png",noShadow:!0,width:"500",mdxType:"Figure"},"eMMC\u8a18\u61b6\u9ad4"),(0,n.kt)("h2",d({},{id:"volatile-memories"}),"\u63ee\u767c\u6027\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u5916\u90e8\u63ee\u767c\u6027\u8a18\u61b6\u9ad4\u4e3b\u8981\u7528\u65bc\u5b58\u5132\u5f71\u50cf\u7de9\u885d\uff08\u82e5\u5167\u90e8MCU RAM\u4e0d\u5920\u7528\uff09\uff0c\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u7528\u65bc\u7de9\u5b58\u4f86\u81ea\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u8cc7\u6599\u3002 \u672c\u7bc0\u4e3b\u8981\u4ecb\u7d39SRAM\u3001SDRAM\u548cPSRAM\uff0c\u5b83\u5011\u901a\u5e38\u7528\u5728\u57f7\u884cGUI\u7684\u5d4c\u5165\u5f0f\u7cfb\u7d71\u4e2d\u3002 \u4f46\u9084\u6709\u5176\u4ed6\u53ef\u7528\u7684\u8b8a\u578b\uff0c\u8a18\u61b6\u9ad4\u88fd\u9020\u5546\u5c0d\u5176\u8a18\u61b6\u9ad4\u4f7f\u7528\u4e0d\u540c\u547d\u540d\u6a21\u5f0f\uff0c\u5982\u201chyper RAM\u201d\u3001\u201cIoT RAM\u201d\u548c\u201coctal RAM\u201d\u3002 \u5176\u4e2d\u7684\u5927\u591a\u6578\u90fd\u53ef\u4ee5\u627e\u5230\u652f\u63f4\u5b83\u7684STM32 MCU\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/volatile-memory-overview.png",noShadow:!0,mdxType:"Figure"},"\u63ee\u767c\u6027\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u5728\u9078\u64c7\u5408\u9069\u7684\u5916\u90e8RAM\u6642\uff0c\u5efa\u8b70\u6ce8\u610f\u4ee5\u4e0b\u8981\u7d20\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bc6\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u529f\u8017"),(0,n.kt)("li",{parentName:"ul"},"\u4ecb\u9762/\u5f15\u8173\u5c3a\u5bf8"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../../../basic-concepts/framebuffer#amount-of-framebuffers"}),"\u5f71\u50cf\u7de9\u885d\u5340\u914d\u7f6e"))),(0,n.kt)("h3",d({},{id:"sram"}),"SRAM"),(0,n.kt)("p",null,"SRAM\u662f\u975c\u614b\u96a8\u6a5f\u5b58\u53d6\u8a18\u61b6\u9ad4\uff0c\u53ea\u8981\u6709\u4f9b\u96fb\uff0c\u5c31\u80fd\u4fdd\u5b58\u4f4d\u5143\u8cc7\u6599\u3002 \u4e00\u822c\u800c\u8a00\uff0cSRAM\u7684\u5b58\u53d6\u901f\u5ea6\u66f4\u5feb\uff0c\u4e14\u5bc6\u5ea6\u66f4\u5c0f\uff0c\u4f46\u50f9\u683c\u9ad8\u65bcDRAM\u3002 \u76f8\u6bd4\u65bcDRAM\uff0cSRAM\u7684\u5b58\u53d6\u6642\u9593\u901a\u5e38\u66f4\u77ed\uff0c\u56e0\u6b64\u66f4\u9069\u5408\u9700\u8981\u66f4\u591a\u52d5\u756b\u3001\u7e2e\u653e\u548c\u65cb\u8f49\u7b49\u64cd\u4f5c\u7684GUI\u3002 SRAM\u5177\u6709\u540c\u6b65\u548c\u975e\u540c\u6b65\u6a21\u5f0f\uff0c\u540c\u6b65\u6a21\u5f0f\u63d0\u4f9b\u66f4\u9ad8\u7684\u983b\u5bec\u80fd\u529b\uff0c\u4f46\u4ecb\u9762\u66f4\u8907\u96dc\u3002"),(0,n.kt)(l.Z,{mdxType:"Note"},"\u6b64\u5916\uff0c\u9084\u6709\u975e\u63ee\u767c\u6027\u96a8\u6a5f\u5b58\u53d6\u8a18\u61b6\u9ad4nvSRAM\uff0c\u4e5f\u80fd\u5b58\u5132\u548c\u63d0\u53d6\u8cc7\u6599\u3002"),(0,n.kt)("h3",d({},{id:"sdram"}),"SDRAM"),(0,n.kt)("p",null,"SDRAM\u662f\u4e00\u7a2e\u52d5\u614b\u96a8\u6a5f\u5b58\u53d6\u8a18\u61b6\u9ad4\uff0c\u5b83\u4fdd\u5b58\u96fb\u5bb9\u4e0a\u7684\u6bcf\u4e00\u500b\u8cc7\u6599\u4f4d\u5143\u3002\u76f8\u6bd4\u65bcSRAM\uff0cSDRAM\u80fd\u7528\u66f4\u5c0f\u7684\u7269\u7406\u7a7a\u9593\u5b58\u5132\u76f8\u540c\u6578\u91cf\u7684\u8cc7\u6599\u3002 \u70ba\u4e86\u4fdd\u5b58\u8cc7\u6599\uff0cSDRAM\u9700\u8981\u4e0d\u65b7\u5237\u65b0\uff0c\u56e0\u6b64\u5176\u80fd\u8017\u9ad8\u65bcSRAM\u3002"),(0,n.kt)("p",null,"SDRAM\u7684\u5bc6\u5ea6\u901a\u5e38\u70ba16 Mbits\u81f3512 Mbits\uff0c\u901a\u904e8\u300116\u548c32\u4f4d\u5143\u4ecb\u9762\u63d0\u4f9b\uff0c\u904b\u884c\u983b\u7387\u70ba100-200 MHz\u3002"),(0,n.kt)("p",null,"\u5728\u57f7\u884c24bpp 800*480\u89e3\u6790\u5ea6\u7684\u96d9\u5f71\u50cf\u7de9\u885d\u7b56\u7565\u4e2d\uff0c\u9700\u8981\u7d0432 Mbits SDRAM\u4ee5\u53ca\u7d0418 Mbits\u7684RAM\u3002"),(0,n.kt)("h3",d({},{id:"psram"}),"PSRAM"),(0,n.kt)("p",null,"PSRAM\u662f\u865b\u64ec\u975c\u614b\u96a8\u6a5f\u5b58\u53d6\u8a18\u61b6\u9ad4\uff0c\u5177\u6709DRAM\uff08\u63a7\u5236\u908f\u8f2f\uff09\u7684\u5167\u90e8\u7d50\u69cb\u548cSRAM\u4ecb\u9762\u3002 \u5b83\u7684\u5bc6\u5ea6\u901a\u5e38\u70ba8-256 Mbits\u3002 \u76f8\u6bd4\u4e8e\u50b3\u7d71\u7684SDRAM\u548cSRAM\uff0cPSRAM\u7684\u512a\u52e2\u5728\u65bc\u901f\u5ea6\u66f4\u5feb\u4e14\u529f\u8017\u66f4\u4f4e\u3002"),(0,n.kt)("h3",d({},{id:"additional-memories"}),"\u5176\u4ed6\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u65b0\u7684octal RAM\u548cHyper RAM\u8a18\u61b6\u9ad4\u5728\u55ae\u548c\u96d9\u6578\u64da\u7387\u6a21\u5f0f\u4e0b\u4f7f\u7528\u4e32\u52178\u4f4d\u5143\u4ecb\u9762\uff0c\u53ef\u5be6\u73fe\u9ad8\u541e\u5410\u7387\u548c\u826f\u597d\u7684\u96c6\u6210\u6548\u679c\u3002"),(0,n.kt)("h3",d({},{id:"selection-of-external-ram-density"}),"\u5916\u90e8RAM\u5bc6\u5ea6\u7684\u9078\u64c7"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7b56\u7565\u662f\u5c07\u5f71\u50cf\u7de9\u885d\u653e\u5728\u5916\u90e8RAM\u4e2d\uff0c\u6b64\u8868\u662f\u5e02\u9762\u4e0a\u63d0\u4f9b\u7684\u4e0d\u540cRAM\u5bc6\u5ea6\u7684\u7e3d\u89bd\u3002"),(0,n.kt)("p",null,"\u5b83\u9084\u63d0\u4f9b\u4e86\u4ee51\u30012\u30014\u30018\u300116\u548c24\u4f4d\u5143\u6bcf\u50cf\u7d20\u7684\u5bc6\u5ea6\uff08\u9664\u4ee52\u53ef\u5f97\u51fa\u55ae\u500b\u5f71\u50cf\u7de9\u885d\u6240\u9700\u5bc6\u5ea6\uff09\u904b\u884c\u96d9\u5f71\u50cf\u7de9\u885d\u8a2d\u7f6e\u6240\u9700RAM\u7684\u7e3d\u89bd\u3002"),(0,n.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u55ae\u5f71\u50cf\u7de9\u885d\u914d\u7f6e\u5df2\u7d93\u8db3\u5920\uff0c\u4e26\u4e14\u5728\u67d0\u4e9bSTM32\u5fae\u63a7\u5236\u5668\u4e2d\uff0c\u6703\u6709\u8db3\u5920\u7684\u5167\u90e8RAM\u7528\u65bc\u5bb9\u7d0d\u5f71\u50cf\u7de9\u885d\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/sdram-octospi-densities.png",noShadow:!0,mdxType:"Figure"},"SDRAM\u548cOctoSPI\u5bc6\u5ea6"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/required-ram-for-double-framebuffer-setup.png",noShadow:!0,mdxType:"Figure"},"\u96d9\u5f71\u50cf\u7de9\u885d\u8a2d\u7f6e\u6240\u9700RAM"))}N.isMDXComponent=!0}}]);