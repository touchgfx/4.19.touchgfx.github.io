"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[606],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},39487:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.width,n=e.height,o=e.points||[],l=(0,i.Z)(e.imageSource);return r.createElement("div",{style:{position:"relative"}},r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:t,height:n,src:l})),o.map((function(e,t){return r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},r.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},r.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),r.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),r.createElement("p",null,e.children)))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},39130:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(67294),i=n(73727),o=n(11368),l=n(35096),a=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),s=n(67023),p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&v(e,n,t[n]);return e};var x=function(e){var t,n=e,{isNavLink:p,to:v,href:x,activeClassName:y,isActive:T,"data-noBrokenLinkCheck":b,autoAddBaseUrl:E=!0}=n,w=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:S}}=(0,o.Z)(),{withBaseUrl:F}=(0,c.C)(),P=(0,r.useContext)(u),j=v||x,X=(0,l.Z)(j),G=null==j?void 0:j.replace("pathname://","");let M=void 0!==G?(Z=G,E&&(e=>e.startsWith("/"))(Z)?F(Z):Z):void 0;var Z;M&&X&&(M=(0,s.applyTrailingSlash)(M,{trailingSlash:O,baseUrl:S}));const D=(0,r.useRef)(!1),C=p?i.OL:i.rU,I=a.Z.canUseIntersectionObserver,W=(0,r.useRef)();(0,r.useEffect)((()=>(!I&&X&&null!=M&&window.docusaurus.prefetch(M),()=>{I&&W.current&&W.current.disconnect()})),[W,M,I,X]);const N=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,U=!M||!X||N;return M&&X&&!N&&!b&&P.collectLink(M),U?r.createElement("a",k(k({href:M},j&&!X&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(C,k((_=k({},w),m(_,d({onMouseEnter:()=>{D.current||null==M||(window.docusaurus.preload(M),D.current=!0)},innerRef:e=>{var t,n;I&&e&&X&&(t=e,n=()=>{null!=M&&window.docusaurus.prefetch(M)},W.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(W.current.unobserve(t),W.current.disconnect(),n())}))})),W.current.observe(t))},to:M||""}))),p&&{isActive:T,activeClassName:y}));var _}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),o="/"===i||i===r?i:(l=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(i,o)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},84167:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return k},metadata:function(){return x},toc:function(){return y},default:function(){return b}});var r=n(3905),i=n(44035),o=n(39487),l=n(82985),a=n(93054),u=n(39130),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&g(e,n,t[n]);return e};const v={id:"tutorial-01",title:"\ud29c\ud1a0\ub9ac\uc5bc 1: Example \uccb4\ud5d8\ud558\uae30"},k=void 0,x={unversionedId:"tutorials/tutorial-01",id:"tutorials/tutorial-01",isDocsHomePage:!1,title:"\ud29c\ud1a0\ub9ac\uc5bc 1: Example \uccb4\ud5d8\ud558\uae30",description:"\ud29c\ud1a0\ub9ac\uc5bc\ub97c \ub530\ub77c\ud558\uba74\uc11c TouchGFX\uc758 \uae30\ubcf8 \uc815\ubcf4\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc138\uc694. TouchGFX\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uacfc TouchGFX \uc2dc\ubbac\ub808\uc774\ud130\uc640 STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c \uc81c\uacf5\ub41c Example\uc744 \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/tutorial-01.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-01",permalink:"/4.19/ko/docs/tutorials/tutorial-01",tags:[],version:"current",frontMatter:{id:"tutorial-01",title:"\ud29c\ud1a0\ub9ac\uc5bc 1: Example \uccb4\ud5d8\ud558\uae30"},sidebar:"docs",previous:{title:"\ucfe0\ud0a4 \uc815\ucc45",permalink:"/4.19/ko/docs/miscellaneous/cookie-policy"},next:{title:"\ud29c\ud1a0\ub9ac\uc5bc 2: \uc790\uc2e0\ub9cc\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0dd\uc131\ud558\uae30",permalink:"/4.19/ko/docs/tutorials/tutorial-02"}},y=[{value:"\uc2dc\uc791\ud558\uae30",id:"getting-started",children:[],level:2},{value:"TouchGFX \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud574 Example \uc2e4\ud589\ud558\uae30",id:"running-an-example-using-touchgfx-simulator",children:[{value:"\ud14c\ub9c8 \uc120\ud0dd\ud558\uae30",id:"selecting-theme",children:[],level:3},{value:"UI \ud15c\ud50c\ub9bf \uc120\ud0dd\ud558\uae30",id:"selecting-a-ui-template",children:[],level:3},{value:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",id:"creating-a-project",children:[],level:3},{value:"TouchGFX \uc2dc\ubbac\ub808\uc774\ud130 \uc2e4\ud589\ud558\uae30",id:"running-touchgfx-simulator",children:[],level:3}],level:2},{value:"STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c Example \uc2e4\ud589\ud558\uae30",id:"running-an-example-on-an-stm32-evaluation-kit",children:[],level:2}],T={toc:y};function b(e){var t,n=e,{components:c}=n,g=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},T),g),s(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc\ub97c \ub530\ub77c\ud558\uba74\uc11c TouchGFX\uc758 \uae30\ubcf8 \uc815\ubcf4\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc138\uc694. TouchGFX\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uacfc TouchGFX \uc2dc\ubbac\ub808\uc774\ud130\uc640 STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c \uc81c\uacf5\ub41c Example\uc744 \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",f({},{id:"getting-started"}),"\uc2dc\uc791\ud558\uae30"),(0,r.kt)("p",null,"\uba3c\uc800 TouchGFX Designer\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. TouchGFX\uc758 \ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc124\uce58 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",f({parentName:"p"},{href:"../introduction/installation"}),"\uc5ec\uae30"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",f({},{id:"running-an-example-using-touchgfx-simulator"}),"TouchGFX \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud574 Example \uc2e4\ud589\ud558\uae30"),(0,r.kt)("p",null,"TouchGFX\uc5d0\ub294 TouchGFX Designer\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 UI Example\uc774 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c Example\ub4e4\uc740 \ubaa8\ub450 \ud2b9\uc815 TouchGFX \uc8fc\uc81c \ub610\ub294 \uc704\uc82f\uc744 \uc911\uc2ec\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud2b9\uc815 TouchGFX \uc8fc\uc81c\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",f({},{id:"selecting-theme"}),"\ud14c\ub9c8 \uc120\ud0dd\ud558\uae30"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\ub294 \ub77c\uc774\ud2b8\uc640 \ub2e4\ud06c, \ub450 \uac00\uc9c0 \uc0c9\uc0c1 \ud14c\ub9c8\uac00 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX Designer\ub97c \ucc98\uc74c \uc2dc\uc791\ud558\uba74 \ud14c\ub9c8\ub97c \uc120\ud0dd\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ud14c\ub9c8\ub294 \ub098\uc911\uc5d0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{points:[[270,172]],imageSource:"/img/tutorials/tutorial-01/select-theme.png",mdxType:"FigureWithPoints"},"\ud14c\ub9c8 \uc120\ud0dd\ud558\uae30"),(0,r.kt)("p",null,'\uc6d0\ud558\ub294 \ud14c\ub9c8\ub97c \uc120\ud0dd\ud558\uace0 "OK"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4(1). \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ub77c\uc774\ud2b8 \ud14c\ub9c8\ub97c \uc0ac\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4.'),(0,r.kt)("h3",f({},{id:"selecting-a-ui-template"}),"UI \ud15c\ud50c\ub9bf \uc120\ud0dd\ud558\uae30"),(0,r.kt)("p",null,"Example\uc740 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \ucd9c\ubc1c\uc810\uc73c\ub85c, \ud639\uc740 \ucc38\uc870\uc6a9\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Example\uc740 TouchGFX \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub294 PC\uc5d0\uc11c, STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c, \ud639\uc740 \ub9de\ucda4\ud615 STM32 \uae30\ubc18 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c\ub3c4 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Example\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\ub824\uba74 \uc0c1\ub2e8 \uc67c\ucabd \ubaa8\ud241\uc774\uc5d0 \uc788\ub294 "Examples" \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.(1)')),(0,r.kt)(o.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.png",mdxType:"FigureWithPoints"},"Example \uc5f4\uae30"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0 \ucc3d\uc774 \uc5f4\ub9ac\uba74\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 UI Example\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{points:[[110,50]],imageSource:"/img/tutorials/tutorial-01/all-examples.png",mdxType:"FigureWithPoints"},"Example \uc120\ud0dd\ud558\uae30"),(0,r.kt)("p",null,'"Animated Image Example"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4(1).'),(0,r.kt)(o.Z,{points:[[420,200]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.png",mdxType:"FigureWithPoints"},"Animated Image Example\uc774 \uc120\ud0dd\ub41c \ubaa8\uc2b5"),(0,r.kt)("h3",f({},{id:"creating-a-project"}),"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,r.kt)("p",null,'TouchGFX Designer\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \uc900\ube44\ub97c \ub9c8\ucce4\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc624\ub978\ucabd\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\uc5d0 "MyAnimatedImageExample"\uc774\ub77c\ub294 \uc774\ub984\uc744 \uc9c0\uc815\ud588\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud504\ub85c\uc81d\ud2b8\ub97c \uc800\uc7a5\ud560 \ud3f4\ub354\ub97c \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4(1).'),(0,r.kt)("p",null,'"Create"\ub97c \ud074\ub9ad\ud574\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uadf8\ub7ec\uba74 TouchGFX Designer\uc5d0\uc11c Example\uc744 \uae30\ubc18\uc73c\ub85c \uc644\uc804\ud55c \ud504\ub85c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131 \ud504\ub85c\uc138\uc2a4\ub294 \ub2e4\uc6b4\ub85c\ub4dc \uc18d\ub3c4\uc5d0 \ub530\ub77c \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc774 \ub2e4\ub985\ub2c8\ub2e4.'),(0,r.kt)("h3",f({},{id:"running-touchgfx-simulator"}),"TouchGFX \uc2dc\ubbac\ub808\uc774\ud130 \uc2e4\ud589\ud558\uae30"),(0,r.kt)("p",null,'\uc774\uc81c TouchGFX Designer\uac00 \uacb0\ud569\ub41c \ud504\ub85c\uc81d\ud2b8\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4. Windows \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2e4\ud589\ud558\ub824\uba74 \ud558\ub2e8 \uc624\ub978\ucabd\uc5d0 \uc788\ub294 "Run Simulator" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uac70\ub098(1), \ud639\uc740 ',(0,r.kt)(l.Z,{mdxType:"Shortcut"},"\ud0a4\ubcf4\ub4dc\uc5d0\uc11c")," F5\ub97c \ub204\ub985\ub2c8\ub2e4."),(0,r.kt)(o.Z,{points:[[463,245]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-4-17.png",mdxType:"FigureWithPoints"},"\ud504\ub85c\uc81d\ud2b8 \uc900\ube44 \uc644\ub8cc"),(0,r.kt)("p",null,'\uc774\uc81c TouchGFX \uc2dc\ubbac\ub808\uc774\ud130\uc5d0 \uc815\uc2dd Windows \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc81c\ubaa9 \ud45c\uc2dc\uc904\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. "Start" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec Example\uacfc \uc0c1\ud638\uc791\uc6a9\ud569\ub2c8\ub2e4.'),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.png",mdxType:"Figure"},"TouchGFX \uc2dc\ubbac\ub808\uc774\ud130"),(0,r.kt)("p",null,"\uc790\uc2b5\uc11c\ub97c \uc9c4\ud589\ud558\uae30 \uc804\uc5d0 \uc6d0\ud55c\ub2e4\uba74 \uba87 \uac00\uc9c0 Example\uc744 \ub354 \uccb4\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. File->New\ub97c \ud074\ub9ad\ud55c \ud6c4 \uc774\uc804\uacfc \uac19\uc740 \ubc29\ubc95\uc73c\ub85c \uc0c8\ub85c\uc6b4 UI \ud15c\ud50c\ub9bf\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",f({},{id:"running-an-example-on-an-stm32-evaluation-kit"}),"STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c Example \uc2e4\ud589\ud558\uae30"),(0,r.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 STM32F746-Disco \ubcf4\ub4dc\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\ub294 \ubc29\ubc95\uacfc \ud574\ub2f9 \ubcf4\ub4dc\uc5d0\uc11c TouchGFX Example 1\uac1c\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d STM32 \ud3c9\uac00 \ud0a4\ud2b8\uac00 \uc5c6\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub294 \uac74\ub108\ub6f0\uc5b4\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 SMT32 \ud3c9\uac00 \ud0a4\ud2b8\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4\uba74 \uc9c0\uc6d0\ub418\ub294 \ubcf4\ub4dc \ubaa9\ub85d\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,'TouchGFX Designer\uc5d0\ub294 \ub2e4\uc591\ud55c STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0 \ub9de\ucdb0 \uc0ac\uc804 \uac1c\ubc1c\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud15c\ud50c\ub9bf \ubaa9\ub85d\uc774 \ud568\uaed8 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud15c\ud50c\ub9bf\uc744 \uae30\ubc18\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 \uc0c1\ub2e8 \uc67c\ucabd \ubaa8\ud241\uc774\uc5d0 \uc788\ub294 "Examples" \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec TouchGFX Designer\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.png",mdxType:"FigureWithPoints"},"Example\uc5d0\uc11c \uc2dc\uc791\ud558\uae30"),(0,r.kt)("p",null,'"Animated Image Example"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4(\uc544\uc9c1 \uc120\ud0dd\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0). "Select Hardware" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc6d0\ud558\ub294 \ud558\ub4dc\uc6e8\uc5b4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uae30\ubcf8 "Simulator"\ub294 \uc624\uc9c1 Windows\uc5d0\uc11c\ub9cc \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{points:[[70,10]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.png",mdxType:"FigureWithPoints"},"Animated Image Example\uc774 \uc120\ud0dd\ub41c \ubaa8\uc2b5"),(0,r.kt)("p",null,"\uc774\uc81c TouchGFX Designer\uc5d0 \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud558\ub4dc\uc6e8\uc5b4 \uad6c\uc131\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{points:[[176,140],[440,215]],imageSource:"/img/tutorials/tutorial-01/select-hardware.png",mdxType:"FigureWithPoints"},"Animated Image Example\uc774 \uc120\ud0dd\ub41c \ubaa8\uc2b5"),(0,r.kt)("p",null,'\uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 STM32F746-Disco \ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uac83\uc774\ubbc0\ub85c "STM32F746G Discovery Kit"(1)\uc640 "Select"\ub97c \ucc28\ub840\ub300\ub85c \ud074\ub9ad\ud569\ub2c8\ub2e4(2).'),(0,r.kt)("p",null,'\uc774\uc81c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \uc900\ube44\ub97c \ub9c8\ucce4\uc2b5\ub2c8\ub2e4. \uc6d0\ud55c\ub2e4\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294 "MyAnimatedImageExample746"\uc73c\ub85c \ubc14\uafb8\uaca0\uc2b5\ub2c8\ub2e4. "Create" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uace0 \uacc4\uc18d \uc9c4\ud589\ud569\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{points:[[460,240]],imageSource:"/img/tutorials/tutorial-01/create-the-final-project-4-17.png",mdxType:"FigureWithPoints"},"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,r.kt)("p",null,'\ud504\ub85c\uc81d\ud2b8\uc758 \ud615\ud0dc\ub294 \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \ubcf8 \uac83\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4. \uc720\uc77c\ud558\uac8c \ub2e4\ub978 \uc810\uc740 "Run Simulator" \ubc84\ud2bc(2) \uc606\uc5d0 "Run Target"(1) \ubc84\ud2bc\uc774 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774 \ubc84\ud2bc(\ub610\ub294 \ud0a4\ubcf4\ub4dc\uc758 ',(0,r.kt)(l.Z,{mdxType:"Shortcut"},"F6"),' />)\uc744 \ub204\ub974\uba74 TouchGFX Designer\uac00 GNU ARM C++-\ucef4\ud30c\uc77c\ub7ec\ub97c \uc0ac\uc6a9\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \ucef4\ud30c\uc77c\ud55c \ud6c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud0c0\uac9f\uc73c\ub85c \ud50c\ub798\uc2f1\ud569\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc138\uc2a4\ub294 \ucef4\ud4e8\ud130 \uc18d\ub3c4\uc640 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubcf5\uc7a1\uc131\uc5d0 \ub530\ub77c \uc218 \ubd84\uc774 \uc218\uc694\ub420 \uc218 \uc788\uc73c\uba70 TouchGFX Designer \ud558\ub2e8\uc758 \uc0c1\ud0dc \ud45c\uc2dc\uc904\uc5d0 \uc9c4\ud589 \uc0c1\ud669\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0 \ube4c\ub4dc \ubc0f \ud50c\ub798\uc2f1 \ub2e8\uacc4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 "Detailed Log"(3)(\ub610\ub294 \ud0a4\ubcf4\ub4dc \ub2e8\ucd95\ud0a4 ',(0,r.kt)(l.Z,{mdxType:"Shortcut"},"Alt + L")," ) \ubc84\ud2bc\uc744 \ub204\ub974\uc2ed\uc2dc\uc624."),(0,r.kt)(o.Z,{points:[[480,250],[465,250],[100,250],[0,240]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.png",mdxType:"FigureWithPoints"},"\ud504\ub85c\uc81d\ud2b8 \uc900\ube44 \uc644\ub8cc"),(0,r.kt)("p",null,'\ud50c\ub798\uc2f1\uc774 \uc644\ub8cc\ub418\uba74 TouchGFX Designer\uc758 \uc0c1\ud0dc \ud45c\uc2dc\uc904\uc5d0 "Flashing Done"\uc774\ub77c\uace0 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc774\uc81c \ubcf4\ub4dc\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ubaa8\uc2b5\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)(a.Z,{mdxType:"Note"},"\ud0c0\uac9f\uc73c\ub85c \ud50c\ub798\uc2f1\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 STM32CubeProgrammer / ST-Link \uc720\ud2f8\ub9ac\ud2f0\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0")))),(0,r.kt)("p",null,"\ud558\ub2e8 \uc67c\ucabd\uc5d0 \uc788\ub294 Files \ubc84\ud2bc(4)\uc744 \ud074\ub9ad\ud558\uba74 TouchGFX Designer\uc5d0\uc11c \ud30c\uc77c \ube0c\ub77c\uc6b0\uc800\uac00 \uc5f4\ub9ac\uba74\uc11c \uc0c8 \ud504\ub85c\uc81d\ud2b8\uac00 \ud3ec\ud568\ub41c \ub514\ub809\ud130\ub9ac\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"build\\bin"),"\uc73c\ub85c \uc774\ub3d9\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud30c\uc77c\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-01/the-projects-binary-files.png",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8\uc758 \uc774\uc9c4 \ud30c\uc77c"),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"target.hex")," \ud30c\uc77c\uc740 \ubcf4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 STM32 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\uba70, TouchGFX Designer\uc5d0\uc11c \ubc29\uae08 \ubcf4\ub4dc\ub85c \ud504\ub85c\uadf8\ub798\ubc0d\ud55c \ud30c\uc77c\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c STM32CubeProgrammer \ub610\ub294 ST-Link \uc720\ud2f8\ub9ac\ud2f0\ub97c \uc0ac\uc6a9\ud574 \ubcf4\ub4dc\ub97c \uc218\ub3d9\uc73c\ub85c \ud50c\ub798\uc2f1\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",f({parentName:"p"},{href:"../development/ui-development/working-with-touchgfx/compiling-and-flashing"}),"\ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1 \ud398\uc774\uc9c0"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}b.isMDXComponent=!0}}]);