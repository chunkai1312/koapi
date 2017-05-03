import Router from 'koa-router'
import { compose } from 'koa-convert'
import { Todo } from '../controllers'

const router = new Router({ prefix: '/api' })
  .get('/todos', Todo.index)
  .post('/todos', Todo.create)
  .get('/todos/:id', Todo.show)
  .put('/todos/:id', Todo.update)
  .delete('/todos/:id', Todo.destroy)

export default () => compose([
  router.routes(),
  router.allowedMethods()
])
