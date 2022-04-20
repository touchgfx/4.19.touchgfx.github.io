"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9101],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},51917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return v}});var r=n(3905),a=n(44035),l=n(22425),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&s(e,n,t[n]);return e};const f={id:"graphics-engine",title:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3"},h=void 0,g={unversionedId:"basic-concepts/graphics-engine",id:"basic-concepts/graphics-engine",title:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/graphics-engine.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/graphics-engine",permalink:"/4.19/ja/docs/basic-concepts/graphics-engine",tags:[],version:"current",frontMatter:{id:"graphics-engine",title:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3"},sidebar:"docs",previous:{title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1",permalink:"/4.19/ja/docs/basic-concepts/framebuffer"},next:{title:"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7",permalink:"/4.19/ja/docs/basic-concepts/rendering"}},k={},v=[{value:"\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb",id:"scene-model",level:2},{value:"\u30e2\u30c7\u30eb\u306e\u64cd\u4f5c",id:"manipulate-the-model",level:2},{value:"\u63cf\u753b\u30b3\u30de\u30f3\u30c9\u306e\u767a\u884c",id:"issue-drawing-commands",level:2},{value:"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7",id:"main-loop",level:2},{value:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u9069\u5408\u6027",id:"platform-adaptibility",level:2}],b={toc:v};function y(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),s),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306e\u4e3b\u306a\u5f79\u5272\u306f\u3001\u7d44\u8fbc\u307f\u30c7\u30d0\u30a4\u30b9\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u63cf\u753b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306e\u7a2e\u985e\u306e\u6982\u8981\u3092\u793a\u3057\u3001\u5404\u7a2e\u985e\u306e\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",d({},{id:"scene-model"}),"\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb"),(0,r.kt)("p",null,"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306f\u3001\u6b21\u306e2\u3064\u306e\u4e3b\u306a\u30ab\u30c6\u30b4\u30ea\u306b\u5206\u3051\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u76f4\u63a5\u30e2\u30fc\u30c9\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3"),"\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u76f4\u63a5\u63cf\u753b\u3067\u304d\u308b\u3088\u3046\u306aAPI\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u9069\u5207\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u6b63\u3057\u3044\u63cf\u753b\u64cd\u4f5c\u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u306e\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5074\u306e\u5f79\u5272\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4fdd\u6301\u30e2\u30fc\u30c9\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3"),"\u3067\u306f\u3001\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u62bd\u8c61\u30e2\u30c7\u30eb\u3092\u30e6\u30fc\u30b6\u304c\u64cd\u4f5c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u30a8\u30f3\u30b8\u30f3\u306f\u3001\u9069\u5207\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff65\u30e2\u30c7\u30eb\u3092\u6b63\u3057\u3044\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u63cf\u753b\u64cd\u4f5c\u306b\u5909\u63db\u3059\u308b\u5f79\u76ee\u3092\u62c5\u3044\u307e\u3059\u3002")),(0,r.kt)("p",null,"TouchGFX\u306f\u3001\u4fdd\u6301\u30e2\u30fc\u30c9\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u539f\u5247\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u3064\u307e\u308a\u3001TouchGFX\u306f\u30e6\u30fc\u30b6\u304c\u64cd\u4f5c\u53ef\u80fd\u306a\u30e2\u30c7\u30eb\u3092\u63d0\u4f9b\u3057\u3001\u3055\u3089\u306bTouchGFX\u304c\u3053\u306e\u30e2\u30c7\u30eb\u3092\u9069\u5207\u306a\u63cf\u753b\u30e1\u30bd\u30c3\u30c9\uff65\u30b3\u30fc\u30eb\u306e\u30bb\u30c3\u30c8\u306b\u5909\u63db\u3059\u308b\u5f79\u76ee\u3092\u62c5\u3044\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/retained-mode-graphics2.svg",noShadow:"true",width:480,mdxType:"Figure"},"\u4fdd\u6301\u30e2\u30fc\u30c9\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9"),(0,r.kt)("p",null,"TouchGFX\u3092\u4fdd\u6301\u30e2\u30fc\u30c9\u306b\u3059\u308b\u5229\u70b9\u306f\u591a\u304f\u3042\u308a\u307e\u3059\u3002 \u4e3b\u306a\u5229\u70b9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u3044\u3084\u3059\u3055:")," \u4fdd\u6301\u30e2\u30fc\u30c9\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u306f\u4f7f\u3044\u3084\u3059\u304f\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u306f\u3001\u5185\u90e8\u30e2\u30c7\u30eb\u306b\u5bfe\u3059\u308b\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u69cb\u6210\u3092\u884c\u3044\u307e\u3059\u3002\u5b9f\u969b\u306e\u63cf\u753b\u64cd\u4f5c\u306b\u3064\u3044\u3066\u8003\u3048\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9:")," TouchGFX\u306f\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u3092\u89e3\u6790\u3057\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u30e2\u30c7\u30eb\u3092\u73fe\u5b9f\u5316\u3059\u308b\u306e\u306b\u5fc5\u8981\u306a\u63cf\u753b\u547c\u3073\u51fa\u3057\u3092\u6700\u9069\u5316\u3057\u307e\u3059\u3002 \u3053\u3053\u306b\u306f\u3001\u975e\u8868\u793a\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u3042\u3048\u3066\u63cf\u753b\u3057\u306a\u3044\u3053\u3068\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5909\u66f4\u90e8\u5206\u306e\u307f\u3092\u63cf\u753b\u304a\u3088\u3073\u8ee2\u9001\u3059\u308b\u3053\u3068\u3001\u3055\u3089\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u7ba1\u7406\u306a\u3069\u3001\u591a\u304f\u306e\u3053\u3068\u304c\u542b\u307e\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u72b6\u614b\u7ba1\u7406:")," TouchGFX\u306f\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u90e8\u5206\u3092\u5e38\u306b\u628a\u63e1\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u306f\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u3088\u308a\u7c21\u5358\u306b\u6700\u9069\u5316\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,"TouchGFX\u304c\u4fdd\u6301\u30e2\u30fc\u30c9\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30b9\u30ad\u30fc\u30e0\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308b\u3001\u6b20\u70b9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30e1\u30e2\u30ea\u306e\u4f7f\u7528\u91cf:")," \u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u8868\u73fe\u306b\u306f\u30e1\u30e2\u30ea\u3092\u3044\u304f\u3089\u304b\u4f7f\u7528\u3057\u307e\u3059\u3002 TouchGFX\u306f\u3001\u305d\u306e\u6027\u80fd\u30ec\u30d9\u30eb\uff08\u901a\u5e38\u306f\u6bce\u79d260\u30d5\u30ec\u30fc\u30e0\u306e\u63cf\u753b\uff09\u306b\u53ce\u307e\u308b\u3088\u3046\u306b\u3001\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u3092\u5206\u6790\u3057\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u5b9f\u884c\u3055\u308c\u308b\u63cf\u753b\u3092\u6700\u9069\u5316\u3057\u307e\u3059\u3002 TouchGFX\u306e\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u308b\u30e1\u30e2\u30ea\u91cf\u306e\u524a\u6e1b\u306b\u306f\u3001\u591a\u5927\u306a\u52aa\u529b\u304c\u304b\u3051\u3089\u308c\u3066\u304d\u307e\u3057\u305f\u3002 \u4e00\u822c\u7684\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3053\u306e\u30e2\u30c7\u30eb\u306e\u30e1\u30e2\u30ea\u91cf\u306f1 KB\u3092\u5927\u304d\u304f\u4e0b\u56de\u3063\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("h2",d({},{id:"manipulate-the-model"}),"\u30e2\u30c7\u30eb\u306e\u64cd\u4f5c"),(0,r.kt)("p",null,"\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30c4\u30ea\u30fc"),(0,r.kt)("p",null,"\u30e2\u30c7\u30eb\u5185\u306e\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u5fc5\u305a1\u3064\u306e\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u95a2\u9023\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002 \u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u81ea\u4f53\u3082\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u4e00\u90e8\u3067\u3059\u3002 \u3053\u3046\u3057\u305f\u30e2\u30c7\u30eb\u306f",(0,r.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"}),"\u30c4\u30ea\u30fc"),"\u3068\u5e83\u304f\u547c\u3070\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"ST\u3067\u306f\u3001\u3053\u306e\u30c4\u30ea\u30fc\u5185\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u3053\u3068\u3092\u3001UI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u307e\u305f\u306f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u547c\u3076\u3053\u3068\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u89b3\u70b9\u304b\u3089\u898b\u308b\u3068\u3001\u8868\u793a\u3055\u308c\u308b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306f\u3001\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u5185\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8a2d\u5b9a\u304a\u3088\u3073\u64cd\u4f5c\u3059\u308b\u3053\u3068\u3067\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 \u6b21\u306e\u4f8b\u3067\u306f\u3001\u4f4d\u7f6e\u3084\u753b\u50cf\u306b\u3088\u3063\u3066\u30dc\u30bf\u30f3\u3092\u8a2d\u5b9a\u3057\u3001\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306b\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"myButton.setXY(100,50);\nmyButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));\nadd(myButton);\n")),(0,r.kt)("h2",d({},{id:"issue-drawing-commands"}),"\u63cf\u753b\u30b3\u30de\u30f3\u30c9\u306e\u767a\u884c"),(0,r.kt)("p",null,"\u6700\u7d42\u7684\u306b\u3001\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u63cf\u753b\u6642\u306b\u3001TouchGFX\u306f\u63cf\u753bAPI\u3092\u5229\u7528\u3057\u307e\u3059\u3002 \u3053\u306e\u63cf\u753bAPI\u306b\u306f\u3001\u30dc\u30c3\u30af\u30b9\u3001\u753b\u50cf\u3001\u30c6\u30ad\u30b9\u30c8\u3001\u30e9\u30a4\u30f3\u3001\u30dd\u30ea\u30b4\u30f3\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u5316\u3055\u308c\u305f\u4e09\u89d2\u5f62\u306a\u3069\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3092\u63cf\u753b\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b\u3068\u3057\u3066\u3001TouchGFX\u306e",(0,r.kt)("a",d({parentName:"p"},{href:"../development/ui-development/ui-components/buttons/button"}),"Button"),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001\u63cf\u753b\u6642\u306b\u3001\u753b\u50cf\u306e\u63cf\u753b\u306e\u305f\u3081\u306b",(0,r.kt)("a",d({parentName:"p"},{href:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"}),"drawPartialBitmap\u30e1\u30bd\u30c3\u30c9"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 TouchGFX\u3067Button\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u63cf\u753b\u3059\u308b\u305f\u3081\u306e\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"touchgfx/widgets/button.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void Button::draw(const Rect& invalidatedArea) const\n{\n    // calculate the part of the bitmap to draw\n    api.drawPartialBitmap(bitmap, x, y, part, alpha);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u8a73\u3057\u304f\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"em"},"touchgfx/widgets/button.cpp"),"\u306e\u5b9f\u969b\u306e\u30bd\u30fc\u30b9\u3092\u8abf\u3079\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"TouchGFX\u306b\u306f\u3001\u6700\u9069\u5316\u3055\u308c\u305f\u63cf\u753bAPI\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,r.kt)("a",d({parentName:"p"},{href:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"}),"drawPartialBitmap"),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u63cf\u753b\u3059\u308b\u305f\u3081\u306b\u5185\u5728\u3059\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff08\u4f7f\u7528\u53ef\u80fd\u3067\u3042\u308c\u3070Chrom-ART\uff09\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u65b0\u3057\u3044\u30bf\u30a4\u30d7\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u3092\u62e1\u5f35\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u3053\u308c\u3089\u306eAPI\u63cf\u753b\u30e1\u30bd\u30c3\u30c9\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002 \u81ea\u5206\u72ec\u81ea\u306e",(0,r.kt)("a",d({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/custom-widgets"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),"\u306e\u4f5c\u6210\u306b\u95a2\u3059\u308b\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u63cf\u753bAPI\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5\u306f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u56fa\u6709\u3067\u3042\u308a\u3001\u7279\u5b9a\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3054\u3068\u306b\u9ad8\u5ea6\u306b\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",d({},{id:"main-loop"}),"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,"\u591a\u304f\u306e\u30b2\u30fc\u30e0\uff65\u30a8\u30f3\u30b8\u30f3\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a8\u30f3\u30b8\u30f3\u3001\u7279\u306bTouchGFX\u306e\u52d5\u4f5c\u3067\u306f\u3001\u7121\u9650\u30eb\u30fc\u30d7\u3068\u898b\u306a\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u5185\u3067\u306f\u3001\u6b21\u306e3\u3064\u306e\u4e3b\u306a\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u304c\u884c\u308f\u308c\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30a4\u30d9\u30f3\u30c8\u306e\u53ce\u96c6:")," \u30bf\u30c3\u30c1\uff65\u30b9\u30af\u30ea\u30fc\u30f3\u3001\u7269\u7406\u30dc\u30bf\u30f3\u306e\u62bc\u4e0b\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff65\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306a\u3069\u304b\u3089\u3001\u30a4\u30d9\u30f3\u30c8\u3092\u53ce\u96c6\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u66f4\u65b0:")," \u53ce\u96c6\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u306b\u53cd\u5fdc\u3057\u3066\u3001\u30e2\u30c7\u30eb\u306e\u4f4d\u7f6e\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3001\u8272\u3001\u753b\u50cf\u306a\u3069\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u63cf\u753b:")," \u66f4\u65b0\u3055\u308c\u305f\u30e2\u30c7\u30eb\u306e\u30d1\u30fc\u30c4\u3092\u518d\u63cf\u753b\u3057\u3066\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8868\u793a\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u56f3\u5f0f\u5316\u3059\u308b\u3068\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/engine-cycle.png",noShadow:"true",width:320,mdxType:"Figure"},"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u5b9f\u884c\u3059\u308b\u305f\u3073\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30a3\u30c3\u30af\u3068\u3057\u3066\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",d({},{id:"platform-adaptibility"}),"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u9069\u5408\u6027"),(0,r.kt)("p",null,"TouchGFX\u306f\u3059\u3079\u3066\u306eSTM32\u7d44\u8fbc\u307f\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u4e0a\u8a18\u306e\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u9069\u5408\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a4\u30d9\u30f3\u30c8\u306e\u53ce\u96c6\u306f\u5c02\u7528\u306e\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30ec\u30a4\u30e4\u306e\u30ab\u30b9\u30bf\u30e0\u5316\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",d({parentName:"li"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30e2\u30c7\u30eb\u306e\u66f4\u65b0\u306f\u5b8c\u5168\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272\u3067\u3059\u3002 \u3053\u306e\u66f4\u65b0\u306e\u5b9f\u884c\u65b9\u6cd5\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",d({parentName:"li"},{href:"../development/ui-development/ui-development-introduction"}),"UI Development"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u63cf\u753b\u306fTouchGFX\u306b\u3088\u3063\u3066\u51e6\u7406\u3055\u308c\u3001\u4e00\u822c\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306e\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u30d4\u30af\u30bb\u30eb\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u8ee2\u9001\u306f\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u56fa\u6709\u3067\u3059\u3002\u7279\u5b9a\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5411\u3051\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",d({parentName:"li"},{href:"../development/board-bring-up/board-introduction"}),"Board Bring Up"),"\u300d\u304a\u3088\u3073 \u300c",(0,r.kt)("a",d({parentName:"li"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"))}y.isMDXComponent=!0}}]);