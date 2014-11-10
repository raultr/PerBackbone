Personal.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "Catalogos": "Catalogos",
    "Personal": "personal",
    "Herramientas": "herramientas",
    "Catalogos/:nombre": "CatalogoDetalle"
  },

initialize: function () {
    location.hash = '' //Para que al refrescar la pagina ponga #
    this.current = {};
    this.jsonData = {};
    this.Modulos = new Personal.Collections.Modulos();
    this.ModulosVista = new Personal.Views.Modulos({ collection: this.Modulos });
    this.Catalogos = new Personal.Collections.Catalogos();
    this.CatalogosVista = new Personal.Views.Catalogos({collection: this.Catalogos});
    Backbone.history.start();
  },

  index: function () {
    this.Modulos.reset();
    this.fetchData('/modulos.json',this.addModulo);
    console.log("Estas en el indice");
  },


  Catalogos: function () {
    this.fetchData('/catalogos.json',this.addCatalogo);
    console.log("Estas en la lista de Catalogos");
  },



  personal: function () {
    console.log("Estas en la lista de personal");
  },

  herramientas: function () {
    console.log("Estas en la lista de herramientas");
  },


  CatalogoDetalle: function () {
    console.log("Estas en el detalle del catalogo");
  },

  addModulo: function (cat) {
        this.Modulos.add(new Personal.Models.modulo({
        clave:cat.clave,
        nombre:cat.nombre,
        imagen:cat.imagen,
        orden:cat.orden
      }));
      console.log(this.Modulos.length);
     },

  addCatalogo: function (cat) {
      this.Catalogos.add(new Personal.Models.catalogo({
        clave:cat.clave,
        nombre:cat.nombre,
        imagen:cat.imagen
      }),{merge:true});
      console.log(this.Catalogos.length);
     },

//***** FUNCIONES GENERICAS ****************
  fetchData:function(ruta_json,funcion_llenado){
      var self = this;
      $.ajax({
      dataType: 'json',
      data: "",
      url: ruta_json,
      success: function(datos){
         for(var index in datos){
               //calls nos permite llamar a una funcion pasandole el this que la ejecutara
               funcion_llenado.call(self,datos[index]);
        }     
      },
       error: function() { alert("Error leyendo fichero jsonP"); }
    });
    }

});

