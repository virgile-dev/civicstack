/**
 * Module dependencies.
 */

var routes = require('./routes');

/**
 * Expose Auth Module
 */

module.exports = Auth;

/**
 * Auth Module defining routes and
 */
function Auth (app) {

  /**
   * Attach routes to parent application
   */

  app.use(routes);
}