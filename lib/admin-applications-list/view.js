/**
 * Module dependencies.
 */

var Ractive = require('ractive');
var render = require('render');
var template = require('./template');

module.exports = Ractive.extend({
  template: render(template),
});