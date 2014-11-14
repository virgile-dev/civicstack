/**
 * Module dependencies.
 */

var applications = require('applications');
var Application = require('application-model');
var classes = require('classes');
var countries = require('countries');
var Ractive = require('ractive');
var render = require('render');
var t = require('t');
var template = require('./template');
var scroll = require('scroll-to');

module.exports = Ractive.extend({
  template: render(template),
  data: { countries: countries },
  onrender: function () {
    var object = new Application(this.data.application.attrs);
    this.set('object', object);

    this.on('save', function (ev) {
      ev.original.preventDefault();

      var object = this.get('object');
      var isNew = object.isNew();
      object.save(callback.bind(this));

      function callback(err, application) {
        if (err) {
          this.find('.error-body').innerHTML += t('applications.alert.error-message-body', { error: err.message });
          classes(this.find('.alert.alert-danger')).remove('hide');
        } else {
          this.data.application.set(application.attrs);
          this.data.application.countryName(countries[application.attrs.country]);
          classes(this.find('.alert.alert-success')).remove('hide');
        }
        scroll(0, 0, {
          ease: 'linear',
          duration: 500
        });
      }
    })
  }
});