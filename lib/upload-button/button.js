/**
 * Module dependencies.
 */

var events = require('events');
var render = require('render');
var ripple = require('ripple');
var o = require('dom');
var template = require('./template');
var UploadButton = ripple(render(template));
var UploadModal = require('upload-modal');

UploadButton.use(events);

UploadButton.on('ready', function (view) {
  var modal = o('.upload-modal');
  modal.remove();
  view.modal = new UploadModal();
});

UploadButton.prototype.click = function(ev) {
  this.modal.show();
};

/**
 * Expose UploadButton
 */

module.exports = UploadButton;