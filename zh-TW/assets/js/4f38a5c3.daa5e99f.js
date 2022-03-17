"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5737],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(a),c=r,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,a){a.d(e,{Z:function(){return f}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),o=a(84487);const d=(0,n.createContext)({collectLink:()=>{}});var u=a(25026),p=a(67023),m=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,N=(t,e)=>{for(var a in e||(e={}))g.call(e,a)&&b(t,a,e[a]);if(k)for(var a of k(e))h.call(e,a)&&b(t,a,e[a]);return t};var f=function(t){var e,a=t,{isNavLink:m,to:b,href:f,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)g.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&k)for(var n of k(t))e.indexOf(n)<0&&h.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,l.Z)(),{withBaseUrl:P}=(0,u.C)(),A=(0,n.useContext)(d),j=b||f,B=(0,i.Z)(j),S=null==j?void 0:j.replace("pathname://","");let I=void 0!==S?(Z=S,x&&(t=>t.startsWith("/"))(Z)?P(Z):Z):void 0;var Z;I&&B&&(I=(0,p.applyTrailingSlash)(I,{trailingSlash:O,baseUrl:T}));const L=(0,n.useRef)(!1),D=m?r.OL:r.rU,U=o.Z.canUseIntersectionObserver,C=(0,n.useRef)();(0,n.useEffect)((()=>(!U&&B&&null!=I&&window.docusaurus.prefetch(I),()=>{U&&C.current&&C.current.disconnect()})),[C,I,U,B]);const E=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,H=!I||!B||E;return I&&B&&!E&&!v&&A.collectLink(I),H?n.createElement("a",N(N({href:I},j&&!B&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(D,N((W=N({},w),s(W,c({onMouseEnter:()=>{L.current||null==I||(window.docusaurus.preload(I),L.current=!0)},innerRef:t=>{var e,a;U&&t&&B&&(e=t,a=()=>{null!=I&&window.docusaurus.prefetch(I)},C.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(C.current.unobserve(e),C.current.disconnect(),a())}))})),C.current.observe(e))},to:I||""}))),m&&{isActive:y,activeClassName:_}));var W}},35096:function(t,e,a){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),l="/"===r||r===n?r:(i=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},77638:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return k},contentTitle:function(){return g},metadata:function(){return h},toc:function(){return b},default:function(){return f}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&s(t,a,e[a]);if(u)for(var a of u(e))m.call(e,a)&&s(t,a,e[a]);return t};const k={title:"AnimatedImageButtonStyle"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_animated_image_button_style",id:"api/classes/classtouchgfx_1_1_animated_image_button_style",isDocsHomePage:!1,title:"AnimatedImageButtonStyle",description:"An animated image button style.",source:"@site/docs/api/classes/classtouchgfx_1_1_animated_image_button_style.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_animated_image_button_style",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_animated_image_button_style",tags:[],version:"current",frontMatter:{title:"AnimatedImageButtonStyle"},sidebar:"docs",previous:{title:"AnimatedImage",permalink:"/4.19/zh-TW/docs/api/classes/classtouchgfx_1_1_animated_image"},next:{title:"AnimationSetting",permalink:"/4.19/zh-TW/docs/api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting"}},b=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Protected Functions",id:"protected-functions",children:[],level:2},{value:"Protected Attributes",id:"protected-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"AnimatedImageButtonStyle",id:"animatedimagebuttonstyle",children:[],level:3},{value:"setBitmaps",id:"setbitmaps",children:[],level:3},{value:"setBitmapXY",id:"setbitmapxy",children:[],level:3},{value:"setUpdateTicksInterval",id:"setupdateticksinterval",children:[],level:3}],level:2},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"handleAlphaUpdated",id:"handlealphaupdated",children:[],level:3},{value:"handlePressedUpdated",id:"handlepressedupdated",children:[],level:3}],level:2},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"buttonAnimatedImage",id:"buttonanimatedimage",children:[],level:3}],level:2}],N={toc:b};function f(t){var e,a=t,{components:i}=a,s=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=c(c({},N),s),o(e,d({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," An animated image button style.\nAn animated image button style. This class is supposed to be used with one of the ButtonTrigger classes to create a functional button. This class will show the first or last image of an animated image depending on the state of the button (pressed or released). When the state changes the button will show the sequence of images in forward or reversed order."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_animated_image_button_style"}),"AnimatedImageButtonStyle")," will set the size of the enclosing container (normally ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button_container"}),"AbstractButtonContainer"),") to the size of the first ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". This can be overridden by calling setWidth/setHeight after setting the bitmaps."),(0,n.kt)("p",null,"The position of the bitmap can be adjusted with setBitmapXY (default is upper left corner)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T")," Generic type parameter. Typically a ",(0,n.kt)("a",c({parentName:"li"},{href:"classtouchgfx_1_1_abstract_button_container"}),"AbstractButtonContainer")," subclass.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button_container"}),"AbstractButtonContainer")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),": T"),(0,n.kt)("h2",c({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-animatedimagebuttonstyle",mdxType:"Link"},"AnimatedImageButtonStyle")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-setbitmaps",mdxType:"Link"},"setBitmaps")),"(const ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," & bitmapStart, const ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," & bitmapEnd)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Sets the bitmaps.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-setbitmapxy",mdxType:"Link"},"setBitmapXY")),"(uint16_t x, uint16_t y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Sets bitmap x and y.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-setupdateticksinterval",mdxType:"Link"},"setUpdateTicksInterval")),"(uint8_t updateInterval)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Sets update ticks interval.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"protected-functions"}),"Protected Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-handlealphaupdated",mdxType:"Link"},"handleAlphaUpdated")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Handles what should happen when the alpha is updated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-handlepressedupdated",mdxType:"Link"},"handlePressedUpdated")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Handles what should happen when the pressed state is updated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"protected-attributes"}),"Protected Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_animated_image"}),"AnimatedImage")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#variable-buttonanimatedimage",mdxType:"Link"},"buttonAnimatedImage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The button animated image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_animated_image_button_style#function-animatedimagebuttonstyle",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"animatedimagebuttonstyle"}),"AnimatedImageButtonStyle"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-animatedimagebuttonstyle",mdxType:"Link"},"AnimatedImageButtonStyle")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_animated_image_button_style#function-setbitmaps",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"setbitmaps"}),"setBitmaps"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-setbitmaps",mdxType:"Link"},"setBitmaps")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," &"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bitmapStart ,"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," &"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bitmapEnd"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets the bitmaps. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bitmapStart"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The bitmap start.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bitmapEnd"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The bitmap end."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_animated_image_button_style#function-setbitmapxy",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"setbitmapxy"}),"setBitmapXY"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-setbitmapxy",mdxType:"Link"},"setBitmapXY")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"uint16_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"uint16_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets bitmap x and y. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"An uint16_t to process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"An uint16_t to process."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_animated_image_button_style#function-setupdateticksinterval",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"setupdateticksinterval"}),"setUpdateTicksInterval"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-setupdateticksinterval",mdxType:"Link"},"setUpdateTicksInterval")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"updateInterval"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets update ticks interval. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"updateInterval"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The update interval."))))))),(0,n.kt)("h2",c({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_animated_image_button_style#function-handlealphaupdated",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"handlealphaupdated"}),"handleAlphaUpdated"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-handlealphaupdated",mdxType:"Link"},"handleAlphaUpdated")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Handles what should happen when the alpha is updated. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_animated_image_button_style#function-handlepressedupdated",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"handlepressedupdated"}),"handlePressedUpdated"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_animated_image_button_style#function-handlepressedupdated",mdxType:"Link"},"handlePressedUpdated")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Handles what should happen when the pressed state is updated. "))),(0,n.kt)("h2",c({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_animated_image_button_style#variable-buttonanimatedimage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"buttonanimatedimage"}),"buttonAnimatedImage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_animated_image"}),"AnimatedImage")," buttonAnimatedImage ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The button animated image. "))))}f.isMDXComponent=!0}}]);