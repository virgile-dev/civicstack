/**
 * Module dependencies.
 */

var page = require('page');
var applications = require('applications');
var ApplicationsList = require('./view');
var Application = require('application-model');
var Adaptor = require('ractive-adaptors-modella');

page('/admin(/applications)?', load, function adminApplications(ctx, next) {
  var applicationsList = new ApplicationsList({
    data: { applications: ctx.applications },
    el: '.site-content',
    adapt: [Adaptor([Application])]
  })
});

function load(ctx, next) {
  Application.all(onresponse);

  function onresponse(err, apps) {
    ctx.applications = apps;
    next();
  }
}