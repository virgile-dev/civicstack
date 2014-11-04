/**
 * Module dependencies.
 */

var t = require('t');
var proto = require('./proto');

for (var code in proto) {
  proto[code] = t(proto[code]);
}

module.exports = proto;