(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function ox(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var th={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function bM(){if(Wv)return tl;Wv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return tl.Fragment=n,tl.jsx=a,tl.jsxs=a,tl}var Zv;function TM(){return Zv||(Zv=1,th.exports=bM()),th.exports}var E=TM(),nh={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function AM(){if(Kv)return it;Kv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function A(R){return R===null||typeof R!="object"?null:(R=M&&R[M]||R["@@iterator"],typeof R=="function"?R:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function O(R,Z,pe){this.props=R,this.context=Z,this.refs=x,this.updater=pe||N}O.prototype.isReactComponent={},O.prototype.setState=function(R,Z){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Z,"setState")},O.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function z(){}z.prototype=O.prototype;function D(R,Z,pe){this.props=R,this.context=Z,this.refs=x,this.updater=pe||N}var j=D.prototype=new z;j.constructor=D,S(j,O.prototype),j.isPureReactComponent=!0;var F=Array.isArray;function I(){}var B={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function C(R,Z,pe){var ue=pe.ref;return{$$typeof:o,type:R,key:Z,ref:ue!==void 0?ue:null,props:pe}}function G(R,Z){return C(R.type,Z,R.props)}function le(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function oe(R){var Z={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(pe){return Z[pe]})}var ve=/\/+/g;function he(R,Z){return typeof R=="object"&&R!==null&&R.key!=null?oe(""+R.key):Z.toString(36)}function q(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(I,I):(R.status="pending",R.then(function(Z){R.status==="pending"&&(R.status="fulfilled",R.value=Z)},function(Z){R.status==="pending"&&(R.status="rejected",R.reason=Z)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function ae(R,Z,pe,ue,Te){var ke=typeof R;(ke==="undefined"||ke==="boolean")&&(R=null);var Ne=!1;if(R===null)Ne=!0;else switch(ke){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(R.$$typeof){case o:case n:Ne=!0;break;case _:return Ne=R._init,ae(Ne(R._payload),Z,pe,ue,Te)}}if(Ne)return Te=Te(R),Ne=ue===""?"."+he(R,0):ue,F(Te)?(pe="",Ne!=null&&(pe=Ne.replace(ve,"$&/")+"/"),ae(Te,Z,pe,"",function(rt){return rt})):Te!=null&&(le(Te)&&(Te=G(Te,pe+(Te.key==null||R&&R.key===Te.key?"":(""+Te.key).replace(ve,"$&/")+"/")+Ne)),Z.push(Te)),1;Ne=0;var Re=ue===""?".":ue+":";if(F(R))for(var Be=0;Be<R.length;Be++)ue=R[Be],ke=Re+he(ue,Be),Ne+=ae(ue,Z,pe,ke,Te);else if(Be=A(R),typeof Be=="function")for(R=Be.call(R),Be=0;!(ue=R.next()).done;)ue=ue.value,ke=Re+he(ue,Be++),Ne+=ae(ue,Z,pe,ke,Te);else if(ke==="object"){if(typeof R.then=="function")return ae(q(R),Z,pe,ue,Te);throw Z=String(R),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function Q(R,Z,pe){if(R==null)return R;var ue=[],Te=0;return ae(R,ue,"","",function(ke){return Z.call(pe,ke,Te++)}),ue}function xe(R){if(R._status===-1){var Z=R._result,pe=Z();pe.then(function(ue){(R._status===0||R._status===-1)&&(R._status=1,R._result=ue,pe.status===void 0&&(pe.status="fulfilled",pe.value=ue))},function(ue){(R._status===0||R._status===-1)&&(R._status=2,R._result=ue,pe.status===void 0&&(pe.status="rejected",pe.reason=ue))}),R._status===-1&&(R._status=0,R._result=pe)}if(R._status===1)return R._result.default;throw R._result}var Se=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function Fe(R){var Z=B.T,pe={};pe.types=Z!==null?Z.types:null,B.T=pe;try{var ue=R(),Te=B.S;Te!==null&&Te(pe,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(I,Se)}catch(ke){Se(ke)}finally{Z!==null&&pe.types!==null&&(Z.types=pe.types),B.T=Z}}function et(R){var Z=B.T;if(Z!==null){var pe=Z.types;pe===null?Z.types=[R]:pe.indexOf(R)===-1&&pe.push(R)}else Fe(et.bind(null,R))}var ht={map:Q,forEach:function(R,Z,pe){Q(R,function(){Z.apply(this,arguments)},pe)},count:function(R){var Z=0;return Q(R,function(){Z++}),Z},toArray:function(R){return Q(R,function(Z){return Z})||[]},only:function(R){if(!le(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return it.Activity=g,it.Children=ht,it.Component=O,it.Fragment=a,it.Profiler=c,it.PureComponent=D,it.StrictMode=s,it.Suspense=p,it.ViewTransition=y,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,it.__COMPILER_RUNTIME={__proto__:null,c:function(R){return B.H.useMemoCache(R)}},it.addTransitionType=et,it.cache=function(R){return function(){return R.apply(null,arguments)}},it.cacheSignal=function(){return null},it.cloneElement=function(R,Z,pe){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ue=S({},R.props),Te=R.key;if(Z!=null)for(ke in Z.key!==void 0&&(Te=""+Z.key),Z)!U.call(Z,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&Z.ref===void 0||(ue[ke]=Z[ke]);var ke=arguments.length-2;if(ke===1)ue.children=pe;else if(1<ke){for(var Ne=Array(ke),Re=0;Re<ke;Re++)Ne[Re]=arguments[Re+2];ue.children=Ne}return C(R.type,Te,ue)},it.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:f,_context:R},R},it.createElement=function(R,Z,pe){var ue,Te={},ke=null;if(Z!=null)for(ue in Z.key!==void 0&&(ke=""+Z.key),Z)U.call(Z,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(Te[ue]=Z[ue]);var Ne=arguments.length-2;if(Ne===1)Te.children=pe;else if(1<Ne){for(var Re=Array(Ne),Be=0;Be<Ne;Be++)Re[Be]=arguments[Be+2];Te.children=Re}if(R&&R.defaultProps)for(ue in Ne=R.defaultProps,Ne)Te[ue]===void 0&&(Te[ue]=Ne[ue]);return C(R,ke,Te)},it.createRef=function(){return{current:null}},it.forwardRef=function(R){return{$$typeof:h,render:R}},it.isValidElement=le,it.lazy=function(R){return{$$typeof:_,_payload:{_status:-1,_result:R},_init:xe}},it.memo=function(R,Z){return{$$typeof:v,type:R,compare:Z===void 0?null:Z}},it.startTransition=Fe,it.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},it.use=function(R){return B.H.use(R)},it.useActionState=function(R,Z,pe){return B.H.useActionState(R,Z,pe)},it.useCallback=function(R,Z){return B.H.useCallback(R,Z)},it.useContext=function(R){return B.H.useContext(R)},it.useDebugValue=function(){},it.useDeferredValue=function(R,Z){return B.H.useDeferredValue(R,Z)},it.useEffect=function(R,Z){return B.H.useEffect(R,Z)},it.useEffectEvent=function(R){return B.H.useEffectEvent(R)},it.useId=function(){return B.H.useId()},it.useImperativeHandle=function(R,Z,pe){return B.H.useImperativeHandle(R,Z,pe)},it.useInsertionEffect=function(R,Z){return B.H.useInsertionEffect(R,Z)},it.useLayoutEffect=function(R,Z){return B.H.useLayoutEffect(R,Z)},it.useMemo=function(R,Z){return B.H.useMemo(R,Z)},it.useOptimistic=function(R,Z){return B.H.useOptimistic(R,Z)},it.useReducer=function(R,Z,pe){return B.H.useReducer(R,Z,pe)},it.useRef=function(R){return B.H.useRef(R)},it.useState=function(R){return B.H.useState(R)},it.useSyncExternalStore=function(R,Z,pe){return B.H.useSyncExternalStore(R,Z,pe)},it.useTransition=function(){return B.H.useTransition()},it.version="19.3.0",it}var Qv;function wp(){return Qv||(Qv=1,nh.exports=AM()),nh.exports}var Wt=wp();const RM=ox(Wt);var ih={exports:{}},nl={},ah={exports:{}},rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function CM(){return Jv||(Jv=1,(function(o){function n(q,ae){var Q=q.length;q.push(ae);e:for(;0<Q;){var xe=Q-1>>>1,Se=q[xe];if(0<c(Se,ae))q[xe]=ae,q[Q]=Se,Q=xe;else break e}}function a(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var ae=q[0],Q=q.pop();if(Q!==ae){q[0]=Q;e:for(var xe=0,Se=q.length,Fe=Se>>>1;xe<Fe;){var et=2*(xe+1)-1,ht=q[et],R=et+1,Z=q[R];if(0>c(ht,Q))R<Se&&0>c(Z,ht)?(q[xe]=Z,q[R]=Q,xe=R):(q[xe]=ht,q[et]=Q,xe=et);else if(R<Se&&0>c(Z,Q))q[xe]=Z,q[R]=Q,xe=R;else break e}}return ae}function c(q,ae){var Q=q.sortIndex-ae.sortIndex;return Q!==0?Q:q.id-ae.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],v=[],_=1,g=null,y=3,M=!1,A=!1,N=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(q){for(var ae=a(v);ae!==null;){if(ae.callback===null)s(v);else if(ae.startTime<=q)s(v),ae.sortIndex=ae.expirationTime,n(p,ae);else break;ae=a(v)}}function j(q){if(N=!1,D(q),!A)if(a(p)!==null)A=!0,F||(F=!0,le());else{var ae=a(v);ae!==null&&he(j,ae.startTime-q)}}var F=!1,I=-1,B=5,U=-1;function C(){return S?!0:!(o.unstable_now()-U<B)}function G(){if(S=!1,F){var q=o.unstable_now();U=q;var ae=!0;try{e:{A=!1,N&&(N=!1,O(I),I=-1),M=!0;var Q=y;try{t:{for(D(q),g=a(p);g!==null&&!(g.expirationTime>q&&C());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,y=g.priorityLevel;var Se=xe(g.expirationTime<=q);if(q=o.unstable_now(),typeof Se=="function"){g.callback=Se,D(q),ae=!0;break t}g===a(p)&&s(p),D(q)}else s(p);g=a(p)}if(g!==null)ae=!0;else{var Fe=a(v);Fe!==null&&he(j,Fe.startTime-q),ae=!1}}break e}finally{g=null,y=Q,M=!1}ae=void 0}}finally{ae?le():F=!1}}}var le;if(typeof z=="function")le=function(){z(G)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ve=oe.port2;oe.port1.onmessage=G,le=function(){ve.postMessage(null)}}else le=function(){x(G,0)};function he(q,ae){I=x(function(){q(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(q){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var Q=y;y=ae;try{return q()}finally{y=Q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(q,ae){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Q=y;y=q;try{return ae()}finally{y=Q}},o.unstable_scheduleCallback=function(q,ae,Q){var xe=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?xe+Q:xe):Q=xe,q){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,q={id:_++,callback:ae,priorityLevel:q,startTime:Q,expirationTime:Se,sortIndex:-1},Q>xe?(q.sortIndex=Q,n(v,q),a(p)===null&&q===a(v)&&(N?(O(I),I=-1):N=!0,he(j,Q-xe))):(q.sortIndex=Se,n(p,q),A||M||(A=!0,F||(F=!0,le()))),q},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(q){var ae=y;return function(){var Q=y;y=ae;try{return q.apply(this,arguments)}finally{y=Q}}}})(rh)),rh}var $v;function wM(){return $v||($v=1,ah.exports=CM()),ah.exports}var sh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function NM(){if(e_)return Dn;e_=1;var o=wp();function n(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,g,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:_,containerInfo:g,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(_){return{$$typeof:f,_reason:_}},Dn.createPortal=function(_,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return h(_,g,null,y)},Dn.flushSync=function(_){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=g,s.p=y,s.d.f()}},Dn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},Dn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Dn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var y=g.as,M=v(y,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:A,fetchPriority:N}):y==="script"&&s.d.X(_,{crossOrigin:M,integrity:A,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Dn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=v(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},Dn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,M=v(y,g.crossOrigin);s.d.L(_,y,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Dn.preloadModule=function(_,g){if(typeof _=="string")if(g){var y=v(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},Dn.requestFormReset=function(_){s.d.r(_)},Dn.unstable_batchedUpdates=function(_,g){return _(g)},Dn.useFormState=function(_,g,y){return p.H.useFormState(_,g,y)},Dn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Dn.version="19.3.0",Dn}var t_;function DM(){if(t_)return sh.exports;t_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),sh.exports=NM(),sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function UM(){if(n_)return nl;n_=1;var o=wM(),n=wp(),a=DM();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,i=t;i&&!i.alternate;)t=i,(t.flags&4098)!==0&&(e=t.return),i=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var i=e,r=t;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return p(l),e;if(u===r)return p(l),t;u=u.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=u;else{for(var m=!1,b=l.child;b;){if(b===i){m=!0,i=l,r=u;break}if(b===r){m=!0,r=l,i=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===i){m=!0,i=u,r=l;break}if(b===r){m=!0,r=u,i=l;break}b=b.sibling}if(!m)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}function g(e,t,i,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&i(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&g(e.child,t,i,r,l,u))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function A(e){var t=[null,null],i=y(e);return i===null||N(t,e,i.child,{foundSelf:!1}),t}function N(e,t,i,r){for(;i!==null;){if(i===t)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return e[1]=i,!0;e[0]=i}else if((i.tag!==22||i.memoizedState===null)&&N(e,t,i.child,r))return!0;i=i.sibling}return!1}function S(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,O=null;function z(e,t,i){return e===i?!0:e===t?(x=e,!0):!1}function D(e,t,i){return e===i?(O=e,!1):e===t?(O!==null&&(x=e),!0):!1}function j(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function F(e,t,i){for(var r=0,l=e;l;l=i(l))r++;l=0;for(var u=t;u;u=i(u))l++;for(;0<r-l;)e=i(e),r--;for(;0<l-r;)t=i(t),l--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=i(e),t=i(t)}return null}var I=Object.assign,B=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),ve=Symbol.for("react.consumer"),he=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),Fe=Symbol.for("react.activity"),et=Symbol.for("react.legacy_hidden"),ht=Symbol.for("react.memo_cache_sentinel"),R=Symbol.for("react.view_transition"),Z=Symbol.for("react.recoverable"),pe=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case oe:return"Profiler";case le:return"StrictMode";case ae:return"Suspense";case Q:return"SuspenseList";case Fe:return"Activity";case R:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case he:return e.displayName||"Context";case ve:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xe:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case Se:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var Ne=Array.isArray,Re=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Be=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},V=[],dn=-1;function at(e){return{current:e}}function Ke(e){0>dn||(e.current=V[dn],V[dn]=null,dn--)}function Ce(e,t){dn++,V[dn]=e.current,e.current=t}var xt=at(null),Xe=at(null),L=at(null),T=at(null);function ne(e,t){switch(Ce(L,t),Ce(Xe,e),Ce(xt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?iv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=iv(t),e=av(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ke(xt),Ce(xt,e)}function ge(){Ke(xt),Ke(Xe),Ke(L)}function ye(e){var t=e.memoizedState;t!==null&&(Us._currentValue=t.memoizedState,Ce(T,e)),t=xt.current;var i=av(t,e.type);t!==i&&(Ce(Xe,e),Ce(xt,i))}function me(e){Xe.current===e&&(Ke(xt),Ke(Xe)),T.current===e&&(Ke(T),Us._currentValue=rt)}var qe,Le;function Pe(e){if(qe===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);qe=t&&t[1]||"",Le=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+e+Le}var mt=!1;function Ee(e,t){if(!e||mt)return"";mt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(we){var X=we}Reflect.construct(e,[],de)}else{try{de.call()}catch(we){X=we}de=!1;try{var ee=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),de=!0,new e}finally{de&&(ee!==void 0?Object.defineProperty(e.prototype,"props",ee):delete e.prototype.props)}}}else{try{throw Error()}catch(we){X=we}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(we){if(we&&X&&typeof we.stack=="string")return[we.stack,X.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var P=m.split(`
`),W=b.split(`
`);for(l=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;if(r===P.length||l===W.length)for(r=P.length-1,l=W.length-1;1<=r&&0<=l&&P[r]!==W[l];)l--;for(;1<=r&&0<=l;r--,l--)if(P[r]!==W[l]){if(r!==1||l!==1)do if(r--,l--,0>l||P[r]!==W[l]){var ie=`
`+P[r].replace(" at new "," at ");return e.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",e.displayName)),ie}while(1<=r&&0<=l);break}}}finally{mt=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Pe(i):""}function Ve(e,t){switch(e.tag){case 26:case 27:case 5:return Pe(e.type);case 16:return Pe("Lazy");case 13:return e.child!==t&&t!==null?Pe("Suspense Fallback"):Pe("Suspense");case 19:return Pe("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return Pe("Activity");case 30:return Pe("ViewTransition");default:return""}}function Je(e){try{var t="",i=null;do t+=Ve(e,i),i=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var tt=Object.prototype.hasOwnProperty,Ge=o.unstable_scheduleCallback,pt=o.unstable_cancelCallback,ot=o.unstable_shouldYield,It=o.unstable_requestPaint,k=o.unstable_now,Oe=o.unstable_getCurrentPriorityLevel,ce=o.unstable_ImmediatePriority,_e=o.unstable_UserBlockingPriority,ze=o.unstable_NormalPriority,Ie=o.unstable_LowPriority,st=o.unstable_IdlePriority,Zt=o.log,vn=o.unstable_setDisableYieldValue,Et=null,qt=null;function _n(e){if(typeof Zt=="function"&&vn(e),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Et,e)}catch{}}var Un=Math.clz32?Math.clz32:co,_l=Math.log,Wi=Math.LN2;function co(e){return e>>>=0,e===0?32:31-(_l(e)/Wi|0)|0}var ur=256,fr=262144,Zi=4194304;function Oi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,t,i){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~u,r!==0?l=Oi(r):(m&=b,m!==0?l=Oi(m):i||(i=b&~e,i!==0&&(l=Oi(i))))):(b=r&~u,b!==0?l=Oi(b):m!==0?l=Oi(m):i||(i=r&~e,i!==0&&(l=Oi(i)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,i=t&-t,u>=i||u===32&&(i&4194048)!==0)?t:l}function Ta(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function uo(e,t){(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Un(i),l=1<<r;t|=e[r],i&=~l}return t}function Cu(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xl(){var e=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),e}function fo(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function dr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wu(e,t,i,r,l,u){var m=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,W=e.hiddenUpdates;for(i=m&~i;0<i;){var ie=31-Un(i),de=1<<ie;b[ie]=0,P[ie]=-1;var X=W[ie];if(X!==null)for(W[ie]=null,ie=0;ie<X.length;ie++){var ee=X[ie];ee!==null&&(ee.lane&=-536870913)}i&=~de}r!==0&&yl(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function yl(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Un(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|i&261930}function w(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-Un(i),l=1<<r;l&t|e[r]&t&&(e[r]|=t),i&=~l}}function K(e,t){var i=t&-t;return i=(i&42)!==0?1:re(i),(i&(e.suspendedLanes|t))!==0?0:i}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function se(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function J(){var e=Be.p;return e!==0?e:(e=window.event,e===void 0?32:Gv(e.type))}function Me(e,t){var i=Be.p;try{return Be.p=e,t()}finally{Be.p=i}}var Ae=Math.random().toString(36).slice(2),be="__reactFiber$"+Ae,De="__reactProps$"+Ae,Qe="__reactContainer$"+Ae,nt="__reactEvents$"+Ae,Ze="__reactListeners$"+Ae,bt="__reactHandles$"+Ae,Ct="__reactResources$"+Ae,kt="__reactMarker$"+Ae,Ht="__reactLoad$"+Ae;function gt(e){delete e[be],delete e[De],delete e[Ze],delete e[bt]}function Ye(e){var t;if(t=e[be])return t;for(var i=e.parentNode;i;){if(t=i[Qe]||i[be]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Sv(e);e!==null;){if(i=e[be])return i;e=Sv(e)}return t}e=i,i=e.parentNode}return null}function Kt(e){if(e=e[be]||e[Qe]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function xn(e){var t=e[Ct];return t||(t=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Yt(e){e[kt]=!0}function Ln(e){e[Ht]=void 0}var Aa=new Set,Gt={};function sn(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Gt[e]=t,e=0;e<t.length;e++)Aa.add(t[e])}var bn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tn={},Zr={};function Qi(e){return tt.call(Zr,e)?!0:tt.call(Tn,e)?!1:bn.test(e)?Zr[e]=!0:(Tn[e]=!0,!1)}var wt=!1;function kp(){var e=wt;return wt=!1,e}function Sl(e,t,i){if(Qi(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,i)}}function Ml(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,i)}}function Ji(e,t,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,r)}}function Qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jx(e,t,i){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nu(e){if(!e._valueTracker){var t=jp(e)?"checked":"value";e._valueTracker=jx(e,t,""+e[t])}}function Xp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=jp(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}var Xx=/[\n"\\]/g;function li(e){return e.replace(Xx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Du(e,t,i,r,l,u,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qn(t)):e.value!==""+Qn(t)&&(e.value=""+Qn(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?m==="number"&&e.value==t?Uu(e,Qn(e.value)):Uu(e,Qn(t)):i!=null?Uu(e,Qn(i)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Qn(b):e.removeAttribute("name")}function qp(e,t,i,r,l,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Nu(e);return}i=i!=null?""+Qn(i):"",t=t!=null?""+Qn(t):i,b||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Nu(e)}function Uu(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Kr(e,t,i,r){if(e=e.options,t){t={};for(var l=0;l<i.length;l++)t["$"+i[l]]=!0;for(i=0;i<e.length;i++)l=t.hasOwnProperty("$"+e[i].value),e[i].selected!==l&&(e[i].selected=l),l&&r&&(e[i].defaultSelected=!0)}else{for(i=""+Qn(i),t=null,l=0;l<e.length;l++){if(e[l].value===i){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Yp(e,t,i){if(t!=null&&(t=""+Qn(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Qn(i):""}function Wp(e,t,i,r){if(t==null){if(r!=null){if(i!=null)throw Error(s(92));if(Ne(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),t=i}i=Qn(t),e.defaultValue=i,r=e.textContent,r===i&&r!==""&&r!==null&&(e.value=r),Nu(e)}function Qr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var qx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zp(e,t,i){var r=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,i):typeof i!="number"||i===0||qx.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function Kp(e,t,i){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",wt=!0);for(var l in t)r=t[l],t.hasOwnProperty(l)&&i[l]!==r&&(Zp(e,l,r),wt=!0)}else for(var u in t)t.hasOwnProperty(u)&&Zp(e,u,t[u])}function Lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(e){return Wx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zi(){}var Ou=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jr=null,$r=null;function Qp(e){var t=Kt(e);if(t&&(e=t.stateNode)){var i=e[De]||null;e:switch(e=t.stateNode,t.type){case"input":if(Du(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+li(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var l=r[De]||null;if(!l)throw Error(s(90));Du(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<i.length;t++)r=i[t],r.form===e.form&&Xp(r)}break e;case"textarea":Yp(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Kr(e,!!i.multiple,t,!1)}}}var Pu=!1;function Jp(e,t,i){if(Pu)return e(t,i);Pu=!0;try{var r=e(t);return r}finally{if(Pu=!1,(Jr!==null||$r!==null)&&(Ec(),Jr&&(t=Jr,e=$r,$r=Jr=null,Qp(t),e)))for(t=0;t<e.length;t++)Qp(e[t])}}function ho(e,t){var i=e.stateNode;if(i===null)return null;var r=i[De]||null;if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,t,typeof i));return i}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if($i)try{var po={};Object.defineProperty(po,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Iu=!1}var Ra=null,Bu=null,bl=null;function $p(){if(bl)return bl;var e,t=Bu,i=t.length,r,l="value"in Ra?Ra.value:Ra.textContent,u=l.length;for(e=0;e<i&&t[e]===l[e];e++);var m=i-e;for(r=1;r<=m&&t[i-r]===l[u-r];r++);return bl=l.slice(e,1<r?1-r:void 0)}function Tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Al(){return!0}function em(){return!1}function In(e){function t(i,r,l,u,m){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(i=e[b],this[b]=i?i(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Al:em,this.isPropagationStopped=em,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=In(Ca),mo=I({},Ca,{view:0,detail:0}),Zx=In(mo),Fu,Hu,go,Cl=I({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(Fu=e.screenX-go.screenX,Hu=e.screenY-go.screenY):Hu=Fu=0,go=e),Fu)},movementY:function(e){return"movementY"in e?e.movementY:Hu}}),tm=In(Cl),Kx=I({},Cl,{dataTransfer:0}),Qx=In(Kx),Jx=I({},mo,{relatedTarget:0}),Gu=In(Jx),$x=I({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=In($x),ty=I({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ny=In(ty),iy=I({},Ca,{data:0}),nm=In(iy),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sy[e])?!!t[e]:!1}function Vu(){return oy}var ly=I({},mo,{key:function(e){if(e.key){var t=ay[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cy=In(ly),uy=I({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=In(uy),fy=I({},Ca,{submitter:0}),dy=In(fy),hy=I({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),py=In(hy),my=I({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=In(my),vy=I({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=In(vy),xy=I({},Ca,{newState:0,oldState:0,source:0}),yy=In(xy),Sy=[9,13,27,32],ku=$i&&"CompositionEvent"in window,vo=null;$i&&"documentMode"in document&&(vo=document.documentMode);var My=$i&&"TextEvent"in window&&!vo,am=$i&&(!ku||vo&&8<vo&&11>=vo),rm=" ",sm=!1;function om(e,t){switch(e){case"keyup":return Sy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var es=!1;function Ey(e,t){switch(e){case"compositionend":return lm(t);case"keypress":return t.which!==32?null:(sm=!0,rm);case"textInput":return e=t.data,e===rm&&sm?null:e;default:return null}}function by(e,t){if(es)return e==="compositionend"||!ku&&om(e,t)?(e=$p(),bl=Bu=Ra=null,es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return am&&t.locale!=="ko"?null:t.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ty[e.type]:t==="textarea"}function um(e,t,i,r){Jr?$r?$r.push(r):$r=[r]:Jr=r,t=wc(t,"onChange"),0<t.length&&(i=new Rl("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var _o=null,xo=null;function Ay(e){Q0(e,0)}function wl(e){var t=yt(e);if(Xp(t))return e}function fm(e,t){if(e==="change")return t}var dm=!1;if($i){var ju;if($i){var Xu="oninput"in document;if(!Xu){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Xu=typeof hm.oninput=="function"}ju=Xu}else ju=!1;dm=ju&&(!document.documentMode||9<document.documentMode)}function pm(){_o&&(_o.detachEvent("onpropertychange",mm),xo=_o=null)}function mm(e){if(e.propertyName==="value"&&wl(xo)){var t=[];um(t,xo,e,zu(e)),Jp(Ay,t)}}function Ry(e,t,i){e==="focusin"?(pm(),_o=t,xo=i,_o.attachEvent("onpropertychange",mm)):e==="focusout"&&pm()}function Cy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(xo)}function wy(e,t){if(e==="click")return wl(t)}function Ny(e,t){if(e==="input"||e==="change")return wl(t)}function Dy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jn=typeof Object.is=="function"?Object.is:Dy;function yo(e,t){if(Jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!tt.call(t,l)||!Jn(e[l],t[l]))return!1}return!0}function qu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vm(e,t){var i=gm(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=gm(i)}}function _m(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_m(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qu(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=qu(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uy=$i&&"documentMode"in document&&11>=document.documentMode,ts=null,Wu=null,So=null,Zu=!1;function ym(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Zu||ts==null||ts!==qu(r)||(r=ts,"selectionStart"in r&&Yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&yo(So,r)||(So=r,r=wc(Wu,"onSelect"),0<r.length&&(t=new Rl("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=ts)))}function hr(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ns={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Ku={},Sm={};$i&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function pr(e){if(Ku[e])return Ku[e];if(!ns[e])return e;var t=ns[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Sm)return Ku[e]=t[i];return e}var Mm=pr("animationend"),Em=pr("animationiteration"),bm=pr("animationstart"),Ly=pr("transitionrun"),Oy=pr("transitionstart"),zy=pr("transitioncancel"),Tm=pr("transitionend"),Am=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Mi(e,t){Am.set(e,t),sn(t,[e])}var Py=0;function ea(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ai.identifierPrefix;var i=Py++;return e="_"+e+"t_"+i.toString(32)+"_",t.autoName=e}function Rm(e){if(e==null||typeof e=="string")return e;var t=null,i=Ms;if(i!==null)for(var r=0;r<i.length;r++){var l=e[i[r]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function ta(e,t){return e=Rm(e),t=Rm(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],is=0,Ju=0;function Dl(){for(var e=is,t=Ju=is=0;t<e;){var i=ci[t];ci[t++]=null;var r=ci[t];ci[t++]=null;var l=ci[t];ci[t++]=null;var u=ci[t];if(ci[t++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}u!==0&&Cm(i,l,u)}}function Ul(e,t,i,r){ci[is++]=e,ci[is++]=t,ci[is++]=i,ci[is++]=r,Ju|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function $u(e,t,i,r){return Ul(e,t,i,r),Ll(e)}function mr(e,t){return Ul(e,null,null,t),Ll(e)}function Cm(e,t,i){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i);for(var l=!1,u=e.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Un(i),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[t]:r.push(t),t.lane=i|536870912),u):null}function Ll(e){if(50<ko)throw ko=0,Mc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var as={};function Iy(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,t,i,r){return new Iy(e,t,i,r)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,t){var i=e.alternate;return i===null?(i=jn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&1206910976,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function wm(e,t){e.flags&=1206910978;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ol(e,t,i,r,l,u){var m=0;if(r=e,typeof r=="function")ef(r)&&(m=1);else if(typeof r=="string")m=fM(e,i,xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case Fe:return e=jn(31,i,t,l),e.elementType=Fe,e.lanes=u,e;case G:return gr(i.children,l,u,t);case le:m=8,l|=24;break;case oe:return e=jn(12,i,t,l|2),e.elementType=oe,e.lanes=u,e;case ae:return e=jn(13,i,t,l),e.elementType=ae,e.lanes=u,e;case Q:return e=jn(19,i,t,l),e.elementType=Q,e.lanes=u,e;case et:case R:return e=l|32,e=jn(30,i,t,e),e.elementType=R,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case he:m=10;break e;case ve:m=9;break e;case q:m=11;break e;case xe:m=14;break e;case Se:m=16,r=null;break e}m=29,i=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=jn(m,i,t,l),t.elementType=e,t.type=r,t.lanes=u,t}function gr(e,t,i,r){return e=jn(7,e,r,t),e.lanes=i,e}function tf(e,t,i){return e=jn(6,e,null,t),e.lanes=i,e}function Nm(e){var t=jn(18,null,null,0);return t.stateNode=e,t}function nf(e,t,i){return t=jn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Dm=new WeakMap;function ui(e,t){if(typeof e=="object"&&e!==null){var i=Dm.get(e);return i!==void 0?i:(t={value:e,source:t,stack:Je(t)},Dm.set(e,t),t)}return{value:e,source:t,stack:Je(t)}}var rs=[],ss=0,zl=null,Mo=0,fi=[],di=0,wa=null,Pi=1,Ii="";function ia(e,t){rs[ss++]=Mo,rs[ss++]=zl,zl=e,Mo=t}function Um(e,t,i){fi[di++]=Pi,fi[di++]=Ii,fi[di++]=wa,wa=e;var r=Pi;e=Ii;var l=32-Un(r)-1;r&=~(1<<l),i+=1;var u=32-Un(t)+l;if(30<u){var m=l-l%5;u=(r&(1<<m)-1).toString(32),r>>=m,l-=m,Pi=1<<32-Un(t)+l|i<<l|r,Ii=u+e}else Pi=1<<u|i<<l|r,Ii=e}function Pl(e){e.return!==null&&(ia(e,1),Um(e,1,0))}function af(e){for(;e===zl;)zl=rs[--ss],rs[ss]=null,Mo=rs[--ss],rs[ss]=null;for(;e===wa;)wa=fi[--di],fi[di]=null,Ii=fi[--di],fi[di]=null,Pi=fi[--di],fi[di]=null}function Lm(e,t){fi[di++]=Pi,fi[di++]=Ii,fi[di++]=wa,Pi=t.id,Ii=t.overflow,wa=e}var yn=null,jt=null,dt=!1,Na=null,hi=!1,rf=Error(s(519));function Da(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(ui(t,e)),rf}function Om(e){var t=e.stateNode,i=e.type,r=e.memoizedProps;switch(t[be]=e,t[De]=r,i){case"dialog":_t("cancel",t),_t("close",t);break;case"iframe":case"object":case"embed":_t("load",t);break;case"video":case"audio":for(i=0;i<Xo.length;i++)_t(Xo[i],t);break;case"source":_t("error",t);break;case"img":case"image":case"link":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"input":_t("invalid",t),qp(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_t("invalid",t);break;case"textarea":_t("invalid",t),Wp(t,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||r.suppressHydrationWarning===!0||tv(t.textContent,i)?(r.popover!=null&&(_t("beforetoggle",t),_t("toggle",t)),r.onScroll!=null&&_t("scroll",t),r.onScrollEnd!=null&&_t("scrollend",t),r.onClick!=null&&(t.onclick=zi),t=!0):t=!1,t||Da(e,!0)}function Il(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:yn=yn.return}}function os(e){if(e!==yn)return!1;if(!dt)return Il(e),dt=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||zd(e.type,e.memoizedProps)),i=!i),i&&jt&&Da(e),Il(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));jt=yv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));jt=yv(e)}else t===27?(t=jt,Ya(e.type)?(e=jd,jd=null,jt=e):jt=t):jt=yn?mi(e.stateNode.nextSibling):null;return!0}function vr(){jt=yn=null,dt=!1}function sf(){var e=Na;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Na=null),e}function Eo(e){Na===null?Na=[e]:Na.push(e)}var of=at(null),_r=null,aa=null;function Ua(e,t,i){Ce(of,t._currentValue),t._currentValue=i}function ra(e){e._currentValue=of.current,Ke(of)}function Bl(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function lf(e,t,i,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=l;for(var P=0;P<t.length;P++)if(b.context===t[P]){u.lanes|=i,b=u.alternate,b!==null&&(b.lanes|=i),Bl(u.return,i,e),r||(m=null);break e}u=b.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=i,u=m.alternate,u!==null&&(u.lanes|=i),Bl(m,i,e),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),Bl(l.return,i,e),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function xr(e,t,i,r){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=l.type;Jn(l.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(l===T.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Us):e=[Us])}l=l.return}return e!==null&&lf(t,e,i,r),t.flags|=262144,e!==null}function Fl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yr(e){_r=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return zm(_r,e)}function Hl(e,t){return _r===null&&yr(e),zm(e,t)}function zm(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},aa===null){if(e===null)throw Error(s(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return i}var By=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},Fy=o.unstable_scheduleCallback,Hy=o.unstable_NormalPriority,on={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new By,data:new Map,refCount:0}}function bo(e){e.refCount--,e.refCount===0&&Fy(Hy,function(){e.controller.abort()})}function Pm(e,t){if((e.pendingLanes&4194048)!==0){var i=e.transitionTypes;for(i===null&&(i=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];i.indexOf(r)===-1&&i.push(r)}}}var To=null;function Gy(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ao=null,uf=0,Sr=0,ls=null;function Vy(e,t){if(Ao===null){var i=Ao=[];uf=0,Sr=Ad(),ls={status:"pending",value:void 0,then:function(r){i.push(r)}}}return uf++,t.then(Im,Im),t}function Im(){if(--uf===0&&(To=null,Ao!==null)){ls!==null&&(ls.status="fulfilled");var e=Ao;Ao=null,Sr=0,ls=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ky(e,t){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<i.length;l++)(0,i[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Bm=Re.S;Re.S=function(e,t){if(N0=k(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vy(e,t),To!==null)for(var i=As;i!==null;)Pm(i,To),i=i.next;if(i=e.types,i!==null){for(var r=As;r!==null;)Pm(r,i),r=r.next;if(Sr!==0){r=To,r===null&&(r=To=[]);for(var l=0;l<i.length;l++){var u=i[l];r.indexOf(u)===-1&&r.push(u)}}}Bm!==null&&Bm(e,t)};var Mr=at(null);function ff(){var e=Mr.current;return e!==null?e:Vt.pooledCache}function Gl(e,t){t===null?Ce(Mr,Mr.current):Ce(Mr,t.pool)}function Fm(){var e=ff();return e===null?null:{parent:on._currentValue,pool:e}}var cs=Error(s(460)),df=Error(s(474)),Vl=Error(s(542)),kl={then:function(){}};function Hm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gm(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(zi,zi),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,km(e),e===void 0&&!("reason"in t)?Error(s(600)):e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=Vt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,km(e),e}throw br=t,cs}}function Er(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(br=i,cs):i}}var br=null;function Vm(){if(br===null)throw Error(s(459));var e=br;return br=null,e}function km(e){if(e===cs||e===Vl)throw Error(s(483))}var us=null,Ro=0;function jl(e){var t=Ro;return Ro+=1,us===null&&(us=[]),Gm(us,e,t)}function La(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xl(e,t){throw t.$$typeof===B?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jm(e){function t(Y,H){if(e){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function i(Y,H){if(!e)return null;for(;H!==null;)t(Y,H),H=H.sibling;return null}function r(Y){for(var H=new Map;Y!==null;)Y.key===null?H.set(Y.index,Y):H.set(Y.key,Y),Y=Y.sibling;return H}function l(Y,H){return Y=na(Y,H),Y.index=0,Y.sibling=null,Y}function u(Y,H,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=134217730,H)):(Y.flags|=1048576,H)}function m(Y){return e&&Y.alternate===null&&(Y.flags|=134217730),Y}function b(Y,H,$,fe){return H===null||H.tag!==6?(H=tf($,Y.mode,fe),H.return=Y,H):(H=l(H,$),H.return=Y,H)}function P(Y,H,$,fe){var He=$.type;return He===G?(Y=ie(Y,H,$.props.children,fe,$.key),La(Y,$),Y):H!==null&&(H.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Se&&Er(He)===H.type)?(H=l(H,$.props),La(H,$),H.return=Y,H):(H=Ol($.type,$.key,$.props,null,Y.mode,fe),La(H,$),H.return=Y,H)}function W(Y,H,$,fe){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=nf($,Y.mode,fe),H.return=Y,H):(H=l(H,$.children||[]),H.return=Y,H)}function ie(Y,H,$,fe,He){return H===null||H.tag!==7?(H=gr($,Y.mode,fe,He),H.return=Y,H):(H=l(H,$),H.return=Y,H)}function de(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=tf(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case U:return $=Ol(H.type,H.key,H.props,null,Y.mode,$),La($,H),$.return=Y,$;case C:return H=nf(H,Y.mode,$),H.return=Y,H;case Se:return H=Er(H),de(Y,H,$)}if(Ne(H)||ue(H))return H=gr(H,Y.mode,$,null),H.return=Y,H;if(typeof H.then=="function")return de(Y,jl(H),$);if(H.$$typeof===he)return de(Y,Hl(Y,H),$);Xl(Y,H)}return null}function X(Y,H,$,fe){var He=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return He!==null?null:b(Y,H,""+$,fe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case U:return $.key===He?P(Y,H,$,fe):null;case C:return $.key===He?W(Y,H,$,fe):null;case Se:return $=Er($),X(Y,H,$,fe)}if(Ne($)||ue($))return He!==null?null:ie(Y,H,$,fe,null);if(typeof $.then=="function")return X(Y,H,jl($),fe);if($.$$typeof===he)return X(Y,H,Hl(Y,$),fe);Xl(Y,$)}return null}function ee(Y,H,$,fe,He){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return Y=Y.get($)||null,b(H,Y,""+fe,He);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case U:return Y=Y.get(fe.key===null?$:fe.key)||null,P(H,Y,fe,He);case C:return Y=Y.get(fe.key===null?$:fe.key)||null,W(H,Y,fe,He);case Se:return fe=Er(fe),ee(Y,H,$,fe,He)}if(Ne(fe)||ue(fe))return Y=Y.get($)||null,ie(H,Y,fe,He,null);if(typeof fe.then=="function")return ee(Y,H,$,jl(fe),He);if(fe.$$typeof===he)return ee(Y,H,$,Hl(H,fe),He);Xl(H,fe)}return null}function we(Y,H,$,fe){for(var He=null,Mt=null,We=H,$e=H=0,un=null;We!==null&&$e<$.length;$e++){We.index>$e?(un=We,We=null):un=We.sibling;var At=X(Y,We,$[$e],fe);if(At===null){We===null&&(We=un);break}e&&We&&At.alternate===null&&t(Y,We),H=u(At,H,$e),Mt===null?He=At:Mt.sibling=At,Mt=At,We=un}if($e===$.length)return i(Y,We),dt&&ia(Y,$e),He;if(We===null){for(;$e<$.length;$e++)We=de(Y,$[$e],fe),We!==null&&(H=u(We,H,$e),Mt===null?He=We:Mt.sibling=We,Mt=We);return dt&&ia(Y,$e),He}for(We=r(We);$e<$.length;$e++)un=ee(We,Y,$e,$[$e],fe),un!==null&&(e&&(At=un.alternate,At!==null&&We.delete(At.key===null?$e:At.key)),H=u(un,H,$e),Mt===null?He=un:Mt.sibling=un,Mt=un);return e&&We.forEach(function(Ja){return t(Y,Ja)}),dt&&ia(Y,$e),He}function je(Y,H,$,fe){if($==null)throw Error(s(151));for(var He=null,Mt=null,We=H,$e=H=0,un=null,At=$.next();We!==null&&!At.done;$e++,At=$.next()){We.index>$e?(un=We,We=null):un=We.sibling;var Ja=X(Y,We,At.value,fe);if(Ja===null){We===null&&(We=un);break}e&&We&&Ja.alternate===null&&t(Y,We),H=u(Ja,H,$e),Mt===null?He=Ja:Mt.sibling=Ja,Mt=Ja,We=un}if(At.done)return i(Y,We),dt&&ia(Y,$e),He;if(We===null){for(;!At.done;$e++,At=$.next())At=de(Y,At.value,fe),At!==null&&(H=u(At,H,$e),Mt===null?He=At:Mt.sibling=At,Mt=At);return dt&&ia(Y,$e),He}for(We=r(We);!At.done;$e++,At=$.next())At=ee(We,Y,$e,At.value,fe),At!==null&&(e&&(un=At.alternate,un!==null&&We.delete(un.key===null?$e:un.key)),H=u(At,H,$e),Mt===null?He=At:Mt.sibling=At,Mt=At);return e&&We.forEach(function(EM){return t(Y,EM)}),dt&&ia(Y,$e),He}function ct(Y,H,$,fe){if(typeof $=="object"&&$!==null&&$.type===G&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case U:e:{for(var He=$.key;H!==null;){if(H.key===He){if(He=$.type,He===G){if(H.tag===7){i(Y,H.sibling),fe=l(H,$.props.children),La(fe,$),fe.return=Y,Y=fe;break e}}else if(H.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Se&&Er(He)===H.type){i(Y,H.sibling),fe=l(H,$.props),La(fe,$),fe.return=Y,Y=fe;break e}i(Y,H);break}else t(Y,H);H=H.sibling}$.type===G?(fe=gr($.props.children,Y.mode,fe,$.key),La(fe,$),fe.return=Y,Y=fe):(fe=Ol($.type,$.key,$.props,null,Y.mode,fe),La(fe,$),fe.return=Y,Y=fe)}return m(Y);case C:e:{for(He=$.key;H!==null;){if(H.key===He)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){i(Y,H.sibling),fe=l(H,$.children||[]),fe.return=Y,Y=fe;break e}else{i(Y,H);break}else t(Y,H);H=H.sibling}fe=nf($,Y.mode,fe),fe.return=Y,Y=fe}return m(Y);case Se:return $=Er($),ct(Y,H,$,fe)}if(Ne($))return we(Y,H,$,fe);if(ue($)){if(He=ue($),typeof He!="function")throw Error(s(150));return $=He.call($),je(Y,H,$,fe)}if(typeof $.then=="function")return ct(Y,H,jl($),fe);if($.$$typeof===he)return ct(Y,H,Hl(Y,$),fe);Xl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,H!==null&&H.tag===6?(i(Y,H.sibling),fe=l(H,$),fe.return=Y,Y=fe):(i(Y,H),fe=tf($,Y.mode,fe),fe.return=Y,Y=fe),m(Y)):i(Y,H)}return function(Y,H,$,fe){try{Ro=0;var He=ct(Y,H,$,fe);return us=null,He}catch(We){if(We===cs||We===Vl)throw We;var Mt=jn(29,We,null,Y.mode);return Mt.lanes=fe,Mt.return=Y,Mt}finally{}}}var Tr=jm(!0),Xm=jm(!1),Oa=!1;function hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Dt&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=Ll(e),Cm(e,null,i),t}return Ul(e,r,t,i),Ll(e)}function Co(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,w(e,i)}}function mf(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,i=i.next}while(i!==null);u===null?l=u=t:u=u.next=t}else l=u=t;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var gf=!1;function wo(){if(gf){var e=ls;if(e!==null)throw e}}function No(e,t,i,r){gf=!1;var l=e.updateQueue;Oa=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var P=b,W=P.next;P.next=null,m===null?u=W:m.next=W,m=P;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,b=ie.lastBaseUpdate,b!==m&&(b===null?ie.firstBaseUpdate=W:b.next=W,ie.lastBaseUpdate=P))}if(u!==null){var de=l.baseState;m=0,ie=W=P=null,b=u;do{var X=b.lane&-536870913,ee=X!==b.lane;if(ee?(St&X)===X:(r&X)===X){X!==0&&X===Sr&&(gf=!0),ie!==null&&(ie=ie.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var we=e,je=b;X=t;var ct=i;switch(je.tag){case 1:if(we=je.payload,typeof we=="function"){de=we.call(ct,de,X);break e}de=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=je.payload,X=typeof we=="function"?we.call(ct,de,X):we,X==null)break e;de=I({},de,X);break e;case 2:Oa=!0}}X=b.callback,X!==null&&(e.flags|=64,ee&&(e.flags|=8192),ee=l.callbacks,ee===null?l.callbacks=[X]:ee.push(X))}else ee={lane:X,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ie===null?(W=ie=ee,P=de):ie=ie.next=ee,m|=X;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;ee=b,b=ee.next,ee.next=null,l.lastBaseUpdate=ee,l.shared.pending=null}}while(!0);ie===null&&(P=de),l.baseState=P,l.firstBaseUpdate=W,l.lastBaseUpdate=ie,u===null&&(l.shared.lanes=0),ka|=m,e.lanes=m,e.memoizedState=de}}function qm(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ym(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)qm(i[e],t)}var Ia=at(null),ql=at(0);function Wm(e,t){e=ua,Ce(ql,e),Ce(Ia,t),ua=e|t.baseLanes}function vf(){Ce(ql,ua),Ce(Ia,Ia.current)}function _f(){ua=ql.current,Ke(Ia),Ke(ql)}var Rn=at(null),On=null;function Ba(e){var t=e.alternate;Ce(Cn,Cn.current&1),Ce(Rn,e),On===null&&(t===null||Ia.current!==null||t.memoizedState!==null)&&(On=e)}function xf(e){Ce(Cn,Cn.current),Ce(Rn,e),On===null&&(On=e)}function Zm(e){e.tag===22?(Ce(Cn,Cn.current),Ce(Rn,e),On===null&&(On=e)):Fa()}function Fa(){Ce(Cn,Cn.current),Ce(Rn,Rn.current)}function $n(e){Ke(Rn),On===e&&(On=null),Ke(Cn)}var Cn=at(0);function Do(e,t){Ce(Rn,Rn.current),Ce(Cn,t)}function yf(e){Ke(Cn),Ke(Rn),On===e&&(On=null)}function Yl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Vd(i)||kd(i)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=0,lt=null,Bt=null,ln=null,Wl=!1,fs=!1,Ar=!1,Zl=0,Uo=0,ds=null,jy=0;function $t(){throw Error(s(321))}function Sf(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Jn(e[i],t[i]))return!1;return!0}function Mf(e,t,i,r,l,u){return sa=u,lt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Re.H=e===null||e.memoizedState===null?Ug:Lg,Ar=!1,u=i(r,l),Ar=!1,fs&&(u=Qm(t,i,r,l)),Km(e),u}function Km(e){Re.H=nc;var t=Bt!==null&&Bt.next!==null;if(sa=0,ln=Bt=lt=null,Wl=!1,Uo=0,ds=null,t)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&Fl(e)&&(cn=!0))}function Qm(e,t,i,r){lt=e;var l=0;do{if(fs&&(ds=null),Uo=0,fs=!1,25<=l)throw Error(s(301));if(l+=1,ln=Bt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Re.H=Jy,u=t(i,r)}while(fs);return u}function Xy(){var e=Re.H,t=e.useState()[0];return t=typeof t.then=="function"?Lo(t):t,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(lt.flags|=1024),t}function Ef(){var e=Zl!==0;return Zl=0,e}function bf(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function Tf(e){if(Wl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wl=!1}sa=0,ln=Bt=lt=null,fs=!1,Uo=Zl=0,ds=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?lt.memoizedState=ln=e:ln=ln.next=e,ln}function an(){if(Bt===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var t=ln===null?lt.memoizedState:ln.next;if(t!==null)ln=t,Bt=e;else{if(e===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},ln===null?lt.memoizedState=ln=e:ln=ln.next=e}return ln}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=Uo;return Uo+=1,ds===null&&(ds=[]),e=Gm(ds,e,t),t=lt,(ln===null?t.memoizedState:ln.next)===null&&(t=t.alternate,Re.H=t===null||t.memoizedState===null?Ug:Lg),e}function Ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Lo(e);if(e.$$typeof===Z)return;if(e.$$typeof===he)return An(e)}throw Error(s(438,String(e)))}function Af(e){var t=null,i=lt.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var r=lt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Kl(),lt.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),r=0;r<e;r++)i[r]=ht;return t.index++,i}function oa(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=an();return Rf(t,Bt,e)}function Rf(e,t,i){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}t.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var b=m=null,P=null,W=t,ie=!1;do{var de=W.lane&-536870913;if(de!==W.lane?(St&de)===de:(sa&de)===de){var X=W.revertLane;if(X===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),de===Sr&&(ie=!0);else if((sa&X)===X){W=W.next,X===Sr&&(ie=!0);continue}else de={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},P===null?(b=P=de,m=u):P=P.next=de,lt.lanes|=X,ka|=X;de=W.action,Ar&&i(u,de),u=W.hasEagerState?W.eagerState:i(u,de)}else X={lane:de,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},P===null?(b=P=X,m=u):P=P.next=X,lt.lanes|=de,ka|=de;W=W.next}while(W!==null&&W!==t);if(P===null?m=u:P.next=b,!Jn(u,e.memoizedState)&&(cn=!0,ie&&(i=ls,i!==null)))throw i;e.memoizedState=u,e.baseState=m,e.baseQueue=P,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Cf(e){var t=an(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var r=i.dispatch,l=i.pending,u=t.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);Jn(u,t.memoizedState)||(cn=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,r]}function Jm(e,t,i){var r=lt,l=an(),u=dt;if(u){if(i===void 0)throw Error(s(407));i=i()}else i=t();var m=!Jn((Bt||l).memoizedState,i);if(m&&(l.memoizedState=i,cn=!0),l=l.queue,Df(tg.bind(null,r,l,e),[e]),e=l.getSnapshot!==t||m||ln!==null&&(ln.memoizedState.tag&1)!==0,hs(e?9:8,{destroy:void 0},eg.bind(null,r,l,i,t),null),e){if(r.flags|=2048,Vt===null)throw Error(s(349));u||(sa&127)!==0||$m(r,t,i)}return i}function $m(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=lt.updateQueue,t===null?(t=Kl(),lt.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function eg(e,t,i,r){t.value=i,t.getSnapshot=r,ng(t)&&ig(e)}function tg(e,t,i){return i(function(){ng(t)&&ig(e)})}function ng(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Jn(e,i)}catch{return!0}}function ig(e){var t=mr(e,2);t!==null&&Wn(t,e,2)}function wf(e){var t=Bn();if(typeof e=="function"){var i=e;if(e=i(),Ar){_n(!0);try{i()}finally{_n(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t}function ag(e,t,i,r){return e.baseState=i,Rf(e,Bt,typeof r=="function"?r:oa)}function qy(e,t,i,r,l){if(tc(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};Re.T!==null?i(!0):u.isTransition=!1,r(u),i=t.pending,i===null?(u.next=t.pending=u,rg(t,u)):(u.next=i.next,t.pending=i.next=u)}}function rg(e,t){var i=t.action,r=t.payload,l=e.state;if(t.isTransition){var u=Re.T,m={};m.types=u!==null?u.types:null,Re.T=m;try{var b=i(l,r),P=Re.S;P!==null&&P(m,b),sg(e,t,b)}catch(W){Nf(e,t,W)}finally{u!==null&&m.types!==null&&(u.types=m.types),Re.T=u}}else try{u=i(l,r),sg(e,t,u)}catch(W){Nf(e,t,W)}}function sg(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){og(e,t,r)},function(r){return Nf(e,t,r)}):og(e,t,i)}function og(e,t,i){t.status="fulfilled",t.value=i,lg(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,rg(e,i)))}function Nf(e,t,i){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=i,lg(t),t=t.next;while(t!==r)}e.action=null}function lg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cg(e,t){return t}function ug(e,t){if(dt){var i=Vt.formState;if(i!==null){e:{var r=lt;if(dt){if(jt){t:{for(var l=jt,u=hi;l.nodeType!==8;){if(!u){l=null;break t}if(l=mi(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){jt=mi(l.nextSibling),r=l.data==="F!";break e}}Da(r)}r=!1}r&&(t=i[0])}}return i=Bn(),i.memoizedState=i.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:t},i.queue=r,i=wg.bind(null,lt,r),r.dispatch=i,r=wf(!1),u=Pf.bind(null,lt,!1,r.queue),r=Bn(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,i=qy.bind(null,lt,l,u,i),l.dispatch=i,r.memoizedState=e,[t,i,!1]}function fg(e){var t=an();return dg(t,Bt,e)}function dg(e,t,i){if(t=Rf(e,t,cg)[0],e=Jl(oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Lo(t)}catch(m){throw m===cs?Vl:m}else r=t;t=an();var l=t.queue,u=l.dispatch;return i!==t.memoizedState&&(lt.flags|=2048,hs(9,{destroy:void 0},Yy.bind(null,l,i),null)),[r,u,e]}function Yy(e,t){e.action=t}function hg(e){var t=an(),i=Bt;if(i!==null)return dg(t,i,e);an(),t=t.memoizedState,i=an();var r=i.queue.dispatch;return i.memoizedState=e,[t,r,!1]}function hs(e,t,i,r){return e={tag:e,create:i,deps:r,inst:t,next:null},t=lt.updateQueue,t===null&&(t=Kl(),lt.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e),e}function pg(){return an().memoizedState}function $l(e,t,i,r){var l=Bn();lt.flags|=e,l.memoizedState=hs(1|t,{destroy:void 0},i,r===void 0?null:r)}function ec(e,t,i,r){var l=an();r=r===void 0?null:r;var u=l.memoizedState.inst;Bt!==null&&r!==null&&Sf(r,Bt.memoizedState.deps)?l.memoizedState=hs(t,u,i,r):(lt.flags|=e,l.memoizedState=hs(1|t,u,i,r))}function mg(e,t){$l(8390656,8,e,t)}function Df(e,t){ec(2048,8,e,t)}function Wy(e){lt.flags|=4;var t=lt.updateQueue;if(t===null)t=Kl(),lt.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function gg(e){var t=an().memoizedState;return Wy({ref:t,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vg(e,t){return ec(4,2,e,t)}function _g(e,t){return ec(4,4,e,t)}function xg(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yg(e,t,i){i=i!=null?i.concat([e]):null,ec(4,4,xg.bind(null,t,e),i)}function Uf(){}function Sg(e,t){var i=an();t=t===void 0?null:t;var r=i.memoizedState;return t!==null&&Sf(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function Mg(e,t){var i=an();t=t===void 0?null:t;var r=i.memoizedState;if(t!==null&&Sf(t,r[1]))return r[0];if(r=e(),Ar){_n(!0);try{e()}finally{_n(!1)}}return i.memoizedState=[r,t],r}function Lf(e,t,i){return i===void 0||(sa&1073741824)!==0&&(St&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=U0(),lt.lanes|=e,ka|=e,i)}function Eg(e,t,i,r){return Jn(i,t)?i:Ia.current!==null?(e=Lf(e,i,r),Jn(e,t)||(cn=!0),e):(sa&106)===0||(sa&1073741824)!==0&&(St&261930)===0?(cn=!0,e.memoizedState=i):(e=U0(),lt.lanes|=e,ka|=e,t)}function bg(e,t,i,r,l){var u=Be.p;Be.p=u!==0&&8>u?u:8;var m=Re.T,b={};b.types=m!==null?m.types:null,Re.T=b,Pf(e,!1,t,i);try{var P=l(),W=Re.S;if(W!==null&&W(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ie=ky(P,r);Oo(e,t,ie,ii(e))}else Oo(e,t,r,ii(e))}catch(de){Oo(e,t,{then:function(){},status:"rejected",reason:de},ii())}finally{Be.p=u,m!==null&&b.types!==null&&(m.types=b.types),Re.T=m}}function Zy(){}function Of(e,t,i,r){if(e.tag!==5)throw Error(s(476));var l=Tg(e).queue;bg(e,l,t,rt,i===null?Zy:function(){return Ag(e),i(r)})}function Tg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:rt},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ag(e){var t=Tg(e);t.next===null&&(t=e.alternate.memoizedState),Oo(e,t.next.queue,{},ii())}function zf(){return An(Us)}function Rg(){return an().memoizedState}function Cg(){return an().memoizedState}function Ky(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=ii();e=za(i);var r=Pa(t,e,i);r!==null&&(Wn(r,t,i),Co(r,t,i)),t={cache:cf()},e.payload=t;return}t=t.return}}function Qy(e,t,i){var r=ii();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},tc(e)?Ng(t,i):(i=$u(e,t,i,r),i!==null&&(Wn(i,e,r),Dg(i,t,r)))}function wg(e,t,i){var r=ii();Oo(e,t,i,r)}function Oo(e,t,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(tc(e))Ng(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,b=u(m,i);if(l.hasEagerState=!0,l.eagerState=b,Jn(b,m))return Ul(e,t,l,0),Vt===null&&Dl(),!1}catch{}finally{}if(i=$u(e,t,l,r),i!==null)return Wn(i,e,r),Dg(i,t,r),!0}return!1}function Pf(e,t,i,r){if(r={lane:2,revertLane:Ad(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},tc(e)){if(t)throw Error(s(479))}else t=$u(e,i,r,2),t!==null&&Wn(t,e,2)}function tc(e){var t=e.alternate;return e===lt||t!==null&&t===lt}function Ng(e,t){fs=Wl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Dg(e,t,i){if((i&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,w(e,i)}}var nc={readContext:An,use:Ql,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t,useEffectEvent:$t},Ug={readContext:An,use:Ql,useCallback:function(e,t){return Bn().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:mg,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,$l(4194308,4,xg.bind(null,t,e),i)},useLayoutEffect:function(e,t){return $l(4194308,4,e,t)},useInsertionEffect:function(e,t){$l(4,2,e,t)},useMemo:function(e,t){var i=Bn();t=t===void 0?null:t;var r=e();if(Ar){_n(!0);try{e()}finally{_n(!1)}}return i.memoizedState=[r,t],r},useReducer:function(e,t,i){var r=Bn();if(i!==void 0){var l=i(t);if(Ar){_n(!0);try{i(t)}finally{_n(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=Qy.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var t=Bn();return e={current:e},t.memoizedState=e},useState:function(e){e=wf(e);var t=e.queue,i=wg.bind(null,lt,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Uf,useDeferredValue:function(e,t){var i=Bn();return Lf(i,e,t)},useTransition:function(){var e=wf(!1);return e=bg.bind(null,lt,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var r=lt,l=Bn();if(dt){if(i===void 0)throw Error(s(407));i=i()}else{if(i=t(),Vt===null)throw Error(s(349));(St&127)!==0||$m(r,t,i)}l.memoizedState=i;var u={value:i,getSnapshot:t};return l.queue=u,mg(tg.bind(null,r,u,e),[e]),r.flags|=2048,hs(9,{destroy:void 0},eg.bind(null,r,u,i,t),null),i},useId:function(){var e=Bn(),t=Vt.identifierPrefix;if(dt){var i=Ii,r=Pi;i=(r&~(1<<32-Un(r)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Zl++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=jy++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zf,useFormState:ug,useActionState:ug,useOptimistic:function(e){var t=Bn();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=Pf.bind(null,lt,!0,i),i.dispatch=t,[e,t]},useMemoCache:Af,useCacheRefresh:function(){return Bn().memoizedState=Ky.bind(null,lt)},useEffectEvent:function(e){var t=Bn(),i={impl:e};return t.memoizedState=i,function(){if((Dt&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Lg={readContext:An,use:Ql,useCallback:Sg,useContext:An,useEffect:Df,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:_g,useMemo:Mg,useReducer:Jl,useRef:pg,useState:function(){return Jl(oa)},useDebugValue:Uf,useDeferredValue:function(e,t){var i=an();return Eg(i,Bt.memoizedState,e,t)},useTransition:function(){var e=Jl(oa)[0],t=an().memoizedState;return[typeof e=="boolean"?e:Lo(e),t]},useSyncExternalStore:Jm,useId:Rg,useHostTransitionStatus:zf,useFormState:fg,useActionState:fg,useOptimistic:function(e,t){var i=an();return ag(i,Bt,e,t)},useMemoCache:Af,useCacheRefresh:Cg,useEffectEvent:gg},Jy={readContext:An,use:Ql,useCallback:Sg,useContext:An,useEffect:Df,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:_g,useMemo:Mg,useReducer:Cf,useRef:pg,useState:function(){return Cf(oa)},useDebugValue:Uf,useDeferredValue:function(e,t){var i=an();return Bt===null?Lf(i,e,t):Eg(i,Bt.memoizedState,e,t)},useTransition:function(){var e=Cf(oa)[0],t=an().memoizedState;return[typeof e=="boolean"?e:Lo(e),t]},useSyncExternalStore:Jm,useId:Rg,useHostTransitionStatus:zf,useFormState:hg,useActionState:hg,useOptimistic:function(e,t){var i=an();return Bt!==null?ag(i,Bt,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Af,useCacheRefresh:Cg,useEffectEvent:gg};function If(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:I({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Bf={enqueueSetState:function(e,t,i){e=e._reactInternals;var r=ii(),l=za(r);l.payload=t,i!=null&&(l.callback=i),t=Pa(e,l,r),t!==null&&(Wn(t,e,r),Co(t,e,r))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=ii(),l=za(r);l.tag=1,l.payload=t,i!=null&&(l.callback=i),t=Pa(e,l,r),t!==null&&(Wn(t,e,r),Co(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=ii(),r=za(i);r.tag=2,t!=null&&(r.callback=t),t=Pa(e,r,i),t!==null&&(Wn(t,e,i),Co(t,e,i))}};function Og(e,t,i,r,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,m):t.prototype&&t.prototype.isPureReactComponent?!yo(i,r)||!yo(l,u):!0}function zg(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&Bf.enqueueReplaceState(t,t.state,null)}function Rr(e,t){var i=t;if("ref"in t){i={};for(var r in t)r!=="ref"&&(i[r]=t[r])}if(e=e.defaultProps){i===t&&(i=I({},i));for(var l in e)i[l]===void 0&&(i[l]=e[l])}return i}function Pg(e){Nl(e)}function Ig(e){console.error(e)}function Bg(e){Nl(e)}function ic(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Fg(e,t,i){try{var r=e.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ff(e,t,i){return i=za(i),i.tag=3,i.payload={element:null},i.callback=function(){ic(e,t)},i}function Hg(e){return e=za(e),e.tag=3,e}function Gg(e,t,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){Fg(t,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Fg(t,i,r),typeof l!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function $y(e,t,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=i.alternate,t!==null&&xr(t,i,l,!0),i=Rn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return On===null?bc():i.alternate===null&&en===0&&(en=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===kl?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([r]):t.add(r),Ed(e,r,l)),!1;case 22:return i.flags|=65536,r===kl?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([r]):i.add(r)),Ed(e,r,l)),!1}throw Error(s(435,i.tag))}return Ed(e,r,l),bc(),!1}if(dt)return t=Rn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==rf&&(e=Error(s(422),{cause:r}),Eo(ui(e,i)))):(r!==rf&&(t=Error(s(423),{cause:r}),Eo(ui(t,i))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=ui(r,i),l=Ff(e.stateNode,r,l),mf(e,l),en!==4&&(en=2)),!1;var u=Error(s(520),{cause:r});if(u=ui(u,i),Vo===null?Vo=[u]:Vo.push(u),en!==4&&(en=2),t===null)return!0;r=ui(r,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=l&-l,i.lanes|=e,e=Ff(i.stateNode,r,e),mf(i,e),!1;case 1:if(t=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ja===null||!ja.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Hg(l),Gg(l,e,i,r),mf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Hf=Error(s(461)),cn=!1;function pn(e,t,i,r){t.child=e===null?Xm(t,null,i,r):Tr(t,e.child,i,r)}function Vg(e,t,i,r,l){i=i.render;var u=t.ref;if("ref"in r){var m={};for(var b in r)b!=="ref"&&(m[b]=r[b])}else m=r;return yr(t),r=Mf(e,t,i,m,u,l),b=Ef(),e!==null&&!cn?(bf(e,t,l),la(e,t,l)):(dt&&b&&Pl(t),t.flags|=1,pn(e,t,r,l),t.child)}function kg(e,t,i,r,l){if(e===null){var u=i.type;return typeof u=="function"&&!ef(u)&&u.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=u,jg(e,t,u,r,l)):(e=Ol(i.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Wf(e,l)){var m=u.memoizedProps;if(i=i.compare,i=i!==null?i:yo,i(m,r)&&e.ref===t.ref)return la(e,t,l)}return t.flags|=1,e=na(u,r),e.ref=t.ref,e.return=t,t.child=e}function jg(e,t,i,r,l){if(e!==null){var u=e.memoizedProps;if(yo(u,r)&&e.ref===t.ref)if(cn=!1,t.pendingProps=r=u,Wf(e,l))(e.flags&131072)!==0&&(cn=!0);else return t.lanes=e.lanes,la(e,t,l)}return Gf(e,t,i,r,l)}function Xg(e,t,i,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(r=t.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,t.child=null;return qg(e,t,u,i,r)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gl(t,u!==null?u.cachePool:null),u!==null?Wm(t,u):vf(),Zm(t);else return r=t.lanes=536870912,qg(e,t,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(Gl(t,u.cachePool),Wm(t,u),Fa(),t.memoizedState=null):(e!==null&&Gl(t,null),vf(),Fa());return pn(e,t,l,i),t.child}function zo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qg(e,t,i,r,l){var u=ff();return u=u===null?null:{parent:on._currentValue,pool:u},t.memoizedState={baseLanes:i,cachePool:u},e!==null&&Gl(t,null),vf(),Zm(t),e!==null&&xr(e,t,r,!0),t.childLanes=l,null}function ac(e,t){return t=rc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Yg(e,t,i){return Tr(t,e.child,null,i),e=ac(t,t.pendingProps),e.flags|=2,$n(t),t.memoizedState=null,e}function eS(e,t,i){var r=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(dt){if(r.mode==="hidden")return e=ac(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},zo(null,e);if(xf(t),(e=jt)?(e=xv(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=Nm(e),i.return=t,t.child=i,yn=t,jt=null)):e=null,e===null)throw Da(t);return t.lanes=536870912,null}return ac(t,r)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(xf(t),l)if(t.flags&256)t.flags&=-257,t=Yg(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(cn||xr(e,t,i,!1),l=(i&e.childLanes)!==0,cn||l){if(Ia.current===null){if(r=Vt,r!==null&&(m=K(r,i),m!==0&&m!==u.retryLane))throw u.retryLane=m,mr(e,m),Wn(r,e,m),Hf;bc()}t=Yg(e,t,i)}else e=u.treeContext,jt=mi(m.nextSibling),yn=t,dt=!0,Na=null,hi=!1,e!==null&&Lm(t,e),t=ac(t,r),t.flags|=134221824;return t}return e=na(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ps(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Gf(e,t,i,r,l){return yr(t),i=Mf(e,t,i,r,void 0,l),r=Ef(),e!==null&&!cn?(bf(e,t,l),la(e,t,l)):(dt&&r&&Pl(t),t.flags|=1,pn(e,t,i,l),t.child)}function Wg(e,t,i,r,l,u){return yr(t),t.updateQueue=null,i=Qm(t,r,i,l),Km(e),r=Ef(),e!==null&&!cn?(bf(e,t,u),la(e,t,u)):(dt&&r&&Pl(t),t.flags|=1,pn(e,t,i,u),t.child)}function Zg(e,t,i,r,l){if(yr(t),t.stateNode===null){var u=as,m=i.contextType;typeof m=="object"&&m!==null&&(u=An(m)),u=new i(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Bf,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},hf(t),m=i.contextType,u.context=typeof m=="object"&&m!==null?An(m):as,u.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(If(t,i,m,r),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Bf.enqueueReplaceState(u,u.state,null),No(t,r,u,l),wo(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,P=Rr(i,b);u.props=P;var W=u.context,ie=i.contextType;m=as,typeof ie=="object"&&ie!==null&&(m=An(ie));var de=i.getDerivedStateFromProps;ie=typeof de=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,ie||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||W!==m)&&zg(t,u,r,m),Oa=!1;var X=t.memoizedState;u.state=X,No(t,r,u,l),wo(),W=t.memoizedState,b||X!==W||Oa?(typeof de=="function"&&(If(t,i,de,r),W=t.memoizedState),(P=Oa||Og(t,i,P,r,X,W,m))?(ie||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=W),u.props=r,u.state=W,u.context=m,r=P):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,pf(e,t),m=t.memoizedProps,ie=Rr(i,m),u.props=ie,de=t.pendingProps,X=u.context,W=i.contextType,P=as,typeof W=="object"&&W!==null&&(P=An(W)),b=i.getDerivedStateFromProps,(W=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==de||X!==P)&&zg(t,u,r,P),Oa=!1,X=t.memoizedState,u.state=X,No(t,r,u,l),wo();var ee=t.memoizedState;m!==de||X!==ee||Oa||e!==null&&e.dependencies!==null&&Fl(e.dependencies)?(typeof b=="function"&&(If(t,i,b,r),ee=t.memoizedState),(ie=Oa||Og(t,i,ie,r,X,ee,P)||e!==null&&e.dependencies!==null&&Fl(e.dependencies))?(W||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ee,P),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ee,P)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ee),u.props=r,u.state=ee,u.context=P,r=ie):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,ps(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=Tr(t,e.child,null,l),t.child=Tr(t,null,i,l)):pn(e,t,i,l),t.memoizedState=u.state,e=t.child):e=la(e,t,l),e}function Kg(e,t,i,r){return vr(),t.flags|=256,pn(e,t,i,r),t.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(e){return{baseLanes:e,cachePool:Fm()}}function jf(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=ni),e}function Qg(e,t,i){var r=t.pendingProps,l=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(dt){if(l?Ba(t):Fa(),(e=jt)?(e=xv(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=Nm(e),i.return=t,t.child=i,yn=t,jt=null)):e=null,e===null)throw Da(t);return kd(e)?t.lanes=32:t.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Fa(),l=t.mode,u=rc({mode:"hidden",children:u},l),r=gr(r,l,i,null),u.return=t,r.return=t,u.sibling=r,t.child=u,r=t.child,r.memoizedState=kf(i),r.childLanes=jf(e,m,i),t.memoizedState=Vf,zo(null,r)):(Ba(t),Xf(t,u))}var b=e.memoizedState;if(b!==null){var P=b.dehydrated;if(P!==null)return tS(e,t,u,m,r,P,b,i)}return l?(Fa(),l=r.fallback,u=t.mode,b=e.child,P=b.sibling,r=na(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&1206910976,P!==null?l=na(P,l):(l=gr(l,u,i,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,zo(null,r),r=t.child,l=e.child.memoizedState,l===null?l=kf(i):(u=l.cachePool,u!==null?(b=on._currentValue,u=u.parent!==b?{parent:b,pool:b}:u):u=Fm(),l={baseLanes:l.baseLanes|i,cachePool:u}),r.memoizedState=l,r.childLanes=jf(e,m,i),t.memoizedState=Vf,zo(e.child,r)):(Ba(t),i=e.child,e=i.sibling,i=na(i,{mode:"visible",children:r.children}),i.return=t,i.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=i,t.memoizedState=null,i)}function Xf(e,t){return t=rc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rc(e,t){return e=jn(22,e,null,t),e.lanes=0,e}function sc(e,t,i){return Tr(t,e.child,null,i),e=Xf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tS(e,t,i,r,l,u,m,b){if(i)return t.flags&256?(Ba(t),t.flags&=-257,sc(e,t,b)):t.memoizedState!==null?(Fa(),t.child=e.child,t.flags|=128,null):(Fa(),u=l.fallback,m=t.mode,l=rc({mode:"visible",children:l.children},m),u=gr(u,m,b,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Tr(t,e.child,null,b),l=t.child,l.memoizedState=kf(b),l.childLanes=jf(e,r,b),t.memoizedState=Vf,zo(null,l));if(Ba(t),kd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Eo({value:l,source:null,stack:null})),sc(e,t,b)}if(cn||xr(e,t,b,!1),r=(b&e.childLanes)!==0,cn||r){if(Ia.current!==null)return sc(e,t,b);if(r=Vt,r!==null&&(l=K(r,b),l!==0&&l!==m.retryLane))throw m.retryLane=l,mr(e,l),Wn(r,e,l),Hf;return Vd(u)||bc(),sc(e,t,b)}return Vd(u)?(t.flags|=192,t.child=e.child,null):(e=m.treeContext,jt=mi(u.nextSibling),yn=t,dt=!0,Na=null,hi=!1,e!==null&&Lm(t,e),t=Xf(t,l.children),t.flags|=134221824,t)}function Jg(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bl(e.return,t,i)}function $g(e){for(var t=null;e!==null;){var i=e.alternate;i!==null&&Yl(i)===null&&(t=e),e=e.sibling}return t}function oc(e,t,i,r,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=l,m.treeForkCount=u)}function qf(e){var t=e.child;for(e.child=null;t!==null;){var i=t.sibling;t.sibling=e.child,e.child=t,t=i}}function Yf(e,t,i){var r=t.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var m=Cn.current;if(t.flags&128)return Do(t,m),null;var b=(m&2)!==0;if(b?(m=m&1|2,t.flags|=128):m&=1,Do(t,m),l==="backwards"&&e!==null?(qf(e),pn(e,t,r,i),qf(e)):pn(e,t,r,i),r=dt?Mo:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jg(e,i,t);else if(e.tag===19)Jg(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":i=$g(t.child),i===null?(l=t.child,t.child=null):(l=i.sibling,i.sibling=null,qf(t)),oc(t,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(i=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yl(e)===null){t.child=l;break}e=l.sibling,l.sibling=i,i=l,l=e}oc(t,!0,i,null,u,r);break;case"together":oc(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:i=$g(t.child),i===null?(l=t.child,t.child=null):(l=i.sibling,i.sibling=null),oc(t,!1,l,i,u,r)}return t.child}function e0(e,t,i){var r=t.pendingProps;return Ua(t,t.type,r.value),pn(e,t,r.children,i),t.child}function la(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(xr(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,i=na(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=na(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Wf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fl(e)))}function nS(e,t,i){switch(t.tag){case 3:ne(t,t.stateNode.containerInfo),Ua(t,on,e.memoizedState.cache),vr();break;case 27:case 5:ye(t);break;case 4:ne(t,t.stateNode.containerInfo);break;case 10:Ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,xf(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ba(t),t.flags|=128,null;r=xr(e,t,i,!1);var l=t.child.childLanes;return r||(i&l)!==0?Qg(e,t,i):(Ba(t),e=la(e,t,i),e!==null?e.sibling:null)}Ba(t);break;case 19:if(t.flags&128)return Yf(e,t,i);if(l=(e.flags&128)!==0,r=(i&t.childLanes)!==0,r||(xr(e,t,i,!1),r=(i&t.childLanes)!==0),l){if(r)return Yf(e,t,i);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Do(t,Cn.current),r)break;return null;case 22:return t.lanes=0,Xg(e,t,i,t.pendingProps);case 24:Ua(t,on,e.memoizedState.cache)}return la(e,t,i)}function t0(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)cn=!0;else{if(!Wf(e,i)&&(t.flags&128)===0)return cn=!1,nS(e,t,i);cn=(e.flags&131072)!==0}else cn=!1,dt&&(t.flags&1048576)!==0&&Um(t,Mo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Er(t.elementType),t.type=e,typeof e=="function")ef(e)?(r=Rr(e,r),t.tag=1,t=Zg(null,t,e,r,i)):(t.tag=0,t=Gf(null,t,e,r,i));else{if(e!=null){var l=e.$$typeof;if(l===q){t.tag=11,t=Vg(null,t,e,r,i);break e}else if(l===xe){t.tag=14,t=kg(null,t,e,r,i);break e}else if(l===he){t.tag=10,t.type=e,t=e0(null,t,i);break e}}throw t=ke(e)||e,Error(s(306,t,""))}}return t;case 0:return Gf(e,t,t.type,t.pendingProps,i);case 1:return r=t.type,l=Rr(r,t.pendingProps),Zg(e,t,r,l,i);case 3:e:{if(ne(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var u=t.memoizedState;l=u.element,pf(e,t),No(t,r,null,i);var m=t.memoizedState;if(r=m.cache,Ua(t,on,r),r!==u.cache&&lf(t,[on],i,!0),wo(),r=m.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Kg(e,t,r,i);break e}else if(r!==l){l=ui(Error(s(424)),t),Eo(l),t=Kg(e,t,r,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(jt=mi(e.firstChild),yn=t,dt=!0,Na=null,hi=!0,i=Xm(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(vr(),r===l){t=la(e,t,i);break e}pn(e,t,r,i)}t=t.child}return t;case 26:return ps(e,t),e===null?(i=Av(t.type,null,t.pendingProps,null))?t.memoizedState=i:dt||(t.stateNode=rv(t.type,t.pendingProps,L.current,t)):t.memoizedState=Av(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&dt&&(r=t.stateNode=Mv(t.type,t.pendingProps,L.current),yn=t,hi=!0,l=jt,Ya(t.type)?(jd=l,jt=mi(r.firstChild)):jt=l),pn(e,t,t.pendingProps.children,i),ps(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&dt&&((l=r=jt)&&(r=KS(r,t.type,t.pendingProps,hi),r!==null?(t.stateNode=r,yn=t,jt=mi(r.firstChild),hi=!1,l=!0):l=!1),l||Da(t)),ye(t),l=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,r=u.children,zd(l,u)?r=null:m!==null&&zd(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=Mf(e,t,Xy,null,null,i),Us._currentValue=l),ps(e,t),pn(e,t,r,i),t.child;case 6:return e===null&&dt&&((e=i=jt)&&(i=QS(i,t.pendingProps,hi),i!==null?(t.stateNode=i,yn=t,jt=null,e=!0):e=!1),e||Da(t)),null;case 13:return Qg(e,t,i);case 4:return ne(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,i):pn(e,t,r,i),t.child;case 11:return Vg(e,t,t.type,t.pendingProps,i);case 7:return r=t.pendingProps,ps(e,t),pn(e,t,r,i),t.child;case 8:return pn(e,t,t.pendingProps.children,i),t.child;case 12:return pn(e,t,t.pendingProps.children,i),t.child;case 10:return e0(e,t,i);case 9:return l=t.type._context,r=t.pendingProps.children,yr(t),l=An(l),r=r(l),t.flags|=1,pn(e,t,r,i),t.child;case 14:return kg(e,t,t.type,t.pendingProps,i);case 15:return jg(e,t,t.type,t.pendingProps,i);case 19:return Yf(e,t,i);case 31:return eS(e,t,i);case 22:return Xg(e,t,i,t.pendingProps);case 24:return yr(t),r=An(on),e===null?(l=ff(),l===null&&(l=Vt,u=cf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),t.memoizedState={parent:r,cache:l},hf(t),Ua(t,on,l)):((e.lanes&i)!==0&&(pf(e,t),No(t,null,null,i),wo()),l=e.memoizedState,u=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ua(t,on,r)):(r=u.cache,Ua(t,on,r),r!==l.cache&&lf(t,[on],i,!0))),pn(e,t,t.pendingProps.children,i),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!=="auto"?t.flags|=e===null?18882560:18874368:dt&&Pl(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:ps(e,t),pn(e,t,r.children,i),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function ca(e){e.flags|=4}function Zf(e,t,i,r,l){var u;if((u=(e.mode&32)!==0)&&(u=i===null?Nv(t,r):Nv(t,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(P0())e.flags|=8192;else throw br=kl,df}else e.flags&=-16777217}function n0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dv(t))if(P0())e.flags|=8192;else throw br=kl,df}function lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xl():536870912,e.lanes|=t,xs|=t)}function Po(e,t){if(!dt)switch(e.tailMode){case"visible":break;case"collapsed":for(var i=e.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null}}function Xt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var l=e.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function iS(e,t,i){var r=t.pendingProps;switch(af(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(t),null;case 1:return Xt(t),null;case 3:return i=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(on),ge(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(os(t)?ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sf())),Xt(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(ca(t),u!==null?(Xt(t),n0(t,u)):(Xt(t),Zf(t,l,null,r,i))):u?u!==e.memoizedState?(ca(t),Xt(t),n0(t,u)):(Xt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&ca(t),Xt(t),Zf(t,l,e,r,i)),null;case 27:if(me(t),i=L.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ca(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Xt(t),t.subtreeFlags&=-33554433,null}e=xt.current,os(t)?Om(t):(e=Mv(l,r,i),t.stateNode=e,ca(t))}return Xt(t),t.subtreeFlags&=-33554433,null;case 5:if(me(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ca(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Xt(t),t.subtreeFlags&=-33554433,null}if(u=xt.current,os(t))Om(t);else{var m=Yo(L.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}u[be]=t,u[De]=r;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(Nn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ca(t)}}return Xt(t),t.subtreeFlags&=-33554433,Zf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ca(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=L.current,os(t)){if(e=t.stateNode,i=t.memoizedProps,r=null,l=yn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[be]=t,e=!!(e.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||tv(e.nodeValue,i)),e||Da(t,!0)}else e=Yo(e).createTextNode(r),e[be]=t,t.stateNode=e}return Xt(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(r=os(t),i!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[be]=t}else vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xt(t),e=!1}else i=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?($n(t),t):($n(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Xt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[be]=t}else vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xt(t),l=!1}else l=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?($n(t),t):($n(t),null)}return $n(t),(t.flags&128)!==0?(t.lanes=i,t):(i=r!==null,e=e!==null&&e.memoizedState!==null,i&&(r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),lc(t,t.updateQueue),Xt(t),null);case 4:return ge(),e===null&&Nd(t.stateNode.containerInfo),t.flags|=67108864,Xt(t),null;case 10:return ra(t.type),Xt(t),null;case 19:if(yf(t),r=t.memoizedState,r===null)return Xt(t),null;if(l=(t.flags&128)!==0,u=r.rendering,u===null)if(l)Po(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Yl(e),u!==null){for(t.flags|=128,Po(r,!1),e=u.updateQueue,t.updateQueue=e,lc(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)wm(i,e),i=i.sibling;return Do(t,Cn.current&1|2),dt&&ia(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&k()>yc&&(t.flags|=128,l=!0,Po(r,!1),t.lanes=4194304)}else{if(!l)if(e=Yl(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,lc(t,e),Po(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!dt)return Xt(t),null}else 2*k()-r.renderingStartTime>yc&&i!==536870912&&(t.flags|=128,l=!0,Po(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(i=e;i!==null;){if(i.alternate!==null){i=!1;break e}i=i.sibling}i=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=k(),e.sibling=null,u=Cn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||dt?Do(t,u):(i=u,Ce(Rn,t),Ce(Cn,i),On===null&&(On=t)),dt&&ia(t,r.treeForkCount),e}return Xt(t),null;case 22:case 23:return $n(t),_f(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(i&536870912)!==0&&(t.flags&128)===0&&(Xt(t),t.subtreeFlags&6&&(t.flags|=8192)):Xt(t),i=t.updateQueue,i!==null&&lc(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==i&&(t.flags|=2048),e!==null&&Ke(Mr),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ra(on),Xt(t),null;case 25:return null;case 30:return t.flags|=33554432,Xt(t),null}throw Error(s(156,t.tag))}function aS(e,t){switch(af(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(on),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return me(t),null;case 31:if(t.memoizedState!==null){if($n(t),t.alternate===null)throw Error(s(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if($n(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return yf(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ge(),null;case 10:return ra(t.type),null;case 22:case 23:return $n(t),_f(),e!==null&&Ke(Mr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(on),null;case 25:return null;default:return null}}function i0(e,t){switch(af(t),t.tag){case 3:ra(on),ge();break;case 26:case 27:case 5:me(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&$n(t);break;case 13:$n(t);break;case 19:yf(t);break;case 10:ra(t.type);break;case 22:case 23:$n(t),_f(),e!==null&&Ke(Mr);break;case 24:ra(on)}}function Io(e,t){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&e)===e){r=void 0;var u=i.create,m=i.inst;r=u(),m.destroy=r}i=i.next}while(i!==l)}}catch(b){zt(t,t.return,b)}}function Ha(e,t,i){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var m=r.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,l=t;var P=i,W=b;try{W()}catch(ie){zt(l,P,ie)}}}r=r.next}while(r!==u)}}catch(ie){zt(t,t.return,ie)}}function a0(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{Ym(t,i)}catch(r){zt(e,e.return,r)}}}function r0(e,t,i){i.props=Rr(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(r){zt(e,t,r)}}function Bi(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=ea(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=dv(u)),r=l.ref;break;case 7:if(e.stateNode===null){var m=new ai(e);g(e.child,!1,WS,m,void 0,void 0),e.stateNode=m}r=e.stateNode;break;default:r=e.stateNode}typeof i=="function"?e.refCleanup=i(r):i.current=r}}catch(b){zt(e,t,b)}}function wn(e,t){var i=e.ref,r=e.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){zt(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){zt(e,t,l)}else i.current=null}function cc(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var i=0;i<t.length;i++)_v(e.stateNode,t[i])}function s0(e){for(var t=e.return;t!==null&&(Qf(t)&&_v(e.stateNode,t.stateNode),!Kf(t));)t=t.return}function Bo(e){for(var t=e.return;t!==null&&(Qf(t)&&ZS(e.stateNode,t.stateNode),!Kf(t));)t=t.return}function Kf(e){return e.tag===5||e.tag===3||e.tag===27}function Qf(e){return e&&e.tag===7&&e.stateNode!==null}function Jf(e){var t=e.type,i=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break e;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){zt(e,e.return,l)}}function $f(e,t,i){try{var r=e.stateNode;NS(r,e.type,i,t),r[De]=t}catch(l){zt(e,e.return,l)}}function o0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function td(e,t,i,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(l),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=zi)),cc(e,r),wt=!0;else if(l!==4&&(l===27&&(cc(e,r),r=null,Ya(e.type)&&(i=e.stateNode,t=null)),e=e.child,e!==null))for(td(e,t,i,r),e=e.sibling;e!==null;)td(e,t,i,r),e=e.sibling}function uc(e,t,i,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?i.insertBefore(l,t):i.appendChild(l),cc(e,r),wt=!0;else if(l!==4&&(l===27&&(cc(e,r),r=null,Ya(e.type)&&(i=e.stateNode)),e=e.child,e!==null))for(uc(e,t,i,r),e=e.sibling;e!==null;)uc(e,t,i,r),e=e.sibling}function l0(e){var t=e.stateNode,i=e.memoizedProps;try{for(var r=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Nn(t,r,i),t[be]=e,t[De]=i}catch(u){zt(e,e.return,u)}}var fc=!1,ei=null;function c0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(fc=!0)}var Fi=null;function u0(){var e=Fi;return Fi=null,e}var Xn=0;function ms(e,t,i,r,l){return Xn=0,f0(e.child,t,i,r,l)}function f0(e,t,i,r,l){for(var u=!1;e!==null;){if(e.tag===5){var m=e.stateNode;if(r!==null){var b=Bd(m);r.push(b),b.view&&(u=!0)}else u||Bd(m).view&&(u=!0);fc=!0,uv(m,Xn===0?t:t+"_"+Xn,i),Xn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||f0(e.child,t,i,r,l)&&(u=!0));e=e.sibling}return u}function Hi(e,t){for(;e!==null;)e.tag===5?fv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Hi(e.child,t)),e=e.sibling}function dc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(dc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(s(544));var i=t.name;t=ta(t.default,t.share),t!=="none"&&(ms(e,i,t,null,!1)||Hi(e.child,!1))}e=e.sibling}}function nd(e,t){if(e.tag===30){var i=e.stateNode,r=e.memoizedProps,l=ea(r,i),u=ta(r.default,i.paired?r.share:r.enter);u!=="none"?ms(e,l,u,null,!1)?(dc(e),i.paired||t||Es(e,r.onEnter)):Hi(e.child,!1):dc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)nd(e,t),e=e.sibling;else dc(e)}function id(e){if(ei!==null&&ei.size!==0){var t=ei;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var i=e.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=t.get(r);if(l!==void 0){var u=ta(i.default,i.share);if(u!=="none"&&(ms(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,Es(e,i.onShare)):Hi(e.child,!1)),t.delete(r),t.size===0)break}}}id(e)}e=e.sibling}}}function ad(e){if(e.tag===30){var t=e.memoizedProps,i=ea(t,e.stateNode),r=ei!==null?ei.get(i):void 0,l=ta(t.default,r!==void 0?t.share:t.exit);l!=="none"&&(ms(e,i,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ei.delete(i),Es(e,t.onShare)):Es(e,t.onExit):Hi(e.child,!1)),ei!==null&&id(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ad(e),e=e.sibling;else ei!==null&&id(e)}function d0(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,i=ea(t,e.stateNode);t=ta(t.default,t.update),e.flags&=-5,t!=="none"&&ms(e,i,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&d0(e);e=e.sibling}}function rd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Hi(e.child,!1))}rd(e)}e=e.sibling}}function hc(e){if(e.tag===30)e.stateNode.paired=null,Hi(e.child,!1),rd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)hc(e),e=e.sibling;else rd(e)}function h0(e){for(e=e.child;e!==null;)e.tag===30?Hi(e.child,!1):(e.subtreeFlags&33554432)!==0&&h0(e),e=e.sibling}function sd(e,t,i,r,l,u,m){for(var b=!1;t!==null;){if(t.tag===5){var P=t.stateNode;if(u!==null&&Xn<u.length){var W=u[Xn],ie=Bd(P);(W.view||ie.view)&&(b=!0);var de;if(de=(e.flags&4)===0)if(ie.clip)de=!0;else{de=W.rect;var X=ie.rect;de=de.y!==X.y||de.x!==X.x||de.height!==X.height||de.width!==X.width}de&&(e.flags|=4),ie.abs?ie=!W.abs:(W=W.rect,ie=ie.rect,ie=W.height!==ie.height||W.width!==ie.width),ie&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&uv(P,Xn===0?i:i+"_"+Xn,l),b&&(e.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(P,Xn===0?r:r+"_"+Xn,t.memoizedProps)),Xn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&m?e.flags|=t.flags&32:sd(e,t.child,i,r,l,u,m)&&(b=!0));t=t.sibling}return b}function p0(e,t){for(e=e.child;e!==null;){if(e.tag===30){var i=e.memoizedProps,r=e.stateNode,l=ea(i,r),u=ta(i.default,i.update),m;m=e.memoizedState,e.memoizedState=null,r=e;var b=e.child;Xn=0,l=sd(r,b,l,l,u,m,!1),(e.flags&4)!==0&&l&&Es(e,i.onUpdate)}else(e.subtreeFlags&33554432)!==0&&p0(e);e=e.sibling}}var Sn=!1,Ut=!1,Gi=!1,od=!1,m0=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Vi=!1,Fo=!1,pc=!1,ld=!1;function rS(e,t,i){if(e=e.containerInfo,Ld=Ls,e=xm(e),Yu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var b=0,P=-1,W=-1,ie=0,de=0,X=e,ee=null;t:for(;;){for(var we;X!==r||u!==0&&X.nodeType!==3||(P=b+u),X!==m||l!==0&&X.nodeType!==3||(W=b+l),X.nodeType===3&&(b+=X.nodeValue.length),(we=X.firstChild)!==null;)ee=X,X=we;for(;;){if(X===e)break t;if(ee===r&&++ie===u&&(P=b),ee===m&&++de===l&&(W=b),(we=X.nextSibling)!==null)break;X=ee,ee=X.parentNode}X=we}r=P===-1||W===-1?null:{start:P,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(Od={focusedElem:e,selectionRange:r},Ls=!1,i=(i&335544064)===i,Mn=t,t=i?9270:1024;Mn!==null;){if(e=Mn,i&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)i&&ad(r[u]);if(e.alternate===null&&(e.flags&2)!==0)i&&c0(e),mc(i);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&ad(r),mc(i);continue}else if(r!==null&&r.memoizedState!==null){i&&c0(e),mc(i);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,Mn=r):(i&&d0(e),mc(i))}}ei=null}function mc(e){for(;Mn!==null;){var t=Mn,i=e,r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var u=t.stateNode;try{var m=Rr(t.type,l);i=u.getSnapshotBeforeUpdate(m,r),u.__reactInternalSnapshotBeforeUpdate=i}catch(b){zt(t,t.return,b)}}break;case 3:if((l&1024)!==0){if(r=t.stateNode.containerInfo,i=r.nodeType,i===9)Gd(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Gd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ea(r.memoizedProps,r.stateNode),l=t.memoizedProps,l=ta(l.default,l.update),l!=="none"&&ms(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,Mn=r;break}Mn=t.return}}function g0(e,t,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:ki(e,i),r&4&&Io(5,i);break;case 1:if(ki(e,i),r&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(m){zt(i,i.return,m)}else{var l=Rr(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){zt(i,i.return,m)}}r&64&&a0(i),r&512&&Bi(i,i.return);break;case 3:if(ki(e,i),r&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Ym(e,t)}catch(m){zt(i,i.return,m)}}break;case 27:t===null&&r&4&&l0(i);case 26:case 5:ki(e,i),t===null&&r&4&&Jf(i),r&512&&Bi(i,i.return);break;case 12:ki(e,i);break;case 31:ki(e,i),r&4&&y0(e,i);break;case 13:ki(e,i),r&4&&S0(e,i),r&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=vS.bind(null,i),JS(e,i))));break;case 22:if(r=i.memoizedState!==null||Sn,!r){var u=t!==null&&t.memoizedState!==null||Ut;t=Sn,l=Ut,Sn=r,(Ut=u)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ti(e,i,r)):ki(e,i),Sn=t,Ut=l}break;case 30:ki(e,i),r&512&&Bi(i,i.return);break;case 7:r&512&&Bi(i,i.return);default:ki(e,i)}}function cd(e,t){for(e=e.child;e!==null;)v0(e,t),e=e.sibling}function v0(e,t){switch(e.tag){case 5:case 26:try{var i=e.stateNode;if(t){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,m=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(P){zt(e,e.return,P)}ud(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,wt=!0}catch(P){zt(e,e.return,P)}break;case 18:try{var b=e.stateNode;t?cv(b,!0):cv(e.stateNode,!1)}catch(P){zt(e,e.return,P)}break;case 22:case 23:e.memoizedState===null&&cd(e,t);break;default:cd(e,t)}}function ud(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var i=e,r=t;switch(i.tag){case 4:v0(i,r);break e;case 22:i.memoizedState===null&&ud(i,r);break e;default:ud(i,r)}}e=e.sibling}}function _0(e){var t=e.alternate;t!==null&&(e.alternate=null,_0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,qn=!1;function Ei(e,t,i){for(i=i.child;i!==null;)x0(e,t,i),i=i.sibling}function x0(e,t,i){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Et,i)}catch{}switch(i.tag){case 26:Ut||wn(i,t),Ei(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ut&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ut||wn(i,t),Bo(i);var r=Qt,l=qn;Ya(i.type)&&(Qt=i.stateNode,qn=!1),Ei(e,t,i),Ev(i.stateNode,i.type,i.memoizedProps),Qt=r,qn=l;break;case 5:Ut||wn(i,t),Bo(i);case 6:if(i.tag===6&&Bo(i),r=Qt,l=qn,Qt=null,Ei(e,t,i),Qt=r,qn=l,Qt!==null)if(qn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(i.stateNode),wt=!0}catch(u){zt(i,t,u)}else try{Qt.removeChild(i.stateNode),wt=!0}catch(u){zt(i,t,u)}break;case 18:Qt!==null&&(qn?(e=Qt,lv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Os(e)):lv(Qt,i.stateNode));break;case 4:r=Qt,l=qn,Qt=i.stateNode.containerInfo,qn=!0,Ei(e,t,i),Qt=r,qn=l;break;case 0:case 11:case 14:case 15:Ha(2,i,t),Ut||Ha(4,i,t),Ei(e,t,i);break;case 1:Ut||(wn(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"&&r0(i,t,r)),Ei(e,t,i);break;case 21:Ei(e,t,i);break;case 22:Ut=(r=Ut)||i.memoizedState!==null,Ei(e,t,i),Ut=r;break;case 30:wn(i,t),Ei(e,t,i);break;case 7:Ut||wn(i,t),Ei(e,t,i);break;default:Ei(e,t,i)}}function y0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Os(e)}catch(i){zt(t,t.return,i)}}}function S0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Os(e)}catch(i){zt(t,t.return,i)}}function sS(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new m0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new m0),t;default:throw Error(s(435,e.tag))}}function gc(e,t){var i=sS(e);t.forEach(function(r){if(!i.has(r)){i.add(r);var l=_S.bind(null,e,r);r.then(l,l)}})}function Fn(e,t,i){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],m=e,b=t,P=b;e:for(;P!==null;){switch(P.tag){case 27:if(Ya(P.type)){Qt=P.stateNode,qn=!1;break e}break;case 5:Qt=P.stateNode,qn=!1;break e;case 3:case 4:Qt=P.stateNode.containerInfo,qn=!0;break e}P=P.return}if(Qt===null)throw Error(s(160));x0(m,b,u),Qt=null,qn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)M0(t,e,i),t=t.sibling}var bi=null;function M0(e,t,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var m=r[u];m.ref.impl=m.nextImpl}Fn(t,e,i),Hn(e),l&4&&(Ha(3,e,e.return),Io(3,e),Ha(5,e,e.return));break;case 1:Fn(t,e,i),Hn(e),l&512&&(Ut||r===null||wn(r,r.return)),l&64&&Sn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?t:i.concat(t))));break;case 26:if(u=bi,Fn(t,e,i),Hn(e),l&512&&(Ut||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=e.memoizedState,r===null)if(i===null)if(e.stateNode===null)if(Sn)e.stateNode=rv(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,i=e.memoizedProps,l=u.ownerDocument||u;t:switch(t){case"title":r=l.getElementsByTagName("title")[0],(!r||r[kt]||r[be]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(t),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,t,i),r[be]=e,Yt(r),t=r;break e;case"link":if(u=wv("link","href",l).get(t+(i.href||""))){for(m=0;m<u.length;m++)if(r=u[m],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(m,1);break t}}r=l.createElement(t),Nn(r,t,i),l.head.appendChild(r);break;case"meta":if(u=wv("meta","content",l).get(t+(i.content||""))){for(m=0;m<u.length;m++)if(r=u[m],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(m,1);break t}}r=l.createElement(t),Nn(r,t,i),l.head.appendChild(r);break;default:throw Error(s(468,t))}r[be]=e,Yt(r),t=r}e.stateNode=t}else Sn||Wd(u,e.type,e.stateNode);else e.stateNode=Cv(u,i,e.memoizedProps);else l!==i?(l===null?(t=r.stateNode,t===null||Ut||t.parentNode.removeChild(t)):l.count--,i===null?Sn||Wd(u,e.type,e.stateNode):Cv(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&$f(e,e.memoizedProps,r.memoizedProps);break;case 27:Fn(t,e,i),Hn(e),l&512&&(Ut||r===null||wn(r,r.return)),r!==null&&l&4&&$f(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Gi,Gi=!1,Fn(t,e,i),Gi=u,Hn(e),l&512&&(Ut||r===null||wn(r,r.return)),e.flags&32){t=e.stateNode;try{Qr(t,""),wt=!0}catch(ie){zt(e,e.return,ie)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,$f(e,t,r!==null?r.memoizedProps:t)),l&1024&&(od=!0);break;case 6:if(Fn(t,e,i),Hn(e),l&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,i=e.stateNode;try{i.nodeValue=t,wt=!0}catch(ie){zt(e,e.return,ie)}}break;case 3:if(wt=!1,Dc=null,u=bi,bi=Wo(t.containerInfo),Fn(t,e,i),bi=u,Hn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(t.containerInfo)}catch(ie){zt(e,e.return,ie)}od&&(od=!1,E0(e)),wt=!1;break;case 4:l=Gi,Gi=Sn,r=kp(),u=bi,bi=Wo(e.stateNode.containerInfo),Fn(t,e,i),Hn(e),bi=u,wt&&Fo&&(pc=!0),wt=r,Gi=l;break;case 12:Fn(t,e,i),Hn(e);break;case 31:Fn(t,e,i),Hn(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,gc(e,t)));break;case 13:Fn(t,e,i),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xc=k()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,gc(e,t)));break;case 22:u=e.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var b=Sn,P=Ut,W=Gi;Sn=b||u,Gi=W||u,Ut=P||m,Fn(t,e,i),Ut=P,Gi=W,Sn=b,Hn(e),l&8192&&(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,!u||r===null||m||Sn||Ut||(t=m||Ut,i=Sn,r=Ut,Sn=u||Sn,Ut=t,Ga(e,2),Sn=i,Ut=r),!u&&Gi||cd(e,u)),l&4&&(t=e.updateQueue,t!==null&&(i=t.retryQueue,i!==null&&(t.retryQueue=null,gc(e,i))));break;case 19:Fn(t,e,i),Hn(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,gc(e,t)));break;case 30:l&512&&(Ut||r===null||wn(r,r.return)),l=kp(),u=Fo,m=(i&335544064)===i,b=e.memoizedProps,Fo=m&&ta(b.default,b.update)!=="none",Fn(t,e,i),Hn(e),m&&r!==null&&wt&&(e.flags|=4),Fo=u,wt=l;break;case 21:break;case 7:l&512&&(Ut||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Fn(t,e,i),Hn(e)}}function Hn(e){var t=e.flags;if(t&2){try{for(var i,r=e.return;r!==null;){if(o0(r)){i=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(Qf(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(Kf(l))break;l=l.return}var m=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var b=i.stateNode,P=ed(e);uc(e,P,b,m);break;case 5:var W=i.stateNode;i.flags&32&&(Qr(W,""),i.flags&=-33);var ie=ed(e);uc(e,ie,W,m);break;case 3:case 4:var de=i.stateNode.containerInfo,X=ed(e);td(e,X,de,m);break;default:throw Error(s(161))}}catch(ee){zt(e,e.return,ee)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function E0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;E0(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Ls=!0,t.reset(),Ls=!1),e=e.sibling}}function gs(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)b0(t,e),t=t.sibling;else p0(t)}function b0(e,t){var i=e.alternate;if(i===null)nd(e,!1);else switch(e.tag){case 3:if(ld=Vi=!1,u0(),gs(t,e),!Vi&&!pc){if(e=Fi,e!==null)for(var r=0;r<e.length;r+=3){i=e[r];var l=e[r+1];fv(i,e[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ld=!0}Fi=null;break;case 5:gs(t,e);break;case 4:r=Vi,Vi=!1,gs(t,e),Vi&&(pc=!0),Vi=r;break;case 22:e.memoizedState===null&&(i.memoizedState!==null?nd(e,!1):gs(t,e));break;case 30:r=Vi,l=u0(),Vi=!1,gs(t,e),Vi&&(e.flags|=4);var u=e.memoizedProps,m=e.stateNode;t=ea(u,m),m=ea(i.memoizedProps,m);var b=ta(u.default,u.update);b==="none"?t=!1:(u=i.memoizedState,i.memoizedState=null,i=e.child,Xn=0,t=sd(e,i,t,m,b,u,!0),Xn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Es(e,e.memoizedProps.onUpdate),Fi=l):l!==null&&(l.push.apply(l,Fi),Fi=l),Vi=(e.flags&32)!==0?!0:r;break;default:gs(t,e)}}function ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)g0(e,t.alternate,t),t=t.sibling}function Ga(e,t){for(e=e.child;e!==null;){var i=e,r=t;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Ga(i,r);break;case 1:wn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&r0(i,i.return,l),Ga(i,r);break;case 27:(r&2)!==0&&Ev(i.stateNode,i.type,i.memoizedProps);case 5:wn(i,i.return),i.tag!==5&&i.tag!==27||Bo(i),Ga(i,r);break;case 6:Bo(i);break;case 26:wn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ut||l.parentNode.removeChild(l),Ga(i,r);break;case 22:i.memoizedState===null&&Ga(i,r);break;case 30:wn(i,i.return),Ga(i,r);break;case 7:wn(i,i.return);default:Ga(i,r)}e=e.sibling}}function Ti(e,t,i){for(i=(t.subtreeFlags&8772)!==0?i:i&-2,t=t.child;t!==null;){var r=t.alternate,l=e,u=t,m=u.flags,b=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:Ti(l,u,i),Io(4,u);break;case 1:if(Ti(l,u,i),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ie){zt(r,r.return,ie)}if(r=u,l=r.updateQueue,l!==null){var P=r.stateNode;try{var W=l.shared.hiddenCallbacks;if(W!==null)for(l.shared.hiddenCallbacks=null,l=0;l<W.length;l++)qm(W[l],P)}catch(ie){zt(r,r.return,ie)}}b&&m&64&&a0(u),Bi(u,u.return);break;case 27:(i&2)!==0&&l0(u);case 5:u.tag!==5&&u.tag!==27||s0(u),Ti(l,u,i),b&&r===null&&m&4&&Jf(u),Bi(u,u.return);break;case 6:s0(u);break;case 26:P=u.stateNode,u.memoizedState!==null||P===null||Sn||Wd(Wo(P.ownerDocument),u.type,P),Ti(l,u,i),b&&r===null&&m&4&&Jf(u),Bi(u,u.return);break;case 12:Ti(l,u,i);break;case 31:Ti(l,u,i),b&&m&4&&y0(l,u);break;case 13:Ti(l,u,i),b&&m&4&&S0(l,u);break;case 22:u.memoizedState===null&&Ti(l,u,i),Bi(u,u.return);break;case 30:Ti(l,u,i),Bi(u,u.return);break;case 7:Bi(u,u.return);default:Ti(l,u,i)}t=t.sibling}}function fd(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&bo(i))}function dd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bo(e))}function pi(e,t,i,r){var l=(i&335544064)===i;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)T0(e,t,i,r),t=t.sibling;else l&&h0(t)}function T0(e,t,i,r){var l=(i&335544064)===i;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&hc(t);var u=t.flags;switch(t.tag){case 0:case 11:case 15:pi(e,t,i,r),u&2048&&Io(9,t);break;case 1:pi(e,t,i,r);break;case 3:pi(e,t,i,r),l&&ld&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,t.alternate!==null&&(u=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==u&&(t.refCount++,u!=null&&bo(u)));break;case 12:if(u&2048){pi(e,t,i,r),u=t.stateNode;try{var m=t.memoizedProps,b=m.id,P=m.onPostCommit;typeof P=="function"&&P(b,t.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(W){zt(t,t.return,W)}}else pi(e,t,i,r);break;case 31:pi(e,t,i,r);break;case 13:pi(e,t,i,r);break;case 23:break;case 22:m=t.stateNode,b=t.alternate,t.memoizedState!==null?(l&&b!==null&&b.memoizedState===null&&hc(b),m._visibility&2?pi(e,t,i,r):Ho(e,t)):(l&&b!==null&&b.memoizedState!==null&&hc(t),m._visibility&2?pi(e,t,i,r):(m._visibility|=2,vs(e,t,i,r,(t.subtreeFlags&10256)!==0||!1))),u&2048&&fd(b,t);break;case 24:pi(e,t,i,r),u&2048&&dd(t.alternate,t);break;case 30:l&&(u=t.alternate,u!==null&&(Hi(u.child,!0),Hi(t.child,!0))),pi(e,t,i,r);break;default:pi(e,t,i,r)}}function vs(e,t,i,r,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,b=i,P=r,W=m.flags;switch(m.tag){case 0:case 11:case 15:vs(u,m,b,P,l),Io(8,m);break;case 23:break;case 22:var ie=m.stateNode;m.memoizedState!==null?ie._visibility&2?vs(u,m,b,P,l):Ho(u,m):(ie._visibility|=2,vs(u,m,b,P,l)),l&&W&2048&&fd(m.alternate,m);break;case 24:vs(u,m,b,P,l),l&&W&2048&&dd(m.alternate,m);break;default:vs(u,m,b,P,l)}t=t.sibling}}function Ho(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,r=t,l=r.flags;switch(r.tag){case 22:Ho(i,r),l&2048&&fd(r.alternate,r);break;case 24:Ho(i,r),l&2048&&dd(r.alternate,r);break;default:Ho(i,r)}t=t.sibling}}var Cr=8192;function wr(e,t,i){if(e.subtreeFlags&Cr)for(e=e.child;e!==null;)A0(e,t,i),e=e.sibling}function A0(e,t,i){switch(e.tag){case 26:wr(e,t,i),e.flags&Cr&&(e.memoizedState!==null?dM(i,bi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Lv(i,e)));break;case 5:wr(e,t,i),e.flags&Cr&&(e=e.stateNode,(t&335544128)===t&&Lv(i,e));break;case 3:case 4:var r=bi;bi=Wo(e.stateNode.containerInfo),wr(e,t,i),bi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,wr(e,t,i),Cr=r):wr(e,t,i));break;case 30:if((e.flags&Cr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ei===null&&(ei=new Map),ei.set(r,l)}wr(e,t,i);break;default:wr(e,t,i)}}function R0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Go(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];Mn=r,w0(r,e)}R0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)C0(e),e=e.sibling}function C0(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vc(e)):Go(e);break;default:Go(e)}}function vc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];Mn=r,w0(r,e)}R0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ha(8,t,t.return),vc(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,vc(t));break;default:vc(t)}e=e.sibling}}function w0(e,t){for(;Mn!==null;){var i=Mn;switch(i.tag){case 0:case 11:case 15:Ha(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:bo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,Mn=r;else e:for(i=e;Mn!==null;){r=Mn;var l=r.sibling,u=r.return;if(_0(r),r===i){Mn=null;break e}if(l!==null){l.return=u,Mn=l;break e}Mn=u}}}var oS={getCacheForType:function(e){var t=An(on),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return An(on).controller.signal}},lS=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Vt=null,vt=null,St=0,Ot=0,ti=null,Va=!1,_s=!1,hd=!1,ua=0,en=0,ka=0,Nr=0,_c=0,ni=0,xs=0,Vo=null,Yn=null,pd=!1,xc=0,N0=0,yc=1/0,Sc=null,ja=null,Jt=0,Ai=null,Dr=null,ji=0,md=0,gd=null,D0=null,ys=null,Ss=null,Ms=null,ko=0,Mc=null;function ii(){return(Dt&2)!==0&&St!==0?St&-St:Re.T!==null?Ad():J()}function U0(){if(ni===0)if((St&536870912)===0||dt){var e=fr;fr<<=1,(fr&3932160)===0&&(fr=262144),ni=e}else ni=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ni}function Es(e,t){if(t!=null){var i=e.stateNode,r=i.ref;r===null&&(r=i.ref=dv(ea(e.memoizedProps,i))),Ss===null&&(Ss=[]),Ss.push(t.bind(null,r))}}function Wn(e,t,i){(e===Vt&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)&&(bs(e,0),Xa(e,St,ni,!1)),dr(e,i),((Dt&2)===0||e!==Vt)&&(e===Vt&&((Dt&2)===0&&(Nr|=i),en===4&&Xa(e,St,ni,!1)),Xi(e))}function L0(e,t,i){if((Dt&6)!==0)throw Error(s(327));var r=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Ta(e,t),l=r?fS(e,t):_d(e,t,!0),u=r;do{if(l===0){_s&&!r&&Xa(e,t,0,!1);break}else{if(i=e.current.alternate,u&&!cS(i)){l=_d(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;l=Vo;var P=b.current.memoizedState.isDehydrated;if(P&&(bs(b,m).flags|=256),m=_d(b,m,!1),m!==2&&m!==6){if(hd&&!P){b.errorRecoveryDisabledLanes|=u,Nr|=u,l=4;break e}u=Yn,Yn=l,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){bs(e,0),Xa(e,t,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Xa(r,t,ni,!Va);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=xc+300-k(),10<l)){if(Xa(r,t,ni,!Va),Ki(r,0,!0)!==0)break e;ji=t,r.timeoutHandle=Id(O0.bind(null,r,i,Yn,Sc,pd,t,ni,Nr,xs,Va,u,"Throttled",-0,0),l);break e}O0(r,i,Yn,Sc,pd,t,ni,Nr,xs,Va,u,null,-0,0)}}break}while(!0);Xi(e)}function O0(e,t,i,r,l,u,m,b,P,W,ie,de,X,ee){e.timeoutHandle=-1;var we=t.subtreeFlags,je=(u&335544064)===u;if(de=null,(je||we&8192||(we&16785408)===16785408)&&(de={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},ei=null,A0(t,u,de),je&&(we=de,je=e.containerInfo,je=(je.nodeType===9?je:je.ownerDocument).__reactViewTransition,je!=null&&(we.count++,we.waitingForViewTransition=!0,we=Qo.bind(we),je.finished.then(we,we))),we=(u&62914560)===u?xc-k():(u&4194048)===u?N0-k():0,we=hM(de,we),we!==null)){ji=u,e.cancelPendingCommit=we(V0.bind(null,e,t,u,i,r,l,m,b,P,W,ie,de,null,X,ee)),Xa(e,u,m,!W);return}V0(e,t,u,i,r,l,m,b,P,W,ie,de)}function cS(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],u=l.getSnapshot;l=l.value;try{if(!Jn(u(),l))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(e,t,i,r){t=uo(e,t),t&=~_c,t&=~Nr,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var u=31-Un(l),m=1<<u;r[u]=-1,l&=~m}i!==0&&yl(e,i,t)}function Ec(){return(Dt&6)===0?(jo(0),!1):!0}function vd(){if(vt!==null){if(Ot===0)var e=vt.return;else e=vt,aa=_r=null,Tf(e),us=null,Ro=0,e=vt;for(;e!==null;)i0(e.alternate,e),e=e.return;vt=null}}function bs(e,t){var i=e.timeoutHandle;return i!==-1&&(e.timeoutHandle=-1,LS(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),ji=0,vd(),Vt=e,vt=i=na(e.current,null),St=t,Ot=0,ti=null,Va=!1,_s=Ta(e,t),hd=!1,xs=ni=_c=Nr=ka=en=0,Yn=Vo=null,pd=!1,ua=uo(e,t),Dl(),i}function z0(e,t){lt=null,Re.H=nc,t===cs||t===Vl?(t=Vm(),Ot=3):t===df?(t=Vm(),Ot=4):Ot=t===Hf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ti=t,vt===null&&(en=1,ic(e,ui(t,e.current)))}function P0(){var e=Rn.current;return e===null?!0:(St&4194048)===St?On===null:(St&62914560)===St||(St&536870912)!==0?e===On:!1}function I0(){var e=Re.H;return Re.H=nc,e===null?nc:e}function B0(){var e=Re.A;return Re.A=oS,e}function bc(){en=4,Va||(St&4194048)!==St&&Rn.current!==null||(_s=!0),(ka&134217727)===0&&(Nr&134217727)===0||Vt===null||Xa(Vt,St,ni,!1)}function _d(e,t,i){var r=Dt;Dt|=2;var l=I0(),u=B0();(Vt!==e||St!==t)&&(Sc=null,bs(e,t)),t=!1;var m=en;e:do try{if(Ot!==0&&vt!==null){var b=vt,P=ti;switch(Ot){case 8:vd(),m=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(t=!0);var W=Ot;if(Ot=0,ti=null,Ts(e,b,P,W),i&&_s){m=0;break e}break;default:W=Ot,Ot=0,ti=null,Ts(e,b,P,W)}}uS(),m=en;break}catch(ie){z0(e,ie)}while(!0);return t&&e.shellSuspendCounter++,aa=_r=null,Dt=r,Re.H=l,Re.A=u,vt===null&&(Vt=null,St=0,Dl()),m}function uS(){for(;vt!==null;)F0(vt)}function fS(e,t){var i=Dt;Dt|=2;var r=I0(),l=B0();Vt!==e||St!==t?(Sc=null,yc=k()+500,bs(e,t)):_s=Ta(e,t);e:do try{if(Ot!==0&&vt!==null){t=vt;var u=ti;t:switch(Ot){case 1:Ot=0,ti=null,Ts(e,t,u,1);break;case 2:case 9:if(Hm(u)){Ot=0,ti=null,H0(t);break}t=function(){Ot!==2&&Ot!==9||Vt!==e||(Ot=7),Xi(e)},u.then(t,t);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:Hm(u)?(Ot=0,ti=null,H0(t)):(Ot=0,ti=null,Ts(e,t,u,7));break;case 5:var m=null;switch(vt.tag){case 26:m=vt.memoizedState;case 5:case 27:var b=vt;if(m?Dv(m):b.stateNode.complete){Ot=0,ti=null;var P=b.sibling;if(P!==null)vt=P;else{var W=b.return;W!==null?(vt=W,Tc(W)):vt=null}break t}}Ot=0,ti=null,Ts(e,t,u,5);break;case 6:Ot=0,ti=null,Ts(e,t,u,6);break;case 8:vd(),en=6;break e;default:throw Error(s(462))}}dS();break}catch(ie){z0(e,ie)}while(!0);return aa=_r=null,Re.H=r,Re.A=l,Dt=i,vt!==null?0:(Vt=null,St=0,Dl(),en)}function dS(){for(;vt!==null&&!ot();)F0(vt)}function F0(e){var t=t0(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Tc(e):vt=t}function H0(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=Wg(i,t,t.pendingProps,t.type,void 0,St);break;case 11:t=Wg(i,t,t.pendingProps,t.type.render,t.ref,St);break;case 5:Tf(t);var r=t;r===yn&&(dt?(Il(r),r.tag===5&&r.stateNode!=null&&(jt=r.stateNode)):(Il(r),dt=!0));default:i0(i,t),t=vt=wm(t,ua),t=t0(i,t,ua)}e.memoizedProps=e.pendingProps,t===null?Tc(e):vt=t}function Ts(e,t,i,r){aa=_r=null,Tf(t),us=null,Ro=0;var l=t.return;try{if($y(e,l,t,i,St)){en=1,ic(e,ui(i,e.current)),vt=null;return}}catch(u){if(l!==null)throw vt=l,u;en=1,ic(e,ui(i,e.current)),vt=null;return}t.flags&32768?(dt||r===1?e=!0:_s||(St&536870912)!==0?e=!1:(Va=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),G0(t,e)):Tc(t)}function Tc(e){var t=e;do{if((t.flags&32768)!==0){G0(t,Va);return}e=t.return;var i=iS(t.alternate,t,ua);if(i!==null){vt=i;return}if(t=t.sibling,t!==null){vt=t;return}vt=t=e}while(t!==null);en===0&&(en=5)}function G0(e,t){do{var i=aS(e.alternate,e);if(i!==null){i.flags&=32767,vt=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){vt=e;return}vt=e=i}while(e!==null);en=6,vt=null}function V0(e,t,i,r,l,u,m,b,P,W,ie,de){e.cancelPendingCommit=null;do Ac();while(Jt!==0);if((Dt&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===Vt&&(vt=Vt=null,St=0),Dr=t,Ai=e,ji=i,gd=l,D0=r,hS(e,t,i,m,b,P,de)}}function hS(e,t,i,r,l,u,m){var b=t.lanes|t.childLanes;if(md=b,b|=Ju,wu(e,i,b,r,l,u),Ss=null,(i&335544064)===i?(Ms=Gy(e),r=10262):(Ms=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,xS(ze,function(){return Md(),null})):(e.callbackNode=null,e.callbackPriority=0),fc=!1,r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=Re.T,Re.T=null,l=Be.p,Be.p=2,u=Dt,Dt|=4;try{rS(e,t,i)}finally{Dt=u,Be.p=l,Re.T=r}}Jt=1,fc?ys=FS(m,e.containerInfo,Ms,xd,yd,mS,Sd,Md,pS):(xd(),yd(),Sd())}function pS(e){if(Jt!==0){var t=Ai.onRecoverableError;t(e,{componentStack:null})}}function mS(){Jt===3&&(Jt=0,b0(Dr,Ai),Jt=4)}function xd(){if(Jt===1){Jt=0;var e=Ai,t=Dr,i=ji,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=Re.T,Re.T=null;var l=Be.p;Be.p=2;var u=Dt;Dt|=4;try{Fo=pc=!1,M0(t,e,i),i=Od;var m=xm(e.containerInfo),b=i.focusedElem,P=i.selectionRange;if(m!==b&&b&&b.ownerDocument&&_m(b.ownerDocument.documentElement,b)){if(P!==null&&Yu(b)){var W=P.start,ie=P.end;if(ie===void 0&&(ie=W),"selectionStart"in b)b.selectionStart=W,b.selectionEnd=Math.min(ie,b.value.length);else{var de=b.ownerDocument||document,X=de&&de.defaultView||window;if(X.getSelection){var ee=X.getSelection(),we=b.textContent.length,je=Math.min(P.start,we),ct=P.end===void 0?je:Math.min(P.end,we);!ee.extend&&je>ct&&(m=ct,ct=je,je=m);var Y=vm(b,je),H=vm(b,ct);if(Y&&H&&(ee.rangeCount!==1||ee.anchorNode!==Y.node||ee.anchorOffset!==Y.offset||ee.focusNode!==H.node||ee.focusOffset!==H.offset)){var $=de.createRange();$.setStart(Y.node,Y.offset),ee.removeAllRanges(),je>ct?(ee.addRange($),ee.extend(H.node,H.offset)):($.setEnd(H.node,H.offset),ee.addRange($))}}}}for(de=[],ee=b;ee=ee.parentNode;)ee.nodeType===1&&de.push({element:ee,left:ee.scrollLeft,top:ee.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<de.length;b++){var fe=de[b];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}Ls=!!Ld,Od=Ld=null}finally{Dt=u,Be.p=l,Re.T=r}}e.current=t,Jt=2}}function yd(){if(Jt===2){Jt=0;var e=Ai,t=Dr,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=Re.T,Re.T=null;var r=Be.p;Be.p=2;var l=Dt;Dt|=4;try{g0(e,t.alternate,t)}finally{Dt=l,Be.p=r,Re.T=i}}Jt=3}}function Sd(){if(Jt===4||Jt===3){Jt=0;var e=ys;ys=null,It();var t=Ai,i=Dr,r=ji,l=D0,u=(r&335544064)===r?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?Jt=5:(Jt=0,Dr=Ai=null,k0(t,t.pendingLanes)),u=t.pendingLanes,u===0&&(ja=null),se(r),i=i.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Re.T,u=Be.p,Be.p=2,Re.T=null;try{for(var m=t.onRecoverableError,b=0;b<l.length;b++){var P=l[b];m(P.value,{componentStack:P.stack})}}finally{Re.T=i,Be.p=u}}if(l=Ss,m=Ms,Ms=null,l!==null&&(Ss=null,m===null&&(m=[]),e!==null))for(P=0;P<l.length;P++)i=(0,l[P])(m),i!==void 0&&e.finished.finally(i);(ji&3)!==0&&Ac(),Xi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===Mc?ko++:(ko=0,Mc=t):(ko=0,Mc=null),jo(0)}}function k0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bo(t)))}function Ac(){return ys!==null&&(ys.skipTransition(),ys=null),xd(),yd(),Sd(),Md()}function Md(){if(Jt!==5)return!1;var e=Ai,t=md;md=0;var i=se(ji),r=Re.T,l=Be.p;try{Be.p=32>i?32:i,Re.T=null,i=gd,gd=null;var u=Ai,m=ji;if(Jt=0,Dr=Ai=null,ji=0,(Dt&6)!==0)throw Error(s(331));var b=Dt;if(Dt|=4,C0(u.current),T0(u,u.current,m,i),Dt=b,jo(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Et,u)}catch{}return!0}finally{Be.p=l,Re.T=r,k0(e,t)}}function j0(e,t,i){t=ui(i,t),t=Ff(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(dr(e,2),Xi(e))}function zt(e,t,i){if(e.tag===3)j0(e,e,i);else for(;t!==null;){if(t.tag===3){j0(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ja===null||!ja.has(r))){e=ui(i,e),i=Hg(2),r=Pa(t,i,2),r!==null&&(Gg(i,r,t,e),dr(r,2),Xi(r));break}}t=t.return}}function Ed(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new lS;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(i)||(hd=!0,l.add(i),e=gS.bind(null,e,t,i),t.then(e,e))}function gS(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Vt===e&&(St&i)===i&&((en===4||en===3&&(St&62914560)===St&&300>k()-xc)&&(Dt&2)===0?bs(e,0):_c|=i,xs===St&&(xs=0)),Xi(e)}function X0(e,t){t===0&&(t=xl()),e=mr(e,t),e!==null&&(dr(e,t),Xi(e))}function vS(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),X0(e,i)}function _S(e,t){var i=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),X0(e,i)}function xS(e,t){return Ge(e,t)}var As=null,Rs=null,bd=!1,Rc=!1,Td=!1,qa=0;function Xi(e){e!==Rs&&e.next===null&&(Rs===null?As=Rs=e:Rs=Rs.next=e),Rc=!0,bd||(bd=!0,SS())}function jo(e,t){if(!Td&&Rc){Td=!0;do for(var i=!1,r=As;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var m=r.suspendedLanes,b=r.pingedLanes;u=(1<<31-Un(42|e)+1)-1,u&=l&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,Z0(r,u))}else u=St,u=Ki(r,r===Vt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ta(r,u)||(i=!0,Z0(r,u));r=r.next}while(i);Td=!1}}function yS(){q0()}function q0(){Rc=bd=!1;var e=0;qa!==0&&US()&&(e=qa);for(var t=k(),i=null,r=As;r!==null;){var l=r.next,u=Y0(r,t);u===0?(r.next=null,i===null?As=l:i.next=l,l===null&&(Rs=i)):(i=r,(e!==0||(u&3)!==0)&&(Rc=!0)),r=l}Jt!==0&&Jt!==5||jo(e),qa!==0&&(qa=0)}function Y0(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Un(u),b=1<<m,P=l[m];P===-1?((b&i)===0||(b&r)!==0)&&(l[m]=Cu(b,t)):P<=t&&(e.expiredLanes|=b),u&=~b}if(t=Vt,i=St,i=Ki(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,i===0||e===t&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&pt(r),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Ta(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(r!==null&&pt(r),se(i)){case 2:case 8:i=_e;break;case 32:i=ze;break;case 268435456:i=st;break;default:i=ze}return r=W0.bind(null,e),i=Ge(i,r),e.callbackPriority=t,e.callbackNode=i,t}return r!==null&&r!==null&&pt(r),e.callbackPriority=2,e.callbackNode=null,2}function W0(e,t){if(Jt!==0&&Jt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Ac()&&e.callbackNode!==i)return null;var r=St;return r=Ki(e,e===Vt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(L0(e,r,t),Y0(e,k()),e.callbackNode!=null&&e.callbackNode===i?W0.bind(null,e):null)}function Z0(e,t){if(Ac())return null;L0(e,t,!0)}function SS(){OS(function(){(Dt&6)!==0?Ge(ce,yS):q0()})}function Ad(){if(qa===0){var e=Sr;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),qa=e}return qa}function K0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:El(e)}function MS(e,t,i,r,l){if(t==="submit"&&i&&i.stateNode===l){var u=K0((l[De]||null).action),m=r.submitter;m&&(t=(t=m[De]||null)?K0(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var b=new Rl("action","action",null,r,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(qa!==0){var P=new FormData(l,m);Of(i,{pending:!0,data:P,method:l.method,action:u},null,P)}}else typeof u=="function"&&(b.preventDefault(),P=new FormData(l,m),Of(i,{pending:!0,data:P,method:l.method,action:u},u,P))},currentTarget:l}]})}}for(var Rd=0;Rd<Qu.length;Rd++){var Cd=Qu[Rd],ES=Cd.toLowerCase(),bS=Cd[0].toUpperCase()+Cd.slice(1);Mi(ES,"on"+bS)}Mi(Mm,"onAnimationEnd"),Mi(Em,"onAnimationIteration"),Mi(bm,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Ly,"onTransitionRun"),Mi(Oy,"onTransitionStart"),Mi(zy,"onTransitionCancel"),Mi(Tm,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function Q0(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],l=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var m=r.length-1;0<=m;m--){var b=r[m],P=b.instance,W=b.currentTarget;if(b=b.listener,P!==u&&l.isPropagationStopped())break e;u=b,l.currentTarget=W;try{u(l)}catch(ie){Nl(ie)}l.currentTarget=null,u=P}else for(m=0;m<r.length;m++){if(b=r[m],P=b.instance,W=b.currentTarget,b=b.listener,P!==u&&l.isPropagationStopped())break e;u=b,l.currentTarget=W;try{u(l)}catch(ie){Nl(ie)}l.currentTarget=null,u=P}}}}function _t(e,t){var i=t[nt];i===void 0&&(i=t[nt]=new Set);var r=e+"__bubble";i.has(r)||(J0(t,e,2,!1),i.add(r))}function wd(e,t,i){var r=0;t&&(r|=4),J0(i,e,r,t)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Nd(e){if(!e[Cc]){e[Cc]=!0,Aa.forEach(function(i){i!=="selectionchange"&&(TS.has(i)||wd(i,!1,e),wd(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cc]||(t[Cc]=!0,wd("selectionchange",!1,t))}}function J0(e,t,i,r){switch(Gv(t)){case 2:var l=vM;break;case 8:l=_M;break;default:l=Kd}i=l.bind(null,t,i,e),l=void 0,!Iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,i,{capture:!0,passive:l}):e.addEventListener(t,i,!0):l!==void 0?e.addEventListener(t,i,{passive:l}):e.addEventListener(t,i,!1)}function Dd(e,t,i,r,l){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var b=r.stateNode.containerInfo;if(b===l)break;if(m===4)for(m=r.return;m!==null;){var P=m.tag;if((P===3||P===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;b!==null;){if(m=Ye(b),m===null)return;if(P=m.tag,P===5||P===6||P===26||P===27){r=u=m;continue e}b=b.parentNode}}r=r.return}Jp(function(){var W=u,ie=zu(i),de=[];e:{var X=Am.get(e);if(X!==void 0){var ee=Rl,we=e;switch(e){case"keypress":if(Tl(i)===0)break e;case"keydown":case"keyup":ee=cy;break;case"focusin":we="focus",ee=Gu;break;case"focusout":we="blur",ee=Gu;break;case"beforeblur":case"afterblur":ee=Gu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Qx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=py;break;case Mm:case Em:case bm:ee=ey;break;case Tm:ee=gy;break;case"scroll":case"scrollend":ee=Zx;break;case"wheel":ee=_y;break;case"copy":case"cut":case"paste":ee=ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=im;break;case"submit":ee=dy;break;case"toggle":case"beforetoggle":ee=yy}var je=(t&4)!==0,ct=!je&&(e==="scroll"||e==="scrollend"),Y=je?X!==null?X+"Capture":null:X;je=[];for(var H=W,$;H!==null;){var fe=H;if($=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||$===null||Y===null||(fe=ho(H,Y),fe!=null&&je.push(qo(H,fe,$))),ct)break;H=H.return}0<je.length&&(X=new ee(X,we,null,i,ie),de.push({event:X,listeners:je}))}}if((t&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",ee&&i!==Ou&&(we=i.relatedTarget||i.fromElement)&&(Ye(we)||we[Qe]))break e;(X||ee)&&(we=ie.window===ie?ie:(ee=ie.ownerDocument)?ee.defaultView||ee.parentWindow:window,X?(ee=i.relatedTarget||i.toElement,X=W,ee=ee?Ye(ee):null,ee!==null&&(ct=f(ee),je=ee.tag,ee!==ct||je!==5&&je!==27&&je!==6)&&(ee=null)):(X=null,ee=W),X!==ee&&(je=tm,fe="onMouseLeave",Y="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(je=im,fe="onPointerLeave",Y="onPointerEnter",H="pointer"),ct=X==null?we:yt(X),$=ee==null?we:yt(ee),we=new je(fe,H+"leave",X,i,ie),we.target=ct,we.relatedTarget=$,fe=null,Ye(ie)===W&&(je=new je(Y,H+"enter",ee,i,ie),je.target=$,je.relatedTarget=ct,fe=je),ct=fe,je=X&&ee?F(X,ee,AS):null,X!==null&&$0(de,we,X,je,!1),ee!==null&&ct!==null&&$0(de,ct,ee,je,!0)))}e:{if(X=W?yt(W):window,ee=X.nodeName&&X.nodeName.toLowerCase(),ee==="select"||ee==="input"&&X.type==="file")var He=fm;else if(cm(X))if(dm)He=Ny;else{He=Cy;var Mt=Ry}else ee=X.nodeName,!ee||ee.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Lu(W.elementType)&&(He=fm):He=wy;if(He&&(He=He(e,W))){um(de,He,i,ie);break e}Mt&&Mt(e,X,W)}switch(Mt=W?yt(W):window,e){case"focusin":(cm(Mt)||Mt.contentEditable==="true")&&(ts=Mt,Wu=W,So=null);break;case"focusout":So=Wu=ts=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,ym(de,i,ie);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":ym(de,i,ie)}var We;if(ku)e:{switch(e){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else es?om(e,i)&&($e="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&($e="onCompositionStart");$e&&(am&&i.locale!=="ko"&&(es||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&es&&(We=$p()):(Ra=ie,Bu="value"in Ra?Ra.value:Ra.textContent,es=!0)),Mt=wc(W,$e),0<Mt.length&&($e=new nm($e,e,null,i,ie),de.push({event:$e,listeners:Mt}),We?$e.data=We:(We=lm(i),We!==null&&($e.data=We)))),(We=My?Ey(e,i):by(e,i))&&($e=wc(W,"onBeforeInput"),0<$e.length&&(Mt=new nm("onBeforeInput","beforeinput",null,i,ie),de.push({event:Mt,listeners:$e}),Mt.data=We)),MS(de,e,W,i,ie)}Q0(de,t)})}function qo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function wc(e,t){for(var i=t+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=ho(e,i),l!=null&&r.unshift(qo(e,l,u)),l=ho(e,t),l!=null&&r.push(qo(e,l,u))),e.tag===3)return r;e=e.return}return[]}function AS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $0(e,t,i,r,l){for(var u=t._reactName,m=[];i!==null&&i!==r;){var b=i,P=b.alternate,W=b.stateNode;if(b=b.tag,P!==null&&P===r)break;b!==5&&b!==26&&b!==27||W===null||(P=W,l?(W=ho(i,u),W!=null&&m.unshift(qo(i,W,P))):l||(W=ho(i,u),W!=null&&m.push(qo(i,W,P)))),i=i.return}m.length!==0&&e.push({event:t,listeners:m})}var RS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function ev(e){return(typeof e=="string"?e:""+e).replace(RS,`
`).replace(CS,"")}function tv(e,t){return t=ev(t),ev(e)===t}function Pt(e,t,i,r,l,u){switch(i){case"children":if(typeof r=="string")t==="body"||t==="textarea"&&r===""||Qr(e,r);else if(typeof r=="number"||typeof r=="bigint")t!=="body"&&Qr(e,""+r);else return;break;case"className":Ml(e,"class",r);break;case"tabIndex":Ml(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(e,i,r);break;case"style":Kp(e,r,u);return;case"data":if(t!=="object"){Ml(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=El(r),e.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(t!=="input"&&Pt(e,t,"name",l.name,l,null),Pt(e,t,"formEncType",l.formEncType,l,null),Pt(e,t,"formMethod",l.formMethod,l,null),Pt(e,t,"formTarget",l.formTarget,l,null)):(Pt(e,t,"encType",l.encType,l,null),Pt(e,t,"method",l.method,l,null),Pt(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=El(r),e.setAttribute(i,r);break;case"onClick":r!=null&&(e.onclick=zi);return;case"onScroll":r!=null&&_t("scroll",e);return;case"onScrollEnd":r!=null&&_t("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(e.innerHTML=i)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}i=El(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":r===!0?e.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(i,r):e.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(i):e.setAttribute(i,r);break;case"popover":_t("beforetoggle",e),_t("toggle",e),Sl(e,"popover",r);break;case"xlinkActuate":Ji(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ji(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ji(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ji(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ji(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ji(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Sl(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Yx.get(i)||i,Sl(e,i,r);else return}wt=!0}function Ud(e,t,i,r,l,u){switch(i){case"style":Kp(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(e.innerHTML=i)}}break;case"children":if(typeof r=="string")Qr(e,r);else if(typeof r=="number"||typeof r=="bigint")Qr(e,""+r);else return;break;case"onScroll":r!=null&&_t("scroll",e);return;case"onScrollEnd":r!=null&&_t("scrollend",e);return;case"onClick":r!=null&&(e.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Gt.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),u=i.slice(2,l?i.length-7:void 0),t=e[De]||null,t=t!=null?t[i]:null,typeof t=="function"&&e.removeEventListener(u,t,l),typeof r=="function")){typeof t!="function"&&t!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(u,r,l);break e}wt=!0,i in e?e[i]=r:r===!0?e.setAttribute(i,""):Sl(e,i,r)}return}wt=!0}function Nn(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var r=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var m=i[u];if(m!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Pt(e,t,u,m,i,null)}}l&&Pt(e,t,"srcSet",i.srcSet,i,null),r&&Pt(e,t,"src",i.src,i,null);return;case"input":_t("invalid",e);var b=u=m=l=null,P=null,W=null;for(r in i)if(i.hasOwnProperty(r)){var ie=i[r];if(ie!=null)switch(r){case"name":l=ie;break;case"type":m=ie;break;case"checked":P=ie;break;case"defaultChecked":W=ie;break;case"value":u=ie;break;case"defaultValue":b=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,t));break;default:Pt(e,t,r,ie,i,null)}}qp(e,u,b,P,W,m,l,!1);return;case"select":_t("invalid",e),r=m=u=null;for(l in i)if(i.hasOwnProperty(l)&&(b=i[l],b!=null))switch(l){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":r=b;default:Pt(e,t,l,b,i,null)}t=u,i=m,e.multiple=!!r,t!=null?Kr(e,!!r,t,!1):i!=null&&Kr(e,!!r,i,!0);return;case"textarea":_t("invalid",e),u=l=r=null;for(m in i)if(i.hasOwnProperty(m)&&(b=i[m],b!=null))switch(m){case"value":r=b;break;case"defaultValue":l=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pt(e,t,m,b,i,null)}Wp(e,r,l,u);return;case"option":for(P in i)if(i.hasOwnProperty(P)&&(r=i[P],r!=null))switch(P){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pt(e,t,P,r,i,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(r=0;r<Xo.length;r++)_t(Xo[r],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in i)if(i.hasOwnProperty(W)&&(r=i[W],r!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Pt(e,t,W,r,i,null)}return;default:if(Lu(t)){for(ie in i)i.hasOwnProperty(ie)&&(r=i[ie],r!==void 0&&Ud(e,t,ie,r,i,void 0));return}}for(b in i)i.hasOwnProperty(b)&&(r=i[b],r!=null&&Pt(e,t,b,r,i,null))}var wS={};function NS(e,t,i,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,b=null,P=null,W=null,ie=null;for(ee in i){var de=i[ee];if(i.hasOwnProperty(ee)&&de!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":P=de;default:r.hasOwnProperty(ee)||Pt(e,t,ee,null,r,de)}}for(var X in r){var ee=r[X];if(de=i[X],r.hasOwnProperty(X)&&(ee!=null||de!=null))switch(X){case"type":ee!==de&&(wt=!0),u=ee;break;case"name":ee!==de&&(wt=!0),l=ee;break;case"checked":ee!==de&&(wt=!0),W=ee;break;case"defaultChecked":ee!==de&&(wt=!0),ie=ee;break;case"value":ee!==de&&(wt=!0),m=ee;break;case"defaultValue":ee!==de&&(wt=!0),b=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,t));break;default:ee!==de&&Pt(e,t,X,ee,r,de)}}Du(e,m,b,P,W,ie,u,l);return;case"select":ee=m=b=X=null;for(u in i)if(P=i[u],i.hasOwnProperty(u)&&P!=null)switch(u){case"value":break;case"multiple":ee=P;default:r.hasOwnProperty(u)||Pt(e,t,u,null,r,P)}for(l in r)if(u=r[l],P=i[l],r.hasOwnProperty(l)&&(u!=null||P!=null))switch(l){case"value":u!==P&&(wt=!0),X=u;break;case"defaultValue":u!==P&&(wt=!0),b=u;break;case"multiple":u!==P&&(wt=!0),m=u;default:u!==P&&Pt(e,t,l,u,r,P)}t=b,i=m,r=ee,X!=null?Kr(e,!!i,X,!1):!!r!=!!i&&(t!=null?Kr(e,!!i,t,!0):Kr(e,!!i,i?[]:"",!1));return;case"textarea":ee=X=null;for(b in i)if(l=i[b],i.hasOwnProperty(b)&&l!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pt(e,t,b,null,r,l)}for(m in r)if(l=r[m],u=i[m],r.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":l!==u&&(wt=!0),X=l;break;case"defaultValue":l!==u&&(wt=!0),ee=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Pt(e,t,m,l,r,u)}Yp(e,X,ee);return;case"option":for(var we in i)if(X=i[we],i.hasOwnProperty(we)&&X!=null&&!r.hasOwnProperty(we))switch(we){case"selected":e.selected=!1;break;default:Pt(e,t,we,null,r,X)}for(P in r)if(X=r[P],ee=i[P],r.hasOwnProperty(P)&&X!==ee&&(X!=null||ee!=null))switch(P){case"selected":X!==ee&&(wt=!0),e.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Pt(e,t,P,X,r,ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in i)X=i[je],i.hasOwnProperty(je)&&X!=null&&!r.hasOwnProperty(je)&&Pt(e,t,je,null,r,X);for(W in r)if(X=r[W],ee=i[W],r.hasOwnProperty(W)&&X!==ee&&(X!=null||ee!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,t));break;default:Pt(e,t,W,X,r,ee)}return;default:if(Lu(t)){for(var ct in i)X=i[ct],i.hasOwnProperty(ct)&&X!==void 0&&!r.hasOwnProperty(ct)&&Ud(e,t,ct,void 0,r,X);for(ie in r)X=r[ie],ee=i[ie],!r.hasOwnProperty(ie)||X===ee||X===void 0&&ee===void 0||Ud(e,t,ie,X,r,ee);return}}for(var Y in i)X=i[Y],i.hasOwnProperty(Y)&&X!=null&&!r.hasOwnProperty(Y)&&Pt(e,t,Y,null,r,X);for(de in r)X=r[de],ee=i[de],!r.hasOwnProperty(de)||X===ee||X==null&&ee==null||Pt(e,t,de,X,r,ee)}function nv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],u=l.transferSize,m=l.initiatorType,b=l.duration;if(u&&b&&nv(m)){for(m=0,b=l.responseEnd,r+=1;r<i.length;r++){var P=i[r],W=P.startTime;if(W>b)break;var ie=P.transferSize,de=P.initiatorType;ie&&nv(de)&&(P=P.responseEnd,m+=ie*(P<b?1:(b-W)/(P-W)))}if(--r,t+=8*(u+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ld=null,Od=null;function Yo(e){return e.nodeType===9?e:e.ownerDocument}function iv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function av(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rv(e,t,i,r){return i=Yo(i).createElement(e),i[be]=r,i[De]=t,Nn(i,e,t),Yt(i),i}function zd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pd=null;function US(){var e=window.event;return e&&e.type==="popstate"?e===Pd?!1:(Pd=e,!0):(Pd=null,!1)}var Id=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,ov=typeof requestAnimationFrame=="function"?requestAnimationFrame:Id,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(e){return sv.resolve(null).then(e).catch(zS)}:Id;function zS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function lv(e,t){var i=t,r=0;do{var l=i.nextSibling;if(e.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){e.removeChild(l),Os(t);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Xd(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Xd(i);for(var u=i.firstChild;u;){var m=u.nextSibling,b=u.nodeName;u[kt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=m}}else i==="body"&&Xd(e.ownerDocument.body);i=l}while(i);Os(t)}function cv(e,t){var i=e;e=0;do{var r=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=r}while(i)}function uv(e,t,i){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,i!=null&&(e.style.viewTransitionClass=i),i=getComputedStyle(e),i.display==="inline"){if(t=e.getClientRects(),t.length===1)var r=1;else for(var l=r=0;l<t.length;l++){var u=t[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+i.paddingTop,e.marginBottom="-"+i.paddingBottom)}}function fv(e,t){e=e.style,t=t.style;var i=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(i=t.display,e.display=i==null||typeof i=="boolean"?"":i,i=t.margin,i!=null?e.margin=i:(i=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=i==null||typeof i=="boolean"?"":i,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function PS(e,t,i){return i=i.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=i.innerHeight&&e.left<=i.innerWidth}}function Bd(e){var t=e.getBoundingClientRect(),i=getComputedStyle(e);return PS(t,i,e)}function IS(e){return e.documentElement.clientHeight}function BS(e){this.addEventListener("load",e),this.addEventListener("error",e)}function FS(e,t,i,r,l,u,m,b,P){var W=t.nodeType===9?t:t.ownerDocument;try{var ie=W.startViewTransition({update:function(){var X=W.defaultView,ee=X.navigation&&X.navigation.transition,we=W.fonts.status;r();var je=[];if(we==="loaded"&&(IS(W),W.fonts.status==="loading"&&je.push(W.fonts.ready)),we=je.length,e!==null)for(var ct=e.suspenseyImages,Y=0,H=0;H<ct.length;H++){var $=ct[H];if(!$.complete){var fe=$.getBoundingClientRect();if(0<fe.bottom&&0<fe.right&&fe.top<X.innerHeight&&fe.left<X.innerWidth){if(Y+=Uv($),Y>Uc){je.length=we;break}$=new Promise(BS.bind($)),je.push($)}}}if(0<je.length)return X=Promise.race([Promise.all(je),new Promise(function(He){return setTimeout(He,500)})]).then(l,l),(ee?Promise.allSettled([ee.finished,X]):X).then(u,u);if(l(),ee)return ee.finished.then(u,u);u()},types:i});W.__reactViewTransition=ie;var de=[];return ie.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),ee=0;ee<X.length;ee++){var we=X[ee],je=we.effect,ct=je.pseudoElement;if(ct!=null&&ct.startsWith("::view-transition")){de.push(we),we=je.getKeyframes();for(var Y=ct=void 0,H=!0,$=0;$<we.length;$++){var fe=we[$],He=fe.width;if(ct===void 0)ct=He;else if(ct!==He){H=!1;break}if(He=fe.height,Y===void 0)Y=He;else if(Y!==He){H=!1;break}delete fe.width,delete fe.height,fe.transform==="none"&&delete fe.transform}H&&ct!==void 0&&Y!==void 0&&(je.setKeyframes(we),H=getComputedStyle(je.target,je.pseudoElement),H.width!==ct||H.height!==Y)&&(H=we[0],H.width=ct,H.height=Y,H=we[we.length-1],H.width=ct,H.height=Y,je.setKeyframes(we))}}m()},function(X){W.__reactViewTransition===ie&&(W.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&P(X)}finally{r(),l(),m()}}),ie.finished.finally(function(){for(var X=0;X<de.length;X++)de[X].cancel();W.__reactViewTransition===ie&&(W.__reactViewTransition=null),b()}),ie}catch{return r(),l(),m(),null}}function Ur(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ur.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:I({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ur.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,i=e.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var u=i[l].effect;u!==null&&u.target===e&&u.pseudoElement===t&&r.push(i[l])}return r},Ur.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function dv(e){return{name:e,group:new Ur("group",e),imagePair:new Ur("image-pair",e),old:new Ur("old",e),new:new Ur("new",e)}}function ai(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ai.prototype.addEventListener=function(e,t,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(pv(u,e,t,i)===-1){var m=this,b=t;i!=null&&typeof i!="boolean"&&i.once===!0&&(b=function(P){m.removeEventListener(e,t,i),typeof t=="function"?t.call(this,P):t.handleEvent(P)}),r!==null&&(l=m.removeEventListener.bind(m,e,t,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Cs(i),u.push({type:e,listener:t,optionsOrUseCapture:i,attachedListener:b,cleanup:l}),g(this._fragmentFiber.child,!1,HS,e,b,r)}this._eventListeners=u}};function HS(e,t,i,r){return S(e).addEventListener(t,i,r),!1}ai.prototype.removeEventListener=function(e,t,i){var r=this._eventListeners;if(r!==null&&(t=pv(r,e,t,i),t!==-1)){var l=r[t];i=l.attachedListener;var u=l.cleanup;l=Cs(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,GS,e,i,l),r.splice(t,1),u!==null&&u()}};function GS(e,t,i,r){return S(e).removeEventListener(t,i,r),!1}function Cs(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function hv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function pv(e,t,i,r){if(e.length===0)return-1;r=hv(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===t&&u.listener===i&&hv(u.optionsOrUseCapture)===r)return l}return-1}ai.prototype.dispatchEvent=function(e){var t=y(this._fragmentFiber);if(t===null)return!0;t=S(t);var i=this._eventListeners;if(i!==null&&0<i.length||!e.bubbles){var r=t.nodeType===9?t.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var u=i[l];r.addEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),i)for(l=0;l<i.length;l++)u=i[l],r.removeEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},ai.prototype.focus=function(e){g(this._fragmentFiber.child,!0,mv,e,void 0,void 0)};function mv(e,t){return e.tag===6?!1:(e=S(e),$S(e,t))}ai.prototype.focusLast=function(e){var t=[];g(this._fragmentFiber.child,!0,Fd,t,void 0,void 0);for(var i=t.length-1;0<=i&&!mv(t[i],e);i--);};function Fd(e,t){return t.push(e),!1}ai.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=S(e),e=Yo(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,VS,e,void 0,void 0))};function VS(e,t){return e.tag===6?!1:(e=S(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ai.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,kS,e,void 0,void 0)};function kS(e,t){return e.tag===6||(e=S(e),t.observe(e)),!1}ai.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),g(this._fragmentFiber.child,!1,jS,e,void 0,void 0);for(var i=t=0;i<Ri.length;i++){var r=Ri[i];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ri[t++]=r}Ri.length=t}};function jS(e,t){return e.tag===6||(e=S(e),t.unobserve(e)),!1}var Ri=[],Hd=!1;function XS(e,t,i){Ri.push({fragmentInstance:e,observer:t,instance:i}),Hd||(Hd=!0,eM(function(){Hd=!1;var r=Ri;Ri=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}ai.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,qS,e,void 0,void 0),e};function qS(e,t){if(e.tag===6){e=e.stateNode;var i=e.ownerDocument.createRange();i.selectNodeContents(e),t.push.apply(t,i.getClientRects())}else e=S(e),t.push.apply(t,e.getClientRects());return!1}ai.prototype.getRootNode=function(e){var t=y(this._fragmentFiber);return t===null?this:S(t).getRootNode(e)},ai.prototype.compareDocumentPosition=function(e){var t=y(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];g(this._fragmentFiber.child,!1,Fd,i,void 0,void 0);var r=S(t);if(i.length===0){if(i=r,M(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(i=t)}t=this._fragmentFiber;var l=r=i.compareDocumentPosition(e);return i===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=A(t)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=S(i).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=S(i[0]),l=S(i[i.length-1]);var u=M(this._fragmentFiber)?t.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=t.compareDocumentPosition(e),b=l.compareDocumentPosition(e),P=m&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=r&&u&&m&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||u&&l===e||P||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||YS(t,this._fragmentFiber,i[0],i[i.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function YS(e,t,i,r,l){var u=Ye(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===t||u.alternate===t)){i=!0;break e}u=u.return}i=!1}return i}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=t,t=y(t);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==t&&u.alternate!==t)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!u)&&!(t=u===i)&&(t=F(i,u,j),t===null?t=!1:(g(t,!0,z,u,i),u=x,x=null,t=u!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!u)&&!(t=u===r)&&(t=F(r,u,j),t===null?t=!1:(g(t,!0,D,u,r),u=x,O=x=null,t=u!==null)),t):!1}function gv(e,t){var i=e.ownerDocument.createRange();i.selectNodeContents(e),e=i.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ai.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var t=[];g(this._fragmentFiber.child,!1,Fd,t,void 0,void 0);var i=e!==!1;if(t.length===0){var r=A(this._fragmentFiber);if(r=i?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=S(r),gv(e,i);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=i?t.length-1:0;r!==(i?-1:t.length);){var l=t[r];l.tag===6?(l=S(l),gv(l,i)):S(l).scrollIntoView(e),r+=i?-1:1}};function WS(e,t){return e=S(e),vv(e,t),!1}function vv(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function _v(e,t){var i=t._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];e.addEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){for(var m=0,b=0;b<Ri.length;b++){var P=Ri[b];(P.fragmentInstance!==t||P.observer!==u||P.instance!==e)&&(Ri[m++]=P)}Ri.length=m,u.observe(e)}),vv(e,t))}function ZS(e,t){var i=t._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];e.removeEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?XS(t,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Gd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Gd(i),gt(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function KS(e,t,i,r){for(;e.nodeType===1;){var l=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[kt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function QS(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=mi(e.nextSibling),e===null))return null;return e}function xv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mi(e.nextSibling),e===null))return null;return e}function Vd(e){return e.data==="$?"||e.data==="$~"}function kd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function JS(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var r=function(){t(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function mi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var jd=null;function yv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return mi(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Sv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function $S(e,t){function i(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",i,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",i,!0)}return r}function eM(e){ov(function(){ov(function(t){return e(t)})})}function Mv(e,t,i){switch(t=Yo(i),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ev(e,t,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Pt(e,t,r,null,wS,l)}i.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===zi&&(e.onclick=null),gt(e)}function Xd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var gi=new Map,bv=new Set;function Wo(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var fa=Be.d;Be.d={f:tM,r:nM,D:iM,C:aM,L:rM,m:sM,X:lM,S:oM,M:cM};function tM(){var e=fa.f(),t=Ec();return e||t}function nM(e){var t=Kt(e);t!==null&&t.tag===5&&t.type==="form"?Ag(t):fa.r(e)}var ws=typeof document>"u"?null:document;function Tv(e,t,i){var r=ws;if(r&&typeof t=="string"&&t){var l=li(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),bv.has(l)||(bv.add(l),e={rel:e,crossOrigin:i,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),Nn(t,"link",e),Yt(t),r.head.appendChild(t)))}}function iM(e){fa.D(e),Tv("dns-prefetch",e,null)}function aM(e,t){fa.C(e,t),Tv("preconnect",e,t)}function rM(e,t,i){fa.L(e,t,i);var r=ws;if(r&&e&&t){var l='link[rel="preload"][as="'+li(t)+'"]';t==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+li(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+li(i.imageSizes)+'"]')):l+='[href="'+li(e)+'"]';var u=l;switch(t){case"style":u=Ns(e);break;case"script":u=Ds(e)}if(!(gi.has(u)||(e=I({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),gi.set(u,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(Zo(u))||t==="script"&&r.querySelector(Ko(u))))){var m=r.createElement("link");Nn(m,"link",e),t==="style"&&(m[Ht]=!0,m.onload=m.onerror=function(){Ln(m)}),Yt(m),r.head.appendChild(m)}}}function sM(e,t){fa.m(e,t);var i=ws;if(i&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+li(r)+'"][href="'+li(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ds(e)}if(!gi.has(u)&&(e=I({rel:"modulepreload",href:e},t),gi.set(u,e),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ko(u)))return}r=i.createElement("link"),Nn(r,"link",e),Yt(r),i.head.appendChild(r)}}}function oM(e,t,i){fa.S(e,t,i);var r=ws;if(r&&e){var l=xn(r).hoistableStyles,u=Ns(e);t=t||"default";var m=l.get(u);if(!m){var b={loading:0,preload:null};if(m=r.querySelector(Zo(u)))b.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":t},i),(i=gi.get(u))&&qd(e,i);var P=m=r.createElement("link");Yt(P),Nn(P,"link",e),P._p=new Promise(function(W,ie){P.onload=W,P.onerror=ie}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Nc(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:b},l.set(u,m)}}}function lM(e,t){fa.X(e,t);var i=ws;if(i&&e){var r=xn(i).hoistableScripts,l=Ds(e),u=r.get(l);u||(u=i.querySelector(Ko(l)),u||(e=I({src:e,async:!0},t),(t=gi.get(l))&&Yd(e,t),u=i.createElement("script"),Yt(u),Nn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function cM(e,t){fa.M(e,t);var i=ws;if(i&&e){var r=xn(i).hoistableScripts,l=Ds(e),u=r.get(l);u||(u=i.querySelector(Ko(l)),u||(e=I({src:e,async:!0,type:"module"},t),(t=gi.get(l))&&Yd(e,t),u=i.createElement("script"),Yt(u),Nn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Av(e,t,i,r){var l=(l=L.current)?Wo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ns(i.href),t=xn(l).hoistableStyles,r=t.get(i),r||(r={type:"style",instance:null,count:0,state:null},t.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ns(i.href);var u=xn(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(Zo(e)))?u._p||(m.instance=u,m.state.loading=5):(u=gi.get(e),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},gi.set(e,u)),uM(l,e,u,m.state))),t&&r===null)throw Error(s(528,""));return m}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(i=Ds(i),t=xn(l).hoistableScripts,r=t.get(i),r||(r={type:"script",instance:null,count:0,state:null},t.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ns(e){return'href="'+li(e)+'"'}function Zo(e){return'link[rel="stylesheet"]['+e+"]"}function Rv(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function uM(e,t,i,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ht]!==!0){r.loading=1;return}}else t=e.createElement("link"),t[Ht]=!0,t.onload=t.onerror=Ln.bind(null,t),Nn(t,"link",i),Yt(t),e.head.appendChild(t);r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}function Ds(e){return'[src="'+li(e)+'"]'}function Ko(e){return"script[async]"+e}function Cv(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+li(i.href)+'"]');if(r)return t.instance=r,Yt(r),r;var l=I({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Yt(r),Nn(r,"style",l),Nc(r,i.precedence,e),t.instance=r;case"stylesheet":l=Ns(i.href);var u=e.querySelector(Zo(l));if(u)return t.state.loading|=4,t.instance=u,Yt(u),u;r=Rv(i),(l=gi.get(l))&&qd(r,l),u=(e.ownerDocument||e).createElement("link"),Yt(u);var m=u;return m._p=new Promise(function(b,P){m.onload=b,m.onerror=P}),Nn(u,"link",r),t.state.loading|=4,Nc(u,i.precedence,e),t.instance=u;case"script":return u=Ds(i.src),(l=e.querySelector(Ko(u)))?(t.instance=l,Yt(l),l):(r=i,(l=gi.get(u))&&(r=I({},i),Yd(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Yt(l),Nn(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Nc(r,i.precedence,e));return t.instance}function Nc(e,t,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,m=0;m<r.length;m++){var b=r[m];if(b.dataset.precedence===t)u=b;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function qd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dc=null;function wv(e,t,i){if(Dc===null){var r=new Map,l=Dc=new Map;l.set(i,r)}else l=Dc,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(e))return r;for(r.set(e,null),i=i.getElementsByTagName(e),l=0;l<i.length;l++){var u=i[l];if(!(u[kt]||u[be]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var b=r.get(m);b?b.push(u):r.set(m,[u])}}return r}function Wd(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function fM(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Nv(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Lv(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Uv(t),e.suspenseyImages.push(t)),e=pM.bind(e),t.decode().then(e,e))}function dM(e,t,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ns(r.href),u=t.querySelector(Zo(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qo.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=u,Yt(u);return}u=t.ownerDocument||t,r=Rv(r),(l=gi.get(l))&&qd(r,l),u=u.createElement("link"),Yt(u);var m=u;m._p=new Promise(function(b,P){m.onload=b,m.onerror=P}),Nn(u,"link",r),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Qo.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Uc=0;function hM(e,t){return e.stylesheets&&e.count===0&&Oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var r=setTimeout(function(){if(e.stylesheets&&Oc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Uc===0&&(Uc=62500*DS());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Uc?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Ov(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Oc(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Qo(){this.count--,Ov(this)}function pM(){this.imgCount--,Ov(this)}var Lc=null;function Oc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Lc=new Map,t.forEach(mM,e),Lc=null,Qo.call(e))}function mM(e,t){if(!(t.state.loading&4)){var i=Lc.get(e);if(i)var r=i.get(null);else{i=new Map,Lc.set(e,i);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}l=t.instance,m=l.getAttribute("data-precedence"),u=i.get(m)||r,u===r&&i.set(null,l),i.set(m,l),this.count++,r=Qo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Us={$$typeof:he,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function gM(e,t,i,r,l,u,m,b,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function zv(e,t,i,r,l,u,m,b,P,W,ie,de){return e=new gM(e,t,i,m,P,W,ie,de,b),t=1,u===!0&&(t|=24),u=jn(3,null,null,t),e.current=u,u.stateNode=e,t=cf(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:t},hf(u),e}function Pv(e){return e?(e=as,e):as}function Iv(e,t,i,r,l,u){l=Pv(l),r.context===null?r.context=l:r.pendingContext=l,r=za(t),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=Pa(e,r,t),i!==null&&(Wn(i,e,t),Co(i,e,t))}function Bv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Zd(e,t){Bv(e,t),(e=e.alternate)&&Bv(e,t)}function Fv(e){if(e.tag===13||e.tag===31){var t=mr(e,67108864);t!==null&&Wn(t,e,67108864),Zd(e,67108864)}}function Hv(e){if(e.tag===13||e.tag===31){var t=ii();t=re(t);var i=mr(e,t);i!==null&&Wn(i,e,t),Zd(e,t)}}var Ls=!0;function vM(e,t,i,r){var l=Re.T;Re.T=null;var u=Be.p;try{Be.p=2,Kd(e,t,i,r)}finally{Be.p=u,Re.T=l}}function _M(e,t,i,r){var l=Re.T;Re.T=null;var u=Be.p;try{Be.p=8,Kd(e,t,i,r)}finally{Be.p=u,Re.T=l}}function Kd(e,t,i,r){if(Ls){var l=Qd(r);if(l===null)Dd(e,t,r,zc,i),Vv(e,r);else if(yM(l,e,t,i,r))r.stopPropagation();else if(Vv(e,r),t&4&&-1<xM.indexOf(e)){for(;l!==null;){var u=Kt(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Oi(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var P=1<<31-Un(m);b.entanglements[1]|=P,m&=~P}Xi(u),(Dt&6)===0&&(yc=k()+500,jo(0))}}break;case 31:case 13:b=mr(u,2),b!==null&&Wn(b,u,2),Ec(),Zd(u,2)}if(u=Qd(r),u===null&&Dd(e,t,r,zc,i),u===l)break;l=u}l!==null&&r.stopPropagation()}else Dd(e,t,r,null,i)}}function Qd(e){return e=zu(e),Jd(e)}var zc=null;function Jd(e){if(zc=null,e=Ye(e),e!==null){var t=f(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=d(t),e!==null)return e;e=null}else if(i===31){if(e=h(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zc=e,null}function Gv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case ce:return 2;case _e:return 8;case ze:case Ie:return 32;case st:return 268435456;default:return 32}default:return 32}}var $d=!1,Wa=null,Za=null,Ka=null,Jo=new Map,$o=new Map,Qa=[],xM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vv(e,t){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(t.pointerId)}}function el(e,t,i,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Kt(t),t!==null&&Fv(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yM(e,t,i,r,l){switch(t){case"focusin":return Wa=el(Wa,e,t,i,r,l),!0;case"dragenter":return Za=el(Za,e,t,i,r,l),!0;case"mouseover":return Ka=el(Ka,e,t,i,r,l),!0;case"pointerover":var u=l.pointerId;return Jo.set(u,el(Jo.get(u)||null,e,t,i,r,l)),!0;case"gotpointercapture":return u=l.pointerId,$o.set(u,el($o.get(u)||null,e,t,i,r,l)),!0}return!1}function kv(e){var t=Ye(e.target);if(t!==null){var i=f(t);if(i!==null){if(t=i.tag,t===13){if(t=d(i),t!==null){e.blockedOn=t,Me(e.priority,function(){Hv(i)});return}}else if(t===31){if(t=h(i),t!==null){e.blockedOn=t,Me(e.priority,function(){Hv(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Qd(e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);Ou=r,i.target.dispatchEvent(r),Ou=null}else return t=Kt(i),t!==null&&Fv(t),e.blockedOn=i,!1;t.shift()}return!0}function jv(e,t,i){Pc(e)&&i.delete(t)}function SM(){$d=!1,Wa!==null&&Pc(Wa)&&(Wa=null),Za!==null&&Pc(Za)&&(Za=null),Ka!==null&&Pc(Ka)&&(Ka=null),Jo.forEach(jv),$o.forEach(jv)}function Ic(e,t){e.blockedOn===t&&(e.blockedOn=null,$d||($d=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,SM)))}var Bc=null;function Xv(e){Bc!==e&&(Bc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Bc===e&&(Bc=null);for(var t=0;t<e.length;t+=3){var i=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(Jd(r||i)===null)continue;break}var u=Kt(i);u!==null&&(e.splice(t,3),t-=3,Of(u,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Os(e){function t(P){return Ic(P,e)}Wa!==null&&Ic(Wa,e),Za!==null&&Ic(Za,e),Ka!==null&&Ic(Ka,e),Jo.forEach(t),$o.forEach(t);for(var i=0;i<Qa.length;i++){var r=Qa[i];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Qa.length&&(i=Qa[0],i.blockedOn===null);)kv(i),i.blockedOn===null&&Qa.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],u=i[r+1],m=l[De]||null;if(typeof u=="function")m||Xv(i);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[De]||null)b=m.formAction;else if(Jd(l)!==null)continue}else b=m.action;typeof b=="function"?i[r+1]=b:(i.splice(r,3),r-=3),Xv(i)}}}function qv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function eh(e){this._internalRoot=e}Fc.prototype.render=eh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var i=t.current,r=ii();Iv(i,r,e,t,null,null)},Fc.prototype.unmount=eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Iv(e.current,2,null,e,null,null),Ec(),t[Qe]=null}};function Fc(e){this._internalRoot=e}Fc.prototype.unstable_scheduleHydration=function(e){if(e){var t=J();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Qa.length&&t!==0&&t<Qa[i].priority;i++);Qa.splice(i,0,e),i===0&&kv(e)}};var Yv=n.version;if(Yv!=="19.3.0")throw Error(s(527,Yv,"19.3.0"));Be.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var MM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Re,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{Et=Hc.inject(MM),qt=Hc}catch{}}return nl.createRoot=function(e,t){if(!c(e))throw Error(s(299));var i=!1,r="",l=Pg,u=Ig,m=Bg;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=zv(e,1,!1,null,null,i,r,null,l,u,m,qv),e[Qe]=t.current,Nd(e),new eh(t)},nl.hydrateRoot=function(e,t,i){if(!c(e))throw Error(s(299));var r=!1,l="",u=Pg,m=Ig,b=Bg,P=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.formState!==void 0&&(P=i.formState)),t=zv(e,1,!0,t,i??null,r,l,P,u,m,b,qv),t.context=Pv(null),i=t.current,r=ii(),r=re(r),l=za(r),l.callback=null,Pa(i,l,r),i=r,t.current.lanes=i,dr(t,i),Xi(t),e[Qe]=t.current,Nd(e),new Fc(t)},nl.version="19.3.0",nl}var i_;function LM(){if(i_)return ih.exports;i_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),ih.exports=UM(),ih.exports}var OM=LM();const zM=ox(OM);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="174",PM=0,a_=1,IM=2,lx=1,BM=2,va=3,lr=0,Kn=1,_a=2,sr=0,Ks=1,Hh=2,r_=3,s_=4,FM=5,Vr=100,HM=101,GM=102,VM=103,kM=104,jM=200,XM=201,qM=202,YM=203,Gh=204,Vh=205,WM=206,ZM=207,KM=208,QM=209,JM=210,$M=211,eE=212,tE=213,nE=214,kh=0,jh=1,Xh=2,$s=3,qh=4,Yh=5,Wh=6,Zh=7,cx=0,iE=1,aE=2,or=0,rE=1,sE=2,oE=3,lE=4,cE=5,uE=6,fE=7,ux=300,eo=301,to=302,Kh=303,Qh=304,Au=306,Jh=1e3,jr=1001,$h=1002,Li=1003,dE=1004,Gc=1005,Yi=1006,oh=1007,Xr=1008,Ea=1009,fx=1010,dx=1011,ul=1012,Dp=1013,qr=1014,xa=1015,fl=1016,Up=1017,Lp=1018,no=1020,hx=35902,px=1021,mx=1022,Ui=1023,gx=1024,vx=1025,Qs=1026,io=1027,_x=1028,Op=1029,xx=1030,zp=1031,Pp=1033,hu=33776,pu=33777,mu=33778,gu=33779,ep=35840,tp=35841,np=35842,ip=35843,ap=36196,rp=37492,sp=37496,op=37808,lp=37809,cp=37810,up=37811,fp=37812,dp=37813,hp=37814,pp=37815,mp=37816,gp=37817,vp=37818,_p=37819,xp=37820,yp=37821,vu=36492,Sp=36494,Mp=36495,yx=36283,Ep=36284,bp=36285,Tp=36286,hE=3200,pE=3201,mE=0,gE=1,rr="",_i="srgb",ao="srgb-linear",yu="linear",Ft="srgb",zs=7680,o_=519,vE=512,_E=513,xE=514,Sx=515,yE=516,SE=517,ME=518,EE=519,l_=35044,c_="300 es",ya=2e3,Su=2001;class so{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const c=s[n];if(c!==void 0){const f=c.indexOf(a);f!==-1&&c.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,n);n.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lh=Math.PI/180,Ap=180/Math.PI;function dl(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[n&255]+zn[n>>8&255]+"-"+zn[n>>16&15|64]+zn[n>>24&255]+"-"+zn[a&63|128]+zn[a>>8&255]+"-"+zn[a>>16&255]+zn[a>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Tt(o,n,a){return Math.max(n,Math.min(a,o))}function bE(o,n){return(o%n+n)%n}function ch(o,n,a){return(1-a)*o+a*n}function il(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(n=0,a=0){Lt.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,c=n.elements;return this.x=c[0]*a+c[3]*s+c[6],this.y=c[1]*a+c[4]*s+c[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Tt(this.x,n.x,a.x),this.y=Tt(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=Tt(this.x,n,a),this.y=Tt(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Tt(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),c=Math.sin(a),f=this.x-n.x,d=this.y-n.y;return this.x=f*s-d*c+n.x,this.y=f*c+d*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(n,a,s,c,f,d,h,p,v){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,d,h,p,v)}set(n,a,s,c,f,d,h,p,v){const _=this.elements;return _[0]=n,_[1]=c,_[2]=h,_[3]=a,_[4]=f,_[5]=p,_[6]=s,_[7]=d,_[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,d=s[0],h=s[3],p=s[6],v=s[1],_=s[4],g=s[7],y=s[2],M=s[5],A=s[8],N=c[0],S=c[3],x=c[6],O=c[1],z=c[4],D=c[7],j=c[2],F=c[5],I=c[8];return f[0]=d*N+h*O+p*j,f[3]=d*S+h*z+p*F,f[6]=d*x+h*D+p*I,f[1]=v*N+_*O+g*j,f[4]=v*S+_*z+g*F,f[7]=v*x+_*D+g*I,f[2]=y*N+M*O+A*j,f[5]=y*S+M*z+A*F,f[8]=y*x+M*D+A*I,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],v=n[7],_=n[8];return a*d*_-a*h*v-s*f*_+s*h*p+c*f*v-c*d*p}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],v=n[7],_=n[8],g=_*d-h*v,y=h*p-_*f,M=v*f-d*p,A=a*g+s*y+c*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/A;return n[0]=g*N,n[1]=(c*v-_*s)*N,n[2]=(h*s-c*d)*N,n[3]=y*N,n[4]=(_*a-c*p)*N,n[5]=(c*f-h*a)*N,n[6]=M*N,n[7]=(s*p-v*a)*N,n[8]=(d*a-s*f)*N,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,c,f,d,h){const p=Math.cos(f),v=Math.sin(f);return this.set(s*p,s*v,-s*(p*d+v*h)+d+n,-c*v,c*p,-c*(-v*d+p*h)+h+a,0,0,1),this}scale(n,a){return this.premultiply(uh.makeScale(n,a)),this}rotate(n){return this.premultiply(uh.makeRotation(-n)),this}translate(n,a){return this.premultiply(uh.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<9;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new ut;function Mx(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function Mu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function TE(){const o=Mu("canvas");return o.style.display="block",o}const u_={};function Fr(o){o in u_||(u_[o]=!0,console.warn(o))}function AE(o,n,a){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function RE(o){const n=o.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function CE(o){const n=o.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const f_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wE(){const o={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ft&&(c.r=Ma(c.r),c.g=Ma(c.g),c.b=Ma(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ft&&(c.r=Js(c.r),c.g=Js(c.g),c.b=Js(c.b))),c},fromWorkingColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},toWorkingColorSpace:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===rr?yu:this.spaces[c].transfer},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[ao]:{primaries:n,whitePoint:s,transfer:yu,toXYZ:f_,fromXYZ:d_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:n,whitePoint:s,transfer:Ft,toXYZ:f_,fromXYZ:d_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const Nt=wE();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Js(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ps;class NE{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let a;if(n instanceof HTMLCanvasElement)a=n;else{Ps===void 0&&(Ps=Mu("canvas")),Ps.width=n.width,Ps.height=n.height;const s=Ps.getContext("2d");n instanceof ImageData?s.putImageData(n,0,0):s.drawImage(n,0,0,n.width,n.height),a=Ps}return a.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=Mu("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const c=s.getImageData(0,0,n.width,n.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Ma(f[d]/255)*255;return s.putImageData(c,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Ma(a[s]/255)*255):a[s]=Ma(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let DE=0;class Ip{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=dl(),this.data=n,this.dataReady=!0,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(fh(c[d].image)):f.push(fh(c[d]))}else f=fh(c);s.url=f}return a||(n.images[this.uuid]=s),s}}function fh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?NE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UE=0;class Vn extends so{constructor(n=Vn.DEFAULT_IMAGE,a=Vn.DEFAULT_MAPPING,s=jr,c=jr,f=Yi,d=Xr,h=Ui,p=Ea,v=Vn.DEFAULT_ANISOTROPY,_=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=dl(),this.name="",this.source=new Ip(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=v,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==ux)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Jh:n.x=n.x-Math.floor(n.x);break;case jr:n.x=n.x<0?0:1;break;case $h:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Jh:n.y=n.y-Math.floor(n.y);break;case jr:n.y=n.y<0?0:1;break;case $h:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ux;Vn.DEFAULT_ANISOTROPY=1;class rn{constructor(n=0,a=0,s=0,c=1){rn.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=c}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,c){return this.x=n,this.y=a,this.z=s,this.w=c,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=this.w,d=n.elements;return this.x=d[0]*a+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*a+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*a+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*a+d[7]*s+d[11]*c+d[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,c,f;const p=n.elements,v=p[0],_=p[4],g=p[8],y=p[1],M=p[5],A=p[9],N=p[2],S=p[6],x=p[10];if(Math.abs(_-y)<.01&&Math.abs(g-N)<.01&&Math.abs(A-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+N)<.1&&Math.abs(A+S)<.1&&Math.abs(v+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const z=(v+1)/2,D=(M+1)/2,j=(x+1)/2,F=(_+y)/4,I=(g+N)/4,B=(A+S)/4;return z>D&&z>j?z<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(z),c=F/s,f=I/s):D>j?D<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(D),s=F/c,f=B/c):j<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(j),s=I/f,c=B/f),this.set(s,c,f,a),this}let O=Math.sqrt((S-A)*(S-A)+(g-N)*(g-N)+(y-_)*(y-_));return Math.abs(O)<.001&&(O=1),this.x=(S-A)/O,this.y=(g-N)/O,this.z=(y-_)/O,this.w=Math.acos((v+M+x-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Tt(this.x,n.x,a.x),this.y=Tt(this.y,n.y,a.y),this.z=Tt(this.z,n.z,a.z),this.w=Tt(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=Tt(this.x,n,a),this.y=Tt(this.y,n,a),this.z=Tt(this.z,n,a),this.w=Tt(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LE extends so{constructor(n=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=1,this.scissor=new rn(0,0,n,a),this.scissorTest=!1,this.viewport=new rn(0,0,n,a);const c={width:n,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new Vn(c,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=n,this.textures[c].image.height=a,this.textures[c].image.depth=s;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const c=Object.assign({},n.textures[a].image);this.textures[a].source=new Ip(c)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends LE{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class Ex extends Vn{constructor(n=null,a=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Li,this.minFilter=Li,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class OE extends Vn{constructor(n=null,a=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Li,this.minFilter=Li,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(n=0,a=0,s=0,c=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=c}static slerpFlat(n,a,s,c,f,d,h){let p=s[c+0],v=s[c+1],_=s[c+2],g=s[c+3];const y=f[d+0],M=f[d+1],A=f[d+2],N=f[d+3];if(h===0){n[a+0]=p,n[a+1]=v,n[a+2]=_,n[a+3]=g;return}if(h===1){n[a+0]=y,n[a+1]=M,n[a+2]=A,n[a+3]=N;return}if(g!==N||p!==y||v!==M||_!==A){let S=1-h;const x=p*y+v*M+_*A+g*N,O=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const j=Math.sqrt(z),F=Math.atan2(j,x*O);S=Math.sin(S*F)/j,h=Math.sin(h*F)/j}const D=h*O;if(p=p*S+y*D,v=v*S+M*D,_=_*S+A*D,g=g*S+N*D,S===1-h){const j=1/Math.sqrt(p*p+v*v+_*_+g*g);p*=j,v*=j,_*=j,g*=j}}n[a]=p,n[a+1]=v,n[a+2]=_,n[a+3]=g}static multiplyQuaternionsFlat(n,a,s,c,f,d){const h=s[c],p=s[c+1],v=s[c+2],_=s[c+3],g=f[d],y=f[d+1],M=f[d+2],A=f[d+3];return n[a]=h*A+_*g+p*M-v*y,n[a+1]=p*A+_*y+v*g-h*M,n[a+2]=v*A+_*M+h*y-p*g,n[a+3]=_*A-h*g-p*y-v*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,c){return this._x=n,this._y=a,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,c=n._y,f=n._z,d=n._order,h=Math.cos,p=Math.sin,v=h(s/2),_=h(c/2),g=h(f/2),y=p(s/2),M=p(c/2),A=p(f/2);switch(d){case"XYZ":this._x=y*_*g+v*M*A,this._y=v*M*g-y*_*A,this._z=v*_*A+y*M*g,this._w=v*_*g-y*M*A;break;case"YXZ":this._x=y*_*g+v*M*A,this._y=v*M*g-y*_*A,this._z=v*_*A-y*M*g,this._w=v*_*g+y*M*A;break;case"ZXY":this._x=y*_*g-v*M*A,this._y=v*M*g+y*_*A,this._z=v*_*A+y*M*g,this._w=v*_*g-y*M*A;break;case"ZYX":this._x=y*_*g-v*M*A,this._y=v*M*g+y*_*A,this._z=v*_*A-y*M*g,this._w=v*_*g+y*M*A;break;case"YZX":this._x=y*_*g+v*M*A,this._y=v*M*g+y*_*A,this._z=v*_*A-y*M*g,this._w=v*_*g-y*M*A;break;case"XZY":this._x=y*_*g-v*M*A,this._y=v*M*g-y*_*A,this._z=v*_*A+y*M*g,this._w=v*_*g+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,c=Math.sin(s);return this._x=n.x*c,this._y=n.y*c,this._z=n.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],c=a[4],f=a[8],d=a[1],h=a[5],p=a[9],v=a[2],_=a[6],g=a[10],y=s+h+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(f-v)*M,this._z=(d-c)*M}else if(s>h&&s>g){const M=2*Math.sqrt(1+s-h-g);this._w=(_-p)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+v)/M}else if(h>g){const M=2*Math.sqrt(1+h-s-g);this._w=(f-v)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+g-s-h);this._w=(d-c)/M,this._x=(f+v)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Tt(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const c=Math.min(1,a/s);return this.slerp(n,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,c=n._y,f=n._z,d=n._w,h=a._x,p=a._y,v=a._z,_=a._w;return this._x=s*_+d*h+c*v-f*p,this._y=c*_+d*p+f*h-s*v,this._z=f*_+d*v+s*p-c*h,this._w=d*_-s*h-c*p-f*v,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,c=this._y,f=this._z,d=this._w;let h=d*n._w+s*n._x+c*n._y+f*n._z;if(h<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,h=-h):this.copy(n),h>=1)return this._w=d,this._x=s,this._y=c,this._z=f,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-a;return this._w=M*d+a*this._w,this._x=M*s+a*this._x,this._y=M*c+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const v=Math.sqrt(p),_=Math.atan2(v,h),g=Math.sin((1-a)*_)/v,y=Math.sin(a*_)/v;return this._w=d*g+this._w*y,this._x=s*g+this._x*y,this._y=c*g+this._y*y,this._z=f*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(n),c*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(n=0,a=0,s=0){te.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(h_.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(h_.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*c,this.y=f[1]*a+f[4]*s+f[7]*c,this.z=f[2]*a+f[5]*s+f[8]*c,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=n.elements,d=1/(f[3]*a+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*a+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*a+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(n){const a=this.x,s=this.y,c=this.z,f=n.x,d=n.y,h=n.z,p=n.w,v=2*(d*c-h*s),_=2*(h*a-f*c),g=2*(f*s-d*a);return this.x=a+p*v+d*g-h*_,this.y=s+p*_+h*v-f*g,this.z=c+p*g+f*_-d*v,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*c,this.y=f[1]*a+f[5]*s+f[9]*c,this.z=f[2]*a+f[6]*s+f[10]*c,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Tt(this.x,n.x,a.x),this.y=Tt(this.y,n.y,a.y),this.z=Tt(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=Tt(this.x,n,a),this.y=Tt(this.y,n,a),this.z=Tt(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,c=n.y,f=n.z,d=a.x,h=a.y,p=a.z;return this.x=c*p-f*h,this.y=f*d-s*p,this.z=s*h-c*d,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return dh.copy(this).projectOnVector(n),this.sub(dh)}reflect(n){return this.sub(dh.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Tt(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,c=this.z-n.z;return a*a+s*s+c*c}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const c=Math.sin(a)*n;return this.x=c*Math.sin(s),this.y=Math.cos(a)*n,this.z=c*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),c=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=c,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dh=new te,h_=new hl;class pl{constructor(n=new te(1/0,1/0,1/0),a=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(Ci.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(Ci.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=Ci.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)n.isMesh===!0?n.getVertexPosition(d,Ci):Ci.fromBufferAttribute(f,d),Ci.applyMatrix4(n.matrixWorld),this.expandByPoint(Ci);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Vc.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Vc.copy(s.boundingBox)),Vc.applyMatrix4(n.matrixWorld),this.union(Vc)}const c=n.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,Ci),Ci.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(al),kc.subVectors(this.max,al),Is.subVectors(n.a,al),Bs.subVectors(n.b,al),Fs.subVectors(n.c,al),$a.subVectors(Bs,Is),er.subVectors(Fs,Bs),Lr.subVectors(Is,Fs);let a=[0,-$a.z,$a.y,0,-er.z,er.y,0,-Lr.z,Lr.y,$a.z,0,-$a.x,er.z,0,-er.x,Lr.z,0,-Lr.x,-$a.y,$a.x,0,-er.y,er.x,0,-Lr.y,Lr.x,0];return!hh(a,Is,Bs,Fs,kc)||(a=[1,0,0,0,1,0,0,0,1],!hh(a,Is,Bs,Fs,kc))?!1:(jc.crossVectors($a,er),a=[jc.x,jc.y,jc.z],hh(a,Is,Bs,Fs,kc))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Ci).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(Ci).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(da),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const da=[new te,new te,new te,new te,new te,new te,new te,new te],Ci=new te,Vc=new pl,Is=new te,Bs=new te,Fs=new te,$a=new te,er=new te,Lr=new te,al=new te,kc=new te,jc=new te,Or=new te;function hh(o,n,a,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){Or.fromArray(o,f);const h=c.x*Math.abs(Or.x)+c.y*Math.abs(Or.y)+c.z*Math.abs(Or.z),p=n.dot(Or),v=a.dot(Or),_=s.dot(Or);if(Math.max(-Math.max(p,v,_),Math.min(p,v,_))>h)return!1}return!0}const zE=new pl,rl=new te,ph=new te;class ml{constructor(n=new te,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):zE.setFromPoints(n).getCenter(s);let c=0;for(let f=0,d=n.length;f<d;f++)c=Math.max(c,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(c),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;rl.subVectors(n,this.center);const a=rl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),c=(s-this.radius)*.5;this.center.addScaledVector(rl,c/s),this.radius+=c}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(ph.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(rl.copy(n.center).add(ph)),this.expandByPoint(rl.copy(n.center).sub(ph))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ha=new te,mh=new te,Xc=new te,tr=new te,gh=new te,qc=new te,vh=new te;class Bp{constructor(n=new te,a=new te(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,ha)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=ha.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(ha.copy(this.origin).addScaledVector(this.direction,a),ha.distanceToSquared(n))}distanceSqToSegment(n,a,s,c){mh.copy(n).add(a).multiplyScalar(.5),Xc.copy(a).sub(n).normalize(),tr.copy(this.origin).sub(mh);const f=n.distanceTo(a)*.5,d=-this.direction.dot(Xc),h=tr.dot(this.direction),p=-tr.dot(Xc),v=tr.lengthSq(),_=Math.abs(1-d*d);let g,y,M,A;if(_>0)if(g=d*p-h,y=d*h-p,A=f*_,g>=0)if(y>=-A)if(y<=A){const N=1/_;g*=N,y*=N,M=g*(g+d*y+2*h)+y*(d*g+y+2*p)+v}else y=f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+v;else y=-f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+v;else y<=-A?(g=Math.max(0,-(-d*f+h)),y=g>0?-f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+v):y<=A?(g=0,y=Math.min(Math.max(-f,-p),f),M=y*(y+2*p)+v):(g=Math.max(0,-(d*f+h)),y=g>0?f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+v);else y=d>0?-f:f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+v;return s&&s.copy(this.origin).addScaledVector(this.direction,g),c&&c.copy(mh).addScaledVector(Xc,y),M}intersectSphere(n,a){ha.subVectors(n.center,this.origin);const s=ha.dot(this.direction),c=ha.dot(ha)-s*s,f=n.radius*n.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,a):this.at(h,a)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,c,f,d,h,p;const v=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return v>=0?(s=(n.min.x-y.x)*v,c=(n.max.x-y.x)*v):(s=(n.max.x-y.x)*v,c=(n.min.x-y.x)*v),_>=0?(f=(n.min.y-y.y)*_,d=(n.max.y-y.y)*_):(f=(n.max.y-y.y)*_,d=(n.min.y-y.y)*_),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),g>=0?(h=(n.min.z-y.z)*g,p=(n.max.z-y.z)*g):(h=(n.max.z-y.z)*g,p=(n.min.z-y.z)*g),s>p||h>c)||((h>s||s!==s)&&(s=h),(p<c||c!==c)&&(c=p),c<0)?null:this.at(s>=0?s:c,a)}intersectsBox(n){return this.intersectBox(n,ha)!==null}intersectTriangle(n,a,s,c,f){gh.subVectors(a,n),qc.subVectors(s,n),vh.crossVectors(gh,qc);let d=this.direction.dot(vh),h;if(d>0){if(c)return null;h=1}else if(d<0)h=-1,d=-d;else return null;tr.subVectors(this.origin,n);const p=h*this.direction.dot(qc.crossVectors(tr,qc));if(p<0)return null;const v=h*this.direction.dot(gh.cross(tr));if(v<0||p+v>d)return null;const _=-h*tr.dot(vh);return _<0?null:this.at(_/d,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(n,a,s,c,f,d,h,p,v,_,g,y,M,A,N,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,d,h,p,v,_,g,y,M,A,N,S)}set(n,a,s,c,f,d,h,p,v,_,g,y,M,A,N,S){const x=this.elements;return x[0]=n,x[4]=a,x[8]=s,x[12]=c,x[1]=f,x[5]=d,x[9]=h,x[13]=p,x[2]=v,x[6]=_,x[10]=g,x[14]=y,x[3]=M,x[7]=A,x[11]=N,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,c=1/Hs.setFromMatrixColumn(n,0).length(),f=1/Hs.setFromMatrixColumn(n,1).length(),d=1/Hs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*c,a[1]=s[1]*c,a[2]=s[2]*c,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,c=n.y,f=n.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(c),v=Math.sin(c),_=Math.cos(f),g=Math.sin(f);if(n.order==="XYZ"){const y=d*_,M=d*g,A=h*_,N=h*g;a[0]=p*_,a[4]=-p*g,a[8]=v,a[1]=M+A*v,a[5]=y-N*v,a[9]=-h*p,a[2]=N-y*v,a[6]=A+M*v,a[10]=d*p}else if(n.order==="YXZ"){const y=p*_,M=p*g,A=v*_,N=v*g;a[0]=y+N*h,a[4]=A*h-M,a[8]=d*v,a[1]=d*g,a[5]=d*_,a[9]=-h,a[2]=M*h-A,a[6]=N+y*h,a[10]=d*p}else if(n.order==="ZXY"){const y=p*_,M=p*g,A=v*_,N=v*g;a[0]=y-N*h,a[4]=-d*g,a[8]=A+M*h,a[1]=M+A*h,a[5]=d*_,a[9]=N-y*h,a[2]=-d*v,a[6]=h,a[10]=d*p}else if(n.order==="ZYX"){const y=d*_,M=d*g,A=h*_,N=h*g;a[0]=p*_,a[4]=A*v-M,a[8]=y*v+N,a[1]=p*g,a[5]=N*v+y,a[9]=M*v-A,a[2]=-v,a[6]=h*p,a[10]=d*p}else if(n.order==="YZX"){const y=d*p,M=d*v,A=h*p,N=h*v;a[0]=p*_,a[4]=N-y*g,a[8]=A*g+M,a[1]=g,a[5]=d*_,a[9]=-h*_,a[2]=-v*_,a[6]=M*g+A,a[10]=y-N*g}else if(n.order==="XZY"){const y=d*p,M=d*v,A=h*p,N=h*v;a[0]=p*_,a[4]=-g,a[8]=v*_,a[1]=y*g+N,a[5]=d*_,a[9]=M*g-A,a[2]=A*g-M,a[6]=h*_,a[10]=N*g+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(PE,n,IE)}lookAt(n,a,s){const c=this.elements;return ri.subVectors(n,a),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),nr.crossVectors(s,ri),nr.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),nr.crossVectors(s,ri)),nr.normalize(),Yc.crossVectors(ri,nr),c[0]=nr.x,c[4]=Yc.x,c[8]=ri.x,c[1]=nr.y,c[5]=Yc.y,c[9]=ri.y,c[2]=nr.z,c[6]=Yc.z,c[10]=ri.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,d=s[0],h=s[4],p=s[8],v=s[12],_=s[1],g=s[5],y=s[9],M=s[13],A=s[2],N=s[6],S=s[10],x=s[14],O=s[3],z=s[7],D=s[11],j=s[15],F=c[0],I=c[4],B=c[8],U=c[12],C=c[1],G=c[5],le=c[9],oe=c[13],ve=c[2],he=c[6],q=c[10],ae=c[14],Q=c[3],xe=c[7],Se=c[11],Fe=c[15];return f[0]=d*F+h*C+p*ve+v*Q,f[4]=d*I+h*G+p*he+v*xe,f[8]=d*B+h*le+p*q+v*Se,f[12]=d*U+h*oe+p*ae+v*Fe,f[1]=_*F+g*C+y*ve+M*Q,f[5]=_*I+g*G+y*he+M*xe,f[9]=_*B+g*le+y*q+M*Se,f[13]=_*U+g*oe+y*ae+M*Fe,f[2]=A*F+N*C+S*ve+x*Q,f[6]=A*I+N*G+S*he+x*xe,f[10]=A*B+N*le+S*q+x*Se,f[14]=A*U+N*oe+S*ae+x*Fe,f[3]=O*F+z*C+D*ve+j*Q,f[7]=O*I+z*G+D*he+j*xe,f[11]=O*B+z*le+D*q+j*Se,f[15]=O*U+z*oe+D*ae+j*Fe,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],c=n[8],f=n[12],d=n[1],h=n[5],p=n[9],v=n[13],_=n[2],g=n[6],y=n[10],M=n[14],A=n[3],N=n[7],S=n[11],x=n[15];return A*(+f*p*g-c*v*g-f*h*y+s*v*y+c*h*M-s*p*M)+N*(+a*p*M-a*v*y+f*d*y-c*d*M+c*v*_-f*p*_)+S*(+a*v*g-a*h*M-f*d*g+s*d*M+f*h*_-s*v*_)+x*(-c*h*_-a*p*g+a*h*y+c*d*g-s*d*y+s*p*_)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const c=this.elements;return n.isVector3?(c[12]=n.x,c[13]=n.y,c[14]=n.z):(c[12]=n,c[13]=a,c[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],v=n[7],_=n[8],g=n[9],y=n[10],M=n[11],A=n[12],N=n[13],S=n[14],x=n[15],O=g*S*v-N*y*v+N*p*M-h*S*M-g*p*x+h*y*x,z=A*y*v-_*S*v-A*p*M+d*S*M+_*p*x-d*y*x,D=_*N*v-A*g*v+A*h*M-d*N*M-_*h*x+d*g*x,j=A*g*p-_*N*p-A*h*y+d*N*y+_*h*S-d*g*S,F=a*O+s*z+c*D+f*j;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return n[0]=O*I,n[1]=(N*y*f-g*S*f-N*c*M+s*S*M+g*c*x-s*y*x)*I,n[2]=(h*S*f-N*p*f+N*c*v-s*S*v-h*c*x+s*p*x)*I,n[3]=(g*p*f-h*y*f-g*c*v+s*y*v+h*c*M-s*p*M)*I,n[4]=z*I,n[5]=(_*S*f-A*y*f+A*c*M-a*S*M-_*c*x+a*y*x)*I,n[6]=(A*p*f-d*S*f-A*c*v+a*S*v+d*c*x-a*p*x)*I,n[7]=(d*y*f-_*p*f+_*c*v-a*y*v-d*c*M+a*p*M)*I,n[8]=D*I,n[9]=(A*g*f-_*N*f-A*s*M+a*N*M+_*s*x-a*g*x)*I,n[10]=(d*N*f-A*h*f+A*s*v-a*N*v-d*s*x+a*h*x)*I,n[11]=(_*h*f-d*g*f-_*s*v+a*g*v+d*s*M-a*h*M)*I,n[12]=j*I,n[13]=(_*N*c-A*g*c+A*s*y-a*N*y-_*s*S+a*g*S)*I,n[14]=(A*h*c-d*N*c-A*s*p+a*N*p+d*s*S-a*h*S)*I,n[15]=(d*g*c-_*h*c+_*s*p-a*g*p-d*s*y+a*h*y)*I,this}scale(n){const a=this.elements,s=n.x,c=n.y,f=n.z;return a[0]*=s,a[4]*=c,a[8]*=f,a[1]*=s,a[5]*=c,a[9]*=f,a[2]*=s,a[6]*=c,a[10]*=f,a[3]*=s,a[7]*=c,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],c=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,c))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),c=Math.sin(a),f=1-s,d=n.x,h=n.y,p=n.z,v=f*d,_=f*h;return this.set(v*d+s,v*h-c*p,v*p+c*h,0,v*h+c*p,_*h+s,_*p-c*d,0,v*p-c*h,_*p+c*d,f*p*p+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,c,f,d){return this.set(1,s,f,0,n,1,d,0,a,c,1,0,0,0,0,1),this}compose(n,a,s){const c=this.elements,f=a._x,d=a._y,h=a._z,p=a._w,v=f+f,_=d+d,g=h+h,y=f*v,M=f*_,A=f*g,N=d*_,S=d*g,x=h*g,O=p*v,z=p*_,D=p*g,j=s.x,F=s.y,I=s.z;return c[0]=(1-(N+x))*j,c[1]=(M+D)*j,c[2]=(A-z)*j,c[3]=0,c[4]=(M-D)*F,c[5]=(1-(y+x))*F,c[6]=(S+O)*F,c[7]=0,c[8]=(A+z)*I,c[9]=(S-O)*I,c[10]=(1-(y+N))*I,c[11]=0,c[12]=n.x,c[13]=n.y,c[14]=n.z,c[15]=1,this}decompose(n,a,s){const c=this.elements;let f=Hs.set(c[0],c[1],c[2]).length();const d=Hs.set(c[4],c[5],c[6]).length(),h=Hs.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),n.x=c[12],n.y=c[13],n.z=c[14],wi.copy(this);const v=1/f,_=1/d,g=1/h;return wi.elements[0]*=v,wi.elements[1]*=v,wi.elements[2]*=v,wi.elements[4]*=_,wi.elements[5]*=_,wi.elements[6]*=_,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,a.setFromRotationMatrix(wi),s.x=f,s.y=d,s.z=h,this}makePerspective(n,a,s,c,f,d,h=ya){const p=this.elements,v=2*f/(a-n),_=2*f/(s-c),g=(a+n)/(a-n),y=(s+c)/(s-c);let M,A;if(h===ya)M=-(d+f)/(d-f),A=-2*d*f/(d-f);else if(h===Su)M=-d/(d-f),A=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(n,a,s,c,f,d,h=ya){const p=this.elements,v=1/(a-n),_=1/(s-c),g=1/(d-f),y=(a+n)*v,M=(s+c)*_;let A,N;if(h===ya)A=(d+f)*g,N=-2*g;else if(h===Su)A=f*g,N=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*v,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=N,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<16;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Hs=new te,wi=new tn,PE=new te(0,0,0),IE=new te(1,1,1),nr=new te,Yc=new te,ri=new te,p_=new tn,m_=new hl;class ba{constructor(n=0,a=0,s=0,c=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=c}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,c=this._order){return this._x=n,this._y=a,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const c=n.elements,f=c[0],d=c[4],h=c[8],p=c[1],v=c[5],_=c[9],g=c[2],y=c[6],M=c[10];switch(a){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(y,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,v)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,v)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,v));break;case"YZX":this._z=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,v),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,v),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return p_.makeRotationFromQuaternion(n),this.setFromRotationMatrix(p_,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return m_.setFromEuler(this),this.setFromQuaternion(m_,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class bx{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let BE=0;const g_=new te,Gs=new hl,pa=new tn,Wc=new te,sl=new te,FE=new te,HE=new hl,v_=new te(1,0,0),__=new te(0,1,0),x_=new te(0,0,1),y_={type:"added"},GE={type:"removed"},Vs={type:"childadded",child:null},_h={type:"childremoved",child:null};class kn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const n=new te,a=new ba,s=new hl,c=new te(1,1,1);function f(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new tn},normalMatrix:{value:new ut}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Gs.setFromAxisAngle(n,a),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(n,a){return Gs.setFromAxisAngle(n,a),this.quaternion.premultiply(Gs),this}rotateX(n){return this.rotateOnAxis(v_,n)}rotateY(n){return this.rotateOnAxis(__,n)}rotateZ(n){return this.rotateOnAxis(x_,n)}translateOnAxis(n,a){return g_.copy(n).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(v_,n)}translateY(n){return this.translateOnAxis(__,n)}translateZ(n){return this.translateOnAxis(x_,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Wc.copy(n):Wc.set(n,a,s);const c=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(sl,Wc,this.up):pa.lookAt(Wc,sl,this.up),this.quaternion.setFromRotationMatrix(pa),c&&(pa.extractRotation(c.matrixWorld),Gs.setFromRotationMatrix(pa),this.quaternion.premultiply(Gs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(y_),Vs.child=n,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(GE),_h.child=n,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),pa.multiply(n.parent.matrixWorld)),n.applyMatrix4(pa),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(y_),Vs.child=n,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(n,a);if(d!==void 0)return d}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,n,FE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,HE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(n)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(n.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let v=0,_=p.length;v<_;v++){const g=p[v];f(n.shapes,g)}else f(n.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,v=this.material.length;p<v;p++)h.push(f(n.materials,this.material[p]));c.material=h}else c.material=f(n.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(n).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];c.animations.push(f(n.animations,p))}}if(a){const h=d(n.geometries),p=d(n.materials),v=d(n.textures),_=d(n.images),g=d(n.shapes),y=d(n.skeletons),M=d(n.animations),A=d(n.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),v.length>0&&(s.textures=v),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=c,s;function d(h){const p=[];for(const v in h){const _=h[v];delete _.metadata,p.push(_)}return p}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const c=n.children[s];this.add(c.clone())}return this}}kn.DEFAULT_UP=new te(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new te,ma=new te,xh=new te,ga=new te,ks=new te,js=new te,S_=new te,yh=new te,Sh=new te,Mh=new te,Eh=new rn,bh=new rn,Th=new rn;class Di{constructor(n=new te,a=new te,s=new te){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,c){c.subVectors(s,a),Ni.subVectors(n,a),c.cross(Ni);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(n,a,s,c,f){Ni.subVectors(c,a),ma.subVectors(s,a),xh.subVectors(n,a);const d=Ni.dot(Ni),h=Ni.dot(ma),p=Ni.dot(xh),v=ma.dot(ma),_=ma.dot(xh),g=d*v-h*h;if(g===0)return f.set(0,0,0),null;const y=1/g,M=(v*p-h*_)*y,A=(d*_-h*p)*y;return f.set(1-M-A,A,M)}static containsPoint(n,a,s,c){return this.getBarycoord(n,a,s,c,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(n,a,s,c,f,d,h,p){return this.getBarycoord(n,a,s,c,ga)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,ga.x),p.addScaledVector(d,ga.y),p.addScaledVector(h,ga.z),p)}static getInterpolatedAttribute(n,a,s,c,f,d){return Eh.setScalar(0),bh.setScalar(0),Th.setScalar(0),Eh.fromBufferAttribute(n,a),bh.fromBufferAttribute(n,s),Th.fromBufferAttribute(n,c),d.setScalar(0),d.addScaledVector(Eh,f.x),d.addScaledVector(bh,f.y),d.addScaledVector(Th,f.z),d}static isFrontFacing(n,a,s,c){return Ni.subVectors(s,a),ma.subVectors(n,a),Ni.cross(ma).dot(c)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,c){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[c]),this}setFromAttributeAndIndices(n,a,s,c){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,c),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ni.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ni.cross(ma).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Di.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Di.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,c,f){return Di.getInterpolation(n,this.a,this.b,this.c,a,s,c,f)}containsPoint(n){return Di.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Di.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,c=this.b,f=this.c;let d,h;ks.subVectors(c,s),js.subVectors(f,s),yh.subVectors(n,s);const p=ks.dot(yh),v=js.dot(yh);if(p<=0&&v<=0)return a.copy(s);Sh.subVectors(n,c);const _=ks.dot(Sh),g=js.dot(Sh);if(_>=0&&g<=_)return a.copy(c);const y=p*g-_*v;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),a.copy(s).addScaledVector(ks,d);Mh.subVectors(n,f);const M=ks.dot(Mh),A=js.dot(Mh);if(A>=0&&M<=A)return a.copy(f);const N=M*v-p*A;if(N<=0&&v>=0&&A<=0)return h=v/(v-A),a.copy(s).addScaledVector(js,h);const S=_*A-M*g;if(S<=0&&g-_>=0&&M-A>=0)return S_.subVectors(f,c),h=(g-_)/(g-_+(M-A)),a.copy(c).addScaledVector(S_,h);const x=1/(S+N+y);return d=N*x,h=y*x,a.copy(s).addScaledVector(ks,d).addScaledVector(js,h)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function Ah(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class Rt{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const c=n;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=_i){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Nt.toWorkingColorSpace(this,a),this}setRGB(n,a,s,c=Nt.workingColorSpace){return this.r=n,this.g=a,this.b=s,Nt.toWorkingColorSpace(this,c),this}setHSL(n,a,s,c=Nt.workingColorSpace){if(n=bE(n,1),a=Tt(a,0,1),s=Tt(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,d=2*s-f;this.r=Ah(d,f,n+1/3),this.g=Ah(d,f,n),this.b=Ah(d,f,n-1/3)}return Nt.toWorkingColorSpace(this,c),this}setStyle(n,a=_i){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=_i){const s=Tx[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Ma(n.r),this.g=Ma(n.g),this.b=Ma(n.b),this}copyLinearToSRGB(n){return this.r=Js(n.r),this.g=Js(n.g),this.b=Js(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=_i){return Nt.fromWorkingColorSpace(Pn.copy(this),n),Math.round(Tt(Pn.r*255,0,255))*65536+Math.round(Tt(Pn.g*255,0,255))*256+Math.round(Tt(Pn.b*255,0,255))}getHexString(n=_i){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Pn.copy(this),a);const s=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let p,v;const _=(h+d)/2;if(h===d)p=0,v=0;else{const g=d-h;switch(v=_<=.5?g/(d+h):g/(2-d-h),d){case s:p=(c-f)/g+(c<f?6:0);break;case c:p=(f-s)/g+2;break;case f:p=(s-c)/g+4;break}p/=6}return n.h=p,n.s=v,n.l=_,n}getRGB(n,a=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Pn.copy(this),a),n.r=Pn.r,n.g=Pn.g,n.b=Pn.b,n}getStyle(n=_i){Nt.fromWorkingColorSpace(Pn.copy(this),n);const a=Pn.r,s=Pn.g,c=Pn.b;return n!==_i?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(n,a,s){return this.getHSL(ir),this.setHSL(ir.h+n,ir.s+a,ir.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(ir),n.getHSL(Zc);const s=ch(ir.h,Zc.h,a),c=ch(ir.s,Zc.s,a),f=ch(ir.l,Zc.l,a);return this.setHSL(s,c,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,c=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*c,this.g=f[1]*a+f[4]*s+f[7]*c,this.b=f[2]*a+f[5]*s+f[8]*c,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Rt;Rt.NAMES=Tx;let VE=0;class oo extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Ks,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Gh&&(s.blendSrc=this.blendSrc),this.blendDst!==Vh&&(s.blendDst=this.blendDst),this.blendEquation!==Vr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(a){const f=c(n.textures),d=c(n.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const c=a.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ax extends oo{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const fn=new te,Kc=new Lt;let kE=0;class yi{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kE++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=l_,this.updateRanges=[],this.gpuType=xa,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[n+c]=a.array[s+c];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Kc.fromBufferAttribute(this,a),Kc.applyMatrix3(n),this.setXY(a,Kc.x,Kc.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyMatrix3(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyMatrix4(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyNormalMatrix(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.transformDirection(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=il(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Zn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=il(a,this.array)),a}setX(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=il(a,this.array)),a}setY(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=il(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=il(a,this.array)),a}setW(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,c){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array),c=Zn(c,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this}setXYZW(n,a,s,c,f){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array),c=Zn(c,this.array),f=Zn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==l_&&(n.usage=this.usage),n}}class Rx extends yi{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class Cx extends yi{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class oi extends yi{constructor(n,a,s){super(new Float32Array(n),a,s)}}let jE=0;const vi=new tn,Rh=new kn,Xs=new te,si=new pl,ol=new pl,En=new te;class Si extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(Mx(n)?Cx:Rx)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ut().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(n),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return vi.makeRotationFromQuaternion(n),this.applyMatrix4(vi),this}rotateX(n){return vi.makeRotationX(n),this.applyMatrix4(vi),this}rotateY(n){return vi.makeRotationY(n),this.applyMatrix4(vi),this}rotateZ(n){return vi.makeRotationZ(n),this.applyMatrix4(vi),this}translate(n,a,s){return vi.makeTranslation(n,a,s),this.applyMatrix4(vi),this}scale(n,a,s){return vi.makeScale(n,a,s),this.applyMatrix4(vi),this}lookAt(n){return Rh.lookAt(n),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let c=0,f=n.length;c<f;c++){const d=n[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new oi(s,3))}else{const s=Math.min(n.length,a.count);for(let c=0;c<s;c++){const f=n[c];a.setXYZ(c,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,c=a.length;s<c;s++){const f=a[s];si.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(n){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(n),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];ol.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(si.min,ol.min),si.expandByPoint(En),En.addVectors(si.max,ol.max),si.expandByPoint(En)):(si.expandByPoint(ol.min),si.expandByPoint(ol.max))}si.getCenter(s);let c=0;for(let f=0,d=n.count;f<d;f++)En.fromBufferAttribute(n,f),c=Math.max(c,s.distanceToSquared(En));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],p=this.morphTargetsRelative;for(let v=0,_=h.count;v<_;v++)En.fromBufferAttribute(h,v),p&&(Xs.fromBufferAttribute(n,v),En.add(Xs)),c=Math.max(c,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,c=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let B=0;B<s.count;B++)h[B]=new te,p[B]=new te;const v=new te,_=new te,g=new te,y=new Lt,M=new Lt,A=new Lt,N=new te,S=new te;function x(B,U,C){v.fromBufferAttribute(s,B),_.fromBufferAttribute(s,U),g.fromBufferAttribute(s,C),y.fromBufferAttribute(f,B),M.fromBufferAttribute(f,U),A.fromBufferAttribute(f,C),_.sub(v),g.sub(v),M.sub(y),A.sub(y);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(N.copy(_).multiplyScalar(A.y).addScaledVector(g,-M.y).multiplyScalar(G),S.copy(g).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(G),h[B].add(N),h[U].add(N),h[C].add(N),p[B].add(S),p[U].add(S),p[C].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:n.count}]);for(let B=0,U=O.length;B<U;++B){const C=O[B],G=C.start,le=C.count;for(let oe=G,ve=G+le;oe<ve;oe+=3)x(n.getX(oe+0),n.getX(oe+1),n.getX(oe+2))}const z=new te,D=new te,j=new te,F=new te;function I(B){j.fromBufferAttribute(c,B),F.copy(j);const U=h[B];z.copy(U),z.sub(j.multiplyScalar(j.dot(U))).normalize(),D.crossVectors(F,U);const G=D.dot(p[B])<0?-1:1;d.setXYZW(B,z.x,z.y,z.z,G)}for(let B=0,U=O.length;B<U;++B){const C=O[B],G=C.start,le=C.count;for(let oe=G,ve=G+le;oe<ve;oe+=3)I(n.getX(oe+0)),I(n.getX(oe+1)),I(n.getX(oe+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const c=new te,f=new te,d=new te,h=new te,p=new te,v=new te,_=new te,g=new te;if(n)for(let y=0,M=n.count;y<M;y+=3){const A=n.getX(y+0),N=n.getX(y+1),S=n.getX(y+2);c.fromBufferAttribute(a,A),f.fromBufferAttribute(a,N),d.fromBufferAttribute(a,S),_.subVectors(d,f),g.subVectors(c,f),_.cross(g),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,N),v.fromBufferAttribute(s,S),h.add(_),p.add(_),v.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(N,p.x,p.y,p.z),s.setXYZ(S,v.x,v.y,v.z)}else for(let y=0,M=a.count;y<M;y+=3)c.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),d.fromBufferAttribute(a,y+2),_.subVectors(d,f),g.subVectors(c,f),_.cross(g),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)En.fromBufferAttribute(n,a),En.normalize(),n.setXYZ(a,En.x,En.y,En.z)}toNonIndexed(){function n(h,p){const v=h.array,_=h.itemSize,g=h.normalized,y=new v.constructor(p.length*_);let M=0,A=0;for(let N=0,S=p.length;N<S;N++){h.isInterleavedBufferAttribute?M=p[N]*h.data.stride+h.offset:M=p[N]*_;for(let x=0;x<_;x++)y[A++]=v[M++]}return new yi(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Si,s=this.index.array,c=this.attributes;for(const h in c){const p=c[h],v=n(p,s);a.setAttribute(h,v)}const f=this.morphAttributes;for(const h in f){const p=[],v=f[h];for(let _=0,g=v.length;_<g;_++){const y=v[_],M=n(y,s);p.push(M)}a.morphAttributes[h]=p}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const v=d[h];a.addGroup(v.start,v.count,v.materialIndex)}return a}toJSON(){const n={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const v in p)p[v]!==void 0&&(n[v]=p[v]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const p in s){const v=s[p];n.data.attributes[p]=v.toJSON(n.data)}const c={};let f=!1;for(const p in this.morphAttributes){const v=this.morphAttributes[p],_=[];for(let g=0,y=v.length;g<y;g++){const M=v[g];_.push(M.toJSON(n.data))}_.length>0&&(c[p]=_,f=!0)}f&&(n.data.morphAttributes=c,n.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(n.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(n.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone(a));const c=n.attributes;for(const v in c){const _=c[v];this.setAttribute(v,_.clone(a))}const f=n.morphAttributes;for(const v in f){const _=[],g=f[v];for(let y=0,M=g.length;y<M;y++)_.push(g[y].clone(a));this.morphAttributes[v]=_}this.morphTargetsRelative=n.morphTargetsRelative;const d=n.groups;for(let v=0,_=d.length;v<_;v++){const g=d[v];this.addGroup(g.start,g.count,g.materialIndex)}const h=n.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=n.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M_=new tn,zr=new Bp,Qc=new ml,E_=new te,Jc=new te,$c=new te,eu=new te,Ch=new te,tu=new te,b_=new te,nu=new te;class Sa extends kn{constructor(n=new Si,a=new Ax){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(n,a){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(c,n);const h=this.morphTargetInfluences;if(f&&h){tu.set(0,0,0);for(let p=0,v=f.length;p<v;p++){const _=h[p],g=f[p];_!==0&&(Ch.fromBufferAttribute(g,n),d?tu.addScaledVector(Ch,_):tu.addScaledVector(Ch.sub(a),_))}a.add(tu)}return a}raycast(n,a){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Qc.copy(s.boundingSphere),Qc.applyMatrix4(f),zr.copy(n.ray).recast(n.near),!(Qc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Qc,E_)===null||zr.origin.distanceToSquared(E_)>(n.far-n.near)**2))&&(M_.copy(f).invert(),zr.copy(n.ray).applyMatrix4(M_),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,zr)))}_computeIntersections(n,a,s){let c;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,v=f.attributes.uv,_=f.attributes.uv1,g=f.attributes.normal,y=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,N=y.length;A<N;A++){const S=y[A],x=d[S.materialIndex],O=Math.max(S.start,M.start),z=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let D=O,j=z;D<j;D+=3){const F=h.getX(D),I=h.getX(D+1),B=h.getX(D+2);c=iu(this,x,n,s,v,_,g,F,I,B),c&&(c.faceIndex=Math.floor(D/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const A=Math.max(0,M.start),N=Math.min(h.count,M.start+M.count);for(let S=A,x=N;S<x;S+=3){const O=h.getX(S),z=h.getX(S+1),D=h.getX(S+2);c=iu(this,d,n,s,v,_,g,O,z,D),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,N=y.length;A<N;A++){const S=y[A],x=d[S.materialIndex],O=Math.max(S.start,M.start),z=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let D=O,j=z;D<j;D+=3){const F=D,I=D+1,B=D+2;c=iu(this,x,n,s,v,_,g,F,I,B),c&&(c.faceIndex=Math.floor(D/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const A=Math.max(0,M.start),N=Math.min(p.count,M.start+M.count);for(let S=A,x=N;S<x;S+=3){const O=S,z=S+1,D=S+2;c=iu(this,d,n,s,v,_,g,O,z,D),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}}}function XE(o,n,a,s,c,f,d,h){let p;if(n.side===Kn?p=s.intersectTriangle(d,f,c,!0,h):p=s.intersectTriangle(c,f,d,n.side===lr,h),p===null)return null;nu.copy(h),nu.applyMatrix4(o.matrixWorld);const v=a.ray.origin.distanceTo(nu);return v<a.near||v>a.far?null:{distance:v,point:nu.clone(),object:o}}function iu(o,n,a,s,c,f,d,h,p,v){o.getVertexPosition(h,Jc),o.getVertexPosition(p,$c),o.getVertexPosition(v,eu);const _=XE(o,n,a,s,Jc,$c,eu,b_);if(_){const g=new te;Di.getBarycoord(b_,Jc,$c,eu,g),c&&(_.uv=Di.getInterpolatedAttribute(c,h,p,v,g,new Lt)),f&&(_.uv1=Di.getInterpolatedAttribute(f,h,p,v,g,new Lt)),d&&(_.normal=Di.getInterpolatedAttribute(d,h,p,v,g,new te),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:p,c:v,normal:new te,materialIndex:0};Di.getNormal(Jc,$c,eu,y.normal),_.face=y,_.barycoord=g}return _}class gl extends Si{constructor(n=1,a=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const p=[],v=[],_=[],g=[];let y=0,M=0;A("z","y","x",-1,-1,s,a,n,d,f,0),A("z","y","x",1,-1,s,a,-n,d,f,1),A("x","z","y",1,1,n,s,a,c,d,2),A("x","z","y",1,-1,n,s,-a,c,d,3),A("x","y","z",1,-1,n,a,s,c,f,4),A("x","y","z",-1,-1,n,a,-s,c,f,5),this.setIndex(p),this.setAttribute("position",new oi(v,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(g,2));function A(N,S,x,O,z,D,j,F,I,B,U){const C=D/I,G=j/B,le=D/2,oe=j/2,ve=F/2,he=I+1,q=B+1;let ae=0,Q=0;const xe=new te;for(let Se=0;Se<q;Se++){const Fe=Se*G-oe;for(let et=0;et<he;et++){const ht=et*C-le;xe[N]=ht*O,xe[S]=Fe*z,xe[x]=ve,v.push(xe.x,xe.y,xe.z),xe[N]=0,xe[S]=0,xe[x]=F>0?1:-1,_.push(xe.x,xe.y,xe.z),g.push(et/I),g.push(1-Se/B),ae+=1}}for(let Se=0;Se<B;Se++)for(let Fe=0;Fe<I;Fe++){const et=y+Fe+he*Se,ht=y+Fe+he*(Se+1),R=y+(Fe+1)+he*(Se+1),Z=y+(Fe+1)+he*Se;p.push(et,ht,Z),p.push(ht,R,Z),Q+=6}h.addGroup(M,Q,U),M+=Q,y+=ae}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new gl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function ro(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const c=o[a][s];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=c.clone():Array.isArray(c)?n[a][s]=c.slice():n[a][s]=c}}return n}function Gn(o){const n={};for(let a=0;a<o.length;a++){const s=ro(o[a]);for(const c in s)n[c]=s[c]}return n}function qE(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function wx(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:Nt.workingColorSpace}const YE={clone:ro,merge:Gn};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends oo{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=ro(n.uniforms),this.uniformsGroups=qE(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?a.uniforms[c]={type:"t",value:d.toJSON(n).uuid}:d&&d.isColor?a.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[c]={type:"m4",value:d.toArray()}:a.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class Nx extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ya}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new te,T_=new Lt,A_=new Lt;class xi extends Nx{constructor(n=50,a=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=Ap*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(lh*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return Ap*2*Math.atan(Math.tan(lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ar.x,ar.y).multiplyScalar(-n/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ar.x,ar.y).multiplyScalar(-n/ar.z)}getViewSize(n,a){return this.getViewBounds(n,T_,A_),a.subVectors(A_,T_)}setViewOffset(n,a,s,c,f,d){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(lh*.5*this.fov)/this.zoom,s=2*a,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,v=d.fullHeight;f+=d.offsetX*c/p,a-=d.offsetY*s/v,c*=d.width/p,s*=d.height/v}const h=this.filmOffset;h!==0&&(f+=n*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,a,a-s,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const qs=-90,Ys=1;class KE extends kn{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new xi(qs,Ys,n,a);c.layers=this.layers,this.add(c);const f=new xi(qs,Ys,n,a);f.layers=this.layers,this.add(f);const d=new xi(qs,Ys,n,a);d.layers=this.layers,this.add(d);const h=new xi(qs,Ys,n,a);h.layers=this.layers,this.add(h);const p=new xi(qs,Ys,n,a);p.layers=this.layers,this.add(p);const v=new xi(qs,Ys,n,a);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,c,f,d,h,p]=a;for(const v of a)this.remove(v);if(n===ya)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(n===Su)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const v of a)this.add(v),v.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,v,_]=this.children,g=n.getRenderTarget(),y=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),A=n.xr.enabled;n.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,c),n.render(a,f),n.setRenderTarget(s,1,c),n.render(a,d),n.setRenderTarget(s,2,c),n.render(a,h),n.setRenderTarget(s,3,c),n.render(a,p),n.setRenderTarget(s,4,c),n.render(a,v),s.texture.generateMipmaps=N,n.setRenderTarget(s,5,c),n.render(a,_),n.setRenderTarget(g,y,M),n.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Dx extends Vn{constructor(n,a,s,c,f,d,h,p,v,_){n=n!==void 0?n:[],a=a!==void 0?a:eo,super(n,a,s,c,f,d,h,p,v,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class QE extends Yr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},c=[s,s,s,s,s,s];this.texture=new Dx(c,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:Yi}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new gl(5,5,5),f=new cr({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:sr});f.uniforms.tEquirect.value=a;const d=new Sa(c,f),h=a.minFilter;return a.minFilter===Xr&&(a.minFilter=Yi),new KE(1,10,this).update(n,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(n,a,s,c){const f=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(a,s,c);n.setRenderTarget(f)}}class au extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JE={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new au,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new au,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new au,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let c=null,f=null,d=null;const h=this._targetRay,p=this._grip,v=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(v&&n.hand){d=!0;for(const N of n.hand.values()){const S=a.getJointPose(N,s),x=this._getHandJoint(v,N);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=v.joints["index-finger-tip"],g=v.joints["thumb-tip"],y=_.position.distanceTo(g.position),M=.02,A=.005;v.inputState.pinching&&y>M+A?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!v.inputState.pinching&&y<=M-A&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else p!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(c=a.getPose(n.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(JE)))}return h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),v!==null&&(v.visible=d!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new au;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class Fp{constructor(n,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(n),this.density=a}clone(){return new Fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $E extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const Nh=new te,e1=new te,t1=new ut;class Hr{constructor(n=new te(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,c){return this.normal.set(n,a,s),this.constant=c,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const c=Nh.subVectors(s,a).cross(e1.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(c,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Nh),c=this.normal.dot(s);if(c===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||t1.getNormalMatrix(n),c=this.coplanarPoint(Nh).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new ml,ru=new te;class Ux{constructor(n=new Hr,a=new Hr,s=new Hr,c=new Hr,f=new Hr,d=new Hr){this.planes=[n,a,s,c,f,d]}set(n,a,s,c,f,d){const h=this.planes;return h[0].copy(n),h[1].copy(a),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=ya){const s=this.planes,c=n.elements,f=c[0],d=c[1],h=c[2],p=c[3],v=c[4],_=c[5],g=c[6],y=c[7],M=c[8],A=c[9],N=c[10],S=c[11],x=c[12],O=c[13],z=c[14],D=c[15];if(s[0].setComponents(p-f,y-v,S-M,D-x).normalize(),s[1].setComponents(p+f,y+v,S+M,D+x).normalize(),s[2].setComponents(p+d,y+_,S+A,D+O).normalize(),s[3].setComponents(p-d,y-_,S-A,D-O).normalize(),s[4].setComponents(p-h,y-g,S-N,D-z).normalize(),a===ya)s[5].setComponents(p+h,y+g,S+N,D+z).normalize();else if(a===Su)s[5].setComponents(h,g,N,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Pr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(n){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(n.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(n){const a=this.planes,s=n.center,c=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const c=a[s];if(ru.x=c.normal.x>0?n.max.x:n.min.x,ru.y=c.normal.y>0?n.max.y:n.min.y,ru.z=c.normal.z>0?n.max.z:n.min.z,c.distanceToPoint(ru)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _u extends oo{constructor(n){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.linewidth=n.linewidth,this.linecap=n.linecap,this.linejoin=n.linejoin,this.fog=n.fog,this}}const Eu=new te,bu=new te,R_=new tn,ll=new Bp,su=new ml,Dh=new te,C_=new te;class n1 extends kn{constructor(n=new Si,a=new _u){super(),this.isLine=!0,this.type="Line",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}computeLineDistances(){const n=this.geometry;if(n.index===null){const a=n.attributes.position,s=[0];for(let c=1,f=a.count;c<f;c++)Eu.fromBufferAttribute(a,c-1),bu.fromBufferAttribute(a,c),s[c]=s[c-1],s[c]+=Eu.distanceTo(bu);n.setAttribute("lineDistance",new oi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(n,a){const s=this.geometry,c=this.matrixWorld,f=n.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),su.copy(s.boundingSphere),su.applyMatrix4(c),su.radius+=f,n.ray.intersectsSphere(su)===!1)return;R_.copy(c).invert(),ll.copy(n.ray).applyMatrix4(R_);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,v=this.isLineSegments?2:1,_=s.index,y=s.attributes.position;if(_!==null){const M=Math.max(0,d.start),A=Math.min(_.count,d.start+d.count);for(let N=M,S=A-1;N<S;N+=v){const x=_.getX(N),O=_.getX(N+1),z=ou(this,n,ll,p,x,O,N);z&&a.push(z)}if(this.isLineLoop){const N=_.getX(A-1),S=_.getX(M),x=ou(this,n,ll,p,N,S,A-1);x&&a.push(x)}}else{const M=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let N=M,S=A-1;N<S;N+=v){const x=ou(this,n,ll,p,N,N+1,N);x&&a.push(x)}if(this.isLineLoop){const N=ou(this,n,ll,p,A-1,M,A-1);N&&a.push(N)}}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function ou(o,n,a,s,c,f,d){const h=o.geometry.attributes.position;if(Eu.fromBufferAttribute(h,c),bu.fromBufferAttribute(h,f),a.distanceSqToSegment(Eu,bu,Dh,C_)>s)return;Dh.applyMatrix4(o.matrixWorld);const v=n.ray.origin.distanceTo(Dh);if(!(v<n.near||v>n.far))return{distance:v,point:C_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const w_=new te,N_=new te;class Uh extends n1{constructor(n,a){super(n,a),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const n=this.geometry;if(n.index===null){const a=n.attributes.position,s=[];for(let c=0,f=a.count;c<f;c+=2)w_.fromBufferAttribute(a,c),N_.fromBufferAttribute(a,c+1),s[c]=c===0?0:s[c-1],s[c+1]=s[c]+w_.distanceTo(N_);n.setAttribute("lineDistance",new oi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lx extends oo{constructor(n){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const D_=new tn,Rp=new Bp,lu=new ml,cu=new te;class i1 extends kn{constructor(n=new Si,a=new Lx){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}raycast(n,a){const s=this.geometry,c=this.matrixWorld,f=n.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),lu.copy(s.boundingSphere),lu.applyMatrix4(c),lu.radius+=f,n.ray.intersectsSphere(lu)===!1)return;D_.copy(c).invert(),Rp.copy(n.ray).applyMatrix4(D_);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,v=s.index,g=s.attributes.position;if(v!==null){const y=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let A=y,N=M;A<N;A++){const S=v.getX(A);cu.fromBufferAttribute(g,S),U_(cu,S,p,c,n,a,this)}}else{const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let A=y,N=M;A<N;A++)cu.fromBufferAttribute(g,A),U_(cu,A,p,c,n,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function U_(o,n,a,s,c,f,d){const h=Rp.distanceSqToPoint(o);if(h<a){const p=new te;Rp.closestPointToPoint(o,p),p.applyMatrix4(s);const v=c.ray.origin.distanceTo(p);if(v<c.near||v>c.far)return;f.push({distance:v,distanceToRay:Math.sqrt(h),point:p,index:n,face:null,faceIndex:null,barycoord:null,object:d})}}class a1 extends Vn{constructor(n,a,s,c,f,d,h,p,v){super(n,a,s,c,f,d,h,p,v),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ox extends Vn{constructor(n,a,s,c,f,d,h,p,v,_=Qs){if(_!==Qs&&_!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Qs&&(s=qr),s===void 0&&_===io&&(s=no),super(null,c,f,d,h,p,_,s,v),this.isDepthTexture=!0,this.image={width:n,height:a},this.magFilter=h!==void 0?h:Li,this.minFilter=p!==void 0?p:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Ip(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Hp extends Si{constructor(n=[],a=[],s=1,c=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:n,indices:a,radius:s,detail:c};const f=[],d=[];h(c),v(s),_(),this.setAttribute("position",new oi(f,3)),this.setAttribute("normal",new oi(f.slice(),3)),this.setAttribute("uv",new oi(d,2)),c===0?this.computeVertexNormals():this.normalizeNormals();function h(O){const z=new te,D=new te,j=new te;for(let F=0;F<a.length;F+=3)M(a[F+0],z),M(a[F+1],D),M(a[F+2],j),p(z,D,j,O)}function p(O,z,D,j){const F=j+1,I=[];for(let B=0;B<=F;B++){I[B]=[];const U=O.clone().lerp(D,B/F),C=z.clone().lerp(D,B/F),G=F-B;for(let le=0;le<=G;le++)le===0&&B===F?I[B][le]=U:I[B][le]=U.clone().lerp(C,le/G)}for(let B=0;B<F;B++)for(let U=0;U<2*(F-B)-1;U++){const C=Math.floor(U/2);U%2===0?(y(I[B][C+1]),y(I[B+1][C]),y(I[B][C])):(y(I[B][C+1]),y(I[B+1][C+1]),y(I[B+1][C]))}}function v(O){const z=new te;for(let D=0;D<f.length;D+=3)z.x=f[D+0],z.y=f[D+1],z.z=f[D+2],z.normalize().multiplyScalar(O),f[D+0]=z.x,f[D+1]=z.y,f[D+2]=z.z}function _(){const O=new te;for(let z=0;z<f.length;z+=3){O.x=f[z+0],O.y=f[z+1],O.z=f[z+2];const D=S(O)/2/Math.PI+.5,j=x(O)/Math.PI+.5;d.push(D,1-j)}A(),g()}function g(){for(let O=0;O<d.length;O+=6){const z=d[O+0],D=d[O+2],j=d[O+4],F=Math.max(z,D,j),I=Math.min(z,D,j);F>.9&&I<.1&&(z<.2&&(d[O+0]+=1),D<.2&&(d[O+2]+=1),j<.2&&(d[O+4]+=1))}}function y(O){f.push(O.x,O.y,O.z)}function M(O,z){const D=O*3;z.x=n[D+0],z.y=n[D+1],z.z=n[D+2]}function A(){const O=new te,z=new te,D=new te,j=new te,F=new Lt,I=new Lt,B=new Lt;for(let U=0,C=0;U<f.length;U+=9,C+=6){O.set(f[U+0],f[U+1],f[U+2]),z.set(f[U+3],f[U+4],f[U+5]),D.set(f[U+6],f[U+7],f[U+8]),F.set(d[C+0],d[C+1]),I.set(d[C+2],d[C+3]),B.set(d[C+4],d[C+5]),j.copy(O).add(z).add(D).divideScalar(3);const G=S(j);N(F,C+0,O,G),N(I,C+2,z,G),N(B,C+4,D,G)}}function N(O,z,D,j){j<0&&O.x===1&&(d[z]=O.x-1),D.x===0&&D.z===0&&(d[z]=j/2/Math.PI+.5)}function S(O){return Math.atan2(O.z,-O.x)}function x(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Hp(n.vertices,n.indices,n.radius,n.details)}}class Tu extends Hp{constructor(n=1,a=0){const s=(1+Math.sqrt(5))/2,c=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(c,f,n,a),this.type="IcosahedronGeometry",this.parameters={radius:n,detail:a}}static fromJSON(n){return new Tu(n.radius,n.detail)}}class vl extends Si{constructor(n=1,a=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:c};const f=n/2,d=a/2,h=Math.floor(s),p=Math.floor(c),v=h+1,_=p+1,g=n/h,y=a/p,M=[],A=[],N=[],S=[];for(let x=0;x<_;x++){const O=x*y-d;for(let z=0;z<v;z++){const D=z*g-f;A.push(D,-O,0),N.push(0,0,1),S.push(z/h),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<h;O++){const z=O+v*x,D=O+v*(x+1),j=O+1+v*(x+1),F=O+1+v*x;M.push(z,D,F),M.push(D,j,F)}this.setIndex(M),this.setAttribute("position",new oi(A,3)),this.setAttribute("normal",new oi(N,3)),this.setAttribute("uv",new oi(S,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new vl(n.width,n.height,n.widthSegments,n.heightSegments)}}class Lh extends Si{constructor(n=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:n},n!==null){const a=[],s=new Set,c=new te,f=new te;if(n.index!==null){const d=n.attributes.position,h=n.index;let p=n.groups;p.length===0&&(p=[{start:0,count:h.count,materialIndex:0}]);for(let v=0,_=p.length;v<_;++v){const g=p[v],y=g.start,M=g.count;for(let A=y,N=y+M;A<N;A+=3)for(let S=0;S<3;S++){const x=h.getX(A+S),O=h.getX(A+(S+1)%3);c.fromBufferAttribute(d,x),f.fromBufferAttribute(d,O),L_(c,f,s)===!0&&(a.push(c.x,c.y,c.z),a.push(f.x,f.y,f.z))}}}else{const d=n.attributes.position;for(let h=0,p=d.count/3;h<p;h++)for(let v=0;v<3;v++){const _=3*h+v,g=3*h+(v+1)%3;c.fromBufferAttribute(d,_),f.fromBufferAttribute(d,g),L_(c,f,s)===!0&&(a.push(c.x,c.y,c.z),a.push(f.x,f.y,f.z))}}this.setAttribute("position",new oi(a,3))}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}}function L_(o,n,a){const s=`${o.x},${o.y},${o.z}-${n.x},${n.y},${n.z}`,c=`${n.x},${n.y},${n.z}-${o.x},${o.y},${o.z}`;return a.has(s)===!0||a.has(c)===!0?!1:(a.add(s),a.add(c),!0)}class r1 extends oo{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class s1 extends oo{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class o1 extends Nx{constructor(n=-1,a=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-n,d=s+n,h=c+a,p=c-a;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,d=f+v*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class l1 extends xi{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n,this.index=0}}class c1{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=O_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=O_();n=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=n}return n}}function O_(){return performance.now()}function z_(o,n,a,s){const c=u1(s);switch(a){case px:return o*n;case gx:return o*n;case vx:return o*n*2;case _x:return o*n/c.components*c.byteLength;case Op:return o*n/c.components*c.byteLength;case xx:return o*n*2/c.components*c.byteLength;case zp:return o*n*2/c.components*c.byteLength;case mx:return o*n*3/c.components*c.byteLength;case Ui:return o*n*4/c.components*c.byteLength;case Pp:return o*n*4/c.components*c.byteLength;case hu:case pu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case mu:case gu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case tp:case ip:return Math.max(o,16)*Math.max(n,8)/4;case ep:case np:return Math.max(o,8)*Math.max(n,8)/2;case ap:case rp:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case sp:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case op:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case lp:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case cp:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case up:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case fp:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case dp:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case hp:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case pp:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case mp:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case gp:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case vp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case _p:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case xp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case yp:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case vu:case Sp:case Mp:return Math.ceil(o/4)*Math.ceil(n/4)*16;case yx:case Ep:return Math.ceil(o/4)*Math.ceil(n/4)*8;case bp:case Tp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function u1(o){switch(o){case Ea:case fx:return{byteLength:1,components:1};case ul:case dx:case fl:return{byteLength:2,components:1};case Up:case Lp:return{byteLength:2,components:4};case qr:case Dp:case xa:return{byteLength:4,components:1};case hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zx(){let o=null,n=!1,a=null,s=null;function c(f,d){a(f,d),s=o.requestAnimationFrame(c)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(c),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function f1(o){const n=new WeakMap;function a(h,p){const v=h.array,_=h.usage,g=v.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,v,_),h.onUploadCallback();let M;if(v instanceof Float32Array)M=o.FLOAT;else if(v instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)M=o.SHORT;else if(v instanceof Uint32Array)M=o.UNSIGNED_INT;else if(v instanceof Int32Array)M=o.INT;else if(v instanceof Int8Array)M=o.BYTE;else if(v instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:y,type:M,bytesPerElement:v.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,v){const _=p.array,g=p.updateRanges;if(o.bindBuffer(v,h),g.length===0)o.bufferSubData(v,0,_);else{g.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<g.length;M++){const A=g[y],N=g[M];N.start<=A.start+A.count+1?A.count=Math.max(A.count,N.start+N.count-A.start):(++y,g[y]=N)}g.length=y+1;for(let M=0,A=g.length;M<A;M++){const N=g[M];o.bufferSubData(v,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(o.deleteBuffer(p.buffer),n.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=n.get(h);(!_||_.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const v=n.get(h);if(v===void 0)n.set(h,a(h,p));else if(v.version<h.version){if(v.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,h,p),v.version=h.version}}return{get:c,remove:f,update:d}}var d1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",k1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ib=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ab=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ub=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,db=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_T=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:d1,alphahash_pars_fragment:h1,alphamap_fragment:p1,alphamap_pars_fragment:m1,alphatest_fragment:g1,alphatest_pars_fragment:v1,aomap_fragment:_1,aomap_pars_fragment:x1,batching_pars_vertex:y1,batching_vertex:S1,begin_vertex:M1,beginnormal_vertex:E1,bsdfs:b1,iridescence_fragment:T1,bumpmap_pars_fragment:A1,clipping_planes_fragment:R1,clipping_planes_pars_fragment:C1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:N1,color_fragment:D1,color_pars_fragment:U1,color_pars_vertex:L1,color_vertex:O1,common:z1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:I1,displacementmap_pars_vertex:B1,displacementmap_vertex:F1,emissivemap_fragment:H1,emissivemap_pars_fragment:G1,colorspace_fragment:V1,colorspace_pars_fragment:k1,envmap_fragment:j1,envmap_common_pars_fragment:X1,envmap_pars_fragment:q1,envmap_pars_vertex:Y1,envmap_physical_pars_fragment:ab,envmap_vertex:W1,fog_vertex:Z1,fog_pars_vertex:K1,fog_fragment:Q1,fog_pars_fragment:J1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:eb,lights_lambert_fragment:tb,lights_lambert_pars_fragment:nb,lights_pars_begin:ib,lights_toon_fragment:rb,lights_toon_pars_fragment:sb,lights_phong_fragment:ob,lights_phong_pars_fragment:lb,lights_physical_fragment:cb,lights_physical_pars_fragment:ub,lights_fragment_begin:fb,lights_fragment_maps:db,lights_fragment_end:hb,logdepthbuf_fragment:pb,logdepthbuf_pars_fragment:mb,logdepthbuf_pars_vertex:gb,logdepthbuf_vertex:vb,map_fragment:_b,map_pars_fragment:xb,map_particle_fragment:yb,map_particle_pars_fragment:Sb,metalnessmap_fragment:Mb,metalnessmap_pars_fragment:Eb,morphinstance_vertex:bb,morphcolor_vertex:Tb,morphnormal_vertex:Ab,morphtarget_pars_vertex:Rb,morphtarget_vertex:Cb,normal_fragment_begin:wb,normal_fragment_maps:Nb,normal_pars_fragment:Db,normal_pars_vertex:Ub,normal_vertex:Lb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:zb,clearcoat_normal_fragment_maps:Pb,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Bb,opaque_fragment:Fb,packing:Hb,premultiplied_alpha_fragment:Gb,project_vertex:Vb,dithering_fragment:kb,dithering_pars_fragment:jb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:qb,shadowmap_pars_fragment:Yb,shadowmap_pars_vertex:Wb,shadowmap_vertex:Zb,shadowmask_pars_fragment:Kb,skinbase_vertex:Qb,skinning_pars_vertex:Jb,skinning_vertex:$b,skinnormal_vertex:eT,specularmap_fragment:tT,specularmap_pars_fragment:nT,tonemapping_fragment:iT,tonemapping_pars_fragment:aT,transmission_fragment:rT,transmission_pars_fragment:sT,uv_pars_fragment:oT,uv_pars_vertex:lT,uv_vertex:cT,worldpos_vertex:uT,background_vert:fT,background_frag:dT,backgroundCube_vert:hT,backgroundCube_frag:pT,cube_vert:mT,cube_frag:gT,depth_vert:vT,depth_frag:_T,distanceRGBA_vert:xT,distanceRGBA_frag:yT,equirect_vert:ST,equirect_frag:MT,linedashed_vert:ET,linedashed_frag:bT,meshbasic_vert:TT,meshbasic_frag:AT,meshlambert_vert:RT,meshlambert_frag:CT,meshmatcap_vert:wT,meshmatcap_frag:NT,meshnormal_vert:DT,meshnormal_frag:UT,meshphong_vert:LT,meshphong_frag:OT,meshphysical_vert:zT,meshphysical_frag:PT,meshtoon_vert:IT,meshtoon_frag:BT,points_vert:FT,points_frag:HT,shadow_vert:GT,shadow_frag:VT,sprite_vert:kT,sprite_frag:jT},Ue={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},qi={basic:{uniforms:Gn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Gn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Gn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Gn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Gn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Gn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Gn([Ue.points,Ue.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Gn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Gn([Ue.common,Ue.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Gn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Gn([Ue.sprite,Ue.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Gn([Ue.common,Ue.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Gn([Ue.lights,Ue.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};qi.physical={uniforms:Gn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const uu={r:0,b:0,g:0},Ir=new ba,XT=new tn;function qT(o,n,a,s,c,f,d){const h=new Rt(0);let p=f===!0?0:1,v,_,g=null,y=0,M=null;function A(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?a:n).get(D)),D}function N(z){let D=!1;const j=A(z);j===null?x(h,p):j&&j.isColor&&(x(j,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(z,D){const j=A(D);j&&(j.isCubeTexture||j.mapping===Au)?(_===void 0&&(_=new Sa(new gl(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:ro(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(_)),Ir.copy(D.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),_.material.uniforms.envMap.value=j,_.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Ir)),_.material.toneMapped=Nt.getTransfer(j.colorSpace)!==Ft,(g!==j||y!==j.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=j,y=j.version,M=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null)):j&&j.isTexture&&(v===void 0&&(v=new Sa(new vl(2,2),new cr({name:"BackgroundMaterial",uniforms:ro(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(v)),v.material.uniforms.t2D.value=j,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.toneMapped=Nt.getTransfer(j.colorSpace)!==Ft,j.matrixAutoUpdate===!0&&j.updateMatrix(),v.material.uniforms.uvTransform.value.copy(j.matrix),(g!==j||y!==j.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,g=j,y=j.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null))}function x(z,D){z.getRGB(uu,wx(o)),s.buffers.color.setClear(uu.r,uu.g,uu.b,D,d)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,D=1){h.set(z),p=D,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,x(h,p)},render:N,addToRenderList:S,dispose:O}}function YT(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=y(null);let f=c,d=!1;function h(C,G,le,oe,ve){let he=!1;const q=g(oe,le,G);f!==q&&(f=q,v(f.object)),he=M(C,oe,le,ve),he&&A(C,oe,le,ve),ve!==null&&n.update(ve,o.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,D(C,G,le,oe),ve!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(ve).buffer))}function p(){return o.createVertexArray()}function v(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,G,le){const oe=le.wireframe===!0;let ve=s[C.id];ve===void 0&&(ve={},s[C.id]=ve);let he=ve[G.id];he===void 0&&(he={},ve[G.id]=he);let q=he[oe];return q===void 0&&(q=y(p()),he[oe]=q),q}function y(C){const G=[],le=[],oe=[];for(let ve=0;ve<a;ve++)G[ve]=0,le[ve]=0,oe[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:oe,object:C,attributes:{},index:null}}function M(C,G,le,oe){const ve=f.attributes,he=G.attributes;let q=0;const ae=le.getAttributes();for(const Q in ae)if(ae[Q].location>=0){const Se=ve[Q];let Fe=he[Q];if(Fe===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Fe=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Fe=C.instanceColor)),Se===void 0||Se.attribute!==Fe||Fe&&Se.data!==Fe.data)return!0;q++}return f.attributesNum!==q||f.index!==oe}function A(C,G,le,oe){const ve={},he=G.attributes;let q=0;const ae=le.getAttributes();for(const Q in ae)if(ae[Q].location>=0){let Se=he[Q];Se===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor));const Fe={};Fe.attribute=Se,Se&&Se.data&&(Fe.data=Se.data),ve[Q]=Fe,q++}f.attributes=ve,f.attributesNum=q,f.index=oe}function N(){const C=f.newAttributes;for(let G=0,le=C.length;G<le;G++)C[G]=0}function S(C){x(C,0)}function x(C,G){const le=f.newAttributes,oe=f.enabledAttributes,ve=f.attributeDivisors;le[C]=1,oe[C]===0&&(o.enableVertexAttribArray(C),oe[C]=1),ve[C]!==G&&(o.vertexAttribDivisor(C,G),ve[C]=G)}function O(){const C=f.newAttributes,G=f.enabledAttributes;for(let le=0,oe=G.length;le<oe;le++)G[le]!==C[le]&&(o.disableVertexAttribArray(le),G[le]=0)}function z(C,G,le,oe,ve,he,q){q===!0?o.vertexAttribIPointer(C,G,le,ve,he):o.vertexAttribPointer(C,G,le,oe,ve,he)}function D(C,G,le,oe){N();const ve=oe.attributes,he=le.getAttributes(),q=G.defaultAttributeValues;for(const ae in he){const Q=he[ae];if(Q.location>=0){let xe=ve[ae];if(xe===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor)),xe!==void 0){const Se=xe.normalized,Fe=xe.itemSize,et=n.get(xe);if(et===void 0)continue;const ht=et.buffer,R=et.type,Z=et.bytesPerElement,pe=R===o.INT||R===o.UNSIGNED_INT||xe.gpuType===Dp;if(xe.isInterleavedBufferAttribute){const ue=xe.data,Te=ue.stride,ke=xe.offset;if(ue.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Q.locationSize;Ne++)x(Q.location+Ne,ue.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ne=0;Ne<Q.locationSize;Ne++)S(Q.location+Ne);o.bindBuffer(o.ARRAY_BUFFER,ht);for(let Ne=0;Ne<Q.locationSize;Ne++)z(Q.location+Ne,Fe/Q.locationSize,R,Se,Te*Z,(ke+Fe/Q.locationSize*Ne)*Z,pe)}else{if(xe.isInstancedBufferAttribute){for(let ue=0;ue<Q.locationSize;ue++)x(Q.location+ue,xe.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ue=0;ue<Q.locationSize;ue++)S(Q.location+ue);o.bindBuffer(o.ARRAY_BUFFER,ht);for(let ue=0;ue<Q.locationSize;ue++)z(Q.location+ue,Fe/Q.locationSize,R,Se,Fe*Z,Fe/Q.locationSize*ue*Z,pe)}}else if(q!==void 0){const Se=q[ae];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(Q.location,Se);break;case 3:o.vertexAttrib3fv(Q.location,Se);break;case 4:o.vertexAttrib4fv(Q.location,Se);break;default:o.vertexAttrib1fv(Q.location,Se)}}}}O()}function j(){B();for(const C in s){const G=s[C];for(const le in G){const oe=G[le];for(const ve in oe)_(oe[ve].object),delete oe[ve];delete G[le]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const le in G){const oe=G[le];for(const ve in oe)_(oe[ve].object),delete oe[ve];delete G[le]}delete s[C.id]}function I(C){for(const G in s){const le=s[G];if(le[C.id]===void 0)continue;const oe=le[C.id];for(const ve in oe)_(oe[ve].object),delete oe[ve];delete le[C.id]}}function B(){U(),d=!0,f!==c&&(f=c,v(f.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:U,dispose:j,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:N,enableAttribute:S,disableUnusedAttributes:O}}function WT(o,n,a){let s;function c(v){s=v}function f(v,_){o.drawArrays(s,v,_),a.update(_,s,1)}function d(v,_,g){g!==0&&(o.drawArraysInstanced(s,v,_,g),a.update(_,s,g))}function h(v,_,g){if(g===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,v,0,_,0,g);let M=0;for(let A=0;A<g;A++)M+=_[A];a.update(M,s,1)}function p(v,_,g,y){if(g===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<v.length;A++)d(v[A],_[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(s,v,0,_,0,y,0,g);let A=0;for(let N=0;N<g;N++)A+=_[N]*y[N];a.update(A,s,1)}}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function ZT(o,n,a,s){let c;function f(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");c=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(I){return!(I!==Ui&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const B=I===fl&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==Ea&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==xa&&!B)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=a.precision!==void 0?a.precision:"highp";const _=p(v);_!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",_,"instead."),v=_);const g=a.logarithmicDepthBuffer===!0,y=a.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=A>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:v,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:N,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:O,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:j,maxSamples:F}}function KT(o){const n=this;let a=null,s=0,c=!1,f=!1;const d=new Hr,h=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||s!==0||c;return c=y,s=g.length,M},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,y){a=_(g,y,0)},this.setState=function(g,y,M){const A=g.clippingPlanes,N=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!c||A===null||A.length===0||f&&!S)f?_(null):v();else{const O=f?0:s,z=O*4;let D=x.clippingState||null;p.value=D,D=_(A,y,z,M);for(let j=0;j!==z;++j)D[j]=a[j];x.clippingState=D,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=O}};function v(){p.value!==a&&(p.value=a,p.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function _(g,y,M,A){const N=g!==null?g.length:0;let S=null;if(N!==0){if(S=p.value,A!==!0||S===null){const x=M+N*4,O=y.matrixWorldInverse;h.getNormalMatrix(O),(S===null||S.length<x)&&(S=new Float32Array(x));for(let z=0,D=M;z!==N;++z,D+=4)d.copy(g[z]).applyMatrix4(O,h),d.normal.toArray(S,D),S[D+3]=d.constant}p.value=S,p.needsUpdate=!0}return n.numPlanes=N,n.numIntersection=0,S}}function QT(o){let n=new WeakMap;function a(d,h){return h===Kh?d.mapping=eo:h===Qh&&(d.mapping=to),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Kh||h===Qh)if(n.has(d)){const p=n.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new QE(p.height);return v.fromEquirectangularTexture(o,d),n.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=n.get(h);p!==void 0&&(n.delete(h),p.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Zs=4,P_=[.125,.215,.35,.446,.526,.582],kr=20,Oh=new o1,I_=new Rt;let zh=null,Ph=0,Ih=0,Bh=!1;const Gr=(1+Math.sqrt(5))/2,Ws=1/Gr,B_=[new te(-Gr,Ws,0),new te(Gr,Ws,0),new te(-Ws,0,Gr),new te(Ws,0,Gr),new te(0,Gr,-Ws),new te(0,Gr,Ws),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],JT=new te;class F_{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,c=100,f={}){const{size:d=256,position:h=JT}=f;zh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(n,s,c,p,h),a>0&&this._blur(p,0,0,a),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(zh,Ph,Ih),this._renderer.xr.enabled=Bh,n.scissorTest=!1,fu(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===eo||n.mapping===to?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),zh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:fl,format:Ui,colorSpace:ao,depthBuffer:!1},c=H_(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$T(f)),this._blurMaterial=e2(f,n,a)}return c}_compileMaterial(n){const a=new Sa(this._lodPlanes[0],n);this._renderer.compile(a,Oh)}_sceneToCubeUV(n,a,s,c,f){const p=new xi(90,1,a,s),v=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(I_),g.toneMapping=or,g.autoClear=!1;const A=new Ax({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),N=new Sa(new gl,A);let S=!1;const x=n.background;x?x.isColor&&(A.color.copy(x),n.background=null,S=!0):(A.color.copy(I_),S=!0);for(let O=0;O<6;O++){const z=O%3;z===0?(p.up.set(0,v[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+_[O],f.y,f.z)):z===1?(p.up.set(0,0,v[O]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+_[O],f.z)):(p.up.set(0,v[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+_[O]));const D=this._cubeSize;fu(c,z*D,O>2?D:0,D,D),g.setRenderTarget(c),S&&g.render(N,p),g.render(n,p)}N.geometry.dispose(),N.material.dispose(),g.toneMapping=M,g.autoClear=y,n.background=x}_textureToCubeUV(n,a){const s=this._renderer,c=n.mapping===eo||n.mapping===to;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const f=c?this._cubemapMaterial:this._equirectMaterial,d=new Sa(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=n;const p=this._cubeSize;fu(a,0,0,3*p,2*p),s.setRenderTarget(a),s.render(d,Oh)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=B_[(c-f-1)%B_.length];this._blur(n,f-1,f,d,h)}a.autoClear=s}_blur(n,a,s,c,f){const d=this._pingPongRenderTarget;this._halfBlur(n,d,a,s,c,"latitudinal",f),this._halfBlur(d,n,s,s,c,"longitudinal",f)}_halfBlur(n,a,s,c,f,d,h){const p=this._renderer,v=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Sa(this._lodPlanes[c],v),y=v.uniforms,M=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*kr-1),N=f/A,S=isFinite(f)?1+Math.floor(_*N):kr;S>kr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${kr}`);const x=[];let O=0;for(let I=0;I<kr;++I){const B=I/N,U=Math.exp(-B*B/2);x.push(U),I===0?O+=U:I<S&&(O+=2*U)}for(let I=0;I<x.length;I++)x[I]=x[I]/O;y.envMap.value=n.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:z}=this;y.dTheta.value=A,y.mipInt.value=z-s;const D=this._sizeLods[c],j=3*D*(c>z-Zs?c-z+Zs:0),F=4*(this._cubeSize-D);fu(a,j,F,3*D,2*D),p.setRenderTarget(a),p.render(g,Oh)}}function $T(o){const n=[],a=[],s=[];let c=o;const f=o-Zs+1+P_.length;for(let d=0;d<f;d++){const h=Math.pow(2,c);a.push(h);let p=1/h;d>o-Zs?p=P_[d-o+Zs-1]:d===0&&(p=0),s.push(p);const v=1/(h-2),_=-v,g=1+v,y=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,A=6,N=3,S=2,x=1,O=new Float32Array(N*A*M),z=new Float32Array(S*A*M),D=new Float32Array(x*A*M);for(let F=0;F<M;F++){const I=F%3*2/3-1,B=F>2?0:-1,U=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];O.set(U,N*A*F),z.set(y,S*A*F);const C=[F,F,F,F,F,F];D.set(C,x*A*F)}const j=new Si;j.setAttribute("position",new yi(O,N)),j.setAttribute("uv",new yi(z,S)),j.setAttribute("faceIndex",new yi(D,x)),n.push(j),c>Zs&&c--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function H_(o,n,a){const s=new Yr(o,n,a);return s.texture.mapping=Au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fu(o,n,a,s,c){o.viewport.set(n,a,s,c),o.scissor.set(n,a,s,c)}function e2(o,n,a){const s=new Float32Array(kr),c=new te(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function G_(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function V_(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Gp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t2(o){let n=new WeakMap,a=null;function s(h){if(h&&h.isTexture){const p=h.mapping,v=p===Kh||p===Qh,_=p===eo||p===to;if(v||_){let g=n.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return a===null&&(a=new F_(o)),g=v?a.fromEquirectangular(h,g):a.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return v&&M&&M.height>0||_&&M&&c(M)?(a===null&&(a=new F_(o)),g=v?a.fromEquirectangular(h):a.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function c(h){let p=0;const v=6;for(let _=0;_<v;_++)h[_]!==void 0&&p++;return p===v}function f(h){const p=h.target;p.removeEventListener("dispose",f);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:d}}function n2(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let c;switch(s){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(s)}return n[s]=c,c}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const c=a(s);return c===null&&Fr("THREE.WebGLRenderer: "+s+" extension not supported."),c}}}function i2(o,n,a,s){const c={},f=new WeakMap;function d(g){const y=g.target;y.index!==null&&n.remove(y.index);for(const A in y.attributes)n.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete c[y.id];const M=f.get(y);M&&(n.remove(M),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function h(g,y){return c[y.id]===!0||(y.addEventListener("dispose",d),c[y.id]=!0,a.memory.geometries++),y}function p(g){const y=g.attributes;for(const M in y)n.update(y[M],o.ARRAY_BUFFER)}function v(g){const y=[],M=g.index,A=g.attributes.position;let N=0;if(M!==null){const O=M.array;N=M.version;for(let z=0,D=O.length;z<D;z+=3){const j=O[z+0],F=O[z+1],I=O[z+2];y.push(j,F,F,I,I,j)}}else if(A!==void 0){const O=A.array;N=A.version;for(let z=0,D=O.length/3-1;z<D;z+=3){const j=z+0,F=z+1,I=z+2;y.push(j,F,F,I,I,j)}}else return;const S=new(Mx(y)?Cx:Rx)(y,1);S.version=N;const x=f.get(g);x&&n.remove(x),f.set(g,S)}function _(g){const y=f.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&v(g)}else v(g);return f.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function a2(o,n,a){let s;function c(y){s=y}let f,d;function h(y){f=y.type,d=y.bytesPerElement}function p(y,M){o.drawElements(s,M,f,y*d),a.update(M,s,1)}function v(y,M,A){A!==0&&(o.drawElementsInstanced(s,M,f,y*d,A),a.update(M,s,A))}function _(y,M,A){if(A===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,y,0,A);let S=0;for(let x=0;x<A;x++)S+=M[x];a.update(S,s,1)}function g(y,M,A,N){if(A===0)return;const S=n.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)v(y[x]/d,M[x],N[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,f,y,0,N,0,A);let x=0;for(let O=0;O<A;O++)x+=M[O]*N[O];a.update(x,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=v,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function r2(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:c,update:s}}function s2(o,n,a){const s=new WeakMap,c=new rn;function f(d,h,p){const v=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let y=s.get(h);if(y===void 0||y.count!==g){let C=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const A=h.morphAttributes.position!==void 0,N=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let D=0;A===!0&&(D=1),N===!0&&(D=2),S===!0&&(D=3);let j=h.attributes.position.count*D,F=1;j>n.maxTextureSize&&(F=Math.ceil(j/n.maxTextureSize),j=n.maxTextureSize);const I=new Float32Array(j*F*4*g),B=new Ex(I,j,F,g);B.type=xa,B.needsUpdate=!0;const U=D*4;for(let G=0;G<g;G++){const le=x[G],oe=O[G],ve=z[G],he=j*F*4*G;for(let q=0;q<le.count;q++){const ae=q*U;A===!0&&(c.fromBufferAttribute(le,q),I[he+ae+0]=c.x,I[he+ae+1]=c.y,I[he+ae+2]=c.z,I[he+ae+3]=0),N===!0&&(c.fromBufferAttribute(oe,q),I[he+ae+4]=c.x,I[he+ae+5]=c.y,I[he+ae+6]=c.z,I[he+ae+7]=0),S===!0&&(c.fromBufferAttribute(ve,q),I[he+ae+8]=c.x,I[he+ae+9]=c.y,I[he+ae+10]=c.z,I[he+ae+11]=ve.itemSize===4?c.w:1)}}y={count:g,texture:B,size:new Lt(j,F)},s.set(h,y),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let A=0;for(let S=0;S<v.length;S++)A+=v[S];const N=h.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",N),p.getUniforms().setValue(o,"morphTargetInfluences",v)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,a),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function o2(o,n,a,s){let c=new WeakMap;function f(p){const v=s.render.frame,_=p.geometry,g=n.get(p,_);if(c.get(g)!==v&&(n.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),c.get(p)!==v&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return g}function d(){c=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),a.remove(v.instanceMatrix),v.instanceColor!==null&&a.remove(v.instanceColor)}return{update:f,dispose:d}}const Px=new Vn,k_=new Ox(1,1),Ix=new Ex,Bx=new OE,Fx=new Dx,j_=[],X_=[],q_=new Float32Array(16),Y_=new Float32Array(9),W_=new Float32Array(4);function lo(o,n,a){const s=o[0];if(s<=0||s>0)return o;const c=n*a;let f=j_[c];if(f===void 0&&(f=new Float32Array(c),j_[c]=f),n!==0){s.toArray(f,0);for(let d=1,h=0;d!==n;++d)h+=a,o[d].toArray(f,h)}return f}function mn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function gn(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function Ru(o,n){let a=X_[n];a===void 0&&(a=new Int32Array(n),X_[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function l2(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function c2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2fv(this.addr,n),gn(a,n)}}function u2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(mn(a,n))return;o.uniform3fv(this.addr,n),gn(a,n)}}function f2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4fv(this.addr,n),gn(a,n)}}function d2(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;W_.set(s),o.uniformMatrix2fv(this.addr,!1,W_),gn(a,s)}}function h2(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;Y_.set(s),o.uniformMatrix3fv(this.addr,!1,Y_),gn(a,s)}}function p2(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;q_.set(s),o.uniformMatrix4fv(this.addr,!1,q_),gn(a,s)}}function m2(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function g2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2iv(this.addr,n),gn(a,n)}}function v2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(mn(a,n))return;o.uniform3iv(this.addr,n),gn(a,n)}}function _2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4iv(this.addr,n),gn(a,n)}}function x2(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function y2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2uiv(this.addr,n),gn(a,n)}}function S2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(mn(a,n))return;o.uniform3uiv(this.addr,n),gn(a,n)}}function M2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4uiv(this.addr,n),gn(a,n)}}function E2(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(k_.compareFunction=Sx,f=k_):f=Px,a.setTexture2D(n||f,c)}function b2(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture3D(n||Bx,c)}function T2(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTextureCube(n||Fx,c)}function A2(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture2DArray(n||Ix,c)}function R2(o){switch(o){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return f2;case 35674:return d2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return v2;case 35669:case 35673:return _2;case 5125:return x2;case 36294:return y2;case 36295:return S2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return A2}}function C2(o,n){o.uniform1fv(this.addr,n)}function w2(o,n){const a=lo(n,this.size,2);o.uniform2fv(this.addr,a)}function N2(o,n){const a=lo(n,this.size,3);o.uniform3fv(this.addr,a)}function D2(o,n){const a=lo(n,this.size,4);o.uniform4fv(this.addr,a)}function U2(o,n){const a=lo(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function L2(o,n){const a=lo(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function O2(o,n){const a=lo(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function z2(o,n){o.uniform1iv(this.addr,n)}function P2(o,n){o.uniform2iv(this.addr,n)}function I2(o,n){o.uniform3iv(this.addr,n)}function B2(o,n){o.uniform4iv(this.addr,n)}function F2(o,n){o.uniform1uiv(this.addr,n)}function H2(o,n){o.uniform2uiv(this.addr,n)}function G2(o,n){o.uniform3uiv(this.addr,n)}function V2(o,n){o.uniform4uiv(this.addr,n)}function k2(o,n,a){const s=this.cache,c=n.length,f=Ru(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let d=0;d!==c;++d)a.setTexture2D(n[d]||Px,f[d])}function j2(o,n,a){const s=this.cache,c=n.length,f=Ru(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let d=0;d!==c;++d)a.setTexture3D(n[d]||Bx,f[d])}function X2(o,n,a){const s=this.cache,c=n.length,f=Ru(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let d=0;d!==c;++d)a.setTextureCube(n[d]||Fx,f[d])}function q2(o,n,a){const s=this.cache,c=n.length,f=Ru(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let d=0;d!==c;++d)a.setTexture2DArray(n[d]||Ix,f[d])}function Y2(o){switch(o){case 5126:return C2;case 35664:return w2;case 35665:return N2;case 35666:return D2;case 35674:return U2;case 35675:return L2;case 35676:return O2;case 5124:case 35670:return z2;case 35667:case 35671:return P2;case 35668:case 35672:return I2;case 35669:case 35673:return B2;case 5125:return F2;case 36294:return H2;case 36295:return G2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return q2}}class W2{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=R2(a.type)}}class Z2{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=Y2(a.type)}}class K2{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(n,a[h.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function Z_(o,n){o.seq.push(n),o.map[n.id]=n}function Q2(o,n,a){const s=o.name,c=s.length;for(Fh.lastIndex=0;;){const f=Fh.exec(s),d=Fh.lastIndex;let h=f[1];const p=f[2]==="]",v=f[3];if(p&&(h=h|0),v===void 0||v==="["&&d+2===c){Z_(a,v===void 0?new W2(h,o,n):new Z2(h,o,n));break}else{let g=a.map[h];g===void 0&&(g=new K2(h),Z_(a,g)),a=g}}}class xu{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const f=n.getActiveUniform(a,c),d=n.getUniformLocation(a,f.name);Q2(f,d,this)}}setValue(n,a,s,c){const f=this.map[a];f!==void 0&&f.setValue(n,s,c)}setOptional(n,a,s){const c=a[s];c!==void 0&&this.setValue(n,s,c)}static upload(n,a,s,c){for(let f=0,d=a.length;f!==d;++f){const h=a[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(n,p.value,c)}}static seqWithValue(n,a){const s=[];for(let c=0,f=n.length;c!==f;++c){const d=n[c];d.id in a&&s.push(d)}return s}}function K_(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const J2=37297;let $2=0;function eA(o,n){const a=o.split(`
`),s=[],c=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===n?">":" "} ${h}: ${a[d]}`)}return s.join(`
`)}const Q_=new ut;function tA(o){Nt._getMatrix(Q_,Nt.workingColorSpace,o);const n=`mat3( ${Q_.elements.map(a=>a.toFixed(4))} )`;switch(Nt.getTransfer(o)){case yu:return[n,"LinearTransferOETF"];case Ft:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function J_(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),c=o.getShaderInfoLog(n).trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return a.toUpperCase()+`

`+c+`

`+eA(o.getShaderSource(n),d)}else return c}function nA(o,n){const a=tA(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function iA(o,n){let a;switch(n){case rE:a="Linear";break;case sE:a="Reinhard";break;case oE:a="Cineon";break;case lE:a="ACESFilmic";break;case uE:a="AgX";break;case fE:a="Neutral";break;case cE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const du=new te;function aA(){Nt.getLuminanceCoefficients(du);const o=du.x.toFixed(4),n=du.y.toFixed(4),a=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function sA(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function oA(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(n,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(n,d),locationSize:h}}return a}function cl(o){return o!==""}function $_(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ex(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(o){return o.replace(lA,uA)}const cA=new Map;function uA(o,n){let a=ft[n];if(a===void 0){const s=cA.get(n);if(s!==void 0)a=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return Cp(a)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(o){return o.replace(fA,dA)}function dA(o,n,a,s){let c="";for(let f=parseInt(n);f<parseInt(a);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function nx(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function hA(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===lx?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===BM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===va&&(n="SHADOWMAP_TYPE_VSM"),n}function pA(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case eo:case to:n="ENVMAP_TYPE_CUBE";break;case Au:n="ENVMAP_TYPE_CUBE_UV";break}return n}function mA(o){let n="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case to:n="ENVMAP_MODE_REFRACTION";break}return n}function gA(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case cx:n="ENVMAP_BLENDING_MULTIPLY";break;case iE:n="ENVMAP_BLENDING_MIX";break;case aE:n="ENVMAP_BLENDING_ADD";break}return n}function vA(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function _A(o,n,a,s){const c=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const p=hA(a),v=pA(a),_=mA(a),g=gA(a),y=vA(a),M=rA(a),A=sA(f),N=c.createProgram();let S,x,O=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A].filter(cl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A].filter(cl).join(`
`),x.length>0&&(x+=`
`)):(S=[nx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),x=[nx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.envMap?"#define "+_:"",a.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==or?"#define TONE_MAPPING":"",a.toneMapping!==or?ft.tonemapping_pars_fragment:"",a.toneMapping!==or?iA("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,nA("linearToOutputTexel",a.outputColorSpace),aA(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(cl).join(`
`)),d=Cp(d),d=$_(d,a),d=ex(d,a),h=Cp(h),h=$_(h,a),h=ex(h,a),d=tx(d),h=tx(h),a.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",a.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=O+S+d,D=O+x+h,j=K_(c,c.VERTEX_SHADER,z),F=K_(c,c.FRAGMENT_SHADER,D);c.attachShader(N,j),c.attachShader(N,F),a.index0AttributeName!==void 0?c.bindAttribLocation(N,0,a.index0AttributeName):a.morphTargets===!0&&c.bindAttribLocation(N,0,"position"),c.linkProgram(N);function I(G){if(o.debug.checkShaderErrors){const le=c.getProgramInfoLog(N).trim(),oe=c.getShaderInfoLog(j).trim(),ve=c.getShaderInfoLog(F).trim();let he=!0,q=!0;if(c.getProgramParameter(N,c.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,N,j,F);else{const ae=J_(c,j,"vertex"),Q=J_(c,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(N,c.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+ae+`
`+Q)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(oe===""||ve==="")&&(q=!1);q&&(G.diagnostics={runnable:he,programLog:le,vertexShader:{log:oe,prefix:S},fragmentShader:{log:ve,prefix:x}})}c.deleteShader(j),c.deleteShader(F),B=new xu(c,N),U=oA(c,N)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=c.getProgramParameter(N,J2)),C},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(N),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=$2++,this.cacheKey=n,this.usedTimes=1,this.program=N,this.vertexShader=j,this.fragmentShader=F,this}let xA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,c=this._getShaderStage(a),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(n);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new SA(n),a.set(n,s)),s}}class SA{constructor(n){this.id=xA++,this.code=n,this.usedTimes=0}}function MA(o,n,a,s,c,f,d){const h=new bx,p=new yA,v=new Set,_=[],g=c.logarithmicDepthBuffer,y=c.vertexTextures;let M=c.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(U){return v.add(U),U===0?"uv":`uv${U}`}function S(U,C,G,le,oe){const ve=le.fog,he=oe.geometry,q=U.isMeshStandardMaterial?le.environment:null,ae=(U.isMeshStandardMaterial?a:n).get(U.envMap||q),Q=ae&&ae.mapping===Au?ae.image.height:null,xe=A[U.type];U.precision!==null&&(M=c.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const Se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Fe=Se!==void 0?Se.length:0;let et=0;he.morphAttributes.position!==void 0&&(et=1),he.morphAttributes.normal!==void 0&&(et=2),he.morphAttributes.color!==void 0&&(et=3);let ht,R,Z,pe;if(xe){const Et=qi[xe];ht=Et.vertexShader,R=Et.fragmentShader}else ht=U.vertexShader,R=U.fragmentShader,p.update(U),Z=p.getVertexShaderID(U),pe=p.getFragmentShaderID(U);const ue=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),ke=oe.isInstancedMesh===!0,Ne=oe.isBatchedMesh===!0,Re=!!U.map,Be=!!U.matcap,rt=!!ae,V=!!U.aoMap,dn=!!U.lightMap,at=!!U.bumpMap,Ke=!!U.normalMap,Ce=!!U.displacementMap,xt=!!U.emissiveMap,Xe=!!U.metalnessMap,L=!!U.roughnessMap,T=U.anisotropy>0,ne=U.clearcoat>0,ge=U.dispersion>0,ye=U.iridescence>0,me=U.sheen>0,qe=U.transmission>0,Le=T&&!!U.anisotropyMap,Pe=ne&&!!U.clearcoatMap,mt=ne&&!!U.clearcoatNormalMap,Ee=ne&&!!U.clearcoatRoughnessMap,Ve=ye&&!!U.iridescenceMap,Je=ye&&!!U.iridescenceThicknessMap,tt=me&&!!U.sheenColorMap,Ge=me&&!!U.sheenRoughnessMap,pt=!!U.specularMap,ot=!!U.specularColorMap,It=!!U.specularIntensityMap,k=qe&&!!U.transmissionMap,Oe=qe&&!!U.thicknessMap,ce=!!U.gradientMap,_e=!!U.alphaMap,ze=U.alphaTest>0,Ie=!!U.alphaHash,st=!!U.extensions;let Zt=or;U.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Zt=o.toneMapping);const vn={shaderID:xe,shaderType:U.type,shaderName:U.name,vertexShader:ht,fragmentShader:R,defines:U.defines,customVertexShaderID:Z,customFragmentShaderID:pe,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Ne,batchingColor:Ne&&oe._colorsTexture!==null,instancing:ke,instancingColor:ke&&oe.instanceColor!==null,instancingMorph:ke&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ao,alphaToCoverage:!!U.alphaToCoverage,map:Re,matcap:Be,envMap:rt,envMapMode:rt&&ae.mapping,envMapCubeUVHeight:Q,aoMap:V,lightMap:dn,bumpMap:at,normalMap:Ke,displacementMap:y&&Ce,emissiveMap:xt,normalMapObjectSpace:Ke&&U.normalMapType===gE,normalMapTangentSpace:Ke&&U.normalMapType===mE,metalnessMap:Xe,roughnessMap:L,anisotropy:T,anisotropyMap:Le,clearcoat:ne,clearcoatMap:Pe,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:ye,iridescenceMap:Ve,iridescenceThicknessMap:Je,sheen:me,sheenColorMap:tt,sheenRoughnessMap:Ge,specularMap:pt,specularColorMap:ot,specularIntensityMap:It,transmission:qe,transmissionMap:k,thicknessMap:Oe,gradientMap:ce,opaque:U.transparent===!1&&U.blending===Ks&&U.alphaToCoverage===!1,alphaMap:_e,alphaTest:ze,alphaHash:Ie,combine:U.combine,mapUv:Re&&N(U.map.channel),aoMapUv:V&&N(U.aoMap.channel),lightMapUv:dn&&N(U.lightMap.channel),bumpMapUv:at&&N(U.bumpMap.channel),normalMapUv:Ke&&N(U.normalMap.channel),displacementMapUv:Ce&&N(U.displacementMap.channel),emissiveMapUv:xt&&N(U.emissiveMap.channel),metalnessMapUv:Xe&&N(U.metalnessMap.channel),roughnessMapUv:L&&N(U.roughnessMap.channel),anisotropyMapUv:Le&&N(U.anisotropyMap.channel),clearcoatMapUv:Pe&&N(U.clearcoatMap.channel),clearcoatNormalMapUv:mt&&N(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&N(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&N(U.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&N(U.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&N(U.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&N(U.sheenRoughnessMap.channel),specularMapUv:pt&&N(U.specularMap.channel),specularColorMapUv:ot&&N(U.specularColorMap.channel),specularIntensityMapUv:It&&N(U.specularIntensityMap.channel),transmissionMapUv:k&&N(U.transmissionMap.channel),thicknessMapUv:Oe&&N(U.thicknessMap.channel),alphaMapUv:_e&&N(U.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Ke||T),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!he.attributes.uv&&(Re||_e),fog:!!ve,useFog:U.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Te,skinning:oe.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:et,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Re&&U.map.isVideoTexture===!0&&Nt.getTransfer(U.map.colorSpace)===Ft,decodeVideoTextureEmissive:xt&&U.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(U.emissiveMap.colorSpace)===Ft,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===_a,flipSided:U.side===Kn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:st&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&U.extensions.multiDraw===!0||Ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return vn.vertexUv1s=v.has(1),vn.vertexUv2s=v.has(2),vn.vertexUv3s=v.has(3),v.clear(),vn}function x(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)C.push(G),C.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(O(C,U),z(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function O(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function z(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),U.push(h.mask)}function D(U){const C=A[U.type];let G;if(C){const le=qi[C];G=YE.clone(le.uniforms)}else G=U.uniforms;return G}function j(U,C){let G;for(let le=0,oe=_.length;le<oe;le++){const ve=_[le];if(ve.cacheKey===C){G=ve,++G.usedTimes;break}}return G===void 0&&(G=new _A(o,C,U,f),_.push(G)),G}function F(U){if(--U.usedTimes===0){const C=_.indexOf(U);_[C]=_[_.length-1],_.pop(),U.destroy()}}function I(U){p.remove(U)}function B(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:j,releaseProgram:F,releaseShaderCache:I,programs:_,dispose:B}}function EA(){let o=new WeakMap;function n(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:c,dispose:f}}function bA(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function ix(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function ax(){const o=[];let n=0;const a=[],s=[],c=[];function f(){n=0,a.length=0,s.length=0,c.length=0}function d(g,y,M,A,N,S){let x=o[n];return x===void 0?(x={id:g.id,object:g,geometry:y,material:M,groupOrder:A,renderOrder:g.renderOrder,z:N,group:S},o[n]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=M,x.groupOrder=A,x.renderOrder=g.renderOrder,x.z=N,x.group=S),n++,x}function h(g,y,M,A,N,S){const x=d(g,y,M,A,N,S);M.transmission>0?s.push(x):M.transparent===!0?c.push(x):a.push(x)}function p(g,y,M,A,N,S){const x=d(g,y,M,A,N,S);M.transmission>0?s.unshift(x):M.transparent===!0?c.unshift(x):a.unshift(x)}function v(g,y){a.length>1&&a.sort(g||bA),s.length>1&&s.sort(y||ix),c.length>1&&c.sort(y||ix)}function _(){for(let g=n,y=o.length;g<y;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:c,init:f,push:h,unshift:p,finish:_,sort:v}}function TA(){let o=new WeakMap;function n(s,c){const f=o.get(s);let d;return f===void 0?(d=new ax,o.set(s,[d])):c>=f.length?(d=new ax,f.push(d)):d=f[c],d}function a(){o=new WeakMap}return{get:n,dispose:a}}function AA(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new te,color:new Rt};break;case"SpotLight":a={position:new te,direction:new te,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new te,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new te,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":a={color:new Rt,position:new te,halfWidth:new te,halfHeight:new te};break}return o[n.id]=a,a}}}function RA(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let CA=0;function wA(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function NA(o){const n=new AA,a=RA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)s.probe.push(new te);const c=new te,f=new tn,d=new tn;function h(v){let _=0,g=0,y=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,A=0,N=0,S=0,x=0,O=0,z=0,D=0,j=0,F=0,I=0;v.sort(wA);for(let U=0,C=v.length;U<C;U++){const G=v[U],le=G.color,oe=G.intensity,ve=G.distance,he=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=le.r*oe,g+=le.g*oe,y+=le.b*oe;else if(G.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(G.sh.coefficients[q],oe);I++}else if(G.isDirectionalLight){const q=n.get(G);if(q.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ae=G.shadow,Q=a.get(G);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,s.directionalShadow[M]=Q,s.directionalShadowMap[M]=he,s.directionalShadowMatrix[M]=G.shadow.matrix,O++}s.directional[M]=q,M++}else if(G.isSpotLight){const q=n.get(G);q.position.setFromMatrixPosition(G.matrixWorld),q.color.copy(le).multiplyScalar(oe),q.distance=ve,q.coneCos=Math.cos(G.angle),q.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),q.decay=G.decay,s.spot[N]=q;const ae=G.shadow;if(G.map&&(s.spotLightMap[j]=G.map,j++,ae.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[N]=ae.matrix,G.castShadow){const Q=a.get(G);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,s.spotShadow[N]=Q,s.spotShadowMap[N]=he,D++}N++}else if(G.isRectAreaLight){const q=n.get(G);q.color.copy(le).multiplyScalar(oe),q.halfWidth.set(G.width*.5,0,0),q.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=q,S++}else if(G.isPointLight){const q=n.get(G);if(q.color.copy(G.color).multiplyScalar(G.intensity),q.distance=G.distance,q.decay=G.decay,G.castShadow){const ae=G.shadow,Q=a.get(G);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,Q.shadowCameraNear=ae.camera.near,Q.shadowCameraFar=ae.camera.far,s.pointShadow[A]=Q,s.pointShadowMap[A]=he,s.pointShadowMatrix[A]=G.shadow.matrix,z++}s.point[A]=q,A++}else if(G.isHemisphereLight){const q=n.get(G);q.skyColor.copy(G.color).multiplyScalar(oe),q.groundColor.copy(G.groundColor).multiplyScalar(oe),s.hemi[x]=q,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=y;const B=s.hash;(B.directionalLength!==M||B.pointLength!==A||B.spotLength!==N||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==O||B.numPointShadows!==z||B.numSpotShadows!==D||B.numSpotMaps!==j||B.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=N,s.rectArea.length=S,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+j-F,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,B.directionalLength=M,B.pointLength=A,B.spotLength=N,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=O,B.numPointShadows=z,B.numSpotShadows=D,B.numSpotMaps=j,B.numLightProbes=I,s.version=CA++)}function p(v,_){let g=0,y=0,M=0,A=0,N=0;const S=_.matrixWorldInverse;for(let x=0,O=v.length;x<O;x++){const z=v[x];if(z.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(z.matrixWorld),c.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(c),D.direction.transformDirection(S),g++}else if(z.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(z.matrixWorld),c.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(c),D.direction.transformDirection(S),M++}else if(z.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),d.identity(),f.copy(z.matrixWorld),f.premultiply(S),d.extractRotation(f),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),A++}else if(z.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),y++}else if(z.isHemisphereLight){const D=s.hemi[N];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(S),N++}}}return{setup:h,setupView:p,state:s}}function rx(o){const n=new NA(o),a=[],s=[];function c(_){v.camera=_,a.length=0,s.length=0}function f(_){a.push(_)}function d(_){s.push(_)}function h(){n.setup(a)}function p(_){n.setupView(a,_)}const v={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:v,setupLights:h,setupLightsView:p,pushLight:f,pushShadow:d}}function DA(o){let n=new WeakMap;function a(c,f=0){const d=n.get(c);let h;return d===void 0?(h=new rx(o),n.set(c,[h])):f>=d.length?(h=new rx(o),d.push(h)):h=d[f],h}function s(){n=new WeakMap}return{get:a,dispose:s}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OA(o,n,a){let s=new Ux;const c=new Lt,f=new Lt,d=new rn,h=new r1({depthPacking:pE}),p=new s1,v={},_=a.maxTextureSize,g={[lr]:Kn,[Kn]:lr,[_a]:_a},y=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:UA,fragmentShader:LA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new Si;A.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Sa(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lx;let x=this.type;this.render=function(F,I,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),le=o.state;le.setBlending(sr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const oe=x!==va&&this.type===va,ve=x===va&&this.type!==va;for(let he=0,q=F.length;he<q;he++){const ae=F[he],Q=ae.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;c.copy(Q.mapSize);const xe=Q.getFrameExtents();if(c.multiply(xe),f.copy(Q.mapSize),(c.x>_||c.y>_)&&(c.x>_&&(f.x=Math.floor(_/xe.x),c.x=f.x*xe.x,Q.mapSize.x=f.x),c.y>_&&(f.y=Math.floor(_/xe.y),c.y=f.y*xe.y,Q.mapSize.y=f.y)),Q.map===null||oe===!0||ve===!0){const Fe=this.type!==va?{minFilter:Li,magFilter:Li}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Yr(c.x,c.y,Fe),Q.map.texture.name=ae.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const Se=Q.getViewportCount();for(let Fe=0;Fe<Se;Fe++){const et=Q.getViewport(Fe);d.set(f.x*et.x,f.y*et.y,f.x*et.z,f.y*et.w),le.viewport(d),Q.updateMatrices(ae,Fe),s=Q.getFrustum(),D(I,B,Q.camera,ae,this.type)}Q.isPointLightShadow!==!0&&this.type===va&&O(Q,B),Q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(U,C,G)};function O(F,I){const B=n.update(N);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Yr(c.x,c.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(I,null,B,y,N,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(I,null,B,M,N,null)}function z(F,I,B,U){let C=null;const G=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)C=G;else if(C=B.isPointLight===!0?p:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const le=C.uuid,oe=I.uuid;let ve=v[le];ve===void 0&&(ve={},v[le]=ve);let he=ve[oe];he===void 0&&(he=C.clone(),ve[oe]=he,I.addEventListener("dispose",j)),C=he}if(C.visible=I.visible,C.wireframe=I.wireframe,U===va?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:g[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=o.properties.get(C);le.light=B}return C}function D(F,I,B,U,C){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===va)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const oe=n.update(F),ve=F.material;if(Array.isArray(ve)){const he=oe.groups;for(let q=0,ae=he.length;q<ae;q++){const Q=he[q],xe=ve[Q.materialIndex];if(xe&&xe.visible){const Se=z(F,xe,U,C);F.onBeforeShadow(o,F,I,B,oe,Se,Q),o.renderBufferDirect(B,null,oe,Se,F,Q),F.onAfterShadow(o,F,I,B,oe,Se,Q)}}}else if(ve.visible){const he=z(F,ve,U,C);F.onBeforeShadow(o,F,I,B,oe,he,null),o.renderBufferDirect(B,null,oe,he,F,null),F.onAfterShadow(o,F,I,B,oe,he,null)}}const le=F.children;for(let oe=0,ve=le.length;oe<ve;oe++)D(le[oe],I,B,U,C)}function j(F){F.target.removeEventListener("dispose",j);for(const B in v){const U=v[B],C=F.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const zA={[kh]:jh,[Xh]:Wh,[qh]:Zh,[$s]:Yh,[jh]:kh,[Wh]:Xh,[Zh]:qh,[Yh]:$s};function PA(o,n){function a(){let k=!1;const Oe=new rn;let ce=null;const _e=new rn(0,0,0,0);return{setMask:function(ze){ce!==ze&&!k&&(o.colorMask(ze,ze,ze,ze),ce=ze)},setLocked:function(ze){k=ze},setClear:function(ze,Ie,st,Zt,vn){vn===!0&&(ze*=Zt,Ie*=Zt,st*=Zt),Oe.set(ze,Ie,st,Zt),_e.equals(Oe)===!1&&(o.clearColor(ze,Ie,st,Zt),_e.copy(Oe))},reset:function(){k=!1,ce=null,_e.set(-1,0,0,0)}}}function s(){let k=!1,Oe=!1,ce=null,_e=null,ze=null;return{setReversed:function(Ie){if(Oe!==Ie){const st=n.get("EXT_clip_control");Oe?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Zt=ze;ze=null,this.setClear(Zt)}Oe=Ie},getReversed:function(){return Oe},setTest:function(Ie){Ie?ue(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Ie){ce!==Ie&&!k&&(o.depthMask(Ie),ce=Ie)},setFunc:function(Ie){if(Oe&&(Ie=zA[Ie]),_e!==Ie){switch(Ie){case kh:o.depthFunc(o.NEVER);break;case jh:o.depthFunc(o.ALWAYS);break;case Xh:o.depthFunc(o.LESS);break;case $s:o.depthFunc(o.LEQUAL);break;case qh:o.depthFunc(o.EQUAL);break;case Yh:o.depthFunc(o.GEQUAL);break;case Wh:o.depthFunc(o.GREATER);break;case Zh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_e=Ie}},setLocked:function(Ie){k=Ie},setClear:function(Ie){ze!==Ie&&(Oe&&(Ie=1-Ie),o.clearDepth(Ie),ze=Ie)},reset:function(){k=!1,ce=null,_e=null,ze=null,Oe=!1}}}function c(){let k=!1,Oe=null,ce=null,_e=null,ze=null,Ie=null,st=null,Zt=null,vn=null;return{setTest:function(Et){k||(Et?ue(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Et){Oe!==Et&&!k&&(o.stencilMask(Et),Oe=Et)},setFunc:function(Et,qt,_n){(ce!==Et||_e!==qt||ze!==_n)&&(o.stencilFunc(Et,qt,_n),ce=Et,_e=qt,ze=_n)},setOp:function(Et,qt,_n){(Ie!==Et||st!==qt||Zt!==_n)&&(o.stencilOp(Et,qt,_n),Ie=Et,st=qt,Zt=_n)},setLocked:function(Et){k=Et},setClear:function(Et){vn!==Et&&(o.clearStencil(Et),vn=Et)},reset:function(){k=!1,Oe=null,ce=null,_e=null,ze=null,Ie=null,st=null,Zt=null,vn=null}}}const f=new a,d=new s,h=new c,p=new WeakMap,v=new WeakMap;let _={},g={},y=new WeakMap,M=[],A=null,N=!1,S=null,x=null,O=null,z=null,D=null,j=null,F=null,I=new Rt(0,0,0),B=0,U=!1,C=null,G=null,le=null,oe=null,ve=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ae=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=ae>=1):Q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=ae>=2);let xe=null,Se={};const Fe=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),ht=new rn().fromArray(Fe),R=new rn().fromArray(et);function Z(k,Oe,ce,_e){const ze=new Uint8Array(4),Ie=o.createTexture();o.bindTexture(k,Ie),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let st=0;st<ce;st++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Oe,0,o.RGBA,1,1,_e,0,o.RGBA,o.UNSIGNED_BYTE,ze):o.texImage2D(Oe+st,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ze);return Ie}const pe={};pe[o.TEXTURE_2D]=Z(o.TEXTURE_2D,o.TEXTURE_2D,1),pe[o.TEXTURE_CUBE_MAP]=Z(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[o.TEXTURE_2D_ARRAY]=Z(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pe[o.TEXTURE_3D]=Z(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc($s),at(!1),Ke(a_),ue(o.CULL_FACE),V(sr);function ue(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Te(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function ke(k,Oe){return g[k]!==Oe?(o.bindFramebuffer(k,Oe),g[k]=Oe,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Oe),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ne(k,Oe){let ce=M,_e=!1;if(k){ce=y.get(Oe),ce===void 0&&(ce=[],y.set(Oe,ce));const ze=k.textures;if(ce.length!==ze.length||ce[0]!==o.COLOR_ATTACHMENT0){for(let Ie=0,st=ze.length;Ie<st;Ie++)ce[Ie]=o.COLOR_ATTACHMENT0+Ie;ce.length=ze.length,_e=!0}}else ce[0]!==o.BACK&&(ce[0]=o.BACK,_e=!0);_e&&o.drawBuffers(ce)}function Re(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const Be={[Vr]:o.FUNC_ADD,[HM]:o.FUNC_SUBTRACT,[GM]:o.FUNC_REVERSE_SUBTRACT};Be[VM]=o.MIN,Be[kM]=o.MAX;const rt={[jM]:o.ZERO,[XM]:o.ONE,[qM]:o.SRC_COLOR,[Gh]:o.SRC_ALPHA,[JM]:o.SRC_ALPHA_SATURATE,[KM]:o.DST_COLOR,[WM]:o.DST_ALPHA,[YM]:o.ONE_MINUS_SRC_COLOR,[Vh]:o.ONE_MINUS_SRC_ALPHA,[QM]:o.ONE_MINUS_DST_COLOR,[ZM]:o.ONE_MINUS_DST_ALPHA,[$M]:o.CONSTANT_COLOR,[eE]:o.ONE_MINUS_CONSTANT_COLOR,[tE]:o.CONSTANT_ALPHA,[nE]:o.ONE_MINUS_CONSTANT_ALPHA};function V(k,Oe,ce,_e,ze,Ie,st,Zt,vn,Et){if(k===sr){N===!0&&(Te(o.BLEND),N=!1);return}if(N===!1&&(ue(o.BLEND),N=!0),k!==FM){if(k!==S||Et!==U){if((x!==Vr||D!==Vr)&&(o.blendEquation(o.FUNC_ADD),x=Vr,D=Vr),Et)switch(k){case Ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hh:o.blendFunc(o.ONE,o.ONE);break;case r_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case s_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case r_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case s_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,z=null,j=null,F=null,I.set(0,0,0),B=0,S=k,U=Et}return}ze=ze||Oe,Ie=Ie||ce,st=st||_e,(Oe!==x||ze!==D)&&(o.blendEquationSeparate(Be[Oe],Be[ze]),x=Oe,D=ze),(ce!==O||_e!==z||Ie!==j||st!==F)&&(o.blendFuncSeparate(rt[ce],rt[_e],rt[Ie],rt[st]),O=ce,z=_e,j=Ie,F=st),(Zt.equals(I)===!1||vn!==B)&&(o.blendColor(Zt.r,Zt.g,Zt.b,vn),I.copy(Zt),B=vn),S=k,U=!1}function dn(k,Oe){k.side===_a?Te(o.CULL_FACE):ue(o.CULL_FACE);let ce=k.side===Kn;Oe&&(ce=!ce),at(ce),k.blending===Ks&&k.transparent===!1?V(sr):V(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),f.setMask(k.colorWrite);const _e=k.stencilWrite;h.setTest(_e),_e&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Ke(k){k!==PM?(ue(o.CULL_FACE),k!==G&&(k===a_?o.cullFace(o.BACK):k===IM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),G=k}function Ce(k){k!==le&&(q&&o.lineWidth(k),le=k)}function xt(k,Oe,ce){k?(ue(o.POLYGON_OFFSET_FILL),(oe!==Oe||ve!==ce)&&(o.polygonOffset(Oe,ce),oe=Oe,ve=ce)):Te(o.POLYGON_OFFSET_FILL)}function Xe(k){k?ue(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+he-1),xe!==k&&(o.activeTexture(k),xe=k)}function T(k,Oe,ce){ce===void 0&&(xe===null?ce=o.TEXTURE0+he-1:ce=xe);let _e=Se[ce];_e===void 0&&(_e={type:void 0,texture:void 0},Se[ce]=_e),(_e.type!==k||_e.texture!==Oe)&&(xe!==ce&&(o.activeTexture(ce),xe=ce),o.bindTexture(k,Oe||pe[k]),_e.type=k,_e.texture=Oe)}function ne(){const k=Se[xe];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ge(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Je(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(k){ht.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),ht.copy(k))}function Ge(k){R.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),R.copy(k))}function pt(k,Oe){let ce=v.get(Oe);ce===void 0&&(ce=new WeakMap,v.set(Oe,ce));let _e=ce.get(k);_e===void 0&&(_e=o.getUniformBlockIndex(Oe,k.name),ce.set(k,_e))}function ot(k,Oe){const _e=v.get(Oe).get(k);p.get(Oe)!==_e&&(o.uniformBlockBinding(Oe,_e,k.__bindingPointIndex),p.set(Oe,_e))}function It(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xe=null,Se={},g={},y=new WeakMap,M=[],A=null,N=!1,S=null,x=null,O=null,z=null,D=null,j=null,F=null,I=new Rt(0,0,0),B=0,U=!1,C=null,G=null,le=null,oe=null,ve=null,ht.set(0,0,o.canvas.width,o.canvas.height),R.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ue,disable:Te,bindFramebuffer:ke,drawBuffers:Ne,useProgram:Re,setBlending:V,setMaterial:dn,setFlipSided:at,setCullFace:Ke,setLineWidth:Ce,setPolygonOffset:xt,setScissorTest:Xe,activeTexture:L,bindTexture:T,unbindTexture:ne,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:Ve,texImage3D:Je,updateUBOMapping:pt,uniformBlockBinding:ot,texStorage2D:mt,texStorage3D:Ee,texSubImage2D:me,texSubImage3D:qe,compressedTexSubImage2D:Le,compressedTexSubImage3D:Pe,scissor:tt,viewport:Ge,reset:It}}function IA(o,n,a,s,c,f,d){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Lt,_=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,T){return M?new OffscreenCanvas(L,T):Mu("canvas")}function N(L,T,ne){let ge=1;const ye=Xe(L);if((ye.width>ne||ye.height>ne)&&(ge=ne/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const me=Math.floor(ge*ye.width),qe=Math.floor(ge*ye.height);g===void 0&&(g=A(me,qe));const Le=T?A(me,qe):g;return Le.width=me,Le.height=qe,Le.getContext("2d").drawImage(L,0,0,me,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+qe+")."),Le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(L,T,ne,ge,ye=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=T;if(T===o.RED&&(ne===o.FLOAT&&(me=o.R32F),ne===o.HALF_FLOAT&&(me=o.R16F),ne===o.UNSIGNED_BYTE&&(me=o.R8)),T===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(me=o.R8UI),ne===o.UNSIGNED_SHORT&&(me=o.R16UI),ne===o.UNSIGNED_INT&&(me=o.R32UI),ne===o.BYTE&&(me=o.R8I),ne===o.SHORT&&(me=o.R16I),ne===o.INT&&(me=o.R32I)),T===o.RG&&(ne===o.FLOAT&&(me=o.RG32F),ne===o.HALF_FLOAT&&(me=o.RG16F),ne===o.UNSIGNED_BYTE&&(me=o.RG8)),T===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(me=o.RG8UI),ne===o.UNSIGNED_SHORT&&(me=o.RG16UI),ne===o.UNSIGNED_INT&&(me=o.RG32UI),ne===o.BYTE&&(me=o.RG8I),ne===o.SHORT&&(me=o.RG16I),ne===o.INT&&(me=o.RG32I)),T===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(me=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(me=o.RGB16UI),ne===o.UNSIGNED_INT&&(me=o.RGB32UI),ne===o.BYTE&&(me=o.RGB8I),ne===o.SHORT&&(me=o.RGB16I),ne===o.INT&&(me=o.RGB32I)),T===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(me=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(me=o.RGBA16UI),ne===o.UNSIGNED_INT&&(me=o.RGBA32UI),ne===o.BYTE&&(me=o.RGBA8I),ne===o.SHORT&&(me=o.RGBA16I),ne===o.INT&&(me=o.RGBA32I)),T===o.RGB&&ne===o.UNSIGNED_INT_5_9_9_9_REV&&(me=o.RGB9_E5),T===o.RGBA){const qe=ye?yu:Nt.getTransfer(ge);ne===o.FLOAT&&(me=o.RGBA32F),ne===o.HALF_FLOAT&&(me=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(me=qe===Ft?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(me=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(me=o.RGB5_A1)}return(me===o.R16F||me===o.R32F||me===o.RG16F||me===o.RG32F||me===o.RGBA16F||me===o.RGBA32F)&&n.get("EXT_color_buffer_float"),me}function D(L,T){let ne;return L?T===null||T===qr||T===no?ne=o.DEPTH24_STENCIL8:T===xa?ne=o.DEPTH32F_STENCIL8:T===ul&&(ne=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qr||T===no?ne=o.DEPTH_COMPONENT24:T===xa?ne=o.DEPTH_COMPONENT32F:T===ul&&(ne=o.DEPTH_COMPONENT16),ne}function j(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Li&&L.minFilter!==Yi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function F(L){const T=L.target;T.removeEventListener("dispose",F),B(T),T.isVideoTexture&&_.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),C(T)}function B(L){const T=s.get(L);if(T.__webglInit===void 0)return;const ne=L.source,ge=y.get(ne);if(ge){const ye=ge[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&U(L),Object.keys(ge).length===0&&y.delete(ne)}s.remove(L)}function U(L){const T=s.get(L);o.deleteTexture(T.__webglTexture);const ne=L.source,ge=y.get(ne);delete ge[T.__cacheKey],d.memory.textures--}function C(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let ye=0;ye<T.__webglFramebuffer[ge].length;ye++)o.deleteFramebuffer(T.__webglFramebuffer[ge][ye]);else o.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)o.deleteFramebuffer(T.__webglFramebuffer[ge]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=L.textures;for(let ge=0,ye=ne.length;ge<ye;ge++){const me=s.get(ne[ge]);me.__webglTexture&&(o.deleteTexture(me.__webglTexture),d.memory.textures--),s.remove(ne[ge])}s.remove(L)}let G=0;function le(){G=0}function oe(){const L=G;return L>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c.maxTextures),G+=1,L}function ve(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function he(L,T){const ne=s.get(L);if(L.isVideoTexture&&Ce(L),L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){const ge=L.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(ne,L,T);return}}a.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+T)}function q(L,T){const ne=s.get(L);if(L.version>0&&ne.__version!==L.version){R(ne,L,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+T)}function ae(L,T){const ne=s.get(L);if(L.version>0&&ne.__version!==L.version){R(ne,L,T);return}a.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+T)}function Q(L,T){const ne=s.get(L);if(L.version>0&&ne.__version!==L.version){Z(ne,L,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+T)}const xe={[Jh]:o.REPEAT,[jr]:o.CLAMP_TO_EDGE,[$h]:o.MIRRORED_REPEAT},Se={[Li]:o.NEAREST,[dE]:o.NEAREST_MIPMAP_NEAREST,[Gc]:o.NEAREST_MIPMAP_LINEAR,[Yi]:o.LINEAR,[oh]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},Fe={[vE]:o.NEVER,[EE]:o.ALWAYS,[_E]:o.LESS,[Sx]:o.LEQUAL,[xE]:o.EQUAL,[ME]:o.GEQUAL,[yE]:o.GREATER,[SE]:o.NOTEQUAL};function et(L,T){if(T.type===xa&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===Yi||T.magFilter===oh||T.magFilter===Gc||T.magFilter===Xr||T.minFilter===Yi||T.minFilter===oh||T.minFilter===Gc||T.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,xe[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,xe[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,xe[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Se[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Se[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Fe[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Li||T.minFilter!==Gc&&T.minFilter!==Xr||T.type===xa&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ne=n.get("EXT_texture_filter_anisotropic");o.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ht(L,T){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",F));const ge=T.source;let ye=y.get(ge);ye===void 0&&(ye={},y.set(ge,ye));const me=ve(T);if(me!==L.__cacheKey){ye[me]===void 0&&(ye[me]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),ye[me].usedTimes++;const qe=ye[L.__cacheKey];qe!==void 0&&(ye[L.__cacheKey].usedTimes--,qe.usedTimes===0&&U(T)),L.__cacheKey=me,L.__webglTexture=ye[me].texture}return ne}function R(L,T,ne){let ge=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=o.TEXTURE_3D);const ye=ht(L,T),me=T.source;a.bindTexture(ge,L.__webglTexture,o.TEXTURE0+ne);const qe=s.get(me);if(me.version!==qe.__version||ye===!0){a.activeTexture(o.TEXTURE0+ne);const Le=Nt.getPrimaries(Nt.workingColorSpace),Pe=T.colorSpace===rr?null:Nt.getPrimaries(T.colorSpace),mt=T.colorSpace===rr||Le===Pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ee=N(T.image,!1,c.maxTextureSize);Ee=xt(T,Ee);const Ve=f.convert(T.format,T.colorSpace),Je=f.convert(T.type);let tt=z(T.internalFormat,Ve,Je,T.colorSpace,T.isVideoTexture);et(ge,T);let Ge;const pt=T.mipmaps,ot=T.isVideoTexture!==!0,It=qe.__version===void 0||ye===!0,k=me.dataReady,Oe=j(T,Ee);if(T.isDepthTexture)tt=D(T.format===io,T.type),It&&(ot?a.texStorage2D(o.TEXTURE_2D,1,tt,Ee.width,Ee.height):a.texImage2D(o.TEXTURE_2D,0,tt,Ee.width,Ee.height,0,Ve,Je,null));else if(T.isDataTexture)if(pt.length>0){ot&&It&&a.texStorage2D(o.TEXTURE_2D,Oe,tt,pt[0].width,pt[0].height);for(let ce=0,_e=pt.length;ce<_e;ce++)Ge=pt[ce],ot?k&&a.texSubImage2D(o.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Ve,Je,Ge.data):a.texImage2D(o.TEXTURE_2D,ce,tt,Ge.width,Ge.height,0,Ve,Je,Ge.data);T.generateMipmaps=!1}else ot?(It&&a.texStorage2D(o.TEXTURE_2D,Oe,tt,Ee.width,Ee.height),k&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ve,Je,Ee.data)):a.texImage2D(o.TEXTURE_2D,0,tt,Ee.width,Ee.height,0,Ve,Je,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&It&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Oe,tt,pt[0].width,pt[0].height,Ee.depth);for(let ce=0,_e=pt.length;ce<_e;ce++)if(Ge=pt[ce],T.format!==Ui)if(Ve!==null)if(ot){if(k)if(T.layerUpdates.size>0){const ze=z_(Ge.width,Ge.height,T.format,T.type);for(const Ie of T.layerUpdates){const st=Ge.data.subarray(Ie*ze/Ge.data.BYTES_PER_ELEMENT,(Ie+1)*ze/Ge.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,Ie,Ge.width,Ge.height,1,Ve,st)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,0,Ge.width,Ge.height,Ee.depth,Ve,Ge.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ce,tt,Ge.width,Ge.height,Ee.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?k&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,0,Ge.width,Ge.height,Ee.depth,Ve,Je,Ge.data):a.texImage3D(o.TEXTURE_2D_ARRAY,ce,tt,Ge.width,Ge.height,Ee.depth,0,Ve,Je,Ge.data)}else{ot&&It&&a.texStorage2D(o.TEXTURE_2D,Oe,tt,pt[0].width,pt[0].height);for(let ce=0,_e=pt.length;ce<_e;ce++)Ge=pt[ce],T.format!==Ui?Ve!==null?ot?k&&a.compressedTexSubImage2D(o.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Ve,Ge.data):a.compressedTexImage2D(o.TEXTURE_2D,ce,tt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?k&&a.texSubImage2D(o.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Ve,Je,Ge.data):a.texImage2D(o.TEXTURE_2D,ce,tt,Ge.width,Ge.height,0,Ve,Je,Ge.data)}else if(T.isDataArrayTexture)if(ot){if(It&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Oe,tt,Ee.width,Ee.height,Ee.depth),k)if(T.layerUpdates.size>0){const ce=z_(Ee.width,Ee.height,T.format,T.type);for(const _e of T.layerUpdates){const ze=Ee.data.subarray(_e*ce/Ee.data.BYTES_PER_ELEMENT,(_e+1)*ce/Ee.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,Ee.width,Ee.height,1,Ve,Je,ze)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ve,Je,Ee.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,tt,Ee.width,Ee.height,Ee.depth,0,Ve,Je,Ee.data);else if(T.isData3DTexture)ot?(It&&a.texStorage3D(o.TEXTURE_3D,Oe,tt,Ee.width,Ee.height,Ee.depth),k&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ve,Je,Ee.data)):a.texImage3D(o.TEXTURE_3D,0,tt,Ee.width,Ee.height,Ee.depth,0,Ve,Je,Ee.data);else if(T.isFramebufferTexture){if(It)if(ot)a.texStorage2D(o.TEXTURE_2D,Oe,tt,Ee.width,Ee.height);else{let ce=Ee.width,_e=Ee.height;for(let ze=0;ze<Oe;ze++)a.texImage2D(o.TEXTURE_2D,ze,tt,ce,_e,0,Ve,Je,null),ce>>=1,_e>>=1}}else if(pt.length>0){if(ot&&It){const ce=Xe(pt[0]);a.texStorage2D(o.TEXTURE_2D,Oe,tt,ce.width,ce.height)}for(let ce=0,_e=pt.length;ce<_e;ce++)Ge=pt[ce],ot?k&&a.texSubImage2D(o.TEXTURE_2D,ce,0,0,Ve,Je,Ge):a.texImage2D(o.TEXTURE_2D,ce,tt,Ve,Je,Ge);T.generateMipmaps=!1}else if(ot){if(It){const ce=Xe(Ee);a.texStorage2D(o.TEXTURE_2D,Oe,tt,ce.width,ce.height)}k&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ve,Je,Ee)}else a.texImage2D(o.TEXTURE_2D,0,tt,Ve,Je,Ee);S(T)&&x(ge),qe.__version=me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Z(L,T,ne){if(T.image.length!==6)return;const ge=ht(L,T),ye=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+ne);const me=s.get(ye);if(ye.version!==me.__version||ge===!0){a.activeTexture(o.TEXTURE0+ne);const qe=Nt.getPrimaries(Nt.workingColorSpace),Le=T.colorSpace===rr?null:Nt.getPrimaries(T.colorSpace),Pe=T.colorSpace===rr||qe===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const mt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Ve=[];for(let _e=0;_e<6;_e++)!mt&&!Ee?Ve[_e]=N(T.image[_e],!0,c.maxCubemapSize):Ve[_e]=Ee?T.image[_e].image:T.image[_e],Ve[_e]=xt(T,Ve[_e]);const Je=Ve[0],tt=f.convert(T.format,T.colorSpace),Ge=f.convert(T.type),pt=z(T.internalFormat,tt,Ge,T.colorSpace),ot=T.isVideoTexture!==!0,It=me.__version===void 0||ge===!0,k=ye.dataReady;let Oe=j(T,Je);et(o.TEXTURE_CUBE_MAP,T);let ce;if(mt){ot&&It&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,pt,Je.width,Je.height);for(let _e=0;_e<6;_e++){ce=Ve[_e].mipmaps;for(let ze=0;ze<ce.length;ze++){const Ie=ce[ze];T.format!==Ui?tt!==null?ot?k&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,0,0,Ie.width,Ie.height,tt,Ie.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,pt,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,0,0,Ie.width,Ie.height,tt,Ge,Ie.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,pt,Ie.width,Ie.height,0,tt,Ge,Ie.data)}}}else{if(ce=T.mipmaps,ot&&It){ce.length>0&&Oe++;const _e=Xe(Ve[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,pt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ee){ot?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ve[_e].width,Ve[_e].height,tt,Ge,Ve[_e].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,Ve[_e].width,Ve[_e].height,0,tt,Ge,Ve[_e].data);for(let ze=0;ze<ce.length;ze++){const st=ce[ze].image[_e].image;ot?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,0,0,st.width,st.height,tt,Ge,st.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,pt,st.width,st.height,0,tt,Ge,st.data)}}else{ot?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,tt,Ge,Ve[_e]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,tt,Ge,Ve[_e]);for(let ze=0;ze<ce.length;ze++){const Ie=ce[ze];ot?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,0,0,tt,Ge,Ie.image[_e]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,pt,tt,Ge,Ie.image[_e])}}}S(T)&&x(o.TEXTURE_CUBE_MAP),me.__version=ye.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pe(L,T,ne,ge,ye,me){const qe=f.convert(ne.format,ne.colorSpace),Le=f.convert(ne.type),Pe=z(ne.internalFormat,qe,Le,ne.colorSpace),mt=s.get(T),Ee=s.get(ne);if(Ee.__renderTarget=T,!mt.__hasExternalTextures){const Ve=Math.max(1,T.width>>me),Je=Math.max(1,T.height>>me);ye===o.TEXTURE_3D||ye===o.TEXTURE_2D_ARRAY?a.texImage3D(ye,me,Pe,Ve,Je,T.depth,0,qe,Le,null):a.texImage2D(ye,me,Pe,Ve,Je,0,qe,Le,null)}a.bindFramebuffer(o.FRAMEBUFFER,L),Ke(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,ye,Ee.__webglTexture,0,at(T)):(ye===o.TEXTURE_2D||ye>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,ye,Ee.__webglTexture,me),a.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(L,T,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const ge=T.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,me=D(T.stencilBuffer,ye),qe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=at(T);Ke(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Le,me,T.width,T.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,me,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,me,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,L)}else{const ge=T.textures;for(let ye=0;ye<ge.length;ye++){const me=ge[ye],qe=f.convert(me.format,me.colorSpace),Le=f.convert(me.type),Pe=z(me.internalFormat,qe,Le,me.colorSpace),mt=at(T);ne&&Ke(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,Pe,T.width,T.height):Ke(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt,Pe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Pe,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ye=ge.__webglTexture,me=at(T);if(T.depthTexture.format===Qs)Ke(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0);else if(T.depthTexture.format===io)Ke(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function ke(L){const T=s.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=ge}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,L)}else if(ne){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=o.createRenderbuffer(),ue(T.__webglDepthbuffer[ge],L,!1);else{const ye=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,me),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,me)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ue(T.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ye),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ye)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Ne(L,T,ne){const ge=s.get(L);T!==void 0&&pe(ge.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&ke(L)}function Re(L){const T=L.texture,ne=s.get(L),ge=s.get(T);L.addEventListener("dispose",I);const ye=L.textures,me=L.isWebGLCubeRenderTarget===!0,qe=ye.length>1;if(qe||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=T.version,d.memory.textures++),me){ne.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[Le]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)ne.__webglFramebuffer[Le][Pe]=o.createFramebuffer()}else ne.__webglFramebuffer[Le]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)ne.__webglFramebuffer[Le]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Le=0,Pe=ye.length;Le<Pe;Le++){const mt=s.get(ye[Le]);mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Ke(L)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Le=0;Le<ye.length;Le++){const Pe=ye[Le];ne.__webglColorRenderbuffer[Le]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[Le]);const mt=f.convert(Pe.format,Pe.colorSpace),Ee=f.convert(Pe.type),Ve=z(Pe.internalFormat,mt,Ee,Pe.colorSpace,L.isXRRenderTarget===!0),Je=at(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Je,Ve,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Le])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),ue(ne.__webglDepthRenderbuffer,L,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(me){a.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),et(o.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)pe(ne.__webglFramebuffer[Le][Pe],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Pe);else pe(ne.__webglFramebuffer[Le],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(qe){for(let Le=0,Pe=ye.length;Le<Pe;Le++){const mt=ye[Le],Ee=s.get(mt);a.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),et(o.TEXTURE_2D,mt),pe(ne.__webglFramebuffer,L,mt,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,0),S(mt)&&x(o.TEXTURE_2D)}a.unbindTexture()}else{let Le=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Le=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Le,ge.__webglTexture),et(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)pe(ne.__webglFramebuffer[Pe],L,T,o.COLOR_ATTACHMENT0,Le,Pe);else pe(ne.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Le,0);S(T)&&x(Le),a.unbindTexture()}L.depthBuffer&&ke(L)}function Be(L){const T=L.textures;for(let ne=0,ge=T.length;ne<ge;ne++){const ye=T[ne];if(S(ye)){const me=O(L),qe=s.get(ye).__webglTexture;a.bindTexture(me,qe),x(me),a.unbindTexture()}}}const rt=[],V=[];function dn(L){if(L.samples>0){if(Ke(L)===!1){const T=L.textures,ne=L.width,ge=L.height;let ye=o.COLOR_BUFFER_BIT;const me=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=s.get(L),Le=T.length>1;if(Le)for(let Pe=0;Pe<T.length;Pe++)a.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=o.STENCIL_BUFFER_BIT)),Le){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Pe]);const mt=s.get(T[Pe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,mt,0)}o.blitFramebuffer(0,0,ne,ge,0,0,ne,ge,ye,o.NEAREST),p===!0&&(rt.length=0,V.length=0,rt.push(o.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(rt.push(me),V.push(me),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,V)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,rt))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Le)for(let Pe=0;Pe<T.length;Pe++){a.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Pe]);const mt=s.get(T[Pe]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.TEXTURE_2D,mt,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function at(L){return Math.min(c.maxSamples,L.samples)}function Ke(L){const T=s.get(L);return L.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(L){const T=d.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function xt(L,T){const ne=L.colorSpace,ge=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==ao&&ne!==rr&&(Nt.getTransfer(ne)===Ft?(ge!==Ui||ye!==Ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),T}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(v.width=L.naturalWidth||L.width,v.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(v.width=L.displayWidth,v.height=L.displayHeight):(v.width=L.width,v.height=L.height),v}this.allocateTextureUnit=oe,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=q,this.setTexture3D=ae,this.setTextureCube=Q,this.rebindTextures=Ne,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ke}function BA(o,n){function a(s,c=rr){let f;const d=Nt.getTransfer(c);if(s===Ea)return o.UNSIGNED_BYTE;if(s===Up)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Lp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===hx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===fx)return o.BYTE;if(s===dx)return o.SHORT;if(s===ul)return o.UNSIGNED_SHORT;if(s===Dp)return o.INT;if(s===qr)return o.UNSIGNED_INT;if(s===xa)return o.FLOAT;if(s===fl)return o.HALF_FLOAT;if(s===px)return o.ALPHA;if(s===mx)return o.RGB;if(s===Ui)return o.RGBA;if(s===gx)return o.LUMINANCE;if(s===vx)return o.LUMINANCE_ALPHA;if(s===Qs)return o.DEPTH_COMPONENT;if(s===io)return o.DEPTH_STENCIL;if(s===_x)return o.RED;if(s===Op)return o.RED_INTEGER;if(s===xx)return o.RG;if(s===zp)return o.RG_INTEGER;if(s===Pp)return o.RGBA_INTEGER;if(s===hu||s===pu||s===mu||s===gu)if(d===Ft)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===hu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===hu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===tp||s===np||s===ip)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===ep)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===np)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ip)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ap||s===rp||s===sp)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===ap||s===rp)return d===Ft?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===sp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===op||s===lp||s===cp||s===up||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp||s===yp)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===op)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===up)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_p)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vu||s===Sp||s===Mp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===vu)return d===Ft?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yx||s===Ep||s===bp||s===Tp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===vu)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Ep)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===no?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a,s){if(this.texture===null){const c=new Vn,f=n.properties.get(c);f.__webglTexture=a.texture,(a.depthNear!==s.depthNear||a.depthFar!==s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new cr({vertexShader:FA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Sa(new vl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends so{constructor(n,a){super();const s=this;let c=null,f=1,d=null,h="local-floor",p=1,v=null,_=null,g=null,y=null,M=null,A=null;const N=new GA,S=a.getContextAttributes();let x=null,O=null;const z=[],D=[],j=new Lt;let F=null;const I=new xi;I.viewport=new rn;const B=new xi;B.viewport=new rn;const U=[I,B],C=new l1;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let Z=z[R];return Z===void 0&&(Z=new wh,z[R]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(R){let Z=z[R];return Z===void 0&&(Z=new wh,z[R]=Z),Z.getGripSpace()},this.getHand=function(R){let Z=z[R];return Z===void 0&&(Z=new wh,z[R]=Z),Z.getHandSpace()};function oe(R){const Z=D.indexOf(R.inputSource);if(Z===-1)return;const pe=z[Z];pe!==void 0&&(pe.update(R.inputSource,R.frame,v||d),pe.dispatchEvent({type:R.type,data:R.inputSource}))}function ve(){c.removeEventListener("select",oe),c.removeEventListener("selectstart",oe),c.removeEventListener("selectend",oe),c.removeEventListener("squeeze",oe),c.removeEventListener("squeezestart",oe),c.removeEventListener("squeezeend",oe),c.removeEventListener("end",ve),c.removeEventListener("inputsourceschange",he);for(let R=0;R<z.length;R++){const Z=D[R];Z!==null&&(D[R]=null,z[R].disconnect(Z))}G=null,le=null,N.reset(),n.setRenderTarget(x),M=null,y=null,g=null,c=null,O=null,ht.stop(),s.isPresenting=!1,n.setPixelRatio(F),n.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){f=R,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){h=R,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||d},this.setReferenceSpace=function(R){v=R},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g},this.getFrame=function(){return A},this.getSession=function(){return c},this.setSession=async function(R){if(c=R,c!==null){if(x=n.getRenderTarget(),c.addEventListener("select",oe),c.addEventListener("selectstart",oe),c.addEventListener("selectend",oe),c.addEventListener("squeeze",oe),c.addEventListener("squeezestart",oe),c.addEventListener("squeezeend",oe),c.addEventListener("end",ve),c.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await a.makeXRCompatible(),F=n.getPixelRatio(),n.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ue=null,Te=null;S.depth&&(Te=S.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,pe=S.stencil?io:Qs,ue=S.stencil?no:qr);const ke={colorFormat:a.RGBA8,depthFormat:Te,scaleFactor:f};g=new XRWebGLBinding(c,a),y=g.createProjectionLayer(ke),c.updateRenderState({layers:[y]}),n.setPixelRatio(1),n.setSize(y.textureWidth,y.textureHeight,!1),O=new Yr(y.textureWidth,y.textureHeight,{format:Ui,type:Ea,depthTexture:new Ox(y.textureWidth,y.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:n.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,a,pe),c.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Yr(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:Ea,colorSpace:n.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),v=null,d=await c.requestReferenceSpace(h),ht.setContext(c),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return N.getDepthTexture()};function he(R){for(let Z=0;Z<R.removed.length;Z++){const pe=R.removed[Z],ue=D.indexOf(pe);ue>=0&&(D[ue]=null,z[ue].disconnect(pe))}for(let Z=0;Z<R.added.length;Z++){const pe=R.added[Z];let ue=D.indexOf(pe);if(ue===-1){for(let ke=0;ke<z.length;ke++)if(ke>=D.length){D.push(pe),ue=ke;break}else if(D[ke]===null){D[ke]=pe,ue=ke;break}if(ue===-1)break}const Te=z[ue];Te&&Te.connect(pe)}}const q=new te,ae=new te;function Q(R,Z,pe){q.setFromMatrixPosition(Z.matrixWorld),ae.setFromMatrixPosition(pe.matrixWorld);const ue=q.distanceTo(ae),Te=Z.projectionMatrix.elements,ke=pe.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),Re=Te[14]/(Te[10]+1),Be=(Te[9]+1)/Te[5],rt=(Te[9]-1)/Te[5],V=(Te[8]-1)/Te[0],dn=(ke[8]+1)/ke[0],at=Ne*V,Ke=Ne*dn,Ce=ue/(-V+dn),xt=Ce*-V;if(Z.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(xt),R.translateZ(Ce),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),Te[10]===-1)R.projectionMatrix.copy(Z.projectionMatrix),R.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Xe=Ne+Ce,L=Re+Ce,T=at-xt,ne=Ke+(ue-xt),ge=Be*Re/L*Xe,ye=rt*Re/L*Xe;R.projectionMatrix.makePerspective(T,ne,ge,ye,Xe,L),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function xe(R,Z){Z===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(Z.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(c===null)return;let Z=R.near,pe=R.far;N.texture!==null&&(N.depthNear>0&&(Z=N.depthNear),N.depthFar>0&&(pe=N.depthFar)),C.near=B.near=I.near=Z,C.far=B.far=I.far=pe,(G!==C.near||le!==C.far)&&(c.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,le=C.far),I.layers.mask=R.layers.mask|2,B.layers.mask=R.layers.mask|4,C.layers.mask=I.layers.mask|B.layers.mask;const ue=R.parent,Te=C.cameras;xe(C,ue);for(let ke=0;ke<Te.length;ke++)xe(Te[ke],ue);Te.length===2?Q(C,I,B):C.projectionMatrix.copy(I.projectionMatrix),Se(R,C,ue)};function Se(R,Z,pe){pe===null?R.matrix.copy(Z.matrixWorld):(R.matrix.copy(pe.matrixWorld),R.matrix.invert(),R.matrix.multiply(Z.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(Z.projectionMatrix),R.projectionMatrixInverse.copy(Z.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Ap*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(R){p=R,y!==null&&(y.fixedFoveation=R),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=R)},this.hasDepthSensing=function(){return N.texture!==null},this.getDepthSensingMesh=function(){return N.getMesh(C)};let Fe=null;function et(R,Z){if(_=Z.getViewerPose(v||d),A=Z,_!==null){const pe=_.views;M!==null&&(n.setRenderTargetFramebuffer(O,M.framebuffer),n.setRenderTarget(O));let ue=!1;pe.length!==C.cameras.length&&(C.cameras.length=0,ue=!0);for(let Ne=0;Ne<pe.length;Ne++){const Re=pe[Ne];let Be=null;if(M!==null)Be=M.getViewport(Re);else{const V=g.getViewSubImage(y,Re);Be=V.viewport,Ne===0&&(n.setRenderTargetTextures(O,V.colorTexture,y.ignoreDepthValues?void 0:V.depthStencilTexture),n.setRenderTarget(O))}let rt=U[Ne];rt===void 0&&(rt=new xi,rt.layers.enable(Ne),rt.viewport=new rn,U[Ne]=rt),rt.matrix.fromArray(Re.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Re.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Be.x,Be.y,Be.width,Be.height),Ne===0&&(C.matrix.copy(rt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ue===!0&&C.cameras.push(rt)}const Te=c.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&g){const Ne=g.getDepthInformation(pe[0]);Ne&&Ne.isValid&&Ne.texture&&N.init(n,Ne,c.renderState)}}for(let pe=0;pe<z.length;pe++){const ue=D[pe],Te=z[pe];ue!==null&&Te!==void 0&&Te.update(ue,Z,v||d)}Fe&&Fe(R,Z),Z.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Z}),A=null}const ht=new zx;ht.setAnimationLoop(et),this.setAnimationLoop=function(R){Fe=R},this.dispose=function(){}}}const Br=new ba,kA=new tn;function jA(o,n){function a(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,wx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function c(S,x,O,z,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),g(S,x)):x.isMeshPhongMaterial?(f(S,x),_(S,x)):x.isMeshStandardMaterial?(f(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,D)):x.isMeshMatcapMaterial?(f(S,x),A(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),N(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?p(S,x,O,z):x.isSpriteMaterial?v(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,a(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Kn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,a(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Kn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,a(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,a(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const O=n.get(x),z=O.envMap,D=O.envMapRotation;z&&(S.envMap.value=z,Br.copy(D),Br.x*=-1,Br.y*=-1,Br.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),S.envMapRotation.value.setFromMatrix4(kA.makeRotationFromEuler(Br)),S.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,O,z){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*O,S.scale.value=z*.5,x.map&&(S.map.value=x.map,a(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,O){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,x){x.matcap&&(S.matcap.value=x.matcap)}function N(S,x){const O=n.get(x).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function XA(o,n,a,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,z){const D=z.program;s.uniformBlockBinding(O,D)}function v(O,z){let D=c[O.id];D===void 0&&(A(O),D=_(O),c[O.id]=D,O.addEventListener("dispose",S));const j=z.program;s.updateUBOMapping(O,j);const F=n.render.frame;f[O.id]!==F&&(y(O),f[O.id]=F)}function _(O){const z=g();O.__bindingPointIndex=z;const D=o.createBuffer(),j=O.__size,F=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,j,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function g(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const z=c[O.id],D=O.uniforms,j=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let F=0,I=D.length;F<I;F++){const B=Array.isArray(D[F])?D[F]:[D[F]];for(let U=0,C=B.length;U<C;U++){const G=B[U];if(M(G,F,U,j)===!0){const le=G.__offset,oe=Array.isArray(G.value)?G.value:[G.value];let ve=0;for(let he=0;he<oe.length;he++){const q=oe[he],ae=N(q);typeof q=="number"||typeof q=="boolean"?(G.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,le+ve,G.__data)):q.isMatrix3?(G.__data[0]=q.elements[0],G.__data[1]=q.elements[1],G.__data[2]=q.elements[2],G.__data[3]=0,G.__data[4]=q.elements[3],G.__data[5]=q.elements[4],G.__data[6]=q.elements[5],G.__data[7]=0,G.__data[8]=q.elements[6],G.__data[9]=q.elements[7],G.__data[10]=q.elements[8],G.__data[11]=0):(q.toArray(G.__data,ve),ve+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,z,D,j){const F=O.value,I=z+"_"+D;if(j[I]===void 0)return typeof F=="number"||typeof F=="boolean"?j[I]=F:j[I]=F.clone(),!0;{const B=j[I];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return j[I]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function A(O){const z=O.uniforms;let D=0;const j=16;for(let I=0,B=z.length;I<B;I++){const U=Array.isArray(z[I])?z[I]:[z[I]];for(let C=0,G=U.length;C<G;C++){const le=U[C],oe=Array.isArray(le.value)?le.value:[le.value];for(let ve=0,he=oe.length;ve<he;ve++){const q=oe[ve],ae=N(q),Q=D%j,xe=Q%ae.boundary,Se=Q+xe;D+=xe,Se!==0&&j-Se<ae.storage&&(D+=j-Se),le.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=D,D+=ae.storage}}}const F=D%j;return F>0&&(D+=j-F),O.__size=D,O.__cache={},this}function N(O){const z={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(z.boundary=4,z.storage=4):O.isVector2?(z.boundary=8,z.storage=8):O.isVector3||O.isColor?(z.boundary=16,z.storage=12):O.isVector4?(z.boundary=16,z.storage=16):O.isMatrix3?(z.boundary=48,z.storage=48):O.isMatrix4?(z.boundary=64,z.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),z}function S(O){const z=O.target;z.removeEventListener("dispose",S);const D=d.indexOf(z.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(c[z.id]),delete c[z.id],delete f[z.id]}function x(){for(const O in c)o.deleteBuffer(c[O]);d=[],c={},f={}}return{bind:p,update:v,dispose:x}}class qA{constructor(n={}){const{canvas:a=TE(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:v=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),N=new Int32Array(4);let S=null,x=null;const O=[],z=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=or,this.toneMappingExposure=1;const D=this;let j=!1,F=0,I=0,B=null,U=-1,C=null;const G=new rn,le=new rn;let oe=null;const ve=new Rt(0);let he=0,q=a.width,ae=a.height,Q=1,xe=null,Se=null;const Fe=new rn(0,0,q,ae),et=new rn(0,0,q,ae);let ht=!1;const R=new Ux;let Z=!1,pe=!1;this.transmissionResolutionScale=1;const ue=new tn,Te=new tn,ke=new te,Ne=new rn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function rt(){return B===null?Q:1}let V=s;function dn(w,K){return a.getContext(w,K)}try{const w={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:v,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Np}`),a.addEventListener("webglcontextlost",_e,!1),a.addEventListener("webglcontextrestored",ze,!1),a.addEventListener("webglcontextcreationerror",Ie,!1),V===null){const K="webgl2";if(V=dn(K,w),V===null)throw dn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let at,Ke,Ce,xt,Xe,L,T,ne,ge,ye,me,qe,Le,Pe,mt,Ee,Ve,Je,tt,Ge,pt,ot,It,k;function Oe(){at=new n2(V),at.init(),ot=new BA(V,at),Ke=new ZT(V,at,n,ot),Ce=new PA(V,at),Ke.reverseDepthBuffer&&y&&Ce.buffers.depth.setReversed(!0),xt=new r2(V),Xe=new EA,L=new IA(V,at,Ce,Xe,Ke,ot,xt),T=new QT(D),ne=new t2(D),ge=new f1(V),It=new YT(V,ge),ye=new i2(V,ge,xt,It),me=new o2(V,ye,ge,xt),tt=new s2(V,Ke,L),Ee=new KT(Xe),qe=new MA(D,T,ne,at,Ke,It,Ee),Le=new jA(D,Xe),Pe=new TA,mt=new DA(at),Je=new qT(D,T,ne,Ce,me,M,p),Ve=new OA(D,me,Ke),k=new XA(V,xt,Ke,Ce),Ge=new WT(V,at,xt),pt=new a2(V,at,xt),xt.programs=qe.programs,D.capabilities=Ke,D.extensions=at,D.properties=Xe,D.renderLists=Pe,D.shadowMap=Ve,D.state=Ce,D.info=xt}Oe();const ce=new VA(D,V);this.xr=ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(q,ae,!1))},this.getSize=function(w){return w.set(q,ae)},this.setSize=function(w,K,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ae=K,a.width=Math.floor(w*Q),a.height=Math.floor(K*Q),re===!0&&(a.style.width=w+"px",a.style.height=K+"px"),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(q*Q,ae*Q).floor()},this.setDrawingBufferSize=function(w,K,re){q=w,ae=K,Q=re,a.width=Math.floor(w*re),a.height=Math.floor(K*re),this.setViewport(0,0,w,K)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(Fe)},this.setViewport=function(w,K,re,se){w.isVector4?Fe.set(w.x,w.y,w.z,w.w):Fe.set(w,K,re,se),Ce.viewport(G.copy(Fe).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(et)},this.setScissor=function(w,K,re,se){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,K,re,se),Ce.scissor(le.copy(et).multiplyScalar(Q).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){Ce.setScissorTest(ht=w)},this.setOpaqueSort=function(w){xe=w},this.setTransparentSort=function(w){Se=w},this.getClearColor=function(w){return w.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,re=!0){let se=0;if(w){let J=!1;if(B!==null){const Me=B.texture.format;J=Me===Pp||Me===zp||Me===Op}if(J){const Me=B.texture.type,Ae=Me===Ea||Me===qr||Me===ul||Me===no||Me===Up||Me===Lp,be=Je.getClearColor(),De=Je.getClearAlpha(),Qe=be.r,nt=be.g,Ze=be.b;Ae?(A[0]=Qe,A[1]=nt,A[2]=Ze,A[3]=De,V.clearBufferuiv(V.COLOR,0,A)):(N[0]=Qe,N[1]=nt,N[2]=Ze,N[3]=De,V.clearBufferiv(V.COLOR,0,N))}else se|=V.COLOR_BUFFER_BIT}K&&(se|=V.DEPTH_BUFFER_BIT),re&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",_e,!1),a.removeEventListener("webglcontextrestored",ze,!1),a.removeEventListener("webglcontextcreationerror",Ie,!1),Je.dispose(),Pe.dispose(),mt.dispose(),Xe.dispose(),T.dispose(),ne.dispose(),me.dispose(),It.dispose(),k.dispose(),qe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Un),ce.removeEventListener("sessionend",_l),Wi.stop()};function _e(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const w=xt.autoReset,K=Ve.enabled,re=Ve.autoUpdate,se=Ve.needsUpdate,J=Ve.type;Oe(),xt.autoReset=w,Ve.enabled=K,Ve.autoUpdate=re,Ve.needsUpdate=se,Ve.type=J}function Ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){const K=w.target;K.removeEventListener("dispose",st),Zt(K)}function Zt(w){vn(w),Xe.remove(w)}function vn(w){const K=Xe.get(w).programs;K!==void 0&&(K.forEach(function(re){qe.releaseProgram(re)}),w.isShaderMaterial&&qe.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,re,se,J,Me){K===null&&(K=Re);const Ae=J.isMesh&&J.matrixWorld.determinant()<0,be=Cu(w,K,re,se,J);Ce.setMaterial(se,Ae);let De=re.index,Qe=1;if(se.wireframe===!0){if(De=ye.getWireframeAttribute(re),De===void 0)return;Qe=2}const nt=re.drawRange,Ze=re.attributes.position;let bt=nt.start*Qe,Ct=(nt.start+nt.count)*Qe;Me!==null&&(bt=Math.max(bt,Me.start*Qe),Ct=Math.min(Ct,(Me.start+Me.count)*Qe)),De!==null?(bt=Math.max(bt,0),Ct=Math.min(Ct,De.count)):Ze!=null&&(bt=Math.max(bt,0),Ct=Math.min(Ct,Ze.count));const kt=Ct-bt;if(kt<0||kt===1/0)return;It.setup(J,se,be,re,De);let Ht,gt=Ge;if(De!==null&&(Ht=ge.get(De),gt=pt,gt.setIndex(Ht)),J.isMesh)se.wireframe===!0?(Ce.setLineWidth(se.wireframeLinewidth*rt()),gt.setMode(V.LINES)):gt.setMode(V.TRIANGLES);else if(J.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),Ce.setLineWidth(Ye*rt()),J.isLineSegments?gt.setMode(V.LINES):J.isLineLoop?gt.setMode(V.LINE_LOOP):gt.setMode(V.LINE_STRIP)}else J.isPoints?gt.setMode(V.POINTS):J.isSprite&&gt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ye=J._multiDrawStarts,Kt=J._multiDrawCounts,yt=J._multiDrawCount,xn=De?ge.get(De).bytesPerElement:1,Yt=Xe.get(se).currentProgram.getUniforms();for(let Ln=0;Ln<yt;Ln++)Yt.setValue(V,"_gl_DrawID",Ln),gt.render(Ye[Ln]/xn,Kt[Ln])}else if(J.isInstancedMesh)gt.renderInstances(bt,kt,J.count);else if(re.isInstancedBufferGeometry){const Ye=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Kt=Math.min(re.instanceCount,Ye);gt.renderInstances(bt,kt,Kt)}else gt.render(bt,kt)};function Et(w,K,re){w.transparent===!0&&w.side===_a&&w.forceSinglePass===!1?(w.side=Kn,w.needsUpdate=!0,Ki(w,K,re),w.side=lr,w.needsUpdate=!0,Ki(w,K,re),w.side=_a):Ki(w,K,re)}this.compile=function(w,K,re=null){re===null&&(re=w),x=mt.get(re),x.init(K),z.push(x),re.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),w!==re&&w.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const se=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Me=J.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const be=Me[Ae];Et(be,re,J),se.add(be)}else Et(Me,re,J),se.add(Me)}),x=z.pop(),se},this.compileAsync=function(w,K,re=null){const se=this.compile(w,K,re);return new Promise(J=>{function Me(){if(se.forEach(function(Ae){Xe.get(Ae).currentProgram.isReady()&&se.delete(Ae)}),se.size===0){J(w);return}setTimeout(Me,10)}at.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let qt=null;function _n(w){qt&&qt(w)}function Un(){Wi.stop()}function _l(){Wi.start()}const Wi=new zx;Wi.setAnimationLoop(_n),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(w){qt=w,ce.setAnimationLoop(w),w===null?Wi.stop():Wi.start()},ce.addEventListener("sessionstart",Un),ce.addEventListener("sessionend",_l),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(K),K=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,K,B),x=mt.get(w,z.length),x.init(K),z.push(x),Te.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),R.setFromProjectionMatrix(Te),pe=this.localClippingEnabled,Z=Ee.init(this.clippingPlanes,pe),S=Pe.get(w,O.length),S.init(),O.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Me=D.xr.getDepthSensingMesh();Me!==null&&co(Me,K,-1/0,D.sortObjects)}co(w,K,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(xe,Se),Be=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Be&&Je.addToRenderList(S,w),this.info.render.frame++,Z===!0&&Ee.beginShadows();const re=x.state.shadowsArray;Ve.render(re,w,K),Z===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,J=S.transmissive;if(x.setupLights(),K.isArrayCamera){const Me=K.cameras;if(J.length>0)for(let Ae=0,be=Me.length;Ae<be;Ae++){const De=Me[Ae];fr(se,J,w,De)}Be&&Je.render(w);for(let Ae=0,be=Me.length;Ae<be;Ae++){const De=Me[Ae];ur(S,w,De,De.viewport)}}else J.length>0&&fr(se,J,w,K),Be&&Je.render(w),ur(S,w,K);B!==null&&I===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),w.isScene===!0&&w.onAfterRender(D,w,K),It.resetDefaultState(),U=-1,C=null,z.pop(),z.length>0?(x=z[z.length-1],Z===!0&&Ee.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function co(w,K,re,se){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||R.intersectsSprite(w)){se&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Ae=me.update(w),be=w.material;be.visible&&S.push(w,Ae,be,re,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||R.intersectsObject(w))){const Ae=me.update(w),be=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ne.copy(Ae.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(be)){const De=Ae.groups;for(let Qe=0,nt=De.length;Qe<nt;Qe++){const Ze=De[Qe],bt=be[Ze.materialIndex];bt&&bt.visible&&S.push(w,Ae,bt,re,Ne.z,Ze)}}else be.visible&&S.push(w,Ae,be,re,Ne.z,null)}}const Me=w.children;for(let Ae=0,be=Me.length;Ae<be;Ae++)co(Me[Ae],K,re,se)}function ur(w,K,re,se){const J=w.opaque,Me=w.transmissive,Ae=w.transparent;x.setupLightsView(re),Z===!0&&Ee.setGlobalState(D.clippingPlanes,re),se&&Ce.viewport(G.copy(se)),J.length>0&&Zi(J,K,re),Me.length>0&&Zi(Me,K,re),Ae.length>0&&Zi(Ae,K,re),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function fr(w,K,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new Yr(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?fl:Ea,minFilter:Xr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Me=x.state.transmissionRenderTarget[se.id],Ae=se.viewport||G;Me.setSize(Ae.z*D.transmissionResolutionScale,Ae.w*D.transmissionResolutionScale);const be=D.getRenderTarget();D.setRenderTarget(Me),D.getClearColor(ve),he=D.getClearAlpha(),he<1&&D.setClearColor(16777215,.5),D.clear(),Be&&Je.render(re);const De=D.toneMapping;D.toneMapping=or;const Qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),Z===!0&&Ee.setGlobalState(D.clippingPlanes,se),Zi(w,re,se),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),at.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ze=0,bt=K.length;Ze<bt;Ze++){const Ct=K[Ze],kt=Ct.object,Ht=Ct.geometry,gt=Ct.material,Ye=Ct.group;if(gt.side===_a&&kt.layers.test(se.layers)){const Kt=gt.side;gt.side=Kn,gt.needsUpdate=!0,Oi(kt,re,se,Ht,gt,Ye),gt.side=Kt,gt.needsUpdate=!0,nt=!0}}nt===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}D.setRenderTarget(be),D.setClearColor(ve,he),Qe!==void 0&&(se.viewport=Qe),D.toneMapping=De}function Zi(w,K,re){const se=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Me=w.length;J<Me;J++){const Ae=w[J],be=Ae.object,De=Ae.geometry,Qe=se===null?Ae.material:se,nt=Ae.group;be.layers.test(re.layers)&&Oi(be,K,re,De,Qe,nt)}}function Oi(w,K,re,se,J,Me){w.onBeforeRender(D,K,re,se,J,Me),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(D,K,re,se,w,Me),J.transparent===!0&&J.side===_a&&J.forceSinglePass===!1?(J.side=Kn,J.needsUpdate=!0,D.renderBufferDirect(re,K,se,J,w,Me),J.side=lr,J.needsUpdate=!0,D.renderBufferDirect(re,K,se,J,w,Me),J.side=_a):D.renderBufferDirect(re,K,se,J,w,Me),w.onAfterRender(D,K,re,se,J,Me)}function Ki(w,K,re){K.isScene!==!0&&(K=Re);const se=Xe.get(w),J=x.state.lights,Me=x.state.shadowsArray,Ae=J.state.version,be=qe.getParameters(w,J.state,Me,K,re),De=qe.getProgramCacheKey(be);let Qe=se.programs;se.environment=w.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(w.isMeshStandardMaterial?ne:T).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Qe===void 0&&(w.addEventListener("dispose",st),Qe=new Map,se.programs=Qe);let nt=Qe.get(De);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===Ae)return uo(w,be),nt}else be.uniforms=qe.getUniforms(w),w.onBeforeCompile(be,D),nt=qe.acquireProgram(be,De),Qe.set(De,nt),se.uniforms=be.uniforms;const Ze=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=Ee.uniform),uo(w,be),se.needsLights=fo(w),se.lightsStateVersion=Ae,se.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function Ta(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=xu.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function uo(w,K){const re=Xe.get(w);re.outputColorSpace=K.outputColorSpace,re.batching=K.batching,re.batchingColor=K.batchingColor,re.instancing=K.instancing,re.instancingColor=K.instancingColor,re.instancingMorph=K.instancingMorph,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function Cu(w,K,re,se,J){K.isScene!==!0&&(K=Re),L.resetTextureUnits();const Me=K.fog,Ae=se.isMeshStandardMaterial?K.environment:null,be=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ao,De=(se.isMeshStandardMaterial?ne:T).get(se.envMap||Ae),Qe=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ze=!!re.morphAttributes.position,bt=!!re.morphAttributes.normal,Ct=!!re.morphAttributes.color;let kt=or;se.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(kt=D.toneMapping);const Ht=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,gt=Ht!==void 0?Ht.length:0,Ye=Xe.get(se),Kt=x.state.lights;if(Z===!0&&(pe===!0||w!==C)){const bn=w===C&&se.id===U;Ee.setState(se,w,bn)}let yt=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Kt.state.version||Ye.outputColorSpace!==be||J.isBatchedMesh&&Ye.batching===!1||!J.isBatchedMesh&&Ye.batching===!0||J.isBatchedMesh&&Ye.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ye.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ye.instancing===!1||!J.isInstancedMesh&&Ye.instancing===!0||J.isSkinnedMesh&&Ye.skinning===!1||!J.isSkinnedMesh&&Ye.skinning===!0||J.isInstancedMesh&&Ye.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ye.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ye.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ye.instancingMorph===!1&&J.morphTexture!==null||Ye.envMap!==De||se.fog===!0&&Ye.fog!==Me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==Qe||Ye.vertexTangents!==nt||Ye.morphTargets!==Ze||Ye.morphNormals!==bt||Ye.morphColors!==Ct||Ye.toneMapping!==kt||Ye.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,Ye.__version=se.version);let xn=Ye.currentProgram;yt===!0&&(xn=Ki(se,K,J));let Yt=!1,Ln=!1,Aa=!1;const Gt=xn.getUniforms(),sn=Ye.uniforms;if(Ce.useProgram(xn.program)&&(Yt=!0,Ln=!0,Aa=!0),se.id!==U&&(U=se.id,Ln=!0),Yt||C!==w){Ce.buffers.depth.getReversed()?(ue.copy(w.projectionMatrix),RE(ue),CE(ue),Gt.setValue(V,"projectionMatrix",ue)):Gt.setValue(V,"projectionMatrix",w.projectionMatrix),Gt.setValue(V,"viewMatrix",w.matrixWorldInverse);const Tn=Gt.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,ke.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&Gt.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Ln=!0,Aa=!0)}if(J.isSkinnedMesh){Gt.setOptional(V,J,"bindMatrix"),Gt.setOptional(V,J,"bindMatrixInverse");const bn=J.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Gt.setValue(V,"boneTexture",bn.boneTexture,L))}J.isBatchedMesh&&(Gt.setOptional(V,J,"batchingTexture"),Gt.setValue(V,"batchingTexture",J._matricesTexture,L),Gt.setOptional(V,J,"batchingIdTexture"),Gt.setValue(V,"batchingIdTexture",J._indirectTexture,L),Gt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Gt.setValue(V,"batchingColorTexture",J._colorsTexture,L));const hn=re.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&tt.update(J,re,xn),(Ln||Ye.receiveShadow!==J.receiveShadow)&&(Ye.receiveShadow=J.receiveShadow,Gt.setValue(V,"receiveShadow",J.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(sn.envMap.value=De,sn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&(sn.envMapIntensity.value=K.environmentIntensity),Ln&&(Gt.setValue(V,"toneMappingExposure",D.toneMappingExposure),Ye.needsLights&&xl(sn,Aa),Me&&se.fog===!0&&Le.refreshFogUniforms(sn,Me),Le.refreshMaterialUniforms(sn,se,Q,ae,x.state.transmissionRenderTarget[w.id]),xu.upload(V,Ta(Ye),sn,L)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(xu.upload(V,Ta(Ye),sn,L),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(V,"center",J.center),Gt.setValue(V,"modelViewMatrix",J.modelViewMatrix),Gt.setValue(V,"normalMatrix",J.normalMatrix),Gt.setValue(V,"modelMatrix",J.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const bn=se.uniformsGroups;for(let Tn=0,Zr=bn.length;Tn<Zr;Tn++){const Qi=bn[Tn];k.update(Qi,xn),k.bind(Qi,xn)}}return xn}function xl(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function fo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,K,re){Xe.get(w.texture).__webglTexture=K,Xe.get(w.depthTexture).__webglTexture=re;const se=Xe.get(w);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,K){const re=Xe.get(w);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0};const dr=V.createFramebuffer();this.setRenderTarget=function(w,K=0,re=0){B=w,F=K,I=re;let se=!0,J=null,Me=!1,Ae=!1;if(w){const De=Xe.get(w);if(De.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(V.FRAMEBUFFER,null),se=!1;else if(De.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(De.__hasExternalTextures)L.rebindTextures(w,Xe.get(w.texture).__webglTexture,Xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ze=w.depthTexture;if(De.__boundDepthTexture!==Ze){if(Ze!==null&&Xe.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ae=!0);const nt=Xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[K])?J=nt[K][re]:J=nt[K],Me=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?J=Xe.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?J=nt[re]:J=nt,G.copy(w.viewport),le.copy(w.scissor),oe=w.scissorTest}else G.copy(Fe).multiplyScalar(Q).floor(),le.copy(et).multiplyScalar(Q).floor(),oe=ht;if(re!==0&&(J=dr),Ce.bindFramebuffer(V.FRAMEBUFFER,J)&&se&&Ce.drawBuffers(w,J),Ce.viewport(G),Ce.scissor(le),Ce.setScissorTest(oe),Me){const De=Xe.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,De.__webglTexture,re)}else if(Ae){const De=Xe.get(w.texture),Qe=K;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,De.__webglTexture,re,Qe)}else if(w!==null&&re!==0){const De=Xe.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,re)}U=-1},this.readRenderTargetPixels=function(w,K,re,se,J,Me,Ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(be=be[Ae]),be){Ce.bindFramebuffer(V.FRAMEBUFFER,be);try{const De=w.texture,Qe=De.format,nt=De.type;if(!Ke.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-se&&re>=0&&re<=w.height-J&&V.readPixels(K,re,se,J,ot.convert(Qe),ot.convert(nt),Me)}finally{const De=B!==null?Xe.get(B).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,K,re,se,J,Me,Ae){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(be=be[Ae]),be){const De=w.texture,Qe=De.format,nt=De.type;if(!Ke.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=w.width-se&&re>=0&&re<=w.height-J){Ce.bindFramebuffer(V.FRAMEBUFFER,be);const Ze=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ze),V.bufferData(V.PIXEL_PACK_BUFFER,Me.byteLength,V.STREAM_READ),V.readPixels(K,re,se,J,ot.convert(Qe),ot.convert(nt),0);const bt=B!==null?Xe.get(B).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,bt);const Ct=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await AE(V,Ct,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ze),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Me),V.deleteBuffer(Ze),V.deleteSync(Ct),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,K=null,re=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1]);const se=Math.pow(2,-re),J=Math.floor(w.image.width*se),Me=Math.floor(w.image.height*se),Ae=K!==null?K.x:0,be=K!==null?K.y:0;L.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ae,be,J,Me),Ce.unbindTexture()};const wu=V.createFramebuffer(),yl=V.createFramebuffer();this.copyTextureToTexture=function(w,K,re=null,se=null,J=0,Me=null){w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,w=arguments[1],K=arguments[2],Me=arguments[3]||0,re=null),Me===null&&(J!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=J,J=0):Me=0);let Ae,be,De,Qe,nt,Ze,bt,Ct,kt;const Ht=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(re!==null)Ae=re.max.x-re.min.x,be=re.max.y-re.min.y,De=re.isBox3?re.max.z-re.min.z:1,Qe=re.min.x,nt=re.min.y,Ze=re.isBox3?re.min.z:0;else{const hn=Math.pow(2,-J);Ae=Math.floor(Ht.width*hn),be=Math.floor(Ht.height*hn),w.isDataArrayTexture?De=Ht.depth:w.isData3DTexture?De=Math.floor(Ht.depth*hn):De=1,Qe=0,nt=0,Ze=0}se!==null?(bt=se.x,Ct=se.y,kt=se.z):(bt=0,Ct=0,kt=0);const gt=ot.convert(K.format),Ye=ot.convert(K.type);let Kt;K.isData3DTexture?(L.setTexture3D(K,0),Kt=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(L.setTexture2DArray(K,0),Kt=V.TEXTURE_2D_ARRAY):(L.setTexture2D(K,0),Kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const yt=V.getParameter(V.UNPACK_ROW_LENGTH),xn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Yt=V.getParameter(V.UNPACK_SKIP_PIXELS),Ln=V.getParameter(V.UNPACK_SKIP_ROWS),Aa=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const Gt=w.isDataArrayTexture||w.isData3DTexture,sn=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const hn=Xe.get(w),bn=Xe.get(K),Tn=Xe.get(hn.__renderTarget),Zr=Xe.get(bn.__renderTarget);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let Qi=0;Qi<De;Qi++)Gt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(w).__webglTexture,J,Ze+Qi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(K).__webglTexture,Me,kt+Qi)),V.blitFramebuffer(Qe,nt,Ae,be,bt,Ct,Ae,be,V.DEPTH_BUFFER_BIT,V.NEAREST);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||Xe.has(w)){const hn=Xe.get(w),bn=Xe.get(K);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,wu),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,yl);for(let Tn=0;Tn<De;Tn++)Gt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,J,Ze+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,J),sn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Me,kt+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Me),J!==0?V.blitFramebuffer(Qe,nt,Ae,be,bt,Ct,Ae,be,V.COLOR_BUFFER_BIT,V.NEAREST):sn?V.copyTexSubImage3D(Kt,Me,bt,Ct,kt+Tn,Qe,nt,Ae,be):V.copyTexSubImage2D(Kt,Me,bt,Ct,Qe,nt,Ae,be);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else sn?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Kt,Me,bt,Ct,kt,Ae,be,De,gt,Ye,Ht.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(Kt,Me,bt,Ct,kt,Ae,be,De,gt,Ht.data):V.texSubImage3D(Kt,Me,bt,Ct,kt,Ae,be,De,gt,Ye,Ht):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Me,bt,Ct,Ae,be,gt,Ye,Ht.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Me,bt,Ct,Ht.width,Ht.height,gt,Ht.data):V.texSubImage2D(V.TEXTURE_2D,Me,bt,Ct,Ae,be,gt,Ye,Ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,yt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ln),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Aa),Me===0&&K.generateMipmaps&&V.generateMipmap(Kt),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,K,re=null,se=null,J=0){return w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,w=arguments[2],K=arguments[3],J=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,K,re,se,J)},this.initRenderTarget=function(w){Xe.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){F=0,I=0,B=null,Ce.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorspace=Nt._getDrawingBufferColorSpace(n),a.unpackColorSpace=Nt._getUnpackColorSpace()}}function YA(){const o=Wt.useRef(null);return Wt.useEffect(()=>{const n=o.current;if(!n)return;const a=new $E;a.fog=new Fp(329482,.018);const s=new xi(60,window.innerWidth/window.innerHeight,.1,1e3);s.position.set(0,0,25);const c=new qA({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(window.innerWidth,window.innerHeight),c.setClearColor(329482,1),n.appendChild(c.domElement);const f=1800,d=new Float32Array(f*3),h=new Float32Array(f*3),p=new Rt("#e0231c"),v=new Rt("#dfe7e0"),_=new Rt("#38423c");for(let R=0;R<f;R++){d[R*3]=(Math.random()-.5)*80,d[R*3+1]=(Math.random()-.5)*80,d[R*3+2]=(Math.random()-.5)*80;const Z=Math.random();let pe=v;Z<.15?pe=p:Z>.6&&(pe=_),h[R*3]=pe.r,h[R*3+1]=pe.g,h[R*3+2]=pe.b}const g=new Si;g.setAttribute("position",new yi(d,3)),g.setAttribute("color",new yi(h,3));const y=document.createElement("canvas");y.width=16,y.height=16;const M=y.getContext("2d"),A=M.createRadialGradient(8,8,0,8,8,8);A.addColorStop(0,"rgba(255,255,255,1)"),A.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=A,M.fillRect(0,0,16,16);const N=new a1(y),S=new Lx({size:.35,vertexColors:!0,map:N,transparent:!0,opacity:.75,blending:Hh,depthWrite:!1}),x=new i1(g,S);a.add(x);const O=new vl(60,60,24,24),z=new Lh(O),D=new _u({color:14673888,transparent:!0,opacity:.05}),j=new Uh(z,D);j.rotation.x=-Math.PI/2.5,j.position.y=-12,a.add(j);const F=new Tu(4,1),I=new Lh(F),B=new _u({color:14689052,transparent:!0,opacity:.12}),U=new Uh(I,B);U.position.set(16,5,-10),a.add(U);const C=new Tu(2.5,1),G=new Lh(C),le=new _u({color:13214282,transparent:!0,opacity:.15}),oe=new Uh(G,le);oe.position.set(-18,-8,-5),a.add(oe);let ve=0,he=0,q=0,ae=0;const Q=R=>{ve=(R.clientX-window.innerWidth/2)*8e-4,he=(R.clientY-window.innerHeight/2)*8e-4},xe=()=>{const R=window.scrollY;s.position.y=-R*.008,j.position.z=R*.005};window.addEventListener("mousemove",Q),window.addEventListener("scroll",xe);const Se=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Se);let Fe;const et=new c1,ht=()=>{Fe=requestAnimationFrame(ht);const R=et.getElapsedTime();q+=(ve-q)*.05,ae+=(he-ae)*.05,s.rotation.y=-q*.5,s.rotation.x=-ae*.5,x.rotation.y=R*.02,x.rotation.x=R*.01,j.rotation.z=R*.015,U.rotation.x=R*.15,U.rotation.y=R*.2,oe.rotation.x=-R*.1,oe.rotation.z=R*.15,c.render(a,s)};return ht(),()=>{window.removeEventListener("mousemove",Q),window.removeEventListener("scroll",xe),window.removeEventListener("resize",Se),cancelAnimationFrame(Fe),n.contains(c.domElement)&&n.removeChild(c.domElement),g.dispose(),S.dispose(),N.dispose(),O.dispose(),D.dispose(),F.dispose(),B.dispose(),c.dispose()}},[]),E.jsx("div",{ref:o,id:"gl",className:"fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#05070a]","aria-hidden":"true"})}function WA({onComplete:o}){const[n,a]=Wt.useState(0),[s,c]=Wt.useState(!1);return Wt.useEffect(()=>{const p=setInterval(()=>{a(v=>v>=100?(clearInterval(p),setTimeout(()=>{c(!0),setTimeout(()=>{o&&o()},700)},200),100):Math.min(v+1.25+Math.random()*3,100))},20);return()=>clearInterval(p)},[o]),E.jsx("div",{className:`fixed inset-0 z-[100] bg-[#05070a] flex items-center justify-center transition-all duration-700 ${s?"opacity-0 pointer-events-none":"opacity-100"}`,children:E.jsxs("div",{className:"w-[min(420px,78vw)] text-center",children:[E.jsx("div",{className:"mx-auto mb-6 w-12 h-12 opacity-90 animate-pulse",children:E.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",className:"w-full h-full",children:[E.jsx("circle",{cx:"22",cy:"24",r:"9.5",stroke:"#e0231c",strokeWidth:"1.5"}),E.jsx("path",{d:"M6 12h32M9.5 17h25M22 8v28",stroke:"#dfe7e0",strokeWidth:"1.5"})]})}),E.jsx("div",{className:"font-jp text-xs tracking-[0.5em] text-[#aab4ad] mb-5",children:"知 恵 と 創 造"}),E.jsx("div",{className:"relative h-[1px] bg-[rgba(223,231,224,0.14)] overflow-hidden w-full",children:E.jsx("div",{className:"absolute top-0 left-0 bottom-0 bg-[#dfe7e0] transition-all duration-100 ease-linear",style:{width:`${n}%`}})}),E.jsxs("div",{className:"flex justify-between items-center mt-3 text-[10px] tracking-[0.2em] uppercase text-[#78837c]",children:[E.jsx("span",{children:"Initializing neural workspace & 3D realm"}),E.jsxs("b",{className:"font-mono text-[#dfe7e0] font-normal",children:[Math.floor(n),"%"]})]})]})})}function ZA(){const[o,n]=Wt.useState({x:-100,y:-100}),[a,s]=Wt.useState(!1),[c,f]=Wt.useState(!1);return Wt.useEffect(()=>{const d=v=>{n({x:v.clientX,y:v.clientY}),c||f(!0)},h=v=>{const _=v.target;_.tagName==="A"||_.tagName==="BUTTON"||_.closest("a")||_.closest("button")||_.hasAttribute("data-cursor")||_.closest("[data-cursor]")?s(!0):s(!1)},p=()=>f(!1);return window.addEventListener("mousemove",d),window.addEventListener("mouseover",h),document.addEventListener("mouseleave",p),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseover",h),document.removeEventListener("mouseleave",p)}},[c]),c?E.jsx("div",{className:`fixed top-0 left-0 z-[90] pointer-events-none rounded-full transition-transform duration-100 ease-out hidden md:block border ${a?"w-14 h-14 -ml-7 -mt-7 border-[rgba(223,231,224,0.6)] bg-[rgba(223,231,224,0.07)] scale-110":"w-7 h-7 -ml-3.5 -mt-3.5 border-[rgba(223,231,224,0.35)] bg-transparent"}`,style:{transform:`translate3d(${o.x}px, ${o.y}px, 0)`}}):null}/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hx=(...o)=>o.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=Wt.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:f,iconNode:d,...h},p)=>Wt.createElement("svg",{ref:p,...QA,width:n,height:n,stroke:o,strokeWidth:s?Number(a)*24/Number(n):a,className:Hx("lucide",c),...h},[...d.map(([v,_])=>Wt.createElement(v,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=(o,n)=>{const a=Wt.forwardRef(({className:s,...c},f)=>Wt.createElement(JA,{ref:f,iconNode:n,className:Hx(`lucide-${KA(o)}`,s),...c}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Vp=nn("ArrowUpRight",$A);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Gx=nn("Award",e3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],n3=nn("Briefcase",t3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],a3=nn("ChevronRight",i3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],s3=nn("CircleCheckBig",r3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],l3=nn("CircleCheck",o3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],u3=nn("CodeXml",c3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],d3=nn("Cpu",f3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],p3=nn("Database",h3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],g3=nn("ExternalLink",m3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_3=nn("Eye",v3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Vx=nn("Github",x3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],S3=nn("GraduationCap",y3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],E3=nn("Linkedin",M3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],sx=nn("Mail",b3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],A3=nn("MapPin",T3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],C3=nn("Menu",R3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],N3=nn("Phone",w3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],U3=nn("Send",D3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],O3=nn("ShieldCheck",L3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],P3=nn("Trophy",z3);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kx=nn("X",I3);function B3(){const[o,n]=Wt.useState(!1),[a,s]=Wt.useState(!1),[c,f]=Wt.useState("");Wt.useEffect(()=>{const h=()=>{window.scrollY>40?n(!0):n(!1);const p=["gate","pathways","experience","lessons","eternity"],v=window.scrollY+250;for(let _=p.length-1;_>=0;_--){const g=document.getElementById(p[_]);if(g&&g.offsetTop<=v){f(p[_]);break}}};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const d=[{name:"About",alt:"技術",href:"#gate",id:"gate"},{name:"Projects",alt:"作品",href:"#pathways",id:"pathways"},{name:"Experience",alt:"実績",href:"#experience",id:"experience"},{name:"Principles",alt:"理念",href:"#lessons",id:"lessons"},{name:"Connect",alt:"連絡",href:"#eternity",id:"eternity"}];return E.jsxs("header",{className:`fixed top-0 left-0 right-0 h-[84px] z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${o?"bg-[#05070a]/75 backdrop-blur-md border-b border-[rgba(223,231,224,0.08)] shadow-2xl":"bg-transparent border-b border-transparent"}`,children:[E.jsxs("a",{href:"#top",className:"flex items-center gap-3 group","data-cursor":!0,children:[E.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",className:"w-8 h-8 flex-shrink-0 transition-transform duration-500 group-hover:scale-110",children:[E.jsx("circle",{cx:"22",cy:"25",r:"8.6",fill:"#e0231c",fillOpacity:"0.9"}),E.jsx("path",{d:"M5 13h34M9 18.4h26M22 8.5v27",stroke:"#dfe7e0",strokeWidth:"1.5"}),E.jsx("path",{d:"M14 35.5h16",stroke:"#dfe7e0",strokeWidth:"1.2",strokeOpacity:"0.6"})]}),E.jsxs("span",{className:"flex flex-direction-col flex-col leading-none gap-0.5",children:[E.jsx("b",{className:"text-xs font-semibold tracking-[0.24em] text-[#dfe7e0]",children:"MOHITH B"}),E.jsx("i",{className:"not-italic text-[8px] tracking-[0.32em] text-[#78837c] uppercase",children:"CS & FULL-STACK / AI"})]})]}),E.jsx("nav",{className:"hidden md:flex items-center gap-8 lg:gap-11",children:d.map(h=>{const p=c===h.id;return E.jsxs("a",{href:h.href,"data-cursor":!0,className:`relative text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 group py-1 ${p?"text-[#dfe7e0]":"text-[#aab4ad] hover:text-[#dfe7e0]"}`,children:[E.jsxs("span",{className:"block overflow-hidden h-4 leading-4",children:[E.jsx("span",{className:"block transition-transform duration-500 group-hover:-translate-y-full",children:h.name}),E.jsx("span",{className:"block text-[#e0231c] tracking-[0.28em] font-jp transition-transform duration-500 translate-y-0 group-hover:-translate-y-full",children:h.alt})]}),p&&E.jsx("span",{className:"absolute left-0 bottom-0 w-full h-[1px] bg-[#e0231c]"})]},h.id)})}),E.jsx("button",{onClick:()=>s(!a),className:"md:hidden text-[#dfe7e0] p-2 hover:text-[#e0231c] transition-colors","aria-label":"Toggle menu","data-cursor":!0,children:a?E.jsx(kx,{size:24}):E.jsx(C3,{size:24})}),E.jsxs("div",{className:`fixed inset-0 top-[84px] bg-[#05070a]/98 backdrop-blur-xl border-t border-[rgba(223,231,224,0.08)] flex flex-col p-8 md:hidden transition-all duration-500 z-50 ${a?"opacity-100 translate-x-0":"opacity-0 translate-x-full pointer-events-none"}`,children:[E.jsx("div",{className:"flex flex-col gap-6",children:d.map(h=>E.jsxs("a",{href:h.href,onClick:()=>s(!1),className:"flex items-center justify-between py-3 border-b border-[rgba(223,231,224,0.07)] text-lg tracking-[0.16em] uppercase text-[#dfe7e0] hover:text-[#e0231c]",children:[E.jsx("span",{children:h.name}),E.jsx("span",{className:"font-jp text-xs text-[#78837c]",children:h.alt})]},h.id))}),E.jsxs("div",{className:"mt-auto pt-8 border-t border-[rgba(223,231,224,0.08)] text-[10px] tracking-[0.2em] text-[#78837c] uppercase",children:[E.jsx("span",{children:"Bengaluru, Karnataka, India"}),E.jsx("div",{className:"mt-2 text-[#aab4ad]",children:"mohithb70@email.com"})]})]})]})}function F3(){const[o,n]=Wt.useState("hero"),a=[{id:"hero",label:"Top"},{id:"gate",label:"About"},{id:"pathways",label:"Projects"},{id:"experience",label:"Experience"},{id:"lessons",label:"Principles"},{id:"eternity",label:"Connect"}];return Wt.useEffect(()=>{const s=()=>{const c=window.scrollY+250;for(let f=a.length-1;f>=0;f--){const d=document.getElementById(a[f].id);if(d&&d.offsetTop<=c){n(a[f].id);break}}};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),E.jsx("div",{className:"fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3",children:a.map(s=>{const c=o===s.id;return E.jsxs("a",{href:`#${s.id}`,"aria-label":s.label,className:"group relative p-1.5 flex items-center justify-center",children:[E.jsx("span",{className:`block transition-all duration-300 ${c?"w-5 h-[1.5px] bg-[#dfe7e0]":"w-3 h-[1px] bg-[rgba(223,231,224,0.25)] group-hover:w-5 group-hover:bg-[#aab4ad]"}`}),E.jsx("span",{className:"absolute right-7 px-2 py-1 bg-[#0a0e12] border border-[rgba(223,231,224,0.1)] text-[9px] tracking-wider uppercase text-[#dfe7e0] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:s.label})]},s.id)})})}const Wr={personal:{name:"MOHITH B",location:"Bengaluru, Karnataka, India",phone:"+91 9483242797",email:"mohithb70@email.com",linkedin:"https://linkedin.com/in/mohith-b-481a82378",github:"https://github.com/mohithb7atria-ai",summary:"Computer Science & Engineering student interested in full-stack development, AI/ML and building practical technology solutions. Experienced in web development, hackathons and collaborative technical projects. Highly proficient in Vibe Coding and AI-assisted development, with experience using AI coding tools to rapidly build, modify, debug, integrate and deploy applications across a wide range of modern technologies. Interested in contributing to developer communities through projects, technical initiatives and collaborative learning."},stats:[{value:"8.83",label:"Academic CGPA",sub:"Atria Institute of Tech"},{value:"Top 10",label:"SIH 2026 Selection",sub:"Hardware & Software Tracks"},{value:"1st Place",label:"Unimerge Hackathon",sub:"Most Impactful Project"},{value:"7+",label:"Certifications",sub:"Google Cloud, IBM, Infosys"}],chapterChips:[{num:"01",title:"Systems",desc:"Full-stack web applications, REST APIs, and modern databases."},{num:"02",title:"Projects",desc:"ACE PREP, Food Genie, Human Collapse Detection & AI tools."},{num:"03",title:"Hackathons",desc:"Smart India Hackathon 2026 Top 10 & Unimerge Winner."},{num:"04",title:"Connect",desc:"Let’s discuss full-stack opportunities, AI projects, or ideas."}],skills:{vibeCoding:{category:"Vibe Coding & AI Workflows",kanji:"人工知能",items:["Advanced AI-Assisted Development","Rapid Application Building","AI-Powered Coding Workflows","Code Generation & Prototyping","Automated Debugging & Refactoring","API Integration & Database Wiring","Deployment Across Modern Stacks"]},webDev:{category:"Full-Stack Web Development",kanji:"全階層開発",items:["React.js","Node.js","Express.js","JavaScript (ES6+)","HTML5 & CSS3","Stripe Payment Processing","RESTful API Design"]},aiMl:{category:"AI/ML & Computer Vision",kanji:"視覚認識",items:["OpenCV","MediaPipe Pose & Tracking","Machine Learning Fundamentals","Generative AI & LLM Workflows","Python AI Ecosystem"]},tools:{category:"Databases, Cloud & Tools",kanji:"基盤技術",items:["MongoDB","Supabase","Git & GitHub","VS Code","Google Cloud Platform","Google AppSheet"]}},projects:[{id:"ace-prep",num:"01",title:"ACE PREP",subtitle:"Full-Stack JEE & NEET Preparation Platform",category:"Full-Stack Web App",kanji:"学習基盤",tech:["React.js","Node.js","Express","MongoDB","Auth","Tailwind CSS"],description:"Developed a full-stack learning platform engineered specifically for competitive examination prep (JEE & NEET). Features student authentication, interactive test analytics, custom dashboards, and structured learning modules.",highlights:["Architected responsive student & admin dashboards for tracking exam prep metrics.","Engineered secure user authentication and persistent state management.","Designed learning-focused features with clean component modularity."],github:"https://github.com/mohithb7atria-ai",demoUrl:"https://github.com/mohithb7atria-ai",badge:"Featured Full-Stack"},{id:"collapse-detection",num:"02",title:"Real-Time Human Collapse Detection System",subtitle:"Webcam Computer-Vision Fall Monitoring",category:"Computer Vision & AI",kanji:"安全監視",tech:["Python","OpenCV","MediaPipe Pose","Machine Learning"],description:"Developed a real-time computer-vision system capable of detecting human collapse or fall events instantly using live webcam feeds. Utilizes MediaPipe Pose landmark tracking and threshold analysis for high-confidence emergency alerts.",highlights:["Tracks key body landmark coordinates continuously in real-time.","Triggers rapid posture state changes to flag fall events immediately.","Built using lightweight Python libraries for low-latency edge performance."],github:"https://github.com/mohithb7atria-ai",demoUrl:"https://github.com/mohithb7atria-ai",badge:"AI & Computer Vision"},{id:"food-genie",num:"03",title:"Food Genie",subtitle:"AI-Powered Food Ordering System",category:"Full-Stack E-Commerce",kanji:"自動注文",tech:["React.js","Node.js","Express.js","Stripe API","JavaScript","CSS3"],description:"Primary internship project developed at WebStack Academy. Features AI-powered food browsing, interactive cart management, real-time order tracking, and secure online payment processing powered by Stripe.",highlights:["Integrated Stripe checkout workflow for secure online payment processing.","Built responsive cart management and dynamic food browsing interfaces.","Engineered backend REST API services with Node.js and Express.js."],github:"https://github.com/mohithb7atria-ai",demoUrl:"https://github.com/mohithb7atria-ai",badge:"WebStack Academy Project"},{id:"smart-route-buddy",num:"04",title:"Smart Route Buddy",subtitle:"AI-Assisted Smart Transportation & Route Guidance",category:"AI & Mobility",kanji:"経路誘導",tech:["Python","AI Algorithms","Smart Mobility","Geolocation APIs"],description:"Conceptualized and developed an AI-assisted smart transportation system designed for intelligent route awareness, real-time navigation support, and automated travel recommendations.",highlights:["Intelligent route optimization based on live trip parameters.","Focus on safety awareness and contextual travel assistance.","Designed modular AI algorithms for rapid route computation."],github:"https://github.com/mohithb7atria-ai",demoUrl:"https://github.com/mohithb7atria-ai",badge:"Smart Mobility Concept"},{id:"smart-volunteer-system",num:"05",title:"Smart Volunteer System",subtitle:"Community Technology & Coordination Platform",category:"Web Application",kanji:"地域貢献",tech:["React.js","Node.js","Community Tech","Database Management"],description:"Developed a platform concept for volunteer coordination and community participation. Focuses on managing volunteer profiles, organizing activities, scheduling events, and tracking community impact metrics.",highlights:["Streamlined event registration and volunteer task allocation.","Created an intuitive interface for community event organizers.","Emphasized modular architecture for easy community scaling."],github:"https://github.com/mohithb7atria-ai",demoUrl:"https://github.com/mohithb7atria-ai",badge:"Community Tech"}],sihHackathon:{event:"SMART INDIA HACKATHON 2026",kanji:"全国大会",tracks:[{track:"Top 10 – Hardware Track",code:"SIH26039",title:"AI-Powered Underground Mine Safety, Monitoring and Rescue System",description:"Worked on a comprehensive technology solution focused on underground mine safety, hazard monitoring, environmental gas sensing, and emergency rescue decision support."},{track:"Top 10 – Software Track",code:"SIH26097",title:"AI-Driven Voice Assistant for Livelihood Mapping & NSQF-Aligned Skilling Recommendations",description:"Worked on a voice-based solution concept for livelihood mapping, multi-lingual voice interaction, and personalized NSQF-aligned skill-development recommendations."}]},experience:[{role:"Web Development Intern",company:"WebStack Academy",location:"Bengaluru, India",period:"June 2026 – July 2026",kanji:"就業体験",points:["Developed 'Food Genie,' an AI-powered food ordering system as the primary internship project.","Built responsive and interactive web interfaces using React.js, JavaScript, HTML, and CSS.","Developed backend API services using Node.js and Express.js.","Implemented food browsing, cart management, and online ordering functionality.","Integrated Stripe for secure online payment processing.","Used Git and GitHub for version control and collaborative project development."]}],achievements:[{title:"Winner – Most Impactful Project",org:"Unimerge Hackathon",desc:"Awarded 1st place for designing and engineering the most impactful technological solution."},{title:"Top 10 SIH 2026 Selection (Hardware Track)",org:"Atria Institute of Technology Internal Selection",desc:"Selected in Top 10 for AI-Powered Underground Mine Safety System."},{title:"Top 10 SIH 2026 Selection (Software Track)",org:"Atria Institute of Technology Internal Selection",desc:"Selected in Top 10 for AI-Driven Voice Assistant for Skilling Recommendations."},{title:"Atria AI Club Leadership",org:"Atria AI Club",desc:"Active Designer & Technical Member guiding club initiatives and technical events."}],principles:[{num:"01",title:"Start with the Mechanism",kanji:"構造理解",desc:"Building AI vision scripts and full-stack engines from first principles builds true intuition for how tools work under the hood."},{num:"02",title:"Make Systems Inspectable",kanji:"可視化",desc:"Real-time MediaPipe pose landmarks, clear API responses, and clean state logs turn invisible processes into usable interfaces."},{num:"03",title:"Accelerate with Vibe Coding",kanji:"高速開発",desc:"Leveraging cutting-edge AI coding tools to rapidly build, test, debug, and deploy applications across modern web frameworks."},{num:"04",title:"Build Beyond the Interface",kanji:"実用基盤",desc:"A reliable product connects intuitive frontends with secure Stripe payments, persistent MongoDB storage, and robust Node backends."},{num:"05",title:"Keep the Boundaries Honest",kanji:"誠実設計",desc:"Transparently document system constraints, optimize low-latency algorithms, and focus on clean maintainable code."}],education:[{degree:"B.E. – Computer Science & Engineering",institution:"Atria Institute of Technology",location:"Bengaluru",period:"2025 – Present",grade:"CGPA: 8.83",kanji:"大学教育",highlight:"Specializing in Full-Stack Web Development, AI/ML, and Computer Vision."},{degree:"Higher Secondary Education",institution:"Presidency PU College",location:"Bengaluru",period:"2023",grade:"Completed",kanji:"高等教育",highlight:"Strong foundation in Mathematics, Physics, and Computer Science."}],certifications:[{name:"App Building with AppSheet",issuer:"Google Cloud Skills Boost",year:"2025"},{name:"Develop with Apps Script and AppSheet",issuer:"Google Developers Group",year:"2025"},{name:"Building a Website on Google Cloud",issuer:"Google Cloud Skills Boost",year:"2025"},{name:"Get Started with API Gateway",issuer:"Google Cloud Skills Boost",year:"2025"},{name:"Tata – GenAI Powered Data Analytics Job Simulation",issuer:"Forage",year:"2026"},{name:"Python Certification",issuer:"Infosys Springboard",year:"2026"},{name:"Artificial Intelligence Fundamentals",issuer:"IBM SkillsBuild",year:"2026"}],languages:["English","Kannada","Hindi","Telugu"]};function H3(){const{personal:o,chapterChips:n}=Wr;return E.jsxs("section",{id:"hero",className:"relative min-h-screen px-6 md:px-12 flex flex-col justify-between pt-28 pb-10 overflow-hidden",children:[E.jsxs("div",{className:"max-w-[620px] z-10",children:[E.jsxs("div",{className:"flex items-center gap-2.5 mb-6 text-[10px] font-medium tracking-[0.24em] uppercase text-[#aab4ad]",children:[E.jsx("span",{className:"w-2 h-2 rounded-full bg-[#e0231c] animate-pulse shadow-[0_0_10px_#e0231c]"}),E.jsxs("span",{children:[o.name," · ",o.location]})]}),E.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight leading-[1.08] text-[#dfe7e0] mb-6",children:[E.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-[#dfe7e0] via-[#aab4ad] to-[#dfe7e0]",children:"FULL-STACK DEV."}),E.jsx("span",{className:"block text-[#dfe7e0]",children:"AI & VISION."}),E.jsxs("span",{className:"block text-[#e0231c]",children:[o.name,"."]})]}),E.jsx("p",{className:"text-sm sm:text-base leading-relaxed text-[#aab4ad] max-w-lg mb-8 font-light drop-shadow-md",children:o.summary}),E.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[E.jsxs("a",{href:"#pathways","data-cursor":!0,className:"inline-flex items-center gap-3 px-6 py-3 border border-[rgba(223,231,224,0.2)] rounded-full text-xs font-medium tracking-[0.2em] uppercase text-[#dfe7e0] hover:text-[#05070a] hover:bg-[#dfe7e0] transition-all duration-300 group",children:[E.jsx("span",{children:"Explore The Library"}),E.jsx(Vp,{size:14,className:"transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),E.jsx("a",{href:"#eternity","data-cursor":!0,className:"inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#78837c] hover:text-[#e0231c] transition-colors py-3 px-2",children:E.jsx("span",{children:"Get in Touch"})})]})]}),E.jsxs("a",{href:"#pathways","data-cursor":!0,className:"hidden lg:block absolute right-12 bottom-32 z-10 w-64 p-4 bg-[#0a0e12]/80 backdrop-blur-md border border-[rgba(223,231,224,0.12)] hover:border-[rgba(223,231,224,0.35)] transition-all duration-500 group shadow-2xl",children:[E.jsxs("div",{className:"relative aspect-[16/10] bg-gradient-to-br from-[#121820] to-[#05070a] border border-[rgba(223,231,224,0.08)] flex items-center justify-center overflow-hidden mb-3",children:[E.jsxs("div",{className:"text-center p-3",children:[E.jsx("span",{className:"block font-jp text-xs tracking-[0.3em] text-[#e0231c] mb-1",children:"作品集"}),E.jsx("span",{className:"block text-[11px] font-semibold tracking-wider text-[#dfe7e0] uppercase",children:"5 CORE PROJECTS"})]}),E.jsx("div",{className:"absolute inset-0 bg-[#e0231c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),E.jsxs("div",{className:"flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#aab4ad]",children:[E.jsx("b",{className:"font-normal text-[#dfe7e0]",children:"THE LIBRARY"}),E.jsx("i",{className:"not-italic text-[#78837c] group-hover:text-[#e0231c] transition-colors",children:"EXPLORE ↗"})]})]}),E.jsx("div",{className:"hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4 pointer-events-none",children:E.jsxs("span",{className:"[writing-mode:vertical-rl] text-[11px] tracking-[0.62em] text-[rgba(223,231,224,0.35)] uppercase",children:[o.name," · 2026"]})}),E.jsx("div",{className:"z-10 mt-16 pt-6 border-t border-[rgba(223,231,224,0.08)]",children:E.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",children:n.map((a,s)=>E.jsxs("a",{href:`#${["gate","pathways","experience","eternity"][s]}`,"data-cursor":!0,className:"flex items-start gap-3 group text-left",children:[E.jsx("span",{className:"text-xl md:text-2xl font-light text-[#dfe7e0] group-hover:text-[#ff5a3c] transition-colors leading-none font-mono",children:a.num}),E.jsxs("div",{className:"min-w-0",children:[E.jsx("b",{className:"block text-[10px] font-medium tracking-[0.2em] uppercase text-[#aab4ad] group-hover:text-[#dfe7e0] transition-colors mb-1",children:a.title}),E.jsx("p",{className:"text-[11px] leading-relaxed text-[#78837c] group-hover:text-[#aab4ad] transition-colors line-clamp-2",children:a.desc})]})]},a.num))})})]})}function G3(){const{personal:o,stats:n,skills:a}=Wr,s=[{...a.vibeCoding,icon:d3,accent:"#e0231c"},{...a.webDev,icon:u3,accent:"#ff5a3c"},{...a.aiMl,icon:_3,accent:"#c9a24a"},{...a.tools,icon:p3,accent:"#dfe7e0"}];return E.jsxs("section",{id:"gate",className:"relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]",children:[E.jsxs("div",{className:"flex items-center gap-4 mb-16",children:[E.jsxs("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:[E.jsx("b",{className:"text-[#e0231c] font-normal",children:"01"})," — About & Philosophy"]}),E.jsx("div",{className:"flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]"}),E.jsx("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:"SYSTEMS"})]}),E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",children:[E.jsxs("div",{className:"lg:col-span-5",children:[E.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-tight leading-[1.1] text-[#dfe7e0]",children:"I like knowing how things work. Then building them myself."}),E.jsx("div",{className:"mt-8 font-jp text-xs tracking-[0.4em] text-[#e0231c] uppercase",children:"知恵と構造の探求"})]}),E.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[E.jsx("p",{className:"text-base sm:text-lg leading-relaxed text-[#dfe7e0] font-light",children:o.summary}),E.jsxs("p",{className:"text-sm leading-relaxed text-[#aab4ad] font-light",children:["My development approach combines traditional full-stack craftsmanship with modern ",E.jsx("strong",{className:"text-[#dfe7e0] font-normal",children:"Vibe Coding & AI-assisted workflows"}),". Whether it's training real-time computer vision models with OpenCV & MediaPipe, architecting secure payment-enabled web platforms, or competing in hackathons like Smart India Hackathon 2026, I focus on turning complex technical concepts into intuitive, real-world tools."]}),E.jsxs("a",{href:"#pathways","data-cursor":!0,className:"inline-flex items-center gap-3 mt-6 text-xs font-medium tracking-[0.2em] uppercase text-[#dfe7e0] group",children:[E.jsx("span",{className:"w-9 h-9 rounded-full border border-[rgba(223,231,224,0.2)] flex items-center justify-center group-hover:bg-[#dfe7e0] group-hover:text-[#05070a] transition-all duration-300",children:E.jsx(Vp,{size:14,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})}),E.jsx("span",{className:"group-hover:text-[#e0231c] transition-colors",children:"Explore Featured Projects"})]})]})]}),E.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-8 border-t border-[rgba(223,231,224,0.08)]",children:n.map((c,f)=>E.jsxs("div",{className:"p-4 bg-[#0a0e12]/60 border border-[rgba(223,231,224,0.06)] rounded-sm",children:[E.jsx("b",{className:"block text-2xl sm:text-3xl font-light text-[#dfe7e0] tracking-tight font-mono mb-1",children:c.value}),E.jsx("span",{className:"block text-[10px] tracking-[0.2em] uppercase text-[#aab4ad]",children:c.label}),E.jsx("span",{className:"block text-[9px] text-[#78837c] mt-0.5",children:c.sub})]},f))}),E.jsxs("div",{className:"mt-24",children:[E.jsxs("h3",{className:"text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-10 flex items-center gap-3",children:[E.jsx("span",{className:"w-1.5 h-1.5 bg-[#e0231c] rounded-full"}),E.jsx("span",{children:"Technical Skills & Core Capabilities"})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:s.map((c,f)=>{const d=c.icon;return E.jsx("div",{className:"p-6 bg-[#0a0e12]/80 border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.25)] transition-all duration-300 group flex flex-col justify-between",children:E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-4",children:[E.jsx(d,{size:20,style:{color:c.accent}}),E.jsx("span",{className:"font-jp text-[10px] tracking-[0.2em] text-[#78837c]",children:c.kanji})]}),E.jsx("h4",{className:"text-sm font-medium tracking-wide uppercase text-[#dfe7e0] mb-4 group-hover:text-[#e0231c] transition-colors",children:c.category}),E.jsx("ul",{className:"space-y-2",children:c.items.map((h,p)=>E.jsxs("li",{className:"text-xs text-[#aab4ad] flex items-center gap-2",children:[E.jsx("span",{className:"w-1 h-1 bg-[rgba(223,231,224,0.3)] rounded-full"}),E.jsx("span",{children:h})]},p))})]})},f)})})]})]})}function V3({project:o,onClose:n}){return o?E.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#05070a]/90 backdrop-blur-xl transition-all duration-300",children:E.jsxs("div",{className:"relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0e12] border border-[rgba(223,231,224,0.18)] rounded-sm p-6 sm:p-10 shadow-2xl",children:[E.jsx("button",{onClick:n,"data-cursor":!0,className:"absolute top-6 right-6 p-2 text-[#aab4ad] hover:text-[#e0231c] transition-colors","aria-label":"Close modal",children:E.jsx(kx,{size:22})}),E.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[E.jsx("span",{className:"text-[10px] font-medium tracking-[0.24em] uppercase text-[#e0231c]",children:o.category}),E.jsx("span",{className:"text-[#78837c]",children:"•"}),E.jsx("span",{className:"font-jp text-xs text-[#aab4ad]",children:o.kanji}),E.jsx("span",{className:"ml-auto text-[10px] tracking-wider uppercase px-2.5 py-0.5 bg-[#e0231c]/15 text-[#e0231c] border border-[#e0231c]/30 rounded-full",children:o.badge})]}),E.jsx("h3",{className:"text-2xl sm:text-3xl font-normal tracking-tight uppercase text-[#dfe7e0] mb-2",children:o.title}),E.jsx("p",{className:"text-sm text-[#aab4ad] mb-6 font-light",children:o.subtitle}),E.jsx("div",{className:"w-full h-[1px] bg-[rgba(223,231,224,0.08)] mb-6"}),E.jsxs("div",{className:"mb-8",children:[E.jsx("h4",{className:"text-xs tracking-[0.2em] uppercase text-[#78837c] mb-3",children:"Project Overview"}),E.jsx("p",{className:"text-sm leading-relaxed text-[#dfe7e0] font-light",children:o.description})]}),o.highlights&&o.highlights.length>0&&E.jsxs("div",{className:"mb-8",children:[E.jsx("h4",{className:"text-xs tracking-[0.2em] uppercase text-[#78837c] mb-4",children:"Key Engineering Features"}),E.jsx("div",{className:"space-y-3",children:o.highlights.map((a,s)=>E.jsxs("div",{className:"flex items-start gap-3 text-xs text-[#aab4ad] leading-relaxed",children:[E.jsx(l3,{size:15,className:"text-[#e0231c] flex-shrink-0 mt-0.5"}),E.jsx("span",{children:a})]},s))})]}),E.jsxs("div",{className:"mb-8",children:[E.jsx("h4",{className:"text-xs tracking-[0.2em] uppercase text-[#78837c] mb-3",children:"Technologies & Frameworks"}),E.jsx("div",{className:"flex flex-wrap gap-2",children:o.tech.map((a,s)=>E.jsx("span",{className:"px-3 py-1 bg-[#121820] text-[#dfe7e0] border border-[rgba(223,231,224,0.1)] text-xs font-mono rounded-sm",children:a},s))})]}),E.jsxs("div",{className:"flex items-center gap-4 pt-6 border-t border-[rgba(223,231,224,0.08)]",children:[o.github&&E.jsxs("a",{href:o.github,target:"_blank",rel:"noopener noreferrer","data-cursor":!0,className:"inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(223,231,224,0.2)] rounded-full text-xs font-medium tracking-[0.16em] uppercase text-[#dfe7e0] hover:bg-[#dfe7e0] hover:text-[#05070a] transition-all",children:[E.jsx(Vx,{size:14}),E.jsx("span",{children:"View Code"})]}),o.demoUrl&&E.jsxs("a",{href:o.demoUrl,target:"_blank",rel:"noopener noreferrer","data-cursor":!0,className:"inline-flex items-center gap-2 px-5 py-2.5 bg-[#e0231c] text-white rounded-full text-xs font-medium tracking-[0.16em] uppercase hover:bg-[#ff5a3c] transition-all",children:[E.jsx(g3,{size:14}),E.jsx("span",{children:"Project Details"})]})]})]})}):null}function k3(){const{projects:o}=Wr,[n,a]=Wt.useState(null);return E.jsxs("section",{id:"pathways",className:"relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]",children:[E.jsxs("div",{className:"flex items-center gap-4 mb-16",children:[E.jsxs("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:[E.jsx("b",{className:"text-[#e0231c] font-normal",children:"02"})," — Case Studies & Solutions"]}),E.jsx("div",{className:"flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]"}),E.jsx("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:"THE LIBRARY"})]}),E.jsxs("div",{className:"max-w-2xl mb-16",children:[E.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-tight leading-[1.1] text-[#dfe7e0] mb-4",children:"A shelf of possibilities. Five core projects, bound into a collection."}),E.jsx("p",{className:"text-sm text-[#aab4ad] font-light",children:"Explore full-stack platforms, computer vision fall monitoring systems, AI-powered food ordering solutions, and smart mobility concepts. Click any card to inspect full engineering details."})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map((s,c)=>E.jsxs("div",{onClick:()=>a(s),"data-cursor":!0,className:`group relative cursor-pointer bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.3)] transition-all duration-500 overflow-hidden flex flex-col justify-between ${c===1?"md:translate-y-6":c===2?"lg:translate-y-12":""}`,children:[E.jsxs("div",{className:"relative aspect-[4/3] bg-gradient-to-br from-[#121820] via-[#0a0e12] to-[#05070a] border-b border-[rgba(223,231,224,0.08)] overflow-hidden p-6 flex flex-col justify-between",children:[E.jsx("span",{className:"absolute -right-2 -bottom-4 font-jp text-7xl font-bold text-[rgba(223,231,224,0.03)] select-none pointer-events-none group-hover:text-[rgba(224,35,28,0.08)] transition-colors duration-500",children:s.kanji}),E.jsxs("div",{className:"flex items-center justify-between z-10",children:[E.jsx("span",{className:"font-mono text-xl font-light text-[#dfe7e0] group-hover:text-[#ff5a3c] transition-colors",children:s.num}),E.jsx("span",{className:"text-[9px] tracking-widest uppercase px-2 py-0.5 bg-[#121820] text-[#aab4ad] border border-[rgba(223,231,224,0.1)] rounded-full",children:s.category})]}),E.jsxs("div",{className:"my-auto z-10",children:[E.jsx("h3",{className:"text-xl font-normal uppercase tracking-tight text-[#dfe7e0] group-hover:text-[#e0231c] transition-colors mb-1",children:s.title}),E.jsx("p",{className:"text-xs text-[#aab4ad] font-light line-clamp-2",children:s.subtitle})]}),E.jsx("div",{className:"absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0231c]/15 via-transparent to-transparent"})]}),E.jsxs("div",{className:"p-6 bg-[#0a0e12] flex flex-col justify-between flex-1",children:[E.jsx("p",{className:"text-xs text-[#78837c] leading-relaxed line-clamp-3 mb-6 font-light",children:s.description}),E.jsxs("div",{children:[E.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-4",children:[s.tech.slice(0,4).map((f,d)=>E.jsx("span",{className:"text-[10px] font-mono text-[#aab4ad] bg-[#121820] px-2 py-0.5 rounded-sm",children:f},d)),s.tech.length>4&&E.jsxs("span",{className:"text-[10px] font-mono text-[#78837c] px-1 py-0.5",children:["+",s.tech.length-4]})]}),E.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-[rgba(223,231,224,0.06)] text-[10px] tracking-[0.2em] uppercase text-[#aab4ad] group-hover:text-[#dfe7e0]",children:[E.jsx("span",{children:"Study Case"}),E.jsx(Vp,{size:13,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#e0231c]"})]})]})]})]},s.id))}),E.jsx(V3,{project:n,onClose:()=>a(null)})]})}function j3(){const{sihHackathon:o,experience:n,achievements:a}=Wr;return E.jsxs("section",{id:"experience",className:"relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]",children:[E.jsxs("div",{className:"flex items-center gap-4 mb-16",children:[E.jsxs("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:[E.jsx("b",{className:"text-[#e0231c] font-normal",children:"03"})," — Industry & Hackathons"]}),E.jsx("div",{className:"flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]"}),E.jsx("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:"ACHIEVEMENTS"})]}),E.jsxs("div",{className:"mb-20 p-8 md:p-12 bg-gradient-to-r from-[#0a0e12] via-[#121820] to-[#0a0e12] border border-[rgba(223,231,224,0.15)] rounded-sm relative overflow-hidden",children:[E.jsx("span",{className:"absolute right-6 top-4 font-jp text-6xl font-bold text-[rgba(223,231,224,0.03)] select-none pointer-events-none",children:o.kanji}),E.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[E.jsx(P3,{size:20,className:"text-[#e0231c]"}),E.jsxs("span",{className:"text-xs font-semibold tracking-[0.26em] uppercase text-[#e0231c]",children:["NATIONAL RECOGNITION · ",o.event]})]}),E.jsx("h3",{className:"text-2xl sm:text-3xl font-normal uppercase tracking-tight text-[#dfe7e0] mb-8 max-w-xl",children:"Selected in Top 10 for Both Hardware & Software Tracks"}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:o.tracks.map((s,c)=>E.jsxs("div",{className:"p-6 bg-[#05070a]/80 border border-[rgba(223,231,224,0.08)] rounded-sm",children:[E.jsxs("div",{className:"flex items-center justify-between mb-3",children:[E.jsx("span",{className:"text-xs font-medium text-[#ff5a3c] uppercase tracking-wider",children:s.track}),E.jsx("span",{className:"text-[10px] font-mono text-[#78837c] bg-[#121820] px-2 py-0.5 rounded-sm",children:s.code})]}),E.jsx("h4",{className:"text-sm font-medium text-[#dfe7e0] uppercase tracking-wide mb-3",children:s.title}),E.jsx("p",{className:"text-xs text-[#aab4ad] font-light leading-relaxed",children:s.description})]},c))})]}),E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[E.jsxs("div",{className:"lg:col-span-7",children:[E.jsxs("h3",{className:"text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-8 flex items-center gap-3",children:[E.jsx(n3,{size:16,className:"text-[#e0231c]"}),E.jsx("span",{children:"Work Experience"})]}),n.map((s,c)=>E.jsxs("div",{className:"p-8 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] rounded-sm",children:[E.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-4",children:[E.jsxs("div",{children:[E.jsx("h4",{className:"text-lg font-medium text-[#dfe7e0] uppercase tracking-wide",children:s.role}),E.jsxs("p",{className:"text-xs text-[#e0231c] tracking-wider uppercase mt-0.5",children:[s.company," · ",s.location]})]}),E.jsx("span",{className:"text-[10px] font-mono text-[#78837c] bg-[#121820] px-3 py-1 border border-[rgba(223,231,224,0.08)] rounded-full",children:s.period})]}),E.jsx("div",{className:"space-y-3 mt-6",children:s.points.map((f,d)=>E.jsxs("div",{className:"flex items-start gap-3 text-xs text-[#aab4ad] leading-relaxed",children:[E.jsx(a3,{size:14,className:"text-[#e0231c] flex-shrink-0 mt-0.5"}),E.jsx("span",{children:f})]},d))})]},c))]}),E.jsxs("div",{className:"lg:col-span-5",children:[E.jsxs("h3",{className:"text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-8 flex items-center gap-3",children:[E.jsx(Gx,{size:16,className:"text-[#c9a24a]"}),E.jsx("span",{children:"Honors & Leadership"})]}),E.jsx("div",{className:"space-y-4",children:a.map((s,c)=>E.jsx("div",{className:"p-5 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.2)] transition-all rounded-sm",children:E.jsxs("div",{className:"flex items-start gap-3",children:[E.jsx("span",{className:"w-6 h-6 rounded-full bg-[#c9a24a]/10 border border-[#c9a24a]/30 flex items-center justify-center flex-shrink-0 text-[#c9a24a] text-xs font-mono",children:c+1}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-xs font-medium uppercase tracking-wider text-[#dfe7e0] mb-1",children:s.title}),E.jsx("p",{className:"text-[11px] text-[#e0231c] tracking-wider uppercase mb-1",children:s.org}),E.jsx("p",{className:"text-xs text-[#78837c] font-light leading-relaxed",children:s.desc})]})]})},c))})]})]})]})}function X3(){const{principles:o,education:n,certifications:a,languages:s}=Wr;return E.jsxs("section",{id:"lessons",className:"relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]",children:[E.jsxs("div",{className:"flex items-center gap-4 mb-16",children:[E.jsxs("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:[E.jsx("b",{className:"text-[#e0231c] font-normal",children:"04"})," — Craft & Credentials"]}),E.jsx("div",{className:"flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]"}),E.jsx("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:"PRINCIPLES & EDUCATION"})]}),E.jsxs("div",{className:"mb-24",children:[E.jsxs("div",{className:"max-w-xl mb-12",children:[E.jsx("h2",{className:"text-3xl sm:text-4xl font-normal uppercase tracking-tight text-[#dfe7e0] mb-3",children:"Craft & Principles"}),E.jsx("p",{className:"text-sm text-[#aab4ad] font-light",children:"Where mathematical rigor meets intuitive software craftsmanship and rapid AI iteration."})]}),E.jsx("div",{className:"border-t border-[rgba(223,231,224,0.08)]",children:o.map(c=>E.jsxs("div",{className:"group relative flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-b border-[rgba(223,231,224,0.07)] hover:px-4 transition-all duration-300 cursor-pointer",children:[E.jsxs("div",{className:"flex items-center gap-6",children:[E.jsx("span",{className:"font-mono text-sm text-[#78837c] group-hover:text-[#e0231c] transition-colors",children:c.num}),E.jsxs("h3",{className:"text-lg font-normal tracking-tight uppercase text-[#dfe7e0]",children:[c.title,E.jsx("em",{className:"not-italic font-jp text-xs text-[#78837c] ml-3 tracking-[0.2em]",children:c.kanji})]})]}),E.jsx("p",{className:"text-xs text-[#aab4ad] font-light max-w-md leading-relaxed md:text-right",children:c.desc}),E.jsx("div",{className:"absolute left-0 bottom-0 h-[1px] w-full bg-[#e0231c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"})]},c.num))})]}),E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[E.jsxs("div",{className:"lg:col-span-5",children:[E.jsxs("h3",{className:"text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-8 flex items-center gap-3",children:[E.jsx(S3,{size:16,className:"text-[#e0231c]"}),E.jsx("span",{children:"Academic Background"})]}),E.jsxs("div",{className:"space-y-6",children:[n.map((c,f)=>E.jsxs("div",{className:"p-6 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] rounded-sm",children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx("span",{className:"font-jp text-[10px] tracking-[0.2em] text-[#78837c]",children:c.kanji}),E.jsx("span",{className:"text-[10px] font-mono text-[#e0231c] bg-[#e0231c]/10 px-2 py-0.5 rounded-full",children:c.period})]}),E.jsx("h4",{className:"text-base font-normal uppercase tracking-wide text-[#dfe7e0] mb-1",children:c.degree}),E.jsxs("p",{className:"text-xs text-[#aab4ad] font-medium mb-3",children:[c.institution,", ",c.location]}),E.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-[rgba(223,231,224,0.06)] text-xs",children:[E.jsx("span",{className:"font-mono text-[#dfe7e0] font-semibold",children:c.grade}),E.jsx("span",{className:"text-[#78837c] text-[11px]",children:c.highlight})]})]},f)),E.jsxs("div",{className:"p-6 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] rounded-sm",children:[E.jsx("h4",{className:"text-xs tracking-[0.2em] uppercase text-[#78837c] mb-3",children:"Languages Spoken"}),E.jsx("div",{className:"flex flex-wrap gap-2",children:s.map((c,f)=>E.jsx("span",{className:"px-3 py-1 bg-[#121820] text-xs text-[#dfe7e0] border border-[rgba(223,231,224,0.08)] rounded-sm",children:c},f))})]})]})]}),E.jsxs("div",{className:"lg:col-span-7",children:[E.jsxs("h3",{className:"text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-8 flex items-center gap-3",children:[E.jsx(Gx,{size:16,className:"text-[#ff5a3c]"}),E.jsx("span",{children:"Certifications & Credentials"})]}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:a.map((c,f)=>E.jsxs("div",{className:"p-4 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.25)] transition-all rounded-sm flex flex-col justify-between",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx(O3,{size:16,className:"text-[#e0231c]"}),E.jsx("span",{className:"text-[10px] font-mono text-[#78837c]",children:c.year})]}),E.jsx("h4",{className:"text-xs font-medium uppercase tracking-wide text-[#dfe7e0] mb-2 leading-snug",children:c.name})]}),E.jsx("p",{className:"text-[10px] tracking-wider uppercase text-[#aab4ad] pt-2 border-t border-[rgba(223,231,224,0.06)]",children:c.issuer})]},f))})]})]})]})}function q3(){const{personal:o}=Wr,[n,a]=Wt.useState({name:"",email:"",subject:"",message:""}),[s,c]=Wt.useState(!1),f=d=>{d.preventDefault(),!(!n.name||!n.email||!n.message)&&(c(!0),setTimeout(()=>c(!1),5e3),a({name:"",email:"",subject:"",message:""}))};return E.jsxs("section",{id:"eternity",className:"relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]",children:[E.jsxs("div",{className:"flex items-center gap-4 mb-16",children:[E.jsxs("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:[E.jsx("b",{className:"text-[#e0231c] font-normal",children:"05"})," — Get in Touch"]}),E.jsx("div",{className:"flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]"}),E.jsx("span",{className:"text-xs tracking-[0.24em] uppercase text-[#78837c]",children:"CONNECT"})]}),E.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-20",children:[E.jsx("div",{className:"font-jp text-xs tracking-[0.4em] text-[#e0231c] uppercase mb-4",children:"連 絡 ・ 協 働"}),E.jsx("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-tight text-[#dfe7e0] leading-none mb-6",children:"Start a Conversation"}),E.jsx("p",{className:"text-sm sm:text-base text-[#aab4ad] font-light leading-relaxed",children:"For a full-stack opportunity, AI/ML role, hackathon collaboration, or technical project discussion — I'd love to hear from you."}),E.jsxs("a",{href:`mailto:${o.email}`,"data-cursor":!0,className:"inline-flex items-center gap-3 mt-8 px-8 py-4 bg-[#dfe7e0] text-[#05070a] rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#e0231c] hover:text-white transition-all duration-300 shadow-xl",children:[E.jsx(sx,{size:16}),E.jsx("span",{children:"Send Direct Email"})]})]}),E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto",children:[E.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[E.jsx("h3",{className:"text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-6",children:"Direct Contact & Socials"}),E.jsxs("a",{href:`mailto:${o.email}`,"data-cursor":!0,className:"flex items-center gap-4 p-5 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.25)] transition-all rounded-sm group",children:[E.jsx("div",{className:"w-10 h-10 rounded-full bg-[#121820] flex items-center justify-center text-[#e0231c] group-hover:bg-[#e0231c] group-hover:text-white transition-all",children:E.jsx(sx,{size:18})}),E.jsxs("div",{children:[E.jsx("span",{className:"block text-[10px] tracking-[0.2em] uppercase text-[#78837c]",children:"Email"}),E.jsx("span",{className:"text-xs font-mono text-[#dfe7e0]",children:o.email})]})]}),E.jsxs("a",{href:`tel:${o.phone.replace(/\s+/g,"")}`,"data-cursor":!0,className:"flex items-center gap-4 p-5 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.25)] transition-all rounded-sm group",children:[E.jsx("div",{className:"w-10 h-10 rounded-full bg-[#121820] flex items-center justify-center text-[#ff5a3c] group-hover:bg-[#ff5a3c] group-hover:text-white transition-all",children:E.jsx(N3,{size:18})}),E.jsxs("div",{children:[E.jsx("span",{className:"block text-[10px] tracking-[0.2em] uppercase text-[#78837c]",children:"Phone"}),E.jsx("span",{className:"text-xs font-mono text-[#dfe7e0]",children:o.phone})]})]}),E.jsxs("div",{className:"flex items-center gap-4 p-5 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] rounded-sm",children:[E.jsx("div",{className:"w-10 h-10 rounded-full bg-[#121820] flex items-center justify-center text-[#c9a24a]",children:E.jsx(A3,{size:18})}),E.jsxs("div",{children:[E.jsx("span",{className:"block text-[10px] tracking-[0.2em] uppercase text-[#78837c]",children:"Location"}),E.jsx("span",{className:"text-xs text-[#dfe7e0]",children:o.location})]})]}),E.jsxs("div",{className:"pt-4 grid grid-cols-2 gap-4",children:[E.jsxs("a",{href:o.github,target:"_blank",rel:"noopener noreferrer","data-cursor":!0,className:"flex items-center justify-center gap-2 p-4 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.3)] transition-all rounded-sm text-xs text-[#dfe7e0] uppercase tracking-wider font-mono",children:[E.jsx(Vx,{size:16}),E.jsx("span",{children:"GitHub"})]}),E.jsxs("a",{href:o.linkedin,target:"_blank",rel:"noopener noreferrer","data-cursor":!0,className:"flex items-center justify-center gap-2 p-4 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.3)] transition-all rounded-sm text-xs text-[#dfe7e0] uppercase tracking-wider font-mono",children:[E.jsx(E3,{size:16}),E.jsx("span",{children:"LinkedIn"})]})]})]}),E.jsxs("div",{className:"lg:col-span-7 bg-[#0a0e12] border border-[rgba(223,231,224,0.1)] p-8 rounded-sm",children:[E.jsx("h3",{className:"text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-6",children:"Send a Direct Message"}),s&&E.jsxs("div",{className:"mb-6 p-4 bg-[#e0231c]/15 border border-[#e0231c] text-[#dfe7e0] text-xs flex items-center gap-3 rounded-sm",children:[E.jsx(s3,{size:18,className:"text-[#e0231c]"}),E.jsx("span",{children:"Thank you! Your message has been received. I will reply shortly."})]}),E.jsxs("form",{onSubmit:f,className:"space-y-5",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-[10px] tracking-[0.2em] uppercase text-[#78837c] mb-2",children:"Your Name *"}),E.jsx("input",{type:"text",required:!0,value:n.name,onChange:d=>a({...n,name:d.target.value}),placeholder:"Mohith B",className:"w-full bg-[#121820] border border-[rgba(223,231,224,0.1)] rounded-sm px-4 py-3 text-xs text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#e0231c] transition-colors"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-[10px] tracking-[0.2em] uppercase text-[#78837c] mb-2",children:"Your Email *"}),E.jsx("input",{type:"email",required:!0,value:n.email,onChange:d=>a({...n,email:d.target.value}),placeholder:"your.email@domain.com",className:"w-full bg-[#121820] border border-[rgba(223,231,224,0.1)] rounded-sm px-4 py-3 text-xs text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#e0231c] transition-colors"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-[10px] tracking-[0.2em] uppercase text-[#78837c] mb-2",children:"Subject"}),E.jsx("input",{type:"text",value:n.subject,onChange:d=>a({...n,subject:d.target.value}),placeholder:"Project Opportunity / Hackathon / Inquiry",className:"w-full bg-[#121820] border border-[rgba(223,231,224,0.1)] rounded-sm px-4 py-3 text-xs text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#e0231c] transition-colors"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-[10px] tracking-[0.2em] uppercase text-[#78837c] mb-2",children:"Message *"}),E.jsx("textarea",{rows:4,required:!0,value:n.message,onChange:d=>a({...n,message:d.target.value}),placeholder:"Write your message here...",className:"w-full bg-[#121820] border border-[rgba(223,231,224,0.1)] rounded-sm px-4 py-3 text-xs text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#e0231c] transition-colors resize-none"})]}),E.jsxs("button",{type:"submit","data-cursor":!0,className:"w-full py-3.5 bg-[#e0231c] hover:bg-[#ff5a3c] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-colors flex items-center justify-center gap-2",children:[E.jsx(U3,{size:14}),E.jsx("span",{children:"Submit Message"})]})]})]})]})]})}function Y3(){const{personal:o}=Wr;return E.jsxs("footer",{className:"relative pt-20 pb-10 px-6 md:px-12 bg-[#05070a] border-t border-[rgba(223,231,224,0.08)]",children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16",children:[E.jsxs("div",{className:"lg:col-span-2",children:[E.jsxs("a",{href:"#top",className:"flex items-center gap-3 mb-4 group","data-cursor":!0,children:[E.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",className:"w-8 h-8",children:[E.jsx("circle",{cx:"22",cy:"25",r:"8.6",fill:"#e0231c",fillOpacity:"0.9"}),E.jsx("path",{d:"M5 13h34M9 18.4h26M22 8.5v27",stroke:"#dfe7e0",strokeWidth:"1.5"})]}),E.jsx("span",{className:"text-sm font-semibold tracking-[0.24em] text-[#dfe7e0]",children:o.name})]}),E.jsx("p",{className:"text-xs text-[#78837c] font-light leading-relaxed max-w-sm",children:"Computer Science & Engineering student at Atria Institute of Technology. Architecting intelligent full-stack platforms, AI vision applications, and rapid Vibe Coding solutions."})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-[10px] font-medium tracking-[0.22em] uppercase text-[#78837c] mb-4",children:"Navigation"}),E.jsxs("ul",{className:"space-y-2 text-xs text-[#aab4ad]",children:[E.jsx("li",{children:E.jsx("a",{href:"#gate",className:"hover:text-[#dfe7e0] transition-colors",children:"Systems & Tech"})}),E.jsx("li",{children:E.jsx("a",{href:"#pathways",className:"hover:text-[#dfe7e0] transition-colors",children:"Featured Projects"})}),E.jsx("li",{children:E.jsx("a",{href:"#experience",className:"hover:text-[#dfe7e0] transition-colors",children:"Experience & SIH"})}),E.jsx("li",{children:E.jsx("a",{href:"#lessons",className:"hover:text-[#dfe7e0] transition-colors",children:"Craft & Principles"})}),E.jsx("li",{children:E.jsx("a",{href:"#eternity",className:"hover:text-[#dfe7e0] transition-colors",children:"Get in Touch"})})]})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-[10px] font-medium tracking-[0.22em] uppercase text-[#78837c] mb-4",children:"Capabilities"}),E.jsxs("ul",{className:"space-y-2 text-xs text-[#aab4ad]",children:[E.jsx("li",{children:"Full-Stack Web Dev"}),E.jsx("li",{children:"Computer Vision & MediaPipe"}),E.jsx("li",{children:"Vibe Coding Workflows"}),E.jsx("li",{children:"AI/ML Fundamentals"}),E.jsx("li",{children:"Google Cloud & AppSheet"})]})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-[10px] font-medium tracking-[0.22em] uppercase text-[#78837c] mb-4",children:"Profiles & Socials"}),E.jsxs("ul",{className:"space-y-2 text-xs text-[#aab4ad]",children:[E.jsx("li",{children:E.jsx("a",{href:o.github,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#e0231c] transition-colors",children:"GitHub ↗"})}),E.jsx("li",{children:E.jsx("a",{href:o.linkedin,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#e0231c] transition-colors",children:"LinkedIn ↗"})}),E.jsx("li",{children:E.jsx("a",{href:`mailto:${o.email}`,className:"hover:text-[#e0231c] transition-colors",children:"Email Contact"})})]})]})]}),E.jsxs("div",{className:"pt-8 border-t border-[rgba(223,231,224,0.06)] flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.16em] uppercase text-[#78837c]",children:[E.jsxs("span",{children:["© ",new Date().getFullYear()," MOHITH B. ALL RIGHTS RESERVED."]}),E.jsx("span",{children:"BENGALURU, KARNATAKA, INDIA"}),E.jsx("a",{href:"#top",className:"hover:text-[#dfe7e0] transition-colors",children:"BACK TO TOP ↑"})]})]})}function W3(){const[o,n]=Wt.useState(!0);return E.jsxs("div",{className:"relative min-h-screen bg-[#05070a] text-[#dfe7e0]",children:[o&&E.jsx(WA,{onComplete:()=>n(!1)}),E.jsx(YA,{}),E.jsx("div",{id:"vignette"}),E.jsx("div",{id:"grain"}),E.jsx(ZA,{}),E.jsx(B3,{}),E.jsx(F3,{}),E.jsxs("main",{className:"relative z-10 max-w-[1600px] mx-auto",children:[E.jsx(H3,{}),E.jsx(G3,{}),E.jsx(k3,{}),E.jsx(j3,{}),E.jsx(X3,{}),E.jsx(q3,{})]}),E.jsx(Y3,{})]})}zM.createRoot(document.getElementById("root")).render(E.jsx(RM.StrictMode,{children:E.jsx(W3,{})}));
