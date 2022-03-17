"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7493],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},39130:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(67294),a=n(73727),l=n(11368),i=n(35096),o=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),d=n(67023),p=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&b(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&b(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:p,to:b,href:v,activeClassName:w,isActive:y,"data-noBrokenLinkCheck":N,autoAddBaseUrl:C=!0}=n,O=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:S}}=(0,l.Z)(),{withBaseUrl:E}=(0,s.C)(),P=(0,r.useContext)(c),T=b||v,j=(0,i.Z)(T),D=null==T?void 0:T.replace("pathname://","");let Z=void 0!==D?(_=D,C&&(e=>e.startsWith("/"))(_)?E(_):_):void 0;var _;Z&&j&&(Z=(0,d.applyTrailingSlash)(Z,{trailingSlash:x,baseUrl:S}));const A=(0,r.useRef)(!1),M=p?a.OL:a.rU,F=o.Z.canUseIntersectionObserver,I=(0,r.useRef)();(0,r.useEffect)((()=>(!F&&j&&null!=Z&&window.docusaurus.prefetch(Z),()=>{F&&I.current&&I.current.disconnect()})),[I,Z,F,j]);const B=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,G=!Z||!j||B;return Z&&j&&!B&&!N&&P.collectLink(Z),G?r.createElement("a",k(k({href:Z},T&&!j&&{target:"_blank",rel:"noopener noreferrer"}),O)):r.createElement(M,k((U=k({},O),u(U,m({onMouseEnter:()=>{A.current||null==Z||(window.docusaurus.preload(Z),A.current=!0)},innerRef:e=>{var t,n;F&&e&&j&&(t=e,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:Z||""}))),p&&{isActive:y,activeClassName:w}));var U}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return l},Z:function(){return i}});var r=n(11368),a=n(35096);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),l="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,l)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var l=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(l).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},2700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return v},metadata:function(){return w},toc:function(){return y},default:function(){return C}});var r=n(3905),a=n(44035),l=n(29415),i=n(37793),o=n(31217),c=n(39130),s=n(22425),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&f(e,n,t[n]);return e};const k={id:"scrollable-container",title:"Scrollable Container"},v=void 0,w={unversionedId:"development/ui-development/ui-components/containers/scrollable-container",id:"development/ui-development/ui-components/containers/scrollable-container",isDocsHomePage:!1,title:"Scrollable Container",description:"A Scrollable Container is a Container that allows its content to be scrolled both vertically and horizontally.",source:"@site/docs/development/ui-development/ui-components/containers/scrollable-container.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scrollable-container",permalink:"/4.19/docs/development/ui-development/ui-components/containers/scrollable-container",tags:[],version:"current",frontMatter:{id:"scrollable-container",title:"Scrollable Container"},sidebar:"docs",previous:{title:"Container",permalink:"/4.19/docs/development/ui-development/ui-components/containers/container"},next:{title:"Swipe Container",permalink:"/4.19/docs/development/ui-development/ui-components/containers/swipe-container"}},y=[{value:"Widget Group",id:"widget-group",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[],level:3},{value:"Triggers",id:"triggers",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[],level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],N={toc:y};function C(e){var t,n=e,{components:d}=n,f=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},N),f),p(t,u({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Scrollable Container is a ",(0,r.kt)("a",b({parentName:"p"},{href:"container"}),"Container")," that allows its content to be scrolled both vertically and horizontally."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/scrollable-container/widget-appearance.gif",mdxType:"Figure"},"Scrollable Container running in the simulator"),(0,r.kt)("h2",b({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Scrollable Container can be found in the Containers widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/scrollable-container/widget-group-v4.17.png",mdxType:"Figure"},"Scrollable Container in TouchGFX Designer"),(0,r.kt)("h2",b({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Scrollable Container in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Scrolling")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Enable horizontal scroll")," specifies if horizontal scrolling is enabled.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Enable vertical scroll")," specifies if vertical scrolling is enabled.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Show scrollbars")," specifies if the scrollbars should always should be visible.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Show scrollbars while scrolling")," specifies if the scrollbars should only be visible when the content is being scrolled.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"If 'Show scrollbars' is enabled this option is disregarded","."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Scrollbars Color")," specifies the color of the scrollbars.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Scrollbars Alpha")," specifies the transparency of the scrollbars.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",b({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Scrollable Container are described in the following sections."),(0,r.kt)("h3",b({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific action")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Resize the width and height of a widget.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",b({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A Scrollable Container does not emit any triggers."),(0,r.kt)("h2",b({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Scrollable Container is a ",(0,r.kt)("a",b({parentName:"p"},{href:"container"}),"Container")," type, and does not per default appear in the draw chain apart from the scrollbar rendering. Therefore, the performance is mostly dependent on the drawing performance of the children."),(0,r.kt)("p",null,"For more general details on drawing performance, read the ",(0,r.kt)("a",b({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",b({},{id:"examples"}),"Examples"),(0,r.kt)("h3",b({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Scrollable Container."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase()\n{\n    scrollableContainer.setPosition(115, 11, 250, 250);\n    scrollableContainer.enableHorizontalScroll(false);\n    scrollableContainer.setScrollbarsColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\n    scrollableContainer.setScrollbarsPermanentlyVisible();\n    scrollableContainer.setScrollbarsVisible(false);\n    scrollableContainer.add(<widget_name>); //add a widget as child\n\n    add(scrollableContainer);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"You can use these functions and the others available in the ScrollableContainer class in user code. Remember to force a redraw by calling ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"scrollableContainer.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",b({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Scrollable Container, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/scrollable-container-example-v4.17.png",mdxType:"Figure"},"Scrollable Container Example UI template in TouchGFX Designer"),(0,r.kt)("h2",b({},{id:"api-reference"}),"API Reference"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scrollable_container",mdxType:"Link"},"API reference for the ScrollableContainer class"))))}C.isMDXComponent=!0}}]);