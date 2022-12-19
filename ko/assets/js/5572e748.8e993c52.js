"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3369],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},37287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return G},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return b}});var r=n(3905),a=n(44035),o=n(22425),l=n(29415),i=n(39130),p=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))d.call(t,n)&&g(e,n,t[n]);return e};const f={id:"scenarios-change-pixelformat-bpp",title:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud53d\uc140 \ud615\uc2dd \ubcc0\uacbd"},k=void 0,v={unversionedId:"development/scenarios/scenarios-change-pixelformat-bpp",id:"development/scenarios/scenarios-change-pixelformat-bpp",title:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud53d\uc140 \ud615\uc2dd \ubcc0\uacbd",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-change-pixelformat-bpp.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-change-pixelformat-bpp",permalink:"/4.19/ko/docs/development/scenarios/scenarios-change-pixelformat-bpp",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-change-pixelformat-bpp",title:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud53d\uc140 \ud615\uc2dd \ubcc0\uacbd"},sidebar:"docs",previous:{title:"\uae00\uaf34 \ub370\uc774\ud130\uc5d0 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc \uc0ac\uc6a9",permalink:"/4.19/ko/docs/development/scenarios/fonts-in-unmapped-flash"},next:{title:"TouchGFX Board Setup \uc0dd\uc131",permalink:"/4.19/ko/docs/development/scenarios/scenarios-create-at"}},y={},b=[{value:"Board Bring Up",id:"board-bring-up",level:2},{value:"HAL Development",id:"hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"\uacb0\ub860",id:"conclusion",level:2}],N={toc:b};function G(e){var t,n=e,{components:p}=n,g=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},N),g),c(t,u({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub41c \ud6c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud53d\uc140 \ud615\uc2dd\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc73c\ub85c \uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 TouchGFX Generator\ub97c \ud1b5\ud574 24\ube44\ud2b8 RGB888 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 16\ube44\ud2b8 RGB565\ub85c \uc218\uc815\ud558\ub294 \ubc29\ubc95\uc744 \uc608\uc2dc\ud558\uace0, TouchGFX \ud504\ub85c\uc81d\ud2b8 \uad6c\uc131\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\ub3c4 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ud53d\uc140 \ud615\uc2dd\uc744 \ubcc0\uacbd\ud558\ub294 \uc774\uc720\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ub514\uc2a4\ud50c\ub808\uc774 \uc694\uad6c \uc0ac\ud56d \uc218\uc815"),(0,r.kt)("li",{parentName:"ol"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc694\uad6c \uc0ac\ud56d \uc218\uc815"),(0,r.kt)("li",{parentName:"ol"},"\ucd08\uae30 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131 \uc911 \uc2e4\uc218 \ubc1c\uc0dd")),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)(i.Z,{to:"../../basic-concepts/color-formats",mdxType:"Link"},"\uc0c9\uc0c1 \ud615\uc2dd"),"\uc5d0 \ub300\ud55c \ubb38\uc11c\ub97c \uc77d\uc5b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud53d\uc140 \ud615\uc2dd\uc744 \ubcc0\uacbd\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ubcc0\uacbd\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Board Bring Up:")," LTDC\uc758 \ud53d\uc140 \ud615\uc2dd\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HAL Development:")," LTDC \uc124\uc815\uc774\ub098 \uba54\ubaa8\ub9ac \ub0b4 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc704\uce58\ub97c \ubc18\uc601\ud558\ub3c4\ub85d TouchGFX Generator \uc124\uc815\uc744 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer"),": \uc124\uacc4\uc790\uac00 \uc774\ubbf8\uc9c0 \uc790\uc0b0\uc5d0 \ub300\ud574 \uc774\ub807\uac8c \uc0c8\ub86d\uac8c \ubcc0\ud658\ub41c \ube44\ud2b8 \uc2ec\ub3c4\uc640 \uc62c\ubc14\ub978 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc124\uacc4\uc790\ubd80\ud130 \uc2dc\uc791\ud574\uc11c ",(0,r.kt)("em",{parentName:"p"},"\ub514\uc2a4\ud50c\ub808\uc774")," \ubc0f ",(0,r.kt)("em",{parentName:"p"},"\uc774\ubbf8\uc9c0"),"\uc5d0 \ub300\ud55c \ud604\uc7ac \uad6c\uc131\uc744 \uac80\uc0ac\ud558\uace0, \ub098\uc911\uc5d0 \ud654\uba74\uc73c\ub85c \ub3cc\uc544\uac00\uc11c \uc720\ud6a8\uc131\uc744 \uac80\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-4-17.webp",width:"600",mdxType:"Figure"},"\uc774\ubbf8\uc9c0 \uad6c\uc131 RGB888"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-4-17.webp",width:"600",mdxType:"Figure"},"\ub514\uc2a4\ud50c\ub808\uc774 \uad6c\uc131 24\ube44\ud2b8"),(0,r.kt)("h2",h({},{id:"board-bring-up"}),"Board Bring Up"),(0,r.kt)("p",null,"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc758 \ud2b9\uc815 \uc124\uc815\uc774 LTDC\uc758 \uacbd\uc6b0\ucc98\ub7fc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc6d0\ud558\ub294 \ud53d\uc140 \ud615\uc2dd\uc5d0 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\ub294 \uacbd\uc6b0, \uac1c\ubc1c\uc790\ub294 TouchGFX\uac00 LTDC\uc5d0\uc11c \uc608\uc0c1\ud558\ub294 \ud615\uc2dd\uc73c\ub85c \ub80c\ub354\ub9c1\uc744 \ud558\ub3c4\ub85d \uc801\uc808\ud55c \ubcc0\uacbd\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc720\ud6a8\ud55c \ud53d\uc140 \ud615\uc2dd \uc124\uc815\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)(i.Z,{to:"../touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"LTDC"),"\uc758 \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",h({},{id:"hal-development"}),"HAL Development"),(0,r.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud53d\uc140 \ud615\uc2dd\uacfc \ub354\ubd88\uc5b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ube44\ud2b8 \uc2ec\ub3c4\uac00 \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0(\uc608: ARGB2222\ub97c BRGA2222\ub85c \ubcc0\uacbd\ud55c \uc0c1\ud0dc\uc5d0\uc11c \uc5ec\uc804\ud788 8\ube44\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0)\uc5d0\ub294 \uac1c\ubc1c\uc790\uac00 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uba54\ubaa8\ub9ac \uc704\uce58\ub97c \uc218\uc815\ud574\uc57c\ud560 \uc218 ",(0,r.kt)("em",{parentName:"p"},"\uc788\uc2b5\ub2c8\ub2e4"),". \uc544\ub798\uc758 \uacbd\uc6b0\uac00 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-chage-px-fmt.webp",width:"400",mdxType:"Figure"},"\ud53d\uc140 \ud615\uc2dd \uc218\uc815"),(0,r.kt)("p",null,"\uc774 \uad6c\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uba74 16\ube44\ud2b8 TouchGFX ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD")," \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration"),"\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"static LCD16bpp display;\n")),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\uac00 \uc5f4\ub824 \uc788\uc73c\uba74 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc0c8\ub85c \uc0dd\uc131\ub41c \uad6c\uc131 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ubc18\uc601\ud558\ub3c4\ub85d \uc5c5\ub370\uc774\ud2b8\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-json",metastring:"{7-8}","{7-8}":!0}),'{\n  "image_configuration": {\n    "images": {},\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB565",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  },\n')),(0,r.kt)("p",null,"\uc544\ub798 \ud45c\uc5d0\ub294 \ud2b9\uc815 \ud53d\uc140 \ud615\uc2dd\uc5d0\uc11c \uc624\ud30c\ud06c(opaque) \ubc0f \ube44 \uc624\ud30c\ud06c \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc774 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\ud504\ub808\uc784 \ubc84\ud37c \ud53d\uc140 \ud615\uc2dd"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\uc624\ud30c\ud06c \ud615\uc2dd"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\ube44 \uc624\ud30c\ud06c \ud615\uc2dd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Gray4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888")))),(0,r.kt)("h2",h({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)("p",null,"\uc77c\ub2e8 TouchGFX \ud504\ub85c\uc81d\ud2b8\uac00 STM32CubeMX\uc5d0 \uc815\uc758\ub41c \uc0c8\ub85c\uc6b4 TouchGFX Generator \uc124\uc815\uc744 \uae30\ubc18\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\uba74 TouchGFX Designer \uad6c\uc131\uc774 \uc5ec\uae30\uc5d0 \ub9de\uac8c \ubcc0\uacbd\ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-16bpp-4-17.webp",width:"600",mdxType:"Figure"},"\uc774\ubbf8\uc9c0 \uad6c\uc131 RGB565"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-16bpp-4-17.webp",width:"600",mdxType:"Figure"},"\ub514\uc2a4\ud50c\ub808\uc774 \uad6c\uc131 16\ube44\ud2b8"),(0,r.kt)("p",null,"TouchGFX Designer \ub0b4\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud55c \ud6c4\uc5d0\ub294 \uc5c5\ub370\uc774\ud2b8\ub41c \ud53d\uc140 \ud615\uc2dd\uc774 \uc774\ubbf8\uc9c0 \uc790\uc0b0 \ucf54\ub4dc\uc5d0 \ubc18\uc601\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX\\generated\\images\\src\\my_image.png"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'LOCATION_PRAGMA("ExtFlashSection")\nKEEP extern const unsigned char my_image[] LOCATION_ATTRIBUTE("ExtFlashSection") = // 320x240 RGB565 pixels.\n')),(0,r.kt)("h2",h({},{id:"conclusion"}),"\uacb0\ub860"),(0,r.kt)("p",null,"TouchGFX Generator\ub97c \uc0ac\uc6a9\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud604\uc7ac \ud53d\uc140 \ud615\uc2dd\uc744 \uac04\ub2e8\ud558\uac8c \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. LTDC\uac00 \uc788\ub294 MCU\uc758 \uacbd\uc6b0, TouchGFX Core\uc5d0\uc11c \ub80c\ub354\ub9c1\ub41c \ud615\uc2dd\uc744 \uc900\uc218\ud558\ub3c4\ub85d TouchGFX\uac00 \uc2e4\ud589\ub418\ub294 \uacc4\uce35\uc774 TouchGFX Generator \uc124\uc815\uc5d0 \uc815\uc758\ub41c \ud504\ub808\uc784 \ubc84\ud37c \ud53d\uc140 \ud615\uc2dd(LTDC\uc758 \uacbd\uc6b0 RGB565 \ubc0f RGB888\ub85c \uc81c\ud55c\ub428)\uacfc \uc77c\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"STM32CubeMX\uc5d0\uc11c \ucf54\ub4dc\uac00 \uc0dd\uc131\ub418\uba74 TouchGFX \ud504\ub85c\uc81d\ud2b8\uac00 \uc5c5\ub370\uc774\ud2b8\ub418\uace0, \uc774\ud6c4 TouchGFX Designer\uc5d0\uc11c \ucf54\ub4dc\uac00 \uc0dd\uc131\ub420 \ub54c \uc774\ubbf8\uc9c0 \uc790\uc0b0\uacfc \ud504\ub808\uc784 \ubc84\ud37c \ub4dc\ub77c\uc774\ubc84 \ubaa8\ub450 \uc9c0\uc815\ub41c \ud615\uc2dd\uc744 \uac16\uac8c \ub429\ub2c8\ub2e4."))}G.isMDXComponent=!0}}]);