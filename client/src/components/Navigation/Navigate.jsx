import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

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
        {login 
        ? 
        (
          <div>
            <li>
              <button>
              Logout
              </button>
            </li>
          </div>
        ) 
        : (
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
