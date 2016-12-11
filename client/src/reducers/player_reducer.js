import { REQUEST_PLAYER } from '../actions/index';
import { RECEIVE_PLAYER } from '../actions/index';

const INITIAL_STATE = { player: [] };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case REQUEST_PLAYER:
      // add payload data to the state

      // console.log('player_reducer - this is the REQUEST_PLAYER state coming in')
      // console.log(state)
      // console.log('player_reducer - this is the REQUEST_PLAYER action coming in')
      // console.log(action)
      // console.log('player_reducer - this is the REQUEST_PLAYER action.player coming in')
      // console.log(action.player)

      return [action.player];
    case RECEIVE_PLAYER:
      // console.log('player_reducer - this is the RECEIVE_PLAYER action.playerInfo coming in')
      // console.log(action.playerInfo)
      return Object.assign({}, state, {
        playerInfo: action.playerInfo
      });
    default:
        return state;
  }
}
