/* @preserve
 * Leaflet 1.3.3+Detached: b22aef4aa71afd640bf8e91915b78899bf64ff89.b22aef4, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";function i(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++){o=arguments[e];for(i in o)t[i]=o[i]}return t}function e(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}function n(t){return t._leaflet_id=t._leaflet_id||++ei,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function s(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function r(){return!1}function a(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return h(t).split(/\s+/)}function l(t,i){t.hasOwnProperty("options")||(t.options=t.options?ii(t.options):{});for(var e in i)t.options[e]=i[e];return t.options}function c(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}function _(t,i){return t.replace(ni,function(t,e){var n=i[e];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(i)),n})}function d(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}function p(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}function m(t){var i=+new Date,e=Math.max(0,16-(i-ri));return ri=i+e,window.setTimeout(t,e)}function f(t,i,n){if(!n||ai!==m)return ai.call(window,e(t,i));t.call(i)}function g(t){t&&hi.call(window,t)}function v(){}function y(t){if("undefined"!=typeof L&&L&&L.Mixin){t=oi(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}function x(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}function w(t,i,e){return t instanceof x?t:oi(t)?new x(t[0],t[1]):void 0===t||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new x(t.x,t.y):new x(t,i,e)}function P(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function b(t,i){return!t||t instanceof P?t:new P(t,i)}function T(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function z(t,i){return t instanceof T?t:new T(t,i)}function M(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function C(t,i,e){return t instanceof M?t:oi(t)&&"object"!=typeof t[0]?3===t.length?new M(t[0],t[1],t[2]):2===t.length?new M(t[0],t[1]):null:void 0===t||null===t?t:"object"==typeof t&&"lat"in t?new M(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new M(t,i,e)}function S(t,i,e,n){if(oi(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function Z(t,i,e,n){return new S(t,i,e,n)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)a=r[n],h+=(n?"L":"M")+a.x+" "+a.y;h+=i?Ji?"z":"x":""}return h||"M0 0"}function A(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}function B(t,i,e,n){return"touchstart"===i?O(t,e,n):"touchmove"===i?W(t,e,n):"touchend"===i&&H(t,e,n),this}function I(t,i,e){var n=t["_leaflet_"+i+e];return"touchstart"===i?t.removeEventListener(te,n,!1):"touchmove"===i?t.removeEventListener(ie,n,!1):"touchend"===i&&(t.removeEventListener(ee,n,!1),t.removeEventListener(ne,n,!1)),this}function O(t,i,n){var o=e(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(oe.indexOf(t.target.tagName)<0))return;Pt(t)}j(t,i)});t["_leaflet_touchstart"+n]=o,t.addEventListener(te,o,!1),re||(document.documentElement.addEventListener(te,R,!0),document.documentElement.addEventListener(ie,N,!0),document.documentElement.addEventListener(ee,D,!0),document.documentElement.addEventListener(ne,D,!0),re=!0)}function R(t){se[t.pointerId]=t,ae++}function N(t){se[t.pointerId]&&(se[t.pointerId]=t)}function D(t){delete se[t.pointerId],ae--}function j(t,i){t.touches=[];for(var e in se)t.touches.push(se[e]);t.changedTouches=[t],i(t)}function W(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&j(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(ie,n,!1)}function H(t,i,e){var n=function(t){j(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(ee,n,!1),t.addEventListener(ne,n,!1)}function F(t,i,e){function n(t){var i;if(Vi){if(!bi||"mouse"===t.pointerType)return;i=ae}else i=t.touches.length;if(!(i>1)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=n>0&&n<=h,s=e}}function o(t){if(a&&!r.cancelBubble){if(Vi){if(!bi||"mouse"===t.pointerType)return;var e,n,o={};for(n in r)e=r[n],o[n]=e&&e.bind?e.bind(r):e;r=o}r.type="dblclick",i(r),s=null}}var s,r,a=!1,h=250;return t[le+he+e]=n,t[le+ue+e]=o,t[le+"dblclick"+e]=i,t.addEventListener(he,n,!1),t.addEventListener(ue,o,!1),t.addEventListener("dblclick",i,!1),this}function U(t,i){var e=t[le+he+i],n=t[le+ue+i],o=t[le+"dblclick"+i];return t.removeEventListener(he,e,!1),t.removeEventListener(ue,n,!1),bi||t.removeEventListener("dblclick",o,!1),this}function V(t){return"string"==typeof t?document.getElementById(t):t}function q(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function G(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function K(t){var i=t.parentNode;i&&i.removeChild(t)}function Y(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function X(t){var i=t.parentNode;i.lastChild!==t&&i.appendChild(t)}function J(t){var i=t.parentNode;i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function $(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=et(t);return e.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function Q(t,i){if(void 0!==t.classList)for(var e=u(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!$(t,i)){var s=et(t);it(t,(s?s+" ":"")+i)}}function tt(t,i){void 0!==t.classList?t.classList.remove(i):it(t,h((" "+et(t)+" ").replace(" "+i+" "," ")))}function it(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function et(t){return void 0===t.className.baseVal?t.className:t.className.baseVal}function nt(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&ot(t,i)}function ot(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}function st(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function rt(t,i,e){var n=i||new x(0,0);t.style[ce]=(Ri?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function at(t,i){t._leaflet_pos=i,ji?rt(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function ht(t){return t._leaflet_pos||new x(0,0)}function ut(){mt(window,"dragstart",Pt)}function lt(){ft(window,"dragstart",Pt)}function ct(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(_t(),me=t,fe=t.style.outline,t.style.outline="none",mt(window,"keydown",_t))}function _t(){me&&(me.style.outline=fe,me=void 0,fe=void 0,ft(window,"keydown",_t))}function dt(t){do{t=t.parentNode}while(!(t.offsetWidth&&t.offsetHeight||t===document.body));return t}function pt(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}function mt(t,i,e,n){if("object"==typeof i)for(var o in i)gt(t,o,i[o],e);else for(var s=0,r=(i=u(i)).length;s<r;s++)gt(t,i[s],e,n);return this}function ft(t,i,e,n){if("object"==typeof i)for(var o in i)vt(t,o,i[o],e);else if(i)for(var s=0,r=(i=u(i)).length;s<r;s++)vt(t,i[s],e,n);else{for(var a in t[ye])vt(t,a,t[ye][a]);delete t[ye]}return this}function gt(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):"");if(t[ye]&&t[ye][s])return this;var r=function(i){return e.call(o||t,i||window.event)},a=r;Vi&&0===i.indexOf("touch")?B(t,i,r,s):!qi||"dblclick"!==i||!F||Vi&&Ei?"addEventListener"in t?"mousewheel"===i?t.addEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):"mouseenter"===i||"mouseleave"===i?(r=function(i){i=i||window.event,Ct(t,i)&&a(i)},t.addEventListener("mouseenter"===i?"mouseover":"mouseout",r,!1)):("click"===i&&zi&&(r=function(t){St(t,a)}),t.addEventListener(i,r,!1)):"attachEvent"in t&&t.attachEvent("on"+i,r):F(t,r,s),t[ye]=t[ye]||{},t[ye][s]=r}function vt(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):""),r=t[ye]&&t[ye][s];if(!r)return this;Vi&&0===i.indexOf("touch")?I(t,i,s):!qi||"dblclick"!==i||!U||Vi&&Ei?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,r,!1):"detachEvent"in t&&t.detachEvent("on"+i,r):U(t,s),t[ye][s]=null}function yt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Mt(t),this}function xt(t){return gt(t,"mousewheel",yt),this}function wt(t){return mt(t,"mousedown touchstart dblclick",yt),gt(t,"click",zt),this}function Pt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Lt(t){return Pt(t),yt(t),this}function bt(t,i){if(!i)return new x(t.clientX,t.clientY);var e=pt(i),n=e.boundingClientRect;return new x((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}function Tt(t){return bi?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/xe:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function zt(t){we[t.type]=!0}function Mt(t){var i=we[t.type];return we[t.type]=!1,i}function Ct(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}function St(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=ge&&e-ge;n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?Lt(t):(ge=e,i(t))}function Zt(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=Bt(t,e),t=kt(t,e)}function Et(t,i,e){return Math.sqrt(Dt(t,i,e,!0))}function kt(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,At(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}function At(t,i,e,n,o){var s,r,a,h=0;for(r=n+1;r<=o-1;r++)(a=Dt(t[r],t[n],t[o],!0))>h&&(s=r,h=a);h>e&&(i[s]=1,At(t,i,e,n,s),At(t,i,e,s,o))}function Bt(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)Nt(t[n],t[o])>i&&(e.push(t[n]),o=n);return o<s-1&&e.push(t[s-1]),e}function It(t,i,e,n,o){var s,r,a,h=n?ke:Rt(t,e),u=Rt(i,e);for(ke=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=Rt(r=Ot(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function Ot(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new x(s,r,o)}function Rt(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function Nt(t,i){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function Dt(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return u>0&&((o=((t.x-s)*a+(t.y-r)*h)/u)>1?(s=e.x,r=e.y):o>0&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new x(s,r)}function jt(t){return!oi(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function Wt(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),jt(t)}function Ht(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=Rt(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=Ot(h,a,l,i,e))._code=Rt(c,i),n.push(c)):(h._code&l&&((c=Ot(h,a,l,i,e))._code=Rt(c,i),n.push(c)),n.push(a));t=n}return t}function Ft(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Ut;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new $e(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new $e(e));return new Ke(h);case"LineString":case"MultiLineString":return n=Vt(a,"LineString"===r.type?0:1,l),new nn(n,i);case"Polygon":case"MultiPolygon":return n=Vt(a,"Polygon"===r.type?1:2,l),new on(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Ft({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new Ke(h);default:throw new Error("Invalid GeoJSON object.")}}function Ut(t){return new M(t[1],t[0],t[2])}function Vt(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Vt(t[s],i-1,e):(e||Ut)(t[s]),o.push(n);return o}function qt(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[a(t.lng,i),a(t.lat,i),a(t.alt,i)]:[a(t.lng,i),a(t.lat,i)]}function Gt(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Gt(t[s],i-1,e,n):qt(t[s],n));return!i&&e&&o.push(o[0]),o}function Kt(t,e){return t.feature?i({},t.feature,{geometry:e}):Yt(e)}function Yt(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}function Xt(t,i){return new sn(t,i)}function Jt(t,i){return new mn(t,i)}function $t(t){return Xi?new vn(t):null}function Qt(t){return Ji||$i?new Pn(t):null}var ti=Object.freeze;Object.freeze=function(t){return t};var ii=Object.create||function(){function t(){}return function(i){return t.prototype=i,new t}}(),ei=0,ni=/\{ *([\w_-]+) *\}/g,oi=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},si="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",ri=0,ai=window.requestAnimationFrame||p("RequestAnimationFrame")||m,hi=window.cancelAnimationFrame||p("CancelAnimationFrame")||p("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)},ui=(Object.freeze||Object)({freeze:ti,extend:i,create:ii,bind:e,lastId:ei,stamp:n,throttle:o,wrapNum:s,falseFn:r,formatNum:a,trim:h,splitWords:u,setOptions:l,getParamString:c,template:_,isArray:oi,indexOf:d,emptyImageUrl:si,requestFn:ai,cancelFn:hi,requestAnimFrame:f,cancelAnimFrame:g});v.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,o=ii(n);o.constructor=e,e.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(y(t.includes),i.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=i(ii(o.options),t.options)),i(o,t),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=o._initHooks.length;t<i;t++)o._initHooks[t].call(this)}},e},v.include=function(t){return i(this.prototype,t),this},v.mergeOptions=function(t){return i(this.prototype.options,t),this},v.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var li={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var a=n[o];if(a.ctx===e&&a.fn===i)return a.fn=r,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=r;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var r=0,a=s.length;r<a;r++){var h=s[r];h.fn.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,n){if("object"==typeof t){for(var o in t)this.once(o,t[o],i);return this}var s=e(function(){this.off(t,i,n).off(t,s,n)},this);return this.on(t,i,n).on(t,s,n)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[n(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[n(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};li.addEventListener=li.on,li.removeEventListener=li.clearAllEventListeners=li.off,li.addOneTimeEventListener=li.once,li.fireEvent=li.fire,li.hasEventListeners=li.listens;var ci=v.extend(li),_i=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};x.prototype={clone:function(){return new x(this.x,this.y)},add:function(t){return this.clone()._add(w(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(w(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new x(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new x(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=_i(this.x),this.y=_i(this.y),this},distanceTo:function(t){var i=(t=w(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=w(t)).x===this.x&&t.y===this.y},contains:function(t){return t=w(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+a(this.x)+", "+a(this.y)+")"}},P.prototype={extend:function(t){return t=w(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new x((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new x(this.min.x,this.max.y)},getTopRight:function(){return new x(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof x?w(t):b(t))instanceof P?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},T.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof M)i=t,e=t;else{if(!(t instanceof T))return t?this.extend(C(t)||z(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new M(i.lat,i.lng),this._northEast=new M(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new T(new M(i.lat-n,i.lng-o),new M(e.lat+n,e.lng+o))},getCenter:function(){return new M((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new M(this.getNorth(),this.getWest())},getSouthEast:function(){return new M(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof M||"lat"in t?C(t):z(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof T?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=z(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}},M.prototype={equals:function(t,i){return!!t&&(t=C(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+a(this.lat,t)+", "+a(this.lng,t)+")"},distanceTo:function(t){return pi.distance(this,C(t))},wrap:function(){return pi.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return z([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new M(this.lat,this.lng,this.alt)}};var di={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new P(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!1,wrapLatLng:function(t){var i=this.wrapLng?s(t.lng,this.wrapLng,!0):t.lng;return new M(this.wrapLat?s(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0===n&&0===o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new T(new M(s.lat-n,s.lng-o),new M(r.lat-n,r.lng-o))}},pi=i({},di,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),mi={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new x(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new M((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:function(){var t=6378137*Math.PI;return new P([-t,-t],[t,t])}()};S.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new x((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var fi,gi,vi,yi=i({},pi,{code:"EPSG:3857",projection:mi,transformation:function(){var t=.5/(Math.PI*mi.R);return Z(t,.5,-t,.5)}()}),xi=i({},yi,{code:"EPSG:900913"}),wi=document.documentElement.style,Pi="ActiveXObject"in window,Li=Pi&&!document.addEventListener,bi="msLaunchUri"in navigator&&!("documentMode"in document),Ti=A("webkit"),zi=A("android"),Mi=A("android 2")||A("android 3"),Ci=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Si=zi&&A("Google")&&Ci<537&&!("AudioNode"in window),Zi=!!window.opera,Ei=A("chrome"),ki=A("gecko")&&!Ti&&!Zi&&!Pi,Ai=!Ei&&A("safari"),Bi=A("phantom"),Ii="OTransition"in wi,Oi=0===navigator.platform.indexOf("Win"),Ri=Pi&&"transition"in wi,Ni="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Mi,Di="MozPerspective"in wi,ji=!window.L_DISABLE_3D&&(Ri||Ni||Di)&&!Ii&&!Bi,Wi="undefined"!=typeof orientation||A("mobile"),Hi=Wi&&Ti,Fi=Wi&&Ni,Ui=!window.PointerEvent&&window.MSPointerEvent,Vi=!(!window.PointerEvent&&!Ui),qi=!window.L_NO_TOUCH&&(Vi||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),Gi=Wi&&Zi,Ki=Wi&&ki,Yi=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Xi=!!document.createElement("canvas").getContext,Ji=!(!document.createElementNS||!E("svg").createSVGRect),$i=!Ji&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),Qi=(Object.freeze||Object)({ie:Pi,ielt9:Li,edge:bi,webkit:Ti,android:zi,android23:Mi,androidStock:Si,opera:Zi,chrome:Ei,gecko:ki,safari:Ai,phantom:Bi,opera12:Ii,win:Oi,ie3d:Ri,webkit3d:Ni,gecko3d:Di,any3d:ji,mobile:Wi,mobileWebkit:Hi,mobileWebkit3d:Fi,msPointer:Ui,pointer:Vi,touch:qi,mobileOpera:Gi,mobileGecko:Ki,retina:Yi,canvas:Xi,svg:Ji,vml:$i}),te=Ui?"MSPointerDown":"pointerdown",ie=Ui?"MSPointerMove":"pointermove",ee=Ui?"MSPointerUp":"pointerup",ne=Ui?"MSPointerCancel":"pointercancel",oe=["INPUT","SELECT","OPTION"],se={},re=!1,ae=0,he=Ui?"MSPointerDown":Vi?"pointerdown":"touchstart",ue=Ui?"MSPointerUp":Vi?"pointerup":"touchend",le="_leaflet_",ce=st(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),_e=st(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===_e||"OTransition"===_e?_e+"End":"transitionend";if("onselectstart"in document)fi=function(){mt(window,"selectstart",Pt)},gi=function(){ft(window,"selectstart",Pt)};else{var pe=st(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);fi=function(){if(pe){var t=document.documentElement.style;vi=t[pe],t[pe]="none"}},gi=function(){pe&&(document.documentElement.style[pe]=vi,vi=void 0)}}var me,fe,ge,ve=(Object.freeze||Object)({TRANSFORM:ce,TRANSITION:_e,TRANSITION_END:de,get:V,getStyle:q,create:G,remove:K,empty:Y,toFront:X,toBack:J,hasClass:$,addClass:Q,removeClass:tt,setClass:it,getClass:et,setOpacity:nt,testProp:st,setTransform:rt,setPosition:at,getPosition:ht,disableTextSelection:fi,enableTextSelection:gi,disableImageDrag:ut,enableImageDrag:lt,preventOutline:ct,restoreOutline:_t,getSizedParentNode:dt,getScale:pt}),ye="_leaflet_events",xe=Oi&&Ei?2*window.devicePixelRatio:ki?window.devicePixelRatio:1,we={},Pe=(Object.freeze||Object)({on:mt,off:ft,stopPropagation:yt,disableScrollPropagation:xt,disableClickPropagation:wt,preventDefault:Pt,stop:Lt,getMousePosition:bt,getWheelDelta:Tt,fakeStop:zt,skipped:Mt,isExternalTarget:Ct,addListener:mt,removeListener:ft}),Le=ci.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=ht(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=f(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),at(this._el,e),this.fire("step")},_complete:function(){g(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),be=ci.extend({options:{crs:yi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=l(this,i),this._initContainer(t),this._initLayout(),this._onResize=e(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(C(i.center),i.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this.callInitHooks(),this._zoomAnimated=_e&&ji&&!Gi&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),mt(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){return e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(C(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(t,e),this)},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(ji?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(ji?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof x?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():z(t);var e=w(i.paddingTopLeft||i.padding||[0,0]),n=w(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=z(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(t=w(t).round(),i=i||{},!t.x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Le,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){Q(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,i,e){function n(t){var i=(g*g-m*m+(t?-1:1)*x*x*v*v)/(2*(t?g:m)*x*v),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function s(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/s(t)}function a(t){return m*(s(w)/s(w+y*t))}function h(t){return m*(s(w)*r(w+y*t)-o(w))/x}function u(t){return 1-Math.pow(1-t,1.5)}function l(){var e=(Date.now()-P)/b,n=u(e)*L;e<=1?(this._flyToFrame=f(l,this),this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n)/v)),p),this.getScaleZoom(m/a(n),p),{flyTo:!0})):this._move(t,i)._moveEnd(!0)}if(!1===(e=e||{}).animate||!ji)return this.setView(t,i,e);this._stop();var c=this.project(this.getCenter()),_=this.project(t),d=this.getSize(),p=this._zoom;t=C(t),i=void 0===i?p:i;var m=Math.max(d.x,d.y),g=m*this.getZoomScale(p,i),v=_.distanceTo(c)||1,y=1.42,x=y*y,w=n(0),P=Date.now(),L=(n(1)-w)/y,b=e.duration?1e3*e.duration:1e3*L*.8;return this._moveStart(!0,e.noMoveStart),l.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=z(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,z(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),s=n.divideBy(2).round(),r=o.divideBy(2).round(),a=s.subtract(r);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(e(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:o})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=e(this._handleGeolocationResponse,this),o=e(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,o,t):navigator.geolocation.getCurrentPosition(n,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new M(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),K(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(g(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)K(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=G("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new T(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=z(t),e=w(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=b(this.project(a,n),this.project(r,n)).getSize(),l=ji?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new x(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new P(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(C(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(w(t),i)},layerPointToLatLng:function(t){var i=w(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(C(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(C(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(z(t))},distance:function(t,i){return this.options.crs.distance(C(t),C(i))},containerPointToLayerPoint:function(t){return w(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return w(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))},mouseEventToContainerPoint:function(t){return bt(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=V(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");mt(i,"scroll",this._onScroll,this),this._containerId=n(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&ji,Q(t,"leaflet-container"+(qi?" leaflet-touch":"")+(Yi?" leaflet-retina":"")+(Li?" leaflet-oldie":"")+(Ai?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=q(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),at(this._mapPane,new x(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(t.markerPane,"leaflet-zoom-hide"),Q(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){at(this._mapPane,new x(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return g(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){at(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[n(this._container)]=this;var i=t?ft:mt;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),ji&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){g(this._resizeRequest),this._resizeRequest=f(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,o=[],s="mouseout"===i||"mouseover"===i,r=t.target||t.srcElement,a=!1;r;){if((e=this._targets[n(r)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){a=!0;break}if(e&&e.listens(i,!0)){if(s&&!Ct(r,t))break;if(o.push(e),s)break}if(r===this._container)break;r=r.parentNode}return o.length||a||s||!Ct(r,t)||(o=[this]),o},_handleDOMEvent:function(t){if(this._loaded&&!Mt(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i||ct(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){var s=n[0];"contextmenu"===e&&s.listens(e,!0)&&Pt(t);var r={originalEvent:t};if("keypress"!==t.type){var a=s.getLatLng&&(!s._radius||s._radius<=10);r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var h=0;h<n.length;h++)if(n[h].fire(e,r,!0),r.originalEvent._stopped||!1===n[h].options.bubblingMouseEvents&&-1!==d(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return ht(this._mapPane)||new x(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return b([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new P(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new P(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=b(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new x(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return t+i>0?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=ji?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){tt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=G("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=ce,e=this._proxy.style[i];rt(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();rt(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){K(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(f(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,n,o){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:o}),setTimeout(e(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&tt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),f(function(){this._moveEnd(!0)},this))}}),Te=v.extend({options:{position:"topright"},initialize:function(t){l(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return Q(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},remove:function(){return this._map?(K(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ze=function(t){return new Te(t)};be.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,o){var s=e+t+" "+e+o;i[t+o]=G("div",s,n)}var i=this._controlCorners={},e="leaflet-",n=this._controlContainer=G("div",e+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)K(this._controlCorners[t]);K(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Me=Te.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){l(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Te.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(n(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._form.clientHeight?(Q(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):tt(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return tt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=G("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),wt(i),xt(i);var n=this._form=G("form",t+"-list");e&&(this._map.on("click",this.collapse,this),zi||mt(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=G("a",t+"-toggle",i);o.href="#",o.title="Layers",qi?(mt(o,"click",Lt),mt(o,"click",this.expand,this)):mt(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=G("div",t+"-base",n),this._separator=G("div",t+"-separator",n),this._overlaysList=G("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&n(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:n}),this.options.sortLayers&&this._layers.sort(e(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Y(this._baseLayersList),Y(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(n(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),o=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=o):i=this._createRadioElement("leaflet-base-layers",o),this._layerControlInputs.push(i),i.layerId=n(t.layer),mt(i,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var r=document.createElement("div");return e.appendChild(r),r.appendChild(i),r.appendChild(s),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;s>=0;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;o>=0;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),Ce=Te.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=G("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=G("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),wt(s),mt(s,"click",Lt),mt(s,"click",o,this),mt(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";tt(this._zoomInButton,i),tt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMinZoom())&&Q(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMaxZoom())&&Q(this._zoomInButton,i)}});be.mergeOptions({zoomControl:!0}),be.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ce,this.addControl(this.zoomControl))});var Se=Te.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i=G("div","leaflet-control-scale"),e=this.options;return this._addScales(e,"leaflet-control-scale-line",i),t.on(e.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=G("div",i,e)),t.imperial&&(this._iScale=G("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;o>5280?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return e=e>=10?10:e>=5?5:e>=3?3:e>=2?2:1,i*e}}),Ze=Te.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){l(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=G("div","leaflet-control-attribution"),wt(this._container);for(var i in t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});be.mergeOptions({attributionControl:!0}),be.addInitHook(function(){this.options.attributionControl&&(new Ze).addTo(this)});Te.Layers=Me,Te.Zoom=Ce,Te.Scale=Se,Te.Attribution=Ze,ze.layers=function(t,i,e){return new Me(t,i,e)},ze.zoom=function(t){return new Ce(t)},ze.scale=function(t){return new Se(t)},ze.attribution=function(t){return new Ze(t)};var Ee=v.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ee.addTo=function(t,i){return t.addHandler(i,this),this};var ke,Ae={Events:li},Be=qi?"touchstart mousedown":"mousedown",Ie={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},Oe={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},Re=ci.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){l(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(mt(this._dragStartTarget,Be,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Re._dragging===this&&this.finishDrag(),ft(this._dragStartTarget,Be,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!$(this._element,"leaflet-zoom-anim")&&!(Re._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(Re._dragging=this,this._preventOutline&&ct(this._element),ut(),fi(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t,e=dt(this._element);this._startPoint=new x(i.clientX,i.clientY),this._parentScale=pt(e),mt(document,Oe[t.type],this._onMove,this),mt(document,Ie[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new x(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,Pt(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=ht(this._element).subtract(e),Q(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,g(this._animRequest),this._lastEvent=t,this._animRequest=f(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),at(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){tt(document.body,"leaflet-dragging"),this._lastTarget&&(tt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in Oe)ft(document,Oe[t],this._onMove,this),ft(document,Ie[t],this._onUp,this);lt(),gi(),this._moved&&this._moving&&(g(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,Re._dragging=!1}}),Ne=(Object.freeze||Object)({simplify:Zt,pointToSegmentDistance:Et,closestPointOnSegment:function(t,i,e){return Dt(t,i,e)},clipSegment:It,_getEdgeIntersection:Ot,_getBitCode:Rt,_sqClosestPointOnSegment:Dt,isFlat:jt,_flat:Wt}),De=(Object.freeze||Object)({clipPolygon:Ht}),je={project:function(t){return new x(t.lng,t.lat)},unproject:function(t){return new M(t.y,t.x)},bounds:new P([-180,-90],[180,90])},We={R:6378137,R_MINOR:6356752.314245179,bounds:new P([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new x(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new M(a*e,t.x*e/n)}},He=(Object.freeze||Object)({LonLat:je,Mercator:We,SphericalMercator:mi}),Fe=i({},pi,{code:"EPSG:3395",projection:We,transformation:function(){var t=.5/(Math.PI*We.R);return Z(t,.5,-t,.5)}()}),Ue=i({},pi,{code:"EPSG:4326",projection:je,transformation:Z(1/180,1,-1/180,.5)}),Ve=i({},di,{projection:je,transformation:Z(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});di.Earth=pi,di.EPSG3395=Fe,di.EPSG3857=yi,di.EPSG900913=xi,di.EPSG4326=Ue,di.Simple=Ve;var qe=ci.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[n(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[n(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});be.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=n(t);return this._layers[i]?this:(this._layers[i]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var i=n(t);return this._layers[i]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&n(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?oi(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[n(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=n(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ge=qe.extend({initialize:function(t,i){l(this,i),this._layers={};var e,n;if(t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return n(t)}}),Ke=Ge.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ge.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ge.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new T;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Ye=v.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){l(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=w(n),s=w("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return i=i||document.createElement("img"),i.src=t,i},_getIconUrl:function(t){return Yi&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),Xe=Ye.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Xe.imagePath||(Xe.imagePath=this._detectIconPath()),(this.options.imagePath||Xe.imagePath)+Ye.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=G("div","leaflet-default-icon-path",document.body),i=q(t,"background-image")||q(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Je=Ee.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Re(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&tt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=ht(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=b(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=w((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),at(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=f(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(g(this._panRequest),this._panRequest=f(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=ht(i._icon),o=i._map.layerPointToLatLng(n);e&&at(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){g(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),$e=qe.extend({options:{icon:new Xe,interactive:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",bubblingMouseEvents:!1},initialize:function(t,i){l(this,i),this._latlng=C(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=C(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),Q(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(Q(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),K(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&K(this._shadow),this._shadow=null},_setPos:function(t){at(this._icon,t),this._shadow&&at(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Je)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Je(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;nt(this._icon,t),this._shadow&&nt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Qe=qe.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return l(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),tn=Qe.extend({options:{fill:!0,radius:10},initialize:function(t,i){l(this,i),this._latlng=C(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=C(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Qe.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new P(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),en=tn.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),l(this,e),this._latlng=C(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Qe.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===pi.distance){var o=Math.PI/180,s=this._mRadius/pi.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}}),nn=Qe.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){l(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=Dt,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(t=0,i=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<h-1;t++)if(o=a[t],s=a[t+1],e=o.distanceTo(s),(n+=e)>i)return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=C(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new T,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return jt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=jt(t),n=0,o=t.length;n<o;n++)e?(i[n]=C(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new P;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);var i=this._clickTolerance(),e=new x(i,i);this._bounds.isValid()&&t.isValid()&&(t.min._subtract(e),t.max._add(e),this._pxBounds=t)},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof M,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(i=0,n=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=It(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=Zt(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&Et(t,a[o],a[n])<=h)return!0;return!1}});nn._flat=Wt;var on=nn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=nn.prototype._convertLatLngs.call(this,t),e=i.length;return e>=2&&i[0]instanceof M&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){nn.prototype._setLatLngs.call(this,t),jt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return jt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new x(i,i);if(t=new P(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=Ht(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||nn.prototype._containsPoint.call(this,t,!0)}}),sn=Ke.extend({initialize:function(t,i){l(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=oi(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Ft(t,s);return r?(r.feature=Yt(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(i){this._setLayerStyle(i,t)},this)},_setLayerStyle:function(t,i){"function"==typeof i&&(i=i(t.feature)),t.setStyle&&t.setStyle(i)}}),rn={toGeoJSON:function(t){return Kt(this,{type:"Point",coordinates:qt(this.getLatLng(),t)})}};$e.include(rn),en.include(rn),tn.include(rn),nn.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=Gt(this._latlngs,i?1:0,!1,t);return Kt(this,{type:(i?"Multi":"")+"LineString",coordinates:e})}}),on.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=i&&!jt(this._latlngs[0]),n=Gt(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Kt(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ge.include({toMultiPoint:function(t){var i=[];return this.eachLayer(function(e){i.push(e.toGeoJSON(t).geometry.coordinates)}),Kt(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(t){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===i)return this.toMultiPoint(t);var e="GeometryCollection"===i,n=[];return this.eachLayer(function(i){if(i.toGeoJSON){var o=i.toGeoJSON(t);if(e)n.push(o.geometry);else{var s=Yt(o);"FeatureCollection"===s.type?n.push.apply(n,s.features):n.push(s)}}}),e?Kt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var an=Xt,hn=qe.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=z(i),l(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){K(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&X(this._image),this},bringToBack:function(){return this._map&&J(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=z(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:G("img");Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),this.options.className&&Q(i,this.options.className),i.onselectstart=r,i.onmousemove=r,i.onload=e(this.fire,this,"load"),i.onerror=e(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;rt(this._image,e,i)},_reset:function(){var t=this._image,i=new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();at(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){nt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),un=hn.extend({options:{autoplay:!0,loop:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:G("video");if(Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),i.onselectstart=r,i.onmousemove=r,i.onloadeddata=e(this.fire,this,"load"),t){for(var n=i.getElementsByTagName("source"),o=[],s=0;s<n.length;s++)o.push(n[s].src);this._url=n.length>0?o:[i.src]}else{oi(this._url)||(this._url=[this._url]),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var a=0;a<this._url.length;a++){var h=G("source");h.src=this._url[a],i.appendChild(h)}}}}),ln=qe.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){l(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&nt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&nt(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(nt(this._container,0),this._removeTimeout=setTimeout(e(K,void 0,this._container),200)):K(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=C(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&X(this._container),this},bringToBack:function(){return this._map&&J(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=w(this.options.offset),e=this._getAnchor();this._zoomAnimated?at(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),cn=ln.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){ln.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Qe||this._source.on("preclick",yt))},onRemove:function(t){ln.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Qe||this._source.off("preclick",yt))},getEvents:function(){var t=ln.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=G("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=G("div",t+"-content-wrapper",i);if(this._contentNode=G("div",t+"-content",e),wt(e),xt(this._contentNode),mt(e,"contextmenu",yt),this._tipContainer=G("div",t+"-tip-container",i),this._tip=G("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=G("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",mt(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight;o&&n>o?(i.height=o+"px",Q(t,"leaflet-popup-scrolled")):tt(t,"leaflet-popup-scrolled"),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();at(this._container,i.add(e))},_adjustPan:function(){if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){var t=this._map,i=parseInt(q(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new x(this._containerLeft,-e-this._containerBottom);o._add(ht(this._container));var s=t.layerPointToContainerPoint(o),r=w(this.options.autoPanPadding),a=w(this.options.autoPanPaddingTopLeft||r),h=w(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Lt(t)},_getAnchor:function(){return w(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});be.mergeOptions({closePopupOnClick:!0}),be.include({openPopup:function(t,i,e){return t instanceof cn||(t=new cn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),qe.include({bindPopup:function(t,i){return t instanceof cn?(l(t,i),this._popup=t,t._source=this):(this._popup&&!i||(this._popup=new cn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){if(t instanceof qe||(i=t,t=this),t instanceof Ke)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Lt(t),i instanceof Qe?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var _n=ln.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){ln.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){ln.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=ln.prototype.getEvents.call(this);return qi&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=G("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=w(this.options.offset),u=this._getAnchor();"top"===s?t=t.add(w(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t=t.subtract(w(r/2-h.x,-h.y,!0)):"center"===s?t=t.subtract(w(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t=t.add(w(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t=t.subtract(w(r+u.x-h.x,a/2-u.y-h.y,!0))),tt(e,"leaflet-tooltip-right"),tt(e,"leaflet-tooltip-left"),tt(e,"leaflet-tooltip-top"),tt(e,"leaflet-tooltip-bottom"),Q(e,"leaflet-tooltip-"+s),at(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&nt(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return w(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});be.include({openTooltip:function(t,i,e){return t instanceof _n||(t=new _n(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),qe.include({bindTooltip:function(t,i){return t instanceof _n?(l(t,i),this._tooltip=t,t._source=this):(this._tooltip&&!i||(this._tooltip=new _n(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),qi&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){if(t instanceof qe||(i=t,t=this),t instanceof Ke)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(Q(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(tt(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var dn=Ye.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=w(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});Ye.Default=Xe;var pn=qe.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Wi,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){l(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),K(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(X(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(J(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof x?t:new x(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Li){nt(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);nt(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this))}},_onOpaqueTile:r,_initContainer:function(){this._container||(this._container=G("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(K(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=G("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:r,_onRemoveLevel:r,_onCreateLevel:r,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)K(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new x(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),r>n&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new x(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();ji?rt(t.el,o,n):at(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new P(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new P(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new x(l.x,l.y))||(this._tiles[u].current=!1)}if(Math.abs(e-this._tileZoom)>1)this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new x(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new T(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new x(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(Si||i.el.setAttribute("src",si),K(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){Q(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=r,t.onmousemove=r,Li&&this.options.opacity<1&&nt(t,this.options.opacity),zi&&!Mi&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var n=this._getTilePos(t),o=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),e(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&f(e(this._tileReady,this,t,null,s)),at(s,n),this._tiles[o]={el:s,coords:t,current:!0},i.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,i,n){if(this._map&&n.getAttribute("src")!==si){i&&this.fire("tileerror",{error:i,tile:n,coords:t});var o=this._tileCoordsToKey(t);(n=this._tiles[o])&&(n.loaded=+new Date,this._map._fadeAnimated?(nt(n.el,0),g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),i||(Q(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Li||!this._map._fadeAnimated?f(this._pruneTiles,this):setTimeout(e(this._pruneTiles,this),250)))}},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new x(this._wrapX?s(t.x,this._wrapX):t.x,this._wrapY?s(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new P(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),mn=pn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=l(this,i)).detectRetina&&Yi&&i.maxZoom>0&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),zi||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url=t,i||this.redraw(),this},createTile:function(t,i){var n=document.createElement("img");return mt(n,"load",e(this._tileOnLoad,this,i,n)),mt(n,"error",e(this._tileOnError,this,i,n)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:Yi?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return _(this._url,i(e,this.options))},_tileOnLoad:function(t,i){Li?setTimeout(e(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom,e=this.options.zoomReverse,n=this.options.zoomOffset;return e&&(t=i-t),t+n},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=r,i.onerror=r,i.complete||(i.src=si,K(i),delete this._tiles[t]))}}),fn=mn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);var s=(e=l(this,e)).detectRetina&&Yi?2:1,r=this.getTileSize();n.width=r.x*s,n.height=r.y*s,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,mn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=b(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(this._wmsVersion>=1.3&&this._crs===Ue?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=mn.prototype.getTileUrl.call(this,t);return a+c(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});mn.WMS=fn,Jt.wms=function(t,i){return new fn(t,i)};var gn=qe.extend({options:{padding:.1,tolerance:0},initialize:function(t){l(this,t),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=ht(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);ji?rt(this._container,a,e):at(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new P(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),vn=gn.extend({getEvents:function(){var t=gn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){gn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");mt(t,"mousemove",o(this._onMouseMove,32,this),this),mt(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),mt(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){g(this._redrawRequest),delete this._ctx,K(this._container),ft(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){this._redrawBounds=null;for(var t in this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){this._drawnLayers={},gn.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Yi?2:1;at(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Yi&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){gn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[n(t)]=t;var i=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,o=i.prev;e?e.prev=o:this._drawLast=o,o?o.next=e:this._drawFirst=e,delete this._drawnLayers[t._leaflet_id],delete t._order,delete this._layers[n(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e=t.options.dashArray.split(","),n=[];for(i=0;i<e.length;i++)n.push(Number(e[i]));t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||f(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new P,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(this._drawnLayers[t._leaflet_id]=t,h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;this._drawnLayers[t._leaflet_id]=t,1!==o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!==o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(zt(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(tt(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(Q(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order,e=i.next,n=i.prev;e&&(e.prev=n,n?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(t))},_bringToBack:function(t){var i=t._order,e=i.next,n=i.prev;n&&(n.next=e,e?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}),yn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),xn={_initContainer:function(){this._container=G("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(gn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=yn("shape");Q(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=yn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;K(i),t.removeInteractiveTarget(i),delete this._layers[n(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=yn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=oi(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=yn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){X(t._container)},_bringToBack:function(t){J(t._container)}},wn=$i?yn:E,Pn=gn.extend({getEvents:function(){var t=gn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=wn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=wn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){K(this._container),ft(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){gn.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),at(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=wn("path");t.options.className&&Q(i,t.options.className),t.options.interactive&&Q(i,"leaflet-interactive"),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){K(t._path),t.removeInteractiveTarget(t._path),delete this._layers[n(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,k(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){X(t._path)},_bringToBack:function(t){J(t._path)}});$i&&Pn.include(xn),be.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&$t(t)||Qt(t)}});var Ln=on.extend({initialize:function(t,i){on.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=z(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});Pn.create=wn,Pn.pointsToPath=k,sn.geometryToLayer=Ft,sn.coordsToLatLng=Ut,sn.coordsToLatLngs=Vt,sn.latLngToCoords=qt,sn.latLngsToCoords=Gt,sn.getFeature=Kt,sn.asFeature=Yt,be.mergeOptions({boxZoom:!0});var bn=Ee.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){mt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ft(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){K(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),fi(),ut(),this._startPoint=this._map.mouseEventToContainerPoint(t),mt(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=G("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new P(this._point,this._startPoint),e=i.getSize();at(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(K(this._box),tt(this._container,"leaflet-crosshair")),gi(),lt(),ft(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(e(this._resetState,this),0);var i=new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});be.addInitHook("addHandler","boxZoom",bn),be.mergeOptions({doubleClickZoom:!0});var Tn=Ee.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});be.addInitHook("addHandler","doubleClickZoom",Tn),be.mergeOptions({dragging:!0,inertia:!Mi,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var zn=Ee.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Re(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){tt(this._map._container,"leaflet-grab"),tt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=z(this._map.options.maxBounds);this._offsetLimit=b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),f(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});be.addInitHook("addHandler","dragging",zn),be.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Mn=Ee.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),mt(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ft(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){mt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ft(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=w(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Lt(t)}}});be.addInitHook("addHandler","keyboard",Mn),be.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Cn=Ee.extend({addHooks:function(){mt(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ft(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Tt(t),n=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(e(this._performZoom,this),o),Lt(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(this._delta>0?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});be.addInitHook("addHandler","scrollWheelZoom",Cn),be.mergeOptions({tap:!0,tapTolerance:15});var Sn=Ee.extend({addHooks:function(){mt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ft(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(Pt(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new x(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&Q(n,"leaflet-active"),this._holdTimeout=setTimeout(e(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),mt(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),ft(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&tt(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new x(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});qi&&!Vi&&be.addInitHook("addHandler","tap",Sn),be.mergeOptions({touchZoom:qi&&!Mi,bounceAtZoomLimits:!0});var Zn=Ee.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),mt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){tt(this._map._container,"leaflet-touch-zoom"),ft(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),mt(document,"touchmove",this._onTouchMove,this),mt(document,"touchend",this._onTouchEnd,this),Pt(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,n=i.mouseEventToContainerPoint(t.touches[0]),o=i.mouseEventToContainerPoint(t.touches[1]),s=n.distanceTo(o)/this._startDist;if(this._zoom=i.getScaleZoom(s,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&s<1||this._zoom>i.getMaxZoom()&&s>1)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=n._add(o)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===r.x&&0===r.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),g(this._animRequest);var a=e(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=f(a,this,!0),Pt(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,g(this._animRequest),ft(document,"touchmove",this._onTouchMove),ft(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});be.addInitHook("addHandler","touchZoom",Zn),be.BoxZoom=bn,be.DoubleClickZoom=Tn,be.Drag=zn,be.Keyboard=Mn,be.ScrollWheelZoom=Cn,be.Tap=Sn,be.TouchZoom=Zn,Object.freeze=ti,t.version="1.3.3+HEAD.b22aef4",t.Control=Te,t.control=ze,t.Browser=Qi,t.Evented=ci,t.Mixin=Ae,t.Util=ui,t.Class=v,t.Handler=Ee,t.extend=i,t.bind=e,t.stamp=n,t.setOptions=l,t.DomEvent=Pe,t.DomUtil=ve,t.PosAnimation=Le,t.Draggable=Re,t.LineUtil=Ne,t.PolyUtil=De,t.Point=x,t.point=w,t.Bounds=P,t.bounds=b,t.Transformation=S,t.transformation=Z,t.Projection=He,t.LatLng=M,t.latLng=C,t.LatLngBounds=T,t.latLngBounds=z,t.CRS=di,t.GeoJSON=sn,t.geoJSON=Xt,t.geoJson=an,t.Layer=qe,t.LayerGroup=Ge,t.layerGroup=function(t,i){return new Ge(t,i)},t.FeatureGroup=Ke,t.featureGroup=function(t){return new Ke(t)},t.ImageOverlay=hn,t.imageOverlay=function(t,i,e){return new hn(t,i,e)},t.VideoOverlay=un,t.videoOverlay=function(t,i,e){return new un(t,i,e)},t.DivOverlay=ln,t.Popup=cn,t.popup=function(t,i){return new cn(t,i)},t.Tooltip=_n,t.tooltip=function(t,i){return new _n(t,i)},t.Icon=Ye,t.icon=function(t){return new Ye(t)},t.DivIcon=dn,t.divIcon=function(t){return new dn(t)},t.Marker=$e,t.marker=function(t,i){return new $e(t,i)},t.TileLayer=mn,t.tileLayer=Jt,t.GridLayer=pn,t.gridLayer=function(t){return new pn(t)},t.SVG=Pn,t.svg=Qt,t.Renderer=gn,t.Canvas=vn,t.canvas=$t,t.Path=Qe,t.CircleMarker=tn,t.circleMarker=function(t,i){return new tn(t,i)},t.Circle=en,t.circle=function(t,i,e){return new en(t,i,e)},t.Polyline=nn,t.polyline=function(t,i){return new nn(t,i)},t.Polygon=on,t.polygon=function(t,i){return new on(t,i)},t.Rectangle=Ln,t.rectangle=function(t,i){return new Ln(t,i)},t.Map=be,t.map=function(t,i){return new be(t,i)};var En=window.L;t.noConflict=function(){return window.L=En,this},window.L=t});
/*
 Leaflet.draw 1.0.0+, a plugin that adds drawing and editing tools to Leaflet powered maps.
 (c) 2012-2017, Jacob Toye, Jon West, Smartrak, Leaflet

 https://github.com/Leaflet/Leaflet.draw
 http://leafletjs.com
 */
