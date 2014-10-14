/**
 * Module dependencies.
 */

var events = require('events');
var modal = require('modal');
var render = require('render');
var ripple = require('ripple');
var template = require('./template');
var UploadModal = ripple(render(template));

UploadModal.use(events);

UploadModal.on('ready', function (view) {
  view.modal = modal(view.el);
  view.modal.overlay().closable().effect('slide-in-bottom');
});

UploadModal.prototype.close = function(ev) {
  this.modal.hide();
};

UploadModal.prototype.show = function() {
  this.modal.show();
};

/**
 * Expose Upload Modal
 */

module.exports = UploadModal;