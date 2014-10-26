/**
 * Module dependencies.
 */

var Application = require('application-model');
var applications = require('applications');
var Filters = require('filters');
var page = require('page');
// var o = require('dom');
// var t = require('t');
var render = require('render');
// var ripple = require('ripple');
var template = require('./template');
// var Homepage = ripple(render(template));
var Ractive = require('ractive');
var modellaAdaptor = require('ractive-adaptors-modella');
var UploadButton = require('upload-button');

page('/', applications.middleware, function(ctx, next) {
  // var filters = new Filters();
  // var homepage = new Homepage();
  // var button = new UploadButton();
  // var content = o('.site-content').empty();
  // filters.appendTo(content[0]);
  var homepage = new Ractive({
    template: render(template),
    el: '.site-content',
    adapt: [modellaAdaptor([Application])],
    data: {applications: applications.items}
  });
  // button.appendTo(o('.btn-upload-container', content)[0]);
});