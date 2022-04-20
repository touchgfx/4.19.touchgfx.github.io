"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6215],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,h=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},65407:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){var t,n;const o=(0,a.Z)(e.url),i=null!=(t=e.width)?t:"100%",l=null!=(n=e.height)?n:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:i,height:l},r.createElement("source",{src:o,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},82985:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=a},16255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return y}});var r=n(3905),a=n(44035),o=n(82985),i=n(65407),l=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&f(e,n,t[n]);return e};const d={id:"simulator",title:"Simulator"},g=void 0,k={unversionedId:"development/ui-development/working-with-touchgfx/simulator",id:"development/ui-development/working-with-touchgfx/simulator",title:"Simulator",description:"",source:"@site/docs/development/ui-development/working-with-touchgfx/simulator.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/simulator",permalink:"/4.19/docs/development/ui-development/working-with-touchgfx/simulator",tags:[],version:"current",frontMatter:{id:"simulator",title:"Simulator"},sidebar:"docs",previous:{title:"Widgets and Containers",permalink:"/4.19/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"},next:{title:"Compiling & Flashing",permalink:"/4.19/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"}},b={},y=[{value:"How To Run",id:"how-to-run",level:2},{value:"Using TouchGFX Designer",id:"using-touchgfx-designer",level:3},{value:"Using TouchGFX Environment",id:"using-touchgfx-environment",level:3},{value:"Simulator Features",id:"simulator-features",level:2},{value:"Simulator Only User Code",id:"simulator-only-user-code",level:2},{value:"Locking and unlocking the framebuffer",id:"locking-and-unlocking-the-framebuffer",level:2},{value:"Locking the framebuffer",id:"locking-the-framebuffer",level:3},{value:"Unlocking the framebuffer",id:"unlocking-the-framebuffer",level:3},{value:"Forgetting to unlock the framebuffer",id:"forgetting-to-unlock-the-framebuffer",level:3},{value:"Simulating hardware framebuffer with a different size than the display",id:"simulating-hardware-framebuffer-with-a-different-size-than-the-display",level:3}],v={toc:y};function w(e){var t,n=e,{components:l}=n,f=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},v),f),u(t,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Building a TouchGFX UI often involves a lot of tweeking of the graphics details to match the specification of the UI."),(0,r.kt)("p",null,"To speed up the development process it is important to have a fast turnaround time when trying out and debugging your application. Flashing a board can often take quite some time so doing this each time you have made a small change to your application will really slow down the development. To alleviate this, the TouchGFX PC simulator is a great addition to your development tools."),(0,r.kt)("p",null,"You simply compile your application for your PC and run the application there. The code executed is exactly the same as on target hardware except for the Board Bring Up code and Abstraction Layer which are made for the PC instead of your board. This means that you can test things like placement of widgets, interactions, animations, state machines and so on just as precise as on target hardware. You can even ",(0,r.kt)("a",h({parentName:"p"},{href:"debugging"}),"debug")," your code using IDEs like Visual Studio if you like. Of course things like performance analysis and interactions with real backend systems must be done on your board."),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/simulator/simulator-example.mp4",mdxType:"LoopVideo"},"Simulator example"),(0,r.kt)("h2",h({},{id:"how-to-run"}),"How To Run"),(0,r.kt)("h3",h({},{id:"using-touchgfx-designer"}),"Using TouchGFX Designer"),(0,r.kt)("p",null,'To launch the simulator from within TouchGFX Designer, simply press the "Run Simulator" button in the top right corner or press ',(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F5")," on your keyboard."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer-4.17.png",mdxType:"Figure"},"Launching the simulator from TouchGFX Designer"),(0,r.kt)("h3",h({},{id:"using-touchgfx-environment"}),"Using TouchGFX Environment"),(0,r.kt)("p",null,"To launch the simulator using the TouchGFX environment, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the TouchGFX Environment"),(0,r.kt)("li",{parentName:"ol"},"Navigate to the location of your TouchGFX application",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"for simulator only projects, this is e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"C:/TouchGFXProjects/MyApplication_1")),(0,r.kt)("li",{parentName:"ol"},"for target projects, this is e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"C:/TouchGFXProjects/MyApplication_1/TouchGFX/")))),(0,r.kt)("li",{parentName:"ol"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"make -f simulator/gcc/Makefile -j6")," to compile the simulator"),(0,r.kt)("li",{parentName:"ol"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"./build/bin/simulator.exe")," to launch the simulator")),(0,r.kt)("p",null,"Run steps 3 and 4 whenever you have made a change to your TouchGFX application."),(0,r.kt)("h2",h({},{id:"simulator-features"}),"Simulator Features"),(0,r.kt)("p",null,"Apart from capturing mouse input, the TouchGFX simulator also includes other useful features, listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Shortcut"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Feature"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F1")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Enables/disables display of pointer coordinates as well as RGB color of the pixel at that coordinate (in hexadecimal).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F2")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Enables/disables highlighting invalidated area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F3")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Takes a screenshot and places the image under the ",(0,r.kt)("inlineCode",{parentName:"td"},"screenshots")," folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + F3")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Takes screenshots of the next 50 frames and places the images under the ",(0,r.kt)("inlineCode",{parentName:"td"},"screenshots")," folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"SHIFT + F3")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Takes a screenshot and places it in your clipboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"If a simulator skin is used - enables/disables the simulator skin.",(0,r.kt)("br",null),"If a simulator skin is ",(0,r.kt)("i",null,"not")," used - enables/disables window border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F5")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Sends the application straight back to the startup screen by calling FrontendApplication::changeToStartScreen().")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F9")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Pauses the simulator by preventing ticks to be sent to the application. Pressing F9 again will resume normal execution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F10")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),'While the simulator is paused (after pressing F9) it is possible to send a single tick to the application by pressing F10 thereby "single step" the application.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"ESC")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Close the simulator.")))),(0,r.kt)("h2",h({},{id:"simulator-only-user-code"}),"Simulator Only User Code"),(0,r.kt)("p",null,"If you have some code that should only run when using TouchGFX simulator, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef SIMULATOR")," in your C++ code:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n  // Your simulator specific user code here\n#endif\n")),(0,r.kt)("p",null,"If you want to output a debug text to the console you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_printf")," function. This is a printf like function that will only be included when building simulator code and thus will not interfere when running on target hardware. Therefore there is no need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef SIMULATOR")," in this case."),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'int i = 0;\ntouchgfx_printf("Application is running through simulator! \\n");\ntouchgfx_printf("Print our value for integer i = %i \\n", i);\n')),(0,r.kt)("h2",h({},{id:"locking-and-unlocking-the-framebuffer"}),"Locking and unlocking the framebuffer"),(0,r.kt)("p",null,"If you write code that directly manipulates the framebuffer, it is important to lock the framebuffer before writing pixels to the framebuffer memory, and it is just as important to remember to unlock the framebuffer after having written to the framebuffer."),(0,r.kt)("h3",h({},{id:"locking-the-framebuffer"}),"Locking the framebuffer"),(0,r.kt)("p",null,"The framebuffer is locked using this code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint16_t* RESTRICT buf = HAL::getInstance()->lockFrameBuffer();\n")),(0,r.kt)("p",null,"For historical reasons the return value is a 16 bit pointer to the framebuffer. Cast the pointer to the appropriate pointer type for easier access to the framebuffer."),(0,r.kt)("h3",h({},{id:"unlocking-the-framebuffer"}),"Unlocking the framebuffer"),(0,r.kt)("p",null,"Use the following code to unlock the framebuffer after use:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"HAL::getInstance()->unlockFrameBuffer();\n")),(0,r.kt)("h3",h({},{id:"forgetting-to-unlock-the-framebuffer"}),"Forgetting to unlock the framebuffer"),(0,r.kt)("p",null,"If you forget to unlock the framebuffer, the hardware will freeze while waiting forever for the framebuffer to be available. To help detecting this situation, you will get an assert if the framebuffer is asked by the TouchGFX framework to be locked, while still being locked. The error will look like this from Microsoft Visual Studio:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/windows-unlock-framebuffer.png",mdxType:"Figure"},"Windows dialog when framebuffer is not unlocked"),(0,r.kt)("p",null,"For console programs, the error will look like this:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/console-unlock-framebuffer.png",mdxType:"Figure"},"Console printout when framebuffer is not unlocked"),(0,r.kt)("h3",h({},{id:"simulating-hardware-framebuffer-with-a-different-size-than-the-display"}),"Simulating hardware framebuffer with a different size than the display"),(0,r.kt)("p",null,"Some setups may have a display size which is smaller than the actual hardware's framebuffer. This can also be handled by the simulater, and is configured in the file simulator/main.cpp right after the call to touchgfx_generic_init()."),(0,r.kt)("p",null,"The width and height passed to touchgfx_generic_init() defines the size of the display and the framebuffer, but if the hardware framebuffer has a different size, simply call setFrameBufferSize() after calling touchgfx_generic_init() to specify the size of the actual framebuffer, e.g. as follows where SIM_WIDTH=800 and SIM_HEIGHT==480:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"touchgfx::HAL& hal = touchgfx::touchgfx_generic_init<touchgfx::HALSDL2>(dma, lcd, tc, SIM_WIDTH, SIM_HEIGHT, 0, 0);\nhal.setFrameBufferSize(832, 480); // Hardware framebuffer is wider\n")))}w.isMDXComponent=!0}}]);