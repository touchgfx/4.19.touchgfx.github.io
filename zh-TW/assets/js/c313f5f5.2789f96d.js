"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1272],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},18046:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return N},default:function(){return P},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var r=n(3905),a=n(44035),i=n(29415),l=n(37793),o=n(31217),s=n(39130),p=n(22425),d=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&k(e,n,t[n]);return e};const v={id:"line-progress",title:"\u7dda\u578b\u9032\u5ea6\u689d"},N=void 0,b={unversionedId:"development/ui-development/ui-components/progress-indicators/line-progress",id:"development/ui-development/ui-components/progress-indicators/line-progress",title:"\u7dda\u578b\u9032\u5ea6\u689d",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/line-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/line-progress",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/progress-indicators/line-progress",tags:[],version:"current",frontMatter:{id:"line-progress",title:"\u7dda\u578b\u9032\u5ea6\u689d"},sidebar:"docs",previous:{title:"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/progress-indicators/text-progress"},next:{title:"\u5713\u5f62\u9032\u5ea6\u689d",permalink:"/4.19/zh-TW/docs/development/ui-development/ui-components/progress-indicators/circle-progress"}},w={},y=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],x={toc:y};function P(e){var t,n=e,{components:d}=n,k=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},x),k),c(t,m({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u7dda\u578b\u9032\u5ea6\u689d(Line Progress)\u986f\u793a\u7576\u524d\u9032\u5ea6\uff0c\u65b9\u6cd5\u662f\u5c07",(0,r.kt)("a",f({parentName:"p"},{href:"../shapes/line"}),"\u7dda\u689d"),"\u7f6e\u65bc\u80cc\u666f",(0,r.kt)("a",f({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u4e0a\u65b9\u4f5c\u70ba\u9032\u5ea6\u6307\u793a\u5668\u3002 \u8a72\u7dda\u689d\u65e2\u4e0d\u9700\u8981\u6c34\u5e73\u4e5f\u4e0d\u9700\u8981\u5782\u76f4\uff0c\u53ef\u4ee5\u5f9e\u4efb\u610f\u5ea7\u6a19\u958b\u59cb\uff0c\u5728\u4efb\u610f\u5ea7\u6a19\u7d50\u675f\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/line-progress/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u7dda\u578b\u9032\u5ea6\u689d"),(0,r.kt)("h2",f({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u7dda\u578b\u9032\u5ea6\u689d\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Progress Indicators\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/line-progress/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u7dda\u578b\u9032\u5ea6\u689d"),(0,r.kt)("h2",f({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u7dda\u578b\u9032\u5ea6\u689d\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The size of a Line Progress is determined by the size of the selected background image."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"**  **"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image & Color")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Background")," specifies background image.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Image")," specifies which image to use as fill for the line.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The image selected will be placed in top left corner of the widget."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Color")," specifies which color to use as fill for the line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Values")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Range Min")," and ",(0,r.kt)("em",{parentName:"td"},"Range Max")," specify the minimum and maximum integer values of the indicator.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Initial")," specifies the initial value of the progress indicator.",(0,r.kt)("em",{parentName:"td"},"Steps Total")," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Steps Min")," specifies the minimum steps the progress indicator shows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Start Position X")," and ",(0,r.kt)("em",{parentName:"td"},"Start Position Y")," specify the coordinate where the line should start.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"End Position X")," and ",(0,r.kt)("em",{parentName:"td"},"End Position Y"),"specify the coordinate where the line should end.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Line Width")," specifies the width of the line.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Cap Style")," specifies line ending style.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget. ",(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",f({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u7dda\u578b\u9032\u5ea6\u689d\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",f({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set value")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5c07\u9032\u5ea6\u6307\u793a\u5668\u7684\u503c\u8a2d\u70ba\u671f\u671b\u503c")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",f({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u7dda\u578b\u9032\u5ea6\u689d\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",f({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u7dda\u6027\u9032\u5ea6\u689d\u5305\u542b\u4e00\u5e45",(0,r.kt)("a",f({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u548c\u4e00\u6839",(0,r.kt)("a",f({parentName:"p"},{href:"../shapes/line"}),"\u7dda\u689d"),"\u3002 \u7dda\u6027\u9032\u5ea6\u689d\u662f\u4e00\u500bCanvasWidget\uff0c\u9ad8\u5ea6\u4f9d\u8cf4\u65bcMCU\u9032\u884c\u6e32\u67d3\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u7dda\u6027\u9032\u5ea6\u689d\u8996\u70ba\u6027\u80fd\u8981\u6c42\u9ad8\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u8a73\u7d30\u77ad\u89e3CanvasWidget\u7e6a\u88fd\u6027\u80fd\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"UI \u5143\u4ef6\u6027\u80fd\u6982\u8ff0"),"\u3002"),(0,r.kt)("h2",f({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u5275\u5efa\u7dda\u6027\u9032\u5ea6\u689d\u7684\u3002"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    lineProgress.setXY(45, 71);\n    lineProgress.setProgressIndicatorPosition(0, 0, 391, 130);\n    lineProgress.setRange(0, 100);\n    lineProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_LARGE_PROGRESS_INDICATOR_BG_ROUND_DEGREES_ID));\n    lineProgressPainter.setColor(touchgfx::Color::getColorFromRGB(0, 151, 255));\n    lineProgress.setPainter(lineProgressPainter);\n    lineProgress.setStart(17, 17);\n    lineProgress.setEnd(374, 113);\n    lineProgress.setLineWidth(30);\n    lineProgress.setLineEndingStyle(touchgfx::Line::ROUND_CAP_ENDING);\n    lineProgress.setValue(60);\n\n    add(lineProgress);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},(0,r.kt)("li",null,"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528LineProgress\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"lineProgress.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002")),(0,r.kt)("h3",f({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u7bc4\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5be6\u73fe",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u51fd\u6578\u4ee5\u985e\u6bd4\u9032\u5ea6\u3002 \u904b\u884c\u9019\u6bb5\u7a0b\u5f0f\u78bc\u5c07\u5275\u5efa",(0,r.kt)("a",f({parentName:"p"},{href:"line-progress"}),"\u672c\u6587\u958b\u982d\u6240\u793a\u7684\u61c9\u7528"),"\u3002"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = lineProgress.getValue();\n    int16_t max;\n    int16_t min;\n    lineProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    lineProgress.setValue(nextValue);\n}\n")),(0,r.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u7dda\u6027\u9032\u5ea6\u689d\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u4e4b\u4e00\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u9032\u5ea6\u6307\u793a\u5668UI\u7bc4\u672c"),(0,r.kt)("h2",f({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_line_progress",mdxType:"Link"},"LineProgress\u985e\u7684API\u53c3\u8003"))))}P.isMDXComponent=!0}}]);