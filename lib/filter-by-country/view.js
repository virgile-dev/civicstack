/**
 * Module dependencies.
 */

var countries = require('countries');
var Ractive = require('ractive');
var render = require('render');
var template = require('./template');
var RactiveModal = require('ractive-modal');

/**
 * Expose Filters
 */

module.exports = RactiveModal.extend({
  partials: {
    modalContent: render(template)
  },

  data: { countries: countries },

  onrender: function ( options ) {
    // wherever we overwrite methods, such as `init`, we can call the
    // overwritten method as `this._super`
    this._super( options );

    this.on('go', function () {
      this.fire('filter', this.get('selected'));
      this.teardown();
    });
  }
});
