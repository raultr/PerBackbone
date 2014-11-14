Personal.Views.CatalogoDetalles = Backbone.View.extend({
  el: $('.catalogosDetalle'),

  template: Handlebars.compile($("#catalogoDetalle-template").html()),

  initialize: function () {
    this.listenTo(this.collection, "add", this.addOne, this);
  },


  render: function () {
    limpiarTodo();
    this.collection.forEach(this.addOne, this);
  },

  addOne: function (det) {
    console.log("Se agrego un nuevo detalle de catalogo");
    var catalogoDetalleView = new Personal.Views.catalogoDetalle({ model: det }); 
    this.$el.append(catalogoDetalleView.render().el);
  },
  limpiar: function(){
     console.log("limpiando");
  },

  limpiarTodo:function(){
    this.$el.empty();
  },
  Mostrar: function () {
       
      this.$el.show();
  },
  Ocultar: function(){
      this.$el.slideUp();
  }
});
