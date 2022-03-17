"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3182],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=i},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return l},Z:function(){return i}});var n=r(11368),a=r(35096);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=l();return r(e,t)}},26074:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return b},metadata:function(){return g},toc:function(){return v},default:function(){return k}});var n=r(3905),a=r(44035),l=r(93054),i=r(22425),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&f(e,r,t[r]);return e};const h={id:"05-display-external",title:"5. Display with framebuffer in external RAM",sidebar_label:"5. Display with framebuffer in external RAM"},b=void 0,g={unversionedId:"development/board-bring-up/how-to/05-display-external",id:"development/board-bring-up/how-to/05-display-external",isDocsHomePage:!1,title:"5. Display with framebuffer in external RAM",description:"\u52a8\u673a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/05-display-external.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/05-display-external",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/05-display-external",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-display-external",title:"5. Display with framebuffer in external RAM",sidebar_label:"5. Display with framebuffer in external RAM"},sidebar:"docs",previous:{title:"4. External RAM",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/04-enable-external-ram"},next:{title:"6. \u5916\u90e8\u53ef\u5bfb\u5740\u95ea\u5b58",permalink:"/4.19/zh-CN/docs/development/board-bring-up/how-to/06-flash-external-addressable"}},v=[{value:"\u52a8\u673a",id:"motivation",children:[],level:2},{value:"\u76ee\u6807",id:"goal",children:[{value:"\u9a8c\u8bc1",id:"verification",children:[],level:3}],level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",children:[],level:2},{value:"\u6267\u884c",id:"do",children:[{value:"LTDC\u5c42\u914d\u7f6e",id:"ltdc-layer-configuration",children:[],level:3}],level:2}],y={toc:v};function k(e){var t,r=e,{components:o}=r,f=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),f),c(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",m({},{id:"motivation"}),"\u52a8\u673a"),(0,n.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\uff0c\u6211\u4eec\u5c06\u5e27\u7f13\u5b58\u4ece\u5185\u90e8RAM\u79fb\u81f3\u5916\u90e8RAM\uff0c\u5e76\u786e\u4fdd\u5e27\u7f13\u5b58\u5185\u5bb9\u4ecd\u53ef\u4ee5\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u3002"),(0,n.kt)(l.Z,{mdxType:"Note"},"Skip this step if external RAM is not relevant for your board bring up."),(0,n.kt)("p",null,"\u7531\u4e8e\u663e\u793a\u63a7\u5236\u5668\u5bf9\u4f20\u8f93\u901f\u5ea6\u6709\u4e00\u5b9a\u8981\u6c42\uff0c\u56e0\u6b64\u8be5\u6b65\u9aa4\u5c06\u57fa\u4e8e\u5916\u90e8RAM\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\u3002 \u8be5\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u53d1\u751f\u9519\u8bef\u3002 \u5e38\u89c1\u9519\u8bef\u4e3a\u5916\u90e8RAM\u7684\u5e26\u5bbd\u4e0d\u591f\u9ad8\u6240\u9020\u6210\u7684LTDC\u4e0b\u6ea2\uff0c\u6216RAM\u914d\u7f6e\u4e0d\u6b63\u786e\u548c\u201c\u8d85\u89c4\u683c\u201d\u8fd0\u884c\u800c\u5bfc\u81f4\u7684\u56fe\u50cf\u9519\u8bef\u3002"),(0,n.kt)("h2",m({},{id:"goal"}),"\u76ee\u6807"),(0,n.kt)("p",null,"\u6b64\u6b65\u9aa4\u628a\u4f7f\u7528\u5185\u90e8RAM\u4f5c\u4e3a\u5e27\u7f13\u5b58\uff0c\u6539\u4e3a\u4f7f\u7528\u5916\u90e8RAM\u505a\u5e27\u7f13\u5b58\u3002"),(0,n.kt)("h3",m({},{id:"verification"}),"\u9a8c\u8bc1"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u8fd9\u90e8\u5206\u7684\u9a8c\u8bc1\u70b9\u3002 \u8fd9\u4e9b\u9a8c\u8bc1\u70b9\u4e0e\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5185\u90e8RAM\u4e2d\u65f6\u7684\u9a8c\u8bc1\u70b9\u76f8\u4f3c\uff0c\u4f46\u5e94\u518d\u6b21\u68c0\u67e5\uff0c\u56e0\u4e3a\u5916\u90e8\u5b58\u50a8\u5668\u7684\u8bbf\u95ee\u901f\u5ea6\u53ef\u80fd\u4f1a\u5f71\u54cd\u4ece\u5e27\u7f13\u5b58\u5411\u663e\u793a\u5c4f\u7684\u4f20\u8f93\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u5e27\u7f13\u5b58"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u63a7\u5236\u5668\u6216SPI\u5df2\u914d\u7f6e\u5e76\u6b63\u5728\u8fd0\u884c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u66f4\u65b0\u7684\u5e27\u7f13\u5b58"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6211\u4eec\u77e5\u9053\u5982\u4f55\u91cd\u590d\u53d1\u9001\u5e27\u7f13\u5b58\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5e27\u7387\u6b63\u786e"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u914d\u7f6e\u50cf\u7d20\u65f6\u949f\u548c\u540c\u6b65\u6cbf\uff0c\u4ee5\u83b7\u5f97\u6240\u9700\u5e27\u7387")))),(0,n.kt)("h2",m({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8RAM\u4e2d\u5e27\u7f13\u5b58\u5730\u5740")),(0,n.kt)("h2",m({},{id:"do"}),"\u6267\u884c"),(0,n.kt)("p",null,"\u6211\u4eec\u6709\u4e24\u4e2a\u4efb\u52a1\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06\u5e27\u7f13\u5b58\u653e\u5728\u5916\u90e8RAM"),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u663e\u793a\u63a7\u5236\u5668\uff0c\u4ee5\u4ece\u5916\u90e8RAM\u8bfb\u53d6\u6570\u636e")),(0,n.kt)("p",null,"\u5f53\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5916\u90e8RAM\u4e2d\u65f6\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u4e0d\u4e3a\u5176\u5206\u914d\u6570\u7ec4\u3002 \u53ea\u9700\u58f0\u660e\u4e00\u4e2a\u6307\u5411\u6b63\u786e\u5730\u5740\u7684\u6307\u9488\u5373\u53ef\u3002 \u7136\u540e\u624b\u52a8\u9009\u62e9\u5916\u90e8RAM\u5730\u5740\u3002 \u8be5\u5730\u5740\u53ef\u4f4d\u4e8e\u5916\u90e8RAM\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u4f46\u901a\u5e38\u4f4d\u4e8eRAM\u7684\u5f00\u5934:"),(0,n.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint16_t* framebuffer = (uint16_t*)0xC0000000;  //16 bpp framebuffer\n")),(0,n.kt)("p",null,"You can reuse the small test programs you created in the steps in ",(0,n.kt)("a",m({parentName:"p"},{href:"03-display-internal"}),"Display Internal"),"."),(0,n.kt)("h3",m({},{id:"ltdc-layer-configuration"}),"LTDC\u5c42\u914d\u7f6e"),(0,n.kt)("p",null,"\u8bf7\u8bb0\u4f4f\u66f4\u6539LTDC\u56fe\u5c42\u7684\u914d\u7f6e\u3002 \u7531\u4e8e\u6211\u4eec\u73b0\u5728\u6709\u4e86\u5e27\u7f13\u5b58\u7684\u7279\u5b9a\u5730\u5740\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7CubeMx\u5c06\u8be5\u5730\u5740\u8fdb\u884c\u8bbe\u7f6e(\u5373\u5e27\u7f13\u5b58\u8d77\u59cb\u5730\u5740):"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u914d\u7f6eLTDC\u5c42\u53c2\u6570"),(0,n.kt)("p",null,"\u8bf7\u8bb0\u4f4f\u4ece\u4f60\u7684\u7a0b\u5e8f\u4e2d\u5220\u9664\u6b64\u884c\u548c\u5e27\u7f13\u5b58\u6570\u7ec4\uff1a"),(0,n.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,n.kt)("p",null,"\u5982\u679c\u5728",(0,n.kt)("a",m({parentName:"p"},{href:"03-display-internal"}),"\u6b65\u9aa403"),"\u5c06LTDC\u56fe\u5c42\u5927\u5c0f\u8bbe\u7f6e\u4e3a\u4ec5\u66f4\u65b0\u90e8\u5206\u663e\u793a(\u7531\u4e8e\u5185\u90e8RAM\u7684\u6570\u91cf) \uff0c\u5219\u73b0\u5728\u9700\u8981\u91cd\u505a\u3002 \u91cd\u65b0\u914d\u7f6eLTDC\u56fe\u5c42\u53c2\u6570\uff0c\u4ee5\u4fbf\u652f\u6301\u6574\u4e2a\u663e\u793a\u5c4f\u3002"))}k.isMDXComponent=!0}}]);