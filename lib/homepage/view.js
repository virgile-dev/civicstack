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
  data: {filter: filter, currentFilters: {search : ''}}
});

function Homepage() {
  this.on('filters.change', function(filters) {
    this.set('currentFilters', filters);
  });
}

function filter(application) {
  var currentFilters = this.get('currentFilters');
  var name = true;
  var country = true;
  if (currentFilters.search) {
    name = !!~application.name().toLowerCase().indexOf(currentFilters.search);
  }
  if (currentFilters.countries && currentFilters.countries.length) {
    country = !!~currentFilters.countries.indexOf(application.country().toLowerCase());
  }
  return name && country;
}

module.exports = homepage;