!function(t,e,i){function o(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}L.drawVersion="1.0.0+",L.Draw={},L.drawLocal={draw:{toolbar:{actions:{title:"Cancel drawing",text:"Cancel"},finish:{title:"Finish drawing",text:"Finish"},undo:{title:"Delete last point drawn",text:"Delete last point"},buttons:{polyline:"Draw a polyline",polygon:"Draw a polygon",rectangle:"Draw a rectangle",circle:"Draw a circle",marker:"Draw a marker",circlemarker:"Draw a circlemarker"}},handlers:{circle:{tooltip:{start:"Click and drag to draw circle."},radius:"Radius"},circlemarker:{tooltip:{start:"Click map to place circle marker."}},marker:{tooltip:{start:"Click map to place marker."}},polygon:{tooltip:{start:"Click to start drawing shape.",cont:"Click to continue drawing shape.",end:"Click first point to close this shape."}},polyline:{error:"<strong>Error:</strong> shape edges cannot cross!",tooltip:{start:"Click to start drawing line.",cont:"Click to continue drawing line.",end:"Click last point to finish line."}},rectangle:{tooltip:{start:"Click and drag to draw rectangle."}},simpleshape:{tooltip:{end:"Release mouse to finish drawing."}}}},edit:{toolbar:{actions:{save:{title:"Save changes",text:"Save"},cancel:{title:"Cancel editing, discards all changes",text:"Cancel"},clearAll:{title:"Clear all layers",text:"Clear All"}},buttons:{edit:"Edit layers",editDisabled:"No layers to edit",remove:"Delete layers",removeDisabled:"No layers to delete"}},handlers:{edit:{tooltip:{text:"Drag handles or markers to edit features.",subtext:"Click cancel to undo changes."}},remove:{tooltip:{text:"Click on a feature to remove."}}}}},L.Draw.Event={},L.Draw.Event.CREATED="draw:created",L.Draw.Event.EDITED="draw:edited",L.Draw.Event.DELETED="draw:deleted",L.Draw.Event.DRAWSTART="draw:drawstart",L.Draw.Event.DRAWSTOP="draw:drawstop",L.Draw.Event.DRAWVERTEX="draw:drawvertex",L.Draw.Event.EDITSTART="draw:editstart",L.Draw.Event.EDITMOVE="draw:editmove",L.Draw.Event.EDITRESIZE="draw:editresize",L.Draw.Event.EDITVERTEX="draw:editvertex",L.Draw.Event.EDITSTOP="draw:editstop",L.Draw.Event.DELETESTART="draw:deletestart",L.Draw.Event.DELETESTOP="draw:deletestop",L.Draw.Event.TOOLBAROPENED="draw:toolbaropened",L.Draw.Event.TOOLBARCLOSED="draw:toolbarclosed",L.Draw.Event.MARKERCONTEXT="draw:markercontext",L.Draw=L.Draw||{},L.Draw.Feature=L.Handler.extend({initialize:function(t,e){this._map=t,this._container=t._container,this._overlayPane=t._panes.overlayPane,this._popupPane=t._panes.popupPane,e&&e.shapeOptions&&(e.shapeOptions=L.Util.extend({},this.options.shapeOptions,e.shapeOptions)),L.setOptions(this,e);var i=L.version.split(".");1===parseInt(i[0],10)&&parseInt(i[1],10)>=2?L.Draw.Feature.include(L.Evented.prototype):L.Draw.Feature.include(L.Mixin.Events)},enable:function(){this._enabled||(L.Handler.prototype.enable.call(this),this.fire("enabled",{handler:this.type}),this._map.fire(L.Draw.Event.DRAWSTART,{layerType:this.type}))},disable:function(){this._enabled&&(L.Handler.prototype.disable.call(this),this._map.fire(L.Draw.Event.DRAWSTOP,{layerType:this.type}),this.fire("disabled",{handler:this.type}))},addHooks:function(){var t=this._map;t&&(L.DomUtil.disableTextSelection(),t.getContainer().focus(),this._tooltip=new L.Draw.Tooltip(this._map),L.DomEvent.on(this._container,"keyup",this._cancelDrawing,this))},removeHooks:function(){this._map&&(L.DomUtil.enableTextSelection(),this._tooltip.dispose(),this._tooltip=null,L.DomEvent.off(this._container,"keyup",this._cancelDrawing,this))},setOptions:function(t){L.setOptions(this,t)},_fireCreatedEvent:function(t){this._map.fire(L.Draw.Event.CREATED,{layer:t,layerType:this.type})},_cancelDrawing:function(t){27===t.keyCode&&(this._map.fire("draw:canceled",{layerType:this.type}),this.disable())}}),L.Draw.Polyline=L.Draw.Feature.extend({statics:{TYPE:"polyline"},Poly:L.Polyline,options:{allowIntersection:!0,repeatMode:!1,drawError:{color:"#b00b00",timeout:2500},icon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"}),guidelineDistance:20,maxGuideLineLength:4e3,shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!1,clickable:!0},metric:!0,feet:!0,nautic:!1,showLength:!0,zIndexOffset:2e3,factor:1,maxPoints:0},initialize:function(t,e){L.Browser.touch&&(this.options.icon=this.options.touchIcon),this.options.drawError.message=L.drawLocal.draw.handlers.polyline.error,e&&e.drawError&&(e.drawError=L.Util.extend({},this.options.drawError,e.drawError)),this.type=L.Draw.Polyline.TYPE,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&&(this._markers=[],this._markerGroup=new L.LayerGroup,this._map.addLayer(this._markerGroup),this._poly=new L.Polyline([],this.options.shapeOptions),this._tooltip.updateContent(this._getTooltipText()),this._mouseMarker||(this._mouseMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:"leaflet-mouse-marker",iconAnchor:[20,20],iconSize:[40,40]}),opacity:0,zIndexOffset:this.options.zIndexOffset})),this._mouseMarker.on("mouseout",this._onMouseOut,this).on("mousemove",this._onMouseMove,this).on("mousedown",this._onMouseDown,this).on("mouseup",this._onMouseUp,this).addTo(this._map),this._map.on("mouseup",this._onMouseUp,this).on("mousemove",this._onMouseMove,this).on("zoomlevelschange",this._onZoomEnd,this).on("touchstart",this._onTouch,this).on("zoomend",this._onZoomEnd,this))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._clearHideErrorTimeout(),this._cleanUpShape(),this._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers,this._map.removeLayer(this._poly),delete this._poly,this._mouseMarker.off("mousedown",this._onMouseDown,this).off("mouseout",this._onMouseOut,this).off("mouseup",this._onMouseUp,this).off("mousemove",this._onMouseMove,this),this._map.removeLayer(this._mouseMarker),delete this._mouseMarker,this._clearGuides(),this._map.off("mouseup",this._onMouseUp,this).off("mousemove",this._onMouseMove,this).off("zoomlevelschange",this._onZoomEnd,this).off("zoomend",this._onZoomEnd,this).off("touchstart",this._onTouch,this).off("click",this._onTouch,this)},deleteLastVertex:function(){if(!(this._markers.length<=1)){var t=this._markers.pop(),e=this._poly,i=e.getLatLngs(),o=i.splice(-1,1)[0];this._poly.setLatLngs(i),this._markerGroup.removeLayer(t),e.getLatLngs().length<2&&this._map.removeLayer(e),this._vertexChanged(o,!1)}},addVertex:function(t){if(this._markers.length>=2&&!this.options.allowIntersection&&this._poly.newLatLngIntersects(t))return void this._showErrorTooltip();this._errorShown&&this._hideErrorTooltip(),this._markers.push(this._createMarker(t)),this._poly.addLatLng(t),2===this._poly.getLatLngs().length&&this._map.addLayer(this._poly),this._vertexChanged(t,!0)},completeShape:function(){this._markers.length<=1||!this._shapeIsValid()||(this._fireCreatedEvent(),this.disable(),this.options.repeatMode&&this.enable())},_finishShape:function(){var t=this._poly._defaultShape?this._poly._defaultShape():this._poly.getLatLngs(),e=this._poly.newLatLngIntersects(t[t.length-1]);if(!this.options.allowIntersection&&e||!this._shapeIsValid())return void this._showErrorTooltip();this._fireCreatedEvent(),this.disable(),this.options.repeatMode&&this.enable()},_shapeIsValid:function(){return!0},_onZoomEnd:function(){null!==this._markers&&this._updateGuide()},_onMouseMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent),i=this._map.layerPointToLatLng(e);this._currentLatLng=i,this._updateTooltip(i),this._updateGuide(e),this._mouseMarker.setLatLng(i),L.DomEvent.preventDefault(t.originalEvent)},_vertexChanged:function(t,e){this._map.fire(L.Draw.Event.DRAWVERTEX,{layers:this._markerGroup}),this._updateFinishHandler(),this._updateRunningMeasure(t,e),this._clearGuides(),this._updateTooltip()},_onMouseDown:function(t){if(!this._clickHandled&&!this._touchHandled&&!this._disableMarkers){this._onMouseMove(t),this._clickHandled=!0,this._disableNewMarkers();var e=t.originalEvent,i=e.clientX,o=e.clientY;this._startPoint.call(this,i,o)}},_startPoint:function(t,e){this._mouseDownOrigin=L.point(t,e)},_onMouseUp:function(t){var e=t.originalEvent,i=e.clientX,o=e.clientY;this._endPoint.call(this,i,o,t),this._clickHandled=null},_endPoint:function(e,i,o){if(this._mouseDownOrigin){var n=L.point(e,i).distanceTo(this._mouseDownOrigin),a=this._calculateFinishDistance(o.latlng);this.options.maxPoints>1&&this.options.maxPoints==this._markers.length+1?(this.addVertex(o.latlng),this._finishShape()):a<10&&L.Browser.touch?this._finishShape():Math.abs(n)<9*(t.devicePixelRatio||1)&&this.addVertex(o.latlng),this._enableNewMarkers()}this._mouseDownOrigin=null},_onTouch:function(t){var e,i,o=t.originalEvent;!o.touches||!o.touches[0]||this._clickHandled||this._touchHandled||this._disableMarkers||(e=o.touches[0].clientX,i=o.touches[0].clientY,this._disableNewMarkers(),this._touchHandled=!0,this._startPoint.call(this,e,i),this._endPoint.call(this,e,i,t),this._touchHandled=null),this._clickHandled=null},_onMouseOut:function(){this._tooltip&&this._tooltip._onMouseOut.call(this._tooltip)},_calculateFinishDistance:function(t){var e;if(this._markers.length>0){var i;if(this.type===L.Draw.Polyline.TYPE)i=this._markers[this._markers.length-1];else{if(this.type!==L.Draw.Polygon.TYPE)return 1/0;i=this._markers[0]}var o=this._map.latLngToContainerPoint(i.getLatLng()),n=new L.Marker(t,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),a=this._map.latLngToContainerPoint(n.getLatLng());e=o.distanceTo(a)}else e=1/0;return e},_updateFinishHandler:function(){var t=this._markers.length;t>1&&this._markers[t-1].on("click",this._finishShape,this),t>2&&this._markers[t-2].off("click",this._finishShape,this)},_createMarker:function(t){var e=new L.Marker(t,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset});return this._markerGroup.addLayer(e),e},_updateGuide:function(t){var e=this._markers?this._markers.length:0;e>0&&(t=t||this._map.latLngToLayerPoint(this._currentLatLng),this._clearGuides(),this._drawGuide(this._map.latLngToLayerPoint(this._markers[e-1].getLatLng()),t))},_updateTooltip:function(t){var e=this._getTooltipText();t&&this._tooltip.updatePosition(t),this._errorShown||this._tooltip.updateContent(e)},_drawGuide:function(t,e){var i,o,n,a=Math.floor(Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))),s=this.options.guidelineDistance,r=this.options.maxGuideLineLength,l=a>r?a-r:s;for(this._guidesContainer||(this._guidesContainer=L.DomUtil.create("div","leaflet-draw-guides",this._overlayPane));l<a;l+=this.options.guidelineDistance)i=l/a,o={x:Math.floor(t.x*(1-i)+i*e.x),y:Math.floor(t.y*(1-i)+i*e.y)},n=L.DomUtil.create("div","leaflet-draw-guide-dash",this._guidesContainer),n.style.backgroundColor=this._errorShown?this.options.drawError.color:this.options.shapeOptions.color,L.DomUtil.setPosition(n,o)},_updateGuideColor:function(t){if(this._guidesContainer)for(var e=0,i=this._guidesContainer.childNodes.length;e<i;e++)this._guidesContainer.childNodes[e].style.backgroundColor=t},_clearGuides:function(){if(this._guidesContainer)for(;this._guidesContainer.firstChild;)this._guidesContainer.removeChild(this._guidesContainer.firstChild)},_getTooltipText:function(){var t,e,i=this.options.showLength;return 0===this._markers.length?t={text:L.drawLocal.draw.handlers.polyline.tooltip.start}:(e=i?this._getMeasurementString():"",t=1===this._markers.length?{text:L.drawLocal.draw.handlers.polyline.tooltip.cont,subtext:e}:{text:L.drawLocal.draw.handlers.polyline.tooltip.end,subtext:e}),t},_updateRunningMeasure:function(t,e){var i,o,n=this._markers.length;1===this._markers.length?this._measurementRunningTotal=0:(i=n-(e?2:1),o=L.GeometryUtil.isVersion07x()?t.distanceTo(this._markers[i].getLatLng())*(this.options.factor||1):this._map.distance(t,this._markers[i].getLatLng())*(this.options.factor||1),this._measurementRunningTotal+=o*(e?1:-1))},_getMeasurementString:function(){var t,e=this._currentLatLng,i=this._markers[this._markers.length-1].getLatLng();return t=L.GeometryUtil.isVersion07x()?i&&e&&e.distanceTo?this._measurementRunningTotal+e.distanceTo(i)*(this.options.factor||1):this._measurementRunningTotal||0:i&&e?this._measurementRunningTotal+this._map.distance(e,i)*(this.options.factor||1):this._measurementRunningTotal||0,L.GeometryUtil.readableDistance(t,this.options.metric,this.options.feet,this.options.nautic,this.options.precision)},_showErrorTooltip:function(){this._errorShown=!0,this._tooltip.showAsError().updateContent({text:this.options.drawError.message}),this._updateGuideColor(this.options.drawError.color),this._poly.setStyle({color:this.options.drawError.color}),this._clearHideErrorTimeout(),this._hideErrorTimeout=setTimeout(L.Util.bind(this._hideErrorTooltip,this),this.options.drawError.timeout)},_hideErrorTooltip:function(){this._errorShown=!1,this._clearHideErrorTimeout(),this._tooltip.removeError().updateContent(this._getTooltipText()),this._updateGuideColor(this.options.shapeOptions.color),this._poly.setStyle({color:this.options.shapeOptions.color})},_clearHideErrorTimeout:function(){this._hideErrorTimeout&&(clearTimeout(this._hideErrorTimeout),this._hideErrorTimeout=null)},_disableNewMarkers:function(){this._disableMarkers=!0},_enableNewMarkers:function(){setTimeout(function(){this._disableMarkers=!1}.bind(this),50)},_cleanUpShape:function(){this._markers.length>1&&this._markers[this._markers.length-1].off("click",this._finishShape,this)},_fireCreatedEvent:function(){var t=new this.Poly(this._poly.getLatLngs(),this.options.shapeOptions);L.Draw.Feature.prototype._fireCreatedEvent.call(this,t)}}),L.Draw.Polygon=L.Draw.Polyline.extend({statics:{TYPE:"polygon"},Poly:L.Polygon,options:{showArea:!1,showLength:!1,shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0},metric:!0,feet:!0,nautic:!1,precision:{}},initialize:function(t,e){L.Draw.Polyline.prototype.initialize.call(this,t,e),this.type=L.Draw.Polygon.TYPE},_updateFinishHandler:function(){var t=this._markers.length;1===t&&this._markers[0].on("click",this._finishShape,this),t>2&&(this._markers[t-1].on("dblclick",this._finishShape,this),t>3&&this._markers[t-2].off("dblclick",this._finishShape,this))},_getTooltipText:function(){var t,e;return 0===this._markers.length?t=L.drawLocal.draw.handlers.polygon.tooltip.start:this._markers.length<3?(t=L.drawLocal.draw.handlers.polygon.tooltip.cont,e=this._getMeasurementString()):(t=L.drawLocal.draw.handlers.polygon.tooltip.end,e=this._getMeasurementString()),{text:t,subtext:e}},_getMeasurementString:function(){var t=this._area,e="";return t||this.options.showLength?(this.options.showLength&&(e=L.Draw.Polyline.prototype._getMeasurementString.call(this)),t&&(e+="<br>"+L.GeometryUtil.readableArea(t,this.options.metric,this.options.precision)),e):null},_shapeIsValid:function(){return this._markers.length>=3},_vertexChanged:function(t,e){var i;!this.options.allowIntersection&&this.options.showArea&&(i=this._poly.getLatLngs(),this._area=L.GeometryUtil.geodesicArea(i)),L.Draw.Polyline.prototype._vertexChanged.call(this,t,e)},_cleanUpShape:function(){var t=this._markers.length;t>0&&(this._markers[0].off("click",this._finishShape,this),t>2&&this._markers[t-1].off("dblclick",this._finishShape,this))}}),L.SimpleShape={},L.Draw.SimpleShape=L.Draw.Feature.extend({options:{repeatMode:!1},initialize:function(t,e){this._endLabelText=L.drawLocal.draw.handlers.simpleshape.tooltip.end,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&&(this._mapDraggable=this._map.dragging.enabled(),this._mapDraggable&&this._map.dragging.disable(),this._container.style.cursor="crosshair",this._tooltip.updateContent({text:this._initialLabelText}),this._map.on("mousedown",this._onMouseDown,this).on("mousemove",this._onMouseMove,this).on("touchstart",this._onMouseDown,this).on("touchmove",this._onMouseMove,this),e.addEventListener("touchstart",L.DomEvent.preventDefault,{passive:!1}))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._map&&(this._mapDraggable&&this._map.dragging.enable(),this._container.style.cursor="",this._map.off("mousedown",this._onMouseDown,this).off("mousemove",this._onMouseMove,this).off("touchstart",this._onMouseDown,this).off("touchmove",this._onMouseMove,this),L.DomEvent.off(e,"mouseup",this._onMouseUp,this),L.DomEvent.off(e,"touchend",this._onMouseUp,this),e.removeEventListener("touchstart",L.DomEvent.preventDefault),this._shape&&(this._map.removeLayer(this._shape),delete this._shape)),this._isDrawing=!1},_getTooltipText:function(){return{text:this._endLabelText}},_onMouseDown:function(t){this._isDrawing=!0,this._startLatLng=t.latlng,L.DomEvent.on(e,"mouseup",this._onMouseUp,this).on(e,"touchend",this._onMouseUp,this).preventDefault(t.originalEvent)},_onMouseMove:function(t){var e=t.latlng;this._tooltip.updatePosition(e),this._isDrawing&&(this._tooltip.updateContent(this._getTooltipText()),this._drawShape(e))},_onMouseUp:function(){this._shape&&this._fireCreatedEvent(),this.disable(),this.options.repeatMode&&this.enable()}}),L.Draw.Rectangle=L.Draw.SimpleShape.extend({statics:{TYPE:"rectangle"},options:{shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,showArea:!0,clickable:!0},metric:!0},initialize:function(t,e){this.type=L.Draw.Rectangle.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.rectangle.tooltip.start,L.Draw.SimpleShape.prototype.initialize.call(this,t,e)},disable:function(){this._enabled&&(this._isCurrentlyTwoClickDrawing=!1,L.Draw.SimpleShape.prototype.disable.call(this))},_onMouseUp:function(t){if(!this._shape&&!this._isCurrentlyTwoClickDrawing)return void(this._isCurrentlyTwoClickDrawing=!0);this._isCurrentlyTwoClickDrawing&&!o(t.target,"leaflet-pane")||L.Draw.SimpleShape.prototype._onMouseUp.call(this)},_drawShape:function(t){this._shape?this._shape.setBounds(new L.LatLngBounds(this._startLatLng,t)):(this._shape=new L.Rectangle(new L.LatLngBounds(this._startLatLng,t),this.options.shapeOptions),this._map.addLayer(this._shape))},_fireCreatedEvent:function(){var t=new L.Rectangle(this._shape.getBounds(),this.options.shapeOptions);L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this,t)},_getTooltipText:function(){var t,e,i,o=L.Draw.SimpleShape.prototype._getTooltipText.call(this),n=this._shape,a=this.options.showArea;return n&&(t=this._shape._defaultShape?this._shape._defaultShape():this._shape.getLatLngs(),e=L.GeometryUtil.geodesicArea(t),i=a?L.GeometryUtil.readableArea(e,this.options.metric):""),{text:o.text,subtext:i}}}),L.Draw.Marker=L.Draw.Feature.extend({statics:{TYPE:"marker"},options:{icon:new L.Icon.Default,repeatMode:!1,zIndexOffset:2e3},initialize:function(t,e){this.type=L.Draw.Marker.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.marker.tooltip.start,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&&(this._tooltip.updateContent({text:this._initialLabelText}),this._mouseMarker||(this._mouseMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:"leaflet-mouse-marker",iconAnchor:[20,20],iconSize:[40,40]}),opacity:0,zIndexOffset:this.options.zIndexOffset})),this._mouseMarker.on("click",this._onClick,this).addTo(this._map),this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onTouch,this))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._map&&(this._map.off("click",this._onClick,this).off("click",this._onTouch,this),this._marker&&(this._marker.off("click",this._onClick,this),this._map.removeLayer(this._marker),delete this._marker),this._mouseMarker.off("click",this._onClick,this),this._map.removeLayer(this._mouseMarker),delete this._mouseMarker,this._map.off("mousemove",this._onMouseMove,this))},_onMouseMove:function(t){var e=t.latlng;this._tooltip.updatePosition(e),this._mouseMarker.setLatLng(e),this._marker?(e=this._mouseMarker.getLatLng(),this._marker.setLatLng(e)):(this._marker=this._createMarker(e),this._marker.on("click",this._onClick,this),this._map.on("click",this._onClick,this).addLayer(this._marker))},_createMarker:function(t){return new L.Marker(t,{icon:this.options.icon,zIndexOffset:this.options.zIndexOffset})},_onClick:function(){this._fireCreatedEvent(),this.disable(),this.options.repeatMode&&this.enable()},_onTouch:function(t){this._onMouseMove(t),this._onClick()},_fireCreatedEvent:function(){var t=new L.Marker.Touch(this._marker.getLatLng(),{icon:this.options.icon});L.Draw.Feature.prototype._fireCreatedEvent.call(this,t)}}),L.Draw.CircleMarker=L.Draw.Marker.extend({statics:{TYPE:"circlemarker"},options:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0,zIndexOffset:2e3},initialize:function(t,e){this.type=L.Draw.CircleMarker.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.circlemarker.tooltip.start,L.Draw.Feature.prototype.initialize.call(this,t,e)},_fireCreatedEvent:function(){var t=new L.CircleMarker(this._marker.getLatLng(),this.options);L.Draw.Feature.prototype._fireCreatedEvent.call(this,t)},_createMarker:function(t){return new L.CircleMarker(t,this.options)}}),L.Draw.Circle=L.Draw.SimpleShape.extend({statics:{TYPE:"circle"},options:{shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0},showRadius:!0,metric:!0,feet:!0,nautic:!1},initialize:function(t,e){this.type=L.Draw.Circle.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.circle.tooltip.start,L.Draw.SimpleShape.prototype.initialize.call(this,t,e)},_drawShape:function(t){if(L.GeometryUtil.isVersion07x())var e=this._startLatLng.distanceTo(t);else var e=this._map.distance(this._startLatLng,t);this._shape?this._shape.setRadius(e):(this._shape=new L.Circle(this._startLatLng,e,this.options.shapeOptions),this._map.addLayer(this._shape))},_fireCreatedEvent:function(){var t=new L.Circle(this._startLatLng,this._shape.getRadius(),this.options.shapeOptions);L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this,t)},_onMouseMove:function(t){var e,i=t.latlng,o=this.options.showRadius,n=this.options.metric;if(this._tooltip.updatePosition(i),this._isDrawing){this._drawShape(i),e=this._shape.getRadius().toFixed(1);var a="";o&&(a=L.drawLocal.draw.handlers.circle.radius+": "+L.GeometryUtil.readableDistance(e,n,this.options.feet,this.options.nautic)),this._tooltip.updateContent({text:this._endLabelText,subtext:a})}}}),L.Edit=L.Edit||{},L.Edit.Marker=L.Handler.extend({initialize:function(t,e){this._marker=t,L.setOptions(this,e)},addHooks:function(){var t=this._marker;t.dragging.enable(),t.on("dragend",this._onDragEnd,t),this._toggleMarkerHighlight()},removeHooks:function(){var t=this._marker;t.dragging.disable(),t.off("dragend",this._onDragEnd,t),this._toggleMarkerHighlight()},_onDragEnd:function(t){var e=t.target;e.edited=!0,this._map.fire(L.Draw.Event.EDITMOVE,{layer:e})},_toggleMarkerHighlight:function(){var t=this._marker._icon;t&&(t.style.display="none",L.DomUtil.hasClass(t,"leaflet-edit-marker-selected")?(L.DomUtil.removeClass(t,"leaflet-edit-marker-selected"),this._offsetMarker(t,-4)):(L.DomUtil.addClass(t,"leaflet-edit-marker-selected"),this._offsetMarker(t,4)),t.style.display="")},_offsetMarker:function(t,e){var i=parseInt(t.style.marginTop,10)-e,o=parseInt(t.style.marginLeft,10)-e;t.style.marginTop=i+"px",t.style.marginLeft=o+"px"}}),L.Marker.addInitHook(function(){L.Edit.Marker&&(this.editing=new L.Edit.Marker(this),this.options.editable&&this.editing.enable())}),L.Edit=L.Edit||{},L.Edit.Poly=L.Handler.extend({initialize:function(t){this.latlngs=[t._latlngs],t._holes&&(this.latlngs=this.latlngs.concat(t._holes)),this._poly=t,this._poly.on("revert-edited",this._updateLatLngs,this)},_defaultShape:function(){return L.Polyline._flat?L.Polyline._flat(this._poly._latlngs)?this._poly._latlngs:this._poly._latlngs[0]:this._poly._latlngs},_eachVertexHandler:function(t){for(var e=0;e<this._verticesHandlers.length;e++)t(this._verticesHandlers[e])},addHooks:function(){this._initHandlers(),this._eachVertexHandler(function(t){t.addHooks()})},removeHooks:function(){this._eachVertexHandler(function(t){t.removeHooks()})},updateMarkers:function(){this._eachVertexHandler(function(t){t.updateMarkers()})},_initHandlers:function(){this._verticesHandlers=[];for(var t=0;t<this.latlngs.length;t++)this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly,this.latlngs[t],this._poly.options.poly))},_updateLatLngs:function(t){this.latlngs=[t.layer._latlngs],t.layer._holes&&(this.latlngs=this.latlngs.concat(t.layer._holes))}}),L.Edit.PolyVerticesEdit=L.Handler.extend({options:{icon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"}),drawError:{color:"#b00b00",timeout:1e3}},initialize:function(t,e,i){L.Browser.touch&&(this.options.icon=this.options.touchIcon),this._poly=t,i&&i.drawError&&(i.drawError=L.Util.extend({},this.options.drawError,i.drawError)),this._latlngs=e,L.setOptions(this,i)},_defaultShape:function(){return L.Polyline._flat?L.Polyline._flat(this._latlngs)?this._latlngs:this._latlngs[0]:this._latlngs},addHooks:function(){var t=this._poly,e=t._path;t instanceof L.Polygon||(t.options.fill=!1,t.options.editing&&(t.options.editing.fill=!1)),e&&t.options.editing&&t.options.editing.className&&(t.options.original.className&&t.options.original.className.split(" ").forEach(function(t){L.DomUtil.removeClass(e,t)}),t.options.editing.className.split(" ").forEach(function(t){L.DomUtil.addClass(e,t)})),t.setStyle(t.options.editing),this._poly._map&&(this._map=this._poly._map,this._markerGroup||this._initMarkers(),this._poly._map.addLayer(this._markerGroup))},removeHooks:function(){var t=this._poly,e=t._path;e&&t.options.editing&&t.options.editing.className&&(t.options.editing.className.split(" ").forEach(function(t){L.DomUtil.removeClass(e,t)}),t.options.original.className&&t.options.original.className.split(" ").forEach(function(t){L.DomUtil.addClass(e,t)})),t.setStyle(t.options.original),t._map&&(t._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers)},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new L.LayerGroup),this._markers=[];var t,e,i,o,n=this._defaultShape();for(t=0,i=n.length;t<i;t++)o=this._createMarker(n[t],t),o.on("click",this._onMarkerClick,this),o.on("contextmenu",this._onContextMenu,this),this._markers.push(o);var a,s;for(t=0,e=i-1;t<i;e=t++)(0!==t||L.Polygon&&this._poly instanceof L.Polygon)&&(a=this._markers[e],s=this._markers[t],this._createMiddleMarker(a,s),this._updatePrevNext(a,s))},_createMarker:function(t,e){var i=new L.Marker.Touch(t,{draggable:!0,icon:this.options.icon});return i._origLatLng=t,i._index=e,i.on("dragstart",this._onMarkerDragStart,this).on("drag",this._onMarkerDrag,this).on("dragend",this._fireEdit,this).on("touchmove",this._onTouchMove,this).on("touchend",this._fireEdit,this).on("MSPointerMove",this._onTouchMove,this).on("MSPointerUp",this._fireEdit,this),this._markerGroup.addLayer(i),i},_onMarkerDragStart:function(){this._poly.fire("editstart")},_spliceLatLngs:function(){var t=this._defaultShape(),e=[].splice.apply(t,arguments);return this._poly._convertLatLngs(t,!0),this._poly.redraw(),e},_removeMarker:function(t){var e=t._index;this._markerGroup.removeLayer(t),this._markers.splice(e,1),this._spliceLatLngs(e,1),this._updateIndexes(e,-1),t.off("dragstart",this._onMarkerDragStart,this).off("drag",this._onMarkerDrag,this).off("dragend",this._fireEdit,this).off("touchmove",this._onMarkerDrag,this).off("touchend",this._fireEdit,this).off("click",this._onMarkerClick,this).off("MSPointerMove",this._onTouchMove,this).off("MSPointerUp",this._fireEdit,this)},_fireEdit:function(){this._poly.edited=!0,this._poly.fire("edit"),this._poly._map.fire(L.Draw.Event.EDITVERTEX,{layers:this._markerGroup,poly:this._poly})},_onMarkerDrag:function(t){var e=t.target,i=this._poly;if(L.extend(e._origLatLng,e._latlng),e._middleLeft&&e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev,e)),e._middleRight&&e._middleRight.setLatLng(this._getMiddleLatLng(e,e._next)),i.options.poly){var o=i._map._editTooltip;if(!i.options.poly.allowIntersection&&i.intersects()){var n=i.options.color;i.setStyle({color:this.options.drawError.color}),0!==L.version.indexOf("0.7")&&e.dragging._draggable._onUp(t),this._onMarkerClick(t),o&&o.updateContent({text:L.drawLocal.draw.handlers.polyline.error}),setTimeout(function(){i.setStyle({color:n}),o&&o.updateContent({text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext})},1e3)}}this._poly._bounds._southWest=L.latLng(1/0,1/0),this._poly._bounds._northEast=L.latLng(-1/0,-1/0);var a=this._poly.getLatLngs();this._poly._convertLatLngs(a,!0),this._poly.redraw(),this._poly.fire("editdrag")},_onMarkerClick:function(t){var e=L.Polygon&&this._poly instanceof L.Polygon?4:3,i=t.target;this._defaultShape().length<e||(this._removeMarker(i),this._updatePrevNext(i._prev,i._next),i._middleLeft&&this._markerGroup.removeLayer(i._middleLeft),i._middleRight&&this._markerGroup.removeLayer(i._middleRight),i._prev&&i._next?this._createMiddleMarker(i._prev,i._next):i._prev?i._next||(i._prev._middleRight=null):i._next._middleLeft=null,this._fireEdit())},_onContextMenu:function(t){var e=t.target;this._poly;this._poly._map.fire(L.Draw.Event.MARKERCONTEXT,{marker:e,layers:this._markerGroup,poly:this._poly}),L.DomEvent.stopPropagation},_onTouchMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),i=this._map.layerPointToLatLng(e),o=t.target;L.extend(o._origLatLng,i),o._middleLeft&&o._middleLeft.setLatLng(this._getMiddleLatLng(o._prev,o)),o._middleRight&&o._middleRight.setLatLng(this._getMiddleLatLng(o,o._next)),this._poly.redraw(),this.updateMarkers()},_updateIndexes:function(t,e){this._markerGroup.eachLayer(function(i){i._index>t&&(i._index+=e)})},_createMiddleMarker:function(t,e){var i,o,n,a=this._getMiddleLatLng(t,e),s=this._createMarker(a);s.setOpacity(.6),t._middleRight=e._middleLeft=s,o=function(){s.off("touchmove",o,this);var n=e._index;s._index=n,s.off("click",i,this).on("click",this._onMarkerClick,this),a.lat=s.getLatLng().lat,a.lng=s.getLatLng().lng,this._spliceLatLngs(n,0,a),this._markers.splice(n,0,s),s.setOpacity(1),this._updateIndexes(n,1),e._index++,this._updatePrevNext(t,s),this._updatePrevNext(s,e),this._poly.fire("editstart")},n=function(){s.off("dragstart",o,this),s.off("dragend",n,this),s.off("touchmove",o,this),this._createMiddleMarker(t,s),this._createMiddleMarker(s,e)},i=function(){o.call(this),n.call(this),this._fireEdit()},s.on("click",i,this).on("dragstart",o,this).on("dragend",n,this).on("touchmove",o,this),this._markerGroup.addLayer(s)},_updatePrevNext:function(t,e){t&&(t._next=e),e&&(e._prev=t)},_getMiddleLatLng:function(t,e){var i=this._poly._map,o=i.project(t.getLatLng()),n=i.project(e.getLatLng());return i.unproject(o._add(n)._divideBy(2))}}),L.Polyline.addInitHook(function(){this.editing||(L.Edit.Poly&&(this.editing=new L.Edit.Poly(this),this.options.editable&&this.editing.enable()),this.on("add",function(){this.editing&&this.editing.enabled()&&this.editing.addHooks()}),this.on("remove",function(){this.editing&&this.editing.enabled()&&this.editing.removeHooks()}))}),L.Edit=L.Edit||{},L.Edit.SimpleShape=L.Handler.extend({options:{moveIcon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-edit-move"}),resizeIcon:new L.DivIcon({iconSize:new L.Point(8,8),
className:"leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"}),touchMoveIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"}),touchResizeIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"})},initialize:function(t,e){L.Browser.touch&&(this.options.moveIcon=this.options.touchMoveIcon,this.options.resizeIcon=this.options.touchResizeIcon),this._shape=t,L.Util.setOptions(this,e)},addHooks:function(){var t=this._shape;this._shape._map&&(this._map=this._shape._map,t.setStyle(t.options.editing),t._map&&(this._map=t._map,this._markerGroup||this._initMarkers(),this._map.addLayer(this._markerGroup)))},removeHooks:function(){var t=this._shape;if(t.setStyle(t.options.original),t._map){this._unbindMarker(this._moveMarker);for(var e=0,i=this._resizeMarkers.length;e<i;e++)this._unbindMarker(this._resizeMarkers[e]);this._resizeMarkers=null,this._map.removeLayer(this._markerGroup),delete this._markerGroup}this._map=null},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new L.LayerGroup),this._createMoveMarker(),this._createResizeMarker()},_createMoveMarker:function(){},_createResizeMarker:function(){},_createMarker:function(t,e){var i=new L.Marker.Touch(t,{draggable:!0,icon:e,zIndexOffset:10});return this._bindMarker(i),this._markerGroup.addLayer(i),i},_bindMarker:function(t){t.on("dragstart",this._onMarkerDragStart,this).on("drag",this._onMarkerDrag,this).on("dragend",this._onMarkerDragEnd,this).on("touchstart",this._onTouchStart,this).on("touchmove",this._onTouchMove,this).on("MSPointerMove",this._onTouchMove,this).on("touchend",this._onTouchEnd,this).on("MSPointerUp",this._onTouchEnd,this)},_unbindMarker:function(t){t.off("dragstart",this._onMarkerDragStart,this).off("drag",this._onMarkerDrag,this).off("dragend",this._onMarkerDragEnd,this).off("touchstart",this._onTouchStart,this).off("touchmove",this._onTouchMove,this).off("MSPointerMove",this._onTouchMove,this).off("touchend",this._onTouchEnd,this).off("MSPointerUp",this._onTouchEnd,this)},_onMarkerDragStart:function(t){t.target.setOpacity(0),this._shape.fire("editstart")},_fireEdit:function(){this._shape.edited=!0,this._shape.fire("edit")},_onMarkerDrag:function(t){var e=t.target,i=e.getLatLng();e===this._moveMarker?this._move(i):this._resize(i),this._shape.redraw(),this._shape.fire("editdrag")},_onMarkerDragEnd:function(t){t.target.setOpacity(1),this._fireEdit()},_onTouchStart:function(t){if(L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this,t),"function"==typeof this._getCorners){var e=this._getCorners(),i=t.target,o=i._cornerIndex;i.setOpacity(0),this._oppositeCorner=e[(o+2)%4],this._toggleCornerMarkers(0,o)}this._shape.fire("editstart")},_onTouchMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),i=this._map.layerPointToLatLng(e);return t.target===this._moveMarker?this._move(i):this._resize(i),this._shape.redraw(),!1},_onTouchEnd:function(t){t.target.setOpacity(1),this.updateMarkers(),this._fireEdit()},_move:function(){},_resize:function(){}}),L.Edit=L.Edit||{},L.Edit.Rectangle=L.Edit.SimpleShape.extend({_createMoveMarker:function(){var t=this._shape.getBounds(),e=t.getCenter();this._moveMarker=this._createMarker(e,this.options.moveIcon)},_createResizeMarker:function(){var t=this._getCorners();this._resizeMarkers=[];for(var e=0,i=t.length;e<i;e++)this._resizeMarkers.push(this._createMarker(t[e],this.options.resizeIcon)),this._resizeMarkers[e]._cornerIndex=e},_onMarkerDragStart:function(t){L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this,t);var e=this._getCorners(),i=t.target,o=i._cornerIndex;this._oppositeCorner=e[(o+2)%4],this._toggleCornerMarkers(0,o)},_onMarkerDragEnd:function(t){var e,i,o=t.target;o===this._moveMarker&&(e=this._shape.getBounds(),i=e.getCenter(),o.setLatLng(i)),this._toggleCornerMarkers(1),this._repositionCornerMarkers(),L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this,t)},_move:function(t){for(var e,i=this._shape._defaultShape?this._shape._defaultShape():this._shape.getLatLngs(),o=this._shape.getBounds(),n=o.getCenter(),a=[],s=0,r=i.length;s<r;s++)e=[i[s].lat-n.lat,i[s].lng-n.lng],a.push([t.lat+e[0],t.lng+e[1]]);this._shape.setLatLngs(a),this._repositionCornerMarkers(),this._map.fire(L.Draw.Event.EDITMOVE,{layer:this._shape})},_resize:function(t){var e;this._shape.setBounds(L.latLngBounds(t,this._oppositeCorner)),e=this._shape.getBounds(),this._moveMarker.setLatLng(e.getCenter()),this._map.fire(L.Draw.Event.EDITRESIZE,{layer:this._shape})},_getCorners:function(){var t=this._shape.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]},_toggleCornerMarkers:function(t){for(var e=0,i=this._resizeMarkers.length;e<i;e++)this._resizeMarkers[e].setOpacity(t)},_repositionCornerMarkers:function(){for(var t=this._getCorners(),e=0,i=this._resizeMarkers.length;e<i;e++)this._resizeMarkers[e].setLatLng(t[e])}}),L.Rectangle.addInitHook(function(){L.Edit.Rectangle&&(this.editing=new L.Edit.Rectangle(this),this.options.editable&&this.editing.enable())}),L.Edit=L.Edit||{},L.Edit.CircleMarker=L.Edit.SimpleShape.extend({_createMoveMarker:function(){var t=this._shape.getLatLng();this._moveMarker=this._createMarker(t,this.options.moveIcon)},_createResizeMarker:function(){this._resizeMarkers=[]},_move:function(t){if(this._resizeMarkers.length){var e=this._getResizeMarkerPoint(t);this._resizeMarkers[0].setLatLng(e)}this._shape.setLatLng(t),this._map.fire(L.Draw.Event.EDITMOVE,{layer:this._shape})}}),L.CircleMarker.addInitHook(function(){L.Edit.CircleMarker&&(this.editing=new L.Edit.CircleMarker(this),this.options.editable&&this.editing.enable()),this.on("add",function(){this.editing&&this.editing.enabled()&&this.editing.addHooks()}),this.on("remove",function(){this.editing&&this.editing.enabled()&&this.editing.removeHooks()})}),L.Edit=L.Edit||{},L.Edit.Circle=L.Edit.CircleMarker.extend({_createResizeMarker:function(){var t=this._shape.getLatLng(),e=this._getResizeMarkerPoint(t);this._resizeMarkers=[],this._resizeMarkers.push(this._createMarker(e,this.options.resizeIcon))},_getResizeMarkerPoint:function(t){var e=this._shape._radius*Math.cos(Math.PI/4),i=this._map.project(t);return this._map.unproject([i.x+e,i.y-e])},_resize:function(t){var e=this._moveMarker.getLatLng();L.GeometryUtil.isVersion07x()?radius=e.distanceTo(t):radius=this._map.distance(e,t),this._shape.setRadius(radius),this._map.editTooltip&&this._map._editTooltip.updateContent({text:L.drawLocal.edit.handlers.edit.tooltip.subtext+"<br />"+L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.draw.handlers.circle.radius+": "+L.GeometryUtil.readableDistance(radius,!0,this.options.feet,this.options.nautic)}),this._shape.setRadius(radius),this._map.fire(L.Draw.Event.EDITRESIZE,{layer:this._shape})}}),L.Circle.addInitHook(function(){L.Edit.Circle&&(this.editing=new L.Edit.Circle(this),this.options.editable&&this.editing.enable()),this.on("add",function(){this.editing&&this.editing.enabled()&&this.editing.addHooks()}),this.on("remove",function(){this.editing&&this.editing.enabled()&&this.editing.removeHooks()})}),L.Map.mergeOptions({touchExtend:!0}),L.Map.TouchExtend=L.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane},addHooks:function(){L.DomEvent.on(this._container,"touchstart",this._onTouchStart,this),L.DomEvent.on(this._container,"touchend",this._onTouchEnd,this),L.DomEvent.on(this._container,"touchmove",this._onTouchMove,this),this._detectIE()?(L.DomEvent.on(this._container,"MSPointerDown",this._onTouchStart,this),L.DomEvent.on(this._container,"MSPointerUp",this._onTouchEnd,this),L.DomEvent.on(this._container,"MSPointerMove",this._onTouchMove,this),L.DomEvent.on(this._container,"MSPointerCancel",this._onTouchCancel,this)):(L.DomEvent.on(this._container,"touchcancel",this._onTouchCancel,this),L.DomEvent.on(this._container,"touchleave",this._onTouchLeave,this))},removeHooks:function(){L.DomEvent.off(this._container,"touchstart",this._onTouchStart),L.DomEvent.off(this._container,"touchend",this._onTouchEnd),L.DomEvent.off(this._container,"touchmove",this._onTouchMove),this._detectIE()?(L.DomEvent.off(this._container,"MSPointerDowm",this._onTouchStart),L.DomEvent.off(this._container,"MSPointerUp",this._onTouchEnd),L.DomEvent.off(this._container,"MSPointerMove",this._onTouchMove),L.DomEvent.off(this._container,"MSPointerCancel",this._onTouchCancel)):(L.DomEvent.off(this._container,"touchcancel",this._onTouchCancel),L.DomEvent.off(this._container,"touchleave",this._onTouchLeave))},_touchEvent:function(t,e){var i={};if(void 0!==t.touches){if(!t.touches.length)return;i=t.touches[0]}else{if("touch"!==t.pointerType)return;if(i=t,!this._filterClick(t))return}var o=this._map.mouseEventToContainerPoint(i),n=this._map.mouseEventToLayerPoint(i),a=this._map.layerPointToLatLng(n);this._map.fire(e,{latlng:a,layerPoint:n,containerPoint:o,pageX:i.pageX,pageY:i.pageY,originalEvent:t})},_filterClick:function(t){var e=t.timeStamp||t.originalEvent.timeStamp,i=L.DomEvent._lastClick&&e-L.DomEvent._lastClick;return i&&i>100&&i<500||t.target._simulatedClick&&!t._simulated?(L.DomEvent.stop(t),!1):(L.DomEvent._lastClick=e,!0)},_onTouchStart:function(t){if(this._map._loaded){this._touchEvent(t,"touchstart")}},_onTouchEnd:function(t){if(this._map._loaded){this._touchEvent(t,"touchend")}},_onTouchCancel:function(t){if(this._map._loaded){var e="touchcancel";this._detectIE()&&(e="pointercancel"),this._touchEvent(t,e)}},_onTouchLeave:function(t){if(this._map._loaded){this._touchEvent(t,"touchleave")}},_onTouchMove:function(t){if(this._map._loaded){this._touchEvent(t,"touchmove")}},_detectIE:function(){var e=t.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return parseInt(e.substring(i+5,e.indexOf(".",i)),10);if(e.indexOf("Trident/")>0){var o=e.indexOf("rv:");return parseInt(e.substring(o+3,e.indexOf(".",o)),10)}var n=e.indexOf("Edge/");return n>0&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}}),L.Map.addInitHook("addHandler","touchExtend",L.Map.TouchExtend),L.Marker.Touch=L.Marker.extend({_initInteraction:function(){return this.addInteractiveTarget?L.Marker.prototype._initInteraction.apply(this):this._initInteractionLegacy()},_initInteractionLegacy:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu","touchstart","touchend","touchmove"];this._detectIE?e.concat(["MSPointerDown","MSPointerUp","MSPointerMove","MSPointerCancel"]):e.concat(["touchcancel"]),L.DomUtil.addClass(t,"leaflet-clickable"),L.DomEvent.on(t,"click",this._onMouseClick,this),L.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)L.DomEvent.on(t,e[i],this._fireMouseEvent,this);L.Handler.MarkerDrag&&(this.dragging=new L.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_detectIE:function(){var e=t.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return parseInt(e.substring(i+5,e.indexOf(".",i)),10);if(e.indexOf("Trident/")>0){var o=e.indexOf("rv:");return parseInt(e.substring(o+3,e.indexOf(".",o)),10)}var n=e.indexOf("Edge/");return n>0&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}}),L.LatLngUtil={cloneLatLngs:function(t){for(var e=[],i=0,o=t.length;i<o;i++)Array.isArray(t[i])?e.push(L.LatLngUtil.cloneLatLngs(t[i])):e.push(this.cloneLatLng(t[i]));return e},cloneLatLng:function(t){return L.latLng(t.lat,t.lng)}},function(){var t={km:2,ha:2,m:0,mi:2,ac:2,yd:0,ft:0,nm:2};L.GeometryUtil=L.extend(L.GeometryUtil||{},{geodesicArea:function(t){var e,i,o=t.length,n=0,a=Math.PI/180;if(o>2){for(var s=0;s<o;s++)e=t[s],i=t[(s+1)%o],n+=(i.lng-e.lng)*a*(2+Math.sin(e.lat*a)+Math.sin(i.lat*a));n=6378137*n*6378137/2}return Math.abs(n)},formattedNumber:function(t,e){var i=parseFloat(t).toFixed(e),o=L.drawLocal.format&&L.drawLocal.format.numeric,n=o&&o.delimiters,a=n&&n.thousands,s=n&&n.decimal;if(a||s){var r=i.split(".");i=a?r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+a):r[0],s=s||".",r.length>1&&(i=i+s+r[1])}return i},readableArea:function(e,i,o){var n,a,o=L.Util.extend({},t,o);return i?(a=["ha","m"],type=typeof i,"string"===type?a=[i]:"boolean"!==type&&(a=i),n=e>=1e6&&-1!==a.indexOf("km")?L.GeometryUtil.formattedNumber(1e-6*e,o.km)+" km??":e>=1e4&&-1!==a.indexOf("ha")?L.GeometryUtil.formattedNumber(1e-4*e,o.ha)+" ha":L.GeometryUtil.formattedNumber(e,o.m)+" m??"):(e/=.836127,n=e>=3097600?L.GeometryUtil.formattedNumber(e/3097600,o.mi)+" mi??":e>=4840?L.GeometryUtil.formattedNumber(e/4840,o.ac)+" acres":L.GeometryUtil.formattedNumber(e,o.yd)+" yd??"),n},readableDistance:function(e,i,o,n,a){var s,a=L.Util.extend({},t,a);switch(i?"string"==typeof i?i:"metric":o?"feet":n?"nauticalMile":"yards"){case"metric":s=e>1e3?L.GeometryUtil.formattedNumber(e/1e3,a.km)+" km":L.GeometryUtil.formattedNumber(e,a.m)+" m";break;case"feet":e*=3.28083,s=L.GeometryUtil.formattedNumber(e,a.ft)+" ft";break;case"nauticalMile":e*=.53996,s=L.GeometryUtil.formattedNumber(e/1e3,a.nm)+" nm";break;case"yards":default:e*=1.09361,s=e>1760?L.GeometryUtil.formattedNumber(e/1760,a.mi)+" miles":L.GeometryUtil.formattedNumber(e,a.yd)+" yd"}return s},isVersion07x:function(){var t=L.version.split(".");return 0===parseInt(t[0],10)&&7===parseInt(t[1],10)}})}(),L.Util.extend(L.LineUtil,{segmentsIntersect:function(t,e,i,o){return this._checkCounterclockwise(t,i,o)!==this._checkCounterclockwise(e,i,o)&&this._checkCounterclockwise(t,e,i)!==this._checkCounterclockwise(t,e,o)},_checkCounterclockwise:function(t,e,i){return(i.y-t.y)*(e.x-t.x)>(e.y-t.y)*(i.x-t.x)}}),L.Polyline.include({intersects:function(){var t,e,i,o=this._getProjectedPoints(),n=o?o.length:0;if(this._tooFewPointsForIntersection())return!1;for(t=n-1;t>=3;t--)if(e=o[t-1],i=o[t],this._lineSegmentsIntersectsRange(e,i,t-2))return!0;return!1},newLatLngIntersects:function(t,e){return!!this._map&&this.newPointIntersects(this._map.latLngToLayerPoint(t),e)},newPointIntersects:function(t,e){var i=this._getProjectedPoints(),o=i?i.length:0,n=i?i[o-1]:null,a=o-2;return!this._tooFewPointsForIntersection(1)&&this._lineSegmentsIntersectsRange(n,t,a,e?1:0)},_tooFewPointsForIntersection:function(t){var e=this._getProjectedPoints(),i=e?e.length:0;return i+=t||0,!e||i<=3},_lineSegmentsIntersectsRange:function(t,e,i,o){var n,a,s=this._getProjectedPoints();o=o||0;for(var r=i;r>o;r--)if(n=s[r-1],a=s[r],L.LineUtil.segmentsIntersect(t,e,n,a))return!0;return!1},_getProjectedPoints:function(){if(!this._defaultShape)return this._originalPoints;for(var t=[],e=this._defaultShape(),i=0;i<e.length;i++)t.push(this._map.latLngToLayerPoint(e[i]));return t}}),L.Polygon.include({intersects:function(){var t,e,i,o,n=this._getProjectedPoints();return!this._tooFewPointsForIntersection()&&(!!L.Polyline.prototype.intersects.call(this)||(t=n.length,e=n[0],i=n[t-1],o=t-2,this._lineSegmentsIntersectsRange(i,e,o,1)))}}),L.Control.Draw=L.Control.extend({options:{position:"topleft",draw:{},edit:!1},initialize:function(t){if(L.version<"0.7")throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");L.Control.prototype.initialize.call(this,t);var e;this._toolbars={},L.DrawToolbar&&this.options.draw&&(e=new L.DrawToolbar(this.options.draw),this._toolbars[L.DrawToolbar.TYPE]=e,this._toolbars[L.DrawToolbar.TYPE].on("enable",this._toolbarEnabled,this)),L.EditToolbar&&this.options.edit&&(e=new L.EditToolbar(this.options.edit),this._toolbars[L.EditToolbar.TYPE]=e,this._toolbars[L.EditToolbar.TYPE].on("enable",this._toolbarEnabled,this)),L.toolbar=this},onAdd:function(t){var e,i=L.DomUtil.create("div","leaflet-draw"),o=!1;for(var n in this._toolbars)this._toolbars.hasOwnProperty(n)&&(e=this._toolbars[n].addToolbar(t))&&(o||(L.DomUtil.hasClass(e,"leaflet-draw-toolbar-top")||L.DomUtil.addClass(e.childNodes[0],"leaflet-draw-toolbar-top"),o=!0),i.appendChild(e));return i},onRemove:function(){for(var t in this._toolbars)this._toolbars.hasOwnProperty(t)&&this._toolbars[t].removeToolbar()},setDrawingOptions:function(t){for(var e in this._toolbars)this._toolbars[e]instanceof L.DrawToolbar&&this._toolbars[e].setOptions(t)},_toolbarEnabled:function(t){var e=t.target;for(var i in this._toolbars)this._toolbars[i]!==e&&this._toolbars[i].disable()}}),L.Map.mergeOptions({drawControlTooltips:!0,drawControl:!1}),L.Map.addInitHook(function(){this.options.drawControl&&(this.drawControl=new L.Control.Draw,this.addControl(this.drawControl))}),L.Toolbar=L.Class.extend({initialize:function(t){L.setOptions(this,t),this._modes={},this._actionButtons=[],this._activeMode=null;var e=L.version.split(".");1===parseInt(e[0],10)&&parseInt(e[1],10)>=2?L.Toolbar.include(L.Evented.prototype):L.Toolbar.include(L.Mixin.Events)},enabled:function(){return null!==this._activeMode},disable:function(){this.enabled()&&this._activeMode.handler.disable()},addToolbar:function(t){var e,i=L.DomUtil.create("div","leaflet-draw-section"),o=0,n=this._toolbarClass||"",a=this.getModeHandlers(t);for(this._toolbarContainer=L.DomUtil.create("div","leaflet-draw-toolbar leaflet-bar"),this._map=t,e=0;e<a.length;e++)a[e].enabled&&this._initModeHandler(a[e].handler,this._toolbarContainer,o++,n,a[e].title);if(o)return this._lastButtonIndex=--o,this._actionsContainer=L.DomUtil.create("ul","leaflet-draw-actions"),i.appendChild(this._toolbarContainer),i.appendChild(this._actionsContainer),i},removeToolbar:function(){for(var t in this._modes)this._modes.hasOwnProperty(t)&&(this._disposeButton(this._modes[t].button,this._modes[t].handler.enable,this._modes[t].handler),this._modes[t].handler.disable(),this._modes[t].handler.off("enabled",this._handlerActivated,this).off("disabled",this._handlerDeactivated,this));this._modes={};for(var e=0,i=this._actionButtons.length;e<i;e++)this._disposeButton(this._actionButtons[e].button,this._actionButtons[e].callback,this);this._actionButtons=[],this._actionsContainer=null},_initModeHandler:function(t,e,i,o,n){var a=t.type;this._modes[a]={},this._modes[a].handler=t,this._modes[a].button=this._createButton({type:a,title:n,className:o+"-"+a,container:e,callback:this._modes[a].handler.enable,context:this._modes[a].handler}),this._modes[a].buttonIndex=i,this._modes[a].handler.on("enabled",this._handlerActivated,this).on("disabled",this._handlerDeactivated,this)},_detectIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!t.MSStream},_createButton:function(t){var e=L.DomUtil.create("a",t.className||"",t.container),i=L.DomUtil.create("span","sr-only",t.container);e.href="#",e.appendChild(i),t.title&&(e.title=t.title,i.innerHTML=t.title),t.text&&(e.innerHTML=t.text,i.innerHTML=t.text);var o=this._detectIOS()?"touchstart":"click";return L.DomEvent.on(e,"click",L.DomEvent.stopPropagation).on(e,"mousedown",L.DomEvent.stopPropagation).on(e,"dblclick",L.DomEvent.stopPropagation).on(e,"touchstart",L.DomEvent.stopPropagation).on(e,"click",L.DomEvent.preventDefault).on(e,o,t.callback,t.context),e},_disposeButton:function(t,e){var i=this._detectIOS()?"touchstart":"click";L.DomEvent.off(t,"click",L.DomEvent.stopPropagation).off(t,"mousedown",L.DomEvent.stopPropagation).off(t,"dblclick",L.DomEvent.stopPropagation).off(t,"touchstart",L.DomEvent.stopPropagation).off(t,"click",L.DomEvent.preventDefault).off(t,i,e)},_handlerActivated:function(t){this.disable(),this._activeMode=this._modes[t.handler],L.DomUtil.addClass(this._activeMode.button,"leaflet-draw-toolbar-button-enabled"),this._showActionsToolbar(),this.fire("enable")},_handlerDeactivated:function(){this._hideActionsToolbar(),L.DomUtil.removeClass(this._activeMode.button,"leaflet-draw-toolbar-button-enabled"),this._activeMode=null,this.fire("disable")},_createActions:function(t){var e,i,o,n,a=this._actionsContainer,s=this.getActions(t),r=s.length;for(i=0,o=this._actionButtons.length;i<o;i++)this._disposeButton(this._actionButtons[i].button,this._actionButtons[i].callback);for(this._actionButtons=[];a.firstChild;)a.removeChild(a.firstChild);for(var l=0;l<r;l++)"enabled"in s[l]&&!s[l].enabled||(e=L.DomUtil.create("li","",a),n=this._createButton({title:s[l].title,text:s[l].text,container:e,callback:s[l].callback,context:s[l].context}),this._actionButtons.push({button:n,callback:s[l].callback}))},_showActionsToolbar:function(){var t=this._activeMode.buttonIndex,e=this._lastButtonIndex,i=this._activeMode.button.offsetTop-1;this._createActions(this._activeMode.handler),this._actionsContainer.style.top=i+"px",0===t&&(L.DomUtil.addClass(this._toolbarContainer,"leaflet-draw-toolbar-notop"),L.DomUtil.addClass(this._actionsContainer,"leaflet-draw-actions-top")),t===e&&(L.DomUtil.addClass(this._toolbarContainer,"leaflet-draw-toolbar-nobottom"),L.DomUtil.addClass(this._actionsContainer,"leaflet-draw-actions-bottom")),this._actionsContainer.style.display="block",this._map.fire(L.Draw.Event.TOOLBAROPENED)},_hideActionsToolbar:function(){this._actionsContainer.style.display="none",L.DomUtil.removeClass(this._toolbarContainer,"leaflet-draw-toolbar-notop"),L.DomUtil.removeClass(this._toolbarContainer,"leaflet-draw-toolbar-nobottom"),L.DomUtil.removeClass(this._actionsContainer,"leaflet-draw-actions-top"),L.DomUtil.removeClass(this._actionsContainer,"leaflet-draw-actions-bottom"),this._map.fire(L.Draw.Event.TOOLBARCLOSED)}}),L.Draw=L.Draw||{},L.Draw.Tooltip=L.Class.extend({initialize:function(t){this._map=t,this._popupPane=t._panes.popupPane,this._visible=!1,this._container=t.options.drawControlTooltips?L.DomUtil.create("div","leaflet-draw-tooltip",this._popupPane):null,this._singleLineLabel=!1,this._map.on("mouseout",this._onMouseOut,this)},dispose:function(){this._map.off("mouseout",this._onMouseOut,this),this._container&&(this._popupPane.removeChild(this._container),this._container=null)},updateContent:function(t){return this._container?(t.subtext=t.subtext||"",0!==t.subtext.length||this._singleLineLabel?t.subtext.length>0&&this._singleLineLabel&&(L.DomUtil.removeClass(this._container,"leaflet-draw-tooltip-single"),this._singleLineLabel=!1):(L.DomUtil.addClass(this._container,"leaflet-draw-tooltip-single"),this._singleLineLabel=!0),this._container.innerHTML=(t.subtext.length>0?'<span class="leaflet-draw-tooltip-subtext">'+t.subtext+"</span><br />":"")+"<span>"+t.text+"</span>",t.text||t.subtext?(this._visible=!0,this._container.style.visibility="inherit"):(this._visible=!1,this._container.style.visibility="hidden"),this):this},updatePosition:function(t){var e=this._map.latLngToLayerPoint(t),i=this._container;return this._container&&(this._visible&&(i.style.visibility="inherit"),L.DomUtil.setPosition(i,e)),this},showAsError:function(){return this._container&&L.DomUtil.addClass(this._container,"leaflet-error-draw-tooltip"),this},removeError:function(){return this._container&&L.DomUtil.removeClass(this._container,"leaflet-error-draw-tooltip"),this},_onMouseOut:function(){this._container&&(this._container.style.visibility="hidden")}}),L.DrawToolbar=L.Toolbar.extend({statics:{TYPE:"draw"},options:{polyline:{},polygon:{},rectangle:{},circle:{},marker:{},circlemarker:{}},initialize:function(t){for(var e in this.options)this.options.hasOwnProperty(e)&&t[e]&&(t[e]=L.extend({},this.options[e],t[e]));this._toolbarClass="leaflet-draw-draw",L.Toolbar.prototype.initialize.call(this,t)},getModeHandlers:function(t){return[{enabled:this.options.polyline,handler:new L.Draw.Polyline(t,this.options.polyline),title:L.drawLocal.draw.toolbar.buttons.polyline},{enabled:this.options.polygon,handler:new L.Draw.Polygon(t,this.options.polygon),title:L.drawLocal.draw.toolbar.buttons.polygon},{enabled:this.options.rectangle,handler:new L.Draw.Rectangle(t,this.options.rectangle),title:L.drawLocal.draw.toolbar.buttons.rectangle},{enabled:this.options.circle,handler:new L.Draw.Circle(t,this.options.circle),title:L.drawLocal.draw.toolbar.buttons.circle},{enabled:this.options.marker,handler:new L.Draw.Marker(t,this.options.marker),title:L.drawLocal.draw.toolbar.buttons.marker},{enabled:this.options.circlemarker,handler:new L.Draw.CircleMarker(t,this.options.circlemarker),title:L.drawLocal.draw.toolbar.buttons.circlemarker}]},getActions:function(t){return[{enabled:t.completeShape,title:L.drawLocal.draw.toolbar.finish.title,text:L.drawLocal.draw.toolbar.finish.text,callback:t.completeShape,context:t},{enabled:t.deleteLastVertex,title:L.drawLocal.draw.toolbar.undo.title,text:L.drawLocal.draw.toolbar.undo.text,callback:t.deleteLastVertex,context:t},{title:L.drawLocal.draw.toolbar.actions.title,text:L.drawLocal.draw.toolbar.actions.text,callback:this.disable,context:this}]},setOptions:function(t){L.setOptions(this,t);for(var e in this._modes)this._modes.hasOwnProperty(e)&&t.hasOwnProperty(e)&&this._modes[e].handler.setOptions(t[e])}}),L.EditToolbar=L.Toolbar.extend({statics:{TYPE:"edit"},options:{edit:{selectedPathOptions:{dashArray:"10, 10",fill:!0,fillColor:"#fe57a1",fillOpacity:.1,maintainColor:!1}},remove:{},poly:null,featureGroup:null},initialize:function(t){t.edit&&(void 0===t.edit.selectedPathOptions&&(t.edit.selectedPathOptions=this.options.edit.selectedPathOptions),t.edit.selectedPathOptions=L.extend({},this.options.edit.selectedPathOptions,t.edit.selectedPathOptions)),t.remove&&(t.remove=L.extend({},this.options.remove,t.remove)),t.poly&&(t.poly=L.extend({},this.options.poly,t.poly)),this._toolbarClass="leaflet-draw-edit",L.Toolbar.prototype.initialize.call(this,t),this._selectedFeatureCount=0},getModeHandlers:function(t){var e=this.options.featureGroup;return[{enabled:this.options.edit,handler:new L.EditToolbar.Edit(t,{featureGroup:e,selectedPathOptions:this.options.edit.selectedPathOptions,poly:this.options.poly}),title:L.drawLocal.edit.toolbar.buttons.edit},{enabled:this.options.remove,handler:new L.EditToolbar.Delete(t,{featureGroup:e}),title:L.drawLocal.edit.toolbar.buttons.remove}]},getActions:function(t){var e=[{title:L.drawLocal.edit.toolbar.actions.save.title,text:L.drawLocal.edit.toolbar.actions.save.text,callback:this._save,context:this},{title:L.drawLocal.edit.toolbar.actions.cancel.title,text:L.drawLocal.edit.toolbar.actions.cancel.text,callback:this.disable,context:this}];return t.removeAllLayers&&e.push({title:L.drawLocal.edit.toolbar.actions.clearAll.title,text:L.drawLocal.edit.toolbar.actions.clearAll.text,callback:this._clearAllLayers,context:this}),e},addToolbar:function(t){var e=L.Toolbar.prototype.addToolbar.call(this,t);return this._checkDisabled(),this.options.featureGroup.on("layeradd layerremove",this._checkDisabled,this),e},removeToolbar:function(){this.options.featureGroup.off("layeradd layerremove",this._checkDisabled,this),L.Toolbar.prototype.removeToolbar.call(this)},disable:function(){this.enabled()&&(this._activeMode.handler.revertLayers(),L.Toolbar.prototype.disable.call(this))},_save:function(){this._activeMode.handler.save(),this._activeMode&&this._activeMode.handler.disable()},_clearAllLayers:function(){this._activeMode.handler.removeAllLayers(),this._activeMode&&this._activeMode.handler.disable()},_checkDisabled:function(){var t,e=this.options.featureGroup,i=0!==e.getLayers().length;this.options.edit&&(t=this._modes[L.EditToolbar.Edit.TYPE].button,i?L.DomUtil.removeClass(t,"leaflet-disabled"):L.DomUtil.addClass(t,"leaflet-disabled"),t.setAttribute("title",i?L.drawLocal.edit.toolbar.buttons.edit:L.drawLocal.edit.toolbar.buttons.editDisabled)),this.options.remove&&(t=this._modes[L.EditToolbar.Delete.TYPE].button,i?L.DomUtil.removeClass(t,"leaflet-disabled"):L.DomUtil.addClass(t,"leaflet-disabled"),t.setAttribute("title",i?L.drawLocal.edit.toolbar.buttons.remove:L.drawLocal.edit.toolbar.buttons.removeDisabled))}}),L.EditToolbar.Edit=L.Handler.extend({statics:{TYPE:"edit"},initialize:function(t,e){if(L.Handler.prototype.initialize.call(this,t),L.setOptions(this,e),this._featureGroup=e.featureGroup,!(this._featureGroup instanceof L.FeatureGroup))throw new Error("options.featureGroup must be a L.FeatureGroup");this._uneditedLayerProps={},this.type=L.EditToolbar.Edit.TYPE;var i=L.version.split(".");1===parseInt(i[0],10)&&parseInt(i[1],10)>=2?L.EditToolbar.Edit.include(L.Evented.prototype):L.EditToolbar.Edit.include(L.Mixin.Events)},enable:function(){!this._enabled&&this._hasAvailableLayers()&&(this.fire("enabled",{handler:this.type}),this._map.fire(L.Draw.Event.EDITSTART,{handler:this.type}),L.Handler.prototype.enable.call(this),this._featureGroup.on("layeradd",this._enableLayerEdit,this).on("layerremove",this._disableLayerEdit,this))},disable:function(){this._enabled&&(this._featureGroup.off("layeradd",this._enableLayerEdit,this).off("layerremove",this._disableLayerEdit,this),L.Handler.prototype.disable.call(this),this._map.fire(L.Draw.Event.EDITSTOP,{handler:this.type}),this.fire("disabled",{handler:this.type}))},addHooks:function(){var t=this._map;t&&(t.getContainer().focus(),this._featureGroup.eachLayer(this._enableLayerEdit,this),this._tooltip=new L.Draw.Tooltip(this._map),this._tooltip.updateContent({text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext}),t._editTooltip=this._tooltip,this._updateTooltip(),this._map.on("mousemove",this._onMouseMove,this).on("touchmove",this._onMouseMove,this).on("MSPointerMove",this._onMouseMove,this).on(L.Draw.Event.EDITVERTEX,this._updateTooltip,this))},removeHooks:function(){this._map&&(this._featureGroup.eachLayer(this._disableLayerEdit,this),this._uneditedLayerProps={},this._tooltip.dispose(),this._tooltip=null,this._map.off("mousemove",this._onMouseMove,this).off("touchmove",this._onMouseMove,this).off("MSPointerMove",this._onMouseMove,this).off(L.Draw.Event.EDITVERTEX,this._updateTooltip,this))},revertLayers:function(){this._featureGroup.eachLayer(function(t){this._revertLayer(t)},this)},save:function(){var t=new L.LayerGroup;this._featureGroup.eachLayer(function(e){e.edited&&(t.addLayer(e),e.edited=!1)}),this._map.fire(L.Draw.Event.EDITED,{layers:t})},_backupLayer:function(t){var e=L.Util.stamp(t);this._uneditedLayerProps[e]||(t instanceof L.Polyline||t instanceof L.Polygon||t instanceof L.Rectangle?this._uneditedLayerProps[e]={latlngs:L.LatLngUtil.cloneLatLngs(t.getLatLngs())}:t instanceof L.Circle?this._uneditedLayerProps[e]={latlng:L.LatLngUtil.cloneLatLng(t.getLatLng()),radius:t.getRadius()}:(t instanceof L.Marker||t instanceof L.CircleMarker)&&(this._uneditedLayerProps[e]={latlng:L.LatLngUtil.cloneLatLng(t.getLatLng())}))},_getTooltipText:function(){return{text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext}},_updateTooltip:function(){this._tooltip.updateContent(this._getTooltipText())},_revertLayer:function(t){var e=L.Util.stamp(t);t.edited=!1,this._uneditedLayerProps.hasOwnProperty(e)&&(t instanceof L.Polyline||t instanceof L.Polygon||t instanceof L.Rectangle?t.setLatLngs(this._uneditedLayerProps[e].latlngs):t instanceof L.Circle?(t.setLatLng(this._uneditedLayerProps[e].latlng),t.setRadius(this._uneditedLayerProps[e].radius)):(t instanceof L.Marker||t instanceof L.CircleMarker)&&t.setLatLng(this._uneditedLayerProps[e].latlng),t.fire("revert-edited",{layer:t}))},_enableLayerEdit:function(t){var e,i,o=t.layer||t.target||t;this._backupLayer(o),this.options.poly&&(i=L.Util.extend({},this.options.poly),o.options.poly=i),this.options.selectedPathOptions&&(e=L.Util.extend({},this.options.selectedPathOptions),e.maintainColor&&(e.color=o.options.color,e.fillColor=o.options.fillColor),o.options.original=L.extend({},o.options),o.options.editing=e),o instanceof L.Marker?(o.editing&&o.editing.enable(),o.dragging.enable(),o.on("dragend",this._onMarkerDragEnd).on("touchmove",this._onTouchMove,this).on("MSPointerMove",this._onTouchMove,this).on("touchend",this._onMarkerDragEnd,this).on("MSPointerUp",this._onMarkerDragEnd,this)):o.editing.enable()},_disableLayerEdit:function(t){var e=t.layer||t.target||t;e.edited=!1,e.editing&&e.editing.disable(),delete e.options.editing,
delete e.options.original,this._selectedPathOptions&&(e instanceof L.Marker?this._toggleMarkerHighlight(e):(e.setStyle(e.options.previousOptions),delete e.options.previousOptions)),e instanceof L.Marker?(e.dragging.disable(),e.off("dragend",this._onMarkerDragEnd,this).off("touchmove",this._onTouchMove,this).off("MSPointerMove",this._onTouchMove,this).off("touchend",this._onMarkerDragEnd,this).off("MSPointerUp",this._onMarkerDragEnd,this)):e.editing.disable()},_onMouseMove:function(t){this._tooltip.updatePosition(t.latlng)},_onMarkerDragEnd:function(t){var e=t.target;e.edited=!0,this._map.fire(L.Draw.Event.EDITMOVE,{layer:e})},_onTouchMove:function(t){var e=t.originalEvent.changedTouches[0],i=this._map.mouseEventToLayerPoint(e),o=this._map.layerPointToLatLng(i);t.target.setLatLng(o)},_hasAvailableLayers:function(){return 0!==this._featureGroup.getLayers().length}}),L.EditToolbar.Delete=L.Handler.extend({statics:{TYPE:"remove"},initialize:function(t,e){if(L.Handler.prototype.initialize.call(this,t),L.Util.setOptions(this,e),this._deletableLayers=this.options.featureGroup,!(this._deletableLayers instanceof L.FeatureGroup))throw new Error("options.featureGroup must be a L.FeatureGroup");this.type=L.EditToolbar.Delete.TYPE;var i=L.version.split(".");1===parseInt(i[0],10)&&parseInt(i[1],10)>=2?L.EditToolbar.Delete.include(L.Evented.prototype):L.EditToolbar.Delete.include(L.Mixin.Events)},enable:function(){!this._enabled&&this._hasAvailableLayers()&&(this.fire("enabled",{handler:this.type}),this._map.fire(L.Draw.Event.DELETESTART,{handler:this.type}),L.Handler.prototype.enable.call(this),this._deletableLayers.on("layeradd",this._enableLayerDelete,this).on("layerremove",this._disableLayerDelete,this))},disable:function(){this._enabled&&(this._deletableLayers.off("layeradd",this._enableLayerDelete,this).off("layerremove",this._disableLayerDelete,this),L.Handler.prototype.disable.call(this),this._map.fire(L.Draw.Event.DELETESTOP,{handler:this.type}),this.fire("disabled",{handler:this.type}))},addHooks:function(){var t=this._map;t&&(t.getContainer().focus(),this._deletableLayers.eachLayer(this._enableLayerDelete,this),this._deletedLayers=new L.LayerGroup,this._tooltip=new L.Draw.Tooltip(this._map),this._tooltip.updateContent({text:L.drawLocal.edit.handlers.remove.tooltip.text}),this._map.on("mousemove",this._onMouseMove,this))},removeHooks:function(){this._map&&(this._deletableLayers.eachLayer(this._disableLayerDelete,this),this._deletedLayers=null,this._tooltip.dispose(),this._tooltip=null,this._map.off("mousemove",this._onMouseMove,this))},revertLayers:function(){this._deletedLayers.eachLayer(function(t){this._deletableLayers.addLayer(t),t.fire("revert-deleted",{layer:t})},this)},save:function(){this._map.fire(L.Draw.Event.DELETED,{layers:this._deletedLayers})},removeAllLayers:function(){this._deletableLayers.eachLayer(function(t){this._removeLayer({layer:t})},this),this.save()},_enableLayerDelete:function(t){(t.layer||t.target||t).on("click",this._removeLayer,this)},_disableLayerDelete:function(t){var e=t.layer||t.target||t;e.off("click",this._removeLayer,this),this._deletedLayers.removeLayer(e)},_removeLayer:function(t){var e=t.layer||t.target||t;this._deletableLayers.removeLayer(e),this._deletedLayers.addLayer(e),e.fire("deleted")},_onMouseMove:function(t){this._tooltip.updatePosition(t.latlng)},_hasAvailableLayers:function(){return 0!==this._deletableLayers.getLayers().length}})}(window,document);
L.interpolatePosition = function(p1, p2, duration, t) {
    var k = t/duration;
    k = (k > 0) ? k : 0;
    k = (k > 1) ? 1 : k;
    return L.latLng(p1.lat + k * (p2.lat - p1.lat),
        p1.lng + k * (p2.lng - p1.lng));
};

