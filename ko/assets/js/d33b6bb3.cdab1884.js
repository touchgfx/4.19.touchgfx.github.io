"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5394],{3905:function(t,a,n){n.d(a,{Zo:function(){return u},kt:function(){return s}});var e=n(67294);function i(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function o(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function l(t,a){if(null==t)return{};var n,e,i=function(t,a){if(null==t)return{};var n,e,i={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(i[n]=t[n]);return i}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var m=e.createContext({}),p=function(t){var a=e.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):o(o({},a),t)),n},u=function(t){var a=p(t.components);return e.createElement(m.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},d=e.forwardRef((function(t,a){var n=t.components,i=t.mdxType,r=t.originalType,m=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(n),s=i,k=d["".concat(m,".").concat(s)]||d[s]||c[s]||r;return n?e.createElement(k,o(o({ref:a},u),{},{components:n})):e.createElement(k,o({ref:a},u))}));function s(t,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return e.createElement.apply(null,o)}return e.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,a,n){var e=n(67294);class i extends e.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return e.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=i},155:function(t,a,n){n.r(a),n.d(a,{assets:function(){return b},contentTitle:function(){return _},default:function(){return v},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return f}});var e=n(3905),i=n(39130),r=n(43861),o=Object.defineProperty,l=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(t,a,n)=>a in t?o(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,s=(t,a)=>{for(var n in a||(a={}))u.call(a,n)&&d(t,n,a[n]);if(p)for(var n of p(a))c.call(a,n)&&d(t,n,a[n]);return t};const k={title:"AnimationSetting"},_=void 0,g={unversionedId:"api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting",id:"api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting",title:"AnimationSetting",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting",permalink:"/4.19/ko/docs/api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting",tags:[],version:"current",frontMatter:{title:"AnimationSetting"},sidebar:"docs",previous:{title:"AnimatedImageButtonStyle",permalink:"/4.19/ko/docs/api/classes/classtouchgfx_1_1_animated_image_button_style"},next:{title:"AnimationTextureMapper",permalink:"/4.19/ko/docs/api/classes/classtouchgfx_1_1_animation_texture_mapper"}},b={},f=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"animationActive",id:"animationactive",level:3},{value:"animationDelay",id:"animationdelay",level:3},{value:"animationDuration",id:"animationduration",level:3},{value:"animationEnd",id:"animationend",level:3},{value:"animationProgressionEquation",id:"animationprogressionequation",level:3},{value:"animationStart",id:"animationstart",level:3}],h={toc:f};function v(t){var a,n=t,{components:o}=n,d=((t,a)=>{var n={};for(var e in t)u.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&p)for(var e of p(t))a.indexOf(e)<0&&c.call(t,e)&&(n[e]=t[e]);return n})(n,["components"]);return(0,e.kt)("wrapper",(a=s(s({},h),d),l(a,m({components:o,mdxType:"MDXLayout"}))),(0,e.kt)("p",null,"Information about how a specific animation parameter should be animated. "),(0,e.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,e.kt)("div",{class:"function-table",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",s({parentName:"tr"},{align:"right"})),(0,e.kt)("th",s({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"bool"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(i.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationactive",mdxType:"Link"},"animationActive")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"Should this animation be performed?")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"uint16_t"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(i.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationdelay",mdxType:"Link"},"animationDelay")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"A delay before the actual animation start. Expressed in ticks.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"uint16_t"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(i.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationduration",mdxType:"Link"},"animationDuration")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"The complete duration of the animation. Expressed in ticks.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(i.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationend",mdxType:"Link"},"animationEnd")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"The animation end value.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),(0,e.kt)("a",s({parentName:"td"},{href:"../namespacetouchgfx#typedef-easingequation"}),"EasingEquation")),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(i.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationprogressionequation",mdxType:"Link"},"animationProgressionEquation")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"EasingEquation expressing the development of the value during the animation.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,e.kt)("td",s({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(i.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationstart",mdxType:"Link"},"animationStart")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null}),"The animation start value.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",s({parentName:"tr"},{align:"right"})),(0,e.kt)("td",s({parentName:"tr"},{align:null})))))),(0,e.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,e.kt)(r.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationactive",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"animationactive"}),"animationActive"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,"bool animationActive ")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,"Should this animation be performed? "))),(0,e.kt)(r.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationdelay",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"animationdelay"}),"animationDelay"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,"uint16_t animationDelay ")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,"A delay before the actual animation start. Expressed in ticks. "))),(0,e.kt)(r.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationduration",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"animationduration"}),"animationDuration"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,"uint16_t animationDuration ")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,"The complete duration of the animation. Expressed in ticks. "))),(0,e.kt)(r.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationend",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"animationend"}),"animationEnd"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,"float animationEnd ")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,"The animation end value. "))),(0,e.kt)(r.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationprogressionequation",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"animationprogressionequation"}),"animationProgressionEquation"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("a",s({parentName:"p"},{href:"../namespacetouchgfx#typedef-easingequation"}),"EasingEquation")," animationProgressionEquation ")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,"EasingEquation expressing the development of the value during the animation. "))),(0,e.kt)(r.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationstart",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",s({},{id:"animationstart"}),"animationStart"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,"float animationStart ")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,"The animation start value. "))))}v.isMDXComponent=!0}}]);