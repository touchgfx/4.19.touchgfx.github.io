"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1967],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,g=u["".concat(o,".").concat(s)]||u[s]||c[s]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},19569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return I},frontMatter:function(){return N},metadata:function(){return b},toc:function(){return w}});var a=n(3905),r=n(44035),i=n(29415),l=n(31217),m=n(37793),o=n(39130),p=n(22425),d=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))k.call(t,n)&&h(e,n,t[n]);return e};const N={id:"animated-image",title:"\u52a8\u753b\u56fe\u50cf"},f=void 0,b={unversionedId:"development/ui-development/ui-components/images/animated-image",id:"development/ui-development/ui-components/images/animated-image",title:"\u52a8\u753b\u56fe\u50cf",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/animated-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/animated-image",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/images/animated-image",tags:[],version:"current",frontMatter:{id:"animated-image",title:"\u52a8\u753b\u56fe\u50cf"},sidebar:"docs",previous:{title:"Tiled Image",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/images/tiled-image"},next:{title:"\u7eb9\u7406\u6620\u5c04\u5668",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/images/texture-mapper"}},y={},w=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],x={toc:w};function I(e){var t,n=e,{components:d}=n,h=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},x),h),c(t,u({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u52a8\u753b\u56fe\u50cf\u80fd\u591f\u4f7f\u7528\u4e00\u7cfb\u5217\u5171\u7528\u540c\u4e00\u6807\u8bc6\u7b26\u7684\u56fe\u50cf\u4ece\u5934\u81f3\u5c3e\u8fd0\u884c\u52a8\u753b\u3002 \u52a8\u753b\u56fe\u50cf\u80fd\u591f\u5728\u505c\u6b62\u6216\u6682\u505c\u4e4b\u524d\u8fd0\u884c\u4e00\u6b21\u52a8\u753b\u6216\u5faa\u73af\u8fd0\u884c\u52a8\u753b\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/animated-image/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u52a8\u753b\u56fe\u50cf"),(0,a.kt)("h2",v({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,a.kt)("p",null,"\u52a8\u753b\u56fe\u50cf\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684\u56fe\u50cf\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/animated-image/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u52a8\u753b\u56fe\u50cf"),(0,a.kt)("h2",v({},{id:"properties"}),"\u5c5e\u6027"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u52a8\u753b\u56fe\u50cf\u7684\u5c5e\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \u548c ",(0,a.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6a21\u62df\u56fe\u50cf\u7684\u5927\u5c0f\u662f\u4ece\u5173\u8054\u56fe\u50cf\u7684\u5927\u5c0f\u83b7\u53d6\u7684\uff0c\u5176\u5927\u5c0f\u65e0\u6cd5\u66f4\u6539\uff08\u9664\u975e\u66f4\u6539\u56fe\u50cf\uff09\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u56fe\u50cf")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u7b2c\u4e00\u4e2a\u56fe\u50cf"),"\u548c",(0,a.kt)("em",{parentName:"td"},"\u6700\u540e\u4e00\u4e2a\u56fe\u50cf"),"\u6307\u5b9a\u7528\u4e8e\u52a8\u753b\u7684\u4e00\u7cfb\u5217\u56fe\u50cf\u4e2d\u7684\u7b2c\u4e00\u4e2a\u56fe\u50cf\u548c\u6700\u540e\u4e00\u4e2a\u56fe\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6240\u7528\u56fe\u50cf\u5fc5\u987b\u4f7f\u7528\u6807\u8bc6\u7b26\uff0c\u4f8b\u5982img_01.png\u3001img_02.png\u3001img_03.png\u3001img_04.png\u3001img_05.png\u3001img_06.png\u3001img_07.png\u7b49\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u52a8\u753b")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u52a0\u8f7d\u65f6\u542f\u52a8"),"\u6307\u5b9a\u52a8\u753b\u662f\u5426\u5e94\u5728\u5c4f\u5e55\u52a0\u8f7d\u65f6\u7acb\u5373\u542f\u52a8\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53cd\u5411\u52a8\u753b"),"\u6307\u5b9a\u7528\u4e8e\u52a8\u753b\u7684\u56fe\u50cf\u662f\u5426\u5e94\u6309\u76f8\u53cd\u987a\u5e8f\u8fd0\u884c\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5faa\u73af\u52a8\u753b"),"\u6307\u5b9a\u52a8\u753b\u662f\u5426\u5e94\u8fde\u7eed\u8fd0\u884c\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u66f4\u65b0\u95f4\u9694"),"\u6307\u5b9a\u52a8\u753b\u4e2d\u6bcf\u4e2a\u56fe\u50cf\u95f4\u9694\u7684\u65f6\u957f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u5916\u89c2")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u63a7\u4ef6\u7684\u900f\u660e\u5ea6\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u63a7\u4ef6\u7684Alpha\u503c\u4ecb\u4e8e0\u548c255\u4e4b\u95f4\u3002 0\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c255\u8868\u793a\u4e0d\u900f\u660e\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,a.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,a.kt)("em",{parentName:"td"},"X")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,a.kt)("h2",v({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u52a8\u753b\u56fe\u50cf\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,a.kt)("h3",v({},{id:"actions"}),"\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u6e10\u9690\u63a7\u4ef6")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u6539\u53d8\u63a7\u4ef6\u7684Alpha\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,a.kt)("h3",v({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u89e6\u53d1\u6761\u4ef6")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u52a8\u753b\u5df2\u5b8c\u6210")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\u52a8\u753b\u56fe\u50cf\u5df2\u5b8c\u6210\u5176\u52a8\u753b\u3002")))),(0,a.kt)("h2",v({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"\u52a8\u753b\u56fe\u50cf\u53d6\u51b3\u4e8e\u5176\u56fe\u50cf\u7ed8\u56fe\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u52a8\u753b\u56fe\u50cf\u89c6\u4e3a\u6267\u884c\u901f\u5ea6\u8f83\u5feb\u7684\u63a7\u4ef6\u3002",(0,a.kt)("br",null)," \u52a8\u753b\u56fe\u50cf\u4f1a\u6309\u7167",(0,a.kt)("em",{parentName:"p"},"\u66f4\u65b0\u95f4\u9694"),"\u7ed8\u56fe\u3002 \u56e0\u6b64\uff0c\u8f83\u4f4e\u7684",(0,a.kt)("em",{parentName:"p"},"\u66f4\u65b0\u95f4\u9694"),"\u4f1a\u4ea7\u751f\u66f4\u591a\u7684\u56fe\u50cf\u7ed8\u5236\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u56fe\u50cf\u7ed8\u56fe\u6027\u80fd\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u5e38\u89c4UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,a.kt)("h2",v({},{id:"examples"}),"\u793a\u4f8b"),(0,a.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,a.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u52a8\u753b\u56fe\u50cf\u7684\u3002"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    image.setXY(0, 0);\n    image.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_TEXTURE_480X272PX_ID));\n\n    animatedImage.setXY(0, -104);\n    animatedImage.setBitmaps(BITMAP_BUTTERFLY_01_ID, BITMAP_BUTTERFLY_72_ID);\n    animatedImage.setUpdateTicksInterval(2);\n    animatedImage.startAnimation(false, true, true);\n\n    add(image);\n    add(animatedImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(m.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53ca\u52a8\u753b\u56fe\u50cf\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"animatedImage.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,a.kt)("h3",v({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u793a\u4f8b\u4ecb\u7ecd\u4e86\u52a8\u753b\u5b8c\u6210\u540e\u5982\u4f55\u8bbe\u7f6e\u52a8\u753b\u56fe\u50cf\u7684\u56de\u8c03\u51fd\u6570\uff1a"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::AnimatedImage&> animatedImageAnimationDoneCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src);\n};\n\n#endif // MAINVIEW_HPP\n")),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    animatedImageAnimationDoneCallback(this, &mainView::animatedImageAnimationDoneCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    animatedImage.setDoneAction(animatedImageAnimationDoneCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src)\n{\n    if (&src == &animatedImage)\n    {\n        //execute code whenever the animation of animatedImage stops\n    }\n}\n")),(0,a.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,a.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u52a8\u753b\u56fe\u50cf\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u6a21\u677f\u4e4b\u4e00\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/animated-image-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u52a8\u753b\u56fe\u50cf\u793a\u4f8bUI\u6a21\u677f"),(0,a.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u8003"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_animated_image",mdxType:"Link"},"AnimatedImage\u7c7b\u7684API\u53c2\u8003"))))}I.isMDXComponent=!0}}]);