L.Marker.MovingMarker = L.Marker.extend({

    //state constants
    statics: {
        notStartedState: 0,
        endedState: 1,
        pausedState: 2,
        runState: 3
    },

    options: {
        autostart: false,
        loop: false,
    },

    initialize: function (latlngs, durations, options) {
        L.Marker.prototype.initialize.call(this, latlngs[0], options);

        this._latlngs = latlngs.map(function(e, index) {
            return L.latLng(e);
        });

        if (durations instanceof Array) {
            this._durations = durations;
        } else {
            this._durations = this._createDurations(this._latlngs, durations);
        }

        this._currentDuration = 0;
        this._currentIndex = 0;

        this._state = L.Marker.MovingMarker.notStartedState;
        this._startTime = 0;
        this._startTimeStamp = 0;  // timestamp given by requestAnimFrame
        this._pauseStartTime = 0;
        this._animId = 0;
        this._animRequested = false;
        this._currentLine = [];
        this._stations = {};
    },

    isRunning: function() {
        return this._state === L.Marker.MovingMarker.runState;
    },

    isEnded: function() {
        return this._state === L.Marker.MovingMarker.endedState;
    },

    isStarted: function() {
        return this._state !== L.Marker.MovingMarker.notStartedState;
    },

    isPaused: function() {
        return this._state === L.Marker.MovingMarker.pausedState;
    },

    start: function() {
        if (this.isRunning()) {
            return;
        }

        if (this.isPaused()) {
            this.resume();
        } else {
            this._loadLine(0);
            this._startAnimation();
            this.fire('start');
        }
    },

    resume: function() {
        if (! this.isPaused()) {
            return;
        }
        // update the current line
        this._currentLine[0] = this.getLatLng();
        this._currentDuration -= (this._pauseStartTime - this._startTime);
        this._startAnimation();
    },

    pause: function() {
        if (! this.isRunning()) {
            return;
        }

        this._pauseStartTime = Date.now();
        this._state = L.Marker.MovingMarker.pausedState;
        this._stopAnimation();
        this._updatePosition();
    },

    stop: function(elapsedTime) {
        if (this.isEnded()) {
            return;
        }

        this._stopAnimation();

        if (typeof(elapsedTime) === 'undefined') {
            // user call
            elapsedTime = 0;
            this._updatePosition();
        }

        this._state = L.Marker.MovingMarker.endedState;
        this.fire('end', {elapsedTime: elapsedTime});
    },

    addLatLng: function(latlng, duration) {
        this._latlngs.push(L.latLng(latlng));
        this._durations.push(duration);
    },

    moveTo: function(latlng, duration) {
        this._stopAnimation();
        this._latlngs = [this.getLatLng(), L.latLng(latlng)];
        this._durations = [duration];
        this._state = L.Marker.MovingMarker.notStartedState;
        this.start();
        this.options.loop = false;
    },

    addStation: function(pointIndex, duration) {
        if (pointIndex > this._latlngs.length - 2 || pointIndex < 1) {
            return;
        }
        this._stations[pointIndex] = duration;
    },

    onAdd: function (map) {
        L.Marker.prototype.onAdd.call(this, map);

        if (this.options.autostart && (! this.isStarted())) {
            this.start();
            return;
        }

        if (this.isRunning()) {
            this._resumeAnimation();
        }
    },

    onRemove: function(map) {
        L.Marker.prototype.onRemove.call(this, map);
        this._stopAnimation();
    },

    _createDurations: function (latlngs, duration) {
        var lastIndex = latlngs.length - 1;
        var distances = [];
        var totalDistance = 0;
        var distance = 0;

        // compute array of distances between points
        for (var i = 0; i < lastIndex; i++) {
            distance = latlngs[i + 1].distanceTo(latlngs[i]);
            distances.push(distance);
            totalDistance += distance;
        }

        var ratioDuration = duration / totalDistance;

        var durations = [];
        for (i = 0; i < distances.length; i++) {
            durations.push(distances[i] * ratioDuration);
        }

        return durations;
    },

    _startAnimation: function() {
        this._state = L.Marker.MovingMarker.runState;
        this._animId = L.Util.requestAnimFrame(function(timestamp) {
            this._startTime = Date.now();
            this._startTimeStamp = timestamp;
            this._animate(timestamp);
        }, this, true);
        this._animRequested = true;
    },

    _resumeAnimation: function() {
        if (! this._animRequested) {
            this._animRequested = true;
            this._animId = L.Util.requestAnimFrame(function(timestamp) {
                this._animate(timestamp);
            }, this, true);
        }
    },

    _stopAnimation: function() {
        if (this._animRequested) {
            L.Util.cancelAnimFrame(this._animId);
            this._animRequested = false;
        }
    },

    _updatePosition: function() {
        var elapsedTime = Date.now() - this._startTime;
        this._animate(this._startTimeStamp + elapsedTime, true);
    },

    _loadLine: function(index) {
        this._currentIndex = index;
        this._currentDuration = this._durations[index];
        this._currentLine = this._latlngs.slice(index, index + 2);
    },

    /**
     * Load the line where the marker is
     * @param  {Number} timestamp
     * @return {Number} elapsed time on the current line or null if
     * we reached the end or marker is at a station
     */
    _updateLine: function(timestamp) {
        // time elapsed since the last latlng
        var elapsedTime = timestamp - this._startTimeStamp;

        // not enough time to update the line
        if (elapsedTime <= this._currentDuration) {
            return elapsedTime;
        }

        var lineIndex = this._currentIndex;
        var lineDuration = this._currentDuration;
        var stationDuration;

        while (elapsedTime > lineDuration) {
            // substract time of the current line
            elapsedTime -= lineDuration;
            stationDuration = this._stations[lineIndex + 1];

            // test if there is a station at the end of the line
            if (stationDuration !== undefined) {
                if (elapsedTime < stationDuration) {
                    this.setLatLng(this._latlngs[lineIndex + 1]);
                    return null;
                }
                elapsedTime -= stationDuration;
            }

            lineIndex++;

            // test if we have reached the end of the polyline
            if (lineIndex >= this._latlngs.length - 1) {

                if (this.options.loop) {
                    lineIndex = 0;
                    this.fire('loop', {elapsedTime: elapsedTime});
                } else {
                    // place the marker at the end, else it would be at
                    // the last position
                    this.setLatLng(this._latlngs[this._latlngs.length - 1]);
                    this.stop(elapsedTime);
                    return null;
                }
            }
            lineDuration = this._durations[lineIndex];
        }

        this._loadLine(lineIndex);
        this._startTimeStamp = timestamp - elapsedTime;
        this._startTime = Date.now() - elapsedTime;
        return elapsedTime;
    },

    _animate: function(timestamp, noRequestAnim) {
        this._animRequested = false;

        // find the next line and compute the new elapsedTime
        var elapsedTime = this._updateLine(timestamp);

        if (this.isEnded()) {
            // no need to animate
            return;
        }

        if (elapsedTime != null) {
             // compute the position
            var p = L.interpolatePosition(this._currentLine[0],
                this._currentLine[1],
                this._currentDuration,
                elapsedTime);
            this.setLatLng(p);
        }

        if (! noRequestAnim) {
            this._animId = L.Util.requestAnimFrame(this._animate, this, false);
            this._animRequested = true;
        }
    }
});

