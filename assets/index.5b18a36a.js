(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M={exports:{}},x={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),Fp=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Vp=Symbol.for("react.memo"),Hp=Symbol.for("react.lazy"),Il=Symbol.iterator;function Wp(e){return e===null||typeof e!="object"?null:(e=Il&&e[Il]||e["@@iterator"],typeof e=="function"?e:null)}var gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vc=Object.assign,yc={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||gc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wc(){}wc.prototype=Bn.prototype;function ga(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||gc}var va=ga.prototype=new wc;va.constructor=ga;vc(va,Bn.prototype);va.isPureReactComponent=!0;var Tl=Array.isArray,_c=Object.prototype.hasOwnProperty,ya={current:null},Sc={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)_c.call(t,r)&&!Sc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Lr,type:e,key:o,ref:s,props:i,_owner:ya.current}}function Kp(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Qp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cl=/\/+/g;function To(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qp(""+e.key):t.toString(36)}function ci(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Lr:case Mp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+To(s,0):r,Tl(i)?(n="",e!=null&&(n=e.replace(Cl,"$&/")+"/"),ci(i,t,n,"",function(u){return u})):i!=null&&(wa(i)&&(i=Kp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Cl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Tl(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+To(o,a);s+=ci(o,t,n,l,i)}else if(l=Wp(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+To(o,a++),s+=ci(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Kr(e,t,n){if(e==null)return e;var r=[],i=0;return ci(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},di={transition:null},Yp={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:di,ReactCurrentOwner:ya};x.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!wa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};x.Component=Bn;x.Fragment=Fp;x.Profiler=Up;x.PureComponent=ga;x.StrictMode=zp;x.Suspense=bp;x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;x.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ya.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)_c.call(t,l)&&!Sc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Lr,type:e.type,key:i,ref:o,props:r,_owner:s}};x.createContext=function(e){return e={$$typeof:Bp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$p,_context:e},e.Consumer=e};x.createElement=Ec;x.createFactory=function(e){var t=Ec.bind(null,e);return t.type=e,t};x.createRef=function(){return{current:null}};x.forwardRef=function(e){return{$$typeof:jp,render:e}};x.isValidElement=wa;x.lazy=function(e){return{$$typeof:Hp,_payload:{_status:-1,_result:e},_init:Gp}};x.memo=function(e,t){return{$$typeof:Vp,type:e,compare:t===void 0?null:t}};x.startTransition=function(e){var t=di.transition;di.transition={};try{e()}finally{di.transition=t}};x.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};x.useCallback=function(e,t){return fe.current.useCallback(e,t)};x.useContext=function(e){return fe.current.useContext(e)};x.useDebugValue=function(){};x.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};x.useEffect=function(e,t){return fe.current.useEffect(e,t)};x.useId=function(){return fe.current.useId()};x.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};x.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};x.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};x.useMemo=function(e,t){return fe.current.useMemo(e,t)};x.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};x.useRef=function(e){return fe.current.useRef(e)};x.useState=function(e){return fe.current.useState(e)};x.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};x.useTransition=function(){return fe.current.useTransition()};x.version="18.2.0";(function(e){e.exports=x})(M);const ps=Lp(M.exports);var hs={},kc={exports:{}},Ce={},Ic={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var D=T.length;T.push(O);e:for(;0<D;){var G=D-1>>>1,Z=T[G];if(0<i(Z,O))T[G]=O,T[D]=Z,D=G;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],D=T.pop();if(D!==O){T[0]=D;e:for(var G=0,Z=T.length,Hr=Z>>>1;G<Hr;){var $t=2*(G+1)-1,Io=T[$t],Bt=$t+1,Wr=T[Bt];if(0>i(Io,D))Bt<Z&&0>i(Wr,Io)?(T[G]=Wr,T[Bt]=D,G=Bt):(T[G]=Io,T[$t]=D,G=$t);else if(Bt<Z&&0>i(Wr,D))T[G]=Wr,T[Bt]=D,G=Bt;else break e}}return O}function i(T,O){var D=T.sortIndex-O.sortIndex;return D!==0?D:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],p=1,h=null,m=3,g=!1,_=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function y(T){if(v=!1,c(T),!_)if(n(l)!==null)_=!0,Ke(E);else{var O=n(u);O!==null&&Ut(y,O.startTime-T)}}function E(T,O){_=!1,v&&(v=!1,f(k),k=-1),g=!0;var D=m;try{for(c(O),h=n(l);h!==null&&(!(h.expirationTime>O)||T&&!Q());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var Z=G(h.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&r(l),c(O)}else r(l);h=n(l)}if(h!==null)var Hr=!0;else{var $t=n(u);$t!==null&&Ut(y,$t.startTime-O),Hr=!1}return Hr}finally{h=null,m=D,g=!1}}var I=!1,w=null,k=-1,P=5,A=-1;function Q(){return!(e.unstable_now()-A<P)}function We(){if(w!==null){var T=e.unstable_now();A=T;var O=!0;try{O=w(!0,T)}finally{O?he():(I=!1,w=null)}}else I=!1}var he;if(typeof d=="function")he=function(){d(We)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,cn=Ze.port2;Ze.port1.onmessage=We,he=function(){cn.postMessage(null)}}else he=function(){C(We,0)};function Ke(T){w=T,I||(I=!0,he())}function Ut(T,O){k=C(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){_||g||(_=!0,Ke(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var D=m;m=O;try{return T()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=m;m=T;try{return O()}finally{m=D}},e.unstable_scheduleCallback=function(T,O,D){var G=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?G+D:G):D=G,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=D+Z,T={id:p++,callback:O,priorityLevel:T,startTime:D,expirationTime:Z,sortIndex:-1},D>G?(T.sortIndex=D,t(u,T),n(l)===null&&T===n(u)&&(v?(f(k),k=-1):v=!0,Ut(y,D-G))):(T.sortIndex=Z,t(l,T),_||g||(_=!0,Ke(E))),T},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(T){var O=m;return function(){var D=m;m=O;try{return T.apply(this,arguments)}finally{m=D}}}})(Tc);(function(e){e.exports=Tc})(Ic);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=M.exports,Te=Ic.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,hr={};function an(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(hr[e]=t,e=0;e<t.length;e++)Nc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ms=Object.prototype.hasOwnProperty,qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nl={},Al={};function Xp(e){return ms.call(Al,e)?!0:ms.call(Nl,e)?!1:qp.test(e)?Al[e]=!0:(Nl[e]=!0,!1)}function Jp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zp(e,t,n,r){if(t===null||typeof t>"u"||Jp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var _a=/[\-:]([a-z])/g;function Sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_a,Sa);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_a,Sa);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_a,Sa);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ea(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zp(t,n,i,r)&&(n=null),r||i===null?Xp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),fn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),ka=Symbol.for("react.strict_mode"),gs=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),Ia=Symbol.for("react.forward_ref"),vs=Symbol.for("react.suspense"),ys=Symbol.for("react.suspense_list"),Ta=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),Pl=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=Pl&&e[Pl]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Co;function Jn(e){if(Co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Co=t&&t[1]||""}return`
`+Co+e}var No=!1;function Ao(e,t){if(!e||No)return"";No=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{No=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jn(e):""}function eh(e){switch(e.tag){case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function ws(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case fn:return"Portal";case gs:return"Profiler";case ka:return"StrictMode";case vs:return"Suspense";case ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pc:return(e.displayName||"Context")+".Consumer";case Ac:return(e._context.displayName||"Context")+".Provider";case Ia:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ta:return t=e.displayName||null,t!==null?t:ws(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return ws(e(t))}catch{}}return null}function th(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ws(t);case 8:return t===ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nh(e){var t=Dc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=nh(e))}function Rc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _s(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ol(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xc(e,t){t=t.checked,t!=null&&Ea(e,"checked",t,!1)}function Ss(e,t){xc(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Es(e,t.type,n):t.hasOwnProperty("defaultValue")&&Es(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Es(e,t,n){(t!=="number"||Ti(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zn=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ks(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Zn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function Lc(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rh=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){rh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ih=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ts(e,t){if(t){if(ih[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ns=null;function Ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Cn=null,Nn=null;function Ll(e){if(e=zr(e)){if(typeof As!="function")throw Error(S(280));var t=e.stateNode;t&&(t=oo(t),As(e.stateNode,e.type,t))}}function $c(e){Cn?Nn?Nn.push(e):Nn=[e]:Cn=e}function Bc(){if(Cn){var e=Cn,t=Nn;if(Nn=Cn=null,Ll(e),t)for(e=0;e<t.length;e++)Ll(t[e])}}function jc(e,t){return e(t)}function bc(){}var Po=!1;function Vc(e,t,n){if(Po)return e(t,n);Po=!0;try{return jc(e,t,n)}finally{Po=!1,(Cn!==null||Nn!==null)&&(bc(),Bc())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ps=!1;if(at)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Ps=!1}function oh(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var rr=!1,Ci=null,Ni=!1,Os=null,sh={onError:function(e){rr=!0,Ci=e}};function ah(e,t,n,r,i,o,s,a,l){rr=!1,Ci=null,oh.apply(sh,arguments)}function lh(e,t,n,r,i,o,s,a,l){if(ah.apply(this,arguments),rr){if(rr){var u=Ci;rr=!1,Ci=null}else throw Error(S(198));Ni||(Ni=!0,Os=u)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ml(e){if(ln(e)!==e)throw Error(S(188))}function uh(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ml(i),e;if(o===r)return Ml(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Wc(e){return e=uh(e),e!==null?Kc(e):null}function Kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kc(e);if(t!==null)return t;e=e.sibling}return null}var Qc=Te.unstable_scheduleCallback,Fl=Te.unstable_cancelCallback,ch=Te.unstable_shouldYield,dh=Te.unstable_requestPaint,Y=Te.unstable_now,fh=Te.unstable_getCurrentPriorityLevel,Na=Te.unstable_ImmediatePriority,Gc=Te.unstable_UserBlockingPriority,Ai=Te.unstable_NormalPriority,ph=Te.unstable_LowPriority,Yc=Te.unstable_IdlePriority,to=null,qe=null;function hh(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:vh,mh=Math.log,gh=Math.LN2;function vh(e){return e>>>=0,e===0?32:31-(mh(e)/gh|0)|0}var qr=64,Xr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=er(a):(o&=s,o!==0&&(r=er(o)))}else s=n&~i,s!==0?r=er(s):o!==0&&(r=er(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-je(t),i=1<<n,r|=e[n],t&=~i;return r}function yh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-je(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=yh(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qc(){var e=qr;return qr<<=1,(qr&4194240)===0&&(qr=64),e}function Oo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-je(t),e[t]=n}function _h(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Aa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function Xc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Jc,Pa,Zc,ed,td,Rs=!1,Jr=[],kt=null,It=null,Tt=null,vr=new Map,yr=new Map,vt=[],Sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zl(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Wn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zr(t),t!==null&&Pa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Eh(e,t,n,r,i){switch(t){case"focusin":return kt=Wn(kt,e,t,n,r,i),!0;case"dragenter":return It=Wn(It,e,t,n,r,i),!0;case"mouseover":return Tt=Wn(Tt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vr.set(o,Wn(vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yr.set(o,Wn(yr.get(o)||null,e,t,n,r,i)),!0}return!1}function nd(e){var t=Ht(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Hc(n),t!==null){e.blockedOn=t,td(e.priority,function(){Zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ns=r,n.target.dispatchEvent(r),Ns=null}else return t=zr(n),t!==null&&Pa(t),e.blockedOn=n,!1;t.shift()}return!0}function Ul(e,t,n){fi(e)&&n.delete(t)}function kh(){Rs=!1,kt!==null&&fi(kt)&&(kt=null),It!==null&&fi(It)&&(It=null),Tt!==null&&fi(Tt)&&(Tt=null),vr.forEach(Ul),yr.forEach(Ul)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Rs||(Rs=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,kh)))}function wr(e){function t(i){return Kn(i,e)}if(0<Jr.length){Kn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Kn(kt,e),It!==null&&Kn(It,e),Tt!==null&&Kn(Tt,e),vr.forEach(t),yr.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)nd(n),n.blockedOn===null&&vt.shift()}var An=dt.ReactCurrentBatchConfig,Oi=!0;function Ih(e,t,n,r){var i=z,o=An.transition;An.transition=null;try{z=1,Oa(e,t,n,r)}finally{z=i,An.transition=o}}function Th(e,t,n,r){var i=z,o=An.transition;An.transition=null;try{z=4,Oa(e,t,n,r)}finally{z=i,An.transition=o}}function Oa(e,t,n,r){if(Oi){var i=xs(e,t,n,r);if(i===null)Bo(e,t,r,Di,n),zl(e,r);else if(Eh(i,e,t,n,r))r.stopPropagation();else if(zl(e,r),t&4&&-1<Sh.indexOf(e)){for(;i!==null;){var o=zr(i);if(o!==null&&Jc(o),o=xs(e,t,n,r),o===null&&Bo(e,t,r,Di,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bo(e,t,r,null,n)}}var Di=null;function xs(e,t,n,r){if(Di=null,e=Ca(r),e=Ht(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function rd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fh()){case Na:return 1;case Gc:return 4;case Ai:case ph:return 16;case Yc:return 536870912;default:return 16}default:return 16}}var wt=null,Da=null,pi=null;function id(){if(pi)return pi;var e,t=Da,n=t.length,r,i="value"in wt?wt.value:wt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return pi=i.slice(e,1<r?1-r:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function $l(){return!1}function Ne(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zr:$l,this.isPropagationStopped=$l,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=Ne(jn),Fr=W({},jn,{view:0,detail:0}),Ch=Ne(Fr),Do,Ro,Qn,no=W({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Do=e.screenX-Qn.screenX,Ro=e.screenY-Qn.screenY):Ro=Do=0,Qn=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),Bl=Ne(no),Nh=W({},no,{dataTransfer:0}),Ah=Ne(Nh),Ph=W({},Fr,{relatedTarget:0}),xo=Ne(Ph),Oh=W({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dh=Ne(Oh),Rh=W({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xh=Ne(Rh),Lh=W({},jn,{data:0}),jl=Ne(Lh),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zh[e])?!!t[e]:!1}function xa(){return Uh}var $h=W({},Fr,{key:function(e){if(e.key){var t=Mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bh=Ne($h),jh=W({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bl=Ne(jh),bh=W({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),Vh=Ne(bh),Hh=W({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wh=Ne(Hh),Kh=W({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qh=Ne(Kh),Gh=[9,13,27,32],La=at&&"CompositionEvent"in window,ir=null;at&&"documentMode"in document&&(ir=document.documentMode);var Yh=at&&"TextEvent"in window&&!ir,od=at&&(!La||ir&&8<ir&&11>=ir),Vl=String.fromCharCode(32),Hl=!1;function sd(e,t){switch(e){case"keyup":return Gh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function qh(e,t){switch(e){case"compositionend":return ad(t);case"keypress":return t.which!==32?null:(Hl=!0,Vl);case"textInput":return e=t.data,e===Vl&&Hl?null:e;default:return null}}function Xh(e,t){if(hn)return e==="compositionend"||!La&&sd(e,t)?(e=id(),pi=Da=wt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var Jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jh[e.type]:t==="textarea"}function ld(e,t,n,r){$c(r),t=Ri(t,"onChange"),0<t.length&&(n=new Ra("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,_r=null;function Zh(e){wd(e,0)}function ro(e){var t=vn(e);if(Rc(t))return e}function em(e,t){if(e==="change")return t}var ud=!1;if(at){var Lo;if(at){var Mo="oninput"in document;if(!Mo){var Kl=document.createElement("div");Kl.setAttribute("oninput","return;"),Mo=typeof Kl.oninput=="function"}Lo=Mo}else Lo=!1;ud=Lo&&(!document.documentMode||9<document.documentMode)}function Ql(){or&&(or.detachEvent("onpropertychange",cd),_r=or=null)}function cd(e){if(e.propertyName==="value"&&ro(_r)){var t=[];ld(t,_r,e,Ca(e)),Vc(Zh,t)}}function tm(e,t,n){e==="focusin"?(Ql(),or=t,_r=n,or.attachEvent("onpropertychange",cd)):e==="focusout"&&Ql()}function nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ro(_r)}function rm(e,t){if(e==="click")return ro(t)}function im(e,t){if(e==="input"||e==="change")return ro(t)}function om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:om;function Sr(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ms.call(t,i)||!Ve(e[i],t[i]))return!1}return!0}function Gl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yl(e,t){var n=Gl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gl(n)}}function dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fd(){for(var e=window,t=Ti();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ti(e.document)}return t}function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sm(e){var t=fd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dd(n.ownerDocument.documentElement,n)){if(r!==null&&Ma(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Yl(n,o);var s=Yl(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var am=at&&"documentMode"in document&&11>=document.documentMode,mn=null,Ls=null,sr=null,Ms=!1;function ql(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ms||mn==null||mn!==Ti(r)||(r=mn,"selectionStart"in r&&Ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&Sr(sr,r)||(sr=r,r=Ri(Ls,"onSelect"),0<r.length&&(t=new Ra("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Fo={},pd={};at&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function io(e){if(Fo[e])return Fo[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pd)return Fo[e]=t[n];return e}var hd=io("animationend"),md=io("animationiteration"),gd=io("animationstart"),vd=io("transitionend"),yd=new Map,Xl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){yd.set(e,t),an(t,[e])}for(var zo=0;zo<Xl.length;zo++){var Uo=Xl[zo],lm=Uo.toLowerCase(),um=Uo[0].toUpperCase()+Uo.slice(1);Lt(lm,"on"+um)}Lt(hd,"onAnimationEnd");Lt(md,"onAnimationIteration");Lt(gd,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(vd,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cm=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Jl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lh(r,t,void 0,e),e.currentTarget=null}function wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Jl(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Jl(i,a,u),o=l}}}if(Ni)throw e=Os,Ni=!1,Os=null,e}function B(e,t){var n=t[Bs];n===void 0&&(n=t[Bs]=new Set);var r=e+"__bubble";n.has(r)||(_d(t,e,2,!1),n.add(r))}function $o(e,t,n){var r=0;t&&(r|=4),_d(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ti]){e[ti]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(cm.has(n)||$o(n,!1,e),$o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,$o("selectionchange",!1,t))}}function _d(e,t,n,r){switch(rd(t)){case 1:var i=Ih;break;case 4:i=Th;break;default:i=Oa}n=i.bind(null,t,n,e),i=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bo(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ht(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Vc(function(){var u=o,p=Ca(n),h=[];e:{var m=yd.get(e);if(m!==void 0){var g=Ra,_=e;switch(e){case"keypress":if(hi(n)===0)break e;case"keydown":case"keyup":g=Bh;break;case"focusin":_="focus",g=xo;break;case"focusout":_="blur",g=xo;break;case"beforeblur":case"afterblur":g=xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Vh;break;case hd:case md:case gd:g=Dh;break;case vd:g=Wh;break;case"scroll":g=Ch;break;case"wheel":g=Qh;break;case"copy":case"cut":case"paste":g=xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bl}var v=(t&4)!==0,C=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var d=u,c;d!==null;){c=d;var y=c.stateNode;if(c.tag===5&&y!==null&&(c=y,f!==null&&(y=gr(d,f),y!=null&&v.push(kr(d,y,c)))),C)break;d=d.return}0<v.length&&(m=new g(m,_,null,n,p),h.push({event:m,listeners:v}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Ns&&(_=n.relatedTarget||n.fromElement)&&(Ht(_)||_[lt]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Ht(_):null,_!==null&&(C=ln(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Bl,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=bl,y="onPointerLeave",f="onPointerEnter",d="pointer"),C=g==null?m:vn(g),c=_==null?m:vn(_),m=new v(y,d+"leave",g,n,p),m.target=C,m.relatedTarget=c,y=null,Ht(p)===u&&(v=new v(f,d+"enter",_,n,p),v.target=c,v.relatedTarget=C,y=v),C=y,g&&_)t:{for(v=g,f=_,d=0,c=v;c;c=dn(c))d++;for(c=0,y=f;y;y=dn(y))c++;for(;0<d-c;)v=dn(v),d--;for(;0<c-d;)f=dn(f),c--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=dn(v),f=dn(f)}v=null}else v=null;g!==null&&Zl(h,m,g,v,!1),_!==null&&C!==null&&Zl(h,C,_,v,!0)}}e:{if(m=u?vn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=em;else if(Wl(m))if(ud)E=im;else{E=nm;var I=tm}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=rm);if(E&&(E=E(e,u))){ld(h,E,n,p);break e}I&&I(e,m,u),e==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&Es(m,"number",m.value)}switch(I=u?vn(u):window,e){case"focusin":(Wl(I)||I.contentEditable==="true")&&(mn=I,Ls=u,sr=null);break;case"focusout":sr=Ls=mn=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,ql(h,n,p);break;case"selectionchange":if(am)break;case"keydown":case"keyup":ql(h,n,p)}var w;if(La)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else hn?sd(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(od&&n.locale!=="ko"&&(hn||k!=="onCompositionStart"?k==="onCompositionEnd"&&hn&&(w=id()):(wt=p,Da="value"in wt?wt.value:wt.textContent,hn=!0)),I=Ri(u,k),0<I.length&&(k=new jl(k,e,null,n,p),h.push({event:k,listeners:I}),w?k.data=w:(w=ad(n),w!==null&&(k.data=w)))),(w=Yh?qh(e,n):Xh(e,n))&&(u=Ri(u,"onBeforeInput"),0<u.length&&(p=new jl("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=w))}wd(h,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gr(e,n),o!=null&&r.unshift(kr(e,o,i)),o=gr(e,t),o!=null&&r.push(kr(e,o,i))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zl(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gr(n,o),l!=null&&s.unshift(kr(n,l,a))):i||(l=gr(n,o),l!=null&&s.push(kr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var dm=/\r\n?/g,fm=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(dm,`
`).replace(fm,"")}function ni(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(S(425))}function xi(){}var Fs=null,zs=null;function Us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,pm=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,hm=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(mm)}:$s;function mm(e){setTimeout(function(){throw e})}function jo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wr(t)}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+bn,Ir="__reactProps$"+bn,lt="__reactContainer$"+bn,Bs="__reactEvents$"+bn,gm="__reactListeners$"+bn,vm="__reactHandles$"+bn;function Ht(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[Ye])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[Ye]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function oo(e){return e[Ir]||null}var js=[],yn=-1;function Mt(e){return{current:e}}function j(e){0>yn||(e.current=js[yn],js[yn]=null,yn--)}function $(e,t){yn++,js[yn]=e.current,e.current=t}var xt={},le=Mt(xt),ve=Mt(!1),Xt=xt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function Li(){j(ve),j(le)}function ru(e,t,n){if(le.current!==xt)throw Error(S(168));$(le,t),$(ve,n)}function Sd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,th(e)||"Unknown",i));return W({},n,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Xt=le.current,$(le,e),$(ve,ve.current),!0}function iu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Sd(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,j(ve),j(le),$(le,e)):j(ve),$(ve,n)}var nt=null,so=!1,bo=!1;function Ed(e){nt===null?nt=[e]:nt.push(e)}function ym(e){so=!0,Ed(e)}function Ft(){if(!bo&&nt!==null){bo=!0;var e=0,t=z;try{var n=nt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,so=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),Qc(Na,Ft),i}finally{z=t,bo=!1}}return null}var wn=[],_n=0,Fi=null,zi=0,Ae=[],Pe=0,Jt=null,rt=1,it="";function jt(e,t){wn[_n++]=zi,wn[_n++]=Fi,Fi=e,zi=t}function kd(e,t,n){Ae[Pe++]=rt,Ae[Pe++]=it,Ae[Pe++]=Jt,Jt=e;var r=rt;e=it;var i=32-je(r)-1;r&=~(1<<i),n+=1;var o=32-je(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,rt=1<<32-je(t)+i|n<<i|r,it=o+e}else rt=1<<o|n<<i|r,it=e}function Fa(e){e.return!==null&&(jt(e,1),kd(e,1,0))}function za(e){for(;e===Fi;)Fi=wn[--_n],wn[_n]=null,zi=wn[--_n],wn[_n]=null;for(;e===Jt;)Jt=Ae[--Pe],Ae[Pe]=null,it=Ae[--Pe],Ae[Pe]=null,rt=Ae[--Pe],Ae[Pe]=null}var Ee=null,Se=null,b=!1,Be=null;function Id(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Se=Ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Se=null,!0):!1;default:return!1}}function bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vs(e){if(b){var t=Se;if(t){var n=t;if(!ou(e,t)){if(bs(e))throw Error(S(418));t=Ct(n.nextSibling);var r=Ee;t&&ou(e,t)?Id(r,n):(e.flags=e.flags&-4097|2,b=!1,Ee=e)}}else{if(bs(e))throw Error(S(418));e.flags=e.flags&-4097|2,b=!1,Ee=e}}}function su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function ri(e){if(e!==Ee)return!1;if(!b)return su(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Us(e.type,e.memoizedProps)),t&&(t=Se)){if(bs(e))throw Td(),Error(S(418));for(;t;)Id(e,t),t=Ct(t.nextSibling)}if(su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=Ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ee?Ct(e.stateNode.nextSibling):null;return!0}function Td(){for(var e=Se;e;)e=Ct(e.nextSibling)}function Mn(){Se=Ee=null,b=!1}function Ua(e){Be===null?Be=[e]:Be.push(e)}var wm=dt.ReactCurrentBatchConfig;function Ue(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ui=Mt(null),$i=null,Sn=null,$a=null;function Ba(){$a=Sn=$i=null}function ja(e){var t=Ui.current;j(Ui),e._currentValue=t}function Hs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){$i=e,$a=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ge=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if($i===null)throw Error(S(308));Sn=e,$i.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Wt=null;function ba(e){Wt===null?Wt=[e]:Wt.push(e)}function Cd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ba(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(L&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,ba(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}function au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bi(e,t,n,r){var i=e.updateQueue;gt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,p=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,v=a;switch(m=t,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(g,h,m);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,m=typeof _=="function"?_.call(g,h,m):_,m==null)break e;h=W({},h,m);break e;case 2:gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=g,l=h):p=p.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(p===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);en|=s,e.lanes=s,e.memoizedState=h}}function lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ad=new Cc.Component().refs;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ao={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=Pt(e),o=ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,i),t!==null&&(be(t,e,i,r),mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=Pt(e),o=ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,i),t!==null&&(be(t,e,i,r),mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=Pt(e),i=ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,r),t!==null&&(be(t,e,r,n),mi(t,e,r))}};function uu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,o):!0}function Pd(e,t,n){var r=!1,i=xt,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(i=ye(t)?Xt:le.current,r=t.contextTypes,o=(r=r!=null)?Ln(e,i):xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ao.enqueueReplaceState(t,t.state,null)}function Ks(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ad,Va(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Le(o):(o=ye(t)?Xt:le.current,i.context=Ln(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ws(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ao.enqueueReplaceState(i,i.state,null),Bi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Ad&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function du(e){var t=e._init;return t(e._payload)}function Od(e){function t(f,d){if(e){var c=f.deletions;c===null?(f.deletions=[d],f.flags|=16):c.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Ot(f,d),f.index=0,f.sibling=null,f}function o(f,d,c){return f.index=c,e?(c=f.alternate,c!==null?(c=c.index,c<d?(f.flags|=2,d):c):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,c,y){return d===null||d.tag!==6?(d=Yo(c,f.mode,y),d.return=f,d):(d=i(d,c),d.return=f,d)}function l(f,d,c,y){var E=c.type;return E===pn?p(f,d,c.props.children,y,c.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mt&&du(E)===d.type)?(y=i(d,c.props),y.ref=Gn(f,d,c),y.return=f,y):(y=Si(c.type,c.key,c.props,null,f.mode,y),y.ref=Gn(f,d,c),y.return=f,y)}function u(f,d,c,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==c.containerInfo||d.stateNode.implementation!==c.implementation?(d=qo(c,f.mode,y),d.return=f,d):(d=i(d,c.children||[]),d.return=f,d)}function p(f,d,c,y,E){return d===null||d.tag!==7?(d=qt(c,f.mode,y,E),d.return=f,d):(d=i(d,c),d.return=f,d)}function h(f,d,c){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Yo(""+d,f.mode,c),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qr:return c=Si(d.type,d.key,d.props,null,f.mode,c),c.ref=Gn(f,null,d),c.return=f,c;case fn:return d=qo(d,f.mode,c),d.return=f,d;case mt:var y=d._init;return h(f,y(d._payload),c)}if(Zn(d)||Vn(d))return d=qt(d,f.mode,c,null),d.return=f,d;ii(f,d)}return null}function m(f,d,c,y){var E=d!==null?d.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return E!==null?null:a(f,d,""+c,y);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return c.key===E?l(f,d,c,y):null;case fn:return c.key===E?u(f,d,c,y):null;case mt:return E=c._init,m(f,d,E(c._payload),y)}if(Zn(c)||Vn(c))return E!==null?null:p(f,d,c,y,null);ii(f,c)}return null}function g(f,d,c,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(c)||null,a(d,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qr:return f=f.get(y.key===null?c:y.key)||null,l(d,f,y,E);case fn:return f=f.get(y.key===null?c:y.key)||null,u(d,f,y,E);case mt:var I=y._init;return g(f,d,c,I(y._payload),E)}if(Zn(y)||Vn(y))return f=f.get(c)||null,p(d,f,y,E,null);ii(d,y)}return null}function _(f,d,c,y){for(var E=null,I=null,w=d,k=d=0,P=null;w!==null&&k<c.length;k++){w.index>k?(P=w,w=null):P=w.sibling;var A=m(f,w,c[k],y);if(A===null){w===null&&(w=P);break}e&&w&&A.alternate===null&&t(f,w),d=o(A,d,k),I===null?E=A:I.sibling=A,I=A,w=P}if(k===c.length)return n(f,w),b&&jt(f,k),E;if(w===null){for(;k<c.length;k++)w=h(f,c[k],y),w!==null&&(d=o(w,d,k),I===null?E=w:I.sibling=w,I=w);return b&&jt(f,k),E}for(w=r(f,w);k<c.length;k++)P=g(w,f,k,c[k],y),P!==null&&(e&&P.alternate!==null&&w.delete(P.key===null?k:P.key),d=o(P,d,k),I===null?E=P:I.sibling=P,I=P);return e&&w.forEach(function(Q){return t(f,Q)}),b&&jt(f,k),E}function v(f,d,c,y){var E=Vn(c);if(typeof E!="function")throw Error(S(150));if(c=E.call(c),c==null)throw Error(S(151));for(var I=E=null,w=d,k=d=0,P=null,A=c.next();w!==null&&!A.done;k++,A=c.next()){w.index>k?(P=w,w=null):P=w.sibling;var Q=m(f,w,A.value,y);if(Q===null){w===null&&(w=P);break}e&&w&&Q.alternate===null&&t(f,w),d=o(Q,d,k),I===null?E=Q:I.sibling=Q,I=Q,w=P}if(A.done)return n(f,w),b&&jt(f,k),E;if(w===null){for(;!A.done;k++,A=c.next())A=h(f,A.value,y),A!==null&&(d=o(A,d,k),I===null?E=A:I.sibling=A,I=A);return b&&jt(f,k),E}for(w=r(f,w);!A.done;k++,A=c.next())A=g(w,f,k,A.value,y),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?k:A.key),d=o(A,d,k),I===null?E=A:I.sibling=A,I=A);return e&&w.forEach(function(We){return t(f,We)}),b&&jt(f,k),E}function C(f,d,c,y){if(typeof c=="object"&&c!==null&&c.type===pn&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:e:{for(var E=c.key,I=d;I!==null;){if(I.key===E){if(E=c.type,E===pn){if(I.tag===7){n(f,I.sibling),d=i(I,c.props.children),d.return=f,f=d;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mt&&du(E)===I.type){n(f,I.sibling),d=i(I,c.props),d.ref=Gn(f,I,c),d.return=f,f=d;break e}n(f,I);break}else t(f,I);I=I.sibling}c.type===pn?(d=qt(c.props.children,f.mode,y,c.key),d.return=f,f=d):(y=Si(c.type,c.key,c.props,null,f.mode,y),y.ref=Gn(f,d,c),y.return=f,f=y)}return s(f);case fn:e:{for(I=c.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===c.containerInfo&&d.stateNode.implementation===c.implementation){n(f,d.sibling),d=i(d,c.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=qo(c,f.mode,y),d.return=f,f=d}return s(f);case mt:return I=c._init,C(f,d,I(c._payload),y)}if(Zn(c))return _(f,d,c,y);if(Vn(c))return v(f,d,c,y);ii(f,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,c),d.return=f,f=d):(n(f,d),d=Yo(c,f.mode,y),d.return=f,f=d),s(f)):n(f,d)}return C}var Fn=Od(!0),Dd=Od(!1),Ur={},Xe=Mt(Ur),Tr=Mt(Ur),Cr=Mt(Ur);function Kt(e){if(e===Ur)throw Error(S(174));return e}function Ha(e,t){switch($(Cr,t),$(Tr,e),$(Xe,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Is(t,e)}j(Xe),$(Xe,t)}function zn(){j(Xe),j(Tr),j(Cr)}function Rd(e){Kt(Cr.current);var t=Kt(Xe.current),n=Is(t,e.type);t!==n&&($(Tr,e),$(Xe,n))}function Wa(e){Tr.current===e&&(j(Xe),j(Tr))}var V=Mt(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=[];function Ka(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var gi=dt.ReactCurrentDispatcher,Ho=dt.ReactCurrentBatchConfig,Zt=0,H=null,X=null,ee=null,bi=!1,ar=!1,Nr=0,_m=0;function oe(){throw Error(S(321))}function Qa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Ga(e,t,n,r,i,o){if(Zt=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gi.current=e===null||e.memoizedState===null?Im:Tm,e=n(r,i),ar){o=0;do{if(ar=!1,Nr=0,25<=o)throw Error(S(301));o+=1,ee=X=null,t.updateQueue=null,gi.current=Cm,e=n(r,i)}while(ar)}if(gi.current=Vi,t=X!==null&&X.next!==null,Zt=0,ee=X=H=null,bi=!1,t)throw Error(S(300));return e}function Ya(){var e=Nr!==0;return Nr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Me(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function Ar(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Me(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var p=u.lane;if((Zt&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,H.lanes|=p,en|=p}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ve(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,en|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ko(e){var t=Me(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ve(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xd(){}function Ld(e,t){var n=H,r=Me(),i=t(),o=!Ve(r.memoizedState,i);if(o&&(r.memoizedState=i,ge=!0),r=r.queue,qa(zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Pr(9,Fd.bind(null,n,r,i,t),void 0,null),te===null)throw Error(S(349));(Zt&30)!==0||Md(n,t,i)}return i}function Md(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fd(e,t,n,r){t.value=n,t.getSnapshot=r,Ud(t)&&$d(e)}function zd(e,t,n){return n(function(){Ud(t)&&$d(e)})}function Ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function $d(e){var t=ut(e,1);t!==null&&be(t,e,1,-1)}function fu(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t.queue=e,e=e.dispatch=km.bind(null,H,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bd(){return Me().memoizedState}function vi(e,t,n,r){var i=Ge();H.flags|=e,i.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function lo(e,t,n,r){var i=Me();r=r===void 0?null:r;var o=void 0;if(X!==null){var s=X.memoizedState;if(o=s.destroy,r!==null&&Qa(r,s.deps)){i.memoizedState=Pr(t,n,o,r);return}}H.flags|=e,i.memoizedState=Pr(1|t,n,o,r)}function pu(e,t){return vi(8390656,8,e,t)}function qa(e,t){return lo(2048,8,e,t)}function jd(e,t){return lo(4,2,e,t)}function bd(e,t){return lo(4,4,e,t)}function Vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){return n=n!=null?n.concat([e]):null,lo(4,4,Vd.bind(null,t,e),n)}function Xa(){}function Wd(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kd(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qd(e,t,n){return(Zt&21)===0?(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n):(Ve(n,t)||(n=qc(),H.lanes|=n,en|=n,e.baseState=!0),t)}function Sm(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Ho.transition;Ho.transition={};try{e(!1),t()}finally{z=n,Ho.transition=r}}function Gd(){return Me().memoizedState}function Em(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yd(e))qd(t,n);else if(n=Cd(e,t,n,r),n!==null){var i=ce();be(n,e,r,i),Xd(n,t,r)}}function km(e,t,n){var r=Pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yd(e))qd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ve(a,s)){var l=t.interleaved;l===null?(i.next=i,ba(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Cd(e,t,i,r),n!==null&&(i=ce(),be(n,e,r,i),Xd(n,t,r))}}function Yd(e){var t=e.alternate;return e===H||t!==null&&t===H}function qd(e,t){ar=bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}var Vi={readContext:Le,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Im={readContext:Le,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vi(4194308,4,Vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return vi(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Em.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:fu,useDebugValue:Xa,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=fu(!1),t=e[0];return e=Sm.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Ge();if(b){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),te===null)throw Error(S(349));(Zt&30)!==0||Md(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,pu(zd.bind(null,r,o,e),[e]),r.flags|=2048,Pr(9,Fd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=te.identifierPrefix;if(b){var n=it,r=rt;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tm={readContext:Le,useCallback:Wd,useContext:Le,useEffect:qa,useImperativeHandle:Hd,useInsertionEffect:jd,useLayoutEffect:bd,useMemo:Kd,useReducer:Wo,useRef:Bd,useState:function(){return Wo(Ar)},useDebugValue:Xa,useDeferredValue:function(e){var t=Me();return Qd(t,X.memoizedState,e)},useTransition:function(){var e=Wo(Ar)[0],t=Me().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:Ld,useId:Gd,unstable_isNewReconciler:!1},Cm={readContext:Le,useCallback:Wd,useContext:Le,useEffect:qa,useImperativeHandle:Hd,useInsertionEffect:jd,useLayoutEffect:bd,useMemo:Kd,useReducer:Ko,useRef:Bd,useState:function(){return Ko(Ar)},useDebugValue:Xa,useDeferredValue:function(e){var t=Me();return X===null?t.memoizedState=e:Qd(t,X.memoizedState,e)},useTransition:function(){var e=Ko(Ar)[0],t=Me().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:Ld,useId:Gd,unstable_isNewReconciler:!1};function Un(e,t){try{var n="",r=t;do n+=eh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Qo(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nm=typeof WeakMap=="function"?WeakMap:Map;function Jd(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wi||(Wi=!0,ra=r),Qs(e,t)},n}function Zd(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qs(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jm.bind(null,e,t,n),t.then(e,e))}function mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Am=dt.ReactCurrentOwner,ge=!1;function ue(e,t,n,r){t.child=e===null?Dd(t,null,n,r):Fn(t,e.child,n,r)}function vu(e,t,n,r,i){n=n.render;var o=t.ref;return Pn(t,i),r=Ga(e,t,n,r,o,i),n=Ya(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(b&&n&&Fa(t),t.flags|=1,ue(e,t,r,i),t.child)}function yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ol(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ef(e,t,o,r,i)):(e=Si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(s,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Ot(o,r),e.ref=t.ref,e.return=t,t.child=e}function ef(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Sr(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ge=!0);else return t.lanes=e.lanes,ct(e,t,i)}return Gs(e,t,n,r,i)}function tf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(kn,_e),_e|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(kn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(kn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(kn,_e),_e|=r;return ue(e,t,i,n),t.child}function nf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,i){var o=ye(n)?Xt:le.current;return o=Ln(t,o),Pn(t,i),n=Ga(e,t,n,r,o,i),r=Ya(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(b&&r&&Fa(t),t.flags|=1,ue(e,t,n,i),t.child)}function wu(e,t,n,r,i){if(ye(n)){var o=!0;Mi(t)}else o=!1;if(Pn(t,i),t.stateNode===null)yi(e,t),Pd(t,n,r),Ks(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ye(n)?Xt:le.current,u=Ln(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&cu(t,s,r,u),gt=!1;var m=t.memoizedState;s.state=m,Bi(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ve.current||gt?(typeof p=="function"&&(Ws(t,n,p,r),l=t.memoizedState),(a=gt||uu(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Nd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ue(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=ye(n)?Xt:le.current,l=Ln(t,l));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&cu(t,s,r,l),gt=!1,m=t.memoizedState,s.state=m,Bi(t,r,s,i);var _=t.memoizedState;a!==h||m!==_||ve.current||gt?(typeof g=="function"&&(Ws(t,n,g,r),_=t.memoizedState),(u=gt||uu(t,n,u,r,m,_,l)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ys(e,t,n,r,o,i)}function Ys(e,t,n,r,i,o){nf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&iu(t,n,!1),ct(e,t,o);r=t.stateNode,Am.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Fn(t,e.child,null,o),t.child=Fn(t,null,a,o)):ue(e,t,a,o),t.memoizedState=r.state,i&&iu(t,n,!0),t.child}function rf(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),Ha(e,t.containerInfo)}function _u(e,t,n,r,i){return Mn(),Ua(i),t.flags|=256,ue(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function of(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(V,i&1),e===null)return Vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fo(s,r,0,null),e=qt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xs(n),t.memoizedState=qs,e):Ja(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Pm(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ot(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ot(a,o):(o=qt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Xs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=qs,r}return o=e.child,e=o.sibling,r=Ot(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ja(e,t){return t=fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&Ua(r),Fn(t,e.child,null,n),e=Ja(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Qo(Error(S(422))),oi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fo({mode:"visible",children:r.children},i,0,null),o=qt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Fn(t,e.child,null,s),t.child.memoizedState=Xs(s),t.memoizedState=qs,o);if((t.mode&1)===0)return oi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=Qo(o,r,void 0),oi(e,t,s,r)}if(a=(s&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ut(e,i),be(r,e,i,-1))}return il(),r=Qo(Error(S(421))),oi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=Ct(i.nextSibling),Ee=t,b=!0,Be=null,e!==null&&(Ae[Pe++]=rt,Ae[Pe++]=it,Ae[Pe++]=Jt,rt=e.id,it=e.overflow,Jt=t),t=Ja(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hs(e.return,t,n)}function Go(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function sf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=V.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(V,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ji(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Go(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Go(t,!0,n,null,o);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Om(e,t,n){switch(t.tag){case 3:rf(t),Mn();break;case 5:Rd(t);break;case 1:ye(t.type)&&Mi(t);break;case 4:Ha(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(Ui,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(V,V.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?of(e,t,n):($(V,V.current&1),e=ct(e,t,n),e!==null?e.sibling:null);$(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return sf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,tf(e,t,n)}return ct(e,t,n)}var af,Js,lf,uf;af=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Js=function(){};lf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kt(Xe.current);var o=null;switch(n){case"input":i=_s(e,i),r=_s(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=ks(e,i),r=ks(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xi)}Ts(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};uf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yn(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dm(e,t,n){var r=t.pendingProps;switch(za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ye(t.type)&&Li(),se(t),null;case 3:return r=t.stateNode,zn(),j(ve),j(le),Ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Be!==null&&(sa(Be),Be=null))),Js(e,t),se(t),null;case 5:Wa(t);var i=Kt(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)lf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return se(t),null}if(e=Kt(Xe.current),ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ye]=t,r[Ir]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)B(tr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Ol(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":Rl(r,o),B("invalid",r)}Ts(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,a,e),i=["children",""+a]):hr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":Gr(r),Dl(r,o,!0);break;case"textarea":Gr(r),xl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ye]=t,e[Ir]=r,af(e,t,!1,!1),t.stateNode=e;e:{switch(s=Cs(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)B(tr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Ol(e,r),i=_s(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),B("invalid",e);break;case"textarea":Rl(e,r),i=ks(e,r),B("invalid",e);break;default:i=r}Ts(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Uc(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fc(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mr(e,l):typeof l=="number"&&mr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",e):l!=null&&Ea(e,o,l,s))}switch(n){case"input":Gr(e),Dl(e,r,!1);break;case"textarea":Gr(e),xl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)uf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(Cr.current),Kt(Xe.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return se(t),null;case 13:if(j(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&Se!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Td(),Mn(),t.flags|=98560,o=!1;else if(o=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ye]=t}else Mn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Be!==null&&(sa(Be),Be=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(V.current&1)!==0?J===0&&(J=3):il())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return zn(),Js(e,t),e===null&&Er(t.stateNode.containerInfo),se(t),null;case 10:return ja(t.type._context),se(t),null;case 17:return ye(t.type)&&Li(),se(t),null;case 19:if(j(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Yn(o,!1);else{if(J!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ji(e),s!==null){for(t.flags|=128,Yn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>$n&&(t.flags|=128,r=!0,Yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ji(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!b)return se(t),null}else 2*Y()-o.renderingStartTime>$n&&n!==1073741824&&(t.flags|=128,r=!0,Yn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=V.current,$(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return rl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(_e&1073741824)!==0&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Rm(e,t){switch(za(t),t.tag){case 1:return ye(t.type)&&Li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),j(ve),j(le),Ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wa(t),null;case 13:if(j(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(V),null;case 4:return zn(),null;case 10:return ja(t.type._context),null;case 22:case 23:return rl(),null;case 24:return null;default:return null}}var si=!1,ae=!1,xm=typeof WeakSet=="function"?WeakSet:Set,N=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Zs(e,t,n){try{n()}catch(r){K(e,t,r)}}var Eu=!1;function Lm(e,t){if(Fs=Oi,e=fd(),Ma(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,p=0,h=e,m=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++p===r&&(l=s),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zs={focusedElem:e,selectionRange:n},Oi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,C=_.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ue(t.type,v),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return _=Eu,Eu=!1,_}function lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zs(t,n,o)}i=i.next}while(i!==r)}}function uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cf(e){var t=e.alternate;t!==null&&(e.alternate=null,cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[Ir],delete t[Bs],delete t[gm],delete t[vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function df(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}var ne=null,$e=!1;function pt(e,t,n){for(n=n.child;n!==null;)ff(e,t,n),n=n.sibling}function ff(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:ae||En(n,t);case 6:var r=ne,i=$e;ne=null,pt(e,t,n),ne=r,$e=i,ne!==null&&($e?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&($e?(e=ne,n=n.stateNode,e.nodeType===8?jo(e.parentNode,n):e.nodeType===1&&jo(e,n),wr(e)):jo(ne,n.stateNode));break;case 4:r=ne,i=$e,ne=n.stateNode.containerInfo,$e=!0,pt(e,t,n),ne=r,$e=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Zs(n,t,s),i=i.next}while(i!==r)}pt(e,t,n);break;case 1:if(!ae&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,pt(e,t,n),ae=r):pt(e,t,n);break;default:pt(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xm),t.forEach(function(r){var i=Vm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,$e=!1;break e;case 3:ne=a.stateNode.containerInfo,$e=!0;break e;case 4:ne=a.stateNode.containerInfo,$e=!0;break e}a=a.return}if(ne===null)throw Error(S(160));ff(o,s,i),ne=null,$e=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pf(t,e),t=t.sibling}function pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Qe(e),r&4){try{lr(3,e,e.return),uo(3,e)}catch(v){K(e,e.return,v)}try{lr(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:ze(t,e),Qe(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(ze(t,e),Qe(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var i=e.stateNode;try{mr(i,"")}catch(v){K(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&xc(i,o),Cs(a,s);var u=Cs(a,o);for(s=0;s<l.length;s+=2){var p=l[s],h=l[s+1];p==="style"?Uc(i,h):p==="dangerouslySetInnerHTML"?Fc(i,h):p==="children"?mr(i,h):Ea(i,p,h,u)}switch(a){case"input":Ss(i,o);break;case"textarea":Lc(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Tn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Tn(i,!!o.multiple,o.defaultValue,!0):Tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ir]=o}catch(v){K(e,e.return,v)}}break;case 6:if(ze(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){K(e,e.return,v)}}break;case 3:if(ze(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:ze(t,e),Qe(e);break;case 13:ze(t,e),Qe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tl=Y())),r&4&&Iu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||p,ze(t,e),ae=u):ze(t,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(N=e,p=e.child;p!==null;){for(h=N=p;N!==null;){switch(m=N,g=m.child,m.tag){case 0:case 11:case 14:case 15:lr(4,m,m.return);break;case 1:En(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(v){K(r,n,v)}}break;case 5:En(m,m.return);break;case 22:if(m.memoizedState!==null){Cu(h);continue}}g!==null?(g.return=m,N=g):Cu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zc("display",s))}catch(v){K(e,e.return,v)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){K(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(t,e),Qe(e),r&4&&Iu(e);break;case 21:break;default:ze(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(df(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mr(i,""),r.flags&=-33);var o=ku(e);na(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ku(e);ta(e,a,s);break;default:throw Error(S(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mm(e,t,n){N=e,hf(e)}function hf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||si;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=si;var u=ae;if(si=s,(ae=l)&&!u)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?Nu(i):l!==null?(l.return=s,N=l):Nu(i);for(;o!==null;)N=o,hf(o),o=o.sibling;N=i,si=a,ae=u}Tu(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,N=o):Tu(e)}}function Tu(e){for(;N!==null;){var t=N;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ae||uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&lu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&wr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&ea(t)}catch(m){K(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Cu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Nu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uo(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{ea(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{ea(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Fm=Math.ceil,Hi=dt.ReactCurrentDispatcher,Za=dt.ReactCurrentOwner,De=dt.ReactCurrentBatchConfig,L=0,te=null,q=null,re=0,_e=0,kn=Mt(0),J=0,Or=null,en=0,co=0,el=0,ur=null,me=null,tl=0,$n=1/0,et=null,Wi=!1,ra=null,At=null,ai=!1,_t=null,Ki=0,cr=0,ia=null,wi=-1,_i=0;function ce(){return(L&6)!==0?Y():wi!==-1?wi:wi=Y()}function Pt(e){return(e.mode&1)===0?1:(L&2)!==0&&re!==0?re&-re:wm.transition!==null?(_i===0&&(_i=qc()),_i):(e=z,e!==0||(e=window.event,e=e===void 0?16:rd(e.type)),e)}function be(e,t,n,r){if(50<cr)throw cr=0,ia=null,Error(S(185));Mr(e,n,r),((L&2)===0||e!==te)&&(e===te&&((L&2)===0&&(co|=n),J===4&&yt(e,re)),we(e,r),n===1&&L===0&&(t.mode&1)===0&&($n=Y()+500,so&&Ft()))}function we(e,t){var n=e.callbackNode;wh(e,t);var r=Pi(e,e===te?re:0);if(r===0)n!==null&&Fl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fl(n),t===1)e.tag===0?ym(Au.bind(null,e)):Ed(Au.bind(null,e)),hm(function(){(L&6)===0&&Ft()}),n=null;else{switch(Xc(r)){case 1:n=Na;break;case 4:n=Gc;break;case 16:n=Ai;break;case 536870912:n=Yc;break;default:n=Ai}n=Ef(n,mf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mf(e,t){if(wi=-1,_i=0,(L&6)!==0)throw Error(S(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Pi(e,e===te?re:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Qi(e,r);else{t=r;var i=L;L|=2;var o=vf();(te!==e||re!==t)&&(et=null,$n=Y()+500,Yt(e,t));do try{$m();break}catch(a){gf(e,a)}while(1);Ba(),Hi.current=o,L=i,q!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(i=Ds(e),i!==0&&(r=i,t=oa(e,i))),t===1)throw n=Or,Yt(e,0),yt(e,r),we(e,Y()),n;if(t===6)yt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!zm(i)&&(t=Qi(e,r),t===2&&(o=Ds(e),o!==0&&(r=o,t=oa(e,o))),t===1))throw n=Or,Yt(e,0),yt(e,r),we(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:bt(e,me,et);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=tl+500-Y(),10<t)){if(Pi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$s(bt.bind(null,e,me,et),t);break}bt(e,me,et);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-je(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fm(r/1960))-r,10<r){e.timeoutHandle=$s(bt.bind(null,e,me,et),r);break}bt(e,me,et);break;case 5:bt(e,me,et);break;default:throw Error(S(329))}}}return we(e,Y()),e.callbackNode===n?mf.bind(null,e):null}function oa(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=Qi(e,t),e!==2&&(t=me,me=n,t!==null&&sa(t)),e}function sa(e){me===null?me=e:me.push.apply(me,e)}function zm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ve(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~el,t&=~co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-je(t),r=1<<n;e[n]=-1,t&=~r}}function Au(e){if((L&6)!==0)throw Error(S(327));On();var t=Pi(e,0);if((t&1)===0)return we(e,Y()),null;var n=Qi(e,t);if(e.tag!==0&&n===2){var r=Ds(e);r!==0&&(t=r,n=oa(e,r))}if(n===1)throw n=Or,Yt(e,0),yt(e,t),we(e,Y()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,me,et),we(e,Y()),null}function nl(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&($n=Y()+500,so&&Ft())}}function tn(e){_t!==null&&_t.tag===0&&(L&6)===0&&On();var t=L;L|=1;var n=De.transition,r=z;try{if(De.transition=null,z=1,e)return e()}finally{z=r,De.transition=n,L=t,(L&6)===0&&Ft()}}function rl(){_e=kn.current,j(kn)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pm(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Li();break;case 3:zn(),j(ve),j(le),Ka();break;case 5:Wa(r);break;case 4:zn();break;case 13:j(V);break;case 19:j(V);break;case 10:ja(r.type._context);break;case 22:case 23:rl()}n=n.return}if(te=e,q=e=Ot(e.current,null),re=_e=t,J=0,Or=null,el=co=en=0,me=ur=null,Wt!==null){for(t=0;t<Wt.length;t++)if(n=Wt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Wt=null}return e}function gf(e,t){do{var n=q;try{if(Ba(),gi.current=Vi,bi){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bi=!1}if(Zt=0,ee=X=H=null,ar=!1,Nr=0,Za.current=null,n===null||n.return===null){J=1,Or=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=mu(s);if(g!==null){g.flags&=-257,gu(g,s,a,o,t),g.mode&1&&hu(o,u,t),t=g,l=u;var _=t.updateQueue;if(_===null){var v=new Set;v.add(l),t.updateQueue=v}else _.add(l);break e}else{if((t&1)===0){hu(o,u,t),il();break e}l=Error(S(426))}}else if(b&&a.mode&1){var C=mu(s);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),gu(C,s,a,o,t),Ua(Un(l,a));break e}}o=l=Un(l,a),J!==4&&(J=2),ur===null?ur=[o]:ur.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Jd(o,l,t);au(o,f);break e;case 1:a=l;var d=o.type,c=o.stateNode;if((o.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(At===null||!At.has(c)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Zd(o,a,t);au(o,y);break e}}o=o.return}while(o!==null)}wf(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function vf(){var e=Hi.current;return Hi.current=Vi,e===null?Vi:e}function il(){(J===0||J===3||J===2)&&(J=4),te===null||(en&268435455)===0&&(co&268435455)===0||yt(te,re)}function Qi(e,t){var n=L;L|=2;var r=vf();(te!==e||re!==t)&&(et=null,Yt(e,t));do try{Um();break}catch(i){gf(e,i)}while(1);if(Ba(),L=n,Hi.current=r,q!==null)throw Error(S(261));return te=null,re=0,J}function Um(){for(;q!==null;)yf(q)}function $m(){for(;q!==null&&!ch();)yf(q)}function yf(e){var t=Sf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?wf(e):q=t,Za.current=null}function wf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Dm(n,t,_e),n!==null){q=n;return}}else{if(n=Rm(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function bt(e,t,n){var r=z,i=De.transition;try{De.transition=null,z=1,Bm(e,t,n,r)}finally{De.transition=i,z=r}return null}function Bm(e,t,n,r){do On();while(_t!==null);if((L&6)!==0)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(_h(e,o),e===te&&(q=te=null,re=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ai||(ai=!0,Ef(Ai,function(){return On(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=De.transition,De.transition=null;var s=z;z=1;var a=L;L|=4,Za.current=null,Lm(e,n),pf(n,e),sm(zs),Oi=!!Fs,zs=Fs=null,e.current=n,Mm(n),dh(),L=a,z=s,De.transition=o}else e.current=n;if(ai&&(ai=!1,_t=e,Ki=i),o=e.pendingLanes,o===0&&(At=null),hh(n.stateNode),we(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wi)throw Wi=!1,e=ra,ra=null,e;return(Ki&1)!==0&&e.tag!==0&&On(),o=e.pendingLanes,(o&1)!==0?e===ia?cr++:(cr=0,ia=e):cr=0,Ft(),null}function On(){if(_t!==null){var e=Xc(Ki),t=De.transition,n=z;try{if(De.transition=null,z=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,Ki=0,(L&6)!==0)throw Error(S(331));var i=L;for(L|=4,N=e.current;N!==null;){var o=N,s=o.child;if((N.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:lr(8,p,o)}var h=p.child;if(h!==null)h.return=p,N=h;else for(;N!==null;){p=N;var m=p.sibling,g=p.return;if(cf(p),p===u){N=null;break}if(m!==null){m.return=g,N=m;break}N=g}}}var _=o.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}N=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:lr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){s=N;var c=s.child;if((s.subtreeFlags&2064)!==0&&c!==null)c.return=s,N=c;else e:for(s=d;N!==null;){if(a=N,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:uo(9,a)}}catch(E){K(a,a.return,E)}if(a===s){N=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,N=y;break e}N=a.return}}if(L=i,Ft(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(to,e)}catch{}r=!0}return r}finally{z=n,De.transition=t}}return!1}function Pu(e,t,n){t=Un(n,t),t=Jd(e,t,1),e=Nt(e,t,1),t=ce(),e!==null&&(Mr(e,1,t),we(e,t))}function K(e,t,n){if(e.tag===3)Pu(e,e,n);else for(;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Un(n,e),e=Zd(t,e,1),t=Nt(t,e,1),e=ce(),t!==null&&(Mr(t,1,e),we(t,e));break}}t=t.return}}function jm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Y()-tl?Yt(e,0):el|=n),we(e,t)}function _f(e,t){t===0&&((e.mode&1)===0?t=1:(t=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var n=ce();e=ut(e,t),e!==null&&(Mr(e,t,n),we(e,n))}function bm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function Vm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),_f(e,n)}var Sf;Sf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ge=!1,Om(e,t,n);ge=(e.flags&131072)!==0}else ge=!1,b&&(t.flags&1048576)!==0&&kd(t,zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yi(e,t),e=t.pendingProps;var i=Ln(t,le.current);Pn(t,n),i=Ga(null,t,r,e,i,n);var o=Ya();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,Mi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Va(t),i.updater=ao,t.stateNode=i,i._reactInternals=t,Ks(t,r,e,n),t=Ys(null,t,r,!0,o,n)):(t.tag=0,b&&o&&Fa(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Wm(r),e=Ue(r,e),i){case 0:t=Gs(null,t,r,e,n);break e;case 1:t=wu(null,t,r,e,n);break e;case 11:t=vu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,Ue(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Gs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),wu(e,t,r,i,n);case 3:e:{if(rf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Nd(e,t),Bi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Un(Error(S(423)),t),t=_u(e,t,r,n,i);break e}else if(r!==i){i=Un(Error(S(424)),t),t=_u(e,t,r,n,i);break e}else for(Se=Ct(t.stateNode.containerInfo.firstChild),Ee=t,b=!0,Be=null,n=Dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===i){t=ct(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Rd(t),e===null&&Vs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Us(r,i)?s=null:o!==null&&Us(r,o)&&(t.flags|=32),nf(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&Vs(t),null;case 13:return of(e,t,n);case 4:return Ha(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),vu(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,$(Ui,r._currentValue),r._currentValue=s,o!==null)if(Ve(o.value,s)){if(o.children===i.children&&!ve.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ot(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hs(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Hs(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pn(t,n),i=Le(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),yu(e,t,r,i,n);case 15:return ef(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),yi(e,t),t.tag=1,ye(r)?(e=!0,Mi(t)):e=!1,Pn(t,n),Pd(t,r,i),Ks(t,r,i,n),Ys(null,t,r,!0,e,n);case 19:return sf(e,t,n);case 22:return tf(e,t,n)}throw Error(S(156,t.tag))};function Ef(e,t){return Qc(e,t)}function Hm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new Hm(e,t,n,r)}function ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wm(e){if(typeof e=="function")return ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ia)return 11;if(e===Ta)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Si(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ol(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case pn:return qt(n.children,i,o,t);case ka:s=8,i|=8;break;case gs:return e=Oe(12,n,t,i|2),e.elementType=gs,e.lanes=o,e;case vs:return e=Oe(13,n,t,i),e.elementType=vs,e.lanes=o,e;case ys:return e=Oe(19,n,t,i),e.elementType=ys,e.lanes=o,e;case Oc:return fo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ac:s=10;break e;case Pc:s=9;break e;case Ia:s=11;break e;case Ta:s=14;break e;case mt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Oe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qt(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function fo(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Oc,e.lanes=n,e.stateNode={isHidden:!1},e}function Yo(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Km(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oo(0),this.expirationTimes=Oo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sl(e,t,n,r,i,o,s,a,l){return e=new Km(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Oe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(o),e}function Qm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kf(e){if(!e)return xt;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ye(n))return Sd(e,n,t)}return t}function If(e,t,n,r,i,o,s,a,l){return e=sl(n,r,!0,e,i,o,s,a,l),e.context=kf(null),n=e.current,r=ce(),i=Pt(n),o=ot(r,i),o.callback=t!=null?t:null,Nt(n,o,i),e.current.lanes=i,Mr(e,i,r),we(e,r),e}function po(e,t,n,r){var i=t.current,o=ce(),s=Pt(i);return n=kf(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(i,t,s),e!==null&&(be(e,i,s,o),mi(e,i,s)),s}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function al(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function Gm(){return null}var Tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}ho.prototype.render=ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));po(e,t,null,null)};ho.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){po(null,e,null,null)}),t[lt]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=ed();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&nd(e)}};function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Ym(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Gi(s);o.call(u)}}var s=If(t,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=s,e[lt]=s.current,Er(e.nodeType===8?e.parentNode:e),tn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Gi(l);a.call(u)}}var l=sl(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=l,e[lt]=l.current,Er(e.nodeType===8?e.parentNode:e),tn(function(){po(t,l,n,r)}),l}function go(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Gi(s);a.call(l)}}po(t,s,e,i)}else s=Ym(n,t,e,i,r);return Gi(s)}Jc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(Aa(t,n|1),we(t,Y()),(L&6)===0&&($n=Y()+500,Ft()))}break;case 13:tn(function(){var r=ut(e,1);if(r!==null){var i=ce();be(r,e,1,i)}}),al(e,1)}};Pa=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ce();be(t,e,134217728,n)}al(e,134217728)}};Zc=function(e){if(e.tag===13){var t=Pt(e),n=ut(e,t);if(n!==null){var r=ce();be(n,e,t,r)}al(e,t)}};ed=function(){return z};td=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};As=function(e,t,n){switch(t){case"input":if(Ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oo(r);if(!i)throw Error(S(90));Rc(r),Ss(r,i)}}}break;case"textarea":Lc(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};jc=nl;bc=tn;var qm={usingClientEntryPoint:!1,Events:[zr,vn,oo,$c,Bc,nl]},qn={findFiberByHostInstance:Ht,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Xm={bundleType:qn.bundleType,version:qn.version,rendererPackageName:qn.rendererPackageName,rendererConfig:qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wc(e),e===null?null:e.stateNode},findFiberByHostInstance:qn.findFiberByHostInstance||Gm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{to=li.inject(Xm),qe=li}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ul(t))throw Error(S(200));return Qm(e,t,null,n)};Ce.createRoot=function(e,t){if(!ul(e))throw Error(S(299));var n=!1,r="",i=Tf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sl(e,1,!1,null,null,n,!1,r,i),e[lt]=t.current,Er(e.nodeType===8?e.parentNode:e),new ll(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Wc(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return tn(e)};Ce.hydrate=function(e,t,n){if(!mo(t))throw Error(S(200));return go(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!ul(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Tf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=If(t,null,e,1,n!=null?n:null,i,!1,o,s),e[lt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ho(t)};Ce.render=function(e,t,n){if(!mo(t))throw Error(S(200));return go(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!mo(e))throw Error(S(40));return e._reactRootContainer?(tn(function(){go(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ce.unstable_batchedUpdates=nl;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return go(e,t,n,!1,r)};Ce.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ce})(kc);var Ru=kc.exports;hs.createRoot=Ru.createRoot,hs.hydrateRoot=Ru.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Jm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Nf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,p=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[p],n[h],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Cf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Jm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw Error();const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Zm=function(e){const t=Cf(e);return Nf.encodeByteArray(t,!0)},Af=function(e){return Zm(e).replace(/\./g,"")},Pf=function(e){try{return Nf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Of(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cl(){return typeof indexedDB=="object"}function dl(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Df(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function ng(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=()=>ng().__FIREBASE_DEFAULTS__,ig=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},og=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Pf(e[1]);return t&&JSON.parse(t)},Rf=()=>{try{return rg()||ig()||og()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sg=()=>{var e;return(e=Rf())===null||e===void 0?void 0:e.config},ag=e=>{var t;return(t=Rf())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="FirebaseError";class ft extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ug,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?cg(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new ft(i,a,r)}}function cg(e,t){return e.replace(dg,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const dg=/\{\$([^}]+)}/g;function Yi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(xu(o)&&xu(s)){if(!Yi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function fg(e,t){const n=new pg(e,t);return n.subscribe.bind(n)}class pg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Xo),i.error===void 0&&(i.error=Xo),i.complete===void 0&&(i.complete=Xo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Xo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=1e3,gg=2,vg=4*60*60*1e3,yg=.5;function Lu(e,t=mg,n=gg){const r=t*Math.pow(n,e),i=Math.round(yg*r*(Math.random()-.5)*2);return Math.min(vg,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){return e&&e._delegate?e._delegate:e}class Fe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new lg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sg(t))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vt){return this.instances.has(t)}getOptions(t=Vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_g(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vt){return this.component?this.component.multipleInstances?t:Vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _g(e){return e===Vt?void 0:e}function Sg(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new wg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const kg={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Ig=U.INFO,Tg={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Cg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Tg[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fl{constructor(t){this.name=t,this._logLevel=Ig,this._logHandler=Cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Ng=(e,t)=>t.some(n=>e instanceof n);let Mu,Fu;function Ag(){return Mu||(Mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pg(){return Fu||(Fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lf=new WeakMap,aa=new WeakMap,Mf=new WeakMap,Jo=new WeakMap,pl=new WeakMap;function Og(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(st(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Lf.set(n,e)}).catch(()=>{}),pl.set(t,e),t}function Dg(e){if(aa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});aa.set(e,t)}let la={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return aa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Mf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return st(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Rg(e){la=e(la)}function xg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Zo(this),t,...n);return Mf.set(r,t.sort?t.sort():[t]),st(r)}:Pg().includes(e)?function(...t){return e.apply(Zo(this),t),st(Lf.get(this))}:function(...t){return st(e.apply(Zo(this),t))}}function Lg(e){return typeof e=="function"?xg(e):(e instanceof IDBTransaction&&Dg(e),Ng(e,Ag())?new Proxy(e,la):e)}function st(e){if(e instanceof IDBRequest)return Og(e);if(Jo.has(e))return Jo.get(e);const t=Lg(e);return t!==e&&(Jo.set(e,t),pl.set(t,e)),t}const Zo=e=>pl.get(e);function vo(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=st(s);return r&&s.addEventListener("upgradeneeded",l=>{r(st(s.result),l.oldVersion,l.newVersion,st(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function es(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),st(n).then(()=>{})}const Mg=["get","getKey","getAll","getAllKeys","count"],Fg=["put","add","delete","clear"],ts=new Map;function zu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ts.get(t))return ts.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Fg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mg.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ts.set(t,o),o}Rg(e=>({...e,get:(t,n,r)=>zu(t,n)||e.get(t,n,r),has:(t,n)=>!!zu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ug(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ug(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ua="@firebase/app",Uu="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new fl("@firebase/app"),$g="@firebase/app-compat",Bg="@firebase/analytics-compat",jg="@firebase/analytics",bg="@firebase/app-check-compat",Vg="@firebase/app-check",Hg="@firebase/auth",Wg="@firebase/auth-compat",Kg="@firebase/database",Qg="@firebase/database-compat",Gg="@firebase/functions",Yg="@firebase/functions-compat",qg="@firebase/installations",Xg="@firebase/installations-compat",Jg="@firebase/messaging",Zg="@firebase/messaging-compat",ev="@firebase/performance",tv="@firebase/performance-compat",nv="@firebase/remote-config",rv="@firebase/remote-config-compat",iv="@firebase/storage",ov="@firebase/storage-compat",sv="@firebase/firestore",av="@firebase/firestore-compat",lv="firebase",uv="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="[DEFAULT]",cv={[ua]:"fire-core",[$g]:"fire-core-compat",[jg]:"fire-analytics",[Bg]:"fire-analytics-compat",[Vg]:"fire-app-check",[bg]:"fire-app-check-compat",[Hg]:"fire-auth",[Wg]:"fire-auth-compat",[Kg]:"fire-rtdb",[Qg]:"fire-rtdb-compat",[Gg]:"fire-fn",[Yg]:"fire-fn-compat",[qg]:"fire-iid",[Xg]:"fire-iid-compat",[Jg]:"fire-fcm",[Zg]:"fire-fcm-compat",[ev]:"fire-perf",[tv]:"fire-perf-compat",[nv]:"fire-rc",[rv]:"fire-rc-compat",[iv]:"fire-gcs",[ov]:"fire-gcs-compat",[sv]:"fire-fst",[av]:"fire-fst-compat","fire-js":"fire-js",[lv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Map,da=new Map;function dv(e,t){try{e.container.addComponent(t)}catch(n){nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function He(e){const t=e.name;if(da.has(t))return nn.debug(`There were multiple attempts to register component ${t}.`),!1;da.set(t,e);for(const n of qi.values())dv(n,e);return!0}function $r(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new zt("app","Firebase",fv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=uv;function zf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ca,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(n||(n=sg()),!n)throw Dt.create("no-options");const o=qi.get(i);if(o){if(Yi(n,o.options)&&Yi(r,o.config))return o;throw Dt.create("duplicate-app",{appName:i})}const s=new Eg(i);for(const l of da.values())s.addComponent(l);const a=new pv(n,r,s);return qi.set(i,a),a}function Uf(e=ca){const t=qi.get(e);if(!t&&e===ca)return zf();if(!t)throw Dt.create("no-app",{appName:e});return t}function Re(e,t,n){var r;let i=(r=cv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}He(new Fe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="firebase-heartbeat-database",mv=1,Dr="firebase-heartbeat-store";let ns=null;function $f(){return ns||(ns=vo(hv,mv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Dr)}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),ns}async function gv(e){var t;try{return(await $f()).transaction(Dr).objectStore(Dr).get(Bf(e))}catch(n){if(n instanceof ft)nn.warn(n.message);else{const r=Dt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});nn.warn(r.message)}}}async function $u(e,t){var n;try{const i=(await $f()).transaction(Dr,"readwrite");return await i.objectStore(Dr).put(t,Bf(e)),i.done}catch(r){if(r instanceof ft)nn.warn(r.message);else{const i=Dt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});nn.warn(i.message)}}}function Bf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=1024,yv=30*24*60*60*1e3;class wv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=yv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bu(),{heartbeatsToSend:n,unsentEntries:r}=_v(this._heartbeatsCache.heartbeats),i=Af(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bu(){return new Date().toISOString().substring(0,10)}function _v(e,t=vv){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ju(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ju(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cl()?dl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ju(e){return Af(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(e){He(new Fe("platform-logger",t=>new zg(t),"PRIVATE")),He(new Fe("heartbeat",t=>new wv(t),"PRIVATE")),Re(ua,Uu,e),Re(ua,Uu,"esm2017"),Re("fire-js","")}Ev("");function jf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function bf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kv=bf,Vf=new zt("auth","Firebase",bf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new fl("@firebase/auth");function Ei(e,...t){bu.logLevel<=U.ERROR&&bu.error(`Auth (${Ff}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e,...t){throw hl(e,...t)}function Hf(e,...t){return hl(e,...t)}function Iv(e,t,n){const r=Object.assign(Object.assign({},kv()),{[t]:n});return new zt("auth","Firebase",r).create(t,{appName:e.name})}function hl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Vf.create(e,...t)}function F(e,t,...n){if(!e)throw hl(t,...n)}function dr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ei(t),new Error(t)}function Xi(e,t){e||dr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map;function Qt(e){Xi(e instanceof Function,"Expected a class definition");let t=Hu.get(e);return t?(Xi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Hu.set(e,t),t)}function Tv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Cv(){return Wu()==="http:"||Wu()==="https:"}function Wu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cv()||Of()||"connection"in navigator)?navigator.onLine:!0}function Av(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,n){this.shortDelay=t,this.longDelay=n,Xi(n>t,"Short delay should be less than long delay!"),this.isMobile=eg()||tg()}get(){return Nv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(e,t){Xi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new Br(3e4,6e4);async function Kf(e,t,n,r,i={}){return Qf(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=xf(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Wf.fetch()(Gf(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Qf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ov),t);try{const i=new Rv(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ui(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ui(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ui(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw ui(e,"user-disabled",s);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Iv(e,p,u);Vu(e,p)}}catch(i){if(i instanceof ft)throw i;Vu(e,"network-request-failed")}}function Gf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Pv(e.config,i):`${e.config.apiScheme}://${i}`}class Rv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hf(this.auth,"network-request-failed")),Dv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ui(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Hf(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(e,t){return Kf(e,"POST","/v1/accounts:delete",t)}async function Lv(e,t){return Kf(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Mv(e,t=!1){const n=un(e),r=await n.getIdToken(t),i=Yf(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:fr(rs(i.auth_time)),issuedAtTime:fr(rs(i.iat)),expirationTime:fr(rs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function rs(e){return Number(e)*1e3}function Yf(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const o=Pf(r);return o?JSON.parse(o):(Ei("Failed to decode base64 JWT payload"),null)}catch(o){return Ei("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function Fv(e){const t=Yf(e);return F(t,"internal-error"),F(typeof t.exp<"u","internal-error"),F(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ft&&zv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function zv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(e){var t;const n=e.auth,r=await e.getIdToken(),i=await fa(e,Lv(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?jv(o.providerUserInfo):[],a=Bv(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),p=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new qf(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,h)}async function $v(e){const t=un(e);await Ji(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Bv(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function jv(e){return e.map(t=>{var{providerId:n}=t,r=jf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(e,t){const n=await Qf(e,{},async()=>{const r=xf({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Gf(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wf.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken<"u","internal-error"),F(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Fv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await bv(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Rr;return r&&(F(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e,t){F(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Dn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=jf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Uv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new qf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await fa(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Mv(this,t)}reload(){return $v(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Dn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await fa(this,xv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,p;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:c,emailVerified:y,isAnonymous:E,providerData:I,stsTokenManager:w}=n;F(c&&w,t,"internal-error");const k=Rr.fromJSON(this.name,w);F(typeof c=="string",t,"internal-error"),ht(h,t.name),ht(m,t.name),F(typeof y=="boolean",t,"internal-error"),F(typeof E=="boolean",t,"internal-error"),ht(g,t.name),ht(_,t.name),ht(v,t.name),ht(C,t.name),ht(f,t.name),ht(d,t.name);const P=new Dn({uid:c,auth:t,email:m,emailVerified:y,displayName:h,isAnonymous:E,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:k,createdAt:f,lastLoginAt:d});return I&&Array.isArray(I)&&(P.providerData=I.map(A=>Object.assign({},A))),C&&(P._redirectEventId=C),P}static async _fromIdTokenResponse(t,n,r=!1){const i=new Rr;i.updateFromServerResponse(n);const o=new Dn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ji(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Xf.type="NONE";const Ku=Xf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t,n){return`firebase:${e}:${t}:${n}`}class Rn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=is(this.userKey,i.apiKey,o),this.fullPersistenceKey=is("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Dn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Rn(Qt(Ku),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Qt(Ku);const s=is(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const p=await u._get(s);if(p){const h=Dn._fromJSON(t,p);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Rn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Rn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Kv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Vv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gv(t))return"Blackberry";if(Yv(t))return"Webos";if(Hv(t))return"Safari";if((t.includes("chrome/")||Wv(t))&&!t.includes("edge/"))return"Chrome";if(Qv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vv(e=Je()){return/firefox\//i.test(e)}function Hv(e=Je()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wv(e=Je()){return/crios\//i.test(e)}function Kv(e=Je()){return/iemobile/i.test(e)}function Qv(e=Je()){return/android/i.test(e)}function Gv(e=Je()){return/blackberry/i.test(e)}function Yv(e=Je()){return/webos/i.test(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(e,t=[]){let n;switch(e){case"Browser":n=Qu(Je());break;case"Worker":n=`${Qu(Je())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ff}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gu(this),this.idTokenSubscription=new Gu(this),this.beforeStateQueue=new qv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Ji(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Av()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?un(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zt("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qt(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return F(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Jv(e){return un(e)}class Gu{constructor(t){this.auth=t,this.observer=null,this.addObserver=fg(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Br(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Br(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Br(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Br(5e3,15e3);var Yu="@firebase/auth",qu="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ty(e){He(new Fe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{F(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),F(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jf(e)},p=new Xv(a,l,u);return Tv(p,n),p})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),He(new Fe("auth-internal",t=>{const n=Jv(t.getProvider("auth").getImmediate());return(r=>new Zv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Yu,qu,ey(e)),Re(Yu,qu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=5*60;ag("authIdTokenMaxAge");ty("Browser");var ry="firebase",iy="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(ry,iy,"app");const Zf="@firebase/installations",ml="0.5.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=1e4,tp=`w:${ml}`,np="FIS_v2",oy="https://firebaseinstallations.googleapis.com/v1",sy=60*60*1e3,ay="installations",ly="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},rn=new zt(ay,ly,uy);function rp(e){return e instanceof ft&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip({projectId:e}){return`${oy}/projects/${e}/installations`}function op(e){return{token:e.token,requestStatus:2,expiresIn:dy(e.expiresIn),creationTime:Date.now()}}async function sp(e,t){const r=(await t.json()).error;return rn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ap({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function cy(e,{refreshToken:t}){const n=ap(e);return n.append("Authorization",fy(t)),n}async function lp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function dy(e){return Number(e.replace("s","000"))}function fy(e){return`${np} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ip(e),i=ap(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:np,appId:e.appId,sdkVersion:tp},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await lp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:op(u.authToken)}}else throw await sp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=/^[cdef][\w-]{21}$/,pa="";function gy(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=vy(e);return my.test(n)?n:pa}catch{return pa}}function vy(e){return hy(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=new Map;function dp(e,t){const n=yo(e);fp(n,t),yy(n,t)}function fp(e,t){const n=cp.get(e);if(!!n)for(const r of n)r(t)}function yy(e,t){const n=wy();n&&n.postMessage({key:e,fid:t}),_y()}let Gt=null;function wy(){return!Gt&&"BroadcastChannel"in self&&(Gt=new BroadcastChannel("[Firebase] FID Change"),Gt.onmessage=e=>{fp(e.data.key,e.data.fid)}),Gt}function _y(){cp.size===0&&Gt&&(Gt.close(),Gt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="firebase-installations-database",Ey=1,on="firebase-installations-store";let os=null;function gl(){return os||(os=vo(Sy,Ey,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(on)}}})),os}async function Zi(e,t){const n=yo(e),i=(await gl()).transaction(on,"readwrite"),o=i.objectStore(on),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&dp(e,t.fid),t}async function pp(e){const t=yo(e),r=(await gl()).transaction(on,"readwrite");await r.objectStore(on).delete(t),await r.done}async function wo(e,t){const n=yo(e),i=(await gl()).transaction(on,"readwrite"),o=i.objectStore(on),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&dp(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(e){let t;const n=await wo(e.appConfig,r=>{const i=ky(r),o=Iy(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===pa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ky(e){const t=e||{fid:gy(),registrationStatus:0};return hp(t)}function Iy(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(rn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ty(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Cy(e)}:{installationEntry:t}}async function Ty(e,t){try{const n=await py(e,t);return Zi(e.appConfig,n)}catch(n){throw rp(n)&&n.customData.serverCode===409?await pp(e.appConfig):await Zi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Cy(e){let t=await Xu(e.appConfig);for(;t.registrationStatus===1;)await up(100),t=await Xu(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vl(e);return r||n}return t}function Xu(e){return wo(e,t=>{if(!t)throw rn.create("installation-not-found");return hp(t)})}function hp(e){return Ny(e)?{fid:e.fid,registrationStatus:0}:e}function Ny(e){return e.registrationStatus===1&&e.registrationTime+ep<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay({appConfig:e,heartbeatServiceProvider:t},n){const r=Py(e,n),i=cy(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:tp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await lp(()=>fetch(r,a));if(l.ok){const u=await l.json();return op(u)}else throw await sp("Generate Auth Token",l)}function Py(e,{fid:t}){return`${ip(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(e,t=!1){let n;const r=await wo(e.appConfig,o=>{if(!mp(o))throw rn.create("not-registered");const s=o.authToken;if(!t&&Ry(s))return o;if(s.requestStatus===1)return n=Oy(e,t),o;{if(!navigator.onLine)throw rn.create("app-offline");const a=Ly(o);return n=Dy(e,a),a}});return n?await n:r.authToken}async function Oy(e,t){let n=await Ju(e.appConfig);for(;n.authToken.requestStatus===1;)await up(100),n=await Ju(e.appConfig);const r=n.authToken;return r.requestStatus===0?yl(e,t):r}function Ju(e){return wo(e,t=>{if(!mp(t))throw rn.create("not-registered");const n=t.authToken;return My(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Dy(e,t){try{const n=await Ay(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Zi(e.appConfig,r),n}catch(n){if(rp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pp(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Zi(e.appConfig,r)}throw n}}function mp(e){return e!==void 0&&e.registrationStatus===2}function Ry(e){return e.requestStatus===2&&!xy(e)}function xy(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+sy}function Ly(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function My(e){return e.requestStatus===1&&e.requestTime+ep<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(e){const t=e,{installationEntry:n,registrationPromise:r}=await vl(t);return r?r.catch(console.error):yl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(e,t=!1){const n=e;return await Uy(n),(await yl(n,t)).token}async function Uy(e){const{registrationPromise:t}=await vl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(e){if(!e||!e.options)throw ss("App Configuration");if(!e.name)throw ss("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ss(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ss(e){return rn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="installations",By="installations-internal",jy=e=>{const t=e.getProvider("app").getImmediate(),n=$y(t),r=$r(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},by=e=>{const t=e.getProvider("app").getImmediate(),n=$r(t,gp).getImmediate();return{getId:()=>Fy(n),getToken:i=>zy(n,i)}};function Vy(){He(new Fe(gp,jy,"PUBLIC")),He(new Fe(By,by,"PRIVATE"))}Vy();Re(Zf,ml);Re(Zf,ml,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="analytics",Hy="firebase_id",Wy="origin",Ky=60*1e3,Qy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new fl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Gy(e,t){const n=document.createElement("script");n.src=`${vp}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Yy(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function qy(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await yp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){ke.error(a)}e("config",i,o)}async function Xy(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await yp(n);for(const l of s){const u=a.find(h=>h.measurementId===l),p=u&&t[u.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){ke.error(o)}}function Jy(e,t,n,r){async function i(o,s,a){try{o==="event"?await Xy(e,t,n,s,a):o==="config"?await qy(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){ke.error(l)}}return i}function Zy(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Jy(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function e0(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(vp)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},xe=new zt("analytics","Analytics",t0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=30,r0=1e3;class i0{constructor(t={},n=r0){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const wp=new i0;function o0(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function s0(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:o0(r)},o=Qy.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function a0(e,t=wp,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw xe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw xe.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new c0;return setTimeout(async()=>{a.abort()},n!==void 0?n:Ky),_p({appId:r,apiKey:i,measurementId:o},s,a,t)}async function _p(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=wp){var o,s;const{appId:a,measurementId:l}=e;try{await l0(r,t)}catch(u){if(l)return ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(o=u)===null||o===void 0?void 0:o.message}]`),{appId:a,measurementId:l};throw u}try{const u=await s0(e);return i.deleteThrottleMetadata(a),u}catch(u){const p=u;if(!u0(p)){if(i.deleteThrottleMetadata(a),l)return ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:a,measurementId:l};throw u}const h=Number((s=p==null?void 0:p.customData)===null||s===void 0?void 0:s.httpStatus)===503?Lu(n,i.intervalMillis,n0):Lu(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,m),ke.debug(`Calling attemptFetch again in ${h} millis`),_p(e,m,r,i)}}function l0(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(xe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function u0(e){if(!(e instanceof ft)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class c0{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function d0(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(){var e;if(cl())try{await dl()}catch(t){return ke.warn(xe.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return ke.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function p0(e,t,n,r,i,o,s){var a;const l=a0(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ke.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ke.error(g)),t.push(l);const u=f0().then(g=>{if(g)return r.getId()}),[p,h]=await Promise.all([l,u]);e0(o)||Gy(o,p.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[Wy]="firebase",m.update=!0,h!=null&&(m[Hy]=h),i("config",p.measurementId,m),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(t){this.app=t}_delete(){return delete pr[this.app.options.appId],Promise.resolve()}}let pr={},Zu=[];const ec={};let as="dataLayer",m0="gtag",tc,Sp,nc=!1;function g0(){const e=[];if(Of()&&e.push("This is a browser extension environment."),Df()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:t});ke.warn(n.message)}}function v0(e,t,n){g0();const r=e.options.appId;if(!r)throw xe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(pr[r]!=null)throw xe.create("already-exists",{id:r});if(!nc){Yy(as);const{wrappedGtag:o,gtagCore:s}=Zy(pr,Zu,ec,as,m0);Sp=o,tc=s,nc=!0}return pr[r]=p0(e,Zu,ec,t,tc,as,n),new h0(e)}function y0(e=Uf()){e=un(e);const t=$r(e,eo);return t.isInitialized()?t.getImmediate():w0(e)}function w0(e,t={}){const n=$r(e,eo);if(n.isInitialized()){const i=n.getImmediate();if(Yi(t,n.getOptions()))return i;throw xe.create("already-initialized")}return n.initialize({options:t})}function _0(e,t,n,r){e=un(e),d0(Sp,pr[e.app.options.appId],t,n,r).catch(i=>ke.error(i))}const rc="@firebase/analytics",ic="0.8.3";function S0(){He(new Fe(eo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return v0(r,i,n)},"PUBLIC")),He(new Fe("analytics-internal",e,"PRIVATE")),Re(rc,ic),Re(rc,ic,"esm2017");function e(t){try{const n=t.getProvider(eo).getImmediate();return{logEvent:(r,i,o)=>_0(n,r,i,o)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}S0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="/firebase-messaging-sw.js",k0="/firebase-cloud-messaging-push-scope",Ep="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",I0="https://fcmregistrations.googleapis.com/v1",kp="google.c.a.c_id",T0="google.c.a.c_l",C0="google.c.a.ts",N0="google.c.a.e";var oc;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(oc||(oc={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var xr;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(xr||(xr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function A0(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="fcm_token_details_db",P0=5,sc="fcm_token_object_Store";async function O0(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(ls))return null;let t=null;return(await vo(ls,P0,{upgrade:async(r,i,o,s)=>{var a;if(i<2||!r.objectStoreNames.contains(sc))return;const l=s.objectStore(sc),u=await l.index("fcmSenderId").get(e);if(await l.clear(),!!u){if(i===2){const p=u;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:(a=p.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:tt(p.vapidKey)}}}else if(i===3){const p=u;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:tt(p.auth),p256dh:tt(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:tt(p.vapidKey)}}}else if(i===4){const p=u;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:tt(p.auth),p256dh:tt(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:tt(p.vapidKey)}}}}}})).close(),await es(ls),await es("fcm_vapid_details_db"),await es("undefined"),D0(t)?t:null}function D0(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="firebase-messaging-database",x0=1,sn="firebase-messaging-store";let us=null;function wl(){return us||(us=vo(R0,x0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(sn)}}})),us}async function Ip(e){const t=Sl(e),r=await(await wl()).transaction(sn).objectStore(sn).get(t);if(r)return r;{const i=await O0(e.appConfig.senderId);if(i)return await _l(e,i),i}}async function _l(e,t){const n=Sl(e),i=(await wl()).transaction(sn,"readwrite");return await i.objectStore(sn).put(t,n),await i.done,t}async function L0(e){const t=Sl(e),r=(await wl()).transaction(sn,"readwrite");await r.objectStore(sn).delete(t),await r.done}function Sl({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},de=new zt("messaging","Messaging",M0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(e,t){var n;const r=await kl(e),i=Cp(t),o={method:"POST",headers:r,body:JSON.stringify(i)};let s;try{s=await(await fetch(El(e.appConfig),o)).json()}catch(a){throw de.create("token-subscribe-failed",{errorInfo:(n=a)===null||n===void 0?void 0:n.toString()})}if(s.error){const a=s.error.message;throw de.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw de.create("token-subscribe-no-token");return s.token}async function z0(e,t){var n;const r=await kl(e),i=Cp(t.subscriptionOptions),o={method:"PATCH",headers:r,body:JSON.stringify(i)};let s;try{s=await(await fetch(`${El(e.appConfig)}/${t.token}`,o)).json()}catch(a){throw de.create("token-update-failed",{errorInfo:(n=a)===null||n===void 0?void 0:n.toString()})}if(s.error){const a=s.error.message;throw de.create("token-update-failed",{errorInfo:a})}if(!s.token)throw de.create("token-update-no-token");return s.token}async function Tp(e,t){var n;const r=await kl(e),i={method:"DELETE",headers:r};try{const s=await(await fetch(`${El(e.appConfig)}/${t}`,i)).json();if(s.error){const a=s.error.message;throw de.create("token-unsubscribe-failed",{errorInfo:a})}}catch(o){throw de.create("token-unsubscribe-failed",{errorInfo:(n=o)===null||n===void 0?void 0:n.toString()})}}function El({projectId:e}){return`${I0}/projects/${e}/registrations`}async function kl({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Cp({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==Ep&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=7*24*60*60*1e3;async function $0(e){const t=await b0(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:tt(t.getKey("auth")),p256dh:tt(t.getKey("p256dh"))},r=await Ip(e.firebaseDependencies);if(r){if(V0(r.subscriptionOptions,n))return Date.now()>=r.createTime+U0?j0(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Tp(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return ac(e.firebaseDependencies,n)}else return ac(e.firebaseDependencies,n)}async function B0(e){const t=await Ip(e.firebaseDependencies);t&&(await Tp(e.firebaseDependencies,t.token),await L0(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function j0(e,t){try{const n=await z0(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await _l(e.firebaseDependencies,r),n}catch(n){throw await B0(e),n}}async function ac(e,t){const r={token:await F0(e,t),createTime:Date.now(),subscriptionOptions:t};return await _l(e,r),r.token}async function b0(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:A0(t)})}function V0(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return H0(t,e),W0(t,e),K0(t,e),t}function H0(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i)}function W0(e,t){!t.data||(e.data=t.data)}function K0(e,t){var n,r,i,o,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const l=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(e){return typeof e=="object"&&!!e&&kp in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Np("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Np("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Np(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(e){if(!e||!e.options)throw cs("App Configuration Object");if(!e.name)throw cs("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw cs(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function cs(e){return de.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=G0(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(e){var t;try{e.swRegistration=await navigator.serviceWorker.register(E0,{scope:k0}),e.swRegistration.update().catch(()=>{})}catch(n){throw de.create("failed-service-worker-registration",{browserErrorMessage:(t=n)===null||t===void 0?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(e,t){if(!t&&!e.swRegistration&&await q0(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw de.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Ep)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(e,t){if(!navigator)throw de.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw de.create("permission-blocked");return await J0(e,t==null?void 0:t.vapidKey),await X0(e,t==null?void 0:t.serviceWorkerRegistration),$0(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(e,t,n){const r=t1(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[kp],message_name:n[T0],message_time:n[C0],message_device_time:Math.floor(Date.now()/1e3)})}function t1(e){switch(e){case xr.NOTIFICATION_CLICKED:return"notification_open";case xr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===xr.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(lc(n)):e.onMessageHandler.next(lc(n)));const r=n.data;Q0(r)&&r[N0]==="1"&&await e1(e,n.messageType,r)}const uc="@firebase/messaging",cc="0.9.19";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=e=>{const t=new Y0(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>n1(t,n)),t},i1=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Z0(t,r)}};function o1(){He(new Fe("messaging",r1,"PUBLIC")),He(new Fe("messaging-internal",i1,"PRIVATE")),Re(uc,cc),Re(uc,cc,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(){try{await dl()}catch{return!1}return typeof window<"u"&&cl()&&Df()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(e=Uf()){return s1().then(t=>{if(!t)throw de.create("unsupported-browser")},t=>{throw de.create("indexed-db-unsupported")}),$r(un(e),"messaging").getImmediate()}o1();const l1={apiKey:"AIzaSyDLP1QgCr3UV32iIt7C1Kto7bM6KmseXwk",authDomain:"perfect-period-364415.firebaseapp.com",projectId:"perfect-period-364415",storageBucket:"perfect-period-364415.appspot.com",messagingSenderId:"468675497403",appId:"1:468675497403:web:4bc5e52ffbde365daf489e",measurementId:"G-QQETMJR89T"},Ap=zf(l1);y0(Ap);a1(Ap);function Pp(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Pp(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function St(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Pp(e))&&(r&&(r+=" "),r+=t);return r}var _o={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1=M.exports,c1=Symbol.for("react.element"),d1=Symbol.for("react.fragment"),f1=Object.prototype.hasOwnProperty,p1=u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h1={key:!0,ref:!0,__self:!0,__source:!0};function Op(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)f1.call(t,r)&&!h1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:c1,type:e,key:o,ref:s,props:i,_owner:p1.current}}So.Fragment=d1;So.jsx=Op;So.jsxs=Op;(function(e){e.exports=So})(_o);const m1=_o.exports.Fragment,R=_o.exports.jsx,In=_o.exports.jsxs;function jr(e){return typeof e=="number"&&!isNaN(e)}function Xn(e){return typeof e=="boolean"}function br(e){return typeof e=="string"}function Ie(e){return typeof e=="function"}function ki(e){return br(e)||Ie(e)?e:null}function ds(e){return e!=null}function g1(e,t){return e===!1||jr(e)&&e>0?e:t}function fs(e){return M.exports.isValidElement(e)||br(e)||Ie(e)||jr(e)}const v1={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Vr={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function y1(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function w1(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:l,position:u,preventExitTransition:p,done:h,nodeRef:m,isIn:g}=a;const _=r?t+"--"+u:t,v=r?n+"--"+u:n,C=M.exports.useRef(0);return M.exports.useLayoutEffect(()=>{const f=m.current,d=_.split(" "),c=E=>{E.target===m.current&&(f.dispatchEvent(new Event("d")),f.removeEventListener("animationend",c),f.removeEventListener("animationcancel",c),C.current===0&&E.type!=="animationcancel"&&f.classList.remove(...d))};(()=>{f.classList.add(...d),f.addEventListener("animationend",c),f.addEventListener("animationcancel",c)})()},[]),M.exports.useEffect(()=>{const f=m.current,d=()=>{f.removeEventListener("animationend",d),i?y1(f,h,o):h()};g||(p?d():(()=>{C.current=1,f.className+=" "+v,f.addEventListener("animationend",d)})())},[g]),R(m1,{children:l})}}function dc(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const Et={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Eo=e=>{let{theme:t,type:n,...r}=e;return R("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")",...r})};function _1(e){return R(Eo,{...e,children:R("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})}function S1(e){return R(Eo,{...e,children:R("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})}function E1(e){return R(Eo,{...e,children:R("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})}function k1(e){return R(Eo,{...e,children:R("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})}function I1(){return R("div",{className:"Toastify__spinner"})}const ha={info:S1,warning:_1,success:E1,error:k1,spinner:I1},T1=e=>e in ha;function C1(e){let{theme:t,type:n,isLoading:r,icon:i}=e,o=null;const s={theme:t,type:n};return i===!1||(Ie(i)?o=i(s):M.exports.isValidElement(i)?o=M.exports.cloneElement(i,s):br(i)||jr(i)?o=i:r?o=ha.spinner():T1(n)&&(o=ha[n](s))),o}function N1(e){const[,t]=M.exports.useReducer(v=>v+1,0),[n,r]=M.exports.useState([]),i=M.exports.useRef(null),o=M.exports.useRef(new Map).current,s=v=>n.indexOf(v)!==-1,a=M.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:v=>o.get(v)}).current;M.exports.useEffect(()=>(a.containerId=e.containerId,Et.cancelEmit(3).on(0,m).on(1,v=>i.current&&u(v)).on(5,l).emit(2,a),()=>{o.clear(),Et.emit(3,a)}),[]),M.exports.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length});function l(v){let{containerId:C}=v;const{limit:f}=a.props;f&&(!C||a.containerId===C)&&(a.count-=a.queue.length,a.queue=[])}function u(v){r(C=>ds(v)?C.filter(f=>f!==v):[])}function p(){const{toastContent:v,toastProps:C,staleId:f}=a.queue.shift();g(v,C,f)}function h(v){return!i.current||a.props.enableMultiContainer&&v.containerId!==a.props.containerId||o.has(v.toastId)&&v.updateId==null}function m(v,C){let{delay:f,staleId:d,...c}=C;if(!fs(v)||h(c))return;const{toastId:y,updateId:E,data:I}=c,{props:w}=a,k=()=>u(y),P=E==null;P&&a.count++;const A={toastId:y,updateId:E,data:I,containerId:c.containerId,isLoading:c.isLoading,theme:c.theme||w.theme,icon:c.icon!=null?c.icon:w.icon,isIn:!1,key:c.key||a.toastKey++,type:c.type,closeToast:k,closeButton:c.closeButton,rtl:w.rtl,position:c.position||w.position,transition:c.transition||w.transition,className:ki(c.className||w.toastClassName),bodyClassName:ki(c.bodyClassName||w.bodyClassName),style:c.style||w.toastStyle,bodyStyle:c.bodyStyle||w.bodyStyle,onClick:c.onClick||w.onClick,pauseOnHover:Xn(c.pauseOnHover)?c.pauseOnHover:w.pauseOnHover,pauseOnFocusLoss:Xn(c.pauseOnFocusLoss)?c.pauseOnFocusLoss:w.pauseOnFocusLoss,draggable:Xn(c.draggable)?c.draggable:w.draggable,draggablePercent:c.draggablePercent||w.draggablePercent,draggableDirection:c.draggableDirection||w.draggableDirection,closeOnClick:Xn(c.closeOnClick)?c.closeOnClick:w.closeOnClick,progressClassName:ki(c.progressClassName||w.progressClassName),progressStyle:c.progressStyle||w.progressStyle,autoClose:c.isLoading?!1:g1(c.autoClose,w.autoClose),hideProgressBar:Xn(c.hideProgressBar)?c.hideProgressBar:w.hideProgressBar,progress:c.progress,role:c.role||w.role,deleteToast(){const We=dc(o.get(y),"removed");o.delete(y),Et.emit(4,We);const he=a.queue.length;if(a.count=ds(y)?a.count-1:a.count-a.displayedToast,a.count<0&&(a.count=0),he>0){const Ze=ds(y)?1:a.props.limit;if(he===1||Ze===1)a.displayedToast++,p();else{const cn=Ze>he?he:Ze;a.displayedToast=cn;for(let Ke=0;Ke<cn;Ke++)p()}}else t()}};A.iconOut=C1(A),Ie(c.onOpen)&&(A.onOpen=c.onOpen),Ie(c.onClose)&&(A.onClose=c.onClose),A.closeButton=w.closeButton,c.closeButton===!1||fs(c.closeButton)?A.closeButton=c.closeButton:c.closeButton===!0&&(A.closeButton=fs(w.closeButton)?w.closeButton:!0);let Q=v;M.exports.isValidElement(v)&&!br(v.type)?Q=M.exports.cloneElement(v,{closeToast:k,toastProps:A,data:I}):Ie(v)&&(Q=v({closeToast:k,toastProps:A,data:I})),w.limit&&w.limit>0&&a.count>w.limit&&P?a.queue.push({toastContent:Q,toastProps:A,staleId:d}):jr(f)?setTimeout(()=>{g(Q,A,d)},f):g(Q,A,d)}function g(v,C,f){const{toastId:d}=C;f&&o.delete(f);const c={content:v,props:C};o.set(d,c),r(y=>[...y,d].filter(E=>E!==f)),Et.emit(4,dc(c,c.props.updateId==null?"added":"updated"))}function _(v){const C=new Map,f=Array.from(o.values());return e.newestOnTop&&f.reverse(),f.forEach(d=>{const{position:c}=d.props;C.has(c)||C.set(c,[]),C.get(c).push(d)}),Array.from(C,d=>v(d[0],d[1]))}return{getToastToRender:_,containerRef:i,isToastActive:s}}function fc(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function pc(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function A1(e){const[t,n]=M.exports.useState(!1),[r,i]=M.exports.useState(!1),o=M.exports.useRef(null),s=M.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=M.exports.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:p,onClick:h,closeOnClick:m}=e;M.exports.useEffect(()=>{a.current=e}),M.exports.useEffect(()=>(o.current&&o.current.addEventListener("d",v,{once:!0}),Ie(e.onOpen)&&e.onOpen(M.exports.isValidElement(e.children)&&e.children.props),()=>{const k=a.current;Ie(k.onClose)&&k.onClose(M.exports.isValidElement(k.children)&&k.children.props)}),[]),M.exports.useEffect(()=>(e.pauseOnFocusLoss&&f(),()=>{e.pauseOnFocusLoss&&d()}),[e.pauseOnFocusLoss]);function g(k){if(e.draggable){c();const P=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=P.getBoundingClientRect(),P.style.transition="",s.x=fc(k.nativeEvent),s.y=pc(k.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=P.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=P.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent/100))}}function _(){if(s.boundingRect){const{top:k,bottom:P,left:A,right:Q}=s.boundingRect;e.pauseOnHover&&s.x>=A&&s.x<=Q&&s.y>=k&&s.y<=P?C():v()}}function v(){n(!0)}function C(){n(!1)}function f(){document.hasFocus()||C(),window.addEventListener("focus",v),window.addEventListener("blur",C)}function d(){window.removeEventListener("focus",v),window.removeEventListener("blur",C)}function c(){s.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",I),document.addEventListener("touchmove",E),document.addEventListener("touchend",I)}function y(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",I)}function E(k){const P=o.current;s.canDrag&&P&&(s.didMove=!0,t&&C(),s.x=fc(k),s.y=pc(k),e.draggableDirection==="x"?s.delta=s.x-s.start:s.delta=s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),P.style.transform="translate"+e.draggableDirection+"("+s.delta+"px)",P.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function I(){y();const k=o.current;if(s.canDrag&&s.didMove&&k){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){i(!0),e.closeToast();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.transform="translate"+e.draggableDirection+"(0)",k.style.opacity="1"}}const w={onMouseDown:g,onTouchStart:g,onMouseUp:_,onTouchEnd:_};return l&&u&&(w.onMouseEnter=C,w.onMouseLeave=v),m&&(w.onClick=k=>{h&&h(k),s.canCloseOnClick&&p()}),{playToast:v,pauseToast:C,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:w}}function Dp(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return R("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r,children:R("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:R("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}function Rp(e){let{delay:t,isRunning:n,closeToast:r,type:i,hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:p,isIn:h,theme:m}=e;const g={...a,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:o?0:1};l&&(g.transform="scaleX("+u+")");const _=St("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+m,"Toastify__progress-bar--"+i,{["Toastify__progress-bar--rtl"]:p}),v=Ie(s)?s({rtl:p,type:i,defaultClassName:_}):St(_,s),C={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}};return R("div",{role:"progressbar","aria-hidden":o?"true":"false","aria-label":"notification timer",className:v,style:g,...C})}Rp.defaultProps={type:Vr.DEFAULT,hide:!1};const P1=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=A1(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:p,closeToast:h,transition:m,position:g,className:_,style:v,bodyClassName:C,bodyStyle:f,progressClassName:d,progressStyle:c,updateId:y,role:E,progress:I,rtl:w,toastId:k,deleteToast:P,isIn:A,isLoading:Q,iconOut:We,theme:he}=e,Ze=St("Toastify__toast","Toastify__toast-theme--"+he,"Toastify__toast--"+u,{["Toastify__toast--rtl"]:w}),cn=Ie(_)?_({rtl:w,position:g,type:u,defaultClassName:Ze}):St(Ze,_),Ke=!!I,Ut={closeToast:h,type:u,theme:he};let T=null;return o===!1||(Ie(o)?T=o(Ut):ps.isValidElement(o)?T=ps.cloneElement(o,Ut):T=Dp(Ut)),R(m,{isIn:A,done:P,position:g,preventExitTransition:n,nodeRef:r,children:In("div",{id:k,onClick:l,className:cn,...i,style:v,ref:r,children:[In("div",{...A&&{role:E},className:Ie(C)?C({type:u}):St("Toastify__toast-body",C),style:f,children:[We!=null&&R("div",{className:St("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!Q}),children:We}),R("div",{children:s})]}),T,(a||Ke)&&R(Rp,{...y&&!Ke?{key:"pb-"+y}:{},rtl:w,theme:he,delay:a,isRunning:t,isIn:A,closeToast:h,hide:p,type:u,style:c,className:d,controlledProgress:Ke,progress:I})]})})},O1=w1({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),xp=M.exports.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=N1(e),{className:o,style:s,rtl:a,containerId:l}=e;function u(p){const h=St("Toastify__toast-container","Toastify__toast-container--"+p,{["Toastify__toast-container--rtl"]:a});return Ie(o)?o({position:p,rtl:a,defaultClassName:h}):St(h,ki(o))}return M.exports.useEffect(()=>{t&&(t.current=r.current)},[]),R("div",{ref:r,className:"Toastify",id:l,children:n((p,h)=>{const m=h.length?{...s}:{...s,pointerEvents:"none"};return R("div",{className:u(p),style:m,children:h.map((g,_)=>{let{content:v,props:C}=g;return M.exports.createElement(P1,{...C,isIn:i(C.toastId),style:{...C.style,"--nth":_+1,"--len":h.length},key:"toast-"+C.key},v)})},"container-"+p)})})});xp.displayName="ToastContainer";xp.defaultProps={position:v1.TOP_RIGHT,transition:O1,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:Dp,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ii=new Map,hc,ma=[];function D1(){return Math.random().toString(36).substring(2,9)}function R1(e){return e&&(br(e.toastId)||jr(e.toastId))?e.toastId:D1()}function x1(e,t){return Ii.size>0?Et.emit(0,e,t):ma.push({content:e,options:t}),t.toastId}function L1(e,t){return{...t,type:t&&t.type||e,toastId:R1(t)}}function ko(e){return(t,n)=>x1(t,L1(e,n))}ko(Vr.SUCCESS);ko(Vr.INFO);ko(Vr.ERROR);ko(Vr.WARNING);Et.on(2,e=>{hc=e.containerId||e,Ii.set(hc,e),ma.forEach(t=>{Et.emit(0,t.content,t.options)}),ma=[]}).on(3,e=>{Ii.delete(e.containerId||e),Ii.size===0&&Et.off(0).off(1).off(5)});const M1="modulepreload",F1=function(e){return"/"+e},mc={},z1=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=F1(i),i in mc)return;mc[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":M1,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function U1(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:o,onRegisterError:s}=e;let a,l;const u=async(h=!0)=>{await l};async function p(){if("serviceWorker"in navigator){const{Workbox:h,messageSW:m}=await z1(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",g=>{g.isUpdate?window.location.reload():r==null||r()}),a.register({immediate:t}).then(g=>{o?o("/sw.js",g):i==null||i(g)}).catch(g=>{s==null||s(g)})}}return l=p(),u}const $1=()=>In("form",{action:"https://pdf-to-voice-5iseclzu3a-uc.a.run.app/api/pdf",method:"POST",children:[In("div",{children:[R("label",{for:"format",children:"Format"}),R("br",{}),In("select",{name:"format",id:"format",children:[R("option",{value:"mp3",children:"MP3"}),R("option",{value:"FLAC",children:"FLAC"}),R("option",{value:"AAC",children:"AAC"}),R("option",{value:"OGG",children:"OGG"}),R("option",{value:"WAV",children:"WAV"}),R("option",{value:"WMA",children:"WMA"})]})]}),R("br",{}),In("div",{children:[R("label",{for:"pdf",children:"Select a pdf file"}),R("input",{name:"pdf",id:"pdf",type:"file",accept:".pdf"})]}),R("div",{children:R("button",{type:"submit",children:"Convert to audio"})})]}),B1=60*60*1e3;U1({onRegistered(e){e&&setInterval(()=>{e.update()},B1)}});hs.createRoot(document.getElementById("root")).render(R(ps.StrictMode,{children:R($1,{})}));
