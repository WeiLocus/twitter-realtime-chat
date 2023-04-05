function Ap(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var no={},Ip={get exports(){return no},set exports(e){no=e}},nl={},C={},Dp={get exports(){return C},set exports(e){C=e}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=Symbol.for("react.element"),jp=Symbol.for("react.portal"),zp=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),Fp=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Qp=Symbol.for("react.memo"),Zp=Symbol.for("react.lazy"),fc=Symbol.iterator;function Kp(e){return e===null||typeof e!="object"?null:(e=fc&&e[fc]||e["@@iterator"],typeof e=="function"?e:null)}var df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ff=Object.assign,pf={};function Er(e,t,n){this.props=e,this.context=t,this.refs=pf,this.updater=n||df}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hf(){}hf.prototype=Er.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=pf,this.updater=n||df}var Ua=za.prototype=new hf;Ua.constructor=za;ff(Ua,Er.prototype);Ua.isPureReactComponent=!0;var pc=Array.isArray,mf=Object.prototype.hasOwnProperty,Fa={current:null},gf={key:!0,ref:!0,__self:!0,__source:!0};function vf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)mf.call(t,r)&&!gf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:_o,type:e,key:i,ref:l,props:o,_owner:Fa.current}}function Yp(e,t){return{$$typeof:_o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===_o}function Gp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hc=/\/+/g;function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gp(""+e.key):t.toString(36)}function oi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case _o:case jp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Yl(l,0):r,pc(o)?(n="",e!=null&&(n=e.replace(hc,"$&/")+"/"),oi(o,t,n,"",function(u){return u})):o!=null&&(Ba(o)&&(o=Yp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(hc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",pc(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Yl(i,s);l+=oi(i,t,n,a,o)}else if(a=Kp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Yl(i,s++),l+=oi(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jo(e,t,n){if(e==null)return e;var r=[],o=0;return oi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Xp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},ii={transition:null},Jp={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ii,ReactCurrentOwner:Fa};le.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!Ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Er;le.Fragment=zp;le.Profiler=Fp;le.PureComponent=za;le.StrictMode=Up;le.Suspense=Wp;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ff({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Fa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)mf.call(t,a)&&!gf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:_o,type:e.type,key:o,ref:i,props:r,_owner:l}};le.createContext=function(e){return e={$$typeof:Hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bp,_context:e},e.Consumer=e};le.createElement=vf;le.createFactory=function(e){var t=vf.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Vp,render:e}};le.isValidElement=Ba;le.lazy=function(e){return{$$typeof:Zp,_payload:{_status:-1,_result:e},_init:Xp}};le.memo=function(e,t){return{$$typeof:Qp,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=ii.transition;ii.transition={};try{e()}finally{ii.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return Je.current.useCallback(e,t)};le.useContext=function(e){return Je.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};le.useEffect=function(e,t){return Je.current.useEffect(e,t)};le.useId=function(){return Je.current.useId()};le.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return Je.current.useMemo(e,t)};le.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};le.useRef=function(e){return Je.current.useRef(e)};le.useState=function(e){return Je.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return Je.current.useTransition()};le.version="18.2.0";(function(e){e.exports=le})(Dp);const Vn=Mp(C),bs=Ap({__proto__:null,default:Vn},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=C,eh=Symbol.for("react.element"),th=Symbol.for("react.fragment"),nh=Object.prototype.hasOwnProperty,rh=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oh={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)nh.call(t,r)&&!oh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:eh,type:e,key:i,ref:l,props:o,_owner:rh.current}}nl.Fragment=th;nl.jsx=yf;nl.jsxs=yf;(function(e){e.exports=nl})(Ip);const Ne=no.Fragment,c=no.jsx,k=no.jsxs;var Os={},Ns={},ih={get exports(){return Ns},set exports(e){Ns=e}},ut={},$s={},lh={get exports(){return $s},set exports(e){$s=e}},wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,J){var te=M.length;M.push(J);e:for(;0<te;){var fe=te-1>>>1,j=M[fe];if(0<o(j,J))M[fe]=J,M[te]=j,te=fe;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var J=M[0],te=M.pop();if(te!==J){M[0]=te;e:for(var fe=0,j=M.length,B=j>>>1;fe<B;){var F=2*(fe+1)-1,ne=M[F],T=F+1,oe=M[T];if(0>o(ne,te))T<j&&0>o(oe,ne)?(M[fe]=oe,M[T]=te,fe=T):(M[fe]=ne,M[F]=te,fe=F);else if(T<j&&0>o(oe,te))M[fe]=oe,M[T]=te,fe=T;else break e}}return J}function o(M,J){var te=M.sortIndex-J.sortIndex;return te!==0?te:M.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,f=null,m=3,v=!1,g=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(M){for(var J=n(u);J!==null;){if(J.callback===null)r(u);else if(J.startTime<=M)r(u),J.sortIndex=J.expirationTime,t(a,J);else break;J=n(u)}}function S(M){if(y=!1,w(M),!g)if(n(a)!==null)g=!0,Le(E);else{var J=n(u);J!==null&&Ae(S,J.startTime-M)}}function E(M,J){g=!1,y&&(y=!1,h(b),b=-1),v=!0;var te=m;try{for(w(J),f=n(a);f!==null&&(!(f.expirationTime>J)||M&&!K());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,m=f.priorityLevel;var j=fe(f.expirationTime<=J);J=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(a)&&r(a),w(J)}else r(a);f=n(a)}if(f!==null)var B=!0;else{var F=n(u);F!==null&&Ae(S,F.startTime-J),B=!1}return B}finally{f=null,m=te,v=!1}}var _=!1,P=null,b=-1,O=5,N=-1;function K(){return!(e.unstable_now()-N<O)}function Z(){if(P!==null){var M=e.unstable_now();N=M;var J=!0;try{J=P(!0,M)}finally{J?U():(_=!1,P=null)}}else _=!1}var U;if(typeof p=="function")U=function(){p(Z)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,se=ie.port2;ie.port1.onmessage=Z,U=function(){se.postMessage(null)}}else U=function(){x(Z,0)};function Le(M){P=M,_||(_=!0,U())}function Ae(M,J){b=x(function(){M(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Le(E))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var te=m;m=J;try{return M()}finally{m=te}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,J){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var te=m;m=M;try{return J()}finally{m=te}},e.unstable_scheduleCallback=function(M,J,te){var fe=e.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?fe+te:fe):te=fe,M){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=te+j,M={id:d++,callback:J,priorityLevel:M,startTime:te,expirationTime:j,sortIndex:-1},te>fe?(M.sortIndex=te,t(u,M),n(a)===null&&M===n(u)&&(y?(h(b),b=-1):y=!0,Ae(S,te-fe))):(M.sortIndex=j,t(a,M),g||v||(g=!0,Le(E))),M},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(M){var J=m;return function(){var te=m;m=J;try{return M.apply(this,arguments)}finally{m=te}}}})(wf);(function(e){e.exports=wf})(lh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=C,at=$s;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sf=new Set,ro={};function Wn(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(ro[e]=t,e=0;e<t.length;e++)Sf.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=Object.prototype.hasOwnProperty,sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mc={},gc={};function ah(e){return As.call(gc,e)?!0:As.call(mc,e)?!1:sh.test(e)?gc[e]=!0:(mc[e]=!0,!1)}function uh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ch(e,t,n,r){if(t===null||typeof t>"u"||uh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ha=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ha,Va);Ve[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ha,Va);Ve[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ha,Va);Ve[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,t,n,r){var o=Ve.hasOwnProperty(t)?Ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ch(t,n,o,r)&&(n=null),r||o===null?ah(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Qa=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),kf=Symbol.for("react.context"),Za=Symbol.for("react.forward_ref"),Is=Symbol.for("react.suspense"),Ds=Symbol.for("react.suspense_list"),Ka=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Ef=Symbol.for("react.offscreen"),vc=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=vc&&e[vc]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,Gl;function Br(e){if(Gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var Xl=!1;function Jl(e,t){if(!e||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function dh(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Kn:return"Portal";case Ms:return"Profiler";case Qa:return"StrictMode";case Is:return"Suspense";case Ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kf:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case Za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ka:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===Qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ph(e){var t=Tf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){e._valueTracker||(e._valueTracker=ph(e))}function _f(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zs(e,t){var n=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pf(e,t){t=t.checked,t!=null&&Wa(e,"checked",t,!1)}function Us(e,t){Pf(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fs(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fs(e,t,n){(t!=="number"||Si(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Hr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function Lf(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fo,bf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hh=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){hh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qr[t]=Qr[e]})});function Of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}function Nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var mh=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(mh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,ur=null,cr=null;function xc(e){if(e=Ro(e)){if(typeof Zs!="function")throw Error($(280));var t=e.stateNode;t&&(t=sl(t),Zs(e.stateNode,e.type,t))}}function $f(e){ur?cr?cr.push(e):cr=[e]:ur=e}function Af(){if(ur){var e=ur,t=cr;if(cr=ur=null,xc(e),t)for(e=0;e<t.length;e++)xc(t[e])}}function Mf(e,t){return e(t)}function If(){}var ql=!1;function Df(e,t,n){if(ql)return e(t,n);ql=!0;try{return Mf(e,t,n)}finally{ql=!1,(ur!==null||cr!==null)&&(If(),Af())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Ks=!1;if(Kt)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Ks=!1}function gh(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Zr=!1,xi=null,ki=!1,Ys=null,vh={onError:function(e){Zr=!0,xi=e}};function yh(e,t,n,r,o,i,l,s,a){Zr=!1,xi=null,gh.apply(vh,arguments)}function wh(e,t,n,r,o,i,l,s,a){if(yh.apply(this,arguments),Zr){if(Zr){var u=xi;Zr=!1,xi=null}else throw Error($(198));ki||(ki=!0,Ys=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kc(e){if(Qn(e)!==e)throw Error($(188))}function Ch(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return kc(o),e;if(i===r)return kc(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function zf(e){return e=Ch(e),e!==null?Uf(e):null}function Uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uf(e);if(t!==null)return t;e=e.sibling}return null}var Ff=at.unstable_scheduleCallback,Ec=at.unstable_cancelCallback,Sh=at.unstable_shouldYield,xh=at.unstable_requestPaint,be=at.unstable_now,kh=at.unstable_getCurrentPriorityLevel,Ga=at.unstable_ImmediatePriority,Bf=at.unstable_UserBlockingPriority,Ei=at.unstable_NormalPriority,Eh=at.unstable_LowPriority,Hf=at.unstable_IdlePriority,rl=null,zt=null;function Th(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Lh,_h=Math.log,Ph=Math.LN2;function Lh(e){return e>>>=0,e===0?32:31-(_h(e)/Ph|0)|0}var Bo=64,Ho=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Vr(s):(i&=l,i!==0&&(r=Vr(i)))}else l=n&~o,l!==0?r=Vr(l):i!==0&&(r=Vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),o=1<<n,r|=e[n],t&=~o;return r}function Rh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Tt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Rh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vf(){var e=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),e}function es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Oh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var pe=0;function Wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qf,Ja,Zf,Kf,Yf,Xs=!1,Vo=[],fn=null,pn=null,hn=null,lo=new Map,so=new Map,sn=[],Nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tc(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function Ar(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ro(t),t!==null&&Ja(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $h(e,t,n,r,o){switch(t){case"focusin":return fn=Ar(fn,e,t,n,r,o),!0;case"dragenter":return pn=Ar(pn,e,t,n,r,o),!0;case"mouseover":return hn=Ar(hn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return lo.set(i,Ar(lo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,so.set(i,Ar(so.get(i)||null,e,t,n,r,o)),!0}return!1}function Gf(e){var t=$n(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,Yf(e.priority,function(){Zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Js(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qs=r,n.target.dispatchEvent(r),Qs=null}else return t=Ro(n),t!==null&&Ja(t),e.blockedOn=n,!1;t.shift()}return!0}function _c(e,t,n){li(e)&&n.delete(t)}function Ah(){Xs=!1,fn!==null&&li(fn)&&(fn=null),pn!==null&&li(pn)&&(pn=null),hn!==null&&li(hn)&&(hn=null),lo.forEach(_c),so.forEach(_c)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,Ah)))}function ao(e){function t(o){return Mr(o,e)}if(0<Vo.length){Mr(Vo[0],e);for(var n=1;n<Vo.length;n++){var r=Vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Mr(fn,e),pn!==null&&Mr(pn,e),hn!==null&&Mr(hn,e),lo.forEach(t),so.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)Gf(n),n.blockedOn===null&&sn.shift()}var dr=Jt.ReactCurrentBatchConfig,_i=!0;function Mh(e,t,n,r){var o=pe,i=dr.transition;dr.transition=null;try{pe=1,qa(e,t,n,r)}finally{pe=o,dr.transition=i}}function Ih(e,t,n,r){var o=pe,i=dr.transition;dr.transition=null;try{pe=4,qa(e,t,n,r)}finally{pe=o,dr.transition=i}}function qa(e,t,n,r){if(_i){var o=Js(e,t,n,r);if(o===null)cs(e,t,r,Pi,n),Tc(e,r);else if($h(o,e,t,n,r))r.stopPropagation();else if(Tc(e,r),t&4&&-1<Nh.indexOf(e)){for(;o!==null;){var i=Ro(o);if(i!==null&&Qf(i),i=Js(e,t,n,r),i===null&&cs(e,t,r,Pi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else cs(e,t,r,null,n)}}var Pi=null;function Js(e,t,n,r){if(Pi=null,e=Ya(r),e=$n(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function Xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kh()){case Ga:return 1;case Bf:return 4;case Ei:case Eh:return 16;case Hf:return 536870912;default:return 16}default:return 16}}var un=null,eu=null,si=null;function Jf(){if(si)return si;var e,t=eu,n=t.length,r,o="value"in un?un.value:un.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return si=o.slice(e,1<r?1-r:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function Pc(){return!1}function ct(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wo:Pc,this.isPropagationStopped=Pc,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=ct(Tr),Lo=_e({},Tr,{view:0,detail:0}),Dh=ct(Lo),ts,ns,Ir,ol=_e({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(ts=e.screenX-Ir.screenX,ns=e.screenY-Ir.screenY):ns=ts=0,Ir=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),Lc=ct(ol),jh=_e({},ol,{dataTransfer:0}),zh=ct(jh),Uh=_e({},Lo,{relatedTarget:0}),rs=ct(Uh),Fh=_e({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bh=ct(Fh),Hh=_e({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vh=ct(Hh),Wh=_e({},Tr,{data:0}),Rc=ct(Wh),Qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kh[e])?!!t[e]:!1}function nu(){return Yh}var Gh=_e({},Lo,{key:function(e){if(e.key){var t=Qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=ct(Gh),Jh=_e({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=ct(Jh),qh=_e({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),em=ct(qh),tm=_e({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nm=ct(tm),rm=_e({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=ct(rm),im=[9,13,27,32],ru=Kt&&"CompositionEvent"in window,Kr=null;Kt&&"documentMode"in document&&(Kr=document.documentMode);var lm=Kt&&"TextEvent"in window&&!Kr,qf=Kt&&(!ru||Kr&&8<Kr&&11>=Kr),Oc=String.fromCharCode(32),Nc=!1;function e1(e,t){switch(e){case"keyup":return im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function sm(e,t){switch(e){case"compositionend":return t1(t);case"keypress":return t.which!==32?null:(Nc=!0,Oc);case"textInput":return e=t.data,e===Oc&&Nc?null:e;default:return null}}function am(e,t){if(Gn)return e==="compositionend"||!ru&&e1(e,t)?(e=Jf(),si=eu=un=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qf&&t.locale!=="ko"?null:t.data;default:return null}}var um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!um[e.type]:t==="textarea"}function n1(e,t,n,r){$f(r),t=Li(t,"onChange"),0<t.length&&(n=new tu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,uo=null;function cm(e){p1(e,0)}function il(e){var t=qn(e);if(_f(t))return e}function dm(e,t){if(e==="change")return t}var r1=!1;if(Kt){var os;if(Kt){var is="oninput"in document;if(!is){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),is=typeof Ac.oninput=="function"}os=is}else os=!1;r1=os&&(!document.documentMode||9<document.documentMode)}function Mc(){Yr&&(Yr.detachEvent("onpropertychange",o1),uo=Yr=null)}function o1(e){if(e.propertyName==="value"&&il(uo)){var t=[];n1(t,uo,e,Ya(e)),Df(cm,t)}}function fm(e,t,n){e==="focusin"?(Mc(),Yr=t,uo=n,Yr.attachEvent("onpropertychange",o1)):e==="focusout"&&Mc()}function pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(uo)}function hm(e,t){if(e==="click")return il(t)}function mm(e,t){if(e==="input"||e==="change")return il(t)}function gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:gm;function co(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!As.call(t,o)||!Lt(e[o],t[o]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dc(e,t){var n=Ic(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ic(n)}}function i1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?i1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function l1(){for(var e=window,t=Si();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Si(e.document)}return t}function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vm(e){var t=l1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&i1(n.ownerDocument.documentElement,n)){if(r!==null&&ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Dc(n,i);var l=Dc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ym=Kt&&"documentMode"in document&&11>=document.documentMode,Xn=null,qs=null,Gr=null,ea=!1;function jc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ea||Xn==null||Xn!==Si(r)||(r=Xn,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&co(Gr,r)||(Gr=r,r=Li(qs,"onSelect"),0<r.length&&(t=new tu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function Qo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},ls={},s1={};Kt&&(s1=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function ll(e){if(ls[e])return ls[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in s1)return ls[e]=t[n];return e}var a1=ll("animationend"),u1=ll("animationiteration"),c1=ll("animationstart"),d1=ll("transitionend"),f1=new Map,zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){f1.set(e,t),Wn(t,[e])}for(var ss=0;ss<zc.length;ss++){var as=zc[ss],wm=as.toLowerCase(),Cm=as[0].toUpperCase()+as.slice(1);Tn(wm,"on"+Cm)}Tn(a1,"onAnimationEnd");Tn(u1,"onAnimationIteration");Tn(c1,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(d1,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Uc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wh(r,t,void 0,e),e.currentTarget=null}function p1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Uc(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Uc(o,s,u),i=a}}}if(ki)throw e=Ys,ki=!1,Ys=null,e}function ye(e,t){var n=t[ia];n===void 0&&(n=t[ia]=new Set);var r=e+"__bubble";n.has(r)||(h1(t,e,2,!1),n.add(r))}function us(e,t,n){var r=0;t&&(r|=4),h1(n,e,r,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function fo(e){if(!e[Zo]){e[Zo]=!0,Sf.forEach(function(n){n!=="selectionchange"&&(Sm.has(n)||us(n,!1,e),us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,us("selectionchange",!1,t))}}function h1(e,t,n,r){switch(Xf(t)){case 1:var o=Mh;break;case 4:o=Ih;break;default:o=qa}n=o.bind(null,t,n,e),o=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function cs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=$n(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Df(function(){var u=i,d=Ya(n),f=[];e:{var m=f1.get(e);if(m!==void 0){var v=tu,g=e;switch(e){case"keypress":if(ai(n)===0)break e;case"keydown":case"keyup":v=Xh;break;case"focusin":g="focus",v=rs;break;case"focusout":g="blur",v=rs;break;case"beforeblur":case"afterblur":v=rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=em;break;case a1:case u1:case c1:v=Bh;break;case d1:v=nm;break;case"scroll":v=Dh;break;case"wheel":v=om;break;case"copy":case"cut":case"paste":v=Vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bc}var y=(t&4)!==0,x=!y&&e==="scroll",h=y?m!==null?m+"Capture":null:m;y=[];for(var p=u,w;p!==null;){w=p;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,h!==null&&(S=io(p,h),S!=null&&y.push(po(p,S,w)))),x)break;p=p.return}0<y.length&&(m=new v(m,g,null,n,d),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Qs&&(g=n.relatedTarget||n.fromElement)&&($n(g)||g[Yt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?$n(g):null,g!==null&&(x=Qn(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=Lc,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=bc,S="onPointerLeave",h="onPointerEnter",p="pointer"),x=v==null?m:qn(v),w=g==null?m:qn(g),m=new y(S,p+"leave",v,n,d),m.target=x,m.relatedTarget=w,S=null,$n(d)===u&&(y=new y(h,p+"enter",g,n,d),y.target=w,y.relatedTarget=x,S=y),x=S,v&&g)t:{for(y=v,h=g,p=0,w=y;w;w=Zn(w))p++;for(w=0,S=h;S;S=Zn(S))w++;for(;0<p-w;)y=Zn(y),p--;for(;0<w-p;)h=Zn(h),w--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=Zn(y),h=Zn(h)}y=null}else y=null;v!==null&&Fc(f,m,v,y,!1),g!==null&&x!==null&&Fc(f,x,g,y,!0)}}e:{if(m=u?qn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=dm;else if($c(m))if(r1)E=mm;else{E=pm;var _=fm}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=hm);if(E&&(E=E(e,u))){n1(f,E,n,d);break e}_&&_(e,m,u),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Fs(m,"number",m.value)}switch(_=u?qn(u):window,e){case"focusin":($c(_)||_.contentEditable==="true")&&(Xn=_,qs=u,Gr=null);break;case"focusout":Gr=qs=Xn=null;break;case"mousedown":ea=!0;break;case"contextmenu":case"mouseup":case"dragend":ea=!1,jc(f,n,d);break;case"selectionchange":if(ym)break;case"keydown":case"keyup":jc(f,n,d)}var P;if(ru)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Gn?e1(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(qf&&n.locale!=="ko"&&(Gn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Gn&&(P=Jf()):(un=d,eu="value"in un?un.value:un.textContent,Gn=!0)),_=Li(u,b),0<_.length&&(b=new Rc(b,e,null,n,d),f.push({event:b,listeners:_}),P?b.data=P:(P=t1(n),P!==null&&(b.data=P)))),(P=lm?sm(e,n):am(e,n))&&(u=Li(u,"onBeforeInput"),0<u.length&&(d=new Rc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}p1(f,t)})}function po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Li(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=io(e,n),i!=null&&r.unshift(po(e,i,o)),i=io(e,t),i!=null&&r.push(po(e,i,o))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=io(n,i),a!=null&&l.unshift(po(n,a,s))):o||(a=io(n,i),a!=null&&l.push(po(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var xm=/\r\n?/g,km=/\u0000|\uFFFD/g;function Bc(e){return(typeof e=="string"?e:""+e).replace(xm,`
`).replace(km,"")}function Ko(e,t,n){if(t=Bc(t),Bc(e)!==t&&n)throw Error($(425))}function Ri(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,Em=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,Tm=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(e){return Hc.resolve(null).then(e).catch(_m)}:oa;function _m(e){setTimeout(function(){throw e})}function ds(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ao(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),It="__reactFiber$"+_r,ho="__reactProps$"+_r,Yt="__reactContainer$"+_r,ia="__reactEvents$"+_r,Pm="__reactListeners$"+_r,Lm="__reactHandles$"+_r;function $n(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vc(e);e!==null;){if(n=e[It])return n;e=Vc(e)}return t}e=n,n=e.parentNode}return null}function Ro(e){return e=e[It]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function sl(e){return e[ho]||null}var la=[],er=-1;function _n(e){return{current:e}}function we(e){0>er||(e.current=la[er],la[er]=null,er--)}function ve(e,t){er++,la[er]=e.current,e.current=t}var kn={},Ke=_n(kn),nt=_n(!1),jn=kn;function mr(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function bi(){we(nt),we(Ke)}function Wc(e,t,n){if(Ke.current!==kn)throw Error($(168));ve(Ke,t),ve(nt,n)}function m1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,fh(e)||"Unknown",o));return _e({},n,r)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,jn=Ke.current,ve(Ke,e),ve(nt,nt.current),!0}function Qc(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=m1(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,we(nt),we(Ke),ve(Ke,e)):we(nt),ve(nt,n)}var Bt=null,al=!1,fs=!1;function g1(e){Bt===null?Bt=[e]:Bt.push(e)}function Rm(e){al=!0,g1(e)}function Pn(){if(!fs&&Bt!==null){fs=!0;var e=0,t=pe;try{var n=Bt;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,al=!1}catch(o){throw Bt!==null&&(Bt=Bt.slice(e+1)),Ff(Ga,Pn),o}finally{pe=t,fs=!1}}return null}var tr=[],nr=0,Ni=null,$i=0,ft=[],pt=0,zn=null,Vt=1,Wt="";function On(e,t){tr[nr++]=$i,tr[nr++]=Ni,Ni=e,$i=t}function v1(e,t,n){ft[pt++]=Vt,ft[pt++]=Wt,ft[pt++]=zn,zn=e;var r=Vt;e=Wt;var o=32-Tt(r)-1;r&=~(1<<o),n+=1;var i=32-Tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Vt=1<<32-Tt(t)+o|n<<o|r,Wt=i+e}else Vt=1<<i|n<<o|r,Wt=e}function iu(e){e.return!==null&&(On(e,1),v1(e,1,0))}function lu(e){for(;e===Ni;)Ni=tr[--nr],tr[nr]=null,$i=tr[--nr],tr[nr]=null;for(;e===zn;)zn=ft[--pt],ft[pt]=null,Wt=ft[--pt],ft[pt]=null,Vt=ft[--pt],ft[pt]=null}var st=null,lt=null,Se=!1,Et=null;function y1(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:Vt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(Se){var t=lt;if(t){var n=t;if(!Zc(e,t)){if(sa(e))throw Error($(418));t=mn(n.nextSibling);var r=st;t&&Zc(e,t)?y1(r,n):(e.flags=e.flags&-4097|2,Se=!1,st=e)}}else{if(sa(e))throw Error($(418));e.flags=e.flags&-4097|2,Se=!1,st=e}}}function Kc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Yo(e){if(e!==st)return!1;if(!Se)return Kc(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=lt)){if(sa(e))throw w1(),Error($(418));for(;t;)y1(e,t),t=mn(t.nextSibling)}if(Kc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?mn(e.stateNode.nextSibling):null;return!0}function w1(){for(var e=lt;e;)e=mn(e.nextSibling)}function gr(){lt=st=null,Se=!1}function su(e){Et===null?Et=[e]:Et.push(e)}var bm=Jt.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ai=_n(null),Mi=null,rr=null,au=null;function uu(){au=rr=Mi=null}function cu(e){var t=Ai.current;we(Ai),e._currentValue=t}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){Mi=e,au=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(au!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(Mi===null)throw Error($(308));rr=e,Mi.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var An=null;function du(e){An===null?An=[e]:An.push(e)}function C1(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,du(t)):(n.next=o.next,o.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Gt(e,n)}return o=r.interleaved,o===null?(t.next=t,du(r)):(t.next=o.next,o.next=t),r.interleaved=t,Gt(e,n)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}function Yc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ii(e,t,n,r){var o=e.updateQueue;ln=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var f=o.baseState;l=0,d=u=a=null,s=i;do{var m=s.lane,v=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(m=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(v,f,m);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,m=typeof g=="function"?g.call(v,f,m):g,m==null)break e;f=_e({},f,m);break e;case 2:ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,a=f):d=d.next=v,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(d===null&&(a=f),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=f}}function Gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var x1=new Cf.Component().refs;function ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),o=yn(e),i=Qt(r,o);i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,o),t!==null&&(_t(t,e,o,r),ui(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),o=yn(e),i=Qt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,o),t!==null&&(_t(t,e,o,r),ui(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=yn(e),o=Qt(n,r);o.tag=2,t!=null&&(o.callback=t),t=gn(e,o,r),t!==null&&(_t(t,e,r,n),ui(t,e,r))}};function Xc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!co(n,r)||!co(o,i):!0}function k1(e,t,n){var r=!1,o=kn,i=t.contextType;return typeof i=="object"&&i!==null?i=gt(i):(o=rt(t)?jn:Ke.current,r=t.contextTypes,i=(r=r!=null)?mr(e,o):kn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=x1,fu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=gt(i):(i=rt(t)?jn:Ke.current,o.context=mr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ca(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ul.enqueueReplaceState(o,o.state,null),Ii(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===x1&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Go(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qc(e){var t=e._init;return t(e._payload)}function E1(e){function t(h,p){if(e){var w=h.deletions;w===null?(h.deletions=[p],h.flags|=16):w.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=wn(h,p),h.index=0,h.sibling=null,h}function i(h,p,w){return h.index=w,e?(w=h.alternate,w!==null?(w=w.index,w<p?(h.flags|=2,p):w):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,w,S){return p===null||p.tag!==6?(p=ws(w,h.mode,S),p.return=h,p):(p=o(p,w),p.return=h,p)}function a(h,p,w,S){var E=w.type;return E===Yn?d(h,p,w.props.children,S,w.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===on&&qc(E)===p.type)?(S=o(p,w.props),S.ref=Dr(h,p,w),S.return=h,S):(S=mi(w.type,w.key,w.props,null,h.mode,S),S.ref=Dr(h,p,w),S.return=h,S)}function u(h,p,w,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=Cs(w,h.mode,S),p.return=h,p):(p=o(p,w.children||[]),p.return=h,p)}function d(h,p,w,S,E){return p===null||p.tag!==7?(p=Dn(w,h.mode,S,E),p.return=h,p):(p=o(p,w),p.return=h,p)}function f(h,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ws(""+p,h.mode,w),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zo:return w=mi(p.type,p.key,p.props,null,h.mode,w),w.ref=Dr(h,null,p),w.return=h,w;case Kn:return p=Cs(p,h.mode,w),p.return=h,p;case on:var S=p._init;return f(h,S(p._payload),w)}if(Hr(p)||Nr(p))return p=Dn(p,h.mode,w,null),p.return=h,p;Go(h,p)}return null}function m(h,p,w,S){var E=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return E!==null?null:s(h,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zo:return w.key===E?a(h,p,w,S):null;case Kn:return w.key===E?u(h,p,w,S):null;case on:return E=w._init,m(h,p,E(w._payload),S)}if(Hr(w)||Nr(w))return E!==null?null:d(h,p,w,S,null);Go(h,w)}return null}function v(h,p,w,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(w)||null,s(p,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zo:return h=h.get(S.key===null?w:S.key)||null,a(p,h,S,E);case Kn:return h=h.get(S.key===null?w:S.key)||null,u(p,h,S,E);case on:var _=S._init;return v(h,p,w,_(S._payload),E)}if(Hr(S)||Nr(S))return h=h.get(w)||null,d(p,h,S,E,null);Go(p,S)}return null}function g(h,p,w,S){for(var E=null,_=null,P=p,b=p=0,O=null;P!==null&&b<w.length;b++){P.index>b?(O=P,P=null):O=P.sibling;var N=m(h,P,w[b],S);if(N===null){P===null&&(P=O);break}e&&P&&N.alternate===null&&t(h,P),p=i(N,p,b),_===null?E=N:_.sibling=N,_=N,P=O}if(b===w.length)return n(h,P),Se&&On(h,b),E;if(P===null){for(;b<w.length;b++)P=f(h,w[b],S),P!==null&&(p=i(P,p,b),_===null?E=P:_.sibling=P,_=P);return Se&&On(h,b),E}for(P=r(h,P);b<w.length;b++)O=v(P,h,b,w[b],S),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?b:O.key),p=i(O,p,b),_===null?E=O:_.sibling=O,_=O);return e&&P.forEach(function(K){return t(h,K)}),Se&&On(h,b),E}function y(h,p,w,S){var E=Nr(w);if(typeof E!="function")throw Error($(150));if(w=E.call(w),w==null)throw Error($(151));for(var _=E=null,P=p,b=p=0,O=null,N=w.next();P!==null&&!N.done;b++,N=w.next()){P.index>b?(O=P,P=null):O=P.sibling;var K=m(h,P,N.value,S);if(K===null){P===null&&(P=O);break}e&&P&&K.alternate===null&&t(h,P),p=i(K,p,b),_===null?E=K:_.sibling=K,_=K,P=O}if(N.done)return n(h,P),Se&&On(h,b),E;if(P===null){for(;!N.done;b++,N=w.next())N=f(h,N.value,S),N!==null&&(p=i(N,p,b),_===null?E=N:_.sibling=N,_=N);return Se&&On(h,b),E}for(P=r(h,P);!N.done;b++,N=w.next())N=v(P,h,b,N.value,S),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?b:N.key),p=i(N,p,b),_===null?E=N:_.sibling=N,_=N);return e&&P.forEach(function(Z){return t(h,Z)}),Se&&On(h,b),E}function x(h,p,w,S){if(typeof w=="object"&&w!==null&&w.type===Yn&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case zo:e:{for(var E=w.key,_=p;_!==null;){if(_.key===E){if(E=w.type,E===Yn){if(_.tag===7){n(h,_.sibling),p=o(_,w.props.children),p.return=h,h=p;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===on&&qc(E)===_.type){n(h,_.sibling),p=o(_,w.props),p.ref=Dr(h,_,w),p.return=h,h=p;break e}n(h,_);break}else t(h,_);_=_.sibling}w.type===Yn?(p=Dn(w.props.children,h.mode,S,w.key),p.return=h,h=p):(S=mi(w.type,w.key,w.props,null,h.mode,S),S.ref=Dr(h,p,w),S.return=h,h=S)}return l(h);case Kn:e:{for(_=w.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(h,p.sibling),p=o(p,w.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Cs(w,h.mode,S),p.return=h,h=p}return l(h);case on:return _=w._init,x(h,p,_(w._payload),S)}if(Hr(w))return g(h,p,w,S);if(Nr(w))return y(h,p,w,S);Go(h,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,w),p.return=h,h=p):(n(h,p),p=ws(w,h.mode,S),p.return=h,h=p),l(h)):n(h,p)}return x}var vr=E1(!0),T1=E1(!1),bo={},Ut=_n(bo),mo=_n(bo),go=_n(bo);function Mn(e){if(e===bo)throw Error($(174));return e}function pu(e,t){switch(ve(go,t),ve(mo,e),ve(Ut,bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hs(t,e)}we(Ut),ve(Ut,t)}function yr(){we(Ut),we(mo),we(go)}function _1(e){Mn(go.current);var t=Mn(Ut.current),n=Hs(t,e.type);t!==n&&(ve(mo,e),ve(Ut,n))}function hu(e){mo.current===e&&(we(Ut),we(mo))}var Ee=_n(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function mu(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var ci=Jt.ReactCurrentDispatcher,hs=Jt.ReactCurrentBatchConfig,Un=0,Te=null,Me=null,ze=null,ji=!1,Xr=!1,vo=0,Om=0;function We(){throw Error($(321))}function gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function vu(e,t,n,r,o,i){if(Un=i,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ci.current=e===null||e.memoizedState===null?Mm:Im,e=n(r,o),Xr){i=0;do{if(Xr=!1,vo=0,25<=i)throw Error($(301));i+=1,ze=Me=null,t.updateQueue=null,ci.current=Dm,e=n(r,o)}while(Xr)}if(ci.current=zi,t=Me!==null&&Me.next!==null,Un=0,ze=Me=Te=null,ji=!1,t)throw Error($(300));return e}function yu(){var e=vo!==0;return vo=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Te.memoizedState=ze=e:ze=ze.next=e,ze}function vt(){if(Me===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=ze===null?Te.memoizedState:ze.next;if(t!==null)ze=t,Me=e;else{if(e===null)throw Error($(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},ze===null?Te.memoizedState=ze=e:ze=ze.next=e}return ze}function yo(e,t){return typeof t=="function"?t(e):t}function ms(e){var t=vt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((Un&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,l=r):a=a.next=f,Te.lanes|=d,Fn|=d}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Lt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Te.lanes|=i,Fn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gs(e){var t=vt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Lt(i,t.memoizedState)||(tt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function P1(){}function L1(e,t){var n=Te,r=vt(),o=t(),i=!Lt(r.memoizedState,o);if(i&&(r.memoizedState=o,tt=!0),r=r.queue,wu(O1.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,wo(9,b1.bind(null,n,r,o,t),void 0,null),Ue===null)throw Error($(349));Un&30||R1(n,t,o)}return o}function R1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function b1(e,t,n,r){t.value=n,t.getSnapshot=r,N1(t)&&$1(e)}function O1(e,t,n){return n(function(){N1(t)&&$1(e)})}function N1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function $1(e){var t=Gt(e,1);t!==null&&_t(t,e,1,-1)}function ed(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=Am.bind(null,Te,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function A1(){return vt().memoizedState}function di(e,t,n,r){var o=At();Te.flags|=e,o.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var o=vt();r=r===void 0?null:r;var i=void 0;if(Me!==null){var l=Me.memoizedState;if(i=l.destroy,r!==null&&gu(r,l.deps)){o.memoizedState=wo(t,n,i,r);return}}Te.flags|=e,o.memoizedState=wo(1|t,n,i,r)}function td(e,t){return di(8390656,8,e,t)}function wu(e,t){return cl(2048,8,e,t)}function M1(e,t){return cl(4,2,e,t)}function I1(e,t){return cl(4,4,e,t)}function D1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function j1(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,D1.bind(null,t,e),n)}function Cu(){}function z1(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function U1(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function F1(e,t,n){return Un&21?(Lt(n,t)||(n=Vf(),Te.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function Nm(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=hs.transition;hs.transition={};try{e(!1),t()}finally{pe=n,hs.transition=r}}function B1(){return vt().memoizedState}function $m(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},H1(e))V1(t,n);else if(n=C1(e,t,n,r),n!==null){var o=Xe();_t(n,e,r,o),W1(n,t,r)}}function Am(e,t,n){var r=yn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(H1(e))V1(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Lt(s,l)){var a=t.interleaved;a===null?(o.next=o,du(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=C1(e,t,o,r),n!==null&&(o=Xe(),_t(n,e,r,o),W1(n,t,r))}}function H1(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function V1(e,t){Xr=ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function W1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}var zi={readContext:gt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Mm={readContext:gt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,di(4194308,4,D1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return di(4194308,4,e,t)},useInsertionEffect:function(e,t){return di(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$m.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:Cu,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=Nm.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Te,o=At();if(Se){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Ue===null)throw Error($(349));Un&30||R1(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,td(O1.bind(null,r,i,e),[e]),r.flags|=2048,wo(9,b1.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=At(),t=Ue.identifierPrefix;if(Se){var n=Wt,r=Vt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Om++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Im={readContext:gt,useCallback:z1,useContext:gt,useEffect:wu,useImperativeHandle:j1,useInsertionEffect:M1,useLayoutEffect:I1,useMemo:U1,useReducer:ms,useRef:A1,useState:function(){return ms(yo)},useDebugValue:Cu,useDeferredValue:function(e){var t=vt();return F1(t,Me.memoizedState,e)},useTransition:function(){var e=ms(yo)[0],t=vt().memoizedState;return[e,t]},useMutableSource:P1,useSyncExternalStore:L1,useId:B1,unstable_isNewReconciler:!1},Dm={readContext:gt,useCallback:z1,useContext:gt,useEffect:wu,useImperativeHandle:j1,useInsertionEffect:M1,useLayoutEffect:I1,useMemo:U1,useReducer:gs,useRef:A1,useState:function(){return gs(yo)},useDebugValue:Cu,useDeferredValue:function(e){var t=vt();return Me===null?t.memoizedState=e:F1(t,Me.memoizedState,e)},useTransition:function(){var e=gs(yo)[0],t=vt().memoizedState;return[e,t]},useMutableSource:P1,useSyncExternalStore:L1,useId:B1,unstable_isNewReconciler:!1};function wr(e,t){try{var n="",r=t;do n+=dh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jm=typeof WeakMap=="function"?WeakMap:Map;function Q1(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fi||(Fi=!0,xa=r),fa(e,t)},n}function Z1(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fa(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function nd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Jm.bind(null,e,t,n),t.then(e,e))}function rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function od(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var zm=Jt.ReactCurrentOwner,tt=!1;function Ye(e,t,n,r){t.child=e===null?T1(t,null,n,r):vr(t,e.child,n,r)}function id(e,t,n,r,o){n=n.render;var i=t.ref;return fr(t,o),r=vu(e,t,n,r,i,o),n=yu(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xt(e,t,o)):(Se&&n&&iu(t),t.flags|=1,Ye(e,t,r,o),t.child)}function ld(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Lu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,K1(e,t,i,r,o)):(e=mi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(l,r)&&e.ref===t.ref)return Xt(e,t,o)}return t.flags|=1,e=wn(i,r),e.ref=t.ref,e.return=t,t.child=e}function K1(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(co(i,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,Xt(e,t,o)}return pa(e,t,n,r,o)}function Y1(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ir,it),it|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(ir,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ve(ir,it),it|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ve(ir,it),it|=r;return Ye(e,t,o,n),t.child}function G1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,o){var i=rt(n)?jn:Ke.current;return i=mr(t,i),fr(t,o),n=vu(e,t,n,r,i,o),r=yu(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xt(e,t,o)):(Se&&r&&iu(t),t.flags|=1,Ye(e,t,n,o),t.child)}function sd(e,t,n,r,o){if(rt(n)){var i=!0;Oi(t)}else i=!1;if(fr(t,o),t.stateNode===null)fi(e,t),k1(t,n,r),da(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=rt(n)?jn:Ke.current,u=mr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Jc(t,l,r,u),ln=!1;var m=t.memoizedState;l.state=m,Ii(t,r,l,o),a=t.memoizedState,s!==r||m!==a||nt.current||ln?(typeof d=="function"&&(ca(t,n,d,r),a=t.memoizedState),(s=ln||Xc(t,n,s,r,m,a,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,S1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:xt(t.type,s),l.props=u,f=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=gt(a):(a=rt(n)?jn:Ke.current,a=mr(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||m!==a)&&Jc(t,l,r,a),ln=!1,m=t.memoizedState,l.state=m,Ii(t,r,l,o);var g=t.memoizedState;s!==f||m!==g||nt.current||ln?(typeof v=="function"&&(ca(t,n,v,r),g=t.memoizedState),(u=ln||Xc(t,n,u,r,m,g,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ha(e,t,n,r,i,o)}function ha(e,t,n,r,o,i){G1(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Qc(t,n,!1),Xt(e,t,i);r=t.stateNode,zm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=vr(t,e.child,null,i),t.child=vr(t,null,s,i)):Ye(e,t,s,i),t.memoizedState=r.state,o&&Qc(t,n,!0),t.child}function X1(e){var t=e.stateNode;t.pendingContext?Wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wc(e,t.context,!1),pu(e,t.containerInfo)}function ad(e,t,n,r,o){return gr(),su(o),t.flags|=256,Ye(e,t,n,r),t.child}var ma={dehydrated:null,treeContext:null,retryLane:0};function ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function J1(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ve(Ee,o&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=pl(l,r,0,null),e=Dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ga(n),t.memoizedState=ma,e):Su(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Um(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=wn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=wn(s,i):(i=Dn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ga(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ma,r}return i=e.child,e=i.sibling,r=wn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Su(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xo(e,t,n,r){return r!==null&&su(r),vr(t,e.child,null,n),e=Su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Um(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=vs(Error($(422))),Xo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=pl({mode:"visible",children:r.children},o,0,null),i=Dn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&vr(t,e.child,null,l),t.child.memoizedState=ga(l),t.memoizedState=ma,i);if(!(t.mode&1))return Xo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error($(419)),r=vs(i,r,void 0),Xo(e,t,l,r)}if(s=(l&e.childLanes)!==0,tt||s){if(r=Ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Gt(e,o),_t(r,e,o,-1))}return Pu(),r=vs(Error($(421))),Xo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=qm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,lt=mn(o.nextSibling),st=t,Se=!0,Et=null,e!==null&&(ft[pt++]=Vt,ft[pt++]=Wt,ft[pt++]=zn,Vt=e.id,Wt=e.overflow,zn=t),t=Su(t,r.children),t.flags|=4096,t)}function ud(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function ys(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function q1(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ye(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,n,t);else if(e.tag===19)ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ys(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Di(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ys(t,!0,n,null,i);break;case"together":ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fm(e,t,n){switch(t.tag){case 3:X1(t),gr();break;case 5:_1(t);break;case 1:rt(t.type)&&Oi(t);break;case 4:pu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ve(Ai,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?J1(e,t,n):(ve(Ee,Ee.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);ve(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return q1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ve(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Y1(e,t,n)}return Xt(e,t,n)}var e0,va,t0,n0;e0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};va=function(){};t0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Mn(Ut.current);var i=null;switch(n){case"input":o=zs(e,o),r=zs(e,r),i=[];break;case"select":o=_e({},o,{value:void 0}),r=_e({},r,{value:void 0}),i=[];break;case"textarea":o=Bs(e,o),r=Bs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}Vs(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ro.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ro.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ye("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};n0=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bm(e,t,n){var r=t.pendingProps;switch(lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return rt(t.type)&&bi(),Qe(t),null;case 3:return r=t.stateNode,yr(),we(nt),we(Ke),mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(Ta(Et),Et=null))),va(e,t),Qe(t),null;case 5:hu(t);var o=Mn(go.current);if(n=t.type,e!==null&&t.stateNode!=null)t0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Qe(t),null}if(e=Mn(Ut.current),Yo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[It]=t,r[ho]=i,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(o=0;o<Wr.length;o++)ye(Wr[o],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":yc(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Cc(r,i),ye("invalid",r)}Vs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ko(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ko(r.textContent,s,e),o=["children",""+s]):ro.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ye("scroll",r)}switch(n){case"input":Uo(r),wc(r,i,!0);break;case"textarea":Uo(r),Sc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ri)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[ho]=r,e0(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ws(n,r),n){case"dialog":ye("cancel",e),ye("close",e),o=r;break;case"iframe":case"object":case"embed":ye("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wr.length;o++)ye(Wr[o],e);o=r;break;case"source":ye("error",e),o=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),o=r;break;case"details":ye("toggle",e),o=r;break;case"input":yc(e,r),o=zs(e,r),ye("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=_e({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Cc(e,r),o=Bs(e,r),ye("invalid",e);break;default:o=r}Vs(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Nf(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bf(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&oo(e,a):typeof a=="number"&&oo(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ro.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ye("scroll",e):a!=null&&Wa(e,i,a,l))}switch(n){case"input":Uo(e),wc(e,r,!1);break;case"textarea":Uo(e),Sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ar(e,!!r.multiple,i,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)n0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=Mn(go.current),Mn(Ut.current),Yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:Ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ko(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Qe(t),null;case 13:if(we(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&lt!==null&&t.mode&1&&!(t.flags&128))w1(),gr(),t.flags|=98560,i=!1;else if(i=Yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[It]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),i=!1}else Et!==null&&(Ta(Et),Et=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ie===0&&(Ie=3):Pu())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return yr(),va(e,t),e===null&&fo(t.stateNode.containerInfo),Qe(t),null;case 10:return cu(t.type._context),Qe(t),null;case 17:return rt(t.type)&&bi(),Qe(t),null;case 19:if(we(Ee),i=t.memoizedState,i===null)return Qe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)jr(i,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Di(e),l!==null){for(t.flags|=128,jr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&be()>Cr&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Di(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Se)return Qe(t),null}else 2*be()-i.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=be(),t.sibling=null,n=Ee.current,ve(Ee,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return _u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function Hm(e,t){switch(lu(t),t.tag){case 1:return rt(t.type)&&bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),we(nt),we(Ke),mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hu(t),null;case 13:if(we(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ee),null;case 4:return yr(),null;case 10:return cu(t.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var Jo=!1,Ze=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,W=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function ya(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var cd=!1;function Wm(e,t){if(ta=_i,e=l1(),ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(s=l+o),f!==i||r!==0&&f.nodeType!==3||(a=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++d===r&&(a=l),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(na={focusedElem:e,selectionRange:n},_i=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,x=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:xt(t.type,y),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(S){Pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return g=cd,cd=!1,g}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ya(t,n,i)}o=o.next}while(o!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function r0(e){var t=e.alternate;t!==null&&(e.alternate=null,r0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[ho],delete t[ia],delete t[Pm],delete t[Lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function o0(e){return e.tag===5||e.tag===3||e.tag===4}function dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}function Sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}var Be=null,kt=!1;function nn(e,t,n){for(n=n.child;n!==null;)i0(e,t,n),n=n.sibling}function i0(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Ze||or(n,t);case 6:var r=Be,o=kt;Be=null,nn(e,t,n),Be=r,kt=o,Be!==null&&(kt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(kt?(e=Be,n=n.stateNode,e.nodeType===8?ds(e.parentNode,n):e.nodeType===1&&ds(e,n),ao(e)):ds(Be,n.stateNode));break;case 4:r=Be,o=kt,Be=n.stateNode.containerInfo,kt=!0,nn(e,t,n),Be=r,kt=o;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ya(n,t,l),o=o.next}while(o!==r)}nn(e,t,n);break;case 1:if(!Ze&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Pe(n,t,s)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,nn(e,t,n),Ze=r):nn(e,t,n);break;default:nn(e,t,n)}}function fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vm),t.forEach(function(r){var o=e2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Be=s.stateNode,kt=!1;break e;case 3:Be=s.stateNode.containerInfo,kt=!0;break e;case 4:Be=s.stateNode.containerInfo,kt=!0;break e}s=s.return}if(Be===null)throw Error($(160));i0(i,l,o),Be=null,kt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){Pe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)l0(t,e),t=t.sibling}function l0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),$t(e),r&4){try{Jr(3,e,e.return),dl(3,e)}catch(y){Pe(e,e.return,y)}try{Jr(5,e,e.return)}catch(y){Pe(e,e.return,y)}}break;case 1:St(t,e),$t(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(St(t,e),$t(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var o=e.stateNode;try{oo(o,"")}catch(y){Pe(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Pf(o,i),Ws(s,l);var u=Ws(s,i);for(l=0;l<a.length;l+=2){var d=a[l],f=a[l+1];d==="style"?Nf(o,f):d==="dangerouslySetInnerHTML"?bf(o,f):d==="children"?oo(o,f):Wa(o,d,f,u)}switch(s){case"input":Us(o,i);break;case"textarea":Lf(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ar(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?ar(o,!!i.multiple,i.defaultValue,!0):ar(o,!!i.multiple,i.multiple?[]:"",!1))}o[ho]=i}catch(y){Pe(e,e.return,y)}}break;case 6:if(St(t,e),$t(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){Pe(e,e.return,y)}}break;case 3:if(St(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(y){Pe(e,e.return,y)}break;case 4:St(t,e),$t(e);break;case 13:St(t,e),$t(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Eu=be())),r&4&&fd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||d,St(t,e),Ze=u):St(t,e),$t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(m=W,v=m.child,m.tag){case 0:case 11:case 14:case 15:Jr(4,m,m.return);break;case 1:or(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Pe(r,n,y)}}break;case 5:or(m,m.return);break;case 22:if(m.memoizedState!==null){hd(f);continue}}v!==null?(v.return=m,W=v):hd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,a=f.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Of("display",l))}catch(y){Pe(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Pe(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:St(t,e),$t(e),r&4&&fd(e);break;case 21:break;default:St(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(o0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(oo(o,""),r.flags&=-33);var i=dd(e);Sa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=dd(e);Ca(e,s,l);break;default:throw Error($(161))}}catch(a){Pe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qm(e,t,n){W=e,s0(e)}function s0(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var o=W,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Jo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Ze;s=Jo;var u=Ze;if(Jo=l,(Ze=a)&&!u)for(W=o;W!==null;)l=W,a=l.child,l.tag===22&&l.memoizedState!==null?md(o):a!==null?(a.return=l,W=a):md(o);for(;i!==null;)W=i,s0(i),i=i.sibling;W=o,Jo=s,Ze=u}pd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,W=i):pd(e)}}function pd(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Gc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ao(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ze||t.flags&512&&wa(t)}catch(m){Pe(t,t.return,m)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function hd(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function md(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(a){Pe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){Pe(t,o,a)}}var i=t.return;try{wa(t)}catch(a){Pe(t,i,a)}break;case 5:var l=t.return;try{wa(t)}catch(a){Pe(t,l,a)}}}catch(a){Pe(t,t.return,a)}if(t===e){W=null;break}var s=t.sibling;if(s!==null){s.return=t.return,W=s;break}W=t.return}}var Zm=Math.ceil,Ui=Jt.ReactCurrentDispatcher,xu=Jt.ReactCurrentOwner,mt=Jt.ReactCurrentBatchConfig,de=0,Ue=null,$e=null,He=0,it=0,ir=_n(0),Ie=0,Co=null,Fn=0,fl=0,ku=0,qr=null,et=null,Eu=0,Cr=1/0,Ft=null,Fi=!1,xa=null,vn=null,qo=!1,cn=null,Bi=0,eo=0,ka=null,pi=-1,hi=0;function Xe(){return de&6?be():pi!==-1?pi:pi=be()}function yn(e){return e.mode&1?de&2&&He!==0?He&-He:bm.transition!==null?(hi===0&&(hi=Vf()),hi):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Xf(e.type)),e):1}function _t(e,t,n,r){if(50<eo)throw eo=0,ka=null,Error($(185));Po(e,n,r),(!(de&2)||e!==Ue)&&(e===Ue&&(!(de&2)&&(fl|=n),Ie===4&&an(e,He)),ot(e,r),n===1&&de===0&&!(t.mode&1)&&(Cr=be()+500,al&&Pn()))}function ot(e,t){var n=e.callbackNode;bh(e,t);var r=Ti(e,e===Ue?He:0);if(r===0)n!==null&&Ec(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ec(n),t===1)e.tag===0?Rm(gd.bind(null,e)):g1(gd.bind(null,e)),Tm(function(){!(de&6)&&Pn()}),n=null;else{switch(Wf(r)){case 1:n=Ga;break;case 4:n=Bf;break;case 16:n=Ei;break;case 536870912:n=Hf;break;default:n=Ei}n=m0(n,a0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function a0(e,t){if(pi=-1,hi=0,de&6)throw Error($(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=Ti(e,e===Ue?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hi(e,r);else{t=r;var o=de;de|=2;var i=c0();(Ue!==e||He!==t)&&(Ft=null,Cr=be()+500,In(e,t));do try{Gm();break}catch(s){u0(e,s)}while(1);uu(),Ui.current=i,de=o,$e!==null?t=0:(Ue=null,He=0,t=Ie)}if(t!==0){if(t===2&&(o=Gs(e),o!==0&&(r=o,t=Ea(e,o))),t===1)throw n=Co,In(e,0),an(e,r),ot(e,be()),n;if(t===6)an(e,r);else{if(o=e.current.alternate,!(r&30)&&!Km(o)&&(t=Hi(e,r),t===2&&(i=Gs(e),i!==0&&(r=i,t=Ea(e,i))),t===1))throw n=Co,In(e,0),an(e,r),ot(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:Nn(e,et,Ft);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Eu+500-be(),10<t)){if(Ti(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=oa(Nn.bind(null,e,et,Ft),t);break}Nn(e,et,Ft);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zm(r/1960))-r,10<r){e.timeoutHandle=oa(Nn.bind(null,e,et,Ft),r);break}Nn(e,et,Ft);break;case 5:Nn(e,et,Ft);break;default:throw Error($(329))}}}return ot(e,be()),e.callbackNode===n?a0.bind(null,e):null}function Ea(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=Hi(e,t),e!==2&&(t=et,et=n,t!==null&&Ta(t)),e}function Ta(e){et===null?et=e:et.push.apply(et,e)}function Km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Lt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~ku,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function gd(e){if(de&6)throw Error($(327));pr();var t=Ti(e,0);if(!(t&1))return ot(e,be()),null;var n=Hi(e,t);if(e.tag!==0&&n===2){var r=Gs(e);r!==0&&(t=r,n=Ea(e,r))}if(n===1)throw n=Co,In(e,0),an(e,t),ot(e,be()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,et,Ft),ot(e,be()),null}function Tu(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Cr=be()+500,al&&Pn())}}function Bn(e){cn!==null&&cn.tag===0&&!(de&6)&&pr();var t=de;de|=1;var n=mt.transition,r=pe;try{if(mt.transition=null,pe=1,e)return e()}finally{pe=r,mt.transition=n,de=t,!(de&6)&&Pn()}}function _u(){it=ir.current,we(ir)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Em(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bi();break;case 3:yr(),we(nt),we(Ke),mu();break;case 5:hu(r);break;case 4:yr();break;case 13:we(Ee);break;case 19:we(Ee);break;case 10:cu(r.type._context);break;case 22:case 23:_u()}n=n.return}if(Ue=e,$e=e=wn(e.current,null),He=it=t,Ie=0,Co=null,ku=fl=Fn=0,et=qr=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}An=null}return e}function u0(e,t){do{var n=$e;try{if(uu(),ci.current=zi,ji){for(var r=Te.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ji=!1}if(Un=0,ze=Me=Te=null,Xr=!1,vo=0,xu.current=null,n===null||n.return===null){Ie=1,Co=t,$e=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=He,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=rd(l);if(v!==null){v.flags&=-257,od(v,l,s,i,t),v.mode&1&&nd(i,u,t),t=v,a=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(a),t.updateQueue=y}else g.add(a);break e}else{if(!(t&1)){nd(i,u,t),Pu();break e}a=Error($(426))}}else if(Se&&s.mode&1){var x=rd(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),od(x,l,s,i,t),su(wr(a,s));break e}}i=a=wr(a,s),Ie!==4&&(Ie=2),qr===null?qr=[i]:qr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Q1(i,a,t);Yc(i,h);break e;case 1:s=a;var p=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(vn===null||!vn.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Z1(i,s,t);Yc(i,S);break e}}i=i.return}while(i!==null)}f0(n)}catch(E){t=E,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function c0(){var e=Ui.current;return Ui.current=zi,e===null?zi:e}function Pu(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ue===null||!(Fn&268435455)&&!(fl&268435455)||an(Ue,He)}function Hi(e,t){var n=de;de|=2;var r=c0();(Ue!==e||He!==t)&&(Ft=null,In(e,t));do try{Ym();break}catch(o){u0(e,o)}while(1);if(uu(),de=n,Ui.current=r,$e!==null)throw Error($(261));return Ue=null,He=0,Ie}function Ym(){for(;$e!==null;)d0($e)}function Gm(){for(;$e!==null&&!Sh();)d0($e)}function d0(e){var t=h0(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?f0(e):$e=t,xu.current=null}function f0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hm(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,$e=null;return}}else if(n=Bm(n,t,it),n!==null){$e=n;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Ie===0&&(Ie=5)}function Nn(e,t,n){var r=pe,o=mt.transition;try{mt.transition=null,pe=1,Xm(e,t,n,r)}finally{mt.transition=o,pe=r}return null}function Xm(e,t,n,r){do pr();while(cn!==null);if(de&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Oh(e,i),e===Ue&&($e=Ue=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,m0(Ei,function(){return pr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=mt.transition,mt.transition=null;var l=pe;pe=1;var s=de;de|=4,xu.current=null,Wm(e,n),l0(n,e),vm(na),_i=!!ta,na=ta=null,e.current=n,Qm(n),xh(),de=s,pe=l,mt.transition=i}else e.current=n;if(qo&&(qo=!1,cn=e,Bi=o),i=e.pendingLanes,i===0&&(vn=null),Th(n.stateNode),ot(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Fi)throw Fi=!1,e=xa,xa=null,e;return Bi&1&&e.tag!==0&&pr(),i=e.pendingLanes,i&1?e===ka?eo++:(eo=0,ka=e):eo=0,Pn(),null}function pr(){if(cn!==null){var e=Wf(Bi),t=mt.transition,n=pe;try{if(mt.transition=null,pe=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Bi=0,de&6)throw Error($(331));var o=de;for(de|=4,W=e.current;W!==null;){var i=W,l=i.child;if(W.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Jr(8,d,i)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var m=d.sibling,v=d.return;if(r0(d),d===u){W=null;break}if(m!==null){m.return=v,W=m;break}W=v}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}W=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,W=l;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Jr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,W=h;break e}W=i.return}}var p=e.current;for(W=p;W!==null;){l=W;var w=l.child;if(l.subtreeFlags&2064&&w!==null)w.return=l,W=w;else e:for(l=p;W!==null;){if(s=W,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:dl(9,s)}}catch(E){Pe(s,s.return,E)}if(s===l){W=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,W=S;break e}W=s.return}}if(de=o,Pn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{pe=n,mt.transition=t}}return!1}function vd(e,t,n){t=wr(n,t),t=Q1(e,t,1),e=gn(e,t,1),t=Xe(),e!==null&&(Po(e,1,t),ot(e,t))}function Pe(e,t,n){if(e.tag===3)vd(e,e,n);else for(;t!==null;){if(t.tag===3){vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=wr(n,e),e=Z1(t,e,1),t=gn(t,e,1),e=Xe(),t!==null&&(Po(t,1,e),ot(t,e));break}}t=t.return}}function Jm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(He&n)===n&&(Ie===4||Ie===3&&(He&130023424)===He&&500>be()-Eu?In(e,0):ku|=n),ot(e,t)}function p0(e,t){t===0&&(e.mode&1?(t=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):t=1);var n=Xe();e=Gt(e,t),e!==null&&(Po(e,t,n),ot(e,n))}function qm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),p0(e,n)}function e2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),p0(e,n)}var h0;h0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,Fm(e,t,n);tt=!!(e.flags&131072)}else tt=!1,Se&&t.flags&1048576&&v1(t,$i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fi(e,t),e=t.pendingProps;var o=mr(t,Ke.current);fr(t,n),o=vu(null,t,r,e,o,n);var i=yu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,Oi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fu(t),o.updater=ul,t.stateNode=o,o._reactInternals=t,da(t,r,e,n),t=ha(null,t,r,!0,i,n)):(t.tag=0,Se&&i&&iu(t),Ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=n2(r),e=xt(r,e),o){case 0:t=pa(null,t,r,e,n);break e;case 1:t=sd(null,t,r,e,n);break e;case 11:t=id(null,t,r,e,n);break e;case 14:t=ld(null,t,r,xt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),pa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),sd(e,t,r,o,n);case 3:e:{if(X1(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,S1(e,t),Ii(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=wr(Error($(423)),t),t=ad(e,t,r,n,o);break e}else if(r!==o){o=wr(Error($(424)),t),t=ad(e,t,r,n,o);break e}else for(lt=mn(t.stateNode.containerInfo.firstChild),st=t,Se=!0,Et=null,n=T1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===o){t=Xt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return _1(t),e===null&&aa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ra(r,o)?l=null:i!==null&&ra(r,i)&&(t.flags|=32),G1(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&aa(t),null;case 13:return J1(e,t,n);case 4:return pu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),id(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ve(Ai,r._currentValue),r._currentValue=l,i!==null)if(Lt(i.value,l)){if(i.children===o.children&&!nt.current){t=Xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Qt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ua(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error($(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ua(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fr(t,n),o=gt(o),r=r(o),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,o=xt(r,t.pendingProps),o=xt(r.type,o),ld(e,t,r,o,n);case 15:return K1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),fi(e,t),t.tag=1,rt(r)?(e=!0,Oi(t)):e=!1,fr(t,n),k1(t,r,o),da(t,r,o,n),ha(null,t,r,!0,e,n);case 19:return q1(e,t,n);case 22:return Y1(e,t,n)}throw Error($(156,t.tag))};function m0(e,t){return Ff(e,t)}function t2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new t2(e,t,n,r)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n2(e){if(typeof e=="function")return Lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Za)return 11;if(e===Ka)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Lu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yn:return Dn(n.children,o,i,t);case Qa:l=8,o|=8;break;case Ms:return e=ht(12,n,t,o|2),e.elementType=Ms,e.lanes=i,e;case Is:return e=ht(13,n,t,o),e.elementType=Is,e.lanes=i,e;case Ds:return e=ht(19,n,t,o),e.elementType=Ds,e.lanes=i,e;case Ef:return pl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:l=10;break e;case kf:l=9;break e;case Za:l=11;break e;case Ka:l=14;break e;case on:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=ht(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Dn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=ht(22,e,r,t),e.elementType=Ef,e.lanes=n,e.stateNode={isHidden:!1},e}function ws(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function Cs(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function r2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ru(e,t,n,r,o,i,l,s,a){return e=new r2(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ht(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(i),e}function o2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function g0(e){if(!e)return kn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(rt(n))return m1(e,n,t)}return t}function v0(e,t,n,r,o,i,l,s,a){return e=Ru(n,r,!0,e,o,i,l,s,a),e.context=g0(null),n=e.current,r=Xe(),o=yn(n),i=Qt(r,o),i.callback=t??null,gn(n,i,o),e.current.lanes=o,Po(e,o,r),ot(e,r),e}function hl(e,t,n,r){var o=t.current,i=Xe(),l=yn(o);return n=g0(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(o,t,l),e!==null&&(_t(e,o,l,i),ui(e,o,l)),l}function Vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bu(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function i2(){return null}var y0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}ml.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));hl(e,t,null,null)};ml.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){hl(null,e,null,null)}),t[Yt]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&Gf(e)}};function Nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function l2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Vi(l);i.call(u)}}var l=v0(t,r,e,0,null,!1,!1,"",wd);return e._reactRootContainer=l,e[Yt]=l.current,fo(e.nodeType===8?e.parentNode:e),Bn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Vi(a);s.call(u)}}var a=Ru(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=a,e[Yt]=a.current,fo(e.nodeType===8?e.parentNode:e),Bn(function(){hl(t,a,n,r)}),a}function vl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Vi(l);s.call(a)}}hl(t,l,e,o)}else l=l2(n,t,e,o,r);return Vi(l)}Qf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(Xa(t,n|1),ot(t,be()),!(de&6)&&(Cr=be()+500,Pn()))}break;case 13:Bn(function(){var r=Gt(e,1);if(r!==null){var o=Xe();_t(r,e,1,o)}}),bu(e,1)}};Ja=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Xe();_t(t,e,134217728,n)}bu(e,134217728)}};Zf=function(e){if(e.tag===13){var t=yn(e),n=Gt(e,t);if(n!==null){var r=Xe();_t(n,e,t,r)}bu(e,t)}};Kf=function(){return pe};Yf=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Zs=function(e,t,n){switch(t){case"input":if(Us(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=sl(r);if(!o)throw Error($(90));_f(r),Us(r,o)}}}break;case"textarea":Lf(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};Mf=Tu;If=Bn;var s2={usingClientEntryPoint:!1,Events:[Ro,qn,sl,$f,Af,Tu]},zr={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a2={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zf(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||i2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{rl=ei.inject(a2),zt=ei}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s2;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(t))throw Error($(200));return o2(e,t,null,n)};ut.createRoot=function(e,t){if(!Nu(e))throw Error($(299));var n=!1,r="",o=y0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ru(e,1,!1,null,null,n,!1,r,o),e[Yt]=t.current,fo(e.nodeType===8?e.parentNode:e),new Ou(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=zf(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return Bn(e)};ut.hydrate=function(e,t,n){if(!gl(t))throw Error($(200));return vl(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!Nu(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=y0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=v0(t,null,e,1,n??null,o,!1,i,l),e[Yt]=t.current,fo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ml(t)};ut.render=function(e,t,n){if(!gl(t))throw Error($(200));return vl(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!gl(e))throw Error($(40));return e._reactRootContainer?(Bn(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};ut.unstable_batchedUpdates=Tu;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return vl(e,t,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ut})(ih);var Cd=Ns;Os.createRoot=Cd.createRoot,Os.hydrateRoot=Cd.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const Sd="popstate";function u2(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return _a("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Wi(o)}return d2(t,n,null,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $u(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function c2(){return Math.random().toString(36).substr(2,8)}function xd(e,t){return{usr:e.state,key:e.key,idx:t}}function _a(e,t,n,r){return n===void 0&&(n=null),So({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:n,key:t&&t.key||r||c2()})}function Wi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function d2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=dn.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(So({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){s=dn.Pop;let x=d(),h=x==null?null:x-u;u=x,a&&a({action:s,location:y.location,delta:h})}function m(x,h){s=dn.Push;let p=_a(y.location,x,h);n&&n(p,x),u=d()+1;let w=xd(p,u),S=y.createHref(p);try{l.pushState(w,"",S)}catch{o.location.assign(S)}i&&a&&a({action:s,location:y.location,delta:1})}function v(x,h){s=dn.Replace;let p=_a(y.location,x,h);n&&n(p,x),u=d();let w=xd(p,u),S=y.createHref(p);l.replaceState(w,"",S),i&&a&&a({action:s,location:y.location,delta:0})}function g(x){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof x=="string"?x:Wi(x);return De(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return s},get location(){return e(o,l)},listen(x){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Sd,f),a=x,()=>{o.removeEventListener(Sd,f),a=null}},createHref(x){return t(o,x)},createURL:g,encodeLocation(x){let h=g(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(x){return l.go(x)}};return y}var kd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kd||(kd={}));function f2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pr(t):t,o=Au(r.pathname||"/",n);if(o==null)return null;let i=w0(e);p2(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=x2(i[s],T2(o));return l}function w0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(De(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Cn([r,a.relativePath]),d=n.concat(a);i.children&&i.children.length>0&&(De(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),w0(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:C2(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of C0(i.path))o(i,l,a)}),t}function C0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=C0(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function p2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:S2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const h2=/^:\w+$/,m2=3,g2=2,v2=1,y2=10,w2=-2,Ed=e=>e==="*";function C2(e,t){let n=e.split("/"),r=n.length;return n.some(Ed)&&(r+=w2),t&&(r+=g2),n.filter(o=>!Ed(o)).reduce((o,i)=>o+(h2.test(i)?m2:i===""?v2:y2),r)}function S2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function x2(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let s=n[l],a=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=k2({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let f=s.route;i.push({params:r,pathname:Cn([o,d.pathname]),pathnameBase:R2(Cn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Cn([o,d.pathnameBase]))}return i}function k2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=E2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let m=s[f]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=_2(s[f]||"",d),u},{}),pathname:i,pathnameBase:l,pattern:e}}function E2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$u(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function T2(e){try{return decodeURI(e)}catch(t){return $u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _2(e,t){try{return decodeURIComponent(e)}catch(n){return $u(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Au(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function P2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:L2(n,t):t,search:b2(r),hash:O2(o)}}function L2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ss(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function x0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Pr(e):(o=So({},e),De(!o.pathname||!o.pathname.includes("?"),Ss("?","pathname","search",o)),De(!o.pathname||!o.pathname.includes("#"),Ss("#","pathname","hash",o)),De(!o.search||!o.search.includes("#"),Ss("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(r||l==null)s=n;else{let f=t.length-1;if(l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}s=f>=0?t[f]:"/"}let a=P2(o,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),R2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),b2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const A2=typeof Object.is=="function"?Object.is:$2,{useState:M2,useEffect:I2,useLayoutEffect:D2,useDebugValue:j2}=bs;function z2(e,t,n){const r=t(),[{inst:o},i]=M2({inst:{value:r,getSnapshot:t}});return D2(()=>{o.value=r,o.getSnapshot=t,xs(o)&&i({inst:o})},[e,r,t]),I2(()=>(xs(o)&&i({inst:o}),e(()=>{xs(o)&&i({inst:o})})),[e]),j2(r),r}function xs(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!A2(n,r)}catch{return!0}}function U2(e,t,n){return t()}const F2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B2=!F2,H2=B2?U2:z2;"useSyncExternalStore"in bs&&(e=>e.useSyncExternalStore)(bs);const k0=C.createContext(null),Mu=C.createContext(null),Lr=C.createContext(null),yl=C.createContext(null),Ln=C.createContext({outlet:null,matches:[]}),E0=C.createContext(null);function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}function V2(e,t){let{relative:n}=t===void 0?{}:t;Oo()||De(!1);let{basename:r,navigator:o}=C.useContext(Lr),{hash:i,pathname:l,search:s}=Iu(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Cn([r,l])),o.createHref({pathname:a,search:s,hash:i})}function Oo(){return C.useContext(yl)!=null}function yt(){return Oo()||De(!1),C.useContext(yl).location}function bt(){Oo()||De(!1);let{basename:e,navigator:t}=C.useContext(Lr),{matches:n}=C.useContext(Ln),{pathname:r}=yt(),o=JSON.stringify(S0(n).map(s=>s.pathnameBase)),i=C.useRef(!1);return C.useEffect(()=>{i.current=!0}),C.useCallback(function(s,a){if(a===void 0&&(a={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let u=x0(s,JSON.parse(o),r,a.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Cn([e,u.pathname])),(a.replace?t.replace:t.push)(u,a.state,a)},[e,t,o,r])}const T0=C.createContext(null);function No(){return C.useContext(T0)}function W2(e){let t=C.useContext(Ln).outlet;return t&&C.createElement(T0.Provider,{value:e},t)}function _0(){let{matches:e}=C.useContext(Ln),t=e[e.length-1];return t?t.params:{}}function Iu(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Ln),{pathname:o}=yt(),i=JSON.stringify(S0(r).map(l=>l.pathnameBase));return C.useMemo(()=>x0(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function Q2(e,t){Oo()||De(!1);let{navigator:n}=C.useContext(Lr),r=C.useContext(Mu),{matches:o}=C.useContext(Ln),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let a=yt(),u;if(t){var d;let y=typeof t=="string"?Pr(t):t;s==="/"||(d=y.pathname)!=null&&d.startsWith(s)||De(!1),u=y}else u=a;let f=u.pathname||"/",m=s==="/"?f:f.slice(s.length)||"/",v=f2(e,{pathname:m}),g=G2(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Cn([s,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:Cn([s,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,r||void 0);return t&&g?C.createElement(yl.Provider,{value:{location:Pa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:dn.Pop}},g):g}function Z2(){let e=eg(),t=N2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,i)}class K2 extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Ln.Provider,{value:this.props.routeContext},C.createElement(E0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y2(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(k0);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Ln.Provider,{value:t},r)}function G2(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));i>=0||De(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,s)=>{let a=l.route.id?o==null?void 0:o[l.route.id]:null,u=null;n&&(l.route.ErrorBoundary?u=C.createElement(l.route.ErrorBoundary,null):l.route.errorElement?u=l.route.errorElement:u=C.createElement(Z2,null));let d=t.concat(r.slice(0,s+1)),f=()=>{let m=i;return a?m=u:l.route.Component?m=C.createElement(l.route.Component,null):l.route.element&&(m=l.route.element),C.createElement(Y2,{match:l,routeContext:{outlet:i,matches:d},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||s===0)?C.createElement(K2,{location:n.location,component:u,error:a,children:f(),routeContext:{outlet:null,matches:d}}):f()},null)}var Td;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Td||(Td={}));var Qi;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Qi||(Qi={}));function X2(e){let t=C.useContext(Mu);return t||De(!1),t}function J2(e){let t=C.useContext(Ln);return t||De(!1),t}function q2(e){let t=J2(),n=t.matches[t.matches.length-1];return n.route.id||De(!1),n.route.id}function eg(){var e;let t=C.useContext(E0),n=X2(Qi.UseRouteError),r=q2(Qi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Du(e){return W2(e.context)}function ke(e){De(!1)}function tg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=dn.Pop,navigator:i,static:l=!1}=e;Oo()&&De(!1);let s=t.replace(/^\/*/,"/"),a=C.useMemo(()=>({basename:s,navigator:i,static:l}),[s,i,l]);typeof r=="string"&&(r=Pr(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:v="default"}=r,g=C.useMemo(()=>{let y=Au(u,s);return y==null?null:{location:{pathname:y,search:d,hash:f,state:m,key:v},navigationType:o}},[s,u,d,f,m,v,o]);return g==null?null:C.createElement(Lr.Provider,{value:a},C.createElement(yl.Provider,{children:n,value:g}))}function ng(e){let{children:t,location:n}=e,r=C.useContext(k0),o=r&&!t?r.router.routes:La(t);return Q2(o,n)}var _d;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(_d||(_d={}));new Promise(()=>{});function La(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,La(r.props.children,t));return}r.type!==ke&&De(!1),!r.props.index||!r.props.children||De(!1);let i=[...t,o],l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=La(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}function P0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function rg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function og(e,t){return e.button===0&&(!t||t==="_self")&&!rg(e)}const ig=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],lg=["aria-current","caseSensitive","className","end","style","to","children"];function sg(e){let{basename:t,children:n,window:r}=e,o=C.useRef();o.current==null&&(o.current=u2({window:r,v5Compat:!0}));let i=o.current,[l,s]=C.useState({action:i.action,location:i.location});return C.useLayoutEffect(()=>i.listen(s),[i]),C.createElement(tg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}const ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ki=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:d}=t,f=P0(t,ig),{basename:m}=C.useContext(Lr),v,g=!1;if(typeof u=="string"&&ug.test(u)&&(v=u,ag)){let p=new URL(window.location.href),w=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Au(w.pathname,m);w.origin===p.origin&&S!=null?u=S+w.search+w.hash:g=!0}let y=V2(u,{relative:o}),x=cg(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:o});function h(p){r&&r(p),p.defaultPrevented||x(p)}return C.createElement("a",Zi({},f,{href:v||y,onClick:g||i?r:h,ref:n,target:a}))}),Oe=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:s,to:a,children:u}=t,d=P0(t,lg),f=Iu(a,{relative:d.relative}),m=yt(),v=C.useContext(Mu),{navigator:g}=C.useContext(Lr),y=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,x=m.pathname,h=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(x=x.toLowerCase(),h=h?h.toLowerCase():null,y=y.toLowerCase());let p=x===y||!l&&x.startsWith(y)&&x.charAt(y.length)==="/",w=h!=null&&(h===y||!l&&h.startsWith(y)&&h.charAt(y.length)==="/"),S=p?r:void 0,E;typeof i=="function"?E=i({isActive:p,isPending:w}):E=[i,p?"active":null,w?"pending":null].filter(Boolean).join(" ");let _=typeof s=="function"?s({isActive:p,isPending:w}):s;return C.createElement(Ki,Zi({},d,{"aria-current":S,className:E,ref:n,style:_,to:a}),typeof u=="function"?u({isActive:p,isPending:w}):u)});var Pd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Pd||(Pd={}));var Ld;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ld||(Ld={}));function cg(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,s=bt(),a=yt(),u=Iu(e,{relative:l});return C.useCallback(d=>{if(og(d,n)){d.preventDefault();let f=r!==void 0?r:Wi(a)===Wi(u);s(e,{replace:f,state:o,preventScrollReset:i,relative:l})}},[a,s,u,r,o,n,e,i,l])}function L0(e,t){return function(){return e.apply(t,arguments)}}const{toString:R0}=Object.prototype,{getPrototypeOf:ju}=Object,zu=(e=>t=>{const n=R0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qt=e=>(e=e.toLowerCase(),t=>zu(t)===e),wl=e=>t=>typeof t===e,{isArray:Rr}=Array,xo=wl("undefined");function dg(e){return e!==null&&!xo(e)&&e.constructor!==null&&!xo(e.constructor)&&En(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const b0=qt("ArrayBuffer");function fg(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&b0(e.buffer),t}const pg=wl("string"),En=wl("function"),O0=wl("number"),Uu=e=>e!==null&&typeof e=="object",hg=e=>e===!0||e===!1,gi=e=>{if(zu(e)!=="object")return!1;const t=ju(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},mg=qt("Date"),gg=qt("File"),vg=qt("Blob"),yg=qt("FileList"),wg=e=>Uu(e)&&En(e.pipe),Cg=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||R0.call(e)===t||En(e.toString)&&e.toString()===t)},Sg=qt("URLSearchParams"),xg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $o(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Rr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let s;for(r=0;r<l;r++)s=i[r],t.call(null,e[s],s,e)}}function N0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const $0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),A0=e=>!xo(e)&&e!==$0;function Ra(){const{caseless:e}=A0(this)&&this||{},t={},n=(r,o)=>{const i=e&&N0(t,o)||o;gi(t[i])&&gi(r)?t[i]=Ra(t[i],r):gi(r)?t[i]=Ra({},r):Rr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&$o(arguments[r],n);return t}const kg=(e,t,n,{allOwnKeys:r}={})=>($o(t,(o,i)=>{n&&En(o)?e[i]=L0(o,n):e[i]=o},{allOwnKeys:r}),e),Eg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tg=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},_g=(e,t,n,r)=>{let o,i,l;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&ju(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Pg=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Lg=e=>{if(!e)return null;if(Rr(e))return e;let t=e.length;if(!O0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Rg=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ju(Uint8Array)),bg=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Og=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ng=qt("HTMLFormElement"),$g=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Rd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ag=qt("RegExp"),M0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$o(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},Mg=e=>{M0(e,(t,n)=>{if(En(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(En(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ig=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Rr(e)?r(e):r(String(e).split(t)),n},Dg=()=>{},jg=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ks="abcdefghijklmnopqrstuvwxyz",bd="0123456789",I0={DIGIT:bd,ALPHA:ks,ALPHA_DIGIT:ks+ks.toUpperCase()+bd},zg=(e=16,t=I0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ug(e){return!!(e&&En(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Fg=e=>{const t=new Array(10),n=(r,o)=>{if(Uu(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Rr(r)?[]:{};return $o(r,(l,s)=>{const a=n(l,o+1);!xo(a)&&(i[s]=a)}),t[o]=void 0,i}}return r};return n(e,0)},R={isArray:Rr,isArrayBuffer:b0,isBuffer:dg,isFormData:Cg,isArrayBufferView:fg,isString:pg,isNumber:O0,isBoolean:hg,isObject:Uu,isPlainObject:gi,isUndefined:xo,isDate:mg,isFile:gg,isBlob:vg,isRegExp:Ag,isFunction:En,isStream:wg,isURLSearchParams:Sg,isTypedArray:Rg,isFileList:yg,forEach:$o,merge:Ra,extend:kg,trim:xg,stripBOM:Eg,inherits:Tg,toFlatObject:_g,kindOf:zu,kindOfTest:qt,endsWith:Pg,toArray:Lg,forEachEntry:bg,matchAll:Og,isHTMLForm:Ng,hasOwnProperty:Rd,hasOwnProp:Rd,reduceDescriptors:M0,freezeMethods:Mg,toObjectSet:Ig,toCamelCase:$g,noop:Dg,toFiniteNumber:jg,findKey:N0,global:$0,isContextDefined:A0,ALPHABET:I0,generateString:zg,isSpecCompliantForm:Ug,toJSONObject:Fg};function ce(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}R.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const D0=ce.prototype,j0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{j0[e]={value:e}});Object.defineProperties(ce,j0);Object.defineProperty(D0,"isAxiosError",{value:!0});ce.from=(e,t,n,r,o,i)=>{const l=Object.create(D0);return R.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),ce.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};const Bg=null;function ba(e){return R.isPlainObject(e)||R.isArray(e)}function z0(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function Od(e,t,n){return e?e.concat(t).map(function(o,i){return o=z0(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Hg(e){return R.isArray(e)&&!e.some(ba)}const Vg=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Cl(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,x){return!R.isUndefined(x[y])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(R.isDate(g))return g.toISOString();if(!a&&R.isBlob(g))throw new ce("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(g)||R.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,y,x){let h=g;if(g&&!x&&typeof g=="object"){if(R.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(R.isArray(g)&&Hg(g)||(R.isFileList(g)||R.endsWith(y,"[]"))&&(h=R.toArray(g)))return y=z0(y),h.forEach(function(w,S){!(R.isUndefined(w)||w===null)&&t.append(l===!0?Od([y],S,i):l===null?y:y+"[]",u(w))}),!1}return ba(g)?!0:(t.append(Od(x,y,i),u(g)),!1)}const f=[],m=Object.assign(Vg,{defaultVisitor:d,convertValue:u,isVisitable:ba});function v(g,y){if(!R.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),R.forEach(g,function(h,p){(!(R.isUndefined(h)||h===null)&&o.call(t,h,R.isString(p)?p.trim():p,y,m))===!0&&v(h,y?y.concat(p):[p])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Nd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Fu(e,t){this._pairs=[],e&&Cl(e,this,t)}const U0=Fu.prototype;U0.append=function(t,n){this._pairs.push([t,n])};U0.toString=function(t){const n=t?function(r){return t.call(this,r,Nd)}:Nd;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Wg(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function F0(e,t,n){if(!t)return e;const r=n&&n.encode||Wg,o=n&&n.serialize;let i;if(o?i=o(t,n):i=R.isURLSearchParams(t)?t.toString():new Fu(t,n).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Qg{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const $d=Qg,B0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zg=typeof URLSearchParams<"u"?URLSearchParams:Fu,Kg=typeof FormData<"u"?FormData:null,Yg=typeof Blob<"u"?Blob:null,Gg=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Xg=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Dt={isBrowser:!0,classes:{URLSearchParams:Zg,FormData:Kg,Blob:Yg},isStandardBrowserEnv:Gg,isStandardBrowserWebWorkerEnv:Xg,protocols:["http","https","file","blob","url","data"]};function Jg(e,t){return Cl(e,new Dt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Dt.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function qg(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ev(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function H0(e){function t(n,r,o,i){let l=n[i++];const s=Number.isFinite(+l),a=i>=n.length;return l=!l&&R.isArray(o)?o.length:l,a?(R.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!s):((!o[l]||!R.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&R.isArray(o[l])&&(o[l]=ev(o[l])),!s)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,o)=>{t(qg(r),o,n,0)}),n}return null}const tv={"Content-Type":void 0};function nv(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Sl={transitional:B0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=R.isObject(t);if(i&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return o&&o?JSON.stringify(H0(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Jg(t,this.formSerializer).toString();if((s=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Cl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),nv(t)):t}],transformResponse:[function(t){const n=this.transitional||Sl.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?ce.from(s,ce.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){Sl.headers[t]={}});R.forEach(["post","put","patch"],function(t){Sl.headers[t]=R.merge(tv)});const Bu=Sl,rv=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ov=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&rv[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ad=Symbol("internals");function Ur(e){return e&&String(e).trim().toLowerCase()}function vi(e){return e===!1||e==null?e:R.isArray(e)?e.map(vi):String(e)}function iv(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function lv(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Es(e,t,n,r,o){if(R.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function sv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function av(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}class xl{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,a,u){const d=Ur(a);if(!d)throw new Error("header name must be a non-empty string");const f=R.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||a]=vi(s))}const l=(s,a)=>R.forEach(s,(u,d)=>i(u,d,a));return R.isPlainObject(t)||t instanceof this.constructor?l(t,n):R.isString(t)&&(t=t.trim())&&!lv(t)?l(ov(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Ur(t),t){const r=R.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return iv(o);if(R.isFunction(n))return n.call(this,o,r);if(R.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ur(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Es(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=Ur(l),l){const s=R.findKey(r,l);s&&(!n||Es(r,r[s],s,n))&&(delete r[s],o=!0)}}return R.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Es(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return R.forEach(this,(o,i)=>{const l=R.findKey(r,i);if(l){n[l]=vi(o),delete n[i];return}const s=t?sv(i):String(i).trim();s!==i&&delete n[i],n[s]=vi(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Ad]=this[Ad]={accessors:{}}).accessors,o=this.prototype;function i(l){const s=Ur(l);r[s]||(av(o,l),r[s]=!0)}return R.isArray(t)?t.forEach(i):i(t),this}}xl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.freezeMethods(xl.prototype);R.freezeMethods(xl);const Zt=xl;function Ts(e,t){const n=this||Bu,r=t||n,o=Zt.from(r.headers);let i=r.data;return R.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function V0(e){return!!(e&&e.__CANCEL__)}function Ao(e,t,n){ce.call(this,e??"canceled",ce.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Ao,ce,{__CANCEL__:!0});function uv(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ce("Request failed with status code "+n.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const cv=Dt.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,l,s){const a=[];a.push(n+"="+encodeURIComponent(r)),R.isNumber(o)&&a.push("expires="+new Date(o).toGMTString()),R.isString(i)&&a.push("path="+i),R.isString(l)&&a.push("domain="+l),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function dv(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function fv(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function W0(e,t){return e&&!dv(t)?fv(e,t):t}const pv=Dt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let l=i;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(l){const s=R.isString(l)?o(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function hv(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mv(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),d=r[i];l||(l=u),n[o]=a,r[o]=u;let f=i,m=0;for(;f!==o;)m+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-l<t)return;const v=d&&u-d;return v?Math.round(m*1e3/v):void 0}}function Md(e,t){let n=0;const r=mv(50,250);return o=>{const i=o.loaded,l=o.lengthComputable?o.total:void 0,s=i-n,a=r(s),u=i<=l;n=i;const d={loaded:i,total:l,progress:l?i/l:void 0,bytes:s,rate:a||void 0,estimated:a&&l&&u?(l-i)/a:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const gv=typeof XMLHttpRequest<"u",vv=gv&&function(e){return new Promise(function(n,r){let o=e.data;const i=Zt.from(e.headers).normalize(),l=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}R.isFormData(o)&&(Dt.isStandardBrowserEnv||Dt.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+g))}const d=W0(e.baseURL,e.url);u.open(e.method.toUpperCase(),F0(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const v=Zt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!l||l==="text"||l==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};uv(function(h){n(h),a()},function(h){r(h),a()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new ce("Request aborted",ce.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new ce("Network Error",ce.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||B0;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new ce(g,y.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,e,u)),u=null},Dt.isStandardBrowserEnv){const v=(e.withCredentials||pv(d))&&e.xsrfCookieName&&cv.read(e.xsrfCookieName);v&&i.set(e.xsrfHeaderName,v)}o===void 0&&i.setContentType(null),"setRequestHeader"in u&&R.forEach(i.toJSON(),function(g,y){u.setRequestHeader(y,g)}),R.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),l&&l!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Md(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Md(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=v=>{u&&(r(!v||v.type?new Ao(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const m=hv(d);if(m&&Dt.protocols.indexOf(m)===-1){r(new ce("Unsupported protocol "+m+":",ce.ERR_BAD_REQUEST,e));return}u.send(o||null)})},yi={http:Bg,xhr:vv};R.forEach(yi,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const yv={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=R.isString(n)?yi[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new ce(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(R.hasOwnProp(yi,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!R.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:yi};function _s(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ao(null,e)}function Id(e){return _s(e),e.headers=Zt.from(e.headers),e.data=Ts.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),yv.getAdapter(e.adapter||Bu.adapter)(e).then(function(r){return _s(e),r.data=Ts.call(e,e.transformResponse,r),r.headers=Zt.from(r.headers),r},function(r){return V0(r)||(_s(e),r&&r.response&&(r.response.data=Ts.call(e,e.transformResponse,r.response),r.response.headers=Zt.from(r.response.headers))),Promise.reject(r)})}const Dd=e=>e instanceof Zt?e.toJSON():e;function Sr(e,t){t=t||{};const n={};function r(u,d,f){return R.isPlainObject(u)&&R.isPlainObject(d)?R.merge.call({caseless:f},u,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function o(u,d,f){if(R.isUndefined(d)){if(!R.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function i(u,d){if(!R.isUndefined(d))return r(void 0,d)}function l(u,d){if(R.isUndefined(d)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,d)=>o(Dd(u),Dd(d),!0)};return R.forEach(Object.keys(e).concat(Object.keys(t)),function(d){const f=a[d]||o,m=f(e[d],t[d],d);R.isUndefined(m)&&f!==s||(n[d]=m)}),n}const Q0="1.3.4",Hu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Hu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const jd={};Hu.transitional=function(t,n,r){function o(i,l){return"[Axios v"+Q0+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,s)=>{if(t===!1)throw new ce(o(l," has been removed"+(n?" in "+n:"")),ce.ERR_DEPRECATED);return n&&!jd[l]&&(jd[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,s):!0}};function wv(e,t,n){if(typeof e!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=t[i];if(l){const s=e[i],a=s===void 0||l(s,i,e);if(a!==!0)throw new ce("option "+i+" must be "+a,ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ce("Unknown option "+i,ce.ERR_BAD_OPTION)}}const Oa={assertOptions:wv,validators:Hu},rn=Oa.validators;class Yi{constructor(t){this.defaults=t,this.interceptors={request:new $d,response:new $d}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Sr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Oa.assertOptions(r,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean)},!1),o!==void 0&&Oa.assertOptions(o,{encode:rn.function,serialize:rn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=i&&R.merge(i.common,i[n.method]),l&&R.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Zt.concat(l,i);const s=[];let a=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(a=a&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,f=0,m;if(!a){const g=[Id.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),m=g.length,d=Promise.resolve(n);f<m;)d=d.then(g[f++],g[f++]);return d}m=s.length;let v=n;for(f=0;f<m;){const g=s[f++],y=s[f++];try{v=g(v)}catch(x){y.call(this,x);break}}try{d=Id.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,m=u.length;f<m;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Sr(this.defaults,t);const n=W0(t.baseURL,t.url);return F0(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Yi.prototype[t]=function(n,r){return this.request(Sr(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,s){return this.request(Sr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}Yi.prototype[t]=n(),Yi.prototype[t+"Form"]=n(!0)});const wi=Yi;class Vu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(s=>{r.subscribe(s),i=s}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,s){r.reason||(r.reason=new Ao(i,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Vu(function(o){t=o}),cancel:t}}}const Cv=Vu;function Sv(e){return function(n){return e.apply(null,n)}}function xv(e){return R.isObject(e)&&e.isAxiosError===!0}const Na={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Na).forEach(([e,t])=>{Na[t]=e});const kv=Na;function Z0(e){const t=new wi(e),n=L0(wi.prototype.request,t);return R.extend(n,wi.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Z0(Sr(e,o))},n}const je=Z0(Bu);je.Axios=wi;je.CanceledError=Ao;je.CancelToken=Cv;je.isCancel=V0;je.VERSION=Q0;je.toFormData=Cl;je.AxiosError=ce;je.Cancel=je.CanceledError;je.all=function(t){return Promise.all(t)};je.spread=Sv;je.isAxiosError=xv;je.mergeConfig=Sr;je.AxiosHeaders=Zt;je.formToJSON=e=>H0(R.isHTMLForm(e)?new FormData(e):e);je.HttpStatusCode=kv;je.default=je;const Rn=je,Wu="https://murmuring-plains-40389.herokuapp.com/api",Qu=Rn.create({baseURL:Wu});Qu.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>{console.error(e)});async function Ev(e){try{return(await Qu.post(`${Wu}/followships`,{id:e})).data}catch(t){console.error("[Follow User failed]: ",t)}}async function Tv(e){try{return(await Qu.delete(`${Wu}/followships/${e}`)).data}catch(t){console.error("[Unfollow User failed]: ",t)}}const Zu="https://murmuring-plains-40389.herokuapp.com/api",Ku=Rn.create({baseURL:Zu});Ku.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>{console.error(e)});async function _v(e){try{return(await Ku.post(`${Zu}/tweets/${e}/like`)).data}catch(t){console.error("[Like Tweet failed]: ",t)}}async function Pv(e){try{return(await Ku.post(`${Zu}/tweets/${e}/unlike`)).data}catch(t){console.error("[Unlike Tweet failed]: ",t)}}const K0=C.createContext(null),Lv={id:125,name:"user125",email:"user125@example.com",account:"user125",introduction:"Reach out if you want to talk about emerging tech, creating software products, or baseball.",avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/268.jpg",cover:"https://loremflickr.com/640/480/nature?lock=27430",isAdmin:!1,createdAt:"2023-03-20T15:44:34.000Z",updatedAt:"2023-03-20T15:44:34.000Z"},zd=[1,2,3];function wt(){return C.useContext(K0)}function Rv({children:e}){const[t,n]=C.useState(Lv),[r,o]=C.useState(zd),[i,l]=C.useState(zd),s=d=>{n(d)},a=async d=>{if(r.includes(d)){await Tv(d);const f=r.filter(m=>m!==d);o(f)}else{await Ev(d);const f=[...r,d];o(f)}},u=async d=>{if(i.includes(d)){await Pv(d);const f=i.filter(m=>m!==d);l(f)}else{await _v(d);const f=[...i,d];l(f)}};return c(K0.Provider,{value:{currentUser:t,userFollowings:r,userLikes:i,setCurrentUser:n,setUserFollowings:o,setUserLikes:l,handleFollow:a,handleLike:u,handleUserUpdate:s},children:e})}var Gi={},bv={get exports(){return Gi},set exports(e){Gi=e}},he={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=Symbol.for("react.element"),Gu=Symbol.for("react.portal"),kl=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),_l=Symbol.for("react.provider"),Pl=Symbol.for("react.context"),Ov=Symbol.for("react.server_context"),Ll=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Ol=Symbol.for("react.memo"),Nl=Symbol.for("react.lazy"),Nv=Symbol.for("react.offscreen"),Y0;Y0=Symbol.for("react.module.reference");function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yu:switch(e=e.type,e){case kl:case Tl:case El:case Rl:case bl:return e;default:switch(e=e&&e.$$typeof,e){case Ov:case Pl:case Ll:case Nl:case Ol:case _l:return e;default:return t}}case Gu:return t}}}he.ContextConsumer=Pl;he.ContextProvider=_l;he.Element=Yu;he.ForwardRef=Ll;he.Fragment=kl;he.Lazy=Nl;he.Memo=Ol;he.Portal=Gu;he.Profiler=Tl;he.StrictMode=El;he.Suspense=Rl;he.SuspenseList=bl;he.isAsyncMode=function(){return!1};he.isConcurrentMode=function(){return!1};he.isContextConsumer=function(e){return Ct(e)===Pl};he.isContextProvider=function(e){return Ct(e)===_l};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yu};he.isForwardRef=function(e){return Ct(e)===Ll};he.isFragment=function(e){return Ct(e)===kl};he.isLazy=function(e){return Ct(e)===Nl};he.isMemo=function(e){return Ct(e)===Ol};he.isPortal=function(e){return Ct(e)===Gu};he.isProfiler=function(e){return Ct(e)===Tl};he.isStrictMode=function(e){return Ct(e)===El};he.isSuspense=function(e){return Ct(e)===Rl};he.isSuspenseList=function(e){return Ct(e)===bl};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kl||e===Tl||e===El||e===Rl||e===bl||e===Nv||typeof e=="object"&&e!==null&&(e.$$typeof===Nl||e.$$typeof===Ol||e.$$typeof===_l||e.$$typeof===Pl||e.$$typeof===Ll||e.$$typeof===Y0||e.getModuleId!==void 0)};he.typeOf=Ct;(function(e){e.exports=he})(bv);function $v(e){function t(j,B,F,ne,T){for(var oe=0,I=0,ge=0,L=0,A,z,G=0,Y=0,Q,X=Q=A=0,V=0,q=0,ae=0,ee=0,H=F.length,Ce=H-1,xe,re="",Re="",Zl="",Kl="",tn;V<H;){if(z=F.charCodeAt(V),V===Ce&&I+L+ge+oe!==0&&(I!==0&&(z=I===47?10:47),L=ge=oe=0,H++,Ce++),I+L+ge+oe===0){if(V===Ce&&(0<q&&(re=re.replace(m,"")),0<re.trim().length)){switch(z){case 32:case 9:case 59:case 13:case 10:break;default:re+=F.charAt(V)}z=59}switch(z){case 123:for(re=re.trim(),A=re.charCodeAt(0),Q=1,ee=++V;V<H;){switch(z=F.charCodeAt(V)){case 123:Q++;break;case 125:Q--;break;case 47:switch(z=F.charCodeAt(V+1)){case 42:case 47:e:{for(X=V+1;X<Ce;++X)switch(F.charCodeAt(X)){case 47:if(z===42&&F.charCodeAt(X-1)===42&&V+2!==X){V=X+1;break e}break;case 10:if(z===47){V=X+1;break e}}V=X}}break;case 91:z++;case 40:z++;case 34:case 39:for(;V++<Ce&&F.charCodeAt(V)!==z;);}if(Q===0)break;V++}switch(Q=F.substring(ee,V),A===0&&(A=(re=re.replace(f,"").trim()).charCodeAt(0)),A){case 64:switch(0<q&&(re=re.replace(m,"")),z=re.charCodeAt(1),z){case 100:case 109:case 115:case 45:q=B;break;default:q=Le}if(Q=t(B,q,Q,z,T+1),ee=Q.length,0<M&&(q=n(Le,re,ae),tn=s(3,Q,q,B,U,Z,ee,z,T,ne),re=q.join(""),tn!==void 0&&(ee=(Q=tn.trim()).length)===0&&(z=0,Q="")),0<ee)switch(z){case 115:re=re.replace(_,l);case 100:case 109:case 45:Q=re+"{"+Q+"}";break;case 107:re=re.replace(p,"$1 $2"),Q=re+"{"+Q+"}",Q=se===1||se===2&&i("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=re+Q,ne===112&&(Q=(Re+=Q,""))}else Q="";break;default:Q=t(B,n(B,re,ae),Q,ne,T+1)}Zl+=Q,Q=ae=q=X=A=0,re="",z=F.charCodeAt(++V);break;case 125:case 59:if(re=(0<q?re.replace(m,""):re).trim(),1<(ee=re.length))switch(X===0&&(A=re.charCodeAt(0),A===45||96<A&&123>A)&&(ee=(re=re.replace(" ",":")).length),0<M&&(tn=s(1,re,B,j,U,Z,Re.length,ne,T,ne))!==void 0&&(ee=(re=tn.trim()).length)===0&&(re="\0\0"),A=re.charCodeAt(0),z=re.charCodeAt(1),A){case 0:break;case 64:if(z===105||z===99){Kl+=re+F.charAt(V);break}default:re.charCodeAt(ee-1)!==58&&(Re+=o(re,A,z,re.charCodeAt(2)))}ae=q=X=A=0,re="",z=F.charCodeAt(++V)}}switch(z){case 13:case 10:I===47?I=0:1+A===0&&ne!==107&&0<re.length&&(q=1,re+="\0"),0<M*te&&s(0,re,B,j,U,Z,Re.length,ne,T,ne),Z=1,U++;break;case 59:case 125:if(I+L+ge+oe===0){Z++;break}default:switch(Z++,xe=F.charAt(V),z){case 9:case 32:if(L+oe+I===0)switch(G){case 44:case 58:case 9:case 32:xe="";break;default:z!==32&&(xe=" ")}break;case 0:xe="\\0";break;case 12:xe="\\f";break;case 11:xe="\\v";break;case 38:L+I+oe===0&&(q=ae=1,xe="\f"+xe);break;case 108:if(L+I+oe+ie===0&&0<X)switch(V-X){case 2:G===112&&F.charCodeAt(V-3)===58&&(ie=G);case 8:Y===111&&(ie=Y)}break;case 58:L+I+oe===0&&(X=V);break;case 44:I+ge+L+oe===0&&(q=1,xe+="\r");break;case 34:case 39:I===0&&(L=L===z?0:L===0?z:L);break;case 91:L+I+ge===0&&oe++;break;case 93:L+I+ge===0&&oe--;break;case 41:L+I+oe===0&&ge--;break;case 40:if(L+I+oe===0){if(A===0)switch(2*G+3*Y){case 533:break;default:A=1}ge++}break;case 64:I+ge+L+oe+X+Q===0&&(Q=1);break;case 42:case 47:if(!(0<L+oe+ge))switch(I){case 0:switch(2*z+3*F.charCodeAt(V+1)){case 235:I=47;break;case 220:ee=V,I=42}break;case 42:z===47&&G===42&&ee+2!==V&&(F.charCodeAt(ee+2)===33&&(Re+=F.substring(ee,V+1)),xe="",I=0)}}I===0&&(re+=xe)}Y=G,G=z,V++}if(ee=Re.length,0<ee){if(q=B,0<M&&(tn=s(2,Re,q,j,U,Z,ee,ne,T,ne),tn!==void 0&&(Re=tn).length===0))return Kl+Re+Zl;if(Re=q.join(",")+"{"+Re+"}",se*ie!==0){switch(se!==2||i(Re,2)||(ie=0),ie){case 111:Re=Re.replace(S,":-moz-$1")+Re;break;case 112:Re=Re.replace(w,"::-webkit-input-$1")+Re.replace(w,"::-moz-$1")+Re.replace(w,":-ms-input-$1")+Re}ie=0}}return Kl+Re+Zl}function n(j,B,F){var ne=B.trim().split(x);B=ne;var T=ne.length,oe=j.length;switch(oe){case 0:case 1:var I=0;for(j=oe===0?"":j[0]+" ";I<T;++I)B[I]=r(j,B[I],F).trim();break;default:var ge=I=0;for(B=[];I<T;++I)for(var L=0;L<oe;++L)B[ge++]=r(j[L]+" ",ne[I],F).trim()}return B}function r(j,B,F){var ne=B.charCodeAt(0);switch(33>ne&&(ne=(B=B.trim()).charCodeAt(0)),ne){case 38:return B.replace(h,"$1"+j.trim());case 58:return j.trim()+B.replace(h,"$1"+j.trim());default:if(0<1*F&&0<B.indexOf("\f"))return B.replace(h,(j.charCodeAt(0)===58?"":"$1")+j.trim())}return j+B}function o(j,B,F,ne){var T=j+";",oe=2*B+3*F+4*ne;if(oe===944){j=T.indexOf(":",9)+1;var I=T.substring(j,T.length-1).trim();return I=T.substring(0,j).trim()+I+";",se===1||se===2&&i(I,1)?"-webkit-"+I+I:I}if(se===0||se===2&&!i(T,1))return T;switch(oe){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(K,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return I=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+T+"-ms-flex-pack"+I+T;case 1005:return g.test(T)?T.replace(v,":-webkit-")+T.replace(v,":-moz-")+T:T;case 1e3:switch(I=T.substring(13).trim(),B=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(B)){case 226:I=T.replace(E,"tb");break;case 232:I=T.replace(E,"tb-rl");break;case 220:I=T.replace(E,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+I+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(B=(T=j).length-10,I=(T.charCodeAt(B)===33?T.substring(0,B):T).substring(j.indexOf(":",7)+1).trim(),oe=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:T=T.replace(I,"-webkit-"+I)+";"+T;break;case 207:case 102:T=T.replace(I,"-webkit-"+(102<oe?"inline-":"")+"box")+";"+T.replace(I,"-webkit-"+I)+";"+T.replace(I,"-ms-"+I+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return I=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+I+"-ms-flex-"+I+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(b,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(b,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(N.test(j)===!0)return(I=j.substring(j.indexOf(":")+1)).charCodeAt(0)===115?o(j.replace("stretch","fill-available"),B,F,ne).replace(":fill-available",":stretch"):T.replace(I,"-webkit-"+I)+T.replace(I,"-moz-"+I.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,F+ne===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+T}return T}function i(j,B){var F=j.indexOf(B===1?":":"{"),ne=j.substring(0,B!==3?F:10);return F=j.substring(F+1,j.length-1),J(B!==2?ne:ne.replace(O,"$1"),F,B)}function l(j,B){var F=o(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return F!==B+";"?F.replace(P," or ($1)").substring(4):"("+B+")"}function s(j,B,F,ne,T,oe,I,ge,L,A){for(var z=0,G=B,Y;z<M;++z)switch(Y=Ae[z].call(d,j,G,F,ne,T,oe,I,ge,L,A)){case void 0:case!1:case!0:case null:break;default:G=Y}if(G!==B)return G}function a(j){switch(j){case void 0:case null:M=Ae.length=0;break;default:if(typeof j=="function")Ae[M++]=j;else if(typeof j=="object")for(var B=0,F=j.length;B<F;++B)a(j[B]);else te=!!j|0}return a}function u(j){return j=j.prefix,j!==void 0&&(J=null,j?typeof j!="function"?se=1:(se=2,J=j):se=0),u}function d(j,B){var F=j;if(33>F.charCodeAt(0)&&(F=F.trim()),fe=F,F=[fe],0<M){var ne=s(-1,B,F,F,U,Z,0,0,0,0);ne!==void 0&&typeof ne=="string"&&(B=ne)}var T=t(Le,F,B,0,0);return 0<M&&(ne=s(-2,T,F,F,U,Z,T.length,0,0,0),ne!==void 0&&(T=ne)),fe="",ie=0,Z=U=1,T}var f=/^\0+/g,m=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,x=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,S=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,b=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,N=/stretch|:\s*\w+\-(?:conte|avail)/,K=/([^-])(image-set\()/,Z=1,U=1,ie=0,se=1,Le=[],Ae=[],M=0,J=null,te=0,fe="";return d.use=a,d.set=u,e!==void 0&&u(e),d}var Av={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Iv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ud=Mv(function(e){return Iv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$a={},Dv={get exports(){return $a},set exports(e){$a=e}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=typeof Symbol=="function"&&Symbol.for,Xu=Fe?Symbol.for("react.element"):60103,Ju=Fe?Symbol.for("react.portal"):60106,$l=Fe?Symbol.for("react.fragment"):60107,Al=Fe?Symbol.for("react.strict_mode"):60108,Ml=Fe?Symbol.for("react.profiler"):60114,Il=Fe?Symbol.for("react.provider"):60109,Dl=Fe?Symbol.for("react.context"):60110,qu=Fe?Symbol.for("react.async_mode"):60111,jl=Fe?Symbol.for("react.concurrent_mode"):60111,zl=Fe?Symbol.for("react.forward_ref"):60112,Ul=Fe?Symbol.for("react.suspense"):60113,jv=Fe?Symbol.for("react.suspense_list"):60120,Fl=Fe?Symbol.for("react.memo"):60115,Bl=Fe?Symbol.for("react.lazy"):60116,zv=Fe?Symbol.for("react.block"):60121,Uv=Fe?Symbol.for("react.fundamental"):60117,Fv=Fe?Symbol.for("react.responder"):60118,Bv=Fe?Symbol.for("react.scope"):60119;function dt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xu:switch(e=e.type,e){case qu:case jl:case $l:case Ml:case Al:case Ul:return e;default:switch(e=e&&e.$$typeof,e){case Dl:case zl:case Bl:case Fl:case Il:return e;default:return t}}case Ju:return t}}}function G0(e){return dt(e)===jl}me.AsyncMode=qu;me.ConcurrentMode=jl;me.ContextConsumer=Dl;me.ContextProvider=Il;me.Element=Xu;me.ForwardRef=zl;me.Fragment=$l;me.Lazy=Bl;me.Memo=Fl;me.Portal=Ju;me.Profiler=Ml;me.StrictMode=Al;me.Suspense=Ul;me.isAsyncMode=function(e){return G0(e)||dt(e)===qu};me.isConcurrentMode=G0;me.isContextConsumer=function(e){return dt(e)===Dl};me.isContextProvider=function(e){return dt(e)===Il};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xu};me.isForwardRef=function(e){return dt(e)===zl};me.isFragment=function(e){return dt(e)===$l};me.isLazy=function(e){return dt(e)===Bl};me.isMemo=function(e){return dt(e)===Fl};me.isPortal=function(e){return dt(e)===Ju};me.isProfiler=function(e){return dt(e)===Ml};me.isStrictMode=function(e){return dt(e)===Al};me.isSuspense=function(e){return dt(e)===Ul};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$l||e===jl||e===Ml||e===Al||e===Ul||e===jv||typeof e=="object"&&e!==null&&(e.$$typeof===Bl||e.$$typeof===Fl||e.$$typeof===Il||e.$$typeof===Dl||e.$$typeof===zl||e.$$typeof===Uv||e.$$typeof===Fv||e.$$typeof===Bv||e.$$typeof===zv)};me.typeOf=dt;(function(e){e.exports=me})(Dv);var ec=$a,Hv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},X0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tc={};tc[ec.ForwardRef]=Wv;tc[ec.Memo]=X0;function Fd(e){return ec.isMemo(e)?X0:tc[e.$$typeof]||Hv}var Qv=Object.defineProperty,Zv=Object.getOwnPropertyNames,Bd=Object.getOwnPropertySymbols,Kv=Object.getOwnPropertyDescriptor,Yv=Object.getPrototypeOf,Hd=Object.prototype;function J0(e,t,n){if(typeof t!="string"){if(Hd){var r=Yv(t);r&&r!==Hd&&J0(e,r,n)}var o=Zv(t);Bd&&(o=o.concat(Bd(t)));for(var i=Fd(e),l=Fd(t),s=0;s<o.length;++s){var a=o[s];if(!Vv[a]&&!(n&&n[a])&&!(l&&l[a])&&!(i&&i[a])){var u=Kv(t,a);try{Qv(e,a,u)}catch{}}}}return e}var Gv=J0;function jt(){return(jt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Vd=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Aa=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Gi.typeOf(e)},Xi=Object.freeze([]),Sn=Object.freeze({});function ko(e){return typeof e=="function"}function Wd(e){return e.displayName||e.name||"Component"}function nc(e){return e&&typeof e.styledComponentId=="string"}var xr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rc=typeof window<"u"&&"HTMLElement"in window,Xv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Jv={};function Mo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var qv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&Mo(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var s=i;s<l;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,s=i;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Ci=new Map,Ji=new Map,to=1,ti=function(e){if(Ci.has(e))return Ci.get(e);for(;Ji.has(to);)to++;var t=to++;return Ci.set(e,t),Ji.set(t,e),t},ey=function(e){return Ji.get(e)},ty=function(e,t){t>=to&&(to=t+1),Ci.set(e,t),Ji.set(t,e)},ny="style["+xr+'][data-styled-version="5.3.9"]',ry=new RegExp("^"+xr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),oy=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},iy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var s=l.match(ry);if(s){var a=0|parseInt(s[1],10),u=s[2];a!==0&&(ty(u,a),oy(e,u,s[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(l)}}},ly=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},q0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var a=s.childNodes,u=a.length;u>=0;u--){var d=a[u];if(d&&d.nodeType===1&&d.hasAttribute(xr))return d}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(xr,"active"),r.setAttribute("data-styled-version","5.3.9");var l=ly();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},sy=function(){function e(n){var r=this.element=q0(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,s=i.length;l<s;l++){var a=i[l];if(a.ownerNode===o)return a}Mo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ay=function(){function e(n){var r=this.element=q0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),uy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Qd=rc,cy={isServer:!rc,useCSSOMInjection:!Xv},qi=function(){function e(n,r,o){n===void 0&&(n=Sn),r===void 0&&(r={}),this.options=jt({},cy,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&rc&&Qd&&(Qd=!1,function(i){for(var l=document.querySelectorAll(ny),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(xr)!=="active"&&(iy(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ti(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(jt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new uy(l):i?new sy(l):new ay(l),new qv(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ti(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(ti(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ti(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var s=ey(l);if(s!==void 0){var a=n.names.get(s),u=r.getGroup(l);if(a&&u&&a.size){var d=xr+".g"+l+'[id="'+s+'"]',f="";a!==void 0&&a.forEach(function(m){m.length>0&&(f+=m+",")}),i+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),dy=/(a)(d)/gi,Zd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ma(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zd(t%52)+n;return(Zd(t%52)+n).replace(dy,"$1-$2")}var lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ep=function(e){return lr(5381,e)};function tp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ko(n)&&!nc(n))return!1}return!0}var fy=ep("5.3.9"),py=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&tp(t),this.componentId=n,this.baseHash=lr(fy,n),this.baseStyle=r,qi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Hn(this.rules,t,n,r).join(""),s=Ma(lr(this.baseHash,l)>>>0);if(!n.hasNameForId(o,s)){var a=r(l,"."+s,void 0,o);n.insertRules(o,s,a)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,d=lr(this.baseHash,r.hash),f="",m=0;m<u;m++){var v=this.rules[m];if(typeof v=="string")f+=v;else if(v){var g=Hn(v,t,n,r),y=Array.isArray(g)?g.join(""):g;d=lr(d,y+m),f+=y}}if(f){var x=Ma(d>>>0);if(!n.hasNameForId(o,x)){var h=r(f,"."+x,void 0,o);n.insertRules(o,x,h)}i.push(x)}}return i.join(" ")},e}(),hy=/^\s*\/\/.*$/gm,my=[":","[",".","#"];function gy(e){var t,n,r,o,i=e===void 0?Sn:e,l=i.options,s=l===void 0?Sn:l,a=i.plugins,u=a===void 0?Xi:a,d=new $v(s),f=[],m=function(y){function x(h){if(h)try{y(h+"}")}catch{}}return function(h,p,w,S,E,_,P,b,O,N){switch(h){case 1:if(O===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(b===0)return p+"/*|*/";break;case 3:switch(b){case 102:case 112:return y(w[0]+p),"";default:return p+(N===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(y){f.push(y)}),v=function(y,x,h){return x===0&&my.indexOf(h[n.length])!==-1||h.match(o)?y:"."+t};function g(y,x,h,p){p===void 0&&(p="&");var w=y.replace(hy,""),S=x&&h?h+" "+x+" { "+w+" }":w;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(h||!x?"":x,S)}return d.use([].concat(u,[function(y,x,h){y===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},m,function(y){if(y===-2){var x=f;return f=[],x}}])),g.hash=u.length?u.reduce(function(y,x){return x.name||Mo(15),lr(y,x.name)},5381).toString():"",g}var np=Vn.createContext();np.Consumer;var rp=Vn.createContext(),vy=(rp.Consumer,new qi),Ia=gy();function op(){return C.useContext(np)||vy}function ip(){return C.useContext(rp)||Ia}var yy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ia);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return Mo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ia),this.name+t.hash},e}(),wy=/([A-Z])/,Cy=/([A-Z])/g,Sy=/^ms-/,xy=function(e){return"-"+e.toLowerCase()};function Kd(e){return wy.test(e)?e.replace(Cy,xy).replace(Sy,"-ms-"):e}var Yd=function(e){return e==null||e===!1||e===""};function Hn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,s=e.length;l<s;l+=1)(o=Hn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Yd(e))return"";if(nc(e))return"."+e.styledComponentId;if(ko(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return Hn(a,t,n,r)}var u;return e instanceof yy?n?(e.inject(n,r),e.getName(r)):e:Aa(e)?function d(f,m){var v,g,y=[];for(var x in f)f.hasOwnProperty(x)&&!Yd(f[x])&&(Array.isArray(f[x])&&f[x].isCss||ko(f[x])?y.push(Kd(x)+":",f[x],";"):Aa(f[x])?y.push.apply(y,d(f[x],x)):y.push(Kd(x)+": "+(v=x,(g=f[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in Av?String(g).trim():g+"px")+";"));return m?[m+" {"].concat(y,["}"]):y}(e):e.toString()}var Gd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function lp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ko(e)||Aa(e)?Gd(Hn(Vd(Xi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Gd(Hn(Vd(e,n)))}var sp=function(e,t,n){return n===void 0&&(n=Sn),e.theme!==n.theme&&e.theme||t||n.theme},ky=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ey=/(^-|-$)/g;function Ps(e){return e.replace(ky,"-").replace(Ey,"")}var ap=function(e){return Ma(ep(e)>>>0)};function ni(e){return typeof e=="string"&&!0}var Da=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ty=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function _y(e,t,n){var r=e[n];Da(t)&&Da(r)?up(r,t):e[n]=t}function up(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(Da(l))for(var s in l)Ty(s)&&_y(e,l[s],s)}return e}var oc=Vn.createContext();oc.Consumer;var Ls={};function cp(e,t,n){var r=nc(e),o=!ni(e),i=t.attrs,l=i===void 0?Xi:i,s=t.componentId,a=s===void 0?function(p,w){var S=typeof p!="string"?"sc":Ps(p);Ls[S]=(Ls[S]||0)+1;var E=S+"-"+ap("5.3.9"+S+Ls[S]);return w?w+"-"+E:E}(t.displayName,t.parentComponentId):s,u=t.displayName,d=u===void 0?function(p){return ni(p)?"styled."+p:"Styled("+Wd(p)+")"}(e):u,f=t.displayName&&t.componentId?Ps(t.displayName)+"-"+t.componentId:t.componentId||a,m=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,w,S){return e.shouldForwardProp(p,w,S)&&t.shouldForwardProp(p,w,S)}:e.shouldForwardProp);var g,y=new py(n,f,r?e.componentStyle:void 0),x=y.isStatic&&l.length===0,h=function(p,w){return function(S,E,_,P){var b=S.attrs,O=S.componentStyle,N=S.defaultProps,K=S.foldedComponentIds,Z=S.shouldForwardProp,U=S.styledComponentId,ie=S.target,se=function(ne,T,oe){ne===void 0&&(ne=Sn);var I=jt({},T,{theme:ne}),ge={};return oe.forEach(function(L){var A,z,G,Y=L;for(A in ko(Y)&&(Y=Y(I)),Y)I[A]=ge[A]=A==="className"?(z=ge[A],G=Y[A],z&&G?z+" "+G:z||G):Y[A]}),[I,ge]}(sp(E,C.useContext(oc),N)||Sn,E,b),Le=se[0],Ae=se[1],M=function(ne,T,oe,I){var ge=op(),L=ip(),A=T?ne.generateAndInjectStyles(Sn,ge,L):ne.generateAndInjectStyles(oe,ge,L);return A}(O,P,Le),J=_,te=Ae.$as||E.$as||Ae.as||E.as||ie,fe=ni(te),j=Ae!==E?jt({},E,{},Ae):E,B={};for(var F in j)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?B.as=j[F]:(Z?Z(F,Ud,te):!fe||Ud(F))&&(B[F]=j[F]));return E.style&&Ae.style!==E.style&&(B.style=jt({},E.style,{},Ae.style)),B.className=Array.prototype.concat(K,U,M!==U?M:null,E.className,Ae.className).filter(Boolean).join(" "),B.ref=J,C.createElement(te,B)}(g,p,w,x)};return h.displayName=d,(g=Vn.forwardRef(h)).attrs=m,g.componentStyle=y,g.displayName=d,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Xi,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(p){var w=t.componentId,S=function(_,P){if(_==null)return{};var b,O,N={},K=Object.keys(_);for(O=0;O<K.length;O++)b=K[O],P.indexOf(b)>=0||(N[b]=_[b]);return N}(t,["componentId"]),E=w&&w+"-"+(ni(p)?p:Ps(Wd(p)));return cp(p,jt({},S,{attrs:m,componentId:E}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?up({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&Gv(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var ja=function(e){return function t(n,r,o){if(o===void 0&&(o=Sn),!Gi.isValidElementType(r))return Mo(1,String(r));var i=function(){return n(r,o,lp.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,jt({},o,{},l))},i.attrs=function(l){return t(n,r,jt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(cp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ja[e]=ja(e)});var Py=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=tp(n),qi.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var l=i(Hn(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&qi.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Ly(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=lp.apply(void 0,[e].concat(n)),i="sc-global-"+ap(JSON.stringify(o)),l=new Py(o,i);function s(u){var d=op(),f=ip(),m=C.useContext(oc),v=C.useRef(d.allocateGSInstance(i)).current;return d.server&&a(v,u,d,m,f),C.useLayoutEffect(function(){if(!d.server)return a(v,u,d,m,f),function(){return l.removeStyles(v,d)}},[v,u,d,m,f]),null}function a(u,d,f,m,v){if(l.isStatic)l.renderStyles(u,Jv,f,v);else{var g=jt({},d,{theme:sp(d,m,s.defaultProps)});l.renderStyles(u,g,f,v)}}return Vn.memo(s)}const D=ja,sr={xs:"320px",sm:"768px",md:"992px",lg:"1200px"},ue={xs:`min-width: ${sr.xs}`,sm:`min-width: ${sr.sm}`,md:`min-width: ${sr.md}`,lg:`min-width: ${sr.lg}`},Ry=Ly`
  // css reset
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  #root, #__next {
    isolation: isolate;
  }
  // reset over

  :root {
    /* font-family */
    --ff-basic: 'Montserrat','Noto Sans TC', sans-serif;

    /* font-size */
    --fs-basic: 0.875rem; 
    --fs-secondary: 0.8rem;
    --fs-small: 0.75rem;
    --fs-h1: 3.75rem; 
    --fs-h2: 2.25rem; 
    --fs-h3: 1.5rem; 
    --fs-h4: 1.25rem; 
    --fs-h5: 1rem; 

    /* colors */
    --color-theme: #FF6600;
    --color-primary: #0062FF;
    --color-secondary: #6C757D;
    --color-success: #3DD598;
    --color-warning: #FFC542;
    --color-error: #FC5A5A;

    --color-light-orange: #FF974A;
    --color-light-blue: #50B5FF;
    --color-light-green: #82C43C;
    --color-purple: #A461D8;
    --color-pink: #FF9AD5;

    --color-gray-100: #FAFAFB;
    --color-gray-200: #F1F1F5;
    --color-gray-300: #E2E2EA;
    --color-gray-400: #D5D5DC;
    --color-gray-500: #B5B5BE;
    --color-gray-600: #92929D;
    --color-gray-700: #696974;
    --color-gray-800: #44444F;
    --color-gray-900: #171725;

    @media screen and (${ue.sm}) {
      /* font-size */
      --fs-basic: 1rem; 
      --fs-secondary: 0.875rem;
      --fs-small: 0.75rem;
      --fs-h1: 4.25rem;
      --fs-h2: 2.625rem;
      --fs-h3: 1.75rem;
      --fs-h4: 1.5rem;
      --fs-h5: 1.125rem;
    }
  }

  body {
    font-family: var(--ff-basic);
    font-size: var(--fs-basic);
  }

  ::-webkit-scrollbar-track-piece{
    background-color: #fff;
    border-radius: 0;
  }
  
  ::-webkit-scrollbar {
	  width: 8px;
	  height: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #999;
    border-radius: 4px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
  }

  ::-webkit-scrollbar-thumb:hover {
	  height:50px;
	  background-color:#9f9f9f;
	  border-radius:4px;
}
`,dp=D.div`
  max-width: 100%;
  margin: 0 auto;

  @media screen and (${ue.md}) {
    max-width: 960px;
    padding: unset;
  }

  @media screen and (${ue.lg}) {
    max-width: 1140px;
  }
`,fp=D(dp)`
  .fr3 {
    display: none;
  }
  @media screen and (${ue.md}) {
    display: grid;
    grid-template-columns: 1fr 4fr 3fr;
    ${e=>e.isPublic&&"grid-template-columns: 1fr 3fr 4fr;"}

    .fr3 {
      display: unset;
    }
  }

  @media screen and (${ue.lg}) {
    grid-template-columns: 1fr 3fr 1.75fr;
    ${e=>e.isPublic&&"grid-template-columns: 1.5fr 2.5fr 4fr;"}
  }
`,Io=e=>C.createElement("svg",{width:50,height:50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.6995 23.4709C30.6995 23.4709 23.2327 35.5781 17.1108 35.5781C6.40302 35.5781 16.3819 12.5132 24.1915 12.5132C29.6409 12.5132 30.6995 23.4709 30.6995 23.4709Z",fill:"#FF6600"}),C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M39.5723 38.6972C37.4451 40.9607 34.8198 42.6976 31.9044 43.7701C28.989 44.8426 25.8639 45.2213 22.7767 44.8761C19.6895 44.5309 16.7252 43.4713 14.1188 41.7813C11.5125 40.0914 9.33573 37.8175 7.76123 35.1401C9.5314 37.5477 12.5338 39.1527 16.803 39.1527C27.3199 39.1527 33.2899 30.98 33.2899 30.98C33.2899 30.98 33.8062 37.4392 39.5593 38.6972H39.5723Z",fill:"#FF6600"}),C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.7223 15.7451C44.2963 18.7527 45.0781 22.1116 44.9939 25.505C44.9096 28.8984 43.9621 32.2144 42.2407 35.1401C40.8792 34.3764 39.8725 33.1082 39.4379 31.609L37.1558 24.7724L42.7223 15.7451Z",fill:"#FF6600"}),C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.0031 5.01737C30.0185 5.01403 34.8513 6.89881 38.5398 10.2967L34.7521 16.4088C33.3811 12.843 30.5957 9.2729 25.1767 9.2729C14.0784 9.2729 5.85231 21.3888 5.85231 28.9846C5.84986 29.9669 5.97528 30.9454 6.22543 31.8953C5.11558 28.8725 4.75205 25.6265 5.16572 22.4331C5.57938 19.2398 6.75802 16.1934 8.60147 13.5531C10.4449 10.9127 12.8987 8.75634 15.7542 7.26726C18.6097 5.77818 21.7826 5.00039 25.0031 5V5.01737Z",fill:"#FF6600"})),pp=e=>C.createElement("svg",{width:22,height:21,viewBox:"0 0 22 21",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M21.46 5.5699L11.357 0.114902C11.134 -0.00509766 10.867 -0.00509766 10.644 0.114902L0.542993 5.5699C0.178993 5.7669 0.0429934 6.2219 0.239993 6.5869C0.374993 6.8369 0.633993 6.9799 0.899993 6.9799C1.01999 6.9799 1.14299 6.9499 1.25599 6.8899L2.07099 6.4499L3.69999 17.9629C3.91399 19.1779 5.00799 20.0249 6.35799 20.0249H15.64C16.992 20.0249 18.085 19.1769 18.303 17.9379L19.929 6.4479L20.747 6.8899C21.111 7.0829 21.567 6.9499 21.764 6.5859C21.96 6.2229 21.824 5.7679 21.46 5.5699ZM16.822 17.7029C16.715 18.3089 16.119 18.5249 15.642 18.5249H6.35999C5.87999 18.5249 5.28499 18.3089 5.18199 17.7269L3.47999 5.6899L11 1.6279L18.522 5.6879L16.822 17.7029Z",fill:"currentcolor"}),C.createElement("path",{d:"M7.21997 10.1838C7.21997 12.2678 8.91497 13.9638 11 13.9638C13.085 13.9638 14.78 12.2678 14.78 10.1838C14.78 8.09981 13.085 6.40381 11 6.40381C8.91497 6.40381 7.21997 8.09981 7.21997 10.1838ZM13.28 10.1838C13.28 11.4418 12.258 12.4638 11 12.4638C9.74197 12.4638 8.71997 11.4418 8.71997 10.1838C8.71997 8.92581 9.74197 7.90381 11 7.90381C12.258 7.90381 13.28 8.92581 13.28 10.1838Z",fill:"currentcolor"})),hp=e=>C.createElement("svg",{width:24,height:22,viewBox:"0 0 24 22",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M22.58 6.34986L12.475 0.896855C12.178 0.736855 11.821 0.736855 11.525 0.896855L1.42496 6.34986C0.938957 6.61386 0.757957 7.21986 1.01996 7.70586C1.19996 8.04086 1.54496 8.23086 1.89996 8.23086C2.05996 8.23086 2.22396 8.19286 2.37496 8.11086L3.10896 7.71486L4.69896 18.9649C4.91496 20.1789 6.00896 21.0269 7.35896 21.0269H16.641C17.991 21.0269 19.085 20.1789 19.303 18.9389L20.891 7.71386L21.628 8.11186C22.113 8.37486 22.72 8.19386 22.982 7.70786C23.245 7.22186 23.062 6.61486 22.578 6.35286L22.58 6.34986ZM12 14.4349C10.205 14.4349 8.74996 12.9799 8.74996 11.1849C8.74996 9.38986 10.205 7.93486 12 7.93486C13.795 7.93486 15.25 9.38986 15.25 11.1849C15.25 12.9799 13.795 14.4349 12 14.4349Z",fill:"currentcolor"})),mp=e=>C.createElement("svg",{width:18,height:21,viewBox:"0 0 18 21",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M8.99991 10.8158C10.3549 10.8158 11.8719 10.6658 12.8399 9.55976C13.6539 8.62976 13.9179 7.19176 13.6459 5.16776C13.2659 2.34276 11.5289 0.655762 8.99991 0.655762C6.47091 0.655762 4.73391 2.34276 4.35391 5.16976C4.08191 7.19176 4.3459 8.62976 5.1599 9.55976C6.1279 10.6668 7.64491 10.8158 8.99991 10.8158V10.8158ZM5.83991 5.36776C6.00191 4.16776 6.62691 2.15576 8.99991 2.15576C11.3729 2.15576 11.9979 4.16876 12.1599 5.36776C12.3669 6.91776 12.2169 7.99476 11.7099 8.57276C11.2549 9.09276 10.4439 9.31576 8.99991 9.31576C7.55591 9.31576 6.74491 9.09276 6.28991 8.57276C5.78291 7.99476 5.63291 6.91676 5.83991 5.36776ZM17.2799 18.2358C16.4029 14.7098 12.9979 12.2458 8.99991 12.2458C5.00191 12.2458 1.59691 14.7098 0.719905 18.2358C0.547905 18.9278 0.691905 19.6358 1.1149 20.1758C1.5229 20.6958 2.15491 20.9958 2.84791 20.9958H15.1519C15.8449 20.9958 16.4769 20.6958 16.8849 20.1758C17.3089 19.6358 17.4519 18.9288 17.2789 18.2358H17.2799ZM15.7039 19.2518C15.5779 19.4118 15.3879 19.4978 15.1519 19.4978H2.84791C2.61291 19.4978 2.42191 19.4128 2.29591 19.2518C2.15891 19.0778 2.11591 18.8398 2.17591 18.5978C2.88591 15.7428 5.69291 13.7478 8.99991 13.7478C12.3069 13.7478 15.1139 15.7418 15.8239 18.5978C15.8839 18.8398 15.8409 19.0778 15.7039 19.2518V19.2518Z",fill:"currentcolor"})),gp=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M12.225 12.1649C10.869 12.1649 9.35301 12.0149 8.38501 10.9089C7.57101 9.97891 7.30801 8.54091 7.58001 6.51691C7.96001 3.69091 9.69601 2.00391 12.226 2.00391C14.756 2.00391 16.493 3.69091 16.872 6.51691C17.144 8.54091 16.88 9.97691 16.066 10.9089C15.096 12.0149 13.581 12.1639 12.226 12.1639L12.225 12.1649ZM18.074 22.0149H6.37601C5.71301 22.0149 5.12601 21.7349 4.72601 21.2289C4.30401 20.6949 4.15001 19.9589 4.31601 19.2609C5.15001 15.7309 8.40201 13.2639 12.224 13.2639C16.046 13.2639 19.298 15.7299 20.134 19.2609C20.298 19.9589 20.144 20.6949 19.722 21.2279C19.322 21.7329 18.737 22.0129 18.074 22.0129V22.0149Z",fill:"currentcolor"})),by=e=>C.createElement("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M11 7.20996C8.90996 7.20996 7.20996 8.90996 7.20996 11C7.20996 13.09 8.90996 14.79 11 14.79C13.09 14.79 14.79 13.09 14.79 11C14.79 8.90996 13.09 7.20996 11 7.20996ZM11 13.29C9.73796 13.29 8.70996 12.264 8.70996 11C8.70996 9.73596 9.73996 8.70996 11 8.70996C12.26 8.70996 13.29 9.73596 13.29 11C13.29 12.264 12.262 13.29 11 13.29V13.29Z",fill:"currentcolor"}),C.createElement("path",{d:"M11.36 21.375H10.638C9.45505 21.375 8.48405 20.487 8.37605 19.311L8.36205 19.164C8.33705 18.877 8.15505 18.631 7.89005 18.52C7.60405 18.4 7.30805 18.455 7.09205 18.635L6.97605 18.732C6.10805 19.457 4.72305 19.395 3.91605 18.592L3.40605 18.082C2.57005 17.242 2.51005 15.928 3.26605 15.022L3.36405 14.904C3.55005 14.682 3.59405 14.381 3.48605 14.117C3.37605 13.845 3.12805 13.663 2.84005 13.637L2.69005 13.623C1.51005 13.516 0.623047 12.543 0.623047 11.361V10.639C0.623047 9.456 1.51105 8.485 2.68705 8.377L2.84305 8.363C3.12805 8.338 3.37305 8.156 3.48505 7.89C3.59505 7.62 3.55005 7.317 3.36505 7.095L3.27105 6.979C2.51405 6.071 2.57305 4.756 3.40805 3.919L3.92005 3.407C4.72405 2.603 6.10805 2.542 6.98005 3.267L7.09605 3.365C7.31405 3.549 7.62405 3.595 7.88605 3.487C8.15605 3.375 8.33805 3.129 8.36305 2.844L8.37705 2.691C8.48405 1.511 9.45705 0.625 10.639 0.625H11.361C12.544 0.625 13.515 1.513 13.623 2.689L13.637 2.845C13.662 3.13 13.843 3.375 14.109 3.485C14.386 3.602 14.689 3.547 14.903 3.368L15.023 3.266C15.89 2.543 17.277 2.604 18.083 3.406L18.593 3.918C19.429 4.756 19.489 6.071 18.733 6.978L18.633 7.096C18.445 7.316 18.399 7.618 18.51 7.884C18.622 8.154 18.87 8.334 19.156 8.362L19.308 8.376C20.488 8.483 21.375 9.456 21.375 10.638V11.361C21.375 12.544 20.487 13.515 19.311 13.623L19.156 13.637C18.872 13.661 18.626 13.842 18.516 14.107C18.403 14.379 18.449 14.681 18.633 14.902L18.733 15.022C19.489 15.927 19.429 17.242 18.593 18.082L18.083 18.592C17.276 19.396 15.893 19.456 15.023 18.732L14.908 18.636C14.691 18.453 14.378 18.406 14.118 18.514C13.845 18.628 13.663 18.874 13.638 19.16L13.624 19.31C13.517 20.483 12.544 21.37 11.362 21.37L11.36 21.375ZM7.58705 16.955C7.88705 16.955 8.18005 17.015 8.45705 17.13C9.24705 17.458 9.78105 18.184 9.85705 19.026L9.87105 19.173C9.90805 19.573 10.238 19.873 10.641 19.873H11.363C11.763 19.873 12.093 19.573 12.131 19.173L12.145 19.025C12.221 18.183 12.755 17.458 13.537 17.133C14.33 16.803 15.233 16.951 15.87 17.483L15.983 17.577C16.161 17.725 16.349 17.757 16.476 17.757C16.682 17.757 16.876 17.677 17.022 17.53L17.532 17.02C17.816 16.736 17.837 16.29 17.58 15.982L17.48 15.862C16.938 15.212 16.803 14.322 17.128 13.539C17.454 12.749 18.18 12.219 19.022 12.142L19.177 12.128C19.574 12.091 19.877 11.761 19.877 11.358V10.636C19.877 10.236 19.574 9.906 19.175 9.868L19.023 9.854C18.177 9.776 17.453 9.244 17.128 8.461C16.802 7.673 16.938 6.783 17.481 6.134L17.581 6.016C17.838 5.706 17.817 5.26 17.533 4.976L17.023 4.466C16.877 4.319 16.683 4.239 16.477 4.239C16.35 4.239 16.162 4.271 15.985 4.419L15.865 4.519C15.231 5.047 14.315 5.189 13.543 4.873C12.755 4.546 12.223 3.821 12.146 2.977L12.132 2.822C12.097 2.425 11.767 2.122 11.365 2.122H10.642C10.242 2.122 9.91205 2.425 9.87405 2.824L9.86005 2.976C9.78405 3.819 9.25205 4.544 8.47005 4.869C7.68305 5.195 6.77705 5.052 6.14005 4.519L6.02205 4.423C5.84205 4.273 5.65405 4.243 5.52705 4.243C5.32105 4.243 5.12705 4.323 4.98105 4.469L4.46905 4.979C4.18705 5.263 4.16605 5.709 4.42305 6.017L4.52305 6.135C5.06305 6.788 5.20005 7.679 4.87505 8.46C4.54805 9.248 3.82305 9.78 2.98005 9.857L2.82405 9.871C2.42705 9.908 2.12405 10.238 2.12405 10.641V11.363C2.12405 11.763 2.42705 12.093 2.82605 12.131L2.97605 12.145C3.82405 12.223 4.54905 12.757 4.87305 13.541C5.19805 14.327 5.06305 15.216 4.52005 15.866L4.42405 15.981C4.16405 16.291 4.18605 16.737 4.47005 17.021L4.98005 17.531C5.12605 17.678 5.32005 17.758 5.52605 17.758C5.65305 17.758 5.84105 17.728 6.01805 17.578L6.13405 17.482C6.54005 17.146 7.05705 16.958 7.58705 16.958V16.955Z",fill:"currentcolor"})),Oy=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.36 22.375H11.638C10.455 22.375 9.48405 21.487 9.37605 20.311L9.36205 20.164C9.33705 19.877 9.15505 19.631 8.89005 19.52C8.60405 19.4 8.30805 19.455 8.09205 19.635L7.97605 19.732C7.10805 20.457 5.72305 20.395 4.91605 19.592L4.40605 19.082C3.57005 18.242 3.51005 16.928 4.26605 16.022L4.36405 15.904C4.55005 15.682 4.59405 15.381 4.48605 15.117C4.37605 14.845 4.12805 14.663 3.84005 14.637L3.69005 14.623C2.51005 14.516 1.62305 13.543 1.62305 12.361V11.639C1.62305 10.456 2.51105 9.485 3.68705 9.377L3.84305 9.363C4.12805 9.338 4.37305 9.156 4.48505 8.89C4.59505 8.62 4.55005 8.317 4.36505 8.095L4.27105 7.979C3.51405 7.071 3.57305 5.756 4.40805 4.919L4.92005 4.407C5.72405 3.603 7.10805 3.542 7.98005 4.267L8.09605 4.365C8.31405 4.549 8.62405 4.595 8.88605 4.487C9.15605 4.375 9.33805 4.129 9.36305 3.844L9.37705 3.691C9.48405 2.511 10.457 1.625 11.639 1.625H12.361C13.544 1.625 14.515 2.513 14.623 3.689L14.637 3.845C14.662 4.13 14.843 4.375 15.109 4.485C15.386 4.602 15.689 4.547 15.903 4.368L16.023 4.266C16.89 3.543 18.277 3.604 19.083 4.406L19.593 4.918C20.429 5.756 20.489 7.071 19.733 7.978L19.633 8.096C19.445 8.316 19.399 8.618 19.51 8.884C19.622 9.154 19.87 9.334 20.156 9.362L20.308 9.376C21.488 9.483 22.375 10.456 22.375 11.638V12.361C22.375 13.544 21.487 14.515 20.311 14.623L20.156 14.637C19.872 14.661 19.626 14.842 19.516 15.107C19.403 15.379 19.449 15.681 19.633 15.902L19.733 16.022C20.489 16.927 20.429 18.242 19.593 19.082L19.083 19.592C18.276 20.396 16.893 20.456 16.023 19.732L15.908 19.636C15.691 19.453 15.378 19.406 15.118 19.514C14.845 19.628 14.663 19.874 14.638 20.16L14.624 20.31C14.517 21.483 13.544 22.37 12.362 22.37L12.36 22.375ZM8.20996 12C8.20996 9.90996 9.90996 8.20996 12 8.20996C14.09 8.20996 15.79 9.90996 15.79 12C15.79 14.09 14.09 15.79 12 15.79C9.90996 15.79 8.20996 14.09 8.20996 12ZM9.70996 12C9.70996 13.264 10.738 14.29 12 14.29C13.262 14.29 14.29 13.264 14.29 12C14.29 10.736 13.26 9.70996 12 9.70996C10.74 9.70996 9.70996 10.736 9.70996 12Z",fill:"currentcolor"})),vp=e=>C.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H8C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17C9 16.7348 8.89464 16.4804 8.70711 16.2929C8.51957 16.1054 8.26522 16 8 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.26522 2 8.51957 1.89464 8.70711 1.70711C8.89464 1.51957 9 1.26522 9 1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0H3Z",fill:"currentcolor"}),C.createElement("path",{d:"M12.293 4.29279C12.4805 4.10532 12.7348 4 13 4C13.2652 4 13.5195 4.10532 13.707 4.29279L17.707 8.29279C17.8945 8.48031 17.9998 8.73462 17.9998 8.99979C17.9998 9.26495 17.8945 9.51926 17.707 9.70679L13.707 13.7068C13.5184 13.8889 13.2658 13.9897 13.0036 13.9875C12.7414 13.9852 12.4906 13.88 12.3052 13.6946C12.1198 13.5092 12.0146 13.2584 12.0123 12.9962C12.01 12.734 12.1108 12.4814 12.293 12.2928L14.586 9.99979H7C6.73478 9.99979 6.48043 9.89443 6.29289 9.70689C6.10536 9.51936 6 9.265 6 8.99979C6 8.73457 6.10536 8.48022 6.29289 8.29268C6.48043 8.10514 6.73478 7.99979 7 7.99979H14.586L12.293 5.70679C12.1055 5.51926 12.0002 5.26495 12.0002 4.99979C12.0002 4.73462 12.1055 4.48031 12.293 4.29279Z",fill:"currentcolor"})),yp=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M8.8 7.2002H5.6V3.9002C5.6 3.5002 5.3 3.1002 4.8 3.1002C4.3 3.1002 4.1 3.5002 4.1 3.9002V7.2002H0.8C0.4 7.2002 0 7.5002 0 8.0002C0 8.5002 0.3 8.8002 0.8 8.8002H4.1V12.1002C4.1 12.5002 4.4 12.9002 4.9 12.9002C5.4 12.9002 5.7 12.6002 5.7 12.1002V8.7002H9C9.4 8.7002 9.8 8.4002 9.8 7.9002C9.8 7.4002 9.3 7.2002 8.8 7.2002ZM23.8 2.3002V2.2002H23.7C23.6 2.2002 14.5 3.4002 9.3 13.9002C5.5 21.5002 5.7 23.8002 6 23.8002C6.3 23.9002 9.4 17.3002 12.7 14.6002C17.9 13.5002 19.3 11.0002 19.3 11.0002C19.3 11.0002 17.8 11.2002 17.2 11.2002C16.4 11.2002 15.8 11.0002 15.5 10.9002C16.8 9.7002 17.9 9.4002 19 9.2002C19.9 9.0002 20.8 8.8002 22 8.0002C24.2 6.4002 23.9 2.5002 23.8 2.3002Z",fill:"currentcolor"})),Ny=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90599 18.782 5.65599 17.247 4.10299C15.872 2.70999 14.01 1.93999 12.005 1.92999H11.992C9.98798 1.93999 8.12597 2.70999 6.74997 4.10399C5.21597 5.65699 4.38197 7.90599 4.40397 10.438C4.44097 14.768 2.38397 16.405 2.30197 16.468C2.04197 16.661 1.93597 16.998 2.03697 17.306C2.13897 17.614 2.42697 17.821 2.74897 17.821H7.66897C7.77098 20.131 9.66597 21.981 11.999 21.981C14.332 21.981 16.225 20.131 16.326 17.821H21.248C21.57 17.821 21.858 17.615 21.958 17.307C22.061 17 21.955 16.662 21.695 16.469L21.697 16.468ZM12 20.478C10.495 20.478 9.26997 19.301 9.17197 17.82H14.828C14.728 19.3 13.505 20.48 12 20.48V20.478ZM4.37997 16.32C5.11997 15.188 5.92797 13.292 5.90397 10.424C5.88597 8.26399 6.54797 6.44199 7.81697 5.15699C8.90997 4.04999 10.397 3.43699 12 3.42999C13.603 3.43799 15.087 4.04999 16.18 5.15799C17.45 6.44299 18.113 8.26399 18.095 10.425C18.071 13.293 18.88 15.19 19.62 16.321H4.37997V16.32Z",fill:"currentcolor"})),$y=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90501 18.782 5.65601 17.247 4.10401C15.872 2.71101 14.01 1.94001 12.005 1.93201H11.992C9.98798 1.94001 8.12597 2.71201 6.74997 4.10401C5.21597 5.65701 4.38297 7.90601 4.40397 10.437C4.44097 14.769 2.38397 16.404 2.30197 16.467C2.04197 16.661 1.93597 16.997 2.03697 17.305C2.13797 17.613 2.42697 17.82 2.74997 17.82H7.24397C7.34397 20.364 9.43198 22.407 12 22.407C14.568 22.407 16.655 20.364 16.756 17.82H21.25C21.574 17.82 21.86 17.612 21.962 17.305C22.064 16.998 21.957 16.661 21.697 16.468ZM12 20.408C10.534 20.408 9.34298 19.261 9.24398 17.82H14.756C14.656 19.26 13.466 20.407 12 20.407V20.408Z",fill:"currentcolor"})),Ay=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M18.265 3.31394C14.815 -0.13606 9.19497 -0.13606 5.74497 3.31394C2.29497 6.75394 2.29497 12.3739 5.74497 15.8239C7.24497 17.3139 9.17497 18.2039 11.255 18.3839V22.5239C11.255 22.8339 11.455 23.1239 11.755 23.2239C11.835 23.2539 11.925 23.2739 12.005 23.2739C12.225 23.2739 12.445 23.1739 12.595 22.9839L19.085 14.8739C21.715 11.3839 21.355 6.40394 18.265 3.31394ZM7.70497 11.1839C7.70497 10.7739 8.03497 10.4339 8.45497 10.4339H12.505C12.915 10.4339 13.255 10.7739 13.255 11.1839C13.255 11.5939 12.915 11.9339 12.505 11.9339H8.45497C8.03497 11.9339 7.70497 11.5939 7.70497 11.1839ZM16.305 7.94394C16.305 8.36394 15.965 8.69394 15.555 8.69394H8.45497C8.03497 8.69394 7.70497 8.36394 7.70497 7.94394C7.70497 7.53394 8.03497 7.19394 8.45497 7.19394H15.555C15.965 7.19394 16.305 7.53394 16.305 7.94394Z",fill:"#FF6600"})),My=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M12.003 23.274C11.92 23.274 11.836 23.26 11.755 23.232C11.455 23.127 11.253 22.842 11.253 22.524V18.384C9.17299 18.212 7.23998 17.318 5.74698 15.824C2.29698 12.374 2.29698 6.76204 5.74698 3.31404C9.19699 -0.133955 14.809 -0.135955 18.259 3.31404C21.355 6.41105 21.709 11.384 19.079 14.879L12.589 22.991C12.443 23.173 12.226 23.273 12.002 23.273L12.003 23.274ZM12.003 2.22405C10.121 2.22405 8.23998 2.94105 6.80798 4.37405C3.94398 7.23705 3.94398 11.898 6.80798 14.764C8.19598 16.151 10.041 16.914 12.003 16.914C12.417 16.914 12.753 17.251 12.753 17.664V20.384L17.895 13.959C20.065 11.074 19.771 6.94505 17.199 4.37205C15.765 2.94205 13.883 2.22405 12.002 2.22405H12.003Z",fill:"currentcolor"}),C.createElement("path",{d:"M15.55 8.70007H8.44998C8.03698 8.70007 7.69998 8.36307 7.69998 7.95007C7.69998 7.53707 8.03698 7.20007 8.44998 7.20007H15.55C15.963 7.20007 16.3 7.53507 16.3 7.95007C16.3 8.36507 15.963 8.70007 15.55 8.70007ZM12.5 11.9381H8.44998C8.03698 11.9381 7.69998 11.6021 7.69998 11.1881C7.69998 10.7741 8.03698 10.4381 8.44998 10.4381H12.5C12.914 10.4381 13.25 10.7741 13.25 11.1881C13.25 11.6021 12.914 11.9381 12.5 11.9381Z",fill:"currentcolor"})),wp=D.nav`
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 2px solid var(--color-gray-200);
  background-color: #fff;
  z-index: 1;

  .logo,
  .logout {
    display: none;
  }

  ul.nav-links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 1rem;

    a:first-of-type {
      order: -2;
    }
    .tweet-icon-li {
      order: -1;
    }
  }

  @media screen and (${ue.md}) {
    height: 100vh;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem;
    border-top: unset;

    .logo {
      display: block;
      margin-bottom: 0.25rem;
    }

    .logout {
      display: flex;
    }

    ul.nav-links {
      display: unset;
      padding: unset;
    }
  }

  @media screen and (${ue.lg}) {
    align-items: unset;

    width: 10rem;
  }
`,Mt=D.li`
  cursor: pointer;
  color: var(--color-gray-800);

  .icon {
    :hover,
    .active & {
      color: var(--color-theme);
    }
  }

  span {
    display: none;
  }
  @media screen and (${ue.md}) {
    padding-top: 2rem;

    .icon {
      display: grid;
      place-items: center;
    }

    .tweet-icon {
      display: grid;
      place-items: center;

      .svg {
        display: grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        background-color: var(--color-theme);
        :hover {
          background-color: var(--color-light-orange);
        }
      }
    }

    &.logout {
      padding-bottom: 1rem;
    }
  }

  @media screen and (${ue.lg}) {
    display: flex;
    gap: 1rem;
    padding: 0.75rem 0.5rem;
    font-weight: 700;

    :hover,
    .active & {
      color: var(--color-theme);
    }

    span {
      display: block;
    }

    .icon {
      width: 20%;
    }

    .tweet-icon {
      display: none;
    }
  }
`,Iy=D.button`
  display: none;

  @media screen and (${ue.lg}) {
    display: block;
    cursor: pointer;
    width: 100%;
    margin: 1rem 0;
    padding: 0.5rem 0;
    border: none;
    border-radius: 2rem;
    color: white;
    background-color: var(--color-theme);

    :hover {
      background-color: var(--color-light-orange);
    }
  }
`;function Dy({tweetInput:e,currentUser:t,onChange:n,onAddTweet:r}){const{pathname:o}=yt(),[i,l]=C.useState(!1),s=bt(),a=()=>{l(!i)},u=()=>{localStorage.removeItem("token"),s("/login")};return k(Ne,{children:[k(wp,{children:[k("div",{children:[c("div",{className:"logo",children:c(Io,{})}),k("ul",{className:"nav-links",children:[c(Oe,{to:"/tweets",children:k(Mt,{children:[c("div",{className:"icon",children:o.includes("/tweets")&&!o.includes("/users")?c(hp,{}):c(pp,{})}),c("span",{children:"首頁"})]})}),c(Oe,{to:"/notification",children:k(Mt,{children:[c("div",{className:"icon",children:o.includes("/notification")?c($y,{}):c(Ny,{})}),c("span",{children:"通知"})]})}),c(Oe,{to:"/public",children:k(Mt,{children:[c("div",{className:"icon",children:o.includes("/public")?c(Ay,{}):c(My,{})}),c("span",{children:"公開聊天室"})]})}),c(Oe,{to:`/users/${t.id}/tweets`,className:o.includes(`users/${t.id}`)&&"active",children:k(Mt,{children:[c("div",{className:"icon",children:o.includes(`users/${t.id}`)?c(gp,{}):c(mp,{})}),c("span",{children:"個人資料"})]})}),c(Oe,{to:"/settings",children:k(Mt,{children:[c("div",{className:"icon",children:o.includes("/settings")?c(Oy,{}):c(by,{})}),c("span",{children:"設定"})]})}),c(Mt,{className:"tweet-icon-li",children:c("div",{className:"tweet-icon",children:c("div",{className:"svg",children:c(yp,{onClick:a})})})})]}),c(Iy,{onClick:a,children:"推文"})]}),c("ul",{children:k(Mt,{className:"logout",onClick:u,children:[c("div",{className:"icon",children:c(vp,{})}),c("span",{children:"登出"})]})})]}),i&&c(M9,{tweetInput:e,currentUser:t,onChange:n,onAddTweet:r,onClose:a})]})}function jy(){const{pathname:e}=yt(),t=bt(),n=()=>{localStorage.removeItem("adminToken"),t("/admin")};return k(wp,{children:[k("div",{children:[c("div",{className:"logo",children:c(Io,{})}),k("ul",{className:"nav-links",children:[c(Oe,{to:"/admin/tweets",children:k(Mt,{children:[c("div",{className:"icon",children:e.includes("/tweets")?c(hp,{}):c(pp,{})}),c("span",{children:"推文清單"})]})}),c(Oe,{to:"/admin/users",className:e.includes("uses")&&"active",children:k(Mt,{children:[c("div",{className:"icon",children:e.includes("users")?c(gp,{}):c(mp,{})}),c("span",{children:"使用者列表"})]})})]})]}),c("ul",{children:k(Mt,{className:"logout",onClick:n,children:[c("div",{className:"icon",children:c(vp,{className:"logoutIcon"})}),c("span",{children:"登出"})]})})]})}var Cp={},kr={};Object.defineProperty(kr,"__esModule",{value:!0});kr.cssValue=kr.parseLengthAndUnit=void 0;var zy={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Sp(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return zy[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}kr.parseLengthAndUnit=Sp;function Uy(e){var t=Sp(e);return"".concat(t.value).concat(t.unit)}kr.cssValue=Uy;var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0});Hl.createAnimation=void 0;var Fy=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,l=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return i&&i.insertRule(l,0),r};Hl.createAnimation=Fy;var el=Pt&&Pt.__assign||function(){return el=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},el.apply(this,arguments)},By=Pt&&Pt.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),Hy=Pt&&Pt.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Vy=Pt&&Pt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&By(t,e,n);return Hy(t,e),t},Wy=Pt&&Pt.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};Object.defineProperty(Cp,"__esModule",{value:!0});var ri=Vy(C),Rs=kr,Qy=Hl,Zy=(0,Qy.createAnimation)("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Ky(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,o=r===void 0?"#000000":r,i=e.speedMultiplier,l=i===void 0?1:i,s=e.cssOverride,a=s===void 0?{}:s,u=e.size,d=u===void 0?15:u,f=e.margin,m=f===void 0?2:f,v=Wy(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=el({display:"inherit"},a),y=function(x){return{display:"inline-block",backgroundColor:o,width:(0,Rs.cssValue)(d),height:(0,Rs.cssValue)(d),margin:(0,Rs.cssValue)(m),borderRadius:"100%",animation:"".concat(Zy," ").concat(.7/l,"s ").concat(x%2?"0s":"".concat(.35/l,"s")," infinite linear"),animationFillMode:"both"}};return n?ri.createElement("span",el({style:g},v),ri.createElement("span",{style:y(1)}),ri.createElement("span",{style:y(2)}),ri.createElement("span",{style:y(3)})):null}var bn=Cp.default=Ky;const Ot="https://murmuring-plains-40389.herokuapp.com/api",Nt=Rn.create({baseURL:Ot});Nt.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>{console.error(e)});async function Yy(){try{return(await Nt.get(`${Ot}/users/current_user`)).data}catch(e){return console.error("[Get CurrentUser failed]: ",e),e.response.data.status}}async function Gy(e){try{return(await Nt.get(`${Ot}/users/${e}`)).data}catch(t){console.error("[Get User Data failed]: ",t)}}async function Xy(e){try{return(await Nt.get(`${Ot}/users/${e}/tweets`)).data}catch(t){console.error("[Get User Tweets failed]: ",t)}}async function Jy(e){try{return(await Nt.get(`${Ot}/users/${e}/replied_tweets`)).data}catch(t){console.error("[Get User Replies failed]: ",t)}}async function xp(e){try{return(await Nt.get(`${Ot}/users/${e}/likes`)).data}catch(t){console.error("[Get User Likes failed]: ",t)}}async function qy(e){try{return(await Nt.get(`${Ot}/users/${e}/followers`)).data}catch(t){console.error("[Get User Followers failed]: ",t)}}async function kp(e){try{return(await Nt.get(`${Ot}/users/${e}/followings`)).data}catch(t){console.error("[Get User Followings failed]: ",t)}}async function e9(){try{return(await Nt.get(`${Ot}/users/top?limit=10`)).data}catch(t){console.error("[Get Top Users failed]: ",t)}}async function t9({id:e,account:t,name:n,email:r,password:o,checkPassword:i}){try{const l=await Nt.put(`${Ot}/users/${e}/setting`,{account:t,name:n,email:r,password:o,checkPassword:i}),{data:s,status:a}=l;return{data:s,status:a}}catch(l){console.error("[Change User Information failed]: ",l)}}async function n9(e){const{id:t,name:n,introduction:r,avatar:o,cover:i}=e,l={headers:{Accept:"application/json","Content-Type":"multipart/form-data"}};try{const s=await Nt.put(`${Ot}/users/${t}`,{name:n,introduction:r,avatar:o,cover:i},l),{data:a,status:u}=s;return{data:a,status:u}}catch(s){console.error("[Change User Profile failed]: ",s)}}const r9=D.aside`
  height: calc(100vh - 2rem);
  overflow-y: scroll;
  margin: 1rem;
  border-radius: 1rem;
  background-color: var(--color-gray-100);

  h2 {
    padding: 1.5rem;
    border-bottom: 1px solid var(--color-gray-300);
    font-size: var(--fs-h4);
  }
`,o9=D.div`
  height: 25rem;
  display: grid;
  place-items: center;
`,i9=D.li`
  padding: 1rem;
  display: grid;
  grid-template-columns: 50px auto auto;
  align-items: center;

  :hover {
    background-color: var(--color-gray-200);
  }

  .avatar {
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  .user {
    margin-left: 0.5rem;
    width: 8rem;

    &.active {
      width: 7rem;
    }

    b {
      width: 100%;
      margin-bottom: -0.35rem;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      color: var(--color-gray-600);
    }
  }

  button {
    cursor: pointer;
    margin: 0.2rem 0;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: var(--color-theme);
    background-color: var(--color-gray-100);

    &.active,
    &:hover {
      color: white;
      background-color: var(--color-theme);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.75;
    }
  }
`;function l9(){const e=C.useRef(null),[t,n]=C.useState(!0),[r,o]=C.useState([]),i=r.map(l=>c(s9,{user:l},l.id));return C.useEffect(()=>{e.current.offsetHeight>window.innerHeight&&(e.current.style.height="calc(100vh - 2rem)")},[]),C.useEffect(()=>{(async()=>{try{const s=await e9();o(s),n(!1)}catch(s){console.error(s)}})()},[]),k(r9,{ref:e,children:[c("h2",{children:"推薦跟隨"}),t?c(o9,{children:c("div",{children:c(bn,{color:"var(--color-theme)"})})}):c("ul",{children:i})]})}function s9({user:e}){const{userFollowings:t,handleFollow:n}=wt(),{id:r,name:o,account:i,avatar:l}=e,s=t.includes(r),[a,u]=C.useState(!1),d=async()=>{u(!0),await n(r),u(!1)};return k(i9,{isFollowing:!0,children:[c("div",{className:"avatar",children:c(Oe,{to:`/users/${r}/tweets`,children:c("img",{src:l,alt:"avatar"})})}),k("div",{className:`user ${s?"active":void 0}`,children:[c("b",{children:o}),k("p",{children:["@",i]})]}),c("button",{className:`${s?"active":void 0} ${a?"disabled":void 0}`,type:"button",onClick:d,children:s?"正在跟隨":"跟隨"})]})}const a9=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M21.13 11.358L3.614 2.10798C3.324 1.95598 2.974 2.00598 2.741 2.23398C2.511 2.45998 2.448 2.81098 2.591 3.10198L6.953 12.022L2.591 20.942C2.448 21.234 2.511 21.585 2.741 21.81C2.886 21.95 3.074 22.022 3.264 22.022C3.384 22.022 3.504 21.994 3.614 21.935L21.131 12.685C21.376 12.555 21.531 12.299 21.531 12.021C21.531 11.743 21.376 11.489 21.131 11.359L21.13 11.358ZM4.948 4.50998L17.752 11.272H8.255L4.948 4.51198V4.50998ZM8.255 12.77H17.753L4.948 19.535L8.255 12.772V12.77Z",fill:"#FF6600"})),u9=D.div`
  height: calc(100vh - 68px);
  width: 100%;

  .chat-body {
    height: calc(100vh - (68px + 64px));
    border: 1px solid var(--color-gray-200);

    .message-container {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
    }

    .message {
      display: flex;
      background-color: pink;
      padding: 10px;

      .avatar {
        min-width: 60px;

        img {
          width: 50px;
          height: 50px;
          aspect-ratio: 1/1;
          margin-right: 0.5rem;
          border-radius: 50%;
          overflow: hidden;
        }
      }

      .message-content {
        display: flex;
        align-items: center;
        min-height: 40px;
        margin-right: 5px;
        margin-left: 5px;
        padding-right: 1rem;
        padding-left: 1rem;
        background-color: var(--color-gray-200);
        border-radius: 25px 25px 25px 0px;
        //自動換行
        overflow-wrap: break-word;
        word-wrap: break-word;
      }

      .message-meta {
        justify-content: flex-end;
        margin-top: 2px;
        margin-left: 5px;
        color: var(--color-gray-700);
        font-weight: 400;
        font-size: 0.8rem;
      }
    }
  }

  .chat-footer {
    height: 64px;
    border: 1px solid var(--color-gray-200);
    border-top: none;
    padding: 1rem;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: 0;
      background-color: var(--color-gray-300);
      border-radius: 30px;
      :focus {
        outline: none;
      }
    }

    .icon {
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }
`;function c9(){const{currentUser:e}=wt(),{name:t,avatar:n}=e,[r,o]=C.useState(""),[i,l]=C.useState([]),s=async()=>{r!==""&&`${new Date(Date.now()).getHours()}${new Date(Date.now()).getMinutes()}`};return k(Ne,{children:[c(en,{headerText:"公開聊天室"}),c(u9,{children:k("div",{className:"chat-window",children:[c("div",{className:"chat-body",children:i.map((a,u)=>k("div",{className:"message",children:[c("div",{className:"avatar",children:c("img",{src:n,alt:"avatar"})}),k("div",{children:[c("div",{className:"message-content",children:c("p",{children:a.message})}),c("div",{className:"message-meta",children:c("p",{id:"time",children:a.time})})]})]},u))}),k("div",{className:"chat-footer",children:[c("input",{type:"text",placeholder:"輸入訊息...",value:r,onChange:a=>{o(a.target.value)}}),c("div",{className:"icon",children:c(a9,{onClick:s})})]})]})})]})}const br="https://murmuring-plains-40389.herokuapp.com/api",Or=Rn.create({baseURL:br});Or.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>{console.error(e)});async function d9(){try{return(await Or.get(`${br}/tweets`)).data}catch(e){console.error("[Get Tweets failed]: ",e)}}async function f9(e){try{return(await Or.get(`${br}/tweets/${e}`)).data}catch(t){console.error("[Get Single Tweet failed]: ",t)}}async function p9(e){const{description:t}=e;try{return(await Or.post(`${br}/tweets`,{description:t})).data}catch(n){return console.error("[Create Tweets failed]: ",n),n.response.data.status}}async function h9(e){try{return(await Or.get(`${br}/tweets/${e}/replies`)).data}catch(t){console.error("[Get Replies failed]: ",t)}}async function m9(e){const{id:t,comment:n}=e;try{return(await Or.post(`${br}/tweets/${t}/replies`,{comment:n})).data}catch(r){console.error("[Create Reply failed]: ",r)}}function g9(){const{currentUser:e,setCurrentUser:t,setUserFollowings:n,setUserLikes:r}=wt(),[o,i]=C.useState([]),[l,s]=C.useState(""),{pathname:a}=yt(),u=a.includes("public"),d=m=>{s(m)},f=async()=>{try{const m=await p9({description:l});if(m==="error")return;const v=[{id:m.tweetInput.id,description:m.tweetInput.description,createdAt:m.tweetInput.createdAt,replyCounts:0,likeCounts:0,isLiked:0,User:{id:e.id,account:e.account,name:e.name,avatar:e.avatar}},...o];return setTimeout(()=>{i(v),s("")},3e3),{status:"ok"}}catch(m){return console.log(m),{status:"error"}}};return C.useEffect(()=>{(async()=>{try{const v=await Yy(),y=(await kp(v.id)).map(p=>p.id),h=(await xp(v.id)).map(p=>p.id);t({...v,introduction:v.introduction??"I like alpha camp",avatar:v.avatar??"http://placekitten.com/g/500/500",cover:v.cover??"https://loremflickr.com/640/480/nature?lock=27430"}),n(y),r(h)}catch(v){console.error(v)}})()},[]),k(fp,{isPublic:u,children:[c("div",{className:"fr1",children:c(Dy,{tweetInput:l,currentUser:e,onChange:d,onAddTweet:f})}),c("div",{className:"fr2",children:c(Du,{context:{currentUser:e,tweets:o,setTweets:i,tweetInput:l,handleInputChange:d,handleAddTweet:f}})}),k("div",{className:"fr3",children:[!a.includes("settings")&&!a.includes("public")&&c(l9,{}),u&&c(c9,{})]})]})}const v9=D(fp)`
  @media screen and (${ue.md}) {
    grid-template-columns: 1fr 7fr;
  }

  @media screen and (${ue.lg}) {
    grid-template-columns: 1fr 4.5fr;
  }
`;function y9(){return k(v9,{children:[c("div",{className:"fr1",children:c(jy,{})}),c("div",{className:"fr2",children:c(Du,{})})]})}const w9=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M4 12L10 18L20 6",stroke:"#82C43C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),C9=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.8513 6.45104C18.9368 6.36563 19.0047 6.26421 19.051 6.15258C19.0973 6.04094 19.1212 5.92127 19.1213 5.80041C19.1213 5.67954 19.0976 5.55985 19.0514 5.44815C19.0052 5.33646 18.9375 5.23496 18.8521 5.14944C18.7667 5.06393 18.6653 4.99607 18.5536 4.94975C18.442 4.90343 18.3223 4.87955 18.2015 4.87947C18.0806 4.8794 17.9609 4.90313 17.8492 4.94931C17.7375 4.9955 17.636 5.06323 17.5505 5.14864L12.0001 10.699L6.45129 5.14864C6.27858 4.97593 6.04433 4.87891 5.80009 4.87891C5.55584 4.87891 5.3216 4.97593 5.14889 5.14864C4.97618 5.32135 4.87915 5.55559 4.87915 5.79984C4.87915 6.04409 4.97618 6.27833 5.14889 6.45104L10.6993 11.9998L5.14889 17.5486C5.06337 17.6342 4.99553 17.7357 4.94925 17.8474C4.90297 17.9591 4.87915 18.0789 4.87915 18.1998C4.87915 18.3208 4.90297 18.4405 4.94925 18.5523C4.99553 18.664 5.06337 18.7655 5.14889 18.851C5.3216 19.0237 5.55584 19.1208 5.80009 19.1208C5.92103 19.1208 6.04078 19.097 6.15251 19.0507C6.26425 19.0044 6.36577 18.9366 6.45129 18.851L12.0001 13.3006L17.5505 18.851C17.7232 19.0235 17.9574 19.1204 18.2015 19.1202C18.4455 19.1201 18.6796 19.0229 18.8521 18.8502C19.0246 18.6775 19.1214 18.4434 19.1213 18.1993C19.1211 17.9552 19.024 17.7211 18.8513 17.5486L13.3009 11.9998L18.8513 6.45104Z",fill:"#FC5A5A"})),S9=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M10.5 18.8438C10.5 19.2416 10.658 19.6231 10.9393 19.9044C11.2206 20.1857 11.6022 20.3438 12 20.3438C12.3978 20.3438 12.7794 20.1857 13.0607 19.9044C13.342 19.6231 13.5 19.2416 13.5 18.8438C13.5 18.4459 13.342 18.0644 13.0607 17.7831C12.7794 17.5018 12.3978 17.3438 12 17.3438C11.6022 17.3438 11.2206 17.5018 10.9393 17.7831C10.658 18.0644 10.5 18.4459 10.5 18.8438ZM11.25 14.9062H12.75C12.8531 14.9062 12.9375 14.8219 12.9375 14.7188V3.84375C12.9375 3.74062 12.8531 3.65625 12.75 3.65625H11.25C11.1469 3.65625 11.0625 3.74062 11.0625 3.84375V14.7188C11.0625 14.8219 11.1469 14.9062 11.25 14.9062Z",fill:"#FFC542"})),x9=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M10.5 5.25C10.5 5.64782 10.658 6.02936 10.9393 6.31066C11.2206 6.59196 11.6022 6.75 12 6.75C12.3978 6.75 12.7794 6.59196 13.0607 6.31066C13.342 6.02936 13.5 5.64782 13.5 5.25C13.5 4.85218 13.342 4.47064 13.0607 4.18934C12.7794 3.90804 12.3978 3.75 12 3.75C11.6022 3.75 11.2206 3.90804 10.9393 4.18934C10.658 4.47064 10.5 4.85218 10.5 5.25ZM12.75 9.1875H11.25C11.1469 9.1875 11.0625 9.27187 11.0625 9.375V20.25C11.0625 20.3531 11.1469 20.4375 11.25 20.4375H12.75C12.8531 20.4375 12.9375 20.3531 12.9375 20.25V9.375C12.9375 9.27187 12.8531 9.1875 12.75 9.1875Z",fill:"#50B5FF"})),k9={success:c(w9,{}),error:c(C9,{}),warning:c(S9,{}),info:c(x9,{})},E9={success:"var(--color-light-green)",error:"var(--color-error)",warning:"var(--color-warning)",info:"var(--color-light-blue)"},T9=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;
  width: 250px;
  height: 75px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  background-color: white;
  font-size: var(--fs-h5);
  font-weight: 700;

  .icon {
    border: 2px solid ${e=>e.borderColor[e.type]};
    border-radius: 50%;
    padding: 0.25rem;
  }

  @media screen and (${ue.md}) {
    width: 400px;
    height: 100px;

    .icon {
      padding: 0.75rem;
    }
  }
`;function Rt({type:e,message:t}){return k(T9,{borderColor:E9,type:e,children:[c("p",{children:t}),c("div",{className:"icon",children:k9[e]})]})}const _9=D.button`
  width: 100%;
  margin: 2rem 0 1rem 0;
  padding: 0.375rem 0;
  border: none;
  border-radius: 30px;
  color: #fff;
  background-color: var(--color-theme);
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: var(--color-light-orange);
  }
  @media screen and (${ue.sm}) {
    width: 50%;
  }
`;function ic({name:e,onClick:t}){return c(_9,{onClick:t,children:e})}function Ep(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ep(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Tp(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ep(e))&&(r&&(r+=" "),r+=t);return r}const P9=D.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: var(--color-gray-100);
`,L9=D.label`
  padding: 0.125rem 0.625rem;
  font-size: var(--fs-secondary);
  color: var(--color-gray-700);
`,R9=D.input`
  padding: 0.125rem 0.625rem;
  border: none;
  background-color: var(--color-gray-100);
  line-height: 1.6rem;
  font-size: var(--fs-basic);
  ::-webkit-input-placeholder {
    color: var(--color-gray-500);
  }
  border-bottom: 2px solid var(--color-gray-700);
  :focus {
    border-bottom: 2px solid var(--color-light-blue);
    outline: none;
  }
  :hover {
    border-bottom: 2px solid var(--color-light-blue);
  }
  &.error {
    border-bottom: 2px solid var(--color-error);
  }
`,b9=D.div`
  position: relative;
`,_p=D.div`
  text-align: end;
  color: var(--color-gray-700);
  margin-top: 0.5rem;
`,O9=D.div`
  position: absolute;
  top: 0;
  bottom: 0;
  text-align: end;
  color: var(--color-error);
`;function Ge({type:e,label:t,placeholder:n,value:r,onChange:o,InputLength:i,onKeyDown:l}){return k(Ne,{children:[k(P9,{children:[c(L9,{children:t}),c(R9,{className:Tp("",{error:t==="名稱"&&i>50}),type:e||"text",placeholder:n,value:r,onChange:s=>{o(s.target.value)},onKeyDown:l})]}),k(b9,{children:[i>0&&k(_p,{children:[i,"/50"]}),i>50&&c(O9,{children:"字數超出上限！"})]})]})}const Eo=e=>C.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z",fill:"currentcolor"})),lc=e=>C.createElement("svg",{width:17,height:14,viewBox:"0 0 17 14",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z",fill:"currentcolor"}));function N9(e){let t=Math.floor(e/1e3),n=Math.floor(t/60),r=Math.floor(n/60);const o=Math.floor(r/24);return t=t%60,n=n%60,r=r%24,o>0?`${o} 天`:r>0?`${r} 小時`:n>0?`${n} 分鐘`:`${t} 秒`}function Vl(e){const t=new Date(Date.parse(e)),r=new Date-t;return N9(r)}function $9(e){const t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),i=t.getHours(),l=i>12?"下午":"上午",s=t.getMinutes(),a=`${n}年${r}月${o}日`,u=`${l} ${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`;return{convertedDate:a,convertedTime:u}}const Pp=D.div`
  position: absolute;
  z-index: 5;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`,Lp=D.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;

  .close {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--color-gray-200);

    button {
      all: unset;
      cursor: pointer;
    }

    .cross-icon {
      display: none;
    }

    .submit-btn {
      cursor: pointer;
      padding: 0.5rem 1rem;
      margin-left: 1rem;
      border: 1px solid var(--color-theme);
      border-radius: 3.125rem;
      color: white;
      background-color: var(--color-theme);
      font-size: var(--fs-basic);

      :hover {
        border: 1px solid var(--color-light-orange);
        background-color: var(--color-light-orange);
      }

      &.disabled {
        pointer-events: none;
        opacity: 0.75;
      }
    }
  }

  @media screen and (${ue.md}) {
    position: absolute;
    inset: 3.5rem 0;
    width: 650px;
    height: ${e=>e.reply?"450px":"300px"};
    margin: 0 auto;
    border-radius: 1rem;

    .close {
      display: unset;
      justify-content: unset;
      padding: 1rem;
      color: var(--color-theme);

      .cross-icon {
        display: block;
      }

      .goback-icon {
        display: none;
      }

      .submit-btn {
        display: none;
      }
    }
  }
`,Rp=D.div`
  flex: 1;
  padding: 1rem;
  padding-right: 1.5rem;
  display: grid;
  grid-template-columns: calc(50px + 0.75rem) 1fr;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      all: unset;
      flex: 1;
      align-self: flex-start;
      width: 100%;
      margin-block: 1rem;
    }

    .submit {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    span {
      color: var(--color-secondary);
      &.error {
        color: var(--color-error);
      }
    }

    button {
      display: none;
    }
  }

  @media screen and (${ue.md}) {
    form {
      align-items: flex-end;
      margin-top: 0.75rem;

      textarea {
        width: calc(100% - 1rem);
        margin-block: unset;
      }

      .submit {
        margin-bottom: unset;
      }

      button {
        all: unset;
        cursor: pointer;
        padding: 0.5rem 1rem;
        margin-left: 1rem;
        border: 1px solid var(--color-theme);
        border-radius: 3.125rem;
        color: white;
        background-color: var(--color-theme);
        font-size: var(--fs-basic);

        :hover {
          border: 1px solid var(--color-light-orange);
          background-color: var(--color-light-orange);
        }
        &.disabled {
          pointer-events: none;
          opacity: 0.75;
        }
      }
    }
  }
`,A9=D.div`
  display: grid;
  grid-template-columns: calc(50px + 0.75rem) 1fr;
  padding: 1rem;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  .user {
    b {
      margin-right: 0.25rem;
    }
    span {
      color: var(--color-secondary);
      font-size: var(--fs-secondary);
    }
  }

  .content {
    margin-block: 0.5rem;
    color: var(--color-gray-900);
    position: relative;

    &::after {
      content: '';
      width: 2px;
      height: 110%;
      position: absolute;
      top: calc((50px / 2) + 0.5rem);
      left: calc(-0.75rem - 25px);
      background-color: var(--color-gray-500);
    }
  }

  .reply-to {
    color: var(--color-secondary);

    .account {
      margin-left: 0.25rem;
      color: var(--color-theme);
    }
  }

  @media screen and (${ue.md}) {
    .content {
      &::after {
        height: 125%;
      }
    }
  }
`;function M9({tweetInput:e,currentUser:t,onClose:n,onChange:r,onAddTweet:o}){const{avatar:i}=t,[l,s]=C.useState(null),[a,u]=C.useState(!1),d=async m=>{if(m.key==="Enter"){if(u(!0),!e.trim().length){s("內容不可空白"),u(!1),setTimeout(()=>{s(null)},1e3);return}if(e.length>140){s("字數不可超過 140 字"),u(!1),setTimeout(()=>{s(null)},1e3);return}const{status:v}=await o();v==="ok"&&setTimeout(()=>{u(!1),s(null),n()},2e3)}},f=async m=>{if(m.preventDefault(),u(!0),!e.trim().length){s("內容不可空白"),u(!1),setTimeout(()=>{s(null)},1e3);return}if(e.length>140){s("字數不可超過 140 字"),u(!1),setTimeout(()=>{s(null)},1e3);return}const{status:v}=await o();v==="ok"&&setTimeout(()=>{u(!1),s(null),n()},2e3)};return C.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]),c(Pp,{children:k(Lp,{children:[k("div",{className:"close",children:[k("button",{type:"button",onClick:n,children:[c(Eo,{className:"cross-icon"}),c(lc,{className:"goback-icon"})]}),c("button",{className:`submit-btn ${a?"disabled":void 0}`,type:"submit",onClick:f,children:a?"送出中...":"推文"})]}),k(Rp,{children:[c("img",{src:i,alt:"avatar"}),k("form",{children:[c("textarea",{name:"tweet",id:"tweet-input",type:"text",placeholder:"有什麼新鮮事？",value:e,onChange:m=>{r==null||r(m.target.value)},onKeyDown:d}),k("div",{className:"submit",children:[c("span",{children:`${e.length}/140`}),k("div",{children:[c("span",{className:l?"error":void 0,children:l}),c("button",{className:a?"disabled":void 0,type:"submit",onClick:f,children:a?"送出中...":"推文"})]})]})]})]})]})})}function I9({tweet:e,currentUser:t,replyInput:n,onChange:r,onAddReply:o,onClose:i}){const{avatar:l}=t,{User:s,createdAt:a,description:u}=e,d=Vl(a),[f,m]=C.useState(!1),[v,g]=C.useState(null),y=async h=>{if(h.key==="Enter"){if(m(!0),!n.trim().length){g("內容不可空白"),m(!1);return}if(n.length>140){g("字數不可超過 140 字"),m(!1);return}const{status:p}=await o();p==="ok"&&setTimeout(()=>{m(!1),g(null),i()},2e3)}},x=async h=>{if(h.preventDefault(),m(!0),!n.trim().length){g("內容不可空白"),m(!1),setTimeout(()=>{g(null)},1e3);return}if(n.length>140){g("字數不可超過 140 字"),m(!1),setTimeout(()=>{g(null)},1e3);return}const{status:p}=await o();p==="ok"&&setTimeout(()=>{m(!1),g(null),i()},2e3)};return C.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]),c(Pp,{children:k(Lp,{reply:!0,children:[k("div",{className:"close",children:[k("button",{type:"button",onClick:i,children:[c(Eo,{className:"cross-icon"}),c(lc,{className:"goback-icon"})]}),c("button",{className:`submit-btn ${f?"disabled":void 0}`,type:"submit",onClick:x,children:f?"送出中...":"回覆"})]}),k(A9,{children:[c("img",{src:s.avatar,alt:"avatar"}),k("div",{children:[k("div",{className:"user",children:[c("b",{children:s.name}),k("span",{children:["@",s.account]}),c("span",{children:"．"}),c("span",{children:d})]}),c("p",{className:"content",children:u}),k("div",{className:"reply-to",children:[c("span",{children:"回覆給"}),k("span",{className:"account",children:["@",s.account]})]})]})]}),k(Rp,{children:[c("img",{src:l,alt:"avatar"}),k("form",{children:[c("textarea",{className:"reply-textarea",name:"reply",id:"reply-content",value:n,placeholder:"推你的回覆",onChange:h=>{r==null||r(h.target.value)},onKeyDown:y}),k("div",{className:"submit",children:[c("span",{children:`${n.length}/140`}),k("div",{children:[c("span",{className:v?"error":void 0,children:v}),c("button",{className:`submit-btn ${f?"disabled":void 0}`,type:"submit",onClick:x,children:f?"送出中...":"回覆"})]})]})]})]})]})})}var tl={},D9={get exports(){return tl},set exports(e){tl=e}};(function(e,t){(function(r,o){e.exports=o(C)})(Pt,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(s,a)=>{a.match=g,a.parse=y;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,d=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,v=/(dpi|dpcm|dppx)?$/;function g(w,S){return y(w).some(function(E){var _=E.inverse,P=E.type==="all"||S.type===E.type;if(P&&_||!(P||_))return!1;var b=E.expressions.every(function(O){var N=O.feature,K=O.modifier,Z=O.value,U=S[N];if(!U)return!1;switch(N){case"orientation":case"scan":return U.toLowerCase()===Z.toLowerCase();case"width":case"height":case"device-width":case"device-height":Z=p(Z),U=p(U);break;case"resolution":Z=h(Z),U=h(U);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":Z=x(Z),U=x(U);break;case"grid":case"color":case"color-index":case"monochrome":Z=parseInt(Z,10)||1,U=parseInt(U,10)||0;break}switch(K){case"min":return U>=Z;case"max":return U<=Z;default:return U===Z}});return b&&!_||!b&&_})}function y(w){return w.split(",").map(function(S){S=S.trim();var E=S.match(u),_=E[1],P=E[2],b=E[3]||"",O={};return O.inverse=!!_&&_.toLowerCase()==="not",O.type=P?P.toLowerCase():"all",b=b.match(/\([^\)]+\)/g)||[],O.expressions=b.map(function(N){var K=N.match(d),Z=K[1].toLowerCase().match(f);return{modifier:Z[1],feature:Z[2],value:K[2]}}),O})}function x(w){var S=Number(w),E;return S||(E=w.match(/^(\d+)\s*\/\s*(\d+)$/),S=E[1]/E[2]),S}function h(w){var S=parseFloat(w),E=String(w).match(v)[1];switch(E){case"dpcm":return S/2.54;case"dppx":return S*96;default:return S}}function p(w){var S=parseFloat(w),E=String(w).match(m)[1];switch(E){case"em":return S*16;case"rem":return S*16;case"cm":return S*96/2.54;case"mm":return S*96/2.54/10;case"in":return S*96;case"pt":return S*72;case"pc":return S*72/12;default:return S}}},"./node_modules/hyphenate-style-name/index.js":(s,a,u)=>{u.r(a),u.d(a,{default:()=>y});var d=/[A-Z]/g,f=/^ms-/,m={};function v(x){return"-"+x.toLowerCase()}function g(x){if(m.hasOwnProperty(x))return m[x];var h=x.replace(d,v);return m[x]=f.test(h)?"-"+h:h}const y=g},"./node_modules/matchmediaquery/index.js":(s,a,u)=>{var d=u("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function m(g,y,x){var h=this;if(f&&!x){var p=f.call(window,g);this.matches=p.matches,this.media=p.media,p.addListener(E)}else this.matches=d(g,y),this.media=g;this.addListener=w,this.removeListener=S,this.dispose=_;function w(P){p&&p.addListener(P)}function S(P){p&&p.removeListener(P)}function E(P){h.matches=P.matches,h.media=P.media}function _(){p&&p.removeListener(E)}}function v(g,y,x){return new m(g,y,x)}s.exports=v},"./node_modules/object-assign/index.js":s=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;function f(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}function m(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var g={},y=0;y<10;y++)g["_"+String.fromCharCode(y)]=y;var x=Object.getOwnPropertyNames(g).map(function(p){return g[p]});if(x.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(p){h[p]=p}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=m()?Object.assign:function(v,g){for(var y,x=f(v),h,p=1;p<arguments.length;p++){y=Object(arguments[p]);for(var w in y)u.call(y,w)&&(x[w]=y[w]);if(a){h=a(y);for(var S=0;S<h.length;S++)d.call(y,h[S])&&(x[h[S]]=y[h[S]])}}return x}},"./node_modules/prop-types/checkPropTypes.js":(s,a,u)=>{var d=function(){};{var f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},v=u("./node_modules/prop-types/lib/has.js");d=function(y){var x="Warning: "+y;typeof console<"u"&&console.error(x);try{throw new Error(x)}catch{}}}function g(y,x,h,p,w){for(var S in y)if(v(y,S)){var E;try{if(typeof y[S]!="function"){var _=Error((p||"React class")+": "+h+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}E=y[S](x,S,p,h,null,f)}catch(b){E=b}if(E&&!(E instanceof Error)&&d((p||"React class")+": type specification of "+h+" `"+S+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in m)){m[E.message]=!0;var P=w?w():"";d("Failed "+h+" type: "+E.message+(P??""))}}}g.resetWarningCache=function(){m={}},s.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(s,a,u)=>{var d=u("./node_modules/react-is/index.js"),f=u("./node_modules/object-assign/index.js"),m=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),v=u("./node_modules/prop-types/lib/has.js"),g=u("./node_modules/prop-types/checkPropTypes.js"),y=function(){};y=function(h){var p="Warning: "+h;typeof console<"u"&&console.error(p);try{throw new Error(p)}catch{}};function x(){return null}s.exports=function(h,p){var w=typeof Symbol=="function"&&Symbol.iterator,S="@@iterator";function E(L){var A=L&&(w&&L[w]||L[S]);if(typeof A=="function")return A}var _="<<anonymous>>",P={array:K("array"),bigint:K("bigint"),bool:K("boolean"),func:K("function"),number:K("number"),object:K("object"),string:K("string"),symbol:K("symbol"),any:Z(),arrayOf:U,element:ie(),elementType:se(),instanceOf:Le,node:te(),objectOf:M,oneOf:Ae,oneOfType:J,shape:j,exact:B};function b(L,A){return L===A?L!==0||1/L===1/A:L!==L&&A!==A}function O(L,A){this.message=L,this.data=A&&typeof A=="object"?A:{},this.stack=""}O.prototype=Error.prototype;function N(L){var A={},z=0;function G(Q,X,V,q,ae,ee,H){if(q=q||_,ee=ee||V,H!==m){if(p){var Ce=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Ce.name="Invariant Violation",Ce}else if(typeof console<"u"){var xe=q+":"+V;!A[xe]&&z<3&&(y("You are manually calling a React.PropTypes validation function for the `"+ee+"` prop on `"+q+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),A[xe]=!0,z++)}}return X[V]==null?Q?X[V]===null?new O("The "+ae+" `"+ee+"` is marked as required "+("in `"+q+"`, but its value is `null`.")):new O("The "+ae+" `"+ee+"` is marked as required in "+("`"+q+"`, but its value is `undefined`.")):null:L(X,V,q,ae,ee)}var Y=G.bind(null,!1);return Y.isRequired=G.bind(null,!0),Y}function K(L){function A(z,G,Y,Q,X,V){var q=z[G],ae=T(q);if(ae!==L){var ee=oe(q);return new O("Invalid "+Q+" `"+X+"` of type "+("`"+ee+"` supplied to `"+Y+"`, expected ")+("`"+L+"`."),{expectedType:L})}return null}return N(A)}function Z(){return N(x)}function U(L){function A(z,G,Y,Q,X){if(typeof L!="function")return new O("Property `"+X+"` of component `"+Y+"` has invalid PropType notation inside arrayOf.");var V=z[G];if(!Array.isArray(V)){var q=T(V);return new O("Invalid "+Q+" `"+X+"` of type "+("`"+q+"` supplied to `"+Y+"`, expected an array."))}for(var ae=0;ae<V.length;ae++){var ee=L(V,ae,Y,Q,X+"["+ae+"]",m);if(ee instanceof Error)return ee}return null}return N(A)}function ie(){function L(A,z,G,Y,Q){var X=A[z];if(!h(X)){var V=T(X);return new O("Invalid "+Y+" `"+Q+"` of type "+("`"+V+"` supplied to `"+G+"`, expected a single ReactElement."))}return null}return N(L)}function se(){function L(A,z,G,Y,Q){var X=A[z];if(!d.isValidElementType(X)){var V=T(X);return new O("Invalid "+Y+" `"+Q+"` of type "+("`"+V+"` supplied to `"+G+"`, expected a single ReactElement type."))}return null}return N(L)}function Le(L){function A(z,G,Y,Q,X){if(!(z[G]instanceof L)){var V=L.name||_,q=ge(z[G]);return new O("Invalid "+Q+" `"+X+"` of type "+("`"+q+"` supplied to `"+Y+"`, expected ")+("instance of `"+V+"`."))}return null}return N(A)}function Ae(L){if(!Array.isArray(L))return arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array."),x;function A(z,G,Y,Q,X){for(var V=z[G],q=0;q<L.length;q++)if(b(V,L[q]))return null;var ae=JSON.stringify(L,function(H,Ce){var xe=oe(Ce);return xe==="symbol"?String(Ce):Ce});return new O("Invalid "+Q+" `"+X+"` of value `"+String(V)+"` "+("supplied to `"+Y+"`, expected one of "+ae+"."))}return N(A)}function M(L){function A(z,G,Y,Q,X){if(typeof L!="function")return new O("Property `"+X+"` of component `"+Y+"` has invalid PropType notation inside objectOf.");var V=z[G],q=T(V);if(q!=="object")return new O("Invalid "+Q+" `"+X+"` of type "+("`"+q+"` supplied to `"+Y+"`, expected an object."));for(var ae in V)if(v(V,ae)){var ee=L(V,ae,Y,Q,X+"."+ae,m);if(ee instanceof Error)return ee}return null}return N(A)}function J(L){if(!Array.isArray(L))return y("Invalid argument supplied to oneOfType, expected an instance of array."),x;for(var A=0;A<L.length;A++){var z=L[A];if(typeof z!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+I(z)+" at index "+A+"."),x}function G(Y,Q,X,V,q){for(var ae=[],ee=0;ee<L.length;ee++){var H=L[ee],Ce=H(Y,Q,X,V,q,m);if(Ce==null)return null;Ce.data&&v(Ce.data,"expectedType")&&ae.push(Ce.data.expectedType)}var xe=ae.length>0?", expected one of type ["+ae.join(", ")+"]":"";return new O("Invalid "+V+" `"+q+"` supplied to "+("`"+X+"`"+xe+"."))}return N(G)}function te(){function L(A,z,G,Y,Q){return F(A[z])?null:new O("Invalid "+Y+" `"+Q+"` supplied to "+("`"+G+"`, expected a ReactNode."))}return N(L)}function fe(L,A,z,G,Y){return new O((L||"React class")+": "+A+" type `"+z+"."+G+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+Y+"`.")}function j(L){function A(z,G,Y,Q,X){var V=z[G],q=T(V);if(q!=="object")return new O("Invalid "+Q+" `"+X+"` of type `"+q+"` "+("supplied to `"+Y+"`, expected `object`."));for(var ae in L){var ee=L[ae];if(typeof ee!="function")return fe(Y,Q,X,ae,oe(ee));var H=ee(V,ae,Y,Q,X+"."+ae,m);if(H)return H}return null}return N(A)}function B(L){function A(z,G,Y,Q,X){var V=z[G],q=T(V);if(q!=="object")return new O("Invalid "+Q+" `"+X+"` of type `"+q+"` "+("supplied to `"+Y+"`, expected `object`."));var ae=f({},z[G],L);for(var ee in ae){var H=L[ee];if(v(L,ee)&&typeof H!="function")return fe(Y,Q,X,ee,oe(H));if(!H)return new O("Invalid "+Q+" `"+X+"` key `"+ee+"` supplied to `"+Y+"`.\nBad object: "+JSON.stringify(z[G],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(L),null,"  "));var Ce=H(V,ee,Y,Q,X+"."+ee,m);if(Ce)return Ce}return null}return N(A)}function F(L){switch(typeof L){case"number":case"string":case"undefined":return!0;case"boolean":return!L;case"object":if(Array.isArray(L))return L.every(F);if(L===null||h(L))return!0;var A=E(L);if(A){var z=A.call(L),G;if(A!==L.entries){for(;!(G=z.next()).done;)if(!F(G.value))return!1}else for(;!(G=z.next()).done;){var Y=G.value;if(Y&&!F(Y[1]))return!1}}else return!1;return!0;default:return!1}}function ne(L,A){return L==="symbol"?!0:A?A["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&A instanceof Symbol:!1}function T(L){var A=typeof L;return Array.isArray(L)?"array":L instanceof RegExp?"object":ne(A,L)?"symbol":A}function oe(L){if(typeof L>"u"||L===null)return""+L;var A=T(L);if(A==="object"){if(L instanceof Date)return"date";if(L instanceof RegExp)return"regexp"}return A}function I(L){var A=oe(L);switch(A){case"array":case"object":return"an "+A;case"boolean":case"date":case"regexp":return"a "+A;default:return A}}function ge(L){return!L.constructor||!L.constructor.name?_:L.constructor.name}return P.checkPropTypes=g,P.resetWarningCache=g.resetWarningCache,P.PropTypes=P,P}},"./node_modules/prop-types/index.js":(s,a,u)=>{{var d=u("./node_modules/react-is/index.js"),f=!0;s.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(d.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":s=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=a},"./node_modules/prop-types/lib/has.js":s=>{s.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(s,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,d=u?Symbol.for("react.element"):60103,f=u?Symbol.for("react.portal"):60106,m=u?Symbol.for("react.fragment"):60107,v=u?Symbol.for("react.strict_mode"):60108,g=u?Symbol.for("react.profiler"):60114,y=u?Symbol.for("react.provider"):60109,x=u?Symbol.for("react.context"):60110,h=u?Symbol.for("react.async_mode"):60111,p=u?Symbol.for("react.concurrent_mode"):60111,w=u?Symbol.for("react.forward_ref"):60112,S=u?Symbol.for("react.suspense"):60113,E=u?Symbol.for("react.suspense_list"):60120,_=u?Symbol.for("react.memo"):60115,P=u?Symbol.for("react.lazy"):60116,b=u?Symbol.for("react.block"):60121,O=u?Symbol.for("react.fundamental"):60117,N=u?Symbol.for("react.responder"):60118,K=u?Symbol.for("react.scope"):60119;function Z(H){return typeof H=="string"||typeof H=="function"||H===m||H===p||H===g||H===v||H===S||H===E||typeof H=="object"&&H!==null&&(H.$$typeof===P||H.$$typeof===_||H.$$typeof===y||H.$$typeof===x||H.$$typeof===w||H.$$typeof===O||H.$$typeof===N||H.$$typeof===K||H.$$typeof===b)}function U(H){if(typeof H=="object"&&H!==null){var Ce=H.$$typeof;switch(Ce){case d:var xe=H.type;switch(xe){case h:case p:case m:case g:case v:case S:return xe;default:var re=xe&&xe.$$typeof;switch(re){case x:case w:case P:case _:case y:return re;default:return Ce}}case f:return Ce}}}var ie=h,se=p,Le=x,Ae=y,M=d,J=w,te=m,fe=P,j=_,B=f,F=g,ne=v,T=S,oe=!1;function I(H){return oe||(oe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ge(H)||U(H)===h}function ge(H){return U(H)===p}function L(H){return U(H)===x}function A(H){return U(H)===y}function z(H){return typeof H=="object"&&H!==null&&H.$$typeof===d}function G(H){return U(H)===w}function Y(H){return U(H)===m}function Q(H){return U(H)===P}function X(H){return U(H)===_}function V(H){return U(H)===f}function q(H){return U(H)===g}function ae(H){return U(H)===v}function ee(H){return U(H)===S}a.AsyncMode=ie,a.ConcurrentMode=se,a.ContextConsumer=Le,a.ContextProvider=Ae,a.Element=M,a.ForwardRef=J,a.Fragment=te,a.Lazy=fe,a.Memo=j,a.Portal=B,a.Profiler=F,a.StrictMode=ne,a.Suspense=T,a.isAsyncMode=I,a.isConcurrentMode=ge,a.isContextConsumer=L,a.isContextProvider=A,a.isElement=z,a.isForwardRef=G,a.isFragment=Y,a.isLazy=Q,a.isMemo=X,a.isPortal=V,a.isProfiler=q,a.isStrictMode=ae,a.isSuspense=ee,a.isValidElementType=Z,a.typeOf=U})()},"./node_modules/react-is/index.js":(s,a,u)=>{s.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(s,a,u)=>{u.r(a),u.d(a,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>d});function d(m,v){if(m===v)return!0;if(!m||!v)return!1;var g=Object.keys(m),y=Object.keys(v),x=g.length;if(y.length!==x)return!1;for(var h=0;h<x;h++){var p=g[h];if(m[p]!==v[p]||!Object.prototype.hasOwnProperty.call(v,p))return!1}return!0}function f(m,v){if(m===v)return!0;if(!m||!v)return!1;var g=m.length;if(v.length!==g)return!1;for(var y=0;y<g;y++)if(m[y]!==v[y])return!1;return!0}},"./src/Component.ts":function(s,a,u){var d=this&&this.__rest||function(g,y){var x={};for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&y.indexOf(h)<0&&(x[h]=g[h]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,h=Object.getOwnPropertySymbols(g);p<h.length;p++)y.indexOf(h[p])<0&&Object.prototype.propertyIsEnumerable.call(g,h[p])&&(x[h[p]]=g[h[p]]);return x},f=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(a,"__esModule",{value:!0});var m=f(u("./src/useMediaQuery.ts")),v=function(g){var y=g.children,x=g.device,h=g.onChange,p=d(g,["children","device","onChange"]),w=(0,m.default)(p,x,h);return typeof y=="function"?y(w):w?y:null};a.default=v},"./src/Context.ts":(s,a,u)=>{Object.defineProperty(a,"__esModule",{value:!0});var d=u("react"),f=(0,d.createContext)(void 0);a.default=f},"./src/index.ts":function(s,a,u){var d=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var f=d(u("./src/useMediaQuery.ts"));a.useMediaQuery=f.default;var m=d(u("./src/Component.ts"));a.default=m.default;var v=d(u("./src/toQuery.ts"));a.toQuery=v.default;var g=d(u("./src/Context.ts"));a.Context=g.default},"./src/mediaQuery.ts":function(s,a,u){var d=this&&this.__assign||function(){return d=Object.assign||function(S){for(var E,_=1,P=arguments.length;_<P;_++){E=arguments[_];for(var b in E)Object.prototype.hasOwnProperty.call(E,b)&&(S[b]=E[b])}return S},d.apply(this,arguments)},f=this&&this.__rest||function(S,E){var _={};for(var P in S)Object.prototype.hasOwnProperty.call(S,P)&&E.indexOf(P)<0&&(_[P]=S[P]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,P=Object.getOwnPropertySymbols(S);b<P.length;b++)E.indexOf(P[b])<0&&Object.prototype.propertyIsEnumerable.call(S,P[b])&&(_[P[b]]=S[P[b]]);return _},m=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(a,"__esModule",{value:!0});var v=m(u("./node_modules/prop-types/index.js")),g=v.default.oneOfType([v.default.string,v.default.number]),y={all:v.default.bool,grid:v.default.bool,aural:v.default.bool,braille:v.default.bool,handheld:v.default.bool,print:v.default.bool,projection:v.default.bool,screen:v.default.bool,tty:v.default.bool,tv:v.default.bool,embossed:v.default.bool},x={orientation:v.default.oneOf(["portrait","landscape"]),scan:v.default.oneOf(["progressive","interlace"]),aspectRatio:v.default.string,deviceAspectRatio:v.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:v.default.bool,colorIndex:v.default.bool,monochrome:v.default.bool,resolution:g,type:Object.keys(y)};x.type;var h=f(x,["type"]),p=d({minAspectRatio:v.default.string,maxAspectRatio:v.default.string,minDeviceAspectRatio:v.default.string,maxDeviceAspectRatio:v.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:v.default.number,maxColor:v.default.number,minColorIndex:v.default.number,maxColorIndex:v.default.number,minMonochrome:v.default.number,maxMonochrome:v.default.number,minResolution:g,maxResolution:g},h),w=d(d({},y),p);a.default={all:w,types:y,matchers:x,features:p}},"./src/toQuery.ts":function(s,a,u){var d=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(a,"__esModule",{value:!0});var f=d(u("./node_modules/hyphenate-style-name/index.js")),m=d(u("./src/mediaQuery.ts")),v=function(h){return"not ".concat(h)},g=function(h,p){var w=(0,f.default)(h);return typeof p=="number"&&(p="".concat(p,"px")),p===!0?w:p===!1?v(w):"(".concat(w,": ").concat(p,")")},y=function(h){return h.join(" and ")},x=function(h){var p=[];return Object.keys(m.default.all).forEach(function(w){var S=h[w];S!=null&&p.push(g(w,S))}),y(p)};a.default=x},"./src/useMediaQuery.ts":function(s,a,u){var d=this&&this.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(a,"__esModule",{value:!0});var f=u("react"),m=d(u("./node_modules/matchmediaquery/index.js")),v=d(u("./node_modules/hyphenate-style-name/index.js")),g=u("./node_modules/shallow-equal/dist/index.esm.js"),y=d(u("./src/toQuery.ts")),x=d(u("./src/Context.ts")),h=function(O){return O.query||(0,y.default)(O)},p=function(O){if(O){var N=Object.keys(O);return N.reduce(function(K,Z){return K[(0,v.default)(Z)]=O[Z],K},{})}},w=function(){var O=(0,f.useRef)(!1);return(0,f.useEffect)(function(){O.current=!0},[]),O.current},S=function(O){var N=(0,f.useContext)(x.default),K=function(){return p(O)||p(N)},Z=(0,f.useState)(K),U=Z[0],ie=Z[1];return(0,f.useEffect)(function(){var se=K();(0,g.shallowEqualObjects)(U,se)||ie(se)},[O,N]),U},E=function(O){var N=function(){return h(O)},K=(0,f.useState)(N),Z=K[0],U=K[1];return(0,f.useEffect)(function(){var ie=N();Z!==ie&&U(ie)},[O]),Z},_=function(O,N){var K=function(){return(0,m.default)(O,N||{},!!N)},Z=(0,f.useState)(K),U=Z[0],ie=Z[1],se=w();return(0,f.useEffect)(function(){if(se){var Le=K();return ie(Le),function(){Le&&Le.dispose()}}},[O,N]),U},P=function(O){var N=(0,f.useState)(O.matches),K=N[0],Z=N[1];return(0,f.useEffect)(function(){var U=function(ie){Z(ie.matches)};return O.addListener(U),Z(O.matches),function(){O.removeListener(U)}},[O]),K},b=function(O,N,K){var Z=S(N),U=E(O);if(!U)throw new Error("Invalid or missing MediaQuery!");var ie=_(U,Z),se=P(ie),Le=w();return(0,f.useEffect)(function(){Le&&K&&K(se)},[se]),(0,f.useEffect)(function(){return function(){ie&&ie.dispose()}},[]),se};a.default=b},react:s=>{s.exports=n}},o={};function i(s){var a=o[s];if(a!==void 0)return a.exports;var u=o[s]={exports:{}};return r[s].call(u.exports,u,u.exports,i),u.exports}i.d=(s,a)=>{for(var u in a)i.o(a,u)&&!i.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:a[u]})},i.o=(s,a)=>Object.prototype.hasOwnProperty.call(s,a),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var l=i("./src/index.ts");return l})())})(D9);const Xd=e=>C.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z",fill:"currentcolor"}),C.createElement("path",{d:"M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z",fill:"currentcolor"})),Jd=D.div`
  position: absolute;
  top: 10%;
  left: 50%;
  display: grid;
  place-items: center;
`,j9=D.div`
  position: absolute;
  z-index: 5;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`,z9=D.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;

    .cover {
      position: relative;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: bottom;
      }
    }
  }

  .avatar {
    position: absolute;
    top: 7.75rem;
    left: 1rem;
    width: 140px;
    aspect-ratio: 1/1;
    border: 4px solid white;
    border-radius: 50%;
    overflow: hidden;
  }

  @media screen and (${ue.md}) {
    position: absolute;
    inset: 3.5rem 0;
    width: 634px;
    height: 650px;
    margin: 0 auto;
    border-radius: 1rem;
  }
`,U9=D.div`
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-gray-200);

  p {
    font-weight: 700;
  }

  .close-btn {
    all: unset;
    cursor: pointer;
    color: var(--color-theme);
  }

  .save-btn {
    all: unset;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: white;
    background-color: var(--color-theme);

    &.disabled {
      pointer-events: none;
      opacity: 0.75;
    }
  }
`,qd=D.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);

  .icons {
    display: flex;
    align-items: center;
    gap: 2rem;

    .icon {
      cursor: pointer;
      :hover {
        color: var(--color-theme);
      }
    }

    .avatar-input,
    .cover-input {
      display: none;
    }
  }
`,F9=D.div`
  position: relative;
  margin-top: 5rem;
  padding: 1rem;
  .introduction {
    display: flex;
    flex-direction: column;
    margin-top: 1.4rem;
    background-color: var(--color-gray-100);
    label {
      padding: 0.125rem 0.625rem;
      font-size: var(--fs-secondary);
      color: var(--color-gray-700);
    }
  }
`,B9=D.textarea`
  padding: 0.125rem 0.625rem;
  border: none;
  resize: none;
  background-color: var(--color-gray-100);
  line-height: 1.6rem;
  font-size: var(--fs-basic);
  ::-webkit-input-placeholder {
    color: var(--color-gray-500);
  }
  border-bottom: 2px solid var(--color-gray-700);
  :focus {
    border-bottom: 2px solid var(--color-light-blue);
    outline: none;
  }
  :hover {
    border-bottom: 2px solid var(--color-light-blue);
  }
  &.error {
    border-bottom: 2px solid var(--color-error);
  }
`,H9=D.div`
  position: absolute;
  bottom: 1rem;
  text-align: end;
  color: var(--color-error);
`;function V9({onClose:e,onProfileChange:t}){const n=tl.useMediaQuery({query:`(max-width: ${sr.md} )`}),{currentUser:r,handleUserUpdate:o}=wt(),i={...r},[l,s]=C.useState(i.name),[a,u]=C.useState(i.introduction),[d,f]=C.useState(i.avatar),[m,v]=C.useState(i.cover),[g,y]=C.useState(i.avatar),[x,h]=C.useState(i.cover),[p,w]=C.useState(!1),[S,E]=C.useState(""),[_,P]=C.useState(!1),b=l.length,O=a.length,N=U=>{const ie=U.target.files[0],se=URL.createObjectURL(U.target.files[0]);y(ie),f(se)},K=U=>{const ie=U.target.files[0],se=URL.createObjectURL(U.target.files[0]);h(ie),v(se)},Z=async U=>{if(U.preventDefault(),w(!0),l.trim().length===0||a.trim().length===0){E("欄位不可空白!"),setTimeout(()=>{E(!1),w(!1)},1e3);return}if(l.length>50||a.length>160){E("字數超過上限!"),setTimeout(()=>{E(!1),w(!1)},1e3);return}const{data:ie,status:se}=await n9({id:r.id,name:l,introduction:a,avatar:g,cover:x});if(ie&&se===200){w(!1),P(!0);const Le={...r,name:ie.name,introduction:ie.introduction,avatar:ie.avatar,cover:ie.cover};setTimeout(()=>{P(!1),e(),o(Le),t()},1e3)}};return C.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]),k(j9,{children:[c(z9,{children:k("form",{onSubmit:Z,encType:"multipart/form-data",children:[k(U9,{children:[c("button",{className:"close-btn",type:"button",onClick:e,children:c(Eo,{})}),c("p",{children:"編輯個人資料"}),c("button",{className:`save-btn ${p?"disabled":void 0}`,type:"submit",children:p?"儲存中...":"儲存"})]}),k("div",{className:"content",children:[k("div",{className:"cover",children:[c("img",{src:m,alt:"user-cover"}),c(qd,{children:k("div",{className:"icons",children:[c("label",{htmlFor:"cover-input",children:c(Xd,{className:"icon"})}),c(Eo,{className:"icon",onClick:e}),c("input",{className:"cover-input",name:"cover",id:"cover-input",placeholder:"none",type:"file",accept:"image/*",onChange:K})]})})]}),k(F9,{children:[c(Ge,{label:"名稱",placeholder:"name",value:l,onChange:U=>s(U),InputLength:b}),k("div",{className:"introduction",children:[c("label",{children:"自我介紹"}),c(B9,{className:Tp("",{error:O>160}),rows:n?"6":"3",placeholder:"Hello! My name is ...",value:a,onChange:U=>u(U.target.value)})]}),O>0&&k(_p,{children:[O,"/160"]}),O>160&&c(H9,{children:"字數超出上限！"})]}),k("div",{className:"avatar",children:[c("img",{src:d,alt:"avatar"}),c(qd,{children:k("div",{className:"icons",children:[c("label",{htmlFor:"avatar-input",children:c(Xd,{className:"icon"})}),c("input",{className:"avatar-input",id:"avatar-input",name:"avatar",placeholder:"none",type:"file",accept:"image/*",onChange:N})]})})]})]})]})}),S&&c(Jd,{children:c(Rt,{type:"error",message:S})}),_&&c(Jd,{children:c(Rt,{type:"success",message:"修改成功"})})]})}const bp=e=>C.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M17.5576 2.80254L12.3726 2.79004H12.3701C6.90262 2.79004 2.62012 7.07379 2.62012 12.5425C2.62012 17.665 6.60262 21.55 11.9514 21.755V26.54C11.9514 26.675 12.0064 26.8975 12.1014 27.0438C12.2789 27.325 12.5814 27.4775 12.8914 27.4775C13.0639 27.4775 13.2376 27.43 13.3939 27.33C13.7239 27.12 21.4851 22.155 23.5039 20.4475C25.8814 18.435 27.3039 15.485 27.3076 12.5575V12.5363C27.3001 7.07754 23.0201 2.80254 17.5576 2.80129V2.80254ZM22.2914 19.0175C20.8739 20.2175 16.2139 23.2738 13.8264 24.8213V20.8375C13.8264 20.32 13.4076 19.9 12.8889 19.9H12.3939C7.81887 19.9 4.49637 16.805 4.49637 12.5425C4.49637 8.12504 7.95637 4.66504 12.3714 4.66504L17.5551 4.67754H17.5576C21.9726 4.67754 25.4326 8.13504 25.4351 12.5475C25.4314 14.935 24.2576 17.3525 22.2926 19.0175H22.2914Z",fill:"currentcolor"})),sc=e=>C.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M15 27.0473H14.9825C11.7537 26.9873 2.4375 18.5698 2.4375 10.5973C2.4375 6.76728 5.59375 3.40479 9.19125 3.40479C12.0537 3.40479 13.9787 5.37979 14.9987 6.81729C16.0162 5.38229 17.9412 3.40479 20.805 3.40479C24.405 3.40479 27.56 6.76729 27.56 10.5985C27.56 18.5685 18.2425 26.986 15.0137 27.0448H15V27.0473ZM9.1925 5.28104C6.5925 5.28104 4.31375 7.76603 4.31375 10.5998C4.31375 17.7748 13.1062 25.0948 15.0012 25.1723C16.8987 25.0948 25.6887 17.776 25.6887 10.5998C25.6887 7.76603 23.41 5.28104 20.81 5.28104C17.65 5.28104 15.885 8.95104 15.87 8.98729C15.5825 9.68979 14.425 9.68979 14.1362 8.98729C14.1187 8.94979 12.355 5.28104 9.19375 5.28104H9.1925Z",fill:"currentcolor"})),Op=e=>C.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M15 27.0478H14.9825C11.7538 26.9878 2.4375 18.5703 2.4375 10.5978C2.4375 6.76777 5.59375 3.40527 9.19125 3.40527C12.0538 3.40527 13.9788 5.38027 14.9987 6.81777C16.0162 5.38277 17.9412 3.40527 20.805 3.40527C24.405 3.40527 27.56 6.76777 27.56 10.599C27.56 18.569 18.2425 26.9865 15.0138 27.0453H15V27.0478Z",fill:"var(--color-error)"})),Do=D.ul`
  background-color: white;
`,W9=D.div`
  position: relative;

  .link-to-user {
    position: absolute;
    top: 1rem;
    left: 1rem;

    img {
      width: 50px;
      aspect-ratio: 1/1;
      margin-right: 0.5rem;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`,ac=D.li`
  cursor: pointer;
  display: grid;
  grid-template-columns: calc(50px + 0.5rem) 1fr;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);
  background-color: white;

  :hover {
    background-color: var(--color-gray-100);
  }

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin-right: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  .user b {
    margin-right: 0.25rem;
  }

  .user span {
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
  }

  .reply {
    margin-block: 0.25rem;
    color: var(--color-secondary);
    font-size: var(--fs-secondary);

    span {
      margin-left: 0.25rem;
      color: var(--color-theme);
    }
  }

  .content {
    color: var(--color-gray-900);
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-top: 0.5rem;
    color: var(--color-secondary);
    font-size: var(--fs-small);

    .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .icon {
      cursor: pointer;
      width: 15px;
      height: 15px;
    }
  }
`;function uc({tweet:e,shownUser:t}){const{id:n,description:r,createdAt:o,replyCounts:i,likeCounts:l,isLiked:s,User:a}=e,[u,d]=C.useState(s),f=Vl(o),m=()=>{d(!u)};return k(W9,{children:[c(Oe,{to:`/tweets/${n}`,children:k(ac,{children:[c("img",{src:t?t.avatar:a.avatar,alt:"avatar"}),k("div",{children:[k("div",{className:"user",children:[c("b",{children:t?t.name:a.name}),k("span",{children:["@",t?t.account:a.account]}),c("span",{children:"．"}),c("span",{children:f})]}),c("p",{className:"content",children:r}),k("div",{className:"stats",children:[k("div",{className:"stat",children:[c("span",{children:c(bp,{className:"icon"})}),c("span",{children:i})]}),k("div",{className:"stat",children:[l>0?c(Op,{className:"icon",onClick:m}):c(sc,{className:"icon",onClick:m}),c("span",{children:l})]})]})]})]})}),c(Oe,{to:`/users/${t?t.id:a.id}/tweets`,className:"link-to-user",children:c("img",{src:t?t.avatar:a.avatar,alt:"avatar"})})]})}function Np({reply:e,replyTo:t,shownUser:n}){const{comment:r,createdAt:o,User:i}=e,l=Vl(o);return k(ac,{children:[c(Oe,{to:`/users/${n?n.id:i.id}/tweets`,children:c("img",{src:n?n.avatar:i.avatar,alt:"avatar"})}),k("div",{children:[k("div",{className:"user",children:[c("b",{children:n?n.name:i.name}),k("span",{children:["@",n?n.account:i.account]}),c("span",{children:"．"}),c("span",{children:l})]}),k("p",{className:"reply",children:["回覆",k("span",{children:["@",t]})]}),c("p",{className:"content",children:r})]})]})}function Q9({user:e,tweets:t}){const n=t.map(r=>c(uc,{currentUser:e,tweet:r},r.id));return c(Do,{children:n})}function Z9({replies:e,replyTo:t}){const n=e.map(r=>c(Np,{reply:r,replyTo:t.User.account},r.id));return c(Do,{children:n})}const Wl="https://murmuring-plains-40389.herokuapp.com/api",Ql=Rn.create({baseURL:Wl});Ql.interceptors.request.use(e=>{const t=localStorage.getItem("adminToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>{console.error(e)});async function K9(){try{return(await Ql.get(`${Wl}/admin/tweets`)).data}catch(e){console.error("[Admin Get Tweets failed]: ",e)}}async function Y9(e){try{const t=await Ql.delete(`${Wl}/admin/tweets/${e}`),{data:n,status:r}=t;return{data:n,status:r}}catch(t){console.error("[Admin Delete Tweet failed]: ",t)}}async function G9(){try{return(await Ql.get(`${Wl}/admin/users`)).data}catch(e){console.error("[Admin Delete Tweet failed]: ",e)}}const X9=D(ac)`
  grid-template-columns: calc(50px + 0.5rem) 1fr calc(10px);
  border: none;
  border-top: 1px solid var(--color-gray-200);
  border-bottom: 1px solid var(--color-gray-200);
  cursor: default;
`,J9=D.div`
  position: relative;
  height: calc(100vh - 68px);
  overflow-y: scroll;
  overflow-x: hidden;
  border-inline: 1px solid var(--color-gray-200);

  .cross {
    width: 1rem;
    height: 1rem;
    padding-left: 0.25rem;
    color: var(--color-gray-700);
    cursor: pointer;

    :hover {
      color: red;
    }
  }
`,q9=D.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-inline: 2px solid var(--color-gray-200);
  color: var(--color-secondary);
`,e5=D.div`
  position: fixed;
  top: 10%;
  left: 50%;
  display: grid;
  place-items: center;
  z-index: 999;
`;function t5(){const[e,t]=C.useState([]),[n,r]=C.useState(!0),[o,i]=C.useState(""),l=bt();C.useEffect(()=>{localStorage.getItem("adminToken")||l("/admin"),(async()=>{try{const f=await K9();t(f),r(!1)}catch(f){console.log(f)}})()},[]);const s=async u=>{if(window.confirm("確定要刪除這筆推文嗎？"))try{const{data:f,status:m}=await Y9(u);f&&m===200&&(i("刪除一筆資料"),setTimeout(()=>{i(!1)},1e3)),t(v=>v.filter(g=>g.id!==u))}catch(f){console.log(f)}},a=e.map(u=>{if(!n)return c(n5,{tweet:u,onDelete:s},u.id)});return k(Ne,{children:[c(en,{headerText:"推文清單"}),k(J9,{children:[o&&c(e5,{children:c(Rt,{type:"info",message:o})}),a,n&&c(q9,{children:c("div",{children:c(bn,{color:"var(--color-theme)"})})})]})]})}function n5({tweet:e,onDelete:t}){const{id:n,description:r,createdAt:o,User:i}=e,{account:l,addname:s,avatar:a}=i,u=Vl(o),d=r.length>50?`${r.slice(0,50)}...`:r;return k(X9,{children:[c("img",{src:a,alt:"avatar"}),k("div",{children:[k("div",{className:"user",children:[c("b",{children:name}),k("span",{children:["@",l]}),c("span",{children:"．"}),c("span",{children:u})]}),c("p",{className:"content",children:d})]}),c("div",{className:"cross",children:c(Eo,{onClick:()=>t(n)})})]})}const r5=D.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 4fr));
  grid-template-rows: auto;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0.5rem;
  height: calc(100vh - 68px);
  overflow-y: scroll;
  border-top: 1px solid var(--color-gray-200);
  border-inline: 1px solid var(--color-gray-200);
