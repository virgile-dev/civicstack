/**
 * Module dependencies.
 */

var classes = require('component-classes');
var render = require('lib/render');
var Ractive = require('ractive');
var template = require('./template.jade');

var AdminSidebar = Ractive.extend({
  isolated: true,
  template: render(template),
  onrender: function () {
    this.observe('selected', function (current) {
      var items = this.findAll('a');
      var item = this.find('a[href="/admin/' + current + '"]');
      items.forEach(function (el) {
        classes(el).remove('selected');
      });
      if (item) classes(item).add('selected');
    })
  }
});

module.exports = AdminSidebar;
