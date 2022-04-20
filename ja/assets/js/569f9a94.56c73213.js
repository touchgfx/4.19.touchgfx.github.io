"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[982],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},10294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return h}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const d={id:"ui-development-introduction",title:"UI\u958b\u767a\u306e\u6982\u8981"},f=void 0,g={unversionedId:"development/ui-development/ui-development-introduction",id:"development/ui-development/ui-development-introduction",title:"UI\u958b\u767a\u306e\u6982\u8981",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-development-introduction.mdx",sourceDirName:"development/ui-development",slug:"/development/ui-development/ui-development-introduction",permalink:"/4.19/ja/docs/development/ui-development/ui-development-introduction",tags:[],version:"current",frontMatter:{id:"ui-development-introduction",title:"UI\u958b\u767a\u306e\u6982\u8981"},sidebar:"docs",previous:{title:"MIPI-DSI Video Mode",permalink:"/4.19/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"},next:{title:"Software Architecture",permalink:"/4.19/ja/docs/category/software-architecture"}},v={},h=[],y={toc:h};function b(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},y),m),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-development-introduction/activities-selected-003.png",noShadow:!0,width:"600",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6a5f\u80fd\u7684\u306aUI\u306e\u958b\u767a\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u304c\u6700\u9069\u306a\u72b6\u614b\u3067\u7d44\u307f\u8fbc\u307e\u308c\u305f\u88fd\u54c1\u3092\u751f\u3080\u305f\u3081\u306b\u4e0d\u53ef\u6b20\u306a\u90e8\u5206\u3067\u3042\u308b\u305f\u3081\u3001TouchGFX\u306f\u3001\u9ad8\u901f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3060\u3051\u3067\u306a\u304f\u3001\u5186\u6ed1\u306a\u958b\u767a\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"UI\u958b\u767a\u306e\u7ae0\u3067\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u65b9\u6cd5\u306e\u8a73\u7d30\u306b\u91cd\u70b9\u3092\u7f6e\u3044\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"software-architecture/model-view-presenter-design-pattern"}),(0,r.kt)("strong",{parentName:"a"},"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"))," - TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068\u8a2d\u8a08\u3001\u304a\u3088\u3073TouchGFX Designer\u306b\u3088\u308a\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u306e\u95a2\u4fc2\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"working-with-touchgfx/using-ides-with-touchgfx"}),(0,r.kt)("strong",{parentName:"a"},"TouchGFX\u306e\u64cd\u4f5c"))," - TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3068\u3001\u305d\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u4f7f\u7528\u3055\u308c\u308b\u3055\u307e\u3056\u307e\u306a\u30c4\u30fc\u30eb\uff08PC\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u304b\u3089\u591a\u6570\u306e\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u305fIDE\u307e\u3067\uff09\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"designer-user-guide/startup-window"}),(0,r.kt)("strong",{parentName:"a"},"Designer\u306e\u30e6\u30fc\u30b6\uff65\u30ac\u30a4\u30c9"))," - TouchGFX Designer\u306e\u3055\u307e\u3056\u307e\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u5e83\u7bc4\u306a\u30ac\u30a4\u30c9\u3068\u30d2\u30f3\u30c8\u3084\u30b3\u30c4\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"touchgfx-engine-features/custom-triggers-and-actions"}),(0,r.kt)("strong",{parentName:"a"},"TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u6a5f\u80fd"))," - \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3001\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3001\u591a\u8a00\u8a9e\u30b5\u30dd\u30fc\u30c8\u306a\u3069\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u3055\u307e\u3056\u307e\u306a\u6a5f\u80fd\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"ui-components/buttons/button"}),(0,r.kt)("strong",{parentName:"a"},"UI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"))," - \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304b\u3089\u30b3\u30f3\u30c6\u30ca\u307e\u3067\u3001TouchGFX\u306b\u3042\u308b\u3059\u3079\u3066\u306eUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"scenarios/achieving-better-performance-with-cacheable-container"}),(0,r.kt)("strong",{parentName:"a"},"\u30b7\u30ca\u30ea\u30aa"))," - \u958b\u767a\u8005\u304c\u906d\u9047\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u3055\u307e\u3056\u307e\u306a\u30b7\u30ca\u30ea\u30aa\u3068\u305d\u306e\u89e3\u6c7a\u65b9\u6cd5\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")))}b.isMDXComponent=!0}}]);