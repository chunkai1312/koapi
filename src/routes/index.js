import Router from 'koa-router'
import { compose } from 'koa-convert'
import { todo } from '../controllers'

const router = new Router({ prefix: '/api' })
  .get('/todos', todo.index)
  .post('/todos', todo.create)
  .get('/todos/:id', todo.show)
  .put('/todos/:id', todo.update)
  .delete('/todos/:id', todo.destroy)

export default () => compose([
  router.routes(),
  router.allowedMethods()
])
