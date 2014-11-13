Personal.Views.catalogoDetalle = Backbone.View.extend({

  tagName: 'div',
  className: 'filas',

  template: Handlebars.compile($("#catalogoDetalle-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
  },

  render: function () {
    var catalogoDetalle = this.model.toJSON();
    var html = this.template(catalogoDetalle);
    this.$el.html(html);
    return this;
  }

});
