Personal.Collections.CatalogoDetalles = Backbone.Collection.extend({
  url : 'http://localhost:8000/catalogos_detalle/1', 
  model: Personal.Models.catalogoDetalle,
  Filtrar: function(filters){
    // reset the collection with the results
    var results = this.where(filters);
    this.reset(results);
  }
});


var Messages = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.url = 'http://url/messages/' + options.id;
  },
  model: Message,
});
