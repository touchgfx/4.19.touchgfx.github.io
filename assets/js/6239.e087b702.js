/*! For license information please see 6239.e087b702.js.LICENSE.txt */
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6239],{86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},39130:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),o=n(73727),i=n(11368),u=n(35096),c=n(84487);const a=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),l=n(67023),f=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&h(e,n,t[n]);if(v)for(var n of v(t))g.call(t,n)&&h(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:f,to:h,href:y,activeClassName:w,isActive:O,"data-noBrokenLinkCheck":P,autoAddBaseUrl:E=!0}=n,_=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&v)for(var r of v(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:S,baseUrl:j}}=(0,i.Z)(),{withBaseUrl:x}=(0,s.C)(),L=(0,r.useContext)(a),C=h||y,k=(0,u.Z)(C),A=null==C?void 0:C.replace("pathname://","");let D=void 0!==A?(R=A,E&&(e=>e.startsWith("/"))(R)?x(R):R):void 0;var R;D&&k&&(D=(0,l.applyTrailingSlash)(D,{trailingSlash:S,baseUrl:j}));const I=(0,r.useRef)(!1),T=f?o.OL:o.rU,M=c.Z.canUseIntersectionObserver,V=(0,r.useRef)();(0,r.useEffect)((()=>(!M&&k&&null!=D&&window.docusaurus.prefetch(D),()=>{M&&V.current&&V.current.disconnect()})),[V,D,M,k]);const $=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,B=!D||!k||$;return D&&k&&!$&&!P&&L.collectLink(D),B?r.createElement("a",b(b({href:D},C&&!k&&{target:"_blank",rel:"noopener noreferrer"}),_)):r.createElement(T,b((N=b({},_),d(N,p({onMouseEnter:()=>{I.current||null==D||(window.docusaurus.preload(D),I.current=!0)},innerRef:e=>{var t,n;M&&e&&k&&(t=e,n=()=>{null!=D&&window.docusaurus.prefetch(D)},V.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.current.unobserve(t),V.current.disconnect(),n())}))})),V.current.observe(t))},to:D||""}))),f&&{isActive:O,activeClassName:w}));var N}},33084:function(e,t,n){n.d(t,{Z:function(){return l},I:function(){return s}});var r=n(67294);const o=/{\w+}/g,i="{}";function u(e,t){const n=[],u=e.replace(o,(e=>{const o=e.substr(1,e.length-2),u=null==t?void 0:t[o];if(void 0!==u){const e=r.isValidElement(u)?u:String(u);return n.push(e),i}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?u.split(i).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):u.split(i).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}var c=n(57529);function a({id:e,message:t}){var n,r;if(void 0===e&&void 0===t)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(r=null!==(n=c[null!=e?e:t])&&void 0!==n?n:t)&&void 0!==r?r:e}function s({message:e,id:t},n){return u(a({message:e,id:t}),n)}function l({children:e,id:t,values:n}){if(e&&"string"!=typeof e)throw console.warn("Illegal <Translate> children",e),new Error("The Docusaurus <Translate> component only accept simple string values");return u(a({message:e,id:t}),n)}},24644:function(e,t,n){n.d(t,{m:function(){return r}});const r="default"},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},26224:function(e,t,n){n.r(t),n.d(t,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=n(73727)},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const u=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+u:u}(t,e,n,r)}}function u(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},92734:function(e,t,n){n.r(t),n.d(t,{default:function(){return i},useAllPluginInstancesData:function(){return u},usePluginData:function(){return c}});var r=n(11368),o=n(24644);function i(){const{globalData:e}=(0,r.Z)();if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){const t=i()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);return t}function c(e,t=o.m){const n=u(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);return n}},54939:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),o=n(92795);function i(){return(0,r.useContext)(o._)}},90634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(26224);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!(0,r.matchPath)(t,{path:n.path,exact:!1,strict:!1}))),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return i};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=(0,t.getLatestVersion)(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!(0,r.matchPath)(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=(0,t.getActiveVersion)(e,n),i=null==o?void 0:o.docs.find((e=>!!(0,r.matchPath)(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:i,alternateDocVersions:i?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(i.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=(0,t.getLatestVersion)(e),o=(0,t.getActiveDocContext)(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},52922:function(e,t,n){t.Jo=t.Iw=t.zu=t.yW=t.gB=t.WS=t.gA=t.zh=t._r=void 0;const r=n(70655),o=n(26224),i=(0,r.__importStar)(n(92734)),u=n(90634),c={};t._r=()=>{var e;return null!==(e=(0,i.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:c};t.zh=e=>(0,i.usePluginData)("docusaurus-plugin-content-docs",e);t.gA=(e={})=>{const n=(0,t._r)(),{pathname:r}=(0,o.useLocation)();return(0,u.getActivePlugin)(n,r,e)};t.WS=(e={})=>{const n=(0,t.gA)(e),{pathname:r}=(0,o.useLocation)();if(n){return{activePlugin:n,activeVersion:(0,u.getActiveVersion)(n.pluginData,r)}}};t.gB=e=>(0,t.zh)(e).versions;t.yW=e=>{const n=(0,t.zh)(e);return(0,u.getLatestVersion)(n)};t.zu=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,u.getActiveVersion)(n,r)};t.Iw=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,u.getActiveDocContext)(n,r)};t.Jo=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,u.getDocVersionSuggestions)(n,r)}},3730:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),o=n(30898),i=n(32033),u=n(25026);function c({title:e,description:t,keywords:n,image:c,children:a}){const s=(0,i.pe)(e),{withBaseUrl:l}=(0,u.C)(),f=c?l(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,e&&r.createElement("title",null,s),e&&r.createElement("meta",{property:"og:title",content:s}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),n&&r.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),f&&r.createElement("meta",{property:"og:image",content:f}),f&&r.createElement("meta",{name:"twitter:image",content:f}),a)}},33204:function(e,t,n){n.d(t,{Iw:function(){return r.Iw},gA:function(){return r.gA},WS:function(){return r.WS},zu:function(){return r.zu},_r:function(){return r._r},Jo:function(){return r.Jo},zh:function(){return r.zh},yW:function(){return r.yW},gB:function(){return r.gB}});var r=n(52922)},34603:function(e,t,n){var r=n(67294),o=n(84487);const i="desktop",u="mobile",c="ssr";function a(){return o.Z.canUseDOM?window.innerWidth>996?i:u:c}t.Z=function(){const[e,t]=(0,r.useState)((()=>a()));return(0,r.useEffect)((()=>{function e(){t(a())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},32033:function(e,t,n){n.d(t,{pl:function(){return Fe},zF:function(){return J},HX:function(){return v},PO:function(){return se},L5:function(){return Re},Cv:function(){return we},Cn:function(){return he},OC:function(){return ft},kM:function(){return Be},WA:function(){return a},os:function(){return m},Fx:function(){return mt},Mg:function(){return b},_f:function(){return s},bc:function(){return p},l5:function(){return f},nT:function(){return We},uR:function(){return N},J:function(){return Ve},Oh:function(){return $e},ed:function(){return x},Rb:function(){return Je},be:function(){return qe},SL:function(){return C},g8:function(){return ye},c2:function(){return S},D9:function(){return L},RF:function(){return vt},DA:function(){return at},Si:function(){return Ke},LU:function(){return o},pe:function(){return y}});var r=n(11368);function o(){return(0,r.Z)().siteConfig.themeConfig}function i(e="localStorage"){if("undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}let u=!1;const c={get:()=>null,set:()=>{},del:()=>{}};const a=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=i(null==t?void 0:t.persistence);return null===n?c:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function s(e="localStorage"){const t=i(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var l=n(76775);function f(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.Z)(),{pathname:i}=(0,l.TH)(),u=o===n?e:e.replace(`/${o}/`,"/"),c=i.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?`${u}`:`${u}${e}/`}(e)}${c}`}}}const d=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(d))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const v="default";function m(e,t){return`docs-${e}-${t}`}var g=n(33204);const h=!!g._r,b=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)},y=e=>{const{siteConfig:t}=(0,r.Z)(),{title:n,titleDelimiter:o}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n};var w=n(67294);const O=["zero","one","two","few","many","other"];function P(e){return O.filter((t=>e.includes(t)))}const E={locale:"en",pluralForms:P(["one","other"]),select:e=>1===e?"one":"other"};function _(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,w.useMemo)((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),E;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:P(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),E}}),[e])}function S(){const e=_();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}}(n,t,e)}}const j="undefined"!=typeof window?w.useLayoutEffect:w.useEffect;function x(e){const t=(0,w.useRef)(e);return j((()=>{t.current=e}),[e]),(0,w.useCallback)(((...e)=>t.current(...e)),[])}function L(e){const t=(0,w.useRef)();return j((()=>{t.current=e})),t.current}function C(e){const t=(0,l.TH)(),n=L(t),r=x(e);(0,w.useEffect)((()=>{r({location:t,previousLocation:n})}),[r,t,n])}var k=n(84487),A=Object.defineProperty,D=Object.defineProperties,R=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&V(e,n,t[n]);if(I)for(var n of I(t))M.call(t,n)&&V(e,n,t[n]);return e},B=(e,t)=>{var n={};for(var r in e)T.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&I)for(var r of I(e))t.indexOf(r)<0&&M.call(e,r)&&(n[r]=e[r]);return n};function N({initialState:e}){const[t,n]=(0,w.useState)(null!=e&&e),r=(0,w.useCallback)((()=>{n((e=>!e))}),[]);return{collapsed:t,setCollapsed:n,toggleCollapsed:r}}const U={display:"none",overflow:"hidden",height:"0px"},Z={display:"block",overflow:"visible",height:"auto"};function H(e,t){const n=t?U:Z;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function z({collapsibleRef:e,collapsed:t,animation:n}){const r=(0,w.useRef)(!1);(0,w.useEffect)((()=>{const o=e.current;function i(){var e,t;const r=o.scrollHeight,i=null!==(e=null==n?void 0:n.duration)&&void 0!==e?e:function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(r);return{transition:`height ${i}ms ${null!==(t=null==n?void 0:n.easing)&&void 0!==t?t:"ease-in-out"}`,height:`${r}px`}}function u(){const e=i();o.style.transition=e.transition,o.style.height=e.height}if(!r.current)return H(o,t),void(r.current=!0);return o.style.willChange="height",function(){const e=requestAnimationFrame((()=>{t?(u(),requestAnimationFrame((()=>{o.style.height=U.height,o.style.overflow=U.overflow}))):(o.style.display="block",requestAnimationFrame((()=>{u()})))}));return()=>cancelAnimationFrame(e)}()}),[e,t,n])}function F(e){if(!k.Z.canUseDOM)return e?U:Z}function W({as:e="div",collapsed:t,children:n,animation:r,onCollapseTransitionEnd:o,className:i,disableSSRStyle:u}){const c=(0,w.useRef)(null);return z({collapsibleRef:c,collapsed:t,animation:r}),w.createElement(e,{ref:c,style:u?void 0:F(t),onTransitionEnd:e=>{"height"===e.propertyName&&(H(c.current,t),null==o||o(t))},className:i},n)}function q(e){var t=e,{collapsed:n}=t,r=B(t,["collapsed"]);const[o,i]=(0,w.useState)(!n);(0,w.useLayoutEffect)((()=>{n||i(!0)}),[n]);const[u,c]=(0,w.useState)(n);return(0,w.useLayoutEffect)((()=>{o&&c(n)}),[o,n]),o?w.createElement(W,(a=$({},r),D(a,R({collapsed:u})))):null;var a}function J(e){var t=e,{lazy:n}=t,r=B(t,["lazy"]);const o=n?q:W;return w.createElement(o,$({},r))}var G=n(54939),X=n(86010),Y="details_2Ziz",K="isBrowser_2j9b",Q="collapsibleContent_3OHp",ee=Object.defineProperty,te=Object.defineProperties,ne=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ce(e){return!!e&&("SUMMARY"===e.tagName||ce(e.parentElement))}function ae(e,t){return!!e&&(e===t||ae(e.parentElement,t))}var se=e=>{var t=e,{summary:n,children:r}=t,o=((e,t)=>{var n={};for(var r in e)oe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&re)for(var r of re(e))t.indexOf(r)<0&&ie.call(e,r)&&(n[r]=e[r]);return n})(t,["summary","children"]);const i=(0,G.Z)(),u=(0,w.useRef)(null),{collapsed:c,setCollapsed:a}=N({initialState:!o.open}),[s,l]=(0,w.useState)(o.open);return w.createElement("details",(f=((e,t)=>{for(var n in t||(t={}))oe.call(t,n)&&ue(e,n,t[n]);if(re)for(var n of re(t))ie.call(t,n)&&ue(e,n,t[n]);return e})({},o),d={ref:u,open:s,"data-collapsed":c,className:(0,X.Z)(Y,{[K]:i},o.className),onMouseDown:e=>{ce(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ce(t)&&ae(t,u.current)&&(e.preventDefault(),c?(a(!1),l(!0)):a(!0))}},te(f,ne(d))),n,w.createElement(J,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{a(e),l(!e)}},w.createElement("div",{className:Q},r)));var f,d},le=Object.defineProperty,fe=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,me=(e,t)=>{for(var n in t||(t={}))de.call(t,n)&&ve(e,n,t[n]);if(fe)for(var n of fe(t))pe.call(t,n)&&ve(e,n,t[n]);return e};const ge=(0,w.createContext)(null);function he({children:e}){return w.createElement(ge.Provider,{value:(0,w.useState)(null)},e)}function be(){const e=(0,w.useContext)(ge);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function ye(){const[e]=be();if(e){const t=e.component;return function(n){return w.createElement(t,me(me({},e.props),n))}}return()=>{}}function we({component:e,props:t}){const[,n]=be(),r=(o=t,(0,w.useMemo)((()=>o),[...Object.keys(o),...Object.values(o)]));var o;return(0,w.useEffect)((()=>{n({component:e,props:r})}),[n,e,r]),(0,w.useEffect)((()=>()=>n(null)),[n]),null}const Oe=e=>`docs-preferred-version-${e}`;var Pe={save:(e,t,n)=>{a(Oe(e),{persistence:t}).set(n)},read:(e,t)=>a(Oe(e),{persistence:t}).get(),clear:(e,t)=>{a(Oe(e),{persistence:t}).del()}},Ee=Object.defineProperty,_e=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,je=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Ce=(e,t,n)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ke({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=Pe.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(Pe.clear(e,t),{preferredVersionName:null})}(e)})),r}function Ae(){const e=(0,g._r)(),t=o().docs.versionPersistence,n=(0,w.useMemo)((()=>Object.keys(e)),[e]),[r,i]=(0,w.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,w.useEffect)((()=>{i(ke({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,w.useMemo)((()=>({savePreferredVersion:function(e,n){Pe.save(e,t,n),i((t=>{return r=((e,t)=>{for(var n in t||(t={}))xe.call(t,n)&&Ce(e,n,t[n]);if(je)for(var n of je(t))Le.call(t,n)&&Ce(e,n,t[n]);return e})({},t),_e(r,Se({[e]:{preferredVersionName:n}}));var r}))}})),[t])]}const De=(0,w.createContext)(null);function Re({children:e}){return h?w.createElement(Ie,null,e):w.createElement(w.Fragment,null,e)}function Ie({children:e}){const t=Ae();return w.createElement(De.Provider,{value:t},e)}function Te(){const e=(0,w.useContext)(De);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}var Me=n(24644);function Ve(e=Me.m){const t=(0,g.zh)(e),[n,r]=Te(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,w.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r,e])}}function $e(){const e=(0,g._r)(),[t]=Te();const n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}const Be={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}},Ne=a("docusaurus.announcement.dismiss"),Ue=a("docusaurus.announcement.id"),Ze=()=>"true"===Ne.get(),He=e=>Ne.set(String(e)),ze=(0,w.createContext)(null),Fe=({children:e})=>{const t=(()=>{const{announcementBar:e}=o(),t=(0,G.Z)(),[n,r]=(0,w.useState)((()=>!!t&&Ze()));(0,w.useEffect)((()=>{r(Ze())}),[]);const i=(0,w.useCallback)((()=>{He(!0),r(!0)}),[]);return(0,w.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=Ue.get();"annoucement-bar"===n&&(n="announcement-bar");const o=t!==n;Ue.set(t),o&&He(!1),!o&&Ze()||r(!1)}),[e]),(0,w.useMemo)((()=>({isActive:!!e&&!n,close:i})),[e,n,i])})();return w.createElement(ze.Provider,{value:t},e)},We=()=>{const e=(0,w.useContext)(ze);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function qe(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{pathname:t}=(0,l.TH)();return t.replace(e,"/")}n(33084);function Je(e){!function(e){const{block:t}=(0,l.k6)(),n=(0,w.useRef)(e);(0,w.useEffect)((()=>{n.current=e}),[e]),(0,w.useEffect)((()=>t(((e,t)=>n.current(e,t)))),[t,n])}(((t,n)=>{if("POP"===n)return e(t,n)}))}function Ge(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Ge(e.parentNode):t}function Xe(e,{anchorTopOffset:t}){var n;const r=e.find((e=>Ge(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Ge(r))?r:null!==(n=e[e.indexOf(r)-1])&&void 0!==n?n:null}return e[e.length-1]}function Ye(){const e=(0,w.useRef)(0),{navbar:{hideOnScroll:t}}=o();return(0,w.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var Ke=function(e){const t=(0,w.useRef)(void 0),n=Ye();(0,w.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:u}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:i,maxHeadingLevel:u}),a=Xe(c,{anchorTopOffset:n.current}),s=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){var r;n?(t.current&&t.current!==e&&(null===(r=t.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])},Qe=Object.defineProperty,et=Object.defineProperties,tt=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,it=(e,t,n)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ut=(e,t)=>{for(var n in t||(t={}))rt.call(t,n)&&it(e,n,t[n]);if(nt)for(var n of nt(t))ot.call(t,n)&&it(e,n,t[n]);return e};function ct({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=ct({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[(o=ut({},e),i={children:r},et(o,tt(i)))]:r;var o,i}))}function at({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,w.useMemo)((()=>ct({toc:e,minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}function st(){const e=(0,w.useRef)(!0);return(0,w.useMemo)((()=>({scrollEventsEnabledRef:e,enableScrollEvents:()=>{e.current=!0},disableScrollEvents:()=>{e.current=!1}})),[])}const lt=(0,w.createContext)(void 0);function ft({children:e}){return w.createElement(lt.Provider,{value:st()},e)}function dt(){const e=(0,w.useContext)(lt);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}const pt=()=>k.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;function vt(e,t=[]){const{scrollEventsEnabledRef:n}=dt(),r=(0,w.useRef)(pt()),o=x(e);(0,w.useEffect)((()=>{const e=()=>{if(!n.current)return;const e=pt();o&&o(e,r.current),r.current=e},t={passive:!0};return e(),window.addEventListener("scroll",e,t),()=>window.removeEventListener("scroll",e,t)}),[o,n,...t])}function mt(e,t){return void 0!==e&&void 0!==t&&new RegExp(e,"gi").test(t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),i="/"===o||o===r?o:(u=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(u):function(e){return e.endsWith("/")?e.slice(0,-1):e}(u));var u;return e.replace(o,i)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},70655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return u},__decorate:function(){return c},__param:function(){return a},__metadata:function(){return s},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return v},__read:function(){return m},__spread:function(){return g},__spreadArrays:function(){return h},__spreadArray:function(){return b},__await:function(){return y},__asyncGenerator:function(){return w},__asyncDelegator:function(){return O},__asyncValues:function(){return P},__makeTemplateObject:function(){return E},__importStar:function(){return S},__importDefault:function(){return j},__classPrivateFieldGet:function(){return x},__classPrivateFieldSet:function(){return L}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u}function a(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(t){i(t)}}function c(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}a((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r}function b(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof y?Promise.resolve(n.value.v).then(a,s):l(i[0][2],n)}catch(r){l(i[0][3],r)}var n}function a(e){c("next",e)}function s(e){c("throw",e)}function l(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function O(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var _=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return _(t,e),t}function j(e){return e&&e.__esModule?e:{default:e}}function x(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function L(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);