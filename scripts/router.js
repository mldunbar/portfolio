import ProjectsView from './views/projects';
import IndexView from './views/index';
import ExperienceView from './views/experience';
import ContactView from './views/contact';
import HeaderView from './views/header';

var Router = Backbone.Router.extend({

  routes: {
    '' : 'index',
    'experience' : 'experience',
    'contact' : 'contact',
    'projects' : 'projects',
  },

  initialize: function(){

  },

  index: function(){
    this.showView(new IndexView());
    this.showHeader(new HeaderView());
  },

  experience: function(){
    this.showView(new ExperienceView());
    this.showHeader(new HeaderView());
  },

  projects: function(){
    this.showView(new ProjectsView());
    this.showHeader(new HeaderView());
  },

  contact: function(){
    this.showView(new ContactView());
    this.showHeader(new HeaderView());
  },

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').append(view.el);
    return view;
  },

  showHeader: function(view) {
    if(this.headerView) this.headerView.remove();
    this.headerView = view;
    $('#app').prepend(view.el);
    return view;
  }

});

var router = new Router();
export default router;
