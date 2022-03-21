"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8101],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=d(n),c=i,h=g["".concat(s,".").concat(c)]||g[c]||p[c]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},86988:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return v},default:function(){return f}});var r=n(3905),i=n(44035),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&p(e,n,t[n]);return e};const c={id:"texts-view",title:"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09"},h=void 0,m={unversionedId:"development/ui-development/designer-user-guide/texts-view",id:"development/ui-development/designer-user-guide/texts-view",isDocsHomePage:!1,title:"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09",description:"TouchGFX Designer\u306eTexts View\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3001\u7ffb\u8a33\u3001\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002 The view consists of two tabs: Texts, and Typographies.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/texts-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/texts-view",permalink:"/4.19/ja/docs/development/ui-development/designer-user-guide/texts-view",tags:[],version:"current",frontMatter:{id:"texts-view",title:"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09"},sidebar:"docs",previous:{title:"Images View\uff08\u753b\u50cf\u30d3\u30e5\u30fc\uff09",permalink:"/4.19/ja/docs/development/ui-development/designer-user-guide/images-view"},next:{title:"Config View\uff08\u8a2d\u5b9a\u30d3\u30e5\u30fc\uff09",permalink:"/4.19/ja/docs/development/ui-development/designer-user-guide/config-view"}},v=[{value:"Texts",id:"texts",children:[{value:"Auto-generated ID",id:"auto-generated-id",children:[],level:3},{value:"Defined ID",id:"defined-id",children:[],level:3},{value:"Texts tab features",id:"texts-tab-features",children:[],level:3},{value:"Translations\uff08\u7ffb\u8a33\uff09",id:"translations",children:[],level:3},{value:"Translations Specifics\uff08\u7ffb\u8a33\u56fa\u6709\u306e\u8a2d\u5b9a\uff09",id:"translations-specifics",children:[],level:3},{value:"Adding languages\uff08\u8a00\u8a9e\u306e\u8ffd\u52a0\uff09",id:"adding-languages",children:[],level:3}],level:2},{value:"Typographies\uff08\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\uff09",id:"typographies",children:[{value:"Add Typography",id:"add-new-typography",children:[],level:3},{value:"Delete Typography",id:"delete-typography",children:[],level:3}],level:2}],y={toc:v};function f(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},y),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer\u306eTexts View\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3001\u7ffb\u8a33\u3001\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002 The view consists of two tabs: ",(0,r.kt)("a",g({parentName:"p"},{href:"#texts"}),"Texts"),", and ",(0,r.kt)("a",g({parentName:"p"},{href:"#typographies"}),"Typographies"),"."),(0,r.kt)("h2",g({},{id:"texts"}),"Texts"),(0,r.kt)("p",null,"The Texts tab gives an overview of all texts elements. A text element can either have an ",(0,r.kt)("a",g({parentName:"p"},{href:"#auto-generated-id"}),"auto-generated ID")," or a ",(0,r.kt)("a",g({parentName:"p"},{href:"#defined-id"}),"defined ID"),"."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view.png",mdxType:"Figure"},"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09"),(0,r.kt)("h3",g({},{id:"auto-generated-id"}),"Auto-generated ID"),(0,r.kt)("p",null,"Texts with an auto-generated ID (also known as Single Use texts) are only used once, and cannot be used by more than one widget or action at a time. They are added automatically when used on a widget or action, and are deleted automatically when the widget or action is deleted."),(0,r.kt)("p",null,"When auto-generated texts are initially created, they are added to a text group named ",(0,r.kt)("em",{parentName:"p"},'"Unsorted"'),". if this group does not exist, it will be created."),(0,r.kt)("p",null,"The auto-generated ID can easily be renamed thereby enabling the use of the text on any number of widgets and actions."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-auto-generated.png",mdxType:"Figure"},"Auto-generated texts in Texts View"),(0,r.kt)("h3",g({},{id:"defined-id"}),"Defined ID"),(0,r.kt)("p",null,"Texts with a defined ID (also known as Resources) can be reused on any number of widgets and actions in the TouchGFX Designer. To add a new text with a defined ID, click the button labeled 'ADD NEW TEXT' in the Texts tab or rename a text with an auto-generated ID. One or more texts with a defined ID can be deleted in the Texts tab by selecting in grid or tree view and right clicking to open the shortcut menu or use the keyboard shortcut."),(0,r.kt)("h3",g({},{id:"texts-tab-features"}),"Texts tab features"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Search:"),(0,r.kt)("br",null)," Use the search bar to locate a specific text element or translation. All available input in text columns is searched."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tree view:"),(0,r.kt)("br",null)," The Texts tab contain a tree giving an overview of groups and text elements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Groups:"),(0,r.kt)("br",null)," Every group in the tree, that contains one or more texts can be collapsed by pressing the chevron next to the group's name. Groups can have text added to them either by dragging a text in tree view or by right clicking a text in grid. To add a new group simply click the add button in tree view."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-groups.png",mdxType:"Figure"},"Text Groups"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Header context menu:"),(0,r.kt)("br",null)," Right click the header in grid to see the header context menu. From here you can hide, edit, delete, and show a column (not all options are available for all columns)."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-header-context-menu.png",mdxType:"Figure"},"Header context menu"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Grid context menu:"),(0,r.kt)("br",null)," Right click a text in grid to see the context menu. From here you can delete, copy, paste, and move a text to another group."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-text-context-menu.png",mdxType:"Figure"},"Text context menu"),(0,r.kt)("h3",g({},{id:"translations"}),"Translations\uff08\u7ffb\u8a33\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typography:"),(0,r.kt)("br",null)," Specifies which typography the text and all its translations should use. Typographies can be added and configured in the ",(0,r.kt)("a",g({parentName:"p"},{href:"#typographies"}),"Typographies")," tab."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alignment:"),(0,r.kt)("br",null)," \u30c6\u30ad\u30b9\u30c8\u3068\u305d\u306e\u3059\u3079\u3066\u306e\u7ffb\u8a33\u304c\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u6c34\u5e73\u65b9\u5411\u306e\u4f4d\u7f6e\u5408\u305b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u4f7f\u7528\u3067\u304d\u308b\u4f4d\u7f6e\u5408\u305b\u306f\u3001Left\uff08\u5de6\u63c3\u3048\uff09\u3001Right\uff08\u53f3\u63c3\u3048\uff09\u3001Center\uff08\u4e2d\u592e\u63c3\u3048\uff09\u3067\u3059\u3002"),(0,r.kt)("h3",g({},{id:"translations-specifics"}),"Translations Specifics\uff08\u7ffb\u8a33\u56fa\u6709\u306e\u8a2d\u5b9a\uff09"),(0,r.kt)("p",null,"Each translation can overwrite the default Alignment. To reveal this control double click a translation. Setting a translation specific alignment is easily done through the inline Alignment selector, as shown in the figure below."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-edit-language-specific-text-alignment.png",mdxType:"Figure"},"Translation Specific Alignment\u306e\u8a2d\u5b9a"),(0,r.kt)("h3",g({},{id:"adding-languages"}),"Adding languages\uff08\u8a00\u8a9e\u306e\u8ffd\u52a0\uff09"),(0,r.kt)("p",null,"To add a new language, simply press the add button in the header menu. \u4e0b\u306e\u56f3\u306b\u793a\u3059\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u3001\u3053\u3053\u3067\u8a00\u8a9e\u306e\u540d\u524d\u3068\u3001\u5225\u306e\u8a00\u8a9e\u304b\u3089\u306e\u7ffb\u8a33\u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-add-language.png",mdxType:"Figure"},"Add New Language\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7"),(0,r.kt)("h2",g({},{id:"typographies"}),"Typographies\uff08\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\uff09"),(0,r.kt)("p",null,"Typographies\u30bf\u30d6\u306b\u306f\u3001\u4e0b\u306e\u56f3\u306b\u793a\u3059\u3088\u3046\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u6982\u8981\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view.png",mdxType:"Figure"},"Typographies view"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typography ID:")," The name of the typography."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Language Settings:"),(0,r.kt)("br",null)," Contains the language settings of the typography. Default applies to all unspecified languages. To specify settings for a specific language click the add button and choose the desired language from the menu."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-language-setting.png",mdxType:"Figure"},"Add Language Setting to Typography"),(0,r.kt)("p",null,"A language setting can be deleted by right clicking the desired language setting tab."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-language-setting.png",mdxType:"Figure"},"Delete Language Setting to Typography"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Font:"),(0,r.kt)("br",null)," \u6240\u5b9a\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d5\u30a9\u30f3\u30c8\u306e\u540d\u524d\u3067\u3059\u3002",(0,r.kt)("br",null)," Windows\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d5\u30a9\u30f3\u30c8\u304b\u3089\u9078\u629e\u3059\u308b\u304b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"assets / fonts"),"\u30d5\u30a9\u30eb\u30c0\u306b\u72ec\u81ea\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002  ",(0,r.kt)("em",{parentName:"p"},"\u3053\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u30d5\u30a9\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u3001\u305d\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306bTouchGFX Designer\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Size:"),(0,r.kt)("br",null)," The font size of the typography."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bpp:"),(0,r.kt)("br",null)," Bits per pixel\u306e\u7565\u3067\u3059\u3002 \u30d5\u30a9\u30f3\u30c8\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d4\u30af\u30bb\u30eb\u3042\u305f\u308a\u306e\u30d3\u30c3\u30c8\u6570\u3067\u3059\u3002 \u9069\u5207\u306a\u5024\u306f1\u30012\u30014\u30018\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Direction:"),(0,r.kt)("br",null)," Specifies which text direction the text should use. \u4f7f\u7528\u3067\u304d\u308b\u5411\u304d\u306f\u3001LTR\uff08\u5de6\u304b\u3089\u53f3\uff09\u3068RTL\uff08\u53f3\u304b\u3089\u5de6\uff09\u3067\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306fLTR\u3067\u3059\u3002 RTL\u306f\u4e3b\u306b\u30a2\u30e9\u30d3\u30a2\u8a9e\u3084\u30d8\u30d6\u30e9\u30a4\u8a9e\u306a\u3069\u3001\u53f3\u304b\u3089\u5de6\u306b\u8a18\u8ff0\u3059\u308b\u8a00\u8a9e\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fallback Character:"),(0,r.kt)("br",null)," TouchGFX\u3067\u6587\u5b57\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u306b\u3001\u30b0\u30ea\u30d5\u304c\u4f7f\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u5217\u3067\u6307\u5b9a\u3055\u308c\u305f\u5024\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u5024\u3068\u3057\u3066\u306f\u30011\u3064\u306e\u6587\u5b57\u3001Unicode\u5024\uff0810\u9032\u6570\u307e\u305f\u306f16\u9032\u6570\u30010xABCD\u306a\u3069\uff09\u3001\u307e\u305f\u306f\u7279\u5225\u306a\u30ad\u30fc\u30ef\u30fc\u30c9skip\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u5358\u7d14\u306b\u7a7a\u767d\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wildcard Characters:"),(0,r.kt)("br",null),' TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3001\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u306a\u6587\u5b57\u3067\u3059\u3002 \u30c0\u30df\u30fc\uff65\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3088\u308a\u3082\u3053\u3061\u3089\u306e\u65b9\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002 \u30c0\u30df\u30fc\uff65\u30c6\u30ad\u30b9\u30c8\u3067\u306f\u3059\u3079\u3066\u306e\u30b0\u30ea\u30d5\u3060\u3051\u3067\u306a\u304f\u3001\u5b9f\u969b\u306e\u6587\u5b57\u5217\uff08"0123456789-"\u306a\u3069\uff09\u3082\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u5217\u306b"0123456789-"\u3068\u5165\u529b\u3059\u308b\u3068\u3001\u30b0\u30ea\u30d5\u306f\u751f\u6210\u3055\u308c\u307e\u3059\u304c\u6587\u5b57\u5217\u306f\u751f\u6210\u3055\u308c\u307e\u305b\u3093\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget Wildcard Characters:"),(0,r.kt)("br",null)," \u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u5fc5\u8981\u3068\u3059\u308b\u4e00\u90e8\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u8ffd\u52a0\u3055\u308c\u308b\u6587\u5b57\u5217\u3067\u3059\u3002 As an example the ",(0,r.kt)("a",g({parentName:"p"},{href:"../ui-components/miscellaneous/digital-clock"}),"Digital Clock"),' widget will add "0123456789 :APM" to this field. The field is read only.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wildcard Ranges:"),(0,r.kt)("br",null),' Wildcard Characters\u3068\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u7bc4\u56f2\u3092\u7c21\u5358\u306b\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001"0-9,A-F"\u306f\u3001Wildcard Characters\u5217\u3067"0123456789ABCDEF"\u3068\u6307\u5b9a\u3059\u308b\u306e\u3068\u540c\u3058\u306b\u306a\u308a\u307e\u3059\u3002 \u7bc4\u56f2\u306f\u6570\u5024\u3067\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001"0-9"\u306f\u3001"48-57"\u307e\u305f\u306f"0x30-0x39"\u3068\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u5f15\u7528\u7b26\u306f\u542b\u307e\u308c\u307e\u305b\u3093\u306e\u3067\u3001\u5165\u529b\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ellipsis Character:"),(0,r.kt)("br",null)," \u3053\u306e\u6587\u5b57\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u9818\u57df\u5185\u3067\u9577\u3044\u30c6\u30ad\u30b9\u30c8\u3092\u5207\u308a\u8a70\u3081\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",g({},{id:"add-new-typography"}),"Add Typography"),(0,r.kt)("p",null,"To add a new typography, simply press the add button in tree view. A new typography containing default settings will be added to the bottom of the list."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-typography.png",mdxType:"Figure"},"Add Typography"),(0,r.kt)("h3",g({},{id:"delete-typography"}),"Delete Typography"),(0,r.kt)("p",null,"A typography can be deleted by right clicking the desired typography in tree view to open the shortcut menu or use the keyboard shortcut."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-typography.png",mdxType:"Figure"},"Delete Typography"))}f.isMDXComponent=!0}}]);