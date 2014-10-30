/**
 * Module dependencies.
 */

var page = require('page');
var o = require('dom');
var t = require('t');
var render = require('render');
var template = require('./template');
var Application = require('application-model');
var applications = require('applications');

page('/apps/:id', applications.middleware, load, function(ctx, next) {
  var application = ctx.application;
  if (!application) {
    return next();
  }
  var content = o('.site-content').empty();
  var appDetail = render.ripple(template, {application: application});
  appDetail.appendTo(content[0]);
});

function load(ctx, next) {
  var application = applications.get(ctx.params.id);
  ctx.application = application;
  next();
}