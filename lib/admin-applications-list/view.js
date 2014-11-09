/**
 * Module dependencies.
 */

var Ractive = require('ractive');
var render = require('render');
var template = require('./template');
var confirm = require('confirmation');
var o = require('dom');
var t = require('t');

var ApplicationsList = module.exports = Ractive.extend({
  template: render(template),
  onrender: function () {
    this.on('confirmdelete', function (ev, application) {
      ev.original.preventDefault();

      confirm(t('admin-applications-list.delete-confirmation.title'),
        o(t('admin-applications-list.delete-confirmation.body', {name: application.name()}))[0])
        .cancel(t('common.cancel'))
        .ok(t('common.ok'))
        .modal()
        .closable()
        .effect('slide')
        .focus()
        .show(onconfirm.bind(this))

      function onconfirm(ok) {
        if (ok) application.remove();
      }
    });
  }
});