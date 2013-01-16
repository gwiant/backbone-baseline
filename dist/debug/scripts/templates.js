this["JST"] = this["JST"] || {};

this["JST"]["app/templates/intro.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h1>Welcome</h1>\n<p>Edit this file at app/templates/intro.html</p>';
}
return __p;
};

this["JST"]["app/templates/main-layout.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="navbar navbar-inverse navbar-fixed-top">\n    <div class="navbar-inner">\n      <div class="container-fluid">\n        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="brand" href="/">Site Title</a>\n        <div class="nav-collapse collapse">\n          <ul class="nav">\n            <li class="">\n              <a href="/">Home</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<div class="container-fluid">\n    \n  <div class="row-fluid">\n    <div class="span2" id="sidebar">\n      <!--Sidebar content-->\n    </div>\n    <div class="span10" id="content">\n      <!--Body content-->\n    </div>\n  </div>\n  \n</div>';
}
return __p;
};