/**
 * Module dependencies.
 */

var ripple = require('ripple');
var render = require('render');
var template = require('./template');
var header = render.ripple(template);

/**
 * Expose Header
 */

header.appendTo('#top');