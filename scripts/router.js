import IndexView from './views/index';
import ExperienceView from './views/experience';
import ContactView from './views/contact';
import HeaderView from './views/header';

var Router = Backbone.Router.extend({

  routes: {
    '' : 'index',
    'experience' : 'experience',
    'contact' : 'contact'
  },

  initialize: function(){

  },

  index: function(){
    this.showView(new IndexView());
    var headerView = new HeaderView();
    $('#app').prepend(headerView.el);
  },

  experience: function(){
    this.showView(new ExperienceView());
    var headerView = new HeaderView();
    $('#app').prepend(headerView.el);
  },

  contact: function(){
    this.showView(new ContactView());
    var headerView = new HeaderView();
    $('#app').prepend(headerView.el);
  },

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').append(view.el);
    return view;
  }

});

var router = new Router();
export default router;
