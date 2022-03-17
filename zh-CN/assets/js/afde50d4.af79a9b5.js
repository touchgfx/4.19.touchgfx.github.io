"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4749],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43861:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:e})}}t.Z=a},39130:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),c=r(84487);const s=(0,n.createContext)({collectLink:()=>{}});var l=r(25026),u=r(67023),p=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&_(e,r,t[r]);if(h)for(var r of h(t))m.call(t,r)&&_(e,r,t[r]);return e};var k=function(e){var t,r=e,{isNavLink:p,to:_,href:k,activeClassName:g,isActive:y,"data-noBrokenLinkCheck":O,autoAddBaseUrl:x=!0}=r,w=((e,t)=>{var r={};for(var n in e)b.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:N,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,l.C)(),T=(0,n.useContext)(s),S=_||k,C=(0,o.Z)(S),D=null==S?void 0:S.replace("pathname://","");let E=void 0!==D?(A=D,x&&(e=>e.startsWith("/"))(A)?j(A):A):void 0;var A;E&&C&&(E=(0,u.applyTrailingSlash)(E,{trailingSlash:N,baseUrl:P}));const U=(0,n.useRef)(!1),Z=p?a.OL:a.rU,L=c.Z.canUseIntersectionObserver,M=(0,n.useRef)();(0,n.useEffect)((()=>(!L&&C&&null!=E&&window.docusaurus.prefetch(E),()=>{L&&M.current&&M.current.disconnect()})),[M,E,L,C]);const B=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,I=!E||!C||B;return E&&C&&!B&&!O&&T.collectLink(E),I?n.createElement("a",v(v({href:E},S&&!C&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(Z,v((W=v({},w),d(W,f({onMouseEnter:()=>{U.current||null==E||(window.docusaurus.preload(E),U.current=!0)},innerRef:e=>{var t,r;L&&e&&C&&(t=e,r=()=>{null!=E&&window.docusaurus.prefetch(E)},M.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),r())}))})),M.current.observe(t))},to:E||""}))),p&&{isActive:y,activeClassName:g}));var W}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},67224:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return b},metadata:function(){return m},toc:function(){return _},default:function(){return k}});var n=r(3905),a=r(39130),i=r(43861),o=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&d(e,r,t[r]);return e};const h={title:"ShapePoint"},b=void 0,m={unversionedId:"api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",id:"api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",isDocsHomePage:!1,title:"ShapePoint",description:"Defines an alias for a single point.",source:"@site/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",permalink:"/4.19/zh-CN/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",tags:[],version:"current",frontMatter:{title:"ShapePoint"},sidebar:"docs",previous:{title:"Shape",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_shape"},next:{title:"SlideMenu",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_slide_menu"}},_=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"x",id:"x",children:[],level:3},{value:"y",id:"y",children:[],level:3}],level:2}],v={toc:_};function k(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},v),d),c(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Defines an alias for a single point.\nUsers of the ",(0,n.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_abstract_shape"}),"AbstractShape")," can chose to store the coordinates as int or float depending on the needs. This will help setting up the abstractShape very easily using setAbstractShape()."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T")," Generic type parameter, either int or float.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_abstract_shape#function-setshape"}),"setShape")),(0,n.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"T"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-x",mdxType:"Link"},"x")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The x coordinate of the points.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"T"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-y",mdxType:"Link"},"y")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The y coordinate of the points.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-x",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"x"}),"x"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"T x ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The x coordinate of the points. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-y",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"y"}),"y"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"T y ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The y coordinate of the points. "))))}k.isMDXComponent=!0}}]);