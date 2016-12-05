import { combineReducers } from 'redux';
import PlayerReducer from './player_reducer';

const rootReducer = combineReducers({
  player: PlayerReducer
});

export default rootReducer;
