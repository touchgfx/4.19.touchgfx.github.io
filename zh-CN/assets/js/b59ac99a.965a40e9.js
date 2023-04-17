"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8394],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,g=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children))}},39487:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.width,r=e.height,a=e.points||[],l=(0,o.Z)(e.imageSource);return n.createElement("div",{style:{position:"relative"}},n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:t,height:r,src:l})),a.map((function(e,t){return n.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},n.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},n.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),n.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),n.createElement("p",null,e.children)))}},82985:function(e,t,r){var n=r(67294);class o extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},65250:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return y}});var n=r(3905),o=r(44035),a=r(39487),l=r(82985),i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&d(e,r,t[r]);return e};const k={id:"tutorial-05",title:"\u6559\u7a0b5\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c"},f=void 0,h={unversionedId:"tutorials/tutorial-05",id:"tutorials/tutorial-05",title:"\u6559\u7a0b5\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/tutorial-05.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-05",permalink:"/4.19/zh-CN/docs/tutorials/tutorial-05",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-05",title:"\u6559\u7a0b5\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c"},sidebar:"docs",previous:{title:"\u6559\u7a0b4\uff1a\u521b\u5efa\u5177\u6709\u81ea\u5b9a\u4e49\u884c\u4e3a\u7684\u6eda\u8f6e\u3002",permalink:"/4.19/zh-CN/docs/tutorials/tutorial-04"},next:{title:"AbstractButton",permalink:"/4.19/zh-CN/docs/api/classes/classtouchgfx_1_1_abstract_button"}},b={},y=[{value:"\u5c06\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u5230\u5c4f\u5e55",id:"adding-a-custom-action-to-a-screen",level:2},{value:"\u5c06\u503c\u4f20\u9012\u7ed9\u81ea\u5b9a\u4e49\u64cd\u4f5c",id:"passing-a-value-to-a-custom-action",level:2},{value:"\u5728\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6",id:"using-custom-triggers-in-custom-containers",level:2}],C={toc:y};function v(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=g(g({},C),d),u(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u901a\u8fc7TouchGFX Designer\uff0c\u53ef\u4ee5\u5b9a\u4e49\u5177\u6709\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c\u7684\u4ea4\u4e92\u7ec4\u4ef6\u3002 \u5e94\u7528\u4e2d\u7684\u6bcf\u4e2a\u5c4f\u5e55\u90fd\u53ef\u80fd\u5305\u542b\u64cd\u4f5c\u96c6\u5408",(0,n.kt)("em",{parentName:"p"},"\uff08\u8fd9\u4e9b\u662fC++\u4e2d\u7684\u7b80\u5355void\u65b9\u6cd5\uff09"),"\uff0c\u60a8\u53ef\u4ee5\u4eceTouchGFX Designer\u5185\u90e8\u548c\u4ee3\u7801\u4e2d\u8c03\u7528\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u800c\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e5f\u53ef\u80fd\u6709\u60a8\u7684\u5e94\u7528\u53ef\u80fd\u54cd\u5e94\u7684\u89e6\u53d1\u6761\u4ef6",(0,n.kt)("em",{parentName:"p"},"\uff08\u76f8\u5f53\u4e8eC++\u4e2d\u7684\u56de\u8c03\uff09"),"\u96c6\u5408\u3002"),(0,n.kt)("p",null,"\u5728\u8be5\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u6b64\u529f\u80fd\uff0c\u4ee5\u63a2\u7d22\u4f7f\u7528\u5b83\u521b\u5efa\u66f4\u7b80\u6d01\u3001\u52a8\u6001\u7684TouchGFX\u5e94\u7528\u7684\u53ef\u80fd\u6027\u3002"),(0,n.kt)("p",null,"\u672c\u6559\u7a0b\u4e0d\u9002\u5408TouchGFX\u7684\u65b0\u7528\u6237\u3002 \u5efa\u8bae\u4ee5\u540e\u518d\u5b66\u4e60\u672c\u6559\u7a0b\u3002"),(0,n.kt)("h2",g({},{id:"adding-a-custom-action-to-a-screen"}),"\u5c06\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u5230\u5c4f\u5e55"),(0,n.kt)("p",null,"\u5728\u8fd9\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u5305\u542b\u80cc\u666f\u65b9\u5757\u548c\u6309\u94ae\u7684\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u5230\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u6309\u94ae\u88ab\u6309\u4e0b\u65f6\u4f7f\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c\u4fee\u6539\u80cc\u666f\u8272")),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u7528\u5c3a\u5bf8\u4e3a480x272\u7684\u56fe\u50cf\uff08\u9002\u7528\u4e8eSTM32F746\u6216\u6a21\u62df\u5668\u7b49\uff09\u65b0\u5efa\u4e00\u4e2a\u7a7a\u767d\u5e94\u7528\uff0c\u5e76\u63d2\u5165\u4e00\u4e2a\u7528\u4f5c\u80cc\u666f\u7684\u65b9\u5757\uff08\u5c06\u5176\u547d\u540d\u4e3a\u201cbackground\u201d\uff09\u548c\u4e00\u4e2a\u6309\u94ae\uff08\u5c06\u5176\u547d\u540d\u4e3a\u201cbutton\u201d\uff09\u3002 \u7ed3\u679c\u5e94\u7c7b\u4f3c\u4e8e\u4e0b\u56fe\uff1a"),(0,n.kt)(a.Z,{points:[[420,85]],imageSource:"/img/tutorials/tutorial-05/white-background-and-button-4-17.webp",mdxType:"FigureWithPoints"},"\u6dfb\u52a0\u4e00\u4e2a\u767d\u8272\u80cc\u666f\u65b9\u5757\u548c\u4e00\u4e2a\u6309\u94ae"),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u5c06\u4e00\u4e2a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u5230\u5c4f\u5e55\u3002 \u60a8\u53ef\u4ee5\u4ece\u5c4f\u5e55\u7684\u201c\u5c5e\u6027\u201d\u9009\u9879\u5361\u5b8c\u6210\u6b64\u64cd\u4f5c\uff0c\u65b9\u6cd5\u662f\u9009\u62e9\u201c\u5c4f\u5e55\u201d\u5e76\u6309\u4e0b\u201c\u64cd\u4f5c\u201d\u7ec4\u4e2d\u7684\u201c+\u201d\u6309\u94ae\uff08\u4e0a\u9762\u7684\u56fe1\uff09\u3002 \u5c06\u64cd\u4f5c\u547d\u540d\u4e3a\u201csetBackgroundColor\u201d\uff0c\u63d0\u4f9b\u8bf8\u5982\u201c\u8bbe\u7f6e\u80cc\u666f\u8272\u201d\u4e4b\u7c7b\u7684\u63cf\u8ff0\u3002 \u4e0d\u8981\u8bbe\u7f6e\u6b64\u64cd\u4f5c\u7684\u7c7b\u578b\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/adding-custom-action-to-screen-4-17.webp",mdxType:"Figure"},"\u5c06\u65b0\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u5230\u5c4f\u5e55"),(0,n.kt)("p",null,"\u6309\u4e0b ",(0,n.kt)(l.Z,{mdxType:"Shortcut"},"F4")," \u952e\u751f\u6210\u9879\u76ee\u4ee3\u7801\u3002 \u8fd9\u5c06\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/generated/gui_generated/include/gui_generated/screen1_screen/Screen1ViewBase.hpp"),"\u4e2d\u751f\u6210\u4e00\u4e2a\u540d\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor()"),"\u7684\u865a\u62df\u65b9\u6cd5\uff0c\u5b83\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase.cpp"),"\u4e2d\u6709\u4e00\u4e2a\u7a7a\u5b9e\u73b0\u3002"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"\u6587\u4ef6\u7684\u7528\u6237\u4ee3\u7801\u4e2d\u91cd\u5199\u8be5\u65b9\u6cd5\u6216\u8005\u901a\u8fc7TouchGFX \u8bbe\u8ba1\u5668\u521b\u5efa\u4ea4\u4e92\u6765\u4e3a\u8be5\u65b9\u6cd5\u6dfb\u52a0\u529f\u80fd\u3002 \u6211\u4eec\u6765\u5c1d\u8bd5\u540e\u8005\uff0c\u8f6c\u81f3\u5c4f\u5e55\u7684\u201c\u4ea4\u4e92\u201d\u9009\u9879\u5361\uff0c\u5e76\u6dfb\u52a0\u5728\u70b9\u51fb\u6309\u94ae\u65f6\u8c03\u7528\u65b0\u65b9\u6cd5\u7684\u4ea4\u4e92\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click-4-17.webp",mdxType:"Figure"},"\u5728\u70b9\u51fb\u6309\u94ae\u65f6\u8c03\u7528setBackgroundColor"),(0,n.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5fc5\u987b\u6307\u5b9a\u5728\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),"\u65f6\u5b9e\u9645\u53d1\u751f\u7684\u64cd\u4f5c\u3002 \u4e3a\u6b64\uff0c\u5728\u53e6\u4e00\u4e2a\u4ea4\u4e92\u4e2d\u4f7f\u7528\u65b0\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c (1) \u4f5c\u4e3a\u89e6\u53d1\u6761\u4ef6\u3002 \u9996\u5148\uff0c\u5728\u89e6\u53d1\u6761\u4ef6",(0,n.kt)("em",{parentName:"p"},"\u201c\u8c03\u7528setBackgroundColor\u201d"),"\u53d1\u751f\u65f6\uff0c\u4f7f\u7528\u64cd\u4f5c",(0,n.kt)("em",{parentName:"p"},"\u201c\u4fee\u6539\u65b9\u5757\u8272\u5f69\u201d(2) "),"\u5c06\u80cc\u666f\u65b9\u5757\u7684\u8272\u5f69\u7b80\u5355\u5730\u8bbe\u7f6e\u4e3a\u9ed1\u8272\u3002"),(0,n.kt)(a.Z,{points:[[355,60],[410,76]],imageSource:"/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality-4-17.webp",mdxType:"FigureWithPoints"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u64cd\u4f5csetBackgroundColor\u7684\u529f\u80fd"),(0,n.kt)("p",null,"\u73b0\u5728\uff0c\u8fd0\u884c\u6a21\u62df\u5668\u5e76\u6309\u4e0b\u6309\u94ae\uff1b\u80cc\u666f\u5e94\u53d8\u4e3a\u9ed1\u8272\u3002 \u60a8\u5df2\u6210\u529f\u521b\u5efa\u7b2c\u4e00\u4e2a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/black-color-result-4-17.webp",mdxType:"Figure"},"\u6309\u4e0b\u6309\u94ae\u5c06\u80cc\u666f\u53d8\u4e3a\u9ed1\u8272"),(0,n.kt)("h2",g({},{id:"passing-a-value-to-a-custom-action"}),"\u5c06\u503c\u4f20\u9012\u7ed9\u81ea\u5b9a\u4e49\u64cd\u4f5c"),(0,n.kt)("p",null,"\u672c\u8282\u5c06\u5728\u521a\u521b\u5efa\u7684\u5e94\u7528\u7684\u57fa\u7840\u4e0a\uff0c\u57fa\u4e8e\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684\u6982\u5ff5\u8fdb\u884c\u5982\u4e0b\u62d3\u5c55\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06\u53c2\u6570\u6dfb\u52a0\u5230setBackgroundColor\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u968f\u673a\u8272\u4f20\u9012\u5230setBackgroundColor"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u6309\u4e0b\u6309\u94ae\u65f6\u5c06\u80cc\u666f\u4fee\u6539\u4e3a\u968f\u673a\u8272")),(0,n.kt)("p",null,"\u4e3a\u4e86\u8ba9\u8be5\u5e94\u7528\u66f4\u6709\u8da3\uff0c\u6211\u4eec\u5c06\u4e00\u4e2a\u503c\u4f20\u9012\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor")," \u81ea\u5b9a\u4e49\u64cd\u4f5c\uff0c\u4f7f\u4e4b\u53d8\u5f97\u66f4\u52a8\u6001\u3002"),(0,n.kt)("p",null,"\u8f6c\u81f3\u5c4f\u5e55\u7684\u201c\u4ea4\u4e92\u201d\u9009\u9879\u5361\uff0c\u4e3a\u64cd\u4f5c\u6309\u4e0bx\u6309\u94ae\u5220\u9664\u4e24\u4e2a\u5f53\u524d\u64cd\u4f5c\uff0c\u7136\u540e\u6211\u4eec\u5c06\u8bbe\u7f6e\u65b0\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u8f6c\u81f3\u5c4f\u5e55\u7684\u201c\u5c5e\u6027\u201d\u9009\u9879\u5361\uff0c\u627e\u5230\u81ea\u5b9a\u4e49\u64cd\u4f5c",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor")," \uff0c\u53d6\u6d88\u9009\u4e2d\u7c7b\u578b\u590d\u9009\u6846\u5e76\u8f93\u5165\u201ccolortype\u201d\uff0c\u8fd9\u5c06\u662f\u6211\u4eec\u8981\u4f20\u9012\u7ed9\u64cd\u4f5c\u7684\u53c2\u6570\u7c7b\u578b\uff08colortype\u662f\u7528\u4e8e\u63cf\u8ff0\u8272\u5f69\u7684\u81ea\u5e26TouchGFX\u7c7b\u578b\uff09\u3002 \u4e0d\u80fd\u547d\u540d\u53c2\u6570\uff0c\u5b83\u7684\u540d\u79f0\u5c06\u662f",(0,n.kt)("em",{parentName:"p"},"\u201cvalue\u201d"),"\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/adding-type-to-action-4-17.webp",mdxType:"Figure"},"\u4e3a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u8bbe\u7f6e\u53c2\u6570"),(0,n.kt)("p",null,"\u4e0b\u9762\u6765\u8bbe\u7f6e\u4ea4\u4e92\uff0c\u5b83\u4f7f\u7528\u6211\u4eec\u65b0\u6dfb\u52a0\u7684\u53c2\u6570\u503c\u3002 \u6211\u4eec\u4f7f\u7528\u89e6\u53d1\u6761\u4ef6\u201c\u8c03\u7528setBackgroundColor\u201d\u548c\u64cd\u4f5c\u201c\u6267\u884cC++\u4ee3\u7801\u201d\u8fdb\u884c\u8bbe\u7f6e\u3002 \u6211\u4eec\u8981\u7528\u65b0\u53c2\u6570\u8bbe\u7f6e\u80cc\u666f\u65b9\u5757\u7684\u8272\u5f69\uff0c\u56e0\u6b64\u8981\u6267\u884c\u7684\u4ee3\u7801\u5e94\u662f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"background.setColor(value);\nbackground.invalidate();\n")),(0,n.kt)("p",null,"\u7b2c\u4e8c\u884c\u5f3a\u5236\u7528\u65b0\u8272\u5f69\u91cd\u7ed8\u80cc\u666f\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/set-color-execute-code-4-17.webp",mdxType:"Figure"},"\u4f7f\u7528\u4f20\u9012\u7684\u503c\u4fee\u6539\u80cc\u666f\u8272\u5f69"),(0,n.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u89e6\u53d1\u6761\u4ef6\u663e\u793a\u4e86\u53c2\u6570\u7684\u540d\u79f0\u548c\u7c7b\u578b\u201cvalue : colortype\u201d\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u5c06\u8bbe\u7f6e\u5728\u70b9\u51fb\u6309\u94ae\u65f6\u5b9e\u9645\u8c03\u7528setBackgroundColor\u7684\u4ea4\u4e92\u3002 \u6dfb\u52a0\u53e6\u4e00\u4e2a\u5177\u6709\u89e6\u53d1\u6761\u4ef6\u201c\u70b9\u51fb\u6309\u94ae\u201d\u548c\u64cd\u4f5c\u201c\u8c03\u7528Screen1 setBackgroundColor\u201d\u7684\u4ea4\u4e92\uff0c\u8bf7\u6ce8\u610f\uff0c\u503c\u5c5e\u6027\u4e5f\u663e\u793a\u4e86\u5b83\u7684\u9884\u671f\u7c7b\u578b\u3002 \u6211\u4eec\u5c06\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u4e2d\u5229\u7528\u968f\u673a\u5316\u65b9\u6cd5",(0,n.kt)("inlineCode",{parentName:"p"},"rand()"),"\u5c06\u968f\u673a\u8272\u4f20\u9012\u7ed9setBackgroundColor\uff0c\u4ee5\u4fbf\u83b7\u53d6\u4e09\u4e2a0\u81f3255\u4e4b\u95f4\u7684\u968f\u673a\u6570\u5e76\u7528\u5b83\u4eec\u6307\u5b9a\u8272\u5f69\u3002 \u4e3a\u4e86\u8bbf\u95ee",(0,n.kt)("inlineCode",{parentName:"p"},"rand()"),"\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5176\u5305\u542b\u5728\u5e94\u7528\u4e2d\u3002 \u8fd8\u53ef\u4ee5\u4eceTouchGFX Designer\u5185\u90e8\u4e3a\u5c4f\u5e55\u548c\u81ea\u5b9a\u4e49\u5bb9\u5668\u63d0\u4f9b\u60a8\u81ea\u5df1\u7684includes\u51fd\u6570\uff0c\u5728\u672c\u4f8b\u4e2d\u6211\u4eec\u9700\u8981\u8fd9\u6837\u505a\u3002 \u8f6c\u81f3\u5c4f\u5e55\u7684\u201c\u5c5e\u6027\u201d\u9009\u9879\u5361\uff0c\u5728\u201cINCLUDES\u201d\u7ec4\u4e0b\u9762\u8f93\u5165\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n")),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/include-stdlib-4-17.webp",mdxType:"Figure"},"\u5305\u542bstdlib\u4ee5\u4fbf\u8bbf\u95eerand()"),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u5bf9\u4e8e\u503c\u5c5e\u6027\uff0c\u6211\u4eec\u5c06\u8f93\u5165 (1)\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(a.Z,{points:[[355,110]],imageSource:"/img/tutorials/tutorial-05/pass-random-color-to-action-4-17.webp",mdxType:"FigureWithPoints"},"\u5728\u70b9\u51fb\u6309\u94ae\u65f6\u4f20\u9012\u968f\u673a\u8272\u5f69\u503c"),(0,n.kt)("p",null,"\u73b0\u5728\uff0c\u8fd0\u884c\u6a21\u62df\u5668\u5e76\u5c1d\u8bd5\u591a\u6b21\u6309\u4e0b\u6309\u94ae\u3002 \u60a8\u5e94\u770b\u5230\u80cc\u666f\u53d8\u4e3a\u968f\u673a\u8272\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/random-color-result-initial-4-17.webp",mdxType:"Figure"},"\u70b9\u51fb\u6309\u94ae\u65f6\u5f97\u5230\u7684\u968f\u673a\u8272"),(0,n.kt)("h2",g({},{id:"using-custom-triggers-in-custom-containers"}),"\u5728\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,n.kt)("p",null,"\u6700\u540e\uff0c\u81ea\u5b9a\u4e49\u5bb9\u5668\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u96c6\uff0c\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u57fa\u4e8e\u5e94\u7528\u8fdb\u884c\u5982\u4e0b\u62d3\u5c55\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u7684\u540d\u4e3aColorEmitter\u7684\u81ea\u5b9a\u4e49\u5bb9\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u540d\u4e3a\u201ccolorChanged\u201d\u7684\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u6dfb\u52a0\u5230ColorEmitter"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u6309\u4e0b\u6309\u94ae\u65f6\u7528\u89e6\u53d1\u6761\u4ef6colorChanged\u5c06\u968f\u673a\u8272\u4f20\u9012\u7ed9\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u5c4f\u5e55\u4e2d\u8bbe\u7f6e\u4ea4\u4e92\u4ee5\u76d1\u542c\u89e6\u53d1\u6761\u4ef6colorChanged"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528ColorEmitter\u53d1\u9001\u7684\u4efb\u4f55\u8272\u5f69\u8bbe\u7f6e\u80cc\u666f\u65b9\u5757\u7684\u8272\u5f69")),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u5c1d\u8bd5\u7528\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u6765\u6307\u793a\u5e94\u7528\u4e2d\u7684\u4e00\u4e9b\u4e8b\u4ef6\u3002 \u6211\u4eec\u4e0d\u4f7f\u7528\u5c06\u968f\u673a\u8272\u4f20\u9012\u7ed9",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),"\u7684\u6309\u94ae\u4ea4\u4e92\uff0c\u800c\u662f\u5c1d\u8bd5\u8ba9\u81ea\u5b9a\u4e49\u5bb9\u5668\u5c06\u968f\u673a\u8272\u53d1\u9001\u5230\u5c4f\u5e55\uff0c\u7136\u540e\u8ba9\u5c4f\u5e55\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bb9\u5668\u4f20\u9012\u7684\u4efb\u4f55\u503c\u3002 \u8fd9\u4f1a\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5e94\u7528\u4e2d\u7684\u4e0d\u540cUI\u7ec4\u4ef6\u76f8\u4e92\u901a\u4fe1\uff0c\u4f7f\u5e94\u7528\u5177\u6709\u66f4\u5c0f\u7684\u4f53\u79ef\u548c\u66f4\u9ad8\u7684\u53ef\u590d\u7528\u6027\u3002"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bb9\u5668\u5e76\u5c06\u5176\u547d\u540d\u4e3a\u201cColorEmitter\u201d\u3002 \u63d2\u5165\u4e00\u4e2a\u6309\u94ae\u5e76\u5c06\u5176\u547d\u540d\u4e3a\u201cbutton\u201d\u3002 \u7ed3\u679c\u5e94\u7c7b\u4f3c\u4e8e\u4e0b\u56fe\uff1a"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/color-emitter-custom-container-4-17.webp",mdxType:"Figure"},"\u81ea\u5b9a\u4e49\u5bb9\u5668ColorEmitter"),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u8981\u8ba9ColorEmitter\u5728\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u53d1\u9001\u968f\u673a\u8272\u3002 \u7136\u540e\uff0c\u4efb\u4f55\u5bf9\u8c61\u90fd\u53ef\u4ee5\u51b3\u5b9a\u76d1\u542c\u6b64\u7c7b\u53d1\u9001\u5e76\u4f7f\u7528\u6b64\u8272\u5f69\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ea\u6a21\u4eff\u4e4b\u524d\u7684\u884c\u4e3a\uff0c\u4f7f\u7528\u6b64\u8272\u5f69\u8bbe\u7f6e\u80cc\u666f\u8272\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u8ba9\u81ea\u5b9a\u4e49\u5bb9\u5668\u53d1\u9001\u989c\u8272\uff0c\u9996\u5148\u9700\u8981\u521b\u5efa\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u3002 \u8f6c\u81f3\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u201c\u5c5e\u6027\u201d\u9009\u9879\u5361\uff0c\u6309\u4e0b\u201c\u89e6\u53d1\u6761\u4ef6\u201d\u7ec4\u4e2d\u7684\u201c+\u201d\u6309\u94ae (1)\u3002 \u5c06\u89e6\u53d1\u6761\u4ef6\u547d\u540d\u4e3a\u201ccolorChanged\u201d\uff0c\u8f93\u5165\u8bf4\u660e\u201c\u8272\u5f69\u53d8\u5316\u201d\uff0c\u5e76\u5c06\u7c7b\u578b\u8bbe\u7f6e\u4e3a\u201ccolortype\u201d\u3002"),(0,n.kt)(a.Z,{points:[[420,78]],imageSource:"/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container-4-17.webp",mdxType:"FigureWithPoints"},"\u5c06\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u6dfb\u52a0\u5230\u81ea\u5b9a\u4e49\u5bb9\u5668"),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u8f6c\u81f3\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u201c\u4ea4\u4e92\u201d\u9009\u9879\u5361\u5e76\u65b0\u5efa\u4e00\u4e2a\u4ea4\u4e92\u3002 \u4f7f\u7528\u89e6\u53d1\u6761\u4ef6\u201c\u70b9\u51fb\u6309\u94ae\u201d\u548c\u64cd\u4f5c\u201c\u53d1\u9001colorChanged\u201d\u3002 \u73b0\u5728\u6211\u4eec\u8981\u53d1\u9001\u968f\u673a\u8272\uff0c\u5bf9\u503c\u5c5e\u6027\u4f7f\u7528\u4e0e\u4e4b\u524d\u76f8\u540c\u7684\u4ee3\u7801\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/emitting-color-changed-4-17.webp",mdxType:"Figure"},"\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,n.kt)("p",null,"\u4f46\u662f\uff0c\u7531\u4e8e\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e2d\u672a\u81ea\u52a8\u5305\u542b",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::Color"),"\u547d\u540d\u7a7a\u95f4\uff0c\u56e0\u6b64\u6700\u521d\u5e76\u4e0d\u8d77\u4f5c\u7528\u3002 \u4e0e\u4ee5\u524d\u4e00\u6837\uff0c\u6211\u4eec\u5c06\u4e3a\u81ea\u5b9a\u4e49\u5bb9\u5668\u63d0\u4f9b\u81ea\u5df1\u7684include\u51fd\u6570\u3002 \u8f6c\u81f3\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u201c\u5c5e\u6027\u201d\u9009\u9879\u5361\uff0c\u5728\u201cIncludes\u201d\u7ec4(1)\u4e0b\u9762\u8f93\u5165\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n")),(0,n.kt)(a.Z,{points:[[420,115]],imageSource:"/img/tutorials/tutorial-05/extra-includes-4-17.webp",mdxType:"FigureWithPoints"},"\u63d0\u4f9b\u989d\u5916\u7684includes\u51fd\u6570"),(0,n.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u8981\u7528\u65b0\u5efa\u7684\u81ea\u5b9a\u4e49\u5bb9\u5668ColorEmitter\u66ff\u4ee3\u65e7\u6309\u94ae\u3002 \u9009\u62e9Screen1\u5e76\u5220\u9664\u8fd9\u91cc\u7684\u6309\u94ae\u3002 \u8fd9\u5e94\u5f53\u4f1a\u5728\u4f7f\u7528\u6b64\u6309\u94ae\u7684\u4ea4\u4e92\u4e2d\u751f\u6210\u57df\u9519\u8bef\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u5220\u9664\u6b64\u4ea4\u4e92\uff0c\u6211\u4eec\u5c06\u4e3aColorEmitter\u521b\u5efa\u65b0\u7684\u4ea4\u4e92\u3002 \u73b0\u5728\uff0c\u5728Screen1\u4e0a\u63d2\u5165ColorEmitter\u5b9e\u4f8b\uff0c\u7136\u540e\u5728Screen1\u4e0a\u65b0\u5efa\u4e00\u4e2a\u4ea4\u4e92\u3002 \u5bf9\u4e8e\u89e6\u53d1\u6761\u4ef6\uff0c\u60a8\u5e94\u5f53\u4f1a\u770b\u5230\u4e00\u4e2a\u540d\u4e3a\u201cColorEmitter colorChanged\u53d1\u751f\u201d\u7684\u9009\u9879\u3002 \u9009\u62e9\u8be5\u9009\u9879\uff0c\u5e76\u4e3a\u64cd\u4f5c\u9009\u62e9\u201c\u8c03\u7528Screen1 setBackgroundColor\u201d\u3002 \u73b0\u5728\uff0c\u6211\u4eec\u9700\u4f7f\u7528colorChanged\u53d1\u9001\u7684\u503c\uff0c\u5176\u540d\u79f0\u59cb\u7ec8\u4e3a\u201cvalue\u201d\uff08\u5982\u4e0a\u6587\u6240\u8ff0\uff09\u3002 \u56e0\u6b64\uff0c\u5728\u503c\u5c5e\u6027\u4e2d\u8f93\u5165\u201cvalue\u201d\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction-4-17.webp",mdxType:"Figure"},"\u8bbe\u7f6e\u4ea4\u4e92\u4ee5\u76d1\u6d4bcolorChanged\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,n.kt)("p",null,"\u73b0\u5728\uff0c\u8fd0\u884c\u6a21\u62df\u5668\u5e76\u518d\u6b21\u5c1d\u8bd5\u6309\u4e0b\u6309\u94ae\u3002 \u5e94\u7528\u5e94\u663e\u793a\u76f8\u540c\u884c\u4e3a\uff0c\u80cc\u666f\u53d8\u4e3a\u968f\u673a\u8272\u3002 \u73b0\u5728\uff0c\u6211\u4eec\u4e0d\u4ec5\u5728\u5c4f\u5e55\u4e0a\u5b9e\u73b0\u4e86\u6240\u6709\u529f\u80fd\uff0c\u8fd8\u6210\u529f\u5730\u5728\u5c4f\u5e55\u4e0e\u5b83\u7684\u4e00\u4e9b\u8f83\u5c0f\u7684\u53ef\u590d\u7528\u7ec4\u4ef6\uff08\u5373\u7b80\u5355\u7684ColorEmitter\uff09\u4e4b\u95f4\u5efa\u7acb\u4e86\u901a\u4fe1\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/random-color-result-final-4-17.webp",mdxType:"Figure"},"\u70b9\u51fb\u6309\u94ae\u65f6\u5f97\u5230\u7684\u968f\u673a\u8272"))}v.isMDXComponent=!0}}]);