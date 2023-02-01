(function(ie,X){typeof exports=="object"&&typeof module<"u"?X(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],X):(ie=typeof globalThis<"u"?globalThis:ie||self,X(ie["react-modal-component"]={},ie.React,ie.ReactDOM))})(this,function(ie,X,Te){"use strict";var we={},jr={get exports(){return we},set exports(n){we=n}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke;function Ar(){if(Ke)return xe;Ke=1;var n=X,c=Symbol.for("react.element"),y=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function u(o,f,p){var h,m={},P=null,M=null;p!==void 0&&(P=""+p),f.key!==void 0&&(P=""+f.key),f.ref!==void 0&&(M=f.ref);for(h in f)r.call(f,h)&&!t.hasOwnProperty(h)&&(m[h]=f[h]);if(o&&o.defaultProps)for(h in f=o.defaultProps,f)m[h]===void 0&&(m[h]=f[h]);return{$$typeof:c,type:o,key:P,ref:M,props:m,_owner:a.current}}return xe.Fragment=y,xe.jsx=u,xe.jsxs=u,xe}var _e={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function Nr(){return He||(He=1,process.env.NODE_ENV!=="production"&&function(){var n=X,c=Symbol.for("react.element"),y=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),t=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),o=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),B=Symbol.iterator,L="@@iterator";function z(e){if(e===null||typeof e!="object")return null;var i=B&&e[B]||e[L];return typeof i=="function"?i:null}var U=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function F(e){{for(var i=arguments.length,l=new Array(i>1?i-1:0),b=1;b<i;b++)l[b-1]=arguments[b];V("error",e,l)}}function V(e,i,l){{var b=U.ReactDebugCurrentFrame,k=b.getStackAddendum();k!==""&&(i+="%s",l=l.concat([k]));var $=l.map(function(A){return String(A)});$.unshift("Warning: "+i),Function.prototype.apply.call(console[e],console,$)}}var W=!1,v=!1,ne=!1,Re=!1,Oe=!1,ve;ve=Symbol.for("react.module.reference");function Se(e){return!!(typeof e=="string"||typeof e=="function"||e===r||e===t||Oe||e===a||e===p||e===h||Re||e===M||W||v||ne||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===m||e.$$typeof===u||e.$$typeof===o||e.$$typeof===f||e.$$typeof===ve||e.getModuleId!==void 0))}function ye(e,i,l){var b=e.displayName;if(b)return b;var k=i.displayName||i.name||"";return k!==""?l+"("+k+")":l}function Ee(e){return e.displayName||"Context"}function H(e){if(e==null)return null;if(typeof e.tag=="number"&&F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case r:return"Fragment";case y:return"Portal";case t:return"Profiler";case a:return"StrictMode";case p:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case o:var i=e;return Ee(i)+".Consumer";case u:var l=e;return Ee(l._context)+".Provider";case f:return ye(e,e.render,"ForwardRef");case m:var b=e.displayName||null;return b!==null?b:H(e.type)||"Memo";case P:{var k=e,$=k._payload,A=k._init;try{return H(A($))}catch{return null}}}return null}var K=Object.assign,ae=0,Z,re,ce,he,s,E,R;function C(){}C.__reactDisabledLog=!0;function T(){{if(ae===0){Z=console.log,re=console.info,ce=console.warn,he=console.error,s=console.group,E=console.groupCollapsed,R=console.groupEnd;var e={configurable:!0,enumerable:!0,value:C,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ae++}}function j(){{if(ae--,ae===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:K({},e,{value:Z}),info:K({},e,{value:re}),warn:K({},e,{value:ce}),error:K({},e,{value:he}),group:K({},e,{value:s}),groupCollapsed:K({},e,{value:E}),groupEnd:K({},e,{value:R})})}ae<0&&F("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var x=U.ReactCurrentDispatcher,_;function O(e,i,l){{if(_===void 0)try{throw Error()}catch(k){var b=k.stack.trim().match(/\n( *(at )?)/);_=b&&b[1]||""}return`
`+_+e}}var N=!1,S;{var G=typeof WeakMap=="function"?WeakMap:Map;S=new G}function d(e,i){if(!e||N)return"";{var l=S.get(e);if(l!==void 0)return l}var b;N=!0;var k=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var $;$=x.current,x.current=null,T();try{if(i){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(oe){b=oe}Reflect.construct(e,[],A)}else{try{A.call()}catch(oe){b=oe}e.call(A.prototype)}}else{try{throw Error()}catch(oe){b=oe}e()}}catch(oe){if(oe&&b&&typeof oe.stack=="string"){for(var w=oe.stack.split(`
`),J=b.stack.split(`
`),Y=w.length-1,q=J.length-1;Y>=1&&q>=0&&w[Y]!==J[q];)q--;for(;Y>=1&&q>=0;Y--,q--)if(w[Y]!==J[q]){if(Y!==1||q!==1)do if(Y--,q--,q<0||w[Y]!==J[q]){var ee=`
`+w[Y].replace(" at new "," at ");return e.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",e.displayName)),typeof e=="function"&&S.set(e,ee),ee}while(Y>=1&&q>=0);break}}}finally{N=!1,x.current=$,j(),Error.prepareStackTrace=k}var be=e?e.displayName||e.name:"",wr=be?O(be):"";return typeof e=="function"&&S.set(e,wr),wr}function Q(e,i,l){return d(e,!1)}function me(e){var i=e.prototype;return!!(i&&i.isReactComponent)}function le(e,i,l){if(e==null)return"";if(typeof e=="function")return d(e,me(e));if(typeof e=="string")return O(e);switch(e){case p:return O("Suspense");case h:return O("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Q(e.render);case m:return le(e.type,i,l);case P:{var b=e,k=b._payload,$=b._init;try{return le($(k),i,l)}catch{}}}return""}var Ne=Object.prototype.hasOwnProperty,hr={},mr=U.ReactDebugCurrentFrame;function ke(e){if(e){var i=e._owner,l=le(e.type,e._source,i?i.type:null);mr.setExtraStackFrame(l)}else mr.setExtraStackFrame(null)}function Hr(e,i,l,b,k){{var $=Function.call.bind(Ne);for(var A in e)if($(e,A)){var w=void 0;try{if(typeof e[A]!="function"){var J=Error((b||"React class")+": "+l+" type `"+A+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[A]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw J.name="Invariant Violation",J}w=e[A](i,A,b,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Y){w=Y}w&&!(w instanceof Error)&&(ke(k),F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",b||"React class",l,A,typeof w),ke(null)),w instanceof Error&&!(w.message in hr)&&(hr[w.message]=!0,ke(k),F("Failed %s type: %s",l,w.message),ke(null))}}}var Zr=Array.isArray;function ze(e){return Zr(e)}function Qr(e){{var i=typeof Symbol=="function"&&Symbol.toStringTag,l=i&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l}}function et(e){try{return gr(e),!1}catch{return!0}}function gr(e){return""+e}function br(e){if(et(e))return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Qr(e)),gr(e)}var Pe=U.ReactCurrentOwner,rt={key:!0,ref:!0,__self:!0,__source:!0},Tr,xr,Be;Be={};function tt(e){if(Ne.call(e,"ref")){var i=Object.getOwnPropertyDescriptor(e,"ref").get;if(i&&i.isReactWarning)return!1}return e.ref!==void 0}function nt(e){if(Ne.call(e,"key")){var i=Object.getOwnPropertyDescriptor(e,"key").get;if(i&&i.isReactWarning)return!1}return e.key!==void 0}function at(e,i){if(typeof e.ref=="string"&&Pe.current&&i&&Pe.current.stateNode!==i){var l=H(Pe.current.type);Be[l]||(F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',H(Pe.current.type),e.ref),Be[l]=!0)}}function ot(e,i){{var l=function(){Tr||(Tr=!0,F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}}function it(e,i){{var l=function(){xr||(xr=!0,F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};l.isReactWarning=!0,Object.defineProperty(e,"ref",{get:l,configurable:!0})}}var st=function(e,i,l,b,k,$,A){var w={$$typeof:c,type:e,key:i,ref:l,props:A,_owner:$};return w._store={},Object.defineProperty(w._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(w,"_self",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.defineProperty(w,"_source",{configurable:!1,enumerable:!1,writable:!1,value:k}),Object.freeze&&(Object.freeze(w.props),Object.freeze(w)),w};function ut(e,i,l,b,k){{var $,A={},w=null,J=null;l!==void 0&&(br(l),w=""+l),nt(i)&&(br(i.key),w=""+i.key),tt(i)&&(J=i.ref,at(i,k));for($ in i)Ne.call(i,$)&&!rt.hasOwnProperty($)&&(A[$]=i[$]);if(e&&e.defaultProps){var Y=e.defaultProps;for($ in Y)A[$]===void 0&&(A[$]=Y[$])}if(w||J){var q=typeof e=="function"?e.displayName||e.name||"Unknown":e;w&&ot(A,q),J&&it(A,q)}return st(e,w,J,k,b,Pe.current,A)}}var Ge=U.ReactCurrentOwner,_r=U.ReactDebugCurrentFrame;function ge(e){if(e){var i=e._owner,l=le(e.type,e._source,i?i.type:null);_r.setExtraStackFrame(l)}else _r.setExtraStackFrame(null)}var Je;Je=!1;function Xe(e){return typeof e=="object"&&e!==null&&e.$$typeof===c}function Cr(){{if(Ge.current){var e=H(Ge.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ft(e){{if(e!==void 0){var i=e.fileName.replace(/^.*[\\\/]/,""),l=e.lineNumber;return`

Check your code at `+i+":"+l+"."}return""}}var Rr={};function ct(e){{var i=Cr();if(!i){var l=typeof e=="string"?e:e.displayName||e.name;l&&(i=`

Check the top-level render call using <`+l+">.")}return i}}function Or(e,i){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var l=ct(i);if(Rr[l])return;Rr[l]=!0;var b="";e&&e._owner&&e._owner!==Ge.current&&(b=" It was passed a child from "+H(e._owner.type)+"."),ge(e),F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,b),ge(null)}}function Sr(e,i){{if(typeof e!="object")return;if(ze(e))for(var l=0;l<e.length;l++){var b=e[l];Xe(b)&&Or(b,i)}else if(Xe(e))e._store&&(e._store.validated=!0);else if(e){var k=z(e);if(typeof k=="function"&&k!==e.entries)for(var $=k.call(e),A;!(A=$.next()).done;)Xe(A.value)&&Or(A.value,i)}}}function lt(e){{var i=e.type;if(i==null||typeof i=="string")return;var l;if(typeof i=="function")l=i.propTypes;else if(typeof i=="object"&&(i.$$typeof===f||i.$$typeof===m))l=i.propTypes;else return;if(l){var b=H(i);Hr(l,e.props,"prop",b,e)}else if(i.PropTypes!==void 0&&!Je){Je=!0;var k=H(i);F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",k||"Unknown")}typeof i.getDefaultProps=="function"&&!i.getDefaultProps.isReactClassApproved&&F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dt(e){{for(var i=Object.keys(e.props),l=0;l<i.length;l++){var b=i[l];if(b!=="children"&&b!=="key"){ge(e),F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",b),ge(null);break}}e.ref!==null&&(ge(e),F("Invalid attribute `ref` supplied to `React.Fragment`."),ge(null))}}function Pr(e,i,l,b,k,$){{var A=Se(e);if(!A){var w="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var J=ft(k);J?w+=J:w+=Cr();var Y;e===null?Y="null":ze(e)?Y="array":e!==void 0&&e.$$typeof===c?(Y="<"+(H(e.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):Y=typeof e,F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Y,w)}var q=ut(e,i,l,k,$);if(q==null)return q;if(A){var ee=i.children;if(ee!==void 0)if(b)if(ze(ee)){for(var be=0;be<ee.length;be++)Sr(ee[be],e);Object.freeze&&Object.freeze(ee)}else F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Sr(ee,e)}return e===r?dt(q):lt(q),q}}function pt(e,i,l){return Pr(e,i,l,!0)}function vt(e,i,l){return Pr(e,i,l,!1)}var yt=vt,Et=pt;_e.Fragment=r,_e.jsx=yt,_e.jsxs=Et}()),_e}(function(n){process.env.NODE_ENV==="production"?n.exports=Ar():n.exports=Nr()})(jr);const se=we.jsx,kr=we.jsxs;function je(){return je=Object.assign?Object.assign.bind():function(n){for(var c=1;c<arguments.length;c++){var y=arguments[c];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&(n[r]=y[r])}return n},je.apply(this,arguments)}function Ze(n,c){if(n==null)return{};var y={},r=Object.keys(n),a,t;for(t=0;t<r.length;t++)a=r[t],!(c.indexOf(a)>=0)&&(y[a]=n[a]);return y}function De(n,c){return De=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},De(n,c)}function Qe(n,c){n.prototype=Object.create(c.prototype),n.prototype.constructor=n,De(n,c)}var g={},er={get exports(){return g},set exports(n){g=n}},Ae={},Dr={get exports(){return Ae},set exports(n){Ae=n}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr;function Ir(){if(rr)return D;rr=1;var n=typeof Symbol=="function"&&Symbol.for,c=n?Symbol.for("react.element"):60103,y=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,t=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,o=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,P=n?Symbol.for("react.suspense_list"):60120,M=n?Symbol.for("react.memo"):60115,B=n?Symbol.for("react.lazy"):60116,L=n?Symbol.for("react.block"):60121,z=n?Symbol.for("react.fundamental"):60117,U=n?Symbol.for("react.responder"):60118,F=n?Symbol.for("react.scope"):60119;function V(v){if(typeof v=="object"&&v!==null){var ne=v.$$typeof;switch(ne){case c:switch(v=v.type,v){case f:case p:case r:case t:case a:case m:return v;default:switch(v=v&&v.$$typeof,v){case o:case h:case B:case M:case u:return v;default:return ne}}case y:return ne}}}function W(v){return V(v)===p}return D.AsyncMode=f,D.ConcurrentMode=p,D.ContextConsumer=o,D.ContextProvider=u,D.Element=c,D.ForwardRef=h,D.Fragment=r,D.Lazy=B,D.Memo=M,D.Portal=y,D.Profiler=t,D.StrictMode=a,D.Suspense=m,D.isAsyncMode=function(v){return W(v)||V(v)===f},D.isConcurrentMode=W,D.isContextConsumer=function(v){return V(v)===o},D.isContextProvider=function(v){return V(v)===u},D.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===c},D.isForwardRef=function(v){return V(v)===h},D.isFragment=function(v){return V(v)===r},D.isLazy=function(v){return V(v)===B},D.isMemo=function(v){return V(v)===M},D.isPortal=function(v){return V(v)===y},D.isProfiler=function(v){return V(v)===t},D.isStrictMode=function(v){return V(v)===a},D.isSuspense=function(v){return V(v)===m},D.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===r||v===p||v===t||v===a||v===m||v===P||typeof v=="object"&&v!==null&&(v.$$typeof===B||v.$$typeof===M||v.$$typeof===u||v.$$typeof===o||v.$$typeof===h||v.$$typeof===z||v.$$typeof===U||v.$$typeof===F||v.$$typeof===L)},D.typeOf=V,D}var I={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr;function $r(){return tr||(tr=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,c=n?Symbol.for("react.element"):60103,y=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,t=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,o=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,P=n?Symbol.for("react.suspense_list"):60120,M=n?Symbol.for("react.memo"):60115,B=n?Symbol.for("react.lazy"):60116,L=n?Symbol.for("react.block"):60121,z=n?Symbol.for("react.fundamental"):60117,U=n?Symbol.for("react.responder"):60118,F=n?Symbol.for("react.scope"):60119;function V(d){return typeof d=="string"||typeof d=="function"||d===r||d===p||d===t||d===a||d===m||d===P||typeof d=="object"&&d!==null&&(d.$$typeof===B||d.$$typeof===M||d.$$typeof===u||d.$$typeof===o||d.$$typeof===h||d.$$typeof===z||d.$$typeof===U||d.$$typeof===F||d.$$typeof===L)}function W(d){if(typeof d=="object"&&d!==null){var Q=d.$$typeof;switch(Q){case c:var me=d.type;switch(me){case f:case p:case r:case t:case a:case m:return me;default:var le=me&&me.$$typeof;switch(le){case o:case h:case B:case M:case u:return le;default:return Q}}case y:return Q}}}var v=f,ne=p,Re=o,Oe=u,ve=c,Se=h,ye=r,Ee=B,H=M,K=y,ae=t,Z=a,re=m,ce=!1;function he(d){return ce||(ce=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),s(d)||W(d)===f}function s(d){return W(d)===p}function E(d){return W(d)===o}function R(d){return W(d)===u}function C(d){return typeof d=="object"&&d!==null&&d.$$typeof===c}function T(d){return W(d)===h}function j(d){return W(d)===r}function x(d){return W(d)===B}function _(d){return W(d)===M}function O(d){return W(d)===y}function N(d){return W(d)===t}function S(d){return W(d)===a}function G(d){return W(d)===m}I.AsyncMode=v,I.ConcurrentMode=ne,I.ContextConsumer=Re,I.ContextProvider=Oe,I.Element=ve,I.ForwardRef=Se,I.Fragment=ye,I.Lazy=Ee,I.Memo=H,I.Portal=K,I.Profiler=ae,I.StrictMode=Z,I.Suspense=re,I.isAsyncMode=he,I.isConcurrentMode=s,I.isContextConsumer=E,I.isContextProvider=R,I.isElement=C,I.isForwardRef=T,I.isFragment=j,I.isLazy=x,I.isMemo=_,I.isPortal=O,I.isProfiler=N,I.isStrictMode=S,I.isSuspense=G,I.isValidElementType=V,I.typeOf=W}()),I}var nr;function ar(){return nr||(nr=1,function(n){process.env.NODE_ENV==="production"?n.exports=Ir():n.exports=$r()}(Dr)),Ae}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ie,or;function Mr(){if(or)return Ie;or=1;var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function r(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function a(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var u={},o=0;o<10;o++)u["_"+String.fromCharCode(o)]=o;var f=Object.getOwnPropertyNames(u).map(function(h){return u[h]});if(f.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(h){p[h]=h}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Ie=a()?Object.assign:function(t,u){for(var o,f=r(t),p,h=1;h<arguments.length;h++){o=Object(arguments[h]);for(var m in o)c.call(o,m)&&(f[m]=o[m]);if(n){p=n(o);for(var P=0;P<p.length;P++)y.call(o,p[P])&&(f[p[P]]=o[p[P]])}}return f},Ie}var $e,ir;function Me(){if(ir)return $e;ir=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $e=n,$e}var Le,sr;function ur(){return sr||(sr=1,Le=Function.call.bind(Object.prototype.hasOwnProperty)),Le}var Fe,fr;function Lr(){if(fr)return Fe;fr=1;var n=function(){};if(process.env.NODE_ENV!=="production"){var c=Me(),y={},r=ur();n=function(t){var u="Warning: "+t;typeof console<"u"&&console.error(u);try{throw new Error(u)}catch{}}}function a(t,u,o,f,p){if(process.env.NODE_ENV!=="production"){for(var h in t)if(r(t,h)){var m;try{if(typeof t[h]!="function"){var P=Error((f||"React class")+": "+o+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}m=t[h](u,h,f,o,null,c)}catch(B){m=B}if(m&&!(m instanceof Error)&&n((f||"React class")+": type specification of "+o+" `"+h+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof m+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),m instanceof Error&&!(m.message in y)){y[m.message]=!0;var M=p?p():"";n("Failed "+o+" type: "+m.message+(M??""))}}}}return a.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(y={})},Fe=a,Fe}var Ye,cr;function Fr(){if(cr)return Ye;cr=1;var n=ar(),c=Mr(),y=Me(),r=ur(),a=Lr(),t=function(){};process.env.NODE_ENV!=="production"&&(t=function(o){var f="Warning: "+o;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}});function u(){return null}return Ye=function(o,f){var p=typeof Symbol=="function"&&Symbol.iterator,h="@@iterator";function m(s){var E=s&&(p&&s[p]||s[h]);if(typeof E=="function")return E}var P="<<anonymous>>",M={array:U("array"),bigint:U("bigint"),bool:U("boolean"),func:U("function"),number:U("number"),object:U("object"),string:U("string"),symbol:U("symbol"),any:F(),arrayOf:V,element:W(),elementType:v(),instanceOf:ne,node:Se(),objectOf:Oe,oneOf:Re,oneOfType:ve,shape:Ee,exact:H};function B(s,E){return s===E?s!==0||1/s===1/E:s!==s&&E!==E}function L(s,E){this.message=s,this.data=E&&typeof E=="object"?E:{},this.stack=""}L.prototype=Error.prototype;function z(s){if(process.env.NODE_ENV!=="production")var E={},R=0;function C(j,x,_,O,N,S,G){if(O=O||P,S=S||_,G!==y){if(f){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var Q=O+":"+_;!E[Q]&&R<3&&(t("You are manually calling a React.PropTypes validation function for the `"+S+"` prop on `"+O+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),E[Q]=!0,R++)}}return x[_]==null?j?x[_]===null?new L("The "+N+" `"+S+"` is marked as required "+("in `"+O+"`, but its value is `null`.")):new L("The "+N+" `"+S+"` is marked as required in "+("`"+O+"`, but its value is `undefined`.")):null:s(x,_,O,N,S)}var T=C.bind(null,!1);return T.isRequired=C.bind(null,!0),T}function U(s){function E(R,C,T,j,x,_){var O=R[C],N=Z(O);if(N!==s){var S=re(O);return new L("Invalid "+j+" `"+x+"` of type "+("`"+S+"` supplied to `"+T+"`, expected ")+("`"+s+"`."),{expectedType:s})}return null}return z(E)}function F(){return z(u)}function V(s){function E(R,C,T,j,x){if(typeof s!="function")return new L("Property `"+x+"` of component `"+T+"` has invalid PropType notation inside arrayOf.");var _=R[C];if(!Array.isArray(_)){var O=Z(_);return new L("Invalid "+j+" `"+x+"` of type "+("`"+O+"` supplied to `"+T+"`, expected an array."))}for(var N=0;N<_.length;N++){var S=s(_,N,T,j,x+"["+N+"]",y);if(S instanceof Error)return S}return null}return z(E)}function W(){function s(E,R,C,T,j){var x=E[R];if(!o(x)){var _=Z(x);return new L("Invalid "+T+" `"+j+"` of type "+("`"+_+"` supplied to `"+C+"`, expected a single ReactElement."))}return null}return z(s)}function v(){function s(E,R,C,T,j){var x=E[R];if(!n.isValidElementType(x)){var _=Z(x);return new L("Invalid "+T+" `"+j+"` of type "+("`"+_+"` supplied to `"+C+"`, expected a single ReactElement type."))}return null}return z(s)}function ne(s){function E(R,C,T,j,x){if(!(R[C]instanceof s)){var _=s.name||P,O=he(R[C]);return new L("Invalid "+j+" `"+x+"` of type "+("`"+O+"` supplied to `"+T+"`, expected ")+("instance of `"+_+"`."))}return null}return z(E)}function Re(s){if(!Array.isArray(s))return process.env.NODE_ENV!=="production"&&(arguments.length>1?t("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):t("Invalid argument supplied to oneOf, expected an array.")),u;function E(R,C,T,j,x){for(var _=R[C],O=0;O<s.length;O++)if(B(_,s[O]))return null;var N=JSON.stringify(s,function(G,d){var Q=re(d);return Q==="symbol"?String(d):d});return new L("Invalid "+j+" `"+x+"` of value `"+String(_)+"` "+("supplied to `"+T+"`, expected one of "+N+"."))}return z(E)}function Oe(s){function E(R,C,T,j,x){if(typeof s!="function")return new L("Property `"+x+"` of component `"+T+"` has invalid PropType notation inside objectOf.");var _=R[C],O=Z(_);if(O!=="object")return new L("Invalid "+j+" `"+x+"` of type "+("`"+O+"` supplied to `"+T+"`, expected an object."));for(var N in _)if(r(_,N)){var S=s(_,N,T,j,x+"."+N,y);if(S instanceof Error)return S}return null}return z(E)}function ve(s){if(!Array.isArray(s))return process.env.NODE_ENV!=="production"&&t("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var E=0;E<s.length;E++){var R=s[E];if(typeof R!="function")return t("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ce(R)+" at index "+E+"."),u}function C(T,j,x,_,O){for(var N=[],S=0;S<s.length;S++){var G=s[S],d=G(T,j,x,_,O,y);if(d==null)return null;d.data&&r(d.data,"expectedType")&&N.push(d.data.expectedType)}var Q=N.length>0?", expected one of type ["+N.join(", ")+"]":"";return new L("Invalid "+_+" `"+O+"` supplied to "+("`"+x+"`"+Q+"."))}return z(C)}function Se(){function s(E,R,C,T,j){return K(E[R])?null:new L("Invalid "+T+" `"+j+"` supplied to "+("`"+C+"`, expected a ReactNode."))}return z(s)}function ye(s,E,R,C,T){return new L((s||"React class")+": "+E+" type `"+R+"."+C+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+T+"`.")}function Ee(s){function E(R,C,T,j,x){var _=R[C],O=Z(_);if(O!=="object")return new L("Invalid "+j+" `"+x+"` of type `"+O+"` "+("supplied to `"+T+"`, expected `object`."));for(var N in s){var S=s[N];if(typeof S!="function")return ye(T,j,x,N,re(S));var G=S(_,N,T,j,x+"."+N,y);if(G)return G}return null}return z(E)}function H(s){function E(R,C,T,j,x){var _=R[C],O=Z(_);if(O!=="object")return new L("Invalid "+j+" `"+x+"` of type `"+O+"` "+("supplied to `"+T+"`, expected `object`."));var N=c({},R[C],s);for(var S in N){var G=s[S];if(r(s,S)&&typeof G!="function")return ye(T,j,x,S,re(G));if(!G)return new L("Invalid "+j+" `"+x+"` key `"+S+"` supplied to `"+T+"`.\nBad object: "+JSON.stringify(R[C],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(s),null,"  "));var d=G(_,S,T,j,x+"."+S,y);if(d)return d}return null}return z(E)}function K(s){switch(typeof s){case"number":case"string":case"undefined":return!0;case"boolean":return!s;case"object":if(Array.isArray(s))return s.every(K);if(s===null||o(s))return!0;var E=m(s);if(E){var R=E.call(s),C;if(E!==s.entries){for(;!(C=R.next()).done;)if(!K(C.value))return!1}else for(;!(C=R.next()).done;){var T=C.value;if(T&&!K(T[1]))return!1}}else return!1;return!0;default:return!1}}function ae(s,E){return s==="symbol"?!0:E?E["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&E instanceof Symbol:!1}function Z(s){var E=typeof s;return Array.isArray(s)?"array":s instanceof RegExp?"object":ae(E,s)?"symbol":E}function re(s){if(typeof s>"u"||s===null)return""+s;var E=Z(s);if(E==="object"){if(s instanceof Date)return"date";if(s instanceof RegExp)return"regexp"}return E}function ce(s){var E=re(s);switch(E){case"array":case"object":return"an "+E;case"boolean":case"date":case"regexp":return"a "+E;default:return E}}function he(s){return!s.constructor||!s.constructor.name?P:s.constructor.name}return M.checkPropTypes=a,M.resetWarningCache=a.resetWarningCache,M.PropTypes=M,M},Ye}var We,lr;function Yr(){if(lr)return We;lr=1;var n=Me();function c(){}function y(){}return y.resetWarningCache=c,We=function(){function r(u,o,f,p,h,m){if(m!==n){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}r.isRequired=r;function a(){return r}var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:y,resetWarningCache:c};return t.PropTypes=t,t},We}if(process.env.NODE_ENV!=="production"){var Wr=ar(),qr=!0;er.exports=Fr()(Wr.isElement,qr)}else er.exports=Yr()();function Ur(n,c){return n.classList?!!c&&n.classList.contains(c):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+c+" ")!==-1}function Vr(n,c){n.classList?n.classList.add(c):Ur(n,c)||(typeof n.className=="string"?n.className=n.className+" "+c:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+c))}function dr(n,c){return n.replace(new RegExp("(^|\\s)"+c+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function zr(n,c){n.classList?n.classList.remove(c):typeof n.className=="string"?n.className=dr(n.className,c):n.setAttribute("class",dr(n.className&&n.className.baseVal||"",c))}const pr={disabled:!1};var Br=process.env.NODE_ENV!=="production"?g.oneOfType([g.number,g.shape({enter:g.number,exit:g.number,appear:g.number}).isRequired]):null,Gr=process.env.NODE_ENV!=="production"?g.oneOfType([g.string,g.shape({enter:g.string,exit:g.string,active:g.string}),g.shape({enter:g.string,enterDone:g.string,enterActive:g.string,exit:g.string,exitDone:g.string,exitActive:g.string})]):null;const vr=X.createContext(null);var yr=function(c){return c.scrollTop},Ce="unmounted",ue="exited",fe="entering",de="entered",qe="exiting",te=function(n){Qe(c,n);function c(r,a){var t;t=n.call(this,r,a)||this;var u=a,o=u&&!u.isMounting?r.enter:r.appear,f;return t.appearStatus=null,r.in?o?(f=ue,t.appearStatus=fe):f=de:r.unmountOnExit||r.mountOnEnter?f=Ce:f=ue,t.state={status:f},t.nextCallback=null,t}c.getDerivedStateFromProps=function(a,t){var u=a.in;return u&&t.status===Ce?{status:ue}:null};var y=c.prototype;return y.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},y.componentDidUpdate=function(a){var t=null;if(a!==this.props){var u=this.state.status;this.props.in?u!==fe&&u!==de&&(t=fe):(u===fe||u===de)&&(t=qe)}this.updateStatus(!1,t)},y.componentWillUnmount=function(){this.cancelNextCallback()},y.getTimeouts=function(){var a=this.props.timeout,t,u,o;return t=u=o=a,a!=null&&typeof a!="number"&&(t=a.exit,u=a.enter,o=a.appear!==void 0?a.appear:u),{exit:t,enter:u,appear:o}},y.updateStatus=function(a,t){if(a===void 0&&(a=!1),t!==null)if(this.cancelNextCallback(),t===fe){if(this.props.unmountOnExit||this.props.mountOnEnter){var u=this.props.nodeRef?this.props.nodeRef.current:Te.findDOMNode(this);u&&yr(u)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ue&&this.setState({status:Ce})},y.performEnter=function(a){var t=this,u=this.props.enter,o=this.context?this.context.isMounting:a,f=this.props.nodeRef?[o]:[Te.findDOMNode(this),o],p=f[0],h=f[1],m=this.getTimeouts(),P=o?m.appear:m.enter;if(!a&&!u||pr.disabled){this.safeSetState({status:de},function(){t.props.onEntered(p)});return}this.props.onEnter(p,h),this.safeSetState({status:fe},function(){t.props.onEntering(p,h),t.onTransitionEnd(P,function(){t.safeSetState({status:de},function(){t.props.onEntered(p,h)})})})},y.performExit=function(){var a=this,t=this.props.exit,u=this.getTimeouts(),o=this.props.nodeRef?void 0:Te.findDOMNode(this);if(!t||pr.disabled){this.safeSetState({status:ue},function(){a.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:qe},function(){a.props.onExiting(o),a.onTransitionEnd(u.exit,function(){a.safeSetState({status:ue},function(){a.props.onExited(o)})})})},y.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},y.safeSetState=function(a,t){t=this.setNextCallback(t),this.setState(a,t)},y.setNextCallback=function(a){var t=this,u=!0;return this.nextCallback=function(o){u&&(u=!1,t.nextCallback=null,a(o))},this.nextCallback.cancel=function(){u=!1},this.nextCallback},y.onTransitionEnd=function(a,t){this.setNextCallback(t);var u=this.props.nodeRef?this.props.nodeRef.current:Te.findDOMNode(this),o=a==null&&!this.props.addEndListener;if(!u||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[u,this.nextCallback],p=f[0],h=f[1];this.props.addEndListener(p,h)}a!=null&&setTimeout(this.nextCallback,a)},y.render=function(){var a=this.state.status;if(a===Ce)return null;var t=this.props,u=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var o=Ze(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return X.createElement(vr.Provider,{value:null},typeof u=="function"?u(a,o):X.cloneElement(X.Children.only(u),o))},c}(X.Component);te.contextType=vr,te.propTypes=process.env.NODE_ENV!=="production"?{nodeRef:g.shape({current:typeof Element>"u"?g.any:function(n,c,y,r,a,t){var u=n[c];return g.instanceOf(u&&"ownerDocument"in u?u.ownerDocument.defaultView.Element:Element)(n,c,y,r,a,t)}}),children:g.oneOfType([g.func.isRequired,g.element.isRequired]).isRequired,in:g.bool,mountOnEnter:g.bool,unmountOnExit:g.bool,appear:g.bool,enter:g.bool,exit:g.bool,timeout:function(c){var y=Br;c.addEndListener||(y=y.isRequired);for(var r=arguments.length,a=new Array(r>1?r-1:0),t=1;t<r;t++)a[t-1]=arguments[t];return y.apply(void 0,[c].concat(a))},addEndListener:g.func,onEnter:g.func,onEntering:g.func,onEntered:g.func,onExit:g.func,onExiting:g.func,onExited:g.func}:{};function pe(){}te.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:pe,onEntering:pe,onEntered:pe,onExit:pe,onExiting:pe,onExited:pe},te.UNMOUNTED=Ce,te.EXITED=ue,te.ENTERING=fe,te.ENTERED=de,te.EXITING=qe;const Er=te;var Jr=function(c,y){return c&&y&&y.split(" ").forEach(function(r){return Vr(c,r)})},Ue=function(c,y){return c&&y&&y.split(" ").forEach(function(r){return zr(c,r)})},Ve=function(n){Qe(c,n);function c(){for(var r,a=arguments.length,t=new Array(a),u=0;u<a;u++)t[u]=arguments[u];return r=n.call.apply(n,[this].concat(t))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(o,f){var p=r.resolveArguments(o,f),h=p[0],m=p[1];r.removeClasses(h,"exit"),r.addClass(h,m?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(o,f)},r.onEntering=function(o,f){var p=r.resolveArguments(o,f),h=p[0],m=p[1],P=m?"appear":"enter";r.addClass(h,P,"active"),r.props.onEntering&&r.props.onEntering(o,f)},r.onEntered=function(o,f){var p=r.resolveArguments(o,f),h=p[0],m=p[1],P=m?"appear":"enter";r.removeClasses(h,P),r.addClass(h,P,"done"),r.props.onEntered&&r.props.onEntered(o,f)},r.onExit=function(o){var f=r.resolveArguments(o),p=f[0];r.removeClasses(p,"appear"),r.removeClasses(p,"enter"),r.addClass(p,"exit","base"),r.props.onExit&&r.props.onExit(o)},r.onExiting=function(o){var f=r.resolveArguments(o),p=f[0];r.addClass(p,"exit","active"),r.props.onExiting&&r.props.onExiting(o)},r.onExited=function(o){var f=r.resolveArguments(o),p=f[0];r.removeClasses(p,"exit"),r.addClass(p,"exit","done"),r.props.onExited&&r.props.onExited(o)},r.resolveArguments=function(o,f){return r.props.nodeRef?[r.props.nodeRef.current,o]:[o,f]},r.getClassNames=function(o){var f=r.props.classNames,p=typeof f=="string",h=p&&f?f+"-":"",m=p?""+h+o:f[o],P=p?m+"-active":f[o+"Active"],M=p?m+"-done":f[o+"Done"];return{baseClassName:m,activeClassName:P,doneClassName:M}},r}var y=c.prototype;return y.addClass=function(a,t,u){var o=this.getClassNames(t)[u+"ClassName"],f=this.getClassNames("enter"),p=f.doneClassName;t==="appear"&&u==="done"&&p&&(o+=" "+p),u==="active"&&a&&yr(a),o&&(this.appliedClasses[t][u]=o,Jr(a,o))},y.removeClasses=function(a,t){var u=this.appliedClasses[t],o=u.base,f=u.active,p=u.done;this.appliedClasses[t]={},o&&Ue(a,o),f&&Ue(a,f),p&&Ue(a,p)},y.render=function(){var a=this.props;a.classNames;var t=Ze(a,["classNames"]);return X.createElement(Er,je({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},c}(X.Component);Ve.defaultProps={classNames:""},Ve.propTypes=process.env.NODE_ENV!=="production"?je({},Er.propTypes,{classNames:Gr,onEnter:g.func,onEntering:g.func,onEntered:g.func,onExit:g.func,onExiting:g.func,onExited:g.func}):{};const Xr=Ve;function Kr({show:n,title:c,children:y,onClose:r}){const a=t=>{(t.charcode||t.keyCode)===27&&r()};return X.useEffect(()=>(document.body.addEventListener("keydown",a),function(){document.body.removeEventListener("keydown",a)}),[]),Te.createPortal(se(Xr,{in:n,unmountOnExit:!0,timeout:{enter:0,exit:300},children:se("div",{className:"modal",onClick:r,onKeyDown:r,children:kr("div",{className:"modal-content",onClick:t=>t.stopPropagation(),onKeyDown:t=>t.stopPropagation(),children:[c&&se("div",{className:"modal-header",children:se("h4",{className:"modal-title",children:c})}),se("div",{className:"modal-body",children:y}),se("div",{className:"modal-footer",children:se("button",{onClick:r,className:"close"})})]})})}),document.body)}ie.Modal=Kr,Object.defineProperty(ie,Symbol.toStringTag,{value:"Module"})});
