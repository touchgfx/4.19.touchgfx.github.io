"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2999],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),f=l(n),h=o,p=f["".concat(s,".").concat(h)]||f[h]||c[h]||a;return n?i.createElement(p,r(r({ref:t},u),{},{components:n})):i.createElement(p,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22425:function(e,t,n){var i=n(67294);class o extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var i=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,r=(0,o.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:n,height:a,src:r})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:n,height:a,src:r})),i.createElement("p",null,e.children))}},82985:function(e,t,n){var i=n(67294);class o extends i.Component{render(){return i.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},47013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return k}});var i=n(3905),o=n(22425),a=n(44035),r=n(82985),d=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))f.call(t,n)&&h(e,n,t[n]);return e};const m={id:"video",title:"MJPEG Video"},g=void 0,v={unversionedId:"development/ui-development/touchgfx-engine-features/video",id:"development/ui-development/touchgfx-engine-features/video",title:"MJPEG Video",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/video.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/video",permalink:"/4.19/ja/docs/development/ui-development/touchgfx-engine-features/video",tags:[],version:"current",frontMatter:{id:"video",title:"MJPEG Video"},sidebar:"docs",previous:{title:"\u8a00\u8a9e\u3068\u6587\u5b57",permalink:"/4.19/ja/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"},next:{title:"UI Components",permalink:"/4.19/ja/docs/category/ui-components"}},b={},k=[{value:"MJPEG video",id:"mjpeg-video",level:2},{value:"Using Video with TouchGFX",id:"using-video-with-touchgfx",level:2},{value:"Video files in a TouchGFX project",id:"video-files-in-a-touchgfx-project",level:3},{value:"Using video files from user code",id:"using-video-files-from-user-code",level:3},{value:"List of video enabled development kits",id:"list-of-video-enabled-development-kits",level:2},{value:"Creating MJPEG AVI files",id:"creating-mjpeg-avi-files",level:2},{value:"Using FFMPEG",id:"using-ffmpeg",level:3},{value:"Decoding Strategies",id:"decoding-strategies",level:2},{value:"Direct To Frame Buffer",id:"direct-to-frame-buffer",level:3},{value:"Dedicated Buffer",id:"dedicated-buffer",level:3},{value:"Double Buffer",id:"double-buffer",level:3},{value:"Video frame rate and user interface frame rate",id:"video-frame-rate-and-user-interface-frame-rate",level:3},{value:"Related articles",id:"related-articles",level:2}],y={toc:k};function w(e){var t,n=e,{components:d}=n,h=((e,t)=>{var n={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&u)for(var i of u(e))t.indexOf(i)<0&&f.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=p(p({},y),h),s(t,l({components:d,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"TouchGFX supports using MJPEG video starting from version 4.18. Video can be used to create more alive user interfaces or to show short instructions or user guides."),(0,i.kt)("p",null,"Video is included in the user interface through the Video widget. This widget is available in the TouchGFX Designer and can be added to the user interface as any other widget."),(0,i.kt)(a.Z,{width:"60%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/designer-1.png",mdxType:"Figure"},"Using the Video widget in TouchGFX Designer"),(0,i.kt)("p",null,"Extra support software is required to decode the video on a STM32 microcontroller. This software is easily included in the project by enabling video support in the TouchGFX Generator. With a TouchGFX Board Setup where video is enabled (see list below) it is easy to run the video on the target by pressing Run Target (",(0,i.kt)(r.Z,{mdxType:"Shortcut"},"F6"),") as normal."),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/stm32f746-1.png",mdxType:"Figure"},"Using the Video widget with STM32F746Discovery"),(0,i.kt)("p",null,"If you don't have video support in your target code, you will get compile or linker errors."),(0,i.kt)("h2",p({},{id:"mjpeg-video"}),"MJPEG video"),(0,i.kt)("p",null,"MJPEG videos consists of a large number of JPEG images (frames) packed in a container file (.avi). The JPEG frames cannot be copied directly to the framebuffer as they are compressed. The individual frames must be decompressed into RGB format (16 or 24 bit) before they can be shown on the display."),(0,i.kt)("p",null,"This decompression is computationally expensive and lowers the performance (i.e. frames per second) considerably compared to using RGB bitmaps."),(0,i.kt)("p",null,"The advantage of the JPEG compression is the much reduced size of the data."),(0,i.kt)("p",null,"The video used in the above screenshots is 240 x 135 pixel. This means that each frame in 16-bit RGB format would take up 240 x 135 x 2 bytes = 64.800 bytes. The video contains 178 frames (approximately seven seconds). The total size of the video stored as bitmap would thus be 178 x 64.800 bytes = 11.534.400 bytes. The MJPEG AVI file is only 1.242.282 bytes or 10.7 % of the bitmaps."),(0,i.kt)("p",null,"This size reduction makes MJPEG video files very usefull for small sequences of video."),(0,i.kt)("p",null,"The reduced size comes with some compression artifacts (errors). These are often acceptable for real-world footage but can be unacceptable for high contrast graphics."),(0,i.kt)("p",null,"Some STM32 microcontrollers supports hardware accelerated decoding of JPEG images (e.g. STM32F769 or STM32H750). This speeds up the decoding of JPEG and increases the possible framerate of the video."),(0,i.kt)("p",null,"The decoding of a JPEG frame can easily take more than 16ms (depends on the MCU speed and the video resolution). This means that the decoding rate of a MJPEG video in most cases is lower than the normal frame rate of the user interface. For some applications it is acceptable to lower the overall frame rate to the decoding rate. For others it is required to keep the 60 fps frame rate of the user interface even if the video runs at e.g. 20 fps. An example is an application with an animated progress circle next to a video. The circle looks best if it is animated with 60 fps, even if the video only shows a new frame at 20 fps."),(0,i.kt)("p",null,"The above example on STM32F746 uses 18-20 ms for decoding the individual JPEG frames."),(0,i.kt)("h2",p({},{id:"using-video-with-touchgfx"}),"Using Video with TouchGFX"),(0,i.kt)("p",null,"TouchGFX makes it easy to include a video as part of your user interface. You need three things: A Video widget, a VideoController, and of course your MJPEG video file."),(0,i.kt)("p",null,"The Video widget is used in your user interface as all other widgets. The video controller is part of the low level software that makes up a full TouchGFX environment (HAL, Operating System, drivers, etc.)"),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/video-sw-architecture.png",mdxType:"Figure"},"Video widget and Video Controller"),(0,i.kt)("p",null,"The VideoController consists of software that controls the decoding of the MJPEG file and buffer management."),(0,i.kt)("p",null,'The TouchGFX Designer automatically includes a video controller into all simulator projects. This makes it very easy to use video in simulator prototypes: Just add a Video widget, select a video file, and press "Run Simulator" (',(0,i.kt)(r.Z,{mdxType:"Shortcut"},"F5"),")."),(0,i.kt)("p",null,"To use video on hardware you also need a video controller in the target project (IAR, Keil, arm-gcc, CubeIDE). This is already added to some of the TouchGFX Board Specification packages (see list below), but you can add video support any project with the TouchGFX Generator. See the ",(0,i.kt)("a",p({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#video-decoding"}),"Generator User Guide"),"."),(0,i.kt)("p",null,"When you have a video enabled platform it is easy to add and configure the Video widget in the Designer. The use of Video widget in the Designer is detailed ",(0,i.kt)("a",p({parentName:"p"},{href:"../ui-components/miscellaneous/video"}),"here"),"."),(0,i.kt)("h3",p({},{id:"video-files-in-a-touchgfx-project"}),"Video files in a TouchGFX project"),(0,i.kt)("p",null,"When you include a video file in TouchGFX Designer it copies the .avi file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/vidoes")," folder. During code generation the video is copied to ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/videos/bin")," as a .bin file and to ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/videos/obj")," as a .o file. The .o and .bin contains the same data, but the .o file is ELF format (which is preferred by some compilers and IDE's)."),(0,i.kt)("p",null,"The project updaters that are executed when generating code includes the video files in the target project. This means that the video files are linked into the executable and are available in the application."),(0,i.kt)("p",null,"The application programmer can add other videos to the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos")," folder. These will also be included in the project."),(0,i.kt)("p",null,"The file ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/videos/include/videos/VideoDatabase.hpp")," contains symbolic information about the videos compiled into application:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{}),"const uint32_t video_SampleVideo1_240x135_bin_length = 1242282;\n#ifdef SIMULATOR\nextern const uint8_t* video_SampleVideo1_240x135_bin_start;\n#else\nextern const uint8_t video_SampleVideo1_240x135_bin_start[];\n#endif\n")),(0,i.kt)("p",null,"These declarations can be used to assign the video to a Video widget in user code."),(0,i.kt)("h3",p({},{id:"using-video-files-from-user-code"}),"Using video files from user code"),(0,i.kt)("p",null,"In some projects it is not sufficient to select a video from within the TouchGFX Designer. E.g. you want to select different videos at startup. First you must add the video file to ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos"),":"),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/myvideo-in-assets.png",mdxType:"Figure"},"Adding a video to assets/videos"),(0,i.kt)("p",null,"The video files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos")," folder will be included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"VideoDatabase.hpp")," when you generate code (or run make assets):"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{}),"const uint32_t video_myVideo_bin_length = 1242282;\n#ifdef SIMULATOR\nextern const uint8_t* video_myVideo_bin_start;\n#else\nextern const uint8_t video_myVideo_bin_start[];\n#endif\n")),(0,i.kt)("p",null,"We can now use these declarations in user code to get the Video widget to play our movie:"),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,12-14}","{2-2,12-14}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <videos/VideoDatabase.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    video.setVideoData(video_myVideo_bin_start, video_myVideo_bin_length);\n    video.setWidthHeight(240, 136);\n    video.play();\n}\n")),(0,i.kt)("p",null,"Note that the video data is now linked into the application. It is possible to avoid this by not putting any videoes in ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos")," and manually flash the video to a dedicated area in the external flash. Then just pass the address and length using the flash address:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::setupScreen()\n{\n   ...\n   video.setVideoData((const uint8_t*)0xA0200000, 1242282);\n   ...\n}\n")),(0,i.kt)("h2",p({},{id:"list-of-video-enabled-development-kits"}),"List of video enabled development kits"),(0,i.kt)("p",null,"These development kits have video enabled by default in TouchGFX Board Setup package available in the TouchGFX Designer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"STM32F769Discovery (hardware accelerated decoding)"),(0,i.kt)("li",{parentName:"ul"},"STM32H750BDiscovery (hardware accelerated decoding)"),(0,i.kt)("li",{parentName:"ul"},"STM32F746Discovery (software based decoding)")),(0,i.kt)("p",null,"If you are using another development kit or custom hardware, remember to enable video support in the TouchGFX Generator."),(0,i.kt)("h2",p({},{id:"creating-mjpeg-avi-files"}),"Creating MJPEG AVI files"),(0,i.kt)("p",null,"Most videos are not stored in MJPEG AVI files as this is not a common video format anymore. It is therefore often necessary to convert a video file to MJPEG format before using it in a TouchGFX project."),(0,i.kt)("p",null,"Conversion can easily be done with for example ",(0,i.kt)("a",p({parentName:"p"},{href:"https://en.wikipedia.org/wiki/FFmpeg"}),"FFMPEG"),". Other applications and online services are also available."),(0,i.kt)("h3",p({},{id:"using-ffmpeg"}),"Using FFMPEG"),(0,i.kt)("p",null,"Windows binaries for FFMPEG can be found ",(0,i.kt)("a",p({parentName:"p"},{href:"https://www.gyan.dev/ffmpeg/builds/"}),"here"),"."),(0,i.kt)("p",null,"To convert the video file input.mov to MJPEG use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{}),"ffmpeg -i input.mov -s 480x272 -vcodec mjpeg -qscale 1 -an output.avi\n")),(0,i.kt)("p",null,"The MJPEG video is in the output.avi file. This file can be copied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos"),"."),(0,i.kt)("p",null,"To keep the correct aspect ratio of the video you can specify the width in pixels (here 480) and the height as '-1' (minus 1):"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{}),"ffmpeg -i input.mov -vf scale=480:-1 -vcodec mjpeg -qscale 1 -an output.avi\n")),(0,i.kt)("p",null,"It is possible to cut out a section of a video using -ss to specify start time and -t or -to to specify duration or stop time:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{}),"ffmpeg -ss 3 -i input.mov -t 3 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{}),"ffmpeg -ss 3 -i input.mov -to 5 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Option"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"-s"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Output video resolution")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"-qscale"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"quality scale from 1..31 (from good to bad)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"-an"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Strip audio")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"-vf"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Set filter graph")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"-ss"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Start time in seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"-t"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Duration in seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"-to"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Stop time in seconds")))),(0,i.kt)("h2",p({},{id:"decoding-strategies"}),"Decoding Strategies"),(0,i.kt)("p",null,"As mentioned above, TouchGFX needs to convert the individual MJPEG frames from JPEG to RGB before showing them on the framebuffer. This decoding can be done either on-the-fly when needed or asynchronous by decoding the next frame to a video buffer in advance."),(0,i.kt)("p",null,"The asynchronous decoding is done by second task, not the UI task. This means that the decoding in some cases can run in parallel with the UI task's drawing."),(0,i.kt)("p",null,"TouchGFX has 3 strategies, each with advantages and disadvantages:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Strategy"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Direct To Frame Buffer"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Decode the current video frame directly to the framebuffer when needed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Dedicated Buffer"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Decode the next video frame to a video buffer. Copy from the video buffer to the frame buffer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Double Buffer"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Decode the next video frame to a second video buffer. Swap video buffers when decoding is done")))),(0,i.kt)("p",null,"The Designer always select the Direct To Frame Buffer strategy for simulator projects. The strategy used on target is configurable in the ",(0,i.kt)("a",p({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#video-decoding"}),"Generator"),"."),(0,i.kt)("p",null,"The strategies are explained in detail below."),(0,i.kt)("h3",p({},{id:"direct-to-frame-buffer"}),"Direct To Frame Buffer"),(0,i.kt)("p",null,"The Direct To Frame Buffer strategy decodes a JPEG frame during the rendering phase on the TouchGFX engine (see ",(0,i.kt)("a",p({parentName:"p"},{href:"../../../basic-concepts/rendering#render"}),"Rendering"),")"),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/direct-decode.png",mdxType:"Figure"},"Decoding directly to the frame buffer"),(0,i.kt)("p",null,"During the Update phase (see ",(0,i.kt)("a",p({parentName:"p"},{href:"../../../basic-concepts/rendering#update"}),"Update"),') the Video widget decides if the movie should be advanced to the next frame. During the following Rendering phase, the JPEG frame is decoded line-by-line to a "line buffer". The pixels are then converted to match the frame buffer format and copied to the framebuffer.'),(0,i.kt)("p",null,"If the Video widget is covered by other widgets it is redrawn in multiple block (the visible parts are split into rectangles). Drawing each of these blocks requires repeated decompression work. This makes this strategy unsuitable for user interface where other UI elements like Buttons are put on top of the video as the decoding time is increased."),(0,i.kt)("p",null,"The advantage of this solution is that only a little extra memory is used."),(0,i.kt)("h3",p({},{id:"dedicated-buffer"}),"Dedicated Buffer"),(0,i.kt)("p",null,"The Dedicated or single buffer decoding strategy decodes a JPEG frame to a dedicated RGB buffer first, and then later copies from that buffer to the frame buffer."),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/single-buf-decode.png",mdxType:"Figure"},"Decoding to a separate buffer"),(0,i.kt)("p",null,"Opposed to the direct strategy the decoding now runs in a separate task, not the normal TouchGFX task. The Video widget calculates if a new movie frame should be shown in the next user interface tick and signals the decoding task to start decoding the next frame. During this decoding the video buffer cannot be drawn to the frame buffer (it is partly updated). The user interface is blocked from redrawing the video widget while the decoding is running. When the drawing is done, it will continue. If the user interface does not need to redraw the video, the user interface can continue as normal."),(0,i.kt)("p",null,"When the new video is fully decoded, the cost of rendering the video to the framebuffer is the same as drawing a bitmap (low). With this strategy it is therefore not a problem to put buttons or text on top of the video."),(0,i.kt)("p",null,"The disadvantage of this strategy the memory used by the task and the video buffer."),(0,i.kt)("h3",p({},{id:"double-buffer"}),"Double Buffer"),(0,i.kt)("p",null,"The double buffered decoding strategy has two RGB buffers. The decoding is done into either of these buffers, whereas the rendering to the frame buffer happens from the other RGB buffer."),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/double-buf-decode.png",mdxType:"Figure"},"Decoding to two video buffers"),(0,i.kt)("p",null,"When a frame is decoded, the decoding task waits for the UI to show that video buffer and release the previous buffer. The decoding of the next frame can start as soon as the user interface has changed buffer."),(0,i.kt)("p",null,"An obvious disadvantage for this strategy is the memory usage which is doubled from the previous strategy."),(0,i.kt)("h3",p({},{id:"video-frame-rate-and-user-interface-frame-rate"}),"Video frame rate and user interface frame rate"),(0,i.kt)("p",null,"The decoding strategies has different effects on the user interface frame rate. The user interface frame rate is the number of (different) frames produced in the framebuffer per second."),(0,i.kt)("p",null,"With the direct to framebuffer strategy, the decoding speed of the video easily affects the effective frame rate of the user interface. Assume as an example that the decoding of one JPEG frame takes 28 ms, and that we want to show 20 video frames each second (20 fps). This is realistic as the total decoding time is: 28 ms x 20/s = 560 ms/s.  The 20 fps corresponds to a new video frame in every third frame (of 60 fps). So in every third UI frame we want a new video frame, but as the decoding time is part of the rendering phase, the rendering of that frame takes 28 ms plus the rendering of the rest of the user interface, say 2 ms. The total rendering of the frame is 30 ms and we lost one tick, but are ready to produce a new frame for the next tick. In this next frame we are not decoding video, so here the rendering is below 16 ms and meets the limit. We can then start decoding the second video frame in the fourth tick."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/video/direct-video-20fps.png",mdxType:"Figure"},"20 fps video"),(0,i.kt)("p",null,"The video frame rate is therefore 20 fps, and the user interface frame rate is 40 (out of 60 possible)."),(0,i.kt)("p",null,"The result is that we cannot animate other elements of the UI with 60 fps because the video decoding limits the frame rate."),(0,i.kt)("p",null,"With the double buffer decoding strategy this is improved. The user interface always has a video buffer available with the latest frame. The decoder task can swap this buffer with the other buffer (containing the next frame) when it is available and the rendering thread is not actively drawing. After the swap the decoding task can immediately start decoding the next frame:"),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/video/double-video-20fps.png",mdxType:"Figure"},"20 fps video"),(0,i.kt)("p",null,"In UI frame 1 and 2 the UI is showing the first decoded video frame. Meanwhile the decoder is producing frame 2. In UI frame 3 this frame is ready and will be used. The decoder is free to start decoding the next frame (not shown in the figure)."),(0,i.kt)("p",null,"It is thus possible to have user interface with other elements updated in every frame, even if the video decoding is only able to produce a new frame every 2 ticks."),(0,i.kt)("h2",p({},{id:"related-articles"}),"Related articles"),(0,i.kt)("p",null,"As mentioned above the video support for target project is configured in the TouchGFX Generator. See the ",(0,i.kt)("a",p({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#video-decoding"}),"Generator User Guide")," for instructions."),(0,i.kt)("p",null,"The Video widget is available in the Designer. The use of Video widget in the Designer is detailed ",(0,i.kt)("a",p({parentName:"p"},{href:"../ui-components/miscellaneous/video"}),"here"),"."))}w.isMDXComponent=!0}}]);