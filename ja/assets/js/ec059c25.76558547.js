"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4970],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(u,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),i=n(73727),a=n(11368),l=n(35096),o=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var p=n(25026),c=n(67023),s=Object.defineProperty,d=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))k.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:s,to:v,href:b,activeClassName:w,isActive:y,"data-noBrokenLinkCheck":N,autoAddBaseUrl:O=!0}=n,x=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:C,baseUrl:S}}=(0,a.Z)(),{withBaseUrl:T}=(0,p.C)(),j=(0,r.useContext)(u),E=v||b,F=(0,l.Z)(E),D=null==E?void 0:E.replace("pathname://","");let P=void 0!==D?(Z=D,O&&(e=>e.startsWith("/"))(Z)?T(Z):Z):void 0;var Z;P&&F&&(P=(0,c.applyTrailingSlash)(P,{trailingSlash:C,baseUrl:S}));const B=(0,r.useRef)(!1),G=s?i.OL:i.rU,M=o.Z.canUseIntersectionObserver,I=(0,r.useRef)();(0,r.useEffect)((()=>(!M&&F&&null!=P&&window.docusaurus.prefetch(P),()=>{M&&I.current&&I.current.disconnect()})),[I,P,M,F]);const A=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,V=!P||!F||A;return P&&F&&!A&&!N&&j.collectLink(P),V?r.createElement("a",h(h({href:P},E&&!F&&{target:"_blank",rel:"noopener noreferrer"}),x)):r.createElement(G,h((_=h({},x),d(_,g({onMouseEnter:()=>{B.current||null==P||(window.docusaurus.preload(P),B.current=!0)},innerRef:e=>{var t,n;M&&e&&F&&(t=e,n=()=>{null!=P&&window.docusaurus.prefetch(P)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:P||""}))),s&&{isActive:y,activeClassName:w}));var _}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return l}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),a="/"===i||i===r?i:(l=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(i,a)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},86016:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return v},metadata:function(){return h},toc:function(){return b},default:function(){return y}});var r=n(3905),i=n(44035),a=n(82985),l=n(29415),o=n(39130),u=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&m(e,n,t[n]);return e};const k={id:"config-view",title:"Config View\uff08\u8a2d\u5b9a\u30d3\u30e5\u30fc\uff09"},v=void 0,h={unversionedId:"development/ui-development/designer-user-guide/config-view",id:"development/ui-development/designer-user-guide/config-view",isDocsHomePage:!1,title:"Config View\uff08\u8a2d\u5b9a\u30d3\u30e5\u30fc\uff09",description:"\u8a2d\u5b9a\u30d3\u30e5\u30fc\u3067\u306f\u3001General\u3001Display\u3001Default Image Configuration\u3001Text Configuration\u3001Simulator\u3001Build\u3001Framework Features\u3068\u3044\u3063\u305f\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5f71\u97ff\u3059\u308b\u3055\u307e\u3056\u307e\u306a\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/config-view",permalink:"/4.19/ja/docs/development/ui-development/designer-user-guide/config-view",tags:[],version:"current",frontMatter:{id:"config-view",title:"Config View\uff08\u8a2d\u5b9a\u30d3\u30e5\u30fc\uff09"},sidebar:"docs",previous:{title:"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09",permalink:"/4.19/ja/docs/development/ui-development/designer-user-guide/texts-view"},next:{title:"Interactions\uff08\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\uff09",permalink:"/4.19/ja/docs/development/ui-development/designer-user-guide/interactions-view"}},b=[{value:"General\uff08\u4e00\u822c\uff09",id:"general",children:[],level:2},{value:"Display\uff08\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff09",id:"display",children:[],level:2},{value:"Default Image Configuration\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u753b\u50cf\u8a2d\u5b9a\uff09",id:"default-image-configuration",children:[],level:2},{value:"Text Configuration\uff08\u30c6\u30ad\u30b9\u30c8\u8a2d\u5b9a\uff09",id:"text-configuration",children:[],level:2},{value:"Simulator\uff08\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\uff09",id:"simulator",children:[],level:2},{value:"Build\uff08\u30d3\u30eb\u30c9\uff09",id:"build",children:[],level:2},{value:"Framework Features\uff08\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u6a5f\u80fd\uff09",id:"framework-features",children:[],level:2}],w={toc:b};function y(e){var t,n=e,{components:u}=n,m=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},w),m),p(t,c({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u8a2d\u5b9a\u30d3\u30e5\u30fc\u3067\u306f\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"#general"}),"General"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"#display"}),"Display"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"#default-image-configuration"}),"Default Image Configuration"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"#text-configuration"}),"Text Configuration"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"#simulator"}),"Simulator"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"#simulator"}),"Build"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"#framework-features"}),"Framework Features"),"\u3068\u3044\u3063\u305f\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5f71\u97ff\u3059\u308b\u3055\u307e\u3056\u307e\u306a\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.png",mdxType:"Figure"}," Config View\u3067\u306eGeneral\u306e\u8a2d\u5b9a"),(0,r.kt)("h2",f({},{id:"general"}),"General\uff08\u4e00\u822c\uff09"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.png",mdxType:"Figure"}," Config View\u3067\u306eGeneral\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Name"),(0,r.kt)("br",null)," Application Name\u306f\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30d5\u30a3\u30fc\u30eb\u30c9\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u6642\u306b\u4ed8\u3051\u3089\u308c\u305f\u540d\u524d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TouchGFX Board Setup"),(0,r.kt)("br",null)," \u3053\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3055\u308c\u305fTouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u8a72\u5f53\u3059\u308b\u60c5\u5831\u304c\u306a\u3044\u5834\u5408\u306f'N/A'\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",null)," \u8a72\u5f53\u3059\u308b\u60c5\u5831\u304c\u3042\u308b\u5834\u5408\u306f\u3001TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u540d\u524d\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selected Language"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306b\u306f",(0,r.kt)("a",f({parentName:"p"},{href:"texts-view"}),"Text View"),"\u3067\u8a2d\u5b9a\u3057\u305f\u8a00\u8a9e\u304c\u542b\u307e\u308c\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u59cb\u6642\u306b\u8868\u793a\u3055\u308c\u308b\u8a00\u8a9e\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Skin"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u306f\u3001\u30b9\u30bf\u30a4\u30eb\u306e\u8a2d\u5b9a\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u30012\u3064\u306e\u7d44\u8fbc\u307f\u30b9\u30bf\u30a4\u30eb\u306e\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u9078\u629e\u80a2\u306f'Blue'\u3068'Dark'\u3067\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u3001'Blue'\u30b9\u30ad\u30f3\u306b\u3088\u308b\u30b9\u30bf\u30a4\u30eb\u3067\u8a2d\u5b9a\u6e08\u307f\u306e\u5834\u5408\u3001\u30b9\u30ad\u30f3\u304c'Dark'\u306b\u5909\u66f4\u3055\u308c\u308b\u3068\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f'Dark'\u30b9\u30ad\u30f3\u5185\u306e\u5bfe\u5fdc\u3059\u308b\u30b9\u30bf\u30a4\u30eb\u306b\u81ea\u52d5\u7684\u306b\u5207\u308a\u66ff\u308f\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Startup Screen"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306b\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u304c\u542b\u307e\u308c\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u59cb\u6642\u306b\u8868\u793a\u3055\u308c\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",f({},{id:"display"}),"Display\uff08\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff09"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.png",mdxType:"Figure"}," Config View\u3067\u306eDisplay\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dimensions"),(0,r.kt)("br",null)," \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30b5\u30a4\u30ba\u306f\u3001W\uff08\u5e45\uff09\u30d7\u30ed\u30d1\u30c6\u30a3\u3068H\uff08\u9ad8\u3055\uff09\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u3067\u30b5\u30a4\u30ba\u304c\u8a2d\u5b9a\u6e08\u307f\u306e\u5834\u5408\u3001\u30b5\u30a4\u30ba\u306e\u8a2d\u5b9a\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display Orientation"),(0,r.kt)("br",null)," \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5411\u304d\u3092\u7e26\u5411\u304d\u3068\u6a2a\u5411\u304d\u306e\u9593\u3067\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u4f7f\u7528\u3055\u308c\u308b\u753b\u50cf\u304ccpp\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3055\u308c\u308b\u65b9\u6cd5\u306b\u3082\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Color Depth"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306b\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u8272\u6df1\u5ea6\u304c\u542b\u307e\u308c\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3055\u308c\u308bTouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306b\u3088\u3063\u3066\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",f({},{id:"default-image-configuration"}),"Default Image Configuration\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u753b\u50cf\u8a2d\u5b9a\uff09"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u753b\u50cf\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u306f\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"images-view"}),"Images View"),"\u3067\u4e0a\u66f8\u304d\u3055\u308c\u306a\u3044\u9650\u308a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u753b\u50cf\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.png",mdxType:"Figure"},"Config View\u3067\u306eDefault Image Configuration\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Opaque Image Format"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u306f\u3001\u4e0d\u900f\u660e\u306a\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u306e\u307f\u3092\u6301\u3064\u753b\u50cf\u306e\u751f\u6210\u306b\u4f7f\u7528\u3059\u308b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u9078\u629e\u53ef\u80fd\u306a\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u9078\u629e\u3055\u308c\u305f\u8272\u6df1\u5ea6\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Non Opaque Image Format"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u306f\u3001\u900f\u660e\u306a\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092\u6301\u3064\u753b\u50cf\u306e\u751f\u6210\u306b\u4f7f\u7528\u3059\u308b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u9078\u629e\u53ef\u80fd\u306a\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u9078\u629e\u3055\u308c\u305f\u8272\u6df1\u5ea6\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Section"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u306f\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u306e\u753b\u50cf\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58\u5834\u6240\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u9078\u629e\u53ef\u80fd\u306a\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u6642\u306eTouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extra Section"),(0,r.kt)("br",null)," L8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ab\u30e9\u30fc\uff65\u30c6\u30fc\u30d6\u30eb\u3092\u5225\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u9078\u629e\u53ef\u80fd\u306a\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u6642\u306eTouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dither Algorithm"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u306f\u3001\u753b\u50cf\u306b\u5bfe\u3057\u3066\u4f7f\u7528\u3059\u308b\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\uff65\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No dither: \u753b\u50cf\u306b\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\u306f\u9069\u7528\u3055\u308c\u307e\u305b\u3093\u3002 \u4f55\u3082\u5909\u66f4\u304c\u884c\u308f\u308c\u306a\u3044\u306e\u3067\u3001\u6700\u3082\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u9ad8\u3044\u8a2d\u5b9a\u3067\u3059\u3002 \u305f\u3060\u3057\u753b\u50cf\u306b\u3088\u3063\u3066\u306f\u3001\u8272\u6df1\u5ea6\u304c\u4f4e\u3044\u5834\u5408\u306b\u753b\u50cf\u306e\u8996\u899a\u7684\u54c1\u8cea\u304c\u4f4e\u4e0b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"Floyd-Steinberg: \u96a3\u63a5\u3059\u308b\u30d4\u30af\u30bb\u30eb\u306b\u8aa4\u5dee\u3092\u62e1\u6563\u3055\u305b\u3001\u304d\u3081\u7d30\u304b\u3044\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u9bae\u660e\u3055\u304c\u72a0\u7272\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"Jarvis, Judice and Ninke: Floyd-Steinberg\u3088\u308a\u3082\u4e00\u6b69\u5148\u306e\u30d4\u30af\u30bb\u30eb\u307e\u3067\u8aa4\u5dee\u3092\u62e1\u6563\u3055\u305b\u3001\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\u306e\u304d\u3081\u304c\u7c97\u304f\u306a\u308a\u307e\u3059\u304c\u3001\u9bae\u660e\u306a\u753b\u50cf\u306b\u306a\u308a\u307e\u3059\u3002 3\u3064\u306e\u8aa4\u5dee\u62e1\u6563\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\uff65\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u4e2d\u3067\u6700\u3082\u4f4e\u901f\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"Stucki: \u6700\u5c0f\u9650\u306e\u5e73\u5747\u8aa4\u5dee\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\u306b\u57fa\u3065\u3044\u3066\u304a\u308a\u3001\u9ad8\u901f\u3067\u304f\u3063\u304d\u308a\u3068\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alpha Dither"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u306f\u3001\u30a2\u30eb\u30d5\u30a1\uff65\u30c1\u30e3\u30cd\u30eb\u3092\u4ecb\u3057\u3066\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\uff65\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Layout Rotaion"),(0,r.kt)("br",null)," \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u306f\u3001\u751f\u6210\u6642\u306b\u753b\u50cf\u30c7\u30fc\u30bf\u306e\u56de\u8ee2\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30fc\u30f3\u306e\u5411\u304d\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u3001\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044\u5411\u304d\u3067\u6b63\u3057\u304f\u753b\u50cf\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",f({},{id:"text-configuration"}),"Text Configuration\uff08\u30c6\u30ad\u30b9\u30c8\u8a2d\u5b9a\uff09"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30cb\u30fc\u30ba\u306b\u5408\u3046\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30aa\u30f3\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3068\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.png",mdxType:"Figure"},"Config View\u3067\u306eText Configuration\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remap texts"),(0,r.kt)("br",null)," \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u540c\u4e00\u306e\u7ffb\u8a33\u3092\u518d\u5272\u308a\u5f53\u3066\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u3092\u518d\u5272\u308a\u5f53\u3066\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u8a00\u8a9e\u3001\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3001\u30a2\u30e9\u30a4\u30e1\u30f3\u30c8\u3067\u540c\u4e00\u306e\u7ffb\u8a33\u3068\u63a5\u5c3e\u8f9e\u304c\u7d50\u5408\u3055\u308c\u3001\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u304c\u7e2e\u5c0f\u3057\u307e\u3059\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001Binary translation files\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u306f\u540c\u6642\u306b\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\uff08\u76f8\u4e92\u6392\u4ed6\u7684\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A4"),(0,r.kt)("br",null)," \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30b0\u30ea\u30d5\uff65\u30d0\u30a4\u30c8\u306e\u6c34\u5e73\u65b9\u5411\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092A4\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5408\u308f\u305b\u308b\u304b\u3069\u3046\u304b\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u30024bpp\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u307f\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binary translation files"),(0,r.kt)("br",null)," \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u7ffb\u8a33\u3092\u3001\u5b9f\u884c\u6642\u306b\u8aad\u307f\u8fbc\u307f\u53ef\u80fd\u306a\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u79fb\u52d5\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001Remap texts\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u306f\u540c\u6642\u306b\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\uff08\u76f8\u4e92\u6392\u4ed6\u7684\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binary font files"),(0,r.kt)("br",null)," \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u3001\u5b9f\u884c\u6642\u306b\u8aad\u307f\u8fbc\u307f\u53ef\u80fd\u306a\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u79fb\u52d5\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mapped storage format"),(0,r.kt)("br",null)," \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u30de\u30c3\u30d7\u30c9\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u51fa\u529b\u3059\u308b\u5834\u5408\u306b\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unmapped storage format"),(0,r.kt)("br",null)," \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u975e\u30de\u30c3\u30d7\u30c9\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u51fa\u529b\u3059\u308b\u5834\u5408\u306b\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"\u30c6\u30ad\u30b9\u30c8\u3068\u30d5\u30a9\u30f3\u30c8")),(0,r.kt)("h2",f({},{id:"simulator"}),"Simulator\uff08\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\uff09"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u5b9f\u884c\u6642\u306b\u30b9\u30ad\u30f3\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002 \u30b9\u30ad\u30f3\u306f\u7e26\u5411\u304d\u3068\u6a2a\u5411\u304d\u306e\u3069\u3061\u3089\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3082\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002 X\u304a\u3088\u3073Y\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30b9\u30ad\u30f3\u4e0a\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u4f4d\u7f6e\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.png",mdxType:"Figure"}," Config View\u3067\u306eSimulator\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u30b9\u30ad\u30f3\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u4e2d\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u30c7\u30e2\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30b9\u30ad\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u6a19\u6e96\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u306f\u975e\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002 \u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u9589\u3058\u308b\u306b\u306f ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Esc\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002")),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",mdxType:"Figure"},"\u30b9\u30ad\u30f3\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u4e2d\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf"),(0,r.kt)("h2",f({},{id:"build"}),"Build\uff08\u30d3\u30eb\u30c9\uff09"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"main-window#run-simulator"}),"'Run Simulator'"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"main-window#run-target"}),"'Run Target'"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"main-window#generate-code"}),"'Generate Code'"),"\u3092\u62bc\u3057\u305f\u3068\u304d\u306b\u5b9f\u884c\u3055\u308c\u305f\u30b3\u30de\u30f3\u30c9\u3092\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u3092\u4e0a\u66f8\u304d\u3059\u308b\u306b\u306f\u3001\u5358\u7d14\u306b\u30c6\u30ad\u30b9\u30c8\uff65\u30dc\u30c3\u30af\u30b9\u306b\u4efb\u610f\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5165\u529b\u3057\u307e\u3059\u3002 \u30b3\u30de\u30f3\u30c9\u3092\u30ea\u30bb\u30c3\u30c8\u3059\u308b\u306b\u306f\u3001\u4e0a\u66f8\u304d\u6e08\u307f\u306e\u5834\u5408\u306f\u3001\u30b3\u30de\u30f3\u30c9\u540d\u306e\u6a2a\u306e'Reset'\u30e9\u30d9\u30eb\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.png",mdxType:"Figure"}," Config View\u3067\u306eBuild\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate Assets Command"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u901a\u5e38\u306f\u30c6\u30ad\u30b9\u30c8\uff65\u30a2\u30bb\u30c3\u30c8\u3068\u753b\u50cf\u30a2\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u8a2d\u5b9a\u3055\u308c\u3001TouchGFX Designer\u304c\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u305f\u5f8c\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post Generate Command"),(0,r.kt)("br",null)," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u901a\u5e38\u306f\u3055\u307e\u3056\u307e\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u7d44\u8fbc\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx update_project"),"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\uff65\u30c4\u30fc\u30eb\u306f\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio\uff08.vcxproj\uff09"),(0,r.kt)("li",{parentName:"ul"},"Keil\uff08.uvprojx\uff09"),(0,r.kt)("li",{parentName:"ul"},"IAR\uff08.ewp & .ipcf\uff09"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeIDE\uff08.project & .cproject\uff09"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\uff08.ioc\uff09")),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001\u30b3\u30fc\u30c9\u751f\u6210\u5f8c\u306b\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u30b3\u30de\u30f3\u30c9\u3092\u3001\u3053\u3053\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Simulator Command"),(0,r.kt)("br",null)," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u901a\u5e38\u306fTouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305fMakefile\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3053\u308c\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run Simulator Command"),(0,r.kt)("br",null)," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001simulator.exe\u306e\u8d77\u52d5\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post Generate Target Command"),(0,r.kt)("br",null)," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u901a\u5e38\u306f\u3055\u307e\u3056\u307e\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\uff08\u4e3b\u306bSTM32CubeMX\uff08.ioc\uff09\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\uff09\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001\u30b3\u30fc\u30c9\u751f\u6210\u5f8c\u306b\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u30b3\u30de\u30f3\u30c9\u3092\u3001\u3053\u3053\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Target Command"),(0,r.kt)("br",null)," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flash Target Command"),(0,r.kt)("br",null)," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30e9\u30c3\u30b7\u30e5\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",f({},{id:"framework-features"}),"Framework Features\uff08\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u6a5f\u80fd\uff09"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u5185\u306e\u6a5f\u80fd\uff08\u7279\u306b\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff09\u3092\u6709\u52b9\u5316 / \u7121\u52b9\u5316\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u5360\u6709\u3059\u308b\u30b3\u30fc\u30c9\u306e\u30b5\u30a4\u30ba\u3092\u6700\u9069\u5316\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u8868\u793a\u3055\u308c\u308b\u9078\u629e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066\u9078\u629e\u3055\u308c\u305f\u8272\u6df1\u5ea6\u306b\u5fdc\u3058\u3066\u7570\u306a\u308a\u307e\u3059\u3002 \u4e0b\u306e\u753b\u50cf\u306b\u306f\u3001\u8272\u6df1\u5ea6\u304c24bit\u306e\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u5411\u3051\u306e\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.png",mdxType:"Figure"},"Config View\u3067\u306e24bpp\u7528\u306eFramework Features\u306e\u8a2d\u5b9a"))}y.isMDXComponent=!0}}]);