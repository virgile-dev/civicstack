/**
 * Module dependencies.
 */

var page = require('page');
var Ractive = require('ractive');
var render = require('lib/render');
var template = require('./template.jade');

module.exports = Ractive.extend({
  isolated: true,
  template: render(template),
  onrender: function () {
    $('.modal').modal();

    var self = this;

    $('.modal').on('hidden.bs.modal', function (e) {
      $('.modal').remove();
      self.fire('close');
    })
  }
});
