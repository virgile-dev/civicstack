/**
 * Module dependencies.
 */

var render = require('lib/render');
var template = require('./template.jade')

function Panel(opts) {
  if (!(this instanceof Panel)) {
    return new Panel(opts);
  }

  var panel = render.dom(template, opts);

  if (opts.el) {
    opts.el.appendChild(panel);
  }
}

module.exports = Panel;
