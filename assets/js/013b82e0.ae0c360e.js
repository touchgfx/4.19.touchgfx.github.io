"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6384],{3905:function(t,n,e){e.d(n,{Zo:function(){return m},kt:function(){return p}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),c=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=c(t.components);return a.createElement(u.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=c(e),p=r,s=k["".concat(u,".").concat(p)]||k[p]||d[p]||l;return e?a.createElement(s,i(i({ref:n},m),{},{components:e})):a.createElement(s,i({ref:n},m))}));function p(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=e[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},43861:function(t,n,e){var a=e(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=r},97477:function(t,n,e){e.r(n),e.d(n,{assets:function(){return _},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return s},metadata:function(){return N},toc:function(){return h}});var a=e(3905),r=e(39130),l=e(43861),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,k=(t,n,e)=>n in t?i(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,p=(t,n)=>{for(var e in n||(n={}))m.call(n,e)&&k(t,e,n[e]);if(c)for(var e of c(n))d.call(n,e)&&k(t,e,n[e]);return t};const s={title:"MCUInstrumentation"},g=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_m_c_u_instrumentation",id:"api/classes/classtouchgfx_1_1_m_c_u_instrumentation",title:"MCUInstrumentation",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_m_c_u_instrumentation.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_m_c_u_instrumentation",permalink:"/4.19/docs/api/classes/classtouchgfx_1_1_m_c_u_instrumentation",tags:[],version:"current",frontMatter:{title:"MCUInstrumentation"},sidebar:"docs",previous:{title:"Matrix4x4",permalink:"/4.19/docs/api/classes/classtouchgfx_1_1_matrix4x4"},next:{title:"ModalWindow",permalink:"/4.19/docs/api/classes/classtouchgfx_1_1_modal_window"}},_={},h=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"getCCConsumed",id:"getccconsumed",level:3},{value:"getCPUCycles",id:"getcpucycles",level:3},{value:"getElapsedUS",id:"getelapsedus",level:3},{value:"init",id:"init",level:3},{value:"MCUInstrumentation",id:"mcuinstrumentation",level:3},{value:"setCCConsumed",id:"setccconsumed",level:3},{value:"setMCUActive",id:"setmcuactive",level:3},{value:"~MCUInstrumentation",id:"mcuinstrumentation-1",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"cc_consumed",id:"cc_consumed",level:3},{value:"cc_in",id:"cc_in",level:3}],b={toc:h};function f(t){var n,e=t,{components:i}=e,k=((t,n)=>{var e={};for(var a in t)m.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&c)for(var a of c(t))n.indexOf(a)<0&&d.call(t,a)&&(e[a]=t[a]);return e})(e,["components"]);return(0,a.kt)("wrapper",(n=p(p({},b),k),o(n,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Interface for instrumenting processors to measure MCU load via measured CPU cycles. "),(0,a.kt)("h2",p({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"right"})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint32_t"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getccconsumed",mdxType:"Link"},"getCCConsumed")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gets number of consumed clock cycles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getcpucycles",mdxType:"Link"},"getCPUCycles")),"(void ) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gets CPU cycles from register.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getelapsedus",mdxType:"Link"},"getElapsedUS")),"(unsigned int start, unsigned int now, unsigned int clockfrequency) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gets elapsed microseconds based on clock frequency.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-init",mdxType:"Link"},"init")),"() =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Initialize.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-mcuinstrumentation",mdxType:"Link"},"MCUInstrumentation")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_m_c_u_instrumentation"}),"MCUInstrumentation")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-setccconsumed",mdxType:"Link"},"setCCConsumed")),"(uint32_t val)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Sets number of consumed clock cycles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-setmcuactive",mdxType:"Link"},"setMCUActive")),"(bool active)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Sets MCU activity high.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-~mcuinstrumentation",mdxType:"Link"},"~MCUInstrumentation")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_m_c_u_instrumentation"}),"MCUInstrumentation")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",p({},{id:"protected-attributes"}),"Protected Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"right"})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"uint32_t"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#variable-cc_consumed",mdxType:"Link"},"cc_consumed")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Amount of consumed CPU cycles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"uint32_t"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#variable-cc_in",mdxType:"Link"},"cc_in")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Current CPU cycles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",p({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-getccconsumed",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"getccconsumed"}),"getCCConsumed"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","uint32_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getccconsumed",mdxType:"Link"},"getCCConsumed")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets number of consumed clock cycles. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"clock cycles. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-getcpucycles",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"getcpucycles"}),"getCPUCycles"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","unsigned int","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getcpucycles",mdxType:"Link"},"getCPUCycles")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"void"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets CPU cycles from register. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"CPU cycles. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-getelapsedus",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"getelapsedus"}),"getElapsedUS"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","unsigned int","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getelapsedus",mdxType:"Link"},"getElapsedUS")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"start ,"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"now ,"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"clockfrequency"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets elapsed microseconds based on clock frequency. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"start"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Start time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"now"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Current time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"clockfrequency"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Clock frequency of the system expressed in MHz."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"Elapsed microseconds start and now. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initialize. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-mcuinstrumentation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"mcuinstrumentation"}),"MCUInstrumentation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-mcuinstrumentation",mdxType:"Link"},"MCUInstrumentation")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_m_c_u_instrumentation"}),"MCUInstrumentation")," class. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-setccconsumed",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"setccconsumed"}),"setCCConsumed"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-setccconsumed",mdxType:"Link"},"setCCConsumed")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"uint32_t"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"val"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets number of consumed clock cycles. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"val"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"number of clock cycles."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-setmcuactive",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"setmcuactive"}),"setMCUActive"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-setmcuactive",mdxType:"Link"},"setMCUActive")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"active"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets MCU activity high. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"active"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"if True, inactive otherwise."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-~mcuinstrumentation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"mcuinstrumentation-1"}),"~MCUInstrumentation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-~mcuinstrumentation",mdxType:"Link"},"~MCUInstrumentation")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_m_c_u_instrumentation"}),"MCUInstrumentation")," class. "))),(0,a.kt)("h2",p({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#variable-cc_consumed",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"cc_consumed"}),"cc_consumed"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint32_t cc_consumed ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Amount of consumed CPU cycles. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#variable-cc_in",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"cc_in"}),"cc_in"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint32_t cc_in ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Current CPU cycles. "))))}f.isMDXComponent=!0}}]);