"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7094],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),g=i,h=s["".concat(c,".").concat(g)]||s[g]||p[g]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=o},22425:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=o},28412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return E},contentTitle:function(){return N},default:function(){return S},frontMatter:function(){return T},metadata:function(){return R},toc:function(){return O}});var r=n(3905),i=n(44035),a=n(70814),o=n(37793),l=n(67294),c=n(88678);const d=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class u extends l.Component{render(){return l.createElement(c.Z,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:d},this.props.children)}}var p=u,s=n(29415),g=n(31217),h=n(39130),m=n(22425),f=Object.defineProperty,v=Object.defineProperties,k=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&C(e,n,t[n]);if(w)for(var n of w(t))y.call(t,n)&&C(e,n,t[n]);return e};const T={id:"custom-widgets",title:"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6"},N=void 0,R={unversionedId:"development/ui-development/touchgfx-engine-features/custom-widgets",id:"development/ui-development/touchgfx-engine-features/custom-widgets",title:"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-widgets",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-widgets",tags:[],version:"current",frontMatter:{id:"custom-widgets",title:"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6"},sidebar:"docs",previous:{title:"\u7f13\u5b58\u4f4d\u56fe",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"},next:{title:"\u753b\u5e03\u63a7\u4ef6",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"}},E={},O=[{value:"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u6cd5\u7684\u4f7f\u7528\u573a\u666f",id:"when-to-use-the-custom-widget-approach",level:2},{value:"\u5728TouchGFX Designer\u4e2d",id:"in-touchgfx-designer",level:2},{value:"\u5728\u4ee3\u7801\u4e2d",id:"in-code",level:2},{value:"\u60a8\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6",id:"your-own-custom-widget",level:3},{value:"\u90e8\u5206\u7ed8\u5236",id:"partial-drawing",level:3},{value:"\u5b9e\u5fc3\u533a\u57df",id:"solid-area",level:3},{value:"\u793a\u4f8b\u6e90\u4ee3\u7801",id:"example-source-code",level:3},{value:"\u4fee\u6539\u6807\u51c6\u5c0f\u90e8\u4ef6/\u5bb9\u5668",id:"modifying-standard-widgetscontainers",level:2}],Z={toc:O};function S(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var r in e)x.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&w)for(var r of w(e))t.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},Z),c),v(t,k({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u5e94\u7528\u65f6\uff0c\u60a8\u53ef\u80fd\u9700\u8981TouchGFX\u4e2d\u6ca1\u6709\u5305\u542b\u7684\u63a7\u4ef6\u3002 TouchGFX\u63d0\u4f9b\u4e86\u51e0\u79cd\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u56fe\u5f62\u5143\u7d20\u7684\u65b9\u5f0f\u3002 \u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u4f7f\u7528",(0,r.kt)("a",b({parentName:"p"},{href:"custom-containers"}),"\u81ea\u5b9a\u4e49\u5bb9\u5668\u6cd5"),"\uff0c\u60a8\u53ef\u4ee5\u5c06\u73b0\u6709\u7684\u63a7\u4ef6\u7ec4\u5408\u6210\u60a8\u81ea\u5df1\u7684\u63a7\u4ef6\u3002 \u4f46\u662f\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u4e00\u79cd\u66f4\u9ad8\u7ea7\u7684\u65b9\u6cd5\uff0c\u60a8\u53ef\u4ee5\u7528\u5b83\u771f\u6b63\u5730\u521b\u5efa\u4e00\u4e2a\u53ef\u5168\u9762\u63a7\u5236\u5e27\u7f13\u51b2\u7684\u5c0f\u90e8\u4ef6\uff0c\u4ece\u800c\u80fd\u591f\u7cbe\u786e\u5730\u7ed8\u5236\u60a8\u60f3\u8981\u7684\u5185\u5bb9\u3002"),(0,r.kt)("h2",b({},{id:"when-to-use-the-custom-widget-approach"}),"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u6cd5\u7684\u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u521b\u5efa\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u4e0d\u662f\u521b\u5efa\u5c0f\u90e8\u4ef6\u7684\u6700\u5178\u578b\u65b9\u6cd5\u3002 \u5982\u679c\u9002\u5408\u60a8\u7684\u9700\u6c42\uff0c\u6700\u597d\u9009\u62e9\u81ea\u5b9a\u4e49\u5bb9\u5668\u6cd5\uff0c\u4f46\u6709\u65f6\u6b64\u6cd5\u5e76\u4e0d\u591f\u7528\u3002 \u5f53\u60a8\u9700\u8981\u5168\u9762\u63a7\u5236\u5e27\u7f13\u51b2\u65f6\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u6cd5\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u51e0\u4e2a\u53ef\u4ee5\u4e14\u5e94\u5f53\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u6cd5\u521b\u5efa\u7684\u5c0f\u90e8\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8910\u8272\u6ee4\u955c"),(0,r.kt)("li",{parentName:"ul"},"\u66fc\u5fb7\u52c3\u7f57\u5206\u5f62\u5c0f\u90e8\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u663e\u793a\u6587\u4ef6\u4e2d\u6570\u636e\u7684\u5c0f\u90e8\u4ef6\uff0c\u5982gif\u52a8\u753b\u3002")),(0,r.kt)("h2",b({},{id:"in-touchgfx-designer"}),"\u5728TouchGFX Designer\u4e2d"),(0,r.kt)("p",null,"TouchGFX Designer\u76ee\u524d\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u7684\u521b\u5efa\u3002 \u56e0\u6b64\uff0c\u60a8\u5c06\u9700\u8981\u624b\u52a8\u5199\u5165\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u7684\u4ee3\u7801\uff08\u8bf7\u53c2\u8003\u672c\u6587\u7684\u5269\u4f59\u90e8\u5206\u4e86\u89e3\u505a\u6cd5\uff09\uff0c\u7136\u540e\u5728\u89c6\u56fe\u7684\u7528\u6237\u4ee3\u7801\u90e8\u5206\u63d2\u5165\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("h2",b({},{id:"in-code"}),"\u5728\u4ee3\u7801\u4e2d"),(0,r.kt)("p",null,"\u901a\u8fc7\u6269\u5c55",(0,r.kt)("inlineCode",{parentName:"p"},"Widget"),"\u7c7b\u521b\u5efa\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u3002 \u8fd9\u6837\u505a\u4f1a\u52a0\u5927\u7528\u6237\u7684\u5de5\u4f5c\u91cf\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5168\u9762\u63a7\u5236\u5c0f\u90e8\u4ef6\u7ed8\u5236\u7684\u6240\u6709\u50cf\u7d20\u3002 \u60a8\u7684\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u4e0d\u4e00\u5b9a\u8981\u5229\u7528\u4efb\u4f55\u73b0\u6709\u5c0f\u90e8\u4ef6\uff0c\u800c\u662f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u50cf\u7d20\u989c\u8272\u6765\u5b9a\u4e49\u5e94\u5982\u4f55\u7ed8\u5236\u3002 \u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u6cd5\u7684\u5b58\u50a8\u7a7a\u95f4\u5360\u7528\u91cf\u901a\u5e38\u8f83\u5c0f\uff0c\u8fd9\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u975e\u5e38\u91cd\u8981\u3002"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u7684\u4e00\u4e2a\u793a\u4f8b\u662f\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\u3002 \u8fd9\u4e2a\u7279\u6b8a\u7684\u5c0f\u90e8\u4ef6\u662f\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u9762\u4e00\u8282\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa\u5b83\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\u662f\u9ed1\u767d\u50cf\u7d20\u7684NxN\u77e9\u9635\u3002 \u5c0f\u90e8\u4ef6\u7684\u5927\u5c0f\u548c\u6bcf\u4e2a\u50cf\u7d20\u7684\u989c\u8272\u5c06\u5728\u8fd0\u884c\u65f6\u95f4\u786e\u5b9a\uff0c\u5e76\u53d6\u51b3\u4e8e\u4e8c\u7ef4\u7801\u6570\u636e\u5bf9\u8c61\u4e2d\u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e24\u4e2a\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\u53ef\u80fd\u5916\u89c2\u7684\u793a\u4f8b\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-examples.png",noShadow:!0,mdxType:"Figure"},"\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\u793a\u4f8b"),(0,r.kt)(a.Z,{mdxType:"Caution"},"\u53ef\u4ee5\u7528\u81ea\u5b9a\u4e49\u5bb9\u5668\u6cd5\u521b\u5efa\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\uff0c\u4f7f\u5bb9\u5668\u6709n*n\u4e2a\u9ed1\u6216\u767d\u65b9\u5757\u4f5c\u4e3a\u5b50\u5bb9\u5668\u3002 \u4f46\u662f\uff0c\u8fd9\u4f1a\u5360\u7528\u8bb8\u591a\u5b58\u50a8\u7a7a\u95f4\uff0c\u5e76\u4e14\u5f88\u53ef\u80fd\u4e0d\u591f\u9ad8\u6548\u6216\u7075\u6d3b\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u521b\u5efa\u6807\u51c6 ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"touchgfx::Button")," \uff08\u968f\u6846\u67b6\u63d0\u4f9b\uff09\u4f5c\u4e3a\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\uff0c\u800c\u4e0d\u662f\u81ea\u5b9a\u4e49\u5bb9\u5668\u3002 \u8fd9\u6837\u53ef\u4ee5\u8282\u7701\u5c4f\u5e55\u4e0a\u6bcf\u4e2a\u6309\u94ae\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,r.kt)("h3",b({},{id:"your-own-custom-widget"}),"\u60a8\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6"),(0,r.kt)("p",null,"\u4e3a\u4e86\u521b\u5efa\u6269\u5c55",(0,r.kt)("inlineCode",{parentName:"p"},"Widget"),"\u7c7b\u7684\u5c0f\u90e8\u4ef6\uff0c\u60a8\u9700\u8981\u58f0\u660e\u4e24\u70b9\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u90e8\u4ef6\u7684\u7ed8\u5236\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u90e8\u4ef6\u7684\u5b9e\u5fc3\u90e8\u5206")),(0,r.kt)("h3",b({},{id:"partial-drawing"}),"\u90e8\u5206\u7ed8\u5236"),(0,r.kt)("p",null,"\u4efb\u4f55\u5c0f\u90e8\u4ef6\u548c\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u90fd\u9700\u8981\u652f\u6301\u90e8\u5206\u7ed8\u5236\u3002 \u8fd9\u610f\u5473\u7740\u5c0f\u90e8\u4ef6\u5e94\u80fd\u53ea\u7ed8\u5236\u81ea\u8eab\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\u7684\u539f\u56e0\u6709\u4e24\u70b9\u3002 \u901a\u5e38\u4e0d\u4e00\u5b9a\u8981\u91cd\u65b0\u7ed8\u5236\u6574\u4e2a\u5c4f\u5e55\uff0c\u800c\u662f\u53ea\u9700\u7ed8\u5236\u4e00\u90e8\u5206\u3002 TouchGFX\u7684\u7b97\u6cd5\u53ef\u4ee5\u5c06\u5168\u5c4f\u7ed8\u5236\u5206\u5272\u6210\u591a\u4e2a\u90e8\u5206\u7ed8\u5236\uff0c\u4ee5\u4f7f\u7ed8\u5236\u50cf\u7d20\u7684\u603b\u6570\u6700\u5c0f\u5316\u3002 \u7136\u540e\uff0c\u5c4f\u5e55\u7684\u90e8\u5206\u7ed8\u5236\u53ef\u80fd\u8981\u6c42\u5c0f\u90e8\u4ef6\u53ea\u7ed8\u5236\u81ea\u8eab\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\u9700\u80fd\u591f\u652f\u6301\u53ea\u7ed8\u5236\u81ea\u8eab\u7684\u9ad8\u4eae\u90e8\u5206\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.png",noShadow:!0,mdxType:"Figure"},"\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\u90e8\u5206\u7ed8\u5236"),(0,r.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\u5b9e\u73b0\u8fd9\u4e00\u70b9\u7684\u65b9\u6cd5\u662f\u91cd\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual void draw(const touchgfx::Rect& invalidatedArea) const\n{\n    //run through the pixels of the invalidated area\n    //draw a black pixel if the qr data object has a value at this position\n    //draw a white pixel otherwise\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"invalidatedArea"),"\u662f\u5c0f\u90e8\u4ef6\u4e2d\u9700\u8981\u66f4\u65b0\u7684\u90a3\u90e8\u5206\u3002 \u5728\u6211\u4eec\u7684\u4e8c\u7ef4\u7801\u793a\u4f8b\u4e2d\uff0c\u65e0\u6548\u533a\u57df\u662f\u9ad8\u4eae\u533a\u57df\u3002 \u8be5\u533a\u57df\u8868\u793a\u4e3a\u76f8\u5bf9\u4e8e\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u7684\u5750\u6807\u3002"),(0,r.kt)(a.Z,{mdxType:"Caution"},"It is the responsibility of the widget to draw inside the invalidated area. If you draw outside the invalidated area you will not get overall correct behaviour of your screens."),(0,r.kt)(o.Z,{mdxType:"Tip"},"The ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," method is ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"const")," because the optimized drawing algorithm might split up the drawing of a widget into multiple calls to draw. The ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"const")," assures that the widget is not moved, updated etc. in between these multiple ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," executions."),(0,r.kt)("h3",b({},{id:"solid-area"}),"\u5b9e\u5fc3\u533a\u57df"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5c0f\u90e8\u4ef6\u9700\u80fd\u591f\u62a5\u544a\u81ea\u8eab\u591a\u5927\u4e00\u90e8\u5206\u662f\u5b9e\u5fc3\u7684\u3002 \u5b9e\u5fc3\u610f\u5473\u7740\u60a8\u4e0d\u80fd\u5728\u5c4f\u5e55\u4e0a\u770b\u5230\u5b83\u540e\u65b9\u7684\u5185\u5bb9\u3002 \u4f8b\u5982\uff0c\u6807\u51c6\u7ea2\u8272\u65b9\u5757\u662f\u5b8c\u5168\u5b9e\u5fc3\u7684\uff0c\u800c\u4e00\u5e45\u963f\u5c14\u6cd5\u503c\u4e3a50%\u7684\u56fe\u50cf\u5219\u5b8c\u5168\u975e\u5b9e\u5fc3\uff1b\u60a8\u53ef\u4ee5\u770b\u5230\u5b83\u540e\u65b9\u7684\u4e00\u5207\u3002"),(0,r.kt)("p",null,"\u5b9e\u5fc3\u5c0f\u90e8\u4ef6\u80fd\u4f7fTouchGFX\u52a0\u5feb\u7ed8\u5236\u8fdb\u5ea6\u3002 \u7531\u4e8e\u6211\u4eec\u65e0\u9700\u5728\u5b9e\u5fc3\u5c0f\u90e8\u4ef6\u4e0b\u65b9\u7ed8\u5236\u5c0f\u90e8\u4ef6\uff0c\u56e0\u6b64\u8981\u7ed8\u5236\u7684\u50cf\u7d20\u8f83\u5c11\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u62a5\u544a\u4ee3\u7801\u4e2d\u7684\u5b9e\u5fc3\u533a\u57df\uff0c\u91cd\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const;\n")),(0,r.kt)("p",null,"\u5f97\u5230\u7684\u4e8c\u7ef4\u7801\u5c06\u662f\u5b8c\u5168\u5b9e\u5fc3\u7684\u3002 \u60a8\u5c06\u4e0d\u80fd\u770b\u5230\u9ed1\u767d\u50cf\u7d20\u540e\u7684\u4efb\u4f55\u5185\u5bb9\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u8ba9\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u77e9\u5f62\uff0c\u5176\u5927\u5c0f\u7b49\u4e8e\u5c0f\u90e8\u4ef6\u7684\u5b8c\u6574\u5c3a\u5bf8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n")),(0,r.kt)("h3",b({},{id:"example-source-code"}),"\u793a\u4f8b\u6e90\u4ee3\u7801"),(0,r.kt)("p",null,"\u6211\u4eec\u6700\u7ec8\u5f97\u5230\u4e00\u4e2a\u5e94\u7528\u548c\u4e00\u4e2a\u8fd9\u6837\u7684\u5c0f\u90e8\u4ef6 - \u5177\u4f53\u53d6\u51b3\u4e8e\u63d0\u4f9b\u7684\u6570\u636e\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-screenshot.png",noShadow:!0,mdxType:"Figure"},"\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\u5c4f\u5e55\u622a\u56fe"),(0,r.kt)("p",null,"\u5c0f\u90e8\u4ef6\u7684\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"gui/include/gui/common/QRCodeWidget.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"\n#ifndef QR_CODE_WIDGET_HPP\n#define QR_CODE_WIDGET_HPP\n\n#include <touchgfx/widgets/Widget.hpp>\n\nclass QRCodeWidget : public touchgfx::Widget\n{\npublic:\n    QRCodeWidget();\n\n    virtual void draw(const touchgfx::Rect& invalidatedArea) const;\n    virtual touchgfx::Rect getSolidRect() const;\n\n    void setQRCodeData(QRCodeData* data);\n    void setScale(uint8_t s);\n\nprivate:\n    void updateSize();\n\n    QRCodeData* data;\n    uint8_t scale;\n};\n#endif\n")),(0,r.kt)("p",null,"\u5728\u5934\u6587\u4ef6\u4e2d\uff0c\u5c06\u5c0f\u90e8\u4ef6\u5b9a\u4e49\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx::Widget"),"\u7c7b\u7684\u6269\u5c55\u3002 \u91cd\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u65b9\u6cd5\uff0c\u4ee5\u4fbf\u5b9a\u4e49\u5982\u4f55\u7ed8\u5236\u5c0f\u90e8\u4ef6\u3002 \u58f0\u660e\u8bbe\u7f6e\u4e8c\u7ef4\u7801\u6570\u636e\u548c\u8bbe\u7f6e\u4e8c\u7ef4\u7801\u6bd4\u4f8b\u56e0\u5b50\u7684\u65b9\u6cd5\u3002"),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"gui/src/common/QRCodeWidget.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/QRCodeWidget.hpp>\n\nQRCodeWidget::QRCodeWidget() :\n    data(0),\n    scale(1)\n{\n}\n\nvoid QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const\n{\n    if (!data)\n    {\n        return;\n    }\n\n    touchgfx::Rect absolute = getAbsoluteRect();\n\n    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();\n\n    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)\n    {\n        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)\n        {\n            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =\n              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;\n        }\n    }\n\n    touchgfx::HAL::getInstance()->unlockFrameBuffer();\n}\n\ntouchgfx::Rect QRCodeWidget::getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n\nvoid QRCodeWidget::setQRCodeData(QRCodeData* qrCode)\n{\n    data = qrCode;\n    updateSize();\n}\n\nvoid QRCodeWidget::setScale(uint8_t s)\n{\n    scale = s;\n    updateSize();\n}\n\nvoid QRCodeWidget::updateSize()\n{\n    if (data)\n    {\n        setWidth(data->getSize() * scale);\n        setHeight(data->getSize() * scale);\n    }\n}\n")),(0,r.kt)("p",null,"\u6e90\u6587\u4ef6\u5b9a\u4e49\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u65b9\u6cd5\u3002 \u6b64\u65b9\u6cd5\u904d\u5386\u65e0\u6548\u533a\u57df\u4e2d\u7684\u6bcf\u4e2a\u50cf\u7d20\uff0c\u5e76\u57fa\u4e8e\u6570\u636e\u5bf9\u8c61\u7684\u5185\u5bb9\u548c\u6bd4\u4f8b\u56e0\u5b50\u786e\u5b9a\u5e27\u7f13\u51b2\u7684\u989c\u8272\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u65b9\u6cd5\u62a5\u544a\u5c0f\u90e8\u4ef6\u4e3a\u5b8c\u5168\u5b9e\u5fc3\u3002"),(0,r.kt)(a.Z,{mdxType:"Caution"},"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u9501\u5b9a\u548c\u89e3\u9501\u4e86\u5e27\u7f13\u51b2\u533a ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," \u65b9\u6cd5\u4e2d\u3002 \u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u5728\u6211\u4eec\u5f00\u59cb\u7ed8\u5236\u65f6\u786e\u4fddDMA\u5b8c\u6210\u4e86\u7ed8\u5236\u3002"),(0,r.kt)("p",null,"\u4ee3\u7801\u8fd8\u4f7f\u7528\u5c0f\u7c7b/\u63a5\u53e3\u8bbf\u95ee\u4e8c\u7ef4\u7801\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"class QRCodeData\n{\npublic:\n    uint8_t getSize();\n    bool at(uint8_t x, uint8_t y);\n};\n")),(0,r.kt)(s.Z,{mdxType:"FurtherReading"},"\u4e0b\u8f7d\u5e76\u67e5\u770b",(0,r.kt)(h.Z,{to:"/download/widgets/qr-code.zip",target:"_blank",mdxType:"Link"},"QRCode"),"\u548c",(0,r.kt)(h.Z,{to:"/download/widgets/lens.zip",target:"_blank",mdxType:"Link"},"Lens"),"\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)(p,{mdxType:"Try"},(0,r.kt)("li",null,"\u4fee\u6539\u4e8c\u7ef4\u7801\u5c0f\u90e8\u4ef6\uff0c\u4f7f\u767d\u8272\u50cf\u7d20\u5b8c\u5168\u900f\u660e\u3002"),(0,r.kt)("li",null,"\u521b\u5efa\u663e\u793a\u8910\u8272\u6ee4\u955c\u3001\u66fc\u5fb7\u52c3\u7f57\u5206\u5f62\u3001gif\u56fe\u50cf\u6216\u5176\u4ed6\u5185\u5bb9\u7684\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("li",null,"\u601d\u8003\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bb9\u5668\u6700\u5bb9\u6613\u5b9e\u73b0\u54ea\u4e9b\u5c0f\u90e8\u4ef6\uff0c\u4ee5\u53ca\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c0f\u90e8\u4ef6\u6cd5\u6700\u5bb9\u6613\u5b9e\u73b0\u54ea\u4e9b\u5c0f\u90e8\u4ef6\u3002")),(0,r.kt)("h2",b({},{id:"modifying-standard-widgetscontainers"}),"\u4fee\u6539\u6807\u51c6\u5c0f\u90e8\u4ef6/\u5bb9\u5668"),(0,r.kt)("p",null,"\u5728\u5b89\u88c5TouchGFX\u65f6\uff0c\u5305\u542b\u4e86\u6807\u51c6\u5c0f\u90e8\u4ef6\u7684\u6e90\u4ee3\u7801\u3002 \u4e3a\u4e86\u9002\u5e94\u5e94\u7528\u9700\u6c42\uff0c\u8fd9\u4e9b\u4e5f\u90fd\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\u3002 \u6807\u51c6\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u7684\u6e90\u4ee3\u7801\u4f4d\u4e8e\u4ee5\u4e0b\u6587\u4ef6\u5939\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{}),"Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u7ef4\u6301\u5411\u540e\u517c\u5bb9\uff0c\u6838\u5fc3\u5e93\u5305\u542b\u6807\u51c6\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u7684\u5df2\u7f16\u8bd1\u7248\u672c\u3002 \u56e0\u6b64\uff0c\u5e76\u975e\u5fc5\u987b\u5728\u9879\u76ee\u4e2d\u7f16\u8bd1\u8fd9\u4e9b\u6587\u4ef6\u3002"),(0,r.kt)(a.Z,{mdxType:"Caution"},"\u4e0d\u5efa\u8bae\u76f4\u63a5\u4fee\u6539\u6807\u51c6\u5c0f\u90e8\u4ef6/\u5bb9\u5668"),(0,r.kt)("p",null,"\u6e90\u4ee3\u7801\u4e3b\u8981\u7528\u4f5c\u7075\u611f\u6765\u6e90\uff0c\u4ee5\u53ca\u4e00\u79cd\u5b66\u4e60TouchGFX\u5c0f\u90e8\u4ef6\u5185\u90e8\u5de5\u4f5c\u673a\u5236\u7684\u65b9\u5f0f\u3002 \u5982\u9700\u4e00\u4e9b\u4e0d\u540c\u4e8e\u6807\u51c6\u5b9e\u73b0\u7684\u884c\u4e3a\uff0c\u53ef\u901a\u8fc7\u5b50\u7c7b\u5316\u6216\u521b\u5efa\u81ea\u5b9a\u4e49\u5bb9\u5668\u6765\u5b9e\u73b0\uff0c\u8fd9\u4e5f\u662f\u63a8\u8350\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u63a8\u8350\u539f\u56e0\u6709\u4e24\u4e2a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u7531\u4e8e\u5fc5\u987b\u624b\u52a8\u5408\u5e76\u6240\u505a\u7684\u4efb\u4f55\u4fee\u6539\uff0c\u56e0\u6b64\u4f1a\u66f4\u52a0\u96be\u4ee5\u5347\u7ea7\u5230\u66f4\u65b0\u7684TouchGFX\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u6b21\uff0c\u5b58\u5728\u7834\u574f\u4f9d\u8d56\u4e8e\u7279\u5b9a\u884c\u4e3a\u7684\u6807\u51c6\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u7684\u98ce\u9669\u3002")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u5fc5\u987b\u4fee\u6539\u6807\u51c6\u5c0f\u90e8\u4ef6/\u5bb9\u5668\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u590d\u5236\u5b83\u3001\u91cd\u547d\u540d\u7136\u540e\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4fee\u6539\u6e90\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u60a8\u53ef\u4ee5\u81ea\u7531\u5730\u505a\u4efb\u4f55\u60a8\u8ba4\u4e3a\u5bf9\u7684\u4e8b\u60c5\u3002 \u5982\u679c\u5c06\u6807\u51c6\u5c0f\u90e8\u4ef6\u7684\u6e90\u4ee3\u7801\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\uff0c\u94fe\u63a5\u5668\u4f1a\u9009\u62e9\u6b64\u7248\u672c\u800c\u4e0d\u662f\u6838\u5fc3\u5e93\u4e2d\u7684\u7248\u672c\u3002 \u56e0\u6b64\uff0c\u901a\u8fc7\u5c06\u6e90\u4ee3\u7801\u6dfb\u52a0\u5230\u5e94\u7528\uff0c\u53ef\u4ee5\u4fee\u6539\u6807\u51c6\u5c0f\u90e8\u4ef6\u3002"))}S.isMDXComponent=!0}}]);