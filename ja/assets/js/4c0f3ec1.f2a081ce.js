"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9805],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),m=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=m(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=m(r),p=a,f=s["".concat(c,".").concat(p)]||s[p]||d[p]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function p(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43861:function(t,e,r){var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},97695:function(t,e,r){r.r(e),r.d(e,{assets:function(){return b},contentTitle:function(){return _},default:function(){return v},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return h}});var n=r(3905),a=r(39130),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,p=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&s(t,r,e[r]);if(m)for(var r of m(e))d.call(e,r)&&s(t,r,e[r]);return t};const f={title:"VideoInformation"},_=void 0,k={unversionedId:"api/classes/structtouchgfx_1_1_video_information",id:"api/classes/structtouchgfx_1_1_video_information",title:"VideoInformation",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_video_information.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_video_information",permalink:"/4.19/ja/docs/api/classes/structtouchgfx_1_1_video_information",tags:[],version:"current",frontMatter:{title:"VideoInformation"},sidebar:"docs",previous:{title:"VideoDataReader",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_video_data_reader"},next:{title:"VideoWidget",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_video_widget"}},b={},h=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"frame_height",id:"frame_height",level:3},{value:"frame_width",id:"frame_width",level:3},{value:"ms_between_frames",id:"ms_between_frames",level:3},{value:"number_of_frames",id:"number_of_frames",level:3}],g={toc:h};function v(t){var e,r=t,{components:o}=r,s=((t,e)=>{var r={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&d.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=p(p({},g),s),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This type contains various information read from a video file. "),(0,n.kt)("h2",p({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:"right"})),(0,n.kt)("th",p({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-frame_height",mdxType:"Link"},"frame_height")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"})),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The frame height in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"})),(0,n.kt)("td",p({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-frame_width",mdxType:"Link"},"frame_width")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"})),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The frame width in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"})),(0,n.kt)("td",p({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-ms_between_frames",mdxType:"Link"},"ms_between_frames")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"})),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The number of milliseconds between frames.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"})),(0,n.kt)("td",p({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-number_of_frames",mdxType:"Link"},"number_of_frames")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"})),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The number of frames in the movie.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"right"})),(0,n.kt)("td",p({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",p({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-frame_height",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",p({},{id:"frame_height"}),"frame_height"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t frame_height ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The frame height in pixels. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-frame_width",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",p({},{id:"frame_width"}),"frame_width"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t frame_width ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The frame width in pixels. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-ms_between_frames",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",p({},{id:"ms_between_frames"}),"ms_between_frames"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t ms_between_frames ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of milliseconds between frames. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-number_of_frames",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",p({},{id:"number_of_frames"}),"number_of_frames"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t number_of_frames ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of frames in the movie. "))))}v.isMDXComponent=!0}}]);