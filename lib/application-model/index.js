/**
 * Module dependencies.
 */

var Application = require('./proto');
var mongo = require('lib/modella-db');
var slug = require('modella-slug');
var resource = require('modella-resource');

Application
  .use(slug('name'))
  .use(mongo('applications'))
  .use(resource())

module.exports = function (app) {
  app.get('/apps', Application.middleware.index);
  app.post('/apps', Application.middleware.create);
}