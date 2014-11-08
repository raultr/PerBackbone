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
    this.Catalogos = new Personal.Collections.Catalogos();
    this.CatalogosVista = new Personal.Views.Catalogos({collection: this.Catalogos});
    Backbone.history.start();
  },

  index: function () {
    this.Modulos.reset();
    this.fetchData();
    console.log("Estas en el indice");
  },


  fetchData:function(){
      var self = this;
      $.ajax({
      dataType: 'json',
      data: "",
      url: '/modulos.json',
      success: function(datos) {
              self.llenarDatos(datos);
                },

       error: function() { alert("Error leyendo fichero jsonP"); }
    });
    },

    llenarDatos: function(datos)
    {
       this.ModulosVista.noEscuchar();
      for(var index in datos){
         this.addModulo(datos[index]);
       }     
        this.ModulosVista.Escuchar();
        this.Modulos.sort();
        this.Modulos.sort();
          
    },

  Catalogos: function () {
    this.fetchDataCatalogos();
    console.log("Estas en la lista de Catalogos");
  },


  fetchDataCatalogos:function(){
      var self = this;
      $.ajax({
      dataType: 'json',
      data: "",
      url: '/catalogos.json',
      success: function(datos) {
              self.llenarDatosCatalogo(datos);
                },

       error: function() { alert("Error leyendo fichero jsonP"); }
    });
    },

 llenarDatosCatalogo: function(datos)
    {
      for(var index in datos){
         this.addCatalogo(datos[index]);
      }     
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
     },

    addCatalogo: function (cat) {
      this.Catalogos.add(new Personal.Models.catalogo({
        clave:cat.clave,
        nombre:cat.nombre,
        imagen:cat.imagen
      }),{merge:true});
      console.log(this.Catalogos.length);
     }
});
