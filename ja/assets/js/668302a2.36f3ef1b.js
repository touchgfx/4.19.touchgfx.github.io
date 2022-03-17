"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6586],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},39130:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var d=n(25026),u=n(67023),s=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&v(e,n,t[n]);return e};var w=function(e){var t,n=e,{isNavLink:s,to:v,href:w,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":N,autoAddBaseUrl:O=!0}=n,x=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:C,baseUrl:E}}=(0,o.Z)(),{withBaseUrl:M}=(0,d.C)(),W=(0,r.useContext)(c),j=v||w,P=(0,i.Z)(j),T=null==j?void 0:j.replace("pathname://","");let B=void 0!==T?(_=T,O&&(e=>e.startsWith("/"))(_)?M(_):_):void 0;var _;B&&P&&(B=(0,u.applyTrailingSlash)(B,{trailingSlash:C,baseUrl:E}));const S=(0,r.useRef)(!1),Z=s?a.OL:a.rU,D=l.Z.canUseIntersectionObserver,I=(0,r.useRef)();(0,r.useEffect)((()=>(!D&&P&&null!=B&&window.docusaurus.prefetch(B),()=>{D&&I.current&&I.current.disconnect()})),[I,B,D,P]);const A=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,U=!B||!P||A;return B&&P&&!A&&!N&&W.collectLink(B),U?r.createElement("a",k(k({href:B},j&&!P&&{target:"_blank",rel:"noopener noreferrer"}),x)):r.createElement(Z,k((F=k({},x),p(F,m({onMouseEnter:()=>{S.current||null==B||(window.docusaurus.preload(B),S.current=!0)},innerRef:e=>{var t,n;D&&e&&P&&(t=e,n=()=>{null!=B&&window.docusaurus.prefetch(B)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:B||""}))),s&&{isActive:y,activeClassName:b}));var F}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},10973:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return w},metadata:function(){return b},toc:function(){return y},default:function(){return O}});var r=n(3905),a=n(44035),o=n(29415),i=n(37793),l=n(31217),c=n(39130),d=n(22425),u=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&g(e,n,t[n]);return e};const k={id:"modal-window",title:"Modal Window\uff08\u30e2\u30fc\u30c0\u30eb\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\uff09"},w=void 0,b={unversionedId:"development/ui-development/ui-components/containers/modal-window",id:"development/ui-development/ui-components/containers/modal-window",isDocsHomePage:!1,title:"Modal Window\uff08\u30e2\u30fc\u30c0\u30eb\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\uff09",description:"Modal Window\u306f\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u8868\u793a\u3059\u308bContainer\u30bf\u30a4\u30d7\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3001\u305d\u306e\u4e0b\u306b\u3042\u308b\u30d3\u30e5\u30fc\u3068\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3078\u306e\u30bf\u30c3\u30c1\uff65\u30a4\u30d9\u30f3\u30c8\u3092\u30d6\u30ed\u30c3\u30af\u3057\u307e\u3059\u3002 \u30e2\u30fc\u30c0\u30eb\u30a6\u30a3\u30f3\u30c9\u30a6\u306f\u3001\u80cc\u666f\u306eImage\u3068\u3001\u305d\u306e\u4e0b\u306b\u3042\u308b\u30d3\u30e5\u30fc\u3068\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8986\u3046\u30b7\u30a7\u30fc\u30c9\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308bBox\u3067\u69cb\u6210\u3055\u308c\u3001\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u8abf\u6574\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30e2\u30fc\u30c0\u30eb\u30a6\u30a3\u30f3\u30c9\u30a6\u306f\u753b\u9762\u3044\u3063\u3071\u3044\u306b\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u5e38\u306b\u6700\u5f8c\u306e\u8981\u7d20\u3068\u3057\u3066\u8ffd\u52a0\u3057\u3001\u4ed6\u306e\u3059\u3079\u3066\u306e\u8981\u7d20\u306e\u4e0a\u306b\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/modal-window.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/modal-window",permalink:"/4.19/ja/docs/development/ui-development/ui-components/containers/modal-window",tags:[],version:"current",frontMatter:{id:"modal-window",title:"Modal Window\uff08\u30e2\u30fc\u30c0\u30eb\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\uff09"},sidebar:"docs",previous:{title:"List Layout\uff08\u30ea\u30b9\u30c8\uff65\u30ec\u30a4\u30a2\u30a6\u30c8\uff09",permalink:"/4.19/ja/docs/development/ui-development/ui-components/containers/list-layout"},next:{title:"Scroll List\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30ea\u30b9\u30c8\uff09",permalink:"/4.19/ja/docs/development/ui-development/ui-components/containers/scroll-list"}},y=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",children:[],level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",children:[],level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",children:[{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",children:[],level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",children:[],level:3}],level:2},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",children:[],level:2},{value:"\u4f8b",id:"examples",children:[{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",children:[],level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API\u53c2\u7167",id:"api-reference",children:[],level:2}],N={toc:y};function O(e){var t,n=e,{components:u}=n,g=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},N),g),s(t,p({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Modal Window\u306f\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u8868\u793a\u3059\u308b",(0,r.kt)("a",v({parentName:"p"},{href:"container"}),"Container"),"\u30bf\u30a4\u30d7\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3001\u305d\u306e\u4e0b\u306b\u3042\u308b\u30d3\u30e5\u30fc\u3068\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3078\u306e\u30bf\u30c3\u30c1\uff65\u30a4\u30d9\u30f3\u30c8\u3092\u30d6\u30ed\u30c3\u30af\u3057\u307e\u3059\u3002 \u30e2\u30fc\u30c0\u30eb\u30a6\u30a3\u30f3\u30c9\u30a6\u306f\u3001\u80cc\u666f\u306e",(0,r.kt)("a",v({parentName:"p"},{href:"../images/image"}),"Image"),"\u3068\u3001\u305d\u306e\u4e0b\u306b\u3042\u308b\u30d3\u30e5\u30fc\u3068\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8986\u3046\u30b7\u30a7\u30fc\u30c9\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b",(0,r.kt)("a",v({parentName:"p"},{href:"../shapes/box"}),"Box"),"\u3067\u69cb\u6210\u3055\u308c\u3001\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u8abf\u6574\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30e2\u30fc\u30c0\u30eb\u30a6\u30a3\u30f3\u30c9\u30a6\u306f\u753b\u9762\u3044\u3063\u3071\u3044\u306b\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u5e38\u306b\u6700\u5f8c\u306e\u8981\u7d20\u3068\u3057\u3066\u8ffd\u52a0\u3057\u3001\u4ed6\u306e\u3059\u3079\u3066\u306e\u8981\u7d20\u306e\u4e0a\u306b\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-appearance.gif",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bModal Window"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,"Modal Window\u306f\u3001TouchGFX Designer\u306eContainers\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eModal Window"),(0,r.kt)("h2",v({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("p",null,"TouchGFX Designer\u306eModal Window\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e",(0,r.kt)("em",{parentName:"td"},"\u540d\u524d\u3002")," ",(0,r.kt)("em",{parentName:"td"},"Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Modal Image Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001Modal Window\u5185\u306e\u753b\u50cf\u5de6\u4e0b\u9685\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001Modal Window\u5185\u306eContainer\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"Modal Window\u5185\u306eContainer\u306e\u30b5\u30a4\u30ba\u306f\u3001\u9078\u629e\u3057\u305f\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u304b\u3089\u53d6\u5f97\u3055\u308c\u3001\u753b\u50cf\u3092\u5909\u66f4\u3059\u308b\u4ee5\u5916\u306b\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u753b\u9762\u3092\u4ecb\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u76f8\u4e92\u4f5c\u7528\u3082\u7121\u52b9\u306b\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u753b\u9762\u3092\u4ecb\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u76f8\u4e92\u4f5c\u7528\u3082\u7121\u52b9\u306b\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Window Image\u306f\u3001Modal Window\u304c\u4f7f\u7528\u3059\u308b\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Shade Color\u306f\u3001\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u30b7\u30a7\u30fc\u30c9\u306e\u8272\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Shade Alpha\u306f\u3001\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u30b7\u30a7\u30fc\u30c9\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f0\u301c255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002")))),(0,r.kt)("h2",v({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Modal Window\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",v({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,r.kt)("p",null,"Modal Window\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",v({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,r.kt)("p",null,"Modal Window\u306f",(0,r.kt)("a",v({parentName:"p"},{href:"container"}),"Container"),"\u30bf\u30a4\u30d7\u3067\u3001",(0,r.kt)("a",v({parentName:"p"},{href:"../shapes/box"}),"Box"),"\u3001",(0,r.kt)("a",v({parentName:"p"},{href:"container"}),"Container"),"\u3001",(0,r.kt)("a",v({parentName:"p"},{href:"../images/image"}),"Image"),"\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 Modal Window\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u63cf\u753b\u30c1\u30a7\u30fc\u30f3\u306b\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002 \u3053\u306e\u305f\u3081\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u4e3b\u306b\u5b50\u306e\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u4f8b"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bModal Window\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase() :\n    buttonCallback(this, &mainViewBase::buttonCallbackHandler)\n{\n    modalWindow.setBackground(touchgfx::BitmapId(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_320X240PX_ID), 80, 16);\n    modalWindow.setShadeColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\n    modalWindow.setShadeAlpha(150);\n    modalWindow.hide();\n\n    add(modalWindow);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001ModalWindow\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,r.kt)(l.Z,{mdxType:"InlineCode"},"modalWindow.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,r.kt)("p",null,"Modal Window\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/modal-window-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eModal Window Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u7167"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_modal_window",mdxType:"Link"},"ModalWindow\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}O.isMDXComponent=!0}}]);