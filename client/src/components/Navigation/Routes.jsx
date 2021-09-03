import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Login from '../Login';
import Signup from '../Signup';

const Routes = ({
  saveUser, login, logUser, setLogin,
}) => (
  <div>
    <Switch>
      <Route exact path="/" component={Home}>
        {/* <Home /> */}
      </Route>
      <Route exact path="/about" component={About}>
        {/* <About /> */}
      </Route>
      <Route exact path="/login" component={Login}>
        {/* <Login logUser={logUser} login={login} setLogin={setLogin} /> */}
      </Route>
      <Route exact path="/signup" component={Signup}>
        {/* <Signup saveUser={saveUser} login={login} setLogin={setLogin} /> */}
      </Route>
    </Switch>
  </div>
);

export default Routes;
