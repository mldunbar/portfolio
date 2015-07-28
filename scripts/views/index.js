import HeaderView from './header';

export default Backbone.View.extend({

  template: JST['index'],

  initialize: function(){
    this.render();
    this.headerView = new HeaderView();
  },

  render: function(options) {
    this.$el.prepend(this.headerView.el);
    this.$el.html(this.template);
  },

});
