Personal.Collections.CatalogoDetalles = Backbone.Collection.extend({
  model: Personal.Models.catalogoDetalle,
  Filtrar: function(filters){
    // reset the collection with the results
    var results = this.where(filters);
    this.reset(results);
  }
});
