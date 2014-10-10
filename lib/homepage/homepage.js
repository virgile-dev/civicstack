/**
 * Module dependencies.
 */

var page = require('page');
var o = require('dom');
var t = require('t');
var render = require('render');
var ripple = require('ripple');
var template = require('./template');
var Homepage = ripple(render(template));

page('/', function(ctx, next) {
  var homepage = new Homepage();
  var content = o('.site-content').empty();
  homepage.appendTo(content[0]);
});