/**
 * Module dependencies.
 */

var page = require('page');
var bus = require('bus');
var classes = require('component-classes');
var config = require('lib/config');

page('*', function(ctx, next) {
  bus.emit('page:change', ctx.path);

  if (ctx.path == '/login') return next();

  var body = classes(document.body);
  body.remove(/[^browser\-page]/);
  body.add(config.env);
  next();
});