`,o5=D.div`
  position: relative;
  width: 200px;
  height: 300px;
  margin: 0.5rem auto;
  background-color: var(--color-gray-200);
  border-radius: 10px;

  img {
    border-radius: 10px 10px 0 0;
  }

  :hover {
    border: 1px solid var(--color-gray-400);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }

  .avatar {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    aspect-ratio: 1/1;
    border: 4px solid white;
    border-radius: 50%;
    overflow: hidden;
  }

  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 0.6rem;
    color: var(--color-secondary);
    font-size: var(--fs-basic);

    .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    span {
      color: var(--color-gray-900);
    }
  }
`,i5=D.div`
  width: 100%;
  background-image: url(${e=>e.backgroundImage});
  background-size: cover;
  background-position: center;
  padding-bottom: 75%;
  border-radius: 10px 10px 0 0;
`,l5=D.div`
  .svg {
    color: var(--color-gray-700);
  }
  .follow {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    padding: 0.6rem;
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
    span {
      color: var(--color-gray-900);
    }
  }
`,s5=D.div`
  text-align: center;
  margin-top: 1.6rem;

  .title {
    font-size: var(--fs-basic);
    font-weight: bold;
  }

  .account {
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
  }
`,a5=D.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-inline: 2px solid var(--color-gray-200);
  color: var(--color-secondary);
`;function u5(){const[e,t]=C.useState([]),[n,r]=C.useState(!0),o=bt();C.useEffect(()=>{localStorage.getItem("adminToken")||o("/admin"),(async()=>{try{const a=await G9();t(a),r(!1)}catch(a){console.log(a)}})()},[o]);const i=e.map(l=>{if(!n)return c(c5,{user:l},l.id)});return k(Ne,{children:[c(en,{headerText:"使用者列表"}),k(r5,{children:[i,n&&c(a5,{children:c("div",{children:c(bn,{color:"var(--color-theme)"})})})]})]})}function c5({user:e}){const{account:t,name:n,avatar:r,cover:o,tweetCounts:i,followerCounts:l,followingCounts:s,userTweetLikeCounts:a}=e,u=n.length>15?`${n.slice(0,15)}...`:n;return k(o5,{children:[c(i5,{backgroundImage:o}),c("img",{className:"avatar",src:r,alt:"avatar"}),k(s5,{children:[c("div",{className:"title",children:u}),k("div",{className:"account",children:["@",t]})]}),k(l5,{children:[k("div",{className:"stats",children:[k("div",{className:"stat",children:[c("span",{children:c(yp,{className:"svg"})}),c("span",{children:i})]}),k("div",{className:"stat",children:[c(sc,{width:"1.2rem",height:"1.2rem"}),c("span",{children:a})]})]}),k("div",{className:"follow",children:[k("span",{children:[s," "]}),"個跟隨中",k("span",{children:[l," "]}),"位跟隨者"]})]})]})}const d5=D.ul`
  height: calc(100% - 53px);
  background-color: white;
  border-inline: 1px solid var(--color-gray-200);
`,f5=D.div`
  width: 100%;
  height: calc(100% - 53px);
  display: grid;
  place-items: center;
`,p5=D.li`
  display: grid;
  grid-template-columns: calc(50px + 1rem) 1fr;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);
  background-color: white;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin-right: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .user {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    margin-bottom: 0.5rem;

    p {
      margin-left: 0.5rem;
      font-size: var(--fs-secondary);
      color: var(--color-secondary);
    }
  }

  button {
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: var(--color-theme);
    background-color: white;
    font-size: var(--fs-basic);

    &:hover,
    &.active {
      color: white;
      background-color: var(--color-theme);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.75;
    }
  }

  .content {
    color: var(--color-gray-900);
  }

  @media screen and (${ue.md}) {
    button {
      padding: 0.5rem 1rem;
    }
  }
`,h5=D.div`
  display: flex;
  justify-content: start;
  color: var(--color-secondary);
  background-color: white;
  font-weight: 700;

  .category {
    width: 8em;
    display: grid;
    place-items: center;
    border-bottom: 3px solid white;
    line-height: 3em;

    :hover {
      border-bottom: 3px solid var(--color-gray-100);
      background-color: var(--color-gray-100);
    }

    &.active {
      border-bottom: 3px solid var(--color-theme);
      color: var(--color-theme);
    }
  }

  @media screen and (${ue.md}) {
    border: 1px solid var(--color-gray-200);
  }
`;function ef(){const{pathname:e}=yt(),{userFollowings:t}=wt(),{shownUser:n}=No(),[r,o]=C.useState(!0),[i,l]=C.useState([]),[s,a]=C.useState([]);let u;return e.includes("following")?u=i.map(d=>c(tf,{user:d},d.id)):u=s.map(d=>c(tf,{user:d},d.id)),C.useEffect(()=>{const d=async()=>{try{const f=await kp(n.id),m=await qy(n.id);l(f),a(m),o(!1)}catch(f){console.error(f)}};o(!0),d()},[t]),k(Ne,{children:[c(m5,{id:n.id}),r?c(f5,{children:c("div",{children:c(bn,{color:"var(--color-theme)"})})}):c(d5,{children:u})]})}function m5({id:e}){return k(h5,{children:[c(Oe,{className:"category",to:`/users/${e}/followers`,children:c("p",{children:"追隨者"})}),c(Oe,{className:"category",to:`/users/${e}/followings`,children:c("p",{children:"正在追隨"})})]})}function tf({user:e}){const{userFollowings:t,handleFollow:n}=wt(),{id:r,name:o,account:i,avatar:l,introduction:s}=e,a=t.includes(r),[u,d]=C.useState(!1),f=async()=>{d(!0),await n(r),d(!1)};return k(p5,{children:[c(Oe,{to:`/users/${r}/tweets`,children:c("img",{src:l,alt:"avatar"})}),k("div",{children:[k("div",{className:"user",children:[c("b",{children:o}),k("p",{children:["@",i]}),c("button",{className:`${a?"active":void 0} ${u?"disabled":void 0}`,type:"button",onClick:f,children:a?"正在跟隨":"跟隨"})]}),c("p",{className:"content",children:s})]})]})}const g5=D.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-inline: 1px solid var(--color-gray-200);
  background-color: white;

  div {
    display: flex;
    align-items: center;
  }

  div.small {
    display: unset;
    align-items: unset;
  }

  .user-avatar {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    border-radius: 50%;
  }

  h1 {
    font-size: var(--fs-h4);
  }

  p {
    display: none;
  }

  .small {
    h1 {
      font-size: var(--fs-basic);
    }

    p {
      display: block;
      margin-top: -0.25rem;
      color: var(--color-secondary);
      font-size: var(--fs-secondary);

      span {
        margin-right: 0.25rem;
      }
    }
  }

  @media screen and (${ue.md}) {
    position: static;
    width: unset;

    div {
      display: unset;
      align-items: unset;
    }

    .user-avatar {
      display: none;
    }
  }
