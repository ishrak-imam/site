

import React, { Component } from 'react';
import './signup.css'


import SignupForm from '../../shared/form/container';
import { SIGNUP_FORM } from '../../../config/form';


import { connect } from 'react-redux';


import {
  signupRequest
} from '../reducer';


class SignUp extends Component {

  constructor(props) {
    super(props);
    this._onSubmint = this._onSubmint.bind(this);
  }

  _onSubmint(obj) {
    this.props.dispatch(signupRequest(obj))
  }

  render() {
    const { signupErr, loading } = this.props.auth;
    return (
      <div className="signup-box">
        <SignupForm
          onSubmit={this._onSubmint}
          loading={loading}
          err={signupErr}
          config={SIGNUP_FORM}
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

export default connect(stateToProps, dispatch => ({ dispatch }))(SignUp);