/**
 * Module dependencies.
 */

var modella = require('modella');
var Application = modella('Application');

Application
  .attr('_id')
  .attr('logo', {required: true})
  .attr('backgroundColor')
  .attr('name', {required: true})
  .attr('description')
  .attr('country')
  .attr('technology')
  .attr('organization')
  .attr('github')
  .attr('website')
  .attr('twitter')
  .attr('license')
  .attr('team')
  .attr('contact')
  .attr('tags')
  .attr('workingAt')
  .attr('partnership')
  .attr('comments')

/**
 * Expose Application
 */

module.exports = Application;