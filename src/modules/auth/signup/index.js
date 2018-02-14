
import React, { Component } from 'react';
import './signup.css';

import SignupForm from '../../shared/form/container';
import { SIGNUP_FORM } from '../../../config/form';

import { connect } from 'react-redux';

import {
  signUpReq
} from '../action';

import {bindFunctions} from '../../../utils';

import {getSignUp} from '../store';

class SignUp extends Component {
  constructor (props) {
    super(props);
    bindFunctions.call(this, [
      '_onSubmit'
    ]);
  }

  _onSubmit (obj) {
    this.props.dispatch(signUpReq(obj));
  }

  render () {
    const { error, loading } = this.props.signUp;
    return (
      <div className='signup-box'>
        <SignupForm
          onSubmit={this._onSubmit}
          loading={loading}
          err={error}
          config={SIGNUP_FORM}
        />
      </div>
    );
  }
}

const stateToProps = state => ({signUp: getSignUp(state)});

export default connect(stateToProps, dispatch => ({ dispatch }))(SignUp);
