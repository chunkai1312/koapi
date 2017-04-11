# koapi

[![code style][standardjs-image]][standardjs-url]

> A boilerplate for building api services based on Koa v2

## Features

- ES6/ES2015 support using [Babel](https://babeljs.io)
- Use [MongoDB](https://www.mongodb.com) for the database and [Mongoose](https://github.com/Automattic/mongoose) ODM for schema creation
- Use [Bunyan](https://github.com/trentm/node-bunyan) for logging errors and events
- Use [Nodemon](https://github.com/remy/nodemon) for watching and restarting
- Use [Jest](https://facebook.github.io/jest) as test framework

## Structure

```
.
├── bin
│   └── server.js        # entry of server
├── src
│   ├── config           # app configurations
│   │   ├── env          # environment variable definitions
│   │   ├── config.js    # configuration variables
│   │   ├── index.js     # entry of configuration
│   │   ├── logger.js    # bunyan logger transport settings
│   │   └── mongoose.js  # mongoose connection handler
│   ├── controllers      # api implementations
|   ├── middlewares      # middleware implementations
│   ├── models           # database schema definitions
│   ├── routes           # router definitions
│   ├── servies          # standalone services
│   └── app.js           # koa instance
├── test                 # testing scripts
└── package.json
```

## Usage

### Setup

```
$ npm install
```

### Run for Development

```
$ npm run dev
```

### Run for Production

```
$ npm start
```

### Test

```
$ npm test
```

## License

MIT © [Chun-Kai Wang]()

[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]: http://standardjs.com/
