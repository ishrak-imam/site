
import React, { Component } from 'react';
import './login.css';

import LoginForm from '../../shared/form/container';
import { LOGIN_FORM } from '../../../config/form';

import { connect } from 'react-redux';

import {
  loginReq
} from '../action';

import {getLogin} from '../stateAccess';

class Login extends Component {
  constructor (props) {
    super(props);
    this._onSubmint = this._onSubmint.bind(this);
  }

  _onSubmint (obj) {
    obj.strategy = 'local';
    this.props.dispatch(loginReq(obj));
  }

  render () {
    const { error, loading } = this.props.login;
    return (
      <div className='login-box'>
        <LoginForm
          onSubmit={this._onSubmint}
          loading={loading}
          err={error}
          config={LOGIN_FORM}
        />
      </div>
    );
  }
}

const stateToProps = (state) => ({login: getLogin(state)});

export default connect(stateToProps, dispatch => ({ dispatch }))(Login);
