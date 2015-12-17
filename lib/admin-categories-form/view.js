/**
 * Module dependencies.
 */

var language = require('lib/language/language')
var Panel = require('lib/panel');
var Ractive = require('ractive');
var request = require('lib/request');
var render = require('lib/render');
var t = require('t-component');
var categories = require('categories');
var template = require('./template.jade');

var CategoryForm = Ractive.extend({
  isolated: true,
  template: render(template),
  onrender: function () {
    var self = this;
  	this.set('lang', language());

    this.on('save', function (ev) {
      var category = this.get('category');
      var url = '/api/categories/' + (category.id || 'create');
      request
        .post(url)
        .send(category)
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
            body: t('admin.categories.save.success'),
            el: self.find('.panels')
          });

          categories.fetch();
        });

      return false;
    });
  }
});

module.exports = CategoryForm;
