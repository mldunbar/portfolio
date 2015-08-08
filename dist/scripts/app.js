require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();
  
});

require.register("router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsIndex = require('./views/index');

var _viewsIndex2 = _interopRequireDefault(_viewsIndex);

var _viewsExperience = require('./views/experience');

var _viewsExperience2 = _interopRequireDefault(_viewsExperience);

var _viewsContact = require('./views/contact');

var _viewsContact2 = _interopRequireDefault(_viewsContact);

var _viewsHeader = require('./views/header');

var _viewsHeader2 = _interopRequireDefault(_viewsHeader);

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'experience': 'experience',
    'contact': 'contact'
  },

  initialize: function initialize() {},

  index: function index() {
    this.showView(new _viewsIndex2['default']());
    this.showHeader(new _viewsHeader2['default']());
  },

  experience: function experience() {
    this.showView(new _viewsExperience2['default']());
    this.showHeader(new _viewsHeader2['default']());
  },

  contact: function contact() {
    this.showView(new _viewsContact2['default']());
    this.showHeader(new _viewsHeader2['default']());
  },

  showView: function showView(view) {
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').append(view.el);
    return view;
  },

  showHeader: function showHeader(view) {
    if (this.headerView) this.headerView.remove();
    this.headerView = view;
    $('#app').prepend(view.el);
    return view;
  }

});

var router = new Router();
exports['default'] = router;
module.exports = exports['default'];
  
});

require.register("wow.min", function(exports, require, module){
  /*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */"use strict";

(function () {
  var a,
      b,
      c,
      d,
      e,
      f = function f(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  },
      g = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;return -1;
  };b = (function () {
    function a() {}return (a.prototype.extend = function (a, b) {
      var c, d;for (c in b) d = b[c], null == a[c] && (a[c] = d);return a;
    }, a.prototype.isMobile = function (a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
    }, a.prototype.createEvent = function (a, b, c, d) {
      var e;return (null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e);
    }, a.prototype.emitEvent = function (a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
    }, a.prototype.addEvent = function (a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
    }, a.prototype.removeEvent = function (a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
    }, a.prototype.innerHeight = function () {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }, a);
  })(), c = this.WeakMap || this.MozWeakMap || (c = (function () {
    function a() {
      this.keys = [], this.values = [];
    }return (a.prototype.get = function (a) {
      var b, c, d, e, f;for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if ((c = f[b], c === a)) return this.values[b];
    }, a.prototype.set = function (a, b) {
      var c, d, e, f, g;for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if ((d = g[c], d === a)) return void (this.values[c] = b);return (this.keys.push(a), this.values.push(b));
    }, a);
  })()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = (function () {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }return (a.notSupported = !0, a.prototype.observe = function () {}, a);
  })()), d = this.getComputedStyle || function (a) {
    return (this.getPropertyValue = function (b) {
      var c;return ("float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
        return b.toUpperCase();
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null);
    }, this);
  }, e = /(\-([a-z]){1})/g, this.WOW = (function () {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass);
    }return (e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null }, e.prototype.init = function () {
      var a;return (this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []);
    }, e.prototype.start = function () {
      var b, c, d, e;if ((this.stopped = !1, this.boxes = (function () {
        var a, c, d, e;for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);return e;
      }).call(this), this.all = (function () {
        var a, c, d, e;for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);return e;
      }).call(this), this.boxes.length)) if (this.disabled()) this.resetStyle();else for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);return (this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a((function (a) {
        return function (b) {
          var c, d, e, f, g;for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push((function () {
            var a, b, c, d;for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));return d;
          }).call(a));return g;
        };
      })(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0);
    }, e.prototype.stop = function () {
      return (this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0);
    }, e.prototype.sync = function () {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }, e.prototype.doSync = function (a) {
      var b, c, d, e, f;if ((null == a && (a = this.element), 1 === a.nodeType)) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);return f;
      }
    }, e.prototype.show = function (a) {
      return (this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a);
    }, e.prototype.applyStyle = function (a, b) {
      var c, d, e;return (d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate((function (f) {
        return function () {
          return f.customStyle(a, b, d, c, e);
        };
      })(this)));
    }, e.prototype.animate = (function () {
      return "requestAnimationFrame" in window ? function (a) {
        return window.requestAnimationFrame(a);
      } : function (a) {
        return a();
      };
    })(), e.prototype.resetStyle = function () {
      var a, b, c, d, e;for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");return e;
    }, e.prototype.resetAnimation = function (a) {
      var b;return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0;
    }, e.prototype.customStyle = function (a, b, c, d, e) {
      return (b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a);
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
      var c, d, e, f;d = [];for (c in b) e = b[c], a["" + c] = e, d.push((function () {
        var b, d, g, h;for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);return h;
      }).call(this));return d;
    }, e.prototype.vendorCSS = function (a, b) {
      var c, e, f, g, h, i;for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);return g;
    }, e.prototype.animationName = function (a) {
      var b;try {
        b = this.vendorCSS(a, "animation-name").cssText;
      } catch (c) {
        b = d(a).getPropertyValue("animation-name");
      }return "none" === b ? "" : b;
    }, e.prototype.cacheAnimationName = function (a) {
      return this.animationNameCache.set(a, this.animationName(a));
    }, e.prototype.cachedAnimationName = function (a) {
      return this.animationNameCache.get(a);
    }, e.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    }, e.prototype.scrollCallback = function () {
      var a;return !this.scrolled || (this.scrolled = !1, this.boxes = (function () {
        var b, c, d, e;for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));return e;
      }).call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, e.prototype.offsetTop = function (a) {
      for (var b; void 0 === a.offsetTop;) a = a.parentNode;for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;return b;
    }, e.prototype.isVisible = function (a) {
      var b, c, d, e, f;return (c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f);
    }, e.prototype.util = function () {
      return null != this._util ? this._util : this._util = new b();
    }, e.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, e);
  })();
}).call(undefined);
  
});

require.register("views/contact", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

exports['default'] = Backbone.View.extend({

  template: JST['contact'],

  events: {
    'click .index-link .contact-link .resume-link .github-link .experience-link': 'remove'
  },

  initialize: function initialize() {
    this.render();
    this.headerView = new _header2['default']();
  },

  render: function render(options) {
    this.$el.prepend(this.headerView);
    this.$el.append(this.template);
  }

});
module.exports = exports['default'];
  
});

require.register("views/experience", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

exports['default'] = Backbone.View.extend({

  template: JST['experience'],

  events: {
    'click .index-link .contact-link .resume-link .github-link .experience-link': 'remove'
  },

  initialize: function initialize() {
    this.render();
    this.headerView = new _header2['default']();
  },

  render: function render(options) {
    this.$el.prepend(this.headerView);
    this.$el.append(this.template);
  }

});
module.exports = exports['default'];
  
});

require.register("views/header", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({

  template: JST['header'],

  initialize: function initialize() {
    this.render();
  },

  render: function render(options) {
    this.$el.html(this.template);
  }

});
module.exports = exports['default'];
  
});

require.register("views/index", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

exports['default'] = Backbone.View.extend({

  template: JST['index'],

  initialize: function initialize() {
    this.render();
    this.headerView = new _header2['default']();
  },

  render: function render(options) {
    this.$el.prepend(this.headerView);
    this.$el.append(this.template);
  }

});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map