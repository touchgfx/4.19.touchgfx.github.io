"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1367],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,g=m["".concat(u,".").concat(s)]||m[s]||c[s]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},44517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return E},frontMatter:function(){return N},metadata:function(){return f},toc:function(){return B}});var r=n(3905),a=n(44035),o=n(29415),l=n(37793),i=n(31217),u=n(39130),d=n(22425),p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))k.call(t,n)&&h(e,n,t[n]);return e};const N={id:"radio-button",title:"Radio Button\uff08\u30e9\u30b8\u30aa\uff65\u30dc\u30bf\u30f3\uff09"},v=void 0,f={unversionedId:"development/ui-development/ui-components/buttons/radio-button",id:"development/ui-development/ui-components/buttons/radio-button",title:"Radio Button\uff08\u30e9\u30b8\u30aa\uff65\u30dc\u30bf\u30f3\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/buttons/radio-button.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/radio-button",permalink:"/4.19/ja/docs/development/ui-development/ui-components/buttons/radio-button",tags:[],version:"current",frontMatter:{id:"radio-button",title:"Radio Button\uff08\u30e9\u30b8\u30aa\uff65\u30dc\u30bf\u30f3\uff09"},sidebar:"docs",previous:{title:"Toggle Button\uff08\u30c8\u30b0\u30eb\uff65\u30dc\u30bf\u30f3\uff09",permalink:"/4.19/ja/docs/development/ui-development/ui-components/buttons/toggle-button"},next:{title:"Repeat Button\uff08\u7e70\u308a\u8fd4\u3057\u30dc\u30bf\u30f3\uff09",permalink:"/4.19/ja/docs/development/ui-development/ui-components/buttons/repeat-button"}},y={},B=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:2},{value:"API\u53c2\u7167",id:"api-reference",level:2}],w={toc:B};function E(e){var t,n=e,{components:p}=n,h=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},w),h),c(t,m({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGF\u306eRadio Button\u306f\u3001\u30bf\u30c3\u30c1\uff65\u30a4\u30d9\u30f3\u30c8\u3092\u8a8d\u8b58\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3001Radio Button\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u308b\u3068\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002 \u30e9\u30b8\u30aa\uff65\u30dc\u30bf\u30f3\u306f4\u3064\u306e\u753b\u50cf\u3067\u69cb\u6210\u3055\u308c\u3001\u62bc\u4e0b\u72b6\u614b\u307e\u305f\u306f\u89e3\u653e\u72b6\u614b\u306b\u3042\u308b\u3068\u304d\u306b\u9078\u629e\u307e\u305f\u306f\u672a\u9078\u629e\u306e\u30dc\u30bf\u30f3\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002 Radio Button\u306fRadio Button Group\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u65b0\u3057\u3044\u9078\u629e\u304c\u884c\u308f\u308c\u305f\u3068\u304d\u306e\u30e9\u30b8\u30aa\uff65\u30dc\u30bf\u30f3\u306e\u9078\u629e\u89e3\u9664\u304c\u51e6\u7406\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"Radio Button\u306f\u3001",(0,r.kt)("a",b({parentName:"p"},{href:"flex-button"}),"Flex Button"),"\u306b\u3088\u3063\u3066\u518d\u73fe\u3067\u304d\u307e\u3059\u3002 Flex Button\u306f\u3055\u3089\u306b\u8a73\u3057\u3044\u8a2d\u5b9a\u304c\u53ef\u80fd\u306a\u30dc\u30bf\u30f3\u3067\u3001\u67d4\u8edf\u6027\u3068\u5f15\u304d\u63db\u3048\u306bRAM\u4f7f\u7528\u91cf\u3082\u5c11\u3057\u591a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-appearance.png",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bRadio Button"),(0,r.kt)("h2",b({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,"Radio Button\u306f\u3001TouchGFX Designer\u306eButtons\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eRadio Button"),(0,r.kt)("h2",b({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("p",null,"\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Radio Button\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"X\u3068Y\u306f\u3001\u89aa\u306b\u5bfe\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30dc\u30bf\u30f3\u306e\u30b5\u30a4\u30ba\u306f\u9078\u629e\u3057\u305f\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u753b\u9762\u3092\u4ecb\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u76f8\u4e92\u4f5c\u7528\u3082\u7121\u52b9\u306b\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u753b\u9762\u3092\u4ecb\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u76f8\u4e92\u4f5c\u7528\u3082\u7121\u52b9\u306b\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Selection")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Selected\u306f\u3001\u30dc\u30bf\u30f3\u306e\u521d\u671f\u9078\u629e\u72b6\u614b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 Deselectable\u306f\u3001\u9078\u629e\u72b6\u614b\u306e\u30dc\u30bf\u30f3\u3092\u3057\u3070\u3089\u304f\u62bc\u3059\u3053\u3068\u3067\u9078\u629e\u89e3\u9664\u3067\u304d\u308b\u3088\u3046\u306b\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Group")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Group\u306f\u3001\u3053\u306e\u30dc\u30bf\u30f3\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u30b0\u30eb\u30fc\u30d7\u306e\u540d\u524d\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u9078\u629e\u304a\u3088\u3073\u9078\u629e\u89e3\u9664\u306e\u52d5\u4f5c\u306f\u3053\u308c\u3089\u306eRadio Button Group\u5185\u306b\u542b\u307e\u308c\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Style\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e8b\u524d\u5b9a\u7fa9\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u9078\u629e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u4e8b\u524d\u5b9a\u7fa9\u3055\u308c\u305f\u5024\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",null),"\u3053\u308c\u3089\u306e\u30b9\u30bf\u30a4\u30eb\u306b\u306f\u7121\u6599\u4f7f\u7528\u3067\u304d\u308b\u753b\u50cf\u304c\u542b\u307e\u308c\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Released Image\u304a\u3088\u3073Pressed Image\u306f\u3001\u62bc\u4e0b\u72b6\u614b\u3068\u89e3\u653e\u72b6\u614b\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u753b\u50cf\u3092\u3001Designer\u306e\u30b9\u30ad\u30f3\uff65\u30e9\u30a4\u30d6\u30e9\u30ea\u307e\u305f\u306fProject\u30d5\u30a9\u30eb\u30c0\u304b\u3089\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Alpha\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f0\uff5e255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",b({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Radio Button\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",b({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,r.kt)("h3",b({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30c8\u30ea\u30ac")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Radio Button is selected")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Radio Button\u304c\u9078\u629e\u3055\u308c\u307e\u3057\u305f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Radio Button is deselected")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Radio Button\u304c\u9078\u629e\u89e3\u9664\u3055\u308c\u307e\u3057\u305f\u3002")))),(0,r.kt)("h2",b({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,r.kt)("p",null,"Radio Button\u306f4\u3064\u306e\u753b\u50cf\u3067\u69cb\u6210\u3055\u308c\u3001\u753b\u50cf\u63cf\u753b\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001Radio Button\u306f\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u9ad8\u901f\u51e6\u7406\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u753b\u50cf\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",b({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",b({},{id:"examples"}),"\u4f8b"),(0,r.kt)("h3",b({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"View\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bRadio Button\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\ncreen1ViewBase::Screen1ViewBase() :\n    radioButtonSelectedCallback(this, &Screen1ViewBase::radioButtonSelectedCallbackHandler)\n{\n    radioButtonName.setXY(136, 114);\n    radioButtonName.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_INACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_PRESSED_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_ACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_NORMAL_ID));\n    radioButtonName.setSelected(false);\n    radioButtonName.setDeselectionEnabled(true);\n\n    add(radioButtonName);\n    radioButtonGroupName.add(radioButtonName);\n\n    radioButtonGroupName.setRadioButtonSelectedHandler(radioButtonSelectedCallback);\n}\n\nvoid Screen1ViewBase::radioButtonSelectedCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &radioButtonName)\n    {\n        //InteractionName\n        //When buttonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001RadioButton\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"radioButtonName.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",b({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,r.kt)("p",null,"Radio Button\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/radio-button-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eRadio Button Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,r.kt)("h2",b({},{id:"api-reference"}),"API\u53c2\u7167"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"../../../../api/classes/classtouchgfx_1_1_radio_button",mdxType:"Link"},"RadioButton\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}E.isMDXComponent=!0}}]);