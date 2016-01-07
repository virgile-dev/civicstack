/**
 * Module Dependencies
 */

import debug from 'debug'
import app from './boot'

const log = debug('civicstack')

app.listen(app.get('port'), (err) => {
  if (err) return log('Found error %j starting the app', err), process.exit()
  log(`Application started at port ${app.get('port')}`)
})
