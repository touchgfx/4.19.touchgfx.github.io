"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[88],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||r;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var i=n(67294);class a extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=a},88678:function(e,t,n){var i=n(67294);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var i=n(67294),a=n(88678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=o},39130:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(67294),a=n(73727),r=n(11368),o=n(35096),l=n(84487);const c=(0,i.createContext)({collectLink:()=>{}});var d=n(25026),s=n(67023),p=Object.defineProperty,u=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&b(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:p,to:b,href:y,activeClassName:w,isActive:x,"data-noBrokenLinkCheck":k,autoAddBaseUrl:P=!0}=n,B=((e,t)=>{var n={};for(var i in e)h.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&m)for(var i of m(e))t.indexOf(i)<0&&g.call(e,i)&&(n[i]=e[i]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:M}}=(0,r.Z)(),{withBaseUrl:F}=(0,d.C)(),_=(0,i.useContext)(c),E=b||y,T=(0,o.Z)(E),j=null==E?void 0:E.replace("pathname://","");let C=void 0!==j?(L=j,P&&(e=>e.startsWith("/"))(L)?F(L):L):void 0;var L;C&&T&&(C=(0,s.applyTrailingSlash)(C,{trailingSlash:O,baseUrl:M}));const H=(0,i.useRef)(!1),I=p?a.OL:a.rU,N=l.Z.canUseIntersectionObserver,A=(0,i.useRef)();(0,i.useEffect)((()=>(!N&&T&&null!=C&&window.docusaurus.prefetch(C),()=>{N&&A.current&&A.current.disconnect()})),[A,C,N,T]);const D=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,S=!C||!T||D;return C&&T&&!D&&!k&&_.collectLink(C),S?i.createElement("a",v(v({href:C},E&&!T&&{target:"_blank",rel:"noopener noreferrer"}),B)):i.createElement(I,v((Z=v({},B),u(Z,f({onMouseEnter:()=>{H.current||null==C||(window.docusaurus.preload(C),H.current=!0)},innerRef:e=>{var t,n;N&&e&&T&&(t=e,n=()=>{null!=C&&window.docusaurus.prefetch(C)},A.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.current.unobserve(t),A.current.disconnect(),n())}))})),A.current.observe(t))},to:C||""}))),p&&{isActive:x,activeClassName:w}));var Z}},35096:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return o}});var i=n(11368),a=n(35096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:i}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),r="/"===a||a===i?a:(o=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,r)}},67023:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(a).default}});var r=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(r).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},11033:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return w}});var i=n(3905),a=n(39130),r=n(93054),o=n(22425),l=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&f(e,n,t[n]);return e};const h={id:"loading-images-at-runtime",title:"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf"},g=void 0,b={unversionedId:"development/ui-development/scenarios/loading-images-at-runtime",id:"development/ui-development/scenarios/loading-images-at-runtime",isDocsHomePage:!1,title:"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf",description:"In this section we will discuss a method for loading images from a file in your TouchGFX application.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/loading-images-at-runtime.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/loading-images-at-runtime",permalink:"/4.19/zh-TW/docs/development/ui-development/scenarios/loading-images-at-runtime",tags:[],version:"current",frontMatter:{id:"loading-images-at-runtime",title:"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf"},sidebar:"docs",previous:{title:"\u7528\u53ef\u7de9\u5b58\u5bb9\u5668\u5be6\u73fe\u66f4\u512a\u6027\u80fd",permalink:"/4.19/zh-TW/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"},next:{title:"\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\u6e1b\u5c11\u5b58\u5132\u7a7a\u9593\u6d88\u8017",permalink:"/4.19/zh-TW/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"}},v=[{value:"Loading BMP file Example",id:"loading-bmp-file-example",children:[{value:"BMP\u8f09\u5165\u5668",id:"the-bmp-loader",children:[],level:3}],level:2},{value:"\u70ba\u52d5\u614b\u9ede\u9663\u5716\u914d\u7f6e\u8a18\u61b6\u9ad4",id:"configure-memory-for-dynamic-bitmaps",children:[],level:2},{value:"\u6b63\u5728\u8f09\u5165JPEG\u6a94",id:"loading-jpeg-files",children:[],level:2}],y={toc:v};function w(e){var t,l=e,{components:f}=l,h=((e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n})(l,["components"]);return(0,i.kt)("wrapper",(t=m(m({},y),h),c(t,d({components:f,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"In this section we will discuss a method for loading images from a file in your TouchGFX application."),(0,i.kt)("p",null,"The standard procedure for using bitmaps in TouchGFX application is to include the bitmaps in the application. The PNG files are converted to binary data in .cpp files and compiled, and linked into the application. This is an easy way of making the bitmaps available for the application at runtime."),(0,i.kt)("p",null,"In some application this is not possible or practical. For example when the images are not available at compile-time (maybe they are downloaded through an internet connection later), or when you simply have too many bitmaps to fit in your application flash space."),(0,i.kt)("p",null,"The Dynamic bitmaps (see link below) is a RAM-based solution to this problem. The Dynamic bitmaps are created at runtime, and the application can freely decide the number of bitmaps, the format, and the width and height."),(0,i.kt)("p",null,"As the dynamic bitmaps are stored in RAM (inside the bitmap cache), the application must copy pixels values from a source into the dynamic bitmap after creating the dynamic bitmaps. After creation, the dynamic bitmap contains uninitialized pixels."),(0,i.kt)("p",null,"This section describes how dynamic bitmaps can be used to create applications where some of the graphic content is read from BMP files. A simple use-case is an application that shows BMP files from an SD-card."),(0,i.kt)(r.Z,{mdxType:"Note"},"\u8acb\u5148\u95b1\u8b80",(0,i.kt)(a.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u52d5\u614b\u9ede\u9663\u5716"),"\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c\u6a19\u6e96\u9ede\u9663\u5716\u6703\u88ab\u7de8\u8b6f\u5230\u61c9\u7528\u7a0b\u5f0f\u4e2d\uff0c\u56e0\u6b64\u5fc5\u9808\u5728\u7de8\u8b6f\u6642\u63d0\u4f9b\u3002 \u52d5\u614b\u9ede\u9663\u5716\u7279\u6027\u80fd\u5920\u5728\u57f7\u884c\u6642\u9593\u5f9e\u6a94\u6848\u4e2d\u8b80\u53d6\u5716\u50cf\uff0c\u751a\u81f3\u901a\u904e\u7db2\u8def\u9023\u63a5\u4e0b\u8f09\u5716\u50cf\u3002"),(0,i.kt)("h2",m({},{id:"loading-bmp-file-example"}),"Loading BMP file Example"),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u5c07\u4ecb\u7d39\u5982\u4f55\u4f7f\u7528BMP\u8f09\u5165\u5668\u5f9eWindows BMP\u6a94\u8f09\u5165\u50cf\u7d20\u3002 \u6587\u7ae0\u5f8c\u9762\u5c07\u63d0\u4f9b\u8f09\u5165\u5668\u7a0b\u5f0f\u78bc\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u5728\u8996\u5716\u4e2d\u63d2\u5165\u5716\u50cf\u5c0f\u5de5\u5177\u3002 \u6b64\u5c0f\u5de5\u5177\u5c07\u986f\u793aBMP\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,i.kt)("p",null,"\u5728 setupScreen\u4e2d\u52a0\u8f09\u5716\u50cf\u65e5\u671f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{7-8,13-14}","{7-8,13-14}":!0}),'void TemplateView::setupScreen()\n{\n    FILE* f = fopen("image.jpg", "rb");\n    uint16_t width, height;\n\n    //Get the image dimensions from the BMP file\n    BMPFileLoader::getBMP24Dimensions(f, width, height);\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of same dimension\n    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);\n\n    //Load pixels from BMP file to dynamic bitmap\n    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);\n\n    //Make Image show the loaded bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n')),(0,i.kt)("h3",m({},{id:"the-bmp-loader"}),"BMP\u8f09\u5165\u5668"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u500b\u7c21\u55ae\u7684BMP\u6a94\u8f09\u5165\u5668\u7684\u7a0b\u5f0f\u78bc\u3002 \u5b83\u50c5\u652f\u63f424bpp BMP\u6a94\u3002  \u60a8\u53ef\u80fd\u5fc5\u9808\u8abf\u6574\u6a94\u6848\u7cfb\u7d71\u547c\u53eb\uff0c\u4ee5\u4fbf\u5339\u914d\u60a8\u7684\u7cfb\u7d71\u3002"),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"BMPFileLoader.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/hal/Types.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nusing namespace touchgfx;\n\nclass BMPFileLoader\n{\npublic:\n    typedef void* FileHdl;\n\n    static void getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height);\n    static void readBMP24File(Bitmap bitmap, FileHdl fileHandle);\nprivate:\n    static int readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length);\n    static void seekFile(FileHdl hdl, uint32_t offset);\n};\n")),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"BMPFileLoader.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'#include <gui/common/BMPFileLoader.hpp>\n#include <platform/driver/lcd/LCD16bpp.hpp>\n#include <touchgfx/Color.hpp>\n\nint BMPFileLoader::readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length)\n{\n    uint32_t r = fread(buffer, 1, length, (FILE*)hdl);\n    if (r != length)\n    {\n        return 1;\n    }\n    return 0;\n}\n\nvoid BMPFileLoader::seekFile(FileHdl hdl, uint32_t offset)\n{\n    fseek((FILE*)hdl, offset, SEEK_SET);\n}\n\nvoid BMPFileLoader::getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n}\n\nvoid BMPFileLoader::readBMP24File(Bitmap bitmap, FileHdl fileHandle)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    const uint32_t offset = data[10] | (data[11] << 8) | (data[12] << 16) | (data[12] << 24);\n    const uint32_t width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    const uint32_t height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n\n    readFile(fileHandle, data, offset - 26); //read rest of header.\n\n    //get dynamic bitmap boundaries\n    const uint32_t buffer_width = bitmap.getWidth();\n    const uint32_t buffer_height = bitmap.getHeight();\n\n    const uint32_t rowpadding = (4 - ((width * 3) % 4)) % 4;\n\n    const Bitmap::BitmapFormat format = bitmap.getFormat();\n    uint8_t* const  buffer8  = Bitmap::dynamicBitmapGetAddress(bitmap.getId());\n    uint16_t* const buffer16 = (uint16_t*)buffer8;\n\n    for (uint32_t y = 0; y < height; y++)\n    {\n        for (uint32_t x = 0; x < width; x++)\n        {\n            if (x % 10 == 0) //read data every 10 pixels = 30 bytes\n            {\n                if (x + 10 <= width) //read 10\n                {\n                    readFile(fileHandle, data, 10 * 3); //10 pixels\n                }\n                else\n                {\n                    readFile(fileHandle, data, (width - x) * 3 + rowpadding); //rest of line\n                }\n            }\n            //insert pixel, if within dynamic bitmap boundaries\n            if (x < buffer_width && ((height - y - 1) < buffer_height))\n            {\n                switch (format)\n                {\n                case Bitmap::RGB565:\n                    buffer16[x + (height - y - 1) * buffer_width] =\n                        LCD16bpp::getNativeColorFromRGB(data[(x % 10) * 3 + 2], data[(x % 10) * 3 + 1], data[(x % 10) * 3]);\n                    break;\n                case Bitmap::RGB888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 3 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        break;\n                    }\n                case Bitmap::ARGB8888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 4 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        buffer8[inx + 3] = 255; //solid\n                        break;\n                    }\n                default:\n                    assert(!"Unsupported bitmap format in BMPFileLoader!");\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u6b64\u7a0b\u5f0f\u78bc\u50c5\u7528\u65bc\u8aaa\u660e\u76ee\u7684\u3002 \u4e00\u7a2e\u66f4\u512a\u7684RGB888\u95b1\u8b80\u5668\u53ef\u4ee5\u5f9e\u6a94\u6848\u76f4\u63a5\u8b80\u53d6\u5230\u52d5\u614b\u9ede\u9663\u5716\u8a18\u61b6\u9ad4\uff08\u6ce8\u610f\u8df3\u904e\u884c\u586b\u88dc\u5b57\u5143\uff09\u3002 \u4ee5\u4e0a\u95b1\u8b80\u5668\u5f9eBMP\u6a94\u95b1\u8b8010\u500b\u50cf\u7d20\u5230\u81e8\u6642\u7de9\u885d\u5340\u3002 \u7136\u5f8c\uff0c\u5728\u8f49\u63db\u70ba\u6b63\u78ba\u683c\u5f0f\u7684\u540c\u6642\u5c07\u50cf\u7d20\u8907\u88fd\u5230\u9ede\u9663\u5716\u3002"),(0,i.kt)("h2",m({},{id:"configure-memory-for-dynamic-bitmaps"}),"\u70ba\u52d5\u614b\u9ede\u9663\u5716\u914d\u7f6e\u8a18\u61b6\u9ad4"),(0,i.kt)("p",null,"\u60a8\u5fc5\u9808\u5148\u914d\u7f6eTouchGFX\uff0c\u7136\u5f8c\u624d\u80fd\u5275\u5efa\u548c\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u3002 \u4e00\u500b\u5148\u6c7a\u689d\u4ef6\u662f\u63d0\u4f9b\u7de9\u885d\u5340\u548c\u52d5\u614b\u9ede\u9663\u5716\u6700\u5927\u6578\u91cf\uff08\u4e5f\u7528\u65bc\u6a21\u64ec\u5668\uff09\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662fSTM32F7xx\u7684\u7bc4\u4f8b\uff0c\u6211\u5011\u5728\u5916\u90e8RAM\u4e2d\u5206\u914d\u4e86\u7de9\u885d\u5340\uff1a\u6211\u5011\u60f3\u8981\u8f09\u5165\u4e26\u986f\u793a\u5c3a\u5bf8\u70ba320x240\u768424\u4f4d\u9ede\u9663\u5716\u3002 \u56e0\u6b64\uff0c\u9700\u8981\u7684\u5b58\u5132\u7a7a\u9593\u70ba320x240x3 = 230400\u3002 \u6211\u5011\u9084\u9700\u8981\u4e00\u9ede\u7a7a\u9593\u7528\u65bc\u8a18\u9304\uff0c\u56e0\u6b64\u70ba\u7de9\u885d\u5340\u5206\u914d\u4e86232000\u4f4d\u5143\u7d44\u3002"),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-8}","{2-2,8-8}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM\n    Bitmap::setCache((uint16_t*)bmpCache, 232000, 1);\n}\n")),(0,i.kt)("p",null,"\u6700\u5f8c\u7684\u53c3\u6578\u662f\u52d5\u614b\u9ede\u9663\u5716\u7684\u6700\u5927\u6578\u91cf\uff0c\u53ef\u6839\u64da\u60a8\u7684\u9700\u6c42\u9032\u884c\u8abf\u6574\u3002 \u6ce8\u610f\uff0c\u5728\u8a31\u591a\u5e73\u81fa\u4e0a\uff0c\u5f71\u50cf\u7de9\u885d\u4e5f\u4fdd\u5b58\u5728\u5916\u90e8RAM\u4e2d\u3002 \u78ba\u4fdd\u6c92\u6709\u5c07\u9ede\u9663\u5716\u7de9\u5b58\u653e\u5728\u91cd\u758a\u5b58\u5132\u5340\u3002"),(0,i.kt)(r.Z,{mdxType:"Note"},"\u6ce8\u610f\uff0c\u5982\u679c\u5b58\u5132\u7a7a\u9593\u4e0d\u5920\uff0cdynamicBitmapCreate\u8fd4\u56de\u7684BitmapId\u5c07\u662fBITMAP_INVALID\u3002"),(0,i.kt)("h2",m({},{id:"loading-jpeg-files"}),"\u6b63\u5728\u8f09\u5165JPEG\u6a94"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("a",{target:"_blank",href:n(80710).Z},"\u9019\u88e1\u53ef\u4ee5\u627e\u5230"),"JPEG\u6a94\u8f09\u5165\u5668\u7bc4\u4f8b\uff0c\u5b83\u5c55\u793a\u4e86\u5982\u4f55\u901a\u904eLibJPEG\u4f7f\u7528JPEG\u6a94\u3002 \u5b83\u4f7f\u7528\u8207\u4ee5\u4e0aBMPFileLoader\u76f8\u4f3c\u7684JPEGLoader\u985e\u3002"))}w.isMDXComponent=!0},80710:function(e,t,n){t.Z=n.p+"assets/files/jpeg-file-loader-4ee676d38cdfca7ef2583412712b6bf1.zip"}}]);