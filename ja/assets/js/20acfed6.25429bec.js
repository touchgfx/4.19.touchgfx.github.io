"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3628],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=l,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),l=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,o=(0,l.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},93054:function(e,t,r){var n=r(67294),l=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=o},43267:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return M}});var n=r(3905),l=r(44035),a=r(93054),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(m)for(var r of m(t))c.call(t,r)&&u(e,r,t[r]);return e};const h={id:"hardware-selection-external-memories",title:"\u5916\u90e8\u30e1\u30e2\u30ea"},k=void 0,f={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-external-memories",id:"development/hardware-selection/hardware-components/hardware-selection-external-memories",title:"\u5916\u90e8\u30e1\u30e2\u30ea",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-external-memories.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-external-memories",permalink:"/4.19/ja/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-external-memories",title:"\u5916\u90e8\u30e1\u30e2\u30ea"},sidebar:"docs",previous:{title:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",permalink:"/4.19/ja/docs/development/hardware-selection/hardware-components/hardware-selection-display"},next:{title:"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052\u306e\u6982\u8981",permalink:"/4.19/ja/docs/development/board-bring-up/board-introduction"}},v={},M=[{value:"\u4e0d\u63ee\u767a\u6027\u30e1\u30e2\u30ea",id:"non-volatile-memories",level:2},{value:"NOR Flash",id:"nor-flash",level:3},{value:"\u30b7\u30ea\u30a2\u30ebNOR Flash\u30e1\u30e2\u30ea",id:"serial-nor-flash-memories",level:4},{value:"NOR\u30b7\u30f3\u30b0\u30eb\u3001\u30c7\u30e5\u30a2\u30eb\u3001\u30af\u30ef\u30c3\u30c9\u3001\u30aa\u30af\u30c8Flash\u30e1\u30e2\u30ea",id:"nor-single-dual-quad-octo-flash-memories",level:5},{value:"\u30d1\u30e9\u30ec\u30ebNOR Flash\u30e1\u30e2\u30ea",id:"parallel-nor-flash-memories",level:4},{value:"NAND Flash \u30e1\u30e2\u30ea",id:"nand-flash-memories",level:3},{value:"eMMC\u30e1\u30e2\u30ea",id:"emmc-memories",level:3},{value:"\u63ee\u767a\u6027\u30e1\u30e2\u30ea",id:"volatile-memories",level:2},{value:"SRAM",id:"sram",level:3},{value:"SDRAM",id:"sdram",level:3},{value:"PSRAM",id:"psram",level:3},{value:"\u305d\u306e\u4ed6\u306e\u30e1\u30e2\u30ea",id:"additional-memories",level:3},{value:"\u5916\u90e8RAM\u5bb9\u91cf\u5bc6\u5ea6\u306e\u9078\u629e",id:"selection-of-external-ram-density",level:3}],g={toc:M};function N(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),u),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u3053\u306e\u7ae0\u3067\u306f\u3001\u7d44\u8fbc\u307f\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u7528\u306e\u5916\u90e8\u30e1\u30e2\u30ea\u306e\u9078\u629e\u306b\u5f79\u7acb\u3064\u60c5\u5831\u3092\u4e2d\u5fc3\u306b\u8aac\u660e\u3057\u307e\u3059\u3002 \u3053\u306e\u7ae0\u3092\u8aad\u3080\u524d\u306b\u3001",(0,n.kt)("a",d({parentName:"p"},{href:"../preliminary-considerations"}),"\u4e88\u5099\u8003\u5bdf"),"\u304a\u3088\u3073",(0,n.kt)("a",d({parentName:"p"},{href:"hardware-selection-mcu"}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"),"\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u8aad\u307f\u3001\u9069\u5207\u306a\u5916\u90e8\u30e1\u30e2\u30ea\u3092\u9078\u629e\u3059\u308b\u969b\u306b\u91cd\u8981\u306b\u306a\u308b\u4f9d\u5b58\u95a2\u4fc2\u3092\u7406\u89e3\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"TouchGFX GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u6642\u306b\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3001\u30d5\u30a9\u30f3\u30c8\u3001\u5909\u63db\u5185\u5bb9\u306a\u3069\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u5916\u90e8\u30e1\u30e2\u30ea\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 TouchGFX GUI\u306e\u5b9f\u884c\u306b\u304a\u3044\u3066\u5916\u90e8\u30e1\u30e2\u30ea\u306b\u4f9d\u5b58\u3059\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u4fdd\u5b58\u7528\u306e\u5185\u90e8RAM\uff08\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5185\uff09\u307e\u305f\u306f\u5916\u90e8RAM\u306e\u3044\u305a\u308c\u304b\u3001\u30c7\u30fc\u30bf\u4fdd\u5b58\u7528\u306e\u5185\u90e8 \u304a\u3088\u3073/\u307e\u305f\u306f \u5916\u90e8Flash\u306e\u3044\u305a\u308c\u304b\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u6b21\u306e\u6982\u8981\u3067\u306f\u3001STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u4f7f\u7528\u3067\u304d\u308b\u3044\u304f\u3064\u304b\u306e\u5916\u90e8\u30e1\u30e2\u30ea\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u3055\u307e\u3056\u307e\u306a\u30e1\u30e2\u30ea\u4f8b\u306e\u3044\u304f\u3064\u304b\u306f\u3001\u30b7\u30ea\u30a2\u30eb\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u30d1\u30e9\u30ec\u30eb\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u4e21\u65b9\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/external-memories/memory-overview.webp",noShadow:!0,mdxType:"Figure"},"\u30e1\u30e2\u30ea\u306e\u6982\u8981"),(0,n.kt)("p",null,"\u3055\u307e\u3056\u307e\u306aSTM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u591a\u69d8\u306a\u5916\u90e8\u30e1\u30e2\u30ea\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u591a\u69d8\u306a\u5916\u90e8\u30e1\u30e2\u30ea\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",d({},{id:"non-volatile-memories"}),"\u4e0d\u63ee\u767a\u6027\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3001\u30d5\u30a9\u30f3\u30c8\u3001\u5909\u63db\u5185\u5bb9\u3001\u304a\u3088\u3073TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u306a\u3069\u306e\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30c7\u30fc\u30bf\uff65\u30a2\u30bb\u30c3\u30c8\u306e\u4e00\u90e8\u307e\u305f\u306f\u3059\u3079\u3066\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u3001\u4e3b\u306b\u4e0d\u63ee\u767a\u6027\u30b9\u30c8\u30ec\u30fc\u30b8\uff08Flash\uff09\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u4e0d\u63ee\u767a\u6027\u30e1\u30e2\u30ea\u306fSTM32\u88fd\u54c1\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u304a\u308a\u3001\u30d1\u30e9\u30ec\u30eb\u307e\u305f\u306f\u30b7\u30ea\u30a2\u30eb\uff65\u30e1\u30e2\u30ea\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u3066\u3055\u307e\u3056\u307e\u306a\u69cb\u6210\u3067\u3001\u591a\u69d8\u306a\u30bf\u30a4\u30d7\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/external-memories/non-volatile-memory-overview.webp",noShadow:!0,mdxType:"Figure"},"\u4e0d\u63ee\u767a\u6027\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"\u4e0d\u63ee\u767a\u6027\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u3001\u4ee5\u4e0b\u306b\u3088\u3063\u3066\u9078\u5b9a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bc6\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30bf\u30a4\u30d7\uff08\u30d1\u30e9\u30ec\u30eb / \u30b7\u30ea\u30a2\u30eb\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u54c1\u70b9\u6570")),(0,n.kt)("h3",d({},{id:"nor-flash"}),"NOR Flash"),(0,n.kt)("p",null,"NOR Flash\u306f\u4e0d\u63ee\u767a\u6027\u30e1\u30e2\u30ea\u306e\u4e00\u3064\u3067\u3001\u30e1\u30e2\u30ea\u5185\u306e\u3042\u3089\u3086\u308b\u9818\u57df\u3078\u306e\u30e9\u30f3\u30c0\u30e0\uff65\u30a2\u30af\u30bb\u30b9\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u901a\u5e38\u306eNOR Flash\u306e\u5bb9\u91cf\u7bc4\u56f2\u306f\u3001",(0,n.kt)("strong",{parentName:"p"},"128Mbit"),"\uff5e",(0,n.kt)("strong",{parentName:"p"},"2Gbit"),"\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001\u89e3\u50cf\u5ea6\u304c480x320\u3067\u8272\u6df1\u5ea6\u304c16bpp\u306e\u5834\u5408\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u306f\u5168\u753b\u9762\u306e\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u7528\u306b\u6700\u5927300KB\u304c\u5fc5\u8981\u3067\u3059\u3002 \u3053\u3053\u3067\u306f\u3001\u30dc\u30bf\u30f3\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u3001\u30a2\u30a4\u30b3\u30f3\u3001\u4f7f\u7528\u30d5\u30a9\u30f3\u30c8\u3001\u8a00\u8a9e\u6570\u306a\u3069\u306b\u5fc5\u8981\u306a\u8ffd\u52a0\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u8003\u616e\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002 256Mbit\uff0832MB\uff09\u306eNOR Flash\u306b\u306f\u6700\u5927100\u500b\u306e\u56fa\u6709\u306e\u5168\u753b\u9762\u753b\u50cf\u3092\u4fdd\u5b58\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u5fc5\u8981\u306a\u6b8b\u308a\u306e\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30a2\u30bb\u30c3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3082\u3063\u3068\u5c11\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"NOR Flash\u306f",(0,n.kt)("strong",{parentName:"p"},"\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9"),"\uff65\u30e2\u30fc\u30c9\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30e2\u30fc\u30c9\u3067\u306f\u8aad\u307f\u51fa\u3057\u64cd\u4f5c\u3067\u5916\u90e8Flash\u304c\u5185\u90e8\u30e1\u30e2\u30ea\u3068\u3057\u3066\u8a8d\u8b58\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30e2\u30fc\u30c9\u3067\u306f\u3001CPU\u304c\u505c\u6b62\u3057\u305f\u4f4e\u96fb\u529b\u30e2\u30fc\u30c9\u3067\u3082\u30b7\u30b9\u30c6\u30e0\uff65\u30de\u30b9\u30bf\uff08DMA\u3001LTDC\u3001DMA2D\u3001GFXMMU\u3001\u307e\u305f\u306fSDMMC\uff09\u304c\u30e1\u30e2\u30ea\u306b\u81ea\u5f8b\u7684\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u306e\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u304a\u3088\u3073\u30a6\u30a7\u30a2\u30e9\u30d6\u30eb\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6700\u9069\u3067\u3059\u3002"),(0,n.kt)("p",null,"NOR Flash\u30e1\u30e2\u30ea\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3055\u307e\u3056\u307e\u306a\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30ec\u30ebNOR Flash\uff08x8\u307e\u305f\u306fx16\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u30b7\u30ea\u30a2\u30ebNOR Flash\uff08\u30b7\u30ea\u30a2\u30eb\uff65\u30e1\u30e2\u30ea\u7528\u306e\u30b7\u30f3\u30b0\u30eb\u3001\u30c7\u30e5\u30a2\u30eb\u3001\u30af\u30ef\u30c3\u30c9\u3001\u30aa\u30af\u30c8\u306e\u30c7\u30fc\u30bf\u30e9\u30a4\u30f3\u8a2d\u5b9a\u3001HyperBus Flash\uff09")),(0,n.kt)("h4",d({},{id:"serial-nor-flash-memories"}),"\u30b7\u30ea\u30a2\u30ebNOR Flash\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"\u30b7\u30ea\u30a2\u30ebNOR Flash\u30e1\u30e2\u30ea\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u3068\u3057\u3066\u5e83\u304f\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30e1\u30e2\u30ea\uff65\u30bf\u30a4\u30d7\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u3044\u5468\u6ce2\u6570"),(0,n.kt)("li",{parentName:"ul"},"\u30d7\u30ea\u30f3\u30c8\u56de\u8def\u57fa\u677f\uff08PCB\uff09\u306e\u914d\u7dda\u306e\u7c21\u7d20\u5316\u3068\u57fa\u677f\u30b5\u30a4\u30ba\u306e\u524a\u6e1b"),(0,n.kt)("li",{parentName:"ul"},"\u30a2\u30c9\u30ec\u30b9\u53ef\u80fd\u9818\u57df\u304c\u6700\u5927",(0,n.kt)("strong",{parentName:"li"},"256MB"),"\u306e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30e2\u30fc\u30c9"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u8981\u306a\u30d4\u30f3\u6570\u304c",(0,n.kt)("strong",{parentName:"li"},"4"),"\u30d4\u30f3\uff5e",(0,n.kt)("strong",{parentName:"li"},"12"),"\u30d4\u30f3")),(0,n.kt)("h5",d({},{id:"nor-single-dual-quad-octo-flash-memories"}),"NOR\u30b7\u30f3\u30b0\u30eb\u3001\u30c7\u30e5\u30a2\u30eb\u3001\u30af\u30ef\u30c3\u30c9\u3001\u30aa\u30af\u30c8Flash\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"NOR Flash\u30e1\u30e2\u30ea\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30c7\u30fc\u30bf\u30e9\u30a4\u30f3\u69cb\u6210\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30b7\u30f3\u30b0\u30eb"),(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30e5\u30a2\u30eb"),(0,n.kt)("li",{parentName:"ul"},"\u30af\u30ef\u30c3\u30c9"),(0,n.kt)("li",{parentName:"ul"},"\u30aa\u30af\u30c8")),(0,n.kt)("p",null,"\u30c7\u30fc\u30bf\u30e9\u30a4\u30f3\u306e\u591a\u3044\u30b7\u30ea\u30a2\u30ebNOR Flash\u30e1\u30e2\u30ea\u306b\u5207\u308a\u66ff\u3048\u308b\u3068\u3001\u30e1\u30e2\u30ea\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u6027\u80fd\u3068\u5e2f\u57df\u5e45\u304c\u5f37\u5316\u3055\u308c\u307e\u3059\u304c\u3001STM32\u88fd\u54c1\u3068\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u305f\u3081\u306b\u5fc5\u8981\u306a\u30d4\u30f3\u6570\u304c\u5897\u3048\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30c7\u30fc\u30bf\u30e9\u30a4\u30f3\u306e\u6570\u306b\u5fdc\u3058\u305f\u3001\u3055\u307e\u3056\u307e\u306aSPI\u30e1\u30e2\u30ea\u306e\u6982\u8981\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/external-memories/serial-modes.webp",noShadow:!0,mdxType:"Figure"},"\u30b7\u30ea\u30a2\u30eb\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u6982\u8981"),(0,n.kt)("h4",d({},{id:"parallel-nor-flash-memories"}),"\u30d1\u30e9\u30ec\u30ebNOR Flash\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"\u30d1\u30e9\u30ec\u30ebNOR Flash\u30e1\u30e2\u30ea\u306b\u306f\u3001\u6027\u80fd\u3084\u69cb\u6210\u306e\u70b9\u3067\u30b7\u30ea\u30a2\u30ebFlash\u30e1\u30e2\u30ea\u3068\u540c\u3058\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002 \u30d1\u30e9\u30ec\u30ebNOR Flash\u306f\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30e2\u30fc\u30c9\u306b\u69cb\u6210\u53ef\u80fd\u3067\u3001\u5185\u90e8\u30e1\u30e2\u30ea\u3067\u3042\u308b\u304b\u306e\u3088\u3046\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30d1\u30e9\u30ec\u30eb\u304a\u3088\u3073\u30b7\u30ea\u30a2\u30ebNOR Flash\u306e\u9055\u3044\u306f\u3001\u30d4\u30f3\u306e\u6570\u3068\u30d7\u30ea\u30f3\u30c8\u56de\u8def\u57fa\u677f\uff08PCB\uff09\u306e\u8907\u96d1\u3055\u3067\u3059\u3002"),(0,n.kt)("p",null,"NOR Flash\u30e1\u30e2\u30ea\u306b\u306f\u6700\u5927",(0,n.kt)("strong",{parentName:"p"},"47\u30d4\u30f3"),"\u304c\u5fc5\u8981\u3067\u3001\u3053\u306e\u3046\u3061\u30a2\u30c9\u30ec\u30b9\u7528\u306b\u6700\u592724\u30d4\u30f3\u3001\u30c7\u30fc\u30bf\u7528\u306b\u6700\u592716\u30d4\u30f3\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"nand-flash-memories"}),"NAND Flash \u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"NAND Flash\u30e1\u30e2\u30ea\u306f\u3001\u5927\u5bb9\u91cf\u306e\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30a2\u30bb\u30c3\u30c8\u3068",(0,n.kt)("strong",{parentName:"p"},"\u9ad8\u901f\u306e\u66f8\u304d\u8fbc\u307f\u3068\u6d88\u53bb\u64cd\u4f5c"),"\u3092\u5fc5\u8981\u3068\u3059\u308b\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6700\u9069\u3067\u3059\u3002 NAND Flash\u30e1\u30e2\u30ea\u306f\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30e2\u30fc\u30c9\u3067\u69cb\u6210\u3067\u304d\u306a\u3044\u305f\u3081\u3001",(0,n.kt)("strong",{parentName:"p"},"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c\u306b\u306f\u304a\u52e7\u3081\u3067\u304d\u307e\u305b\u3093"),"\u3002"),(0,n.kt)("p",null,"NAND Flash\u306e\u5bb9\u91cf\u7bc4\u56f2\u306f\u3001",(0,n.kt)("strong",{parentName:"p"},"1 Gbit"),"\uff5e",(0,n.kt)("strong",{parentName:"p"},"512 Gbit"),"\u3067\u3059\u3002"),(0,n.kt)("p",null,"NAND Flash\u306e\u4f7f\u7528\u6642\u306b\u306f\u3001RAM\u5185\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u751f\u3058\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u73fe\u5728\u4f7f\u7528\u3057\u3066\u3044\u308b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30bb\u30c3\u30c8\u3092RAM\u306b\u79fb\u52d5\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u63cf\u753b\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/external-memories/nand-flash.webp",noShadow:!0,width:"500",mdxType:"Figure"},"NOR Flash\u30e1\u30e2\u30ea"),(0,n.kt)("h3",d({},{id:"emmc-memories"}),"eMMC\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"MMC Association\u306b\u3088\u3063\u3066\u7b56\u5b9a\u3055\u308c\u305feMMC\uff08Embedded Multi Media Card\uff09\u306f\u3001NAND Flash\u3068\u540c\u7b49\u306b\u6a5f\u80fd\u3057\u3001\u30de\u30b9\u30bf\u7d71\u5408\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002 eMMC\u306e\u660e\u3089\u304b\u306a\u5229\u70b9\u306e\u4e00\u3064\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u7d71\u5408\u3055\u308c\u3066\u304a\u308a\u3001\u6a19\u6e96\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068Flash\u30e1\u30e2\u30ea\u306e\u7ba1\u7406\u6a5f\u80fd\u3092\u5099\u3048\u3066\u3044\u308b\u3053\u3068\u3067\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u88fd\u9020\u30e1\u30fc\u30ab\u30fc\u306f\u88fd\u54c1\u958b\u767a\u306e\u4ed6\u306e\u90e8\u5206\u306b\u96c6\u4e2d\u3057\u3001\u958b\u767a\u671f\u9593\u3092\u77ed\u7e2e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"eMMC Flash\u306e\u5bb9\u91cf\u7bc4\u56f2\u306f\u3001",(0,n.kt)("strong",{parentName:"p"},"2Gbit"),"\uff5e",(0,n.kt)("strong",{parentName:"p"},"128Gbit"),"\u3067\u3059\u3002"),(0,n.kt)("p",null,"eMMC\u306fNAND\u3084NOR Flash\u3068\u6bd4\u8f03\u3059\u308b\u3068\u30e9\u30f3\u30c0\u30e0\u8aad\u307f\u51fa\u3057\u6027\u80fd\u304c\u4f4e\u304f\u306a\u308a\u307e\u3059\u3002 eMMC\u3067\u306f\u3001\u30e9\u30f3\u30c0\u30e0\u8aad\u307f\u51fa\u3057\u901f\u5ea6\u306e\u4f4e\u3055\u3092\u514b\u670d\u3059\u308b\u305f\u3081\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u8ffd\u52a0\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"eMMC Flash\u30e1\u30e2\u30ea\u306b\u306f\u6700\u5927",(0,n.kt)("strong",{parentName:"p"},"10\u30d4\u30f3"),"\u304c\u5fc5\u8981\u3067\u3001\u3053\u306e\u3046\u3061\u6700\u59278\u30d4\u30f3\u304c\u30c7\u30fc\u30bf\u7528\u30012\u30d4\u30f3\u304c\u5236\u5fa1\u7528\u3067\u3059\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/external-memories/emmc-flash.webp",noShadow:!0,width:"500",mdxType:"Figure"},"eMMC\u30e1\u30e2\u30ea"),(0,n.kt)("h2",d({},{id:"volatile-memories"}),"\u63ee\u767a\u6027\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"\u5916\u90e8\u306e\u63ee\u767a\u6027\u30e1\u30e2\u30ea\u306f\u4e3b\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5185\u90e8\u306eRAM\u306e\u5bb9\u91cf\u304c\u4e0d\u5341\u5206\u306a\u5834\u5408\u3084\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001GUI\u3092\u5b9f\u884c\u3059\u308b\u7d44\u8fbc\u307f\u30b7\u30b9\u30c6\u30e0\u3067\u3088\u304f\u4f7f\u7528\u3055\u308c\u308bSRAM\u3001SDRAM\u3001PSRAM\u306b\u3064\u3044\u3066\u91cd\u70b9\u7684\u306b\u8aac\u660e\u3057\u307e\u3059\u3002  \u305f\u3060\u3057\u3001\u3053\u308c\u4ee5\u5916\u306b\u3082\u8272\u3005\u306a\u5909\u7a2e\u304c\u63d0\u4f9b\u3055\u308c\u3066\u304a\u308a\u3001\u30e1\u30e2\u30ea\u88fd\u9020\u30e1\u30fc\u30ab\u30fc\u306f\u300cHyper RAM\u300d\u3001\u300cIoT RAM\u300d\u3001\u300cOctal RAM\u300d\u306a\u3069\u3001\u305d\u308c\u305e\u308c\u306e\u30e1\u30e2\u30ea\u306b\u7570\u306a\u308b\u547d\u540d\u30b9\u30ad\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u5927\u90e8\u5206\u306b\u5171\u901a\u3057\u3066\u3044\u308b\u306e\u306f\u3001\u30b5\u30dd\u30fc\u30c8\u3059\u308bSTM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u70b9\u3067\u3059\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/external-memories/volatile-memory-overview.webp",noShadow:!0,mdxType:"Figure"},"\u63ee\u767a\u6027\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"\u9069\u5207\u306a\u5916\u90e8RAM\u3092\u9078\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001\u4ee5\u4e0b\u306e\u70b9\u306b\u7559\u610f\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bc6\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8cbb\u96fb\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9 \u3001\u30d4\u30f3\u306e\u30b5\u30a4\u30ba"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../../../basic-concepts/framebuffer#amount-of-framebuffers"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8a2d\u8a08"))),(0,n.kt)("h3",d({},{id:"sram"}),"SRAM"),(0,n.kt)("p",null,"SRAM\u3068\u306f\u30b9\u30bf\u30c6\u30a3\u30c3\u30af\uff65\u30e9\u30f3\u30c0\u30e0\u30a2\u30af\u30bb\u30b9\uff65\u30e1\u30e2\u30ea\u306e\u3053\u3068\u3067\u3001\u96fb\u6e90\u304c\u4f9b\u7d66\u3055\u308c\u3066\u3044\u308b\u9650\u308a\u30d3\u30c3\u30c8\uff65\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002 \u4e00\u822c\u7684\u306bSRAM\u3067\u306f\u3001DRAM\u3088\u308a\u3082\u9ad8\u901f\u30a2\u30af\u30bb\u30b9\u304c\u53ef\u80fd\u3067\u3059\u304c\u3001\u30b3\u30b9\u30c8\u9ad8\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u3001\u5bc6\u5ea6\u3082\u4f4e\u304f\u306a\u308a\u307e\u3059\u3002 SRAM\u306f\u901a\u5e38\u306fDRAM\u3068\u6bd4\u8f03\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6642\u9593\u304c\u77ed\u3044\uff08\u9ad8\u901f\u3067\u3042\u308b\uff09\u306e\u3067\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3001\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3001\u56de\u8ee2\u306a\u3069\u3092\u591a\u7528\u3059\u308bGUI\u306b\u3088\u308a\u9069\u3057\u3066\u3044\u307e\u3059\u3002 SRAM\u306b\u306f\u540c\u671f\u30e2\u30fc\u30c9\u3068\u975e\u540c\u671f\u30e2\u30fc\u30c9\u306e\u4e21\u65b9\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3001\u540c\u671f\u30e2\u30fc\u30c9\u306e\u65b9\u304c\u9ad8\u3044\u5e2f\u57df\u5e45\u3092\u63d0\u4f9b\u3057\u307e\u3059\u304c\u3001\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u8907\u96d1\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)(a.Z,{mdxType:"Note"},"\u975e\u63ee\u767a\u6027\u30e9\u30f3\u30c0\u30e0\u30a2\u30af\u30bb\u30b9\uff65\u30e1\u30e2\u30ea\uff08nvSRAM\u3068\u547c\u3070\u308c\u308b\uff09\u3068\u3057\u3066\u5229\u7528\u3067\u304d\u3001\u3053\u308c\u306b\u306f\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u304a\u3088\u3073\u518d\u547c\u3073\u51fa\u3057\u3059\u308b\u6a5f\u80fd\u3082\u4ed8\u52a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"sdram"}),"SDRAM"),(0,n.kt)("p",null,"SDRAM\u3068\u306f\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30e9\u30f3\u30c0\u30e0\u30a2\u30af\u30bb\u30b9\uff65\u30e1\u30e2\u30ea\u306e\u3053\u3068\u3067\u3001\u30c7\u30fc\u30bf\u306e\u5404\u30d3\u30c3\u30c8\u3092\u30ad\u30e3\u30d1\u30b7\u30bf\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u540c\u3058\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u7269\u7406\u7684\u30b9\u30da\u30fc\u30b9\u306fSRAM\u3068\u6bd4\u8f03\u3057\u3066\u5c11\u306a\u304f\u306a\u308a\u307e\u3059\u3002 \u30c7\u30fc\u30bf\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u5b9a\u671f\u7684\u306a\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u304c\u5fc5\u8981\u306a\u306e\u3067\u3001SRAM\u3088\u308a\u3082\u5927\u304d\u306a\u96fb\u529b\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u901a\u5e38\u3001SDRAM\u306e\u5bb9\u91cf\u5bc6\u5ea6\u306f16Mbit\u304b\u3089\u6700\u5927512Mbit\u306e\u7bc4\u56f2\u3067\u30018bit\u300116bit\u300132bit\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u4f7f\u7528\u3067\u304d\u3001100MHz\uff5e200MHz\u306e\u5468\u6ce2\u6570\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"24bpp 800x480\u306e\u89e3\u50cf\u5ea6\u3067\u5b9f\u884c\u3055\u308c\u308b2\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4fdd\u5b58\u3059\u308b\u306e\u306b\u9069\u3057\u305fSDRAM\u306f\u300132Mbit\u306eSDRAM\u3060\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002 \u30c0\u30d6\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u8a08\u3067\u306f\u6700\u592718Mbit\u306eRAM\u304c\u5fc5\u8981\u306b\u306a\u308b\u304b\u3089\u3067\u3059\u3002"),(0,n.kt)("h3",d({},{id:"psram"}),"PSRAM"),(0,n.kt)("p",null,"PSRAM\u3068\u306f\u7591\u4f3c\u30b9\u30bf\u30c6\u30a3\u30c3\u30af\uff65\u30e9\u30f3\u30c0\u30e0\u30a2\u30af\u30bb\u30b9\uff65\u30e1\u30e2\u30ea\u306e\u3053\u3068\u3067\u3001DRAM\u306e\u5185\u90e8\u69cb\u9020\uff08\u5236\u5fa1\u30ed\u30b8\u30c3\u30af\uff09\u3068SRAM\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002 \u901a\u5e38\u306f\u30018Mbit\uff5e256Mbit\u306e\u7bc4\u56f2\u306e\u5bb9\u91cf\u5bc6\u5ea6\u3067\u3059\u3002 \u5f93\u6765\u306eSDRAM\u3084SRAM\u3068\u6bd4\u8f03\u3057\u3066\u3001PSRAM\u306f\u9ad8\u901f\u3067\u4f4e\u6d88\u8cbb\u96fb\u529b\u3068\u3044\u3046\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"additional-memories"}),"\u305d\u306e\u4ed6\u306e\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"\u65b0\u3057\u3044Octal RAM\u304a\u3088\u3073Hyper RAM\u30e1\u30e2\u30ea\u306f\u3001\u30b7\u30ea\u30a2\u30eb\u306e8bit\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u30b7\u30f3\u30b0\u30eb\u304a\u3088\u3073\u30c7\u30e5\u30a2\u30eb\uff65\u30c7\u30fc\u30bf\u30ec\u30fc\u30c8\uff65\u30e2\u30fc\u30c9\u3067\u4f7f\u7528\u3057\u3066\u304a\u308a\u3001\u9ad8\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u3068\u512a\u308c\u305f\u96c6\u7a4d\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"selection-of-external-ram-density"}),"\u5916\u90e8RAM\u5bb9\u91cf\u5bc6\u5ea6\u306e\u9078\u629e"),(0,n.kt)("p",null,"\u5916\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u914d\u7f6e\u3059\u308b\u65b9\u91dd\u3092\u304a\u6301\u3061\u306e\u5834\u5408\u306f\u3001\u6b21\u306e\u8868\u306b\u5e02\u8ca9\u306e\u3055\u307e\u3056\u307e\u306a\u5bb9\u91cf\u5bc6\u5ea6\u306eRAM\u306e\u6982\u8981\u304c\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u3053\u306b\u306f\u30011\u30012\u30014\u30018\u300116\u300124bit/pixel\u306e\u30c0\u30d6\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u69cb\u6210\u3067\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306aRAM\u306e\u6982\u8981\u3082\u793a\u3055\u308c\u3066\u3044\u307e\u3059\uff08\u3053\u308c\u3089\u306e\u6570\u5024\u30922\u3067\u5272\u308c\u3070\u3001\u30b7\u30f3\u30b0\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3067\u5fc5\u8981\u306a\u5bb9\u91cf\u5bc6\u5ea6\u304c\u308f\u304b\u308a\u307e\u3059\uff09\u3002"),(0,n.kt)("p",null,"\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u30b7\u30f3\u30b0\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u69cb\u6210\u3067\u5341\u5206\u3067\u3059\u3057\u3001\u4e00\u90e8\u306eSTM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u914d\u7f6e\u3059\u308b\u306e\u306b\u5341\u5206\u306aRAM\u304c\u5185\u8535\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/external-memories/sdram-octospi-densities.webp",noShadow:!0,mdxType:"Figure"},"SDRAM\u304a\u3088\u3073OctoSPI\u306e\u5bb9\u91cf\u5bc6\u5ea6"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/external-memories/required-ram-for-double-framebuffer-setup.webp",noShadow:!0,mdxType:"Figure"},"\u30c0\u30d6\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u69cb\u6210\u306b\u5fc5\u8981\u306aRAM"))}N.isMDXComponent=!0}}]);