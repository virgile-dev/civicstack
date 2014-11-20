/**
 * Module dependencies.
 */

var applications = require('applications');
var page = require('page');
var UploadButton = require('upload-button');
var Homepage = require('./view');

page('/', applications.middleware, function(ctx, next) {

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var homepage = new Homepage({
    el: '.site-content',
    data: {applications: shuffle(applications.items)}
  });

});