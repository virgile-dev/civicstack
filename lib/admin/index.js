/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();
var restricted = require('lib/utils').restricted;

app.get('/admin', restricted, require('lib/layout'));