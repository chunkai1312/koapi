import Koa from 'koa'
import middlewares from './middlewares'
import routes from './routes'
import connectMongoDB from './config/mongoose'

connectMongoDB()

const app = new Koa()
  .use(middlewares())
  .use(routes())

export default app
