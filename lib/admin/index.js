/**
 * Module dependencies.
 */

var AdminView = require('./view');
var AdminSidebar = require('lib/admin-sidebar');
var log = require('debug')('civicstack:admin');
var page = require('page');
var tags = require('lib/tags');
var user = require('lib/user');

page('/admin', '/admin/apps');

page("/admin/:section?/:id?", valid, user.required, user.isAdmin, function(ctx, next) {
  var section = ctx.params.section;

  var admin = new AdminView({
    el: '.site-content'
  });

  var sidebar = new AdminSidebar({
    el: '.sidebar-container',
    data: {
      selected: section
    }
  });

  // if all good, then jump to section route handler
  next();
});

require('lib/admin-apps-form');
require('lib/admin-apps');
require('lib/admin-categories-form');
require('lib/admin-categories');
require('lib/admin-countries-form');
require('lib/admin-countries');
require('lib/admin-licenses-form');
require('lib/admin-licenses');
require('lib/admin-tags-form');
require('lib/admin-tags');
require('lib/admin-technologies-form');
require('lib/admin-technologies');

/**
 * Check if page is valid
 */

function valid(ctx, next) {
  var section = ctx.params.section = ctx.params.section || 'apps';
  if (/apps|tags|categories|countries|technologies|licenses/.test(section)) return next();
  if (/(apps|tags|categories|countries|technologies|licenses)\/create/.test(section)) return next();
  if (/(apps|tags|categories|countries|technologies|licenses)\/[a-z0-9]{24}\/?$/.test(section)) return next();
  page.redirect('/');
}
