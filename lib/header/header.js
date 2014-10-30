/**
 * Module dependencies.
 */

var render = require('render');
var template = require('./template');
var Ractive = require('ractive');
var header = new Ractive({
  el: '#top',
  template: render(template)
});