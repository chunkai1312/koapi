import bunyan from 'bunyan'

const logger = bunyan.createLogger(
  { name: 'koa' }
)

export default logger
