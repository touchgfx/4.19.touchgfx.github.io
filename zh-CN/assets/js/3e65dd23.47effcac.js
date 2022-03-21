"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4667],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,s=d["".concat(p,".").concat(h)]||d[h]||m[h]||c;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,c=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:c,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:c,src:i})),a.createElement("p",null,e.children))}},35096:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return c},Z:function(){return i}});var a=n(11368),r=n(35096);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},59596:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return k},default:function(){return v}});var a=n(3905),r=n(44035),c=n(22425),i=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))m.call(t,n)&&d(e,n,t[n]);return e};const s={id:"caching-bitmaps",title:"\u7f13\u5b58\u4f4d\u56fe"},g=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/caching-bitmaps",id:"development/ui-development/touchgfx-engine-features/caching-bitmaps",isDocsHomePage:!1,title:"\u7f13\u5b58\u4f4d\u56fe",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bbaTouchGFX\u4e2d\u7684\u4f4d\u56fe\u7f13\u5b58\u3002 \u4f4d\u56fe\u7f13\u5b58\u662f\u4e13\u7528RAM\u7f13\u51b2\u533a\uff0c\u5e94\u7528\u53ef\u5c06\u4f4d\u56fe\u4fdd\u5b58\uff08\u6216\u7f13\u5b58\uff09\u5728\u5176\u4e2d\u3002 \u5982\u679c\u7f13\u5b58\u4e86\u4f4d\u56fe\uff0c\u5728\u7ed8\u5236\u4f4d\u56fe\u65f6\uff0cTouchGFX\u5c06\u81ea\u52a8\u4f7f\u7528RAM\u7f13\u5b58\u4f5c\u4e3a\u50cf\u7d20\u6765\u6e90\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/caching-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/caching-bitmaps",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps",tags:[],version:"current",frontMatter:{id:"caching-bitmaps",title:"\u7f13\u5b58\u4f4d\u56fe"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49\u5bb9\u5668",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-containers"},next:{title:"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-widgets"}},k=[{value:"\u8bbe\u7f6e\u4f4d\u56fe\u7f13\u5b58",id:"setup-the-bitmap-cache",children:[{value:"\u4f4d\u56fe\u7f13\u5b58\u914d\u7f6e",id:"bitmap-cache-configuration",children:[{value:"\u4f7f\u7528TouchGFX Generator\u65f6\u542f\u7528\u4f4d\u56fe\u7f13\u5b58",id:"enabling-bitmap-cache-with-touchgfx-generator",children:[],level:4}],level:3},{value:"BlockCopy\u5c06\u6570\u636e\u4ece\u95ea\u5b58\u590d\u5236\u5230\u7f13\u5b58",id:"blockcopy-copies-data-from-flash-to-the-cache",children:[],level:3}],level:2},{value:"\u7f13\u5b58\u64cd\u4f5c",id:"cache-operations",children:[],level:2},{value:"\u7f13\u5b58\u7b56\u7565",id:"cache-strategies",children:[{value:"\u6309\u5c4f\u5e55\u7f13\u5b58\u4f4d\u56fe",id:"cache-bitmap-on-a-screen-basis",children:[],level:3},{value:"\u66ff\u6362\u7f13\u5b58\u4e2d\u7684\u80cc\u666f\u4f4d\u56fe",id:"replace-the-background-bitmaps-in-the-cache",children:[],level:3}],level:2},{value:"\u7f13\u5b58\u5b58\u50a8\u7a7a\u95f4\u7ba1\u7406",id:"cache-memory-management",children:[],level:2}],b={toc:k};function v(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},b),d),o(t,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bbaTouchGFX\u4e2d\u7684\u4f4d\u56fe\u7f13\u5b58\u3002 \u4f4d\u56fe\u7f13\u5b58\u662f\u4e13\u7528RAM\u7f13\u51b2\u533a\uff0c\u5e94\u7528\u53ef\u5c06\u4f4d\u56fe\u4fdd\u5b58\uff08\u6216\u7f13\u5b58\uff09\u5728\u5176\u4e2d\u3002 \u5982\u679c\u7f13\u5b58\u4e86\u4f4d\u56fe\uff0c\u5728\u7ed8\u5236\u4f4d\u56fe\u65f6\uff0cTouchGFX\u5c06\u81ea\u52a8\u4f7f\u7528RAM\u7f13\u5b58\u4f5c\u4e3a\u50cf\u7d20\u6765\u6e90\u3002"),(0,a.kt)("p",null,"\u4f4d\u56fe\u7f13\u5b58\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\u5341\u5206\u6709\u7528\u3002 \u4eceRAM\u8bfb\u53d6\u6570\u636e\u901a\u5e38\u6bd4\u4ece\u95ea\u5b58\u8bfb\u53d6\u8981\u5feb\uff08\u7279\u522b\u662f\u5728\u4f7f\u7528\u7eb9\u7406\u6620\u5c04\u5668\u65f6\uff0c\u539f\u56e0\u662f\u5b83\u4f7f\u7528\u975e\u7ebf\u6027\u5b58\u50a8\u5668\u5b58\u53d6\uff09\uff0c\u56e0\u6b64\uff0c\u7f13\u5b58\u5230RAM\u53ef\u63d0\u5347UI\u6027\u80fd\u3002 \u6ce8\u610f\uff0c\u4ece\u5185\u90e8\u95ea\u5b58\u7f13\u5b58\u5230\u5916\u90e8RAM\u53ef\u80fd\u4f1a\u964d\u4f4e\u6027\u80fd\u3002 \u5982\u679c\u7f13\u5b58\u5230RAM\uff0c\u7531\u4e8e\u5c06\u4eceRAM\u8bfb\u53d6\u4f4d\u56fe\uff08\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5199\u5165\u95ea\u5b58\u8981\u6c42\u662f\u975e\u5b58\u50a8\u5668\u6620\u5c04\u95ea\u5b58\uff09\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728\u663e\u793aUI\u7684\u540c\u65f6\u5c06\u95ea\u5b58\u7528\u4e8e\u5176\u4ed6\u76ee\u7684\uff08\u5982\u65e5\u5fd7\u6587\u4ef6\uff09\u3002  \u5f53\u60a8\u9700\u8981\u4fee\u6539\u4f4d\u56fe\u50cf\u7d20\u65f6\uff0c\u4f4d\u56fe\u9700\u4f4d\u4e8e\u53ef\u4fee\u6539\u7684\u5b58\u50a8\u5668\u4e2d\uff0c\u56e0\u6b64\u8fd9\u4e00\u70b9\u4e5f\u5f88\u6709\u7528\u3002"),(0,a.kt)("p",null,"\u51fa\u4e8e\u6027\u80fd\u65b9\u9762\u7684\u8003\u8651\uff0cTouchGFX\u8981\u6c42\u5b58\u50a8\u5728\u5916\u90e8\u95ea\u5b58\u4e2d\u7684\u6240\u6709\u56fe\u5f62\u6570\u636e\u90fd\u80fd\u76f4\u63a5\u8bbf\u95ee\uff08\u901a\u8fc7\u6307\u9488\uff09\uff0c\u65e0\u9700\u901a\u8fc7\u9a71\u52a8\u5c42\u3002 \u8fd9\u610f\u5473\u7740TouchGFX\u4e0d\u80fd\u4ece\u975e\u5b58\u50a8\u5668\u6620\u5c04\u95ea\u5b58\uff08\u5982SD\u5361\uff09\u76f4\u63a5\u6e32\u67d3\u3002 \u4e3a\u4e86\u6253\u7834\u8fd9\u4e00\u9650\u5236\uff0c\u4f4d\u56fe\u7f13\u5b58\u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u4e0a\u7535\u671f\u95f4\u7f13\u5b58RAM\u4e2d\u7684\u4e00\u4e9b\u6216\u5168\u90e8\u4f4d\u56fe\u6570\u636e\u7684\u673a\u5236\u3002 \u56e0\u6b64\uff0c\u5f53\u60a8\u9700\u8981\u5c06\u4f4d\u56fe\u4fdd\u5b58\u5728\u6162\u901f\u5916\u90e8\u5b58\u50a8\u5668\uff08\u5982U\u76d8\u6216SD\u5361\uff09\u4e0a\u65f6\uff0c\u4f4d\u56fe\u7f13\u5b58\u5c06\u5341\u5206\u6709\u7528\u3002"),(0,a.kt)("h2",h({},{id:"setup-the-bitmap-cache"}),"\u8bbe\u7f6e\u4f4d\u56fe\u7f13\u5b58"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528\u4f4d\u56fe\u7f13\u5b58\u7279\u6027\uff0c\u60a8\u9996\u5148\u9700\u8981\u5411TouchGFX\u63d0\u4f9b\u4f4d\u56fe\u7f13\u5b58\u914d\u7f6e\uff0c\u7136\u540e\uff08\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff09\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"p"},"BlockCopy"),"\u51fd\u6570\u7684\u786c\u4ef6\u7279\u5b9a\u7684\u5b9e\u73b0\uff0c\u4ee5\u4fbf\u4ece\u5916\u90e8\u5b58\u50a8\u5668\u8bfb\u53d6\u6570\u636e\u3002"),(0,a.kt)("h3",h({},{id:"bitmap-cache-configuration"}),"\u4f4d\u56fe\u7f13\u5b58\u914d\u7f6e"),(0,a.kt)("p",null,"\u4f4d\u56fe\u7f13\u5b58\u914d\u7f6e\u5305\u62ec\u6307\u5411\u7f13\u51b2\u533a\u7684\u6307\u9488\u548c\u7f13\u51b2\u533a\u5927\u5c0f\u3002 \u5728\u8c03\u7528Bitmap::setCache\u65f6\uff0c\u5fc5\u987b\u5411TouchGFX\u63d0\u4f9b\u8fd9\u4e24\u4e2a\u503c\u3002 \u6b64\u8c03\u7528\u901a\u5e38\u4f4d\u4e8eFrontendApplication.cpp\u6587\u4ef6\u4e2d\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize);\n}\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u5916\u90e8\u5b58\u50a8\u5668\u4e2d\u76843 MB\u7f13\u51b2\u4f5c\u4e3a\u4f4d\u56fe\u7f13\u5b58\u88ab\u4f20\u9012\u5230TouchGFX\u3002 \u5730\u5740\u7531\u5e94\u7528\u7a0b\u5e8f\u5458\u9009\u62e9\u3002 \u5728\u4e0b\u4e00\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ea\u58f0\u660e\u4e00\u4e2a\u9635\u5217\uff0c\u5e76\u4e14\u53ea\u4f20\u9012\u9635\u5217\u7684\u5730\u5740\u548c\u5927\u5c0f\u3002 \u9635\u5217\u7684\u5177\u4f53\u4f4d\u7f6e\u5c06\u53d6\u51b3\u4e8e\u94fe\u63a5\u5668\u811a\u672c\u3002 \u5728\u5185\u90e8RAM\u4e2d\u521b\u5efa\uff08\u5c0f\uff09\u4f4d\u56fe\u7f13\u5b58\u65f6\u6700\u5e38\u4f7f\u7528\u6b64\u65b9\u6cd5\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\n// Define an array for the bitmap cache\nuint16_t cache[128*1024]; //256 KB cache\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    Bitmap::setCache(cache, sizeof(cache));\n}\n")),(0,a.kt)("h4",h({},{id:"enabling-bitmap-cache-with-touchgfx-generator"}),"\u4f7f\u7528TouchGFX Generator\u65f6\u542f\u7528\u4f4d\u56fe\u7f13\u5b58"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528CubeMX\u548cTouchGFX Generator\uff0c\u5219\u4e5f\u53ef\u4ee5\u5728TouchGFXHAL.cpp\u4e2d\u542f\u7528\u548c\u914d\u7f6e\u4f4d\u56fe\u7f13\u5b58\u3002"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::initialize()\n{\n    /* Initialize TouchGFX Engine */\n    TouchGFXGeneratedHAL::initialize();\n\n    uint16_t* cacheStartAddr = (uint16_t*)0xC0008000;\n    uint32_t cacheSize = 0x300000; //3 MB, as example\n\n    touchgfx::Bitmap::setCache(cache, sizeof(cache));\n}\n")),(0,a.kt)("p",null,"If you want to reuse the cache, the previous one must be removed before setting the new one, this is done by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::Bitmap::removeCache()"),". \u5982\u679c\u4ec5\u5728\u5e94\u7528\u4e2d\u8bbe\u7f6e\u4e00\u6b21\uff0c\u5219\u65e0\u9700\u5220\u9664\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"\u5982\u9700\u7f13\u5b58\u6240\u6709\u4f4d\u56fe\uff0c\u5219\u7f13\u5b58\u5927\u5c0f\u5fc5\u987b\u8db3\u591f\u5927\uff0c\u624d\u80fd\u5305\u542b\u6240\u6709\u4f4d\u56fe\u6570\u636e\u3002 \u6ce8\u610f\uff1a\u4f1a\u6709\u5c11\u91cf\u5b58\u50a8\u7a7a\u95f4\u7528\u4e8e\u8bb0\u8d26\uff088\u4e2a\u5b57\u8282 x \u5e94\u7528\u4e2d\u7684\u4f4d\u56fe\u6570\u91cf\uff09\uff0c\u56e0\u6b64\u5fc5\u987b\u5206\u914d\u6bd4\u539f\u59cb\u50cf\u7d20\u6570\u636e\u7684\u5b9e\u9645\u9700\u6c42\u7a0d\u5927\u7684\u5b58\u50a8\u7a7a\u95f4\u3002 \u8be5\u503c\u53d6\u51b3\u4e8e\u5e94\u7528\u4e2d\u7684\u4f4d\u56fe\u6570\u91cf\uff0c\u4f46\u989d\u5916\u591a\u51e0\u5343\u5b57\u8282\u901a\u5e38\u5373\u5df2\u8db3\u591f\u3002"),(0,a.kt)("h3",h({},{id:"blockcopy-copies-data-from-flash-to-the-cache"}),"BlockCopy\u5c06\u6570\u636e\u4ece\u95ea\u5b58\u590d\u5236\u5230\u7f13\u5b58"),(0,a.kt)("p",null,"\u5728\u7f13\u5b58\u4f4d\u56fe\u65f6\uff0cTouchGFX\u4f1a\u4f7f\u7528HAL\u7c7b\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"BlockCopy"),"\u51fd\u6570\u5c06\u50cf\u7d20\u4ece\u539f\u59cb\u4f4d\u7f6e\u590d\u5236\u5230\u4f4d\u56fe\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f4d\u56fe\u5b58\u50a8\u5728\u666e\u901a\u53ef\u5bfb\u5740\u95ea\u5b58\uff08\u5982\u5185\u90e8\u95ea\u5b58\u6216\u5b58\u50a8\u5668\u6620\u5c04\u5916\u90e8\u95ea\u5b58\uff08\u5982QSPI\u95ea\u5b58\uff09\uff09\u4e2d\uff0c\u5219\u60a8\u65e0\u9700\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002 \u5185\u7f6e\u5b9e\u73b0\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u4f4d\u56fe\u5b58\u50a8\u5728\u4e0d\u53ef\u5bfb\u5740\u7684\u95ea\u5b58\uff08\u5982\u6587\u4ef6\u7cfb\u7edf\u6216\u975e\u5b58\u50a8\u5668\u6620\u5c04\u95ea\u5b58\uff09\u4e2d\uff0c\u5219\u6807\u51c6\u590d\u5236\u6cd5\u662f\u4e0d\u591f\u7684\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u80fd\u591f\u4ece\u7279\u5b9a\u95ea\u5b58\u8bfb\u53d6\u7684\u66f4\u65b0\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u9605\u8bfb",(0,a.kt)("a",h({parentName:"p"},{href:"../../scenarios/using-non-memory-mapped-flash"}),"\u4f7f\u7528\u975e\u5b58\u50a8\u5668\u6620\u5c04\u95ea\u5b58\u5b58\u50a8\u56fe\u50cf"),"\u4e00\u8282\u4e2d\u5173\u4e8e\u8be5\u4e3b\u9898\u7684\u66f4\u591a\u5185\u5bb9\u3002"),(0,a.kt)("h2",h({},{id:"cache-operations"}),"\u7f13\u5b58\u64cd\u4f5c"),(0,a.kt)("p",null,"\u4f4d\u56fe\u7f13\u5b58\u64cd\u4f5c\u5168\u90e8\u653e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Bitmap"),"\u7c7b\u4e2d\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},(0,a.kt)("inlineCode",{parentName:"strong"},"Bitmap")," caching method")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cache(BitmapId id)")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u7f13\u5b58\u4e00\u4e2a\u4f4d\u56fe\u3002 \u4ec5\u5f53\u7f13\u5b58\u4e2d\u6709\u8db3\u591f\u5927\u7684\u672a\u4f7f\u7528\u5b58\u50a8\u7a7a\u95f4\u65f6\uff0c\u624d\u7f13\u5b58\u4f4d\u56fe\u3002 \u5982\u679c\u4f4d\u56fe\u88ab\u7f13\u5b58\uff0c\u8fd4\u56detrue\u3002 \u7f13\u5b58\u5df2\u7f13\u5b58\u7684\u4f4d\u56fe\u4e0d\u4f1a\u6709\u4efb\u4f55\u64cd\u4f5c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cacheReplaceBitmap(BitmapId out, BitmapId in)")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u7528\u53e6\u4e00\u4e2a\u4f4d\u56fe\uff08\u5165\uff09\u66ff\u6362\u7f13\u5b58\u4e2d\u7684\u4f4d\u56fe\uff08\u51fa\uff09\u3002 \u4ec5\u5f53\u8981\u66ff\u6362\u7684\u4f4d\u56fe\u5df2\u7f13\u5b58\u4e14\u4f4d\u56fe\u5927\u5c0f\uff08\u5b57\u8282\u6570\uff09\u76f8\u540c\u65f6\uff0c\u6b64\u65b9\u6cd5\u624d\u80fd\u6210\u529f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cacheRemoveBitmap(BitmapId id)")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u5220\u9664\u7f13\u5b58\u4e2d\u7684\u4f4d\u56fe\u3002 \u4f4d\u56fe\u4f7f\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u6b64\u540e\u53ef\u7528\u4e8e\u7f13\u5b58\u53e6\u4e00\u4e2a\u4f4d\u56fe\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"void Bitmap::clearCache()")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u5220\u9664\u7f13\u5b58\u4e2d\u7684\u6240\u6709\u5df2\u7f13\u5b58\u4f4d\u56fe\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"void Bitmap::cacheAll()")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u7f13\u5b58\u6240\u6709\u4f4d\u56fe\u3002 \u5982\u679c\u5206\u914d\u7528\u4e8e\u7f13\u5b58\u7684RAM\u7a7a\u95f4\uff08\u6216\u53ef\u7528\u7a7a\u95f4\uff09\u5c0f\u4e8e\u4f4d\u56fe\u7684\u603b\u5927\u5c0f\uff0c\u5219\u4e0d\u80fd\u4f7f\u7528\u6b64\u65b9\u6cd5\u3002")))),(0,a.kt)("h2",h({},{id:"cache-strategies"}),"\u7f13\u5b58\u7b56\u7565"),(0,a.kt)("p",null,"\u5982\u679c\u53ef\u5206\u914d\u7528\u4e8e\u4f4d\u56fe\u7f13\u5b58\u7684RAM\u7a7a\u95f4\u5c0f\u4e8e\u4f4d\u56fe\u7684\u603b\u5927\u5c0f\uff0c\u5219\u542f\u52a8\u8fc7\u7a0b\u4e2d\u4e0d\u80fd\u7f13\u5b58\u6240\u6709\u4f4d\u56fe\u3002 \u4e3e\u4e2a\u4f8b\u5b50\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u53ea\u7f13\u5b58\u7b2c\u4e00\u4e2a\u5c4f\u5e55\u9700\u8981\u7684\u4f4d\u56fe\u3002 \u5728\u5c4f\u5e55\u4e4b\u95f4\u5207\u6362\u65f6\uff0c\u60a8\u53ef\u4ee5\u5220\u9664\u4e00\u4e9b\u6216\u5168\u90e8\u5df2\u7f13\u5b58\u4f4d\u56fe\uff0c\u5e76\u7f13\u5b58\u4e0b\u4e00\u4e2a\u5c4f\u5e55\u6240\u9700\u7684\u4f4d\u56fe\u3002 \u4e0b\u4e00\u8282\u5bf9\u6b64\u8fdb\u884c\u4e86\u4e3e\u4f8b\u8bf4\u660e\u3002"),(0,a.kt)("h3",h({},{id:"cache-bitmap-on-a-screen-basis"}),"\u6309\u5c4f\u5e55\u7f13\u5b58\u4f4d\u56fe"),(0,a.kt)("p",null,"\u5e94\u7528\u7528\u6237\u754c\u9762\u7531\u4e00\u7ec4\u89c6\u56fe\u7ec4\u6210\u3002 \u89c6\u56fe\u51e0\u4e4e\u90fd\u4f1a\u4f7f\u7528\u4e00\u4e9b\u4f4d\u56fe\u3002  \u4e00\u79cd\u7b80\u5355\u7684\u7f13\u5b58\u7b56\u7565\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"View::setupScreen"),"\u4e2d\u7f13\u5b58\u6240\u6709\u4f4d\u56fe\uff0c\u5e76\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"View::tearDownScreen"),"\u4e2d\u6e05\u9664\u7f13\u5b58\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::setupScreen()\n{\n    //ensure background is cached\n    Bitmap::cache(BITMAP_SCREEN2_ID);\n    //cache some icons\n    Bitmap::cache(BITMAP_ICON10_ID);\n    Bitmap::cache(BITMAP_ICON11_ID);\n    Bitmap::cache(BITMAP_ICON12_ID);\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    //Remove all bitmaps from the cache\n    Bitmap::clearCache();\n}\n")),(0,a.kt)("p",null,"\u7f13\u5b58\u7684\u5b58\u50a8\u7a7a\u95f4\u8981\u6c42\u662f\u4f4d\u56fe\u4f7f\u7528\u91cf\u6700\u591a\u7684\u5c4f\u5e55\u4f7f\u7528\u7684\u4f4d\u56fe\u5927\u5c0f\u3002 \u6b64\u65b9\u6cd5\u7684\u7f3a\u70b9\u662f\u5982\u679c\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe"),"\u90fd\u4f7f\u7528\u4e00\u4e2a\u4f4d\u56fe\uff0c\u4ece\u7b2c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe"),"\u9000\u51fa\u65f6\u7f13\u5b58\u4e2d\u7684\u4f4d\u56fe\u4f1a\u88ab\u64e6\u9664\uff0c\u5e76\u5728\u8fdb\u5165\u7b2c\u4e8c\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe"),"\u65f6\u518d\u6b21\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"\u53ef\u5bf9Bitmap::cacheRemoveBitmap\u4f7f\u7528\u9009\u62e9\u6027\u672a\u7f13\u5b58\u4f4d\u56fe\uff0c\u4ece\u800c\u51cf\u5c11\u6b64\u5f00\u9500\u3002 cacheRemoveBitmap\u7684\u7f3a\u70b9\u662f\u7f13\u5b58\u5b58\u50a8\u7a7a\u95f4\u788e\u7247\u5316\u3002"),(0,a.kt)("p",null,"\u7f13\u5b58\u7684\u53e6\u4e00\u4e2a\u666e\u904d\u7f3a\u70b9\u662f\u5728\u66f4\u6539UI\uff08\u5982\u6dfb\u52a0\u6309\u94ae\uff09\u65f6\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u66f4\u65b0\u7f13\u5b58\u4ee3\u7801\u6765\u5305\u542b\u65b0\u4f4d\u56fe\u3002"),(0,a.kt)("h3",h({},{id:"replace-the-background-bitmaps-in-the-cache"}),"\u66ff\u6362\u7f13\u5b58\u4e2d\u7684\u80cc\u666f\u4f4d\u56fe"),(0,a.kt)("p",null,"\u5982\u679c\u5e94\u7528\u6709\u4e00\u7ec4\u5c0f\u4f4d\u56fe\uff08\u5982\u56fe\u6807\uff09\u548c\u4e00\u4e9b\u5927\u5168\u5c4f\u201c\u80cc\u666f\u201d\u4f4d\u56fe\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u53e6\u4e00\u79cd\u7b56\u7565\uff1a"),(0,a.kt)("p",null,"\u5728\u8fdb\u5165\u7b2c\u4e00\u4e2a\u5c4f\u5e55\u4e4b\u524d\u7f13\u5b58\u6240\u6709\u5c0f\u4f4d\u56fe\u3002 FrontendApplication\u6784\u9020\u51fd\u6570\u662f\u6267\u884c\u7f13\u5b58\u7684\u597d\u4f4d\u7f6e\u3002 \u53e6\u5916\uff0c\u7f13\u5b58\u7b2c\u4e00\u4e2a\u5c4f\u5e55\u7684\u80cc\u666f\u4f4d\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : touchgfx::MVPApplication(),\n      transitionCallback(),\n      frontendHeap(heap),\n      model(m)\n{\n    //cache some icons\n    Bitmap::cache(BITMAP_ICON10_ID);\n    Bitmap::cache(BITMAP_ICON11_ID);\n    Bitmap::cache(BITMAP_ICON12_ID);\n\n    //cache first background\n    Bitmap::cache(BITMAP_SCREEN1_ID);\n    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember ID in a variable\n}\n")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"View::setupScreen"),"\u65b9\u6cd5\u4e2d\uff0c\u7528\u6240\u9700\u7684\u4f4d\u56fe\u66ff\u6362\u7f13\u5b58\u7684\u80cc\u666f\u4f4d\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"Screen1View::setupScreen()\n{\n    //ensure background is cached\n    Bitmap::cacheReplaceBitmap(backgroundBitmapCached, BITMAP_SCREEN1_ID);\n    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember new ID of cached bitmap\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::tearDownScreen()\n{\n    //nothing cache related\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64\u7b56\u7565\u7684\u7f13\u5b58\u5b58\u50a8\u7a7a\u95f4\u8981\u6c42\u662f\u7f13\u5b58\u7684\u4f4d\u56fe\u548c\u4e00\u5f20\u80cc\u666f\u4f4d\u56fe\u7684\u603b\u5927\u5c0f\u3002 \u76f8\u6bd4\u4e8e\u524d\u4e00\u79cd\u65b9\u6cd5\uff0c\u6b64\u65b9\u6cd5\u7531\u4e8e\u89c6\u56fe\u4ee3\u7801\u8f83\u5c11\uff0c\u5176\u4ee3\u7801\u66f4\u6613\u4e8e\u7ef4\u62a4\u3002 \u7531\u4e8e\u79fb\u5165\u548c\u79fb\u51fa\u7f13\u5b58\u7684\u4f4d\u56fe\u8f83\u5c11\uff0c\u56e0\u6b64\u6027\u80fd\u66f4\u4f18\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u5b58\u50a8\u7a7a\u95f4\u4e0d\u4f1a\u788e\u7247\u5316\uff0ccacheReplaceBitmap\u64cd\u4f5c\u6bd4 cacheRemoveBitmap\u65b9\u6cd5\u66f4\u597d\u3002"),(0,a.kt)("h2",h({},{id:"cache-memory-management"}),"\u7f13\u5b58\u5b58\u50a8\u7a7a\u95f4\u7ba1\u7406"),(0,a.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u4f4d\u56fe\u7f13\u5b58\u7684\u5b8c\u6574\u6548\u679c\uff0c\u5fc5\u987b\u7406\u89e3\u7f13\u5b58\u7684\u5185\u90e8\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u7f13\u5b58\u4ee5\u6808\u7684\u5f62\u5f0f\u5b9e\u73b0\u3002 \u5728\u4e4b\u524d\u7f13\u5b58\u7684\u4f4d\u56fe\u4e4b\u540e\u7f13\u5b58\u65b0\u4f4d\u56fe\u3002 \u5f53\u4f4d\u56fe\u4ece\u7f13\u5b58\u4e2d\u5220\u9664\u65f6\uff0c\u4f4d\u56fe\u4f7f\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u4f1a\u88ab\u6807\u8bb0\u4e3a\u201c\u7a7a\u95f2\u201d\uff0c\u4f46\u4e0d\u80fd\u7acb\u5373\u4f7f\u7528\u8be5\u5b58\u50a8\u7a7a\u95f4\uff0c\u9664\u975e\u5220\u9664\u7684\u4f4d\u56fe\u4f4d\u4e8e\u6808\u9876\u90e8\u3002 \u5982\u679c\u4f4d\u56fe\u4f4d\u4e8e\u7f13\u5b58\u7684\u201c\u4e2d\u95f4\u201d\uff0c\u5c06\u5728\u4e0b\u4e00\u6b21\u8c03\u7528Bitmap::cache\u65f6\u6267\u884c\u538b\u7f29\u64cd\u4f5c\uff0c\u4ee5\u4fbf\u53d6\u56de\u5b58\u50a8\u7a7a\u95f4\u3002 \u5982\u679c\u4e0d\u5728\u7f13\u5b58\u4e2d\u6709\u201c\u7a7a\u6d1e\u201d\u7684\u60c5\u51b5\u4e0b\u8c03\u7528Bitmap::cache\uff0c\u5219\u53ef\u4ee5\u907f\u514d\u8fd9\u79cd\u201c\u9ad8\u6210\u672c\u201d\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u63cf\u8ff0\u4e86\u539f\u7406\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e0a\u4e00\u4e2a\u5df2\u5206\u914d\u4f4d\u56fe\u4e4b\u4e0a\u5206\u914d\u7f13\u5b58\uff1a")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-cache.png",noShadow:"true",width:"340",mdxType:"Figure"},"\u5b58\u50a8\u7a7a\u95f4\u4e2d\u4f4d\u56fe\u7684\u5206\u914d\u987a\u5e8f"),(0,a.kt)("ol",h({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u540e\u6807\u8bb0\u672a\u4f7f\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\uff1a")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache.png",noShadow:"true",width:"340",mdxType:"Figure"},"\u5220\u9664\u5df2\u7f13\u5b58\u4f4d\u56fe\u540e\u7f13\u5b58\u4e2d\u7684\u672a\u4f7f\u7528\u5b58\u50a8\u7a7a\u95f4"),(0,a.kt)("ol",h({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"\u5206\u914d\u4e0b\u4e00\u5f20\u4f4d\u56fe\u65f6\uff0c\u4f1a\u538b\u7f29\u7f13\u5b58\u5e76\u5728\u9876\u90e8\u8fdb\u884c\u5206\u914d\uff1a")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-compact.png",noShadow:"true",width:"340",mdxType:"Figure"},"\u5728\u7f13\u5b58\u4f4d\u56fe\u4e4b\u524d\uff0c\u7f13\u5b58\u53d6\u56de\u672a\u4f7f\u7528\u7684\u5b58\u50a8\u7a7a\u95f4"),(0,a.kt)("ol",h({},{start:4}),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5220\u9664\u6700\u9876\u7aef\uff08\u4e0a\u4e00\u6b21\u5206\u914d\uff09\u7684\u4f4d\u56fe\u65f6\uff0c\u4f1a\u7acb\u5373\u91ca\u653e\u5b58\u50a8\u7a7a\u95f4\u53ca\u5176\u4e0b\u65b9\u7684\u4efb\u4f55\u7a7a\u95f2\u5b58\u50a8\u7a7a\u95f4\uff1a")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache-top.png",noShadow:"true",width:"700",mdxType:"Figure"},"\u5220\u9664\u6700\u9876\u7aef\u4f4d\u56fe\u7f13\u5b58"),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e0b\u4e00\u6b21\u7f13\u5b58\u64cd\u4f5c\u5c06\u4e0d\u5305\u62ec\u538b\u7f29\u3002"),(0,a.kt)("p",null,"\u8be5\u52a8\u753b\u5c55\u793a\u4e86\u6b64\u4ee3\u7801\u7684\u5b8c\u6574\u987a\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"Bitmap::cache(BITMAP_BITMAP1_ID);\nBitmap::cache(BITMAP_BITMAP2_ID);\nBitmap::cache(BITMAP_BITMAP3_ID);\n...\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP2_ID);\n...\nBitmap::cache(BITMAP_BITMAP4_ID);\n...\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP3_ID);\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP4_ID);\n")),(0,a.kt)(r.Z,{width:"600",imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-bitmap-animation.gif",noShadow:"true",mdxType:"Figure"},"\u7f13\u5b58\u548c\u672a\u7f13\u5b58\u4f4d\u56fe"))}v.isMDXComponent=!0}}]);