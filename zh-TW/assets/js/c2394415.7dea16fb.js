"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4591],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return a?n.createElement(g,l(l({ref:e},d),{},{components:a})):n.createElement(g,l({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},7613:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return k},default:function(){return _},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return N}});var n=a(3905),r=a(39130),i=a(43861),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&m(t,a,e[a]);if(u)for(var a of u(e))p.call(e,a)&&m(t,a,e[a]);return t};const g={title:"CanvasWidgetRenderer"},k=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_canvas_widget_renderer",id:"api/classes/classtouchgfx_1_1_canvas_widget_renderer",title:"CanvasWidgetRenderer",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_canvas_widget_renderer.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_canvas_widget_renderer",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_canvas_widget_renderer",tags:[],version:"current",frontMatter:{title:"CanvasWidgetRenderer"},sidebar:"docs",previous:{title:"CanvasWidget",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_canvas_widget"},next:{title:"Circle",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_circle"}},h={},N=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"getMissingBufferSize",id:"getmissingbuffersize",level:3},{value:"getUsedBufferSize",id:"getusedbuffersize",level:3},{value:"getWriteMemoryUsageReport",id:"getwritememoryusagereport",level:3},{value:"setupBuffer",id:"setupbuffer",level:3},{value:"setWriteMemoryUsageReport",id:"setwritememoryusagereport",level:3}],b={toc:N};function _(t){var e,a=t,{components:l}=a,m=((t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=c(c({},b),m),o(e,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Class for supporting drawing of figures.\nThis class holds the memory which is used by the underlying algorithms. ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget")," will not allocate memory dynamically, but will use memory from the buffer passed to ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer"),". When using the TouchGFX simulator, it is also possible to get a report on the actual amount of memory used for drawing with ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer")," to help adjusting the buffer size."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_widget"}),"Widget"),", ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer#function-setwritememoryusagereport"}),"setWriteMemoryUsageReport"),", ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer#function-getwritememoryusagereport"}),"getWriteMemoryUsageReport")),(0,n.kt)("h2",c({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"unsigned"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getmissingbuffersize",mdxType:"Link"},"getMissingBufferSize")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Calculate how much memory was required by CanvasWidgets, but was unavailable.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"unsigned"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getusedbuffersize",mdxType:"Link"},"getUsedBufferSize")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Calculate how much memory has been required by CanvasWidgets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"bool"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getwritememoryusagereport",mdxType:"Link"},"getWriteMemoryUsageReport")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Gets write memory usage report flag.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer",mdxType:"Link"},"setupBuffer")),"(uint8_t * buffer, unsigned bufferSize)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Setup the buffers used by ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-setwritememoryusagereport",mdxType:"Link"},"setWriteMemoryUsageReport")),"(bool writeUsageReport)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Memory reporting.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-getmissingbuffersize",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"getmissingbuffersize"}),"getMissingBufferSize"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"static","\xa0","unsigned","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getmissingbuffersize",mdxType:"Link"},"getMissingBufferSize")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Calculate how much memory was required by CanvasWidgets, but was unavailable. "),(0,n.kt)("p",null,"If the value returned is greater than 0 it means the This can be used to fine tune the size of the buffer passed to ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer")," upon initialization."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The number of bytes required. ")))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-getusedbuffersize",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"getusedbuffersize"}),"getUsedBufferSize"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"static","\xa0","unsigned","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getusedbuffersize",mdxType:"Link"},"getUsedBufferSize")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Calculate how much memory has been required by CanvasWidgets. "),(0,n.kt)("p",null,"This can be used to fine tune the size of the buffer passed to ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer")," upon initialization."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The number of bytes required. ")))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-getwritememoryusagereport",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"getwritememoryusagereport"}),"getWriteMemoryUsageReport"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"static","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-getwritememoryusagereport",mdxType:"Link"},"getWriteMemoryUsageReport")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets write memory usage report flag. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true if it CWR writes memory reports, false if not. ")))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"setupbuffer"}),"setupBuffer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer",mdxType:"Link"},"setupBuffer")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"buffer ,"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"unsigned"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bufferSize"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Setup the buffers used by ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget"),". "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"buffer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Buffer reserved for ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bufferSize"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The size of the buffer."))))))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_canvas_widget_renderer#function-setwritememoryusagereport",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"setwritememoryusagereport"}),"setWriteMemoryUsageReport"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas_widget_renderer#function-setwritememoryusagereport",mdxType:"Link"},"setWriteMemoryUsageReport")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"writeUsageReport"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Memory reporting. "),(0,n.kt)("p",null,"Memory reporting can be turned on (and off) using this method. CWR will try to work with the given amount of memory passed when calling ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer"}),"setupBuffer()"),". If the outline of the figure is too complex, this will be reported."),(0,n.kt)("p",null,'"CWR requires X bytes" means that X bytes is the highest number of bytes required by CWR so far, but since the size of the invalidated area and the shape of things draw can influence this, this may be reported several times with a higher and higher number. Leave your app running for a long time to find out what the memory requirements are.'),(0,n.kt)("p",null,'"CWR requires X bytes (Y bytes missing)" means the same as the report above, but there as was not enough memory to render the entire shape. To get around this, CWR will split the shape into two separate drawings of half size. This means that less memory is required, but drawing will be (somewhat) slower. After you see this message all future draws will be split into smaller chunks, so memory requirements might not get as high. This is followed by:'),(0,n.kt)("p",null,'"CWR will split draw into multiple draws due to limited memory." actually just means that CWR will try to work with a smaller amount of memory.'),(0,n.kt)("p",null,'In general, if there is enough memory available to run the simulation and never see the message "CWR will split draw ...", this is preferred. The size of the buffer required will be the highest number X reported as "CWR requires X bytes". Good numbers can also be around half of X.'),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"writeUsageReport"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"true to write report."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer#function-setupbuffer"}),"setupBuffer"))))))}_.isMDXComponent=!0}}]);