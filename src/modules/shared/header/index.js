
import React, { Component } from 'react';
import './header.css';
import AppTitle from '../appTitle';

export default class Header extends Component {
  render () {
    const {logout, user} = this.props;
    return (
      <div className='header'>
        <div className='f-r'>
          <button onClick={logout} className='ui mini negative button'>Log out</button>
        </div>
        <div>
          <AppTitle user={user} />
        </div>
      </div>
    );
  }
}
