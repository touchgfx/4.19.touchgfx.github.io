"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9302],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,h=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,c=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return c}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},97821:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return v},default:function(){return k}});var r=n(3905),a=n(44035),o=n(22425),c=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&s(e,n,t[n]);return e};const h={id:"font-cache",title:"\u5b57\u9ad4\u5feb\u53d6"},m=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/font-cache",id:"development/ui-development/touchgfx-engine-features/font-cache",isDocsHomePage:!1,title:"\u5b57\u9ad4\u5feb\u53d6",description:"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u4f7f\u7528\u5b57\u9ad4\u5feb\u53d6\u8655\u7406TouchGFX\u4e2d\u7684\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/font-cache.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/font-cache",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/font-cache",tags:[],version:"current",frontMatter:{id:"font-cache",title:"\u5b57\u9ad4\u5feb\u53d6"},sidebar:"docs",previous:{title:"\u4e8c\u9032\u4f4d\u5b57\u9ad4",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"},next:{title:"\u4e8c\u9032\u4f4d\u7ffb\u8b6f",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"}},v=[{value:"\u5b57\u9ad4\u5feb\u53d6",id:"font-caching",children:[],level:2},{value:"\u5728\u61c9\u7528\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u5b57\u9ad4\u5feb\u53d6",id:"using-the-font-cache-in-application-code",children:[],level:2},{value:"\u5feb\u53d6\u5b57\u6bcd",id:"caching-letters",children:[],level:2},{value:"Caching Ligatures",id:"caching-ligatures",children:[],level:2},{value:"\u8a18\u61b6\u9ad4\u4f7f\u7528",id:"memory-usage",children:[],level:2},{value:"\u5feb\u53d6GSUB\u8868",id:"caching-gsub-tables",children:[],level:2},{value:"\u5be6\u73fe\u5b57\u9ad4\u6a94\u95b1\u8b80\u5668",id:"implementing-the-font-file-reader",children:[],level:2}],b={toc:v};function k(e){var t,n=e,{components:c}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),s),i(t,l({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u4f7f\u7528\u5b57\u9ad4\u5feb\u53d6\u8655\u7406TouchGFX\u4e2d\u7684\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u8acb\u5148\u95b1\u8b80",(0,r.kt)("a",f({parentName:"p"},{href:"using-binary-fonts"}),"\u4e8c\u9032\u4f4d\u5b57\u9ad4"),"\u7684\u76f8\u95dc\u5167\u5bb9\u3002"),(0,r.kt)("h2",f({},{id:"font-caching"}),"\u5b57\u9ad4\u5feb\u53d6"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u9700\u8981\u5c07\u6574\u500b\u5b57\u9ad4\u8f09\u5165\u5230\u8a18\u61b6\u9ad4\u3002 \u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u5b57\u9ad4\u5f88\u5927\uff0c\u5982\u5927\u5b57\u578b\u4e2d\u6587\u5b57\u9ad4\uff0c\u5247\u9019\u6a23\u505a\u53ef\u80fd\u4e0d\u53ef\u884c\u3002"),(0,r.kt)("p",null,"\u5b57\u9ad4\u5feb\u53d6\u4f7f\u61c9\u7528\u80fd\u5920\u53ea\u5f9e\u5916\u90e8\u8a18\u61b6\u9ad4\u8f09\u5165\u986f\u793a\u5b57\u4e32\u6240\u9700\u7684\u5b57\u6bcd\u3002 \u9019\u610f\u5473\u8457\u6574\u500b\u5b57\u9ad4\u7121\u9700\u99d0\u7559\u5728\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4\u6216RAM\u4e0a\uff0c\u800c\u662f\u53ef\u4ee5\u4fdd\u5b58\u5728\u66f4\u5927\u7684\u6a94\u6848\u7cfb\u7d71\u4e0a\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u5716\u4e2d\uff0c\u5167\u7de8\u8b6f\u5b57\u9ad4Font2\u5df2\u88ab\u5b57\u9ad4\u5feb\u53d6\u66ff\u4ee3\u3002 \u7576TouchGFX\u4f7f\u7528Font2\u7e6a\u88fd\u6587\u672c\u6642\uff0c TouchGFX\u6703\u627e\u5230\u6307\u5411\u5b57\u9ad4\u8868\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"CachedFont"),"\u7684\u6307\u6a19\u3002 \u6b64\u7279\u6b8a\u5b57\u9ad4\u5c07\u67e5\u627eFontCache\u7269\u4ef6\u4e2d\u7684\u5b57\u6bcd\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-font-cache/fontcache1.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u4f7f\u7528\u5feb\u53d6\u5b57\u9ad4"),(0,r.kt)("p",null,"CachedFont\u8a2d\u7f6e\u4e86\u6307\u5411\u5167\u9023\u5b57\u9ad4\uff08\u4e0a\u9762\u7684Font2\uff09\u7684\u6307\u91dd\u3002 \u7576TouchGFX\u8981\u6c42CachedFont\u63d0\u4f9b\u7279\u6b8a\u5b57\u6bcd\u6642\uff0ccachedFont\u5c07\u9996\u5148\u67e5\u627e\u5b83\u66ff\u4ee3\u7684\u666e\u901a\u5b57\u9ad4\uff08Font2\uff09\u3002 \u8a72\u5b57\u9ad4\u53ef\u80fd\u662f\u7a7a\u5b57\u9ad4\uff0c\u4f46\u4e5f\u53ef\u80fd\u662f\u5305\u542b\u4e00\u4e9b\u5e38\u7528\u5b57\u6bcd\u7684\u201c\u666e\u901a\u201d\u5b57\u9ad4\u3002 \u5982\u679c\u5b57\u9ad4\u4e0d\u5305\u542b\u9700\u8981\u7684\u5b57\u6bcd\uff0cFontCache\u5c07\u67e5\u627eFontCache\uff0c\u4ee5\u4fbf\u78ba\u5b9a\u662f\u5426\u5df2\u5f9e\u6a94\u6848\u7cfb\u7d71\u8f09\u5165\u4e86\u5b57\u6bcd\u3002"),(0,r.kt)("p",null,"\u7531\u65bc\u7121\u9700\u5feb\u53d6\u6b63\u5e38\u5b57\u9ad4\u4e2d\u5df2\u6709\u7684\u5b57\u6bcd\uff0c\u6b64\u539f\u5247\u9650\u5236\u4e86\u5fc5\u9808\u5feb\u53d6\u7684\u5b57\u6bcd\u6578\u91cf\u3002"),(0,r.kt)("h2",f({},{id:"using-the-font-cache-in-application-code"}),"\u5728\u61c9\u7528\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u5b57\u9ad4\u5feb\u53d6"),(0,r.kt)("p",null,"\u5fc5\u9808\u5148\u5275\u5efaFontCache\u3001\u8a18\u61b6\u9ad4\u7de9\u885d\u5340\u548c\u6a94\u6848\u7cfb\u7d71\u95b1\u8b80\u5668\u7269\u4ef6\uff0c\u7136\u5f8c\u61c9\u7528\u624d\u80fd\u5b89\u88ddCachedFont\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb\nFontCache fontCache;\nCachedFont cachedFont;  //Cached Font object\nFileDataReader reader;  //Filesystem reader object\n")),(0,r.kt)("p",null,"FontCache\u5fc5\u9808\u9023\u7d50\u5230\u7de9\u885d\u5340\u548c\u95b1\u8b80\u5668\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//setup the font cache with buffer and size; and file reader object\nfontCache.setMemory(fontdata, 5120);\nfontCache.setReader(&reader);\n")),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u61c9\u7528\u53ef\u4ee5\u8a2d\u7f6e\u5b57\u9ad4\u5feb\u53d6\uff0c\u521d\u59cb\u5316CachedFont\u4e26\u5c07\u5b83\u50b3\u905e\u7d66TouchGFX\u3002"),(0,r.kt)("p",null,"\u5b57\u9ad4\u5feb\u53d6\u9700\u8981\u7528TextId\u4f86\u521d\u59cb\u5316CachedFont\u7269\u4ef6\u3002 TextId\u7528\u65bc\u67e5\u627eCachedFont\u5fc5\u9808\u6307\u5411\u7684\u5b57\u9ad4\u3002 \u9019\u78ba\u4fdd\u60a8\u66ff\u63db\u7684\u662f\u986f\u793a\u5668\u4e0a\u7684\u6587\u5b57\u4f7f\u7528\u7684\u5b57\u9ad4\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//initialize the cachedFont object to the font used by T_SINGLEUSEID1\nTypedText text = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont);\n\n//replace the linked in font in TouchGFX with cachedFont\nTypedTextDatabase::setFont(DEFAULT, &cachedFont);\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u653e\u5728\u61c9\u7528\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u3002 \u5982\u679c\u5feb\u53d6\u5b57\u9ad4\u53ea\u7528\u5728\u7279\u5b9a\u8996\u5716\u4e2d\uff0c\u6b64\u8996\u5716\u53ef\u80fd\u662f\u63d2\u5165\u7a0b\u5f0f\u78bc\u7684\u7406\u60f3\u4f4d\u7f6e\u3002"),(0,r.kt)("h2",f({},{id:"caching-letters"}),"\u5feb\u53d6\u5b57\u6bcd"),(0,r.kt)("p",null,"\u5b57\u9ad4\u5feb\u53d6\u4ecd\u7136\u70ba\u7a7a\u3002 \u5fc5\u9808\u5148\u5f9e\u5b57\u9ad4\u5feb\u53d6\u8b80\u53d6\u5b57\u6bcd\uff0c\u7136\u5f8c\u624d\u80fd\u986f\u793a\u5b57\u6bcd\u3002 \u9019\u662f\u901a\u904e\u5c07unicodes\uff08\u5b57\u4e32\uff09\u9663\u5217\u50b3\u905e\u5230\u5b57\u9ad4\u5feb\u53d6\u4f86\u5b8c\u6210\u7684\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u5011\u53ea\u5f9eT_SINGLEUSEID1\u50b3\u905e\u6587\u5b57\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheString(text, str);\n")),(0,r.kt)("p",null,"\u5b57\u9ad4\u7de9\u5b58\u5c07\u901a\u904e\u95b1\u8b80\u5668\u5c0d\u8c61\u8f09\u5165\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"\u9663\u5217\u4e2d\u627e\u5230\u7684\u5b57\u6bcd\u3002 \u8b80\u53d6\u7684unicodes\u5c07\u9023\u7d50\u5230TextId ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"\u53c3\u6578\u4f7f\u7528\u7684\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u6b64\u61c9\u7528\u8ca0\u8cac\u914d\u7f6e\u8981\u5f9e\u6b63\u78ba\u7684\u6a94\u6848\u8f09\u5165\u7684\u95b1\u8b80\u5668\u7269\u4ef6\u3002"),(0,r.kt)("h2",f({},{id:"caching-ligatures"}),"Caching Ligatures"),(0,r.kt)("p",null,"\u5c0d\u65bc\u5728\u986f\u793a\u524d\u5c07unicodes\u5e8f\u5217\u8f49\u63db\u70ba\u5176\u4ed6unicodes\u7684\u8a9e\u8a00\uff08\u5982\u963f\u62c9\u4f2f\u8a9e\uff09\uff0c\u4ee5\u4e0a\u65b9\u6cd5\u4e0d\u9069\u5408\u3002 \u5b83\u5feb\u53d6\u539f\u59cbunicodes \u800c\u4e0d\u662f\u8f49\u63db\u5f8c\u986f\u793a\u7684unicodes \u3002 \u6b64\u65b9\u6cd5\u5c07\u8f49\u63db\u7d66\u5b9aunicodes \u4e26\u5feb\u53d6\u9700\u8981\u7684unicodes \uff08\u8f49\u63db\u5f8c\uff09\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1 after conversion\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheLigatures(cachedFont, text, str);\n")),(0,r.kt)("h2",f({},{id:"memory-usage"}),"\u8a18\u61b6\u9ad4\u4f7f\u7528"),(0,r.kt)("p",null,"\u5b57\u9ad4\u5feb\u53d6\u53ef\u4ee5\u8a08\u7b97\u7576\u524d\u8a18\u61b6\u9ad4\u4f7f\u7528\u91cf\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());\n')),(0,r.kt)("h2",f({},{id:"caching-gsub-tables"}),"\u5feb\u53d6GSUB\u8868"),(0,r.kt)("p",null,"\u5728\u6e32\u67d3\u6642\uff0c\u4e00\u4e9b\u5b57\u9ad4\u4f7f\u7528GSUB\u8868\u3002 \u9019\u53ea\u662f\u6771\u65b9\u8a9e\u8a00\u7684\u5e7e\u7a2e\u5b57\u9ad4\uff0c\u5982\u5929\u57ce\u9ad4\u5b57\u9ad4\u3002 GSUB\u8868\u4f7f\u5b57\u9ad4\u7cfb\u7d71\u80fd\u5920\u91cd\u65b0\u6392\u5217\u5b57\u5143\u4e26\u7528\u5b57\u5143\u5e8f\u5217\u4ee3\u66ff\u5176\u4ed6\u201c\u7d44\u5408\u201d\u5b57\u5143\u3002"),(0,r.kt)("p",null,"\u5b57\u9ad4\u5feb\u53d6\u53ef\u4ee5\u5f9e\u6a94\u6848\u7cfb\u7d71\u8f09\u5165\u6b64GSUB\u8868\u3002 \u5982\u672a\u8f09\u5165\uff0c\u5247\u6587\u5b57\u6e32\u67d3\u7cfb\u7d71\u7121GSUB\u8868\u53ef\u7528\uff0c\u5c07\u7121\u6cd5\u6b63\u78ba\u986f\u793a\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u5728\u521d\u59cb\u5316\u5feb\u53d6\u5b57\u9ad4\u6642\uff0c\u901a\u904e\u63d0\u4f9b\u984d\u5916\u53c3\u6578\u8f09\u5165GSUB\u8868\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{3-3}","{3-3}":!0}),"//initialize the cachedFont and load the GSUB table\ntext = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont, true);\n")),(0,r.kt)("h2",f({},{id:"implementing-the-font-file-reader"}),"\u5be6\u73fe\u5b57\u9ad4\u6a94\u95b1\u8b80\u5668"),(0,r.kt)("p",null,"TouchGFX\u4e0d\u5305\u542b\u4ee5\u4e0a\u7bc4\u4f8b\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684FileDataReader\u985e\uff0c\u5b83\u53d6\u6c7a\u65bc\u4f7f\u7528\u7684\u4f5c\u696d\u7cfb\u7d71\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u666e\u901a\u201cstdio\u201d\u76f8\u5bb9\u6a94\u6848\u7cfb\u7d71\u7684\u4e00\u500b\u7bc4\u4f8b\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,13-13,17-17,21-21}","{5-5,13-13,17-17,21-21}":!0}),'class FileDataReader : public FontDataReader\n{\npublic:\n    virtual ~FileDataReader() { }\n    virtual void open()\n    {\n        fp = fopen("Font_verdana_20_4bpp.bin", "rb");\n        if (!fp)\n        {\n            touchgfx_printf("Unable to open font file!!!\\n");\n        }\n    }\n    virtual void close()\n    {\n        fclose(fp);\n    }\n    virtual void setPosition(uint32_t position)\n    {\n        fseek(fp, position, SEEK_SET);\n    }\n    virtual void readData(void* out, uint32_t numberOfBytes)\n    {\n        fread(out, numberOfBytes, 1, fp);\n    }\nprivate:\n    FILE* fp;\n};\n')),(0,r.kt)("p",null,"FileDataReader\u985e\u5f9eFontCache.hpp\u5be6\u73feFontDataReader\u4ecb\u9762\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"FontCache.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{5-8}","{5-8}":!0}),"class FontDataReader\n{\npublic:\n    virtual ~FontDataReader() { }\n    virtual void open() = 0;\n    virtual void close() = 0;\n    virtual void setPosition(uint32_t position) = 0;\n    virtual void readData(void* out, uint32_t numberOfBytes) = 0;\n};\n")))}k.isMDXComponent=!0}}]);