/**
 * Module dependencies.
 */

import express from 'express'
import passport from 'passport'
import session from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import ConnectMongo from 'connect-mongo'
import errorhandler from 'errorhandler'
import compression from 'compression'
import { join, resolve } from 'path'
import nowww from 'nowww'
import config from 'config'
import debug from 'debug'

const has = Object.prototype.hasOwnPropert
const log = debug('civicivicstack:setup')

/**
 * Expose configuration helper
 *
 * @param {Express} app `Express` instance.
 * @api public
 */

export default function setup (app) {

  /**
   * Load configuration settings
   * for production setup
   */

  if (config.env == 'production') {

    // Log config settigs load
    log( 'production settings' );

    /**
     * Set `native` express compression middleware
     */

    app.use( compression() );
  }

  /**
   * Load configuration settings
   * for common setup
   */

   /**
    * Save config in app
    */

  app.set('config', config);

  /**
   * Set application port
   */

  app.set('port', app.get('config').port || 3000);

  /**
   * Set `public-assets` default path
   */

  app.use(express.static(resolve('public')));

  /**
   * Configure native `express` body parser
   */

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({extended: true}))

  // parse application/json
  app.use(bodyParser.json())

  // parse application/vnd.api+json as json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

  /**
   * Configure native `express` cookie parser
   */

  app.use( cookieParser('civicivicstack') );

  /**
   * Configure native `express` session middleware
   */

  const MongoStore = new ConnectMongo(session)

  app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    },
    secret: config.secret,
    store: new MongoStore({
      url: config.mongoUrl
    })
  }));

  /**
   * Use `passport` setup & helpers middleware
   */

  app.use(passport.initialize());

  /**
   * Use `passport` sessions middleware
   */

  app.use(passport.session());

  /**
   * Set custom error handler
   */

  app.use(function(err, req, res, next) {
    // log
    log('Some odd error: %j', err);
    // now let it go
    next();
  });

  /**
   * Set native `express` error handler
   */

  app.use(errorhandler());
}

/**
 * Some helpers
 */

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */

function merge (a, b){
  for (var key in b) {
    if (has.call(b, key) && b[key] != null) {
      if (!a) a = {};
      if ('object' === typeof b[key]) {
        a[key] = merge(a[key], b[key]);
      } else {
        a[key] = b[key];
      }
    }
  }
  return a;
};
