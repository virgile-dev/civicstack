/**
 * Module dependencies.
 */

var language = require('lib/language/language')
var Ractive = require('ractive');
var render = require('lib/render');
var template = require('./template.jade');

module.exports = Ractive.extend({
  isolated: true,
  template: render(template),
  onrender: function () {
    this.set('lang', language());
  }
});
