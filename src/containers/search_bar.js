import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayer } from '../actions/index';

class SearchBar extends Component {
  // constructor for searchbar to give initial state
  // and bind inputs to the context of this component instance
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // set the state of this instance to the value of event.target
  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    // stop the form from performing a default form submission
    event.preventDefault();

    // Fetch player data and then clear our term state
    this.props.fetchPlayer(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Enter Summoner Name'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPlayer}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
