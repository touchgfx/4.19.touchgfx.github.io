"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6549],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22425:function(e,t,a){var n=a(67294);class r extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,a){var n=a(67294),r=a(25026);t.Z=function(e){const t=e.noShadow||!1,a=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:a,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:a,height:l,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,a){var n=a(67294);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},37793:function(e,t,a){var n=a(67294),r=a(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},25053:function(e,t,a){a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return b}});var n=a(3905),r=a(44035),l=a(37793),i=a(22425),o=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&h(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&h(e,a,t[a]);return e};const g={id:"touchgfx-on-lowcost-hardware",title:"\u4f4e\u6210\u672c\u786c\u4ef6\u4e0a\u7684TouchGFX"},k=void 0,f={unversionedId:"development/scenarios/touchgfx-on-lowcost-hardware",id:"development/scenarios/touchgfx-on-lowcost-hardware",title:"\u4f4e\u6210\u672c\u786c\u4ef6\u4e0a\u7684TouchGFX",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-lowcost-hardware.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-lowcost-hardware",permalink:"/4.19/zh-CN/docs/development/scenarios/touchgfx-on-lowcost-hardware",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-on-lowcost-hardware",title:"\u4f4e\u6210\u672c\u786c\u4ef6\u4e0a\u7684TouchGFX"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.19/zh-CN/docs/category/scenarios-2"},next:{title:"TouchGFX on NeoChrom",permalink:"/4.19/zh-CN/docs/development/scenarios/touchgfx-on-gpu2d"}},N={},b=[{value:"\u786c\u4ef6\u6982\u8ff0",id:"hardware-overview",level:2},{value:"GPIO\u5206\u914d",id:"gpio-allocation",level:3},{value:"\u542f\u52a8\u9879\u76ee",id:"starting-a-project",level:3},{value:"\u663e\u793a\u5c4f\u66f4\u65b0",id:"display-updates",level:2},{value:"\u7ed8\u5236\u901f\u5ea6",id:"drawing-speed",level:3},{value:"\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\u65f6TouchGFX\u7684\u9650\u5236",id:"touchgfx-limitations-with-serial-flash",level:2},{value:"\u7eb9\u7406\u6620\u5c04\u5668",id:"texture-mapper",level:3},{value:"\u4f4d\u56fe\u7ed8\u5236\u5668",id:"bitmap-painter",level:3},{value:"L8\u8c03\u8272\u677f",id:"l8-palette",level:3},{value:"\u9a71\u52a8",id:"drivers",level:2},{value:"\u663e\u793a\u5c4f",id:"display",level:3},{value:"Initialization",id:"initialization",level:4},{value:"\u6495\u88c2\u6548\u5e94",id:"tearing-effect",level:4},{value:"\u5916\u90e8\u95ea\u5b58",id:"external-flash",level:3},{value:"\u94fe\u63a5\u811a\u672c",id:"linker-script",level:4},{value:"\u5916\u90e8\u95ea\u5b58\u4e0b\u8f7d",id:"flash-loader",level:4},{value:"\u6309\u94ae",id:"buttons",level:3}],y={toc:b};function v(e){var t,a=e,{components:o}=a,h=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),h),p(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,'This section discusses how to use TouchGFX on low cost hardware with limited amount of RAM and flash, no acceleration and "slow" SPI connection to external flash and display.'),(0,n.kt)("p",null,"\u6211\u4eec\u5c06\u5c1d\u8bd5\u63d0\u4f9b\u4e00\u4e9b\u5173\u4e8e\u4e3a\u6307\u5b9a\u786c\u4ef6\u7f16\u5199\u6700\u4f73\u5e94\u7528\u7684\u5efa\u8bae\u3002"),(0,n.kt)("p",null,"Throughout this section we will use the TouchGFX board setup for the STM32G071 Nucleo board with the X-Nucleo-GFX01M1 expansion board as example hardware. The expansion board features a 16-bit display and a serial flash."),(0,n.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.webp",mdxType:"Figure"},"Nucleo-G071RB\u548cX-Nucleo-GFX01M1\u6269\u5c55\u677f"),(0,n.kt)("h2",m({},{id:"hardware-overview"}),"\u786c\u4ef6\u6982\u8ff0"),(0,n.kt)("p",null,"\u8be5\u5957\u4ef6\u4e2d\u7684\u786c\u4ef6\u914d\u7f6e\u5305\u62ecSTM32G071 MCU\u3001SPI NOR flash\u3001SPI\u663e\u793a\u5c4f\u548c\u6447\u6746\u6309\u94ae\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u7ec4\u4ef6")),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),"\xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"STM32G071RB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU RAM"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 Kb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"128 Kb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4f"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Displaytech DT022CTFT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4f\u5206\u8fa8\u7387"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"240 x 320")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display format"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"16-bit RGB565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4f\u63a7\u5236\u5668"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"ILI9341V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4f\u8fde\u63a5"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"SPI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4f\u8fde\u63a5\u901f\u5ea6"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Macronix MX25L6433F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash\u5927\u5c0f"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"64 Mbit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash\u8fde\u63a5\u901f\u5ea6"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 MHz")))),(0,n.kt)("p",null,"\u663e\u793a\u5c4f\u8fde\u63a5\u5230SPI1\u5916\u8bbe\uff0c\u800c\u95ea\u5b58\u8fde\u63a5\u5230SPI2\u5916\u8bbe\u3002 \u56e0\u6b64\uff0cMCU\u80fd\u591f\u5728\u5411\u663e\u793a\u5c4f\u53d1\u9001\u6570\u636e\u7684\u540c\u65f6\u4ece\u95ea\u5b58\u8bfb\u53d6\u6570\u636e\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-gfx01m1-architecture.webp",width:"500px",mdxType:"Figure"},"\u5177\u6709X-Nucleo-GFX01M1\u67b6\u6784\u7684Nucleo-G071RB"),(0,n.kt)("h3",m({},{id:"gpio-allocation"}),"GPIO\u5206\u914d"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u4fe1\u53f7")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"GPIO\u5f15\u811a")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4fCS"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4fDCX"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4fSCK"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4fMOSI"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4fTE"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash CS"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash SCK"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash MOSI"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PC3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash MISO"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PC2")))),(0,n.kt)("p",null,"\u4e0a\u8868\u5217\u51fa\u4e86\u95ea\u5b58\u548c\u663e\u793a\u5c4f\u7684\u4fe1\u53f7GPIO\u5206\u914d\u3002 \u8fd9\u4e9b\u4fe1\u53f7\u53ef\u901a\u8fc7\u793a\u6ce2\u5668\u6216\u903b\u8f91\u5206\u6790\u4eea\u8fdb\u884c\u76d1\u6d4b\u3002 This is very useful during debugging of e.g. performance problems."),(0,n.kt)("h3",m({},{id:"starting-a-project"}),"\u542f\u52a8\u9879\u76ee"),(0,n.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u4e3aSTM32G071RB Nucleo\u8bc4\u4f30\u5957\u4ef6\u542f\u52a8\u4e00\u4e2a\u9879\u76ee\u3002 \u70b9\u51fb\u201cCreate New\u201d\u6309\u94ae\uff0c\u7136\u540e\u641c\u7d22STM32G071 Nucleo\u3002  \u6b64\u6a21\u677f\u4e13\u4e3aNucleo-G071RB\u5957\u4ef6\u548cX-Nucleo-GFX01M1\u663e\u793a\u677f\u5361\u800c\u5f00\u53d1\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-start-new-project-4.17.webp",mdxType:"Figure"},"Nucleo-G071RB\u7684\u65b0\u9879\u76ee"),(0,n.kt)("p",null,"\u8be5\u5e94\u7528\u6a21\u677f\u652f\u6301NOR flash\u3001\u663e\u793a\u5c4f\u548c\u6309\u94ae\u3002 The display can be used both in portrait and horizontal mode."),(0,n.kt)("p",null,"\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u7684 ",(0,n.kt)("em",{parentName:"p"},"\u914d\u7f6e -> \u663e\u793a\u5c4f"),"\u90e8\u5206\u4fee\u6539\u663e\u793a\u5c4f\u65b9\u5411\uff1a"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/portrait-4.17.webp",mdxType:"Figure"},"\u9009\u62e9\u7ad6\u5c4f\u6216\u6a2a\u5c4f\u663e\u793a"),(0,n.kt)("p",null,"The display on the X-Nucleo-GFX01M1 shield is natively portrait oriented (higher than wide), but it can easily be used with horizontal orientation."),(0,n.kt)("h2",m({},{id:"display-updates"}),"\u663e\u793a\u5c4f\u66f4\u65b0"),(0,n.kt)("p",null,"\u5982\u4e0a\u6587\u6240\u8ff0\uff0c\u663e\u793a\u5c4f\u5206\u8fa8\u7387\u4e3a240 x 320\u50cf\u7d20\u3002 \u603b\u517176,800\u50cf\u7d20\u6216153,600\u5b57\u8282\u3002 MCU\u4e0e\u663e\u793a\u5c4f\u4e4b\u95f4\u7684SPI\u8fde\u63a5\u7684\u8fd0\u884c\u9891\u7387\u4e3a32 MHz\u3002 \u56e0\u6b64\uff0c\u4f20\u8f93\u901f\u5ea6\u53ef\u4ee5\u8fbe\u52304 MB/s\u62162M\u50cf\u7d20/s\u3002"),(0,n.kt)("p",null,"\u663e\u793a\u5c4f\u7684\u5237\u65b0\u9891\u7387\u4e3a76.1 Hz\uff0c\u56e0\u6b64\u5e27\u95f4\u9694\u4e3a13.14 ms\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/display-te.webp",mdxType:"Figure"},"\u663e\u793a\u5c4f\u7684\u6495\u88c2\u4fe1\u53f7"),(0,n.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u6709\u6700\u591a13 ms\u7684\u65f6\u95f4\u6765\u53d1\u9001\u4e0b\u4e00\u5e27\u7684\u6570\u636e\u3002 In that time we can send 2.000.000 pixels/s / 76 fps = 26.280 pixels / frame or 34% of a full screen. In practice we cannot sustain that transfer speed on the SPI bus because of the protocol overhead so we cannot expect to send more than approximately 30% of a full frame."),(0,n.kt)("p",null,"\u5982\u679c\u5e94\u7528\u66f4\u65b0\u7684\u50cf\u7d20\u6570\u8d85\u8fc7\u6b64\u503c\uff0c\u786c\u4ef6\u5c06\u65e0\u6cd5\u5728\u5e27\u65f6\u4ee5\u5185\u5b8c\u6210\u53d1\u9001\u3002 \u7ed3\u679c\u662f\u663e\u793a\u5c4f\u5c06\u5728\u5168\u90e8\u66f4\u65b0\u7ed3\u675f\u524d\u5f00\u59cb\u663e\u793a\u66f4\u65b0\u7684\u5e27\u3002 \u56e0\u6b64\uff0c\u7528\u6237\u6709\u65f6\u4f1a\u770b\u5230\u539f\u6765\u7684\u5e27\u4e0e\u65b0\u7684\u5e27\u6df7\u5408\u5728\u4e00\u8d77\u7684\u753b\u9762\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u52a8\u753b\u800c\u8a00\uff0c\u7528\u6237\u6ce8\u610f\u4e0d\u5230\u8fd9\u4e00\u70b9\uff0c\u4f46\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\u53ef\u80fd\u4e0d\u53ef\u63a5\u53d7\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u5c06\u66f4\u65b0\u7387\u7ef4\u6301\u572830%\u4ee5\u4e0b\u3002 \u5982 \u901a\u8fc7\u6e10\u8fdb\u5f0f\u5730\u5206\u6b65\u66f4\u65b0\u5e27\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u4e00\u822c\u6765\u8bf4\u6700\u597d\u5728\u5c4f\u5e55\u4e0a\u6269\u5c55\u9879\u76ee\uff0c\u800c\u4e0d\u662f\u79fb\u52a8\u9879\u76ee\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/star.webp",width:"400",mdxType:"Figure"},"\u663e\u793a\u5c4f\u7684\u6495\u88c2\u4fe1\u53f7"),(0,n.kt)("p",null,"\u5f53\u661f\u5f62\u79fb\u52a8\u5230\u53f3\u4fa7\u65f6\uff0c\u5fc5\u987b\u66f4\u65b0\u661f\u5f62\u8986\u76d6\u7684\u6240\u6709\u50cf\u7d20\u3002 \u5982\u679c\u53ea\u6269\u5c55\u661f\u5f62\uff0c\u5219\u53ea\u9700\u66f4\u65b0\u65b0\u50cf\u7d20\u3002 \u5728\u4e0a\u4e00\u5e27\u66f4\u65b0\u7684\u50cf\u7d20\u4fdd\u6301\u4e0d\u53d8\u3002"),(0,n.kt)("h3",m({},{id:"drawing-speed"}),"\u7ed8\u5236\u901f\u5ea6"),(0,n.kt)("p",null,"\u5411\u663e\u793a\u5c4f\u53d1\u9001\u6570\u636e\u7684\u9891\u7387\u4e3a\u6700\u9ad832 MHz\u3002"),(0,n.kt)("p",null,"\u4e32\u884c\u95ea\u5b58\u80fd\u4ee5\u4e0e\u663e\u793a\u5c4f\u53d1\u9001\u76f8\u540c\u7684\u901f\u5ea6\u8fd0\u884c\u3002 \u8fd9\u610f\u5473\u7740\u4e32\u884c\u95ea\u5b58\u7684\u901f\u5ea6\u8db3\u591f\u5feb\uff0c\u80fd\u4ee5\u6700\u9ad8\u901f\u5ea6\u5411\u663e\u793a\u5c4f\u4f9b\u5e94\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u8fd9\u53ea\u6709\u5728\u95ea\u5b58\u4e2d\u7684\u56fe\u50cf\u50cf\u7d20\u683c\u5f0f\u4e3aRGB565\u65f6\u624d\u80fd\u5b9e\u73b0\u3002 In this case is two bytes read from the flash equal to 1 pixel, which is also two bytes on the display. If the pixel format in the flash is ARGB8888, we need to read double the amount of data from the flash to produce a pixel on the display, and the serial flash will not be able to keep up with the display."),(0,n.kt)("p",null,"When this happens we are not sending data to the display continuously and it will not be possible to update all 30% of the display in a frame. \u4e00\u79cd\u529e\u6cd5\u662f\u5c06\u56fe\u50cf\u79fb\u52a8\u5230\u5185\u90e8\u95ea\u5b58\uff0c\u53e6\u4e00\u79cd\u529e\u6cd5\u5f53\u7136\u662f\u66f4\u6539\u50cf\u7d20\u683c\u5f0f\u3002"),(0,n.kt)("p",null,"\u5176\u4ed6\u63a7\u4ef6\u4e0d\u53d7\u95ea\u5b58\u901f\u5ea6\u7684\u5236\u7ea6\u3002 \u5982 Box\u63a7\u4ef6\uff0c\u7528\u4e8e\u7ed8\u5236\u5f69\u8272\u77e9\u5f62\u3002 \u6b64\u63a7\u4ef6\u901f\u5ea6\u5f88\u5feb\uff0c\u6bd4\u663e\u793a\u5c4f\u6570\u636e\u53d1\u9001\u901f\u5ea6\u8981\u5feb\u8bb8\u591a\u3002 \u5176\u4ed6\u63a7\u4ef6\uff08\u5982Line\u548cCircle\u63a7\u4ef6\uff09\u9700\u8981\u4f7f\u7528\u66f4\u591aCPU\u8d44\u6e90\u3002 \u8fd9\u4e9b\u63a7\u4ef6\u751f\u6210\u50cf\u7d20\u7684\u901f\u5ea6\u6bd4\u4e0d\u4e0a\u5c06\u5b83\u4eec\u53d1\u9001\u7ed9\u663e\u793a\u5c4f\u65f6\u7684\u901f\u5ea6\u3002 \u5bf9\u4e8e\u4f7f\u7528\u8fd9\u4e9b\u63a7\u4ef6\u7684\u5e94\u7528\uff0c\u4e0d\u80fd\u671f\u671b\u5728\u6bcf\u5e27\u65f6\u95f4\u5185\u66f4\u65b0\u663e\u793a\u5c4f30%\u533a\u57df\u3002"),(0,n.kt)("p",null,"\u70b9\u51fb",(0,n.kt)("a",m({parentName:"p"},{href:"../../basic-concepts/performance#the-complexity-of-rendering-the-pixels"}),"\u8fd9\u91cc"),"\u4e86\u89e3\u50cf\u7d20\u6e32\u67d3\u7684\u590d\u6742\u6027"),(0,n.kt)("h2",m({},{id:"touchgfx-limitations-with-serial-flash"}),"\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\u65f6TouchGFX\u7684\u9650\u5236"),(0,n.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u5458\u5fc5\u987b\u8ba4\u8bc6\u5230\uff0c\u5728STM32G0\u5e73\u53f0\u4f7f\u7528\u4e32\u884c\u95ea\u5b58\u65f6\uff0c\u4f7f\u7528TouchGFX\u6709\u5c11\u8bb8\u9650\u5236\u3002"),(0,n.kt)("h3",m({},{id:"texture-mapper"}),"\u7eb9\u7406\u6620\u5c04\u5668"),(0,n.kt)("p",null,"\u7eb9\u7406\u6620\u5c04\u5668\u63a7\u4ef6\uff08TextureMapper\u3001AnimationTextureMapper\u548c ScalableImage\uff09\u4e0d\u80fd\u7ed8\u5236\u5b58\u50a8\u5728\u5916\u90e8SPI\u95ea\u5b58\u4e2d\u7684\u56fe\u50cf\u3002 \u539f\u56e0\u5728\u4e8e\uff0c\u7528\u5b58\u50a8\u5728\u4e32\u884c\u95ea\u5b58\u4e2d\u7684\u56fe\u50cf\u65e0\u6cd5\u83b7\u5f97\u53ef\u63a5\u53d7\u7684\u6027\u80fd\uff0c\u5982\u56fe\u50cf\u65cb\u8f6c\u3002"),(0,n.kt)("p",null,"\u5728Texture Mapper\u63a7\u4ef6\u4e2d\u4f7f\u7528\u56fe\u50cf\u65f6\uff0c\u5fc5\u987b\u5c06\u56fe\u50cf\u4fdd\u5b58\u5728\u5185\u90e8\u95ea\u5b58\u6216RAM\u4e2d\u3002 \u53ef\u901a\u8fc7TouchGFX Designer\u4fee\u6539\u56fe\u50cf\u914d\u7f6e\uff0c\u8f7b\u677e\u5730\u5c06\u56fe\u50cf\u4fdd\u5b58\u5728\u5185\u90e8\u95ea\u5b58\u4e2d\u3002"),(0,n.kt)("p",null,"\u8f6c\u81f3Images\u9009\u9879\u5361\u5e76\u9009\u4e2d\u56fe\u50cf\u3002 \u5728\u7a97\u53e3\u7684\u53f3\u4fa7\uff0c\u5c06\u201cSection\u201d\u5c5e\u6027\u66f4\u6539\u4e3a\u201cIntFlashSection\u201d\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/image-internal-4.17.webp",mdxType:"Figure"},"\u5c06\u56fe\u50cf\u653e\u5165\u5185\u90e8\u95ea\u5b58"),(0,n.kt)("p",null,"Texture Mapper\u7684\u4ee3\u7801\u91cf\u8fc7\u5927\uff0c\u4e0d\u80fd\u5305\u542b\u5728\u6240\u6709\u9879\u76ee\u4e2d\u3002 \u56e0\u6b64\uff0c\u5bf9\u4e8eSTM32G0\u9879\u76ee\uff0c\u9ed8\u8ba4\u7981\u7528Texture Mapper\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u5fc5\u987b\u5148\u5168\u80fdTexture Mapper\uff0c\u7136\u540e\u624d\u80fd\u5728STM32G0\u9879\u76ee\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,n.kt)("p",null,"\u8f6c\u81f3\u201cConfig\u201d\u9009\u9879\u5361\uff0c\u9009\u62e9\u201cFramework Features\u201d\uff0c\u5e76\u70b9\u51fb\u76f8\u5173\u7684\u4e00\u4e2a\u6216\u4e00\u7ec4Texture Mapper\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/enabling-texture-mapper-4.17.webp",mdxType:"Figure"},"\u4e3a\u7279\u5b9a\u56fe\u50cf\u683c\u5f0f\u542f\u7528Texture Mapper"),(0,n.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("a",m({parentName:"p"},{href:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}),"Bitmap Cache"),"\u5c06\u56fe\u50cf\u6682\u65f6\u79fb\u52a8\u5230RAM"),(0,n.kt)("h3",m({},{id:"bitmap-painter"}),"\u4f4d\u56fe\u7ed8\u5236\u5668"),(0,n.kt)("p",null,"\u53ef\u901a\u8fc7\u56fe\u50cf\u4e3a\u76f4\u7ebf\u3001\u5706\u548cDynamicGraph\u4e0a\u8272\u3002 \u8fd9\u4e0d\u9002\u7528\u4e8e\u5b58\u50a8\u5728SPI\u95ea\u5b58\u4e2d\u7684\u56fe\u50cf\u3002 \u4f7f\u7528\u8fd9\u4e9b\u63a7\u4ef6\u7684\u56fe\u50cf\u5fc5\u987b\u653e\u5728\u5185\u90e8\u95ea\u5b58\u6216RAM\u4e2d\u3002"),(0,n.kt)("h3",m({},{id:"l8-palette"}),"L8\u8c03\u8272\u677f"),(0,n.kt)("p",null,"L8\u683c\u5f0f\u7684\u56fe\u50cf\u53ef\u4ee5\u7528\u5728\u5177\u6709\u4e32\u884c\u95ea\u5b58\u7684\u786c\u4ef6\u4e0a\u3002 \u9650\u5236\u6761\u4ef6\u662f\u8c03\u8272\u677f\u6570\u636e\u5fc5\u987b\u653e\u5728\u5185\u90e8\u95ea\u5b58\u4e2d\uff08\u4e5f\u662f\u51fa\u4e8e\u6027\u80fd\u8003\u8651\uff09\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u5728TouchGFX Designer\u4e2d\u5c06\u201cExtra Section\u201d\u4fee\u6539\u4e3a\u201cIntFlashSection\u201d\uff0c\u53ef\u4ee5\u5c06\u8c03\u8272\u677f\u79fb\u52a8\u5230\u5185\u90e8\u95ea\u5b58\u3002"),(0,n.kt)("h2",m({},{id:"drivers"}),"\u9a71\u52a8"),(0,n.kt)("p",null,"\u5e94\u7528\u6a21\u677f\u662f\u4f7f\u7528TouchGFX Generator\u521b\u5efa\u7684\u3002 \u70b9\u51fb ",(0,n.kt)("a",m({parentName:"p"},{href:"/4.19/zh-CN/docs/development/touchgfx-hal-development/touchgfx-generator"}),"\u6b64\u5904"),"\u9605\u8bfbTouchGFX Generator\u7684\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u3002 TouchGFX Generator\u751f\u6210HAL\u5c42\uff0c\u5b83\u8fde\u63a5TouchGFX\u6846\u67b6\u4e0e\u4e00\u7ec4\u5e95\u5c42\u9a71\u52a8\u7a0b\u5e8f\uff08\u5df2\u5728\u8be5\u5e94\u7528\u6a21\u677f\u4e2d\u5b9e\u73b0\uff09\u3002 \u8be5\u5e94\u7528\u6a21\u677f\u7684\u5e95\u5c42\u9a71\u52a8\u4f4d\u4e8e\u9879\u76ee\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"Core/Src"),"\u6587\u4ef6\u5939\u4e2d\u3002"),(0,n.kt)("p",null,"\u9a71\u52a8\u7a0b\u5e8f\u4f4d\u4e8e3\u4e2a\u6587\u4ef6\u4e2d\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u9a71\u52a8")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u6587\u4ef6")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5c4f"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BDisplayDriver.c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BDataReader.c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6309\u94ae"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BButtonController.cpp")))),(0,n.kt)("h3",m({},{id:"display"}),"\u663e\u793a\u5c4f"),(0,n.kt)("p",null,"\u663e\u793a\u5c4f\u4f7f\u7528\u6807\u51c6SPI\u534f\u8bae\u3002 A number of registers is the display can be written to configure the display. \u5728\u6570\u636e\u53d1\u9001\u5230\u663e\u793a\u5c4f\u65f6\u751f\u6210\u7247\u9009\u4fe1\u53f7\u3002 \u4f7f\u7528\u989d\u5916\u7684GPIO\uff08DCX\uff09\u5c06\u6307\u4ee4\u5b57\u8282\u4e0e\u6570\u636e\u5b57\u8282\u533a\u5206\u5f00\u6765\u3002"),(0,n.kt)("p",null,"\u9a71\u52a8\u4f7f\u7528DMA\u901a\u9053\u53d1\u9001\u50cf\u7d20\u6570\u636e\u7ed9\u663e\u793a\u5c4f\u3002 \u8fd9\u6837\u5c31\u53ef\u4ee5\u5728MCU\u8ba1\u7b97\u50cf\u7d20\u7684\u540c\u65f6\u8fdb\u884c\u53d1\u9001\u3002 DMA\u5b8c\u6210\u4e2d\u65ad\u88ab\u7528\u6765\u91ca\u653e\u5df2\u53d1\u9001\u6570\u636e\u7684\u5b58\u50a8\u7a7a\u95f4\u4ee5\u4fbf\u5728\u5c06\u6765\u7ed8\u5236\u65f6\u91cd\u590d\u4f7f\u7528\uff0c\u4ee5\u53ca\u5728\u6709\u65b0\u6570\u636e\u53ef\u7528\u65f6\u91cd\u65b0\u5f00\u59cb\u53d1\u9001\u6570\u636e\u3002"),(0,n.kt)("p",null,"Configuration data is not send with DMA, because the CS and CDX pins must be toggled between and in the small configuration packages according to the protocol of this display."),(0,n.kt)("p",null,"\u5728\u53d1\u9001\u914d\u7f6e\u6570\u636e\u65f6\uff0c\u9a71\u52a8\u4f7f\u75288\u4f4d\u6a21\u5f0f\u7684SPI\uff0c\u4f46\u5728\u53d1\u9001\u50cf\u7d20\u6570\u636e\u65f6\u6539\u4e3a16\u4f4d\u6a21\u5f0f\u3002 \u5176\u4e2d\u7684\u539f\u56e0\u5728\u4e8e\uff0cMCU\u5b58\u50a8\u5668\u4ee5\u5c0f\u7aef\u6a21\u5f0f\u8bfb\u53d6\u3002 RGB565\u683c\u5f0f\u7684\u50cf\u7d20\u5b58\u50a8\u5728RAM\u4e2d\uff0c\u9996\u5148\u662f\u4f4e\u5b57\u8282\uff08G\u548cB\uff09\uff0c\u7136\u540e\u662f\u9ad8\u5b57\u8282\uff08R\u548cG\uff09\u3002 \u5f53\u4f7f\u75288\u4f4dSPI\u53d1\u9001\u5185\u5b58\u6570\u636e\u65f6\uff0c\u6b64\u987a\u5e8f\u7ef4\u6301\u4e0d\u53d8\u3002 \u5f53SPI\u4e3a16\u4f4d\u6a21\u5f0f\u65f6\uff0c\u630916\u4f4dRGB565\u4ece\u5b58\u50a8\u5668\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u6309\u663e\u793a\u5c4f\u7684\u6b63\u786e\u987a\u5e8f\u53d1\u9001\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u4f7f\u752816\u4f4dDMA\u7684\u9a71\u52a8\uff0c\u5fc5\u987b\u5728\u53d1\u9001\u524d\u4ea4\u6362\u50cf\u7d20\u4e2d\u7684\u5b57\u8282\u5e8f\u3002"),(0,n.kt)("h4",m({},{id:"initialization"}),"Initialization"),(0,n.kt)("p",null,"The display initialization is found in the function ",(0,n.kt)("inlineCode",{parentName:"p"},"MB1642BDisplayDriver_DisplayInit(void)")),(0,n.kt)("p",null,"\u9a71\u52a8\u6309\u7167\u63a8\u8350\u7684\u4e0a\u7535\u987a\u5e8f\u5411\u663e\u793a\u5c4f\u53d1\u90016\u4e2a\u6307\u4ee4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9000\u51fa\u7761\u7720\u6a21\u5f0f\uff0811h\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u6b63\u5e38\u6a21\u5f0f\uff0813h\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5b58\u50a8\u5668\u5b58\u53d6\u63a7\u5236\uff0836h\uff09\uff0cMX\u548cBGR\u4f4d\u7f6e\u4f4d"),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u50cf\u7d20\u683c\u5f0f\uff083Ah\uff09\u4e3a16\u4f4d\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ol"},"\u6495\u88c2\u884c\u529f\u80fd\u5f00\u542f\uff0835h\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u6495\u88c2\u626b\u63cf\u884c\uff0844h\uff09\u4f7f\u5176 = 0")),(0,n.kt)("p",null,"\u9a71\u52a8\u4f1a\u5728\u8fd9\u4e9b\u6307\u4ee4\u4e4b\u95f4\u4f11\u7720100 ms\u3002"),(0,n.kt)("h4",m({},{id:"tearing-effect"}),"\u6495\u88c2\u6548\u5e94"),(0,n.kt)("p",null,"\u6765\u81ea\u663e\u793a\u5c4f\u7684\u6495\u88c2\u6548\u5e94\uff08TE\uff09\u4fe1\u53f7\u975e\u5e38\u91cd\u8981\u3002 It allows the application to synchronize the update of the display memory correctly with the display refresh rate. This helps the application to avoid tearing on the display. The display asserts the signal whenever it starts an update cycle. The MCU uses this signal to start sending data to the display."),(0,n.kt)("p",null,"TE\u4fe1\u53f7\u8fde\u63a5\u5230MCU\u7684\u5916\u90e8\u4e2d\u65ad\u8f93\u5165\u3002 CubeMx\u751f\u6210\u5e76\u914d\u7f6e\u8be5\u5f15\u811a\u4e0a\u7684\u4e2d\u65ad\u3002"),(0,n.kt)("p",null,"\u9a71\u52a8\u4e2d\u7684\u56de\u8c03\u6307\u793aTouchGFX\u5f00\u59cb\u7ed8\u5236\uff1a"),(0,n.kt)(i.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void HAL_GPIO_EXTI_Rising_Callback(uint16_t GPIO_Pin)\n{\n  ...\n  touchgfxSignalVSync();\n}\n")),(0,n.kt)("h3",m({},{id:"external-flash"}),"\u5916\u90e8\u95ea\u5b58"),(0,n.kt)("p",null,"\u663e\u793a\u677f\u5361\u4e0a\u7684SPI NOR flash\u662f\u6807\u51c6SPI flash\u3002 \u8be5\u9a71\u52a8\u6bd4\u663e\u793a\u5c4f\u9a71\u52a8\u7b80\u5355\u3002 No special initialization is required to read data from the flash."),(0,n.kt)("p",null,"The driver can read data using polled SPI (busy waiting for all the bytes) or use DMA. The time to start a DMA reception is similar to the time it takes to read 20 bytes in polled mode, so it is often slower for short reads. On the other hand, the DMA continues to run during interrupts (e.g. sysTick or application interrupts) and can run in the background when the MCU is busy rendering pixels. For this reason both methods are used."),(0,n.kt)("p",null,"The flash driver is using another DMA channel than the display driver, so both reception of new data and transmission of already drawn pixels can run concurrently."),(0,n.kt)("h4",m({},{id:"linker-script"}),"\u94fe\u63a5\u811a\u672c"),(0,n.kt)("p",null,"\u94fe\u63a5\u5668\u63a7\u5236\u5e94\u7528\u4e2d\u5404\u79cd\u6570\u636e\u6240\u5728\u7684\u4f4d\u7f6e\u3002 \u8fd9\u662f\u5728\u94fe\u63a5\u811a\u672c\u4e2d\u6307\u5b9a\u7684\u3002 \u4e0b\u9762\u662fgcc\u7f16\u8bd1\u5668\u7684\u94fe\u63a5\u5668\u811a\u672c\u7684\u7b2c\u4e00\u90e8\u5206\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n")),(0,n.kt)("p",null,"It declares the NOR flash as starting from the address 0x90000000. The flash driver in the target application reads data in the 0x90000000 addresses from the SPI flash (using the lower 24-bits as address in the flash)."),(0,n.kt)("p",null,"The External Flash Loader used in STM32CubeProgrammer can flash data in this range to the SPI flash (see below)."),(0,n.kt)("p",null,"\u7b2c\u4e8c\u90e8\u5206\u5c06\u56fe\u50cf\uff08ExtFlashSection\uff09\u548c\u5b57\u4f53\uff08FontFlashSection\uff09\u6570\u636e\u653e\u5728SPI\u95ea\u5b58\u4e2d\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n")),(0,n.kt)("p",null,"\u901a\u8fc7\u5411\u94fe\u63a5\u5668\u811a\u672c\u4e2d\u6dfb\u52a0\u76f8\u4f3c\u5206\u533a\uff0c\u53ef\u5c06\u5176\u4ed6\u6570\u636e\u653e\u5165SPI\u95ea\u5b58\u3002"),(0,n.kt)("h4",m({},{id:"flash-loader"}),"\u5916\u90e8\u95ea\u5b58\u4e0b\u8f7d"),(0,n.kt)("p",null,"G071 TouchGFX\u5e94\u7528\u6a21\u677f\u5305\u542bSTM32CubeProgrammer\u8981\u4f7f\u7528\u5230\u7684flash loader\u7b97\u6cd5\uff0c \u7528\u4e8e\u5c06\u6570\u636e\u5199\u5165SPI NOR flash\u3002"),(0,n.kt)("p",null,"flash loader\u6587\u4ef6\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"gcc/S25FL032P_STM32G071B-NUCLEO.stldr")),(0,n.kt)("p",null,"A STM32CubeIDE project can be flashed directly from the CubeIDE, but an IAR or Keil application must be flashed from STM32CubeProgrammer."),(0,n.kt)("p",null,"The flash loader is not available in STM32CubeProgrammer initially, so it must be installed by copying the stldr file to the installation:"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/copying-stldr.webp",mdxType:"Figure"},"\u590d\u5236flash loader\u5230STM32CubeProgrammer\u5b89\u88c5\u6587\u4ef6\u5939"),(0,n.kt)("p",null,"Now the flash loader can be selected in STM32CubeProgrammer as normal:"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/select-stldr.webp",mdxType:"Figure"},"\u590d\u5236flash loader\u5230STM32CubeProgrammer\u5b89\u88c5\u6587\u4ef6\u5939"),(0,n.kt)(l.Z,{mdxType:"Tip"},"\u6b64flash loader\u53ea\u80fd\u4e0eNucleo-G071RB\u677f\u4e0a\u4f7f\u7528\u7279\u5b9aGPIO\u914d\u7f6e\u914d\u5408\u4f7f\u7528\u3002",(0,n.kt)("p",null,"\u5982\u679c\u5728\u81ea\u5b9a\u4e49\u786c\u4ef6\u4e0a\u5bf9\u4e32\u884c\u95ea\u5b58\u4f7f\u7528\u5176\u4ed6GPIO\u914d\u7f6e\uff0c\u5219\u5fc5\u987b\u76f8\u5e94\u5730\u4fee\u6539flash loader\u3002")),(0,n.kt)("h3",m({},{id:"buttons"}),"\u6309\u94ae"),(0,n.kt)("p",null,"\u6309\u94ae\u9a71\u52a8\u5341\u5206\u7b80\u5355\u3002 \u5b83\u5bf9MB1642B\u4e0a\u7684\u6447\u6746\u548cNucleo\u677f\u4e0a\u7684\u84dd\u8272\u7528\u6237\u6309\u94ae\u4f7f\u7528\u76845\u4e2aGPIO\u7684\u72b6\u6001\u8fdb\u884c\u91c7\u6837\u3002"),(0,n.kt)("p",null,"\u6b64\u6309\u94ae\u9a71\u52a8\u4f5c\u4e3aBottonController\u5b89\u88c5\u5728TouchGFX\u4e2d\u3002 \u8fd9\u610f\u5473\u7740\u5728TouchGFX Designer\u4e2d\u53ef\u4ee5\u76f4\u63a5\u5c06\u6309\u94ae\u70b9\u51fb\u7528\u5728\u4ea4\u4e92\u7684\u914d\u7f6e\u4e2d\u3002 \u8fd8\u53ef\u4ee5\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u5b83\u4eec\uff0c\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleKeyEvent(uint8_t key)\n{\n    if (key == '6')\n    {\n        application().gotoScreen2Screen();\n    }\n}\n")),(0,n.kt)("p",null,"\u4f7f\u7528\u7684\u952e\u7801\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u6309\u952e")),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),(0,n.kt)("strong",{parentName:"th"},"\u952e\u503c\u7f16\u7801")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5de6"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'4'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u53f3"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'6'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u4e0a"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'8'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u4e0b"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'2'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u4e2d"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'5'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u84dd\u8272\u7528\u6237\u6309\u94ae"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'0'")))),(0,n.kt)("p",null,"These keys are also usable when you run the Simulator (hit ",(0,n.kt)("inlineCode",{parentName:"p"},"F5")," in the TouchGFX Designer) by using the keyboard numpad."))}v.isMDXComponent=!0}}]);