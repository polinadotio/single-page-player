var SongListItemView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %></td></td><td><%= playCount %></td>'),

  initialize: function() {
   // this.render();
  },

  events: {
    'click': function() {
      //add song to playlist
      console.log("clicked");
      this.model.addToPlayList();
    }

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});