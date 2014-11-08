Personal.Views.catalogo = Backbone.View.extend({

  tagName: 'li',
  className: 'lista_catalogo',

  template: Handlebars.compile($("#catalogos-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
  },

  render: function () {
    console.log("el modelo cambio")
    var catalogo = this.model.toJSON();
    var html = this.template(catalogo);
    this.$el.html(html);
    return this;
  }

});
