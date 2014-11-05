/**
 * Module dependencies.
 */

var request = require('superagent');
var User = require('./proto');
var modella = require('modella');

/**
 * Expose user model
 */

module.exports = User;

User.on('initializing', function(instance, attrs) {
  attrs.$_ready = "unloaded";
});

/**
 * Loads user from path
 *
 * @param {String} path user's load path
 * @return {User} `User` instance.
 * @api public
 */

User.prototype.load = function(path) {
  var _this = this;
  this.$_path = path || this.$_path;
  this.$_ready = "loading";

  request
  .get('/api/users/'.concat(this.$_path))
  .set('Accept', 'application/json')
  .on('error', _handleRequestError.bind(this))
  .end(function(res) {
    var u = res.body;

    if (!res.ok) {
      return _handleRequestError.bind(_this)(res.error);
    };

    if (!(u.id || u._id)) {
      return _handleRequestError.bind(_this)('User not found');
    };

    _this.set(res.body);
    _this.$_ready = "loaded";
    _this.emit('ready');
  });

  return this;
}

/**
 * Call `fn` once User is
 * ready from loading
 *
 * @param {Function} fn callback fired on ready
 * @return {User} `User` instance
 * @api public
 */

User.prototype.ready = function(fn) {
  var _this = this;

  function done() {
    if ("loaded" === _this.state()) {
      return fn();
    }
  }

  if ("loaded" === this.state()) {
    setTimeout(done, 0);
  } else {
    this.once("ready", done);
  }

  return this;
}

/**
 * Get $_ready state
 *
 * @return {String}
 * @api public
 */

User.prototype.state = function() {
  return this.$_ready;
}

/**
 * Handle error from requests
 *
 * @param {Object} err from request
 * @api private
 */

function _handleRequestError (err) {
  this.$_ready = "unloaded";
  this.emit('error', err);
}