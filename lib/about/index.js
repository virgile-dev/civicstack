/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();

app.get('/about', require('lib/layout'));