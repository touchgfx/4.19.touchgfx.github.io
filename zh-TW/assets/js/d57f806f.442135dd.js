"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2400],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||s[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},85098:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return g},toc:function(){return b},default:function(){return k}});var r=n(3905),o=n(44035),i=n(93054),a=n(22425),l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&h(e,n,t[n]);return e};const f={id:"09-touch-controller",title:"9. \u89f8\u63a7\u63a7\u5236\u5668",sidebar_label:"9. \u89f8\u63a7\u63a7\u5236\u5668"},v=void 0,g={unversionedId:"development/board-bring-up/how-to/09-touch-controller",id:"development/board-bring-up/how-to/09-touch-controller",isDocsHomePage:!1,title:"9. \u89f8\u63a7\u63a7\u5236\u5668",description:"Motivation",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/09-touch-controller.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/09-touch-controller",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/09-touch-controller",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"09-touch-controller",title:"9. \u89f8\u63a7\u63a7\u5236\u5668",sidebar_label:"9. \u89f8\u63a7\u63a7\u5236\u5668"},sidebar:"docs",previous:{title:"8. \u786c\u9ad4\u52a0\u901f\u5668",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/08-hardware-acceleration"},next:{title:"10. \u6309\u9215",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/10-physical-buttons"}},b=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Goal",id:"goal",children:[{value:"Verification",id:"verification",children:[],level:3}],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Do",id:"do",children:[{value:"Performance is as expected",id:"performance-is-as-expected",children:[],level:3}],level:2}],y={toc:b};function k(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),h),c(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"motivation"}),"Motivation"),(0,r.kt)("p",null,"\u5fc5\u9808\u80fd\u5920\u5f9e\u89f8\u63a7\u63a7\u5236\u5668\u8b80\u53d6\u89f8\u63a7\u5ea7\u6a19\uff0c\u4ee5\u4fbf\u4f7f\u7528\u8005\u8207\u61c9\u7528\u7a0b\u5f0f\u9032\u884c\u4e92\u52d5\u3002 \u6b64\u8655\u958b\u767c\u7684\u7a0b\u5f0f\u78bc\u5c07\u88ab\u7528\u65bc\u4ee5\u5f8c\u958b\u767cTouchGFX\u62bd\u8c61\u5c64\u3002"),(0,r.kt)(i.Z,{mdxType:"Note"},"\u5982\u679c\u60a8\u7684\u958b\u767c\u677f\u6c92\u6709\u89f8\u63a7\u63a7\u5236\u5668\uff0c\u8acb\u8df3\u904e\u8a72\u6b65\u3002"),(0,r.kt)("h2",m({},{id:"goal"}),"Goal"),(0,r.kt)("p",null,"\u6b64\u6b65\u9a5f\u7684\u76ee\u6a19\u662f\u78ba\u4fdd\u5f9e\u986f\u793a\u5668\u7684\u89f8\u63a7\u63a7\u5236\u5668\u53ef\u4ee5\u8b80\u53d6\u89f8\u6478\u5ea7\u6a19\u3002"),(0,r.kt)("h3",m({},{id:"verification"}),"Verification"),(0,r.kt)("p",null,"Here are the verification points for this section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Verification Point"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Rationale"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5df2\u8a2d\u5b9a\u89f8\u63a7\u63a7\u5236\u5668\u8207MCU"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"MCU\u5fc5\u9808\u8a2d\u5b9a\u70ba\u900f\u904eI2C\u7b49\u8b80\u53d6\u89f8\u63a7\u63a7\u5236\u5668\u8cc7\u8a0a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u53ef\u8b80\u53d6\u89f8\u63a7\u63a7\u5236\u5668\u66ab\u5b58\u5668"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"TouchGFX\u62bd\u8c61\u5c64\u53ef\u4f7f\u7528\u6b64\u7a0b\u5f0f\u78bc\u5f9e\u63a7\u5236\u5668\u7372\u53d6\u89f8\u63a7\u5ea7\u6a19\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8b80\u53d6\u64cd\u4f5c\u6309\u9810\u671f\u9032\u884c"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8f2a\u8a62\u662f\u61c9\u7528\u7a0b\u5f0f\u6e32\u67d3\u7b97\u5716\u6642\u9593\u7684\u4e00\u90e8\u5206\u3002 \u5982\u679c\u89f8\u63a7\u8f2a\u8a62\u82b1\u8cbb\u7684\u6642\u9593\u592a\u9577\uff0c\u5247\u61c9\u5c07\u5176\u79fb\u81f3\u5176\u4ed6\u57f7\u884c\u7dd2\uff0c\u6216\u7522\u751f\u4e2d\u65b7\u3002")))),(0,r.kt)("h2",m({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e36\u89f8\u63a7\u63a7\u5236\u5668\u7684\u986f\u793a\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u5f9e\u89f8\u63a7\u63a7\u5236\u5668\u8b80\u53d6\u8cc7\u6599\u7684\u9a45\u52d5\u7a0b\u5f0f")),(0,r.kt)("h2",m({},{id:"do"}),"Do"),(0,r.kt)("p",null,"\u6b64\u6b65\u9a5f\u5305\u542b\u5169\u500b\u5143\u7d20\uff1a\u57fa\u65bc\u89f8\u63a7\u63a7\u5236\u5668\u7684\u901a\u8a0a\u9700\u6c42\u5c0dMCU\u9032\u884c\u8a2d\u5b9a\uff0c\u540c\u6642\u7de8\u5beb\u9a45\u52d5\u7a0b\u5f0f\u5be6\u73feMCU\u8207\u89f8\u63a7\u63a7\u5236\u5668\u7684\u901a\u8a0a\u3002"),(0,r.kt)("p",null,"\u5927\u591a\u6578\u89f8\u63a7\u63a7\u5236\u5668\u9023\u63a5\u81f3I2C\u532f\u6d41\u6392\u3002 The I2C communication is configured in STM32CubeMX under Connectivity -> I2C1:"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/touch/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9aI2C"),(0,r.kt)("p",null,"\u8a31\u591aSTM32 MCU\u5177\u6709\u4e0d\u6b62\u4e00\u500bI2C\u63a7\u5236\u5668\uff0c\u56e0\u6b64\u8acb\u9078\u64c7\u4e00\u500b\u9023\u63a5\u81f3\u89f8\u63a7\u63a7\u5236\u5668\u3002  \u53e6\u5916\uff0c\u8acb\u8a18\u5f97\u8a2d\u5b9a\u76f8\u95dc\u7684GPIO\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6c92\u6709\u7528\u65bc\u89f8\u63a7\u63a7\u5236\u5668\u7684\u9a45\u52d5\u7a0b\u5f0f\uff0c\u5247\u9700\u8981\u5f9e\u982d\u958b\u59cb\u7de8\u5beb\u3002 The STM32Cube Firmware for your MCU contains examples for I2C communication. \u9019\u4e9b\u53ef\u4f5c\u70ba\u8d77\u9ede\u3002 \u6839\u64da\u89f8\u6478\u63a7\u5236\u5668\u7684\u8cc7\u6599\u624b\u518a\uff0c\u78ba\u8a8d\u901a\u904e\u8b80\u53d6\u54ea\u4e9b\u66ab\u5b58\u5668\u53ef\u4ee5\u7372\u53d6\u89f8\u63a7\u5ea7\u6a19\u3002 \u9996\u5148\u8981\u6aa2\u67e5\u7684\u662f\u89f8\u6478\u63a7\u5236\u5668\u7684I2C\u4f4d\u5740\uff0c\u7136\u5f8c\u8b80\u53d6\u300c\u8a2d\u5099ID\u300d\u5bc4\u5b58\u5668\uff0c\u4ee5\u9032\u884c\u6e2c\u8a66\u3002"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u958b\u767c\u9a45\u52d5\u7a0b\u5f0f\u78ba\u4fddI2C\u6b63\u5e38\u904b\u884c\uff0c\u7a0d\u5f8c\u8207TouchGFX\u6574\u5408\u6642\u5c07\u7528\u5230\u6b64\u51fd\u6578\u3002 \u5982\u679c\u6709\u89f8\u63a7\uff0c\u51fd\u6578\u61c9\u8fd4\u56deTrue\u4e26\u63d0\u4f9b\u5ea7\u6a19\uff0c\u5426\u5247\u8fd4\u56deFalse\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7bc4\u4f8b\u986f\u793a\u6b64\u4ee3\u78bc\u7684\u6846\u67b6\uff0c\u9a45\u52d5\u7a0b\u5f0f\u78bc\u88ab\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"myTouchController_GetState"),"\u62bd\u8c61\u5316\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"    uint16_t x;\n    uint16_t y;\n\n    TouchControllerState state;\n    if (myTouchController_GetState(&state))\n    {\n        x = state.touchY;\n        y = state.touchX;\n        //break point here\n    }\n")),(0,r.kt)("p",null,"\u501f\u7531\u9664\u932f\u5668\u6aa2\u67e5\u662f\u5426\u53ef\u4ee5\u5f9e\u89f8\u63a7\u63a7\u5236\u5668\u63a5\u6536\u5230\u6b63\u78ba\u7684x\u503c\u548cy\u503c\u3002"),(0,r.kt)("p",null,"\u4e00\u4e9b\u89f8\u63a7\u63a7\u5236\u5668\u80fd\u5920\u5831\u544a\u591a\u500b\u89f8\u63a7\u9ede\u3002 TouchGFX\u4e0d\u652f\u63f4\u6b64\u529f\u80fd\uff0c\u6b64\u8655\u5ffd\u7565\u3002 \u901a\u5e38\uff0c\u60a8\u53ea\u9700\u9078\u64c7\u7b2c\u4e00\u500b\u63a5\u89f8\u9ede\u3002"),(0,r.kt)("p",null,'"TouchGFX AL\u958b\u767c"\u6587\u7ae0',(0,r.kt)("a",m({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-architecture"}),"\u62bd\u8c61\u5c64"),"\u89e3\u91cb\u4e86\u5982\u4f55\u5c07\u9019\u4e9b\u503c\u767c\u9001\u81f3TouchGFX\u3002"),(0,r.kt)("h3",m({},{id:"performance-is-as-expected"}),"Performance is as expected"),(0,r.kt)("p",null,"\u5982\u679c\u89f8\u63a7\u7a0b\u5f0f\u78bc\u8207TouchGFX\u61c9\u7528\u7a0b\u5f0f\u5728\u76f8\u540c\u7684\u7dda\u7a0b\u4e2d\u57f7\u884c\uff0c\u5247\u89f8\u6478\u63a1\u6a23\u53ef\u4ee5\u57281ms\u5167\u5b8c\u6210\u3002 \u5982\u679c\u901f\u5ea6\u4e0d\u5920\u5feb\uff0c\u53ef\u8003\u616e\u5728\u5f8c\u671f\u5c07\u7a0b\u5f0f\u78bc\u5206\u70ba\u7368\u7acb\u7684\u4efb\u52d9\u3002"))}k.isMDXComponent=!0}}]);