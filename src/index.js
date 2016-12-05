import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SearchBar from './containers/search_bar';
import PlayerStats from './components/player_stats';

import configureStore from './configureStore';

const store = configureStore();

class App extends Component {

  render(){
    return(
      <div>
        <SearchBar />
        <PlayerStats />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// var PLAYERINFO = [
//   {towelie: {id:28813065,name:"Towelie",profileIconId:1021,summonerLevel:30,revisionDate:1475744629000}},
//   {hudspeth: {id:20826053,name:"hudspeth",profileIconId:523,summonerLevel:30,revisionDate:1478575898000}},
//   {bananashank: {id:20819813,name:"Banana Shank",profileIconId:787,summonerLevel:30,revisionDate:1478507285000}}
// ];

// ReactDOM.render(
//   <App playerInfo={PLAYERINFO} />,
//   document.getElementById('root')
// );
