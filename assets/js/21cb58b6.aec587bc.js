"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5745],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=i},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},32346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return T},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return k}});var r=n(3905),a=n(44035),o=n(93054),i=n(37793),l=n(70814),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&f(e,n,t[n]);return e};const g={id:"scenarios-fmc",title:"FMC and SPI Display Interface"},v=void 0,y={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-fmc",id:"development/touchgfx-hal-development/scenarios/scenarios-fmc",title:"FMC and SPI Display Interface",description:"",source:"@site/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-fmc",permalink:"/4.19/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-fmc",title:"FMC and SPI Display Interface"},sidebar:"docs",previous:{title:"LTDC/Parallel RGB",permalink:"/4.19/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"},next:{title:"Framebuffer Strategies",permalink:"/4.19/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"}},b={},k=[{value:"Transferring the framebuffer",id:"transferring-the-framebuffer",level:2},{value:"FMC",id:"fmc",level:3},{value:"Returning from HAL::flushFrameBuffer()",id:"returning-from-halflushframebuffer",level:2},{value:"TouchGFX Driver / Tearing Effect Signal",id:"touchgfx-driver--tearing-effect-signal",level:2},{value:"Conclusion",id:"conclusion",level:2}],w={toc:k};function T(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},w),f),s(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The following scenario shows, generally, the steps involved in transferring pixels to an LCD connected to either an FMC or through SPI; Two methods that share some elements. The scenario described in this section uses an ST7789H2 LCD Controller to exemplify."),(0,r.kt)("p",null,"Once FMC or SPI is configured according to board specifications in STM32CubeMX TouchGFX Generator can be used to generate a TouchGFX HAL allowing developers to write code that transfers updated part of the application framebuffer to a connected display."),(0,r.kt)("p",null,"The figure below shows a TouchGFX Generator configuration with ",(0,r.kt)("em",{parentName:"p"},"Custom")," Display Interface selected. This instructs the TouchGFX Generator that the developer would like to configure and transfer pixels from the framebuffer memory to the display ",(0,r.kt)("strong",{parentName:"p"},"manually")," and generates the handles to accomplish this."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX Generator Configuration"),(0,r.kt)(i.Z,{mdxType:"Tip"},"For displays connected through SPI, custom display interface must be selected"),(0,r.kt)("p",null,"Generally, for displays with embedded GRAM, the code written by the user in the generated TouchGFX HAL should perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Based on the area of the framebuffer to be redrawn, move the "display cursor" and "active window" to a place in GRAM that matches this area.'),(0,r.kt)("li",{parentName:"ol"},"Prepare to write incoming pixel data to GRAM."),(0,r.kt)("li",{parentName:"ol"},"Send pixel data.")),(0,r.kt)("h2",m({},{id:"transferring-the-framebuffer"}),"Transferring the framebuffer"),(0,r.kt)("p",null,"When an area of the framebuffer has been updated, the TouchGFX Engine calls ",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect r)"),". This function can be overridden when developers must implement code to transfer pixels to a display manually, as in the case of SPI and FMC. As we'll see, functions to transfer pixels via the FMC Banks are generated by TouchGFX Generator."),(0,r.kt)(o.Z,{mdxType:"Note"},"The driver code shown in this section for the ST7789H2 would have been developed during the Board Bringup phase and, once working, can more or less be copied to the HAL class generated by the TouchGFX Generator.",(0,r.kt)("p",null,"The driver must be able to transfer pixels to the display, and to control the memory writing position of the display. Check the datasheet for your display for further details.")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    __ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels - User defined function */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,r.kt)("p",null,"The following function ",(0,r.kt)("inlineCode",{parentName:"p"},"ST7789H2_SetDisplayWindow")," sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),' coordinates for the virtual "cursor" in GRAM by writing to specific registers, which is usual for displays using GRAM.'),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,r.kt)("p",null,"The following function ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD")," is, in this example, a user defined function that sends one line of the updated area (",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),") at a time, ensuring to progress the framebuffer pointer accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect& rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y) * HAL::DISPLAY_WIDTH;\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,r.kt)("p",null,"Instead of advancing ",(0,r.kt)("inlineCode",{parentName:"p"},"ptr")," manually, the TouchGFX Generator will generate a function ",(0,r.kt)("inlineCode",{parentName:"p"},"advanceFrameBufferToRect")," that advances ",(0,r.kt)("inlineCode",{parentName:"p"},"ptr")," according to the position of ",(0,r.kt)("inlineCode",{parentName:"p"},"Rect")," in the framebuffer."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"inline uint8_t* TouchGFXGeneratedHAL::advanceFrameBufferToRect(uint8_t* fbPtr, const touchgfx::Rect& rect) const\n{\n    //       Advance vertically                   Advance horizontally\n    fbPtr += rect.y * lcd().framebufferStride() + rect.x * 2;\n    return fbPtr;\n}\n")),(0,r.kt)("h3",m({},{id:"fmc"}),"FMC"),(0,r.kt)("p",null,"TouchGFX Generator also supports FMC display interface, if at least one FMC Bank is configured correctly. In this case, the code generated by TouchGFX Generator is similar to that of ",(0,r.kt)("em",{parentName:"p"},"Custom")," display interface, except that the function ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD_IO_WriteMultipleData")," is generated to interact with the FMC bank connected to the display. Revisiting the code presented earlier for the function ",(0,r.kt)("inlineCode",{parentName:"p"},"copyFrameBufferBlockToLCD")," you'll see that it uses the generated function."),(0,r.kt)(i.Z,{mdxType:"Tip"},"For both SPI and FMC display interfaces, developers will modify the flushFrameBuffer() function to 1) Set cursor 2) Prepare to write to GRAM 3) transfer the pixels either through a custom SPI display driver or through the generated FMC Bank functions. "),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-c"}),"    __weak void LCD_IO_WriteMultipleData(uint16_t* pData, uint32_t Size)\n    {\n        uint32_t  i;\n\n        for (i = 0; i < Size; i++)\n        {\n            FMC_BANK1_WriteData(pData[i]);\n        }\n    }\n")),(0,r.kt)("p",null,"The following figure shows a valid 16-bit (required) configuration of FMC bank 2 (either can be used)."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.webp",width:"600",noShadow:!1,mdxType:"Figure"},"FMC Bank Configuration"),(0,r.kt)("p",null,"Once a valid configuration has been met, this bank can be selected in TouchGFX Generator. Verify the start Start address of the FMC Bank Register for your MCU."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.webp",width:"500",noShadow:!1,mdxType:"Figure"},"FMC Interface Selection"),(0,r.kt)("p",null,"TouchGFX Generator validates the configuration of the FMC Banks and reports any issues it may find."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.webp",noShadow:!1,mdxType:"Figure"},"FMC Configuration Error"),(0,r.kt)("h2",m({},{id:"returning-from-halflushframebuffer"}),"Returning from HAL::flushFrameBuffer()"),(0,r.kt)("p",null,"Once the function returns TouchGFX Engine continues to draw the rest of the frame. If developers wish to use DMA to transfer pixels to the display, they must ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)")," does not return immediately by e.g. waiting on a semaphore signaled by a ",(0,r.kt)("em",{parentName:"p"},"DMA Completed")," interrupt."),(0,r.kt)("p",null,"The following pseudo-code example shows an example of how ",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer()")," could be structured in case DMA is used. The code uses a FreeRTOS semaphore ",(0,r.kt)("inlineCode",{parentName:"p"},"screen_frame_buffer_sem"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    uint16_t* fb = HAL::lockFrameBuffer();\n\n    //Prepare display: Set cursor, write to display gram as described previously in this scenario\n\n    //Try to take a display semaphore - Always free at this point\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Set up DMA\n    screenDMAEnable();\n\n    // Wait for the DMA transfer to complete\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Unlock framebuffer and give semaphore back\n    HAL::unlockFrameBuffer();\n    xSemaphoreGive(screen_frame_buffer_sem);\n}\n")),(0,r.kt)(l.Z,{mdxType:"Caution"},"The FMC code generated by TouchGFX Generator does not use DMA."),(0,r.kt)("h2",m({},{id:"touchgfx-driver--tearing-effect-signal"}),"TouchGFX Driver / Tearing Effect Signal"),(0,r.kt)("p",null,'As can be seen in TouchGFX Generator configuration above, the "Application Tick Source" is also set to "Custom", which is general for MCUs without embedded TFT Controllers.'),(0,r.kt)("p",null,"As described in the Abstraction Layer Architecture section, the TouchGFX Engine main loop is unblocked by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),", usually at the time when a display signals."),(0,r.kt)("p",null,'For displays with a serial or 8080 display interface, the embedded display controller typically raises a periodic Tearing Effect (TE) signal that can be connected to a GPIO on the MCU. In this case, the MCU is usually configured to raise an interrupt when the GPIO is signalled. This "Tearing Effect" interrupt will then unblock the TouchGFX Engine Main loop to render the next frame. Remember to configure the GPIO to input and enable the external interrupt for the pin in STM32CubeMX.'),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'extern "C"\nvoid TE_Handler(void)\n{\n    ...\n    /* Unblock TouchGFX Engine Main Loop to render next frame */\n    OSWrappers::signalVSync();\n    ...\n}\n\n')),(0,r.kt)("h2",m({},{id:"conclusion"}),"Conclusion"),(0,r.kt)("p",null,"Selecting ",(0,r.kt)("em",{parentName:"p"},"Custom")," Display Interface through the TouchGFX Generator is an expression of a developer's intent to write code to transfer pixels from an application frame buffer to a display, manually."),(0,r.kt)("p",null,"The TouchGFX Generator will generate a function ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::flushFrameBuffer(Rect& rect)")," that is called automatically by TouchGFX after rendering an area of the framebuffer that developers can use to transfer affected pixels to a display, SPI, FMC or otherwise. Regardless, the following steps must be completed in both cases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Based on the area of the framebuffer to be redrawn, move the "display cursor" and "active window" to a place in GRAM that matches this area.'),(0,r.kt)("li",{parentName:"ol"},"Prepare to write incoming pixel data to GRAM."),(0,r.kt)("li",{parentName:"ol"},"Send pixel data. For FMC display interface, this function is generated for you and can be used inside ",(0,r.kt)("inlineCode",{parentName:"li"},"flushFrameBuffer(Rect& rect)")," (See earlier in this article).")),(0,r.kt)("p",null,"Selecting the ",(0,r.kt)("em",{parentName:"p"},"custom")," or ",(0,r.kt)("em",{parentName:"p"},"FMC")," display interface also requires developers to implement a custom TouchGFX Application Tick driver that signals ",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()")," to unblock the TouchGFX Engine Main loop. Usually, displays used along with MCUs that have no TFT Controllers can provide a ",(0,r.kt)("em",{parentName:"p"},"Tearing Effect")," signal that is connected to the MCU."))}T.isMDXComponent=!0}}]);