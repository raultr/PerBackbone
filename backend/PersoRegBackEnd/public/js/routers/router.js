Personal.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "Catalogos": "Catalogos",
    "Personal": "personal",
    "Herramientas": "herramientas",
    "Catalogos/:clave": "CatalogoDetalle"
  },

initialize: function () {
    location.hash = '';//Para que al refrescar la pagina ponga #
    this.current = {};
    this.jsonData = {};
    this.Modulos = new Personal.Collections.Modulos();
    this.ModulosVista = new Personal.Views.Modulos({ collection: this.Modulos });
    
    this.Catalogos = new Personal.Collections.Catalogos();
    this.CatalogosVista = new Personal.Views.Catalogos({collection: this.Catalogos});
    this.CatalogoDetalles = new Personal.Collections.CatalogoDetalles();
    this.CatalogoDetalleVista = new Personal.Views.CatalogoDetalles({collection: this.CatalogoDetalles});
    Backbone.history.start();
  },

  index: function () {
    this.CatalogoDetalleVista.Ocultar();
    this.Modulos.reset();
    this.fetchData('/modulos.json',this.addModulo);
    console.log("Estas en el indice");
  },


  Catalogos: function () {
    this.CatalogosVista.Mostrar();
    this.CatalogosVista.limpiarTodo();
    this.Catalogos.fetch({merge: true});
    //this.fetchData('/catalogos.json',this.addCatalogo);
    console.log("Estas en la lista de Catalogos");
  },


   CatalogoDetalle: function (clave) {
      this.CatalogoDetalleVista.Mostrar();
      this.CatalogoDetalles.remove( this.CatalogoDetalles.models );
      this.fetchData('/catalogos_detalle.json',this.addCatalogoDetalle,clave);
     
     // this.CatalogoDetalle =this.CatalogoDetalles.where( {clave: clave});
      console.info("Estas en el detalle del catalogo " + clave );
    },

  personal: function () {
    this.CatalogoDetalleVista.Ocultar();
    this.CatalogosVista.Ocultar();
    console.log("Estas en la lista de personal");
  },

  herramientas: function () {
    this.CatalogoDetalleVista.Ocultar();
    this.CatalogosVista.Ocultar();
    console.log("Estas en la lista de herramientas");
  },



  addModulo: function (mod) {
        this.Modulos.add(new Personal.Models.modulo({
        clave:mod.clave,
        nombre:mod.nombre,
        imagen:mod.imagen,
        orden:mod.orden
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
  addCatalogoDetalle: function (cdet,clave) {
        console.log("agregando catalogo " + cdet.clave);
        console.log("*****!!" + clave);
        if(clave===cdet.clave_padre){
        this.CatalogoDetalles.add( 
          new Personal.Models.catalogoDetalle({
          clave:cdet.clave,
          clave_padre:cdet.clave_padre,
          nombre_padre:cdet.nombre_padre,
          consecutivo:cdet.consecutivo,
          descripcion1:cdet.descripcion1,
          descripcion2:cdet.descripcion2,
          monto1:cdet.monto1,
          monto2:cdet.monto2
        }),{merge:true});
        console.log(this.CatalogoDetalle.length);
      }
    },

//***** FUNCIONES GENERICAS ****************
  fetchData:function(ruta_json,funcion_llenado,clave){
      var self = this;
      var val = clave;

      $.ajax({
      dataType: 'json',
      data: "",
      url: ruta_json,
      success: function(datos){
         for(var index in datos){
               //calls nos permite llamar a una funcion pasandole el this que la ejecutara
               funcion_llenado.call(self,datos[index],val);
         }
        },
       error: function() { alert("Error leyendo fichero jsonP"); }
    });
    }

});

