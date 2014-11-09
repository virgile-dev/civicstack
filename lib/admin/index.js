/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();
var admin = require('lib/utils').admin;

app.all('/admin*', admin, require('lib/layout'));