import { Todo } from '../models'

export default {

  index: async (ctx) => {
    const todos = await Todo.get()
    ctx.status = 200
    ctx.body = todos
  },

  create: async (ctx) => {
    const todo = await Todo.create(ctx.request.body)
    ctx.status = 201
    ctx.body = todo
  },

  show: async (ctx) => {
    const todo = await Todo.getById(ctx.params.id)
    if (!todo) ctx.throw(404)
    ctx.status = 200
    ctx.body = todo
  },

  update: async (ctx) => {
    const todo = await Todo.updateById(ctx.params.id, ctx.request.body)
    if (!todo) ctx.throw(404)
    ctx.status = 200
    ctx.body = todo
  },

  destroy: async (ctx) => {
    const todo = await Todo.deleteById(ctx.params.id)
    if (!todo) ctx.throw(404)
    ctx.status = 200
    ctx.body = todo
  }

}
