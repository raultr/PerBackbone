Personal.Views.Catalogo = Backbone.View.extend({

  tagName: 'li',
  className: 'lista',

  //events: {
   // 'click': 'navigate'
  //},

  template: Handlebars.compile($("#modulos-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
  },

  render: function () {
    var catalogo = this.model.toJSON();
    var html = this.template(catalogo);
    this.$el.html(html);
    return this;
  }

 // navigate: function () {
 //  Sfotipy.app.navigate("album/" + this.model.get("name"), { trigger: true });
 // }

});

