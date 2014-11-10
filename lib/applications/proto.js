/**
 * Module dependencies.
 */

var Application = require('application-model');
var request = require('request');
var render = require('render');
var Stateful = require('stateful');
var log = require('debug')('wikirepository:applications');

/**
 * Expose `Applications` proto constructor
 */

module.exports = Applications;

/**
 * Applications collection constructor
 */

function Applications() {
  if (!(this instanceof Applications)) {
    return new Applications();
  };

  // instance bindings
  this.middleware = this.middleware.bind(this);
  this.load = this.load.bind(this);

  this.state('initializing');
  this.fetch();
}

/**
 * Mixin Applications prototype with Emitter
 */

Stateful(Applications);

/**
 * Fetch `applications` from source
 *
 * @param {String} src
 * @api public
 */

Applications.prototype.fetch = function() {
  log('request in process');
  this.state('loading');

  Application.all(onresponse.bind(this));

  function onresponse(err, apps) {
    if (err) {
      var message = 'Unable to load applications. Please try reloading the page. Thanks!';
      return this.error(message);
    };

    this.set(apps);
  }
}

/**
 * Set items to `v`
 *
 * @param {Array} v
 * @return {Applications} Instance of `Applications`
 * @api public
 */

Applications.prototype.set = function(items) {
  this.items = items;
  var _this = this;

  this.items.forEach(function (i) {
    i.on('remove', function () {
      var index = _this.items.indexOf(this);
      _this.items.splice(index, 1);
    });
  });

  this.state('loaded');
  return this;
}

/**
 * Get current `items`
 *
 * @return {Array} Current `items`
 * @api public
 */

Applications.prototype.get = function(id) {
  if (arguments.length) {
    for (var i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].primary() == id) {
        return this.items[i];
      }
    }
    return null;
  }
  return this.items;
}

/**
 * Middleware for `page.js` like
 * routers
 *
 * @param {Object} ctx
 * @param {Function} next
 * @api public
 */

Applications.prototype.middleware = function(ctx, next) {
  this.ready(next);
}

/**
 * Middleware for `page.js` like
 * routers to load matching id in route with application
 *
 * @param {Object} ctx
 * @param {Function} next
 * @api public
 */

Applications.prototype.load = function(ctx, next) {
  var application = this.get(ctx.params.id);
  ctx.application = application;
  next();
}

/**
 * Handle errors
 *
 * @param {String} error
 * @return {Applications} Instance of `Applications`
 * @api public
 */

Applications.prototype.error = function(message) {
  // TODO: We should use `Error`s instead of
  // `Strings` to handle errors...
  // Ref: http://www.devthought.com/2011/12/22/a-string-is-not-an-error/
  this.state('error', message);
  log('error found: %s', message);

  // Unregister all `ready` listeners
  this.off('ready');
  return this;
}