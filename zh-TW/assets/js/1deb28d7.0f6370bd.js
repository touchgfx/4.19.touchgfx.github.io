"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1661],{3905:function(t,a,e){e.d(a,{Zo:function(){return s},kt:function(){return u}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),c=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},s=function(t){var a=c(t.components);return n.createElement(p.Provider,{value:a},t.children)},m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(e),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return e?n.createElement(k,l(l({ref:a},s),{},{components:e})):n.createElement(k,l({ref:a},s))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=e[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},43861:function(t,a,e){var n=e(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},16312:function(t,a,e){e.r(a),e.d(a,{assets:function(){return h},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return k},metadata:function(){return _},toc:function(){return f}});var n=e(3905),r=e(39130),i=e(43861),l=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(t,a,e)=>a in t?l(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,u=(t,a)=>{for(var e in a||(a={}))s.call(a,e)&&d(t,e,a[e]);if(c)for(var e of c(a))m.call(a,e)&&d(t,e,a[e]);return t};const k={title:"MVPHeap"},g=void 0,_={unversionedId:"api/classes/classtouchgfx_1_1_m_v_p_heap",id:"api/classes/classtouchgfx_1_1_m_v_p_heap",title:"MVPHeap",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_m_v_p_heap.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_m_v_p_heap",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_m_v_p_heap",tags:[],version:"current",frontMatter:{title:"MVPHeap"},sidebar:"docs",previous:{title:"MVPApplication",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_m_v_p_application"},next:{title:"NoDMA",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_no_d_m_a"}},h={},f=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"MVPHeap",id:"mvpheap",level:3},{value:"~MVPHeap",id:"mvpheap-1",level:3},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"frontendApplication",id:"frontendapplication",level:3},{value:"presenterStorage",id:"presenterstorage",level:3},{value:"screenStorage",id:"screenstorage",level:3},{value:"transitionStorage",id:"transitionstorage",level:3}],N={toc:f};function b(t){var a,e=t,{components:l}=e,d=((t,a)=>{var e={};for(var n in t)s.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&c)for(var n of c(t))a.indexOf(n)<0&&m.call(t,n)&&(e[n]=t[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(a=u(u({},N),d),o(a,p({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Generic heap class for MVP applications.\nServes as a way of obtaining the memory storage areas for presenters, screens, transitions and the concrete application."),(0,n.kt)("p",null,"Subclassed by an application-specific heap which provides the actual storage areas. This generic interface is used only in makeTransition. "),(0,n.kt)("h2",u({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"right"})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#function-mvpheap",mdxType:"Link"},"MVPHeap")),"(",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & pres, ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & scr, ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & tra, ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," & app)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_heap"}),"MVPHeap")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#function-~mvpheap",mdxType:"Link"},"~MVPHeap")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_heap"}),"MVPHeap")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",u({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"right"})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#variable-frontendapplication",mdxType:"Link"},"frontendApplication")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A reference to the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," instance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#variable-presenterstorage",mdxType:"Link"},"presenterStorage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest presenter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#variable-screenstorage",mdxType:"Link"},"screenStorage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#variable-transitionstorage",mdxType:"Link"},"transitionStorage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest transition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",u({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#function-mvpheap",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"mvpheap"}),"MVPHeap"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#function-mvpheap",mdxType:"Link"},"MVPHeap")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"pres ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"scr ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"tra ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"app"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_m_v_p_heap"}),"MVPHeap")," class. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"pres"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest presenter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"scr"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"tra"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A memory partition containing enough memory to hold the largest transition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"app"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A reference to the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," instance."))))))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#function-~mvpheap",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"mvpheap-1"}),"~MVPHeap"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_heap#function-~mvpheap",mdxType:"Link"},"~MVPHeap")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_m_v_p_heap"}),"MVPHeap")," class. "))),(0,n.kt)("h2",u({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#variable-frontendapplication",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"frontendapplication"}),"frontendApplication"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," & frontendApplication ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"A reference to the ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_m_v_p_application"}),"MVPApplication")," instance. "))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#variable-presenterstorage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"presenterstorage"}),"presenterStorage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & presenterStorage ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"A memory partition containing enough memory to hold the largest presenter. "))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#variable-screenstorage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"screenstorage"}),"screenStorage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & screenStorage ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"A memory partition containing enough memory to hold the largest view. "))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_m_v_p_heap#variable-transitionstorage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"transitionstorage"}),"transitionStorage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," & transitionStorage ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"A memory partition containing enough memory to hold the largest transition. "))))}b.isMDXComponent=!0}}]);