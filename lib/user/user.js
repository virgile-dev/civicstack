/**
 * Module dependencies.
 */

var page = require('page');
var User = require('user-model');

/**
 * Instantiate and expose user
 */
var user = module.exports = new User();

user.load("me");

user.required = function(ctx, next) {
  if ("unloaded" === user.state()) {
    setTimeout(loggedout, 0);
  } else if ("loading" === user.state()) {
    user.once('error', loggedout);
  }
  user.ready(function() {
    user.off('error', loggedout);
    next();
  });
};

user.optional = function(ctx, next) {
  ctx.user = user;

  if (!user.logged()) user.load('me');
  user.once('error', onerror);
  user.ready(onready);

  function onerror(err) {
    logout();
    next();
  }

  function onready() {
    user.off('error', onerror);
    next();
  }
};

function loggedout () {
  console.log('user logged out');
  page('/')
}

function logout() {
  if (user.logged()) user.unload();
}