"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1604],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,k=s["".concat(u,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},29415:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},31217:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=l},29036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return M},contentTitle:function(){return T},default:function(){return b},frontMatter:function(){return y},metadata:function(){return I},toc:function(){return x}});var r=n(3905),l=n(39130),a=n(29415),o=n(67294);class i extends o.Component{render(){return o.createElement("i",null,this.props.children)}}var u=i,p=n(31217),d=n(22425),s=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(k)for(var n of k(t))h.call(t,n)&&g(e,n,t[n]);return e};const y={id:"backend-communication",title:"\u540e\u7aef\u901a\u4fe1"},T=void 0,I={unversionedId:"development/ui-development/touchgfx-engine-features/backend-communication",id:"development/ui-development/touchgfx-engine-features/backend-communication",title:"\u540e\u7aef\u901a\u4fe1",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/backend-communication",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/backend-communication",draft:!1,tags:[],version:"current",frontMatter:{id:"backend-communication",title:"\u540e\u7aef\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u4e8c\u8fdb\u5236\u7ffb\u8bd1",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"},next:{title:"Mixins",permalink:"/4.19/zh-CN/docs/development/ui-development/touchgfx-engine-features/mixins"}},M={},x=[{value:"Model\u7c7b",id:"the-model-class",level:2},{value:"\u7cfb\u7edf\u63a5\u53e3",id:"system-interfacing",level:2},{value:"\u4eceGUI\u4efb\u52a1\u91c7\u6837",id:"sampling-from-gui-task",level:3},{value:"\u4ece\u5176\u4ed6\u4efb\u52a1\u91c7\u6837",id:"sampling-from-secondary-task",level:3},{value:"\u5411UI\u4f20\u8f93\u6570\u636e",id:"propagating-data-to-ui",level:2},{value:"UI\u5411\u5468\u56f4\u7cfb\u7edf\u53d1\u9001\u6570\u636e",id:"transmitting-data-from-ui-to-surrounding-system",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u6765\u81eaGUI\u4efb\u52a1",id:"from-gui-task",level:3},{value:"\u6765\u81ea\u5176\u4ed6\u4efb\u52a1",id:"from-other-task",level:3},{value:"\u6765\u81ea\u591a\u4e2a\u4efb\u52a1",id:"from-multiple-tasks",level:3},{value:"\u6765\u81ea\u4efb\u52a1\u548c\u5916\u90e8\u4e2d\u65ad",id:"from-task-and-external-interrupt-line",level:3}],C={toc:x};function b(e){var t,n=e,{components:o}=n,i=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},C),i),c(t,m({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u5927\u591a\u6570\u5e94\u7528\u4e2d\uff0cUI\u9700\u4ee5\u67d0\u79cd\u65b9\u5f0f\u8fde\u63a5\u5230\u7cfb\u7edf\u7684\u5176\u4f59\u90e8\u5206\uff0c\u5e76\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\u3002 \u5b83\u53ef\u80fd\u4f1a\u4e0e\u786c\u4ef6\u5916\u8bbe\uff08\u4f20\u611f\u5668\u6570\u636e\u3001\u6a21\u6570\u8f6c\u6362\u548c\u4e32\u884c\u901a\u4fe1\u7b49\uff09\u6216\u5176\u4ed6\u8f6f\u4ef6\u6a21\u5757\u8fdb\u884c\u4ea4\u4e92\u901a\u8baf\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u63cf\u8ff0\u4e86\u5b9e\u73b0\u6b64\u7c7b\u4ea4\u4e92\u901a\u8baf\u7684\u63a8\u8350\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u6cd5\u662f\u4e00\u79cd",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-gui-task"}),"\u201c\u5feb\u800c\u4e0d\u7cbe\u201d"),"\u7684\u65b9\u6cd5\uff0c\u4e3b\u8981\u7528\u4e8e\u539f\u578b\u5f00\u53d1\uff0c\u800c",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-secondary-task"}),"\u7b2c\u4e8c\u79cd\u65b9\u6cd5"),"\u662f\u4e00\u79cd\u5728\u67b6\u6784\u4e0a\u8f83\u5b8c\u5584\u7684\u65b9\u6cd5\uff0c\u53ef\u6b63\u786e\u5730\u8fde\u63a5UI\u4e0e\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u5269\u4f59\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u6587\u672b\u5c3e\uff0c\u6211\u4eec\u4f1a\u4ecb\u7ecd\u4f7f\u7528\u4e24\u79cd\u65b9\u6cd5\u7684\u793a\u4f8b\u94fe\u63a5\u3002"),(0,r.kt)("h2",v({},{id:"the-model-class"}),"Model\u7c7b"),(0,r.kt)("p",null,"\u6240\u6709TouchGFX\u5e94\u7528\u90fd\u6709Model\u7c7b\uff0cModel\u7c7b\u9664\u4e86\u5b58\u50a8UI\u72b6\u6001\u4fe1\u606f\uff0c\u8fd8\u53ef\u7528\u4f5c\u9762\u5411\u5468\u56f4\u7cfb\u7edf\u7684\u63a5\u53e3\u3002 \u8fd9\u91cc\u5468\u56f4\u7cfb\u7edf\u6211\u4eec\u6307\u7684\u662f\u5728\u4f60\u6574\u4e2a\u7cfb\u7edf\u4e2d\u7528\u5230\u7684\u786c\u4ef6\u5916\u8bbe\u4ee5\u53ca\u9700\u8981\u8fdb\u884c\u901a\u8baf\u7684\u5176\u4ed6\u4efb\u52a1\u3002 \u901a\u5e38\u6765\u8bb2\uff0c\u5728\u5404\u81ea\u7684View\u7c7b\u4e2d\u76f4\u63a5\u8bbf\u95ee\u5176\u4ed6\u8f6f\u4ef6\u6a21\u5757\u6216\u8005\u786c\u4ef6\u5916\u8bbe\u5e76\u4e0d\u662f\u4e2a\u597d\u7684\u8bbe\u8ba1\u3002"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8eModel\u7684\u77e5\u8bc6\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)(l.Z,{to:"../software-architecture/model-view-presenter-design-pattern",mdxType:"Link"},"MVP\u6a21\u5f0f")),(0,r.kt)("p",null,"Model\u7c7b\u975e\u5e38\u9002\u5408\u653e\u7f6e\u4efb\u4f55\u6b64\u7c7b\u63a5\u53e3\u4ee3\u7801\uff0c\u539f\u56e0\u5728\u4e8e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Model\u7c7b\u6709 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"tick()")," \u51fd\u6570\uff0c\u4f1a\u5728\u6bcf\u4e00\u5e27\u81ea\u52a8\u8c03\u7528\uff0c\u5e76\u4e14\u53ef\u5b9e\u73b0\u7528\u4e8e\u67e5\u627e\u6765\u81ea\u5176\u4ed6\u5b50\u6a21\u5757\u7684\u4e8b\u4ef6\u6216\u5bf9\u4e8b\u4ef6\u4f5c\u51fa\u53cd\u5e94\u3002"),(0,r.kt)("li",{parentName:"ol"},"Model\u7c7b\u6709\u4e00\u4e2a\u6307\u5411\u5f53\u524d\u6d3b\u52a8Presenter\u7684\u6307\u9488\uff0c\u5b83\u80fd\u591f\u5c06\u4f20\u5165\u4e8b\u4ef6\u901a\u77e5\u7ed9UI\u3002")),(0,r.kt)("h2",v({},{id:"system-interfacing"}),"\u7cfb\u7edf\u63a5\u53e3"),(0,r.kt)("p",null,"\u4e0e\u5468\u56f4\u7cfb\u7edf\u4ea4\u4e92\u901a\u8baf\u7684\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a\u4e00\u79cd\u662f\u4eceGUI\u4efb\u52a1\u76f4\u63a5\u91c7\u6837\uff0c\u53e6\u4e00\u79cd\u662f\u4ece\u53e6\u5916\u4e00\u4e2a\u4efb\u52a1\u91c7\u6837\u3002"),(0,r.kt)("h3",v({},{id:"sampling-from-gui-task"}),"\u4eceGUI\u4efb\u52a1\u91c7\u6837"),(0,r.kt)("p",null,"\u4e0e\u5468\u56f4\u7cfb\u7edf\u4ea4\u4e92\u901a\u8baf\u7684\u6700\u4f73\u65b9\u5f0f\u53d6\u51b3\u4e8e\u60a8\u9700\u8981\u7684\u91c7\u6837\u9891\u7387\u3001\u91c7\u6837\u65f6\u95f4\u6d88\u8017\u548c\u65f6\u95f4\u7684\u4e25\u683c\u6027\u8981\u6c42\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8fd9\u4e9b\u65b9\u9762\u7684\u8981\u6c42\u5e76\u4e0d\u4e25\u683c\uff0c\u90a3\u4e48\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u5c31\u662f\u5728 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"Model::tick")," \u51fd\u6570\u4e2d\u76f4\u63a5\u5bf9\u5468\u56f4\u7cfb\u7edf\u8fdb\u884c\u91c7\u6837\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u91c7\u6837\u9891\u7387\u4f4e\u4e8e\u5e27\u7387\uff08\u901a\u5e38\u7ea6\u4e3a60Hz\uff09\uff0c\u60a8\u53ef\u4ee5\u5ef6\u957f\u8ba1\u6570\u5468\u671f\uff0c\u4f8b\u5982\u6bcf\u6b21\u53ea\u5728\u7b2cN\u4e2a\u8ba1\u6570\u70b9\u91c7\u6837\u3002 \u5982\u679c\u8fd9\u6837\u505a\uff0c\u90a3\u4e48\u91c7\u6837\u64cd\u4f5c\u5fc5\u987b\u7a0d\u5fae\u5feb\u4e00\u4e9b\uff08\u901a\u5e38\u4e3a1ms\u6216\u66f4\u77ed\uff09\uff0c\u5426\u5219\u4f1a\u5f71\u54cd\u5e27\u7387\u3002\u56e0\u4e3a\u91c7\u6837\u662f\u5728GUI\u4efb\u52a1\u91cc\u6267\u884c\u7684\uff0c\u8fd9\u6837\u4f1a\u5ef6\u8fdf\u5e27\u7ed8\u5236\u3002"),(0,r.kt)("h3",v({},{id:"sampling-from-secondary-task"}),"\u4ece\u5176\u4ed6\u4efb\u52a1\u91c7\u6837"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u65b9\u4fbf\u5c06\u4e0e\u5468\u56f4\u7cfb\u7edf\u4ea4\u4e92\u901a\u8baf\u7684\u91c7\u6837\u653e\u5728GUI\u4efb\u52a1\u91cc\uff0c\u90a3\u4e48\u53ef\u4ee5\u65b0\u5efa\u8d1f\u8d23\u6267\u884c\u91c7\u6837\u64cd\u4f5c\u7684OS\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u6839\u636e\u7279\u5b9a\u573a\u666f\u7684\u9700\u8981\uff0c\u5c06\u8be5\u4efb\u52a1\u914d\u7f6e\u4e3a\u4ee5\u51c6\u786e\u7684\u65f6\u95f4\u95f4\u9694\u8fd0\u884c\u3002 \u6b64\u5916\uff0c\u6839\u636e\u60a8\u7684\u9700\u6c42\uff0c\u6b64\u65b0\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\u53ef\u4ee5\u4f4e\u4e8e\u6216\u9ad8\u4e8eGUI\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f18\u5148\u7ea7\u66f4\u9ad8\uff0c\u65e0\u8bbaGUI\u4efb\u52a1\u5728\u6267\u884c\u4ec0\u4e48\u64cd\u4f5c\uff0c\u90fd\u80fd\u786e\u4fdd\u5b83\u4f1a\u5728\u6307\u5b9a\u65f6\u95f4\u51c6\u786e\u8fd0\u884c\u3002 \u6709\u4e00\u4e2a\u7f3a\u70b9\u662f\uff0c\u5982\u679c\u662fCPU\u5360\u7528\u8fdb\u7a0b\u65f6\u95f4\u957f\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cdUI\u7684\u5e27\u7387\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u91c7\u6837\u5bf9\u65f6\u95f4\u7684\u8981\u6c42\u4e0d\u4e25\u683c\uff0c\u5219\u53ef\u4ee5\u5206\u914d\u4f4e\u4e8eGUI\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\uff0c\u8fd9\u6837UI\u5e27\u7387\u5c06\u6c38\u8fdc\u4e0d\u53d7\u5468\u56f4\u7cfb\u7edf\u91c7\u6837\u7684\u5f71\u54cd\u3002 \u5728\u6e32\u67d3\u65f6\uff0cGUI\u4efb\u52a1\u5c06\u4f11\u7720\u5f88\u957f\u65f6\u95f4\uff08\u5982\u5728\u7b49\u5f85\u57fa\u4e8eDMA\u7684\u50cf\u7d20\u4f20\u8f93\u5b8c\u6210\u65f6\uff09\uff0c\u8fd9\u53ef\u5141\u8bb8\u4f18\u5148\u7ea7\u8f83\u4f4e\u7684\u4efb\u52a1\u9891\u7e41\u8fd0\u884c\uff0c\u5bf9\u7edd\u5927\u591a\u6570\u5e94\u7528\u800c\u8a00\u4e5f\u8db3\u591f\u4e86\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u5176\u4ed6\u4efb\u52a1\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528RTOS\u63d0\u4f9b\u7684\u4efb\u52a1\u95f4\u6d88\u606f\u4f20\u9001\u65b9\u6cd5\u3002 \u5927\u591a\u6570RTOS\u5177\u6709\u961f\u5217/\u90ae\u4ef6\u673a\u5236\uff0c\u53ef\u4ece\u4e00\u4e2a\u4efb\u52a1\u5411\u53e6\u4e00\u4e2a\u4efb\u52a1\u53d1\u9001\u6570\u636e\uff08\u901a\u5e38\u4e3a\u7528\u6237\u5b9a\u4e49\u7684C\u8bed\u8a00\u7ed3\u6784\u4f53\u3001\u5b57\u8282\u9635\u5217\u6216\u7b80\u5355\u7684\u6574\u6570\uff09\u3002 \u4e3a\u4e86\u5c06\u65b0\u6570\u636e\u4f20\u9012\u7ed9GUI\u4efb\u52a1\uff0c\u9700\u8981\u4e3aUI\u4efb\u52a1\u8bbe\u7f6e\u90ae\u7bb1\u6216\u6d88\u606f\u961f\u5217\uff0c\u5e76\u4f7f\u7528\u6b64\u6d88\u606f\u4f20\u9001\u7cfb\u7edf\u5c06\u6570\u636e\u53d1\u9001\u7ed9GUI\u4efb\u52a1\u3002 \u7136\u540e\u53ef\u4ee5\u5728 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"Model::tick")," \u4e2d\u8f6e\u8be2GUI\u4efb\u52a1\u7684\u90ae\u7bb1\uff0c\u67e5\u770b\u662f\u5426\u6709\u4efb\u4f55\u65b0\u6570\u636e\u5230\u8fbe\u3002 \u5982\u679c\u6709\uff0c\u8bfb\u53d6\u6570\u636e\u5e76\u76f8\u5e94\u5730\u66f4\u65b0UI\u3002"),(0,r.kt)("h2",v({},{id:"propagating-data-to-ui"}),"\u5411UI\u4f20\u8f93\u6570\u636e"),(0,r.kt)("p",null,"\u65e0\u8bba\u60a8\u662f\u4ece",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-gui-task"}),"GUI\u4efb\u52a1\u91c7\u6837"),"\u8fd8\u662f\u4ece",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-secondary-task"}),"\u4e8c\u7ea7\u4efb\u52a1\u91c7\u6837"),"\uff0c ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"Model::tick")," \u51fd\u6570\u90fd\u662fGUI\u4efb\u52a1\u53d1\u73b0\u8981\u5728UI\u4e2d\u663e\u793a\u7684\u65b0\u6570\u636e\u7684\u5730\u65b9\u3002 \u9664\u4e86\u5145\u5f53\u5468\u56f4\u7cfb\u7edf\u7684\u63a5\u53e3\uff0cModel\u7c7b\u8fd8\u8d1f\u8d23\u4fdd\u5b58\u72b6\u6001\u6570\u636e\uff08\u5982\u524d\u6587\u6240\u8ff0\uff09\uff0c\u56e0\u6b64\u53ef\u80fd\u6709\u4e9b\u72b6\u6001\u53d8\u91cf\u4e5f\u9700\u8981\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u6765\u8003\u8651\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a\u6e29\u5ea6\u4f20\u611f\u5668\u8fde\u63a5\u5230\u7cfb\u7edf\uff0c\u5c06\u5f53\u524d\u6e29\u5ea6\u663e\u793a\u5728UI\u4e0a\u3002 \u5728\u51c6\u5907\u9636\u6bb5\u4e2d\uff0c\u6211\u4eec\u5728Model\u7c7b\u65b0\u589e\u51fd\u6570\u4ee5\u4fbf\u652f\u6301\uff1a"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Model\n{\npublic:\n  // Function that allow your Presenters to read current temperature.\n  int getCurrentTemperature() const { return currentTemperature; }\n\n  // Called automatically by framework every tick.\n  void tick();\n  ...\nprivate:\n  // Variable storing last received temperature;\n  int currentTemperature;\n  ...\n};\n")),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u60c5\u51b5\u4e0b\uff0c ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"Presenter")," \u80fd\u591f\u8be2\u95eeModel\u5f53\u524d\u6e29\u5ea6\uff0c\u4ee5\u4fbf\u5728\u8fdb\u5165\u663e\u793a\u6e29\u5ea6\u7684\u5c4f\u5e55\u65f6Presenter\u5728UI\uff08View\uff09\u4e2d\u8bbe\u7f6e\u6b64\u503c\u3002 \u73b0\u5728\uff0c\u9700\u8981\u80fd\u591f\u5728\u63a5\u6536\u5230\u65b0\u7684\u6e29\u5ea6\u4fe1\u606f\u65f6\u518d\u6b21\u66f4\u65b0UI\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u5229\u7528Model\u6709\u6307\u5411\u5f53\u524d\u6d3b\u52a8Presenter\u7684\u6307\u9488\u3002 \u8be5\u6307\u9488\u7684\u7c7b\u578b\u662f\u63a5\u53e3\uff08",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"ModelListener"),"\uff09\uff0c\u4e3a\u4e86\u53cd\u6620\u5408\u9002\u7684\u5e94\u7528\u7279\u5b9a\u7684\u4e8b\u4ef6\uff0c\u60a8\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\uff1a"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"ModelListener.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class ModelListener\n{\npublic:\n  // Call this function to notify that temperature has changed.\n  // Per default, use an empty implementation so that only those\n  // Presenters interested in this specific event need to\n  // override this function.\n  virtual void notifyTemperatureChanged(int newTemperature) {}\n};\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5df2\u7ecf\u8fde\u63a5\u4e86\u6b64\u63a5\u53e3\uff0c\u5269\u4f59\u7684\u5de5\u4f5c\u662f\u6267\u884c\u4f20\u5165\u201c\u65b0\u6e29\u5ea6\u201d\u4e8b\u4ef6",(0,r.kt)(u,{mdxType:"InlineNote"},"\u7684\u5b9e\u9645"),"\u91c7\u6837\u3002 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"Model::tick")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'void Model::tick()\n{\n  // Pseudo-code for sampling data\n  if (OS_Poll(GuiTaskMBox))\n  {\n    // Here we assume that you have defined a "Message" struct containing type and data,\n    // along with some event definitions.\n    struct Message msg = OS_Read(GuiTaskMBox);\n    if (msg.eventType == EVT_TEMP_CHANGED)\n    {\n       // We received information that temperature has changed.\n       // First, update Model state variable\n       currentTemperature = msg.data;\n\n      // Second, notify the currently active Presenter that temperature has changed.\n      // The modelListener pointer points to the currently active Presenter.\n      if (modelListener != 0)\n      {\n        modelListener->notifyTemperatureChanged(currentTemperature);\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u65b9\u6cd5\u53ef\u786e\u4fdd\u4e24\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(p.Z,{mdxType:"InlineCode"},"currentTemperature")," \u53d8\u91cf\u603b\u662f\u6700\u65b0\u503c\uff0c\u56e0\u6b64Presenter\u53ef\u968f\u65f6\u83b7\u53d6\u5f53\u524d\u6e29\u5ea6\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(p.Z,{mdxType:"InlineCode"},"Presenter")," \u7acb\u5373\u901a\u77e5\u6e29\u5ea6\u53d8\u5316\uff0c\u5e76\u80fd\u91c7\u53d6\u5408\u9002\u63aa\u65bd\u3002")),(0,r.kt)("p",null,"MVP\u6a21\u5f0f\u7684\u4e00\u5927\u4f18\u52bf\u662f\u6839\u636e\u5f53\u524d\u6240\u5728\u5c4f\u5e55\u5b9e\u73b0\u5355\u72ec\u7684\u901a\u77e5\u5904\u7406\u3002 \u4f8b\u5982\uff0c\u5047\u8bbe\u5728\u663e\u793a\u67d0\u4e9b\u8bbe\u7f6e\u83dc\u5355\uff08\u4f8b\u5982MainMenuPresenter/MainMenuView\u662f\u6fc0\u6d3b\u7684\uff09 ",(0,r.kt)(u,{mdxType:"InlineNote"},"\u65f6\u53d1\u751f\u4e86\u4e00\u4e2a\u6e29\u5ea6\u53d8\u5316\u7684\u4e8b\u4ef6\uff0c")," \u800c\u5f53\u524d\u6e29\u5ea6\u4e0e\u6b64\u65e0\u5173\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," \u51fd\u6570\u5177\u6709\u9ed8\u8ba4\u7684\u7a7a\u5b9e\u73b0\uff0c\u6b64\u901a\u77e5\u4f1a\u88ab ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"MainMenuPresenter\u5ffd\u7565\u3002"),". \u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"\u6709TemperatureControlPresenter")," \uff0c\u60a8\u53ef\u4ee5\u5728\u8be5Presenter\u4e2d\u91cd\u5199 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," notifyTemperatureChanged\u51fd\u6570\uff0c\u5e76\u901a\u77e5View\u5b83\u5e94\u663e\u793a\u66f4\u65b0\u540e\u7684\u6e29\u5ea6\uff1a"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"TemperatureControlPresenter.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class TemperatureControlPresenter : public ModelListener\n{\npublic:\n  // override the empty function.\n  virtual void notifyTemperatureChanged(int newTemperature) {\n    view.setTemp(newTemperature);\n  }\n};\n")),(0,r.kt)("p",null,"\u5f53\u7136\uff0cView\u7c7b ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"TemperatureControlView"),"\u5fc5\u987b\u5b9e\u73b0 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"setTemp")," \u65b9\u6cd5\u3002"),(0,r.kt)("h2",v({},{id:"transmitting-data-from-ui-to-surrounding-system"}),"UI\u5411\u5468\u56f4\u7cfb\u7edf\u53d1\u9001\u6570\u636e"),(0,r.kt)("p",null,"\u5bf9\u5e94\u7684\u4eceUI\u5411\u5468\u56f4\u7cfb\u7edf\u4f20\u8f93\u6570\u636e/\u4e8b\u4ef6\u65f6\uff0c\u5c06\u901a\u8fc7Model\u4ee5\u5927\u4f53\u4e0a\u76f8\u540c\u7684\u65b9\u5f0f\u6765\u6267\u884c\u3002 \u7ee7\u7eed\u524d\u9762\u7684\u4f8b\u5b50\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u589e\u52a0\u8bbe\u7f6e\u65b0\u7684\u76ee\u6807\u6e29\u5ea6\u7684\u80fd\u529b\uff0c\u6211\u4eec\u5c06\u5411Model\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"void setNewTargetTemperature(int newTargetTemp)\n{\n  // Pseudo-code for sending an event to a task responsible for controlling temperature.\n  struct Message msg;\n  msg.eventType = EVT_SET_TARGET_TEMP;\n  msg.data = newTargetTemp;\n  OS_Send(SystemTaskMBox, &msg);\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u7528\u6237\u5728UI\u4e2d\u8bbe\u7f6e\u65b0\u7684\u76ee\u6807\u6e29\u5ea6\uff0cView\u53ef\u901a\u77e5\u4fdd\u6709\u6307\u5411Model\u5bf9\u8c61\u6307\u9488\u7684Presenter\uff0c\u4ece\u800c\u80fd\u591f\u8c03\u7528 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"setNewTargetTemperature\u51fd\u6570\u3002")," \u51fd\u6570\u4e2d\u76f4\u63a5\u5bf9\u5468\u56f4\u7cfb\u7edf\u8fdb\u884c\u91c7\u6837\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u662f\u4e3a\u7279\u5b9a\u4e8e\u677f\u4ef6\u7684\u6f14\u793a\uff08BSD\uff09\uff0c\u4f46\u6f14\u793a\u7684\u8bb8\u591a\u4ee3\u7801\u53ef\u91cd\u590d\u7528\u4e8e\u5176\u4ed6\u6f14\u793a\u677f\u548c\u5b9a\u5236\u786c\u4ef6\u3002 \u5bf9\u4e8e\u8fd9\u4e9b\u793a\u4f8b\uff0c\u6211\u4eec\u5728STM32CubeMX\u4e2d\u521b\u5efa\u4efb\u52a1\u548c\u961f\u5217\u3002 \u6211\u4eec\u7136\u540e\u586b\u5145\u751f\u6210\u7684\u4efb\u52a1\uff0c\u5e76\u5728 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"main_user.c\u4e2d\u5b9e\u73b0\u793a\u4f8b\u7528\u6237\u4ee3\u7801\u3002"),". \u793a\u4f8b\u4f7f\u7528STM32CubeMX BSP\u5e93\u6765\u63a7\u5236STM32\u8bc4\u4f30\u5957\u4ef6\u4e0a\u7684LED\u3001\u7528\u6237\u6309\u94ae\u3001\u4ee5\u53ca\u5176\u4ed6\u5916\u8bbe\u3002"),(0,r.kt)("h3",v({},{id:"from-gui-task"}),"\u6765\u81eaGUI\u4efb\u52a1"),(0,r.kt)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u5e94\u7528\u3001\u4e00\u4e2aBSD\uff0c\u4f4d\u4e8e\u6700\u65b0\u7248\u672c\u7684TouchGFX\u8bbe\u8ba1\u5668\u4e0b\uff0c\u5177\u4f53\u8def\u5f84> \u6f14\u793a->\u677f\u4ef6\u7279\u5b9a\u6f14\u793a>  STM32F46G\u63a2\u7d22\u5957\u4ef6\u63a7\u5236LED\uff08\u4eceGUI\uff09\u3002"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u6f14\u793a\u5982\u4f55\u5bf9\u6309\u94ae\u8fdb\u884c\u91c7\u6837\u548c\u63a7\u5236LED\u3002 Model\u7c7b\u5bf9\u6309\u94ae\u91c7\u6837\uff0c\u5e76\u66f4\u65b0LED\u4ee5\u4e0e\u5e94\u7528\u72b6\u6001\u76f8\u5339\u914d\u3002"),(0,r.kt)("h3",v({},{id:"from-other-task"}),"\u6765\u81ea\u5176\u4ed6\u4efb\u52a1"),(0,r.kt)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u5e94\u7528\u3001\u4e00\u4e2aBSD\uff0c\u4f4d\u4e8e\u6700\u65b0\u7248\u672c\u7684TouchGFX\u8bbe\u8ba1\u5668\u4e0b\uff0c\u5177\u4f53\u8def\u5f84\uff1a\u6f14\u793a-> \u677f\u4ef6\u7279\u5b9a\u6f14\u793a->  STM32H7B3I\u8bc4\u4f30\u677f\u6a21\u62df\u91c7\u6837\u5668\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u6f14\u793a\u5982\u4f55\u5728\u5355\u72ec\u7684\u7ebf\u7a0b\u4e2d\u5bf9\u6a21\u62df\u8f93\u5165\u8fdb\u884c\u91c7\u7528\u3002 \u8be5\u793a\u4f8b\u4f7f\u7528MVP\u67b6\u6784\u5c06\u6a21\u62df\u503c\u4f20\u8f93\u5230View\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u5e94\u7528\u3001\u4e00\u4e2aBSD\uff0c\u4f4d\u4e8e\u6700\u65b0\u7248\u672c\u7684TouchGFX\u8bbe\u8ba1\u5668\u4e0b\uff0c\u5177\u4f53\u8def\u5f84\uff1a\u6f14\u793a-> \u677f\u4ef6\u7279\u5b9a\u6f14\u793a-> STM32F46G\u63a2\u7d22\u5957\u4ef6\u4efb\u52a1\u95f4\u901a\u4fe1\u3002"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u6f14\u793a\u4e86\u4efb\u52a1\u95f4\u901a\u4fe1\uff0c\u4ee5\u53ca\u4e0eUI\u4e4b\u95f4\u7684\u4f20\u64ad\u3002 \u5728\u60a8\u81ea\u5df1\u8fdb\u884c\u8bbe\u7f6e\u65f6\uff0c\u5b83\u4e5f\u8bb8\u80fd\u6fc0\u53d1\u60a8\u7684\u7075\u611f\u3002 \u8be5\u793a\u4f8b\u5728\u540e\u7aef\u7cfb\u7edf\u4f7f\u7528C\u4ee3\u7801\u5b9e\u73b0\uff0c\u5728TouchGFX GUI\u7aef\u4f7f\u7528C++\u5b9e\u73b0\uff0c\u540e\u7aef\u4e0eTouchGFX\u4e4b\u95f4\u76f8\u4e92\u901a\u8baf\u3002 \u8be5\u793a\u4f8b\u53ef\u5728\u5305\u542bFreeRTOS\u64cd\u4f5c\u7cfb\u7edf\u7684STM32F746G-DISCO\u677f\u4e0a\u8fd0\u884c\u3002"),(0,r.kt)("h3",v({},{id:"from-multiple-tasks"}),"\u6765\u81ea\u591a\u4e2a\u4efb\u52a1"),(0,r.kt)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u5e94\u7528\u3001\u4e00\u4e2aBSD\uff0c\u4f4d\u4e8e\u6700\u65b0\u7248\u672c\u7684TouchGFX\u8bbe\u8ba1\u5668\u4e0b\uff0c\u5177\u4f53\u8def\u5f84\uff1a\u6f14\u793a->\u677f\u4ef6\u7279\u5b9a\u6f14\u793a->  STM32F769I\u63a2\u7d22\u5957\u4ef6\u591a\u4efb\u52a1\u901a\u4fe1\u6f14\u793a> \u3002"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u5bf9\u6309\u94ae\u72b6\u6001\u8fdb\u884c\u91c7\u6837\uff0c\u5e76\u5728\u6309\u4e0b\u6309\u94ae\u65f6\u901a\u8fc7GUI\u6d88\u606f\u961f\u5217\u4f20\u9012\u6d88\u606f\u3002 \u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6309\u4f4f\u6309\u94ae\u6765\u63a8\u8fdb\u5e94\u7528\u4e2d\u7684\u52a8\u753b\u3002"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u4f7f\u7528\u4e863\u4e2aFreeRTOS\u4efb\u52a1\u3002 \u4e00\u4e2a\u7528\u4e8eGUI\uff0c\u53e6\u5916\u4e24\u4e2a\u5206\u522b\u7528\u4e8e\u4e24\u4e2a\u5916\u8bbe\uff08LED\u548c\u7528\u6237\u6309\u94ae\uff09\u3002"),(0,r.kt)("h3",v({},{id:"from-task-and-external-interrupt-line"}),"\u6765\u81ea\u4efb\u52a1\u548c\u5916\u90e8\u4e2d\u65ad"),(0,r.kt)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u5e94\u7528\u3001\u4e00\u4e2aBSD\uff0c\u4f4d\u4e8e\u6700\u65b0\u7248\u672c\u7684TouchGFX\u8bbe\u8ba1\u5668\u4e0b\uff0c\u5177\u4f53\u8def\u5f84\uff1a\u6f14\u793a-> \u677f\u4ef6\u7279\u5b9a\u6f14\u793a-> STM32F769I\u63a2\u7d22\u5957\u4ef6\u591a\u4efb\u52a1\u901a\u4fe1\u6f14\u793a> \u3002"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u4e13\u4e3aSTM32F769I-DISCO\u677f\u800c\u8bbe\u8ba1\uff0c\u5b83\u4e0eLED\u548c\u7528\u6237\u6309\u94ae\u4ea4\u4e92\uff0c\u4ee5\u4fbf\u5c55\u793a\u5982\u4f55\u5c06C\u4ee3\u7801\u548c\u786c\u4ef6\u5916\u8bbe\u96c6\u6210\u5230TouchGFX\u5e94\u7528\u4e2d\u3002"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u4ee5EXTI\u6a21\u5f0f\u914d\u7f6e\u6309\u94ae\uff08\u5916\u90e8\u4e2d\u65ad\u7ebf\u8def0\uff09\u3002 \u5176\u884c\u4e3a\u662f\u5728\u6309\u4e0b\u6309\u94ae\u65f6\u63a5\u6536\u4e2d\u65ad\uff0c\u6b64\u540e\u4e2d\u65ad\u6e05\u96f6\u3002 \u8fd9\u4e0d\u5141\u8bb8\u51fa\u73b0\u4e0eGPIO\u6a21\u5f0f\u4e0b\u76f8\u540c\u7684\u884c\u4e3a\uff0c\u800c\u4f1a\u662f\u5355\u6b65\u52a8\u753b\uff0c\u539f\u56e0\u5728\u4e8e\u53ea\u5728\u63a5\u6536\u5230\u4e2d\u65ad\u65f6\u901a\u8fc7GUI\u6d88\u606f\u961f\u5217\u53d1\u9001\u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u4f7f\u7528\u4e24\u4e2aFreeRTOS\u4efb\u52a1\u3002 \u4e00\u4e2a\u7528\u4e8eGUI\uff0c\u4e00\u4e2a\u7528\u4e8eLED\u3002 \uff08",(0,r.kt)("a",v({parentName:"p"},{href:"#from-multiple-tasks"}),"\u591a\u4efb\u52a1\u6f14\u793a"),"\u4e2d\u7684Button\u4efb\u52a1\u5728\u8be5\u5e94\u7528\u4e2d\u4ecd\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\uff0c\u5916\u8bbe\u4ea4\u4e92\u4ee3\u7801\u5df2\u79fb\u81f3\u4e2d\u65ad\u5904\u7406\u51fd\u6570\u4e2d\uff09\u3002"))}b.isMDXComponent=!0}}]);