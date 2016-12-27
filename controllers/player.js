'use strict';

// required modules
const mysql = require('mysql');

// database connection info
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'league',
  password: 'leaguerating',
  database: 'LeaguePlayerScore'
});

// actions to be called when a route is hit
module.exports = {
  // findById may be used later, but this was one i used for testing mysql connection
  findById: function(request, reply){
    const id = request.params.summonerId
    console.log('im hit from the controller/player.js')
    console.log('incoming summonerID: ' + id)
    select_from_db(id);
    return reply(id).code(200);
  },
  // createById will be called when a POST hits /api/user and 
  // will trigger create_user_db passing in summonerId and summonerName
  createById: function(request, reply){
    // payload comes in as a json stringify, parse'd it out here to access data
    const inc_payload = JSON.parse(request.payload.json);
    create_user_db(inc_payload.id, inc_payload.name);
    return reply(reply).code(200);
  }
};

// // HELPERS
// Original query to test selecting from the DB
function select_from_db(summonerId){
  connection.query('Select * from LeaguePlayerScore.SummonerInfo',function(err, rows, fields){
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId)
    console.log(rows);
  })
};

// create_user_db will take summonerId and name to then make a sql insert
// to add a user to the SummonerInfo table, if user exists, then just update last_searched
function create_user_db(summonerId, name){
  console.log('attempting to create user')
  connection.query(`insert into SummonerInfo (summoner_id, last_searched, name, rating, first_searched) \
  values (${summonerId}, NOW(), '${name}', 0, NOW()) ON DUPLICATE KEY UPDATE last_searched=NOW()`, function(err, results){
    console.log('check if a user was created')
    if (err) {
      console.error('error with something: ' + err);
    }
    console.log('results here: ')
    console.log(results)
  });
};
