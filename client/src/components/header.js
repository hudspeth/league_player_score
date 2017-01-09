import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
    render(){
        return(
            <div className='header-logo'>
                <span className='header-logo-text'>League of Legends Player Rater</span>
            </div>
        );
    }
}

export default Header;