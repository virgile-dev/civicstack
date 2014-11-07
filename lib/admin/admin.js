/**
 * Module dependencies.
 */

var page = require('page');
var User = require('user-model');
var user = require('user');
var modellaAdaptor = require('ractive-adaptors-modella');
var Ractive = require('ractive');
var render = require('render');
var template = require('./template');

/**
 * Define Area51's restricted route
 */

page('/admin', user.required, function(ctx, next) {
  new Ractive({
    el: 'section.site-content',
    adapt: [modellaAdaptor([User])],
    data: {user: user},
    template: render(template)
  });
});
