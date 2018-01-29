
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, login }) => (
  <Route
    render={props => (
      login
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/auth', state: { referrer: props.location.pathname } }} />)
    )}
  />
);

const stateToProps = (state) => {
  return {
    login: state.auth.login
  };
};

export default connect(stateToProps)(PrivateRoute);
