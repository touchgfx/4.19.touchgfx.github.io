"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7246],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),s=i,f=u["".concat(o,".").concat(s)]||u[s]||d[s]||r;return n?a.createElement(f,p(p({ref:t},m),{},{components:n})):a.createElement(f,p({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,p=(0,i.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:p,target:"_blank"},a.createElement("img",{width:n,height:r,src:p})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:p,target:"_blank"},a.createElement("img",{width:n,height:r,src:p})),a.createElement("p",null,e.children))}},35096:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return p}});var a=n(11368),i=n(35096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;const p=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+p:p}(t,e,n,a)}}function p(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},61677:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return h},toc:function(){return b},default:function(){return k}});var a=n(3905),i=n(44035),r=n(22425),p=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&u(e,n,t[n]);return e};const f={id:"dynamic-bitmaps",title:"\ub3d9\uc801 \ube44\ud2b8\ub9f5"},g=void 0,h={unversionedId:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",id:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",isDocsHomePage:!1,title:"\ub3d9\uc801 \ube44\ud2b8\ub9f5",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ucef4\ud30c\uc77c\ub418\ub294 \uac83\uc740 \ud45c\uc900 \ube44\ud2b8\ub9f5\uc774\uae30 \ub54c\ubb38\uc5d0 \ucef4\ud30c\uc77c\ud560 \ub54c\ub294 \ud45c\uc900 \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. \ube44\ud2b8\ub9f5\uc740 PNG \ud30c\uc77c \ub4f1\uc5d0\uc11c \ubcc0\ud658\ub418\uc5b4 \ud06c\uae30 \ubc0f \ud615\uc2dd \uc815\ubcf4\uc640 \ud568\uaed8 \ub0b4\ubd80 \ud615\uc2dd\uc73c\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",permalink:"/4.19/ko/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",tags:[],version:"current",frontMatter:{id:"dynamic-bitmaps",title:"\ub3d9\uc801 \ube44\ud2b8\ub9f5"},sidebar:"docs",previous:{title:"\uce94\ubc84\uc2a4 \uc704\uc82f",permalink:"/4.19/ko/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"},next:{title:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8",permalink:"/4.19/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"}},b=[{value:"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uad6c\uc131",id:"dynamic-bitmap-configuration",children:[],level:2},{value:"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc0ac\uc6a9 \uc608",id:"using-a-dynamic-bitmap-example",children:[],level:2},{value:"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc5f0\uc0b0",id:"dynamic-bitmap-operations",children:[{value:"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc0dd\uc131\ud558\uae30",id:"creating-a-dynamic-bitmap",children:[],level:3},{value:"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc0ad\uc81c\ud558\uae30",id:"deleting-a-dynamic-bitmap",children:[],level:3},{value:"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \ud53d\uc140 \uc8fc\uc18c \uac00\uc838\uc624\uae30",id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap",children:[],level:3},{value:"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \ubd88\ud22c\uba85\ud55c \uc601\uc5ed \uc124\uc815\ud558\uae30",id:"set-the-solid-area-of-a-dynamic-bitmap",children:[],level:3}],level:2},{value:"\uc138\ub85c \ubaa8\ub4dc\uc758 \ub3d9\uc801 \ube44\ud2b8\ub9f5",id:"dynamic-bitmap-in-portrait-mode",children:[],level:2}],y={toc:b};function k(e){var t,n=e,{components:p}=n,u=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},y),u),c(t,o({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ucef4\ud30c\uc77c\ub418\ub294 \uac83\uc740 \ud45c\uc900 \ube44\ud2b8\ub9f5\uc774\uae30 \ub54c\ubb38\uc5d0 \ucef4\ud30c\uc77c\ud560 \ub54c\ub294 \ud45c\uc900 \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. \ube44\ud2b8\ub9f5\uc740 PNG \ud30c\uc77c \ub4f1\uc5d0\uc11c \ubcc0\ud658\ub418\uc5b4 \ud06c\uae30 \ubc0f \ud615\uc2dd \uc815\ubcf4\uc640 \ud568\uaed8 \ub0b4\ubd80 \ud615\uc2dd\uc73c\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub610\ud55c \ub7f0\ud0c0\uc784\uc5d0\uc11c\ub294 \ube44\ud2b8\ub9f5\uc744 RAM\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774\ub97c ",(0,a.kt)("em",{parentName:"p"},"\ub3d9\uc801 \ube44\ud2b8\ub9f5"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \ub2e4\ub9cc \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ucef4\ud30c\uc77c\ub418\ub294 \uc815\uc801 \ube44\ud2b8\ub9f5\uc73c\ub85c\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 Image \uc704\uc82f\uacfc Button \uc704\uc82f\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",s({},{id:"dynamic-bitmap-configuration"}),"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uad6c\uc131"),(0,a.kt)("p",null,"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud558\uba74 \ube44\ud2b8\ub9f5 \uce90\uc2dc\uc5d0\uc11c \ud53d\uc140 \uba54\ubaa8\ub9ac\uac00 \ud560\ub2f9\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub97c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub294 TouchGFX Designer\ub098 Generator\uc5d0\uc11c \uad6c\uc131\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc9c1\uc811 \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc790\uc138\ud55c \uad6c\uc131 \ubc29\ubc95\uc740 ",(0,a.kt)("a",s({parentName:"p"},{href:"caching-bitmaps"}),"\ube44\ud2b8\ub9f5 \uce90\uc2f1"),"\uc5d0\uc11c \ud574\ub2f9 \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \ucd5c\ub300 \uc218\ub97c \uc815\uc758\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \ucd5c\ub300 \uac12\uc740 \ube44\ud2b8\ub9f5 \uce90\uc2dc \uc8fc\uc18c \ubc0f \ud06c\uae30\uc640 \ud568\uaed8 TouchGFX\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \ucd5c\ub300 \uc218\ub97c ",(0,a.kt)("strong",{parentName:"p"},"4"),"\ub85c \uc9c0\uc815\ud558\uc5ec \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud30c\uc77c\uc5d0\uc11c \uc774\ub7ec\ud55c \uad6c\uc131\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8 \ud55c \ubc88\ub9cc \uad6c\uc131\ud574\uc57c \ud55c\ub2e4\uba74 FrontendApplication.cpp \ud30c\uc77c\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,10-10}","{2-2,10-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n}\n")),(0,a.kt)("p",null,"Windows \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \uc5ec\uae30\uc5d0\uc11c \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub97c \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. Windows\uc5d0\uc11c\ub294 \ud070 \ubc30\uc5f4\uc744 \uc120\uc5b8\ud558\uac70\ub098 malloc\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc27d\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{9-10}","{9-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n#ifdef SIMULATOR\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    uint16_t* const cacheStartAddr = (uint16_t*)malloc(cacheSize);\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#else\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#endif\n}\n")),(0,a.kt)("h2",s({},{id:"using-a-dynamic-bitmap-example"}),"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc0ac\uc6a9 \uc608"),(0,a.kt)("p",null,"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \ud45c\uc2dc\ud560 \uc704\uc82f\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 Image \uc704\uc82f\uc744 View\uc5d0 \uc0bd\uc785\ud569\ub2c8\ub2e4(\ucf54\ub4dc \ub610\ub294 Designer\uc5d0\uc11c)."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{6-6}","{6-6}":!0}),"#include <touchgfx/widgets/Image.hpp>\nusing namespace touchgfx;\nclass TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,a.kt)("p",null,"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc774 \uc704\uc82f\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 3\ub2e8\uacc4\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ube44\ud2b8\ub9f5 \uce90\uc2dc\uc5d0\uc11c \ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc0dd\uc131"),(0,a.kt)("li",{parentName:"ol"},"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uba54\ubaa8\ub9ac \uc18c\uac70"),(0,a.kt)("li",{parentName:"ol"},"\ube44\ud2b8\ub9f5\uc744 \uc704\uc82f\uc5d0 \ud560\ub2f9")),(0,a.kt)("p",null,"setupScreen\uc5d0\uc11c \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294 16bpp RGB565 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub9cc\uc57d \ud504\ub808\uc784\ubc84\ud37c\uac00 24\ube44\ud2b8\ub77c\uba74 RGB888 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud558\uace0, \ud22c\uba85\ud55c \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud558\ub824\uba74 ARGB8888 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \ud53d\uc140 \uc8fc\uc18c\ub294 dynamicBitmapGetAddress \ud568\uc218\uc5d0\uc11c \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{9-9,14-14}","{9-9,14-14}":!0}),"#include <touchgfx/Bitmap.hpp>\nvoid TemplateView::setupScreen()\n{\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of size 100x150\n    const int width = 100;\n    const int height = 150;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 150, Bitmap::RGB565);\n\n    //set all pixels white\n    if (bmpId != BITMAP_INVALID)\n    {\n       memset(Bitmap::dynamicBitmapGetAddress(bmpId), 0xFF, width*height*2);\n    }\n\n    //Make Image widget show the dynamic bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n")),(0,a.kt)("p",null,"\ube44\ud2b8\ub9f5 \uce90\uc2dc\uc5d0\uc11c \uac00\uc838\uc624\ub294 \ud53d\uc140 \uba54\ubaa8\ub9ac\ub294 \uc18c\uac70\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ubc14\ub85c \uc18c\uac70\ud558\uac70\ub098 \ub36e\uc5b4\uc4f0\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud30c\uc77c\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \ub85c\ub4dc\ud558\uace0 \uc2f6\ub2e4\uba74 memset \ud638\ucd9c\uc744 \ub85c\ub354 \ucf54\ub4dc\ub85c \ub300\uccb4\ud558\uba74 \ub429\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",s({parentName:"p"},{href:"../scenarios/loading-images-at-runtime"}),"\ub7f0\ud0c0\uc784\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub85c\ub4dc"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",s({},{id:"dynamic-bitmap-operations"}),"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc5f0\uc0b0"),(0,a.kt)("p",null,"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc5f0\uc0b0\uc740 \ubaa8\ub450 ",(0,a.kt)("a",s({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_bitmap"}),"\ube44\ud2b8\ub9f5")," \ud074\ub798\uc2a4\uc5d0\uc11c \ucc98\ub9ac\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",s({},{id:"creating-a-dynamic-bitmap"}),"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc0dd\uc131\ud558\uae30"),(0,a.kt)("p",null,"\ub2e4\uc74c \uba54\uc18c\ub4dc\ub294 \uc9c0\uc815\ub41c \uac00\ub85c, \uc138\ub85c \ubc0f \ube44\ud2b8\ub9f5 \ud615\uc2dd\uc73c\ub85c \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ube44\ud2b8\ub9f5\uc740 \ubbf8\uc0ac\uc6a9 \uba54\ubaa8\ub9ac\uac00 \ucda9\ubd84\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc0dd\uc131\ub429\ub2c8\ub2e4. \ube44\ud2b8\ub9f5\uc774 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc73c\uba74 \uba54\uc18c\ub4dc\uac00 BITMAP_INVALID\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format, ClutFormat clutFormat)\n")),(0,a.kt)("h3",s({},{id:"deleting-a-dynamic-bitmap"}),"\ub3d9\uc801 \ube44\ud2b8\ub9f5 \uc0ad\uc81c\ud558\uae30"),(0,a.kt)("p",null,"\uc544\ub798 \uba54\uc18c\ub4dc\ub294 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"static bool Bitmap::dynamicBitmapDelete(BitmapId id)\n")),(0,a.kt)("h3",s({},{id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap"}),"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \ud53d\uc140 \uc8fc\uc18c \uac00\uc838\uc624\uae30"),(0,a.kt)("p",null,"\uc544\ub798 \uba54\uc18c\ub4dc\ub294 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \uc8fc\uc18c\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \ud30c\uc77c \ub85c\ub354\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\ub97c \ube44\ud2b8\ub9f5\uc73c\ub85c \ubcf5\uc0ac\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"static uint8_t* dynamicBitmapGetAddress(BitmapId id)\n")),(0,a.kt)("h3",s({},{id:"set-the-solid-area-of-a-dynamic-bitmap"}),"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \ubd88\ud22c\uba85\ud55c \uc601\uc5ed \uc124\uc815\ud558\uae30"),(0,a.kt)("p",null,"\uc544\ub798 \uba54\uc18c\ub4dc\ub294 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc758 \ubd88\ud22c\uba85\ud55c \uc9c1\uc0ac\uac01\ud615\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)\n")),(0,a.kt)("p",null,"\u201c\ubd88\ud22c\uba85\ud55c \uc601\uc5ed\u201d \uac1c\ub150\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",s({parentName:"p"},{href:"custom-widgets#solid-area"}),"\ucee4\uc2a4\ud140 \uc704\uc82f")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \ubd88\ud22c\uba85\ud55c \uc601\uc5ed\uc740 RGB565\ub098 RGB888\uacfc \uac19\uc774 \ud22c\uba85\ud558\uc9c0 \uc54a\uc740 \ud615\uc2dd\uc77c \ub54c \uc804\uccb4 \ube44\ud2b8\ub9f5\uc73c\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. ARGB8888\uacfc \uac19\uc774 \ud22c\uba85\ud55c \ud615\uc2dd\uc77c \ub54c\ub294 \ube44\uc5b4 \uc788\ub3c4\ub85d \uc124\uc815\ub429\ub2c8\ub2e4."),(0,a.kt)("h2",s({},{id:"dynamic-bitmap-in-portrait-mode"}),"\uc138\ub85c \ubaa8\ub4dc\uc758 \ub3d9\uc801 \ube44\ud2b8\ub9f5"),(0,a.kt)("p",null,"TouchGFX\ub294 \uc138\ub85c \ubaa8\ub4dc\uc5d0\uc11c\ub3c4 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc138\ub85c \ubaa8\ub4dc\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uac00 \uae30\ubcf8 \ubc29\ud5a5\uc5d0\uc11c 90\ub3c4 \ud68c\uc804\ud558\uc5ec \uc7a5\ucc29\ub418\ub294 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc138\ub85c \ubaa8\ub4dc\uc5d0\uc11c \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub294 \uc880 \ub354 \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 STM32F746 \ud504\ub85c\uc81d\ud2b8 \uc608\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uac00\ub85c \ud53d\uc140\uc740 480\uc774\uace0, \uc138\ub85c \ud53d\uc140\uc740 272\uc785\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\uc758 \ud06c\uae30\ub3c4 \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/designer-portrait.png",noShadow:"true",width:"480",mdxType:"Figure"},"\uc138\ub85c \ubaa8\ub4dc \ud504\ub85c\uc81d\ud2b8"),(0,a.kt)("p",null,"image1 Image \uc704\uc82f\uc5d0\ub294 \uc5b4\ub5a0\ud55c \ube44\ud2b8\ub9f5\ub3c4 \ud560\ub2f9\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc774 \uc704\uc82f\uc744 \uc0ac\uc6a9\ud574 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \ud45c\uc2dc\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc138\ub85c \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \uc88c\ud45c\uacc4\uac00 \uc2dc\uacc4 \ubc18\ub300 \ubc29\ud5a5\uc73c\ub85c 90\ub3c4 \ud68c\uc804\ud569\ub2c8\ub2e4. \uc774\ub54c \u2018D\u2019\uc640 \uac00\uae4c\uc6b4 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\uac00 (0, 0) \uc88c\ud45c\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud504\ub808\uc784\ubc84\ud37c\uc758 (\uc2a4\ud06c\ub9b0\uc5d0\uc11c \uccab \ubc88\uc9f8 \ud53d\uc140\uc744 \ucc44\uc0c9\ud558\ub294) \uccab \ubc88\uc9f8 \ubc14\uc774\ud2b8\ub294 \uc624\ub978\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\uac00 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \ud504\ub808\uc784\ubc84\ud37c\ub294 \uc138\ub85c \ubaa8\ub4dc\ub85c \uc2e4\ud589\ud574\ub3c4 \ud68c\uc804\ud558\uc9c0 ",(0,a.kt)("em",{parentName:"p"},"\uc54a\uc2b5\ub2c8\ub2e4"),". This is also true for dynamic bitmaps. But the pixels we want to be shown on first line on the display (as mounted) must be drawn on the left edge in the framebuffer."),(0,a.kt)("p",null,"\uc544\ub798 \ud568\uc218\uc5d0\uc11c\ub294 \uc0c1\ub2e8 \ud589\uc744 \ub179\uc0c9\uc73c\ub85c, \uc624\ub978\ucabd \uac00\uc7a5\uc790\ub9ac\ub97c \ube68\uac04\uc0c9\uc73c\ub85c \ucc44\uc0c9\ud558\uc5ec \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{13-14,16-21}","{13-14,16-21}":!0}),"void Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    BitmapId bmpId;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::RGB565);\n\n    if (bmpId != BITMAP_INVALID)\n    {\n        //set all pixels white\n        uint16_t* const bitmapPixels = (uint16_t*)Bitmap::dynamicBitmapGetAddress(bmpId);\n        memset(bitmapPixels, 0xFF, 100*100*2);\n\n        //first 200 pixels red, => two column on the right on display\n        for (int i = 0; i<200; i++) bitmapPixels[i] = 0xF800;\n\n        //first two pixels in all rows green in bitmap => top two rows on display\n        for (int i = 0; i<100; i++)\n        {\n            bitmapPixels[i*100]     = 0x07E0;\n            bitmapPixels[i*100 + 1] = 0x07E0;\n        }\n    }\n\n    image1.setBitmap(bmpId);\n}\n")),(0,a.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/stm32f746-portrait.png",noShadow:"true",width:"272",mdxType:"Figure"},"\uc138\ub85c \ubaa8\ub4dc \ud504\ub85c\uc81d\ud2b8 \ud504\ub808\uc784\ubc84\ud37c \ub0b4\uc6a9"))}k.isMDXComponent=!0}}]);