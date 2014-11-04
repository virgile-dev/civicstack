/**
 * Module dependencies.
 */

var page = require('page');
var applications = require('applications');
var ApplicationDetail = require('./view');

page('/apps/:id', applications.middleware, load, function(ctx, next) {
  var application = ctx.application;
  if (!application) {
    return next();
  }
  var appDetail = new ApplicationDetail({
    data: { application: application },
    el: '.site-content'
  });
});

function load(ctx, next) {
  var application = applications.get(ctx.params.id);
  ctx.application = application;
  next();
}