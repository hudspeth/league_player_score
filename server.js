'use strict';

const Hapi = require('hapi');
const Good = require('good');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3001
});

// ===================== API Routes =====================
server.route(require('./routes/api'));

// register plugins
server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*'
        }]
      },{
        module: 'good-console'
      }, 'stdout']
    }
  }
}, (err) => {
  if (err) {
    throw err;
  }

  // Start the server
  server.start((err) => {

      if (err) {
          throw err;
      }
      console.log('info', 'Server running at: ' + server.info.uri);
  });
});
