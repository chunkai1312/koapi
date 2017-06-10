import Koa from 'koa'
import middlewares from './middlewares'
import routes from './routes'
import './config/mongoose'

const app = new Koa()
  .use(middlewares())
  .use(routes())

export default app
