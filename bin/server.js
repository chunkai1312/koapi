#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    H: 'host',
    p: 'port',
    h: 'help'
  },
  boolean: ['h'],
  default: {
    H: '0.0.0.0',
    p: 8080
  }
})

if (argv.help) {
  /* eslint comma-style: 0, indent: 0 */
  var usage = [
      ''
    , '  Usage: punwave-insights-server [options]'
    , ''
    , '  Options:'
    , ''
    , '     -H, --host <host>  Host to listen on [0.0.0.0]'
    , '     -p, --port <port>  Port to listen on [8080]'
    , '     -h, --help         Display help information'
    , ''
  ].join('\n')
  console.log(usage)
  process.exit(0)
}

if (argv.host) {
  process.env.HOST = argv.host
}

if (argv.port) {
  process.env.PORT = argv.port
}

var env = process.env.NODE_ENV || 'development'
var host = process.env.HOST || '0.0.0.0'
var port = process.env.PORT || 8080
var app = (env === 'development') ? require('babel-register') && require('../src/app') : require('../dist/app')

app.listen(port, host, function (err) {
  if (err) {
    console.error('punwave-insights-server:', err.stack)
    process.exit(1)
  }
  console.log('Server is running on %s:%d, in %s mode', host, port, env)
})
