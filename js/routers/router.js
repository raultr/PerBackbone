Personal.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "Catalogos": "Catalogos",
    "Personal": "personal",
    "Herramientas": "herramientas",
    
    "modulo/:nombre": "modulo_det"
  },

initialize: function () {
    this.current = {};
    this.jsonData = {};
    this.Modulos = new Personal.Collections.Modulos();
    this.ModulosVista = new Personal.Views.Modulos({ collection: this.Modulos });
    Backbone.history.start();
  },

  index: function () {
    this.fetchData();
    
    console.log("Estas en el indice");
  },

  fetchData: function () {
    var self = this;
    // Load Data
    return $.getJSON('modulos.json').then(function (data) {
          $.each(data, function(i,cat){
              console.log(i);
              console.log(cat);
              self.addModulo(cat);
          });
        });
  },

  Catalogos: function () {
    console.log("Estas en la lista de Catalogos");
  },

  personal: function () {
    console.log("Estas en la lista de personal");
  },

  herramientas: function () {
    console.log("Estas en la lista de herramientas");
  },


  modulo_det: function () {
    console.log("Estas en el detalle del modulo");
  },

  addModulo: function (cat) {
      this.Modulos.add(new Personal.Models.modulo({
        clave:cat.clave,
        nombre:cat.nombre,
        imagen:cat.imagen,
        orden:cat.orden
      }));
      console.log(this.Modulos.length);
     }
});
