"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9152],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||l;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},39130:function(t,e,n){n.d(e,{Z:function(){return b}});var r=n(67294),a=n(73727),l=n(11368),o=n(35096),i=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&g(t,n,e[n]);if(m)for(var n of m(e))f.call(e,n)&&g(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:p,to:g,href:b,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=n,T=((t,e)=>{var n={};for(var r in t)k.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&f.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:O}}=(0,l.Z)(),{withBaseUrl:C}=(0,u.C)(),L=(0,r.useContext)(c),P=g||b,j=(0,o.Z)(P),Z=null==P?void 0:P.replace("pathname://","");let D=void 0!==Z?(S=Z,x&&(t=>t.startsWith("/"))(S)?C(S):S):void 0;var S;D&&j&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:w,baseUrl:O}));const E=(0,r.useRef)(!1),I=p?a.OL:a.rU,U=i.Z.canUseIntersectionObserver,B=(0,r.useRef)();(0,r.useEffect)((()=>(!U&&j&&null!=D&&window.docusaurus.prefetch(D),()=>{U&&B.current&&B.current.disconnect()})),[B,D,U,j]);const M=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,W=!D||!j||M;return D&&j&&!M&&!v&&L.collectLink(D),W?r.createElement("a",_(_({href:D},P&&!j&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(I,_((A=_({},T),d(A,h({onMouseEnter:()=>{E.current||null==D||(window.docusaurus.preload(D),E.current=!0)},innerRef:t=>{var e,n;U&&t&&j&&(e=t,n=()=>{null!=D&&window.docusaurus.prefetch(D)},B.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(B.current.unobserve(e),B.current.disconnect(),n())}))})),B.current.observe(e))},to:D||""}))),p&&{isActive:y,activeClassName:N}));var A}},35096:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return o}});var r=n(11368),a=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const o=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+o:o}(e,t,n,r)}}function o(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),l="/"===a||a===r?a:(o=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(a,l)}},67023:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(l).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},2e4:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return f},toc:function(){return g},default:function(){return b}});var r=n(3905),a=n(39130),l=n(43861),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&d(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&d(t,n,e[n]);return t};const m={title:"TouchController"},k=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_touch_controller",id:"api/classes/classtouchgfx_1_1_touch_controller",isDocsHomePage:!1,title:"TouchController",description:"Basic Touch Controller interface.",source:"@site/docs/api/classes/classtouchgfx_1_1_touch_controller.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_touch_controller",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_touch_controller",tags:[],version:"current",frontMatter:{title:"TouchController"},sidebar:"docs",previous:{title:"TouchCalibration",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_touch_calibration"},next:{title:"Transition",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_transition"}},g=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"init",id:"init",children:[],level:3},{value:"sampleTouch",id:"sampletouch",children:[],level:3},{value:"~TouchController",id:"touchcontroller",children:[],level:3}],level:2}],_={toc:g};function b(t){var e,n=t,{components:o}=n,d=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=h(h({},_),d),i(e,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Basic Touch Controller interface. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller",mdxType:"Link"},"I2CTouchController"),",  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_no_touch_controller",mdxType:"Link"},"NoTouchController"),",  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller",mdxType:"Link"},"SDL2TouchController"),",  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller",mdxType:"Link"},"SDLTouchController")),(0,r.kt)("h2",h({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:"right"})),(0,r.kt)("th",h({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"init")),"() =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Initializes touch controller.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"})),(0,r.kt)("td",h({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),"(int32_t & x, int32_t & y) =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Checks whether the touch screen is being touched, and if so, what coordinates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"})),(0,r.kt)("td",h({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,r.kt)("a",h({parentName:"td"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:"right"})),(0,r.kt)("td",h({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",h({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",h({},{id:"init"}),"init"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"init")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"=0"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Initializes touch controller. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-init",mdxType:"Link"},"touchgfx::NoTouchController::init"),", ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller#function-init",mdxType:"Link"},"touchgfx::SDL2TouchController::init"),", ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-init",mdxType:"Link"},"touchgfx::SDLTouchController::init"),", ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-init",mdxType:"Link"},"touchgfx::I2CTouchController::init")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",h({},{id:"sampletouch"}),"sampleTouch"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"int32_t &"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"x ,"),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"int32_t &"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"=0"),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Checks whether the touch screen is being touched, and if so, what coordinates. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"The x position of the touch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"The y position of the touch."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"True if a touch has been detected, otherwise false. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::NoTouchController::sampleTouch"),", ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::SDL2TouchController::sampleTouch"),", ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::SDLTouchController::sampleTouch"),", ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::I2CTouchController::sampleTouch")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",h({},{id:"touchcontroller"}),"~TouchController"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})),(0,r.kt)("th",h({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"virtual","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null})),(0,r.kt)("td",h({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",h({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Finalizes an instance of the ",(0,r.kt)("a",h({parentName:"p"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class. "))))}b.isMDXComponent=!0}}]);