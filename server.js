'use strict';

const Hapi = require('hapi');
const Good = require('good');

// ========================== DB STUFF =======================
const fs = require('fs');
const sqlite = require('sql.js');

const filebuffer = fs.readFileSync('db/leagueplayerscore.sqlite3');

const db = new sqlite.Database(filebuffer);

const COLUMNS = [
  'summoner_id',
  'name',
  'comment_id',
  'comment_content',
  'comment_date',
  'commenter',
  'rating'
];

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3001
});

// ===================== API Routes =====================
server.route({
    method: 'GET',
    path:'/api/user/{summonerId}',
    handler: function (request, reply) {

        return reply({
          statusCode: 200,
          message: 'Retrieving User Comments',
          data
        });
    }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply){
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});

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