`;function en({headerText:e,goBack:t,user:n,shownUserTweets:r}){const{pathname:o}=yt(),{currentUser:i}=wt();return k(g5,{children:[t&&c(Oe,{to:o.includes("follow")?`users/${n.id}/tweets`:"/tweets",children:c(lc,{})}),k("div",{className:n&&"small",children:[o==="/tweets"&&c("img",{className:"user-avatar",src:i.avatar,alt:"user-avatar"}),c("h1",{children:e}),k("p",{children:[c("span",{children:r==null?void 0:r.length}),"推文"]})]})]})}const v5=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M19.25 3.01807H4.75C3.233 3.01807 2 4.25207 2 5.77007V18.2651C2 19.7831 3.233 21.0181 4.75 21.0181H19.25C20.767 21.0181 22 19.7831 22 18.2651V5.77007C22 4.25207 20.767 3.01807 19.25 3.01807ZM4.75 4.51807H19.25C19.94 4.51807 20.5 5.07807 20.5 5.76807V6.48207L12.45 11.8491C12.177 12.0291 11.824 12.0311 11.55 11.8471L3.5 6.48207V5.76807C3.5 5.07807 4.06 4.51807 4.75 4.51807ZM19.25 19.5161H4.75C4.06 19.5161 3.5 18.9561 3.5 18.2661V8.24007L10.74 13.0701C11.123 13.3261 11.562 13.4541 12 13.4541C12.44 13.4541 12.877 13.3261 13.26 13.0711L20.5 8.24107V18.2631C20.5 18.9531 19.94 19.5131 19.25 19.5131V19.5161Z",fill:"currentcolor"})),y5=e=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M23.24 3.26003H20.815V0.832031C20.815 0.418031 20.479 0.0820312 20.065 0.0820312C19.651 0.0820312 19.315 0.418031 19.315 0.832031V3.26003H16.89C16.476 3.26003 16.14 3.59503 16.14 4.01003C16.14 4.42503 16.476 4.76003 16.89 4.76003H19.316V7.18403C19.316 7.59803 19.652 7.93403 20.066 7.93403C20.48 7.93403 20.816 7.59803 20.816 7.18403V4.76003H23.241C23.656 4.76003 23.991 4.42303 23.991 4.01003C23.991 3.59703 23.655 3.26003 23.241 3.26003H23.24ZM17.01 10.866C17.03 8.43203 16.228 6.26903 14.752 4.77603C13.428 3.43403 11.636 2.69203 9.70604 2.68303H9.69304C7.76304 2.69303 5.97104 3.43303 4.64704 4.77503C3.17204 6.27003 2.37004 8.43303 2.39004 10.867C2.42604 15 0.467036 16.56 0.390036 16.62C0.130036 16.813 0.0230359 17.15 0.124036 17.458C0.226036 17.766 0.514036 17.973 0.836036 17.973H5.55204C5.66204 20.199 7.49204 21.98 9.74604 21.98C12 21.98 13.829 20.2 13.94 17.973H18.565C18.885 17.973 19.169 17.767 19.272 17.463C19.375 17.159 19.272 16.82 19.017 16.625C18.935 16.561 16.974 15 17.009 10.865L17.01 10.866ZM9.74504 20.48C8.31904 20.48 7.15904 19.37 7.05104 17.972H12.439C12.331 19.372 11.171 20.479 9.74504 20.479V20.48ZM2.45504 16.473C3.15704 15.378 3.91204 13.569 3.88904 10.855C3.87204 8.79303 4.50304 7.05503 5.71404 5.83003C6.75704 4.77403 8.17204 4.19003 9.70004 4.18403C11.227 4.19103 12.643 4.77403 13.685 5.83003C14.895 7.05603 15.525 8.79303 15.508 10.855C15.486 13.569 16.24 15.378 16.945 16.473H2.45504Z",fill:"currentcolor"})),w5=D.div`
  position: relative;

  background-color: white;

  .cover {
    height: 150px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  .avatar {
    position: absolute;
    top: 7rem;
    left: 1rem;
    width: 80px;
    aspect-ratio: 1/1;
    border: 3px solid white;
    border-radius: 50%;
    overflow: hidden;
  }

  @media screen and (${ue.md}) {
    border: 1px solid var(--color-gray-200);
    display: ${e=>e.pathname.includes("follow")?"none":"block"};

    .cover {
      height: 200px;
    }

    .avatar {
      top: 7.75rem;
      left: 1rem;
      width: 140px;
      border: 4px solid white;
    }
  }
`,C5=D.div`
  padding: 1rem 1.5rem;
  color: var(--color-gray-900);
  font-size: var(--fs-basic);

  .user {
    margin: 0.5rem 0 0.25rem;
    font-size: var(--fs-h5);

    p {
      color: var(--color-secondary);
      font-size: var(--fs-secondary);
    }
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-block: 0.5rem;
    color: var(--color-secondary);
    font-size: var(--fs-secondary);

    a:hover {
      color: var(--color-gray-900);
    }

    span {
      margin-right: 0.25rem;
      color: var(--color-gray-900);
    }
  }

  @media screen and (${ue.md}) {
    padding: 1rem;
    font-size: var(--fs-secondary);

    .user {
      margin: 0.75rem 0 0.25rem;
    }
  }
`,S5=D.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;

  .icon {
    cursor: pointer;
    padding: 0.3rem;
    border: 1px solid var(--color-theme);
    border-radius: 50%;
    color: var(--color-theme);

    :hover {
      color: white;
      background-color: var(--color-theme);
    }
  }

  button {
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: var(--color-theme);
    background-color: white;
    font-size: var(--fs-basic);

    &:hover,
    &.active {
      color: white;
      background-color: var(--color-theme);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.75;
    }
  }

  @media screen and (${ue.md}) {
    button {
      padding: 0.5rem 1rem;
    }

    .icon {
      padding: 0.5rem;
    }
  }
`,x5=D.div`
  display: flex;
  justify-content: start;
  color: var(--color-secondary);
  font-weight: 700;

  .category {
    width: 7em;
    display: grid;
    place-items: center;
    border-bottom: 3px solid white;
    line-height: 3em;

    :hover {
      background-color: var(--color-gray-100);
      border-bottom: 3px solid var(--color-gray-100);
    }

    &.active {
      border-bottom: 3px solid var(--color-theme);
      color: var(--color-theme);
    }
  }

  @media screen and (${ue.md}) {
    .category {
      width: 8em;
    }
  }
`;function k5({user:e,onProfileChange:t}){const{pathname:n}=yt(),{currentUser:r,userFollowings:o,handleFollow:i}=wt(),{id:l,name:s,account:a,introduction:u,avatar:d,cover:f,followerCounts:m,followingCounts:v}=e,g=o.includes(l),[y,x]=C.useState(m),[h,p]=C.useState(!1),[w,S]=C.useState(!1),E=C.useRef(!1);C.useEffect(()=>{E.current&&g===!0?x(b=>b+1):E.current&&g===!1&&x(b=>b-1)},[g]),C.useEffect(()=>(E.current=!0,()=>{E.current=!1}),[]);const _=()=>{p(!h)},P=async()=>{S(!0),await i(l),S(!1)};return k(Ne,{children:[k(w5,{pathname:n,children:[c("div",{className:"cover",children:c("img",{src:f??"https://loremflickr.com/640/480/nature?lock=27430",alt:"user-cover"})}),c("img",{className:"avatar",src:d??"http://placekitten.com/g/500/500",alt:"avatar"}),k(C5,{children:[c(S5,{children:l===r.id?c("button",{type:"button",onClick:_,children:"編輯個人資料"}):k(Ne,{children:[c("span",{className:"icon",children:c(v5,{})}),c("span",{className:"icon",children:c(y5,{})}),c("button",{className:`${g?"active":void 0} ${w?"disabled":void 0}`,type:"button",onClick:P,children:g?"正在跟隨":"跟隨"})]})}),k("div",{className:"user",children:[c("b",{children:s}),k("p",{children:["@",a]})]}),c("p",{className:"intro",children:u??"I like alpha camp"}),k("div",{className:"stats",children:[c(Oe,{to:`/users/${l}/followings`,children:l===r.id?k(Ne,{children:[c("span",{children:o.length}),"個跟隨中"]}):k(Ne,{children:[c("span",{children:v}),"個跟隨中"]})}),c(Oe,{to:`/users/${l}/followers`,children:l===r.id?k(Ne,{children:[c("span",{children:m}),"個跟隨者"]}):k(Ne,{children:[c("span",{children:y}),"個跟隨者"]})})]})]}),!n.includes("follow")&&k(x5,{children:[c(Oe,{className:"category",to:`/users/${l}/tweets`,children:c("p",{children:"推文"})}),c(Oe,{className:"category",to:`/users/${l}/replies`,children:c("p",{children:"回覆"})}),c(Oe,{className:"category",to:`/users/${l}/likes`,children:c("p",{children:"喜歡的內容"})})]})]}),h&&c(V9,{onClose:_,onProfileChange:t})]})}const E5=D.div`
  padding: 1rem;
  border: 1px solid var(--color-gray-200);
  background-color: white;

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;

    img {
      width: 50px;
      aspect-ratio: 1/1;
      margin-right: 0.5rem;
      border-radius: 50%;
      overflow: hidden;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    b {
      margin-right: 0.25rem;
    }

    span {
      color: var(--color-secondary);
      font-size: var(--fs-secondary);
    }
  }

  .content {
    color: var(--color-gray-900);
    font-size: var(--fs-h4);
  }

  .time-stamp {
    padding-block: 0.5rem;
    border-bottom: 1px solid var(--color-gray-200);
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-block: 1rem;
    border-bottom: 1px solid var(--color-gray-200);
    color: var(--color-secondary);
    font-size: var(--fs-h5);

    span {
      margin-right: 0.25rem;
      color: var(--color-gray-900);
      font-weight: 700;
    }
  }

  .reaction {
    display: flex;
    gap: 3rem;
    padding-top: 1rem;
    color: var(--color-secondary);

    button {
      all: unset;
      cursor: pointer;

      :hover {
        color: var(--color-theme);
      }

      &.disabled {
        pointer-events: none;
      }
    }
  }

  @media screen and (${ue.md}) {
    .reaction {
      gap: 9rem;
    }
  }
`,T5=D.div`
  display: grid;
  grid-template-columns: calc(50px + 0.5rem) 1fr auto;
  align-items: center;
  padding: 1rem;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin-right: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  p {
    color: var(--color-secondary);
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: white;
    background-color: var(--color-theme);
    font-size: var(--fs-basic);

    :hover {
      border: 1px solid var(--color-light-orange);
      background-color: var(--color-light-orange);
    }
  }

  @media screen and (${ue.md}) {
    display: none;
  }
`;function _5({tweet:e,currentUser:t,replyInput:n,onChange:r,onAddReply:o}){const{id:i,description:l,createdAt:s,replyCounts:a,likeCounts:u,User:d}=e,{convertedDate:f,convertedTime:m}=$9(s),{userLikes:v,handleLike:g}=wt(),[y,x]=C.useState(u),[h,p]=C.useState(!1),[w,S]=C.useState(!1),E=v.includes(i),_=()=>{p(!h)},P=async()=>{S(!0),await g(i),x(E?b=>b-1:b=>b+1),S(!1)};return k(Ne,{children:[k(E5,{children:[k("div",{className:"user",children:[c(Oe,{to:`/users/${d.id}/tweets`,children:c("img",{src:d.avatar,alt:"avatar"})}),k("div",{children:[c("b",{children:d.name}),k("span",{children:["@",d.account]})]})]}),c("p",{className:"content",children:l}),k("div",{className:"time-stamp",children:[c("span",{children:m}),c("span",{children:"．"}),c("span",{children:f})]}),k("div",{className:"stats",children:[k("p",{children:[c("span",{children:a}),"回覆"]}),k("p",{children:[c("span",{children:y}),"喜歡次數"]})]}),k("div",{className:"reaction",children:[c("button",{type:"button",onClick:_,children:c(bp,{className:"icon"})}),c("button",{type:"button",className:w?"disabled":void 0,children:E?c(Op,{className:"icon",onClick:P}):c(sc,{className:"icon",onClick:P})})]})]}),k(T5,{className:"mobile-reply",onClick:_,children:[c("img",{src:t.avatar,alt:""}),c("p",{children:"推你的回覆"}),c("button",{type:"button",children:"回覆"})]}),h&&c(I9,{tweet:e,currentUser:t,replyInput:n,onChange:r,onAddReply:o,onClose:_})]})}const P5=D.div`
  flex: 1;
  padding: 1rem;
  display: grid;
  grid-template-columns: calc(50px + 0.75rem) 1fr;
  border: 1px solid var(--color-gray-200);
  border-bottom: 10px solid var(--color-gray-200);

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      all: unset;
      flex: 1;
      align-self: flex-start;
      width: 100%;
      margin-block: 1rem;
    }

    .submit {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: end;
    }

    span {
      color: var(--color-secondary);
      &.error {
        color: var(--color-error);
      }
    }

    button {
      all: unset;
      cursor: pointer;
      padding: 0.5rem 1rem;
      margin-left: 1rem;
      border: 1px solid var(--color-theme);
      border-radius: 3.125rem;
      color: white;
      background-color: var(--color-theme);
      font-size: var(--fs-basic);

      :hover {
        border: 1px solid var(--color-light-orange);
        background-color: var(--color-light-orange);
      }
      &.disabled {
        pointer-events: none;
        opacity: 0.75;
      }
    }
  }
`;function L5({tweetInput:e,currentUser:t,onChange:n,onAddTweet:r}){const{avatar:o}=t,[i,l]=C.useState(null),[s,a]=C.useState(!1),u=async f=>{if(f.key==="Enter"){if(a(!0),!e.trim().length){l("內容不可空白"),a(!1),setTimeout(()=>{l(null)},1e3);return}if(e.length>140){l("字數不可超過 140 字"),a(!1),setTimeout(()=>{l(null)},1e3);return}const{status:m}=await r();m==="ok"&&setTimeout(()=>{a(!1),l(null)},2e3)}},d=async f=>{if(f.preventDefault(),a(!0),!e.trim().length){l("內容不可空白"),a(!1),setTimeout(()=>{l(null)},1e3);return}if(e.length>140){l("字數不可超過 140 字"),a(!1),setTimeout(()=>{l(null)},1e3);return}const{status:m}=await r();m==="ok"&&setTimeout(()=>{a(!1),l(null)},2e3)};return k(P5,{children:[c("img",{src:o,alt:"avatar"}),k("form",{children:[c("textarea",{name:"tweet",id:"tweet-input",type:"text",placeholder:"有什麼新鮮事？",rows:"3",value:e,onChange:f=>{n==null||n(f.target.value)},onKeyDown:u}),k("div",{className:"submit",children:[c("span",{children:`${e.length}/140`}),k("div",{children:[c("span",{className:i?"error":void 0,children:i}),c("button",{className:s?"disabled":void 0,type:"submit",onClick:d,children:s?"送出中...":"推文"})]})]})]})]})}function R5(){const{shownUser:e,shownUserTweets:t}=No(),n=t.map(r=>c(uc,{tweet:r,shownUser:e},r.id));return c(Do,{children:n})}function b5(){const{shownUser:e,shownUserReplies:t}=No(),n=t.map(r=>c(Np,{reply:r,shownUser:e,replyTo:r.replyTo},r.id));return c(Do,{children:n})}function O5(){const{shownUserLikes:e}=No(),t=e.map(n=>c(uc,{tweet:n},n.id));return c(Do,{children:t})}const cc=D(dp)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem;
  padding-inline: 24px;
  @media screen and (${ue.md}) {
    width: 50%;
  }
`,Ht=D.div`
  width: 100%;
  margin-top: 1.8rem;
  @media screen and (${ue.sm}) {
    width: 50%;
  }
`,$p=D.div`
  display: flex;
  justify-content: right;
  width: 100%;
  @media screen and (${ue.sm}) {
    width: 50%;
  }
`,To=D.div`
  margin: 0 0.75rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--color-primary);
  font-size: var(--fs-basic);
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`,dc="https://murmuring-plains-40389.herokuapp.com/api";async function nf({account:e,password:t}){try{const{data:n}=await Rn.post(`${dc}/users/signin`,{account:e,password:t}),{token:r}=n;return r?{...n}:n}catch(n){const{data:r,status:o}=n.response;if(o===400)return{status:"error",message:r.message};if(o===404)return{status:"error",message:r.message};console.log("[Login Failed]:",n)}}async function rf({account:e,name:t,email:n,password:r,checkPassword:o}){try{const i=await Rn.post(`${dc}/users`,{account:e,name:t,email:n,password:r,checkPassword:o}),{data:l,status:s,message:a}=i;return{data:l,status:s,message:a}}catch(i){const{data:l,status:s}=i.response;if(s===400)return{status:"error",message:l.message};console.log("[Register Failed]",i)}}async function of({account:e,password:t}){try{const{data:n}=await Rn.post(`${dc}/admin/signin`,{account:e,password:t}),{token:r}=n;return r?{...n}:n}catch(n){const{data:r,status:o}=n.response;if(o===400)return{status:"error",message:r.message};if(o===403)return{status:"error",message:r.message};if(o===404)return{status:"error",message:r.message};console.log("[Login Failed]:",n)}}const lf=D.div`
  position: absolute;
  top: 10%;
  left: 50%;
  display: grid;
  place-items: center;
