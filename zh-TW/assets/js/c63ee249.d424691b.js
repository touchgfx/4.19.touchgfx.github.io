"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[88],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||r;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var i=n(67294);class a extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=a},88678:function(e,t,n){var i=n(67294);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var i=n(67294),a=n(88678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=l},11033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return B},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return y}});var i=n(3905),a=n(39130),r=n(93054),l=n(22425),o=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&m(e,n,t[n]);return e};const h={id:"loading-images-at-runtime",title:"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf"},g=void 0,b={unversionedId:"development/ui-development/scenarios/loading-images-at-runtime",id:"development/ui-development/scenarios/loading-images-at-runtime",title:"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/loading-images-at-runtime.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/loading-images-at-runtime",permalink:"/4.19/zh-TW/docs/development/ui-development/scenarios/loading-images-at-runtime",draft:!1,tags:[],version:"current",frontMatter:{id:"loading-images-at-runtime",title:"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf"},sidebar:"docs",previous:{title:"\u7528\u53ef\u7de9\u5b58\u5bb9\u5668\u5be6\u73fe\u66f4\u512a\u6027\u80fd",permalink:"/4.19/zh-TW/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"},next:{title:"\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\u6e1b\u5c11\u5b58\u5132\u7a7a\u9593\u6d88\u8017",permalink:"/4.19/zh-TW/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"}},v={},y=[{value:"\u8f09\u5165BMP\u6a94\u6848\u7bc4\u4f8b",id:"loading-bmp-file-example",level:2},{value:"BMP\u8f09\u5165\u5668",id:"the-bmp-loader",level:3},{value:"\u70ba\u52d5\u614b\u9ede\u9663\u5716\u914d\u7f6e\u8a18\u61b6\u9ad4",id:"configure-memory-for-dynamic-bitmaps",level:2},{value:"\u6b63\u5728\u8f09\u5165JPEG\u6a94",id:"loading-jpeg-files",level:2}],x={toc:y};function B(e){var t,o=e,{components:m}=o,h=((e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&s.call(e,i)&&(n[i]=e[i]);return n})(o,["components"]);return(0,i.kt)("wrapper",(t=f(f({},x),h),d(t,p({components:m,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u8a0e\u8ad6\u5f9eTouchGFX\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u6a94\u6848\u7cfb\u7d71\u8f09\u5165\u5716\u50cf\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX\u61c9\u7528\u7a0b\u5f0f\u4e2d\u4f7f\u7528\u9ede\u9663\u5716\u7684\u6a19\u6e96\u7a0b\u5f0f\u662f\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u5305\u542b\u9ede\u9663\u5716\u3002 PNG\u6a94\u88ab\u8f49\u63db\u70ba.cpp\u6a94\u4e2d\u7684\u4e8c\u9032\u4f4d\u8cc7\u6599\uff0c\u4e26\u88ab\u7de8\u8b6f\u548c\u9023\u7d50\u5230\u61c9\u7528\u7a0b\u5f0f\u4e2d\u3002 \u9019\u662f\u4e00\u7a2e\u5728\u904b\u884c\u6642\u4f7f\u9ede\u9663\u5716\u5c0d\u61c9\u7528\u7a0b\u5f0f\u53ef\u7528\u7684\u7c21\u55ae\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u5728\u67d0\u4e9b\u61c9\u7528\u4e2d\uff0c\u9019\u662f\u4e0d\u53ef\u80fd\u6216\u4e0d\u5be6\u969b\u7684\u3002 \u4f8b\u5982\uff0c\u7576\u5716\u50cf\u5728\u7de8\u8b6f\u6642\u4e0d\u53ef\u7528(\u53ef\u80fd\u7a0d\u5f8c\u901a\u904e\u4e92\u806f\u7db2\u9023\u63a5\u4e0b\u8f09)\uff0c\u6216\u8005\u7576\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u5feb\u9583\u8a18\u61b6\u9ad4\u7a7a\u9593\u4e2d\u6709\u592a\u591a\u9ede\u9663\u5716\u6642\u3002"),(0,i.kt)("p",null,"\u5c0d\u65bc\u9019\u500b\u554f\u984c\uff0c\u52d5\u614b\u9ede\u9663\u5716(\u898b\u4ee5\u4e0b\u9023\u7d50) \u662f\u4e00\u500b\u57fa\u65bcRAM\u7684\u89e3\u6c7a\u65b9\u6848\u3002 \u52d5\u614b\u9ede\u9663\u5716\u662f\u5728\u904b\u884c\u6642\u5275\u5efa\u7684\uff0c\u61c9\u7528\u7a0b\u5f0f\u53ef\u4ee5\u81ea\u7531\u6c7a\u5b9a\u9ede\u9663\u5716\u7684\u6578\u91cf\u3001\u683c\u5f0f\u3001\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002"),(0,i.kt)("p",null,"\u7531\u65bc\u52d5\u614b\u9ede\u9663\u5716\u5b58\u5132\u5728RAM\u4e2d(\u9ede\u9663\u5716\u5feb\u53d6\u5167)\uff0c\u61c9\u7528\u7a0b\u5f0f\u5fc5\u9808\u5728\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716\u5f8c\u5c07\u50cf\u7d20\u503c\u5f9e\u6e90\u8907\u88fd\u5230\u52d5\u614b\u9ede\u9663\u5716\u4e2d\u3002 \u5275\u5efa\u5f8c\uff0c\u52d5\u614b\u9ede\u9663\u5716\u5305\u542b\u672a\u521d\u59cb\u5316\u7684\u50cf\u7d20\u3002"),(0,i.kt)("p",null,"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u5275\u5efa\u61c9\u7528\uff0c\u5176\u4e2d\u7684\u4e00\u4e9b\u5716\u5f62\u5167\u5bb9\u662f\u8b80\u53d6\u81eaBMP\u6a94\u3002 \u4e00\u500b\u7c21\u55ae\u7684\u4f8b\u5b50\u662f\u986f\u793aSD\u5361\u4e2dBMP\u6a94\u7684\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,i.kt)(r.Z,{mdxType:"Note"},"\u8acb\u5148\u95b1\u8b80",(0,i.kt)(a.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u52d5\u614b\u9ede\u9663\u5716"),"\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c\u6a19\u6e96\u9ede\u9663\u5716\u6703\u88ab\u7de8\u8b6f\u5230\u61c9\u7528\u7a0b\u5f0f\u4e2d\uff0c\u56e0\u6b64\u5fc5\u9808\u5728\u7de8\u8b6f\u6642\u63d0\u4f9b\u3002 \u52d5\u614b\u9ede\u9663\u5716\u7279\u6027\u80fd\u5920\u5728\u57f7\u884c\u6642\u9593\u5f9e\u6a94\u6848\u4e2d\u8b80\u53d6\u5716\u50cf\uff0c\u751a\u81f3\u901a\u904e\u7db2\u8def\u9023\u63a5\u4e0b\u8f09\u5716\u50cf\u3002"),(0,i.kt)("h2",f({},{id:"loading-bmp-file-example"}),"\u8f09\u5165BMP\u6a94\u6848\u7bc4\u4f8b"),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u5c07\u4ecb\u7d39\u5982\u4f55\u4f7f\u7528BMP\u8f09\u5165\u5668\u5f9eWindows BMP\u6a94\u8f09\u5165\u50cf\u7d20\u3002 \u6587\u7ae0\u5f8c\u9762\u5c07\u63d0\u4f9b\u8f09\u5165\u5668\u7a0b\u5f0f\u78bc\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u5728\u8996\u5716\u4e2d\u63d2\u5165\u5716\u50cf\u5c0f\u5de5\u5177\u3002 \u6b64\u5c0f\u5de5\u5177\u5c07\u986f\u793aBMP\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"class TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,i.kt)("p",null,"\u5728 setupScreen\u4e2d\u52a0\u8f09\u5716\u50cf\u65e5\u671f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{7-8,13-14}","{7-8,13-14}":!0}),'void TemplateView::setupScreen()\n{\n    FILE* f = fopen("image.jpg", "rb");\n    uint16_t width, height;\n\n    //Get the image dimensions from the BMP file\n    BMPFileLoader::getBMP24Dimensions(f, width, height);\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of same dimension\n    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);\n\n    //Load pixels from BMP file to dynamic bitmap\n    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);\n\n    //Make Image show the loaded bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n')),(0,i.kt)("h3",f({},{id:"the-bmp-loader"}),"BMP\u8f09\u5165\u5668"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u500b\u7c21\u55ae\u7684BMP\u6a94\u8f09\u5165\u5668\u7684\u7a0b\u5f0f\u78bc\u3002 \u5b83\u50c5\u652f\u63f424bpp BMP\u6a94\u3002  \u60a8\u53ef\u80fd\u5fc5\u9808\u8abf\u6574\u6a94\u6848\u7cfb\u7d71\u547c\u53eb\uff0c\u4ee5\u4fbf\u5339\u914d\u60a8\u7684\u7cfb\u7d71\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"BMPFileLoader.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/hal/Types.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nusing namespace touchgfx;\n\nclass BMPFileLoader\n{\npublic:\n    typedef void* FileHdl;\n\n    static void getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height);\n    static void readBMP24File(Bitmap bitmap, FileHdl fileHandle);\nprivate:\n    static int readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length);\n    static void seekFile(FileHdl hdl, uint32_t offset);\n};\n")),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"BMPFileLoader.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui/common/BMPFileLoader.hpp>\n#include <platform/driver/lcd/LCD16bpp.hpp>\n#include <touchgfx/Color.hpp>\n\nint BMPFileLoader::readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length)\n{\n    uint32_t r = fread(buffer, 1, length, (FILE*)hdl);\n    if (r != length)\n    {\n        return 1;\n    }\n    return 0;\n}\n\nvoid BMPFileLoader::seekFile(FileHdl hdl, uint32_t offset)\n{\n    fseek((FILE*)hdl, offset, SEEK_SET);\n}\n\nvoid BMPFileLoader::getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n}\n\nvoid BMPFileLoader::readBMP24File(Bitmap bitmap, FileHdl fileHandle)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    const uint32_t offset = data[10] | (data[11] << 8) | (data[12] << 16) | (data[12] << 24);\n    const uint32_t width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    const uint32_t height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n\n    readFile(fileHandle, data, offset - 26); //read rest of header.\n\n    //get dynamic bitmap boundaries\n    const uint32_t buffer_width = bitmap.getWidth();\n    const uint32_t buffer_height = bitmap.getHeight();\n\n    const uint32_t rowpadding = (4 - ((width * 3) % 4)) % 4;\n\n    const Bitmap::BitmapFormat format = bitmap.getFormat();\n    uint8_t* const  buffer8  = Bitmap::dynamicBitmapGetAddress(bitmap.getId());\n    uint16_t* const buffer16 = (uint16_t*)buffer8;\n\n    for (uint32_t y = 0; y < height; y++)\n    {\n        for (uint32_t x = 0; x < width; x++)\n        {\n            if (x % 10 == 0) //read data every 10 pixels = 30 bytes\n            {\n                if (x + 10 <= width) //read 10\n                {\n                    readFile(fileHandle, data, 10 * 3); //10 pixels\n                }\n                else\n                {\n                    readFile(fileHandle, data, (width - x) * 3 + rowpadding); //rest of line\n                }\n            }\n            //insert pixel, if within dynamic bitmap boundaries\n            if (x < buffer_width && ((height - y - 1) < buffer_height))\n            {\n                switch (format)\n                {\n                case Bitmap::RGB565:\n                    buffer16[x + (height - y - 1) * buffer_width] =\n                        LCD16bpp::getNativeColorFromRGB(data[(x % 10) * 3 + 2], data[(x % 10) * 3 + 1], data[(x % 10) * 3]);\n                    break;\n                case Bitmap::RGB888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 3 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        break;\n                    }\n                case Bitmap::ARGB8888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 4 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        buffer8[inx + 3] = 255; //solid\n                        break;\n                    }\n                default:\n                    assert(!"Unsupported bitmap format in BMPFileLoader!");\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u6b64\u7a0b\u5f0f\u78bc\u50c5\u7528\u65bc\u8aaa\u660e\u76ee\u7684\u3002 \u4e00\u7a2e\u66f4\u512a\u7684RGB888\u95b1\u8b80\u5668\u53ef\u4ee5\u5f9e\u6a94\u6848\u76f4\u63a5\u8b80\u53d6\u5230\u52d5\u614b\u9ede\u9663\u5716\u8a18\u61b6\u9ad4\uff08\u6ce8\u610f\u8df3\u904e\u884c\u586b\u88dc\u5b57\u5143\uff09\u3002 \u4ee5\u4e0a\u95b1\u8b80\u5668\u5f9eBMP\u6a94\u95b1\u8b8010\u500b\u50cf\u7d20\u5230\u81e8\u6642\u7de9\u885d\u5340\u3002 \u7136\u5f8c\uff0c\u5728\u8f49\u63db\u70ba\u6b63\u78ba\u683c\u5f0f\u7684\u540c\u6642\u5c07\u50cf\u7d20\u8907\u88fd\u5230\u9ede\u9663\u5716\u3002"),(0,i.kt)("h2",f({},{id:"configure-memory-for-dynamic-bitmaps"}),"\u70ba\u52d5\u614b\u9ede\u9663\u5716\u914d\u7f6e\u8a18\u61b6\u9ad4"),(0,i.kt)("p",null,"\u60a8\u5fc5\u9808\u5148\u914d\u7f6eTouchGFX\uff0c\u7136\u5f8c\u624d\u80fd\u5275\u5efa\u548c\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u3002 \u4e00\u500b\u5148\u6c7a\u689d\u4ef6\u662f\u63d0\u4f9b\u7de9\u885d\u5340\u548c\u52d5\u614b\u9ede\u9663\u5716\u6700\u5927\u6578\u91cf\uff08\u4e5f\u7528\u65bc\u6a21\u64ec\u5668\uff09\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662fSTM32F7xx\u7684\u7bc4\u4f8b\uff0c\u6211\u5011\u5728\u5916\u90e8RAM\u4e2d\u5206\u914d\u4e86\u7de9\u885d\u5340\uff1a\u6211\u5011\u60f3\u8981\u8f09\u5165\u4e26\u986f\u793a\u5c3a\u5bf8\u70ba320x240\u768424\u4f4d\u9ede\u9663\u5716\u3002 \u56e0\u6b64\uff0c\u9700\u8981\u7684\u5b58\u5132\u7a7a\u9593\u70ba320x240x3 = 230400\u3002 \u6211\u5011\u9084\u9700\u8981\u4e00\u9ede\u7a7a\u9593\u7528\u65bc\u8a18\u9304\uff0c\u56e0\u6b64\u70ba\u7de9\u885d\u5340\u5206\u914d\u4e86232000\u4f4d\u5143\u7d44\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-8}","{2-2,8-8}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM\n    Bitmap::setCache((uint16_t*)bmpCache, 232000, 1);\n}\n")),(0,i.kt)("p",null,"\u6700\u5f8c\u7684\u53c3\u6578\u662f\u52d5\u614b\u9ede\u9663\u5716\u7684\u6700\u5927\u6578\u91cf\uff0c\u53ef\u6839\u64da\u60a8\u7684\u9700\u6c42\u9032\u884c\u8abf\u6574\u3002 \u6ce8\u610f\uff0c\u5728\u8a31\u591a\u5e73\u81fa\u4e0a\uff0c\u5f71\u50cf\u7de9\u885d\u4e5f\u4fdd\u5b58\u5728\u5916\u90e8RAM\u4e2d\u3002 \u78ba\u4fdd\u6c92\u6709\u5c07\u9ede\u9663\u5716\u7de9\u5b58\u653e\u5728\u91cd\u758a\u5b58\u5132\u5340\u3002"),(0,i.kt)(r.Z,{mdxType:"Note"},"\u6ce8\u610f\uff0c\u5982\u679c\u5b58\u5132\u7a7a\u9593\u4e0d\u5920\uff0cdynamicBitmapCreate\u8fd4\u56de\u7684BitmapId\u5c07\u662fBITMAP_INVALID\u3002"),(0,i.kt)("h2",f({},{id:"loading-jpeg-files"}),"\u6b63\u5728\u8f09\u5165JPEG\u6a94"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("a",{target:"_blank",href:n(8727).Z},"\u9019\u88e1\u53ef\u4ee5\u627e\u5230"),"JPEG\u6a94\u8f09\u5165\u5668\u7bc4\u4f8b\uff0c\u5b83\u5c55\u793a\u4e86\u5982\u4f55\u901a\u904eLibJPEG\u4f7f\u7528JPEG\u6a94\u3002 \u5b83\u4f7f\u7528\u8207\u4ee5\u4e0aBMPFileLoader\u76f8\u4f3c\u7684JPEGLoader\u985e\u3002"))}B.isMDXComponent=!0},8727:function(e,t,n){t.Z=n.p+"assets/files/jpeg-file-loader-4ee676d38cdfca7ef2583412712b6bf1.zip"}}]);