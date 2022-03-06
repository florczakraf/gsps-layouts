/*! For license information please see edit-total.js.LICENSE.txt */
(()=>{"use strict";var e,t={8987:(e,t,n)=>{var r=n(8642),o=n(5803);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function c(e,t){l(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(n){l(e.prototype,t.prototype,n)})),Object.getOwnPropertyNames(t).forEach((function(n){l(e,t,n)}))}function l(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,t,n):Reflect.getOwnMetadata(r,t);n?Reflect.defineMetadata(r,o,e,n):Reflect.defineMetadata(r,o,e)}))}var u={__proto__:[]}instanceof Array;function p(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var r=new t;t.prototype._init=n;var o={};return Object.keys(r).forEach((function(e){void 0!==r[e]&&(o[e]=r[e])})),o}var f=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach((function(e){if("constructor"!==e)if(f.indexOf(e)>-1)t[e]=n[e];else{var r=Object.getOwnPropertyDescriptor(n,e);void 0!==r.value?"function"==typeof r.value?(t.methods||(t.methods={}))[e]=r.value:(t.mixins||(t.mixins=[])).push({data:function(){return s({},e,r.value)}}):(r.get||r.set)&&((t.computed||(t.computed={}))[e]={get:r.get,set:r.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return p(this,e)}});var r=e.__decorators__;r&&(r.forEach((function(e){return e(t)})),delete e.__decorators__);var i=Object.getPrototypeOf(e.prototype),l=i instanceof o.Z?i.constructor:o.Z,u=l.extend(t);return v(u,e,l),a()&&c(u,e),u}var m={prototype:!0,arguments:!0,callee:!0,caller:!0};function v(e,t,n){Object.getOwnPropertyNames(t).forEach((function(r){if(!m[r]){var o=Object.getOwnPropertyDescriptor(e,r);if(!o||o.configurable){var s,a,c=Object.getOwnPropertyDescriptor(t,r);if(!u){if("cid"===r)return;var l=Object.getOwnPropertyDescriptor(n,r);if(a=i(s=c.value),null!=s&&("object"===a||"function"===a)&&l&&l.value===c.value)return}Object.defineProperty(e,r,c)}}}))}function h(e){return"function"==typeof e?d(e):function(t){return d(t,e)}}h.registerHooks=function(e){var t;f.push.apply(f,function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(t=e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())};const y=h;n(4807),n(7023),n(5654),n(6070),n(8793);var g,b=(g=function(e,t){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},g(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});const _=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return b(t,e),t.prototype.data=function(){return{amount:0}},t.prototype.updateTotal=function(e){nodecg.sendMessage("setTotal",{type:"cash",newValue:e})},t.prototype.mounted=function(){var e=this;document.addEventListener("dialog-confirmed",(function(){e.updateTotal(e.$data.amount)}))},function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([y],t)}(o.Z);var w=n(5440),O=n(7618),$=n.n(O),j=n(969),x=n(9500),E=(0,w.Z)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-text-field",{attrs:{label:"Kwota",filled:""},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1)}),[],!1,null,null,null);const T=E.exports;$()(E,{VApp:j.Z,VTextField:x.Z}),new o.Z({vuetify:r.Z,el:"#App",render:function(e){return e(T)}})},3777:(e,t,n)=>{function r(e,t,n){var r;const o=null==(r=e._observe)?void 0:r[n.context._uid];o&&(o.observer.unobserve(e),delete e._observe[n.context._uid])}n.d(t,{Z:()=>o});const o={inserted:function(e,t,n){if("undefined"==typeof window||!("IntersectionObserver"in window))return;const o=t.modifiers||{},i=t.value,{handler:s,options:a}="object"==typeof i?i:{handler:i,options:{}},c=new IntersectionObserver(((t=[],i)=>{var a;const c=null==(a=e._observe)?void 0:a[n.context._uid];if(!c)return;const l=t.some((e=>e.isIntersecting));!s||o.quiet&&!c.init||o.once&&!l&&!c.init||s(t,i,l),l&&o.once?r(e,0,n):c.init=!0}),a);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:c},c.observe(e)},unbind:r}},6236:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(2377);function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function i(e){return"TouchEvent"===e.constructor.name}function s(e){return"KeyboardEvent"===e.constructor.name}const a={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const r=document.createElement("span"),a=document.createElement("span");r.appendChild(a),r.className="v-ripple__container",n.class&&(r.className+=` ${n.class}`);const{radius:c,scale:l,x:u,y:p,centerX:f,centerY:d}=((e,t,n={})=>{let r=0,o=0;if(!s(e)){const n=t.getBoundingClientRect(),s=i(e)?e.touches[e.touches.length-1]:e;r=s.clientX-n.left,o=s.clientY-n.top}let a=0,c=.3;t._ripple&&t._ripple.circle?(c=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((r-a)**2+(o-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const l=(t.clientWidth-2*a)/2+"px",u=(t.clientHeight-2*a)/2+"px";return{radius:a,scale:c,x:n.center?l:r-a+"px",y:n.center?u:o-a+"px",centerX:l,centerY:u}})(e,t,n),m=2*c+"px";a.className="v-ripple__animation",a.style.width=m,a.style.height=m,t.appendChild(r);const v=window.getComputedStyle(t);v&&"static"===v.position&&(t.style.position="relative",t.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),o(a,`translate(${u}, ${p}) scale3d(${l},${l},${l})`),a.dataset.activated=String(performance.now()),setTimeout((()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),o(a,`translate(${f}, ${d}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const r=performance.now()-Number(n.dataset.activated),o=Math.max(250-r,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),o)}};function c(e){return void 0===e||!!e}function l(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,i(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||s(e),n._ripple.class&&(t.class=n._ripple.class),i(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{a.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),80)}else a.show(e,n,t)}}function u(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{u(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),a.hide(t)}}function p(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let f=!1;function d(e){f||e.keyCode!==r.Do.enter&&e.keyCode!==r.Do.space||(f=!0,l(e))}function m(e){f=!1,u(e)}function v(e){!0===f&&(f=!1,u(e))}function h(e,t,n){const r=c(t.value);r||a.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=r;const o=t.value||{};o.center&&(e._ripple.centered=!0),o.class&&(e._ripple.class=t.value.class),o.circle&&(e._ripple.circle=o.circle),r&&!n?(e.addEventListener("touchstart",l,{passive:!0}),e.addEventListener("touchend",u,{passive:!0}),e.addEventListener("touchmove",p,{passive:!0}),e.addEventListener("touchcancel",u),e.addEventListener("mousedown",l),e.addEventListener("mouseup",u),e.addEventListener("mouseleave",u),e.addEventListener("keydown",d),e.addEventListener("keyup",m),e.addEventListener("blur",v),e.addEventListener("dragstart",u,{passive:!0})):!r&&n&&y(e)}function y(e){e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",l),e.removeEventListener("touchend",u),e.removeEventListener("touchmove",p),e.removeEventListener("touchcancel",u),e.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",u),e.removeEventListener("keydown",d),e.removeEventListener("keyup",m),e.removeEventListener("dragstart",u),e.removeEventListener("blur",v)}const g={bind:function(e,t,n){h(e,t,!1)},unbind:function(e){delete e._ripple,y(e)},update:function(e,t){t.value!==t.oldValue&&h(e,t,c(t.oldValue))}}},7653:(e,t,n)=>{function r(e){return function(t,n){for(const r in n)Object.prototype.hasOwnProperty.call(t,r)||this.$delete(this.$data[e],r);for(const n in t)this.$set(this.$data[e],n,t[n])}}n.d(t,{Z:()=>o});const o=n(5803).Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},1954:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(5803),o=n(8298),i=n(4230);const s=r.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(e,t={}){return"string"==typeof t.style?((0,o.N6)("style must be an object",this),t):"string"==typeof t.class?((0,o.N6)("class must be an object",this),t):((0,i.NA)(e)?t.style={...t.style,"background-color":`${e}`,"border-color":`${e}`}:e&&(t.class={...t.class,[e]:!0}),t)},setTextColor(e,t={}){if("string"==typeof t.style)return(0,o.N6)("style must be an object",this),t;if("string"==typeof t.class)return(0,o.N6)("class must be an object",this),t;if((0,i.NA)(e))t.style={...t.style,color:`${e}`,"caret-color":`${e}`};else if(e){const[n,r]=e.toString().trim().split(" ",2);t.class={...t.class,[n+"--text"]:!0},r&&(t.class["text--"+r]=!0)}return t}}})},2027:(e,t,n)=>{n.d(t,{d:()=>s});var r=n(5803),o=n(2377);const i={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function s(e=[]){return r.Z.extend({name:"positionable",props:e.length?(0,o.ji)(i,e):i})}s()},5010:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(5803).Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},4230:(e,t,n)=>{n.d(t,{NA:()=>o,jx:()=>i,I4:()=>s,hq:()=>a});var r=n(8298);function o(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function i(e){let t;if("number"==typeof e)t=e;else{if("string"!=typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&(0,r.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,r.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,r.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function s(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return s(i(e))}},8298:(e,t,n)=>{n.d(t,{Kd:()=>i,N6:()=>s,fK:()=>a});var r=n(7362);function o(e,t,n){if(!r.Z.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?function(e){if(e._isVue&&e.$parent){const t=[];let n=0;for(;e;){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${l(e[0])}... (${e[1]} recursive calls)`:l(e)}`)).join("\n")}return`\n\n(found in ${l(e)})`}(t):"")}}function i(e,t,n){const r=o(e,t,n);null!=r&&console.warn(r)}function s(e,t,n){const r=o(e,t,n);null!=r&&console.error(r)}function a(e,t,n,r){s(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,r)}const c=/(?:^|[-_])(\w)/g;function l(e,t){if(e.$root===e)return"<Root>";const n="function"==typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const o=n.__file;if(!r&&o){const e=o.match(/([^/\\]+)\.vue$/);r=e&&e[1]}return(r?`<${i=r,i.replace(c,(e=>e.toUpperCase())).replace(/[-_]/g,"")}>`:"<Anonymous>")+(o&&!1!==t?` at ${o}`:"");var i}},2377:(e,t,n)=>{n.d(t,{qw:()=>o,vZ:()=>i,vO:()=>s,ji:()=>a,kb:()=>c,GL:()=>l,Do:()=>p,RB:()=>f,XP:()=>d,_A:()=>v,jC:()=>h,TI:()=>y,z9:()=>g,uZ:()=>b,Ee:()=>_});let r=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{r=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}function o(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let o=0;o<r;o++){if(null==e)return n;e=e[t[o]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function i(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>i(e[n],t[n])))}function s(e,t,n){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:o(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function a(e,t){const n={};for(let r=0;r<t.length;r++){const o=t[r];void 0!==e[o]&&(n[o]=e[o])}return n}function c(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function l(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function u(e){return null!==e&&"object"==typeof e}const p=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function f(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=s(e,`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,t);if("string"!=typeof n)return n;t=n}return null==n?t:{component:n,props:{icon:t}}}function d(e){return Object.keys(e)}const m=/-(\w)/g,v=e=>e.replace(m,((e,t)=>t?t.toUpperCase():""));function h(e){return e.charAt(0).toUpperCase()+e.slice(1)}function y(e){return null!=e?Array.isArray(e)?e:[e]:[]}function g(e,t="default",n,r=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!r?void 0:e.$slots[t]}function b(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function _(e={},t={}){for(const n in t){const r=e[n],o=t[n];u(r)&&u(o)?e[n]=_(r,o):e[n]=o}return e}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],a=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={809:0,238:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,a,c]=n,l=0;if(s.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var u=c(r)}for(t&&t(n);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[s[l]]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[273,969,238,963],(()=>r(8987)));o=r.O(o)})();