L.Marker.movingMarker = function (latlngs, duration, options) {
    return new L.Marker.MovingMarker(latlngs, duration, options);
};

/*
*  Simple navigation control that allows back and forward navigation through map's view history
*/

(function() {
  L.Control.NavBar = L.Control.extend({
    options: {
      position: 'topleft',
      //center:,
      //zoom :,
      //bbox:, //Alternative to center/zoom for home button, takes precedence if included
      forwardTitle: '??????',
      backTitle: '??????',
      homeTitle: '????????????????????????'
    },

    onAdd: function(map) {

      // Set options
      if (!this.options.center) {
        this.options.center = map.getCenter();
      }
      if (!this.options.zoom) {
        this.options.zoom = map.getZoom();
      }
      var options = this.options;

      // Create toolbar
      var controlName = 'leaflet-control-navbar',
      container = L.DomUtil.create('div', controlName + ' leaflet-bar');

      // Add toolbar buttons
      this._homeButton = this._createButton(options.homeTitle, controlName + '-home', container, this._goHome);
      this._fwdButton = this._createButton(options.forwardTitle, controlName + '-fwd', container, this._goFwd);
      this._backButton = this._createButton(options.backTitle, controlName + '-back', container, this._goBack);

      // Initialize view history and index
      this._viewHistory = [{center: this.options.center, zoom: this.options.zoom}];
      this._curIndx = 0;
      this._updateDisabled();
      map.once('moveend', function() {this._map.on('moveend', this._updateHistory, this);}, this);
      // Set intial view to home
      map.setView(options.center, options.zoom);

      return container;
    },

    onRemove: function(map) {
      map.off('moveend', this._updateHistory, this);
    },

    _goHome: function() {
      if (this.options.bbox){
        try {
          this._map.fitBounds(this.options.bbox);
        } catch(err){
          this._map.setView(this.options.center, this.options.zoom); //Use default if invalid bbox input.
        }
      }
      this._map.setView(this.options.center, this.options.zoom);
    },

    _goBack: function() {
      if (this._curIndx !== 0) {
        this._map.off('moveend', this._updateHistory, this);
        this._map.once('moveend', function() {this._map.on('moveend', this._updateHistory, this);}, this);
        this._curIndx--;
        this._updateDisabled();
        var view = this._viewHistory[this._curIndx];
        this._map.setView(view.center, view.zoom);
      }
    },

    _goFwd: function() {
      if (this._curIndx != this._viewHistory.length - 1) {
        this._map.off('moveend', this._updateHistory, this);
        this._map.once('moveend', function() {this._map.on('moveend', this._updateHistory, this);}, this);
        this._curIndx++;
        this._updateDisabled();
        var view = this._viewHistory[this._curIndx];
        this._map.setView(view.center, view.zoom);
      }
    },

    _createButton: function(title, className, container, fn) {
      // Modified from Leaflet zoom control

      var link = L.DomUtil.create('a', className, container);
      link.href = '#';
      link.title = title;

      L.DomEvent
      .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
      .on(link, 'click', L.DomEvent.stop)
      .on(link, 'click', fn, this)
      .on(link, 'click', this._refocusOnMap, this);

      return link;
    },

    _updateHistory: function() {
      var newView = {center: this._map.getCenter(), zoom: this._map.getZoom()};
      var insertIndx = this._curIndx + 1;
      this._viewHistory.splice(insertIndx, this._viewHistory.length - insertIndx, newView);
      this._curIndx++;
      // Update disabled state of toolbar buttons
      this._updateDisabled();
    },

    _setFwdEnabled: function(enabled) {
      var leafletDisabled = 'leaflet-disabled';
      var fwdDisabled = 'leaflet-control-navbar-fwd-disabled';
      if (enabled === true) {
        L.DomUtil.removeClass(this._fwdButton, fwdDisabled);
        L.DomUtil.removeClass(this._fwdButton, leafletDisabled);
      }else {
        L.DomUtil.addClass(this._fwdButton, fwdDisabled);
        L.DomUtil.addClass(this._fwdButton, leafletDisabled);
      }
    },

    _setBackEnabled: function(enabled) {
      var leafletDisabled = 'leaflet-disabled';
      var backDisabled = 'leaflet-control-navbar-back-disabled';
      if (enabled === true) {
        L.DomUtil.removeClass(this._backButton, backDisabled);
        L.DomUtil.removeClass(this._backButton, leafletDisabled);
      }else {
        L.DomUtil.addClass(this._backButton, backDisabled);
        L.DomUtil.addClass(this._backButton, leafletDisabled);
      }
    },

    _updateDisabled: function() {
      if (this._curIndx == (this._viewHistory.length - 1)) {
        this._setFwdEnabled(false);
      }else {
        this._setFwdEnabled(true);
      }

      if (this._curIndx <= 0) {
        this._setBackEnabled(false);
      }else {
        this._setBackEnabled(true);
      }
    }

  });

  L.control.navbar = function(options) {
    return new L.Control.NavBar(options);
  };

})();

