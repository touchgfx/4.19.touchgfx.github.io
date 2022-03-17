"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1984],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:i,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:i,src:l})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},39130:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(67294),a=r(73727),i=r(11368),l=r(35096),o=r(84487);const c=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),s=r(67023),p=Object.defineProperty,f=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&b(e,r,t[r]);if(m)for(var r of m(t))g.call(t,r)&&b(e,r,t[r]);return e};var k=function(e){var t,r=e,{isNavLink:p,to:b,href:k,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":O,autoAddBaseUrl:N=!0}=r,M=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&g.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:A}}=(0,i.Z)(),{withBaseUrl:j}=(0,u.C)(),C=(0,n.useContext)(c),E=b||k,R=(0,l.Z)(E),T=null==E?void 0:E.replace("pathname://","");let P=void 0!==T?(S=T,N&&(e=>e.startsWith("/"))(S)?j(S):S):void 0;var S;P&&R&&(P=(0,s.applyTrailingSlash)(P,{trailingSlash:x,baseUrl:A}));const Z=(0,n.useRef)(!1),D=p?a.OL:a.rU,_=o.Z.canUseIntersectionObserver,U=(0,n.useRef)();(0,n.useEffect)((()=>(!_&&R&&null!=P&&window.docusaurus.prefetch(P),()=>{_&&U.current&&U.current.disconnect()})),[U,P,_,R]);const F=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,B=!P||!R||F;return P&&R&&!F&&!O&&C.collectLink(P),B?n.createElement("a",v(v({href:P},E&&!R&&{target:"_blank",rel:"noopener noreferrer"}),M)):n.createElement(D,v((L=v({},M),f(L,d({onMouseEnter:()=>{Z.current||null==P||(window.docusaurus.preload(P),Z.current=!0)},innerRef:e=>{var t,r;_&&e&&R&&(t=e,r=()=>{null!=P&&window.docusaurus.prefetch(P)},U.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.current.unobserve(t),U.current.disconnect(),r())}))})),U.current.observe(t))},to:P||""}))),p&&{isActive:w,activeClassName:y}));var L}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return l}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const l=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+l:l}(t,e,r,n)}}function l(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(l=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(a,i)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},80529:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return y}});var n=r(3905),a=r(44035),i=r(29415),l=r(39130),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))f.call(t,r)&&d(e,r,t[r]);return e};const h={id:"framebuffer",title:"\u5e27\u7f13\u51b2\u533a"},g=void 0,b={unversionedId:"basic-concepts/framebuffer",id:"basic-concepts/framebuffer",isDocsHomePage:!1,title:"\u5e27\u7f13\u51b2\u533a",description:"\u5e27\u7f13\u51b2\u662f\u5b58\u50a8\u5668\u7684\u4e00\u90e8\u5206\uff0c\u56fe\u5f62\u5f15\u64ce\u901a\u8fc7\u66f4\u65b0\u5e27\u7f13\u51b2\uff0c\u5c06\u9700\u8981\u663e\u793a\u7684\u4e0b\u4e00\u5e27\u56fe\u50cf\u5305\u542b\u8fdb\u6765\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/framebuffer",permalink:"/4.19/zh-CN/docs/basic-concepts/framebuffer",tags:[],version:"current",frontMatter:{id:"framebuffer",title:"\u5e27\u7f13\u51b2\u533a"},sidebar:"docs",previous:{title:"\u8272\u5f69\u683c\u5f0f",permalink:"/4.19/zh-CN/docs/basic-concepts/color-formats"},next:{title:"\u56fe\u5f62\u5f15\u64ce",permalink:"/4.19/zh-CN/docs/basic-concepts/graphics-engine"}},v=[{value:"\u8272\u5f69",id:"colors",children:[],level:2},{value:"\u663e\u793a\u5668",id:"display",children:[],level:2},{value:"\u5e27\u7f13\u51b2\u7684\u4f4d\u7f6e",id:"location-of-framebuffer",children:[{value:"\u5185\u90e8RAM",id:"internal-ram",children:[],level:3},{value:"\u5916\u90e8RAM",id:"external-ram",children:[],level:3},{value:"\u81ea\u5e26RAM\u7684\u663e\u793a\u5668",id:"display-with-embedded-ram",children:[],level:3}],level:2},{value:"\u5e27\u7f13\u51b2\u7684\u6570\u91cf",id:"amount-of-framebuffers",children:[{value:"\u4e00\u4e2a\u5e27\u7f13\u51b2",id:"one-framebuffer",children:[],level:3},{value:"\u591a\u4e8e\u4e00\u4e2a\u7684\u5e27\u7f13\u51b2",id:"more-than-one-framebuffer",children:[],level:3},{value:"\u5c11\u4e8e\u4e00\u4e2a\u7684\u5e27\u7f13\u51b2",id:"less-than-one-framebuffer",children:[],level:3}],level:2},{value:"\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017",id:"memory-consumption",children:[],level:2}],k={toc:v};function y(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),d),c(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u5e27\u7f13\u51b2\u662f\u5b58\u50a8\u5668\u7684\u4e00\u90e8\u5206\uff0c\u56fe\u5f62\u5f15\u64ce\u901a\u8fc7\u66f4\u65b0\u5e27\u7f13\u51b2\uff0c\u5c06\u9700\u8981\u663e\u793a\u7684\u4e0b\u4e00\u5e27\u56fe\u50cf\u5305\u542b\u8fdb\u6765\u3002"),(0,n.kt)("p",null,"\u5e27\u7f13\u51b2\u662fRAM\u7684\u4e00\u4e2a\u8fde\u7eed\u90e8\u5206\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8bbe\u5b9a\u5408\u9002\u7684\u5927\u5c0f\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-contiguous-memory.svg",noShadow:"true",mdxType:"Figure"},"\u5e27\u7f13\u5b58\u7a7a\u95f4"),(0,n.kt)("p",null,"\u5e27\u7f13\u51b2\u5177\u6709\u76f8\u5e94\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u901a\u5e38\u5c06\u5e27\u7f13\u51b2\u89c6\u4e3a\u5b58\u50a8\u5668\u7684\u4e00\u4e2a\u4e8c\u7ef4\u90e8\u5206\uff0c\u53ef\u901a\u8fc7x\u3001y\u5750\u6807\u68c0\u7d22\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-2d-memory.svg",noShadow:"true",mdxType:"Figure"},"2D\u5e27\u7f13\u5b58\u7a7a\u95f4"),(0,n.kt)("p",null,"\u5e27\u7f13\u51b2\u5177\u6709\u76f8\u5e94\u7684\u8272\u5f69\u683c\u5f0f\u3002 \u5e27\u7f13\u51b2\u4e2d\u7684\u6bcf\u4e2a\u6761\u76ee\u90fd\u662f\u8be5\u8272\u5f69\u683c\u5f0f\u4e0b\u7684\u8272\u5f69\u3002 \u6211\u4eec\u5c06\u5e27\u7f13\u51b2\u4e2d\u7684\u6bcf\u4e00\u4e2a\u8fd9\u6837\u7684\u6761\u76ee\u79f0\u4e3a\u50cf\u7d20\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u8ba1\u7b97\u5e27\u7f13\u51b2\u4e2d\u50cf\u7d20\u7684\u5b58\u50a8\u5730\u5740\u548c\u66f4\u65b0\u5b58\u50a8\u7684\u8272\u5f69\uff0c\u53ef\u4ee5\u66f4\u65b0\u5e27\u7f13\u51b2\u4e2d\u4f4d\u7f6e x,y \u5904\u7684\u50cf\u7d20\u8272\u5f69\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = newColor;\n")),(0,n.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u5e27\u7f13\u51b2\u4e2d\u50cf\u7d20\u7684\u8272\u5f69\u5e76\u7528\u5728\u8ba1\u7b97\u4e2d\u3002 \u4f8b\u5982\uff0c\u6697\u5316\u5e27\u7f13\u51b2\u4e2d\u50cf\u7d20\u7684\u8272\u5f69\uff08\u5047\u8bbe\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"\u6697\u5316"),"\u51fd\u6570\u53ef\u7528\uff09\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );\n")),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5e27\u7f13\u51b2\u5b58\u50a8\u5668\uff0c\u901a\u5e38\u4e0d\u4f1a\u5982\u524d\u6587\u6240\u8ff0\u9010\u4e00\u8bfb\u5199\u50cf\u7d20\uff0c\u800c\u662f\u5229\u7528\u7cfb\u7edf\u7684\u5e95\u5c42\u786c\u4ef6\u529f\u80fd\uff08\u5982Chrom-ART DMA\uff09\u8fdb\u884c\u8bfb\u5199\u3002"),(0,n.kt)("h2",m({},{id:"colors"}),"\u8272\u5f69"),(0,n.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u5e27\u7f13\u51b2\u7684\u50cf\u7d20\u8272\u5f69\u683c\u5f0f\u53ef\u4ee5\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7070\u5ea6"),"1\u30012\u62164\u4f4d\u6bcf\u50cf\u7d20\uff08bpp\uff09\u7070\u5ea6\uff0c\u6216\u8005"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u9ad8\u6216\u771f\u5f69"),"16\u300124\u621632 bpp\u8272\u5f69")),(0,n.kt)("p",null,"\u6bcf\u4e2a\u50cf\u7d20\u4f7f\u7528\u7684\u4f4d\u6570\u8d8a\u591a\uff0c\u5e27\u7f13\u51b2\u80fd\u591f\u5448\u73b0\u7684\u989c\u8272\u5c31\u8d8a\u6e05\u6670\uff0c\u6b64\u5916\uff0c\u6bcf\u4e2a\u50cf\u7d20\u4f7f\u7528\u7684\u4f4d\u6570\u8d8a\u591a\uff0c\u5e27\u7f13\u51b2\u6d88\u8017\u7684\u5b58\u50a8\u7a7a\u95f4\u5c31\u8d8a\u591a\u3002"),(0,n.kt)("h2",m({},{id:"display"}),"\u663e\u793a\u5668"),(0,n.kt)("p",null,"\u5e27\u7f13\u51b2\u7684\u5185\u5bb9\u6700\u7ec8\u4f1a\u88ab\u4f20\u8f93\u5230\u5e76\u663e\u793a\u5728\u7269\u7406\u663e\u793a\u5668\u4e0a\u3002 \u56e0\u6b64\uff0c\u5e27\u7f13\u51b2\u4e0e\u663e\u793a\u5668\u7684\u50cf\u7d20\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u76f8\u540c\u662f\u5341\u5206\u5e38\u89c1\u7684\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/display-and-framebuffer.svg",noShadow:"true",mdxType:"Figure"},"24 bpp\u5e27\u7f13\u51b2\u5185\u5bb9\u548c\u663e\u793a\u5668\u663e\u793a\u5185\u5bb9"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\u53c2\u89c1\u5173\u4e8e",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\u663e\u793a\u5668\u6280\u672f"),"\u7684\u90e8\u5206\u4e86\u89e3\u4e0d\u540c\u663e\u793a\u5668\u7c7b\u578b\u3002"),(0,n.kt)("h2",m({},{id:"location-of-framebuffer"}),"\u5e27\u7f13\u51b2\u7684\u4f4d\u7f6e"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u57fa\u4e8e\u5fae\u63a7\u5236\u5668\u7684\u7ed8\u56fe\u7cfb\u7edf\u7684\u6781\u7b80\u56fe\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/simplified-graphics-system.png",noShadow:!0,width:"400",mdxType:"Figure"},"\u7ed8\u56fe\u7cfb\u7edf\u6781\u7b80\u56fe"),(0,n.kt)("p",null,"\u5e27\u7f13\u51b2\u53ef\u4ee5\u4f4d\u4e8eMCU\u5185\u90e8\u6216\u5916\u90e8RAM\u4e2d\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-placement.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u5e27\u7f13\u51b2\u7684\u53ef\u80fd\u4f4d\u7f6e"),(0,n.kt)("p",null,"\u6bcf\u4e2a\u53ef\u80fd\u4f4d\u7f6e\u90fd\u5177\u6709\u6f5c\u5728\u7684\u4f18\u52bf\u548c\u4e0d\u8db3\u3002"),(0,n.kt)("h3",m({},{id:"internal-ram"}),"\u5185\u90e8RAM"),(0,n.kt)("p",null,"\u5982\u679c\u5e27\u7f13\u51b2\u4f4d\u4e8eMCU\u5185\u90e8\u7684RAM\u4e2d\uff0c\u5bf9\u5e27\u7f13\u51b2\u7684\u8bfb\u548c\u5199\u8bbf\u95ee\u4f1a\u5c3d\u53ef\u80fd\u5feb\u5730\u5b8c\u6210\u3002 \u8fd9\u610f\u5473\u7740TouchGFX\u5e94\u7528\u7684\u8fd0\u884c\u4f1a\u975e\u5e38\u6d41\u7545\u3002 \u53cd\u8fc7\u6765\uff0c\u5185\u90e8RAM\u662f\u5341\u5206\u7a00\u5c11\u7684\u8d44\u6e90\uff0c\u88ab\u7cfb\u7edf\u7684\u8bb8\u591a\u90e8\u4ef6\u4f7f\u7528\uff0c\u56e0\u6b64\uff0c\u5e27\u7f13\u51b2\u5927\u91cf\u5360\u7528\u5185\u90e8RAM\u4e5f\u8bb8\u4e0d\u53ef\u884c\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u53ef\u884c\uff0c\u7531\u4e8e\u65e0\u9700\u989d\u5916\u7684RAM\uff0c\u5728\u5185\u90e8RAM\u4e2d\u63d0\u4f9b\u5e27\u7f13\u51b2\u53ef\u4ee5\u964d\u4f4e\u7cfb\u7edf\u7684\u603b\u4f53\u6210\u672c\u3002"),(0,n.kt)("h3",m({},{id:"external-ram"}),"\u5916\u90e8RAM"),(0,n.kt)("p",null,"\u5982\u679c\u7cfb\u7edf\u6709\u5916\u90e8RAM\uff0c\u53ef\u4ee5\u9009\u62e9\u5728\u5916\u90e8RAM\u800c\u4e0d\u662f\u5185\u90e8RAM\u4e2d\u63d0\u4f9b\u5e27\u7f13\u51b2\u3002 \u5bf9\u5916\u90e8RAM\u7684\u8bfb\u548c\u5199\u8bbf\u95ee\u901a\u5e38\u4f1a\u6bd4\u5185\u90e8RAM\u6162\uff0c\u4f46\u5916\u90e8RAM\u7684\u7a7a\u95f4\u91cf\u901a\u5e38\u5927\u5f97\u591a\u3002 \u56e0\u6b64\uff0c\u6709\u65f6\u5019\u8fd9\u662f\u552f\u4e00\u53ef\u884c\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("p",null,"MCU\u53ef\u80fd\u5177\u6709\u4e00\u4e9b\u529f\u80fd\uff08\u5982\u7f13\u5b58\uff09\uff0c\u53ef\u52a0\u5feb\u5916\u90e8RAM\u7684\u8bbf\u95ee\u901f\u5ea6\u3002 \u53c2\u89c1\u5173\u4e8e",(0,n.kt)("a",m({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU"),"\u7684\u90e8\u5206\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,n.kt)("h3",m({},{id:"display-with-embedded-ram"}),"\u81ea\u5e26RAM\u7684\u663e\u793a\u5668"),(0,n.kt)("p",null,"\u663e\u793a\u5668\u4e0a\u53ef\u80fd\u5d4c\u5165\u4e86\u5b58\u50a8\u5668\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u7cfb\u7edf\u4e2d\u663e\u793a\u5668\u7684\u7c7b\u578b\u3002 \u8fd9\u6bb5\u5b58\u50a8\u7a7a\u95f4\u7528\u6765\u4fdd\u5b58\u663e\u793a\u5668\u201c\u5b9e\u9645\u201d\u50cf\u7d20\u7684\u5185\u5bb9\u3002 \u663e\u793a\u5668\u4e2d\u4fdd\u5b58\u50cf\u7d20\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u610f\u5473\u7740\u5728\u663e\u793a\u5668\u4ecd\u6d3b\u52a8\u65f6\uff0cMCU\u53ef\u80fd\u5904\u4e8e\u7a7a\u95f2\u72b6\u6001\u3002"),(0,n.kt)("p",null,"\u7531\u4e8e\u663e\u793a\u5668\u5b58\u50a8\u5668\u5e76\u975e\u5b58\u50a8\u5668\u6620\u5c04\uff0c\u65e2\u4e0d\u6253\u7b97\u4e5f\u4e0d\u9002\u5408\u7528\u4e8e\u50cf\u7d20\u7684\u968f\u673a\u8bfb\u53d6\u6216\u5199\u5165\uff0c\u56e0\u6b64\u4e0d\u53ef\u80fd\u5c06TouchGFX\u5e27\u7f13\u51b2\u653e\u5728\u5728\u663e\u793a\u5668\u81ea\u5e26\u7684RAM\u4e2d\u3002 \u76f8\u53cd\uff0cTouchGFX\u5c06\u5e27\u7f13\u51b2\u7f6e\u4e8e\u5185\u90e8\u6216\u5916\u90e8RAM\u4e2d\uff0c\u5e76\u5728\u9002\u5f53\u7684\u65f6\u5019\u5c06\u5176\u4f20\u8f93\u5230\u663e\u793a\u5668RAM\u3002"),(0,n.kt)("h2",m({},{id:"amount-of-framebuffers"}),"\u5e27\u7f13\u51b2\u7684\u6570\u91cf"),(0,n.kt)("p",null,"TouchGFX\u53ef\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4e00\u4e2a\u3001\u591a\u4e2a\u6216\u4e0d\u8db3\u4e00\u4e2a\u7684\u5e27\u7f13\u51b2\u3002 \u5e27\u7f13\u51b2\u7684\u6570\u91cf\u4f1a\u5f71\u54cd\u5e94\u7528\u7684\u89c6\u89c9\u8868\u73b0\u3001\u6027\u80fd\u548c\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017\u3002"),(0,n.kt)("h3",m({},{id:"one-framebuffer"}),"\u4e00\u4e2a\u5e27\u7f13\u51b2"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e27\u7f13\u51b2\u8db3\u4ee5\u5b8c\u5168\u5bb9\u7eb3\u8981\u4f20\u8f93\u5230\u663e\u793a\u5668\u7684\u6240\u6709\u50cf\u7d20\u3002 \u5f53\u677f\u4e0a\u7684\u663e\u793a\u5668\u6ca1\u6709\u81ea\u5e26RAM\u65f6\uff0c\u9700\u8981\uff08\u81f3\u5c11\uff09\u4e00\u4e2a\u5e27\u7f13\u51b2\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u6240\u663e\u793a\u56fe\u5f62\u7684\u590d\u6742\u5ea6\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89c6\u89c9\u5931\u771f\uff0c\u5219\u53ea\u9700\u4e00\u4e2a\u5e27\u7f13\u51b2\u3002"),(0,n.kt)("h3",m({},{id:"more-than-one-framebuffer"}),"\u591a\u4e8e\u4e00\u4e2a\u7684\u5e27\u7f13\u51b2"),(0,n.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u5177\u6709\u591a\u4e2a\u5e27\u7f13\u51b2\u8868\u793a\u6709\u4e24\u4e2a\u5e27\u7f13\u51b2\u3002 \u4e00\u4e2a\u5e27\u7f13\u51b2\u7528\u4e8e\u5199\u5165\u4e0b\u4e00\u5e45\u9700\u8981\u663e\u793a\u7684\u56fe\u50cf\uff0c\u53e6\u4e00\u4e2a\u5e27\u7f13\u51b2\u7528\u4e8e\u5c06\u56fe\u50cf\u4f20\u8f93\u5230\u663e\u793a\u5668\u3002 \u8fd9\u610f\u5473\u7740\u4e0d\u4f1a\u53d1\u751f\u5931\u771f\uff08\u5982\u6495\u88c2\uff09\u3002"),(0,n.kt)("h3",m({},{id:"less-than-one-framebuffer"}),"\u5c11\u4e8e\u4e00\u4e2a\u7684\u5e27\u7f13\u51b2"),(0,n.kt)("p",null,"\u5c11\u4e8e\u4e00\u4e2a\u7684\u5e27\u7f13\u51b2\u901a\u5e38\u610f\u5473\u7740"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8017\u7684\u5b58\u50a8\u7a7a\u95f4\u8f83\u5c11"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u6267\u884c\u66f4\u591a\u7ed8\u5236\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u5411\u663e\u793a\u5668\u4f20\u8f93\u66f4\u591a\u5185\u5bb9")),(0,n.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u4e0d\u8db3\u4e00\u4e2a\u7684\u5e27\u7f13\u51b2\u8868\u793a\u90e8\u5206\u5e27\u7f13\u51b2\u3002 \u90e8\u5206\u5e27\u7f13\u51b2\u65b9\u6848\u53ea\u9002\u7528\u4e8e\u5177\u6709\u81ea\u5e26\u663e\u793aRAM\u7684\u663e\u793a\u5668\u3002"),(0,n.kt)("h2",m({},{id:"memory-consumption"}),"\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017"),(0,n.kt)("p",null,"\u5e27\u7f13\u51b2\u4e2d\u7684\u8272\u5f69\u6570\u91cf\u548c\u50cf\u7d20\u6570\u91cf\u51b3\u5b9a\u4e86\u5e27\u7f13\u51b2\u6d88\u8017\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,n.kt)("p",null,"\u5e27\u7f13\u51b2\u4f7f\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u901a\u5e38\u4e3a ",(0,n.kt)("strong",{parentName:"p"}," \u5bbd ","*"," \u9ad8 ","*"," \u4ee5\u4f4d\u6570\u8ba1\u7684\u8272\u6df1 / 8 ")," \u5b57\u8282\u6570\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),"\u5206\u8fa8\u7387\uff08\u50cf\u7d20\uff09"),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),"\u8272\u5f69\uff08bpp\uff09"),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),"\u8ba1\u7b97"),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),"\u6d88\u8017\u7684\u5b58\u50a8\u7a7a\u95f4\uff08\u5b57\u8282\uff09"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"800x480"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"16 bpp"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"800 ","*"," 480 ","*"," 16 / 8"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"768000 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"480x272"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"24 bpp"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"480 ","*"," 272 ","*"," 24 / 8"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"391680 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"100x100"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"8 bpp"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"100 ","*"," 100 ","*","  8 / 8"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"10000 B")))),(0,n.kt)("p",null,"\u5f53\u5177\u6709\u4e00\u4e2a\u4ee5\u4e0a\u7684\u5e27\u7f13\u51b2\u65f6\uff0c\u6d88\u8017\u7684\u5b58\u50a8\u7a7a\u95f4\u76f8\u5e94\u5730\u8f83\u5927\u3002 \u4f8b\u5982\uff0c\u5f53\u4f7f\u7528\u53cc\u91cd\u7f13\u51b2\u65b9\u6848\u65f6\uff0c\u4f7f\u7528\u4e24\u4e2a\u5e27\u7f13\u51b2\u4f1a\u6d88\u8017\u4e24\u500d\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,n.kt)("p",null,"\u5f53\u5e27\u7f13\u51b2\u4e0d\u8db3\u4e00\u4e2a\u65f6\uff0c\u7531\u5e94\u7528\u660e\u786e\u5730\u5206\u914d\u548c\u63a7\u5236\u5b58\u50a8\u7a7a\u95f4\u7684\u91cf\u3002 \u56e0\u6b64\uff0c\u5b58\u50a8\u7a7a\u95f4\u7684\u6d88\u8017\u91cf\u662f\u5b8c\u5168\u53ef\u5b9a\u5236\u7684\uff0c\u4f46\u5e94\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u91cf\u8fc7\u5c11\u4f1a\u5f71\u54cd\u6574\u4f53\u56fe\u5f62\u6027\u80fd\u3002"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"STM32 ",(0,n.kt)(l.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",mdxType:"Link"},"LTDC"),"\u663e\u793a\u5668\u63a7\u5236\u5668\u6587\u6863\u63d0\u4f9b\u4e86\u5173\u4e8e\u5e27\u7f13\u51b2\u7684\u66f4\u591a\u4fe1\u606f")))}y.isMDXComponent=!0}}]);