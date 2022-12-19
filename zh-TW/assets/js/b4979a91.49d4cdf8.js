"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4387],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,c=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:c,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:c,src:a})),n.createElement("p",null,e.children))}},45135:function(e,t,r){var n=r(67294);class o extends n.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(t.test(e))return t.exec(e)[1];const r=/https:\/\/youtu\.be\/(\w+)/;if(r.test(e))return r.exec(e)[1];return e}(this.props.url)}`;return n.createElement("div",{className:"videoWrapper"},n.createElement("iframe",{src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}}t.Z=o},53130:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return w}});var n=r(3905),o=r(39130),c=r(44035),a=r(45135),i=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&f(e,r,t[r]);return e};const h={id:"welcome",title:"TouchGFX\u6587\u4ef6",sidebar_label:"\u6b61\u8fce",description:"TouchGFX\u6587\u4ef6\u7db2\u7ad9\u2014\u2014\u4e00\u500b\u65b9\u4fbf\u4f7f\u7528\u8005\u7684\u5716\u5f62C++\u5de5\u5177\uff0c\u7528\u65bc\u5275\u5efa\u5f37\u5927\u7684\u5d4c\u5165\u5f0f\u89f8\u6478\u61c9\u7528\u7a0b\u5f0f\u3002"},b=void 0,y={unversionedId:"introduction/welcome",id:"introduction/welcome",title:"TouchGFX\u6587\u4ef6",description:"TouchGFX\u6587\u4ef6\u7db2\u7ad9\u2014\u2014\u4e00\u500b\u65b9\u4fbf\u4f7f\u7528\u8005\u7684\u5716\u5f62C++\u5de5\u5177\uff0c\u7528\u65bc\u5275\u5efa\u5f37\u5927\u7684\u5d4c\u5165\u5f0f\u89f8\u6478\u61c9\u7528\u7a0b\u5f0f\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.19/zh-TW/docs/introduction/welcome",draft:!1,tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX\u6587\u4ef6",sidebar_label:"\u6b61\u8fce",description:"TouchGFX\u6587\u4ef6\u7db2\u7ad9\u2014\u2014\u4e00\u500b\u65b9\u4fbf\u4f7f\u7528\u8005\u7684\u5716\u5f62C++\u5de5\u5177\uff0c\u7528\u65bc\u5275\u5efa\u5f37\u5927\u7684\u5d4c\u5165\u5f0f\u89f8\u6478\u61c9\u7528\u7a0b\u5f0f\u3002"},sidebar:"docs",previous:{title:"Introduction",permalink:"/4.19/zh-TW/docs/category/introduction"},next:{title:"\u4ec0\u9ebc\u662fTouchGFX\uff1f",permalink:"/4.19/zh-TW/docs/introduction/what-is-touchgfx"}},g={},w=[{value:"\u95dc\u65bc\u672c\u6587\u4ef6",id:"about-this-documentation",level:2},{value:"\u76ee\u6a19\u4f7f\u7528\u8005",id:"target-user",level:3}],v={toc:w};function k(e){var t,r=e,{components:i}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),f),u(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u6b61\u8fce\u4f7f\u7528TouchGFX\u7684\u5b98\u65b9\u6587\u4ef6\uff01"),(0,n.kt)(a.Z,{url:"https://youtu.be/t0SlRZnERms",mdxType:"YouTube"}),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u662f\u672c\u6587\u4ef6\u6216TouchGFX\u7684\u65b0\u4f7f\u7528\u8005\uff0c\u6211\u5011\u5efa\u8b70\u60a8\u900f\u904e\u95b1\u8b80\u672c\u6587\u4ef6\u4f86\u5927\u6982\u4e86\u89e3\u6587\u4e2d\u5167\u5bb9\u3002 \u5074\u908a\u6b04\u4e2d\u7684\u76ee\u9304\u4f7f\u60a8\u53ef\u4ee5\u8f15\u9b06\u5b58\u53d6\u6587\u4e2d\u611f\u8208\u8da3\u7684\u4e3b\u984c\u3002 \u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u641c\u5c0b\u529f\u80fd\u3002"),(0,n.kt)("h2",d({},{id:"about-this-documentation"}),"\u95dc\u65bc\u672c\u6587\u4ef6"),(0,n.kt)("p",null,"\u672c\u7db2\u7ad9\u7684\u4e3b\u8981\u6587\u4ef6\u5206\u70ba\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"what-is-touchgfx"}),(0,n.kt)("strong",{parentName:"a"},"\u7c21\u4ecb"))," - \u95b1\u8b80\u6709\u95dcTouchGFX\u7684\u57fa\u790e\u8cc7\u8a0a\u548c\u5b89\u88dd\u6307\u5357\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,n.kt)("strong",{parentName:"a"},"\u57fa\u672c\u6982\u5ff5"))," - \u4ecb\u7d39\u95dc\u9375\u5716\u5f62\u6982\u5ff5\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../development/development-introduction"}),(0,n.kt)("strong",{parentName:"a"},"\u958b\u767c"))," - \u5982\u4f55\u958b\u767cTouchGFX\u61c9\u7528\uff0c\u5305\u62ec\u7d50\u69cb\u3001\u5de5\u4f5c\u6d41\u7a0b\u548c\u5de5\u5177\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,n.kt)("strong",{parentName:"a"},"\u6559\u5b78"))," - TouchGFX\u6559\u5b78\u96c6\u5408\u3002")),(0,n.kt)(c.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.webp",noShadow:"true",mdxType:"Figure"}),(0,n.kt)("h3",d({},{id:"target-user"}),"\u76ee\u6a19\u4f7f\u7528\u8005"),(0,n.kt)("p",null,"\u672cTouchGFX\u6587\u4ef6\u7684\u76ee\u6a19\u8b80\u8005\u70ba\u5728C++\u548cSTM32\u4e0a\u7684\u5d4c\u5165\u5f0fGUI\u958b\u767c\u9818\u57df\u5177\u6709\u76f8\u61c9\u57fa\u790e\u77e5\u8b58\u8207\u6280\u80fd\u7684\u8edf\u9ad4\u958b\u767c\u4eba\u54e1\u3002 \u5d4c\u5165\u5f0fGUI\u958b\u767c\u65b0\u624b\u53ef\u53c3\u95b1\u300c\u57fa\u672c\u6982\u5ff5\uff08Basic Concepts\uff09\u300d\u7ae0\u7bc0\uff0c\u540c\u6642\u6240\u6709\u7684\u958b\u767c\u8005\u90fd\u53ef\u4ee5\u5728\u5faa\u5e8f\u6f38\u9032\u5730\u7684\u6307\u5357\u548c\u6559\u5b78\u4e2d\u5f97\u5230\u6536\u7372\u4ee5\u5229GUI\u958b\u767c\u66f4\u70ba\u9806\u5229\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u6211\u5011\u771f\u7684\u5f88\u5e0c\u671b\u4ee5\u4efb\u4f55\u65b9\u5f0f\u6539\u9032\u6b64\u6587\u4ef6\u3002**\u5982\u679c\u60a8\u4e0d\u7406\u89e3\u67d0\u4e9b\u5167\u5bb9\uff0c\u6216\u5728\u6587\u4ef6\u4e2d\u627e\u4e0d\u5230\u60f3\u8981\u7684\u5167\u5bb9\uff0c\u8acb\u900f\u904e",(0,n.kt)(o.Z,{to:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",target:"_blank",mdxType:"Link"},"\u8ad6\u58c7"),"\u8b93\u6211\u5011\u77e5\u9053\uff0c\u4ee5\u5e6b\u52a9\u6211\u5011\u6539\u9032\u672c\u6587\u4ef6\u3002")))}k.isMDXComponent=!0}}]);