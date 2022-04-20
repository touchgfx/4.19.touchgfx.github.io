"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2574],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(r),s=l,h=d["".concat(p,".").concat(s)]||d[s]||u[s]||a;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),l=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,o=(0,l.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),l=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,r){var n=r(67294);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},93054:function(e,t,r){var n=r(67294),l=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=o},78472:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return M},default:function(){return w},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return C}});var n=r(3905),l=r(44035),a=r(29415),o=r(39130),i=r(93054),p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&h(e,r,t[r]);return e};const g={id:"hardware-selection-mcu",title:"MCU"},M=void 0,f={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-mcu",id:"development/hardware-selection/hardware-components/hardware-selection-mcu",title:"MCU",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-mcu.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-mcu",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",tags:[],version:"current",frontMatter:{id:"hardware-selection-mcu",title:"MCU"},sidebar:"docs",previous:{title:"Hardware Components",permalink:"/4.19/zh-CN/docs/category/hardware-components"},next:{title:"\u663e\u793a\u5c4f",permalink:"/4.19/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-display"}},v={},C=[{value:"\u9891\u7387",id:"frequency",level:2},{value:"\u56fe\u5f62\u5b50\u7cfb\u7edf\u9891\u7387",id:"graphic-subsystem-frequency",level:3},{value:"\u793a\u4f8b",id:"example",level:3},{value:"\u5d4c\u5165\u5f0f\u786c\u4ef6\u52a0\u901f\u529f\u80fd",id:"embedded-hardware-acceleration-features",level:2},{value:"Chrom-ART",id:"chrom-art",level:3},{value:"JPEG\u786c\u4ef6\u7f16\u89e3\u7801\u5668",id:"jpeg-hardware-codec",level:3},{value:"Chrom-GRC",id:"chrom-grc",level:3},{value:"\u5185\u90e8Flash",id:"internal-flash",level:2},{value:"\u5185\u90e8RAM",id:"internal-ram",level:2},{value:"LCD\u63a7\u5236\u5668",id:"lcd-controller",level:2},{value:"\u5c01\u88c5&amp; I/O",id:"packages--io",level:2},{value:"\u5b58\u50a8\u5668\u63a5\u53e3",id:"memory-interfacing",level:2},{value:"\u53ef\u53d8\u5b58\u50a8\u63a7\u5236\u5668&amp; \u53ef\u53d8\u9759\u6001\u5b58\u50a8\u63a7\u5236\u5668\uff08FMC/FSMC\uff09",id:"flexible-memory-controller--flexible-static-memory-controller-fmcfsmc",level:3},{value:"\u4e32\u884c\u5b58\u50a8\u5668\u63a5\u53e3",id:"serial-memory-interface",level:3},{value:"STM32\u8d85\u503c\u7cfb\u5217\u4ea7\u54c1",id:"stm32-value-line-products",level:3},{value:"Cortex\xae-M Core",id:"cortex-m-cores",level:2},{value:"Cortex\xae-M0+",id:"cortex-m0",level:3},{value:"Cortex\xae-M4",id:"cortex-m4",level:3},{value:"Cortex\xae-M7",id:"cortex-m7",level:3},{value:"\u7279\u6027\u6982\u8ff0",id:"feature-overview",level:3},{value:"\u4e00\u7ea7\u7f13\u5b58\uff1a",id:"level-1-cache",level:3},{value:"\u53cc\u6838",id:"dual-core",level:3},{value:"\u603b\u7ebf\u67b6\u6784",id:"bus-architecture",level:2},{value:"\u4ef7\u683c",id:"price",level:2}],N={toc:C};function w(e){var t,r=e,{components:p}=r,h=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=k(k({},N),h),c(t,m({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u5fae\u63a7\u5236\u5668\u5355\u5143\uff08MCU\uff09\u662f\u6240\u6709\u5d4c\u5165\u5f0f\u89e3\u51b3\u65b9\u6848\u7684\u6838\u5fc3\u6240\u5728\uff0c\u5728\u6210\u672c\u548c\u7279\u6027\u65b9\u9762\u6709\u8bb8\u591a\u4e0d\u540c\u7684\u9009\u62e9\u3002"),(0,n.kt)("p",null,"\u5728\u9009\u62e9\u56fe\u5f62\u7528MCU\u65f6\uff0c\u5e94\u8003\u8651\u652f\u6301\u7684\u663e\u793a\u5668\u63a5\u53e3\u3001MCU\u5c01\u88c5\u3001\u5c3a\u5bf8\u548c\u53ef\u83b7\u5f97\u7684\u56fe\u5f62\u6027\u80fd\uff0c\u6700\u540e\u4e00\u70b9\u53d6\u51b3\u4e8e\u4e24\u4e2a\u4e3b\u8981\u56e0\u7d20\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u56fe\u50cf\u5408\u6210")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MCU\u4e2d\u96c6\u6210\u7684\u56fe\u5f62\u52a0\u901f\u5668\u7684\u53ef\u7528\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4e2d\u7f13\u5b58\u5b58\u50a8\u5668\u7684\u53ef\u7528\u6027\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u5668\u5b58\u53d6\u548c\u5e26\u5bbd")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65f6\u949f\u9891\u7387\u548c\u5b50\u7cfb\u7edf\u603b\u7ebf\u9891\u7387\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u5185\u90e8Flash\u548cRAM\u5b58\u50a8\u5668\u7684\u5b58\u53d6\u3002")),(0,n.kt)("p",null,"\u9664\u4e86\u56fe\u5f62\uff0c\u8fd8\u5fc5\u987b\u8003\u8651\u5e94\u7528\u8fd0\u884c\u7684\u5176\u4ed6\u65b9\u9762\uff08\u7535\u673a\u63a7\u5236\u548c\u65e0\u7ebf\u6280\u672f\u7b49\uff09\u3002 \u8fd9\u4e9b\u56e0\u7d20\u90fd\u53ef\u80fd\u5f71\u54cdMCU\u7684\u9009\u62e9\u3002"),(0,n.kt)("p",null,"\u672c\u9875\u5c06\u9010\u4e00\u4ecb\u7ecd\u4e0d\u540cMCU\u9009\u9879\uff0c\u4ee5\u53ca\u5728\u51b3\u5b9a\u5e94\u4e3aGUI\u9a71\u52a8\u7684\u5e94\u7528\u9009\u62e9\u54ea\u79cdSTM32 MCU\u65f6\u5e94\u8003\u8651\u7684\u53c2\u6570\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/mcu-portfolio-graphics.png",noShadow:!0,width:"600",mdxType:"Figure"},"STM32 MCU"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u5173\u4e8e\u6240\u6709\u4ea7\u54c1\u7cfb\u5217\u3001\u5916\u8bbe\u548c\u4ef7\u683c\u7b49\u4fe1\u606f\u7684\u66f4\u5b8c\u6574\u6982\u8ff0\uff0c",(0,n.kt)(o.Z,{to:"https://www.st.com/en/development-tools/st-mcu-finder.html",mdxType:"Link"},"\u53ef\u901a\u8fc7ST MCU Finder\u83b7\u53d6"),"\u3002")),(0,n.kt)("h2",k({},{id:"frequency"}),"\u9891\u7387"),(0,n.kt)("p",null,"\u5185\u6838\u9891\u7387\u4f1a\u6781\u5927\u5730\u5f71\u54cd\u56fe\u5f62\u5e94\u7528\u5728\u5c4f\u5e55\u5237\u65b0\u4ee5\u53ca\u5c4f\u5e55\u548c\u52a8\u753b\u7684\u6d41\u7545\u6027\u65b9\u9762\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,"\u5b83\u4f1a\u5f71\u54cd\u53ef\u4ece\u5185\u90e8\u6216\u5916\u90e8\u5b58\u50a8\u5668\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u5e27\u7f13\u51b2\u7684\u5927\u91cf\u6570\u636e\uff0c\u8fd8\u53ef\u80fd\u5f71\u54cd\u8ba1\u7b97\u548c\u52a8\u753b\u3002"),(0,n.kt)("p",null,"\u9891\u7387\u8d8a\u9ad8\uff0c\u5728\u7ed9\u5b9a\u65f6\u95f4\u8303\u56f4\u5185\u80fd\u591f\u4f20\u8f93\u7684\u6570\u636e\u5c31\u8d8a\u591a\uff0c\u5c31\u80fd\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u52a8\u753b\u3002"),(0,n.kt)("p",null,"STM32\u4ea7\u54c1\u7684\u5185\u6838\u9891\u7387\u6700\u9ad8\u4e3a",(0,n.kt)("strong",{parentName:"p"},"480MHz"),"\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},"\u9891\u7387\u8d8a\u9ad8\uff0c\u529f\u8017\u8d8a\u5927\u3002"),(0,n.kt)("h3",k({},{id:"graphic-subsystem-frequency"}),"\u56fe\u5f62\u5b50\u7cfb\u7edf\u9891\u7387"),(0,n.kt)("p",null,"\u5fc5\u987b\u5c06\u5185\u6838CPU\u9891\u7387\u4e0e\u56fe\u5f62\u5b50\u7cfb\u7edf\u9891\u7387\u533a\u522b\u5f00\u6765\u3002 \u56fe\u5f62\u5b50\u7cfb\u7edf\u9891\u7387\u5305\u62ec\u5185\u90e8\u603b\u7ebf\u9891\u7387\u548c\u56fe\u5f62\u8ba1\u6570\u5668\u9891\u7387\uff0c\u4ee5\u53ca\u5185\u90e8\u548c\u5916\u90e8\u5b58\u50a8\u5668\u7684\u5b58\u53d6\u901f\u5ea6\u3002"),(0,n.kt)("p",null,"\u56fe\u5f62\u5b50\u7cfb\u7edf\u9891\u7387\u8fd8\u4f1a\u6781\u5927\u5730\u5f71\u54cd\u6574\u4f53\u56fe\u5f62\u6027\u80fd\u3002"),(0,n.kt)("h3",k({},{id:"example"}),"\u793a\u4f8b"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u4eceSTM32H7\u4e0a\u7684\u5185\u90e8RAM\u8fd0\u884c\u65f6\uff0c\u4ece\u7406\u8bba\u4e0a\u8bc4\u4f30\u5185\u6838\u548c\u5b50\u7cfb\u7edf\u6027\u80fd\u7684\u793a\u4f8b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CPU\u5185\u6838\u7684\u8fd0\u884c\u9891\u7387\u4e3a",(0,n.kt)("strong",{parentName:"li"},"480MHz"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"64\u4f4dAXI\u603b\u7ebf\u9891\u7387\u4e3a",(0,n.kt)("strong",{parentName:"li"},"240MHz"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"LCD-TFT\u663e\u793a\u5668\u63a7\u5236\u5668\uff08LTDC\uff09\u4f7f\u752864\u4f4dAXI\u603b\u7ebf\uff0c\u572810\u4e2a\u5468\u671f\u5185\u6267\u884c8\u6b21\u4f20\u8f93\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u90e8RAM\u4e0d\u4f1a\u5bfc\u81f4\u660e\u663e\u5ef6\u8fdf\uff0c\u53730\u7b49\u5f85\u72b6\u6001\u3002")),(0,n.kt)("p",null,"\u56e0\u6b64\uff0cLTDC\u5916\u8bbe\u8bbf\u95ee\u65f6\u5185\u90e8RAM\u7684\u5e26\u5bbd\u4e3a\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e26\u5bbd = 240 MHz x 8/10 x 8 \u5b57\u8282 = ",(0,n.kt)("strong",{parentName:"li"},"1,536 MB/s"),"\u3002")),(0,n.kt)("p",null,"\u6709\u4e86\u8fd9\u6837\u7684\u5e26\u5bbd\uff0c\u5f53\u5206\u8fa8\u7387\u4e3a800x480\u4e14\u8272\u6df1\u4e3a32bpp\u65f6\uff0c\u5185\u90e8RAM\u53ef\u786e\u4fdd1000\u5e27/\u79d2\uff08fps\uff09\u7684\u5237\u65b0\u7387\u3002 \u901a\u5e38\u4f1a\u5c06\u5bf9\u663e\u793a\u5668\u7684\u4f20\u8f93\u9650\u5236\u5728\u6bcf\u79d260\u5e27\uff08\u901a\u8fc7\u8c03\u6574\u50cf\u7d20\u65f6\u949f\u3001\u8fb9\u6cbf\u7b49\uff09\uff0c\u4ee5\u514dLTDC\u548c\u5185\u90e8RAM\u7684\u5e26\u5bbd\u6210\u4e3a\u74f6\u9888\u3002"),(0,n.kt)("h2",k({},{id:"embedded-hardware-acceleration-features"}),"\u5d4c\u5165\u5f0f\u786c\u4ef6\u52a0\u901f\u529f\u80fd"),(0,n.kt)("p",null,"\u4e0d\u540c\u7684STM32 MCU\u5177\u6709\u4e0d\u540c\u7684\u5185\u7f6e\u786c\u4ef6\u52a0\u901f\u529f\u80fd\uff0c\u6709\u52a9\u4e8e\u83b7\u5f97\u9ad8\u6027\u80fd\u7684\u56fe\u5f62\u5e94\u7528\u3002"),(0,n.kt)("h3",k({},{id:"chrom-art"}),"Chrom-ART"),(0,n.kt)("p",null,"Chrom-ART\u662f\u4e00\u79cd\u5148\u8fdb\u7684DMA\uff0c\u53ef\u4ee5\u4e3a\u6267\u884c\u56fe\u5f62\u64cd\u4f5c\u63d0\u4f9b\u8f85\u52a9\u3002 \u5b83\u4e5f\u88ab\u79f0\u4e3aDMA2D\u3002"),(0,n.kt)("p",null,"\u8bb8\u591aSTM32\u5e73\u53f0\u4e2d\u96c6\u6210\u4e86Chrom-ART\u52a0\u901f\u5668\uff0c\u5b83\u80fd\u591f\u63a7\u5236\u548c\u4f20\u8f93\u56fe\u50cf\uff0c\u800c\u4e0d\u4f1a\u589e\u52a0CPU\u8d1f\u8f7d\u3002 \u5b83\u80fd\u591f\u52a0\u5feb\u5927\u591a\u6570\u56fe\u5f62\u64cd\u4f5c\u7684\u901f\u5ea6\uff0c\u5982\u989c\u8272\u586b\u5145\u3001\u56fe\u50cf\u590d\u5236\u3001\u6df7\u5408\u548c\u50cf\u7d20\u683c\u5f0f\u8f6c\u6362\u3002"),(0,n.kt)("p",null,"Chrom-ART\u52a0\u901f\u5668\u80fd\u591f\u5728\u4e00\u9879\u64cd\u4f5c\u4e2d\u6267\u884c\u4e24\u4e2a\u56fe\u5c42\u7684\u6df7\u5408\uff0c\u5c06\u521d\u59cb\u50cf\u7d20\u683c\u5f0f\u8f6c\u6362\u4e3a\u9700\u8981\u7684\u8f93\u51fa\u50cf\u7d20\u683c\u5f0f\uff0c\u5e76\u5c06\u7ed3\u679c\u4f20\u8f93\u5230\u5b58\u50a8\u5668\u76ee\u6807\u4f4d\u7f6e\u3002"),(0,n.kt)("p",null,"Chrom-ART\u52a0\u901f\u5668\u8fd8\u652f\u6301\u6709\u989c\u8272\u67e5\u627e\u8868\uff08CLUT\uff09\u7684\u989c\u8272\u6a21\u5f0f\u3002 \u8fd9\u6709\u52a9\u4e8e\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,n.kt)("p",null,"\u4ee5\u5728",(0,n.kt)("strong",{parentName:"p"},"STM32F496-EVAL"),"\u677f\u4e0a\u8fd0\u884c\u7684\u5e94\u7528\u4e3a\u4f8b\uff0c\u5f53\u542f\u7528Chrom-ART\u65f6\uff0cCPU\u8d1f\u8f7d\u4ece",(0,n.kt)("strong",{parentName:"p"},"82%"),"\u964d\u81f3",(0,n.kt)("strong",{parentName:"p"},"4%"),"\uff1a"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/birdeatcoin.gif",mdxType:"Figure"},"Bird-Eat-Coin Chrom-ART\u793a\u4f8b"),(0,n.kt)("p",null,"\u6b64\u5916\uff0cSTM32H7\u4ea7\u54c1\u4e3aChrom-ART\u5916\u8bbe\u589e\u52a0\u4e86\u4ece",(0,n.kt)("strong",{parentName:"p"},"YCbCr"),"\u6a21\u5f0f\u8f6c\u6362\u81f3",(0,n.kt)("strong",{parentName:"p"},"RGB"),"\u6a21\u5f0f\u7684\u80fd\u529b\u3002 \u6b64\u7279\u6027\u7ed3\u5408JPEG\u786c\u4ef6\u7f16\u89e3\u7801\u5668\uff0c\u53ef\u51cf\u8f7bJPEG\u56fe\u50cf\u7f16\u7801\u548c\u89e3\u7801\u65f6\u7684CPU\u8d1f\u8f7d\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/chrom-art-acceleration.png",noShadow:!0,width:"500",mdxType:"Figure"},"YCbCr\u8f6cRGB\u786c\u4ef6\u6027\u80fd"),(0,n.kt)("p",null,"\u5177\u6709\u4e0a\u8ff0\u7279\u6027\u7684Chrom-ART\u52a0\u901f\u5668\u4e3a\u56fe\u5f62\u5e94\u7528\u63d0\u4f9b\u4e86\u5de8\u5927\u4f18\u52bf\u3002 TouchGFX\uff08\u82e5\u9009\u62e9\u7684MCU\u4e2d\u6709\u63d0\u4f9b\uff09\u5904\u7406\u6240\u6709Chrom-ART\u7279\u6027\uff0c\u5e76\u5c06\u6240\u6709\u53ef\u80fd\u7684\u7ed8\u56fe\u64cd\u4f5c\u91cd\u5b9a\u5411\u81f3Chrom-ART\u5916\u8bbe\u800c\u975eCPU\u3002"),(0,n.kt)("p",null,"\u4e3a\u9ad8\u6027\u80fdSTM32\u7cfb\u5217\u63d0\u4f9b\u4e86Chrom-ART\u5916\u8bbe\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8bf7\u53c2\u8003AN4943\u5e94\u7528\u7b14\u8bb0\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\uff1a",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/17/82/73/f8/b8/8a/47/c7/DM00338361/files/DM00338361.pdf/jcr:content/translations/en.DM00338361.pdf",mdxType:"Link"},"Chrom-ART\u786c\u4ef6\u52a0\u901f"),"\u3002")),(0,n.kt)("h3",k({},{id:"jpeg-hardware-codec"}),"JPEG\u786c\u4ef6\u7f16\u89e3\u7801\u5668"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STM32H7"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"STM32F7"),"\u7cfb\u5217\u63d0\u4f9b\u786c\u4ef6JPEG\u7f16\u89e3\u7801\u5668\uff0c\u7528\u4e8e\u56fe\u50cf\u548c\u89c6\u9891\u7684\u7f16\u7801\u548c\u89e3\u7801\u3002"),(0,n.kt)("p",null,"\u5982\u679cUI\u5e94\u7528\u9700\u8981\u64ad\u653e\u89c6\u9891\u6587\u4ef6\u6216\u663e\u793aJPEG\u56fe\u50cf\uff0c\u5219\u6b64\u7279\u6027\u5341\u5206\u91cd\u8981\u3002"),(0,n.kt)("p",null,"JPEG\u56fe\u50cf\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u901a\u5e38\u8f83\u5c0f\u3002 JPEG\u786c\u4ef6\u7f16\u89e3\u7801\u5668\u786e\u4fdd\u5728\u8fd0\u884c\u65f6\u95f4\u89e3\u7801\u56fe\u50cf\uff0c\u800c\u4e0d\u4f1a\u53d1\u751fCPU\u8d85\u8d1f\u8f7d\u3002"),(0,n.kt)("p",null,"\u4e00\u4e9bTouchGFX\u6f14\u793a\u5229\u7528JPEG\u786c\u4ef6\u7f16\u89e3\u7801\u5668\uff0c\u51cf\u8f7b\u64ad\u653eMJPEG\u89c6\u9891\u65f6\u7684CPU\u8d1f\u8f7d\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/jpeg-codec-acceleration.png",noShadow:!0,width:"500",mdxType:"Figure"},"\u786c\u4ef6JPEG\u7f16\u89e3\u7801\u5668\u6027\u80fd"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8bf7\u53c2\u8003AN4996\u5e94\u7528\u7b14\u8bb0\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\uff1a",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/a5/9d/22/46/61/6d/4a/ab/DM00356635/files/DM00356635.pdf/jcr:content/translations/en.DM00356635.pdf",mdxType:"Link"},"\u786c\u4ef6JPEG\u7f16\u89e3\u7801\u5668"),"\u3002")),(0,n.kt)("h3",k({},{id:"chrom-grc"}),"Chrom-GRC"),(0,n.kt)("p",null,"\u5728\u4e00\u4e9bSTM32\u5fae\u63a7\u5236\u5668\u4e2d\uff0c\u5916\u8bbeSTM32 Chrom-GRC\u2122\uff08GFXMMU\uff09\u65e8\u5728\u4e3a\u5411\u975e\u77e9\u5f62\u663e\u793a\u5668\u53d1\u5c55\u7684\u65b0\u8d8b\u52bf\u63d0\u4f9b\u9ad8\u6548\u652f\u6301\u3002"),(0,n.kt)("p",null,"\u5728\u5bfb\u5740\u975e\u77e9\u5f62\u663e\u793a\u5668\u65f6\uff0cChrom-GRC\u2122\u5916\u8bbe\u53ef\u5e2e\u52a9\u5e94\u7528\u51cf\u5c11\u5b58\u50a8\u5e27\u7f13\u51b2\u6240\u9700\u7684RAM\u7a7a\u95f4\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5706\u5f62\u663e\u793a\u5668\uff0c\u5916\u8bbe\u53ef\u5c06\u5b58\u50a8\u7a7a\u95f4\u8981\u6c42\u964d\u4f4e",(0,n.kt)("strong",{parentName:"p"},"20%"),"\u3002"),(0,n.kt)("p",null,"\u5728\u63a7\u5236\u975e\u65b9\u5f62\u5c4f\u5e55\u65f6\uff0c\u5efa\u8bae\u4f46\u4e0d\u5f3a\u5236\u4f7f\u7528Chrom-GRC\u2122\u5916\u8bbe\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/stm-32-chrom-grc.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u901a\u8fc7Chrom-GRC\u5916\u8bbe\u4f18\u5316\u5b58\u50a8\u5668"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8bf7\u53c2\u8003AN5051\u5e94\u7528\u7b14\u8bb0\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\uff1a",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/74/21/86/42/af/d5/4f/58/DM00407777/files/DM00407777.pdf/jcr:content/translations/en.DM00407777.pdf",mdxType:"Link"}," \u56fe\u5f62\u5b58\u50a8\u5668\u4f18\u5316"))),(0,n.kt)("h2",k({},{id:"internal-flash"}),"\u5185\u90e8Flash"),(0,n.kt)("p",null,"\u4f7f\u7528\u4f4d\u56fe\u8d44\u6e90\u7684\u56fe\u5f62\u7528\u6237\u754c\u9762\u5e94\u7528\u9700\u8981\u4f7f\u7528\u975e\u6613\u5931\u6027\u5b58\u50a8\u5668\u6765\u5b58\u50a8\u6570\u636e\u3002 \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4ece\u5185\u90e8\u95ea\u5b58\u6267\u884c\u548c\u8bbf\u95ee\u5185\u90e8Flash\u4f1a\u6bd4\u5916\u90e8Flash\u5feb\u6700\u591a\u4e24\u500d\u3002"),(0,n.kt)("p",null,"\u7531\u4e8e\u5185\u90e8Flash\u7684\u5927\u5c0f\u6709\u9650\uff0c\u5f88\u591a\u65f6\u5019\u4f1a\u7528\u5185\u90e8Flash\u6765\u5b58\u50a8TouchGFX\u6846\u67b6\u3001\u5c4f\u5e55\u5b9a\u4e49\u548cUI\u903b\u8f91\uff0c\u800c\u4f4d\u56fe\u6570\u636e\u5219\u5b58\u50a8\u5728\u5916\u90e8Flash\u4e2d\u3002"),(0,n.kt)("p",null,"\u5bf9\u56fe\u5f62\u5e94\u7528\u4f7f\u7528\u7684STM32\u4ea7\u54c1\u7ec4\u5408\u7684\u5185\u90e8Flash\u5927\u5c0f\u4ecb\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u51e0KB"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u51e0MB"),"\u4e4b\u95f4\u3002"),(0,n.kt)("p",null,"\u5f53\u4f4d\u56fe\u6570\u636e\u91cf\u4e0e\u5185\u90e8Flash\u4e0d\u5339\u914d\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u7528\u5230\u5916\u90e8\u5b58\u50a8\u5668\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8bf7\u53c2\u8003",(0,n.kt)(o.Z,{to:"hardware-selection-external-memories",mdxType:"Link"},"\u5916\u90e8\u5b58\u50a8\u5668"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"TouchGFX\u95ea\u5b58\u8981\u6c42\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6846\u67b6\uff1a",(0,n.kt)("strong",{parentName:"li"},"60 KB"),"\u81f3",(0,n.kt)("strong",{parentName:"li"},"100 KB"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c4f\u5e55\u5b9a\u4e49\u548cGUI\u903b\u8f91\uff1a",(0,n.kt)("strong",{parentName:"li"},"1"),"\u81f3",(0,n.kt)("strong",{parentName:"li"},"100 KB"),"\u3002")),(0,n.kt)("p",null,"\u8fd9\u4e9b\u6570\u5b57\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u6846\u67b6\u7279\u6027\uff0c\u4ee5\u53ca\u5e94\u7528\u7684\u5927\u5c0f\u548c\u590d\u6742\u5ea6\u3002"),(0,n.kt)("h2",k({},{id:"internal-ram"}),"\u5185\u90e8RAM"),(0,n.kt)("p",null,"\u5185\u90e8RAM\u53ef\u7528\u4e8e\u5b58\u50a8\u5e27\u7f13\u51b2\u7684\u524d\u63d0\u662f\u5e27\u7f13\u51b2\u7684\u5927\u5c0f\u4f7f\u4e4b\u80fd\u591f\u653e\u5165\u53ef\u7528\u5b58\u50a8\u5668\u3002 \u6216\u8005\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u8bbe\u7f6e\u589e\u52a0\u5916\u90e8\u5b58\u50a8\u5668\u3002"),(0,n.kt)("p",null,"\u6839\u636e\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u8272\u6df1\u8ba1\u7b97\u5e27\u7f13\u51b2\u7684\u5927\u5c0f\u3002 \u4f8b\u5982\uff0c\u5bf9\u4e8e\u5177\u6709HVGA\u5206\u8fa8\u7387\uff08480x320\uff09\u548c16\u4f4d\u8272\u7684\u663e\u793a\u5668\uff0c\u4e00\u4e2a\u5e27\u7f13\u51b2\u6240\u9700\u7684\u5b58\u50a8\u7a7a\u95f4\u4e3a\uff1a"),(0,n.kt)("p",null,"1\u4e2a\u5e27\u7f13\u51b2\u7684\u5927\u5c0f = ",(0,n.kt)("strong",{parentName:"p"},"480 x 320 x 2")," =  ",(0,n.kt)("strong",{parentName:"p"},"307.200\u5b57\u8282")),(0,n.kt)("p",null,"\u5bf9\u56fe\u5f62\u5e94\u7528\u4f7f\u7528\u7684STM32\u4ea7\u54c1\u7684\u5185\u90e8RAM\u5927\u5c0f\u4ecb\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u51e0KB"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u51e0MB"),"\u4e4b\u95f4\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8bf7\u53c2\u8003",(0,n.kt)(o.Z,{to:"hardware-selection-external-memories",mdxType:"Link"},"\u5916\u90e8\u5b58\u50a8\u5668"),"\u4e00\u8282\uff0c\u4e86\u89e3\u5173\u4e8e\u5916\u90e8\u5b58\u50a8\u5668\u4e2d\u5e27\u7f13\u51b2\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"TouchGFX RAM\u8981\u6c42\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6846\u67b6\uff1a",(0,n.kt)("strong",{parentName:"li"},"10 KB"),"\u81f3",(0,n.kt)("strong",{parentName:"li"},"30 KB")),(0,n.kt)("li",{parentName:"ul"},"\u63a7\u4ef6\uff1a",(0,n.kt)("strong",{parentName:"li"},"1 KB"),"\u81f3",(0,n.kt)("strong",{parentName:"li"},"15 KB"))),(0,n.kt)("p",null,"\u4e0d\u540c\u5e94\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u8981\u6c42\u53ef\u80fd\u4e0d\u540c\u3002"),(0,n.kt)("h2",k({},{id:"lcd-controller"}),"LCD\u63a7\u5236\u5668"),(0,n.kt)("p",null,"MCU\u7684\u9009\u62e9\u8fd8\u53d6\u51b3\u4e8e\u8981\u4f7f\u7528\u7684\u663e\u793a\u5668\u63a5\u53e3\u548c\u5206\u8fa8\u7387\u3002 \u4ee5800x480\u7684\u5206\u8fa8\u7387\u4e3a\u4f8b\uff0c\u53ea\u80fd\u901a\u8fc7\u6570\u636e\u4f20\u8f93\u8db3\u591f\u9ad8\u6548\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u3002 RGB-TFT\u548cMPI-DSI\u63a5\u53e3\u901a\u5e38\u7528\u4e8e\u66f4\u9ad8\u5206\u8fa8\u7387\uff0c\u539f\u56e0\u662f\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u5e26\u5bbd\u9ad8\u4e8eSPI\u6216\u5e76\u884c8080/6800\u3002 \u4f4e\u5206\u8fa8\u7387\u663e\u793a\u5668\u901a\u5e38\u5185\u7f6e\u63a7\u5236\u5668\u548cGRAM\uff0c\u53ef\u901a\u8fc7\u7b80\u5355\u7684SPI\u62168080/6800\u63a5\u53e3\u8fdb\u884c\u8fde\u63a5\u3002"),(0,n.kt)("p",null,"\u9ad8\u5206\u8fa8\u7387\u663e\u793a\u5668\uff08WQVGA\u53ca\u4ee5\u4e0a\uff09\u901a\u5e38\u6ca1\u6709\u5185\u7f6e\u63a7\u5236\u5668\u548cGRAM\uff0c\u56e0\u6b64\u63a7\u5236\u5668\u9700\u4f4d\u4e8e\u5fae\u63a7\u5236\u5668\u4fa7\u3002 STM32 MCU\u5185\u7f6e\u4e86RGB-TFT\u548cMIPI DSI\u63a5\u53e3\u7684\u63a7\u5236\u5668\u3002"),(0,n.kt)(l.Z,{imageSource:"/img/development/hardware-selection/mcu/display-interfaces.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u56fe\u4e2d\u663e\u793a\u4e86\u6709/\u6ca1\u6709GRAM\u548c\u663e\u793a\u5668\u63a7\u5236\u5668\u7684\u4e0d\u540c\u663e\u793a\u5668\u63a5\u53e3\u76844\u4e2a\u793a\u4f8b\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8bf7\u53c2\u8003",(0,n.kt)(o.Z,{to:"hardware-selection-display",mdxType:"Link"},"\u663e\u793a\u5668"),"\u4e00\u8282\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.kt)("h2",k({},{id:"packages--io"}),"\u5c01\u88c5& I/O"),(0,n.kt)("p",null,"\u9700\u8981\u7684I/O\u6570\u91cf\u53d6\u51b3\u4e8e\u9009\u62e9\u7684\u663e\u793a\u5668\u548c\u5916\u90e8\u5b58\u50a8\u5668\u3002 \u8fd0\u884c\u5177\u6709\u5e76\u884cRAM/Flash\u7684\u5e76\u884c\u663e\u793a\u5668\u53ef\u80fd\u9700\u8981\u5927\u91cfI/O\uff0c\u5bfc\u81f4\u5c01\u88c5\u5c3a\u5bf8\u53d8\u5927\u3002"),(0,n.kt)("h2",k({},{id:"memory-interfacing"}),"\u5b58\u50a8\u5668\u63a5\u53e3"),(0,n.kt)("p",null,"\u5f53\u5fae\u63a7\u5236\u5668\u4e2d\u7684\u5185\u90e8\u95ea\u5b58\u548cRAM\u4e0d\u591f\u7528\u65f6\uff0c\u9009\u62e9\u5177\u6709\u6700\u5408\u9002\u5916\u90e8\u5b58\u50a8\u5668\u63a5\u53e3\u7684\u5408\u9002MCU\u5c31\u53d8\u5f97\u5341\u5206\u91cd\u8981\u3002 STM32\u4ea7\u54c1\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u5b58\u50a8\u5668\u63a7\u5236\u5668\u5916\u8bbe\uff0c\u7528\u4e8e\u8fde\u63a5NOR\u3001NAND\u3001SRAM\u3001SDRAM\u3001LPSDR SDRAM\u548cPSRAM\u5b58\u50a8\u5668\u3002"),(0,n.kt)("h3",k({},{id:"flexible-memory-controller--flexible-static-memory-controller-fmcfsmc"}),"\u53ef\u53d8\u5b58\u50a8\u63a7\u5236\u5668& \u53ef\u53d8\u9759\u6001\u5b58\u50a8\u63a7\u5236\u5668\uff08FMC/FSMC\uff09"),(0,n.kt)("p",null,"\u9664\u4e86\u652f\u6301\u9759\u6001RAM\uff0cFMC\u8fd8\u4e3aFSMC\u589e\u52a0\u4e86\u52a8\u6001RAM\u652f\u6301\uff08SDRAM\uff09\u3002 \u53ef\u53d8\u5b58\u50a8\u63a7\u5236\u5668\uff08FMC\uff09\u5177\u6709\u5f88\u9ad8\u7684\u5916\u90e8\u5b58\u53d6\u901f\u7387\u548c8\u300116\u7279\u522b\u662f32\u4f4d\u6570\u636e\u603b\u7ebf\uff0c\u53ef\u5b9e\u73b0\u4e0e\u5916\u90e8RAM\u4e4b\u95f4\u7684\u66f4\u9ad8\u541e\u5410\u7387\uff0c\u4ece\u800c\u66f4\u597d\u5730\u652f\u6301\u66f4\u9ad8\u5206\u8fa8\u7387\u3002 FMC\u7684\u6bcf\u4e2a\u5b58\u50a8\u533a\u6709\u72ec\u7acb\u7684\u82af\u7247\u9009\u62e9\u3002 FMC\u53ef\u4ee5\u63a7\u5236\u7528\u4e8e\u6570\u636e\u7684\u5916\u90e8Flash\u3001\u7528\u4e8e\u5e27\u7f13\u51b2\u7684\u5916\u90e8RAM\u5b58\u50a8\u5668\u548c\u7528\u4e8e\u56fe\u5f62\u6808\u7684\u5806\u6269\u5c55\u3002"),(0,n.kt)("h3",k({},{id:"serial-memory-interface"}),"\u4e32\u884c\u5b58\u50a8\u5668\u63a5\u53e3"),(0,n.kt)("p",null,"\u6839\u636e\u9009\u62e9\u7684STM32\u4ea7\u54c1\uff0c\u53ef\u80fd\u6709\u5185\u7f6e\u4e32\u884c\u5b58\u50a8\u5668\u63a5\u53e3\uff0c\u9664\u4e86QSPI\u3001PSRAM\u3001OPI PSRAM\u548cHyper RAM\u5b58\u50a8\u5668\uff0c\u8fd8\u53ef\u4ee5\u8fde\u63a5\u5355\u7ebf\u3001\u53cc\u7ebf\u3001\u56db\u7ebf\u3001\u516b\u7ebf\u548chyperBus\u95ea\u5b58\u3002 \u5f53\u5904\u4e8e\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f\u65f6\uff0c\u4e32\u884c\u9ad8\u901f\u5b58\u50a8\u5668\u63a5\u53e3\u53ef\u63a7\u5236\u6700\u5927",(0,n.kt)("strong",{parentName:"p"},"256 MB"),"\u7684\u5b58\u50a8\u5668\uff1b\u5f53\u5904\u4e8e\u95f4\u63a5\u6a21\u5f0f\u65f6\uff0c\u4e3a",(0,n.kt)("strong",{parentName:"p"},"4 GB"),"\u3002"),(0,n.kt)("p",null,"\u76f8\u6bd4\u4e8e\u5e76\u884c\u63a5\u53e3\uff0c\u4e32\u884c\u5b58\u50a8\u5668\u63a5\u53e3\u53ef\u5c06\u6210\u672c\u8f83\u4f4e\u7684\u5916\u90e8\u95ea\u5b58\u8fde\u63a5\u5230\u5c0f\u578b\u5c01\u88c5\uff0c\u540c\u65f6\u51cf\u5c11\u4f7f\u7528\u7684\u5f15\u811a\u6570\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8bf7\u53c2\u8003AN4760\u5e94\u7528\u7b14\u8bb0\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\uff1a",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/b0/7e/46/a8/5e/c1/48/01/DM00227538/files/DM00227538.pdf/jcr:content/translations/en.DM00227538.pdf",mdxType:"Link"},"STM32\u5fae\u63a7\u5236\u5668\u4e0a\u7684\u56db\u7ebfSPI\u63a5\u53e3"),"\u3002"),(0,n.kt)("h3",k({},{id:"stm32-value-line-products"}),"STM32\u8d85\u503c\u7cfb\u5217\u4ea7\u54c1"),(0,n.kt)("p",null,"\u4e3a\u4e86\u4f18\u5316\u4ef7\u683c\uff0cSTM32H7\u548cSTM32F7\u5e73\u53f0\u63d0\u4f9b\u4e86\u5177\u6709\u6709\u9650\u5185\u90e8Flash\u7684\u8d85\u503c\u7cfb\u5217\u4ea7\u54c1\u3002 \u4f7f\u7528\u8fd9\u4e9b\u4ea7\u54c1\u65f6\uff0c\u56fe\u5f62\u8d44\u6e90\u5c06\u4fdd\u5b58\u5728\u5916\u90e8Flash\u4e2d\u3002"),(0,n.kt)("h2",k({},{id:"cortex-m-cores"}),"Cortex\xae-M Core"),(0,n.kt)("p",null,"STM32 MCU\u91c7\u7528\u4e0d\u540c\u7684ARC Cortex\xae-M\u67b6\u6784\u3002 \u4e0b\u9762\u662fSTM32\u4e0a\u8fd0\u884c\u56fe\u5f62\u65f6\u6700\u5e38\u7528\u7684\u5185\u6838\u3002"),(0,n.kt)("h3",k({},{id:"cortex-m0"}),"Cortex\xae-M0+"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M0+"),"\u7684\u7279\u70b9\u5728\u4e8e\u5b83\u67b6\u6784\u7b80\u5355\u4e14\u4ef7\u683c\u4f4e\u5ec9\u3002 \u5efa\u8bae\u5c06\u5176\u5e94\u7528\u4e8e\u4ee5\u8f83\u4f4e\u5206\u8fa8\u7387\u8fd0\u884c\u7684\u8f83\u5c0f\u7684\u9759\u6001\u56fe\u5f62\u5e94\u7528\u3002"),(0,n.kt)("h3",k({},{id:"cortex-m4"}),"Cortex\xae-M4"),(0,n.kt)("p",null,"\u4e0e",(0,n.kt)("strong",{parentName:"p"},"M0+"),"\u76f8\u6bd4\uff0c",(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M4"),"\u5305\u542b\u66f4\u591a\u529f\u80fd\uff0c\u5e76\u52a0\u5feb\u4e86\u8ba1\u7b97\u901f\u5ea6\u3002 \u5b83\u5305\u542bDSP\u6307\u4ee4\u96c6\u548c\u5355\u7cbe\u5ea6FPU\u5355\u5143\u3002 \u8fd9\u4e9b\u6307\u4ee4\u53ef\u51cf\u8f7bCPU\u8d1f\u8f7d\u5e76\u63d0\u9ad8\u8ba1\u7b97\u901f\u5ea6\u3002"),(0,n.kt)("h3",k({},{id:"cortex-m7"}),"Cortex\xae-M7"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M7"),"\u5305\u542b\u66f4\u590d\u6742\u7684\u67b6\u6784\uff0c\u4e5f\u5305\u542bDSP\u6307\u4ee4\u96c6\uff0c\u5e76\u5177\u6709\u66f4\u9ad8\u6548\u7684\u53cc\u7cbe\u5ea6FPU\u5355\u5143\uff0c\u4ee5\u53ca\u53ef\u5bb9\u7eb3\u6700\u591a",(0,n.kt)("strong",{parentName:"p"},"16KB"),"\u7684\u6570\u636e\u548c\u6307\u4ee4\u7684\u4e00\u7ea7\u7f13\u51b2\u5b58\u50a8\u5668\u3002 \u7f13\u51b2\u5b58\u50a8\u5668\u63d0\u4f9b\u4e86\u4f7f\u6570\u636e\u548c\u6307\u4ee4\u7d27\u90bb\u8ba1\u7b97\u5355\u5143\u4ee5\u4fbf\u4f18\u5316\u63d0\u53d6\u65f6\u95f4\u7684\u53ef\u80fd\u6027\u3002"),(0,n.kt)("h3",k({},{id:"feature-overview"}),"\u7279\u6027\u6982\u8ff0"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7279\u6027"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Cortex-M0+"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Cortex-M4"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Cortex-M7"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"DMIPS/MHz\u8303\u56f4"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0.95-1.36"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1.25-1.95"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"2.14-3.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Core Mark\xae/MHz"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"2.46"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"3.42"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"5.01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6570\u5b57\u4fe1\u53f7\u5904\u7406\uff08DSP\uff09\u6269\u5c55"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6709"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6709")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6d6e\u70b9\u786c\u4ef6"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6709\uff08SP\uff09"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6709\uff08SP + DP\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5185\u7f6e\u7f13\u5b58"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6709\uff08\u53ef\u90094-64KB\uff09\uff0cI-Cachen D-Cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u603b\u7ebf\u534f\u8bae"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AHB Lite\uff0cFast I/O"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AHB Lite\uff0cAPB"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AXI4\uff0cAHB Lite\uff0cAPB\uff0cTCM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u53cc\u6838\u9501\u6b65\u652f\u6301"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6709")))),(0,n.kt)("h3",k({},{id:"level-1-cache"}),"\u4e00\u7ea7\u7f13\u5b58\uff1a"),(0,n.kt)("p",null,"STM32H7\u548cSTM32F7\u7cfb\u5217\u5305\u542b\u6700\u5927",(0,n.kt)("strong",{parentName:"p"},"16 KB"),"\u7684\u4e00\u7ea7\u7f13\u5b58\uff0c\u7528\u4e8e\u6307\u4ee4\u548c\u6570\u636e\u7f13\u5b58\u3002 \u4e00\u7ea7\u7f13\u5b58\u5728CPU\u9644\u8fd1\u4fdd\u5b58\u4e86\u6570\u636e\u6216\u6307\u4ee4\u96c6\uff0c\u56e0\u6b64CPU\u65e0\u9700\u4e0d\u65ad\u5730\u63d0\u53d6\u91cd\u590d\u4f7f\u7528\u7684\u540c\u4e00\u6570\u636e\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8bf7\u53c2\u8003AN4839\u5e94\u7528\u7b14\u8bb0\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\uff1a",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",mdxType:"Link"},"\u4e00\u7ea7\u7f13\u5b58"),"\u3002"),(0,n.kt)("h3",k({},{id:"dual-core"}),"\u53cc\u6838"),(0,n.kt)("p",null,"STM32H7\u7cfb\u5217\u5305\u542b\u53cc\u6838\u7cfb\u5217\uff1a"),(0,n.kt)("p",null,"Arm\xae Cortex\xae-M7\u548cCortex\xae-M4\u5185\u6838\u7684\u8fd0\u884c\u9891\u7387\u5206\u522b\u53ef\u8fbe\u5230480 MHz\u548c240 MHz\uff0c\u53ef\u4ee5\u652f\u6301\u66f4\u591a\u7684\u5904\u7406\u548c\u5e94\u7528\u7a0b\u5e8f\u5206\u533a\u3002 \u53cc\u6838STM32H7\u4ea7\u54c1\u7cfb\u5217\u53ef\u4e0e\u5d4c\u5165\u5f0fSMPS\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u63d0\u9ad8\u52a8\u6001\u7535\u6e90\u6548\u7387\u3002"),(0,n.kt)("p",null,"\u7b2c\u4e8c\u4e2aCortex\xae-M4\u53ef\u4ee5\u51cf\u8f7b\u8ba1\u7b97\u91cf\uff0c\u4ee5\u4fbf\u5f00\u653eM7\u5185\u6838\u7528\u4e8e\u7ed8\u56fe/\u56fe\u5f62\u64cd\u4f5c\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},"\u5bf9\u4e8e\u53cc\u6838MCU\uff0c\u5fc5\u987b\u9488\u5bf9\u7279\u5b9a\u4e0a\u4e0b\u6587\u542f\u7528TouchGFX Generator\u3002 \u53ea\u652f\u6301\u4e00\u4e2a\u5e76\u53d1\u4e0a\u4e0b\u6587\u3002 \u8bf7\u53c2\u8003",(0,n.kt)(o.Z,{to:"../../touchgfx-hal-development/touchgfx-generator",mdxType:"Link"},"TouchGFX Generator\u7528\u6237\u6307\u5357"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.kt)("h2",k({},{id:"bus-architecture"}),"\u603b\u7ebf\u67b6\u6784"),(0,n.kt)("p",null,"\u5927\u591a\u6570STM32\u5fae\u63a7\u5236\u5668\u63d0\u4f9b",(0,n.kt)("strong",{parentName:"p"},"32\u4f4d\u591aAHB"),"\u603b\u7ebf\u77e9\u9635\uff0c\u7528\u4e8e\u4e92\u8fde\u6240\u6709\u4e3b\u8bbe\u5907\uff08CPU\u3001DMA\u7b49\uff09\u548c\u4ece\u8bbe\u5907\uff08Flash\u3001RAM\u3001FSMC\u3001AHB\u548cAPB\u5916\u8bbe\uff09\u3002 \u8fd9\u6837\u4e00\u6765\uff0c\u5373\u4f7f\u591a\u4e2a\u9ad8\u901f\u5916\u8bbe\u540c\u65f6\u5de5\u4f5c\uff0c\u4e5f\u80fd\u786e\u4fdd\u65e0\u7f1d\u3001\u9ad8\u6548\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u9664\u4e86\u591aAHB\u4e92\u8fde\uff0c\u4e00\u4e9bSTM32\uff08Cortex\xae-M7\uff09\u4ea7\u54c1\u8fd8\u5185\u7f6e",(0,n.kt)("strong",{parentName:"p"},"64\u4f4d"),"AXI\uff0c\u7528\u4e8e\u6269\u5c55\u5e26\u5bbd\u3002 \u56e0\u6b64\uff0c\u5728\u6027\u80fd\u548c\u529f\u8017\u4e4b\u95f4\u5b9e\u73b0\u4e86\u6700\u4f73\u5e73\u8861\u3002"),(0,n.kt)("h2",k({},{id:"price"}),"\u4ef7\u683c"),(0,n.kt)("p",null,"\u5185\u90e8Flash\u548c\u5185\u90e8RAM\u7684\u5927\u5c0f\u4ee5\u53ca\u5c01\u88c5\u4e2d\u7684\u53ef\u7528\u5f15\u811a\u6570\u90fd\u4f1a\u5f71\u54cdMCU\u7684\u4ef7\u683c\u3002 \u7528\u6237\u53ef\u4ee5\u6839\u636e\u63a5\u53e3\u3001\u5206\u8fa8\u7387\u548c\u6027\u80fd\u7b49\u65b9\u9762\u7684\u8981\u6c42\uff0c\u6700\u7ec8\u627e\u5230\u5408\u9002\u7684MCU\u548c\u4f30\u4ef7\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8bf7\u53c2\u8003",(0,n.kt)(o.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32\u4f4dArm Cortex MCU"),"\u4e86\u89e3\u53ef\u7528\u7684STM32\u5fae\u63a7\u5236\u5668\u3002")))}w.isMDXComponent=!0}}]);