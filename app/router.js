define([
  // Application.
  "app",
  "modules/intro"
],

function(app, Intro) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },
    
    // Shortcut for building a url.
    go: function() {
      return this.navigate(_.toArray(arguments).join("/"), true);
    },
    
    // Runs the first time the router is instanciated.
    initialize: function(){
      
      // Set initial views
      app.useLayout('main-layout').setViews({
          "#content" : new Intro.Views.Layout()
       }).render();
      
    },

    index: function() {

    }
  });

  return Router;

});
