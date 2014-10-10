/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();

app.get('/apps/:slug', require('lib/layout'));