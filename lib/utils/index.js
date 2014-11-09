/**
 * Module dependencies.
 */

var has = Object.prototype.hasOwnProperty;
var crypto = require('crypto');
var log = require('debug')('bank:utils');

/**
 * HOP ref.
 */

exports.has = has;

/**
 * MD5 hash generator.
 *
 * @param {String} string String to encrypt.
 * @return {String} MD5 encrypted string.
 * @api public
 */

exports.md5 = function md5(string) {
  return crypto.createHash('md5').update(string).digest("hex");
}


/**
 * Basic access restriction middleware
 * for authenticated users.
 */

exports.restricted = function restricted(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } else {
    res.format({
      html: function () {
        res.sendStatus(403);
      },
      json: function() {
        res.json(403, {
          error: 'Forbidden access',
          action: {
            redirect: '/login'
          }
        });
      }
    });
  }
};

/**
 * Basic admin restriction middleware blocking
 * non-admin users to access some resources
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 * @api public
 */

exports.admin = function admin(req, res, next) {
  if (!req.user) return log('User not logged in'), res.sendStatus(403);
  if (!req.user.admin()) return log('User is not admin'), res.sendStatus(403);
  next();
}