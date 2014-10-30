/**
 * Module dependencies.
 */

var Ractive = require('ractive');
var render = require('render');
var template = require('./template');

/**
 * Expose Filters
 */

module.exports = Ractive.extend({
  template: render(template),
  data: { search: ''},
  onrender: Filters
});

function Filters() {
  this.observe('search', function(newValue, oldValue) {
    this.fire('search', newValue);
  });
}