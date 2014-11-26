Personal.Views.Catalogos = Backbone.View.extend({
  el: $('.lista_catalogo'),

  template: Handlebars.compile($("#catalogos-template").html()),

  initialize: function () {
    this.listenTo(this.collection, "add", this.addOne, this);
  //  this.listenTo(this.collection, "reset", this.limpiarTodo, this);
    
  },


  render: function () {
    limpiarTodo();
    this.collection.forEach(this.addOne, this);
  },

  addOne: function (cat) {
    console.log("Se agrego un nuevo elemento");
    var catalogoView = new Personal.Views.catalogo({ model: cat }); 
    this.$el.append(catalogoView.render().el);
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