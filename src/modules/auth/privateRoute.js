
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, login: {user} }) => (
  <Route
    render={props => (
      user
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/auth', state: { referrer: props.location.pathname } }} />)
    )}
  />
);

const stateToProps = ({auth: {login}}) => ({login});

export default connect(stateToProps)(PrivateRoute);
