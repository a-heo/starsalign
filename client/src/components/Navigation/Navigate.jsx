import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navigate = ({ login, handleLogout }) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {login ? (
          <div>
            <li>
              <Link to="/info">My Info</Link>
            </li>
            <li>
              <Link to="/journal">My Journal</Link>
            </li>
            <li>
              <button type="button" onClick={handleLogout}>Logout</button>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
    <h1>Stars Align</h1>
  </div>
);

export default Navigate;
