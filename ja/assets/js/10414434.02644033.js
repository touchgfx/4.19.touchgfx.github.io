"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4153],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,m=d["".concat(u,".").concat(s)]||d[s]||g[s]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},62331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return v}});var r=n(3905),i=n(22425),a=n(44035),l=n(93054),o=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&s(e,n,t[n]);return e};const h={id:"debugging",title:"\u30c7\u30d0\u30c3\u30b0"},b=void 0,f={unversionedId:"development/ui-development/working-with-touchgfx/debugging",id:"development/ui-development/working-with-touchgfx/debugging",title:"\u30c7\u30d0\u30c3\u30b0",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/debugging.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/debugging",permalink:"/4.19/ja/docs/development/ui-development/working-with-touchgfx/debugging",tags:[],version:"current",frontMatter:{id:"debugging",title:"\u30c7\u30d0\u30c3\u30b0"},sidebar:"docs",previous:{title:"Compiling-and-Flashing\uff08\u30b3\u30f3\u30d1\u30a4\u30eb\u3068\u30d5\u30e9\u30c3\u30b7\u30e5\uff09",permalink:"/4.19/ja/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"},next:{title:"Examples\uff08\u4f8b\uff09\u3068Board Specific Demos\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2\uff09",permalink:"/4.19/ja/docs/development/ui-development/working-with-touchgfx/examples"}},k={},v=[{value:"\u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u30c7\u30d0\u30c3\u30b0",id:"target-debugging",level:2},{value:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u30c7\u30d0\u30c3\u30b0",id:"simulator-debugging",level:2},{value:"DebugPrinter\u306e\u4f7f\u7528",id:"using-the-debugprinter",level:2},{value:"DebugPrinter\u30af\u30e9\u30b9",id:"debugprinter-classes",level:3}],D={toc:v};function y(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},D),s),u(t,p({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001TouchGFX Designer\u3084TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u3001\u958b\u767a\u8005\u306b\u3088\u3063\u3066\u8a18\u8ff0\u3055\u308c\u308bC++\u30d5\u30a1\u30a4\u30eb\u306e\u30bb\u30c3\u30c8\u306a\u306e\u3067\u3001\u4ed6\u306eC++\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u540c\u3058\u3088\u3046\u306b\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"target-debugging"}),"\u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u30c7\u30d0\u30c3\u30b0"),(0,r.kt)("p",null,"IAR Workbench\u3001Keil uVision\u3001\u307e\u305f\u306fSTM32CubeIDE\u306a\u3069\u306eIDE\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u4e0a\u3067\u306e\u30c7\u30d0\u30c3\u30b0\u306f\u3001\u305d\u306eIDE\u306e\u4f7f\u7528\u53ef\u80fd\u306a\u30e1\u30ab\u30cb\u30ba\u30e0\u3092\u4f7f\u7528\u3057\u3066\u7c21\u5358\u306b\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u3001\u3042\u308b\u3044\u306fTouchGFX Board Setup\u304b\u3089\u76f4\u63a5\u751f\u6210\u3055\u308c\u305fTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u9078\u629e\u3057\u305f\u30c4\u30fc\u30eb\uff65\u30c1\u30a7\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3059\u3050\u306b\u30c7\u30d0\u30c3\u30b0\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u8a55\u4fa1\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u30b3\u30fc\u30c9\u3068TouchGFX AL\u306f\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30dc\u30fc\u30c9\u4e0a\u3067\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\u306e\u3067\u3001\u305d\u3053\u3067\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eUI\u90e8\u5206\u306f\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u4e0a\u3067\u3001\u307e\u305f\u306f\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30d0\u30c3\u30b0\u3067\u304d\u307e\u3059\u3002 \u30bf\u30fc\u30b2\u30c3\u30c8\u4e0a\u3067\u306f\u3001\u901a\u5e38\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u901f\u5ea6\u3001\u66f4\u65b0\u983b\u5ea6\u3001\u5fdc\u7b54\u6027\u306a\u3069\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u554f\u984c\u306e\u3088\u3046\u306a\u5185\u5bb9\u3092\u30c7\u30d0\u30c3\u30b0\u3057\u307e\u3059\u3002 \u4ed6\u306eUI\u56fa\u6709\u306e\u554f\u984c\u3082\u30bf\u30fc\u30b2\u30c3\u30c8\u4e0a\u3067\u30c7\u30d0\u30c3\u30b0\u3067\u304d\u307e\u3059\u304c\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u305f\u30c7\u30d0\u30c3\u30b0\u306e\u65b9\u304c\u9ad8\u901f\u3067\u3059\u3002"),(0,r.kt)("h2",m({},{id:"simulator-debugging"}),"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u30c7\u30d0\u30c3\u30b0"),(0,r.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u304d\u3001\u9077\u79fb\u3001\u8981\u7d20\u306e\u66f4\u65b0\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\uff65\u30ed\u30b8\u30c3\u30af\u3068\u3044\u3063\u305fUI\u95a2\u9023\u306e\u554f\u984c\u306e\u30c7\u30d0\u30c3\u30b0\u306f\u3001\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u6bce\u56de\u30dc\u30fc\u30c9\u3092\u30d5\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30c6\u30b9\u30c8\u304a\u3088\u3073\u30c7\u30d0\u30c3\u30b0\u3057\u305f\u65b9\u304c\u52b9\u7387\u7684\u3067\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fVisual Studio\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001\u3053\u306e\u305f\u3081\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u7dad\u6301\u3057\u3066\u3044\u307e\u3059\u3002 Visual Studio\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u30c7\u30d0\u30c3\u30b0\uff65\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3057\u3001IDE\u306e\u3059\u3079\u3066\u306e\u30c7\u30d0\u30c3\u30b0\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u5834\u5408\u3001Visual Studio\u306b\u5236\u9650\u3055\u308c\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fGCC\u3067\u30b3\u30f3\u30d1\u30a4\u30eb\u3067\u304d\u308b\u306e\u3067\u3001\u5225\u306eIDE\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u306e\u306a\u3089\u3001\u305d\u306eIDE\u3092\u3001GCC\u3067\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u305f\u3081\u306b\u8a2d\u5b9a\u3059\u308b\u53ef\u80fd\u6027\u304c\u6700\u3082\u9ad8\u3044\u3067\u3057\u3087\u3046\u3002 \u305f\u3060\u3057\u3053\u306e\u305f\u3081\u306b\u306f\u3001\u30e6\u30fc\u30b6\u81ea\u8eab\u3067IDE\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/visual-studio.png",width:"640",mdxType:"Figure"},"Visual Studio\u3067\u306e\u30c7\u30d0\u30c3\u30b0"),(0,r.kt)("h2",m({},{id:"using-the-debugprinter"}),"DebugPrinter\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"DebugPrinter\u30af\u30e9\u30b9\u306f\u753b\u9762\u4e0a\u306b\u30c7\u30d0\u30c3\u30b0\uff65\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7c21\u5358\u306b\u51fa\u529b\u3059\u308b\u65b9\u6cd5\u3067\u3001TextArea\u3084\u305d\u306e\u4ed6\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002 \u305f\u3068\u3048\u3070\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u306e\u30a4\u30d9\u30f3\u30c8\u3001\u3042\u308b\u3044\u306fFPS\u3084\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306a\u3069\u306e\u6e2c\u5b9a\u5024\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"DebugPrinter\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5272\u5f53\u3066\u3066\u3001Application\u30af\u30e9\u30b9\u306b\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 This can be done e.g. in the constructor of FrontendApplication."),(0,r.kt)("p",null,"The debug printer needs to be compatible with the framebuffer format. The table below shows the available class names. Here we add a 16bpp debug printer (compatible with LCD16bpp) in ",(0,r.kt)("inlineCode",{parentName:"p"},"gui/src/common/FrontendApplication.cpp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/lcd/LCD16DebugPrinter.hpp>\n\nLCD16DebugPrinter lcd16DebugPrinter; // Global object\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n  : FrontendApplicationBase(m, heap)\n{\n  lcd16DebugPrinter.setPosition(0, 0, 240, 40);\n  lcd16DebugPrinter.setScale(2);\n  lcd16DebugPrinter.setColor(0x00); //black\n  Application::setDebugPrinter(&lcd16DebugPrinter);\n}\n")),(0,r.kt)("p",null,"Here we have configured the DebugPrinter to write in the upper left 240 x 40 pixels. In your application you can now print a string using:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'#include <stdio.h>\n\nchar debugStringBuffer[30];\nvoid updateDebugString()\n{\n  static int count = 0;\n  count++;\n  snprintf(debugStringBuffer, sizeof(debugStringBuffer), "tick: %d", count);\n  Application::getDebugPrinter()->setString(debugStringBuffer);\n  Application::invalidateDebugRegion();\n}\n')),(0,r.kt)("p",null,"You don't have to call the DebugPrinter::setString method more than once in your application. But call the invalidateDebugRegion when you have changed the content of your buffer. This will make the DebugPrinter draw the new content. The DebugPrinter will also redraw if the ordinary Widgets in the area covered by DebugPrinter are redrawn."),(0,r.kt)(l.Z,{mdxType:"Note"},"Characters from ASCII 32 (space) to ASCII 126 ('~') are available."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/debugprinter.png",mdxType:"Figure"},"DebugPrinter\u306e\u4f7f\u7528"),(0,r.kt)("h3",m({},{id:"debugprinter-classes"}),"DebugPrinter\u30af\u30e9\u30b9"),(0,r.kt)("p",null,"DebugPrinter\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u4f7f\u7528\u3059\u308bLCD\u30af\u30e9\u30b9\u3068\u4e92\u63db\u6027\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u6b21\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u306f\u3001DebugPrinter\u30af\u30e9\u30b9\u540d\u304c\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"LCD\u30af\u30e9\u30b9"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"DebugPrinter\u30af\u30e9\u30b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD1bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD1DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD2bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD2DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD4bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD4DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_ARGB2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8ARGB2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_ABGR2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8ABGR2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_RGBA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8RGBA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_BGRA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8BGRA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16bppSerialFlash"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD24bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD24DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD32bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD32DebugPrinter")))),(0,r.kt)("p",null,"\u4f7f\u7528\u3059\u308bLCD\u30af\u30e9\u30b9\u3068\u4e00\u81f4\u3059\u308bDebugPrinter\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"For Simulator projects the LCD instance is created in ",(0,r.kt)("em",{parentName:"p"},"generated/simulator/src/mainBase.cpp"),". For target projects the instance is created in ",(0,r.kt)("em",{parentName:"p"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp"),":"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"...\nstatic LCD16bpp display;\n...\n")),(0,r.kt)("p",null,"You can check these files to verify your LCD class name."))}y.isMDXComponent=!0}}]);