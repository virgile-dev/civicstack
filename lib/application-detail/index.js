/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();

app.get('/apps/:id', require('lib/layout'));