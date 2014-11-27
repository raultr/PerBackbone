Personal.Collections.Catalogos = Backbone.Collection.extend({
  url: 'http://192.168.0.12:8000/catalogos/',
  model: Personal.Models.catalogo
});
