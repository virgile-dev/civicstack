/**
 * Module dependencies.
 */

var modella = require('modella');
var Application = modella('Application');

var defaultString = {type: String, defaultValue: ''};

Application
  .attr('_id')
  .attr('logo', {required: true})
  .attr('backgroundColor', defaultString)
  .attr('name', defaultString)
  .attr('description', {type: String, defaultValue: ''})
  .attr('country')
  .attr('technology', defaultString)
  .attr('organization', defaultString)
  .attr('github', defaultString)
  .attr('website', defaultString)
  .attr('twitter', defaultString)
  .attr('license', defaultString)
  .attr('team', defaultString)
  .attr('contact', defaultString)
  .attr('tags', defaultString)
  .attr('workingAt', defaultString)
  .attr('partnership', defaultString)
  .attr('comments', defaultString)

/**
 * Expose Application
 */

module.exports = Application;