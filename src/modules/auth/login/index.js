
import React, { Component } from 'react';
import './login.css';

import LoginForm from '../../shared/form/container';
import { LOGIN_FORM } from '../../../config/form';

import { connect } from 'react-redux';

import {
  loginReq
} from '../action';

import {bindFunctions} from '../../../utils';

import {getLogin} from '../store';

class Login extends Component {
  constructor (props) {
    super(props);
    bindFunctions.call(this, [
      '_onSubmit'
    ]);
  }

  _onSubmit (obj) {
    obj.strategy = 'local';
    this.props.dispatch(loginReq(obj));
  }

  render () {
    const {
      // error,
      loading
    } = this.props.login;
    return (
      <div className='login-box'>
        <LoginForm
          onSubmit={this._onSubmit}
          loading={loading}
          // err={error}
          config={LOGIN_FORM}
        />
      </div>
    );
  }
}

const stateToProps = state => ({login: getLogin(state)});

export default connect(stateToProps, dispatch => ({ dispatch }))(Login);
