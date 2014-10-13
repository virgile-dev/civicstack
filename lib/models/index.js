/**
 * Expose models linker helper
 *
 * @param {Express} app `Express` instance
 */

module.exports = function (app) {
  require('lib/application-model')(app);
}