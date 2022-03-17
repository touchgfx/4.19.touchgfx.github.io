"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6696],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},_={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(a),k=r,s=d["".concat(c,".").concat(k)]||d[k]||_[k]||l;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,a){a.d(e,{Z:function(){return f}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),o=a(84487);const c=(0,n.createContext)({collectLink:()=>{}});var p=a(25026),u=a(67023),_=Object.defineProperty,d=Object.defineProperties,k=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,N=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&g(t,a,e[a]);if(s)for(var a of s(e))h.call(e,a)&&g(t,a,e[a]);return t};var f=function(t){var e,a=t,{isNavLink:_,to:g,href:f,activeClassName:b,isActive:v,"data-noBrokenLinkCheck":y,autoAddBaseUrl:w=!0}=a,x=((t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&s)for(var n of s(t))e.indexOf(n)<0&&h.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:q,baseUrl:O}}=(0,l.Z)(),{withBaseUrl:Q}=(0,p.C)(),T=(0,n.useContext)(c),P=g||f,j=(0,i.Z)(P),Z=null==P?void 0:P.replace("pathname://","");let L=void 0!==Z?(C=Z,w&&(t=>t.startsWith("/"))(C)?Q(C):C):void 0;var C;L&&j&&(L=(0,u.applyTrailingSlash)(L,{trailingSlash:q,baseUrl:O}));const D=(0,n.useRef)(!1),E=_?r.OL:r.rU,S=o.Z.canUseIntersectionObserver,M=(0,n.useRef)();(0,n.useEffect)((()=>(!S&&j&&null!=L&&window.docusaurus.prefetch(L),()=>{S&&M.current&&M.current.disconnect()})),[M,L,S,j]);const U=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,R=!L||!j||U;return L&&j&&!U&&!y&&T.collectLink(L),R?n.createElement("a",N(N({href:L},P&&!j&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(E,N((A=N({},x),d(A,k({onMouseEnter:()=>{D.current||null==L||(window.docusaurus.preload(L),D.current=!0)},innerRef:t=>{var e,a;S&&t&&j&&(e=t,a=()=>{null!=L&&window.docusaurus.prefetch(L)},M.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.current.unobserve(e),M.current.disconnect(),a())}))})),M.current.observe(e))},to:L||""}))),_&&{isActive:v,activeClassName:b}));var A}},35096:function(t,e,a){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),l="/"===r||r===n?r:(i=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},43312:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return g},default:function(){return f}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&d(t,a,e[a]);if(p)for(var a of p(e))_.call(e,a)&&d(t,a,e[a]);return t};const s={title:"Q10"},m=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10",id:"api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10",isDocsHomePage:!1,title:"Q10",description:'Defines a "floating point number" with 10 bits reserved for the fractional part of the decimal number.',source:"@site/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10",tags:[],version:"current",frontMatter:{title:"Q10"},sidebar:"docs",previous:{title:"Presenter",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_presenter"},next:{title:"Q15",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15"}},g=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"operator int",id:"operator-int",children:[],level:3},{value:"operator*",id:"operator",children:[],level:3},{value:"operator+",id:"operator-1",children:[],level:3},{value:"operator-",id:"operator-",children:[],level:3},{value:"operator/",id:"operator-2",children:[],level:3},{value:"Q10",id:"q10",children:[],level:3},{value:"Q10",id:"q10-1",children:[],level:3},{value:"to",id:"to",children:[],level:3}],level:2}],N={toc:g};function f(t){var e,a=t,{components:i}=a,d=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&_.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},N),d),o(e,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,' Defines a "floating point number" with 10 bits reserved for the fractional part of the decimal number.\n',(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," implements some simple arithmetic operations, most yielding a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," number and some yielding a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," number or a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," number as a result."),(0,n.kt)("p",null,"Q5*Q5=",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),", Q10/Q5=",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5"),", ..."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5"),", ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator int",mdxType:"Link"},"operator int")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Gets the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," as an integer without conversion.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator*",mdxType:"Link"},"operator*")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," & q5) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Multiplication operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator+",mdxType:"Link"},"operator+")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," & q10) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Addition operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator-",mdxType:"Link"},"operator-")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Negation operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator/",mdxType:"Link"},"operator/")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," & q5) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Division operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"Link"},"Q10")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"Link"},"Q10")),"(int i)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Constructor from integer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"template \\","<","typename T \\",">",(0,n.kt)("br",null),"T"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-to",mdxType:"Link"},"to")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Converts the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value to an int or a float.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator int",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-int"}),"operator int"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator int",mdxType:"Link"},"operator int")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," as an integer without conversion. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The unconverted ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator*",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator"}),"operator*"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q15","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator*",mdxType:"Link"},"operator*")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Multiplication operator. "),(0,n.kt)("p",null,"The result is a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15"),", not a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),", for increased precision."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," to multiply this with."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator+",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-1"}),"operator+"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q10","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator+",mdxType:"Link"},"operator+")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q10"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Addition operator. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q10"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," to add to this."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator-",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-"}),"operator-"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q10","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator-",mdxType:"Link"},"operator-")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Negation operator. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The negative value of this. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator/",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-2"}),"operator/"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q5","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-operator/",mdxType:"Link"},"operator/")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Division operator. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," to divide this by."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"q10"}),"Q10"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"Link"},"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," class. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"q10-1"}),"Q10"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"explicit","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-q10",mdxType:"Link"},"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Constructor from integer. "),(0,n.kt)("p",null,"No conversion is done - the integer is assumed to already be in ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," format."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int pre-formattet in ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," format."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-to",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"to"}),"to"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"T","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q10#function-to",mdxType:"Link"},"to")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Converts the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value to an int or a float. "),(0,n.kt)("p",null,"Convert the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value to an integer by removing the 10 bits used for the fraction, or to a floating point value by dividing by 32 * 32, depending on the type specified as T."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Template Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Either int or float."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")," value as a type T. ")))))}f.isMDXComponent=!0}}]);