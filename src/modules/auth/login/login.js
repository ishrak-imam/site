

import React, { Component } from 'react';
import './login.css'

import LoginForm from '../../shared/form/container';
import { LOGIN_FORM } from '../../../config/form';

import { connect } from 'react-redux';


import {
  loginRequest
} from '../reducer';


class Login extends Component {

  constructor(props) {
    super(props);
    this._onSubmint = this._onSubmint.bind(this);
  }

  _onSubmint(obj) {
    obj.strategy = 'local';
    this.props.dispatch(loginRequest(obj));
  }

  render() {
    const { loginErr, loading } = this.props.auth;
    return (
      <div className="login-box">
        <LoginForm
          onSubmit={this._onSubmint}
          loading={loading}
          err={loginErr}
          config={LOGIN_FORM}
        />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(stateToProps, dispatch => ({ dispatch }))(Login);