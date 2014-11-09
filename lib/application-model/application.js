/**
 * Module dependencies.
 */

var Application = require('./proto');
var slug = require('slug');
var rest = require('modella-ajax');
var countries = require('countries');

Application
  .use(slug('name'))
  .use(rest('/api/applications'))
  .attr('countryName', { required: false });

Application.on('change country', function(instance, val) {
  instance.countryName(countries[val]);
});

Application.on('initializing', function(instance, attrs) {
  instance.countryName(countries[attrs.country]);
});

module.exports = Application;