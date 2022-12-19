"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1476],{3905:function(t,a,e){e.d(a,{Zo:function(){return p},kt:function(){return _}});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var d=r.createContext({}),c=function(t){var a=r.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=c(t.components);return r.createElement(d.Provider,{value:a},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(e),s=n,_=m["".concat(d,".").concat(s)]||m[s]||u[s]||i;return e?r.createElement(_,o(o({ref:a},p),{},{components:e})):r.createElement(_,o({ref:a},p))}));function _(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,o=new Array(i);o[0]=s;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=t,l[m]="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=e[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}s.displayName="MDXCreateElement"},43861:function(t,a,e){var r=e(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=n},11787:function(t,a,e){e.r(a),e.d(a,{assets:function(){return h},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return _},metadata:function(){return b},toc:function(){return f}});var r=e(3905),n=e(39130),i=e(43861),o=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(t,a,e)=>a in t?o(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,s=(t,a)=>{for(var e in a||(a={}))p.call(a,e)&&u(t,e,a[e]);if(c)for(var e of c(a))m.call(a,e)&&u(t,e,a[e]);return t};const _={title:"DynamicBitmapData"},k=void 0,b={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data",title:"DynamicBitmapData",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data",permalink:"/4.19/ko/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data",draft:!1,tags:[],version:"current",frontMatter:{title:"DynamicBitmapData"},sidebar:"docs",previous:{title:"DrawTextureMapScanLineBase",permalink:"/4.19/ko/docs/api/classes/classtouchgfx_1_1_l_c_d_1_1_draw_texture_map_scan_line_base"},next:{title:"DynamicDataGraph",permalink:"/4.19/ko/docs/api/classes/classtouchgfx_1_1_dynamic_data_graph"}},h={},f=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"customSubformat",id:"customsubformat",level:3},{value:"extra",id:"extra",level:3},{value:"format",id:"format",level:3},{value:"height",id:"height",level:3},{value:"inuse",id:"inuse",level:3},{value:"solid",id:"solid",level:3},{value:"width",id:"width",level:3}],g={toc:f};function y(t){var a,e=t,{components:o}=e,u=((t,a)=>{var e={};for(var r in t)p.call(t,r)&&a.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&c)for(var r of c(t))a.indexOf(r)<0&&m.call(t,r)&&(e[r]=t[r]);return e})(e,["components"]);return(0,r.kt)("wrapper",(a=s(s({},g),u),l(a,d({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Data of a dynamic Bitmap. "),(0,r.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-customsubformat",mdxType:"Link"},"customSubformat")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Custom format specifier (or L8 palette length)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-extra",mdxType:"Link"},"extra")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Extra data field, dependent on format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-format",mdxType:"Link"},"format")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Determine the format of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-height",mdxType:"Link"},"height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The height of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-inuse",mdxType:"Link"},"inuse")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Zero if not in use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-solid",mdxType:"Link"},"solid")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The solidRect of this ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-width",mdxType:"Link"},"width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The width of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-customsubformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"customsubformat"}),"customSubformat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t customSubformat ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Custom format specifier (or L8 palette length) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-extra",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"extra"}),"extra"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t extra ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Extra data field, dependent on format. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-format",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"format"}),"format"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t format ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Determine the format of the data. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"height"}),"height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-inuse",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"inuse"}),"inuse"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t inuse ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Zero if not in use. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-solid",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solid"}),"solid"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," solid ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The solidRect of this ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"width"}),"width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))))}y.isMDXComponent=!0}}]);