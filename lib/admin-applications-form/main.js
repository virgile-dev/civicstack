/**
 * Module dependencies.
 */

var page = require('page');
var applications = require('applications');
var ApplicationsForm = require('./view');
var Application = require('application-model');
var Adaptor = require('ractive-adaptors-modella');

page('/admin/applications/:id', load, function (ctx, next) {
  if (ctx.params.id == 'new') {
    ctx.application = new Application();
  }
  var aplicationForm = new ApplicationsForm({
    data: { application: ctx.application },
    el: '.site-content',
    adapt: [Adaptor([Application])]
  });
});

function load(ctx, next) {
  if (ctx.params.id != 'new') {
    Application.get(ctx.params.id, onresponse);

    function onresponse(err, app) {
      ctx.application = app;
      next();
    }
  } else {
    next();
  }
}