webpackJsonp([0],{/***/
"../node_modules/bootstrap/dist/js/bootstrap.js":/***/
function(e,t,n){/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,i){i(t,n("../node_modules/jquery/dist/jquery.js"),n("../node_modules/popper.js/dist/esm/popper.js"))}(0,function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){o(e,t,n[t])})}return e}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
var l=function(e){// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function t(e){return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function n(){return{bindType:r,delegateType:r,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function i(t){var n=this,i=!1;return e(this).one(o.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||o.triggerTransitionEnd(n)},t),this}/**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
var r="transitionend",o={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{
// eslint-disable-next-line no-bitwise
e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{return e(document).find(n).length>0?n:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;// Get transition-duration of the element
var n=e(t).css("transition-duration");// Return 0 if element or transition duration is not found
// Return 0 if element or transition duration is not found
// If multiple durations are defined, take the first
return parseFloat(n)?(n=n.split(",")[0],1e3*parseFloat(n)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(r)},
// TODO: Remove in v5
supportsTransitionEnd:function(){return Boolean(r)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,n,i){for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){var a=i[r],s=n[r],l=s&&o.isElement(s)?"element":t(s);if(!new RegExp(a).test(l))throw new Error(e.toUpperCase()+': Option "'+r+'" provided type "'+l+'" but expected type "'+a+'".')}}};return function(){e.fn.emulateTransitionEnd=i,e.event.special[o.TRANSITION_END]=n()}(),o}(t),d=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="alert",n=e.fn[t],i={DISMISS:'[data-dismiss="alert"]'},o={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},a={ALERT:"alert",FADE:"fade",SHOW:"show"},s=/*#__PURE__*/
function(){function t(e){this._element=e}// Getters
var n=t.prototype;
// Public
// Private
// Static
return n.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=l.getSelectorFromElement(t),i=!1;return n&&(i=e(n)[0]),i||(i=e(t).closest("."+a.ALERT)[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(o.CLOSE);return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass(a.SHOW),!e(t).hasClass(a.FADE))return void this._destroyElement(t);var i=l.getTransitionDurationFromElement(t);e(t).one(l.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(i)},n._destroyElement=function(t){e(t).detach().trigger(o.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),r=i.data("bs.alert");r||(r=new t(this),i.data("bs.alert",r)),"close"===n&&r[n](this)})},t._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(o.CLICK_DATA_API,i.DISMISS,s._handleDismiss(new s)),e.fn[t]=s._jQueryInterface,e.fn[t].Constructor=s,e.fn[t].noConflict=function(){return e.fn[t]=n,s._jQueryInterface},s}(t),c=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="button",n=e.fn[t],i={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},o={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},a={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},s=/*#__PURE__*/
function(){function t(e){this._element=e}// Getters
var n=t.prototype;
// Public
// Static
return n.toggle=function(){var t=!0,n=!0,r=e(this._element).closest(o.DATA_TOGGLE)[0];if(r){var a=e(this._element).find(o.INPUT)[0];if(a){if("radio"===a.type)if(a.checked&&e(this._element).hasClass(i.ACTIVE))t=!1;else{var s=e(r).find(o.ACTIVE)[0];s&&e(s).removeClass(i.ACTIVE)}if(t){if(a.hasAttribute("disabled")||r.hasAttribute("disabled")||a.classList.contains("disabled")||r.classList.contains("disabled"))return;a.checked=!e(this._element).hasClass(i.ACTIVE),e(a).trigger("change")}a.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(i.ACTIVE)),t&&e(this._element).toggleClass(i.ACTIVE)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()})},r(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(a.CLICK_DATA_API,o.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(i.BUTTON)||(n=e(n).closest(o.BUTTON)),s._jQueryInterface.call(e(n),"toggle")}).on(a.FOCUS_BLUR_DATA_API,o.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(o.BUTTON)[0];e(n).toggleClass(i.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=s._jQueryInterface,e.fn[t].Constructor=s,e.fn[t].noConflict=function(){return e.fn[t]=n,s._jQueryInterface},s}(t),u=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="carousel",n="bs.carousel",i="."+n,o=e.fn[t],s={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},d={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},u={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},p={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},h={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},g=/*#__PURE__*/
function(){function o(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(h.INDICATORS)[0],this._addEventListeners()}// Getters
var g=o.prototype;
// Public
// Private
// Static
return g.next=function(){this._isSliding||this._slide(c.NEXT)},g.nextWhenVisible=function(){
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},g.prev=function(){this._isSliding||this._slide(c.PREV)},g.pause=function(t){t||(this._isPaused=!0),e(this._element).find(h.NEXT_PREV)[0]&&(l.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},g.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},g.to=function(t){var n=this;this._activeElement=e(this._element).find(h.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0)){if(this._isSliding)return void e(this._element).one(u.SLID,function(){return n.to(t)});if(i===t)return this.pause(),void this.cycle();var r=t>i?c.NEXT:c.PREV;this._slide(r,this._items[t])}},g.dispose=function(){e(this._element).off(i),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},g._getConfig=function(e){return e=a({},s,e),l.typeCheckConfig(t,e,d),e},g._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(u.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(u.MOUSEENTER,function(e){return t.pause(e)}).on(u.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&
// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
e(this._element).on(u.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},g._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},g._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(h.ITEM)),this._items.indexOf(t)},g._getItemByDirection=function(e,t){var n=e===c.NEXT,i=e===c.PREV,r=this._getItemIndex(t),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return t;var a=e===c.PREV?-1:1,s=(r+a)%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},g._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),r=this._getItemIndex(e(this._element).find(h.ACTIVE_ITEM)[0]),o=e.Event(u.SLIDE,{relatedTarget:t,direction:n,from:r,to:i});return e(this._element).trigger(o),o},g._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(h.ACTIVE).removeClass(p.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(p.ACTIVE)}},g._slide=function(t,n){var i,r,o,a=this,s=e(this._element).find(h.ACTIVE_ITEM)[0],d=this._getItemIndex(s),g=n||s&&this._getItemByDirection(t,s),f=this._getItemIndex(g),m=Boolean(this._interval);if(t===c.NEXT?(i=p.LEFT,r=p.NEXT,o=c.LEFT):(i=p.RIGHT,r=p.PREV,o=c.RIGHT),g&&e(g).hasClass(p.ACTIVE))return void(this._isSliding=!1);if(!this._triggerSlideEvent(g,o).isDefaultPrevented()&&s&&g){this._isSliding=!0,m&&this.pause(),this._setActiveIndicatorElement(g);var v=e.Event(u.SLID,{relatedTarget:g,direction:o,from:d,to:f});if(e(this._element).hasClass(p.SLIDE)){e(g).addClass(r),l.reflow(g),e(s).addClass(i),e(g).addClass(i);var y=l.getTransitionDurationFromElement(s);e(s).one(l.TRANSITION_END,function(){e(g).removeClass(i+" "+r).addClass(p.ACTIVE),e(s).removeClass(p.ACTIVE+" "+r+" "+i),a._isSliding=!1,setTimeout(function(){return e(a._element).trigger(v)},0)}).emulateTransitionEnd(y)}else e(s).removeClass(p.ACTIVE),e(g).addClass(p.ACTIVE),this._isSliding=!1,e(this._element).trigger(v);m&&this.cycle()}},o._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(n),r=a({},s,e(this).data());"object"==typeof t&&(r=a({},r,t));var l="string"==typeof t?t:r.slide;if(i||(i=new o(this,r),e(this).data(n,i)),"number"==typeof t)i.to(t);else if("string"==typeof l){if(void 0===i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else r.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(t){var i=l.getSelectorFromElement(this);if(i){var r=e(i)[0];if(r&&e(r).hasClass(p.CAROUSEL)){var s=a({},e(r).data(),e(this).data()),d=this.getAttribute("data-slide-to");d&&(s.interval=!1),o._jQueryInterface.call(e(r),s),d&&e(r).data(n).to(d),t.preventDefault()}}},r(o,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return s}}]),o}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(u.CLICK_DATA_API,h.DATA_SLIDE,g._dataApiClickHandler),e(window).on(u.LOAD_DATA_API,function(){e(h.DATA_RIDE).each(function(){var t=e(this);g._jQueryInterface.call(t,t.data())})}),e.fn[t]=g._jQueryInterface,e.fn[t].Constructor=g,e.fn[t].noConflict=function(){return e.fn[t]=o,g._jQueryInterface},g}(t),p=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="collapse",n="bs.collapse",i=e.fn[t],o={toggle:!0,parent:""},s={toggle:"boolean",parent:"(string|element)"},d={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},c={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},u={WIDTH:"width",HEIGHT:"height"},p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},h=/*#__PURE__*/
function(){function i(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var i=e(p.DATA_TOGGLE),r=0;r<i.length;r++){var o=i[r],a=l.getSelectorFromElement(o);null!==a&&e(a).filter(t).length>0&&(this._selector=a,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}// Getters
var h=i.prototype;
// Public
// Private
// Static
return h.toggle=function(){e(this._element).hasClass(c.SHOW)?this.hide():this.show()},h.show=function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(c.SHOW)){var r,o;if(this._parent&&(r=e.makeArray(e(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]')),0===r.length&&(r=null)),!(r&&(o=e(r).not(this._selector).data(n))&&o._isTransitioning)){var a=e.Event(d.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){r&&(i._jQueryInterface.call(e(r).not(this._selector),"hide"),o||e(r).data(n,null));var s=this._getDimension();e(this._element).removeClass(c.COLLAPSE).addClass(c.COLLAPSING),this._element.style[s]=0,this._triggerArray.length>0&&e(this._triggerArray).removeClass(c.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var u=function(){e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).addClass(c.SHOW),t._element.style[s]="",t.setTransitioning(!1),e(t._element).trigger(d.SHOWN)},h=s[0].toUpperCase()+s.slice(1),g="scroll"+h,f=l.getTransitionDurationFromElement(this._element);e(this._element).one(l.TRANSITION_END,u).emulateTransitionEnd(f),this._element.style[s]=this._element[g]+"px"}}}},h.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(c.SHOW)){var n=e.Event(d.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",l.reflow(this._element),e(this._element).addClass(c.COLLAPSING).removeClass(c.COLLAPSE).removeClass(c.SHOW),this._triggerArray.length>0)for(var r=0;r<this._triggerArray.length;r++){var o=this._triggerArray[r],a=l.getSelectorFromElement(o);if(null!==a){var s=e(a);s.hasClass(c.SHOW)||e(o).addClass(c.COLLAPSED).attr("aria-expanded",!1)}}this.setTransitioning(!0);var u=function(){t.setTransitioning(!1),e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).trigger(d.HIDDEN)};this._element.style[i]="";var p=l.getTransitionDurationFromElement(this._element);e(this._element).one(l.TRANSITION_END,u).emulateTransitionEnd(p)}}},h.setTransitioning=function(e){this._isTransitioning=e},h.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},h._getConfig=function(e){// Coerce string values
return e=a({},o,e),e.toggle=Boolean(e.toggle),l.typeCheckConfig(t,e,s),e},h._getDimension=function(){return e(this._element).hasClass(u.WIDTH)?u.WIDTH:u.HEIGHT},h._getParent=function(){var t=this,n=null;l.isElement(this._config.parent)?(n=this._config.parent,// It's a jQuery object
void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(r).each(function(e,n){t._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},h._addAriaAndCollapsedClass=function(t,n){if(t){var i=e(t).hasClass(c.SHOW);n.length>0&&e(n).toggleClass(c.COLLAPSED,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(t){var n=l.getSelectorFromElement(t);return n?e(n)[0]:null},i._jQueryInterface=function(t){return this.each(function(){var r=e(this),s=r.data(n),l=a({},o,r.data(),"object"==typeof t&&t?t:{});if(!s&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),s||(s=new i(this,l),r.data(n,s)),"string"==typeof t){if(void 0===s[t])throw new TypeError('No method named "'+t+'"');s[t]()}})},r(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return o}}]),i}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(d.CLICK_DATA_API,p.DATA_TOGGLE,function(t){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
"A"===t.currentTarget.tagName&&t.preventDefault();var i=e(this),r=l.getSelectorFromElement(this);e(r).each(function(){var t=e(this),r=t.data(n),o=r?"toggle":i.data();h._jQueryInterface.call(t,o)})}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=i,h._jQueryInterface},h}(t),h=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="dropdown",i="bs.dropdown",o="."+i,s=e.fn[t],d=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},u={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},p={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"},h={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},g={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},f={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},m=/*#__PURE__*/
function(){function s(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}// Getters
var m=s.prototype;
// Public
// Private
// Static
// eslint-disable-next-line complexity
return m.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(u.DISABLED)){var t=s._getParentFromElement(this._element),i=e(this._menu).hasClass(u.SHOW);if(s._clearMenus(),!i){var r={relatedTarget:this._element},o=e.Event(c.SHOW,r);if(e(t).trigger(o),!o.isDefaultPrevented()){// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar){/**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
if(void 0===n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var a=this._element;"parent"===this._config.reference?a=t:l.isElement(this._config.reference)&&(a=this._config.reference,// Check if it's jQuery element
void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
"scrollParent"!==this._config.boundary&&e(t).addClass(u.POSITION_STATIC),this._popper=new n(a,this._menu,this._getPopperConfig())}// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&0===e(t).closest(p.NAVBAR_NAV).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(u.SHOW),e(t).toggleClass(u.SHOW).trigger(e.Event(c.SHOWN,r))}}}},m.dispose=function(){e.removeData(this._element,i),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},m.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},m._addEventListeners=function(){var t=this;e(this._element).on(c.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},m._getConfig=function(n){return n=a({},this.constructor.Default,e(this._element).data(),n),l.typeCheckConfig(t,n,this.constructor.DefaultType),n},m._getMenuElement=function(){if(!this._menu){var t=s._getParentFromElement(this._element);this._menu=e(t).find(p.MENU)[0]}return this._menu},m._getPlacement=function(){var t=e(this._element).parent(),n=h.BOTTOM;// Handle dropup
return t.hasClass(u.DROPUP)?(n=h.TOP,e(this._menu).hasClass(u.MENURIGHT)&&(n=h.TOPEND)):t.hasClass(u.DROPRIGHT)?n=h.RIGHT:t.hasClass(u.DROPLEFT)?n=h.LEFT:e(this._menu).hasClass(u.MENURIGHT)&&(n=h.BOTTOMEND),n},m._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},m._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},s._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(i),r="object"==typeof t?t:null;if(n||(n=new s(this,r),e(this).data(i,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},s._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(p.DATA_TOGGLE)),r=0;r<n.length;r++){var o=s._getParentFromElement(n[r]),a=e(n[r]).data(i),l={relatedTarget:n[r]};if(a){var d=a._menu;if(e(o).hasClass(u.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(o,t.target))){var h=e.Event(c.HIDE,l);e(o).trigger(h),h.isDefaultPrevented()||(// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),n[r].setAttribute("aria-expanded","false"),e(d).removeClass(u.SHOW),e(o).removeClass(u.SHOW).trigger(e.Event(c.HIDDEN,l)))}}}},s._getParentFromElement=function(t){var n,i=l.getSelectorFromElement(t);return i&&(n=e(i)[0]),n||t.parentNode},s._dataApiKeydownHandler=function(t){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||e(t.target).closest(p.MENU).length)):d.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(u.DISABLED))){var n=s._getParentFromElement(this),i=e(n).hasClass(u.SHOW);if(!i&&(27!==t.which||32!==t.which)||i&&(27===t.which||32===t.which)){if(27===t.which){var r=e(n).find(p.DATA_TOGGLE)[0];e(r).trigger("focus")}return void e(this).trigger("click")}var o=e(n).find(p.VISIBLE_ITEMS).get();if(0!==o.length){var a=o.indexOf(t.target);38===t.which&&a>0&&
// Up
a--,40===t.which&&a<o.length-1&&
// Down
a++,a<0&&(a=0),o[a].focus()}}},r(s,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return g}},{key:"DefaultType",get:function(){return f}}]),s}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(c.KEYDOWN_DATA_API,p.DATA_TOGGLE,m._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,p.MENU,m._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,m._clearMenus).on(c.CLICK_DATA_API,p.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),m._jQueryInterface.call(e(this),"toggle")}).on(c.CLICK_DATA_API,p.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=s,m._jQueryInterface},m}(t),g=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="modal",n=".bs.modal",i=e.fn[t],o={backdrop:!0,keyboard:!0,focus:!0,show:!0},s={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},d={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},c={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},u={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=/*#__PURE__*/
function(){function i(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(u.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}// Getters
var p=i.prototype;
// Public
// Private
// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
// Static
return p.toggle=function(e){return this._isShown?this.hide():this.show(e)},p.show=function(t){var n=this;if(!this._isTransitioning&&!this._isShown){e(this._element).hasClass(c.FADE)&&(this._isTransitioning=!0);var i=e.Event(d.SHOW,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(c.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(d.CLICK_DISMISS,u.DATA_DISMISS,function(e){return n.hide(e)}),e(this._dialog).on(d.MOUSEDOWN_DISMISS,function(){e(n._element).one(d.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},p.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=e.Event(d.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=e(this._element).hasClass(c.FADE);if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(d.FOCUSIN),e(this._element).removeClass(c.SHOW),e(this._element).off(d.CLICK_DISMISS),e(this._dialog).off(d.MOUSEDOWN_DISMISS),r){var o=l.getTransitionDurationFromElement(this._element);e(this._element).one(l.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},p.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(e){return e=a({},o,e),l.typeCheckConfig(t,e,s),e},p._showElement=function(t){var n=this,i=e(this._element).hasClass(c.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||
// Don't move modal's DOM position
document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&l.reflow(this._element),e(this._element).addClass(c.SHOW),this._config.focus&&this._enforceFocus();var r=e.Event(d.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)};if(i){var a=l.getTransitionDurationFromElement(this._element);e(this._dialog).one(l.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},p._enforceFocus=function(){var t=this;e(document).off(d.FOCUSIN).on(d.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},p._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(d.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(d.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var t=this;this._isShown?e(window).on(d.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(d.RESIZE)},p._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(c.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(d.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(c.FADE)?c.FADE:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=c.BACKDROP,i&&e(this._backdrop).addClass(i),e(this._backdrop).appendTo(document.body),e(this._element).on(d.CLICK_DISMISS,function(e){if(n._ignoreBackdropClick)return void(n._ignoreBackdropClick=!1);e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),i&&l.reflow(this._backdrop),e(this._backdrop).addClass(c.SHOW),!t)return;if(!i)return void t();var r=l.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(l.TRANSITION_END,t).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(c.SHOW);var o=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass(c.FADE)){var a=l.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(l.TRANSITION_END,o).emulateTransitionEnd(a)}else o()}else t&&t()},p._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
// Adjust fixed content padding
e(u.FIXED_CONTENT).each(function(n,i){var r=e(i)[0].style.paddingRight,o=e(i).css("padding-right");e(i).data("padding-right",r).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),// Adjust sticky content margin
e(u.STICKY_CONTENT).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right");e(i).data("margin-right",r).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}),// Adjust navbar-toggler margin
e(u.NAVBAR_TOGGLER).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right");e(i).data("margin-right",r).css("margin-right",parseFloat(o)+t._scrollbarWidth+"px")});// Adjust body padding
var n=document.body.style.paddingRight,i=e(document.body).css("padding-right");e(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){
// Restore fixed content padding
e(u.FIXED_CONTENT).each(function(t,n){var i=e(n).data("padding-right");void 0!==i&&e(n).css("padding-right",i).removeData("padding-right")}),// Restore sticky content and navbar-toggler margin
e(u.STICKY_CONTENT+", "+u.NAVBAR_TOGGLER).each(function(t,n){var i=e(n).data("margin-right");void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")});// Restore body padding
var t=e(document.body).data("padding-right");void 0!==t&&e(document.body).css("padding-right",t).removeData("padding-right")},p._getScrollbarWidth=function(){
// thx d.walsh
var e=document.createElement("div");e.className=c.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},i._jQueryInterface=function(t,n){return this.each(function(){var r=e(this).data("bs.modal"),s=a({},o,e(this).data(),"object"==typeof t&&t?t:{});if(r||(r=new i(this,s),e(this).data("bs.modal",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t](n)}else s.show&&r.show(n)})},r(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return o}}]),i}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(d.CLICK_DATA_API,u.DATA_TOGGLE,function(t){var n,i=this,r=l.getSelectorFromElement(this);r&&(n=e(r)[0]);var o=e(n).data("bs.modal")?"toggle":a({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=e(n).one(d.SHOW,function(t){t.isDefaultPrevented()||s.one(d.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});p._jQueryInterface.call(e(n),o,this)}),e.fn[t]=p._jQueryInterface,e.fn[t].Constructor=p,e.fn[t].noConflict=function(){return e.fn[t]=i,p._jQueryInterface},p}(t),f=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="tooltip",i=".bs.tooltip",o=e.fn[t],s=new RegExp("(^|\\s)bs-tooltip\\S+","g"),d={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},p={SHOW:"show",OUT:"out"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g={FADE:"fade",SHOW:"show"},f={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},m={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},v=/*#__PURE__*/
function(){function o(e,t){/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
if(void 0===n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");// private
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,// Protected
this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}// Getters
var v=o.prototype;
// Public
// Protected
// Private
// Static
return v.enable=function(){this._isEnabled=!0},v.disable=function(){this._isEnabled=!1},v.toggleEnabled=function(){this._isEnabled=!this._isEnabled},v.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(g.SHOW))return void this._leave(null,this);this._enter(null,this)}},v.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},v.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var r=e.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!r)return;var o=this.getTipElement(),a=l.getUID(this.constructor.NAME);o.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(o).addClass(g.FADE);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,d=this._getAttachment(s);this.addAttachmentClass(d);var c=!1===this.config.container?document.body:e(this.config.container);e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(c),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,o,{placement:d,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:f.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(o).addClass(g.SHOW),// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var u=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===p.OUT&&t._leave(null,t)};if(e(this.tip).hasClass(g.FADE)){var h=l.getTransitionDurationFromElement(this.tip);e(this.tip).one(l.TRANSITION_END,u).emulateTransitionEnd(h)}else u()}},v.hide=function(t){var n=this,i=this.getTipElement(),r=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==p.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(r),!r.isDefaultPrevented()){if(e(i).removeClass(g.SHOW),// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[m.CLICK]=!1,this._activeTrigger[m.FOCUS]=!1,this._activeTrigger[m.HOVER]=!1,e(this.tip).hasClass(g.FADE)){var a=l.getTransitionDurationFromElement(i);e(i).one(l.TRANSITION_END,o).emulateTransitionEnd(a)}else o();this._hoverState=""}},v.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},v.isWithContent=function(){return Boolean(this.getTitle())},v.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},v.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},v.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(f.TOOLTIP_INNER),this.getTitle()),t.removeClass(g.FADE+" "+g.SHOW)},v.setElementContent=function(t,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?
// Content is a DOM node or a jQuery
i?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[i?"html":"text"](n)},v.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},v._getAttachment=function(e){return c[e.toUpperCase()]},v._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==m.MANUAL){var i=n===m.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,r=n===m.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(r,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},v._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},v._enter=function(t,n){var i=this.constructor.DATA_KEY;return n=n||e(t.currentTarget).data(i),n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?m.FOCUS:m.HOVER]=!0),e(n.getTipElement()).hasClass(g.SHOW)||n._hoverState===p.SHOW?void(n._hoverState=p.SHOW):(clearTimeout(n._timeout),n._hoverState=p.SHOW,n.config.delay&&n.config.delay.show?void(n._timeout=setTimeout(function(){n._hoverState===p.SHOW&&n.show()},n.config.delay.show)):void n.show())},v._leave=function(t,n){var i=this.constructor.DATA_KEY;if(n=n||e(t.currentTarget).data(i),n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?m.FOCUS:m.HOVER]=!1),!n._isWithActiveTrigger()){if(clearTimeout(n._timeout),n._hoverState=p.OUT,!n.config.delay||!n.config.delay.hide)return void n.hide();n._timeout=setTimeout(function(){n._hoverState===p.OUT&&n.hide()},n.config.delay.hide)}},v._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},v._getConfig=function(n){return n=a({},this.constructor.Default,e(this.element).data(),"object"==typeof n&&n?n:{}),"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),l.typeCheckConfig(t,n,this.constructor.DefaultType),n},v._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},v._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(s);null!==n&&n.length>0&&t.removeClass(n.join(""))},v._handlePopperPlacementChange=function(e){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},v._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(g.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),i="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,i),e(this).data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},r(o,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return h}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return d}}]),o}();/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e.fn[t]=v._jQueryInterface,e.fn[t].Constructor=v,e.fn[t].noConflict=function(){return e.fn[t]=o,v._jQueryInterface},v}(t),m=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="popover",n=".bs.popover",i=e.fn[t],o=new RegExp("(^|\\s)bs-popover\\S+","g"),l=a({},f.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),d=a({},f.DefaultType,{content:"(string|element|function)"}),c={FADE:"fade",SHOW:"show"},u={TITLE:".popover-header",CONTENT:".popover-body"},p={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},h=/*#__PURE__*/
function(i){function a(){return i.apply(this,arguments)||this}s(a,i);var h=a.prototype;
// Overrides
// Private
// Static
return h.isWithContent=function(){return this.getTitle()||this._getContent()},h.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},h.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},h.setContent=function(){var t=e(this.getTipElement());// We use append for html objects to maintain js events
this.setElementContent(t.find(u.TITLE),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(u.CONTENT),n),t.removeClass(c.FADE+" "+c.SHOW)},h._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},h._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(o);null!==n&&n.length>0&&t.removeClass(n.join(""))},a._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/destroy|hide/.test(t))&&(n||(n=new a(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},r(a,null,[{key:"VERSION",
// Getters
get:function(){return"4.1.1"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return d}}]),a}(f);/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=i,h._jQueryInterface},h}(t),v=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t="scrollspy",n=e.fn[t],i={offset:10,method:"auto",target:""},o={offset:"number",method:"string",target:"(string|element)"},s={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},d={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},c={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},u={OFFSET:"offset",POSITION:"position"},p=/*#__PURE__*/
function(){function n(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+c.NAV_LINKS+","+this._config.target+" "+c.LIST_ITEMS+","+this._config.target+" "+c.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(s.SCROLL,function(e){return i._process(e)}),this.refresh(),this._process()}// Getters
var p=n.prototype;
// Public
// Private
// Static
return p.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?u.OFFSET:u.POSITION,i="auto"===this._config.method?n:this._config.method,r=i===u.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var n,o=l.getSelectorFromElement(t);if(o&&(n=e(o)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)
// TODO (fat): remove sketch reliance on jQuery position/offset
return[e(n)[i]().top+r,o]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},p.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},p._getConfig=function(n){if(n=a({},i,"object"==typeof n&&n?n:{}),"string"!=typeof n.target){var r=e(n.target).attr("id");r||(r=l.getUID(t),e(n.target).attr("id",r)),n.target="#"+r}return l.typeCheckConfig(t,n,o),n},p._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},p._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},p._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},p._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var i=this._targets[this._targets.length-1];return void(this._activeTarget!==i&&this._activate(i))}if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1])&&this._activate(this._targets[r])}},p._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",");// eslint-disable-next-line arrow-body-style
n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var i=e(n.join(","));i.hasClass(d.DROPDOWN_ITEM)?(i.closest(c.DROPDOWN).find(c.DROPDOWN_TOGGLE).addClass(d.ACTIVE),i.addClass(d.ACTIVE)):(
// Set triggered link as active
i.addClass(d.ACTIVE),// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
i.parents(c.NAV_LIST_GROUP).prev(c.NAV_LINKS+", "+c.LIST_ITEMS).addClass(d.ACTIVE),// Handle special case when .nav-link is inside .nav-item
i.parents(c.NAV_LIST_GROUP).prev(c.NAV_ITEMS).children(c.NAV_LINKS).addClass(d.ACTIVE)),e(this._scrollElement).trigger(s.ACTIVATE,{relatedTarget:t})},p._clear=function(){e(this._selector).filter(c.ACTIVE).removeClass(d.ACTIVE)},n._jQueryInterface=function(t){return this.each(function(){var i=e(this).data("bs.scrollspy"),r="object"==typeof t&&t;if(i||(i=new n(this,r),e(this).data("bs.scrollspy",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}})},r(n,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return i}}]),n}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(window).on(s.LOAD_DATA_API,function(){for(var t=e.makeArray(e(c.DATA_SPY)),n=t.length;n--;){var i=e(t[n]);p._jQueryInterface.call(i,i.data())}}),e.fn[t]=p._jQueryInterface,e.fn[t].Constructor=p,e.fn[t].noConflict=function(){return e.fn[t]=n,p._jQueryInterface},p}(t),y=function(e){/**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},i={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},o={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},a=/*#__PURE__*/
function(){function t(e){this._element=e}// Getters
var a=t.prototype;
// Public
// Private
// Static
return a.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(i.ACTIVE)||e(this._element).hasClass(i.DISABLED))){var r,a,s=e(this._element).closest(o.NAV_LIST_GROUP)[0],d=l.getSelectorFromElement(this._element);if(s){var c="UL"===s.nodeName?o.ACTIVE_UL:o.ACTIVE;a=e.makeArray(e(s).find(c)),a=a[a.length-1]}var u=e.Event(n.HIDE,{relatedTarget:this._element}),p=e.Event(n.SHOW,{relatedTarget:a});if(a&&e(a).trigger(u),e(this._element).trigger(p),!p.isDefaultPrevented()&&!u.isDefaultPrevented()){d&&(r=e(d)[0]),this._activate(this._element,s);var h=function(){var i=e.Event(n.HIDDEN,{relatedTarget:t._element}),r=e.Event(n.SHOWN,{relatedTarget:a});e(a).trigger(i),e(t._element).trigger(r)};r?this._activate(r,r.parentNode,h):h()}}},a.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},a._activate=function(t,n,r){var a,s=this;a="UL"===n.nodeName?e(n).find(o.ACTIVE_UL):e(n).children(o.ACTIVE);var d=a[0],c=r&&d&&e(d).hasClass(i.FADE),u=function(){return s._transitionComplete(t,d,r)};if(d&&c){var p=l.getTransitionDurationFromElement(d);e(d).one(l.TRANSITION_END,u).emulateTransitionEnd(p)}else u()},a._transitionComplete=function(t,n,r){if(n){e(n).removeClass(i.SHOW+" "+i.ACTIVE);var a=e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];a&&e(a).removeClass(i.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(i.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),l.reflow(t),e(t).addClass(i.SHOW),t.parentNode&&e(t.parentNode).hasClass(i.DROPDOWN_MENU)){var s=e(t).closest(o.DROPDOWN)[0];s&&e(s).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE),t.setAttribute("aria-expanded",!0)}r&&r()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),r=i.data("bs.tab");if(r||(r=new t(this),i.data("bs.tab",r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n]()}})},r(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
return e(document).on(n.CLICK_DATA_API,o.DATA_TOGGLE,function(t){t.preventDefault(),a._jQueryInterface.call(e(this),"show")}),e.fn.tab=a._jQueryInterface,e.fn.tab.Constructor=a,e.fn.tab.noConflict=function(){return e.fn.tab=t,a._jQueryInterface},a}(t);/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
!function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(t),e.Util=l,e.Alert=d,e.Button=c,e.Carousel=u,e.Collapse=p,e.Dropdown=h,e.Modal=g,e.Popover=m,e.Scrollspy=v,e.Tab=y,e.Tooltip=f,Object.defineProperty(e,"__esModule",{value:!0})})},/***/
"../node_modules/desandro-matches-selector/matches-selector.js":/***/
function(e,t,n){var i,r;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
!function(o,a){/*global define: false, module: false */
"use strict";i=a,void 0!==(r="function"==typeof i?i.call(t,n,t,e):i)&&(e.exports=r)}(window,function(){"use strict";var e=function(){var e=window.Element.prototype;
// check for the standard method name first
if(e.matches)return"matches";
// check un-prefixed
if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],n=0;n<t.length;n++){var i=t[n],r=i+"MatchesSelector";if(e[r])return r}}();return function(t,n){return t[e](n)}})},/***/
"../node_modules/ev-emitter/ev-emitter.js":/***/
function(e,t,n){var i,r;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */
/* jshint unused: true, undef: true, strict: true */
!function(o,a){
// AMD - RequireJS
i=a,void 0!==(r="function"==typeof i?i.call(t,n,t,e):i)&&(e.exports=r)}("undefined"!=typeof window&&window,function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){
// set events hash
var n=this._events=this._events||{},i=n[e]=n[e]||[];
// only add once
return-1==i.indexOf(t)&&i.push(t),this}},t.once=function(e,t){if(e&&t){
// add event
this.on(e,t);
// set once flag
// set onceEvents hash
var n=this._onceEvents=this._onceEvents||{};
// set flag
return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=n.indexOf(t);return-1!=i&&n.splice(i,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){
// copy over to avoid interference if .off() in listener
n=n.slice(0),t=t||[];for(var i=this._onceEvents&&this._onceEvents[e],r=0;r<n.length;r++){var o=n[r];i&&i[o]&&(
// remove listener
// remove before trigger to prevent recursion
this.off(e,o),
// unset once flag
delete i[o]),
// trigger listener
o.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})},/***/
"../node_modules/fizzy-ui-utils/utils.js":/***/
function(e,t,n){var i,r;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
!function(o,a){
// AMD
i=[n("../node_modules/desandro-matches-selector/matches-selector.js")],void 0!==(r=function(e){return a(o,e)}.apply(t,i))&&(e.exports=r)}(window,function(e,t){"use strict";var n={};
// ----- extend ----- //
// extends objects
n.extend=function(e,t){for(var n in t)e[n]=t[n];return e},
// ----- modulo ----- //
n.modulo=function(e,t){return(e%t+t)%t};
// ----- makeArray ----- //
var i=Array.prototype.slice;
// turn element or nodeList into an array
n.makeArray=function(e){
// return empty array if undefined or null. #6
return Array.isArray(e)?e:null===e||void 0===e?[]:"object"==typeof e&&"number"==typeof e.length?i.call(e):[e]},
// ----- removeFrom ----- //
n.removeFrom=function(e,t){var n=e.indexOf(t);-1!=n&&e.splice(n,1)},
// ----- getParent ----- //
n.getParent=function(e,n){for(;e.parentNode&&e!=document.body;)if(e=e.parentNode,t(e,n))return e},
// ----- getQueryElement ----- //
// use element as selector string
n.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},
// ----- handleEvent ----- //
// enable .ontype to trigger from .addEventListener( elem, 'type' )
n.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},
// ----- filterFindElements ----- //
n.filterFindElements=function(e,i){
// make array of elems
e=n.makeArray(e);var r=[];return e.forEach(function(e){
// check that elem is an actual element
if(e instanceof HTMLElement){
// add elem if no selector
if(!i)return void r.push(e);
// filter & find items if we have a selector
// filter
t(e,i)&&r.push(e);
// concat childElems to filterFound array
for(var n=e.querySelectorAll(i),o=0;o<n.length;o++)r.push(n[o])}}),r},
// ----- debounceMethod ----- //
n.debounceMethod=function(e,t,n){n=n||100;
// original method
var i=e.prototype[t],r=t+"Timeout";e.prototype[t]=function(){var e=this[r];clearTimeout(e);var t=arguments,o=this;this[r]=setTimeout(function(){i.apply(o,t),delete o[r]},n)}},
// ----- docReady ----- //
n.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?
// do async to allow for other scripts to run. metafizzy/flickity#441
setTimeout(e):document.addEventListener("DOMContentLoaded",e)},
// ----- htmlInit ----- //
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
n.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()};var r=e.console;
// -----  ----- //
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
return n.htmlInit=function(t,i){n.docReady(function(){var o=n.toDashed(i),a="data-"+o,s=document.querySelectorAll("["+a+"]"),l=document.querySelectorAll(".js-"+o),d=n.makeArray(s).concat(n.makeArray(l)),c=a+"-options",u=e.jQuery;d.forEach(function(e){var n,o=e.getAttribute(a)||e.getAttribute(c);try{n=o&&JSON.parse(o)}catch(t){
// log error, do not initialize
return void(r&&r.error("Error parsing "+a+" on "+e.className+": "+t))}
// initialize
var s=new t(e,n);
// make available via $().data('namespace')
u&&u.data(e,i,s)})})},n})},/***/
"../node_modules/get-size/get-size.js":/***/
function(e,t,n){var i,r;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */
!function(o,a){
// AMD
i=a,void 0!==(r="function"==typeof i?i.call(t,n,t,e):i)&&(e.exports=r)}(window,function(){"use strict";
// -------------------------- helpers -------------------------- //
// get a number from a string, not a percentage
function e(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t}function t(){}function n(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0;t<d;t++){e[l[t]]=0}return e}
// -------------------------- getStyle -------------------------- //
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function i(e){var t=getComputedStyle(e);return t||s("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),t}/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function r(){
// setup once
if(!c){c=!0;
// -------------------------- box sizing -------------------------- //
/**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(t);var r=i(t);
// round value for browser zoom. desandro/masonry#928
a=200==Math.round(e(r.width)),o.isBoxSizeOuter=a,n.removeChild(t)}}
// -------------------------- getSize -------------------------- //
function o(t){
// do not proceed on non-objects
if(r(),
// use querySeletor if elem is string
"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=i(t);
// if hidden, everything is 0
if("none"==o.display)return n();var s={};s.width=t.offsetWidth,s.height=t.offsetHeight;
// get all measurements
for(var c=s.isBorderBox="border-box"==o.boxSizing,u=0;u<d;u++){var p=l[u],h=o[p],g=parseFloat(h);
// any 'auto', 'medium' value will be 0
s[p]=isNaN(g)?0:g}var f=s.paddingLeft+s.paddingRight,m=s.paddingTop+s.paddingBottom,v=s.marginLeft+s.marginRight,y=s.marginTop+s.marginBottom,b=s.borderLeftWidth+s.borderRightWidth,w=s.borderTopWidth+s.borderBottomWidth,j=c&&a,_=e(o.width);!1!==_&&(s.width=_+(
// add padding and border unless it's already including it
j?0:f+b));var C=e(o.height);
// add padding and border unless it's already including it
return!1!==C&&(s.height=C+(j?0:m+w)),s.innerWidth=s.width-(f+b),s.innerHeight=s.height-(m+w),s.outerWidth=s.width+v,s.outerHeight=s.height+y,s}}var a,s="undefined"==typeof console?t:function(e){console.error(e)},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],d=l.length,c=!1;return o})},/***/
"../node_modules/gijgo/js/gijgo.js":/***/
function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */
(function($,jQuery){/*
 * Gijgo JavaScript Library v1.9.6
 * http://gijgo.com/
 *
 * Copyright 2014, 2018 gijgo.com
 * Released under the MIT license
 */
var gj={};gj.widget=function(){var e=this;e.xhr=null,e.generateGUID=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},e.mouseX=function(e){if(e){if(e.pageX)return e.pageX;if(e.clientX)return e.clientX+(document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft);if(e.touches&&e.touches.length)return e.touches[0].pageX;if(e.changedTouches&&e.changedTouches.length)return e.changedTouches[0].pageX;if(e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length)return e.originalEvent.touches[0].pageX;if(e.originalEvent&&e.originalEvent.changedTouches&&e.originalEvent.changedTouches.length)return e.originalEvent.touches[0].pageX}return null},e.mouseY=function(e){if(e){if(e.pageY)return e.pageY;if(e.clientY)return e.clientY+(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop);if(e.touches&&e.touches.length)return e.touches[0].pageY;if(e.changedTouches&&e.changedTouches.length)return e.changedTouches[0].pageY;if(e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length)return e.originalEvent.touches[0].pageY;if(e.originalEvent&&e.originalEvent.changedTouches&&e.originalEvent.changedTouches.length)return e.originalEvent.touches[0].pageY}return null}},gj.widget.prototype.init=function(e,t){var n,i,r;this.attr("data-type",t),i=$.extend(!0,{},this.getHTMLConfig()||{}),$.extend(!0,i,e||{}),r=this.getConfig(i,t),this.attr("data-guid",r.guid),this.data(r);
// Initialize events configured as options
for(n in r)gj[t].events.hasOwnProperty(n)&&(this.on(n,r[n]),delete r[n]);
// Initialize all plugins
for(plugin in gj[t].plugins)gj[t].plugins.hasOwnProperty(plugin)&&gj[t].plugins[plugin].configure(this,r,i);return this},gj.widget.prototype.getConfig=function(e,t){var n,i,r,o;n=$.extend(!0,{},gj[t].config.base),i=e.hasOwnProperty("uiLibrary")?e.uiLibrary:n.uiLibrary,gj[t].config[i]&&$.extend(!0,n,gj[t].config[i]),r=e.hasOwnProperty("iconsLibrary")?e.iconsLibrary:n.iconsLibrary,gj[t].config[r]&&$.extend(!0,n,gj[t].config[r]);for(o in gj[t].plugins)gj[t].plugins.hasOwnProperty(o)&&($.extend(!0,n,gj[t].plugins[o].config.base),gj[t].plugins[o].config[i]&&$.extend(!0,n,gj[t].plugins[o].config[i]),gj[t].plugins[o].config[r]&&$.extend(!0,n,gj[t].plugins[o].config[r]));return $.extend(!0,n,e),n.guid||(n.guid=this.generateGUID()),n},gj.widget.prototype.getHTMLConfig=function(){var e=this.data(),t=this[0].attributes;return t.width&&(e.width=t.width.value),t.height&&(e.height=t.height.value),t.value&&(e.value=t.value.value),t.align&&(e.align=t.align.value),e&&e.source&&(e.dataSource=e.source,delete e.source),e},gj.widget.prototype.createDoneHandler=function(){var e=this;return function(t){"string"==typeof t&&JSON&&(t=JSON.parse(t)),gj[e.data("type")].methods.render(e,t)}},gj.widget.prototype.createErrorHandler=function(){return function(e){e&&e.statusText&&"abort"!==e.statusText&&alert(e.statusText)}},gj.widget.prototype.reload=function(e){var t,n,i=this.data(),r=this.data("type");//clone dataSource object
return void 0===i.dataSource&&gj[r].methods.useHtmlDataSource(this,i),$.extend(i.params,e),$.isArray(i.dataSource)?(n=gj[r].methods.filter(this),gj[r].methods.render(this,n)):"string"==typeof i.dataSource?(t={url:i.dataSource,data:i.params},this.xhr&&this.xhr.abort(),this.xhr=$.ajax(t).done(this.createDoneHandler()).fail(this.createErrorHandler())):"object"==typeof i.dataSource&&(i.dataSource.data||(i.dataSource.data={}),$.extend(i.dataSource.data,i.params),t=$.extend(!0,{},i.dataSource),"json"===t.dataType&&"object"==typeof t.data&&(t.data=JSON.stringify(t.data)),t.success||(t.success=this.createDoneHandler()),t.error||(t.error=this.createErrorHandler()),this.xhr&&this.xhr.abort(),this.xhr=$.ajax(t)),this},gj.documentManager={events:{},subscribeForEvent:function(e,t,n){if(gj.documentManager.events[e]&&0!==gj.documentManager.events[e].length){if(gj.documentManager.events[e][t])throw"Event "+e+' for widget with guid="'+t+'" is already attached.';gj.documentManager.events[e].push({widgetId:t,callback:n})}else gj.documentManager.events[e]=[{widgetId:t,callback:n}],$(document).on(e,gj.documentManager.executeCallbacks)},executeCallbacks:function(e){var t=gj.documentManager.events[e.type];if(t)for(var n=0;n<t.length;n++)t[n].callback(e)},unsubscribeForEvent:function(e,t){var n=!1,i=gj.documentManager.events[e];if(i)for(var r=0;r<i.length;r++)i[r].widgetId===t&&(i.splice(r,1),n=!0,0===i.length&&($(document).off(e),delete gj.documentManager.events[e]));if(!n)throw'The "'+e+'" for widget with guid="'+t+"\" can't be removed."}},/**
  * @widget Core
  * @plugin Base
  */
gj.core={messages:{"en-us":{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthShortNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekDaysMin:["S","M","T","W","T","F","S"],weekDaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekDays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],am:"AM",pm:"PM",ok:"Ok",cancel:"Cancel"}},/** 
     * @method
     * @example String.1
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.parseDate('02/03/17', 'mm/dd/yy'));
     * </script>
     * @example String.2
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.parseDate('2017 2.3', 'yyyy m.d'));
     * </script>
     * @example String.dd.mmm.yyyy
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.parseDate('05 Feb 2017', 'dd mmm yyyy'));
     * </script>
     * @example String.dd.mmmm.yyyy
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.parseDate('05 February 2017', 'dd mmmm yyyy'));
     * </script>
     * @example String.HH:MM
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.parseDate('10:57', 'HH:MM'));
     * </script>
     * @example ASP.NET.JSON.Date
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.parseDate("\/Date(349653600000)\/"));
     * </script>
     * @example UNIX.Timestamp
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.parseDate(349653600000));
     * </script>
     */
parseDate:function(e,t,n){var i,r,o,a,s=0,l=0,d=0,c=0,u=0;if(e&&"string"==typeof e){if(/^\d+$/.test(e))a=new Date(e);else if(e.indexOf("/Date(")>-1)a=new Date(parseInt(e.substr(6),10));else if(e){for(r=e.split(/[\s,-\.\/\/\:]+/),o=t.split(/[\s,-\.\/\/\:]+/),i=0;i<o.length;i++)["d","dd"].indexOf(o[i])>-1?d=parseInt(r[i],10):["m","mm"].indexOf(o[i])>-1?l=parseInt(r[i],10)-1:"mmm"===o[i]?l=gj.core.messages[n||"en-us"].monthShortNames.indexOf(r[i]):"mmmm"===o[i]?l=gj.core.messages[n||"en-us"].monthNames.indexOf(r[i]):["yy","yyyy"].indexOf(o[i])>-1?(s=parseInt(r[i],10),"yy"===o[i]&&(s+=2e3)):["h","hh","H","HH"].indexOf(o[i])>-1?c=parseInt(r[i],10):["M","MM"].indexOf(o[i])>-1&&(u=parseInt(r[i],10));a=new Date(s,l,d,c,u)}}else"number"==typeof e?a=new Date(e):e instanceof Date&&(a=e);return a},/** 
     * @method
     * @example Sample.1
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.formatDate(new Date(2017, 1, 3), 'mm/dd/yy'));
     * </script>
     * @example Sample.2
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.formatDate(new Date(2017, 1, 3), 'yyyy m.d'));
     * </script>
     * @example Sample.dd.mmm.yyyy
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.formatDate(new Date(2017, 1, 3), 'dd mmm yyyy'));
     * </script>
     * @example Sample.dd.mmmm.yyyy
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.formatDate(new Date(2017, 1, 3), 'dd mmmm yyyy'));
     * </script>
     * @example Sample.5
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.formatDate(new Date(2017, 1, 3, 20, 43, 53), 'hh:MM:ss tt mm/dd/yyyy'));
     * </script>
     * @example Sample.6
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.formatDate(new Date(2017, 1, 3, 20, 43, 53), 'hh:MM TT'));
     * </script>
     * @example Short.WeekDay
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.formatDate(new Date(2017, 1, 3), 'ddd, mmm dd'));
     * </script>
     * @example Full.WeekDay
     * <div id="date"></div>
     * <script>
     *     $('#date').text(gj.core.formatDate(new Date(2017, 1, 3), 'dddd, mmm dd'));
     * </script>
     */
formatDate:function(e,t,n){var r,o,a="",s=t.split(/[\s,-\.\/\/\:]+/),l=t.split(/s+|M+|H+|h+|t+|T+|d+|m+|y+/);for(l=l.splice(1,l.length-2),i=0;i<s.length;i++)switch(r=l[i]||"",s[i]){case"s":a+=e.getSeconds()+r;break;case"ss":a+=gj.core.pad(e.getSeconds())+r;break;case"M":a+=e.getMinutes()+r;break;case"MM":a+=gj.core.pad(e.getMinutes())+r;break;case"H":a+=e.getHours()+r;break;case"HH":a+=gj.core.pad(e.getHours())+r;break;case"h":o=e.getHours()>12?e.getHours()%12:e.getHours(),a+=o+r;break;case"hh":o=e.getHours()>12?e.getHours()%12:e.getHours(),a+=gj.core.pad(o)+r;break;case"tt":a+=(e.getHours()>=12?"pm":"am")+r;break;case"TT":a+=(e.getHours()>=12?"PM":"AM")+r;break;case"d":a+=e.getDate()+r;break;case"dd":a+=gj.core.pad(e.getDate())+r;break;case"ddd":a+=gj.core.messages[n||"en-us"].weekDaysShort[e.getDay()]+r;break;case"dddd":a+=gj.core.messages[n||"en-us"].weekDays[e.getDay()]+r;break;case"m":a+=e.getMonth()+1+r;break;case"mm":a+=gj.core.pad(e.getMonth()+1)+r;break;case"mmm":a+=gj.core.messages[n||"en-us"].monthShortNames[e.getMonth()]+r;break;case"mmmm":a+=gj.core.messages[n||"en-us"].monthNames[e.getMonth()]+r;break;case"yy":a+=e.getFullYear().toString().substr(2)+r;break;case"yyyy":a+=e.getFullYear()+r}return a},pad:function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},center:function(e){var t=$(window).width()/2-e.width()/2,n=$(window).height()/2-e.height()/2;e.css("position","absolute"),e.css("left",t>0?t:0),e.css("top",n>0?n:0)},isIE:function(){return!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g)},setChildPosition:function(e,t){var n=e.getBoundingClientRect(),i=gj.core.height(e,!0),r=gj.core.height(t,!0),o=gj.core.width(e,!0),a=gj.core.width(t,!0),s=window.scrollY||window.pageYOffset||0,l=window.scrollX||window.pageXOffset||0;n.top+i+r>window.innerHeight&&n.top>r?t.style.top=Math.round(n.top+s-r-3)+"px":t.style.top=Math.round(n.top+s+i+3)+"px",n.left+a>document.body.clientWidth?t.style.left=Math.round(n.left+l+o-a)+"px":t.style.left=Math.round(n.left+l)+"px"},height:function(e,t){var n,i=window.getComputedStyle(e);// border-box include padding and border within the height
return"border-box"===i.boxSizing?n=parseInt(i.height,10):(n=parseInt(i.height,10),n+=parseInt(i.paddingTop||0,10)+parseInt(i.paddingBottom||0,10),n+=parseInt(i.borderTop||0,10)+parseInt(i.borderBottom||0,10)),t&&(n+=parseInt(i.marginTop||0,10)+parseInt(i.marginBottom||0,10)),n},width:function(e,t){var n,i=window.getComputedStyle(e);// border-box include padding and border within the width
return"border-box"===i.boxSizing?n=parseInt(i.width,10):(n=parseInt(i.width,10),n+=parseInt(i.paddingLeft||0,10)+parseInt(i.paddingRight||0,10),n+=parseInt(i.borderLeft||0,10)+parseInt(i.borderRight||0,10)),t&&(n+=parseInt(i.marginLeft||0,10)+parseInt(i.marginRight||0,10)),n},addClasses:function(e,t){var n,i;if(t)for(i=t.split(" "),n=0;n<i.length;n++)e.classList.add(i[n])},position:function(e,t,n){var i=e.getBoundingClientRect(),r=document.body,o=window.getComputedStyle(r),a=document.documentElement,s=window.pageYOffset||a.scrollTop||r.scrollTop,l=window.pageXOffset||a.scrollLeft||r.scrollLeft,d=a.clientTop||r.clientTop||0,c=a.clientLeft||r.clientLeft||0,u=Math.round(i.top+s-d),p=Math.round(i.left+l-c);return t&&(u+=parseInt(o.paddingTop||0,10),p+=parseInt(o.paddingLeft||0,10)),n&&(u+=parseInt(o.marginTop||0,10),p+=parseInt(o.marginLeft||0,10)),{top:u,left:p,bottom:u+gj.core.height(e),right:p+gj.core.width(e)}}},/* global window alert jQuery */
/** 
 * @widget Dialog 
 * @plugin Base
 */
gj.dialog={plugins:{},messages:{}},gj.dialog.config={base:{/** If set to true, the dialog will automatically open upon initialization.
         * If false, the dialog will stay hidden until the open() method is called.
         * @type boolean
         * @default true
         * @example True <!-- dialog.base, draggable -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         autoOpen: true
         *     });
         * </script>
         * @example False <!-- dialog.base, bootstrap -->
         * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <button onclick="dialog.open()" class="btn btn-default">Open Dialog</button>
         * <script>
         *     var dialog = $("#dialog").dialog({
         *         uiLibrary: 'bootstrap',
         *         autoOpen: false
         *     });
         * </script>
         */
autoOpen:!0,/** Specifies whether the dialog should have a close button in right part of dialog header.
         * @type boolean
         * @default true
         * @example True <!-- dialog.base, draggable -->
         * <div id="dialog">
         *     <div data-role="header"><h4 data-role="title">Dialog</h4></div>
         *     <div data-role="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         *     <div data-role="footer">
         *         <button onclick="dialog.close()" class="gj-button-md">Ok</button>
         *         <button onclick="dialog.close()" class="gj-button-md">Cancel</button>
         *     </div>
         * </div>
         * <script>
         *     var dialog = $("#dialog").dialog({
         *         closeButtonInHeader: true,
         *         height: 200
         *     });
         * </script>
         * @example False <!-- dialog.base, draggable -->
         * <div id="dialog">
         *     <div data-role="header"><h4 data-role="title">Dialog</h4></div>
         *     <div data-role="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         *     <div data-role="footer">
         *         <button onclick="dialog.close()" class="gj-button-md">Ok</button>
         *         <button onclick="dialog.close()" class="gj-button-md">Cancel</button>
         *     </div>
         * </div>
         * <script>
         *     var dialog = $("#dialog").dialog({
         *         closeButtonInHeader: false
         *     });
         * </script>
         */
closeButtonInHeader:!0,/** Specifies whether the dialog should close when it has focus and the user presses the escape (ESC) key.
         * @type boolean
         * @default true
         * @example True <!-- dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         closeOnEscape: true
         *     });
         * </script>
         * @example False <!-- dialog.base, draggable -->
         * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         closeOnEscape: false
         *     });
         * </script>
         */
closeOnEscape:!0,/** If set to true, the dialog will be draggable by the title bar.
         * @type boolean
         * @default true
         * @example True <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         draggable: true
         *     });
         * </script>
         * @example False <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         draggable: false
         *     });
         * </script>
         */
draggable:!0,/** The height of the dialog.
         * @additionalinfo Support string and number values. The number value sets the height in pixels.
         * The only supported string value is "auto" which will allow the dialog height to adjust based on its content.
         * @type (number|string)
         * @default "auto"
         * @example Short.Text <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         height: 200
         *     });
         * </script>
         * @example Long.Text.Material.Design <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor quam in magna vulputate, vitae laoreet odio ultrices. Phasellus at efficitur magna. Mauris purus dolor, egestas quis leo et, vulputate dictum mauris. Vivamus maximus lectus sollicitudin lorem blandit tempor. Maecenas eget posuere mi. Suspendisse id hendrerit nibh. Morbi eu odio euismod, venenatis ipsum in, egestas nunc. Mauris dignissim metus ac risus porta eleifend. Aliquam tempus libero orci, id placerat odio vehicula eu. Donec tincidunt justo dolor, sit amet tempus turpis varius sit amet. Suspendisse ut ex blandit, hendrerit enim tristique, iaculis ipsum. Vivamus venenatis dolor justo, eget scelerisque lacus dignissim quis. Duis imperdiet ex at aliquet cursus. Proin non ultricies leo. Fusce quam diam, laoreet quis fringilla vitae, viverra id magna. Nam laoreet sem in volutpat rhoncus.</div>
         * <script>
         *     $("#dialog").dialog({
         *         height: 350
         *     });
         * </script>
         * @example Long.Text.Bootstrap3 <!-- bootstrap, draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor quam in magna vulputate, vitae laoreet odio ultrices. Phasellus at efficitur magna. Mauris purus dolor, egestas quis leo et, vulputate dictum mauris. Vivamus maximus lectus sollicitudin lorem blandit tempor. Maecenas eget posuere mi. Suspendisse id hendrerit nibh. Morbi eu odio euismod, venenatis ipsum in, egestas nunc. Mauris dignissim metus ac risus porta eleifend. Aliquam tempus libero orci, id placerat odio vehicula eu. Donec tincidunt justo dolor, sit amet tempus turpis varius sit amet. Suspendisse ut ex blandit, hendrerit enim tristique, iaculis ipsum. Vivamus venenatis dolor justo, eget scelerisque lacus dignissim quis. Duis imperdiet ex at aliquet cursus. Proin non ultricies leo. Fusce quam diam, laoreet quis fringilla vitae, viverra id magna. Nam laoreet sem in volutpat rhoncus.</div>
         * <script>
         *     $("#dialog").dialog({
         *         height: 350,
         *         uiLibrary: 'bootstrap'
         *     });
         * </script>
         * @example Long.Text.Bootstrap4 <!-- bootstrap4, draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor quam in magna vulputate, vitae laoreet odio ultrices. Phasellus at efficitur magna. Mauris purus dolor, egestas quis leo et, vulputate dictum mauris. Vivamus maximus lectus sollicitudin lorem blandit tempor. Maecenas eget posuere mi. Suspendisse id hendrerit nibh. Morbi eu odio euismod, venenatis ipsum in, egestas nunc. Mauris dignissim metus ac risus porta eleifend. Aliquam tempus libero orci, id placerat odio vehicula eu. Donec tincidunt justo dolor, sit amet tempus turpis varius sit amet. Suspendisse ut ex blandit, hendrerit enim tristique, iaculis ipsum. Vivamus venenatis dolor justo, eget scelerisque lacus dignissim quis. Duis imperdiet ex at aliquet cursus. Proin non ultricies leo. Fusce quam diam, laoreet quis fringilla vitae, viverra id magna. Nam laoreet sem in volutpat rhoncus.</div>
         * <script>
         *     $("#dialog").dialog({
         *         height: 350,
         *         uiLibrary: 'bootstrap4'
         *     });
         * </script>
         */
height:"auto",/** The language that needs to be in use.
         * @type string
         * @default 'en-us'
         * @example French.Default <!-- draggable, dialog.base-->
         * <script src="../../dist/modular/dialog/js/messages/messages.fr-fr.js"></script>
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         resizable: true,
         *         locale: 'fr-fr'
         *     });
         * </script>
         * @example French.Custom <!-- draggable, dialog.base -->
         * <script src="../../dist/modular/dialog/js/messages/messages.fr-fr.js"></script>
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     gj.dialog.messages['fr-fr'].DefaultTitle = 'Titre de la boîte de dialogue';
         *     $("#dialog").dialog({
         *         resizable: true,
         *         locale: 'fr-fr',
         *         width: 700
         *     });
         * </script>
         */
locale:"en-us",/** The maximum height in pixels to which the dialog can be resized.
         * @type number
         * @default undefined
         * @example sample <!-- draggable, dialog.base -->
         * <div id="dialog">The maximum height of this dialog is set to 300 px. Try to resize it for testing.</div>
         * <script>
         *     $("#dialog").dialog({
         *         resizable: true,
         *         height: 200,
         *         maxHeight: 300
         *     });
         * </script>
         */
maxHeight:void 0,/** The maximum width in pixels to which the dialog can be resized.
         * @type number
         * @default undefined
         * @example sample <!-- draggable, dialog.base -->
         * <div id="dialog">The maximum width of this dialog is set to 400 px. Try to resize it for testing.</div>
         * <script>
         *     $("#dialog").dialog({
         *         resizable: true,
         *         maxWidth: 400
         *     });
         * </script>
         */
maxWidth:void 0,/** The minimum height in pixels to which the dialog can be resized.
         * @type number
         * @default undefined
         * @example sample <!-- draggable, dialog.base -->
         * <div id="dialog">The minimum height of this dialog is set to 200 px. Try to resize it for testing.</div>
         * <script>
         *     $("#dialog").dialog({
         *         resizable: true,
         *         height: 300,
         *         minHeight: 200
         *     });
         * </script>
         */
minHeight:void 0,/** The minimum width in pixels to which the dialog can be resized.
         * @type number
         * @default undefined
         * @example sample <!-- draggable, dialog.base -->
         * <div id="dialog">The minimum width of this dialog is set to 200 px. Try to resize it for testing.</div>
         * <script>
         *     $("#dialog").dialog({
         *         resizable: true,
         *         minWidth: 200
         *     });
         * </script>
         */
minWidth:void 0,/** If set to true, the dialog will have modal behavior.
         * Modal dialogs create an overlay below the dialog, but above other page elements and you can't interact with them.
         * @type boolean
         * @default false
         * @example True.Material.Design <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         modal: true
         *     });
         * </script>
         * @example True.Bootstrap.4 <!-- bootstrap4, draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         modal: true,
         *         uiLibrary: 'bootstrap4'
         *     });
         * </script>
         * @example False <!-- draggable, dialog.base, bootstrap -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         modal: false
         *     });
         * </script>
         */
modal:!1,/** If set to true, the dialog will be resizable.
         * @type boolean
         * @default false
         * @example True <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         resizable: true
         *     });
         * </script>
         * @example False <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         resizable: false
         *     });
         * </script>
         */
resizable:!1,/** If set to true, add vertical scroller to the dialog body.
         * @type Boolean
         * @default false
         * @example Bootstrap.3 <!-- bootstrap, draggable, dialog.base -->
         * <div id="dialog">
         *     <div data-role="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor quam in magna vulputate, vitae laoreet odio ultrices. Phasellus at efficitur magna. Mauris purus dolor, egestas quis leo et, vulputate dictum mauris. Vivamus maximus lectus sollicitudin lorem blandit tempor. Maecenas eget posuere mi. Suspendisse id hendrerit nibh. Morbi eu odio euismod, venenatis ipsum in, egestas nunc. Mauris dignissim metus ac risus porta eleifend. Aliquam tempus libero orci, id placerat odio vehicula eu. Donec tincidunt justo dolor, sit amet tempus turpis varius sit amet. Suspendisse ut ex blandit, hendrerit enim tristique, iaculis ipsum. Vivamus venenatis dolor justo, eget scelerisque lacus dignissim quis. Duis imperdiet ex at aliquet cursus. Proin non ultricies leo. Fusce quam diam, laoreet quis fringilla vitae, viverra id magna. Nam laoreet sem in volutpat rhoncus.</div>
         *     <div data-role="footer">
         *         <button class="btn btn-default" data-role="close">Cancel</button>
         *         <button class="btn btn-default" onclick="dialog.close()">OK</button>
         *     </div>
         * </div>
         * <script>
         *     var dialog = $("#dialog").dialog({
         *         scrollable: true,
         *         height: 300,
         *         uiLibrary: 'bootstrap'
         *     });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor quam in magna vulputate, vitae laoreet odio ultrices. Phasellus at efficitur magna. Mauris purus dolor, egestas quis leo et, vulputate dictum mauris. Vivamus maximus lectus sollicitudin lorem blandit tempor. Maecenas eget posuere mi. Suspendisse id hendrerit nibh. Morbi eu odio euismod, venenatis ipsum in, egestas nunc. Mauris dignissim metus ac risus porta eleifend. Aliquam tempus libero orci, id placerat odio vehicula eu. Donec tincidunt justo dolor, sit amet tempus turpis varius sit amet. Suspendisse ut ex blandit, hendrerit enim tristique, iaculis ipsum. Vivamus venenatis dolor justo, eget scelerisque lacus dignissim quis. Duis imperdiet ex at aliquet cursus. Proin non ultricies leo. Fusce quam diam, laoreet quis fringilla vitae, viverra id magna. Nam laoreet sem in volutpat rhoncus.</div>
         * <script>
         *     $("#dialog").dialog({
         *         scrollable: true,
         *         height: 300,
         *         uiLibrary: 'bootstrap'
         *     });
         * </script>
         * @example Material.Design <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor quam in magna vulputate, vitae laoreet odio ultrices. Phasellus at efficitur magna. Mauris purus dolor, egestas quis leo et, vulputate dictum mauris. Vivamus maximus lectus sollicitudin lorem blandit tempor. Maecenas eget posuere mi. Suspendisse id hendrerit nibh. Morbi eu odio euismod, venenatis ipsum in, egestas nunc. Mauris dignissim metus ac risus porta eleifend. Aliquam tempus libero orci, id placerat odio vehicula eu. Donec tincidunt justo dolor, sit amet tempus turpis varius sit amet. Suspendisse ut ex blandit, hendrerit enim tristique, iaculis ipsum. Vivamus venenatis dolor justo, eget scelerisque lacus dignissim quis. Duis imperdiet ex at aliquet cursus. Proin non ultricies leo. Fusce quam diam, laoreet quis fringilla vitae, viverra id magna. Nam laoreet sem in volutpat rhoncus.</div>
         * <script>
         *     $("#dialog").dialog({
         *         scrollable: true,
         *         height: 300,
         *         uiLibrary: 'materialdesign'
         *     });
         * </script>
         */
scrollable:!1,/** The title of the dialog. Can be also set through the title attribute of the html element.
         * @type String
         * @default "Dialog"
         * @example Js.Config <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         title: 'My Custom Title',
         *         width: 400
         *     });
         * </script>
         * @example Html.Config <!-- draggable, dialog.base -->
         * <div id="dialog" title="My Custom Title" width="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog();
         * </script>
         */
title:void 0,/** The name of the UI library that is going to be in use. Currently we support Material Design and Bootstrap.
         * @additionalinfo The css file for bootstrap should be manually included if you use bootstrap.
         * @type string (bootstrap|materialdesign)
         * @default undefined
         * @example Bootstrap.3 <!-- draggable, dialog.base, bootstrap -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         uiLibrary: 'bootstrap'
         *     });
         * </script>
         * @example Bootstrap.4 <!-- draggable, dialog.base, bootstrap4 -->
         * <div id="dialog">
         *     <div data-role="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         *     <div data-role="footer">
         *         <button class="btn btn-default" data-role="close">Cancel</button>
         *         <button class="btn btn-default" onclick="dialog.close()">OK</button>
         *     </div>
         * </div>
         * <script>
         *     var dialog = $("#dialog").dialog({
         *         uiLibrary: 'bootstrap4'
         *     });
         * </script>
         * @example Material.Design <!-- draggable, dialog.base  -->
         * <div id="dialog">
         *   <div data-role="body">
         *     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         *     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         *   </div>
         *   <div data-role="footer">
         *     <button class="gj-button-md" onclick="dialog.close()">OK</button>
         *     <button class="gj-button-md" data-role="close">Cancel</button>
         *   </div>
         * </div>
         * <script>
         *     var dialog = $("#dialog").dialog({
         *         uiLibrary: 'materialdesign',
         *         resizable: true
         *     });
         * </script>
         */
uiLibrary:void 0,/** The width of the dialog.
         * @type number
         * @default 300
         * @example Fixed.Width <!-- draggable, dialog.base -->
         * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
         * <script>
         *     $("#dialog").dialog({
         *         width: 400
         *     });
         * </script>
         * @example Auto.Width <!-- draggable, dialog.base -->
         * <div id="dialog" title="Wikipedia">
         *   <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png" width="420"/>
         * </div>
         * <script>
         *     $("#dialog").dialog({
         *         width: 'auto'
         *     });
         * </script>
         */
width:300,style:{modal:"gj-modal",content:"gj-dialog-md",header:"gj-dialog-md-header gj-unselectable",headerTitle:"gj-dialog-md-title",headerCloseButton:"gj-dialog-md-close",body:"gj-dialog-md-body",footer:"gj-dialog-footer gj-dialog-md-footer"}},bootstrap:{style:{modal:"modal",content:"modal-content gj-dialog-bootstrap",header:"modal-header",headerTitle:"modal-title",headerCloseButton:"close",body:"modal-body",footer:"gj-dialog-footer modal-footer"}},bootstrap4:{style:{modal:"modal",content:"modal-content gj-dialog-bootstrap4",header:"modal-header",headerTitle:"modal-title",headerCloseButton:"close",body:"modal-body",footer:"gj-dialog-footer modal-footer"}}},/** 
  * @widget Dialog 
  * @plugin Base
  */
gj.dialog.events={/**
     * Triggered when the dialog is initialized.
     *
     * @event initialized
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="dialog.open()" class="gj-button-md">Open Dialog</button>
     * <script>
     *     var dialog = $("#dialog").dialog({
     *         autoOpen: false,
     *         initialized: function (e) {
     *             alert('The initialized event is fired.');
     *         }
     *     });
     * </script>
     */
initialized:function(e){e.trigger("initialized")},/**
     * Triggered before the dialog is opened.
     * @event opening
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="dialog.open()" class="gj-button-md">Open Dialog</button>
     * <script>
     *     var dialog = $("#dialog").dialog({
     *         autoOpen: false,
     *         opening: function (e) {
     *             alert('The opening event is fired.');
     *         },
     *         opened: function (e) {
     *             alert('The opened event is fired.');
     *         }
     *     });
     * </script>
     */
opening:function(e){e.trigger("opening")},/**
     * Triggered when the dialog is opened.
     * @event opened
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="dialog.open()" class="gj-button-md">Open Dialog</button>
     * <script>
     *     var dialog = $("#dialog").dialog({
     *         autoOpen: false,
     *         opening: function (e) {
     *             alert('The opening event is fired.');
     *         },
     *         opened: function (e) {
     *             alert('The opened event is fired.');
     *         }
     *     });
     * </script>
     */
opened:function(e){e.trigger("opened")},/**
     * Triggered before the dialog is closed.
     * @event closing
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Close the dialog in order to fire closing event.</div>
     * <button onclick="dialog.open()" class="gj-button-md">Open Dialog</button>
     * <script>
     *     var dialog = $("#dialog").dialog({
     *         autoOpen: false,
     *         closing: function (e) {
     *             alert('The closing event is fired.');
     *         },
     *         closed: function (e) {
     *             alert('The closed event is fired.');
     *         }
     *     });
     * </script>
     */
closing:function(e){e.trigger("closing")},/**
     * Triggered when the dialog is closed.
     * @event closed
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Close the dialog in order to fire closed event.</div>
     * <button onclick="dialog.open()" class="gj-button-md">Open Dialog</button>
     * <script>
     *     var dialog = $("#dialog").dialog({
     *         autoOpen: false,
     *         closing: function (e) {
     *             alert('The closing event is fired.');
     *         },
     *         closed: function (e) {
     *             alert('The closed event is fired.');
     *         }
     *     });
     * </script>
     */
closed:function(e){e.trigger("closed")},/**
     * Triggered while the dialog is being dragged.
     * @event drag
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <div id="logPanel" class="col-xs-12 well pre-scrollable" style="height: 200px"></div>
     * <script>
     *     var log = $('#logPanel');
     *     $("#dialog").dialog({
     *         drag: function (e) {
     *             log.append('<div class="row">The drag event is fired.</div>');
     *         },
     *         dragStart: function (e) {
     *             log.append('<div class="row">The dragStart event is fired.</div>');
     *         },
     *         dragStop: function (e) {
     *             log.append('<div class="row">The dragStop event is fired.</div>');
     *         }
     *     });
     * </script>
     */
drag:function(e){e.trigger("drag")},/**
     * Triggered when the user starts dragging the dialog.
     * @event dragStart
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <div id="logPanel" class="col-xs-12 well pre-scrollable" style="height: 200px"></div>
     * <script>
     *     var log = $('#logPanel');
     *     $("#dialog").dialog({
     *         drag: function (e) {
     *             log.append('<div class="row">The drag event is fired.</div>');
     *         },
     *         dragStart: function (e) {
     *             log.append('<div class="row">The dragStart event is fired.</div>');
     *         },
     *         dragStop: function (e) {
     *             log.append('<div class="row">The dragStop event is fired.</div>');
     *         }
     *     });
     * </script>
     */
dragStart:function(e){e.trigger("dragStart")},/**
     * Triggered after the dialog has been dragged.
     * @event dragStop
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <div id="logPanel" class="col-xs-12 well pre-scrollable" style="height: 200px"></div>
     * <script>
     *     var log = $('#logPanel');
     *     $("#dialog").dialog({
     *         drag: function (e) {
     *             log.append('<div class="row">The drag event is fired.</div>');
     *         },
     *         dragStart: function (e) {
     *             log.append('<div class="row">The dragStart event is fired.</div>');
     *         },
     *         dragStop: function (e) {
     *             log.append('<div class="row">The dragStop event is fired.</div>');
     *         }
     *     });
     * </script>
     */
dragStop:function(e){e.trigger("dragStop")},/**
     * Triggered while the dialog is being resized.
     * @event resize
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <div id="logPanel" class="col-xs-12 well pre-scrollable" style="height: 200px"></div>
     * <script>
     *     var log = $('#logPanel');
     *     $("#dialog").dialog({
     *         resizable: true,
     *         resize: function (e) {
     *             log.append('<div class="row">The resize event is fired.</div>');
     *         },
     *         resizeStart: function (e) {
     *             log.append('<div class="row">The resizeStart event is fired.</div>');
     *         },
     *         resizeStop: function (e) {
     *             log.append('<div class="row">The resizeStop event is fired.</div>');
     *         }
     *     });
     * </script>
     */
resize:function(e){e.trigger("resize")},/**
     * Triggered when the user starts resizing the dialog.
     * @event resizeStart
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <div id="logPanel" class="col-xs-12 well pre-scrollable" style="height: 200px"></div>
     * <script>
     *     var log = $('#logPanel');
     *     $("#dialog").dialog({
     *         resizable: true,
     *         resize: function (e) {
     *             log.append('<div class="row">The resize event is fired.</div>');
     *         },
     *         resizeStart: function (e) {
     *             log.append('<div class="row">The resizeStart event is fired.</div>');
     *         },
     *         resizeStop: function (e) {
     *             log.append('<div class="row">The resizeStop event is fired.</div>');
     *         }
     *     });
     * </script>
     */
resizeStart:function(e){e.trigger("resizeStart")},/**
     * Triggered after the dialog has been resized.
     * @event resizeStop
     * @param {object} e - event data
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <div id="logPanel" class="col-xs-12 well pre-scrollable" style="height: 200px"></div>
     * <script>
     *     var log = $('#logPanel');
     *     $("#dialog").dialog({
     *         resizable: true,
     *         resize: function (e) {
     *             log.append('<div class="row">The resize event is fired.</div>');
     *         },
     *         resizeStart: function (e) {
     *             log.append('<div class="row">The resizeStart event is fired.</div>');
     *         },
     *         resizeStop: function (e) {
     *             log.append('<div class="row">The resizeStop event is fired.</div>');
     *         }
     *     });
     * </script>
     */
resizeStop:function(e){e.trigger("resizeStop")}},gj.dialog.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"dialog"),gj.dialog.methods.localization(this),gj.dialog.methods.initialize(this),gj.dialog.events.initialized(this),this},localization:function(e){var t=e.data();void 0===t.title&&(t.title=gj.dialog.messages[t.locale].DefaultTitle)},getHTMLConfig:function(){var e=gj.widget.prototype.getHTMLConfig.call(this),t=this[0].attributes;return t.title&&(e.title=t.title.value),e},initialize:function(e){var t,n,i,r=e.data();e.addClass(r.style.content),gj.dialog.methods.setSize(e),r.closeOnEscape&&$(document).keyup(function(t){27===t.keyCode&&e.close()}),n=e.children('div[data-role="body"]'),0===n.length?(n=$('<div data-role="body"/>').addClass(r.style.body),e.wrapInner(n)):n.addClass(r.style.body),t=gj.dialog.methods.renderHeader(e),i=e.children('div[data-role="footer"]').addClass(r.style.footer),e.find('[data-role="close"]').on("click",function(){e.close()}),gj.draggable&&(r.draggable&&gj.dialog.methods.draggable(e,t),r.resizable&&gj.dialog.methods.resizable(e)),r.scrollable&&r.height&&(e.addClass("gj-dialog-scrollable"),e.on("opened",function(){e.children('div[data-role="body"]').css("height",r.height-t.outerHeight()-(i.length?i.outerHeight():0))})),gj.core.center(e),r.modal&&e.wrapAll('<div data-role="modal" class="'+r.style.modal+'"/>'),r.autoOpen&&e.open()},setSize:function(e){var t=e.data();t.width&&e.css("width",t.width),t.height&&e.css("height",t.height)},renderHeader:function(e){var t,n,i,r=e.data();return t=e.children('div[data-role="header"]'),0===t.length&&(t=$('<div data-role="header" />'),e.prepend(t)),t.addClass(r.style.header),n=t.find('[data-role="title"]'),0===n.length&&(n=$('<h4 data-role="title">'+r.title+"</h4>"),t.append(n)),n.addClass(r.style.headerTitle),i=t.find('[data-role="close"]'),0===i.length&&r.closeButtonInHeader?(i=$('<button type="button" data-role="close" title="'+gj.dialog.messages[r.locale].Close+'"><span>×</span></button>'),i.addClass(r.style.headerCloseButton),t.append(i)):i.length>0&&!1===r.closeButtonInHeader?i.hide():i.addClass(r.style.headerCloseButton),t},draggable:function(e,t){e.appendTo("body"),t.addClass("gj-draggable"),e.draggable({handle:t,start:function(){e.addClass("gj-unselectable"),gj.dialog.events.dragStart(e)},stop:function(){e.removeClass("gj-unselectable"),gj.dialog.events.dragStop(e)}})},resizable:function(e){var t={drag:gj.dialog.methods.resize,start:function(){e.addClass("gj-unselectable"),gj.dialog.events.resizeStart(e)},stop:function(){this.removeAttribute("style"),e.removeClass("gj-unselectable"),gj.dialog.events.resizeStop(e)}};e.append($('<div class="gj-resizable-handle gj-resizable-n"></div>').draggable($.extend(!0,{horizontal:!1},t))),e.append($('<div class="gj-resizable-handle gj-resizable-e"></div>').draggable($.extend(!0,{vertical:!1},t))),e.append($('<div class="gj-resizable-handle gj-resizable-s"></div>').draggable($.extend(!0,{horizontal:!1},t))),e.append($('<div class="gj-resizable-handle gj-resizable-w"></div>').draggable($.extend(!0,{vertical:!1},t))),e.append($('<div class="gj-resizable-handle gj-resizable-ne"></div>').draggable($.extend(!0,{},t))),e.append($('<div class="gj-resizable-handle gj-resizable-nw"></div>').draggable($.extend(!0,{},t))),e.append($('<div class="gj-resizable-handle gj-resizable-sw"></div>').draggable($.extend(!0,{},t))),e.append($('<div class="gj-resizable-handle gj-resizable-se"></div>').draggable($.extend(!0,{},t)))},resize:function(e,t){var n,i,r,o,a,s,l,d,c=!1;
// TODO: Include margins in the calculations
return n=$(this),i=n.parent(),r=gj.core.position(this),offset={top:t.top-r.top,left:t.left-r.left},o=i.data(),n.hasClass("gj-resizable-n")?(a=i.height()-offset.top,l=i.offset().top+offset.top):n.hasClass("gj-resizable-e")?s=i.width()+offset.left:n.hasClass("gj-resizable-s")?a=i.height()+offset.top:n.hasClass("gj-resizable-w")?(s=i.width()-offset.left,d=i.offset().left+offset.left):n.hasClass("gj-resizable-ne")?(a=i.height()-offset.top,l=i.offset().top+offset.top,s=i.width()+offset.left):n.hasClass("gj-resizable-nw")?(a=i.height()-offset.top,l=i.offset().top+offset.top,s=i.width()-offset.left,d=i.offset().left+offset.left):n.hasClass("gj-resizable-se")?(a=i.height()+offset.top,s=i.width()+offset.left):n.hasClass("gj-resizable-sw")&&(a=i.height()+offset.top,s=i.width()-offset.left,d=i.offset().left+offset.left),a&&(!o.minHeight||a>=o.minHeight)&&(!o.maxHeight||a<=o.maxHeight)&&(i.height(a),l&&i.css("top",l),c=!0),s&&(!o.minWidth||s>=o.minWidth)&&(!o.maxWidth||s<=o.maxWidth)&&(i.width(s),d&&i.css("left",d),c=!0),c&&gj.dialog.events.resize(i),c},open:function(e,t){var n;return gj.dialog.events.opening(e),e.css("display","block"),e.closest('div[data-role="modal"]').css("display","block"),n=e.children('div[data-role="footer"]'),n.length&&n.outerHeight()&&e.children('div[data-role="body"]').css("margin-bottom",n.outerHeight()),void 0!==t&&e.find('[data-role="title"]').html(t),gj.dialog.events.opened(e),e},close:function(e){return e.is(":visible")&&(gj.dialog.events.closing(e),e.css("display","none"),e.closest('div[data-role="modal"]').css("display","none"),gj.dialog.events.closed(e)),e},isOpen:function(e){return e.is(":visible")},content:function(e,t){var n=e.children('div[data-role="body"]');return void 0===t?n.html():n.html(t)},destroy:function(e,t){var n=e.data();return n&&(!1===t?e.remove():(e.close(),e.off(),e.removeData(),e.removeAttr("data-type"),e.removeClass(n.style.content),e.find('[data-role="header"]').removeClass(n.style.header),e.find('[data-role="title"]').removeClass(n.style.headerTitle),e.find('[data-role="close"]').remove(),e.find('[data-role="body"]').removeClass(n.style.body),e.find('[data-role="footer"]').removeClass(n.style.footer))),e}},/** 
  * @widget Dialog 
  * @plugin Base
  */
gj.dialog.widget=function(e,t){var n=this,i=gj.dialog.methods;/**
     * Opens the dialog.
     * @method
     * @param {String} title - The dialog title.
     * @fires opening, opened
     * @return dialog
     * @example Sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="dialog.open()" class="gj-button-md">Open Dialog</button>
     * <script>
     *     var dialog = $('#dialog').dialog({
     *         autoOpen: false
     *     });
     * </script>
     * @example Title <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="dialog.open('Custom Text')" class="gj-button-md">Open Dialog</button>
     * <script>
     *     var dialog = $('#dialog').dialog({
     *         autoOpen: false
     *     });
     * </script>
     */
/**
     * Close the dialog.
     * @method
     * @fires closing, closed
     * @return dialog
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="dialog.open()" class="gj-button-md">Open Dialog</button>
     * <button onclick="dialog.close()" class="gj-button-md">Close Dialog</button>
     * <script>
     *     var dialog = $('#dialog').dialog();
     * </script>
     */
/**
     * Check if the dialog is currently open.
     * @method
     * @return boolean
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="dialog.open()" class="gj-button-md">Open Dialog</button>
     * <button onclick="dialog.close()" class="gj-button-md">Close Dialog</button>
     * <button onclick="alert($('#dialog').dialog('isOpen'))" class="gj-button-md">isOpen</button>
     * <script>
     *     var dialog = $('#dialog').dialog();
     * </script>
     */
/**
     * Gets or set the content of a dialog. Supports chaining when used as a setter.
     * @method
     * @param {String} content - The content of the Dialog.
     * @return String|Dialog
     * @example sample <!-- draggable, dialog.base, bootstrap -->
     * <div id="dialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="alert(dialog.content())" class="btn btn-default">Get Content</button>
     * <button onclick="dialog.content('New Test Content Value')" class="btn btn-default">Set Content</button>
     * <script>
     *     var dialog = $('#dialog').dialog({ uiLibrary: 'bootstrap' });
     * </script>
     */
/**
     * Destroy the dialog.
     * @method
     * @param {boolean} keepHtml - If this flag is set to false, the dialog html markup will be removed from the HTML dom tree.
     * @return void
     * @example Keep.HTML.Markup <!-- draggable, dialog.base -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="create()" class="gj-button-md">Create</button>
     * <button onclick="dialog.destroy()" class="gj-button-md">Destroy</button>
     * <script>
     *     var dialog;
     *     function create() { 
     *         dialog = $('#dialog').dialog();
     *     }
     * </script>
     * @example Remove.HTML.Markup <!-- draggable, dialog.base -->
     * <div id="dialog" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
     * <button onclick="create()" class="gj-button-md">Create</button>
     * <button onclick="dialog.destroy(false)" class="gj-button-md">Destroy</button>
     * <script>
     *     var dialog;
     *     function create() {
     *         if ($('#dialog').length === 0) {
     *             alert('The dialog can not be created.');
     *         } else {
     *             dialog = $('#dialog').dialog();
     *         }
     *     }
     * </script>
     */
return n.open=function(e){return i.open(this,e)},n.close=function(){return i.close(this)},n.isOpen=function(){return i.isOpen(this)},n.content=function(e){return i.content(this,e)},n.destroy=function(e){return i.destroy(this,e)},$.extend(e,n),"dialog"!==e.attr("data-type")&&i.init.call(e,t),e},gj.dialog.widget.prototype=new gj.widget,gj.dialog.widget.constructor=gj.dialog.widget,gj.dialog.widget.prototype.getHTMLConfig=gj.dialog.methods.getHTMLConfig,function(e){e.fn.dialog=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.dialog.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.dialog.widget(this,e)}}}(jQuery),gj.dialog.messages["en-us"]={Close:"Close",DefaultTitle:"Dialog"},/* global window alert jQuery */
/** 
 * @widget Draggable 
 * @plugin Base
 */
gj.draggable={plugins:{}},gj.draggable.config={base:{/** If specified, restricts dragging from starting unless the mousedown occurs on the specified element.
         * Only elements that descend from the draggable element are permitted.
         * @type jquery element
         * @default undefined
         * @example sample <!-- draggable -->
         * <style>
         * .element { border: 1px solid #999; width: 300px; height: 200px; }
         * .handle { background-color: #DDD; cursor: move; width: 200px; margin: 5px auto 0px auto; text-align: center; padding: 5px; }
         * </style>
         * <div id="element" class="element">
         *   <div id="handle" class="handle">Handle for dragging</div>
         * </div>
         * <script>
         *     $('#element').draggable({
         *         handle: $('#handle')
         *     });
         * </script>
         */
handle:void 0,/** If set to false, restricts dragging on vertical direction.
         * @type Boolean
         * @default true
         * @example sample <!-- draggable -->
         * <style>
         * .element { border: 1px solid #999; width: 300px; height: 200px; cursor: move; text-align: center; background-color: #DDD; }
         * </style>
         * <div id="element" class="element">
         *     drag me<br/>
         *     <i>(dragging on vertical direction is disabled)</i>
         * </div>
         * <script>
         *     $('#element').draggable({
         *         vertical: false
         *     });
         * </script>
         */
vertical:!0,/** If set to false, restricts dragging on horizontal direction.
         * @type Boolean
         * @default true
         * @example sample <!-- draggable -->
         * <style>
         * .element { border: 1px solid #999; width: 300px; height: 200px; cursor: move; text-align: center; background-color: #DDD; }
         * </style>
         * <div id="element" class="element">
         *     drag me<br/>
         *     <i>(dragging on horizontal direction is disabled)</i>
         * </div>
         * <script>
         *     $('#element').draggable({
         *         horizontal: false
         *     });
         * </script>
         */
horizontal:!0,/** Constrains dragging to within the bounds of the specified element.
         * @type Element
         * @default undefined
         * @example sample <!-- draggable -->
         * <style>
         * .container { border: 1px solid #999; width: 600px; height: 600px; }
         * .element { border: 1px solid #999; width: 300px; height: 200px; cursor: move; text-align: center; background-color: #DDD; }
         * </style>
         * <div id="container" class="container">
         *     <div id="element" class="element">drag me</div>
         * </div>
         * <script>
         *     $('#element').draggable({
         *         containment: document.getElementById('container')
         *     });
         * </script>
         */
containment:void 0}},gj.draggable.methods={init:function(e){var t,n,i=this;return gj.widget.prototype.init.call(this,e,"draggable"),n=this.data(),i.attr("data-draggable","true"),t=gj.draggable.methods.getHandleElement(i),t.on("touchstart mousedown",function(e){var r=gj.core.position(i[0]);i[0].style.top=r.top+"px",i[0].style.left=r.left+"px",i[0].style.position="fixed",i.attr("draggable-dragging",!0),i.removeAttr("draggable-x").removeAttr("draggable-y"),gj.documentManager.subscribeForEvent("touchmove",i.data("guid"),gj.draggable.methods.createMoveHandler(i,t,n)),gj.documentManager.subscribeForEvent("mousemove",i.data("guid"),gj.draggable.methods.createMoveHandler(i,t,n))}),gj.documentManager.subscribeForEvent("mouseup",i.data("guid"),gj.draggable.methods.createUpHandler(i)),gj.documentManager.subscribeForEvent("touchend",i.data("guid"),gj.draggable.methods.createUpHandler(i)),gj.documentManager.subscribeForEvent("touchcancel",i.data("guid"),gj.draggable.methods.createUpHandler(i)),i},getHandleElement:function(e){var t=e.data("handle");return t&&t.length?t:e},createUpHandler:function(e){return function(t){"true"===e.attr("draggable-dragging")&&(e.attr("draggable-dragging",!1),gj.documentManager.unsubscribeForEvent("mousemove",e.data("guid")),gj.documentManager.unsubscribeForEvent("touchmove",e.data("guid")),gj.draggable.events.stop(e,{x:e.mouseX(t),y:e.mouseY(t)}))}},createMoveHandler:function(e,t,n){return function(t){var i,r,o,a,s,l;"true"===e.attr("draggable-dragging")&&(i=Math.round(e.mouseX(t)),r=Math.round(e.mouseY(t)),s=e.attr("draggable-x"),l=e.attr("draggable-y"),s&&l?(o=n.horizontal?i-parseInt(s,10):0,a=n.vertical?r-parseInt(l,10):0,gj.draggable.methods.move(e[0],n,o,a,i,r)):gj.draggable.events.start(e,i,r),e.attr("draggable-x",i),e.attr("draggable-y",r))}},move:function(e,t,n,i,r,o){var a,s,l,d=gj.core.position(e),c=d.top+i,u=d.left+n;t.containment&&(a=gj.core.position(t.containment),s=a.top+gj.core.height(t.containment)-gj.core.height(e),l=a.left+gj.core.width(t.containment)-gj.core.width(e),c>a.top&&c<s?(a.top>=o||a.bottom<=o)&&(c=d.top):c=c<=a.top?a.top+1:s-1,u>a.left&&u<l?(a.left>=r||a.right<=r)&&(u=d.left):u=u<=a.left?a.left+1:l-1),!1!==gj.draggable.events.drag($(e),c,u,r,o)&&(e.style.top=c+"px",e.style.left=u+"px")},destroy:function(e){return"true"===e.attr("data-draggable")&&(gj.documentManager.unsubscribeForEvent("mouseup",e.data("guid")),e.removeData(),e.removeAttr("data-guid"),e.removeAttr("data-draggable"),e.off("drag").off("start").off("stop"),gj.draggable.methods.getHandleElement(e).off("mousedown")),e}},gj.draggable.events={/**
     * Triggered while the mouse is moved during the dragging, immediately before the current move happens.
     *
     * @event drag
     * @param {object} e - event data
     * @param {object} newPosition - New position of the draggable element as { top, left } object.
     * @param {object} mousePosition - Current mouse position as { x, y } object.
     * @example sample <!-- draggable -->
     * <style>
     * .element { border: 1px solid #999; width: 300px; height: 200px; cursor: move; text-align: center; background-color: #DDD; }
     * </style>
     * <div id="element" class="element gj-unselectable">drag me</div>
     * <script>
     *     $('#element').draggable({
     *         drag: function (e, newPosition, mousePosition) {
     *             $('body').append('<div>The drag event is fired. New Element Position = { top:' + offset.top + ', left: ' + offset.left + '}.</div>');
     *         }
     *     });
     * </script>
     */
drag:function(e,t,n,i,r){return e.triggerHandler("drag",[{top:t,left:n},{x:i,y:r}])},/**
     * Triggered when dragging starts.
     *
     * @event start
     * @param {object} e - event data
     * @param {object} mousePosition - Current mouse position as { x, y } object.
     * @example sample <!-- draggable -->
     * <style>
     * .element { border: 1px solid #999; width: 300px; height: 200px; cursor: move; text-align: center; background-color: #DDD; }
     * </style>
     * <div id="element" class="element gj-unselectable">
     *   drag me
     * </div>
     * <script>
     *     $('#element').draggable({
     *         start: function (e, mousePosition) {
     *             $('body').append('<div>The start event is fired. mousePosition { x:' + mousePosition.x + ', y: ' + mousePosition.y + '}.</div>');
     *         }
     *     });
     * </script>
     */
start:function(e,t,n){e.triggerHandler("start",[{x:t,y:n}])},/**
     * Triggered when dragging stops.
     *
     * @event stop
     * @param {object} e - event data
     * @param {object} mousePosition - Current mouse position as { x, y } object.
     * @example sample <!-- draggable -->
     * <style>
     * .element { border: 1px solid #999; width: 300px; height: 200px; cursor: move; text-align: center; background-color: #DDD; }
     * </style>
     * <div id="element" class="element gj-unselectable">
     *   drag me
     * </div>
     * <script>
     *     $('#element').draggable({
     *         stop: function (e, offset) {
     *             $('body').append('<div>The stop event is fired.</div>');
     *         }
     *     });
     * </script>
     */
stop:function(e,t){e.triggerHandler("stop",[t])}},gj.draggable.widget=function(e,t){var n=this,i=gj.draggable.methods;/** Remove draggable functionality from the element.
         * @method
         * @return jquery element
         * @example sample <!-- draggable -->
         * <style>
         * .element { border: 1px solid #999; width: 300px; height: 200px; cursor: move; text-align: center; background-color: #DDD; }
         * </style>
         * <button onclick="dragEl.destroy()" class="gj-button-md">Destroy</button>
         * <div id="element" class="element">Drag Me</div>
         * <script>
         *     var dragEl = $('#element').draggable();
         * </script>
         */
return e.destroy||(n.destroy=function(){return i.destroy(this)}),$.extend(e,n),"true"!==e.attr("data-draggable")&&i.init.call(e,t),e},gj.draggable.widget.prototype=new gj.widget,gj.draggable.widget.constructor=gj.draggable.widget,function(e){e.fn.draggable=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.draggable.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.draggable.widget(this,e)}}}(jQuery),/* global window alert jQuery */
/** 
 * @widget Droppable 
 * @plugin Base
 */
gj.droppable={plugins:{}},gj.droppable.config={/** If specified, the class will be added to the droppable while draggable is being hovered over the droppable.
     * @type string
     * @default undefined
     * @example sample <!-- droppable, draggable -->
     * <style>
     * .draggable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .droppable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .hover { background-color: #FF0000; }
     * </style>
     * <div id="droppable" class="droppable">Drop Here</div>
     * <div id="draggable" class="draggable">Drag Me</div>
     * <script>
     *     $('#draggable').draggable();
     *     $('#droppable').droppable({ hoverClass: 'hover' });
     * </script>
     */
hoverClass:void 0},gj.droppable.methods={init:function(e){var t=this;return gj.widget.prototype.init.call(this,e,"droppable"),t.attr("data-droppable","true"),gj.documentManager.subscribeForEvent("mousedown",t.data("guid"),gj.droppable.methods.createMouseDownHandler(t)),gj.documentManager.subscribeForEvent("mousemove",t.data("guid"),gj.droppable.methods.createMouseMoveHandler(t)),gj.documentManager.subscribeForEvent("mouseup",t.data("guid"),gj.droppable.methods.createMouseUpHandler(t)),t},createMouseDownHandler:function(e){return function(t){e.isDragging=!0}},createMouseMoveHandler:function(e){return function(t){if(e.isDragging){var n=e.data("hoverClass"),i={x:e.mouseX(t),y:e.mouseY(t)},r=gj.droppable.methods.isOver(e,i);r!=e.isOver&&(r?(n&&e.addClass(n),gj.droppable.events.over(e,i)):(n&&e.removeClass(n),gj.droppable.events.out(e))),e.isOver=r}}},createMouseUpHandler:function(e){return function(t){var n={left:e.mouseX(t),top:e.mouseY(t)};e.isDragging=!1,gj.droppable.methods.isOver(e,n)&&gj.droppable.events.drop(e)}},isOver:function(e,t){var n=e.offset().top,i=e.offset().left;return t.x>i&&t.x<i+e.outerWidth(!0)&&t.y>n&&t.y<n+e.outerHeight(!0)},destroy:function(e){return"true"===e.attr("data-droppable")&&(gj.documentManager.unsubscribeForEvent("mousedown",e.data("guid")),gj.documentManager.unsubscribeForEvent("mousemove",e.data("guid")),gj.documentManager.unsubscribeForEvent("mouseup",e.data("guid")),e.removeData(),e.removeAttr("data-guid"),e.removeAttr("data-droppable"),e.off("drop").off("over").off("out")),e}},gj.droppable.events={/** Triggered when a draggable element is dropped.
     * @event drop
     * @param {object} e - event data
     * @example sample <!-- droppable, draggable -->
     * <style>
     * .draggable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .droppable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .drop { background-color: #FF0000; }
     * </style>
     * <div id="droppable" class="droppable">Drop Here</div>
     * <div id="draggable" class="draggable">Drag Me</div>
     * <script>
     *     $('#draggable').draggable();
     *     $('#droppable').droppable({ drop: function() { $(this).addClass('drop') } });
     * </script>
     */
drop:function(e,t,n){e.trigger("drop",[{top:n,left:t}])},/** Triggered when a draggable element is dragged over the droppable.
     * @event over
     * @param {object} e - event data
     * @param {object} mousePosition - Current mouse position as { top, left } object.
     * @example sample <!-- droppable, draggable -->
     * <style>
     * .draggable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .droppable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .hover { background-color: #FF0000; }
     * </style>
     * <div id="droppable" class="droppable">Drop Here</div>
     * <div id="draggable" class="draggable">Drag Me</div>
     * <script>
     *     $('#draggable').draggable();
     *     $('#droppable').droppable({
     *         over: function() { 
     *             $(this).addClass('hover')
     *         },
     *         out: function() {
     *             $(this).removeClass('hover')
     *         }
     *     });
     * </script>
     */
over:function(e,t){e.trigger("over",[t])},/** Triggered when a draggable element is dragged out of the droppable.
     * @event out
     * @param {object} e - event data
     * @example sample <!-- droppable, draggable -->
     * <style>
     * .draggable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .droppable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .hover { background-color: #FF0000; }
     * </style>
     * <div id="droppable" class="droppable">Drop Here</div>
     * <div id="draggable" class="draggable">Drag Me</div>
     * <script>
     *     $('#draggable').draggable();
     *     $('#droppable').droppable({
     *         over: function() { $(this).addClass('hover') },
     *         out: function() { $(this).removeClass('hover') }
     *     });
     * </script>
     */
out:function(e){e.trigger("out")}},gj.droppable.widget=function(e,t){var n=this,i=gj.droppable.methods;/** Removes the droppable functionality.
     * @method
     * @return jquery element
     * @example sample <!-- draggable, droppable -->
     * <button onclick="create()" class="gj-button-md">Create</button>
     * <button onclick="dropEl.destroy()" class="gj-button-md">Destroy</button>
     * <br/><br/>
     * <style>
     * .draggable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .droppable { border: 1px solid #999; width: 300px; height: 200px; text-align: center; }
     * .hover { background-color: #FF0000; }
     * </style>
     * <div id="droppable" class="droppable">Drop Here</div>
     * <div id="draggable" class="draggable">Drag Me</div>
     * <script>
     *     var dropEl;
     *     $('#draggable').draggable();
     *     function create() {
     *         dropEl = $('#droppable').droppable({
     *             hoverClass: 'hover'
     *         });
     *     }
     *     create();
     * </script>
     */
return n.isOver=!1,n.isDragging=!1,n.destroy=function(){return i.destroy(this)},n.isOver=function(e){return i.isOver(this,e)},$.extend(e,n),"true"!==e.attr("data-droppable")&&i.init.call(e,t),e},gj.droppable.widget.prototype=new gj.widget,gj.droppable.widget.constructor=gj.droppable.widget,function(e){e.fn.droppable=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.droppable.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.droppable.widget(this,e)}}}(jQuery),/* global window alert jQuery gj */
/**
  * @widget Grid
  * @plugin Base
  */
gj.grid={plugins:{},messages:{}},gj.grid.config={base:{/** The data source for the grid.
         * @additionalinfo If set to string, then the grid is going to use this string as a url for ajax requests to the server.<br />
         * If set to object, then the grid is going to use this object as settings for the <a href="http://api.jquery.com/jquery.ajax/" target="_new">jquery ajax</a> function.<br />
         * If set to array, then the grid is going to use the array as data for rows.
         * @type (string|object|array)
         * @default undefined
         * @example Remote.JS.Configuration <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         columns: [ { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         * @example Remote.Html.Configuration <!-- grid -->
         * <table id="grid" data-source="/Players/Get">
         *     <thead>
         *         <tr>
         *             <th width="56" data-field="ID">#</th>
         *             <th>Name</th>
         *             <th>PlaceOfBirth</th>
         *         </tr>
         *     </thead>
         * </table>
         * <script>
         *     $('#grid').grid();
         * </script>
         * @example Local.DataSource <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var data = [
         *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     $('#grid').grid({
         *         dataSource: data,
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         * @example Html.DataSource <!-- grid, dropdown -->
         * <table id="grid">
         *     <thead>
         *         <tr>
         *             <th width="56" data-field="ID">#</th>
         *             <th data-sortable="true">Name</th>
         *             <th data-field="PlaceOfBirth" data-sortable="true">Place Of Birth</th>
         *         </tr>
         *     </thead>
         *     <tbody>
         *         <tr>
         *             <td>1</td>
         *             <td>Hristo Stoichkov</td>
         *             <td>Plovdiv, Bulgaria</td>
         *         </tr>
         *         <tr>
         *             <td>2</td>
         *             <td>Ronaldo Luis Nazario de Lima</td>
         *             <td>Rio de Janeiro, Brazil</td>
         *         </tr>
         *         <tr>
         *             <td>3</td>
         *             <td>David Platt</td>
         *             <td>Chadderton, Lancashire, England</td>
         *         </tr>
         *     </tbody>
         * </table>
         * <script>
         *     $('#grid').grid({ pager: { limit: 2, sizes: [2, 5, 10, 20] }});
         * </script>
         * @example Remote.Custom.Render <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var grid, onSuccessFunc = function (response) {
         *         alert('The result contains ' + response.records.length + ' records.');
         *         grid.render(response);
         *     };
         *     grid = $('#grid').grid({
         *         dataSource: { url: '/Players/Get', data: {}, success: onSuccessFunc },
         *         columns: [ { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         * @example Remote.Custom.Error <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var grid, onErrorFunc = function (response) {
         *         alert('Server error.');
         *     };
         *     grid = $('#grid').grid({
         *         dataSource: { url: '/DataSources/InvalidUrl', error: onErrorFunc },
         *         columns: [ { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         */
dataSource:void 0,/** An array that holds the configurations of each column from the grid.
         * @type array
         * @example JS.Configuration <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth', name: 'Birth Place' } ]
         *     });
         * </script>
         */
columns:[],/** Auto generate column for each field in the datasource when set to true.
         * @type array
         * @example sample <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         autoGenerateColumns: true
         *     });
         * </script>
         */
autoGenerateColumns:!1,/** An object that holds the default configuration settings of each column from the grid.
         * @type object
         * @example sample <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         defaultColumnSettings: { align: 'right' },
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth', name: 'Birth Place' } ]
         *     });
         * </script>
         */
defaultColumnSettings:{/** If set to true the column will not be displayed in the grid. By default all columns are displayed.
             * @alias column.hidden
             * @type boolean
             * @default false
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *            { field: 'ID', width: 56 },
             *            { field: 'Name' },
             *            { field: 'PlaceOfBirth', hidden: true }
             *        ]
             *     });
             * </script>
             */
hidden:!1,/** The width of the column. Numeric values are treated as pixels.
             * If the width is undefined the width of the column is not set and depends on the with of the table(grid).
             * @alias column.width
             * @type number|string
             * @default undefined
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', width: 120 },
             *             { field: 'PlaceOfBirth' }
             *         ]
             *     });
             * </script>
             */
width:void 0,/** Indicates if the column is sortable.
             * If set to true the user can click the column header and sort the grid by the column source field.
             * @alias column.sortable
             * @type boolean|object
             * @default false
             * @example Remote <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', sortable: true },
             *             { field: 'PlaceOfBirth', sortable: false }
             *         ]
             *     });
             * </script>
             * @example Local.Custom <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     var data = [
             *         { 'ID': 1, 'Value1': 'Foo', 'Value2': 'Foo' },
             *         { 'ID': 2, 'Value1': 'bar', 'Value2': 'bar' },
             *         { 'ID': 3, 'Value1': 'moo', 'Value2': 'moo' },
             *         { 'ID': 4, 'Value1': null, 'Value2': undefined }
             *     ];
             *     var caseSensitiveSort = function (direction, column) { 
             *         return function (recordA, recordB) {
             *             var a = recordA[column.field] || '',
             *                 b = recordB[column.field] || '';
             *             return (direction === 'asc') ? a < b : b < a;
             *         };
             *     };
             *     $('#grid').grid({
             *         dataSource: data,
             *         columns: [
             *             { field: 'ID' },
             *             { field: 'Value1', sortable: true },
             *             { field: 'Value2', sortable: { sorter: caseSensitiveSort } }
             *         ]
             *     });
             * </script>
             * @example Remote.Bootstrap.3 <!-- bootstrap, grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap',
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name', sortable: true },
             *             { field: 'PlaceOfBirth', sortable: false }
             *         ]
             *     });
             * </script>
             * @example Remote.Bootstrap.4.Material.Icons <!-- bootstrap4, grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap4',
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', sortable: true },
             *             { field: 'PlaceOfBirth', sortable: false }
             *         ]
             *     });
             * </script>
             * @example Remote.Bootstrap.4.FontAwesome <!-- bootstrap4, fontawesome, grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap4',
             *         iconsLibrary: 'fontawesome',
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 42 },
             *             { field: 'Name', sortable: true },
             *             { field: 'PlaceOfBirth', sortable: false }
             *         ]
             *     });
             * </script>
             */
sortable:!1,/** Indicates the type of the column.
             * @alias column.type
             * @type text|checkbox|icon
             * @default 'text'
             * @example Bootstrap.3.Icon <!-- grid, bootstrap -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name', title: 'Player' },
             *             { field: 'PlaceOfBirth', title: 'Place of Birth' },
             *             {
             *               title: '', field: 'Info', width: 32, type: 'icon', icon: 'glyphicon-info-sign',
             *               events: {
             *                 'click': function (e) {
             *                     alert('record with id=' + e.data.id + ' is clicked.');
             *                 }
             *               }
             *             }
             *         ]
             *     });
             * </script>
             * @example Bootstrap.4.Icon <!-- grid, bootstrap4, fontawesome -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap4',
             *         columns: [
             *             { field: 'ID', width: 42 },
             *             { field: 'Name', title: 'Player' },
             *             { field: 'PlaceOfBirth', title: 'Place of Birth' },
             *             {
             *               title: '', field: 'Info', width: 42, type: 'icon', icon: 'fa fa-pencil',
             *               events: {
             *                 'click': function (e) {
             *                     alert('record with id=' + e.data.id + ' is clicked.');
             *                 }
             *               }
             *             }
             *         ]
             *     });
             * </script>
             * @example Bootstrap.3.Checkbox <!-- grid, checkbox, bootstrap -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name', title: 'Player' },
             *             { field: 'PlaceOfBirth', title: 'Place of Birth' },
             *             { title: 'Active?', field: 'IsActive', width: 80, type: 'checkbox', align: 'center' }
             *         ]
             *     });
             * </script>
             * @example Bootstrap.4.Checkbox <!-- grid, checkbox, bootstrap4 -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap4',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name', title: 'Player' },
             *             { field: 'PlaceOfBirth', title: 'Place of Birth' },
             *             { title: 'Active?', field: 'IsActive', width: 80, type: 'checkbox', align: 'center' }
             *         ]
             *     });
             * </script>
             */
type:"text",/** The caption that is going to be displayed in the header of the grid.
             * @alias column.title
             * @type string
             * @default undefined
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', title: 'Player' },
             *             { field: 'PlaceOfBirth', title: 'Place of Birth' }
             *         ]
             *     });
             * </script>
             */
title:void 0,/** The field name to which the column is bound.
             * If the column.title is not defined this value is used as column.title.
             * @alias column.field
             * @type string
             * @default undefined
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name' },
             *             { field: 'PlaceOfBirth', title: 'Place of Birth' }
             *         ]
             *     });
             * </script>
             */
field:void 0,/** This setting control the alignment of the text in the cell.
             * @alias column.align
             * @type left|right|center|justify|initial|inherit
             * @default undefined
             * @example Material.Design <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 100, align: 'center' },
             *             { field: 'Name', align: 'right' },
             *             { field: 'PlaceOfBirth', align: 'left' }
             *         ]
             *     });
             * </script>
             * @example Bootstrap.4 <!-- grid, bootstrap4 -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap4',
             *         columns: [
             *             { field: 'ID', width: 56, align: 'center' },
             *             { field: 'Name', align: 'right' },
             *             { field: 'PlaceOfBirth', align: 'left' }
             *         ]
             *     });
             * </script>
             */
align:void 0,/** The name(s) of css class(es) that are going to be applied to all cells inside that column, except the header cell.
             * @alias column.cssClass
             * @type string
             * @default undefined
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <style>
             * .nowrap { white-space: nowrap }
             * .bold { font-weight: bold }
             * </style>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', width: 100, cssClass: 'nowrap bold' },
             *             { field: 'PlaceOfBirth' }
             *         ]
             *     });
             * </script>
             */
cssClass:void 0,/** The name(s) of css class(es) that are going to be applied to the header cell of that column.
             * @alias column.headerCssClass
             * @type string
             * @default undefined
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <style>
             * .italic { font-style: italic }
             * </style>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', headerCssClass: 'italic' },
             *             { field: 'PlaceOfBirth' }
             *         ]
             *     });
             * </script>
             */
headerCssClass:void 0,/** The text for the cell tooltip.
             * @alias column.tooltip
             * @type string
             * @default undefined
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56, tooltip: 'This is my tooltip 1.' },
             *             { field: 'Name', tooltip: 'This is my tooltip 2.' },
             *             { field: 'PlaceOfBirth', tooltip: 'This is my tooltip 3.' }
             *         ]
             *     });
             * </script>
             */
tooltip:void 0,/** Css class for icon that is going to be in use for the cell.
             * This setting can be in use only with combination of type icon.
             * @alias column.icon
             * @type string
             * @default undefined
             * @example sample <!-- bootstrap, grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name' },
             *             { field: 'PlaceOfBirth' },
             *             { title: '', field: 'Edit', width: 32, type: 'icon', icon: 'glyphicon-pencil', events: { 'click': function (e) { alert('name=' + e.data.record.Name); } } }
             *         ]
             *     });
             * </script>
             */
icon:void 0,/** Configuration object with event names as keys and functions as values that are going to be bind to each cell from the column.
             * Each function is going to receive event information as a parameter with info in the 'data' field for id, field name and record data.
             * @alias column.events
             * @type object
             * @default undefined
             * @example javascript.configuration <!-- bootstrap, grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             {
             *               field: 'Name',
             *               events: {
             *                 'mouseenter': function (e) {
             *                     e.stopPropagation();
             *                     $(e.currentTarget).css('background-color', 'red');
             *                 },
             *                 'mouseleave': function (e) {
             *                     e.stopPropagation();
             *                     $(e.currentTarget).css('background-color', '');
             *                 }
             *               }
             *             },
             *             { field: 'PlaceOfBirth' },
             *             {
             *               title: '', field: 'Info', width: 34, type: 'icon', icon: 'glyphicon-info-sign',
             *               events: {
             *                 'click': function (e) {
             *                     alert('record with id=' + e.data.id + ' is clicked.'); }
             *                 }
             *             }
             *         ]
             *     });
             * </script>
             * @example html.configuration <!-- bootstrap, grid -->
             * <table id="grid" data-source="/Players/Get" data-ui-library="bootstrap">
             *     <thead>
             *         <tr>
             *             <th data-field="ID" width="34">ID</th>
             *             <th data-events="mouseenter: onMouseEnter, mouseleave: onMouseLeave">Name</th>
             *             <th data-field="PlaceOfBirth">Place Of Birth</th>
             *             <th data-events="click: onClick" data-type="icon" data-icon="glyphicon-info-sign" width="32"></th>
             *         </tr>
             *     </thead>
             * </table>
             * <script>
             *     function onMouseEnter (e) {
             *         $(e.currentTarget).css('background-color', 'red');
             *     }
             *     function onMouseLeave (e) {
             *         $(e.currentTarget).css('background-color', '');
             *     }
             *     function onClick(e) {
             *         alert('record with id=' + e.data.id + ' is clicked.');
             *     }
             *     $('#grid').grid();
             * </script>
             */
events:void 0,/** Format the date when the type of the column is date.
             * @additionalinfo <b>d</b> - Day of the month as digits; no leading zero for single-digit days.<br/>
             * <b>dd</b> - Day of the month as digits; leading zero for single-digit days.<br/>
             * <b>m</b> - Month as digits; no leading zero for single-digit months.<br/>
             * <b>mm</b> - Month as digits; leading zero for single-digit months.<br/>
             * <b>yy</b> - Year as last two digits; leading zero for years less than 10.<br/>
             * <b>yyyy</b> - Year represented by four digits.<br/>
             * <b>s</b> - Seconds; no leading zero for single-digit seconds.<br/>
             * <b>ss</b> - Seconds; leading zero for single-digit seconds.<br/>
             * <b>M</b> - Minutes; no leading zero for single-digit minutes. Uppercase MM to avoid conflict with months.<br/>
             * <b>MM</b> - Minutes; leading zero for single-digit minutes. Uppercase MM to avoid conflict with months.<br/>
             * <b>H</b> - Hours; no leading zero for single-digit hours (24-hour clock).<br/>
             * <b>HH</b> - Hours; leading zero for single-digit hours (24-hour clock).<br/>
             * <b>h</b> - Hours; no leading zero for single-digit hours (12-hour clock).<br/>
             * <b>hh</b> - Hours; leading zero for single-digit hours (12-hour clock).<br/>
             * <b>tt</b> - Lowercase, two-character time marker string: am or pm.<br/>
             * <b>TT</b> - Uppercase, two-character time marker string: AM or PM.<br/>
             * @alias column.format
             * @type string
             * @default 'mm/dd/yyyy'
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name' },
             *             { field: 'DateOfBirth', title: 'Date 1', type: 'date', format: 'HH:MM:ss mm/dd/yyyy' },
             *             { field: 'DateOfBirth', title: 'Date 2', type: 'date' }
             *         ]
             *     });
             * </script>
             */
format:"mm/dd/yyyy",/** Number of decimal digits after the decimal point.
             * @alias column.decimalDigits
             * @type number
             * @default undefined
             */
decimalDigits:void 0,/** Template for the content in the column.
             * Use curly brackets '{}' to wrap the names of data source columns from server response.
             * @alias column.tmpl
             * @type string
             * @default undefined
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name' },
             *             { title: 'Info', tmpl: '{Name} is born in {PlaceOfBirth}.' }
             *         ]
             *     });
             * </script>
             */
tmpl:void 0,/** If set to true stop event propagation when event occur.
             * @alias column.stopPropagation
             * @type boolean
             * @default false
             * @example sample <!-- bootstrap, grid -->
             * <table id="grid" data-source="/Players/Get"></table>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name', events: { 'click': function (e) { alert('name=' + e.data.record.Name); } }  },
             *             { field: 'PlaceOfBirth', stopPropagation: true, events: { 'click': function (e) { alert('name=' + e.data.record.Name); } }   },
             *             { title: '', field: 'Edit', width: 32, type: 'icon', icon: 'glyphicon-pencil', events: { 'click': function (e) { alert('name=' + e.data.record.Name); } } }
             *         ]
             *     });
             * </script>
             */
stopPropagation:!1,/** A renderer is an 'interceptor' function which can be used to transform data (value, appearance, etc.) before it is rendered.
             * @additionalinfo If the renderer function return a value, then this value is going to be automatically set as value of the cell.<br/>
             * If the renderer function doesn't return a value, then you have to set the content of the cell manually.
             * @alias column.renderer
             * @type function
             * @default undefined
             * @param {string} value - the record field value
             * @param {object} record - the data of the row record
             * @param {object} $cell - the current table cell presented as jquery object
             * @param {object} $displayEl - inner div element for display of the cell value presented as jquery object
             * @param {string} id - the id of the record
             * @example sample <!-- grid -->
             * <table id="grid" data-source="/Players/Get"></table>
             * <script>
             *     var nameRenderer = function (value, record, $cell, $displayEl) { 
             *         $cell.css('font-style', 'italic'); 
             *         $displayEl.css('background-color', '#EEE');
             *         $displayEl.text(value);
             *     };
             *     $('#grid').grid({
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', renderer: nameRenderer },
             *             { field: 'PlaceOfBirth', renderer: function (value, record) { return record.ID % 2 ? '<b>' + value + '</b>' : '<i>' + value + '</i>'; }  }
             *         ]
             *     });
             * </script>
             */
renderer:void 0,/** Function which can be used to customize filtering with local data (javascript sourced data).
             * @additionalinfo The default filtering is not case sensitive. The filtering with remote data sources needs to be handled on the server.
             * @alias column.filter
             * @type function
             * @default undefined
             * @param {string} value - the record field value
             * @param {string} searchStr - the search string
             * @example example <!-- grid -->
             * <input type="text" id="txtValue1" placeholder="Value 1" /> &nbsp;
             * <input type="text" id="txtValue2" placeholder="Value 2" /> &nbsp;
             * <button id="btnSearch">Search</button> <br/><br/>
             * <table id="grid"></table>
             * <script>
             *     var grid, data = [
             *             { 'ID': 1, 'Value1': 'Foo', 'Value2': 'Foo' },
             *             { 'ID': 2, 'Value1': 'bar', 'Value2': 'bar' },
             *             { 'ID': 3, 'Value1': 'moo', 'Value2': 'moo' },
             *             { 'ID': 4, 'Value1': null, 'Value2': undefined }
             *         ],
             *         caseSensitiveFilter = function (value, searchStr) { 
             *             return value.indexOf(searchStr) > -1;
             *         };
             *     grid = $('#grid').grid({
             *         dataSource: data,
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Value1' },
             *             { field: 'Value2', filter: caseSensitiveFilter }
             *         ]
             *     });
             *     $('#btnSearch').on('click', function () {
             *         grid.reload({ Value1: $('#txtValue1').val(), Value2: $('#txtValue2').val() });
             *     });
             * </script>
             */
filter:void 0},mapping:{/** The name of the object in the server response, that contains array with records, that needs to be display in the grid.
             * @alias mapping.dataField
             * @type string
             * @default "records"
             */
dataField:"records",/** The name of the object in the server response, that contains the number of all records on the server.
             * @alias mapping.totalRecordsField
             * @type string
             * @default "total"
             */
totalRecordsField:"total"},params:{},paramNames:{/** The name of the parameter that is going to send the name of the column for sorting.
             * The "sortable" setting for at least one column should be enabled in order this parameter to be in use.
             * @alias paramNames.sortBy
             * @type string
             * @default "sortBy"
             */
sortBy:"sortBy",/** The name of the parameter that is going to send the direction for sorting.
             * The "sortable" setting for at least one column should be enabled in order this parameter to be in use.
             * @alias paramNames.direction
             * @type string
             * @default "direction"
             */
direction:"direction"},/** The name of the UI library that is going to be in use. Currently we support Bootstrap 3, Bootstrap 4 and Material Design.
         * @additionalinfo The css files for Bootstrap or Material Design should be manually included to the page where the grid is in use.
         * @type (materialdesign|bootstrap|bootstrap4)
         * @default 'materialdesign'
         * @example Material.Design.With.Icons <!-- dropdown, grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         * </script>
         * @example Material.Design.Without.Icons <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'materialdesign',
         *         iconsLibrary: '',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         * </script>
         * @example Bootstrap.3 <!-- grid, dropdown, bootstrap -->
         * <div class="container"><table id="grid"></table></div>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'bootstrap',
         *         columns: [
         *             { field: 'ID' },
         *             { field: 'Name', sortable: true },
         *             { field: 'PlaceOfBirth' }
         *         ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         * </script>
         * @example Bootstrap.4.Font.Awesome <!-- bootstrap4, fontawesome, dropdown, grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome',
         *         columns: [ { field: 'ID', width: 38 }, { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         * </script>
         */
uiLibrary:"materialdesign",/** The name of the icons library that is going to be in use. Currently we support Material Icons, Font Awesome and Glyphicons.
         * @additionalinfo If you use Bootstrap 3 as uiLibrary, then the iconsLibrary is set to Glyphicons by default.<br/>
         * If you use Material Design as uiLibrary, then the iconsLibrary is set to Material Icons by default.<br/>
         * The css files for Material Icons, Font Awesome or Glyphicons should be manually included to the page where the grid is in use.
         * @type (materialicons|fontawesome|glyphicons)
         * @default 'materialicons'
         * @example Font.Awesome <!-- fontawesome, grid, dropdown -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         iconsLibrary: 'fontawesome',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 5 }
         *     });
         * </script>
         */
iconsLibrary:"materialicons",/** The type of the row selection.<br/>
         * If the type is set to multiple the user will be able to select more then one row from the grid.
         * @type (single|multiple)
         * @default 'single'
         * @example Multiple.Material.Design.Checkbox <!-- checkbox, grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         selectionType: 'multiple',
         *         selectionMethod: 'checkbox',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         * @example Multiple.Bootstrap.3.Checkbox <!-- bootstrap, checkbox, grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         primaryKey: 'ID',
         *         uiLibrary: 'bootstrap',
         *         dataSource: '/Players/Get',
         *         selectionType: 'multiple',
         *         selectionMethod: 'checkbox',
         *         columns: [ { field: 'ID', width: 32 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         * @example Multiple.Bootstrap.4.Checkbox <!-- bootstrap4, checkbox, grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         uiLibrary: 'bootstrap4',
         *         dataSource: '/Players/Get',
         *         selectionType: 'multiple',
         *         selectionMethod: 'checkbox',
         *         columns: [ { field: 'ID', width: 42 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         * @example Single.Checkbox <!-- checkbox, grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         selectionType: 'single',
         *         selectionMethod: 'checkbox',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         */
selectionType:"single",/** The type of the row selection mechanism.
         * @additionalinfo If this setting is set to "basic" when the user select a row, then this row will be highlighted.<br/>
         * If this setting is set to "checkbox" a column with checkboxes will appear as first row of the grid and when the user select a row, then this row will be highlighted and the checkbox selected.
         * @type (basic|checkbox)
         * @default "basic"
         * @example sample <!-- checkbox, grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         selectionType: 'single',
         *         selectionMethod: 'checkbox',
         *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         */
selectionMethod:"basic",/** When this setting is enabled the content of the grid will be loaded automatically after the creation of the grid.
         * @type boolean
         * @default true
         * @example disabled <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         autoLoad: false,
         *         columns: [ { field: 'ID' }, { field: 'Name' } ]
         *     });
         *     grid.reload(); //call .reload() explicitly in order to load the data in the grid
         * </script>
         * @example enabled <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         autoLoad: true,
         *         columns: [ { field: 'ID' }, { field: 'Name' } ]
         *     });
         * </script>
         */
autoLoad:!0,/** The text that is going to be displayed if the grid is empty.
         * @type string
         * @default "No records found."
         * @example sample <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: { url: '/Players/Get', data: { name: 'not existing name' } },
         *         notFoundText: 'No records found custom message',
         *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         * @example localization <!-- grid -->
         * <table id="grid"></table>
         * <script src="../../dist/modular/grid/js/messages/messages.de-de.js"></script>
         * <script>
         *     $('#grid').grid({
         *         dataSource: { url: '/Players/Get', data: { name: 'not existing name' } },
         *         locale: 'de-de',
         *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         */
notFoundText:void 0,/** Width of the grid.
         * @type number
         * @default undefined
         * @example sample <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         width: 400,
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         */
width:void 0,/** Minimum width of the grid.
         * @type number
         * @default undefined
         */
minWidth:void 0,/** This configuration option manage the behaviour of the header row height.
         * Auto scale if set to to 'autogrow'. All body rows are with the same height if set to 'fixed'.
         * @type ('autogrow'|'fixed')
         * @default "fixed"
         * @example AutoGrow <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var data = [
         *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         width: 500,
         *         headerRowHeight: 'autogrow',
         *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'PlaceOfBirth', title: 'Very very very very long column title', width: 200 } ]
         *     });
         * </script>
         * @example Fixed <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var data = [
         *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         width: 500,
         *         headerRowHeight: 'fixed',
         *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'PlaceOfBirth', title: 'Very very very very long column title', width: 200 } ]
         *     });
         * </script>
         */
headerRowHeight:"fixed",/** This configuration option manage the behaviour of the body row height.
         * Auto scale if set to to 'autogrow'. All body rows are with the same height if set to 'fixed'.
         * @type ('autogrow'|'fixed')
         * @default "autogrow"
         * @example AutoGrow <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var data = [
         *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         width: 500,
         *         bodyRowHeight: 'autogrow',
         *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'PlaceOfBirth', title: 'Very very very very long column title', width: 200 } ]
         *     });
         * </script>
         * @example Fixed <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var data = [
         *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         width: 500,
         *         bodyRowHeight: 'fixed',
         *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'PlaceOfBirth', title: 'Very very very very long column title', width: 200 } ]
         *     });
         * </script>
         */
bodyRowHeight:"autogrow",/** The size of the font in the grid.
         * @type string
         * @default undefined
         * @example sample <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         fontSize: '16px',
         *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         */
fontSize:void 0,/** Name of column that contains the record id. 
         * @additionalinfo If you set primary key, we assume that this number is unique for each records presented in the grid.<br/>
         * For example this should contains the column with primary key from your relation db table.<br/>
         * If the primaryKey is undefined, we autogenerate id for each record in the table by starting from 1.
         * @type string
         * @default undefined
         * @example defined <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var data = [
         *         { 'ID': 101, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 102, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 103, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     $('#grid').grid({
         *         dataSource: data,
         *         primaryKey: 'ID',
         *         columns: [ 
         *             { field: 'ID', width: 70 },
         *             { field: 'Name' },
         *             { field: 'PlaceOfBirth' } ,
         *             { tmpl: '<a href="#">click me</a>', events: { click: function(e) { alert('Your id is ' + e.data.id); } }, width: 100, stopPropagation: true } 
         *         ]
         *     });
         * </script>
         * @example undefined <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var data = [
         *         { 'ID': 101, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 102, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 103, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     $('#grid').grid({
         *         dataSource: data,
         *         columns: [ 
         *             { field: 'ID', width: 70 },
         *             { field: 'Name' },
         *             { field: 'PlaceOfBirth' } ,
         *             { tmpl: '<a href="#">click me</a>', events: { click: function(e) { alert('Your id is ' + e.data.id); } }, width: 100, stopPropagation: true } 
         *         ]
         *     });
         * </script>
         */
primaryKey:void 0,/** The language that needs to be in use.
         * @type string
         * @default 'en-us'
         * @example German.Bootstrap.Default <!-- bootstrap, grid, dropdown -->
         * <table id="grid"></table>
         * <script>
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'bootstrap',
         *         locale: 'de-de',
         *         columns: [ 
         *             { field: 'ID', width: 34 },
         *             { field: 'Name', title: 'Name' },
         *             { field: 'PlaceOfBirth', title: 'Geburtsort' }
         *         ],
         *         pager: { limit: 5 }
         *     });
         * </script>
         * @example French.MaterialDesign.Custom <!-- grid, dropdown -->
         * <table id="grid"></table>
         * <script>
         *     gj.grid.messages['fr-fr'].DisplayingRecords = 'Mes résultats';
         *     $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'materialdesign',
         *         locale: 'fr-fr',
         *         columns: [ 
         *             { field: 'ID', width: 56 },
         *             { field: 'Name', title: 'Prénom' },
         *             { field: 'PlaceOfBirth', title: 'Lieu de naissance' }
         *         ],
         *         pager: { limit: 5 }
         *     });
         * </script>
         */
locale:"en-us",defaultIconColumnWidth:70,defaultCheckBoxColumnWidth:70,style:{wrapper:"gj-grid-wrapper",table:"gj-grid gj-grid-md",loadingCover:"gj-grid-loading-cover",loadingText:"gj-grid-loading-text",header:{cell:void 0,sortable:"gj-cursor-pointer gj-unselectable"},content:{rowSelected:"gj-grid-md-select"}},icons:{asc:"▲",desc:"▼"}},bootstrap:{style:{wrapper:"gj-grid-wrapper",table:"gj-grid gj-grid-bootstrap gj-grid-bootstrap-3 table table-bordered table-hover",content:{rowSelected:"active"}},iconsLibrary:"glyphicons",defaultIconColumnWidth:34,defaultCheckBoxColumnWidth:36},bootstrap4:{style:{wrapper:"gj-grid-wrapper",table:"gj-grid gj-grid-bootstrap gj-grid-bootstrap-4 table table-bordered table-hover",content:{rowSelected:"active"}},defaultIconColumnWidth:42,defaultCheckBoxColumnWidth:44},materialicons:{icons:{asc:'<i class="gj-icon arrow-upward" />',desc:'<i class="gj-icon arrow-downward" />'}},fontawesome:{icons:{asc:'<i class="fa fa-sort-amount-asc" aria-hidden="true"></i>',desc:'<i class="fa fa-sort-amount-desc" aria-hidden="true"></i>'}},glyphicons:{icons:{asc:'<span class="glyphicon glyphicon-sort-by-alphabet" />',desc:'<span class="glyphicon glyphicon-sort-by-alphabet-alt" />'}}},/**
  * @widget Grid
  * @plugin Base
  */
gj.grid.events={/**
     * Event fires before addition of an empty row to the grid.
     * @event beforeEmptyRowInsert
     * @param {object} e - event data
     * @param {object} $row - The empty row as jquery object
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: {
     *             url: '/Players/Get',
     *             data: { name: 'not existing data' } //search for not existing data in order to fire the event
     *         },
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     grid.on('beforeEmptyRowInsert', function (e, $row) {
     *         alert('beforeEmptyRowInsert is fired.');
     *     });
     * </script>
     */
beforeEmptyRowInsert:function(e,t){return e.triggerHandler("beforeEmptyRowInsert",[t])},/**
     * Event fired before data binding takes place.
     *
     * @event dataBinding
     * @param {object} e - event data
     * @param {array} records - the list of records
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     grid.on('dataBinding', function (e, records) {
     *         alert('dataBinding is fired. ' + records.length + ' records will be loaded in the grid.');
     *     });
     * </script>
     */
dataBinding:function(e,t){return e.triggerHandler("dataBinding",[t])},/**
     * Event fires after the loading of the data in the grid.
     *
     * @event dataBound
     * @param {object} e - event data
     * @param {array} records - the list of records
     * @param {number} totalRecords - the number of the all records that can be presented in the grid
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     grid.on('dataBound', function (e, records, totalRecords) {
     *         alert('dataBound is fired. ' + records.length + ' records are bound to the grid.');
     *     });
     * </script>
     */
dataBound:function(e,t,n){return e.triggerHandler("dataBound",[t,n])},/**
     * Event fires after insert of a row in the grid during the loading of the data.
     * @event rowDataBound
     * @param {object} e - event data
     * @param {object} $row - the row presented as jquery object
     * @param {string} id - the id of the record
     * @param {object} record - the data of the row record
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     grid.on('rowDataBound', function (e, $row, id, record) {
     *         alert('rowDataBound is fired for row with id=' + id + '.');
     *     });
     * </script>
     */
rowDataBound:function(e,t,n,i){return e.triggerHandler("rowDataBound",[t,n,i])},/**
     * Event fires after insert of a cell in the grid during the loading of the data
     *
     * @event cellDataBound
     * @param {object} e - event data
     * @param {object} $displayEl - inner div element for display of the cell value presented as jquery object
     * @param {string} id - the id of the record
     * @param {object} column - the column configuration data
     * @param {object} record - the data of the row record
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' }, { field: 'Bulgarian', title: 'Is Bulgarian?' } ]
     *     });
     *     grid.on('cellDataBound', function (e, $displayEl, id, column, record) {
     *         if ('Bulgarian' === column.field) {
     *             $displayEl.text(record.PlaceOfBirth.indexOf('Bulgaria') > -1 ? 'Yes' : 'No');
     *         }
     *     });
     * </script>
     */
cellDataBound:function(e,t,n,i,r){return e.triggerHandler("cellDataBound",[t,n,i,r])},/**
     * Event fires on selection of row
     *
     * @event rowSelect
     * @param {object} e - event data
     * @param {object} $row - the row presented as jquery object
     * @param {string} id - the id of the record
     * @param {object} record - the data of the row record
     * @example sample <!-- checkbox, grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         selectionMethod: 'checkbox'
     *     });
     *     grid.on('rowSelect', function (e, $row, id, record) {
     *         alert('Row with id=' + id + ' is selected.');
     *     });
     * </script>
     */
rowSelect:function(e,t,n,i){return e.triggerHandler("rowSelect",[t,n,i])},/**
     * Event fires on un selection of row
     *
     * @event rowUnselect
     * @param {object} e - event data
     * @param {object} $row - the row presented as jquery object
     * @param {string} id - the id of the record
     * @param {object} record - the data of the row record
     * @example sample <!-- checkbox, grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         selectionMethod: 'checkbox'
     *     });
     *     grid.on('rowUnselect', function (e, $row, id, record) {
     *         alert('Row with id=' + id + ' is unselected.');
     *     });
     * </script>
     */
rowUnselect:function(e,t,n,i){return e.triggerHandler("rowUnselect",[t,n,i])},/**
     * Event fires before deletion of row in the grid.
     * @event rowRemoving
     * @param {object} e - event data
     * @param {object} $row - the row presented as jquery object
     * @param {string} id - the id of the record
     * @param {object} record - the data of the row record
     * @example sample <!-- grid -->
     * <button onclick="grid.removeRow('1')" class="gj-button-md">Remove Row</button><br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: [
     *             { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *             { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *             { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
     *         ],
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     grid.on('rowRemoving', function (e, $row, id, record) {
     *         alert('rowRemoving is fired for row with id=' + id + '.');
     *     });
     * </script>
     */
rowRemoving:function(e,t,n,i){return e.triggerHandler("rowRemoving",[t,n,i])},/**
     * Event fires when the grid.destroy method is called.
     *
     * @event destroying
     * @param {object} e - event data
     * @example sample <!-- grid -->
     * <button id="btnDestroy" class="gj-button-md">Destroy</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     grid.on('destroying', function (e) {
     *         alert('destroying is fired.');
     *     });
     *     $('#btnDestroy').on('click', function() {
     *         grid.destroy();
     *     });
     * </script>
     */
destroying:function(e){return e.triggerHandler("destroying")},/**
     * Event fires when column is hidding
     *
     * @event columnHide
     * @param {object} e - event data
     * @param {object} column - The data about the column that is hidding
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     grid.on('columnHide', function (e, column) {
     *         alert('The ' + column.field + ' column is hidden.');
     *     });
     *     grid.hideColumn('PlaceOfBirth');
     * </script>
     */
columnHide:function(e,t){return e.triggerHandler("columnHide",[t])},/**
     * Event fires when column is showing
     *
     * @event columnShow
     * @param {object} e - event data
     * @param {object} column - The data about the column that is showing
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth', hidden: true } ]
     *     });
     *     grid.on('columnShow', function (e, column) {
     *         alert('The ' + column.field + ' column is shown.');
     *     });
     *     grid.showColumn('PlaceOfBirth');
     * </script>
     */
columnShow:function(e,t){return e.triggerHandler("columnShow",[t])},/**
     * Event fires when grid is initialized.
     *
     * @event initialized
     * @param {object} e - event data
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth', hidden: true } ],
     *         initialized: function (e) {
     *             alert('The grid is initialized.');
     *         }
     *     });
     * </script>
     */
initialized:function(e){return e.triggerHandler("initialized")},/**
     * Event fires when the grid data is filtered.
     *
     * @additionalinfo This event is firing only when you use local dataSource, because the filtering with remote dataSource needs to be done on the server side.
     * @event dataFiltered
     * @param {object} e - event data
     * @param {object} records - The records after the filtering.
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid, data = [
     *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria', CountryName: 'Bulgaria' },
     *         { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil', CountryName: 'Brazil' },
     *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England', CountryName: 'England' },
     *         { 'ID': 4, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany', CountryName: 'Germany' },
     *         { 'ID': 5, 'Name': 'James Rodríguez', 'PlaceOfBirth': 'Cúcuta, Colombia', CountryName: 'Colombia' },
     *         { 'ID': 6, 'Name': 'Dimitar Berbatov', 'PlaceOfBirth': 'Blagoevgrad, Bulgaria', CountryName: 'Bulgaria' }
     *     ];
     *     grid = $('#grid').grid({
     *         dataSource: data,
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         dataFiltered: function (e, records) {
     *             records.reverse(); // reverse the data
     *             records.splice(3, 2); // remove 2 elements after the 3rd record
     *         }
     *     });
     * </script>
     */
dataFiltered:function(e,t){return e.triggerHandler("dataFiltered",[t])}},/*global gj $*/
gj.grid.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"grid"),gj.grid.methods.initialize(this),this.data("autoLoad")&&this.reload(),this},getConfig:function(e,t){var n=gj.widget.prototype.getConfig.call(this,e,t);return gj.grid.methods.setDefaultColumnConfig(n.columns,n.defaultColumnSettings),n},setDefaultColumnConfig:function(e,t){var n,i;if(e&&e.length)for(i=0;i<e.length;i++)n=$.extend(!0,{},t),$.extend(!0,n,e[i]),e[i]=n},getHTMLConfig:function(){var e=gj.widget.prototype.getHTMLConfig.call(this);return e.columns=[],this.find("thead > tr > th").each(function(){var t=$(this),n=t.text(),i=gj.widget.prototype.getHTMLConfig.call(t);i.title=n,i.field||(i.field=n),i.events&&(i.events=gj.grid.methods.eventsParser(i.events)),e.columns.push(i)}),e},eventsParser:function(events){var result={},list,i,key,func,position;for(list=events.split(","),i=0;i<list.length;i++)(position=list[i].indexOf(":"))>0&&(key=$.trim(list[i].substr(0,position)),func=$.trim(list[i].substr(position+1,list[i].length)),result[key]=eval("window."+func));return result},initialize:function(e){var t=e.data(),n=e.parent('div[data-role="wrapper"]');gj.grid.methods.localization(t),0===n.length?(n=$('<div data-role="wrapper" />').addClass(t.style.wrapper),//The css class needs to be added before the wrapping, otherwise doesn't work.
e.wrap(n)):n.addClass(t.style.wrapper),t.width&&e.parent().css("width",t.width),t.minWidth&&e.css("min-width",t.minWidth),t.fontSize&&e.css("font-size",t.fontSize),"autogrow"===t.headerRowHeight&&e.addClass("autogrow-header-row"),"fixed"===t.bodyRowHeight&&e.addClass("fixed-body-rows"),e.addClass(t.style.table),"checkbox"===t.selectionMethod&&t.columns.splice(gj.grid.methods.getColumnPositionNotInRole(e),0,{title:"",width:t.defaultCheckBoxColumnWidth,align:"center",type:"checkbox",role:"selectRow",events:{click:function(t){gj.grid.methods.setSelected(e,t.data.id,$(this).closest("tr"))}},headerCssClass:"gj-grid-select-all",stopPropagation:!0}),0===e.children("tbody").length&&e.append($("<tbody/>")),gj.grid.methods.renderHeader(e),gj.grid.methods.appendEmptyRow(e,"&nbsp;"),gj.grid.events.initialized(e)},localization:function(e){e.notFoundText||(e.notFoundText=gj.grid.messages[e.locale].NoRecordsFound)},renderHeader:function(e){var t,n,i,r,o,a,s,l,d;for(t=e.data(),n=t.columns,i=t.style.header,r=e.children("thead"),0===r.length&&(r=$("<thead />"),e.prepend(r)),o=$('<tr data-role="caption" />'),l=0;l<n.length;l+=1)a=$('<th data-field="'+(n[l].field||"")+'" />'),n[l].width?a.attr("width",n[l].width):"checkbox"===n[l].type&&a.attr("width",t.defaultIconColumnWidth),a.addClass(i.cell),n[l].headerCssClass&&a.addClass(n[l].headerCssClass),a.css("text-align",n[l].align||"left"),"checkbox"===t.selectionMethod&&"multiple"===t.selectionType&&"checkbox"===n[l].type&&"selectRow"===n[l].role?(d=a.find('input[data-role="selectAll"]'),0===d.length&&(d=$('<input type="checkbox" data-role="selectAll" />'),a.append(d),d.checkbox({uiLibrary:t.uiLibrary})),d.off("click").on("click",function(){this.checked?e.selectAll():e.unSelectAll()})):(s=$('<div data-role="title"/>').html(void 0===n[l].title?n[l].field:n[l].title),a.append(s),n[l].sortable&&(s.addClass(i.sortable),s.on("click",gj.grid.methods.createSortHandler(e,n[l])))),n[l].hidden&&a.hide(),o.append(a);r.empty().append(o)},createSortHandler:function(e,t){return function(){var n,i={};e.count()>0&&(n=e.data(),i[n.paramNames.sortBy]=t.field,t.direction="asc"===t.direction?"desc":"asc",i[n.paramNames.direction]=t.direction,e.reload(i))}},updateHeader:function(e){var t,n,i=e.data(),r=i.params[i.paramNames.sortBy],o=i.params[i.paramNames.direction];e.find('thead tr th [data-role="sorticon"]').remove(),r&&(position=gj.grid.methods.getColumnPosition(e.data("columns"),r),position>-1&&(n=e.find("thead tr th:eq("+position+') div[data-role="title"]'),t=$('<div data-role="sorticon" class="gj-unselectable" />').append("desc"===o?i.icons.desc:i.icons.asc),n.after(t)))},useHtmlDataSource:function(e,t){var n,i,r,o,a=[],s=e.find('tbody tr[data-role != "empty"]');for(n=0;n<s.length;n++){for(r=$(s[n]).find("td"),o={},i=0;i<r.length;i++)o[t.columns[i].field]=$(r[i]).html();a.push(o)}t.dataSource=a},startLoading:function(e){var t,n,i,r,o,a,s;gj.grid.methods.stopLoading(e),s=e.data(),0!==e.outerHeight()&&(t=e.children("tbody"),r=t.outerWidth(!1),o=t.outerHeight(!1),a=Math.abs(e.parent().offset().top-t.offset().top),n=$('<div data-role="loading-cover" />').addClass(s.style.loadingCover).css({width:r,height:o,top:a}),i=$('<div data-role="loading-text">'+gj.grid.messages[s.locale].Loading+"</div>").addClass(s.style.loadingText),i.insertAfter(e),n.insertAfter(e),i.css({top:a+o/2-i.outerHeight(!1)/2,left:r/2-i.outerWidth(!1)/2}))},stopLoading:function(e){e.parent().find('div[data-role="loading-cover"]').remove(),e.parent().find('div[data-role="loading-text"]').remove()},appendEmptyRow:function(e,t){var n,i,r,o;n=e.data(),i=$('<tr data-role="empty"/>'),r=$("<td/>").css({width:"100%","text-align":"center"}),r.attr("colspan",gj.grid.methods.countVisibleColumns(e)),o=$("<div />").html(t||n.notFoundText),r.append(o),i.append(r),gj.grid.events.beforeEmptyRowInsert(e,i),e.append(i)},autoGenerateColumns:function(e,t){var n,i,r,o,a=e.data();if(a.columns=[],t.length>0){for(n=Object.getOwnPropertyNames(t[0]),o=0;o<n.length;o++)i=t[0][n[o]],r="text",i&&("number"==typeof i?r="number":i.indexOf("/Date(")>-1&&(r="date")),a.columns.push({field:n[o],type:r});gj.grid.methods.setDefaultColumnConfig(a.columns,a.defaultColumnSettings)}gj.grid.methods.renderHeader(e)},loadData:function(e){var t,n,i,r,o,a,s,l;for(t=e.data(),n=e.getAll(),gj.grid.events.dataBinding(e,n),r=n.length,gj.grid.methods.stopLoading(e),t.autoGenerateColumns&&gj.grid.methods.autoGenerateColumns(e,n),a=e.children("tbody"),"checkbox"===t.selectionMethod&&"multiple"===t.selectionType&&e.find('thead input[data-role="selectAll"]').prop("checked",!1),a.children("tr").not('[data-role="row"]').remove(),0===r&&(a.empty(),gj.grid.methods.appendEmptyRow(e)),s=a.children("tr"),o=s.length,i=0;i<o;i++){if(!(i<r)){a.find('tr[data-role="row"]:gt('+(i-1)+")").remove();break}l=s.eq(i),gj.grid.methods.renderRow(e,l,n[i],i)}for(i=o;i<r;i++)gj.grid.methods.renderRow(e,null,n[i],i);gj.grid.events.dataBound(e,n,t.totalRecords)},getId:function(e,t,n){return t&&e[t]?e[t]:n},renderRow:function(e,t,n,i){var r,o,a,s,l;for(s=e.data(),t&&0!==t.length?(l="update",t.removeClass(s.style.content.rowSelected).removeAttr("data-selected").off("click")):(l="create",t=$('<tr data-role="row"/>'),e.children("tbody").append(t)),r=gj.grid.methods.getId(n,s.primaryKey,i+1),t.attr("data-position",i+1),"checkbox"!==s.selectionMethod&&t.on("click",gj.grid.methods.createRowClickHandler(e,r)),a=0;a<s.columns.length;a++)"update"===l?(o=t.find("td:eq("+a+")"),gj.grid.methods.renderCell(e,o,s.columns[a],n,r)):(o=gj.grid.methods.renderCell(e,null,s.columns[a],n,r),t.append(o));gj.grid.events.rowDataBound(e,t,r,n)},renderCell:function(e,t,n,i,r,o){var a,s;if(t&&0!==t.length?(a=t.find('div[data-role="display"]'),o="update"):(t=$("<td/>"),a=$('<div data-role="display" />'),n.align&&t.css("text-align",n.align),n.cssClass&&t.addClass(n.cssClass),t.append(a),o="create"),gj.grid.methods.renderDisplayElement(e,a,n,i,r,o),
//remove all event handlers
"update"===o&&(t.off(),a.off()),n.events)for(s in n.events)n.events.hasOwnProperty(s)&&t.on(s,{id:r,field:n.field,record:i},gj.grid.methods.createCellEventHandler(n,n.events[s]));return n.hidden&&t.hide(),gj.grid.events.cellDataBound(e,a,r,n,i),t},createCellEventHandler:function(e,t){return function(n){e.stopPropagation&&n.stopPropagation(),t.call(this,n)}},renderDisplayElement:function(e,t,n,i,r,o){var a,s;"checkbox"===n.type&&gj.checkbox?"create"===o?(s=$('<input type="checkbox" />').val(r).prop("checked",!!i[n.field]),n.role&&s.attr("data-role",n.role),t.append(s),s.checkbox({uiLibrary:e.data("uiLibrary")}),"selectRow"===n.role?s.on("click",function(){return!1}):s.prop("disabled",!0)):t.find('input[type="checkbox"]').val(r).prop("checked",!!i[n.field]):"icon"===n.type?"create"===o&&(t.append($("<span/>").addClass(n.icon).css({cursor:"pointer"})),"bootstrap"===e.data().uiLibrary&&t.children("span").addClass("glyphicon"),n.stopPropagation=!0):n.tmpl?(a=n.tmpl,n.tmpl.replace(/\{(.+?)\}/g,function(e,t){a=a.replace(e,gj.grid.methods.formatText(i[t],n))}),t.html(a)):n.renderer&&"function"==typeof n.renderer?(a=n.renderer(i[n.field],i,t.parent(),t,r,e))&&t.html(a):(i[n.field]=gj.grid.methods.formatText(i[n.field],n),!n.tooltip&&i[n.field]&&t.attr("title",i[n.field]),t.html(i[n.field])),n.tooltip&&"create"===o&&t.attr("title",n.tooltip)},formatText:function(e,t){return e=e&&"date"===t.type?gj.core.formatDate(gj.core.parseDate(e,t.format),t.format):void 0===e||null===e?"":e.toString(),t.decimalDigits&&e&&(e=parseFloat(e).toFixed(t.decimalDigits)),e},setRecordsData:function(e,t){var n=[],i=0,r=e.data();return $.isArray(t)?(n=t,i=t.length):r&&r.mapping&&$.isArray(t[r.mapping.dataField])&&(n=t[r.mapping.dataField],(i=t[r.mapping.totalRecordsField])&&!isNaN(i)||(i=0)),e.data("records",n),e.data("totalRecords",i),n},createRowClickHandler:function(e,t){return function(){gj.grid.methods.setSelected(e,t,$(this))}},selectRow:function(e,t,n,i){var r;return n.addClass(t.style.content.rowSelected),n.attr("data-selected","true"),"checkbox"===t.selectionMethod&&(r=n.find('input[type="checkbox"][data-role="selectRow"]'),r.length&&!r.prop("checked")&&r.prop("checked",!0),"multiple"===t.selectionType&&e.getSelections().length===e.count(!1)&&e.find('thead input[data-role="selectAll"]').prop("checked",!0)),gj.grid.events.rowSelect(e,n,i,e.getById(i))},unselectRow:function(e,t,n,i){var r;if("true"===n.attr("data-selected"))return n.removeClass(t.style.content.rowSelected),"checkbox"===t.selectionMethod&&(r=n.find('td input[type="checkbox"][data-role="selectRow"]'),r.length&&r.prop("checked")&&r.prop("checked",!1),"multiple"===t.selectionType&&e.find('thead input[data-role="selectAll"]').prop("checked",!1)),n.removeAttr("data-selected"),gj.grid.events.rowUnselect(e,n,i,e.getById(i))},setSelected:function(e,t,n){var i=e.data();return n&&n.length||(n=gj.grid.methods.getRowById(e,t)),n&&("true"===n.attr("data-selected")?gj.grid.methods.unselectRow(e,i,n,t):("single"===i.selectionType&&n.siblings('[data-selected="true"]').each(function(){var t=$(this),n=gj.grid.methods.getId(t,i.primaryKey,t.data("position"));gj.grid.methods.unselectRow(e,i,t,n)}),gj.grid.methods.selectRow(e,i,n,t))),e},selectAll:function(e){var t=e.data();return e.find('tbody tr[data-role="row"]').each(function(){var n=$(this),i=n.data("position"),r=e.get(i),o=gj.grid.methods.getId(r,t.primaryKey,i);gj.grid.methods.selectRow(e,t,n,o)}),e.find('thead input[data-role="selectAll"]').prop("checked",!0),e},unSelectAll:function(e){var t=e.data();return e.find("tbody tr").each(function(){var n=$(this),i=n.data("position"),r=e.get(i),o=gj.grid.methods.getId(r,t.primaryKey,i);gj.grid.methods.unselectRow(e,t,n,o),n.find('input[type="checkbox"][data-role="selectRow"]').prop("checked",!1)}),e.find('thead input[data-role="selectAll"]').prop("checked",!1),e},getSelected:function(e){var t,n,i,r=null;return t=e.find('tbody>tr[data-selected="true"]'),t.length>0&&(i=$(t[0]).data("position"),n=e.get(i),r=gj.grid.methods.getId(n,e.data().primaryKey,i)),r},getSelectedRows:function(e){e.data();return e.find('tbody>tr[data-selected="true"]')},getSelections:function(e){var t,n,i=[],r=e.data(),o=gj.grid.methods.getSelectedRows(e);return 0<o.length&&o.each(function(){t=$(this).data("position"),n=e.get(t),i.push(gj.grid.methods.getId(n,r.primaryKey,t))}),i},getById:function(e,t){var n,i=null,r=e.data("primaryKey"),o=e.data("records");if(r){for(n=0;n<o.length;n++)if(o[n][r]==t){i=o[n];break}}else i=e.get(t);return i},getRecVPosById:function(e,t){var n,i=t,r=e.data();if(r.primaryKey)for(n=0;n<r.dataSource.length;n++)if(r.dataSource[n][r.primaryKey]==t){i=n;break}return i},getRowById:function(e,t){var n,i,r=e.getAll(!1),o=e.data("primaryKey"),a=void 0;if(o){for(i=0;i<r.length;i++)if(r[i][o]==t){n=i+1;break}}else n=t;return n&&(a=e.children("tbody").children('tr[data-position="'+n+'"]')),a},getByPosition:function(e,t){return e.getAll(!1)[t-1]},getColumnPosition:function(e,t){var n,i=-1;for(n=0;n<e.length;n++)if(e[n].field===t){i=n;break}return i},getColumnInfo:function(e,t){var n,i={},r=e.data();for(n=0;n<r.columns.length;n+=1)if(r.columns[n].field===t){i=r.columns[n];break}return i},getCell:function(e,t,n){var i,r,o=null;return i=gj.grid.methods.getColumnPosition(e.data("columns"),n),i>-1&&(r=gj.grid.methods.getRowById(e,t),o=r.find("td:eq("+i+') div[data-role="display"]')),o},setCellContent:function(e,t,n,i){var r,o=gj.grid.methods.getCell(e,t,n);o&&(o.empty(),"object"==typeof i?o.append(i):(r=gj.grid.methods.getColumnInfo(e,n),gj.grid.methods.renderDisplayElement(e,o,r,e.getById(t),t,"update")))},clone:function(e){var t=[];return $.each(e,function(){t.push(this.clone())}),t},getAll:function(e){return e.data("records")},countVisibleColumns:function(e){var t,n,i;for(t=e.data().columns,n=0,i=0;i<t.length;i++)!0!==t[i].hidden&&n++;return n},clear:function(e,t){var n=e.data();return e.xhr&&e.xhr.abort(),e.children("tbody").empty(),n.records=[],gj.grid.methods.stopLoading(e),gj.grid.methods.appendEmptyRow(e,t?n.notFoundText:"&nbsp;"),gj.grid.events.dataBound(e,[],0),e},render:function(e,t){return t&&(gj.grid.methods.setRecordsData(e,t),gj.grid.methods.updateHeader(e),gj.grid.methods.loadData(e)),e},filter:function(e){var t,n,i=e.data(),r=i.dataSource.slice();i.params[i.paramNames.sortBy]&&(n=gj.grid.methods.getColumnInfo(e,i.params[i.paramNames.sortBy]),r.sort(n.sortable.sorter?n.sortable.sorter(n.direction,n):gj.grid.methods.createDefaultSorter(n.direction,n.field)));for(t in i.params)i.params[t]&&!i.paramNames[t]&&(n=gj.grid.methods.getColumnInfo(e,t),r=$.grep(r,function(e){var r=e[t]||"",o=i.params[t]||"";return n&&"function"==typeof n.filter?n.filter(r,o):r.toUpperCase().indexOf(o.toUpperCase())>-1}));return gj.grid.events.dataFiltered(e,r),r},createDefaultSorter:function(e,t){return function(n,i){var r=(n[t]||"").toString(),o=(i[t]||"").toString();return"asc"===e?r.localeCompare(o):o.localeCompare(r)}},destroy:function(e,t,n){return e.data()&&(gj.grid.events.destroying(e),gj.grid.methods.stopLoading(e),e.xhr&&e.xhr.abort(),e.off(),!1===n&&e.parent('div[data-role="wrapper"]').length>0&&e.unwrap(),e.removeData(),!1===t?e.remove():e.removeClass().empty(),e.removeAttr("data-type")),e},showColumn:function(e,t){var n,i=e.data(),r=gj.grid.methods.getColumnPosition(i.columns,t);return r>-1&&(e.find("thead>tr").each(function(){$(this).children("th").eq(r).show()}),$.each(e.find("tbody>tr"),function(){$(this).children("td").eq(r).show()}),i.columns[r].hidden=!1,n=e.find('tbody > tr[data-role="empty"] > td'),n&&n.length&&n.attr("colspan",gj.grid.methods.countVisibleColumns(e)),gj.grid.events.columnShow(e,i.columns[r])),e},hideColumn:function(e,t){var n,i=e.data(),r=gj.grid.methods.getColumnPosition(i.columns,t);return r>-1&&(e.find("thead>tr").each(function(){$(this).children("th").eq(r).hide()}),$.each(e.find("tbody>tr"),function(){$(this).children("td").eq(r).hide()}),i.columns[r].hidden=!0,n=e.find('tbody > tr[data-role="empty"] > td'),n&&n.length&&n.attr("colspan",gj.grid.methods.countVisibleColumns(e)),gj.grid.events.columnHide(e,i.columns[r])),e},isLastRecordVisible:function(){return!0},addRow:function(e,t){var n=e.data();return n.totalRecords=e.data("totalRecords")+1,gj.grid.events.dataBinding(e,[t]),n.records.push(t),$.isArray(n.dataSource)&&n.dataSource.push(t),1===n.totalRecords&&e.children("tbody").empty(),gj.grid.methods.isLastRecordVisible(e)&&gj.grid.methods.renderRow(e,null,t,e.count()-1),gj.grid.events.dataBound(e,[t],n.totalRecords),e},updateRow:function(e,t,n){var i,r=gj.grid.methods.getRowById(e,t),o=e.data();return o.records[r.data("position")-1]=n,$.isArray(o.dataSource)&&(i=gj.grid.methods.getRecVPosById(e,t),o.dataSource[i]=n),gj.grid.methods.renderRow(e,r,n,r.index()),e},removeRow:function(e,t){var n,i=e.data(),r=gj.grid.methods.getRowById(e,t);return gj.grid.events.rowRemoving(e,r,t,e.getById(t)),$.isArray(i.dataSource)&&(n=gj.grid.methods.getRecVPosById(e,t),i.dataSource.splice(n,1)),e.reload(),e},count:function(e,t){return t?e.data().totalRecords:e.getAll().length},getColumnPositionByRole:function(e,t){var n,i,r=e.data("columns");for(n=0;n<r.length;n++)if(r[n].role===t){i=n;break}return i},getColumnPositionNotInRole:function(e){var t,n=0,i=e.data("columns");for(t=0;t<i.length;t++)if(!i[t].role){n=t;break}return n}},/**
  * @widget Grid
  * @plugin Base
  */
gj.grid.widget=function(e,t){var n=this,i=gj.grid.methods;/**
     * Reload the data in the grid from a data source.
     * @method
     * @param {object} params - An object that contains a list with parameters that are going to be send to the server.
     * @fires beforeEmptyRowInsert, dataBinding, dataBound, cellDataBound
     * @return grid
     * @example sample <!-- grid -->
     * <input type="text" id="txtSearch">
     * <button id="btnSearch">Search</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     $('#btnSearch').on('click', function () {
     *         grid.reload({ name: $('#txtSearch').val() });
     *     });
     * </script>
     */
/**
     * Clear the content in the grid.
     * @method
     * @param {boolean} showNotFoundText - Indicates if the "Not Found" text is going to show after the clearing of the grid.
     * @return grid
     * @example sample <!-- grid, dropdown -->
     * <button id="btnClear" class="gj-button-md">Clear</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         pager: { limit: 5 }
     *     });
     *     $('#btnClear').on('click', function () {
     *         grid.clear();
     *     });
     * </script>
     */
/**
     * Return the number of records in the grid. By default return only the records that are visible in the grid.
     * @method
     * @param {boolean} includeAllRecords - include records that are not visible when you are using local dataSource.
     * @return number
     * @example Local.DataSource <!-- bootstrap, grid, grid.pagination -->
     * <button class="btn btn-default" onclick="alert(grid.count())">Count Visible Records</button>
     * <button class="btn btn-default" onclick="alert(grid.count(true))">Count All Records</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var data, grid;
     *     data = [
     *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
     *     ];
     *     grid = $('#grid').grid({
     *         dataSource: data,
     *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         uiLibrary: 'bootstrap',
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     * </script>
     * @example Remote.DataSource <!-- bootstrap, grid, grid.pagination -->
     * <button onclick="alert(grid.count())">Count Visible Records</button>
     * <button onclick="alert(grid.count(true))">Count All Records</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         uiLibrary: 'bootstrap',
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     * </script>
     */
/**
     * Render data in the grid
     * @method
     * @param {object} response - An object that contains the data that needs to be loaded in the grid.
     * @fires beforeEmptyRowInsert, dataBinding, dataBound, cellDataBound
     * @return grid
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid, onSuccessFunc;
     *     onSuccessFunc = function (response) {
     *         //you can modify the response here if needed
     *         grid.render(response);
     *     };
     *     grid = $('#grid').grid({
     *         dataSource: { url: '/Players/Get', success: onSuccessFunc },
     *         columns: [ { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     * </script>
     */
/**
     * Destroy the grid. This method remove all data from the grid and all events attached to the grid.
     * @additionalinfo The grid table tag and wrapper tag are kept by default after the execution of destroy method,
     * but you can remove them if you pass false to the keepTableTag and keepWrapperTag parameters.
     * @method
     * @param {boolean} keepTableTag - If this flag is set to false, the table tag will be removed from the HTML dom tree.
     * @param {boolean} keepWrapperTag - If this flag is set to false, the table wrapper tag will be removed from the HTML dom tree.
     * @fires destroying
     * @return void
     * @example keep.wrapper.and.table <!-- grid -->
     * <button class="gj-button-md" id="btnDestroy">Destroy</button>
     * <button class="gj-button-md" id="btnCreate">Create</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var createFunc = function() {
     *         $('#grid').grid({
     *             dataSource: '/Players/Get',
     *             columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *         });
     *     };
     *     createFunc();
     *     $('#btnDestroy').on('click', function () {
     *         $('#grid').grid('destroy', true, true);
     *     });
     *     $('#btnCreate').on('click', function () {
     *         createFunc();
     *     });
     * </script>
     * @example remove.wrapper.and.table <!-- grid -->
     * <button class="gj-button-md" id="btnRemove">Remove</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     $('#btnRemove').on('click', function () {
     *         grid.destroy();
     *     });
     * </script>
     */
/**
     * Select a row from the grid based on id parameter.
     * @method
     * @param {string} id - The id of the row that needs to be selected
     * @return grid
     * @example sample <!-- checkbox, grid -->
     * <input type="text" id="txtNumber" value="1" />
     * <button id="btnSelect" class="gj-button-md">Select</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         selectionMethod: 'checkbox'
     *     });
     *     $('#btnSelect').on('click', function () {
     *         grid.setSelected(parseInt($('#txtNumber').val(), 10));
     *     });
     * </script>
     */
/**
     * Return the id of the selected record.
     * If the multiple selection method is one this method is going to return only the id of the first selected record.
     * @method
     * @return string
     * @example sample <!-- checkbox, grid -->
     * <button id="btnShowSelection" class="gj-button-md">Show Selection</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         selectionMethod: 'checkbox'
     *     });
     *     $('#btnShowSelection').on('click', function () {
     *         alert(grid.getSelected());
     *     });
     * </script>
     */
/**
     * Return an array with the ids of the selected record.
     * @additionalinfo Specify primaryKey if you want to use field from the dataSource as identificator for selection.
     * @method
     * @return array
     * @example With.Primary.Ket <!-- checkbox, grid, dropdown -->
     * <button id="btnShowSelection" class="gj-button-md">Show Selections</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid, data = [
     *         { 'ID': 101, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *         { 'ID': 102, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *         { 'ID': 103, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' },
     *         { 'ID': 104, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany' }
     *     ];
     *     grid = $('#grid').grid({
     *         dataSource: data,
     *         primaryKey: 'ID',
     *         columns: [ { field: 'ID', width: 70 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         selectionMethod: 'checkbox',
     *         selectionType: 'multiple',
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     *     $('#btnShowSelection').on('click', function () {
     *         var selections = grid.getSelections();
     *         alert(selections.join());
     *     });
     * </script>
     * @example Without.Primary.Ket <!-- checkbox, grid, dropdown -->
     * <button id="btnShowSelection" class="gj-button-md">Show Selections</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid, data = [
     *         { 'ID': 101, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *         { 'ID': 102, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *         { 'ID': 103, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' },
     *         { 'ID': 104, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany' }
     *     ];
     *     grid = $('#grid').grid({
     *         dataSource: data,
     *         columns: [ { field: 'ID', width: 70 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         selectionMethod: 'checkbox',
     *         selectionType: 'multiple',
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     *     $('#btnShowSelection').on('click', function () {
     *         var selections = grid.getSelections();
     *         alert(selections.join());
     *     });
     * </script>
     */
/**
     * Select all records from the grid.
     * @method
     * @return grid
     * @example sample <!-- checkbox, grid -->
     * <button id="btnSelectAll" class="gj-button-md">Select All</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         selectionMethod: 'checkbox',
     *         selectionType: 'multiple'
     *     });
     *     $('#btnSelectAll').on('click', function () {
     *         grid.selectAll();
     *     });
     * </script>
     */
/**
     * Unselect all records from the grid.
     * @method
     * @return void
     * @example sample <!-- checkbox, grid -->
     * <button id="btnSelectAll" class="gj-button-md">Select All</button>
     * <button id="btnUnSelectAll" class="gj-button-md">UnSelect All</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         selectionMethod: 'checkbox',
     *         selectionType: 'multiple'
     *     });
     *     $('#btnSelectAll').on('click', function () {
     *         grid.selectAll();
     *     });
     *     $('#btnUnSelectAll').on('click', function () {
     *         grid.unSelectAll();
     *     });
     * </script>
     */
/**
     * Return record by id of the record.
     * @method
     * @param {string} id - The id of the row that needs to be returned.
     * @return object
     * @example sample <!-- grid -->
     * <button id="btnGetData" class="gj-button-md">Get Data</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         primaryKey: 'ID' //define the name of the column that you want to use as ID here.
     *     });
     *     $('#btnGetData').on('click', function () {
     *         var data = grid.getById('2');
     *         alert(data.Name + ' born in ' + data.PlaceOfBirth);
     *     });
     * </script>
     */
/**
     * Return record from the grid based on position.
     * @method
     * @param {number} position - The position of the row that needs to be return.
     * @return object
     * @example sample <!-- grid -->
     * <button id="btnGetData" class="gj-button-md">Get Data</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     $('#btnGetData').on('click', function () {
     *         var data = grid.get(3);
     *         alert(data.Name + ' born in ' + data.PlaceOfBirth);
     *     });
     * </script>
     */
/**
     * Return an array with all records presented in the grid.
     * @method
     * @param {boolean} includeAllRecords - include records that are not visible when you are using local dataSource.
     * @return number
     * @example Local.DataSource <!-- bootstrap, grid, grid.pagination -->
     * <button onclick="alert(JSON.stringify(grid.getAll()))" class="btn btn-default">Get All Visible Records</button>
     * <button onclick="alert(JSON.stringify(grid.getAll(true)))" class="btn btn-default">Get All Records</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var data, grid;
     *     data = [
     *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
     *     ];
     *     grid = $('#grid').grid({
     *         dataSource: data,
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         uiLibrary: 'bootstrap',
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     * </script>
     * @example Remote.DataSource <!-- bootstrap, grid, grid.pagination -->
     * <button onclick="alert(JSON.stringify(grid.getAll()))" class="btn btn-default">Get All Visible Records</button>
     * <button onclick="alert(JSON.stringify(grid.getAll(true)))" class="btn btn-default">Get All Records</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
     *         uiLibrary: 'bootstrap',
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     * </script>
     */
/**
     * Show hidden column.
     * @method
     * @param {string} field - The name of the field bound to the column.
     * @return grid
     * @example sample <!-- grid -->
     * <button id="btnShowColumn" class="gj-button-md">Show Column</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth', hidden: true } ]
     *     });
     *     $('#btnShowColumn').on('click', function () {
     *         grid.showColumn('PlaceOfBirth');
     *     });
     * </script>
     */
/**
     * Hide column from the grid.
     * @method
     * @param {string} field - The name of the field bound to the column.
     * @return grid
     * @example sample <!-- grid -->
     * <button id="btnHideColumn" class="gj-button-md">Hide Column</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     $('#btnHideColumn').on('click', function () {
     *         grid.hideColumn('PlaceOfBirth');
     *     });
     * </script>
     */
/**
     * Add new row to the grid.
     * @method
     * @param {object} record - Object with data for the new record.
     * @return grid
     * @example without.pagination <!-- grid -->
     * <button id="btnAdd" class="gj-button-md">Add Row</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: [
     *             { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *             { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *             { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
     *         ],
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
     *     });
     *     $('#btnAdd').on('click', function () {
     *         grid.addRow({ 'ID': grid.count(true) + 1, 'Name': 'Test Player', 'PlaceOfBirth': 'Test City, Test Country' });
     *     });
     * </script>
     * @example with.pagination <!-- grid, dropdown -->
     * <button id="btnAdd" class="gj-button-md">Add Row</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: [
     *             { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *             { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *             { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
     *         ],
     *         columns: [ 
     *             { field: 'ID', width: 56 },
     *             { field: 'Name' },
     *             { field: 'PlaceOfBirth' },
     *             { width: 100, align: 'center', tmpl: '<i class="material-icons">delete</i>', events: { 'click': function(e) { grid.removeRow(e.data.id); } } }
     *         ],
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     *     $('#btnAdd').on('click', function () {
     *         grid.addRow({ 'ID': grid.count(true) + 1, 'Name': 'Test Player', 'PlaceOfBirth': 'Test City, Test Country' });
     *     });
     * </script>
     */
/**
     * Update row data.
     * @method
     * @param {string} id - The id of the row that needs to be updated
     * @param {object} record - Object with data for the new record.
     * @return grid
     * @example sample <!-- grid, dropdown -->
     * <table id="grid"></table>
     * <script>
     *     var grid;
     *     grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: [
     *             { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *             { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *             { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
     *         ],
     *         columns: [
     *             { field: 'ID', width: 56 },
     *             { field: 'Name' },
     *             { field: 'PlaceOfBirth' },
     *             { title: '', width: 90, align: 'center', tmpl: '<u>Edit</u>', events: { 'click': Edit } }
     *         ],
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     *     function Edit(e) {
     *         grid.updateRow(e.data.id, { 'ID': e.data.id, 'Name': 'Ronaldo', 'PlaceOfBirth': 'Rio, Brazil' });
     *     }
     * </script>
     */
//TODO: needs to be removed
/**
     * Remove row from the grid
     * @additionalinfo This method is design to work only with local datasources. If you use remote datasource, you need to send a request to the server to remove the row and then reload the data in the grid.
     * @method
     * @param {string} id - Id of the record that needs to be removed.
     * @return grid
     * @example Without.Pagination <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid;
     *     function Delete(e) {
     *         if (confirm('Are you sure?')) {
     *             grid.removeRow(e.data.id);
     *         }
     *     }
     *     grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: [
     *             { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *             { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *             { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
     *         ],
     *         columns: [
     *             { field: 'ID', width: 56 },
     *             { field: 'Name' },
     *             { field: 'PlaceOfBirth' },
     *             { width: 100, align: 'center', tmpl: '<u class="gj-cursor-pointer">Delete</u>', events: { 'click': Delete } }
     *         ]
     *     });
     * </script>
     * @example With.Pagination <!-- grid, dropdown -->
     * <table id="grid"></table>
     * <script>
     *     var grid;
     *     function Delete(e) {
     *         if (confirm('Are you sure?')) {
     *             grid.removeRow(e.data.id);
     *         }
     *     }
     *     grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: [
     *             { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
     *             { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
     *             { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
     *         ],
     *         columns: [
     *             { field: 'ID', width: 56 },
     *             { field: 'Name' },
     *             { field: 'PlaceOfBirth' },
     *             { width: 100, align: 'center', tmpl: '<u class="gj-cursor-pointer">Delete</u>', events: { 'click': Delete } }
     *         ],
     *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
     *     });
     * </script>
     */
return n.reload=function(e){return i.startLoading(this),gj.widget.prototype.reload.call(this,e)},n.clear=function(e){return i.clear(this,e)},n.count=function(e){return i.count(this,e)},n.render=function(t){return i.render(e,t)},n.destroy=function(e,t){return i.destroy(this,e,t)},n.setSelected=function(e){return i.setSelected(this,e)},n.getSelected=function(){return i.getSelected(this)},n.getSelections=function(){return i.getSelections(this)},n.selectAll=function(){return i.selectAll(this)},n.unSelectAll=function(){return i.unSelectAll(this)},n.getById=function(e){return i.getById(this,e)},n.get=function(e){return i.getByPosition(this,e)},n.getAll=function(e){return i.getAll(this,e)},n.showColumn=function(e){return i.showColumn(this,e)},n.hideColumn=function(e){return i.hideColumn(this,e)},n.addRow=function(e){return i.addRow(this,e)},n.updateRow=function(e,t){return i.updateRow(this,e,t)},n.setCellContent=function(e,t,n){i.setCellContent(this,e,t,n)},n.removeRow=function(e){return i.removeRow(this,e)},$.extend(e,n),"grid"!==e.attr("data-type")&&i.init.call(e,t),e},gj.grid.widget.prototype=new gj.widget,gj.grid.widget.constructor=gj.grid.widget,gj.grid.widget.prototype.getConfig=gj.grid.methods.getConfig,gj.grid.widget.prototype.getHTMLConfig=gj.grid.methods.getHTMLConfig,function(e){e.fn.grid=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.grid.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.grid.widget(this,e)}}}(jQuery),/**
 * @widget Grid
 * @plugin Fixed Header
 */
gj.grid.plugins.fixedHeader={config:{base:{/** If set to true, add scroll to the table body
             * @type boolean
             * @default object
             * @example Material.Design.Without.Pager <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         fixedHeader: true,
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Material.Design.With.Pager <!-- grid, dropdown -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         fixedHeader: true,
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
             *         pager: { limit: 5 }
             *     });
             * </script>
             * @example Bootstrap.3.Without.Pager <!-- bootstrap, grid -->
             * <div class="container"><table id="grid"></table></div>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap',
             *         dataSource: '/Players/Get',
             *         fixedHeader: true,
             *         height: 200,
             *         columns: [ 
             *             { field: 'ID', width: 34 },
             *             { field: 'Name' },
             *             { field: 'PlaceOfBirth' }
             *         ]
             *     });
             * </script>
             * @example Bootstrap.3.With.Pager <!-- bootstrap, grid -->
             * <div class="container"><table id="grid"></table></div>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap',
             *         dataSource: '/Players/Get',
             *         fixedHeader: true,
             *         height: 200,
             *         columns: [ 
             *             { field: 'ID', width: 34 }, 
             *             { field: 'Name' }, 
             *             { field: 'PlaceOfBirth' } 
             *         ],
             *         pager: { limit: 5 }
             *     });
             * </script>
             * @example Bootstrap.4 <!-- bootstrap4, grid -->
             * <div class="container"><table id="grid"></table></div>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap4',
             *         dataSource: '/Players/Get',
             *         fixedHeader: true,
             *         columns: [ 
             *             { field: 'ID', width: 42 }, 
             *             { field: 'Name' }, 
             *             { field: 'PlaceOfBirth' } 
             *         ],
             *         pager: { limit: 5 }
             *     });
             * </script>
             */
fixedHeader:!1,height:300}},private:{init:function(e){var t=e.data(),n=e.children("tbody"),i=e.children("thead"),r=t.height-i.outerHeight()-(e.children("tfoot").outerHeight()||0);e.addClass("gj-grid-scrollable"),n.css("width",i.outerWidth()),n.height(r)},refresh:function(e){var t,n,i=(e.data(),e.children("tbody")),r=e.children("thead"),o=e.find('tbody tr[data-role="row"] td'),a=e.find('thead tr[data-role="caption"] th');for(e.children("tbody").height()<gj.grid.plugins.fixedHeader.private.getRowsHeight(e)?i.css("width",r.outerWidth()+gj.grid.plugins.fixedHeader.private.getScrollBarWidth()+(navigator.userAgent.toLowerCase().indexOf("firefox")>-1?1:0)):i.css("width",r.outerWidth()),t=0;t<a.length;t++)n=$(a[t]).outerWidth(),0===t&&gj.core.isIE()&&(n-=1),$(o[t]).attr("width",n)},getRowsHeight:function(e){var t=0;return e.find("tbody tr").each(function(){t+=$(this).height()}),t},getScrollBarWidth:function(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;return n==i&&(i=t.clientWidth),document.body.removeChild(t),n-i}},public:{},events:{},configure:function(e,t,n){$.extend(!0,e,gj.grid.plugins.fixedHeader.public);e.data();n.fixedHeader&&(e.on("initialized",function(){gj.grid.plugins.fixedHeader.private.init(e)}),e.on("dataBound",function(){gj.grid.plugins.fixedHeader.private.refresh(e)}),e.on("resize",function(){gj.grid.plugins.fixedHeader.private.refresh(e)}))}},/** 
 * @widget Grid 
 * @plugin Expand Collapse Rows
 */
gj.grid.plugins.expandCollapseRows={config:{base:{/** Template for the content in the detail section of the row.
             * Automatically add expand collapse column as a first column in the grid during initialization.
             * @type string
             * @default undefined
             * @example Material.Design <!-- grid, grid.expandCollapseRows -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'materialdesign',
             *         detailTemplate: '<div style="text-align: left"><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'DateOfBirth', type: 'date' } ]
             *     });
             * </script>
             * @example Bootstrap.3 <!-- bootstrap, grid, grid.expandCollapseRows -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap',
             *         detailTemplate: '<div><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
             *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' }, { field: 'DateOfBirth', type: 'date' } ]
             *     });
             * </script>
             * @example Bootstrap.4.Font.Awesome <!-- bootstrap4, fontawesome, grid, grid.expandCollapseRows -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap4',
             *         iconsLibrary: 'fontawesome',
             *         detailTemplate: '<div><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
             *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' }, { field: 'DateOfBirth', type: 'date' } ]
             *     });
             * </script>
             */
detailTemplate:void 0,/** If set try to persist the state of expanded rows.
             * You need to specify primaryKey on the initialization of the grid in order to enable this feature.
             * @default true
             * @example True <!-- bootstrap, grid  -->
             * <div class="container">
             *     <div class="row">
             *         <div class="col-xs-12">
             *             <p>Expand row, then change the page and return back to the page with expanded row in order to see that the expansion is kept.</p>
             *             <table id="grid"></table>
             *         </div>
             *     </div>
             * </div>
             * <script>
             *     var grid = $('#grid').grid({
             *         uiLibrary: 'bootstrap',
             *         primaryKey: 'ID',
             *         dataSource: '/Players/Get',
             *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' } ],
             *         detailTemplate: '<div><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
             *         keepExpandedRows: true,
             *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
             *     });
             * </script>
             */
keepExpandedRows:!0,expandedRows:[],icons:{/** Expand row icon definition.
                 * @alias icons.expandRow
                 * @type String
                 * @default '<i class="gj-icon chevron-right" />'
                 * @example Plus.Minus.Icons <!-- materialicons, grid -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         primaryKey: 'ID',
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' } ],
                 *         detailTemplate: '<div><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
                 *         icons: {
                 *             expandRow: '<i class="material-icons">add</i>',
                 *             collapseRow: '<i class="material-icons">remove</i>'
                 *         }
                 *     });
                 * </script>
                 */
expandRow:'<i class="gj-icon chevron-right" />',/** Collapse row icon definition.
                 * @alias icons.collapseRow
                 * @type String
                 * @default '<i class="gj-icon chevron-down" />'
                 * @example Plus.Minus.Icons <!-- materialicons, grid -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         primaryKey: 'ID',
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' } ],
                 *         detailTemplate: '<div><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
                 *         icons: {
                 *             expandRow: '<i class="material-icons">add</i>',
                 *             collapseRow: '<i class="material-icons">remove</i>'
                 *         }
                 *     });
                 * </script>
                 */
collapseRow:'<i class="gj-icon chevron-down" />'}},fontawesome:{icons:{expandRow:'<i class="fa fa-angle-right" aria-hidden="true"></i>',collapseRow:'<i class="fa fa-angle-down" aria-hidden="true"></i>'}},glyphicons:{icons:{expandRow:'<span class="glyphicon glyphicon-chevron-right" />',collapseRow:'<span class="glyphicon glyphicon-chevron-down" />'}}},private:{expandDetail:function(e,t,n){var i=t.closest("tr"),r=$('<tr data-role="details" />'),o=$('<td colspan="'+gj.grid.methods.countVisibleColumns(e)+'" />'),a=$('<div data-role="display" />'),s=e.data(),l=i.data("position"),d=e.get(l),c=gj.grid.plugins.expandCollapseRows;void 0===typeof n&&(n=gj.grid.methods.getId(d,s.primaryKey,d)),r.append(o.append(a.append(i.data("details")))),r.insertAfter(i),t.children('div[data-role="display"]').empty().append(s.icons.collapseRow),e.updateDetails(i),c.private.keepSelection(e,n),c.events.detailExpand(e,r.find("td>div"),n)},collapseDetail:function(e,t,n){var i=t.closest("tr"),r=i.next('tr[data-role="details"]'),o=e.data(),a=gj.grid.plugins.expandCollapseRows;void 0===typeof n&&(n=gj.grid.methods.getId(record,o.primaryKey,record)),r.remove(),t.children('div[data-role="display"]').empty().append(o.icons.expandRow),a.private.removeSelection(e,n),a.events.detailCollapse(e,r.find("td>div"),n)},keepSelection:function(e,t){var n=e.data();n.keepExpandedRows&&($.isArray(n.expandedRows)?-1==n.expandedRows.indexOf(t)&&n.expandedRows.push(t):n.expandedRows=[t])},removeSelection:function(e,t){var n=e.data();n.keepExpandedRows&&$.isArray(n.expandedRows)&&n.expandedRows.indexOf(t)>-1&&n.expandedRows.splice(n.expandedRows.indexOf(t),1)},updateDetailsColSpan:function(e){var t=e.find('tbody > tr[data-role="details"] > td');t&&t.length&&t.attr("colspan",gj.grid.methods.countVisibleColumns(e))}},public:{/**
         * Collapse all grid rows.
         * @method
         * @return jQuery object
         * @example Sample <!-- grid -->
         * <button onclick="grid.expandAll()" class="gj-button-md">Expand All</button>
         * <button onclick="grid.collapseAll()" class="gj-button-md">Collapse All</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         detailTemplate: '<div style="text-align: left"><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'DateOfBirth', type: 'date' } ],
         *         grouping: { groupBy: 'CountryName' },
         *     });
         * </script>
         */
collapseAll:function(){var e,t=this,n=t.data();return void 0!==n.detailTemplate&&(e=gj.grid.methods.getColumnPositionByRole(t,"expander"),t.find('tbody tr[data-role="row"]').each(function(){gj.grid.plugins.expandCollapseRows.private.collapseDetail(t,$(this).find("td:eq("+e+")"))})),void 0!==n.grouping&&t.find('tbody tr[role="group"]').each(function(){gj.grid.plugins.grouping.private.collapseGroup(n,$(this).find("td:eq(0)"))}),t},/**
         * Expand all grid rows.
         * @method
         * @return jQuery object
         * @example Sample <!-- grid -->
         * <button onclick="grid.expandAll()" class="gj-button-md">Expand All</button>
         * <button onclick="grid.collapseAll()" class="gj-button-md">Collapse All</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         detailTemplate: '<div style="text-align: left"><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'DateOfBirth', type: 'date' } ],
         *         grouping: { groupBy: 'CountryName' },
         *     });
         * </script>
         */
expandAll:function(){var e,t=this,n=t.data();return void 0!==n.detailTemplate&&(e=gj.grid.methods.getColumnPositionByRole(t,"expander"),t.find('tbody tr[data-role="row"]').each(function(){gj.grid.plugins.expandCollapseRows.private.expandDetail(t,$(this).find("td:eq("+e+")"))})),void 0!==n.grouping&&t.find('tbody tr[role="group"]').each(function(){gj.grid.plugins.grouping.private.expandGroup(n,$(this).find("td:eq(0)"))}),t},
//TODO: add documentation
updateDetails:function(e){var t=this,n=e.data("details"),i=n.html(),r=t.get(e.data("position"));return r&&i&&(n.html().replace(/\{(.+?)\}/g,function(e,n){var o=gj.grid.methods.getColumnInfo(t,n);i=i.replace(e,gj.grid.methods.formatText(r[n],o))}),n.html(i)),t}},events:{/**
         * Event fires when detail row is showing
         *
         * @event detailExpand
         * @param {object} e - event data
         * @param {object} detailWrapper - the detail wrapper as jQuery object 
         * @param {string} id - the id of the record
         * @example sample <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         primaryKey: 'ID',
         *         dataSource: '/Players/Get',
         *         detailTemplate: '<div></div>',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'DateOfBirth', type: 'date' } ]
         *     });
         *     grid.on('detailExpand', function (e, $detailWrapper, id) {
         *         var record = grid.getById(id);
         *         $detailWrapper.empty().append('<b>Place Of Birth:</b> ' + record.PlaceOfBirth);
         *     });
         * </script>
         */
detailExpand:function(e,t,n){e.triggerHandler("detailExpand",[t,n])},/**
         * Event fires when detail row is hiding
         *
         * @event detailCollapse
         * @param {object} e - event data
         * @param {object} detailWrapper - the detail wrapper as jQuery object 
         * @param {string} id - the id of the record
         * @example sample <!-- grid -->
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         primaryKey: 'ID',
         *         dataSource: '/Players/Get',
         *         detailTemplate: '<div></div>',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'DateOfBirth', type: 'date' } ]
         *     });
         *     grid.on('detailExpand', function (e, $detailWrapper, id) {
         *         var record = grid.getById(id);
         *         $detailWrapper.append('<b>Place Of Birth:</b>' + record.PlaceOfBirth);
         *     });
         *     grid.on('detailCollapse', function (e, $detailWrapper, id) {
         *         $detailWrapper.empty();
         *         alert('detailCollapse is fired.');
         *     });
         * </script>
         */
detailCollapse:function(e,t,n){e.triggerHandler("detailCollapse",[t,n])}},configure:function(e){var t,n=e.data();$.extend(!0,e,gj.grid.plugins.expandCollapseRows.public),void 0!==n.detailTemplate&&(t={title:"",width:n.defaultIconColumnWidth,align:"center",stopPropagation:!0,cssClass:"gj-cursor-pointer gj-unselectable",tmpl:n.icons.expandRow,role:"expander",events:{click:function(t){var n=$(this),i=gj.grid.plugins.expandCollapseRows.private;"details"===n.closest("tr").next().attr("data-role")?i.collapseDetail(e,n,t.data.id):i.expandDetail(e,$(this),t.data.id)}}},n.columns=[t].concat(n.columns),e.on("rowDataBound",function(e,t,i,r){t.data("details",$(n.detailTemplate))}),e.on("columnShow",function(t,n){gj.grid.plugins.expandCollapseRows.private.updateDetailsColSpan(e)}),e.on("columnHide",function(t,n){gj.grid.plugins.expandCollapseRows.private.updateDetailsColSpan(e)}),e.on("rowRemoving",function(t,n,i,r){gj.grid.plugins.expandCollapseRows.private.collapseDetail(e,n.children("td").first(),i)}),e.on("dataBinding",function(){e.collapseAll()}),e.on("pageChanging",function(){e.collapseAll()}),e.on("dataBound",function(){var t,n,i,r,o=e.data();if(o.keepExpandedRows&&$.isArray(o.expandedRows))for(t=0;t<o.expandedRows.length;t++)(i=gj.grid.methods.getRowById(e,o.expandedRows[t]))&&i.length&&(r=gj.grid.methods.getColumnPositionByRole(e,"expander"),(n=i.children("td:eq("+r+")"))&&n.length&&gj.grid.plugins.expandCollapseRows.private.expandDetail(e,n))}))}},/** 
 * @widget Grid 
 * @plugin Inline Editing
 */
gj.grid.plugins.inlineEditing={renderers:{editManager:function(e,t,n,i,r,o){var a=o.data(),s=$(a.inlineEditing.editButton).attr("key",r),l=$(a.inlineEditing.deleteButton).attr("key",r),d=$(a.inlineEditing.updateButton).attr("key",r).hide(),c=$(a.inlineEditing.cancelButton).attr("key",r).hide();s.on("click",function(e){o.edit($(this).attr("key"))}),l.on("click",function(e){o.removeRow($(this).attr("key"))}),d.on("click",function(e){o.update($(this).attr("key"))}),c.on("click",function(e){o.cancel($(this).attr("key"))}),i.empty().append(s).append(l).append(d).append(c)}}},gj.grid.plugins.inlineEditing.config={base:{defaultColumnSettings:{/** Provides a way to set an editing UI for the column.
             * @alias column.editor
             * @type function|boolean
             * @default undefined
             * @example Material.Design <!-- grid, datepicker, dropdown, checkbox -->
             * <table id="grid"></table>
             * <script>
             *     var countries = [ 'Bulgaria', 'Brazil', 'England', 'Germany', 'Colombia', 'Poland' ];
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'Name', editor: true },
             *             { field: 'CountryName', type: 'dropdown', editor: { dataSource: countries } },
             *             { field: 'DateOfBirth', type: 'date', editor: true, format: 'dd.mm.yyyy' },
             *             { field: 'IsActive', title: 'Active?', type:'checkbox', editor: true, mode: 'editOnly', width: 80, align: 'center' }
             *         ]
             *     });
             * </script>
             * @example Custom.With.Select2 <!-- grid, datepicker, checkbox -->
             * <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
             * <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
             * <table id="grid"></table>
             * <script>
             *     function select2editor($editorContainer, value, record) {
             *         var select = $('<select><option value="Bulgaria">Bulgaria</option><option value="Brazil">Brazil</option><option value="England">England</option><option value="Germany">Germany</option><option value="Colombia">Colombia</option><option value="Poland">Poland</option></select>');
             *         $editorContainer.append(select);
             *         select.select2();
             *     }
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'Name', editor: true },
             *             { field: 'CountryName', type: 'dropdown', editor: select2editor },
             *             { field: 'DateOfBirth', type: 'date', editor: true, format: 'dd.mm.yyyy' },
             *             { field: 'IsActive', title: 'Active?', type:'checkbox', editor: true, mode: 'editOnly', width: 80, align: 'center' }
             *         ]
             *     });
             * </script>
             * @example Bootstrap.3 <!-- bootstrap, grid, datepicker, dropdown, checkbox -->
             * <table id="grid"></table>
             * <script>
             *     var countries = [ 'Bulgaria', 'Brazil', 'England', 'Germany', 'Colombia', 'Poland' ];
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap',
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'Name', editor: true },
             *             { field: 'CountryName', type: 'dropdown', editor: { dataSource: countries } },
             *             { field: 'DateOfBirth', type: 'date', editor: true },
             *             { field: 'IsActive', title: 'Active?', type:'checkbox', editor: true, mode: 'editOnly', width: 80, align: 'center' }
             *         ]
             *     });
             * </script>
             * @example Bootstrap.4 <!-- bootstrap4, grid, datepicker, dropdown, checkbox -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap4',
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'Name', editor: true },
             *             { field: 'CountryName', type: 'dropdown', editor: { dataSource: '/Locations/GetCountries', valueField: 'id' }, editField: 'CountryID'  },
             *             { field: 'DateOfBirth', type: 'date', editor: true },
             *             { field: 'IsActive', title: 'Active?', type:'checkbox', editor: true, mode: 'editOnly', width: 80, align: 'center' }
             *         ]
             *     });
             * </script>
             */
editor:void 0,/** The name of the field in the grid data where the grid is going to set the new value.
             * @additionalinfo This is usable when the editor is interface with key/value pairs like dropdowns where the key needs to be updated in a different field..
             * @alias column.editField
             * @type String
             * @default undefined
             * @example Bootstrap.4 <!-- bootstrap4, grid, datepicker, dropdown, checkbox -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         uiLibrary: 'bootstrap4',
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'Name', editor: true },
             *             { field: 'CountryName', type: 'dropdown', editor: { dataSource: '/Locations/GetCountries', valueField: 'id' }, editField: 'CountryID' },
             *             { field: 'DateOfBirth', type: 'date', editor: true },
             *             { field: 'IsActive', title: 'Active?', type:'checkbox', editor: true, mode: 'editOnly', width: 80, align: 'center' }
             *         ]
             *     });
             * </script>
             */
editField:void 0,/** Provides a way to specify a display mode for the column.
             * @alias column.mode
             * @type readEdit|editOnly|readOnly
             * @default readEdit
             * @example sample <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', editor: true, mode: 'editOnly' },
             *             { field: 'PlaceOfBirth', editor: true, mode: 'readOnly' }
             *         ]
             *     });
             * </script>
             */
mode:"readEdit"},inlineEditing:{/** Inline editing mode.
             * @alias inlineEditing.mode
             * @type click|dblclick|command
             * @default 'click'
             * @example Double.Click <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     var grid = $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         primaryKey: 'ID',
             *         inlineEditing: { mode: 'dblclick' },
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', editor: true },
             *             { field: 'PlaceOfBirth', editor: true }
             *         ]
             *     });
             * </script>
             * @example Command <!-- dropdown, grid -->
             * <table id="grid"></table>
             * <script>
             *     var grid, data = [
             *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
             *         { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
             *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' },
             *         { 'ID': 4, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany' },
             *         { 'ID': 5, 'Name': 'James Rodríguez', 'PlaceOfBirth': 'Cúcuta, Colombia' },
             *         { 'ID': 6, 'Name': 'Dimitar Berbatov', 'PlaceOfBirth': 'Blagoevgrad, Bulgaria' }
             *     ];
             *     grid = $('#grid').grid({
             *         dataSource: data,
             *         primaryKey: 'ID',
             *         inlineEditing: { mode: 'command' },
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', editor: true },
             *             { field: 'PlaceOfBirth', editor: true }
             *         ],
             *         pager: { limit: 3 }
             *     });
             * </script>
             */
mode:"click",/** If set to true, add column with buttons for edit, delete, update and cancel at the end of the grid.
             * @alias inlineEditing.managementColumn
             * @type Boolean
             * @default true
             * @example True <!-- grid, checkbox, datepicker -->
             * <table id="grid"></table>
             * <script>
             *     var grid, data = [
             *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria', 'DateOfBirth': '\/Date(-122954400000)\/', IsActive: false },
             *         { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil', 'DateOfBirth': '\/Date(211842000000)\/', IsActive: false },
             *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England', 'DateOfBirth': '\/Date(-112417200000)\/', IsActive: false },
             *         { 'ID': 4, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany', 'DateOfBirth': '\/Date(512258400000)\/', IsActive: true },
             *         { 'ID': 5, 'Name': 'James Rodríguez', 'PlaceOfBirth': 'Cúcuta, Colombia', 'DateOfBirth': '\/Date(679266000000)\/', IsActive: true },
             *         { 'ID': 6, 'Name': 'Dimitar Berbatov', 'PlaceOfBirth': 'Blagoevgrad, Bulgaria', 'DateOfBirth': '\/Date(349653600000)\/', IsActive: false }
             *     ];
             *     grid = $('#grid').grid({
             *         dataSource: data,
             *         primaryKey: 'ID',
             *         inlineEditing: { mode: 'command', managementColumn: true },
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', editor: true },
             *             { field: 'PlaceOfBirth', editor: true },
             *             { field: 'DateOfBirth', type: 'date', editor: true },
             *             { field: 'IsActive', title: 'Active?', type: 'checkbox', editor: true, width: 100, align: 'center' }
             *         ]
             *     });
             * </script>
             * @example False <!-- materialicons, grid -->
             * <table id="grid"></table>
             * <script>
             *     var grid, editManager, data = [
             *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
             *         { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
             *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' },
             *         { 'ID': 4, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany' },
             *         { 'ID': 5, 'Name': 'James Rodríguez', 'PlaceOfBirth': 'Cúcuta, Colombia' },
             *         { 'ID': 6, 'Name': 'Dimitar Berbatov', 'PlaceOfBirth': 'Blagoevgrad, Bulgaria' }
             *     ];
             *     editManager = function (value, record, $cell, $displayEl, id, $grid) {
             *         var data = $grid.data(),
             *             $edit = $('<button class="gj-button-md"><i class="material-icons">mode_edit</i> Edit</button>').attr('data-key', id),
             *             $delete = $('<button class="gj-button-md"><i class="material-icons">delete</i> Delete</button>').attr('data-key', id),
             *             $update = $('<button class="gj-button-md"><i class="material-icons">check_circle</i> Update</button>').attr('data-key', id).hide(),
             *             $cancel = $('<button class="gj-button-md"><i class="material-icons">cancel</i> Cancel</button>').attr('data-key', id).hide();
             *         $edit.on('click', function (e) {
             *             $grid.edit($(this).data('key'));
             *             $edit.hide();
             *             $delete.hide();
             *             $update.show();
             *             $cancel.show();
             *         });
             *         $delete.on('click', function (e) {
             *             $grid.removeRow($(this).data('key'));
             *         });
             *         $update.on('click', function (e) {
             *             $grid.update($(this).data('key'));
             *             $edit.show();
             *             $delete.show();
             *             $update.hide();
             *             $cancel.hide();
             *         });
             *         $cancel.on('click', function (e) {
             *             $grid.cancel($(this).data('key'));
             *             $edit.show();
             *             $delete.show();
             *             $update.hide();
             *             $cancel.hide();
             *         });
             *         $displayEl.empty().append($edit).append($delete).append($update).append($cancel);
             *     }
             *     grid = $('#grid').grid({
             *         dataSource: data,
             *         primaryKey: 'ID',
             *         inlineEditing: { mode: 'command', managementColumn: false },
             *         columns: [
             *             { field: 'ID', width: 56 },
             *             { field: 'Name', editor: true },
             *             { field: 'PlaceOfBirth', editor: true },
             *             { width: 300, align: 'center', renderer: editManager }
             *         ]
             *     });
             * </script>
             * @example Bootstrap <!-- bootstrap, grid, dropdown -->
             * <table id="grid"></table>
             * <script>
             *     var grid, data = [
             *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
             *         { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
             *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' },
             *         { 'ID': 4, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany' },
             *         { 'ID': 5, 'Name': 'James Rodríguez', 'PlaceOfBirth': 'Cúcuta, Colombia' },
             *         { 'ID': 6, 'Name': 'Dimitar Berbatov', 'PlaceOfBirth': 'Blagoevgrad, Bulgaria' }
             *     ];
             *     grid = $('#grid').grid({
             *         dataSource: data,
             *         primaryKey: 'ID',
             *         inlineEditing: { mode: 'command' },
             *         uiLibrary: 'bootstrap',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name', editor: true },
             *             { field: 'PlaceOfBirth', editor: true }
             *         ],
             *         pager: { limit: 3, sizes: [3, 5, 10, 20] }
             *     });
             * </script>
             * @example Bootstrap.4 <!-- bootstrap4, grid, dropdown -->
             * <table id="grid"></table>
             * <script>
             *     var grid, data = [
             *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
             *         { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
             *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' },
             *         { 'ID': 4, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany' },
             *         { 'ID': 5, 'Name': 'James Rodríguez', 'PlaceOfBirth': 'Cúcuta, Colombia' },
             *         { 'ID': 6, 'Name': 'Dimitar Berbatov', 'PlaceOfBirth': 'Blagoevgrad, Bulgaria' }
             *     ];
             *     grid = $('#grid').grid({
             *         dataSource: data,
             *         primaryKey: 'ID',
             *         inlineEditing: { mode: 'command' },
             *         uiLibrary: 'bootstrap4',
             *         columns: [
             *             { field: 'ID', width: 42 },
             *             { field: 'Name', editor: true },
             *             { field: 'PlaceOfBirth', editor: true }
             *         ],
             *         pager: { limit: 3, sizes: [3, 5, 10, 20] }
             *     });
             * </script>
            */
managementColumn:!0,managementColumnConfig:{width:300,role:"managementColumn",align:"center",renderer:gj.grid.plugins.inlineEditing.renderers.editManager,cssClass:"gj-grid-management-column"}}},bootstrap:{inlineEditing:{managementColumnConfig:{width:200,role:"managementColumn",align:"center",renderer:gj.grid.plugins.inlineEditing.renderers.editManager,cssClass:"gj-grid-management-column"}}},bootstrap4:{inlineEditing:{managementColumnConfig:{width:280,role:"managementColumn",align:"center",renderer:gj.grid.plugins.inlineEditing.renderers.editManager,cssClass:"gj-grid-management-column"}}}},gj.grid.plugins.inlineEditing.private={localization:function(e){"bootstrap"===e.uiLibrary?(e.inlineEditing.editButton='<button role="edit" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> '+gj.grid.messages[e.locale].Edit+"</button>",e.inlineEditing.deleteButton='<button role="delete" class="btn btn-default btn-sm gj-margin-left-10"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> '+gj.grid.messages[e.locale].Delete+"</button>",e.inlineEditing.updateButton='<button role="update" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> '+gj.grid.messages[e.locale].Update+"</button>",e.inlineEditing.cancelButton='<button role="cancel" class="btn btn-default btn-sm gj-margin-left-10"><span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span> '+gj.grid.messages[e.locale].Cancel+"</button>"):(e.inlineEditing.editButton='<button role="edit" class="gj-button-md"><i class="gj-icon pencil" /> '+gj.grid.messages[e.locale].Edit.toUpperCase()+"</button>",e.inlineEditing.deleteButton='<button role="delete" class="gj-button-md"><i class="gj-icon delete" /> '+gj.grid.messages[e.locale].Delete.toUpperCase()+"</button>",e.inlineEditing.updateButton='<button role="update" class="gj-button-md"><i class="gj-icon check-circle" /> '+gj.grid.messages[e.locale].Update.toUpperCase()+"</button>",e.inlineEditing.cancelButton='<button role="cancel" class="gj-button-md"><i class="gj-icon cancel" /> '+gj.grid.messages[e.locale].Cancel.toUpperCase()+"</button>")},editMode:function(e,t,n,i){var r,o,a,s,l,d=e.data();"edit"!==t.attr("data-mode")&&(n.editor?(gj.grid.plugins.inlineEditing.private.updateOtherCells(e,n.mode),r=t.find('div[data-role="display"]').hide(),o=t.find('div[data-role="edit"]').show(),0===o.length&&(o=$('<div data-role="edit" />'),t.append(o)),s=i[n.editField||n.field],a=o.find("input, select, textarea").first(),a.length?"checkbox"===n.type?a.prop("checked",s):a.val(s):("function"==typeof n.editor?(n.editor(o,s,i),a=o.find("input, select, textarea").first()):(l="object"==typeof n.editor?n.editor:{},l.uiLibrary=d.uiLibrary,l.iconsLibrary=d.iconsLibrary,l.fontSize=e.css("font-size"),"checkbox"===n.type&&gj.checkbox?(a=$('<input type="checkbox" />').prop("checked",s),o.append(a),a.checkbox(l)):"date"===n.type&&gj.datepicker?(a=$('<input type="text" width="100%"/>'),o.append(a),n.format&&(l.format=n.format),a=a.datepicker(l),a.value&&a.value(r.html())):"dropdown"===n.type&&gj.dropdown?(a=$('<select type="text" width="100%"/>'),o.append(a),l.dataBound=function(e){var t=$(this).dropdown();n.editField?t.value(i[n.editField]):t.value(i[n.field])},a=a.dropdown(l)):(a=$('<input type="text" value="'+s+'" class="gj-width-full"/>'),"materialdesign"===d.uiLibrary&&a.addClass("gj-textbox-md").css("font-size",e.css("font-size")),o.append(a))),"command"!==d.inlineEditing.mode&&"editOnly"!==n.mode&&(a=o.find("input, select, textarea").first(),a.on("keyup",function(i){13!==i.keyCode&&27!==i.keyCode||gj.grid.plugins.inlineEditing.private.displayMode(e,t,n)}))),"INPUT"===a.prop("tagName").toUpperCase()&&"TEXT"===a.prop("type").toUpperCase()?gj.grid.plugins.inlineEditing.private.setCaretAtEnd(a[0]):a.focus(),t.attr("data-mode","edit")):"managementColumn"===n.role&&(t.find('[role="edit"]').hide(),t.find('[role="delete"]').hide(),t.find('[role="update"]').show(),t.find('[role="cancel"]').show()))},setCaretAtEnd:function(e){var t;if(e)if(t=e.value.length,document.selection){// For IE Only
e.focus();var n=document.selection.createRange();n.moveStart("character",-t),n.moveStart("character",t),n.moveEnd("character",0),n.select()}else(e.selectionStart||"0"==e.selectionStart)&&(// Firefox/Chrome                
e.selectionStart=t,e.selectionEnd=t,e.focus())},displayMode:function(e,t,n,i){var r,o,a,s,l,d,c;"editOnly"!==n.mode&&("edit"===t.attr("data-mode")&&(r=t.find('div[data-role="edit"]'),o=t.find('div[data-role="display"]'),a=r.find("input, select, textarea").first(),"SELECT"===a[0].tagName.toUpperCase()&&a[0].selectedIndex>-1?(s=a[0].options[a[0].selectedIndex].innerHTML,l=a[0].value):s="INPUT"===a[0].tagName.toUpperCase()&&"CHECKBOX"===a[0].type.toUpperCase()?a[0].checked:a.val(),c=t.parent().data("position"),d=e.get(c),!0!==i&&s!==d[n.field]&&(d[n.field]="date"===n.type?gj.core.parseDate(s,n.format):s,n.editField&&(d[n.editField]=l||s),"editOnly"!==n.mode&&(gj.grid.methods.renderDisplayElement(e,o,n,d,gj.grid.methods.getId(d,e.data("primaryKey"),c),"update"),0===t.find("span.gj-dirty").length&&t.prepend($('<span class="gj-dirty" />'))),gj.grid.plugins.inlineEditing.events.cellDataChanged(e,t,n,d,s),gj.grid.plugins.inlineEditing.private.updateChanges(e,n,d,s)),r.hide(),o.show(),t.attr("data-mode","display")),"managementColumn"===n.role&&(t.find('[role="update"]').hide(),t.find('[role="cancel"]').hide(),t.find('[role="edit"]').show(),t.find('[role="delete"]').show()))},updateOtherCells:function(e,t){var n=e.data();"command"!==n.inlineEditing.mode&&"editOnly"!==t&&e.find('div[data-role="edit"]:visible').parent("td").each(function(){var t=$(this),i=n.columns[t.index()];gj.grid.plugins.inlineEditing.private.displayMode(e,t,i)})},updateChanges:function(e,t,n,i){var r,o,a,s=e.data();s.guid||(s.guid=gj.grid.plugins.inlineEditing.private.generateGUID()),s.primaryKey&&(r=JSON.parse(sessionStorage.getItem("gj.grid."+s.guid)),r?o=r.filter(function(e){return e[s.primaryKey]===n[s.primaryKey]}):r=[],o&&1===o.length?o[0][t.field]=i:(a={},a[s.primaryKey]=n[s.primaryKey],s.primaryKey!==t.field&&(a[t.field]=i),r.push(a)),sessionStorage.setItem("gj.grid."+s.guid,JSON.stringify(r)))},generateGUID:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},gj.grid.plugins.inlineEditing.public={/**
     * Return array with all changes
     * @method
     * @return array
     * @example sample <!-- grid, grid.inlineEditing -->
     * <button id="btnGetChanges" class="gj-button-md">Get Changes</button>
     * <br/><br/>
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID' }, { field: 'Name', editor: true }, { field: 'PlaceOfBirth', editor: true } ]
     *     });
     *     $('#btnGetChanges').on('click', function () {
     *         alert(JSON.stringify(grid.getChanges()));
     *     });
     * </script>
     */
getChanges:function(){return JSON.parse(sessionStorage.getItem("gj.grid."+this.data().guid))},/**
     * Enable edit mode for all editable cells within a row.
     * @method
     * @param {string} id - The id of the row that needs to be edited
     * @return grid
     * @example Edit.Row <!-- grid -->
     * <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
     * <table id="grid"></table>
     * <script>
     *     var grid, renderer;
     *     renderer = function (value, record, $cell, $displayEl, id) {
     *         var $editBtn = $('<i class="fa fa-pencil gj-cursor-pointer" data-key="' + id + '"></i>'),
     *             $updateBtn = $('<i class="fa fa-save gj-cursor-pointer" data-key="' + id + '"></i>').hide();
     *         $editBtn.on('click', function (e) {
     *             grid.edit($(this).data('key'));
     *             $editBtn.hide();
     *             $updateBtn.show();
     *         });
     *         $updateBtn.on('click', function (e) {
     *             grid.update($(this).data('key'));
     *             $editBtn.show();
     *             $updateBtn.hide();
     *         });
     *         $displayEl.append($editBtn).append($updateBtn);
     *     }
     *     grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: '/Players/Get',
     *         inlineEditing: { mode: 'command', managementColumn: false },
     *         columns: [ 
     *             { field: 'ID', width: 56 },
     *             { field: 'Name', editor: true }, 
     *             { field: 'PlaceOfBirth', editor: true },
     *             { width: 56, align: 'center', renderer: renderer }
     *         ]
     *     });
     * </script>
     */
edit:function(e){var t,n=this.getById(e),i=gj.grid.methods.getRowById(this,e).children("td"),r=this.data("columns");for(t=0;t<i.length;t++)gj.grid.plugins.inlineEditing.private.editMode(this,$(i[t]),r[t],n);return this},/**
     * Update all editable cells within a row, when the row is in edit mode.
     * @method
     * @param {string} id - The id of the row that needs to be updated
     * @return grid
     * @fires rowDataChanged
     * @example Update.Row <!-- grid -->
     * <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
     * <table id="grid"></table>
     * <script>
     *     var grid, renderer;
     *     renderer = function (value, record, $cell, $displayEl, id) {
     *         var $editBtn = $('<i class="fa fa-pencil gj-cursor-pointer" data-key="' + id + '"></i>'),
     *             $updateBtn = $('<i class="fa fa-save gj-cursor-pointer" data-key="' + id + '"></i>').hide();
     *         $editBtn.on('click', function (e) {
     *             grid.edit($(this).data('key'));
     *             $editBtn.hide();
     *             $updateBtn.show();
     *         });
     *         $updateBtn.on('click', function (e) {
     *             grid.update($(this).data('key'));
     *             $editBtn.show();
     *             $updateBtn.hide();
     *         });
     *         $displayEl.append($editBtn).append($updateBtn);
     *     }
     *     grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: '/Players/Get',
     *         inlineEditing: { mode: 'command', managementColumn: false },
     *         columns: [ 
     *             { field: 'ID', width: 56 },
     *             { field: 'Name', editor: true }, 
     *             { field: 'PlaceOfBirth', editor: true },
     *             { width: 56, align: 'center', renderer: renderer }
     *         ]
     *     });
     * </script>
     */
update:function(e){var t,n=this.getById(e),i=gj.grid.methods.getRowById(this,e).children("td"),r=this.data("columns");for(t=0;t<i.length;t++)gj.grid.plugins.inlineEditing.private.displayMode(this,$(i[t]),r[t],!1);return gj.grid.plugins.inlineEditing.events.rowDataChanged(this,e,n),this},/**
     * Cancel the edition of all editable cells, when the row is in edit mode.
     * @method
     * @param {string} id - The id of the row where you need to undo all changes
     * @return grid
     * @example Cancel.Row <!-- grid -->
     * <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
     * <table id="grid"></table>
     * <script>
     *     var grid, renderer;
     *     renderer = function (value, record, $cell, $displayEl, id) {
     *         var $editBtn = $('<i class="fa fa-pencil gj-cursor-pointer" data-key="' + id + '"></i>'),
     *             $cancelBtn = $('<i class="fa fa-undo gj-cursor-pointer" data-key="' + id + '"></i>').hide();
     *         $editBtn.on('click', function (e) {
     *             grid.edit($(this).data('key'));
     *             $editBtn.hide();
     *             $cancelBtn.show();
     *         });
     *         $cancelBtn.on('click', function (e) {
     *             grid.cancel($(this).data('key'));
     *             $editBtn.show();
     *             $cancelBtn.hide();
     *         });
     *         $displayEl.append($editBtn).append($cancelBtn);
     *     }
     *     grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: '/Players/Get',
     *         inlineEditing: { mode: 'command', managementColumn: false },
     *         columns: [ 
     *             { field: 'ID', width: 56 },
     *             { field: 'Name', editor: true }, 
     *             { field: 'PlaceOfBirth', editor: true },
     *             { width: 56, align: 'center', renderer: renderer }
     *         ]
     *     });
     * </script>
     */
cancel:function(e){var t,n=(this.getById(e),gj.grid.methods.getRowById(this,e).children("td")),i=this.data("columns");for(t=0;t<n.length;t++)gj.grid.plugins.inlineEditing.private.displayMode(this,$(n[t]),i[t],!0);return this}},gj.grid.plugins.inlineEditing.events={/**
     * Event fires after inline edit of a cell in the grid.
     *
     * @event cellDataChanged
     * @param {object} e - event data
     * @param {object} $cell - the cell presented as jquery object 
     * @param {object} column - the column configuration data
     * @param {object} record - the data of the row record
     * @param {object} newValue - the new cell value
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         dataSource: '/Players/Get',
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name', editor: true }, { field: 'PlaceOfBirth', editor: true } ]
     *     });
     *     grid.on('cellDataChanged', function (e, $cell, column, record, newValue) {
     *         alert('The value for "' + column.field + '" is changed to "' + newValue + '"');
     *     });
     * </script>
     */
cellDataChanged:function(e,t,n,i,r,o){e.triggerHandler("cellDataChanged",[t,n,i,r,o])},/**
     * Event fires after inline edit of a row in the grid.
     *
     * @event rowDataChanged
     * @param {object} e - event data
     * @param {object} id - the id of the record
     * @param {object} record - the data of the row record
     * @example sample <!-- grid -->
     * <table id="grid"></table>
     * <script>
     *     var grid = $('#grid').grid({
     *         primaryKey: 'ID',
     *         dataSource: '/Players/Get',
     *         inlineEditing: { mode: 'command' },
     *         columns: [ { field: 'ID', width: 56 }, { field: 'Name', editor: true }, { field: 'PlaceOfBirth', editor: true } ]
     *     });
     *     grid.on('rowDataChanged', function (e, id, record) {
     *         alert('Record with id="' + id + '" is changed to "' + JSON.stringify(record) + '"');
     *     });
     * </script>
     */
rowDataChanged:function(e,t,n){e.triggerHandler("rowDataChanged",[t,n])}},gj.grid.plugins.inlineEditing.configure=function(e,t,n){var i=e.data();$.extend(!0,e,gj.grid.plugins.inlineEditing.public),n.inlineEditing&&(e.on("dataBound",function(){e.find("span.gj-dirty").remove()}),e.on("rowDataBound",function(t,n,i,r){e.cancel(i)})),"command"===i.inlineEditing.mode?(gj.grid.plugins.inlineEditing.private.localization(i),t.inlineEditing.managementColumn&&i.columns.push(t.inlineEditing.managementColumnConfig)):e.on("cellDataBound",function(t,n,r,o,a){o.editor&&("editOnly"===o.mode?gj.grid.plugins.inlineEditing.private.editMode(e,n.parent(),o,a):n.parent("td").on("dblclick"===i.inlineEditing.mode?"dblclick":"click",function(){gj.grid.plugins.inlineEditing.private.editMode(e,n.parent(),o,a)}))})},/** 
 * @widget Grid 
 * @plugin Optimistic Persistence
 */
gj.grid.plugins.optimisticPersistence={config:{base:{optimisticPersistence:{/** Array that contains a list with param names that needs to be saved in the localStorage. You need to specify guid on the initialization of the grid in order to enable this feature.
                 * @additionalinfo This feature is using <a href="https://developer.mozilla.org/en/docs/Web/API/Window/localStorage" target="_blank">HTML5 localStorage</a> to store params and values.
                 * You can clear the data saved in localStorage when you clear your browser cache.
                 * @alias optimisticPersistence.localStorage
                 * @type array
                 * @default undefined
                 * @example sample <!-- bootstrap, grid  -->
                 * <p>Change the page and/or page size and then refresh the grid.</p>
                 * <table id="grid"></table>
                 * <script>
                 *     var grid = $('#grid').grid({
                 *         guid: '58d47231-ac7b-e6d2-ddba-5e0195b31f2e',
                 *         uiLibrary: 'bootstrap',
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         optimisticPersistence: { localStorage: ["page", "limit"] },
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 */
localStorage:void 0,/** Array that contains a list with param names that needs to be saved in the sessionStorage. You need to specify guid on the initialization of the grid in order to enable this feature.
                 * @additionalinfo This feature is using <a href="https://developer.mozilla.org/en/docs/Web/API/Window/sessionStorage" target="_blank">HTML5 sessionStorage</a> to store params and values.
                 * You can clear the data saved in sessionStorage when you open and close the browser.
                 * @alias optimisticPersistence.sessionStorage
                 * @type array
                 * @default undefined
                 * @example sample <!-- bootstrap, grid  -->
                 * <p>Change the page and/or page size and then refresh the grid. </p>
                 * <table id="grid"></table>
                 * <script>
                 *     var grid = $('#grid').grid({
                 *         guid: '58d47231-ac7b-e6d2-ddba-5e0195b31f2f',
                 *         uiLibrary: 'bootstrap',
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         optimisticPersistence: { sessionStorage: ["page", "limit"] },
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 */
sessionStorage:void 0}}},private:{applyParams:function(e){var t,n=e.data(),i={};t=JSON.parse(sessionStorage.getItem("gj.grid."+n.guid)),t&&t.optimisticPersistence&&$.extend(i,t.optimisticPersistence),t=JSON.parse(localStorage.getItem("gj.grid."+n.guid)),t&&t.optimisticPersistence&&$.extend(i,t.optimisticPersistence),$.extend(n.params,i)},saveParams:function(e){var t,n,i=e.data(),r={optimisticPersistence:{}};if(i.optimisticPersistence.sessionStorage){for(t=0;t<i.optimisticPersistence.sessionStorage.length;t++)n=i.optimisticPersistence.sessionStorage[t],r.optimisticPersistence[n]=i.params[n];r=$.extend(!0,JSON.parse(sessionStorage.getItem("gj.grid."+i.guid)),r),sessionStorage.setItem("gj.grid."+i.guid,JSON.stringify(r))}if(i.optimisticPersistence.localStorage){for(r={optimisticPersistence:{}},t=0;t<i.optimisticPersistence.localStorage.length;t++)n=i.optimisticPersistence.localStorage[t],r.optimisticPersistence[n]=i.params[n];r=$.extend(!0,JSON.parse(localStorage.getItem("gj.grid."+i.guid)),r),localStorage.setItem("gj.grid."+i.guid,JSON.stringify(r))}}},configure:function(e,t,n){t.guid&&(t.optimisticPersistence.localStorage||t.optimisticPersistence.sessionStorage)&&(gj.grid.plugins.optimisticPersistence.private.applyParams(e),e.on("dataBound",function(t){gj.grid.plugins.optimisticPersistence.private.saveParams(e)}))}},/**
 * @widget Grid
 * @plugin Pagination
 */
gj.grid.plugins.pagination={config:{base:{style:{pager:{panel:"",stateDisabled:"",activeButton:""}},paramNames:{/** The name of the parameter that is going to send the number of the page.
                 * The pager should be enabled in order this parameter to be in use.
                 * @alias paramNames.page
                 * @type string
                 * @default "page"
                 */
page:"page",/** The name of the parameter that is going to send the maximum number of records per page.
                 * The pager should be enabled in order this parameter to be in use.
                 * @alias paramNames.limit
                 * @type string
                 * @default "limit"
                 */
limit:"limit"},pager:{/** The maximum number of records that can be show by page.
                 * @alias pager.limit
                 * @type number
                 * @default 10
                 * @example local.data <!-- grid, dropdown -->
                 * <table id="grid"></table>
                 * <script>
                 *     var data, grid;
                 *     data = [
                 *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
                 *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
                 *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
                 *     ];
                 *     grid = $('#grid').grid({
                 *         dataSource: data,
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 100] }
                 *     });
                 * </script>
                 * @example remote.data <!-- grid, dropdown -->
                 * <table id="grid"></table>
                 * <script>
                 *     var grid = $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 100] }
                 *     });
                 * </script>
                 */
limit:10,/** Array that contains the possible page sizes of the grid.
                 * When this setting is set, then a drop down with the options for each page size is visualized in the pager.
                 * @alias pager.sizes
                 * @type array
                 * @default [5, 10, 20, 100]
                 * @example Bootstrap.3 <!-- bootstrap, grid, grid.pagination, dropdown  -->
                 * <table id="grid"></table>
                 * <script>
                 *     var grid = $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         uiLibrary: 'bootstrap',
                 *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 * @example Bootstrap.4.FontAwesome <!-- bootstrap4, fontawesome, grid, dropdown  -->
                 * <table id="grid"></table>
                 * <script>
                 *     var grid = $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         uiLibrary: 'bootstrap4',
                 *         iconsLibrary: 'fontawesome',
                 *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 * @example Bootstrap.4.Material.Icons <!-- bootstrap4, grid, dropdown  -->
                 * <table id="grid"></table>
                 * <script>
                 *     var grid = $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         uiLibrary: 'bootstrap4',
                 *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 * @example Material.Design <!-- grid, grid.pagination, dropdown  -->
                 * <table id="grid"></table>
                 * <script>
                 *     var grid = $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         uiLibrary: 'materialdesign',
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 */
sizes:[5,10,20,100],/** Array that contains a list with jquery objects that are going to be used on the left side of the pager.
                 * @alias pager.leftControls
                 * @type array
                 * @default array
                 * @example Font.Awesome <!-- fontawesome, grid  -->
                 * <style>
                 * .icon-disabled { color: #ccc; }
                 * table.gj-grid div[data-role="display"] div.custom-item { display: table; margin-right: 5px; }
                 * </style>
                 * <table id="grid"></table>
                 * <script>
                 *     var grid = $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         style: {
                 *             pager: {
                 *                 stateDisabled: 'icon-disabled'
                 *             }
                 *         },
                 *         pager: { 
                 *             limit: 2, 
                 *             sizes: [2, 5, 10, 20],
                 *             leftControls: [
                 *                 $('<div title="First" data-role="page-first" class="custom-item"><i class="fa fa-fast-backward" aria-hidden="true" /></div>'),
                 *                 $('<div title="Previous" data-role="page-previous" class="custom-item"><i class="fa fa-backward" aria-hidden="true" /></div>'),
                 *                 $('<div> Page </div>'),
                 *                 $('<div class="custom-item"></div>').append($('<input type="text" data-role="page-number" style="margin: 0 5px; width: 34px; height: 16px; text-align: right;" value="0">')),
                 *                 $('<div>of&nbsp;</div>'),
                 *                 $('<div data-role="page-label-last" style="margin-right: 5px;">0</div>'),
                 *                 $('<div title="Next" data-role="page-next" class="custom-item"><i class="fa fa-forward" aria-hidden="true" /></div>'),
                 *                 $('<div title="Last" data-role="page-last" class="custom-item"><i class="fa fa-fast-forward" aria-hidden="true" /></div>'),
                 *                 $('<div title="Reload" data-role="page-refresh" class="custom-item"><i class="fa fa-refresh" aria-hidden="true" /></div>'),
                 *                 $('<div class="custom-item"></div>').append($('<select data-role="page-size" style="margin: 0 5px; width: 50px;"></select>'))
                 *             ],
                 *             rightControls: [
                 *                 $('<div>Displaying records&nbsp;</div>'),
                 *                 $('<div data-role="record-first">0</div>'),
                 *                 $('<div>&nbsp;-&nbsp;</div>'),
                 *                 $('<div data-role="record-last">0</div>'),
                 *                 $('<div>&nbsp;of&nbsp;</div>'),
                 *                 $('<div data-role="record-total">0</div>').css({ "margin-right": "5px" })
                 *             ]
                 *         }
                 *     });
                 * </script>
                 */
leftControls:void 0,/** Array that contains a list with jquery objects that are going to be used on the right side of the pager.
                 * @alias pager.rightControls
                 * @type array
                 * @default array
                 */
rightControls:void 0}},bootstrap:{style:{pager:{panel:"",stateDisabled:""}}},bootstrap4:{style:{pager:{panel:"btn-toolbar",stateDisabled:""}}},glyphicons:{icons:{first:'<span class="glyphicon glyphicon-step-backward"></span>',previous:'<span class="glyphicon glyphicon-backward"></span>',next:'<span class="glyphicon glyphicon-forward"></span>',last:'<span class="glyphicon glyphicon-step-forward"></span>',refresh:'<span class="glyphicon glyphicon-refresh"></span>'}},materialicons:{icons:{first:'<i class="gj-icon first-page" />',previous:'<i class="gj-icon chevron-left" />',next:'<i class="gj-icon chevron-right" />',last:'<i class="gj-icon last-page" />',refresh:'<i class="gj-icon refresh" />'}},fontawesome:{icons:{first:'<i class="fa fa-fast-backward" aria-hidden="true"></i>',previous:'<i class="fa fa-backward" aria-hidden="true"></i>',next:'<i class="fa fa-forward" aria-hidden="true"></i>',last:'<i class="fa fa-fast-forward" aria-hidden="true"></i>',refresh:'<i class="fa fa-refresh" aria-hidden="true"></i>'}}},private:{init:function(e){var t,n,i,r,o,a,s,l,d,c;if(i=e.data(),i.pager)for(i.params[i.paramNames.page]||(i.params[i.paramNames.page]=1),i.params[i.paramNames.limit]||(i.params[i.paramNames.limit]=i.pager.limit),gj.grid.plugins.pagination.private.localization(i),t=$('<tr data-role="pager"/>'),n=$("<th/>"),t.append(n),o=$('<div data-role="display" />').addClass(i.style.pager.panel).css({float:"left"}),a=$('<div data-role="display" />').addClass(i.style.pager.panel).css({float:"right"}),n.append(o).append(a),s=$("<tfoot />").append(t),e.append(s),gj.grid.plugins.pagination.private.updatePagerColSpan(e),l=gj.grid.methods.clone(i.pager.leftControls),//clone array
$.each(l,function(){o.append(this)}),d=gj.grid.methods.clone(i.pager.rightControls),//clone array
$.each(d,function(){a.append(this)}),r=e.find("tfoot [data-role]"),c=0;c<r.length;c++)gj.grid.plugins.pagination.private.initPagerControl($(r[c]),e)},localization:function(e){"bootstrap"===e.uiLibrary?gj.grid.plugins.pagination.private.localizationBootstrap(e):"bootstrap4"===e.uiLibrary?gj.grid.plugins.pagination.private.localizationBootstrap4(e):gj.grid.plugins.pagination.private.localizationMaterialDesign(e)},localizationBootstrap:function(e){var t=gj.grid.messages[e.locale];void 0===e.pager.leftControls&&(e.pager.leftControls=[$('<button type="button" class="btn btn-default btn-sm">'+(e.icons.first||t.First)+"</button>").attr("title",t.FirstPageTooltip).attr("data-role","page-first"),$('<button type="button" class="btn btn-default btn-sm">'+(e.icons.previous||t.Previous)+"</button>").attr("title",t.PreviousPageTooltip).attr("data-role","page-previous"),$("<div>"+t.Page+"</div>"),$('<input data-role="page-number" class="form-control input-sm" type="text" value="0">'),$("<div>"+t.Of+"</div>"),$('<div data-role="page-label-last">0</div>'),$('<button type="button" class="btn btn-default btn-sm">'+(e.icons.next||t.Next)+"</button>").attr("title",t.NextPageTooltip).attr("data-role","page-next"),$('<button type="button" class="btn btn-default btn-sm">'+(e.icons.last||t.Last)+"</button>").attr("title",t.LastPageTooltip).attr("data-role","page-last"),$('<button type="button" class="btn btn-default btn-sm">'+(e.icons.refresh||t.Refresh)+"</button>").attr("title",t.Refresh).attr("data-role","page-refresh"),$('<select data-role="page-size" class="form-control input-sm" width="60"></select>')]),void 0===e.pager.rightControls&&(e.pager.rightControls=[$("<div>"+t.DisplayingRecords+"</div>"),$('<div data-role="record-first">0</div>'),$("<div>-</div>"),$('<div data-role="record-last">0</div>'),$("<div>"+t.Of+"</div>"),$('<div data-role="record-total">0</div>')])},localizationBootstrap4:function(e){var t=gj.grid.messages[e.locale];void 0===e.pager.leftControls&&(e.pager.leftControls=[$('<button class="btn btn-default btn-sm gj-cursor-pointer">'+(e.icons.first||t.First)+"</button>").attr("title",t.FirstPageTooltip).attr("data-role","page-first"),$('<button class="btn btn-default btn-sm gj-cursor-pointer">'+(e.icons.previous||t.Previous)+"</button>").attr("title",t.PreviousPageTooltip).attr("data-role","page-previous"),$("<div>"+t.Page+"</div>"),$('<div class="input-group"><input data-role="page-number" class="form-control form-control-sm" type="text" value="0"></div>'),$("<div>"+t.Of+"</div>"),$('<div data-role="page-label-last">0</div>'),$('<button class="btn btn-default btn-sm gj-cursor-pointer">'+(e.icons.next||t.Next)+"</button>").attr("title",t.NextPageTooltip).attr("data-role","page-next"),$('<button class="btn btn-default btn-sm gj-cursor-pointer">'+(e.icons.last||t.Last)+"</button>").attr("title",t.LastPageTooltip).attr("data-role","page-last"),$('<button class="btn btn-default btn-sm gj-cursor-pointer">'+(e.icons.refresh||t.Refresh)+"</button>").attr("title",t.Refresh).attr("data-role","page-refresh"),$('<select data-role="page-size" class="form-control input-sm" width="60"></select>')]),void 0===e.pager.rightControls&&(e.pager.rightControls=[$("<div>"+t.DisplayingRecords+"&nbsp;</div>"),$('<div data-role="record-first">0</div>'),$("<div>-</div>"),$('<div data-role="record-last">0</div>'),$("<div>"+t.Of+"</div>"),$('<div data-role="record-total">0</div>')])},localizationMaterialDesign:function(e){var t=gj.grid.messages[e.locale];void 0===e.pager.leftControls&&(e.pager.leftControls=[]),void 0===e.pager.rightControls&&(e.pager.rightControls=[$('<span class="">'+t.RowsPerPage+"</span>"),$('<select data-role="page-size" class="gj-grid-md-limit-select" width="52"></select></div>'),$('<span class="gj-md-spacer-32">&nbsp;</span>'),$('<span data-role="record-first" class="">0</span>'),$('<span class="">-</span>'),$('<span data-role="record-last" class="">0</span>'),$('<span class="gj-grid-mdl-pager-label">'+t.Of+"</span>"),$('<span data-role="record-total" class="">0</span>'),$('<span class="gj-md-spacer-32">&nbsp;</span>'),$('<button class="gj-button-md">'+(e.icons.previous||t.Previous)+"</button>").attr("title",t.PreviousPageTooltip).attr("data-role","page-previous").addClass(e.icons.first?"gj-button-md-icon":""),$('<span class="gj-md-spacer-24">&nbsp;</span>'),$('<button class="gj-button-md">'+(e.icons.next||t.Next)+"</button>").attr("title",t.NextPageTooltip).attr("data-role","page-next").addClass(e.icons.first?"gj-button-md-icon":"")])},initPagerControl:function(e,t){var n=t.data();switch(e.data("role")){case"page-size":n.pager.sizes&&0<n.pager.sizes.length?(e.show(),$.each(n.pager.sizes,function(){e.append($("<option/>").attr("value",this.toString()).text(this.toString()))}),e.change(function(){var e=parseInt(this.value,10);n.params[n.paramNames.limit]=e,gj.grid.plugins.pagination.private.changePage(t,1),gj.grid.plugins.pagination.events.pageSizeChange(t,e)}),e.val(n.params[n.paramNames.limit]),gj.dropdown&&e.dropdown({uiLibrary:n.uiLibrary,iconsLibrary:n.iconsLibrary,fontSize:e.css("font-size"),style:{presenter:"btn btn-default btn-sm"}})):e.hide();break;case"page-refresh":e.on("click",function(){t.reload()})}},reloadPager:function(e,t){var n,i,r,o,a,s,l,d;if(s=e.data(),s.pager){for(n=0===t?0:parseInt(s.params[s.paramNames.page],10),i=parseInt(s.params[s.paramNames.limit],10),r=Math.ceil(t/i),o=0===n?0:i*(n-1)+1,a=o+i>t?t:o+i-1,l=e.find("TFOOT [data-role]"),d=0;d<l.length;d++)gj.grid.plugins.pagination.private.reloadPagerControl($(l[d]),e,n,r,o,a,t);gj.grid.plugins.pagination.private.updatePagerColSpan(e)}},reloadPagerControl:function(e,t,n,i,r,o,a){var s;switch(e.data("role")){case"page-first":gj.grid.plugins.pagination.private.assignPageHandler(t,e,1,n<2);break;case"page-previous":gj.grid.plugins.pagination.private.assignPageHandler(t,e,n-1,n<2);break;case"page-number":e.val(n).off("change").on("change",gj.grid.plugins.pagination.private.createChangePageHandler(t,n));break;case"page-label-last":e.text(i);break;case"page-next":gj.grid.plugins.pagination.private.assignPageHandler(t,e,n+1,i===n);break;case"page-last":gj.grid.plugins.pagination.private.assignPageHandler(t,e,i,i===n);break;case"page-button-one":s=1===n?1:n==i?n-2:n-1,gj.grid.plugins.pagination.private.assignButtonHandler(t,e,n,s,i);break;case"page-button-two":s=1===n?2:n==i?i-1:n,gj.grid.plugins.pagination.private.assignButtonHandler(t,e,n,s,i);break;case"page-button-three":s=1===n?n+2:n==i?n:n+1,gj.grid.plugins.pagination.private.assignButtonHandler(t,e,n,s,i);break;case"record-first":e.text(r);break;case"record-last":e.text(o);break;case"record-total":e.text(a)}},assignPageHandler:function(e,t,n,i){var r=e.data().style.pager;i?t.addClass(r.stateDisabled).prop("disabled",!0).off("click"):t.removeClass(r.stateDisabled).prop("disabled",!1).off("click").on("click",function(){gj.grid.plugins.pagination.private.changePage(e,n)})},assignButtonHandler:function(e,t,n,i,r){var o=e.data().style.pager;i<1||i>r?t.hide():(t.show().off("click").text(i),i===n?t.addClass(o.activeButton):t.removeClass(o.activeButton).on("click",function(){gj.grid.plugins.pagination.private.changePage(e,i)}))},createChangePageHandler:function(e,t){return function(){var t=(e.data(),parseInt(this.value,10));gj.grid.plugins.pagination.private.changePage(e,t)}},changePage:function(e,t){var n=e.data();!1===gj.grid.plugins.pagination.events.pageChanging(e,t)||isNaN(t)||(e.find('TFOOT [data-role="page-number"]').val(t),n.params[n.paramNames.page]=t),e.reload()},updatePagerColSpan:function(e){var t=e.find('tfoot > tr[data-role="pager"] > th');t&&t.length&&t.attr("colspan",gj.grid.methods.countVisibleColumns(e))},isLastRecordVisible:function(e){var t=!0,n=e.data(),i=parseInt(n.params[n.paramNames.limit],10),r=parseInt(n.params[n.paramNames.page],10),o=e.count();return i&&r&&(t=(r-1)*i+o===n.totalRecords),t}},public:{getAll:function(e){var t,n,i,r=this.data();return $.isArray(r.dataSource)?e?r.dataSource:r.params[r.paramNames.limit]&&r.params[r.paramNames.page]?(t=parseInt(r.params[r.paramNames.limit],10),n=parseInt(r.params[r.paramNames.page],10),i=(n-1)*t,r.records.slice(i,i+t)):r.records:r.records}},events:{/**
         * Triggered when the page size is changed.
         *
         * @event pageSizeChange
         * @param {object} e - event data
         * @param {number} newSize - The new page size
         * @example sample <!-- bootstrap, grid, grid.pagination -->
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'bootstrap',
         *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         *     grid.on('pageSizeChange', function (e, newSize) {
         *         alert('The new page size is ' + newSize + '.');
         *     });
         * </script>
         */
pageSizeChange:function(e,t){e.triggerHandler("pageSizeChange",[t])},/**
         * Triggered before the change of the page.
         *
         * @event pageChanging
         * @param {object} e - event data
         * @param {number} newPage - The new page
         * @example sample <!-- bootstrap4, fontawesome, dropdown, grid, grid.pagination -->
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         *     grid.on('pageChanging', function (e, newPage) {
         *         if (isNaN(newPage)) {
         *             alert('Invalid page number');
         *             return false;
         *         } else {
         *             alert(newPage + ' is valid page number.');
         *         }
         *     });
         * </script>
         */
pageChanging:function(e,t){e.triggerHandler("pageChanging",[t])}},configure:function(e,t,n){$.extend(!0,e,gj.grid.plugins.pagination.public);e.data();n.pager&&(gj.grid.methods.isLastRecordVisible=gj.grid.plugins.pagination.private.isLastRecordVisible,e.on("initialized",function(){gj.grid.plugins.pagination.private.init(e)}),e.on("dataBound",function(t,n,i){gj.grid.plugins.pagination.private.reloadPager(e,i)}),e.on("columnShow",function(){gj.grid.plugins.pagination.private.updatePagerColSpan(e)}),e.on("columnHide",function(){gj.grid.plugins.pagination.private.updatePagerColSpan(e)}))}},/** 
 * @widget Grid 
 * @plugin Responsive Design
 */
gj.grid.plugins.responsiveDesign={config:{base:{/** The interval in milliseconds for checking if the grid is resizing.
             * This setting is in use only if the resizeMonitoring setting is set to true.
             * @type number
             * @default 500
             * @example sample <!-- grid, grid.responsiveDesign -->
             * <p>Change browser window size in order to fire resize event.</p>
             * <table id="grid"></table>
             * <script>
             *     var grid = $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         responsive: true,
             *         resizeCheckInterval: 2000, //check if the grid is resized on each 2 second
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             *     grid.on('resize', function () {
             *         alert('resize is fired.');
             *     });
             * </script>
             */
resizeCheckInterval:500,/** This setting enables responsive behaviour of the grid where some column are invisible when there is not enough space on the screen for them.
             * The visibility of the columns in this mode is driven by the column minWidth and priority settings.
             * The columns without priority setting are always visible and can't hide in small screen resolutions.
             * @type boolean
             * @default false
             * @example sample <!-- grid, grid.responsiveDesign -->
             * <p>Resize browser window in order to see his responsive behaviour.</p>
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         responsive: true,
             *         columns: [
             *             { field: 'Name' },
             *             { field: 'PlaceOfBirth', minWidth: 340, priority: 1 },
             *             { field: 'DateOfBirth', minWidth: 360, priority: 2, type: 'date' }
             *         ]
             *     });
             * </script>
             */
responsive:!1,/** Automatically adds hidden columns to the details section of the row.
             * This setting works only if the responsive setting is set to true and the detailTemplate is set.
             * You need to set priority and minWidth on the colums, that needs to be hidden in smaller screens.
             * @type boolean
             * @default false
             * @example Remote.Data.Source <!-- bootstrap, grid, grid.expandCollapseRows, grid.responsiveDesign -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         detailTemplate: '<div class="row"></div>',
             *         responsive: true,
             *         showHiddenColumnsAsDetails: true,
             *         uiLibrary: 'bootstrap',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name', minWidth: 320, priority: 1 },
             *             { field: 'PlaceOfBirth', minWidth: 320, priority: 2 }
             *         ]
             *     });
             * </script>
             * @example Local.Data.Source <!-- bootstrap, grid, grid.expandCollapseRows, grid.responsiveDesign -->
             * <table id="grid"></table>
             * <script>             
             *     var data = [
             *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
             *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
             *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
             *     ];
             *     $('#grid').grid({
             *         dataSource: data,
             *         detailTemplate: '<div class="row"></div>',
             *         responsive: true,
             *         showHiddenColumnsAsDetails: true,
             *         uiLibrary: 'bootstrap',
             *         columns: [
             *             { field: 'ID', width: 34 },
             *             { field: 'Name', minWidth: 320, priority: 1 },
             *             { field: 'PlaceOfBirth', minWidth: 320, priority: 2 }
             *         ],
             *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
             *     });
             * </script>
             */
showHiddenColumnsAsDetails:!1,defaultColumn:{/** The priority of the column compared to other columns in the grid.
                 * The columns are hiding based on the priorities.
                 * This setting is working only when the responsive setting is set to true.
                 * @alias column.priority
                 * @type number
                 * @default undefined
                 * @example sample <!-- grid, grid.responsiveDesign -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         responsive: true,
                 *         columns: [
                 *             { field: 'Name' },
                 *             { field: 'PlaceOfBirth', priority: 1 },
                 *             { field: 'DateOfBirth', priority: 2, type: 'date' }
                 *         ]
                 *     });
                 * </script>
                 */
priority:void 0,/** The minimum width of the column.
                 * The column is getting invisible when there is not enough space in the grid for this minimum width.
                 * This setting is working only when the responsive setting is set to true and the column priority setting is set.
                 * @alias column.minWidth
                 * @type number
                 * @default 250
                 * @example sample <!-- grid, grid.responsiveDesign -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         responsive: true,
                 *         columns: [
                 *             { field: 'Name' },
                 *             { field: 'PlaceOfBirth', minWidth: 240, priority: 1 },
                 *             { field: 'DateOfBirth', minWidth: 260, priority: 2, type: 'date' }
                 *         ]
                 *     });
                 * </script>
                 */
minWidth:250},style:{rowDetailItem:""}},bootstrap:{style:{rowDetailItem:"col-lg-4"}}},private:{orderColumns:function(e){var t=[];if(e.columns&&e.columns.length){for(i=0;i<e.columns.length;i++)t.push({position:i,field:e.columns[i].field,minWidth:e.columns[i].width||e.columns[i].minWidth||e.defaultColumn.minWidth,priority:e.columns[i].priority||0});t.sort(function(e,t){var n=0;return e.priority<t.priority?n=-1:e.priority>t.priority&&(n=1),n})}return t},updateDetails:function(e){var t,n,i,r,o,a,s,l,d;for(t=e.find('tbody > tr[data-role="row"]'),n=e.data(),i=0;i<t.length;i++){for(o=$(t[i]),a=o.data("details"),r=0;r<n.columns.length;r++)l=n.columns[r],s=a&&a.find('div[data-id="'+l.field+'"]'),n.columns[r].hidden?(d="<b>"+(l.title||l.field)+"</b>: {"+l.field+"}",s&&s.length?s.empty().html(d):(s=$('<div data-id="'+l.field+'"/>').html(d),s.addClass(n.style.rowDetailItem),a&&a.length||(a=$('<div class="row"/>')),a.append(s))):s&&s.length&&s.remove();e.updateDetails(o)}}},public:{oldWidth:void 0,resizeCheckIntervalId:void 0,/**
         * Make the grid responsive based on the available space.
         * Show column if the space for the grid is expanding and hide columns when the space for the grid is decreasing.
         * @method
         * @return grid object
         * @example sample <!-- grid -->
         * <button onclick="grid.makeResponsive()" class="gj-button-md">Make Responsive</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         responsive: false,
         *         columns: [
         *             { field: 'ID', width: 56 },
         *             { field: 'Name', minWidth: 320, priority: 1 },
         *             { field: 'PlaceOfBirth', minWidth: 320, priority: 2 }
         *         ]
         *     });
         * </script>
         */
makeResponsive:function(){var e,t,n=0,i=this.data(),r=gj.grid.plugins.responsiveDesign.private.orderColumns(i);
//calculate extra width
for(e=0;e<r.length;e++)t=this.find("thead>tr>th:eq("+r[e].position+")"),t.is(":visible")&&r[e].minWidth<t.width()&&(n+=t.width()-r[e].minWidth);
//show columns
if(n)for(e=0;e<r.length;e++)t=this.find("thead>tr>th:eq("+r[e].position+")"),!t.is(":visible")&&r[e].minWidth<=n&&(this.showColumn(r[e].field),n-=t.width());
//hide columns
for(e=r.length-1;e>=0;e--)t=this.find("thead>tr>th:eq("+r[e].position+")"),t.is(":visible")&&r[e].priority&&r[e].minWidth>t.outerWidth()&&this.hideColumn(r[e].field);return this}},events:{/**
         * Event fires when the grid width is changed. The "responsive" configuration setting should be set to true in order this event to fire.
         *
         * @event resize
         * @param {object} e - event data
         * @param {number} newWidth - The new width
         * @param {number} oldWidth - The old width
         * @example sample <!-- grid, grid.responsiveDesign -->
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         responsive: true,
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         *     grid.on('resize', function (e, newWidth, oldWidth) {
         *         alert('resize is fired.');
         *     });
         * </script>
         */
resize:function(e,t,n){e.triggerHandler("resize",[t,n])}},configure:function(e,t,n){$.extend(!0,e,gj.grid.plugins.responsiveDesign.public),t.responsive&&(e.on("initialized",function(){e.makeResponsive(),e.oldWidth=e.width(),e.resizeCheckIntervalId=setInterval(function(){var t=e.width();t!==e.oldWidth&&gj.grid.plugins.responsiveDesign.events.resize(e,t,e.oldWidth),e.oldWidth=t},t.resizeCheckInterval)}),e.on("destroy",function(){e.resizeCheckIntervalId&&clearInterval(e.resizeCheckIntervalId)}),e.on("resize",function(){e.makeResponsive()})),t.showHiddenColumnsAsDetails&&gj.grid.plugins.expandCollapseRows&&(e.on("dataBound",function(){gj.grid.plugins.responsiveDesign.private.updateDetails(e)}),e.on("columnHide",function(){gj.grid.plugins.responsiveDesign.private.updateDetails(e)}),e.on("columnShow",function(){gj.grid.plugins.responsiveDesign.private.updateDetails(e)}),e.on("rowDataBound",function(){gj.grid.plugins.responsiveDesign.private.updateDetails(e)}))}},/** 
 * @widget Grid 
 * @plugin Toolbar
 */
gj.grid.plugins.toolbar={config:{base:{/** Template for the content in the toolbar. Appears in a separate row on top of the grid.
              * @type string
              * @default undefined
              * @example sample <!-- bootstrap, grid, grid.toolbar, grid.pagination -->
              * <table id="grid"></table>
              * <script>
              *     var grid = $('#grid').grid({
              *         dataSource: '/Players/Get',
              *         uiLibrary: 'bootstrap',
              *         toolbarTemplate: '<div class="row"><div class="col-xs-8" style="line-height:34px"><span data-role="title">Grid Title</span></div><div class="col-xs-4 text-right"><button onclick="grid.reload()" class="btn btn-default">click here to refresh</button></div></div>',
              *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
              *         pager: { limit: 5 }
              *     });
              * </script>
              */
toolbarTemplate:void 0,/** The title of the grid. Appears in a separate row on top of the grid.
              * @type string
              * @default undefined
              * @example Material.Design <!-- grid, grid.toolbar -->
              * <table id="grid"></table>
              * <script>
              *     $('#grid').grid({
              *         dataSource: '/Players/Get',
              *         title: 'Players',
              *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
              *     });
              * </script>
              * @example Bootstrap.3 <!-- bootstrap, grid, grid.toolbar -->
              * <table id="grid"></table>
              * <script>
              *     $('#grid').grid({
              *         dataSource: '/Players/Get',
              *         uiLibrary: 'bootstrap',
              *         title: 'Players',
              *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
              *     });
              * </script>
              * @example Bootstrap.4 <!-- bootstrap4, grid, grid.toolbar -->
              * <table id="grid"></table>
              * <script>
              *     $('#grid').grid({
              *         dataSource: '/Players/Get',
              *         uiLibrary: 'bootstrap4',
              *         title: 'Players',
              *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
              *     });
              * </script>
              */
title:void 0,style:{toolbar:"gj-grid-md-toolbar"}},bootstrap:{style:{toolbar:"gj-grid-bootstrap-toolbar"}},bootstrap4:{style:{toolbar:"gj-grid-bootstrap-4-toolbar"}}},private:{init:function(e){var t,n,i;t=e.data(),n=e.prev('div[data-role="toolbar"]'),(void 0!==t.toolbarTemplate||void 0!==t.title||n.length>0)&&(0===n.length&&(n=$('<div data-role="toolbar"></div>'),e.before(n)),n.addClass(t.style.toolbar),0===n.children().length&&t.toolbarTemplate&&n.append(t.toolbarTemplate),i=n.find('[data-role="title"]'),0===i.length&&(i=$('<div data-role="title"/>'),n.prepend(i)),t.title&&i.text(t.title),t.minWidth&&n.css("min-width",t.minWidth))}},public:{/**
         * Get or set grid title.
         * @additionalinfo When you pass value in the text parameter this value with be in use for the new title of the grid and the method will return grid object.<br/>
         * When you don't pass value in the text parameter, then the method will return the text of the current grid title.<br/>
         * You can use this method in a combination with toolbarTemplate only if the title is wrapped in element with data-role attribute that equals to "title".<br/>
         * @method
         * @param {object} text - The text of the new grid title.
         * @return string or grid object
         * @example text <!-- grid, grid.toolbar -->
         * <button onclick="grid.title('New Title')" class="gj-button-md">Set New Title</button>
         * <button onclick="alert(grid.title())" class="gj-button-md">Get Title</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         title: 'Initial Grid Title',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         * @example html.template <!-- grid, grid.toolbar -->
         * <button onclick="grid.title('New Title')" class="gj-button-md">Set New Title</button>
         * <button onclick="alert(grid.title())" class="gj-button-md">Get Title</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         toolbarTemplate: '<div data-role="title">Initial Grid Title</div>',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
         *     });
         * </script>
         */
title:function(e){var t=this.parent().find('div[data-role="toolbar"] [data-role="title"]');return void 0!==e?(t.text(e),this):t.text()}},configure:function(e){$.extend(!0,e,gj.grid.plugins.toolbar.public),e.on("initialized",function(){gj.grid.plugins.toolbar.private.init(e)}),e.on("destroying",function(){e.prev('[data-role="toolbar"]').remove()})}},/** 
 * @widget Grid 
 * @plugin Resizable Columns
 */
gj.grid.plugins.resizableColumns={config:{base:{/** If set to true, users can resize columns by dragging the edges (resize handles) of their header cells.
             * @type boolean
             * @default false
             * @example Material.Design <!-- grid, draggable -->
             * <table id="grid"></table>
             * <script>
             *     var grid = $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         resizableColumns: true,
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Bootstrap <!-- bootstrap, grid, draggable -->
             * <table id="grid"></table>
             * <script>
             *     var grid = $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         resizableColumns: true,
             *         uiLibrary: 'bootstrap',
             *         columns: [ { field: 'ID', width: 34 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Bootstrap.4 <!-- bootstrap4, grid, draggable -->
             * <table id="grid"></table>
             * <script>
             *     var grid = $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         resizableColumns: true,
             *         uiLibrary: 'bootstrap4',
             *         columns: [ { field: 'ID', width: 42 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Bootstrap.4.FixedHeader <!-- bootstrap4, grid, draggable -->
             * <table id="grid" width="900"></table>
             * <script>
             *     var grid = $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         resizableColumns: true,
             *         fixedHeader: true,
             *         uiLibrary: 'bootstrap4',
             *         columns: [ { field: 'ID', width: 42 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             */
resizableColumns:!1}},private:{init:function(e,t){var n,i,r,o,a,s;if(n=e.find('thead tr[data-role="caption"] th'),n.length){for(r=0;r<n.length-1;r++)i=$(n[r]),o=$('<div class="gj-grid-column-resizer-wrapper" />'),s=parseInt(i.css("padding-right"),10)+3,a=$('<span class="gj-grid-column-resizer" />').css("margin-right","-"+s+"px"),a.draggable({start:function(){e.addClass("gj-unselectable"),e.addClass("gj-grid-resize-cursor")},stop:function(){e.removeClass("gj-unselectable"),e.removeClass("gj-grid-resize-cursor"),this.style.removeProperty("top"),this.style.removeProperty("left"),this.style.removeProperty("position")},drag:gj.grid.plugins.resizableColumns.private.createResizeHandle(e,i,t.columns[r])}),i.append(o.append(a));for(r=0;r<n.length;r++)i=$(n[r]),i.attr("width")||i.attr("width",i.outerWidth())}},createResizeHandle:function(e,t,n){var i=e.data();return function(r,o){var a,s,l,d,c,u,p=parseInt(t.attr("width"),10),h=gj.core.position(this),g={top:o.top-h.top,left:o.left-h.left};if(p||(p=t.outerWidth()),g.left&&(c=p+g.left,n.width=c,t.attr("width",c),s=t[0].cellIndex,d=t[0].parentElement.children[s+1],u=parseInt($(d).attr("width"),10)-g.left,d.setAttribute("width",u),i.resizableColumns))for(l=e[0].tBodies[0].children,a=0;a<l.length;a++)l[a].cells[s].setAttribute("width",c),d=l[a].cells[s+1],d.setAttribute("width",u)}}},public:{},configure:function(e,t,n){$.extend(!0,e,gj.grid.plugins.resizableColumns.public),t.resizableColumns&&gj.draggable&&e.on("initialized",function(){gj.grid.plugins.resizableColumns.private.init(e,t)})}},/** 
 * @widget Grid 
 * @plugin Row Reorder
 */
gj.grid.plugins.rowReorder={config:{base:{/** If set to true, enable row reordering with drag and drop.
             * @type boolean
             * @default false
             * @example Material.Design <!-- grid, grid.rowReorder, draggable, droppable -->
             * <p>Drag and Drop rows in order to reorder them.</p>
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         rowReorder: true,
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Bootstrap.3 <!-- bootstrap, grid, grid.rowReorder, draggable, droppable -->
             * <p>Drag and Drop rows in order to reorder them.</p>
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         rowReorder: true,
             *         uiLibrary: 'bootstrap',
             *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Bootstrap.4 <!-- bootstrap4, grid, grid.rowReorder, draggable, droppable -->
             * <p>Drag and Drop rows in order to reorder them.</p>
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         rowReorder: true,
             *         uiLibrary: 'bootstrap4',
             *         columns: [ { field: 'ID', width: 42 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             */
rowReorder:!1,/** If set, enable row reordering only when you try to drag cell from the configured column.
             * Accept only field names of columns.
             * @type string
             * @default undefined
             * @example sample <!-- grid, grid.rowReorder, draggable, droppable -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         rowReorder: true,
             *         rowReorderColumn: 'ID',
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             */
rowReorderColumn:void 0,/** If set, update the value in the field for all records. Accept only field names of columns.
             * @type string
             * @default undefined
             * @example Visible.OrderNumber <!-- grid, grid.rowReorder, draggable, droppable -->
             * <table id="grid"></table>
             * <script>
             *     var data = [
             *         { 'ID': 1, 'OrderNumber': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
             *         { 'ID': 2, 'OrderNumber': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
             *         { 'ID': 3, 'OrderNumber': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
             *     ];
             *     $('#grid').grid({
             *         dataSource: data,
             *         rowReorder: true,
             *         orderNumberField: 'OrderNumber',
             *         columns: [ { field: 'ID', width: 56 }, { field: 'OrderNumber', width:120 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Hidden.OrderNumber <!-- grid, grid.rowReorder, draggable, droppable -->
             * <button onclick="alert(JSON.stringify(grid.getAll()))" class="gj-button-md">Show Data</button><br/><br/>
             * <table id="grid"></table>
             * <script>
             *     var data = [
             *         { 'ID': 1, 'OrderNumber': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
             *         { 'ID': 2, 'OrderNumber': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
             *         { 'ID': 3, 'OrderNumber': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
             *     ],
             *     grid = $('#grid').grid({
             *         dataSource: data,
             *         rowReorder: true,
             *         orderNumberField: 'OrderNumber',
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             */
orderNumberField:void 0,style:{targetRowIndicatorTop:"gj-grid-row-reorder-indicator-top",targetRowIndicatorBottom:"gj-grid-row-reorder-indicator-bottom"}}},private:{init:function(e){var t,n,i,r=e.find('tbody tr[data-role="row"]');for(e.data("rowReorderColumn")&&(n=gj.grid.methods.getColumnPosition(e.data("columns"),e.data("rowReorderColumn"))),t=0;t<r.length;t++)i=$(r[t]),void 0!==n?i.find("td:eq("+n+")").on("mousedown",gj.grid.plugins.rowReorder.private.createRowMouseDownHandler(e,i)):i.on("mousedown",gj.grid.plugins.rowReorder.private.createRowMouseDownHandler(e,i))},createRowMouseDownHandler:function(e,t){return function(n){var i,r,o=e.clone(),a=e.data("columns");for(e.addClass("gj-unselectable"),$("body").append(o),o.attr("data-role","draggable-clone").css("cursor","move"),o.children("thead").remove().children("tfoot").remove(),o.find('tbody tr:not([data-position="'+t.data("position")+'"])').remove(),r=o.find("tbody tr td"),i=0;i<r.length;i++)a[i].width&&r[i].setAttribute("width",a[i].width);o.draggable({stop:gj.grid.plugins.rowReorder.private.createDragStopHandler(e,t)}),o.css({position:"absolute",top:t.offset().top,left:t.offset().left,width:t.width(),zIndex:1}),"true"===t.attr("data-droppable")&&t.droppable("destroy"),t.siblings('tr[data-role="row"]').each(function(){var e=$(this);"true"===e.attr("data-droppable")&&e.droppable("destroy"),e.droppable({over:gj.grid.plugins.rowReorder.private.createDroppableOverHandler(t),out:gj.grid.plugins.rowReorder.private.droppableOut})}),o.trigger("mousedown")}},createDragStopHandler:function(e,t){return function(n,i){$('table[data-role="draggable-clone"]').draggable("destroy").remove(),e.removeClass("gj-unselectable"),t.siblings('tr[data-role="row"]').each(function(){var n,r,o,a,s,l=$(this),d=l.data("position"),c=t.data("position"),u=e.data();if(l.droppable("isOver",i)){for(d<c?l.before(t):l.after(t),u.records.splice(d-1,0,u.records.splice(c-1,1)[0]),n=l.parent().find('tr[data-role="row"]'),o=0;o<n.length;o++)$(n[o]).attr("data-position",o+1);if(u.orderNumberField){for(o=0;o<u.records.length;o++)u.records[o][u.orderNumberField]=o+1;for(o=0;o<n.length;o++)r=$(n[o]),s=gj.grid.methods.getId(r,u.primaryKey,r.attr("data-position")),a=gj.grid.methods.getByPosition(e,r.attr("data-position")),e.setCellContent(s,u.orderNumberField,a[u.orderNumberField])}}l.removeClass("gj-grid-top-border"),l.removeClass("gj-grid-bottom-border"),l.droppable("destroy")})}},createDroppableOverHandler:function(e){return function(t){var n=$(this);n.data("position")<e.data("position")?n.addClass("gj-grid-top-border"):n.addClass("gj-grid-bottom-border")}},droppableOut:function(){$(this).removeClass("gj-grid-top-border"),$(this).removeClass("gj-grid-bottom-border")}},public:{},configure:function(e,t,n){$.extend(!0,e,gj.grid.plugins.rowReorder.public),t.rowReorder&&gj.draggable&&gj.droppable&&e.on("dataBound",function(){gj.grid.plugins.rowReorder.private.init(e)})}},/** 
 * @widget Grid 
 * @plugin Export
 */
gj.grid.plugins.export={config:{base:{}},public:{/**
         * Get grid data in Comma Separated Values (CSV) format.
         * @method
         * @param {boolean} includeAllRecords - include records that are not visible when you are using local dataSource.
         * @return string
         * @example Local.Data <!-- grid, dropdown -->
         * <button onclick="alert(grid.getCSV(true))" class="gj-button-md">Get All</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var data, grid;
         *     data = [
         *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     grid = $('#grid').grid({
         *         dataSource: data,
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         * </script>
         * @example Remote.Data <!-- grid, dropdown -->
         * <button onclick="alert(grid.getCSV())" class="gj-button-md">Get CSV</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 5 }
         *     });
         * </script>
         */
getCSV:function(e){var t,n,i="",r="",o=this.data().columns,a=this.getAll(e);if(a.length){for(t=0;t<o.length;t++)!0!==o[t].hidden&&(i+='"'+(o[t].title||o[t].field)+'",');for(r+=i.slice(0,i.length-1)+"\r\n",t=0;t<a.length;t++){for(i="",n=0;n<o.length;n++)!0!==o[n].hidden&&(i+='"'+a[t][o[n].field]+'",');r+=i.slice(0,i.length-1)+"\r\n"}}return r},/**
         * Download grid data in Comma Separated Values (CSV) format.
         * @method
         * @param {string} filename - name of the generated file.
         * @param {boolean} includeAllRecords - include records that are not visible when you are using local dataSource.
         * @return grid object
         * @example Local.Data <!-- grid, dropdown -->
         * <button onclick="grid.downloadCSV()" class="gj-button-md">Download Only First Page</button>
         * <button onclick="grid.downloadCSV('myfilename.csv', true)" class="gj-button-md">Download All Data</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var data, grid;
         *     data = [
         *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
         *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
         *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
         *     ];
         *     grid = $('#grid').grid({
         *         dataSource: data,
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         * </script>
         * @example Remote.Data <!-- grid, dropdown -->
         * <button onclick="grid.downloadCSV('myfilename.csv')" class="gj-button-md">Download CSV</button>
         * <br/><br/>
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/Players/Get',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 5 }
         *     });
         * </script>
         */
downloadCSV:function(e,t){var n=document.createElement("a");return document.body.appendChild(n),n.download=e||"griddata.csv",n.href="data:text/csv;charset=utf-8,"+escape(this.getCSV(t)),n.click(),document.body.removeChild(n),this}},configure:function(e){$.extend(!0,e,gj.grid.plugins.export.public)}},/** 
 * @widget Grid 
 * @plugin Column Reorder
 */
gj.grid.plugins.columnReorder={config:{base:{/** If set to true, enable column reordering with drag and drop.
             * @type boolean
             * @default false
             * @example Material.Design <!-- grid, draggable, droppable -->
             * <p>Drag and Drop column headers in order to reorder the columns.</p>
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         columnReorder: true,
             *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Bootstrap <!-- bootstrap, grid, draggable, droppable -->
             * <p>Drag and Drop column headers in order to reorder the columns.</p>
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap',
             *         columnReorder: true,
             *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Bootstrap.4 <!-- bootstrap4, grid, draggable, droppable -->
             * <p>Drag and Drop column headers in order to reorder the columns.</p>
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         uiLibrary: 'bootstrap4',
             *         columnReorder: true,
             *         columns: [ { field: 'ID', width: 48 }, { field: 'Name', sortable: true }, { field: 'PlaceOfBirth', sortable: true } ]
             *     });
             * </script>
             */
columnReorder:!1,dragReady:!1,style:{targetRowIndicatorTop:"gj-grid-row-reorder-indicator-top",targetRowIndicatorBottom:"gj-grid-row-reorder-indicator-bottom"}}},private:{init:function(e){var t,n,i=e.find("thead tr th");for(t=0;t<i.length;t++)n=$(i[t]),n.on("mousedown",gj.grid.plugins.columnReorder.private.createMouseDownHandler(e,n)),n.on("mousemove",gj.grid.plugins.columnReorder.private.createMouseMoveHandler(e,n)),n.on("mouseup",gj.grid.plugins.columnReorder.private.createMouseUpHandler(e,n))},createMouseDownHandler:function(e){return function(t){e.timeout=setTimeout(function(){e.data("dragReady",!0)},100)}},createMouseUpHandler:function(e){return function(t){clearTimeout(e.timeout),e.data("dragReady",!1)}},createMouseMoveHandler:function(e,t){return function(n){var i,r;e.data("dragReady")&&(e.data("dragReady",!1),i=e.clone(),r=t.index(),e.addClass("gj-unselectable"),$("body").append(i),i.attr("data-role","draggable-clone").css("cursor","move"),i.find("thead tr th:eq("+r+")").siblings().remove(),i.find('tbody tr[data-role != "row"]').remove(),i.find("tbody tr td:nth-child("+(r+1)+")").siblings().remove(),i.find("tfoot").remove(),i.draggable({stop:gj.grid.plugins.columnReorder.private.createDragStopHandler(e,t)}),i.css({position:"absolute",top:t.offset().top,left:t.offset().left,width:t.width(),zIndex:1}),"true"===t.attr("data-droppable")&&t.droppable("destroy"),t.siblings("th").each(function(){var n=$(this);"true"===n.attr("data-droppable")&&n.droppable("destroy"),n.droppable({over:gj.grid.plugins.columnReorder.private.createDroppableOverHandler(e,t),out:gj.grid.plugins.columnReorder.private.droppableOut})}),i.trigger("mousedown"))}},createDragStopHandler:function(e,t){return function(n,i){$('table[data-role="draggable-clone"]').draggable("destroy").remove(),e.removeClass("gj-unselectable"),t.siblings("th").each(function(){var n=$(this),r=e.data(),o=gj.grid.methods.getColumnPosition(r.columns,n.data("field")),a=gj.grid.methods.getColumnPosition(r.columns,t.data("field"));n.removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"),n.closest("table").find('tbody tr[data-role="row"] td:nth-child('+(n.index()+1)+")").removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"),n.droppable("isOver",i)&&(o<a?n.before(t):n.after(t),gj.grid.plugins.columnReorder.private.moveRowCells(e,a,o),r.columns.splice(o,0,r.columns.splice(a,1)[0])),n.droppable("destroy")})}},moveRowCells:function(e,t,n){var i,r,o=e.find('tbody tr[data-role="row"]');for(i=0;i<o.length;i++)r=$(o[i]),n<t?r.find("td:eq("+n+")").before(r.find("td:eq("+t+")")):r.find("td:eq("+n+")").after(r.find("td:eq("+t+")"))},createDroppableOverHandler:function(e,t){return function(n){var i=$(this),r=e.data();gj.grid.methods.getColumnPosition(r.columns,i.data("field"))<gj.grid.methods.getColumnPosition(r.columns,t.data("field"))?(i.addClass("gj-grid-left-border"),e.find('tbody tr[data-role="row"] td:nth-child('+(i.index()+1)+")").addClass("gj-grid-left-border")):(i.addClass("gj-grid-right-border"),e.find('tbody tr[data-role="row"] td:nth-child('+(i.index()+1)+")").addClass("gj-grid-right-border"))}},droppableOut:function(){var e=$(this);e.removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"),e.closest("table").find('tbody tr[data-role="row"] td:nth-child('+(e.index()+1)+")").removeClass("gj-grid-left-border").removeClass("gj-grid-right-border")}},public:{},configure:function(e,t,n){$.extend(!0,e,gj.grid.plugins.columnReorder.public),t.columnReorder&&e.on("initialized",function(){gj.grid.plugins.columnReorder.private.init(e)})}},/**
 * @widget Grid
 * @plugin Header Filter
 */
gj.grid.plugins.headerFilter={config:{base:{defaultColumnSettings:{/** Indicates if the column is sortable. If set to false the header filter is hidden.
                 * @alias column.filterable
                 * @type boolean
                 * @default true
                 * @example Material.Design <!-- grid -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         headerFilter: true,
                 *         columns: [
                 *             { field: 'ID', width: 56, filterable: false },
                 *             { field: 'Name', filterable: true },
                 *             { field: 'PlaceOfBirth' }
                 *         ]
                 *     });
                 * </script>
                 * @example Bootstrap.3 <!-- bootstrap, grid -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         headerFilter: true,
                 *         uiLibrary: 'bootstrap',
                 *         columns: [
                 *             { field: 'ID', width: 56, filterable: false },
                 *             { field: 'Name', filterable: true },
                 *             { field: 'PlaceOfBirth' }
                 *         ]
                 *     });
                 * </script>
                 */
filterable:!0},/** If set to true, add filters for each column
             * @type boolean
             * @default object
             * @example Remote.DataSource <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/Players/Get',
             *         headerFilter: true,
             *         columns: [ { field: 'ID', width: 56, filterable: false }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
             *     });
             * </script>
             * @example Local.DataSource <!-- grid -->
             * <table id="grid"></table>
             * <script>
             *     var data = [
             *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
             *         { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
             *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' },
             *         { 'ID': 4, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany' },
             *         { 'ID': 5, 'Name': 'James Rodríguez', 'PlaceOfBirth': 'Cúcuta, Colombia' },
             *         { 'ID': 6, 'Name': 'Dimitar Berbatov', 'PlaceOfBirth': 'Blagoevgrad, Bulgaria' }
             *     ];
             *     $('#grid').grid({
             *         dataSource: data,
             *         headerFilter: true,
             *         columns: [ 
             *             { field: 'ID', width: 56, filterable: false }, 
             *             { field: 'Name' }, 
             *             { field: 'PlaceOfBirth' } 
             *         ],
             *         pager: { limit: 5 }
             *     });
             * </script>
             */
headerFilter:{/** Type of the header filter
                 * @alias headerFilter.type
                 * @type (onenterkeypress|onchange)
                 * @default 'onenterkeypress'
                 * @example OnEnterKeyPress <!-- grid -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         headerFilter: {
                 *             type: 'onenterkeypress'
                 *         },
                 *         columns: [ { field: 'ID', width: 56, filterable: false }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
                 *     });
                 * </script>
                 * @example OnChange <!-- grid -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         headerFilter: {
                 *             type: 'onchange'
                 *         },
                 *         columns: [ { field: 'ID', width: 56, filterable: false }, { field: 'Name' }, { field: 'PlaceOfBirth' } ]
                 *     });
                 * </script>
                 */
type:"onenterkeypress"}}},private:{init:function(e){var t,n,i,r=e.data(),o=$('<tr data-role="filter"/>');for(t=0;t<r.columns.length;t++)n=$("<th/>"),r.columns[t].filterable&&(i=$('<input data-field="'+r.columns[t].field+'" class="gj-width-full" />'),"onchange"===r.headerFilter.type?i.on("input propertychange",function(t){gj.grid.plugins.headerFilter.private.reload(e,$(this))}):(i.on("keypress",function(t){13==t.which&&gj.grid.plugins.headerFilter.private.reload(e,$(this))}),i.on("blur",function(t){gj.grid.plugins.headerFilter.private.reload(e,$(this))})),n.append(i)),r.columns[t].hidden&&n.hide(),o.append(n);e.children("thead").append(o)},reload:function(e,t){var n={};n[t.data("field")]=t.val(),e.reload(n)}},public:{},events:{},configure:function(e,t,n){$.extend(!0,e,gj.grid.plugins.headerFilter.public);e.data();n.headerFilter&&e.on("initialized",function(){gj.grid.plugins.headerFilter.private.init(e)})}},/** 
 * @widget Grid 
 * @plugin Grouping
 */
gj.grid.plugins.grouping={config:{base:{paramNames:{/** The name of the parameter that is going to send the name of the column for grouping.
                 * The grouping should be enabled in order this parameter to be in use.
                 * @alias paramNames.groupBy
                 * @type string
                 * @default "groupBy"
                 */
groupBy:"groupBy",/** The name of the parameter that is going to send the direction for grouping.
                 * The grouping should be enabled in order this parameter to be in use.
                 * @alias paramNames.groupByDirection
                 * @type string
                 * @default "groupByDirection"
                 */
groupByDirection:"groupByDirection"},grouping:{/** The name of the field that needs to be in use for grouping.
                  * @type string
                  * @alias grouping.groupBy
                  * @default undefined
                  * @example Local.Data <!-- grid -->
                  * <table id="grid"></table>
                  * <script>
                  *     var grid, data = [
                  *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria', CountryName: 'Bulgaria' },
                  *         { 'ID': 2, 'Name': 'Ronaldo Luís Nazário de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil', CountryName: 'Brazil' },
                  *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England', CountryName: 'England' },
                  *         { 'ID': 4, 'Name': 'Manuel Neuer', 'PlaceOfBirth': 'Gelsenkirchen, West Germany', CountryName: 'Germany' },
                  *         { 'ID': 5, 'Name': 'James Rodríguez', 'PlaceOfBirth': 'Cúcuta, Colombia', CountryName: 'Colombia' },
                  *         { 'ID': 6, 'Name': 'Dimitar Berbatov', 'PlaceOfBirth': 'Blagoevgrad, Bulgaria', CountryName: 'Bulgaria' }
                  *     ];
                  *     $('#grid').grid({
                  *         dataSource: data,
                  *         grouping: { groupBy: 'CountryName' },
                  *         columns: [ { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ]
                  *     });
                  * </script>
                  * @example Remote.Data <!-- grid -->
                  * <table id="grid"></table>
                  * <script>
                  *     $('#grid').grid({
                  *         dataSource: '/Players/Get',
                  *         grouping: { groupBy: 'CountryName' },
                  *         columns: [ { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ]
                  *     });
                  * </script>
                  * @example Bootstrap.3 <!-- bootstrap, grid -->
                  * <table id="grid"></table>
                  * <script>
                  *     $('#grid').grid({
                  *         dataSource: '/Players/Get',
                  *         uiLibrary: 'bootstrap',
                  *         grouping: { groupBy: 'CountryName' },
                  *         columns: [ { field: 'Name', sortable: true }, { field: 'DateOfBirth', type: 'date' } ]
                  *         detailTemplate: '<div><b>Place Of Birth:</b> {PlaceOfBirth}</div>'
                  *     });
                  * </script>
                  * @example Bootstrap.4 <!-- bootstrap4, fontawesome, grid -->
                  * <table id="grid"></table>
                  * <script>
                  *     $('#grid').grid({
                  *         dataSource: '/Players/Get',
                  *         uiLibrary: 'bootstrap4',
                  *         iconsLibrary: 'fontawesome',
                  *         grouping: { groupBy: 'CountryName' },
                  *         columns: [ { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ]
                  *     });
                  * </script>
                  */
groupBy:void 0,direction:"asc"},icons:{/** Expand row icon definition.
                 * @alias icons.expandGroup
                 * @type String
                 * @default '<i class="gj-icon plus" />'
                 * @example Right.Down.Icons <!-- materialicons, grid -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         primaryKey: 'ID',
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ],
                 *         grouping: { groupBy: 'CountryName' },
                 *         icons: {
                 *             expandGroup: '<i class="material-icons">keyboard_arrow_right</i>',
                 *             collapseGroup: '<i class="material-icons">keyboard_arrow_down</i>'
                 *         }
                 *     });
                 * </script>
                 */
expandGroup:'<i class="gj-icon plus" />',/** Collapse row icon definition.
                 * @alias icons.collapseGroup
                 * @type String
                 * @default '<i class="gj-icon minus" />'
                 * @example Right.Down.Icons <!-- materialicons, grid -->
                 * <table id="grid"></table>
                 * <script>
                 *     $('#grid').grid({
                 *         primaryKey: 'ID',
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ],
                 *         grouping: { groupBy: 'CountryName' },
                 *         icons: {
                 *             expandGroup: '<i class="material-icons">keyboard_arrow_right</i>',
                 *             collapseGroup: '<i class="material-icons">keyboard_arrow_down</i>'
                 *         }
                 *     });
                 * </script>
                 */
collapseGroup:'<i class="gj-icon minus" />'}},fontawesome:{icons:{expandGroup:'<i class="fa fa-plus" aria-hidden="true"></i>',collapseGroup:'<i class="fa fa-minus" aria-hidden="true"></i>'}},glyphicons:{icons:{expandGroup:'<span class="glyphicon glyphicon-plus" />',collapseGroup:'<span class="glyphicon glyphicon-minus" />'}}},private:{init:function(e){var t,n=e.data();t=void 0,e.on("rowDataBound",function(i,r,o,a){if(t!==a[n.grouping.groupBy]||1===r[0].rowIndex){var s=gj.grid.methods.countVisibleColumns(e)-1,l=$('<tr role="group" />'),d=$('<td class="gj-text-align-center gj-unselectable gj-cursor-pointer" />');d.append('<div data-role="display">'+n.icons.collapseGroup+"</div>"),d.on("click",gj.grid.plugins.grouping.private.createExpandCollapseHandler(n)),l.append(d),l.append('<td colspan="'+s+'"><div data-role="display">'+n.grouping.groupBy+": "+a[n.grouping.groupBy]+"</div></td>"),l.insertBefore(r),t=a[n.grouping.groupBy]}r.show()}),n.params[n.paramNames.groupBy]=n.grouping.groupBy,n.params[n.paramNames.groupByDirection]=n.grouping.direction},grouping:function(e,t){var n=e.data();t.sort(gj.grid.methods.createDefaultSorter(n.grouping.direction,n.grouping.groupBy))},createExpandCollapseHandler:function(e){return function(t){var n=$(this),i=gj.grid.plugins.grouping.private;"row"===n.closest("tr").next(":visible").data("role")?i.collapseGroup(e,n):i.expandGroup(e,n)}},collapseGroup:function(e,t){var n=t.children('div[data-role="display"]');t.closest("tr").nextUntil('[role="group"]').hide(),n.empty().append(e.icons.expandGroup)},expandGroup:function(e,t){var n=t.children('div[data-role="display"]');t.closest("tr").nextUntil('[role="group"]').show(),n.empty().append(e.icons.collapseGroup)}},public:{},configure:function(e){var t,n=e.data();$.extend(!0,e,gj.grid.plugins.grouping.public),n.grouping&&n.grouping.groupBy&&(t={title:"",width:n.defaultIconColumnWidth,align:"center",stopPropagation:!0,cssClass:"gj-cursor-pointer gj-unselectable"},n.columns=[t].concat(n.columns),e.on("initialized",function(){gj.grid.plugins.grouping.private.init(e)}),e.on("dataFiltered",function(t,n){gj.grid.plugins.grouping.private.grouping(e,n)}))}},gj.grid.messages["en-us"]={First:"First",Previous:"Previous",Next:"Next",Last:"Last",Page:"Page",FirstPageTooltip:"First Page",PreviousPageTooltip:"Previous Page",NextPageTooltip:"Next Page",LastPageTooltip:"Last Page",Refresh:"Refresh",Of:"of",DisplayingRecords:"Displaying records",RowsPerPage:"Rows per page:",Edit:"Edit",Delete:"Delete",Update:"Update",Cancel:"Cancel",NoRecordsFound:"No records found.",Loading:"Loading..."},/* global window alert jQuery gj */
/**
  * @widget Tree
  * @plugin Base
  */
gj.tree={plugins:{}},gj.tree.config={base:{params:{},/** When this setting is enabled the content of the tree will be loaded automatically after the creation of the tree.
         * @type boolean
         * @default true
         * @example disabled <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         autoLoad: false
         *     });
         *     tree.reload(); //call .reload() explicitly in order to load the data in the tree
         * </script>
         * @example enabled <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         autoLoad: true
         *     });
         * </script>
         */
autoLoad:!0,/** The type of the node selection.<br/>
         * If the type is set to multiple the user will be able to select more then one node in the tree.
         * @type (single|multiple)
         * @default single
         * @example Single.Selection <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         selectionType: 'single'
         *     });
         * </script>
         * @example Multiple.Selection <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         selectionType: 'multiple'
         *     });
         * </script>
         */
selectionType:"single",/** This setting enable cascade selection and unselection of children
         * @type boolean
         * @default false
         * @example Sample <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         cascadeSelection: true
         *     });
         * </script>
         */
cascadeSelection:!1,/** The data source of tree.
         * @additionalinfo If set to string, then the tree is going to use this string as a url for ajax requests to the server.<br />
         * If set to object, then the tree is going to use this object as settings for the <a href="http://api.jquery.com/jquery.ajax/" target="_new">jquery ajax</a> function.<br />
         * If set to array, then the tree is going to use the array as data for tree nodes.
         * @type (string|object|array)
         * @default undefined
         * @example Local.DataSource <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: [ { text: 'foo', children: [ { text: 'bar' } ] } ]
         *     });
         * </script>
         * @example Remote.DataSource <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get'
         *     });
         * </script>
         */
dataSource:void 0,/** Primary key field name.
         * @type string
         * @default undefined
         * @example defined <!-- tree -->
         * <p>Select a node to see the key.</p>
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         primaryKey: 'id',
         *         dataSource: [ { id: 101, text: 'foo', children: [ { id: 202, text: 'bar' } ] } ],
         *         select: function (e, node, id) {
         *             alert('Your key is ' + id);
         *         }
         *     });
         * </script>
         * @example undefined <!-- tree -->
         * <p>Select a node to see the key.</p>
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: [ { id: 101, text: 'foo', children: [ { id: 202, text: 'bar' } ] } ],
         *         select: function (e, node, id) {
         *             alert('Your key is ' + id);
         *         }
         *     });
         * </script>
         */
primaryKey:void 0,/** Text field name.
         * @type string
         * @default 'text'
         * @example sample <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         textField: 'newTextName',
         *         dataSource: [ { newTextName: 'foo', children: [ { newTextName: 'bar' } ] } ]
         *     });
         * </script>
         */
textField:"text",/** Children field name.
         * @type string
         * @default 'children'
         * @example Custom.FieldName <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         childrenField: 'myChildrenNode',
         *         dataSource: [ { text: 'foo', myChildrenNode: [ { text: 'bar' } ] } ]
         *     });
         * </script>
         */
childrenField:"children",/** The name of the field that indicates if the node has children. Shows expand icon if the node has children.
         * @type string
         * @default 'hasChildren'
         * @example Custom.FieldName <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     var continents, countries, states, tree;
         *     continents = [
         *         { id: 1, anyChildren: true, text: 'Asia', type: 'continent' },
         *         { id: 2, anyChildren: true, text: 'North America', type: 'continent' },
         *         { id: 3, anyChildren: false, text: 'South America', type: 'continent' }
         *     ];
         *     countries = [
         *         { id: 1, anyChildren: false, continent: 'Asia', text: 'China', type: 'country' },
         *         { id: 2, anyChildren: false, continent: 'Asia', text: 'Japan', type: 'country' },
         *         { id: 3, anyChildren: true, continent: 'North America', text: 'USA', type: 'country' },
         *         { id: 4, anyChildren: false, continent: 'North America', text: 'Canada', type: 'country' }
         *     ];
         *     states = [
         *         { id: 1, country: 'USA', text: 'California', type: 'state' },
         *         { id: 2, country: 'USA', text: 'Florida', type: 'state' }
         *     ];
         *     tree = $('#tree').tree({
         *         hasChildrenField: 'anyChildren',
         *         dataSource: continents
         *     });
         *     tree.on('expand', function (e, $node, id) {
         *         var i, children, record = tree.getDataById(id);
         *         if (tree.getChildren($node).length === 0) {
         *             if (record.type === 'continent') {
         *                 children = $.grep(countries, function (i) { return i.continent === record.text; });
         *                 for (i = 0; i < children.length; i++) {
         *                     tree.addNode(children[i], $node);
         *                 }
         *             } else if (record.type === 'country') {
         *                 children = $.grep(states, function (i) { return i.country === record.text; });
         *                 for (i = 0; i < children.length; i++) {
         *                     tree.addNode(children[i], $node);
         *                 }
         *             }
         *         }
         *     });
         * </script>
         */
hasChildrenField:"hasChildren",/** Image css class field name.
         * @type string
         * @default 'imageCssClass'
         * @example Default.Name <!-- bootstrap, tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         uiLibrary: 'bootstrap',
         *         dataSource: [ { text: 'folder', imageCssClass: 'glyphicon glyphicon-folder-close', children: [ { text: 'file', imageCssClass: 'glyphicon glyphicon-file' } ] } ]
         *     });
         * </script>
         * @example Custom.Name <!-- tree  -->
         * <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         imageCssClassField: 'faCssClass',
         *         dataSource: [ { text: 'folder', faCssClass: 'fa fa-folder', children: [ { text: 'file', faCssClass: 'fa fa-file' } ] } ]
         *     });
         * </script>
         */
imageCssClassField:"imageCssClass",/** Image url field name.
         * @type string
         * @default 'imageUrl'
         * @example Default.HTML.Field.Name <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: [ { text: 'World', imageUrl: 'http://gijgo.com/content/icons/world-icon.png', children: [ { text: 'USA', imageUrl: 'http://gijgo.com/content/icons/usa-oval-icon.png' } ] } ]
         *     });
         * </script>
         * @example Custom.HTML.Field.Name <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         imageUrlField: 'icon',
         *         dataSource: [ { text: 'World', icon: 'http://gijgo.com/content/icons/world-icon.png', children: [ { text: 'USA', icon: 'http://gijgo.com/content/icons/usa-oval-icon.png' } ] } ]
         *     });
         * </script>
         */
imageUrlField:"imageUrl",/** Image html field name.
         * @type string
         * @default 'imageHtml'
         * @example Default.HTML.Field.Name <!-- materialicons, tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: [ { text: 'folder', imageHtml: '<i class="material-icons">folder</i>', children: [ { text: 'file', imageHtml: '<i class="material-icons">insert_drive_file</i>' } ] } ]
         *     });
         * </script>
         * @example Custom.HTML.Field.Name <!-- materialicons, tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         imageHtmlField: 'icon',
         *         dataSource: [ { text: 'folder', icon: '<i class="material-icons">folder</i>', children: [ { text: 'file', icon: '<i class="material-icons">insert_drive_file</i>' } ] } ]
         *     });
         * </script>
         */
imageHtmlField:"imageHtml",/** Disabled field name. Assume that the item is not disabled if not set.
         * @type string
         * @default 'disabled'
         * @example Default.Value <!-- checkbox, tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         checkboxes: true,
         *         dataSource: [ { text: 'foo', children: [
         *                 { text: 'bar', disabled: true, children: [ { text: 'sub-bar' } ] },
         *                 { text: 'bar2', disabled: false }
         *             ] }
         *         ]
         *     });
         * </script>
         * @example Custom.Value <!-- checkbox, tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         checkboxes: true,
         *         disabledField: 'disabledState',
         *         dataSource: [ { text: 'foo', children: [
         *                 { text: 'bar', disabledState: true, children: [ { text: 'sub-bar' } ] },
         *                 { text: 'bar2', disabledState: false }
         *             ] }
         *         ]
         *     });
         * </script>
         * @example Bootstrap <!-- bootstrap, checkbox, tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         uiLibrary: 'bootstrap',
         *         checkboxes: true,
         *         dataSource: [ { text: 'foo', children: [
         *                 { text: 'bar', disabled: true, children: [ { text: 'sub-bar' } ] },
         *                 { text: 'bar2', disabled: false }
         *             ] }
         *         ]
         *     });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, checkbox, tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         uiLibrary: 'bootstrap4',
         *         checkboxes: true,
         *         dataSource: [ { text: 'foo', children: [
         *                 { text: 'bar', disabled: true, children: [ { text: 'sub-bar' } ] },
         *                 { text: 'bar2', disabled: false }
         *             ] }
         *         ]
         *     });
         * </script>
         */
disabledField:"disabled",/** Width of the tree.
         * @type number
         * @default undefined
         * @example JS.Config <!-- bootstrap, tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'bootstrap',
         *         border: true
         *     });
         * </script>
         * @example HTML.Config <!-- bootstrap, tree -->
         * <div id="tree" width="500" data-source="/Locations/Get" data-ui-library="bootstrap" data-border="true"></div>
         * <script>
         *     $('#tree').tree();
         * </script>
         */
width:void 0,/** When this setting is enabled the content of the tree will be wrapped by borders.
         * @type boolean
         * @default false
         * @example Material.Design.True <!-- checkbox, tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         border: true,
         *         checkboxes: true
         *     });
         * </script>
         * @example Material.Design.False <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         border: false
         *     });
         * </script>
         * @example Bootstrap.3.True <!-- bootstrap, tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'bootstrap',
         *         border: true
         *     });
         * </script>
         * @example Bootstrap.3.False <!-- bootstrap, tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'bootstrap',
         *         border: false
         *     });
         * </script>
         * @example Bootstrap.4.True <!-- bootstrap4, tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'bootstrap4',
         *         border: true
         *     });
         * </script>
         * @example Bootstrap.4.False <!-- bootstrap4, tree -->
         * <div id="tree"></div>
         * <script>
         *     $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'bootstrap4',
         *         border: false
         *     });
         * </script>
         */
border:!1,/** The name of the UI library that is going to be in use.
         * @additionalinfo The css file for bootstrap should be manually included if you use bootstrap.
         * @type (materialdesign|bootstrap|bootstrap4)
         * @default materialdesign
         * @example MaterialDesign <!-- tree, checkbox -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'materialdesign',
         *         checkboxes: true
         *     });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, tree, checkbox -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'bootstrap',
         *         checkboxes: true
         *     });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, tree, checkbox -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'bootstrap4',
         *         checkboxes: true
         *     });
         * </script>
         */
uiLibrary:"materialdesign",/** The name of the icons library that is going to be in use. Currently we support Material Icons, Font Awesome and Glyphicons.
         * @additionalinfo If you use Bootstrap 3 as uiLibrary, then the iconsLibrary is set to Glyphicons by default.<br/>
         * If you use Material Design as uiLibrary, then the iconsLibrary is set to Material Icons by default.<br/>
         * The css files for Material Icons, Font Awesome or Glyphicons should be manually included to the page where the grid is in use.
         * @type (materialicons|fontawesome|glyphicons)
         * @default 'materialicons'
         * @example Base.Theme.Material.Icons <!-- tree -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         iconsLibrary: 'materialicons'
         *     });
         * </script>
         * @example Bootstrap.4.Font.Awesome <!-- bootstrap4, fontawesome, tree, checkbox -->
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         width: 500,
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome',
         *         checkboxes: true
         *     });
         * </script>
         */
iconsLibrary:"materialicons",autoGenId:1,indentation:24,style:{wrapper:"gj-unselectable",list:"gj-list gj-list-md",item:void 0,active:"gj-list-md-active",leafIcon:void 0,border:"gj-tree-md-border"},icons:{/** Expand icon definition.
             * @alias icons.expand
             * @type String
             * @default '<i class="gj-icon chevron-right" />'
             * @example Plus.Minus.Icons <!-- materialicons, tree -->
             * <div id="tree"></div>
             * <script>
             *     var tree = $('#tree').tree({
             *         dataSource: '/Locations/Get',
             *         icons: { 
             *             expand: '<i class="material-icons">add</i>',
             *             collapse: '<i class="material-icons">remove</i>'
             *         }
             *     });
             * </script>
             */
expand:'<i class="gj-icon chevron-right" />',/** Collapse icon definition.
             * @alias icons.collapse
             * @type String
             * @default '<i class="gj-icon chevron-down" />'
             * @example Plus.Minus.Icons <!-- materialicons, tree -->
             * <div id="tree"></div>
             * <script>
             *     var tree = $('#tree').tree({
             *         dataSource: '/Locations/Get',
             *         icons: { 
             *             expand: '<i class="material-icons">add</i>',
             *             collapse: '<i class="material-icons">remove</i>'
             *         }
             *     });
             * </script>
             */
collapse:'<i class="gj-icon chevron-down" />'}},bootstrap:{style:{wrapper:"gj-unselectable gj-tree-bootstrap-3",list:"gj-list gj-list-bootstrap list-group",item:"list-group-item",active:"active",border:"gj-tree-bootstrap-border"},iconsLibrary:"glyphicons"},bootstrap4:{style:{wrapper:"gj-unselectable gj-tree-bootstrap-4",list:"gj-list gj-list-bootstrap",item:"list-group-item",active:"active",border:"gj-tree-bootstrap-border"},icons:{expand:'<i class="gj-icon plus" />',collapse:'<i class="gj-icon minus" />'}},materialicons:{style:{expander:"gj-tree-material-icons-expander"}},fontawesome:{style:{expander:"gj-tree-font-awesome-expander"},icons:{expand:'<i class="fa fa-plus" aria-hidden="true"></i>',collapse:'<i class="fa fa-minus" aria-hidden="true"></i>'}},glyphicons:{style:{expander:"gj-tree-glyphicons-expander"},icons:{expand:'<span class="glyphicon glyphicon-plus" />',collapse:'<span class="glyphicon glyphicon-minus" />'}}},/**
  * @widget Tree
  * @plugin Base
  */
gj.tree.events={/**
     * Event fires when the tree is initialized
     * @event initialized
     * @param {object} e - event data
     * @example Event.Sample <!-- tree -->
     * <button id="reload" class="gj-button-md">Reload</button>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         initialized: function (e) {
     *             alert('initialized is fired.');
     *         }
     *     });
     *     $('#reload').on('click', function() { 
     *         tree.reload(); 
     *     });
     * </script>
     */
initialized:function(e){e.triggerHandler("initialized")},/**
     * Event fired before data binding takes place.
     * @event dataBinding
     * @param {object} e - event data
     * @example Event.Sample <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         dataBinding: function (e) {
     *             alert('dataBinding is fired.');
     *         }
     *     });
     * </script>
     */
dataBinding:function(e){e.triggerHandler("dataBinding")},/**
     * Event fires after the loading of the data in the tree.
     * @event dataBound
     * @param {object} e - event data
     * @example Event.Sample <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         dataBound: function (e) {
     *             alert('dataBound is fired.');
     *         }
     *     });
     * </script>
     */
dataBound:function(e){e.triggerHandler("dataBound")},/**
     * Event fires after selection of tree node.
     * @event select
     * @param {object} e - event data
     * @param {object} node - the node as jquery object
     * @param {string} id - the id of the record
     * @example Event.Sample <!-- tree -->
     * <p>Select tree node in order to fire the event.</p>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     *     tree.on('select', function (e, node, id) {
     *         alert('select is fired for node with id=' + id);
     *     });
     * </script>
     */
select:function(e,t,n){return e.triggerHandler("select",[t,n])},/**
     * Event fires on un selection of tree node
     * @event unselect
     * @param {object} e - event data
     * @param {object} node - the node as jquery object
     * @param {string} id - the id of the record
     * @example Event.Sample <!-- tree -->
     * <p>Select/Unselect tree node in order to fire the event.</p>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     *     tree.on('unselect', function (e, node, id) {
     *         alert('unselect is fired for node with id=' + id);
     *     });
     * </script>
     */
unselect:function(e,t,n){return e.triggerHandler("unselect",[t,n])},/**
     * Event fires before node expand.
     * @event expand
     * @param {object} e - event data
     * @param {object} node - the node as jquery object
     * @param {string} id - the id of the record
     * @example Event.Sample <!-- tree -->
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     *     tree.on('expand', function (e, node, id) {
     *         alert('expand is fired.');
     *     });
     * </script>
     */
expand:function(e,t,n){return e.triggerHandler("expand",[t,n])},/**
     * Event fires before node collapse.
     * @event collapse
     * @param {object} e - event data
     * @param {object} node - the node as jquery object
     * @param {string} id - the id of the record
     * @example Event.Sample <!-- tree -->
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     *     tree.on('collapse', function (e, node, id) {
     *         alert('collapse is fired.');
     *     });
     * </script>
     */
collapse:function(e,t,n){return e.triggerHandler("collapse",[t,n])},/**
     * Event fires on enable of tree node.
     * @event enable
     * @param {object} e - event data
     * @param {object} node - the node as jquery object
     * @example Event.Sample <!-- tree -->
     * <button onclick="tree.enable(northAmerica, false)" class="gj-button-md">Enable North America</button>
     * <button onclick="tree.disable(northAmerica, false)" class="gj-button-md">Disable North America</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         primaryKey: 'ID',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     *     tree.on('enable', function (e, node) {
     *         alert(node.text() + ' is enabled.');
     *     });
     * </script>
     */
enable:function(e,t){return e.triggerHandler("enable",[t])},/**
     * Event fires on disable of tree node.
     * @event disable
     * @param {object} e - event data
     * @param {object} node - the node as jquery object
     * @example Event.Sample <!-- tree -->
     * <button onclick="tree.enable(northAmerica, false)" class="gj-button-md">Enable North America</button>
     * <button onclick="tree.disable(northAmerica, false)" class="gj-button-md">Disable North America</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         primaryKey: 'ID',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     *     tree.on('disable', function (e, node) {
     *         alert(node.text() + ' is disabled.');
     *     });
     * </script>
     */
disable:function(e,t){return e.triggerHandler("disable",[t])},/**
     * Event fires before tree destroy
     * @event destroying
     * @param {object} e - event data
     * @example Event.Sample <!-- tree -->
     * <button onclick="tree.destroy()" class="gj-button-md">Destroy</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     *     tree.on('destroying', function (e) {
     *         alert('destroying is fired.');
     *     });
     * </script>
     */
destroying:function(e){return e.triggerHandler("destroying")},/**
     * Event fires when the data is bound to node.
     * @event nodeDataBound
     * @param {object} e - event data
     * @param {object} node - the node as jquery object
     * @param {string} id - the id of the record
     * @param {object} record - the data of the node record
     * @example Event.Sample <!-- tree -->
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     *     tree.on('nodeDataBound', function (e, node, id, record) {
     *         if ((parseInt(id, 10) % 2) === 0) {
     *             node.css('background-color', 'red');
     *         }
     *     });
     * </script>
     */
nodeDataBound:function(e,t,n,i){return e.triggerHandler("nodeDataBound",[t,n,i])}},/*global gj $*/
gj.tree.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"tree"),gj.tree.methods.initialize.call(this),this.data("autoLoad")&&this.reload(),this},initialize:function(){var e=this.data(),t=$('<ul class="'+e.style.list+'"/>');this.empty().addClass(e.style.wrapper).append(t),e.width&&this.width(e.width),e.border&&this.addClass(e.style.border),gj.tree.events.initialized(this)},useHtmlDataSource:function(e,t){t.dataSource=[]},render:function(e,t){return t&&("string"==typeof t&&JSON&&(t=JSON.parse(t)),e.data("records",gj.tree.methods.getRecords(e,t)),gj.tree.methods.loadData(e)),e},filter:function(e){return e.data().dataSource},getRecords:function(e,t){var n,i,r,o=[],a=e.data();for(n=0;n<t.length;n++)i=a.primaryKey&&t[n][a.primaryKey]?t[n][a.primaryKey]:a.autoGenId++,r={id:i,data:t[n]},t[n][a.childrenField]&&t[n][a.childrenField].length?(r.children=gj.tree.methods.getRecords(e,t[n][a.childrenField]),delete t[n][a.childrenField]):r.children=[],o.push(r);return o},loadData:function(e){var t,n=e.data("records"),i=e.children("ul");for(gj.tree.events.dataBinding(e),i.off().empty(),t=0;t<n.length;t++)gj.tree.methods.appendNode(e,i,n[t],1);gj.tree.events.dataBound(e)},appendNode:function(e,t,n,i,r){var o,a,s,l,d,c=e.data(),a=$('<li data-id="'+n.id+'" data-role="node" />').addClass(c.style.item),u=$('<div data-role="wrapper" />'),p=$('<span data-role="expander" data-mode="close"></span>').addClass(c.style.expander),h=$('<span data-role="display">'+n.data[c.textField]+"</span>"),g=void 0!==n.data[c.hasChildrenField]&&"true"===n.data[c.hasChildrenField].toString().toLowerCase(),f=void 0!==n.data[c.disabledField]&&"true"===n.data[c.disabledField].toString().toLowerCase();if(c.indentation&&u.append('<span data-role="spacer" style="width: '+c.indentation*(i-1)+'px;"></span>'),f?gj.tree.methods.disableNode(e,a):(p.on("click",gj.tree.methods.expanderClickHandler(e)),h.on("click",gj.tree.methods.displayClickHandler(e))),u.append(p),u.append(h),a.append(u),r?t.find("li:eq("+(r-1)+")").before(a):t.append(a),n.children.length||g)for(p.empty().append(c.icons.expand),s=$("<ul />").addClass(c.style.list).addClass("gj-hidden"),a.append(s),o=0;o<n.children.length;o++)gj.tree.methods.appendNode(e,s,n.children[o],i+1);else c.style.leafIcon?p.addClass(c.style.leafIcon):p.html("&nbsp;");c.imageCssClassField&&n.data[c.imageCssClassField]?$('<span data-role="image"><span class="'+n.data[c.imageCssClassField]+'"></span></span>').insertBefore(h):c.imageUrlField&&n.data[c.imageUrlField]?(l=$('<span data-role="image"></span>'),l.insertBefore(h),d=$('<img src="'+n.data[c.imageUrlField]+'"></img>'),d.attr("width",l.width()).attr("height",l.height()),l.append(d)):c.imageHtmlField&&n.data[c.imageHtmlField]&&(l=$('<span data-role="image">'+n.data[c.imageHtmlField]+"</span>"),l.insertBefore(h)),gj.tree.events.nodeDataBound(e,a,n.id,n.data)},expanderClickHandler:function(e){return function(t){var n=$(this),i=n.closest("li");"close"===n.attr("data-mode")?e.expand(i):e.collapse(i)}},expand:function(e,t,n){var i,r,o=t.find('>[data-role="wrapper"]>[data-role="expander"]'),a=e.data(),s=t.attr("data-id"),l=t.children("ul");if(!1!==gj.tree.events.expand(e,t,s)&&l&&l.length&&(l.show(),o.attr("data-mode","open"),o.empty().append(a.icons.collapse),n))for(i=t.find("ul>li"),r=0;r<i.length;r++)gj.tree.methods.expand(e,$(i[r]),n);return e},collapse:function(e,t,n){var i,r,o=t.find('>[data-role="wrapper"]>[data-role="expander"]'),a=e.data(),s=t.attr("data-id"),l=t.children("ul");if(!1!==gj.tree.events.collapse(e,t,s)&&l&&l.length&&(l.hide(),o.attr("data-mode","close"),o.empty().append(a.icons.expand),n))for(i=t.find("ul>li"),r=0;r<i.length;r++)gj.tree.methods.collapse(e,$(i[r]),n);return e},expandAll:function(e){var t,n=e.find("ul>li");for(t=0;t<n.length;t++)gj.tree.methods.expand(e,$(n[t]),!0);return e},collapseAll:function(e){var t,n=e.find("ul>li");for(t=0;t<n.length;t++)gj.tree.methods.collapse(e,$(n[t]),!0);return e},displayClickHandler:function(e){return function(t){var n=$(this),i=n.closest("li"),r=e.data().cascadeSelection;"true"===i.attr("data-selected")?gj.tree.methods.unselect(e,i,r):("single"===e.data("selectionType")&&gj.tree.methods.unselectAll(e),gj.tree.methods.select(e,i,r))}},selectAll:function(e){var t,n=e.find("ul>li");for(t=0;t<n.length;t++)gj.tree.methods.select(e,$(n[t]),!0);return e},select:function(e,t,n){var i,r,o=e.data();if("true"!==t.attr("data-selected")&&!1!==gj.tree.events.select(e,t,t.attr("data-id"))&&(t.addClass(o.style.active).attr("data-selected","true"),n))for(r=t.find("ul>li"),i=0;i<r.length;i++)gj.tree.methods.select(e,$(r[i]),n)},unselectAll:function(e){var t,n=e.find("ul>li");for(t=0;t<n.length;t++)gj.tree.methods.unselect(e,$(n[t]),!0);return e},unselect:function(e,t,n){var i,r;e.data();if("true"===t.attr("data-selected")&&!1!==gj.tree.events.unselect(e,t,t.attr("data-id"))&&(t.removeClass(e.data().style.active).removeAttr("data-selected"),n))for(r=t.find("ul>li"),i=0;i<r.length;i++)gj.tree.methods.unselect(e,$(r[i]),n)},getSelections:function(e){var t,n,i,r=[],o=e.children("li");if(o&&o.length)for(t=0;t<o.length;t++)n=$(o[t]),"true"===n.attr("data-selected")?r.push(n.attr("data-id")):n.has("ul")&&(i=gj.tree.methods.getSelections(n.children("ul")),i.length&&(r=r.concat(i)));return r},getById:function(e,t,n){var i,r=void 0;for(i=0;i<n.length;i++){if(t==n[i].id){r=n[i];break}if(n[i].children&&n[i].children.length&&(r=gj.tree.methods.getById(e,t,n[i].children)))break}return r},getDataById:function(e,t,n){var i=gj.tree.methods.getById(e,t,n);return i?i.data:i},getDataByText:function(e,t,n){var i,r=void 0,o=e.data();for(i=0;i<n.length;i++){if(t===n[i].data[o.textField]){r=n[i].data;break}if(n[i].children&&n[i].children.length&&(r=gj.tree.methods.getDataByText(e,t,n[i].children)))break}return r},getNodeById:function(e,t){var n,i,r=void 0,o=e.children("li");if(o&&o.length)for(n=0;n<o.length;n++){if(i=$(o[n]),t==i.attr("data-id")){r=i;break}if(i.has("ul")&&(r=gj.tree.methods.getNodeById(i.children("ul"),t)))break}return r},getNodeByText:function(e,t){var n,i,r=void 0,o=e.children("li");if(o&&o.length)for(n=0;n<o.length;n++){if(i=$(o[n]),t===i.find('>[data-role="wrapper"]>[data-role="display"]').text()){r=i;break}if(i.has("ul")&&(r=gj.tree.methods.getNodeByText(i.children("ul"),t)))break}return r},getAll:function(e,t){var n,i,r=[],o=e.data("childrenField");for(n=0;n<t.length;n++)i=JSON.parse(JSON.stringify(t[n].data)),t[n].children.length&&(i[o]=gj.tree.methods.getAll(e,t[n].children)),r.push(i);return r},addNode:function(e,t,n,i){var r,o=gj.tree.methods.getRecords(e,[t])[0];return n&&n.length?("li"===n[0].tagName.toLowerCase()&&(0===n.children("ul").length&&(n.find('[data-role="expander"]').empty().append(e.data().icons.collapse),n.append($("<ul />").addClass(e.data().style.list))),n=n.children("ul")),gj.tree.methods.getById(e,n.parent().data("id"),e.data("records")).children.push(o)):(n=e.children("ul"),e.data("records").push(o)),r=n.parentsUntil('[data-type="tree"]',"ul").length+1,gj.tree.methods.appendNode(e,n,o,r,i),e},remove:function(e,t){return gj.tree.methods.removeDataById(e,t.attr("data-id"),e.data("records")),t.remove(),e},removeDataById:function(e,t,n){var i;for(i=0;i<n.length;i++){if(t==n[i].id){n.splice(i,1);break}n[i].children&&n[i].children.length&&gj.tree.methods.removeDataById(e,t,n[i].children)}},update:function(e,t,n){var i=e.data(),r=e.getNodeById(t);e.getDataById(t);return n,r.find('>[data-role="wrapper"]>[data-role="display"]').html(n[i.textField]),gj.tree.events.nodeDataBound(e,r,t,n),e},getChildren:function(e,t,n){var i,r,o=[],n=void 0===n||n;for(r=n?t.find("ul li"):t.find(">ul>li"),i=0;i<r.length;i++)o.push($(r[i]).data("id"));return o},enableAll:function(e){var t,n=e.find("ul>li");for(t=0;t<n.length;t++)gj.tree.methods.enableNode(e,$(n[t]),!0);return e},enableNode:function(e,t,n){var i,r,o=t.find('>[data-role="wrapper"]>[data-role="expander"]'),a=t.find('>[data-role="wrapper"]>[data-role="display"]'),n=void 0===n||n;if(t.removeClass("disabled"),o.on("click",gj.tree.methods.expanderClickHandler(e)),a.on("click",gj.tree.methods.displayClickHandler(e)),gj.tree.events.enable(e,t),n)for(r=t.find("ul>li"),i=0;i<r.length;i++)gj.tree.methods.enableNode(e,$(r[i]),n)},disableAll:function(e){var t,n=e.find("ul>li");for(t=0;t<n.length;t++)gj.tree.methods.disableNode(e,$(n[t]),!0);return e},disableNode:function(e,t,n){var i,r,o=t.find('>[data-role="wrapper"]>[data-role="expander"]'),a=t.find('>[data-role="wrapper"]>[data-role="display"]'),n=void 0===n||n;if(t.addClass("disabled"),o.off("click"),a.off("click"),gj.tree.events.disable(e,t),n)for(r=t.find("ul>li"),i=0;i<r.length;i++)gj.tree.methods.disableNode(e,$(r[i]),n)},destroy:function(e){return e.data()&&(gj.tree.events.destroying(e),e.xhr&&e.xhr.abort(),e.off(),e.removeData(),e.removeAttr("data-type"),e.removeClass().empty()),e}},/**
  * @widget Tree
  * @plugin Base
  */
gj.tree.widget=function(e,t){var n=this,i=gj.tree.methods;/**
     * Reload the tree.
     * @method
     * @param {object} params - Params that needs to be send to the server. Only in use for remote data sources.
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="tree.reload()" class="gj-button-md">Click to load</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         autoLoad: false
     *     });
     * </script>
     * @example Search <!-- tree -->
     * <input type="text" id="query" /> <button onclick="Search()">Search</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function Search() {
     *         tree.reload({ query: $('#query').val() });
     *     }
     * </script>
     */
/**
     * Render data in the tree
     * @method
     * @param {object} response - An object that contains the data that needs to be loaded in the tree.
     * @fires dataBinding, dataBound
     * @return tree
     * @example sample <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree, onSuccessFunc;
     *     onSuccessFunc = function (response) {
     *         //you can modify the response here if needed
     *         tree.render(response);
     *     };
     *     tree = $('#tree').tree({
     *         dataSource: { url: '/Locations/Get', success: onSuccessFunc }
     *     });
     * </script>
     */
/**
     * Add node to the tree.
     * @method
     * @param {object} data - The node data.
     * @param {object} parentNode - Parent node as jquery object.
     * @param {Number} position - Position where the new node need to be added. 
     * @return jQuery object
     * @example Append.ToRoot <!-- tree -->
     * <button onclick="append()" class="gj-button-md">Append To Root</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     *     function append() {
     *         tree.addNode({ text: 'New Node' });
     *     }
     * </script>
     * @example Append.Parent <!-- tree -->
     * <button onclick="append()" class="gj-button-md">Append To Asia</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var parent, tree = $('#tree').tree();
     *     tree.on('dataBound', function () {
     *         parent = tree.getNodeByText('Asia');
     *         tree.off('dataBound');
     *     });
     *     function append() {
     *         tree.addNode({ text: 'New Node' }, parent);
     *     }
     * </script>
     * @example Bootstrap <!-- bootstrap, tree -->
     * <button onclick="append()" class="btn btn-default">Append To Asia</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get" data-ui-library="bootstrap"></div>
     * <script>
     *     var parent, tree = $('#tree').tree();
     *     tree.on('dataBound', function () {
     *         parent = tree.getNodeByText('Asia');
     *         tree.off('dataBound');
     *     });
     *     function append() {
     *         tree.addNode({ text: 'New Node' }, parent);
     *     }
     * </script>
     * @example Prepend <!-- tree -->
     * <button onclick="append()" class="gj-button-md">Prepend in Asia</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var parent, tree = $('#tree').tree();
     *     tree.on('dataBound', function () {
     *         parent = tree.getNodeByText('Asia');
     *         tree.off('dataBound');
     *     });
     *     function append() {
     *         tree.addNode({ text: 'New Node' }, parent, 1);
     *     }
     * </script>
     * @example Position <!-- tree -->
     * <button onclick="append()" class="gj-button-md">Append to Asia as second</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var parent, tree = $('#tree').tree();
     *     tree.on('dataBound', function () {
     *         parent = tree.getNodeByText('Asia');
     *         tree.off('dataBound');
     *     });
     *     function append() {
     *         tree.addNode({ text: 'New Node' }, parent, 2);
     *     }
     * </script>
     */
/**
     * Remove node from the tree.
     * @method
     * @param {object} node - The node as jQuery object
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="remove()" class="gj-button-md">Remove USA</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function remove() {
     *         var node = tree.getNodeByText('USA');
     *         tree.removeNode(node);
     *     }
     * </script>
     */
/**
     * Update node from the tree.
     * @method
     * @param {string} id - The id of the node that needs to be updated
     * @param {object} record - The node as jQuery object
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <input type="text" id="nodeName" />
     * <button onclick="save()" class="gj-button-md">Save</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         primaryKey: 'id',
     *         dataSource: '/Locations/Get'
     *     });
     *     tree.on('select', function (e, node, id) {
     *         $('#nodeName').val(tree.getDataById(id).text);
     *     });
     *     function save() {
     *         var id = tree.getSelections()[0],
     *             record = tree.getDataById(id);
     *         record.text = $('#nodeName').val();
     *         tree.updateNode(id, record);
     *     }
     * </script>
     */
/**
     * Destroy the tree.
     * @method
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="tree.destroy()" class="gj-button-md">Destroy</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     * </script>
     */
/**
     * Expand node from the tree.
     * @method
     * @param {object} node - The node as jQuery object
     * @param {boolean} cascade - Expand all children
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="expand()" class="gj-button-md">Expand Asia</button>
     * <button onclick="collapse()" class="gj-button-md">Collapse Asia</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function expand() {
     *         var node = tree.getNodeByText('Asia');
     *         tree.expand(node);
     *     }
     *     function collapse() {
     *         var node = tree.getNodeByText('Asia');
     *         tree.collapse(node);
     *     }
     * </script>
     * @example Cascade <!-- tree -->
     * <button onclick="expand()" class="gj-button-md">Expand North America</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function expand() {
     *         var node = tree.getNodeByText('North America');
     *         tree.expand(node, true);
     *     }
     * </script>
     */
/**
     * Collapse node from the tree.
     * @method
     * @param {object} node - The node as jQuery object
     * @param {boolean} cascade - Collapse all children
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="expand()" class="gj-button-md">Expand Asia</button>
     * <button onclick="collapse()" class="gj-button-md">Collapse Asia</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function expand() {
     *         var node = tree.getNodeByText('Asia');
     *         tree.expand(node);
     *     }
     *     function collapse() {
     *         var node = tree.getNodeByText('Asia');
     *         tree.collapse(node);
     *     }
     * </script>
     * @example Cascade <!-- tree -->
     * <button onclick="collapse()" class="gj-button-md">Collapse North America</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function collapse() {
     *         var node = tree.getNodeByText('North America');
     *         tree.collapse(node, true);
     *     }
     * </script>
     */
/**
     * Expand all tree nodes
     * @method
     * @return jQuery object
     * @example Sample <!-- tree -->
     * <button onclick="tree.expandAll()" class="gj-button-md">Expand All</button>
     * <button onclick="tree.collapseAll()" class="gj-button-md">Collapse All</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     * </script>
     */
/**
     * Collapse all tree nodes
     * @method
     * @return jQuery object
     * @example Sample <!-- tree -->
     * <button onclick="tree.expandAll()" class="gj-button-md">Expand All</button>
     * <button onclick="tree.collapseAll()" class="gj-button-md">Collapse All</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     * </script>
     */
/**
     * Return node data by id of the record.
     * @method
     * @param {string|number} id - The id of the record that needs to be returned
     * @return object
     * @example sample <!-- tree -->
     * <button id="btnGetData" class="gj-button-md">Get Data</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         primaryKey: 'id' //define the name of the column that you want to use as ID here.
     *     });
     *     $('#btnGetData').on('click', function () {
     *         var data = tree.getDataById(9);
     *         alert('The population of ' + data.text + ' is ' + data.population);
     *     });
     * </script>
     */
/**
     * Return node data by text.
     * @method
     * @param {string} text - The text of the record that needs to be returned
     * @return object
     * @example sample <!-- tree -->
     * <button id="btnGetData" class="gj-button-md">Get Data</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *     });
     *     $('#btnGetData').on('click', function () {
     *         var data = tree.getDataByText('California');
     *         alert('The population of California is ' + data.population);
     *     });
     * </script>
     */
/**
     * Return node by id of the record.
     * @method
     * @param {string} id - The id of the node that needs to be returned
     * @return jQuery object
     * @example sample <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         primaryKey: 'id' //define the name of the column that you want to use as ID here.
     *     });
     *     tree.on('dataBound', function() {
     *         var node = tree.getNodeById('1');
     *         node.css('background-color', 'red');
     *     });
     * </script>
     */
/**
     * Return node by text.
     * @method
     * @param {string} text - The text in the node that needs to be returned
     * @return jQuery object
     * @example sample <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     tree.on('dataBound', function() {
     *         var node = tree.getNodeByText('Asia');
     *         node.css('background-color', 'red');
     *     });
     * </script>
     */
/**
     * Return an array with all records presented in the tree.
     * @method
     * @return Array
     * @example sample <!-- tree -->
     * <button onclick="alert(JSON.stringify(tree.getAll()))" class="gj-button-md">Get All Data</button>
     * <button onclick="tree.addNode({ text: 'New Node' });" class="gj-button-md">Add New Node</button>
     * <br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: [ { text: 'foo', children: [ { text: 'bar' } ] } ]
     *     });
     * </script>
     */
/**
     * Select node from the tree.
     * @method
     * @param {Object} node - The node as jquery object.
     * @return jQuery Object
     * @example Select.Method <!-- tree -->
     * <button onclick="tree.select(northAmerica)" class="gj-button-md">Select North America</button>
     * <button onclick="tree.unselect(northAmerica)" class="gj-button-md">Unselect North America</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         primaryKey: 'id',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         },
     *         select: function (e, node, id) {
     *             alert('select is fired for node with id=' + id);
     *         }
     *     });
     * </script>
     */
/**
     * Unselect node from the tree.
     * @method
     * @param {Object} node - The node as jquery object.
     * @return jQuery Object
     * @example UnSelect.Method <!-- tree -->
     * <button onclick="tree.select(northAmerica)" class="gj-button-md">Select North America</button>
     * <button onclick="tree.unselect(northAmerica)" class="gj-button-md">Unselect North America</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         primaryKey: 'id',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');  
     *         },
     *         unselect: function (e, node, id) {
     *             alert('unselect is fired for node with id=' + id);
     *         }
     *     });
     * </script>
     */
/**
     * Select all tree nodes
     * @method
     * @return jQuery object
     * @example Sample <!-- tree -->
     * <button onclick="tree.selectAll()" class="gj-button-md">Select All</button>
     * <button onclick="tree.unselectAll()" class="gj-button-md">Unselect All</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         selectionType: 'multiple'
     *     });
     *     tree.on('dataBound', function() {
     *         tree.expandAll();
     *     });
     * </script>
     */
/**
     * Unselect all tree nodes
     * @method
     * @return jQuery object
     * @example Sample <!-- tree -->
     * <button onclick="tree.selectAll()" class="gj-button-md">Select All</button>
     * <button onclick="tree.unselectAll()" class="gj-button-md">Unselect All</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         selectionType: 'multiple'
     *     });
     *     tree.on('dataBound', function() {
     *         tree.expandAll();
     *     });
     * </script>
     */
/**
     * Return an array with the ids of the selected nodes.
     * @method
     * @return array
     * @example Sample <!-- tree -->
     * <button id="btnShowSelection" class="gj-button-md">Show Selections</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         selectionType: 'multiple'
     *     });
     *     $('#btnShowSelection').on('click', function () {
     *         var selections = tree.getSelections();
     *         selections && selections.length && alert(selections.join());
     *     });
     * </script>
     */
/**
     * Return an array with the ids of all children.
     * @method
     * @param {Object} node - The node as jquery object.
     * @param {Boolean} cascade - Include all nested children. Set to true by default.
     * @return array
     * @example Cascade.True <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         dataBound: function () {
     *             var node = tree.getNodeByText('North America'),
     *                 children = tree.getChildren(node);
     *             alert(children.join());
     *         }
     *     });
     * </script>
     * @example Cascade.False <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         dataBound: function () {
     *             var node = tree.getNodeByText('North America'),
     *                 children = tree.getChildren(node, false);
     *             alert(children.join());
     *         }
     *     });
     * </script>
     */
/**
     * Enable node from the tree.
     * @method
     * @param {Object} node - The node as jquery object.
     * @param {Boolean} cascade - Enable all children. Set to true by default.
     * @return jQuery Object
     * @example Material.Design <!-- checkbox, tree -->
     * <button onclick="tree.enable(northAmerica)" class="gj-button-md">Enable North America (Cascade)</button>
     * <button onclick="tree.disable(northAmerica)" class="gj-button-md">Disable North America (Cascade)</button>
     * <button onclick="tree.enable(northAmerica, false)" class="gj-button-md">Enable North America (Non-Cascade)</button>
     * <button onclick="tree.disable(northAmerica, false)" class="gj-button-md">Disable North America (Non-Cascade)</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         checkboxes: true,
     *         primaryKey: 'ID',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     * </script>
     * @example Bootstrap <!-- bootstrap, checkbox, tree -->
     * <button onclick="tree.enable(northAmerica)" class="btn btn-default">Enable North America (Cascade)</button>
     * <button onclick="tree.disable(northAmerica)" class="btn btn-default">Disable North America (Cascade)</button>
     * <button onclick="tree.enable(northAmerica, false)" class="btn btn-default">Enable North America (Non-Cascade)</button>
     * <button onclick="tree.disable(northAmerica, false)" class="btn btn-default">Disable North America (Non-Cascade)</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         checkboxes: true,
     *         primaryKey: 'ID',
     *         uiLibrary: 'bootstrap',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     * </script>
     * @example Bootstrap.4 <!-- bootstrap4, fontawesome, checkbox, tree -->
     * <button onclick="tree.enable(northAmerica)" class="btn btn-default">Enable North America (Cascade)</button>
     * <button onclick="tree.disable(northAmerica)" class="btn btn-default">Disable North America (Cascade)</button>
     * <button onclick="tree.enable(northAmerica, false)" class="btn btn-default">Enable North America (Non-Cascade)</button>
     * <button onclick="tree.disable(northAmerica, false)" class="btn btn-default">Disable North America (Non-Cascade)</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         checkboxes: true,
     *         primaryKey: 'ID',
     *         uiLibrary: 'bootstrap4',
     *         iconsLibrary: 'fontawesome',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     * </script>
     */
/**
     * Enable all nodes from the tree.
     * @method
     * @return jQuery Object
     * @example Sample <!-- checkbox, tree -->
     * <button onclick="tree.enableAll()" class="gj-button-md">Enable All</button>
     * <button onclick="tree.disableAll()" class="gj-button-md">Disable All</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         checkboxes: true
     *     });
     * </script>
     */
/**
     * Disable node from the tree.
     * @method
     * @param {Object} node - The node as jquery object.
     * @param {Boolean} cascade - Disable all children. Set to true by default.
     * @return jQuery Object
     * @example Sample <!-- checkbox, tree -->
     * <button onclick="tree.enable(northAmerica)" class="gj-button-md">Enable North America (Cascade)</button>
     * <button onclick="tree.disable(northAmerica)" class="gj-button-md">Disable North America (Cascade)</button>
     * <button onclick="tree.enable(northAmerica, false)" class="gj-button-md">Enable North America (Non-Cascade)</button>
     * <button onclick="tree.disable(northAmerica, false)" class="gj-button-md">Disable North America (Non-Cascade)</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         checkboxes: true,
     *         primaryKey: 'ID',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     * </script>
     */
/**
     * Disable all nodes from the tree.
     * @method
     * @return jQuery Object
     * @example Sample <!-- checkbox, tree -->
     * <button onclick="tree.enableAll()" class="gj-button-md">Enable All</button>
     * <button onclick="tree.disableAll()" class="gj-button-md">Disable All</button>
     * <br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         checkboxes: true
     *     });
     * </script>
     */
return n.reload=function(e){return gj.widget.prototype.reload.call(this,e)},n.render=function(e){return i.render(this,e)},n.addNode=function(e,t,n){return i.addNode(this,e,t,n)},n.removeNode=function(e){return i.remove(this,e)},n.updateNode=function(e,t){return i.update(this,e,t)},n.destroy=function(){return i.destroy(this)},n.expand=function(e,t){return i.expand(this,e,t)},n.collapse=function(e,t){return i.collapse(this,e,t)},n.expandAll=function(){return i.expandAll(this)},n.collapseAll=function(){return i.collapseAll(this)},n.getDataById=function(e){return i.getDataById(this,e,this.data("records"))},n.getDataByText=function(e){return i.getDataByText(this,e,this.data("records"))},n.getNodeById=function(e){return i.getNodeById(this.children("ul"),e)},n.getNodeByText=function(e){return i.getNodeByText(this.children("ul"),e)},n.getAll=function(){return i.getAll(this,this.data("records"))},n.select=function(e){return i.select(this,e)},n.unselect=function(e){return i.unselect(this,e)},n.selectAll=function(){return i.selectAll(this)},n.unselectAll=function(){return i.unselectAll(this)},n.getSelections=function(){return i.getSelections(this.children("ul"))},n.getChildren=function(e,t){return i.getChildren(this,e,t)},n.enable=function(e,t){return i.enableNode(this,e,t)},n.enableAll=function(){return i.enableAll(this)},n.disable=function(e,t){return i.disableNode(this,e,t)},n.disableAll=function(){return i.disableAll(this)},$.extend(e,n),"tree"!==e.attr("data-type")&&i.init.call(e,t),e},gj.tree.widget.prototype=new gj.widget,gj.tree.widget.constructor=gj.tree.widget,function(e){e.fn.tree=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.tree.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.tree.widget(this,e)}}}(jQuery),/** 
 * @widget Tree 
 * @plugin Checkboxes
 */
gj.tree.plugins.checkboxes={config:{base:{/** Add checkbox for each node, if set to true.
              * @type Boolean
              * @default undefined
              * @example Material.Design <!-- checkbox, tree -->
              * <div id="tree"></div>
              * <script>
              *     var tree = $('#tree').tree({
              *         dataSource: '/Locations/Get',
              *         checkboxes: true
              *     });
              * </script>
              * @example Bootstrap.3 <!-- bootstrap, checkbox, tree -->
              * <div id="tree"></div>
              * <script>
              *     var tree = $('#tree').tree({
              *         dataSource: '/Locations/Get',
              *         checkboxes: true,
              *         uiLibrary: 'bootstrap'
              *     });
              * </script>
              * @example Bootstrap.4 <!-- bootstrap4, checkbox, tree -->
              * <div id="tree"></div>
              * <script>
              *     var tree = $('#tree').tree({
              *         dataSource: '/Locations/Get',
              *         checkboxes: true,
              *         uiLibrary: 'bootstrap4'
              *     });
              * </script>
              */
checkboxes:void 0,/** Name of the source field, that indicates if the checkbox is checked.
             * @type string
             * @default 'checked'
             * @example Custom.Name <!-- checkbox, tree -->
             * <div id="tree"></div>
             * <script>
             *     var tree = $('#tree').tree({
             *         checkboxes: true,
             *         checkedField: 'checkedFieldName',
             *         dataSource: [ { text: 'foo', checkedFieldName: false, children: [ { text: 'bar', checkedFieldName: true }, { text: 'bar2', checkedFieldName: false } ] }, { text: 'foo2', children: [ { text: 'bar2' } ] } ]
             *     });
             * </script>
             */
checkedField:"checked",/** This setting enable cascade check and uncheck of children
             * @type boolean
             * @default true
             * @example False.Remote.DataSource <!-- checkbox, tree -->
             * <div id="tree"></div>
             * <script>
             *     var tree = $('#tree').tree({
             *         checkboxes: true,
             *         dataSource: '/Locations/Get',
             *         cascadeCheck: false
             *     });
             *     tree.on('dataBound', function() {
             *         tree.expandAll();
             *     });
             * </script>
             * @example False.Local.DataSource <!-- checkbox, tree -->
             * <div id="tree"></div>
             * <script>
             *     var tree = $('#tree').tree({
             *         checkboxes: true,
             *         dataSource: [ { text: 'foo', checked: true, children: [ { text: 'bar', checked: true }, { text: 'bar2', checked: false } ] }, { text: 'foo2', checked: true, children: [ { text: 'bar2', checked: false } ] } ],
             *         cascadeCheck: false
             *     });
             * </script>
             * @example True <!-- checkbox, tree -->
             * <div id="tree"></div>
             * <script>
             *     var tree = $('#tree').tree({
             *         checkboxes: true,
             *         dataSource: '/Locations/Get',
             *         cascadeCheck: true
             *     });
             *     tree.on('dataBound', function() {
             *         tree.expandAll();
             *     });
             * </script>
             */
cascadeCheck:!0}},private:{dataBound:function(e){var t;e.data("cascadeCheck")&&(t=e.find('li[data-role="node"]'),$.each(t,function(){var e=$(this),t=e.find('[data-role="checkbox"] input[type="checkbox"]').checkbox("state");"checked"===t&&(gj.tree.plugins.checkboxes.private.updateChildrenState(e,t),gj.tree.plugins.checkboxes.private.updateParentState(e,t))}))},nodeDataBound:function(e,t,n,i){var r=e.data(),o=t.find('> [data-role="wrapper"] > [data-role="expander"]'),a=$('<input type="checkbox"/>'),s=$('<span data-role="checkbox"></span>').append(a),l=void 0!==i[r.disabledField]&&"true"===i[r.disabledField].toString().toLowerCase();a=a.checkbox({uiLibrary:r.uiLibrary,iconsLibrary:r.iconsLibrary,change:function(n,r){gj.tree.plugins.checkboxes.events.checkboxChange(e,t,i,a.state())}}),l&&a.prop("disabled",!0),i[r.checkedField]&&a.state("checked"),a.on("click",function(e){var t=a.closest("li"),n=a.state();r.cascadeCheck&&(gj.tree.plugins.checkboxes.private.updateChildrenState(t,n),gj.tree.plugins.checkboxes.private.updateParentState(t,n))}),o.after(s)},updateParentState:function(e,t){var n,i,r,o,a,s;n=e.parent("ul").parent("li"),1===n.length&&(i=e.parent("ul").parent("li").find('> [data-role="wrapper"] > [data-role="checkbox"] input[type="checkbox"]'),r=e.siblings().find('> [data-role="wrapper"] > span[data-role="checkbox"] input[type="checkbox"]'),o="checked"===t,a="unchecked"===t,s="indeterminate",$.each(r,function(){var e=$(this).checkbox("state");o&&"checked"!==e&&(o=!1),a&&"unchecked"!==e&&(a=!1)}),o&&!a&&(s="checked"),!o&&a&&(s="unchecked"),i.checkbox("state",s),gj.tree.plugins.checkboxes.private.updateParentState(n,i.checkbox("state")))},updateChildrenState:function(e,t){var n=e.find('ul li [data-role="wrapper"] [data-role="checkbox"] input[type="checkbox"]');n.length>0&&$.each(n,function(){$(this).checkbox("state",t)})},update:function(e,t,n){var i=t.find('[data-role="checkbox"] input[type="checkbox"]').first();$(i).checkbox("state",n),e.data().cascadeCheck&&(gj.tree.plugins.checkboxes.private.updateChildrenState(t,n),gj.tree.plugins.checkboxes.private.updateParentState(t,n))}},public:{/** Get ids of all checked nodes
         * @method
         * @return Array
         * @example Base.Theme <!-- checkbox, tree -->
         * <button id="btnGet" class="gj-button-md">Get Checked Nodes</button>
         * <div id="tree"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         dataSource: '/Locations/Get',
         *         checkboxes: true
         *     });
         *     $('#btnGet').on('click', function() {
         *         var result = tree.getCheckedNodes();
         *         alert(result.join());
         *     });
         * </script>
         */
getCheckedNodes:function(){var e=[],t=this.find('li [data-role="checkbox"] input[type="checkbox"]');return $.each(t,function(){var t=$(this);"checked"===t.checkbox("state")&&e.push(t.closest("li").data("id"))}),e},/**
         * Check all tree nodes
         * @method
         * @return tree as jQuery object
         * @example Sample <!-- checkbox, tree -->
         * <button onclick="tree.checkAll()" class="gj-button-md">Check All</button>
         * <button onclick="tree.uncheckAll()" class="gj-button-md">Uncheck All</button>
         * <br/><br/>
         * <div id="tree" data-source="/Locations/Get"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         checkboxes: true
         *     });
         *     tree.on('dataBound', function() {
         *         tree.expandAll();
         *     });
         * </script>
         */
checkAll:function(){var e=this.find('li [data-role="checkbox"] input[type="checkbox"]');return $.each(e,function(){$(this).checkbox("state","checked")}),this},/**
         * Uncheck all tree nodes
         * @method
         * @return tree as jQuery object
         * @example Sample <!-- checkbox, tree -->
         * <button onclick="tree.checkAll()" class="gj-button-md">Check All</button>
         * <button onclick="tree.uncheckAll()" class="gj-button-md">Uncheck All</button>
         * <br/><br/>
         * <div id="tree" data-source="/Locations/Get"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         checkboxes: true
         *     });
         *     tree.on('dataBound', function() {
         *         tree.expandAll();
         *     });
         * </script>
         */
uncheckAll:function(){var e=this.find('li [data-role="checkbox"] input[type="checkbox"]');return $.each(e,function(){$(this).checkbox("state","unchecked")}),this},/**
         * Check tree node.
         * @method
         * @param {object} node - The node as jQuery object
         * @return tree as jQuery object
         * @example Sample <!-- checkbox, tree -->
         * <button onclick="tree.check(tree.getNodeByText('China'))" class="gj-button-md">Check China</button>
         * <br/>
         * <div id="tree" data-source="/Locations/Get"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         checkboxes: true
         *     });
         *     tree.on('dataBound', function() {
         *         tree.expandAll();
         *     });
         * </script>
         */
check:function(e){return gj.tree.plugins.checkboxes.private.update(this,e,"checked"),this},/**
         * Uncheck tree node.
         * @method
         * @param {object} node - The node as jQuery object
         * @return tree as jQuery object
         * @example Sample <!-- checkbox, tree -->
         * <button onclick="tree.uncheck(tree.getNodeByText('China'))" class="gj-button-md">UnCheck China</button>
         * <br/>
         * <div id="tree" data-source="/Locations/Get"></div>
         * <script>
         *     var tree = $('#tree').tree({
         *         checkboxes: true
         *     });
         *     tree.on('dataBound', function() {
         *         tree.expandAll();
         *         tree.check(tree.getNodeByText('China'));
         *     });
         * </script>
         */
uncheck:function(e){return gj.tree.plugins.checkboxes.private.update(this,e,"unchecked"),this}},events:{/**
         * Event fires when the checkbox state is changed.
         * @event checkboxChange
         * @param {object} e - event data
         * @param {object} $node - the node object as jQuery element
         * @param {object} record - the record data
         * @param {string} state - the new state of the checkbox
         * @example Event.Sample <!-- checkbox, tree -->
         * <div id="tree" data-source="/Locations/Get" data-checkboxes="true"></div>
         * <script>
         *     var tree = $('#tree').tree();
         *     tree.on('checkboxChange', function (e, $node, record, state) {
         *         alert('The new state of record ' + record.text + ' is ' + state);
         *     });
         * </script>
         */
checkboxChange:function(e,t,n,i){return e.triggerHandler("checkboxChange",[t,n,i])}},configure:function(e){e.data("checkboxes")&&gj.checkbox&&($.extend(!0,e,gj.tree.plugins.checkboxes.public),e.on("nodeDataBound",function(t,n,i,r){gj.tree.plugins.checkboxes.private.nodeDataBound(e,n,i,r)}),e.on("dataBound",function(){gj.tree.plugins.checkboxes.private.dataBound(e)}),e.on("enable",function(e,t){t.find('>[data-role="wrapper"]>[data-role="checkbox"] input[type="checkbox"]').prop("disabled",!1)}),e.on("disable",function(e,t){t.find('>[data-role="wrapper"]>[data-role="checkbox"] input[type="checkbox"]').prop("disabled",!0)}))}},/**
 * @widget Tree
 * @plugin DragAndDrop
 */
gj.tree.plugins.dragAndDrop={config:{base:{/** Enables drag and drop functionality for each node.
              * @type Boolean
              * @default undefined
              * @example Material.Design <!-- draggable, droppable, tree -->
              * <h3>Drag and Drop Tree Nodes</h3>
              * <div id="tree"></div>
              * <script>
              *     $('#tree').tree({
              *         dataSource: '/Locations/Get',
              *         dragAndDrop: true
              *     });
              * </script>
              * @example Bootstrap.3 <!-- bootstrap, draggable, droppable, tree -->
              * <div class="container">
              *     <h3>Drag and Drop Tree Nodes</h3>
              *     <div id="tree"></div>
              * </div>
              * <script>
              *     $('#tree').tree({
              *         dataSource: '/Locations/Get',
              *         dragAndDrop: true,
              *         uiLibrary: 'bootstrap'
              *     });
              * </script>
              * @example Bootstrap.4 <!-- bootstrap4, draggable, droppable, tree -->
              * <div class="container">
              *     <h3>Drag and Drop Tree Nodes</h3>
              *     <div id="tree"></div>
              * </div>
              * <script>
              *     $('#tree').tree({
              *         dataSource: '/Locations/Get',
              *         dragAndDrop: true,
              *         uiLibrary: 'bootstrap4'
              *     });
              * </script>
              */
dragAndDrop:void 0,style:{dragEl:"gj-tree-drag-el gj-tree-md-drag-el",dropAsChildIcon:"gj-cursor-pointer gj-icon plus",dropAbove:"gj-tree-drop-above",dropBelow:"gj-tree-drop-below"}},bootstrap:{style:{dragEl:"gj-tree-drag-el gj-tree-bootstrap-drag-el",dropAsChildIcon:"glyphicon glyphicon-plus",dropAbove:"drop-above",dropBelow:"drop-below"}},bootstrap4:{style:{dragEl:"gj-tree-drag-el gj-tree-bootstrap-drag-el",dropAsChildIcon:"gj-cursor-pointer gj-icon plus",dropAbove:"drop-above",dropBelow:"drop-below"}}},private:{nodeDataBound:function(e,t){var n=t.children('[data-role="wrapper"]'),i=t.find('>[data-role="wrapper"]>[data-role="display"]');n.length&&i.length&&(i.on("mousedown",gj.tree.plugins.dragAndDrop.private.createNodeMouseDownHandler(e)),i.on("mousemove",gj.tree.plugins.dragAndDrop.private.createNodeMouseMoveHandler(e,t,i)),i.on("mouseup",gj.tree.plugins.dragAndDrop.private.createNodeMouseUpHandler(e)))},createNodeMouseDownHandler:function(e){return function(t){e.data("dragReady",!0)}},createNodeMouseUpHandler:function(e){return function(t){e.data("dragReady",!1)}},createNodeMouseMoveHandler:function(e,t,n){return function(i){if(e.data("dragReady")){var r,o,a,s,l=e.data();e.data("dragReady",!1),r=n.clone().wrap('<div data-role="wrapper"/>').closest("div").wrap('<li class="'+l.style.item+'" />').closest("li").wrap('<ul class="'+l.style.list+'" />').closest("ul"),$("body").append(r),r.attr("data-role","draggable-clone").addClass("gj-unselectable").addClass(l.style.dragEl),r.find('[data-role="wrapper"]').prepend('<span data-role="indicator" />'),r.draggable({drag:gj.tree.plugins.dragAndDrop.private.createDragHandler(e,t,n),stop:gj.tree.plugins.dragAndDrop.private.createDragStopHandler(e,t,n)}),o=n.parent(),a=n.offset().top,a-=parseInt(o.css("border-top-width"))+parseInt(o.css("margin-top"))+parseInt(o.css("padding-top")),s=n.offset().left,s-=parseInt(o.css("border-left-width"))+parseInt(o.css("margin-left"))+parseInt(o.css("padding-left")),s-=r.find('[data-role="indicator"]').outerWidth(!0),r.css({position:"absolute",top:a,left:s,width:n.outerWidth(!0)}),"true"===n.attr("data-droppable")&&n.droppable("destroy"),gj.tree.plugins.dragAndDrop.private.getTargetDisplays(e,t,n).each(function(){var e=$(this);"true"===e.attr("data-droppable")&&e.droppable("destroy"),e.droppable()}),gj.tree.plugins.dragAndDrop.private.getTargetDisplays(e,t).each(function(){var e=$(this);"true"===e.attr("data-droppable")&&e.droppable("destroy"),e.droppable()}),r.trigger("mousedown")}}},getTargetDisplays:function(e,t,n){return e.find('[data-role="display"]').not(n).not(t.find('[data-role="display"]'))},getTargetWrappers:function(e,t){return e.find('[data-role="wrapper"]').not(t.find('[data-role="wrapper"]'))},createDragHandler:function(e,t,n){var i=gj.tree.plugins.dragAndDrop.private.getTargetDisplays(e,t,n),r=gj.tree.plugins.dragAndDrop.private.getTargetWrappers(e,t),o=e.data();return function(e,t,n){var a=$(this),s=!1;i.each(function(){var e,t=$(this);if(t.droppable("isOver",n))return e=a.find('[data-role="indicator"]'),o.style.dropAsChildIcon?e.addClass(o.style.dropAsChildIcon):e.text("+"),s=!0,!1;a.find('[data-role="indicator"]').removeClass(o.style.dropAsChildIcon).empty()}),r.each(function(){var e,t=$(this);!s&&t.droppable("isOver",n)?(e=t.position().top+t.outerHeight()/2,n.y<e?t.addClass(o.style.dropAbove).removeClass(o.style.dropBelow):t.addClass(o.style.dropBelow).removeClass(o.style.dropAbove)):t.removeClass(o.style.dropAbove).removeClass(o.style.dropBelow)})}},createDragStopHandler:function(e,t,n){var i=gj.tree.plugins.dragAndDrop.private.getTargetDisplays(e,t,n),r=gj.tree.plugins.dragAndDrop.private.getTargetWrappers(e,t),o=e.data();return function(n,a){var s=!1;$(this).draggable("destroy").remove(),i.each(function(){var n,i,r,l=$(this);if(l.droppable("isOver",a))return n=l.closest("li"),i=t.parent("ul").parent("li"),r=n.children("ul"),0===r.length&&(r=$("<ul />").addClass(o.style.list),n.append(r)),!1!==gj.tree.plugins.dragAndDrop.events.nodeDrop(e,t.data("id"),n.data("id"),r.children("li").length+1)&&(r.append(t),gj.tree.plugins.dragAndDrop.private.refresh(e,t,n,i)),s=!0,!1;l.droppable("destroy")}),s||r.each(function(){var n,i,r,o,s,l=$(this);if(l.droppable("isOver",a))return n=l.closest("li"),i=t.parent("ul").parent("li"),r=a.top<l.position().top+l.outerHeight()/2,s=t.data("id"),o=n.prevAll('li:not([data-id="'+s+'"])').length+(r?1:2),!1!==gj.tree.plugins.dragAndDrop.events.nodeDrop(e,s,n.parent("ul").parent("li").data("id"),o)&&(r?t.insertBefore(n):t.insertAfter(n),gj.tree.plugins.dragAndDrop.private.refresh(e,t,n,i)),!1;l.droppable("destroy")})}},refresh:function(e,t,n,i){var r=e.data();gj.tree.plugins.dragAndDrop.private.refreshNode(e,n),gj.tree.plugins.dragAndDrop.private.refreshNode(e,i),gj.tree.plugins.dragAndDrop.private.refreshNode(e,t),t.find('li[data-role="node"]').each(function(){gj.tree.plugins.dragAndDrop.private.refreshNode(e,$(this))}),n.children('[data-role="wrapper"]').removeClass(r.style.dropAbove).removeClass(r.style.dropBelow)},refreshNode:function(e,t){var n=t.children('[data-role="wrapper"]'),i=n.children('[data-role="expander"]'),r=n.children('[data-role="spacer"]'),o=t.children("ul"),a=e.data(),s=t.parentsUntil('[data-type="tree"]',"ul").length;o.length&&o.children().length?o.is(":visible")?i.empty().append(a.icons.collapse):i.empty().append(a.icons.expand):i.empty(),n.removeClass(a.style.dropAbove).removeClass(a.style.dropBelow),r.css("width",a.indentation*(s-1))}},public:{},events:{/**
         * Event fires when the node is dropped.
         * @event nodeDrop
         * @param {object} e - event data
         * @param {string} id - the id of the record
         * @param {object} parentId - the id of the new parend node
         * @param {object} orderNumber - the new order number
         * @example Event.Sample <!-- draggable, droppable, tree -->
         * <div id="tree" data-source="/Locations/Get" data-drag-and-drop="true"></div>
         * <script>
         *     var tree = $('#tree').tree();
         *     tree.on('nodeDrop', function (e, id, parentId, orderNumber) {
         *         var node = tree.getDataById(id),
         *             parent = parentId ? tree.getDataById(parentId) : {};
         *         if (parent.text === 'North America') {
         *             alert('Can\'t add children to North America.');
         *             return false;
         *         } else {
         *             alert(node.text + ' is added to ' + parent.text + ' as ' + orderNumber);
         *             return true;
         *         }
         *     });
         * </script>
         */
nodeDrop:function(e,t,n,i){return e.triggerHandler("nodeDrop",[t,n,i])}},configure:function(e){$.extend(!0,e,gj.tree.plugins.dragAndDrop.public),e.data("dragAndDrop")&&gj.draggable&&gj.droppable&&e.on("nodeDataBound",function(t,n){gj.tree.plugins.dragAndDrop.private.nodeDataBound(e,n)})}},/** 
 * @widget Tree 
 * @plugin Lazy Loading
 */
gj.tree.plugins.lazyLoading={config:{base:{paramNames:{/** The name of the parameter that is going to send the parent identificator.
                 * Lazy Loading needs to be enabled in order this parameter to be in use.
                 * @alias paramNames.parentId
                 * @type string
                 * @default "parentId"
                 */
parentId:"parentId"},/** Enables lazy loading
              * @type Boolean
              * @default false
              * @example Material.Design <!-- tree -->
              * <div id="tree"></div>
              * <script>
              *     $('#tree').tree({
              *         dataSource: '/Locations/LazyGet',
              *         primaryKey: 'id',
              *         lazyLoading: true
              *     });
              * </script>
              */
lazyLoading:!1}},private:{nodeDataBound:function(e,t,n,i){var r=e.data(),o=t.find('> [data-role="wrapper"] > [data-role="expander"]');i.hasChildren&&o.empty().append(r.icons.expand)},createDoneHandler:function(e,t){return function(n){var i,r,o,a=e.data();if("string"==typeof n&&JSON&&(n=JSON.parse(n)),n&&n.length){for(o=$("<ul />").addClass(a.style.list),t.append(o),i=0;i<n.length;i++)e.addNode(n[i],o);r=t.find('>[data-role="wrapper"]>[data-role="expander"]'),r.attr("data-mode","open"),r.empty().append(a.icons.collapse),gj.tree.events.dataBound(e)}}},expand:function(e,t,n){var i,r=e.data(),o={},a=t.find(">ul>li");a&&a.length||"string"==typeof r.dataSource&&(o[r.paramNames.parentId]=n,i={url:r.dataSource,data:o},e.xhr&&e.xhr.abort(),e.xhr=$.ajax(i).done(gj.tree.plugins.lazyLoading.private.createDoneHandler(e,t)).fail(e.createErrorHandler()))}},public:{},events:{},configure:function(e,t,n){n.lazyLoading&&(e.on("nodeDataBound",function(t,n,i,r){gj.tree.plugins.lazyLoading.private.nodeDataBound(e,n,i,r)}),e.on("expand",function(t,n,i){gj.tree.plugins.lazyLoading.private.expand(e,n,i)}))}},/* global window alert jQuery */
/** 
 * @widget Checkbox 
 * @plugin Base
 */
gj.checkbox={plugins:{}},gj.checkbox.config={base:{/** The name of the UI library that is going to be in use. Currently we support only Material Design and Bootstrap. 
         * @additionalinfo The css files for Bootstrap should be manually included to the page if you use bootstrap as uiLibrary.
         * @type string (materialdesign|bootstrap|bootstrap4)
         * @default 'materialdesign'
         * @example Material.Design <!-- checkbox  -->
         * <input type="checkbox" id="checkbox"/><br/><br/>
         * <button onclick="$chkb.state('checked')" class="gj-button-md">Checked</button>
         * <button onclick="$chkb.state('unchecked')" class="gj-button-md">Unchecked</button>
         * <button onclick="$chkb.state('indeterminate')" class="gj-button-md">Indeterminate</button>
         * <button onclick="$chkb.prop('disabled', false)" class="gj-button-md">Enable</button>
         * <button onclick="$chkb.prop('disabled', true)" class="gj-button-md">Disable</button>
         * <script>
         *     var $chkb = $('#checkbox').checkbox({
         *         uiLibrary: 'materialdesign'
         *     });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, checkbox -->
         * <div class="container-fluid" style="margin-top:10px">
         *     <input type="checkbox" id="checkbox"/><br/><br/>
         *     <button onclick="$chkb.state('checked')" class="btn btn-default">Checked</button>
         *     <button onclick="$chkb.state('unchecked')" class="btn btn-default">Unchecked</button>
         *     <button onclick="$chkb.state('indeterminate')" class="btn btn-default">Indeterminate</button>
         *     <button onclick="$chkb.prop('disabled', false)" class="btn btn-default">Enable</button>
         *     <button onclick="$chkb.prop('disabled', true)" class="btn btn-default">Disable</button>
         * </div>
         * <script>
         *     var $chkb = $('#checkbox').checkbox({
         *         uiLibrary: 'bootstrap'
         *     });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, checkbox -->
         * <div class="container-fluid" style="margin-top:10px">
         *     <input type="checkbox" id="checkbox"/><br/><br/>
         *     <button onclick="$chkb.state('checked')" class="btn btn-default">Checked</button>
         *     <button onclick="$chkb.state('unchecked')" class="btn btn-default">Unchecked</button>
         *     <button onclick="$chkb.state('indeterminate')" class="btn btn-default">Indeterminate</button>
         *     <button onclick="$chkb.prop('disabled', false)" class="btn btn-default">Enable</button>
         *     <button onclick="$chkb.prop('disabled', true)" class="btn btn-default">Disable</button>
         * </div>
         * <script>
         *     var $chkb = $('#checkbox').checkbox({
         *         uiLibrary: 'bootstrap4'
         *     });
         * </script>
         */
uiLibrary:"materialdesign",/** The name of the icons library that is going to be in use. Currently we support Material Icons, Font Awesome and Glyphicons.
         * @additionalinfo If you use Bootstrap 3 as uiLibrary, then the iconsLibrary is set to Glyphicons by default.<br/>
         * If you use Material Design as uiLibrary, then the iconsLibrary is set to Material Icons by default.<br/>
         * The css files for Material Icons, Font Awesome or Glyphicons should be manually included to the page where the grid is in use.
         * @type (materialicons|fontawesome|glyphicons)
         * @default 'materialicons'
         * @example Bootstrap.4.FontAwesome <!-- bootstrap4, checkbox, fontawesome -->
         * <div class="container-fluid" style="margin-top:10px">
         *     <input type="checkbox" id="checkbox"/><br/><br/>
         *     <button onclick="$chkb.state('checked')" class="btn btn-default">Checked</button>
         *     <button onclick="$chkb.state('unchecked')" class="btn btn-default">Unchecked</button>
         *     <button onclick="$chkb.state('indeterminate')" class="btn btn-default">Indeterminate</button>
         *     <button onclick="$chkb.prop('disabled', false)" class="btn btn-default">Enable</button>
         *     <button onclick="$chkb.prop('disabled', true)" class="btn btn-default">Disable</button>
         * </div>
         * <script>
         *     var $chkb = $('#checkbox').checkbox({
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome'
         *     });
         * </script>
         */
iconsLibrary:"materialicons",style:{wrapperCssClass:"gj-checkbox-md",spanCssClass:void 0}},bootstrap:{style:{wrapperCssClass:"gj-checkbox-bootstrap"},iconsLibrary:"glyphicons"},bootstrap4:{style:{wrapperCssClass:"gj-checkbox-bootstrap gj-checkbox-bootstrap-4"},iconsLibrary:"materialicons"},materialicons:{style:{iconsCssClass:"gj-checkbox-material-icons",spanCssClass:"gj-icon"}},glyphicons:{style:{iconsCssClass:"gj-checkbox-glyphicons",spanCssClass:""}},fontawesome:{style:{iconsCssClass:"gj-checkbox-fontawesome",spanCssClass:"fa"}}},gj.checkbox.methods={init:function(e){var t=this;return gj.widget.prototype.init.call(this,e,"checkbox"),t.attr("data-checkbox","true"),gj.checkbox.methods.initialize(t),t},initialize:function(e){var t,n,i=e.data();i.style.wrapperCssClass&&(t=$('<label class="'+i.style.wrapperCssClass+" "+i.style.iconsCssClass+'"></label>'),e.attr("id")&&t.attr("for",e.attr("id")),e.wrap(t),n=$("<span />"),i.style.spanCssClass&&n.addClass(i.style.spanCssClass),e.parent().append(n))},state:function(e,t){return t?("checked"===t?(e.prop("indeterminate",!1),e.prop("checked",!0)):"unchecked"===t?(e.prop("indeterminate",!1),e.prop("checked",!1)):"indeterminate"===t&&(e.prop("checked",!0),e.prop("indeterminate",!0)),gj.checkbox.events.change(e,t),e):t=e.prop("indeterminate")?"indeterminate":e.prop("checked")?"checked":"unchecked"},toggle:function(e){return"checked"==e.state()?e.state("unchecked"):e.state("checked"),e},destroy:function(e){return"true"===e.attr("data-checkbox")&&(e.removeData(),e.removeAttr("data-guid"),e.removeAttr("data-checkbox"),e.off(),e.next("span").remove(),e.unwrap()),e}},gj.checkbox.events={/**
     * Triggered when the state of the checkbox is changed
     *
     * @event change
     * @param {object} e - event data
     * @param {string} state - the data of the checkbox
     * @example sample <!-- checkbox -->
     * <input type="checkbox" id="checkbox"/>
     * <script>
     *     var chkb = $('#checkbox').checkbox({
     *         change: function (e) {
     *             alert('State: ' + chkb.state());
     *         }
     *     });
     * </script>
     */
change:function(e,t){return e.triggerHandler("change",[t])}},gj.checkbox.widget=function(e,t){var n=this,i=gj.checkbox.methods;/** Toogle the state of the checkbox.
     * @method
     * @fires change
     * @return checkbox as jquery object
     * @example sample <!-- checkbox -->
     * <button onclick="$chkb.toggle()" class="gj-button-md">toggle</button>
     * <hr/>
     * <input type="checkbox" id="checkbox"/>
     * <script>
     *     var $chkb = $('#checkbox').checkbox();
     * </script>
     */
/** Return state or set state if you pass parameter.
     * @method
     * @fires change
     * @param {string} value - State of the checkbox. Accept only checked, unchecked or indeterminate as values.
     * @return checked|unchecked|indeterminate|checkbox as jquery object
     * @example sample <!-- checkbox -->
     * <button onclick="$chkb.state('checked')" class="gj-button-md">Set to checked</button>
     * <button onclick="$chkb.state('unchecked')" class="gj-button-md">Set to unchecked</button>
     * <button onclick="$chkb.state('indeterminate')" class="gj-button-md">Set to indeterminate</button>
     * <button onclick="alert($chkb.state())" class="gj-button-md">Get state</button>
     * <hr/>
     * <input type="checkbox" id="checkbox"/>
     * <script>
     *     var $chkb = $('#checkbox').checkbox();
     * </script>
     */
/** Remove checkbox functionality from the element.
     * @method
     * @return checkbox as jquery object
     * @example sample <!-- checkbox -->
     * <button onclick="$chkb.destroy()" class="gj-button-md">Destroy</button>
     * <input type="checkbox" id="checkbox"/>
     * <script>
     *     var $chkb = $('#checkbox').checkbox();
     * </script>
     */
return n.toggle=function(){return i.toggle(this)},n.state=function(e){return i.state(this,e)},n.destroy=function(){return i.destroy(this)},$.extend(e,n),"true"!==e.attr("data-checkbox")&&i.init.call(e,t),e},gj.checkbox.widget.prototype=new gj.widget,gj.checkbox.widget.constructor=gj.checkbox.widget,function(e){e.fn.checkbox=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.checkbox.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.checkbox.widget(this,e)}}}(jQuery),/* global window alert jQuery */
/** 
 * @widget Editor
 * @plugin Base
 */
gj.editor={plugins:{},messages:{}},gj.editor.config={base:{/** The height of the editor. Numeric values are treated as pixels.
         * @type number|string
         * @default 300
         * @example sample <!-- editor -->
         * <textarea id="editor"></textarea>
         * <script>
         *     $('#editor').editor({ height: 400 });
         * </script>
         */
height:300,/** The width of the editor. Numeric values are treated as pixels.
         * @type number|string
         * @default undefined
         * @example JS <!-- editor -->
         * <textarea id="editor"></textarea>
         * <script>
         *     $('#editor').editor({ width: 900 });
         * </script>
         * @example HTML <!-- editor -->
         * <div id="editor" width="900"></div>
         * <script>
         *     $('#editor').editor();
         * </script>
         */
width:void 0,/** The name of the UI library that is going to be in use. Currently we support only Material Design and Bootstrap. 
         * @additionalinfo The css files for Bootstrap should be manually included to the page if you use bootstrap as uiLibrary.
         * @type string (materialdesign|bootstrap|bootstrap4)
         * @default 'materialdesign'
         * @example Material.Design <!-- editor, materialicons  -->
         * <textarea id="editor"></textarea>
         * <script>
         *     $('#editor').editor({ uiLibrary: 'materialdesign' });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, editor -->
         * <textarea id="editor"></textarea>
         * <script>
         *     $('#editor').editor({
         *         uiLibrary: 'bootstrap'
         *     });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, editor -->
         * <textarea id="editor"></textarea>
         * <script>
         *     $('#editor').editor({
         *         uiLibrary: 'bootstrap4'
         *     });
         * </script>
         */
uiLibrary:"materialdesign",/** The name of the icons library that is going to be in use. Currently we support Material Icons and Font Awesome.
         * @additionalinfo If you use Bootstrap as uiLibrary, then the iconsLibrary is set to font awesome by default.<br/>
         * If you use Material Design as uiLibrary, then the iconsLibrary is set to Material Icons by default.<br/>
         * The css files for Material Icons or Font Awesome should be manually included to the page where the grid is in use.
         * @type (materialicons|fontawesome)
         * @default 'materialicons'
         * @example Bootstrap.4.FontAwesome <!-- bootstrap4, fontawesome, editor -->
         * <textarea id="editor"></textarea>
         * <script>
         *     $('#editor').editor({
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome'
         *     });
         * </script>
         * @example Bootstrap.3.FontAwesome <!-- bootstrap, fontawesome, editor -->
         * <textarea id="editor"></textarea>
         * <script>
         *     $('#editor').editor({
         *         uiLibrary: 'bootstrap',
         *         iconsLibrary: 'fontawesome'
         *     });
         * </script>
         */
iconsLibrary:"materialicons",/** The language that needs to be in use.
         * @type string
         * @default 'en-us'
         * @example French <!-- editor -->
         * <script src="../../dist/modular/editor/js/messages/messages.fr-fr.js"></script>
         * <div id="editor">Hover buttons in the toolbar in order to see localized tooltips</div>
         * <script>
         *     $("#editor").editor({
         *         locale: 'fr-fr'
         *     });
         * </script>
         * @example German <!-- editor -->
         * <script src="../../dist/modular/editor/js/messages/messages.de-de.js"></script>
         * <div id="editor">Hover <b><u>buttons</u></b> in the toolbar in order to see localized tooltips</div>
         * <script>
         *     $("#editor").editor({
         *         locale: 'de-de'
         *     });
         * </script>
         */
locale:"en-us",buttons:void 0,style:{wrapper:"gj-editor gj-editor-md",buttonsGroup:"gj-button-md-group",button:"gj-button-md",buttonActive:"active"}},bootstrap:{style:{wrapper:"gj-editor gj-editor-bootstrap",buttonsGroup:"btn-group",button:"btn btn-default gj-cursor-pointer",buttonActive:"active"}},bootstrap4:{style:{wrapper:"gj-editor gj-editor-bootstrap",buttonsGroup:"btn-group",button:"btn btn-outline-secondary gj-cursor-pointer",buttonActive:"active"}},materialicons:{icons:{bold:'<i class="gj-icon bold" />',italic:'<i class="gj-icon italic" />',strikethrough:'<i class="gj-icon strikethrough" />',underline:'<i class="gj-icon underlined" />',listBulleted:'<i class="gj-icon list-bulleted" />',listNumbered:'<i class="gj-icon list-numbered" />',indentDecrease:'<i class="gj-icon indent-decrease" />',indentIncrease:'<i class="gj-icon indent-increase" />',alignLeft:'<i class="gj-icon align-left" />',alignCenter:'<i class="gj-icon align-center" />',alignRight:'<i class="gj-icon align-right" />',alignJustify:'<i class="gj-icon align-justify" />',undo:'<i class="gj-icon undo" />',redo:'<i class="gj-icon redo" />'}},fontawesome:{icons:{bold:'<i class="fa fa-bold" aria-hidden="true"></i>',italic:'<i class="fa fa-italic" aria-hidden="true"></i>',strikethrough:'<i class="fa fa-strikethrough" aria-hidden="true"></i>',underline:'<i class="fa fa-underline" aria-hidden="true"></i>',listBulleted:'<i class="fa fa-list-ul" aria-hidden="true"></i>',listNumbered:'<i class="fa fa-list-ol" aria-hidden="true"></i>',indentDecrease:'<i class="fa fa-indent" aria-hidden="true"></i>',indentIncrease:'<i class="fa fa-outdent" aria-hidden="true"></i>',alignLeft:'<i class="fa fa-align-left" aria-hidden="true"></i>',alignCenter:'<i class="fa fa-align-center" aria-hidden="true"></i>',alignRight:'<i class="fa fa-align-right" aria-hidden="true"></i>',alignJustify:'<i class="fa fa-align-justify" aria-hidden="true"></i>',undo:'<i class="fa fa-undo" aria-hidden="true"></i>',redo:'<i class="fa fa-repeat" aria-hidden="true"></i>'}}},gj.editor.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"editor"),this.attr("data-editor","true"),gj.editor.methods.initialize(this),this},initialize:function(e){var t,n,i,r,o,a=this,s=e.data();if(e.hide(),"wrapper"!==e[0].parentElement.attributes.role&&(i=document.createElement("div"),i.setAttribute("role","wrapper"),e[0].parentNode.insertBefore(i,e[0]),i.appendChild(e[0])),gj.editor.methods.localization(s),$(i).addClass(s.style.wrapper),s.width&&$(i).width(s.width),r=$(i).children('div[role="body"]'),0===r.length&&(r=$('<div role="body"></div>'),$(i).append(r),e[0].innerText&&(r[0].innerHTML=e[0].innerText)),r.attr("contenteditable",!0),r.on("keydown",function(t){var n=event.keyCode||event.charCode;!1===gj.editor.events.changing(e)&&8!==n&&46!==n&&t.preventDefault()}),r.on("mouseup keyup mouseout cut paste",function(t){a.updateToolbar(e,o),gj.editor.events.changed(e),e.html(r.html())}),o=$(i).children('div[role="toolbar"]'),0===o.length){o=$('<div role="toolbar"></div>'),r.before(o);for(var l in s.buttons){t=$("<div />").addClass(s.style.buttonsGroup);for(var d in s.buttons[l])n=$(s.buttons[l][d]),n.on("click",function(){gj.editor.methods.executeCmd(e,r,o,$(this))}),t.append(n);o.append(t)}}r.height(s.height-gj.core.height(o[0],!0))},localization:function(e){var t=gj.editor.messages[e.locale];void 0===e.buttons&&(e.buttons=[['<button type="button" class="'+e.style.button+'" title="'+t.bold+'" role="bold">'+e.icons.bold+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.italic+'" role="italic">'+e.icons.italic+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.strikethrough+'" role="strikethrough">'+e.icons.strikethrough+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.underline+'" role="underline">'+e.icons.underline+"</button>"],['<button type="button" class="'+e.style.button+'" title="'+t.listBulleted+'" role="insertunorderedlist">'+e.icons.listBulleted+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.listNumbered+'" role="insertorderedlist">'+e.icons.listNumbered+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.indentDecrease+'" role="outdent">'+e.icons.indentDecrease+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.indentIncrease+'" role="indent">'+e.icons.indentIncrease+"</button>"],['<button type="button" class="'+e.style.button+'" title="'+t.alignLeft+'" role="justifyleft">'+e.icons.alignLeft+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.alignCenter+'" role="justifycenter">'+e.icons.alignCenter+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.alignRight+'" role="justifyright">'+e.icons.alignRight+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.alignJustify+'" role="justifyfull">'+e.icons.alignJustify+"</button>"],['<button type="button" class="'+e.style.button+'" title="'+t.undo+'" role="undo">'+e.icons.undo+"</button>",'<button type="button" class="'+e.style.button+'" title="'+t.redo+'" role="redo">'+e.icons.redo+"</button>"]])},updateToolbar:function(e,t){var n=e.data();$buttons=t.find("[role]").each(function(){var e=$(this),t=e.attr("role");t&&document.queryCommandEnabled(t)&&"true"===document.queryCommandValue(t)?e.addClass(n.style.buttonActive):e.removeClass(n.style.buttonActive)})},executeCmd:function(e,t,n,i){t.focus(),document.execCommand(i.attr("role"),!1),gj.editor.methods.updateToolbar(e,n)},content:function(e,t){var n=e.parent().children('div[role="body"]');return void 0===t?n.html():n.html(t)},destroy:function(e){var t;return"true"===e.attr("data-editor")&&(t=e.parent(),t.children('div[role="body"]').remove(),t.children('div[role="toolbar"]').remove(),e.unwrap(),e.removeData(),e.removeAttr("data-guid"),e.removeAttr("data-editor"),e.off(),e.show()),e}},gj.editor.events={/**
     * Event fires before change of text in the editor.
     *
     * @event changing
     * @param {object} e - event data
     * @example MaxLength <!-- editor -->
     * <textarea id="editor"></textarea>
     * <script>
     *     var editor = $('#editor').editor();
     *     editor.on('changing', function (e) {
     *         return $(e.target).text().length < 3;
     *     });
     * </script>
     */
changing:function(e){return e.triggerHandler("changing")},/**
     * Event fires after change of text in the editor.
     *
     * @event changed
     * @param {object} e - event data
     * @example sample <!-- editor -->
     * <textarea id="editor"></textarea>
     * <script>
     *     $('#editor').editor({
     *         changed: function (e) {
     *             alert('changed is fired');
     *         }
     *     });
     * </script>
     */
changed:function(e){return e.triggerHandler("changed")}},gj.editor.widget=function(e,t){var n=this,i=gj.editor.methods;/** Get or set html content in the body.
     * @method
     * @param {string} html - The html content that needs to be set.
     * @return string | editor
     * @example Get <!-- editor, materialicons -->
     * <button class="gj-button-md" onclick="alert($editor.content())">Get Content</button>
     * <hr/>
     * <div id="editor">My <b>content</b>.</div>
     * <script>
     *     var $editor = $('#editor').editor();
     * </script>
     * @example Set <!-- editor, materialicons -->
     * <button class="gj-button-md" onclick="$editor.content('<h1>new value</h1>')">Set Content</button>
     * <hr/>
     * <textarea id="editor"></textarea>
     * <script>
     *     var $editor = $('#editor').editor();
     * </script>
     */
/** Remove editor functionality from the element.
     * @method
     * @return jquery element
     * @example sample <!-- editor, materialicons -->
     * <button class="gj-button-md" onclick="editor.destroy()">Destroy</button><br/>
     * <textarea id="editor"></textarea>
     * <script>
     *     var editor = $('#editor').editor();
     * </script>
     */
return n.content=function(e){return i.content(this,e)},n.destroy=function(){return i.destroy(this)},$.extend(e,n),"true"!==e.attr("data-editor")&&i.init.call(e,t),e},gj.editor.widget.prototype=new gj.widget,gj.editor.widget.constructor=gj.editor.widget,function(e){e.fn.editor=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.editor.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.editor.widget(this,e)}}}(jQuery),gj.editor.messages["en-us"]={bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",listBulleted:"List Bulleted",listNumbered:"List Numbered",indentDecrease:"Indent Decrease",indentIncrease:"Indent Increase",alignLeft:"Align Left",alignCenter:"Align Center",alignRight:"Align Right",alignJustify:"Align Justify",undo:"Undo",redo:"Redo"},/* global window alert jQuery gj */
/**
  * @widget DropDown
  * @plugin Base
  */
gj.dropdown={plugins:{}},gj.dropdown.config={base:{/** The data source of dropdown.
         * @additionalinfo If set to string, then the dropdown is going to use this string as a url for ajax requests to the server.<br />
         * If set to object, then the dropdown is going to use this object as settings for the <a href="http://api.jquery.com/jquery.ajax/" target="_new">jquery ajax</a> function.<br />
         * If set to array, then the dropdown is going to use the array as data for dropdown nodes.
         * @type (string|object|array)
         * @default undefined
         * @example Local.DataSource <!-- dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     $('#dropdown').dropdown({
         *         dataSource: [ { value: 1, text: 'One' }, { value: 2, text: 'Two' }, { value: 3, text: 'Three' } ]
         *     });
         * </script>
         * @example Remote.DataSource <!-- dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     $('#dropdown').dropdown({
         *         dataSource: '/Locations/Get',
         *         valueField: 'id'
         *     });
         * </script>
         */
dataSource:void 0,/** Text field name.
         * @type string
         * @default 'text'
         * @example sample <!-- dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     $('#dropdown').dropdown({
         *         textField: 'newTextField',
         *         dataSource: [ { value: 1, newTextField: 'One' }, { value: 2, newTextField: 'Two' }, { value: 3, newTextField: 'Three' } ]
         *     });
         * </script>
         */
textField:"text",/** Value field name.
         * @type string
         * @default 'value'
         * @example sample <!-- dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     $('#dropdown').dropdown({
         *         valueField: 'newValueField',
         *         dataSource: [ { newValueField: 1, text: 'One' }, { newValueField: 2, text: 'Two' }, { newValueField: 3, text: 'Three' } ]
         *     });
         * </script>
         */
valueField:"value",/** Selected field name.
         * @type string
         * @default 'selected'
         * @example sample <!-- dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     $('#dropdown').dropdown({
         *         selectedField: 'newSelectedField',
         *         dataSource: [ { value: 1, text: 'One' }, { value: 2, text: 'Two', newSelectedField: true }, { value: 3, text: 'Three' } ]
         *     });
         * </script>
         */
selectedField:"selected",/** The width of the dropdown.
         * @type number
         * @default undefined
         * @example JS.Config <!-- dropdown -->
         * <select id="dropdown">
         *     <option value="1">One</option>
         *     <option value="2">Two</option>
         *     <option value="3">Three</option>
         * </select>
         * <script>
         *     $('#dropdown').dropdown({ width: 200 });
         * </script>
         * @example HTML.Config <!-- dropdown -->
         * <select id="dropdown" width="200">
         *     <option value="1">One</option>
         *     <option value="2">Two</option>
         *     <option value="3">Three</option>
         * </select>
         * <script>
         *     $('#dropdown').dropdown();
         * </script>
         * @example 100.Percent <!-- dropdown -->
         * <select id="dropdown" width="100%">
         *     <option value=""></option>
         *     <option value="1">One</option>
         *     <option value="2">Two</option>
         *     <option value="3">Three</option>
         * </select>
         * <script>
         *     $('#dropdown').dropdown();
         * </script>
         */
width:void 0,/** The maximum height of the dropdown list. When set to auto adjust to the screen height.
         * @type Number|'auto'
         * @default 'auto'
         * @example Auto <!-- dropdown -->
         * <p>Note: Minimize the window in order to enable scrolling for the drop down list.</p>
         * <select id="dropdown" width="200"></select>
         * <script>
         *     $('#dropdown').dropdown({ maxHeight: 'auto', dataSource: '/Locations/GetCountries', valueField: 'id' });
         * </script>
         * @example Fixed <!-- dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     $('#dropdown').dropdown({ maxHeight: 200, dataSource: '/Locations/GetCountries', valueField: 'id' });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     $('#dropdown').dropdown({ maxHeight: 200, dataSource: '/Locations/GetCountries', valueField: 'id', uiLibrary: 'bootstrap4' });
         * </script>
         */
maxHeight:"auto",/** Placeholder. This label appear only if the value is not set yet.
         * @type number
         * @default undefined
         * @example JS.Config <!-- dropdown -->
         * <select id="dropdown"></select>
         * <script>
         *     $('#dropdown').dropdown({ placeholder: 'Select One...', width: 200, dataSource: '/Locations/GetCountries', valueField: 'id' });
         * </script>
         * @example HTML.Config <!-- dropdown -->
         * <input type="text" class="gj-textbox-md" placeholder="Select One..." style="width: 200px" /><br/>
         * <select id="dropdown" placeholder="Select One..." width="200" data-source="/Locations/GetCountries" data-value-field="id"></select>
         * <script>
         *     $('#dropdown').dropdown();
         * </script>
         * @example Bootstrap <!-- bootstrap, dropdown -->
         * <input type="text" class="form-control" placeholder="Select One..." style="width: 200px" /><br/>
         * <select id="dropdown" placeholder="Select One..." width="200" data-source="/Locations/GetCountries" data-value-field="id"></select>
         * <script>
         *     $('#dropdown').dropdown({ uiLibrary: 'bootstrap' });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, dropdown -->
         * <input type="text" class="form-control" placeholder="Select One..." style="width: 200px" /><br/>
         * <select id="dropdown" placeholder="Select One..." width="200" data-source="/Locations/GetCountries" data-value-field="id"></select>
         * <script>
         *     $('#dropdown').dropdown({ uiLibrary: 'bootstrap4' });
         * </script>
         */
placeholder:void 0,fontSize:void 0,/** The name of the UI library that is going to be in use.
         * @additionalinfo The css file for bootstrap should be manually included if you use bootstrap.
         * @type (materialdesign|bootstrap|bootstrap4)
         * @default materialdesign
         * @example MaterialDesign <!-- dropdown -->
         * <select id="dropdown" width="200">
         *     <option value="1">One</option>
         *     <option value="2">Two</option>
         *     <option value="3">Three</option>
         * </select>
         * <script>
         *     var dropdown = $('#dropdown').dropdown({
         *         uiLibrary: 'materialdesign'
         *     });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, dropdown -->
         * <select id="dropdown" width="200">
         *     <option value="1">One</option>
         *     <option value="2">Two</option>
         *     <option value="3">Three</option>
         * </select>
         * <script>
         *     $('#dropdown').dropdown({ uiLibrary: 'bootstrap' });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, dropdown -->
         * <select id="dropdown" width="200">
         *     <option value="1">One</option>
         *     <option value="2">Two</option>
         *     <option value="3">Three</option>
         * </select>
         * <script>
         *     $('#dropdown').dropdown({ uiLibrary: 'bootstrap4', width: 300 });
         * </script>
         */
uiLibrary:"materialdesign",/** The name of the icons library that is going to be in use. Currently we support Material Icons, Font Awesome and Glyphicons.
         * @additionalinfo If you use Bootstrap 3 as uiLibrary, then the iconsLibrary is set to Glyphicons by default.<br/>
         * If you use Material Design as uiLibrary, then the iconsLibrary is set to Material Icons by default.<br/>
         * The css files for Material Icons, Font Awesome or Glyphicons should be manually included to the page where the grid is in use.
         * @type (materialicons|fontawesome|glyphicons)
         * @default 'materialicons'
         * @example Bootstrap.Material.Icons <!-- bootstrap, dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     var dropdown = $('#dropdown').dropdown({
         *         dataSource: '/Locations/Get',
         *         uiLibrary: 'bootstrap',
         *         iconsLibrary: 'materialicons',
         *         valueField: 'id'
         *     });
         * </script>
         * @example Bootstrap.4.Font.Awesome <!-- bootstrap4, fontawesome, dropdown -->
         * <select id="dropdown" width="200"></select>
         * <script>
         *     var dropdown = $('#dropdown').dropdown({
         *         dataSource: '/Locations/Get',
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome',
         *         valueField: 'id'
         *     });
         * </script>
         */
iconsLibrary:"materialicons",icons:{/** DropDown icon definition.
             * @alias icons.dropdown
             * @type String
             * @default '<i class="gj-icon arrow-dropdown" />'
             * @example Custom.Material.Icon <!-- materialicons, dropdown -->
             * <select id="dropdown"></select>
             * <script>
             *     var dropdown = $('#dropdown').dropdown({
             *         dataSource: '/Locations/Get',
             *         valueField: 'id',
             *         width: 200,
             *         icons: { 
             *             dropdown: '<i class="material-icons">keyboard_arrow_down</i>'
             *         }
             *     });
             * </script>
             * @example Custom.Glyphicon.Icon <!-- bootstrap, dropdown -->
             * <select id="dropdown"></select>
             * <script>
             *     var dropdown = $('#dropdown').dropdown({
             *         dataSource: '/Locations/Get',
             *         valueField: 'id',
             *         uiLibrary: 'bootstrap',
             *         width: 200,
             *         icons: { 
             *             dropdown: '<span class="glyphicon glyphicon-triangle-bottom" />'
             *         }
             *     });
             * </script>
             */
dropdown:'<i class="gj-icon arrow-dropdown" />',dropup:'<i class="gj-icon arrow-dropup" />'},style:{wrapper:"gj-dropdown gj-dropdown-md gj-unselectable",list:"gj-list gj-list-md gj-dropdown-list-md",active:"gj-list-md-active"}},bootstrap:{style:{wrapper:"gj-dropdown gj-dropdown-bootstrap gj-dropdown-bootstrap-3 gj-unselectable",presenter:"btn btn-default",list:"gj-list gj-list-bootstrap gj-dropdown-list-bootstrap list-group",item:"list-group-item",active:"active"},iconsLibrary:"glyphicons"},bootstrap4:{style:{wrapper:"gj-dropdown gj-dropdown-bootstrap gj-dropdown-bootstrap-4 gj-unselectable",presenter:"btn btn-outline-secondary",list:"gj-list gj-list-bootstrap gj-dropdown-list-bootstrap list-group",item:"list-group-item",active:"active"}},materialicons:{style:{expander:"gj-dropdown-expander-mi"}},fontawesome:{icons:{dropdown:'<i class="fa fa-caret-down" aria-hidden="true"></i>',dropup:'<i class="fa fa-caret-up" aria-hidden="true"></i>'},style:{expander:"gj-dropdown-expander-fa"}},glyphicons:{icons:{dropdown:'<span class="caret"></span>',dropup:'<span class="dropup"><span class="caret" ></span></span>'},style:{expander:"gj-dropdown-expander-glyphicons"}}},gj.dropdown.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"dropdown"),this.attr("data-dropdown","true"),gj.dropdown.methods.initialize(this),this},getHTMLConfig:function(){var e=gj.widget.prototype.getHTMLConfig.call(this),t=this[0].attributes;return t.placeholder&&(e.placeholder=t.placeholder.value),e},initialize:function(e){var t=e.data(),n=e.parent('div[role="wrapper"]'),i=$('<span role="display"></span>'),r=$('<span role="expander">'+t.icons.dropdown+"</span>").addClass(t.style.expander),o=$('<button role="presenter" type="button"></button>').addClass(t.style.presenter),a=$('<ul role="list" class="'+t.style.list+'"></ul>').attr("guid",e.attr("data-guid"));0===n.length?(n=$('<div role="wrapper" />').addClass(t.style.wrapper),// The css class needs to be added before the wrapping, otherwise doesn't work.
e.wrap(n)):n.addClass(t.style.wrapper),t.fontSize&&o.css("font-size",t.fontSize),o.on("click",function(t){a.is(":visible")?gj.dropdown.methods.close(e,a):gj.dropdown.methods.open(e,a)}),o.on("blur",function(t){setTimeout(function(){gj.dropdown.methods.close(e,a)},500)}),o.append(i).append(r),e.hide(),e.after(o),$("body").append(a),a.hide(),e.reload()},setListPosition:function(e,t,n){var i,r,o,a,s=e.getBoundingClientRect(),l=window.scrollY||window.pageYOffset||0;window.scrollX||window.pageXOffset;
// Reset list size
t.style.overflow="",t.style.overflowX="",t.style.height="",gj.core.setChildPosition(e,t),i=gj.core.height(t,!0),a=t.getBoundingClientRect(),r=gj.core.height(e,!0),"auto"===n.maxHeight?s.top<a.top?// The list is located below the main element
s.top+i+r>window.innerHeight&&(o=window.innerHeight-s.top-r-3):// The list is located above the main element                
s.top-i-3>0?t.style.top=Math.round(s.top+l-i-3)+"px":(t.style.top=l+"px",o=s.top-3):!isNaN(n.maxHeight)&&n.maxHeight<i&&(o=n.maxHeight),o&&(t.style.overflow="scroll",t.style.overflowX="hidden",t.style.height=o+"px")},useHtmlDataSource:function(e,t){var n,i,r=[],o=e.find("option");for(n=0;n<o.length;n++)i={},i[t.valueField]=o[n].value,i[t.textField]=o[n].innerHTML,i[t.selectedField]=e[0].value===o[n].value,r.push(i);t.dataSource=r},filter:function(e){var t,n,i=e.data();if(i.dataSource){if("string"==typeof i.dataSource[0])for(t=0;t<i.dataSource.length;t++)n={},n[i.valueField]=i.dataSource[t],n[i.textField]=i.dataSource[t],i.dataSource[t]=n}else i.dataSource=[];return i.dataSource},render:function(e,t){var n=[],r=e.data(),o=e.parent(),a=$("body").children('[role="list"][guid="'+e.attr("data-guid")+'"]'),s=o.children('[role="presenter"]'),l=(s.children('[role="expander"]'),s.children('[role="display"]'));if(e.data("records",t),e.empty(),a.empty(),t&&t.length)if($.each(t,function(){var t,i=this[r.valueField],o=this[r.textField],s=this[r.selectedField]&&"true"===this[r.selectedField].toString().toLowerCase();t=$('<li value="'+i+'"><div data-role="wrapper"><span data-role="display">'+o+"</span></div></li>"),t.addClass(r.style.item),t.on("click",function(t){gj.dropdown.methods.select(e,i)}),a.append(t),e.append('<option value="'+i+'">'+o+"</option>"),s&&n.push(i)}),0===n.length)e.prepend('<option value=""></option>'),r.placeholder&&(l[0].innerHTML='<span class="placeholder">'+r.placeholder+"</span>");else for(i=0;i<n.length;i++)gj.dropdown.methods.select(e,n[i]);return r.width&&(o.css("width",r.width),s.css("width",r.width)),r.fontSize&&a.children("li").css("font-size",r.fontSize),gj.dropdown.events.dataBound(e),e},open:function(e,t){var n=e.data(),i=e.parent().find('[role="expander"]'),r=e.parent().find('[role="presenter"]');t.css("width",gj.core.width(r[0])),t.show(),gj.dropdown.methods.setListPosition(r[0],t[0],n),i.html(n.icons.dropup)},close:function(e,t){var n=e.data();e.parent().find('[role="expander"]').html(n.icons.dropdown),t.hide()},select:function(e,t){var n=e.data(),i=$("body").children('[role="list"][guid="'+e.attr("data-guid")+'"]'),r=i.children('li[value="'+t+'"]'),o=gj.dropdown.methods.getRecordByValue(e,t);return o&&(i.children("li").removeClass(n.style.active),r.addClass(n.style.active),e[0].value=t,e.next('[role="presenter"]').find('[role="display"]').html(o[n.textField]),gj.dropdown.events.change(e)),gj.dropdown.methods.close(e,i),e},getRecordByValue:function(e,t){var n,i=e.data(),r=void 0;for(n=0;n<i.records.length;n++)if(i.records[n][i.valueField]===t){r=i.records[n];break}return r},value:function(e,t){return void 0===t?e.val():(gj.dropdown.methods.select(e,t),e)},destroy:function(e){var t=e.data(),n=e.parent('div[role="wrapper"]');return t&&(e.xhr&&e.xhr.abort(),e.off(),e.removeData(),e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-dropdown"),e.removeClass(),n.length>0&&(n.children('[role="presenter"]').remove(),n.children('[role="list"]').remove(),e.unwrap()),e.show()),$tree}},gj.dropdown.events={/**
     * Triggered when the dropdown value is changed.
     *
     * @event change
     * @param {object} e - event data
     * @example sample <!-- dropdown, materialicons -->
     * <select id="dropdown" width="200">
     *     <option value="1">One</option>
     *     <option value="2" selected>Two</option>
     *     <option value="3">Three</option>
     * </select>
     * <script>
     *     $('#dropdown').dropdown({
     *         change: function (e) {
     *             alert('Change is fired');
     *         }
     *     });
     * </script>
     */
change:function(e){return e.triggerHandler("change")},/**
     * Event fires after the loading of the data in the dropdown.
     * @event dataBound
     * @param {object} e - event data
     * @example sample <!-- dropdown, materialicons -->
     * <select id="dropdown" width="200">
     *     <option value="1">One</option>
     *     <option value="2" selected>Two</option>
     *     <option value="3">Three</option>
     * </select>
     * <script>
     *     $('#dropdown').dropdown({
     *         dataBound: function (e) {
     *             alert('dataBound is fired.');
     *         }
     *     });
     * </script>
     */
dataBound:function(e){return e.triggerHandler("dataBound")}},gj.dropdown.widget=function(e,t){var n=this,i=gj.dropdown.methods;/** Gets or sets the value of the DropDown.
     * @method
     * @param {string} value - The value that needs to be selected.
     * @return string
     * @example Get <!-- dropdown, materialicons -->
     * <button class="gj-button-md" onclick="alert($dropdown.value())">Get Value</button>
     * <hr/>
     * <select id="dropdown" width="200">
     *     <option value="1">One</option>
     *     <option value="2" selected>Two</option>
     *     <option value="3">Three</option>
     * </select>
     * <script>
     *     var $dropdown = $('#dropdown').dropdown();
     * </script>
     * @example Set <!-- dropdown, materialicons -->
     * <button class="gj-button-md" onclick="$dropdown.value('3')">Set Value</button>
     * <hr/>
     * <select id="dropdown" width="200">
     *     <option value="1">One</option>
     *     <option value="2" selected>Two</option>
     *     <option value="3">Three</option>
     * </select>
     * <script>
     *     var $dropdown = $('#dropdown').dropdown();
     * </script>
     */
/** Remove dropdown functionality from the element.
     * @method
     * @return jquery element
     * @example sample <!-- dropdown, materialicons -->
     * <button class="gj-button-md" onclick="dropdown.destroy()">Destroy</button>
     * <select id="dropdown" width="200">
     *     <option value="1">One</option>
     *     <option value="2" selected>Two</option>
     *     <option value="3">Three</option>
     * </select>
     * <script>
     *     var dropdown = $('#dropdown').dropdown();
     * </script>
     */
return n.value=function(e){return i.value(this,e)},n.enable=function(){return i.enable(this)},n.disable=function(){return i.disable(this)},n.destroy=function(){return i.destroy(this)},$.extend(e,n),"true"!==e.attr("data-dropdown")&&i.init.call(e,t),e},gj.dropdown.widget.prototype=new gj.widget,gj.dropdown.widget.constructor=gj.dropdown.widget,gj.dropdown.widget.prototype.getHTMLConfig=gj.dropdown.methods.getHTMLConfig,function(e){e.fn.dropdown=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.dropdown.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.dropdown.widget(this,e)}}}(jQuery),/* global window alert jQuery gj */
/**
  * @widget DatePicker
  * @plugin Base
  */
gj.datepicker={plugins:{}},gj.datepicker.config={base:{/** Whether to display dates in other months at the start or end of the current month.
         * @additionalinfo Set to true by default for Bootstrap.
         * @type Boolean
         * @default false
         * @example True <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    var datepicker = $('#datepicker').datepicker({ 
         *        showOtherMonths: true
         *    });
         * </script>
         * @example False <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *     $('#datepicker').datepicker({
         *         showOtherMonths: false
         *     });
         * </script>
         */
showOtherMonths:!1,/** Whether days in other months shown before or after the current month are selectable.
         * This only applies if the showOtherMonths option is set to true.
         * @type Boolean
         * @default true
         * @example True <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        showOtherMonths: true,
         *        selectOtherMonths: true
         *    });
         * </script>
         * @example False <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *     $('#datepicker').datepicker({ 
         *        showOtherMonths: true,
         *        selectOtherMonths: false
         *     });
         * </script>
         */
selectOtherMonths:!0,/** The width of the datepicker.
         * @type number
         * @default undefined
         * @example JS.Config <!-- datepicker -->
         * <input id="datepicker" />
         * <script>
         *    $('#datepicker').datepicker({ width: 312 });
         * </script>
         * @example HTML.Config <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker();
         * </script>
         */
width:void 0,/** The minimum selectable date. When not set, there is no minimum.
         * @additionalinfo If the minDate is set by string, then the date in the string needs to follow the format specified by the 'format' configuration option.
         * @type Date|String|Function
         * @default undefined
         * @example Today <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    var today, datepicker;
         *    today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
         *    datepicker = $('#datepicker').datepicker({
         *        minDate: today
         *    });
         * </script>
         * @example Yesterday <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *     $('#datepicker').datepicker({
         *        minDate: function() {
         *            var date = new Date();
         *            date.setDate(date.getDate()-1);
         *            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
         *        }
         *     });
         * </script>
         * @example Bootstrap <!-- bootstrap, datepicker -->
         * <input id="datepicker" width="220" />
         * <script>
         *     $('#datepicker').datepicker({
         *        format: 'yyyy-mm-dd',
         *        value: '2017-12-15',
         *        minDate: '2017-12-12',
         *        uiLibrary: 'bootstrap'
         *     });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *     $('#datepicker').datepicker({
         *        value: '12/15/2017',
         *        minDate: '12/12/2017',
         *        uiLibrary: 'bootstrap4'
         *     });
         * </script>
         */
minDate:void 0,/** The maximum selectable date. When not set, there is no maximum
         * @type Date|String|Function
         * @default undefined
         * @example Today <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    var today, datepicker;
         *    today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
         *    datepicker = $('#datepicker').datepicker({
         *        maxDate: today
         *    });
         * </script>
         * @example Tomorrow <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *     $('#datepicker').datepicker({ 
         *        maxDate: function() {
         *            var date = new Date();
         *            date.setDate(date.getDate()+1);
         *            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
         *        }
         *     });
         * </script>
         */
maxDate:void 0,/** Specifies the format, which is used to format the value of the DatePicker displayed in the input.
         * @additionalinfo <b>d</b> - Day of the month as digits; no leading zero for single-digit days.<br/>
         * <b>dd</b> - Day of the month as digits; leading zero for single-digit days.<br/>
         * <b>ddd</b> - Day of the week as a three-letter abbreviation.<br/>
         * <b>dddd</b> - Day of the week as its full name.<br/>
         * <b>m</b> - Month as digits; no leading zero for single-digit months.<br/>
         * <b>mm</b> - Month as digits; leading zero for single-digit months.<br/>
         * <b>mmm</b> - Month as a three-letter abbreviation.<br/>
         * <b>mmmm</b> - Month as its full name.<br/>
         * <b>yy</b> - Year as last two digits; leading zero for years less than 10.<br/>
         * <b>yyyy</b> - Year represented by four digits.<br/>
         * @type String
         * @default 'mm/dd/yyyy'
         * @example Sample <!-- datepicker -->
         * <input id="datepicker" value="2017-25-07" width="312" />
         * <script>
         *     $('#datepicker').datepicker({ format: 'yyyy-dd-mm' });
         * </script>
         * @example Short.Month.Format <!-- datepicker -->
         * <input id="datepicker" value="10 Oct 2017" width="312" />
         * <script>
         *     $('#datepicker').datepicker({ format: 'dd mmm yyyy' });
         * </script>
         * @example Long.Month.Format <!-- datepicker -->
         * <input id="datepicker" value="10 October 2017" width="312" />
         * <script>
         *     $('#datepicker').datepicker({ format: 'dd mmmm yyyy' });
         * </script>
         */
format:"mm/dd/yyyy",/** The name of the UI library that is going to be in use.
         * @additionalinfo The css file for bootstrap should be manually included if you use bootstrap.
         * @type (materialdesign|bootstrap|bootstrap4)
         * @default materialdesign
         * @example MaterialDesign <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    var datepicker = $('#datepicker').datepicker({ uiLibrary: 'materialdesign' });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, datepicker -->
         * <input id="datepicker" width="220" />
         * <script>
         *     $('#datepicker').datepicker({ uiLibrary: 'bootstrap' });
         * </script>
         * @example Bootstrap.4.Material.Icons <!-- bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *     $('#datepicker').datepicker({ uiLibrary: 'bootstrap4', iconsLibrary: 'materialicons' });
         * </script>
         * @example Bootstrap.4.FontAwesome <!-- fontawesome, bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *     $('#datepicker').datepicker({ uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome' });
         * </script>
         */
uiLibrary:"materialdesign",/** The name of the icons library that is going to be in use. Currently we support Material Icons, Font Awesome and Glyphicons.
         * @additionalinfo If you use Bootstrap 3 as uiLibrary, then the iconsLibrary is set to Glyphicons by default.<br/>
         * If you use Material Design as uiLibrary, then the iconsLibrary is set to Material Icons by default.<br/>
         * The css files for Material Icons, Font Awesome or Glyphicons should be manually included to the page where the grid is in use.
         * @type (materialicons|fontawesome|glyphicons)
         * @default 'materialicons'
         * @example Bootstrap.Font.Awesome <!-- bootstrap, fontawesome, datepicker -->
         * <input id="datepicker" width="220" />
         * <script>
         *     $('#datepicker').datepicker({
         *         uiLibrary: 'bootstrap',
         *         iconsLibrary: 'fontawesome'
         *     });
         * </script>
         * @example Bootstrap.4.Font.Awesome <!-- bootstrap4, fontawesome, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *     $('#datepicker').datepicker({
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome'
         *     });
         * </script>
         */
iconsLibrary:"materialicons",/** The initial datepicker value.
         * @type String
         * @default undefined
         * @example Javascript <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        value: '01/01/2018'
         *    });
         * </script>
         * @example HTML <!-- datepicker -->
         * <input id="datepicker" width="312" value="01/01/2018" />
         * <script>
         *     $('#datepicker').datepicker();
         * </script>
         */
value:void 0,/** Day of the week start. 0 (Sunday) to 6 (Saturday)
         * @type Number
         * @default 0
         * @example Monday <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        weekStartDay: 1
         *    });
         * </script>
         * @example Saturday <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        weekStartDay: 6
         *    });
         * </script>
         */
weekStartDay:0,/** An array or function that will be used to determine which dates to be disabled for selection by the widget.
         * @type Array|Function
         * @default undefined
         * @example Array <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        value: '11/10/2017',
         *        disableDates: [new Date(2017,10,11), '11/12/2017']
         *    });
         * </script>
         * @example Function <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        value: '11/11/2017',
         *        disableDates:  function (date) {
         *            var disabled = [10,15,20,25];
         *            if (disabled.indexOf(date.getDate()) == -1 ) {
         *                return true;
         *            } else {
         *                return false;
         *            }
         *        }
         *    });
         * </script>
         */
disableDates:void 0,/** An array that will be used to determine which days of week to be disabled for selection by the widget.
         * The array needs to contains only numbers where 0 is Sunday, 1 is Monday and etc.
         * @type Array
         * @default undefined
         * @example Saturday.Sunday <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        disableDaysOfWeek: [0, 6]
         *    });
         * </script>
         */
disableDaysOfWeek:void 0,/** Whether to display week number in year on the left side of the calendar.
         * @type Boolean
         * @default false
         * @example Material.Design <!-- datepicker -->
         * <input id="datepicker" width="356" />
         * <script>
         *    $('#datepicker').datepicker({ calendarWeeks: true, modal: true, footer: true });
         * </script>
         * @example Bootstrap <!-- datepicker, bootstrap -->
         * <input id="datepicker" width="220" />
         * <script>
         *    $('#datepicker').datepicker({ calendarWeeks: true, uiLibrary: 'bootstrap' });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *    $('#datepicker').datepicker({ calendarWeeks: true, uiLibrary: 'bootstrap4' });
         * </script>
         */
calendarWeeks:!1,/** Whether to enable keyboard navigation.
         * @type Boolean
         * @default true
         * @example Material.Design <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        keyboardNavigation: true
         *    });
         * </script>
         * @example Material.Design.Modal <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({ keyboardNavigation: true, modal: true, header: true, footer: true });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *    $('#datepicker').datepicker({
         *        uiLibrary: 'bootstrap4',
         *        keyboardNavigation: true,
         *        showOtherMonths: true
         *    });
         * </script>
         */
keyboardNavigation:!0,/** The language that needs to be in use.
         * @type string
         * @default 'en-us'
         * @example German <!-- datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    $('#datepicker').datepicker({
         *        locale: 'de-de',
         *        format: 'dd mmm yyyy'
         *    });
         * </script>
         * @example Bulgarian <!-- datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    $('#datepicker').datepicker({
         *        locale: 'bg-bg',
         *        format: 'dd mmm yyyy',
         *        weekStartDay: 1
         *    });
         * </script>
         * @example French <!-- datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    $('#datepicker').datepicker({
         *        locale: 'fr-fr',
         *        format: 'dd mmm yyyy'
         *    });
         * </script>
         * @example Brazil <!-- datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    $('#datepicker').datepicker({
         *        locale: 'pt-br',
         *        format: 'dd mmm yyyy'
         *    });
         * </script>
         * @example Russian <!-- datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    $('#datepicker').datepicker({
         *        locale: 'ru-ru',
         *        format: 'dd mmm yyyy'
         *    });
         * </script>
         * @example Spanish <!-- datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    $('#datepicker').datepicker({
         *        locale: 'es-es',
         *        format: 'dd/mm/yyyy'
         *    });
         * </script>
         * @example Italian <!-- datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    $('#datepicker').datepicker({
         *        locale: 'it-it',
         *        format: 'dd/mm/yyyy'
         *    });
         * </script>
         */
locale:"en-us",icons:{/** datepicker icon definition.
             * @alias icons.rightIcon
             * @type String
             * @default '<i class="gj-icon event" />'
             * @example Custom.Material.Icon <!-- materialicons, datepicker -->
             * <input id="datepicker" width="312" />
             * <script>
             *     $('#datepicker').datepicker({
             *         icons: { 
             *             rightIcon: '<i class="material-icons">date_range</i>'
             *         }
             *     });
             * </script>
             * @example Custom.Glyphicon.Icon <!-- bootstrap, datepicker -->
             * <input id="datepicker" width="220" />
             * <script>
             *     $('#datepicker').datepicker({
             *         uiLibrary: 'bootstrap',
             *         icons: {
             *             rightIcon: '<span class="glyphicon glyphicon-chevron-down"></span>'
             *         }
             *     });
             * </script>
             * @example Bootstrap.4 <!-- bootstrap4, materialicons, datepicker -->
             * <input id="datepicker" width="234" />
             * <script>
             *     $('#datepicker').datepicker({
             *         uiLibrary: 'bootstrap4',
             *         icons: {
             *             rightIcon: '<i class="material-icons">date_range</i>'
             *         }
             *     });
             * </script>
             */
rightIcon:'<i class="gj-icon">event</i>',previousMonth:'<i class="gj-icon chevron-left"></i>',nextMonth:'<i class="gj-icon chevron-right"></i>'},fontSize:void 0,/** The size of the datepicker input.
         * @type 'small'|'default'|'large'
         * @default 'default'
         * @example Bootstrap.4 <!-- bootstrap4, datepicker -->
         * <p><label for="datepicker-small">Small Size:</label> <input id="datepicker-small" width="234" value="03/20/2018" /></p>
         * <p><label for="datepicker-default">Default Size:</label> <input id="datepicker-default" width="234" value="03/20/2018" /></p>
         * <p><label for="datepicker-large">Large Size:</label> <input id="datepicker-large" width="234" value="03/20/2018" /></p>
         * <script>
         *     $('#datepicker-small').datepicker({ uiLibrary: 'bootstrap4', size: 'small' });
         *     $('#datepicker-default').datepicker({ uiLibrary: 'bootstrap4', size: 'default' });
         *     $('#datepicker-large').datepicker({ uiLibrary: 'bootstrap4', size: 'large' });
         * </script>
         * @example Bootstrap.4.Font.Awesome <!-- bootstrap4, fontawesome, datepicker -->
         * <p><label for="datepicker-small">Small Size:</label> <input id="datepicker-small" width="234" value="03/20/2018" /></p>
         * <p><label for="datepicker-default">Default Size:</label> <input id="datepicker-default" width="234" value="03/20/2018" /></p>
         * <p><label for="datepicker-large">Large Size:</label> <input id="datepicker-large" width="234" value="03/20/2018" /></p>
         * <script>
         *     $('#datepicker-small').datepicker({ uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'small' });
         *     $('#datepicker-default').datepicker({ uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'default' });
         *     $('#datepicker-large').datepicker({ uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'large' });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, datepicker -->
         * <p><label for="datepicker-small">Small Size:</label> <input id="datepicker-small" width="220" value="03/20/2018" /></p>
         * <p><label for="datepicker-default">Default Size:</label> <input id="datepicker-default" width="220" value="03/20/2018" /></p>
         * <p><label for="datepicker-large">Large Size:</label> <input id="datepicker-large" width="220" value="03/20/2018" /></p>
         * <script>
         *     $('#datepicker-small').datepicker({ uiLibrary: 'bootstrap', size: 'small' });
         *     $('#datepicker-default').datepicker({ uiLibrary: 'bootstrap', size: 'default' });
         *     $('#datepicker-large').datepicker({ uiLibrary: 'bootstrap', size: 'large' });
         * </script>
         * @example Material.Design <!-- datepicker -->
         * <p><label for="datepicker-small">Small Size:</label> <input id="datepicker-small" width="276" value="03/20/2018" /></p>
         * <p><label for="datepicker-default">Default Size:</label> <input id="datepicker-default" width="276" value="03/20/2018" /></p>
         * <p><label for="datepicker-large">Large Size:</label> <input id="datepicker-large" width="276" value="03/20/2018" /></p>
         * <script>
         *     $('#datepicker-small').datepicker({ size: 'small' });
         *     $('#datepicker-default').datepicker({ size: 'default' });
         *     $('#datepicker-large').datepicker({ size: 'large' });
         * </script>
         */
size:"default",/** If set to true, the datepicker will have modal behavior.
         * @type Boolean
         * @default false
         * @example Material.Design <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({ modal: true });
         * </script>
         * @example Bootstrap <!-- bootstrap, datepicker -->
         * <input id="datepicker" width="220" />
         * <script>
         *    $('#datepicker').datepicker({ uiLibrary: 'bootstrap', modal: true, header: true, footer: true });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *    $('#datepicker').datepicker({ uiLibrary: 'bootstrap4', modal: true, header: true, footer: true });
         * </script>
         */
modal:!1,/** If set to true, add header to the datepicker.
         * @type Boolean
         * @default false
         * @example True <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({ header: true, modal: true, footer: true });
         * </script>
         * @example False <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({ header: false });
         * </script>
         */
header:!1,/** If set to true, add footer with ok and cancel buttons to the datepicker.
         * @type Boolean
         * @default false
         * @example True <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({ footer: true, modal: true, header: true });
         * </script>
         * @example False <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({ footer: false });
         * </script>
         */
footer:!1,style:{modal:"gj-modal",wrapper:"gj-datepicker gj-datepicker-md gj-unselectable",input:"gj-textbox-md",calendar:"gj-picker gj-picker-md datepicker gj-unselectable",footer:"",button:"gj-button-md"}},bootstrap:{style:{wrapper:"gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",input:"form-control",calendar:"gj-picker gj-picker-bootstrap datepicker gj-unselectable",footer:"modal-footer",button:"btn btn-default"},iconsLibrary:"glyphicons",showOtherMonths:!0},bootstrap4:{style:{wrapper:"gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",input:"form-control",calendar:"gj-picker gj-picker-bootstrap datepicker gj-unselectable",footer:"modal-footer",button:"btn btn-default"},showOtherMonths:!0},fontawesome:{icons:{rightIcon:'<i class="fa fa-calendar" aria-hidden="true"></i>',previousMonth:'<i class="fa fa-chevron-left" aria-hidden="true"></i>',nextMonth:'<i class="fa fa-chevron-right" aria-hidden="true"></i>'}},glyphicons:{icons:{rightIcon:'<span class="glyphicon glyphicon-calendar"></span>',previousMonth:'<span class="glyphicon glyphicon-chevron-left"></span>',nextMonth:'<span class="glyphicon glyphicon-chevron-right"></span>'}}},gj.datepicker.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"datepicker"),this.attr("data-datepicker","true"),gj.datepicker.methods.initialize(this,this.data()),this},initialize:function(e,t){var n,i,r=e.parent('div[role="wrapper"]');i=$("bootstrap"===t.uiLibrary?'<span class="input-group-addon">'+t.icons.rightIcon+"</span>":"bootstrap4"===t.uiLibrary?'<span class="input-group-append"><button class="btn btn-outline-secondary border-left-0" type="button">'+t.icons.rightIcon+"</button></span>":t.icons.rightIcon),i.attr("role","right-icon"),0===r.length?(r=$('<div role="wrapper" />').addClass(t.style.wrapper),// The css class needs to be added before the wrapping, otherwise doesn't work.
e.wrap(r)):r.addClass(t.style.wrapper),r=e.parent('div[role="wrapper"]'),t.width&&r.css("width",t.width),e.val(t.value).addClass(t.style.input).attr("role","input"),t.fontSize&&e.css("font-size",t.fontSize),"bootstrap"===t.uiLibrary||"bootstrap4"===t.uiLibrary?"small"===t.size?(r.addClass("input-group-sm"),e.addClass("form-control-sm")):"large"===t.size&&(r.addClass("input-group-lg"),e.addClass("form-control-lg")):"small"===t.size?r.addClass("small"):"large"===t.size&&r.addClass("large"),i.on("click",function(n){$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]').is(":visible")?gj.datepicker.methods.close(e):gj.datepicker.methods.open(e,t)}),r.append(i),n=gj.datepicker.methods.createCalendar(e,t),!0!==t.footer&&(e.on("blur",function(){e.timeout=setTimeout(function(){gj.datepicker.methods.close(e)},500)}),n.mousedown(function(){return clearTimeout(e.timeout),e.focus(),!1}),n.on("click",function(){clearTimeout(e.timeout),e.focus()})),t.keyboardNavigation&&$(document).on("keydown",gj.datepicker.methods.createKeyDownHandler(e,n,t))},createCalendar:function(e,t){var n,i,r,o,a,s=$('<div role="calendar" type="month"/>').addClass(t.style.calendar).attr("guid",e.attr("data-guid"));return t.fontSize&&s.css("font-size",t.fontSize),n=gj.core.parseDate(t.value,t.format,t.locale),!n||isNaN(n.getTime())?n=new Date:e.attr("day",n.getFullYear()+"-"+n.getMonth()+"-"+n.getDate()),s.attr("month",n.getMonth()),s.attr("year",n.getFullYear()),gj.datepicker.methods.renderHeader(e,s,t,n),i=$('<div role="body" />'),s.append(i),t.footer&&(r=$('<div role="footer" class="'+t.style.footer+'" />'),o=$('<button class="'+t.style.button+'">'+gj.core.messages[t.locale].cancel+"</button>"),o.on("click",function(){e.close()}),r.append(o),a=$('<button class="'+t.style.button+'">'+gj.core.messages[t.locale].ok+"</button>"),a.on("click",function(){var n,i,r=s.attr("selectedDay");r?(i=r.split("-"),n=new Date(i[0],i[1],i[2],s.attr("hour")||0,s.attr("minute")||0),gj.datepicker.methods.change(e,s,t,n)):e.close()}),r.append(a),s.append(r)),s.hide(),$("body").append(s),t.modal&&(s.wrapAll('<div role="modal" class="'+t.style.modal+'"/>'),gj.core.center(s)),s},renderHeader:function(e,t,n,i){var r,o,a;n.header&&(r=$('<div role="header" />'),a=$('<div role="year" />').on("click",function(){gj.datepicker.methods.renderDecade(e,t,n),a.addClass("selected"),o.removeClass("selected")}),a.html(gj.core.formatDate(i,"yyyy",n.locale)),r.append(a),o=$('<div role="date" class="selected" />').on("click",function(){gj.datepicker.methods.renderMonth(e,t,n),o.addClass("selected"),a.removeClass("selected")}),o.html(gj.core.formatDate(i,"ddd, mmm dd",n.locale)),r.append(o),t.append(r))},updateHeader:function(e,t,n){e.find('[role="header"] [role="year"]').removeClass("selected").html(gj.core.formatDate(n,"yyyy",t.locale)),e.find('[role="header"] [role="date"]').addClass("selected").html(gj.core.formatDate(n,"ddd, mmm dd",t.locale)),e.find('[role="header"] [role="hour"]').removeClass("selected").html(gj.core.formatDate(n,"HH",t.locale)),e.find('[role="header"] [role="minute"]').removeClass("selected").html(gj.core.formatDate(n,"MM",t.locale))},createNavigation:function(e,t,n,r){var o,a,s=$("<thead/>");for(a=$('<div role="navigator" />'),a.append($("<div>"+r.icons.previousMonth+"</div>").on("click",gj.datepicker.methods.prev(e,r))),a.append($('<div role="period"></div>').on("click",gj.datepicker.methods.changePeriod(e,r))),a.append($("<div>"+r.icons.nextMonth+"</div>").on("click",gj.datepicker.methods.next(e,r))),t.append(a),o=$('<tr role="week-days" />'),r.calendarWeeks&&o.append("<th><div>&nbsp;</div></th>"),i=r.weekStartDay;i<gj.core.messages[r.locale].weekDaysMin.length;i++)o.append("<th><div>"+gj.core.messages[r.locale].weekDaysMin[i]+"</div></th>");for(i=0;i<r.weekStartDay;i++)o.append("<th><div>"+gj.core.messages[r.locale].weekDaysMin[i]+"</div></th>");s.append(o),n.append(s)},renderMonth:function(e,t,n){var i,r,o,a,s,l,d,c,u,p,h,g,f,m,v,y=t.children('[role="body"]'),b=$("<table/>"),w=$("<tbody/>");for(y.off().empty(),gj.datepicker.methods.createNavigation(e,y,b,n),a=parseInt(t.attr("month"),10),s=parseInt(t.attr("year"),10),t.attr("type","month"),t.find('div[role="period"]').text(gj.core.messages[n.locale].monthNames[a]+" "+s),l=new Array(31,28,31,30,31,30,31,31,30,31,30,31),s%4==0&&1900!=s&&(l[1]=29),d=l[a],c=(new Date(s,a,1).getDay()+7-n.weekStartDay)%7,i=0,$row=$("<tr />"),h=gj.datepicker.methods.getPrevMonth(a,s),u=1;u<=c;u++)o=l[h.month]-c+u,v=new Date(h.year,h.month,o),n.calendarWeeks&&1===u&&$row.append('<td class="calendar-week"><div>'+gj.datepicker.methods.getWeekNumber(v)+"</div></td>"),f=$('<td class="other-month" />'),n.showOtherMonths&&(m=$("<div>"+o+"</div>"),f.append(m),n.selectOtherMonths&&gj.datepicker.methods.isSelectable(n,v)?(f.addClass("gj-cursor-pointer").attr("day",o).attr("month",h.month).attr("year",h.year),m.on("click",gj.datepicker.methods.dayClickHandler(e,t,n,v)),m.on("mousedown",function(e){e.stopPropagation()})):f.addClass("disabled")),$row.append(f),i++;for(u>1&&w.append($row),p=new Date,u=1;u<=d;u++)v=new Date(s,a,u),0==i&&($row=$("<tr>"),n.calendarWeeks&&$row.append('<td class="calendar-week"><div>'+gj.datepicker.methods.getWeekNumber(v)+"</div></td>")),f=$('<td day="'+u+'" month="'+a+'" year="'+s+'" />'),s===p.getFullYear()&&a===p.getMonth()&&u===p.getDate()?f.addClass("today"):f.addClass("current-month"),m=$("<div>"+u+"</div>"),gj.datepicker.methods.isSelectable(n,v)?(f.addClass("gj-cursor-pointer"),m.on("click",gj.datepicker.methods.dayClickHandler(e,t,n,v)),m.on("mousedown",function(e){e.stopPropagation()})):f.addClass("disabled"),f.append(m),$row.append(f),7==++i&&(w.append($row),i=0);for(g=gj.datepicker.methods.getNextMonth(a,s),u=1;0!=i;u++)v=new Date(g.year,g.month,u),f=$('<td class="other-month" />'),n.showOtherMonths&&(m=$("<div>"+u+"</div>"),n.selectOtherMonths&&gj.datepicker.methods.isSelectable(n,v)?(f.addClass("gj-cursor-pointer").attr("day",u).attr("month",g.month).attr("year",g.year),m.on("click",gj.datepicker.methods.dayClickHandler(e,t,n,v)),m.on("mousedown",function(e){e.stopPropagation()})):f.addClass("disabled"),f.append(m)),$row.append(f),7==++i&&(w.append($row),i=0);b.append(w),y.append(b),t.attr("selectedDay")&&(r=t.attr("selectedDay").split("-"),v=new Date(r[0],r[1],r[2],t.attr("hour")||0,t.attr("minute")||0),t.find('tbody td[day="'+r[2]+'"][month="'+r[1]+'"]').addClass("selected"),gj.datepicker.methods.updateHeader(t,n,v))},renderYear:function(e,t,n){var i,r,o,a,s=t.find('>[role="body"]>table'),l=s.children("tbody");for(s.children("thead").hide(),i=parseInt(t.attr("year"),10),t.attr("type","year"),t.find('div[role="period"]').text(i),l.empty(),r=0;r<3;r++){for($row=$("<tr />"),o=4*r;o<=4*r+3;o++)a=$("<div>"+gj.core.messages[n.locale].monthShortNames[o]+"</div>"),a.on("click",gj.datepicker.methods.selectMonth(e,t,n,o)),$cell=$("<td></td>").append(a),$row.append($cell);l.append($row)}},renderDecade:function(e,t,n){var i,r,o,a,s,l=t.find('>[role="body"]>table'),d=l.children("tbody");for(l.children("thead").hide(),i=parseInt(t.attr("year"),10),r=i-i%10,t.attr("type","decade"),t.find('div[role="period"]').text(r+" - "+(r+9)),d.empty(),o=r-1;o<=r+10;o+=4){for($row=$("<tr />"),a=o;a<=o+3;a++)s=$("<div>"+a+"</div>"),s.on("click",gj.datepicker.methods.selectYear(e,t,n,a)),$cell=$("<td></td>").append(s),$row.append($cell);d.append($row)}},renderCentury:function(e,t,n){var i,r,o,a,s,l=t.find('>[role="body"]>table'),d=l.children("tbody");for(l.children("thead").hide(),i=parseInt(t.attr("year"),10),r=i-i%100,t.attr("type","century"),t.find('div[role="period"]').text(r+" - "+(r+99)),d.empty(),o=r-10;o<r+100;o+=40){for($row=$("<tr />"),a=o;a<=o+30;a+=10)s=$("<div>"+a+"</div>"),s.on("click",gj.datepicker.methods.selectDecade(e,t,n,a)),$cell=$("<td></td>").append(s),$row.append($cell);d.append($row)}},getWeekNumber:function(e){var t=new Date(e.valueOf());t.setDate(t.getDate()+6),t=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));var n=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t-n)/864e5+1)/7)},getMinDate:function(e){var t;return e.minDate&&("string"==typeof e.minDate?t=gj.core.parseDate(e.minDate,e.format,e.locale):"function"==typeof e.minDate?"string"==typeof(t=e.minDate())&&(t=gj.core.parseDate(t,e.format,e.locale)):"function"==typeof e.minDate.getMonth&&(t=e.minDate)),t},getMaxDate:function(e){var t;return e.maxDate&&("string"==typeof e.maxDate?t=gj.core.parseDate(e.maxDate,e.format,e.locale):"function"==typeof e.maxDate?"string"==typeof(t=e.maxDate())&&(t=gj.core.parseDate(t,e.format,e.locale)):"function"==typeof e.maxDate.getMonth&&(t=e.maxDate)),t},isSelectable:function(e,t){var n,i=!0,r=gj.datepicker.methods.getMinDate(e),o=gj.datepicker.methods.getMaxDate(e);if(r&&t<r?i=!1:o&&t>o&&(i=!1),i){if(e.disableDates)if($.isArray(e.disableDates))for(n=0;n<e.disableDates.length;n++)e.disableDates[n]instanceof Date&&e.disableDates[n].getTime()===t.getTime()?i=!1:"string"==typeof e.disableDates[n]&&gj.core.parseDate(e.disableDates[n],e.format,e.locale).getTime()===t.getTime()&&(i=!1);else e.disableDates instanceof Function&&(i=e.disableDates(t));$.isArray(e.disableDaysOfWeek)&&e.disableDaysOfWeek.indexOf(t.getDay())>-1&&(i=!1)}return i},getPrevMonth:function(e,t){return date=new Date(t,e,1),date.setMonth(date.getMonth()-1),{month:date.getMonth(),year:date.getFullYear()}},getNextMonth:function(e,t){return date=new Date(t,e,1),date.setMonth(date.getMonth()+1),{month:date.getMonth(),year:date.getFullYear()}},prev:function(e,t){return function(){var n,i,r,o,a,s=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]');switch(s.attr("type")){case"month":i=parseInt(s.attr("month"),10),r=parseInt(s.attr("year"),10),n=gj.datepicker.methods.getPrevMonth(i,r),s.attr("month",n.month),s.attr("year",n.year),gj.datepicker.methods.renderMonth(e,s,t);break;case"year":r=parseInt(s.attr("year"),10),s.attr("year",r-1),gj.datepicker.methods.renderYear(e,s,t);break;case"decade":r=parseInt(s.attr("year"),10),o=r-r%10,s.attr("year",o-10),gj.datepicker.methods.renderDecade(e,s,t);break;case"century":r=parseInt(s.attr("year"),10),a=r-r%100,s.attr("year",a-100),gj.datepicker.methods.renderCentury(e,s,t)}}},next:function(e,t){return function(){var n,i,r,o,a,s=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]');switch(s.attr("type")){case"month":i=parseInt(s.attr("month"),10),r=parseInt(s.attr("year"),10),n=gj.datepicker.methods.getNextMonth(i,r),s.attr("month",n.month),s.attr("year",n.year),gj.datepicker.methods.renderMonth(e,s,t);break;case"year":r=parseInt(s.attr("year"),10),s.attr("year",r+1),gj.datepicker.methods.renderYear(e,s,t);break;case"decade":r=parseInt(s.attr("year"),10),o=r-r%10,s.attr("year",o+10),gj.datepicker.methods.renderDecade(e,s,t);break;case"century":r=parseInt(s.attr("year"),10),a=r-r%100,s.attr("year",a+100),gj.datepicker.methods.renderCentury(e,s,t)}}},changePeriod:function(e,t){return function(n){var i=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]');switch(i.attr("type")){case"month":gj.datepicker.methods.renderYear(e,i,t);break;case"year":gj.datepicker.methods.renderDecade(e,i,t);break;case"decade":gj.datepicker.methods.renderCentury(e,i,t)}}},dayClickHandler:function(e,t,n,i){return function(r){return r&&r.stopPropagation(),gj.datepicker.methods.selectDay(e,t,n,i),!0!==n.footer&&!1!==n.autoClose&&gj.datepicker.methods.change(e,t,n,i),e}},change:function(e,t,n,i){var r=(i.getDate(),i.getMonth()),o=i.getFullYear(),a=gj.core.formatDate(i,n.format,n.locale);t.attr("month",r),t.attr("year",o),e.val(a),gj.datepicker.events.change(e),"none"!==window.getComputedStyle(t[0]).display&&gj.datepicker.methods.close(e)},selectDay:function(e,t,n,i){var r=i.getDate(),o=i.getMonth(),a=i.getFullYear();t.attr("selectedDay",a+"-"+o+"-"+r),t.find("tbody td").removeClass("selected"),t.find('tbody td[day="'+r+'"][month="'+o+'"]').addClass("selected"),gj.datepicker.methods.updateHeader(t,n,i),gj.datepicker.events.select(e,"day")},selectMonth:function(e,t,n,i){return function(r){t.attr("month",i),gj.datepicker.methods.renderMonth(e,t,n),gj.datepicker.events.select(e,"month")}},selectYear:function(e,t,n,i){return function(r){t.attr("year",i),gj.datepicker.methods.renderYear(e,t,n),gj.datepicker.events.select(e,"year")}},selectDecade:function(e,t,n,i){return function(r){t.attr("year",i),gj.datepicker.methods.renderDecade(e,t,n),gj.datepicker.events.select(e,"decade")}},open:function(e,t){var n=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]');switch(e.val()&&e.value(e.val()),n.attr("type")){case"month":gj.datepicker.methods.renderMonth(e,n,t);break;case"year":gj.datepicker.methods.renderYear(e,n,t);break;case"decade":gj.datepicker.methods.renderDecade(e,n,t);break;case"century":gj.datepicker.methods.renderCentury(e,n,t)}n.show(),n.closest('div[role="modal"]').show(),t.modal?gj.core.center(n):(gj.core.setChildPosition(e[0],n[0]),e.focus()),clearTimeout(e.timeout),gj.datepicker.events.open(e)},close:function(e){var t=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]');t.hide(),t.closest('div[role="modal"]').hide(),gj.datepicker.events.close(e)},createKeyDownHandler:function(e,t,n){return function(i){var r,o,a,s,l,d,i=i||window.event;"none"!==window.getComputedStyle(t[0]).display&&(d=gj.datepicker.methods.getActiveCell(t),"38"==i.keyCode?(// up
s=d.index(),l=d.closest("tr").prev("tr").find("td:eq("+s+")"),l.is("[day]")||(gj.datepicker.methods.prev(e,n)(),l=t.find("tbody tr").last().find("td:eq("+s+")"),l.is(":empty")&&(l=t.find("tbody tr").last().prev().find("td:eq("+s+")"))),l.is("[day]")&&(l.addClass("focused"),d.removeClass("focused"))):"40"==i.keyCode?(// down
s=d.index(),l=d.closest("tr").next("tr").find("td:eq("+s+")"),l.is("[day]")||(gj.datepicker.methods.next(e,n)(),l=t.find("tbody tr").first().find("td:eq("+s+")"),l.is("[day]")||(l=t.find("tbody tr:eq(1)").find("td:eq("+s+")"))),l.is("[day]")&&(l.addClass("focused"),d.removeClass("focused"))):"37"==i.keyCode?(// left
l=d.prev("td[day]:not(.disabled)"),0===l.length&&(l=d.closest("tr").prev("tr").find("td[day]").last()),0===l.length&&(gj.datepicker.methods.prev(e,n)(),l=t.find("tbody tr").last().find("td[day]").last()),l.length>0&&(l.addClass("focused"),d.removeClass("focused"))):"39"==i.keyCode?(// right
l=d.next("[day]:not(.disabled)"),0===l.length&&(l=d.closest("tr").next("tr").find("td[day]").first()),0===l.length&&(gj.datepicker.methods.next(e,n)(),l=t.find("tbody tr").first().find("td[day]").first()),l.length>0&&(l.addClass("focused"),d.removeClass("focused"))):"13"==i.keyCode?(// enter
a=parseInt(d.attr("day"),10),r=parseInt(d.attr("month"),10),o=parseInt(d.attr("year"),10),gj.datepicker.methods.dayClickHandler(e,t,n,new Date(o,r,a))()):"27"==i.keyCode&&// esc
e.close())}},getActiveCell:function(e){var t=e.find("td[day].focused");return 0===t.length&&(t=e.find("td[day].selected"),0===t.length&&(t=e.find("td[day].today"),0===t.length&&(t=e.find("td[day]:not(.disabled)").first()))),t},value:function(e,t){var n,i,r=e.data();return void 0===t?e.val():(i=gj.core.parseDate(t,r.format,r.locale),i?(n=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]'),gj.datepicker.methods.dayClickHandler(e,n,r,i)()):e.val(""),e)},destroy:function(e){var t=e.data(),n=e.parent(),i=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]');return t&&(e.off(),i.parent('[role="modal"]').length>0&&i.unwrap(),i.remove(),e.removeData(),e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datepicker"),e.removeClass(),n.children('[role="right-icon"]').remove(),e.unwrap()),e}},gj.datepicker.events={/**
     * Triggered when the datepicker value is changed.
     *
     * @event change
     * @param {object} e - event data
     * @example sample <!-- datepicker -->
     * <input id="datepicker" width="312" />
     * <script>
     *     $('#datepicker').datepicker({
     *         change: function (e) {
     *             alert('Change is fired');
     *         }
     *     });
     * </script>
     */
change:function(e){return e.triggerHandler("change")},/**
     * Triggered when new value is selected inside the picker.
     *
     * @event select
     * @param {object} e - event data
     * @param {string} type - The type of the selection. The options are day, month, year or decade.
     * @example sample <!-- datepicker -->
     * <input id="datepicker" width="312" />
     * <p>Click on the month name in order to select another month.</p>
     * <script>
     *     $('#datepicker').datepicker({
     *         modal: true,
     *         header: true,
     *         footer: true,
     *         change: function (e) {
     *             alert('Change is fired');
     *         },
     *         select: function (e, type) {
     *             alert('Select from type of "' + type + '" is fired');
     *         }
     *     });
     * </script>
     */
select:function(e,t){return e.triggerHandler("select",[t])},/**
     * Event fires when the calendar is opened.
     * @event open
     * @param {object} e - event data
     * @example sample <!-- datepicker -->
     * <input id="datepicker" width="312" />
     * <script>
     *     $('#datepicker').datepicker({
     *         modal: true,
     *         open: function (e) {
     *             alert('open is fired.');
     *         }
     *     });
     * </script>
     */
open:function(e){return e.triggerHandler("open")},/**
     * Event fires when the calendar is closed.
     * @event close
     * @param {object} e - event data
     * @example sample <!-- datepicker -->
     * <input id="datepicker" width="312" />
     * <script>
     *     $('#datepicker').datepicker({
     *         modal: true,
     *         close: function (e) {
     *             alert('Close is fired.');
     *         }
     *     });
     * </script>
     */
close:function(e){return e.triggerHandler("close")}},gj.datepicker.widget=function(e,t){var n=this,i=gj.datepicker.methods;/** Gets or sets the value of the datepicker.
     * @method
     * @param {string} value - The value that needs to be selected.
     * @return string | datepicker object
     * @example Get <!-- datepicker -->
     * <button class="gj-button-md" onclick="alert($datepicker.value())">Get Value</button>
     * <hr/>
     * <input id="datepicker" width="312" />
     * <script>
     *     var $datepicker = $('#datepicker').datepicker();
     * </script>
     * @example Set <!-- datepicker -->
     * <button class="gj-button-md" onclick="$datepicker.value('08/01/2017')">Set Value</button>
     * <hr/>
     * <input id="datepicker" width="312" />
     * <script>
     *     var $datepicker = $('#datepicker').datepicker();
     * </script>
     */
/** Remove datepicker functionality from the element.
     * @method
     * @return jquery element
     * @example sample <!-- datepicker -->
     * <button class="gj-button-md" onclick="datepicker.destroy()">Destroy</button>
     * <input id="datepicker" width="312" />
     * <script>
     *     var datepicker = $('#datepicker').datepicker();
     * </script>
     */
/** Open the calendar.
     * @method
     * @return datepicker
     * @example Open.Close <!-- datepicker -->
     * <button class="gj-button-md" onclick="$datepicker.open()">Open</button>
     * <button class="gj-button-md" onclick="$datepicker.close()">Close</button>
     * <hr/>
     * <input id="datepicker" width="312" />
     * <script>
     *     var $datepicker = $('#datepicker').datepicker();
     * </script>
     */
/** Close the calendar.
     * @method
     * @return datepicker
     * @example Open.Close <!-- datepicker -->
     * <button class="gj-button-md" onclick="$datepicker.open()">Open</button>
     * <button class="gj-button-md" onclick="$datepicker.close()">Close</button>
     * <hr/>
     * <input id="datepicker" width="312" />
     * <script>
     *     var $datepicker = $('#datepicker').datepicker();
     * </script>
     */
return n.value=function(e){return i.value(this,e)},n.destroy=function(){return i.destroy(this)},n.open=function(){gj.datepicker.methods.open(this,this.data())},n.close=function(){gj.datepicker.methods.close(this)},$.extend(e,n),"true"!==e.attr("data-datepicker")&&i.init.call(e,t),e},gj.datepicker.widget.prototype=new gj.widget,gj.datepicker.widget.constructor=gj.datepicker.widget,function(e){e.fn.datepicker=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.datepicker.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.datepicker.widget(this,e)}}}(jQuery),/* global window alert jQuery gj */
/**
  * @widget TimePicker
  * @plugin Base
  */
gj.timepicker={plugins:{}},gj.timepicker.config={base:{/** The width of the timepicker.
         * @type number
         * @default undefined
         * @example JS.Config <!-- timepicker -->
         * <input id="timepicker" width="312" />
         * <script>
         *    $('#timepicker').timepicker({ width: 280 });
         * </script>
         * @example HTML.Config <!-- timepicker -->
         * <input id="timepicker" width="312" />
         * <script>
         *    $('#timepicker').timepicker();
         * </script>
         */
width:void 0,/** If set to true, the timepicker will have modal behavior.
         * @type Boolean
         * @default true
         * @example True <!-- timepicker -->
         * <input id="timepicker" width="280" />
         * <script>
         *    $('#timepicker').timepicker({ modal: true });
         * </script>
         * @example False <!-- timepicker -->
         * <input id="timepicker" width="280" />
         * <script>
         *    $('#timepicker').timepicker({ modal: false, header: false, footer: false });
         * </script>
         */
modal:!0,/** If set to true, add header to the timepicker.
         * @type Boolean
         * @default true
         * @example True <!-- timepicker -->
         * <input id="timepicker" width="280" />
         * <script>
         *    $('#timepicker').timepicker({ header: true });
         * </script>
         * @example False <!-- timepicker -->
         * <input id="timepicker" width="280" />
         * <script>
         *    $('#timepicker').timepicker({ header: false, mode: '24hr' });
         * </script>
         */
header:!0,/** If set to true, add footer with ok and cancel buttons to the timepicker.
         * @type Boolean
         * @default true
         * @example True <!-- timepicker -->
         * <input id="timepicker" width="280" />
         * <script>
         *    $('#timepicker').timepicker({ footer: true });
         * </script>
         * @example False <!-- timepicker -->
         * <input id="timepicker" width="280" />
         * <script>
         *    $('#timepicker').timepicker({ footer: false });
         * </script>
         */
footer:!0,/** Specifies the format, which is used to format the value of the timepicker displayed in the input.
         * @additionalinfo <b>M</b> - Minutes; no leading zero for single-digit minutes.<br/>
         * <b>MM</b> - Minutes; leading zero for single-digit minutes.<br/>
         * <b>H</b> - The hour, using a 24-hour clock from 0 to 23; no leading zero for single-digit hours.<br/>
         * <b>HH</b> - The hour, using a 24-hour clock from 0 to 23; leading zero for single-digit hours.<br/>
         * <b>h</b> - The hour, using a 12-hour clock from 1 to 12; no leading zero for single-digit hours.<br/>
         * <b>hh</b> - The hour, using a 12-hour clock from 1 to 12; leading zero for single-digit hours<br/>
         * <b>tt</b> - The AM/PM designator; lowercase.<br/>
         * <b>TT</b> - The AM/PM designator; upercase.<br/>
         * @type String
         * @default 'MM:HH'
         * @example Sample <!-- timepicker -->
         * <input id="timepicker" width="312" value="13.42" />
         * <script>
         *     var timepicker = $('#timepicker').timepicker({
         *         format: 'HH.MM'
         *     });
         * </script>
         */
format:"HH:MM",/** The name of the UI library that is going to be in use.
         * @additionalinfo The css file for bootstrap should be manually included if you use bootstrap.
         * @type (materialdesign|bootstrap|bootstrap4)
         * @default materialdesign
         * @example MaterialDesign <!-- timepicker -->
         * <input id="timepicker" width="312" />
         * <script>
         *    $('#timepicker').timepicker({ uiLibrary: 'materialdesign' });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, timepicker -->
         * <input id="timepicker" width="270" />
         * <script>
         *     $('#timepicker').timepicker({ uiLibrary: 'bootstrap', modal: false, footer: false });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, timepicker -->
         * <input id="timepicker" width="276" />
         * <script>
         *     $('#timepicker').timepicker({ uiLibrary: 'bootstrap4' });
         * </script>
         */
uiLibrary:"materialdesign",/** The initial timepicker value.
         * @type String
         * @default undefined
         * @example Javascript <!-- timepicker -->
         * <input id="timepicker" width="312" />
         * <script>
         *    $('#timepicker').timepicker({
         *        value: '13:42'
         *    });
         * </script>
         * @example HTML <!-- timepicker -->
         * <input id="timepicker" width="312" value="13:42" />
         * <script>
         *     $('#timepicker').timepicker();
         * </script>
         */
value:void 0,/** The timepicker mode. Tells the component to display the picker in ampm (12hr) format or 24hr format.
         * @type ampm|24hr
         * @default 'ampm'
         * @example ampm <!-- timepicker -->
         * <input id="timepicker" width="312" />
         * <script>
         *    $('#timepicker').timepicker({ mode: 'ampm' });
         * </script>
         * @example 24hr <!-- timepicker -->
         * <input id="timepicker" width="312" />
         * <script>
         *     $('#timepicker').timepicker({ mode: '24hr' });
         * </script>
         */
mode:"ampm",/** The language that needs to be in use.
         * @type string
         * @default 'en-us'
         * @example German <!-- timepicker -->
         * <input id="timepicker" width="276" />
         * <script>
         *    $('#timepicker').timepicker({
         *        locale: 'de-de'
         *    });
         * </script>
         * @example Bulgarian <!-- timepicker -->
         * <input id="timepicker" width="276" />
         * <script>
         *    $('#timepicker').timepicker({
         *        locale: 'bg-bg'
         *    });
         * </script>
         * @example French <!-- timepicker -->
         * <input id="timepicker" width="276" />
         * <script>
         *    $('#timepicker').timepicker({
         *        locale: 'fr-fr'
         *    });
         * </script>
         * @example Brazil <!-- timepicker -->
         * <input id="timepicker" width="276" />
         * <script>
         *    $('#timepicker').timepicker({
         *        locale: 'pt-br'
         *    });
         * </script>
         * @example Russian <!-- timepicker -->
         * <input id="timepicker" width="276" />
         * <script>
         *    $('#timepicker').timepicker({
         *        locale: 'ru-ru'
         *    });
         * </script>
         */
locale:"en-us",/** The size of the timepicker input.
         * @type 'small'|'default'|'large'
         * @default 'default'
         * @example Bootstrap.4 <!-- bootstrap4, timepicker -->
         * <p><label for="timepicker-small">Small Size:</label> <input id="timepicker-small" width="220" value="15:20" /></p>
         * <p><label for="timepicker-default">Default Size:</label> <input id="timepicker-default" width="220" value="15:20" /></p>
         * <p><label for="timepicker-large">Large Size:</label> <input id="timepicker-large" width="220" value="15:20" /></p>
         * <script>
         *     $('#timepicker-small').timepicker({ uiLibrary: 'bootstrap4', size: 'small' });
         *     $('#timepicker-default').timepicker({ uiLibrary: 'bootstrap4', size: 'default' });
         *     $('#timepicker-large').timepicker({ uiLibrary: 'bootstrap4', size: 'large' });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, timepicker -->
         * <p><label for="timepicker-small">Small Size:</label> <input id="timepicker-small" width="220" value="15:20" /></p>
         * <p><label for="timepicker-default">Default Size:</label> <input id="timepicker-default" width="220" value="15:20" /></p>
         * <p><label for="timepicker-large">Large Size:</label> <input id="timepicker-large" width="220" value="15:20" /></p>
         * <script>
         *     $('#timepicker-small').timepicker({ uiLibrary: 'bootstrap', size: 'small' });
         *     $('#timepicker-default').timepicker({ uiLibrary: 'bootstrap', size: 'default' });
         *     $('#timepicker-large').timepicker({ uiLibrary: 'bootstrap', size: 'large' });
         * </script>
         * @example Material.Design <!-- timepicker -->
         * <p><label for="timepicker-small">Small Size:</label> <input id="timepicker-small" width="220" value="15:20" /></p>
         * <p><label for="timepicker-default">Default Size:</label> <input id="timepicker-default" width="220" value="15:20" /></p>
         * <p><label for="timepicker-large">Large Size:</label> <input id="timepicker-large" width="220" value="15:20" /></p>
         * <script>
         *     $('#timepicker-small').timepicker({ size: 'small' });
         *     $('#timepicker-default').timepicker({ size: 'default' });
         *     $('#timepicker-large').timepicker({ size: 'large' });
         * </script>
         */
size:"default",icons:{rightIcon:'<i class="gj-icon clock" />'},style:{modal:"gj-modal",wrapper:"gj-timepicker gj-timepicker-md gj-unselectable",input:"gj-textbox-md",clock:"gj-picker gj-picker-md timepicker",footer:"",button:"gj-button-md"}},bootstrap:{style:{wrapper:"gj-timepicker gj-timepicker-bootstrap gj-unselectable input-group",input:"form-control",clock:"gj-picker gj-picker-bootstrap timepicker",footer:"modal-footer",button:"btn btn-default"},iconsLibrary:"glyphicons"},bootstrap4:{style:{wrapper:"gj-timepicker gj-timepicker-bootstrap gj-unselectable input-group",input:"form-control border",clock:"gj-picker gj-picker-bootstrap timepicker",footer:"modal-footer",button:"btn btn-default"}}},gj.timepicker.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"timepicker"),this.attr("data-timepicker","true"),gj.timepicker.methods.initialize(this,this.data()),gj.timepicker.methods.createClock(this),this},initialize:function(e,t){var n,i=e.parent('div[role="wrapper"]');n=$("bootstrap"===t.uiLibrary?'<span class="input-group-addon">'+t.icons.rightIcon+"</span>":"bootstrap4"===t.uiLibrary?'<span class="input-group-append"><button class="btn btn-outline-secondary border-left-0 border" type="button">'+t.icons.rightIcon+"</button></span>":t.icons.rightIcon),n.attr("role","right-icon"),0===i.length?(i=$('<div role="wrapper" />').addClass(t.style.wrapper),// The css class needs to be added before the wrapping, otherwise doesn't work.
e.wrap(i)):i.addClass(t.style.wrapper),i=e.parent('div[role="wrapper"]'),t.width&&i.css("width",t.width),e.val(t.value).addClass(t.style.input).attr("role","input"),
//data.fontSize && $timepicker.css('font-size', data.fontSize);
"bootstrap"===t.uiLibrary||"bootstrap4"===t.uiLibrary?"small"===t.size?(i.addClass("input-group-sm"),e.addClass("form-control-sm")):"large"===t.size&&(i.addClass("input-group-lg"),e.addClass("form-control-lg")):"small"===t.size?i.addClass("small"):"large"===t.size&&i.addClass("large"),n.on("click",function(t){$("body").find('[role="clock"][guid="'+e.attr("data-guid")+'"]').is(":visible")?gj.timepicker.methods.close(e):gj.timepicker.methods.open(e)}),!1===t.footer&&e.on("blur",function(){e.timeout=setTimeout(function(){e.mouseMove||gj.timepicker.methods.close(e)},500)}),i.append(n)},initMouse:function(e,t,n,i){e.off(),e.on("mousedown",gj.timepicker.methods.mouseDownHandler(t,n)),e.on("mousemove",gj.timepicker.methods.mouseMoveHandler(t,n,i)),e.on("mouseup",gj.timepicker.methods.mouseUpHandler(t,n,i))},createClock:function(e){var t,n=e.data(),i=$('<div role="clock" />').addClass(n.style.clock).attr("guid",e.attr("data-guid")),r=$('<div role="hour" />'),o=$('<div role="minute" />'),a=$('<div role="header" />'),s=$('<div role="mode" />'),l=$('<div role="body" />'),d=$('<button class="'+n.style.button+'">'+gj.core.messages[n.locale].ok+"</button>"),c=$('<button class="'+n.style.button+'">'+gj.core.messages[n.locale].cancel+"</button>"),u=$('<div role="footer" class="'+n.style.footer+'" />');return t=gj.core.parseDate(n.value,n.format,n.locale),!t||isNaN(t.getTime())?t=new Date:e.attr("hours",t.getHours()),gj.timepicker.methods.initMouse(l,e,i,n),n.header&&(r.on("click",function(){gj.timepicker.methods.renderHours(e,i,n)}),o.on("click",function(){gj.timepicker.methods.renderMinutes(e,i,n)}),a.append(r).append(":").append(o),"ampm"===n.mode&&(s.append($('<span role="am">'+gj.core.messages[n.locale].am+"</span>").on("click",function(){var t=gj.timepicker.methods.getHour(i);i.attr("mode","am"),$(this).addClass("selected"),$(this).parent().children('[role="pm"]').removeClass("selected"),t>=12&&i.attr("hour",t-12),n.modal||(clearTimeout(e.timeout),e.focus())})),s.append("<br />"),s.append($('<span role="pm">'+gj.core.messages[n.locale].pm+"</span>").on("click",function(){var t=gj.timepicker.methods.getHour(i);i.attr("mode","pm"),$(this).addClass("selected"),$(this).parent().children('[role="am"]').removeClass("selected"),t<12&&i.attr("hour",t+12),n.modal||(clearTimeout(e.timeout),e.focus())})),a.append(s)),i.append(a)),i.append(l),n.footer&&(c.on("click",function(){e.close()}),u.append(c),d.on("click",gj.timepicker.methods.setTime(e,i)),u.append(d),i.append(u)),i.hide(),$("body").append(i),n.modal&&(i.wrapAll('<div role="modal" class="'+n.style.modal+'"/>'),gj.core.center(i)),i},getHour:function(e){return parseInt(e.attr("hour"),10)||0},getMinute:function(e){return parseInt(e.attr("minute"),10)||0},setTime:function(e,t){return function(){var n=gj.timepicker.methods.getHour(t),i=gj.timepicker.methods.getMinute(t),r=t.attr("mode"),o=new Date(0,0,0,12===n&&"am"===r?0:n,i),a=e.data(),s=gj.core.formatDate(o,a.format,a.locale);e.value(s),e.close()}},getPointerValue:function(e,t,n){var i,r,o=Math.atan2(128-e,128-t)/Math.PI*180;switch(o<0&&(o=360+o),n){case"ampm":return i=12-Math.round(12*o/360),0===i?12:i;case"24hr":return r=Math.sqrt(Math.pow(128-e,2)+Math.pow(128-t,2)),i=12-Math.round(12*o/360),0===i&&(i=12),r<96&&(i=12===i?0:i+12),i;case"minutes":return i=Math.round(60-60*o/360),60===i?0:i}},updateArrow:function(e,t,n,i){var r,o,a=t.mouseX(e),s=t.mouseY(e),l=window.scrollY||window.pageYOffset||0,d=window.scrollX||window.pageXOffset||0;r=e.target.getBoundingClientRect(),"hours"==i.dialMode?(o=gj.timepicker.methods.getPointerValue(a-d-r.left,s-l-r.top,i.mode),n.attr("hour","ampm"===i.mode&&"pm"===n.attr("mode")&&o<12?o+12:o)):"minutes"==i.dialMode&&(o=gj.timepicker.methods.getPointerValue(a-d-r.left,s-l-r.top,"minutes"),n.attr("minute",o)),gj.timepicker.methods.update(t,n,i)},update:function(e,t,n){var i,r,o,a,s,l;
// update the arrow
i=gj.timepicker.methods.getHour(t),r=gj.timepicker.methods.getMinute(t),o=t.find('[role="arrow"]'),"hours"==n.dialMode&&(0==i||i>12)&&"24hr"===n.mode?o.css("width","calc(50% - 52px)"):o.css("width","calc(50% - 20px)"),"hours"==n.dialMode?o.css("transform","rotate("+(30*i-90).toString()+"deg)"):o.css("transform","rotate("+(6*r-90).toString()+"deg)"),o.show(),
// update the numbers
a="ampm"===n.mode&&i>12?i-12:0==i?12:i,l=t.find('[role="body"] span'),l.removeClass("selected"),l.filter(function(e){return"hours"==n.dialMode?parseInt($(this).text(),10)==a:parseInt($(this).text(),10)==r}).addClass("selected"),
// update the header
n.header&&(s=t.find('[role="header"]'),s.find('[role="hour"]').text(a),s.find('[role="minute"]').text(gj.core.pad(r)),"ampm"===n.mode&&(i>=12?(s.find('[role="pm"]').addClass("selected"),s.find('[role="am"]').removeClass("selected")):(s.find('[role="am"]').addClass("selected"),s.find('[role="pm"]').removeClass("selected"))))},mouseDownHandler:function(e,t){return function(t){e.mouseMove=!0}},mouseMoveHandler:function(e,t,n){return function(i){e.mouseMove&&gj.timepicker.methods.updateArrow(i,e,t,n)}},mouseUpHandler:function(e,t,n){return function(i){gj.timepicker.methods.updateArrow(i,e,t,n),e.mouseMove=!1,n.modal||(clearTimeout(e.timeout),e.focus()),"hours"==n.dialMode?setTimeout(function(){gj.timepicker.events.select(e,"hour"),gj.timepicker.methods.renderMinutes(e,t,n)},1e3):"minutes"==n.dialMode&&(!0!==n.footer&&!1!==n.autoClose&&gj.timepicker.methods.setTime(e,t)(),gj.timepicker.events.select(e,"minute"))}},renderHours:function(e,t,n){var i,r=t.find('[role="body"]');clearTimeout(e.timeout),r.empty(),i=$('<div role="dial"></div>'),i.append('<div role="arrow" style="transform: rotate(-90deg); display: none;"><div class="arrow-begin"></div><div class="arrow-end"></div></div>'),i.append('<span role="hour" style="transform: translate(54px, -93.5307px);">1</span>'),i.append('<span role="hour" style="transform: translate(93.5307px, -54px);">2</span>'),i.append('<span role="hour" style="transform: translate(108px, 0px);">3</span>'),i.append('<span role="hour" style="transform: translate(93.5307px, 54px);">4</span>'),i.append('<span role="hour" style="transform: translate(54px, 93.5307px);">5</span>'),i.append('<span role="hour" style="transform: translate(6.61309e-15px, 108px);">6</span>'),i.append('<span role="hour" style="transform: translate(-54px, 93.5307px);">7</span>'),i.append('<span role="hour" style="transform: translate(-93.5307px, 54px);">8</span>'),i.append('<span role="hour" style="transform: translate(-108px, 1.32262e-14px);">9</span>'),i.append('<span role="hour" style="transform: translate(-93.5307px, -54px);">10</span>'),i.append('<span role="hour" style="transform: translate(-54px, -93.5307px);">11</span>'),i.append('<span role="hour" style="transform: translate(-1.98393e-14px, -108px);">12</span>'),"24hr"===n.mode&&(i.append('<span role="hour" style="transform: translate(38px, -65.8179px);">13</span>'),i.append('<span role="hour" style="transform: translate(65.8179px, -38px);">14</span>'),i.append('<span role="hour" style="transform: translate(76px, 0px);">15</span>'),i.append('<span role="hour" style="transform: translate(65.8179px, 38px);">16</span>'),i.append('<span role="hour" style="transform: translate(38px, 65.8179px);">17</span>'),i.append('<span role="hour" style="transform: translate(4.65366e-15px, 76px);">18</span>'),i.append('<span role="hour" style="transform: translate(-38px, 65.8179px);">19</span>'),i.append('<span role="hour" style="transform: translate(-65.8179px, 38px);">20</span>'),i.append('<span role="hour" style="transform: translate(-76px, 9.30732e-15px);">21</span>'),i.append('<span role="hour" style="transform: translate(-65.8179px, -38px);">22</span>'),i.append('<span role="hour" style="transform: translate(-38px, -65.8179px);">23</span>'),i.append('<span role="hour" style="transform: translate(-1.3961e-14px, -76px);">00</span>')),r.append(i),t.find('[role="header"] [role="hour"]').addClass("selected"),t.find('[role="header"] [role="minute"]').removeClass("selected"),n.dialMode="hours",gj.timepicker.methods.update(e,t,n)},renderMinutes:function(e,t,n){var i=t.find('[role="body"]');clearTimeout(e.timeout),i.empty(),$dial=$('<div role="dial"></div>'),$dial.append('<div role="arrow" style="transform: rotate(-90deg); display: none;"><div class="arrow-begin"></div><div class="arrow-end"></div></div>'),$dial.append('<span role="hour" style="transform: translate(54px, -93.5307px);">5</span>'),$dial.append('<span role="hour" style="transform: translate(93.5307px, -54px);">10</span>'),$dial.append('<span role="hour" style="transform: translate(108px, 0px);">15</span>'),$dial.append('<span role="hour" style="transform: translate(93.5307px, 54px);">20</span>'),$dial.append('<span role="hour" style="transform: translate(54px, 93.5307px);">25</span>'),$dial.append('<span role="hour" style="transform: translate(6.61309e-15px, 108px);">30</span>'),$dial.append('<span role="hour" style="transform: translate(-54px, 93.5307px);">35</span>'),$dial.append('<span role="hour" style="transform: translate(-93.5307px, 54px);">40</span>'),$dial.append('<span role="hour" style="transform: translate(-108px, 1.32262e-14px);">45</span>'),$dial.append('<span role="hour" style="transform: translate(-93.5307px, -54px);">50</span>'),$dial.append('<span role="hour" style="transform: translate(-54px, -93.5307px);">55</span>'),$dial.append('<span role="hour" style="transform: translate(-1.98393e-14px, -108px);">00</span>'),i.append($dial),t.find('[role="header"] [role="hour"]').removeClass("selected"),t.find('[role="header"] [role="minute"]').addClass("selected"),n.dialMode="minutes",gj.timepicker.methods.update(e,t,n)},open:function(e){var t,n,i=e.data(),r=$("body").find('[role="clock"][guid="'+e.attr("data-guid")+'"]');return t=e.value()?gj.core.parseDate(e.value(),i.format,i.locale):new Date,n=t.getHours(),"ampm"===i.mode&&r.attr("mode",n>12?"pm":"am"),r.attr("hour",n),r.attr("minute",t.getMinutes()),gj.timepicker.methods.renderHours(e,r,i),r.show(),r.closest('div[role="modal"]').show(),i.modal?gj.core.center(r):(gj.core.setChildPosition(e[0],r[0]),e.focus()),gj.timepicker.events.open(e),e},close:function(e){var t=$("body").find('[role="clock"][guid="'+e.attr("data-guid")+'"]');return t.hide(),t.closest('div[role="modal"]').hide(),gj.timepicker.events.close(e),e},value:function(e,t){e.data();return void 0===t?e.val():(e.val(t),gj.timepicker.events.change(e),e)},destroy:function(e){var t=e.data(),n=e.parent(),i=$("body").find('[role="clock"][guid="'+e.attr("data-guid")+'"]');return t&&(e.off(),i.parent('[role="modal"]').length>0&&i.unwrap(),i.remove(),e.removeData(),e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-timepicker"),e.removeClass(),n.children('[role="right-icon"]').remove(),e.unwrap()),e}},gj.timepicker.events={/**
     * Triggered when the timepicker value is changed.
     *
     * @event change
     * @param {object} e - event data
     * @example sample <!-- timepicker -->
     * <input id="timepicker" width="312" />
     * <script>
     *     $('#timepicker').timepicker({
     *         change: function (e) {
     *             alert('Change is fired');
     *         }
     *     });
     * </script>
     */
change:function(e){return e.triggerHandler("change")},/**
     * Triggered when new value is selected inside the picker.
     *
     * @event select
     * @param {object} e - event data
     * @param {string} type - The type of the selection. The options are hour and minute.
     * @example sample <!-- datepicker -->
     * <input id="timepicker" width="312" />
     * <script>
     *     $('#timepicker').timepicker({
     *         modal: true,
     *         header: true,
     *         footer: true,
     *         change: function (e) {
     *             alert('Change is fired');
     *         },
     *         select: function (e, type) {
     *             alert('Select from type of "' + type + '" is fired');
     *         }
     *     });
     * </script>
     */
select:function(e,t){return e.triggerHandler("select",[t])},/**
     * Event fires when the timepicker is opened.
     * @event open
     * @param {object} e - event data
     * @example sample <!-- timepicker -->
     * <input id="timepicker" width="312" />
     * <script>
     *     $('#timepicker').timepicker({
     *         open: function (e) {
     *             alert('open is fired.');
     *         }
     *     });
     * </script>
     */
open:function(e){return e.triggerHandler("open")},/**
     * Event fires when the timepicker is closed.
     * @event close
     * @param {object} e - event data
     * @example sample <!-- timepicker -->
     * <input id="timepicker" width="312" />
     * <script>
     *     $('#timepicker').timepicker({
     *         close: function (e) {
     *             alert('close is fired.');
     *         }
     *     });
     * </script>
     */
close:function(e){return e.triggerHandler("close")}},gj.timepicker.widget=function(e,t){var n=this,i=gj.timepicker.methods;/** Gets or sets the value of the timepicker.
     * @method
     * @param {string} value - The value that needs to be selected.
     * @return string
     * @example Get <!-- timepicker -->
     * <button class="gj-button-md" onclick="alert($timepicker.value())">Get Value</button>
     * <hr/>
     * <input id="timepicker" width="312" />
     * <script>
     *     var $timepicker = $('#timepicker').timepicker();
     * </script>
     * @example Set <!-- timepicker -->
     * <button class="gj-button-md" onclick="$timepicker.value('11:00')">Set Value</button>
     * <hr/>
     * <input id="timepicker" width="312" />
     * <script>
     *     var $timepicker = $('#timepicker').timepicker();
     * </script>
     */
/** Remove timepicker functionality from the element.
     * @method
     * @return jquery element
     * @example sample <!-- timepicker -->
     * <button class="gj-button-md" onclick="timepicker.destroy()">Destroy</button>
     * <input id="timepicker" width="312" />
     * <script>
     *     var timepicker = $('#timepicker').timepicker();
     * </script>
     */
/** Open the clock.
     * @method
     * @return timepicker
     * @example Open.Close <!-- timepicker -->
     * <button class="gj-button-md" onclick="$timepicker.open()">Open</button>
     * <button class="gj-button-md" onclick="$timepicker.close()">Close</button>
     * <hr/>
     * <input id="timepicker" width="312" />
     * <script>
     *     var $timepicker = $('#timepicker').timepicker({ modal: false, header: false, footer: false, mode: '24hr' });
     * </script>
     */
/** Close the clock.
     * @method
     * @return timepicker
     * @example Open.Close <!-- timepicker -->
     * <button class="gj-button-md" onclick="$timepicker.open()">Open</button>
     * <button class="gj-button-md" onclick="$timepicker.close()">Close</button>
     * <hr/>
     * <input id="timepicker" width="312" />
     * <script>
     *     var $timepicker = $('#timepicker').timepicker({ modal: false, header: false, footer: false, mode: '24hr' });
     * </script>
     */
return n.mouseMove=!1,n.value=function(e){return i.value(this,e)},n.destroy=function(){return i.destroy(this)},n.open=function(){return gj.timepicker.methods.open(this)},n.close=function(){return gj.timepicker.methods.close(this)},$.extend(e,n),"true"!==e.attr("data-timepicker")&&i.init.call(e,t),e},gj.timepicker.widget.prototype=new gj.widget,gj.timepicker.widget.constructor=gj.timepicker.widget,function(e){e.fn.timepicker=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.timepicker.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.timepicker.widget(this,e)}}}(jQuery),/* global window alert jQuery gj */
/**
  * @widget DateTimePicker
  * @plugin Base
  */
gj.datetimepicker={plugins:{},messages:{"en-us":{}}},gj.datetimepicker.config={base:{/** The datepicker configuration options. Valid only for datepicker specific configuration options.
         * @additionalinfo All configuration options that exists on the datetimepicker level are going to override the options at datepicker level.
         * @type object
         * @default undefined
         * @example Sample <!-- datetimepicker -->
         * <input id="datetimepicker" width="312" />
         * <script>
         *    $('#datetimepicker').datetimepicker({
         *        datepicker: { showOtherMonths: true, calendarWeeks: true }
         *    });
         * </script>
         */
datepicker:gj.datepicker.config.base,timepicker:gj.timepicker.config.base,/** The name of the UI library that is going to be in use.
         * @additionalinfo The css file for bootstrap should be manually included if you use bootstrap.
         * @type (materialdesign|bootstrap|bootstrap4)
         * @default materialdesign
         * @example MaterialDesign <!-- datetimepicker -->
         * <input id="datetimepicker" width="312" />
         * <script>
         *    $('#datetimepicker').datetimepicker({ uiLibrary: 'materialdesign' });
         * </script>
         * @example MaterialDesign.Modal <!-- datetimepicker -->
         * <input id="datetimepicker" width="312" />
         * <script>
         *    $('#datetimepicker').datetimepicker({ uiLibrary: 'materialdesign', modal: true, footer: true });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, datetimepicker -->
         * <input id="datetimepicker" width="220" />
         * <script>
         *     $('#datetimepicker').datetimepicker({ uiLibrary: 'bootstrap' });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, datetimepicker -->
         * <input id="datetimepicker" width="234" />
         * <script>
         *     $('#datetimepicker').datetimepicker({ uiLibrary: 'bootstrap4', modal: true, footer: true });
         * </script>
         */
uiLibrary:"materialdesign",/** The initial datetimepicker value.
         * @type number
         * @default undefined
         * @example Javascript <!-- datetimepicker -->
         * <input id="datetimepicker" width="300" />
         * <script>
         *    $('#datetimepicker').datetimepicker({ value: '22:10 03/27/2018' });
         * </script>
         * @example HTML <!-- datetimepicker -->
         * <input id="datetimepicker" width="300" value="22:10 03/27/2018" />
         * <script>
         *     $('#datetimepicker').datetimepicker();
         * </script>
         */
value:void 0,/** Specifies the format, which is used to format the value of the DatePicker displayed in the input.
         * @additionalinfo 
         * <b>M</b> - Minutes; no leading zero for single-digit minutes.<br/>
         * <b>MM</b> - Minutes; leading zero for single-digit minutes.<br/>
         * <b>H</b> - The hour, using a 24-hour clock from 0 to 23; no leading zero for single-digit hours.<br/>
         * <b>HH</b> - The hour, using a 24-hour clock from 0 to 23; leading zero for single-digit hours.<br/>
         * <b>h</b> - The hour, using a 12-hour clock from 1 to 12; no leading zero for single-digit hours.<br/>
         * <b>hh</b> - The hour, using a 12-hour clock from 1 to 12; leading zero for single-digit hours<br/>
         * <b>tt</b> - The AM/PM designator; lowercase.<br/>
         * <b>TT</b> - The AM/PM designator; upercase.<br/>
         * <b>d</b> - Day of the month as digits; no leading zero for single-digit days.<br/>
         * <b>dd</b> - Day of the month as digits; leading zero for single-digit days.<br/>
         * <b>ddd</b> - Day of the week as a three-letter abbreviation.<br/>
         * <b>dddd</b> - Day of the week as its full name.<br/>
         * <b>m</b> - Month as digits; no leading zero for single-digit months.<br/>
         * <b>mm</b> - Month as digits; leading zero for single-digit months.<br/>
         * <b>mmm</b> - Month as a three-letter abbreviation.<br/>
         * <b>mmmm</b> - Month as its full name.<br/>
         * <b>yy</b> - Year as last two digits; leading zero for years less than 10.<br/>
         * <b>yyyy</b> - Year represented by four digits.<br/>
         * @type String
         * @default 'HH:MM mm/dd/yyyy'
         * @example Sample <!-- datetimepicker -->
         * <input id="input" value="05:50 2018-27-03" width="312" />
         * <script>
         *     $('#input').datetimepicker({ format: 'HH:MM yyyy-dd-mm' });
         * </script>
         * @example Long.Month.Format <!-- datetimepicker -->
         * <input id="input" value="10 October 2017 05:50" width="312" />
         * <script>
         *     $('#input').datetimepicker({ format: 'dd mmmm yyyy HH:MM' });
         * </script>
         */
format:"HH:MM mm/dd/yyyy",/** The width of the datetimepicker.
         * @type number
         * @default undefined
         * @example JS.Config <!-- datetimepicker -->
         * <input id="input" />
         * <script>
         *    $('#input').datetimepicker({ width: 312 });
         * </script>
         * @example HTML.Config <!-- datetimepicker -->
         * <input id="input" width="312" />
         * <script>
         *    $('#input').datetimepicker();
         * </script>
         */
width:void 0,/** If set to true, the datetimepicker will have modal behavior.
         * @type Boolean
         * @default false
         * @example Material.Design <!-- datetimepicker -->
         * <input id="input" width="312" />
         * <script>
         *    $('#input').datetimepicker({ modal: true });
         * </script>
         * @example Bootstrap <!-- bootstrap, datetimepicker -->
         * <input id="input" width="220" />
         * <script>
         *    $('#input').datetimepicker({ uiLibrary: 'bootstrap', modal: true, footer: true });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, datetimepicker -->
         * <input id="input" width="234" />
         * <script>
         *    $('#input').datetimepicker({ uiLibrary: 'bootstrap4', modal: true, footer: true });
         * </script>
         */
modal:!1,/** If set to true, add footer with ok and cancel buttons to the datetimepicker.
         * @type Boolean
         * @default false
         * @example True <!-- datetimepicker -->
         * <input id="input" width="312" />
         * <script>
         *    $('#input').datetimepicker({ footer: true, modal: true, header: true });
         * </script>
         * @example False <!-- datetimepicker -->
         * <input id="input" width="312" />
         * <script>
         *    $('#input').datetimepicker({ footer: false });
         * </script>
         */
footer:!1,/** The size of the datetimepicker input.
         * @type 'small'|'default'|'large'
         * @default 'default'
         * @example Bootstrap.4 <!-- bootstrap4, datetimepicker -->
         * <p><label for="small">Small Size:</label> <input id="small" width="234" value="10:20 03/20/2018" /></p>
         * <p><label for="default">Default Size:</label> <input id="default" width="234" value="10:20 03/20/2018" /></p>
         * <p><label for="large">Large Size:</label> <input id="large" width="234" value="10:20 03/20/2018" /></p>
         * <script>
         *     $('#small').datetimepicker({ uiLibrary: 'bootstrap4', size: 'small' });
         *     $('#default').datetimepicker({ uiLibrary: 'bootstrap4', size: 'default' });
         *     $('#large').datetimepicker({ uiLibrary: 'bootstrap4', size: 'large' });
         * </script>
         * @example Bootstrap.4.Font.Awesome <!-- bootstrap4, fontawesome, datetimepicker -->
         * <p><label for="small">Small Size:</label> <input id="small" width="234" value="10:20 03/20/2018" /></p>
         * <p><label for="default">Default Size:</label> <input id="default" width="234" value="10:20 03/20/2018" /></p>
         * <p><label for="large">Large Size:</label> <input id="large" width="234" value="10:20 03/20/2018" /></p>
         * <script>
         *     $('#small').datetimepicker({ uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'small' });
         *     $('#default').datetimepicker({ uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'default' });
         *     $('#large').datetimepicker({ uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'large' });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, datetimepicker -->
         * <p><label for="small">Small Size:</label> <input id="small" width="220" value="10:20 03/20/2018" /></p>
         * <p><label for="default">Default Size:</label> <input id="default" width="220" value="10:20 03/20/2018" /></p>
         * <p><label for="large">Large Size:</label> <input id="large" width="220" value="10:20 03/20/2018" /></p>
         * <script>
         *     $('#small').datetimepicker({ uiLibrary: 'bootstrap', size: 'small' });
         *     $('#default').datetimepicker({ uiLibrary: 'bootstrap', size: 'default' });
         *     $('#large').datetimepicker({ uiLibrary: 'bootstrap', size: 'large' });
         * </script>
         * @example Material.Design <!-- datetimepicker -->
         * <p><label for="small">Small Size:</label> <input id="small" width="276" value="10:20 03/20/2018" /></p>
         * <p><label for="default">Default Size:</label> <input id="default" width="276" value="10:20 03/20/2018" /></p>
         * <p><label for="large">Large Size:</label> <input id="large" width="276" value="10:20 03/20/2018" /></p>
         * <script>
         *     $('#small').datetimepicker({ size: 'small' });
         *     $('#default').datetimepicker({ size: 'default' });
         *     $('#large').datetimepicker({ size: 'large' });
         * </script>
         */
size:"default",/** The language that needs to be in use.
         * @type string
         * @default 'en-us'
         * @example German <!-- datetimepicker -->
         * <input id="input" width="276" />
         * <script>
         *    $('#input').datetimepicker({
         *        locale: 'de-de',
         *        format: 'HH:MM dd mmm yyyy'
         *    });
         * </script>
         * @example Bulgarian <!-- datetimepicker -->
         * <input id="input" width="276" />
         * <script>
         *    $('#input').datetimepicker({
         *        locale: 'bg-bg',
         *        format: 'HH:MM dd mmm yyyy',
         *        datepicker: { weekStartDay: 1 }
         *    });
         * </script>
         */
locale:"en-us",icons:{},style:{calendar:"gj-picker gj-picker-md datetimepicker gj-unselectable"}},bootstrap:{style:{calendar:"gj-picker gj-picker-bootstrap datetimepicker gj-unselectable"},iconsLibrary:"glyphicons"},bootstrap4:{style:{calendar:"gj-picker gj-picker-bootstrap datetimepicker gj-unselectable"}}},gj.datetimepicker.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"datetimepicker"),this.attr("data-datetimepicker","true"),gj.datetimepicker.methods.initialize(this),this},getConfig:function(e,t){var n=gj.widget.prototype.getConfig.call(this,e,t);return uiLibrary=e.hasOwnProperty("uiLibrary")?e.uiLibrary:n.uiLibrary,gj.datepicker.config[uiLibrary]&&$.extend(!0,n.datepicker,gj.datepicker.config[uiLibrary]),gj.timepicker.config[uiLibrary]&&$.extend(!0,n.timepicker,gj.timepicker.config[uiLibrary]),iconsLibrary=e.hasOwnProperty("iconsLibrary")?e.iconsLibrary:n.iconsLibrary,gj.datepicker.config[iconsLibrary]&&$.extend(!0,n.datepicker,gj.datepicker.config[iconsLibrary]),gj.timepicker.config[iconsLibrary]&&$.extend(!0,n.timepicker,gj.timepicker.config[iconsLibrary]),n},initialize:function(e){var t,n,i,r,o,a,s,l,d=e.data();
// Init datepicker
d.datepicker.uiLibrary=d.uiLibrary,d.datepicker.iconsLibrary=d.iconsLibrary,d.datepicker.width=d.width,d.datepicker.format=d.format,d.datepicker.locale=d.locale,d.datepicker.modal=d.modal,d.datepicker.footer=d.footer,d.datepicker.style.calendar=d.style.calendar,d.datepicker.value=d.value,d.datepicker.size=d.size,d.datepicker.autoClose=!1,gj.datepicker.methods.initialize(e,d.datepicker),e.on("select",function(n,i){var r,o;"day"===i?gj.datetimepicker.methods.createShowHourHandler(e,t,d)():"minute"===i&&t.attr("selectedDay")&&!0!==d.footer&&(selectedDay=t.attr("selectedDay").split("-"),r=new Date(selectedDay[0],selectedDay[1],selectedDay[2],t.attr("hour")||0,t.attr("minute")||0),o=gj.core.formatDate(r,d.format,d.locale),e.val(o),gj.datetimepicker.events.change(e),gj.datetimepicker.methods.close(e))}),e.on("open",function(){var e=t.children('[role="header"]');e.find('[role="calendarMode"]').addClass("selected"),e.find('[role="clockMode"]').removeClass("selected")}),t=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]'),o=d.value?gj.core.parseDate(d.value,d.format,d.locale):new Date,t.attr("hour",o.getHours()),t.attr("minute",o.getMinutes()),
// Init timepicker
d.timepicker.uiLibrary=d.uiLibrary,d.timepicker.iconsLibrary=d.iconsLibrary,d.timepicker.format=d.format,d.timepicker.locale=d.locale,d.timepicker.header=!0,d.timepicker.footer=d.footer,d.timepicker.size=d.size,d.timepicker.mode="24hr",d.timepicker.autoClose=!1,
// Init header        
n=$('<div role="header" />'),i=$('<div role="date" class="selected" />'),i.on("click",gj.datetimepicker.methods.createShowDateHandler(e,t,d)),i.html(gj.core.formatDate(new Date,"ddd, mmm dd",d.locale)),n.append(i),a=$('<div role="switch"></div>'),s=$('<i class="gj-icon selected" role="calendarMode">event</i>'),s.on("click",gj.datetimepicker.methods.createShowDateHandler(e,t,d)),a.append(s),r=$('<div role="time" />'),r.append($('<div role="hour" />').on("click",gj.datetimepicker.methods.createShowHourHandler(e,t,d)).html(gj.core.formatDate(new Date,"HH",d.locale))),r.append(":"),r.append($('<div role="minute" />').on("click",gj.datetimepicker.methods.createShowMinuteHandler(e,t,d)).html(gj.core.formatDate(new Date,"MM",d.locale))),a.append(r),l=$('<i class="gj-icon" role="clockMode">clock</i>'),l.on("click",gj.datetimepicker.methods.createShowHourHandler(e,t,d)),a.append(l),n.append(a),t.prepend(n)},createShowDateHandler:function(e,t,n){return function(i){var r=t.children('[role="header"]');r.find('[role="calendarMode"]').addClass("selected"),r.find('[role="date"]').addClass("selected"),r.find('[role="clockMode"]').removeClass("selected"),r.find('[role="hour"]').removeClass("selected"),r.find('[role="minute"]').removeClass("selected"),gj.datepicker.methods.renderMonth(e,t,n.datepicker)}},createShowHourHandler:function(e,t,n){return function(){var i=t.children('[role="header"]');i.find('[role="calendarMode"]').removeClass("selected"),i.find('[role="date"]').removeClass("selected"),i.find('[role="clockMode"]').addClass("selected"),i.find('[role="hour"]').addClass("selected"),i.find('[role="minute"]').removeClass("selected"),gj.timepicker.methods.initMouse(t.children('[role="body"]'),e,t,n.timepicker),gj.timepicker.methods.renderHours(e,t,n.timepicker)}},createShowMinuteHandler:function(e,t,n){return function(){var i=t.children('[role="header"]');i.find('[role="calendarMode"]').removeClass("selected"),i.find('[role="date"]').removeClass("selected"),i.find('[role="clockMode"]').addClass("selected"),i.find('[role="hour"]').removeClass("selected"),i.find('[role="minute"]').addClass("selected"),gj.timepicker.methods.initMouse(t.children('[role="body"]'),e,t,n.timepicker),gj.timepicker.methods.renderMinutes(e,t,n.timepicker)}},close:function(e){var t=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]');t.hide(),t.closest('div[role="modal"]').hide()},value:function(e,t){var n,i,r=e.data();return void 0===t?e.val():(i=gj.core.parseDate(t,r.format,r.locale),i?(n=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]'),gj.datepicker.methods.dayClickHandler(e,n,r,i)()):e.val(""),e)},destroy:function(e){var t=e.data(),n=e.parent(),i=$("body").find('[role="calendar"][guid="'+e.attr("data-guid")+'"]');return t&&(e.off(),i.parent('[role="modal"]').length>0&&i.unwrap(),i.remove(),e.removeData(),e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datetimepicker"),e.removeClass(),n.children('[role="right-icon"]').remove(),e.unwrap()),e}},gj.datetimepicker.events={/**
     * Fires when the datetimepicker value changes as a result of selecting a new value.
     *
     * @event change
     * @param {object} e - event data
     * @example sample <!-- datetimepicker -->
     * <input id="input" width="312" />
     * <script>
     *     $('#input').datetimepicker({
     *         footer: true,
     *         modal: true,
     *         change: function (e) {
     *             alert('Change is fired');
     *         }
     *     });
     * </script>
     */
change:function(e){return e.triggerHandler("change")}},gj.datetimepicker.widget=function(e,t){var n=this,i=gj.datetimepicker.methods;/** Gets or sets the value of the datetimepicker.
     * @method
     * @param {string} value - The value that needs to be selected.
     * @return string
     * @example Get <!-- datetimepicker -->
     * <button class="gj-button-md" onclick="alert($datetimepicker.value())">Get Value</button>
     * <hr/>
     * <input id="datetimepicker" width="312" value="17:50 03/27/2018" />
     * <script>
     *     var $datetimepicker = $('#datetimepicker').datetimepicker();
     * </script>
     * @example Set <!-- datetimepicker -->
     * <button class="gj-button-md" onclick="$datetimepicker.value('13:40 08/01/2017')">Set Value</button>
     * <hr/>
     * <input id="datetimepicker" width="312" />
     * <script>
     *     var $datetimepicker = $('#datetimepicker').datetimepicker();
     * </script>
     */
/** Remove datetimepicker functionality from the element.
     * @method
     * @return jquery element
     * @example sample <!-- datetimepicker -->
     * <button class="gj-button-md" onclick="datetimepicker.destroy()">Destroy</button>
     * <input id="datetimepicker" width="312" />
     * <script>
     *     var datetimepicker = $('#datetimepicker').datetimepicker();
     * </script>
     */
return n.mouseMove=!1,n.value=function(e){return i.value(this,e)},n.destroy=function(){return i.destroy(this)},$.extend(e,n),"true"!==e.attr("data-datetimepicker")&&i.init.call(e,t),e},gj.datetimepicker.widget.prototype=new gj.widget,gj.datetimepicker.widget.constructor=gj.datetimepicker.widget,gj.datetimepicker.widget.prototype.getConfig=gj.datetimepicker.methods.getConfig,function(e){e.fn.datetimepicker=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.datetimepicker.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.datetimepicker.widget(this,e)}}}(jQuery),/* global window alert jQuery gj */
/**
  * @widget Slider
  * @plugin Base
  */
gj.slider={plugins:{},messages:{"en-us":{}}},gj.slider.config={base:{/** The minimum value of the Slider.
         * @type number
         * @default 0
         * @example JS.Config <!-- slider -->
         * <input id="slider" width="300" />
         * Value: <span id="value"></span>
         * <script>
         *    $('#slider').slider({
         *        min: 5,
         *        max: 15,
         *        slide: function (e, value) {
         *            document.getElementById('value').innerText = value;
         *        }
         *    });
         * </script>
         */
min:0,/** The maximum value of the Slider.
         * @type number
         * @default 10
         * @example JS.Config <!-- slider -->
         * <input id="slider" width="300" />
         * Value: <span id="value"></span>
         * <script>
         *    $('#slider').slider({
         *        max: 20,
         *        slide: function (e, value) {
         *            document.getElementById('value').innerText = value;
         *        }
         *    });
         * </script>
         */
max:100,/** The orientation of a Slider: "horizontal" or "vertical".
         * @type (horizontal|vertical)
         * @default horizontal
         */
// TODO orientation
/** The name of the UI library that is going to be in use.
         * @additionalinfo The css file for bootstrap should be manually included if you use bootstrap.
         * @type (materialdesign|bootstrap|bootstrap4)
         * @default materialdesign
         * @example MaterialDesign <!-- slider -->
         * <input id="slider" width="300" />
         * Value: <span id="value"></span>
         * <script>
         *    $('#slider').slider({
         *        uiLibrary: 'materialdesign',
         *        slide: function (e, value) {
         *            document.getElementById('value').innerText = value;
         *        }
         *    });
         * </script>
         * @example Bootstrap.3 <!-- bootstrap, slider -->
         * <input id="slider" width="300" />
         * Value: <span id="value"></span>
         * <script>
         *    $('#slider').slider({
         *        uiLibrary: 'bootstrap',
         *        slide: function (e, value) {
         *            document.getElementById('value').innerText = value;
         *        }
         *    });
         * </script>
         * @example Bootstrap.4 <!-- bootstrap4, slider -->
         * <input id="slider" width="300" />
         * Value: <span id="value"></span>
         * <script>
         *    $('#slider').slider({
         *        uiLibrary: 'bootstrap4',
         *        slide: function (e, value) {
         *            document.getElementById('value').innerText = value;
         *        }
         *    });
         * </script>
         */
uiLibrary:"materialdesign",/** The initial slider value.
         * @type number
         * @default undefined
         * @example Javascript <!-- slider -->
         * <input id="slider" width="300" />
         * Value: <span id="value"></span>
         * <script>
         *    $('#slider').slider({
         *        value: 30,
         *        slide: function (e, value) {
         *            document.getElementById('value').innerText = value;
         *        }
         *    });
         * </script>
         * @example HTML <!-- slider -->
         * <input id="slider" width="300" value="44" />
         * Value: <span id="value"></span>
         * <script>
         *    $('#slider').slider({
         *        slide: function (e, value) {
         *            document.getElementById('value').innerText = value;
         *        }
         *    });
         * </script>
         */
value:void 0,icons:{},style:{wrapper:"gj-slider gj-slider-md",progress:void 0,track:void 0}},bootstrap:{style:{wrapper:"gj-slider gj-slider-bootstrap gj-slider-bootstrap-3",progress:"progress-bar",track:"progress"}},bootstrap4:{style:{wrapper:"gj-slider gj-slider-bootstrap gj-slider-bootstrap-4",progress:"progress-bar",track:"progress"}}},gj.slider.methods={init:function(e){return gj.widget.prototype.init.call(this,e,"slider"),this.attr("data-slider","true"),gj.slider.methods.initialize(this,this.data()),this},initialize:function(e,t){var n,i,r,o;e[0].style.display="none","wrapper"!==e[0].parentElement.attributes.role?(n=document.createElement("div"),n.setAttribute("role","wrapper"),e[0].parentNode.insertBefore(n,e[0]),n.appendChild(e[0])):n=e[0].parentElement,t.width&&(n.style.width=t.width+"px"),gj.core.addClasses(n,t.style.wrapper),i=e[0].querySelector('[role="track"]'),null==i&&(i=document.createElement("div"),i.setAttribute("role","track"),n.appendChild(i)),gj.core.addClasses(i,t.style.track),r=e[0].querySelector('[role="handle"]'),null==r&&(r=document.createElement("div"),r.setAttribute("role","handle"),n.appendChild(r)),o=e[0].querySelector('[role="progress"]'),null==o&&(o=document.createElement("div"),o.setAttribute("role","progress"),n.appendChild(o)),gj.core.addClasses(o,t.style.progress),t.value||(t.value=t.min),gj.slider.methods.value(e,t,t.value),gj.documentManager.subscribeForEvent("mouseup",e.data("guid"),gj.slider.methods.createMouseUpHandler(e,r,t)),r.addEventListener("mousedown",gj.slider.methods.createMouseDownHandler(r,t)),gj.documentManager.subscribeForEvent("mousemove",e.data("guid"),gj.slider.methods.createMouseMoveHandler(e,i,r,o,t))},createMouseUpHandler:function(e,t,n){return function(n){"true"===t.getAttribute("drag")&&(t.setAttribute("drag","false"),gj.slider.events.change(e))}},createMouseDownHandler:function(e,t){return function(t){e.setAttribute("drag","true")}},createMouseMoveHandler:function(e,t,n,i,r){return function(i){var o,a,s,l,d,c,u;"true"===n.getAttribute("drag")&&(o=gj.core.position(e[0],!0,!0),a=(new gj.widget).mouseX(i)-o.left,s=gj.core.width(t),l=gj.core.width(n)/2,d=s/(r.max-r.min),c=(r.value-r.min)*d,a>=l&&a<=s+l&&(a>c+d/2||a<c-d/2)&&(u=Math.round((a-l)/d)+r.min,gj.slider.methods.value(e,r,u)))}},value:function(e,t,n){var i,r,o,a;return void 0===n?e[0].value:(e[0].setAttribute("value",n),t.value=n,r=e.parent().children('[role="track"]')[0],i=gj.core.width(r)/(t.max-t.min),o=e.parent().children('[role="handle"]')[0],o.style.left=(n-t.min)*i+"px",a=e.parent().children('[role="progress"]')[0],a.style.width=(n-t.min)*i+"px",gj.slider.events.slide(e,n),e)},destroy:function(e){var t=e.data(),n=e.parent();return t&&(n.children('[role="track"]').remove(),n.children('[role="handle"]').remove(),n.children('[role="progress"]').remove(),e.unwrap(),e.off(),e.removeData(),e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-slider"),e.removeClass(),e.show()),e}},gj.slider.events={/**
     * Fires when the slider value changes as a result of selecting a new value with the drag handle, buttons or keyboard.
     *
     * @event change
     * @param {object} e - event data
     * @example sample <!-- slider -->
     * <input id="slider" width="300" />
     * <script>
     *     var slider = $('#slider').slider({
     *         change: function (e) {
     *             alert('Change is fired. The new value is ' + slider.value());
     *         }
     *     });
     * </script>
     */
change:function(e){return e.triggerHandler("change")},/**
     * Fires when the user drags the drag handle to a new position.
     * @event slide
     * @param {object} e - event data
     * @param {object} value - The value of the slider.
     * @example sample <!-- slider -->
     * <input id="slider" width="300" />
     * Value: <span id="value"></span>
     * <script>
     *    $('#slider').slider({
     *        value: 30,
     *        slide: function (e, value) {
     *            document.getElementById('value').innerText = value;
     *        }
     *    });
     * </script>
     */
slide:function(e,t){return e.triggerHandler("slide",[t])}},gj.slider.widget=function(e,t){var n=this,i=gj.slider.methods;/** Gets or sets the value of the slider.
     * @method
     * @param {string} value - The value that needs to be selected.
     * @return string
     * @example Get <!-- slider -->
     * <button class="gj-button-md" onclick="alert($slider.value())">Get Value</button>
     * <hr/>
     * <input id="slider" width="300" />
     * <script>
     *     var $slider = $('#slider').slider();
     * </script>
     * @example Set <!-- slider -->
     * <button class="gj-button-md" onclick="$slider.value(77)">Set Value</button>
     * <hr/>
     * <input id="slider" width="300"  />
     * <script>
     *     var $slider = $('#slider').slider();
     * </script>
     */
/** Remove slider functionality from the element.
     * @method
     * @return jquery element
     * @example sample <!-- slider -->
     * <button class="gj-button-md" onclick="slider.destroy()">Destroy</button>
     * <input id="slider" width="300" />
     * <script>
     *     var slider = $('#slider').slider();
     * </script>
     */
return n.value=function(e){return i.value(this,this.data(),e)},n.destroy=function(){return i.destroy(this)},$.extend(e,n),"true"!==e.attr("data-slider")&&i.init.call(e,t),e},gj.slider.widget.prototype=new gj.widget,gj.slider.widget.constructor=gj.slider.widget,function(e){e.fn.slider=function(e){var t;if(this&&this.length){if("object"!=typeof e&&e){if(t=new gj.slider.widget(this,null),t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+e+" does not exist."}return new gj.slider.widget(this,e)}}}(jQuery)}).call(exports,__webpack_require__("../node_modules/jquery/dist/jquery.js"),__webpack_require__("../node_modules/jquery/dist/jquery.js"))},/***/
"../node_modules/isotope-layout/js/isotope.js":/***/
function(e,t,n){var i,r;/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!function(o,a){
// AMD
i=[n("../node_modules/outlayer/outlayer.js"),n("../node_modules/get-size/get-size.js"),n("../node_modules/desandro-matches-selector/matches-selector.js"),n("../node_modules/fizzy-ui-utils/utils.js"),n("../node_modules/isotope-layout/js/item.js"),n("../node_modules/isotope-layout/js/layout-mode.js"),
// include default layout modes
n("../node_modules/isotope-layout/js/layout-modes/masonry.js"),n("../node_modules/isotope-layout/js/layout-modes/fit-rows.js"),n("../node_modules/isotope-layout/js/layout-modes/vertical.js")],void 0!==(r=function(e,t,n,i,r,s){return a(o,e,t,n,i,r,s)}.apply(t,i))&&(e.exports=r)}(window,function(e,t,n,i,r,o,a){"use strict";
// returns a function used for sorting
function s(e,t){return function(n,i){
// cycle through all sortKeys
for(var r=0;r<e.length;r++){var o=e[r],a=n.sortData[o],s=i.sortData[o];if(a>s||a<s){
// if sortAsc is an object, use the value given the sortBy key
var l=void 0!==t[o]?t[o]:t,d=l?1:-1;return(a>s?1:-1)*d}}return 0}}
// -------------------------- vars -------------------------- //
var l=e.jQuery,d=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^\s+|\s+$/g,"")},c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=o,c.LayoutMode=a;var u=c.prototype;u._create=function(){this.itemGUID=0,
// functions that sort items
this._sorters={},this._getSorters(),
// call super
t.prototype._create.call(this),
// create layout modes
this.modes={},
// start filteredItems with all items
this.filteredItems=this.items,
// keep of track of sortBys
this.sortHistory=["original-order"];
// create from registered layout modes
for(var e in a.modes)this._initLayoutMode(e)},u.reloadItems=function(){
// reset item ID counter
this.itemGUID=0,
// call super
t.prototype.reloadItems.call(this)},u._itemize=function(){
// assign ID for original-order
for(var e=t.prototype._itemize.apply(this,arguments),n=0;n<e.length;n++){e[n].id=this.itemGUID++}return this._updateItemsSortData(e),e},
// -------------------------- layout -------------------------- //
u._initLayoutMode=function(e){var t=a.modes[e],n=this.options[e]||{};this.options[e]=t.options?r.extend(t.options,n):n,
// init layout mode instance
this.modes[e]=new t(this)},u.layout=function(){
// if first time doing layout, do all magic
if(!this._isLayoutInited&&this._getOption("initLayout"))return void this.arrange();this._layout()},
// private method to be used in layout() & magic()
u._layout=function(){
// don't animate first layout
var e=this._getIsInstant();
// layout flow
this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,e),
// flag for initalized
this._isLayoutInited=!0},
// filter + sort + layout
u.arrange=function(e){
// set any options pass
this.option(e),this._getIsInstant();
// filter, sort, and layout
// filter
var t=this._filter(this.items);this.filteredItems=t.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[t]):this._hideReveal(t),this._sort(),this._layout()},
// alias to _init for main plugin method
u._init=u.arrange,u._hideReveal=function(e){this.reveal(e.needReveal),this.hide(e.needHide)},
// HACK
// Don't animate/transition first layout
// Or don't animate/transition other layouts
u._getIsInstant=function(){var e=this._getOption("layoutInstant"),t=void 0!==e?e:!this._isLayoutInited;return this._isInstant=t,t},
// listen for layoutComplete, hideComplete and revealComplete
// to trigger arrangeComplete
u._bindArrangeComplete=function(){function e(){t&&n&&i&&r.dispatchEvent("arrangeComplete",null,[r.filteredItems])}
// listen for 3 events to trigger arrangeComplete
var t,n,i,r=this;this.once("layoutComplete",function(){t=!0,e()}),this.once("hideComplete",function(){n=!0,e()}),this.once("revealComplete",function(){i=!0,e()})},
// -------------------------- filter -------------------------- //
u._filter=function(e){var t=this.options.filter;t=t||"*";
// test each item
for(var n=[],i=[],r=[],o=this._getFilterTest(t),a=0;a<e.length;a++){var s=e[a];if(!s.isIgnored){
// add item to either matched or unmatched group
var l=o(s);
// item.isFilterMatched = isMatched;
// add to matches if its a match
l&&n.push(s),
// add to additional group if item needs to be hidden or revealed
l&&s.isHidden?i.push(s):l||s.isHidden||r.push(s)}}
// return collections of items to be manipulated
return{matches:n,needReveal:i,needHide:r}},
// get a jQuery, function, or a matchesSelector test given the filter
u._getFilterTest=function(e){return l&&this.options.isJQueryFiltering?function(t){return l(t.element).is(e)}:"function"==typeof e?function(t){return e(t.element)}:function(t){return i(t.element,e)}},
// -------------------------- sorting -------------------------- //
/**
   * @params {Array} elems
   * @public
   */
u.updateSortData=function(e){
// get items
var t;e?(e=r.makeArray(e),t=this.getItems(e)):
// update all items if no elems provided
t=this.items,this._getSorters(),this._updateItemsSortData(t)},u._getSorters=function(){var e=this.options.getSortData;for(var t in e){var n=e[t];this._sorters[t]=p(n)}},/**
   * @params {Array} items - of Isotope.Items
   * @private
   */
u._updateItemsSortData=function(e){for(var t=e&&e.length,n=0;t&&n<t;n++){e[n].updateSortData()}};
// ----- munge sorter ----- //
// encapsulate this, as we just need mungeSorter
// other functions in here are just for munging
var p=function(){
// add a magic layer to sorters for convienent shorthands
// `.foo-bar` will use the text of .foo-bar querySelector
// `[foo-bar]` will use attribute
// you can also add parser
// `.foo-bar parseInt` will parse that as a number
function e(e){
// if not a string, return function or whatever it is
if("string"!=typeof e)return e;
// parse the sorter string
var n=d(e).split(" "),i=n[0],r=i.match(/^\[(.+)\]$/),o=r&&r[1],a=t(o,i),s=c.sortDataParsers[n[1]];
// parse the value, if there was a parser
// otherwise just return value
return e=s?function(e){return e&&s(a(e))}:function(e){return e&&a(e)}}
// get an attribute getter, or get text of the querySelector
function t(e,t){
// if query looks like [foo-bar], get attribute
// if query looks like [foo-bar], get attribute
return e?function(t){return t.getAttribute(e)}:function(e){var n=e.querySelector(t);return n&&n.textContent}}return e}();
// parsers used in getSortData shortcut strings
c.sortDataParsers={parseInt:function(e){return parseInt(e,10)},parseFloat:function(e){return parseFloat(e)}},
// ----- sort method ----- //
// sort filteredItem order
u._sort=function(){if(this.options.sortBy){
// keep track of sortBy History
var e=r.makeArray(this.options.sortBy);this._getIsSameSortBy(e)||(
// concat all sortBy and sortHistory, add to front, oldest goes in last
this.sortHistory=e.concat(this.sortHistory));
// sort magic
var t=s(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(t)}},
// check if sortBys is same as start of sortHistory
u._getIsSameSortBy=function(e){for(var t=0;t<e.length;t++)if(e[t]!=this.sortHistory[t])return!1;return!0},
// -------------------------- methods -------------------------- //
// get layout mode
u._mode=function(){var e=this.options.layoutMode,t=this.modes[e];if(!t)
// TODO console.error
throw new Error("No layout mode: "+e);
// HACK sync mode's options
// any options set after init for layout mode need to be synced
return t.options=this.options[e],t},u._resetLayout=function(){
// trigger original reset layout
t.prototype._resetLayout.call(this),this._mode()._resetLayout()},u._getItemLayoutPosition=function(e){return this._mode()._getItemLayoutPosition(e)},u._manageStamp=function(e){this._mode()._manageStamp(e)},u._getContainerSize=function(){return this._mode()._getContainerSize()},u.needsResizeLayout=function(){return this._mode().needsResizeLayout()},
// -------------------------- adding & removing -------------------------- //
// HEADS UP overwrites default Outlayer appended
u.appended=function(e){var t=this.addItems(e);if(t.length){
// filter, layout, reveal new items
var n=this._filterRevealAdded(t);
// add to filteredItems
this.filteredItems=this.filteredItems.concat(n)}},
// HEADS UP overwrites default Outlayer prepended
u.prepended=function(e){var t=this._itemize(e);if(t.length){
// start new layout
this._resetLayout(),this._manageStamps();
// filter, layout, reveal new items
var n=this._filterRevealAdded(t);
// layout previous items
this.layoutItems(this.filteredItems),
// add to items and filteredItems
this.filteredItems=n.concat(this.filteredItems),this.items=t.concat(this.items)}},u._filterRevealAdded=function(e){var t=this._filter(e);
// reveal all new items
// layout new items, no transition
return this.hide(t.needHide),this.reveal(t.matches),this.layoutItems(t.matches,!0),t.matches},/**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
u.insert=function(e){var t=this.addItems(e);if(t.length){
// append item elements
var n,i,r=t.length;for(n=0;n<r;n++)i=t[n],this.element.appendChild(i.element);
// filter new stuff
var o=this._filter(t).matches;
// set flag
for(n=0;n<r;n++)t[n].isLayoutInstant=!0;
// reset flag
for(this.arrange(),n=0;n<r;n++)delete t[n].isLayoutInstant;this.reveal(o)}};var h=u.remove;
// -----  ----- //
/**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
// ----- helper methods ----- //
/**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
return u.remove=function(e){e=r.makeArray(e);var t=this.getItems(e);
// do regular thing
h.call(this,e);
// remove elems from filteredItems
for(var n=t&&t.length,i=0;n&&i<n;i++){var o=t[i];
// remove item from collection
r.removeFrom(this.filteredItems,o)}},u.shuffle=function(){
// update random sortData
for(var e=0;e<this.items.length;e++){this.items[e].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},u._noTransition=function(e,t){
// save transitionDuration before disabling
var n=this.options.transitionDuration;
// disable transition
this.options.transitionDuration=0;
// do it
var i=e.apply(this,t);
// re-enable transition for reveal
return this.options.transitionDuration=n,i},u.getFilteredItemElements=function(){return this.filteredItems.map(function(e){return e.element})},c})},/***/
"../node_modules/isotope-layout/js/item.js":/***/
function(e,t,n){var i,r,o;/**
 * Isotope Item
**/
!function(a,s){
// AMD
r=[n("../node_modules/outlayer/outlayer.js")],i=s,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(window,function(e){"use strict";
// -------------------------- Item -------------------------- //
// sub-class Outlayer Item
function t(){e.Item.apply(this,arguments)}var n=t.prototype=Object.create(e.Item.prototype),i=n._create;n._create=function(){
// assign id, used for original-order sorting
this.id=this.layout.itemGUID++,i.call(this),this.sortData={}},n.updateSortData=function(){if(!this.isIgnored){
// default sorters
this.sortData.id=this.id,
// for backward compatibility
this.sortData["original-order"]=this.id,this.sortData.random=Math.random();
// go thru getSortData obj and apply the sorters
var e=this.layout.options.getSortData,t=this.layout._sorters;for(var n in e){var i=t[n];this.sortData[n]=i(this.element,this)}}};var r=n.destroy;return n.destroy=function(){
// call super
r.apply(this,arguments),
// reset display, #741
this.css({display:""})},t})},/***/
"../node_modules/isotope-layout/js/layout-mode.js":/***/
function(e,t,n){var i,r,o;/**
 * Isotope LayoutMode
 */
!function(a,s){
// AMD
r=[n("../node_modules/get-size/get-size.js"),n("../node_modules/outlayer/outlayer.js")],i=s,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(window,function(e,t){"use strict";
// layout mode class
function n(e){this.isotope=e,
// link properties
e&&(this.options=e.options[this.namespace],this.element=e.element,this.items=e.filteredItems,this.size=e.size)}var i=n.prototype;
// -----  ----- //
// for horizontal layout modes, check vertical size
// ----- measurements ----- //
/**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
// ----- methods that should reference isotope ----- //
// -------------------------- create -------------------------- //
return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(e){i[e]=function(){return t.prototype[e].apply(this.isotope,arguments)}}),i.needsVerticalResizeLayout=function(){
// don't trigger if size did not change
var t=e(this.isotope.element);return this.isotope.size&&t&&t.innerHeight!=this.isotope.size.innerHeight},i._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.getRowHeight=function(){this.getSegmentSize("row","Height")},i.getSegmentSize=function(e,t){var n=e+t,i="outer"+t;
// got rowHeight or columnWidth, we can chill
if(
// columnWidth / outerWidth // rowHeight / outerHeight
this._getMeasurement(n,i),!this[n]){
// fall back to item of first element
var r=this.getFirstItemSize();this[n]=r&&r[i]||
// or size of container
this.isotope.size["inner"+t]}},i.getFirstItemSize=function(){var t=this.isotope.filteredItems[0];return t&&t.element&&e(t.element)},i.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},n.modes={},n.create=function(e,t){function r(){n.apply(this,arguments)}
// default options
// register in Isotope
return r.prototype=Object.create(i),r.prototype.constructor=r,t&&(r.options=t),r.prototype.namespace=e,n.modes[e]=r,r},n})},/***/
"../node_modules/isotope-layout/js/layout-modes/fit-rows.js":/***/
function(e,t,n){var i,r,o;/**
 * fitRows layout mode
 */
!function(a,s){
// AMD
r=[n("../node_modules/isotope-layout/js/layout-mode.js")],i=s,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(window,function(e){"use strict";var t=e.create("fitRows"),n=t.prototype;return n._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},n._getItemLayoutPosition=function(e){e.getSize();var t=e.size.outerWidth+this.gutter,n=this.isotope.size.innerWidth+this.gutter;0!==this.x&&t+this.x>n&&(this.x=0,this.y=this.maxY);var i={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+e.size.outerHeight),this.x+=t,i},n._getContainerSize=function(){return{height:this.maxY}},t})},/***/
"../node_modules/isotope-layout/js/layout-modes/masonry.js":/***/
function(e,t,n){var i,r,o;/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
!function(a,s){
// AMD
r=[n("../node_modules/isotope-layout/js/layout-mode.js"),n("../node_modules/masonry-layout/masonry.js")],i=s,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(window,function(e,t){"use strict";
// -------------------------- masonryDefinition -------------------------- //
// create an Outlayer layout class
var n=e.create("masonry"),i=n.prototype,r={_getElementOffset:!0,layout:!0,_getMeasurement:!0};
// inherit Masonry prototype
for(var o in t.prototype)
// do not inherit mode methods
r[o]||(i[o]=t.prototype[o]);var a=i.measureColumns;i.measureColumns=function(){
// set items, used if measuring first item
this.items=this.isotope.filteredItems,a.call(this)};
// point to mode options for fitWidth
var s=i._getOption;return i._getOption=function(e){return"fitWidth"==e?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:s.apply(this.isotope,arguments)},n})},/***/
"../node_modules/isotope-layout/js/layout-modes/vertical.js":/***/
function(e,t,n){var i,r,o;/**
 * vertical layout mode
 */
!function(a,s){
// AMD
r=[n("../node_modules/isotope-layout/js/layout-mode.js")],i=s,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(window,function(e){"use strict";var t=e.create("vertical",{horizontalAlignment:0}),n=t.prototype;return n._resetLayout=function(){this.y=0},n._getItemLayoutPosition=function(e){e.getSize();var t=(this.isotope.size.innerWidth-e.size.outerWidth)*this.options.horizontalAlignment,n=this.y;return this.y+=e.size.outerHeight,{x:t,y:n}},n._getContainerSize=function(){return{height:this.y}},t})},/***/
"../node_modules/jquery-bridget/jquery-bridget.js":/***/
function(e,t,n){var i,r;/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */
/* jshint browser: true, strict: true, undef: true, unused: true */
!function(o,a){
// AMD
i=[n("../node_modules/jquery/dist/jquery.js")],void 0!==(r=function(e){return a(o,e)}.apply(t,i))&&(e.exports=r)}(window,function(e,t){"use strict";
// ----- jQueryBridget ----- //
function n(n,o,s){
// $().plugin('methodName')
function l(e,t,i){var r,o="$()."+n+'("'+t+'")';return e.each(function(e,l){
// get instance
var d=s.data(l,n);if(!d)return void a(n+" not initialized. Cannot call methods, i.e. "+o);var c=d[t];if(!c||"_"==t.charAt(0))return void a(o+" is not a valid method");
// apply method, get return value
var u=c.apply(d,i);
// set return value if value is returned, use only first value
r=void 0===r?u:r}),void 0!==r?r:e}function d(e,t){e.each(function(e,i){var r=s.data(i,n);r?(
// set options & init
r.option(t),r._init()):(
// initialize new instance
r=new o(i,t),s.data(i,n,r))})}(s=s||t||e.jQuery)&&(
// add option method -> $().plugin('option', {...})
o.prototype.option||(
// option setter
o.prototype.option=function(e){
// bail out if not an object
s.isPlainObject(e)&&(this.options=s.extend(!0,this.options,e))}),
// make jQuery plugin
s.fn[n]=function(e){if("string"==typeof e){return l(this,e,r.call(arguments,1))}
// just $().plugin({ options })
return d(this,e),this},i(s))}
// ----- updateJQuery ----- //
// set $.bridget for v1 backwards compatibility
function i(e){!e||e&&e.bridget||(e.bridget=n)}
// ----- utils ----- //
var r=Array.prototype.slice,o=e.console,a=void 0===o?function(){}:function(e){o.error(e)};
// -----  ----- //
return i(t||e.jQuery),n})},/***/
"../node_modules/jquery/dist/jquery.js":/***/
function(e,t,n){var i,r;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(t,n){"use strict";"object"==typeof e&&"object"==typeof e.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,o){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function a(e,t,n){t=t||ce;var i,r=t.createElement("script");if(r.text=e,n)for(i in xe)n[i]&&(r[i]=n[i]);t.head.appendChild(r).parentNode.removeChild(r)}function s(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?me[ve.call(e)]||"object":typeof e}function l(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=s(e);return!_e(e)&&!Ce(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function d(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}
// Implement the identical functionality for filter and not
function c(e,t,n){
// Single element
// Arraylike of elements (jQuery, arguments, Array)
return _e(t)?Ee.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?Ee.grep(e,function(e){return e===t!==n}):"string"!=typeof t?Ee.grep(e,function(e){return fe.call(t,e)>-1!==n}):Ee.filter(t,e,n)}function u(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}
// Convert String-formatted options into Object-formatted ones
function p(e){var t={};return Ee.each(e.match(He)||[],function(e,n){t[n]=!0}),t}function h(e){return e}function g(e){throw e}function f(e,t,n,i){var r;try{
// Check for promise aspect first to privilege synchronous behavior
e&&_e(r=e.promise)?r.call(e).done(t).fail(n):e&&_e(r=e.then)?r.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(i))}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
// The ready event handler and self cleanup method
function m(){ce.removeEventListener("DOMContentLoaded",m),n.removeEventListener("load",m),Ee.ready()}
// Used by camelCase as callback to replace()
function v(e,t){return t.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function y(e){return e.replace(ze,"ms-").replace(Be,v)}function b(){this.expando=Ee.expando+b.uid++}function w(e){
// Only convert to a number if it doesn't change the string
return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Ue.test(e)?JSON.parse(e):e)}function j(e,t,n){var i;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Ve,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=w(n)}catch(e){}
// Make sure we set the data so it isn't changed later
qe.set(e,t,n)}else n=void 0;return n}function _(e,t,n,i){var r,o,a=20,s=i?function(){return i.cur()}:function(){return Ee.css(e,t,"")},l=s(),d=n&&n[3]||(Ee.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(Ee.cssNumber[t]||"px"!==d&&+l)&&Ye.exec(Ee.css(e,t));if(c&&c[3]!==d){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,
// Trust units reported by jQuery.css
d=d||c[3],
// Iteratively approximate from a nonzero starting point
c=+l||1;a--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
Ee.style(e,t,c+d),(1-o)*(1-(o=s()/l||.5))<=0&&(a=0),c/=o;c*=2,Ee.style(e,t,c+d),
// Make sure we update the tween properties later on
n=n||[]}
// Apply relative offset (+=/-=) if specified
return n&&(c=+c||+l||0,r=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=d,i.start=c,i.end=r)),r}function C(e){var t,n=e.ownerDocument,i=e.nodeName,r=Je[i];return r||(t=n.body.appendChild(n.createElement(i)),r=Ee.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),Je[i]=r,r)}function x(e,t){
// Determine new display value for elements that need to change
for(var n,i,r=[],o=0,a=e.length;o<a;o++)i=e[o],i.style&&(n=i.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(r[o]=Fe.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&Qe(i)&&(r[o]=C(i))):"none"!==n&&(r[o]="none",
// Remember what we're overwriting
Fe.set(i,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<a;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}function E(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&d(e,t)?Ee.merge([e],n):n}
// Mark scripts as having already been evaluated
function T(e,t){for(var n=0,i=e.length;n<i;n++)Fe.set(e[n],"globalEval",!t||Fe.get(t[n],"globalEval"))}function k(e,t,n,i,r){for(var o,a,l,d,c,u,p=t.createDocumentFragment(),h=[],g=0,f=e.length;g<f;g++)if((o=e[g])||0===o)
// Add nodes directly
if("object"===s(o))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ee.merge(h,o.nodeType?[o]:o);else if(it.test(o)){for(a=a||p.appendChild(t.createElement("div")),
// Deserialize a standard representation
l=(et.exec(o)||["",""])[1].toLowerCase(),d=nt[l]||nt._default,a.innerHTML=d[1]+Ee.htmlPrefilter(o)+d[2],
// Descend through wrappers to the right content
u=d[0];u--;)a=a.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ee.merge(h,a.childNodes),
// Remember the top-level container
a=p.firstChild,
// Ensure the created nodes are orphaned (#12392)
a.textContent=""}else h.push(t.createTextNode(o));for(
// Remove wrapper from fragment
p.textContent="",g=0;o=h[g++];)
// Skip elements already in the context collection (trac-4087)
if(i&&Ee.inArray(o,i)>-1)r&&r.push(o);else
// Capture executables
if(c=Ee.contains(o.ownerDocument,o),
// Append to fragment
a=E(p.appendChild(o),"script"),
// Preserve script evaluation history
c&&T(a),n)for(u=0;o=a[u++];)tt.test(o.type||"")&&n.push(o);return p}function D(){return!0}function S(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function I(){try{return ce.activeElement}catch(e){}}function A(e,t,n,i,r,o){var a,s;
// Types can be a map of types/handlers
if("object"==typeof t){
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
i=i||n,n=void 0);for(s in t)A(e,s,n,i,t[s],o);return e}if(null==i&&null==r?(
// ( types, fn )
r=n,i=n=void 0):null==r&&("string"==typeof n?(
// ( types, selector, fn )
r=i,i=void 0):(
// ( types, data, fn )
r=i,i=n,n=void 0)),!1===r)r=S;else if(!r)return e;
// Use same guid so caller can remove using origFn
return 1===o&&(a=r,r=function(e){
// Can use an empty set, since event contains the info
return Ee().off(e),a.apply(this,arguments)},r.guid=a.guid||(a.guid=Ee.guid++)),e.each(function(){Ee.event.add(this,t,r,i,n)})}
// Prefer a tbody over its parent table for containing new rows
function O(e,t){return d(e,"table")&&d(11!==t.nodeType?t:t.firstChild,"tr")?Ee(e).children("tbody")[0]||e:e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function N(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function L(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function $(e,t){var n,i,r,o,a,s,l,d;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Fe.hasData(e)&&(o=Fe.access(e),a=Fe.set(t,o),d=o.events)){delete a.handle,a.events={};for(r in d)for(n=0,i=d[r].length;n<i;n++)Ee.event.add(t,r,d[r][n])}
// 2. Copy user data
qe.hasData(e)&&(s=qe.access(e),l=Ee.extend({},s),qe.set(t,l))}}
// Fix IE bugs, see support tests
function H(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Ze.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function M(e,t,n,i){
// Flatten any nested arrays
t=he.apply([],t);var r,o,s,l,d,c,u=0,p=e.length,h=p-1,g=t[0],f=_e(g);
// We can't cloneNode fragments that contain checked, in WebKit
if(f||p>1&&"string"==typeof g&&!je.checkClone&&ct.test(g))return e.each(function(r){var o=e.eq(r);f&&(t[0]=g.call(this,r,o.html())),M(o,t,n,i)});if(p&&(r=k(t,e[0].ownerDocument,!1,e,i),o=r.firstChild,1===r.childNodes.length&&(r=o),o||i)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(s=Ee.map(E(r,"script"),N),l=s.length;u<p;u++)d=r,u!==h&&(d=Ee.clone(d,!0,!0),
// Keep references to cloned scripts for later restoration
l&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ee.merge(s,E(d,"script"))),n.call(e[u],d,u);if(l)
// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,
// Reenable scripts
Ee.map(s,L),u=0;u<l;u++)d=s[u],tt.test(d.type||"")&&!Fe.access(d,"globalEval")&&Ee.contains(c,d)&&(d.src&&"module"!==(d.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
Ee._evalUrl&&Ee._evalUrl(d.src):a(d.textContent.replace(ut,""),c,d))}return e}function R(e,t,n){for(var i,r=t?Ee.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||Ee.cleanData(E(i)),i.parentNode&&(n&&Ee.contains(i.ownerDocument,i)&&T(E(i,"script")),i.parentNode.removeChild(i));return e}function P(e,t,n){var i,r,o,a,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
s=e.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return n=n||ht(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||Ee.contains(e.ownerDocument,e)||(a=Ee.style(e,t)),!je.pixelBoxStyles()&&pt.test(a)&&gt.test(t)&&(i=s.width,r=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=i,s.minWidth=r,s.maxWidth=o)),void 0!==a?a+"":a}function z(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function B(e){
// Shortcut for names that are not vendor prefixed
if(e in wt)return e;for(
// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=bt.length;n--;)if((e=bt[n]+t)in wt)return e}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function W(e){var t=Ee.cssProps[e];return t||(t=Ee.cssProps[e]=B(e)||e),t}function F(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var i=Ye.exec(t);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function q(e,t,n,i,r,o){var a="width"===t?1:0,s=0,l=0;
// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;a<4;a+=2)
// Both box models exclude margin
"margin"===n&&(l+=Ee.css(e,n+Ke[a],!0,r)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
i?(
// For "content", subtract padding
"content"===n&&(l-=Ee.css(e,"padding"+Ke[a],!0,r)),
// For "content" or "padding", subtract border
"margin"!==n&&(l-=Ee.css(e,"border"+Ke[a]+"Width",!0,r))):(
// Add padding
l+=Ee.css(e,"padding"+Ke[a],!0,r),
// For "border" or "margin", add border
"padding"!==n?l+=Ee.css(e,"border"+Ke[a]+"Width",!0,r):s+=Ee.css(e,"border"+Ke[a]+"Width",!0,r));
// Account for positive content-box scroll gutter when requested by providing computedVal
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
return!i&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))),l}function U(e,t,n){
// Start with computed style
var i=ht(e),r=P(e,t,i),o="border-box"===Ee.css(e,"boxSizing",!1,i),a=o;
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(pt.test(r)){if(!n)return r;r="auto"}
// Adjust for the element's box model
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
// offsetWidth/offsetHeight provide border-box values
// Normalize "" and auto
// Provide the current computed size to request scroll gutter calculation (gh-3589)
return a=a&&(je.boxSizingReliable()||r===e.style[t]),("auto"===r||!parseFloat(r)&&"inline"===Ee.css(e,"display",!1,i))&&(r=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(r=parseFloat(r)||0)+q(e,t,n||(o?"border":"content"),a,i,r)+"px"}function V(e,t,n,i,r){return new V.prototype.init(e,t,n,i,r)}function G(){_t&&(!1===ce.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(G):n.setTimeout(G,Ee.fx.interval),Ee.fx.tick())}
// Animations created synchronously will run synchronously
function Y(){return n.setTimeout(function(){jt=void 0}),jt=Date.now()}
// Generate parameters to create a standard animation
function K(e,t){var n,i=0,r={height:e};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;i<4;i+=2-t)n=Ke[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function Q(e,t,n){for(var i,r=(Z.tweeners[t]||[]).concat(Z.tweeners["*"]),o=0,a=r.length;o<a;o++)if(i=r[o].call(n,t,e))
// We're done with this property
return i}function X(e,t,n){var i,r,o,a,s,l,d,c,u="width"in t||"height"in t,p=this,h={},g=e.style,f=e.nodeType&&Qe(e),m=Fe.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
n.queue||(a=Ee._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){
// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,Ee.queue(e,"fx").length||a.empty.fire()})}));
// Detect show/hide animations
for(i in t)if(r=t[i],Ct.test(r)){if(delete t[i],o=o||"toggle"===r,r===(f?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==r||!m||void 0===m[i])continue;f=!0}h[i]=m&&m[i]||Ee.style(e,i)}if((
// Bail out if this is a no-op like .hide().hide()
l=!Ee.isEmptyObject(t))||!Ee.isEmptyObject(h)){
// Restrict "overflow" and "display" styles during box animations
u&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[g.overflow,g.overflowX,g.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
d=m&&m.display,null==d&&(d=Fe.get(e,"display")),c=Ee.css(e,"display"),"none"===c&&(d?c=d:(
// Get nonempty value(s) by temporarily forcing visibility
x([e],!0),d=e.style.display||d,c=Ee.css(e,"display"),x([e]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=d)&&"none"===Ee.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(p.done(function(){g.display=d}),null==d&&(c=g.display,d="none"===c?"":c)),g.display="inline-block")),n.overflow&&(g.overflow="hidden",p.always(function(){g.overflow=n.overflow[0],g.overflowX=n.overflow[1],g.overflowY=n.overflow[2]})),
// Implement show/hide animations
l=!1;for(i in h)
// General show/hide setup for this element animation
l||(m?"hidden"in m&&(f=m.hidden):m=Fe.access(e,"fxshow",{display:d}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
o&&(m.hidden=!f),
// Show elements before animating them
f&&x([e],!0),/* eslint-disable no-loop-func */
p.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
f||x([e]),Fe.remove(e,"fxshow");for(i in h)Ee.style(e,i,h[i])})),
// Per-property setup
l=Q(f?m[i]:0,i,p),i in m||(m[i]=l.start,f&&(l.end=l.start,l.start=0))}}function J(e,t){var n,i,r,o,a;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=y(n),r=t[i],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(a=Ee.cssHooks[i])&&"expand"in a){o=a.expand(o),delete e[i];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function Z(e,t,n){var i,r,o=0,a=Z.prefilters.length,s=Ee.Deferred().always(function(){
// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(r)return!1;for(var t=jt||Y(),n=Math.max(0,d.startTime+d.duration-t),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
i=n/d.duration||0,o=1-i,a=0,l=d.tweens.length;a<l;a++)d.tweens[a].run(o);
// If there's more to do, yield
// If there's more to do, yield
// If this was an empty animation, synthesize a final progress notification
// Resolve the animation and report its conclusion
return s.notifyWith(e,[d,o,n]),o<1&&l?n:(l||s.notifyWith(e,[d,1,0]),s.resolveWith(e,[d]),!1)},d=s.promise({elem:e,props:Ee.extend({},t),opts:Ee.extend(!0,{specialEasing:{},easing:Ee.easing._default},n),originalProperties:t,originalOptions:n,startTime:jt||Y(),duration:n.duration,tweens:[],createTween:function(t,n){var i=Ee.Tween(e,d.opts,t,n,d.opts.specialEasing[t]||d.opts.easing);return d.tweens.push(i),i},stop:function(t){var n=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
i=t?d.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)d.tweens[n].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(s.notifyWith(e,[d,1,0]),s.resolveWith(e,[d,t])):s.rejectWith(e,[d,t]),this}}),c=d.props;for(J(c,d.opts.specialEasing);o<a;o++)if(i=Z.prefilters[o].call(d,e,c,d.opts))return _e(i.stop)&&(Ee._queueHooks(d.elem,d.opts.queue).stop=i.stop.bind(i)),i;
// Attach callbacks from options
return Ee.map(c,Q,d),_e(d.opts.start)&&d.opts.start.call(e,d),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always),Ee.fx.timer(Ee.extend(l,{elem:e,anim:d,queue:d.opts.queue})),d}
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function ee(e){return(e.match(He)||[]).join(" ")}function te(e){return e.getAttribute&&e.getAttribute("class")||""}function ne(e){return Array.isArray(e)?e:"string"==typeof e?e.match(He)||[]:[]}function ie(e,t,n,i){var r;if(Array.isArray(t))
// Serialize array item.
Ee.each(t,function(t,r){n||$t.test(e)?
// Treat each array item as a scalar.
i(e,r):
// Item is non-scalar (array or object), encode its numeric index.
ie(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==s(t))
// Serialize scalar item.
i(e,t);else
// Serialize object item.
for(r in t)ie(e+"["+r+"]",t[r],n,i)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function re(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(He)||[];if(_e(n))
// For each dataType in the dataTypeExpression
for(;i=o[r++];)
// Prepend if requested
"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}
// Base inspection function for prefilters and transports
function oe(e,t,n,i){function r(s){var l;return o[s]=!0,Ee.each(e[s]||[],function(e,s){var d=s(t,n,i);return"string"!=typeof d||a||o[d]?a?!(l=d):void 0:(t.dataTypes.unshift(d),r(d),!1)}),l}var o={},a=e===Gt;return r(t.dataTypes[0])||!o["*"]&&r("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ae(e,t){var n,i,r=Ee.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&Ee.extend(!0,e,i),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function se(e,t,n){
// Remove auto dataType and get content-type in the process
for(var i,r,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(r in s)if(s[r]&&s[r].test(i)){l.unshift(r);break}
// Check to see if we have a response for the expected dataType
if(l[0]in n)o=l[0];else{
// Try convertible dataTypes
for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}a||(a=r)}
// Or just use first one
o=o||a}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),n[o]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function le(e,t,n,i){var r,o,a,s,l,d={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(a in e.converters)d[a.toLowerCase()]=e.converters[a];
// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),
// Apply the dataFilter if provided
!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=l;else if("*"!==l&&l!==o){
// If none found, seek a pair
if(!(
// Seek a direct converter
a=d[l+" "+o]||d["* "+o]))for(r in d)if(
// If conv2 outputs current
s=r.split(" "),s[1]===o&&(
// If prev can be converted to accepted input
a=d[l+" "+s[0]]||d["* "+s[0]])){
// Condense equivalence converters
!0===a?a=d[r]:!0!==d[r]&&(o=s[0],c.unshift(s[1]));break}
// Apply converter (if not an equivalence)
if(!0!==a)
// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}var de=[],ce=n.document,ue=Object.getPrototypeOf,pe=de.slice,he=de.concat,ge=de.push,fe=de.indexOf,me={},ve=me.toString,ye=me.hasOwnProperty,be=ye.toString,we=be.call(Object),je={},_e=function(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},Ce=function(e){return null!=e&&e===e.window},xe={type:!0,src:!0,noModule:!0},
// Define a local copy of jQuery
Ee=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new Ee.fn.init(e,t)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
Te=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;Ee.fn=Ee.prototype={
// The current version of jQuery being used
jquery:"3.3.1",constructor:Ee,
// The default length of a jQuery object is 0
length:0,toArray:function(){return pe.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
// Return all the elements in a clean array
return null==e?pe.call(this):e<0?this[e+this.length]:this[e]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=Ee.merge(this.constructor(),e);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return Ee.each(this,e)},map:function(e){return this.pushStack(Ee.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(pe.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ge,sort:de.sort,splice:de.splice},Ee.extend=Ee.fn.extend=function(){var e,t,n,i,r,o,a=arguments[0]||{},s=1,l=arguments.length,d=!1;for(
// Handle a deep copy situation
"boolean"==typeof a&&(d=a,
// Skip the boolean and the target
a=arguments[s]||{},s++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||_e(a)||(a={}),
// Extend jQuery itself if only one argument is passed
s===l&&(a=this,s--);s<l;s++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))
// Extend the base object
for(t in e)n=a[t],i=e[t],
// Prevent never-ending loop
a!==i&&(
// Recurse if we're merging plain objects or arrays
d&&i&&(Ee.isPlainObject(i)||(r=Array.isArray(i)))?(r?(r=!1,o=n&&Array.isArray(n)?n:[]):o=n&&Ee.isPlainObject(n)?n:{},
// Never move original objects, clone them
a[t]=Ee.extend(d,o,i)):void 0!==i&&(a[t]=i));
// Return the modified object
return a},Ee.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!e||"[object Object]"!==ve.call(e))&&(!(t=ue(e))||"function"==typeof(n=ye.call(t,"constructor")&&t.constructor)&&be.call(n)===we)},isEmptyObject:function(e){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(e){a(e)},each:function(e,t){var n,i=0;if(l(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(Te,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(l(Object(e))?Ee.merge(n,"string"==typeof e?[e]:e):ge.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:fe.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var i=[],r=0,o=e.length,a=!n;r<o;r++)!t(e[r],r)!==a&&i.push(e[r]);return i},
// arg is for internal usage only
map:function(e,t,n){var i,r,o=0,a=[];
// Go through the array, translating each of the items to their new values
if(l(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);
// Flatten any nested arrays
return he.apply([],a)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:je}),"function"==typeof Symbol&&(Ee.fn[Symbol.iterator]=de[Symbol.iterator]),
// Populate the class2type map
Ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){me["[object "+t+"]"]=t.toLowerCase()});var ke=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(e){function t(e,t,n,i){var r,o,a,s,l,c,p,h=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
g=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&((t?t.ownerDocument||t:P)!==A&&I(t),t=t||A,N)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==g&&(l=fe.exec(e)))
// ID selector
if(r=l[1]){
// Document context
if(9===g){if(!(a=t.getElementById(r)))return n;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===r)return n.push(a),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(h&&(a=h.getElementById(r))&&M(t,a)&&a.id===r)return n.push(a),n}else{if(l[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((r=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(r)),n}
// Take advantage of querySelectorAll
if(w.qsa&&!q[e+" "]&&(!L||!L.test(e))){if(1!==g)h=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(s=t.getAttribute("id"))?s=s.replace(be,we):t.setAttribute("id",s=R),
// Prefix every selector in the list
c=x(e),o=c.length;o--;)c[o]="#"+s+" "+u(c[o]);p=c.join(","),
// Expand context for sibling selectors
h=me.test(e)&&d(t.parentNode)||t}if(p)try{return Q.apply(n,h.querySelectorAll(p)),n}catch(e){}finally{s===R&&t.removeAttribute("id")}}}
// All others
return T(e.replace(oe,"$1"),t,n,i)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function n(){function e(n,i){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return t.push(n+" ")>j.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function i(e){return e[R]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function r(e){var t=A.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function o(e,t){for(var n=e.split("|"),i=n.length;i--;)j.attrHandle[n[i]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function a(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(i)return i;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function s(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
// Option elements defer to a parent optgroup if present
// Where there is no isDisabled, check manually
/* jshint -W018 */
return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&_e(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function l(e){return i(function(t){return t=+t,i(function(n,i){
// Match elements found at the specified indexes
for(var r,o=e([],n.length,t),a=o.length;a--;)n[r=o[a]]&&(n[r]=!(i[r]=n[r]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function d(e){return e&&void 0!==e.getElementsByTagName&&e}
// Easy API for creating new setFilters
function c(){}function u(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=t.next,o=r||i,a=n&&"parentNode"===o,s=B++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||a)return e(t,n,r);return!1}:function(t,n,l){var d,c,u,p=[z,s];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;t=t[i];)if((1===t.nodeType||a)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||a)if(u=t[R]||(t[R]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=u[t.uniqueID]||(u[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((d=c[o])&&d[0]===z&&d[1]===s)
// Assign to newCache so results back-propagate to previous elements
return p[2]=d[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
c[o]=p,p[2]=e(t,n,l))return!0}return!1}}function h(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function g(e,n,i){for(var r=0,o=n.length;r<o;r++)t(e,n[r],i);return i}function f(e,t,n,i,r){for(var o,a=[],s=0,l=e.length,d=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,i,r)||(a.push(o),d&&t.push(s)));return a}function m(e,t,n,r,o,a){return r&&!r[R]&&(r=m(r)),o&&!o[R]&&(o=m(o,a)),i(function(i,a,s,l){var d,c,u,p=[],h=[],m=a.length,
// Get initial elements from seed or context
v=i||g(t||"*",s.nodeType?[s]:s,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
y=!e||!i&&t?v:f(v,p,e,s,l),b=n?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
o||(i?e:m||r)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
a:y;
// Apply postFilter
if(
// Find primary matches
n&&n(y,b,s,l),r)for(d=f(b,h),r(d,[],s,l),
// Un-match failing elements by moving them back to matcherIn
c=d.length;c--;)(u=d[c])&&(b[h[c]]=!(y[h[c]]=u));if(i){if(o||e){if(o){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
d=[],c=b.length;c--;)(u=b[c])&&
// Restore matcherIn since elem is not yet a final match
d.push(y[c]=u);o(null,b=[],d,l)}for(
// Move matched elements from seed to results to keep them synchronized
c=b.length;c--;)(u=b[c])&&(d=o?J(i,u):p[c])>-1&&(i[d]=!(a[d]=u))}}else b=f(b===a?b.splice(m,b.length):b),o?o(null,a,b,l):Q.apply(a,b)})}function v(e){for(var t,n,i,r=e.length,o=j.relative[e[0].type],a=o||j.relative[" "],s=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=p(function(e){return e===t},a,!0),d=p(function(e){return J(t,e)>-1},a,!0),c=[function(e,n,i){var r=!o&&(i||n!==k)||((t=n).nodeType?l(e,n,i):d(e,n,i));
// Avoid hanging onto element (issue #299)
return t=null,r}];s<r;s++)if(n=j.relative[e[s].type])c=[p(h(c),n)];else{
// Return special upon seeing a positional matcher
if(n=j.filter[e[s].type].apply(null,e[s].matches),n[R]){for(
// Find the next relative operator (if any) for proper handling
i=++s;i<r&&!j.relative[e[i].type];i++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return m(s>1&&h(c),s>1&&u(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(oe,"$1"),n,s<i&&v(e.slice(s,i)),i<r&&v(e=e.slice(i)),i<r&&u(e))}c.push(n)}return h(c)}function y(e,n){var r=n.length>0,o=e.length>0,a=function(i,a,s,l,d){var c,u,p,h=0,g="0",m=i&&[],v=[],y=k,
// We must always have either seed elements or outermost context
b=i||o&&j.find.TAG("*",d),
// Use integer dirruns iff this is the outermost matcher
w=z+=null==y?1:Math.random()||.1,_=b.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(d&&(k=a===A||a||d);g!==_&&null!=(c=b[g]);g++){if(o&&c){for(u=0,a||c.ownerDocument===A||(I(c),s=!N);p=e[u++];)if(p(c,a||A,s)){l.push(c);break}d&&(z=w)}
// Track unmatched elements for set filters
r&&(
// They will have gone through all possible matchers
(c=!p&&c)&&h--,
// Lengthen the array for every element, matched or not
i&&m.push(c))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
h+=g,r&&g!==h){for(u=0;p=n[u++];)p(m,v,a,s);if(i){
// Reintegrate element matches to eliminate the need for sorting
if(h>0)for(;g--;)m[g]||v[g]||(v[g]=Y.call(l));
// Discard index placeholder values to get only actual matches
v=f(v)}
// Add matches to results
Q.apply(l,v),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
d&&!i&&v.length>0&&h+n.length>1&&t.uniqueSort(l)}
// Override manipulation of globals by nested matchers
return d&&(z=w,k=y),m};return r?i(a):a}var b,w,j,_,C,x,E,T,k,D,S,
// Local document vars
I,A,O,N,L,$,H,M,
// Instance-specific data
R="sizzle"+1*new Date,P=e.document,z=0,B=0,W=n(),F=n(),q=n(),U=function(e,t){return e===t&&(S=!0),0},
// Instance methods
V={}.hasOwnProperty,G=[],Y=G.pop,K=G.push,Q=G.push,X=G.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
J=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ee="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
te="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ne="\\["+ee+"*("+te+")(?:"+ee+
// Operator (capture 2)
"*([*^$|!~]?=)"+ee+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+te+"))|)"+ee+"*\\]",ie=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ne+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
re=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),le=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),de=new RegExp(ie),ce=new RegExp("^"+te+"$"),ue={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+ie),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
fe=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ve=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),ye=function(e,t,n){var i="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,we=function(e,t){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
je=function(){I()},_e=p(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Q.apply(G=X.call(P.childNodes),P.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
G[P.childNodes.length].nodeType}catch(e){Q={apply:G.length?
// Leverage slice if possible
function(e,t){K.apply(e,X.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}
// Expose support vars for convenience
w=t.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
C=t.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
I=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:P;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID filter and find
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return i!==A&&9===i.nodeType&&i.documentElement?(A=i,O=A.documentElement,N=!C(A),P!==A&&(n=A.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",je,!1):n.attachEvent&&n.attachEvent("onunload",je)),w.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=r(function(e){return e.appendChild(A.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ge.test(A.getElementsByClassName),w.getById=r(function(e){return O.appendChild(e).id=R,!A.getElementsByName||!A.getElementsByName(R).length}),w.getById?(j.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){return e.getAttribute("id")===t}},j.find.ID=function(e,t){if(void 0!==t.getElementById&&N){var n=t.getElementById(e);return n?[n]:[]}}):(j.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},j.find.ID=function(e,t){if(void 0!==t.getElementById&&N){var n,i,r,o=t.getElementById(e);if(o){if((
// Verify the id attribute
n=o.getAttributeNode("id"))&&n.value===e)return[o];for(
// Fall back on getElementsByName
r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),j.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);
// Filter out possible comments
if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},j.find.CLASS=w.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&N)return t.getElementsByClassName(e)},$=[],L=[],(w.qsa=ge.test(A.querySelectorAll))&&(r(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
O.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+ee+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||L.push("\\["+ee+"*(?:value|"+Z+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+R+"-]").length||L.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||L.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+R+"+*").length||L.push(".#.+[+~]")}),r(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=A.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&L.push("name"+ee+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&L.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
O.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&L.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),L.push(",.*:")})),(w.matchesSelector=ge.test(H=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&r(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
w.disconnectedMatch=H.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
H.call(e,"[s!='']:x"),$.push("!=",ie)}),L=L.length&&new RegExp(L.join("|")),$=$.length&&new RegExp($.join("|")),t=ge.test(O.compareDocumentPosition),M=t||ge.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){
// Flag for duplicate removal
if(e===t)return S=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===A||e.ownerDocument===P&&M(P,e)?-1:t===A||t.ownerDocument===P&&M(P,t)?1:D?J(D,e)-J(D,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return S=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,s=[e],l=[t];
// Parentless nodes are either documents or disconnected
if(!r||!o)return e===A?-1:t===A?1:r?-1:o?1:D?J(D,e)-J(D,t):0;if(r===o)return a(e,t);for(
// Otherwise we need full lists of their ancestors for comparison
n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);
// Walk down the tree looking for a discrepancy
for(;s[i]===l[i];)i++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return i?a(s[i],l[i]):s[i]===P?-1:l[i]===P?1:0},A):A},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(
// Set document vars if needed
(e.ownerDocument||e)!==A&&I(e),
// Make sure that attribute selectors are quoted
n=n.replace(le,"='$1']"),w.matchesSelector&&N&&!q[n+" "]&&(!$||!$.test(n))&&(!L||!L.test(n)))try{var i=H.call(e,n);
// IE 9's matchesSelector returns false on disconnected nodes
if(i||w.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,A,null,[e]).length>0},t.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==A&&I(e),M(e,t)},t.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==A&&I(e);var n=j.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
i=n&&V.call(j.attrHandle,t.toLowerCase())?n(e,t,!N):void 0;return void 0!==i?i:w.attributes||!N?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.escape=function(e){return(e+"").replace(be,we)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(
// Unless we *know* we can detect duplicates, assume their presence
S=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),S){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return D=null,e},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
_=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=_(e)}else if(3===r||4===r)return e.nodeValue}else
// If no nodeType, this is expected to be an array
for(;t=e[i++];)
// Do not traverse comment nodes
n+=_(t);
// Do not include comment or processing instruction nodes
return n},j=t.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:i,match:ue,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){
// Move the given value to match[3] whether quoted or unquoted
return e[1]=e[1].replace(ve,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return ue.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=x(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ve,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(r){var o=t.attr(r,e);return null==o?"!="===n:!n||(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o.replace(re," ")+" ").indexOf(i)>-1:"|="===n&&(o===i||o.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
// Shortcut for :nth-*(n)
return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var d,c,u,p,h,g,f=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s,b=!1;if(m){
// :(first|last|only)-(child|of-type)
if(o){for(;f;){for(p=t;p=p[f];)if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
g=f="only"===e&&!g&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(g=[a?m.firstChild:m.lastChild],a&&y){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
p=m,u=p[R]||(p[R]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=u[p.uniqueID]||(u[p.uniqueID]={}),d=c[e]||[],h=d[0]===z&&d[1],b=h&&d[2],p=h&&m.childNodes[h];p=++h&&p&&p[f]||(
// Fallback to seeking `elem` from the start
b=h=0)||g.pop();)
// When found, cache indexes on `parent` and break
if(1===p.nodeType&&++b&&p===t){c[e]=[z,h,b];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
y&&(
// ...in a gzip-friendly way
p=t,u=p[R]||(p[R]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=u[p.uniqueID]||(u[p.uniqueID]={}),d=c[e]||[],h=d[0]===z&&d[1],b=h),!1===b)
// Use the same loop as above to seek `elem` from the start
for(;(p=++h&&p&&p[f]||(b=h=0)||g.pop())&&((s?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++b||(
// Cache the index of each encountered element
y&&(u=p[R]||(p[R]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=u[p.uniqueID]||(u[p.uniqueID]={}),c[e]=[z,b]),p!==t)););
// Incorporate the offset, then check against cycle size
return(b-=r)===i||b%i==0&&b/i>=0}}},PSEUDO:function(e,n){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var r,o=j.pseudos[e]||j.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return o[R]?o(n):o.length>1?(r=[e,e,"",n],j.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),a=r.length;a--;)i=J(e,r[a]),e[i]=!(t[i]=r[a])}):function(e){return o(e,0,r)}):o}},pseudos:{
// Potentially complex pseudos
not:i(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],r=E(e.replace(oe,"$1"));return r[R]?i(function(e,t,n,i){
// Match elements unmatched by `matcher`
for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){
// Don't keep the element (issue #299)
return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(ve,ye),function(t){return(t.textContent||t.innerText||_(t)).indexOf(e)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:i(function(e){
// lang value must be a valid identifier
return ce.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t){var n;do{if(n=N?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===A.activeElement&&(!A.hasFocus||A.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:s(!1),disabled:s(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!j.pseudos.empty(e)},
// Element/input types
header:function(e){return he.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),gt:l(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}},j.pseudos.nth=j.pseudos.eq;
// Add button/input type pseudos
for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})j.pseudos[b]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(b);for(b in{submit:!0,reset:!0})j.pseudos[b]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(b);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return c.prototype=j.filters=j.pseudos,j.setFilters=new c,x=t.tokenize=function(e,n){var i,r,o,a,s,l,d,c=F[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],d=j.preFilter;s;){
// Comma and first run
i&&!(r=ae.exec(s))||(r&&(
// Don't consume trailing commas as valid
s=s.slice(r[0].length)||s),l.push(o=[])),i=!1,
// Combinators
(r=se.exec(s))&&(i=r.shift(),o.push({value:i,
// Cast descendant combinators to space
type:r[0].replace(oe," ")}),s=s.slice(i.length));
// Filters
for(a in j.filter)!(r=ue[a].exec(s))||d[a]&&!(r=d[a](r))||(i=r.shift(),o.push({value:i,type:a,matches:r}),s=s.slice(i.length));if(!i)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return n?s.length:s?t.error(e):F(e,l).slice(0)},E=t.compile=function(e,t){var n,i=[],r=[],o=q[e+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=x(e)),n=t.length;n--;)o=v(t[n]),o[R]?i.push(o):r.push(o);
// Cache the compiled function
o=q(e,y(r,i)),
// Save selector and tokenization
o.selector=e}return o},T=t.select=function(e,t,n,i){var r,o,a,s,l,c="function"==typeof e&&e,p=!i&&x(e=c.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===p.length){if(
// Reduce context if the leading compound selector is an ID
o=p[0]=p[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&N&&j.relative[o[1].type]){if(!(t=(j.find.ID(a.matches[0].replace(ve,ye),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
r=ue.needsContext.test(e)?0:o.length;r--&&(a=o[r],!j.relative[s=a.type]);)if((l=j.find[s])&&(i=l(a.matches[0].replace(ve,ye),me.test(o[0].type)&&d(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(r,1),!(e=i.length&&u(o)))return Q.apply(n,i),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(c||E(e,p))(i,t,!N,n,!t||me.test(e)&&d(t.parentNode)||t),n},w.sortStable=R.split("").sort(U).join("")===R,w.detectDuplicates=!!S,I(),w.sortDetached=r(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(A.createElement("fieldset"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(n);Ee.find=ke,Ee.expr=ke.selectors,
// Deprecated
Ee.expr[":"]=Ee.expr.pseudos,Ee.uniqueSort=Ee.unique=ke.uniqueSort,Ee.text=ke.getText,Ee.isXMLDoc=ke.isXML,Ee.contains=ke.contains,Ee.escapeSelector=ke.escape;var De=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&Ee(e).is(n))break;i.push(e)}return i},Se=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Ie=Ee.expr.match.needsContext,Ae=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;Ee.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?Ee.find.matchesSelector(i,e)?[i]:[]:Ee.find.matches(e,Ee.grep(t,function(e){return 1===e.nodeType}))},Ee.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(Ee(e).filter(function(){for(t=0;t<i;t++)if(Ee.contains(r[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)Ee.find(e,r[t],n);return i>1?Ee.uniqueSort(n):n},filter:function(e){return this.pushStack(c(this,e||[],!1))},not:function(e){return this.pushStack(c(this,e||[],!0))},is:function(e){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!c(this,"string"==typeof e&&Ie.test(e)?Ee(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var Oe,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Ne=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
// Give the init function the jQuery prototype for later instantiation
(Ee.fn.init=function(e,t,n){var i,r;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||Oe,"string"==typeof e){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ne.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(html) -> $(array)
if(i[1]){
// HANDLE: $(html, props)
if(t=t instanceof Ee?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
Ee.merge(this,Ee.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:ce,!0)),Ae.test(i[1])&&Ee.isPlainObject(t))for(i in t)
// Properties of context are called as methods if possible
_e(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}
// Inject the element directly into the jQuery object
return r=ce.getElementById(i[2]),r&&(this[0]=r,this.length=1),this}
// Execute immediately if ready is not present
return e.nodeType?(this[0]=e,this.length=1,this):_e(e)?void 0!==n.ready?n.ready(e):e(Ee):Ee.makeArray(e,this)}).prototype=Ee.fn,
// Initialize central reference
Oe=Ee(ce);var Le=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
$e={children:!0,contents:!0,next:!0,prev:!0};Ee.fn.extend({has:function(e){var t=Ee(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(Ee.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],a="string"!=typeof e&&Ee(e);
// Positional selectors never match, since there's no _selection_ context
if(!Ie.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(a?a.index(n)>-1:
// Don't pass non-elements to Sizzle
1===n.nodeType&&Ee.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Ee.uniqueSort(o):o)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?fe.call(Ee(e),this[0]):fe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(),Ee(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Ee.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return De(e,"parentNode")},parentsUntil:function(e,t,n){return De(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return De(e,"nextSibling")},prevAll:function(e){return De(e,"previousSibling")},nextUntil:function(e,t,n){return De(e,"nextSibling",n)},prevUntil:function(e,t,n){return De(e,"previousSibling",n)},siblings:function(e){return Se((e.parentNode||{}).firstChild,e)},children:function(e){return Se(e.firstChild)},contents:function(e){
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
return d(e,"iframe")?e.contentDocument:(d(e,"template")&&(e=e.content||e),Ee.merge([],e.childNodes))}},function(e,t){Ee.fn[e]=function(n,i){var r=Ee.map(this,t,n);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=Ee.filter(i,r)),this.length>1&&($e[e]||Ee.uniqueSort(r),Le.test(e)&&r.reverse()),this.pushStack(r)}});var He=/[^\x20\t\r\n\f]+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
Ee.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?p(e):Ee.extend({},e);var// Flag to know if list is currently firing
t,
// Last fire value for non-forgettable lists
n,
// Flag to know if list was already fired
i,
// Flag to prevent firing
r,
// Actual callback list
o=[],
// Queue of execution data for repeatable lists
a=[],
// Index of currently firing callback (modified by add/remove as needed)
l=-1,
// Fire callbacks
d=function(){for(
// Enforce single-firing
r=r||e.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
i=t=!0;a.length;l=-1)for(n=a.shift();++l<o.length;)
// Run callback and check for early termination
!1===o[l].apply(n[0],n[1])&&e.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
l=o.length,n=!1);
// Forget the data if we're done with it
e.memory||(n=!1),t=!1,
// Clean up if we're done firing for good
r&&(
// Keep an empty list if we have data for future add calls
o=n?[]:"")},
// Actual Callbacks object
c={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return o&&(n&&!t&&(l=o.length-1,a.push(n)),function t(n){Ee.each(n,function(n,i){_e(i)?e.unique&&c.has(i)||o.push(i):i&&i.length&&"string"!==s(i)&&
// Inspect recursively
t(i)})}(arguments),n&&!t&&d()),this},
// Remove a callback from the list
remove:function(){return Ee.each(arguments,function(e,t){for(var n;(n=Ee.inArray(t,o,n))>-1;)o.splice(n,1),
// Handle firing indexes
n<=l&&l--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?Ee.inArray(e,o)>-1:o.length>0},
// Remove all callbacks from the list
empty:function(){return o&&(o=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return r=a=[],o=n="",this},disabled:function(){return!o},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return r=a=[],n||t||(o=n=""),this},locked:function(){return!!r},
// Call all callbacks with the given context and arguments
fireWith:function(e,n){return r||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||d()),this},
// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!i}};return c},Ee.extend({Deferred:function(e){var t=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",Ee.Callbacks("memory"),Ee.Callbacks("memory"),2],["resolve","done",Ee.Callbacks("once memory"),Ee.Callbacks("once memory"),0,"resolved"],["reject","fail",Ee.Callbacks("once memory"),Ee.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var e=arguments;return Ee.Deferred(function(n){Ee.each(t,function(t,i){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var r=_e(e[i[4]])&&e[i[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&_e(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(e,i,r){function o(e,t,i,r){return function(){var s=this,l=arguments,d=function(){var n,d;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<a)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((n=i.apply(s,l))===t.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
d=n&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof n||"function"==typeof n)&&n.then,
// Handle a returned thenable
_e(d)?
// Special processors (notify) just wait for resolution
r?d.call(n,o(a,t,h,r),o(a,t,g,r)):(
// ...and disregard older resolution values
a++,d.call(n,o(a,t,h,r),o(a,t,g,r),o(a,t,h,t.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
i!==h&&(s=void 0,l=[n]),
// Process the value(s)
// Default process is resolve
(r||t.resolveWith)(s,l))}},
// Only normal processors (resolve) catch and reject exceptions
c=r?d:function(){try{d()}catch(n){Ee.Deferred.exceptionHook&&Ee.Deferred.exceptionHook(n,c.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
e+1>=a&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
i!==g&&(s=void 0,l=[n]),t.rejectWith(s,l))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?c():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
Ee.Deferred.getStackHook&&(c.stackTrace=Ee.Deferred.getStackHook()),n.setTimeout(c))}}var a=0;return Ee.Deferred(function(n){
// progress_handlers.add( ... )
t[0][3].add(o(0,n,_e(r)?r:h,n.notifyWith)),
// fulfilled_handlers.add( ... )
t[1][3].add(o(0,n,_e(e)?e:h)),
// rejected_handlers.add( ... )
t[2][3].add(o(0,n,_e(i)?i:g))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?Ee.extend(e,r):r}},o={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return Ee.each(t,function(e,n){var a=n[2],s=n[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[n[1]]=a.add,
// Handle state
s&&a.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
i=s},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
t[3-e][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
t[3-e][3].disable,
// progress_callbacks.lock
t[0][2].lock,
// progress_handlers.lock
t[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
a.add(n[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[n[0]+"With"]=a.fireWith}),r.promise(o),e&&e.call(o,o),o},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
t=arguments.length,
// count of unprocessed arguments
n=t,
// subordinate fulfillment data
i=Array(n),r=pe.call(arguments),
// the master Deferred
o=Ee.Deferred(),
// subordinate callback factory
a=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?pe.call(arguments):n,--t||o.resolveWith(i,r)}};
// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(f(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||_e(r[n]&&r[n].then)))return o.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)f(r[n],a(n),o.reject);return o.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Me=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;Ee.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
n.console&&n.console.warn&&e&&Me.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},Ee.readyException=function(e){n.setTimeout(function(){throw e})};
// The deferred used on DOM ready
var Re=Ee.Deferred();Ee.fn.ready=function(e){return Re.then(e).catch(function(e){Ee.readyException(e)}),this},Ee.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--Ee.readyWait:Ee.isReady)||(
// Remember that the DOM is ready
Ee.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
!0!==e&&--Ee.readyWait>0||
// If there are functions bound, to execute
Re.resolveWith(ce,[Ee]))}}),Ee.ready.then=Re.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===ce.readyState||"loading"!==ce.readyState&&!ce.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
n.setTimeout(Ee.ready):(
// Use the handy event callback
ce.addEventListener("DOMContentLoaded",m),
// A fallback to window.onload, that will always work
n.addEventListener("load",m));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Pe=function(e,t,n,i,r,o,a){var l=0,d=e.length,c=null==n;
// Sets many values
if("object"===s(n)){r=!0;for(l in n)Pe(e,t,l,n[l],!0,o,a)}else if(void 0!==i&&(r=!0,_e(i)||(a=!0),c&&(
// Bulk operations run against the entire set
a?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(Ee(e),n)})),t))for(;l<d;l++)t(e[l],n,a?i:i.call(e[l],l,t(e[l],n)));
// Gets
return r?e:c?t.call(e):d?t(e[0],n):o},ze=/^-ms-/,Be=/-([a-z])/g,We=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};b.uid=1,b.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return t||(t={},We(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)r[y(t)]=n;else
// Copy the properties one-by-one to the cache object
for(i in t)r[y(i)]=t[i];return r},get:function(e,t){
// Always use camelCase key (gh-2257)
return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][y(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){
// Support array or space separated string of keys
Array.isArray(t)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=t.map(y):(t=y(t),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
t=t in i?[t]:t.match(He)||[]),n=t.length;for(;n--;)delete i[t[n]]}
// Remove the expando if there's no more data
(void 0===t||Ee.isEmptyObject(i))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!Ee.isEmptyObject(t)}};var Fe=new b,qe=new b,Ue=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ve=/[A-Z]/g;Ee.extend({hasData:function(e){return qe.hasData(e)||Fe.hasData(e)},data:function(e,t,n){return qe.access(e,t,n)},removeData:function(e,t){qe.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Fe.access(e,t,n)},_removeData:function(e,t){Fe.remove(e,t)}}),Ee.fn.extend({data:function(e,t){var n,i,r,o=this[0],a=o&&o.attributes;
// Gets all values
if(void 0===e){if(this.length&&(r=qe.get(o),1===o.nodeType&&!Fe.get(o,"hasDataAttrs"))){for(n=a.length;n--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
a[n]&&(i=a[n].name,0===i.indexOf("data-")&&(i=y(i.slice(5)),j(o,i,r[i])));Fe.set(o,"hasDataAttrs",!0)}return r}
// Sets multiple values
// Sets multiple values
return"object"==typeof e?this.each(function(){qe.set(this,e)}):Pe(this,function(t){var n;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t){if(void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
n=qe.get(o,e)))return n;if(void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
n=j(o,e)))return n}else
// Set the data...
this.each(function(){
// We always store the camelCased key
qe.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){qe.remove(this,e)})}}),Ee.extend({queue:function(e,t,n){var i;if(e)
// Speed up dequeue by getting out quickly if this is just a lookup
return t=(t||"fx")+"queue",i=Fe.get(e,t),n&&(!i||Array.isArray(n)?i=Fe.access(e,t,Ee.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=Ee.queue(e,t),i=n.length,r=n.shift(),o=Ee._queueHooks(e,t),a=function(){Ee.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===r&&(r=n.shift(),i--),r&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete o.stop,r.call(e,a,o)),!i&&o&&o.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Fe.get(e,n)||Fe.access(e,n,{empty:Ee.Callbacks("once memory").add(function(){Fe.remove(e,[t+"queue",n])})})}}),Ee.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Ee.queue(this[0],e):void 0===t?this:this.each(function(){var n=Ee.queue(this,e,t);
// Ensure a hooks for this queue
Ee._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Ee.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Ee.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,i=1,r=Ee.Deferred(),o=this,a=this.length,s=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Fe.get(o[a],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}});var Ge=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ye=new RegExp("^(?:([+-])=|)("+Ge+")([a-z%]*)$","i"),Ke=["Top","Right","Bottom","Left"],Qe=function(e,t){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return e=t||e,"none"===e.style.display||""===e.style.display&&Ee.contains(e.ownerDocument,e)&&"none"===Ee.css(e,"display")},Xe=function(e,t,n,i){var r,o,a={};
// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);
// Revert the old values
for(o in t)e.style[o]=a[o];return r},Je={};Ee.fn.extend({show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Qe(this)?Ee(this).show():Ee(this).hide()})}});var Ze=/^(?:checkbox|radio)$/i,et=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,tt=/^$|^module$|\/(?:java|ecma)script/i,nt={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
nt.optgroup=nt.option,nt.tbody=nt.tfoot=nt.colgroup=nt.caption=nt.thead,nt.th=nt.td;var it=/<|&#?\w+;/;!function(){var e=ce.createDocumentFragment(),t=e.appendChild(ce.createElement("div")),n=ce.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
je.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
t.innerHTML="<textarea>x</textarea>",je.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var rt=ce.documentElement,ot=/^key/,at=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,st=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
Ee.event={global:{},add:function(e,t,n,i,r){var o,a,s,l,d,c,u,p,h,g,f,m=Fe.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(m)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(o=n,n=o.handler,r=o.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
r&&Ee.find.matchesSelector(rt,r),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=Ee.guid++),
// Init the element's event structure and main handler, if this is the first
(l=m.events)||(l=m.events={}),(a=m.handle)||(a=m.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==Ee&&Ee.event.triggered!==t.type?Ee.event.dispatch.apply(e,arguments):void 0}),
// Handle multiple events separated by a space
t=(t||"").match(He)||[""],d=t.length;d--;)s=st.exec(t[d])||[],h=f=s[1],g=(s[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
h&&(
// If event changes its type, use the special event handlers for the changed type
u=Ee.event.special[h]||{},
// If selector defined, determine special event api type, otherwise given type
h=(r?u.delegateType:u.bindType)||h,
// Update special based on newly reset type
u=Ee.event.special[h]||{},
// handleObj is passed to all event handlers
c=Ee.extend({type:h,origType:f,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&Ee.expr.match.needsContext.test(r),namespace:g.join(".")},o),
// Init the event handler queue if we're the first
(p=l[h])||(p=l[h]=[],p.delegateCount=0,
// Only use addEventListener if the special events handler returns false
u.setup&&!1!==u.setup.call(e,i,g,a)||e.addEventListener&&e.addEventListener(h,a)),u.add&&(u.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
r?p.splice(p.delegateCount++,0,c):p.push(c),
// Keep track of which events have ever been used, for event optimization
Ee.event.global[h]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,i,r){var o,a,s,l,d,c,u,p,h,g,f,m=Fe.hasData(e)&&Fe.get(e);if(m&&(l=m.events)){for(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(He)||[""],d=t.length;d--;)
// Unbind all events (on this namespace, if provided) for the element
if(s=st.exec(t[d])||[],h=f=s[1],g=(s[2]||"").split(".").sort(),h){for(u=Ee.event.special[h]||{},h=(i?u.delegateType:u.bindType)||h,p=l[h]||[],s=s[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
a=o=p.length;o--;)c=p[o],!r&&f!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,u.remove&&u.remove.call(e,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!p.length&&(u.teardown&&!1!==u.teardown.call(e,g,m.handle)||Ee.removeEvent(e,h,m.handle),delete l[h])}else for(h in l)Ee.event.remove(e,h+t[d],n,i,!0);
// Remove data and the expando if it's no longer used
Ee.isEmptyObject(l)&&Fe.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t,n,i,r,o,a,s=Ee.event.fix(e),l=new Array(arguments.length),d=(Fe.get(this,"events")||{})[s.type]||[],c=Ee.event.special[s.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=s,t=1;t<arguments.length;t++)l[t]=arguments[t];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(
// Determine handlers
a=Ee.event.handlers.call(this,s,d),
// Run delegates first; they may want to stop propagation beneath us
t=0;(r=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!s.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(i=((Ee.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,l))&&!1===(s.result=i)&&(s.preventDefault(),s.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,i,r,o,a,s=[],l=t.delegateCount,d=e.target;
// Find delegate handlers
if(l&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
d.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1))for(;d!==this;d=d.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===d.nodeType&&("click"!==e.type||!0!==d.disabled)){for(o=[],a={},n=0;n<l;n++)i=t[n],
// Don't conflict with Object.prototype properties (#13203)
r=i.selector+" ",void 0===a[r]&&(a[r]=i.needsContext?Ee(r,this).index(d)>-1:Ee.find(r,this,null,[d]).length),a[r]&&o.push(i);o.length&&s.push({elem:d,handlers:o})}
// Add the remaining (directly-bound) handlers
return d=this,l<t.length&&s.push({elem:d,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(Ee.Event.prototype,e,{enumerable:!0,configurable:!0,get:_e(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[Ee.expando]?e:new Ee.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==I()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===I()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&d(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return d(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},Ee.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},Ee.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof Ee.Event))return new Ee.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?D:S,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
t&&Ee.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),
// Mark it as fixed
this[Ee.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
Ee.Event.prototype={constructor:Ee.Event,isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=D,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=D,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=D,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
Ee.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==e.which&&ot.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&at.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},Ee.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
Ee.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Ee.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return r&&(r===i||Ee.contains(i,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Ee.fn.extend({on:function(e,t,n,i){return A(this,e,t,n,i)},one:function(e,t,n,i){return A(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return i=e.handleObj,Ee(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){
// ( types-object [, selector] )
for(r in e)this.off(r,t,e[r]);return this}
// ( types [, fn] )
return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=S),this.each(function(){Ee.event.remove(this,e,n,t)})}});var/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
lt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
dt=/<script|<style|<link/i,
// checked="checked" or checked
ct=/checked\s*(?:[^=]|=\s*.checked.)/i,ut=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;Ee.extend({htmlPrefilter:function(e){return e.replace(lt,"<$1></$2>")},clone:function(e,t,n){var i,r,o,a,s=e.cloneNode(!0),l=Ee.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(je.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Ee.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
a=E(s),o=E(e),i=0,r=o.length;i<r;i++)H(o[i],a[i]);
// Copy the events from the original to the clone
if(t)if(n)for(o=o||E(e),a=a||E(s),i=0,r=o.length;i<r;i++)$(o[i],a[i]);else $(e,s);
// Return the cloned set
// Preserve script evaluation history
return a=E(s,"script"),a.length>0&&T(a,!l&&E(e,"script")),s},cleanData:function(e){for(var t,n,i,r=Ee.event.special,o=0;void 0!==(n=e[o]);o++)if(We(n)){if(t=n[Fe.expando]){if(t.events)for(i in t.events)r[i]?Ee.event.remove(n,i):Ee.removeEvent(n,i,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Fe.expando]=void 0}n[qe.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[qe.expando]=void 0)}}}),Ee.fn.extend({detach:function(e){return R(this,e,!0)},remove:function(e){return R(this,e)},text:function(e){return Pe(this,function(e){return void 0===e?Ee.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return M(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){O(this,e).appendChild(e)}})},prepend:function(){return M(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=O(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return M(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return M(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
Ee.cleanData(E(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Ee.clone(this,e,t)})},html:function(e){return Pe(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!dt.test(e)&&!nt[(et.exec(e)||["",""])[1].toLowerCase()]){e=Ee.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},
// Remove element nodes and prevent memory leaks
1===t.nodeType&&(Ee.cleanData(E(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];
// Make the changes, replacing each non-ignored context element with the new content
return M(this,arguments,function(t){var n=this.parentNode;Ee.inArray(this,e)<0&&(Ee.cleanData(E(this)),n&&n.replaceChild(t,this))},e)}}),Ee.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Ee.fn[e]=function(e){for(var n,i=[],r=Ee(e),o=r.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),Ee(r[a])[t](n),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ge.apply(i,n.get());return this.pushStack(i)}});var pt=new RegExp("^("+Ge+")(?!px)[a-z%]+$","i"),ht=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},gt=new RegExp(Ke.join("|"),"i");!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(d){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",d.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",rt.appendChild(l).appendChild(d);var e=n.getComputedStyle(d);i="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
s=12===t(e.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
d.style.right="60%",a=36===t(e.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===t(e.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
d.style.position="absolute",o=36===d.offsetWidth||"absolute",rt.removeChild(l),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
d=null}}function t(e){return Math.round(parseFloat(e))}var i,r,o,a,s,l=ce.createElement("div"),d=ce.createElement("div");
// Finish early in limited (non-browser) environments
d.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",je.clearCloneStyle="content-box"===d.style.backgroundClip,Ee.extend(je,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),o}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
ft=/^(none|table(?!-c[ea]).+)/,mt=/^--/,vt={position:"absolute",visibility:"hidden",display:"block"},yt={letterSpacing:"0",fontWeight:"400"},bt=["Webkit","Moz","ms"],wt=ce.createElement("div").style;Ee.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=P(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,i){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var r,o,a,s=y(t),l=mt.test(t),d=e.style;
// Check if we're setting a value
if(
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
l||(t=W(s)),
// Gets hook for the prefixed version, then unprefixed version
a=Ee.cssHooks[t]||Ee.cssHooks[s],void 0===n)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return a&&"get"in a&&void 0!==(r=a.get(e,!1,i))?r:d[t];o=typeof n,
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===o&&(r=Ye.exec(n))&&r[1]&&(n=_(e,t,r),
// Fixes bug #9237
o="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n===n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===o&&(n+=r&&r[3]||(Ee.cssNumber[s]?"":"px")),
// background-* props affect original clone's values
je.clearCloneStyle||""!==n||0!==t.indexOf("background")||(d[t]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
a&&"set"in a&&void 0===(n=a.set(e,n,i))||(l?d.setProperty(t,n):d[t]=n))}},css:function(e,t,n,i){var r,o,a,s=y(t);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return mt.test(t)||(t=W(s)),a=Ee.cssHooks[t]||Ee.cssHooks[s],a&&"get"in a&&(r=a.get(e,!0,n)),void 0===r&&(r=P(e,t,i)),"normal"===r&&t in yt&&(r=yt[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),Ee.each(["height","width"],function(e,t){Ee.cssHooks[t]={get:function(e,n,i){if(n)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
return!ft.test(Ee.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?U(e,t,i):Xe(e,vt,function(){return U(e,t,i)})},set:function(e,n,i){var r,o=ht(e),a="border-box"===Ee.css(e,"boxSizing",!1,o),s=i&&q(e,t,i,a,o);
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
// Convert to pixels if value adjustment is needed
return a&&je.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-q(e,t,"border",!1,o)-.5)),s&&(r=Ye.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=Ee.css(e,t)),F(e,n,s)}}}),Ee.cssHooks.marginLeft=z(je.reliableMarginLeft,function(e,t){if(t)return(parseFloat(P(e,"marginLeft"))||e.getBoundingClientRect().left-Xe(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
Ee.each({margin:"",padding:"",border:"Width"},function(e,t){Ee.cssHooks[e+t]={expand:function(n){for(var i=0,r={},
// Assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+Ke[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(Ee.cssHooks[e+t].set=F)}),Ee.fn.extend({css:function(e,t){return Pe(this,function(e,t,n){var i,r,o={},a=0;if(Array.isArray(t)){for(i=ht(e),r=t.length;a<r;a++)o[t[a]]=Ee.css(e,t[a],!1,i);return o}return void 0!==n?Ee.style(e,t,n):Ee.css(e,t)},e,t,arguments.length>1)}}),Ee.Tween=V,V.prototype={constructor:V,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||Ee.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(Ee.cssNumber[n]?"":"px")},cur:function(){var e=V.propHooks[this.prop];return e&&e.get?e.get(this):V.propHooks._default.get(this)},run:function(e){var t,n=V.propHooks[this.prop];return this.options.duration?this.pos=t=Ee.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):V.propHooks._default.set(this),this}},V.prototype.init.prototype=V.prototype,V.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=Ee.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
Ee.fx.step[e.prop]?Ee.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[Ee.cssProps[e.prop]]&&!Ee.cssHooks[e.prop]?e.elem[e.prop]=e.now:Ee.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
V.propHooks.scrollTop=V.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Ee.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},Ee.fx=V.prototype.init,
// Back compat <1.8 extension point
Ee.fx.step={};var jt,_t,Ct=/^(?:toggle|show|hide)$/,xt=/queueHooks$/;Ee.Animation=Ee.extend(Z,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return _(n.elem,e,Ye.exec(t),n),n}]},tweener:function(e,t){_e(e)?(t=e,e=["*"]):e=e.match(He);for(var n,i=0,r=e.length;i<r;i++)n=e[i],Z.tweeners[n]=Z.tweeners[n]||[],Z.tweeners[n].unshift(t)},prefilters:[X],prefilter:function(e,t){t?Z.prefilters.unshift(e):Z.prefilters.push(e)}}),Ee.speed=function(e,t,n){var i=e&&"object"==typeof e?Ee.extend({},e):{complete:n||!n&&t||_e(e)&&e,duration:e,easing:n&&t||t&&!_e(t)&&t};
// Go to the end state if fx are off
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return Ee.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in Ee.fx.speeds?i.duration=Ee.fx.speeds[i.duration]:i.duration=Ee.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){_e(i.old)&&i.old.call(this),i.queue&&Ee.dequeue(this,i.queue)},i},Ee.fn.extend({fadeTo:function(e,t,n,i){
// Show any hidden elements after setting opacity to 0
return this.filter(Qe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=Ee.isEmptyObject(e),o=Ee.speed(t,n,i),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=Z(this,Ee.extend({},e),o);
// Empty animations, or finishing resolves immediately
(r||Fe.get(this,"finish"))&&t.stop(!0)};return a.finish=a,r||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=Ee.timers,a=Fe.get(this);if(r)a[r]&&a[r].stop&&i(a[r]);else for(r in a)a[r]&&a[r].stop&&xt.test(r)&&i(a[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&n||Ee.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Fe.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=Ee.timers,a=i?i.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
n.finish=!0,
// Empty the queue first
Ee.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)i[t]&&i[t].finish&&i[t].finish.call(this);
// Turn off finishing flag
delete n.finish})}}),Ee.each(["toggle","show","hide"],function(e,t){var n=Ee.fn[t];Ee.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(K(t,!0),e,i,r)}}),
// Generate shortcuts for custom animations
Ee.each({slideDown:K("show"),slideUp:K("hide"),slideToggle:K("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Ee.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),Ee.timers=[],Ee.fx.tick=function(){var e,t=0,n=Ee.timers;for(jt=Date.now();t<n.length;t++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||Ee.fx.stop(),jt=void 0},Ee.fx.timer=function(e){Ee.timers.push(e),Ee.fx.start()},Ee.fx.interval=13,Ee.fx.start=function(){_t||(_t=!0,G())},Ee.fx.stop=function(){_t=null},Ee.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
Ee.fn.delay=function(e,t){return e=Ee.fx?Ee.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,i){var r=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(r)}})},function(){var e=ce.createElement("input"),t=ce.createElement("select"),n=t.appendChild(ce.createElement("option"));e.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
je.checkOn=""!==e.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
je.optSelected=n.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
e=ce.createElement("input"),e.value="t",e.type="radio",je.radioValue="t"===e.value}();var Et,Tt=Ee.expr.attrHandle;Ee.fn.extend({attr:function(e,t){return Pe(this,Ee.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Ee.removeAttr(this,e)})}}),Ee.extend({attr:function(e,t,n){var i,r,o=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return void 0===e.getAttribute?Ee.prop(e,t,n):(1===o&&Ee.isXMLDoc(e)||(r=Ee.attrHooks[t.toLowerCase()]||(Ee.expr.match.bool.test(t)?Et:void 0)),void 0!==n?null===n?void Ee.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Ee.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!je.radioValue&&"radio"===t&&d(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
r=t&&t.match(He);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
Et={set:function(e,t,n){
// Remove boolean attributes when set to false
return!1===t?Ee.removeAttr(e,n):e.setAttribute(n,n),n}},Ee.each(Ee.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Tt[t]||Ee.find.attr;Tt[t]=function(e,t,i){var r,o,a=t.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return i||(o=Tt[a],Tt[a]=r,r=null!=n(e,t,i)?a:null,Tt[a]=o),r}});var kt=/^(?:input|select|textarea|button)$/i,Dt=/^(?:a|area)$/i;Ee.fn.extend({prop:function(e,t){return Pe(this,Ee.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Ee.propFix[e]||e]})}}),Ee.extend({prop:function(e,t,n){var i,r,o=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fix name and attach hooks
return 1===o&&Ee.isXMLDoc(e)||(t=Ee.propFix[t]||t,r=Ee.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=Ee.find.attr(e,"tabindex");return t?parseInt(t,10):kt.test(e.nodeName)||Dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
je.optSelected||(Ee.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),Ee.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Ee.propFix[this.toLowerCase()]=this}),Ee.fn.extend({addClass:function(e){var t,n,i,r,o,a,s,l=0;if(_e(e))return this.each(function(t){Ee(this).addClass(e.call(this,t,te(this)))});if(t=ne(e),t.length)for(;n=this[l++];)if(r=te(n),i=1===n.nodeType&&" "+ee(r)+" "){for(a=0;o=t[a++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");
// Only assign if different to avoid unneeded rendering.
s=ee(i),r!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,i,r,o,a,s,l=0;if(_e(e))return this.each(function(t){Ee(this).removeClass(e.call(this,t,te(this)))});if(!arguments.length)return this.attr("class","");if(t=ne(e),t.length)for(;n=this[l++];)if(r=te(n),
// This expression is here for better compressibility (see addClass)
i=1===n.nodeType&&" "+ee(r)+" "){for(a=0;o=t[a++];)
// Remove *all* instances
for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");
// Only assign if different to avoid unneeded rendering.
s=ee(i),r!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):_e(e)?this.each(function(n){Ee(this).toggleClass(e.call(this,n,te(this),t),t)}):this.each(function(){var t,r,o,a;if(i)for(
// Toggle individual class names
r=0,o=Ee(this),a=ne(e);t=a[r++];)
// Check each className given, space separated list
o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=te(this),t&&
// Store className if set
Fe.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||!1===e?"":Fe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+ee(te(n))+" ").indexOf(t)>-1)return!0;return!1}});var St=/\r/g;Ee.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=_e(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,Ee(this).val()):e,
// Treat null/undefined as ""; convert numbers to string
null==r?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=Ee.map(r,function(e){return null==e?"":e+""})),
// If set returns undefined, fall back to normal setting
(t=Ee.valHooks[this.type]||Ee.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)
// Handle most common string cases
return(t=Ee.valHooks[r.type]||Ee.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(St,""):null==n?"":n)}}}),Ee.extend({valHooks:{option:{get:function(e){var t=Ee.find.attr(e,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=t?t:ee(Ee.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?o+1:r.length;
// Loop through all the selected options
for(i=o<0?l:a?o:0;i<l;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(n=r[i],(n.selected||i===o)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!d(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=Ee(n).val(),a)return t;
// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,i,r=e.options,o=Ee.makeArray(t),a=r.length;a--;)i=r[a],/* eslint-disable no-cond-assign */
(i.selected=Ee.inArray(Ee.valHooks.option.get(i),o)>-1)&&(n=!0);
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),
// Radios and checkboxes getter/setter
Ee.each(["radio","checkbox"],function(){Ee.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=Ee.inArray(Ee(e).val(),t)>-1}},je.checkOn||(Ee.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),
// Return jQuery for attributes-only inclusion
je.focusin="onfocusin"in n;var It=/^(?:focusinfocus|focusoutblur)$/,At=function(e){e.stopPropagation()};Ee.extend(Ee.event,{trigger:function(e,t,i,r){var o,a,s,l,d,c,u,p,h=[i||ce],g=ye.call(e,"type")?e.type:e,f=ye.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(a=p=s=i=i||ce,3!==i.nodeType&&8!==i.nodeType&&!It.test(g+Ee.event.triggered)&&(g.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
f=g.split("."),g=f.shift(),f.sort()),d=g.indexOf(":")<0&&"on"+g,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[Ee.expando]?e:new Ee.Event(g,"object"==typeof e&&e),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
e.isTrigger=r?2:3,e.namespace=f.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=i),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:Ee.makeArray(t,[e]),
// Allow special events to draw outside the lines
u=Ee.event.special[g]||{},r||!u.trigger||!1!==u.trigger.apply(i,t))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!r&&!u.noBubble&&!Ce(i)){for(l=u.delegateType||g,It.test(l+g)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
s===(i.ownerDocument||ce)&&h.push(s.defaultView||s.parentWindow||n)}for(
// Fire handlers on the event path
o=0;(a=h[o++])&&!e.isPropagationStopped();)p=a,e.type=o>1?l:u.bindType||g,
// jQuery handler
c=(Fe.get(a,"events")||{})[e.type]&&Fe.get(a,"handle"),c&&c.apply(a,t),(
// Native handler
c=d&&a[d])&&c.apply&&We(a)&&(e.result=c.apply(a,t),!1===e.result&&e.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return e.type=g,r||e.isDefaultPrevented()||u._default&&!1!==u._default.apply(h.pop(),t)||!We(i)||d&&_e(i[g])&&!Ce(i)&&(s=i[d],s&&(i[d]=null),Ee.event.triggered=g,e.isPropagationStopped()&&p.addEventListener(g,At),i[g](),e.isPropagationStopped()&&p.removeEventListener(g,At),Ee.event.triggered=void 0,s&&(i[d]=s)),e.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var i=Ee.extend(new Ee.Event,n,{type:e,isSimulated:!0});Ee.event.trigger(i,null,t)}}),Ee.fn.extend({trigger:function(e,t){return this.each(function(){Ee.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return Ee.event.trigger(e,t,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
je.focusin||Ee.each({focus:"focusin",blur:"focusout"},function(e,t){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){Ee.event.simulate(t,e.target,Ee.event.fix(e))};Ee.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=Fe.access(i,t);r||i.addEventListener(e,n,!0),Fe.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=Fe.access(i,t)-1;r?Fe.access(i,t,r):(i.removeEventListener(e,n,!0),Fe.remove(i,t))}}});var Ot=n.location,Nt=Date.now(),Lt=/\?/;
// Cross-browser xml parsing
Ee.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||Ee.error("Invalid XML: "+e),t};var $t=/\[\]$/,Ht=/\r?\n/g,Mt=/^(?:submit|button|image|reset|file)$/i,Rt=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
Ee.param=function(e,t){var n,i=[],r=function(e,t){
// If value is a function, invoke it and use its return value
var n=_e(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!Ee.isPlainObject(e))
// Serialize the form elements
Ee.each(e,function(){r(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)ie(n,e[n],t,r);
// Return the resulting serialization
return i.join("&")},Ee.fn.extend({serialize:function(){return Ee.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=Ee.prop(this,"elements");return e?Ee.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!Ee(this).is(":disabled")&&Rt.test(this.nodeName)&&!Mt.test(e)&&(this.checked||!Ze.test(e))}).map(function(e,t){var n=Ee(this).val();return null==n?null:Array.isArray(n)?Ee.map(n,function(e){return{name:t.name,value:e.replace(Ht,"\r\n")}}):{name:t.name,value:n.replace(Ht,"\r\n")}}).get()}});var Pt=/%20/g,zt=/#.*$/,Bt=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qt=/^(?:GET|HEAD)$/,Ut=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Vt={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Gt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Yt="*/".concat("*"),
// Anchor tag for parsing the document origin
Kt=ce.createElement("a");Kt.href=Ot.href,Ee.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Ot.href,type:"GET",isLocal:Ft.test(Ot.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Yt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":Ee.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){
// Building a settings object
// Extending ajaxSettings
return t?ae(ae(e,Ee.ajaxSettings),t):ae(Ee.ajaxSettings,e)},ajaxPrefilter:re(Vt),ajaxTransport:re(Gt),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function i(e,t,i,s){var d,p,h,w,j,_=t;
// Ignore repeat invocations
c||(c=!0,
// Clear timeout if it exists
l&&n.clearTimeout(l),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,
// Cache response headers
a=s||"",
// Set readyState
C.readyState=e>0?4:0,
// Determine if successful
d=e>=200&&e<300||304===e,
// Get response data
i&&(w=se(g,C,i)),
// Convert no matter what (that way responseXXX fields are always set)
w=le(g,w,C,d),
// If successful, handle type chaining
d?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(j=C.getResponseHeader("Last-Modified"),j&&(Ee.lastModified[o]=j),(j=C.getResponseHeader("etag"))&&(Ee.etag[o]=j)),
// if no content
204===e||"HEAD"===g.type?_="nocontent":304===e?_="notmodified":(_=w.state,p=w.data,h=w.error,d=!h)):(
// Extract error from statusText and normalize for non-aborts
h=_,!e&&_||(_="error",e<0&&(e=0))),
// Set data for the fake xhr object
C.status=e,C.statusText=(t||_)+"",
// Success/Error
d?v.resolveWith(f,[p,_,C]):v.rejectWith(f,[C,_,h]),
// Status-dependent callbacks
C.statusCode(b),b=void 0,u&&m.trigger(d?"ajaxSuccess":"ajaxError",[C,g,d?p:h]),
// Complete
y.fireWith(f,[C,_]),u&&(m.trigger("ajaxComplete",[C,g]),
// Handle the global AJAX counter
--Ee.active||Ee.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var r,
// URL without anti-cache param
o,
// Response headers
a,s,
// timeout handle
l,
// Url cleanup var
d,
// Request state (becomes false upon send and true upon completion)
c,
// To know if global events are to be dispatched
u,
// Loop variable
p,
// uncached part of the url
h,
// Create the final options object
g=Ee.ajaxSetup({},t),
// Callbacks context
f=g.context||g,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
m=g.context&&(f.nodeType||f.jquery)?Ee(f):Ee.event,
// Deferreds
v=Ee.Deferred(),y=Ee.Callbacks("once memory"),
// Status-dependent callbacks
b=g.statusCode||{},
// Headers (they are sent all at once)
w={},j={},
// Default abort message
_="canceled",
// Fake xhr
C={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Wt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return c?a:null},
// Caches the header
setRequestHeader:function(e,t){return null==c&&(e=j[e.toLowerCase()]=j[e.toLowerCase()]||e,w[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(g.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(c)
// Execute the appropriate callbacks
C.always(e[C.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)b[t]=[b[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||_;return r&&r.abort(t),i(0,t),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
v.promise(C),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
g.url=((e||g.url||Ot.href)+"").replace(Ut,Ot.protocol+"//"),
// Alias method option to type as per ticket #12004
g.type=t.method||t.type||g.method||g.type,
// Extract dataTypes list
g.dataTypes=(g.dataType||"*").toLowerCase().match(He)||[""],null==g.crossDomain){d=ce.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{d.href=g.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
d.href=d.href,g.crossDomain=Kt.protocol+"//"+Kt.host!=d.protocol+"//"+d.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
g.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
g.data&&g.processData&&"string"!=typeof g.data&&(g.data=Ee.param(g.data,g.traditional)),
// Apply prefilters
oe(Vt,g,t,C),c)return C;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
u=Ee.event&&g.global,
// Watch for a new set of requests
u&&0==Ee.active++&&Ee.event.trigger("ajaxStart"),
// Uppercase the type
g.type=g.type.toUpperCase(),
// Determine if request has content
g.hasContent=!qt.test(g.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=g.url.replace(zt,""),
// More options handling for requests with no content
g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Pt,"+")):(
// Remember the hash so we can put it back
h=g.url.slice(o.length),
// If data is available and should be processed, append data to url
g.data&&(g.processData||"string"==typeof g.data)&&(o+=(Lt.test(o)?"&":"?")+g.data,
// #9682: remove data so that it's not used in an eventual retry
delete g.data),
// Add or update anti-cache param if needed
!1===g.cache&&(o=o.replace(Bt,"$1"),h=(Lt.test(o)?"&":"?")+"_="+Nt+++h),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
g.url=o+h),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(Ee.lastModified[o]&&C.setRequestHeader("If-Modified-Since",Ee.lastModified[o]),Ee.etag[o]&&C.setRequestHeader("If-None-Match",Ee.etag[o])),
// Set the correct header, if data is being sent
(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&C.setRequestHeader("Content-Type",g.contentType),
// Set the Accepts header for the server, depending on the dataType
C.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Yt+"; q=0.01":""):g.accepts["*"]);
// Check for headers option
for(p in g.headers)C.setRequestHeader(p,g.headers[p]);
// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(f,C,g)||c))
// Abort if not done already and return
return C.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
_="abort",
// Install callbacks on deferreds
y.add(g.complete),C.done(g.success),C.fail(g.error),
// Get transport
r=oe(Gt,g,t,C)){
// If request was aborted inside ajaxSend, stop there
if(C.readyState=1,
// Send global event
u&&m.trigger("ajaxSend",[C,g]),c)return C;
// Timeout
g.async&&g.timeout>0&&(l=n.setTimeout(function(){C.abort("timeout")},g.timeout));try{c=!1,r.send(w,i)}catch(e){
// Rethrow post-completion exceptions
if(c)throw e;
// Propagate others as results
i(-1,e)}}else i(-1,"No Transport");return C},getJSON:function(e,t,n){return Ee.get(e,t,n,"json")},getScript:function(e,t){return Ee.get(e,void 0,t,"script")}}),Ee.each(["get","post"],function(e,t){Ee[t]=function(e,n,i,r){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return _e(n)&&(r=r||i,i=n,n=void 0),Ee.ajax(Ee.extend({url:e,type:t,dataType:r,data:n,success:i},Ee.isPlainObject(e)&&e))}}),Ee._evalUrl=function(e){return Ee.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},Ee.fn.extend({wrapAll:function(e){var t;
// The elements to wrap the target around
return this[0]&&(_e(e)&&(e=e.call(this[0])),t=Ee(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return _e(e)?this.each(function(t){Ee(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Ee(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=_e(e);return this.each(function(n){Ee(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){Ee(this).replaceWith(this.childNodes)}),this}}),Ee.expr.pseudos.hidden=function(e){return!Ee.expr.pseudos.visible(e)},Ee.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},Ee.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Qt={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Xt=Ee.ajaxSettings.xhr();je.cors=!!Xt&&"withCredentials"in Xt,je.ajax=Xt=!!Xt,Ee.ajaxTransport(function(e){var t,i;
// Cross domain only allowed if supported through XMLHttpRequest
if(je.cors||Xt&&!e.crossDomain)return{send:function(r,o){var a,s=e.xhr();
// Apply custom fields if provided
if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];
// Override mime type if needed
e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(a in r)s.setRequestHeader(a,r[a]);
// Callback
t=function(e){return function(){t&&(t=i=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof s.status?o(0,"error"):o(
// File: protocol always yields status 0; see #8605, #14207
s.status,s.statusText):o(Qt[s.status]||s.status,s.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},
// Listen to events
s.onload=t(),i=s.onerror=s.ontimeout=t("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==s.onabort?s.onabort=i:s.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===s.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
n.setTimeout(function(){t&&i()})},
// Create the abort callback
t=t("abort");try{
// Do send the request (this may raise an exception)
s.send(e.hasContent&&e.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(t)throw e}},abort:function(){t&&t()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
Ee.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),
// Install script dataType
Ee.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return Ee.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
Ee.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),
// Bind script tag hack transport
Ee.ajaxTransport("script",function(e){
// This transport only deals with cross domain requests
if(e.crossDomain){var t,n;return{send:function(i,r){t=Ee("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
ce.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Jt=[],Zt=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
Ee.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Jt.pop()||Ee.expando+"_"+Nt++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
Ee.ajaxPrefilter("json jsonp",function(e,t,i){var r,o,a,s=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return r=e.jsonpCallback=_e(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(Lt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||Ee.error(r+" was not called"),a[0]},e.dataTypes[0]="json",o=n[r],n[r]=function(){a=arguments},i.always(function(){
// If previous value didn't exist - remove it
void 0===o?Ee(n).removeProp(r):n[r]=o,
// Save back as free
e[r]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
Jt.push(r)),
// Call if it was a function and we have a response
a&&_e(o)&&o(a[0]),a=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
je.createHTMLDocument=function(){var e=ce.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
Ee.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,r,o;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return t||(je.createHTMLDocument?(t=ce.implementation.createHTMLDocument(""),i=t.createElement("base"),i.href=ce.location.href,t.head.appendChild(i)):t=ce),r=Ae.exec(e),o=!n&&[],r?[t.createElement(r[1])]:(r=k([e],t,o),o&&o.length&&Ee(o).remove(),Ee.merge([],r.childNodes))},/**
 * Load a url into a page
 */
Ee.fn.load=function(e,t,n){var i,r,o,a=this,s=e.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return s>-1&&(i=ee(e.slice(s)),e=e.slice(0,s)),_e(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),a.length>0&&Ee.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:r||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
o=arguments,a.html(i?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
Ee("<div>").append(Ee.parseHTML(e)).find(i):
// Otherwise use the full result
e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
Ee.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Ee.fn[t]=function(e){return this.on(t,e)}}),Ee.expr.pseudos.animated=function(e){return Ee.grep(Ee.timers,function(t){return e===t.elem}).length},Ee.offset={setOffset:function(e,t,n){var i,r,o,a,s,l,d,c=Ee.css(e,"position"),u=Ee(e),p={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),s=u.offset(),o=Ee.css(e,"top"),l=Ee.css(e,"left"),d=("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
d?(i=u.position(),a=i.top,r=i.left):(a=parseFloat(o)||0,r=parseFloat(l)||0),_e(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,Ee.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+r),"using"in t?t.using.call(e,p):u.css(p)}},Ee.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){Ee.offset.setOffset(this,e,t)});var t,n,i=this[0];if(i)
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
return i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===Ee.css(i,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=i.getBoundingClientRect();else{for(t=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===Ee.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
r=Ee(e).offset(),r.top+=Ee.css(e,"borderTopWidth",!0),r.left+=Ee.css(e,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:t.top-r.top-Ee.css(i,"marginTop",!0),left:t.left-r.left-Ee.css(i,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===Ee.css(e,"position");)e=e.offsetParent;return e||rt})}}),
// Create scrollLeft and scrollTop methods
Ee.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;Ee.fn[e]=function(i){return Pe(this,function(e,i,r){
// Coalesce documents and windows
var o;if(Ce(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
Ee.each(["top","left"],function(e,t){Ee.cssHooks[t]=z(je.pixelPosition,function(e,n){if(n)
// If curCSS returns percentage, fallback to offset
return n=P(e,t),pt.test(n)?Ee(e).position()[t]+"px":n})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
Ee.each({Height:"height",Width:"width"},function(e,t){Ee.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){
// Margin is only for outerHeight, outerWidth
Ee.fn[i]=function(r,o){var a=arguments.length&&(n||"boolean"!=typeof r),s=n||(!0===r||!0===o?"margin":"border");return Pe(this,function(t,n,r){var o;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return Ce(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?Ee.css(t,n,s):Ee.style(t,n,r,s)},t,a?r:void 0,a)}})}),Ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){
// Handle event binding
Ee.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Ee.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),Ee.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
Ee.proxy=function(e,t){var n,i,r;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),_e(e))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return i=pe.call(arguments,2),r=function(){return e.apply(t||this,i.concat(pe.call(arguments)))},r.guid=e.guid=e.guid||Ee.guid++,r},Ee.holdReady=function(e){e?Ee.readyWait++:Ee.ready(!0)},Ee.isArray=Array.isArray,Ee.parseJSON=JSON.parse,Ee.nodeName=d,Ee.isFunction=_e,Ee.isWindow=Ce,Ee.camelCase=y,Ee.type=s,Ee.now=Date.now,Ee.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=Ee.type(e);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},i=[],void 0!==(r=function(){return Ee}.apply(t,i))&&(e.exports=r);var
// Map over jQuery in case of overwrite
en=n.jQuery,
// Map over the $ in case of overwrite
tn=n.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return Ee.noConflict=function(e){return n.$===Ee&&(n.$=tn),e&&n.jQuery===Ee&&(n.jQuery=en),Ee},o||(n.jQuery=n.$=Ee),Ee})},/***/
"../node_modules/jrespond/js/jRespond.js":/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e){var n,i;!function(r,o,a){
// Node module pattern
"object"==typeof e&&e&&"object"==typeof e.exports?e.exports=a:(
// browser
r.jRespond=a,n=[],void 0!==(i=function(e){return a}.apply(t,n))&&(e.exports=i))}(this,0,function(e,t,n){"use strict";return function(e){
// array for registered functions
var t=[],n=[],i=e,r="",o="",a=0,s=500,l=function(){
// IE
return"number"!=typeof window.innerWidth?0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth},d=function(e){if(void 0===e.length)c(e);else for(var t=0;t<e.length;t++)c(e[t])},c=function(e){var i=e.breakpoint,a=e.enter||void 0;
// add function to stack
t.push(e),
// add corresponding entry to mediaInit
n.push(!1),h(i)&&(void 0!==a&&a.call(null,{entering:r,exiting:o}),n[t.length-1]=!0)},u=function(){for(var e=[],i=[],a=0;a<t.length;a++){var s=t[a].breakpoint,l=t[a].enter||void 0,d=t[a].exit||void 0;"*"===s?(void 0!==l&&e.push(l),void 0!==d&&i.push(d)):h(s)?(void 0===l||n[a]||e.push(l),n[a]=!0):(void 0!==d&&n[a]&&i.push(d),n[a]=!1)}
// loop through exit functions to call
for(var c={entering:r,exiting:o},u=0;u<i.length;u++)i[u].call(null,c);
// then loop through enter functions to call
for(var p=0;p<e.length;p++)e[p].call(null,c)},p=function(e){
// look for existing breakpoint based on width
for(var t=!1,n=0;n<i.length;n++)
// if registered breakpoint found, break out of loop
if(e>=i[n].enter&&e<=i[n].exit){t=!0;break}
// if breakpoint is found and it's not the current one
t&&r!==i[n].label?(o=r,r=i[n].label,
// run the loop
u()):t||""===r||(r="",
// run the loop
u())},h=function(e){
// if there's an array of breakpoints
if("object"==typeof e){if(e.join().indexOf(r)>=0)return!0}else{if("*"===e)return!0;if("string"==typeof e&&r===e)return!0}},g=function(){
// get current width
var e=l();
// if there is a change speed up the timer and fire the returnBreakpoint function
e!==a?(s=100,p(e)):s=500,a=e,
// calls itself on a setTimeout
setTimeout(g,s)};
// return
return g(),{addFunc:function(e){d(e)},getBreakpoint:function(){return r}}}}(0,this.document))}).call(t,n("../node_modules/webpack/buildin/module.js")(e))},/***/
"../node_modules/masonry-layout/masonry.js":/***/
function(e,t,n){var i,r,o;/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(a,s){
// AMD
r=[n("../node_modules/outlayer/outlayer.js"),n("../node_modules/get-size/get-size.js")],i=s,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(window,function(e,t){"use strict";
// -------------------------- masonryDefinition -------------------------- //
// create an Outlayer layout class
var n=e.create("masonry");
// isFitWidth -> fitWidth
n.compatOptions.fitWidth="isFitWidth";var i=n.prototype;/**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
// get column position based on horizontal index. #873
return i._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),
// reset column Y
this.colYs=[];for(var e=0;e<this.cols;e++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},i.measureColumns=function(){
// if columnWidth is 0, default to outerWidth of first item
if(this.getContainerWidth(),!this.columnWidth){var e=this.items[0],n=e&&e.element;
// columnWidth fall back to item of first element
this.columnWidth=n&&t(n).outerWidth||
// if first elem has no width, default to size of container
this.containerWidth}var i=this.columnWidth+=this.gutter,r=this.containerWidth+this.gutter,o=r/i,a=i-r%i,s=a&&a<1?"round":"floor";o=Math[s](o),this.cols=Math.max(o,1)},i.getContainerWidth=function(){
// container is parent if fit width
var e=this._getOption("fitWidth"),n=e?this.element.parentNode:this.element,i=t(n);this.containerWidth=i&&i.innerWidth},i._getItemLayoutPosition=function(e){e.getSize();
// how many columns does this brick span
var t=e.size.outerWidth%this.columnWidth,n=t&&t<1?"round":"ceil",i=Math[n](e.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var r=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",o=this[r](i,e),a={x:this.columnWidth*o.col,y:o.y},s=o.y+e.size.outerHeight,l=i+o.col,d=o.col;d<l;d++)this.colYs[d]=s;return a},i._getTopColPosition=function(e){var t=this._getTopColGroup(e),n=Math.min.apply(Math,t);return{col:t.indexOf(n),y:n}},i._getTopColGroup=function(e){if(e<2)
// if brick spans only one column, use all the column Ys
return this.colYs;
// for each group potential horizontal position
for(var t=[],n=this.cols+1-e,i=0;i<n;i++)t[i]=this._getColGroupY(i,e);return t},i._getColGroupY=function(e,t){if(t<2)return this.colYs[e];
// make an array of colY values for that one group
var n=this.colYs.slice(e,e+t);
// and get the max value of the array
return Math.max.apply(Math,n)},i._getHorizontalColPosition=function(e,t){var n=this.horizontalColIndex%this.cols;
// shift to next row if item can't fit on current row
n=e>1&&n+e>this.cols?0:n;
// don't let zero-size items take up space
var i=t.size.outerWidth&&t.size.outerHeight;return this.horizontalColIndex=i?n+e:this.horizontalColIndex,{col:n,y:this._getColGroupY(n,e)}},i._manageStamp=function(e){var n=t(e),i=this._getElementOffset(e),r=this._getOption("originLeft"),o=r?i.left:i.right,a=o+n.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var l=Math.floor(a/this.columnWidth);
// lastCol should not go over if multiple of columnWidth #425
l-=a%this.columnWidth?0:1,l=Math.min(this.cols-1,l);for(var d=this._getOption("originTop"),c=(d?i.top:i.bottom)+n.outerHeight,u=s;u<=l;u++)this.colYs[u]=Math.max(c,this.colYs[u])},i._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};return this._getOption("fitWidth")&&(e.width=this._getContainerFitWidth()),e},i._getContainerFitWidth=function(){for(var e=0,t=this.cols;--t&&0===this.colYs[t];)e++;
// fit container to columns that have been used
return(this.cols-e)*this.columnWidth-this.gutter},i.needsResizeLayout=function(){var e=this.containerWidth;return this.getContainerWidth(),e!=this.containerWidth},n})},/***/
"../node_modules/outlayer/item.js":/***/
function(e,t,n){var i,r,o;/**
 * Outlayer Item
 */
!function(a,s){
// AMD - RequireJS
r=[n("../node_modules/ev-emitter/ev-emitter.js"),n("../node_modules/get-size/get-size.js")],i=s,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(window,function(e,t){"use strict";
// ----- helpers ----- //
function n(e){for(var t in e)return!1;return null,!0}
// -------------------------- Item -------------------------- //
function i(e,t){e&&(this.element=e,
// parent layout class, i.e. Masonry, Isotope, or Packery
this.layout=t,this.position={x:0,y:0},this._create())}
// -------------------------- CSS3 support -------------------------- //
var r=document.documentElement.style,o="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],l={transform:a,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"},d=i.prototype=Object.create(e.prototype);d.constructor=i,d._create=function(){
// transition objects
this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},
// trigger specified handler for event type
d.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},d.getSize=function(){this.size=t(this.element)},/**
 * apply CSS styles to element
 * @param {Object} style
 */
d.css=function(e){var t=this.element.style;for(var n in e){t[l[n]||n]=e[n]}},
// measure position, and sets it
d.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),i=e[t?"left":"right"],r=e[n?"top":"bottom"],o=parseFloat(i),a=parseFloat(r),s=this.layout.size;-1!=i.indexOf("%")&&(o=o/100*s.width),-1!=r.indexOf("%")&&(a=a/100*s.height),
// clean up 'auto' or other non-integer values
o=isNaN(o)?0:o,a=isNaN(a)?0:a,
// remove padding from measurement
o-=t?s.paddingLeft:s.paddingRight,a-=n?s.paddingTop:s.paddingBottom,this.position.x=o,this.position.y=a},
// set settled position, apply padding
d.layoutPosition=function(){var e=this.layout.size,t={},n=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),r=n?"paddingLeft":"paddingRight",o=n?"left":"right",a=n?"right":"left",s=this.position.x+e[r];
// set in percentage or pixels
t[o]=this.getXValue(s),
// reset other property
t[a]="";
// y
var l=i?"paddingTop":"paddingBottom",d=i?"top":"bottom",c=i?"bottom":"top",u=this.position.y+e[l];
// set in percentage or pixels
t[d]=this.getYValue(u),
// reset other property
t[c]="",this.css(t),this.emitEvent("layout",[this])},d.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px"},d.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px"},d._transitionTo=function(e,t){this.getPosition();
// get current x & y from top/left
var n=this.position.x,i=this.position.y,r=e==this.position.x&&t==this.position.y;
// if did not move and not transitioning, just go to layout
if(
// save end position
this.setPosition(e,t),r&&!this.isTransitioning)return void this.layoutPosition();var o=e-n,a=t-i,s={};s.transform=this.getTranslate(o,a),this.transition({to:s,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(e,t){
// flip cooridinates if origin on right or bottom
var n=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop");return e=n?e:-e,t=i?t:-t,"translate3d("+e+"px, "+t+"px, 0)"},
// non transition + transform support
d.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t)},
// ----- transition ----- //
/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */
// non transition, just trigger callback
d._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to);for(var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)},/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
d.transition=function(e){
// redirect to nonTransition if no transition duration
if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(e);var t=this._transn;
// keep track of onTransitionEnd callback by css property
for(var n in e.onTransitionEnd)t.onEnd[n]=e.onTransitionEnd[n];
// keep track of properties that are transitioning
for(n in e.to)t.ingProperties[n]=!0,
// keep track of properties to clean up when transition is done
e.isCleaning&&(t.clean[n]=!0);
// set from styles
if(e.from){this.css(e.from);
// force redraw. http://blog.alexmaccaw.com/css-transitions
this.element.offsetHeight;
// hack for JSHint to hush about unused var
null}
// enable transition
this.enableTransition(e.to),
// set styles that are transitioning
this.css(e.to),this.isTransitioning=!0};var c="opacity,"+
// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}(a);d.enableTransition=function(){
// HACK changing transitionProperty during a transition
// will cause transition to jump
if(!this.isTransitioning){
// make `transition: foo, bar, baz` from style object
// HACK un-comment this when enableTransition can work
// while a transition is happening
// var transitionValues = [];
// for ( var prop in style ) {
//   // dash-ify camelCased properties like WebkitTransition
//   prop = vendorProperties[ prop ] || prop;
//   transitionValues.push( toDashedAll( prop ) );
// }
// munge number to millisecond, to match stagger
var e=this.layout.options.transitionDuration;e="number"==typeof e?e+"ms":e,
// enable transition styles
this.css({transitionProperty:c,transitionDuration:e,transitionDelay:this.staggerDelay||0}),
// listen for transition end event
this.element.addEventListener(s,this,!1)}},
// ----- events ----- //
d.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},d.onotransitionend=function(e){this.ontransitionend(e)};
// properties that I munge to make my life easier
var u={"-webkit-transform":"transform"};d.ontransitionend=function(e){
// disregard bubbled events from children
if(e.target===this.element){var t=this._transn,i=u[e.propertyName]||e.propertyName;
// trigger onTransitionEnd callback
if(
// remove property that has completed transitioning
delete t.ingProperties[i],
// check if any properties are still transitioning
n(t.ingProperties)&&
// all properties have completed transitioning
this.disableTransition(),
// clean style
i in t.clean&&(
// clean up style
this.element.style[e.propertyName]="",delete t.clean[i]),i in t.onEnd){t.onEnd[i].call(this),delete t.onEnd[i]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},/**
 * removes style property from element
 * @param {Object} style
**/
d._removeStyles=function(e){
// clean up transition styles
var t={};for(var n in e)t[n]="";this.css(t)};var p={transitionProperty:"",transitionDuration:"",transitionDelay:""};
// ----- stagger ----- //
// ----- show/hide/remove ----- //
// remove element from DOM
/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
return d.removeTransitionStyles=function(){
// remove transition
this.css(p)},d.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),
// remove display: none
this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){
// just remove element if no transition support or no transition
if(!o||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();
// start transition
this.once("transitionEnd",function(){this.removeElem()}),this.hide()},d.reveal=function(){delete this.isHidden,
// remove display: none
this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t})},d.onRevealTransitionEnd=function(){
// check if still visible
// during transition, item may have been hidden
this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(e){var t=this.layout.options[e];
// use opacity
if(t.opacity)return"opacity";
// get first property
for(var n in t)return n},d.hide=function(){
// set flag
this.isHidden=!0,
// remove display: none
this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,
// keep hidden stuff hidden
isCleaning:!0,onTransitionEnd:t})},d.onHideTransitionEnd=function(){
// check if still hidden
// during transition, item may have been un-hidden
this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i})},/***/
"../node_modules/outlayer/outlayer.js":/***/
function(e,t,n){var i,r;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
!function(o,a){"use strict";i=[n("../node_modules/ev-emitter/ev-emitter.js"),n("../node_modules/get-size/get-size.js"),n("../node_modules/fizzy-ui-utils/utils.js"),n("../node_modules/outlayer/item.js")],void 0!==(r=function(e,t,n,i){return a(o,e,t,n,i)}.apply(t,i))&&(e.exports=r)}(window,function(e,t,n,i,r){"use strict";/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function o(e,t){var n=i.getQueryElement(e);if(!n)return void(l&&l.error("Bad element for "+this.constructor.namespace+": "+(n||e)));this.element=n,
// add jQuery
d&&(this.$element=d(this.element)),
// options
this.options=i.extend({},this.constructor.defaults),this.option(t);
// add id for Outlayer.getFromElement
var r=++u;this.element.outlayerGUID=r,// expando
p[r]=this,// associate via id
// kick it off
this._create(),this._getOption("initLayout")&&this.layout()}function a(e){function t(){e.apply(this,arguments)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}
// munge time-like parameter into millisecond number
// '0.4s' -> 40
function s(e){if("number"==typeof e)return e;var t=e.match(/(^\d*\.?\d*)(\w*)/),n=t&&t[1],i=t&&t[2];return n.length?(n=parseFloat(n))*(g[i]||1):0}
// ----- vars ----- //
var l=e.console,d=e.jQuery,c=function(){},u=0,p={};
// settings are for internal use only
o.namespace="outlayer",o.Item=r,
// default options
o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,
// item options
transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var h=o.prototype;
// inherit EvEmitter
i.extend(h,t.prototype),/**
 * set options
 * @param {Object} opts
 */
h.option=function(e){i.extend(this.options,e)},/**
 * get backwards compatible option value, check old name
 */
h._getOption=function(e){var t=this.constructor.compatOptions[e];return t&&void 0!==this.options[t]?this.options[t]:this.options[e]},o.compatOptions={
// currentName: oldName
initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},h._create=function(){
// get items from children
this.reloadItems(),
// elements that affect layout, but are not laid out
this.stamps=[],this.stamp(this.options.stamp),
// set container style
i.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},
// goes through all children again and gets bricks in proper order
h.reloadItems=function(){
// collection of item elements
this.items=this._itemize(this.element.children)},/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
h._itemize=function(e){for(var t=this._filterFindItemElements(e),n=this.constructor.Item,i=[],r=0;r<t.length;r++){var o=t[r],a=new n(o,this);i.push(a)}return i},/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
h._filterFindItemElements=function(e){return i.filterFindElements(e,this.options.itemSelector)},/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
h.getItemElements=function(){return this.items.map(function(e){return e.element})},
// ----- init & layout ----- //
/**
 * lays out all items
 */
h.layout=function(){this._resetLayout(),this._manageStamps();
// don't animate first layout
var e=this._getOption("layoutInstant"),t=void 0!==e?e:!this._isLayoutInited;this.layoutItems(this.items,t),
// flag for initalized
this._isLayoutInited=!0},
// _init is alias for layout
h._init=h.layout,/**
 * logic before any new layout
 */
h._resetLayout=function(){this.getSize()},h.getSize=function(){this.size=n(this.element)},/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
h._getMeasurement=function(e,t){var i,r=this.options[e];r?(
// use option as an element
"string"==typeof r?i=this.element.querySelector(r):r instanceof HTMLElement&&(i=r),
// use size of element, if element
this[e]=i?n(i)[t]:r):
// default to 0
this[e]=0},/**
 * layout a collection of item elements
 * @api public
 */
h.layoutItems=function(e,t){e=this._getItemsForLayout(e),this._layoutItems(e,t),this._postLayout()},/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
h._getItemsForLayout=function(e){return e.filter(function(e){return!e.isIgnored})},/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
h._layoutItems=function(e,t){if(this._emitCompleteOnItems("layout",e),e&&e.length){var n=[];e.forEach(function(e){
// get x/y object from method
var i=this._getItemLayoutPosition(e);
// enqueue
i.item=e,i.isInstant=t||e.isLayoutInstant,n.push(i)},this),this._processLayoutQueue(n)}},/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
h._getItemLayoutPosition=function(){return{x:0,y:0}},/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
h._processLayoutQueue=function(e){this.updateStagger(),e.forEach(function(e,t){this._positionItem(e.item,e.x,e.y,e.isInstant,t)},this)},
// set stagger from option in milliseconds number
h.updateStagger=function(){var e=this.options.stagger;return null===e||void 0===e?void(this.stagger=0):(this.stagger=s(e),this.stagger)},/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
h._positionItem=function(e,t,n,i,r){i?
// if not transition, just set CSS
e.goTo(t,n):(e.stagger(r*this.stagger),e.moveTo(t,n))},/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
h._postLayout=function(){this.resizeContainer()},h.resizeContainer=function(){if(this._getOption("resizeContainer")){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
h._getContainerSize=c,/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
h._setContainerMeasure=function(e,t){if(void 0!==e){var n=this.size;
// add padding and border width if border box
n.isBorderBox&&(e+=t?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),e=Math.max(e,0),this.element.style[t?"width":"height"]=e+"px"}},/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
h._emitCompleteOnItems=function(e,t){function n(){r.dispatchEvent(e+"Complete",null,[t])}function i(){++a==o&&n()}var r=this,o=t.length;if(!t||!o)return void n();var a=0;
// bind callback
t.forEach(function(t){t.once(e,i)})},/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
h.dispatchEvent=function(e,t,n){
// add original event to arguments
var i=t?[t].concat(n):n;if(this.emitEvent(e,i),d)if(
// set this.$element
this.$element=this.$element||d(this.element),t){
// create jQuery event
var r=d.Event(t);r.type=e,this.$element.trigger(r,n)}else
// just trigger with type if no event available
this.$element.trigger(e,n)},
// -------------------------- ignore & stamps -------------------------- //
/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
h.ignore=function(e){var t=this.getItem(e);t&&(t.isIgnored=!0)},/**
 * return item to layout collection
 * @param {Element} elem
 */
h.unignore=function(e){var t=this.getItem(e);t&&delete t.isIgnored},/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
h.stamp=function(e){(e=this._find(e))&&(this.stamps=this.stamps.concat(e),
// ignore
e.forEach(this.ignore,this))},/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
h.unstamp=function(e){(e=this._find(e))&&e.forEach(function(e){
// filter out removed stamp elements
i.removeFrom(this.stamps,e),this.unignore(e)},this)},/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
h._find=function(e){if(e)
// if string, use argument as selector string
return"string"==typeof e&&(e=this.element.querySelectorAll(e)),e=i.makeArray(e)},h._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},
// update boundingLeft / Top
h._getBoundingRect=function(){
// get bounding rect for container element
var e=this.element.getBoundingClientRect(),t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)}},/**
 * @param {Element} stamp
**/
h._manageStamp=c,/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
h._getElementOffset=function(e){var t=e.getBoundingClientRect(),i=this._boundingRect,r=n(e);return{left:t.left-i.left-r.marginLeft,top:t.top-i.top-r.marginTop,right:i.right-t.right-r.marginRight,bottom:i.bottom-t.bottom-r.marginBottom}},
// -------------------------- resize -------------------------- //
// enable event handlers for listeners
// i.e. resize -> onresize
h.handleEvent=i.handleEvent,/**
 * Bind layout to window resizing
 */
h.bindResize=function(){e.addEventListener("resize",this),this.isResizeBound=!0},/**
 * Unbind layout to window resizing
 */
h.unbindResize=function(){e.removeEventListener("resize",this),this.isResizeBound=!1},h.onresize=function(){this.resize()},i.debounceMethod(o,"onresize",100),h.resize=function(){
// don't trigger if size did not change
// or if resize was unbound. See #9
this.isResizeBound&&this.needsResizeLayout()&&this.layout()},/**
 * check if layout is needed post layout
 * @returns Boolean
 */
h.needsResizeLayout=function(){var e=n(this.element);return this.size&&e&&e.innerWidth!==this.size.innerWidth},
// -------------------------- methods -------------------------- //
/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
h.addItems=function(e){var t=this._itemize(e);
// add items to collection
return t.length&&(this.items=this.items.concat(t)),t},/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
h.appended=function(e){var t=this.addItems(e);t.length&&(
// layout and reveal just the new items
this.layoutItems(t,!0),this.reveal(t))},/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
h.prepended=function(e){var t=this._itemize(e);if(t.length){
// add items to beginning of collection
var n=this.items.slice(0);this.items=t.concat(n),
// start new layout
this._resetLayout(),this._manageStamps(),
// layout new stuff without transition
this.layoutItems(t,!0),this.reveal(t),
// layout previous items
this.layoutItems(n)}},/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
h.reveal=function(e){if(this._emitCompleteOnItems("reveal",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.reveal()})}},/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
h.hide=function(e){if(this._emitCompleteOnItems("hide",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.hide()})}},/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
h.revealItemElements=function(e){var t=this.getItems(e);this.reveal(t)},/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
h.hideItemElements=function(e){var t=this.getItems(e);this.hide(t)},/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
h.getItem=function(e){
// loop through items to get the one that matches
for(var t=0;t<this.items.length;t++){var n=this.items[t];if(n.element==e)
// return item
return n}},/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
h.getItems=function(e){e=i.makeArray(e);var t=[];return e.forEach(function(e){var n=this.getItem(e);n&&t.push(n)},this),t},/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
h.remove=function(e){var t=this.getItems(e);this._emitCompleteOnItems("remove",t),
// bail if no items to remove
t&&t.length&&t.forEach(function(e){e.remove(),
// remove item from collection
i.removeFrom(this.items,e)},this)},
// ----- destroy ----- //
// remove and disable Outlayer instance
h.destroy=function(){
// clean up dynamic styles
var e=this.element.style;e.height="",e.position="",e.width="",
// destroy items
this.items.forEach(function(e){e.destroy()}),this.unbindResize();var t=this.element.outlayerGUID;delete p[t],// remove reference to instance by id
delete this.element.outlayerGUID,
// remove data for jQuery
d&&d.removeData(this.element,this.constructor.namespace)},
// -------------------------- data -------------------------- //
/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
o.data=function(e){e=i.getQueryElement(e);var t=e&&e.outlayerGUID;return t&&p[t]},
// -------------------------- create Outlayer class -------------------------- //
/**
 * create a layout class
 * @param {String} namespace
 */
o.create=function(e,t){
// sub-class Outlayer
var n=a(o);
// apply new options and compatOptions
// sub-class Item
// -------------------------- declarative -------------------------- //
// -------------------------- jQuery bridge -------------------------- //
// make into jQuery plugin
return n.defaults=i.extend({},o.defaults),i.extend(n.defaults,t),n.compatOptions=i.extend({},o.compatOptions),n.namespace=e,n.data=o.data,n.Item=a(r),i.htmlInit(n,e),d&&d.bridget&&d.bridget(e,n),n};
// ----- helpers ----- //
// how many milliseconds are in each unit
var g={ms:1,s:1e3};
// ----- fin ----- //
// back in global
return o.Item=r,o})},/***/
"../node_modules/owl.carousel/dist/owl.carousel.js":/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e,t){!function(e,n,i,r){/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
function o(t,n){/**
		 * Current settings for the carousel.
		 * @public
		 */
this.settings=null,/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
this.options=e.extend({},o.Defaults,n),/**
		 * Plugin element.
		 * @public
		 */
this.$element=e(t),/**
		 * Proxied event handlers.
		 * @protected
		 */
this._handlers={},/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
this._plugins={},/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
this._supress={},/**
		 * Absolute current position.
		 * @protected
		 */
this._current=null,/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
this._speed=null,/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
this._coordinates=[],/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
this._breakpoint=null,/**
		 * Current width of the plugin element.
		 */
this._width=null,/**
		 * All real items.
		 * @protected
		 */
this._items=[],/**
		 * All cloned items.
		 * @protected
		 */
this._clones=[],/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
this._mergers=[],/**
		 * Widths of all items.
		 */
this._widths=[],/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
this._invalidated={},/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
this._pipe=[],/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},e.each(["onResize","onThrottledResize"],e.proxy(function(t,n){this._handlers[n]=e.proxy(this[n],this)},this)),e.each(o.Plugins,e.proxy(function(e,t){this._plugins[e.charAt(0).toLowerCase()+e.slice(1)]=new t(this)},this)),e.each(o.Workers,e.proxy(function(t,n){this._pipe.push({filter:n.filter,run:e.proxy(n.run,this)})},this)),this.setup(),this.initialize()}/**
	 * Default options for the carousel.
	 * @public
	 */
o.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:n,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
o.Width={Default:"default",Inner:"inner",Outer:"outer"},/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
o.Type={Event:"event",State:"state"},/**
	 * Contains all registered plugins.
	 * @public
	 */
o.Plugins={},/**
	 * List of workers involved in the update process.
	 */
o.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(e){e.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(e){var t=this.settings.margin||"",n=!this.settings.autoWidth,i=this.settings.rtl,r={width:"auto","margin-left":i?t:"","margin-right":i?"":t};!n&&this.$stage.children().css(r),e.css=r}},{filter:["width","items","settings"],run:function(e){var t=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,n=null,i=this._items.length,r=!this.settings.autoWidth,o=[];for(e.items={merge:!1,width:t};i--;)n=this._mergers[i],n=this.settings.mergeFit&&Math.min(n,this.settings.items)||n,e.items.merge=n>1||e.items.merge,o[i]=r?t*n:this._items[i].width();this._widths=o}},{filter:["items","settings"],run:function(){var t=[],n=this._items,i=this.settings,
// TODO: Should be computed from number of min width items in stage
r=Math.max(2*i.items,4),o=2*Math.ceil(n.length/2),a=i.loop&&n.length?i.rewind?r:Math.max(r,o):0,s="",l="";for(a/=2;a>0;)
// Switch to only using appended clones
t.push(this.normalize(t.length/2,!0)),s+=n[t[t.length-1]][0].outerHTML,t.push(this.normalize(n.length-1-(t.length-1)/2,!0)),l=n[t[t.length-1]][0].outerHTML+l,a-=1;this._clones=t,e(s).addClass("cloned").appendTo(this.$stage),e(l).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var e=this.settings.rtl?1:-1,t=this._clones.length+this._items.length,n=-1,i=0,r=0,o=[];++n<t;)i=o[n-1]||0,r=this._widths[this.relative(n)]+this.settings.margin,o.push(i+r*e);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var e=this.settings.stagePadding,t=this._coordinates,n={width:Math.ceil(Math.abs(t[t.length-1]))+2*e,"padding-left":e||"","padding-right":e||""};this.$stage.css(n)}},{filter:["width","items","settings"],run:function(e){var t=this._coordinates.length,n=!this.settings.autoWidth,i=this.$stage.children();if(n&&e.items.merge)for(;t--;)e.css.width=this._widths[this.relative(t)],i.eq(t).css(e.css);else n&&(e.css.width=e.items.width,i.css(e.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(e){e.current=e.current?this.$stage.children().index(e.current):0,e.current=Math.max(this.minimum(),Math.min(this.maximum(),e.current)),this.reset(e.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var e,t,n,i,r=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,a=this.coordinates(this.current())+o,s=a+this.width()*r,l=[];for(n=0,i=this._coordinates.length;n<i;n++)e=this._coordinates[n-1]||0,t=Math.abs(this._coordinates[n])+o*r,(this.op(e,"<=",a)&&this.op(e,">",s)||this.op(t,"<",a)&&this.op(t,">",s))&&l.push(n);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],/**
	 * Create the stage DOM element
	 */
o.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),
// if the stage is already in the DOM, grab it and skip stage initialization
this.$stage.length||(this.$element.addClass(this.options.loadingClass),
// create stage
this.$stage=e("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(e("<div/>",{class:this.settings.stageOuterClass})),
// append stage
this.$element.append(this.$stage.parent()))},/**
	 * Create item DOM elements
	 */
o.prototype.initializeItems=function(){var t=this.$element.find(".owl-item");
// if the items are already in the DOM, grab them and skip item initialization
if(t.length)return this._items=t.get().map(function(t){return e(t)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();
// append content
this.replace(this.$element.children().not(this.$stage.parent())),
// check visibility
this.isVisible()?
// update view
this.refresh():
// invalidate width
this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},/**
	 * Initializes the carousel.
	 * @protected
	 */
o.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var e,t,n;e=this.$element.find("img"),t=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:void 0,n=this.$element.children(t).width(),e.length&&n<=0&&this.preloadAutoWidthImages(e)}this.initializeStage(),this.initializeItems(),
// register event handlers
this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
o.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
o.prototype.setup=function(){var t=this.viewport(),n=this.options.responsive,i=-1,r=null;n?(e.each(n,function(e){e<=t&&e>i&&(i=Number(e))}),r=e.extend({},this.options,n[i]),"function"==typeof r.stagePadding&&(r.stagePadding=r.stagePadding()),delete r.responsive,
// responsive class
r.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+i))):r=e.extend({},this.options),this.trigger("change",{property:{name:"settings",value:r}}),this._breakpoint=i,this.settings=r,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},/**
	 * Updates option logic if necessery.
	 * @protected
	 */
o.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
o.prototype.prepare=function(t){var n=this.trigger("prepare",{content:t});return n.data||(n.data=e("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(t)),this.trigger("prepared",{content:n.data}),n.data},/**
	 * Updates the view.
	 * @public
	 */
o.prototype.update=function(){for(var t=0,n=this._pipe.length,i=e.proxy(function(e){return this[e]},this._invalidated),r={};t<n;)(this._invalidated.all||e.grep(this._pipe[t].filter,i).length>0)&&this._pipe[t].run(r),t++;this._invalidated={},!this.is("valid")&&this.enter("valid")},/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
o.prototype.width=function(e){switch(e=e||o.Width.Default){case o.Width.Inner:case o.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
o.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},/**
	 * Checks window `resize` event.
	 * @protected
	 */
o.prototype.onThrottledResize=function(){n.clearTimeout(this.resizeTimer),this.resizeTimer=n.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},/**
	 * Checks window `resize` event.
	 * @protected
	 */
o.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
o.prototype.registerEventHandlers=function(){e.support.transition&&this.$stage.on(e.support.transition.end+".owl.core",e.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(n,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",e.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",e.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",e.proxy(this.onDragEnd,this)))},/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
o.prototype.onDragStart=function(t){var n=null;3!==t.which&&(e.support.transform?(n=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),n={x:n[16===n.length?12:4],y:n[16===n.length?13:5]}):(n=this.$stage.position(),n={x:this.settings.rtl?n.left+this.$stage.width()-this.width()+this.settings.margin:n.left,y:n.top}),this.is("animating")&&(e.support.transform?this.animate(n.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===t.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=e(t.target),this._drag.stage.start=n,this._drag.stage.current=n,this._drag.pointer=this.pointer(t),e(i).on("mouseup.owl.core touchend.owl.core",e.proxy(this.onDragEnd,this)),e(i).one("mousemove.owl.core touchmove.owl.core",e.proxy(function(t){var n=this.difference(this._drag.pointer,this.pointer(t));e(i).on("mousemove.owl.core touchmove.owl.core",e.proxy(this.onDragMove,this)),Math.abs(n.x)<Math.abs(n.y)&&this.is("valid")||(t.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
o.prototype.onDragMove=function(e){var t=null,n=null,i=null,r=this.difference(this._drag.pointer,this.pointer(e)),o=this.difference(this._drag.stage.start,r);this.is("dragging")&&(e.preventDefault(),this.settings.loop?(t=this.coordinates(this.minimum()),n=this.coordinates(this.maximum()+1)-t,o.x=((o.x-t)%n+n)%n+t):(t=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),n=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),i=this.settings.pullDrag?-1*r.x/5:0,o.x=Math.max(Math.min(o.x,t+i),n+i)),this._drag.stage.current=o,this.animate(o.x))},/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
o.prototype.onDragEnd=function(t){var n=this.difference(this._drag.pointer,this.pointer(t)),r=this._drag.stage.current,o=n.x>0^this.settings.rtl?"left":"right";e(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==n.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(r.x,0!==n.x?o:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=o,(Math.abs(n.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
o.prototype.closest=function(t,n){var i=-1,r=this.width(),o=this.coordinates();
// check closest item
// non loop boundries
return this.settings.freeDrag||e.each(o,e.proxy(function(e,a){
// on a left pull, check on current index
return"left"===n&&t>a-30&&t<a+30?i=e:"right"===n&&t>a-r-30&&t<a-r+30?i=e+1:this.op(t,"<",a)&&this.op(t,">",void 0!==o[e+1]?o[e+1]:a-r)&&(i="left"===n?e+1:e),-1===i},this)),this.settings.loop||(this.op(t,">",o[this.minimum()])?i=t=this.minimum():this.op(t,"<",o[this.maximum()])&&(i=t=this.maximum())),i},/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
o.prototype.animate=function(t){var n=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),n&&(this.enter("animating"),this.trigger("translate")),e.support.transform3d&&e.support.transition?this.$stage.css({transform:"translate3d("+t+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):n?this.$stage.animate({left:t+"px"},this.speed(),this.settings.fallbackEasing,e.proxy(this.onTransitionEnd,this)):this.$stage.css({left:t+"px"})},/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
o.prototype.is=function(e){return this._states.current[e]&&this._states.current[e]>0},/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
o.prototype.current=function(e){if(void 0===e)return this._current;if(0!==this._items.length){if(e=this.normalize(e),this._current!==e){var t=this.trigger("change",{property:{name:"position",value:e}});void 0!==t.data&&(e=this.normalize(t.data)),this._current=e,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current}},/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
o.prototype.invalidate=function(t){return"string"===e.type(t)&&(this._invalidated[t]=!0,this.is("valid")&&this.leave("valid")),e.map(this._invalidated,function(e,t){return t})},/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
o.prototype.reset=function(e){void 0!==(e=this.normalize(e))&&(this._speed=0,this._current=e,this.suppress(["translate","translated"]),this.animate(this.coordinates(e)),this.release(["translate","translated"]))},/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
o.prototype.normalize=function(e,t){var n=this._items.length,i=t?0:this._clones.length;return!this.isNumeric(e)||n<1?e=void 0:(e<0||e>=n+i)&&(e=((e-i/2)%n+n)%n+i/2),e},/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
o.prototype.relative=function(e){return e-=this._clones.length/2,this.normalize(e,!0)},/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
o.prototype.maximum=function(e){var t,n,i,r=this.settings,o=this._coordinates.length;if(r.loop)o=this._clones.length/2+this._items.length-1;else if(r.autoWidth||r.merge){if(t=this._items.length)for(n=this._items[--t].width(),i=this.$element.width();t--&&!((n+=this._items[t].width()+this.settings.margin)>i););o=t+1}else o=r.center?this._items.length-1:this._items.length-r.items;return e&&(o-=this._clones.length/2),Math.max(o,0)},/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
o.prototype.minimum=function(e){return e?0:this._clones.length/2},/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
o.prototype.items=function(e){return void 0===e?this._items.slice():(e=this.normalize(e,!0),this._items[e])},/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
o.prototype.mergers=function(e){return void 0===e?this._mergers.slice():(e=this.normalize(e,!0),this._mergers[e])},/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
o.prototype.clones=function(t){var n=this._clones.length/2,i=n+this._items.length,r=function(e){return e%2==0?i+e/2:n-(e+1)/2};return void 0===t?e.map(this._clones,function(e,t){return r(t)}):e.map(this._clones,function(e,n){return e===t?r(n):null})},/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
o.prototype.speed=function(e){return void 0!==e&&(this._speed=e),this._speed},/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
o.prototype.coordinates=function(t){var n,i=1,r=t-1;return void 0===t?e.map(this._coordinates,e.proxy(function(e,t){return this.coordinates(t)},this)):(this.settings.center?(this.settings.rtl&&(i=-1,r=t+1),n=this._coordinates[t],n+=(this.width()-n+(this._coordinates[r]||0))/2*i):n=this._coordinates[r]||0,n=Math.ceil(n))},/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
o.prototype.duration=function(e,t,n){return 0===n?0:Math.min(Math.max(Math.abs(t-e),1),6)*Math.abs(n||this.settings.smartSpeed)},/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
o.prototype.to=function(e,t){var n=this.current(),i=null,r=e-this.relative(n),o=(r>0)-(r<0),a=this._items.length,s=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(r)>a/2&&(r+=-1*o*a),e=n+r,(i=((e-s)%a+a)%a+s)!==e&&i-r<=l&&i-r>0&&(n=i-r,e=i,this.reset(n))):this.settings.rewind?(l+=1,e=(e%l+l)%l):e=Math.max(s,Math.min(l,e)),this.speed(this.duration(n,e,t)),this.current(e),this.isVisible()&&this.update()},/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
o.prototype.next=function(e){e=e||!1,this.to(this.relative(this.current())+1,e)},/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
o.prototype.prev=function(e){e=e||!1,this.to(this.relative(this.current())-1,e)},/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
o.prototype.onTransitionEnd=function(e){
// if css2 animation then event object is undefined
if(void 0!==e&&(e.stopPropagation(),(e.target||e.srcElement||e.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
o.prototype.viewport=function(){var t;return this.options.responsiveBaseElement!==n?t=e(this.options.responsiveBaseElement).width():n.innerWidth?t=n.innerWidth:i.documentElement&&i.documentElement.clientWidth?t=i.documentElement.clientWidth:console.warn("Can not detect viewport width."),t},/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
o.prototype.replace=function(n){this.$stage.empty(),this._items=[],n&&(n=n instanceof t?n:e(n)),this.settings.nestedItemSelector&&(n=n.find("."+this.settings.nestedItemSelector)),n.filter(function(){return 1===this.nodeType}).each(e.proxy(function(e,t){t=this.prepare(t),this.$stage.append(t),this._items.push(t),this._mergers.push(1*t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
o.prototype.add=function(n,i){var r=this.relative(this._current);i=void 0===i?this._items.length:this.normalize(i,!0),n=n instanceof t?n:e(n),this.trigger("add",{content:n,position:i}),n=this.prepare(n),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(n),0!==this._items.length&&this._items[i-1].after(n),this._items.push(n),this._mergers.push(1*n.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(n),this._items.splice(i,0,n),this._mergers.splice(i,0,1*n.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[r]&&this.reset(this._items[r].index()),this.invalidate("items"),this.trigger("added",{content:n,position:i})},/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
o.prototype.remove=function(e){void 0!==(e=this.normalize(e,!0))&&(this.trigger("remove",{content:this._items[e],position:e}),this._items[e].remove(),this._items.splice(e,1),this._mergers.splice(e,1),this.invalidate("items"),this.trigger("removed",{content:null,position:e}))},/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
o.prototype.preloadAutoWidthImages=function(t){t.each(e.proxy(function(t,n){this.enter("pre-loading"),n=e(n),e(new Image).one("load",e.proxy(function(e){n.attr("src",e.target.src),n.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",n.attr("src")||n.attr("data-src")||n.attr("data-src-retina"))},this))},/**
	 * Destroys the carousel.
	 * @public
	 */
o.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),e(i).off(".owl.core"),!1!==this.settings.responsive&&(n.clearTimeout(this.resizeTimer),this.off(n,"resize",this._handlers.onThrottledResize));for(var t in this._plugins)this._plugins[t].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
o.prototype.op=function(e,t,n){var i=this.settings.rtl;switch(t){case"<":return i?e>n:e<n;case">":return i?e<n:e>n;case">=":return i?e<=n:e>=n;case"<=":return i?e>=n:e<=n}},/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
o.prototype.on=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,n)},/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
o.prototype.off=function(e,t,n,i){e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n)},/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
o.prototype.trigger=function(t,n,i,r,a){var s={item:{count:this._items.length,index:this.current()}},l=e.camelCase(e.grep(["on",t,i],function(e){return e}).join("-").toLowerCase()),d=e.Event([t,"owl",i||"carousel"].join(".").toLowerCase(),e.extend({relatedTarget:this},s,n));return this._supress[t]||(e.each(this._plugins,function(e,t){t.onTrigger&&t.onTrigger(d)}),this.register({type:o.Type.Event,name:t}),this.$element.trigger(d),this.settings&&"function"==typeof this.settings[l]&&this.settings[l].call(this,d)),d},/**
	 * Enters a state.
	 * @param name - The state name.
	 */
o.prototype.enter=function(t){e.each([t].concat(this._states.tags[t]||[]),e.proxy(function(e,t){void 0===this._states.current[t]&&(this._states.current[t]=0),this._states.current[t]++},this))},/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
o.prototype.leave=function(t){e.each([t].concat(this._states.tags[t]||[]),e.proxy(function(e,t){this._states.current[t]--},this))},/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
o.prototype.register=function(t){if(t.type===o.Type.Event){if(e.event.special[t.name]||(e.event.special[t.name]={}),!e.event.special[t.name].owl){var n=e.event.special[t.name]._default;e.event.special[t.name]._default=function(e){return!n||!n.apply||e.namespace&&-1!==e.namespace.indexOf("owl")?e.namespace&&e.namespace.indexOf("owl")>-1:n.apply(this,arguments)},e.event.special[t.name].owl=!0}}else t.type===o.Type.State&&(this._states.tags[t.name]?this._states.tags[t.name]=this._states.tags[t.name].concat(t.tags):this._states.tags[t.name]=t.tags,this._states.tags[t.name]=e.grep(this._states.tags[t.name],e.proxy(function(n,i){return e.inArray(n,this._states.tags[t.name])===i},this)))},/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
o.prototype.suppress=function(t){e.each(t,e.proxy(function(e,t){this._supress[t]=!0},this))},/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
o.prototype.release=function(t){e.each(t,e.proxy(function(e,t){delete this._supress[t]},this))},/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
o.prototype.pointer=function(e){var t={x:null,y:null};return e=e.originalEvent||e||n.event,e=e.touches&&e.touches.length?e.touches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e.pageX?(t.x=e.pageX,t.y=e.pageY):(t.x=e.clientX,t.y=e.clientY),t},/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
o.prototype.isNumeric=function(e){return!isNaN(parseFloat(e))},/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
o.prototype.difference=function(e,t){return{x:e.x-t.x,y:e.y-t.y}},/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
e.fn.owlCarousel=function(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=e(this),r=i.data("owl.carousel");r||(r=new o(this,"object"==typeof t&&t),i.data("owl.carousel",r),e.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(t,n){r.register({type:o.Type.Event,name:n}),r.$element.on(n+".owl.carousel.core",e.proxy(function(e){e.namespace&&e.relatedTarget!==this&&(this.suppress([n]),r[n].apply(this,[].slice.call(arguments,1)),this.release([n]))},r))})),"string"==typeof t&&"_"!==t.charAt(0)&&r[t].apply(r,n)})},/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
e.fn.owlCarousel.Constructor=o}(window.Zepto||e,window,document),function(e,t,n,i){/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
var r=function(t){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
this._core=t,/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
this._interval=null,/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
this._visible=null,/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
this._handlers={"initialized.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},
// set default options
this._core.options=e.extend({},r.Defaults,this._core.options),
// register event handlers
this._core.$element.on(this._handlers)};/**
	 * Default options.
	 * @public
	 */
r.Defaults={autoRefresh:!0,autoRefreshInterval:500},/**
	 * Watches the element.
	 */
r.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=t.setInterval(e.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},/**
	 * Refreshes the element.
	 */
r.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},/**
	 * Destroys the plugin.
	 */
r.prototype.destroy=function(){var e,n;t.clearInterval(this._interval);for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoRefresh=r}(window.Zepto||e,window,document),function(e,t,n,i){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
var r=function(t){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
this._core=t,/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
this._loaded=[],/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":e.proxy(function(t){if(t.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(t.property&&"position"==t.property.name||"initialized"==t.type)){var n=this._core.settings,i=n.center&&Math.ceil(n.items/2)||n.items,r=n.center&&-1*i||0,o=(t.property&&void 0!==t.property.value?t.property.value:this._core.current())+r,a=this._core.clones().length,s=e.proxy(function(e,t){this.load(t)},this);for(
//TODO: Need documentation for this new option
n.lazyLoadEager>0&&(i+=n.lazyLoadEager,
// If the carousel is looping also preload images that are to the "left"
n.loop&&(o-=n.lazyLoadEager,i++));r++<i;)this.load(a/2+this._core.relative(o)),a&&e.each(this._core.clones(this._core.relative(o)),s),o++}},this)},
// set the default options
this._core.options=e.extend({},r.Defaults,this._core.options),
// register event handler
this._core.$element.on(this._handlers)};/**
	 * Default options.
	 * @public
	 */
r.Defaults={lazyLoad:!1,lazyLoadEager:0},/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
r.prototype.load=function(n){var i=this._core.$stage.children().eq(n),r=i&&i.find(".owl-lazy");!r||e.inArray(i.get(0),this._loaded)>-1||(r.each(e.proxy(function(n,i){var r,o=e(i),a=t.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src")||o.attr("data-srcset");this._core.trigger("load",{element:o,url:a},"lazy"),o.is("img")?o.one("load.owl.lazy",e.proxy(function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:a},"lazy")},this)).attr("src",a):o.is("source")?o.one("load.owl.lazy",e.proxy(function(){this._core.trigger("loaded",{element:o,url:a},"lazy")},this)).attr("srcset",a):(r=new Image,r.onload=e.proxy(function(){o.css({"background-image":'url("'+a+'")',opacity:"1"}),this._core.trigger("loaded",{element:o,url:a},"lazy")},this),r.src=a)},this)),this._loaded.push(i.get(0)))},/**
	 * Destroys the plugin.
	 * @public
	 */
r.prototype.destroy=function(){var e,t;for(e in this.handlers)this._core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Lazy=r}(window.Zepto||e,window,document),function(e,t,n,i){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
var r=function(n){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
this._core=n,this._previousHeight=null,/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
this._handlers={"initialized.owl.carousel refreshed.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&"position"===e.property.name&&this.update()},this),"loaded.owl.lazy":e.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&e.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},
// set default options
this._core.options=e.extend({},r.Defaults,this._core.options),
// register event handlers
this._core.$element.on(this._handlers),this._intervalId=null;var i=this;
// These changes have been taken from a PR by gavrochelegnou proposed in #1575
// and have been made compatible with the latest jQuery version
e(t).on("load",function(){i._core.settings.autoHeight&&i.update()}),
// Autoresize the height of the carousel when window is resized
// When carousel has images, the height is dependent on the width
// and should also change on resize
e(t).resize(function(){i._core.settings.autoHeight&&(null!=i._intervalId&&clearTimeout(i._intervalId),i._intervalId=setTimeout(function(){i.update()},250))})};/**
	 * Default options.
	 * @public
	 */
r.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},/**
	 * Updates the view.
	 */
r.prototype.update=function(){var t=this._core._current,n=t+this._core.settings.items,i=this._core.settings.lazyLoad,r=this._core.$stage.children().toArray().slice(t,n),o=[],a=0;e.each(r,function(t,n){o.push(e(n).height())}),a=Math.max.apply(null,o),a<=1&&i&&this._previousHeight&&(a=this._previousHeight),this._previousHeight=a,this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)},r.prototype.destroy=function(){var e,t;for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoHeight=r}(window.Zepto||e,window,document),function(e,t,n,i){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
var r=function(t){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
this._core=t,/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
this._videos={},/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
this._playing=null,/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
this._handlers={"initialized.owl.carousel":e.proxy(function(e){e.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.video&&this.isInFullScreen()&&e.preventDefault()},this),"refreshed.owl.carousel":e.proxy(function(e){e.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":e.proxy(function(e){e.namespace&&"position"===e.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":e.proxy(function(t){if(t.namespace){var n=e(t.content).find(".owl-video");n.length&&(n.css("display","none"),this.fetch(n,e(t.content)))}},this)},
// set default options
this._core.options=e.extend({},r.Defaults,this._core.options),
// register event handlers
this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",e.proxy(function(e){this.play(e)},this))};/**
	 * Default options.
	 * @public
	 */
r.Defaults={video:!1,videoHeight:!1,videoWidth:!1},/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
r.prototype.fetch=function(e,t){var n=function(){return e.attr("data-vimeo-id")?"vimeo":e.attr("data-vzaar-id")?"vzaar":"youtube"}(),i=e.attr("data-vimeo-id")||e.attr("data-youtube-id")||e.attr("data-vzaar-id"),r=e.attr("data-width")||this._core.settings.videoWidth,o=e.attr("data-height")||this._core.settings.videoHeight,a=e.attr("href");if(!a)throw new Error("Missing video URL.");if(/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/
i=a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),i[3].indexOf("youtu")>-1)n="youtube";else if(i[3].indexOf("vimeo")>-1)n="vimeo";else{if(!(i[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");n="vzaar"}i=i[6],this._videos[a]={type:n,id:i,width:r,height:o},t.attr("data-video",a),this.thumbnail(e,this._videos[a])},/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
r.prototype.thumbnail=function(t,n){var i,r,o,a=n.width&&n.height?"width:"+n.width+"px;height:"+n.height+"px;":"",s=t.find("img"),l="src",d="",c=this._core.settings,u=function(n){r='<div class="owl-video-play-icon"></div>',i=c.lazyLoad?e("<div/>",{class:"owl-video-tn "+d,srcType:n}):e("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+n+")"}),t.after(i),t.after(r)};
// custom thumbnail
if(
// wrap video content into owl-video-wrapper div
t.wrap(e("<div/>",{class:"owl-video-wrapper",style:a})),this._core.settings.lazyLoad&&(l="data-src",d="owl-lazy"),s.length)return u(s.attr(l)),s.remove(),!1;"youtube"===n.type?(o="//img.youtube.com/vi/"+n.id+"/hqdefault.jpg",u(o)):"vimeo"===n.type?e.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+n.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){o=e[0].thumbnail_large,u(o)}}):"vzaar"===n.type&&e.ajax({type:"GET",url:"//vzaar.com/api/videos/"+n.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){o=e.framegrab_url,u(o)}})},/**
	 * Stops the current video.
	 * @public
	 */
r.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
r.prototype.play=function(t){var n,i=e(t.target),r=i.closest("."+this._core.settings.itemClass),o=this._videos[r.attr("data-video")],a=o.width||"100%",s=o.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),r=this._core.items(this._core.relative(r.index())),this._core.reset(r.index()),n=e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),n.attr("height",s),n.attr("width",a),"youtube"===o.type?n.attr("src","//www.youtube.com/embed/"+o.id+"?autoplay=1&rel=0&v="+o.id):"vimeo"===o.type?n.attr("src","//player.vimeo.com/video/"+o.id+"?autoplay=1"):"vzaar"===o.type&&n.attr("src","//view.vzaar.com/"+o.id+"/player?autoplay=true"),e(n).wrap('<div class="owl-video-frame" />').insertAfter(r.find(".owl-video")),this._playing=r.addClass("owl-video-playing"))},/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
r.prototype.isInFullScreen=function(){var t=n.fullscreenElement||n.mozFullScreenElement||n.webkitFullscreenElement;return t&&e(t).parent().hasClass("owl-video-frame")},/**
	 * Destroys the plugin.
	 */
r.prototype.destroy=function(){var e,t;this._core.$element.off("click.owl.video");for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Video=r}(window.Zepto||e,window,document),function(e,t,n,i){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
var r=function(t){this.core=t,this.core.options=e.extend({},r.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":e.proxy(function(e){e.namespace&&"position"==e.property.name&&(this.previous=this.core.current(),this.next=e.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":e.proxy(function(e){e.namespace&&(this.swapping="translated"==e.type)},this),"translate.owl.carousel":e.proxy(function(e){e.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};/**
	 * Default options.
	 * @public
	 */
r.Defaults={animateOut:!1,animateIn:!1},/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
r.prototype.swap=function(){if(1===this.core.settings.items&&e.support.animation&&e.support.transition){this.core.speed(0);var t,n=e.proxy(this.clear,this),i=this.core.$stage.children().eq(this.previous),r=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,a=this.core.settings.animateOut;this.core.current()!==this.previous&&(a&&(t=this.core.coordinates(this.previous)-this.core.coordinates(this.next),i.one(e.support.animation.end,n).css({left:t+"px"}).addClass("animated owl-animated-out").addClass(a)),o&&r.one(e.support.animation.end,n).addClass("animated owl-animated-in").addClass(o))}},r.prototype.clear=function(t){e(t.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},/**
	 * Destroys the plugin.
	 * @public
	 */
r.prototype.destroy=function(){var e,t;for(e in this.handlers)this.core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Animate=r}(window.Zepto||e,window,document),function(e,t,n,i){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
var r=function(t){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
this._core=t,/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
this._call=null,/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
this._time=0,/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
this._timeout=0,/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
this._paused=!0,/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
this._handlers={"changed.owl.carousel":e.proxy(function(e){e.namespace&&"settings"===e.property.name?this._core.settings.autoplay?this.play():this.stop():e.namespace&&"position"===e.property.name&&this._paused&&(
// Reset the timer. This code is triggered when the position
// of the carousel was changed through user interaction.
this._time=0)},this),"initialized.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":e.proxy(function(e,t,n){e.namespace&&this.play(t,n)},this),"stop.owl.autoplay":e.proxy(function(e){e.namespace&&this.stop()},this),"mouseover.owl.autoplay":e.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":e.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":e.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":e.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},
// register event handlers
this._core.$element.on(this._handlers),
// set default options
this._core.options=e.extend({},r.Defaults,this._core.options)};/**
	 * Default options.
	 * @public
	 */
r.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
r.prototype._next=function(i){this._call=t.setTimeout(e.proxy(this._next,this,i),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||n.hidden||this._core.next(i||this._core.settings.autoplaySpeed)},/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
r.prototype.read=function(){return(new Date).getTime()-this._time},/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
r.prototype.play=function(n,i){var r;this._core.is("rotating")||this._core.enter("rotating"),n=n||this._core.settings.autoplayTimeout,
// Calculate the elapsed time since the last transition. If the carousel
// wasn't playing this calculation will yield zero.
r=Math.min(this._time%(this._timeout||n),n),this._paused?(
// Start the clock.
this._time=this.read(),this._paused=!1):
// Clear the active timeout to allow replacement.
t.clearTimeout(this._call),
// Adjust the origin of the timer to match the new timeout value.
this._time+=this.read()%n-r,this._timeout=n,this._call=t.setTimeout(e.proxy(this._next,this,i),n-r)},/**
	 * Stops the autoplay.
	 * @public
	 */
r.prototype.stop=function(){this._core.is("rotating")&&(
// Reset the clock.
this._time=0,this._paused=!0,t.clearTimeout(this._call),this._core.leave("rotating"))},/**
	 * Pauses the autoplay.
	 * @public
	 */
r.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(
// Pause the clock.
this._time=this.read(),this._paused=!0,t.clearTimeout(this._call))},/**
	 * Destroys the plugin.
	 */
r.prototype.destroy=function(){var e,t;this.stop();for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.autoplay=r}(window.Zepto||e,window,document),function(e,t,n,i){"use strict";/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
var r=function(t){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
this._core=t,/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
this._initialized=!1,/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
this._pages=[],/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
this._controls={},/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
this._templates=[],/**
		 * The carousel element.
		 * @type {jQuery}
		 */
this.$element=this._core.$element,/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
this._handlers={"prepared.owl.carousel":e.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,0,this._templates.pop())},this),"remove.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,1)},this),"changed.owl.carousel":e.proxy(function(e){e.namespace&&"position"==e.property.name&&this.draw()},this),"initialized.owl.carousel":e.proxy(function(e){e.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":e.proxy(function(e){e.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},
// set default options
this._core.options=e.extend({},r.Defaults,this._core.options),
// register event handlers
this.$element.on(this._handlers)};/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
r.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
r.prototype.initialize=function(){var t,n=this._core.settings;
// create DOM structure for relative navigation
this._controls.$relative=(n.navContainer?e(n.navContainer):e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=e("<"+n.navElement+">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click",e.proxy(function(e){this.prev(n.navSpeed)},this)),this._controls.$next=e("<"+n.navElement+">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click",e.proxy(function(e){this.next(n.navSpeed)},this)),
// create DOM structure for absolute navigation
n.dotsData||(this._templates=[e('<button role="button">').addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]),this._controls.$absolute=(n.dotsContainer?e(n.dotsContainer):e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",e.proxy(function(t){var i=e(t.target).parent().is(this._controls.$absolute)?e(t.target).index():e(t.target).parent().index();t.preventDefault(),this.to(i,n.dotsSpeed)},this));/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/
// override public methods of the carousel
for(t in this._overrides)this._core[t]=e.proxy(this[t],this)},/**
	 * Destroys the plugin.
	 * @protected
	 */
r.prototype.destroy=function(){var e,t,n,i,r;r=this._core.settings;for(e in this._handlers)this.$element.off(e,this._handlers[e]);for(t in this._controls)"$relative"===t&&r.navContainer?this._controls[t].html(""):this._controls[t].remove();for(i in this.overides)this._core[i]=this._overrides[i];for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},/**
	 * Updates the internal state.
	 * @protected
	 */
r.prototype.update=function(){var e,t,n,i=this._core.clones().length/2,r=i+this._core.items().length,o=this._core.maximum(!0),a=this._core.settings,s=a.center||a.autoWidth||a.dotsData?1:a.dotsEach||a.items;if("page"!==a.slideBy&&(a.slideBy=Math.min(a.slideBy,a.items)),a.dots||"page"==a.slideBy)for(this._pages=[],e=i,t=0,n=0;e<r;e++){if(t>=s||0===t){if(this._pages.push({start:Math.min(o,e-i),end:e-i+s-1}),Math.min(o,e-i)===o)break;t=0,++n}t+=this._core.mergers(this._core.relative(e))}},/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
r.prototype.draw=function(){var t,n=this._core.settings,i=this._core.items().length<=n.items,r=this._core.relative(this._core.current()),o=n.loop||n.rewind;this._controls.$relative.toggleClass("disabled",!n.nav||i),n.nav&&(this._controls.$previous.toggleClass("disabled",!o&&r<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&r>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!n.dots||i),n.dots&&(t=this._pages.length-this._controls.$absolute.children().length,n.dotsData&&0!==t?this._controls.$absolute.html(this._templates.join("")):t>0?this._controls.$absolute.append(new Array(t+1).join(this._templates[0])):t<0&&this._controls.$absolute.children().slice(t).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(e.inArray(this.current(),this._pages)).addClass("active"))},/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
r.prototype.onTrigger=function(t){var n=this._core.settings;t.page={index:e.inArray(this.current(),this._pages),count:this._pages.length,size:n&&(n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items)}},/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
r.prototype.current=function(){var t=this._core.relative(this._core.current());return e.grep(this._pages,e.proxy(function(e,n){return e.start<=t&&e.end>=t},this)).pop()},/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
r.prototype.getPosition=function(t){var n,i,r=this._core.settings;return"page"==r.slideBy?(n=e.inArray(this.current(),this._pages),i=this._pages.length,t?++n:--n,n=this._pages[(n%i+i)%i].start):(n=this._core.relative(this._core.current()),i=this._core.items().length,t?n+=r.slideBy:n-=r.slideBy),n},/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
r.prototype.next=function(t){e.proxy(this._overrides.to,this._core)(this.getPosition(!0),t)},/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
r.prototype.prev=function(t){e.proxy(this._overrides.to,this._core)(this.getPosition(!1),t)},/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
r.prototype.to=function(t,n,i){var r;!i&&this._pages.length?(r=this._pages.length,e.proxy(this._overrides.to,this._core)(this._pages[(t%r+r)%r].start,n)):e.proxy(this._overrides.to,this._core)(t,n)},e.fn.owlCarousel.Constructor.Plugins.Navigation=r}(window.Zepto||e,window,document),function(e,t,n,i){"use strict";/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
var r=function(n){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
this._core=n,/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
this._hashes={},/**
		 * The carousel element.
		 * @type {jQuery}
		 */
this.$element=this._core.$element,/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
this._handlers={"initialized.owl.carousel":e.proxy(function(n){n.namespace&&"URLHash"===this._core.settings.startPosition&&e(t).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":e.proxy(function(t){if(t.namespace){var n=e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!n)return;this._hashes[n]=t.content}},this),"changed.owl.carousel":e.proxy(function(n){if(n.namespace&&"position"===n.property.name){var i=this._core.items(this._core.relative(this._core.current())),r=e.map(this._hashes,function(e,t){return e===i?t:null}).join();if(!r||t.location.hash.slice(1)===r)return;t.location.hash=r}},this)},
// set default options
this._core.options=e.extend({},r.Defaults,this._core.options),
// register the event handlers
this.$element.on(this._handlers),
// register event listener for hash navigation
e(t).on("hashchange.owl.navigation",e.proxy(function(e){var n=t.location.hash.substring(1),i=this._core.$stage.children(),r=this._hashes[n]&&i.index(this._hashes[n]);void 0!==r&&r!==this._core.current()&&this._core.to(this._core.relative(r),!1,!0)},this))};/**
	 * Default options.
	 * @public
	 */
r.Defaults={URLhashListener:!1},/**
	 * Destroys the plugin.
	 * @public
	 */
r.prototype.destroy=function(){var n,i;e(t).off("hashchange.owl.navigation");for(n in this._handlers)this._core.$element.off(n,this._handlers[n]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},e.fn.owlCarousel.Constructor.Plugins.Hash=r}(window.Zepto||e,window,document),function(e,t,n,i){function r(t,n){var r=!1,o=t.charAt(0).toUpperCase()+t.slice(1);return e.each((t+" "+s.join(o+" ")+o).split(" "),function(e,t){if(a[t]!==i)return r=!n||t,!1}),r}function o(e){return r(e,!0)}var a=e("<support>").get(0).style,s="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},d={csstransforms:function(){return!!r("transform")},csstransforms3d:function(){return!!r("perspective")},csstransitions:function(){return!!r("transition")},cssanimations:function(){return!!r("animation")}};d.csstransitions()&&(/* jshint -W053 */
e.support.transition=new String(o("transition")),e.support.transition.end=l.transition.end[e.support.transition]),d.cssanimations()&&(/* jshint -W053 */
e.support.animation=new String(o("animation")),e.support.animation.end=l.animation.end[e.support.animation]),d.csstransforms()&&(/* jshint -W053 */
e.support.transform=new String(o("transform")),e.support.transform3d=d.csstransforms3d())}(window.Zepto||e,window,document)}).call(t,n("../node_modules/jquery/dist/jquery.js"),n("../node_modules/jquery/dist/jquery.js"))},/***/
"../node_modules/popper.js/dist/esm/popper.js":/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),/* WEBPACK VAR INJECTION */
function(e){function n(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function i(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ue))}}/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function r(e){var t={};return e&&"[object Function]"===t.toString.call(e)}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function o(e,t){if(1!==e.nodeType)return[];
// NOTE: 1 DOM access here
var n=getComputedStyle(e,null);return t?n[t]:n}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function a(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function s(e){
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}
// Firefox want us to check `-x` and `-y` variations as well
var t=o(e),n=t.overflow,i=t.overflowX;return/(auto|scroll|overlay)/.test(n+t.overflowY+i)?e:s(a(e))}/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function l(e){return 11===e?fe:10===e?me:fe||me}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function d(e){if(!e)return document.documentElement;
// Skip hidden elements which don't have an offsetParent
for(var t=l(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;
// .offsetParent will return the closest TD or TABLE in case
// no offsetParent is present, I hate this job...
return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===o(n,"position")?d(n):n:e?e.ownerDocument.documentElement:document.documentElement}function c(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||d(e.firstElementChild)===e)}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function u(e){return null!==e.parentNode?u(e.parentNode):e}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function p(e,t){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var a=o.commonAncestorContainer;
// Both nodes are inside #document
if(e!==a&&t!==a||i.contains(r))return c(a)?a:d(a);
// one of the nodes is inside shadowDOM, find which one
var s=u(e);return s.host?p(s.host,t):p(e,u(t).host)}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"===i||"HTML"===i){var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[n]}return e[n]}/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=h(t,"top"),r=h(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */
function f(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function m(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],l(10)?n["offset"+e]+i["margin"+("Height"===e?"Top":"Left")]+i["margin"+("Height"===e?"Bottom":"Right")]:0)}function v(){var e=document.body,t=document.documentElement,n=l(10)&&getComputedStyle(t);return{height:m("Height",e,t,n),width:m("Width",e,t,n)}}/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function y(e){return we({},e,{right:e.left+e.width,bottom:e.top+e.height})}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function b(e){var t={};
// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(l(10)){t=e.getBoundingClientRect();var n=h(e,"top"),i=h(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},a="HTML"===e.nodeName?v():{},s=a.width||e.clientWidth||r.right-r.left,d=a.height||e.clientHeight||r.bottom-r.top,c=e.offsetWidth-s,u=e.offsetHeight-d;
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(c||u){var p=o(e);c-=f(p,"x"),u-=f(p,"y"),r.width-=c,r.height-=u}return y(r)}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=l(10),r="HTML"===t.nodeName,a=b(e),d=b(t),c=s(e),u=o(t),p=parseFloat(u.borderTopWidth,10),h=parseFloat(u.borderLeftWidth,10);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
n&&"HTML"===t.nodeName&&(d.top=Math.max(d.top,0),d.left=Math.max(d.left,0));var f=y({top:a.top-d.top-p,left:a.left-d.left-h,width:a.width,height:a.height});
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(f.marginTop=0,f.marginLeft=0,!i&&r){var m=parseFloat(u.marginTop,10),v=parseFloat(u.marginLeft,10);f.top-=p-m,f.bottom-=p-m,f.left-=h-v,f.right-=h-v,
// Attach marginTop and marginLeft because in some circumstances we may need them
f.marginTop=m,f.marginLeft=v}return(i&&!n?t.contains(c):t===c&&"BODY"!==c.nodeName)&&(f=g(f,t)),f}function j(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=w(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:h(n),s=t?0:h(n,"left");return y({top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:r,height:o})}/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function _(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===o(e,"position")||_(a(e)))}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */
function C(e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!e||!e.parentElement||l())return document.documentElement;for(var t=e.parentElement;t&&"none"===o(t,"transform");)t=t.parentElement;return t||document.documentElement}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function x(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},l=r?C(e):p(e,t);
// Handle viewport case
if("viewport"===i)o=j(l,r);else{
// Handle other cases based on DOM element used as boundaries
var d=void 0;"scrollParent"===i?(d=s(a(t)),"BODY"===d.nodeName&&(d=e.ownerDocument.documentElement)):d="window"===i?e.ownerDocument.documentElement:i;var c=w(d,l,r);
// In case of HTML, we need a different computation
if("HTML"!==d.nodeName||_(l))
// for all the other DOM elements, this one is good
o=c;else{var u=v(),h=u.height,g=u.width;o.top+=c.top-c.marginTop,o.bottom=h+c.top,o.left+=c.left-c.marginLeft,o.right=g+c.left}}
// Add paddings
return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function E(e){return e.width*e.height}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function T(e,t,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=x(n,i,o,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},l=Object.keys(s).map(function(e){return we({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),d=l.filter(function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight}),c=d.length>0?d[0].key:l[0].key,u=e.split("-")[1];return c+(u?"-"+u:"")}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function k(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w(n,i?C(t):p(t,n),i)}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function D(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function S(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function I(e,t,n){n=n.split("-")[0];
// Get popper node sizes
var i=D(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",s=o?"left":"top",l=o?"height":"width",d=o?"width":"height";return r[a]=t[a]+t[l]/2-i[l]/2,r[s]=n===s?t[s]-i[d]:t[S(s)],r}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function A(e,t){
// use native find if supported
// use native find if supported
return Array.prototype.find?e.find(t):e.filter(t)[0]}/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function O(e,t,n){
// use native findIndex if supported
if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});
// use `find` + `indexOf` if `findIndex` isn't supported
var i=A(e,function(e){return e[t]===n});return e.indexOf(i)}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function N(e,t,n){return(void 0===n?e:e.slice(0,O(e,"name",n))).forEach(function(e){e.function&&
// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;// eslint-disable-line dot-notation
e.enabled&&r(n)&&(
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
t.offsets.popper=y(t.offsets.popper),t.offsets.reference=y(t.offsets.reference),t=n(t,e))}),t}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function L(){
// if popper is destroyed, don't perform any further update
if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};
// compute reference element offsets
e.offsets.reference=k(this.state,this.popper,this.reference,this.options.positionFixed),
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
e.placement=T(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),
// store the computed placement inside `originalPlacement`
e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,
// compute the popper offsets
e.offsets.popper=I(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",
// run the modifiers
e=N(this.modifiers,e),
// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function $(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function H(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==document.body.style[o])return o}return null}/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function M(){
// touch DOM only if `applyStyle` modifier is enabled
// remove the popper if user explicity asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
return this.state.isDestroyed=!0,$(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[H("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function R(e){var t=e.ownerDocument;return t?t.defaultView:window}function P(e,t,n,i){var r="BODY"===e.nodeName,o=r?e.ownerDocument.defaultView:e;o.addEventListener(t,n,{passive:!0}),r||P(s(o.parentNode),t,n,i),i.push(o)}/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function z(e,t,n,i){
// Resize event listener on window
n.updateBound=i,R(e).addEventListener("resize",n.updateBound,{passive:!0});
// Scroll event listener on scroll parents
var r=s(e);return P(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function B(){this.state.eventsEnabled||(this.state=z(this.reference,this.options,this.state,this.scheduleUpdate))}/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function W(e,t){
// Remove resize event listener on window
// Remove scroll event listener on scroll parents
// Reset state
return R(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function F(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=W(this.reference,this.state))}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function q(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function U(e,t){Object.keys(t).forEach(function(n){var i="";
// add unit if the value is numeric and is one of the following
-1!==["width","height","top","right","bottom","left"].indexOf(n)&&q(t[n])&&(i="px"),e.style[n]=t[n]+i})}/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function V(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function G(e){
// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
// if arrowElement is defined and arrowStyles has some properties
return U(e.instance.popper,e.styles),V(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e}/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function Y(e,t,n,i,r){
// compute reference element offsets
var o=k(r,t,e,n.positionFixed),a=T(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
return t.setAttribute("x-placement",a),U(t,{position:n.positionFixed?"fixed":"absolute"}),n}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function K(e,t){var n=t.x,i=t.y,r=e.offsets.popper,o=A(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==o?o:t.gpuAcceleration,s=d(e.instance.popper),l=b(s),c={position:r.position},u={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)},p="bottom"===n?"top":"bottom",h="right"===i?"left":"right",g=H("transform"),f=void 0,m=void 0;if(m="bottom"===p?-l.height+u.bottom:u.top,f="right"===h?-l.width+u.right:u.left,a&&g)c[g]="translate3d("+f+"px, "+m+"px, 0)",c[p]=0,c[h]=0,c.willChange="transform";else{
// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var v="bottom"===p?-1:1,y="right"===h?-1:1;c[p]=m*v,c[h]=f*y,c.willChange=p+", "+h}
// Attributes
var w={"x-placement":e.placement};
// Update `data` attributes, styles and arrowStyles
return e.attributes=we({},w,e.attributes),e.styles=we({},c,e.styles),e.arrowStyles=we({},e.offsets.arrow,e.arrowStyles),e}/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function Q(e,t,n){var i=A(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function X(e,t){var n;
// arrow depends on keepTogether in order to work
if(!Q(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof i){
// if arrowElement is not found, don't run the modifier
if(!(i=e.instance.popper.querySelector(i)))return e}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],a=e.offsets,s=a.popper,l=a.reference,d=-1!==["left","right"].indexOf(r),c=d?"height":"width",u=d?"Top":"Left",p=u.toLowerCase(),h=d?"left":"top",g=d?"bottom":"right",f=D(i)[c];
//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjuction
//
// top/left side
l[g]-f<s[p]&&(e.offsets.popper[p]-=s[p]-(l[g]-f)),
// bottom/right side
l[p]+f>s[g]&&(e.offsets.popper[p]+=l[p]+f-s[g]),e.offsets.popper=y(e.offsets.popper);
// compute center of the popper
var m=l[p]+l[c]/2-f/2,v=o(e.instance.popper),b=parseFloat(v["margin"+u],10),w=parseFloat(v["border"+u+"Width"],10),j=m-e.offsets.popper[p]-b-w;
// prevent arrowElement from being placed not contiguously to its popper
return j=Math.max(Math.min(s[c]-f,j),0),e.arrowElement=i,e.offsets.arrow=(n={},be(n,p,Math.round(j)),be(n,h,""),n),e}/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function J(e){return"end"===e?"start":"start"===e?"end":e}/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function Z(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=_e.indexOf(e),i=_e.slice(n+1).concat(_e.slice(0,n));return t?i.reverse():i}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function ee(e,t){
// if `inner` modifier is enabled, we can't use the `flip` modifier
if($(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)
// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return e;var n=x(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],r=S(i),o=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case Ce.FLIP:a=[i,r];break;case Ce.CLOCKWISE:a=Z(i);break;case Ce.COUNTERCLOCKWISE:a=Z(i,!0);break;default:a=t.behavior}return a.forEach(function(s,l){if(i!==s||a.length===l+1)return e;i=e.placement.split("-")[0],r=S(i);var d=e.offsets.popper,c=e.offsets.reference,u=Math.floor,p="left"===i&&u(d.right)>u(c.left)||"right"===i&&u(d.left)<u(c.right)||"top"===i&&u(d.bottom)>u(c.top)||"bottom"===i&&u(d.top)<u(c.bottom),h=u(d.left)<u(n.left),g=u(d.right)>u(n.right),f=u(d.top)<u(n.top),m=u(d.bottom)>u(n.bottom),v="left"===i&&h||"right"===i&&g||"top"===i&&f||"bottom"===i&&m,y=-1!==["top","bottom"].indexOf(i),b=!!t.flipVariations&&(y&&"start"===o&&h||y&&"end"===o&&g||!y&&"start"===o&&f||!y&&"end"===o&&m);(p||v||b)&&(
// this boolean to detect any flip loop
e.flipped=!0,(p||v)&&(i=a[l+1]),b&&(o=J(o)),e.placement=i+(o?"-"+o:""),
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
e.offsets.popper=we({},e.offsets.popper,I(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,"flip"))}),e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function te(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],o=Math.floor,a=-1!==["top","bottom"].indexOf(r),s=a?"right":"bottom",l=a?"left":"top",d=a?"width":"height";return n[s]<o(i[l])&&(e.offsets.popper[l]=o(i[l])-n[d]),n[l]>o(i[s])&&(e.offsets.popper[l]=o(i[s])),e}/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function ne(e,t,n,i){
// separate value from unit
var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],a=r[2];
// If it's not a number it's an operator, I guess
if(!o)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=i}return y(s)[t]/100*o}if("vh"===a||"vw"===a){return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o}
// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return o}/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function ie(e,t,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(A(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/,d=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
return d=d.map(function(e,i){
// Most of the units rely on the orientation of the popper
var r=(1===i?!o:o)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return ne(e,r,t,n)})}),d.forEach(function(e,t){e.forEach(function(n,i){q(n)&&(r[t]+=n*("-"===e[i-1]?-1:1))})}),r}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function re(e,t){var n=t.offset,i=e.placement,r=e.offsets,o=r.popper,a=r.reference,s=i.split("-")[0],l=void 0;return l=q(+n)?[+n,0]:ie(n,o,a,s),"left"===s?(o.top+=l[0],o.left-=l[1]):"right"===s?(o.top+=l[0],o.left+=l[1]):"top"===s?(o.left+=l[0],o.top-=l[1]):"bottom"===s&&(o.left+=l[0],o.top+=l[1]),e.popper=o,e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function oe(e,t){var n=t.boundariesElement||d(e.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
e.instance.reference===n&&(n=d(n));
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var i=H("transform"),r=e.instance.popper.style,o=r.top,a=r.left,s=r[i];r.top="",r.left="",r[i]="";var l=x(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
r.top=o,r.left=a,r[i]=s,t.boundaries=l;var c=t.priority,u=e.offsets.popper,p={primary:function(e){var n=u[e];return u[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(u[e],l[e])),be({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=u[n];return u[e]>l[e]&&!t.escapeWithReference&&(i=Math.min(u[n],l[e]-("right"===e?u.width:u.height))),be({},n,i)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=we({},u,p[t](e))}),e.offsets.popper=u,e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function ae(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(i){var r=e.offsets,o=r.reference,a=r.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",d=s?"width":"height",c={start:be({},l,o[l]),end:be({},l,o[l]+o[d]-a[d])};e.offsets.popper=we({},a,c[i])}return e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function se(e){if(!Q(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=A(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){
// Avoid unnecessary DOM access if visibility hasn't changed
if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{
// Avoid unnecessary DOM access if visibility hasn't changed
if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function le(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,o=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=o[n]-(s?r[a?"width":"height"]:0),e.placement=S(t),e.offsets.popper=y(r),e}for(var de="undefined"!=typeof window&&"undefined"!=typeof document,ce=["Edge","Trident","Firefox"],ue=0,pe=0;pe<ce.length;pe+=1)if(de&&navigator.userAgent.indexOf(ce[pe])>=0){ue=1;break}var he=de&&window.Promise,ge=he?n:i,fe=de&&!(!window.MSInputMethodContext||!document.documentMode),me=de&&/MSIE 10/.test(navigator.userAgent),ve=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ye=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),be=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},je=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],_e=je.slice(3),Ce={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},xe={/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
shift:{/** @prop {number} order=100 - Index used to define the order of execution */
order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ae},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
offset:{/** @prop {number} order=200 - Index used to define the order of execution */
order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:re,/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */
order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:oe,/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
priority:["left","right","top","bottom"],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
boundariesElement:"scrollParent"},/**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */
order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:te},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
arrow:{/** @prop {number} order=500 - Index used to define the order of execution */
order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:X,/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
element:"[x-arrow]"},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
flip:{/** @prop {number} order=600 - Index used to define the order of execution */
order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ee,/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
behavior:"flip",/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
boundariesElement:"viewport"},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
inner:{/** @prop {number} order=700 - Index used to define the order of execution */
order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
enabled:!1,/** @prop {ModifierFn} */
fn:le},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
hide:{/** @prop {number} order=800 - Index used to define the order of execution */
order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:se},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */
order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:K,/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
gpuAcceleration:!0,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
x:"bottom",/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
y:"right"},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */
order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:G,/** @prop {Function} */
onLoad:Y,/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
gpuAcceleration:void 0}},Ee={/**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
placement:"bottom",/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
positionFixed:!1,/**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
eventsEnabled:!0,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
removeOnDestroy:!1,/**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
onCreate:function(){},/**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
onUpdate:function(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
modifiers:xe},Te=function(){/**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
function e(t,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ve(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},
// make update() debounced, so that it only runs at most once-per-tick
this.update=ge(this.update.bind(this)),
// with {} we create a new object with the options inside it
this.options=we({},e.Defaults,o),
// init state
this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},
// get reference and popper elements (allow jQuery wrappers)
this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,
// Deep merge modifiers options
this.options.modifiers={},Object.keys(we({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){i.options.modifiers[t]=we({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(e){return we({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(e){e.enabled&&r(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state)}),
// fire the first update to position the popper in the right place
this.update();var a=this.options.eventsEnabled;a&&
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners(),this.state.eventsEnabled=a}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
return ye(e,[{key:"update",value:function(){return L.call(this)}},{key:"destroy",value:function(){return M.call(this)}},{key:"enableEventListeners",value:function(){return B.call(this)}},{key:"disableEventListeners",value:function(){return F.call(this)}}]),e}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */
Te.Utils=("undefined"!=typeof window?window:e).PopperUtils,Te.placements=je,Te.Defaults=Ee,/* harmony default export */
t.default=Te}.call(t,n("../node_modules/webpack/buildin/global.js"))},/***/
"../node_modules/popper.js/dist/umd/popper.min.js":/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(t){/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){return e&&"[object Function]"==={}.toString.call(e)}function n(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function i(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function r(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=n(e),o=t.overflow,a=t.overflowX;return/(auto|scroll|overlay)/.test(o+t.overflowY+a)?e:r(i(e))}function o(e){return 11===e?ae:10===e?se:ae||se}function a(e){if(!e)return document.documentElement;for(var t=o(10)?document.body:null,i=e.offsetParent;i===t&&e.nextElementSibling;)i=(e=e.nextElementSibling).offsetParent;var r=i&&i.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TD","TABLE"].indexOf(i.nodeName)&&"static"===n(i,"position")?a(i):i:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||a(e.firstElementChild)===e)}function l(e){return null===e.parentNode?e:l(e.parentNode)}function d(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var c=o.commonAncestorContainer;if(e!==c&&t!==c||i.contains(r))return s(c)?c:a(c);var u=l(e);return u.host?d(u.host,t):d(e,l(t).host)}function c(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"===i||"HTML"===i){var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[n]}return e[n]}function u(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=c(t,"top"),r=c(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}function p(e,t){var n="x"===t?"Left":"Top",i="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function h(e,t,n,i){return Z(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],o(10)?n["offset"+e]+i["margin"+("Height"===e?"Top":"Left")]+i["margin"+("Height"===e?"Bottom":"Right")]:0)}function g(){var e=document.body,t=document.documentElement,n=o(10)&&getComputedStyle(t);return{height:h("Height",e,t,n),width:h("Width",e,t,n)}}function f(e){return ue({},e,{right:e.left+e.width,bottom:e.top+e.height})}function m(e){var t={};try{if(o(10)){t=e.getBoundingClientRect();var i=c(e,"top"),r=c(e,"left");t.top+=i,t.left+=r,t.bottom+=i,t.right+=r}else t=e.getBoundingClientRect()}catch(e){}var a={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},s="HTML"===e.nodeName?g():{},l=s.width||e.clientWidth||a.right-a.left,d=s.height||e.clientHeight||a.bottom-a.top,u=e.offsetWidth-l,h=e.offsetHeight-d;if(u||h){var m=n(e);u-=p(m,"x"),h-=p(m,"y"),a.width-=u,a.height-=h}return f(a)}function v(e,t){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],a=o(10),s="HTML"===t.nodeName,l=m(e),d=m(t),c=r(e),p=n(t),h=parseFloat(p.borderTopWidth,10),g=parseFloat(p.borderLeftWidth,10);i&&"HTML"===t.nodeName&&(d.top=Z(d.top,0),d.left=Z(d.left,0));var v=f({top:l.top-d.top-h,left:l.left-d.left-g,width:l.width,height:l.height});if(v.marginTop=0,v.marginLeft=0,!a&&s){var y=parseFloat(p.marginTop,10),b=parseFloat(p.marginLeft,10);v.top-=h-y,v.bottom-=h-y,v.left-=g-b,v.right-=g-b,v.marginTop=y,v.marginLeft=b}return(a&&!i?t.contains(c):t===c&&"BODY"!==c.nodeName)&&(v=u(v,t)),v}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=v(e,n),r=Z(n.clientWidth,window.innerWidth||0),o=Z(n.clientHeight,window.innerHeight||0),a=t?0:c(n),s=t?0:c(n,"left");return f({top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:r,height:o})}function b(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===n(e,"position")||b(i(e)))}function w(e){if(!e||!e.parentElement||o())return document.documentElement;for(var t=e.parentElement;t&&"none"===n(t,"transform");)t=t.parentElement;return t||document.documentElement}function j(e,t,n,o){var a=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},l=a?w(e):d(e,t);if("viewport"===o)s=y(l,a);else{var c;"scrollParent"===o?(c=r(i(t)),"BODY"===c.nodeName&&(c=e.ownerDocument.documentElement)):c="window"===o?e.ownerDocument.documentElement:o;var u=v(c,l,a);if("HTML"!==c.nodeName||b(l))s=u;else{var p=g(),h=p.height,f=p.width;s.top+=u.top-u.marginTop,s.bottom=h+u.top,s.left+=u.left-u.marginLeft,s.right=f+u.left}}return s.left+=n,s.top+=n,s.right-=n,s.bottom-=n,s}function _(e){return e.width*e.height}function C(e,t,n,i,r){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=j(n,i,o,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},l=Object.keys(s).map(function(e){return ue({key:e},s[e],{area:_(s[e])})}).sort(function(e,t){return t.area-e.area}),d=l.filter(function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight}),c=0<d.length?d[0].key:l[0].key,u=e.split("-")[1];return c+(u?"-"+u:"")}function x(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return v(n,i?w(t):d(t,n),i)}function E(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function T(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function k(e,t,n){n=n.split("-")[0];var i=E(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",s=o?"left":"top",l=o?"height":"width",d=o?"width":"height";return r[a]=t[a]+t[l]/2-i[l]/2,r[s]=n===s?t[s]-i[d]:t[T(s)],r}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function S(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=D(e,function(e){return e[t]===n});return e.indexOf(i)}function I(t,n,i){return(void 0===i?t:t.slice(0,S(t,"name",i))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var i=t.function||t.fn;t.enabled&&e(i)&&(n.offsets.popper=f(n.offsets.popper),n.offsets.reference=f(n.offsets.reference),n=i(n,t))}),n}function A(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=C(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=k(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=I(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function O(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function N(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==document.body.style[o])return o}return null}function L(){return this.state.isDestroyed=!0,O(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[N("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function $(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,n,i){var o="BODY"===e.nodeName,a=o?e.ownerDocument.defaultView:e;a.addEventListener(t,n,{passive:!0}),o||H(r(a.parentNode),t,n,i),i.push(a)}function M(e,t,n,i){n.updateBound=i,$(e).addEventListener("resize",n.updateBound,{passive:!0});var o=r(e);return H(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function R(){this.state.eventsEnabled||(this.state=M(this.reference,this.options,this.state,this.scheduleUpdate))}function P(e,t){return $(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function z(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=P(this.reference,this.state))}function B(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function W(e,t){Object.keys(t).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&B(t[n])&&(i="px"),e.style[n]=t[n]+i})}function F(e,t){Object.keys(t).forEach(function(n){!1===t[n]?e.removeAttribute(n):e.setAttribute(n,t[n])})}function q(e,t,n){var i=D(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`";console.warn("`"+n+"` modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}function U(e){return"end"===e?"start":"start"===e?"end":e}function V(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=he.indexOf(e),i=he.slice(n+1).concat(he.slice(0,n));return t?i.reverse():i}function G(e,t,n,i){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],a=r[2];if(!o)return e;if(0===a.indexOf("%")){var s;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=i}return f(s)[t]/100*o}if("vh"===a||"vw"===a){return("vh"===a?Z(document.documentElement.clientHeight,window.innerHeight||0):Z(document.documentElement.clientWidth,window.innerWidth||0))/100*o}return o}function Y(e,t,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(D(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,d=-1===s?[a]:[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))];return d=d.map(function(e,i){var r=(1===i?!o:o)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return G(e,r,t,n)})}),d.forEach(function(e,t){e.forEach(function(n,i){B(n)&&(r[t]+=n*("-"===e[i-1]?-1:1))})}),r}function K(e,t){var n,i=t.offset,r=e.placement,o=e.offsets,a=o.popper,s=o.reference,l=r.split("-")[0];return n=B(+i)?[+i,0]:Y(i,a,s,l),"left"===l?(a.top+=n[0],a.left-=n[1]):"right"===l?(a.top+=n[0],a.left+=n[1]):"top"===l?(a.left+=n[0],a.top-=n[1]):"bottom"===l&&(a.left+=n[0],a.top+=n[1]),e.popper=a,e}for(var Q=Math.min,X=Math.round,J=Math.floor,Z=Math.max,ee="undefined"!=typeof window&&"undefined"!=typeof document,te=["Edge","Trident","Firefox"],ne=0,ie=0;ie<te.length;ie+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ie])){ne=1;break}var re=ee&&window.Promise,oe=re?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},ae=ee&&!(!window.MSInputMethodContext||!document.documentMode),se=ee&&/MSIE 10/.test(navigator.userAgent),le=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},de=function(){function e(e,t){for(var n,i=0;i<t.length;i++)n=t[i],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),ce=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ue=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},pe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],he=pe.slice(3),ge={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},fe=function(){function t(n,i){var r=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};le(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=oe(this.update.bind(this)),this.options=ue({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n&&n.jquery?n[0]:n,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(ue({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){r.options.modifiers[e]=ue({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ue({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return de(t,[{key:"update",value:function(){return A.call(this)}},{key:"destroy",value:function(){return L.call(this)}},{key:"enableEventListeners",value:function(){return R.call(this)}},{key:"disableEventListeners",value:function(){return z.call(this)}}]),t}();return fe.Utils=("undefined"==typeof window?t:window).PopperUtils,fe.placements=pe,fe.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets,o=r.reference,a=r.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",d=s?"width":"height",c={start:ce({},l,o[l]),end:ce({},l,o[l]+o[d]-a[d])};e.offsets.popper=ue({},a,c[i])}return e}},offset:{order:200,enabled:!0,fn:K,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||a(e.instance.popper);e.instance.reference===n&&(n=a(n));var i=N("transform"),r=e.instance.popper.style,o=r.top,s=r.left,l=r[i];r.top="",r.left="",r[i]="";var d=j(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=o,r.left=s,r[i]=l,t.boundaries=d;var c=t.priority,u=e.offsets.popper,p={primary:function(e){var n=u[e];return u[e]<d[e]&&!t.escapeWithReference&&(n=Z(u[e],d[e])),ce({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=u[n];return u[e]>d[e]&&!t.escapeWithReference&&(i=Q(u[n],d[e]-("right"===e?u.width:u.height))),ce({},n,i)}};return c.forEach(function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";u=ue({},u,p[t](e))}),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],o=J,a=-1!==["top","bottom"].indexOf(r),s=a?"right":"bottom",l=a?"left":"top",d=a?"width":"height";return n[s]<o(i[l])&&(e.offsets.popper[l]=o(i[l])-n[d]),n[l]>o(i[s])&&(e.offsets.popper[l]=o(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var i;if(!q(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],a=e.offsets,s=a.popper,l=a.reference,d=-1!==["left","right"].indexOf(o),c=d?"height":"width",u=d?"Top":"Left",p=u.toLowerCase(),h=d?"left":"top",g=d?"bottom":"right",m=E(r)[c];l[g]-m<s[p]&&(e.offsets.popper[p]-=s[p]-(l[g]-m)),l[p]+m>s[g]&&(e.offsets.popper[p]+=l[p]+m-s[g]),e.offsets.popper=f(e.offsets.popper);var v=l[p]+l[c]/2-m/2,y=n(e.instance.popper),b=parseFloat(y["margin"+u],10),w=parseFloat(y["border"+u+"Width"],10),j=v-e.offsets.popper[p]-b-w;return j=Z(Q(s[c]-m,j),0),e.arrowElement=r,e.offsets.arrow=(i={},ce(i,p,X(j)),ce(i,h,""),i),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(O(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=j(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],r=T(i),o=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case ge.FLIP:a=[i,r];break;case ge.CLOCKWISE:a=V(i);break;case ge.COUNTERCLOCKWISE:a=V(i,!0);break;default:a=t.behavior}return a.forEach(function(s,l){if(i!==s||a.length===l+1)return e;i=e.placement.split("-")[0],r=T(i);var d=e.offsets.popper,c=e.offsets.reference,u=J,p="left"===i&&u(d.right)>u(c.left)||"right"===i&&u(d.left)<u(c.right)||"top"===i&&u(d.bottom)>u(c.top)||"bottom"===i&&u(d.top)<u(c.bottom),h=u(d.left)<u(n.left),g=u(d.right)>u(n.right),f=u(d.top)<u(n.top),m=u(d.bottom)>u(n.bottom),v="left"===i&&h||"right"===i&&g||"top"===i&&f||"bottom"===i&&m,y=-1!==["top","bottom"].indexOf(i),b=!!t.flipVariations&&(y&&"start"===o&&h||y&&"end"===o&&g||!y&&"start"===o&&f||!y&&"end"===o&&m);(p||v||b)&&(e.flipped=!0,(p||v)&&(i=a[l+1]),b&&(o=U(o)),e.placement=i+(o?"-"+o:""),e.offsets.popper=ue({},e.offsets.popper,k(e.instance.popper,e.offsets.reference,e.placement)),e=I(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,o=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=o[n]-(s?r[a?"width":"height"]:0),e.placement=T(t),e.offsets.popper=f(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=D(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,r=e.offsets.popper,o=D(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,l,d=void 0===o?t.gpuAcceleration:o,c=a(e.instance.popper),u=m(c),p={position:r.position},h={left:J(r.left),top:X(r.top),bottom:X(r.bottom),right:J(r.right)},g="bottom"===n?"top":"bottom",f="right"===i?"left":"right",v=N("transform");if(l="bottom"==g?-u.height+h.bottom:h.top,s="right"==f?-u.width+h.right:h.left,d&&v)p[v]="translate3d("+s+"px, "+l+"px, 0)",p[g]=0,p[f]=0,p.willChange="transform";else{var y="bottom"==g?-1:1,b="right"==f?-1:1;p[g]=l*y,p[f]=s*b,p.willChange=g+", "+f}var w={"x-placement":e.placement};return e.attributes=ue({},w,e.attributes),e.styles=ue({},p,e.styles),e.arrowStyles=ue({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return W(e.instance.popper,e.styles),F(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&W(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,r){var o=x(r,t,e,n.positionFixed),a=C(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),W(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},fe})}).call(t,n("../node_modules/webpack/buildin/global.js"))},/***/
"../node_modules/webpack/buildin/global.js":/***/
function(e,t){var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"==typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=n},/***/
"../node_modules/webpack/buildin/module.js":/***/
function(e,t){e.exports=function(e){
// module.parent = undefined by default
return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},/***/
"./assets/js/index.js":/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var i=n("../node_modules/gijgo/js/gijgo.js"),r=(t(i),n("../node_modules/popper.js/dist/umd/popper.min.js")),o=(t(r),n("../node_modules/bootstrap/dist/js/bootstrap.js")),a=(t(o),n("../node_modules/owl.carousel/dist/owl.carousel.js")),s=(t(a),n("../node_modules/jrespond/js/jRespond.js"));t(s);n("./assets/sass/main.scss");var l=n("./assets/js/script.js"),d=(t(l),n("./assets/js/reservation.js")),c=t(d);
// make Isotope a jQuery plugin
n("../node_modules/jquery-bridget/jquery-bridget.js")("isotope",n("../node_modules/isotope-layout/js/isotope.js"),e),
// jQueryBridget( 'ScrollReveal', ScrollReveal, $ )
// jQueryBridget( 'jRespond', jRespond, $ )
// jQueryBridget( 'Holder', Holder, $ )
// console.log($.fn.ScrollReveal);
// var riveted = require("exports?riveted!riveted")
// Default scripts
// var Script = require("exports?script!script")
// var sdf = require("imports-loader?$=script!script.js")
// console.log(sdf);
// Script.APPSCRIPT
c.default.reservation}).call(t,n("../node_modules/jquery/dist/jquery.js"))},/***/
"./assets/js/reservation.js":/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){/**
 * Reservation form
 */
!function(){
// Methods
function t(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,i=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),i+"-"+n+"-"+t}function n(t){e.ajax({url:u,type:"POST",data:t.serialize(),dataType:"json",beforeSend:function(e){
// Disable submit button
c.prop("disabled",!0),
// Clear error messages
i.find(".is-invalid").removeClass("is-invalid"),i.find(".invalid-feedback").html("")},success:function(t,n){function u(e,t){e.addClass("is-invalid"),e.next(".invalid-feedback").html(t)}
// Enable submit button
c.prop("disabled",!1),t.error&&(
// Proceed error messages
t.error.name&&u(r,t.error.name),t.error.phone&&u(o,t.error.phone),t.error.email&&u(a,t.error.email),t.error.people&&u(s,t.error.people),t.error.date&&u(l,t.error.date),t.error.time&&u(d,t.error.time)),
// Proceed success message
t.success&&(
// Show alert message
e(document).trigger("touche.alert.show",["success",t.success]),
// Reset form fields
i[0].reset())}})}
// Variables
var i=e("#reservation__form"),r=e("#reservation__form__name"),o=e("#reservation__form__phone"),a=e("#reservation__form__email"),s=e("#reservation__form__people"),l=e("#reservation__form__date"),d=e("#reservation__form__time"),c=i.find('[type="submit"]'),u="assets/plugins/reservation/reservation.php";
// Set current date
!function(){var e=t();l.val(e)}(),
// Process form
i.on("submit",function(){return n(e(this)),!1})}()}).call(t,n("../node_modules/jquery/dist/jquery.js"))},/***/
"./assets/js/script.js":/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function t(e,t,n){var i;return function(){var r=this,o=arguments;clearTimeout(i),i=setTimeout(function(){i=null,n||e.apply(r,o)},t),n&&!i&&e.apply(r,o)}}
// Default application script
var n=n||{},i=!0;!function(e){n.initialize={
// Initialization
init:function(){n.initialize.responsiveClasses(),n.initialize.searchOverlay(),n.initialize.datePicker(),n.initialize.isotopeInit(),n.initialize.owlCarousels(),n.initialize.clickEvents(),n.initialize.scrollReveals(),n.initialize.scrollToEl(),/*! Scroll to Top !*/
n.initialize.scrollTopInit()},
// Responsive Classes -- added automatically in the body tag
responsiveClasses:function(){if("undefined"==typeof jRespond)return console.log("responsiveClasses: jQuery jRespond not Defined."),!0;jRespond([{label:"smallest",enter:0,exit:479},{label:"handheld",enter:480,exit:767},{label:"tablet",enter:768,exit:991},{label:"laptop",enter:992,exit:1199},{label:"desktop",enter:1200,exit:1e4}]).addFunc([{breakpoint:"desktop",enter:function(){o.addClass("device-lg")},exit:function(){o.removeClass("device-lg")}},{breakpoint:"laptop",enter:function(){o.addClass("device-md")},exit:function(){o.removeClass("device-md")}},{breakpoint:"tablet",enter:function(){o.addClass("device-sm")},exit:function(){o.removeClass("device-sm")}},{breakpoint:"handheld",enter:function(){o.addClass("device-xs")},exit:function(){o.removeClass("device-xs")}},{breakpoint:"smallest",enter:function(){o.addClass("device-xxs")},exit:function(){o.removeClass("device-xxs")}}])},
// Search Overlay popup
searchOverlay:function(){e("#trigger-overlay").on("click",function(){e("#overlay-search").toggleClass("open"),e("#form-search input[type=text]").focus()}),e(".overlay-close").on("click",function(){e("#overlay-search").removeClass("open")})},datePicker:function(){
// console.log($.fn.datepicker);
void 0!==e.fn.datepicker&&
// $('#datepicker-alt').datepicker({
// 	uiLibrary: 'bootstrap4',
// 	format: 'dd/mm/yyyy'
// });
// $('#datepicker-alt').datetimepicker({ footer: true, modal: true });
// $('#datepicker-alt').datetimepicker({ footer: true, modal: true });
e("#datepicker-alt").datetimepicker({uiLibrary:"bootstrap4",datepicker:{header:!1,showOtherMonths:!0,calendarWeeks:!0}})},isotopeInit:function(){/*
   var iso = new Isotope( '.grid', {
   itemSelector: '.grid-item',
   // layoutMode: 'fitRows'//,
   layoutMode: 'fitRows'//,
   });
   */
/*
   var iso = new Isotope( '.card-product', {
   itemSelector: '.grid-item',
   layoutMode: 'fitRows'
   });
   */
e(".btn-filters").on("click","button.btn-filter",function(){var t=e(this).attr("data-filter");new Isotope(".card-product",{
// options
itemSelector:".grid-item",
// layoutMode: 'fitRows',
filter:t})})},owlCarousels:function(){
// Index testimonial carousel
e(".owl-carousel.testimonial").owlCarousel({items:1,loop:!0,margin:10,autoplay:!0,responsive:{0:{items:1},600:{items:1}}}),
// Custom detail garage
e(".custom-carousel.owl-carousel").owlCarousel({margin:10,loop:!0,responsive:{0:{items:1},600:{items:2},960:{items:4},1200:{items:4}}}),
// Index half slider
e(".half-slider-carousel.owl-carousel").owlCarousel({items:1,loop:!0})},clickEvents:function(){var t=e(".img-ingredient__hold"),n=e(".img-ingredient__body");t.each(function(i){var r=t.find("a");e(this).find("a").on("click",function(){
//ahref.find('.img-ingredient__img').removeClass('active');
r.removeClass("active"),
//$(this).find('.img-ingredient__img').addClass('active');
e(this).addClass("active"),n.hide("fast").removeClass("d-block").addClass("d-none"),e("."+e(this).attr("rel")).show("fast").removeClass("d-none").addClass("d-block")})}).find("a").eq(0).click(),
// Close catering form
e(".mfp-close, .js-popup-closebtn").on("click",function(t){
// $('.mfp-animate.mfp-ready').css({'opacity':0});
e(".mfp-animate").removeClass("mfp-ready")}),
// Form booking catering
e(".book-catering").on("click",function(t){e(".mfp-animate").addClass("mfp-ready")}),
// Set active class from navbar-top click ahref
e(".nav-link.scrollTo").on("click",function(){e(".nav-link.scrollTo").removeClass("active"),e(this).addClass("active"),
// Click to close dropdown collapse on navbar-top
e(".navbar-collapse.collapse").hasClass("show")&&
// $('.navbar-collapse.collapse').removeClass('show');
e(".navbar-toggler").click()})},scrollReveals:function(){
// Initial scrollreveal
window.sr=ScrollReveal(),sr.reveal(".copy-text-head",{reset:!0,viewFactor:.6,origin:"top",scale:"1",
// opacity:'1',
duration:"1000",delay:"200",distance:"12px"},"100")},scrollToEl:function(){e(".scrollTo").on("click",function(){if(e(this).attr("href").split("#")[1]){var t=e(this).attr("href").match(/(#[a-z0-9][a-z0-9\-_]*)/gi)[0];e(t).offset()&&e("html, body").animate({scrollTop:e(t).offset().top-10},1600,"swing")}})},scrollTopInit:function(){
// declare variable
var t=e(".scrollTop");e(window).scroll(function(){
// if user scrolls down - show scroll to top button
e(this).scrollTop()>200?e(t).css({opacity:"1","z-index":"1"}):e(t).css({opacity:"0","z-index":"-1"})}),// scroll END
//Click event to scroll to top
e(t).click(function(){return e("html, body").animate({scrollTop:0},1e3),!1})}},n.documentOnReady={init:function(){n.initialize.init()},windowscroll:function(){}},n.documentOnLoad={init:function(){}},n.isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return PROPARC.isMobile.Android()||PROPARC.isMobile.BlackBerry()||PROPARC.isMobile.iOS()||PROPARC.isMobile.Opera()||PROPARC.isMobile.Windows()}},n.documentOnResize={init:function(){a=r.width()}},n.documentOnScroll={init:function(){n.documentOnScroll.checkNavbarScroll(),n.documentOnScroll.checkScrollForTransparentNavbar()},checkNavbarScroll:function(){var t=e(window).scrollTop();t>=100?e("section").each(function(n){e(this).position().top<=t-20&&(e(".nav-link.scrollTo").removeClass("active"),e(".nav-link.scrollTo").eq(n).addClass("active"))}):(e(".nav-link.scrollTo.active").removeClass("active"),e(".nav-link.scrollTo:first").addClass("active"))},
// checkNavbarScroll: debounce(function() {
// 	$.each($('section'),function(){
// 		console.log($(this).offset().top);
// 	});
// },10),
// checkNavbarScroll:function() {
// $('section').each(function(item,obj){
// console.log(Math.ceil($(obj).offset().top) +'----');
// console.log($(obj).attr('id') +'++++');
// console.log($('.navbar-default').offset());
// if(Math.ceil($('section').offset().top) < $('.navbar-default').offset().top){
// console.log($('a[href="#'+ $('section').attr('id') +'"]').html());
// $('a[href="#'+ $('section').attr('id') +'"]').addClass('active');
// }
// $('#collapsibleNavId li a').each(function(i,item){
// console.log($(item).html());
// });
// console.log($(this).offset().top);
// });
// },
checkScrollForTransparentNavbar:t(function(){var t=e(".navbar[color-on-scroll]"),n=t.attr("color-on-scroll")||250;e(document).scrollTop()>n?i&&(i=!1,e(".navbar[color-on-scroll]").removeClass("navbar-transparent")):i||(i=!0,e(".navbar[color-on-scroll]").addClass("navbar-transparent"))},10)};var r=e(window),o=e("body"),
//$wrapper = $('#wrapper'),
//$header = $('#header'),
//$headerWrap = $('#header-wrap'),
//$content = $('#content'),
//$footer = $('#footer'),
a=r.width();//,
//$goToTopEl = $('#gotoTop');
e(document).ready(n.documentOnReady.init),
// $window.load( PROPARC.documentOnLoad.init );
// $window.on( 'resize', APPSCRIPT.documentOnResize.init );
r.on("scroll",n.documentOnScroll.init)}(e)}).call(t,n("../node_modules/jquery/dist/jquery.js"))},/***/
"./assets/sass/main.scss":/***/
function(e,t){}},["./assets/js/index.js"]);