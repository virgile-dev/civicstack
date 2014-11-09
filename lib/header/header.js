/**
 * Module dependencies.
 */

var page = require('page');
var render = require('render');
var template = require('./template');
var Ractive = require('ractive');
var user = require('user');
var modellaAdaptor = require('ractive-adaptors-modella');
var User = require('user-model');

var header = new Ractive({
  el: '#top',
  template: render(template),
  data: { user: user },
  adapt: [modellaAdaptor([User])]
});