export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,

  mongoDB: {
    uri: process.env.MONGODB_URI,
    options: {}
  }
}
