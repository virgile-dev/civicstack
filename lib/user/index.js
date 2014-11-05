/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();

app.get("/users/me", function(req, res, next) {
  if (req.isAuthenticated()) return res.json(req.user);
  res.json({});
});