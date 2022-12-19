"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9449],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},c=Object.keys(t);for(a=0;a<c.length;a++)r=c[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)r=c[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),u=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,c=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(r),b=n,f=s["".concat(l,".").concat(b)]||s[b]||d[b]||c;return r?a.createElement(f,i(i({ref:e},p),{},{components:r})):a.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=r.length,i=new Array(c);i[0]=b;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},43861:function(t,e,r){var a=r(67294);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},10480:function(t,e,r){r.r(e),r.d(e,{assets:function(){return h},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return f},metadata:function(){return _},toc:function(){return y}});var a=r(3905),n=r(39130),c=r(43861),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,b=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&d(t,r,e[r]);if(u)for(var r of u(e))s.call(e,r)&&d(t,r,e[r]);return t};const f={title:"CacheTableEntry"},m=void 0,_={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",title:"CacheTableEntry",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",permalink:"/4.19/zh-CN/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",draft:!1,tags:[],version:"current",frontMatter:{title:"CacheTableEntry"},sidebar:"docs",previous:{title:"CacheableContainer",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_cacheable_container"},next:{title:"Callback",permalink:"/4.19/zh-CN/docs/api/classes/structtouchgfx_1_1_callback"}},h={},y=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"data",id:"data",level:3}],g={toc:y};function k(t){var e,r=t,{components:i}=r,d=((t,e)=>{var r={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&s.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=b(b({},g),d),o(e,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Cache bookkeeping. "),(0,a.kt)("h2",b({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:"right"})),(0,a.kt)("th",b({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"}),"uint8_t *"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_cache_table_entry#variable-data",mdxType:"Link"},"data")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"})),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Pointer to location of image data for this ",(0,a.kt)("a",b({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," in the cache. 0 if bitmap not cached.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"})),(0,a.kt)("td",b({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",b({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(c.Z,{url:"structtouchgfx_1_1_bitmap_1_1_cache_table_entry#variable-data",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",b({},{id:"data"}),"data"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t * data ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Pointer to location of image data for this ",(0,a.kt)("a",b({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," in the cache. 0 if bitmap not cached. "))))}k.isMDXComponent=!0}}]);