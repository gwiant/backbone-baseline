Backbone Baseline
====================

This is the start of my preferred baseline for apps built with the backbone boilerplate. Not sure if there's a better way to do this.


Changes from backbone-boilerplate:

* Uses twitter bootstrap instead of h5bp.
* Includes an example module called intro.
* Includes a main-layout template that is rendered in the router along with the intro module.
* Router includes the handy 'go' function from the github viewer.
* Customized grunt.js
** Copies all files into dist directories
** Set options for uglify


Future:

* Changes for grunt.js and bbb release
* Maybe try to figure out how to get this repository to work with grunt-bbb and bbb:init?


## Documentation ##

[Backbone Boilerplate documentation](https://github.com/tbranyen/backbone-boilerplate/wiki)

[Grunt-bbb documentation](https://github.com/backbone-boilerplate/grunt-bbb#readme)

[Backbone Layout Manager documentation](http://tbranyen.github.com/backbone.layoutmanager/)

## Quick Command Reference ##

bbb init:module

bbb server

bbb install [package-name]

bbb remove [package-name]

bbb release
