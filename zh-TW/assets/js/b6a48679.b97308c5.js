"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7683],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,g=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},65407:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){var t,n;const l=(0,a.Z)(e.url),o=null!=(t=e.width)?t:"100%",i=null!=(n=e.height)?n:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:o,height:i},r.createElement("source",{src:l,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},44966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return N},default:function(){return x},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(29415),o=n(39130),i=n(22425),p=n(65407),m=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&k(e,n,t[n]);if(c)for(var n of c(t))g.call(t,n)&&k(e,n,t[n]);return e};const v={id:"video",title:"\u5f71\u7247"},N=void 0,f={unversionedId:"development/ui-development/ui-components/miscellaneous/video",id:"development/ui-development/ui-components/miscellaneous/video",title:"\u5f71\u7247",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/video.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/video",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/miscellaneous/video",draft:!1,tags:[],version:"current",frontMatter:{id:"video",title:"\u5f71\u7247"},sidebar:"docs",previous:{title:"\u5100\u9336",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/miscellaneous/gauge"},next:{title:"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/general-ui-component-performance"}},b={},y=[{value:"\u5c0f\u5de5\u5177\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],w={toc:y};function x(e){var t,n=e,{components:m}=n,k=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},w),k),d(t,u({components:m,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u201cVideo\uff08\u5f71\u7247\uff09\u201d\u662f\u80fd\u5920\u4ee5AVI\u683c\u5f0f\u64ad\u653eJPEG\u5f71\u7247\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)(p.Z,{width:"484",height:"302",url:"/img/development/ui-development/ui-components/video/widget-appearance.mp4",mdxType:"LoopVideo"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u201cVideo\uff08\u5f71\u7247\uff09\u201d"),(0,r.kt)("h2",h({},{id:"widget-group"}),"\u5c0f\u5de5\u5177\u7d44"),(0,r.kt)("p",null,"\u5f71\u7247\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Miscellaneous\u5c0f\u5de5\u5177\u7d44\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/video/widget-group.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u201cVideo\uff08\u5f71\u7247\uff09\u201d"),(0,r.kt)("h2",h({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u5f71\u7247\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u7a31")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5c0f\u5de5\u5177\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u5de5\u5177\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u5de5\u5177\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u5de5\u5177\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u5de5\u5177\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u5de5\u5177\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u898b")," \u6307\u5b9a\u5c0f\u5de5\u5177\u7684\u53ef\u898b\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u4f7f\u5c0f\u5de5\u5177\u4e0d\u53ef\u898b\u9084\u5c07\u7981\u7528\u8207\u5c0f\u5de5\u5177\u4e4b\u9593\u901a\u904e\u87a2\u5e55\u9032\u884c\u7684\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u7bc4\u4f8b")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Sample"),"\u6307\u5b9a\u5c0f\u5de5\u5177\u7684\u7bc4\u4f8b\u5f71\u7247\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9019\u4e9b\u7bc4\u4f8b\u514d\u8cbb\u4f7f\u7528\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5f71\u7247")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Video"),"\u6307\u5b9a\u5c0f\u5de5\u5177\u61c9\u8a72\u4f7f\u7528\u7684\u5f71\u7247\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Auto Play"),"\u6307\u5b9a\u9032\u5165\u87a2\u5e55\u6642\u662f\u5426\u81ea\u52d5\u64ad\u653e\u5f71\u7247\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Loop"),"\u6307\u5b9a\u5f71\u7247\u662f\u5426\u61c9\u8a72\u91cd\u8907\u64a5\u653e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u5de5\u5177\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u5de5\u5177\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u5de5\u5177\u662f\u5426\u53ef\u7e6a\u88fd ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,r.kt)("h2",h({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u7684\u5f71\u7247\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",h({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c0f\u5de5\u5177\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Play")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u64ad\u653e\u5f71\u7247")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Pause")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u66ab\u505c\u5f71\u7247\u64ad\u653e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Stop")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u505c\u6b62\u5f71\u7247\u64ad\u653e")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u5de5\u5177\u64cd\u4f5c")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52d5\u5c0f\u5de5\u5177")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u5de5\u5177\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u96b1\u85cf\u5c0f\u5de5\u5177")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u5de5\u5177\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u986f\u793a\u5c0f\u5de5\u5177")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u5de5\u5177\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",h({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u89f8\u767c\u689d\u4ef6")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5f71\u7247\u5df2\u7d50\u675f")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5f71\u7247\u5c0f\u5de5\u5177\u7d50\u675f\u4e86\u5f71\u7247\u64ad\u653e\u3002")))),(0,r.kt)("h2",h({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u5f71\u7247\u5c0f\u5de5\u5177\u662f\u4e00\u7a2e\u5bc6\u96c6\u578b\u5143\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u5f71\u7247\u8996\u70ba\u8981\u6c42\u9ad8\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u7d30\u7bc0\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",h({parentName:"p"},{href:"../general-ui-component-performance"}),"\u2018\u901a\u7528UI\u5143\u4ef6\u6027\u80fd\u2019"),"\u7ae0\u7bc0\u6216",(0,r.kt)("a",h({parentName:"p"},{href:"../../touchgfx-engine-features/video"}),"\u2018MJPEG\u5f71\u7247\u2019"),"\u6587\u7ae0\u3002"),(0,r.kt)("h2",h({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",h({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bDesigner\u662f\u5982\u4f55\u5275\u5efa\u5f71\u7247\u7684\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <videos/VideoDatabase.hpp>\n\nmainViewBase::mainViewBase()\n{\n    video.setPosition(0, 0, 480, 272);\n    video.setRepeat(true);\n    video.setVideoData(video_SampleVideo1_480x272_bin_start, video_SampleVideo1_480x272_bin_length);\n    video.play();\n\n    add(video);\n}\n")),(0,r.kt)("h3",h({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u5f71\u7247\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u4e4b\u4e00\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/video-example.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5f71\u7247\u7bc4\u4f8bUI\u7bc4\u672c"),(0,r.kt)("h2",h({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_video_widget",mdxType:"Link"},"VideoWidget\u985e\u7684API\u53c3\u8003")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../../touchgfx-engine-features/video",mdxType:"Link"},"\u5f71\u7247"))))}x.isMDXComponent=!0}}]);