/**
 * Module dependencies.
 */

var modella = require('modella');
var User = modella('User');

User
  .attr('_id')
  .attr('firstName')
  .attr('lastName')
  .attr('avatar')
  .attr('createdAt', { type: Date, defaultValue: Date.now })
  .attr('updatedAt', { type: Date });


User.prototype.fullName = function(fullName) {
  if (arguments.length == 0) {
    return this.firstName() + ' ' + this.lastName();
  }

  var split = fullName.split(' ');
  if(split.length) {
    this.firstName(split.shift());
    this.lastName(split.join(' '));
  }

  return this;
};

/**
 * Expose User proto
 */

module.exports = User;