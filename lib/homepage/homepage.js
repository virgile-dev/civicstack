/**
 * Module dependencies.
 */

var Filters = require('filters');
var page = require('page');
var o = require('dom');
var t = require('t');
var render = require('render');
var ripple = require('ripple');
var template = require('./template');
var Homepage = ripple(render(template));
var UploadButton = require('upload-button');

page('/', function(ctx, next) {
  var filters = new Filters();
  var homepage = new Homepage();
  var button = new UploadButton();
  var content = o('.site-content').empty();
  filters.appendTo(content[0]);
  homepage.appendTo(content[0]);
  button.appendTo(o('.btn-upload-container', content)[0]);
});