"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[218],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(o),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},29415:function(e,t,o){var n=o(67294),r=o(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,o){var n=o(67294);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},65407:function(e,t,o){var n=o(67294),r=o(25026);t.Z=function(e){var t,o;const a=(0,r.Z)(e.url),i=null!=(t=e.width)?t:"100%",l=null!=(o=e.height)?o:"100%";return n.createElement("div",{className:"loop-video"},n.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:i,height:l},n.createElement("source",{src:a,type:"video/mp4"}),"Your browser does not support the video tag."),n.createElement("p",null,e.children))}},1269:function(e,t,o){o.r(t),o.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return x},frontMatter:function(){return f},metadata:function(){return w},toc:function(){return b}});var n=o(3905),r=o(29415),a=o(39130),i=o(65407),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,d=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))u.call(t,o)&&d(e,o,t[o]);if(p)for(var o of p(t))h.call(t,o)&&d(e,o,t[o]);return e};const f={id:"examples",title:"Examples and Board Specific Demos"},g=void 0,w={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",title:"Examples and Board Specific Demos",description:"",source:"@site/docs/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.19/docs/development/ui-development/working-with-touchgfx/examples",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples and Board Specific Demos"},sidebar:"docs",previous:{title:"Debugging",permalink:"/4.19/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"Keyboard Shortcuts",permalink:"/4.19/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},v={},b=[{value:"Examples and Demos",id:"ui-templates",level:2},{value:"Board Specific Demos",id:"online-applications",level:2}],y={toc:b};function x(e){var t,o=e,{components:l}=o,d=((e,t)=>{var o={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&h.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),d),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"To help further explore the possibilities and features of TouchGFX, multiple premade Examples and Demos are made available to the user. These Examples and Demos can be accessed through the ",(0,n.kt)("a",m({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Lobby")," of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples and Demos are combined with ",(0,n.kt)("a",m({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX Board Setup")," to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function."),(0,n.kt)("p",null,"Some Examples and Demos focus on single features while others implement several different functionalities found in TouchGFX. Demos are divided into two different types: ",(0,n.kt)("a",m({parentName:"p"},{href:"#ui-templates"}),"Demos")," and ",(0,n.kt)("a",m({parentName:"p"},{href:"#online-applications"}),"Board Specific Demos"),"."),(0,n.kt)("h2",m({},{id:"ui-templates"}),"Examples and Demos"),(0,n.kt)("p",null,"Examples are generally smaller, more self-contained applications that mostly focus on specific features such as different widgets. Examples can run on any STM32 evaluation kit and the PC simulator, but for the best experience it is encouraged to create projects where the resolution of the Example fits the resolution of your board. Some Examples are also built with specific color depths in mind, which means they might not display as well on lower color depth displays."),(0,n.kt)("p",null,"The Demos include several applications made by the TouchGFX team which showcase more features with higher quality UI design. These can be a great place to start to get a feeling for what TouchGFX is capable of."),(0,n.kt)("p",null,'To create an application using an Example or Demo, start by clicking the "Examples" or "Demos" in the top left of the lobby to see the available applications and click on whichever application you want. Optionally, select another resolution and color depth in the drop downs. If you wish to run on a supported hardware click on the "Select Hardware" in the top of the window, choose whichever board you wish and press "Select". Finally, press \'Create\' to create an application from the selected TouchGFX Board Setup and Example or Demo. Press either \'Run Simulator\' or \'Run Target\' to see the application running.'),(0,n.kt)("p",null,"An animation of these steps can be seen below:"),(0,n.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"Creating a project using an Example"),(0,n.kt)("h2",m({},{id:"online-applications"}),"Board Specific Demos"),(0,n.kt)("p",null,"Board Specific Demos are out-of-the-box applications for specific hardware solutions and it is therefore not possible to run these on any other STM32 evaluation kit than the one it was created for (aside from the PC simulator). These applications are generally a lot larger and explore multiple different features of the TouchGFX framework and can also include sample integration with the hardware."),(0,n.kt)("p",null,"To create an application using a Board Specific Demo, first access these by clicking the 'Demos' tab in the top left of the lobby. Click the \"Board Specific Demo\" label in the top of the window to show what applications are available. Click the application you want and finish by pressing 'Create'. Either press 'Run Simulator' or 'Run Target' to see the application running."),(0,n.kt)("p",null,"An animation of these steps can be seen below:"),(0,n.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Creating a project using a Board Specific Demo"),(0,n.kt)(r.Z,{mdxType:"FurtherReading"},"To read more about how to create applications using Examples or Demos, see the ",(0,n.kt)(a.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Lobby section"),"."))}x.isMDXComponent=!0}}]);