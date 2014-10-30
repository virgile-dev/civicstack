/**
 * Module dependencies.
 */

var Application = require('application-model');
var applications = require('applications');
var Filters = require('filters');
var page = require('page');
var render = require('render');
var template = require('./template');
var Ractive = require('ractive');
var modellaAdaptor = require('ractive-adaptors-modella');
var UploadButton = require('upload-button');

page('/', applications.middleware, function(ctx, next) {
  var homepage = new Ractive({
    template: render(template),
    el: '.site-content',
    adapt: [modellaAdaptor([Application])],
    data: {applications: applications.items}
  });
});