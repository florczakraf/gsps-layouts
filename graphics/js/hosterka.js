(()=>{"use strict";var t,e={416:(t,e,r)=>{var n=r(529),o=r(803),i=r(925),s=(r(807),r(23),r(654),r(70),r(793),r(415));var c=r(440);const a=(0,c.Z)({name:"Host",props:["host"]},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container layout-horizontal layout-center"},[n("img",{attrs:{id:"host-icon",src:r(441)}}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(t.host))])])])}),[],!1,null,"1123078a",null).exports;var u,l=(u=function(t,e){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},u(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}u(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};const f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.showNames=!1,e}return l(e,t),e.prototype.mounted=function(){var t=this;nodecg.listenFor("showNames",(function(){t.showNames=!0})),nodecg.listenFor("hideNames",(function(){t.showNames=!1}))},p([s.aD],e.prototype,"hosterka",void 0),p([(0,i.ZP)({components:{Host:a}})],e)}(o.Z),h=(0,c.Z)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade",mode:"out-in"}},[t.hosterka&&t.showNames?r("div",{style:{width:"100%"}},[t.hosterka.host1.length>0?r("host",{key:t.hosterka.host1,attrs:{id:"nickname1",host:t.hosterka.host1}}):t._e(),t._v(" "),t.hosterka.host2.length>0?r("host",{key:t.hosterka.host2,attrs:{id:"nickname2",host:t.hosterka.host2}}):t._e()],1):t._e()])}),[],!1,null,null,null).exports;var v=r(586),d=r(170),y=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();o.Z.use(v.ZP);var g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return y(e,t),Object.defineProperty(e.prototype,"reps",{get:function(){return this.context.rootState.ReplicantModule.reps},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hosterka",{get:function(){return this.reps.hosterkaRep},enumerable:!1,configurable:!0}),function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}([(0,d.Yl)({name:"OurModule"})],e)}(d.g4),m=new v.yh({strict:!1,state:{},modules:{ReplicantModule:n.np,OurModule:g}});const b=m;(0,d.rT)(g,m),(0,n.rl)(b).then((function(){new o.Z({store:b,el:"#App",render:function(t){return t(h)}})}))},415:(t,e,r)=>{r.d(e,{aD:()=>s,uD:()=>u});var n=r(925),o=r(586),i=l("computed",o.rn),s=l("computed",o.Se),c=l("methods",o.nv),a=l("methods",o.OI);function u(t,e){function r(e){return function(r,n){if("string"==typeof n){var o=n,i=r;return e(o,{namespace:t})(i,o)}var s=r,c=function(t,e){var r={};return[t,e].forEach((function(t){Object.keys(t).forEach((function(e){r[e]=t[e]}))})),r}(n||{},{namespace:t});return e(s,c)}}return e?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),r(e)):{State:r(i),Getter:r(s),Mutation:r(a),Action:r(c)}}function l(t,e){function r(r,o){return(0,n.yh)((function(n,i){n[t]||(n[t]={});var s,c=((s={})[i]=r,s);n[t][i]=void 0!==o?e(o,c)[i]:e(c)[i]}))}return function(t,e){if("string"==typeof e){var n=e,o=t;return r(n,void 0)(o,n)}return r(t,function(t){var e=t&&t.namespace;if("string"==typeof e)return"/"!==e[e.length-1]?e+"/":e}(e))}}},441:(t,e,r)=>{t.exports=r.p+"img/host-icon-a54b2f7bc6e3b0565f53.png"}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var s=1/0;for(l=0;l<t.length;l++){for(var[r,o,i]=t[l],c=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((t=>n.O[t](r[a])))?r.splice(a--,1):(c=!1,i<s&&(s=i));if(c){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"})(),(()=>{var t={527:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[s,c,a]=r,u=0;if(s.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(a)var l=a(n)}for(e&&e(r);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[s[u]]=0;return n.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[378],(()=>n(416)));o=n.O(o)})();