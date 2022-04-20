"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6989],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(n),c=r,m=s["".concat(p,".").concat(c)]||s[c]||k[c]||l;return n?a.createElement(m,i(i({ref:e},d),{},{components:n})):a.createElement(m,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},235:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return g},default:function(){return _},frontMatter:function(){return m},metadata:function(){return N},toc:function(){return v}});var a=n(3905),r=n(39130),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&s(t,n,e[n]);if(u)for(var n of u(e))k.call(e,n)&&s(t,n,e[n]);return t};const m={title:"GestureEvent"},g=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_gesture_event",id:"api/classes/classtouchgfx_1_1_gesture_event",title:"GestureEvent",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_gesture_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_gesture_event",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_gesture_event",tags:[],version:"current",frontMatter:{title:"GestureEvent"},sidebar:"docs",previous:{title:"GenericCallback<void>",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01void_01_4"},next:{title:"Gestures",permalink:"/4.19/ja/docs/api/classes/classtouchgfx_1_1_gestures"}},h={},v=[{value:"Public Types",id:"public-types",level:2},{value:"Public Functions",id:"public-functions",level:2},{value:"Additional inherited members",id:"additional-inherited-members",level:2},{value:'Public Types inherited from <Link to="classtouchgfx_1_1_event">Event</Link>',id:"public-types-inherited-from-event",level:3},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_event">Event</Link>',id:"public-functions-inherited-from-event",level:3},{value:"Public Types Documentation",id:"public-types-documentation",level:2},{value:"GestureEventType",id:"gestureeventtype",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"GestureEvent",id:"gestureevent",level:3},{value:"getEventType",id:"geteventtype",level:3},{value:"getType",id:"gettype",level:3},{value:"getVelocity",id:"getvelocity",level:3},{value:"getX",id:"getx",level:3},{value:"getY",id:"gety",level:3}],y={toc:v};function _(t){var e,n=t,{components:i}=n,s=((t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&k.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=c(c({},y),s),o(e,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A gesture event.\nThe only gesture events currently supported is ",(0,a.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_gesture_event#enumvalue-swipe_horizontal"}),"SWIPE_HORIZONTAL")," and ",(0,a.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_gesture_event#enumvalue-swipe_vertical"}),"SWIPE_VERTICAL"),", which will be issued every time the input system detects a swipe."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_event"}),"Event")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("h2",c({},{id:"public-types"}),"Public Types"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"enum"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype",mdxType:"Link"},"GestureEventType"))," { SWIPE_HORIZONTAL, SWIPE_VERTICAL }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Values that represent gesture types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",c({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"right"})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gestureevent",mdxType:"Link"},"GestureEvent")),"(",(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype"}),"GestureEventType")," type, int16_t velocity, int16_t x, int16_t y)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Constructor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_event#enum-eventtype"}),"Event::EventType")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-geteventtype",mdxType:"Link"},"getEventType")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Gets event type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype"}),"GestureEventType")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gettype",mdxType:"Link"},"getType")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Gets the type of this gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-getvelocity",mdxType:"Link"},"getVelocity")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Gets the velocity of this gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-getx",mdxType:"Link"},"getX")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Gets the x coordinate of this gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gety",mdxType:"Link"},"getY")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Gets the y coordinate of this gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",c({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",c({},{id:"public-types-inherited-from-event"}),"Public Types inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"right"})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"enum"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"Link"},"EventType"))," { EVENT_CLICK, EVENT_DRAG, EVENT_GESTURE }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The event types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",c({},{id:"public-functions-inherited-from-event"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"right"})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-~event",mdxType:"Link"},"~Event")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_event"}),"Event")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",c({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"gestureeventtype"}),"GestureEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null,"enum ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype",mdxType:"Link"},"GestureEventType"))),(0,a.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,a.kt)("p",null,"Values that represent gesture types. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#enumvalue-swipe_horizontal",mdxType:"DoxybookHeaderLink"})," SWIPE_HORIZONTAL"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"An enum constant representing a horizontal swipe.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#enumvalue-swipe_vertical",mdxType:"DoxybookHeaderLink"})," SWIPE_VERTICAL"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"An enum constant representing a vertical swipe.")))))),(0,a.kt)("h2",c({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-gestureevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"gestureevent"}),"GestureEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gestureevent",mdxType:"Link"},"GestureEvent")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype"}),"GestureEventType")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"type ,"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"velocity ,"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"x ,"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Constructor. "),(0,a.kt)("p",null,"Create a gesture event of the specified type with the specified coordinates."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The type of the gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"velocity"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The velocity of this gesture (swipe)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The x coordinate of the gesture.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The y coordinate of the gesture."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-geteventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"geteventtype"}),"getEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","Event::EventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-geteventtype",mdxType:"Link"},"getEventType")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets event type. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The type of this event. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"Link"},"touchgfx::Event::getEventType")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-gettype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"gettype"}),"getType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"GestureEventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gettype",mdxType:"Link"},"getType")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the type of this gesture event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The type of this gesture event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-getvelocity",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"getvelocity"}),"getVelocity"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-getvelocity",mdxType:"Link"},"getVelocity")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the velocity of this gesture event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The velocity of this gesture event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-getx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"getx"}),"getX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-getx",mdxType:"Link"},"getX")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the x coordinate of this gesture event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The x coordinate of this gesture event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-gety",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"gety"}),"getY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gety",mdxType:"Link"},"getY")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the y coordinate of this gesture event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The y coordinate of this gesture event. ")))))}_.isMDXComponent=!0}}]);