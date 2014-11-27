Personal.Collections.CatalogoDetalles = Backbone.Collection.extend({
  id : function(id){
      this.id  = id;
  },
  url : function(){
   return 'http://localhost:8000/catalogos_detalle/' + this.id;
  },
  model: Personal.Models.catalogoDetalle,

  Filtrar: function(filters){
    // reset the collection with the results
    var results = this.where(filters);
    this.reset(results);
  }
});