`,N5=D.div`
  margin-top: 1rem;
  font-size: var(--fs-h3);
  font-weight: 700;
`;function $5(){const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(!1),[l,s]=C.useState(""),a=bt(),u=async()=>{if(e.trim().length===0||n.trim().length===0){s("欄位不可空白!"),setTimeout(()=>{s(!1),a("/admin")},1e3);return}const{token:f,status:m,message:v,isAdmin:g}=await of({account:e,password:n});f&&g===!0&&(localStorage.setItem("adminToken",f),i(!0),setTimeout(()=>{i(!1),a("/admin/tweets")},1e3)),m==="error"&&v&&(s(v),setTimeout(()=>{s(!1),a("/admin")},1e3))},d=async f=>{if(f.key==="Enter"){if(e.length===0||n.length===0){s("欄位不可空白!"),setTimeout(()=>{s(!1),a("/admin")},1e3);return}const{token:m,status:v,message:g,isAdmin:y}=await of({account:e,password:n});m&&y===!0&&(localStorage.setItem("adminToken",m),i(!0),setTimeout(()=>{i(!1),a("/admin/tweets")},1e3)),v==="error"&&g&&(s(g),setTimeout(()=>{s(!1),a("/admin")},1e3))}};return C.useEffect(()=>{localStorage.getItem("adminToken")&&a("/admin/tweets")},[a]),k(cc,{children:[c("div",{children:c(Io,{})}),c(N5,{children:"後台登入"}),c(Ht,{children:c(Ge,{label:"帳號",placeholder:"請輸入帳號",value:e,onChange:f=>t(f),onKeyDown:d})}),c(Ht,{children:c(Ge,{type:"password",label:"密碼",placeholder:"請輸入密碼",value:n,onChange:f=>r(f),onKeyDown:d})}),c(ic,{name:"登入",onClick:u}),c($p,{children:c(Ki,{to:"/login",children:c(To,{children:"前台登入"})})}),o&&c(lf,{children:c(Rt,{type:"success",message:"登入成功"})}),l&&c(lf,{children:c(Rt,{type:"error",message:l})})]})}const A5=D.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;function M5(){const e=bt();return C.useEffect(()=>{setTimeout(()=>{e("/login")},2e3)},[e]),c(A5,{children:c("div",{children:c(bn,{color:"var(--color-theme)"})})})}const sf=D.div`
  position: absolute;
  top: 10%;
  left: 50%;
  display: grid;
  place-items: center;
