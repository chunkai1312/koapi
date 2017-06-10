import mongoose from 'mongoose'
import { mongoDB } from '../config'

mongoose.Promise = global.Promise

mongoose.connect(mongoDB.uri, mongoDB.options)

mongoose.connection
  .on('connected', () => console.log(`Mongoose default connection open to ${mongoDB.uri}`))
  .on('disconnected', () => console.log('Mongoose default connection disconnected'))
  .on('error', (err) => console.error(`Mongoose default connection error: ${err}`))

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination')
    process.exit(0)
  })
})
