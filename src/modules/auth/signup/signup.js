

import React, { Component } from 'react';
import './signup.css'


import SignupForm from '../../shared/authForm/authForm'


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
    return (
      <div className="signup-box">
        <SignupForm
          onSubmit={this._onSubmint}
          loading={this.props.loading}
          submitText="Sign up"
        />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    loading: state.auth.loading
  }
}

export default connect(stateToProps, dispatch => ({ dispatch }))(SignUp);