!function (e) { function t(n) { if (r[n]) return r[n].exports; var o = r[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports } var r = {}; t.m = e, t.c = r, t.d = function (e, r, n) { t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n }) }, t.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(r, "a", r), r }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/dist/", t(t.s = 28) }([function (e, t, r) { function n(e) { return null == e ? void 0 === e ? u : a : l && l in Object(e) ? i(e) : s(e) } var o = r(4), i = r(38), s = r(39), a = "[object Null]", u = "[object Undefined]", l = o ? o.toStringTag : void 0; e.exports = n }, function (e, t) { function r(e) { return null != e && "object" == typeof e } e.exports = r }, function (e, t) { function r(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) } e.exports = r }, function (e, t, r) { "use strict"; function n(e, t, r) { if (r = r || {}, !h(r)) throw new Error("options is invalid"); var n = r.bbox, o = r.id; if (void 0 === e) throw new Error("geometry is required"); if (t && t.constructor !== Object) throw new Error("properties must be an Object"); n && d(n), o && m(o); var i = { type: "Feature" }; return o && (i.id = o), n && (i.bbox = n), i.properties = t || {}, i.geometry = e, i } function o(e, t, r) { if (!e) throw new Error("coordinates is required"); if (!Array.isArray(e)) throw new Error("coordinates must be an Array"); if (e.length < 2) throw new Error("coordinates must be at least 2 numbers long"); if (!p(e[0]) || !p(e[1])) throw new Error("coordinates must contain numbers"); return n({ type: "Point", coordinates: e }, t, r) } function i(e, t, r) { if (!e) throw new Error("coordinates is required"); for (var o = 0; o < e.length; o++) { var i = e[o]; if (i.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions."); for (var s = 0; s < i[i.length - 1].length; s++) { if (0 === o && 0 === s && !p(i[0][0]) || !p(i[0][1])) throw new Error("coordinates must contain numbers"); if (i[i.length - 1][s] !== i[0][s]) throw new Error("First and last Position are not equivalent.") } } return n({ type: "Polygon", coordinates: e }, t, r) } function s(e, t, r) { if (!e) throw new Error("coordinates is required"); if (e.length < 2) throw new Error("coordinates must be an array of two or more positions"); if (!p(e[0][1]) || !p(e[0][1])) throw new Error("coordinates must contain numbers"); return n({ type: "LineString", coordinates: e }, t, r) } function a(e, t, r) { if (!e) throw new Error("coordinates is required"); return n({ type: "MultiLineString", coordinates: e }, t, r) } function u(e, t, r) { if (!e) throw new Error("coordinates is required"); return n({ type: "MultiPoint", coordinates: e }, t, r) } function l(e, t, r) { if (!e) throw new Error("coordinates is required"); return n({ type: "MultiPolygon", coordinates: e }, t, r) } function c(e, t) { if (void 0 === e || null === e) throw new Error("radians is required"); if (t && "string" != typeof t) throw new Error("units must be a string"); var r = y[t || "kilometers"]; if (!r) throw new Error(t + " units is invalid"); return e * r } function f(e) { if (null === e || void 0 === e) throw new Error("degrees is required"); return e % 360 * Math.PI / 180 } function p(e) { return !isNaN(e) && null !== e && !Array.isArray(e) } function h(e) { return !!e && e.constructor === Object } function d(e) { if (!e) throw new Error("bbox is required"); if (!Array.isArray(e)) throw new Error("bbox must be an Array"); if (4 !== e.length && 6 !== e.length) throw new Error("bbox must be an Array of 4 or 6 numbers"); e.forEach(function (e) { if (!p(e)) throw new Error("bbox must only contain numbers") }) } function m(e) { if (!e) throw new Error("id is required"); if (-1 === ["string", "number"].indexOf(typeof e)) throw new Error("id must be a number or a string") } r.d(t, "b", function () { return n }), r.d(t, "f", function () { return o }), r.d(t, "e", function () { return s }), r.d(t, "g", function () { return c }), r.d(t, "a", function () { return f }), r.d(t, "c", function () { return p }), r.d(t, "d", function () { return h }); var y = { meters: 6371008.8, metres: 6371008.8, millimeters: 6371008800, millimetres: 6371008800, centimeters: 637100880, centimetres: 637100880, kilometers: 6371.0088, kilometres: 6371.0088, miles: 3958.761333810546, nauticalmiles: 6371008.8 / 1852, inches: 6371008.8 * 39.37, yards: 6371008.8 / 1.0936, feet: 20902260.511392, radians: 1, degrees: 6371008.8 / 111325 } }, function (e, t, r) { var n = r(5), o = n.Symbol; e.exports = o }, function (e, t, r) { var n = r(11), o = "object" == typeof self && self && self.Object === Object && self, i = n || o || Function("return this")(); e.exports = i }, function (e, t) { function r(e, t) { return e === t || e !== e && t !== t } e.exports = r }, function (e, t, r) { function n(e) { return null != e && i(e.length) && !o(e) } var o = r(10), i = r(16); e.exports = n }, function (e, t, r) { function n(e, t, r) { "__proto__" == t && o ? o(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : e[t] = r } var o = r(9); e.exports = n }, function (e, t, r) { var n = r(35), o = function () { try { var e = n(Object, "defineProperty"); return e({}, "", {}), e } catch (e) { } }(); e.exports = o }, function (e, t, r) { function n(e) { if (!i(e)) return !1; var t = o(e); return t == a || t == u || t == s || t == l } var o = r(0), i = r(2), s = "[object AsyncFunction]", a = "[object Function]", u = "[object GeneratorFunction]", l = "[object Proxy]"; e.exports = n }, function (e, t, r) { (function (t) { var r = "object" == typeof t && t && t.Object === Object && t; e.exports = r }).call(t, r(37)) }, function (e, t, r) { function n(e, t) { return s(i(e, t, o), e + "") } var o = r(13), i = r(45), s = r(46); e.exports = n }, function (e, t) { function r(e) { return e } e.exports = r }, function (e, t) { function r(e, t, r) { switch (r.length) { case 0: return e.call(t); case 1: return e.call(t, r[0]); case 2: return e.call(t, r[0], r[1]); case 3: return e.call(t, r[0], r[1], r[2]) } return e.apply(t, r) } e.exports = r }, function (e, t, r) { function n(e, t, r) { if (!a(r)) return !1; var n = typeof t; return !!("number" == n ? i(r) && s(t, r.length) : "string" == n && t in r) && o(r[t], e) } var o = r(6), i = r(7), s = r(17), a = r(2); e.exports = n }, function (e, t) { function r(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n } var n = 9007199254740991; e.exports = r }, function (e, t) { function r(e, t) { var r = typeof e; return !!(t = null == t ? n : t) && ("number" == r || "symbol" != r && o.test(e)) && e > -1 && e % 1 == 0 && e < t } var n = 9007199254740991, o = /^(?:0|[1-9]\d*)$/; e.exports = r }, function (e, t, r) { function n(e, t) { var r = s(e), n = !r && i(e), c = !r && !n && a(e), p = !r && !n && !c && l(e), h = r || n || c || p, d = h ? o(e.length, String) : [], m = d.length; for (var y in e) !t && !f.call(e, y) || h && ("length" == y || c && ("offset" == y || "parent" == y) || p && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || u(y, m)) || d.push(y); return d } var o = r(51), i = r(52), s = r(19), a = r(54), u = r(17), l = r(56), c = Object.prototype, f = c.hasOwnProperty; e.exports = n }, function (e, t) { var r = Array.isArray; e.exports = r }, function (e, t) { e.exports = function (e) { return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function () { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function () { return e.i } }), e.webpackPolyfill = 1), e } }, function (e, t) { function r(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || n) } var n = Object.prototype; e.exports = r }, function (e, t, r) { function n(e) { if (!i(e)) return !1; var t = o(e); return t == u || t == a || "string" == typeof e.message && "string" == typeof e.name && !s(e) } var o = r(0), i = r(1), s = r(63), a = "[object DOMException]", u = "[object Error]"; e.exports = n }, function (e, t) { function r(e, t) { return function (r) { return e(t(r)) } } e.exports = r }, function (e, t) { function r(e, t) { for (var r = -1, n = null == e ? 0 : e.length, o = Array(n) ; ++r < n;) o[r] = t(e[r], r, e); return o } e.exports = r }, function (e, t) { var r = /<%=([\s\S]+?)%>/g; e.exports = r }, function (e, t, r) { function n(e) { return null == e ? "" : o(e) } var o = r(75); e.exports = n }, function (e, t, r) { "use strict"; function n(e, t, r) { if (null !== e) for (var o, i, s, a, u, l, c, f, p = 0, h = 0, d = e.type, m = "FeatureCollection" === d, y = "Feature" === d, v = m ? e.features.length : 1, g = 0; g < v; g++) { c = m ? e.features[g].geometry : y ? e.geometry : e, f = !!c && "GeometryCollection" === c.type, u = f ? c.geometries.length : 1; for (var b = 0; b < u; b++) { var _ = 0, j = 0; if (null !== (a = f ? c.geometries[b] : c)) { l = a.coordinates; var x = a.type; switch (p = !r || "Polygon" !== x && "MultiPolygon" !== x ? 0 : 1, x) { case null: break; case "Point": if (!1 === t(l, h, g, _, j)) return !1; h++, _++; break; case "LineString": case "MultiPoint": for (o = 0; o < l.length; o++) { if (!1 === t(l[o], h, g, _, j)) return !1; h++, "MultiPoint" === x && _++ } "LineString" === x && _++; break; case "Polygon": case "MultiLineString": for (o = 0; o < l.length; o++) { for (i = 0; i < l[o].length - p; i++) { if (!1 === t(l[o][i], h, g, _, j)) return !1; h++ } "MultiLineString" === x && _++, "Polygon" === x && j++ } "Polygon" === x && _++; break; case "MultiPolygon": for (o = 0; o < l.length; o++) { for ("MultiPolygon" === x && (j = 0), i = 0; i < l[o].length; i++) { for (s = 0; s < l[o][i].length - p; s++) { if (!1 === t(l[o][i][s], h, g, _, j)) return !1; h++ } j++ } _++ } break; case "GeometryCollection": for (o = 0; o < a.geometries.length; o++) if (!1 === n(a.geometries[o], t, r)) return !1; break; default: throw new Error("Unknown Geometry Type") } } } } } function o(e, t) { var r, n, o, i, s, a, u, l, c, f, p = 0, h = "FeatureCollection" === e.type, d = "Feature" === e.type, m = h ? e.features.length : 1; for (r = 0; r < m; r++) { for (a = h ? e.features[r].geometry : d ? e.geometry : e, l = h ? e.features[r].properties : d ? e.properties : {}, c = h ? e.features[r].bbox : d ? e.bbox : void 0, f = h ? e.features[r].id : d ? e.id : void 0, u = !!a && "GeometryCollection" === a.type, s = u ? a.geometries.length : 1, o = 0; o < s; o++) if (null !== (i = u ? a.geometries[o] : a)) switch (i.type) { case "Point": case "LineString": case "MultiPoint": case "Polygon": case "MultiLineString": case "MultiPolygon": if (!1 === t(i, p, l, c, f)) return !1; break; case "GeometryCollection": for (n = 0; n < i.geometries.length; n++) if (!1 === t(i.geometries[n], p, l, c, f)) return !1; break; default: throw new Error("Unknown Geometry Type") } else if (!1 === t(null, p, l, c, f)) return !1; p++ } } function i(e, t, r) { var n = r; return o(e, function (e, o, i, s, a) { n = 0 === o && void 0 === r ? e : t(n, e, o, i, s, a) }), n } function s(e, t) { o(e, function (e, r, n, o, i) { var s = null === e ? null : e.type; switch (s) { case null: case "Point": case "LineString": case "Polygon": if (!1 === t(Object(l.b)(e, n, { bbox: o, id: i }), r, 0)) return !1; return } var a; switch (s) { case "MultiPoint": a = "Point"; break; case "MultiLineString": a = "LineString"; break; case "MultiPolygon": a = "Polygon" } for (var u = 0; u < e.coordinates.length; u++) { var c = e.coordinates[u], f = { type: a, coordinates: c }; if (!1 === t(Object(l.b)(f, n), r, u)) return !1 } }) } function a(e, t) { s(e, function (e, r, o) { var i = 0; if (e.geometry) { var s = e.geometry.type; if ("Point" !== s && "MultiPoint" !== s) { var a; return !1 !== n(e, function (n, s, u, c, f) { if (void 0 === a) return void (a = n); var p = Object(l.e)([a, n], e.properties); if (!1 === t(p, r, o, f, i)) return !1; i++, a = n }) && void 0 } } }) } function u(e, t, r) { var n = r, o = !1; return a(e, function (e, i, s, a, u) { n = !1 === o && void 0 === r ? e : t(n, e, i, s, a, u), o = !0 }), n } r.d(t, "a", function () { return i }), r.d(t, "b", function () { return u }); var l = r(3) }, function (e, t, r) { e.exports = r(29) }, function (e, t, r) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } r(30); var o = r(31), i = n(o), s = r(79), a = n(s), u = r(80), l = n(u), c = r(85), f = function (e) { if (e && e.__esModule) return e; var t = {}; if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]); return t.default = e, t }(c), p = r(86), h = n(p), d = r(87), m = r(88), y = { imports: { numberFormat: d.numberFormat }, interpolate: /{{([\s\S]+?)}}/g }, v = (0, i.default)(m.controlTemplate, y), g = (0, i.default)(m.resultsTemplate, y), b = (0, i.default)(m.pointPopupTemplate, y), _ = (0, i.default)(m.linePopupTemplate, y), j = (0, i.default)(m.areaPopupTemplate, y); L.Control.Measure = L.Control.extend({ _className: "leaflet-control-measure", options: { units: {}, position: "topright", primaryLengthUnit: "feet", secondaryLengthUnit: "miles", primaryAreaUnit: "acres", activeColor: "#ABE67E", completedColor: "#C8F2BE", captureZIndex: 1e4, popupOptions: { className: "leaflet-measure-resultpopup", autoPanPadding: [10, 10] } }, initialize: function (e) { L.setOptions(this, e); var t = this.options, r = t.activeColor, n = t.completedColor; this._symbols = new h.default({ activeColor: r, completedColor: n }), this.options.units = L.extend({}, a.default, this.options.units) }, onAdd: function (e) { return this._map = e, this._latlngs = [], this._initLayout(), e.on("click", this._collapse, this), this._layer = L.layerGroup().addTo(e), this._container }, onRemove: function (e) { e.off("click", this._collapse, this), e.removeLayer(this._layer) }, _initLayout: function () { var e = this._className, t = this._container = L.DomUtil.create("div", e + " leaflet-bar"); t.innerHTML = v({ model: { className: e } }), t.setAttribute("aria-haspopup", !0), L.DomEvent.disableClickPropagation(t), L.DomEvent.disableScrollPropagation(t); var r = this.$toggle = (0, c.selectOne)(".js-toggle", t); this.$interaction = (0, c.selectOne)(".js-interaction", t); var n = (0, c.selectOne)(".js-start", t), o = (0, c.selectOne)(".js-cancel", t), i = (0, c.selectOne)(".js-finish", t); this.$startPrompt = (0, c.selectOne)(".js-startprompt", t), this.$measuringPrompt = (0, c.selectOne)(".js-measuringprompt", t), this.$startHelp = (0, c.selectOne)(".js-starthelp", t), this.$results = (0, c.selectOne)(".js-results", t), this.$measureTasks = (0, c.selectOne)(".js-measuretasks", t), this._collapse(), this._updateMeasureNotStarted(), L.Browser.android || (L.DomEvent.on(t, "mouseenter", this._expand, this), L.DomEvent.on(t, "mouseleave", this._collapse, this)), L.DomEvent.on(r, "click", L.DomEvent.stop), L.Browser.touch ? L.DomEvent.on(r, "click", this._expand, this) : L.DomEvent.on(r, "focus", this._expand, this), L.DomEvent.on(n, "click", L.DomEvent.stop), L.DomEvent.on(n, "click", this._startMeasure, this), L.DomEvent.on(o, "click", L.DomEvent.stop), L.DomEvent.on(o, "click", this._finishMeasure, this), L.DomEvent.on(i, "click", L.DomEvent.stop), L.DomEvent.on(i, "click", this._handleMeasureDoubleClick, this) }, _expand: function () { f.hide(this.$toggle), f.show(this.$interaction) }, _collapse: function () { this._locked || (f.hide(this.$interaction), f.show(this.$toggle)) }, _updateMeasureNotStarted: function () { f.hide(this.$startHelp), f.hide(this.$results), f.hide(this.$measureTasks), f.hide(this.$measuringPrompt), f.show(this.$startPrompt) }, _updateMeasureStartedNoPoints: function () { f.hide(this.$results), f.show(this.$startHelp), f.show(this.$measureTasks), f.hide(this.$startPrompt), f.show(this.$measuringPrompt) }, _updateMeasureStartedWithPoints: function () { f.hide(this.$startHelp), f.show(this.$results), f.show(this.$measureTasks), f.hide(this.$startPrompt), f.show(this.$measuringPrompt) }, _startMeasure: function () { this._locked = !0, this._measureVertexes = L.featureGroup().addTo(this._layer), this._captureMarker = L.marker(this._map.getCenter(), { clickable: !0, zIndexOffset: this.options.captureZIndex, opacity: 0 }).addTo(this._layer), this._setCaptureMarkerIcon(), this._captureMarker.on("mouseout", this._handleMapMouseOut, this).on("dblclick", this._handleMeasureDoubleClick, this).on("click", this._handleMeasureClick, this), this._map.on("mousemove", this._handleMeasureMove, this).on("mouseout", this._handleMapMouseOut, this).on("move", this._centerCaptureMarker, this).on("resize", this._setCaptureMarkerIcon, this), L.DomEvent.on(this._container, "mouseenter", this._handleMapMouseOut, this), this._updateMeasureStartedNoPoints(), this._map.fire("measurestart", null, !1) }, _finishMeasure: function () { var e = L.extend({}, this._resultsModel, { points: this._latlngs }); this._locked = !1, L.DomEvent.off(this._container, "mouseover", this._handleMapMouseOut, this), this._clearMeasure(), this._captureMarker.off("mouseout", this._handleMapMouseOut, this).off("dblclick", this._handleMeasureDoubleClick, this).off("click", this._handleMeasureClick, this), this._map.off("mousemove", this._handleMeasureMove, this).off("mouseout", this._handleMapMouseOut, this).off("move", this._centerCaptureMarker, this).off("resize", this._setCaptureMarkerIcon, this), this._layer.removeLayer(this._measureVertexes).removeLayer(this._captureMarker), this._measureVertexes = null, this._updateMeasureNotStarted(), this._collapse(), this._map.fire("measurefinish", e, !1) }, _clearMeasure: function () { this._latlngs = [], this._resultsModel = null, this._measureVertexes.clearLayers(), this._measureDrag && this._layer.removeLayer(this._measureDrag), this._measureArea && this._layer.removeLayer(this._measureArea), this._measureBoundary && this._layer.removeLayer(this._measureBoundary), this._measureDrag = null, this._measureArea = null, this._measureBoundary = null }, _centerCaptureMarker: function () { this._captureMarker.setLatLng(this._map.getCenter()) }, _setCaptureMarkerIcon: function () { this._captureMarker.setIcon(L.divIcon({ iconSize: this._map.getSize().multiplyBy(2) })) }, _getMeasurementDisplayStrings: function (e) { function t(e, t, o, i, s) { if (t && n[t]) { var a = r(e, n[t], i, s); if (o && n[o]) { a = a + " (" + r(e, n[o], i, s) + ")" } return a } return r(e, null, i, s) } function r(e, t, r, n) { var o = { acres: "Acres", feet: "Feet", kilometers: "Kilometers", hectares: "Hectares", meters: "Meters", miles: "Miles", sqfeet: "Sq Feet", sqmeters: "Sq Meters", sqmiles: "Sq Miles" }, i = L.extend({ factor: 1, decimals: 0 }, t); return [(0, d.numberFormat)(e * i.factor, i.decimals, r || ".", n || ","), o[i.display] || i.display].join(" ") } var n = this.options.units; return { lengthDisplay: t(e.length, this.options.primaryLengthUnit, this.options.secondaryLengthUnit, this.options.decPoint, this.options.thousandsSep), areaDisplay: t(e.area, this.options.primaryAreaUnit, this.options.secondaryAreaUnit, this.options.decPoint, this.options.thousandsSep) } }, _updateResults: function () { var e = (0, l.default)(this._latlngs), t = this._resultsModel = L.extend({}, e, this._getMeasurementDisplayStrings(e), { pointCount: this._latlngs.length }); this.$results.innerHTML = g({ model: t }) }, _handleMeasureMove: function (e) { this._measureDrag ? this._measureDrag.setLatLng(e.latlng) : this._measureDrag = L.circleMarker(e.latlng, this._symbols.getSymbol("measureDrag")).addTo(this._layer), this._measureDrag.bringToFront() }, _handleMeasureDoubleClick: function () { var e = this._latlngs, t = void 0, r = void 0; if (this._finishMeasure(), e.length) { e.length > 2 && e.push(e[0]); var n = (0, l.default)(e); 1 === e.length ? (t = L.circleMarker(e[0], this._symbols.getSymbol("resultPoint")), r = b({ model: n })) : 2 === e.length ? (t = L.polyline(e, this._symbols.getSymbol("resultLine")), r = _({ model: L.extend({}, n, this._getMeasurementDisplayStrings(n)) })) : (t = L.polygon(e, this._symbols.getSymbol("resultArea")), r = j({ model: L.extend({}, n, this._getMeasurementDisplayStrings(n)) })); var o = L.DomUtil.create("div", ""); o.innerHTML = r; var i = (0, c.selectOne)(".js-zoomto", o); i && (L.DomEvent.on(i, "click", L.DomEvent.stop), L.DomEvent.on(i, "click", function () { t.getBounds ? this._map.fitBounds(t.getBounds(), { padding: [20, 20], maxZoom: 17 }) : t.getLatLng && this._map.panTo(t.getLatLng()) }, this)); var s = (0, c.selectOne)(".js-deletemarkup", o); s && (L.DomEvent.on(s, "click", L.DomEvent.stop), L.DomEvent.on(s, "click", function () { this._layer.removeLayer(t) }, this)), t.addTo(this._layer), t.bindPopup(o, this.options.popupOptions), t.getBounds ? t.openPopup(t.getBounds().getCenter()) : t.getLatLng && t.openPopup(t.getLatLng()) } }, _handleMeasureClick: function (e) { var t = this._map.mouseEventToLatLng(e.originalEvent), r = this._latlngs[this._latlngs.length - 1], n = this._symbols.getSymbol("measureVertex"); r && t.equals(r) || (this._latlngs.push(t), this._addMeasureArea(this._latlngs), this._addMeasureBoundary(this._latlngs), this._measureVertexes.eachLayer(function (e) { e.setStyle(n), e._path.setAttribute("class", n.className) }), this._addNewVertex(t), this._measureBoundary && this._measureBoundary.bringToFront(), this._measureVertexes.bringToFront()), this._updateResults(), this._updateMeasureStartedWithPoints() }, _handleMapMouseOut: function () { this._measureDrag && (this._layer.removeLayer(this._measureDrag), this._measureDrag = null) }, _addNewVertex: function (e) { L.circleMarker(e, this._symbols.getSymbol("measureVertexActive")).addTo(this._measureVertexes) }, _addMeasureArea: function (e) { if (e.length < 3) return void (this._measureArea && (this._layer.removeLayer(this._measureArea), this._measureArea = null)); this._measureArea ? this._measureArea.setLatLngs(e) : this._measureArea = L.polygon(e, this._symbols.getSymbol("measureArea")).addTo(this._layer) }, _addMeasureBoundary: function (e) { if (e.length < 2) return void (this._measureBoundary && (this._layer.removeLayer(this._measureBoundary), this._measureBoundary = null)); this._measureBoundary ? this._measureBoundary.setLatLngs(e) : this._measureBoundary = L.polyline(e, this._symbols.getSymbol("measureBoundary")).addTo(this._layer) } }), L.Map.mergeOptions({ measureControl: !1 }), L.Map.addInitHook(function () { this.options.measureControl && (this.measureControl = (new L.Control.Measure).addTo(this)) }), L.control.measure = function (e) { return new L.Control.Measure(e) } }, function (e, t) { }, function (e, t, r) { function n(e, t, r) { var n = h.imports._.templateSettings || h; r && c(e, t, r) && (t = void 0), e = d(e), t = o({}, t, n, a); var j, x, M = o({}, t.imports, n.imports, a), w = f(M), L = s(M, w), O = 0, P = t.interpolate || b, k = "__p += '", C = RegExp((t.escape || b).source + "|" + P.source + "|" + (P === p ? g : b).source + "|" + (t.evaluate || b).source + "|$", "g"), E = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : ""; e.replace(C, function (t, r, n, o, i, s) { return n || (n = o), k += e.slice(O, s).replace(_, u), r && (j = !0, k += "' +\n__e(" + r + ") +\n'"), i && (x = !0, k += "';\n" + i + ";\n__p += '"), n && (k += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), O = s + t.length, t }), k += "';\n"; var S = t.variable; S || (k = "with (obj) {\n" + k + "\n}\n"), k = (x ? k.replace(m, "") : k).replace(y, "$1").replace(v, "$1;"), k = "function(" + (S || "obj") + ") {\n" + (S ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (j ? ", __e = _.escape" : "") + (x ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + k + "return __p\n}"; var A = i(function () { return Function(w, E + "return " + k).apply(void 0, L) }); if (A.source = k, l(A)) throw A; return A } var o = r(32), i = r(62), s = r(65), a = r(66), u = r(67), l = r(22), c = r(15), f = r(68), p = r(25), h = r(71), d = r(26), m = /\b__p \+= '';/g, y = /\b(__p \+=) '' \+/g, v = /(__e\(.*?\)|\b__t\)) \+\n'';/g, g = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, b = /($^)/, _ = /['\n\r\u2028\u2029\\]/g; e.exports = n }, function (e, t, r) { var n = r(33), o = r(44), i = r(50), s = o(function (e, t, r, o) { n(t, i(t), e, o) }); e.exports = s }, function (e, t, r) { function n(e, t, r, n) { var s = !r; r || (r = {}); for (var a = -1, u = t.length; ++a < u;) { var l = t[a], c = n ? n(r[l], e[l], l, r, e) : void 0; void 0 === c && (c = e[l]), s ? i(r, l, c) : o(r, l, c) } return r } var o = r(34), i = r(8); e.exports = n }, function (e, t, r) { function n(e, t, r) { var n = e[t]; a.call(e, t) && i(n, r) && (void 0 !== r || t in e) || o(e, t, r) } var o = r(8), i = r(6), s = Object.prototype, a = s.hasOwnProperty; e.exports = n }, function (e, t, r) { function n(e, t) { var r = i(e, t); return o(r) ? r : void 0 } var o = r(36), i = r(43); e.exports = n }, function (e, t, r) { function n(e) { return !(!s(e) || i(e)) && (o(e) ? d : l).test(a(e)) } var o = r(10), i = r(40), s = r(2), a = r(42), u = /[\\^$.*+?()[\]{}|]/g, l = /^\[object .+?Constructor\]$/, c = Function.prototype, f = Object.prototype, p = c.toString, h = f.hasOwnProperty, d = RegExp("^" + p.call(h).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"); e.exports = n }, function (e, t) { var r; r = function () { return this }(); try { r = r || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (r = window) } e.exports = r }, function (e, t, r) { function n(e) { var t = s.call(e, u), r = e[u]; try { e[u] = void 0; var n = !0 } catch (e) { } var o = a.call(e); return n && (t ? e[u] = r : delete e[u]), o } var o = r(4), i = Object.prototype, s = i.hasOwnProperty, a = i.toString, u = o ? o.toStringTag : void 0; e.exports = n }, function (e, t) { function r(e) { return o.call(e) } var n = Object.prototype, o = n.toString; e.exports = r }, function (e, t, r) { function n(e) { return !!i && i in e } var o = r(41), i = function () { var e = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || ""); return e ? "Symbol(src)_1." + e : "" }(); e.exports = n }, function (e, t, r) { var n = r(5), o = n["__core-js_shared__"]; e.exports = o }, function (e, t) { function r(e) { if (null != e) { try { return o.call(e) } catch (e) { } try { return e + "" } catch (e) { } } return "" } var n = Function.prototype, o = n.toString; e.exports = r }, function (e, t) { function r(e, t) { return null == e ? void 0 : e[t] } e.exports = r }, function (e, t, r) { function n(e) { return o(function (t, r) { var n = -1, o = r.length, s = o > 1 ? r[o - 1] : void 0, a = o > 2 ? r[2] : void 0; for (s = e.length > 3 && "function" == typeof s ? (o--, s) : void 0, a && i(r[0], r[1], a) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t) ; ++n < o;) { var u = r[n]; u && e(t, u, n, s) } return t }) } var o = r(12), i = r(15); e.exports = n }, function (e, t, r) { function n(e, t, r) { return t = i(void 0 === t ? e.length - 1 : t, 0), function () { for (var n = arguments, s = -1, a = i(n.length - t, 0), u = Array(a) ; ++s < a;) u[s] = n[t + s]; s = -1; for (var l = Array(t + 1) ; ++s < t;) l[s] = n[s]; return l[t] = r(u), o(e, this, l) } } var o = r(14), i = Math.max; e.exports = n }, function (e, t, r) { var n = r(47), o = r(49), i = o(n); e.exports = i }, function (e, t, r) { var n = r(48), o = r(9), i = r(13), s = o ? function (e, t) { return o(e, "toString", { configurable: !0, enumerable: !1, value: n(t), writable: !0 }) } : i; e.exports = s }, function (e, t) { function r(e) { return function () { return e } } e.exports = r }, function (e, t) { function r(e) { var t = 0, r = 0; return function () { var s = i(), a = o - (s - r); if (r = s, a > 0) { if (++t >= n) return arguments[0] } else t = 0; return e.apply(void 0, arguments) } } var n = 800, o = 16, i = Date.now; e.exports = r }, function (e, t, r) { function n(e) { return s(e) ? o(e, !0) : i(e) } var o = r(18), i = r(60), s = r(7); e.exports = n }, function (e, t) { function r(e, t) { for (var r = -1, n = Array(e) ; ++r < e;) n[r] = t(r); return n } e.exports = r }, function (e, t, r) { var n = r(53), o = r(1), i = Object.prototype, s = i.hasOwnProperty, a = i.propertyIsEnumerable, u = n(function () { return arguments }()) ? n : function (e) { return o(e) && s.call(e, "callee") && !a.call(e, "callee") }; e.exports = u }, function (e, t, r) { function n(e) { return i(e) && o(e) == s } var o = r(0), i = r(1), s = "[object Arguments]"; e.exports = n }, function (e, t, r) { (function (e) { var n = r(5), o = r(55), i = "object" == typeof t && t && !t.nodeType && t, s = i && "object" == typeof e && e && !e.nodeType && e, a = s && s.exports === i, u = a ? n.Buffer : void 0, l = u ? u.isBuffer : void 0, c = l || o; e.exports = c }).call(t, r(20)(e)) }, function (e, t) { function r() { return !1 } e.exports = r }, function (e, t, r) { var n = r(57), o = r(58), i = r(59), s = i && i.isTypedArray, a = s ? o(s) : n; e.exports = a }, function (e, t, r) { function n(e) { return s(e) && i(e.length) && !!a[o(e)] } var o = r(0), i = r(16), s = r(1), a = {}; a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = n }, function (e, t) { function r(e) { return function (t) { return e(t) } } e.exports = r }, function (e, t, r) { (function (e) { var n = r(11), o = "object" == typeof t && t && !t.nodeType && t, i = o && "object" == typeof e && e && !e.nodeType && e, s = i && i.exports === o, a = s && n.process, u = function () { try { return a && a.binding && a.binding("util") } catch (e) { } }(); e.exports = u }).call(t, r(20)(e)) }, function (e, t, r) { function n(e) { if (!o(e)) return s(e); var t = i(e), r = []; for (var n in e) ("constructor" != n || !t && u.call(e, n)) && r.push(n); return r } var o = r(2), i = r(21), s = r(61), a = Object.prototype, u = a.hasOwnProperty; e.exports = n }, function (e, t) { function r(e) { var t = []; if (null != e) for (var r in Object(e)) t.push(r); return t } e.exports = r }, function (e, t, r) { var n = r(14), o = r(12), i = r(22), s = o(function (e, t) { try { return n(e, void 0, t) } catch (e) { return i(e) ? e : new Error(e) } }); e.exports = s }, function (e, t, r) { function n(e) { if (!s(e) || o(e) != a) return !1; var t = i(e); if (null === t) return !0; var r = f.call(t, "constructor") && t.constructor; return "function" == typeof r && r instanceof r && c.call(r) == p } var o = r(0), i = r(64), s = r(1), a = "[object Object]", u = Function.prototype, l = Object.prototype, c = u.toString, f = l.hasOwnProperty, p = c.call(Object); e.exports = n }, function (e, t, r) { var n = r(23), o = n(Object.getPrototypeOf, Object); e.exports = o }, function (e, t, r) { function n(e, t) { return o(t, function (t) { return e[t] }) } var o = r(24); e.exports = n }, function (e, t, r) { function n(e, t, r, n) { return void 0 === e || o(e, i[r]) && !s.call(n, r) ? t : e } var o = r(6), i = Object.prototype, s = i.hasOwnProperty; e.exports = n }, function (e, t) { function r(e) { return "\\" + n[e] } var n = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }; e.exports = r }, function (e, t, r) { function n(e) { return s(e) ? o(e) : i(e) } var o = r(18), i = r(69), s = r(7); e.exports = n }, function (e, t, r) { function n(e) { if (!o(e)) return i(e); var t = []; for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r); return t } var o = r(21), i = r(70), s = Object.prototype, a = s.hasOwnProperty; e.exports = n }, function (e, t, r) { var n = r(23), o = n(Object.keys, Object); e.exports = o }, function (e, t, r) { var n = r(72), o = r(77), i = r(78), s = r(25), a = { escape: o, evaluate: i, interpolate: s, variable: "", imports: { _: { escape: n } } }; e.exports = a }, function (e, t, r) { function n(e) { return e = i(e), e && a.test(e) ? e.replace(s, o) : e } var o = r(73), i = r(26), s = /[&<>"']/g, a = RegExp(s.source); e.exports = n }, function (e, t, r) { var n = r(74), o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, i = n(o); e.exports = i }, function (e, t) { function r(e) { return function (t) { return null == e ? void 0 : e[t] } } e.exports = r }, function (e, t, r) { function n(e) { if ("string" == typeof e) return e; if (s(e)) return i(e, n) + ""; if (a(e)) return c ? c.call(e) : ""; var t = e + ""; return "0" == t && 1 / e == -u ? "-0" : t } var o = r(4), i = r(24), s = r(19), a = r(76), u = 1 / 0, l = o ? o.prototype : void 0, c = l ? l.toString : void 0; e.exports = n }, function (e, t, r) { function n(e) { return "symbol" == typeof e || i(e) && o(e) == s } var o = r(0), i = r(1), s = "[object Symbol]"; e.exports = n }, function (e, t) { var r = /<%-([\s\S]+?)%>/g; e.exports = r }, function (e, t) { var r = /<%([\s\S]+?)%>/g; e.exports = r }, function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { acres: { factor: 24711e-8, display: "acres", decimals: 2 }, feet: { factor: 3.2808, display: "feet", decimals: 0 }, kilometers: { factor: .001, display: "kilometers", decimals: 2 }, hectares: { factor: 1e-4, display: "hectares", decimals: 2 }, meters: { factor: 1, display: "meters", decimals: 0 }, miles: { factor: 3.2808 / 5280, display: "miles", decimals: 2 }, sqfeet: { factor: 10.7639, display: "sqfeet", decimals: 0 }, sqmeters: { factor: 1, display: "sqmeters", decimals: 0 }, sqmiles: { factor: 3.86102e-7, display: "sqmiles", decimals: 2 } } }, function (e, t, r) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } function o(e) { return e < 10 ? "0" + e.toString() : e.toString() } function i(e, t, r) { var n = Math.abs(e), i = Math.floor(n), s = Math.floor(60 * (n - i)), a = Math.round(3600 * (n - i - s / 60) * 100) / 100, u = n === e ? t : r; return o(i) + "&deg; " + o(s) + "' " + o(a) + '" ' + u } function s(e) { var t = e[e.length - 1], r = e.map(function (e) { return [e.lat, e.lng] }), n = L.polyline(r), o = L.polygon(r), s = 1e3 * (0, u.default)(n.toGeoJSON(), { units: "kilometers" }), a = (0, c.default)(o.toGeoJSON()); return { lastCoord: { dd: { x: t.lng, y: t.lat }, dms: { x: i(t.lng, "E", "W"), y: i(t.lat, "N", "S") } }, length: s, area: a } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s; var a = r(81), u = n(a), l = r(84), c = n(l) }, function (e, t, r) { "use strict"; function n(e, t) { if (t = t || {}, !Object(s.d)(t)) throw new Error("options is invalid"); if (!e) throw new Error("geojson is required"); return Object(i.b)(e, function (e, r) { var n = r.geometry.coordinates; return e + Object(o.a)(n[0], n[1], t) }, 0) } Object.defineProperty(t, "__esModule", { value: !0 }); var o = r(82), i = r(27), s = r(3); t.default = n }, function (e, t, r) { "use strict"; function n(e, t, r) { if (r = r || {}, !Object(i.d)(r)) throw new Error("options is invalid"); var n = r.units, s = Object(o.a)(e), a = Object(o.a)(t), u = Object(i.a)(a[1] - s[1]), l = Object(i.a)(a[0] - s[0]), c = Object(i.a)(s[1]), f = Object(i.a)(a[1]), p = Math.pow(Math.sin(u / 2), 2) + Math.pow(Math.sin(l / 2), 2) * Math.cos(c) * Math.cos(f); return Object(i.g)(2 * Math.atan2(Math.sqrt(p), Math.sqrt(1 - p)), n) } var o = r(83), i = r(3); t.a = n }, function (e, t, r) { "use strict"; function n(e) { if (!e) throw new Error("coord is required"); if ("Feature" === e.type && null !== e.geometry && "Point" === e.geometry.type) return e.geometry.coordinates; if ("Point" === e.type) return e.coordinates; if (Array.isArray(e) && e.length >= 2 && void 0 === e[0].length && void 0 === e[1].length) return e; throw new Error("coord must be GeoJSON Point or an Array of numbers") } r.d(t, "a", function () { return n }); r(3) }, function (e, t, r) { "use strict"; function n(e) { return Object(u.a)(e, function (e, t) { return e + o(t) }, 0) } function o(e) { var t, r = 0; switch (e.type) { case "Polygon": return i(e.coordinates); case "MultiPolygon": for (t = 0; t < e.coordinates.length; t++) r += i(e.coordinates[t]); return r; case "Point": case "MultiPoint": case "LineString": case "MultiLineString": return 0; case "GeometryCollection": for (t = 0; t < e.geometries.length; t++) r += o(e.geometries[t]); return r } } function i(e) { var t = 0; if (e && e.length > 0) { t += Math.abs(s(e[0])); for (var r = 1; r < e.length; r++) t -= Math.abs(s(e[r])) } return t } function s(e) { var t, r, n, o, i, s, u, c = 0, f = e.length; if (f > 2) { for (u = 0; u < f; u++) u === f - 2 ? (o = f - 2, i = f - 1, s = 0) : u === f - 1 ? (o = f - 1, i = 0, s = 1) : (o = u, i = u + 1, s = u + 2), t = e[o], r = e[i], n = e[s], c += (a(n[0]) - a(t[0])) * Math.sin(a(r[1])); c = c * l * l / 2 } return c } function a(e) { return e * Math.PI / 180 } Object.defineProperty(t, "__esModule", { value: !0 }); var u = r(27), l = 6378137; t.default = n }, function (e, t, r) { "use strict"; function n(e, t) { return t || (t = document), t.querySelector(e) } function o(e, t) { return t || (t = document), Array.prototype.slice.call(t.querySelectorAll(e)) } function i(e) { if (e) return e.setAttribute("style", "display:none;"), e } function s(e) { if (e) return e.removeAttribute("style"), e } Object.defineProperty(t, "__esModule", { value: !0 }), t.selectOne = n, t.selectAll = o, t.hide = i, t.show = s }, function (e, t, r) { "use strict"; function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function () { function e(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, r, n) { return r && e(t.prototype, r), n && e(t, n), t } }(), i = { activeColor: "#ABE67E", completedColor: "#C8F2BE" }, s = function () { function e(t) { n(this, e), this._options = L.extend({}, i, this._options, t) } return o(e, [{ key: "getSymbol", value: function (e) { return { measureDrag: { clickable: !1, radius: 4, color: this._options.activeColor, weight: 2, opacity: .7, fillColor: this._options.activeColor, fillOpacity: .5, className: "layer-measuredrag" }, measureArea: { clickable: !1, stroke: !1, fillColor: this._options.activeColor, fillOpacity: .2, className: "layer-measurearea" }, measureBoundary: { clickable: !1, color: this._options.activeColor, weight: 2, opacity: .9, fill: !1, className: "layer-measureboundary" }, measureVertex: { clickable: !1, radius: 4, color: this._options.activeColor, weight: 2, opacity: 1, fillColor: this._options.activeColor, fillOpacity: .7, className: "layer-measurevertex" }, measureVertexActive: { clickable: !1, radius: 4, color: this._options.activeColor, weight: 2, opacity: 1, fillColor: this._options.activeColor, fillOpacity: 1, className: "layer-measurevertex active" }, resultArea: { clickable: !0, color: this._options.completedColor, weight: 2, opacity: .9, fillColor: this._options.completedColor, fillOpacity: .2, className: "layer-measure-resultarea" }, resultLine: { clickable: !0, color: this._options.completedColor, weight: 3, opacity: .9, fill: !1, className: "layer-measure-resultline" }, resultPoint: { clickable: !0, radius: 4, color: this._options.completedColor, weight: 2, opacity: 1, fillColor: this._options.completedColor, fillOpacity: .7, className: "layer-measure-resultpoint" } }[e] } }]), e }(); t.default = s }, function (e, t, r) { "use strict"; function n(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ",", o = e < 0 ? "-" : "", i = Math.abs(+e || 0), s = parseInt(i.toFixed(t), 10) + "", a = s.length > 3 ? s.length % 3 : 0; return [o, a ? s.substr(0, a) + n : "", s.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + n), t ? "" + r + Math.abs(i - s).toFixed(t).slice(2) : ""].join("") } Object.defineProperty(t, "__esModule", { value: !0 }), t.numberFormat = n }, function (e, t, r) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var o = r(89); Object.defineProperty(t, "controlTemplate", { enumerable: !0, get: function () { return n(o).default } }); var i = r(90); Object.defineProperty(t, "resultsTemplate", { enumerable: !0, get: function () { return n(i).default } }); var s = r(91); Object.defineProperty(t, "pointPopupTemplate", { enumerable: !0, get: function () { return n(s).default } }); var a = r(92); Object.defineProperty(t, "linePopupTemplate", { enumerable: !0, get: function () { return n(a).default } }); var u = r(93); Object.defineProperty(t, "areaPopupTemplate", { enumerable: !0, get: function () { return n(u).default } }) }, function (e, t, r) { e.exports = '<a class="{{ model.className }}-toggle js-toggle" href=# title="Measure distances and areas">Measure</a> <div class="{{ model.className }}-interaction js-interaction"> <div class="js-startprompt startprompt"> <h3>Measure distances and areas</h3> <ul class=tasks> <a href=# class="js-start start">Create a new measurement</a> </ul> </div> <div class=js-measuringprompt> <h3>Measure distances and areas</h3> <p class=js-starthelp>Start creating a measurement by adding points to the map</p> <div class="js-results results"></div> <ul class="js-measuretasks tasks"> <li><a href=# class="js-cancel cancel">Cancel</a></li> <li><a href=# class="js-finish finish">Finish measurement</a></li> </ul> </div> </div> ' }, function (e, t, r) { e.exports = '<div class=group> <p class="lastpoint heading">Last point</p> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> </div> <% if (model.pointCount > 1) { %> <div class=group> <p><span class=heading>Path distance</span> {{ model.lengthDisplay }}</p> </div> <% } %> <% if (model.pointCount > 2) { %> <div class=group> <p><span class=heading>Area</span> {{ model.areaDisplay }}</p> </div> <% } %> ' }, function (e, t, r) { e.exports = '<h3>Point location</h3> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Center on this location</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Delete</a></li> </ul> ' }, function (e, t, r) { e.exports = '<h3>Linear measurement</h3> <p>{{ model.lengthDisplay }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Center on this line</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Delete</a></li> </ul> ' }, function (e, t, r) { e.exports = '<h3>Area measurement</h3> <p>{{ model.areaDisplay }}</p> <p>{{ model.lengthDisplay }} Perimeter</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Center on this area</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Delete</a></li> </ul> ' }]);
var resizeSvg =
  '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 24 24"><path d="M13,21H21V13H19V17.59L6.41,5H11V3H3V11H5V6.41L17.59,19H13V21Z" /></svg>';
