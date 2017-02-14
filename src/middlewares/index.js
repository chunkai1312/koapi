import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import compose from 'koa-compose'

export default () => compose([
  logger(),
  bodyParser()
])
