"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1495],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(n),k=a,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||o;return n?r.createElement(m,l(l({ref:e},p),{},{components:n})):r.createElement(m,l({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43861:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},39130:function(t,e,n){n.d(e,{Z:function(){return N}});var r=n(67294),a=n(73727),o=n(11368),l=n(35096),i=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),p=n(67023),d=Object.defineProperty,s=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&h(t,n,e[n]);if(m)for(var n of m(e))f.call(e,n)&&h(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:d,to:h,href:N,activeClassName:y,isActive:v,"data-noBrokenLinkCheck":_,autoAddBaseUrl:w=!0}=n,x=((t,e)=>{var n={};for(var r in t)g.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&f.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:C}}=(0,o.Z)(),{withBaseUrl:P}=(0,u.C)(),T=(0,r.useContext)(c),j=h||N,L=(0,l.Z)(j),D=null==j?void 0:j.replace("pathname://","");let Z=void 0!==D?(E=D,w&&(t=>t.startsWith("/"))(E)?P(E):E):void 0;var E;Z&&L&&(Z=(0,p.applyTrailingSlash)(Z,{trailingSlash:O,baseUrl:C}));const B=(0,r.useRef)(!1),S=d?a.OL:a.rU,U=i.Z.canUseIntersectionObserver,R=(0,r.useRef)();(0,r.useEffect)((()=>(!U&&L&&null!=Z&&window.docusaurus.prefetch(Z),()=>{U&&R.current&&R.current.disconnect()})),[R,Z,U,L]);const I=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,A=!Z||!L||I;return Z&&L&&!I&&!_&&T.collectLink(Z),A?r.createElement("a",b(b({href:Z},j&&!L&&{target:"_blank",rel:"noopener noreferrer"}),x)):r.createElement(S,b((F=b({},x),s(F,k({onMouseEnter:()=>{B.current||null==Z||(window.docusaurus.preload(Z),B.current=!0)},innerRef:t=>{var e,n;U&&t&&L&&(e=t,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},R.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(R.current.unobserve(e),R.current.disconnect(),n())}))})),R.current.observe(e))},to:Z||""}))),d&&{isActive:v,activeClassName:y}));var F}},35096:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){n.d(e,{C:function(){return o},Z:function(){return l}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+l:l}(e,t,n,r)}}function l(t,e={}){const{withBaseUrl:n}=o();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),o="/"===a||a===r?a:(l=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(a,o)}},67023:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},8736:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return h},default:function(){return N}});var r=n(3905),a=n(39130),o=n(43861),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&s(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&s(t,n,e[n]);return t};const m={title:"colortype"},g=void 0,f={unversionedId:"api/classes/structtouchgfx_1_1colortype",id:"api/classes/structtouchgfx_1_1colortype",isDocsHomePage:!1,title:"colortype",description:"This type can contain a color value.",source:"@site/docs/api/classes/structtouchgfx_1_1colortype.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1colortype",permalink:"/4.19/docs/api/classes/structtouchgfx_1_1colortype",tags:[],version:"current",frontMatter:{title:"colortype"},sidebar:"docs",previous:{title:"Color",permalink:"/4.19/docs/api/classes/classtouchgfx_1_1_color"},next:{title:"ConstFont",permalink:"/4.19/docs/api/classes/classtouchgfx_1_1_const_font"}},h=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"colortype",id:"colortype",children:[],level:3},{value:"colortype",id:"colortype-1",children:[],level:3},{value:"getColor32",id:"getcolor32",children:[],level:3},{value:"operator uint32_t",id:"operator-uint32_t",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"color",id:"color",children:[],level:3}],level:2}],b={toc:h};function N(t){var e,n=t,{components:l}=n,s=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=k(k({},b),s),i(e,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," This type can contain a color value.\nNote that in order to maintain backwards compatibility, casting this type to an integral value will yield a 16-bit value. To extract a 24/32-bit color from this type, use the getColor32 function. "),(0,r.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:"right"})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Default constructor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),"(uint32_t col)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Constructor which creates a colortype with the given color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION uint32_t"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"Link"},"getColor32")),"() const")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Gets color as a 32bit value suitable for passing to ",(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getred"}),"Color::getRed()"),", ",(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getgreen"}),"Color::getGreen()")," and ",(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getblue"}),"Color::getBlue()")," which will handle all bitdeptchs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"Link"},"operator uint32_t")),"() const")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Cast that converts the given colortype to an uint32_t.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:"right"})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"uint32_t"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#variable-color",mdxType:"Link"},"color")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"The color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#function-colortype",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"colortype"}),"colortype"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Default constructor. "),(0,r.kt)("p",null,"Creates a black (0) color. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#function-colortype",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"colortype-1"}),"colortype"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"uint32_t"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"col"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Constructor which creates a colortype with the given color. "),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getcolorfrom24bitrgb"}),"Color::getColorFrom24BitRGB()")," to create a color that will work on your selected ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," type."),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"col"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"The color."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getcolorfrom24bitrgb"}),"Color::getColorFrom24BitRGB"))))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"getcolor32"}),"getColor32"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint32_t","\xa0",(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"Link"},"getColor32")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets color as a 32bit value suitable for passing to ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getred"}),"Color::getRed()"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getgreen"}),"Color::getGreen()")," and ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getblue"}),"Color::getBlue()")," which will handle all bitdeptchs. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The color 32.")),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getred"}),"Color::getRed"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getgreen"}),"Color::getGreen"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getblue"}),"Color::getBlue"))))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"operator-uint32_t"}),"operator uint32_t"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"Link"},"operator uint32_t")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Cast that converts the given colortype to an uint32_t. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The result of the operation. ")))),(0,r.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#variable-color",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"color"}),"color"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint32_t color ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The color. "))))}N.isMDXComponent=!0}}]);