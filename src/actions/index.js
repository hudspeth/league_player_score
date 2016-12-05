import fetch from 'isomorphic-fetch';

const API_KEY = '05e13ae8-5dc3-423e-bcc9-43b840469e48';
const ROOT_URL = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name';
// const url = `${ROOT_URL}/${player}?api_key=${API_KEY}`;

export const REQUEST_PLAYER = 'REQUEST_PLAYER';
export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';

function requestPlayer(player){
  // console.log('action creator function requestPlayer player variable:');
  // console.log(player);
  return {
    type: REQUEST_PLAYER,
    player
  }
}

function receivePlayer(player, json){
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
    return fetch(`${ROOT_URL}/${player}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receivePlayer(player, json)))
  }
}

export function fetchPlayer(player){
  return (dispatch, getState) => {
    return dispatch(fetchPlayerInfo(player))
  }
}
