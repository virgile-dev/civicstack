/**
 * Module dependencies.
 */

var User = require('./proto');
var modella = require('modella');
var mongo = require('lib/modella-db');

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

module.exports = User;