var grabberSvg =
  '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 24 24"><path d="M13,11H18L16.5,9.5L17.92,8.08L21.84,12L17.92,15.92L16.5,14.5L18,13H13V18L14.5,16.5L15.92,17.92L12,21.84L8.08,17.92L9.5,16.5L11,18V13H6L7.5,14.5L6.08,15.92L2.16,12L6.08,8.08L7.5,9.5L6,11H11V6L9.5,7.5L8.08,6.08L12,2.16L15.92,6.08L14.5,7.5L13,6V11Z" /></svg>';
var lockSvg =
  '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 24 24"><path d="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z" /></svg>';
var unlockSvg =
  '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 24 24"><path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>';
var closeSvg =
  '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 24 24"><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>';

L.Control.Dialog = L.Control.extend({
  options: {
    size: [300, 300],
    minSize: [100, 100],
    maxSize: [6000, 6000],
    anchor: [250, 250],
    position: "topleft",
    initOpen: true,
  },

  initialize: function (options) {
    this.options = JSON.parse(JSON.stringify(this.options));
    L.setOptions(this, options);

    this._attributions = {};
  },

  onAdd: function (map) {
    this._initLayout();
    this._map = map;

    this.update();

    if (!this.options.initOpen) {
      this.close();
    }

    return this._container;
  },

  open: function () {
    if (!this._map) {
      return;
    }
    this._container.style.visibility = "";

    this._map.fire("dialog:opened", this);

    return this;
  },

  close: function () {
    this._container.style.visibility = "hidden";

    this._map.fire("dialog:closed", this);
    return this;
  },

  destroy: function () {
    if (!this._map) {
      return this;
    }

    this._map.fire("dialog:destroyed", this);
    this.remove();

    if (this.onRemove) {
      this.onRemove(this._map);
    }

    return this;
  },

  setLocation: function (location) {
    location = location || [250, 250];

    this.options.anchor[0] = 0;
    this.options.anchor[1] = 0;
    this._oldMousePos.x = 0;
    this._oldMousePos.y = 0;

    this._move(location[1], location[0]);

    return this;
  },

  setSize: function (size) {
    size = size || [300, 300];

    this.options.size[0] = 0;
    this.options.size[1] = 0;
    this._oldMousePos.x = 0;
    this._oldMousePos.y = 0;

    this._resize(size[0], size[1]);

    return this;
  },

  lock: function () {
    this._resizerNode.style.visibility = "hidden";
    this._closeNode.style.visibility = "hidden";
    //this._toolNode.style.visibility = "hidden";
    this.myToolNode.removeChild(this.grabberIcon);
    this.myToolNode.removeChild(this.lockIcon);
    this.myToolNode.appendChild(this.unlockIcon);
    /*     this.grabberIcon.style.visibility = "hidden";
    this.lockIcon.style.visibility = "hidden"; 
    this.unlockIcon.style.visibility = "";*/

    this._map.fire("dialog:locked", this);
    return this;
  },

  unlock: function () {
    this._resizerNode.style.visibility = "";
    //this._toolNode.style.visibility = "";
    this._closeNode.style.visibility = "";
    this.myToolNode.appendChild(this.grabberIcon);
    this.myToolNode.appendChild(this.lockIcon);
    this.myToolNode.removeChild(this.unlockIcon);
    /*     this.grabberIcon.style.visibility = "";
    this.lockIcon.style.visibility = "";
    this.unlockIcon.style.visibility = "hidden"; */

    this._map.fire("dialog:unlocked", this);
    return this;
  },

  freeze: function () {
    this._resizerNode.style.visibility = "hidden";
    //this._toolNode.style.visibility = "hidden";

    this._map.fire("dialog:frozen", this);
    return this;
  },

  unfreeze: function () {
    this._resizerNode.style.visibility = "";
    //this._toolNode.style.visibility = "";

    this._map.fire("dialog:unfrozen", this);
    return this;
  },

  hideClose: function () {
    this._closeNode.style.visibility = "hidden";

    this._map.fire("dialog:closehidden", this);
    return this;
  },

  showClose: function () {
    this._closeNode.style.visibility = "";

    this._map.fire("dialog:closeshown", this);
    return this;
  },

  hideResize: function () {
    this._resizerNode.style.visibility = "hidden";

    this._map.fire("dialog:resizehidden", this);
    return this;
  },

  showResize: function () {
    this._resizerNode.style.visibility = "";

    this._map.fire("dialog:resizeshown", this);
    return this;
  },

  setContent: function (content) {
    this._content = content;
    this.update();
    return this;
  },

  getContent: function () {
    return this._content;
  },

  getElement: function () {
    return this._container;
  },

  update: function () {
    if (!this._map) {
      return;
    }

    this._container.style.visibility = "hidden";

    this._updateContent();
    this._updateLayout();

    this._container.style.visibility = "";
    this._map.fire("dialog:updated", this);
  },

  _initLayout: function () {
    var className = "leaflet-control-dialog",
      container = (this._container = L.DomUtil.create("div", className));

    container.style.width = this.options.size[0] + "px";
    container.style.height = this.options.size[1] + "px";

    container.style.top = this.options.anchor[0] + "px";
    container.style.left = this.options.anchor[1] + "px";

    var stop = L.DomEvent.stopPropagation;
    L.DomEvent.on(container, "click", stop)
      .on(container, "mousedown", stop)
      .on(container, "touchstart", stop)
      .on(container, "dblclick", stop)
      .on(container, "mousewheel", stop)
      .on(container, "contextmenu", stop)
      .on(container, "MozMousePixelScroll", stop);

    var innerContainer = (this._innerContainer = L.DomUtil.create(
      "div",
      className + "-inner"
    ));

    this.myToolNode = this._toolNode = L.DomUtil.create(
      "div",
      className + "-grabber"
    );

    this.grabberIcon = L.DomUtil.create("i");
    this.grabberIcon.innerHTML = grabberSvg;
    L.DomEvent.on(this.grabberIcon, "mousedown", this._handleMoveStart, this);

    this.lockIcon = L.DomUtil.create("i");
    this.lockIcon.innerHTML = lockSvg;
    L.DomEvent.on(this.lockIcon, "click", this.lock, this);

    this.unlockIcon = L.DomUtil.create("i");
    this.unlockIcon.innerHTML = unlockSvg;
    L.DomEvent.on(this.unlockIcon, "click", this.unlock, this);

    this.myToolNode.appendChild(this.grabberIcon);
    this.myToolNode.appendChild(this.lockIcon);
    //this.myToolNode.appendChild(this.unlockIcon);

    //this.unlockIcon.style.visibility = "hidden";

    var closeNode = (this._closeNode = L.DomUtil.create(
      "div",
      className + "-close"
    ));
    var closeIcon = L.DomUtil.create("i");
    closeIcon.innerHTML = closeSvg;
    closeNode.appendChild(closeIcon);
    L.DomEvent.on(closeNode, "click", this._handleClose, this);

    var resizerNode = (this._resizerNode = L.DomUtil.create(
      "div",
      className + "-resizer"
    ));
    var resizeIcon = L.DomUtil.create("i");
    resizeIcon.innerHTML = resizeSvg;
    resizerNode.appendChild(resizeIcon);

    L.DomEvent.on(resizerNode, "mousedown", this._handleResizeStart, this);

    var contentNode = (this._contentNode = L.DomUtil.create(
      "div",
      className + "-contents"
    ));

    container.appendChild(innerContainer);

    innerContainer.appendChild(contentNode);
    innerContainer.appendChild(this.myToolNode);
    innerContainer.appendChild(closeNode);
    innerContainer.appendChild(resizerNode);

    this._oldMousePos = { x: 0, y: 0 };
  },

  _handleClose: function () {
    this.close();
  },

  _handleResizeStart: function (e) {
    this._oldMousePos.x = e.clientX;
    this._oldMousePos.y = e.clientY;

    L.DomEvent.on(this._map, "mousemove", this._handleMouseMove, this);
    L.DomEvent.on(this._map, "mouseup", this._handleMouseUp, this);

    this._map.fire("dialog:resizestart", this);
    this._resizing = true;
  },

  _handleMoveStart: function (e) {
    this._oldMousePos.x = e.clientX;
    this._oldMousePos.y = e.clientY;

    L.DomEvent.on(this._map, "mousemove", this._handleMouseMove, this);
    L.DomEvent.on(this._map, "mouseup", this._handleMouseUp, this);

    this._map.fire("dialog:movestart", this);
    this._moving = true;
  },

  _handleMouseMove: function (e) {
    var diffX = e.originalEvent.clientX - this._oldMousePos.x,
      diffY = e.originalEvent.clientY - this._oldMousePos.y;

    // this helps prevent accidental highlighting on drag:
    if (e.originalEvent.stopPropagation) {
      e.originalEvent.stopPropagation();
    }
    if (e.originalEvent.preventDefault) {
      e.originalEvent.preventDefault();
    }

    if (this._resizing) {
      this._resize(diffX, diffY);
    }

    if (this._moving) {
      this._move(diffX, diffY);
    }
  },

  _handleMouseUp: function () {
    L.DomEvent.off(this._map, "mousemove", this._handleMouseMove, this);
    L.DomEvent.off(this._map, "mouseup", this._handleMouseUp, this);

    if (this._resizing) {
      this._resizing = false;
      this._map.fire("dialog:resizeend", this);
    }

    if (this._moving) {
      this._moving = false;
      this._map.fire("dialog:moveend", this);
    }
  },

  _move: function (diffX, diffY) {
    var newY = this.options.anchor[0] + diffY;
    var newX = this.options.anchor[1] + diffX;

    this.options.anchor[0] = newY;
    this.options.anchor[1] = newX;

    this._container.style.top = this.options.anchor[0] + "px";
    this._container.style.left = this.options.anchor[1] + "px";

    this._map.fire("dialog:moving", this);

    this._oldMousePos.y += diffY;
    this._oldMousePos.x += diffX;
  },

  _resize: function (diffX, diffY) {
    var newX = this.options.size[0] + diffX;
    var newY = this.options.size[1] + diffY;

    if (newX <= this.options.maxSize[0] && newX >= this.options.minSize[0]) {
      this.options.size[0] = newX;
      this._container.style.width = this.options.size[0] + "px";
      this._oldMousePos.x += diffX;
    }

    if (newY <= this.options.maxSize[1] && newY >= this.options.minSize[1]) {
      this.options.size[1] = newY;
      this._container.style.height = this.options.size[1] + "px";
      this._oldMousePos.y += diffY;
    }

    this._map.fire("dialog:resizing", this);
  },

  _updateContent: function () {
    if (!this._content) {
      return;
    }

    var node = this._contentNode;
    var content =
      typeof this._content === "function" ? this._content(this) : this._content;

    if (typeof content === "string") {
      node.innerHTML = content;
    } else {
      while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
      }
      node.appendChild(content);
    }
  },

  _updateLayout: function () {
    this._container.style.width = this.options.size[0] + "px";
    this._container.style.height = this.options.size[1] + "px";

    this._container.style.top = this.options.anchor[0] + "px";
    this._container.style.left = this.options.anchor[1] + "px";
  },
});

