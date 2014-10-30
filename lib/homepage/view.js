/**
 * Module dependencies.
 */

var Application = require('application-model');
var Filters = require('filters');
var modellaAdaptor = require('ractive-adaptors-modella');
var ractive = require('ractive');
var render = require('render');
var template = require('./template');

/**
 * Expose Homepage
 */

var homepage = Ractive.extend({
  template: render(template),
  adapt: [modellaAdaptor([Application])],
  components: { filters: Filters },
  onrender: Homepage,
  data: {filter: filter, currentFilter: {search : ''}}
});

function Homepage() {
  this.on('filters.search', function(search) {
    this.set('currentFilter', {search: search});
  });
}

function filter(application) {
  var currentFilter = this.get('currentFilter');
  var search = currentFilter.search;
  return ~application.name().toLowerCase().indexOf(search);
}

module.exports = homepage;