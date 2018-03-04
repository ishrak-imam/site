import React, { Component } from 'react';
import Header from '../shared/header';

import { connect } from 'react-redux';
import {bindFunctions} from '../../utils';
import {logOutReq} from '../auth/action';
import {getUser} from './store';

class Home extends Component {
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
    const {user} = this.props;
    return (
      <div>
        <Header logout={this._logout} user={user} />
      </div>
    );
  }
}

const stateToProps = state => ({user: getUser(state)});

export default connect(stateToProps, dispatch => ({dispatch}))(Home);
