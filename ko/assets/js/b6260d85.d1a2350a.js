"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8231],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},11212:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return F},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return T}});var n=r(3905),a=r(44035),o=r(93054),i=r(37793),l=r(22425),c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(f)for(var r of f(t))p.call(t,r)&&m(e,r,t[r]);return e};const g={id:"scenarios-framebuffer-strategies",title:"Framebuffer Strategies"},b=void 0,v={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",id:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",title:"Framebuffer Strategies",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",permalink:"/4.19/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",tags:[],version:"current",frontMatter:{id:"scenarios-framebuffer-strategies",title:"Framebuffer Strategies"},sidebar:"docs",previous:{title:"FMC \ubc0f SPI \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4",permalink:"/4.19/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"},next:{title:"Video Decoding",permalink:"/4.19/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"}},y={},T=[{value:"Single Framebuffer",id:"single-frame-buffer",level:2},{value:"By Allocation",id:"by-allocation",level:3},{value:"By Address",id:"by-address",level:3},{value:"Double Framebuffer",id:"double-frame-buffer",level:2},{value:"By Address",id:"by-address-1",level:3},{value:"By Allocation",id:"by-allocation-1",level:3},{value:"Partial Framebuffer",id:"partial-frame-buffer",level:2}],k={toc:T};function F(e){var t,r=e,{components:c}=r,m=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},k),m),s(t,u({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section shows how to configure the ",(0,n.kt)("a",h({parentName:"p"},{href:"../touchgfx-generator"}),"TouchGFX Generator")," to generate a TouchGFX HAL that uses one of the following Framebuffer strategies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Single"),(0,n.kt)("li",{parentName:"ul"},"Double"),(0,n.kt)("li",{parentName:"ul"},"Partial")),(0,n.kt)("p",null,"Read more about framebuffers ",(0,n.kt)("a",h({parentName:"p"},{href:"../../../basic-concepts/framebuffer#amount-of-framebuffers"}),"here"),"."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-all-options.png",width:"500",mdxType:"Figure"},"All framebuffer options"),(0,n.kt)("h2",h({},{id:"single-frame-buffer"}),"Single Framebuffer"),(0,n.kt)("p",null,"\ubc84\ud37c \uc804\ub7b5\uc73c\ub85c\xa0",(0,n.kt)("em",{parentName:"p"},"Single Buffer"),"\ub97c \uc120\ud0dd\ud55c \uac1c\ubc1c\uc790\ub4e4\uc740 \ucef4\ud30c\uc77c\ub7ec\uac00 \ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \ub300\ud55c \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ud558\uac8c \ud560 \uc218\ub3c4 \uc788\uace0, \ud574\ub2f9 \ubc84\ud37c\uc5d0 \ub300\ud55c \ud2b9\uc815 \uc704\uce58\ub97c \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",h({},{id:"by-allocation"}),"By Allocation"),(0,n.kt)("p",null,"When choosing ",(0,n.kt)("em",{parentName:"p"},"By Allocation")," TouchGFX Generator will allocate an array based on the dimensions and bit depth of the application."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-alloc.png",width:"400",mdxType:"Figure"},"Single framebuffer, by allocation"),(0,n.kt)("p",null,"\uc774 \ubc30\uc5f4\uc744 \ud504\ub808\uc784 \ubc84\ud37c\ub85c \uc0ac\uc6a9\ud558\ub3c4\ub85d HAL\uc744 \uad6c\uc131\ud558\uae30 \uc704\ud55c \ucf54\ub4dc\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{1-6,12}","{1-6,12}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker script\n    // to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)0, (void*)0);\n}\n')),(0,n.kt)("h3",h({},{id:"by-address"}),"By Address"),(0,n.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc704\uce58\ub97c \uc704\ud574",(0,n.kt)("em",{parentName:"p"}," By Address"),"\uc744 \uc120\ud0dd\ud558\uba74 TouchGFX Generator\uac00 HAL \ucd08\uae30\ud654\uac00 \uc9c4\ud589\ub418\ub294 \ub3d9\uc548 \uc9c0\uc815\ub41c Start Address\ub97c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-addr.png",width:"400",mdxType:"Figure"},"Single framebuffer, by address"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0, (void*)0);\n}\n")),(0,n.kt)("h2",h({},{id:"double-frame-buffer"}),"Double Framebuffer"),(0,n.kt)("p",null,"In a double framebuffer configuration, code to swap framebuffers will be generated in the HAL by TouchGFX Generator depending on the selected Framebuffer strategy and display interface. This memory interface to framebuffer location is used by the TouchGFX Engine during the main event loop."),(0,n.kt)("h3",h({},{id:"by-address-1"}),"By Address"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"By Address"),"\uc744 \uc120\ud0dd\ud558\uba74 TouchGFX Generator\uac00 HAL \ucd08\uae30\ud654 \ub3d9\uc548 2\uac1c\uc758 \uc9c0\uc815\ub41c \uc2dc\uc791 \uc8fc\uc18c\ub97c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double.png",width:"400",mdxType:"Figure"},"Double framebuffer, by address"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0xC003FC00, (void*)0);\n}\n")),(0,n.kt)(i.Z,{mdxType:"Tip"},"\ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ubcd1\ub82c RGB(LTDC)\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc2dc\uc791 \uc8fc\uc18c\ub294 LTDC \uacc4\uce35 \uc124\uc815\uc5d0\uc11c \uc0c1\uc18d\ub429\ub2c8\ub2e4."),(0,n.kt)(i.Z,{mdxType:"Tip"},"When using Parallel RGB (LTDC) as display interface in 'By Allocation' mode, the generated TouchGFX HAL will automatically configure the LTDC Layer Color Frame Buffer Start Address at runtime, so you should not set a value in LTDC configuration."),(0,n.kt)("h3",h({},{id:"by-allocation-1"}),"By Allocation"),(0,n.kt)("p",null,"When choosing ",(0,n.kt)("em",{parentName:"p"},"By Allocation")," TouchGFX Generator will allocate an array based on the dimensions and bit depth of the application, exactly as with a Single Framebuffer, only twice the size."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double-alloc.png",width:"400",mdxType:"Figure"},"Single framebuffer, by allocation"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{1-5,11}","{1-5,11}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4 * 2] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf)/(sizeof(uint32_t)*2)), (void*)0);\n}\n')),(0,n.kt)("h2",h({},{id:"partial-frame-buffer"}),"Partial Framebuffer"),(0,n.kt)("p",null,"With the partial framebuffer strategy, TouchGFX does not use a framebuffer in the same size as the display. Instead the user is allowed to choose a number of blocks (of a given size) to be used as framebuffers. TouchGFX uses a ",(0,n.kt)("em",{parentName:"p"},"Frame Buffer Allocator")," object to control the use of these block."),(0,n.kt)("p",null,"With this strategy you don't supply a pointer to external memory (where the framebuffer would be located), nor allocate a framebuffer array in internal memory."),(0,n.kt)("p",null,"See the article on ",(0,n.kt)("a",h({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"Framebuffer")," for a general overview of the concept of framebuffers."),(0,n.kt)(i.Z,{mdxType:"Tip"},'Usually, small microcontrollers like STM32G0 does not have enough internal RAM to fit framebuffer. \uc774\ub7ec\ud55c MCU\ub97c \uc0ac\uc6a9\ud558\ub294 \uc800\uac00 \uc194\ub8e8\uc158\uc5d0\ub294 "Partial Buffer"\uac00 \uac00\uc7a5 \uc801\ud569\ud569\ub2c8\ub2e4.'),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/generator-partial-fb.png",width:"400",mdxType:"Figure"},"Partial framebuffer"),(0,n.kt)("p",null,"Partial buffer \uc804\ub7b5\uc740 \ubcf4\ud1b5 TFT \ucee8\ud2b8\ub864\ub7ec\uac00 \uc7a5\ucc29\ub418\uc9c0 \uc54a\uace0 \uc791\uc740 \ub0b4\ubd80 RAM\uc774 \uc7a5\ucc29\ub41c \uc800\uac00 MCU\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub418\ubbc0\ub85c \uac1c\ubc1c\uc790\uac00 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ub0b4\uc6a9\uc744 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uac8c \ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 TFT \ucee8\ud2b8\ub864\ub7ec\uac00 \uc7a5\ucc29\ub418\uc9c0 \uc54a\uc740 MCU\uc758 \uc2dc\ub9ac\uc5bc \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud53d\uc140\uc744 \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc740",(0,n.kt)("a",h({parentName:"p"},{href:"scenarios-fmc"})," FMC/SPI "),"\uc2dc\ub098\ub9ac\uc624\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("p",null,"In order to link the display with TouchGFX when using the Partial Framebuffer strategy, developers are required to provide implementations for the following two functions. The code displayed below is generated by CubeMX inside ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp")," and defines the interface between the TouchGFX Engine and the display driver."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'/* ******************************************************\n* Functions required by Partial Frame Buffer Strategy\n* ******************************************************\n*\n*  int touchgfxDisplayDriverTransmitActive() must return whether or not data is currently being transmitted, over e.g. SPI.\n*  void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h) will be called\n*  when the framework wants to send a block. The user must then transfer the data represented by the arguments.\n*/\n\nextern "C" int touchgfxDisplayDriverTransmitActive();\nextern "C" int touchgfxDisplayDriverShouldTransferBlock(uint16_t bottom);\nextern "C" void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h);\nextern "C" void touchgfxSignalVSync(void);\n')),(0,n.kt)("p",null,"For the STM32G071 TouchGFX Board Setup available in the TouchGFX Designer these functions are implemented in ",(0,n.kt)("inlineCode",{parentName:"p"},"Core/Src/MB1642BDisplayDriver.c")," (only showing one here):"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDisplayDriver.c"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"int touchgfxDisplayDriverTransmitActive(void)\n{\n return IsTransmittingBlock_;\n}\n")),(0,n.kt)("p",null,"With this strategy CubeMX also generates the ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL::flushFrameBuffer(Rect&)")," inside the read-only ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL")," class in ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp"),"."),(0,n.kt)(o.Z,{mdxType:"Note"},"The flushFrameBuffer(Rect&) function is generally used for MCUs with no TFT Controller. In the case of Partial Framebuffers the TouchGFX Generator can generate a definition for this method specifically for that framebuffer strategy."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n    // Try transmitting a block\n    PartialFrameBufferManager::tryTransmitBlock();\n}\n")))}F.isMDXComponent=!0}}]);