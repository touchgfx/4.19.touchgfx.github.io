"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4216],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},90862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return y}});var a=n(3905),r=n(44035),l=n(37793),i=n(22425),o=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&h(e,n,t[n]);return e};const g={id:"touchgfx-on-lowcost-hardware",title:"\u4f4e\u786c\u9ad4\u6210\u672c\u4e0a\u7684TouchGFX"},k=void 0,f={unversionedId:"development/scenarios/touchgfx-on-lowcost-hardware",id:"development/scenarios/touchgfx-on-lowcost-hardware",title:"\u4f4e\u786c\u9ad4\u6210\u672c\u4e0a\u7684TouchGFX",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-lowcost-hardware.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-lowcost-hardware",permalink:"/4.19/zh-TW/docs/development/scenarios/touchgfx-on-lowcost-hardware",tags:[],version:"current",frontMatter:{id:"touchgfx-on-lowcost-hardware",title:"\u4f4e\u786c\u9ad4\u6210\u672c\u4e0a\u7684TouchGFX"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.19/zh-TW/docs/category/scenarios-2"},next:{title:"TouchGFX on NeoChrom",permalink:"/4.19/zh-TW/docs/development/scenarios/touchgfx-on-gpu2d"}},N={},y=[{value:"\u786c\u9ad4\u6982\u8ff0",id:"hardware-overview",level:2},{value:"GPIO\u914d\u7f6e",id:"gpio-allocation",level:3},{value:"\u555f\u52d5\u5c08\u6848",id:"starting-a-project",level:3},{value:"\u986f\u793a\u5668\u66f4\u65b0",id:"display-updates",level:2},{value:"\u7e6a\u88fd\u901f\u5ea6",id:"drawing-speed",level:3},{value:"\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u6642TouchGFX\u7684\u9650\u5236",id:"touchgfx-limitations-with-serial-flash",level:2},{value:"\u7d0b\u7406\u6620\u5c04\u5668",id:"texture-mapper",level:3},{value:"\u9ede\u9663\u5716\u7e6a\u88fd\u5668",id:"bitmap-painter",level:3},{value:"L8\u8abf\u8272\u677f",id:"l8-palette",level:3},{value:"\u9a45\u52d5\u7a0b\u5f0f",id:"drivers",level:2},{value:"\u986f\u793a\u5668",id:"display",level:3},{value:"Initialization",id:"initialization",level:4},{value:"\u6495\u88c2\u6548\u61c9",id:"tearing-effect",level:4},{value:"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4",id:"external-flash",level:3},{value:"\u9023\u7d50\u5668\u8173\u672c",id:"linker-script",level:4},{value:"\u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",id:"flash-loader",level:4},{value:"\u6309\u9215",id:"buttons",level:3}],b={toc:y};function v(e){var t,n=e,{components:o}=n,h=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),h),p(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,'This section discusses how to use TouchGFX on low cost hardware with limited amount of RAM and flash, no acceleration and "slow" SPI connection to external flash and display.'),(0,a.kt)("p",null,"\u6211\u5011\u5c07\u63d0\u4f9b\u4e00\u4e9b\u95dc\u65bc\u70ba\u6307\u5b9a\u786c\u9ad4\u7de8\u5beb\u6700\u4f73\u61c9\u7528\u7a0b\u5f0f\u7684\u5efa\u8b70\u3002"),(0,a.kt)("p",null,"Throughout this section we will use the TouchGFX board setup for the STM32G071 Nucleo board with the X-Nucleo-GFX01M1 expansion board as example hardware. The expansion board features a 16-bit display and a serial flash."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",mdxType:"Figure"},"Nucleo-G071RB\u548cX-Nucleo-GFX01M1\u64f4\u5c55\u677f"),(0,a.kt)("h2",m({},{id:"hardware-overview"}),"\u786c\u9ad4\u6982\u8ff0"),(0,a.kt)("p",null,"\u8a72\u5957\u4ef6\u4e2d\u7684\u786c\u9ad4\u8a2d\u5b9a\u5305\u62ecSTM32G071 MCU\u3001SPI NOR flash\u3001SPI\u986f\u793a\u5668\u548c\u6416\u6746\u6309\u9215\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5143\u4ef6")),(0,a.kt)("th",m({parentName:"tr"},{align:"right"}),"\xa0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"MCU"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"STM32G071RB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"MCU RAM"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"32 Kb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"MCU Flash"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"128 Kb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793a\u5668"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"Displaytech DT022CTFT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793a\u5668\u89e3\u6790\u5ea6"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"240 x 320")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Display format"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"16-bit RGB565")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793a\u5668\u63a7\u5236\u5668"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"ILI9341V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793a\u5668\u9023\u63a5"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"SPI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793a\u5668\u9023\u7dda\u901f\u5ea6"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"32 MHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"Macronix MX25L6433F")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash\u5927\u5c0f"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"64 Mbit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash\u9023\u7dda\u901f\u5ea6"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"32 MHz")))),(0,a.kt)("p",null,"\u986f\u793a\u5668\u9023\u63a5\u5230SPI1\u5916\u8a2d\uff0c\u800c\u5feb\u9583\u8a18\u61b6\u9ad4\u9023\u63a5\u5230SPI2\u5916\u8a2d\u3002 \u56e0\u6b64\uff0cMCU\u80fd\u5920\u5728\u5411\u986f\u793a\u5668\u767c\u9001\u8cc7\u6599\u7684\u540c\u6642\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-gfx01m1-architecture.png",width:"500px",mdxType:"Figure"},"\u5177\u6709X-Nucleo-GFX01M1\u67b6\u69cb\u7684Nucleo-G071RB"),(0,a.kt)("h3",m({},{id:"gpio-allocation"}),"GPIO\u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u4fe1\u865f")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"GPIO\u5f15\u8173")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793aCS"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PB5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793aDCX"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PB3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793aSCK"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PA5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793aMOSI"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PA7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793aTE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PA0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Flash CS"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PB9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Flash SCK"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PB13")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Flash MOSI"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PC3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Flash MISO"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PC2")))),(0,a.kt)("p",null,"\u4e0a\u8868\u5217\u51fa\u4e86\u5feb\u9583\u8a18\u61b6\u9ad4\u548c\u986f\u793a\u5668\u4fe1\u865f\u7684GPIO\u5206\u914d\u3002 \u9019\u4e9b\u4fe1\u865f\u53ef\u901a\u904e\u793a\u6ce2\u5668\u6216\u908f\u8f2f\u5206\u6790\u5100\u9032\u884c\u76e3\u6e2c\u3002 This is very useful during debugging of e.g. performance problems."),(0,a.kt)("h3",m({},{id:"starting-a-project"}),"\u555f\u52d5\u5c08\u6848"),(0,a.kt)("p",null,'\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u4ee5\u8f15\u9b06\u5730\u70baSTM32G071RB Nucleo\u8a55\u4f30\u5957\u4ef6\u555f\u52d5\u4e00\u500b\u5c08\u6848\u3002 \u9ede\u64ca"Create New"\uff0c\u7136\u5f8c\u9078\u64c7STM32G071 Nucleo\u3002  \u6b64\u7bc4\u672c\u5c08\u70baNucleo-G071RB\u5957\u4ef6\u548cX-Nucleo-GFX01M1\u986f\u793a\u677f\u800c\u958b\u767c\u3002'),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-start-new-project-4.17.png",mdxType:"Figure"},"Nucleo-G071RB\u7684\u65b0\u5c08\u6848"),(0,a.kt)("p",null,"\u8a72\u7bc4\u672c\u652f\u63f4NOR flash\u3001\u986f\u793a\u5668\u548c\u6309\u9215\u3002 The display can be used both in portrait and horizontal mode."),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u7684",(0,a.kt)("em",{parentName:"p"},"Config  -> Display"),"\u90e8\u5206\u4fee\u6539\u986f\u793a\u5668\u65b9\u5411\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/portrait-4.17.png",mdxType:"Figure"},"\u9078\u64c7\u8c4e\u5c4f\u6216\u6a6b\u5c4f\u986f\u793a"),(0,a.kt)("p",null,"The display on the X-Nucleo-GFX01M1 shield is natively portrait oriented (higher than wide), but it can easily be used with horizontal orientation."),(0,a.kt)("h2",m({},{id:"display-updates"}),"\u986f\u793a\u5668\u66f4\u65b0"),(0,a.kt)("p",null,"\u5982\u4e0a\u6587\u6240\u8ff0\uff0c\u986f\u793a\u5668\u89e3\u6790\u5ea6\u70ba240 x 320\u50cf\u7d20\u3002 \u7e3d\u517176,800\u50cf\u7d20\u6216153,600\u4f4d\u5143\u7d44\u3002 MCU\u8207\u986f\u793a\u5668\u4e4b\u9593\u7684SPI\u9023\u63a5\u7684\u904b\u884c\u983b\u7387\u70ba32 MHz\u3002 \u56e0\u6b64\uff0c\u50b3\u9001\u901f\u7387\u53ef\u4ee5\u9054\u52304 MB/s\u62162M\u50cf\u7d20/s\u3002"),(0,a.kt)("p",null,"\u986f\u793a\u5668\u7684\u5237\u65b0\u983b\u7387\u70ba76.1 Hz\uff0c\u56e0\u6b64\u6bcf\u5e40\u70ba13.14 ms\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/display-te.png",mdxType:"Figure"},"\u986f\u793a\u5668\u7684\u6495\u88c2\u6548\u61c9\u4fe1\u865f"),(0,a.kt)("p",null,"\u9019\u610f\u5473\u8457\u6709\u6700\u591a13 ms\u7684\u6642\u9593\u4f86\u767c\u9001\u4e0b\u4e00\u5e40\u7684\u8cc7\u6599\u3002 In that time we can send 2.000.000 pixels/s / 76 fps = 26.280 pixels / frame or 34% of a full screen. In practice we cannot sustain that transfer speed on the SPI bus because of the protocol overhead so we cannot expect to send more than approximately 30% of a full frame."),(0,a.kt)("p",null,"\u5982\u679c\u61c9\u7528\u66f4\u65b0\u7684\u50cf\u7d20\u6578\u8d85\u904e\u6b64\u503c\uff0c\u786c\u9ad4\u5c07\u7121\u6cd5\u5728\u6bcf\u5e40\u7684\u6642\u9593\u4ee5\u5167\u5b8c\u6210\u767c\u9001\u3002 \u7d50\u679c\u662f\u986f\u793a\u5668\u5c07\u5728\u5168\u90e8\u66f4\u65b0\u7d50\u675f\u524d\u958b\u59cb\u986f\u793a\u66f4\u65b0\u7684\u5e40\u3002 \u56e0\u6b64\uff0c\u7528\u6236\u6709\u6642\u6703\u770b\u5230\u539f\u4f86\u7684\u5e40\u8207\u65b0\u7684\u5e40\u6df7\u5408\u5728\u4e00\u8d77\u3002"),(0,a.kt)("p",null,"\u5c0d\u65bc\u4e00\u4e9b\u52d5\u756b\u800c\u8a00\uff0c\u7528\u6236\u6ce8\u610f\u4e0d\u5230\u9019\u4e00\u9ede\uff0c\u4f46\u5728\u5176\u4ed6\u60c5\u6cc1\u4e0b\u53ef\u80fd\u7121\u6cd5\u63a5\u53d7\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u5011\u5efa\u8b70\u5c07\u66f4\u65b0\u7387\u7dad\u6301\u572830%\u4ee5\u4e0b\u3002 \u5982 \u901a\u904e\u6f38\u9032\u5f0f\u5730\u5206\u6b65\u66f4\u65b0\u5e40\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u4e00\u822c\u4f86\u8aaa\u6700\u597d\u5728\u87a2\u5e55\u4e0a\u64f4\u5c55\u7269\u4ef6\uff0c\u800c\u4e0d\u662f\u79fb\u52d5\u7269\u4ef6\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/star.png",width:"400",mdxType:"Figure"},"\u986f\u793a\u5668\u7684\u6495\u88c2\u6548\u61c9\u4fe1\u865f"),(0,a.kt)("p",null,"\u7576\u661f\u5f62\u79fb\u52d5\u5230\u53f3\u5074\u6642\uff0c\u5fc5\u9808\u66f4\u65b0\u661f\u5f62\u8986\u84cb\u7684\u6240\u6709\u50cf\u7d20\u3002 \u5982\u679c\u53ea\u64f4\u5c55\u661f\u5f62\uff0c\u5247\u53ea\u9700\u66f4\u65b0\u65b0\u50cf\u7d20\u3002 \u5728\u4e0a\u4e00\u5e40\u66f4\u65b0\u7684\u50cf\u7d20\u4fdd\u6301\u4e0d\u8b8a\u3002"),(0,a.kt)("h3",m({},{id:"drawing-speed"}),"\u7e6a\u88fd\u901f\u5ea6"),(0,a.kt)("p",null,"\u5411\u986f\u793a\u5668\u767c\u9001\u8cc7\u6599\u7684\u983b\u7387\u70ba\u6700\u9ad832 MHz\u3002"),(0,a.kt)("p",null,"\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u80fd\u4ee5\u8207\u986f\u793a\u5668\u767c\u9001\u76f8\u540c\u7684\u901f\u5ea6\u904b\u884c\u3002 \u9019\u610f\u5473\u8457\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u901f\u5ea6\u8db3\u5920\u5feb\uff0c\u80fd\u4ee5\u6700\u9ad8\u901f\u5ea6\u5411\u986f\u793a\u5668\u4f9b\u61c9\u8cc7\u6599\u3002"),(0,a.kt)("p",null,"\u9019\u53ea\u6709\u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u4f4d\u5143\u683c\u5f0f\u70baRGB565\u6642\u624d\u80fd\u5be6\u73fe\u3002 In this case is two bytes read from the flash equal to 1 pixel, which is also two bytes on the display. If the pixel format in the flash is ARGB8888, we need to read double the amount of data from the flash to produce a pixel on the display, and the serial flash will not be able to keep up with the display."),(0,a.kt)("p",null,"When this happens we are not sending data to the display continuously and it will not be possible to update all 30% of the display in a frame. \u6709\u4e00\u7a2e\u53ef\u80fd\u7684\u8fa6\u6cd5\u662f\u5c07\u5f71\u50cf\u79fb\u52d5\u5230\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u53e6\u4e00\u7a2e\u8fa6\u6cd5\u662f\u66f4\u6539\u50cf\u7d20\u683c\u5f0f\u3002"),(0,a.kt)("p",null,"\u5176\u4ed6\u7684\u5de5\u5177\u4e0d\u53d7\u5feb\u9583\u8a18\u61b6\u9ad4\u901f\u5ea6\u7684\u9650\u5236\u3002 \u5982 \u65b9\u6846\u5c0f\u5de5\u5177\uff0c\u7528\u65bc\u7e6a\u88fd\u5f69\u8272\u77e9\u5f62\u3002 \u6b64\u5de5\u5177\u901f\u5ea6\u5f88\u5feb\uff0c\u6bd4\u986f\u793a\u5668\u8cc7\u6599\u767c\u9001\u901f\u5ea6\u8981\u5feb\u8a31\u591a\u3002 \u5176\u4ed6\u5c0f\u5de5\u5177\uff08\u5982\u76f4\u7dda\u548c\u5713\uff09\u9700\u8981\u4f7f\u7528\u66f4\u591aCPU\u8cc7\u6e90\u3002 \u9019\u4e9b\u5c0f\u5de5\u5177\u7121\u6cd5\u4ee5\u767c\u9001\u5230\u986f\u793a\u5668\u7684\u901f\u5ea6\u4f86\u751f\u6210\u50cf\u7d20\u3002 \u5c0d\u65bc\u4f7f\u7528\u9019\u4e9b\u5c0f\u5de5\u5177\u7684\u61c9\u7528\uff0c\u4e0d\u80fd\u671f\u671b\u80fd\u5920\u66f4\u65b0\u986f\u793a\u5668\u4e0a\u6bcf\u5e40\u768430%\u3002"),(0,a.kt)("p",null,"\u9ede\u64ca",(0,a.kt)("a",m({parentName:"p"},{href:"../../basic-concepts/performance#the-complexity-of-rendering-the-pixels"}),"\u9019\u88e1"),"\u77ad\u89e3\u50cf\u7d20\u6e32\u67d3\u7684\u8907\u96dc\u6027"),(0,a.kt)("h2",m({},{id:"touchgfx-limitations-with-serial-flash"}),"\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u6642TouchGFX\u7684\u9650\u5236"),(0,a.kt)("p",null,"\u61c9\u7528\u7a0b\u5f0f\u64b0\u5beb\u8005\u5fc5\u9808\u8a8d\u8b58\u5230\uff0c\u5728\u5177\u6709\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u7684STM32G0\u4e0a\u4f7f\u7528TouchGFX\u6642\u7684\u5e7e\u9ede\u9650\u5236\u3002"),(0,a.kt)("h3",m({},{id:"texture-mapper"}),"\u7d0b\u7406\u6620\u5c04\u5668"),(0,a.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668\u5c0f\u5de5\u5177\uff08TextureMapper\u3001AnimationTextureMapper\u548c ScalableImage\uff09\u4e0d\u80fd\u7e6a\u88fd\u5b58\u5132\u5728\u5916\u90e8SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5716\u50cf\u3002 \u539f\u56e0\u5728\u65bc\uff0c\u7528\u5b58\u5132\u5728\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u7121\u6cd5\u7372\u5f97\u53ef\u63a5\u53d7\u7684\u6027\u80fd\uff0c\u5982\u5716\u50cf\u65cb\u8f49\u3002"),(0,a.kt)("p",null,"\u70ba\u4e86\u901a\u904e\u7d0b\u7406\u6620\u5c04\u5668\u4f7f\u7528\u5716\u50cf\uff0c\u5fc5\u9808\u5c07\u5716\u50cf\u4fdd\u5b58\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u6216RAM\u4e2d\u3002 \u901a\u904e\u5728TouchGFX Designer\u4e2d\u4fee\u6539\u5716\u50cf\u914d\u7f6e\uff0c\u53ef\u4ee5\u8f15\u9b06\u5730\u5c07\u5716\u50cf\u4fdd\u5b58\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002"),(0,a.kt)("p",null,"\u8f49\u81f3\u201cImages \u201d\u9078\u9805\u5361\u4e26\u9078\u4e2d\u5716\u50cf\u3002 \u5728\u8996\u7a97\u7684\u53f3\u5074\uff0c\u5c07\u201cSection\u201d\u5c6c\u6027\u66f4\u6539\u70ba\u201cIntFlashSection\u201d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/image-internal-4.17.png",mdxType:"Figure"},"\u5c07\u5716\u50cf\u653e\u5165\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,a.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668\u7684\u4ee3\u78bc\u91cf\u904e\u5927\uff0c\u4e0d\u80fd\u5305\u542b\u5728\u6240\u6709\u5c08\u6848\u4e2d\u3002 \u56e0\u6b64\uff0c\u5c0d\u65bcSTM32G0\u5c08\u6848\uff0c\u9ed8\u8a8d\u7981\u7528\u7d0b\u7406\u6620\u5c04\u5668\u3002 \u9019\u610f\u5473\u8457\u60a8\u5fc5\u9808\u5148\u555f\u7528\u7d0b\u7406\u6620\u5c04\u5668\uff0c\u7136\u5f8c\u624d\u80fd\u5728STM32G0\u5c08\u6848\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("p",null,"\u8f49\u81f3\u201cConfig\u201d\u9078\u9805\u5361\uff0c\u9078\u64c7\u201cFramework Features\u201d\uff0c\u4e26\u9ede\u64ca\u76f8\u95dc\u7684\u7d0b\u7406\u6620\u5c04\u5668\u6216\u4e00\u7d44\u7d0b\u7406\u6620\u5c04\u5668\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/enabling-texture-mapper-4.17.png",mdxType:"Figure"},"\u70ba\u7279\u5b9a\u5716\u50cf\u683c\u5f0f\u555f\u7528\u7d0b\u7406\u6620\u5c04\u5668"),(0,a.kt)("p",null,"\u9084\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",m({parentName:"p"},{href:"/4.19/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}),"\u9ede\u9663\u5716\u7de9\u5b58"),"\u5c07\u5716\u50cf\u66ab\u6642\u79fb\u52d5\u5230RAM"),(0,a.kt)("h3",m({},{id:"bitmap-painter"}),"\u9ede\u9663\u5716\u7e6a\u88fd\u5668"),(0,a.kt)("p",null,"\u53ef\u901a\u904e\u5716\u50cf\u70ba\u76f4\u7dda\u3001\u5713\u548cDynamicGraph\u4e0a\u8272\u3002 \u9019\u4e0d\u9069\u7528\u65bc\u5b58\u5132\u5728SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5716\u50cf\u3002 \u4f7f\u7528\u9019\u4e9b\u5c0f\u5de5\u5177\u7684\u5716\u50cf\u5fc5\u9808\u653e\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u6216RAM\u4e2d\u3002"),(0,a.kt)("h3",m({},{id:"l8-palette"}),"L8\u8abf\u8272\u677f"),(0,a.kt)("p",null,"L8\u683c\u5f0f\u7684\u5716\u50cf\u53ef\u4ee5\u7528\u5728\u5177\u6709\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u786c\u9ad4\u4e0a\u3002 \u9650\u5236\u689d\u4ef6\u662f\u8abf\u8272\u677f\u8cc7\u6599\u5fc5\u9808\u653e\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\uff08\u4e5f\u662f\u51fa\u65bc\u6027\u80fd\u8003\u91cf\uff09\u3002"),(0,a.kt)("p",null,"\u901a\u904e\u5728TouchGFX Designer\u4e2d\u5c07\u201cExtra Section\u201d\u4fee\u6539\u70ba\u201cIntFlashSection\u201d\uff0c\u53ef\u4ee5\u5c07\u8abf\u8272\u677f\u79fb\u52d5\u5230\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,a.kt)("h2",m({},{id:"drivers"}),"\u9a45\u52d5\u7a0b\u5f0f"),(0,a.kt)("p",null,"\u61c9\u7528\u7bc4\u672c\u662f\u4f7f\u7528TouchGFX Generator\u5275\u5efa\u7684\u3002 \u9ede\u64ca",(0,a.kt)("a",m({parentName:"p"},{href:"/4.19/zh-TW/docs/development/touchgfx-hal-development/touchgfx-generator"}),"\u6b64\u8655"),"\u95b1\u8b80TouchGFX Generator\u7684\u66f4\u591a\u76f8\u95dc\u5167\u5bb9\u3002 TouchGFX Generator\u751f\u6210HAL\u5c64\uff0c\u5b83\u9023\u63a5TouchGFX\u6846\u67b6\u8207\u4e00\u7d44\u5e95\u5c64\u9a45\u52d5\u5668\uff08\u5df2\u5728\u8a72\u61c9\u7528\u7bc4\u672c\u4e2d\u5be6\u73fe\uff09\u3002 \u8a72\u61c9\u7528\u7bc4\u672c\u7684\u5e95\u5c64\u9a45\u52d5\u4f4d\u65bc\u5c08\u6848\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Core/Src"),"\u8cc7\u6599\u593e\u4e2d\u3002"),(0,a.kt)("p",null,"\u9a45\u52d5\u5668\u4f4d\u65bc3\u500b\u6a94\u4e2d\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u9a45\u52d5\u5668")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a94\u6848")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u986f\u793a\u5668"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BDisplayDriver.c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Flash"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BDataReader.c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u6309\u9215"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BButtonController.cpp")))),(0,a.kt)("h3",m({},{id:"display"}),"\u986f\u793a\u5668"),(0,a.kt)("p",null,"\u986f\u793a\u5668\u4f7f\u7528\u6a19\u6e96SPI\u5354\u5b9a\u3002 A number of registers is the display can be written to configure the display. \u5728\u8cc7\u6599\u767c\u9001\u5230\u986f\u793a\u5668\u6642\u9396\u5b9a\u9078\u64c7\u7684\u6676\u7247\u3002 \u4f7f\u7528\u984d\u5916\u7684GPIO\uff08DCX\uff09\u5c07\u6307\u4ee4\u4f4d\u5143\u7d44\u8207\u8cc7\u6599\u4f4d\u5143\u7d44\u5340\u5206\u958b\u4f86\u3002"),(0,a.kt)("p",null,"\u9a45\u52d5\u7a0b\u5f0f\u4f7f\u7528DMA\u901a\u9053\u767c\u9001\u986f\u793a\u5668\u50cf\u7d20\u8cc7\u6599\u3002 \u9019\u6a23\u5c31\u53ef\u4ee5\u5728MCU\u8a08\u7b97\u50cf\u7d20\u7684\u540c\u6642\u9032\u884c\u767c\u9001\u3002 DMA\u5b8c\u6210\u4e2d\u65b7\u88ab\u7528\u4f86\u91cb\u653e\u5df2\u767c\u9001\u8cc7\u6599\u7684\u5b58\u5132\u7a7a\u9593\u4ee5\u4fbf\u5728\u5c07\u4f86\u7e6a\u88fd\u6642\u91cd\u8907\u4f7f\u7528\uff0c\u4ee5\u53ca\u5728\u6709\u65b0\u8cc7\u6599\u53ef\u7528\u6642\u91cd\u65b0\u958b\u59cb\u767c\u9001\u8cc7\u6599\u3002"),(0,a.kt)("p",null,"Configuration data is not send with DMA, because the CS and CDX pins must be toggled between and in the small configuration packages according to the protocol of this display."),(0,a.kt)("p",null,"\u5728\u767c\u9001\u914d\u7f6e\u8cc7\u6599\u6642\uff0c\u9a45\u52d5\u7a0b\u5f0f\u4f7f\u75288\u4f4d\u5143\u6a21\u5f0f\u7684SPI\uff0c\u4f46\u5728\u767c\u9001\u50cf\u7d20\u8cc7\u6599\u6642\u6539\u70ba16\u4f4d\u5143\u6a21\u5f0f\u3002 \u5176\u4e2d\u7684\u539f\u56e0\u5728\u65bc\uff0cMCU\u8a18\u61b6\u9ad4\u4ee5\u5c0f\u7aef\u6a21\u5f0f\u8b80\u53d6\u3002 RGB565\u683c\u5f0f\u7684\u50cf\u7d20\u5b58\u5132\u5728RAM\u4e2d\uff0c\u9996\u5148\u662f\u4f4e\u4f4d\u5143\u7d44\uff08G\u548cB\uff09\uff0c\u7136\u5f8c\u662f\u9ad8\u4f4d\u5143\u7d44\uff08R\u548cG\uff09\u3002 \u75768\u4f4dSPI\u70ba\u9032\u884c\u767c\u9001\u800c\u8b80\u53d6\u8a18\u61b6\u9ad4\u6642\uff0c\u7dad\u6301\u6b64\u9806\u5e8f\u4e0d\u8b8a\u3002 \u7576SPI\u70ba16\u4f4d\u5143\u6a21\u5f0f\u6642\uff0c\u630916\u4f4d\u5143RGB565\u5f9e\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\uff0c\u4e26\u6309\u986f\u793a\u5668\u7684\u6b63\u78ba\u9806\u5e8f\u767c\u9001\u8cc7\u6599\u3002"),(0,a.kt)("p",null,"\u5c0d\u65bc\u4e0d\u4f7f\u752816\u4f4dDMA\u7684\u9a45\u52d5\uff0c\u5fc5\u9808\u5728\u767c\u9001\u524d\u4ea4\u63db\u50cf\u7d20\u4e2d\u7684\u4f4d\u5143\u7d44\u3002"),(0,a.kt)("h4",m({},{id:"initialization"}),"Initialization"),(0,a.kt)("p",null,"The display initialization is found in the function ",(0,a.kt)("inlineCode",{parentName:"p"},"MB1642BDisplayDriver_DisplayInit(void)")),(0,a.kt)("p",null,"\u9a45\u52d5\u7a0b\u5f0f\u6309\u7167\u5efa\u8b70\u7684\u4e0a\u96fb\u9806\u5e8f\u5411\u986f\u793a\u5668\u767c\u90016\u500b\u6307\u4ee4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9000\u51fa\u7761\u7720\u6a21\u5f0f\uff0811h\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u9032\u5165\u6b63\u5e38\u6a21\u5f0f\uff0813h\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528MX\u548cBGR\u4f4d\u7f6e\u8a2d\u5b9a\u8a18\u61b6\u9ad4\u5b58\u53d6\u63a7\u5236\uff0836h\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u8a2d\u7f6e\u50cf\u7d20\u683c\u5f0f\uff083Ah\uff09\u70ba16\u4f4d\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"\u6495\u88c2\u6548\u61c9\u7dda\u958b\u555f\uff0835h\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u8a2d\u7f6e\u6495\u88c2\u6383\u63cf\u7dda\uff0844h\uff09\u4f7f\u5176 = 0")),(0,a.kt)("p",null,"\u9a45\u52d5\u6703\u5728\u9019\u4e9b\u6307\u4ee4\u4e4b\u9593\u4f11\u7720100 ms\u3002"),(0,a.kt)("h4",m({},{id:"tearing-effect"}),"\u6495\u88c2\u6548\u61c9"),(0,a.kt)("p",null,"\u4f86\u81ea\u986f\u793a\u5668\u7684\u6495\u88c2\u6548\u61c9\uff08TE\uff09\u4fe1\u865f\u975e\u5e38\u91cd\u8981\u3002 It allows the application to synchronize the update of the display memory correctly with the display refresh rate. This helps the application to avoid tearing on the display. The display asserts the signal whenever it starts an update cycle. The MCU uses this signal to start sending data to the display."),(0,a.kt)("p",null,"TE\u4fe1\u865f\u9023\u63a5\u5230MCU\u7684\u5916\u90e8\u4e2d\u65b7\u8f38\u5165\u3002 CubeMx\u751f\u6210\u4e26\u914d\u7f6e\u8a72\u5f15\u8173\u4e0a\u7684\u4e2d\u65b7\u3002"),(0,a.kt)("p",null,"\u9a45\u52d5\u4e2d\u7684callback \u6307\u793aTouchGFX\u958b\u59cb\u7e6a\u88fd\uff1a"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void HAL_GPIO_EXTI_Rising_Callback(uint16_t GPIO_Pin)\n{\n  ...\n  touchgfxSignalVSync();\n}\n")),(0,a.kt)("h3",m({},{id:"external-flash"}),"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,a.kt)("p",null,"\u986f\u793a\u677f\u5361\u4e0a\u7684SPI NOR flash\u662f\u6a19\u6e96SPI flash\u3002 \u8a72\u9a45\u52d5\u6bd4\u986f\u793a\u5668\u9a45\u52d5\u7c21\u55ae\u3002 No special initialization is required to read data from the flash."),(0,a.kt)("p",null,"The driver can read data using polled SPI (busy waiting for all the bytes) or use DMA. The time to start a DMA reception is similar to the time it takes to read 20 bytes in polled mode, so it is often slower for short reads. On the other hand, the DMA continues to run during interrupts (e.g. sysTick or application interrupts) and can run in the background when the MCU is busy rendering pixels. For this reason both methods are used."),(0,a.kt)("p",null,"The flash driver is using another DMA channel than the display driver, so both reception of new data and transmission of already drawn pixels can run concurrently."),(0,a.kt)("h4",m({},{id:"linker-script"}),"\u9023\u7d50\u5668\u8173\u672c"),(0,a.kt)("p",null,"\u9023\u7d50\u5668\u63a7\u5236\u61c9\u7528\u4e2d\u5404\u7a2e\u8cc7\u6599\u6240\u5728\u7684\u4f4d\u7f6e\u3002 \u9019\u662f\u5728\u9023\u7d50\u5668\u8173\u672c\u4e2d\u6307\u5b9a\u7684\u3002 \u4e0b\u9762\u662fgcc\u7de8\u8b6f\u5668\u7684\u9023\u7d50\u5668\u8173\u672c\u7684\u7b2c\u4e00\u90e8\u5206\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n")),(0,a.kt)("p",null,"It declares the NOR flash as starting from the address 0x90000000. The flash driver in the target application reads data in the 0x90000000 addresses from the SPI flash (using the lower 24-bits as address in the flash)."),(0,a.kt)("p",null,"The External Flash Loader used in STM32CubeProgrammer can flash data in this range to the SPI flash (see below)."),(0,a.kt)("p",null,"\u7b2c\u4e8c\u90e8\u5206\u5c07\u5716\u50cf\uff08ExtFlashSection\uff09\u548c\u5b57\u9ad4\uff08FontFlashSection\uff09\u8cc7\u6599\u653e\u5728SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n")),(0,a.kt)("p",null,"\u901a\u904e\u5411\u9023\u7d50\u5668\u8173\u672c\u4e2d\u6dfb\u52a0\u76f8\u4f3c\u5206\u5340\uff0c\u53ef\u5c07\u5176\u4ed6\u8cc7\u6599\u653e\u5165SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,a.kt)("h4",m({},{id:"flash-loader"}),"\u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09"),(0,a.kt)("p",null,"G071 TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u5305\u542bSTM32CubeProgrammer\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u3002 \u6b64\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u53ef\u5c07\u8cc7\u6599\u5beb\u5165SPI NOR flash\u3002"),(0,a.kt)("p",null,"\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u4f4d\u65bc\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"gcc/S25FL032P_STM32G071B-NUCLEO.stldr"),"\u4e2d"),(0,a.kt)("p",null,"A STM32CubeIDE project can be flashed directly from the CubeIDE, but an IAR or Keil application must be flashed from STM32CubeProgrammer."),(0,a.kt)("p",null,"The flash loader is not available in STM32CubeProgrammer initially, so it must be installed by copying the stldr file to the installation:"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/copying-stldr.png",mdxType:"Figure"},"\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u8907\u88fd\u5230STM32CubeProgrammer\u5b89\u88dd\u8cc7\u6599\u593e"),(0,a.kt)("p",null,"Now the flash loader can be selected in STM32CubeProgrammer as normal:"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/select-stldr.png",mdxType:"Figure"},"\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u8907\u88fd\u5230STM32CubeProgrammer\u5b89\u88dd\u8cc7\u6599\u593e"),(0,a.kt)(l.Z,{mdxType:"Tip"},"\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u5728Nucleo-G071RB\u958b\u767c\u677f\u4e0a\u50c5\u80fd\u4f7f\u7528\u7279\u5b9a\u7684GPIO\u914d\u7f6e  \u3002",(0,a.kt)("p",null,"\u5982\u679c\u5728\u81ea\u8a02\u786c\u9ad4\u4e0a\u5c0d\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u4f7f\u7528\u5176\u4ed6GPIO\u914d\u7f6e\uff0c\u5247\u5fc5\u9808\u76f8\u61c9\u5730\u4fee\u6539\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u3002")),(0,a.kt)("h3",m({},{id:"buttons"}),"\u6309\u9215"),(0,a.kt)("p",null,"\u6309\u9215\u9a45\u52d5\u5341\u5206\u7c21\u55ae\u3002 \u5b83\u5c0dMB1642B\u4e0a\u7684\u6416\u6746\u548cNucleo\u677f\u4e0a\u7684\u85cd\u8272\u6309\u9215\u4f7f\u7528\u76845\u500bGPIO\u7684\u72c0\u614b\u9032\u884c\u63a1\u6a23\u3002"),(0,a.kt)("p",null,"\u6b64\u6309\u9215\u9a45\u52d5\u4f5c\u70baBottonController\u5b89\u88dd\u5728TouchGFX\u4e2d\u3002 \u9019\u610f\u5473\u8457\u53ef\u4ee5\u76f4\u63a5\u5728TouchGFX Designer\u4e2d\u9ede\u64ca\u6309\u9215\u4ee5\u4fbf\u4f7f\u7528\u3002 \u9084\u53ef\u4ee5\u5728\u7528\u6236\u4ee3\u78bc\u4e2d\u4f7f\u7528\u5b83\u5011\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleKeyEvent(uint8_t key)\n{\n    if (key == '6')\n    {\n        application().gotoScreen2Screen();\n    }\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u7684\u9375\u78bc\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u9375")),(0,a.kt)("th",m({parentName:"tr"},{align:"right"}),(0,a.kt)("strong",{parentName:"th"},"\u7a0b\u5f0f\u78bc")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5de6"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"'4'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u53f3"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"'6'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4e0a"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"'8'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4e0b"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"'2'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4e2d"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"'5'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u85cd\u8272\u6309\u9215"),(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"'0'")))),(0,a.kt)("p",null,"These keys are also usable when you run the Simulator (hit ",(0,a.kt)("inlineCode",{parentName:"p"},"F5")," in the TouchGFX Designer) by using the keyboard numpad."))}v.isMDXComponent=!0}}]);