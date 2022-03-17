"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6135],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=l},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),i=n(73727),a=n(11368),l=n(35096),o=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),d=n(67023),s=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(g)for(var n of g(t))k.call(t,n)&&f(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:s,to:f,href:b,activeClassName:w,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:C=!0}=n,T=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:O}}=(0,a.Z)(),{withBaseUrl:E}=(0,u.C)(),P=(0,r.useContext)(c),_=f||b,D=(0,l.Z)(_),S=null==_?void 0:_.replace("pathname://","");let j=void 0!==S?(M=S,C&&(e=>e.startsWith("/"))(M)?E(M):M):void 0;var M;j&&D&&(j=(0,d.applyTrailingSlash)(j,{trailingSlash:x,baseUrl:O}));const Z=(0,r.useRef)(!1),H=s?i.OL:i.rU,A=o.Z.canUseIntersectionObserver,V=(0,r.useRef)();(0,r.useEffect)((()=>(!A&&D&&null!=j&&window.docusaurus.prefetch(j),()=>{A&&V.current&&V.current.disconnect()})),[V,j,A,D]);const I=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,B=!j||!D||I;return j&&D&&!I&&!y&&P.collectLink(j),B?r.createElement("a",v(v({href:j},_&&!D&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(H,v((F=v({},T),p(F,m({onMouseEnter:()=>{Z.current||null==j||(window.docusaurus.preload(j),Z.current=!0)},innerRef:e=>{var t,n;A&&e&&D&&(t=e,n=()=>{null!=j&&window.docusaurus.prefetch(j)},V.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.current.unobserve(t),V.current.disconnect(),n())}))})),V.current.observe(t))},to:j||""}))),s&&{isActive:N,activeClassName:w}));var F}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return l}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),a="/"===i||i===r?i:(l=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(i,a)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return w},toc:function(){return N},default:function(){return C}});var r=n(3905),i=n(44035),a=n(29415),l=n(37793),o=n(31217),c=n(39130),u=n(22425),d=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&k(e,n,t[n]);return e};const v={id:"digital-clock",title:"\u6578\u4f4d\u6642\u9418"},b=void 0,w={unversionedId:"development/ui-development/ui-components/miscellaneous/digital-clock",id:"development/ui-development/ui-components/miscellaneous/digital-clock",isDocsHomePage:!1,title:"\u6578\u4f4d\u6642\u9418",description:"TouchGFX\u4e2d\u7684\u6578\u4f4d\u6642\u9418(Digital Clock)\u662f\u4e00\u500b\u5c0f\u90e8\u4ef6\uff0c\u5141\u8a31\u61c9\u7528\u4ee5\u6578\u4f4d\u6587\u5b57\u7684\u5f62\u5f0f\u986f\u793a\u6642\u9593\uff0c\u800c\u8207\u6b64\u76f8\u5c0d\u7684\u985e\u6bd4\u6642\u9418\u4f7f\u7528\u985e\u6bd4\u6642\u9418\u6307\u6a19\u986f\u793a\u6642\u9593\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/digital-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/digital-clock",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/miscellaneous/digital-clock",tags:[],version:"current",frontMatter:{id:"digital-clock",title:"\u6578\u4f4d\u6642\u9418"},sidebar:"docs",previous:{title:"\u985e\u6bd4\u6642\u9418",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/miscellaneous/analog-clock"},next:{title:"\u52d5\u614b\u5716\u5f62",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"}},N=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",children:[],level:2},{value:"\u5c6c\u6027",id:"properties",children:[{value:"Time",id:"time",children:[],level:3}],level:2},{value:"\u4ea4\u4e92",id:"interactions",children:[{value:"\u64cd\u4f5c",id:"actions",children:[],level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",children:[],level:3}],level:2},{value:"\u6027\u80fd",id:"performance",children:[],level:2},{value:"\u7bc4\u4f8b",id:"examples",children:[{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",children:[],level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",children:[],level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API\u53c3\u8003",id:"api-reference",children:[],level:2}],y={toc:N};function C(e){var t,n=e,{components:d}=n,k=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},y),k),s(t,p({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u6578\u4f4d\u6642\u9418(Digital Clock)\u662f\u4e00\u500b\u5c0f\u90e8\u4ef6\uff0c\u5141\u8a31\u61c9\u7528\u4ee5\u6578\u4f4d\u6587\u5b57\u7684\u5f62\u5f0f\u986f\u793a\u6642\u9593\uff0c\u800c\u8207\u6b64\u76f8\u5c0d\u7684",(0,r.kt)("a",f({parentName:"p"},{href:"analog-clock"}),"\u985e\u6bd4\u6642\u9418"),"\u4f7f\u7528\u985e\u6bd4\u6642\u9418\u6307\u6a19\u986f\u793a\u6642\u9593\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-appearance.gif",mdxType:"Figure"},"\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u6578\u4f4d\u6642\u9418\uff08\u52a0\u901f\u93e1\u982d\uff09"),(0,r.kt)("h2",f({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u6578\u4f4d\u6642\u9418\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Miscellaneous\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6578\u4f4d\u6642\u9418"),(0,r.kt)("h2",f({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Time")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Use Am/Pm")," specifies if time should be in 12h or 24h format.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Display Leading Zero for Hours")," specifies if leading zero for hours should be enabled.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Display Seconds")," specifies if showing seconds is enabled.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Initial Time")," specifies the initial time the clock shows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Single Use")," or ",(0,r.kt)("em",{parentName:"td"},"Resource")," specifies which text resource to use for the Digital Clock.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Text must have a wildcard to function properly."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Text Color")," specifies the color of the text in the Digital Clock.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h3",f({},{id:"time"}),"Time"),(0,r.kt)("p",null,'"Time"\u5c6c\u6027\u7d44\u7528\u65bc\u901a\u904e\u66f4\u6539\u4e0d\u540c\u7684\u5c6c\u6027\u4f86\u8abf\u6574\u6642\u9593\u5728\u61c9\u7528\u4e2d\u7684\u986f\u793a\u65b9\u5f0f\u3002 You can choose to use 24-hour time or 12-hour AM/PM by toggling ',(0,r.kt)("em",{parentName:"p"},"Use Am/Pm"),". Toggling ",(0,r.kt)("em",{parentName:"p"},"Display Leading Zero for Hours")," specifies how hours below 10 are displayed (e.g. 09:10:00 or 9:10:00) and ",(0,r.kt)("em",{parentName:"p"},"Display Seconds")," toggles the display of seconds on/off (e.g. 9:10:00 or 9:10)."),(0,r.kt)("p",null,"\u9078\u64c7Am/Pm\u9084\u6703\u5c0e\u81f4\u7a0b\u5f0f\u78bc\u751f\u6210\u7684\u7d30\u5fae\u8b8a\u5316\u3002 \u800c\u4e0d\u662f\u5728\u985e\u6bd4\u6642\u9418\u4e2d\u4f7f\u7528\u4e0b\u9762\u7684\u51fd\u6578\u521d\u59cb\u5316\u6642\u9593\uff1a",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,r.kt)("p",null,"\u5982\u679c\u63a1\u752812\u5c0f\u6642\u6a19\u8a18\u6cd5\uff0c\u5c07\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6578\uff1a",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,r.kt)("p",null,"\u5982\u8981\u66f4\u65b0\u6642\u9418\u986f\u793a\u7684\u6642\u9593\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6578\u4e4b\u4e00\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,r.kt)("h2",f({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u6578\u4f4d\u6642\u9418\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",f({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",f({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u6578\u4f4d\u6642\u9418\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",f({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u6578\u4f4d\u6642\u9418\u5305\u542b\u4e00\u500b",(0,r.kt)("a",f({parentName:"p"},{href:"text-area"}),"\u6587\u5b57\u5340\u57df"),"\uff0c\u5b83\u4e0d\u6703\u4ee5\u4efb\u4f55\u6709\u610f\u7fa9\u7684\u65b9\u5f0f\u5f71\u97ff\u6027\u80fd\u3002 \u56e0\u6b64\uff0c\u5927\u90e8\u5206\u5e73\u81fa\u6703\u5c07\u6578\u4f4d\u6642\u9418\u8996\u70ba\u975e\u5e38\u5feb\u901f\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u7e6a\u5716\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",f({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n\nmainViewBase::mainViewBase()\n{\n    digitalClock.setPosition(75, 88, 331, 97);\n    digitalClock.setColor(touchgfx::Color::getColorFromRGB(0, 30, 65));\n    digitalClock.setTypedText(touchgfx::TypedText(T_SINGLEUSEID2));\n    digitalClock.displayLeadingZeroForHourIndicator(true);\n    digitalClock.setDisplayMode(touchgfx::DigitalClock::DISPLAY_24_HOUR);\n    digitalClock.setTime24Hour(7, 7, 0);\n\n    add(digitalClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528DigitalClock\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"digitalClock.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h3",f({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u7bc4\u4f8b\u6f14\u793a\u5982\u4f55\u8a2d\u7f6e\u6642\u9418\u555f\u52d5\u3002"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int digitalHours;\n    int digitalMinutes;\n    int digitalSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    digitalHours = digitalClock.getCurrentHour();\n    digitalMinutes = digitalClock.getCurrentMinute();\n    digitalSeconds = digitalClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++digitalSeconds >= 60)\n        {\n            digitalSeconds = 0;\n            if (++digitalMinutes >= 60)\n            {\n                digitalMinutes = 0;\n                if (++digitalHours >= 24)\n                {\n                    digitalHours = 0;\n                }\n            }\n        }\n\n        // Update the clock\n        digitalClock.setTime24Hour(digitalHours, digitalMinutes, digitalSeconds);\n    }\n}\n")),(0,r.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u985e\u6bd4\u6642\u9418\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0b\u7bc4\u4f8b\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6642\u9418\u7bc4\u4f8b"),(0,r.kt)("h2",f({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_digital_clock",mdxType:"Link"},"DigitalClock\u985e\u7684API\u53c3\u8003"))))}C.isMDXComponent=!0}}]);