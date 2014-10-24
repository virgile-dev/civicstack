/**
 * Module dependencies.
 */

var events = require('events');
var o = require('dom');
var render = require('render');
var ripple = require('ripple');
var template = require('./content-template');
var ContentView = ripple(render(template));
var validate = require('validate-form');

ContentView.use(events);

ContentView.prototype.close = function(ev) {
  this.modal.hide();
};

ContentView.prototype.continue = function(ev) {

};

ContentView.prototype.show = function() {
  this.modal.show();
};

/**
 * Expose Upload Modal
 */

module.exports = ContentView;