/**
 * Module dependencies.
 */

var Application = require('application-model');
var modellaAdaptor = require('ractive-adaptors-modella');
var Ractive = require('ractive');
var render = require('render');
var template = require('./template');

module.exports = Ractive.extend({
  template: render(template),
  adapt: [modellaAdaptor([Application])]
})