Personal.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "catalogo": "catalogos"
  },

initialize: function () {
    this.current = {};
    this.jsonData = {};
    this.catalogos = new Personal.Collections.Catalogos();
  
    Backbone.history.start();
  },

   index: function () {
   	this.fetchData();
    console.log("Estas en el indice")
  },

   fetchData: function () {
    var self = this;
	debugger;
    // Load Data
    return $.getJSON('modulos.json').then(function (data) {
      self.jsonData = data;
      debugger;
      for (var name in data) {
        if (data.hasOwnProperty(name)) {
          self.addAlbum(name, data[name]);
        }
      }

    });
  },

   catalogos: function () {
    console.log("Estas en la lista de catalogos")
  }
})
