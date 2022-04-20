"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6365],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,h=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},s),{},{components:r})):n.createElement(h,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},91238:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return y}});var n=r(3905),o=r(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&p(e,r,t[r]);return e};const m={id:"what-is-touchgfx",title:"What is TouchGFX?"},h=void 0,d={unversionedId:"introduction/what-is-touchgfx",id:"introduction/what-is-touchgfx",title:"What is TouchGFX?",description:"",source:"@site/docs/introduction/what-is-touchgfx.mdx",sourceDirName:"introduction",slug:"/introduction/what-is-touchgfx",permalink:"/4.19/docs/introduction/what-is-touchgfx",tags:[],version:"current",frontMatter:{id:"what-is-touchgfx",title:"What is TouchGFX?"},sidebar:"docs",previous:{title:"Welcome",permalink:"/4.19/docs/introduction/welcome"},next:{title:"Prerequisites",permalink:"/4.19/docs/introduction/prerequisites"}},g={},y=[],b={toc:y};function v(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),p),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX is delivered as one X-Cube package the ",(0,n.kt)("em",{parentName:"p"},"X-Cube-TouchGFX"),"."),(0,n.kt)("p",null,"With this you have all you need to do a full implementation of your GUI application for STM32 based hardware. TouchGFX consists of three main parts - two tools and one framework."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Designer:")," An easy-to-use GUI builder in TouchGFX that lets you create the visual appearance of your TouchGFX application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Generator:")," A STM32CubeMX plugin where the user can configure and generate a custom TouchGFX Abstraction Layer (AL) for their STM32-based hardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Engine:")," The TouchGFX C++ framework that drives the UI application. Handles screen updates, user events and timing. The advanced TouchGFX technology is optimized for STM32 microcontrollers, giving you maximum performance with minimum  CPU load and memory usage.")),(0,n.kt)(o.Z,{imageSource:"/img/introduction/what-is-touchgfx/touchgfx-components.png",noShadow:!0,mdxType:"Figure"}))}v.isMDXComponent=!0}}]);