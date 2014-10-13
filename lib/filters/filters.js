/**
 * Module dependencies.
 */

var ripple = require('ripple');
var render = require('render');
var template = require('./template');

var Filters = ripple(render(template));

/**
 * Expose Filters
 */

module.exports = Filters;