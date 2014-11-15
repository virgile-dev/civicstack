/**
 * Module dependencies.
 */

var request = require('request');

module.exports = function (Application) {
  Application.approved = function(cb) {
    var url = '/api/applications/approved';
    var req = request.get(url);
    Application.emit('ajax request', req);

    req.end(function(res) {
      Application.emit('ajax all', res);
      var instances = [];
      if (res.body instanceof Array) {
        for (var len = res.body.length, i=0; i<len; i++) {
          instances.push(new Application(res.body[i]));
        }
      }
      cb(errorForRes(res), instances);
    });
  };
}

function errorForRes(res) {
  var error;

  if(error = res.error) {
    if(res.body) {
      error.errors = res.body.errors;
      error.body = res.body;
      error.message = res.body.msg || error.message;
      error.res = res;
    }
    return error;
  } else {
    return null;
  }

}