import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions/index';

class PlayerStats extends Component {
  render(){
    const { player } = this.props;
    // console.log('from playerStats render method logging: this.props')
    // console.log(player);
    if (!player){
      return <div>Waiting for Player</div>
    } else {
      return(
        <div>
          <div>ID: {player[Object.keys(player)[0]].id}</div>
          <div>PlayerName: {player[Object.keys(player)[0]].name}</div>
          <div>Level: {player[Object.keys(player)[0]].summonerLevel}</div>
          <div>Profile Icon: {player[Object.keys(player)[0]].profileIconId}</div>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  // console.log('from player_stats mapStateToProps state')
  // console.log(state)
  // console.log('from player_stats mapStateToProps state.player')
  // console.log(state.player)
  // console.log('from player_stats mapStateToProps state.player.playerInfo')
  // console.log(state.player.playerInfo)
  return { player: state.player.playerInfo};
}

export default connect(mapStateToProps, { fetchPlayer })(PlayerStats);
