
import React, { Component } from 'react';
import './header.css';

import { connect } from 'react-redux';
import AppTitle from '../appTitle';

import {bindFunctions} from '../../../utils';

import {
  logOutReq
} from '../../auth/action';

class Header extends Component {
  constructor (props) {
    super(props);
    bindFunctions.call(this, [
      '_logout'
    ]);
  }

  _logout () {
    this.props.dispatch(logOutReq());
  }

  render () {
    return (
      <div className='header'>

        <div className='f-r'>
          <button onClick={this._logout} className='ui negative button'>Log out</button>
        </div>

        <div>
          <AppTitle />
        </div>

      </div>
    );
  }
}

export default connect(dispatch => ({ dispatch }))(Header);
