"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9921],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,h=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return t?a.createElement(h,o(o({ref:n},m),{},{components:t})):a.createElement(h,o({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22425:function(e,n,t){var a=t(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}n.Z=r},44035:function(e,n,t){var a=t(67294),r=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return n?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:i,src:o})),a.createElement("p",null,e.children))}},29415:function(e,n,t){var a=t(67294),r=t(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}n.Z=o},88678:function(e,n,t){var a=t(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=r},6771:function(e,n,t){var a=t(67294);class r extends a.Component{render(){return a.createElement("p",null,a.createElement("div",{className:"videoWrapper"},a.createElement("video",{controls:!0},a.createElement("source",{src:this.props.url,type:"video/mp4"}))))}}n.Z=r},36600:function(e,n,t){t.r(n),t.d(n,{assets:function(){return C},contentTitle:function(){return k},default:function(){return x},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var a=t(3905),r=t(44035),i=t(29415),o=t(39130),c=t(22425),l=t(6771),p=Object.defineProperty,m=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&g(e,t,n[t]);if(u)for(var t of u(n))h.call(n,t)&&g(e,t,n[t]);return e};const v={id:"achieving-better-performance-with-cacheable-container",title:"\uce90\uc2dc(Cacheable) \ucee8\ud14c\uc774\ub108\ub97c \ud1b5\ud55c \uc131\ub2a5 \uac1c\uc120"},k=void 0,b={unversionedId:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",id:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",title:"\uce90\uc2dc(Cacheable) \ucee8\ud14c\uc774\ub108\ub97c \ud1b5\ud55c \uc131\ub2a5 \uac1c\uc120",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",permalink:"/4.19/ko/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",draft:!1,tags:[],version:"current",frontMatter:{id:"achieving-better-performance-with-cacheable-container",title:"\uce90\uc2dc(Cacheable) \ucee8\ud14c\uc774\ub108\ub97c \ud1b5\ud55c \uc131\ub2a5 \uac1c\uc120"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.19/ko/docs/category/scenarios-1"},next:{title:"\ub7f0\ud0c0\uc784\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub85c\ub4dc",permalink:"/4.19/ko/docs/development/ui-development/scenarios/loading-images-at-runtime"}},C={},y=[{value:"\uc131\ub2a5\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5",id:"performance-impact",level:2},{value:"\ud14c\uc2a4\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158",id:"test-application",level:2},{value:"\ubcf5\uc7a1\ud55c \ucee8\ud14c\uc774\ub108\ub97c \ub2e4\uc2dc \uadf8\ub9ac\uae30 \ud558\ub294 \uc131\ub2a5",id:"performance-of-redrawing-complex-containers",level:2},{value:"\uce90\uc2f1\uc744 \ud1b5\ud55c \uc131\ub2a5 \uac1c\uc120",id:"improving-performance-through-caching",level:2},{value:"\uacb0\ub860",id:"conclusion",level:2}],w={toc:y};function x(e){var n,t=e,{components:p}=t,g=((e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&h.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=f(f({},w),g),m(n,s({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc77c\ubd80 \uc560\ub2c8\uba54\uc774\uc158 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c RAM\uc744 \uc0ac\uc6a9\ud574 \uc7ac\uc0ac\uc6a9\uc774 \uac00\ub2a5\ud55c \uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud558\uc5ec \uc131\ub2a5\uc744 \uac1c\uc120\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158(Image, TextArea \ub4f1)\uc5d0\uc11c \ub4dc\ub798\uadf8\ub098 \uc560\ub2c8\uba54\uc774\uc158\uc744 \ud1b5\ud574 \uc704\uc82f \uc704\uce58\ub97c \uc870\uc815\ud560 \uacbd\uc6b0 TouchGFX\uac00 \ubaa8\ub4e0 \ud504\ub808\uc784\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \uc704\uce58\uc5d0\uc11c \ud574\ub2f9 \uc704\uc82f\uc744 \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud560 \ubfd0\ub9cc \uc544\ub2c8\ub77c, \uc870\uc815 \uc774\uc804\uc5d0 \ubc30\uacbd\uc5d0\uc11c \uc704\uc82f\uc73c\ub85c \uac00\ub824\uc84c\ub358 \ubd80\ubd84\uae4c\uc9c0 \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"Texture Mapper \uc704\uc82f\uacfc Shapes, \uadf8\ub9ac\uace0 \ud22c\uba85\ud558\uace0 \ud070 \uc774\ubbf8\uc9c0\uae4c\uc9c0 \uc774\ub7ec\ud55c \uc704\uc82f\ub4e4\uc740 \uacc4\uc0b0\uc774 \ubcf5\uc7a1\ud560 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uc5c6\uc774 \ub80c\ub354\ub9c1\ub418\uae30 \ub54c\ubb38\uc5d0 MCU\uc5d0\uc11c \ud6a8\uc728\uc801\uc73c\ub85c \ub80c\ub354\ub9c1\ud558\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \uacb0\uacfc\uc801\uc73c\ub85c \uc2a4\ud06c\ub9b0\uc744 \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud558\ub290\ub77c \uc2dc\uac04(\uc218 \ubc00\ub9ac\ucd08)\uc774 \uac78\ub9ac\uba70 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc131\ub2a5\uc5d0\ub3c4 \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 \ub2e4\uc2dc \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \ud558\uc9c0 \uc54a\uace0, \uce90\uc2dc\uc5b4\ube14 \ucee8\ud14c\uc774\ub108\ub97c \uc0ac\uc6a9\ud574 \uacc4\uc0b0\uc774 \ubcf5\uc7a1\ud55c \uc694\uc18c\uac00 \ud3ec\ud568\ub41c \uc560\ub2c8\uba54\uc774\uc158\uc744 \uac00\uc18d\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.  \uc774 \uae00\uc5d0\uc11c \uce21\uc815\uc740 STM32F429Discovery \ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc774\ub8e8\uc5b4\uc9c0\uc9c0\ub9cc \uce90\uc2dc \ucee8\ud14c\uc774\ub108 \uae30\ubc95\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ub2e4\ub978 \ud558\ub4dc\uc6e8\uc5b4 \ud50c\ub7ab\ud3fc\uc5d0\ub3c4 \uc801\uc6a9\ub429\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0 \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub97c \uc0dd\uc131\ud558\ub824\uba74 \uc0ac\uc6a9 \uac00\ub2a5\ud55c RAM\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\ub3d9\uc801 \ube44\ud2b8\ub9f5"),"\uc5d0 \uad00\ud55c \ub0b4\uc6a9\ub3c4 \uc77d\uc5b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,a.kt)("h2",f({},{id:"performance-impact"}),"\uc131\ub2a5\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5"),(0,a.kt)("p",null,"MCU\ub97c \uc0ac\uc6a9\ud574 \uacc4\uc0b0\uc774 \ubcf5\uc7a1\ud55c \uc704\uc82f\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud558\uba74 \uc131\ub2a5\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\ubbc0\ub85c \uc5ec\ub7ec \ub2e8\uacc4\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc560\ub2c8\uba54\uc774\uc158\uc740 \uac01 \ud504\ub808\uc784\ub9c8\ub2e4 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc774 \uc624\ub798 \uac78\ub824 \uc18d\ub3c4\uac00 \ub290\ub824\uc9c0\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uace0 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc2dc\uac04\uc801\uc73c\ub85c \ub354 \ube68\ub9ac \ub05d\ub098\ub3c4\ub85d \ud504\ub85c\uadf8\ub798\ubc0d\ud558\uac8c \ub418\uba74 \uac01 \ub2e8\uacc4\uc758 \ud06c\uae30\uac00 \ucee4\uc838\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc560\ub2c8\uba54\uc774\uc158\uc774 \ubd80\ub4dc\ub7fd\uac8c \ubcf4\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 STM32F429-DISCO \ubcf4\ub4dc(240x320)\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc804\uccb4 \ud654\uba74 \ucee8\ud14c\uc774\ub108\ub294 \uc218\uc9c1 \ubc29\ud5a5\uc73c\ub85c \uc6c0\uc9c1\uc774\ub294 \ubc18\uba74 \uc720\uc0ac\ud55c \ucee8\ud14c\uc774\ub108\ub294 \ud558\ub2e8\uc5d0\uc11c \uc6c0\uc9c1\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc544\ub798 \ub3d9\uc601\uc0c1\uc5d0\uc11c ",(0,a.kt)("a",f({parentName:"p"},{href:"../ui-components/buttons/toggle-button"}),"ToggleButton"),"\uc774 \uce90\uc2dc \ucee8\ud14c\uc774\ub108\ub97c \ud65c\uc131\ud654\uc640 \ube44\ud65c\uc131\ud654 \uc0ac\uc774\uc5d0\uc11c \uc804\ud658\ud569\ub2c8\ub2e4. \uc774\ub54c \ud655\uc5f0\ud55c \uc131\ub2a5 \ucc28\uc774\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(l.Z,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",mdxType:"Video"}),(0,a.kt)("p",null,"\uc6c0\uc9c1\uc774\ub294 \ub450 \ucee8\ud14c\uc774\ub108\ub294 \uac01\uac01 \ubc30\uacbd ",(0,a.kt)("a",f({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),", a ",(0,a.kt)("a",f({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"TextArea"),", and a ",(0,a.kt)("a",f({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"Texture Mapper"),"\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 Texture Mapper\ub294 \uc774\uc911 \uc120\ud615 \ub80c\ub354\ub9c1 \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud558\uace0 \uc804\uc5ed \uc54c\ud30c \uac12\uc73c\ub85c 174\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uad6c\uc131\ub418\uc5b4 \uc788\uc5b4 \uadf8\ub9ac\uae30\ub97c \uc704\ud574 \ub9ce\uc740 \uc791\uc5c5\ub7c9\uc744 \ud544\uc694\ub85c \ud569\ub2c8\ub2e4.  STM32F429-DISCO \ubcf4\ub4dc\uc5d0\uc11c \uc804\uccb4 \ud654\uba74\uc77c \ub54c \ub80c\ub354\ub9c1 \uc2dc\uac04\uc740 \uc57d 100ms\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",f({},{id:"test-application"}),"\ud14c\uc2a4\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158"),(0,a.kt)("p",null,"\uc11c\ub85c \uad00\ub828\uc774 \uc788\ub294 \ub450 \uc694\uc18c\ub97c \uc774\ub3d9\uc2dc\ud0a4\uae30 \uc704\ud574 \ub450 \uc694\uc18c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\ub77c\ub294 \uc0c1\uc704 \ucee8\ud14c\uc774\ub108\uc5d0 \ud3ec\ud568\ub429\ub2c8\ub2e4. \uc774\uc5d0 \ub530\ub77c \uc0c1\uc704 \ucee8\ud14c\uc774\ub108\uc758 \uc138\ub85c \uae38\uc774\ub294 \uac01 \ud558\uc704 \ucee8\ud14c\uc774\ub108\uc758 2\ubc30\uac00 \ub418\uc5b4 ",(0,a.kt)("inlineCode",{parentName:"p"},"240 x 640 (2*320)"),"\uc774 \ub429\ub2c8\ub2e4. TouchGFX Designer\uc5d0\uc11c \ucee8\ud14c\uc774\ub108\ub97c \uc704\uce58 \ubcc0\uacbd \uc560\ub2c8\uba54\uc774\ud130\ub85c \uc120\uc5b8\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud2f1(application ticks)\uc744 \uc218\uc2e0\ud558\uc5ec \uc131\ub2a5\uc744 \uce21\uc815\ud558\ub294 \ub3d9\uc548 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.webp",mdxType:"Figure"},"\uce90\uc2dc(Cacheable) \ucee8\ud14c\uc774\ub108 \ud14c\uc2a4\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\uc694"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\uc774\ub77c\ub294 \uc774\ub984\uc758 \uc0c1\ubd80 \ucee8\ud14c\uc774\ub108\ub294 x=0, y=0 \uc704\uce58\uc5d0 \ubc30\uce58\ub429\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\ub77c\ub294 \uc774\ub984\uc758 \ud558\ubd80 \ucee8\ud14c\uc774\ub108\ub294 \uc0c1\uc704 \ucee8\ud14c\uc774\ub108\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\uc5d0\uc11c container1 \ubc14\ub85c \uc544\ub798 x=0, y=320 \uc704\uce58\uc5d0 \ubc30\uce58\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\uc5d0 \ubc30\uce58\ub418\ubbc0\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud558\uba74 \ub450 \uc694\uc18c\uc758 \uc704\uce58\ub3c4 \ubc14\ub00c\uac8c \ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\uc758 \uc704\uce58\ub97c x=0, y=-320\uc73c\ub85c \ubcc0\uacbd\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\uc740 \ubcf4\uc774\uc9c0 \uc54a\uc9c0\ub9cc ",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\ub294 \uc644\uc804\ud788 \ubcf4\uc774\uac8c \ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub450 \uc0c1\ud0dc \uc0ac\uc774\uc5d0\uc11c\ub3c4 TouchGFX Designer\uc758 \uc0c1\ud638\uc791\uc6a9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uba74 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc544\ub798 \ucf54\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\uac00 \uc544\ub798\ub85c \ub0b4\ub824\uac04 \uacbd\uc6b0 \uc704\ub85c, \uadf8\ub9ac\uace0 \uc704\ub85c \uc62c\ub77c\uac04 \uacbd\uc6b0 \uc544\ub798\ub85c \uc704\uce58\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4. \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \ucf54\ub4dc\ub97c \ubdf0\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"handleClickEvent")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc5d0 \uc0bd\uc785\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc0ac\uc6a9\uc790\uac00 \ud654\uba74 \uc5b4\ub290 \uacf3\uc744(ToggleButton \uc544\ub798) \ud130\uce58\ud558\ub354\ub77c\ub3c4 \ucf54\ub4dc\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{9-12}","{9-12}":!0}),"void Screen1View::handleClickEvent(const ClickEvent& evt)\n{\n    //Forward event to base View (for the ToggleButton to work)\n    View::handleClickEvent(evt);\n    //If touch is released and y > 50 (below the ToggleButton), move masterContainer\n    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)\n    {\n        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;\n        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,\n                            20 /* ticks */,\n                            EasingEquations::cubicEaseInOut,\n                            EasingEquations::cubicEaseInOut);\n    }\n}\n")),(0,a.kt)("h2",f({},{id:"performance-of-redrawing-complex-containers"}),"\ubcf5\uc7a1\ud55c \ucee8\ud14c\uc774\ub108\ub97c \ub2e4\uc2dc \uadf8\ub9ac\uae30 \ud558\ub294 \uc131\ub2a5"),(0,a.kt)("p",null,"\uc55e\uc11c \uc5b8\uae09\ud588\ub4ef\uc774, MCU\uac00 \uac01 \uc560\ub2c8\uba54\uc774\uc158 \ub2e8\uacc4\ub9c8\ub2e4 \ubcf5\uc7a1\ud558\uace0 \uc2dc\uac04\ub3c4 \uc624\ub798 \uac78\ub9ac\ub294 Texture Mapper\ub97c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud55c\ub2e4\uba74 \ud55c \ud504\ub808\uc784\ub9c8\ub2e4 \uc18c\uc694\ub418\ub294 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc740 \uc57d 100ms\uac00 \ub429\ub2c8\ub2e4. \uacb0\uad6d \ucd08\ub2f9 10 \ud504\ub808\uc784(fps)\uc758 \uadf8\ub9ac\uae30 \ud574\uc57c \ud558\ub294 \uc148\uc785\ub2c8\ub2e4. \uc804\uccb4 \uc560\ub2c8\uba54\uc774\uc158\uc774 20\ud504\ub808\uc784\uc774\ubbc0\ub85c \uc57d 2\ucd08\uac00 \uac78\ub9bd\ub2c8\ub2e4."),(0,a.kt)("p",null,"STM32F429-DISCO \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c\ub294 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc774 GPIO G14\ub97c \ud1b5\ud574 \ub514\uc9c0\ud138 \uc2e0\ud638\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4. VSYNC \uc2e0\ud638\ub294 G13\uc744 \ud1b5\ud574 \uc81c\uacf5\ub429\ub2c8\ub2e4. GPIO \uad6c\uc131\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"GPIO.cpp")," \ud30c\uc77c\uc5d0\uc11c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\ub97c \uc704\ub85c \uc62c\ub838\uc744 \ub54c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 VSYNC\uc640 RENDER_TIME\uc744 \uce21\uc815\ud558\ub294 \uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.webp",mdxType:"Figure"},"Saleae Logic \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 vsync \ubc0f \ub80c\ub354\ub9c1 \uc2dc\uac04 \uce21\uc815"),(0,a.kt)("p",null,"\uccab \ubc88\uc9f8 \uc2e0\ud638\ub294 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc785\ub2c8\ub2e4(active low). \uc704\uce58 \ubcc0\uacbd \uc560\ub2c8\uba54\uc774\uc158\uc5d0\uc11c \uccab \ubc88\uc9f8 \ud504\ub808\uc784\uc758 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc774 99.29ms\uc778 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc544\ub798 \uc2e0\ud638\ub294 VSYNC\uc785\ub2c8\ub2e4. \uc774 \uc2e0\ud638\ub294 \ubaa8\ub4e0 \ud504\ub808\uc784\uc5d0\uc11c \ud53d\uc140\uc774 \ub514\uc2a4\ud50c\ub808\uc774\ub85c \ud074\ub7ed \uc544\uc6c3\ub420 \ub54c high\uc5d0\uc11c low\ub85c \uc804\ud658\ub429\ub2c8\ub2e4. \uc704 \uce21\uc815\uc5d0\uc11c \ub2e8\uc77c \ud504\ub808\uc784\uc758 \uadf8\ub9ac\uae30\ub97c \uc218\ud589 \ud558\ub824\uba74 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c 7 \ud504\ub808\uc784\ub9cc\ud07c\uc758 \uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \ud504\ub808\uc784 \ub80c\ub354\ub9c1\uc774 8\ubc88\uc9f8 VSYNC \uc2e0\ud638\uc5d0\uc11c \uc2dc\uc791\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub80c\ub354\ub9c1 \uacfc\uc815\uc5d0\uc11c (\ub2e4\ub978 \ud504\ub808\uc784\ubc84\ud37c\uc5d0\uc11c) \uc774\uc804\uc5d0 \uadf8\ub9ac\uae30\uac00 \uc644\ub8cc\ub41c \ud504\ub808\uc784\uc774 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ubc18\ubcf5\uc801\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,a.kt)("h2",f({},{id:"improving-performance-through-caching"}),"\uce90\uc2f1\uc744 \ud1b5\ud55c \uc131\ub2a5 \uac1c\uc120"),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108 \ub79c\ub354\ub9c1\uc744 \uba54\ubaa8\ub9ac\uc5d0 \uce90\uc2f1\ud558\uba74 \uc704\uc758 \uc704\uce58 \ubcc0\uacbd \uc560\ub2c8\uba54\uc774\uc158\uc758 \uc131\ub2a5\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 MCU\ub97c \uc0ac\uc6a9\ud574 \ubcf5\uc7a1\ud55c \uc704\uc82f\uc758 \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud560 \ud544\uc694 \uc5c6\uc774(DMA\ub97c \uc0ac\uc6a9\ud574) \ud574\ub2f9 \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\ub41c \ud53d\uc140\uc744 \ud504\ub808\uc784\ubc84\ud37c\ub85c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. MCU\ub9cc \uc0ac\uc6a9\ud574\ub3c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ucd08\ub2f9 60 \ud504\ub808\uc784\uc744 \uc5bb\uc744 \uc218 \uc788\uc9c0\ub9cc \ub354 \uc911\uc694\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc9c0 \uc54a\uace0 \ub3d9\uc77c\ud55c \uacc4\uc0b0\uc744 \ubc18\ubcf5\ud560 \uacbd\uc6b0 \uc5f0\uc0b0 \uc791\uc5c5\uc774 \ub9ce\uc544\uc838 \ubd80\ud558\uac00 \uc99d\uac00\ud558\uac8c \ub429\ub2c8\ub2e4(MCU \ubd80\ud558\uac00 100%\uc5d0 \uc774\ub97c \uc218 \uc788\uc74c)."),(0,a.kt)("p",null,'\uc774\uc81c\ub294 \ucee8\ud14c\uc774\ub108\ub97c \ub2e4\uc2dc \ub80c\ub354\ub9c1\ud560 \ud544\uc694 \uc5c6\uc774 \ucee8\ud14c\uc774\ub108\uc758 "in-memory-image"\ub97c \uc2a4\ud06c\ub9b0\uc5d0\uc11c \ub2e4\uc591\ud55c \uc704\uce58\uc5d0 \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,a.kt)("p",null,"\uba3c\uc800 TouchGFX Designer\uc5d0\uc11c \ub450 \ucee8\ud14c\uc774\ub108\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\uc758 ",(0,a.kt)("em",{parentName:"p"},"Cacheable")," \uc18d\uc131\uc744 \uc120\ud0dd\ud558\uc5ec \uce90\uc2f1\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.webp",mdxType:"Figure"},"Container \uc704\uc82f\uc758 Cacheable Container \uc635\uc158"),(0,a.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c RAM\uc5d0\uc11c \ub450 \ucee8\ud14c\uc774\ub108\ub97c \uce90\uc2f1\ud560 2\uac1c\uc758 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ube44\ud2b8\ub9f5 \uce90\uc2dc\uac00 \uc800\uc7a5\ub418\ub294 RAM\uc758 \uc8fc\uc18c\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\uc5d0\uc11c\ub294 \ud504\ub808\uc784\ubc84\ud37c \ubc14\ub85c \ub4a4\uc5d0 \uc788\ub294 SDRAM(STM32F429\uc5d0\uc11c 0xd0000000 \uc8fc\uc18c\ub85c \uc2dc\uc791)\uc5d0 \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"Windows \uc2dc\ubbac\ub808\uc774\ud130\uc758 \uacbd\uc6b0\uc5d0\ub294 \uce90\uc2dc\uac00 \uc804\uc5ed \ubcc0\uc218\ub85c \ud560\ub2f9\ub429\ub2c8\ub2e4."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n    uint32_t sdramBuffer[8*1024*1024/4];\n    uint16_t* sdram = (uint16_t*)sdramBuffer;\n#else\n    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);\n#endif\n")),(0,a.kt)("p",null,"\ube44\ud2b8\ub9f5 \uce90\uc2dc\ub97c \ucd08\uae30\ud654\ud55c \ud6c4 \uce90\uc2f1\uc5d0 \ud544\uc694\ud55c 2\uac1c\uc758 \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{2-2}","{2-2}":!0}),"//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb\nBitmap::setCache(sdram, 320*1024, 2); //320Kb cache\ndynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\ndynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\n")),(0,a.kt)("p",null,"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \ucee8\ud14c\uc774\ub108\uc5d0 \ud560\ub2f9\ud55c \ud6c4 \uce90\uc2f1 \ubaa8\ub4dc\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//Assign the bitmaps to the Cacheable Containers\ncontainer1.setCacheBitmap(dynamicBitmap1);\ncontainer2.setCacheBitmap(dynamicBitmap2);\n\n//Enable caching\ncontainer1.enableCachedMode(true);\ncontainer2.enableCachedMode(true);\n\n//Finally update the cached bitmaps\ncontainer1.updateCache();\ncontainer2.updateCache();\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Container::updateCache()"),"\ub97c \ud638\ucd9c\ud558\uba74 \ucee8\ud14c\uc774\ub108 2\uac1c\uac00 \uac01 \ube44\ud2b8\ub9f5\uc73c\ub85c \ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4. \uc774\uc81c \ucee8\ud14c\uc774\ub108\ub97c \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud560 \ub54c\ub9c8\ub2e4 \uc774 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \ub2e8, \uac1c\ubc1c\uc790\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc5d0\uc11c \ucc98\ub9ac\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\uc5d0\uc11c \uce90\uc2f1\uc744 \ud65c\uc131\ud654\ud55c \ud6c4 \uc131\ub2a5\uc744 \uce21\uc815\ud558\uba74 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc774 99ms\uc5d0\uc11c 5ms\ub85c 20\ubc30\uae4c\uc9c0 \uac1c\uc120\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd08\ub2f9 60 \ud504\ub808\uc784\uc73c\ub85c \uc190\uc27d\uac8c \ub80c\ub354\ub9c1\ud558\uc5ec \uc804\uccb4 \uc560\ub2c8\uba54\uc774\uc158\uc744 20 \ud504\ub808\uc784 \ub0b4\uc5d0 \uc644\ub8cc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.webp",mdxType:"Figure"},"Saleae Logic \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 vsync \ubc0f \ub80c\ub354\ub9c1 \uc2dc\uac04 \uce21\uc815"),(0,a.kt)("h2",f({},{id:"conclusion"}),"\uacb0\ub860"),(0,a.kt)("p",null,"\ud53c\uc0ac\uccb4 \uacc4\uc0b0\uc774 \ubcf5\uc7a1\ud558\uc5ec \uc560\ub2c8\uba54\uc774\uc158 \ub2e8\uacc4\ub9c8\ub2e4 \ubcc0\uacbd\uc774 \uc5b4\ub824\uc6b4 \uacbd\uc6b0\uc5d0 \uce90\uc2dc \ucee8\ud14c\uc774\ub108\ub97c DynamicBitmap\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec \uc560\ub2c8\uba54\uc774\uc158(\uc7a6\uc740 \uc704\uce58 \ubcc0\uacbd) \ucc98\ub9ac\ud558\uba74 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc744 \ud06c\uac8c \ub2e8\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uce90\uc2dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uc5d0\ub3c4(\uc2dc\uac04 \uc5c5\ub370\uc774\ud2b8 \uc2dc \uc2dc\uacc4\uc758 \uc22b\uc790\ud310 \ub4f1) \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc81c\uc5b4\ud558\ub294 \uc77c\uc815 \uc2dc\uc810\uc5d0 \uce90\uc2dc\uc758 \ub0b4\uc6a9\uc744 \ub2e4\uc2dc \uacc4\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\ub3d9\uc801 \ube44\ud2b8\ub9f5")),(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"loading-images-at-runtime",mdxType:"Link"},"\ub3d9\uc801 \ube44\ud2b8\ub9f5: \ub7f0\ud0c0\uc784 \uc2dc \uc774\ubbf8\uc9c0 \ub85c\ub4dc"))))}x.isMDXComponent=!0}}]);