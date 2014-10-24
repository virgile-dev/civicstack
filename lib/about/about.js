/**
 * Module dependencies.
 */

var page = require('page');
var o = require('dom');
var t = require('t');
var render = require('render');
var Ractive = require('ractive');
var template = require('./template');

page('/about', function(ctx, next) {
  var about = new Ractive({
    template: render(template),
    el: '.site-content'
  });
});
