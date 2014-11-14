Personal.Views.catalogoDetalle = Backbone.View.extend({

  tagName: 'div',
  className: 'filas',

  template: Handlebars.compile($("#catalogoDetalle-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
    this.listenTo(this.model, "remove", this.destruir, this);
    //this.listenTo(this.model, "reset", this.eliminar, this);
  },

  render: function () {
    var catalogoDetalle = this.model.toJSON();
    var html = this.template(catalogoDetalle);
    this.$el.html(html);
    return this;
  },
   destruir:function(){
       this.$el.empty();
   },
  // eliminar:function(){
  //   debugger;
  // }
});