L.control.dialog = function (options) {
  return new L.Control.Dialog(options);
};

(function () {
  L.Handler.MarkerPin = L.Handler.extend({
    options: {
      distance: 20,
      vertices: true,
    },

    initialize: function (map, marker, options) {
      L.Handler.prototype.initialize.call(this, map);
      L.Util.setOptions(this, options || {});
    },

    enable: function (marker) {
      if (marker && this._map.options.pin) {
        this._observeMarker(marker);
        this._currentMarker = marker;
      }
    },

    disable: function () {
      if (this._map.options.pin) {
        this._unobserveMarker();
      }
    },

    _observeMarker: function (marker) {
      marker.on("move", this._updateLatLng, this);
    },

    _unobserveMarker: function () {
      this._currentMarker.off("move", this._updateLatLng, this);
    },

    _updateLatLng: function (e) {
      var marker = e.target;

      marker.setOpacity(1);
      if (!marker._shadow) {
        L.DomUtil.addClass(
          marker._icon,
          "leaflet-marker-icon leaflet-div-icon leaflet-editing-icon leaflet-pin-marker"
        );
      }
      var latlng = marker.getLatLng();

      // Search closest point to pin and if isn't null replace original latlng
      this._closest = this._findClosestMarker(
        this._map,
        this._map._guideList,
        latlng,
        this.options.distance,
        this.options.vertices
      );
      this._closestCircle = this._map.options.pinCircle
        ? this._findClosestCircle(
            this._map,
            this._map._circleGuideList,
            e.latlng
          )
        : null;

      if (this._closestCircle != null) {
        marker._latlng = this._closestCircle;
        marker.update();
      } else if (this._closest != null) {
        marker._latlng = this._closest.latlng;
        marker.update();
      }
    },

    _findClosestMarker: function (map, guideList, latlng, distance, vertices) {
      return L.GeometryUtil.closestLayerSnap(
        map,
        guideList,
        latlng,
        distance,
        vertices
      );
    },

    _findClosestCircle: function (map, guideList, latlng) {
      var closest = L.GeometryUtil.closestLayerSnap(map, guideList, latlng);

      if (closest !== null) {
        var x = closest.layer.getLatLng().lng - latlng.lng,
          y = closest.layer.getLatLng().lat - latlng.lat,
          tg = Math.abs(y) / Math.abs(x),
          alpha = Math.atan(tg),
          radius = closest.layer.editing._shape._radius;

        var distanceStart = this._map.project(closest.latlng);
        var distanceFinish = this._map.project(latlng);
        var x2 = Math.abs(distanceFinish.x - distanceStart.x);
        var y2 = Math.abs(distanceFinish.y - distanceStart.y);
        var distance = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

        if (
          radius + this.options.distance > distance &&
          radius - this.options.distance < distance
        ) {
          var a = radius * Math.cos(alpha),
            b = radius * Math.sin(alpha),
            point = this._map.project(closest.layer.getLatLng());

          if (x >= 0 && y >= 0) {
            return this._map.unproject([point.x - a, point.y + b]);
          } else if (x >= 0 && y < 0) {
            return this._map.unproject([point.x - a, point.y - b]);
          } else if (x < 0 && y < 0) {
            return this._map.unproject([point.x + a, point.y - b]);
          } else if (x < 0 && y >= 0) {
            return this._map.unproject([point.x + a, point.y + b]);
          }
        } else if (this.options.distance > distance) {
          return closest.layer.getLatLng();
        } else {
          return null;
        }
      }
      return null;
    },
  });

  // Additional map methods

  L.Map.Pin = {
    _pin_initialize: function () {
      this._guideList = [];
      this._circleGuideList = [];
      for (var i = 0; i < this.options.guideLayers.length; i++) {
        this.addGuideLayer(this.options.guideLayers[i]);
      }

      if (this.options.pinControl) {
        this.addControl(new L.Control.Pin());
      }
    },

    togglePin: function () {
      this.options.pin = !this.options.pin;
    },

    removeGuideLayer: function (layer) {
      for (var i = 0; i < this._guideList.length; i++) {
        if (this._guideList[i]._leaflet_id == layer._leaflet_id) {
          this._guideList.splice(i, 1);
        }
      }
    },

    _parse: function (layer) {
      var that = this;
      if (layer instanceof L.FeatureGroup) {
        layer.on("layeradd", function (e) {
          that._parse(e.layer);
        });
        layer.on("layerremove", function (e) {
          that.removeGuideLayer(e.layer);
        });
        for (var feature in layer._layers) {
          if (layer._layers.hasOwnProperty(feature)) {
            this._parse(layer._layers[feature]);
          }
        }
      } else {
        if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
          var polygon = new L.polygon(
            L.LatLngUtil.cloneLatLngs(layer.getLatLngs())
          );
          polygon._leaflet_id = layer._leaflet_id;
          this._guideList.push(polygon);
        } else if (layer instanceof L.Polyline) {
          var polyline = new L.polyline(
            L.LatLngUtil.cloneLatLngs(layer.getLatLngs())
          );
          polyline._leaflet_id = layer._leaflet_id;
          this._guideList.push(polyline);
        } else if (layer instanceof L.Circle) {
          var circle = new L.circle(
            L.LatLngUtil.cloneLatLng(
              layer.getLatLng(),
              JSON.parse(JSON.stringify(layer.getRadius()))
            )
          );
          circle._mRadius = JSON.parse(JSON.stringify(layer.getRadius()));
          circle._leaflet_id = layer._leaflet_id;
          circle.editing = layer.editing;
          this._circleGuideList.push(circle);
        } else {
          var marker = new L.marker(
            L.LatLngUtil.cloneLatLng(layer.getLatLng())
          );
          marker._leaflet_id = layer._leaflet_id;
          this._guideList.push(marker);
        }
      }
    },

    updateGuideLayer: function (id, latlng) {
      for (var i = 0; i < this._guideList.length; i++) {
        if (this._guideList[i]._leaflet_id == id) {
          if (latlng.length) {
            this._guideList[i].setLatLngs(L.LatLngUtil.cloneLatLngs(latlng));
          } else {
            this._guideList[i].setLatLng(L.LatLngUtil.cloneLatLng(latlng));
          }
        }
      }
    },

    addGuideLayer: function (layer) {
      this._parse(layer);
    },

    // TODO kklimczak: layer can not pin to itself during
    // deleteGuideLayers: function (layer) {
    //     console.log(layer);
    //     for(var i = 0; i < this._guides.length; i++) {
    //         console.log(this._guides[i] instanceof L.LayerGroup);
    //         console.log(this._guides[i]);
    //         if (this._guides[i] instanceof L.LayerGroup && this._guides[i].hasLayer(layer)) {
    //             //this._guides[i].removeLayer(L.Util.stamp(layer));
    //             this._currentDeletedGuideLayer = layer;
    //             console.log(this._guides[i].hasLayer(layer), 'deleted')
    //         } else {
    //             if (L.Util.stamp(this._guides[i]) === L.Util.stamp(layer)) {
    //                 this._guides[i] = undefined;
    //                 console.log('deleted');
    //             }
    //         }
    //     }
    // }
  };

  L.Map.include(L.Map.Pin);
  L.Map.addInitHook("_pin_initialize");

  // Add pin options to map object
  L.Map.mergeOptions({
    pin: false,
    pinCircle: false,
    pinControl: false,
    guideLayers: [],
  });

  // Auto enable pin handler for drawing if pin option is enabled
  L.Draw.Feature.Pin = {
    _pin_initialize: function () {
      this.on("enabled", this._pin_on_enabled, this);
      this.on("disabled", this._pin_on_disabled, this);
    },

    _pin_on_enabled: function () {
      if (this.type == "circle" || this.type == "rectangle") {
        this._mouseMarker = L.marker(this._map.getCenter(), {
          icon: L.divIcon({
            className: "leaflet-mouse-marker",
            iconAnchor: [20, 20],
            iconSize: [40, 40],
          }),
          opacity: 0,
          zIndexOffset: 1002,
        }).addTo(this._map);

        this._map.on("mousemove", this._pin_on_mouse_move, this);
        this._map.on("mousedown", this._pin_on_mouse_down, this);
      }

      var marker = this._mouseMarker;
      if (!this._pinning) {
        this._pinning = new L.Handler.MarkerPin(this._map);
      }

      if (this.options.vertices) {
        this._pinning.options.vertices = this.options.vertices;
      }
      if (this.options.distance) {
        this._pinning.options.distance = this.options.distance;
      }
      this._pinning.enable(marker);

      marker.on("click", this._pin_on_click, this);
    },

    _pin_on_mouse_down: function () {
      if (this._pinning._closestCircle) {
        this._startLatLng = this._pinning._closestCircle;
      } else if (this._pinning._closest) {
        this._startLatLng = this._pinning._closest.latlng;
      }
    },

    _pin_on_mouse_move: function (e) {
      var latlng = e.latlng,
        pinLatLng = this._pinning._closest,
        pinCircleLatLng = this._pinning._closestCircle;

      if (pinCircleLatLng) {
        pinLatLng = pinLatLng || {};
        pinLatLng.latlng = pinCircleLatLng;
      }
      if (this._shape) {
        if (this._shape instanceof L.Circle) {
          this._shape.setRadius(
            this._startLatLng.distanceTo(pinLatLng ? pinLatLng.latlng : latlng)
          );
        } else if (this._shape instanceof L.Rectangle) {
          this._shape.setBounds(
            new L.LatLngBounds(
              this._startLatLng,
              pinLatLng ? pinLatLng.latlng : latlng
            )
          );
        }
      }

      this._mouseMarker.setLatLng(latlng);
    },

    _pin_on_click: function (e) {
      if (this._markers) {
        var markerAmount = this._markers.length,
          marker = this._markers[markerAmount - 1];
        if (e) {
          marker.setLatLng(e.target._latlng);
          if (this._poly) {
            var polyPointsAmount = this._poly._latlngs.length;
            this._poly._latlngs[polyPointsAmount - 1] = e.target._latlng;
            this._poly.redraw();
          }
        }
      }
    },

    _pin_on_disabled: function () {
      if (this.type == "circle" || this.type == "rectangle") {
        this._map.off("mousemove", this._pin_on_mouse_move, this);
        this._map.off("mousedown", this._pin_on_mouse_down, this);
        this._map.removeLayer(this._mouseMarker);
      }
      delete this._pinning;
    },
  };

  // Auto enable pin handler for editing features if pin option is enabled
  L.Edit.Marker.Pin = {
    _pin_initialize: function () {
      this._marker.on("dragstart", this._pin_on_dragstart, this);
      this._marker.on("dragend", this._pin_on_dragend, this);
    },

    _pin_on_dragstart: function (e) {
      if (!this._marker._pinning) {
        this._marker._pinning = new L.Handler.MarkerPin(this._marker._map);
      }
      //this._marker._map.deleteGuideLayers(this._marker);
      this._marker._pinning.enable(this._marker);
    },

    _pin_on_dragend: function (e) {
      this._marker._pinning.disable(this._marker);
      this._marker._map.updateGuideLayer(
        this._marker._leaflet_id,
        this._marker.getLatLng()
      );
      delete this._marker._pinning;
    },
  };

  L.Edit.Marker.include(L.Edit.Marker.Pin);
  L.Edit.Marker.addInitHook("_pin_initialize");

  L.Draw.Feature.include(L.Draw.Feature.Pin);
  L.Draw.Feature.addInitHook("_pin_initialize");

  L.Edit.Poly.Pin = {
    _pin_initialize: function () {
      this._poly.on("edit", this._poly_edit, this);
    },

    _poly_edit: function () {
      this._poly._map.updateGuideLayer(
        this._poly._leaflet_id,
        this._poly.getLatLngs()
      );
    },
  };

  L.Edit.Poly.include(L.Edit.Poly.Pin);
  L.Edit.Poly.addInitHook("_pin_initialize");

  L.Edit.SimpleShape.Pin = {
    _pin_initialize: function () {
      this._shape.on("edit", this._shape_edit_start, this);
    },

    _shape_edit_start: function () {
      this._map.updateGuideLayer(
        this._shape._leaflet_id,
        this._shape.getLatLngs()
      );
    },
  };

  L.Edit.SimpleShape.include(L.Edit.SimpleShape.Pin);
  L.Edit.SimpleShape.addInitHook("_pin_initialize");

  // Custom control to toggle pin
  L.Control.Pin = L.Control.extend({
    options: {
      position: "topleft",
    },

    onAdd: function (map) {
      this._container = L.DomUtil.create(
        "div",
        "leaflet-bar leaflet-control leaflet-control-pin"
      );
      this._container.id = "leaflet-pin-button";
      this._createButton();
      this._updateButton();
      return this._container;
    },

    _createButton: function () {
      var button = L.DomUtil.create("a", "", this._container);
      L.DomEvent.on(button, "click", this._togglePin, this);
    },

    _togglePin: function () {
      this._map.togglePin();
      this._updateButton();
    },

    _updateButton: function () {
      var className = "leaflet-control-pin-enabled";
      if (this._map.options.pin) {
        L.DomUtil.addClass(this._container, className);
      } else {
        L.DomUtil.removeClass(this._container, className);
      }
    },
  });
})();



