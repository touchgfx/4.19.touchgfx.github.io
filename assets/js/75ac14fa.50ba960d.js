"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},95049:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return v}});var r=n(3905),a=n(39130),i=n(29415),l=n(44035),o=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&u(e,n,t[n]);return e};const f={id:"engine-architecture",title:"Engine Architecture"},g=void 0,y={unversionedId:"basic-concepts/engine-architecture",id:"basic-concepts/engine-architecture",title:"Engine Architecture",description:"",source:"@site/docs/basic-concepts/engine-architecture.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/engine-architecture",permalink:"/4.19/docs/basic-concepts/engine-architecture",tags:[],version:"current",frontMatter:{id:"engine-architecture",title:"Engine Architecture"}},b={},v=[{value:"The four parts",id:"the-four-parts",level:2},{value:"MCU",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"Flash",id:"flash",level:3},{value:"Display",id:"display",level:3},{value:"Performance",id:"performance",level:2},{value:"General strategy",id:"general-strategy",level:3},{value:"Setup specific strategy",id:"setup-specific-strategy",level:3}],k={toc:v};function w(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),u),s(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Graphics is ultimately about getting something to show up on a physical display. Fast.")),(0,r.kt)("p",null,"The term embedded graphics means many things."),(0,r.kt)("p",null,"First of, the word embedded means different things to different people.\nTo some an embedded system means a very dependable old 8 bit microcontroller, with no operating system, and virtually no RAM, ROM or GPIO.\nTo others it might mean a modern day smart phone with gigabytes of everything."),(0,r.kt)("p",null,"Secondly, the word graphics has many interpretations.\nTo some it means drawing your own pixels in your favourite painting program.\nTo others again it means the 3D rendering software running on your gaming console."),(0,r.kt)("p",null,"To TouchGFX embedded systems mean any system based on an STM32 microcontroller.\nAnd graphics means interactive applications running at 60 frames per second."),(0,r.kt)("h2",m({},{id:"the-four-parts"}),"The four parts"),(0,r.kt)("p",null,"In order to do graphics applications on such platforms, we consider four main components directly involved.\nNaturally many more components might be present in an embedded system, but these are less related to the display of graphics."),(0,r.kt)(l.Z,{imageSource:"/img/basic-concepts/four-parts.svg",noShadow:"true",width:480,mdxType:"Figure"},"MCU, RAM, Flash and display"),(0,r.kt)("p",null,"In short, TouchGFX, using the MCU, creates and updates an image in RAM, by assembling parts from flash. The assembled image is transferred to the display. This process is repeated as often as possible and needed."),(0,r.kt)("h3",m({},{id:"mcu"}),"MCU"),(0,r.kt)("p",null,"The MCU is doing all the heavy lifting in this process.\nIt reads images in flash and writes them to RAM.\nIt calculates the resulting colors when merging a semi-transparent red text onto an image and saves these to RAM.\nIt renders and stores all the pixels of a circle to RAM.\nAnd so on."),(0,r.kt)("p",null,"STM32 MCUs have specific capabilities that help in the realization of graphics.\nSee ",(0,r.kt)("a",m({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU")," for details on different MCUs."),(0,r.kt)("h3",m({},{id:"ram"}),"RAM"),(0,r.kt)("p",null,"RAM is where the calculated image is stored.\nThe RAM is being read and written by the MCU.\nAnd read again when the resulting image is transferred to the display."),(0,r.kt)("p",null,"In many cases the RAM is internal to the MCU.\nIn cases where it is not feasible to have the resulting image in internal RAM, external RAM can be added to the setup."),(0,r.kt)("h3",m({},{id:"flash"}),"Flash"),(0,r.kt)("p",null,"Flash is where all static data is placed. Images, fonts and texts.\nThe flash is read by the MCU and the contents written to or combined with the RAM."),(0,r.kt)("p",null,"Most often an external flash is added to the setup, as the internal flash is seldomly large enough to hold all graphics assets."),(0,r.kt)("p",null,"Ideally the flash is memory mapped, such that pixels can be read directly from the flash and written to RAM. Otherwise, the contents of the flash can be buffered in RAM and then read from there instead."),(0,r.kt)("h3",m({},{id:"display"}),"Display"),(0,r.kt)("p",null,"The display is where the image is actually displayed to the eyes of a person."),(0,r.kt)("p",null,"The image stored in RAM is sent by the MCU to the display at regular intervals."),(0,r.kt)("h2",m({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"In order to achieve smooth animations on this setup and ultimately on the display, some care must be taken when doing embedded graphics."),(0,r.kt)("h3",m({},{id:"general-strategy"}),"General strategy"),(0,r.kt)("p",null,"A few general points to always consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not spend time drawing things that do not change"),(0,r.kt)("li",{parentName:"ul"},"Transfer as little as possible from flash to RAM"),(0,r.kt)("li",{parentName:"ul"},"Transfer as little as possible from RAM to display"),(0,r.kt)("li",{parentName:"ul"},"Find the right balance between quality of graphics and speed of animations"),(0,r.kt)("li",{parentName:"ul"},"Utilize hardware capabilities")),(0,r.kt)("p",null,"The TouchGFX Engine helps address all of these points, but care must be taken by the developer as well."),(0,r.kt)("h3",m({},{id:"setup-specific-strategy"}),"Setup specific strategy"),(0,r.kt)("p",null,"The vast amount of possible embedded setups means that what can be realized on a specific setup is very different to what is possible on another setup."),(0,r.kt)("p",null,"A ballpark'ish overview of possible setups are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32 MCU",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"50 to 500 MHz clock rate"),(0,r.kt)("li",{parentName:"ul"},"A possible range of graphics related IP's: Chrom-ART, Chrom-GRC, JPEG codec, ..."))),(0,r.kt)("li",{parentName:"ul"},"RAM",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0 to 1 MB internal"),(0,r.kt)("li",{parentName:"ul"},"0 to 100 MB external"))),(0,r.kt)("li",{parentName:"ul"},"Flash",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0 to 1 MB internal"),(0,r.kt)("li",{parentName:"ul"},"0 to 1 GB external"))),(0,r.kt)("li",{parentName:"ul"},"Display",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 to 24 bit colors"),(0,r.kt)("li",{parentName:"ul"},"100x100 to 1000x1000 pixels")))),(0,r.kt)("p",null,"It is evident that the UI applications that are realizable on one possible setup, might not be nowhere near realizable on another. Therefore great care must be taken to align the desired UI application with the actual setup."),(0,r.kt)("p",null,"TouchGFX is designed from the ground up for these setups, focusing on making the most of the STM32 MCU capabilities and minimizing the amount of RAM and flash needed."),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,"See ",(0,r.kt)(a.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs")," for available STM32 microcontrollers."),(0,r.kt)("li",null,"See ",(0,r.kt)(a.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"Display")," for details on the possible display choices."),(0,r.kt)("li",null,"See ",(0,r.kt)(a.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU")," for details on the possible MCU choices."),(0,r.kt)("li",null,"See ",(0,r.kt)(a.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"External Memories")," for details on the possible choices for memory.")))}w.isMDXComponent=!0}}]);