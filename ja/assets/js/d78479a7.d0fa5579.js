"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7771],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},78715:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var r=n(3905),a=n(37793),o=n(31217),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&d(e,n,t[n]);return e};const f={id:"general-ui-component-performance",title:"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"},h=void 0,g={unversionedId:"development/ui-development/ui-components/general-ui-component-performance",id:"development/ui-development/ui-components/general-ui-component-performance",title:"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/general-ui-component-performance.mdx",sourceDirName:"development/ui-development/ui-components",slug:"/development/ui-development/ui-components/general-ui-component-performance",permalink:"/4.19/ja/docs/development/ui-development/ui-components/general-ui-component-performance",tags:[],version:"current",frontMatter:{id:"general-ui-component-performance",title:"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"},sidebar:"docs",previous:{title:"Video\uff08\u30d3\u30c7\u30aa\uff09",permalink:"/4.19/ja/docs/development/ui-development/ui-components/miscellaneous/video"},next:{title:"Scenarios",permalink:"/4.19/ja/docs/category/scenarios-1"}},v={},k=[{value:"\u753b\u50cf\u63cf\u753b",id:"image-drawing",level:2},{value:"\u30c7\u30fc\u30bf\uff65\u30b3\u30d4\u30fc\u3078\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30b5\u30dd\u30fc\u30c8",id:"hardware-support-for-data-copy",level:3},{value:"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"image-format",level:3},{value:"\u753b\u50cf\u30c7\u30fc\u30bf\u3078\u306e\u30a2\u30af\u30bb\u30b9",id:"access-to-the-image-data",level:3},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u30a2\u30af\u30bb\u30b9",id:"access-to-the-framebuffer",level:3},{value:"\u753b\u50cf\u89e3\u50cf\u5ea6",id:"image-resolution",level:3},{value:"\u900f\u660e\u5ea6",id:"transparency",level:3},{value:"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u63cf\u753b",id:"mcu-drawing",level:2},{value:"Canvas Widget\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff09",id:"canvas-widgets",level:2},{value:"\u30c6\u30ad\u30b9\u30c8",id:"texts",level:2}],y={toc:k};function b(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),d),i(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u5927\u90e8\u5206\u306eUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u4f7f\u7528\u3059\u308bTouchGFX\u306e\u4e00\u822c\u7684\u306a\u63cf\u753b\u64cd\u4f5c\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"image-drawing"}),"\u753b\u50cf\u63cf\u753b"),(0,r.kt)("p",null,"\u307b\u307c\u3059\u3079\u3066\u306eUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u307b\u307c1\u3064\u4ee5\u4e0a\u306e\u753b\u50cf\u306e\u63cf\u753b\u306b\u4f9d\u5b58\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u753b\u50cf\u63cf\u753b\u306fTouchGFX\u306b\u304a\u3051\u308b\u6700\u3082\u91cd\u8981\u306a\u63cf\u753b\u64cd\u4f5c\u306e1\u3064\u3067\u3059\u3002 \u3053\u306e\u305f\u3081\u3001\u30b7\u30b9\u30c6\u30e0\u304c\u753b\u50cf\u3092\u9ad8\u901f\u304b\u3064\u52b9\u679c\u7684\u306a\u65b9\u6cd5\u3067\u63cf\u753b\u3067\u304d\u308b\u3053\u3068\u306f\u3001\u591a\u304f\u306e\u5834\u5408\u306b\u6975\u3081\u3066\u91cd\u8981\u3067\u3059\u3002 \u753b\u50cf\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5f71\u97ff\u3059\u308b\u8981\u56e0\u306f\u6570\u591a\u304f\u3042\u308a\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u307b\u307c\u3059\u3079\u3066\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u8a2d\u5b9a\u306b\u304a\u3044\u3066\u3001TouchGFX\u3067\u306e\u753b\u50cf\u63cf\u753b\u306f\u4ed6\u306e\u63cf\u753b\u64cd\u4f5c\u306b\u6bd4\u3079\u3066\u9ad8\u901f\u3067\u3042\u308b\u3068\u8003\u3048\u3089\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"hardware-support-for-data-copy"}),"\u30c7\u30fc\u30bf\uff65\u30b3\u30d4\u30fc\u3078\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30b5\u30dd\u30fc\u30c8"),(0,r.kt)("p",null,"TouchGFX\u306f\u3001\u975e\u5727\u7e2e\u306e\u753b\u50cf\u30c7\u30fc\u30bf\u3092\u3001\u9078\u629e\u3057\u305f\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff08RGB565\u3001L8\u3001ARGB8888\u306a\u3069\uff09\u3067\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u975e\u5727\u7e2e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5229\u70b9\u306f\u3001\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u306bTouchGFX\u304c\u753b\u50cf\u3092\u76f4\u63a5\u4f7f\u7528\u3057\u3001\u5909\u63db\u306a\u3057\u3067\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u8ee2\u9001\u3067\u304d\u308b\u3053\u3068\u3067\u3059\u3002 \u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306bDMA\u304c\u642d\u8f09\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30e1\u30e2\u30ea\u306e\u30b3\u30d4\u30fc\u306b\u306f\u3053\u306e\u6a5f\u80fd\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u8ee2\u9001\u901f\u5ea6\u304c\u30a2\u30c3\u30d7\u3057\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8ca0\u8377\u304c\u6700\u5c0f\u5316\u3055\u308c\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u5bfe\u3059\u308b\u5236\u9650\u306e1\u3064\u306f\u3001\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u30a2\u30eb\u30d5\u30a1\uff65\u30c1\u30e3\u30cd\u30eb\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u3067\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d4\u30af\u30bb\u30eb\u306b\u3088\u3063\u3066\u753b\u50cf\u30c7\u30fc\u30bf\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u901a\u5e38\u306eDMA\u8ee2\u9001\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002 \u305f\u3060\u3057\u3001Chrom-ART / DMA2D\u306a\u3069\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\u642d\u8f09\u306eSTM32\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u308c\u3089\u306e\u30bf\u30a4\u30d7\u306e\u753b\u50cf\u306b\u3082DMA\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u306f\u3001DMA\u304c\u30c7\u30fc\u30bf\u3092\u30b3\u30d4\u30fc\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u5b9f\u969b\u306b\u306f\u30b3\u30d4\u30fc\u3068\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u64cd\u4f5c\u3092\u4e00\u6c17\u306b\u5b9f\u884c\u3059\u308b\u306e\u3067\u3001\u901f\u5ea6\u304c\u5411\u4e0a\u3057\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8ca0\u8377\u3082\u5927\u5e45\u306b\u8efd\u6e1b\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"image-format"}),"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,r.kt)("p",null,"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u69cb\u6210\u306b\u3088\u3063\u3066\u306f\u3001\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3082\u753b\u50cf\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002 \u5927\u307e\u304b\u306b\u8a00\u3046\u3068\u3001\u8ee2\u9001\u3059\u308b\u30c7\u30fc\u30bf\u306e\u91cf\u304c\u5c11\u306a\u3044\u307b\u3069\u3001\u3088\u308a\u65e9\u304f\u8ee2\u9001\u3067\u304d\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001RGB565\u753b\u50cf\u306e\u8ee2\u9001\u306f\u540c\u7b49\u306eRGB888\u306b\u6bd4\u3079\u3066\u65e9\u304f\u306a\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001RGB565\u753b\u50cf\u306f\u540c\u7b49\u306eRGB888\u753b\u50cf\u306e3\u5206\u306e2\u306e\u30b5\u30a4\u30ba\u3067\u3042\u308b\u305f\u3081\u3067\u3059\u3002"),(0,r.kt)("h3",m({},{id:"access-to-the-image-data"}),"\u753b\u50cf\u30c7\u30fc\u30bf\u3078\u306e\u30a2\u30af\u30bb\u30b9"),(0,r.kt)("p",null,"\u753b\u50cf\u30c7\u30fc\u30bf\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5fc5\u8981\u306a\u6642\u9593\u306f\u975e\u5e38\u306b\u91cd\u8981\u3067\u3059\u3002\u753b\u50cf\u3092\u63cf\u753b\u3059\u308b\u305f\u3073\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u304b\u3089\u3067\u3059\u3002 TouchGFX\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u753b\u50cf\u30c7\u30fc\u30bf\u3092\u3001\u30a2\u30af\u30bb\u30b9\u6642\u9593\u306e\u7570\u306a\u308b\u3055\u307e\u3056\u307e\u306a\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u4fdd\u5b58\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u753b\u50cf\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58\u5834\u6240")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5916\u90e8Flash")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5916\u90e8Flash\u306e\u5229\u70b9\u306f\u4f4e\u30b3\u30b9\u30c8\u3067\u3042\u308b\u3053\u3068\u3068\u30b5\u30a4\u30ba\u3067\u3059\uff08\u5927\u5bb9\u91cf\u3067\u3042\u308b\u3053\u3068\u304c\u591a\u3044\uff09\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u591a\u304f\u306e\u753b\u50cf\u3092\u53d6\u308a\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u30a2\u30af\u30bb\u30b9\u6642\u9593\u304c\u5927\u304d\u304f\u7570\u306a\u308a\u307e\u3059\u3002\u3057\u304b\u3057QSPI\u3084\u305d\u308c\u3068\u540c\u7b49\u306e\u3082\u306e\u3092\u9078\u629e\u3059\u308c\u3070\u3001\u9ad8\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u304c\u5f97\u3089\u308c\u3001\u753b\u50cf\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u5927\u304d\u304f\u5411\u4e0a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5916\u90e8RAM")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u753b\u50cf\u3092\u5916\u90e8RAM\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u5fc5\u8981\u304c\u751f\u3058\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002 TouchGFX\u3067\u3001\u753b\u50cf\u63cf\u753b\u306b\u76f4\u63a5\u4f7f\u7528\u3067\u304d\u306a\u3044\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\uff08NAND\u3084EMMC\u306a\u3069\uff09\u3092\u4f7f\u7528\u305b\u3056\u308b\u3092\u5f97\u306a\u3044\u30b1\u30fc\u30b9\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u5916\u90e8RAM\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306e\u753b\u50cf\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u3068\u3063\u3066\u5fc5\u9808\u306e\u8981\u56e0\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5185\u90e8Flash")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5185\u90e8Flash\u306e\u5bb9\u91cf\u306f\u975e\u5e38\u306b\u5236\u9650\u3055\u308c\u3066\u306f\u3044\u307e\u3059\u304c\u3001\u753b\u50cf\u306e\u4e00\u90e8\u307e\u305f\u306f\u3059\u3079\u3066\u3092\u5185\u90e8Flash\u306b\u4fdd\u5b58\u3059\u308b\u30b1\u30fc\u30b9\u3082\u3042\u308a\u307e\u3059\u3002 \u30a2\u30af\u30bb\u30b9\u306f\u975e\u5e38\u306b\u9ad8\u901f\u306a\u306e\u3067\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u4e0d\u53ef\u6b20\u306a\u753b\u50cf\u304c\u3044\u304f\u3064\u304b\u3042\u308a\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u554f\u984c\u306b\u306a\u308b\u5834\u5408\uff08\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u3067\u4f7f\u7528\u3055\u308c\u308b\u5834\u5408\u306a\u3069\uff09\u306f\u3001\u53ef\u80fd\u3067\u3042\u308c\u3070\u5185\u90e8Flash\u3078\u306e\u4fdd\u5b58\u3092\u8a66\u3057\u3066\u307f\u308b\u4fa1\u5024\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5185\u90e8RAM")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u975e\u5e38\u306b\u7a00\u3067\u3059\u304c\u3001\u5185\u90e8RAM\u304b\u3089\u753b\u50cf\u3092\u63cf\u753b\u3059\u308b\u30b1\u30fc\u30b9\u304c\u3042\u308a\u307e\u3059\u3002 \u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u306f\u975e\u5e38\u306b\u5236\u9650\u3055\u308c\u307e\u3059\u304c\u3001\u30a2\u30af\u30bb\u30b9\u6642\u9593\u306f\u975e\u5e38\u306b\u901f\u3044\u306e\u3067\u3001\uff08TouchGFX Image Caching\u3092\u4f7f\u7528\u3057\u3066\uff09\u3053\u3053\u306b\u4fdd\u5b58\u3055\u308c\u305f\u753b\u50cf\u306f\u975e\u5e38\u306b\u9ad8\u901f\u3067\u63cf\u753b\u3055\u308c\u307e\u3059\u3002")))),(0,r.kt)("h3",m({},{id:"access-to-the-framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u30a2\u30af\u30bb\u30b9"),(0,r.kt)("p",null,"\u753b\u50cf\u3092\u63cf\u753b\u3059\u308b\u3068\u5fc5\u305a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 \u753b\u50cf\u306b\u30a2\u30eb\u30d5\u30a1\uff65\u30c1\u30e3\u30cd\u30eb\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u3001\u5b9f\u969b\u306b\u30d4\u30af\u30bb\u30eb\u3092\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306b\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3060\u3051\u3067\u306a\u304f\u3001\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u306e\u8aad\u53d6\u308a\u3082\u884c\u3044\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u4fdd\u5b58\u7528\u306b\u4f7f\u7528\u3057\u3066\u3044\u308bRAM\u3078\u306e\u8aad\u53d6\u308a / \u66f8\u8fbc\u307f\u30a2\u30af\u30bb\u30b9\u6642\u9593\u306f\u3001\u512a\u308c\u305f\u753b\u50cf\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5f97\u308b\u305f\u3081\u306e\u9375\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"image-resolution"}),"\u753b\u50cf\u89e3\u50cf\u5ea6"),(0,r.kt)("p",null,"\u8ee2\u9001\u304c\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u91cf\u306f\u753b\u50cf\u306e\u89e3\u50cf\u5ea6\u306b\u6bd4\u4f8b\u3059\u308b\u305f\u3081\u3001\u5fc5\u7136\u7684\u306b\u753b\u50cf\u89e3\u50cf\u5ea6\u306f\u753b\u50cf\u63cf\u753b\u64cd\u4f5c\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"transparency"}),"\u900f\u660e\u5ea6"),(0,r.kt)("p",null,"\u753b\u50cf\u306e\u4e0d\u900f\u660e\u5ea6\u306f\u3001\u753b\u50cf\u306e\u63cf\u753b\u6642\u9593\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002 \u30a2\u30eb\u30d5\u30a1\u5024\u306e\u3042\u308b\u753b\u50cf\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068\u306e\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u304c\u5fc5\u8981\u306b\u306a\u308b\u306e\u3067\u3001\u306a\u3044\u753b\u50cf\u3088\u308a\u3082\u63cf\u753b\u6642\u9593\u304c\u9577\u304f\u306a\u308a\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u64cd\u4f5c\u3067\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304b\u3089\u306e\u8aad\u53d6\u308a\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u5857\u308a\u3064\u3076\u3057\u753b\u50cf\u306e\u5834\u5408\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u30c7\u30fc\u30bf\u3092\u5358\u7d14\u306b\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3057\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u540c\u3058\u3067\u3059\u3002 \u305f\u3060\u3057\u3001\u5857\u308a\u3064\u3076\u3057\u753b\u50cf\u3068\u534a\u900f\u660e\u306e\u753b\u50cf\u306e\u63cf\u753b\u306e\u6bd4\u7387\u306f\u3001\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3054\u3068\u306b\u7570\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"mcu-drawing"}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u63cf\u753b"),(0,r.kt)("p",null,"\u4e00\u90e8\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u76f4\u63a5\u64cd\u4f5c\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u306f\u3001\u7121\u52b9\u306a\u9818\u57df\u3067\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306b1\u56de\u4ee5\u4e0a\u306e\u8a08\u7b97\u3092\u5b9f\u884c\u3057\u3066\u304b\u3089\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u305d\u306e\u30d4\u30af\u30bb\u30eb\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u304b\u306a\u308a\u6642\u9593\u304c\u304b\u304b\u308b\u64cd\u4f5c\u3067\u3001\u5404\u30d4\u30af\u30bb\u30eb\u306e\u8a08\u7b97\u304c\u8907\u96d1\u306a\u5834\u5408\u306f\u7279\u306b\u4f4e\u901f\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u63cf\u753b\u3067\u591a\u304f\u306e\u8a08\u7b97\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u51e6\u7406\u80fd\u529b\u304c\u4e0d\u53ef\u6b20\u3067\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u30a2\u30af\u30bb\u30b9\uff08\u5185\u90e8\u307e\u305f\u306f\u5916\u90e8RAM\u3078\u306e\u30a2\u30af\u30bb\u30b9\uff09\u3082\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30c7\u30fc\u30bf\u306e\u66f8\u8fbc\u307f\uff08\u304a\u3088\u3073\u8aad\u53d6\u308a\u3082\uff09\u304c\u3001\u7121\u52b9\u306a\u9818\u57df\u5185\u3067\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("h2",m({},{id:"canvas-widgets"}),"Canvas Widget\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff09"),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"../touchgfx-engine-features/canvas-widgets"}),"Canvas Widget"),"\u306f\u3001\u30a2\u30f3\u30c1\u30a8\u30a4\u30ea\u30a2\u30b9\u3055\u308c\u305f\u5e7e\u4f55\u5b66\u5f62\u72b6\u3092\u63cf\u753b\u3059\u308b\u3001\u7279\u6b8a\u306a\u30bf\u30a4\u30d7\u306eTouchGFX\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3059\u3002 \u901a\u5e38\u306f\u6975\u3081\u3066\u8907\u96d1\u306a\u306e\u3067\u3001\u63cf\u753b\u3082\u304b\u306a\u308a\u4f4e\u901f\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u63cf\u753b\u6642\u9593\u306f\u3001\u5e7e\u4f55\u5b66\u5f62\u72b6\u306e\u7121\u52b9\u306a\u90e8\u5206\u306e\u30b5\u30a4\u30ba\u3068\u76f4\u7dda\u7684\u306b\u6bd4\u4f8b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Canvas Widget\u306b\u306f\u3001\u8a08\u7b97\u306e\u4e2d\u9593\u7d50\u679c\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e\u30e1\u30e2\u30ea\uff65\u30d6\u30ed\u30c3\u30af\u304c\u5fc5\u8981\u3067\u3059\u3002 \u3053\u306e\u30d6\u30ed\u30c3\u30af\u306e\u30b5\u30a4\u30ba\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3078\u306e\u5f71\u97ff\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"../touchgfx-engine-features/canvas-widgets"}),"Canvas Widget\u306e\u30bb\u30af\u30b7\u30e7\u30f3"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{mdxType:"Tip"},"\u6a19\u6e96\u306eTouchGFX Canvas Widget\uff08Circle\u306a\u3069\uff09\u306e\u307b\u3068\u3093\u3069\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5909\u66f4\u90e8\u5206\u306e\u307f\u3092\u7121\u52b9\u5316\u3059\u308b\u66f4\u65b0\u65b9\u6cd5\u3092\u7528\u3044\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001\u305f\u3068\u3048\u3070Circle\u3092\u66f4\u65b0\u3059\u308b\u5834\u5408\u306f\u3001 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"circle::updateArc(...)\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),"\u3053\u306e\u65b9\u6cd5\u3067\u306f\u30b5\u30fc\u30af\u30eb\u5168\u4f53\u3092\u7121\u52b9\u5316\u305b\u305a\u306b\u3001\u5909\u66f4\u90e8\u5206\u306e\u307f\u3092\u7121\u52b9\u5316\u3057\u307e\u3059\u3002 \u6700\u9069\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5f97\u308b\u305f\u3081\u306b\u306f\u3001\u3053\u306e\u7a2e\u306e\u64cd\u4f5c\u3092\u5fc5\u305a\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",m({},{id:"texts"}),"\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u306e\u63cf\u753b\u306f\u753b\u50cf\u3092\u63cf\u753b\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3064\u307e\u308a\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"../touchgfx-engine-features/texts-and-fonts"}),"\u30c6\u30ad\u30b9\u30c8\u306e\u30bb\u30af\u30b7\u30e7\u30f3"),"\u3067\u793a\u3057\u305f\u3088\u3046\u306b\u3001\u4f7f\u7528\u3055\u308c\u308b\u6587\u5b57\u306f\u3059\u3079\u3066\u753b\u50cf\u306b\u5909\u63db\u3055\u308c\u308b\u304b\u3089\u3067\u3059\u3002 \u3053\u306e\u753b\u50cf\u306fA4\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3001\u57fa\u672c\u7684\u306b\u753b\u50cf\u5185\u306e\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306b4\u30d3\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002 \u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u8272\u3092\u9069\u7528\u3059\u308b\u3068\u3001\u30a2\u30f3\u30c1\u30a8\u30a4\u30ea\u30a2\u30b9\u51e6\u7406\u3055\u308c\u305f\u6587\u5b57\u306e\u753b\u50cf\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u306e\u63cf\u753b\u3067\u306f1\u6587\u5b57\u3054\u3068\u306b\u4e00\u9023\u306e\u753b\u50cf\u63cf\u753b\u64cd\u4f5c\u304c\u884c\u308f\u308c\u308b\u306e\u3067\u3001\u753b\u50cf\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u7279\u6027\u304c\u30c6\u30ad\u30b9\u30c8\u306e\u63cf\u753b\u306b\u3082\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u306b\u306f\u3001Chrom-ART / DMA2D\u306a\u3069\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u305f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u5411\u4e0a\u3082\u542b\u307e\u308c\u307e\u3059\u3002"))}b.isMDXComponent=!0}}]);