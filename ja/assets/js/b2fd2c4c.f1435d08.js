"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2755],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},32341:function(e,t,r){r.r(t),r.d(t,{assets:function(){return T},contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return b}});var n=r(3905),a=r(44035),o=r(93054),i=r(37793),l=r(22425),c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&m(e,r,t[r]);return e};const g={id:"scenarios-framebuffer-strategies",title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a"},v=void 0,y={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",id:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",permalink:"/4.19/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-framebuffer-strategies",title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a"},sidebar:"docs",previous:{title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",permalink:"/4.19/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"},next:{title:"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",permalink:"/4.19/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"}},T={},b=[{value:"\u30b7\u30f3\u30b0\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1",id:"single-frame-buffer",level:2},{value:"By Allocation",id:"by-allocation",level:3},{value:"By Address",id:"by-address",level:3},{value:"\u30c0\u30d6\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1",id:"double-frame-buffer",level:2},{value:"By Address",id:"by-address-1",level:3},{value:"By Allocation",id:"by-allocation-1",level:3},{value:"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1",id:"partial-frame-buffer",level:2}],k={toc:b};function x(e){var t,r=e,{components:c}=r,m=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},k),m),u(t,s({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308bTouchGFX HAL\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e",(0,n.kt)("a",h({parentName:"p"},{href:"../touchgfx-generator"}),"TouchGFX Generator"),"\u306e\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30b7\u30f3\u30b0\u30eb"),(0,n.kt)("li",{parentName:"ul"},"\u30c0\u30d6\u30eb"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206")),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",h({parentName:"p"},{href:"../../../basic-concepts/framebuffer#amount-of-framebuffers"}),"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-all-options.webp",width:"500",mdxType:"Figure"},"\u3059\u3079\u3066\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,n.kt)("h2",h({},{id:"single-frame-buffer"}),"\u30b7\u30f3\u30b0\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),(0,n.kt)("p",null,"\u30d0\u30c3\u30d5\u30a1\u306e\u8a2d\u5b9a\u3068\u3057\u3066",(0,n.kt)("em",{parentName:"p"},"\uff3bSingle Buffer\uff3d")," \u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30b3\u30f3\u30d1\u30a4\u30e9\u304c\u5185\u8535RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u7528\u30e1\u30e2\u30ea\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u3053\u306e\u30d0\u30c3\u30d5\u30a1\u7528\u306b\u7279\u5b9a\u306e\u5834\u6240\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("h3",h({},{id:"by-allocation"}),"By Allocation"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\uff3bBy Allocation\uff3d"),"\u3092\u9078\u629e\u3059\u308b\u3068\u3001TouchGFX Generator\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5bf8\u6cd5\u3068\u30d3\u30c3\u30c8\u6df1\u5ea6\u306b\u57fa\u3065\u3044\u305f\u914d\u5217\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-alloc.webp",width:"400",mdxType:"Figure"},"\uff3bSingle Buffer\uff3d\u3001\uff3bBy Allocation\uff3d"),(0,n.kt)("p",null,"\u3053\u306e\u914d\u5217\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3088\u3046\u306bHAL\u3092\u8a2d\u5b9a\u3059\u308b\u30b3\u30fc\u30c9\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{1-6,12}","{1-6,12}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker script\n    // to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)0, (void*)0);\n}\n')),(0,n.kt)("h3",h({},{id:"by-address"}),"By Address"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5834\u6240\u3068\u3057\u3066",(0,n.kt)("em",{parentName:"p"},"\uff3bBy Address\uff3d")," \uff3bBy Address\uff3d</525>\u3092\u9078\u629e\u3059\u308b\u3068\u3001TouchGFX Generator\u306fHAL\u521d\u671f\u5316\u6642\u306b\u6307\u5b9a\u3055\u308c\u305f\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-addr.webp",width:"400",mdxType:"Figure"},"\uff3bSingle Buffer\uff3d\u3001\uff3bBy Address\uff3d"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0, (void*)0);\n}\n")),(0,n.kt)("h2",h({},{id:"double-frame-buffer"}),"\u30c0\u30d6\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),(0,n.kt)("p",null,"\u30c0\u30d6\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u69cb\u6210\u306e\u5834\u5408\u3001\u9078\u629e\u3057\u305f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u3068\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u5fdc\u3058\u3066\u3001TouchGFX Generator\u306b\u3088\u308a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u30b9\u30ef\u30c3\u30d7\u3059\u308b\u30b3\u30fc\u30c9\u304cHAL\u5185\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u4f4d\u7f6e\u3078\u306e\u30e1\u30e2\u30ea\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306f\u3001\u30e1\u30a4\u30f3\uff65\u30a4\u30d9\u30f3\u30c8\uff65\u30eb\u30fc\u30d7\u3067TouchGFX\u30a8\u30f3\u30b8\u30f3\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h3",h({},{id:"by-address-1"}),"By Address"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\uff3bBy Address\uff3d")," \u3092\u9078\u629e\u3059\u308b\u3068\u3001TouchGFX Generator\u306fHAL\u521d\u671f\u5316\u6642\u306b\u6307\u5b9a\u3055\u308c\u305f2\u3064\u306e\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double.webp",width:"400",mdxType:"Figure"},"\uff3bDouble Buffer\uff3d\u3001\uff3bBy Address\uff3d"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0xC003FC00, (void*)0);\n}\n")),(0,n.kt)(i.Z,{mdxType:"Tip"},"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066\uff3b\u30d1\u30e9\u30ec\u30ebRGB (LTDC)\uff3d\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u306fLTDC\u30ec\u30a4\u30e4\u306e\u8a2d\u5b9a\u304b\u3089\u7d99\u627f\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(i.Z,{mdxType:"Tip"},"\uff3bBy Allocation\uff3d\u30e2\u30fc\u30c9\u3067\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066\u30d1\u30e9\u30ec\u30ebRGB (LTDC)\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u751f\u6210\u3055\u308c\u305fTouchGFX HAL\u304c\u5b9f\u884c\u6642\u306bLTDC\u306e\u30ec\u30a4\u30e4\uff65\u30ab\u30e9\u30fc\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3092\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3059\u308b\u306e\u3067\u3001\u30e6\u30fc\u30b6\u304cLTDC\u8a2d\u5b9a\u3067\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("h3",h({},{id:"by-allocation-1"}),"By Allocation"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\uff3bBy Allocation\uff3d"),"\u3092\u9078\u629e\u3059\u308b\u3068\u3001TouchGFX Generator\u306f\u3001\u30b7\u30f3\u30b0\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5834\u5408\u3068\u307e\u3063\u305f\u304f\u540c\u69d8\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5bf8\u6cd5\u3068\u30d3\u30c3\u30c8\u6df1\u5ea6\u306b\u57fa\u3065\u3044\u305f\u914d\u5217\u3092\u3001\u30b5\u30a4\u30ba\u30922\u500d\u306b\u3057\u3066\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double-alloc.webp",width:"400",mdxType:"Figure"},"\uff3bSingle Buffer\uff3d\u3001\uff3bBy Allocation\uff3d"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{1-5,11}","{1-5,11}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4 * 2] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf)/(sizeof(uint32_t)*2)), (void*)0);\n}\n')),(0,n.kt)("h2",h({},{id:"partial-frame-buffer"}),"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),(0,n.kt)("p",null,"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u3067\u306f\u3001TouchGFX\u306f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3068\u540c\u3058\u30b5\u30a4\u30ba\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002 \u4ee3\u308f\u308a\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\uff08\u6240\u5b9a\u306e\u30b5\u30a4\u30ba\u306e\uff09\u30d6\u30ed\u30c3\u30af\u306e\u6570\u3092\u30e6\u30fc\u30b6\u304c\u9078\u629e\u3067\u304d\u307e\u3059\u3002 TouchGFX\u306f",(0,n.kt)("em",{parentName:"p"},"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30a2\u30ed\u30b1\u30fc\u30bf"),"\uff65\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u30d6\u30ed\u30c3\u30af\u306e\u4f7f\u7528\u65b9\u6cd5\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u3067\u306f\u3001\u30e6\u30fc\u30b6\u306f\uff08\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u308b\uff09\u5916\u90e8\u30e1\u30e2\u30ea\u306b\u30dd\u30a4\u30f3\u30bf\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3001\u5185\u90e8\u30e1\u30e2\u30ea\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u914d\u5217\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u3082\u3057\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u6982\u5ff5\u306e\u6982\u8981\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",h({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),"\u300d\u306e\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(i.Z,{mdxType:"Tip"},"\u901a\u5e38\u3001STM32G0\u306a\u3069\u306e\u5c0f\u578b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u53ce\u5bb9\u3059\u308b\u306e\u306b\u5341\u5206\u306a\u5185\u8535RAM\u3092\u642d\u8f09\u3057\u3066\u3044\u307e\u305b\u3093\u3002 \u3053\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3059\u308b\u4f4e\u30b3\u30b9\u30c8\uff65\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u306f\u300c\u30d0\u30fc\u30b7\u30e3\u30eb\uff65\u30d0\u30c3\u30d5\u30a1\u300d\u304c\u6700\u9069\u3067\u3059\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/generator-partial-fb.webp",width:"400",mdxType:"Figure"},"\uff3b\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff3d"),(0,n.kt)("p",null,"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u304c\u63a1\u7528\u3055\u308c\u308b\u306e\u306f\u3001\u901a\u5e38\u3001TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u642d\u8f09\u305b\u305a\u3001\u5185\u8535RAM\u5bb9\u91cf\u304c\u5c0f\u3055\u3044\u4f4e\u30b3\u30b9\u30c8\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u5834\u5408\u306b\u9650\u3089\u308c\u308b\u305f\u3081\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5185\u5bb9\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3059\u308b\u6a5f\u80fd\u306f\u958b\u767a\u8005\u304c\u5b9f\u88c5\u3059\u308b\u3082\u306e\u3068\u60f3\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u642d\u8f09\u3057\u3066\u3044\u306a\u3044\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u30b7\u30ea\u30a2\u30eb\uff65\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306a\u3069\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",h({parentName:"p"},{href:"scenarios-fmc"}),"FMC / SPI\u30b7\u30ca\u30ea\u30aa"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u3066\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3092TouchGFX\u3068\u30ea\u30f3\u30af\u3055\u305b\u308b\u306b\u306f\u3001\u6b21\u306e2\u3064\u306e\u95a2\u6570\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u4ee5\u4e0b\u306b\u793a\u3059\u30b3\u30fc\u30c9\u306f\u3001CubeMX\u306b\u3088\u3063\u3066",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp"),"\u5185\u306b\u751f\u6210\u3055\u308c\u305f\u3082\u306e\u3067\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u3068\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30c9\u30e9\u30a4\u30d0\u9593\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'/* ******************************************************\n* Functions required by Partial Frame Buffer Strategy\n* ******************************************************\n*\n*  int touchgfxDisplayDriverTransmitActive() must return whether or not data is currently being transmitted, over e.g. SPI.\n*  void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h) will be called\n*  when the framework wants to send a block. The user must then transfer the data represented by the arguments.\n*/\n\nextern "C" int touchgfxDisplayDriverTransmitActive();\nextern "C" int touchgfxDisplayDriverShouldTransferBlock(uint16_t bottom);\nextern "C" void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h);\nextern "C" void touchgfxSignalVSync(void);\n')),(0,n.kt)("p",null,"TouchGFX Designer\u3067\u4f7f\u7528\u3067\u304d\u308bSTM32G071\u306eTouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u5834\u5408\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"Core/Src/MB1642BDisplayDriver.c"),"\u306b\u5b9f\u88c5\u3055\u308c\u307e\u3059\uff08\u3053\u3053\u3067\u306f1\u3064\u3060\u3051\u793a\u3057\u307e\u3059\uff09\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDisplayDriver.c"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"int touchgfxDisplayDriverTransmitActive(void)\n{\n return IsTransmittingBlock_;\n}\n")),(0,n.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u306b\u3088\u308a\u3001CubeMX\u3082\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp"),"\u306e\u8aad\u307f\u51fa\u3057\u5c02\u7528\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL"),"\u30af\u30e9\u30b9\u5185\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL::flushFrameBuffer(Rect&)"),"\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)(o.Z,{mdxType:"Note"},"\u3053\u306eflushFrameBuffer(Rect&)\u95a2\u6570\u306f\u3001TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u642d\u8f09\u3057\u3066\u3044\u306a\u3044\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u4e00\u822c\u7684\u306b\u4f7f\u7528\u3055\u308c\u308b\u3082\u306e\u3067\u3059\u3002 \u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5834\u5408\u3001TouchGFX Generator\u304c\u305d\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u5411\u3051\u306b\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306e\u5b9a\u7fa9\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n    // Try transmitting a block\n    PartialFrameBufferManager::tryTransmitBlock();\n}\n")))}x.isMDXComponent=!0}}]);