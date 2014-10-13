/**
 * Module dependencies.
 */

var events = require('events');
var render = require('render');
var ripple = require('ripple');
var template = require('./template');
var UploadButton = ripple(render(template));
var Overlay = require('overlay');

UploadButton.use(events);

UploadButton.prototype.click = function(ev) {
  this.overlay = new Overlay();
  
};

/**
 * Expose UploadButton
 */

module.exports = UploadButton;