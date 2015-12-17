/**
 * Module dependencies.
 */

var confirm = require('lib/confirmation');
var language = require('lib/language');
var render = require('lib/render');
var Ractive = require('ractive');
var countries = require('lib/countries');
var log = require('debug')('civicstack:admin-countries');
var page = require('page');
var t = require('t-component');
var template = require('./template.jade');
var request = require('lib/request');

var CountriesList = Ractive.extend({
  isolated: true,
  template: render(template),
  onrender: function () {
    this.set('lang', language());

    this.observe('search', function (current, old) {
      function filter(country) {
        var name = country.name[language()].toLowerCase();
        current = current ? current.toLowerCase() : ''
        return current ? !!~name.indexOf(current) : true;
      }

      var filtered = countries.items.filter(filter);
      this.set('countries', filtered);
    })

    this.on('delete', function (ev, id, name) {
      ev.original.preventDefault();

      confirm(t('confirmation.title'), t('admin-countries-form.confirmation.body', {name: name}))
        .cancel(t('confirmation.cancel'))
        .ok(t('confirmation.ok'))
        .modal()
        .closable()
        .effect('slide')
        .focus()
        .show(onconfirmdelete.bind(this));

      function onconfirmdelete(ok) {
        if (!ok) return;

        request
          .del('/api/countries/' + id)
          .end(function (err, res) {
            if (err || !res.ok) return log('Found error %o', err || res.error);

            countries.fetch();
            page('/admin/countries');
          });
      }
    })
  }
});

module.exports = CountriesList;
