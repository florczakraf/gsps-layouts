(()=>{"use strict";var e,t={10:(e,t,n)=>{n(79);var r=n(529),o=n(803),i=n(925),a=(n(807),n(23),n(654),n(70),n(793),n(415)),s=n(902);const c=nodecg.Replicant("timer","nodecg-speedcontrol"),l={running:"white",finished:"#ffbd16",stopped:"#a5a3a3",paused:"#a5a3a3"},u={name:"TimerView",data:()=>({timer:[]}),mounted(){c.on("change",(e=>{this.timer=e,s.ZP.to(document.getElementById("timer"),{duration:1,color:l[e.state]})}))}};var p=n(440);const f=(0,p.Z)(u,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("b",{style:{color:"#a5a3a3","text-shadow":"black 2px 2px 8px"},attrs:{id:"timer"}},[e._v(e._s(e.timer.time))])}),[],!1,null,null,null).exports,d=function(e){if(e){var t=function(e){return[].slice.call(e)},n=3,r=[],o=null,i="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(o),o=e.requestAnimationFrame((function(){return s(r.filter((function(e){return e.dirty&&e.active})))}))}:function(){},a=function(e){return function(){r.forEach((function(t){return t.dirty=e})),i()}},s=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=p(e)})),e.filter(f).forEach(d);var t=e.filter(u);t.forEach(l),t.forEach((function(e){d(e),c(e)})),t.forEach(m)},c=function(e){return e.dirty=0},l=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},u=function(e){return 2!==e.dirty||2===e.dirty&&e.element.parentNode.clientWidth!==e.availableWidth},p=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue("font-size")),t.display=n.getPropertyValue("display"),t.whiteSpace=n.getPropertyValue("white-space"),!0},f=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},d=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},m=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},y=function(e,t){return function(){e.dirty=t,e.active&&i()}},h=function(e){return function(){r=r.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},v=function(e){return function(){e.active||(e.active=!0,i())}},b=function(e){return function(){return e.active=!1}},g=function(e){e.observeMutations&&(e.observer=new MutationObserver(y(e,1)),e.observer.observe(e.element,e.observeMutations))},w={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},_=null,S=function(){e.clearTimeout(_),_=e.setTimeout(a(2),O.observeWindowDelay)},x=["resize","orientationchange"];return Object.defineProperty(O,"observeWindow",{set:function(t){var n="".concat(t?"add":"remove","EventListener");x.forEach((function(t){e[n](t,S)}))}}),O.observeWindow=!0,O.observeWindowDelay=100,O.fitAll=a(n),O}function z(e,t){var o=Object.assign({},w,t),a=e.map((function(e){var t=Object.assign({},o,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},g(e),e.newbie=!0,e.dirty=!0,r.push(e)}(t),{element:e,fit:y(t,n),unfreeze:v(t),freeze:b(t),unsubscribe:h(t)}}));return i(),a}function O(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?z(t(document.querySelectorAll(e)),n):z([e],n)[0]}}("undefined"==typeof window?null:window),m={name:"RunInfo",props:["run","maxTitleSize","wrap"],data:()=>({$_fittyGame:void 0,$_fittyInfo:void 0}),watch:{run:{handler:function(){d.fitAll()},immediate:!0,deep:!0}},methods:{fitText(){this.$data.$_fittyGame=d("#GameName",{minSize:1,maxSize:this.maxTitleSize,multiLine:this.wrap||!1}),this.$data.$_fittyInfo=d("#GameInfo",{minSize:1,maxSize:24})}},mounted(){setTimeout((()=>{this.fitText()}),200)}},y=(0,p.Z)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{style:{color:"white","text-shadow":"black 2px 2px 8px"},attrs:{id:"GameName"}},[n("b",[e._v(e._s(e.run.game))])]),e._v(" "),n("br"),e._v(" "),n("div",{style:{color:"white","text-shadow":"black 2px 2px 8px","font-size":"16px"},attrs:{id:"GameInfo"}},[e._v("\n    "+e._s(e.run.category||"?")+" / "+e._s(e.run.system||"?")+" / EST:\n    "+e._s(e.run.estimate||"?")+"\n  ")])])}),[],!1,null,null,null).exports,h=(0,p.Z)({name:"Player",props:["player","cycle"]},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"nameplate"},[n("transition",{attrs:{name:"fade"}},[0===e.cycle?n("span",{style:{position:"absolute",left:"0",width:"100%"}},[n("b",[e._v(e._s(e.player.name||"?"))])]):e._e()]),e._v(" "),n("transition",{attrs:{name:"fade"}},[1===e.cycle?n("span",{style:{marginTop:"0px",position:"absolute",left:"0",width:"100%"}},[n("i",{staticClass:"fab fa-twitch",style:{"font-size":"24px",float:"left",marginTop:"5px",marginLeft:"10px"}}),n("b",[e._v(e._s(e.player.social.twitch||"?"))])]):e._e()])],1)])}),[],!1,null,"681948f8",null).exports,v={name:"CommentatorList",props:["commentators"],data:()=>({fittyInstance:void 0}),methods:{fit(){this.$data.fittyInstance=d("#commentatorNames",{minSize:1,maxSize:20})}},mounted(){setTimeout((()=>{this.fit()}),200)}},b=(0,p.Z)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{display:"flex","flex-direction":"row",color:"white","font-size":"20px",width:"100%"}},[n("div",{style:{"background-color":"#3A008B",width:"140px","font-size":"18px"}},[n("b",[1===e.commentators.amount?[e._v("Komentator")]:[e._v("Komentatorzy")]],2)]),e._v(" "),n("div",{style:{"background-color":"rgb(0,0,0,0.6)",width:"calc(100% - 140px)"},attrs:{id:"commentatorNames"}},[e._v("\n    "+e._s(e.commentators.names)+"\n  ")])])}),[],!1,null,null,null).exports,g=(0,p.Z)({name:"ReaderName",props:["reader"]},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{display:"flex","flex-direction":"row",color:"white","font-size":"20px",width:"100%"}},[n("div",{style:{"background-color":"#3A008B",width:"140px","font-size":"18px"}},[n("b",[e._v("Czytający")])]),e._v(" "),n("div",{style:{"background-color":"rgb(0,0,0,0.6)",width:"calc(100% - 140px)"}},[e._v("\n    "+e._s(e.reader)+"\n  ")])])}),[],!1,null,null,null).exports;var w=n(138),_=n.n(w);const S={name:"Sponsors",props:["sponsors","cycles"],data:()=>({currentSponsor:void 0,sponsorTimeout:void 0}),mounted(){this.sponsors.length>0&&(this.$data.currentSponsor=this.sponsors[0]),this.$data.sponsorTimeout=setTimeout(this.nextSponsor,1e3*this.getCycle(this.sponsors[0].name))},methods:{nextSponsor(){if(!this.sponsors||this.sponsors.length<=0)return;let e=this.sponsors.indexOf(this.$data.currentSponsor)+1;e>=this.sponsors.length&&(e=0),this.$data.currentSponsor=this.sponsors[e],this.$data.sponsorTimeout=setTimeout(this.nextSponsor,1e3*this.getCycle(this.sponsors[e].name))},getCycle(e){let t=_()(this.cycles);if(t){let n=10;for(let r=0;r<t.length;r++)if(t[r].name===e){n=t[r].cycle;break}return n}return 10}}},x=(0,p.Z)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.currentSponsor&&e.currentSponsor.name?n("div",{attrs:{id:"sponsors-div"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("img",{key:e.currentSponsor.name,staticClass:"img",attrs:{src:e.currentSponsor.url}})])],1):e._e()}),[],!1,null,"315d2891",null).exports;var z,O=(z=function(e,t){return z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},z(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}z(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),R=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return O(t,e),t.prototype.data=function(){return{numRunners:0}},t.prototype.mounted=function(){this.$data.numRunners=this.activeRun.teams.length,this.$watch((function(){return this.activeRun}),(function(){this.$data.numRunners=0,this.$data.numRunners=this.activeRun.teams.length}))},t.prototype.getCurrentRelayRunner=function(e){var t;return e.players.forEach((function(n){n.id===e.relayPlayerID&&(t=n)})),t},R([a.aD],t.prototype,"activeRun",void 0),R([a.aD],t.prototype,"nameCycle",void 0),R([a.aD],t.prototype,"commentators",void 0),R([a.aD],t.prototype,"reader",void 0),R([a.aD],t.prototype,"sponsors",void 0),R([a.aD],t.prototype,"logoCycles",void 0),R([(0,i.ZP)({components:{TimerView:f,RunInfo:y,Player:h,CommentatorList:b,ReaderName:g,SponsorsView:x}})],t)}(o.Z),j=(0,p.Z)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[r("img",{attrs:{id:"Background",src:n(669)}}),e._v(" "),e.activeRun?r("div",{attrs:{id:"runners"}},[e._l(e.activeRun.teams,(function(t){return e.activeRun.teams?[r("player",{key:t.id,staticClass:"Player",attrs:{cycle:e.nameCycle,player:e.getCurrentRelayRunner(t)}})]:e._e()})),e._v(" "),e.numRunners<3&&e.commentators.amount>0?r("commentator-list",{attrs:{commentators:e.commentators,id:"commentators"}}):e._e(),e._v(" "),e.numRunners<4&&e.reader?r("reader-name",{attrs:{reader:e.reader,id:"reader"}}):e._e()],2):e._e(),e._v(" "),e.activeRun?r("run-info",{attrs:{id:"RunInfo",run:e.activeRun,maxTitleSize:36}}):e._e(),e._v(" "),r("timer-view",{attrs:{id:"timer"}}),e._v(" "),r("sponsors-view",{attrs:{id:"sponsors",sponsors:e.sponsors,cycles:e.logoCycles}})],1)}),[],!1,null,null,null).exports;var P=n(586),T=n(170),$=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();o.Z.use(P.ZP);var E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return $(t,e),Object.defineProperty(t.prototype,"reps",{get:function(){return this.context.rootState.ReplicantModule.reps},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"activeRun",{get:function(){return this.reps.activeRunReplicant},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nameCycle",{get:function(){return this.reps.nameCycleReplicant},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"commentators",{get:function(){return this.reps.commentatorsReplicant},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"reader",{get:function(){return this.reps.readerReplicant},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sponsors",{get:function(){return this.reps.sponsors},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"logoCycles",{get:function(){return this.reps.logoCycles},enumerable:!1,configurable:!0}),function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([(0,T.Yl)({name:"OurModule"})],t)}(T.g4),k=new P.yh({strict:!1,state:{},modules:{ReplicantModule:r.np,OurModule:E}});const F=k;(0,T.rT)(E,k),(0,r.rl)(F).then((function(){new o.Z({store:F,el:"#App",render:function(e){return e(j)}})}))},669:(e,t,n)=>{e.exports=n.p+"img/widescreen_1-94e07f96be61df4b7bda.png"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{var e={937:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var u=c(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[378,902,896],(()=>r(10)));o=r.O(o)})();