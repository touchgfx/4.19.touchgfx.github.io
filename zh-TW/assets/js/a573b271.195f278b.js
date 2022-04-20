"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4131],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),g=i,m=s["".concat(c,".").concat(g)]||s[g]||p[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=o},22425:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=o},69306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return R},default:function(){return S},frontMatter:function(){return T},metadata:function(){return E},toc:function(){return O}});var r=n(3905),i=n(44035),a=n(70814),o=n(37793),l=n(67294),c=n(88678);const d=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class u extends l.Component{render(){return l.createElement(c.Z,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:d},this.props.children)}}var p=u,s=n(29415),g=n(31217),m=n(39130),h=n(22425),f=Object.defineProperty,v=Object.defineProperties,k=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&C(e,n,t[n]);if(x)for(var n of x(t))y.call(t,n)&&C(e,n,t[n]);return e};const T={id:"custom-widgets",title:"\u81ea\u8a02\u5c0f\u90e8\u4ef6"},R=void 0,E={unversionedId:"development/ui-development/touchgfx-engine-features/custom-widgets",id:"development/ui-development/touchgfx-engine-features/custom-widgets",title:"\u81ea\u8a02\u5c0f\u90e8\u4ef6",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-widgets",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-widgets",tags:[],version:"current",frontMatter:{id:"custom-widgets",title:"\u81ea\u8a02\u5c0f\u90e8\u4ef6"},sidebar:"docs",previous:{title:"\u5feb\u53d6\u9ede\u9663\u5716",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"},next:{title:"Canvas Widgets",permalink:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"}},N={},O=[{value:"\u81ea\u8a02\u5c0f\u90e8\u4ef6\u6cd5\u7684\u4f7f\u7528\u5834\u5408",id:"when-to-use-the-custom-widget-approach",level:2},{value:"TouchGFX Designer\u4e2d",id:"in-touchgfx-designer",level:2},{value:"\u7a0b\u5f0f\u78bc\u4e2d",id:"in-code",level:2},{value:"\u60a8\u81ea\u5df1\u7684\u81ea\u8a02\u5c0f\u90e8\u4ef6",id:"your-own-custom-widget",level:3},{value:"\u90e8\u5206\u7e6a\u88fd",id:"partial-drawing",level:3},{value:"\u5be6\u5fc3\u5340\u57df",id:"solid-area",level:3},{value:"\u7bc4\u4f8b\u539f\u59cb\u7a0b\u5f0f\u78bc",id:"example-source-code",level:3},{value:"\u4fee\u6539\u6a19\u6e96\u5c0f\u90e8\u4ef6/\u5bb9\u5668",id:"modifying-standard-widgetscontainers",level:2}],Z={toc:O};function S(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var r in e)w.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x)for(var r of x(e))t.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},Z),c),v(t,k({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u5275\u5efa\u61c9\u7528\u6642\uff0c\u60a8\u53ef\u80fd\u9700\u8981TouchGFX\u4e2d\u672a\u5305\u542b\u7684\u5c0f\u90e8\u4ef6\u3002 TouchGFX\u63d0\u4f9b\u4e86\u5e7e\u7a2e\u53ef\u4ee5\u7528\u4f86\u5275\u5efa\u5716\u5f62\u5143\u7d20\u7684\u65b9\u5f0f\u3002 \u6700\u7c21\u55ae\u7684\u65b9\u5f0f\u662f\u4f7f\u7528",(0,r.kt)("a",b({parentName:"p"},{href:"custom-containers"}),"\u81ea\u8a02\u5bb9\u5668\u6cd5"),"\uff0c\u60a8\u53ef\u4ee5\u5c07\u73fe\u6709\u7684\u5c0f\u90e8\u4ef6\u7d44\u5408\u6210\u60a8\u81ea\u5df1\u7684\u5c0f\u90e8\u4ef6\u3002 \u4f46\u662f\uff0c\u672c\u6587\u5c07\u4ecb\u7d39\u4e00\u7a2e\u66f4\u597d\u7684\u65b9\u6cd5\uff0c\u60a8\u53ef\u4ee5\u7528\u5b83\u771f\u6b63\u5730\u5275\u5efa\u4e00\u500b\u53ef\u5168\u9762\u63a7\u5236\u5f71\u50cf\u7de9\u885d\u7684\u5c0f\u90e8\u4ef6\uff0c\u5f9e\u800c\u80fd\u5920\u7cbe\u78ba\u5730\u7e6a\u88fd\u60a8\u60f3\u8981\u7684\u5167\u5bb9\u3002"),(0,r.kt)("h2",b({},{id:"when-to-use-the-custom-widget-approach"}),"\u81ea\u8a02\u5c0f\u90e8\u4ef6\u6cd5\u7684\u4f7f\u7528\u5834\u5408"),(0,r.kt)("p",null,"\u5275\u5efa\u81ea\u8a02\u5c0f\u90e8\u4ef6\u4e0d\u662f\u5275\u5efa\u5c0f\u90e8\u4ef6\u7684\u6700\u5178\u578b\u65b9\u6cd5\u3002 \u5982\u679c\u7b26\u5408\u60a8\u7684\u9700\u6c42\uff0c\u6700\u597d\u9078\u64c7\u81ea\u8a02\u5bb9\u5668\u6cd5\uff0c\u4f46\u6709\u6642\u6b64\u6cd5\u4e26\u4e0d\u5920\u7528\u3002 \u7576\u60a8\u9700\u8981\u5168\u9762\u63a7\u5236\u5f71\u50cf\u7de9\u885d\u6642\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u81ea\u8a02\u5c0f\u90e8\u4ef6\u6cd5\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5e7e\u500b\u53ef\u4ee5\u4f7f\u7528\u81ea\u8a02\u5c0f\u90e8\u4ef6\u6cd5\u5275\u5efa\u7684\u5c0f\u90e8\u4ef6\u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8910\u8272\u6ffe\u93e1"),(0,r.kt)("li",{parentName:"ul"},"\u66fc\u5fb7\u52c3\u7f85\u5206\u5f62\u5c0f\u90e8\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u986f\u793a\u6a94\u4e2d\u8cc7\u6599\u7684\u5c0f\u90e8\u4ef6\uff0c\u5982gif\u52d5\u756b\u3002")),(0,r.kt)("h2",b({},{id:"in-touchgfx-designer"}),"TouchGFX Designer\u4e2d"),(0,r.kt)("p",null,"TouchGFX Designer\u76ee\u524d\u4e0d\u652f\u63f4\u81ea\u8a02\u5c0f\u90e8\u4ef6\u7684\u5275\u5efa\u3002 \u56e0\u6b64\uff0c\u60a8\u5c07\u9700\u8981\u624b\u52d5\u5beb\u5165\u81ea\u8a02\u5c0f\u90e8\u4ef6\u7684\u7a0b\u5f0f\u78bc\uff08\u8acb\u53c3\u8003\u672c\u6587\u7684\u5269\u9918\u90e8\u5206\u4ee5\u77ad\u89e3\u505a\u6cd5\uff09\uff0c\u7136\u5f8c\u5728\u8996\u5716\u7684\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u90e8\u5206\u63d2\u5165\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("h2",b({},{id:"in-code"}),"\u7a0b\u5f0f\u78bc\u4e2d"),(0,r.kt)("p",null,"\u901a\u904e\u64f4\u5c55",(0,r.kt)("inlineCode",{parentName:"p"},"\u5c0f\u90e8\u4ef6"),"\u985e\u5275\u5efa\u81ea\u5df1\u7684\u81ea\u8a02\u5c0f\u90e8\u4ef6\u3002 \u9019\u6a23\u505a\u6703\u52a0\u5927\u7528\u6236\u7684\u5de5\u4f5c\u91cf\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5168\u9762\u63a7\u5236\u5c0f\u90e8\u4ef6\u7e6a\u88fd\u7684\u6240\u6709\u50cf\u7d20\u3002 \u60a8\u7684\u81ea\u8a02\u5c0f\u90e8\u4ef6\u4e0d\u4e00\u5b9a\u8981\u5229\u7528\u4efb\u4f55\u73fe\u6709\u5c0f\u90e8\u4ef6\uff0c\u800c\u662f\u53ef\u4ee5\u901a\u904e\u6307\u5b9a\u50cf\u7d20\u984f\u8272\u4f86\u5b9a\u7fa9\u61c9\u5982\u4f55\u7e6a\u88fd\u3002 \u81ea\u8a02\u5c0f\u90e8\u4ef6\u6cd5\u7684\u5b58\u5132\u7a7a\u9593\u5360\u7528\u91cf\u901a\u5e38\u8f03\u5c0f\uff0c\u9019\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u975e\u5e38\u91cd\u8981\u3002"),(0,r.kt)("p",null,"\u81ea\u8a02\u5c0f\u90e8\u4ef6\u7684\u4e00\u500b\u7bc4\u4f8b\u662f\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\u3002 \u9019\u500b\u7279\u6b8a\u7684\u5c0f\u90e8\u4ef6\u662f\u500b\u5f88\u597d\u7684\u4f8b\u5b50\uff0c\u6211\u5011\u5c07\u5728\u4e0b\u9762\u4e00\u7bc0\u4e2d\u8a73\u7d30\u4ecb\u7d39\u5982\u4f55\u5275\u5efa\u5b83\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\u662f\u9ed1\u767d\u50cf\u7d20\u7684NxN\u77e9\u9663\u3002 \u5c0f\u90e8\u4ef6\u7684\u5927\u5c0f\u548c\u6bcf\u500b\u50cf\u7d20\u7684\u984f\u8272\u5c07\u5728\u57f7\u884c\u6642\u9593\u78ba\u5b9a\uff0c\u4e26\u53d6\u6c7a\u65bc\u4e8c\u7dad\u78bc\u8cc7\u6599\u7269\u4ef6\u4e2d\u7684\u8cc7\u8a0a\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5169\u500b\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\u53ef\u80fd\u5916\u89c0\u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-examples.png",noShadow:!0,mdxType:"Figure"},"\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\u7bc4\u4f8b"),(0,r.kt)(a.Z,{mdxType:"Caution"},"\u53ef\u4ee5\u7528\u81ea\u8a02\u5bb9\u5668\u6cd5\u5275\u5efa\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\uff0c\u4f7f\u5bb9\u5668\u6709n*n\u500b\u9ed1\u6216\u767d\u65b9\u584a\u4f5c\u70ba\u5b50\u5bb9\u5668\u3002 \u4f46\u662f\uff0c\u9019\u6703\u4f54\u7528\u8a31\u591a\u5b58\u5132\u7a7a\u9593\uff0c\u4e26\u4e14\u5f88\u53ef\u80fd\u4e0d\u5920\u9ad8\u6548\u6216\u9748\u6d3b\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5275\u5efa\u6a19\u6e96 ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"touchgfx::Button")," \uff08\u96a8\u6846\u67b6\u63d0\u4f9b\uff09\u4f5c\u70ba\u81ea\u8a02\u5c0f\u90e8\u4ef6\uff0c\u800c\u4e0d\u662f\u81ea\u8a02\u5bb9\u5668\u3002 \u9019\u6a23\u53ef\u4ee5\u7bc0\u7701\u87a2\u5e55\u4e0a\u6bcf\u500b\u6309\u9215\u7684\u5b58\u5132\u7a7a\u9593\u3002"),(0,r.kt)("h3",b({},{id:"your-own-custom-widget"}),"\u60a8\u81ea\u5df1\u7684\u81ea\u8a02\u5c0f\u90e8\u4ef6"),(0,r.kt)("p",null,"\u70ba\u4e86\u5275\u5efa\u64f4\u5c55",(0,r.kt)("inlineCode",{parentName:"p"},"\u5c0f\u90e8\u4ef6"),"\u985e\u7684\u5c0f\u90e8\u4ef6\uff0c\u60a8\u9700\u8981\u5ba3\u544a\u5169\u9ede\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u90e8\u4ef6\u7684\u7e6a\u88fd\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u90e8\u4ef6\u7684\u5be6\u5fc3\u90e8\u5206")),(0,r.kt)("h3",b({},{id:"partial-drawing"}),"\u90e8\u5206\u7e6a\u88fd"),(0,r.kt)("p",null,"\u4efb\u4f55\u5c0f\u90e8\u4ef6\u548c\u81ea\u8a02\u5c0f\u90e8\u4ef6\u90fd\u9700\u8981\u652f\u63f4\u90e8\u5206\u7e6a\u88fd\u3002 \u9019\u610f\u5473\u8457\u5c0f\u90e8\u4ef6\u61c9\u80fd\u53ea\u7e6a\u88fd\u81ea\u8eab\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\u7684\u539f\u56e0\u6709\u5169\u9ede\u3002 \u901a\u5e38\u4e0d\u4e00\u5b9a\u8981\u91cd\u65b0\u7e6a\u88fd\u6574\u500b\u87a2\u5e55\uff0c\u800c\u662f\u53ea\u9700\u7e6a\u88fd\u4e00\u90e8\u5206\u3002 TouchGFX\u7684\u6f14\u7b97\u6cd5\u53ef\u4ee5\u5c07\u5168\u5c4f\u7e6a\u88fd\u5206\u5272\u6210\u591a\u500b\u90e8\u5206\u7e6a\u88fd\uff0c\u4ee5\u4f7f\u7e6a\u88fd\u50cf\u7d20\u7684\u7e3d\u6578\u6700\u5c0f\u5316\u3002 \u7136\u5f8c\uff0c\u87a2\u5e55\u7684\u90e8\u5206\u7e6a\u88fd\u53ef\u80fd\u8981\u6c42\u5c0f\u90e8\u4ef6\u53ea\u7e6a\u88fd\u81ea\u8eab\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\u9700\u80fd\u5920\u652f\u6301\u53ea\u7e6a\u88fd\u81ea\u8eab\u7684highlighted \u90e8\u5206\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.png",noShadow:!0,mdxType:"Figure"},"\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\u90e8\u5206\u7e6a\u88fd"),(0,r.kt)("p",null,"\u5728\u7a0b\u5f0f\u78bc\u4e2d\u5be6\u73fe\u9019\u4e00\u9ede\u7684\u65b9\u6cd5\u662f\u91cd\u5beb",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual void draw(const touchgfx::Rect& invalidatedArea) const\n{\n    //run through the pixels of the invalidated area\n    //draw a black pixel if the qr data object has a value at this position\n    //draw a white pixel otherwise\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"invalidatedArea"),"\u662f\u5c0f\u90e8\u4ef6\u4e2d\u9700\u8981\u66f4\u65b0\u7684\u90a3\u90e8\u5206\u3002 \u5728\u6211\u5011\u7684\u4e8c\u7dad\u78bc\u7bc4\u4f8b\u4e2d\uff0c\u7121\u6548\u5340\u57df\u662fhighlighted \u5340\u3002 \u8a72\u5340\u57df\u8868\u793a\u70ba\u76f8\u5c0d\u4e8e\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u7684\u5ea7\u6a19\u3002"),(0,r.kt)(a.Z,{mdxType:"Caution"},"\u5c0f\u90e8\u4ef6\u7684\u8cac\u4efb\u662f\u5728\u7121\u6548\u5340\u57df\u5167\u7e6a\u88fd\u3002 \u5982\u679c\u5728\u7121\u6548\u5340\u57df\u5916\u7e6a\u88fd\uff0c\u87a2\u5e55\u7684\u884c\u70ba\u5c07\u6703\u51fa\u73fe\u932f\u8aa4\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u7e6a\u88fd ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"\u65b9\u6cd5")," \u662f ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"const")," \uff0c\u56e0\u70ba\u6700\u512a\u7e6a\u88fd\u6f14\u7b97\u6cd5\u53ef\u4ee5\u5c07\u5c0f\u90e8\u4ef6\u7684\u7e6a\u88fd\u5206\u5272\u6210\u591a\u500b\u547c\u53eb\u9032\u884c\u7e6a\u88fd\u3002 \u7e6a\u88fd ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"const")," \u78ba\u4fdd\u5c0f\u90e8\u4ef6\u5728\u591a\u6b21\u7e6a\u88fd\u57f7\u884c\u4e4b\u9593\u4e0d\u767c\u751f ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"\u65b9\u6cd5")," \u66f4\u65b0\u7b49\u3002"),(0,r.kt)("h3",b({},{id:"solid-area"}),"\u5be6\u5fc3\u5340\u57df"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5c0f\u90e8\u4ef6\u9700\u80fd\u5920\u5831\u544a\u81ea\u8eab\u591a\u5927\u4e00\u90e8\u5206\u662f\u5be6\u5fc3\u7684\u3002 \u5be6\u5fc3\u610f\u5473\u8457\u60a8\u4e0d\u80fd\u5728\u87a2\u5e55\u4e0a\u770b\u5230\u5b83\u5f8c\u65b9\u7684\u5167\u5bb9\u3002 \u4f8b\u5982\uff0c\u6a19\u6e96\u7d05\u8272\u65b9\u584a\u662f\u5b8c\u5168\u5be6\u5fc3\u7684\uff0c\u800c\u4e00\u5e45alpha \u503c\u70ba50%\u7684\u5716\u50cf\u5247\u5b8c\u5168\u975e\u5be6\u5fc3\uff1b\u60a8\u53ef\u4ee5\u770b\u5230\u5b83\u5f8c\u65b9\u7684\u4e00\u5207\u3002"),(0,r.kt)("p",null,"\u5be6\u5fc3\u5c0f\u90e8\u4ef6\u80fd\u4f7fTouchGFX\u52a0\u5feb\u7e6a\u88fd\u9032\u5ea6\u3002 \u7531\u65bc\u6211\u5011\u7121\u9700\u5728\u5be6\u5fc3\u5c0f\u90e8\u4ef6\u4e0b\u65b9\u7e6a\u88fd\u5c0f\u90e8\u4ef6\uff0c\u56e0\u6b64\u8981\u7e6a\u88fd\u7684\u50cf\u7d20\u8f03\u5c11\u3002"),(0,r.kt)("p",null,"\u70ba\u4e86\u5831\u544a\u7a0b\u5f0f\u78bc\u4e2d\u7684\u5be6\u5fc3\u5340\u57df\uff0c\u91cd\u5beb",(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const;\n")),(0,r.kt)("p",null,"\u5f97\u5230\u7684\u4e8c\u7dad\u78bc\u5c07\u662f\u5b8c\u5168\u5be6\u5fc3\u7684\u3002 \u60a8\u5c07\u4e0d\u80fd\u770b\u5230\u9ed1\u767d\u50cf\u7d20\u5f8c\u7684\u4efb\u4f55\u5167\u5bb9\u3002 \u56e0\u6b64\uff0c\u6211\u5011\u8b93\u8a72\u65b9\u6cd5\u8fd4\u56de\u4e00\u500b\u77e9\u5f62\uff0c\u5176\u5927\u5c0f\u7b49\u65bc\u5c0f\u90e8\u4ef6\u7684\u5b8c\u6574\u5c3a\u5bf8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n")),(0,r.kt)("h3",b({},{id:"example-source-code"}),"\u7bc4\u4f8b\u539f\u59cb\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u6211\u5011\u6700\u7d42\u5f97\u5230\u4e00\u500b\u61c9\u7528\u548c\u4e00\u500b\u9019\u6a23\u7684\u5c0f\u90e8\u4ef6 - \u5177\u9ad4\u53d6\u6c7a\u65bc\u63d0\u4f9b\u7684\u8cc7\u6599\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-screenshot.png",noShadow:!0,mdxType:"Figure"},"\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\u87a2\u5e55\u622a\u5716"),(0,r.kt)("p",null,"\u5c0f\u90e8\u4ef6\u7684\u5b8c\u6574\u7a0b\u5f0f\u78bc\u5982\u4e0b\uff1a"),(0,r.kt)(h.Z,{mdxType:"CodeHeader"},"gui/include/gui/common/QRCodeWidget.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"\n#ifndef QR_CODE_WIDGET_HPP\n#define QR_CODE_WIDGET_HPP\n\n#include <touchgfx/widgets/Widget.hpp>\n\nclass QRCodeWidget : public touchgfx::Widget\n{\npublic:\n    QRCodeWidget();\n\n    virtual void draw(const touchgfx::Rect& invalidatedArea) const;\n    virtual touchgfx::Rect getSolidRect() const;\n\n    void setQRCodeData(QRCodeData* data);\n    void setScale(uint8_t s);\n\nprivate:\n    void updateSize();\n\n    QRCodeData* data;\n    uint8_t scale;\n};\n#endif\n")),(0,r.kt)("p",null,"\u5728\u6a19\u982d\u6a94\u4e2d\uff0c\u5c07\u5c0f\u90e8\u4ef6\u5b9a\u7fa9\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx::Widget"),"\u985e\u7684\u64f4\u5c55\u3002 \u91cd\u5beb",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u65b9\u6cd5\uff0c\u4ee5\u4fbf\u5b9a\u7fa9\u5982\u4f55\u7e6a\u88fd\u5c0f\u90e8\u4ef6\u3002 \u5ba3\u544a\u8a2d\u7f6e\u4e8c\u7dad\u78bc\u8cc7\u6599\u548c\u8a2d\u7f6e\u4e8c\u7dad\u78bc\u6bd4\u4f8b\u56e0\u6578\u7684\u65b9\u6cd5\u3002"),(0,r.kt)(h.Z,{mdxType:"CodeHeader"},"gui/src/common/QRCodeWidget.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/QRCodeWidget.hpp>\n\nQRCodeWidget::QRCodeWidget() :\n    data(0),\n    scale(1)\n{\n}\n\nvoid QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const\n{\n    if (!data)\n    {\n        return;\n    }\n\n    touchgfx::Rect absolute = getAbsoluteRect();\n\n    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();\n\n    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)\n    {\n        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)\n        {\n            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =\n              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;\n        }\n    }\n\n    touchgfx::HAL::getInstance()->unlockFrameBuffer();\n}\n\ntouchgfx::Rect QRCodeWidget::getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n\nvoid QRCodeWidget::setQRCodeData(QRCodeData* qrCode)\n{\n    data = qrCode;\n    updateSize();\n}\n\nvoid QRCodeWidget::setScale(uint8_t s)\n{\n    scale = s;\n    updateSize();\n}\n\nvoid QRCodeWidget::updateSize()\n{\n    if (data)\n    {\n        setWidth(data->getSize() * scale);\n        setHeight(data->getSize() * scale);\n    }\n}\n")),(0,r.kt)("p",null,"\u539f\u59cb\u6a94\u6848\u5b9a\u7fa9\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u65b9\u6cd5\u3002 \u6b64\u65b9\u6cd5\u904d\u6b77\u7121\u6548\u5340\u57df\u4e2d\u7684\u6bcf\u500b\u50cf\u7d20\uff0c\u4e26\u57fa\u65bc\u8cc7\u6599\u7269\u4ef6\u7684\u5167\u5bb9\u548c\u6bd4\u4f8b\u56e0\u6578\u78ba\u5b9a\u5f71\u50cf\u7de9\u885d\u7684\u984f\u8272\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u65b9\u6cd5\u5831\u544a\u5c0f\u90e8\u4ef6\u70ba\u5b8c\u5168\u5be6\u5fc3\u3002"),(0,r.kt)(a.Z,{mdxType:"Caution"},"\u8acb\u6ce8\u610f\uff0c\u6211\u5011\u5c07\u5f71\u50cf\u7de9\u885d\u4f5c\u70ba ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"\u65b9\u6cd5")," \u65b9\u6cd5\u7684\u4e00\u90e8\u5206\u9032\u884c\u9396\u5b9a\u548c\u89e3\u9396\u3002 \u9019\u6a23\u505a\u7684\u76ee\u7684\u662f\u5728\u6211\u5011\u958b\u59cb\u7e6a\u88fd\u6642\u78ba\u4fddDMA\u5b8c\u6210\u4e86\u7e6a\u88fd\u3002"),(0,r.kt)("p",null,"\u7a0b\u5f0f\u78bc\u9084\u4f7f\u7528\u5c0f\u985e/\u4ecb\u9762\u5b58\u53d6\u4e8c\u7dad\u78bc\u8cc7\u6599\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"class QRCodeData\n{\npublic:\n    uint8_t getSize();\n    bool at(uint8_t x, uint8_t y);\n};\n")),(0,r.kt)(s.Z,{mdxType:"FurtherReading"},"\u4e0b\u8f09\u4e26\u67e5\u770b",(0,r.kt)(m.Z,{to:"/download/widgets/qr-code.zip",target:"_blank",mdxType:"Link"},"QRCode"),"\u548c",(0,r.kt)(m.Z,{to:"/download/widgets/lens.zip",target:"_blank",mdxType:"Link"},"Lens"),"\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)(p,{mdxType:"Try"},(0,r.kt)("li",null,"\u4fee\u6539\u4e8c\u7dad\u78bc\u5c0f\u90e8\u4ef6\uff0c\u4f7f\u767d\u8272\u50cf\u7d20\u5b8c\u5168\u900f\u660e\u3002"),(0,r.kt)("li",null,"\u5275\u5efa\u986f\u793a\u8910\u8272\u6ffe\u93e1\u3001\u66fc\u5fb7\u52c3\u7f85\u5206\u5f62\u3001gif\u5716\u50cf\u6216\u5176\u4ed6\u5167\u5bb9\u7684\u81ea\u8a02\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("li",null,"\u601d\u8003\u4f7f\u7528\u81ea\u8a02\u5bb9\u5668\u6700\u5bb9\u6613\u5be6\u73fe\u54ea\u4e9b\u5c0f\u90e8\u4ef6\uff0c\u4ee5\u53ca\u4f7f\u7528\u81ea\u8a02\u5c0f\u90e8\u4ef6\u6cd5\u6700\u5bb9\u6613\u5be6\u73fe\u54ea\u4e9b\u5c0f\u90e8\u4ef6\u3002")),(0,r.kt)("h2",b({},{id:"modifying-standard-widgetscontainers"}),"\u4fee\u6539\u6a19\u6e96\u5c0f\u90e8\u4ef6/\u5bb9\u5668"),(0,r.kt)("p",null,"\u5728\u5b89\u88ddTouchGFX\u6642\uff0c\u5305\u542b\u4e86\u6a19\u6e96\u5c0f\u90e8\u4ef6\u7684\u539f\u59cb\u7a0b\u5f0f\u78bc\u3002 \u70ba\u4e86\u9069\u61c9\u61c9\u7528\u9700\u6c42\uff0c\u9019\u4e9b\u4e5f\u90fd\u53ef\u4ee5\u9032\u884c\u4fee\u6539\u3002 \u6a19\u6e96\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u7684\u539f\u59cb\u7a0b\u5f0f\u78bc\u4f4d\u65bc\u4ee5\u4e0b\u8cc7\u6599\u593e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{}),"Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets\n")),(0,r.kt)("p",null,"\u70ba\u4e86\u7dad\u6301\u5411\u5f8c\u76f8\u5bb9\uff0c\u6838\u5fc3\u5eab\u5305\u542b\u6a19\u6e96\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u7684\u5df2\u7de8\u8b6f\u7248\u672c\u3002 \u56e0\u6b64\uff0c\u4e26\u975e\u5fc5\u9808\u5728\u9805\u76ee\u4e2d\u7de8\u8b6f\u9019\u4e9b\u6a94\u3002"),(0,r.kt)(a.Z,{mdxType:"Caution"},"\u4e0d\u5efa\u8b70\u76f4\u63a5\u4fee\u6539\u6a19\u6e96\u5c0f\u90e8\u4ef6/\u5bb9\u5668"),(0,r.kt)("p",null,"\u539f\u59cb\u7a0b\u5f0f\u78bc\u4e3b\u8981\u7528\u4f5c\u9748\u611f\u4f86\u6e90\uff0c\u4ee5\u53ca\u4e00\u7a2e\u5b78\u7fd2TouchGFX\u5c0f\u90e8\u4ef6\u5167\u90e8\u5de5\u4f5c\u6a5f\u5236\u7684\u65b9\u5f0f\u3002 \u5982\u9700\u4e00\u4e9b\u4e0d\u540c\u65bc\u6a19\u6e96\u5be6\u73fe\u7684\u884c\u70ba\uff0c\u53ef\u901a\u904e\u5b50\u985e\u5316\u6216\u5275\u5efa\u81ea\u8a02\u5bb9\u5668\u4f86\u5be6\u73fe\uff0c\u9019\u4e5f\u662f\u63a8\u85a6\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u63a8\u85a6\u539f\u56e0\u6709\u5169\u500b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u7531\u65bc\u5fc5\u9808\u624b\u52d5\u5408\u4f75\u6240\u505a\u7684\u4efb\u4f55\u4fee\u6539\uff0c\u56e0\u6b64\u6703\u66f4\u52a0\u96e3\u4ee5\u5347\u7d1a\u5230\u66f4\u65b0\u7684TouchGFX\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u6b21\uff0c\u5b58\u5728\u7834\u58de\u4f9d\u8cf4\u4e8e\u7279\u5b9a\u884c\u70ba\u7684\u6a19\u6e96\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u7684\u98a8\u96aa\u3002")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u5fc5\u9808\u4fee\u6539\u6a19\u6e96\u5c0f\u90e8\u4ef6/\u5bb9\u5668\uff0c\u6211\u5011\u5efa\u8b70\u60a8\u8907\u88fd\u5b83\u3001\u91cd\u65b0\u547d\u540d\u7136\u5f8c\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4fee\u6539\u539f\u59cb\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8aaa\uff0c\u60a8\u53ef\u4ee5\u81ea\u7531\u5730\u505a\u4efb\u4f55\u60a8\u8a8d\u70ba\u5c0d\u7684\u4e8b\u60c5\u3002 \u5982\u679c\u5c07\u6a19\u6e96\u5c0f\u90e8\u4ef6\u7684\u539f\u59cb\u7a0b\u5f0f\u78bc\u6dfb\u52a0\u5230\u5c08\u6848\u4e2d\uff0c\u9023\u7d50\u5668\u6703\u9078\u64c7\u6b64\u7248\u672c\u800c\u4e0d\u662f\u6838\u5fc3\u5eab\u4e2d\u7684\u7248\u672c\u3002 \u56e0\u6b64\uff0c\u901a\u904e\u5c07\u539f\u59cb\u7a0b\u5f0f\u78bc\u6dfb\u52a0\u5230\u61c9\u7528\uff0c\u53ef\u4ee5\u4fee\u6539\u6a19\u6e96\u5c0f\u90e8\u4ef6\u3002"))}S.isMDXComponent=!0}}]);