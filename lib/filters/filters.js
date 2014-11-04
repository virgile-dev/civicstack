/**
 * Module dependencies.
 */

var Ractive = require('ractive');
var render = require('render');
var template = require('./template');
var FilterByCountry = require('filter-by-country');

/**
 * Expose Filters
 */

module.exports = Ractive.extend({
  template: render(template),
  data: { search: '', currentFilters: {} },
  onrender: Filters,
});

function Filters() {
  this.observe('search', function(newValue, oldValue) {
    this.get('currentFilters').search = newValue
    this.fire('change', this.get('currentFilters'));
  });

  this.on('countryClick', function () {
    filterByCountry = new FilterByCountry();
    function onfiltercountry(countries) {
      this.get('currentFilters').countries = countries;
      this.fire('change', this.get('currentFilters'));
    }
    filterByCountry.on('filter', onfiltercountry.bind(this));
  });
}