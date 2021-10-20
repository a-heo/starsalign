import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navigate = ({ login }) => (
  <Router>
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
  </Router>
);

export default Navigate;