`,I5=D.div`
  margin-top: 1rem;
  font-size: var(--fs-h3);
  font-weight: 700;
`;function D5(){const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(!1),[l,s]=C.useState(""),a=bt(),u=async()=>{if(e.length===0||n.length===0){s("欄位不可空白!"),setTimeout(()=>{s(!1),a("/login")},1e3);return}const{token:f,status:m,message:v,isAdmin:g}=await nf({account:e,password:n});f&&g===!1&&(localStorage.setItem("token",f),i(!0),setTimeout(()=>{i(!1),a("/tweets")},1e3)),m==="error"&&v&&(s(v),setTimeout(()=>{s(!1),a("/login")},1e3))},d=async f=>{if(f.key==="Enter"){if(e.trim().length===0||n.trim().length===0){s("欄位不可空白!"),setTimeout(()=>{s(!1),a("/login")},1e3);return}const{token:m,status:v,message:g,isAdmin:y}=await nf({account:e,password:n});m&&y===!1&&(localStorage.setItem("token",m),i(!0),setTimeout(()=>{i(!1),a("/tweets")},1e3)),v==="error"&&g&&(s(g),setTimeout(()=>{s(!1),a("/login")},1e3))}};return C.useEffect(()=>{localStorage.getItem("token")&&a("/tweets")},[a]),k(cc,{children:[c("div",{children:c(Io,{})}),c(I5,{children:"登入 Alphitter"}),c(Ht,{children:c(Ge,{label:"帳號",placeholder:"請輸入帳號",value:e,onChange:f=>t(f),onKeyDown:d})}),c(Ht,{children:c(Ge,{type:"password",label:"密碼",value:n,placeholder:"請輸入密碼",onChange:f=>r(f),onKeyDown:d})}),c(ic,{name:"登入",onClick:u}),k($p,{children:[c(Ki,{to:"/signup",children:c(To,{children:"註冊"})}),c("div",{children:"・"}),c(Ki,{to:"/admin",children:c(To,{children:"後台登入"})})]}),o&&c(sf,{children:c(Rt,{type:"success",message:"登入成功"})}),l&&c(sf,{children:c(Rt,{type:"error",message:l})})]})}const j5=D.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
  padding-top: 62px;
  padding-bottom: 60px;
  border-inline: 1px solid var(--color-gray-200);

  @media screen and (${ue.md}) {
    height: calc(100vh - 68px);
    padding-top: unset;
    padding-bottom: unset;
  }
`,z5=D.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  color: var(--color-secondary);
`,U5=D.div`
  width: 100%;
  padding-top: 2rem;
  text-align: center;
  color: var(--color-secondary);
