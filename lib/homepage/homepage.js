/**
 * Module dependencies.
 */

var applications = require('applications');
var page = require('page');
var UploadButton = require('upload-button');
var Homepage = require('./view');

page('/', applications.middleware, function(ctx, next) {

  var homepage = new Homepage({
    el: '.site-content',
    data: {applications: applications.items}
  });

});