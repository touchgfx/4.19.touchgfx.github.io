"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5073],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return h},default:function(){return g}});var r=n(3905),i=n(44035),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&p(e,n,t[n]);return e};const f={id:"screen-definition-and-mvp",title:"\u87a2\u5e55\u6982\u5ff5"},m=void 0,v={unversionedId:"development/ui-development/software-architecture/screen-definition-and-mvp",id:"development/ui-development/software-architecture/screen-definition-and-mvp",isDocsHomePage:!1,title:"\u87a2\u5e55\u6982\u5ff5",description:'In TouchGFX applications, you can have any number of "Screens" (see example below with two screens). TouchGFX\u4e2d\u7684\u87a2\u5e55\u662fUI\u5143\u7d20\uff08\u5c0f\u5de5\u5177\uff09\u53ca\u5176\u76f8\u95dc\u4e8b\u52d9\u908f\u8f2f\u7684\u908f\u8f2f\u5206\u7d44\u3002 \u87a2\u5e55\u5305\u542b\u5169\u500b\u985e\uff1a\u5305\u542b\u8a72\u87a2\u5e55\u4e0a\u986f\u793a\u7684\u6240\u6709\u5c0f\u5de5\u5177\u7684View\u985e\uff0c\u4ee5\u53ca\u5305\u542b\u8a72\u87a2\u5e55\u7684\u4e8b\u52d9\u908f\u8f2f\u7684Presenter\u985e\u3002',source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/screen-definition-and-mvp.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/screen-definition-and-mvp",permalink:"/4.19/zh-TW/docs/development/ui-development/software-architecture/screen-definition-and-mvp",tags:[],version:"current",frontMatter:{id:"screen-definition-and-mvp",title:"\u87a2\u5e55\u6982\u5ff5"},sidebar:"docs",previous:{title:"Model-View-Presenter\u8a2d\u8a08\u6a21\u5f0f",permalink:"/4.19/zh-TW/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"},next:{title:"\u7a0b\u5f0f\u78bc\u7d50\u69cb",permalink:"/4.19/zh-TW/docs/development/ui-development/software-architecture/code-structure"}},h=[{value:"\u5b9a\u7fa9\u87a2\u5e55",id:"defining-screens",children:[],level:3},{value:"\u7576\u524d\u6d3b\u52d5\u87a2\u5e55",id:"currently-active-screen",children:[],level:3},{value:"TouchGFX\u4e2d\u7684Model-View-Presenter",id:"model-view-presenter-in-touchgfx",children:[{value:"Model",id:"model",children:[],level:3},{value:"View",id:"view",children:[],level:3},{value:"Presenter",id:"presenter",children:[],level:3}],level:2}],w={toc:h};function g(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},w),p),l(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,'In TouchGFX applications, you can have any number of "Screens" (see example below with two screens). TouchGFX\u4e2d\u7684\u87a2\u5e55\u662fUI\u5143\u7d20\uff08\u5c0f\u5de5\u5177\uff09\u53ca\u5176\u76f8\u95dc\u4e8b\u52d9\u908f\u8f2f\u7684\u908f\u8f2f\u5206\u7d44\u3002 \u87a2\u5e55\u5305\u542b\u5169\u500b\u985e\uff1a\u5305\u542b\u8a72\u87a2\u5e55\u4e0a\u986f\u793a\u7684\u6240\u6709\u5c0f\u5de5\u5177\u7684View\u985e\uff0c\u4ee5\u53ca\u5305\u542b\u8a72\u87a2\u5e55\u7684\u4e8b\u52d9\u908f\u8f2f\u7684Presenter\u985e\u3002'),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/screen-definition-and-mvp/main-screen.png",mdxType:"Figure"},"Main view (screen 1)"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/screen-definition-and-mvp/settings-screen.png",mdxType:"Figure"},"Settings view (screen 2)"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u9078\u64c7\u5728\u55ae\u500b\u87a2\u5e55\u7684\u80cc\u666f\u4e0b\u5be6\u73fe\u6574\u500b\u61c9\u7528\uff08\u610f\u5473\u8457\u53ea\u6709\u4e00\u500bView\u548c\u4e00\u500bPresenter\uff09\uff0c\u4f46\u6211\u5011\u5efa\u8b70\u5c07UI\u7684\u4e0d\u76f8\u95dc\u90e8\u5206\u5206\u5272\u6210\u4e0d\u540c\u87a2\u5e55\uff0c\u539f\u56e0\u6709\u5169\u500b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TouchGFX\u5305\u542b\u8a18\u61b6\u9ad4\u5206\u914d\u65b9\u6848\uff0c\u53ef\u81ea\u52d5\u5206\u914d\u5927\u591a\u6578RAM\u5360\u7528\u91cf\u5927\u7684\u87a2\u5e55\u6240\u9700\u7684\u5fc5\u8981RAM\u3002 \u53ea\u6703\u5206\u914d\u5fc5\u8981\u7684\u91cf\uff0c\u6b64RAM\u5340\u584a\u5c07\u5728\u61c9\u7528\u4e2d\u7684\u6240\u6709\u87a2\u5e55\u4e4b\u9593\u91cd\u8907\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6709\u591a\u500b\u87a2\u5e55\u6703\u4f7fUI\u7a0b\u5f0f\u78bc\u7684\u7dad\u8b77\u5bb9\u6613\u5f97\u591a\u3002")),(0,r.kt)("h3",d({},{id:"defining-screens"}),"\u5b9a\u7fa9\u87a2\u5e55"),(0,r.kt)("p",null,"\u95dc\u65bc\u61c9\u5982\u4f55\u5c07\u61c9\u7528\u5283\u5206\u6210\u591a\u500b\u87a2\u5e55\uff0c\u4e26\u6c92\u6709\u5177\u9ad4\u7684\u898f\u5247\uff0c\u4f46\u6709\u7279\u5b9a\u7684\u6307\u5357\uff0c\u4e5f\u8a31\u80fd\u8aac\u660e\u60a8\u6c7a\u5b9a\u61c9\u7576\u7528\u54ea\u4e9b\u87a2\u5e55\u69cb\u6210\u60a8\u7684\u7279\u5b9a\u61c9\u7528\u3002 \u5728\u8996\u89ba\u548c\u529f\u80fd\u4e0a\u7121\u95dc\u7684UI\u5340\u57df\u61c9\u4fdd\u5b58\u5728\u4e0d\u540c\u87a2\u5e55\u4e2d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u662f\u5341\u5206\u7c21\u55ae\u7684\u6709\u4e3b\u6eab\u5ea6\u8b80\u51fa\u986f\u793a\u5668\u548c\u914d\u7f6e\u529f\u80fd\u8868\u7684\u6052\u6eab\u5668\u61c9\u7528\uff0c\u5efa\u8b70\u5275\u5efa\u201c\u4e3b\u87a2\u5e55\u201d\u7528\u65bc\u6eab\u5ea6\u8b80\u51fa\uff0c\u4e26\u5275\u5efa\u201c\u8a2d\u7f6e\u87a2\u5e55\u201d\u7528\u65bc\u986f\u793a\u914d\u7f6e\u529f\u80fd\u8868\u3002"),(0,r.kt)("p",null,"\u4e3b\u87a2\u5e55\u7684\u8996\u5716\u5c07\u5305\u542b\u7528\u65bc\u80cc\u666f\u5716\u50cf\u7684\u5c0f\u5de5\u5177\uff0c\u5e7e\u500b\u986f\u793a\u6eab\u5ea6\u7684\u6587\u5b57\u5340\u548c\u4e00\u500b\u7528\u65bc\u5207\u63db\u81f3\u914d\u7f6e\u529f\u80fd\u8868\u7684\u6309\u9215\u3002 \u53e6\u4e00\u65b9\u9762\uff0c\u7528\u65bc\u914d\u7f6e\u7684\u8996\u5716\u53ef\u80fd\u5305\u542b\u986f\u793a\u914d\u7f6e\u9078\u9805\u6e05\u55ae\u548c\u4e0d\u540c\u80cc\u666f\u5716\u50cf\u7684\u5c0f\u5de5\u5177\u3002 \u5982\u679c\u914d\u7f6e\u529f\u80fd\u8868\u80fd\u5920\u7de8\u8f2f\u8a31\u591a\u4e0d\u540c\u985e\u578b\u7684\u8a2d\u7f6e\uff08\u65e5\u671f\u3001\u540d\u7a31\u548c\u9375\u76e4\u3001\u6eab\u5ea6\u3001\u55ae\u4f4d\u7b49\uff09\uff0c\u6b64\u87a2\u5e55\u7684\u8907\u96dc\u6027\u5c07\u5927\u5e45\u63d0\u5347\u3002"),(0,r.kt)("p",null,"\u4e3b\u87a2\u5e55\u7684\u8996\u5716\u5c07\u5305\u542b\u7528\u65bc\u80cc\u666f\u5716\u50cf\u7684\u5c0f\u5de5\u5177\uff0c\u5e7e\u500b\u986f\u793a\u6eab\u5ea6\u7684\u6587\u5b57\u5340\u548c\u4e00\u500b\u7528\u65bc\u5207\u63db\u81f3\u914d\u7f6e\u529f\u80fd\u8868\u7684\u6309\u9215\u3002 \u53e6\u4e00\u65b9\u9762\uff0c\u7528\u65bc\u914d\u7f6e\u7684\u8996\u5716\u53ef\u80fd\u5305\u542b\u986f\u793a\u914d\u7f6e\u9078\u9805\u6e05\u55ae\u548c\u4e0d\u540c\u80cc\u666f\u5716\u50cf\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("h3",d({},{id:"currently-active-screen"}),"\u7576\u524d\u6d3b\u52d5\u87a2\u5e55"),(0,r.kt)("p",null,"\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6700\u597d\u5c07\u914d\u7f6e\u529f\u80fd\u8868\u9032\u4e00\u6b65\u5206\u5272\u6210\u4e00\u500b\u986f\u793a\u5b8c\u6574\u529f\u80fd\u8868\u9078\u9805\u6a39\u7684\u87a2\u5e55\u548c\u53e6\u4e00\u500b\u7528\u65bc\u7de8\u8f2f\u7279\u5b9a\u503c\u7684\u87a2\u5e55\u3002 \u60a8\u6703\u5728\u5c08\u6848\u958b\u767c\u7684\u904e\u7a0b\u4e2d\u5b78\u5230\u9019\u4e9b\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5f9e\u201c\u5f8c\u7aef\u201d\uff08\u6240\u6709\u57f7\u884c\u6052\u6eab\u5668\u5be6\u969b\u5de5\u4f5c\u7684\u975eUI\u4ee3\u78bc\uff09\u6216\u786c\u9ad4\u5916\u8a2d\u63a5\u6536\u5230\u4e8b\u4ef6\uff0c\u5247\u53ef\u4ee5\u5c07\u9019\u4e9b\u4e8b\u4ef6\u59d4\u8a17\u7d66\u7576\u524d\u6d3b\u52d5\u87a2\u5e55\u3002"),(0,r.kt)("p",null,"\u7531\u65bc\u4e00\u4e9b\u4e8b\u4ef6\u5c07\u53ea\u8207\u61c9\u7528\u4e2d\u7684\u7279\u5b9a\u87a2\u5e55\u6709\u95dc\uff0c\u56e0\u6b64\u6709\u6548\u5730\u9694\u96e2\u4e86\u554f\u984c\u3002 \u4f8b\u5982\uff0c\u53ea\u6709\u4e3b\u87a2\u5e55\u624d\u80fd\u8655\u7406\u901a\u77e5\u7576\u524d\u6eab\u5ea6\u8b8a\u5316\u7684\u5df2\u63a5\u6536\u4e8b\u4ef6\uff08\u5c07\u66f4\u65b0\u986f\u793a\u7576\u524d\u6eab\u5ea6\u7684\u6587\u672c\u5340\uff09\uff0c\u800c\u7531\u65bc\u7576\u524d\u6eab\u5ea6\u672a\u986f\u793a\u5728\u914d\u7f6e\u87a2\u5e55\u4e0a\uff0c\u914d\u7f6e\u87a2\u5e55\u53ef\u4ee5\u76f4\u63a5\u4e1f\u68c4\u6b64\u7121\u95dc\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",d({},{id:"model-view-presenter-in-touchgfx"}),"TouchGFX\u4e2d\u7684Model-View-Presenter"),(0,r.kt)("p",null,"\u7531\u65bc\u4e00\u4e9b\u4e8b\u4ef6\u5c07\u53ea\u8207\u61c9\u7528\u4e2d\u7684\u7279\u5b9a\u87a2\u5e55\u6709\u95dc\uff0c\u56e0\u6b64\u6709\u6548\u5730\u9694\u96e2\u4e86\u554f\u984c\u3002 \u4f8b\u5982\uff0c\u53ea\u6709\u4e3b\u87a2\u5e55\u624d\u80fd\u8655\u7406\u901a\u77e5\u7576\u524d\u6eab\u5ea6\u8b8a\u5316\u7684\u5df2\u63a5\u6536\u4e8b\u4ef6\uff08\u5c07\u66f4\u65b0\u986f\u793a\u7576\u524d\u6eab\u5ea6\u7684\u6587\u672c\u5340\uff09\uff0c\u800c\u7531\u65bc\u7576\u524d\u6eab\u5ea6\u672a\u986f\u793a\u5728\u914d\u7f6e\u87a2\u5e55\u4e0a\uff0c\u914d\u7f6e\u87a2\u5e55\u53ef\u4ee5\u76f4\u63a5\u4e1f\u68c4\u6b64\u7121\u95dc\u4e8b\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728TouchGFX Designer\u4e2d\u5c07\u65b0\u87a2\u5e55\u6dfb\u52a0\u5230\u61c9\u7528\u6642\uff0c\u6703\u5275\u5efa\u65b0\u7684\u7279\u5b9aView\u985e\u548cPresenter\u985e\u4ee5\u4ee3\u8868\u8a72\u7279\u5b9a\u87a2\u5e55\u3002"),(0,r.kt)("p",null,"TouchGFX\u61c9\u7528\u4e2dMVP\u985e\u7684\u5167\u5bb9\u548c\u8cac\u4efb\u5982\u4e0b\u3002"),(0,r.kt)("h3",d({},{id:"model"}),"Model"),(0,r.kt)("p",null,"TouchGFX\u61c9\u7528\u4e2dMVP\u985e\u7684\u5167\u5bb9\u548c\u8cac\u4efb\u5982\u4e0b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4fdd\u5b58UI\u7684\u72c0\u614b\u8cc7\u8a0a\u3002 \u5728\u5207\u63db\u87a2\u5e55\u6642\uff0cView\u548cPresenter\u7684\u5206\u914d\u6703\u88ab\u89e3\u9664\uff0c\u56e0\u6b64\u5b83\u5011\u4e0d\u80fd\u7528\u65bc\u5b58\u5132\u5728\u87a2\u5e55\u8f49\u63db\u6642\u61c9\u7576\u4fdd\u7559\u7684\u8cc7\u8a0a\u3002 \u70ba\u6b64\uff0c\u5c07\u6539\u7528Model\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f5c\u70ba\u9762\u5411\u5f8c\u7aef\u7cfb\u7d71\u7684\u4ecb\u9762\uff0c\u5411/\u5f9e\u7576\u524d\u6d3b\u52d5\u87a2\u5e55\u767c\u9001\u4e8b\u4ef6\u3002")),(0,r.kt)("p",null,"Model\u985e\u662f\u81ea\u52d5\u8a2d\u7f6e\u7684\uff0c\u5177\u6709\u6307\u5411\u7576\u524d\u6d3b\u52d5Presenter\u7684\u6307\u6a19\u3002 \u7576Model\u4e2d\u767c\u751f\u8b8a\u5316\u6642\uff0c\u5c07\u8b8a\u5316\u901a\u77e5\u7576\u524d\u6d3b\u52d5Presenter\u3002 \u9019\u662f\u901a\u904e\u61c9\u7528\u4e2dModelListener\u4ecb\u9762\u4e2d\u7684\u65b9\u6cd5\u4f86\u5b8c\u6210\u7684\u3002"),(0,r.kt)("p",null,"TouchGFX Designer\u751f\u6210\u7684\u65b0\u61c9\u7528\u5c07\u81ea\u52d5\u64c1\u6709\u53ef\u76f4\u63a5\u4f9bUI\u4f7f\u7528\u7684Model\u985e\u3002"),(0,r.kt)("h3",d({},{id:"view"}),"View"),(0,r.kt)("p",null,"View\u985e\uff08\u6216\u8005\u66f4\u5177\u9ad4\u5730\u8aaa\uff0c\u884d\u751f\u81eaTouchGFX View\u985e\u7684\u985e\uff09\u5305\u542b\u4e86\u8a72\u8996\u5716\u4e2d\u986f\u793a\u7684\u5c0f\u5de5\u5177\u4f5c\u70ba\u6210\u54e1\u5c0d\u8c61\u3002 It also contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"setupScreen")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDownScreen")," function, which gets automatically called when this screen is entered/exited. Typically you would configure your widgets in the ",(0,r.kt)("inlineCode",{parentName:"p"},"setupScreen")," function."),(0,r.kt)("p",null,"View\u9084\u5c07\u5305\u542b\u6307\u5411\u76f8\u95dcPresenter\u7684\u6307\u6a19\u3002 \u8a72\u6307\u6a19\u901a\u904e\u6846\u67b6\u81ea\u52d5\u8a2d\u7f6e\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u8a72\u6307\u6a19\u8207Presenter\u9032\u884cUI\u4e8b\u4ef6\uff08\u5982\u6309\u9215\u9ede\u64ca\uff09\u901a\u4fe1\u3002"),(0,r.kt)("h3",d({},{id:"presenter"}),"Presenter"),(0,r.kt)("p",null,"View\u9084\u5c07\u5305\u542b\u6307\u5411\u76f8\u95dcPresenter\u7684\u6307\u6a19\u3002 \u8a72\u6307\u6a19\u901a\u904e\u6846\u67b6\u81ea\u52d5\u8a2d\u7f6e\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u8a72\u6307\u6a19\u8207Presenter\u9032\u884cUI\u4e8b\u4ef6\uff08\u5982\u6309\u9215\u9ede\u64ca\uff09\u901a\u4fe1\u3002"))}g.isMDXComponent=!0}}]);