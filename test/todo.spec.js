import request from 'supertest'
import app from '../src/app'

const server = app.listen()

describe('Todo API:', () => {
  let todo

  describe('GET /api/todos', () => {
    it('should respond with JSON array', () => {
      return request(server)
        .get('/api/todos')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => expect(res.body).toBeInstanceOf(Array))
    })
  })

  describe('POST /api/todos', () => {
    it('should respond with the newly created todo', () => {
      return request(server)
        .post('/api/todos')
        .send({
          title: 'New Todo'
        })
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => {
          expect(res.body.id).toBeDefined()
          expect(res.body.title).toEqual('New Todo')
          expect(res.body.completed).toBeFalsy()
          todo = res.body
        })
    })
  })

  describe('GET /api/todos/:id', () => {
    it('should respond with the requested todo', () => {
      return request(server)
        .get(`/api/todos/${todo.id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body.id).toEqual(todo.id)
          expect(res.body.title).toEqual(todo.title)
          expect(res.body.completed).toBeFalsy()
        })
    })
  })

  describe('PUT /api/todos/:id', () => {
    it('should respond with the updated todo', () => {
      return request(server)
        .put(`/api/todos/${todo.id}`)
        .send({
          title: 'Updated Todo',
          completed: true
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body.id).toEqual(todo.id)
          expect(res.body.title).toEqual('Updated Todo')
          expect(res.body.completed).toBeTruthy()
        })
    })
  })

  describe('DELETE /api/todos/:id', () => {
    it('should respond with 204 on successful removal', () => {
      return request(server)
        .delete(`/api/todos/${todo.id}`)
        .expect(204)
    })

    it('should respond with 404 when todo does not exist', () => {
      return request(server)
        .delete(`/api/todos/${todo.id}`)
        .expect(404)
    })
  })
})
