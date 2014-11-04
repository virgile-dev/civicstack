/**
 * Module dependencies.
 */

var t = require('t');
var proto = require('./proto');

proto.countries.forEach(function (country) {
  country.name = t(country.name);
});

module.exports = proto.countries;