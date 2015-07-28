export default Backbone.View.extend({

  template: JST['header'],

  initialize: function(){
    this.render();
  },

  render: function(options) {
    this.$el.html(this.template);
  },

});