`;function F5(){const{id:e}=_0(),{currentUser:t}=wt(),[n,r]=C.useState({}),[o,i]=C.useState([]),[l,s]=C.useState(""),[a,u]=C.useState(!0);return C.useEffect(()=>{(async()=>{try{const v=await f9(e),g=await h9(e);g!==void 0&&i(g),r(v),u(!1)}catch(v){console.error(v)}})()},[]),k(Ne,{children:[c(en,{headerText:"推文",goBack:!0}),k(j5,{children:[a&&c(z5,{children:c("div",{children:c(bn,{color:"var(--color-theme)"})})}),!a&&c(_5,{tweet:n,currentUser:t,replyInput:l,onChange:m=>{s(m)},onAddReply:async()=>{try{const m=await m9({id:n.id,comment:l});if(m==="error")return;const v=[{id:m.id,comment:m.comment,createdAt:m.createdAt,User:{id:t.id,account:t.account,name:t.name,avatar:t.avatar}},...o],g={...n,User:{...n.User},replyCounts:n.replyCounts+1};return setTimeout(()=>{i(v),r(g),s("")},2e3),{status:"ok"}}catch(m){return console.log(m),{status:"error"}}}}),!a&&o!==null&&c(Z9,{replies:o,replyTo:n}),!a&&o.length===0&&c(U5,{children:"該貼文目前沒有回覆"})]})]})}const af=D.div`
  position: absolute;
  top: 10%;
  left: 50%;
  display: grid;
  place-items: center;
