/**
 * Module dependencies.
 */

var events = require('events');
var o = require('dom');
var render = require('render');
var ripple = require('ripple');
var template = require('./cover-template');
var CoverView = ripple(render(template));
var ContentView = require('./content-view');

CoverView.use(events);

CoverView.prototype.close = function(ev) {
  this.modal.hide();
};

CoverView.prototype.continue = function(ev) {
  var contentView = new ContentView();
  contentView.replace('.cover');
};

CoverView.prototype.show = function() {
  this.modal.show();
};

/**
 * Expose Upload Modal
 */

module.exports = CoverView;