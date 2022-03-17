"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9241],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,e.children))}},35096:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var a=n(11368),r=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},85103:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return g},toc:function(){return h},default:function(){return f}});var a=n(3905),r=n(44035),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&d(e,n,t[n]);return e};const m={id:"memory-usage",title:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9"},k=void 0,g={unversionedId:"basic-concepts/memory-usage",id:"basic-concepts/memory-usage",isDocsHomePage:!1,title:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9",description:"\uc11c\ub860",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/memory-usage.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/memory-usage",permalink:"/4.19/ko/docs/basic-concepts/memory-usage",tags:[],version:"current",frontMatter:{id:"memory-usage",title:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9"},sidebar:"docs",previous:{title:"\uc6b4\uc601 \uccb4\uc81c",permalink:"/4.19/ko/docs/basic-concepts/operating-system"},next:{title:"Development Introduction",permalink:"/4.19/ko/docs/development/development-introduction"}},h=[{value:"\uc11c\ub860",id:"introduction",children:[],level:2},{value:"\uc815\uc801 \uba54\ubaa8\ub9ac \ud560\ub2f9",id:"static-memory-allocation",children:[{value:"\uc2a4\ud06c\ub9b0 \ubc0f \uc704\uc82f",id:"screens-and-widgets",children:[],level:3},{value:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc",id:"application-code",children:[],level:3},{value:"\uc560\uc14b",id:"assets",children:[],level:3}],level:2},{value:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \ud655\uc778",id:"checking-memory-usage",children:[{value:"\ub0b4\ubd80 RAM",id:"internal-ram",children:[],level:3},{value:"\ub0b4\ubd80 \ud50c\ub798\uc2dc",id:"internal-flash",children:[],level:3},{value:"\uc678\uc7a5 \ud50c\ub798\uc2dc",id:"external-flash",children:[],level:3},{value:"\uc694\uc57d",id:"summary",children:[],level:3}],level:2},{value:"Demo 1",id:"demo-1",children:[{value:"\uc694\uc57d",id:"summary-1",children:[],level:3}],level:2}],b={toc:h};function f(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},b),d),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h2",s({},{id:"introduction"}),"\uc11c\ub860"),(0,a.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \ub530\ub77c \ub2e4\uc74c\uacfc \uac19\uc774 4\uac00\uc9c0 \uc720\ud615\uc758 \uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\uba54\ubaa8\ub9ac \uc720\ud615"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\uc6a9\ub3c4"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ub0b4\ubd80 RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ub0b4\ubd80 RAM\uc740 \ubaa8\ub4e0 \uc704\uc82f\uc758 \uc88c\ud45c\ub098 \uc0c9\uc0c1\uacfc \uac19\uc740 \uad6c\uc131 \ub370\uc774\ud130\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud604\uc7ac \uc2a4\ud06c\ub9b0\uc5d0\uc11c \uc77c\ubd80 \uac1d\uccb4\uac00 \uc5ec\uae30\uc5d0 \ud560\ub2f9\ub429\ub2c8\ub2e4.",(0,a.kt)("br",null),"\ub610\ud55c UI \uc791\uc5c5\uc758 \ub7f0\ud0c0\uc784 \uc2a4\ud0dd\uc744 \ud3ec\ud568\ud574 \uc6b4\uc601 \uccb4\uc81c \uba54\ubaa8\ub9ac \uc5ed\uc2dc \ub0b4\ubd80 RAM\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc774\ub098 \ub514\uc2a4\ud50c\ub808\uc774 \ub4dc\ub77c\uc774\ubc84\uc640 \uac19\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131\uc694\uc18c \ub370\uc774\ud130\ub3c4 \ub0b4\ubd80 RAM\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ub0b4\ubd80 \ud50c\ub798\uc2dc"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ub0b4\ubd80 \ud50c\ub798\uc2dc\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158, TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc0f \uae30\ud0c0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ud504\ub85c\uadf8\ub7a8 \ucf54\ub4dc\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ud504\ub808\uc784\ubc84\ud37c\ub97c \ube44\ub86f\ud55c \ube44\ud2b8\ub9f5 \uce90\uc2dc\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\uc678\uc7a5 \ud50c\ub798\uc2dc"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\uc678\uc7a5 \ud50c\ub798\uc2dc\ub294 \uc774\ubbf8\uc9c0, \uae00\uaf34 \ubc0f \ud14d\uc2a4\ud2b8\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")))),(0,a.kt)("h2",s({},{id:"static-memory-allocation"}),"\uc815\uc801 \uba54\ubaa8\ub9ac \ud560\ub2f9"),(0,a.kt)("p",null,"TouchGFX\ub294 \uc815\uc801 \uba54\ubaa8\ub9ac \ud560\ub2f9\ub9cc \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub294 \ubaa8\ub4e0 \uba54\ubaa8\ub9ac\uac00 \uc0ac\uc804\uc5d0 \ud560\ub2f9\ub41c\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub7f0\ud0c0\uc784 \uc2dc TouchGFX\uc5d0\uc11c \ud560\ub2f9\ud558\ub294 \uba54\ubaa8\ub9ac\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ucc98\uc74c\ubd80\ud130 \uba54\ubaa8\ub9ac \ud06c\uae30\uc5d0 \uc801\ud569\ud558\ub2e4\uba74 \uba54\ubaa8\ub9ac\uac00 \ubd80\uc871\ud574\uc9c8 \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",s({},{id:"screens-and-widgets"}),"\uc2a4\ud06c\ub9b0 \ubc0f \uc704\uc82f"),(0,a.kt)("p",null,"TouchGFX\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub294 \ub2e4\uc218\uc758 C++ \ud074\ub798\uc2a4\ub97c \uac1c\ubc1c\ud558\uc5ec \uc0dd\uc131\ub429\ub2c8\ub2e4. \ud074\ub798\uc2a4\ub294 \uc2a4\ud06c\ub9b0\uc744 \uc124\uacc4\ud560 \ub54c TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub429\ub2c8\ub2e4. For each screen designed in TouchGFX Designer you automatically get a number of classes (the ",(0,a.kt)("a",s({parentName:"p"},{href:"../development/ui-development/software-architecture/model-view-presenter-design-pattern"}),"MVP")," architecture). When you show a screen on the display objects of the classes is automatically allocated by TouchGFX in internal RAM."),(0,a.kt)("p",null,"\uc774\ud6c4 \uc2a4\ud06c\ub9b0\uc744 \uc804\ud658\ud558\uba74 \uc774\uc804 \uc2a4\ud06c\ub9b0\uc5d0 \ud560\ub2f9\ub418\uc5c8\ub358 \uac1d\uccb4\ub294 \ub354\ub294 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uace0 \uc0c8\ub85c\uc6b4 \uc2a4\ud06c\ub9b0\uc5d0 \ud560\ub2f9\ub418\ub294 \uac1d\uccb4\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc0c8\ub85c\uc6b4 \uac1d\uccb4\uac00 \ub0b4\ubd80 RAM\uc5d0\uc11c \uc774\uc804 \uac1d\uccb4\uac00 \ud560\ub2f9\ub418\uc5c8\ub358 \uacf5\uac04\uc5d0 \ud560\ub2f9\ub429\ub2c8\ub2e4(\uc774\uc804 \uac1d\uccb4\ub97c \ub36e\uc5b4\uc501\ub2c8\ub2e4). \ub0b4\ubd80 RAM\uc5d0\ub294 \ud55c \uc2dc\uc810\uc5d0 \ud55c \uc2a4\ud06c\ub9b0\uc758 \uac1d\uccb4\ub9cc \uc800\uc7a5\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"C++ \ucef4\ud30c\uc77c\ub7ec\ub294 \uc815\uc758\ub41c \ud074\ub798\uc2a4\ub97c \uae30\uc900\uc73c\ub85c \uac00\uc7a5 \ud070 \uc2a4\ud06c\ub9b0 \ud074\ub798\uc2a4\uc758 \ud06c\uae30\ub97c \uacc4\uc0b0\ud558\uc5ec \ud574\ub2f9 \ud074\ub798\uc2a4\uc5d0 \ud544\uc694\ud55c \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \ub0b4\ubd80 RAM\uc758 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc2a4\ud06c\ub9b0 \uc218\uac00 \uc544\ub2c8\ub77c \uac00\uc7a5 \ud070 \uc2a4\ud06c\ub9b0\uc758 \ud06c\uae30\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \uac1d\uccb4\ub97c \uc704\ud574 \ub530\ub85c \uc124\uc815\ub41c \uba54\ubaa8\ub9ac\ub97c FrontendHeap\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX"),(0,a.kt)("h3",s({},{id:"application-code"}),"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc"),(0,a.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub294 \uac1c\ubc1c\uc790\uac00 \uc9c1\uc811 \uc791\uc131\ud55c \ud504\ub85c\uadf8\ub7a8 \ucf54\ub4dc, TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc, TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ucf54\ub4dc, \uadf8\ub9ac\uace0 \uac1c\ubc1c\uc790\uac00 \uc0ac\uc6a9\ud558\ub294 \ub2e4\ub978 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubb3c\ub860 \ucf54\ub4dc\ub97c \ub9ce\uc774 \uc791\uc131\ud558\uace0, \uc2a4\ud06c\ub9b0\uc744 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ucd94\uac00\ud560\uc218\ub85d \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc758 \ud06c\uae30\ub3c4 \uc99d\uac00\ud558\uac8c \ub429\ub2c8\ub2e4. \ub610\ud55c \uae30\ub2a5\uc744 \ucc98\uc74c \uc0ac\uc6a9\ud558\uba74 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uac00\uc838\uc624\ub294 \ucf54\ub4dc\uac00 \ub9ce\uc544\uc9d1\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ubc84\ud2bc\uc744 \uc2a4\ud06c\ub9b0\uc5d0 \ucc98\uc74c\uc73c\ub85c \ucd94\uac00\ud558\uba74 TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ubc84\ud2bc \ucf54\ub4dc\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ucd94\uac00\ub418\uc5b4 \ud06c\uae30\uac00 \ucee4\uc9d1\ub2c8\ub2e4. The second time you add a Button to the same or another screen, no additional code is taken from the TouchGFX library, and the application only grows by the amount of code you write or TouchGFX Designer generates."),(0,a.kt)("h3",s({},{id:"assets"}),"\uc560\uc14b"),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0, \ud14d\uc2a4\ud2b8, \uae00\uaf34 \uac19\uc740 \uc560\uc14b(assets)\uc740 C++ \ud30c\uc77c\ub85c \ubcc0\ud658\ub418\uc5b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ub429\ub2c8\ub2e4. \uc560\uc14b \ub370\uc774\ud130\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc678\uc7a5 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub418\uc9c0\ub9cc \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc800\uc7a5 \uc704\uce58\ub294 \ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc81c\uc5b4\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0\ub97c \ucd94\uac00\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud06c\uae30\uac00 \uc774\ubbf8\uc9c0 \ud06c\uae30\uc5d0 \ube44\ub840\ud558\uc5ec \ucee4\uc9d1\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud14d\uc2a4\ud2b8\ub97c \ucd94\uac00\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud06c\uae30\uac00 \ud14d\uc2a4\ud2b8\uc5d0 \ud3ec\ud568\ub41c \ubb38\uc790\ub9c8\ub2e4 2\ubc14\uc774\ud2b8\uc529 \ucee4\uc9d1\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub3d9\uc77c\ud55c \ubb38\uc790\uc5f4\uc744 \ub450 \ubc88 \uc0ac\uc6a9\ud558\uba74 \ud55c \ubc88\ub9cc \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uae00\uaf34 \ud30c\uc77c\uc5d0\uc11c \uac00\uc838\uc624\ub294 \ubb38\uc790\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubb38\uc790\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub300\ubb38\uc790(A~Z)\ub9cc \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uae00\uaf34 \uc18c\ubb38\uc790(a~z)\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \uc774\ub7ec\ud55c \ubb38\uc790\uac00 \ud3ec\ud568\ub41c \ud14d\uc2a4\ud2b8\ub97c \ucd94\uac00\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uae00\uaf34 \ub370\uc774\ud130\ub3c4 \ud06c\uae30\uac00 \uc99d\uac00\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub418\ub294 \ubb38\uc790\uc758 \ud06c\uae30\ub294 \uc120\ud0dd\ud55c \uae00\uaf34 \ud06c\uae30\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \ub530\ub77c\uc11c \uae00\uaf34\uc774 \ucee4\uc9c0\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub3c4 \ucee4\uc9d1\ub2c8\ub2e4."),(0,a.kt)("h2",s({},{id:"checking-memory-usage"}),"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \ud655\uc778"),(0,a.kt)("p",null,"\ud2b9\uc815 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc740 \ub9c1\ucee4\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ub9f5 \ud30c\uc77c\uc744 \uac80\uc0ac\ud558\uba74 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc5d0\uc11c\ub294 IAR Embedded Workbench\uc5d0\uc11c \uc0dd\uc131\ub41c \ub9f5 \ud30c\uc77c\uc744 \uac80\uc0ac\ud569\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0 \ub2e4\ub978 \ucef4\ud30c\uc77c\ub7ec\uc5d0\uc11c\ub3c4 \ube44\uc2b7\ud55c \ub9f5 \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uba3c\uc800 TouchGFX Designer\uc5d0\uc11c STM32F746Discovery \ud3c9\uac00 \ud0a4\ud2b8\uc5d0 \uc0ac\uc6a9\ud560 \ube48 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/create-project-4.17.png",noShadow:"true",mdxType:"Figure"},"\ubc15\uc2a4\uc640 \ubc84\ud2bc\uc774 \ud3ec\ud568\ub41c STM32F746 \ud504\ub85c\uc81d\ud2b8"),(0,a.kt)("p",null,"IAR\uc5d0\uc11c \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub97c \uc5f4\uace0 IAR\uc774 .MAP \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub294 \uc18d\uc131\uc744 \uccb4\ud06c\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/enable-map-file.png",noShadow:"true",mdxType:"Figure"},"\ub9c1\ucee4 \ub9f5 \ud30c\uc77c \uc0dd\uc131"),(0,a.kt)("p",null,"IAR\uc5d0\uc11c \ucef4\ud30c\uc77c\uc744 \ub9c8\uce58\uba74 ",(0,a.kt)("em",{parentName:"p"},"EWARM/STM32F746G_DISCO/List")," \ud3f4\ub354\uc5d0\uc11c \ub9c1\ucee4 \ub9f5 \ud30c\uc77c\uc778 STM32F746G_DISCO.map\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"IAR \ub9c1\ucee4 \ub9f5 \ud30c\uc77c\uc5d0\ub294 \uc27d\uac8c \uc54c\uc544\ubcfc \uc218 \uc788\ub3c4\ub85d \uc694\uc57d\ub41c \ud14c\uc774\ube14\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"p"},"MODULE SUMMARY"),"\ub97c \uac80\uc0c9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"*******************************************************************************\n*** MODULE SUMMARY\n***\n\n    Module                                   ro code  ro data  rw data\n    ------                                   -------  -------  -------\ncommand line/config:\n    ------------------------------------------------------------------\n    Total:\n\nC:\\TouchGFXProjectsDocumentation\\STM32F746MemoryUsage\\EWARM\\STM32F746G_DISCO\\Obj: [1]\n    ApplicationFontProvider.o                              20\n    BitmapDatabase.o                              12       40\n    Blue_Buttons_Round_Edge_small.o                    40'800\n    Blue_Buttons_Round_Edge_small_pressed.o            40'800\n    Font_verdana_10_4bpp_0.o                               24\n    Font_verdana_20_4bpp_0.o                               72\n    Font_verdana_40_4bpp_0.o                              280\n    FrontendApplication.o                         46       60\n    FrontendApplicationBase.o                    706      816\n    GeneratedFont.o                               84       84\n    Kerning_verdana_10_4bpp.o                               4\n    Kerning_verdana_20_4bpp.o                               4\n    Kerning_verdana_40_4bpp.o                               4\n    Model.o                                       10\n    OSWrappers.o                                 156        1        9\n    STM32DMA.o                                   898      176\n    STM32TouchController.o                       162       24        4\n...\n    heap_4.o                                     444            32'792\n...\ntouchgfx_core.a: [7]\n    AbstractButton.o                             136\n    AbstractPartition.o                            8\n    Application.o                              2'218      290       28\n    Bitmap.o                                   1'064      604       36\n    Box.o                                        108      104\n    Button.o                                     276      308\n    ConstFont.o                                   62\n    Container.o                                  510      396\n    DMA.o                                        558      252\n    DisplayTransformation.o                      192\n    Drawable.o                                   418\n    FontManager.o                                 12                 4\n    Gestures.o                                   364       60\n    HAL.o                                      1'758      544       18\n    LCD24bpp.o                                 2'732    1'604       80\n    Screen.o                                   1'924      124\n    TouchCalibration.o                           252                76\n    TypedText.o                                                     14\n    ------------------------------------------------------------------\n    Total:                                    12'728    4'286      256\n\n    Gaps                                                    4        3\n    Linker created                                         36    2'560\n----------------------------------------------------------------------\n    Grand Total:                              38'676   88'973   42'731\n")),(0,a.kt)("p",null,"\uc704 \ud14c\uc774\ube14\uc5d0\ub294 3\uac1c\uc758 \uc22b\uc790 \uc5f4\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"p"},"ro code"),"\uc640 ",(0,a.kt)("em",{parentName:"p"},"ro data"),"\ub294 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c, \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ",(0,a.kt)("em",{parentName:"p"},"rw data"),"\ub294 \uc0c1\uc218\uac00 \uc544\ub2cc \uc77d\uae30-\uc4f0\uae30 \ubcc0\uc218\uc774\uba70 RAM\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud14c\uc774\ube14\uc758 \ud589\uc740 7\uac1c\uc758 \ube14\ub85d\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \ube14\ub85d\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0ac\uc6a9\ub418\ub294 .cpp \ud30c\uc77c\ub4e4\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \ub2e4\ub984 \ube14\ub85d 6\uac1c\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac(.a \ud30c\uc77c)\ub4e4\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc5d0\ub294 TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,'TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac("touchgfx_core.a: ',"[7]","\u201d \uc139\uc158)\ub97c \ubcf4\uba74 12,728\ubc14\uc774\ud2b8\uc758 \ucf54\ub4dc\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ucd94\uac00\ub41c \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uadf8 \uc678 4,286\ubc14\uc774\ud2b8\uc758 \uc0c1\uc218 \ub370\uc774\ud130 \ud3ec\ud568)."),(0,a.kt)("h3",s({},{id:"internal-ram"}),"\ub0b4\ubd80 RAM"),(0,a.kt)("p",null,"\uc804\uccb4 \ub0b4\ubd80 RAM \uc0ac\uc6a9\ub7c9\uc744 \uc54c\uace0 \uc2f6\ub2e4\uba74 Module Summary \ud14c\uc774\ube14 \ud558\ub2e8\uc5d0 \uc788\ub294 ",(0,a.kt)("em",{parentName:"p"},"Grand Total")," \ud589\uc744 \ud655\uc778\ud558\uc2ed\uc2dc\uc624. \uc138 \ubc88\uc7ac \uc5f4\uc774 \ub0b4\ubd80 RAM\uc785\ub2c8\ub2e4. \uc704\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \ub0b4\ubd80 RAM \uc0ac\uc6a9\ub7c9\uc774 42,731\ubc14\uc774\ud2b8\uc778 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ucd1d \uc0ac\uc6a9\ub7c9\uc744 \ubcf4\uba74 TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac ","[7]","\uc5d0\uc11c 256\ubc14\uc774\ud2b8\uac00 \uc0ac\uc6a9\ub41c \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. heap_4.o\uc5d0\uc11c\ub294 32,792\ubc14\uc774\ud2b8\uac00 \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 \uc6a9\ub7c9\uc740 FREERTOS\ub97c \uc704\ud574 \uc608\uc57d\ub41c \ub3d9\uc801 \uba54\ubaa8\ub9ac \ud799\uc785\ub2c8\ub2e4. 32Kb\ub294 \uae30\ubcf8\uac12\uc77c \ubfd0\uc774\uba70, \ud799 \ud06c\uae30\ub294 STM32CubeMX\uc5d0\uc11c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c TouchGFX \ud504\ub85c\uadf8\ub7a8\uc740 \uc774 \ud799\uc5d0\uc11c \uc77c\ubd80 Kb\ub9cc \uc0ac\uc6a9\ud558\uace0, \uc8fc\ub85c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uc791\uc5c5\uc5d0 \uc2a4\ud0dd\uc744 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"FrontendHeap\uc744 \uac80\uc0c9\ud558\uba74 \uc2a4\ud06c\ub9b0 \uac1d\uccb4\uc758 \ud06c\uae30\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"FrontendHeap::getInstance()::instance\n                        0x2000'95d0   0x240  Data  Gb  TouchGFXConfiguration.o [1]\n")),(0,a.kt)("p",null,"\uc704\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ud544\uc694\ud55c \uac1d\uccb4\uac00 \ucc28\uc9c0\ud558\ub294 \uc6a9\ub7c9\uc740 0x240\ubc14\uc774\ud2b8, \uc989 576\ubc14\uc774\ud2b8\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",s({},{id:"internal-flash"}),"\ub0b4\ubd80 \ud50c\ub798\uc2dc"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Grand Total")," \ud589\uc744 \ubcf4\uba74 \uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c 38.676\ubc14\uc774\ud2b8 \ucf54\ub4dc + 88,973\ubc14\uc774\ud2b8 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud55c\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc77c\ubd80\ub9cc \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. 2\uac1c \uc774\uc0c1\uc758 \ubc84\ud2bc \uc774\ubbf8\uc9c0\uac00 \uc678\uc7a5 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub0b4\ubd80 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub418\ub294 \ucf54\ub4dc\uc640 \ub370\uc774\ud130\uc758 \ud06c\uae30\ub97c \uc54c\uace0 \uc2f6\ub2e4\uba74 \uba3c\uc800 ",(0,a.kt)("em",{parentName:"p"},"PLACEMENT SUMMARY"),"(\uc77c\ubd80 \uc815\ubcf4 \uc0ad\uc81c\ub428)\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'*******************************************************************************\n*** PLACEMENT SUMMARY\n***\n\n"A0":  place at address 0x800\'0000 { ro section .intvec };\n"P1":  place in [from 0x800\'0000 to 0x80f\'ffff] { ro };\n"P2":  place in [from 0x2000\'0000 to 0x2004\'ffff] { rw };\n"P3":  place in [from 0x9000\'0000 to 0x90ff\'ffff] {\n          section ExtFlashSection, section FontFlashSection,\n          section TextFlashSection };\n')),(0,a.kt)("p",null,'\ub0b4\ubd80 \ud50c\ub798\uc2dc\ub294 \uc8fc\uc18c\uac00 0x08000000\uc73c\ub85c \uc2dc\uc791\ub429\ub2c8\ub2e4. \uc704\uc5d0\uc11c\ub294 \ub450 \uc601\uc5ed\uc778 "A0"\uacfc "P1"\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4.'),(0,a.kt)("p",null,"\ub9f5 \ud30c\uc77c\uc744 \uc880 \ub354 \uc790\uc138\ud788 \ubcf4\uba74 \ub450 \uc601\uc5ed\uc5d0 \uc800\uc7a5\ub41c \ub0b4\uc6a9\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,15-15}","{5-5,15-15}":!0}),"  Section                Kind         Address      Size  Object\n  -------                ----         -------      ----  ------\n\"A0\":                                             0x1c8\n  .intvec                ro code   0x800'0000     0x1c8  startup_stm32f746xx.o [1]\n                                 - 0x800'01c8     0x1c8\n\n\"P1\":                                             0xb05d\n  .text                   ro code   0x800'01c8     0x9b8  main.o [1]\n  .text                   ro code   0x800'0b80      0x14  memset.o [5]\n...\n  .text                   ro code   0x800'b17a       0x2  AbstractButton.o [7]\n  .rodata                 const     0x800'b17c       0x1  unwind_debug.o [6]\n  .rodata                 const     0x800'b17d       0x0  zero_init3.o [5]\n  .rodata                 const     0x800'b17d       0x0  lz77_init_single.o [5]\n  Initializer bytes       const     0x800'b17d      0xa8  <for P2-1>\n                                  - 0x800'b225    0xb05d\n")),(0,a.kt)("p",null,'"A0\u201d\uc758 \uc0ac\uc6a9\ub7c9\uc740 0x1c8\ubc14\uc774\ud2b8, \uc989 456\ubc14\uc774\ud2b8\uc774\uace0, \u201cP1\u201d\uc758 \uc0ac\uc6a9\ub7c9\uc740 0xb05d\ubc14\uc774\ud2b8, \uc989 45,149\ubc14\uc774\ud2b8\uc785\ub2c8\ub2e4. \uc774\uc5d0 \ub530\ub77c \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc758 \ucd1d \uc0ac\uc6a9\ub7c9\uc740 45,605\ubc14\uc774\ud2b8\uac00 \ub429\ub2c8\ub2e4.'),(0,a.kt)("h3",s({},{id:"external-flash"}),"\uc678\uc7a5 \ud50c\ub798\uc2dc"),(0,a.kt)("p",null,"\uc678\uc7a5 \ud50c\ub798\uc2dc\ub294 \u201cP3\u201d \uc601\uc5ed\uc785\ub2c8\ub2e4(\uc8fc\uc18c\uac00 0x90000000\uc73c\ub85c \uc2dc\uc791). \uc774 \uc601\uc5ed\uc758 \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{14-14}","{14-14}":!0}),"\"P3\":                                          0x1'4076\n  ExtFlashSection        const    0x9000'0000    0x9f60  Blue_Buttons_Round_Edge_small.o [1]\n  ExtFlashSection        const    0x9000'9f60    0x9f60  Blue_Buttons_Round_Edge_small_pressed.o [1]\n  FontFlashSection       const    0x9001'3ec0     0x118  Font_verdana_40_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'3fd8      0x48  Font_verdana_20_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4020      0x18  Font_verdana_10_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4038      0x10  Table_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'4048      0x10  Table_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4058      0x10  Table_verdana_40_4bpp.o [1]\n  FontFlashSection       const    0x9001'4068       0x4  Kerning_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'406c       0x4  Kerning_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4070       0x4  Kerning_verdana_40_4bpp.o [1]\n  TextFlashSection       const    0x9001'4074       0x2  Texts.o [1]\n                                - 0x9001'4076  0x1'4076\n")),(0,a.kt)("p",null,"\uc704\uc5d0\uc11c \uc678\uc7a5 \ud50c\ub798\uc2dc\uc758 \ucd1d \uc0ac\uc6a9\ub7c9\uc740 0x14076\ubc14\uc774\ud2b8, \uc989 82,038\ubc14\uc774\ud2b8\uc785\ub2c8\ub2e4. \uc774 \uc6a9\ub7c9\uc758 \ub300\ubd80\ubd84\uc774 2\uac1c\uc758 \ubc84\ud2bc \uc774\ubbf8\uc9c0\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4(0x9f60\ubc14\uc774\ud2b8\uc758 2\ubc30 = 40,800\ubc14\uc774\ud2b8). \ub098\uba38\uc9c0 \ub370\uc774\ud130\ub294 \uae00\uaf34 3\uac1c\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 \uc608\uc2dc\uc5d0\uc11c\ub294 \ud14d\uc2a4\ud2b8 \uc5c6\uc774 \u2018?\u2019 \ubb38\uc790\ub9cc \ud3ec\ud568\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uae00\uaf34\uc774 \uc0ac\uc6a9\ud558\ub294 \uacf5\uac04\uc774 \ub9ce\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",s({},{id:"summary"}),"\uc694\uc57d"),(0,a.kt)("p",null,"\uc678\ubd80 RAM\uc5d0 \uc800\uc7a5\ub418\ub294 \ub370\uc774\ud130\ub294 \ud504\ub808\uc784\ubc84\ud37c \ubc16\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubcc0\uc218\ub85c \uc815\uc758\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ud574\uc0c1\ub3c4\ub294 24\ube44\ud2b8\uc5d0\uc11c 480x272 \ud53d\uc140\uc785\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\ub294 2\uac1c\uc774\uace0, \ucd1d \uc0ac\uc6a9\ub7c9\uc740 480 ","*"," 272 ","*"," 3 * 2, \uc989 786,360\ubc14\uc774\ud2b8\uac00 \ub429\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\uba54\ubaa8\ub9ac \uc720\ud615"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\uc6a9\ub3c4"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ub0b4\ubd80 RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"42,731\ubc14\uc774\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX \uc2a4\ud06c\ub9b0 \uac1d\uccb4"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"576\ubc14\uc774\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ub0b4\ubd80 \ud50c\ub798\uc2dc"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"45,605\ubc14\uc774\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX \ud504\ub808\uc784\uc6cc\ud06c"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"12.728\ubc14\uc774\ud2b8 \ucf54\ub4dc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"786,360\ubc14\uc774\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\uc678\uc7a5 \ud50c\ub798\uc2dc"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"82,028\ubc14\uc774\ud2b8")))),(0,a.kt)("h2",s({},{id:"demo-1"}),"Demo 1"),(0,a.kt)("p",null,"\ub610 \ub2e4\ub978 \uc608\ub85c TouchGFX Demo1\uc758 \uc218\uce58\uac00 \uc788\ub294\ub370, \uc774\ub294 TouchGFX Designer\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 5\uac1c\uc758 \uc2a4\ud06c\ub9b0\uc744 \ube44\ub86f\ud574 100\uac1c \uc774\uc0c1\uc758 \uc774\ubbf8\uc9c0\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/demo1.png",noShadow:"true",mdxType:"Figure"},"STM32F746 Demo 1"),(0,a.kt)("h3",s({},{id:"summary-1"}),"\uc694\uc57d"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\uba54\ubaa8\ub9ac \uc720\ud615"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\uc6a9\ub3c4"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ub0b4\ubd80 RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"51,387\ubc14\uc774\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX \uc2a4\ud06c\ub9b0 \uac1d\uccb4"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"10,772\ubc14\uc774\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ub0b4\ubd80 \ud50c\ub798\uc2dc"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"187,768\ubc14\uc774\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX \ud504\ub808\uc784\uc6cc\ud06c \ucf54\ub4dc"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"85,174\ubc14\uc774\ud2b8 \ucf54\ub4dc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"786,360\ubc14\uc774\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\uc678\uc7a5 \ud50c\ub798\uc2dc"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"5,281,812\ubc14\uc774\ud2b8")))))}f.isMDXComponent=!0}}]);