"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9539],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||r;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22425:function(e,n,t){var o=t(67294);class i extends o.Component{render(){return o.createElement("div",{className:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}n.Z=i},44035:function(e,n,t){var o=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,r=e.height,a=(0,i.Z)(e.imageSource);return n?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:t,height:r,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:t,height:r,src:a})),o.createElement("p",null,e.children))}},29415:function(e,n,t){var o=t(67294),i=t(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}n.Z=a},88678:function(e,n,t){var o=t(67294);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=i},37856:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return k},default:function(){return B},frontMatter:function(){return v},metadata:function(){return x},toc:function(){return N}});var o=t(3905),i=t(67294);class r extends i.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const n=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(n.test(e))return n.exec(e)[1];const t=/https:\/\/youtu\.be\/(\w+)/;if(t.test(e))return t.exec(e)[1];return e}(this.props.url)}`;return i.createElement("div",{className:"videoWrapper"},i.createElement("iframe",{src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}}var a=r,l=t(22425),c=t(29415),u=t(44035),p=t(39130),s=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,C=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,y=(e,n)=>{for(var t in n||(n={}))g.call(n,t)&&C(e,t,n[t]);if(h)for(var t of h(n))f.call(n,t)&&C(e,t,n[t]);return e};const v={id:"custom-containers",title:"\u81ea\u5b9a\u4e49\u5bb9\u5668"},k=void 0,x={unversionedId:"development/ui-development/touchgfx-engine-features/custom-containers",id:"development/ui-development/touchgfx-engine-features/custom-containers",title:"\u81ea\u5b9a\u4e49\u5bb9\u5668",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-containers.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-containers",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-containers",tags:[],version:"current",frontMatter:{id:"custom-containers",title:"\u81ea\u5b9a\u4e49\u5bb9\u5668"},sidebar:"docs",previous:{title:"Position and size",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/position-size"},next:{title:"\u7f13\u5b58\u4f4d\u56fe",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}},b={},N=[{value:"\u5728TouchGFX Designer\u4e2d",id:"in-touchgfx-designer",level:2},{value:"\u590d\u5408\u81ea\u5b9a\u4e49\u5bb9\u5668",id:"composite-custom-containers",level:3},{value:"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c",id:"custom-triggers-and-actions",level:3},{value:"\u5728\u4ee3\u7801\u4e2d",id:"in-code",level:2},{value:"\u521b\u5efa\u7ee7\u627ftouchgfx::Container\u7c7b\u7684\u7c7b",id:"create-a-class-that-extends-the-touchgfxcontainer-class",level:3},{value:"\u5c06\u5bb9\u5668\u7684\u6240\u6709\u5b50\u5bb9\u5668\u58f0\u660e\u4e3a\u6210\u5458\u53d8\u91cf",id:"declaring-all-children-of-the-container-as-member-variables",level:3},{value:"\u8bbe\u7f6e\u5bb9\u5668\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6",id:"setting-the-width-and-height-of-the-container",level:3},{value:"\u8bbe\u7f6e\u6bcf\u4e2a\u5b50\u5bb9\u5668",id:"setting-up-each-of-the-children",level:3},{value:"\u6309\u6b63\u786e\u987a\u5e8f\u5c06\u6bcf\u4e2a\u5b50\u5bb9\u5668\u6dfb\u52a0\u5230\u5c42\u6b21\u7ed3\u6784\u4e2d",id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order",level:3},{value:"\u901a\u8fc7\u65b9\u6cd5\u548c\u56de\u8c03\u5b9e\u73b0\u9700\u8981\u7684\u884c\u4e3a",id:"implementing-the-desired-behaviour-via-methods-and-callbacks",level:3}],M={toc:N};function B(e){var n,t=e,{components:i}=t,r=((e,n)=>{var t={};for(var o in e)g.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&h)for(var o of h(e))n.indexOf(o)<0&&f.call(e,o)&&(t[o]=e[o]);return t})(t,["components"]);return(0,o.kt)("wrapper",(n=y(y({},M),r),m(n,d({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"\u5728\u521b\u5efa\u5e94\u7528\u65f6\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u5728 TouchGFX \u4e2d\u5305\u542b\u7684\u6807\u51c6\u5c0f\u90e8\u4ef6\u96c6\u5408\u4e2d\u627e\u4e0d\u5230\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,o.kt)("p",null,"\u4e00\u79cd\u521b\u5efa\u81ea\u5df1\u5c0f\u90e8\u4ef6\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bb9\u5668\u3002 \u81ea\u5b9a\u4e49\u5bb9\u5668\u662f\u4e00\u4e2a\u5305\u542b\u5176\u4ed6\u73b0\u6709\u5c0f\u90e8\u4ef6\u7684\u5bf9\u8c61\uff0c\u5b83\u7ec4\u5408\u4e86\u8fd9\u4e9b\u5c0f\u90e8\u4ef6\u7684\u89c6\u89c9\u8868\u73b0\u548c\u884c\u4e3a\u3002 \u5b83\u4e0e\u4f20\u7edf\u7684\u590d\u5408\u8bbe\u8ba1\u6a21\u5f0f\u5e76\u65e0\u4e0d\u540c\uff0c\u6211\u4eec\u4e5f\u5c06\u5305\u542b\u7684\u5c0f\u90e8\u4ef6\u79f0\u4e3a\u5bb9\u5668\u7684\u5b50\u5bb9\u5668\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u7ed8\u5236\u6027\u80fd\u901a\u5e38\u4f1a\u5f88\u9ad8\u3002 \u5b83\u4f1a\u5229\u7528TouchGFX\u7684\u5e95\u5c42\u7ed8\u56fe\u673a\u5236\uff0c\u5e76\u786e\u5b9a\u5bb9\u5668\u7684\u54ea\u4e9b\u90e8\u5206\u548c\u5b50\u5bb9\u5668\u9700\u8981\u81ea\u52a8\u91cd\u65b0\u7ed8\u5236\u3002 \u8fd9\u610f\u5473\u7740\u5728\u4f7f\u7528\u5bb9\u5668\u65f6\u65e0\u9700\u62c5\u5fc3\u7ed8\u56fe\u6027\u80fd\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u6709\u65f6\u5019\u53ef\u80fd\u9700\u8981\u51cf\u5c11\u5c0f\u90e8\u4ef6\u7684\u7a7a\u95f4\u5360\u7528\u91cf\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u66f4\u9ad8\u7ea7\u7684",(0,o.kt)("a",y({parentName:"p"},{href:"custom-widgets"}),"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6"),"\u65b9\u6cd5\u53ef\u80fd\u66f4\u5408\u9002\u3002"),(0,o.kt)("h2",y({},{id:"in-touchgfx-designer"}),"\u5728TouchGFX Designer\u4e2d"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u5728TouchGFX Designer\u4e2d\u521b\u5efa\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bb9\u5668\uff0c\u6211\u4eec\u5728\u4e0b\u9762\u7684\u89c6\u9891\u4e2d\u63d0\u4f9b\u4e86\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u5b83\u4eec\u7684\u901a\u4fd7\u4ecb\u7ecd\uff1a"),(0,o.kt)(a,{url:"https://youtu.be/nX1nCAA4pyA",mdxType:"YouTube"}),(0,o.kt)("h3",y({},{id:"composite-custom-containers"}),"\u590d\u5408\u81ea\u5b9a\u4e49\u5bb9\u5668"),(0,o.kt)("p",null,"\u53ef\u4ee5\u521b\u5efa\u7531\u5176\u4ed6\u81ea\u5b9a\u4e49\u5bb9\u5668\u7ec4\u6210\u7684\u81ea\u5b9a\u4e49\u5bb9\u5668\u3002 \u8fd9\u53ef\u80fd\u662f\u4e00\u79cd\u7528\u66f4\u5c0f\u7684\u7ec4\u4ef6\u521b\u5efa\u7ec4\u4ef6\u7684\u6709\u6548\u65b9\u5f0f\u3002 \u4e3a\u6b64\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u5728\u201c\u5c0f\u90e8\u4ef6\u201d\u83dc\u5355\u4e2d\u627e\u5230\u7684\u5df2\u5b9a\u4e49\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u5b9e\u4f8b\uff1a"),(0,o.kt)(u.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/composite-custom-containers-4.17.png",mdxType:"Figure"},"\u63d2\u5165\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cTouchGFX Designer\u5c06\u5e2e\u52a9\u60a8\u907f\u514d\u63d2\u5165\u4f1a\u5bfc\u81f4\u5faa\u73af\u5f15\u7528\u7684\u5b9e\u4f8b\uff0c\u5982\u5411\u81ea\u8eab\u5b9a\u4e49\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5bb9\u5668\u5b9e\u4f8b\uff1a"),(0,o.kt)(u.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/circular-reference-4.17.png",mdxType:"Figure"},"\u6f5c\u5728\u5faa\u73af\u5f15\u7528\u5bfc\u81f4\u65e0\u6cd5\u63d2\u5165\u5b9e\u4f8b"),(0,o.kt)("h3",y({},{id:"custom-triggers-and-actions"}),"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u4e00\u4e2a\u5f3a\u5927\u4e4b\u5904\u662f\u80fd\u591f\u6307\u5b9a\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\uff08\u56de\u8c03\uff09\u548c\u81ea\u5b9a\u4e49\u64cd\u4f5c\uff08\u65b9\u6cd5\uff09\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u4e3a\u81ea\u5b9a\u4e49\u5bb9\u5668\u5b9a\u4e49\u6574\u4f53\u884c\u4e3a\uff0c\u4f7f\u4e4b\u4e0d\u518d\u53ea\u662f\u5c0f\u90e8\u4ef6\u7684\u53ef\u91cd\u590d\u4f7f\u7528\u96c6\u5408\uff0c\u8fd8\u53ef\u4ee5\u4e0e\u5e94\u7528\u7684\u5176\u4f59\u90e8\u5206\u901a\u4fe1\u3002"),(0,o.kt)(c.Z,{mdxType:"FurtherReading"},"\u8bf7\u9605\u8bfb",(0,o.kt)(p.Z,{to:"custom-triggers-and-actions",mdxType:"Link"},"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c"),"\u4e00\u8282\u4e2d\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u66f4\u591a\u5185\u5bb9\u3002"),(0,o.kt)("h2",y({},{id:"in-code"}),"\u5728\u4ee3\u7801\u4e2d"),(0,o.kt)("p",null,"\u5728\u672c\u8282\u4e2d\u6211\u4eec\u5c06\u5728\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bb9\u5668\u3002 \u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7ee7\u627ftouchgfx::Container\u7c7b\u7684\u7c7b"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u5bb9\u5668\u7684\u6240\u6709\u5b50\u5bb9\u5668\u58f0\u660e\u4e3a\u6210\u5458\u53d8\u91cf"),(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5bb9\u5668\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6"),(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6bcf\u4e2a\u5b50\u5bb9\u5668"),(0,o.kt)("li",{parentName:"ul"},"\u6309\u6b63\u786e\u987a\u5e8f\u5c06\u6bcf\u4e2a\u5b50\u5bb9\u5668\u6dfb\u52a0\u5230\u5c42\u6b21\u7ed3\u6784\u4e2d"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u65b9\u6cd5\u548c\u56de\u8c03\u5b9e\u73b0\u9700\u8981\u7684\u884c\u4e3a")),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u4ece\u5934\u5f00\u59cb\uff0c\u57fa\u4e8e\u4ee3\u7801\u8fdb\u884c\u6784\u5efa\uff0c\u76f4\u81f3\u5f97\u5230\u4e00\u4e2a\u7b80\u5355\u7684\u5168\u529f\u80fd\u81ea\u5b9a\u4e49\u5bb9\u5668\u3002"),(0,o.kt)("h3",y({},{id:"create-a-class-that-extends-the-touchgfxcontainer-class"}),"\u521b\u5efa\u7ee7\u627ftouchgfx::Container\u7c7b\u7684\u7c7b"),(0,o.kt)("p",null,"\u5148\u7528\u4ee5\u4e0b\u4ee3\u7801\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),"\u5934\u6587\u4ef6\u3002 \u4f7f\u7528C++\u7ee7\u627f\u6765\u8bbf\u95ee",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::Container"),"\u7684\u65b9\u6cd5\u548c\u6210\u5458\uff08\u8bf7\u8bb0\u4f4f\u5305\u542b\u5934\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"Container.hpp"),"\uff09\uff1a"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{2,4}","{2,4}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),(0,o.kt)("h3",y({},{id:"declaring-all-children-of-the-container-as-member-variables"}),"\u5c06\u5bb9\u5668\u7684\u6240\u6709\u5b50\u5bb9\u5668\u58f0\u660e\u4e3a\u6210\u5458\u53d8\u91cf"),(0,o.kt)("p",null,"\u5728\u5934\u6587\u4ef6\u4e2d\u58f0\u660e\u81ea\u5b9a\u4e49\u5bb9\u5668\u5c06\u8981\u5305\u542b\u7684\u5c0f\u90e8\u4ef6\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u53ea\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6846",(0,o.kt)("inlineCode",{parentName:"p"},"myBox"),"\u548c\u4e00\u4e2a\u6309\u94ae",(0,o.kt)("inlineCode",{parentName:"p"},"myButton"),"\u3002"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{19-20}","{19-20}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n};\n")),(0,o.kt)("h3",y({},{id:"setting-the-width-and-height-of-the-container"}),"\u8bbe\u7f6e\u5bb9\u5668\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6"),(0,o.kt)("p",null,"\u521b\u5efacpp\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp"),"\uff0c\u5176\u4e2d\u5305\u542b\u6211\u4eec\u521a\u521a\u521b\u5efa\u7684\u5934\u6587\u4ef6\u3002 \u4f7f\u7528\u6784\u9020\u51fd\u6570\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"setWidth()"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"setHeight()"),"\u65b9\u6cd5\uff0c\u4e3a\u81ea\u5b9a\u4e49\u5bb9\u5668\u8bbe\u7f6e\u4efb\u4f55\u5927\u5c0f\uff1a"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{1,5-6}","{1,5-6}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",y({},{id:"setting-up-each-of-the-children"}),"\u8bbe\u7f6e\u6bcf\u4e2a\u5b50\u5bb9\u5668"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u9700\u8981\u5728\u6784\u9020\u51fd\u6570\u4e2d\u8bbe\u7f6e\u6bcf\u4e2a\u5c0f\u90e8\u4ef6\u7684\u5c5e\u6027\uff1a"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{8-12}","{8-12}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",y({},{id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order"}),"\u6309\u6b63\u786e\u987a\u5e8f\u5c06\u6bcf\u4e2a\u5b50\u5bb9\u5668\u6dfb\u52a0\u5230\u5c42\u6b21\u7ed3\u6784\u4e2d"),(0,o.kt)("p",null,"\u4f7f\u7528\u6784\u9020\u51fd\u6570\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"add()"),"\u65b9\u6cd5\uff0c\u5c06\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u4e3a\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u5b50\u5bb9\u5668\uff1a"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{14-15}","{14-15}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",y({},{id:"implementing-the-desired-behaviour-via-methods-and-callbacks"}),"\u901a\u8fc7\u65b9\u6cd5\u548c\u56de\u8c03\u5b9e\u73b0\u9700\u8981\u7684\u884c\u4e3a"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5411\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u884c\u4e3a\uff0c\u6211\u4eec\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),"\u4e2d\u5b9a\u4e49\u4e00\u4e9b\u65b9\u6cd5\u548c\u56de\u8c03\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u65b9\u6cd5",(0,o.kt)("inlineCode",{parentName:"p"},"doSomething()"),"\uff0c\u5176\u552f\u4e00\u76ee\u7684\u662f\u53d1\u9001\u56de\u8c03",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened"),"\uff1a"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{14-17,22,32-38,51}","{14-17,22,32-38,51}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainerBase();\n    virtual ~MyCustomContainerBase() {}\n    virtual void initialize();\n\n    /*\n     * Callback Setters\n     */\n    void setSomethingHappenedCallback(touchgfx::GenericCallback<>& callback)\n    {\n        somethingHappenedCallback = &callback;\n    }\n\n    /*\n     * Methods\n     */\n    virtual void doSomething();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Callback Emitters\n     */\n    virtual void emitSomethingHappenedCallback()\n    {\n        if (somethingHappenedCallback && somethingHappenedCallback->isValid())\n        {\n            somethingHappenedCallback->execute();\n        }\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::GenericCallback<>* somethingHappenedCallback;\n\n};\n")),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u4e3a\u4e86\u5411\u65b9\u6cd5\u548c\u56de\u8c03\u6dfb\u52a0\u884c\u4e3a\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp"),"\u6587\u4ef6\u4e2d\u5b9e\u73b0\u5b83\u4eec\u3002 \u5bf9\u4e8e\u8fd9\u4e2a\u7b80\u5355\u7684\u8868\u9762\u7ea7\u793a\u4f8b\uff0c\u6211\u4eec\u5c06\u53ea\u53d1\u9001",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened"),"\u56de\u8c03\uff0c\u4f46\u60a8\u53ef\u4ee5\u89c6\u9700\u8981\u8fdb\u884c\u81ea\u5b9a\u4e49\uff1a"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n\nvoid MyCustomContainer::doSomething()\n{\n    MyCustomContainer::emitSomethingHappenedCallback();\n}\n")),(0,o.kt)(c.Z,{mdxType:"FurtherReading"},"\u5173\u4e8e\u5982\u4f55\u521b\u5efa\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u66f4\u591a\u5177\u4f53\u793a\u4f8b\uff0c\u8bf7\u53c2\u8003",(0,o.kt)(p.Z,{to:"../../../tutorials/tutorial-04",mdxType:"Link"},"\u6559\u7a0b4\uff1a")))}B.isMDXComponent=!0}}]);