/**
 * Module dependencies.
 */

var config = require('lib/config');

/**
 * Expose modella-db
 */

module.exports = require('modella-mongo')(config('mongoUrl'));