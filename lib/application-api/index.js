/**
 * Module dependencies.
 */

var Application = require('lib/application-model');
var admin = require('lib/utils').admin;

function api(Application) {
  Application.middleware = Application.middleware || {};

  Application.middleware.approved = approved;

  return Application;
}

Application.use(api);

module.exports = function (app) {
  app.get('/api/applications', admin, Application.middleware.index);
  app.post('/api/applications', Application.middleware.create);
  app.get('/api/applications/approved', Application.middleware.approved);
  app.get('/api/applications/:id', Application.middleware.show);
  app.put('/api/applications/:id', Application.middleware.update);
  app.delete('/api/applications/:id', Application.middleware.destroy);
}

function approved(req, res, next) {
  Application.all({ approved: true }, function(err, applications) {
    if (err) return next(err);
    res.json(applications);
  });
};