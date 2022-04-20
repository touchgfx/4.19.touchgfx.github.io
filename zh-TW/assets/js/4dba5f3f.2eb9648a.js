"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4987],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=a(r),g=l,c=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(c,p(p({ref:t},d),{},{components:r})):n.createElement(c,p({ref:t},d))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var a=2;a<o;a++)p[a]=r[a];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),l=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,p=(0,l.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:p,target:"_blank"},n.createElement("img",{width:r,height:o,src:p})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:p,target:"_blank"},n.createElement("img",{width:r,height:o,src:p})),n.createElement("p",null,e.children))}},82985:function(e,t,r){var n=r(67294);class l extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=l},9844:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return c},metadata:function(){return b},toc:function(){return S}});var n=r(3905),l=r(44035),o=r(82985),p=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&m(e,r,t[r]);return e};const c={id:"startup-window",title:"\u4e3b\u4ecb\u9762"},k=void 0,b={unversionedId:"development/ui-development/designer-user-guide/startup-window",id:"development/ui-development/designer-user-guide/startup-window",title:"\u4e3b\u4ecb\u9762",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/startup-window.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/startup-window",permalink:"/4.19/zh-TW/docs/development/ui-development/designer-user-guide/startup-window",tags:[],version:"current",frontMatter:{id:"startup-window",title:"\u4e3b\u4ecb\u9762"},sidebar:"docs",previous:{title:"Designer User Guide",permalink:"/4.19/zh-TW/docs/category/designer-user-guide"},next:{title:"\u6a94\u6848\u9078\u55ae",permalink:"/4.19/zh-TW/docs/development/ui-development/designer-user-guide/file-menu"}},v={},S=[{value:"Home (\u4e3b\u9801)",id:"home",level:2},{value:"Create (\u5275\u5efa)",id:"create",level:2},{value:"Examples (\u7bc4\u4f8b)",id:"examples",level:2},{value:"Demos (\u6f14\u793a)",id:"demos",level:2}],y={toc:S};function w(e){var t,r=e,{components:p}=r,m=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=g(g({},y),m),i(t,u({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u4e3b\u4ecb\u9762\u662f\u555f\u52d5TouchGFX Designer\u6642\u51fa\u73fe\u7684\u7b2c\u4e00\u500b\u8996\u7a97\u3002 \u5f9e\u4e3b\u4ecb\u9762\u53ef\u4ee5\u5275\u5efa\u65b0\u7684\u5c08\u6848\u3001\u63a2\u7d22\u6f14\u793a\u5c08\u6848\u4ee5\u53ca\u6253\u958b\u73fe\u6709\u5c08\u6848\u3002 ",(0,n.kt)(o.Z,{mdxType:"Shortcut"},"\u6309CTRL + N\u5f9e\u6253\u958b\u7684\u5c08\u6848\u4e2d\u9032\u5165\u4e3b\u4ecb\u9762"),"\u3002"),(0,n.kt)("p",null,"\u7b2c\u4e00\u6b21\u904b\u884cTouchGFX Designer\u6642\uff0c\u5728\u9032\u5165\u4e3b\u4ecb\u9762\u524d\u6703\u5f48\u51fa\u6b61\u8fce\u8996\u7a97\u4e26\u986f\u793a",(0,n.kt)("a",g({parentName:"p"},{href:"main-window#theme"}),"\u6dfa\u8272\u548c\u6df1\u8272\u4e3b\u984c"),"\u9078\u9805\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-welcome-pop-up.png",width:"630",height:"455",mdxType:"Figure"},"\u6b61\u8fce\u8996\u7a97"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-theme-selector-pop-up.png",width:"630",height:"420",mdxType:"Figure"},"\u4e3b\u984c\u9078\u64c7\u8996\u7a97"),(0,n.kt)("h2",g({},{id:"home"}),"Home (\u4e3b\u9801)"),(0,n.kt)("p",null,"\u5728\u201cHome\u201d\u9078\u9805\u5361\u4e2d\uff0c\u53ef\u4ee5\u57fa\u65bc\u6700\u8fd1\u4f7f\u7528\u7684TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\uff08TBS\uff09\u5275\u5efa\u65b0\u5c08\u6848\uff0c\u4e5f\u53ef\u4ee5\u6253\u958b\u5c08\u6848\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-home.png",mdxType:"Figure"},"\u4e3b\u4ecb\u9762\u4e2d\u7684\u201cHome\u201d\u9078\u9805\u5361"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Recently used TouchGFX Board Setups"),(0,n.kt)("br",null),"\u5728\u8a72\u5340\u57df\uff0c\u53ef\u4ee5\u9078\u64c7\u5728\u6700\u8fd1\u7684\u5c08\u6848\u4e2d\u4f7f\u7528\u7684TBS\uff0c\u4e26\u53ef\u7d50\u5408\u7a7a\u767dUI\u7528\u65bc\u5275\u5efa\u65b0\u5c08\u6848\u3002 \u9078\u64c7TBS\u6642\u6240\u986f\u793a\u7684\u9078\u9805\u8207\u5728",(0,n.kt)("a",g({parentName:"p"},{href:"#create"}),"\u201cCreate\u201d"),"\u4e0b\u9078\u64c7TBS\u6642\u6240\u986f\u793a\u7684\u9078\u9805\u76f8\u540c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"My Recent Projects"),(0,n.kt)("br",null)," \u4f7f\u7528\u8005\u53ef\u5728\u9019\u500b\u5340\u57df\u5feb\u901f\u6253\u958b\u6700\u8fd1\u7684\u5c08\u6848\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Open"),(0,n.kt)("br",null)," \u6309\u4e0b\u201cOpen\u201d\u6309\u9215\u5c07\u6253\u958b\u4e00\u500b\u6a94\u6848\u700f\u89bd\u5668\uff0c\u53ef\u4ee5\u624b\u52d5\u700f\u89bd\u4e26\u6253\u958b. touchfx\u5c08\u6848\u6a94\u6848\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Create New"),(0,n.kt)("br",null)," \u6309\u4e0b\u201cCreate New\u201d\u6309\u9215\u5c07\u4e3b\u4ecb\u9762\u4e2d\u7684\u201cHome\u201d\u9078\u9805\u5361\u6539\u70ba\u201cCreate\u201d\u9078\u9805\u5361\u3002"),(0,n.kt)("h2",g({},{id:"create"}),"Create (\u5275\u5efa)"),(0,n.kt)("p",null,"\u5728\u201cCreate \u201d\u9078\u9805\u5361\u4e2d\uff0c\u53ef\u4ee5\u9078\u64c7TBS\u8207\u7a7a\u767dUI\u4e00\u8d77\u7528\u65bc\u65b0\u5c08\u6848\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create.png",mdxType:"Figure"},"\u4e3b\u4ecb\u9762\u4e2d\u7684\u201cCreate\u201d\u9078\u9805\u5361"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u641c\u7d22\u6b04"),(0,n.kt)("br",null)," \u641c\u7d22\u6b04\u7528\u65bc\u6839\u64da\u958b\u767c\u677f\u540d\u7a31\u7be9\u9078TBS\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",mdxType:"Figure"},"\u641c\u7d22\u6b04"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u751f\u7522\u5546\u7be9\u9078\u5668"),(0,n.kt)("br",null),"\u751f\u7522\u5546\u7be9\u9078\u5668\u5206\u70ba\u4e09\u500b\uff1a"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-filter.png",mdxType:"Figure"},"\u751f\u7522\u5546\u7be9\u9078\u5668"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TBS\u5217\u8868"),(0,n.kt)("br",null)," \u6839\u64da\u9078\u5b9a\u7684\u7be9\u9078\u5668\uff0c\u986f\u793aTBS\u6e05\u55ae\u3002 \u6bcf\u500bTBS\u4e2d\u986f\u793a\u7684\u5c6c\u6027\u5305\u62ec\u540d\u7a31\u3001\u4f5c\u696d\u7cfb\u7d71\u548c\u89e3\u6790\u5ea6\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-list.png",mdxType:"Figure"},"TBS\u5217\u8868\u793a\u4f8b"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9078\u5b9a\u7684TBS"),(0,n.kt)("br",null)," \u9078\u64c7\u67d0\u500bTBS\u6642\uff0c\u53f3\u5074\u90e8\u5206\u986f\u793a\u95dc\u65bc\u8a72TBS\u7684\u8a73\u7d30\u8cc7\u8a0a\uff0c\u4ee5\u53ca\u57fa\u65bcTBS\u5275\u5efa\u65b0\u5c08\u6848\u7684\u9078\u9805\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-info-and-create.png",mdxType:"Figure"},"\u9078\u5b9a\u7684TBS\u4ee5\u53ca\u63cf\u8ff0\u548c\u9078\u9805"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Application Name"),(0,n.kt)("br",null),"\u9019\u5c07\u78ba\u5b9a\u65b0\u5c08\u6848\u7684\u540d\u7a31\uff0c\u4ee5\u53ca\u5305\u542b\u65b0\u5c08\u6848\u7684\u8cc7\u6599\u593e\u7684\u540d\u7a31\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Application Directory"),(0,n.kt)("br",null)," \u9019\u5c07\u6c7a\u5b9a\u65b0\u5c08\u6848\u7684\u4f4d\u7f6e\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Color Depth"),(0,n.kt)("br",null)," \u8a72\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u6240\u9078TBS\u652f\u63f4\u7684\u8272\u5f69\u6df1\u5ea6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Versions"),(0,n.kt)("br",null)," \u8a72\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u6240\u9078TBS\u652f\u63f4\u7684\u4e0d\u540c\u7248\u672c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resolution"),(0,n.kt)("br",null)," \u89e3\u6790\u5ea6\u7684\u8abf\u6574\u53d6\u6c7a\u65bc\u6240\u9078\u64c7\u7684TBS\u3002 \u6a21\u64ec\u5668TBS\u652f\u63010 x 0\u548c2000 x 2000\u4e4b\u9593\u7684\u4efb\u4f55\u89e3\u6790\u5ea6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Create"),(0,n.kt)("br",null)," Pressing the Create button, creates a new project based on the selected TBS and Blank UI, with the settings from above."),(0,n.kt)("h2",g({},{id:"examples"}),"Examples (\u7bc4\u4f8b)"),(0,n.kt)("p",null,"\u5728\u201cExamples\u201d\u9078\u9805\u5361\u4e2d\uff0c\u53ef\u4ee5\u57fa\u65bc\u7bc4\u4f8b\u548cTBS\u5275\u5efa\u65b0\u9805\u76ee\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples.png",mdxType:"Figure"},"\u4e3b\u4ecb\u9762\u4e2d\u7684\u201cExamples\u201d\u9078\u9805\u5361"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u641c\u7d22\u6b04"),(0,n.kt)("br",null)," \u641c\u7d22\u6b04\u7528\u65bc\u6309\u540d\u7a31\u7be9\u9078\u7bc4\u4f8b\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",mdxType:"Figure"},"\u641c\u7d22\u6b04"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7bc4\u4f8b\u5217\u8868"),(0,n.kt)("br",null)," \u6839\u64da\u9078\u5b9a\u7684\u7be9\u9078\u5668\uff0c\u986f\u793a\u7bc4\u4f8b\u6e05\u55ae\u3002 \u6bcf\u500b\u7bc4\u4f8b\u4e2d\u986f\u793a\u7684\u5c6c\u6027\u5305\u62ec\u540d\u7a31\u4ee5\u53ca\u7bc4\u4f8b\u76f8\u5bb9\u7684\u89e3\u6790\u5ea6\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-example-list.png",mdxType:"Figure"},"\u7bc4\u4f8b\u5217\u8868"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Select Board Setup"),(0,n.kt)("br",null)," \u201cSelect Board Setup\u201d\u6309\u9215\u53ef\u6253\u958b\u4e00\u500b\u8996\u7a97\uff0c\u53ef\u5728\u5176\u4e2d\u9078\u64c7TBS\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",mdxType:"Figure"},"\u201cSelect Board Setup\u201d\u8996\u7a97"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u641c\u7d22\u6b04"),(0,n.kt)("br",null)," \u641c\u7d22\u6b04\u7528\u65bc\u6309\u540d\u7a31\u7be9\u9078TBS\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u751f\u7522\u5546\u7be9\u9078\u5668"),(0,n.kt)("br",null),"\u751f\u7522\u5546\u7be9\u9078\u5668\u5206\u70ba\u4e09\u500b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TBS\u5217\u8868"),(0,n.kt)("br",null)," \u6839\u64da\u9078\u5b9a\u7684\u7be9\u9078\u5668\uff0c\u986f\u793aTBS\u6e05\u55ae\u3002 \u6bcf\u500bTBS\u4e2d\u986f\u793a\u7684\u5c6c\u6027\u5305\u62ec\u540d\u7a31\u3001\u4f5c\u696d\u7cfb\u7d71\u548c\u89e3\u6790\u5ea6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TBS\u8cc7\u8a0a"),(0,n.kt)("br",null)," \u9078\u64c7\u67d0\u500bTBS\u6642\uff0c\u53f3\u5074\u90e8\u5206\u986f\u793a\u95dc\u65bc\u8a72TBS\u7684\u8a73\u7d30\u8cc7\u8a0a\uff0c\u4ee5\u53ca\u7528\u65bc\u8a2d\u7f6e\u7248\u672c\u7684\u9078\u9805\u3002\u6309\u201cSelect \u201d\u6309\u9215\u4f86\u9078\u64c7TBS\u3002",(0,n.kt)("br",null)),(0,n.kt)("p",null,"\u986f\u793a\u9078\u5b9a\u7684TBS\uff0c\u800c\u4e0d\u662f\u201cSelect Board Setup\u201d\u6309\u9215\uff0c\u89e3\u6790\u5ea6\u4e0d\u5339\u914d\u7684\u7bc4\u4f8b\u986f\u793a\u70ba\u7070\u8272\u72c0\u614b\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-board.png",mdxType:"Figure"},"\u9802\u90e8\u986f\u793a\u7bc4\u4f8b\u6e05\u55ae\u8207\u9078\u5b9a\u7684TBS\uff0c\u89e3\u6790\u5ea6\u8207TBS\u4e0d\u76f8\u5bb9\u7684\u7bc4\u4f8b\u5247\u986f\u793a\u70ba\u7070\u8272\u72c0\u614b"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9078\u5b9a\u7684\u7bc4\u4f8b"),(0,n.kt)("br",null),"\u9078\u64c7\u67d0\u500b\u7bc4\u4f8b\u6642\uff0c\u53f3\u5074\u90e8\u5206\u986f\u793a\u8cc7\u8a0a\uff0c\u4ee5\u53ca\u57fa\u65bc\u7bc4\u4f8b\u5275\u5efa\u65b0\u5c08\u6848\u7684\u9078\u9805\u3002",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-example.png",mdxType:"Figure"},"\u986f\u793a\u9078\u5b9a\u7bc4\u4f8b\u7684\u8cc7\u8a0a\u548c\u9078\u9805"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Application Name"),(0,n.kt)("br",null),"\u9019\u5c07\u78ba\u5b9a\u65b0\u5c08\u6848\u7684\u540d\u7a31\uff0c\u4ee5\u53ca\u5305\u542b\u65b0\u5c08\u6848\u7684\u8cc7\u6599\u593e\u7684\u540d\u7a31\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Application Directory"),(0,n.kt)("br",null)," \u9019\u5c07\u6c7a\u5b9a\u65b0\u5c08\u6848\u7684\u4f4d\u7f6e\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Color Depth"),(0,n.kt)("br",null)," \u8a72\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u6240\u9078\u7bc4\u4f8b\u548cTBS\u652f\u63f4\u7684\u8272\u5f69\u6df1\u5ea6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Versions"),(0,n.kt)("br",null)," \u8a72\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u7bc4\u4f8b\u7684\u4e0d\u540c\u7248\u672c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resolution"),(0,n.kt)("br",null)," \u89e3\u6790\u5ea6\u7684\u8abf\u6574\u53d6\u6c7a\u65bc\u6240\u9078\u64c7\u7684\u7bc4\u4f8b\u548cTBS\u3002 \u7a7a\u767dUI+\u6a21\u64ec\u5668\u652f\u63f40 x 0\u52302000 x 2000\u4e4b\u9593\u7684\u4efb\u4f55\u89e3\u6790\u5ea6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Create"),(0,n.kt)("br",null)," \u6309\u4e0b\u201cCreate\u201d\u6309\u9215\uff0c\u57fa\u65bc\u9078\u5b9a\u7684\u7bc4\u4f8b\u3001TBS\u4ee5\u53ca\u4e0a\u8ff0\u8a2d\u7f6e\u5275\u5efa\u4e00\u500b\u65b0\u7684\u5c08\u6848\u3002"),(0,n.kt)("h2",g({},{id:"demos"}),"Demos (\u6f14\u793a)"),(0,n.kt)("p",null,"\u5728\u201cDemos\u201d\u9078\u9805\u5361\u4e2d\uff0c\u53ef\u4ee5\u57fa\u65bc\u6f14\u793a\u548cTBS\u6216\u958b\u767c\u677f\u7279\u5b9a\u6f14\u793a\uff08BSD\uff09\u5275\u5efa\u5c08\u6848\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo.png",mdxType:"Figure"},"\u4e3b\u4ecb\u9762\u4e2d\u201c\u6f14\u793a\u201d\u9078\u9805\u5361"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6f14\u793a\u7be9\u9078\u5668"),(0,n.kt)("br",null)," \u5728\u9802\u90e8\u7684\u7be9\u9078\u5668\u4e2d\uff0c\u53ef\u4ee5\u9078\u64c7\u201cDemo \u201d\u6216\u201cBoard Specific Demo (BSD)\u201d\uff0c\u9032\u800c\u986f\u793a\u6f14\u793a\u6216BSD\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-filter.png",mdxType:"Figure"},"\u6f14\u793a\u7be9\u9078\u5668"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u641c\u7d22\u6b04"),(0,n.kt)("br",null)," \u641c\u7d22\u6b04\u7528\u65bc\u6309\u540d\u7a31\u7be9\u9078\u6f14\u793a\u6216BSD\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",mdxType:"Figure"},"\u641c\u7d22\u6b04"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6f14\u793a\u6e05\u55ae"),(0,n.kt)("br",null)," \u6839\u64da\u9078\u5b9a\u7684\u7be9\u9078\u5668\uff0c\u986f\u793a\u6f14\u793a\u6e05\u55ae\u3002 \u6bcf\u500b\u6f14\u793a\u6216BSD\u4e2d\u986f\u793a\u7684\u5c6c\u6027\u5305\u62ec\u540d\u7a31\u548c\u8981\u6c42\u7684\u89e3\u6790\u5ea6\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo-list.png",mdxType:"Figure"},"\u61c9\u7528\u4e86\u6f14\u793a\u7be9\u9078\u5668\u7684\u6f14\u793a\u6e05\u55ae"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-board-specific-demo-list.png",mdxType:"Figure"},"\u61c9\u7528\u4e86\u201cBoard Specific Demo (BSD)\u201d\u7be9\u9078\u5668\u7684\u6f14\u793a\u6e05\u55ae"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Select Board Setup"),(0,n.kt)("br",null)," \u201cSelect Board Setup\u201d\u6309\u9215\u53ef\u6253\u958b\u4e00\u500b\u8996\u7a97\uff0c\u53ef\u5728\u5176\u4e2d\u9078\u64c7TBS"),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",mdxType:"Figure"},"\u201cSelect Board Setup\u201d\u8996\u7a97"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9078\u5b9a\u7684\u6f14\u793a\u6216BSD"),(0,n.kt)("br",null)," \u9078\u64c7\u67d0\u500b\u7bc4\u4f8b\u6642\uff0c\u53f3\u5074\u90e8\u5206\u986f\u793a\u63cf\u8ff0\u8cc7\u8a0a\uff0c\u4ee5\u53ca\u57fa\u65bc\u7bc4\u4f8b\u5275\u5efa\u65b0\u5c08\u6848\u7684\u9078\u9805\u3002",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-selected-demo-or-bsd.png",mdxType:"Figure"},"\u9078\u5b9a\u7684\u6f14\u793a\u6216BSD\uff0c\u4ee5\u53ca\u8cc7\u8a0a\u548c\u9078\u9805"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Application Name"),(0,n.kt)("br",null),"\u9019\u5c07\u78ba\u5b9a\u65b0\u5c08\u6848\u7684\u540d\u7a31\uff0c\u4ee5\u53ca\u5305\u542b\u65b0\u5c08\u6848\u7684\u8cc7\u6599\u593e\u7684\u540d\u7a31\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Application Directory"),(0,n.kt)("br",null)," \u9019\u5c07\u6c7a\u5b9a\u65b0\u5c08\u6848\u7684\u4f4d\u7f6e\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Color Depth"),(0,n.kt)("br",null)," \u8a72\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u6240\u9078\u6f14\u793a\u548cTBS\u6216BSD\u652f\u63f4\u7684\u8272\u5f69\u6df1\u5ea6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Versions"),(0,n.kt)("br",null)," \u8a72\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u6f14\u793a\u6216BSD\u7684\u4e0d\u540c\u7248\u672c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resolution"),(0,n.kt)("br",null)," \u89e3\u6790\u5ea6\u7684\u8abf\u6574\u53d6\u6c7a\u65bc\u6240\u9078\u64c7\u7684TBS\u6216BSD\u3002 \u7a7a\u767dUI+\u6a21\u64ec\u5668\u652f\u63f40 x 0\u52302000 x 2000\u4e4b\u9593\u7684\u4efb\u4f55\u89e3\u6790\u5ea6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Create"),(0,n.kt)("br",null)," \u6309\u4e0b\u201cCreate\u201d\u6309\u9215\uff0c\u57fa\u65bc\u9078\u5b9a\u7684\u6f14\u793a\u548cTBS\u6216BSD\uff0c\u4ee5\u53ca\u4e0a\u8ff0\u8a2d\u7f6e\u5275\u5efa\u4e00\u500b\u65b0\u7684\u5c08\u6848\u3002"))}w.isMDXComponent=!0}}]);