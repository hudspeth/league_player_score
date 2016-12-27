import fetch from 'isomorphic-fetch';
import envinfo from '../../config/envinfo';

const ROOT_URL = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name';
const APP_API_URL = 'http://localhost:3001/api/user';
// const url = `${ROOT_URL}/${player}?api_key=${API_KEY}`;

export const REQUEST_PLAYER = 'REQUEST_PLAYER';
export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';

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

function checkDB(json){
  const summonerId = json.playerInfo[Object.keys(json.playerInfo)[0]].id
  // console.log('from checkDB')
  // console.log(json.playerInfo[Object.keys(json.playerInfo)[0]].id)
  return fetch(`${APP_API_URL}/${summonerId}`, {mode: 'no-cors'});
}

export function fetchPlayer(player){
  return (dispatch, getState) => {
    return dispatch(fetchPlayerInfo(player))
  }
}
