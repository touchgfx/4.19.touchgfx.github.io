"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[442],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},56550:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return v}});var n=r(3905),a=r(44035),l=r(29415),i=r(39130),o=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&d(e,r,t[r]);return e};const h={id:"framebuffer",title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"},g=void 0,k={unversionedId:"basic-concepts/framebuffer",id:"basic-concepts/framebuffer",title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/framebuffer",permalink:"/4.19/ja/docs/basic-concepts/framebuffer",tags:[],version:"current",frontMatter:{id:"framebuffer",title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"},sidebar:"docs",previous:{title:"\u30ab\u30e9\u30fc\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",permalink:"/4.19/ja/docs/basic-concepts/color-formats"},next:{title:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3",permalink:"/4.19/ja/docs/basic-concepts/graphics-engine"}},b={},v=[{value:"\u8272",id:"colors",level:2},{value:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",id:"display",level:2},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5834\u6240",id:"location-of-framebuffer",level:2},{value:"\u5185\u90e8RAM",id:"internal-ram",level:3},{value:"\u5916\u90e8RAM",id:"external-ram",level:3},{value:"RAM\u5185\u8535\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",id:"display-with-embedded-ram",level:3},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b5\u30a4\u30ba",id:"amount-of-framebuffers",level:2},{value:"1\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1",id:"one-framebuffer",level:3},{value:"\u8907\u6570\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1",id:"more-than-one-framebuffer",level:3},{value:"1\u3064\u672a\u6e80\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1",id:"less-than-one-framebuffer",level:3},{value:"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf",id:"memory-consumption",level:2}],y={toc:v};function w(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},y),d),c(t,p({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f1\u307e\u3068\u307e\u308a\u306e\u30e1\u30e2\u30ea\u3067\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u6b21\u306b\u8868\u793a\u3059\u308b\u753b\u50cf\u3092\u683c\u7d0d\u3059\u308b\u305f\u3081\u306b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306b\u3088\u3063\u3066\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f\u3001\u6240\u5b9a\u306e\u30b5\u30a4\u30ba\u306e\u9023\u7d9a\u3057\u305fRAM\u306e\u9818\u57df\u3067\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-contiguous-memory.svg",noShadow:"true",mdxType:"Figure"},"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u306f\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u5e45\u3068\u9ad8\u3055\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001\u901a\u5e38\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f\u3001XY\u5ea7\u6a19\u306b\u3088\u3063\u3066\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u4ed8\u3051\u53ef\u80fd\u306a2\u6b21\u5143\u3067\u30a2\u30af\u30bb\u30b9\u3059\u308b\u30e1\u30e2\u30ea\u3067\u3042\u308b\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-2d-memory.svg",noShadow:"true",mdxType:"Figure"},"2D\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u306f\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u30ab\u30e9\u30fc\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5404\u30a8\u30f3\u30c8\u30ea\u306f\u3001\u3053\u306e\u30ab\u30e9\u30fc\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u8272\u306b\u306a\u308a\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u3053\u3046\u3057\u305f\u30a8\u30f3\u30c8\u30ea\u306e\u3053\u3068\u3092\u3001\u30d4\u30af\u30bb\u30eb\u3068\u547c\u3073\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\uff08X\u3001Y\uff09\u4f4d\u7f6e\u306e\u30d4\u30af\u30bb\u30eb\u306e\u8272\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u30d4\u30af\u30bb\u30eb\u306e\u30e1\u30e2\u30ea\uff65\u30a2\u30c9\u30ec\u30b9\u3092\u8a08\u7b97\u3057\u3001\u305d\u3053\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u8272\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = newColor;\n")),(0,n.kt)("p",null,"\u540c\u69d8\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u30d4\u30af\u30bb\u30eb\u306e\u8272\u3092\u53d6\u5f97\u3057\u3001\u3053\u308c\u3092\u8a08\u7b97\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u30d4\u30af\u30bb\u30eb\u306e\u8272\u3092\u6697\u304f\u3059\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff08",(0,n.kt)("inlineCode",{parentName:"p"},"darken"),"\u95a2\u6570\u304c\u4f7f\u7528\u53ef\u80fd\u3060\u3068\u3057\u307e\u3059\uff09\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );\n")),(0,n.kt)("p",null,"\u591a\u304f\u306e\u5834\u5408\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u306f\u3001\u4e0a\u8a18\u306e\u3088\u3046\u306b\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306b\u8aad\u307f\u66f8\u304d\u3055\u308c\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u57fa\u76e4\u3068\u306a\u308b\u30b7\u30b9\u30c6\u30e0\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u6a5f\u80fd\uff08Chrom-ART DMA\u306a\u3069\uff09\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002"),(0,n.kt)("h2",f({},{id:"colors"}),"\u8272"),(0,n.kt)("p",null,"TouchGFX\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\u306e\u30ab\u30e9\u30fc\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u6b21\u306e\u3044\u305a\u308c\u304b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb"),": 1\u30012\u3001\u307e\u305f\u306f4 bpp\u306e\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u30cf\u30a4\u30ab\u30e9\u30fc\u307e\u305f\u306f\u30c8\u30a5\u30eb\u30fc\u30ab\u30e9\u30fc"),": 16\u300124\u3001\u307e\u305f\u306f32 bpp\u30ab\u30e9\u30fc")),(0,n.kt)("p",null,"\u4f7f\u7528\u3059\u308bbpp\u306e\u5024\u304c\u5927\u304d\u3044\u307b\u3069\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3067\u8868\u3059\u3053\u3068\u306e\u3067\u304d\u308b\u8272\u304c\u660e\u77ad\u306b\u306a\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u4f7f\u7528\u3059\u308bbpp\u306e\u5024\u304c\u5927\u304d\u3044\u307b\u3069\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u5fc5\u8981\u306a\u30e1\u30e2\u30ea\u30b5\u30a4\u30ba\u3082\u5927\u304d\u304f\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",f({},{id:"display"}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u6700\u7d42\u7684\u306b\u306f\u7269\u7406\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3055\u308c\u3001\u305d\u3053\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001\u901a\u5e38\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30d4\u30af\u30bb\u30eb\u306e\u5e45\u3068\u9ad8\u3055\u306f\u540c\u3058\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/display-and-framebuffer.svg",noShadow:"true",mdxType:"Figure"},"24 bpp\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u7d50\u679c"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},"\u3055\u307e\u3056\u307e\u306a\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30bf\u30a4\u30d7\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30c6\u30af\u30ce\u30ed\u30b8"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",f({},{id:"location-of-framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5834\u6240"),(0,n.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\uff65\u30d9\u30fc\u30b9\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u975e\u5e38\u306b\u7c21\u7565\u5316\u3057\u305f\u56f3\u3092\u3001\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/simplified-graphics-system.png",noShadow:!0,width:"400",mdxType:"Figure"},"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u975e\u5e38\u306b\u7c21\u7565\u5316\u3057\u305f\u56f3"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5185\u90e8\u3001\u307e\u305f\u306f\u5916\u90e8RAM\u306b\u914d\u7f6e\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-placement.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u914d\u7f6e\u53ef\u80fd\u306a\u5834\u6240"),(0,n.kt)("p",null,"\u914d\u7f6e\u53ef\u80fd\u306a\u5834\u6240\u305d\u308c\u305e\u308c\u306b\u3001\u5229\u70b9\u3068\u6b20\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",f({},{id:"internal-ram"}),"\u5185\u90e8RAM"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5185\u90e8\u306eRAM\u306b\u914d\u7f6e\u3059\u308b\u3068\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8aad\u307f\u66f8\u304d\u30a2\u30af\u30bb\u30b9\u304c\u6700\u5927\u9650\u306b\u9ad8\u901f\u5316\u3055\u308c\u307e\u3059\u3002 \u3064\u307e\u308a\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u53ef\u80fd\u306a\u9650\u308a\u30b9\u30e0\u30fc\u30ba\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 \u305d\u306e\u53cd\u9762\u3001\u5185\u90e8RAM\u306f\u975e\u5e38\u306b\u5c11\u91cf\u306e\u30ea\u30bd\u30fc\u30b9\u3067\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u591a\u304f\u306e\u90e8\u5206\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u308b\u305f\u3081\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u3053\u306e\u5927\u90e8\u5206\u3092\u5360\u6709\u3059\u308b\u3053\u3068\u306f\u73fe\u5b9f\u7684\u3067\u306f\u306a\u3044\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5185\u90e8RAM\u306b\u914d\u7f6e\u3059\u308b\u3068\u3053\u3068\u304c\u53ef\u80fd\u3067\u3042\u308c\u3070\u3001\u8ffd\u52a0\u306eRAM\u304c\u5fc5\u8981\u306a\u304f\u306a\u308b\u306e\u3067\u3001\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u306e\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",f({},{id:"external-ram"}),"\u5916\u90e8RAM"),(0,n.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\u306b\u5916\u90e8RAM\u304c\u3042\u308b\u5834\u5408\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5185\u90e8RAM\u306e\u4ee3\u308f\u308a\u306b\u3053\u306e\u5916\u90e8RAM\u306b\u914d\u7f6e\u3067\u304d\u307e\u3059\u3002 \u4e00\u822c\u7684\u306b\u3001\u5916\u90e8RAM\u306b\u5bfe\u3059\u308b\u8aad\u307f\u66f8\u304d\u30a2\u30af\u30bb\u30b9\u306f\u5185\u90e8RAM\u3088\u308a\u4f4e\u901f\u3067\u3059\u304c\u3001\u5916\u90e8RAM\u306e\u5bb9\u91cf\u306e\u65b9\u304c\u901a\u5e38\u306f\u975e\u5e38\u306b\u5927\u304d\u304f\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u3053\u308c\u304c\u552f\u4e00\u306e\u89e3\u6c7a\u7b56\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u306f\u3001\u5916\u90e8RAM\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u9ad8\u901f\u5316\u3055\u305b\u308b\u6a5f\u80fd\uff08\u30ad\u30e3\u30c3\u30b7\u30e5\u306a\u3069\uff09\u304c\u5099\u308f\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",f({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",f({},{id:"display-with-embedded-ram"}),"RAM\u5185\u8535\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"),(0,n.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\u5185\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30bf\u30a4\u30d7\u306b\u3088\u3063\u3066\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30e1\u30e2\u30ea\u304c\u5185\u8535\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u30e1\u30e2\u30ea\u306b\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u300c\u7269\u7406\u7684\u306a\u300d\u30d4\u30af\u30bb\u30eb\u306e\u5185\u5bb9\u304c\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002 \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u3053\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30e1\u30e2\u30ea\u304c\u3042\u308b\u3068\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u30a2\u30a4\u30c9\u30eb\u72b6\u614b\u3067\u3082\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304c\u52d5\u4f5c\u3092\u7d9a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"TouchGFX\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u5185\u306eRAM\u306b\u914d\u7f6e\u3059\u308b\u3053\u3068\u306f\u4e0d\u53ef\u80fd\u3067\u3059\u3002\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30e1\u30e2\u30ea\u306f\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\u3067\u306f\u306a\u304f\u3001\u30e9\u30f3\u30c0\u30e0\u306a\u30d4\u30af\u30bb\u30eb\u306e\u8aad\u307f\u66f8\u304d\u306b\u9069\u3059\u308b\u3088\u3046\u306b\u3067\u304d\u3066\u3044\u306a\u3044\u304b\u3089\u3067\u3059\u3002 \u4ee3\u308f\u308a\u306b\u3001TouchGFX\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5185\u90e8\u307e\u305f\u306f\u5916\u90e8RAM\u306b\u914d\u7f6e\u3057\u3001\u3053\u308c\u3092\u9069\u5207\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306eRAM\u306b\u8ee2\u9001\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",f({},{id:"amount-of-framebuffers"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b5\u30a4\u30ba"),(0,n.kt)("p",null,"TouchGFX\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30671\u3064\u3001\u8907\u6570\u3001\u307e\u305f\u306f1\u3064\u672a\u6e80\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b5\u30a4\u30ba\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5916\u89b3\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3001\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",f({},{id:"one-framebuffer"}),"1\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),(0,n.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3055\u308c\u308b\u3059\u3079\u3066\u306e\u30d4\u30af\u30bb\u30eb\u3092\u6b63\u78ba\u306b\u4fdd\u6301\u3059\u308b\u306b\u306f\u30011\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3067\u5341\u5206\u3067\u3059\u3002 \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4RAM\u304c\u642d\u8f09\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\uff08\u5c11\u306a\u304f\u3068\u3082\uff091\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u5fc5\u8981\u3067\u3059 \u3053\u306e\u5834\u5408\u3001\u8868\u793a\u3055\u308c\u308b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u8907\u96d1\u3055\u306b\u3088\u3063\u3066\u8996\u899a\u7684\u306a\u4e71\u308c\u304c\u767a\u751f\u3057\u306a\u3044\u5834\u5408\u306f\u30011\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u7406\u60f3\u7684\u3067\u3059\u3002"),(0,n.kt)("h3",f({},{id:"more-than-one-framebuffer"}),"\u8907\u6570\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),(0,n.kt)("p",null,"TouchGFX\u3067\u306f\u3001\u8907\u6570\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u6301\u3064\u3053\u3068\u306f\u30012\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u6301\u3064\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 1\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f\u6b21\u306e\u753b\u50cf\u306e\u8a08\u7b97\u7d50\u679c\u306e\u66f8\u304d\u8fbc\u307f\u306b\u4f7f\u7528\u3055\u308c\u3001\u3082\u3046\u4e00\u65b9\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u8ee2\u9001\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u306a\u3069\u306e\u8996\u899a\u7684\u306a\u4e71\u308c\u306f\u73fe\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",f({},{id:"less-than-one-framebuffer"}),"1\u3064\u672a\u6e80\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),(0,n.kt)("p",null,"1\u3064\u672a\u6e80\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3067\u306f\u3001\u4e00\u822c\u7684\u306b\u4ee5\u4e0b\u306e\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u304c\u5c11\u306a\u304f\u306a\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u3088\u308a\u591a\u304f\u306e\u63cf\u753b\u64cd\u4f5c\u304c\u5b9f\u884c\u3055\u308c\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u8ee2\u9001\u56de\u6570\u3092\u5897\u3084\u3059\u5fc5\u8981\u304c\u3042\u308b")),(0,n.kt)("p",null,"TouchGFX\u3067\u306f\u30011\u3064\u672a\u6e80\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068\u547c\u3070\u308c\u307e\u3059\u3002 \u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u65b9\u5f0f\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4RAM\u306e\u3042\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3067\u306e\u307f\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("h2",f({},{id:"memory-consumption"}),"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf"),(0,n.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8272\u306e\u91cf\u3084\u30d4\u30af\u30bb\u30eb\u6570\u306b\u3088\u3063\u3066\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u5fc5\u8981\u3068\u3059\u308b\u30e1\u30e2\u30ea\u30b5\u30a4\u30ba\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4e00\u822c\u7684\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3067\u4f7f\u7528\u3055\u308c\u308b\u30e1\u30e2\u30ea\u306e\u91cf\u306f\u3001\u5e45x\u9ad8\u3055x\u8272\u6df1\u5ea6\uff08\u30d3\u30c3\u30c8\uff09/ 8 \u30d0\u30a4\u30c8\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"}),"\u89e3\u50cf\u5ea6\uff08\u30d4\u30af\u30bb\u30eb\uff09"),(0,n.kt)("th",f({parentName:"tr"},{align:"right"}),"\u8272\uff08bpp\uff09"),(0,n.kt)("th",f({parentName:"tr"},{align:"right"}),"\u8a08\u7b97"),(0,n.kt)("th",f({parentName:"tr"},{align:"right"}),"\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\uff08\u30d0\u30a4\u30c8\uff09"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"800x480"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"16 bpp"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"800 x 480 x 16 / 8"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"768,000 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"480x272"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"24 bpp"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"480 x 272 x 24 / 8"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"391,680 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"100x100"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"8 bpp"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"100 x 100 x 8 / 8"),(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"10,000 B")))),(0,n.kt)("p",null,"\u8907\u6570\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u6301\u3064\u3068\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u3082\u5927\u304d\u304f\u306a\u308a\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u30012\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3059\u308b\u30c0\u30d6\u30eb\uff65\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u65b9\u5f0f\u3067\u306f\u3001\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306f2\u500d\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"1\u3064\u672a\u6e80\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u6301\u3064\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u30e1\u30e2\u30ea\u306e\u91cf\u304c\u660e\u793a\u7684\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u3001\u5236\u5fa1\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306f\u5b8c\u5168\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u4f7f\u7528\u91cf\u304c\u5c11\u306a\u3059\u304e\u308b\u3068\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u5168\u4f53\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u60aa\u5f71\u97ff\u3092\u53ca\u307c\u3059\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001STM32 ",(0,n.kt)(i.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",mdxType:"Link"},"LTDC"),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}w.isMDXComponent=!0}}]);