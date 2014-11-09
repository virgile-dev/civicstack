/**
 * Module dependencies.
 */

var page = require('page');
var User = require('user-model');
var user = require('user');
var modellaAdaptor = require('ractive-adaptors-modella');
var Ractive = require('ractive');
var render = require('render');
var template = require('./template');

/**
 * Define Area51's restricted route
 */

page('/admin/*', user.isAdmin);
require('admin-applications-list');
// require('admin-applications-form');
