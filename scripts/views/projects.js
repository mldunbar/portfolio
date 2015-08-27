import HeaderView from './header';

export default Backbone.View.extend({

  template: JST['projects'],

  initialize: function(){
    this.render();
    this.headerView = new HeaderView();
  },

  render: function(options) {
    this.$el.prepend(this.headerView);
    this.$el.append(this.template);
  }

});
