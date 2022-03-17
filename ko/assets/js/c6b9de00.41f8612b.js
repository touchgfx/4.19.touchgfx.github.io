"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8062],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},65407:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){var t,n;const i=(0,a.Z)(e.url),o=null!=(t=e.width)?t:"100%",l=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:o,height:l},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(73727),i=n(11368),o=n(35096),l=n(84487);const d=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),c=n(67023),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:u,to:v,href:b,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=n,x=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:E}}=(0,i.Z)(),{withBaseUrl:T}=(0,s.C)(),V=(0,r.useContext)(d),j=v||b,D=(0,o.Z)(j),_=null==j?void 0:j.replace("pathname://","");let C=void 0!==_?(S=_,O&&(e=>e.startsWith("/"))(S)?T(S):S):void 0;var S;C&&D&&(C=(0,c.applyTrailingSlash)(C,{trailingSlash:P,baseUrl:E}));const Z=(0,r.useRef)(!1),M=u?a.OL:a.rU,A=l.Z.canUseIntersectionObserver,I=(0,r.useRef)();(0,r.useEffect)((()=>(!A&&D&&null!=C&&window.docusaurus.prefetch(C),()=>{A&&I.current&&I.current.disconnect()})),[I,C,A,D]);const G=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,L=!C||!D||G;return C&&D&&!G&&!w&&V.collectLink(C),L?r.createElement("a",k(k({href:C},j&&!D&&{target:"_blank",rel:"noopener noreferrer"}),x)):r.createElement(M,k((U=k({},x),p(U,m({onMouseEnter:()=>{Z.current||null==C||(window.docusaurus.preload(C),Z.current=!0)},innerRef:e=>{var t,n;A&&e&&D&&(t=e,n=()=>{null!=C&&window.docusaurus.prefetch(C)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:C||""}))),u&&{isActive:y,activeClassName:N}));var U}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),i="/"===a||a===r?a:(o=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},92633:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return k},metadata:function(){return b},toc:function(){return N},default:function(){return w}});var r=n(3905),a=n(44035),i=n(29415),o=n(39130),l=n(22425),d=n(65407),s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&g(e,n,t[n]);return e};const v={id:"video",title:"Video"},k=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/video",id:"development/ui-development/ui-components/miscellaneous/video",isDocsHomePage:!1,title:"Video",description:"A Video is a widget capable of playing Motion JPEG videos in AVI format.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/video.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/video",permalink:"/4.19/ko/docs/development/ui-development/ui-components/miscellaneous/video",tags:[],version:"current",frontMatter:{id:"video",title:"Video"},sidebar:"docs",previous:{title:"Gauge",permalink:"/4.19/ko/docs/development/ui-development/ui-components/miscellaneous/gauge"},next:{title:"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5",permalink:"/4.19/ko/docs/development/ui-development/ui-components/general-ui-component-performance"}},N=[{value:"Widget Group",id:"widget-group",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[],level:3},{value:"Triggers",id:"triggers",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[],level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],y={toc:N};function w(e){var t,n=e,{components:s}=n,g=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},y),g),c(t,u({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Video is a widget capable of playing Motion JPEG videos in AVI format."),(0,r.kt)(d.Z,{width:"484",height:"302",url:"/img/development/ui-development/ui-components/video/widget-appearance.mp4",mdxType:"LoopVideo"},"Video running in the simulator"),(0,r.kt)("h2",f({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Video can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/video/widget-group.png",mdxType:"Figure"},"Video in TouchGFX Designer"),(0,r.kt)("h2",f({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Video in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Sample")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Sample")," specifies a sample video for the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"These samples are free to use."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Video")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Video")," specifies the video the widget should use.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Auto Play")," specifies whether or not the video should automatically play when screen is entered.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Loop")," specifies whether or not the video should loop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",f({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by a Video in TouchGFX Designer."),(0,r.kt)("h3",f({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific actions")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Play")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Play the video")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Pause")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Pause the video")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Stop")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Stop the video")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",f({},{id:"triggers"}),"Triggers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Trigger")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Video is done")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"A video widget has ended playing its video.")))),(0,r.kt)("h2",f({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"The Video Widget is an intensive component. Therefore, the Video is considered a demanding widget on most platforms."),(0,r.kt)("p",null,"For more details on drawing performance, read the ",(0,r.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section or ",(0,r.kt)("a",f({parentName:"p"},{href:"../../touchgfx-engine-features/video"}),"MJPEG Video")," article."),(0,r.kt)("h2",f({},{id:"examples"}),"Examples"),(0,r.kt)("h3",f({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how the Designer sets up a Video."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <videos/VideoDatabase.hpp>\n\nmainViewBase::mainViewBase()\n{\n    video.setPosition(0, 0, 480, 272);\n    video.setRepeat(true);\n    video.setVideoData(video_SampleVideo1_480x272_bin_start, video_SampleVideo1_480x272_bin_length);\n    video.play();\n\n    add(video);\n}\n")),(0,r.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Video, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/video-example.png",mdxType:"Figure"},"Video Example UI template in TouchGFX Designer"),(0,r.kt)("h2",f({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_video_widget",mdxType:"Link"},"API reference for the VideoWidget class")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../../touchgfx-engine-features/video",mdxType:"Link"},"Video"))))}w.isMDXComponent=!0}}]);