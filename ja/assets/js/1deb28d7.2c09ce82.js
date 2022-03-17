"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1661],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,l(l({ref:e},s),{},{components:a})):n.createElement(k,l({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,a){a.d(e,{Z:function(){return b}});var n=a(67294),r=a(73727),i=a(11368),l=a(35096),o=a(84487);const p=(0,n.createContext)({collectLink:()=>{}});var c=a(25026),s=a(67023),u=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,_=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))h.call(e,a)&&_(t,a,e[a]);if(k)for(var a of k(e))g.call(e,a)&&_(t,a,e[a]);return t};var b=function(t){var e,a=t,{isNavLink:u,to:_,href:b,activeClassName:N,isActive:v,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=a,P=((t,e)=>{var a={};for(var n in t)h.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&k)for(var n of k(t))e.indexOf(n)<0&&g.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:A}=(0,c.C)(),j=(0,n.useContext)(p),M=_||b,T=(0,l.Z)(M),S=null==M?void 0:M.replace("pathname://","");let V=void 0!==S?(D=S,x&&(t=>t.startsWith("/"))(D)?A(D):D):void 0;var D;V&&T&&(V=(0,s.applyTrailingSlash)(V,{trailingSlash:w,baseUrl:O}));const H=(0,n.useRef)(!1),Z=u?r.OL:r.rU,L=o.Z.canUseIntersectionObserver,C=(0,n.useRef)();(0,n.useEffect)((()=>(!L&&T&&null!=V&&window.docusaurus.prefetch(V),()=>{L&&C.current&&C.current.disconnect()})),[C,V,L,T]);const E=null!==(e=null==V?void 0:V.startsWith("#"))&&void 0!==e&&e,U=!V||!T||E;return V&&T&&!E&&!y&&j.collectLink(V),U?n.createElement("a",f(f({href:V},M&&!T&&{target:"_blank",rel:"noopener noreferrer"}),P)):n.createElement(Z,f((I=f({},P),d(I,m({onMouseEnter:()=>{H.current||null==V||(window.docusaurus.preload(V),H.current=!0)},innerRef:t=>{var e,a;L&&t&&T&&(e=t,a=()=>{null!=V&&window.docusaurus.prefetch(V)},C.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(C.current.unobserve(e),C.current.disconnect(),a())}))})),C.current.observe(e))},to:V||""}))),u&&{isActive:v,activeClassName:N}));var I}},35096:function(t,e,a){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){a.d(e,{C:function(){return i},Z:function(){return l}});var n=a(11368),r=a(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const l=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+l:l}(e,t,a,n)}}function l(t,e={}){const{withBaseUrl:a}=i();return a(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),i="/"===r||r===n?r:(l=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var i=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},16312:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return k},contentTitle:function(){return h},metadata:function(){return g},toc:function(){return _},default:function(){return b}});var n=a(3905),r=a(39130),i=a(43861),l=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&d(t,a,e[a]);if(c)for(var a of c(e))u.call(e,a)&&d(t,a,e[a]);return t};const k={title:"MVPHeap"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_m_v_p_heap",id:"api/classes/classtouchgfx_1_1_m_v_p_heap",isDocsHomePage:!1,title:"MVPHeap",description:"Generic heap class for MVP applications.",source:"@site/docs/api/classes/classtouchgfx_1_1_m_v_p_heap.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_m_v_p_heap",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_m_v_p_heap",tags:[],version:"current",frontMatter:{title:"MVPHeap"},sidebar:"docs",previous:{title:"MVPApplication",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_m_v_p_application"},next:{title:"NoDMA",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_no_d_m_a"}},_=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"MVPHeap",id:"mvpheap",children:[],level:3},{value:"~MVPHeap",id:"mvpheap-1",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"frontendApplication",id:"frontendapplication",children:[],level:3},{value:"presenterStorage",id:"presenterstorage",children:[],level:3},{value:"screenStorage",id:"screenstorage",children:[],level:3},{value:"transitionStorage",id:"transitionstorage",children:[],level:3}],level:2}],f={toc:_};function b(t){var e,a=t,{components:l}=a,d=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&c)for(var n of c(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=m(m({},f),d),o(e,p({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Generic heap class for MVP applications.\nServes as a way of obtaining the memory storage areas for presenters, screens, transitions and the concrete application."),(0,n.kt)("p",null,"Subclassed by an application-specific heap which provides the actual storage areas. This generic interface is used only in makeTransition. "),(0,n.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#function-mvpheap",mdxType:"Link"},"MVPHeap")),"(",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & pres, ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & scr, ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & tra, ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," & app)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_heap"}),"MVPHeap")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#function-~mvpheap",mdxType:"Link"},"~MVPHeap")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_heap"}),"MVPHeap")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#variable-frontendapplication",mdxType:"Link"},"frontendApplication")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A reference to the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," instance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#variable-presenterstorage",mdxType:"Link"},"presenterStorage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest presenter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#variable-screenstorage",mdxType:"Link"},"screenStorage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#variable-transitionstorage",mdxType:"Link"},"transitionStorage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest transition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#function-mvpheap",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"mvpheap"}),"MVPHeap"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#function-mvpheap",mdxType:"Link"},"MVPHeap")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"pres ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"scr ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"tra ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"app"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_m_v_p_heap"}),"MVPHeap")," class. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"pres"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest presenter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"scr"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"tra"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest transition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"app"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A reference to the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," instance."))))))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#function-~mvpheap",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"mvpheap-1"}),"~MVPHeap"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#function-~mvpheap",mdxType:"Link"},"~MVPHeap")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_m_v_p_heap"}),"MVPHeap")," class. "))),(0,n.kt)("h2",m({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#variable-frontendapplication",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"frontendapplication"}),"frontendApplication"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," & frontendApplication ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"A reference to the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," instance. "))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#variable-presenterstorage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"presenterstorage"}),"presenterStorage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & presenterStorage ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"A memory partition containing enough memory to hold the largest presenter. "))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#variable-screenstorage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"screenstorage"}),"screenStorage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & screenStorage ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"A memory partition containing enough memory to hold the largest view. "))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#variable-transitionstorage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"transitionstorage"}),"transitionStorage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & transitionStorage ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"A memory partition containing enough memory to hold the largest transition. "))))}b.isMDXComponent=!0}}]);