`,B5=D.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
  padding: 1.6rem;
  padding-top: calc(62px + 1.6rem);
  padding-bottom: calc(60px + 1.6rem);
  border: 1px solid var(--color-gray-200);
  border-bottom: none;
  background-color: #fff;

  .logout {
    margin-top: 1rem;
    text-align: end;
  }
  @media screen and (${ue.md}) {
    height: calc(100vh - 68px);
    padding-top: unset;
    padding-bottom: unset;
    padding: 1.6rem;

    .logout {
      display: none;
    }
  }
`,Fr=D.div`
  margin-bottom: 1.5rem;
`,H5=D.div`
  display: flex;
  justify-content: end;

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: white;
    background-color: var(--color-theme);
    :hover {
      border: 1px solid var(--color-light-orange);
      background-color: var(--color-light-orange);
    }
  }
`;function V5(){const{currentUser:e,handleUserUpdate:t}=wt(),n={...e},{account:r,name:o,email:i}=n,[l,s]=C.useState(r),[a,u]=C.useState(o),[d,f]=C.useState(i),[m,v]=C.useState(""),[g,y]=C.useState(""),[x,h]=C.useState(""),[p,w]=C.useState(!1),[S,E]=C.useState(!1),_=a.length,P=bt();return C.useEffect(()=>{localStorage.getItem("token")||P("/login")},[P]),k(Ne,{children:[c(en,{headerText:"帳戶設定"}),k(B5,{children:[x&&c(af,{children:c(Rt,{type:"error",message:x})}),p&&c(af,{children:c(Rt,{type:"success",message:"修改成功"})}),c(Fr,{children:c(Ge,{label:"帳號",placeholder:"請輸入帳號",value:l,onChange:N=>s(N)})}),c(Fr,{children:c(Ge,{label:"名稱",placeholder:"請輸入使用者名稱",value:a,onChange:N=>u(N),InputLength:_})}),c(Fr,{children:c(Ge,{label:"Email",placeholder:"請輸入Email",value:d,onChange:N=>f(N)})}),c(Fr,{children:c(Ge,{type:"password",label:"密碼",placeholder:"請設定密碼",value:m,onChange:N=>v(N)})}),c(Fr,{children:c(Ge,{type:"password",label:"密碼確認",placeholder:"請再次輸入密碼",value:g,onChange:N=>y(N)})}),c(H5,{children:c("button",{type:"button",onClick:async N=>{if(N.preventDefault(),E(!0),l.trim().length===0||a.trim().length===0||d.trim().length===0||m.trim().length===0||g.trim().length===0){h("欄位不可空白!"),setTimeout(()=>{h(!1),E(!1)},1e3);return}if(a.length>50){h("字數超過上限!"),setTimeout(()=>{h(!1),E(!1)},1e3);return}if(m!==g){h("密碼與確認密碼不符!"),setTimeout(()=>{h(!1),E(!1)},1e3);return}const{data:K,status:Z}=await t9({id:e.id,account:l,name:a,email:d,password:m,checkPassword:g});K&&Z===200&&(E(!1),w(!0),setTimeout(()=>{w(!1)},1e3));const U={...e,account:K.account,name:K.name,email:K.email};t(U)},children:S?"儲存中...":"儲存"})}),c("div",{className:"logout",children:c(To,{onClick:()=>{localStorage.removeItem("token"),P("/login")},children:"登出"})})]})]})}const uf=D.div`
  position: absolute;
  top: 40%;
  left: 50%;
  display: grid;
  place-items: center;

  @media screen and (${ue.md}) {
    top: 10%;
  }
`,W5=D.div`
  margin-top: 1rem;
  font-size: var(--fs-h3);
  font-weight: 700;
`;function Q5(){const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(""),[l,s]=C.useState(""),[a,u]=C.useState(""),[d,f]=C.useState(""),[m,v]=C.useState("取消重填"),[g,y]=C.useState(!1),x=n.length,h=tl.useMediaQuery({query:`(max-width: ${sr.md} )`}),p=bt();C.useEffect(()=>{v(h?"取消重填":"取消")},[h]);const w=async()=>{if(e.trim().length===0||n.trim().length===0||o.trim().length===0||l.trim().length===0||a.trim().length===0){f("欄位不可空白!"),setTimeout(()=>{f(!1)},1e3);return}if(n.length>50){f("字數超過上限!"),setTimeout(()=>{f(!1)},1e3);return}if(l!==a){f("密碼與確認密碼不符!"),setTimeout(()=>{f(!1)},1e3);return}const{status:_,message:P}=await rf({account:e,name:n,email:o,password:l,checkPassword:a});_!=="error"&&(y(!0),setTimeout(()=>{y(!1),p("/login")},1e3)),_==="error"&&P&&(f(P),setTimeout(()=>{f(!1)},1e3))},S=async _=>{if(_.key==="Enter"){if(e.length===0||n.length===0||o.length===0||l.length===0||a.length===0){f("欄位不可空白!"),setTimeout(()=>{f(!1)},1e3);return}if(n.length>50){f("字數超過上限!"),setTimeout(()=>{f(!1)},1e3);return}if(l!==a){f("密碼與確認密碼不符!"),setTimeout(()=>{f(!1)},1e3);return}const{status:P,message:b}=await rf({account:e,name:n,email:o,password:l,checkPassword:a});P!=="error"&&(y(!0),setTimeout(()=>{y(!1),p("/login")},1e3)),P==="error"&&b&&(f(b),setTimeout(()=>{f(!1)},1e3))}};return k(cc,{children:[c("div",{children:c(Io,{})}),c(W5,{children:"建立你的帳號"}),c(Ht,{children:c(Ge,{label:"帳號",placeholder:"請輸入帳號",value:e,onChange:_=>t(_),onKeyDown:S})}),c(Ht,{children:c(Ge,{label:"名稱",placeholder:"請輸入使用者名稱",value:n,InputLength:x,onChange:_=>r(_),onKeyDown:S})}),c(Ht,{children:c(Ge,{label:"Email",placeholder:"請輸入Email",value:o,onChange:_=>i(_),onKeyDown:S})}),c(Ht,{children:c(Ge,{type:"password",label:"密碼",placeholder:"請設定密碼",value:l,onChange:_=>s(_),onKeyDown:S})}),c(Ht,{children:c(Ge,{type:"password",label:"密碼確認",placeholder:"請再次輸入密碼",value:a,onChange:_=>u(_),onKeyDown:S})}),c(ic,{name:"註冊",onClick:w}),c(To,{onClick:()=>{h?(t(""),r(""),i(""),s(""),u("")):p("/login")},children:m}),g&&c(uf,{children:c(Rt,{type:"success",message:"註冊成功 請登入"})}),d&&c(uf,{children:c(Rt,{type:"error",message:d})})]})}const Z5=D.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
  padding-top: 82px;
  padding-bottom: 60px;

  .tweet-input {
    display: none;
  }
  @media screen and (${ue.md}) {
    height: calc(100vh - 68px);
    padding-top: unset;
    padding-bottom: unset;

    .tweet-input {
      display: block;
    }
  }
