/**
 * Module dependencies.
 */

var page = require('page');
var o = require('dom');
var t = require('t');
var render = require('render');
var ripple = require('ripple');
var template = require('./template');
var AppDetail = ripple(render(template));

page('/apps/:slug', function(ctx, next) {
  var appDetail = new AppDetail();
  var content = o('.site-content').empty();
  appDetail.appendTo(content[0]);
});