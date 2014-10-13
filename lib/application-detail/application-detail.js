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

page('/apps/:slug', applications.middleware, load, function(ctx, next) {
  var application = ctx.application;
  var content = o('.site-content').empty();
  var appDetail = render.ripple(template, {application: application});
  appDetail.appendTo(content[0]);
});

function load(ctx, next) {
  applications.get().forEach(function (app) {
    if (app.slug() == ctx.params.slug) {
      ctx.application = app;
      return next();
    }
  })
}