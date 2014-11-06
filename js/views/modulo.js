Personal.Views.modulo = Backbone.View.extend({

  tagName: 'li',
  className: 'lista',

  template: Handlebars.compile($("#modulos-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
  },

  render: function () {
    var modulo = this.model.toJSON();
    var html = this.template(modulo);
    this.$el.html(html);
    return this;
  },

});

