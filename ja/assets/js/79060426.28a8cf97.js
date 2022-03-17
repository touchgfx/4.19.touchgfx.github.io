"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3898],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&v(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:p,to:v,href:b,activeClassName:y,isActive:G,"data-noBrokenLinkCheck":N,autoAddBaseUrl:T=!0}=n,O=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:x}}=(0,o.Z)(),{withBaseUrl:C}=(0,u.C)(),E=(0,r.useContext)(c),B=v||b,F=(0,i.Z)(B),R=null==B?void 0:B.replace("pathname://","");let j=void 0!==R?(A=R,T&&(e=>e.startsWith("/"))(A)?C(A):A):void 0;var A;j&&F&&(j=(0,s.applyTrailingSlash)(j,{trailingSlash:w,baseUrl:x}));const D=(0,r.useRef)(!1),P=p?a.OL:a.rU,S=l.Z.canUseIntersectionObserver,X=(0,r.useRef)();(0,r.useEffect)((()=>(!S&&F&&null!=j&&window.docusaurus.prefetch(j),()=>{S&&X.current&&X.current.disconnect()})),[X,j,S,F]);const _=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,Z=!j||!F||_;return j&&F&&!_&&!N&&E.collectLink(j),Z?r.createElement("a",k(k({href:j},B&&!F&&{target:"_blank",rel:"noopener noreferrer"}),O)):r.createElement(P,k((L=k({},O),d(L,m({onMouseEnter:()=>{D.current||null==j||(window.docusaurus.preload(j),D.current=!0)},innerRef:e=>{var t,n;S&&e&&F&&(t=e,n=()=>{null!=j&&window.docusaurus.prefetch(j)},X.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(X.current.unobserve(t),X.current.disconnect(),n())}))})),X.current.observe(t))},to:j||""}))),p&&{isActive:G,activeClassName:y}));var L}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},21910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return k},toc:function(){return b},default:function(){return G}});var r=n(3905),a=n(44035),o=n(22425),i=n(29415),l=n(39130),c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&g(e,n,t[n]);return e};const f={id:"scenarios-change-pixelformat-bpp",title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4"},v=void 0,k={unversionedId:"development/scenarios/scenarios-change-pixelformat-bpp",id:"development/scenarios/scenarios-change-pixelformat-bpp",isDocsHomePage:!1,title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u5f8c\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002 \u3053\u306e\u8a18\u4e8b\u3067\u306f\u5177\u4f53\u7684\u306b\u3001TouchGFX Generator\u3092\u4f7f\u7528\u3057\u306624bit RGB888\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u309216bit RGB565\u306b\u5909\u66f4\u3059\u308b\u4f8b\u3092\u6319\u3052\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u3078\u306e\u5f71\u97ff\u306b\u3064\u3044\u3066\u3082\u793a\u3057\u307e\u3059\u3002 \u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5909\u66f4\u3059\u308b\u7406\u7531\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-change-pixelformat-bpp.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-change-pixelformat-bpp",permalink:"/4.19/ja/docs/development/scenarios/scenarios-change-pixelformat-bpp",tags:[],version:"current",frontMatter:{id:"scenarios-change-pixelformat-bpp",title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4"},sidebar:"docs",previous:{title:"\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u7528\u306b\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u3092\u4f7f\u7528",permalink:"/4.19/ja/docs/development/scenarios/fonts-in-unmapped-flash"},next:{title:"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210",permalink:"/4.19/ja/docs/development/scenarios/scenarios-create-at"}},b=[{value:"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052",id:"board-bring-up",children:[],level:2},{value:"HAL\u306e\u958b\u767a",id:"hal-development",children:[],level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",children:[],level:2},{value:"\u307e\u3068\u3081",id:"conclusion",children:[],level:2}],y={toc:b};function G(e){var t,n=e,{components:c}=n,g=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),g),u(t,s({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u5f8c\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002 \u3053\u306e\u8a18\u4e8b\u3067\u306f\u5177\u4f53\u7684\u306b\u3001TouchGFX Generator\u3092\u4f7f\u7528\u3057\u306624bit RGB888\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u309216bit RGB565\u306b\u5909\u66f4\u3059\u308b\u4f8b\u3092\u6319\u3052\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u3078\u306e\u5f71\u97ff\u306b\u3064\u3044\u3066\u3082\u793a\u3057\u307e\u3059\u3002 \u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5909\u66f4\u3059\u308b\u7406\u7531\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u8981\u4ef6\u304c\u5909\u66f4\u3055\u308c\u305f"),(0,r.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8981\u4ef6\u304c\u5909\u66f4\u3055\u308c\u305f"),(0,r.kt)("li",{parentName:"ol"},"\u521d\u671f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u6642\u306b\u30df\u30b9\u304c\u3042\u3063\u305f")),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u300c",(0,r.kt)(l.Z,{to:"../../basic-concepts/color-formats",mdxType:"Link"},"\u30ab\u30e9\u30fc\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),"\u300d\u306e\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u5909\u66f4\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052"),"\uff1a LTDC\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HAL\u306e\u958b\u767a"),"\uff1a TouchGFX Generator\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u3001LTDC\u8a2d\u5b9a\u307e\u305f\u306f\u30e1\u30e2\u30ea\u5185\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u4f4d\u7f6e\u3092\u53cd\u6620"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer"),"\uff1a Designer\u304c\u3053\u306e\u65b0\u3057\u3044\u5909\u63db\u5f8c\u306e\u30d3\u30c3\u30c8\u6df1\u5ea6\u3068\u753b\u50cf\u30a2\u30bb\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u6b63\u3057\u3044\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d")),(0,r.kt)("p",null,"Designer\u3067\u64cd\u4f5c\u3092\u958b\u59cb\u3057\u3001Display\u3068Image\u306e\u73fe\u5728\u306e\u8a2d\u5b9a\u3092\u8abf\u3079\u307e\u3059\u3002\u5f8c\u3067\u691c\u8a3c\u306e\u305f\u3081\u306b\u3053\u308c\u3089\u306e\u753b\u9762\u306b\u623b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-4-17.png",width:"600",mdxType:"Figure"},"Image\u306e\u8a2d\u5b9a\u306fRGB888"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-4-17.png",width:"600",mdxType:"Figure"},"Display\u306e\u8a2d\u5b9a\u306f24bit"),(0,r.kt)("h2",h({},{id:"board-bring-up"}),"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052"),(0,r.kt)("p",null,"LTDC\u3067\u3088\u304f\u3042\u308b\u3088\u3046\u306b\u3001STM32CubeMX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7279\u5b9a\u306e\u8a2d\u5b9a\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u76ee\u7684\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5f71\u97ff\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u5834\u5408\u3001\u958b\u767a\u8005\u306f\u3053\u3053\u3067\u9069\u5207\u306a\u5909\u66f4\u3092\u884c\u3044\u3001LTDC\u306b\u3088\u3063\u3066\u60f3\u5b9a\u3055\u308c\u308b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3001TouchGFX\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u884c\u3046\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u3001\u6709\u52b9\u306a\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u8a2d\u5b9a\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)(l.Z,{to:"../touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"LTDC"),"\u300d\u306e\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",h({},{id:"hal-development"}),"HAL\u306e\u958b\u767a"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u4e00\u7dd2\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30c3\u30c8\u6df1\u5ea6\u304c\u5909\u66f4\u3055\u308c\u308b\u5834\u5408\uff08\u305f\u3068\u3048\u3070\u3001ARGB2222\u304b\u3089BRGA2222\u3078\u306e\u5909\u66f4\u3067\u306f8bit\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u307e\u307e\u3067\u3059\uff09\u3001\u958b\u767a\u8005\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30e1\u30e2\u30ea\u4f4d\u7f6e\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b",(0,r.kt)("em",{parentName:"p"},"\u53ef\u80fd\u6027"),"\u304c\u3042\u308a\u307e\u3059\u3002 \u4ee5\u4e0b\u306b\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-chage-px-fmt.png",width:"400",mdxType:"Figure"},"\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4"),(0,r.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u3066\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u3068\u300116bit\u306eTouchGFX ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD"),"\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration"),"\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"static LCD16bpp display;\n")),(0,r.kt)("p",null,"TouchGFX Designer\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f\u3068\u3001\u958b\u767a\u8005\u306f\u3001\u66f4\u65b0\u3092\u884c\u3063\u3066\u65b0\u3057\u304f\u751f\u6210\u3055\u308c\u305f\u8a2d\u5b9a\u5909\u66f4\u3092\u53cd\u6620\u3059\u308b\u3088\u3046\u306b\u6c42\u3081\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-json",metastring:"{7-8}","{7-8}":!0}),'{\n  "image_configuration": {\n    "images": {},\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB565",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  },\n')),(0,r.kt)("p",null,"\u6b21\u306e\u30c6\u30fc\u30d6\u30eb\u306f\u3001\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u3088\u308b\u4e0d\u900f\u660e / \u900f\u660e\u306a\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3078\u306e\u5f71\u97ff\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u4e0d\u900f\u660e\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u900f\u660e\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888")))),(0,r.kt)("h2",h({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)("p",null,"STM32CubeMX\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u65b0\u3057\u3044TouchGFX Generator\u306e\u8a2d\u5b9a\u306b\u57fa\u3065\u3044\u3066TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u66f4\u65b0\u3055\u308c\u305f\u5f8c\u3001\u958b\u767a\u8005\u306fTouchGFX Designer\u306e\u8a2d\u5b9a\u304c\u5408\u81f4\u3059\u308b\u3088\u3046\u306b\u5909\u66f4\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-16bpp-4-17.png",width:"600",mdxType:"Figure"},"Image\u306e\u8a2d\u5b9a\u306fRGB565"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-16bpp-4-17.png",width:"600",mdxType:"Figure"},"Display\u306e\u8a2d\u5b9a\u306f16bit"),(0,r.kt)("p",null,"TouchGFX Designer\u306b\u3088\u3063\u3066\u30b3\u30fc\u30c9\u304c\u751f\u6210\u3055\u308c\u308b\u3068\u3001\u753b\u50cf\u30a2\u30bb\u30c3\u30c8\u306e\u30b3\u30fc\u30c9\u306b\u66f4\u65b0\u5f8c\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u53cd\u6620\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX\\generated\\images\\src\\my_image.png"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'LOCATION_PRAGMA("ExtFlashSection")\nKEEP extern const unsigned char my_image[] LOCATION_ATTRIBUTE("ExtFlashSection") = // 320x240 RGB565 pixels.\n')),(0,r.kt)("h2",h({},{id:"conclusion"}),"\u307e\u3068\u3081"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u73fe\u5728\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001TouchGFX Generator\u3092\u4f7f\u7528\u3057\u3066\u7c21\u5358\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002 LTDC\u642d\u8f09\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u5834\u5408\u3001TouchGFX\u3092\u5b9f\u884c\u3059\u308b\u30ec\u30a4\u30e4\u3092\u3001TouchGFX Generator\u306e\u8a2d\u5b9a\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff08LTDC\u306e\u5834\u5408\u306fRGB565\u3068RGB888\u306b\u9650\u5b9a\u3055\u308c\u308b\uff09\u3068\u4e00\u81f4\u3055\u305b\u3066\u3001TouchGFX Core\u306b\u3088\u308b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u6e96\u62e0\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"STM32CubeMX\u306b\u3088\u3063\u3066\u30b3\u30fc\u30c9\u304c\u751f\u6210\u3055\u308c\u305f\u5f8c\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002TouchGFX Designer\u3067\u306e\u5f8c\u7d9a\u306e\u30b3\u30fc\u30c9\u751f\u6210\u6642\u306b\u306f\u3001\u753b\u50cf\u30a2\u30bb\u30c3\u30c8\u3068\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30c9\u30e9\u30a4\u30d0\u306e\u4e21\u65b9\u304c\u6307\u5b9a\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6301\u3064\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"))}G.isMDXComponent=!0}}]);