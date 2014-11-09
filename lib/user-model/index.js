/**
 * Module dependencies.
 */

var User = require('./proto');
var modella = require('modella');
var mongo = require('lib/modella-db');
var config = require('lib/config');

User
  .attr('twitter')
  .use(mongo('users'));

/**
 * Find `User` by social provider id
 *
 * @param {String|Number} id
 * @param {String} social
 * @return {Error} err
 * @return {User} user
 * @api public
 */

User.findByProvider = function(profile, cb) {
  var path = profile.provider.concat('.id');
  var query = {};
  query[path] = profile.id;
  return this.query().findOne().where(query).exec(cb);
}

User.on('initializing', function(instance, attrs) {
  var twitter = config.admin.twitter || [];
  var github = config.admin.github || [];
  var admin = !!~twitter.indexOf(attrs.twitter.id); /* TODO: check github as well */
  instance.admin(admin);
});

module.exports = User;