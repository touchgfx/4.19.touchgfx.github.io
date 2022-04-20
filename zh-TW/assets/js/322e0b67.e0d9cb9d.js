"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7172],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,g=d["".concat(p,".").concat(s)]||d[s]||u[s]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},37451:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return b},default:function(){return B},frontMatter:function(){return N},metadata:function(){return v},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(29415),o=n(37793),i=n(31217),p=n(39130),c=n(22425),m=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&k(e,n,t[n]);return e};const N={id:"flex-button",title:"\u9748\u6d3b\u6309\u9215"},b=void 0,v={unversionedId:"development/ui-development/ui-components/buttons/flex-button",id:"development/ui-development/ui-components/buttons/flex-button",title:"\u9748\u6d3b\u6309\u9215",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/buttons/flex-button.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/flex-button",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/buttons/flex-button",tags:[],version:"current",frontMatter:{id:"flex-button",title:"\u9748\u6d3b\u6309\u9215"},sidebar:"docs",previous:{title:"\u91cd\u8907\u6309\u9215",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/buttons/repeat-button"},next:{title:"Images",permalink:"/4.19/zh-TW/docs/category/images"}},x={},y=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:4},{value:"API\u53c3\u8003",id:"api-reference",level:2}],w={toc:y};function B(e){var t,n=e,{components:m}=n,k=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},w),k),u(t,d({components:m,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u9748\u6d3b\u6309\u9215(Flex Button)\u662f\u4e00\u7a2e\u611f\u61c9\u89f8\u63a7\u4e8b\u4ef6\u7684\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u5728\u9748\u6d3b\u6309\u9215\u88ab\u89f8\u767c\u6642\u767c\u9001callback\u3002 \u9748\u6d3b\u6309\u9215\u80fd\u5920\u9069\u61c9\u4f7f\u7528\u8005\u9700\u6c42\u3002 \u5b83\u53ef\u4ee5\u7d50\u5408\u5176\u4ed6\u6309\u9215\u985e\u578b\u7684\u884c\u70ba\u548c\u5916\u89c0\uff0c\u4f46\u662f\u4f5c\u70ba\u4ee3\u50f9\uff0c\u5b83\u4f54\u7528\u7684RAM\u8981\u591a\u4e00\u4e9b\u3002 \u4f46\u662f\uff0c\u591a\u51fa\u4f86\u7684\u91cf\u5728\u5927\u591a\u6578\u60c5\u6cc1\u4e0b\u5fae\u4e0d\u8db3\u9053\u3002 \u9748\u6d3b\u6309\u9215\u53ef\u5305\u542b\u6700\u591a4\u500b\u8996\u89ba\u5143\u7d20\uff1aBoxWithBorder\u3001Icon\u3001Text\u548cImage\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/flex-button/widget-appearance.png",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u9748\u6d3b\u6309\u9215\uff08\u7d50\u5408\u4e86BoxWithBorder\u3001Icon\u548cText\u5143\u7d20\uff09"),(0,r.kt)("h2",f({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u9748\u6d3b\u6309\u9215\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u7684\u201cButtons\u201d\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u627e\u5230\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/flex-button/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u9748\u6d3b\u6309\u9215"),(0,r.kt)("h2",f({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u9748\u6d3b\u6309\u9215\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Trigger")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Click")," , ",(0,r.kt)("em",{parentName:"td"},"Touch")," , ",(0,r.kt)("em",{parentName:"td"},"Toggle")," and ",(0,r.kt)("em",{parentName:"td"},"Repeat")," specify which action triggers the button callback.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Visual Elements")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Image")," , ",(0,r.kt)("em",{parentName:"td"},"Box With Border")," , ",(0,r.kt)("em",{parentName:"td"},"Text")," and ",(0,r.kt)("em",{parentName:"td"},"Icon")," specify which elements make up the widgets visual appearance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",f({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u5e7e\u7bc0\u5c07\u63cf\u8ff0\u9748\u6d3b\u6309\u9215\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",f({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",f({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Trigger")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Button is clicked")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u6309\u9215\u88ab\u9ede\u64ca\u3002")))),(0,r.kt)("h2",f({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u9748\u6d3b\u6309\u9215\u53ef\u80fd\u5305\u542b\u6700\u591a\u5169\u500b\u65b9\u584a\u3001\u56db\u5e45\u5716\u50cf\u548c\u4e00\u6bb5\u6587\u5b57\uff0c\u4e26\u4f9d\u8cf4\u4e8e\u5716\u50cf\u548c\u6587\u5b57\u7e6a\u88fd\u3002 \u6587\u5b57\u7e6a\u88fd\u8207\u5e38\u898f\u7684\u5716\u50cf\u7e6a\u88fd\u5341\u5206\u76f8\u4f3c\uff08\u5118\u7ba1\u7531\u65bc\u6587\u5b57\u5b57\u5143\u7684\u6027\u8cea\uff0c\u5b58\u5728\u5927\u91cf\u900f\u660e\u5ea6\u6df7\u5408\uff09\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u591a\u6578\u5e73\u81fa\u4e0a\uff0c\u9748\u6d3b\u6309\u9215\u90fd\u88ab\u8996\u70ba\u5feb\u901f\u57f7\u884c\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,r.kt)("h2",f({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u9748\u6d3b\u6309\u9215\u3002 \u6b64\u7a0b\u5f0f\u78bc\u5c0d\u61c9\u65bc",(0,r.kt)("a",f({parentName:"p"},{href:"flex-button"}),"\u672c\u7bc0\u958b\u982d"),"\u6240\u793a\u7684\u9748\u6d3b\u6309\u9215\uff0c\u7d50\u5408\u4e86BoxWithBorder\u3001Icon\u548cText\u5143\u7d20\u7684\u884c\u70ba\u548c\u5916\u89c0\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    buttonCallback(this, &Screen1ViewBase::buttonCallbackHandler)\n{\n                            // Box with Border behavior and appearance\n    flexButtonName.setBoxWithBorderPosition(0, 0, 176, 74);\n    flexButtonName.setBorderSize(5);\n    flexButtonName.setBoxWithBorderColors(touchgfx::Color::getColorFromRGB(0, 102, 153), touchgfx::Color::getColorFromRGB(0, 153, 204), touchgfx::Color::getColorFromRGB(0, 51, 102), touchgfx::Color::getColorFromRGB(51, 102, 153));\n                            // Text behavior and appearance\n    flexButtonName.setText(TypedText(T_SINGLEUSEID1));\n    flexButtonName.setTextPosition(30, 12, 176, 74);\n    flexButtonName.setTextColors(touchgfx::Color::getColorFromRGB(10, 10, 10), touchgfx::Color::getColorFromRGB(10, 10, 10));\n                            // Icon behavior and appearance\n    flexButtonName.setIconBitmaps(Bitmap(BITMAP_BLUE_ICONS_ALERT_32_ID), Bitmap(BITMAP_BLUE_ICONS_ALERT_32_ID));\n    flexButtonName.setIconXY(20, 17);\n                            // Widget\n    flexButtonName.setPosition(152, 99, 176, 74);\n    flexButtonName.setAction(flexButtonCallback);\n\n    add(flexButtonName);\n}\n\nvoid Screen1ViewBase::flexButtonCallbackHandler(const touchgfx::AbstractButtonContainer& src)\n{\n    if (&src == &flexButtonName)\n    {\n        //InteractionName\n        //When flexButtonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528FlexButton\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u4fee\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8a18\u5f97\u547c\u53eb ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"flexButtonName.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h4",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u70ba\u4e86\u9032\u4e00\u6b65\u63a2\u7d22\u9748\u6d3b\u6309\u9215\uff0c\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u7528\u4ee5\u4e0bUI\u7bc4\u672c\u65b0\u5efa\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/flex-button-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u9748\u6d3b\u6309\u9215UI\u7bc4\u672c"),(0,r.kt)("h2",f({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_abstract_button",mdxType:"Link"},"AbstractButton\u985e\u7684API\u53c3\u8003"))))}B.isMDXComponent=!0}}]);