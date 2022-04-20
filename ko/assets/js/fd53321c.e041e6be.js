"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7585],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return u}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),d=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},s=function(t){var n=d(t.components);return a.createElement(p.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=d(e),u=r,m=k["".concat(p,".").concat(u)]||k[u]||c[u]||i;return e?a.createElement(m,l(l({ref:n},s),{},{components:e})):a.createElement(m,l({ref:n},s))}));function u(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=e[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},43861:function(t,n,e){var a=e(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=r},21710:function(t,n,e){e.r(n),e.d(n,{assets:function(){return N},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var a=e(3905),r=e(39130),i=e(43861),l=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(t,n,e)=>n in t?l(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,u=(t,n)=>{for(var e in n||(n={}))s.call(n,e)&&k(t,e,n[e]);if(d)for(var e of d(n))c.call(n,e)&&k(t,e,n[e]);return t};const m={title:"WipeTransition"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_wipe_transition",id:"api/classes/classtouchgfx_1_1_wipe_transition",title:"WipeTransition",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_wipe_transition.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_wipe_transition",permalink:"/4.19/ko/docs/api/classes/classtouchgfx_1_1_wipe_transition",tags:[],version:"current",frontMatter:{title:"WipeTransition"},sidebar:"docs",previous:{title:"WildcardTextButtonStyle",permalink:"/4.19/ko/docs/api/classes/classtouchgfx_1_1_wildcard_text_button_style"},next:{title:"ZoomAnimationImage",permalink:"/4.19/ko/docs/api/classes/classtouchgfx_1_1_zoom_animation_image"}},N={},f=[{value:"Public Classes",id:"public-classes",level:2},{value:"Public Functions",id:"public-functions",level:2},{value:"Additional inherited members",id:"additional-inherited-members",level:2},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"public-functions-inherited-from-transition",level:3},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"protected-attributes-inherited-from-transition",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"handleTickEvent",id:"handletickevent",level:3},{value:"init",id:"init",level:3},{value:"invalidate",id:"invalidate",level:3},{value:"tearDown",id:"teardown",level:3},{value:"WipeTransition",id:"wipetransition",level:3}],_={toc:f};function b(t){var n,e=t,{components:l}=e,k=((t,n)=>{var e={};for(var a in t)s.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&d)for(var a of d(t))n.indexOf(a)<0&&c.call(t,a)&&(e[a]=t[a]);return e})(e,["components"]);return(0,a.kt)("wrapper",(n=u(u({},_),k),o(n,p({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A ",(0,a.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")," that expands the new screen over the previous from the given direction.\nThis transition only draws the pixels in the framebuffer once, and never moves any pixels. It is therefore very useful on MCUs with limited performance. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("h2",u({},{id:"public-classes"}),"Public Classes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"class"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition_1_1_full_solid_rect",mdxType:"Link"},"FullSolidRect")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"A ",(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_widget"}),"Widget")," that reports solid and but does not draw anything.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",u({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"right"})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Handles the tick event when transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-init",mdxType:"Link"},"init")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Initializes the transition.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-invalidate",mdxType:"Link"},"invalidate")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Wipe transition does not require an invalidation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-teardown",mdxType:"Link"},"tearDown")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Tears down the Animation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-wipetransition",mdxType:"Link"},"WipeTransition")),"(const uint8_t transitionSteps =20)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_wipe_transition"}),"WipeTransition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",u({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",u({},{id:"public-functions-inherited-from-transition"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"right"})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-isdone",mdxType:"Link"},"isDone")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Query if the transition is done transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"Link"},"setScreenContainer")),"(",(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," & cont)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Sets the ",(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen"),(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-transition",mdxType:"Link"},"Transition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-~transition",mdxType:"Link"},"~Transition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",u({},{id:"protected-attributes-inherited-from-transition"}),"Protected Attributes inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"right"})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-done",mdxType:"Link"},"done")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Flag that indicates when the transition is done. This should be set by implementing classes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," *"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-screencontainer",mdxType:"Link"},"screenContainer")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"The screen ",(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," of the ",(0,a.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"right"})),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",u({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_wipe_transition#function-handletickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",u({},{id:"handletickevent"}),"handleTickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Handles the tick event when transitioning. "),(0,a.kt)("p",null,"It uncovers and invalidates increasing parts of the new screen elements. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"Link"},"touchgfx::Transition::handleTickEvent")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_wipe_transition#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",u({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes the transition. "),(0,a.kt)("p",null,"Called after the constructor is called, when the application changes the transition. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-init",mdxType:"Link"},"touchgfx::Transition::init")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_wipe_transition#function-invalidate",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",u({},{id:"invalidate"}),"invalidate"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-invalidate",mdxType:"Link"},"invalidate")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Wipe transition does not require an invalidation. "),(0,a.kt)("p",null,"Invalidation is handled by the class. Do no invalidation initially. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"Link"},"touchgfx::Transition::invalidate")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_wipe_transition#function-teardown",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",u({},{id:"teardown"}),"tearDown"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-teardown",mdxType:"Link"},"tearDown")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Tears down the Animation. "),(0,a.kt)("p",null,"Called before the destructor is called, when the application changes the transition. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-teardown",mdxType:"Link"},"touchgfx::Transition::tearDown")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_wipe_transition#function-wipetransition",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",u({},{id:"wipetransition"}),"WipeTransition"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-wipetransition",mdxType:"Link"},"WipeTransition")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"const uint8_t"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"transitionSteps  =20"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_wipe_transition"}),"WipeTransition")," class. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"transitionSteps"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"(Optional) Number of steps in the transition animation."))))))))}b.isMDXComponent=!0}}]);