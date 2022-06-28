"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[218],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},67758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return N},metadata:function(){return b},toc:function(){return C}});var r=n(3905),a=n(44035),l=n(29415),i=n(37793),o=n(31217),c=n(39130),p=n(22425),s=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))g.call(t,n)&&h(e,n,t[n]);return e};const N={id:"scroll-list",title:"\u6eda\u52a8\u5217\u8868"},f=void 0,b={unversionedId:"development/ui-development/ui-components/containers/scroll-list",id:"development/ui-development/ui-components/containers/scroll-list",title:"\u6eda\u52a8\u5217\u8868",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-list.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-list",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/containers/scroll-list",tags:[],version:"current",frontMatter:{id:"scroll-list",title:"\u6eda\u52a8\u5217\u8868"},sidebar:"docs",previous:{title:"\u6a21\u5f0f\u7a97\u53e3",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/containers/modal-window"},next:{title:"\u6eda\u8f6e",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/containers/scroll-wheel"}},w={},C=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u9879\u76ee\u6a21\u677f",id:"item-templates",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],y={toc:C};function x(e){var t,n=e,{components:s}=n,h=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},y),h),m(t,d({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u6eda\u52a8\u5217\u8868\u662f\u53ef\u6eda\u52a8\u7684\u83dc\u5355\uff0c\u7531\u82e5\u5e72\u9879\u76ee\u548c\u63a7\u4ef6\u6784\u6210\uff0c\u8fd9\u4e9b\u9879\u76ee\u548c\u63a7\u4ef6\u6eda\u52a8\u5230\u89c6\u56fe\u4e2d\u65f6\u4f1a\u8fdb\u884c\u52a8\u6001\u66f4\u65b0\u3002 \u4e0e\u6eda\u52a8\u5217\u8868\u4e2d\u7684\u9879\u76ee\u4ea4\u4e92\u65f6\uff0c\u6eda\u52a8\u5217\u8868\u8fd8\u80fd\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u6eda\u52a8\u5217\u8868"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u6eda\u52a8\u5217\u8868\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684\u5bb9\u5668\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6eda\u52a8\u5217\u8868"),(0,r.kt)("h2",v({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u6eda\u52a8\u5217\u8868\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u7c7b\u578b")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u7c7b\u578b"),"\u6307\u5b9a\u6eda\u52a8\u5217\u8868\u65b9\u5411\u4e3a\u5782\u76f4\u65b9\u5411\u6216\u6c34\u5e73\u65b9\u5411")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9879\u76ee\u6a21\u677f")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u9879\u76ee\u6a21\u677f"),"\u6307\u5b9a\u7528\u4f5c\u6a21\u677f\u7684CustomContainer\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9009\u9879\u6570"),"\u6307\u5b9a\u6eda\u52a8\u5217\u8868\u4e2d\u5b58\u5728\u7684\u9879\u76ee\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5217\u8868\u5916\u89c2")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u5faa\u73af"),"\u6307\u5b9a\u5230\u8fbe\u5217\u8868\u672b\u5c3e\u540e\uff0c\u6eda\u52a8\u5217\u8868\u4e2d\u7684\u9879\u76ee\u662f\u5426\u5c06\u5faa\u73af\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9879\u76ee\u5bf9\u9f50"),"\u6307\u5b9a\u9879\u76ee\u662f\u5426\u5e94\u8be5\u5bf9\u9f50\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5bf9\u9f50\u4e3aFalse\uff0c\u5219\u9879\u76ee\u53ef\u968f\u610f\u79fb\u52a8\u3002 \u5982\u679c\u5bf9\u9f50\u4e3aTrue\uff0c\u9879\u76ee\u5c06\u6309\u4f4d\u5bf9\u9f50\uff0c\u59cb\u7ec8\u4f4d\u4e8e\u6240\u9009\u4f4d\u7f6e\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9879\u76ee\u95f4\u8ddd"),"\u6307\u5b9a\u9879\u76ee\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u586b\u5145\u524d")," \u548c ",(0,r.kt)("em",{parentName:"td"},"\u586b\u5145\u540e")," \u6307\u5b9a\u6eda\u52a8\u5217\u8868\u4e2d\u53ef\u89c1\u753b\u677f\u524d\u540e\u7684\u8ddd\u79bb\u504f\u79fb\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u52a8\u753b")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u7f13\u52a8"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u7f13\u52a8\u9009\u9879"),"\u6307\u5b9a\u52a8\u753b\u4f7f\u7528\u7684\u7f13\u52a8\u65b9\u7a0b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Swipe Acc.")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Drag Acc.")," \u6307\u5b9a\u6eda\u52a8\u65f6\u7684\u52a0\u901f\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h3",v({},{id:"item-templates"}),"\u9879\u76ee\u6a21\u677f"),(0,r.kt)("p",null,"\u6eda\u52a8\u5217\u8868\u4e2d\u7684\u9879\u76ee\u57fa\u4e8e\u540d\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u201c\u9879\u76ee\u6a21\u677f\u201d"),"\u7684\u6982\u5ff5\uff0c\u9879\u76ee\u6a21\u677f\u5c5e\u4e8e",(0,r.kt)("a",v({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer"),"\uff0c\u7528\u4f5c\u6eda\u52a8\u5217\u8868\u4e2d\u5404\u9879\u76ee\u56fe\u5f62\u5143\u7d20\u7684\u57fa\u7840\u3002 \u521b\u5efa\u6eda\u52a8\u5217\u8868\u4e4b\u524d\uff0c\u5e94\u521b\u5efa\u81ea\u5b9a\u4e49\u5bb9\u5668\uff0c\u4e3a\u6eda\u52a8\u5217\u8868\u63d0\u4f9b\u9879\u76ee\u6a21\u677f\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u6eda\u52a8\u5217\u8868\u540e\uff0c\u53ef\u5728",(0,r.kt)("em",{parentName:"p"},"\u9879\u76ee\u6a21\u677f"),"\u5c5e\u6027\u4e0b\u9009\u62e9CustomContainer\u3002 \u6307\u5b9a",(0,r.kt)("em",{parentName:"p"},"\u9879\u76ee\u6a21\u677f"),"\u4f1a\u8c03\u6574\u6eda\u52a8\u5217\u8868\u5927\u5c0f\uff0c\u4ee5\u9002\u5e94\u6240\u9009\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e0d\u5728\u53ef\u6eda\u52a8\u65b9\u5411\u4e0a\u7684\u7684\u5c3a\u5bf8\u5c5e\u6027\uff08\u5782\u76f4\u6eda\u52a8\u5217\u8868\u7684\u5bbd\u5ea6\u3001\u6c34\u5e73\u6eda\u52a8\u5217\u8868\u7684\u9ad8\u5ea6\uff09\u3002 \u66f4\u6539\u5176\u4ed6\u5c3a\u5bf8\u5c5e\u6027\uff08\u5782\u76f4\u6eda\u52a8\u5217\u8868\u7684\u9ad8\u5ea6\u3001\u6c34\u5e73\u6eda\u52a8\u5217\u8868\u7684\u5bbd\u5ea6\uff09\u51b3\u5b9a\u4e86\u53ef\u89c1\u7684\u9879\u76ee\u6570\u3002"),(0,r.kt)("h2",v({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u6eda\u52a8\u5217\u8868\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",v({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u6eda\u52a8\u5217\u8868\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h2",v({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u6eda\u52a8\u5217\u8868\u4e3a",(0,r.kt)("a",v({parentName:"p"},{href:"container"}),"Container"),"\u7c7b\u578b\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u51fa\u73b0\u5728\u7ed8\u56fe\u94fe\u4e2d\u3002 \u56e0\u6b64\uff0c\u6027\u80fd\u4e3b\u8981\u53d6\u51b3\u4e8e\u5b50\u90e8\u4ef6\u7684\u7ed8\u56fe\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u7ed8\u56fe\u6027\u80fd\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u5e38\u89c4UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u6eda\u52a8\u5217\u8868\u7684\u3002"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollList.setPosition(140, 10, 200, 252);\n    scrollList.setHorizontal(false);\n    scrollList.setCircular(false);\n    scrollList.setEasingEquation(touchgfx::EasingEquations::backEaseOut);\n    scrollList.setSwipeAcceleration(10);\n    scrollList.setDragAcceleration(10);\n    scrollList.setNumberOfItems(20);\n    scrollList.setPadding(0, 0);\n    scrollList.setSnapping(false);\n    scrollList.setDrawableSize(50, 2);\n    scrollList.setDrawables(scrollListListItems, updateItemCallback);\n\n    add(scrollList);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollList.initialize();\n    for (int i = 0; i < scrollListListItems.getNumberOfDrawables(); i++)\n    {\n        scrollListListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollListListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollListUpdateItem(*cc, itemIndex);\n    }\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caScrollList\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u4fee\u6539\u4e86\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bb0\u5f97\u8c03\u7528 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"scrollList.invalidate()")," \u4ee5\u5f3a\u5236\u91cd\u7ed8\u3002"),(0,r.kt)("h3",v({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5b8c\u6eda\u52a8\u5217\u8868\u7684\u56fe\u5f62\u5143\u7d20\u53ca\u5176\u5c5e\u6027\u540e\uff0c\u53ef\u7f16\u5199\u7528\u6237\u4ee3\u7801\u66f4\u65b0\u6eda\u52a8\u5217\u8868\u4e2d\u7684\u9879\u76ee\u3002 \u4e0b\u6587\u7ed9\u51fa\u4e86\u7531TouchGFX Designer\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase")," \u7c7b\u7684\u5934\u6587\u4ef6\uff1a"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"ScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"class ScreenViewBase : public touchgfx::View\n{\npublic:\n    ScreenViewBase();\n    virtual ~ScreenViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen\n    }\n\nprotected:\n    FrontendApplication& application() {\n         return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n    touchgfx::BoxWithBorder boxWithBorder;\n    touchgfx::ScrollList scrollList;\n    touchgfx::DrawableListItems<CustomContainer, 6> scrollListListItems;\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<ScreenViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n};\n")),(0,r.kt)("p",null,"TouchGFX Designer\u751f\u6210\u6eda\u52a8\u5217\u8868\u4ee3\u7801\u65f6\uff0c\u4f1a\u521b\u5efa\u4e0a\u6587\u4e2d\u7a81\u51fa\u663e\u793a\u7684\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem"),"\uff0c\u7528\u6237\u53ef\u4f7f\u7528\u6b64\u51fd\u6570\u8986\u76d6\u548c\u66f4\u65b0\u6eda\u52a8\u5217\u8868\u4e2d\u7684\u9879\u76ee\u3002 \u6bcf\u5f53\u6eda\u52a8\u5217\u8868\u4e2d\u7684\u9879\u76ee\u9700\u8981\u66f4\u65b0\u65f6\uff0c\u90fd\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u56e0\u6b64\uff0c\u8bf7\u5148\u786e\u4fdd\u9879\u76ee\u5df2\u66f4\u65b0\uff0c\u7136\u540e\u8be5\u9879\u76ee\u624d\u4f1a\u53d8\u4e3a\u53ef\u89c1\u72b6\u6001\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," \u5305\u542b\u4e24\u4e2a\u53c2\u6570\uff0c\u7528\u4e8e\u6807\u8bc6\u6b63\u5728\u66f4\u65b0\u7684\u9879\u76ee\u5e76\u7528\u4e8e\u5bf9\u8be5\u9879\u76ee\u8fdb\u884c\u66f4\u65b0\u3002 \u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," \u5305\u542b\u9879\u76ee\u7684\u7d22\u5f15\u503c\uff0c\u8be5\u503c\u7528\u4e8e\u6807\u8bc6\u6b63\u5728\u66f4\u65b0\u7684\u9879\u76ee\u3002 \u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," \u662f\u5bf9CustomContainer\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u8be5\u5bf9\u8c61\u5c5e\u4e8e\u6eda\u52a8\u5217\u8868\u4e2d\u7684\u53ef\u89c1\u9879\u76ee\u3002 \u66f4\u65b0\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," \u7684\u56fe\u5f62\u4f1a\u66f4\u65b0\u4e3a\u6eda\u52a8\u5217\u8868\u4e2d\u53ef\u89c1\u9879\u76ee\u7684\u6e32\u67d3\u3002"),(0,r.kt)("p",null,"\u4e0b\u6587\u7ed9\u51fa\u4e86\u96c6\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," \u7684\u793a\u4f8b\uff1a"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/ScreenPresenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HP\n")),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n{\n    item.setValue(itemIndex);\n}\n")),(0,r.kt)("p",null,"\u5728\u5934\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp")," \u4e2d\uff0c\u4f1a\u8986\u76d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," \u51fd\u6570\uff0c\u968f\u540e\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," \u4e2d\u5b9e\u73b0\u8be5\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u672c\u4f8b\u7684\u76ee\u6807\u662f\u66f4\u65b0\u5177\u6709\u53ef\u89c1\u9879\u76ee\u7d22\u5f15\u503c\u7684\u9879\u76ee\u6a21\u677f\u4e2d\u7684\u6587\u672c\uff0c\u4e0e",(0,r.kt)("a",v({parentName:"p"},{href:"scroll-list"}),"\u672c\u90e8\u5206\u5f00\u5934"),"\u7ed9\u51fa\u7684\u793a\u4f8b\u76f8\u4f3c\u3002 \u7531\u4e8e\u9879\u76ee\u6a21\u677f\u662f\u57fa\u4e8eCustomContainer\u7684\uff0c\u56e0\u6b64\u4f1a\u4e3aCustomContainer\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"setValue")," \u51fd\u6570\u3002 setValue\u51fd\u6570\u80fd\u591f\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," \u53c2\u6570\u5e76\u66f4\u65b0\u9879\u76ee\u6a21\u677f\u4e2d\u7684\u6587\u672c\u3002 \u4e3a\u53c2\u6570\u9879\u8c03\u7528setvalue\u4f1a\u4f7f\u9879\u76ee\u66f4\u65b0\u5176\u5916\u89c2\uff0c\u4ece\u800c\u4f1a\u663e\u793a\u5176\u7d22\u5f15\u503c\u3002"),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u6eda\u52a8\u5217\u8868\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u6a21\u677f\u4e4b\u4e00\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6eda\u8f6e\u548c\u5217\u8868\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_list",mdxType:"Link"},"ScrollList\u7c7b\u7684API\u53c2\u8003"))))}x.isMDXComponent=!0}}]);