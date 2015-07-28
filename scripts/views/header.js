export default Backbone.View.extend({

  template: JST['header'],

  initialize: function(){
    this.render();
  },

  render: function(options) {
    this.$el.html(this.template);
  },

  remove: function() {

    // COMPLETELY UNBIND THE VIEW
    this.undelegateEvents();

    this.$el.removeData().unbind();

    // Remove view from DOM
    this.remove();
    Backbone.View.prototype.remove.call(this);

}

});
