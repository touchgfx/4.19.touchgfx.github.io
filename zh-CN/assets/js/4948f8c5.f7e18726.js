"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[602],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,d=c["".concat(i,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},18434:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return h}});var r=n(3905),a=n(22425),l=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e};const k={id:"operating-system",title:"\u64cd\u4f5c\u7cfb\u7edf"},d=void 0,g={unversionedId:"basic-concepts/operating-system",id:"basic-concepts/operating-system",title:"\u64cd\u4f5c\u7cfb\u7edf",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/operating-system.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/operating-system",permalink:"/4.19/zh-CN/docs/basic-concepts/operating-system",draft:!1,tags:[],version:"current",frontMatter:{id:"operating-system",title:"\u64cd\u4f5c\u7cfb\u7edf"},sidebar:"docs",previous:{title:"\u6027\u80fd",permalink:"/4.19/zh-CN/docs/basic-concepts/performance"},next:{title:"\u5185\u5b58\u4f7f\u7528",permalink:"/4.19/zh-CN/docs/basic-concepts/memory-usage"}},f={},h=[{value:"\u5f15\u8a00",id:"introduction",level:2},{value:"\u5176\u4ed6\u4efb\u52a1\u4e0e\u7528\u6237\u754c\u9762\u7684\u4ea4\u4e92",id:"interleaving-other-tasks-with-the-user-interface",level:3},{value:"\u793a\u4f8b",id:"an-example",level:3},{value:"RTOS",id:"rtos",level:2},{value:"Task communication",id:"task-communication",level:3},{value:"\u5904\u7406\u4e2d\u65ad",id:"handling-interrupts",level:3},{value:"FreeRTOS",id:"freertos",level:3},{value:"TouchGFX OS Wrappers",id:"touchgfx-os-wrappers",level:3},{value:"\u65e0RTOS",id:"no-rtos",level:2},{value:"Model::tick",id:"modeltick",level:3},{value:"OSWrappers",id:"oswrappers",level:3}],y={toc:h};function v(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),c),o(t,p({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"introduction"}),"\u5f15\u8a00"),(0,r.kt)("p",null,"\u672c\u8282\u5c06\u8ba8\u8bba\u56fe\u5f62\u7528\u6237\u754c\u9762\u5e94\u7528\u4e2d\u64cd\u4f5c\u7cfb\u7edf\u7684\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5d4c\u5165\u5f0f\u8bbe\u5907\u8d8a\u6765\u8d8a\u5148\u8fdb\u3002 \u7cfb\u7edf\u7684\u5927\u90e8\u5206\u8bbe\u5907\u4e0d\u4ec5\u5904\u7406\u56fe\u5f62\u7528\u6237\u754c\u9762\uff0c\u901a\u5e38\u8fd8\u5904\u7406\u590d\u6742\u7684\u63a7\u5236\u7b97\u6cd5\u548c\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u8fd9\u4e9b\u4efb\u52a1\u53ef\u4ee5\u662f\u7535\u673a\u63a7\u5236\u3001\u6570\u636e\u83b7\u53d6\u6216\u5b89\u5168\u76f8\u5173\u4efb\u52a1\u3002 \u8bb8\u591a\u5148\u8fdb\u8bbe\u5907\u5305\u542b\u7528\u6765\u4e0e\u6570\u636e\u4e2d\u5fc3\u901a\u4fe1\u7684\u901a\u4fe1\u534f\u8bae\u6808\uff08\u5982TCP/IP\uff09\u6216\u7528\u6765\u4e0e\u5176\u4ed6\u672c\u5730\u8bbe\u5907\u901a\u4fe1\u7684\u5c04\u9891\u534f\u8bae\u6808\uff08\u5982\u84dd\u7259\uff09\u3002"),(0,r.kt)("h3",m({},{id:"interleaving-other-tasks-with-the-user-interface"}),"\u5176\u4ed6\u4efb\u52a1\u4e0e\u7528\u6237\u754c\u9762\u7684\u4ea4\u4e92"),(0,r.kt)("p",null,"\u5728\u5177\u6709\u56fe\u5f62\u7528\u6237\u754c\u9762\u5e76\u53ea\u652f\u6301\u51e0\u9879\u7b80\u5355\u4efb\u52a1\u7684\u7b80\u5355\u8bbe\u5907\u4e2d\uff0c\u53ef\u56f4\u7ed5\u7528\u6237\u754c\u9762\u4ee3\u7801\u6784\u5efa\u6574\u4e2a\u5e94\u7528\u3002 \u9664\u4e86\u5e38\u89c4\u7684\u7528\u6237\u754c\u9762\u5347\u7ea7\uff0c\u5e94\u7528\u6267\u884c\u7684\u4efb\u52a1\u975e\u5e38\u5c11\uff0c\u56e0\u6b64\u53ef\u5c06\u5176\u4ed6\u4efb\u52a1\u7684\u6267\u884c\u76f8\u5f53\u6210\u529f\u5730\u5d4c\u5165\u7528\u6237\u754c\u9762\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u5f53\u8bbe\u5907\u5305\u542b\u5177\u6709\u72ec\u4eab\u65f6\u5e8f\u8981\u6c42\u7684\u66f4\u9ad8\u7ea7\u7684\u201c\u540e\u53f0\u8fd0\u884c\u201d\u529f\u80fd\uff08\u5982\u8c03\u5236\u7535\u673a\uff09\u65f6\uff0c\u5c06\u5f88\u96be\u5c06\u8fd9\u4e24\u4e2a\u4efb\u52a1\u5408\u4e8c\u4e3a\u4e00\u3002"),(0,r.kt)("p",null,"\u6b63\u5982\u6211\u4eec\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u8ba8\u8bba\u7684\u90a3\u6837\uff0c\u56fe\u5f62\u5f15\u64ce\u5fc5\u987b\u6301\u7eed\u7ed8\u5236\u65b0\u5e27\uff0c\u624d\u80fd\u652f\u6301\u6d41\u7545\u7684\u7528\u6237\u754c\u9762\u3002 \u5982\u679c\u5728\u8fd0\u884c\u5176\u4ed6\u4efb\u52a1\u65f6\u9700\u8981\u6682\u505c\u56fe\u5f62\u5f15\u64ce\u4efb\u52a1\u7684\u8fd0\u884c\uff0c\u5e27\u7387\u5c06\u4f1a\u4e0b\u964d\u3002 \u540c\u6837\u5730\uff0c\u5982\u679c\u5176\u4ed6\u4efb\u52a1\u53ea\u5728\u5e27\u95f4\u3001\u7a7a\u95f2\u65f6\u95f4\u8fd0\u884c\uff0c\u90a3\u4e48\u5728\u7528\u6237\u754c\u9762\u6e32\u67d3\u590d\u6742\u573a\u666f\u65f6\uff0c\u7531\u4e8e\u7a7a\u95f2\u65f6\u95f4\u8f83\u5c11\uff0c\u8fd9\u4e9b\u4efb\u52a1\u4f1a\u53d7\u5230\u5f71\u54cd\u3002 \u8fd9\u4e9b\u5f71\u54cd\u4f7f\u5f97UI\u4efb\u52a1\u4e0e\u5176\u4ed6\u590d\u6742\u4efb\u52a1\u7684\u624b\u52a8\u4ea4\u66ff\u53d8\u5f97\u56f0\u96be\u3002"),(0,r.kt)("h3",m({},{id:"an-example"}),"\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728\u672c\u8282\u5269\u4f59\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u6784\u5efa\u4e00\u4e2a\u5177\u6709\u663e\u793a\u5c4f\u7684\u84dd\u7259\u626c\u58f0\u5668\u3002 \u6211\u4eec\u67093\u4e2a\u4e3b\u8981\u4efb\u52a1\uff1a\u8fd0\u884c\u56fe\u5f62\u7528\u6237\u754c\u9762\uff0c\u5c06\u97f3\u4e50\u8f93\u5165\u626c\u58f0\u5668\uff0c\u4ee5\u53ca\u5904\u7406\u84dd\u7259\u6808\u4ee5\u4fbf\u4e0e\u5176\u4ed6\u8bbe\u5907\u901a\u4fe1\u3002"),(0,r.kt)("p",null,"\u4e0d\u96be\u770b\u51fa\uff0c\u4ee5\u7528\u6237\u754c\u9762\u4e3a\u4e2d\u5fc3\u7684\u5e94\u7528\u67b6\u6784\u5e76\u4e0d\u662f\u597d\u7684\u9009\u62e9\uff1a\u5047\u8bbe\u6211\u4eec\u5c06\u97f3\u4e50\u4ee3\u7801\u4e0e\u7528\u6237\u754c\u9762\u6df7\u5408\uff0c\u5e76\u5c06\u542f\u52a8\u56de\u653e\u7684\u4ee3\u7801\u653e\u5728\u7528\u6237\u754c\u9762\u4e0a\u67d0\u4e2a\u6309\u94ae\u7684\u4e8b\u4ef6\u5904\u7406\u4e2d\u3002 \u73b0\u5728\uff0c\u9700\u8981\u4e00\u70b9\u65f6\u95f4\u624d\u80fd\u5f00\u59cb\u64ad\u653e\u97f3\u4e50\uff0c\u671f\u95f4\u7528\u6237\u754c\u9762\u88ab\u9501\u5b9a\u3002 \u4e0e\u6b64\u540c\u65f6\uff0c\u8fd0\u884c\u7684\u4efb\u4f55\u52a8\u753b\u90fd\u5c06\u505c\u6b62\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u754c\u9762\u7684\u54cd\u5e94\u6027\u5f00\u59cb\u4f9d\u8d56\u4e8e\u97f3\u4e50\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\uff08\u5f00\u59cb\u3001\u505c\u6b62\u548c\u4e0b\u4e00\u9996\u7b49\uff09\u3002 \u8fd9\u662f\u4e00\u4e2a\u7b3c\u7edf\u7684\u95ee\u9898\uff0c\u6211\u4eec\u7a0d\u540e\u518d\u505a\u8ba8\u8bba\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8fd8\u60f3\u4ece\u84dd\u7259\u64ad\u653e\u97f3\u4e50\uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f \u7528\u6237\u754c\u9762\u662f\u5426\u5e94\u4ee5\u67d0\u79cd\u65b9\u5f0f\u4ecb\u5165\u5176\u4e2d\uff1f"),(0,r.kt)("p",null,"\u6211\u4eec\u5982\u4f55\u4e3a\u97f3\u4e50\u4efb\u52a1\u5206\u914d\u4f18\u5148\u7ea7\uff0c\u4ee5\u907f\u514d\u97f3\u4e50\u6682\u505c\uff1f \u4e0e\u6b64\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u5e0c\u671b\u5728\u6ca1\u6709\u97f3\u4e50\u4efb\u52a1\u8fd0\u884c\u65f6\u7528\u6237\u754c\u9762\u4ee5\u6700\u9ad8\u6027\u80fd\u8fd0\u884c\u3002"),(0,r.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf\u53ef\u901a\u8fc7\u4efb\u52a1\u3001\u901a\u4fe1\u624b\u6bb5\u548c\u540c\u6b65\u6765\u89e3\u51b3\u6240\u6709\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,r.kt)("h2",m({},{id:"rtos"}),"RTOS"),(0,r.kt)("p",null,"\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\u662f\u4e00\u4e2a\u5c0f\u8f6f\u4ef6\uff0c\u5b83\u901a\u8fc7\u5404\u79cd\u670d\u52a1\u4e3a\u5e94\u7528\u63d0\u4f9b\u652f\u6301\uff0c\u5e76\u4e3a\u5e94\u7528\u4e2d\u7684\u4efb\u52a1\u5206\u914d\u8ba1\u7b97\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"RTOS\u5e2e\u52a9\u60a8\u5728\u8bb8\u591a\u72ec\u7acb\u4f46\u76f8\u4e92\u534f\u4f5c\u7684\u4efb\u52a1\u4e2d\u6784\u5efa\u5e94\u7528\u3002 \u7136\u540e\uff0c\u5728\u8981\u7528\u5230\u8fd9\u4e9b\u4efb\u52a1\u65f6\uff0cRTOS\u4f1a\u6839\u636e\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\u5e76\u53d1\u6267\u884c\u8fd9\u4e9b\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u751a\u81f3\u53ef\u4ee5\u5c06\u4e00\u9879\u4f5c\u4e1a\u5206\u5272\u6210\u4e00\u4e2a\u9ad8\u4f18\u5148\u7ea7\u4efb\u52a1\u548c\u4e00\u4e2a\u4f4e\u4f18\u5148\u7ea7\u4efb\u52a1\u3002 \u5047\u8bbe\u6211\u4eec\u5fc5\u987b\u5728\u84dd\u7259\u6570\u636e\u5230\u8fbe\u65f6\u975e\u5e38\u5feb\u901f\u5730\u4ece\u7f13\u51b2\u533a\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u5c06\u5b83\u4eec\u653e\u5165\u8f83\u5927\u7684\u5e94\u7528\u7f13\u51b2\u533a\u3002 \u6570\u636e\u5904\u7406\u53ef\u80fd\u4f1a\u7a0d\u5fae\u5ef6\u8fdf\u3002 \u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u5c06\u6709\u4e24\u4e2a\u84dd\u7259\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u4ece\u4e3b\u51fd\u6570\u5f00\u59cb4\u9879\u4efb\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"int main() {\n  ...\n  os_start_task(gui_task,      medium_priority);\n  os_start_task(music_task,    low_priority);\n  os_start_task(bt_comm_task,  high_priority);\n  os_start_task(bt_appl_task,  low_priority);\n  os_start_scheduler();\n}\n")),(0,r.kt)("p",null,"\u540c\u6837\u53ef\u4ee5\u5c06\u97f3\u4e50\u7684\u4efb\u52a1\u5206\u4e3a\u4e24\u4e2a\uff1a\n\u4e00\u4e2a\u9ad8\u4f18\u5148\u7ea7\u4efb\u52a1\u5c06\u6570\u636e\u8f93\u9001\u5230\u626c\u58f0\u5668\uff0c\u4e00\u4e2a\u4f4e\u4f18\u5148\u7ea7\u4efb\u52a1\u63a7\u5236\u64ad\u653e\u54ea\u9996\u6b4c\u66f2\n\u5e76\u5411\u7528\u6237\u754c\u9762\u53d1\u9001\u901a\u77e5\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0a\u8ff0\u4e0d\u540c\u4f18\u5148\u7ea7\u7684\u7ed3\u679c\u662f\uff1a\u5f53\u6709\u6570\u636e\u8981\u5904\u7406\u65f6\uff0c\u8fd0\u884cbt_comm_task\u4efb\u52a1\uff1b\u5426\u5219\uff0c\u8fd0\u884c\u7528\u6237\u754c\u9762\u4efb\u52a1\u3002 \u5f53\u7528\u6237\u754c\u9762\u4efb\u52a1\u7b49\u5f85\u663e\u793a\u5c4f\u65f6\uff0c\u4e24\u4e2a\u4f4e\u4f18\u5148\u7ea7\u4efb\u52a1\u53ef\u4ee5\u8fd0\u884c\u3002 \u64cd\u4f5c\u7cfb\u7edf\u8c03\u5ea6\u7a0b\u5e8f\u5c06\u4e3a\u6211\u4eec\u5904\u7406\u6b64\u7c7b\u65f6\u95f4\u5206\u914d\u3002"),(0,r.kt)("p",null,"\u5728\u5178\u578b\u7684TouchGFX\u5e94\u7528\u4e2d\uff0c\u7528\u6237\u754c\u9762\u5728\u6bcf\u4e00\u5e27\u4e2d\u7b49\u5f85\u663e\u793a\u5c4f\uff0c\u5b83\u8fd8\u5b9a\u671f\u7b49\u5f85\n\u56fe\u5f62\u52a0\u901f\u5668ChromArt\uff0c\u4ee5\u4fbf\u5b8c\u6210\u7ed8\u5236\u5143\u7d20\u3002\n\u8fd9\u610f\u5473\u7740\u9ad8\u4f18\u5148\u4efb\u52a1\u4f1a\u6709\u8bb8\u591a\u77ed\u6682\u7684\u6682\u505c\uff0c\u4f18\u5148\u7ea7\u8f83\u4f4e\u7684\u4efb\u52a1\u53ef\u4ee5\u5728\u6682\u505c\u671f\u95f4\u8fd0\u884c\u3002 \u64cd\u4f5c\u7cfb\u7edf\u8c03\u5ea6\u7a0b\u5e8f\u5c06\u81ea\u52a8\u66f4\u6539MCU\uff0c\u4ee5\u4fbf\u5728\u4f18\u5148\u7ea7\u8f83\u9ad8\u7684\u4efb\u52a1\u7b49\u5f85\u65f6\u8fd0\u884c\u8fd9\u4e9b\u4efb\u52a1\u3002"),(0,r.kt)("h3",m({},{id:"task-communication"}),"Task communication"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528\u591a\u4e2a\u4efb\u52a1\u65f6\uff0c\u8fd8\u9700\u8981\u4e00\u79cd\u5b89\u5168\u7684\u901a\u4fe1\u65b9\u5f0f\u7528\u4e8e\u4efb\u52a1\u95f4\u7684\u901a\u4fe1\u3002 \u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u4ece\u7528\u6237\u754c\u9762\u5230\u97f3\u4e50\u4efb\u52a1\u3002 \u9664\u5176\u4ed6\u60c5\u51b5\u5916\uff0c\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u97f3\u4e50\u4efb\u52a1\u8fdb\u884c\u7b49\u5f85\uff0c\u76f4\u81f3gui_task\u4efb\u52a1\u8981\u6c42\u5176\u5f00\u59cb\u64ad\u653e\u6b4c\u66f2\u3002 \u4e00\u79cd\u7b80\u5355\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u4f7f\u7528\u6d88\u606f\u961f\u5217\u3002 \u5728\u961f\u5217\u4e2d\u51fa\u73b0\u6d88\u606f\u4e4b\u524d\uff0c\u97f3\u4e50\u4efb\u52a1\u4f11\u7720\u3002 \u5f53\u961f\u5217\u4e2d\u51fa\u73b0\u6d88\u606f\u65f6\u4ee5\u53ca\u4f18\u5148\u7ea7\u8f83\u9ad8\u7684\u4efb\u52a1\u4e0d\u5fd9\u788c\u65f6\uff0c\u8c03\u5ea6\u7a0b\u5e8f\n\u5524\u9192\u4efb\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"   ...\n   music_task_input_queue = os_create_queue(10); //10 element queue\n   ...\n")),(0,r.kt)("p",null,"\u5728\u7528\u6237\u754c\u9762\u4e2d\uff0c\u5f53\u6309\u4e0b\u201c\u64ad\u653e\u201d\u65f6\uff0c\u6211\u4eec\u5411\u97f3\u4e50\u4efb\u52a1\u7684\u961f\u5217\u53d1\u9001\u4e00\u6761\u6d88\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void ScreenMusic::handlePlayPressed()\n{\n   os_send_message(music_task_input_queue, play_message);\n}\n")),(0,r.kt)("p",null,"\u97f3\u4e50\u4efb\u52a1\u80fd\u591f\u4ee5\u8bfb\u53d6\u961f\u5217\u7684\u65b9\u5f0f\u7b49\u5f85\u6d88\u606f\u3002 \u8fd9\u4f1a\u5728\u6709\u6d88\u606f\u5230\u8fbe\u524d\u963b\u585e\u4efb\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"...\nMessage message;\nos_receive_message(music_task_input_queue, &message);\n")),(0,r.kt)("p",null,"\u5728\u5c06\u6d88\u606f\u653e\u5165\u97f3\u4e50\u4efb\u52a1\u7684\u961f\u5217\u540e\uff0c\u7528\u6237\u754c\u9762\u7ee7\u7eed\u8fd0\u884c\u5e76\u5c3d\u5feb\u6e32\u67d3\u5e27\u3002 \u6211\u4eec\u4e0d\u5c06\u65f6\u95f4\u6d6a\u8d39\u5728\u7acb\u5373\u5904\u7406\u64ad\u653e\u6d88\u606f\u4e0a\u3002 \u4f46\u662f\uff0c\u5728\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u5728\u6e32\u67d3\u4e0b\u4e00\u5e27\u4e4b\u524dUI\u4efb\u52a1\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u8c03\u5ea6\u7a0b\u5e8f\u8f6c\u53bb\u6267\u884c\u97f3\u4e50\u4efb\u52a1\uff0c\u6b64\u4efb\u52a1\u5c06\u5904\u7406\u4f20\u5165\u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u7ed9\u4e88\u7528\u6237\u754c\u9762\u4e00\u4e2a\u8f93\u5165\u961f\u5217\u3002 \u7136\u540e\uff0c\u97f3\u4e50\u4efb\u52a1\u53ef\u4ee5\u53d1\u9001\u901a\u77e5\u6d88\u606f\uff0c\u4f8b\u5982\u5728\u6b4c\u66f2\u7ed3\u675f\u65f6\u3002 \u7528\u6237\u754c\u9762\u4efb\u52a1\u4e0d\u5e94\u7b49\u5f85\u6d88\u606f\uff0c\u800c\u5e94\u5feb\u901f\u68c0\u67e5\u662f\u5426\u6709\u6d88\u606f\uff08\u65e0\u963b\u585e\uff09\u5e76\u8bfb\u53d6\u5b83\uff08\u5982\u679c\u6709\uff09\u3002"),(0,r.kt)("p",null,"\u6b64\u8bbe\u7f6e\u5728\u7cfb\u7edf\u4e2d\u7684\u4efb\u52a1\u4e4b\u95f4\u63d0\u4f9b\u4e86\u4e00\u79cd\u5341\u5206\u7075\u6d3b\u7684\u8fde\u63a5\u3002 \u6211\u4eec\u5b9e\u9645\u4e0a\u65e0\u9700\u4f7f\u7528\u7528\u6237\u754c\u9762\u5373\u53ef\u6d4b\u8bd5\u97f3\u4e50\u4efb\u52a1\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u8f7b\u677e\u5730\u4ece\u84dd\u7259\u4efb\u52a1\u64ad\u653e\u97f3\u4e50\u3002"),(0,r.kt)("h3",m({},{id:"handling-interrupts"}),"\u5904\u7406\u4e2d\u65ad"),(0,r.kt)("p",null,"\u4e00\u4e9b\u4efb\u52a1\u9700\u8981\u4f5c\u4e3a\u5bf9\u4e2d\u65ad\u7684\u54cd\u5e94\u6765\u8fd0\u884c\u3002 \u5728\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u84dd\u7259\u901a\u4fe1\u4efb\u52a1\u5c31\u662f\u8fd9\u6837\u4e00\u4e2a\u4f8b\u5b50\u3002 \u6211\u4eec\u5e0c\u671b\u4efb\u52a1\u5728\u84dd\u7259\u82af\u7247\u6709\u65b0\u7684\u6570\u636e\u5305\u65f6\u8fd0\u884c\u3002 \u5047\u8bbe\u6211\u4eec\u80fd\u591f\u5728\u90a3\u79cd\u60c5\u51b5\u4e0b\u4ea7\u751f\u4e00\u4e2a\u4e2d\u65ad\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4ece\u4e2d\u65ad\u5904\u7406\u5668\u53d1\u9001\u4e00\u6761\u6d88\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void BT_DataAvailable_Handler(void)\n{\n  os_send_message(bt_data_queue, data_available_message);\n}\n")),(0,r.kt)("p",null,"\u9664\u4e86\u961f\u5217\uff0c\u8fd8\u6709\u5176\u4ed6\u540c\u6b65\u7684\u7b56\u7565\u53ef\u7528\u3002 \u4f8b\u5982\uff0c\u8bb8\u591a\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u90fd\u6709\u4fe1\u53f7\u91cf\u548c\u4e92\u65a5\u91cf\u3002"),(0,r.kt)("h3",m({},{id:"freertos"}),"FreeRTOS"),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u671f\u95f4\uff0cTouchGFX\u7684\u6d4b\u8bd5\u662f\u57fa\u4e8eFreeRTOS\u64cd\u4f5c\u7cfb\u7edf\u7684\u3002 TouchGFX\u5bf9\u7cfb\u7edf\u7684\u8981\u6c42\u975e\u5e38\u5c11\u5e76\u80fd\u5728\u8bb8\u591a\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\uff0c\u4f46FreeRTOS\u662f\u4e00\u4e2a\u5f88\u597d\u4e0a\u624b\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u9664\u975e\u60a8\u6709\u5176\u5b83\u7279\u522b\u7684\u8981\u6c42\u3002"),(0,r.kt)("p",null,"FreeRTOS\u662f\u4e00\u79cd\u7b80\u5355\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5728\u5546\u4e1a\u5e94\u7528\u4e2d\u53ef\u514d\u8d39\u4f7f\u7528\u3002 \u5b83\u4ee5\u6e90\u4ee3\u7801\u7684\u5f62\u5f0f\u968fSTM32Cube\u56fa\u4ef6\u4e00\u8d77\u4f9b\u5e94\uff0c\u4e3a\u6240\u6709STM32\u5fae\u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u53ef\u76f4\u63a5\u4f7f\u7528\u7684\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u8bf7\u8bbf\u95ee",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.freertos.org/"}),"freertos.org"),"\u4e86\u89e3FreeRTOS\u7684\u66f4\u591a\u4fe1\u606f\u548c\u8bb8\u53ef\u6761\u6b3e\u3002"),(0,r.kt)("h3",m({},{id:"touchgfx-os-wrappers"}),"TouchGFX OS Wrappers"),(0,r.kt)("p",null,"TouchGFX\u9ed8\u8ba4\u914d\u7f6e\u662f\u5728FreeRTOS\u4e0a\u8fd0\u884c\uff0c\u4f7f\u7528\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u5b9e\u73b0\u4e0e\u663e\u793a\u5c4f\u63a7\u5236\u5668\u7684\u540c\u6b65\uff0c\u5e76\u4f7f\u7528\u4fe1\u53f7\u91cf\u4fdd\u62a4\u5bf9\u5e27\u7f13\u51b2\u7684\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u901a\u8fc7\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/os/OSWrappers.cpp"),"\u4e2d\u5b9a\u4e49\u7684OSWrappers\u7c7b\u6765\u5904\u7406\u7684\u3002 \u8fd9\u4e2a\u7c7b\u5177\u6709\u4e0b\u5217\u65b9\u6cd5\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u65b9\u6cd5"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"signalVSync()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5e94\u5728\u663e\u793a\u5c4f\u4e3a\u4e0b\u4e00\u5e27\u505a\u597d\u51c6\u5907\u65f6\u4ece\u663e\u793a\u5c4f\u9a71\u52a8\u8c03\u7528\u6b64\u65b9\u6cd5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"waitForVSync()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u7531\u56fe\u5f62\u5f15\u64ce\u8c03\u7528\u7528\u4e8e\u7b49\u5f85\u3002 \u5728signalVSync\u88ab\u8c03\u7528\u524d\u4e0d\u5e94\u8fd4\u56de\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"isVSyncAvailable()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uff08\u53ef\u9009\uff09\u5982\u679c\u53d1\u751f\u4e86VSync\uff0c\u5219\u8fd4\u56detrue\u3002 \u5728waitForVSync\u4e2d\u53ef\u7528\u4e8e\u907f\u514d\u963b\u585e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"signalRenderingDone()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uff08\u53ef\u9009\uff09\u5220\u9664\u4efb\u4f55\u672a\u5904\u7406\u7684VSync\u4fe1\u53f7\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"takeFrameBufferSemaphore()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u7531\u56fe\u5f62\u5f15\u64ce\u548c\u52a0\u901f\u5668\u8c03\u7528\uff0c\u7528\u6765\u83b7\u53d6\u5bf9\u5e27\u7f13\u51b2\u7684\u76f4\u63a5\u8bbf\u95ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"giveFrameBufferSemaphore()"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u7528\u4e8e\u518d\u6b21\u91ca\u653e\u76f4\u63a5\u8bbf\u95ee\u65f6\u88ab\u8c03\u7528\u3002")))),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5b9e\u73b0\u662f\u4f7f\u7528\u6d88\u606f\u961f\u5217\u5b9e\u73b0VSync\uff08\u5e27\uff09\u540c\u6b65\u3002 \u5728\u4e0b\u4e00\u4e2aVSync\u5230\u8fbe\u524d\uff0c\u56fe\u5f62\u5f15\u64ce\u4efb\u52a1\u4f11\u7720\u3002"),(0,r.kt)("p",null,"\u6b64OSWrapper\u7c7b\u7531TouchGFX Generator\u751f\u6210\u3002 \u70b9\u51fb\u6b64\u5904\u9605\u8bfb\u5173\u4e8eGenerator\u7684\u66f4\u591a\u5185\u5bb9\u3002 ",(0,r.kt)("a",m({parentName:"p"},{href:"../development/touchgfx-hal-development/touchgfx-generator#real-time-operating-system"}),"here"),"."),(0,r.kt)("h2",m({},{id:"no-rtos"}),"\u65e0RTOS"),(0,r.kt)("p",null,"TouchGFX\u8fd8\u53ef\u4ee5\u5728\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5fc5\u987b\u5728\u4e3b\u51fd\u6570\u4e2d\u76f4\u63a5\u5f00\u59cb\u56fe\u5f62\u5f15\u64ce\u4e3b\u5faa\u73af\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"int main()\n{\n    ...\n    touchgfx::HAL::getInstance()->taskEntry();\n\n    //never returns\n}\n")),(0,r.kt)("p",null,"\u4e0d\u4f7f\u7528RTOS\u5e76\u4e0d\u4f1a\u964d\u4f4eTouchGFX\u7684\u6027\u80fd\u3002 \u53ef\u80fd\u4f1a\u589e\u52a0MCU\u8d1f\u8f7d\uff0c\u5e76\u589e\u52a0\u4e0eTouchGFX\u4e00\u8d77\u8fd0\u884c\u5176\u4ed6\u4efb\u52a1\u7684\u96be\u5ea6\u3002"),(0,r.kt)("p",null,"\u5982\u4e0a\u6587\u6240\u8ff0\uff0c\u73b0\u5728\u60a8\u9700\u8981\u5728\u4e3b\u51fd\u6570\u4e2d\u7528\u6237\u754c\u9762\u8fd0\u884c\u65f6\u624b\u52a8\u63a7\u5236\u5176\u4ed6\u7684\u4efb\u52a1\u3002"),(0,r.kt)("h3",m({},{id:"modeltick"}),"Model::tick"),(0,r.kt)("p",null,"\u4e00\u79cd\u65b9\u5f0f\u662f\u5728\u6bcf\u4e00\u5e27\u4e2d\u7684Model\u7c7b\u4e2d\u68c0\u67e5\u6240\u6709\u7684\u4efb\u52a1\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Model::tick()\n{\n   //run other tasks here\n   music_task_tick();\n   bluetooth_task_tick();\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u65b9\u6cd5\u53ef\u5728\u6bcf\u4e00\u5e27\u5c06\u6240\u6709\u4efb\u52a1\u6267\u884c\u4e00\u6b21\u3002 \u4efb\u52a1\u6d88\u8017\u7684\u65f6\u95f4\u4f1a\u88ab\u6dfb\u52a0\u5230\u7528\u6237\u754c\u9762\u7684\u6e32\u67d3\u65f6\u95f4\u4e2d\u53bb\u3002 \u5bf9\u4e8e\u6240\u6709\u4efb\u52a1\u5747\u53ef\u5feb\u901f\u7ed3\u675f\u7684\u7b80\u5355\u7cfb\u7edf\u800c\u8a00\uff0c\u8fd9\u662f\u4e00\u79cd\u7b80\u5355\u4e14\u53ef\u63a5\u53d7\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h3",m({},{id:"oswrappers"}),"OSWrappers"),(0,r.kt)("p",null,"\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u5728OSWrappers\u7c7b\u4e2d\u4f7f\u7528\u94a9\u5b50\u51fd\u6570\u3002 \u5982\u4e0a\u6587\u6240\u8ff0\uff0c\u56fe\u5f62\u5f15\u64ce\u5728\u9700\u8981\u7b49\u5f85\u4e8b\u4ef6\u65f6\u8c03\u7528\u6b64\u7c7b\u4e0a\u7684\u65b9\u6cd5\u3002 \u60a8\u53ef\u4ee5\u5728\u7b49\u5f85\u6240\u8ff0\u4e8b\u4ef6\u65f6\u4f7f\u7528\u6b64\u65b9\u6cd5\u6267\u884c\u5176\u4ed6\u5de5\u4f5c\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"static volatile uint8_t vsync_sem = 0;\n\nvoid OSWrappers::signalVSync()\n{\n    vsync_sem = 1;\n}\n\nvoid OSWrappers::waitForVSync()\n{\n    vsync_sem = 0; //clear the flag, so we wait for the next vsync\n    do {\n        // Perform other work while waiting\n        music_task_tick();\n        bluetooth_task_tick();\n    } while(!vsync_sem);\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u65b9\u6cd5\u65f6\uff0c\u5176\u4ed6\u4efb\u52a1\u53ef\u4ee5\u5145\u5206\u4f7f\u7528\u5e27\u95f4\u7684\u7a7a\u95f2\u4efb\u52a1\uff0c\u4f46\u4efb\u52a1\u53ef\u7528\u7684\u65f6\u95f4\u4f1a\u4e0d\u4e00\u6837\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528OSWrappers::isVSyncAvailable\u548cOSWrappers::signalRenderingDone\u51fd\u6570\u3002 \u8fd9\u5c06\u5e2e\u52a9\u5e94\u7528\u907f\u514d\u62e5\u6709\u591a\u4e2awhile\u5faa\u73af\u3002 \u5f53\u9009\u62e9\u65e0\u64cd\u4f5c\u7cfb\u7edf\u914d\u7f6e\u65f6\uff0cTouchGFXGenerator\u5c06\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u4efb\u52a1\u5fc5\u987b\u80fd\u591f\u5c06\u5176\u5de5\u4f5c\u5206\u5272\u6210\u65f6\u957f\u5927\u69821\u6beb\u79d2\u7684\u5c0f\u6b65\u9aa4\u3002 \u5426\u5219\uff0c\u5c06\u5f71\u54cd\u7528\u6237\u754c\u9762\u6027\u80fd\u3002"))}v.isMDXComponent=!0}}]);