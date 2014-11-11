/**
 * Module dependencies.
 */

var page = require('page');
var applications = require('applications');
var ApplicationsList = require('./view');
var Application = require('application-model');
var Adaptor = require('ractive-adaptors-modella');

page('/admin(/applications)?', applications.middleware, function adminApplications(ctx, next) {
  var applicationsList = new ApplicationsList({
    data: { applications: applications.items },
    el: '.site-content',
    adapt: [Adaptor([Application])]
  })
});