import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Login from '../Login';
import Signup from '../Signup';

const Routes = ({
  login, setLogin,
}) => (
  <div>
    <Switch>
      <Route exact path="/" component={Home}>
        {/* <Home /> */}
      </Route>
      <Route exact path="/about" component={About}>
        {/* <About /> */}
      </Route>
      <Route exact path="/login">
        <Login login={login} setLogin={setLogin} />
      </Route>
      <Route exact path="/signup">
        <Signup login={login} setLogin={setLogin} />
      </Route>
    </Switch>
  </div>
);

export default Routes;
