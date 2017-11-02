import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './app.css';

import {
  Switch, Route, Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import PrivateRoute from './modules/auth/privateRoute';

import Auth from './modules/auth/auth';
import Home from './modules/home/home';


class App extends Component {

  render() {

    return (
      <div>
        <Router basename="/site/">
          <Switch>
            <Route exact path="/auth" component={Auth} />
            <PrivateRoute path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;