"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3545],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,g=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[c]="string"==typeof e?e:r,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return N},metadata:function(){return b},toc:function(){return w}});var a=n(3905),r=n(44035),l=n(29415),i=n(31217),m=n(37793),o=n(39130),p=n(22425),d=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))k.call(t,n)&&h(e,n,t[n]);return e};const N={id:"tiled-image",title:"Tiled Image"},f=void 0,b={unversionedId:"development/ui-development/ui-components/images/tiled-image",id:"development/ui-development/ui-components/images/tiled-image",title:"Tiled Image",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/tiled-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/tiled-image",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/images/tiled-image",draft:!1,tags:[],version:"current",frontMatter:{id:"tiled-image",title:"Tiled Image"},sidebar:"docs",previous:{title:"\u53ef\u7e2e\u653e\u5716\u50cf",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/images/scalable-image"},next:{title:"\u52d5\u756b\u5716\u50cf",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/images/animated-image"}},y={},w=[{value:"\u8aaa\u660e",id:"description",level:2},{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],T={toc:w};function O(e){var t,n=e,{components:d}=n,h=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},T),h),c(t,u({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h2",v({},{id:"description"}),"\u8aaa\u660e"),(0,a.kt)("p",null,"Tiled Image \u662f\u80fd\u5920\u986f\u793a\u5e73\u92ea\u9ede\u9663\u5716\u7684\u7c21\u55ae\u5c0f\u90e8\u4ef6\u3002 \u9019\u610f\u5473\u8457\u7576 Tiled Image \u5927\u65bc\u63d0\u4f9b\u7684\u9ede\u9663\u5716\u6642\uff0c\u6703\u5728\u6c34\u6e96\u548c\u5782\u76f4\u65b9\u5411\u91cd\u8907\u9ede\u9663\u5716\u3002 \u9ede\u9663\u5716\u53ef\u8207\u80cc\u666f\u9032\u884c Alpha \u6df7\u5408\uff0c\u4e26\u53ef\u5305\u542b\u900f\u660e\u5340\u57df\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/tiled-image/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684 Tiled Image"),(0,a.kt)("h2",v({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,a.kt)("p",null,"Tiled Image \u4f4d\u65bc TouchGFX Designer \u4e2d\u7684Images\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/tiled-image/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer \u4e2d\u7684 Tiled Image"),(0,a.kt)("h2",v({},{id:"properties"}),"\u5c6c\u6027"),(0,a.kt)("p",null,"TouchGFX Designer \u4e2d Tiled Image \u7684\u5c6c\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,a.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,a.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \u548c ",(0,a.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53ef\u898b")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u4f7f\u5c0f\u90e8\u4ef6\u4e0d\u53ef\u898b\u9084\u5c07\u7981\u7528\u8207\u5c0f\u90e8\u4ef6\u4e4b\u9593\u901a\u904e\u87a2\u5e55\u9032\u884c\u7684\u4ea4\u4e92\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u6a23\u5f0f")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u9810\u5b9a\u7fa9\u8a2d\u7f6e\uff0c\u7528\u65bc\u5c07\u6240\u9078\u5c6c\u6027\u8a2d\u70ba\u9810\u5b9a\u7fa9\u7684\u503c\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9019\u4e9b\u6a23\u5f0f\u5305\u542b\u53ef\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Image")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u5e73\u92ea\u7e6a\u5716\u8d77\u59cb\u8655\u5716\u50cf\u7684\u504f\u79fb\u91cf\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5efa\u8b70\u4f7f\u7528\u5305\u542b\u91cd\u8907\u5716\u6a23\u7684\u5716\u50cf\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Offset")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u5e73\u92ea\u7e6a\u5716\u8d77\u59cb\u8655\u5716\u50cf\u7684\u504f\u79fb\u91cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u900f\u660e\u5ea6\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u4ecb\u65bc0\u548c255\u4e4b\u9593\u3002 0\u70ba\u5b8c\u5168\u900f\u660e\uff0c255\u70ba\u5be6\u5fc3\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd\u5176 ",(0,a.kt)("em",{parentName:"td"},"Alpha")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,a.kt)("em",{parentName:"td"},"X")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null))))),(0,a.kt)("h2",v({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86Tiled Image\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h3",v({},{id:"actions"}),"\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Resize widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u8abf\u6574\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,a.kt)("h3",v({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,a.kt)("p",null,"Tiled Image\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h2",v({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"Tiled Image \u4f9d\u8cf4\u65bc\u5716\u50cf\u7e6a\u5716\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u5176\u8996\u70ba\u57f7\u884c\u901f\u5ea6\u8f03\u5feb\u7684\u5c0f\u90e8\u4ef6\u3002",(0,a.kt)("br",null)," Tiled Image \u6703\u591a\u6b21\u91cd\u65b0\u7e6a\u88fd\u540c\u4e00\u5716\u50cf\uff0c\u4ee5\u8986\u84cb\u5c0f\u90e8\u4ef6\u7684\u5340\u57df\u3002 \u56e0\u6b64\uff0c\u6e90\u5716\u50cf\u8d8a\u5c0f\uff0c\u5716\u50cf\u7e6a\u88fd\u6b21\u6578\u8d8a\u591a\u3002"),(0,a.kt)("p",null,"\u95dc\u65bc\u5716\u50cf\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,a.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,a.kt)("h2",v({},{id:"examples"}),"\u7bc4\u4f8b"),(0,a.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    tiledImage.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_TEXTURES_IRONGRIP_ID));\n    tiledImage.setPosition(35, 36, 50, 50);\n    tiledImage.setOffset(0, 0);\n\n    add(tiledImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(m.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528TiledImage\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,a.kt)(i.Z,{mdxType:"InlineCode"},"tiledImage.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,a.kt)("h3",v({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u4ecb\u7d39\u4e86\u5982\u4f55\u901a\u904e\u6301\u7e8c\u8abf\u6574",(0,a.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," \u4e2d\u7684\u504f\u79fb\u5c07\u904b\u52d5\u52d5\u756b\u7e6a\u88fd\u5230 Tiled Image \u4e2d"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:"{20-23}","{20-23}":!0}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    int x = tiledImage.getXOffset();\n    int y = tiledImage.getYOffset();\n    tiledImage.setOffset(x + 1, y + 1);\n    tiledImage.invalidate();\n}\n")),(0,a.kt)("h2",v({},{id:"api-reference"}),"API\u53c3\u8003"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_tiled_image",mdxType:"Link"},"TiledImage\u985e\u7684API\u53c3\u8003"))))}O.isMDXComponent=!0}}]);