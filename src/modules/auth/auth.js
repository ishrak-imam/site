import React, { Component } from 'react';
import './auth.css';
import 'react-tabs/style/react-tabs.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
  init
} from './reducer';


import Login from './login/login';
import SignUp from './signup/signup';


import InitLoader from '../shared/initialLoader/loader';


class Auth extends Component {


  constructor(props) {
    super(props);
    this.state = {
      referrer: this.props.location.state.referrer
    };
  }

  componentWillMount() {
    this.props.dispatch(init());
  }


  render() {

    const { login, checkingLogin } = this.props.auth;

    return (checkingLogin)
      ? (<InitLoader />)
      : (!login
          ? (<div className="auth-box auth-box-w50p auth-box-w60p auth-box-w90p">
            <Tabs>
              <TabList className="tab-list">
                <Tab>Login</Tab>
                <Tab>Sign up</Tab>
              </TabList>
              <TabPanel><Login /></TabPanel>
              <TabPanel><SignUp /></TabPanel>
            </Tabs>
          </div>)
          : (<Redirect to={this.state.referrer} />))
  }
}

const stateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(stateToProps, dispatch => ({ dispatch }))(Auth);