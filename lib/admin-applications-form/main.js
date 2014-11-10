/**
 * Module dependencies.
 */

var page = require('page');
var applications = require('applications');
var ApplicationsForm = require('./view');
var Application = require('application-model');
var Adaptor = require('ractive-adaptors-modella');

page('/admin/applications/:id', applications.middleware, applications.load, function (ctx, next) {
  if (ctx.params.id == 'new') {
    ctx.application = new Application();
  }
  var aplicationForm = new ApplicationsForm({
    data: { application: ctx.application },
    el: '.site-content',
    adapt: [Adaptor([Application])]
  });
});