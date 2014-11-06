Personal.Views.Catalogos = Backbone.View.extend({
  el: $('.lista'),

  template: Handlebars.compile($("#modulos-template").html()),

  initialize: function () {
    this.listenTo(this.collection, "add", this.addOne, this);
  },

  render: function () {
    this.collection.forEach(this.addOne, this);
  },

  addOne: function (cat) {
    console.log("Se agrego un nuevo elemento");
    var catalogoView = new Personal.Views.Catalogo({ model: cat }); 
    this.$el.append(catalogoView.render().el);
  }

});