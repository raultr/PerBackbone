Personal.Views.Modulos = Backbone.View.extend({
  el: $('.lista'),

  template: Handlebars.compile($("#modulos-template").html()),

  initialize: function () {
    this.Escuchar();
  },

  Escuchar: function(){
    this.listenTo(this.collection, "add", this.addOne, this);
    this.listenTo(this.collection,"sort", this.render, this);
  },


  noEscuchar: function(){
     this.stopListening(this.collection);

  },

  render: function () {
    this.$el.empty();
    this.collection.forEach(this.addOne, this);
    console.log("ordenado")
  },

  addOne: function (cat) {
    console.log("Se agrego un nuevo elemento");
    var moduloView = new Personal.Views.modulo({ model: cat }); 
    this.$el.append(moduloView.render().el);
  }

});