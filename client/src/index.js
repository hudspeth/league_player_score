import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import SearchBar from './containers/search_bar';
import PlayerStats from './components/player_stats';
import Footer from './components/footer';
import './styles/index.css';

import configureStore from './configureStore';

const store = configureStore();

class App extends Component {
  render(){
    return(
      <div className='app-layout'>
        <Header />
        <SearchBar />
        <PlayerStats />
        <Footer />
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

