/**
 * Module dependencies.
 */

var language = require('lib/language');
var Panel = require('lib/panel');
var Ractive = require('ractive');
var request = require('lib/request');
var render = require('lib/render');
var t = require('t-component');
var countries = require('lib/countries');
var template = require('./template.jade');

var CountryForm = Ractive.extend({
  isolated: true,
  template: render(template),
  onrender: function () {
    var self = this;
  	this.set('lang', language());

    this.on('save', function (ev) {
      var country = this.get('country');
      var url = '/api/countries/' + (country.id || 'create');
      request
        .post(url)
        .send(country)
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
            body: t('admin.countries.save.success'),
            el: self.find('.panels')
          });

          countries.fetch();
        });

      return false;
    });
  }
});

module.exports = CountryForm;
