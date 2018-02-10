
import React, { Component } from 'react';
import './signup.css';

import SignupForm from '../../shared/form/container';
import { SIGNUP_FORM } from '../../../config/form';

import { connect } from 'react-redux';

import {
  signUpReq
} from '../action';

import {getSignUp} from '../stateAccess';

class SignUp extends Component {
  constructor (props) {
    super(props);
    this._onSubmint = this._onSubmint.bind(this);
  }

  _onSubmint (obj) {
    this.props.dispatch(signUpReq(obj));
  }

  render () {
    const { error, loading } = this.props.signUp;
    return (
      <div className='signup-box'>
        <SignupForm
          onSubmit={this._onSubmint}
          loading={loading}
          err={error}
          config={SIGNUP_FORM}
        />
      </div>
    );
  }
}

const stateToProps = (state) => ({signUp: getSignUp(state)});

export default connect(stateToProps, dispatch => ({ dispatch }))(SignUp);
