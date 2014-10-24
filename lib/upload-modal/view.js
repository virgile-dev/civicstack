/**
 * Module dependencies.
 */

var events = require('events');
var modal = require('modal');
var o = require('dom');
var render = require('render');
var ripple = require('ripple');
var submit = require('submit-form');
var template = require('./template');
var UploadModal = ripple(render(template));
var CoverView = require('./steps/cover-view');
var ContentView = require('./steps/content-view');
var validate = require('validate-form');

UploadModal.use(events);

UploadModal.on('ready', function (view) {
  view.modal = modal(view.el);
  view.modal.overlay().closable().effect('bottom');
  var coverView = new CoverView();
  coverView.appendTo(view.el);
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