/**
 * Module dependencies.
 */

var confirm = require('confirmation');
var language = require('lib/language/language')
var render = require('lib/render');
var Ractive = require('ractive');
var tags = require('tags');
var page = require('page');
var log = require('debug')('civicstack:admin-tags');
var t = require('t-component');
var template = require('./template.jade');
var request = require('lib/request');

var TagsList = Ractive.extend({
  isolated: true,
  template: render(template),
  onrender: function () {
    this.set('lang', language());

    this.observe('search', function (current, old) {
      function filter(tag) {
        var name = tag.name[language()].toLowerCase();
        current = current ? current.toLowerCase() : ''
        return current ? !!~name.indexOf(current) : true;
      }

      var filtered = tags.items.filter(filter);
      this.set('tags', filtered);
    })

    this.on('delete', function (ev, id, name) {
      ev.original.preventDefault();

      confirm(t('confirmation.title'), t('admin-tags-form.confirmation.body', {name: name}))
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
          .del('/api/tags/' + id)
          .end(function (err, res) {
            if (err || !res.ok) return log('Found error %o', err || res.error);

            tags.fetch();
            page('/admin/tags');
          });
      }
    })
  }
});

module.exports = TagsList;
