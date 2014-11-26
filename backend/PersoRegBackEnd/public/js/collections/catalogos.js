Personal.Collections.Catalogos = Backbone.Collection.extend({
  url: 'http://localhost:8000/catalogos/',
  model: Personal.Models.catalogo
});
