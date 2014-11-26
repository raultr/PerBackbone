Personal.Collections.Modulos = Backbone.Collection.extend({
  model: Personal.Models.modulo,

  comparator: function(modulo){
        // ordenamos por el atributo orden
        return modulo.get('orden');
    }
});
