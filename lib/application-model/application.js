/**
 * Module dependencies.
 */

var Application = require('./proto');
var slug = require('slug');
var rest = require('modella-ajax');

Application
  .use(slug('name'))
  .use(rest('/api/apps'));

module.exports = Application;