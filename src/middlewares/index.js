import logger from 'koa-logger'
import koaBunyanLogger from 'koa-bunyan-logger'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import cors from 'kcors'
import helmet from 'koa-helmet'
import error from 'koa-json-error'
import compose from 'koa-compose'
import config from '../config'

const requestLogger = (config.env === 'development')
  ? () => logger()
  : () => compose([
    koaBunyanLogger(),
    koaBunyanLogger.requestIdContext(),
    koaBunyanLogger.requestLogger()
  ])

export default () => compose([
  requestLogger(),
  compress(),
  bodyParser(),
  cors(),
  helmet(),
  error()
])


