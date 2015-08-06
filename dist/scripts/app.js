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