import Koa from 'koa'
import middlewares from './middlewares'
import routes from './routes'
import connectMongoDB from './config/mongoose'
import config from './config'

connectMongoDB()

const app = new Koa()
  .use(middlewares())
  .use(routes())

app.listen(config.port, () => console.log('Server is running on port %d', config.port))

export default app
