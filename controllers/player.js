'use strict';

module.exports = {
  findById: function(request, reply){
    const id = request.params.summonerId
    console.log('im hit from the controller/player.js')
    console.log(id)
    return reply(id).code(200);
  }
};
