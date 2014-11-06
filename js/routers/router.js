Personal.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "catalogo": "catalogos"
  },

initialize: function () {
    this.current = {};
    this.jsonData = {};
    this.catalogos = new Personal.Collections.Catalogos();
    this.catalogoslist = new Personal.Views.Catalogos({ collection: this.catalogos });
     // this.catalogoslist.
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
              self.addCatalogo(cat);
          });
        });
  },

  catalogos: function () {
    console.log("Estas en la lista de catalogos");
  },

  addCatalogo: function (cat) {
      this.catalogos.add(new Personal.Models.Catalogo({
        clave:cat.clave,
        nombre:cat.nombre,
        imagen:cat.imagen,
        orden:cat.orden

      }));
      console.log(this.catalogos.length);
     }
});
