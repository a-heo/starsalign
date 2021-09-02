import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Login from '../Login';
import Signup from '../Signup';

const Routes = ({ saveUser, login, logUser }) => (
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        {login ? null : 
        <Login logUser={logUser} login={login} />
        }
      </Route>
      <Route exact path="/signup">
        {login ? null : <Signup saveUser={saveUser} login={login} /> }
      </Route>
    </Switch>
  </div>
);

export default Routes;
