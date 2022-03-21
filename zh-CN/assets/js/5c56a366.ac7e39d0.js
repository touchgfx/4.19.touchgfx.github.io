"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4643],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,h=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:o,src:a})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:o,src:a})),i.createElement("p",null,e.children))}},35096:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var i=n(11368),r=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,i)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},94176:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return g},default:function(){return k}});var i=n(3905),r=n(44035),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={id:"scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode"},h=void 0,f={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",isDocsHomePage:!1,title:"MIPI-DSI Video Mode",description:"This section describes how to configure a MIPI DSI interface for Video Mode and how to use this configuration with TouchGFX Generator. The example used in this article will be for 24-bit, RGB888, frame buffer format and generally goes through the following configurations in STM32CubeMX and examplifies with generated code.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",permalink:"/4.19/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",tags:[],version:"current",frontMatter:{id:"scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode"},sidebar:"docs",previous:{title:"Video Decoding",permalink:"/4.19/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"UI\u5f00\u53d1\u4ecb\u7ecd",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-development-introduction"}},g=[{value:"STM32CubeMX - Hardware configuration",id:"stm32cubemx-hardware-configuration",children:[{value:"LTDC",id:"ltdc",children:[],level:3},{value:"DSIHOST Configuration",id:"dsihost-configuration",children:[],level:3}],level:2},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",children:[],level:2},{value:"DSIHOST / LTDC Initialization sequence",id:"dsihost-ltdc-initialization-sequence",children:[],level:2},{value:"Updated TouchGFXHAL class for DSI Video Mode",id:"touchgfxhal-class-for-dsi-video-mode",children:[],level:2}],S={toc:g};function k(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=s(s({},S),p),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"This section describes how to configure a MIPI DSI interface for Video Mode and how to use this configuration with TouchGFX Generator. The example used in this article will be for 24-bit, RGB888, frame buffer format and generally goes through the following configurations in STM32CubeMX and examplifies with generated code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LTDC IP"),(0,i.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,i.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,i.kt)("h2",s({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - Hardware configuration"),(0,i.kt)("h3",s({},{id:"ltdc"}),"LTDC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Display Type")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888 (24 bits) - DSI Mode")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Layer Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Number of layers")," to ",(0,i.kt)("em",{parentName:"li"},"1 layer")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Layer 0 - Pixel Format")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Layer 0 - Alpha constant for blending")," to ",(0,i.kt)("em",{parentName:"li"},"255")," ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config1.png",width:"800",mdxType:"Figure"},"LTDC Configuration")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NVIC Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable LCD-TFT global interrupt ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config2.png",width:"800",mdxType:"Figure"},"LTDC NVIC Settings"))))),(0,i.kt)("h3",s({},{id:"dsihost-configuration"}),"DSIHOST Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"DSIHost")," to _*Video Mode**"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display Interface"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Color Coding")," to ",(0,i.kt)("em",{parentName:"li"},"RGB888 (24 bits) - DSI mode")),(0,i.kt)("li",{parentName:"ul"},"Remaining configurations depends on the selected LCD HW ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config1.png",width:"800",mdxType:"Figure"},"DSIHOST Configuration")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NVIC Settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DSIHOST global interrupt is not needed and should be disabled. ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config2.png",width:"800",mdxType:"Figure"},"DSIHOST NVIC Settings"))))),(0,i.kt)("h2",s({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("em",{parentName:"li"},"Graphics Application")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Display / Interface")," to ",(0,i.kt)("em",{parentName:"li"},"Parallel RGB (LTDC)")," since this is still the controller the application needs to communicate with."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Application Tick Source")," to ",(0,i.kt)("em",{parentName:"li"},"LTDC")," ",(0,i.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/touchgfx-generator-config.png",width:"800",mdxType:"Figure"},"TouchGFX Generator Configuration"))))),(0,i.kt)("h2",s({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC Initialization sequence"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The call to ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()")," must be done before ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),". This should be handled by CubeMX.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()")," at the end of ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),", in a ",(0,i.kt)("em",{parentName:"p"},"User Code")," section.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After calling ",(0,i.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),", switch DSIHOST clock to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DSIPHY")," source."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{12,20}","{12,20}":!0}),"/**\n  * @brief DSIHOST Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_DSIHOST_DSI_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN DSIHOST_Init 2 */\n  // Start DSI\n  if (HAL_DSI_Start(&hdsi) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  /* Switch to DSI PHY PLL clock */\n  RCC_PeriphCLKInitTypeDef PeriphClkInit;\n  PeriphClkInit.PeriphClockSelection = RCC_PERIPHCLK_DSI;\n  PeriphClkInit.DsiClockSelection    = RCC_DSICLKSOURCE_DSIPHY;\n  HAL_RCCEx_PeriphCLKConfig(&PeriphClkInit);\n  /* USER CODE END DSIHOST_Init 2 */\n\n  ...\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User has to add the required initialization code specific to the used LCD controller at the end of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()")," function."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"That code will be based on the DSI HAL APIs ",(0,i.kt)("inlineCode",{parentName:"li"},"HAL_DSI_ShortWrite()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HAL_DSI_LongWrite()"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN LTDC_Init 2 */\n  // Specific LCD controller's initialization code\n  ...\n\n  // Exit Sleep Mode\n  if (HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P0, DSI_EXIT_SLEEP_MODE, 0x00) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  HAL_Delay(120);\n  /* USER CODE END LTDC_Init 2 */\n\n  ...\n}\n")))),(0,i.kt)("h2",s({},{id:"touchgfxhal-class-for-dsi-video-mode"}),"Updated TouchGFXHAL class for DSI Video Mode"),(0,i.kt)("p",null,"The code for the LTDC interrupt is identical to the code generated when using Parallel RGB display interface."),(0,i.kt)("p",null,"One way to prevent the MIPI DSI display from turning on until we've rendered the first frame in the application is to guard the function ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame")," to keep the display off until first frame is rendered by TouchGFX. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()")," could be updated as below, to enable the LCD and its Backlight through a HW Timer configured for PWM output."),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")))}k.isMDXComponent=!0}}]);