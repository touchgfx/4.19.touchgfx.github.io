"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7889],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,l(l({ref:e},s),{},{components:n})):r.createElement(d,l({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},39130:function(t,e,n){n.d(e,{Z:function(){return y}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),m=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(t,e,n)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&b(t,n,e[n]);if(d)for(var n of d(e))g.call(e,n)&&b(t,n,e[n]);return t};var y=function(t){var e,n=t,{isNavLink:m,to:b,href:y,activeClassName:v,isActive:_,"data-noBrokenLinkCheck":N,autoAddBaseUrl:w=!0}=n,O=((t,e)=>{var n={};for(var r in t)k.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&d)for(var r of d(t))e.indexOf(r)<0&&g.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:T}=(0,u.C)(),j=(0,r.useContext)(c),B=b||y,C=(0,l.Z)(B),E=null==B?void 0:B.replace("pathname://","");let Z=void 0!==E?(D=E,w&&(t=>t.startsWith("/"))(D)?T(D):D):void 0;var D;Z&&C&&(Z=(0,s.applyTrailingSlash)(Z,{trailingSlash:x,baseUrl:P}));const L=(0,r.useRef)(!1),F=m?a.OL:a.rU,M=o.Z.canUseIntersectionObserver,R=(0,r.useRef)();(0,r.useEffect)((()=>(!M&&C&&null!=Z&&window.docusaurus.prefetch(Z),()=>{M&&R.current&&R.current.disconnect()})),[R,Z,M,C]);const S=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,U=!Z||!C||S;return Z&&C&&!S&&!N&&j.collectLink(Z),U?r.createElement("a",h(h({href:Z},B&&!C&&{target:"_blank",rel:"noopener noreferrer"}),O)):r.createElement(F,h((I=h({},O),p(I,f({onMouseEnter:()=>{L.current||null==Z||(window.docusaurus.preload(Z),L.current=!0)},innerRef:t=>{var e,n;M&&t&&C&&(e=t,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},R.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(R.current.unobserve(e),R.current.disconnect(),n())}))})),R.current.observe(e))},to:Z||""}))),m&&{isActive:_,activeClassName:v}));var I}},35096:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+l:l}(e,t,n,r)}}function l(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),i="/"===a||a===r?a:(l=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(a,i)}},67023:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},61518:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return k},metadata:function(){return g},toc:function(){return b},default:function(){return y}});var r=n(3905),a=n(39130),i=n(43861),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))m.call(e,n)&&p(t,n,e[n]);return t};const d={title:"PartialFrameBufferManager"},k=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",id:"api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",isDocsHomePage:!1,title:"PartialFrameBufferManager",description:"This class specifies strategies for transmitting block to the display using Partial Frame Buffer.",source:"@site/docs/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",tags:[],version:"current",frontMatter:{title:"PartialFrameBufferManager"},sidebar:"docs",previous:{title:"Pair",permalink:"/4.19/ja/docs/api/classes/structtouchgfx_1_1_pair"},next:{title:"Partition",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_partition"}},b=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"transmitRemainingBlocks",id:"transmitremainingblocks",children:[],level:3},{value:"tryTransmitBlock",id:"trytransmitblock",children:[],level:3},{value:"tryTransmitBlockFromIRQ",id:"trytransmitblockfromirq",children:[],level:3}],level:2}],h={toc:b};function y(t){var e,n=t,{components:l}=n,p=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&m.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=f(f({},h),p),o(e,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This class specifies strategies for transmitting block to the display using Partial Frame Buffer. "),(0,r.kt)("h2",f({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"right"})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"Link"},"transmitRemainingBlocks")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Transmit all remaining drawn Framebuffer blocks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"Link"},"tryTransmitBlock")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Tries to transmit a drawn block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"Link"},"tryTransmitBlockFromIRQ")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Tries to transmit a drawn block in interrupt context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",f({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(i.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"transmitremainingblocks"}),"transmitRemainingBlocks"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"Link"},"transmitRemainingBlocks")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Transmit all remaining drawn Framebuffer blocks. "),(0,r.kt)("div",{class:"api-note",markdown:"1"},(0,r.kt)("h5",null,"Note"),(0,r.kt)("p",null,"This function does not return before all blocks have been transmitted. ")))),(0,r.kt)(i.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"trytransmitblock"}),"tryTransmitBlock"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"Link"},"tryTransmitBlock")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Tries to transmit a drawn block. "),(0,r.kt)("div",{class:"api-note",markdown:"1"},(0,r.kt)("h5",null,"Note"),(0,r.kt)("p",null,"Will return immediately if already transmitting. ")))),(0,r.kt)(i.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"trytransmitblockfromirq"}),"tryTransmitBlockFromIRQ"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"Link"},"tryTransmitBlockFromIRQ")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Tries to transmit a drawn block in interrupt context. "),(0,r.kt)("div",{class:"api-note",markdown:"1"},(0,r.kt)("h5",null,"Note"),(0,r.kt)("p",null,"Will transmit next block immediately if drawn. ")))))}y.isMDXComponent=!0}}]);