/**
 * Module dependencies.
 */

var Ractive = require('ractive');
var template = require('./template');

var Box = Ractive({
  template: render(template)
});

module.exports = Box;