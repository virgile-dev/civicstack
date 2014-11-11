/**
 * Module dependencies.
 */

var Application = require('application-model');
var countries = require('countries');
var Ractive = require('ractive');
var render = require('render');
var template = require('./template');

module.exports = Ractive.extend({
  template: render(template),
  data: { countries: countries },
  onrender: function () {
    var object = new Application(this.data.application.attrs);
    this.set('object', object);
  }
});