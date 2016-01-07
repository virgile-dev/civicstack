/**
 * External Dependencies
 */

import express from 'express'
import t from 't-component'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'

/**
 * Local dependencies
 */

import config from 'config'
import routes from 'routes'
import setup from 'server/setup'
import * as translations from 'translations'

const app = express()

/**
 * Load localization dictionaries to translation application
 */

translations.help(t)

/**
 * Init `t-component` component with parameter locale
 */

t.lang(config.locale)

/**
 * Setup application
 * based on config and environment
 */

setup(app)

/**
 * Add global middleware
 */

app.use((req, res) => {
  const location = createLocation(req.url)

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      console.error(err)
      return res.status(500).end('Internal server error')
    }
    if (!renderProps) return res.status(404).end('Not found.')
    
    const InitialComponent = (
      <RoutingContext {...renderProps} />
    )
    const componentHTML = renderToString(InitialComponent)
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

        <title>${t('global.app-name')}</title>
        <link href="http://fonts.googleapis.com/css?family=Abel" rel="stylesheet" type="text/css"/>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" media="screen"/>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" media="screen"/>
      </head>

      <body>
        <div id="app">${componentHTML}</div>
        <script src='//code.jquery.com/jquery-2.1.3.min.js'></script>
        <script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'></script>
        <script src="app.js"></script>
      </body>
    </html>
`
    res.end(HTML)
  })
})

export default app