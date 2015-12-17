/**
 * Module dependencies.
 */

var classes = require('component-classes');
var empty = require('empty-element');
var page = require('page');
var render = require('lib/render');
var template = require('./template.jade');

page('/about', function(ctx, next) {
  var container = document.querySelector('section.site-content');

  classes(document.body).add('about')
  empty(container).appendChild(render.dom(template));
});
