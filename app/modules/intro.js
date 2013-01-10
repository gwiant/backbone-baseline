// Intro module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Intro = app.module();

  // Default Model.
  Intro.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Intro.Collection = Backbone.Collection.extend({
    model: Intro.Model
  });

  // Default View.
  Intro.Views.Layout = Backbone.Layout.extend({
    template: "intro"
  });

  // Return the module for AMD compliance.
  return Intro;

});
