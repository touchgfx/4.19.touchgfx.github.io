"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6449],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},39130:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(67294),a=n(73727),l=n(11368),o=n(35096),i=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&b(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&b(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:p,to:b,href:v,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:C=!0}=n,O=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:S}}=(0,l.Z)(),{withBaseUrl:E}=(0,u.C)(),P=(0,r.useContext)(c),j=b||v,T=(0,o.Z)(j),Z=null==j?void 0:j.replace("pathname://","");let D=void 0!==Z?(_=Z,C&&(e=>e.startsWith("/"))(_)?E(_):_):void 0;var _;D&&T&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:x,baseUrl:S}));const B=(0,r.useRef)(!1),F=p?a.OL:a.rU,M=i.Z.canUseIntersectionObserver,U=(0,r.useRef)();(0,r.useEffect)((()=>(!M&&T&&null!=D&&window.docusaurus.prefetch(D),()=>{M&&U.current&&U.current.disconnect()})),[U,D,M,T]);const X=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,A=!D||!T||X;return D&&T&&!X&&!w&&P.collectLink(D),A?r.createElement("a",k(k({href:D},j&&!T&&{target:"_blank",rel:"noopener noreferrer"}),O)):r.createElement(F,k((I=k({},O),d(I,m({onMouseEnter:()=>{B.current||null==D||(window.docusaurus.preload(D),B.current=!0)},innerRef:e=>{var t,n;M&&e&&T&&(t=e,n=()=>{null!=D&&window.docusaurus.prefetch(D)},U.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.current.unobserve(t),U.current.disconnect(),n())}))})),U.current.observe(t))},to:D||""}))),p&&{isActive:y,activeClassName:N}));var I}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return l},Z:function(){return o}});var r=n(11368),a=n(35096);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),l="/"===a||a===r?a:(o=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,l)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var l=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(l).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},64710:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return v},metadata:function(){return N},toc:function(){return y},default:function(){return C}});var r=n(3905),a=n(44035),l=n(29415),o=n(37793),i=n(31217),c=n(39130),u=n(22425),s=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&f(e,n,t[n]);return e};const k={id:"scrollable-container",title:"Scrollable Container"},v=void 0,N={unversionedId:"development/ui-development/ui-components/containers/scrollable-container",id:"development/ui-development/ui-components/containers/scrollable-container",isDocsHomePage:!1,title:"Scrollable Container",description:"Scrollable Container\ub294 \ub0b4\uc6a9\uc744 \uc138\ub85c \ubc29\ud5a5\uacfc \uac00\ub85c \ubc29\ud5a5\uc73c\ub85c \uc2a4\ud06c\ub864\ud560 \uc218 \uc788\ub294 Container\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scrollable-container.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scrollable-container",permalink:"/4.19/ko/docs/development/ui-development/ui-components/containers/scrollable-container",tags:[],version:"current",frontMatter:{id:"scrollable-container",title:"Scrollable Container"},sidebar:"docs",previous:{title:"Container",permalink:"/4.19/ko/docs/development/ui-development/ui-components/containers/container"},next:{title:"Swipe Container",permalink:"/4.19/ko/docs/development/ui-development/ui-components/containers/swipe-container"}},y=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",children:[],level:2},{value:"\uc18d\uc131",id:"properties",children:[],level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",children:[{value:"\uc561\uc158",id:"actions",children:[],level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",children:[],level:3}],level:2},{value:"\uc131\ub2a5",id:"performance",children:[],level:2},{value:"\uc608\uc81c",id:"examples",children:[{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",children:[],level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API \ucc38\uc870",id:"api-reference",children:[],level:2}],w={toc:y};function C(e){var t,n=e,{components:s}=n,f=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},w),f),p(t,d({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Scrollable Container\ub294 \ub0b4\uc6a9\uc744 \uc138\ub85c \ubc29\ud5a5\uacfc \uac00\ub85c \ubc29\ud5a5\uc73c\ub85c \uc2a4\ud06c\ub864\ud560 \uc218 \uc788\ub294 ",(0,r.kt)("a",b({parentName:"p"},{href:"container"}),"Container"),"\uc785\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/scrollable-container/widget-appearance.gif",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Scrollable Container"),(0,r.kt)("h2",b({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"Scrollable Container\ub294 TouchGFX Designer\uc758 Containers \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/scrollable-container/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 Scrollable Container"),(0,r.kt)("h2",b({},{id:"properties"}),"\uc18d\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Scrollable Container\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock "),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible "),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Scrolling")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Enable horizontal scroll"),"\uc740 \uc218\ud3c9 \ubc29\ud5a5 \uc2a4\ud06c\ub864\uc758 \ud65c\uc131\ud654 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Enable vertical scroll"),"\uc740 \uc138\ub85c \ubc29\ud5a5 \uc2a4\ud06c\ub864\uc758 \ud65c\uc131\ud654 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Show scrollbars"),"\ub294 \uc2a4\ud06c\ub864\ubc14\uc758 \uc0c1\uc2dc \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Show scrollbars while scrolling"),"\uc740 \ub0b4\uc6a9\uc744 \uc2a4\ud06c\ub864\ud560 \ub54c\ub9cc \uc2a4\ud06c\ub864\ubc14\ub97c \ud45c\uc2dc\ud560\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"'Show scrollbars' \uc18d\uc131\uc744 \ud65c\uc131\ud654\ud558\uba74 \uc774 \uc635\uc158\uc740 \ubb34\uc2dc\ub429\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Scrollbars Color\ub294 ")," \uc2a4\ud06c\ub864\ubc14 \uc0c9\uc0c1\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Scrollbars Alpha"),"\ub294 \uc2a4\ud06c\ub864\ubc14\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"}," \uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener\ub294")," \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator\ub294")," \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"\uc54c\ud30c ")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator\ub294")," \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",b({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,r.kt)("p",null,"Scrollable Container\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",b({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc704\uc82f\ubcc4 \uc561\uc158")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",b({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("p",null,"Scrollable Container\ub294 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",b({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"Scrollable Container\ub294 ",(0,r.kt)("a",b({parentName:"p"},{href:"container"}),"Container")," \uc720\ud615\uc73c\ub85c, \uae30\ubcf8\uc801\uc73c\ub85c \uc2a4\ud06c\ub864\ubc14\ub97c \ub80c\ub354\ub9c1\ud560 \ub54c\ub97c \uc81c\uc678\ud558\uace0\ub294 \ub4dc\ub85c\uc6b0 \uccb4\uc778\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc131\ub2a5\uc740 \uc8fc\ub85c \ud558\uc704 \ub178\ub4dc\uc758 \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",b({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",b({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("h3",b({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74TouchGFX Designer\uc5d0\uc11c Scrollable Container\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase()\n{\n    scrollableContainer.setPosition(115, 11, 250, 250);\n    scrollableContainer.enableHorizontalScroll(false);\n    scrollableContainer.setScrollbarsColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\n    scrollableContainer.setScrollbarsPermanentlyVisible();\n    scrollableContainer.setScrollbarsVisible(false);\n    scrollableContainer.add(<widget_name>); //add a widget as child\n\n    add(scrollableContainer);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 ScrollableContainer \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"scrollableContainer.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",b({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,r.kt)("p",null,"Scrollable Container\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/scrollable-container-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 Scrollable Container Example UI \ud15c\ud50c\ub9bf"),(0,r.kt)("h2",b({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scrollable_container",mdxType:"Link"},"ScrollableContainer \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}C.isMDXComponent=!0}}]);