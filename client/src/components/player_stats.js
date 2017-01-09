import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions/index';
import '../styles/player_stats.css';

class PlayerStats extends Component {
  render(){
    const { player } = this.props;

    // console.log('from playerStats render method logging: this.props')
    // console.log(player);
    if (!player){
      return <div className='waiting-for-player'>Waiting for Player</div>
    } else {
      const playerData = player[Object.keys(player)[0]];
      return(
        <div className='player-info-layout'>
          <div>ID: {playerData.id}</div>
          <div>PlayerName: {playerData.name}</div>
          <div>Level: {playerData.summonerLevel}</div>
          <div>Profile Icon: {playerData.profileIconId}</div>
          <div>Player Rating: <input type='text' id='player-rating' defaultValue='0'/></div>
          <button className='btn btn-secondary' onClick='incrementRating()'>Like</button>
          <button className='btn btn-secondary' onClick='decrementRating()'>Dislike</button>
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
