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
    var view = new IndexView();
    $('#app').html(view.el);
  },

  experience: function(){

  },

  contact: function(){

  },

  header: function(){

  }

});
