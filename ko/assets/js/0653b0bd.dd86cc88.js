"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7178],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,s=d["".concat(u,".").concat(m)]||d[m]||g[m]||a;return n?r.createElement(s,l(l({ref:t},c),{},{components:n})):r.createElement(s,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},4777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return v}});var r=n(3905),i=n(22425),a=n(44035),l=n(93054),o=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&m(e,n,t[n]);return e};const h={id:"debugging",title:"\ub514\ubc84\uae45"},b=void 0,f={unversionedId:"development/ui-development/working-with-touchgfx/debugging",id:"development/ui-development/working-with-touchgfx/debugging",title:"\ub514\ubc84\uae45",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/debugging.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/debugging",permalink:"/4.19/ko/docs/development/ui-development/working-with-touchgfx/debugging",tags:[],version:"current",frontMatter:{id:"debugging",title:"\ub514\ubc84\uae45"},sidebar:"docs",previous:{title:"\ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1",permalink:"/4.19/ko/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"},next:{title:"Example \ubc0f Board Specific Demo",permalink:"/4.19/ko/docs/development/ui-development/working-with-touchgfx/examples"}},k={},v=[{value:"\ub300\uc0c1 \ub514\ubc84\uae45",id:"target-debugging",level:2},{value:"\uc2dc\ubbac\ub808\uc774\ud130 \ub514\ubc84\uae45",id:"simulator-debugging",level:2},{value:"DebugPrinter \uc0ac\uc6a9",id:"using-the-debugprinter",level:2},{value:"DebugPrinter \ud074\ub798\uc2a4",id:"debugprinter-classes",level:3}],D={toc:v};function y(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},D),m),u(t,p({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 TouchGFX Designer\uc640 TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub418\uc5b4 \uac1c\ubc1c\uc790\uac00 \uc791\uc131\ud558\ub294 C++ \ud30c\uc77c\ub4e4\ub85c \uc774\ub8e8\uc5b4\uc9c0\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uc5b4\ub5a4 C++ \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c\ub3c4 \ub514\ubc84\uae45\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",s({},{id:"target-debugging"}),"\ub300\uc0c1 \ub514\ubc84\uae45"),(0,r.kt)("p",null,"IAR Workbench, Keil uVision, STM32CubeIDE \uac19\uc740 IDE\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \ud574\ub2f9 IDE\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uba54\ucee4\ub2c8\uc998\uc744 \uc0ac\uc6a9\ud558\uba74 \ud0c0\uac9f \ub514\ubc84\uae45\uc774 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4. TouchGFX Generator\uc5d0\uc11c, \ud639\uc740 TouchGFX Board Setup\uc5d0\uc11c \uc9c1\uc811 \uc0dd\uc131\ub41c TouchGFX \ud504\ub85c\uc81d\ud2b8\ub294 \uc120\ud0dd\ud55c \ub3c4\uad6c \uccb4\uc778\uc744 \uc0ac\uc6a9\ud574 \uc5b8\uc81c\ub4e0\uc9c0 \ub514\ubc84\uae45\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubcf4\ub4dc \ube0c\ub9c1 \uc5c5 \ucf54\ub4dc\uc640 TouchGFX AL\uc740 \ub300\uc0c1 \ubcf4\ub4dc\uc5d0\uc11c\ub9cc \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 \ub514\ubc84\uae45\ub3c4 \ub300\uc0c1 \ubcf4\ub4dc\uc5d0\uc11c \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c UI \ubd80\ubd84\uc740 \ub300\uc0c1\uc5d0\uc11c, \ud639\uc740 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud574 \ub514\ubc84\uae45\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub300\uc0c1\uc5d0\uc11c\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc560\ub2c8\uba54\uc774\uc158 \uc18d\ub3c4, \uc5c5\ub370\uc774\ud2b8 \uc8fc\uae30, \uc751\ub2f5\uc131\uacfc \uac19\uc740 \uc131\ub2a5 \ubb38\uc81c\ub97c \ub514\ubc84\uae45\ud569\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0 \ub2e4\ub978 UI \ubb38\uc81c\ub3c4 \ub514\ubc84\uae45\ud560 \uc218 \uc788\uc9c0\ub9cc \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud574 \ub514\ubc84\uae45\ud558\ub294 \ud3b8\uc774 \ub300\uccb4\ub85c \ub354 \ube60\ub985\ub2c8\ub2e4."),(0,r.kt)("h2",s({},{id:"simulator-debugging"}),"\uc2dc\ubbac\ub808\uc774\ud130 \ub514\ubc84\uae45"),(0,r.kt)("p",null,"\uc560\ub2c8\uba54\uc774\uc158 \uc704\uce58 \ubcc0\uacbd, \uc804\ud658, \uc694\uc18c \uc5c5\ub370\uc774\ud2b8, \ud504\ub85c\uadf8\ub7a8 \ub85c\uc9c1 \ub4f1 UI \uad00\ub828 \ubb38\uc81c\uc5d0 \ub300\ud55c \ub514\ubc84\uae45\uc740 \ub300\uccb4\ub85c \ub9e4\ubc88 \ubcf4\ub4dc\ub97c \ud50c\ub798\uc2f1\ud558\ub294 \uac83\ubcf4\ub2e4 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud574 \ud14c\uc2a4\ud2b8 \ubc0f \ub514\ubc84\uae45\ud558\ub294 \ud3b8\uc774 \ud6e8\uc52c \ub354 \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uae30\ubcf8\uc801\uc73c\ub85c Visual Studio\ub97c \uc9c0\uc6d0\ud558\uae30 \ub54c\ubb38\uc5d0 \uc5ec\uae30\uc5d0 \ud544\uc694\ud55c \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc744 \uc81c\uacf5\ud558\uace0 \uc720\uc9c0 \uad00\ub9ac\ud569\ub2c8\ub2e4. Visual Studio\ub97c \uc0ac\uc6a9\ud558\uba74 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \ub514\ubc84\uadf8 \ubaa8\ub4dc\ub85c \uc2e4\ud589\ud558\uc5ec IDE\uc758 \ub514\ubc84\uadf8 \uae30\ub2a5\uc744 \ubaa8\ub450 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud574 \ub514\ubc84\uadf8\ud560 \uacbd\uc6b0 Visual Studio \uc678\uc5d0 \ub2e4\ub978 IDE\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. GCC\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 IDE\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 GCC\ub97c \uc124\uc815\ud558\uc5ec GCC\uc5d0\uc11c \ucef4\ud30c\uc77c\ub41c \ud504\ub85c\uc81d\ud2b8\ub97c \ub514\ubc84\uae45\ud560 \uac00\ub2a5\uc131\uc774 \ub9e4\uc6b0 \ub192\uc2b5\ub2c8\ub2e4. \ub2e8, \uc774 \uacbd\uc6b0\uc5d0\ub294 IDE\ub97c \uc9c1\uc811 \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/visual-studio.png",width:"640",mdxType:"Figure"},"Visual Studio\uc758 \ub514\ubc84\uae45 \uc791\uc5c5"),(0,r.kt)("h2",s({},{id:"using-the-debugprinter"}),"DebugPrinter \uc0ac\uc6a9"),(0,r.kt)("p",null,"DebugPrinter \ud074\ub798\uc2a4\ub294 \ud14d\uc2a4\ud2b8 \uc601\uc5ed\uc774\ub098 \uae30\ud0c0 \uc704\uc82f\uc744 \uc2a4\ud06c\ub9b0\uc5d0 \ucd94\uac00\ud558\uc9c0 \uc54a\uace0\ub3c4 \ub514\ubc84\uadf8 \uba54\uc2dc\uc9c0\ub97c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc190\uc27d\uac8c \ucd9c\ub825\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc73c\ub85c, \uc608\ub97c \ub4e4\uc5b4 \ubc31\uc5d4\ub4dc\uc5d0\uc11c \uc218\uc2e0\ub418\ub294 \uc774\ubca4\ud2b8\ub098 FPS \ub610\ub294 \ub80c\ub354\ub9c1 \uc2dc\uac04\uacfc \uac19\uc740 \uce21\uc815 \uac12\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"DebugPrinter\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uba3c\uc800 \uc778\uc2a4\ud134\uc2a4\ub97c \ud560\ub2f9\ud558\uc5ec Application \ud074\ub798\uc2a4\ub85c \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4. This can be done e.g. in the constructor of FrontendApplication."),(0,r.kt)("p",null,"The debug printer needs to be compatible with the framebuffer format. The table below shows the available class names. Here we add a 16bpp debug printer (compatible with LCD16bpp) in ",(0,r.kt)("inlineCode",{parentName:"p"},"gui/src/common/FrontendApplication.cpp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/lcd/LCD16DebugPrinter.hpp>\n\nLCD16DebugPrinter lcd16DebugPrinter; // Global object\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n  : FrontendApplicationBase(m, heap)\n{\n  lcd16DebugPrinter.setPosition(0, 0, 240, 40);\n  lcd16DebugPrinter.setScale(2);\n  lcd16DebugPrinter.setColor(0x00); //black\n  Application::setDebugPrinter(&lcd16DebugPrinter);\n}\n")),(0,r.kt)("p",null,"Here we have configured the DebugPrinter to write in the upper left 240 x 40 pixels. In your application you can now print a string using:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'#include <stdio.h>\n\nchar debugStringBuffer[30];\nvoid updateDebugString()\n{\n  static int count = 0;\n  count++;\n  snprintf(debugStringBuffer, sizeof(debugStringBuffer), "tick: %d", count);\n  Application::getDebugPrinter()->setString(debugStringBuffer);\n  Application::invalidateDebugRegion();\n}\n')),(0,r.kt)("p",null,"You don't have to call the DebugPrinter::setString method more than once in your application. But call the invalidateDebugRegion when you have changed the content of your buffer. This will make the DebugPrinter draw the new content. The DebugPrinter will also redraw if the ordinary Widgets in the area covered by DebugPrinter are redrawn."),(0,r.kt)(l.Z,{mdxType:"Note"},"Characters from ASCII 32 (space) to ASCII 126 ('~') are available."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/debugprinter.png",mdxType:"Figure"},"DebugPrinter \uc0ac\uc6a9"),(0,r.kt)("h3",s({},{id:"debugprinter-classes"}),"DebugPrinter \ud074\ub798\uc2a4"),(0,r.kt)("p",null,"DebugPrinter \uc778\uc2a4\ud134\uc2a4\uac00 \uc0ac\uc6a9\ud560 LCD \ud074\ub798\uc2a4\uc640 \ud638\ud658\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub2e4\uc74c \ud45c\ub294 DebugPrinter \ud074\ub798\uc2a4 \uc774\ub984 \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"LCD \ud074\ub798\uc2a4"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"DebugPrinter \ud074\ub798\uc2a4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD1bpp"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD1DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD2bpp"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD2DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD4bpp"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD4DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD8bpp_ARGB2222"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD8ARGB2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD8bpp_ABGR2222"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD8ABGR2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD8bpp_RGBA2222"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD8RGBA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD8bpp_BGRA2222"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD8BGRA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD16bpp"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD16bppSerialFlash"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD24bpp"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD24DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD32bpp"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LCD32DebugPrinter")))),(0,r.kt)("p",null,"DebugPrinter \ud074\ub798\uc2a4\ub294 \uc0ac\uc6a9 \uc911\uc778 LCD \ud074\ub798\uc2a4\uc640 \uc77c\uce58\ud558\ub294 \uac83\uc744 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"For Simulator projects the LCD instance is created in ",(0,r.kt)("em",{parentName:"p"},"generated/simulator/src/mainBase.cpp"),". For target projects the instance is created in ",(0,r.kt)("em",{parentName:"p"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp"),":"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"...\nstatic LCD16bpp display;\n...\n")),(0,r.kt)("p",null,"You can check these files to verify your LCD class name."))}y.isMDXComponent=!0}}]);