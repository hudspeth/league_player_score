'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'league',
  password: 'rating'
});

module.exports = {
  findById: function(request, reply){
    const id = request.params.summonerId
    console.log('im hit from the controller/player.js')
    console.log('incoming summonerID: ' + id)
    select_from_db(id);
    return reply(id).code(200);
  }
};

// select_from_db: function(summonerId){
//   connection.connect(function(err){
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
//
//     console.log('connected as id ' + connection.threadId)
//   })
// }

// // HELPERS
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
