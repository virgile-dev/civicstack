/**
 * Module dependencies.
 */

var Panel = require('lib/panel');
var Ractive = require('ractive');
var request = require('lib/request');
var render = require('lib/render');
var t = require('t-component');
var licenses = require('lib/licenses');
var template = require('./template.jade');

var LicenseForm = Ractive.extend({
  isolated: true,
  template: render(template),
  onrender: function () {
    var self = this;

    this.on('save', function (ev) {
      var license = this.get('license');
      var url = '/api/licenses/' + (license.id || 'create');
      request
        .post(url)
        .send(license)
        .end(function (err, res) {
          if (err) {
            return new Panel({
              classes: 'panel-danger',
              heading: t('panel.heading.error'),
              body: t('panel.heading.body'),
              el: self.find('.panels')
            });
          }

          var panel = new Panel({
            classes: 'panel-success',
            heading: t('panel.heading.success'),
            body: t('admin.licenses.save.success'),
            el: self.find('.panels')
          });

          licenses.fetch();
        });

      return false;
    });
  }
});

module.exports = LicenseForm;
