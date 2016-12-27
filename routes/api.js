'use strict';

// required modules and files to use within our api routes file.
const playerCtrl = require('../controllers/player');

module.exports = [
  // HTTP GET for getting players based on summonerID, ORIGINAL TESTING METHOD
  {
    method: 'GET',
    path:'/api/user/{summonerId}',
    handler: playerCtrl.findById
  },
  // HTTP POST to query player controller to create a user by summonerId(Primary Key)
  {
    method: 'POST',
    path:'/api/user',
    handler: playerCtrl.createById
  }
]
