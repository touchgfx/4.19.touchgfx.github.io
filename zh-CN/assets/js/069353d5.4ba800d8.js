"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7995],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),d=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(r),k=a,m=u["".concat(c,".").concat(k)]||u[k]||s[k]||i;return r?n.createElement(m,o(o({ref:e},p),{},{components:r})):n.createElement(m,o({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},43861:function(t,e,r){var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},68802:function(t,e,r){r.r(e),r.d(e,{assets:function(){return h},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return b}});var n=r(3905),a=r(39130),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&s(t,r,e[r]);if(d)for(var r of d(e))u.call(e,r)&&s(t,r,e[r]);return t};const m={title:"Point3D"},f=void 0,g={unversionedId:"api/classes/structtouchgfx_1_1_point3_d",id:"api/classes/structtouchgfx_1_1_point3_d",title:"Point3D",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_point3_d.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_point3_d",permalink:"/4.19/zh-CN/docs/api/classes/structtouchgfx_1_1_point3_d",draft:!1,tags:[],version:"current",frontMatter:{title:"Point3D"},sidebar:"docs",previous:{title:"Point",permalink:"/4.19/zh-CN/docs/api/classes/structtouchgfx_1_1_point"},next:{title:"Point4",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_point4"}},h={},b=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"U",id:"u",level:3},{value:"V",id:"v",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3}],v={toc:b};function y(t){var e,r=t,{components:o}=r,s=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=k(k({},v),s),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A 3D point. "),(0,n.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-u",mdxType:"Link"},"U")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The U coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-v",mdxType:"Link"},"V")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The V coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-x",mdxType:"Link"},"X")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The X coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-y",mdxType:"Link"},"Y")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The Y coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-z",mdxType:"Link"},"Z")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The Z coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-u",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"u"}),"U"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float U ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The U coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-v",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"v"}),"V"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float V ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The V coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-x",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"x"}),"X"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")," X ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The X coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-y",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"y"}),"Y"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")," Y ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The Y coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-z",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"z"}),"Z"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float Z ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The Z coordinate. "))))}y.isMDXComponent=!0}}]);