"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9013],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=a},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},11290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return k},default:function(){return C},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),i=n(29415),a=n(39130),l=n(22425),c=n(70814),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&g(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&g(e,n,t[n]);return e};const f={id:"01-create-project",title:"1. \u521b\u5efa\u9879\u76ee",sidebar_label:"1. \u521b\u5efa\u9879\u76ee"},k=void 0,v={unversionedId:"development/board-bring-up/how-to/01-create-project",id:"development/board-bring-up/how-to/01-create-project",title:"1. \u521b\u5efa\u9879\u76ee",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/01-create-project",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/01-create-project",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-create-project",title:"1. \u521b\u5efa\u9879\u76ee",sidebar_label:"1. \u521b\u5efa\u9879\u76ee"},sidebar:"docs",previous:{title:"\u542f\u52a8\u5f00\u53d1\u677f\u4ecb\u7ecd",permalink:"/4.19/zh-CN/docs/development/board-bring-up/board-introduction"},next:{title:"2. CPU\u8fd0\u884c",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/02-cpu-running"}},w={},y=[{value:"\u52a8\u673a",id:"motivation",level:2},{value:"\u76ee\u6807",id:"goal",level:2},{value:"\u9a8c\u8bc1",id:"verification",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u6267\u884c",id:"do",level:2},{value:"\u7528\u6237\u4ee3\u7801\u6bb5",id:"user-code-sections",level:3},{value:"\u66f4\u591a\u8bfb\u7269",id:"further-reading",level:2}],M={toc:y};function C(e){var t,n=e,{components:u}=n,g=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},M),g),p(t,d({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("h2",b({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"In this section we will use STM32CubeMX to generate a working project for a specific MCU. \u8be5\u9879\u76ee\u5c06\u4f5c\u4e3a\u672c\u4f7f\u7528\u6307\u5357\u4e2d\u7684\u5176\u4f59\u6b65\u9aa4\u7684\u57fa\u7840\u3002"),(0,r.kt)("p",null,"We will refine the project using STM32CubeMX in coming steps and write and integrate code to make all required peripherals work."),(0,r.kt)("p",null,"\u672c\u9879\u76ee\u5c06\u957f\u671f\u5b58\u5728\u4ee5\u4f9b\u53cd\u590d\u4f7f\u7528\u3002 \u60a8\u73b0\u5728\u5e94\u786e\u5b9a\u4e00\u79cd\u7b56\u7565\uff0c\u4f7f\u5f97\u4e0d\u540c\u7684\u7248\u672c\u4fdd\u6301\u53ef\u7528\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u8fd4\u56de\u5e76\u518d\u6b21\u8fd0\u884c\u3002 \u6216\u8005\u5728\u65b0\u786c\u4ef6\u4e0a\u8fdb\u884c\uff0c\u6216\u8005\u53ea\u662f\u91cd\u65b0\u68c0\u67e5\u786c\u4ef6\u3002"),(0,r.kt)("p",null,"\u4e5f\u8bb8\u60a8\u9700\u8981\u8bb8\u591a\u5c0f\u578b\u6d4b\u8bd5\u7a0b\u5e8f\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8be5\u9879\u76ee\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u8d77\u70b9\u3002"),(0,r.kt)("h2",b({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"The goal is to create a project in STM32CubeMX that can be flashed to your board and executed. \u5982\u679c\u60a8\u6709\u5e26\u8c03\u8bd5\u5668\u7684IDE (\u5982STM32CubeIDE\u6216IAR Embedded Workbench) \uff0c\u5219\u8fd8\u5e94\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u8c03\u8bd5\u5e76\u9010\u6b65\u5b8c\u6210MCU\u4e0a\u7684\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u8c03\u8bd5\u5668\uff0c\u5219\u5e94\u627e\u5230\u4e00\u79cd\u4ece\u9879\u76ee\u7684\u5404\u4e2a\u4f4d\u7f6e\u6253\u5370\u51fa\u8c03\u8bd5\u8bed\u53e5\u7684\u65b9\u6cd5\u3002 \u5982 \u4e32\u884c\u7aef\u53e3\u3002"),(0,r.kt)("h3",b({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",b({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u5728IDE\u4e2d\u6253\u5f00\u9879\u76ee"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"The project was generated correctly by STM32CubeMX and can be used as starting point for further board bring up development.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u9879\u76ee\u7f16\u8bd1"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u5bf9\u9879\u76ee\u8fdb\u884c\u9a71\u52a8\u7a0b\u5e8f\u53ca\u5305\u542b\u7c7b\u8def\u5f84\u7684\u6b63\u786e\u8bbe\u7f6e\u3002 \u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u66f4\u591a\u4ee3\u7801\u5e76\u91cd\u590d\u7f16\u8bd1\u8be5\u9879\u76ee\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u547d\u4e2d\u65ad\u70b9"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u9879\u76ee\u53ef\u4ee5\u8c03\u8bd5\u8fd0\u884c\u5e76\u5728\u65ad\u70b9\u5904\u505c\u6b62\u3002 \u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u9879\u76ee\u72b6\u6001\u5e76\u8c03\u67e5\u9519\u8bef\u3002")))),(0,r.kt)("h2",b({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8eSTM32\u5f00\u53d1\u677f"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u7a0b/\u8c03\u8bd5\u63a5\u53e3 - ST-LINK\u3001JLINK\u6216\u7c7b\u4f3c\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX installed"),(0,r.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5IDE - STM32CubeIDE\u3001IAR Embedded Workbench\u3001Keil uVision\u6216\u7c7b\u4f3c\u8f6f\u4ef6")),(0,r.kt)("h2",b({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"We will now go through the steps of creating a new project in STM32CubeMX. \u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528STM32F429 MCU\u3002 \u5f53\u7136\uff0c\u60a8\u5e94\u5728\u786c\u4ef6\u4e0a\u9009\u62e9MCU\u3002"),(0,r.kt)("p",null,'In STM32CubeMX click "ACCESS TO MCU SELECTOR" in the "Start My Project from MCU":'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u521b\u5efa\u65b0\u9879\u76ee"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u57fa\u4e8eSTM32\u8bc4\u4f30\u5957\u4ef6\u542f\u52a8\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5982STM32F429\u63a2\u7d22\u677f\u3002 \u5982\u679c\u60a8\u7684\u786c\u4ef6\u8bbe\u8ba1\u57fa\u4e8e\u8bc4\u4f30\u5957\u4ef6\uff0c\u60a8\u53ef\u4ee5\u6216\u8bf4\u5e94\u5f53\u6267\u884c\u8be5\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u9009\u62e9\u76f8\u5173MCU\u3002 \u5728\u8fd9\u91cc\u6211\u4eec\u9009\u62e9STM32F429ZIT6U\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx02.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u9009\u62e9MCU"),(0,r.kt)("p",null,"\u8f6c\u5230\u201c\u9879\u76ee\u7ba1\u7406\u5668\u201d\u9009\u9879\uff0c\u5e76\u4e3a\u9879\u76ee\u547d\u540d\u3002 \u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u65b0\u7684\u9879\u76ee\u5b58\u50a8\u4f4d\u7f6e\u3002 \u5728\u201c\u5e94\u7528\u7ed3\u6784\u201d\u4e0b\uff0c\u9009\u62e9\u201c\u9ad8\u7ea7\u201d\u3002 \u5728\u201c\u5de5\u5177\u94fe/IDE\u201d\u4e0b\uff0c\u60a8\u5fc5\u987b\u9009\u62e9IDE\u3002 \u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9009\u62e9IAR\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx03.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u8bbe\u7f6e\u9879\u76ee\u540d\u79f0\u548cIDE"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u201c\u751f\u6210\u4ee3\u7801\u201d\u6309\u94ae\u3002 If this is your first project for the selected MCU family (F4/F7/H7) STM32CubeMX automatically proposes to download the relevant STM32Cube Firmware package. \u63a5\u53d7\u8be5\u9009\u9879\uff0c\u4ee5\u83b7\u53d6\u4f9b\u4ee5\u540e\u4f7f\u7528\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx04.png",noShadow:!1,width:"600",mdxType:"Figure"},"STM32CubeMX can download STM32Cube Firmware"),(0,r.kt)("p",null,"\u5355\u51fb\u201c\u6253\u5f00\u9879\u76ee\u201d\uff0c\u4ee5\u6253\u5f00IDE\u4e2d\u7684\u9879\u76ee\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx05.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u9879\u76ee\u5df2\u751f\u6210"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx06.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u9879\u76ee\u5728IAR Embedded Workbench\u4e2d\u6253\u5f00"),(0,r.kt)("p",null,"The project generated by STM32CubeMX contains startup code specific to the MCU, interrupt table, system initialisation code, and HAL drivers for all the peripherals in the MCU."),(0,r.kt)("p",null,"\u73b0\u5728\u53ef\u901a\u8fc7IDE\u7f16\u8bd1\u548c\u8c03\u8bd5\u9879\u76ee\u3002 \u5728IAR\u4e2d\uff0c\u70b9\u51fb\u201c\u9879\u76ee\u201d->\u6765\u7f16\u8bd1\u9879\u76ee\uff0c\u70b9\u51fb\u201c\u9879\u76ee\u201d->\u6765\u8c03\u8bd5\u9879\u76ee\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx07.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u5728IAR Embedded Workbench\u4e2d\u8c03\u8bd5\u9879\u76ee"),(0,r.kt)("p",null,"\u8bbe\u7f6eIAR\u9879\u76ee\uff0c\u4f7f\u7528STLink\u8c03\u8bd5\u5668\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u5176\u4ed6\u8c03\u8bd5\u5668\uff0c\u8bf7\u5728IDE\u4e2d\u66f4\u6539\u9879\u76ee\u7684\u201c\u8c03\u8bd5\u5668\u201d\u5c5e\u6027\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx08.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u4e3b\u5faa\u73af\u7ee7\u7eed\u8fd0\u884c"),(0,r.kt)("p",null,"\u5728\u65e0\u64cd\u4f5c\u7cfb\u7edf\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u7684\u9879\u76ee\uff0cmain\u7684while\u5faa\u73af\u901a\u5e38\u5f88\u91cd\u8981\u3002 \u901a\u8fc7\u8bbe\u7f6e\u65ad\u70b9\u6765\u68c0\u67e5\u662f\u5426\u6267\u884c\u5230\u67d0\u4e2a\u4f4d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u5efa\u8bae\u6d4f\u89c8IDE\u4e2d\u7684\u9879\u76ee\uff0c\u4ee5\u719f\u6089\u4ee3\u7801\u7ed3\u6784\u3002 \u53e6\u5916\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u4e00\u4e0b\u4eceSystemInit\u5230main\u7684\u64cd\u4f5c\u6b65\u9aa4\u3002"),(0,r.kt)("h3",b({},{id:"user-code-sections"}),"\u7528\u6237\u4ee3\u7801\u6bb5"),(0,r.kt)("p",null,'At this step it is important to understand the concept of "User Code sections" used by STM32CubeMX before you start editing your project. All of the source files in the Core/Src folder in your project are generated by STM32CubeMX. When you later change the project configuration in STM32CubeMX, e.g. to enable a UART, some of these files will be regenerated. \u60a8\u53ef\u80fd\u4e5f\u5728\u5176\u4e2d\u7684\u4e00\u4e9b\u6587\u4ef6\u4e2d\u63d2\u5165\u4ee3\u7801\u3002 Your code will be lost when STM32CubeMX regenerates the project unless you follow one single rule:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ec5\u5728\u7528\u6237\u4ee3\u7801\u533a\u5199\u5165\u4ee3\u7801"))),(0,r.kt)("p",null,"Any code that you write outside of a User Code section will be deleted by STM32CubeMX."),(0,r.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u793a\u4f8b\uff0c\u8ba9\u6211\u4eec\u770b\u4e00\u4e0bCore/Src/main.c\u4e2d\u7684\u524d\u51e0\u884c\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-5}","{3-5}":!0}),"int main(void)\n{\n  /* USER CODE BEGIN 1 */\n\n  /* USER CODE END 1 */\n\n\n  /* MCU Configuration--------------------------------------------------------*/\n\n  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */\n  HAL_Init();\n  ...\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728main\u51fd\u6570\u7684\u5f00\u5934\u63d2\u5165\u4ee3\u7801\uff0c\u5fc5\u987b\u5c06\u5176\u653e\u5728\u7528\u6237\u4ee3\u7801\u5f00\u59cb1\u4e0e\u7528\u6237\u4ee3\u7801\u7ed3\u675f1\u4e4b\u95f4\u3002 If you put code outside this block it will be deleted by STM32CubeMX."),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u8bf7\u52ff\u5728\u7528\u6237\u4ee3\u7801\u533a\u4ee5\u5916\u5199\u4ee3\u7801\u3002 Such code will be removed when STM32CubeMX generates code."),(0,r.kt)("h2",b({},{id:"further-reading"}),"\u66f4\u591a\u8bfb\u7269"),(0,r.kt)("p",null,"\u6b64\u5904\u7684\u94fe\u63a5\u6587\u6863\u5305\u542b\u6709\u5173CubeMX\u7684\u66f4\u591a\u4fe1\u606f\uff1a"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(a.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX\u7528\u6237\u624b\u518c")),(0,r.kt)("li",null,(0,r.kt)(a.Z,{to:"https://www.st.com/en/development-tools/stm32cubeide.html#resource",mdxType:"Link"},"STM32CubeIDE\u8d44\u6e90")),(0,r.kt)("li",null,(0,r.kt)(a.Z,{to:"https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",mdxType:"Link"},"\u6709\u5173STM32CubeMX\u548cSTM32Cube\u7684\u516c\u5f00\u5728\u7ebf\u8bfe\u7a0b")))))}C.isMDXComponent=!0}}]);