`,K5=D.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-inline: 2px solid var(--color-gray-200);
  color: var(--color-secondary);
`;function Y5(){const e=bt(),[t,n]=C.useState(!0),{currentUser:r,tweets:o,setTweets:i,tweetInput:l,handleInputChange:s,handleAddTweet:a}=No();return C.useEffect(()=>{localStorage.getItem("token")||e("/login")},[e]),C.useEffect(()=>{(async()=>{try{const d=await d9();i(d),n(!1)}catch(d){console.error(d)}})()},[]),k(Ne,{children:[c(en,{headerText:"首頁"}),k(Z5,{children:[c("div",{className:"tweet-input",children:c(L5,{tweetInput:l,currentUser:r,onChange:s,onAddTweet:a})}),!t&&c(Q9,{user:r,tweets:o,type:"tweet"}),t&&c(K5,{children:c("div",{children:c(bn,{color:"var(--color-theme)"})})})]})]})}const G5=D.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
  padding-top: 68px;
  padding-bottom: 60px;

  @media screen and (${ue.md}) {
    height: calc(100vh - 73px);
    padding-top: unset;
    padding-bottom: unset;
  }
`,X5=D.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-inline: 2px solid var(--color-gray-200);
  color: var(--color-secondary);
`;function J5(){const{id:e}=_0();yt();const{currentUser:t}=wt(),[n,r]=C.useState(t),[o,i]=C.useState([]),[l,s]=C.useState([]),[a,u]=C.useState([]),[d,f]=C.useState(!0),m=async()=>{f(!0);try{const v=await Gy(e),g=await Xy(e),y=await Jy(e),x=await xp(e);r(v),i(g),s(y),u(x),f(!1)}catch(v){console.error(v)}};return C.useEffect(()=>{m()},[e]),k(Ne,{children:[d&&c(X5,{children:c("div",{children:c(bn,{color:"var(--color-theme)"})})}),!d&&k(Ne,{children:[c(en,{headerText:n.name,user:n,goBack:!0,shownUserTweets:o}),k(G5,{children:[c("div",{className:"profile",children:c(k5,{user:n,onProfileChange:m},n.id)}),c(Du,{context:{currentUser:t,shownUser:n,shownUserTweets:o,shownUserReplies:l,shownUserLikes:a}})]})]})]})}const cf=D.li`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }
  .title {
    font-size: var(fs-h5);
    font-weight: 700;
    margin: 0.5rem 0;
  }
  p {
    line-height: 1.625rem;
  }
`;function q5(){return k(Ne,{children:[c(en,{headerText:"通知"}),k(cf,{children:[c("img",{src:"http://placekitten.com/g/200/300",alt:"avatar"}),k("div",{children:[c("div",{className:"title",children:"John有新的推文通知"}),c("p",{children:"Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."})]})]}),c(cf,{children:k("div",{children:[c("img",{src:"http://placekitten.com/g/200/300",alt:"avatar"}),c("div",{className:"title",children:"Michael 開始追蹤你"})]})})]})}const e3=D.div`
  height: calc(100vh - 68px);
`,t3=D.li`
  display: grid;
  align-items: center;
  grid-template-columns: calc(50px + 0.5rem) 1fr;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
`;function n3(){return k(Ne,{children:[c(en,{headerText:"上線使用者(5)"}),c(e3,{children:k(t3,{children:[c("img",{src:"http://placekitten.com/g/200/300",alt:"avatar"}),k("div",{children:[c("b",{children:"name"}),c("span",{children:"@account"})]})]})})]})}const r3="/twitter-realtime-chat";function o3(){return c(sg,{basename:r3,children:k(Rv,{children:[c(Ry,{}),k(ng,{children:[c(ke,{path:"*",element:c(M5,{})}),c(ke,{path:"login",element:c(D5,{})}),c(ke,{path:"signup",element:c(Q5,{})}),k(ke,{path:"admin",children:[c(ke,{index:!0,element:c($5,{})}),k(ke,{element:c(y9,{}),children:[c(ke,{path:"tweets",element:c(t5,{})}),c(ke,{path:"users",element:c(u5,{})})]})]}),k(ke,{element:c(g9,{}),children:[k(ke,{path:"tweets",children:[c(ke,{index:!0,element:c(Y5,{})}),c(ke,{path:":id",element:c(F5,{})})]}),c(ke,{path:"notification",element:c(q5,{})}),c(ke,{path:"public",element:c(n3,{})}),c(ke,{element:c(J5,{}),children:k(ke,{path:"users/:id",children:[c(ke,{path:"tweets",element:c(R5,{})}),c(ke,{path:"replies",element:c(b5,{})}),c(ke,{path:"likes",element:c(O5,{})}),c(ke,{path:"followers",element:c(ef,{type:"followers"})}),c(ke,{path:"followings",element:c(ef,{type:"followings"})})]})}),c(ke,{path:"settings",element:c(V5,{})})]})]})]})})}Os.createRoot(document.getElementById("root")).render(c(Vn.StrictMode,{children:c(o3,{})}));