;!(function () {
  L.Polyline._flat =
    L.LineUtil.isFlat ||
    L.Polyline._flat ||
    function (latlngs) {
      // true if it's a flat array of latlngs; false if nested
      return (
        !L.Util.isArray(latlngs[0]) ||
        (typeof latlngs[0][0] !== "object" &&
          typeof latlngs[0][0] !== "undefined")
      );
    };

  /**
   * @fileOverview Leaflet Geometry utilities for distances and linear referencing.
   * @name L.GeometryUtil
   */

  L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
    /**
          Shortcut function for planar distance between two {L.LatLng} at current zoom.
    
          @tutorial distance-length
    
          @param {L.Map} map Leaflet map to be used for this method
          @param {L.LatLng} latlngA geographical point A
          @param {L.LatLng} latlngB geographical point B
          @returns {Number} planar distance
       */
    distance: function (map, latlngA, latlngB) {
      return map
        .latLngToLayerPoint(latlngA)
        .distanceTo(map.latLngToLayerPoint(latlngB));
    },

    /**
          Shortcut function for planar distance between a {L.LatLng} and a segment (A-B).
          @param {L.Map} map Leaflet map to be used for this method
          @param {L.LatLng} latlng - The position to search
          @param {L.LatLng} latlngA geographical point A of the segment
          @param {L.LatLng} latlngB geographical point B of the segment
          @returns {Number} planar distance
      */
    distanceSegment: function (map, latlng, latlngA, latlngB) {
      var p = map.latLngToLayerPoint(latlng),
        p1 = map.latLngToLayerPoint(latlngA),
        p2 = map.latLngToLayerPoint(latlngB);
      return L.LineUtil.pointToSegmentDistance(p, p1, p2);
    },

    /**
          Shortcut function for converting distance to readable distance.
          @param {Number} distance distance to be converted
          @param {String} unit 'metric' or 'imperial'
          @returns {String} in yard or miles
      */
    readableDistance: function (distance, unit) {
      var isMetric = unit !== "imperial",
        distanceStr;
      if (isMetric) {
        // show metres when distance is < 1km, then show km
        if (distance > 1000) {
          distanceStr = (distance / 1000).toFixed(2) + " km";
        } else {
          distanceStr = distance.toFixed(1) + " m";
        }
      } else {
        distance *= 1.09361;
        if (distance > 1760) {
          distanceStr = (distance / 1760).toFixed(2) + " miles";
        } else {
          distanceStr = distance.toFixed(1) + " yd";
        }
      }
      return distanceStr;
    },

    /**
          Returns true if the latlng belongs to segment A-B
          @param {L.LatLng} latlng - The position to search
          @param {L.LatLng} latlngA geographical point A of the segment
          @param {L.LatLng} latlngB geographical point B of the segment
          @param {?Number} [tolerance=0.2] tolerance to accept if latlng belongs really
          @returns {boolean}
       */
    belongsSegment: function (latlng, latlngA, latlngB, tolerance) {
      tolerance = tolerance === undefined ? 0.2 : tolerance;
      var hypotenuse = latlngA.distanceTo(latlngB),
        delta =
          latlngA.distanceTo(latlng) + latlng.distanceTo(latlngB) - hypotenuse;
      return delta / hypotenuse < tolerance;
    },

    /**
     * Returns total length of line
     * @tutorial distance-length
     *
     * @param {L.Polyline|Array<L.Point>|Array<L.LatLng>} coords Set of coordinates
     * @returns {Number} Total length (pixels for Point, meters for LatLng)
     */
    length: function (coords) {
      var accumulated = L.GeometryUtil.accumulatedLengths(coords);
      return accumulated.length > 0 ? accumulated[accumulated.length - 1] : 0;
    },

    /**
     * Returns a list of accumulated length along a line.
     * @param {L.Polyline|Array<L.Point>|Array<L.LatLng>} coords Set of coordinates
     * @returns {Array<Number>} Array of accumulated lengths (pixels for Point, meters for LatLng)
     */
    accumulatedLengths: function (coords) {
      if (typeof coords.getLatLngs == "function") {
        coords = coords.getLatLngs();
      }
      if (coords.length === 0) return [];
      var total = 0,
        lengths = [0];
      for (var i = 0, n = coords.length - 1; i < n; i++) {
        total += coords[i].distanceTo(coords[i + 1]);
        lengths.push(total);
      }
      return lengths;
    },

    /**
          Returns the closest point of a {L.LatLng} on the segment (A-B)
    
          @tutorial closest
    
          @param {L.Map} map Leaflet map to be used for this method
          @param {L.LatLng} latlng - The position to search
          @param {L.LatLng} latlngA geographical point A of the segment
          @param {L.LatLng} latlngB geographical point B of the segment
          @returns {L.LatLng} Closest geographical point
      */
    closestOnSegment: function (map, latlng, latlngA, latlngB) {
      var maxzoom = map.getMaxZoom();
      if (maxzoom === Infinity) maxzoom = map.getZoom();
      var p = map.project(latlng, maxzoom),
        p1 = map.project(latlngA, maxzoom),
        p2 = map.project(latlngB, maxzoom),
        closest = L.LineUtil.closestPointOnSegment(p, p1, p2);
      return map.unproject(closest, maxzoom);
    },

    /**
          Returns the closest latlng on layer.
    
          Accept nested arrays
    
          @tutorial closest
    
          @param {L.Map} map Leaflet map to be used for this method
          @param {Array<L.LatLng>|Array<Array<L.LatLng>>|L.PolyLine|L.Polygon} layer - Layer that contains the result
          @param {L.LatLng} latlng - The position to search
          @param {?boolean} [vertices=false] - Whether to restrict to path vertices.
          @returns {L.LatLng} Closest geographical point or null if layer param is incorrect
      */
    closest: function (map, layer, latlng, vertices) {
      var latlngs,
        mindist = Infinity,
        result = null,
        i,
        n,
        distance,
        subResult;

      if (layer instanceof Array) {
        // if layer is Array<Array<T>>
        if (layer[0] instanceof Array && typeof layer[0][0] !== "number") {
          // if we have nested arrays, we calc the closest for each array
          // recursive
          for (i = 0; i < layer.length; i++) {
            subResult = L.GeometryUtil.closest(map, layer[i], latlng, vertices);
            if (subResult && subResult.distance < mindist) {
              mindist = subResult.distance;
              result = subResult;
            }
          }
          return result;
        } else if (
          layer[0] instanceof L.LatLng ||
          typeof layer[0][0] === "number" ||
          typeof layer[0].lat === "number"
        ) {
          // we could have a latlng as [x,y] with x & y numbers or {lat, lng}
          layer = L.polyline(layer);
        } else {
          return result;
        }
      }

      // if we don't have here a Polyline, that means layer is incorrect
      // see https://github.com/makinacorpus/Leaflet.GeometryUtil/issues/23
      if (!(layer instanceof L.Polyline)) return result;

      // deep copy of latlngs
      latlngs = JSON.parse(JSON.stringify(layer.getLatLngs().slice(0)));

      // add the last segment for L.Polygon
      if (layer instanceof L.Polygon) {
        // add the last segment for each child that is a nested array
        var addLastSegment = function (latlngs) {
          if (L.Polyline._flat(latlngs)) {
            latlngs.push(latlngs[0]);
          } else {
            for (var i = 0; i < latlngs.length; i++) {
              addLastSegment(latlngs[i]);
            }
          }
        };
        addLastSegment(latlngs);
      }

      // we have a multi polygon / multi polyline / polygon with holes
      // use recursive to explore and return the good result
      if (!L.Polyline._flat(latlngs)) {
        for (i = 0; i < latlngs.length; i++) {
          // if we are at the lower level, and if we have a L.Polygon, we add the last segment
          subResult = L.GeometryUtil.closest(map, latlngs[i], latlng, vertices);
          if (subResult.distance < mindist) {
            mindist = subResult.distance;
            result = subResult;
          }
        }
        return result;
      } else {
        // Lookup vertices
        if (vertices) {
          for (i = 0, n = latlngs.length; i < n; i++) {
            var ll = latlngs[i];
            distance = L.GeometryUtil.distance(map, latlng, ll);
            if (distance < mindist) {
              mindist = distance;
              result = ll;
              result.distance = distance;
            }
          }
          return result;
        }

        // Keep the closest point of all segments
        for (i = 0, n = latlngs.length; i < n - 1; i++) {
          var latlngA = latlngs[i],
            latlngB = latlngs[i + 1];
          distance = L.GeometryUtil.distanceSegment(
            map,
            latlng,
            latlngA,
            latlngB
          );
          if (distance <= mindist) {
            mindist = distance;
            result = L.GeometryUtil.closestOnSegment(
              map,
              latlng,
              latlngA,
              latlngB
            );
            result.distance = distance;
          }
        }
        return result;
      }
    },

    /**
          Returns the closest layer to latlng among a list of layers.
    
          @tutorial closest
    
          @param {L.Map} map Leaflet map to be used for this method
          @param {Array<L.ILayer>} layers Set of layers
          @param {L.LatLng} latlng - The position to search
          @returns {object} ``{layer, latlng, distance}`` or ``null`` if list is empty;
      */
    closestLayer: function (map, layers, latlng) {
      var mindist = Infinity,
        result = null,
        ll = null,
        distance = Infinity;

      for (var i = 0, n = layers.length; i < n; i++) {
        var layer = layers[i];
        if (layer instanceof L.LayerGroup) {
          // recursive
          var subResult = L.GeometryUtil.closestLayer(
            map,
            layer.getLayers(),
            latlng
          );
          if (subResult.distance < mindist) {
            mindist = subResult.distance;
            result = subResult;
          }
        } else {
          // Single dimension, snap on points, else snap on closest
          if (typeof layer.getLatLng == "function") {
            ll = layer.getLatLng();
            distance = L.GeometryUtil.distance(map, latlng, ll);
          } else {
            ll = L.GeometryUtil.closest(map, layer, latlng);
            if (ll) distance = ll.distance; // Can return null if layer has no points.
          }
          if (distance < mindist) {
            mindist = distance;
            result = { layer: layer, latlng: ll, distance: distance };
          }
        }
      }
      return result;
    },

    /**
          Returns the n closest layers to latlng among a list of input layers.
    
          @param {L.Map} map - Leaflet map to be used for this method
          @param {Array<L.ILayer>} layers - Set of layers
          @param {L.LatLng} latlng - The position to search
          @param {?Number} [n=layers.length] - the expected number of output layers.
          @returns {Array<object>} an array of objects ``{layer, latlng, distance}`` or ``null`` if the input is invalid (empty list or negative n)
      */
    nClosestLayers: function (map, layers, latlng, n) {
      n = typeof n === "number" ? n : layers.length;

      if (n < 1 || layers.length < 1) {
        return null;
      }

      var results = [];
      var distance, ll;

      for (var i = 0, m = layers.length; i < m; i++) {
        var layer = layers[i];
        if (layer instanceof L.LayerGroup) {
          // recursive
          var subResult = L.GeometryUtil.closestLayer(
            map,
            layer.getLayers(),
            latlng
          );
          results.push(subResult);
        } else {
          // Single dimension, snap on points, else snap on closest
          if (typeof layer.getLatLng == "function") {
            ll = layer.getLatLng();
            distance = L.GeometryUtil.distance(map, latlng, ll);
          } else {
            ll = L.GeometryUtil.closest(map, layer, latlng);
            if (ll) distance = ll.distance; // Can return null if layer has no points.
          }
          results.push({ layer: layer, latlng: ll, distance: distance });
        }
      }

      results.sort(function (a, b) {
        return a.distance - b.distance;
      });

      if (results.length > n) {
        return results.slice(0, n);
      } else {
        return results;
      }
    },

    /**
       * Returns all layers within a radius of the given position, in an ascending order of distance.
         @param {L.Map} map Leaflet map to be used for this method
         @param {Array<ILayer>} layers - A list of layers.
         @param {L.LatLng} latlng - The position to search
         @param {?Number} [radius=Infinity] - Search radius in pixels
         @return {object[]} an array of objects including layer within the radius, closest latlng, and distance
       */
    layersWithin: function (map, layers, latlng, radius) {
      radius = typeof radius == "number" ? radius : Infinity;

      var results = [];
      var ll = null;
      var distance = 0;

      for (var i = 0, n = layers.length; i < n; i++) {
        var layer = layers[i];

        if (typeof layer.getLatLng == "function") {
          ll = layer.getLatLng();
          distance = L.GeometryUtil.distance(map, latlng, ll);
        } else {
          ll = L.GeometryUtil.closest(map, layer, latlng);
          if (ll) distance = ll.distance; // Can return null if layer has no points.
        }

        if (ll && distance < radius) {
          results.push({ layer: layer, latlng: ll, distance: distance });
        }
      }

      var sortedResults = results.sort(function (a, b) {
        return a.distance - b.distance;
      });

      return sortedResults;
    },

    /**
          Returns the closest position from specified {LatLng} among specified layers,
          with a maximum tolerance in pixels, providing snapping behaviour.
    
          @tutorial closest
    
          @param {L.Map} map Leaflet map to be used for this method
          @param {Array<ILayer>} layers - A list of layers to snap on.
          @param {L.LatLng} latlng - The position to snap
          @param {?Number} [tolerance=Infinity] - Maximum number of pixels.
          @param {?boolean} [withVertices=true] - Snap to layers vertices or segment points (not only vertex)
          @returns {object} with snapped {LatLng} and snapped {Layer} or null if tolerance exceeded.
      */
    closestLayerSnap: function (map, layers, latlng, tolerance, withVertices) {
      tolerance = typeof tolerance == "number" ? tolerance : Infinity;
      withVertices = typeof withVertices == "boolean" ? withVertices : true;

      var result = L.GeometryUtil.closestLayer(map, layers, latlng);
      if (!result || result.distance > tolerance) return null;

      // If snapped layer is linear, try to snap on vertices (extremities and middle points)
      if (withVertices && typeof result.layer.getLatLngs == "function") {
        var closest = L.GeometryUtil.closest(
          map,
          result.layer,
          result.latlng,
          true
        );
        if (closest.distance < tolerance) {
          result.latlng = closest;
          result.distance = L.GeometryUtil.distance(map, closest, latlng);
        }
      }
      return result;
    },

    /**
          Returns the Point located on a segment at the specified ratio of the segment length.
          @param {L.Point} pA coordinates of point A
          @param {L.Point} pB coordinates of point B
          @param {Number} the length ratio, expressed as a decimal between 0 and 1, inclusive.
          @returns {L.Point} the interpolated point.
      */
    interpolateOnPointSegment: function (pA, pB, ratio) {
      return L.point(
        pA.x * (1 - ratio) + ratio * pB.x,
        pA.y * (1 - ratio) + ratio * pB.y
      );
    },

    /**
          Returns the coordinate of the point located on a line at the specified ratio of the line length.
          @param {L.Map} map Leaflet map to be used for this method
          @param {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points
          @param {Number} ratio the length ratio, expressed as a decimal between 0 and 1, inclusive
          @returns {Object} an object with latLng ({LatLng}) and predecessor ({Number}), the index of the preceding vertex in the Polyline
          (-1 if the interpolated point is the first vertex)
      */
    interpolateOnLine: function (map, latLngs, ratio) {
      latLngs = latLngs instanceof L.Polyline ? latLngs.getLatLngs() : latLngs;
      var n = latLngs.length;
      if (n < 2) {
        return null;
      }

      // ensure the ratio is between 0 and 1;
      ratio = Math.max(Math.min(ratio, 1), 0);

      if (ratio === 0) {
        return {
          latLng:
            latLngs[0] instanceof L.LatLng ? latLngs[0] : L.latLng(latLngs[0]),
          predecessor: -1,
        };
      }
      if (ratio == 1) {
        return {
          latLng:
            latLngs[latLngs.length - 1] instanceof L.LatLng
              ? latLngs[latLngs.length - 1]
              : L.latLng(latLngs[latLngs.length - 1]),
          predecessor: latLngs.length - 2,
        };
      }

      // project the LatLngs as Points,
      // and compute total planar length of the line at max precision
      var maxzoom = map.getMaxZoom();
      if (maxzoom === Infinity) maxzoom = map.getZoom();
      var pts = [];
      var lineLength = 0;
      for (var i = 0; i < n; i++) {
        pts[i] = map.project(latLngs[i], maxzoom);
        if (i > 0) lineLength += pts[i - 1].distanceTo(pts[i]);
      }

      var ratioDist = lineLength * ratio;

      // follow the line segments [ab], adding lengths,
      // until we find the segment where the points should lie on
      var cumulativeDistanceToA = 0,
        cumulativeDistanceToB = 0;
      for (var i = 0; cumulativeDistanceToB < ratioDist; i++) {
        var pointA = pts[i],
          pointB = pts[i + 1];

        cumulativeDistanceToA = cumulativeDistanceToB;
        cumulativeDistanceToB += pointA.distanceTo(pointB);
      }

      if (pointA == undefined && pointB == undefined) {
        // Happens when line has no length
        var pointA = pts[0],
          pointB = pts[1],
          i = 1;
      }

      // compute the ratio relative to the segment [ab]
      var segmentRatio =
        cumulativeDistanceToB - cumulativeDistanceToA !== 0
          ? (ratioDist - cumulativeDistanceToA) /
            (cumulativeDistanceToB - cumulativeDistanceToA)
          : 0;
      var interpolatedPoint = L.GeometryUtil.interpolateOnPointSegment(
        pointA,
        pointB,
        segmentRatio
      );
      return {
        latLng: map.unproject(interpolatedPoint, maxzoom),
        predecessor: i - 1,
      };
    },

    /**
          Returns a float between 0 and 1 representing the location of the
          closest point on polyline to the given latlng, as a fraction of total line length.
          (opposite of L.GeometryUtil.interpolateOnLine())
          @param {L.Map} map Leaflet map to be used for this method
          @param {L.PolyLine} polyline Polyline on which the latlng will be search
          @param {L.LatLng} latlng The position to search
          @returns {Number} Float between 0 and 1
      */
    locateOnLine: function (map, polyline, latlng) {
      var latlngs = polyline.getLatLngs();
      if (latlng.equals(latlngs[0])) return 0.0;
      if (latlng.equals(latlngs[latlngs.length - 1])) return 1.0;

      var point = L.GeometryUtil.closest(map, polyline, latlng, false),
        lengths = L.GeometryUtil.accumulatedLengths(latlngs),
        total_length = lengths[lengths.length - 1],
        portion = 0,
        found = false;
      for (var i = 0, n = latlngs.length - 1; i < n; i++) {
        var l1 = latlngs[i],
          l2 = latlngs[i + 1];
        portion = lengths[i];
        if (L.GeometryUtil.belongsSegment(point, l1, l2, 0.001)) {
          portion += l1.distanceTo(point);
          found = true;
          break;
        }
      }
      if (!found) {
        throw (
          "Could not interpolate " +
          latlng.toString() +
          " within " +
          polyline.toString()
        );
      }
      return portion / total_length;
    },

    /**
          Returns a clone with reversed coordinates.
          @param {L.PolyLine} polyline polyline to reverse
          @returns {L.PolyLine} polyline reversed
      */
    reverse: function (polyline) {
      return L.polyline(polyline.getLatLngs().slice(0).reverse());
    },

    /**
          Returns a sub-part of the polyline, from start to end.
          If start is superior to end, returns extraction from inverted line.
          @param {L.Map} map Leaflet map to be used for this method
          @param {L.PolyLine} polyline Polyline on which will be extracted the sub-part
          @param {Number} start ratio, expressed as a decimal between 0 and 1, inclusive
          @param {Number} end ratio, expressed as a decimal between 0 and 1, inclusive
          @returns {Array<L.LatLng>} new polyline
       */
    extract: function (map, polyline, start, end) {
      if (start > end) {
        return L.GeometryUtil.extract(
          map,
          L.GeometryUtil.reverse(polyline),
          1.0 - start,
          1.0 - end
        );
      }

      // Bound start and end to [0-1]
      start = Math.max(Math.min(start, 1), 0);
      end = Math.max(Math.min(end, 1), 0);

      var latlngs = polyline.getLatLngs(),
        startpoint = L.GeometryUtil.interpolateOnLine(map, polyline, start),
        endpoint = L.GeometryUtil.interpolateOnLine(map, polyline, end);
      // Return single point if start == end
      if (start == end) {
        var point = L.GeometryUtil.interpolateOnLine(map, polyline, end);
        return [point.latLng];
      }
      // Array.slice() works indexes at 0
      if (startpoint.predecessor == -1) startpoint.predecessor = 0;
      if (endpoint.predecessor == -1) endpoint.predecessor = 0;
      var result = latlngs.slice(
        startpoint.predecessor + 1,
        endpoint.predecessor + 1
      );
      result.unshift(startpoint.latLng);
      result.push(endpoint.latLng);
      return result;
    },

    /**
          Returns true if first polyline ends where other second starts.
          @param {L.PolyLine} polyline First polyline
          @param {L.PolyLine} other Second polyline
          @returns {bool}
      */
    isBefore: function (polyline, other) {
      if (!other) return false;
      var lla = polyline.getLatLngs(),
        llb = other.getLatLngs();
      return lla[lla.length - 1].equals(llb[0]);
    },

    /**
          Returns true if first polyline starts where second ends.
          @param {L.PolyLine} polyline First polyline
          @param {L.PolyLine} other Second polyline
          @returns {bool}
      */
    isAfter: function (polyline, other) {
      if (!other) return false;
      var lla = polyline.getLatLngs(),
        llb = other.getLatLngs();
      return lla[0].equals(llb[llb.length - 1]);
    },

    /**
          Returns true if first polyline starts where second ends or start.
          @param {L.PolyLine} polyline First polyline
          @param {L.PolyLine} other Second polyline
          @returns {bool}
      */
    startsAtExtremity: function (polyline, other) {
      if (!other) return false;
      var lla = polyline.getLatLngs(),
        llb = other.getLatLngs(),
        start = lla[0];
      return start.equals(llb[0]) || start.equals(llb[llb.length - 1]);
    },

    /**
          Returns horizontal angle in degres between two points.
          @param {L.Point} a Coordinates of point A
          @param {L.Point} b Coordinates of point B
          @returns {Number} horizontal angle
       */
    computeAngle: function (a, b) {
      return (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
    },

    /**
         Returns slope (Ax+B) between two points.
          @param {L.Point} a Coordinates of point A
          @param {L.Point} b Coordinates of point B
          @returns {Object} with ``a`` and ``b`` properties.
       */
    computeSlope: function (a, b) {
      var s = (b.y - a.y) / (b.x - a.x),
        o = a.y - s * a.x;
      return { a: s, b: o };
    },

    /**
         Returns LatLng of rotated point around specified LatLng center.
          @param {L.LatLng} latlngPoint: point to rotate
          @param {double} angleDeg: angle to rotate in degrees
          @param {L.LatLng} latlngCenter: center of rotation
          @returns {L.LatLng} rotated point
       */
    rotatePoint: function (map, latlngPoint, angleDeg, latlngCenter) {
      var maxzoom = map.getMaxZoom();
      if (maxzoom === Infinity) maxzoom = map.getZoom();
      var angleRad = (angleDeg * Math.PI) / 180,
        pPoint = map.project(latlngPoint, maxzoom),
        pCenter = map.project(latlngCenter, maxzoom),
        x2 =
          Math.cos(angleRad) * (pPoint.x - pCenter.x) -
          Math.sin(angleRad) * (pPoint.y - pCenter.y) +
          pCenter.x,
        y2 =
          Math.sin(angleRad) * (pPoint.x - pCenter.x) +
          Math.cos(angleRad) * (pPoint.y - pCenter.y) +
          pCenter.y;
      return map.unproject(new L.Point(x2, y2), maxzoom);
    },

    /**
         Returns the bearing in degrees clockwise from north (0 degrees)
         from the first L.LatLng to the second, at the first LatLng
         @param {L.LatLng} latlng1: origin point of the bearing
         @param {L.LatLng} latlng2: destination point of the bearing
         @returns {float} degrees clockwise from north.
      */
    bearing: function (latlng1, latlng2) {
      var rad = Math.PI / 180,
        lat1 = latlng1.lat * rad,
        lat2 = latlng2.lat * rad,
        lon1 = latlng1.lng * rad,
        lon2 = latlng2.lng * rad,
        y = Math.sin(lon2 - lon1) * Math.cos(lat2),
        x =
          Math.cos(lat1) * Math.sin(lat2) -
          Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);

      var bearing = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
      return bearing >= 180 ? bearing - 360 : bearing;
    },

    /**
         Returns the point that is a distance and heading away from
         the given origin point.
         @param {L.LatLng} latlng: origin point
         @param {float} heading: heading in degrees, clockwise from 0 degrees north.
         @param {float} distance: distance in meters
         @returns {L.latLng} the destination point.
         Many thanks to Chris Veness at http://www.movable-type.co.uk/scripts/latlong.html
         for a great reference and examples.
      */
    destination: function (latlng, heading, distance) {
      heading = (heading + 360) % 360;
      var rad = Math.PI / 180,
        radInv = 180 / Math.PI,
        R = 6378137, // approximation of Earth's radius
        lon1 = latlng.lng * rad,
        lat1 = latlng.lat * rad,
        rheading = heading * rad,
        sinLat1 = Math.sin(lat1),
        cosLat1 = Math.cos(lat1),
        cosDistR = Math.cos(distance / R),
        sinDistR = Math.sin(distance / R),
        lat2 = Math.asin(
          sinLat1 * cosDistR + cosLat1 * sinDistR * Math.cos(rheading)
        ),
        lon2 =
          lon1 +
          Math.atan2(
            Math.sin(rheading) * sinDistR * cosLat1,
            cosDistR - sinLat1 * Math.sin(lat2)
          );
      lon2 = lon2 * radInv;
      lon2 = lon2 > 180 ? lon2 - 360 : lon2 < -180 ? lon2 + 360 : lon2;
      return L.latLng([lat2 * radInv, lon2]);
    },

    /**
         Returns the the angle of the given segment and the Equator in degrees,
         clockwise from 0 degrees north.
         @param {L.Map} map: Leaflet map to be used for this method
         @param {L.LatLng} latlngA: geographical point A of the segment
         @param {L.LatLng} latlngB: geographical point B of the segment
         @returns {Float} the angle in degrees.
      */
    angle: function (map, latlngA, latlngB) {
      var pointA = map.latLngToContainerPoint(latlngA),
        pointB = map.latLngToContainerPoint(latlngB),
        angleDeg =
          (Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180) /
            Math.PI +
          90;
      angleDeg += angleDeg < 0 ? 360 : 0;
      return angleDeg;
    },

    /**
         Returns a point snaps on the segment and heading away from the given origin point a distance.
         @param {L.Map} map: Leaflet map to be used for this method
         @param {L.LatLng} latlngA: geographical point A of the segment
         @param {L.LatLng} latlngB: geographical point B of the segment
         @param {float} distance: distance in meters
         @returns {L.latLng} the destination point.
      */
    destinationOnSegment: function (map, latlngA, latlngB, distance) {
      var angleDeg = L.GeometryUtil.angle(map, latlngA, latlngB),
        latlng = L.GeometryUtil.destination(latlngA, angleDeg, distance);
      return L.GeometryUtil.closestOnSegment(map, latlng, latlngA, latlngB);
    },
  });

  return L.GeometryUtil;
})(); 
