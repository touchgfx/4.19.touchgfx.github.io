"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9168],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},32180:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return b},metadata:function(){return g},toc:function(){return v},default:function(){return y}});var r=n(3905),a=n(44035),o=n(93054),i=n(22425),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"06-flash-external-addressable",title:"6. \u5916\u90e8\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4",sidebar_label:"6. \u5916\u90e8\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4"},b=void 0,g={unversionedId:"development/board-bring-up/how-to/06-flash-external-addressable",id:"development/board-bring-up/how-to/06-flash-external-addressable",isDocsHomePage:!1,title:"6. \u5916\u90e8\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4",description:"Motivation",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/06-flash-external-addressable.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/06-flash-external-addressable",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/06-flash-external-addressable",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"06-flash-external-addressable",title:"6. \u5916\u90e8\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4",sidebar_label:"6. \u5916\u90e8\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4"},sidebar:"docs",previous:{title:"5. Display with framebuffer in external RAM",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/05-display-external"},next:{title:"7. \u5340\u584a\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4",permalink:"/4.19/zh-TW/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"}},v=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Goal",id:"goal",children:[{value:"Verification",id:"verification",children:[],level:3}],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Do",id:"do",children:[{value:"\u5340\u584a\u6a21\u5f0f",id:"block-mode",children:[],level:3},{value:"\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f",id:"memory-mapped-mode",children:[],level:3}],level:2}],_={toc:v};function y(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},_),m),c(t,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"Motivation"),(0,r.kt)("p",null,"\u5728\u9019\u4e00\u6b65\uff0c\u6211\u5011\u5c07\u5728\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\u4e0b\u4f7f\u80fd\u5916\u90e8\u7684Quad\u6216Octo SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u5c0d\u65bc\u5927\u591a\u6578\u5c08\u6848\uff0c\u5efa\u8b70\u4f7f\u7528\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u56e0\u70ba\u9019\u5141\u8a31\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u591a\u500b\u5927\u578b\u5f71\u50cf\u3002 \u5373\u4fbf\u6700\u666e\u901a\u7684\u61c9\u7528\uff0c\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e5f\u53ef\u80fd\u6703\u5f88\u5feb\u88ab\u7528\u5b8c\u3002"),(0,r.kt)(o.Z,{mdxType:"Note"},"\u82e5\u958b\u767c\u677f\u4e0d\u652f\u63f4\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u8acb\u8df3\u904e\u6b64\u6b65\u9a5f\u3002"),(0,r.kt)("p",null,"\u5982\u6b32\u5c07\u8cc7\u6599\u5b58\u653e\u5728\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u5fc5\u9808\u78ba\u4fddMCU\u53ef\u4ee5\u8b80\u53d6\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u61c9\u4ee5\u6240\u9700\u7684\u901f\u5ea6\u904b\u884c\uff08\u901a\u5e38\u70ba\u6700\u5927\u901f\u5ea6\uff09\uff0c\u4ee5\u7372\u5f97\u6700\u4f73\u6027\u80fd\u3002"),(0,r.kt)("h2",h({},{id:"goal"}),"Goal"),(0,r.kt)("p",null,"\u672c\u7bc0\u7684\u76ee\u7684\u70ba\u4f7f\u80fd\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u4e26\u4f7f\u7528\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\uff0c\u5f9e\u4e2d\u8b80\u53d6\u6578\u64da\u3002 \u7531\u65bc\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u8b80\u53d6\u901f\u5ea6\u5c0d\u5716\u5f62\u7684\u8655\u7406\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u6b64\u60a8\u61c9\u8a72\u8981\u6e2c\u8a66\u8b80\u53d6\u901f\u5ea6\u3002"),(0,r.kt)("h3",h({},{id:"verification"}),"Verification"),(0,r.kt)("p",null,"Here are the verification points for this section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Verification Point"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Rationale"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u53ef\u8b80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"External flash can be used for image storage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u6027\u80fd"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5716\u5f62\u8655\u7406\u6027\u80fd\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u6c7a\u65bc\u8a18\u61b6\u9ad4\u6027\u80fd")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("p",null,"The following are the prerequisites for this step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Information about the flash, typically a datasheet"),(0,r.kt)("li",{parentName:"ul"},"Information about the connections between the MCU and the external flash")),(0,r.kt)("h2",h({},{id:"do"}),"Do"),(0,r.kt)("p",null,"The QSPI controller is configured in STM32CubeMX under Connectivity -> QUADSPI:"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/qspi/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9aQSPI\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,r.kt)("p",null,"\u5728\u6a21\u5f0f\u90e8\u5206\uff0c\u60a8\u53ef\u4ee5\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u914d\u7f6e\u70ba\u55ae/\u96d9/\u56db\u8cc7\u6599\u7dda\u3002 \u56db\u8cc7\u6599\u7dda\u6700\u5feb\u3002 \u8207\u5916\u90e8RAM\u76f8\u4f3c\uff0c\u9019\u88e1\u9084\u9700\u9078\u64c7\u548c\u8a2d\u5b9a\u7528\u65bc\u8cc7\u6599\u7dda\u3001\u6676\u7247\u9078\u64c7\u548c\u6642\u9418\u8a0a\u865f\u7684GPIO\u3002"),(0,r.kt)("h3",h({},{id:"block-mode"}),"\u5340\u584a\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u80fd\u5feb\u9583\u8a18\u61b6\u9ad4\u5f8c\uff0c\u6211\u5011\u53ef\u4ee5\u901a\u904e\u5f9e\u4e2d\u8b80\u53d6\u6578\u64da\u4f86\u5c0d\u5176\u9032\u884c\u6e2c\u8a66\u3002 The STM32Cube Firmware package contains examples for that."),(0,r.kt)("h3",h({},{id:"memory-mapped-mode"}),"\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u80fd\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u5340\u584a\u6a21\u5f0f\u4e26\u5c0d\u5176\u9032\u884c\u6e2c\u8a66\u5f8c\uff0c\u5fc5\u9808\u5c07\u5176\u66f4\u6539\u70ba\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\u3002 \u9019\u5c07\u5141\u8a31CPU\u76f4\u63a5\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7372\u53d6\u6578\u64da\u3002"),(0,r.kt)("p",null,"The STM32 STM32Cube HAL contains functions to change to memory mapped mode. \u9019\u88e1\u7d66\u51fa\u4e86\u4e00\u500b\u7bc4\u4f8b\u3002 \u5fc5\u9808\u901a\u904e\u67e5\u95b1\u8cc7\u6599\u624b\u518a\u4f86\u7372\u53d6\u914d\u7f6e\u6578\u64da\u3002 The STM32Cube Firmware package for your MCU contains more examples."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"QSPI_CommandTypeDef      s_command;\nQSPI_MemoryMappedTypeDef s_mem_mapped_cfg;\n\n/* Configure the command for the read instruction */\ns_command.InstructionMode   = QSPI_INSTRUCTION_1_LINE;\ns_command.Instruction       = QUAD_INOUT_FAST_READ_CMD;\ns_command.AddressMode       = QSPI_ADDRESS_4_LINES;\ns_command.AddressSize       = QSPI_ADDRESS_24_BITS;\ns_command.AlternateByteMode = QSPI_ALTERNATE_BYTES_NONE;\ns_command.DataMode          = QSPI_DATA_4_LINES;\ns_command.DummyCycles       = N25Q128A_DUMMY_CYCLES_READ_QUAD;\ns_command.DdrMode           = QSPI_DDR_MODE_DISABLE;\ns_command.DdrHoldHalfCycle  = QSPI_DDR_HHC_ANALOG_DELAY;\ns_command.SIOOMode          = QSPI_SIOO_INST_EVERY_CMD;\n\n/* Configure the memory mapped mode */\ns_mem_mapped_cfg.TimeOutActivation = QSPI_TIMEOUT_COUNTER_DISABLE;\n\nif (HAL_QSPI_MemoryMapped(&QSPIHandle, &s_command, &s_mem_mapped_cfg) != HAL_OK)\n{\n  return QSPI_ERROR;\n}\n")),(0,r.kt)("p",null,"If you are using the same flash as one of the STM32 evaluation kits, then the BSP packages for these boards (also in the STM32Cube Firmware) contains valuable examples that can be modified for your hardware."),(0,r.kt)("p",null,"\u7576\u5feb\u9583\u8a18\u61b6\u9ad4\u8655\u65bc\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\u6642\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u50cf\u5916\u90e8RAM\u4e2d\u7684\u4ee3\u78bc\u90a3\u6a23\u5c0d\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u9032\u884c\u6e2c\u8a66\uff08\u5728MCU\u8cc7\u6599\u8868\u624b\u518a\u4e2d\u5c0b\u627e\u4f4d\u5740\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"volatile uint32_t *externalFlash = 0x90000000;\nconst uint32_t size = 1000;\nvolatile uint32_t result = 0;\n\n//read external Flash\nfor(int i = 0; i < size; i++)\n{\n    result += externalFlash[i];\n}\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u4f7f\u7528\u5148\u524d\u8a18\u61b6\u9ad4\u6548\u80fd\u6e2c\u8a66\u7684\u6b65\u9a5f\uff0c\u4ee5\u6e2c\u8a66\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u6027\u80fd\u3002"))}y.isMDXComponent=!0}}]);