"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3102],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=a(n),f=o,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68186:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return w}});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))a.call(t,n)&&p(e,n,t[n]);return e};const d={id:"screen-definition-and-mvp",title:"\u5c4f\u5e55\u6982\u5ff5"},f=void 0,m={unversionedId:"development/ui-development/software-architecture/screen-definition-and-mvp",id:"development/ui-development/software-architecture/screen-definition-and-mvp",title:"\u5c4f\u5e55\u6982\u5ff5",description:"\u4ece\u201c@site/components/Figure\u201d\u5bfc\u5165\u56fe\u7247\uff1b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/screen-definition-and-mvp.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/screen-definition-and-mvp",permalink:"/4.19/zh-CN/docs/development/ui-development/software-architecture/screen-definition-and-mvp",draft:!1,tags:[],version:"current",frontMatter:{id:"screen-definition-and-mvp",title:"\u5c4f\u5e55\u6982\u5ff5"},sidebar:"docs",previous:{title:"Model-View-Presenter\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/4.19/zh-CN/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"},next:{title:"\u4ee3\u7801\u7ed3\u6784",permalink:"/4.19/zh-CN/docs/development/ui-development/software-architecture/code-structure"}},v={},w=[{value:"\u5b9a\u4e49\u5c4f\u5e55",id:"defining-screens",level:3},{value:"\u5f53\u524d\u6d3b\u52a8\u5c4f\u5e55",id:"currently-active-screen",level:3},{value:"TouchGFX\u4e2d\u7684Model-View-Presenter",id:"model-view-presenter-in-touchgfx",level:2},{value:"Model",id:"model",level:3},{value:"View",id:"view",level:3},{value:"Presenter",id:"presenter",level:3}],h=(y="Figure",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",s({},e))});var y;const k={toc:w};function g(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&a.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},k),p),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u4ece\u201c@site/components/Figure\u201d\u5bfc\u5165\u56fe\u7247\uff1b"),(0,r.kt)("p",null,"\u5728TouchGFX\u5e94\u7528\u4e2d\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684\u201c\u5c4f\u5e55\u201d\uff08\u4e0b\u9762\u7684\u793a\u4f8b\u6709\u4e24\u4e2a\u5c4f\u5e55\uff09\u3002 TouchGFX\u4e2d\u7684\u5c4f\u5e55\u662fUI\u5143\u7d20\uff08\u5c0f\u5de5\u5177\uff09\u53ca\u5176\u76f8\u5173\u4e1a\u52a1\u903b\u8f91\u7684\u903b\u8f91\u5206\u7ec4\u3002 \u5c4f\u5e55\u5305\u542b\u4e24\u4e2a\u7c7b\uff1a\u5305\u542b\u8be5\u5c4f\u5e55\u4e0a\u663e\u793a\u7684\u6240\u6709\u5c0f\u5de5\u5177\u7684View\u7c7b\uff0c\u4ee5\u53ca\u5305\u542b\u8be5\u5c4f\u5e55\u7684\u4e1a\u52a1\u903b\u8f91\u7684Presenter\u7c7b\u3002"),(0,r.kt)(h,{imageSource:"/img/development/ui-development/software-architecture/screen-definition-and-mvp/main-screen.webp",mdxType:"Figure"},"\u4e3b\u89c6\u56fe\uff08\u5c4f\u5e55 1\uff09"),(0,r.kt)(h,{imageSource:"/img/development/ui-development/software-architecture/screen-definition-and-mvp/settings-screen.webp",mdxType:"Figure"},"\u8bbe\u7f6e\u89c6\u56fe\uff08\u5c4f\u5e55 2\uff09"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u9009\u62e9\u5728\u5355\u4e2a\u5c4f\u5e55\u7684\u80cc\u666f\u4e0b\u5b9e\u73b0\u6574\u4e2a\u5e94\u7528\uff08\u610f\u5473\u7740\u53ea\u6709\u4e00\u4e2aView\u548c\u4e00\u4e2aPresenter\uff09\uff0c\u4f46\u6211\u4eec\u5efa\u8bae\u5c06UI\u7684\u4e0d\u76f8\u5173\u90e8\u5206\u5206\u5272\u6210\u4e0d\u540c\u5c4f\u5e55\uff0c\u539f\u56e0\u6709\u4e24\u4e2a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TouchGFX\u5305\u542b\u5b58\u50a8\u5668\u5206\u914d\u65b9\u6848\uff0c\u53ef\u81ea\u52a8\u5206\u914d\u5927\u591a\u6570RAM\u5360\u7528\u91cf\u5927\u7684\u5c4f\u5e55\u6240\u9700\u7684\u5fc5\u8981RAM\u3002 \u53ea\u4f1a\u5206\u914d\u5fc5\u8981\u7684\u91cf\uff0c\u6b64RAM\u5757\u5c06\u5728\u5e94\u7528\u4e2d\u7684\u6240\u6709\u5c4f\u5e55\u4e4b\u95f4\u91cd\u590d\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6709\u591a\u4e2a\u5c4f\u5e55\u4f1a\u4f7fUI\u4ee3\u7801\u7684\u7ef4\u62a4\u5bb9\u6613\u5f97\u591a\u3002")),(0,r.kt)("h3",s({},{id:"defining-screens"}),"\u5b9a\u4e49\u5c4f\u5e55"),(0,r.kt)("p",null,"\u5173\u4e8e\u5e94\u5982\u4f55\u5c06\u5e94\u7528\u5212\u5206\u6210\u591a\u4e2a\u5c4f\u5e55\uff0c\u5e76\u6ca1\u6709\u5177\u4f53\u7684\u89c4\u5219\uff0c\u4f46\u6709\u7279\u5b9a\u7684\u6307\u5357\uff0c\u4e5f\u8bb8\u80fd\u5e2e\u52a9\u60a8\u51b3\u5b9a\u5e94\u5f53\u7528\u54ea\u4e9b\u5c4f\u5e55\u6784\u6210\u60a8\u7684\u7279\u5b9a\u5e94\u7528\u3002 \u5728\u89c6\u89c9\u548c\u529f\u80fd\u4e0a\u65e0\u5173\u7684UI\u533a\u57df\u5e94\u4fdd\u5b58\u5728\u4e0d\u540c\u5c4f\u5e55\u4e2d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u662f\u5341\u5206\u7b80\u5355\u7684\u6709\u4e3b\u6e29\u5ea6\u8bfb\u51fa\u663e\u793a\u5c4f\u548c\u914d\u7f6e\u83dc\u5355\u7684\u6052\u6e29\u5668\u5e94\u7528\uff0c\u5efa\u8bae\u521b\u5efa\u201c\u4e3b\u5c4f\u5e55\u201d\u7528\u4e8e\u6e29\u5ea6\u8bfb\u51fa\uff0c\u5e76\u521b\u5efa\u201c\u8bbe\u7f6e\u5c4f\u5e55\u201d\u7528\u4e8e\u663e\u793a\u914d\u7f6e\u83dc\u5355\u3002"),(0,r.kt)("p",null,"\u4e3b\u5c4f\u5e55\u7684\u89c6\u56fe\u5c06\u5305\u542b\u7528\u4e8e\u80cc\u666f\u56fe\u50cf\u7684\u5c0f\u5de5\u5177\uff0c\u51e0\u4e2a\u663e\u793a\u6e29\u5ea6\u7684\u6587\u672c\u533a\u548c\u4e00\u4e2a\u7528\u4e8e\u5207\u6362\u81f3\u914d\u7f6e\u83dc\u5355\u7684\u6309\u94ae\u3002 \u53e6\u4e00\u65b9\u9762\uff0c\u7528\u4e8e\u914d\u7f6e\u7684\u89c6\u56fe\u53ef\u80fd\u5305\u542b\u663e\u793a\u914d\u7f6e\u9009\u9879\u5217\u8868\u548c\u4e0d\u540c\u80cc\u666f\u56fe\u50cf\u7684\u5c0f\u5de5\u5177\u3002 \u5982\u679c\u914d\u7f6e\u83dc\u5355\u80fd\u591f\u7f16\u8f91\u8bb8\u591a\u4e0d\u540c\u7c7b\u578b\u7684\u8bbe\u7f6e\uff08\u65e5\u671f\u3001\u540d\u79f0\u548c\u952e\u76d8\u3001\u6e29\u5ea6\u3001\u5355\u4f4d\u7b49\uff09\uff0c\u6b64\u5c4f\u5e55\u7684\u590d\u6742\u6027\u5c06\u5927\u5e45\u63d0\u5347\u3002"),(0,r.kt)("p",null,"\u4e3b\u5c4f\u5e55\u7684\u89c6\u56fe\u5c06\u5305\u542b\u7528\u4e8e\u80cc\u666f\u56fe\u50cf\u7684\u5c0f\u5de5\u5177\uff0c\u51e0\u4e2a\u663e\u793a\u6e29\u5ea6\u7684\u6587\u672c\u533a\u548c\u4e00\u4e2a\u7528\u4e8e\u5207\u6362\u81f3\u914d\u7f6e\u83dc\u5355\u7684\u6309\u94ae\u3002 \u4f46\u968f\u7740\u9879\u76ee\u7684\u8fdb\u5c55\uff0c\u8fd9\u662f\u60a8\u5c06\u5b66\u5230\u7684\u4e1c\u897f\u3002"),(0,r.kt)("h3",s({},{id:"currently-active-screen"}),"\u5f53\u524d\u6d3b\u52a8\u5c4f\u5e55"),(0,r.kt)("p",null,"\u7531\u4e8e TouchGFX \u4e3a\u5c4f\u5e55\u5206\u914d\u5185\u5b58\u7684\u65b9\u5f0f\uff08\u53ea\u4e3a\u6700\u5927\u7684 View \u548c\u6700\u5927\u7684 Presenter \u5206\u914d\uff09\uff0c\u4e00\u6b21\u53ea\u80fd\u6709\u4e00\u4e2a View \u548c\u4e00\u4e2a Presenter \u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u7684\u6052\u6e29\u5668\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u663e\u793a\u6e29\u5ea6\u8bfb\u6570\uff0c\u90a3\u4e48\u914d\u7f6e\u83dc\u5355\u5c4f\u5e55\u4e0d\u4f1a\u5728\u4efb\u4f55\u5730\u65b9\u8fd0\u884c\uff0c\u5b9e\u9645\u4e0a\u751a\u81f3\u6ca1\u6709\u5206\u914d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4ece\u201c\u540e\u7aef\u201d\uff08\u6240\u6709\u6267\u884c\u6052\u6e29\u5668\u5b9e\u9645\u5de5\u4f5c\u7684\u975eUI\u4ee3\u7801\uff09\u6216\u786c\u4ef6\u5916\u8bbe\u63a5\u6536\u5230\u4e8b\u4ef6\uff0c\u5219\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u4e8b\u4ef6\u4f20\u9012\u7ed9\u5f53\u524d\u6d3b\u52a8\u5c4f\u5e55\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u4e00\u4e9b\u4e8b\u4ef6\u5c06\u53ea\u4e0e\u5e94\u7528\u4e2d\u7684\u7279\u5b9a\u5c4f\u5e55\u6709\u5173\uff0c\u56e0\u6b64\u8fd9\u63d0\u4f9b\u4e86\u6709\u6548\u7684\u9694\u79bb\u65b9\u5f0f\u3002 \u4f8b\u5982\uff0c\u53ea\u6709\u4e3b\u5c4f\u5e55\u624d\u80fd\u5904\u7406\u901a\u77e5\u5f53\u524d\u6e29\u5ea6\u53d8\u5316\u7684\u5df2\u63a5\u6536\u4e8b\u4ef6\uff08\u5c06\u66f4\u65b0\u663e\u793a\u5f53\u524d\u6e29\u5ea6\u7684\u6587\u672c\u533a\uff09\uff0c\u800c\u7531\u4e8e\u5f53\u524d\u6e29\u5ea6\u672a\u663e\u793a\u5728\u914d\u7f6e\u5c4f\u5e55\u4e0a\uff0c\u914d\u7f6e\u5c4f\u5e55\u53ef\u4ee5\u76f4\u63a5\u4e22\u5f03\u6b64\u65e0\u5173\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",s({},{id:"model-view-presenter-in-touchgfx"}),"TouchGFX\u4e2d\u7684Model-View-Presenter"),(0,r.kt)("p",null,"TouchGFX \u9075\u5faa ",(0,r.kt)("a",s({parentName:"p"},{href:"model-view-presenter-design-pattern"}),"Model-View-Presenter Design Pattern"),"\u63cf\u8ff0\u7684Model-View-Presenter \u8bbe\u8ba1\u6a21\u5f0f\u3002 TouchGFX \u5c4f\u5e55\u6982\u5ff5\u901a\u8fc7\u7ee7\u627f\u81ea TouchGFX \u4e2d\u7684 View \u548c Presenter \u7c7b\u7684\u7c7b\u4e0e\u6574\u4e2a Model-View-Presenter \u67b6\u6784\u8054\u7cfb\u5728\u4e00\u8d77\u3002 \u56e0\u6b64\uff0c\u5728TouchGFX Designer\u4e2d\u5c06\u65b0\u5c4f\u5e55\u6dfb\u52a0\u5230\u5e94\u7528\u65f6\uff0c\u4f1a\u521b\u5efa\u65b0\u7684\u7279\u5b9aView\u7c7b\u548cPresenter\u7c7b\u4ee5\u4ee3\u8868\u8be5\u7279\u5b9a\u5c4f\u5e55\u3002"),(0,r.kt)("p",null,"TouchGFX\u5e94\u7528\u4e2dMVP\u7c7b\u7684\u5185\u5bb9\u548c\u8d23\u4efb\u5982\u4e0b\u3002"),(0,r.kt)("h3",s({},{id:"model"}),"Model"),(0,r.kt)("p",null,"Model \u7c7b\u662f\u4e00\u4e2a\u6c38\u8fdc\u5b58\u5728\u7684\u5355\u7c7b\uff0c\u5b83\u6709\u4e24\u4e2a\u7528\u9014\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4fdd\u5b58UI\u7684\u72b6\u6001\u4fe1\u606f\u3002 \u5728\u5207\u6362\u5c4f\u5e55\u65f6\uff0cView\u548cPresenter\u7684\u5206\u914d\u4f1a\u88ab\u6e05\u9664\uff0c\u56e0\u6b64\u5b83\u4eec\u4e0d\u80fd\u7528\u4e8e\u5b58\u50a8\u5728\u5c4f\u5e55\u8f6c\u6362\u65f6\u5e94\u5f53\u4fdd\u7559\u7684\u4fe1\u606f\u3002 \u4e3a\u6b64\uff0c\u4f7f\u7528Mode\u4fdd\u5b58\u4fe1\u606fl\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f5c\u4e3a\u9762\u5411\u540e\u7aef\u7cfb\u7edf\u7684\u63a5\u53e3\uff0c\u5411/\u4ece\u5f53\u524d\u6d3b\u52a8\u5c4f\u5e55\u53d1\u9001\u4e8b\u4ef6\u3002")),(0,r.kt)("p",null,"Model\u7c7b\u662f\u81ea\u52a8\u8bbe\u7f6e\u7684\uff0c\u5177\u6709\u6307\u5411\u5f53\u524d\u6d3b\u52a8Presenter\u7684\u6307\u9488\u3002 \u5f53Model\u4e2d\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5c06\u53d8\u5316\u901a\u77e5\u5f53\u524d\u6d3b\u52a8Presenter\u3002 \u8fd9\u662f\u901a\u8fc7\u5e94\u7528\u4e2dModelListener\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\u6765\u5b8c\u6210\u7684\u3002"),(0,r.kt)("p",null,"TouchGFX Designer\u751f\u6210\u7684\u65b0\u5e94\u7528\u5c06\u81ea\u52a8\u62e5\u6709\u53ef\u76f4\u63a5\u4f9bUI\u4f7f\u7528\u7684Model\u7c7b\u3002"),(0,r.kt)("h3",s({},{id:"view"}),"View"),(0,r.kt)("p",null,"View\u7c7b\uff08\u6216\u8005\u66f4\u5177\u4f53\u5730\u8bf4\uff0c\u6d3e\u751f\u81eaTouchGFX View\u7c7b\u7684\u7c7b\uff09\u5305\u542b\u4e86\u8be5\u89c6\u56fe\u4e2d\u663e\u793a\u7684\u63a7\u4ef6\u4f5c\u4e3a\u6210\u5458\u5bf9\u8c61\u3002 \u5b83\u8fd8\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"setupScreen"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"tearDownScreen"),"\u51fd\u6570\uff0c\u5f53\u8fdb\u5165/\u9000\u51fa\u8be5\u5c4f\u5e55\u65f6\uff0c\u4f1a\u81ea\u52a8\u8c03\u7528\u5b83\u4eec\u3002 \u901a\u5e38\u4f1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"setupScreen"),"\u51fd\u6570\u4e2d\u914d\u7f6e\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"View\u8fd8\u5c06\u5305\u542b\u6307\u5411\u76f8\u5173Presenter\u7684\u6307\u9488\u3002 \u8be5\u6307\u9488\u901a\u8fc7\u6846\u67b6\u81ea\u52a8\u8bbe\u7f6e\u3002 \u4f7f\u7528\u6b64\u6307\u9488\uff0c\u60a8\u53ef\u4ee5\u5c06 UI \u4e8b\u4ef6\uff08\u5982\u6309\u94ae\u5355\u51fb\uff09\u4f20\u8fbe\u7ed9 Presenter\u3002"),(0,r.kt)("h3",s({},{id:"presenter"}),"Presenter"),(0,r.kt)("p",null,"\u60a8\u7684 Presenter \u7c7b\uff08\u540c\u6837\uff0c\u4e00\u4e2a\u6d3e\u751f\u81ea TouchGFX Presenter \u7c7b\u7684\u7c7b\uff09\u8d1f\u8d23\u5f53\u524d\u6d3b\u52a8\u5c4f\u5e55\u7684\u4e1a\u52a1\u903b\u8f91\u3002 \u5b83\u5c06\u63a5\u6536\u6765\u81ea\u6a21\u578b\u7684\u201c\u540e\u7aef\u201d\u4e8b\u4ef6\uff0c\u4ee5\u53ca\u6765\u81ea\u89c6\u56fe\u7684 UI \u4e8b\u4ef6\uff0c\u5e76\u51b3\u5b9a\u91c7\u53d6\u4f55\u79cd\u884c\u52a8\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u4ece Model \u63a5\u6536\u5230\u8b66\u62a5\u4e8b\u4ef6\uff0cPresenter \u53ef\u80fd\u51b3\u5b9a\u544a\u8bc9 View \u5e94\u8be5\u663e\u793a\u8b66\u62a5\u5f39\u51fa\u5bf9\u8bdd\u6846\u3002"))}g.isMDXComponent=!0}}]);