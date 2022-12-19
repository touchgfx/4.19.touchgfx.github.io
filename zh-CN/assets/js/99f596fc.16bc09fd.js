"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[648],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return m}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,k=c(t,["components","mdxType","originalType","parentName"]),s=u(a),d=l,m=s["".concat(o,".").concat(d)]||s[d]||p[d]||r;return a?n.createElement(m,i(i({ref:e},k),{},{components:a})):n.createElement(m,i({ref:e},k))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c[s]="string"==typeof t?t:l,i[1]=c;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class l extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=l},60332:function(t,e,a){a.r(e),a.d(e,{assets:function(){return b},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var n=a(3905),l=a(39130),r=a(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&p(t,a,e[a]);if(u)for(var a of u(e))s.call(e,a)&&p(t,a,e[a]);return t};const m={title:"GenericCallback"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_generic_callback",id:"api/classes/classtouchgfx_1_1_generic_callback",title:"GenericCallback",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_generic_callback.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_generic_callback",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_generic_callback",draft:!1,tags:[],version:"current",frontMatter:{title:"GenericCallback"},sidebar:"docs",previous:{title:"Gauge",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_gauge"},next:{title:"GenericCallback<T1,T2,void>",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4"}},b={},f=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"execute",id:"execute",level:3},{value:"isValid",id:"isvalid",level:3},{value:"~GenericCallback",id:"genericcallback",level:3}],_={toc:f};function N(t){var e,a=t,{components:i}=a,p=((t,e)=>{var a={};for(var n in t)k.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},_),p),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," GenericCallback is the base class for callbacks.\nThe reason this base class exists, is that a normal ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," requires the class type where the callback function resides to be known. This is problematic for ie. framework widgets like ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton"),", on which it should be possible to register a callback on object types that are user-specific and thus unknown to ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton"),". This is solved by having ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton")," contain a pointer to a ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," instead. This pointer must then be initialized to point on an instance of ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback"),", created by the user, which is initialized with the appropriate object type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T1")," The type of the first argument in the member function, or void if none. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T2")," The type of the second argument in the member function, or void if none. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T3")," The type of the third argument in the member function, or void if none.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": As with ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback"),", this class exists in four versions to support callback functions taking zero, one, two or three arguments. "),(0,n.kt)("h2",d({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"right"})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(l.Z,{to:"classtouchgfx_1_1_generic_callback#function-execute",mdxType:"Link"},"execute")),"(T1 val1, T2 val2, T3 val3) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Calls the member function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(l.Z,{to:"classtouchgfx_1_1_generic_callback#function-isvalid",mdxType:"Link"},"isValid")),"() const =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Function to check whether the ",(0,n.kt)("a",d({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(l.Z,{to:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",d({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(r.Z,{url:"classtouchgfx_1_1_generic_callback#function-execute",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"execute"}),"execute"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(l.Z,{to:"classtouchgfx_1_1_generic_callback#function-execute",mdxType:"Link"},"execute")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"T1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val1 ,"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"T2"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val2 ,"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"T3"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val3"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Calls the member function. "),(0,n.kt)("p",null,"Do not call execute unless ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback#function-isvalid"}),"isValid()")," returns true (ie. a pointer to the object and the function has been set)."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This value will be passed as the first argument in the function call.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val2"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This value will be passed as the second argument in the function call.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val3"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This value will be passed as the third argument in the function call."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute"),", ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute"),", ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute"),", ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute"),", ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute")))),(0,n.kt)(r.Z,{url:"classtouchgfx_1_1_generic_callback#function-isvalid",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"isvalid"}),"isValid"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(l.Z,{to:"classtouchgfx_1_1_generic_callback#function-isvalid",mdxType:"Link"},"isValid")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"const =0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Function to check whether the ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true If the callback is valid (i.e. safe to call execute). ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid"),", ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid"),", ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid"),", ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid"),", ",(0,n.kt)(l.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid")))),(0,n.kt)(r.Z,{url:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"genericcallback"}),"~GenericCallback"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(l.Z,{to:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," class. "))))}N.isMDXComponent=!0}}]);