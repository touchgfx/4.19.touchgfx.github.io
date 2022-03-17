"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5015],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(g,l(l({ref:t},d),{},{components:n})):i.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var i=n(67294);class r extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:l,target:"_blank"},i.createElement("img",{width:n,height:a,src:l})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:l,target:"_blank"},i.createElement("img",{width:n,height:a,src:l})),i.createElement("p",null,e.children))}},29415:function(e,t,n){var i=n(67294),r=n(88678);const a=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends i.Component{render(){return i.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},88678:function(e,t,n){var i=n(67294);class r extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var i=n(67294);class r extends i.Component{render(){return i.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var i=n(67294),r=n(88678);const a=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends i.Component{render(){return i.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=l},39130:function(e,t,n){n.d(t,{Z:function(){return w}});var i=n(67294),r=n(73727),a=n(11368),l=n(35096),o=n(84487);const c=(0,i.createContext)({collectLink:()=>{}});var s=n(25026),d=n(67023),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&k(e,n,t[n]);return e};var w=function(e){var t,n=e,{isNavLink:u,to:k,href:w,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":N,autoAddBaseUrl:C=!0}=n,x=((e,t)=>{var n={};for(var i in e)h.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&g)for(var i of g(e))t.indexOf(i)<0&&f.call(e,i)&&(n[i]=e[i]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:O}}=(0,a.Z)(),{withBaseUrl:D}=(0,s.C)(),E=(0,i.useContext)(c),P=k||w,_=(0,l.Z)(P),S=null==P?void 0:P.replace("pathname://","");let A=void 0!==S?(j=S,C&&(e=>e.startsWith("/"))(j)?D(j):j):void 0;var j;A&&_&&(A=(0,d.applyTrailingSlash)(A,{trailingSlash:T,baseUrl:O}));const M=(0,i.useRef)(!1),H=u?r.OL:r.rU,Z=o.Z.canUseIntersectionObserver,I=(0,i.useRef)();(0,i.useEffect)((()=>(!Z&&_&&null!=A&&window.docusaurus.prefetch(A),()=>{Z&&I.current&&I.current.disconnect()})),[I,A,Z,_]);const V=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,B=!A||!_||V;return A&&_&&!V&&!N&&E.collectLink(A),B?i.createElement("a",v(v({href:A},P&&!_&&{target:"_blank",rel:"noopener noreferrer"}),x)):i.createElement(H,v((F=v({},x),p(F,m({onMouseEnter:()=>{M.current||null==A||(window.docusaurus.preload(A),M.current=!0)},innerRef:e=>{var t,n;Z&&e&&_&&(t=e,n=()=>{null!=A&&window.docusaurus.prefetch(A)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:A||""}))),u&&{isActive:y,activeClassName:b}));var F}},35096:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return l}});var i=n(11368),r=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+l:l}(t,e,n,i)}}function l(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:i}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),a="/"===r||r===i?r:(l=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(r,a)}},67023:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},58194:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return w},metadata:function(){return b},toc:function(){return y},default:function(){return C}});var i=n(3905),r=n(44035),a=n(29415),l=n(37793),o=n(31217),c=n(39130),s=n(22425),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&f(e,n,t[n]);return e};const v={id:"digital-clock",title:"Digital Clock"},w=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/digital-clock",id:"development/ui-development/ui-components/miscellaneous/digital-clock",isDocsHomePage:!1,title:"Digital Clock",description:"A Digital Clock in TouchGFX is a widget that allows an application to display time with digital text, as opposed to the AnalogClock which displays time using analog clock hands.",source:"@site/docs/development/ui-development/ui-components/miscellaneous/digital-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/digital-clock",permalink:"/4.19/docs/development/ui-development/ui-components/miscellaneous/digital-clock",tags:[],version:"current",frontMatter:{id:"digital-clock",title:"Digital Clock"},sidebar:"docs",previous:{title:"Analog Clock",permalink:"/4.19/docs/development/ui-development/ui-components/miscellaneous/analog-clock"},next:{title:"Dynamic Graph",permalink:"/4.19/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"}},y=[{value:"Widget Group",id:"widget-group",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Time",id:"time",children:[],level:3}],level:2},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[],level:3},{value:"Triggers",id:"triggers",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[],level:3},{value:"User Code",id:"user-code",children:[],level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],N={toc:y};function C(e){var t,n=e,{components:d}=n,f=((e,t)=>{var n={};for(var i in e)g.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&m)for(var i of m(e))t.indexOf(i)<0&&h.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=k(k({},N),f),u(t,p({components:d,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"A Digital Clock in TouchGFX is a widget that allows an application to display time with digital text, as opposed to the ",(0,i.kt)("a",k({parentName:"p"},{href:"analog-clock"}),"AnalogClock")," which displays time using analog clock hands."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-appearance.gif",mdxType:"Figure"},"Digital Clock running in the simulator (sped up footage)"),(0,i.kt)("h2",k({},{id:"widget-group"}),"Widget Group"),(0,i.kt)("p",null,"The Digital Clock can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-group-v4.17.png",mdxType:"Figure"},"Digital Clock in TouchGFX Designer"),(0,i.kt)("h2",k({},{id:"properties"}),"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"Property Group")),(0,i.kt)("th",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Name")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,i.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Location")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"X")," and ",(0,i.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"W")," and ",(0,i.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,i.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Time")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Use Am/Pm")," specifies if time should be in 12h or 24h format.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Display Leading Zero for Hours")," specifies if leading zero for hours should be enabled.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Display Seconds")," specifies if showing seconds is enabled.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Initial Time")," specifies the initial time the clock shows.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Text")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Single Use")," or ",(0,i.kt)("em",{parentName:"td"},"Resource")," specifies which text resource to use for the Digital Clock.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Text must have a wildcard to function properly."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Appearance")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Text Color")," specifies the color of the text in the Digital Clock.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Mixins")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,i.kt)("em",{parentName:"td"},"Alpha")," value.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,i.kt)("em",{parentName:"td"},"X")," and ",(0,i.kt)("em",{parentName:"td"},"Y")," values.")))),(0,i.kt)("h3",k({},{id:"time"}),"Time"),(0,i.kt)("p",null,"The Time property group is used to adjust how time is displayed in the application by changing different properties. You can choose to use 24-hour time or 12-hour AM/PM by toggling ",(0,i.kt)("em",{parentName:"p"},"Use Am/Pm"),". Toggling ",(0,i.kt)("em",{parentName:"p"},"Display Leading Zero for Hours")," specifies how hours below 10 are displayed (e.g. 09:10:00 or 9:10:00) and ",(0,i.kt)("em",{parentName:"p"},"Display Seconds")," toggles the display of seconds on/off (e.g. 9:10:00 or 9:10)."),(0,i.kt)("p",null,"Choosing Am/Pm also results in a slight code generation change. Instead of using the following function in Analog Clock to initialize the time:",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,i.kt)("p",null,"The following function is used when using 12-hour notation:",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,i.kt)("p",null,"To update the time which the clock displays, one of the following functions can be used.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,i.kt)("h2",k({},{id:"interactions"}),"Interactions"),(0,i.kt)("p",null,"The actions and triggers supported by the Digital Clock are described in the following sections."),(0,i.kt)("h3",k({},{id:"actions"}),"Actions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"Standard widget action")),(0,i.kt)("th",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Move widget")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Fade widget")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Hide widget")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",k({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Show widget")),(0,i.kt)("td",k({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,i.kt)("h3",k({},{id:"triggers"}),"Triggers"),(0,i.kt)("p",null,"A Digital Clock does not emit any triggers."),(0,i.kt)("h2",k({},{id:"performance"}),"Performance"),(0,i.kt)("p",null,"A Digital Clock consists of a ",(0,i.kt)("a",k({parentName:"p"},{href:"text-area"}),"TextArea"),", which does not impact performance in any meaningful way. Therefore, a Digital Clock is considered a fast performing widget on most platforms."),(0,i.kt)("p",null,"For more details on drawing performance, read the ",(0,i.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,i.kt)("h2",k({},{id:"examples"}),"Examples"),(0,i.kt)("h3",k({},{id:"generated-code"}),"Generated Code"),(0,i.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up the Digital Clock."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n\nmainViewBase::mainViewBase()\n{\n    digitalClock.setPosition(75, 88, 331, 97);\n    digitalClock.setColor(touchgfx::Color::getColorFromRGB(0, 30, 65));\n    digitalClock.setTypedText(touchgfx::TypedText(T_SINGLEUSEID2));\n    digitalClock.displayLeadingZeroForHourIndicator(true);\n    digitalClock.setDisplayMode(touchgfx::DigitalClock::DISPLAY_24_HOUR);\n    digitalClock.setTime24Hour(7, 7, 0);\n\n    add(digitalClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,i.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the DigitalClock class in user code. Remember to force a redraw by calling ",(0,i.kt)(o.Z,{mdxType:"InlineCode"},"digitalClock.invalidate()")," if you change the appearance of the widget."),(0,i.kt)("h3",k({},{id:"user-code"}),"User Code"),(0,i.kt)("p",null,"The following example shows how to set up the clock to start."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int digitalHours;\n    int digitalMinutes;\n    int digitalSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    digitalHours = digitalClock.getCurrentHour();\n    digitalMinutes = digitalClock.getCurrentMinute();\n    digitalSeconds = digitalClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++digitalSeconds >= 60)\n        {\n            digitalSeconds = 0;\n            if (++digitalMinutes >= 60)\n            {\n                digitalMinutes = 0;\n                if (++digitalHours >= 24)\n                {\n                    digitalHours = 0;\n                }\n            }\n        }\n\n        // Update the clock\n        digitalClock.setTime24Hour(digitalHours, digitalMinutes, digitalSeconds);\n    }\n}\n")),(0,i.kt)("h3",k({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,i.kt)("p",null,"To further explore the Digital Clock, try creating a new application within TouchGFX Designer with the following Example:"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.png",mdxType:"Figure"},"Clock Example in TouchGFX Designer"),(0,i.kt)("h2",k({},{id:"api-reference"}),"API Reference"),(0,i.kt)(a.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_digital_clock",mdxType:"Link"},"API reference for the DigitalClock class"))))}C.isMDXComponent=!0}}]);