// required modules and files 
import fetch from 'isomorphic-fetch';

// environment info to keep sensitive data out of repo(API_KEY)
// change the file to use '../../config/envinfo'
import envinfo from '../../config/envinfoMINE';

// Constant URLs
const ROOT_URL = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name';
const APP_API_URL = 'http://localhost:3001/api/user';

// Action types
export const REQUEST_PLAYER = 'REQUEST_PLAYER';
export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';

// Getting the initial player name from search bar
function requestPlayer(player){
  // console.log('action creator function requestPlayer player variable:');
  // console.log(player);
  // console.log('api_key');
  // console.log(envinfo.API_KEY);
  return {
    type: REQUEST_PLAYER,
    player
  }
}

// take JSON info for player and put into state as playerInfo
function receivePlayer(json){
  // console.log('action creator function receivePlayer player variable:');
  // console.log(player);
  // console.log('action creator function receivePlayer json.data variable:');
  // console.log(json);
  return{
    type: RECEIVE_PLAYER,
    playerInfo: json,
    receivedAt: Date.now()
  }
}

// request the player using name given, create API call to Riot to get JSON data
// Also checkDB to POST to /api/user server to create a user in the database
function fetchPlayerInfo(player) {
  // console.log('action creator function fetchPlayerInfo player variable:');
  // console.log(player);
  return dispatch => {
    dispatch(requestPlayer(player))
    return fetch(`${ROOT_URL}/${player}?api_key=${envinfo.API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receivePlayer(json)))
      .then(json => checkDB(json))
  }
}

// sends a POST to /api/user server with summonerId and summonerName
function checkDB(json){
  const summonerId = json.playerInfo[Object.keys(json.playerInfo)[0]].id
  const summonerName = json.playerInfo[Object.keys(json.playerInfo)[0]].name

  var payload = {
    id: summonerId,
    name: summonerName
  };

  var data = new FormData();
  data.append("json", JSON.stringify(payload));
  fetch(`${APP_API_URL}`, 
  {
    mode: 'no-cors',
    method: 'POST',
    body: data
  })
  .then(function(res){ return res.json(); })
  .then(function(data){ alert( JSON.stringify( data ) ) })
}

// main export function to dispatch information as state
export function fetchPlayer(player){
  return (dispatch, getState) => {
    return dispatch(fetchPlayerInfo(player))
  }
}
