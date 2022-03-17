"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3515],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,g=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},44035:function(e,n,t){var r=t(67294),a=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return n?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:i,src:o})),r.createElement("p",null,e.children))}},35096:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return a}})},25026:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return o}});var r=t(11368),a=t(35096);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,r.Z)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(r)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+o:o}(n,e,t,r)}}function o(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},45568:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return g},metadata:function(){return m},toc:function(){return h},default:function(){return v}});var r=t(3905),a=t(44035),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(u)for(var t of u(n))s.call(n,t)&&p(e,t,n[t]);return e};const d={id:"using-binary-translations",title:"\u4e8c\u9032\u4f4d\u7ffb\u8b6f"},g=void 0,m={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-translations",id:"development/ui-development/touchgfx-engine-features/using-binary-translations",isDocsHomePage:!1,title:"\u4e8c\u9032\u4f4d\u7ffb\u8b6f",description:"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX\u4e2d\u4f7f\u7528\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u3002 \u6b63\u5e38\u60c5\u6cc1\u4e0b\uff0c\u6587\u5b57\u7ffb\u8b6f\u6a94\u6703\u88ab\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\u3002 This principle is efficient and easy to use. Binary translations keep the text translation out of the application. \u4e8c\u9032\u4f4d\u7ffb\u8b6f\u5728\u55ae\u7368\u7684\u4e8c\u9032\u4f4d\u6a94\u6848\u4e2d\u751f\u6210\uff0c\u8a72\u6a94\u53ef\u71d2\u9304\u5230\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u6216\u5b58\u5132\u5728SD\u5361\u7b49\u5b58\u653e\u88dd\u7f6e\u4e0a\u3002  \u5728\u8655\u7406\u5927\u91cf\u7ffb\u8b6f\u6a94\u6642\uff0c\u70ba\u61c9\u7528\u958b\u767c\u8005\u5e36\u4f86\u4e86\u66f4\u5927\u9748\u6d3b\u6027\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-translations.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-translations",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-translations",tags:[],version:"current",frontMatter:{id:"using-binary-translations",title:"\u4e8c\u9032\u4f4d\u7ffb\u8b6f"},sidebar:"docs",previous:{title:"\u5b57\u9ad4\u5feb\u53d6",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/font-cache"},next:{title:"\u5f8c\u7aef\u901a\u4fe1",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/backend-communication"}},h=[{value:"\u7ffb\u8b6f",id:"translations",children:[],level:3},{value:"\u914d\u7f6e\u6587\u5b57\u8f49\u63db\u5668",id:"configuring-the-text-converter",children:[],level:3},{value:"\u5b89\u88dd\u4e8c\u9032\u4f4d\u7ffb\u8b6f",id:"installing-a-binary-translation",children:[],level:3}],y={toc:h};function v(e){var n,t=e,{components:i}=t,p=((e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=f(f({},y),p),o(n,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX\u4e2d\u4f7f\u7528\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u3002 \u6b63\u5e38\u60c5\u6cc1\u4e0b\uff0c\u6587\u5b57\u7ffb\u8b6f\u6a94\u6703\u88ab\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\u3002 This principle is efficient and easy to use. Binary translations keep the text translation out of the application. \u4e8c\u9032\u4f4d\u7ffb\u8b6f\u5728\u55ae\u7368\u7684\u4e8c\u9032\u4f4d\u6a94\u6848\u4e2d\u751f\u6210\uff0c\u8a72\u6a94\u53ef\u71d2\u9304\u5230\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u6216\u5b58\u5132\u5728SD\u5361\u7b49\u5b58\u653e\u88dd\u7f6e\u4e0a\u3002  \u5728\u8655\u7406\u5927\u91cf\u7ffb\u8b6f\u6a94\u6642\uff0c\u70ba\u61c9\u7528\u958b\u767c\u8005\u5e36\u4f86\u4e86\u66f4\u5927\u9748\u6d3b\u6027\u3002"),(0,r.kt)("h3",f({},{id:"translations"}),"\u7ffb\u8b6f"),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684Text\u985e\u5305\u542b\u6307\u6a19\u9663\u5217\uff0c\u6307\u6a19\u6307\u5411\u61c9\u7528\u4e2d\u6bcf\u7a2e\u8a9e\u8a00\u7684\u7ffb\u8b6f\u8868\u3002 \u7ffb\u8b6f\u8868\u57fa\u672c\u4e0a\u662f\u8a9e\u8a00\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u5b57\u4e32\u7684\u96c6\u5408\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",noShadow:"true",width:"420",mdxType:"Figure"},"\u5c07\u6587\u5b57\u6620\u5c04\u5230\u7279\u5b9a\u8a9e\u8a00"),(0,r.kt)("p",null,"\u6b64\u8868\u4f7fTouchGFX\u80fd\u5920\u627e\u5230\u4ee5\u9078\u4e2d\u8a9e\u8a00\u66f8\u5beb\u7684\u7d66\u5b9a\u6587\u5b57\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-translations/binary-translation.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u6620\u5c04\u5230\u4e8c\u9032\u4f4d\u7ffb\u8b6f"),(0,r.kt)("p",null,"\u5728\u57f7\u884c\u6642\u9593\u4f7f\u7528\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u6642\uff0c\u53ef\u4ee5\u5c07\u6620\u5c04\u5f9e\u5167\u7de8\u8b6f\u7ffb\u8b6f\u66f4\u6539\u70ba\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u3002 \u5fc5\u9808\u5728\u53ef\u5b9a\u5740\u8a18\u61b6\u9ad4\uff08\u5feb\u9583\u8a18\u61b6\u9ad4\u6216RAM\uff09\u4e2d\u63d0\u4f9b\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u5f9e\u786c\u789f\u8f09\u5165\u6216\u5728\u751f\u7522\u904e\u7a0b\u4e2d\u5beb\u5165\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("h3",f({},{id:"configuring-the-text-converter"}),"\u914d\u7f6e\u6587\u5b57\u8f49\u63db\u5668"),(0,r.kt)("p",null,"\u53ef\u5c07TouchGFX\u6587\u5b57\u8f49\u63db\u5668\u914d\u7f6e\u70ba\u751f\u6210\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u3002 \u9019\u5728TouchGFX Designer 4.13\u4e2d\u5f88\u5bb9\u6613\u505a\u5230\u3002 \u8f49\u81f3\u201cConfig\u201d\u9078\u9805\u5361\uff0c\u9078\u64c7\u201cText Configuration\u201d\uff0c\u7136\u5f8c\u9ede\u64ca\u201cBinary translation files\u201d"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-translations/designer-text-config-4.17.png",noShadow:"true",width:"900",mdxType:"Figure"},"\u555f\u7528\u4e8c\u9032\u4f4d\u7ffb\u8b6f"),(0,r.kt)("p",null,"\u5728\u4e0b\u4e00\u6b21\u751f\u6210\u7a0b\u5f0f\u78bc\u6642\uff0c\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u5c07\u6703\u51fa\u73fe\u5728generated/texts/binary\u8cc7\u6599\u593e\u4e2d\u3002"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u6642\uff0c\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\u7684\u7ffb\u8b6f\u6587\u4ef6\u70ba\u7a7a\u3002 \u56e0\u6b64\uff0c\u9664\u975e\u8f09\u5165\u4e8c\u9032\u4f4d\u7ffb\u8b6f\uff0c\u5426\u5247\u4e0d\u986f\u793a\u6587\u5b57\u3002"),(0,r.kt)("h3",f({},{id:"installing-a-binary-translation"}),"\u5b89\u88dd\u4e8c\u9032\u4f4d\u7ffb\u8b6f"),(0,r.kt)("p",null,"\u5982\u679c\u8a18\u61b6\u9ad4\u4e2d\u5df2\u6709\u61c9\u7528\u7684\u4e8c\u9032\u4f4d\u7ffb\u8b6f\uff0c\u5247\u53ef\u4ee5\u5728TouchGFX\u4e2d\u5b89\u88dd\u5b83\u3002 \u73fe\u5728\uff0cTouchGFX\u5c07\u4f7f\u7528\u8a72\u7ffb\u8b6f\u6a94\u3002 \u6839\u64da\u61c9\u7528\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u4f4d\u7f6e\u6216\u6642\u9593\u9032\u884c\uff08\u53ef\u4f7f\u7528",(0,r.kt)("em",{parentName:"p"},"gui/src/common/FrontApplication.cpp"),"\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)"),"\u69cb\u9020\u51fd\u6578\uff09\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u5f9e\u6a94\u6848\u7cfb\u7d71\u8b80\u53d6\u82f1\u8a9e\u7684\u7ffb\u8b6f\u6a94\u4e26\u5c07\u5176\u5b89\u88dd\u70ba\u8a9e\u8a00\u201cGB\u201d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{11-11,15-15,19-19}","{11-11,15-15,19-19}":!0}),'//read the translation into this global array\nuint8_t translation[10000];\n...\n\n//read the translation from a file, or change array to a pointer that points\n//to the translation data in internal or addressable external flash\nFILE* file = fopen("generated/texts/binary/LanguageGb.bin", "rb");\nif (file)\n{\n    //read data from file\n    fread(translation, 1, 10000, file);\n    fclose(file);\n\n    //replace empty translation with the binary data\n    Texts::setTranslation(GB, translation);\n\n    //always change language to get TouchGFX changed from the\n    //empty translation compiled in to the binary translation\n    Texts::setLanguage(GB);\n}\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5728\u5b89\u88dd\u7ffb\u8b6f\u6a94\u5f8c\uff0c\u5fc5\u9808\u66f4\u6539\u8a9e\u8a00\u3002 \u5426\u5247\uff0cTouchGFX\u4ecd\u5c07\u4f7f\u7528\u4e4b\u524d\u7684\u7ffb\u8b6f\u6a94\u3002 \u95b1\u8b80 ",(0,r.kt)("a",f({parentName:"p"},{href:"texts-and-fonts#switching-language"}),"\u6b64\u8655"),"\u95dc\u65bc\u66f4\u6539\u8a9e\u8a00\u7684\u66f4\u591a\u5167\u5bb9\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u9084\u5fc5\u9808\u5f37\u5236\u91cd\u7e6a\u7576\u524d\u87a2\u5e55\u6216\u66f4\u63db\u87a2\u5e55\uff0c\u4ee5\u4fbf\u67e5\u770b\u6700\u65b0\u6587\u5b57\uff08\u5982\u679c\u5728\u70ba\u986f\u793a\u5668\u4e0a\u4f7f\u7528\u7684\u8a9e\u8a00\u8f09\u5165\u7ffb\u8b6f\u6a94\uff09\u3002 TouchGFX\u4e0d\u6703\u81ea\u52d5\u91cd\u7e6a\u4efb\u4f55\u5167\u5bb9\u3002"),(0,r.kt)("p",null,"\u53ef\u901a\u904e\u8b93\u6839\u5bb9\u5668\u7121\u6548\u4f86\u91cd\u7e6a\u7576\u524d\u87a2\u5e55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"invalidate();\n")),(0,r.kt)("p",null,"\u9019\u5c07\u5f37\u5236\u91cd\u7e6a\u3002 \u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u6700\u597d\u66f4\u63db\u87a2\u5e55\uff0c\u4ee5\u4fbf\u5f9e\u982d\u9032\u884c\u8a2d\u7f6e\uff08\u5982\u91cd\u65b0\u8a08\u7b97TextArea\u5927\u5c0f\uff09\u3002 \u901a\u904e\u5728TouchGFX Designer\u4e2d\u5275\u5efa\u5177\u6709\u201cChange Screen\u201d\u64cd\u4f5c\u7684\u4ea4\u4e92\uff0c\u53ef\u4ee5\u66f4\u63db\u87a2\u5e55\u3002 \u53c3\u52a0\u76f8\u95dc",(0,r.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"\u6587\u7ae0"),"\u3002"))}v.isMDXComponent=!0}}]);