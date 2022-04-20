"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7527],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=a},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},67310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return M},frontMatter:function(){return f},metadata:function(){return w},toc:function(){return k}});var r=n(3905),o=n(44035),i=n(29415),a=n(39130),l=n(22425),c=n(70814),u=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&g(e,n,t[n]);return e};const f={id:"01-create-project",title:"1. Create Project",sidebar_label:"1. Create Project"},y=void 0,w={unversionedId:"development/board-bring-up/how-to/01-create-project",id:"development/board-bring-up/how-to/01-create-project",title:"1. Create Project",description:"",source:"@site/docs/development/board-bring-up/how-to/01-create-project.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/01-create-project",permalink:"/4.19/docs/development/board-bring-up/how-to/01-create-project",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-create-project",title:"1. Create Project",sidebar_label:"1. Create Project"},sidebar:"docs",previous:{title:"Board Bring Up Introduction",permalink:"/4.19/docs/development/board-bring-up/board-introduction"},next:{title:"2. CPU Running",permalink:"/4.19/docs/development/board-bring-up/how-to/02-cpu-running"}},v={},k=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"User Code sections",id:"user-code-sections",level:3},{value:"Further reading",id:"further-reading",level:2}],C={toc:k};function M(e){var t,n=e,{components:u}=n,g=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},C),g),s(t,d({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("h2",b({},{id:"motivation"}),"Motivation"),(0,r.kt)("p",null,"In this section we will use STM32CubeMX to generate a working project for\na specific MCU. This project will be the basis for the rest of the\nsteps in this how-to guide."),(0,r.kt)("p",null,"We will refine the project using STM32CubeMX in coming steps and write and\nintegrate code to make all required peripherals work."),(0,r.kt)("p",null,"This project will be long lived and should be kept. You should now\ndecide on a strategy to keep the different versions available, so that\nyou can go back and run them again. Either on new hardware or just to\nrecheck the hardware."),(0,r.kt)("p",null,"Maybe you need many small test programs. In that case this project is\na good starting point."),(0,r.kt)("h2",b({},{id:"goal"}),"Goal"),(0,r.kt)("p",null,"The goal is to create a project in STM32CubeMX that can be flashed to your\nboard and executed. If you have an IDE with a debugger (e.g\nSTM32CubeIDE or IAR Embedded Workbench) you should also check that you\ncan debug and step through your project on the MCU."),(0,r.kt)("p",null,"If you do not have a debugger you should find a way to print out debug\nstatements from various places in your project. E.g. on a serial port."),(0,r.kt)("h3",b({},{id:"verification"}),"Verification"),(0,r.kt)("p",null,"Here are the verification points for this section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),"Verification Point"),(0,r.kt)("th",b({parentName:"tr"},{align:null}),"Rationale"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Project opens in IDE"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"The project was generated correctly by STM32CubeMX and can be used as starting point for further board bring up development.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Project compiles"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"The project is setup correctly with drivers and include paths. We can write more code and recompile the project repeatedly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Breakpoints are hit"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"The project can be debugged and stops at breakpoints. We can examine the project state and investigate errors.")))),(0,r.kt)("h2",b({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("p",null,"The following are the prerequisites for this step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32 based board"),(0,r.kt)("li",{parentName:"ul"},"Programming / debugging interface - ST-LINK, JLINK or similar"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX installed"),(0,r.kt)("li",{parentName:"ul"},"IDE installed - STM32CubeIDE, IAR Embedded Workbench, Keil uVision or similar")),(0,r.kt)("h2",b({},{id:"do"}),"Do"),(0,r.kt)("p",null,"We will now go through the steps of creating a new project in\nSTM32CubeMX. In this example we will use the STM32F429 MCU. You should of\ncourse select the MCU on your hardware."),(0,r.kt)("p",null,'In STM32CubeMX click "ACCESS TO MCU SELECTOR" in the "Start My Project from MCU":'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx01.png",noShadow:!1,width:"600",mdxType:"Figure"},"Create new Project"),(0,r.kt)("p",null,"It is also possible to start a new project based on a STM32 evaluation kit, e.g. the STM32F429Discovery board. You can/should do this if your hardware design is based on one of the evaluation kits."),(0,r.kt)("p",null,"We then select the relevant MCU. Here we select the STM32F429ZIT6U:"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx02.png",noShadow:!1,width:"600",mdxType:"Figure"},"Select the MCU"),(0,r.kt)("p",null,'Change to the "Project Manager" tab, and give your project a name. You\ncan of course also select a new project location. Under "Application\nStructure", select Advanced. Under "Toolchain / IDE" you must select\nyour IDE. For this example we select IAR:'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx03.png",noShadow:!1,width:"600",mdxType:"Figure"},"Set project name and IDE"),(0,r.kt)("p",null,'Now click the "Generate Code" button in the upper right corner. If this is\nyour first project for the selected MCU family (F4/F7/H7) STM32CubeMX\nautomatically proposes to download the relevant STM32Cube Firmware\npackage. Accept that to get the latest version for later use.'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx04.png",noShadow:!1,width:"600",mdxType:"Figure"},"STM32CubeMX can download STM32Cube Firmware"),(0,r.kt)("p",null,'Click "Open Project" to open the project in your IDE:'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx05.png",noShadow:!1,width:"600",mdxType:"Figure"},"The project is generated"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx06.png",noShadow:!1,width:"600",mdxType:"Figure"},"The project is opened in IAR Embedded Workbench"),(0,r.kt)("p",null,"The project generated by STM32CubeMX contains startup code specific to the MCU, interrupt table, system initialisation code, and HAL drivers for all the peripherals in the MCU."),(0,r.kt)("p",null,"The project can now be compiled and debugged from your IDE. In IAR we click Project->Make to compile the project, and Project->Download and Debug to debug the project:"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx07.png",noShadow:!1,width:"600",mdxType:"Figure"},"Debugging the project in IAR Embedded Workbench"),(0,r.kt)("p",null,"The IAR project is setup to use the STLink debugger. If you are using something else, then change the Debugger properties for the project in your IDE."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx08.png",noShadow:!1,width:"600",mdxType:"Figure"},"The main loop is running continuously"),(0,r.kt)("p",null,"The while loop in main is typically important in projects running\nwithout an operating system. Check that you get there by setting a\nbreakpoint and maybe add some code to the loop."),(0,r.kt)("p",null,"It is recommended to browse the project in your IDE to get familiar with\nthe structure. Try also to step from SystemInit to main."),(0,r.kt)("h3",b({},{id:"user-code-sections"}),"User Code sections"),(0,r.kt)("p",null,'At this step it is important to understand the concept of "User Code\nsections" used by STM32CubeMX before you start editing your project.\nAll of the source files in the Core/Src folder in your project are\ngenerated by STM32CubeMX. When you later change the project configuration\nin STM32CubeMX, e.g. to enable a UART, some of these files will be\nregenerated. You have probably also inserted code in some of these\nfiles. Your code will be lost when STM32CubeMX regenerates the project unless\nyou follow one single rule:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Only write code in User Code sections"))),(0,r.kt)("p",null,"Any code that you write outside of a User Code section will be deleted by STM32CubeMX."),(0,r.kt)("p",null,"As an example, let us look at the first few lines in Core/Src/main.c:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-5}","{3-5}":!0}),"int main(void)\n{\n  /* USER CODE BEGIN 1 */\n\n  /* USER CODE END 1 */\n\n\n  /* MCU Configuration--------------------------------------------------------*/\n\n  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */\n  HAL_Init();\n  ...\n}\n")),(0,r.kt)("p",null,"If you want to insert code here in the beginning of the main function,\nyou must put it between USER CODE BEGIN 1 and USER CODE END 1. If you put code\noutside this block it will be deleted by STM32CubeMX."),(0,r.kt)(c.Z,{mdxType:"Caution"},"Do not write code outside User Code sections. Such code will be removed when STM32CubeMX generates code."),(0,r.kt)("h2",b({},{id:"further-reading"}),"Further reading"),(0,r.kt)("p",null,"The documents linked here contains more information about CubeMX:"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(a.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX User Manual")),(0,r.kt)("li",null,(0,r.kt)(a.Z,{to:"https://www.st.com/en/development-tools/stm32cubeide.html#resource",mdxType:"Link"},"STM32CubeIDE resources")),(0,r.kt)("li",null,(0,r.kt)(a.Z,{to:"https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",mdxType:"Link"},"Massive Open Online Course on STM32CubeMX and STM32Cube")))))}M.isMDXComponent=!0}}]);