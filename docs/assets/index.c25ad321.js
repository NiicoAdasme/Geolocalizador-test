(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var L={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ei=Symbol.for("react.element"),Gp=Symbol.for("react.portal"),qp=Symbol.for("react.fragment"),Qp=Symbol.for("react.strict_mode"),Yp=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),em=Symbol.for("react.suspense"),tm=Symbol.for("react.memo"),nm=Symbol.for("react.lazy"),du=Symbol.iterator;function rm(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var cd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dd=Object.assign,fd={};function ir(e,t,n){this.props=e,this.context=t,this.refs=fd,this.updater=n||cd}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hd(){}hd.prototype=ir.prototype;function qa(e,t,n){this.props=e,this.context=t,this.refs=fd,this.updater=n||cd}var Qa=qa.prototype=new hd;Qa.constructor=qa;dd(Qa,ir.prototype);Qa.isPureReactComponent=!0;var fu=Array.isArray,pd=Object.prototype.hasOwnProperty,Ya={current:null},md={key:!0,ref:!0,__self:!0,__source:!0};function gd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)pd.call(t,r)&&!md.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ei,type:e,key:o,ref:s,props:i,_owner:Ya.current}}function im(e,t){return{$$typeof:ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===ei}function om(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hu=/\/+/g;function rs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?om(""+e.key):t.toString(36)}function Ai(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ei:case Gp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+rs(s,0):r,fu(i)?(n="",e!=null&&(n=e.replace(hu,"$&/")+"/"),Ai(i,t,n,"",function(u){return u})):i!=null&&(Ja(i)&&(i=im(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",fu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+rs(o,a);s+=Ai(o,t,n,l,i)}else if(l=rm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+rs(o,a++),s+=Ai(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function hi(e,t,n){if(e==null)return e;var r=[],i=0;return Ai(e,r,"","",function(o){return t.call(n,o,i++)}),r}function sm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Di={transition:null},am={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Di,ReactCurrentOwner:Ya};M.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!Ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=ir;M.Fragment=qp;M.Profiler=Yp;M.PureComponent=qa;M.StrictMode=Qp;M.Suspense=em;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ya.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)pd.call(t,l)&&!md.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ei,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:Xp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jp,_context:e},e.Consumer=e};M.createElement=gd;M.createFactory=function(e){var t=gd.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Zp,render:e}};M.isValidElement=Ja;M.lazy=function(e){return{$$typeof:nm,_payload:{_status:-1,_result:e},_init:sm}};M.memo=function(e,t){return{$$typeof:tm,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return me.current.useCallback(e,t)};M.useContext=function(e){return me.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return me.current.useDeferredValue(e)};M.useEffect=function(e,t){return me.current.useEffect(e,t)};M.useId=function(){return me.current.useId()};M.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return me.current.useMemo(e,t)};M.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};M.useRef=function(e){return me.current.useRef(e)};M.useState=function(e){return me.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return me.current.useTransition()};M.version="18.2.0";(function(e){e.exports=M})(L);const Vs=Kp(L.exports);var Ws={},vd={exports:{}},Re={},yd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var D=T.length;T.push(A);e:for(;0<D;){var Y=D-1>>>1,te=T[Y];if(0<i(te,A))T[Y]=A,T[D]=te,D=Y;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],D=T.pop();if(D!==A){T[0]=D;e:for(var Y=0,te=T.length,di=te>>>1;Y<di;){var tn=2*(Y+1)-1,ns=T[tn],nn=tn+1,fi=T[nn];if(0>i(ns,D))nn<te&&0>i(fi,ns)?(T[Y]=fi,T[nn]=D,Y=nn):(T[Y]=ns,T[tn]=D,Y=tn);else if(nn<te&&0>i(fi,D))T[Y]=fi,T[nn]=D,Y=nn;else break e}}return A}function i(T,A){var D=T.sortIndex-A.sortIndex;return D!==0?D:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,p=null,m=3,v=!1,w=!1,g=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function y(T){if(g=!1,c(T),!w)if(n(l)!==null)w=!0,Ae(E);else{var A=n(u);A!==null&&at(y,A.startTime-T)}}function E(T,A){w=!1,g&&(g=!1,f(I),I=-1),v=!0;var D=m;try{for(c(A),p=n(l);p!==null&&(!(p.expirationTime>A)||T&&!j());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,m=p.priorityLevel;var te=Y(p.expirationTime<=A);A=e.unstable_now(),typeof te=="function"?p.callback=te:p===n(l)&&r(l),c(A)}else r(l);p=n(l)}if(p!==null)var di=!0;else{var tn=n(u);tn!==null&&at(y,tn.startTime-A),di=!1}return di}finally{p=null,m=D,v=!1}}var k=!1,_=null,I=-1,O=5,R=-1;function j(){return!(e.unstable_now()-R<O)}function Oe(){if(_!==null){var T=e.unstable_now();R=T;var A=!0;try{A=_(!0,T)}finally{A?Q():(k=!1,_=null)}}else k=!1}var Q;if(typeof d=="function")Q=function(){d(Oe)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Tt=He.port2;He.port1.onmessage=Oe,Q=function(){Tt.postMessage(null)}}else Q=function(){C(Oe,0)};function Ae(T){_=T,k||(k=!0,Q())}function at(T,A){I=C(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Ae(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var D=m;m=A;try{return T()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=m;m=T;try{return A()}finally{m=D}},e.unstable_scheduleCallback=function(T,A,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=D+te,T={id:h++,callback:A,priorityLevel:T,startTime:D,expirationTime:te,sortIndex:-1},D>Y?(T.sortIndex=D,t(u,T),n(l)===null&&T===n(u)&&(g?(f(I),I=-1):g=!0,at(y,D-Y))):(T.sortIndex=te,t(l,T),w||v||(w=!0,Ae(E))),T},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(T){var A=m;return function(){var D=m;m=A;try{return T.apply(this,arguments)}finally{m=D}}}})(wd);(function(e){e.exports=wd})(yd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=L.exports,Pe=yd.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ed=new Set,Ar={};function Cn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)Ed.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=Object.prototype.hasOwnProperty,lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},mu={};function um(e){return Ks.call(mu,e)?!0:Ks.call(pu,e)?!1:lm.test(e)?mu[e]=!0:(pu[e]=!0,!1)}function cm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dm(e,t,n,r){if(t===null||typeof t>"u"||cm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function Za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xa,Za);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xa,Za);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xa,Za);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function el(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dm(t,n,i,r)&&(n=null),r||i===null?um(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pi=Symbol.for("react.element"),On=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),tl=Symbol.for("react.strict_mode"),Gs=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),Id=Symbol.for("react.context"),nl=Symbol.for("react.forward_ref"),qs=Symbol.for("react.suspense"),Qs=Symbol.for("react.suspense_list"),rl=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),kd=Symbol.for("react.offscreen"),gu=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,is;function gr(e){if(is===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);is=t&&t[1]||""}return`
`+is+e}var os=!1;function ss(e,t){if(!e||os)return"";os=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{os=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function fm(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=ss(e.type,!1),e;case 11:return e=ss(e.type.render,!1),e;case 1:return e=ss(e.type,!0),e;default:return""}}function Ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case On:return"Portal";case Gs:return"Profiler";case tl:return"StrictMode";case qs:return"Suspense";case Qs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Id:return(e.displayName||"Context")+".Consumer";case Sd:return(e._context.displayName||"Context")+".Provider";case nl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rl:return t=e.displayName||null,t!==null?t:Ys(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Ys(e(t))}catch{}}return null}function hm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ys(t);case 8:return t===tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=Td(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=pm(e))}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Td(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Js(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pd(e,t){t=t.checked,t!=null&&el(e,"checked",t,!1)}function Xs(e,t){Pd(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zs(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zs(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vr=Array.isArray;function Hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(vr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function Rd(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,Od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mm=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){mm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function Ad(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function Dd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ad(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gm=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,t){if(t){if(gm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oa=null,Vn=null,Wn=null;function Eu(e){if(e=ri(e)){if(typeof oa!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ao(t),oa(e.stateNode,e.type,t))}}function Ld(e){Vn?Wn?Wn.push(e):Wn=[e]:Vn=e}function xd(){if(Vn){var e=Vn,t=Wn;if(Wn=Vn=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function Md(e,t){return e(t)}function bd(){}var as=!1;function Fd(e,t,n){if(as)return e(t,n);as=!0;try{return Md(e,t,n)}finally{as=!1,(Vn!==null||Wn!==null)&&(bd(),xd())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var sa=!1;if(vt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){sa=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{sa=!1}function vm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Er=!1,Yi=null,Ji=!1,aa=null,ym={onError:function(e){Er=!0,Yi=e}};function wm(e,t,n,r,i,o,s,a,l){Er=!1,Yi=null,vm.apply(ym,arguments)}function _m(e,t,n,r,i,o,s,a,l){if(wm.apply(this,arguments),Er){if(Er){var u=Yi;Er=!1,Yi=null}else throw Error(S(198));Ji||(Ji=!0,aa=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ud(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Su(e){if(Pn(e)!==e)throw Error(S(188))}function Em(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Su(i),e;if(o===r)return Su(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function zd(e){return e=Em(e),e!==null?$d(e):null}function $d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$d(e);if(t!==null)return t;e=e.sibling}return null}var Bd=Pe.unstable_scheduleCallback,Iu=Pe.unstable_cancelCallback,Sm=Pe.unstable_shouldYield,Im=Pe.unstable_requestPaint,J=Pe.unstable_now,km=Pe.unstable_getCurrentPriorityLevel,ol=Pe.unstable_ImmediatePriority,jd=Pe.unstable_UserBlockingPriority,Xi=Pe.unstable_NormalPriority,Tm=Pe.unstable_LowPriority,Hd=Pe.unstable_IdlePriority,Po=null,nt=null;function Cm(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Nm,Pm=Math.log,Rm=Math.LN2;function Nm(e){return e>>>=0,e===0?32:31-(Pm(e)/Rm|0)|0}var vi=64,yi=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=yr(a):(o&=s,o!==0&&(r=yr(o)))}else s=n&~i,s!==0?r=yr(s):o!==0&&(r=yr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-qe(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=Om(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function la(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vd(){var e=vi;return vi<<=1,(vi&4194240)===0&&(vi=64),e}function ls(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Dm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Wd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Kd,al,Gd,qd,Qd,ua=!1,wi=[],zt=null,$t=null,Bt=null,xr=new Map,Mr=new Map,Ot=[],Lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function ur(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ri(t),t!==null&&al(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xm(e,t,n,r,i){switch(t){case"focusin":return zt=ur(zt,e,t,n,r,i),!0;case"dragenter":return $t=ur($t,e,t,n,r,i),!0;case"mouseover":return Bt=ur(Bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xr.set(o,ur(xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mr.set(o,ur(Mr.get(o)||null,e,t,n,r,i)),!0}return!1}function Yd(e){var t=an(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ud(n),t!==null){e.blockedOn=t,Qd(e.priority,function(){Gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ia=r,n.target.dispatchEvent(r),ia=null}else return t=ri(n),t!==null&&al(t),e.blockedOn=n,!1;t.shift()}return!0}function Tu(e,t,n){Li(e)&&n.delete(t)}function Mm(){ua=!1,zt!==null&&Li(zt)&&(zt=null),$t!==null&&Li($t)&&($t=null),Bt!==null&&Li(Bt)&&(Bt=null),xr.forEach(Tu),Mr.forEach(Tu)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,ua||(ua=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Mm)))}function br(e){function t(i){return cr(i,e)}if(0<wi.length){cr(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&cr(zt,e),$t!==null&&cr($t,e),Bt!==null&&cr(Bt,e),xr.forEach(t),Mr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Yd(n),n.blockedOn===null&&Ot.shift()}var Kn=It.ReactCurrentBatchConfig,eo=!0;function bm(e,t,n,r){var i=F,o=Kn.transition;Kn.transition=null;try{F=1,ll(e,t,n,r)}finally{F=i,Kn.transition=o}}function Fm(e,t,n,r){var i=F,o=Kn.transition;Kn.transition=null;try{F=4,ll(e,t,n,r)}finally{F=i,Kn.transition=o}}function ll(e,t,n,r){if(eo){var i=ca(e,t,n,r);if(i===null)ys(e,t,r,to,n),ku(e,r);else if(xm(i,e,t,n,r))r.stopPropagation();else if(ku(e,r),t&4&&-1<Lm.indexOf(e)){for(;i!==null;){var o=ri(i);if(o!==null&&Kd(o),o=ca(e,t,n,r),o===null&&ys(e,t,r,to,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ys(e,t,r,null,n)}}var to=null;function ca(e,t,n,r){if(to=null,e=il(r),e=an(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ud(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function Jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(km()){case ol:return 1;case jd:return 4;case Xi:case Tm:return 16;case Hd:return 536870912;default:return 16}default:return 16}}var bt=null,ul=null,xi=null;function Xd(){if(xi)return xi;var e,t=ul,n=t.length,r,i="value"in bt?bt.value:bt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return xi=i.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Cu(){return!1}function Ne(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_i:Cu,this.isPropagationStopped=Cu,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Ne(or),ni=G({},or,{view:0,detail:0}),Um=Ne(ni),us,cs,dr,Ro=G({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(us=e.screenX-dr.screenX,cs=e.screenY-dr.screenY):cs=us=0,dr=e),us)},movementY:function(e){return"movementY"in e?e.movementY:cs}}),Pu=Ne(Ro),zm=G({},Ro,{dataTransfer:0}),$m=Ne(zm),Bm=G({},ni,{relatedTarget:0}),ds=Ne(Bm),jm=G({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=Ne(jm),Vm=G({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=Ne(Vm),Km=G({},or,{data:0}),Ru=Ne(Km),Gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function dl(){return Ym}var Jm=G({},ni,{key:function(e){if(e.key){var t=Gm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dl,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xm=Ne(Jm),Zm=G({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=Ne(Zm),eg=G({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dl}),tg=Ne(eg),ng=G({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),rg=Ne(ng),ig=G({},Ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Ne(ig),sg=[9,13,27,32],fl=vt&&"CompositionEvent"in window,Sr=null;vt&&"documentMode"in document&&(Sr=document.documentMode);var ag=vt&&"TextEvent"in window&&!Sr,Zd=vt&&(!fl||Sr&&8<Sr&&11>=Sr),Ou=String.fromCharCode(32),Au=!1;function ef(e,t){switch(e){case"keyup":return sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function lg(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:(Au=!0,Ou);case"textInput":return e=t.data,e===Ou&&Au?null:e;default:return null}}function ug(e,t){if(Dn)return e==="compositionend"||!fl&&ef(e,t)?(e=Xd(),xi=ul=bt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zd&&t.locale!=="ko"?null:t.data;default:return null}}var cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cg[e.type]:t==="textarea"}function nf(e,t,n,r){Ld(r),t=no(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Fr=null;function dg(e){pf(e,0)}function No(e){var t=Mn(e);if(Cd(t))return e}function fg(e,t){if(e==="change")return t}var rf=!1;if(vt){var fs;if(vt){var hs="oninput"in document;if(!hs){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),hs=typeof Lu.oninput=="function"}fs=hs}else fs=!1;rf=fs&&(!document.documentMode||9<document.documentMode)}function xu(){Ir&&(Ir.detachEvent("onpropertychange",of),Fr=Ir=null)}function of(e){if(e.propertyName==="value"&&No(Fr)){var t=[];nf(t,Fr,e,il(e)),Fd(dg,t)}}function hg(e,t,n){e==="focusin"?(xu(),Ir=t,Fr=n,Ir.attachEvent("onpropertychange",of)):e==="focusout"&&xu()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(Fr)}function mg(e,t){if(e==="click")return No(t)}function gg(e,t){if(e==="input"||e==="change")return No(t)}function vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:vg;function Ur(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ks.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var n=Mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yg(e){var t=af(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sf(n.ownerDocument.documentElement,n)){if(r!==null&&hl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bu(n,o);var s=bu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wg=vt&&"documentMode"in document&&11>=document.documentMode,Ln=null,da=null,kr=null,fa=!1;function Fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fa||Ln==null||Ln!==Qi(r)||(r=Ln,"selectionStart"in r&&hl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Ur(kr,r)||(kr=r,r=no(da,"onSelect"),0<r.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},ps={},lf={};vt&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Oo(e){if(ps[e])return ps[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lf)return ps[e]=t[n];return e}var uf=Oo("animationend"),cf=Oo("animationiteration"),df=Oo("animationstart"),ff=Oo("transitionend"),hf=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){hf.set(e,t),Cn(t,[e])}for(var ms=0;ms<Uu.length;ms++){var gs=Uu[ms],_g=gs.toLowerCase(),Eg=gs[0].toUpperCase()+gs.slice(1);Jt(_g,"on"+Eg)}Jt(uf,"onAnimationEnd");Jt(cf,"onAnimationIteration");Jt(df,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(ff,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_m(r,t,void 0,e),e.currentTarget=null}function pf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;zu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;zu(i,a,u),o=l}}}if(Ji)throw e=aa,Ji=!1,aa=null,e}function $(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(mf(t,e,2,!1),n.add(r))}function vs(e,t,n){var r=0;t&&(r|=4),mf(n,e,r,t)}var Si="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[Si]){e[Si]=!0,Ed.forEach(function(n){n!=="selectionchange"&&(Sg.has(n)||vs(n,!1,e),vs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Si]||(t[Si]=!0,vs("selectionchange",!1,t))}}function mf(e,t,n,r){switch(Jd(t)){case 1:var i=bm;break;case 4:i=Fm;break;default:i=ll}n=i.bind(null,t,n,e),i=void 0,!sa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ys(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=an(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Fd(function(){var u=o,h=il(n),p=[];e:{var m=hf.get(e);if(m!==void 0){var v=cl,w=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":v=Xm;break;case"focusin":w="focus",v=ds;break;case"focusout":w="blur",v=ds;break;case"beforeblur":case"afterblur":v=ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=$m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=tg;break;case uf:case cf:case df:v=Hm;break;case ff:v=rg;break;case"scroll":v=Um;break;case"wheel":v=og;break;case"copy":case"cut":case"paste":v=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Nu}var g=(t&4)!==0,C=!g&&e==="scroll",f=g?m!==null?m+"Capture":null:m;g=[];for(var d=u,c;d!==null;){c=d;var y=c.stateNode;if(c.tag===5&&y!==null&&(c=y,f!==null&&(y=Lr(d,f),y!=null&&g.push($r(d,y,c)))),C)break;d=d.return}0<g.length&&(m=new v(m,w,null,n,h),p.push({event:m,listeners:g}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ia&&(w=n.relatedTarget||n.fromElement)&&(an(w)||w[yt]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?an(w):null,w!==null&&(C=Pn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(g=Pu,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=Nu,y="onPointerLeave",f="onPointerEnter",d="pointer"),C=v==null?m:Mn(v),c=w==null?m:Mn(w),m=new g(y,d+"leave",v,n,h),m.target=C,m.relatedTarget=c,y=null,an(h)===u&&(g=new g(f,d+"enter",w,n,h),g.target=c,g.relatedTarget=C,y=g),C=y,v&&w)t:{for(g=v,f=w,d=0,c=g;c;c=Nn(c))d++;for(c=0,y=f;y;y=Nn(y))c++;for(;0<d-c;)g=Nn(g),d--;for(;0<c-d;)f=Nn(f),c--;for(;d--;){if(g===f||f!==null&&g===f.alternate)break t;g=Nn(g),f=Nn(f)}g=null}else g=null;v!==null&&$u(p,m,v,g,!1),w!==null&&C!==null&&$u(p,C,w,g,!0)}}e:{if(m=u?Mn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=fg;else if(Du(m))if(rf)E=gg;else{E=pg;var k=hg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=mg);if(E&&(E=E(e,u))){nf(p,E,n,h);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Zs(m,"number",m.value)}switch(k=u?Mn(u):window,e){case"focusin":(Du(k)||k.contentEditable==="true")&&(Ln=k,da=u,kr=null);break;case"focusout":kr=da=Ln=null;break;case"mousedown":fa=!0;break;case"contextmenu":case"mouseup":case"dragend":fa=!1,Fu(p,n,h);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":Fu(p,n,h)}var _;if(fl)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Dn?ef(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Zd&&n.locale!=="ko"&&(Dn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Dn&&(_=Xd()):(bt=h,ul="value"in bt?bt.value:bt.textContent,Dn=!0)),k=no(u,I),0<k.length&&(I=new Ru(I,e,null,n,h),p.push({event:I,listeners:k}),_?I.data=_:(_=tf(n),_!==null&&(I.data=_)))),(_=ag?lg(e,n):ug(e,n))&&(u=no(u,"onBeforeInput"),0<u.length&&(h=new Ru("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=_))}pf(p,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Lr(e,n),o!=null&&r.unshift($r(e,o,i)),o=Lr(e,t),o!=null&&r.push($r(e,o,i))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $u(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Lr(n,o),l!=null&&s.unshift($r(n,l,a))):i||(l=Lr(n,o),l!=null&&s.push($r(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ig=/\r\n?/g,kg=/\u0000|\uFFFD/g;function Bu(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(kg,"")}function Ii(e,t,n){if(t=Bu(t),Bu(e)!==t&&n)throw Error(S(425))}function ro(){}var ha=null,pa=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,Tg=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Pg)}:ga;function Pg(e){setTimeout(function(){throw e})}function ws(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);br(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),tt="__reactFiber$"+sr,Br="__reactProps$"+sr,yt="__reactContainer$"+sr,va="__reactEvents$"+sr,Rg="__reactListeners$"+sr,Ng="__reactHandles$"+sr;function an(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[tt])return n;e=Hu(e)}return t}e=n,n=e.parentNode}return null}function ri(e){return e=e[tt]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ao(e){return e[Br]||null}var ya=[],bn=-1;function Xt(e){return{current:e}}function B(e){0>bn||(e.current=ya[bn],ya[bn]=null,bn--)}function z(e,t){bn++,ya[bn]=e.current,e.current=t}var Qt={},de=Xt(Qt),we=Xt(!1),mn=Qt;function Xn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function io(){B(we),B(de)}function Vu(e,t,n){if(de.current!==Qt)throw Error(S(168));z(de,t),z(we,n)}function gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,hm(e)||"Unknown",i));return G({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,mn=de.current,z(de,e),z(we,we.current),!0}function Wu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=gf(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,B(we),B(de),z(de,e)):B(we),z(we,n)}var ct=null,Do=!1,_s=!1;function vf(e){ct===null?ct=[e]:ct.push(e)}function Og(e){Do=!0,vf(e)}function Zt(){if(!_s&&ct!==null){_s=!0;var e=0,t=F;try{var n=ct;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Do=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),Bd(ol,Zt),i}finally{F=t,_s=!1}}return null}var Fn=[],Un=0,so=null,ao=0,Le=[],xe=0,gn=null,dt=1,ft="";function rn(e,t){Fn[Un++]=ao,Fn[Un++]=so,so=e,ao=t}function yf(e,t,n){Le[xe++]=dt,Le[xe++]=ft,Le[xe++]=gn,gn=e;var r=dt;e=ft;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,dt=1<<32-qe(t)+i|n<<i|r,ft=o+e}else dt=1<<o|n<<i|r,ft=e}function pl(e){e.return!==null&&(rn(e,1),yf(e,1,0))}function ml(e){for(;e===so;)so=Fn[--Un],Fn[Un]=null,ao=Fn[--Un],Fn[Un]=null;for(;e===gn;)gn=Le[--xe],Le[xe]=null,ft=Le[--xe],Le[xe]=null,dt=Le[--xe],Le[xe]=null}var Te=null,ke=null,H=!1,Ge=null;function wf(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,ke=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,ke=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _a(e){if(H){var t=ke;if(t){var n=t;if(!Ku(e,t)){if(wa(e))throw Error(S(418));t=jt(n.nextSibling);var r=Te;t&&Ku(e,t)?wf(r,n):(e.flags=e.flags&-4097|2,H=!1,Te=e)}}else{if(wa(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,Te=e}}}function Gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function ki(e){if(e!==Te)return!1;if(!H)return Gu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=ke)){if(wa(e))throw _f(),Error(S(418));for(;t;)wf(e,t),t=jt(t.nextSibling)}if(Gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=Te?jt(e.stateNode.nextSibling):null;return!0}function _f(){for(var e=ke;e;)e=jt(e.nextSibling)}function Zn(){ke=Te=null,H=!1}function gl(e){Ge===null?Ge=[e]:Ge.push(e)}var Ag=It.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var lo=Xt(null),uo=null,zn=null,vl=null;function yl(){vl=zn=uo=null}function wl(e){var t=lo.current;B(lo),e._currentValue=t}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){uo=e,vl=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ye=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(vl!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(uo===null)throw Error(S(308));zn=e,uo.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var ln=null;function _l(e){ln===null?ln=[e]:ln.push(e)}function Ef(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_l(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function El(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(b&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,_l(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sl(e,n)}}function qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var i=e.updateQueue;Nt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,g=a;switch(m=t,v=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=G({},p,m);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,l=p):h=h.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yn|=s,e.lanes=s,e.memoizedState=p}}function Qu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var If=new _d.Component().refs;function Sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lo={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Wt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,i),t!==null&&(Qe(t,e,i,r),bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Wt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,i),t!==null&&(Qe(t,e,i,r),bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Wt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ht(e,i,r),t!==null&&(Qe(t,e,r,n),bi(t,e,r))}};function Yu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,o):!0}function kf(e,t,n){var r=!1,i=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=$e(o):(i=_e(t)?mn:de.current,r=t.contextTypes,o=(r=r!=null)?Xn(e,i):Qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lo.enqueueReplaceState(t,t.state,null)}function Ia(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=If,El(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$e(o):(o=_e(t)?mn:de.current,i.context=Xn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Sa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Lo.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===If&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ti(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xu(e){var t=e._init;return t(e._payload)}function Tf(e){function t(f,d){if(e){var c=f.deletions;c===null?(f.deletions=[d],f.flags|=16):c.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Kt(f,d),f.index=0,f.sibling=null,f}function o(f,d,c){return f.index=c,e?(c=f.alternate,c!==null?(c=c.index,c<d?(f.flags|=2,d):c):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,c,y){return d===null||d.tag!==6?(d=Ps(c,f.mode,y),d.return=f,d):(d=i(d,c),d.return=f,d)}function l(f,d,c,y){var E=c.type;return E===An?h(f,d,c.props.children,y,c.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Xu(E)===d.type)?(y=i(d,c.props),y.ref=fr(f,d,c),y.return=f,y):(y=ji(c.type,c.key,c.props,null,f.mode,y),y.ref=fr(f,d,c),y.return=f,y)}function u(f,d,c,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==c.containerInfo||d.stateNode.implementation!==c.implementation?(d=Rs(c,f.mode,y),d.return=f,d):(d=i(d,c.children||[]),d.return=f,d)}function h(f,d,c,y,E){return d===null||d.tag!==7?(d=fn(c,f.mode,y,E),d.return=f,d):(d=i(d,c),d.return=f,d)}function p(f,d,c){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ps(""+d,f.mode,c),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pi:return c=ji(d.type,d.key,d.props,null,f.mode,c),c.ref=fr(f,null,d),c.return=f,c;case On:return d=Rs(d,f.mode,c),d.return=f,d;case Rt:var y=d._init;return p(f,y(d._payload),c)}if(vr(d)||ar(d))return d=fn(d,f.mode,c,null),d.return=f,d;Ti(f,d)}return null}function m(f,d,c,y){var E=d!==null?d.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return E!==null?null:a(f,d,""+c,y);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pi:return c.key===E?l(f,d,c,y):null;case On:return c.key===E?u(f,d,c,y):null;case Rt:return E=c._init,m(f,d,E(c._payload),y)}if(vr(c)||ar(c))return E!==null?null:h(f,d,c,y,null);Ti(f,c)}return null}function v(f,d,c,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(c)||null,a(d,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pi:return f=f.get(y.key===null?c:y.key)||null,l(d,f,y,E);case On:return f=f.get(y.key===null?c:y.key)||null,u(d,f,y,E);case Rt:var k=y._init;return v(f,d,c,k(y._payload),E)}if(vr(y)||ar(y))return f=f.get(c)||null,h(d,f,y,E,null);Ti(d,y)}return null}function w(f,d,c,y){for(var E=null,k=null,_=d,I=d=0,O=null;_!==null&&I<c.length;I++){_.index>I?(O=_,_=null):O=_.sibling;var R=m(f,_,c[I],y);if(R===null){_===null&&(_=O);break}e&&_&&R.alternate===null&&t(f,_),d=o(R,d,I),k===null?E=R:k.sibling=R,k=R,_=O}if(I===c.length)return n(f,_),H&&rn(f,I),E;if(_===null){for(;I<c.length;I++)_=p(f,c[I],y),_!==null&&(d=o(_,d,I),k===null?E=_:k.sibling=_,k=_);return H&&rn(f,I),E}for(_=r(f,_);I<c.length;I++)O=v(_,f,I,c[I],y),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?I:O.key),d=o(O,d,I),k===null?E=O:k.sibling=O,k=O);return e&&_.forEach(function(j){return t(f,j)}),H&&rn(f,I),E}function g(f,d,c,y){var E=ar(c);if(typeof E!="function")throw Error(S(150));if(c=E.call(c),c==null)throw Error(S(151));for(var k=E=null,_=d,I=d=0,O=null,R=c.next();_!==null&&!R.done;I++,R=c.next()){_.index>I?(O=_,_=null):O=_.sibling;var j=m(f,_,R.value,y);if(j===null){_===null&&(_=O);break}e&&_&&j.alternate===null&&t(f,_),d=o(j,d,I),k===null?E=j:k.sibling=j,k=j,_=O}if(R.done)return n(f,_),H&&rn(f,I),E;if(_===null){for(;!R.done;I++,R=c.next())R=p(f,R.value,y),R!==null&&(d=o(R,d,I),k===null?E=R:k.sibling=R,k=R);return H&&rn(f,I),E}for(_=r(f,_);!R.done;I++,R=c.next())R=v(_,f,I,R.value,y),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?I:R.key),d=o(R,d,I),k===null?E=R:k.sibling=R,k=R);return e&&_.forEach(function(Oe){return t(f,Oe)}),H&&rn(f,I),E}function C(f,d,c,y){if(typeof c=="object"&&c!==null&&c.type===An&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case pi:e:{for(var E=c.key,k=d;k!==null;){if(k.key===E){if(E=c.type,E===An){if(k.tag===7){n(f,k.sibling),d=i(k,c.props.children),d.return=f,f=d;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Xu(E)===k.type){n(f,k.sibling),d=i(k,c.props),d.ref=fr(f,k,c),d.return=f,f=d;break e}n(f,k);break}else t(f,k);k=k.sibling}c.type===An?(d=fn(c.props.children,f.mode,y,c.key),d.return=f,f=d):(y=ji(c.type,c.key,c.props,null,f.mode,y),y.ref=fr(f,d,c),y.return=f,f=y)}return s(f);case On:e:{for(k=c.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===c.containerInfo&&d.stateNode.implementation===c.implementation){n(f,d.sibling),d=i(d,c.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Rs(c,f.mode,y),d.return=f,f=d}return s(f);case Rt:return k=c._init,C(f,d,k(c._payload),y)}if(vr(c))return w(f,d,c,y);if(ar(c))return g(f,d,c,y);Ti(f,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,c),d.return=f,f=d):(n(f,d),d=Ps(c,f.mode,y),d.return=f,f=d),s(f)):n(f,d)}return C}var er=Tf(!0),Cf=Tf(!1),ii={},rt=Xt(ii),jr=Xt(ii),Hr=Xt(ii);function un(e){if(e===ii)throw Error(S(174));return e}function Sl(e,t){switch(z(Hr,t),z(jr,e),z(rt,ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}B(rt),z(rt,t)}function tr(){B(rt),B(jr),B(Hr)}function Pf(e){un(Hr.current);var t=un(rt.current),n=ta(t,e.type);t!==n&&(z(jr,e),z(rt,n))}function Il(e){jr.current===e&&(B(rt),B(jr))}var W=Xt(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=[];function kl(){for(var e=0;e<Es.length;e++)Es[e]._workInProgressVersionPrimary=null;Es.length=0}var Fi=It.ReactCurrentDispatcher,Ss=It.ReactCurrentBatchConfig,vn=0,K=null,Z=null,ne=null,ho=!1,Tr=!1,Vr=0,Dg=0;function ae(){throw Error(S(321))}function Tl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Cl(e,t,n,r,i,o){if(vn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?bg:Fg,e=n(r,i),Tr){o=0;do{if(Tr=!1,Vr=0,25<=o)throw Error(S(301));o+=1,ne=Z=null,t.updateQueue=null,Fi.current=Ug,e=n(r,i)}while(Tr)}if(Fi.current=po,t=Z!==null&&Z.next!==null,vn=0,ne=Z=K=null,ho=!1,t)throw Error(S(300));return e}function Pl(){var e=Vr!==0;return Vr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?K.memoizedState=ne=e:ne=ne.next=e,ne}function Be(){if(Z===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ne===null?K.memoizedState:ne.next;if(t!==null)ne=t,Z=e;else{if(e===null)throw Error(S(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?K.memoizedState=ne=e:ne=ne.next=e}return ne}function Wr(e,t){return typeof t=="function"?t(e):t}function Is(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((vn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,K.lanes|=h,yn|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ye(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ks(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ye(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Rf(){}function Nf(e,t){var n=K,r=Be(),i=t(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,ye=!0),r=r.queue,Rl(Df.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,Kr(9,Af.bind(null,n,r,i,t),void 0,null),re===null)throw Error(S(349));(vn&30)!==0||Of(n,t,i)}return i}function Of(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Af(e,t,n,r){t.value=n,t.getSnapshot=r,Lf(t)&&xf(e)}function Df(e,t,n){return n(function(){Lf(t)&&xf(e)})}function Lf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function xf(e){var t=wt(e,1);t!==null&&Qe(t,e,1,-1)}function Zu(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Mg.bind(null,K,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mf(){return Be().memoizedState}function Ui(e,t,n,r){var i=et();K.flags|=e,i.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function xo(e,t,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(Z!==null){var s=Z.memoizedState;if(o=s.destroy,r!==null&&Tl(r,s.deps)){i.memoizedState=Kr(t,n,o,r);return}}K.flags|=e,i.memoizedState=Kr(1|t,n,o,r)}function ec(e,t){return Ui(8390656,8,e,t)}function Rl(e,t){return xo(2048,8,e,t)}function bf(e,t){return xo(4,2,e,t)}function Ff(e,t){return xo(4,4,e,t)}function Uf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zf(e,t,n){return n=n!=null?n.concat([e]):null,xo(4,4,Uf.bind(null,t,e),n)}function Nl(){}function $f(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jf(e,t,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n):(Ye(n,t)||(n=Vd(),K.lanes|=n,yn|=n,e.baseState=!0),t)}function Lg(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Ss.transition;Ss.transition={};try{e(!1),t()}finally{F=n,Ss.transition=r}}function Hf(){return Be().memoizedState}function xg(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vf(e))Wf(t,n);else if(n=Ef(e,t,n,r),n!==null){var i=pe();Qe(n,e,r,i),Kf(n,t,r)}}function Mg(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vf(e))Wf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,s)){var l=t.interleaved;l===null?(i.next=i,_l(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Ef(e,t,i,r),n!==null&&(i=pe(),Qe(n,e,r,i),Kf(n,t,r))}}function Vf(e){var t=e.alternate;return e===K||t!==null&&t===K}function Wf(e,t){Tr=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sl(e,n)}}var po={readContext:$e,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},bg={readContext:$e,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4194308,4,Uf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xg.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:Nl,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=Lg.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=et();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),re===null)throw Error(S(349));(vn&30)!==0||Of(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ec(Df.bind(null,r,o,e),[e]),r.flags|=2048,Kr(9,Af.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=re.identifierPrefix;if(H){var n=ft,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fg={readContext:$e,useCallback:$f,useContext:$e,useEffect:Rl,useImperativeHandle:zf,useInsertionEffect:bf,useLayoutEffect:Ff,useMemo:Bf,useReducer:Is,useRef:Mf,useState:function(){return Is(Wr)},useDebugValue:Nl,useDeferredValue:function(e){var t=Be();return jf(t,Z.memoizedState,e)},useTransition:function(){var e=Is(Wr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Nf,useId:Hf,unstable_isNewReconciler:!1},Ug={readContext:$e,useCallback:$f,useContext:$e,useEffect:Rl,useImperativeHandle:zf,useInsertionEffect:bf,useLayoutEffect:Ff,useMemo:Bf,useReducer:ks,useRef:Mf,useState:function(){return ks(Wr)},useDebugValue:Nl,useDeferredValue:function(e){var t=Be();return Z===null?t.memoizedState=e:jf(t,Z.memoizedState,e)},useTransition:function(){var e=ks(Wr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Nf,useId:Hf,unstable_isNewReconciler:!1};function nr(e,t){try{var n="",r=t;do n+=fm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ka(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zg=typeof WeakMap=="function"?WeakMap:Map;function Gf(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,xa=r),ka(e,t)},n}function qf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ka(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ka(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function tc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Zg.bind(null,e,t,n),t.then(e,e))}function nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var $g=It.ReactCurrentOwner,ye=!1;function he(e,t,n,r){t.child=e===null?Cf(t,null,n,r):er(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var o=t.ref;return Gn(t,i),r=Cl(e,t,n,r,o,i),n=Pl(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(H&&n&&pl(t),t.flags|=1,he(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qf(e,t,o,r,i)):(e=ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(s,r)&&e.ref===t.ref)return _t(e,t,i)}return t.flags|=1,e=Kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ur(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ye=!0);else return t.lanes=e.lanes,_t(e,t,i)}return Ta(e,t,n,r,i)}function Yf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Bn,Ie),Ie|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Bn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Bn,Ie),Ie|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Bn,Ie),Ie|=r;return he(e,t,i,n),t.child}function Jf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,n,r,i){var o=_e(n)?mn:de.current;return o=Xn(t,o),Gn(t,i),n=Cl(e,t,n,r,o,i),r=Pl(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(H&&r&&pl(t),t.flags|=1,he(e,t,n,i),t.child)}function sc(e,t,n,r,i){if(_e(n)){var o=!0;oo(t)}else o=!1;if(Gn(t,i),t.stateNode===null)zi(e,t),kf(t,n,r),Ia(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=$e(u):(u=_e(n)?mn:de.current,u=Xn(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ju(t,s,r,u),Nt=!1;var m=t.memoizedState;s.state=m,co(t,r,s,i),l=t.memoizedState,a!==r||m!==l||we.current||Nt?(typeof h=="function"&&(Sa(t,n,h,r),l=t.memoizedState),(a=Nt||Yu(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Sf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:We(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=$e(l):(l=_e(n)?mn:de.current,l=Xn(t,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Ju(t,s,r,l),Nt=!1,m=t.memoizedState,s.state=m,co(t,r,s,i);var w=t.memoizedState;a!==p||m!==w||we.current||Nt?(typeof v=="function"&&(Sa(t,n,v,r),w=t.memoizedState),(u=Nt||Yu(t,n,u,r,m,w,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ca(e,t,n,r,o,i)}function Ca(e,t,n,r,i,o){Jf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Wu(t,n,!1),_t(e,t,o);r=t.stateNode,$g.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=er(t,e.child,null,o),t.child=er(t,null,a,o)):he(e,t,a,o),t.memoizedState=r.state,i&&Wu(t,n,!0),t.child}function Xf(e){var t=e.stateNode;t.pendingContext?Vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vu(e,t.context,!1),Sl(e,t.containerInfo)}function ac(e,t,n,r,i){return Zn(),gl(i),t.flags|=256,he(e,t,n,r),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zf(e,t,n){var r=t.pendingProps,i=W.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(W,i&1),e===null)return _a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Fo(s,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ra(n),t.memoizedState=Pa,e):Ol(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Bg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Kt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Kt(a,o):(o=fn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ra(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Pa,r}return o=e.child,e=o.sibling,r=Kt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ol(e,t){return t=Fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ci(e,t,n,r){return r!==null&&gl(r),er(t,e.child,null,n),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ts(Error(S(422))),Ci(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fo({mode:"visible",children:r.children},i,0,null),o=fn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&er(t,e.child,null,s),t.child.memoizedState=Ra(s),t.memoizedState=Pa,o);if((t.mode&1)===0)return Ci(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=Ts(o,r,void 0),Ci(e,t,s,r)}if(a=(s&e.childLanes)!==0,ye||a){if(r=re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),Qe(r,e,i,-1))}return bl(),r=Ts(Error(S(421))),Ci(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ev.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ke=jt(i.nextSibling),Te=t,H=!0,Ge=null,e!==null&&(Le[xe++]=dt,Le[xe++]=ft,Le[xe++]=gn,dt=e.id,ft=e.overflow,gn=t),t=Ol(t,r.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function Cs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function eh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(he(e,t,r.children,n),r=W.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(W,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cs(t,!0,n,null,o);break;case"together":Cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jg(e,t,n){switch(t.tag){case 3:Xf(t),Zn();break;case 5:Pf(t);break;case 1:_e(t.type)&&oo(t);break;case 4:Sl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(W,W.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Zf(e,t,n):(z(W,W.current&1),e=_t(e,t,n),e!==null?e.sibling:null);z(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return eh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Yf(e,t,n)}return _t(e,t,n)}var th,Na,nh,rh;th=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Na=function(){};nh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(rt.current);var o=null;switch(n){case"input":i=Js(e,i),r=Js(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=ea(e,i),r=ea(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}na(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ar.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};rh=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hg(e,t,n){var r=t.pendingProps;switch(ml(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return _e(t.type)&&io(),le(t),null;case 3:return r=t.stateNode,tr(),B(we),B(de),kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ge!==null&&(Fa(Ge),Ge=null))),Na(e,t),le(t),null;case 5:Il(t);var i=un(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)nh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return le(t),null}if(e=un(rt.current),ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tt]=t,r[Br]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<wr.length;i++)$(wr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":vu(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":wu(r,o),$("invalid",r)}na(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",""+a]):Ar.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":mi(r),yu(r,o,!0);break;case"textarea":mi(r),_u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ro)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[tt]=t,e[Br]=r,th(e,t,!1,!1),t.stateNode=e;e:{switch(s=ra(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<wr.length;i++)$(wr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":vu(e,r),i=Js(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),$("invalid",e);break;case"textarea":wu(e,r),i=ea(e,r),$("invalid",e);break;default:i=r}na(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Dd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Od(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dr(e,l):typeof l=="number"&&Dr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ar.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&el(e,o,l,s))}switch(n){case"input":mi(e),yu(e,r,!1);break;case"textarea":mi(e),_u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Hn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)rh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=un(Hr.current),un(rt.current),ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return le(t),null;case 13:if(B(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&ke!==null&&(t.mode&1)!==0&&(t.flags&128)===0)_f(),Zn(),t.flags|=98560,o=!1;else if(o=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[tt]=t}else Zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Ge!==null&&(Fa(Ge),Ge=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(W.current&1)!==0?ee===0&&(ee=3):bl())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return tr(),Na(e,t),e===null&&zr(t.stateNode.containerInfo),le(t),null;case 10:return wl(t.type._context),le(t),null;case 17:return _e(t.type)&&io(),le(t),null;case 19:if(B(W),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)hr(o,!1);else{if(ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=fo(e),s!==null){for(t.flags|=128,hr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(W,W.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>rr&&(t.flags|=128,r=!0,hr(o,!1),t.lanes=4194304)}else{if(!r)if(e=fo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!H)return le(t),null}else 2*J()-o.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,hr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=W.current,z(W,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ie&1073741824)!==0&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Vg(e,t){switch(ml(t),t.tag){case 1:return _e(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),B(we),B(de),kl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Il(t),null;case 13:if(B(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(W),null;case 4:return tr(),null;case 10:return wl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Pi=!1,ue=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,P=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Oa(e,t,n){try{n()}catch(r){q(e,t,r)}}var uc=!1;function Kg(e,t){if(ha=eo,e=af(),hl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++h===r&&(l=s),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pa={focusedElem:e,selectionRange:n},eo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,C=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:We(t.type,g),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=uc,uc=!1,w}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Oa(t,n,o)}i=i.next}while(i!==r)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ih(e){var t=e.alternate;t!==null&&(e.alternate=null,ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[Br],delete t[va],delete t[Rg],delete t[Ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oh(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Da(e,t,n),e=e.sibling;e!==null;)Da(e,t,n),e=e.sibling}function La(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}var ie=null,Ke=!1;function Ct(e,t,n){for(n=n.child;n!==null;)sh(e,t,n),n=n.sibling}function sh(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:ue||$n(n,t);case 6:var r=ie,i=Ke;ie=null,Ct(e,t,n),ie=r,Ke=i,ie!==null&&(Ke?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Ke?(e=ie,n=n.stateNode,e.nodeType===8?ws(e.parentNode,n):e.nodeType===1&&ws(e,n),br(e)):ws(ie,n.stateNode));break;case 4:r=ie,i=Ke,ie=n.stateNode.containerInfo,Ke=!0,Ct(e,t,n),ie=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Oa(n,t,s),i=i.next}while(i!==r)}Ct(e,t,n);break;case 1:if(!ue&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,Ct(e,t,n),ue=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wg),t.forEach(function(r){var i=tv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,Ke=!1;break e;case 3:ie=a.stateNode.containerInfo,Ke=!0;break e;case 4:ie=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ie===null)throw Error(S(160));sh(o,s,i),ie=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ah(t,e),t=t.sibling}function ah(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{Cr(3,e,e.return),Mo(3,e)}catch(g){q(e,e.return,g)}try{Cr(5,e,e.return)}catch(g){q(e,e.return,g)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var i=e.stateNode;try{Dr(i,"")}catch(g){q(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Pd(i,o),ra(a,s);var u=ra(a,o);for(s=0;s<l.length;s+=2){var h=l[s],p=l[s+1];h==="style"?Dd(i,p):h==="dangerouslySetInnerHTML"?Od(i,p):h==="children"?Dr(i,p):el(i,h,p,u)}switch(a){case"input":Xs(i,o);break;case"textarea":Rd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Hn(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Hn(i,!!o.multiple,o.defaultValue,!0):Hn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Br]=o}catch(g){q(e,e.return,g)}}break;case 6:if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){q(e,e.return,g)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{br(t.containerInfo)}catch(g){q(e,e.return,g)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ll=J())),r&4&&dc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(u=ue)||h,Ve(t,e),ue=u):Ve(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&(e.mode&1)!==0)for(P=e,h=e.child;h!==null;){for(p=P=h;P!==null;){switch(m=P,v=m.child,m.tag){case 0:case 11:case 14:case 15:Cr(4,m,m.return);break;case 1:$n(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){q(r,n,g)}}break;case 5:$n(m,m.return);break;case 22:if(m.memoizedState!==null){hc(p);continue}}v!==null?(v.return=m,P=v):hc(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ad("display",s))}catch(g){q(e,e.return,g)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){q(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ve(t,e),Ze(e),r&4&&dc(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oh(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dr(i,""),r.flags&=-33);var o=cc(e);La(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=cc(e);Da(e,a,s);break;default:throw Error(S(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gg(e,t,n){P=e,lh(e)}function lh(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Pi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ue;a=Pi;var u=ue;if(Pi=s,(ue=l)&&!u)for(P=i;P!==null;)s=P,l=s.child,s.tag===22&&s.memoizedState!==null?pc(i):l!==null?(l.return=s,P=l):pc(i);for(;o!==null;)P=o,lh(o),o=o.sibling;P=i,Pi=a,ue=u}fc(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,P=o):fc(e)}}function fc(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ue||Mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Qu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&br(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ue||t.flags&512&&Aa(t)}catch(m){q(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function hc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function pc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mo(4,t)}catch(l){q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){q(t,i,l)}}var o=t.return;try{Aa(t)}catch(l){q(t,o,l)}break;case 5:var s=t.return;try{Aa(t)}catch(l){q(t,s,l)}}}catch(l){q(t,t.return,l)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var qg=Math.ceil,mo=It.ReactCurrentDispatcher,Al=It.ReactCurrentOwner,Fe=It.ReactCurrentBatchConfig,b=0,re=null,X=null,oe=0,Ie=0,Bn=Xt(0),ee=0,Gr=null,yn=0,bo=0,Dl=0,Pr=null,ve=null,Ll=0,rr=1/0,lt=null,go=!1,xa=null,Vt=null,Ri=!1,Ft=null,vo=0,Rr=0,Ma=null,$i=-1,Bi=0;function pe(){return(b&6)!==0?J():$i!==-1?$i:$i=J()}function Wt(e){return(e.mode&1)===0?1:(b&2)!==0&&oe!==0?oe&-oe:Ag.transition!==null?(Bi===0&&(Bi=Vd()),Bi):(e=F,e!==0||(e=window.event,e=e===void 0?16:Jd(e.type)),e)}function Qe(e,t,n,r){if(50<Rr)throw Rr=0,Ma=null,Error(S(185));ti(e,n,r),((b&2)===0||e!==re)&&(e===re&&((b&2)===0&&(bo|=n),ee===4&&At(e,oe)),Ee(e,r),n===1&&b===0&&(t.mode&1)===0&&(rr=J()+500,Do&&Zt()))}function Ee(e,t){var n=e.callbackNode;Am(e,t);var r=Zi(e,e===re?oe:0);if(r===0)n!==null&&Iu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Iu(n),t===1)e.tag===0?Og(mc.bind(null,e)):vf(mc.bind(null,e)),Cg(function(){(b&6)===0&&Zt()}),n=null;else{switch(Wd(r)){case 1:n=ol;break;case 4:n=jd;break;case 16:n=Xi;break;case 536870912:n=Hd;break;default:n=Xi}n=gh(n,uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uh(e,t){if($i=-1,Bi=0,(b&6)!==0)throw Error(S(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=Zi(e,e===re?oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=yo(e,r);else{t=r;var i=b;b|=2;var o=dh();(re!==e||oe!==t)&&(lt=null,rr=J()+500,dn(e,t));do try{Jg();break}catch(a){ch(e,a)}while(1);yl(),mo.current=o,b=i,X!==null?t=0:(re=null,oe=0,t=ee)}if(t!==0){if(t===2&&(i=la(e),i!==0&&(r=i,t=ba(e,i))),t===1)throw n=Gr,dn(e,0),At(e,r),Ee(e,J()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Qg(i)&&(t=yo(e,r),t===2&&(o=la(e),o!==0&&(r=o,t=ba(e,o))),t===1))throw n=Gr,dn(e,0),At(e,r),Ee(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:on(e,ve,lt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Ll+500-J(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ga(on.bind(null,e,ve,lt),t);break}on(e,ve,lt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-qe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qg(r/1960))-r,10<r){e.timeoutHandle=ga(on.bind(null,e,ve,lt),r);break}on(e,ve,lt);break;case 5:on(e,ve,lt);break;default:throw Error(S(329))}}}return Ee(e,J()),e.callbackNode===n?uh.bind(null,e):null}function ba(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=yo(e,t),e!==2&&(t=ve,ve=n,t!==null&&Fa(t)),e}function Fa(e){ve===null?ve=e:ve.push.apply(ve,e)}function Qg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Dl,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function mc(e){if((b&6)!==0)throw Error(S(327));qn();var t=Zi(e,0);if((t&1)===0)return Ee(e,J()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=la(e);r!==0&&(t=r,n=ba(e,r))}if(n===1)throw n=Gr,dn(e,0),At(e,t),Ee(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,ve,lt),Ee(e,J()),null}function xl(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(rr=J()+500,Do&&Zt())}}function wn(e){Ft!==null&&Ft.tag===0&&(b&6)===0&&qn();var t=b;b|=1;var n=Fe.transition,r=F;try{if(Fe.transition=null,F=1,e)return e()}finally{F=r,Fe.transition=n,b=t,(b&6)===0&&Zt()}}function Ml(){Ie=Bn.current,B(Bn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tg(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(ml(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:tr(),B(we),B(de),kl();break;case 5:Il(r);break;case 4:tr();break;case 13:B(W);break;case 19:B(W);break;case 10:wl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(re=e,X=e=Kt(e.current,null),oe=Ie=t,ee=0,Gr=null,Dl=bo=yn=0,ve=Pr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ln=null}return e}function ch(e,t){do{var n=X;try{if(yl(),Fi.current=po,ho){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ho=!1}if(vn=0,ne=Z=K=null,Tr=!1,Vr=0,Al.current=null,n===null||n.return===null){ee=1,Gr=t,X=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if((h.mode&1)===0&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=nc(s);if(v!==null){v.flags&=-257,rc(v,s,a,o,t),v.mode&1&&tc(o,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(l),t.updateQueue=g}else w.add(l);break e}else{if((t&1)===0){tc(o,u,t),bl();break e}l=Error(S(426))}}else if(H&&a.mode&1){var C=nc(s);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),rc(C,s,a,o,t),gl(nr(l,a));break e}}o=l=nr(l,a),ee!==4&&(ee=2),Pr===null?Pr=[o]:Pr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Gf(o,l,t);qu(o,f);break e;case 1:a=l;var d=o.type,c=o.stateNode;if((o.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Vt===null||!Vt.has(c)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=qf(o,a,t);qu(o,y);break e}}o=o.return}while(o!==null)}hh(n)}catch(E){t=E,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function dh(){var e=mo.current;return mo.current=po,e===null?po:e}function bl(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||(yn&268435455)===0&&(bo&268435455)===0||At(re,oe)}function yo(e,t){var n=b;b|=2;var r=dh();(re!==e||oe!==t)&&(lt=null,dn(e,t));do try{Yg();break}catch(i){ch(e,i)}while(1);if(yl(),b=n,mo.current=r,X!==null)throw Error(S(261));return re=null,oe=0,ee}function Yg(){for(;X!==null;)fh(X)}function Jg(){for(;X!==null&&!Sm();)fh(X)}function fh(e){var t=mh(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?hh(e):X=t,Al.current=null}function hh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Hg(n,t,Ie),n!==null){X=n;return}}else{if(n=Vg(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,X=null;return}}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);ee===0&&(ee=5)}function on(e,t,n){var r=F,i=Fe.transition;try{Fe.transition=null,F=1,Xg(e,t,n,r)}finally{Fe.transition=i,F=r}return null}function Xg(e,t,n,r){do qn();while(Ft!==null);if((b&6)!==0)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dm(e,o),e===re&&(X=re=null,oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ri||(Ri=!0,gh(Xi,function(){return qn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Fe.transition,Fe.transition=null;var s=F;F=1;var a=b;b|=4,Al.current=null,Kg(e,n),ah(n,e),yg(pa),eo=!!ha,pa=ha=null,e.current=n,Gg(n),Im(),b=a,F=s,Fe.transition=o}else e.current=n;if(Ri&&(Ri=!1,Ft=e,vo=i),o=e.pendingLanes,o===0&&(Vt=null),Cm(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=xa,xa=null,e;return(vo&1)!==0&&e.tag!==0&&qn(),o=e.pendingLanes,(o&1)!==0?e===Ma?Rr++:(Rr=0,Ma=e):Rr=0,Zt(),null}function qn(){if(Ft!==null){var e=Wd(vo),t=Fe.transition,n=F;try{if(Fe.transition=null,F=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,vo=0,(b&6)!==0)throw Error(S(331));var i=b;for(b|=4,P=e.current;P!==null;){var o=P,s=o.child;if((P.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Cr(8,h,o)}var p=h.child;if(p!==null)p.return=h,P=p;else for(;P!==null;){h=P;var m=h.sibling,v=h.return;if(ih(h),h===u){P=null;break}if(m!==null){m.return=v,P=m;break}P=v}}}var w=o.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var C=g.sibling;g.sibling=null,g=C}while(g!==null)}}P=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Cr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){s=P;var c=s.child;if((s.subtreeFlags&2064)!==0&&c!==null)c.return=s,P=c;else e:for(s=d;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Mo(9,a)}}catch(E){q(a,a.return,E)}if(a===s){P=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,P=y;break e}P=a.return}}if(b=i,Zt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Po,e)}catch{}r=!0}return r}finally{F=n,Fe.transition=t}}return!1}function gc(e,t,n){t=nr(n,t),t=Gf(e,t,1),e=Ht(e,t,1),t=pe(),e!==null&&(ti(e,1,t),Ee(e,t))}function q(e,t,n){if(e.tag===3)gc(e,e,n);else for(;t!==null;){if(t.tag===3){gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=nr(n,e),e=qf(t,e,1),t=Ht(t,e,1),e=pe(),t!==null&&(ti(t,1,e),Ee(t,e));break}}t=t.return}}function Zg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(ee===4||ee===3&&(oe&130023424)===oe&&500>J()-Ll?dn(e,0):Dl|=n),Ee(e,t)}function ph(e,t){t===0&&((e.mode&1)===0?t=1:(t=yi,yi<<=1,(yi&130023424)===0&&(yi=4194304)));var n=pe();e=wt(e,t),e!==null&&(ti(e,t,n),Ee(e,n))}function ev(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ph(e,n)}function tv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),ph(e,n)}var mh;mh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ye=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ye=!1,jg(e,t,n);ye=(e.flags&131072)!==0}else ye=!1,H&&(t.flags&1048576)!==0&&yf(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Xn(t,de.current);Gn(t,n),i=Cl(null,t,r,e,i,n);var o=Pl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,oo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,El(t),i.updater=Lo,t.stateNode=i,i._reactInternals=t,Ia(t,r,e,n),t=Ca(null,t,r,!0,o,n)):(t.tag=0,H&&o&&pl(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rv(r),e=We(r,e),i){case 0:t=Ta(null,t,r,e,n);break e;case 1:t=sc(null,t,r,e,n);break e;case 11:t=ic(null,t,r,e,n);break e;case 14:t=oc(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Ta(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),sc(e,t,r,i,n);case 3:e:{if(Xf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sf(e,t),co(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=nr(Error(S(423)),t),t=ac(e,t,r,n,i);break e}else if(r!==i){i=nr(Error(S(424)),t),t=ac(e,t,r,n,i);break e}else for(ke=jt(t.stateNode.containerInfo.firstChild),Te=t,H=!0,Ge=null,n=Cf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===i){t=_t(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Pf(t),e===null&&_a(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ma(r,i)?s=null:o!==null&&ma(r,o)&&(t.flags|=32),Jf(e,t),he(e,t,s,n),t.child;case 6:return e===null&&_a(t),null;case 13:return Zf(e,t,n);case 4:return Sl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),ic(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(lo,r._currentValue),r._currentValue=s,o!==null)if(Ye(o.value,s)){if(o.children===i.children&&!we.current){t=_t(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ea(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ea(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gn(t,n),i=$e(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),oc(e,t,r,i,n);case 15:return Qf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),zi(e,t),t.tag=1,_e(r)?(e=!0,oo(t)):e=!1,Gn(t,n),kf(t,r,i),Ia(t,r,i,n),Ca(null,t,r,!0,e,n);case 19:return eh(e,t,n);case 22:return Yf(e,t,n)}throw Error(S(156,t.tag))};function gh(e,t){return Bd(e,t)}function nv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new nv(e,t,n,r)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rv(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nl)return 11;if(e===rl)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ji(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Fl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case An:return fn(n.children,i,o,t);case tl:s=8,i|=8;break;case Gs:return e=Me(12,n,t,i|2),e.elementType=Gs,e.lanes=o,e;case qs:return e=Me(13,n,t,i),e.elementType=qs,e.lanes=o,e;case Qs:return e=Me(19,n,t,i),e.elementType=Qs,e.lanes=o,e;case kd:return Fo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sd:s=10;break e;case Id:s=9;break e;case nl:s=11;break e;case rl:s=14;break e;case Rt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Me(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Fo(e,t,n,r){return e=Me(22,e,r,t),e.elementType=kd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ps(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Rs(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ls(0),this.expirationTimes=ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ul(e,t,n,r,i,o,s,a,l){return e=new iv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},El(o),e}function ov(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vh(e){if(!e)return Qt;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(_e(n))return gf(e,n,t)}return t}function yh(e,t,n,r,i,o,s,a,l){return e=Ul(n,r,!0,e,i,o,s,a,l),e.context=vh(null),n=e.current,r=pe(),i=Wt(n),o=mt(r,i),o.callback=t!=null?t:null,Ht(n,o,i),e.current.lanes=i,ti(e,i,r),Ee(e,r),e}function Uo(e,t,n,r){var i=t.current,o=pe(),s=Wt(i);return n=vh(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(i,t,s),e!==null&&(Qe(e,i,s,o),bi(e,i,s)),s}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zl(e,t){vc(e,t),(e=e.alternate)&&vc(e,t)}function sv(){return null}var wh=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}zo.prototype.render=$l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Uo(e,t,null,null)};zo.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Uo(null,e,null,null)}),t[yt]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=qd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Yd(e)}};function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function av(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=wo(s);o.call(u)}}var s=yh(t,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=s,e[yt]=s.current,zr(e.nodeType===8?e.parentNode:e),wn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wo(l);a.call(u)}}var l=Ul(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=l,e[yt]=l.current,zr(e.nodeType===8?e.parentNode:e),wn(function(){Uo(t,l,n,r)}),l}function Bo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=wo(s);a.call(l)}}Uo(t,s,e,i)}else s=av(n,t,e,i,r);return wo(s)}Kd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(sl(t,n|1),Ee(t,J()),(b&6)===0&&(rr=J()+500,Zt()))}break;case 13:wn(function(){var r=wt(e,1);if(r!==null){var i=pe();Qe(r,e,1,i)}}),zl(e,1)}};al=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=pe();Qe(t,e,134217728,n)}zl(e,134217728)}};Gd=function(e){if(e.tag===13){var t=Wt(e),n=wt(e,t);if(n!==null){var r=pe();Qe(n,e,t,r)}zl(e,t)}};qd=function(){return F};Qd=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};oa=function(e,t,n){switch(t){case"input":if(Xs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ao(r);if(!i)throw Error(S(90));Cd(r),Xs(r,i)}}}break;case"textarea":Rd(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}};Md=xl;bd=wn;var lv={usingClientEntryPoint:!1,Events:[ri,Mn,Ao,Ld,xd,xl]},pr={findFiberByHostInstance:an,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uv={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zd(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{Po=Ni.inject(uv),nt=Ni}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bl(t))throw Error(S(200));return ov(e,t,null,n)};Re.createRoot=function(e,t){if(!Bl(e))throw Error(S(299));var n=!1,r="",i=wh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ul(e,1,!1,null,null,n,!1,r,i),e[yt]=t.current,zr(e.nodeType===8?e.parentNode:e),new $l(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=zd(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return wn(e)};Re.hydrate=function(e,t,n){if(!$o(t))throw Error(S(200));return Bo(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Bl(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=wh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=yh(t,null,e,1,n!=null?n:null,i,!1,o,s),e[yt]=t.current,zr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zo(t)};Re.render=function(e,t,n){if(!$o(t))throw Error(S(200));return Bo(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!$o(e))throw Error(S(40));return e._reactRootContainer?(wn(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Re.unstable_batchedUpdates=xl;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$o(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Bo(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Re})(vd);var wc=vd.exports;Ws.createRoot=wc.createRoot,Ws.hydrateRoot=wc.hydrateRoot;/**
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
 */const _h=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},cv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[h],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):cv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw Error();const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},dv=function(e){const t=_h(e);return Eh.encodeByteArray(t,!0)},Sh=function(e){return dv(e).replace(/\./g,"")},Ih=function(e){try{return Eh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function kh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function hv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pv(){const e=fe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function jl(){return typeof indexedDB=="object"}function Hl(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Th(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function mv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gv=()=>mv().__FIREBASE_DEFAULTS__,vv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},yv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ih(e[1]);return t&&JSON.parse(t)},Vl=()=>{try{return gv()||vv()||yv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wv=e=>{var t,n;return(n=(t=Vl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},_v=()=>{var e;return(e=Vl())===null||e===void 0?void 0:e.config},Ch=e=>{var t;return(t=Vl())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Ev{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */const Sv="FirebaseError";class st extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Sv,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,en.prototype.create)}}class en{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Iv(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new st(i,a,r)}}function Iv(e,t){return e.replace(kv,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const kv=/\{\$([^}]+)}/g;function Tv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(_c(o)&&_c(s)){if(!qr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _c(e){return e!==null&&typeof e=="object"}/**
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
 */function oi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Cv(e,t){const n=new Pv(e,t);return n.subscribe.bind(n)}class Pv{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rv(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ns),i.error===void 0&&(i.error=Ns),i.complete===void 0&&(i.complete=Ns);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rv(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ns(){}/**
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
 */const Nv=1e3,Ov=2,Av=4*60*60*1e3,Dv=.5;function Ec(e,t=Nv,n=Ov){const r=t*Math.pow(n,e),i=Math.round(Dv*r*(Math.random()-.5)*2);return Math.min(Av,r+i)}/**
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
 */function Xe(e){return e&&e._delegate?e._delegate:e}class je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const sn="[DEFAULT]";/**
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
 */class Lv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ev;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Mv(t))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sn){return this.instances.has(t)}getOptions(t=sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=sn){return this.component?this.component.multipleInstances?t:sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xv(e){return e===sn?void 0:e}function Mv(e){return e.instantiationMode==="EAGER"}/**
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
 */class bv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Lv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const Fv={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Uv=U.INFO,zv={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},$v=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=zv[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wl{constructor(t){this.name=t,this._logLevel=Uv,this._logHandler=$v,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Bv=(e,t)=>t.some(n=>e instanceof n);let Sc,Ic;function jv(){return Sc||(Sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hv(){return Ic||(Ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ph=new WeakMap,Ua=new WeakMap,Rh=new WeakMap,Os=new WeakMap,Kl=new WeakMap;function Vv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(gt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Ph.set(n,e)}).catch(()=>{}),Kl.set(t,e),t}function Wv(e){if(Ua.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ua.set(e,t)}let za={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ua.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Rh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Kv(e){za=e(za)}function Gv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(As(this),t,...n);return Rh.set(r,t.sort?t.sort():[t]),gt(r)}:Hv().includes(e)?function(...t){return e.apply(As(this),t),gt(Ph.get(this))}:function(...t){return gt(e.apply(As(this),t))}}function qv(e){return typeof e=="function"?Gv(e):(e instanceof IDBTransaction&&Wv(e),Bv(e,jv())?new Proxy(e,za):e)}function gt(e){if(e instanceof IDBRequest)return Vv(e);if(Os.has(e))return Os.get(e);const t=qv(e);return t!==e&&(Os.set(e,t),Kl.set(t,e)),t}const As=e=>Kl.get(e);function jo(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=gt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(gt(s.result),l.oldVersion,l.newVersion,gt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function Ds(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),gt(n).then(()=>{})}const Qv=["get","getKey","getAll","getAllKeys","count"],Yv=["put","add","delete","clear"],Ls=new Map;function kc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ls.get(t))return Ls.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qv.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ls.set(t,o),o}Kv(e=>({...e,get:(t,n,r)=>kc(t,n)||e.get(t,n,r),has:(t,n)=>!!kc(t,n)||e.has(t,n)}));/**
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
 */class Jv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $a="@firebase/app",Tc="0.8.2";/**
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
 */const _n=new Wl("@firebase/app"),Zv="@firebase/app-compat",ey="@firebase/analytics-compat",ty="@firebase/analytics",ny="@firebase/app-check-compat",ry="@firebase/app-check",iy="@firebase/auth",oy="@firebase/auth-compat",sy="@firebase/database",ay="@firebase/database-compat",ly="@firebase/functions",uy="@firebase/functions-compat",cy="@firebase/installations",dy="@firebase/installations-compat",fy="@firebase/messaging",hy="@firebase/messaging-compat",py="@firebase/performance",my="@firebase/performance-compat",gy="@firebase/remote-config",vy="@firebase/remote-config-compat",yy="@firebase/storage",wy="@firebase/storage-compat",_y="@firebase/firestore",Ey="@firebase/firestore-compat",Sy="firebase",Iy="9.12.1";/**
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
 */const Ba="[DEFAULT]",ky={[$a]:"fire-core",[Zv]:"fire-core-compat",[ty]:"fire-analytics",[ey]:"fire-analytics-compat",[ry]:"fire-app-check",[ny]:"fire-app-check-compat",[iy]:"fire-auth",[oy]:"fire-auth-compat",[sy]:"fire-rtdb",[ay]:"fire-rtdb-compat",[ly]:"fire-fn",[uy]:"fire-fn-compat",[cy]:"fire-iid",[dy]:"fire-iid-compat",[fy]:"fire-fcm",[hy]:"fire-fcm-compat",[py]:"fire-perf",[my]:"fire-perf-compat",[gy]:"fire-rc",[vy]:"fire-rc-compat",[yy]:"fire-gcs",[wy]:"fire-gcs-compat",[_y]:"fire-fst",[Ey]:"fire-fst-compat","fire-js":"fire-js",[Sy]:"fire-js-all"};/**
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
 */const _o=new Map,ja=new Map;function Ty(e,t){try{e.container.addComponent(t)}catch(n){_n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Je(e){const t=e.name;if(ja.has(t))return _n.debug(`There were multiple attempts to register component ${t}.`),!1;ja.set(t,e);for(const n of _o.values())Ty(n,e);return!0}function Rn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Cy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new en("app","Firebase",Cy);/**
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
 */class Py{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ho=Iy;function Nh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ba,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=_v()),!n)throw Gt.create("no-options");const o=_o.get(i);if(o){if(qr(n,o.options)&&qr(r,o.config))return o;throw Gt.create("duplicate-app",{appName:i})}const s=new bv(i);for(const l of ja.values())s.addComponent(l);const a=new Py(n,r,s);return _o.set(i,a),a}function Gl(e=Ba){const t=_o.get(e);if(!t&&e===Ba)return Nh();if(!t)throw Gt.create("no-app",{appName:e});return t}function Ue(e,t,n){var r;let i=(r=ky[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_n.warn(a.join(" "));return}Je(new je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Ry="firebase-heartbeat-database",Ny=1,Qr="firebase-heartbeat-store";let xs=null;function Oh(){return xs||(xs=jo(Ry,Ny,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qr)}}}).catch(e=>{throw Gt.create("idb-open",{originalErrorMessage:e.message})})),xs}async function Oy(e){var t;try{return(await Oh()).transaction(Qr).objectStore(Qr).get(Ah(e))}catch(n){if(n instanceof st)_n.warn(n.message);else{const r=Gt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});_n.warn(r.message)}}}async function Cc(e,t){var n;try{const i=(await Oh()).transaction(Qr,"readwrite");return await i.objectStore(Qr).put(t,Ah(e)),i.done}catch(r){if(r instanceof st)_n.warn(r.message);else{const i=Gt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});_n.warn(i.message)}}}function Ah(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ay=1024,Dy=30*24*60*60*1e3;class Ly{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new My(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Dy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pc(),{heartbeatsToSend:n,unsentEntries:r}=xy(this._heartbeatsCache.heartbeats),i=Sh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pc(){return new Date().toISOString().substring(0,10)}function xy(e,t=Ay){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Rc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class My{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?Hl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Oy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rc(e){return Sh(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function by(e){Je(new je("platform-logger",t=>new Jv(t),"PRIVATE")),Je(new je("heartbeat",t=>new Ly(t),"PRIVATE")),Ue($a,Tc,e),Ue($a,Tc,"esm2017"),Ue("fire-js","")}by("");function ql(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Dh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fy=Dh,Lh=new en("auth","Firebase",Dh());/**
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
 */const Nc=new Wl("@firebase/auth");function Hi(e,...t){Nc.logLevel<=U.ERROR&&Nc.error(`Auth (${Ho}): ${e}`,...t)}/**
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
 */function Et(e,...t){throw Ql(e,...t)}function it(e,...t){return Ql(e,...t)}function Uy(e,t,n){const r=Object.assign(Object.assign({},Fy()),{[t]:n});return new en("auth","Firebase",r).create(t,{appName:e.name})}function Ql(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Lh.create(e,...t)}function N(e,t,...n){if(!e)throw Ql(t,...n)}function ht(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Hi(t),new Error(t)}function St(e,t){e||ht(t)}/**
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
 */const Oc=new Map;function pt(e){St(e instanceof Function,"Expected a class definition");let t=Oc.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Oc.set(e,t),t)}/**
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
 */function zy(e,t){const n=Rn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(qr(o,t!=null?t:{}))return i;Et(i,"already-initialized")}return n.initialize({options:t})}function $y(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Ha(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function By(){return Ac()==="http:"||Ac()==="https:"}function Ac(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function jy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(By()||kh()||"connection"in navigator)?navigator.onLine:!0}function Hy(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class si{constructor(t,n){this.shortDelay=t,this.longDelay=n,St(n>t,"Short delay should be less than long delay!"),this.isMobile=fv()||hv()}get(){return jy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yl(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class xh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Wy=new si(3e4,6e4);function Mh(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vo(e,t,n,r,i={}){return bh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=oi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),xh.fetch()(Uh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function bh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vy),t);try{const i=new Ky(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Oi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Oi(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Oi(e,"user-disabled",s);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Uy(e,h,u);Et(e,h)}}catch(i){if(i instanceof st)throw i;Et(e,"network-request-failed")}}async function Fh(e,t,n,r,i={}){const o=await Vo(e,t,n,r,i);return"mfaPendingCredential"in o&&Et(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Uh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Yl(e.config,i):`${e.config.apiScheme}://${i}`}class Ky{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Gy(e,t){return Vo(e,"POST","/v1/accounts:delete",t)}async function qy(e,t){return Vo(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Nr(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Qy(e,t=!1){const n=Xe(e),r=await n.getIdToken(t),i=Jl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Nr(Ms(i.auth_time)),issuedAtTime:Nr(Ms(i.iat)),expirationTime:Nr(Ms(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ms(e){return Number(e)*1e3}function Jl(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ih(r);return o?JSON.parse(o):(Hi("Failed to decode base64 JWT payload"),null)}catch(o){return Hi("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function Yy(e){const t=Jl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Yr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof st&&Jy(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Jy({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Xy{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Yr(e,qy(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?t0(o.providerUserInfo):[],a=e0(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new zh(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function Zy(e){const t=Xe(e);await Eo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function e0(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function t0(e){return e.map(t=>{var{providerId:n}=t,r=ql(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function n0(e,t){const n=await bh(e,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Uh(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Yy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await n0(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Jr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function Pt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=ql(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new zh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Qy(this,t)}reload(){return Zy(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Yr(this,Gy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:c,emailVerified:y,isAnonymous:E,providerData:k,stsTokenManager:_}=n;N(c&&_,t,"internal-error");const I=Jr.fromJSON(this.name,_);N(typeof c=="string",t,"internal-error"),Pt(p,t.name),Pt(m,t.name),N(typeof y=="boolean",t,"internal-error"),N(typeof E=="boolean",t,"internal-error"),Pt(v,t.name),Pt(w,t.name),Pt(g,t.name),Pt(C,t.name),Pt(f,t.name),Pt(d,t.name);const O=new hn({uid:c,auth:t,email:m,emailVerified:y,displayName:p,isAnonymous:E,photoURL:w,phoneNumber:v,tenantId:g,stsTokenManager:I,createdAt:f,lastLoginAt:d});return k&&Array.isArray(k)&&(O.providerData=k.map(R=>Object.assign({},R))),C&&(O._redirectEventId=C),O}static async _fromIdTokenResponse(t,n,r=!1){const i=new Jr;i.updateFromServerResponse(n);const o=new hn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Eo(o),o}}/**
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
 */class $h{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}$h.type="NONE";const Dc=$h;/**
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
 */function Vi(e,t,n){return`firebase:${e}:${t}:${n}`}class Qn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Vi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Vi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Qn(pt(Dc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||pt(Dc);const s=Vi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const h=await u._get(s);if(h){const p=hn._fromJSON(t,h);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Qn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Qn(o,t,r))}}/**
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
 */function Lc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Hh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wh(t))return"Blackberry";if(Kh(t))return"Webos";if(Xl(t))return"Safari";if((t.includes("chrome/")||jh(t))&&!t.includes("edge/"))return"Chrome";if(Vh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bh(e=fe()){return/firefox\//i.test(e)}function Xl(e=fe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function jh(e=fe()){return/crios\//i.test(e)}function Hh(e=fe()){return/iemobile/i.test(e)}function Vh(e=fe()){return/android/i.test(e)}function Wh(e=fe()){return/blackberry/i.test(e)}function Kh(e=fe()){return/webos/i.test(e)}function Wo(e=fe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function r0(e=fe()){var t;return Wo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function i0(){return pv()&&document.documentMode===10}function Gh(e=fe()){return Wo(e)||Vh(e)||Kh(e)||Wh(e)||/windows phone/i.test(e)||Hh(e)}function o0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qh(e,t=[]){let n;switch(e){case"Browser":n=Lc(fe());break;case"Worker":n=`${Lc(fe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ho}/${r}`}/**
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
 */class s0{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class a0{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xc(this),this.idTokenSubscription=new xc(this),this.beforeStateQueue=new s0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Eo(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Hy()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Xe(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new en("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ko(e){return Xe(e)}class xc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Cv(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function l0(e,t,n){const r=Ko(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Qh(t),{host:s,port:a}=u0(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||c0()}function Qh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function u0(e){const t=Qh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Mc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Mc(s)}}}function Mc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function c0(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Yh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(t){return ht("not implemented")}_linkToIdToken(t,n){return ht("not implemented")}_getReauthenticationResolver(t){return ht("not implemented")}}/**
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
 */async function Yn(e,t){return Fh(e,"POST","/v1/accounts:signInWithIdp",Mh(e,t))}/**
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
 */const d0="http://localhost";class En extends Yh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new En(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=ql(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new En(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Yn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Yn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Yn(t,n)}buildRequest(){const t={requestUri:d0,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=oi(n)}return t}}/**
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
 */class Jh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends Jh{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dt extends ai{constructor(){super("facebook.com")}static credential(t){return En._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
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
 */class Lt extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return En._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
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
 */class xt extends ai{constructor(){super("github.com")}static credential(t){return En._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class Mt extends ai{constructor(){super("twitter.com")}static credential(t,n){return En._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function f0(e,t){return Fh(e,"POST","/v1/accounts:signUp",Mh(e,t))}/**
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
 */class Yt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await hn._fromIdTokenResponse(t,r,i),s=bc(r);return new Yt({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=bc(r);return new Yt({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function bc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function h0(e){var t;const n=Ko(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new Yt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await f0(n,{returnSecureToken:!0}),i=await Yt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class So extends st{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,So.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new So(t,n,r,i)}}function Xh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(e,o,t,r):o})}async function p0(e,t,n=!1){const r=await Yr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Yt._forOperation(e,"link",r)}/**
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
 */async function m0(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const s=await Yr(e,Xh(i,o,t,e),n);N(s.idToken,i,"internal-error");const a=Jl(s.idToken);N(a,i,"internal-error");const{sub:l}=a;return N(e.uid===l,i,"user-mismatch"),Yt._forOperation(e,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Et(i,"user-mismatch"),s}}/**
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
 */async function g0(e,t,n=!1){const r="signIn",i=await Xh(e,r,t),o=await Yt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function v0(e,t,n,r){return Xe(e).onIdTokenChanged(t,n,r)}function y0(e,t,n){return Xe(e).beforeAuthStateChanged(t,n)}const Io="__sak";/**
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
 */class Zh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function w0(){const e=fe();return Xl(e)||Wo(e)}const _0=1e3,E0=10;class ep extends Zh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=w0()&&o0(),this.fallbackToPolling=Gh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);i0()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,E0):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ep.type="LOCAL";const S0=ep;/**
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
 */class tp extends Zh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}tp.type="SESSION";const np=tp;/**
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
 */function I0(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Go{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Go(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await I0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
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
 */function Zl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class k0{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Zl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function ot(){return window}function T0(e){ot().location.href=e}/**
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
 */function rp(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function C0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P0(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function R0(){return rp()?self:null}/**
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
 */const ip="firebaseLocalStorageDb",N0=1,ko="firebaseLocalStorage",op="fbase_key";class li{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(e,t){return e.transaction([ko],t?"readwrite":"readonly").objectStore(ko)}function O0(){const e=indexedDB.deleteDatabase(ip);return new li(e).toPromise()}function Va(){const e=indexedDB.open(ip,N0);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ko,{keyPath:op})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ko)?t(r):(r.close(),await O0(),t(await Va()))})})}async function Fc(e,t,n){const r=qo(e,!0).put({[op]:t,value:n});return new li(r).toPromise()}async function A0(e,t){const n=qo(e,!1).get(t),r=await new li(n).toPromise();return r===void 0?null:r.value}function Uc(e,t){const n=qo(e,!0).delete(t);return new li(n).toPromise()}const D0=800,L0=3;class sp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>L0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(R0()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await C0(),!this.activeServiceWorker)return;this.sender=new k0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||P0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Va();return await Fc(t,Io,"1"),await Uc(t,Io),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>A0(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=qo(i,!1).getAll();return new li(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sp.type="LOCAL";const x0=sp;/**
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
 */function M0(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function b0(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=it("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",M0().appendChild(r)})}function F0(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new si(3e4,6e4);/**
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
 */function U0(e,t){return t?pt(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class eu extends Yh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Yn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Yn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Yn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function z0(e){return g0(e.auth,new eu(e),e.bypassAuthState)}function $0(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),m0(n,new eu(e),e.bypassAuthState)}async function B0(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),p0(n,new eu(e),e.bypassAuthState)}/**
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
 */class ap{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return z0;case"linkViaPopup":case"linkViaRedirect":return B0;case"reauthViaPopup":case"reauthViaRedirect":return $0;default:Et(this.auth,"internal-error")}}resolve(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const j0=new si(2e3,1e4);class jn extends ap{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const t=Zl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,j0.get())};t()}}jn.currentPopupAction=null;/**
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
 */const H0="pendingRedirect",Wi=new Map;class V0 extends ap{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Wi.get(this.auth._key());if(!t){try{const r=await W0(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Wi.set(this.auth._key(),t)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W0(e,t){const n=q0(t),r=G0(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function K0(e,t){Wi.set(e._key(),t)}function G0(e){return pt(e._redirectPersistence)}function q0(e){return Vi(H0,e.config.apiKey,e.name)}async function Q0(e,t,n=!1){const r=Ko(e),i=U0(r,t),s=await new V0(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const Y0=10*60*1e3;class J0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!X0(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!lp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Y0&&this.cachedEventUids.clear(),this.cachedEventUids.has(zc(t))}saveEventToCache(t){this.cachedEventUids.add(zc(t)),this.lastProcessedEventTime=Date.now()}}function zc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function lp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function X0(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lp(e);default:return!1}}/**
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
 */async function Z0(e,t={}){return Vo(e,"GET","/v1/projects",t)}/**
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
 */const ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tw=/^https?/;async function nw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Z0(e);for(const n of t)try{if(rw(n))return}catch{}Et(e,"unauthorized-domain")}function rw(e){const t=Ha(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!tw.test(n))return!1;if(ew.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iw=new si(3e4,6e4);function $c(){const e=ot().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ow(e){return new Promise((t,n)=>{var r,i,o;function s(){$c(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$c(),n(it(e,"network-request-failed"))},timeout:iw.get()})}if(!((i=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ot().gapi)===null||o===void 0)&&o.load)s();else{const a=F0("iframefcb");return ot()[a]=()=>{gapi.load?s():n(it(e,"network-request-failed"))},b0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ki=null,t})}let Ki=null;function sw(e){return Ki=Ki||ow(e),Ki}/**
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
 */const aw=new si(5e3,15e3),lw="__/auth/iframe",uw="emulator/auth/iframe",cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fw(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Yl(t,uw):`https://${e.config.authDomain}/${lw}`,r={apiKey:t.apiKey,appName:e.name,v:Ho},i=dw.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${oi(r).slice(1)}`}async function hw(e){const t=await sw(e),n=ot().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:fw(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cw,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=it(e,"network-request-failed"),a=ot().setTimeout(()=>{o(s)},aw.get());function l(){ot().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const pw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mw=500,gw=600,vw="_blank",yw="http://localhost";class Bc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ww(e,t,n,r=mw,i=gw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pw),{width:r.toString(),height:i.toString(),top:o,left:s}),u=fe().toLowerCase();n&&(a=jh(u)?vw:n),Bh(u)&&(t=t||yw,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(r0(u)&&a!=="_self")return _w(t||"",a),new Bc(null);const p=window.open(t||"",a,h);N(p,e,"popup-blocked");try{p.focus()}catch{}return new Bc(p)}function _w(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ew="__/auth/handler",Sw="emulator/auth/handler";function jc(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ho,eventId:i};if(t instanceof Jh){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Tv(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof ai){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Iw(e)}?${oi(a).slice(1)}`}function Iw({config:e}){return e.emulator?Yl(e,Sw):`https://${e.authDomain}/${Ew}`}/**
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
 */const bs="webStorageSupport";class kw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=np,this._completeRedirectFn=Q0,this._overrideRedirectResult=K0}async _openPopup(t,n,r,i){var o;St((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=jc(t,n,r,Ha(),i);return ww(t,s,Zl())}async _openRedirect(t,n,r,i){return await this._originValidation(t),T0(jc(t,n,r,Ha(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(St(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await hw(t),r=new J0(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(bs,{type:bs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[bs];s!==void 0&&n(!!s),Et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nw(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gh()||Xl()||Wo()}}const Tw=kw;var Hc="@firebase/auth",Vc="0.20.10";/**
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
 */class Cw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rw(e){Je(new je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{N(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),N(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qh(e)},h=new a0(a,l,u);return $y(h,n),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Je(new je("auth-internal",t=>{const n=Ko(t.getProvider("auth").getImmediate());return(r=>new Cw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Hc,Vc,Pw(e)),Ue(Hc,Vc,"esm2017")}/**
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
 */const Nw=5*60,Ow=Ch("authIdTokenMaxAge")||Nw;let Wc=null;const Aw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ow)return;const i=n==null?void 0:n.token;Wc!==i&&(Wc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dw(e=Gl()){const t=Rn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=zy(e,{popupRedirectResolver:Tw,persistence:[x0,S0,np]}),r=Ch("authTokenSyncURL");if(r){const o=Aw(r);y0(n,o,()=>o(n.currentUser)),v0(n,s=>o(s))}const i=wv("auth");return i&&l0(n,`http://${i}`),n}Rw("Browser");var Lw="firebase",xw="9.12.1";/**
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
 */Ue(Lw,xw,"app");const up="@firebase/installations",tu="0.5.15";/**
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
 */const cp=1e4,dp=`w:${tu}`,fp="FIS_v2",Mw="https://firebaseinstallations.googleapis.com/v1",bw=60*60*1e3,Fw="installations",Uw="Installations";/**
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
 */const zw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Sn=new en(Fw,Uw,zw);function hp(e){return e instanceof st&&e.code.includes("request-failed")}/**
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
 */function pp({projectId:e}){return`${Mw}/projects/${e}/installations`}function mp(e){return{token:e.token,requestStatus:2,expiresIn:Bw(e.expiresIn),creationTime:Date.now()}}async function gp(e,t){const r=(await t.json()).error;return Sn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $w(e,{refreshToken:t}){const n=vp(e);return n.append("Authorization",jw(t)),n}async function yp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Bw(e){return Number(e.replace("s","000"))}function jw(e){return`${fp} ${e}`}/**
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
 */async function Hw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=pp(e),i=vp(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:fp,appId:e.appId,sdkVersion:dp},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await yp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:mp(u.authToken)}}else throw await gp("Create Installation",l)}/**
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
 */function wp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Vw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ww=/^[cdef][\w-]{21}$/,Wa="";function Kw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Gw(e);return Ww.test(n)?n:Wa}catch{return Wa}}function Gw(e){return Vw(e).substr(0,22)}/**
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
 */function Qo(e){return`${e.appName}!${e.appId}`}/**
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
 */const _p=new Map;function Ep(e,t){const n=Qo(e);Sp(n,t),qw(n,t)}function Sp(e,t){const n=_p.get(e);if(!!n)for(const r of n)r(t)}function qw(e,t){const n=Qw();n&&n.postMessage({key:e,fid:t}),Yw()}let cn=null;function Qw(){return!cn&&"BroadcastChannel"in self&&(cn=new BroadcastChannel("[Firebase] FID Change"),cn.onmessage=e=>{Sp(e.data.key,e.data.fid)}),cn}function Yw(){_p.size===0&&cn&&(cn.close(),cn=null)}/**
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
 */const Jw="firebase-installations-database",Xw=1,In="firebase-installations-store";let Fs=null;function nu(){return Fs||(Fs=jo(Jw,Xw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(In)}}})),Fs}async function To(e,t){const n=Qo(e),i=(await nu()).transaction(In,"readwrite"),o=i.objectStore(In),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Ep(e,t.fid),t}async function Ip(e){const t=Qo(e),r=(await nu()).transaction(In,"readwrite");await r.objectStore(In).delete(t),await r.done}async function Yo(e,t){const n=Qo(e),i=(await nu()).transaction(In,"readwrite"),o=i.objectStore(In),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Ep(e,a.fid),a}/**
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
 */async function ru(e){let t;const n=await Yo(e.appConfig,r=>{const i=Zw(r),o=e1(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Wa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Zw(e){const t=e||{fid:Kw(),registrationStatus:0};return kp(t)}function e1(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Sn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=t1(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:n1(e)}:{installationEntry:t}}async function t1(e,t){try{const n=await Hw(e,t);return To(e.appConfig,n)}catch(n){throw hp(n)&&n.customData.serverCode===409?await Ip(e.appConfig):await To(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function n1(e){let t=await Kc(e.appConfig);for(;t.registrationStatus===1;)await wp(100),t=await Kc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ru(e);return r||n}return t}function Kc(e){return Yo(e,t=>{if(!t)throw Sn.create("installation-not-found");return kp(t)})}function kp(e){return r1(e)?{fid:e.fid,registrationStatus:0}:e}function r1(e){return e.registrationStatus===1&&e.registrationTime+cp<Date.now()}/**
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
 */async function i1({appConfig:e,heartbeatServiceProvider:t},n){const r=o1(e,n),i=$w(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:dp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await yp(()=>fetch(r,a));if(l.ok){const u=await l.json();return mp(u)}else throw await gp("Generate Auth Token",l)}function o1(e,{fid:t}){return`${pp(e)}/${t}/authTokens:generate`}/**
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
 */async function iu(e,t=!1){let n;const r=await Yo(e.appConfig,o=>{if(!Tp(o))throw Sn.create("not-registered");const s=o.authToken;if(!t&&l1(s))return o;if(s.requestStatus===1)return n=s1(e,t),o;{if(!navigator.onLine)throw Sn.create("app-offline");const a=c1(o);return n=a1(e,a),a}});return n?await n:r.authToken}async function s1(e,t){let n=await Gc(e.appConfig);for(;n.authToken.requestStatus===1;)await wp(100),n=await Gc(e.appConfig);const r=n.authToken;return r.requestStatus===0?iu(e,t):r}function Gc(e){return Yo(e,t=>{if(!Tp(t))throw Sn.create("not-registered");const n=t.authToken;return d1(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function a1(e,t){try{const n=await i1(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await To(e.appConfig,r),n}catch(n){if(hp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ip(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await To(e.appConfig,r)}throw n}}function Tp(e){return e!==void 0&&e.registrationStatus===2}function l1(e){return e.requestStatus===2&&!u1(e)}function u1(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+bw}function c1(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function d1(e){return e.requestStatus===1&&e.requestTime+cp<Date.now()}/**
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
 */async function f1(e){const t=e,{installationEntry:n,registrationPromise:r}=await ru(t);return r?r.catch(console.error):iu(t).catch(console.error),n.fid}/**
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
 */async function h1(e,t=!1){const n=e;return await p1(n),(await iu(n,t)).token}async function p1(e){const{registrationPromise:t}=await ru(e);t&&await t}/**
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
 */function m1(e){if(!e||!e.options)throw Us("App Configuration");if(!e.name)throw Us("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Us(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Us(e){return Sn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Cp="installations",g1="installations-internal",v1=e=>{const t=e.getProvider("app").getImmediate(),n=m1(t),r=Rn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},y1=e=>{const t=e.getProvider("app").getImmediate(),n=Rn(t,Cp).getImmediate();return{getId:()=>f1(n),getToken:i=>h1(n,i)}};function w1(){Je(new je(Cp,v1,"PUBLIC")),Je(new je(g1,y1,"PRIVATE"))}w1();Ue(up,tu);Ue(up,tu,"esm2017");/**
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
 */const Co="analytics",_1="firebase_id",E1="origin",S1=60*1e3,I1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ce=new Wl("@firebase/analytics");/**
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
 */function Rp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function k1(e,t){const n=document.createElement("script");n.src=`${Pp}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function T1(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function C1(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Rp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ce.error(a)}e("config",i,o)}async function P1(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Rp(n);for(const l of s){const u=a.find(p=>p.measurementId===l),h=u&&t[u.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ce.error(o)}}function R1(e,t,n,r){async function i(o,s,a){try{o==="event"?await P1(e,t,n,s,a):o==="config"?await C1(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Ce.error(l)}}return i}function N1(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=R1(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function O1(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Pp)&&n.src.includes(e))return n;return null}/**
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
 */const A1={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ze=new en("analytics","Analytics",A1);/**
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
 */const D1=30,L1=1e3;class x1{constructor(t={},n=L1){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Np=new x1;function M1(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function b1(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:M1(r)},o=I1.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ze.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function F1(e,t=Np,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw ze.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw ze.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new $1;return setTimeout(async()=>{a.abort()},n!==void 0?n:S1),Op({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Op(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Np){var o,s;const{appId:a,measurementId:l}=e;try{await U1(r,t)}catch(u){if(l)return Ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(o=u)===null||o===void 0?void 0:o.message}]`),{appId:a,measurementId:l};throw u}try{const u=await b1(e);return i.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!z1(h)){if(i.deleteThrottleMetadata(a),l)return Ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const p=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ec(n,i.intervalMillis,D1):Ec(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(a,m),Ce.debug(`Calling attemptFetch again in ${p} millis`),Op(e,m,r,i)}}function U1(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(ze.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function z1(e){if(!(e instanceof st)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class $1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function B1(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function j1(){var e;if(jl())try{await Hl()}catch(t){return Ce.warn(ze.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return Ce.warn(ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function H1(e,t,n,r,i,o,s){var a;const l=F1(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&Ce.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Ce.error(v)),t.push(l);const u=j1().then(v=>{if(v)return r.getId()}),[h,p]=await Promise.all([l,u]);O1(o)||k1(o,h.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[E1]="firebase",m.update=!0,p!=null&&(m[_1]=p),i("config",h.measurementId,m),h.measurementId}/**
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
 */class V1{constructor(t){this.app=t}_delete(){return delete Or[this.app.options.appId],Promise.resolve()}}let Or={},qc=[];const Qc={};let zs="dataLayer",W1="gtag",Yc,Ap,Jc=!1;function K1(){const e=[];if(kh()&&e.push("This is a browser extension environment."),Th()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ze.create("invalid-analytics-context",{errorInfo:t});Ce.warn(n.message)}}function G1(e,t,n){K1();const r=e.options.appId;if(!r)throw ze.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ze.create("no-api-key");if(Or[r]!=null)throw ze.create("already-exists",{id:r});if(!Jc){T1(zs);const{wrappedGtag:o,gtagCore:s}=N1(Or,qc,Qc,zs,W1);Ap=o,Yc=s,Jc=!0}return Or[r]=H1(e,qc,Qc,t,Yc,zs,n),new V1(e)}function q1(e=Gl()){e=Xe(e);const t=Rn(e,Co);return t.isInitialized()?t.getImmediate():Q1(e)}function Q1(e,t={}){const n=Rn(e,Co);if(n.isInitialized()){const i=n.getImmediate();if(qr(t,n.getOptions()))return i;throw ze.create("already-initialized")}return n.initialize({options:t})}function Y1(e,t,n,r){e=Xe(e),B1(Ap,Or[e.app.options.appId],t,n,r).catch(i=>Ce.error(i))}const Xc="@firebase/analytics",Zc="0.8.3";function J1(){Je(new je(Co,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return G1(r,i,n)},"PUBLIC")),Je(new je("analytics-internal",e,"PRIVATE")),Ue(Xc,Zc),Ue(Xc,Zc,"esm2017");function e(t){try{const n=t.getProvider(Co).getImmediate();return{logEvent:(r,i,o)=>Y1(n,r,i,o)}}catch(n){throw ze.create("interop-component-reg-failed",{reason:n})}}}J1();/**
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
 */const X1="/firebase-messaging-sw.js",Z1="/firebase-cloud-messaging-push-scope",Dp="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",e_="https://fcmregistrations.googleapis.com/v1",Lp="google.c.a.c_id",t_="google.c.a.c_l",n_="google.c.a.ts",r_="google.c.a.e";var ed;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ed||(ed={}));/**
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
 */var Xr;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Xr||(Xr={}));/**
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
 */function ut(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function i_(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}/**
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
 */const $s="fcm_token_details_db",o_=5,td="fcm_token_object_Store";async function s_(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes($s))return null;let t=null;return(await jo($s,o_,{upgrade:async(r,i,o,s)=>{var a;if(i<2||!r.objectStoreNames.contains(td))return;const l=s.objectStore(td),u=await l.index("fcmSenderId").get(e);if(await l.clear(),!!u){if(i===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:ut(h.vapidKey)}}}else if(i===3){const h=u;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ut(h.auth),p256dh:ut(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ut(h.vapidKey)}}}else if(i===4){const h=u;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ut(h.auth),p256dh:ut(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ut(h.vapidKey)}}}}}})).close(),await Ds($s),await Ds("fcm_vapid_details_db"),await Ds("undefined"),a_(t)?t:null}function a_(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const l_="firebase-messaging-database",u_=1,kn="firebase-messaging-store";let Bs=null;function ou(){return Bs||(Bs=jo(l_,u_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(kn)}}})),Bs}async function xp(e){const t=au(e),r=await(await ou()).transaction(kn).objectStore(kn).get(t);if(r)return r;{const i=await s_(e.appConfig.senderId);if(i)return await su(e,i),i}}async function su(e,t){const n=au(e),i=(await ou()).transaction(kn,"readwrite");return await i.objectStore(kn).put(t,n),await i.done,t}async function c_(e){const t=au(e),r=(await ou()).transaction(kn,"readwrite");await r.objectStore(kn).delete(t),await r.done}function au({appConfig:e}){return e.appId}/**
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
 */const d_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ce=new en("messaging","Messaging",d_);/**
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
 */async function f_(e,t){var n;const r=await uu(e),i=bp(t),o={method:"POST",headers:r,body:JSON.stringify(i)};let s;try{s=await(await fetch(lu(e.appConfig),o)).json()}catch(a){throw ce.create("token-subscribe-failed",{errorInfo:(n=a)===null||n===void 0?void 0:n.toString()})}if(s.error){const a=s.error.message;throw ce.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw ce.create("token-subscribe-no-token");return s.token}async function h_(e,t){var n;const r=await uu(e),i=bp(t.subscriptionOptions),o={method:"PATCH",headers:r,body:JSON.stringify(i)};let s;try{s=await(await fetch(`${lu(e.appConfig)}/${t.token}`,o)).json()}catch(a){throw ce.create("token-update-failed",{errorInfo:(n=a)===null||n===void 0?void 0:n.toString()})}if(s.error){const a=s.error.message;throw ce.create("token-update-failed",{errorInfo:a})}if(!s.token)throw ce.create("token-update-no-token");return s.token}async function Mp(e,t){var n;const r=await uu(e),i={method:"DELETE",headers:r};try{const s=await(await fetch(`${lu(e.appConfig)}/${t}`,i)).json();if(s.error){const a=s.error.message;throw ce.create("token-unsubscribe-failed",{errorInfo:a})}}catch(o){throw ce.create("token-unsubscribe-failed",{errorInfo:(n=o)===null||n===void 0?void 0:n.toString()})}}function lu({projectId:e}){return`${e_}/projects/${e}/registrations`}async function uu({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function bp({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==Dp&&(i.web.applicationPubKey=r),i}/**
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
 */const p_=7*24*60*60*1e3;async function m_(e){const t=await y_(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ut(t.getKey("auth")),p256dh:ut(t.getKey("p256dh"))},r=await xp(e.firebaseDependencies);if(r){if(w_(r.subscriptionOptions,n))return Date.now()>=r.createTime+p_?v_(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Mp(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return nd(e.firebaseDependencies,n)}else return nd(e.firebaseDependencies,n)}async function g_(e){const t=await xp(e.firebaseDependencies);t&&(await Mp(e.firebaseDependencies,t.token),await c_(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function v_(e,t){try{const n=await h_(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await su(e.firebaseDependencies,r),n}catch(n){throw await g_(e),n}}async function nd(e,t){const r={token:await f_(e,t),createTime:Date.now(),subscriptionOptions:t};return await su(e,r),r.token}async function y_(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:i_(t)})}function w_(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}/**
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
 */function rd(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return __(t,e),E_(t,e),S_(t,e),t}function __(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i)}function E_(e,t){!t.data||(e.data=t.data)}function S_(e,t){var n,r,i,o,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const l=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}/**
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
 */function I_(e){return typeof e=="object"&&!!e&&Lp in e}/**
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
 */Fp("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Fp("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Fp(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function k_(e){if(!e||!e.options)throw js("App Configuration Object");if(!e.name)throw js("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw js(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function js(e){return ce.create("missing-app-config-values",{valueName:e})}/**
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
 */class T_{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=k_(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function C_(e){var t;try{e.swRegistration=await navigator.serviceWorker.register(X1,{scope:Z1}),e.swRegistration.update().catch(()=>{})}catch(n){throw ce.create("failed-service-worker-registration",{browserErrorMessage:(t=n)===null||t===void 0?void 0:t.message})}}/**
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
 */async function P_(e,t){if(!t&&!e.swRegistration&&await C_(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ce.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function R_(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Dp)}/**
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
 */async function Up(e,t){if(!navigator)throw ce.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ce.create("permission-blocked");return await R_(e,t==null?void 0:t.vapidKey),await P_(e,t==null?void 0:t.serviceWorkerRegistration),m_(e)}/**
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
 */async function N_(e,t,n){const r=O_(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Lp],message_name:n[t_],message_time:n[n_],message_device_time:Math.floor(Date.now()/1e3)})}function O_(e){switch(e){case Xr.NOTIFICATION_CLICKED:return"notification_open";case Xr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function A_(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Xr.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(rd(n)):e.onMessageHandler.next(rd(n)));const r=n.data;I_(r)&&r[r_]==="1"&&await N_(e,n.messageType,r)}const id="@firebase/messaging",od="0.9.19";/**
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
 */const D_=e=>{const t=new T_(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>A_(t,n)),t},L_=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Up(t,r)}};function x_(){Je(new je("messaging",D_,"PUBLIC")),Je(new je("messaging-internal",L_,"PRIVATE")),Ue(id,od),Ue(id,od,"esm2017")}/**
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
 */async function M_(){try{await Hl()}catch{return!1}return typeof window<"u"&&jl()&&Th()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function b_(e,t){if(!navigator)throw ce.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function F_(e=Gl()){return M_().then(t=>{if(!t)throw ce.create("unsupported-browser")},t=>{throw ce.create("indexed-db-unsupported")}),Rn(Xe(e),"messaging").getImmediate()}async function U_(e,t){return e=Xe(e),Up(e,t)}function z_(e,t){return e=Xe(e),b_(e,t)}x_();const $_={apiKey:"AIzaSyDLP1QgCr3UV32iIt7C1Kto7bM6KmseXwk",authDomain:"perfect-period-364415.firebaseapp.com",projectId:"perfect-period-364415",storageBucket:"perfect-period-364415.appspot.com",messagingSenderId:"468675497403",appId:"1:468675497403:web:4bc5e52ffbde365daf489e",measurementId:"G-QQETMJR89T"},zp=Nh($_);q1(zp);const sd=F_(zp);function $p(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=$p(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ut(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=$p(e))&&(r&&(r+=" "),r+=t);return r}var Jo={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=L.exports,j_=Symbol.for("react.element"),H_=Symbol.for("react.fragment"),V_=Object.prototype.hasOwnProperty,W_=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K_={key:!0,ref:!0,__self:!0,__source:!0};function Bp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)V_.call(t,r)&&!K_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:j_,type:e,key:o,ref:s,props:i,_owner:W_.current}}Xo.Fragment=H_;Xo.jsx=Bp;Xo.jsxs=Bp;(function(e){e.exports=Xo})(Jo);const G_=Jo.exports.Fragment,x=Jo.exports.jsx,De=Jo.exports.jsxs;function ui(e){return typeof e=="number"&&!isNaN(e)}function mr(e){return typeof e=="boolean"}function Tn(e){return typeof e=="string"}function Se(e){return typeof e=="function"}function Gi(e){return Tn(e)||Se(e)?e:null}function qi(e){return e!=null}function q_(e,t){return e===!1||ui(e)&&e>0?e:t}function Hs(e){return L.exports.isValidElement(e)||Tn(e)||Se(e)||ui(e)}const jp={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},kt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function Q_(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Y_(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:l,position:u,preventExitTransition:h,done:p,nodeRef:m,isIn:v}=a;const w=r?t+"--"+u:t,g=r?n+"--"+u:n,C=L.exports.useRef(0);return L.exports.useLayoutEffect(()=>{const f=m.current,d=w.split(" "),c=E=>{E.target===m.current&&(f.dispatchEvent(new Event("d")),f.removeEventListener("animationend",c),f.removeEventListener("animationcancel",c),C.current===0&&E.type!=="animationcancel"&&f.classList.remove(...d))};(()=>{f.classList.add(...d),f.addEventListener("animationend",c),f.addEventListener("animationcancel",c)})()},[]),L.exports.useEffect(()=>{const f=m.current,d=()=>{f.removeEventListener("animationend",d),i?Q_(f,p,o):p()};v||(h?d():(()=>{C.current=1,f.className+=" "+g,f.addEventListener("animationend",d)})())},[v]),x(G_,{children:l})}}function ad(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const be={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Zo=e=>{let{theme:t,type:n,...r}=e;return x("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")",...r})};function J_(e){return x(Zo,{...e,children:x("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})}function X_(e){return x(Zo,{...e,children:x("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})}function Z_(e){return x(Zo,{...e,children:x("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})}function eE(e){return x(Zo,{...e,children:x("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})}function tE(){return x("div",{className:"Toastify__spinner"})}const Ka={info:X_,warning:J_,success:Z_,error:eE,spinner:tE},nE=e=>e in Ka;function rE(e){let{theme:t,type:n,isLoading:r,icon:i}=e,o=null;const s={theme:t,type:n};return i===!1||(Se(i)?o=i(s):L.exports.isValidElement(i)?o=L.exports.cloneElement(i,s):Tn(i)||ui(i)?o=i:r?o=Ka.spinner():nE(n)&&(o=Ka[n](s))),o}function iE(e){const[,t]=L.exports.useReducer(g=>g+1,0),[n,r]=L.exports.useState([]),i=L.exports.useRef(null),o=L.exports.useRef(new Map).current,s=g=>n.indexOf(g)!==-1,a=L.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:g=>o.get(g)}).current;L.exports.useEffect(()=>(a.containerId=e.containerId,be.cancelEmit(3).on(0,m).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{o.clear(),be.emit(3,a)}),[]),L.exports.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length});function l(g){let{containerId:C}=g;const{limit:f}=a.props;f&&(!C||a.containerId===C)&&(a.count-=a.queue.length,a.queue=[])}function u(g){r(C=>qi(g)?C.filter(f=>f!==g):[])}function h(){const{toastContent:g,toastProps:C,staleId:f}=a.queue.shift();v(g,C,f)}function p(g){return!i.current||a.props.enableMultiContainer&&g.containerId!==a.props.containerId||o.has(g.toastId)&&g.updateId==null}function m(g,C){let{delay:f,staleId:d,...c}=C;if(!Hs(g)||p(c))return;const{toastId:y,updateId:E,data:k}=c,{props:_}=a,I=()=>u(y),O=E==null;O&&a.count++;const R={toastId:y,updateId:E,data:k,containerId:c.containerId,isLoading:c.isLoading,theme:c.theme||_.theme,icon:c.icon!=null?c.icon:_.icon,isIn:!1,key:c.key||a.toastKey++,type:c.type,closeToast:I,closeButton:c.closeButton,rtl:_.rtl,position:c.position||_.position,transition:c.transition||_.transition,className:Gi(c.className||_.toastClassName),bodyClassName:Gi(c.bodyClassName||_.bodyClassName),style:c.style||_.toastStyle,bodyStyle:c.bodyStyle||_.bodyStyle,onClick:c.onClick||_.onClick,pauseOnHover:mr(c.pauseOnHover)?c.pauseOnHover:_.pauseOnHover,pauseOnFocusLoss:mr(c.pauseOnFocusLoss)?c.pauseOnFocusLoss:_.pauseOnFocusLoss,draggable:mr(c.draggable)?c.draggable:_.draggable,draggablePercent:c.draggablePercent||_.draggablePercent,draggableDirection:c.draggableDirection||_.draggableDirection,closeOnClick:mr(c.closeOnClick)?c.closeOnClick:_.closeOnClick,progressClassName:Gi(c.progressClassName||_.progressClassName),progressStyle:c.progressStyle||_.progressStyle,autoClose:c.isLoading?!1:q_(c.autoClose,_.autoClose),hideProgressBar:mr(c.hideProgressBar)?c.hideProgressBar:_.hideProgressBar,progress:c.progress,role:c.role||_.role,deleteToast(){const Oe=ad(o.get(y),"removed");o.delete(y),be.emit(4,Oe);const Q=a.queue.length;if(a.count=qi(y)?a.count-1:a.count-a.displayedToast,a.count<0&&(a.count=0),Q>0){const He=qi(y)?1:a.props.limit;if(Q===1||He===1)a.displayedToast++,h();else{const Tt=He>Q?Q:He;a.displayedToast=Tt;for(let Ae=0;Ae<Tt;Ae++)h()}}else t()}};R.iconOut=rE(R),Se(c.onOpen)&&(R.onOpen=c.onOpen),Se(c.onClose)&&(R.onClose=c.onClose),R.closeButton=_.closeButton,c.closeButton===!1||Hs(c.closeButton)?R.closeButton=c.closeButton:c.closeButton===!0&&(R.closeButton=Hs(_.closeButton)?_.closeButton:!0);let j=g;L.exports.isValidElement(g)&&!Tn(g.type)?j=L.exports.cloneElement(g,{closeToast:I,toastProps:R,data:k}):Se(g)&&(j=g({closeToast:I,toastProps:R,data:k})),_.limit&&_.limit>0&&a.count>_.limit&&O?a.queue.push({toastContent:j,toastProps:R,staleId:d}):ui(f)?setTimeout(()=>{v(j,R,d)},f):v(j,R,d)}function v(g,C,f){const{toastId:d}=C;f&&o.delete(f);const c={content:g,props:C};o.set(d,c),r(y=>[...y,d].filter(E=>E!==f)),be.emit(4,ad(c,c.props.updateId==null?"added":"updated"))}function w(g){const C=new Map,f=Array.from(o.values());return e.newestOnTop&&f.reverse(),f.forEach(d=>{const{position:c}=d.props;C.has(c)||C.set(c,[]),C.get(c).push(d)}),Array.from(C,d=>g(d[0],d[1]))}return{getToastToRender:w,containerRef:i,isToastActive:s}}function ld(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ud(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function oE(e){const[t,n]=L.exports.useState(!1),[r,i]=L.exports.useState(!1),o=L.exports.useRef(null),s=L.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=L.exports.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:h,onClick:p,closeOnClick:m}=e;L.exports.useEffect(()=>{a.current=e}),L.exports.useEffect(()=>(o.current&&o.current.addEventListener("d",g,{once:!0}),Se(e.onOpen)&&e.onOpen(L.exports.isValidElement(e.children)&&e.children.props),()=>{const I=a.current;Se(I.onClose)&&I.onClose(L.exports.isValidElement(I.children)&&I.children.props)}),[]),L.exports.useEffect(()=>(e.pauseOnFocusLoss&&f(),()=>{e.pauseOnFocusLoss&&d()}),[e.pauseOnFocusLoss]);function v(I){if(e.draggable){c();const O=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=O.getBoundingClientRect(),O.style.transition="",s.x=ld(I.nativeEvent),s.y=ud(I.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=O.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=O.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent/100))}}function w(){if(s.boundingRect){const{top:I,bottom:O,left:R,right:j}=s.boundingRect;e.pauseOnHover&&s.x>=R&&s.x<=j&&s.y>=I&&s.y<=O?C():g()}}function g(){n(!0)}function C(){n(!1)}function f(){document.hasFocus()||C(),window.addEventListener("focus",g),window.addEventListener("blur",C)}function d(){window.removeEventListener("focus",g),window.removeEventListener("blur",C)}function c(){s.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",k),document.addEventListener("touchmove",E),document.addEventListener("touchend",k)}function y(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",k),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",k)}function E(I){const O=o.current;s.canDrag&&O&&(s.didMove=!0,t&&C(),s.x=ld(I),s.y=ud(I),e.draggableDirection==="x"?s.delta=s.x-s.start:s.delta=s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),O.style.transform="translate"+e.draggableDirection+"("+s.delta+"px)",O.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function k(){y();const I=o.current;if(s.canDrag&&s.didMove&&I){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){i(!0),e.closeToast();return}I.style.transition="transform 0.2s, opacity 0.2s",I.style.transform="translate"+e.draggableDirection+"(0)",I.style.opacity="1"}}const _={onMouseDown:v,onTouchStart:v,onMouseUp:w,onTouchEnd:w};return l&&u&&(_.onMouseEnter=C,_.onMouseLeave=g),m&&(_.onClick=I=>{p&&p(I),s.canCloseOnClick&&h()}),{playToast:g,pauseToast:C,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:_}}function Hp(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return x("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r,children:x("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:x("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}function Vp(e){let{delay:t,isRunning:n,closeToast:r,type:i,hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:h,isIn:p,theme:m}=e;const v={...a,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:o?0:1};l&&(v.transform="scaleX("+u+")");const w=Ut("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+m,"Toastify__progress-bar--"+i,{["Toastify__progress-bar--rtl"]:h}),g=Se(s)?s({rtl:h,type:i,defaultClassName:w}):Ut(w,s),C={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{p&&r()}};return x("div",{role:"progressbar","aria-hidden":o?"true":"false","aria-label":"notification timer",className:g,style:v,...C})}Vp.defaultProps={type:kt.DEFAULT,hide:!1};const sE=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=oE(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:h,closeToast:p,transition:m,position:v,className:w,style:g,bodyClassName:C,bodyStyle:f,progressClassName:d,progressStyle:c,updateId:y,role:E,progress:k,rtl:_,toastId:I,deleteToast:O,isIn:R,isLoading:j,iconOut:Oe,theme:Q}=e,He=Ut("Toastify__toast","Toastify__toast-theme--"+Q,"Toastify__toast--"+u,{["Toastify__toast--rtl"]:_}),Tt=Se(w)?w({rtl:_,position:v,type:u,defaultClassName:He}):Ut(He,w),Ae=!!k,at={closeToast:p,type:u,theme:Q};let T=null;return o===!1||(Se(o)?T=o(at):Vs.isValidElement(o)?T=Vs.cloneElement(o,at):T=Hp(at)),x(m,{isIn:R,done:O,position:v,preventExitTransition:n,nodeRef:r,children:De("div",{id:I,onClick:l,className:Tt,...i,style:g,ref:r,children:[De("div",{...R&&{role:E},className:Se(C)?C({type:u}):Ut("Toastify__toast-body",C),style:f,children:[Oe!=null&&x("div",{className:Ut("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!j}),children:Oe}),x("div",{children:s})]}),T,(a||Ae)&&x(Vp,{...y&&!Ae?{key:"pb-"+y}:{},rtl:_,theme:Q,delay:a,isRunning:t,isIn:R,closeToast:p,hide:h,type:u,style:c,className:d,controlledProgress:Ae,progress:k})]})})},aE=Y_({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),cu=L.exports.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=iE(e),{className:o,style:s,rtl:a,containerId:l}=e;function u(h){const p=Ut("Toastify__toast-container","Toastify__toast-container--"+h,{["Toastify__toast-container--rtl"]:a});return Se(o)?o({position:h,rtl:a,defaultClassName:p}):Ut(p,Gi(o))}return L.exports.useEffect(()=>{t&&(t.current=r.current)},[]),x("div",{ref:r,className:"Toastify",id:l,children:n((h,p)=>{const m=p.length?{...s}:{...s,pointerEvents:"none"};return x("div",{className:u(h),style:m,children:p.map((v,w)=>{let{content:g,props:C}=v;return L.exports.createElement(sE,{...C,isIn:i(C.toastId),style:{...C.style,"--nth":w+1,"--len":p.length},key:"toast-"+C.key},g)})},"container-"+h)})})});cu.displayName="ToastContainer";cu.defaultProps={position:jp.TOP_RIGHT,transition:aE,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:Hp,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let pn=new Map,Ga,Zr=[];function lE(e,t){let{containerId:n}=t;const r=pn.get(n||Ga);return r?r.getToast(e):null}function Wp(){return Math.random().toString(36).substring(2,9)}function uE(e){return e&&(Tn(e.toastId)||ui(e.toastId))?e.toastId:Wp()}function ci(e,t){return pn.size>0?be.emit(0,e,t):Zr.push({content:e,options:t}),t.toastId}function es(e,t){return{...t,type:t&&t.type||e,toastId:uE(t)}}function ts(e){return(t,n)=>ci(t,es(e,n))}function V(e,t){return ci(e,es(kt.DEFAULT,t))}V.loading=(e,t)=>ci(e,es(kt.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function cE(e,t,n){let{pending:r,error:i,success:o}=t,s;r&&(s=Tn(r)?V.loading(r,n):V.loading(r.render,{...n,...r}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(h,p,m)=>{if(p==null){V.dismiss(s);return}const v={type:h,...a,...n,data:m},w=Tn(p)?{render:p}:p;return s?V.update(s,{...v,...w}):V(w.render,{...v,...w}),m},u=Se(e)?e():e;return u.then(h=>l("success",o,h)).catch(h=>l("error",i,h)),u}V.promise=cE;V.success=ts(kt.SUCCESS);V.info=ts(kt.INFO);V.error=ts(kt.ERROR);V.warning=ts(kt.WARNING);V.warn=V.warning;V.dark=(e,t)=>ci(e,es(kt.DEFAULT,{theme:"dark",...t}));V.dismiss=e=>{pn.size>0?be.emit(1,e):Zr=Zr.filter(t=>qi(e)&&t.options.toastId!==e)};V.clearWaitingQueue=function(e){return e===void 0&&(e={}),be.emit(5,e)};V.isActive=e=>{let t=!1;return pn.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t};V.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=lE(e,t);if(n){const{props:r,content:i}=n,o={...r,...t,toastId:t.toastId||e,updateId:Wp()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,ci(s,o)}},0)};V.done=e=>{V.update(e,{progress:1})};V.onChange=e=>(be.on(4,e),()=>{be.off(4,e)});V.POSITION=jp;V.TYPE=kt;be.on(2,e=>{Ga=e.containerId||e,pn.set(Ga,e),Zr.forEach(t=>{be.emit(0,t.content,t.options)}),Zr=[]}).on(3,e=>{pn.delete(e.containerId||e),pn.size===0&&be.off(0).off(1).off(5)});function dE(){const e="AIzaSyDLP1QgCr3UV32iIt7C1Kto7bM6KmseXwk",[t,n]=L.exports.useState(),[r,i]=L.exports.useState(!1),[o,s]=L.exports.useState(),[a,l]=L.exports.useState(0),[u,h]=L.exports.useState(""),[p,m]=L.exports.useState({latitude:null,longitude:null,accuracy:null,altitude:null,heading:null,speed:0,reqCount:null,timestamp:null}),v=()=>{h0(Dw()).then(E=>console.log(E))},w=async()=>{const E=await U_(sd,{vapidKey:"BDcIaPcny0JGbEL0pq6OY4HIRMhiERhZ1NCT28qhntsyn9KdjU6yL3jVQsLdz9TM3xX6so_ET5KMj6z8QJ7UHhY"}).catch(k=>console.error(`Error al generar el token :( ${k}`));E&&console.log(`tu token es: ${E}`),n(E),E||console.error("no tienes token")},g=()=>{if(navigator.geolocation){const E=navigator.geolocation.watchPosition(d,C,f);s(E)}else alert("Geolocation is not supported by this browser")},C=E=>{const{code:k}=E;switch(k){case GeolocationPositionError.TIMEOUT:alert("Timeout");break;case GeolocationPositionError.PERMISSION_DENIED:alert("Permission denied");break;case GeolocationPositionError.POSITION_UNAVAILABLE:alert("Unavailable");break}},f={enableHighAccuracy:!0,timeout:5e3,maximunAge:0};L.exports.useEffect(()=>{l(a+1),z_(sd,E=>{console.log("tu mensaje:",E),V(E.notification.title)})},[p]);const d=E=>{const{latitude:k,longitude:_,altitude:I,accuracy:O,heading:R,speed:j}=E.coords,Oe=j*3.6,Q=new Date,He=Q.getFullYear(),Tt=Q.getMonth()+1,Ae=Q.getDate(),at=Q.getHours(),T=Q.getMinutes(),A=Q.getSeconds(),D=`${Ae}/${Tt}/${He} | ${at}:${T}:${A}`;console.log("recibiendo coordenadas..."),h("recibiendo coordenadas..."),m({latitude:k,longitude:_,altitude:I,accuracy:O,heading:R,speed:Oe,reqCount:a,timestamp:D}),h(j===0?"Detenido":"En movimiento")};return De("div",{className:"App",children:[x(cu,{}),x("div",{children:x("a",{href:"https://vitejs.dev",target:"_blank",children:x("img",{src:"vite.svg",className:"logo",alt:"Vite logo"})})}),x("h1",{children:"Geolocalizaci\xF3n API"}),r?x("button",{onClick:()=>{i(!1),navigator.geolocation.clearWatch(o)},children:"Detener"}):x("button",{onClick:()=>{i(!0),g()},children:"Iniciar"}),x("br",{}),x("button",{onClick:v,children:"Loguearse"}),x("br",{}),x("button",{onClick:w,children:"Obtener token"}),x("h2",{children:"Primer Registro"}),De("p",{children:["Hora: ",p.timestamp," "]}),De("p",{children:["Latitud: ",p.latitude," "]}),De("p",{children:["Longitud: ",p.longitude," "]}),De("p",{children:["Altura: ",p.altitude," "]}),De("p",{children:["Precisi\xF3n: ",p.accuracy," "]}),De("p",{children:["Grado: ",p.heading," "]}),De("p",{children:["Velocidad: ",p.speed," km/h"]}),x("iframe",{width:"600",height:"450",allow:"geolocation",frameBorder:"0",style:{border:0},loading:"lazy",allowFullScreen:"",referrerPolicy:"no-referrer-when-downgrade",src:`https://www.google.com/maps/embed/v1/place?key=${e}
          &q=${p.latitude},${p.longitude}`}),x("h3",{children:x("b",{children:u.toUpperCase()})}),De("h3",{children:["Request Count: ",a]}),De("h3",{children:["Tu token es: ",t," "]})]})}Ws.createRoot(document.getElementById("root")).render(x(Vs.StrictMode,{children:x(dE,{})}));
