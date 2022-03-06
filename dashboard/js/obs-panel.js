(()=>{"use strict";var t,e={3587:(t,e,r)=>{var n,o=r(8e3),i=r(8642),s=r(5803),a=r(2659),l=r(3415),c=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};const p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),Object.defineProperty(e.prototype,"nextRun",{get:function(){var t=this;return this.runData.find((function(e){return e.id===t.runDataActiveSurrounding.next}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextRunGameName",{get:function(){return this.nextRun&&this.nextRun.game?"".concat(this.nextRun.game.slice(0,35)).concat(this.nextRun.game.length>35?"...":""):"(Run bez nazwy)"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disableChange",{get:function(){return["running","paused"].includes(this.timer.state)},enumerable:!1,configurable:!0}),e.prototype.playNextRun=function(){this.nextRun&&nodecg.sendMessage("switchToIntermission").then((function(){})).catch((function(){}))},u([l.aD],e.prototype,"obsData",void 0),u([l.aD],e.prototype,"timer",void 0),u([l.aD],e.prototype,"runData",void 0),u([l.aD],e.prototype,"runDataActiveSurrounding",void 0),u([a.wA],e)}(a.w3);var d=r(5440),h=r(7618),f=r.n(h),v=r(8378),y=r(4385);const b=y.Z;var g=r(7047);const m=g.Z;var _=r(9085),O=r(9405);const w=s.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}});var x=r(6248),j=r(8298);const C=(0,x.Z)(v.Z,_.Z,w).extend({name:"v-alert",props:{border:{type:String,validator:t=>["top","right","bottom","left"].includes(t)},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:t=>"string"==typeof t||!1===t},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:t=>["info","error","success","warning"].includes(t)},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(b,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(m,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(m,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...v.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||O.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,j.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return this.coloredBorder||(t=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,t)),this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}});var D=r(969),$=(0,d.Z)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-btn",{attrs:{block:"",disabled:t.disableChange||!t.nextRun||!t.obsData.connected},on:{click:t.playNextRun}},[t.nextRun?r("span",[r("v-icon",{attrs:{left:""}},[t._v("mdi-play")]),t._v(t._s(t.nextRunGameName)+"\n    ")],1):t.runDataArray.length?r("span",[t._v(" Koniec runów ")]):r("span",[t._v(" Brak dodanych runów ")])]),t._v(" "),t.disableChange?r("v-alert",{style:{"margin-top":"5px"},attrs:{dense:"",type:"info"}},[t._v("\n    Nie możesz zmienić gry w tym momencie.\n  ")]):t._e()],1)}),[],!1,null,null,null);const P=$.exports;f()($,{VAlert:C,VApp:D.Z,VBtn:y.Z,VIcon:g.Z});var R=r(8586),S=r(4170),A=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();s.Z.use(R.ZP);var B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return A(e,t),Object.defineProperty(e.prototype,"reps",{get:function(){return this.context.rootState.ReplicantModule.reps},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"obsData",{get:function(){return this.reps.obsData},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timer",{get:function(){return this.reps.timerReplicant},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"runData",{get:function(){return this.reps.runDataArray},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"runDataActiveSurrounding",{get:function(){return this.reps.runDataActiveSurrounding},enumerable:!1,configurable:!0}),function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}([(0,S.Yl)({name:"OurModule"})],e)}(S.g4),Z=new R.yh({strict:!1,state:{},modules:{ReplicantModule:o.np,OurModule:B}});const k=Z;(0,S.rT)(B,Z),(0,o.rl)(k).then((function(){new s.Z({vuetify:i.Z,store:k,el:"#App",render:function(t){return t(P)}})}))},9085:(t,e,r)=>{r.d(e,{d:()=>o,Z:()=>i});var n=r(5803);function o(t="value",e="input"){return n.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(r){!!r!==this[t]&&this.$emit(e,r)}}})}const i=o()}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var s=1/0;for(u=0;u<t.length;u++){for(var[r,o,i]=t[u],a=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((t=>n.O[t](r[l])))?r.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={500:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[s,a,l]=r,c=0;if(s.some((e=>0!==t[e]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var u=l(n)}for(e&&e(r);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[s[c]]=0;return n.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[273,81,385,0,610],(()=>n(3587)));o=n.O(o)})();