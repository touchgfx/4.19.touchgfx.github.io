"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2788],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,h=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,c=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return c}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},64593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return v},default:function(){return y}});var r=n(3905),a=n(44035),o=n(22425),c=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&s(e,n,t[n]);return e};const h={id:"font-cache",title:"\u5b57\u4f53\u7f13\u5b58"},m=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/font-cache",id:"development/ui-development/touchgfx-engine-features/font-cache",isDocsHomePage:!1,title:"\u5b57\u4f53\u7f13\u5b58",description:"\u672c\u8282\u63cf\u8ff0\u5982\u4f55\u4f7f\u7528\u5b57\u4f53\u7f13\u5b58\u5904\u7406TouchGFX\u4e2d\u7684\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/font-cache.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/font-cache",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/font-cache",tags:[],version:"current",frontMatter:{id:"font-cache",title:"\u5b57\u4f53\u7f13\u5b58"},sidebar:"docs",previous:{title:"Binary Fonts",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"},next:{title:"Binary Translations",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"}},v=[{value:"\u5b57\u4f53\u7f13\u5b58",id:"font-caching",children:[],level:2},{value:"\u5728\u5e94\u7528\u4ee3\u7801\u4e2d\u4f7f\u7528\u5b57\u4f53\u7f13\u5b58",id:"using-the-font-cache-in-application-code",children:[],level:2},{value:"\u7f13\u5b58\u5b57\u6bcd",id:"caching-letters",children:[],level:2},{value:"\u7f13\u5b58\u8fde\u5b57",id:"caching-ligatures",children:[],level:2},{value:"\u5185\u5b58\u4f7f\u7528",id:"memory-usage",children:[],level:2},{value:"\u7f13\u5b58GSUB\u8868",id:"caching-gsub-tables",children:[],level:2},{value:"\u5b9e\u73b0\u5b57\u4f53\u6587\u4ef6\u9605\u8bfb\u5668",id:"implementing-the-font-file-reader",children:[],level:2}],b={toc:v};function y(e){var t,n=e,{components:c}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),s),i(t,l({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u5982\u4f55\u4f7f\u7528\u5b57\u4f53\u7f13\u5b58\u5904\u7406TouchGFX\u4e2d\u7684\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u8bf7\u5148\u9605\u8bfb",(0,r.kt)("a",f({parentName:"p"},{href:"using-binary-fonts"}),"\u4e8c\u8fdb\u5236\u5b57\u4f53"),"\u7684\u76f8\u5173\u5185\u5bb9\u3002"),(0,r.kt)("h2",f({},{id:"font-caching"}),"\u5b57\u4f53\u7f13\u5b58"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u9700\u8981\u5c06\u6574\u4e2a\u5b57\u4f53\u52a0\u8f7d\u5230\u5b58\u50a8\u5668\u3002 \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5b57\u4f53\u5f88\u5927\uff0c\u5982\u5927\u5b57\u53f7\u4e2d\u6587\u5b57\u4f53\uff0c\u5219\u8fd9\u6837\u505a\u53ef\u80fd\u4e0d\u53ef\u53d6\u3002"),(0,r.kt)("p",null,"\u5b57\u4f53\u7f13\u5b58\u4f7f\u5e94\u7528\u80fd\u591f\u4ece\u5916\u90e8\u5b58\u50a8\u5668\u53ea\u80fd\u52a0\u8f7d\u663e\u793a\u5b57\u7b26\u4e32\u6240\u9700\u7684\u5b57\u6bcd\u3002 \u8fd9\u610f\u5473\u7740\u6574\u4e2a\u5b57\u4f53\u65e0\u9700\u4fdd\u5b58\u5230\u5728\u53ef\u5bfb\u5740\u95ea\u5b58\u6216RAM\u4e0a\uff0c\u800c\u662f\u53ea\u9700\u4fdd\u5b58\u5728\u66f4\u5927\u7684\u6587\u4ef6\u7cfb\u7edf\u4e0a\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u56fe\u4e2d\uff0c\u5185\u7f16\u8bd1\u5b57\u4f53Font2\u5df2\u88ab\u5b57\u4f53\u7f13\u5b58\u66ff\u4ee3\u3002 \u5f53TouchGFX\u4f7f\u7528Font2\u7ed8\u5236\u6587\u672c\u65f6\uff0c TouchGFX\u4f1a\u627e\u5230\u6307\u5411\u5b57\u4f53\u8868\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"CachedFont"),"\u5bf9\u8c61\u7684\u6307\u9488\u3002 \u6b64\u7279\u6b8a\u5b57\u4f53\u5c06\u67e5\u627eFontCache\u5bf9\u8c61\u4e2d\u7684\u5b57\u6bcd\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-font-cache/fontcache1.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u4f7f\u7528\u7f13\u5b58\u5b57\u4f53"),(0,r.kt)("p",null,"CachedFont\u8bbe\u7f6e\u4e86\u6307\u5411\u5185\u8054\u5b57\u4f53\uff08\u4e0a\u9762\u7684Font2\uff09\u7684\u6307\u9488\u3002 \u5f53TouchGFX\u8981\u6c42CachedFont\u63d0\u4f9b\u7279\u6b8a\u5b57\u6bcd\u65f6\uff0ccachedFont\u5c06\u9996\u5148\u67e5\u627e\u5b83\u66ff\u4ee3\u7684\u666e\u901a\u5b57\u4f53\uff08Font2\uff09\u3002 \u8be5\u5b57\u4f53\u53ef\u80fd\u662f\u7a7a\u5b57\u4f53\uff0c\u4f46\u4e5f\u53ef\u80fd\u662f\u5305\u542b\u4e00\u4e9b\u5e38\u7528\u5b57\u6bcd\u7684\u201c\u666e\u901a\u201d\u5b57\u4f53\u3002 \u5982\u679c\u5b57\u4f53\u4e0d\u5305\u542b\u9700\u8981\u7684\u5b57\u6bcd\uff0cCachedFont\u5c06\u67e5\u627eFontCache\uff0c\u4ee5\u4fbf\u786e\u5b9a\u662f\u5426\u5df2\u4ece\u6587\u4ef6\u7cfb\u7edf\u52a0\u8f7d\u4e86\u5b57\u6bcd\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u65e0\u9700\u7f13\u5b58\u6b63\u5e38\u5b57\u4f53\u4e2d\u5df2\u6709\u7684\u5b57\u6bcd\uff0c\u6b64\u539f\u5219\u9650\u5236\u4e86\u5fc5\u987b\u7f13\u5b58\u7684\u5b57\u6bcd\u6570\u91cf\u3002"),(0,r.kt)("h2",f({},{id:"using-the-font-cache-in-application-code"}),"\u5728\u5e94\u7528\u4ee3\u7801\u4e2d\u4f7f\u7528\u5b57\u4f53\u7f13\u5b58"),(0,r.kt)("p",null,"\u5728\u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5CachedFont\u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u521b\u5efaFontCache\u3001\u5b58\u50a8\u7f13\u51b2\u533a\u548c\u6587\u4ef6\u7cfb\u7edf\u9605\u8bfb\u5668\u5bf9\u8c61\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb\nFontCache fontCache;\nCachedFont cachedFont;  //Cached Font object\nFileDataReader reader;  //Filesystem reader object\n")),(0,r.kt)("p",null,"FontCache\u5fc5\u987b\u94fe\u63a5\u5230\u7f13\u51b2\u533a\u548c\u9605\u8bfb\u5668\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//setup the font cache with buffer and size; and file reader object\nfontCache.setMemory(fontdata, 5120);\nfontCache.setReader(&reader);\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5e94\u7528\u53ef\u4ee5\u8bbe\u7f6e\u5b57\u4f53\u7f13\u5b58\uff0c\u521d\u59cb\u5316CachedFont\u5e76\u5c06\u5b83\u4f20\u9012\u7ed9TouchGFX\u3002"),(0,r.kt)("p",null,"\u5b57\u4f53\u7f13\u5b58\u9700\u8981\u7528TextId\u6765\u521d\u59cb\u5316CachedFont\u5bf9\u8c61\u3002 TextId\u7528\u4e8e\u67e5\u627eCachedFont\u5fc5\u987b\u6307\u5411\u7684\u5b57\u4f53\u3002 \u8fd9\u786e\u4fdd\u60a8\u66ff\u6362\u7684\u662f\u663e\u793a\u5668\u4e0a\u7684\u6587\u672c\u4f7f\u7528\u7684\u5b57\u4f53\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//initialize the cachedFont object to the font used by T_SINGLEUSEID1\nTypedText text = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont);\n\n//replace the linked in font in TouchGFX with cachedFont\nTypedTextDatabase::setFont(DEFAULT, &cachedFont);\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u53ef\u4ee5\u653e\u5728\u5e94\u7528\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u3002 \u5982\u679c\u7f13\u5b58\u5b57\u4f53\u53ea\u7528\u5728\u7279\u5b9a\u89c6\u56fe\u4e2d\uff0c\u6b64\u89c6\u56fe\u53ef\u80fd\u662f\u63d2\u5165\u4ee3\u7801\u7684\u7406\u60f3\u4f4d\u7f6e\u3002"),(0,r.kt)("h2",f({},{id:"caching-letters"}),"\u7f13\u5b58\u5b57\u6bcd"),(0,r.kt)("p",null,"\u5b57\u4f53\u7f13\u5b58\u4ecd\u7136\u4e3a\u7a7a\u3002 \u5fc5\u987b\u5148\u4ece\u5b57\u4f53\u7f13\u5b58\u8bfb\u53d6\u5b57\u6bcd\uff0c\u7136\u540e\u624d\u80fd\u663e\u793a\u5b57\u6bcd\u3002 \u8fd9\u662f\u901a\u8fc7\u5c06\u7edf\u4e00\u7801\uff08\u5b57\u7b26\u4e32\uff09\u9635\u5217\u4f20\u9012\u5230\u5b57\u4f53\u7f13\u5b58\u6765\u5b8c\u6210\u7684\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ea\u4eceT_SINGLEUSEID1\u4f20\u9012\u6587\u672c\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheString(text, str);\n")),(0,r.kt)("p",null,"\u5b57\u4f53\u7f13\u5b58\u5c06\u901a\u8fc7\u9605\u8bfb\u5668\u5bf9\u8c61\u52a0\u8f7d\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"\u9635\u5217\u4e2d\u627e\u5230\u7684\u5b57\u6bcd\u3002 \u8bfb\u53d6\u7684\u7edf\u4e00\u7801\u5c06\u94fe\u63a5\u5230TextId ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"\u53c2\u6570\u4f7f\u7528\u7684\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u6b64\u5e94\u7528\u8d1f\u8d23\u914d\u7f6e\u8981\u4ece\u6b63\u786e\u7684\u6587\u4ef6\u52a0\u8f7d\u7684\u9605\u8bfb\u5668\u5bf9\u8c61\u3002"),(0,r.kt)("h2",f({},{id:"caching-ligatures"}),"\u7f13\u5b58\u8fde\u5b57"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5728\u663e\u793a\u524d\u5c06\u7edf\u4e00\u7801\u5e8f\u5217\u8f6c\u6362\u4e3a\u5176\u4ed6\u7edf\u4e00\u7801\u7684\u8bed\u8a00\uff08\u5982\u963f\u62c9\u4f2f\u8bed\u548c\u5929\u57ce\u4f53\uff09\uff0c\u4ee5\u4e0a\u65b9\u6cd5\u4e0d\u9002\u5408\u3002 \u5b83\u7f13\u5b58\u539f\u59cb\u7edf\u4e00\u7801\u800c\u4e0d\u662f\u8f6c\u6362\u540e\u663e\u793a\u7684\u7edf\u4e00\u7801\u3002 \u6b64\u65b9\u6cd5\u5c06\u8f6c\u6362\u7ed9\u5b9a\u7edf\u4e00\u7801\u5e76\u7f13\u5b58\u9700\u8981\u7684\u7edf\u4e00\u7801\uff08\u8f6c\u6362\u540e\uff09\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1 after conversion\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheLigatures(cachedFont, text, str);\n")),(0,r.kt)("h2",f({},{id:"memory-usage"}),"\u5185\u5b58\u4f7f\u7528"),(0,r.kt)("p",null,"\u5b57\u4f53\u7f13\u5b58\u53ef\u4ee5\u8ba1\u7b97\u5f53\u524d\u5185\u5b58\u4f7f\u7528\u91cf\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());\n')),(0,r.kt)("h2",f({},{id:"caching-gsub-tables"}),"\u7f13\u5b58GSUB\u8868"),(0,r.kt)("p",null,"\u5728\u6e32\u67d3\u65f6\uff0c\u4e00\u4e9b\u5b57\u4f53\u4f7f\u7528GSUB\u8868\u3002 \u8fd9\u53ea\u662f\u4e1c\u65b9\u8bed\u8a00\u7684\u51e0\u79cd\u5b57\u4f53\uff0c\u5982\u5929\u57ce\u4f53\u5b57\u4f53\u3002 GSUB\u8868\u4f7f\u5b57\u4f53\u7cfb\u7edf\u80fd\u591f\u91cd\u65b0\u6392\u5217\u5b57\u7b26\u5e76\u7528\u5b57\u7b26\u5e8f\u5217\u4ee3\u66ff\u5176\u4ed6\u201c\u7ec4\u5408\u201d\u5b57\u7b26\u3002"),(0,r.kt)("p",null,"\u5b57\u4f53\u7f13\u5b58\u53ef\u4ee5\u4ece\u6587\u4ef6\u7cfb\u7edf\u52a0\u8f7d\u6b64GSUB\u8868\u3002 \u5982\u672a\u52a0\u8f7d\uff0c\u5219\u6587\u672c\u6e32\u67d3\u7cfb\u7edf\u65e0GSUB\u8868\u53ef\u7528\uff0c\u5c06\u65e0\u6cd5\u6b63\u786e\u663e\u793a\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u5728\u521d\u59cb\u5316\u7f13\u5b58\u5b57\u4f53\u65f6\uff0c\u901a\u8fc7\u63d0\u4f9b\u989d\u5916\u53c2\u6570\u52a0\u8f7dGSUB\u8868\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{3-3}","{3-3}":!0}),"//initialize the cachedFont and load the GSUB table\ntext = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont, true);\n")),(0,r.kt)("h2",f({},{id:"implementing-the-font-file-reader"}),"\u5b9e\u73b0\u5b57\u4f53\u6587\u4ef6\u9605\u8bfb\u5668"),(0,r.kt)("p",null,"TouchGFX\u4e0d\u5305\u542b\u4ee5\u4e0a\u793a\u4f8b\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684FileDataReader\u7c7b\uff0c\u5b83\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u666e\u901a\u201cstdio\u201d\u517c\u5bb9\u6587\u4ef6\u7cfb\u7edf\u7684\u4e00\u4e2a\u793a\u4f8b\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,13-13,17-17,21-21}","{5-5,13-13,17-17,21-21}":!0}),'class FileDataReader : public FontDataReader\n{\npublic:\n    virtual ~FileDataReader() { }\n    virtual void open()\n    {\n        fp = fopen("Font_verdana_20_4bpp.bin", "rb");\n        if (!fp)\n        {\n            touchgfx_printf("Unable to open font file!!!\\n");\n        }\n    }\n    virtual void close()\n    {\n        fclose(fp);\n    }\n    virtual void setPosition(uint32_t position)\n    {\n        fseek(fp, position, SEEK_SET);\n    }\n    virtual void readData(void* out, uint32_t numberOfBytes)\n    {\n        fread(out, numberOfBytes, 1, fp);\n    }\nprivate:\n    FILE* fp;\n};\n')),(0,r.kt)("p",null,"FileDataReader\u7c7b\u4eceFontCache.hpp\u5b9e\u73b0FontDataReader\u63a5\u53e3\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"FontCache.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{5-8}","{5-8}":!0}),"class FontDataReader\n{\npublic:\n    virtual ~FontDataReader() { }\n    virtual void open() = 0;\n    virtual void close() = 0;\n    virtual void setPosition(uint32_t position) = 0;\n    virtual void readData(void* out, uint32_t numberOfBytes) = 0;\n};\n")))}y.isMDXComponent=!0}}]);