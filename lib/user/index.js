/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();
var restricted = require('lib/utils').restricted;

app.get("/users/me", restricted, function(req, res, next) {
  if (req.isAuthenticated()) return res.json(req.user);
  res.json({});
});