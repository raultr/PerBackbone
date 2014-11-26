Personal.Views.CatalogoDetalles = Backbone.View.extend({
  events : {
     "click .nuevo":          "createArticle",
     // "input filas" : "createArticle",
  },

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
  },

  createArticle : function (e) {
    e.preventDefault();
   // alert("nuevo"); 
  
    var id ="0";
    var udc_catalogo ="0000";
    var num_dcatalogo ="3";
    var descripcion1 = $('input[name=descripcion1]').val();
    var descripcion2 = $('input[name=descripcion2]').val();
    var monto1 = $('input[name=monto1]').val();
    var monto2 = $('input[name=monto2]').val();
    var udc_default="";
    var catalogos="1";

     var data = {
        "id" : id,
        "udc_catalogo" : udc_catalogo,
        "num_dcatalogo" : num_dcatalogo,
        "descripcion1" : descripcion1,
        "descripcion2" : descripcion2,
        "monto1" :  monto1,
        "monto2" : monto2,
        "udc_default": udc_default  ,
        "catalogos" :catalogos
    };
   var model = new Personal.Models.catalogoDetalle(data);
   model.save();
  }
});
