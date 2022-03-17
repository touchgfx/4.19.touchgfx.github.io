"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9665],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),s=i,f=u["".concat(o,".").concat(s)]||u[s]||d[s]||r;return n?a.createElement(f,p(p({ref:t},m),{},{components:n})):a.createElement(f,p({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,p=(0,i.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:p,target:"_blank"},a.createElement("img",{width:n,height:r,src:p})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:p,target:"_blank"},a.createElement("img",{width:n,height:r,src:p})),a.createElement("p",null,e.children))}},35096:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return p}});var a=n(11368),i=n(35096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;const p=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+p:p}(t,e,n,a)}}function p(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},99440:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return h},metadata:function(){return g},toc:function(){return b},default:function(){return k}});var a=n(3905),i=n(44035),r=n(22425),p=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&u(e,n,t[n]);return e};const f={id:"dynamic-bitmaps",title:"\u52a8\u6001\u4f4d\u56fe"},h=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",id:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",isDocsHomePage:!1,title:"\u52a8\u6001\u4f4d\u56fe",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u52a8\u6001\u4f4d\u56fe\u3002 \u6ce8\u610f\uff0c\u6807\u51c6\u4f4d\u56fe\u4f1a\u88ab\u7f16\u8bd1\u5230\u5e94\u7528\u4e2d\uff0c\u56e0\u6b64\u5fc5\u987b\u5728\u7f16\u8bd1\u65f6\u63d0\u4f9b\u3002 \u4f4d\u56fe\u4ecePNG\u7b49\u683c\u5f0f\u7684\u6587\u4ef6\u8f6c\u6362\u800c\u6765\uff0c\u5e26\u6709\u5927\u5c0f\u548c\u683c\u5f0f\u4fe1\u606f\u5e76\u4ee5\u5185\u90e8\u683c\u5f0f\u4fdd\u5b58\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",tags:[],version:"current",frontMatter:{id:"dynamic-bitmaps",title:"\u52a8\u6001\u4f4d\u56fe"},sidebar:"docs",previous:{title:"\u753b\u5e03\u63a7\u4ef6",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"},next:{title:"Binary Fonts",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"}},b=[{value:"\u52a8\u6001\u4f4d\u56fe\u914d\u7f6e",id:"dynamic-bitmap-configuration",children:[],level:2},{value:"\u4f7f\u7528\u52a8\u6001\u4f4d\u56fe\u793a\u4f8b",id:"using-a-dynamic-bitmap-example",children:[],level:2},{value:"\u52a8\u6001\u4f4d\u56fe\u64cd\u4f5c",id:"dynamic-bitmap-operations",children:[{value:"\u521b\u5efa\u52a8\u6001\u4f4d\u56fe",id:"creating-a-dynamic-bitmap",children:[],level:3},{value:"\u5220\u9664\u52a8\u6001\u4f4d\u56fe",id:"deleting-a-dynamic-bitmap",children:[],level:3},{value:"\u83b7\u53d6\u52a8\u6001\u4f4d\u56fe\u4e2d\u50cf\u7d20\u7684\u5730\u5740",id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap",children:[],level:3},{value:"\u8bbe\u7f6e\u52a8\u6001\u4f4d\u56fe\u7684\u5b9e\u5fc3\u533a\u57df",id:"set-the-solid-area-of-a-dynamic-bitmap",children:[],level:3}],level:2},{value:"\u7ad6\u5c4f\u6a21\u5f0f\u7684\u52a8\u6001\u4f4d\u56fe",id:"dynamic-bitmap-in-portrait-mode",children:[],level:2}],y={toc:b};function k(e){var t,n=e,{components:p}=n,u=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},y),u),c(t,o({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u52a8\u6001\u4f4d\u56fe\u3002 \u6ce8\u610f\uff0c\u6807\u51c6\u4f4d\u56fe\u4f1a\u88ab\u7f16\u8bd1\u5230\u5e94\u7528\u4e2d\uff0c\u56e0\u6b64\u5fc5\u987b\u5728\u7f16\u8bd1\u65f6\u63d0\u4f9b\u3002 \u4f4d\u56fe\u4ecePNG\u7b49\u683c\u5f0f\u7684\u6587\u4ef6\u8f6c\u6362\u800c\u6765\uff0c\u5e26\u6709\u5927\u5c0f\u548c\u683c\u5f0f\u4fe1\u606f\u5e76\u4ee5\u5185\u90e8\u683c\u5f0f\u4fdd\u5b58\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u95f4\u5728RAM\u4e2d\u521b\u5efa\u4f4d\u56fe\u3002 \u8fd9\u88ab\u79f0\u4e3a",(0,a.kt)("em",{parentName:"p"},"\u52a8\u6001\u4f4d\u56fe"),"\u3002 \u52a8\u6001\u4f4d\u56fe\u7684\u4f7f\u7528\u4e0e\u7f16\u8bd1\u5230\u5e94\u7528\u4e2d\u7684\u9759\u6001\u4f4d\u56fe\u76f8\u540c\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u901a\u8fc7\u56fe\u50cf\u548c\u6309\u94ae\u7b49\u5c0f\u90e8\u4ef6\u4f7f\u7528\u52a8\u6001\u4f4d\u56fe\u3002"),(0,a.kt)("h2",s({},{id:"dynamic-bitmap-configuration"}),"\u52a8\u6001\u4f4d\u56fe\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728\u521b\u5efa\u52a8\u6001\u4f4d\u56fe\u65f6\uff0c\u9700\u8981\u4ece\u4f4d\u56fe\u7f13\u5b58\u5206\u914d\u50cf\u7d20\u5b58\u50a8\u7a7a\u95f4\u3002 \u56e0\u6b64\uff0c\u60a8\u5fc5\u987b\u5148\u914d\u7f6e\u4f4d\u56fe\u7f13\u5b58\uff0c\u7136\u540e\u624d\u80fd\u521b\u5efa\u52a8\u6001\u4f4d\u56fe\u3002 \u8fd9\u4e2a\u8fc7\u7a0b\u4e0d\u80fd\u5728TouchGFX Designer\u6216Generator\u4e2d\u6267\u884c\uff0c\u9700\u8981\u624b\u52a8\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u53c2\u89c1\u5173\u4e8e",(0,a.kt)("a",s({parentName:"p"},{href:"caching-bitmaps"}),"\u4f4d\u56fe\u7f13\u5b58"),"\u7684\u6587\u7ae0\u83b7\u53d6\u914d\u7f6e\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,"\u5fc5\u987b\u5b9a\u4e49\u5e94\u7528\u4e2d\u4f7f\u7528\u7684\u52a8\u6001\u4f4d\u56fe\u7684\u6700\u5927\u6570\u91cf\u3002 \u8be5\u6700\u5927\u503c\u4e0e\u4f4d\u56fe\u7f13\u5b58\u5730\u5740\u548c\u5927\u5c0f\u4e00\u8d77\u4f20\u9012\u5230TouchGFX\u3002 \u8fd9\u91cc\u6211\u4eec\u914d\u7f6e\u7684\u662f\u5177\u6709\u6700\u591a",(0,a.kt)("strong",{parentName:"p"},"4"),"\u5f20\u52a8\u6001\u4f4d\u56fe\u7684\u4f4d\u56fe\u7f13\u5b58\u3002 \u60a8\u53ef\u4ee5\u5728\u5e94\u7528\u4e2d\u7684\u4efb\u4f55\u6587\u4ef6\u4e2d\u6267\u884c\u3002 \u5982\u9700\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u6587\u4ef6FrontendApplication.cpp\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,10-10}","{2-2,10-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528Windows\u6a21\u62df\u5668\uff0c\u5219\u8fd8\u5fc5\u987b\u5728\u6b64\u521b\u5efa\u4f4d\u56fe\u7f13\u5b58\u3002 \u5728Windows\u4e0a\uff0c\u53ef\u4ee5\u5bb9\u6613\u7684\u58f0\u660e\u5927\u9635\u5217\u6216\u4f7f\u7528malloc\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{9-10}","{9-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n#ifdef SIMULATOR\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    uint16_t* const cacheStartAddr = (uint16_t*)malloc(cacheSize);\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#else\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#endif\n}\n")),(0,a.kt)("h2",s({},{id:"using-a-dynamic-bitmap-example"}),"\u4f7f\u7528\u52a8\u6001\u4f4d\u56fe\u793a\u4f8b"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528\u52a8\u6001\u4f4d\u56fe\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5c0f\u90e8\u4ef6\u6765\u663e\u793a\u5b83\u3002 \u4e3a\u6b64\uff0c\u5728\u89c6\u56fe\uff08\u5728\u4ee3\u7801\u4e2d\u6216Designer\u4e2d\uff09\u4e2d\u63d2\u5165\u4e00\u4e2a\u56fe\u50cf\u5c0f\u90e8\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{6-6}","{6-6}":!0}),"#include <touchgfx/widgets/Image.hpp>\nusing namespace touchgfx;\nclass TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,a.kt)("p",null,"\u6b64\u5c0f\u90e8\u4ef6\u548c\u52a8\u6001\u4f4d\u56fe\u7684\u4f7f\u7528\u8fc7\u7a0b\u5206\u4e3a\u4e09\u6b65\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u4f4d\u56fe\u7f13\u5b58\u4e2d\u521b\u5efa\u52a8\u6001\u4f4d\u56fe"),(0,a.kt)("li",{parentName:"ol"},"\u6e05\u7a7a\u52a8\u6001\u4f4d\u56fe\u4f7f\u7528\u7684\u5b58\u50a8\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u4f4d\u56fe\u5206\u914d\u7ed9\u5c0f\u90e8\u4ef6")),(0,a.kt)("p",null,"\u5728setupScreen\u4e2d\u521b\u5efa\u52a8\u6001\u4f4d\u56fe\u3002 \u8fd9\u91cc\u6211\u4eec\u4f7f\u752816bpp\u683c\u5f0fRGB565\u3002 \u5982\u679c\u5e27\u7f13\u51b2\u4e3a24\u4f4d\uff0c\u5219\u4f7f\u7528RGB888\u3002 \u5982\u9700\u521b\u5efa\u900f\u660e\u4f4d\u56fe\uff0c\u4f7f\u7528\u683c\u5f0fARGB8888\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7dynamicBitmapGetAddress\u51fd\u6570\u8fd4\u56de\u52a8\u6001\u4f4d\u56fe\u4e2d\u50cf\u7d20\u7684\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{9-9,14-14}","{9-9,14-14}":!0}),"#include <touchgfx/Bitmap.hpp>\nvoid TemplateView::setupScreen()\n{\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of size 100x150\n    const int width = 100;\n    const int height = 150;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 150, Bitmap::RGB565);\n\n    //set all pixels white\n    if (bmpId != BITMAP_INVALID)\n    {\n       memset(Bitmap::dynamicBitmapGetAddress(bmpId), 0xFF, width*height*2);\n    }\n\n    //Make Image widget show the dynamic bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n")),(0,a.kt)("p",null,"\u60a8\u4ece\u4f4d\u56fe\u7f13\u5b58\u83b7\u5f97\u7684\u50cf\u7d20\u5b58\u50a8\u7a7a\u95f4\u672a\u6e05\u7a7a\uff0c\u5efa\u8bae\u7acb\u5373\u5c06\u5176\u6e05\u7a7a\u6216\u91cd\u5199\u3002"),(0,a.kt)("p",null,"\u5982\u9700\u4ece\u6587\u4ef6\u52a0\u8f7d\u56fe\u50cf\uff0c\u53ef\u4ee5\u7528loader\u4ee3\u7801\u66ff\u4ee3\u5bf9memset\u7684\u8c03\u7528\u3002 \u8bf7\u53c2\u8003\u6587\u7ae0",(0,a.kt)("a",s({parentName:"p"},{href:"../scenarios/loading-images-at-runtime"}),"\u5728\u8fd0\u884c\u65f6\u95f4\u52a0\u8f7d\u56fe\u50cf")),(0,a.kt)("h2",s({},{id:"dynamic-bitmap-operations"}),"\u52a8\u6001\u4f4d\u56fe\u64cd\u4f5c"),(0,a.kt)("p",null,"\u52a8\u6001\u4f4d\u56fe\u64cd\u4f5c\u5168\u90e8\u4f4d\u4e8e",(0,a.kt)("a",s({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_bitmap"}),"Bitmap"),"\u7c7b\u4e2d\u3002"),(0,a.kt)("h3",s({},{id:"creating-a-dynamic-bitmap"}),"\u521b\u5efa\u52a8\u6001\u4f4d\u56fe"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u7528\u6307\u5b9a\u7684\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u4f4d\u56fe\u683c\u5f0f\u521b\u5efa\u52a8\u6001\u4f4d\u56fe\u3002 \u4ec5\u5f53\u6709\u8db3\u591f\u5927\u7684\u672a\u4f7f\u7528\u5b58\u50a8\u7a7a\u95f4\u65f6\uff0c\u624d\u80fd\u521b\u5efa\u4f4d\u56fe\u3002 \u5982\u679c\u672a\u521b\u5efa\u4f4d\u56fe\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56deBITMAP_INVALID\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format, ClutFormat clutFormat)\n")),(0,a.kt)("h3",s({},{id:"deleting-a-dynamic-bitmap"}),"\u5220\u9664\u52a8\u6001\u4f4d\u56fe"),(0,a.kt)("p",null,"\u6b64\u65b9\u6cd5\u5220\u9664\u52a8\u6001\u4f4d\u56fe\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"static bool Bitmap::dynamicBitmapDelete(BitmapId id)\n")),(0,a.kt)("h3",s({},{id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap"}),"\u83b7\u53d6\u52a8\u6001\u4f4d\u56fe\u4e2d\u50cf\u7d20\u7684\u5730\u5740"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u8fd4\u56de\u52a8\u6001\u4f4d\u56fe\u7684\u5730\u5740\u3002 \u6587\u4ef6\u52a0\u8f7d\u5668\u4f7f\u7528\u6b64\u65b9\u6cd5\u5c06\u56fe\u50cf\u6570\u636e\u590d\u5236\u5230\u4f4d\u56fe\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"static uint8_t* dynamicBitmapGetAddress(BitmapId id)\n")),(0,a.kt)("h3",s({},{id:"set-the-solid-area-of-a-dynamic-bitmap"}),"\u8bbe\u7f6e\u52a8\u6001\u4f4d\u56fe\u7684\u5b9e\u5fc3\u533a\u57df"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u8bbe\u7f6e\u52a8\u6001\u4f4d\u56fe\u7684\u5b9e\u5fc3\u77e9\u5f62\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)\n")),(0,a.kt)("p",null,"\u8bf7\u9605\u8bfb",(0,a.kt)("a",s({parentName:"p"},{href:"custom-widgets#solid-area"}),"Custom Widget"),"\u4e00\u8282\u4e2d\u5173\u4e8e\u201c\u5b9e\u5fc3\u533a\u57df\u201d\u6982\u5ff5\u7684\u66f4\u591a\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u50cfRGB565\u548cRGB888\u8fd9\u6837\u7684\u975e\u900f\u660e\u683c\u5f0f\uff0c\u5c06\u5b9e\u5fc3\u533a\u57df\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u6574\u4e2a\u4f4d\u56fe\u3002 \u5bf9\u4e8e\u50cfARGB8888\u8fd9\u6837\u7684\u900f\u660e\u683c\u5f0f\uff0c\u5c06\u5b9e\u5fc3\u533a\u57df\u8bbe\u7f6e\u4e3a\u7a7a\u3002"),(0,a.kt)("h2",s({},{id:"dynamic-bitmap-in-portrait-mode"}),"\u7ad6\u5c4f\u6a21\u5f0f\u7684\u52a8\u6001\u4f4d\u56fe"),(0,a.kt)("p",null,"TouchGFX\u80fd\u4ee5\u7ad6\u5c4f\u6a21\u5f0f\u8fd0\u884c\u3002 \u8fd9\u9002\u7528\u4e8e\u663e\u793a\u5668\u81ea\u5176\u539f\u59cb\u65b9\u5411\u65cb\u8f6c90\u5ea6\u540e\u5b89\u88c5\u7684\u60c5\u51b5\u3002 \u5728\u8be5\u6a21\u5f0f\u4e0b\u4f7f\u7528\u52a8\u6001\u4f4d\u56fe\u65f6\uff0c\u9700\u8981\u683c\u5916\u5c0f\u5fc3\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662fSTM32F746\u7684\u9879\u76ee\u793a\u4f8b\u3002 \u5b83\u7684\u663e\u793a\u5668\u5bbd\u5ea6\u4e3a480\u50cf\u7d20\uff0c\u9ad8\u5ea6\u4e3a272\u50cf\u7d20\u3002 \u5e27\u7f13\u51b2\u5177\u6709\u76f8\u540c\u5927\u5c0f\u3002"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/designer-portrait.png",noShadow:"true",width:"480",mdxType:"Figure"},"\u7ad6\u5c4f\u9879\u76ee"),(0,a.kt)("p",null,"\u6ca1\u6709\u4e3aimage1\u56fe\u50cf\u5c0f\u90e8\u4ef6\u5206\u914d\u4f4d\u56fe\u3002 \u6211\u4eec\u5c06\u4f7f\u7528\u5b83\u663e\u793a\u52a8\u6001\u4f4d\u56fe\u3002"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u7ad6\u5c4f\u6a21\u5f0f\u65f6\uff0c\u5750\u6807\u7cfb\u6cbf\u9006\u65f6\u9488\u65b9\u5411\u65cb\u8f6c90\u5ea6\u3002 (0, 0) \u5750\u6807\u4f4d\u4e8e\u201cD\u201d\u9644\u8fd1\u7684\u5de6\u4e0a\u89d2\u3002 \u5e27\u7f13\u51b2\u7684\u7b2c\u4e00\u4e2a\u5b57\u8282\uff08\u5c06\u5c4f\u5e55\u4e0a\u7b2c\u4e00\u4e2a\u50cf\u7d20\u7740\u8272\uff09\uff0c\u4f4d\u4e8e\u53f3\u4e0a\u89d2\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5f53\u4ee5\u7ad6\u5c4f\u6a21\u5f0f\u8fd0\u884c\u65f6\uff0c",(0,a.kt)("em",{parentName:"p"},"\u4e0d"),"\u65cb\u8f6c\u5e27\u7f13\u51b2\u3002 This is also true for dynamic bitmaps. But the pixels we want to be shown on first line on the display (as mounted) must be drawn on the left edge in the framebuffer."),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u51fd\u6570\u4e2d\u521b\u5efa\u52a8\u6001\u4f4d\u56fe\uff0c\u4f7f\u4e0a\u9762\u4e00\u884c\u4e3a\u7eff\u8272\u4e14\u53f3\u8fb9\u7f18\u4e3a\u7ea2\u8272\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{13-14,16-21}","{13-14,16-21}":!0}),"void Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    BitmapId bmpId;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::RGB565);\n\n    if (bmpId != BITMAP_INVALID)\n    {\n        //set all pixels white\n        uint16_t* const bitmapPixels = (uint16_t*)Bitmap::dynamicBitmapGetAddress(bmpId);\n        memset(bitmapPixels, 0xFF, 100*100*2);\n\n        //first 200 pixels red, => two column on the right on display\n        for (int i = 0; i<200; i++) bitmapPixels[i] = 0xF800;\n\n        //first two pixels in all rows green in bitmap => top two rows on display\n        for (int i = 0; i<100; i++)\n        {\n            bitmapPixels[i*100]     = 0x07E0;\n            bitmapPixels[i*100 + 1] = 0x07E0;\n        }\n    }\n\n    image1.setBitmap(bmpId);\n}\n")),(0,a.kt)("p",null,"\u663e\u793a\u5668\u663e\u793a\u52a8\u6001\u4f4d\u56fe\uff1a"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/stm32f746-portrait.png",noShadow:"true",width:"272",mdxType:"Figure"},"\u7ad6\u5c4f\u9879\u76ee\u5e27\u7f13\u51b2\u5185\u5bb9"))}k.isMDXComponent=!0}}]);