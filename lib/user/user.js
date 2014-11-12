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

user.required = function required(ctx, next) {
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

/**
 * If staff let go middleware
 *
 * @param {Object} ctx
 * @param {Function} next
 * @api public
 */

user.isAdmin = function isAdmin(ctx, next) {
  ctx.user = user;

  if (!user.logged()) user.load('me');
  user.once('error', onerror);
  user.ready(onready);

  function onerror(err) {
    logout();
    redirect('/singin');
  }

  function onready() {
    user.off('error', onerror);
    if (user.admin()) return next();
    redirect();
  }
}

function loggedout () {
  page('/')
}

function logout() {
  if (user.logged()) user.unload();
}

/**
 * Redirect to `path`
 *
 * @api private
 */

function redirect(path) {
  setTimeout(go, 0);

  function go() {
    page(path || '/');
  }
}