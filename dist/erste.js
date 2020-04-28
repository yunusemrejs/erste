(function(global){'use strict';var g=this;function h(a,b){a=a.split(".");var c=g;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};const m=(a)=>{a%=360;return 0>360*a?a+360:a};var n=(a,b)=>a+b*-a;const p=navigator.userAgent.match(/iPhone/i)&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
class q{constructor(a){this.el=a||document.body;this.a=this.w=!1;this.c=0;this.touches=[];this.el.addEventListener("touchstart",this.g.bind(this),!1);this.el.addEventListener("touchmove",this.f.bind(this),!1);this.el.addEventListener("touchend",this.b.bind(this),!1)}g(a){this.a=this.w=!0;this.c=(new Date).getTime();var b=a.changedTouches[0];this.touches=[a.timeStamp,b.pageX,b.pageY]}f(a){var b=this.touches,c=a.changedTouches[0];if(20<Math.abs(c.pageX-b[1])||20<Math.abs(c.pageY-b[2]))this.w=!1;if(this.a)if(b.push(a.timeStamp,
c.pageX,c.pageY),+new Date>b[0]+100)this.a=!1;else{var d=a.timeStamp;b=b.filter((a,b,c)=>c[b-b%3]>d-250);1>=b.length/3||60>Math.pow(b[1]-b[b.length-2],2)+Math.pow(b[2]-b[b.length-1],2)||(c=m(180*Math.atan2(b[b.length-1]-b[2],b[b.length-2]-b[1])/Math.PI),b="swipeRight",45<c&&135>c?b="swipeDown":135<c&&225>c?b="swipeLeft":225<c&&315>c&&(b="swipeUp"),(c=document.createEvent("Event"))&&c.initEvent(b,!0,!0),a.target.dispatchEvent(c),this.a=!1)}}b(a){if(this.w){var b=this.touches,c=a.changedTouches[0];
if(20<Math.abs(c.pageX-b[1])||20<Math.abs(c.pageY-b[2]))this.w=!1;else{var d=(new Date).getTime()-this.c;(b=document.createEvent("Event"))&&b.initEvent(800<d?"longTap":"tap",!0,!0);a=a.target;p&&(a=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset));a.dispatchEvent(b)}}}};let t=Math.floor(2147483648*Math.random());const u=()=>(t++).toString(36);const v="blur click mouseover mouseout mousemove mousedown mouseup scroll keyup keypress focus paste input touchstart touchmove touchend tap longtap doubletap press pan swipe swipeTop swipeRight swipeBottom swipeLeft".split(" "),w=new RegExp(`^(${v.join("|")}) (.*)`);function y(a){const b=a.constructor.prototype;if(!b.u){var c={};b.events&&(c=b.events);Object.getOwnPropertyNames(b).map((a)=>w.exec(a)).filter((a)=>a).forEach(([b,e,k])=>{c[e]=c[e]||{};c[e][k]=a[b]});b.u=c}}
const aa=(()=>{const a=document.createElement("div");return(b)=>{a.innerHTML=b.trim();return a.removeChild(a.firstChild)}})();
class z{constructor(){this.a={};this.c={};this.N=void 0;document.body?this.b():document.addEventListener("DOMContentLoaded",()=>this.b());this.ba=u;this.createElement=aa}f(a){a.m=a.target;let b=this.l(a.target),c=!1;do{if(c)break;a.targetEl=a.m;c=this.h(b,a)}while((a.m=a.m.parentNode)&&a.m!=document.body)}b(){v.forEach((a)=>document.body.addEventListener(a,this.f.bind(this)));this.N=new q;(new MutationObserver(()=>{for(let a in this.c)this.c[a].render()&&delete this.c[a]})).observe(document.body,
{childList:!0,subtree:!0})}l(a){let b=a,c=[],d,e;if(e=b.da)return e.split(",").forEach((a)=>c.push(this.a[a])),c;e=[];do if(d=this.a[b.id])c.push(d),e.push(b.id);while(b=b.parentNode);a.da=e.join(",");return c}h(a,b){let c=!1;for(let d=0;d<a.length;d++){let e=a[d],k=(e&&e.u)[b.type];if(!k)continue;let f=Object.keys(k);if(!1===this.g(e,b,k,f)){c=!0;break}}return c}g(a,b,c,d){let e=!0;d.forEach((d)=>{b.m.matches&&b.m.matches(d)&&(e=c[d].call(a,b,this.j(b.m.id)))});return e}j(a){return this.a[a]}fa(a){this.a[a.id]=
a;a.rendered||(this.c[a.id]=a);a.u||y(a)}ea(a){delete this.a[a.id];delete this.c[a.id]}static a(){A||(A=new z);return A}}var A;/*
 EventEmitter3

 https://www.github.com/primus/eventemitter3

 Copyright (c) 2014 Arnout Kazemier
*/
function B(){this.a=new C;this.F=0}var D="~";function C(){}Object.create&&(C.prototype=Object.create(null),(new C).__proto__||(D=!1));function ba(a,b,c){this.i=a;this.context=b;this.once=c||!1}function F(a,b,c,d,e){if("function"!==typeof c)throw new TypeError("The listener must be a function");c=new ba(c,d||a,e);b=D?D+b:b;a.a[b]?a.a[b].i?a.a[b]=[a.a[b],c]:a.a[b].push(c):(a.a[b]=c,a.F++);return a}function G(a,b){0===--a.F?a.a=new C:delete a.a[b]}
B.prototype.o=function(a,b,c,d,e,k){var f=D?D+a:a;if(this.a[f]){f=this.a[f];var r=arguments.length,x;if(f.i){f.once&&this.I(a,f.i);switch(r){case 1:f.i.call(f.context);return;case 2:f.i.call(f.context,b);return;case 3:f.i.call(f.context,b,c);return;case 4:f.i.call(f.context,b,c,d);return;case 5:f.i.call(f.context,b,c,d,e);return;case 6:f.i.call(f.context,b,c,d,e,k);return}var l=1;for(x=Array(r-1);l<r;l++)x[l-1]=arguments[l];f.i.apply(f.context,x)}else{var ca=f.length;for(l=0;l<ca;l++)switch(f[l].once&&
this.I(a,f[l].i),r){case 1:f[l].i.call(f[l].context);break;case 2:f[l].i.call(f[l].context,b);break;case 3:f[l].i.call(f[l].context,b,c);break;case 4:f[l].i.call(f[l].context,b,c,d);break;default:if(!x){var E=1;for(x=Array(r-1);E<r;E++)x[E-1]=arguments[E]}f[l].i.apply(f[l].context,x)}}}};B.prototype.J=function(a,b){F(this,a,b,void 0,!1)};B.prototype.once=function(a,b,c){return F(this,a,b,c,!0)};
B.prototype.I=function(a,b){a=D?D+a:a;if(this.a[a])if(b){var c=this.a[a];if(c.i)c.i!==b||!c.once||G(this,a);else{for(var d=0,e=[],k=c.length;d<k;d++)c[d].i===b&&c[d].once||e.push(c[d]);e.length?this.a[a]=1===e.length?e[0]:e:G(this,a)}}else G(this,a)};B.prototype.G=function(){this.a=new C;this.F=0};class H extends B{constructor(a={}){super();this.X=z.a().ba();this.A=this.c=null;this.g=!1;this.props=a;z.a().fa(this);this.created(this.props);this.createdHooks(this.props)}created(){}createdHooks(){}get id(){return this.X}get el(){let a=this.c;a||(a=this.c=document.getElementById(this.id)||z.a().createElement(this.toString()));return a}H(){return`$1 id="${this.id}"`}toString(){if(this.A)return this.A;var a=/^(<[^>]+)/,b=this.template(this.props).trim();if(!b.match(a))throw Error("Template needs to start with a valid tag.");
return this.A=b=b.replace(/\s+/," ").replace(a,this.H())}$$(a){let b=[],c=this.el;c&&(b=[...c.querySelectorAll(a)]);return b}$(a){let b=null,c=this.c;c&&(b=void 0==a?c:c.querySelector(a));return b}render(a,b){if(this.g)return!0;if(!this.c){var c=document.getElementById(this.id);if(!c&&!a)return!1;if(c&&(a=c.parentElement,!b))return this.c=c,this.g=!0,this.onAfterRender(),this.onAfterRenderHooks(),setTimeout(()=>requestAnimationFrame(()=>{})),!0;b=b?b:a&&a.children.length-1||-1;b=a&&a.children[b];
a&&a.insertBefore(this.el,b||null);this.g=!0}this.onAfterRender();this.onAfterRenderHooks();setTimeout(()=>requestAnimationFrame(()=>{}));return!0}get rendered(){if(!this.g){var a=document.getElementById(this.id);a&&(this.c=a,this.g=!0,this.onAfterRender(),this.onAfterRenderHooks())}return this.g}onAfterRender(){}ca(){}onAfterRenderHooks(){const a=(a)=>{this.u[a]&&Object.keys(this.u[a]).forEach((b)=>{const c=this.$$(b),e=this.u[a][b].bind(this);c.forEach((b)=>{b.__ersteEventHandlers=b.__ersteEventHandlers||
{};b.__ersteEventHandlers[a]=e;b.addEventListener(a,e)})})};a("focus");a("blur")}template(){return"<div></div>"}dispose(){z.a().ea(this);this.G();const a=(a)=>{this.u[a]&&Object.keys(this.u[a]).forEach((b)=>{this.$$(b).forEach((b)=>{b.removeEventListener(a,b.__ersteEventHandlers[a])})})};a("focus");a("blur");this.c&&this.c.parentNode&&this.c.parentNode.removeChild(this.c);this.c=null}}H.prototype.dispose=H.prototype.dispose;H.prototype.template=H.prototype.template;
H.prototype.onAfterRenderHooks=H.prototype.onAfterRenderHooks;H.prototype.onAfterRenderAsync=H.prototype.ca;H.prototype.onAfterRender=H.prototype.onAfterRender;H.prototype.render=H.prototype.render;H.prototype.$=H.prototype.$;H.prototype.$$=H.prototype.$$;H.prototype.toString=H.prototype.toString;H.prototype.createdHooks=H.prototype.createdHooks;H.prototype.created=H.prototype.created;H.prototype.events=void 0;H.prototype.events=H.prototype.events;H.prototype.u=void 0;class I extends H{constructor(a={}){super(a)}render(a=document.body,b=0){this.index=b;return super.render(a)}onAfterRender(){super.onAfterRender();this.el.style.zIndex=String(this.index);this.el.style.transform=`translate3d(0, 0, ${this.index}px)`}onActivation(){}O(a){a?(this.el.style.transitionDuration="0s",this.el.style.transform=`translate3d(100%, 0, ${this.index}px)`,requestAnimationFrame(()=>{this.el.style.transitionDuration="0.35s";requestAnimationFrame(()=>{this.el.style.transform=`translate3d(0, 0, ${this.index}px)`;
this.el.style.boxShadow="0 0 24px black"})})):window.requestAnimationFrame(()=>{this.el.style.transitionDuration="0s";this.el.style.transform="translate3d(-30%,0,0)";window.requestAnimationFrame(()=>{this.el.style.transitionDuration="0.35s";this.el.style.transform=`translate3d(0, 0, ${this.index}px)`})})}P(a){const b=()=>{this.el.style.transitionDuration="0s";this.el.style.transform="translate3d(-100%,-100%,0)";this.el.removeEventListener("transitionend",b)};this.el.addEventListener("transitionend",
b);a?requestAnimationFrame(()=>{this.el.style.transitionDuration="0.35s";requestAnimationFrame(()=>{this.el.style.transform=`translate3d(-30%, 0, ${this.index}px)`})}):window.requestAnimationFrame(()=>{this.el.style.transitionDuration="0s";window.requestAnimationFrame(()=>{this.el.style.transitionDuration="0.35s";this.el.style.transform=`translate3d(100%, 0, ${this.index}px)`;this.el.style.boxShadow="0 0 0 black"})})}template(){return"\n<view></view>\n"}H(){return`$1 id="${this.id}" view`}static get WIDTH(){if(!I.a){var a=
window.getComputedStyle(document.body,null);I.a=parseInt(a&&a.width||"0",10)}return I.a}}I.prototype.panOut=I.prototype.P;I.prototype.panIn=I.prototype.O;I.prototype.onActivation=I.prototype.onActivation;I.a=null;I.prototype.index=0;I.prototype.index=I.prototype.index;I.prototype.supportsBackGesture=!1;I.prototype.supportsBackGesture=I.prototype.supportsBackGesture;I.prototype.backGestureTouchTargetWidth=50;I.prototype.backGestureTouchTargetWidth=I.prototype.backGestureTouchTargetWidth;
I.prototype.hasSidebar=!1;I.prototype.hasSidebar=I.prototype.hasSidebar;class J{constructor(a){this.history=[];this.c=[];this.a=K;this.s=this.currentView=this.f=null;this.b=0;this.h=!1;this.o=void 0;a&&(this.o=a)}l(){this.h=!0;if(this.o instanceof I){var a=this.o;if(a.rendered)this.f=a.el;else throw Error("View Manager's root is not rendered yet");}else this.f=this.o||document.body;this.I()}getLastViewInHistory(){return this.history[this.history.length-1]||null}pull(a,b){this.h||this.l();!a.rendered&&this.f&&a.render(this.f,this.g+=2);var c=this.currentView;if(!c)return this.setCurrentView(a);
if(b)this.history.push(c);else{var d=this.history.slice(0);this.history=[];setTimeout(()=>{c.dispose();d.forEach((a)=>a.dispose())},1E3)}a.O(!0);c.P(!0);this.currentView=a;this.currentView.onActivation&&this.currentView.onActivation();this.a=K}canGoBack(){return this.history&&0<this.history.length}push(){var a=this.history.pop(),b=this.currentView;a&&(this.h||this.l(),a.O(!1),b.P(!1),this.currentView=a,a.onActivation&&a.onActivation(),setTimeout(()=>b.dispose(),1E3),this.a=K)}setCurrentView(a,b){this.h||
this.l();!a.rendered&&this.f&&a.render(this.f,this.g+=2);var c=this.currentView;b?c&&(c.el.style.transitionDuration="0s",c.el.style.transform=`translate3d(100%, 0, ${c.index}px)`):setTimeout(()=>c&&c.dispose(),1E3);a.index=this.g+=2;this.currentView=a;this.currentView.onActivation&&this.currentView.onActivation();this.history.forEach((a)=>a.dispose());this.history=[];b=`translate3d(0, 0, ${a.index}px)`;a.el.style.transitionDuration="0s";this.a==L?(b=`translate3d(${128-I.WIDTH}px, 0, ${a.index}px)`,
a.el.style.transform=b,this.j(!1)):(a.el.style.zIndex=String(a.index),a.el.style.transform=b,this.a=K)}toggleSidebar(){this.h||this.l();this.j(this.a==K)}I(){this.f&&(this.f.addEventListener("touchmove",this.H.bind(this),!1),this.f.addEventListener("touchend",this.J.bind(this),!1))}H(a){var b=a.changedTouches&&a.changedTouches[0].clientX||0;clearTimeout(this.s);if(this.a==K||this.a==L)this.b=b;this.a==K&&(this.c=[],this.a=M);this.a==M&&(b<=this.currentView.backGestureTouchTargetWidth?this.history.length&&
this.currentView&&this.currentView.supportsBackGesture&&(this.a=N):this.currentView&&this.currentView.hasSidebar&&(this.c.push(this.b-b),4==this.c.length&&this.c.shift(),40<this.c[2]-this.c[0]&&(this.a=O)));this.a==L&&(this.a=P);switch(this.a){case N:this.F(a);break;case P:this.G(a);break;case O:this.B(a)}}J(a){switch(this.a){case N:this.A(a);break;case O:a=!0;3>this.c[2]-this.c[0]&&(a=!1);this.j(a);break;case P:a=!0;-3>this.c[2]-this.c[0]&&(a=!1);this.j(a);break;case L:if(z.a().N.w)break;this.j(!1);
break;default:this.a=K}}A(a){if(this.b){var b=this.history,c=this.getLastViewInHistory(),d=this.currentView,e=a.changedTouches&&a.changedTouches[0].clientX||0,k=.15+(I.WIDTH-e)/I.WIDTH*(.35-.15);window.requestAnimationFrame(()=>{d.el.style.transitionDuration=k+"s";c.el.style.transitionDuration=k+"s";var a="100%",r="0";if(e<I.WIDTH/2){a="0";r="-30%";const b=()=>{c.el.style.transitionDuration="0s";c.el.style.transform="translate3d(-100%,-100%,0)";c.el.removeEventListener("transitionend",b)};c.el.addEventListener("transitionend",
b)}else this.currentView=this.getLastViewInHistory(),b.pop(),c.onActivation&&c.onActivation(),setTimeout(()=>{d.dispose()},1E3);d.el.style.transform=`translate3d(${a}, 0, ${d.index}px)`;c.el.style.transform=`translate3d(${r}, 0, ${d.index-1}px)`;d.el.style.boxShadow="0px 0 0px black"});this.a=K}}F(a){if(this.history.length){a.preventDefault();var b=this.history[this.history.length-1],c=this.currentView,d=(a.changedTouches&&a.changedTouches[0].clientX||0)-this.b;a=I.WIDTH;var e=Math.floor(n(.3*-a,
d/(a-this.b))),k=Math.floor(5*(1+d/(a-this.b)*-1))/5;0>d||window.requestAnimationFrame(()=>{c.el.style.transitionDuration="0s";b.el.style.transitionDuration="0s";c.el.style.transform=`translate3d(${d}px, 0, ${c.index}px)`;b.el.style.transform=`translate3d(${e}px, 0, ${c.index-1}px)`;c.el.style.boxShadow=`0px 0 24px rgba(0, 0, 0, ${k})`})}}G(a){var b=a.changedTouches&&a.changedTouches[0].clientX||0;this.c.push(this.b-b);4==this.c.length&&this.c.shift();a.preventDefault();var c=this.currentView,d=b-
this.b-4*I.WIDTH/5;window.requestAnimationFrame(()=>{c.el.style.transitionDuration="0s";c.el.style.transform=`translate3d(${d}px, 0, ${c.index}px)`})}j(a){var b=this.currentView,c=document.querySelector("sidebar");requestAnimationFrame(()=>{b.el.style.transitionDuration="0.35s";var d=`${128-I.WIDTH}px`,e="0",k=`${b.index-1}px`;a?c.style.transform=`translate3d(${e}, 0, ${k})`:(d="0",e="100%",k="0",this.s=setTimeout(()=>{this.a==K&&(c.style.transform=`translate3d(${e}, 0, ${k})`)},1E3));b.el.style.transform=
`translate3d(${d}, 0, ${b.index}px)`});this.a=a?L:K}B(a){if(!z.a().N.w){var b=a.changedTouches&&a.changedTouches[0].clientX||0;this.c.push(this.b-b);4==this.c.length&&this.c.shift();a.preventDefault();var c=document.querySelector("sidebar"),d=this.currentView,e=b-this.b;0<=e||(this.a=O,window.requestAnimationFrame(()=>{c.style.transform=`translate3d(0, 0, ${d.index-1}px)`;c.style.transitionDuration="0s";d.el.style.transitionDuration="0s";d.el.style.transform=`translate3d(${e}px, 0, ${d.index}px)`}))}}}
J.prototype.toggleSidebar=J.prototype.toggleSidebar;J.prototype.setCurrentView=J.prototype.setCurrentView;J.prototype.push=J.prototype.push;J.prototype.canGoBack=J.prototype.canGoBack;J.prototype.pull=J.prototype.pull;J.prototype.getLastViewInHistory=J.prototype.getLastViewInHistory;var K="default",M="started",P="closingSidebar",O="openingSidebar",L="sidebarOpen",N="going";h("ViewManager$$module$lib$view_manager.State",{v:K,la:M,ha:P,ja:O,ka:L,ia:N});J.prototype.g=1;
window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};var Q={en:{__name:"English"}},R=Q.en;const S=(a,...b)=>(R[a]||a).replace(/{(\d+)}/g,(a,d)=>"undefined"!=typeof b[d]?b[d]:a);var T={setDictionary:(a,b)=>{Q[a]=b},setLanguage:(a)=>{R=Q[a]},getLocalizedString:S,__:S};class U extends H{constructor(){super();this.vm=null}onSidebarItemTap(a){if(a=a.m&&a.m.getAttribute&&a.m.getAttribute("data-view"))this.o(U.EventType.SWITCH_VIEW,{view:a}),this.vm&&this.vm.toggleSidebar()}template(){return`
<sidebar>
    <sidebar-items>${this.template_items()}</sidebar-items>
</sidebar>
`}template_items(){return""}get b(){return{C:"sidebar-item"}}get events(){return{tap:{[this.b.C]:this.onSidebarItemTap}}}static get EventType(){return{SWITCH_VIEW:"switchView"}}}U.prototype.template_items=U.prototype.template_items;U.prototype.onSidebarItemTap=U.prototype.onSidebarItemTap;class V extends I{constructor(){super();this.vm=null;this.views=[];this.activeItemIndex=null}onAfterRender(){super.onAfterRender();var a=this.$(this.b.aa);if(!a)throw Error("TabView template must have <views>");this.vm=new J(a);this.activateItem(0)}onItemTap(a){var b=this.$(this.b.V);b&&b==a.m||(b=this.$(this.b.R),this.activateItem([].indexOf.call(b&&b.children,a.m)))}activateItem(a){if(!(0>a)){this.deactivateActiveItem();var b=this.$$(this.b.C)[a];b&&b.classList.add("active");this.views&&this.views[a]&&
(this.vm.setCurrentView(this.views[a],!0),this.views[a].el.classList.add("active"));this.activeItemIndex=a}}activateItemByName(a){if(a=this.$(this.b.C+"[data-view="+a+"]")){var b=this.$(this.b.R);this.activateItem([].indexOf.call(b&&b.children,a))}}deactivateActiveItem(){this.$$(this.b.U).forEach((a)=>a.classList.remove("active"))}template(){return`
<tab-view>
    ${this.template_views()}
    <tab-bar>
        <tab-items>
            ${this.template_items()}
        </tab-items>
    </tab-bar>
</tab-view>
`}template_views(){return`<views>${this.views.join("")}</views>`}template_items(){return""}get b(){return{C:"tab-item",R:"tab-items",U:".active",V:"tab-items .active",ga:"views .active",aa:"views"}}get events(){return{touchend:{[this.b.C]:this.onItemTap.bind(this)}}}}V.prototype.template_items=V.prototype.template_items;V.prototype.template_views=V.prototype.template_views;V.prototype.deactivateActiveItem=V.prototype.deactivateActiveItem;V.prototype.activateItemByName=V.prototype.activateItemByName;
V.prototype.activateItem=V.prototype.activateItem;V.prototype.onItemTap=V.prototype.onItemTap;class W extends H{constructor(a={hasBackButton:!1,hasMenuButton:!1,title:""}){super();this.vm=null;this.config=a}onBackButtonTap(){this.vm&&this.vm.push()}onMenuButtonTap(){this.vm&&this.vm.toggleSidebar()}template(){var a=this.config,b="",c="";a.hasBackButton&&(b="<back-button></back-button>");a.hasMenuButton&&(c="<menu-button></menu-button>");return`
<nav-bar>${b}${c}${a.title}</nav-bar>
`}get b(){return{W:"back-button",Z:"menu-button"}}get events(){return{tap:{[this.b.W]:this.onBackButtonTap,[this.b.Z]:this.onMenuButtonTap}}}}W.prototype.onMenuButtonTap=W.prototype.onMenuButtonTap;W.prototype.onBackButtonTap=W.prototype.onBackButtonTap;W.a=null;class da extends B{constructor(){super();this.reset();this.b=this.c.v}reset(){this.b=this.c.v}h(){this.b!=this.c.S&&(this.b=this.c.D)}g(){return this.b==this.c.D}f(){this.g()&&(this.b=this.c.S,this.o(this.EventType.SHOULD_REFRESH))}get c(){return{v:"default",D:"shouldCheck",S:"refreshing"}}get EventType(){return{SHOULD_REFRESH:"refresh"}}};class X extends H{constructor(a){super();this.b=new da;this.EventType=this.b.EventType;this.s=this.h=this.l=this.f=null;a&&this.register(a);this.B()}B(){this.b.J(this.b.EventType.SHOULD_REFRESH,this.onShouldRefresh.bind(this))}onShouldRefresh(){var a=this.$(this.j.T),b=this.$(this.j.K);window.requestAnimationFrame(()=>{this.l.style.transform=`translateY(${this.height}px)`;this.l.style.transition="800ms cubic-bezier(.41,1,.1,1)";a&&(a.style.opacity="1");b&&(b.style.opacity="0");this.o(this.b.EventType.SHOULD_REFRESH)})}onAfterRender(){super.onAfterRender();
this.f||this.register(this.el.parentElement)}reset(){this.f&&(this.l.style.transform="translateY(0)",this.l.style.transition="300ms ease-out");var a=this.$(this.j.T),b=this.$(this.j.K);a&&(a.style.opacity="0");setTimeout(()=>{b&&(b.style.opacity="1")},500);this.b.reset()}register(a,b){a&&(this.h&&this.f.removeEventListener("scroll",this.h),this.s&&document.body.removeEventListener("touchend",this.s),this.f=a,this.l=b?b:a,this.reset(),this.h=this.L.bind(this),this.s=this.Y.bind(this),this.f.addEventListener("scroll",
this.h),document.body.addEventListener("touchend",this.s))}L(a){this.M();var b=0,c=-(a.target&&a.target.scrollTop||0);a=this.arrowOffset+Math.pow(c,.75);var d=this.threshold-60;c>=d&&(b=Math.min(180,3*(c-d)));if(c=this.$(this.j.K))c.style.transform=`translateY(${a}px) rotate(${b}deg)`}Y(){this.f.scrollTop<-this.threshold&&this.b.f()}M(){this.b.h()}template(){return'\n<pull-to-refresh>\n    <pull-to-refresh-arrow></pull-to-refresh-arrow>\n    <div class="spinner"></div>\n</pull-to-refresh>\n'}dispose(){this.b.G();
this.el&&this.el.removeEventListener("scroll",this.h);document.body.removeEventListener("touchend",this.s);super.dispose()}get j(){return{K:"pull-to-refresh-arrow",T:".spinner"}}}X.prototype.register=X.prototype.register;X.prototype.reset=X.prototype.reset;X.prototype.onShouldRefresh=X.prototype.onShouldRefresh;X.prototype.threshold=135;X.prototype.threshold=X.prototype.threshold;X.prototype.height=96;X.prototype.height=X.prototype.height;X.prototype.arrowOffset=0;X.prototype.arrowOffset=X.prototype.arrowOffset;class ea extends B{constructor(){super();this.b=this.c.v}reset(){this.b=this.c.v}g(){this.b!=this.c.LOADING&&(this.b=this.c.D)}f(){return this.b==this.c.D}load(){this.f()&&(this.b=this.c.LOADING,this.o(this.EventType.SHOULD_LOAD))}get c(){return{v:"default",D:"shouldCheck",LOADING:"loading"}}get EventType(){return{SHOULD_LOAD:"load"}}};/*
 Throttle function

 https://remysharp.com/2010/07/21/throttling-function-calls

 Copyright (c) 2010 Remy Sharp
*/
var fa=(a,b)=>{var c=0,d;return(...e)=>{var k=+new Date;c&&k<c+100?(clearTimeout(d),d=setTimeout(()=>{c=k;a.apply(b,e)},100+c-k)):(c=k,a.apply(b,e))}};class Y extends H{constructor(a){super();this.b=new ea;this.EventType=this.b.EventType;this.f=this.h=null;this.j="";this.M=fa(this.B,this);a&&this.register(a);this.l()}l(){this.b.J(this.b.EventType.SHOULD_LOAD,this.L.bind(this))}L(){this.o(this.EventType.SHOULD_LOAD)}render(a,b){a=super.render(a,b);this.el||this.register(this.el.parentElement);return a}reset(){this.b.reset()}register(a){a&&(this.reset(),this.f&&this.f.removeEventListener("scroll",this.h),this.f=a,this.h=this.s.bind(this),this.f.addEventListener("scroll",
this.h))}s(){this.M()}B(){this.b.g();if(this.b.f()){var a=this.f;a&&a.scrollHeight>a.offsetHeight&&a.scrollTop>a.scrollHeight-a.offsetHeight-400&&this.b.load()}}showSpinner(){this.el.classList.add("spinner");this.el.innerText="";this.reset()}showEndOfList(){this.el.innerText=this.j;this.el.classList.remove("spinner")}template(){return"<inf-scroll></inf-scroll>"}dispose(){this.b.G();this.f.removeEventListener("scroll",this.h);super.dispose()}}Y.prototype.showEndOfList=Y.prototype.showEndOfList;
Y.prototype.showSpinner=Y.prototype.showSpinner;Y.prototype.register=Y.prototype.register;Y.prototype.reset=Y.prototype.reset;const Z={Component:H,ViewManager:J,View:I,locale:T,Sidebar:U,TabView:V,NavBar:W,PullToRefresh:X,InfiniteScroll:Y,__:T.__};h("erste$$module$index",Z);Z.use=function(a){a.$$register(this)}.bind(Z);Z.use=Z.use;
const erste = this.$jscompDefaultExport$$module$index;if(typeof define=='function'&&define.amd){define(function(){return erste})}else if(typeof module=='object'&&typeof exports=='object'){module.exports=erste}else{window.erste=erste}}).call(null, {});

//# sourceMappingURL=erste.js.map
