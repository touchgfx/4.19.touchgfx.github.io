"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1402],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},24561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return N},metadata:function(){return b},toc:function(){return S}});var a=n(3905),r=n(44035),l=n(29415),i=n(37793),p=n(31217),o=n(39130),c=n(22425),s=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(u)for(var n of u(t))g.call(t,n)&&k(e,n,t[n]);return e};const N={id:"shape",title:"Shape"},v=void 0,b={unversionedId:"development/ui-development/ui-components/shapes/shape",id:"development/ui-development/ui-components/shapes/shape",title:"Shape",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/shapes/shape.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/shape",permalink:"/4.19/ko/docs/development/ui-development/ui-components/shapes/shape",tags:[],version:"current",frontMatter:{id:"shape",title:"Shape"},sidebar:"docs",previous:{title:"Circle",permalink:"/4.19/ko/docs/development/ui-development/ui-components/shapes/circle"},next:{title:"Miscellaneous",permalink:"/4.19/ko/docs/category/miscellaneous"}},y={},S=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],w={toc:S};function x(e){var t,n=e,{components:s}=n,k=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},w),k),d(t,m({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Shape\ub294 \uc0ac\uc6a9\uc790\uac00 \uc784\uc758\uc758 \uc9c0\uc810 \uc218\ub97c \uac00\uc9c0\uace0 \uc5b4\ub5a4 \ud615\uc0c1\uc774\ub4e0 \uadf8\ub9b4 \uc218 \uc788\ub294 \uc704\uc82f\uc73c\ub85c, \ud655\ub300\uc640 \ud68c\uc804 \uae30\ub2a5\ub3c4 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/shape/widget-appearance.png",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Shape"),(0,a.kt)("h2",f({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,a.kt)("p",null,"Shape\ub294 TouchGFX Designer\uc758 Shapes \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/shape/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 Shape"),(0,a.kt)("h2",f({},{id:"properties"}),"\uc18d\uc131"),(0,a.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Shape\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Image & Color")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Image")," \ub610\ub294 ",(0,a.kt)("em",{parentName:"td"},"Color"),"\ub294 Shape\uc5d0 \ud45c\uc2dc\ud560 \uc0c9\uc0c1 \ub610\ub294 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Transform")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Angle"),"\uc740 Shape\uac00 ",(0,a.kt)("em",{parentName:"td"},"\uc6d0\uc810"),"\uc744 \uc911\uc2ec\uc73c\ub85c \ud68c\uc804\ud558\ub294 \uac01\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Scale X")," \uc640",(0,a.kt)("em",{parentName:"td"},"Scale Y"),"\ub294 Shape\uac00 ",(0,a.kt)("em",{parentName:"td"},"\uc6d0\uc810"),"\uc5d0\uc11c \uac01\uac01 \uac00\ub85c \ubc29\ud5a5\uacfc \uc138\ub85c \ubc29\ud5a5\uc73c\ub85c \ud655\ub300\ub418\ub294 \uc9c0\uc810\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Origin X")," \uc640",(0,a.kt)("em",{parentName:"td"},"Origin Y"),"\ub294 \uac01 ",(0,a.kt)("em",{parentName:"td"},"\uc810"),"\ub4e4\uc774 \uc2dc\uc791\ub418\ub294 \uc704\uce58\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Points")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Points"),"\ub294 \uc6d0\ud558\ub294 \ud615\uc0c1\uc744 \uc0dd\uc131\ud558\ub294 \uc810\ub4e4\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uac01 \uc810\ub9c8\ub2e4 X \ubc0f Y \uc88c\ud45c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,a.kt)("em",{parentName:"td"},"\uc54c\ud30c")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,a.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h2",f({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,a.kt)("p",null,"Shape\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",f({},{id:"actions"}),"\uc561\uc158"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc704\uc82f\ubcc4 \uc561\uc158")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Scale Shape")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\ud615\uc0c1\uc744 \uace0\uc815\ub41c \ud06c\uae30\ub85c \ub610\ub294 \ud604\uc7ac \ud06c\uae30\uc5d0 \ube44\ub840\ud558\uc5ec \ud655\ub300\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Rotate Shape")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\ud615\uc0c1\uc744 \uace0\uc815\ub41c \uac01\ub3c4 \ub610\ub294 \ud604\uc7ac \uac01\ub3c4\uc5d0 \ube44\ub840\ud558\uc5ec \ud68c\uc804\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Resize widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,a.kt)("h3",f({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,a.kt)("p",null,"Shape\ub294 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",f({},{id:"performance"}),"\uc131\ub2a5"),(0,a.kt)("p",null,"Shape\ub294 CanvasWidget\uc774\uba70, \uc6d0\ud558\ub294 \ud615\uc0c1\uc744 \ub80c\ub354\ub9c1\ud560 \ub54c MCU\uc758 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Shape\ub294 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uae4c\ub2e4\ub85c\uc6b4 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"CanvasWidget \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",f({},{id:"examples"}),"\uc608\uc81c"),(0,a.kt)("h3",f({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,a.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c Shape\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    shape.setPosition(140, 36, 200, 200);\n    shape.setOrigin(100.000f, 100.000f);\n    shape.setScale(1.000f, 1.000f);\n    shape.setAngle(0.000f);\n    shapePainter.setColor(touchgfx::Color::getColorFromRGB(60, 180, 230));\n    shape.setPainter(shapePainter);\n    const touchgfx::AbstractShape::ShapePoint<float> shapePoints[4] = { { 0.000f, -100.000f }, { 100.000f, 0.000f }, { 0.000f, 100.000f }, { -100.000f, 0.000f } };\n    shape.setShape(shapePoints);\n\n    add(shape);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(i.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 Shape \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"shape.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",f({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,a.kt)("p",null,"\ub2e4\uc74c \ucf54\ub4dc\ub294 \ub79c\ub364 \ub370\uc774\ud130\ub85c \ucc44\uc6cc\uc9c4 \ud615\uc0c1\uc744 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc744 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1VIEW_HPP\n#define SCREEN1VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/canvas/Shape.hpp>\n#include <touchgfx/widgets/canvas/PainterRGB888.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Shape<100> shape;\n    touchgfx::PainterRGB888 shapePainter;\nprotected:\n    void fillData(int maxLength);\n};\n\n#endif // SCREEN1VIEW_HPP\n")),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    shape.setPosition(0, 0, 480, 272);\n    shape.setOrigin(0.000f, 272.000f);\n    shapePainter.setColor(touchgfx::Color::getColorFromRGB(0, 171, 223));\n    shape.setPainter(shapePainter);\n    fillData(100);\n    add(shape);\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::fillData(int maxLength)\n{\n    float highestX = 0.000f;\n    for (int i = 0; i < maxLength - 1; ++i)\n    {\n        float y = static_cast <float> (rand()) / (static_cast <float> (RAND_MAX/272));\n        float x = highestX + static_cast <float> (rand()) /( static_cast <float> (RAND_MAX/((highestX + 10.000f)-highestX)));\n        highestX = x;\n        shape.setCorner(i, CWRUtil::toQ5<float>(x), CWRUtil::toQ5<float>(-y));\n    }\n    shape.setCorner(maxLength - 1, CWRUtil::toQ5<float>(highestX), CWRUtil::toQ5<float>(0));\n    shape.updateAbstractShapeCache();\n}\n")),(0,a.kt)("h2",f({},{id:"api-reference"}),"API \ucc38\uc870"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_shape",mdxType:"Link"},"Shape \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}x.isMDXComponent=!0}}]);