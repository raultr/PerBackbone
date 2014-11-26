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


var Messages = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.id = options.id;
  },
  url: function() {
    return '/messages/' + this.id;
  },
  model: Message,
});

var collection = new Messages([], { id: 2 });
collection.fetch();