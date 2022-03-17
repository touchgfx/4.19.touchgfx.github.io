"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4646],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),d=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=d(n),k=r,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||i;return n?a.createElement(m,l(l({ref:e},s),{},{components:n})):a.createElement(m,l({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,n){n.d(e,{Z:function(){return v}});var a=n(67294),r=n(73727),i=n(11368),l=n(35096),o=n(84487);const c=(0,a.createContext)({collectLink:()=>{}});var d=n(25026),s=n(67023),u=Object.defineProperty,p=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,N=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))h.call(e,n)&&N(t,n,e[n]);if(m)for(var n of m(e))g.call(e,n)&&N(t,n,e[n]);return t};var v=function(t){var e,n=t,{isNavLink:u,to:N,href:v,activeClassName:b,isActive:_,"data-noBrokenLinkCheck":y,autoAddBaseUrl:w=!0}=n,x=((t,e)=>{var n={};for(var a in t)h.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&g.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:D}=(0,d.C)(),P=(0,a.useContext)(c),L=N||v,Z=(0,l.Z)(L),j=null==L?void 0:L.replace("pathname://","");let C=void 0!==j?(E=j,w&&(t=>t.startsWith("/"))(E)?D(E):E):void 0;var E;C&&Z&&(C=(0,s.applyTrailingSlash)(C,{trailingSlash:T,baseUrl:O}));const M=(0,a.useRef)(!1),S=u?r.OL:r.rU,A=o.Z.canUseIntersectionObserver,I=(0,a.useRef)();(0,a.useEffect)((()=>(!A&&Z&&null!=C&&window.docusaurus.prefetch(C),()=>{A&&I.current&&I.current.disconnect()})),[I,C,A,Z]);const F=null!==(e=null==C?void 0:C.startsWith("#"))&&void 0!==e&&e,U=!C||!Z||F;return C&&Z&&!F&&!y&&P.collectLink(C),U?a.createElement("a",f(f({href:C},L&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),x)):a.createElement(S,f((H=f({},x),p(H,k({onMouseEnter:()=>{M.current||null==C||(window.docusaurus.preload(C),M.current=!0)},innerRef:t=>{var e,n;A&&t&&Z&&(e=t,n=()=>{null!=C&&window.docusaurus.prefetch(C)},I.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.current.unobserve(e),I.current.disconnect(),n())}))})),I.current.observe(e))},to:C||""}))),u&&{isActive:_,activeClassName:b}));var H}},35096:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+l:l}(e,t,n,a)}}function l(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),i="/"===r||r===a?r:(l=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},80731:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return g},toc:function(){return N},default:function(){return v}});var a=n(3905),r=n(39130),i=n(43861),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(d)for(var n of d(e))u.call(e,n)&&p(t,n,e[n]);return t};const m={title:"CoverTransition"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_cover_transition",id:"api/classes/classtouchgfx_1_1_cover_transition",isDocsHomePage:!1,title:"CoverTransition",description:"A Transition that slides the new screen over the previous from the given direction.",source:"@site/docs/api/classes/classtouchgfx_1_1_cover_transition.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_cover_transition",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_cover_transition",tags:[],version:"current",frontMatter:{title:"CoverTransition"},sidebar:"docs",previous:{title:"Container",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_container"},next:{title:"CWRUtil",permalink:"/4.19/ja/docs/api/classes/structtouchgfx_1_1_c_w_r_util"}},N=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Protected Functions",id:"protected-functions",children:[],level:2},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"public-functions-inherited-from-transition",children:[],level:3},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"protected-attributes-inherited-from-transition",children:[],level:3}],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"CoverTransition",id:"covertransition",children:[],level:3},{value:"handleTickEvent",id:"handletickevent",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"tearDown",id:"teardown",children:[],level:3}],level:2},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"initMoveDrawable",id:"initmovedrawable",children:[],level:3},{value:"tickMoveDrawable",id:"tickmovedrawable",children:[],level:3}],level:2}],f={toc:N};function v(t){var e,n=t,{components:l}=n,p=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&d)for(var a of d(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=k(k({},f),p),o(e,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A Transition that slides the new screen over the previous ",(0,a.kt)("em",{parentName:"p"},"from")," the given direction. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-covertransition",mdxType:"Link"},"CoverTransition")),"(const uint8_t transitionSteps =20)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_cover_transition"}),"CoverTransition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Handles the tick event when transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-init",mdxType:"Link"},"init")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Initializes the transition.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-teardown",mdxType:"Link"},"tearDown")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Tears down the Animation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"protected-functions"}),"Protected Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-initmovedrawable",mdxType:"Link"},"initMoveDrawable")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," & d)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Moves the Drawable to its initial position just outside of the visible area of the display.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-tickmovedrawable",mdxType:"Link"},"tickMoveDrawable")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," & d)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Moves the Drawable to the new position as calculated in ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_cover_transition#function-handletickevent"}),"handleTickEvent()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",k({},{id:"public-functions-inherited-from-transition"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"Link"},"invalidate")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Invalidates the screen when starting the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-isdone",mdxType:"Link"},"isDone")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Query if the transition is done transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"Link"},"setScreenContainer")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," & cont)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen"),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-transition",mdxType:"Link"},"Transition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-~transition",mdxType:"Link"},"~Transition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",k({},{id:"protected-attributes-inherited-from-transition"}),"Protected Attributes inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-done",mdxType:"Link"},"done")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Flag that indicates when the transition is done. This should be set by implementing classes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-screencontainer",mdxType:"Link"},"screenContainer")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The screen ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_cover_transition#function-covertransition",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"covertransition"}),"CoverTransition"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-covertransition",mdxType:"Link"},"CoverTransition")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"transitionSteps  =20"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_cover_transition"}),"CoverTransition")," class. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"transitionSteps"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"(Optional) Number of steps in the transition animation."))))))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_cover_transition#function-handletickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"handletickevent"}),"handleTickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Handles the tick event when transitioning. "),(0,a.kt)("p",null,"It moves the contents of the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen"),"'s container. The direction of the transition determines the direction the contents of the container moves. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"Link"},"touchgfx::Transition::handleTickEvent")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_cover_transition#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes the transition. "),(0,a.kt)("p",null,"Called after the constructor is called, when the application changes the transition. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-init",mdxType:"Link"},"touchgfx::Transition::init")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_cover_transition#function-teardown",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"teardown"}),"tearDown"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-teardown",mdxType:"Link"},"tearDown")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Tears down the Animation. "),(0,a.kt)("p",null,"Called before the destructor is called, when the application changes the transition. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-teardown",mdxType:"Link"},"touchgfx::Transition::tearDown")))),(0,a.kt)("h2",k({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_cover_transition#function-initmovedrawable",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"initmovedrawable"}),"initMoveDrawable"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-initmovedrawable",mdxType:"Link"},"initMoveDrawable")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," &"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Moves the Drawable to its initial position just outside of the visible area of the display. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," to move."))))))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_cover_transition#function-tickmovedrawable",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"tickmovedrawable"}),"tickMoveDrawable"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-tickmovedrawable",mdxType:"Link"},"tickMoveDrawable")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," &"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Moves the Drawable to the new position as calculated in ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_cover_transition#function-handletickevent"}),"handleTickEvent()"),". "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," to move."))))))))}v.isMDXComponent=!0}}]);