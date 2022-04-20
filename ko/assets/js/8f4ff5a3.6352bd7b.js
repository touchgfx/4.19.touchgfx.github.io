"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9346],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=o},36209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return v}});var r=n(3905),a=n(44035),l=n(93054),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&p(e,n,t[n]);return e};const h={id:"07-flash-external-nonaddressable",title:"7. External flash in block mode",sidebar_label:"7. External flash in block mode"},f=void 0,b={unversionedId:"development/board-bring-up/how-to/07-flash-external-nonaddressable",id:"development/board-bring-up/how-to/07-flash-external-nonaddressable",title:"7. External flash in block mode",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/07-flash-external-nonaddressable.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/07-flash-external-nonaddressable",permalink:"/4.19/ko/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"07-flash-external-nonaddressable",title:"7. External flash in block mode",sidebar_label:"7. External flash in block mode"},sidebar:"docs",previous:{title:"6. External addressable flash",permalink:"/4.19/ko/docs/development/board-bring-up/how-to/06-flash-external-addressable"},next:{title:"8. Hardware acceleration",permalink:"/4.19/ko/docs/development/board-bring-up/how-to/08-hardware-acceleration"}},g={},v=[{value:"\uac1c\uc694",id:"motivation",level:2},{value:"\ubaa9\ud45c",id:"goal",level:2},{value:"\ud655\uc778",id:"verification",level:3},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",level:2},{value:"\uc2e4\ud589",id:"do",level:2},{value:"\ucf54\ub4dc",id:"code",level:3}],k={toc:v};function y(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),p),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"motivation"}),"\uac1c\uc694"),(0,r.kt)("p",null,"NAND \ud50c\ub798\uc2dc \uac19\uc774 \uba54\ubaa8\ub9ac \ub9e4\ud551\uc774 \ub418\uc9c0 \uc54a\uc740 \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 TouchGFX\uac00 \ub0b4\ubd80\uc5d0 \uc800\uc7a5\ub41c \uc790\uc0b0\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub4dc\ub77c\uc774\ubc84\ub97c \uac1c\ubc1c\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",m({parentName:"p"},{href:"../../scenarios/using-non-memory-mapped-flash"}),"\uc774\ubbf8\uc9c0")," \uc800\uc7a5\uc744 \uc704\ud574 \uba54\ubaa8\ub9ac \ub9e4\ud551\uc774 \ub418\uc9c0 \uc54a\uc740 \ud50c\ub798\uc2dc \uc0ac\uc6a9 \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(l.Z,{mdxType:"Note"},"\uc8fc\uc18c \uc9c0\uc815\uc774 \ubd88\uac00\ub2a5\ud55c \uc678\ubd80 \ud50c\ub798\uc2dc\uac00 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uacfc \uad00\ub828\uc774 \uc5c6\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",m({},{id:"goal"}),"\ubaa9\ud45c"),(0,r.kt)("p",null,"\uc774 \ub2e8\uacc4\uc758 \ubaa9\ud45c\ub294 \ub9e4\ud551\uc774 \ub418\uc9c0 \uc54a\uc740 \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\uc758 \ud55c \uc704\uce58\uc5d0\uc11c \ub2e4\uc218\uc758 \ubc14\uc774\ud2b8\ub97c \uc77d\uc5b4\uc628 \ud6c4 \uc774\ub97c \ubc30\uc5f4\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \ub4dc\ub77c\uc774\ubc84\ub97c \uc0dd\uc131\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"verification"}),"\ud655\uc778"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\ud50c\ub798\uc2dc\uc758 \ub0b4\uc6a9 \ud655\uc778"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\ud50c\ub798\uc2dc\uc5d0\uc11c \uc77d\uc5b4\uc628 \ub0b4\uc6a9\uc774 \uc62c\ubc14\ub978\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc131\ub2a5 \ud655\uc778"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc77d\uae30 \uc131\ub2a5\uc774 MCU \uad6c\uc131\uc744 \ub530\ub974\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",m({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud50c\ub798\uc2dc \uc815\ubcf4(\uc77c\ubc18\uc801\uc73c\ub85c \uc81c\uc870\uc0ac \ub370\uc774\ud130 \uc2dc\ud2b8\uc758 \uc815\ubcf4)"),(0,r.kt)("li",{parentName:"ul"},"MCU\uc640 \uc678\ubd80 \ud50c\ub798\uc2dc \uac04 \uc5f0\uacb0 \uc815\ubcf4"),(0,r.kt)("li",{parentName:"ul"},"\ud50c\ub798\uc2dc \uc18d\ub3c4")),(0,r.kt)("h2",m({},{id:"do"}),"\uc2e4\ud589"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c NAND \ud50c\ub798\uc2dc\ub294 MCU\uc758 FMC\ub97c \ud1b5\ud574 \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/nonmappedflash/cubemx-nand-fmc.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\ud50c\ub798\uc2dc\uc5d0 \uc5f0\uacb0\ub418\ub294 GPIO\ub97c \uad6c\uc131\ud574\uc57c \ud55c\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"A non-memory-mapped QSPI flash is configured in STM32CubeMX like a memory-mapped QSPI flash."),(0,r.kt)("h3",m({},{id:"code"}),"\ucf54\ub4dc"),(0,r.kt)("p",null,"\ud50c\ub798\uc2dc\uc758 \ud2b9\uc815 \uc8fc\uc18c\uc5d0\uc11c \ub2e4\uc218\uc758 \ubc14\uc774\ud2b8\ub97c \uc77d\uc5b4\ub4e4\uc774\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud569\ub2c8\ub2e4. \ub4dc\ub77c\uc774\ubc84\uc758 \uad6c\ud604\uc740 \ud50c\ub798\uc2dc \uce69\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucf54\ub4dc\uc758 \uc608\uc2dc\uac00 \uc544\ub798\uc5d0 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4. \ub4dc\ub77c\uc774\ubc84\uc758 \uad6c\ud604\uc740 \ud50c\ub798\uc2dc \uce69\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void readNonaddressableFlash(uint32_t from, uint8_t *into, uint32_t n)\n{\n  ...\n}\n\nuint8_t bytes[1000];\n\n//read external Flash\nreadNonaddressableFlash(0xab001212, bytes, 1000);\n")),(0,r.kt)("p",null,"This code will be used later to develop the TouchGFX abstraction layer."))}y.isMDXComponent=!0}}]);