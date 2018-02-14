import React, { Component } from 'react';
import './auth.css';
import 'react-tabs/style/react-tabs.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
  init
} from './action';

import Login from './login';
import SignUp from './signup';

import InitLoader from '../shared/initialLoader';

import {getLogin} from './store';

class Auth extends Component {
  constructor (props) {
    super(props);
    this.state = {
      referrer: this.props.location.state ? this.props.location.state.referrer : '/'
    };
  }

  componentWillMount () {
    this.props.dispatch(init());
  }

  render () {
    const { user, checking } = this.props.login;

    return (checking)
      ? (<InitLoader />)
      : (!user
        ? (<div className='auth-box auth-box-w50p auth-box-w60p auth-box-w90p'>
          <Tabs>
            <TabList className='tab-list'>
              <Tab>Login</Tab>
              <Tab>Sign up</Tab>
            </TabList>
            <TabPanel><Login /></TabPanel>
            <TabPanel><SignUp /></TabPanel>
          </Tabs>
        </div>)
        : (<Redirect to={this.state.referrer} />));
  }
}

const stateToProps = state => ({login: getLogin(state)});

export default connect(stateToProps, dispatch => ({ dispatch }))(Auth);
