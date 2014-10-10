/**
 * Module dependencies.
 */

var ripple = require('ripple');
var render = require('render');
var template = require('./template');

var Header = ripple(render(template));

/**
 * Expose Header
 */

var header = new Header();
header.appendTo('#top');