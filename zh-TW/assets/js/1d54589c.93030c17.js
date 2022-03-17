"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2430],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return k}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=a.createContext({}),s=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},d=function(t){var n=s(t.components);return a.createElement(c.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=s(e),k=r,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||i;return e?a.createElement(m,l(l({ref:n},d),{},{components:e})):a.createElement(m,l({ref:n},d))}));function k(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=e[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},43861:function(t,n,e){var a=e(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=r},39130:function(t,n,e){e.d(n,{Z:function(){return _}});var a=e(67294),r=e(73727),i=e(11368),l=e(35096),o=e(84487);const c=(0,a.createContext)({collectLink:()=>{}});var s=e(25026),d=e(67023),u=Object.defineProperty,p=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(t,n,e)=>n in t?u(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,N=(t,n)=>{for(var e in n||(n={}))h.call(n,e)&&f(t,e,n[e]);if(m)for(var e of m(n))g.call(n,e)&&f(t,e,n[e]);return t};var _=function(t){var n,e=t,{isNavLink:u,to:f,href:_,activeClassName:b,isActive:v,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=e,T=((t,n)=>{var e={};for(var a in t)h.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&m)for(var a of m(t))n.indexOf(a)<0&&g.call(t,a)&&(e[a]=t[a]);return e})(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:Z}=(0,s.C)(),L=(0,a.useContext)(c),C=f||_,D=(0,l.Z)(C),P=null==C?void 0:C.replace("pathname://","");let j=void 0!==P?(S=P,x&&(t=>t.startsWith("/"))(S)?Z(S):S):void 0;var S;j&&D&&(j=(0,d.applyTrailingSlash)(j,{trailingSlash:w,baseUrl:O}));const E=(0,a.useRef)(!1),I=u?r.OL:r.rU,W=o.Z.canUseIntersectionObserver,A=(0,a.useRef)();(0,a.useEffect)((()=>(!W&&D&&null!=j&&window.docusaurus.prefetch(j),()=>{W&&A.current&&A.current.disconnect()})),[A,j,W,D]);const B=null!==(n=null==j?void 0:j.startsWith("#"))&&void 0!==n&&n,H=!j||!D||B;return j&&D&&!B&&!y&&L.collectLink(j),H?a.createElement("a",N(N({href:j},C&&!D&&{target:"_blank",rel:"noopener noreferrer"}),T)):a.createElement(I,N((U=N({},T),p(U,k({onMouseEnter:()=>{E.current||null==j||(window.docusaurus.preload(j),E.current=!0)},innerRef:t=>{var n,e;W&&t&&D&&(n=t,e=()=>{null!=j&&window.docusaurus.prefetch(j)},A.current=new window.IntersectionObserver((t=>{t.forEach((t=>{n===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.current.unobserve(n),A.current.disconnect(),e())}))})),A.current.observe(n))},to:j||""}))),u&&{isActive:v,activeClassName:b}));var U}},35096:function(t,n,e){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}e.d(n,{b:function(){return a},Z:function(){return r}})},25026:function(t,n,e){e.d(n,{C:function(){return i},Z:function(){return l}});var a=e(11368),r=e(35096);function i(){const{siteConfig:{baseUrl:t="/",url:n}={}}=(0,a.Z)();return{withBaseUrl:(e,a)=>function(t,n,e,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!e)return e;if(e.startsWith("#"))return e;if((0,r.b)(e))return e;if(a)return n+e;const l=e.startsWith(n)?e:n+e.replace(/^\//,"");return i?t+l:l}(n,t,e,a)}}function l(t,n={}){const{withBaseUrl:e}=i();return e(t,n)}},67271:function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,n){const{trailingSlash:e,baseUrl:a}=n;if(t.startsWith("#"))return t;if(void 0===e)return t;const[r]=t.split(/[#?]/),i="/"===r||r===a?r:(l=r,e?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,n,e){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var r=e(67271);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=e(11080);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return Array.from(new Set(t))}},95881:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return g},toc:function(){return f},default:function(){return _}});var a=e(3905),r=e(39130),i=e(43861),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,n,e)=>n in t?l(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,k=(t,n)=>{for(var e in n||(n={}))d.call(n,e)&&p(t,e,n[e]);if(s)for(var e of s(n))u.call(n,e)&&p(t,e,n[e]);return t};const m={title:"Transition"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_transition",id:"api/classes/classtouchgfx_1_1_transition",isDocsHomePage:!1,title:"Transition",description:"The Transition class is the base class for Transitions.",source:"@site/docs/api/classes/classtouchgfx_1_1_transition.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_transition",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_transition",tags:[],version:"current",frontMatter:{title:"Transition"},sidebar:"docs",previous:{title:"TouchController",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_touch_controller"},next:{title:"TwoWildcardTextButtonStyle",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_two_wildcard_text_button_style"}},f=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Protected Attributes",id:"protected-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"handleTickEvent",id:"handletickevent",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"invalidate",id:"invalidate",children:[],level:3},{value:"isDone",id:"isdone",children:[],level:3},{value:"setScreenContainer",id:"setscreencontainer",children:[],level:3},{value:"tearDown",id:"teardown",children:[],level:3},{value:"Transition",id:"transition",children:[],level:3},{value:"~Transition",id:"transition-1",children:[],level:3}],level:2},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"done",id:"done",children:[],level:3},{value:"screenContainer",id:"screencontainer",children:[],level:3}],level:2}],N={toc:f};function _(t){var n,e=t,{components:l}=e,p=((t,n)=>{var e={};for(var a in t)d.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&s)for(var a of s(t))n.indexOf(a)<0&&u.call(t,a)&&(e[a]=t[a]);return e})(e,["components"]);return(0,a.kt)("wrapper",(n=k(k({},N),p),o(n,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," The Transition class is the base class for Transitions.\nImplementations of ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")," defines what happens when transitioning between Screens, which typically involves visual effects. An example of a transition implementation can be seen in example custom_transition_example. The most basic transition is the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_no_transition"}),"NoTransition")," class that does a transition without any visual effects."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_no_transition"}),"NoTransition"),", ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_slide_transition"}),"SlideTransition")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition",mdxType:"Link"},"BlockTransition"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition",mdxType:"Link"},"CoverTransition","<"," templateDirection ",">"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_no_transition",mdxType:"Link"},"NoTransition"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition",mdxType:"Link"},"SlideTransition","<"," templateDirection ",">"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition",mdxType:"Link"},"WipeTransition","<"," templateDirection ",">")),(0,a.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Called for every tick when transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-init",mdxType:"Link"},"init")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Initializes the transition.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"Link"},"invalidate")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Invalidates the screen when starting the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-isdone",mdxType:"Link"},"isDone")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Query if the transition is done transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"Link"},"setScreenContainer")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," & cont)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen"),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-teardown",mdxType:"Link"},"tearDown")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Tears down the Animation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-transition",mdxType:"Link"},"Transition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-~transition",mdxType:"Link"},"~Transition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"protected-attributes"}),"Protected Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-done",mdxType:"Link"},"done")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Flag that indicates when the transition is done. This should be set by implementing classes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-screencontainer",mdxType:"Link"},"screenContainer")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The screen ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"handletickevent"}),"handleTickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Called for every tick when transitioning. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition#function-handletickevent",mdxType:"Link"},"touchgfx::BlockTransition::handleTickEvent"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-handletickevent",mdxType:"Link"},"touchgfx::CoverTransition::handleTickEvent"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_no_transition#function-handletickevent",mdxType:"Link"},"touchgfx::NoTransition::handleTickEvent"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-handletickevent",mdxType:"Link"},"touchgfx::SlideTransition::handleTickEvent"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-handletickevent",mdxType:"Link"},"touchgfx::WipeTransition::handleTickEvent")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes the transition. "),(0,a.kt)("p",null,"Called after the constructor is called, when the application changes the transition. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition#function-init",mdxType:"Link"},"touchgfx::BlockTransition::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-init",mdxType:"Link"},"touchgfx::CoverTransition::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-init",mdxType:"Link"},"touchgfx::SlideTransition::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-init",mdxType:"Link"},"touchgfx::WipeTransition::init")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"invalidate"}),"invalidate"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"Link"},"invalidate")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Invalidates the screen when starting the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition"),". "),(0,a.kt)("p",null,"Default is to invalidate the whole screen. Subclasses can do partial invalidation. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition#function-invalidate",mdxType:"Link"},"touchgfx::BlockTransition::invalidate"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-invalidate",mdxType:"Link"},"touchgfx::WipeTransition::invalidate")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-isdone",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"isdone"}),"isDone"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"bool","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-isdone",mdxType:"Link"},"isDone")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Query if the transition is done transitioning. "),(0,a.kt)("p",null,"It is the responsibility of the inheriting class to set the underlying done flag once the transition has been completed."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"True if the transition is done, false otherwise. ")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"setscreencontainer"}),"setScreenContainer"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"Link"},"setScreenContainer")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," &"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"cont"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen"),(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_container"}),"Container"),". "),(0,a.kt)("p",null,"Is used by ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")," to enable the transition to access the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_container"}),"Container"),"."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"cont"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," the transition should have access to."))))))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-teardown",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"teardown"}),"tearDown"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-teardown",mdxType:"Link"},"tearDown")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Tears down the Animation. "),(0,a.kt)("p",null,"Called before the destructor is called, when the application changes the transition. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition#function-teardown",mdxType:"Link"},"touchgfx::BlockTransition::tearDown"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-teardown",mdxType:"Link"},"touchgfx::CoverTransition::tearDown"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-teardown",mdxType:"Link"},"touchgfx::SlideTransition::tearDown"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-teardown",mdxType:"Link"},"touchgfx::WipeTransition::tearDown")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-transition",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"transition"}),"Transition"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-transition",mdxType:"Link"},"Transition")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class. "))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-~transition",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"transition-1"}),"~Transition"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-~transition",mdxType:"Link"},"~Transition")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class. "))),(0,a.kt)("h2",k({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#variable-done",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"done"}),"done"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"bool done ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Flag that indicates when the transition is done. This should be set by implementing classes. "))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_transition#variable-screencontainer",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"screencontainer"}),"screenContainer"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_container"}),"Container")," * screenContainer ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The screen ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_container"}),"Container")," of the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to. "))))}_.isMDXComponent=!0}}]);