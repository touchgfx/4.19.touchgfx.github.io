"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2309],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},65407:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const i=(0,o.Z)(e.url),a=null!=(t=e.width)?t:"100%",c=null!=(n=e.height)?n:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:c},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},40576:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return y}});var r=n(3905),o=n(44035),i=n(65407),a=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&s(e,n,t[n]);return e};const f={id:"getting-started",title:"Getting Started"},g=void 0,h={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/4.19/ko/docs/introduction/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",previous:{title:"Installation",permalink:"/4.19/ko/docs/introduction/installation"},next:{title:"Basic Concepts",permalink:"/4.19/ko/docs/category/basic-concepts"}},v={},y=[{value:"TouchGFX Designer Quick Start",id:"touchgfx-designer-quick-start",level:2},{value:"TouchGFX \ubcf4\ub4dc \uc124\uc815 + \uc608\uc2dc \ubc0f \ub370\ubaa8",id:"application-template--ui-template",level:3},{value:"Board Specific Demo",id:"online-applications",level:3},{value:"\ub2e4\uc74c \ub2e8\uacc4",id:"whats-next",level:2}],b={toc:y};function k(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),s),c(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uc124\uce58\xa0\uc139\uc158\uc5d0 \uc124\uba85\ub418\uc5b4 \uc788\ub4ef\uc774, TouchGFX \uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub824\uba74 \uba3c\uc800 \ucd5c\uc2e0 \ubc84\uc804\uc758 TouchGFX\ub97c ",(0,r.kt)("a",m({parentName:"p"},{href:"installation"}),"\uc124\uce58")," \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/introduction/getting-started/computer-2-screens.webp",noShadow:!0,mdxType:"Figure"}," "),(0,r.kt)("p",null,"\uc124\uce58\uac00 \uc644\ub8cc\ub418\uba74 TouchGFX\uc758 \uccab \ubc88\uc9f8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud560 \uc900\ube44\uac00 \ub410\uc2b5\ub2c8\ub2e4. \ubcf8 \uc124\uba85\uc11c\uc758 \uc8fc\uc694 \uc139\uc158\ub4e4\uc744 \uaf2d \uc77d\uc5b4\ubcf4\uc2dc\uace0 \uae30\ubcf8\uc801\uc778 TouchGFX \uac1c\ub150\uc744 \uc219\uc9c0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \uc139\uc158\uc740",(0,r.kt)("a",m({parentName:"p"},{href:"../development/development-introduction"}),"\xa0\uac1c\ubc1c \uc18c\uac1c(Development Introduction)"),"\ub85c, \uc644\ubcbd\ud55c TouchGFX \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud544\uc694\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubc0f \ud558\ub4dc\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\ub97c \ube44\ub86f\ud574 \uc774\ub4e4\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud55c \ud65c\ub3d9 \ubc0f \ub3c4\uad6c\ub4e4\uc774 \uc18c\uac1c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc678\uc5d0\ub3c4 \uc0ac\uc804 \uc81c\uc791\ub41c \uad6c\uc131 \uc694\uc18c\ub97c \uc0ac\uc6a9\ud558\ub294 \ube60\ub978 \ud504\ub85c\ud1a0\ud0c0\uc774\ud551 \ubc29\ubc95\ub3c4 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",m({},{id:"touchgfx-designer-quick-start"}),"TouchGFX Designer Quick Start"),(0,r.kt)("h3",m({},{id:"application-template--ui-template"}),"TouchGFX \ubcf4\ub4dc \uc124\uc815 + \uc608\uc2dc \ubc0f \ub370\ubaa8"),(0,r.kt)("p",null,"TouchGFX\ub97c \ud14c\uc2a4\ud2b8\ud574 \ubcf4\uace0 \uc2f6\uc740 \ubd84\ub4e4\uc740 UI \ud504\ub85c\uc81d\ud2b8 \uc608\uc2dc\ub97c \ud65c\uc6a9\ud574\ubcf4\uc138\uc694. STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c \uc2e4\ud589\ud558\uba74 TouchGFX Designer\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"TBS(TouchGFX Board Setup) \ubc0f \uc608\uc2dc\ub97c \ud1b5\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0dd\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\uc758 \uc2dc\uc791 \ucc3d\uc758 \ub2e4\uc591\ud55c UI \uc608\uc2dc \uc911 \uc6d0\ud558\ub294 \uac83\uc744 \uc120\ud0dd\ud558\uc5ec \uc2dc\uc791\ud558\uc2ed\uc2dc\uc624. \uc774\ub97c STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc758 \uc5ec\ub7ec\uac00\uc9c0 \ubcf4\ub4dc\ubcc4 \ucf54\ub4dc\ub97c \ud1b5\ud569\ud558\uc5ec \uc784\ubca0\ub514\ub4dc \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc608\uc2dc\ub97c \uc989\uc2dc \uc2e4\ud589\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"STM32 \ud3c9\uac00 \ud0a4\ud2b8\uac00 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 PC\uc5d0\uc11c \uac04\ub2e8\ud558\uac8c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uac00\uc774\ub4dc\ub294 \ud29c\ud1a0\ub9ac\uc5bc\xa0\ucc55\ud130\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc124\uce58 \ubc0f \uc2e4\ud589\ud558\uc5ec \ubcf5\uc7a1\ud55c UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"online-applications"}),"Board Specific Demo"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\ub294 TouchGFX Board Setup\uc5d0 \uc608\uc2dc\uc640 \ub370\ubaa8\ub97c \ud558\ub098\uc529 \uacb0\ud569\ud558\ub294 \ubc29\uc2dd \uc678\ub85c, \ud2b9\uc815 STM32 \ud3c9\uac00 \ud0a4\ud2b8\ub97c \uc704\ud55c \ud2b9\ubcc4 \ub370\ubaa8\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\uc815 \ubcf4\ub4dc \ub370\ubaa8(Board Specific Demo)\uc758 \ub370\ubaa8 \uc139\uc158\uc744 \ud655\uc778\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"\ubcf4\ub4dc\ubcc4 \ub370\ubaa8\ub97c \uc774\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0dd\uc131"),(0,r.kt)("h2",m({},{id:"whats-next"}),"\ub2e4\uc74c \ub2e8\uacc4"),(0,r.kt)("p",null,"\uc774\uc81c \uc124\uba85\uc11c \uc804\uccb4\ub97c \uc0b4\ud3b4\ubcf4\uba74\uc11c \uc790\uc2e0\uc5d0\uac8c \ud544\uc694\ud55c \ucc55\ud130\ub4e4\uc744 \ud655\uc778\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc774\ub807\uac8c \uc804\uccb4 \uc124\uba85\uc11c\uc758 \uac1c\uc694\ub97c \ud655\uc778\ud558\uc5ec \uc790\uc138\ud55c \uc815\ubcf4\uc758 \uc704\uce58\ub97c \uc54c \uc218 \uc788\uc73c\uba70, TouchGFX \uc8fc\uc694 \uac1c\ub150\ub4e4\uc744 \uc219\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc8fc\uc694 \ucc55\ud130\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),"Basic Concepts"),": \uc774 \ucc55\ud130\ub294 \uc124\uba85\uc11c\uc758 \ub098\uba38\uc9c0 \ubd80\ubd84\ub4e4\uc5d0 \ub300\ud55c \ubc30\uacbd \uc9c0\uc2dd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ucc28\ud6c4\uc5d0 \ub808\ud37c\ub7f0\uc2a4\uac00 \ub418\ub294 \uc8fc\uc694 \uadf8\ub798\ud53d \uac1c\ub150\ub4e4\uc744 \ubaa8\ub450 \uc18c\uac1c\ud569\ub2c8\ub2e4. \ud604\uc7ac \uac16\ucd94\uace0 \uc788\ub294 \uc9c0\uc2dd\uacfc \uc55e\uc73c\ub85c \uc218\ud589\ud558\uac8c \ub420 TouchGFX \uac1c\ubc1c\uc5d0 \ub530\ub77c \uba87\uba87 \uc139\uc158\ub4e4\uc740 \uac74\ub108 \ub6f0\uace0 \ub098\uc911\uc5d0 \uc138\ubd80\uc801\uc778 \ub0b4\uc6a9\uc774 \uad81\uae08\ud560 \ub54c \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"../development/development-introduction"}),"Development"),": \ubcf8 \uc124\uba85\uc11c\uc758 \uba54\uc778 \ucc55\ud130\uc785\ub2c8\ub2e4. TouchGFX \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\ub97c \ube44\ub86f\ud574 \uc804\uccb4 \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c \uc8fc\uae30\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uc6cc\ud06c\ud50c\ub85c\uc640 \ub3c4\uad6c\ub4e4\uc774 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc6cc\ud06c\ud50c\ub85c\uc758 \uac01 \ub2e8\uacc4\ub294 \uc790\uccb4\uc801\uc778 \uc139\uc158\uc73c\ub85c \ubd84\ub958\ub418\uc5b4 \uc790\uc138\ud55c \uc124\uba85\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 TouchGFX \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \uae30\ub2a5\uacfc \uad6c\uc131 \uc694\uc18c\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \ud3ec\ud568\ud574 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uacfc UI \uac1c\ubc1c \ubc29\ubc95\uc744 \uc774\ud574\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}k.isMDXComponent=!0}}]);