/**
 * Module dependencies.
 */

var Duo = require('duo');
var path = require('path');
var resolve = path.resolve;

// Little hack to include `NODE_PATH=.`
require('node-path')(module, [resolve('.')]);

module.exports = Builder;

function Builder() {
  if (!(this instanceof Builder)) {
    return new Builder();
  }

  this.duo = new Duo('.');
  this.duo
    .path('lib')
    .entry('boot')
}

Builder.prototype.js = function() {
  
};