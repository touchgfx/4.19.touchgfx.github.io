"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3815],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=o,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=l},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return l}});var r=n(11368),o=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67381:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return f},metadata:function(){return T},toc:function(){return v},default:function(){return C}});var r=n(3905),o=n(44035),a=n(93054),l=n(70814),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&s(e,n,t[n]);return e};const g={id:"scenarios-ltdc-parallel-rgb",title:"LTDC / \u30d1\u30e9\u30ec\u30ebRGB"},f=void 0,T={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",id:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",isDocsHomePage:!1,title:"LTDC / \u30d1\u30e9\u30ec\u30ebRGB",description:"TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u5099\u3048\u305f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9(STM32F429\u3001STM32F746\u3001STM32H7\u306a\u3069)\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u3088\u3046\u306bLTDC\u3092\u8a2d\u5b9a\u3059\u308bHAL\u306e\u4e00\u90e8\u5206\u3092 TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3067\u304d\u307e\u3059\u3002 LTDC\u306b\u3088\u3063\u3066VSYNC\u5272\u8fbc\u307f\u304c\u751f\u6210\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u30b3\u30fc\u30c9\u304cOSWrappers::signalVSync()\u3092\u547c\u3073\u51fa\u3057\u3001\u9069\u5207\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001\u3092\u958b\u59cb\u3059\u308b\u3068\u3068\u3082\u306b\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",permalink:"/4.19/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",tags:[],version:"current",frontMatter:{id:"scenarios-ltdc-parallel-rgb",title:"LTDC / \u30d1\u30e9\u30ec\u30ebRGB"},sidebar:"docs",previous:{title:"Generator\u30e6\u30fc\u30b6\uff65\u30ac\u30a4\u30c9",permalink:"/4.19/ja/docs/development/touchgfx-hal-development/touchgfx-generator"},next:{title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",permalink:"/4.19/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"}},v=[{value:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",id:"display-interface",children:[],level:3},{value:"STM32CubeMX\u304b\u3089\u306e\u8a2d\u5b9a\u306e\u8aad\u51fa\u3057",id:"reading-settings-from-stm32cubemx",children:[],level:2},{value:"TouchGFX\u30c9\u30e9\u30a4\u30d0 / VSYNC\u4fe1\u53f7",id:"touchgfx-driver--vsync-signal",children:[],level:2},{value:"LTDC Frame Buffer configuration",id:"ltdc-frame-buffer-configuration",children:[],level:2},{value:"\u7d50\u8ad6",id:"conclusion",children:[],level:2}],k={toc:v};function C(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},k),s),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u5099\u3048\u305f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9(STM32F429\u3001STM32F746\u3001STM32H7\u306a\u3069)\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u3088\u3046\u306bLTDC\u3092\u8a2d\u5b9a\u3059\u308bHAL\u306e\u4e00\u90e8\u5206\u3092 ",(0,r.kt)("em",{parentName:"p"},"TouchGFX Generator"),"\u306b\u3088\u3063\u3066\u751f\u6210\u3067\u304d\u307e\u3059\u3002 LTDC\u306b\u3088\u3063\u3066VSYNC\u5272\u8fbc\u307f\u304c\u751f\u6210\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u30b3\u30fc\u30c9\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u3092\u547c\u3073\u51fa\u3057\u3001\u9069\u5207\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001\u3092\u958b\u59cb\u3059\u308b\u3068\u3068\u3082\u306b\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",h({},{id:"display-interface"}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"),(0,r.kt)("p",null,"\u958b\u767a\u8005\u304c\u30c9\u30e9\u30a4\u30d0\u5168\u4f53\u3092\u624b\u52d5\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\uff3bCustom\uff3d\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u306f\u7570\u306a\u308a\u3001LTDC\u306e\u5834\u5408\u306f\u3001TouchGFX HAL\u304cLTDC\u306e\u8a2d\u5b9a\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30b3\u30fc\u30c9\u3092\u3001TouchGFX Generator\u304c\u3059\u3079\u3066\u751f\u6210\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Generator\u3067\uff3bParallel RGB (LTDC)\uff3d\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001STM32CubeMX\u30ab\u30c6\u30b4\u30ea\uff65\u30ea\u30b9\u30c8\u306eMultimedia\u30b0\u30eb\u30fc\u30d7\u3067\u3001LTDC\u3092\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.png",mdxType:"Figure"}),(0,r.kt)("p",null,"LTDC\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3001TouchGFX Generator\u306eDisplay\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001 Parallel RGB (LTDC)\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.png",mdxType:"Figure"}),(0,r.kt)("p",null,"STM32CubeMX\u3067LTDC\u3092\u6709\u52b9\u5316\u3057\u3066\u3082\u3001\u4ee5\u4e0b\u3092\u884c\u3046\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u4f5c\u696d\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u63a5\u7d9a\u3059\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u4ed5\u69d8\u306b\u5408\u308f\u305b\u305fLTDC\u306e\u8a2d\u5b9a(GPIO\u3068\u30bf\u30a4\u30df\u30f3\u30b0)"),(0,r.kt)("li",{parentName:"ol"},"\u76ee\u7684\u3068\u3059\u308bTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4ed5\u69d8\u306b\u5408\u308f\u305b\u305fLTDC\u306e\u8a2d\u5b9a")),(0,r.kt)("p",null,"TouchGFX Generator\u306f\u3001STM32CubeMX\u304b\u3089\u5404\u7a2e\u8a2d\u5b9a\u3092\u8aad\u307f\u51fa\u3057\u3001\u4f9d\u5b58\u95a2\u4fc2\u3068\u547c\u3070\u308c\u308b\u3001\u8b66\u544a\u3001\u63a8\u5968\u4e8b\u9805\u3001\u307e\u305f\u306f\u30a8\u30e9\u30fc\u306e\u30ea\u30b9\u30c8\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u4e0b\u56f3\u306f\u3001CubeMX\u3067\u3001\u4efb\u610f\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9(\u3053\u306e\u4f8b\u3067\u306fSTM32F429) \u306b\u3064\u3044\u3066\u3001LTDC\u3092\u6700\u521d\u306b\u6709\u52b9\u5316\u3057\u305f\u3068\u304d\u306b\u8868\u793a\u3055\u308c\u308b\u4f9d\u5b58\u95a2\u4fc2\u306e\u30ea\u30b9\u30c8\u3067\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.png",mdxType:"Figure"}),(0,r.kt)(a.Z,{mdxType:"Note"},"STM32CubeMX\u3067LTDC\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3059\u3050\u306b\u3001TouchGFX Generator\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u3001LTDC\u306b\u95a2\u3059\u308b\u63a8\u5968\u4e8b\u9805\u3001\u8b66\u544a\u3001\u304a\u3088\u3073\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u4f9d\u5b58\u95a2\u4fc2"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Number of layers"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"TouchGFX\u306b\u306f\u3001\u5358\u4e00\u30ec\u30a4\u30e4\u306e\u307f\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002 TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30012\u3064\u306e\u30ec\u30a4\u30e4\u3092\u6709\u52b9\u5316\u3057\u3066\u3082\u52d5\u4f5c\u3057\u307e\u3059\u304c\u3001\u3053\u306e\u8b66\u544a\u306fLTDC\u306e\u8a2d\u5b9a\u30df\u30b9\u306e\u53ef\u80fd\u6027\u3092\u6307\u6458\u3057\u3066\u3044\u307e\u3059\u3002 LTDC\u30d6\u30ed\u30c3\u30af\u3067\u30ec\u30a4\u30e4\u6570\u3092\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Window position"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"By default, the Horizontal and Vertical window positions of the LTDC layer are 0. The window Horizontal and Vertical stop must be set equal to the displays dimensions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u30a2\u30eb\u30d5\u30a1\u5b9a\u6570\u306f0\u3067\u3059"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001LTDC\u30ec\u30a4\u30e4\u306e\u30a2\u30eb\u30d5\u30a1\u5b9a\u6570\u306f0\u3067\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30b0\u30ed\u30fc\u30d0\u30eb\uff65\u30a2\u30eb\u30d5\u30a1\u3092\u5e38\u6642\u4f7f\u7528\u3057\u306a\u3044\u304b\u304e\u308a\u3001\u3053\u306e\u5024\u306f0\u3088\u308a\u5927\u304d\u304f\u3001\u53ef\u80fd\u306a\u3089\u3070255\u3068\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,r.kt)("p",null,"\uff3bMultimedia\uff3d\u30bb\u30af\u30b7\u30e7\u30f3\u3067LTDC\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u3092\u6709\u52b9\u5316\u3057\u305f\u5f8c\u306b\u3001\u5b9f\u969b\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066\uff3bParallel RGB (LTDC)\uff3d\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.png",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6b21\u306e\u56f3\u306f\u3001\u8b66\u544a\u3092\u89e3\u6d88\u3059\u308b\u3088\u3046\u306bLTDC\u3092\u8a2d\u5b9a\u3057\u3001TouchGFX Generator\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\uff3bDependencies\uff3d\u30b0\u30eb\u30fc\u30d7\u304c\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u3063\u305f\u72b6\u614b\u3092\u793a\u3057\u3066\u3044\u307e\u3059"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.png",mdxType:"Figure"}),(0,r.kt)("h2",h({},{id:"reading-settings-from-stm32cubemx"}),"STM32CubeMX\u304b\u3089\u306e\u8a2d\u5b9a\u306e\u8aad\u51fa\u3057"),(0,r.kt)("p",null,"TouchGFX Generator\u3067\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066",(0,r.kt)("em",{parentName:"p"},"Parallel RGB (LTDC)")," \u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e",(0,r.kt)("em",{parentName:"p"},"\u5e45"),"\u3068",(0,r.kt)("em",{parentName:"p"},"\u9ad8\u3055"),"\u304c\u3001LTDC\u8a2d\u5b9a\u306e",(0,r.kt)("em",{parentName:"p"},"\u6c34\u5e73\u958b\u59cb / \u505c\u6b62\u4f4d\u7f6e"),"\u3068",(0,r.kt)("em",{parentName:"p"},"\u5782\u76f4\u958b\u59cb / \u505c\u6b62\u4f4d\u7f6e"),"\u304b\u3089\u7d99\u627f\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.png",mdxType:"Figure"}),(0,r.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5bf8\u6cd5\u306b\u5fdc\u3058\u3066\u30ec\u30a4\u30e4 ",(0,r.kt)("em",{parentName:"p"},"0"),"\u306e\u5bf8\u6cd5\u3092\u5b9a\u7fa9\u3059\u308b\u3068\u3001 ",(0,r.kt)("em",{parentName:"p"},"Dependency")," \u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u65b0\u3057\u3044\u30a8\u30f3\u30c8\u30ea\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.png",mdxType:"Figure"}),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e",(0,r.kt)("em",{parentName:"p"},"\u753b\u50cf\u306e\u5e45"),"\u3068",(0,r.kt)("em",{parentName:"p"},"\u753b\u50cf\u306e\u9ad8\u3055"),"\u304c\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30b5\u30a4\u30ba\u306b\u4e00\u81f4\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u901a\u5e38\u306f\u3001\u3053\u308c\u3089\u3092\u4e00\u81f4\u3055\u305b\u308b\u3053\u3068\u304c\u671b\u307e\u3057\u304f\u3001\u305d\u308c\u306b\u3088\u3063\u3066\u8b66\u544a\u306f\u89e3\u6d88\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.png",mdxType:"Figure"}),(0,r.kt)(l.Z,{mdxType:"Caution"},"TouchGFX Generator\u306f\u3001LTDC\u304c\u6709\u52b9\u306a\u5834\u5408\u3001LTDC\u8a2d\u5b9a\u306e",(0,r.kt)("b",null,"\u5e45"),"\u3068",(0,r.kt)("b",null,"\u9ad8\u3055"),"\u306e\u5024\u3092\u7d99\u627f\u3057\u307e\u3059\u3002 \u305f\u3060\u3057\u3001",(0,r.kt)("b",null,"\u5e45"),"\u3068",(0,r.kt)("b",null,"\u9ad8\u3055"),"\u306f\u3001TouchGFX Generator\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304b\u3089\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u3092\u30a6\u30a3\u30f3\u30c9\u30a6\u306eLTDC\u30ec\u30a4\u30e4\u8a2d\u5b9a\u3068\u7570\u306a\u308b\u5024\u306b\u5909\u66f4\u3059\u308b\u3068\u3001\u8a2d\u5b9a\u306e\u4e0d\u4e00\u81f4\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",h({},{id:"touchgfx-driver--vsync-signal"}),"TouchGFX\u30c9\u30e9\u30a4\u30d0 / VSYNC\u4fe1\u53f7"),(0,r.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066",(0,r.kt)("em",{parentName:"p"},"Parallel RGB (LTDC)"),"\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u958b\u767a\u8005\u306f",(0,r.kt)("em",{parentName:"p"},"LTDC"),"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\uff65\u30c9\u30e9\u30a4\u30d0\u307e\u305f\u306fTouchGFX\u30c9\u30e9\u30a4\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.png",width:"500",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u3001LTDC\u306e\u8a2d\u5b9a\u306b\u5f93\u3063\u3066\u751f\u6210\u3055\u308c\u308bLTDC\u5272\u8fbc\u307f\u3092\u51e6\u7406\u3059\u308b\u5272\u8fbc\u307f\u30cf\u30f3\u30c9\u30e9(STM32F7) \u3067\u3059\u3002 \u751f\u6210\u3055\u308c\u308b\u30cf\u30f3\u30c9\u30e9\u306f\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u3092\u81ea\u52d5\u7684\u306b\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),'extern "C"\nirq void LTDC_IRQHandler(void)\n{\n    if (LTDC->ISR & 1)\n    {\n        LTDC->ICR = 1;\n        if (LTDC->LIPCR == (LTDC->AWCR & 0x7FF) - 1)\n        {\n            //entering active area\n            OSWrappers::signalVSync();\n        }\n    }\n}\n')),(0,r.kt)(a.Z,{mdxType:"Note"},"LTDC\u30c9\u30e9\u30a4\u30d0\u3092\u6a5f\u80fd\u3055\u305b\u308b\u306b\u306f\u3001LTDC NVIC\u8a2d\u5b9a\u307e\u305f\u306f\u30b0\u30ed\u30fc\u30d0\u30ebNVIC\u8a2d\u5b9a\u3067\u3001LTDC\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u5272\u8fbc\u307f\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3068\u3082\u306b\u3001\u30cf\u30f3\u30c9\u30e9\uff65\u30b3\u30fc\u30c9\u306e\u751f\u6210\u3082\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.png",mdxType:"Figure"}),(0,r.kt)("h2",h({},{id:"ltdc-frame-buffer-configuration"}),"LTDC Frame Buffer configuration"),(0,r.kt)("p",null,"The generated TouchGFX HAL will automatically configure the LTDC Layer Color Frame Buffer Start Address at runtime, so you should not set a value in LTDC configuration."),(0,r.kt)("h2",h({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,r.kt)("p",null,"TouchGFX Generator\u3067\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066Parallel RGB (LTDC)\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3001\u5fc5\u8981\u306aHAL\u30b3\u30fc\u30c9\u304c\u3059\u3079\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u306eLTDC\u8a2d\u5b9a\u306b\u5f93\u3044\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5e45\u3001\u9ad8\u3055\u3001\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 LTDC\u30ec\u30a4\u30e4\u306e",(0,r.kt)("em",{parentName:"li"},"\u5e45"),"\u3068",(0,r.kt)("em",{parentName:"li"},"\u9ad8\u3055"),"\u306f\u3001TouchGFX Designer\u306e\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30b5\u30a4\u30ba\u306b\u3001LTDC\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u5fc5\u8981\u306aTouchGFX\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30c9\u30e9\u30a4\u30d0\u304a\u3088\u3073\u751f\u6210\u3055\u308c\u308b\u30a2\u30bb\u30c3\u30c8\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\uff65\u30bd\u30fc\u30b9\u306bLTDC\u3092\u9078\u629e\u3067\u304d\u3001\u3053\u308c\u306b\u3088\u308aTouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u99c6\u52d5\u3059\u308b\u30cf\u30f3\u30c9\u30e9\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002 LTDC\u8a2d\u5b9a\u306e\u5834\u5408\u3001\u901a\u5e38\u3001\u958b\u767a\u8005\u306f\u5e38\u306b\u63d0\u4f9b\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\uff65\u30c9\u30e9\u30a4\u30d0\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")))}C.isMDXComponent=!0}}]);