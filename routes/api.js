'use strict';

const playerCtrl = require('../controllers/player');

module.exports = [
  // HTTP GET for getting players based on summonerID
  {
    method: 'GET',
    path:'/api/user/{summonerId}',
    handler: playerCtrl.findById
  }
]

//
// {
//   method: 'GET',
//   path: '/{name}',
//   handler: function (request, reply){
//     reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
//   }
// }
