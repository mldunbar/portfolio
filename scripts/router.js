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

  header: function(){
    var view = new HeaderView();
    $('#app').html(view.el);
  },

  index: function(){
    var headerView = new HeaderView();
    $('#app').prepend(headerView.el);
    var view = new IndexView();
    $('#app').append(view.el);
  },

  experience: function(){
    var headerView = new HeaderView();
    $('#app').prepend(headerView.el);
    var view = new ExperienceView();
    $('#app').html(view.el);
  },

  contact: function(){
    var headerView = new HeaderView();
    $('#app').prepend(headerView.el);
    var view = new ContactView();
    $('#app').html(view.el);
  }

});

var router = new Router();
export default router;
