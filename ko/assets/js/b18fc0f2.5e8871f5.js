"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4647],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(r),s=a,h=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return r?n.createElement(h,o(o({ref:e},c),{},{components:r})):n.createElement(h,o({ref:e},c))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(t,e,r){var n=r(67294),a=r(25026);e.Z=function(t){const e=t.noShadow||!1,r=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,t.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,t.children))}},88678:function(t,e,r){var n=r(67294);class a extends n.Component{render(){const t=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:t},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},93054:function(t,e,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}e.Z=o},73584:function(t,e,r){r.r(e),r.d(e,{assets:function(){return b},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return N}});var n=r(3905),a=r(39130),l=r(44035),o=r(93054),i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))d.call(e,r)&&s(t,r,e[r]);if(c)for(var r of c(e))m.call(e,r)&&s(t,r,e[r]);return t};const k={id:"board-introduction",title:"\uac1c\ubc1c \uc18c\uac1c"},g=void 0,f={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"\uac1c\ubc1c \uc18c\uac1c",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.19/ko/docs/development/board-bring-up/board-introduction",tags:[],version:"current",frontMatter:{id:"board-introduction",title:"\uac1c\ubc1c \uc18c\uac1c"},sidebar:"docs",previous:{title:"\uc678\ubd80 \uba54\ubaa8\ub9ac",permalink:"/4.19/ko/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. Create Project",permalink:"/4.19/ko/docs/development/board-bring-up/how-to/01-create-project"}},b={},N=[{value:"\uc791\uc5c5 \ub3c4\uad6c",id:"tools-of-the-trade",level:2},{value:"\uae30\ub2a5 \ud655\uc778",id:"verification-of-functionality",level:2},{value:"\uc804\ubc18\uc801\uc778 \ud504\ub85c\uc138\uc2a4",id:"overall-process",level:2}],y={toc:N};function v(t){var e,r=t,{components:i}=r,s=((t,e)=>{var r={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&c)for(var n of c(t))e.indexOf(n)<0&&m.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=h(h({},y),s),p(e,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(l.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.png",noShadow:!0,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \ud65c\ub3d9"),(0,n.kt)("p",null,"\uc774 \ucc55\ud130\uc5d0\uc11c\ub294 \uc0c8 \ud50c\ub7ab\ud3fc\uc5d0\uc11c TouchGFX \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc2dc\uc791\ud558\ub294 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \uacfc\uc815\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4. \ubcf4\ub4dc\ub97c \ube0c\ub9c1\uc5c5\ud558\ub294 \uac83\uc740 TouchGFX\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\uae30 \uc55e\uc11c \ubcf4\ub4dc\uc758 \ubaa8\ub4e0 \ud544\uc218 \ubd80\ud488\uacfc \ud574\ub2f9\ud558\ub294 \ub4dc\ub77c\uc774\ubc84\uac00 \uc62c\ubc14\ub974\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc774\ubbf8 \uc791\ub3d9 \uc911\uc778 \ubcf4\ub4dc\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc774 \ub2e8\uacc4\uc758 \ub9ce\uc740 \ud65c\ub3d9\ub4e4\uc774 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4. \uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 \uc0ac\uc6a9\uc790 \uc81c\uc791 \ubcf4\ub4dc\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc774 \ub2e8\uacc4\ub97c \uc644\ub8cc\ud558\ub294 \ub370 \uba70\uce60\uc774 \uc18c\uc694\ub41c\ub2e4\ub294 \uac83\uc744 \uac10\uc548\ud574\uc57c \ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud50c\ub7ab\ud3fc\uc774 \ubd88\uc548\uc815\ud558\uba74 \uc88b\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc791\uc131\ud558\uae30 \uc5b4\ub835\ub2e4\ub294 \uc810\uc5d0\uc11c \uc774\ub7ec\ud55c \uc791\uc5c5\uc740 \uc2dc\uac04\uc744 \ud22c\uc790\ud560 \uac00\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ubc18\uba74, \uc548\uc815\uc801\uc774\uace0 \uc785\uc99d\ub41c \ud50c\ub7ab\ud3fc\uc5d0\uc11c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774 \ucc55\ud130\ub294 \ubcf4\ub4dc\uc5d0\uc11c \ud558\ub4dc\uc6e8\uc5b4 \ubc0f \ud558\uc704 \ub808\ubca8\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294 \uac83\uc744 \ubcf4\uc7a5 \ud558\ub294 \uc5c5\ubb34\ub97c \ub2f4\ub2f9\ud558\ub294 \uac1c\ubc1c\uc790\ub97c \uc704\ud574 \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc2e4\uc81c UI\ub97c \uac1c\ubc1c\ud558\ub294\ub370\ub9cc \uad00\uc2ec\uc774 \uc788\ub294 \uac1c\ubc1c\uc790\ub97c \uc704\ud55c \uac83\uc774 \uc544\ub2d9\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ubcf4\ub4dc\ub97c \ube0c\ub9c1\uc5c5\ud560 \ub54c\ub294 \ubcf4\ub4dc \uc0c1\uc758 \uad6c\uc131 \uc694\uc18c \ubc0f \uc8fc\ubcc0 \uc7a5\uce58\uc640 \uc774\ub4e4 \uac04\uc758 \uc5f0\uacb0, \uc774\ub4e4\uc774 \ud1b5\uc2e0\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\ud1a0\ucf5c, \uac01\uac01\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud558\uac70\ub098 \ud544\uc694\ud55c \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc \ub4f1\uc5d0 \ub300\ud574 \uc644\ubcbd\ud788 \uc774\ud574\ud558\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc0c8 \ucc55\ud130\uc778",(0,n.kt)(a.Z,{to:"../touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"\xa0TouchGFX AL \uac1c\ubc1c")," \uc5d0\uc11c\ub294 TouchGFX\uac00 \ud558\ub4dc\uc6e8\uc5b4\uc640 \ub4dc\ub77c\uc774\ubc84\ub97c \ud1a0\ub300\ub85c \uc2e4\ud589\ub418\ub3c4\ub85d AL\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,n.kt)("h2",h({},{id:"tools-of-the-trade"}),"\uc791\uc5c5 \ub3c4\uad6c"),(0,n.kt)("p",null,"STM32 \uae30\ubc18 \ubcf4\ub4dc\ub97c \ube0c\ub9c1\uc5c5\ud560 \ub54c \uc911\uc694\ud55c \uba87 \uac00\uc9c0 \ub3c4\uad6c\uac00 \uc544\ub798 \ud45c\uc5d0 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\ub3c4\uad6c"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8\uc640 \ub0b4\ubd80 \uc8fc\ubcc0 \uc7a5\uce58\uc5d0\uc11c MCU\ub97c \uad6c\uc131\ud558\uace0 \ucd08\uae30\ud654 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c \uc190\uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"STM32Cube \ud38c\uc6e8\uc5b4 \ud328\ud0a4\uc9c0"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The STM32Cube Firmware for your MCU family contains many example projects and applications that show how to use various peripherals.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\uacf5\uae09\uc5c5\uccb4 \ub370\uc774\ud130 \uc2dc\ud2b8"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The datasheets for your external devices, like the display or flash, contain important information such as timing and voltage for correct initialisation of both MCU (e.g. through STM32CubeMX) and the external device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\uacf5\uae09\uc5c5\uccb4 \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\uc2dc\uac04 \uc808\uc57d\uc744 \uc704\ud574 \uacf5\uae09\uc5c5\uccb4\uc5d0\uac8c \uc678\ubd80 \uc7a5\uce58\uc5d0 \ub300\ud55c \uc608\uc81c \ucf54\ub4dc\ub97c \uc694\uccad\ud574\uc57c \ud569\ub2c8\ub2e4. \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc\ub294 STM32 MCU\uc5d0 \ud3ec\ud305\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc9c0\ub9cc, \uadf8\ub798\ub3c4 \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc\ub97c \ucc98\uc74c\ubd80\ud130 \uc0c8\ub85c \uc791\uc131\ud558\ub294 \uac83\ubcf4\ub2e4\ub294 \uac04\ub2e8\ud569\ub2c8\ub2e4.")))),(0,n.kt)("p",null,"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c \uc218\ud589\ub418\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc740 TouchGFX\uc640 \ubb34\uad00\ud558\uac8c \uc774\ub8e8\uc5b4\uc9c0\uae30 \ub54c\ubb38\uc5d0 TouchGFX \ucf54\ub4dc\uac00 \uc77c\uccb4 \uad00\uc5ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0, \uc774\ub7ec\ud55c \uc791\uc5c5\uacfc \uadf8 \uacb0\uacfc\ub85c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub294 TouchGFX Abstraction Layer\ub97c \uac1c\ubc1c\ud558\uae30 \uc704\ud55c \uacac\uace0\ud55c \ud1a0\ub300 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud558\ub4dc\uc6e8\uc5b4 \ubc0f \ud558\uc704 \ub808\ubca8\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \uc2e4\uc81c\ub85c \ucd5c\uc885 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uae30\ub300\uc5d0 \ubd80\ud569\ud558\uac8c \uc791\ub3d9\ud558\uac8c \ub9cc\ub4dc\ub294 \uac83\uc774 \uc8fc\ub41c \ubaa9\uc801\uc785\ub2c8\ub2e4."),(0,n.kt)("h2",h({},{id:"verification-of-functionality"}),"\uae30\ub2a5 \ud655\uc778"),(0,n.kt)("p",null,"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub294 1\uac1c \uc774\uc0c1\uc758 \ud14c\uc2a4\ud2b8 \ud504\ub85c\uc81d\ud2b8 \ud615\ud0dc\ub97c \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \ub450 \uac00\uc9c0 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null})),(0,n.kt)("th",h({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"AL(Abstraction Layer)"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\ub294 TouchGFX AL\uacfc \uad81\uadf9\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uac8c \ub420 UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95\ud558\ub294 \ud1a0\ub300\uac00 \ub429\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\uc640 \ud568\uaed8 \uc791\uc131\ub41c \uc778\uc99d \ucf54\ub4dc\ub294 \ubcf4\ub4dc\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \ub54c \uad81\uadf9\uc801\uc73c\ub85c \ud655\uc778\ud574 \ubcf4\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4. \ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ubcf4\ub4dc\uc640 \uac01\uac01\uc758 \ud2b9\uc815 \uad6c\uc131 \uc694\uc18c\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9 \uc911\uc778\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \uc18c\uaddc\ubaa8 \uac80\uc99d \ud504\ub85c\uadf8\ub7a8\uc744 \ub2e4\uc218 \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uac80\uc99d \ud504\ub85c\uadf8\ub7a8\ub4e4\uc740 \uc791\uc5c5\uc774 \uc9c4\ud589 \uc911\uc77c \ub54c \ud070 \uac00\uce58\uac00 \uc788\uc73c\uba70, \ubb34\uc5b8\uac00\uac00 \ubd88\ud655\uc2e4\ud574\uc9c4 \uacbd\uc6b0\uc5d0\ub294 \ub2e4\uc2dc \ucc3e\uc544\uac00\uc11c \uae30\ub2a5\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,n.kt)("p",null,"\uc704\uc758 \ub450 \uac00\uc9c0 \uc774\uc720\ub85c \uc778\ud574 \ud655\uc778 \ud504\ub85c\uadf8\ub7a8\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uc800\uc7a5\ud558\uba74 \ub9e4\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd94\ud6c4\uc5d0 \ud14c\uc2a4\ud2b8 \ud504\ub85c\uadf8\ub7a8\uc744 \ub2e4\uc2dc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub300\uc0c1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc608\uae30\uce58 \uc54a\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \ub54c \uc0c8\ub86d\uac8c \uc218\uc815\ub41c \ubc84\uc804\uc758 \ud558\ub4dc\uc6e8\uc5b4\ub97c \ud14c\uc2a4\ud2b8\ud558\uac70\ub098 \uadfc\ubcf8 \uc6d0\uc778\uc744 \ud30c\uc545\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c \uc218\ud589\ub41c \uce21\uc815 \uc791\uc5c5(\uc608: \uba54\ubaa8\ub9ac \ub300\uc5ed\ud3ed)\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uae30\ub85d\ud574 \ub193\ub294 \uac83\ub3c4 \uc88b\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,n.kt)(l.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.png",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX AL\uc758 \ud1a0\ub300\uc778 \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc"),(0,n.kt)("h2",h({},{id:"overall-process"}),"\uc804\ubc18\uc801\uc778 \ud504\ub85c\uc138\uc2a4"),(0,n.kt)("p",null,"\uc6b0\ub9ac\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc758 \uad6c\uccb4\uc801\uc778 \uad6c\uc131\uc744 \uc54c \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \uc0ac\uc6a9\xa0\uac00\uc774\ub4dc\uac00 TouchGFX\uc758 \uc2e4\ud589 \uc2dc, \ubcf4\ub4dc\ub97c \ube0c\ub9c1\uc5c5 \ubc0f \uc900\ube44\ud558\uae30 \uc704\ud55c \ub2e8\uacc4\ubcc4 \uac00\uc774\ub4dc \uc5ed\ud560\uc744 \ud558\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uac00\uc774\ub4dc\uc758 \uac01 \ub2e8\uacc4\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc640 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\uc5d0\uc11c \ud2b9\uc815\ud55c \ud55c \ubd80\ubd84\uacfc \uc774\uc5d0 \ub300\ud55c \ube0c\ub9c1\uc5c5\uc5d0 \uad00\ub828\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud558\ub4dc\uc6e8\uc5b4\uc758 \uc0ac\uc6a9\uc790 \uc81c\uc791 \uad6c\uc131 \uc694\uc18c \ubd80\ubd84\uc73c\ub85c \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc804\ubc18\uc801\uc778 \ubaa9\ud45c\ub294 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc640 \ud1b5\uc2e0\ud558\uc5ec \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c\uc758 \ubaa8\ub4e0 \ud130\uce58\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \uc804\uc1a1\ud560 \uba85\ub839\uc740 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc0ac\uc6a9 \uc911\uc778 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \ub530\ub77c \ub2e4\ub974\ubbc0\ub85c \uac00\uc774\ub4dc\uc5d0\uc11c\ub294 \uc644\ubcbd\ud55c \ub4dc\ub77c\uc774\ubc84\ub97c \uc81c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c\ub294 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec \ub370\uc774\ud130 \uc2dc\ud2b8\uc758 \uc815\ubcf4\uc5d0 \uac00\uc774\ub4dc\ub97c \uacb0\ud569\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)(o.Z,{mdxType:"Note"},"\uc790\uccb4 \uc81c\uc791 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uc744 \uc704\ud55c \ub2e8\uacc4\ubcc4 \uac00\uc774\ub4dc\ub97c \uc219\uc9c0\ud558\uace0 \uc218\ud589\ud560 \ub54c\ub294 \ub2e4\uc74c \uc0ac\ud56d\uc744 \uc720\uc758\ud574\uc57c \ud569\ub2c8\ub2e4:",(0,n.kt)("ul",null,(0,n.kt)("li",null,"\ud55c \ubc88\uc5d0 \ud55c \ub2e8\uacc4\uc529 \uc218\ud589"),(0,n.kt)("li",null,"\ub2e4\uc74c \ub2e8\uacc4\ub85c \ub118\uc5b4\uac00\uae30 \uc804\uc5d0 \uac01 \ub2e8\uacc4\ub97c \ucca0\uc800\ud558\uac8c \ud655\uc778"),(0,n.kt)("li",null,"\ubb34\uc5b8\uac00\uac00 \uc758\ub3c4\ud55c \ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \ub54c \uac00\uc774\ub4dc\ub97c \ub514\ubc84\uae45 \uc218\ub2e8\uc73c\ub85c \ud65c\uc6a9\ud558\uac70\ub098 \uc774\uc804 \ub2e8\uacc4\ub85c \ub3cc\uc544\uac00\uc11c \uc798\ubabb \uc9c4\ud589\ud55c \ubd80\ubd84\uc774 \uc5c6\ub294\uc9c0 \ud655\uc778"),(0,n.kt)("li",null,"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uc740 \uc0ac\uc18c\ud55c \uc791\uc5c5\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \uc608\uae30\uce58 \uc54a\uc740 \ub3d9\uc791\uc774 \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 \uacbd\uace0\ub97c \ubc1b\uc9c0 \uc54a\uc74c"))),(0,n.kt)("p",null,"\uac00\uc774\ub4dc\uc758 \uac01 \ub2e8\uacc4\ub294 \ub2e4\uc74c\uc758 \uad6c\uc870\ub97c \ub530\ub974\uac8c \ub429\ub2c8\ub2e4:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Motivation")," This part will explain the step and motivate why the step is an important step in preparing for running TouchGFX on your hardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Goal")," The goal part lists the goals for this step. \ud655\uc778 \uc0ac\ud56d \ubaa9\ub85d\uc5d0\ub294 \uc218\ud589\ud574\uc57c \ud558\ub294 \ud2b9\uc815 \ud14c\uc2a4\ud2b8\uac00 \uc790\uc138\ud788 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud655\uc778 \uc0ac\ud56d\uc744 \ud1b5\ud574 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c TouchGFX\ub97c \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ud558\ub294 \ub370 \ud544\uc694\ud55c \uae30\ub2a5\ub4e4\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prerequisites")," Here we list items that are required to perform the tasks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Do")," This part explains as concrete as possible how to write the software required to configure and use the hardware. \uc77c\ubd80 \ub2e8\uacc4\uc758 \uacbd\uc6b0, \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \uc0ac\uc6a9 \uc911\uc778 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \uc0c1\ub2f9 \ubd80\ubd84 \uc758\uc874\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc815\ud655\ub3c4\uac00 \ub5a8\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0\ub97c \uc704\ud574 \uc774 \ubd80\ubd84\uc5d0\ub294 \uc0c1\uc704 \ub808\ubca8\uc5d0\uc11c \ub2e8\uacc4\ub4e4\uc744 \ub098\uc5f4\ud558\uace0 \uc788\uc5b4 \ud558\ub4dc\uc6e8\uc5b4\uc640 \uad00\ub828\uc774 \uc788\ub294 \uc138\ubd80 \uc815\ubcf4\ub97c \uc9c1\uc811 \ucc3e\uc544\ubd10\uc57c \ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\uac01\uac01\uc758 \ubc29\ubc95 \ub2e8\uacc4\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\ub2e8\uacc4"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\ub0b4\uc6a9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/01-create-project"}),"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Create an empty project in STM32CubeMX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/02-cpu-running"}),"\uc2e4\ud589 \uc911\uc778 CPU")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"MCU\uac00 \uc6d0\ud558\ub294 \uc18d\ub3c4\ub85c \uc2e4\ud589 \uc911\uc778\uc9c0 \ud655\uc778")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/03-display-internal"}),"Display with framebuffer in internal RAM")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ud560\ub2f9\ud558\uace0 \uc774\ub97c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"\uc678\ubd80 RAM")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM \ud65c\uc131\ud654")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/05-display-external"}),"Display with framebuffer in external RAM")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM\uc73c\ub85c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc62e\uae30\uace0 \uc774\ub97c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"\uc8fc\uc18c \uc9c0\uc815\uc774 \uac00\ub2a5\ud55c \uc678\ubd80 \ud50c\ub798\uc2dc")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\uba54\ubaa8\ub9ac \ub9e4\ud551\ub41c \uc678\ubd80 \ud50c\ub798\uc2dc \ud65c\uc131\ud654")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"\ube14\ub85d \ubaa8\ub4dc\uc758 \uc678\ubd80 \ud50c\ub798\uc2dc")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\ube14\ub85d \ubaa8\ub4dc\uc758 \uc678\ubd80 \ud50c\ub798\uc2dc \ud65c\uc131\ud654")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"\ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Chrom-ART \uadf8\ub798\ud53d \uac00\uc18d\uae30 \ud65c\uc131\ud654")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/09-touch-controller"}),"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \ub300\ud55c \ud1b5\uc2e0 \uc124\uc815")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/10-physical-buttons"}),"\ubb3c\ub9ac\uc801 \ubc84\ud2bc")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4 \uad6c\uc131")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"how-to/11-flash-loader"}),"\ud50c\ub798\uc2dc \ub85c\ub354")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud558\ub294 \ubc29\ubc95 \uac1c\ubc1c")))))}v.isMDXComponent=!0}}]);