/**
 * Module dependencies.
 */

var User = require('lib/user-model');


/**
 * Twitter Registration
 *
 * @param {Object} profile PassportJS's profile
 * @param {Function} fn Callback accepting `err` and `user`
 * @api public
 */

exports.twitter = function twitter (profile, fn) {
  var user = new User();

  user.fullName(profile.displayName);
  user.twitter(profile);
  user.avatar(profile.photos[0].value);

  user.save(function(err) {
    return fn(err, user);
  });
}