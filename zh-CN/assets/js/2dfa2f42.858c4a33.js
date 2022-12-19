"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4240],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,s=g["".concat(m,".").concat(d)]||g[d]||c[d]||l;return n?a.createElement(s,i(i({ref:t},p),{},{components:n})):a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},56766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return N},default:function(){return G},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return y}});var a=n(3905),r=n(44035),l=n(22425),i=n(29415),o=n(39130),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(g)for(var n of g(t))d.call(t,n)&&s(e,n,t[n]);return e};const h={id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"\u4f7f\u7528L8\u56fe\u50cf\u683c\u5f0f\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017"},N=void 0,f={unversionedId:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",id:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",title:"\u4f7f\u7528L8\u56fe\u50cf\u683c\u5f0f\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",permalink:"/4.19/zh-CN/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",draft:!1,tags:[],version:"current",frontMatter:{id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"\u4f7f\u7528L8\u56fe\u50cf\u683c\u5f0f\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017"},sidebar:"docs",previous:{title:"\u52a8\u6001\u52a0\u8f7d\u56fe\u50cf",permalink:"/4.19/zh-CN/docs/development/ui-development/scenarios/loading-images-at-runtime"},next:{title:"\u521b\u5efa\u52a8\u6001L8\u56fe\u50cf",permalink:"/4.19/zh-CN/docs/development/ui-development/scenarios/creating-dynamic-l8-images"}},v={},y=[{value:"L8\u56fe\u50cf\u793a\u4f8b",id:"example-l8-image",level:2},{value:"\u5728TouchGFX Designer\u4e2d\u4f7f\u7528L8\u56fe\u50cf",id:"using--l8-images-in-touchgfx-designer",level:2},{value:"\u900f\u660e\u56fe\u50cf",id:"transparent-images",level:2},{value:"\u5c06\u56fe\u50cf\u8f6c\u6362\u4e3a256\u8272",id:"converting-an-image-to-256-colors",level:2},{value:"Paint.NET",id:"paintnet",level:3},{value:"ImageMagick",id:"imagemagick",level:3},{value:"\u6bd4\u8f83",id:"comparison",level:3},{value:"\u624b\u52a8\u914d\u7f6e",id:"manual-configuration",level:2}],b={toc:y};function G(e){var t,n=e,{components:m}=n,s=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},b),s),u(t,p({components:m,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"L8\u683c\u5f0f\u7684\u56fe\u50cf\u5360\u7528\u7684\u95ea\u5b58\u7a7a\u95f4\u8f83\u5c11\uff0c\u6bd4\u8bf8\u5982ARGB8888\u7b49\u683c\u5f0f\u7684\u7ed8\u5236\u901f\u5ea6\u66f4\u5feb\u3002"),(0,a.kt)("p",null,"L8\u683c\u5f0f\u7684\u56fe\u50cf\u5305\u542b\u8c03\u8272\u677f\u548c\u50cf\u7d20\u6570\u7ec4\uff1a\u8c03\u8272\u677f\u5305\u542b\u4e86\u6307\u5b9a\u7684\u81f3\u591a256\u79cd\u989c\u8272\uff0c\u53ef\u4ee5\u4e3a16\u4f4dRGB565\u683c\u5f0f\u300124\u4f4dRGB888\u683c\u5f0f\u621632\u4f4dARGB8888\u683c\u5f0f\u3002 \u50cf\u7d20\u6570\u7ec4\u5305\u542b\u6bcf\u4e2a\u50cf\u7d20\u4e00\u4e2a\u5b57\u8282\u7684\u6570\u636e\u3002 \u8be5\u5b57\u8282\u6570\u636e\u662f\u8c03\u8272\u677f\uff08\u989c\u8272\u5217\u8868\uff09\u7d22\u5f15\uff0c\u6307\u5411\u50cf\u7d20\u7684\u989c\u8272\u3002 \u4e3a\u4e86\u7ed8\u5236L8\u56fe\u50cf\uff0cTouchGFX\u6846\u67b6\u9010\u4e00\u8bfb\u53d6\u50cf\u7d20\uff0c\u5728\u8c03\u8272\u677f\u4e2d\u67e5\u627e\u989c\u8272\uff0c\u518d\u5c06\u5176\u5199\u5165\u5e27\u7f13\u51b2\u3002 \u8fd9\u4e9b\u64cd\u4f5c\u662f\u81ea\u52a8\u5b8c\u6210\u7684\uff0c\u5982\u679c\u786c\u4ef6\u652f\u6301\uff0c\u53ef\u4ee5\u901a\u8fc7STM32 Chrom-ART\u786c\u4ef6\u52a0\u901f\u5668\u8fdb\u884c\u52a0\u901f\u3002"),(0,a.kt)("p",null,"\u6bcf\u50cf\u7d208\u4f4d\u610f\u5473\u7740\u4e00\u5e45L8\u56fe\u50cf\u53ef\u4f7f\u7528256\u79cd\u4e0d\u540c\u989c\u8272\u3002 \u53e6\u4e00\u5e45L8\u56fe\u50cf\u53ef\u4f7f\u7528256\u79cd\u5176\u4ed6\u989c\u8272\uff0c\u8fd9\u662f\u56e0\u4e3a\u4e24\u5e45\u56fe\u50cf\u5404\u6709\u81ea\u5df1\u7684\u8c03\u8272\u677f\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.webp",mdxType:"Figure"},"\u4e00\u5e45\u67094 x 4\u4e2a\u50cf\u7d20\u7684L8\u56fe\u50cf\u548c\u4e00\u4e2a\u5305\u542b4\u79cd\u989c\u8272\u7684\u8c03\u8272\u677f"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u50cf\u7d20\u4e00\u4e2a\u5b57\u8282\uff088\u4f4d\uff09\u3002 \u56e0\u6b64\uff0c\u50cf\u7d20\u6570\u636e\u5927\u5c0f\u7b49\u4e8e\uff08\u5bbd\u5ea6 x \u9ad8\u5ea6\uff09\u4e2a\u5b57\u8282\u3002 \u8c03\u8272\u677f\u989c\u8272\u53ef\u4ee5\u662f16\u4f4d\u300124\u4f4d\u621632\u4f4d\u989c\u8272\u3002 \u56e0\u6b64\uff0c\u6bcf\u79cd\u989c\u8272\u5b9a\u4e49\u5c06\u5360\u75282\u30013\u62164\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("p",null,"\u7acb\u4f53\u56fe\u50cf\u5e94\u5b58\u50a8\u5728L8_RGB888\u4e2d\u3002 \u5982\u679c\u56fe\u50cf\u662f\u900f\u660e\u7684\uff0c\u5219\u5fc5\u987b\u4f7f\u752832\u4f4d\u683c\u5f0f\uff08ARGB8888\uff09\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u683c\u5f0f")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5e27\u7f13\u51b2\u683c\u5f0f")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u652f\u6301\u900f\u660e\u50cf\u7d20")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"}," DMA2D\u652f\u6301 ")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"16\u4f4dRGB565"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"24\u4f4dRGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u4e8c\u8005\u517c\u6709"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u6709"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u6709")))),(0,a.kt)("p",null,"DMA2D\u4e0d\u652f\u6301\u5e26RGB565\u8c03\u8272\u677f\u7684L8\u683c\u5f0f\u3002 \u8fd9\u610f\u5473\u7740\u7ed8\u5236\u8fd9\u79cd\u683c\u5f0f\u7684\u56fe\u50cf\u4e0d\u4f1a\u6267\u884c\u786c\u4ef6\u52a0\u901f\u3002 \u56e0\u6b64\uff0c\u9664\u975e\u60a8\u4f7f\u7528\u7684\u5e73\u53f0\u6ca1\u6709DMA2D(\u4f8b\u5982\uff1aSTM32G0\u6216STM32F410)\uff0c\u5426\u5219\u4e0d\u5e94\u4f7f\u7528\u8fd9\u79cd\u683c\u5f0f\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u4e00\u4e2a\u4e32\u884cFlash(\u975e\u5b58\u50a8\u6620\u5c04)\u6765\u5b58\u50a8\u56fe\u50cf\uff0c\u5e76\u4f7f\u7528\u4e86\u4e00\u4e2a16\u4f4d\u5e27\u7f13\u5b58(\u683c\u5f0f\u4e3aRGB565)\uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u4f7f\u7528L8_RGB565\u683c\u5f0f\uff0c\u56e0\u4e3a\u8272\u5f69\u683c\u5f0f\u4e0e\u5e27\u7f13\u5b58\u683c\u5f0f\u5339\u914d\uff0c\u4e14\u590d\u5236\u5230\u5e27\u7f13\u5b58\u4f1a\u66f4\u5feb\u3002"),(0,a.kt)("p",null,"\u4e0b\u8868\u663e\u793a\u4e86\u9996\u9009\u7684L8\u683c\u5f0f:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5e27\u7f13\u51b2\u683c\u5f0f")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6709DMA2D\u7684\u5e73\u53f0")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"}," \u65e0DMA2D\u7684\u5e73\u53f0 ")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB565")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888")))),(0,a.kt)("p",null,"\u900f\u660e\u56fe\u50cf\u5e94\u59cb\u7ec8\u4f7f\u7528L8_ARGB8888\u683c\u5f0f\u3002"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,"\u70b9\u51fb\u94fe\u63a5\u9605\u8bfb\u5173\u4e8e\u8c03\u8272\u677f\u56fe\u50cf\u683c\u5f0f\u7684\u66f4\u591a\u5185\u5bb9\uff1a",(0,a.kt)(o.Z,{to:"https://en.wikipedia.org/wiki/Indexed_color",mdxType:"Link"},"https://en.wikipedia.org/wiki/Indexed_color"))),(0,a.kt)("h2",k({},{id:"example-l8-image"}),"L8\u56fe\u50cf\u793a\u4f8b"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u5e45\u5178\u578b\u7684\u5fbd\u6807\u56fe\u50cf\u3002 \u8fd9\u5e45\u56fe\u50cf\u53ea\u4f7f\u7528\u4e8616\u79cd\u4e0d\u540c\u989c\u8272\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.webp",mdxType:"Figure"},"200 x 200\u50cf\u7d20L8\u56fe\u50cf\uff0c\u670916\u79cd24\u4f4d\u989c\u8272\u3002"),(0,a.kt)("p",null,"\u6b64\u56fe\u50cf\u5360\u7528\u7684\u95ea\u5b58\u7a7a\u95f4\u660e\u663e\u5c0f\u4e8e\u6807\u51c624\u4f4d\u683c\u5f0f\uff08RGB888\uff09\u7684\u539f\u59cb\u56fe\u50cf\u3002 \u4e0b\u8868\u5217\u51fa\u4e86\u6b64\u5b9e\u9645\u56fe\u50cf\u4f7f\u7528\u4e09\u79cd\u4e0d\u540c\u8c03\u8272\u677f\u683c\u5f0f\u548c\u975eL8\u683c\u5f0f\u7684\u95ea\u5b58\u5360\u7528\u91cf\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u683c\u5f0f")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u50cf\u7d20\u5927\u5c0f\uff08\u5b57\u8282\uff09")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8c03\u8272\u677f\u5927\u5c0f\uff08\u5b57\u8282\uff09")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u603b\u5927\u5c0f\uff08\u5b57\u8282\uff09")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u7f29\u51cf\u7387%")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"120,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"120,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"32"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,032"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"66.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"48"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,048"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"66.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"64"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,064"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"66.6%")))),(0,a.kt)("p",null,"\u6211\u4eec\u770b\u5230\u56fe\u50cf\u5927\u5c0f\u7f29\u51cf\u7387\u5f88\u5927\uff0c\u8c03\u8272\u677f\u7684\u5927\u5c0f\u5728\u4e2d\u7b49\u5c3a\u5bf8\u56fe\u50cf\u4e0a\u663e\u5f97\u5fae\u4e0d\u8db3\u9053\u3002"),(0,a.kt)("h2",k({},{id:"using--l8-images-in-touchgfx-designer"}),"\u5728TouchGFX Designer\u4e2d\u4f7f\u7528L8\u56fe\u50cf"),(0,a.kt)("p",null,"TouchGFX\u4e2dL8\u56fe\u50cf\u683c\u5f0f\u7684\u4f7f\u7528\u5341\u5206\u7b80\u5355\u3002 \u53ea\u9700\u914d\u7f6e\u56fe\u50cf\u8f6c\u6362\u5668\uff0c\u4ee5\u4fbf\u5c06\u56fe\u50cf\u4ecePNG\u8f6c\u6362\u4e3aL8\u683c\u5f0f\u3002 \u4e0b\u9762\u6211\u4eec\u5c06\u4ecb\u7ecd\u6574\u4e2a\u8fc7\u7a0b\uff1a"),(0,a.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u542f\u52a8\u4e00\u4e2a\u65b0\u5de5\u7a0b\u3002 \u5c06\u56fe\u50cf\u590d\u5236\u5230\u65b0\u5de5\u7a0b\u4e2d\u7684assets/images\u6587\u4ef6\u5939\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.webp",mdxType:"Figure"},"TouchGFX\u5de5\u7a0b\u7684Images\u6587\u4ef6\u5939"),(0,a.kt)("p",null,"\u73b0\u5728\u8f6c\u81f3TouchGFX Designer\uff0c\u70b9\u51fb\u9876\u90e8\u5bfc\u822a\u680f\u4e2d\u7684",(0,a.kt)("a",k({parentName:"p"},{href:"../designer-user-guide/images-view"}),"\u201c\u56fe\u50cf\u201d\u9009\u9879\u5361"),"\u5e76\u9009\u4e2d\u56fe\u50cf\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images-4.17.webp",mdxType:"Figure"},"\u8fdb\u5165TouchGFX Designer\u7684\u56fe\u50cf\u89c6\u56fe"),(0,a.kt)("p",null,"\u5728\u7a97\u53e3\u53f3\u4fa7\uff0c\u9009\u62e9\u56fe\u50cf\u683c\u5f0fL8_RGB888\uff08\u672c\u4f8b\u8fd0\u884c24\u4f4d\u989c\u8272\uff09\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u53ef\u4ee5\u5728\u753b\u5e03\u4e0a\u63d2\u5165\u4e00\u4e2a\u56fe\u50cf\u63a7\u4ef6\uff08\u8fd9\u91cc\u6211\u4eec\u5728\u80cc\u666f\u4e0a\u63d2\u5165\u4e86\u4e00\u4e2a\u65b9\u6846\uff09\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u753b\u5e03\u4e0a\u7684\u56fe\u50cf\u63a7\u4ef6"),(0,a.kt)("p",null,"\u65e0\u9700\u5728UI\u4ee3\u7801\u4e2d\u505a\u4efb\u4f55\u4fee\u6539\u3002 \u6839\u636e\u6211\u4eec\u5728\u201c\u56fe\u50cf\u201d\u9009\u9879\u5361\u4e0a\u6240\u505a\u8bbe\u7f6e\uff0c\u56fe\u50cf\u8f6c\u6362\u5668\u8f6c\u6362PNG\u6587\u4ef6\u5e76\u751f\u6210L8\u683c\u5f0f\u7684\u56fe\u50cf\u3002"),(0,a.kt)("h2",k({},{id:"transparent-images"}),"\u900f\u660e\u56fe\u50cf"),(0,a.kt)("p",null,"\u5982\u524d\u9762\u6240\u8ff0\uff0c\u8fd8\u53ef\u4ee5\u5bf9\u900f\u660e\u56fe\u50cf\u4f7f\u7528L8\u56fe\u50cf\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.webp",mdxType:"Figure"},"32\u4f4dARGB8888\u683c\u5f0f\u7684170 x 60\u50cf\u7d20\u6309\u94ae\u56fe\u50cf"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u56fe\u50cf\u4f7f\u7528\u4e86108\u79cd\u989c\u8272\uff08\u8bb8\u591a\u8272\u5ea6\u7684\u84dd\u8272\uff09\u3002 \u6b64\u56fe\u50cf\u53ef\u4f7f\u7528\u683c\u5f0fL8_ARGB8888\u3002 \u5927\u5c0f\u5c06\u663e\u8457\u7f29\u51cf\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u683c\u5f0f")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u50cf\u7d20\u5927\u5c0f\uff08\u5b57\u8282\uff09")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8c03\u8272\u677f\u5927\u5c0f\uff08\u5b57\u8282\uff09")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u603b\u5927\u5c0f\uff08\u5b57\u8282\uff09")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u7f29\u51cf\u7387%")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,800"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,800"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"10,200"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"432"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"10,632"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"73.9%")))),(0,a.kt)("h2",k({},{id:"converting-an-image-to-256-colors"}),"\u5c06\u56fe\u50cf\u8f6c\u6362\u4e3a256\u8272"),(0,a.kt)("p",null,"\u8bb8\u591a\u56fe\u50cf\u4f7f\u7528\u7684\u989c\u8272\u591a\u4e8e256\u79cd\u3002 \u8fd9\u5bf9\u7167\u7247\u7ea7\u771f\u5b9e\u611f\u7684\u56fe\u50cf\u6216\u6709\u6e10\u53d8\u68af\u5ea6\u7684\u56fe\u50cf\u800c\u8a00\u5f88\u5e38\u89c1\u3002 \u7531\u4e8e\u8fd9\u4e9b\u56fe\u50cf\u5305\u542b\u591a\u79cd\u989c\u8272\uff0c\u56e0\u6b64\u4e0d\u80fd\u5728TouchGFX Designer\u4e2d\u76f4\u63a5\u8f6c\u6362\u4e3aL8\u56fe\u50cf\u683c\u5f0f\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u51cf\u5c11\u7279\u5b9a\u56fe\u50cf\u4e2d\u4f7f\u7528\u7684\u989c\u8272\u6570\u91cf\u3002 \u5728\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u5e73\u9762\u8bbe\u8ba1\u5e08\u53ef\u4ee5\u8f6c\u6362\u6216\u63d0\u4f9b256\u8272\u56fe\u50cf\uff0c\u800c\u56fe\u50cf\u64cd\u4f5c\u5de5\u5177\u4e5f\u53ef\u4ee5\u6267\u884c\u8f6c\u6362\uff0c\u540c\u65f6\u4e0d\u4f1a\u8fc7\u5ea6\u635f\u5931\u56fe\u50cf\u8d28\u91cf\u3002"),(0,a.kt)("h3",k({},{id:"paintnet"}),"Paint.NET"),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u529e\u6cd5\u662f\u4f7f\u7528Paint.NET\u3002 \u6253\u5f00\u539f\u59cb\u56fe\u50cf\uff0c\u4f7f\u7528\u201c\u53e6\u5b58\u4e3a\u201d\u5c06\u56fe\u50cf\u4fdd\u5b58\u4e3a\u53e6\u4e00\u4e2a\u6587\u4ef6\u3002 \u5728\u201c\u4fdd\u5b58\u8bbe\u7f6e\u201d\u5bf9\u8bdd\u6846\u4e2d\uff0c\u9009\u62e98\u4f4d\u50cf\u7d20\u6df1\u5ea6\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.webp",mdxType:"Figure"},"Paint.NET\u5c06\u56fe\u50cf\u4fdd\u5b58\u4e3a8\u4f4d\u683c\u5f0f"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5728\u5de5\u7a0b\u4e2d\u4f7f\u7528\u65b0\u7684PNG\u3002 \u8bb0\u5f97\u5728TouchGFX Designer\u4e2d\u7684",(0,a.kt)("a",k({parentName:"p"},{href:"../designer-user-guide/images-view"}),"\u201c\u56fe\u50cf\u201d\u9009\u9879\u5361"),"\u4e0a\u9009\u62e9L8_ARGB8888\u683c\u5f0f\u3002 \u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u9634\u5f71\u5904\u7406\u7684\u4e0d\u591f\u597d\uff0c\u4f46\u6709\u900f\u660e\u8fb9\u7f18\u7684\u56fe\u6807\u770b\u8d77\u6765\u4e0d\u9519\u3002 \u53ef\u4ee5\u8c03\u6574\u201c\u900f\u660e\u5ea6\u9608\u503c\u201d\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u4ee5\u6539\u5584\u6548\u679c\u3002"),(0,a.kt)("h3",k({},{id:"imagemagick"}),"ImageMagick"),(0,a.kt)("p",null,"\u53e6\u4e00\u79cd\u5408\u9002\u7684\u5de5\u5177\u662fImageMagick\uff08\u4ece",(0,a.kt)("a",k({parentName:"p"},{href:"https://imagemagick.org/"}),"www.imagemagick.org"),"\u4e0b\u8f7d\uff09\uff0c\u6709\u65f6\u4e5f\u80fd\u83b7\u5f97\u66f4\u597d\u7684L8\u56fe\u50cf\u3002 \u6b64\u5de5\u5177\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u8f6c\u6362\u56fe\u50cf\u3002 \u9002\u5408\u5728\u811a\u672c\u4e2d\u7528\u3002 \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff0c\u53ef\u5c06clock_bg.png\u8f6c\u6362\u4e3a\u4f7f\u7528\u81f3\u591a256\u79cd\u989c\u8272\u7684\u56fe\u50cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{}),"magick convert clock_bg.png -colors 256 clock_bg_l8_256.png\n")),(0,a.kt)("p",null,"ImageMagick\u8fd8\u53ef\u4ee5\u544a\u8bc9\u60a8\u56fe\u50cf\u4e2d\u4f7f\u7528\u4e86\u591a\u5c11\u79cd\u989c\u8272\u3002 \u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"magick identify -format %k Blue_Buttons_Round_Edge_small.png\n")),(0,a.kt)("h3",k({},{id:"comparison"}),"\u6bd4\u8f83"),(0,a.kt)("p",null,"\u4e0b\u9762\u6bd4\u8f83\u4e86\u4e09\u5e45\u56fe\u50cf\uff08\u539f\u56fe\u3001\u4f7f\u7528Paint.NET\u7684L8\u56fe\u50cf\u548c\u4f7f\u7528ImageMagick\u7684L8\u56fe\u50cf\uff09\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.webp",mdxType:"Figure"},"\u949f\u8868\u56fe\u50cf\u6bd4\u8f83\uff0c\u4ece\u5de6\u5230\u53f3\u4e3a\uff1a\u539f\u56fe\u3001Paint.NET\u751f\u6210\u56fe\uff0cImageMagick\u751f\u6210\u56fe"),(0,a.kt)("p",null,"\u4e2d\u95f4\u7684\u949f\u8868\u4e22\u5931\u4e86\u8fb9\u754c\u9634\u5f71\u4e2d\u7684\u7ec6\u8282\u3002 \u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u65f6\u949f\u80cc\u666f\u7684\u4e2d\u592e\u90e8\u5206\u770b\u8d77\u6765\u90fd\u662f\u53ef\u4ee5\u7684\u3002"),(0,a.kt)("h2",k({},{id:"manual-configuration"}),"\u624b\u52a8\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0d\u4f7f\u7528TouchGFX Designer\u4e5f\u53ef\u4ee5\u9009\u62e9\u56fe\u50cf\u683c\u5f0f\u3002 \u8bbe\u7f6e\u56fe\u50cf\u683c\u5f0f\u7684\u6587\u4ef6application.config\u4f4d\u4e8e\u5de5\u7a0b\u6839\u76ee\u5f55\u4e0b\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"application.config"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-json"}),'{\n  "image_configuration": {\n    images": {\n      "Blue_Buttons_Round_Edge_small.png": {\n        "format": "L8_ARGB8888"\n      }\n    },\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB888",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  }\n}\n')),(0,a.kt)("p",null,"\u201cImage_configuration\u201d\u4e0b\u7684\u201cimages\u201d\u90e8\u5206\u6307\u5b9a\u4e86\u6bcf\u5e45\u56fe\u50cf\u7684\u683c\u5f0f\u3002 \u5728\u8fd9\u91cc\u6ca1\u6709\u63d0\u53ca\u7684\u56fe\u50cf\u5c06\u4f1a\u4ee5\u9ed8\u8ba4\u683c\u5f0f\uff08opaque_image_format\u6216nonopaque_image_format\uff09\u751f\u6210\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528TouchGFX Designer\u8fdb\u884c\u56fe\u50cf\u8bbe\u7f6e\uff08\u5982\u53ef\u80fd\uff09\u3002"))}G.isMDXComponent=!0}}]);