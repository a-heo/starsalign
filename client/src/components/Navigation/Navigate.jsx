import React from 'react';
import { Link } from 'react-router-dom';

const Navigate = ({ login }) => (
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
  </div>
);

export default Navigate;
