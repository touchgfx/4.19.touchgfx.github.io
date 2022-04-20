"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1342],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=l},88400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return A},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return k}});var r=n(3905),a=n(44035),i=n(93054),l=n(22425),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&s(e,n,t[n]);return e};const g={id:"04-enable-external-ram",title:"4. External RAM",sidebar_label:"4. External RAM"},f=void 0,b={unversionedId:"development/board-bring-up/how-to/04-enable-external-ram",id:"development/board-bring-up/how-to/04-enable-external-ram",title:"4. External RAM",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/04-enable-external-ram.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/04-enable-external-ram",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/04-enable-external-ram",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"04-enable-external-ram",title:"4. External RAM",sidebar_label:"4. External RAM"},sidebar:"docs",previous:{title:"3. Display with framebuffer in internal RAM",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/03-display-internal"},next:{title:"5. Display with framebuffer in external RAM",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/05-display-external"}},v={},k=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"\u9032\u4e00\u6b65\u8a2d\u5b9a",id:"further-configuration",level:3},{value:"\u6e2c\u8a66RAM",id:"testing-the-ram",level:3},{value:"\u6e2c\u8a66RAM\u5728\u9664\u932f\u5668\u4e2d\u53ef\u898b\u3002",id:"test-ram-is-visible-in-the-debugger",level:4},{value:"RAM\u5728\u6574\u500b\u7bc4\u570d\u5167\u53ef\u8b80\u53ef\u5beb",id:"ram-is-readable-and-writeable-in-the-whole-range",level:4},{value:"\u6027\u80fd\u7b26\u5408\u9810\u671f",id:"performance-is-as-expected",level:4}],M={toc:k};function A(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},M),s),c(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"Motivation"),(0,r.kt)("p",null,"\u5728\u6b64\u6b65\u9a5f\u4e2d\uff0c\u6211\u5011\u5c07\u4f7f\u80fd\u81f4\u80fd\u5916\u90e8SDRAM\u3002  \u5716\u5f62\u61c9\u7528\u901a\u5e38\u9700\u8981\u5916\u90e8RAM\uff0c\u56e0\u70ba\u5728\u8a31\u591a\u89e3\u6790\u5ea6\u4e0b\u5f71\u50cf\u7de9\u885d\u5340\u6703\u904e\u5927\u5c0e\u81f4\u800c\u5c0e\u81f4\u7121\u6cd5\u4f7f\u7528\u5167\u90e8RAM\u3002 \u67d0\u4e9b\u61c9\u7528\u53ef\u80fd\u4f7f\u7528\u5169\u5230\u4e09\u500b\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u56e0\u6b64\u66f4\u52a0\u9700\u8981\u5916\u90e8RAM\u3002"),(0,r.kt)(i.Z,{mdxType:"Note"},"\u5982\u679c\u6240\u7528\u958b\u767c\u677f\u4e0d\u5c0d\u5916\u64f4\u5145RAM\uff0c\u8acb\u8df3\u904e\u6b64\u6b65\u3002"),(0,r.kt)("p",null,"\u7576\u5f71\u50cf\u7de9\u885d\u5340\u8981\u653e\u5728\u5916\u90e8RAM\u6642\uff0c\u78ba\u4fdd\u5916\u90e8RAM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u8b80\u53ef\u5beb\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u6240\u9700\u7684\u901f\u5ea6\uff08\u901a\u5e38\u70ba\u6700\u5927\u901f\u5ea6\uff09\u904b\u884c\u3002")),(0,r.kt)("h2",h({},{id:"goal"}),"Goal"),(0,r.kt)("p",null,"\u672c\u7bc0\u76ee\u7684\u5728\u555f\u7528\u5916\u90e8RAM\uff0c\u4e26\u5f9e\u4e2d\u8b80\u53d6\u548c\u5beb\u5165\u6578\u64da\u3002"),(0,r.kt)("h3",h({},{id:"verification"}),"Verification"),(0,r.kt)("p",null,"Here are the verification points for this section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Verification Point"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Rationale"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u53ef\u8b80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u53ef\u7528\u65bc\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u53ef\u5beb"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u53ef\u7528\u65bc\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u6548\u80fd"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u4f7f\u7528\u5916\u90e8RAM\u70ba\u5f71\u50cf\u7de9\u885d\u5340\u6642\uff0c\u5716\u5f62\u8655\u7406\u6548\u80fd\u53ef\u63a5\u53d7")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("p",null,"The following are the prerequisites for this step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u95dcRAM\u7684\u8cc7\u8a0a\uff0c\u901a\u5e38\u70ba\u8cc7\u6599\u624b\u518a"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u95dcMCU\u8207\u5916\u90e8RAM\u4e4b\u9593\u7684\u9023\u63a5\u7684\u8cc7\u8a0a")),(0,r.kt)("h2",h({},{id:"do"}),"Do"),(0,r.kt)("p",null,"The external SDRAM controller is configured in STM32CubeMX under Connectivity -> FMC -> SDRAM1:"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9aSDRAM"),(0,r.kt)("p",null,"AHB\u6642\u9418\uff08HCLK\uff09\u662fFMC\u8a18\u61b6\u9ad4\u63a7\u5236\u5668\u7684\u53c3\u8003\u6642\u9418\u3002 \u6aa2\u67e5\u300c\u6642\u9418\u8a2d\u5b9a\u300d\u4e0b\u7684\u6642\u9418\u983b\u7387\uff0c\u4e26\u4f7f\u7528\u8a72\u983b\u7387\u8a08\u7b97\u5404\u7a2eSDRAM\u6642\u9418\u9031\u671f\u3002"),(0,r.kt)("p",null,"\u8acb\u8a18\u5f97\u8a2d\u5b9a\u6240\u6709\u7528\u65bcSDRAM\u7684GPIO\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9aSDRAM GPIO"),(0,r.kt)("h3",h({},{id:"further-configuration"}),"\u9032\u4e00\u6b65\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u5c0d\u65bc\u67d0\u4e9bRAM\u6676\u7247\uff0c\u9084\u5fc5\u9808\u9032\u884c\u5176\u4ed6\u7279\u5b9a\u7684\u914d\u7f6e\u3002 This cannot be configured in STM32CubeMX, but must be done in the C code. The STM32Cube HAL contains functions to send commands to the device. \u4e0b\u9762\u70ba\u4e00\u500b\u7bc4\u4f8b\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"FMC_SDRAM_CommandTypeDef Command;\n\n/* Step 1: Configure a clock configuration enable command */\nCommand.CommandMode            = FMC_SDRAM_CMD_CLK_ENABLE;\nCommand.CommandTarget          = FMC_SDRAM_CMD_TARGET_BANK1;\nCommand.AutoRefreshNumber      = 1;\nCommand.ModeRegisterDefinition = 0;\n\n/* Send the command */\nHAL_SDRAM_SendCommand(&hsdram1, &Command, SDRAM_TIMEOUT);\n")),(0,r.kt)("h3",h({},{id:"testing-the-ram"}),"\u6e2c\u8a66RAM"),(0,r.kt)("p",null,"\u914d\u7f6e\u5916\u90e8RAM\u5f8c\uff0c\u52d9\u5fc5\u5c0d\u5176\u9032\u884c\u6e2c\u8a66\u3002 \u6211\u5011\u81f3\u5c11\u61c9\u6e2c\u8a66\u4ee5\u4e0b\u5167\u5bb9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAM\u53ef\u898b\u65bc\u9664\u932f\u5668\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"RAM\u5728\u6574\u500b\u7bc4\u570d\u5167\u53ef\u8b80\u53ef\u5beb"),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u7b26\u5408\u9810\u671f")),(0,r.kt)("p",null,"\u8a18\u61b6\u9ad4\u63a7\u5236\u5668\u6839\u64da\u5916\u90e8\u8a18\u61b6\u9ad4\u7684\u985e\u578b\u4f7f\u7528\u5176\u56fa\u5b9a\u4f4d\u5740\u6620\u5c04\u3002 \u901a\u904e\u9019\u4e9b\u8f03\u7c21\u55ae\u7684\u6e2c\u8a66\u53ef\u80fd\u5f88\u96e3\u770b\u5230\u9019\u4e00\u9ede\uff0c\u4f46\u9019\u5728\u986f\u793a\u5668\u4e0a\u53ef\u4ee5\u76f4\u89c0\u5730\u611f\u53d7\u5230\u3002  SDRAM\u901a\u5e38\u6620\u5c04\u52300xC0000000\uff08\u5b58\u5132\u5340\u57df1\uff09\u62160xD0000000\uff08\u5b58\u5132\u5340\u57df2\uff09\u3002"),(0,r.kt)("h4",h({},{id:"test-ram-is-visible-in-the-debugger"}),"\u6e2c\u8a66RAM\u5728\u9664\u932f\u5668\u4e2d\u53ef\u898b\u3002"),(0,r.kt)("p",null,"\u4f7f\u80fdRAM\u5f8c\u7684\u7b2c\u4e00\u500b\u6e2c\u8a66\u70ba\u7d93\u7531\u8abf\u8a66\u5668\u8a2a\u554f\u5b83\u3002 \u9019\u6a23\u5c31\u53ef\u4ee5\u8f15\u9b06\u78ba\u8a8d\u662f\u5426\u53ef\u4ee5\u8b80\u5beb\u8a18\u61b6\u9ad4\u3002 \u53ea\u9700\u4f7f\u7528\u8a18\u61b6\u9ad4\u8b80\u53d6\u5668\u958b\u555f\u4ee5\u4e0b\u4f4d\u5740\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/iar-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u4f7f\u7528\u9664\u932f\u5668\u4e2d0xD0000000\u7684\u5132\u5b58\u5340\u6bb5\u4ee5\u6e2c\u8a66\u5132\u5b58\u5340\u57df2"),(0,r.kt)("h4",h({},{id:"ram-is-readable-and-writeable-in-the-whole-range"}),"RAM\u5728\u6574\u500b\u7bc4\u570d\u5167\u53ef\u8b80\u53ef\u5beb"),(0,r.kt)("p",null,"\u4e0b\u4e00\u500b\u6e2c\u8a66\u70ba\u7de8\u5beb\u5c0f\u7a0b\u5f0f\uff0c\u4e26\u5c07\u66f4\u591a\u6578\u64da\u5beb\u5165\u5916\u90e8\u8a18\u61b6\u9ad4\u3002 \u6700\u597d\u6e2c\u8a66\u6574\u500b\u8a18\u61b6\u9ad4\u3002 \u4ee5\u4e0b\u662f\u8d77\u9ede\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = i;\n}\n")),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u5728\u8abf\u8a66\u5668\u4e2d\u518d\u6b21\u6aa2\u67e5\u8a18\u61b6\u9ad4\u3002 \u9019\u53ef\u4ee5\u986f\u793a\u67d0\u4e9b\u985e\u578b\u7684\u932f\u8aa4\uff0c\u4f8b\u5982\uff0c\u67d0\u4e9b\u4f4d\u5740\u5f15\u8173\u662f\u5426\u672a\u9023\u63a5\u6216\u672a\u4ea4\u63db\u3002 \u60a8\u9084\u61c9\u5617\u8a66\u4e0d\u540c\u5927\u5c0f\u7684\u503c\u3002 \u50c5\u50c5\u5beb\u5165\u5c0f\u6578\u4f4d\uff08\u59820\u30011\u30012\u30013\uff09\u5f80\u5f80\u7121\u6cd5\u986f\u793a\u67d0\u4e9b\u6578\u64da\u5f15\u8173\u662f\u5426\u6b63\u5e38\u9023\u63a5\u6216\u640d\u58de\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u900f\u904e\u7c21\u55ae\u7a0b\u5f0f\u4f86\u8b80\u53d6\u8a18\u61b6\u9ad4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//read external RAM\nfor(int i = 0; i < size; i++)\n{\n    ASSERT(externalRAM[i] == i, "external RAM not as expected");\n}\n')),(0,r.kt)("p",null,"\u8acb\u8a18\u4f4f\uff0c\u6b64\u985e\u6e2c\u8a66\u7121\u6cd5\u78ba\u5b9a\u4f4d\u5740\u662f\u5426\u932f\u8aa4\u3002"),(0,r.kt)("p",null,"\u6e2c\u8a66\u6240\u6709\u5b58\u5132\u55ae\u5143\u3002  \u8981\u9ebc\u900f\u904e\u57f7\u884c\u66f4\u9577\u7684\u8ff4\u5708\uff0c\u8981\u9ebc\u66f4\u6539\u8d77\u59cb\u4f4d\u5740\u3002"),(0,r.kt)("h4",h({},{id:"performance-is-as-expected"}),"\u6027\u80fd\u7b26\u5408\u9810\u671f"),(0,r.kt)("p",null,"\u6211\u5011\u73fe\u5728\u9700\u8981\u6e2c\u8a66\u5916\u90e8RAM\u7684\u6027\u80fd\u3002  \u7576\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u65bc\u5916\u90e8\u8a18\u61b6\u9ad4\u4e2d\u6642\uff0c\u6027\u80fd\u5f88\u91cd\u8981\u3002 \u7de9\u6162\u7684\u8a18\u61b6\u9ad4\u6703\u4f7f\u7cfb\u7d71\u7684\u5716\u5f62\u8655\u7406\u6027\u80fd\u964d\u4f4e\u3002"),(0,r.kt)("p",null,"\u6e2c\u8a66\u8b80\u53d6\u3001\u5beb\u5165\u548c\u4fee\u6539RAM\u7684\u901f\u5ea6\u3002  \u901a\u5e38\uff0c\u5716\u5f62\u61c9\u7528\u6703\u5c07\u5927\u91cf\u7684\u6578\u64da\u5f9e\u4e00\u500b\u8a18\u61b6\u9ad4\u8907\u88fd\u5230\u53e6\u4e00\u500b\u8a18\u61b6\u9ad4\u3002 \u5728\u7e6a\u5716\u64cd\u4f5c\u671f\u9593\u5c07\u5927\u91cf\u5beb\u5165\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u800c\u5728\u50b3\u8f38\u81f3\u986f\u793a\u5668\u6642\u5c07\u57f7\u884c\u5927\u91cf\u8b80\u53d6\u64cd\u4f5c\u3002 \u6211\u5011\u53ef\u901a\u904e\u6e2c\u8a66\u7a0b\u5f0f\u4f86\u6a21\u64ec\u9019\u4e9b\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"volatile uint32_t *externalRAM = 0xC000000;\nuint32_t sourcedata[10000];\nconst uint32_t size = 10000;\n\nint begin = HAL_GetTick();\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = sourcedata[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"int begin = HAL_GetTick();\n//Read external RAM\nfor(int i = 0; i < size; i++)\n{\n    sourcedata[i] = externalRAM[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"\u7576\u5728\u80cc\u666f\u4e0a\u6df7\u5408\u5716\u5f62\u6642\uff0c\u5716\u5f62\u8655\u7406\u8edf\u9ad4\u53ef\u5728\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u8b80\u53d6\u548c\u5beb\u5165\u6578\u64da\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"//Time modifying external RAM\nint begin = HAL_GetTick();\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] += 2;\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"\u6839\u64da\u60a8\u7684\u8a18\u61b6\u9ad4\u901f\u5ea6\u548c\u60f3\u8981\u7684\u7cbe\u78ba\u5ea6\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u8ff4\u5708\u6e2c\u8a66100\u6b21\uff0c\u4ee5\u4f7f\u7d50\u679c\u66f4\u52a0\u53ef\u9760\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5916\u90e8RAM\u6642\u9418\u904e\u5feb\uff0c\u5247\u53ef\u80fd\u5728\u8b80\u53d6\u6216\u5beb\u5165\u64cd\u4f5c\u671f\u9593\u5c0e\u81f4\u932f\u8aa4\u3002 \u901a\u904e\u9019\u4e9b\u8f03\u7c21\u55ae\u7684\u6e2c\u8a66\u53ef\u80fd\u5f88\u96e3\u770b\u5230\u9019\u4e00\u9ede\uff0c\u4f46\u9019\u5728\u986f\u793a\u5668\u4e0a\u53ef\u4ee5\u76f4\u89c0\u5730\u611f\u53d7\u5230\u3002"))}A.isMDXComponent=!0}}]);