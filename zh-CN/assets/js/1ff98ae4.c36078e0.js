"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9013],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,h=d["".concat(u,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=o},22425:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},11290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return k},default:function(){return C},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return M}});var r=n(3905),l=n(44035),a=n(29415),o=n(39130),i=n(22425),u=n(70814),c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&b(e,n,t[n]);return e};const v={id:"01-create-project",title:"1. \u521b\u5efa\u9879\u76ee",sidebar_label:"1. \u521b\u5efa\u9879\u76ee"},k=void 0,f={unversionedId:"development/board-bring-up/how-to/01-create-project",id:"development/board-bring-up/how-to/01-create-project",title:"1. \u521b\u5efa\u9879\u76ee",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/01-create-project",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/01-create-project",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-create-project",title:"1. \u521b\u5efa\u9879\u76ee",sidebar_label:"1. \u521b\u5efa\u9879\u76ee"},sidebar:"docs",previous:{title:"\u542f\u52a8\u5f00\u53d1\u677f\u4ecb\u7ecd",permalink:"/4.19/zh-CN/docs/development/board-bring-up/board-introduction"},next:{title:"2. CPU\u8fd0\u884c",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/02-cpu-running"}},w={},M=[{value:"\u52a8\u673a",id:"motivation",level:2},{value:"\u76ee\u6807",id:"goal",level:2},{value:"\u9a8c\u8bc1",id:"verification",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u6267\u884c",id:"do",level:2},{value:"\u7528\u6237\u4ee3\u7801\u6bb5",id:"user-code-sections",level:3},{value:"\u66f4\u591a\u8bfb\u7269",id:"further-reading",level:2}],y={toc:M};function C(e){var t,n=e,{components:c}=n,b=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},y),b),p(t,d({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h2",g({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528STM32CubeMX\u751f\u6210\u7279\u5b9aMCU\u7684\u5de5\u7a0b\u9879\u76ee\u3002 \u8be5\u9879\u76ee\u5c06\u4f5c\u4e3a\u672c\u4f7f\u7528\u6307\u5357\u4e2d\u7684\u5176\u4f59\u6b65\u9aa4\u7684\u57fa\u7840\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u5728\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u4e2d\u4f7f\u7528STM32CubeMX\u5b8c\u5584\u9879\u76ee\uff0c\u5e76\u7f16\u5199\u548c\u6574\u5408\u4ee3\u7801\uff0c\u4ee5\u4f7f\u6240\u6709\u5fc5\u9700\u7684\u5916\u8bbe\u90fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u672c\u9879\u76ee\u5c06\u957f\u671f\u5b58\u5728\u4ee5\u4f9b\u53cd\u590d\u4f7f\u7528\u3002 \u60a8\u73b0\u5728\u5e94\u786e\u5b9a\u4e00\u79cd\u7b56\u7565\uff0c\u4f7f\u5f97\u4e0d\u540c\u7684\u7248\u672c\u4fdd\u6301\u53ef\u7528\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u8fd4\u56de\u5e76\u518d\u6b21\u8fd0\u884c\u3002 \u6216\u8005\u5728\u65b0\u786c\u4ef6\u4e0a\u8fdb\u884c\uff0c\u6216\u8005\u53ea\u662f\u91cd\u65b0\u68c0\u67e5\u786c\u4ef6\u3002"),(0,r.kt)("p",null,"\u4e5f\u8bb8\u60a8\u9700\u8981\u8bb8\u591a\u5c0f\u578b\u6d4b\u8bd5\u7a0b\u5e8f\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8be5\u9879\u76ee\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u8d77\u70b9\u3002"),(0,r.kt)("h2",g({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"\u5176\u76ee\u6807\u662f\u5728STM32CubeMX\u4e2d\u521b\u5efa\u4e00\u4e2a\u53ef\u70e7\u5f55\u5230\u60a8\u7684\u677f\u4e0a\u5e76\u6267\u884c\u7684\u9879\u76ee\u3002 \u5982\u679c\u60a8\u6709\u5e26\u8c03\u8bd5\u5668\u7684IDE (\u5982STM32CubeIDE\u6216IAR Embedded Workbench) \uff0c\u5219\u8fd8\u5e94\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u8c03\u8bd5\u5e76\u9010\u6b65\u5b8c\u6210MCU\u4e0a\u7684\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u8c03\u8bd5\u5668\uff0c\u5219\u5e94\u627e\u5230\u4e00\u79cd\u4ece\u9879\u76ee\u7684\u5404\u4e2a\u4f4d\u7f6e\u6253\u5370\u51fa\u8c03\u8bd5\u8bed\u53e5\u7684\u65b9\u6cd5\u3002 \u5982 \u4e32\u884c\u7aef\u53e3\u3002"),(0,r.kt)("h3",g({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728IDE\u4e2d\u6253\u5f00\u9879\u76ee"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u9879\u76ee\u7531STM32CubeMX\u6b63\u786e\u751f\u6210\uff0c\u5e76\u53ef\u4ee5\u7528\u4f5c\u540e\u7eed\u677f\u5361\u542f\u52a8\u5f00\u53d1\u7684\u8d77\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u9879\u76ee\u7f16\u8bd1"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5bf9\u9879\u76ee\u8fdb\u884c\u9a71\u52a8\u7a0b\u5e8f\u53ca\u5305\u542b\u7c7b\u8def\u5f84\u7684\u6b63\u786e\u8bbe\u7f6e\u3002 \u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u66f4\u591a\u4ee3\u7801\u5e76\u91cd\u590d\u7f16\u8bd1\u8be5\u9879\u76ee\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u547d\u4e2d\u65ad\u70b9"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u9879\u76ee\u53ef\u4ee5\u8c03\u8bd5\u8fd0\u884c\u5e76\u5728\u65ad\u70b9\u5904\u505c\u6b62\u3002 \u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u9879\u76ee\u72b6\u6001\u5e76\u8c03\u67e5\u9519\u8bef\u3002")))),(0,r.kt)("h2",g({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8eSTM32\u5f00\u53d1\u677f"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u7a0b/\u8c03\u8bd5\u63a5\u53e3 - ST-LINK\u3001JLINK\u6216\u7c7b\u4f3c\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u5df2\u5b89\u88c5"),(0,r.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5IDE - STM32CubeIDE\u3001IAR Embedded Workbench\u3001Keil uVision\u6216\u7c7b\u4f3c\u8f6f\u4ef6")),(0,r.kt)("h2",g({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06\u5728STM32CubeMX\u4e2d\u5b8c\u6210\u521b\u5efa\u65b0\u9879\u76ee\u7684\u6240\u6709\u6b65\u9aa4\u3002 \u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528STM32F429 MCU\u3002 \u5f53\u7136\uff0c\u60a8\u5e94\u5728\u786c\u4ef6\u4e0a\u9009\u62e9MCU\u3002"),(0,r.kt)("p",null,"\u5728STM32CubeMX\u4e2d\uff0c\u5355\u51fb\u201c\u4eceMCU\u542f\u52a8\u6211\u7684\u9879\u76ee\u201d\u4e2d\u7684\u201c\u8bbf\u95eeMCU\u9009\u62e9\u5668\u201d\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx01.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u521b\u5efa\u65b0\u9879\u76ee"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u57fa\u4e8eSTM32\u8bc4\u4f30\u5957\u4ef6\u542f\u52a8\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5982STM32F429\u63a2\u7d22\u677f\u3002 \u5982\u679c\u60a8\u7684\u786c\u4ef6\u8bbe\u8ba1\u57fa\u4e8e\u8bc4\u4f30\u5957\u4ef6\uff0c\u60a8\u53ef\u4ee5\u6216\u8bf4\u5e94\u5f53\u6267\u884c\u8be5\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u9009\u62e9\u76f8\u5173MCU\u3002 \u5728\u8fd9\u91cc\u6211\u4eec\u9009\u62e9STM32F429ZIT6U\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx02.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u9009\u62e9MCU"),(0,r.kt)("p",null,"\u8f6c\u5230\u201c\u9879\u76ee\u7ba1\u7406\u5668\u201d\u9009\u9879\uff0c\u5e76\u4e3a\u9879\u76ee\u547d\u540d\u3002 \u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u65b0\u7684\u9879\u76ee\u5b58\u50a8\u4f4d\u7f6e\u3002 \u5728\u201c\u5e94\u7528\u7ed3\u6784\u201d\u4e0b\uff0c\u9009\u62e9\u201c\u9ad8\u7ea7\u201d\u3002 \u5728\u201c\u5de5\u5177\u94fe/IDE\u201d\u4e0b\uff0c\u60a8\u5fc5\u987b\u9009\u62e9IDE\u3002 \u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9009\u62e9IAR\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx03.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u8bbe\u7f6e\u9879\u76ee\u540d\u79f0\u548cIDE"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u201c\u751f\u6210\u4ee3\u7801\u201d\u6309\u94ae\u3002 \u5982\u679c\u8fd9\u662f\u60a8\u6240\u9009MCU\u7cfb\u5217\uff08F4/F7/H7\uff09\u4e2d\u7684\u9996\u4e2a\u9879\u76ee\uff0c\u5219STM32CubeMX\u81ea\u52a8\u5efa\u8bae\u4e0b\u8f7d\u76f8\u5173STM32Cube\u56fa\u4ef6\u5305\u3002 \u63a5\u53d7\u8be5\u9009\u9879\uff0c\u4ee5\u83b7\u53d6\u4f9b\u4ee5\u540e\u4f7f\u7528\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx04.webp",noShadow:!1,width:"600",mdxType:"Figure"},"STM32CubeMX\u53ef\u4ee5\u4e0b\u8f7dSTM32Cube\u56fa\u4ef6"),(0,r.kt)("p",null,"\u5355\u51fb\u201c\u6253\u5f00\u9879\u76ee\u201d\uff0c\u4ee5\u6253\u5f00IDE\u4e2d\u7684\u9879\u76ee\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx05.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u9879\u76ee\u5df2\u751f\u6210"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx06.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u9879\u76ee\u5728IAR Embedded Workbench\u4e2d\u6253\u5f00"),(0,r.kt)("p",null,"STM32CubeMX\u751f\u6210\u7684\u9879\u76ee\u5305\u542b\u7279\u5b9aMCU\u542f\u52a8\u4ee3\u7801\u3001\u4e2d\u65ad\u77e2\u91cf\u8868\u3001\u7cfb\u7edf\u521d\u59cb\u5316\u4ee3\u7801\u4ee5\u53caMCU\u4e2d\u6240\u6709\u5916\u8bbe\u7684HAL\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u53ef\u901a\u8fc7IDE\u7f16\u8bd1\u548c\u8c03\u8bd5\u9879\u76ee\u3002 \u5728IAR\u4e2d\uff0c\u70b9\u51fb\u201c\u9879\u76ee\u201d->\u6765\u7f16\u8bd1\u9879\u76ee\uff0c\u70b9\u51fb\u201c\u9879\u76ee\u201d->\u6765\u8c03\u8bd5\u9879\u76ee\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx07.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u5728IAR Embedded Workbench\u4e2d\u8c03\u8bd5\u9879\u76ee"),(0,r.kt)("p",null,"\u8bbe\u7f6eIAR\u9879\u76ee\uff0c\u4f7f\u7528STLink\u8c03\u8bd5\u5668\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u5176\u4ed6\u8c03\u8bd5\u5668\uff0c\u8bf7\u5728IDE\u4e2d\u66f4\u6539\u9879\u76ee\u7684\u201c\u8c03\u8bd5\u5668\u201d\u5c5e\u6027\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/create/cubemx08.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u4e3b\u5faa\u73af\u7ee7\u7eed\u8fd0\u884c"),(0,r.kt)("p",null,"\u5728\u65e0\u64cd\u4f5c\u7cfb\u7edf\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u7684\u9879\u76ee\uff0cmain\u7684while\u5faa\u73af\u901a\u5e38\u5f88\u91cd\u8981\u3002 \u901a\u8fc7\u8bbe\u7f6e\u65ad\u70b9\u6765\u68c0\u67e5\u662f\u5426\u6267\u884c\u5230\u67d0\u4e2a\u4f4d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u5efa\u8bae\u6d4f\u89c8IDE\u4e2d\u7684\u9879\u76ee\uff0c\u4ee5\u719f\u6089\u4ee3\u7801\u7ed3\u6784\u3002 \u53e6\u5916\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u4e00\u4e0b\u4eceSystemInit\u5230main\u7684\u64cd\u4f5c\u6b65\u9aa4\u3002"),(0,r.kt)("h3",g({},{id:"user-code-sections"}),"\u7528\u6237\u4ee3\u7801\u6bb5"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\uff0c\u91cd\u8981\u7684\u662f\u5148\u7406\u89e3STM32CubeMX\u6240\u7528\u7684\u201c\u7528\u6237\u4ee3\u7801\u6bb5\u201d\u8fd9\u4e00\u6982\u5ff5\uff0c\u7136\u540e\u518d\u5f00\u59cb\u7f16\u8f91\u81ea\u5df1\u7684\u9879\u76ee\u3002 \u9879\u76ee\u4e2dCore/Src\u6587\u4ef6\u5939\u4e2d\u7684\u6240\u6709\u6e90\u6587\u4ef6\u90fd\u662f\u7531STM32CubeMX\u751f\u6210\u7684\u3002 \u5728\u60a8\u4ee5\u540e\u66f4\u6539STM32CubeMX\u4e2d\u7684\u9879\u76ee\u914d\u7f6e\u65f6\uff08\u5982\u4f7f\u80fdUART\uff09\uff0c\u5c06\u91cd\u65b0\u751f\u6210\u5176\u4e2d\u7684\u4e00\u4e9b\u6587\u4ef6\u3002 \u60a8\u53ef\u80fd\u4e5f\u5728\u5176\u4e2d\u7684\u4e00\u4e9b\u6587\u4ef6\u4e2d\u63d2\u5165\u4ee3\u7801\u3002 \u9664\u975e\u9075\u5faa\u4e0b\u9762\u7684\u89c4\u5219\uff0c\u5426\u5219\u5728\u5229\u7528STM32CubeMX\u91cd\u65b0\u751f\u6210\u9879\u76ee\u65f6\uff0c\u60a8\u7684\u7528\u6237\u4ee3\u7801\u5c06\u4e22\u5931\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ec5\u5728\u7528\u6237\u4ee3\u7801\u533a\u5199\u5165\u4ee3\u7801"))),(0,r.kt)("p",null,"\u5199\u5728\u7528\u6237\u4ee3\u7801\u533a\u4ee5\u5916\u7684\u4efb\u4f55\u4ee3\u7801\u90fd\u5c06\u88abSTM32CubeMX\u5220\u9664\u3002"),(0,r.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u793a\u4f8b\uff0c\u8ba9\u6211\u4eec\u770b\u4e00\u4e0bCore/Src/main.c\u4e2d\u7684\u524d\u51e0\u884c\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{3-5}","{3-5}":!0}),"int main(void)\n{\n  /* USER CODE BEGIN 1 */\n\n  /* USER CODE END 1 */\n\n\n  /* MCU Configuration--------------------------------------------------------*/\n\n  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */\n  HAL_Init();\n  ...\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728main\u51fd\u6570\u7684\u5f00\u5934\u63d2\u5165\u4ee3\u7801\uff0c\u5fc5\u987b\u5c06\u5176\u653e\u5728\u7528\u6237\u4ee3\u7801\u5f00\u59cb1\u4e0e\u7528\u6237\u4ee3\u7801\u7ed3\u675f1\u4e4b\u95f4\u3002 \u5982\u679c\u5c06\u4ee3\u7801\u653e\u5728\u6b64\u533a\u4e4b\u5916\uff0c\u5b83\u5c06\u88abSTM32CubeMX\u5220\u9664\u3002"),(0,r.kt)(u.Z,{mdxType:"Caution"},"\u8bf7\u52ff\u5728\u7528\u6237\u4ee3\u7801\u533a\u4ee5\u5916\u5199\u4ee3\u7801\u3002 \u5f53STM32CubeMX\u751f\u6210\u4ee3\u7801\u65f6\uff0c\u5c06\u5220\u9664\u6b64\u7c7b\u4ee3\u7801\u3002"),(0,r.kt)("h2",g({},{id:"further-reading"}),"\u66f4\u591a\u8bfb\u7269"),(0,r.kt)("p",null,"\u6b64\u5904\u7684\u94fe\u63a5\u6587\u6863\u5305\u542b\u6709\u5173CubeMX\u7684\u66f4\u591a\u4fe1\u606f\uff1a"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX\u7528\u6237\u624b\u518c")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.st.com/en/development-tools/stm32cubeide.html#resource",mdxType:"Link"},"STM32CubeIDE\u8d44\u6e90")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",mdxType:"Link"},"\u6709\u5173STM32CubeMX\u548cSTM32Cube\u7684\u516c\u5f00\u5728\u7ebf\u8bfe\u7a0b")))))}C.isMDXComponent=!0}}]);