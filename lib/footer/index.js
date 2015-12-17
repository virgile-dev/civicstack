/**
 * Module dependencies.
 */

var language = require('lib/language');
var render = require('lib/render');
var Ractive = require('ractive');
var template = require('./template.jade');

var header = new Ractive({
  isolated: true,
  template: render(template),
  el: '#site-footer',
  data: {
    lang: language()
  }
});
