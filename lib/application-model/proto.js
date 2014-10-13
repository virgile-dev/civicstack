/**
 * Module dependencies.
 */

var modella = require('modella');
var Application = modella('Application');

Application
  .attr('_id')
  .attr('logo', {required: true})
  .attr('name', {required: true})
  .attr('country')
  .attr('description')
  .attr('workingAt')
  .attr('twitterUrl')
  .attr('twitterUsername')
  .attr('license')
  .attr('website')
  .attr('team')
  .attr('technology')
  .attr('github')
  .attr('tags')
  .attr('contact')
  .attr('organization')

/**
 * Expose Application
 */

module.exports = Application;