/**
 * Module dependencies.
 */

var render = require('lib/render');
var Ractive = require('ractive');
var template = require('./template.jade');

var AdminView = Ractive.extend({
  isolated: true,
  template: render(template),
});

module.exports = AdminView;
