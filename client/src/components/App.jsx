import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {login ? null : (
              <div>
                <li>
                  <Link to="login">Login</Link>
                </li>
                <li>
                  <Link to="signup">Signup</Link>
                </li>
              </div>
            )}
          </ul>
        </nav>
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
                <Signup />
              </Route>
            </div>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
