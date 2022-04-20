"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1646],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=s(n),m=r,u=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},4793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return N},default:function(){return x},frontMatter:function(){return v},metadata:function(){return w},toc:function(){return y}});var a=n(3905),r=n(44035),i=n(29415),l=n(37793),o=n(31217),p=n(39130),s=n(22425),d=Object.defineProperty,c=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&f(e,n,t[n]);return e};const v={id:"shape",title:"Shape"},N=void 0,w={unversionedId:"development/ui-development/ui-components/shapes/shape",id:"development/ui-development/ui-components/shapes/shape",title:"Shape",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/shapes/shape.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/shape",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/shapes/shape",tags:[],version:"current",frontMatter:{id:"shape",title:"Shape"},sidebar:"docs",previous:{title:"Circle",permalink:"/4.19/zh-CN/docs/development/ui-development/ui-components/shapes/circle"},next:{title:"Miscellaneous",permalink:"/4.19/zh-CN/docs/category/miscellaneous"}},b={},y=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"API Reference",id:"api-reference",level:2}],S={toc:y};function x(e){var t,n=e,{components:d}=n,f=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},S),f),c(t,h({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The Shape allows the user to draw any shape with an arbitrary amount of points, while also supporting scaling and rotation."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/shape/widget-appearance.png",mdxType:"Figure"},"Shape running in the simulator"),(0,a.kt)("h2",k({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The Shape can be found in the Shapes widget group in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/shape/widget-group-v4.17.png",mdxType:"Figure"},"Shape in TouchGFX Designer"),(0,a.kt)("h2",k({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for a Shape in TouchGFX Designer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Image & Color")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Image")," or ",(0,a.kt)("em",{parentName:"td"},"Color")," specifies the color or image to be shown in the Shape.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Transform")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Angle")," specifies the rotation of the Shape around its ",(0,a.kt)("em",{parentName:"td"},"Origin")," point.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Scale X")," and ",(0,a.kt)("em",{parentName:"td"},"Scale Y")," specify the scale of the shape horizontally and vertically from the ",(0,a.kt)("em",{parentName:"td"},"Origin")," point.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Origin X")," and ",(0,a.kt)("em",{parentName:"td"},"Origin Y")," specify the location from which ",(0,a.kt)("em",{parentName:"td"},"Points")," originate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Points")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Points")," specify points that create the desired shape.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Each individual point requires an X and Y coordinate."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,a.kt)("em",{parentName:"td"},"Alpha")," value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("h2",k({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by the Shape are described in the following sections."),(0,a.kt)("h3",k({},{id:"actions"}),"Actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Widget specific action")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Scale Shape")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Scale a Shape, either to a fixed size or relative to its current size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Rotate Shape")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Rotate a Shape, either to a fixed angle or relative to its current anlge")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Resize widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Resize the Width and Height of a widget .")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget action")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",k({},{id:"triggers"}),"Triggers"),(0,a.kt)("p",null,"A Shape does not emit any triggers."),(0,a.kt)("h2",k({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"A Shape is a CanvasWidget and is heavily dependent on the MCU for rendering the desired shape. Therefore, a Shape is considered a demanding widget on most platforms."),(0,a.kt)("p",null,"For more details on CanvasWidget drawing performance, read the ",(0,a.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",k({},{id:"examples"}),"Examples"),(0,a.kt)("h3",k({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Shape."),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    shape.setPosition(140, 36, 200, 200);\n    shape.setOrigin(100.000f, 100.000f);\n    shape.setScale(1.000f, 1.000f);\n    shape.setAngle(0.000f);\n    shapePainter.setColor(touchgfx::Color::getColorFromRGB(60, 180, 230));\n    shape.setPainter(shapePainter);\n    const touchgfx::AbstractShape::ShapePoint<float> shapePoints[4] = { { 0.000f, -100.000f }, { 100.000f, 0.000f }, { 0.000f, 100.000f }, { -100.000f, 0.000f } };\n    shape.setShape(shapePoints);\n\n    add(shape);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Shape class in user code. Remember to force a redraw by calling ",(0,a.kt)(o.Z,{mdxType:"InlineCode"},"shape.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",k({},{id:"user-code"}),"User Code"),(0,a.kt)("p",null,"The following code shows how to set up a shape filled with some random data:"),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1VIEW_HPP\n#define SCREEN1VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/canvas/Shape.hpp>\n#include <touchgfx/widgets/canvas/PainterRGB888.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Shape<100> shape;\n    touchgfx::PainterRGB888 shapePainter;\nprotected:\n    void fillData(int maxLength);\n};\n\n#endif // SCREEN1VIEW_HPP\n")),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    shape.setPosition(0, 0, 480, 272);\n    shape.setOrigin(0.000f, 272.000f);\n    shapePainter.setColor(touchgfx::Color::getColorFromRGB(0, 171, 223));\n    shape.setPainter(shapePainter);\n    fillData(100);\n    add(shape);\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::fillData(int maxLength)\n{\n    float highestX = 0.000f;\n    for (int i = 0; i < maxLength - 1; ++i)\n    {\n        float y = static_cast <float> (rand()) / (static_cast <float> (RAND_MAX/272));\n        float x = highestX + static_cast <float> (rand()) /( static_cast <float> (RAND_MAX/((highestX + 10.000f)-highestX)));\n        highestX = x;\n        shape.setCorner(i, CWRUtil::toQ5<float>(x), CWRUtil::toQ5<float>(-y));\n    }\n    shape.setCorner(maxLength - 1, CWRUtil::toQ5<float>(highestX), CWRUtil::toQ5<float>(0));\n    shape.updateAbstractShapeCache();\n}\n")),(0,a.kt)("h2",k({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_shape",mdxType:"Link"},"API reference for the Shape class"))))}x.isMDXComponent=!0}}]);