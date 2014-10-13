/**
 * Module dependencies.
 */

var modal = require('modal');
var render = require('render');
var template = require('./template');

/**
 * Expose Upload Modal
 */

module.exports = UploadModal;

function UploadModal() {
  if (!(this instanceof UploadModal)) {
    return new UploadModal();
  };

  View.call(this, template);
  modal(this.el[0]);
}

/**
 * Inherit from `View`
 */

View(UploadModal);