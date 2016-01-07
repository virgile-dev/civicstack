/**
 * External Dependencies
 */

import React from 'react'
import { render as mount } from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

/**
 * Local Dependencies
 */

import routes from 'routes'

const history = createBrowserHistory()

mount(
  <Router children={routes} history={history} />,
  document.getElementById('app')
)