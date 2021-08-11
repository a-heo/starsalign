import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Login from '../Login';
import Signup from '../Signup';

const Routes = ({ saveUser, login }) => (
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      {login ? null : (
        <div>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup saveUser={saveUser} />
          </Route>
        </div>
      )}
    </Switch>
  </div>
);

export default Routes;