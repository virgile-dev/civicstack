/**
 * Module dependencies.
 */

var page = require('page');
var o = require('dom');
var t = require('t');
var render = require('render');
var ripple = require('ripple');
var template = require('./template');
var About = ripple(render(template));

page('/about', function(ctx, next) {
  // Render signin-page into content section
  o('.site-content').empty();
  var about = new About();
  about.appendTo('.site-content');
});
