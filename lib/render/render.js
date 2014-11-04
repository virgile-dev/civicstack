/**
 * Module dependencies.
 */

var domify = require('domify');
var merge = require('merge-util');
var ripple = require('ripple');

/**
 * Render default modules
 */

var translation = require('t');
var config = require('config');

function render(template, options) {
  var defaults = {
    t: translation,
    config: config
  };

  return template(merge(defaults, options, true)).replace("&gt;", ">").replace("&lt;", "<");
}

function dom(template, options) {
  return domify(render(template, options));
}

exports = module.exports = render;
exports.dom = dom;
