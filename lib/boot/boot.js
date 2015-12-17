/**
 * Module dependencies.
 */

var config = require('lib/config');
var language = require('lib/language');
var page = require('page');
var t = require('t-component');
var translations = require('lib/translations');
var user = require('lib/user');

/**
 * Initialize lang
 */

var lang = language();

/**
 * Load localization dictionaries to translation application
 */

translations.help(t);

/**
 * Init `t` component with config locale
 */

t.lang(lang);

/**
 * Boot components
 * and pages.
 */

require('lib/body-classes');
require('lib/close-navbar');
require('lib/header');
require('lib/footer');
require('lib/admin');
require('lib/homepage');
require('lib/login');
require('lib/app-form');
require('lib/application-detail');
require('lib/about');

/**
 * Boot page.js
 */

page();

if(config['google analytics tracking id']) {
  require('code42day-ga')(config['google analytics tracking id']);
}