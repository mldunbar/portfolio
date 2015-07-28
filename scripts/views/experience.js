import HeaderView from './header';

export default Backbone.View.extend({

  template: JST['experience'],

  events: {
    'click .index-link .contact-link .resume-link .github-link .experience-link' : 'remove'
  },

  initialize: function(){
    this.render();
    this.headerView = new HeaderView();
  },

  render: function(options) {
    this.$el.prepend(this.headerView);
    this.$el.append(this.template);
  }

});
