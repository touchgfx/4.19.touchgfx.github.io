"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6425],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),o=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(n),s=a,k=d["".concat(m,".").concat(s)]||d[s]||c[s]||l;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,p=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:p,target:"_blank"},r.createElement("img",{width:n,height:l,src:p})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:p,target:"_blank"},r.createElement("img",{width:n,height:l,src:p})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=p},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=p},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=p},24884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return T},frontMatter:function(){return x},metadata:function(){return b},toc:function(){return w}});var r=n(3905),a=n(44035),l=n(29415),p=n(93054),i=n(37793),m=n(39130),o=n(31217),u=n(22425),c=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&N(e,n,t[n]);if(k)for(var n of k(t))h.call(t,n)&&N(e,n,t[n]);return e};const x={id:"texture-mapper",title:"\u7eb9\u7406\u6620\u5c04\u5668"},f=void 0,b={unversionedId:"development/ui-development/ui-components/images/texture-mapper",id:"development/ui-development/ui-components/images/texture-mapper",title:"\u7eb9\u7406\u6620\u5c04\u5668",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/texture-mapper.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/texture-mapper",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/images/texture-mapper",tags:[],version:"current",frontMatter:{id:"texture-mapper",title:"\u7eb9\u7406\u6620\u5c04\u5668"},sidebar:"docs",previous:{title:"\u52a8\u753b\u56fe\u50cf",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/images/animated-image"},next:{title:"Containers",permalink:"/4.19/zh-CN/docs/category/containers"}},y={},w=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"Origo &amp; Camera",id:"origo--camera",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],M={toc:w};function T(e){var t,n=e,{components:c}=n,N=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},M),N),d(t,s({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u7eb9\u7406\u6620\u5c04\u5668\u662f\u4e00\u79cd\u63a7\u4ef6\uff0c\u80fd\u591f\u7ed8\u5236\u8f6c\u6362\u540e\u7684\u56fe\u50cf\uff0c\u53ef\u4ee5\u81ea\u7531\u7f29\u653e\u5e76\u56f4\u7ed5\u53ef\u8c03\u539f\u70b9\u65cb\u8f6c\u3002 \u89c6\u89d2\u5370\u8c61\u4e5f\u53ef\u901a\u8fc7\u5e94\u7528\u865a\u62df\u76f8\u673a\u6765\u5b9e\u73b0\uff0c\u5176\u4e2d\u89c6\u89d2\u7684\u6570\u91cf\u662f\u53ef\u8c03\u7684\u3002"),(0,r.kt)(p.Z,{mdxType:"Note"},(0,r.kt)("li",null,"\u8be5\u63a7\u4ef6\u5bf9MCU\u8d1f\u8f7d\u6709\u5f88\u5927\u5f71\u54cd\u3002"),(0,r.kt)("li",null,"\u8be5\u63a7\u4ef6\u4e0d\u652f\u6301\u6bcf\u50cf\u7d201\u4f4d\u7684\u8272\u6df1\u3002")),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u7eb9\u7406\u6620\u5c04\u5668"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u7eb9\u7406\u6620\u5c04\u5668\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684\u56fe\u50cf\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u7eb9\u7406\u6620\u5c04\u5668"),(0,r.kt)("h2",v({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u7eb9\u7406\u6620\u5c04\u5668\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u52a8\u753b\u7eb9\u7406\u6620\u5c04\u5668"),"\u6307\u5b9a\u7eb9\u7406\u6620\u5c04\u5668\u662f\u5426\u5e94\u8be5\u751f\u6210\u4e3a\u52a8\u753b\u7eb9\u7406\u6620\u5c04\u5668\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6837\u5f0f")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6837\u5f0f")," \u6307\u5b9a\u63a7\u4ef6\u7684\u9884\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u7528\u4e8e\u5c06\u6240\u9009\u5c5e\u6027\u8bbe\u4e3a\u9884\u5b9a\u4e49\u7684\u503c\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u8fd9\u4e9b\u6837\u5f0f\u5305\u542b\u53ef\u514d\u8d39\u4f7f\u7528\u7684\u56fe\u50cf"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u56fe\u50cf"),"\u6307\u5b9a\u8981\u8f6c\u6362\u7684\u56fe\u50cf\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a\u56fe\u50cf\u5230\u4e2d\u5fc3")," \u6307\u5b9a\u56fe\u50cf\u4f4d\u7f6e\u662f\u5426\u5e94\u9501\u5b9a\u5728\u63a7\u4ef6\u7684\u4e2d\u5fc3\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u7eb9\u7406\u6620\u5c04\u5668\u5728\u8fd0\u884c\u65f6\u8c03\u6574\u5927\u5c0f\uff0c\u8be5\u9009\u9879\u4e0d\u4f1a\u4e3a\u56fe\u50cf\u4fdd\u6301\u5c45\u4e2d\u4f4d\u7f6e\u3002"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u8981\u8f6c\u6362\u7684\u56fe\u50cf\u5de6\u4e0a\u89d2\u5728\u63a7\u4ef6\u4e2d\u7684\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u89d2&\u7f29\u653e")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X\u8f74\u89d2"),"\u3001",(0,r.kt)("em",{parentName:"td"},"Y\u8f74\u89d2"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Z\u8f74\u89d2"),"\u6307\u5b9a\u56fe\u50cf\u5728\u63a7\u4ef6\u5185\u7684\u65cb\u8f6c\u53d8\u6362\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u89d2\u5ea6\u7684\u5355\u4f4d\u662f\u5f27\u5ea6\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u7f29\u653e"),"\u6307\u5b9a\u56fe\u50cf\u5728\u63a7\u4ef6\u5185\u7684\u7f29\u653e\u53d8\u6362\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Origo")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a\u539f\u70b9\u5230\u4e2d\u5fc3"),"\u6307\u5b9a\u56fe\u50cf\u7684\u65cb\u8f6c\u70b9\u662f\u5426\u5e94\u9501\u5b9a\u5728\u63a7\u4ef6\u7684\u4e2d\u5fc3\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u7eb9\u7406\u6620\u5c04\u5668\u5728\u8fd0\u884c\u65f6\u8c03\u6574\u5927\u5c0f\uff0c\u8be5\u9009\u9879\u4e0d\u4f1a\u4fdd\u6301\u5c45\u4e2d\u7684\u539f\u70b9\u4f4d\u7f6e\u3002"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"X\u8f74\u539f\u70b9"),", ",(0,r.kt)("em",{parentName:"td"},"Y\u8f74\u539f\u70b9"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Z\u8f74\u539f\u70b9"),"\u6307\u5b9a\u4e00\u4e2a\u70b9\uff0c\u8ba9\u63a7\u4ef6\u5185\u7684\u56fe\u50cf\u56f4\u7ed5\u5176\u8fdb\u884c\u65cb\u8f6c\u548c\u7f29\u653e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",v({parentName:"td"},{href:"#origo--camera"}),"\u539f\u70b9 & \u76f8\u673a\u4e00\u8282"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Camera")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u76f8\u673a\u8ddd\u79bb"),"\u6307\u5b9a\u865a\u62df\u76f8\u673a\u7684\u8ddd\u79bb\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"\u5f53\u56fe\u50cf\u65cb\u8f6c\u65f6\uff0c\u8fd9\u5c06\u6539\u53d8\u89c6\u89d2\u6570\u91cf\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6e32\u67d3\u7b97\u6cd5")," \u6307\u5b9a\u7528\u4e8e\u5728\u63a7\u4ef6\u5185\u6e32\u67d3\u56fe\u50cf\u7684\u7b97\u6cd5\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9009\u9879\u6709\u201c\u6700\u8fd1\u90bb\u63d2\u503c\u201d\u548c\u201c\u53cc\u7ebf\u6027\u63d2\u503c\u201d\u3002"),"\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u63a7\u4ef6\u7684\u900f\u660e\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u63a7\u4ef6Alpha\u503c\u7684\u8303\u56f4\u662f0\u5230255\u3002 0\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c255\u8868\u793a\u4e0d\u900f\u660e\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h3",v({},{id:"origo--camera"}),"Origo & Camera"),(0,r.kt)("p",null,"\u539f\u70b9\u51b3\u5b9a\u6240\u9009\u56fe\u50cf\u5e94\u8be5\u56f4\u7ed5\u54ea\u4e2a\u70b9\u8fdb\u884c\u53d8\u6362\u3002 \u5750\u6807\u5c5e\u6027",(0,r.kt)("em",{parentName:"p"},"X\u8f74\u539f\u70b9"),"\u548c",(0,r.kt)("em",{parentName:"p"},"Y\u8f74\u539f\u70b9"),"\u4e0e\u7eb9\u7406\u6620\u5c04\u5668\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u6709\u5173\uff0c\u800c\u4e0e\u6240\u9009\u56fe\u50cf\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u65e0\u5173\u3002"),(0,r.kt)("p",null,"\u5750\u6807\u5c5e\u6027",(0,r.kt)("em",{parentName:"p"},"Z\u8f74\u539f\u70b9"),"\u4e0e",(0,r.kt)("em",{parentName:"p"},"\u76f8\u673a\u8ddd\u79bb"),"\u6709\u5173\u3002 \u5982\u679c",(0,r.kt)("em",{parentName:"p"},"\u76f8\u673a\u8ddd\u79bb"),"\u8bbe\u4e3a1000\uff0c\u4e14\u56fe\u50cf\u5e94\u8be5\u56f4\u7ed5\u81ea\u5df1\u7684\u8f74\u65cb\u8f6c\uff0c",(0,r.kt)("em",{parentName:"p"},"Z\u8f74\u539f\u70b9"),"\u4e5f\u5e94\u8bbe\u4e3a1000\u3002"),(0,r.kt)("p",null,"\u5982\u8981\u5c06\u53d8\u6362\u4f4d\u7f6e\u9501\u5b9a\u5728\u7eb9\u7406\u6620\u5c04\u5668\u7684\u4e2d\u5fc3\uff0c\u8bf7\u52fe\u9009\u201c",(0,r.kt)("em",{parentName:"p"},"\u9501\u5b9a\u539f\u70b9\u5230\u4e2d\u5fc3"),"\u201d\u7684\u590d\u9009\u6846\u3002 \u8fd9\u5c06\u9501\u5b9a",(0,r.kt)("em",{parentName:"p"},"X\u8f74\u539f\u70b9"),"\u548c",(0,r.kt)("em",{parentName:"p"},"Y\u8f74\u539f\u70b9"),"\u5c5e\u6027\u5230\u7eb9\u7406\u6620\u5c04r\u7684\u4e2d\u5fc3\uff0c\u5e76\u5c06",(0,r.kt)("em",{parentName:"p"},"Z\u8f74\u539f\u70b9"),"\u9501\u5b9a\u5230",(0,r.kt)("em",{parentName:"p"},"\u76f8\u673a\u8ddd\u79bb"),"\u503c\u3002"),(0,r.kt)("p",null,"\u5f53\u56fe\u50cf\u65cb\u8f6c\u65f6\uff0c",(0,r.kt)("em",{parentName:"p"},"\u76f8\u673a\u8ddd\u79bb"),"\u6539\u53d8\u663e\u793a\u7684\u89c6\u89d2\u6570\u91cf\u3002 ",(0,r.kt)("em",{parentName:"p"},"\u76f8\u673a\u8ddd\u79bb"),"\u8d8a\u9760\u8fd1\uff0c\u89c6\u91ce\uff08FOV\uff09\u53d8\u5f97\u8d8a\u5927\uff0c\u56e0\u6b64\u611f\u77e5\u5230\u7684\u89c6\u89d2\u6570\u91cf\u5c31\u4f1a\u589e\u52a0\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/coordinate-setup.png",noShadow:!0,mdxType:"Figure"},"\u5728\u7eb9\u7406\u6620\u5c04\u5668\u4e2d\u7528\u4e8e\u539f\u70b9\u548c\u76f8\u673a\u8ddd\u79bb\u7684\u5750\u6807\u7cfb\u7edf"),(0,r.kt)("h2",v({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u7eb9\u7406\u6620\u5c04\u5668\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)(p.Z,{mdxType:"Note"},"\u5982\u679c\u4e00\u4e2a\u65cb\u8f6c\u6216\u7f29\u653e\u4ea4\u4e92\u88ab\u5e94\u7528\u5230\u4e00\u4e2a\u7eb9\u7406\u6620\u5c04\u5668\uff0c\u5b83\u7684\u6301\u7eed\u65f6\u95f4\u6216\u5ef6\u8fdf\u5927\u4e8e\u96f6\uff0c\u5b83\u5c06\u88ab\u751f\u6210\u4e3aAnimationTexture\u6620\u5c04\u5668\u3002"),(0,r.kt)("h3",v({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u65cb\u8f6c\u7eb9\u7406\u6620\u5c04\u5668")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u5c06\u7eb9\u7406\u6620\u5c04\u5668\u56f4\u7ed5\u5176X\u8f74\u3001Y\u8f74\u548cZ\u8f74",(0,r.kt)("em",{parentName:"td"},"\u539f\u70b9"),"\uff0c\u76f8\u5bf9\u4e8e\u5176\u5f53\u524d\u65b9\u5411\u6216\u76f8\u5bf9\u4e8e\u7279\u5b9a\u89d2\u5ea6\u8fdb\u884c\u65cb\u8f6c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u7f29\u653e\u7eb9\u7406\u6620\u5c04\u5668")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u7f29\u653e\u7eb9\u7406\u6620\u5c04\u5668\uff08\u76f8\u5bf9\u4e8e\u5176\u5f53\u524d\u5c3a\u5bf8\u6216\u76f8\u5bf9\u4e8e\u7279\u5b9a\u5c3a\u5bf8\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u8c03\u6574\u5c0f\u90e8\u4ef6\u7684\u5c3a\u5bf8")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u8c03\u6574\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6e10\u9690\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u6539\u53d8\u63a7\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u7eb9\u7406\u6620\u5c04\u5668\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h2",v({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u7eb9\u7406\u6620\u5c04\u5668\u4e25\u91cd\u4f9d\u8d56\u4e8eMCU\u5bf9\u56fe\u50cf\u8fdb\u884c\u7f29\u653e\u548c\u65cb\u8f6c\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u7eb9\u7406\u6620\u5c04\u5668\u89c6\u4e3a\u8981\u6c42\u9ad8\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u7ed8\u56fe\u6027\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u7eb9\u7406\u6620\u5c04\u5668\u7684\u3002"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    interaction1Counter(0)\n{\n    textureMapper.setXY(150, 46);\n    textureMapper.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    textureMapper.setWidth(180);\n    textureMapper.setHeight(180);\n    textureMapper.setBitmapPosition(26.000f, 26.000f);\n    textureMapper.setScale(1.000f);\n    textureMapper.setCameraDistance(1000.000f);\n    textureMapper.setOrigo(90.000f, 90.000f, 1000.000f);\n    textureMapper.setCamera(90.000f, 90.000f);\n    textureMapper.updateAngles(-0.500f, -0.500f, -0.500f);\n    textureMapper.setRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n\n    add(textureMapper);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caTextureMapper\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textureMapper.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,r.kt)("h3",v({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,r.kt)("p",null,"\u5982\u679c\u7eb9\u7406\u6620\u5c04\u5668\u88ab\u8bbe\u7f6e\u4e3a\u52a8\u753b\u7eb9\u7406\u6620\u5c04\u5668\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e24\u4e2a\u56de\u8c03\u51fd\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u5f53\u524d\u52a8\u753b\u6267\u884c\u4e00\u4e2a\u6b65\u9aa4\u65f6\uff0c\u90fd\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationStepAction"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6240\u6709\u52a8\u753b\u7ed3\u675f\u65f6\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationEndedAction"),"\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u4e24\u6bb5\u4ee3\u7801\u6f14\u793a\u4e86\u5982\u4f55\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u56de\u8c03\u51fd\u6570\uff1a"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Screen1View\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperStepActionCallback;\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperAnimationEndedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n    void textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n};\n")),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View() :\n  textureMapperStepActionCallback(this, &Screen1View::textureMapperStepActionCallbackHandler),\n  textureMapperAnimationEndedCallback(this, &Screen1View::textureMapperAnimationEndedCallbackHandler)\n{\n  textureMapper.setTextureMapperAnimationStepAction(textureMapperStepActionCallback);\n  textureMapper.setTextureMapperAnimationEndedAction(textureMapperAnimationEndedCallback);\n  add(textureMapper);\n}\n\nvoid Screen1View::textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper steps\n    }\n}\n\nvoid Screen1View::textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper ends\n    }\n}\n")),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u7eb9\u7406\u6620\u5c04\u5668\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u6a21\u677f\u4e4b\u4e00\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/texture-mapper-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u7eb9\u7406\u6620\u5c04\u5668\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/animation-texture-mapper-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u52a8\u753b\u7eb9\u7406\u6620\u5c04\u5668\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_texture_mapper",mdxType:"Link"},"TextureMapper\u7c7b\u7684API\u53c2\u8003")),(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_animation_texture_mapper",mdxType:"Link"},"AnimationTextureMapper\u7c7b\u7684API\u53c2\u8003"))))}T.isMDXComponent=!0}}]);