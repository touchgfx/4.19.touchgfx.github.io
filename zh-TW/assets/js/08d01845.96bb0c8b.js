"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[965],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,h=s["".concat(u,".").concat(d)]||s[d]||m[d]||r;return n?l.createElement(h,a(a({ref:t},p),{},{components:n})):l.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var l=n(67294);class i extends l.Component{render(){return l.createElement("div",{className:"code-header"},l.createElement("div",null,l.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var l=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,a=(0,i.Z)(e.imageSource);return t?l.createElement("div",{className:"figure noshadow"},l.createElement("a",{href:a,target:"_blank"},l.createElement("img",{width:n,height:r,src:a})),l.createElement("p",null,e.children)):l.createElement("div",{className:"figure"},l.createElement("a",{href:a,target:"_blank"},l.createElement("img",{width:n,height:r,src:a})),l.createElement("p",null,e.children))}},39487:function(e,t,n){var l=n(67294),i=n(25026);t.Z=function(e){const t=e.width,n=e.height,r=e.points||[],a=(0,i.Z)(e.imageSource);return l.createElement("div",{style:{position:"relative"}},l.createElement("div",{className:"figure"},l.createElement("a",{href:a,target:"_blank"},l.createElement("img",{width:t,height:n,src:a})),r.map((function(e,t){return l.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},l.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},l.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),l.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),l.createElement("p",null,e.children)))}},29415:function(e,t,n){var l=n(67294),i=n(88678);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends l.Component{render(){return l.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}t.Z=a},88678:function(e,t,n){var l=n(67294);class i extends l.Component{render(){const e=`highlight highlight-${this.props.type}`;return l.createElement("div",{className:e},l.createElement("div",{className:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},77696:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return f},metadata:function(){return E},toc:function(){return y}});var l=n(3905),i=n(39130),r=n(44035),a=n(39487),o=n(29415),u=n(22425),c=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&g(e,n,t[n]);return e};const f={id:"tutorial-04",title:"\u6559\u7a0b4\uff1a\u5275\u5efa\u5177\u6709\u81ea\u8a02\u884c\u70ba\u7684\u6efe\u8f2a\u3002"},v=void 0,E={unversionedId:"tutorials/tutorial-04",id:"tutorials/tutorial-04",title:"\u6559\u7a0b4\uff1a\u5275\u5efa\u5177\u6709\u81ea\u8a02\u884c\u70ba\u7684\u6efe\u8f2a\u3002",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-04.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-04",permalink:"/4.19/zh-TW/docs/tutorials/tutorial-04",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-04",title:"\u6559\u7a0b4\uff1a\u5275\u5efa\u5177\u6709\u81ea\u8a02\u884c\u70ba\u7684\u6efe\u8f2a\u3002"},sidebar:"docs",previous:{title:"\u6559\u7a0b3\uff1a\u591a\u500b\u87a2\u5e55\u7684\u61c9\u7528",permalink:"/4.19/zh-TW/docs/tutorials/tutorial-03"},next:{title:"\u6559\u7a0b5\uff1a\u5275\u5efa\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c",permalink:"/4.19/zh-TW/docs/tutorials/tutorial-05"}},b={},y=[{value:"\u7b2c1\u6b65\uff1a\u5275\u5efa\u81ea\u8a02\u5bb9\u5668",id:"step-1-creating-a-custom-container",level:2},{value:"\u5c07\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u5230\u81ea\u8a02\u5bb9\u5668",id:"adding-widgets-to-the-custom-container",level:3},{value:"\u5c07\u81ea\u8a02\u5bb9\u5668\u6dfb\u52a0\u5230\u87a2\u5e55",id:"adding-the-custom-container-to-a-screen",level:3},{value:"\u7b2c2\u6b65\uff1a\u5275\u5efa\u6efe\u8f2a",id:"step-2-creating-a-scroll-wheel",level:2},{value:"\u5275\u5efa\u6efe\u8f2a",id:"creating-the-scroll-wheel",level:3},{value:"\u5c07\u9078\u9805\u6dfb\u52a0\u5230\u6efe\u8f2a",id:"adding-items-to-the-scroll-wheel",level:3},{value:"\u7b2c3\u6b65\uff1a\u5c07\u7528\u6236\u7a0b\u5f0f\u78bc\u6dfb\u52a0\u5230\u6efe\u8f2a",id:"step-3-adding-user-code-to-scroll-wheel",level:2},{value:"\u66f4\u6539MenuElement\u4e2d\u7684\u5716\u50cf\u548c\u6587\u5b57",id:"change-image-and-text-in-menuelement",level:3},{value:"\u66f4\u65b0\u6efe\u8f2a\u4e2d\u7684\u9078\u9805",id:"update-the-items-in-the-scroll-wheel",level:3},{value:"\u7b2c4\u6b65\uff1a\u5c07\u81ea\u8a02\u884c\u70ba\u6dfb\u52a0\u5230\u6efe\u8f2a",id:"step-4-adding-custom-behavior-to-scroll-wheel",level:2},{value:"\u5c07\u81ea\u8a02\u884c\u70ba\u6dfb\u52a0\u5230MenuElement",id:"add-custom-behavior-to-menuelement",level:3}],N={toc:y};function x(e){var t,c=e,{components:g}=c,f=((e,t)=>{var n={};for(var l in e)d.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&m)for(var l of m(e))t.indexOf(l)<0&&h.call(e,l)&&(n[l]=e[l]);return n})(c,["components"]);return(0,l.kt)("wrapper",(t=k(k({},N),f),p(t,s({components:g,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c07\u5b78\u7fd2\u5982\u4f55\u5275\u5efa\u548c\u914d\u7f6e\u5169\u500b\u5c0f\u90e8\u4ef6 - \u81ea\u8a02\u5bb9\u5668\u548c\u6efe\u8f2a\u3002 \u81ea\u8a02\u5bb9\u5668\u5c0f\u90e8\u4ef6\u4f7f\u4f7f\u7528\u8005\u80fd\u5920\u901a\u904e\u7d44\u5408\u591a\u500b\u5176\u4ed6\u5c0f\u90e8\u4ef6\u4f86\u5275\u5efa\u65b0\u7684\u5c0f\u90e8\u4ef6\uff0c\u4e26\u70ba\u81ea\u8a02\u5bb9\u5668\u4e2d\u7684\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u7279\u5b9a\u884c\u70ba\u3002 \u6efe\u8f2a\u662f\u7528\u4f86\u5275\u5efa\u53ef\u6372\u52d5\u529f\u80fd\u8868\u7684\u5c0f\u90e8\u4ef6\uff0c\u83dc\u55ae\u7531\u591a\u500b\u53ef\u9078\u9805\u7fa4\u7d44\u6210\u3002 \u672c\u6559\u7a0b\u5c07\u5c55\u793a\u5982\u4f55\u5275\u5efa\u7528\u6236\u7a0b\u5f0f\u78bc\u4ee5\u4fbf\u4fee\u6539\u5c0f\u90e8\u4ef6\u7684\u884c\u70ba\u3002"),(0,l.kt)("p",null,"\u9019\u6b21\u6211\u5011\u5c07\u4f7f\u7528\u8f03\u5927\u7684\u87a2\u5e55\uff0c\u56e0\u6b64\u7528800 x 480\u50cf\u7d20\u7684\u89e3\u6790\u5ea6\u70ba\u958b\u767c\u677f\u555f\u52d5\u65b0\u5c08\u6848\uff08\u5982STM32F469\u63a2\u7d22\u5957\u4ef6\uff09\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6a21\u64ec\u5668\u3002"),(0,l.kt)("p",null,"\u95dc\u65bc\u81ea\u8a02\u5bb9\u5668\u548c\u6efe\u8f2a\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("a",k({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/custom-containers"}),"\u201c\u81ea\u8a02\u5bb9\u5668\u201d"),"\u548c",(0,l.kt)("a",k({parentName:"p"},{href:"../development/ui-development/ui-components/containers/scroll-wheel"}),"\u201c\u6efe\u8f2a\u201d"),"\u9801\u9762\u4e0a\u627e\u5230\u3002"),(0,l.kt)("p",null,"\u672c\u6559\u7a0b\u4f7f\u7528\u7684\u5716\u5f62\u53ef\u5f9e\u6b64",(0,l.kt)("a",{target:"_blank",href:n(38197).Z},"\u9023\u7d50"),"\u4e0b\u8f09\u3002 \u5c07\u8cc7\u7522\u4e0b\u7684images\u8cc7\u6599\u593e\u4e2d\u7684\u6a94\u6848\u89e3\u58d3\u7e2e\uff0c\u5c31\u672c\u6559\u7a0b\u4e2d\u4f7f\u7528\u7684\u5c08\u6848\u800c\u8a00\uff0c\u8def\u5f91\u70baMyApplication2\\assets\\images\u3002"),(0,l.kt)("h2",k({},{id:"step-1-creating-a-custom-container"}),"\u7b2c1\u6b65\uff1a\u5275\u5efa\u81ea\u8a02\u5bb9\u5668"),(0,l.kt)("p",null,"\u8207\u6559\u7a0b2\u4e2d\u7684\u7b2c1\u6b65\u985e\u4f3c\uff0c\u9996\u5148\u7528TouchGFX Designer\u65b0\u5efa\u5c08\u6848\u3002 \u9019\u4e00\u6b21\uff0c\u7576\u65b0\u5c08\u6848\u5c31\u7dd2\u6642\uff0c\u5728TouchGFX Designer\u4e2d\u5f9e\u201cscreens\u201d\u9078\u9805\u5361\u5207\u63db\u5230\u201cContainer\u201d\u9078\u9805\u5361 (1)\u3002"),(0,l.kt)(a.Z,{points:[[56,5]],imageSource:"/img/tutorials/tutorial-04/selecting-cc-4-17.webp",mdxType:"FigureWithPoints"},"\u9078\u64c7\u201cCustom Container\u201d\u529f\u80fd\u8868"),(0,l.kt)("p",null,"\u7528\u65bc\u5275\u5efa\u81ea\u8a02\u5bb9\u5668\u7684\u9078\u9805\u5361\u8207\u201cScreens\u201d\u9078\u9805\u5361\u985e\u4f3c\uff0c\u4ee5\u8207\u65b0\u5efa\u87a2\u5e55\u76f8\u540c\u7684\u65b9\u5f0f\u65b0\u5efa\u81ea\u8a02\u5bb9\u5668\u3002 \u5728\u5275\u5efa\u81ea\u8a02\u5bb9\u5668\u5f8c\uff0c\u53ef\u4ee5\u70ba\u5176\u6dfb\u52a0\u5c0f\u90e8\u4ef6\uff0c\u4e26\u4e14\u53ef\u4ee5\u4fee\u6539\u81ea\u8a02\u5bb9\u5668\u7684\u5927\u5c0f\u548c\u540d\u7a31\u3002"),(0,l.kt)("p",null,"\u5728\u201c\u81ea\u8a02\u5bb9\u5668\u201d\u9078\u9805\u5361\u4e0a\uff0c\u4f7f\u7528\u201c+\u201d\u6309\u9215 (1) \u65b0\u5efa\u4e00\u500b\u81ea\u8a02\u5bb9\u5668\uff0c\u5c07\u5176\u91cd\u547d\u540d\u70ba\u201cMenuElement\u201d(2)\uff0c\u4e26\u5c07\u5bec\u5ea6\u4fee\u6539\u70ba390\u3001\u9ad8\u5ea6\u4fee\u6539\u70ba70 (3)\u3002",(0,l.kt)(a.Z,{points:[[56,8],[435,8],[435,35]],imageSource:"/img/tutorials/tutorial-04/creating-cc-4-17.webp",mdxType:"FigureWithPoints"},"\u5275\u5efa\u81ea\u8a02\u5bb9\u5668\u4e26\u8a2d\u7f6e\u5176\u5c6c\u6027")),(0,l.kt)("h3",k({},{id:"adding-widgets-to-the-custom-container"}),"\u5c07\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u5230\u81ea\u8a02\u5bb9\u5668"),(0,l.kt)("p",null,"\u5728\u5275\u5efa\u81ea\u8a02\u5bb9\u5668\u4e26\u8a2d\u7f6e\u5176\u5c6c\u6027\u5f8c\uff0c\u53ef\u4ee5\u5c07\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u5230\u81ea\u8a02\u5bb9\u5668\u3002 \u672c\u6559\u7a0b\u4e2d\u7684\u81ea\u8a02\u5bb9\u5668\u5c07\u5305\u542b\u4e00\u5f35\u5716\u50cf\u548c\u4e00\u500b\u4f7f\u7528\u842c\u7528\u5b57\u5143\u7684\u6587\u5b57\u5340\uff1a"),(0,l.kt)(o.Z,{mdxType:"FurtherReading"},"\u95dc\u65bc\u5982\u4f55\u4f7f\u7528\u542b\u842c\u7528\u5b57\u5143\u7684\u6587\u5b57\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,l.kt)(i.Z,{to:"../development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards",mdxType:"Link"},"\u201c\u6587\u5b57\u548c\u5b57\u9ad4\u201d"),"\u9801\u9762\u7684\u842c\u7528\u5b57\u5143\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u63d2\u5165\u5169\u500b\u5c0f\u90e8\u4ef6\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",k({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"\u5c6c\u6027"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u5716\u50cf"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u7a31\uff1a\u5716\u793a"),(0,l.kt)("li",null,"\u5716\u50cf\uff1aicon00.png"),(0,l.kt)("li",null,"\u4f4d\u7f6e:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 34"),(0,l.kt)("li",null,"Y: 17")))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"TextArea"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u7a31\uff1atext"),(0,l.kt)("li",null,"\u4f4d\u7f6e:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 93, Y: 23"))),(0,l.kt)("li",null,"\u6587\u5b57:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u6587\u5b57\uff1aMenu Element ","<","value",">"),(0,l.kt)("li",null,"Wildcard 1:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u521d\u59cb\u503c\uff1a00"),(0,l.kt)("li",null,"\u7de9\u5b58\u5927\u5c0f\uff1a3"))),(0,l.kt)("li",null,"\u5b57\u9ad4\u6392\u5370\uff1a20px"),(0,l.kt)("li",null,"\u5c0d\u9f4a\uff1a\u5de6"))),(0,l.kt)("li",null,"\u5916\u89c0:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u984f\u8272\uff1a#FFFFFFFF")))))))),(0,l.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-04/adding-content-cc-4-17.webp",mdxType:"Figure"},"\u5c07\u5167\u5bb9\u6dfb\u52a0\u5230\u81ea\u8a02\u5bb9\u5668\uff08\u9078\u4e2dTextArea\uff09"),(0,l.kt)("h3",k({},{id:"adding-the-custom-container-to-a-screen"}),"\u5c07\u81ea\u8a02\u5bb9\u5668\u6dfb\u52a0\u5230\u87a2\u5e55"),(0,l.kt)("p",null,"\u56de\u5230\u201c\u87a2\u5e55\u201d\u9078\u9805\u5361\uff0c\u73fe\u5728\u53ef\u4ee5\u5728\u81ea\u8a02\u5bb9\u5668\u4e0b\u7684\u63a7\u5236\u9805\u529f\u80fd\u8868\u4e2d\u9078\u64c7\u201cMenuElement\u201d(1)\u3002 \u653e\u7f6e\u4e00\u500b\u9ed1\u8272\u65b9\u584a\u4f5c\u70ba\u80cc\u666f\uff0c\u4e26\u5c07\u5275\u5efa\u7684\u5e7e\u500b\u5ba2\u88fd\u5bb9\u5668\u6dfb\u52a0\u5230\u756b\u5e03\u4e0a\u3002 \u8acb\u6ce8\u610f\uff0c\u60a8\u53ef\u4ee5\u5728\u87a2\u5e55\u4e0a\u81ea\u7531\u5730\u79fb\u52d5\u63d2\u5165\u7684\u5bb9\u5668\u3002 \u5ba2\u88fd\u5bb9\u5668\u5c07\u986f\u793a\u70ba\u5de6\u5074\u201c\u5c0f\u5de5\u5177\u201d\u6e05\u55ae\u4e2d\u7684\u4e00\u500b\u5143\u7d20 (2)\u3002",(0,l.kt)(a.Z,{points:[[330,10],[50,25]],imageSource:"/img/tutorials/tutorial-04/inserting-cc-4-17.webp",mdxType:"FigureWithPoints"},"\u5728\u87a2\u5e55\u4e0a\u5c07\u81ea\u8a02\u5bb9\u5668\u4f5c\u70ba\u5c0f\u90e8\u4ef6\u63d2\u5165")),(0,l.kt)("h2",k({},{id:"step-2-creating-a-scroll-wheel"}),"\u7b2c2\u6b65\uff1a\u5275\u5efa\u6efe\u8f2a"),(0,l.kt)("p",null,"\u5728\u6559\u7a0b4\u7684\u9019\u4e00\u6b65\u4e2d\uff0c\u6211\u5011\u5c07\u4f7f\u7528\u7b2c1\u6b65\u4e2d\u5275\u5efa\u7684\u81ea\u8a02\u5bb9\u5668\u201cMenuElement\u201d\u5275\u5efa\u6efe\u8f2a\u3002 \u5982\u7b2c1\u6b65\u4e2d\u6240\u8ff0\uff0c\u6efe\u8f2a\u7528\u65bc\u5275\u5efa\u5305\u542b\u591a\u500b\u53ef\u9078\u9805\u7684\u53ef\u6372\u52d5\u529f\u80fd\u8868\u3002 \u5728\u6efe\u52d5\u6642\uff0c\u6efe\u8f2a\u4e2d\u7684\u9078\u9805\u6703\u81ea\u52d5\u66f4\u65b0\uff1b\u7576\u9078\u4e2d\u4e00\u500b\u9078\u9805\u6642\uff0c\u8a72\u9078\u9805\u6703\u7a81\u51fa\u986f\u793a\u3002"),(0,l.kt)("p",null,"\u901a\u904e\u9078\u64c7\u8981\u7528\u4f5c\u201c\u9078\u9805\u7bc4\u672c\u201d\u7684\u81ea\u8a02\u5bb9\u5668\uff0c\u5c07\u9078\u9805\u6dfb\u52a0\u5230\u6efe\u8f2a\u3002 \u201c\u9078\u9805\u7bc4\u672c\u201d\u7684\u6982\u5ff5\u662f\u4f7f\u7528\u81ea\u8a02\u5bb9\u5668\u4e2d\u7684\u5c0f\u90e8\u4ef6\u4f5c\u70ba\u6efe\u8f2a\u4e2d\u9078\u9805\u7684\u57fa\u790e\uff0c\u4e26\u5728\u57f7\u884c\u6642\u9593\u4f7f\u7528\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u66f4\u65b0\u9078\u9805\u4e2d\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,l.kt)("h3",k({},{id:"creating-the-scroll-wheel"}),"\u5275\u5efa\u6efe\u8f2a"),(0,l.kt)("p",null,"\u5728\u5275\u5efa\u6efe\u8f2a\u524d\uff0c\u522a\u9664\u87a2\u5e55\u4e0a\u5df2\u63d2\u5165\u7684\u81ea\u8a02\u5bb9\u5668\uff0c\u50c5\u7559\u4e0b\u9ed1\u8272\u65b9\u584a\u4f5c\u70ba\u80cc\u666f\u3002 \u5728\u201cContainers \u201d\u5340\u4e0b\u7684\u5c0f\u90e8\u4ef6\u529f\u80fd\u8868\u4e2d\u9078\u64c7\u201cScroll Wheel\u201d(1)\u3002 \u5275\u5efa\u4e00\u500b\u6efe\u8f2a\uff0c\u5c07\u4f4d\u7f6e\u5c6c\u6027\u8a2d\u7f6e\u70baX = 208\u3001Y = 45\u548cH = 390\uff0c\u4e26\u5c07\u540d\u7a31\u4fee\u6539\u70ba\u201cscrollWheel\u201d\u3002"),(0,l.kt)(a.Z,{points:[[280,65]],imageSource:"/img/tutorials/tutorial-04/insert-sw-4-17.webp",mdxType:"FigureWithPoints"},"\u63d2\u5165\u6efe\u8f2a\u4e26\u8a2d\u7f6e\u540d\u7a31\u548c\u4f4d\u7f6e\u5c6c\u6027"),(0,l.kt)("h3",k({},{id:"adding-items-to-the-scroll-wheel"}),"\u5c07\u9078\u9805\u6dfb\u52a0\u5230\u6efe\u8f2a"),(0,l.kt)("p",null,"\u4f7f\u7528\u6efe\u8f2a\u5c6c\u6027\u201cItem Template\u201d\u4e0b\u7684\u4e0b\u62c9\u6e05\u55ae\uff0c\u9078\u64c7\u7b2c1\u6b65\u4e2d\u5275\u5efa\u7684\u201cMenuElement\u201d\u4f5c\u70ba\u201c\u9078\u9805\u7bc4\u672c\u201d(1)\u3002 \u6efe\u8f2a\u4e2d\u7684\u9078\u9805\u6578\u4e5f\u5728\u201c\u9078\u9805\u7bc4\u672c\u201d\u4e0b\u8a2d\u7f6e\u3002 \u5c07\u5176\u8a2d\u7f6e\u70ba20\u9805\u3002 \u7531\u65bc\u6efe\u8f2a\u6703\u7a81\u51fa\u986f\u793a\u9078\u4e2d\u9805\uff0c\u56e0\u6b64\u901a\u904e\u8a2d\u7f6e\u5c6c\u6027\u201c\u6e05\u55ae\u5916\u89c0\u201d\u4e0b\u7684\u201c\u9078\u4e2d\u9805\u504f\u79fb\u91cf\u201d(2) \u4f86\u8a2d\u7f6e\u9078\u4e2d\u9805\u5728UI\u4e0a\u7684\u4f4d\u7f6e\u3002 \u6211\u5011\u5e0c\u671b\u9078\u4e2d\u9805\u4f4d\u65bc\u6efe\u8f2a\u7684\u4e2d\u9593\uff0c\u56e0\u6b64\u5c07\u201cSelected Item Offset\u201d\u8a2d\u7f6e\u70ba (390-70)/2 = 160\u3002"),(0,l.kt)(a.Z,{points:[[435,80],[435,130]],imageSource:"/img/tutorials/tutorial-04/add-cc-to-sw-4-17.webp",mdxType:"FigureWithPoints"},"\u5c07\u81ea\u8a02\u5bb9\u5668\u6dfb\u52a0\u5230\u6efe\u8f2a\u4e26\u8abf\u6574\u5176\u5c6c\u6027"),(0,l.kt)("p",null,"\u70ba\u4e86\u7a81\u51fa\u986f\u793a\u201cscrollWheel\u201d\u7684\u5340\u57df\uff0c\u4f7f\u7528\u7b2c1\u6b65\u4e2d\u4e0b\u8f09\u7684.zip\u6a94\u4e2d\u7684\u5169\u5f35\u5716\u50cfbackground.png\u548coverlay.png\uff0c\u4e26\u5c07\u5b83\u5011\u4f5c\u70ba\u5716\u50cf\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u5230\u61c9\u7528\u3002 \u5169\u5f35\u5716\u50cf\u662f\u80cc\u666f\uff0c\u7a81\u51fa\u986f\u793a\u201cscrollWheel\u201d\u7684\u5340\u57df\u548c\u4e00\u500b\u8986\u84cb\u5c64\uff0c\u5f8c\u8005\u6703\u5728\u79fb\u52d5\u5230\u201cscrollWheel\u201d\u7684\u908a\u7de3\u6642\u96b1\u85cf\u201cscrollWheel\u201d\u4e2d\u7684\u9078\u9805\u3002"),(0,l.kt)("p",null,"\u5716\u50cfbackground.png\u7684\u5ea7\u6a19\u70baX = 205\u548cY = 45\uff0c\u4f4d\u65bc\u201cscrollWheel\u201d\u5f8c\u65b9\uff0c\u56e0\u6b64\u5728\u80cc\u666f\u4e0a\u65b9\u7e6a\u88fd\u201cscrollWheel\u201d\u4e2d\u7684\u9078\u9805\u3002 overlay.png\u7684\u5ea7\u6a19\u70baX = 0\u548cY = 0\uff0c\u4f4d\u65bc\u201cscrollWheel\u201d\u4e0a\u65b9\uff0c\u9019\u610f\u5473\u8457\u5728overlay.png\u4e0b\u65b9\u7e6a\u88fd\u9078\u9805\uff0c\u4ee5\u4fbf\u96b1\u85cfoverlay.png\u4e0d\u900f\u660e\u90e8\u5206\u7684\u9078\u9805\u3002"),(0,l.kt)("p",null,"\u6309\u4e0bCTRL-B\u548cCTRL-F\u9375\u53ef\u4ee5\u524d\u5f8c\u79fb\u52d5\u201c\u5c0f\u90e8\u4ef6\u201d\u5217\u8868\u4e2d\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,l.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-04/graphics-added-4-17.webp",mdxType:"Figure"},"\u6dfb\u52a0\u5230\u6709\u6efe\u8f2a\u7684\u87a2\u5e55\u4e2d\u7684\u5716\u5f62"),(0,l.kt)("p",null,"\u6211\u5011\u53ea\u8abf\u6574\u4e86\u201cscrollWheel\u201d\u7684\u975c\u614b\u5c6c\u6027\uff0c\u5c1a\u672a\u70ba\u5176\u6dfb\u52a0\u908f\u8f2f\u3002 \u56e0\u6b64\uff0c\u904b\u884c\u61c9\u7528\u5c07\u5f97\u5230\u4e00\u500b\u53ef\u6372\u52d5\u529f\u80fd\u8868\uff0c\u5176\u4e2d\u5305\u542b\u768420\u500b\u9078\u9805\u5916\u89c0\u5168\u90e8\u76f8\u540c\u3002 \u5728\u4e0b\u4e00\u6b65\u4e2d\uff0c\u6211\u5011\u5c07\u7528\u7528\u6236\u7a0b\u5f0f\u78bc\u70ba\u201cscrollWheel\u201d\u6dfb\u52a0\u908f\u8f2f\uff0c\u4ee5\u4fbf\u5728\u57f7\u884c\u6642\u9593\u66f4\u65b0\u6efe\u8f2a\u4e2d\u7684\u9078\u9805\u3002"),(0,l.kt)("h2",k({},{id:"step-3-adding-user-code-to-scroll-wheel"}),"\u7b2c3\u6b65\uff1a\u5c07\u7528\u6236\u7a0b\u5f0f\u78bc\u6dfb\u52a0\u5230\u6efe\u8f2a"),(0,l.kt)("p",null,"\u6211\u5011\u5df2\u5728TouchGFX Designer\u4e2d\u5275\u5efa\u4e26\u914d\u7f6e\u4e86\u6efe\u8f2a\u201cscrollWheel\u201d\uff0c\u9019\u4e00\u6b65\u5c07\u901a\u904e\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u5275\u5efa\u908f\u8f2f\uff0c\u908f\u8f2f\u66f4\u65b0\u201cscrollWheel\u201d\u4e2d\u7684\u9078\u9805\uff0c\u4ee5\u4fbf\u57fa\u65bc\u6efe\u8f2a\u4e2d\u9078\u9805\u7684\u4f4d\u7f6e\u986f\u793a\u4e0d\u540c\u5716\u5f62\u3002 \u56e0\u6b64\uff0c\u9019\u4e00\u6b65\u5c07\u6574\u5408TouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u548c\u7528\u6236\u7a0b\u5f0f\u78bc\u3002 \u95dc\u65bc\u6574\u5408TouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u548c\u7528\u6236\u7a0b\u5f0f\u78bc\u7684\u8a73\u7d30\u8aaa\u660e\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("a",k({parentName:"p"},{href:"../development/ui-development/software-architecture/code-structure"}),"\u201c\u7a0b\u5f0f\u78bc\u7d50\u69cb\u201d"),"\u9801\u9762\u4e0a\u627e\u5230\u3002"),(0,l.kt)("h3",k({},{id:"change-image-and-text-in-menuelement"}),"\u66f4\u6539MenuElement\u4e2d\u7684\u5716\u50cf\u548c\u6587\u5b57"),(0,l.kt)("p",null,"\u7531\u65bc\u6efe\u8f2a\u4e2d\u7684\u9078\u9805\u57fa\u65bc\u7b2c1\u6b65\u4e2d\u5275\u5efa\u7684\u5ba2\u88fd\u5bb9\u5668\u201cMenuElement\u201d\uff0c\u56e0\u6b64\u9700\u5c07\u7528\u65bc\u66f4\u6539\u5716\u793a\u548c\u66f4\u65b0\u842c\u7528\u5b57\u5143\u7684\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u6dfb\u52a0\u5230\u201cMenuElement\u201d\u3002 \u5982\u679c\u5ba2\u88fd\u5bb9\u5668\u662f\u5728TouchGFX Designer\u4e2d\u5275\u5efa\u7684\uff0c\u5c07\u751f\u6210\u8207\u5ba2\u88fd\u5bb9\u5668\u540c\u540d\u7684.hpp\u548c.cpp\u6587\u4ef6\u3002 \u61c9\u5728\u9019\u4e9b\u6a94\u6848\u4e2d\u6574\u5408\u7528\u6236\u7a0b\u5f0f\u78bc\u3002 \u61c9\u7528\u7bc4\u4f8b\u4e2d\u70ba\u201cMenuElement\u201d\u751f\u6210\u7684\u6587\u4ef6\u7684\u4f4d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MyApplication2\\gui\\include\\gui\\containers\\MenuElement.hpp")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MyApplication2\\gui\\src\\containers\\MenuElement.cpp")),(0,l.kt)("p",null,"\u901a\u904e\u5c07\u51fd\u6578",(0,l.kt)("inlineCode",{parentName:"p"},"setNumber(int no)"),"\u6dfb\u52a0\u5230\u201cMenuElement\u201d\uff0c\u53ef\u4ee5\u66f4\u6539\u201cscrollWheel\u201d\u4e2d\u9078\u9805\u7684\u6587\u5b57\u548c\u5716\u793a\u3002 \u8a72\u51fd\u6578\u4f7f\u7528\u8b8a\u6578\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"no"),"\u4f86\u6c7a\u5b9a\u61c9\u986f\u793a\u54ea\u500b\u5716\u793a\u548c\u5716\u50cf\u5c0f\u90e8\u4ef6\uff0c\u4e26\u5c07TextArea\u5c0f\u90e8\u4ef6\u4e2d\u7684\u842c\u7528\u5b57\u5143\u66f4\u6539\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"no"),"\u503c\u3002"),(0,l.kt)("p",null,"\u7531\u65bc\u6211\u5011\u5728TextArea\u4e2d\u4f7f\u7528\u4e86\u6578\u5b570-9\uff0c\u56e0\u6b64\u9084\u9700\u8981\u5c07\u7bc4\u570d\u201c0-9\u201d\u6dfb\u52a0\u5230\u201c\u9810\u8a2d\u201d\u5b57\u9ad4\u6392\u5370\u7684\u201c\u842c\u7528\u5b57\u5143\u7bc4\u570d\u201d\u3002"),(0,l.kt)("p",null,"\u6309\u4e0bF4\u9375\u7372\u53d6TouchGFX Designer\u751f\u6210\u7684\u6a94\u6848\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setNumber(int no)"),"\u7684\u5ba3\u544a\u548c\u5be6\u73fe\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp")," \u4e2d\u5b8c\u6210\u7684\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002"),(0,l.kt)(u.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/include/gui/containers/MenuElement.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{5,15-42}","{5,15-42}":!0}),"#ifndef MENUELEMENT_HPP\n#define MENUELEMENT_HPP\n\n#include <gui_generated/containers/MenuElementBase.hpp>\n#include <BitmapDatabase.hpp>\n\nclass MenuElement : public MenuElementBase\n{\npublic:\n    MenuElement();\n    virtual ~MenuElement() {}\n\n    virtual void initialize();\n\n    void setNumber(int no)\n    {\n        Unicode::itoa(no, textBuffer, TEXT_SIZE, 10);\n        switch (no % 7)\n        {\n        case 0:\n        icon.setBitmap(Bitmap(BITMAP_ICON00_ID));\n            break;\n        case 1:\n        icon.setBitmap(Bitmap(BITMAP_ICON01_ID));\n            break;\n        case 2:\n        icon.setBitmap(Bitmap(BITMAP_ICON02_ID));\n            break;\n        case 3:\n        icon.setBitmap(Bitmap(BITMAP_ICON03_ID));\n            break;\n        case 4:\n        icon.setBitmap(Bitmap(BITMAP_ICON04_ID));\n            break;\n        case 5:\n        icon.setBitmap(Bitmap(BITMAP_ICON05_ID));\n            break;\n        case 6:\n        icon.setBitmap(Bitmap(BITMAP_ICON06_ID));\n            break;\n        }\n    }\nprotected:\n};\n\n#endif // MENUELEMENT_HPP\n\n")),(0,l.kt)("p",null,"\u7a0b\u5f0f\u78bc\u4f7f\u7528BITMAP\u5b9a\u7fa9\u4f86\u53c3\u7167\u5c08\u6848\u4e2d\u7684\u5716\u50cf\u3002 \u70ba\u4e86\u80fd\u5920\u4f7f\u7528\u9019\u4e9b\u5716\u50cf\uff0c\u5fc5\u9808\u50cf\u4e4b\u524d\u4e00\u6a23\u5305\u542b\u6a94\u6848\u201cBitmapDatabase.hpp\u201d\u3002"),(0,l.kt)("p",null,"\u5728\u6dfb\u52a0\u7a0b\u5f0f\u78bc\u66f4\u65b0MenuElement\u7684\u5167\u5bb9\u5f8c\uff0c\u4e0b\u4e00\u4ef6\u8981\u505a\u7684\u4e8b\u662f\u6dfb\u52a0\u7528\u65bc\u66f4\u65b0\u6efe\u8f2a\u4e2d\u9078\u9805\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,l.kt)("h3",k({},{id:"update-the-items-in-the-scroll-wheel"}),"\u66f4\u65b0\u6efe\u8f2a\u4e2d\u7684\u9078\u9805"),(0,l.kt)("p",null,"\u5728\u5275\u5efa\u6efe\u8f2a\u6642\uff0cTouchGFX Designer\u5728Screen\u57fa\u985e\u4e2d\u751f\u6210\u865b\u64ec\u51fd\u6578\uff0c\u6bcf\u7576\u6efe\u8f2a\u4e2d\u7684\u65b0\u9078\u9805\u8b8a\u5f97\u53ef\u898b\u6642\u90fd\u6703\u547c\u53eb\u6b64\u51fd\u6578\u3002 \u5728\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u4e2d\u8986\u5beb\u6b64\u51fd\u6578\u5c07\u4f7f\u7a0b\u5f0f\u78bc\u80fd\u5920\u8207\u6efe\u8f2a\u4e2d\u7684\u9078\u9805\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,"\u51fd\u6578\u540d\u7a31\u662f\u6efe\u8f2a\u540d\u7a31 + UpdatedItem\u3002 \u5c31\u672c\u6559\u7a0b\u800c\u8a00\uff0c\u51fd\u6578\u540d\u7a31\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)"),"\u3002"),(0,l.kt)("p",null,"\u53c3\u6578",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\u662f\u7d22\u5f15\u503c\uff0c\u6307\u793a\u7576\u524d\u6b63\u5728\u66f4\u65b0\u7684\u9078\u9805\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u9078\u9805"),"\u662f\u5c0d\u6efe\u8f2a\u4e2d\u7576\u524d\u53ef\u898b\u7684MenuElement\u5be6\u4f8b\u7684\u5f15\u7528\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\u6307\u793a\u6b63\u5728\u66f4\u65b0\u7684\u9078\u9805\uff0c\u70ba\u9078\u9805\u547c\u53eb\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"setNumber()"),"\u5c07\u57fa\u65bc",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\u7684\u503c\u4fee\u6539\u6b63\u5728\u66f4\u65b0\u7684\u9078\u9805\u7684\u5167\u5bb9\u3002 \u4e0b\u9762\u662f\u7528\u65bc\u66f4\u65b0\u6efe\u8f2a\u9078\u9805\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,l.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{14-17}","{14-17}":!0}),"#ifndef SCREEN1VIEW_HPP\n#define SCREEN1VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)\n    {\n        item.setNumber(itemIndex);\n    }\nprotected:\n};\n\n#endif // SCREEN1VIEW_HPP\n")),(0,l.kt)("p",null,"\u73fe\u5728\u904b\u884c\u61c9\u7528\u7684\u6a21\u64ec\u5668\uff0c\u7d50\u679c\u986f\u793a\u9078\u9805\u7684\u6587\u5b57\u5305\u542b\u5176\u7d22\u5f15\u503c\uff0c\u4e26\u4e14\u5716\u793a\u96a8\u986f\u793a\u7684\u9078\u9805\u800c\u8b8a\u5316\u3002 \u4e0b\u5716\u986f\u793a\u4e86\u7528\u5be6\u73fe\u7684\u7a0b\u5f0f\u78bc\u904b\u884c\u6a21\u64ec\u5668\u7684\u7bc4\u4f8b\u3002"),(0,l.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-04/running-sim.webp",mdxType:"Figure"},"\u904b\u884c\u6a21\u64ec\u5668"),(0,l.kt)("h2",k({},{id:"step-4-adding-custom-behavior-to-scroll-wheel"}),"\u7b2c4\u6b65\uff1a\u5c07\u81ea\u8a02\u884c\u70ba\u6dfb\u52a0\u5230\u6efe\u8f2a"),(0,l.kt)("p",null,"\u5728\u6559\u7a0b4\u7684\u6700\u5f8c\u4e00\u6b65\u4e2d\uff0c\u6211\u5011\u5c07\u70ba\u6efe\u8f2a\u6dfb\u52a0\u81ea\u8a02\u884c\u70ba\uff0c\u4f7f\u5176\u5728\u6efe\u52d5\u9078\u9805\u6642\u4ee5\u74b0\u5f62\u6a21\u5f0f\uff0c\u5373\u985e\u4f3c\u65bc\u9336\u76e4\u7684\u6a21\u5f0f\u79fb\u52d5\u3002"),(0,l.kt)("h3",k({},{id:"add-custom-behavior-to-menuelement"}),"\u5c07\u81ea\u8a02\u884c\u70ba\u6dfb\u52a0\u5230MenuElement"),(0,l.kt)("p",null,"\u8b93\u6efe\u8f2a\u4ee5\u9336\u76e4\u6a21\u5f0f\u79fb\u52d5\uff0c\u662f\u901a\u904e\u79fb\u52d5\u6efe\u8f2a\u4e2d\u6bcf\u500b\u53ef\u898b\u9078\u9805\u7684\u5716\u50cf\u548c\u6587\u5b57\u5c0f\u90e8\u4ef6\u7684\u6c34\u5e73\u4f4d\u7f6e\u4f86\u5be6\u73fe\u7684\u3002 \u70ba\u6b64\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),"\u4e2d\u91cd\u5beb\u201cMenuElement\u201d\u7684\u51fd\u6578",(0,l.kt)("inlineCode",{parentName:"p"},"setY()"),"\u3002 \u6bcf\u6b21\u6cbf\u5782\u76f4\u65b9\u5411\u79fb\u52d5\u81ea\u8a02\u5bb9\u5668\u6642\uff0c\u90fd\u6703\u547c\u53eb\u5b83\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"setY()"),"\u51fd\u6578\uff0c\u8a72\u51fd\u6578\u7528\u65bc\u5728\u65b0\u4f4d\u7f6e\u91cd\u7e6a\u81ea\u8a02\u5bb9\u5668\u3002 \u901a\u904e\u91cd\u5beb",(0,l.kt)("inlineCode",{parentName:"p"},"setY()"),"\uff0c\u5728\u6bcf\u6b21\u6efe\u52d5\u6efe\u8f2a\u6642\uff0c\u9084\u80fd\u5920\u5728\u5bb9\u5668\u5167\u90e8\u6c34\u5e73\u79fb\u52d5\u5716\u50cf\u548c\u6587\u5b57\u5c0f\u90e8\u4ef6\u3002 \u4e0b\u5716\u986f\u793a\u4e86\u5982\u4f55\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),"\u4e2d\u5be6\u73fe\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"setY()"),"\u51fd\u6578\u4ee5\u53ca\u79fb\u52d5\u5169\u500b\u5c0f\u90e8\u4ef6\u3002 \u8acb\u6ce8\u610f\uff0c\u9700\u5c07",(0,l.kt)("inlineCode",{parentName:"p"},"math.h"),"\u5305\u542b\u5728\u5167\u3002"),(0,l.kt)(u.Z,{mdxType:"CodeHeader"},"MenuElement.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{6,16-39}","{6,16-39}":!0}),"#ifndef MENUELEMENT_HPP\n#define MENUELEMENT_HPP\n\n#include <gui_generated/containers/MenuElementBase.hpp>\n#include <BitmapDatabase.hpp>\n#include <math.h>\n\nclass MenuElement : public MenuElementBase\n{\npublic:\n    MenuElement();\n    virtual ~MenuElement() {}\n\n    virtual void initialize();\n\n    //Adjusts the position of the text and the icon, based in the calculated offset(x)\n    void offset(int16_t x)\n    {\n        icon.setX(30 + x);\n        text.setX(80 + x);\n    }\n\n    //The new declaration and implementation of the setY() function\n    virtual void setY(int16_t y)\n    {\n        //set Y as normal\n        MenuElementBase::setY(y);\n\n        const int circleRadius = 250;\n\n        //center around middle of background\n        y = y + getHeight() / 2 - 390 /2;\n\n        //calculate x\n        float x_f = circleRadius - sqrtf((float)((circleRadius * circleRadius) - (y * y)));\n        int16_t x = (int16_t)(x_f + 0.5f);\n\n        offset(x);\n    }\n\n    ...\n")),(0,l.kt)("p",null,"\u5be6\u73fe\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"setY()"),"\u51fd\u6578\u5f8c\uff0c\u904b\u884c\u6a21\u64ec\u5668\uff0c\u7d50\u679c\u986f\u793a\u6efe\u8f2a\u4ee5\u9336\u76e4\u6a21\u5f0f\uff08\u8207\u8986\u84cb\u5c64\u7684\u66f2\u7dda\u5c0d\u9f4a\uff09\u79fb\u52d5\u3002"),(0,l.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-04/running-sim-02.webp",mdxType:"Figure"},"\u904b\u884c\u6a21\u64ec\u5668"),(0,l.kt)("p",null,"\u6559\u7a0b4\u5230\u6b64\u7d50\u675f\u3002"),(0,l.kt)(o.Z,{mdxType:"FurtherReading"},"\u70ba\u4e86\u5b78\u7fd2\u95dc\u65bc\u6559\u7a0b\u4e2d\u4f7f\u7528\u7684\u6982\u5ff5\u7684\u66f4\u591a\u77e5\u8b58\uff0c\u4e0b\u9762\u7684\u7ae0\u7bc0\u5c07\u8a0e\u8ad6\u60a8\u5df2\u4f7f\u7528\u7684\u4e00\u4e9b\u6982\u5ff5\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)(i.Z,{to:"../development/ui-development/ui-components/containers/scroll-wheel",mdxType:"Link"},"\u201c\u6efe\u8f2a\u201d\u9801\u9762"),"\u63cf\u8ff0\u4e86\u5982\u4f55\u5728TouchGFX Designer\u4e2d\u5275\u5efa\u548c\u914d\u7f6e\u6efe\u8f2a\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u4e2d\u5275\u5efa\u908f\u8f2f\u3002"),(0,l.kt)("li",null,(0,l.kt)(i.Z,{to:"../development/ui-development/touchgfx-engine-features/custom-containers",mdxType:"Link"},"\u201c\u81ea\u8a02\u5bb9\u5668\u201d\u9801\u9762"),"\u8a0e\u8ad6\u4e86\u81ea\u8a02\u5bb9\u5668\u7684\u6982\u5ff5\u548c\u7528\u6cd5\u3002"))))}x.isMDXComponent=!0},38197:function(e,t,n){t.Z=n.p+"assets/files/touchgfx-tutorial-04-fea43cce73bad37b8df3f2deaa9f7bd1.zip"}}]);