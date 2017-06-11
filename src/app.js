import Koa from 'koa'
import middlewares from './middlewares'
import routes from './routes'
import logger from './config/logger'
import './config/mongoose'

const app = new Koa()
  .use(middlewares())
  .use(routes())

app.on('error', (err, ctx) =>
  logger.error('server error', err, ctx)
)

export default app
