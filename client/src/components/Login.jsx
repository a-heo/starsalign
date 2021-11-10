import React, { useEffect, useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { UserContext } from './Context/UserContext';

const axios = require("axios");

const Login = ({ login, setLogin }) => {
  const [userId, updateID] = useState("");
  const [password, updatePW] = useState("");
  const [loggedIn, setLoggedin] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const logUser = (loginInfo) => {
    axios
      .post("/user/login", loginInfo)
      .then((response) => {
        const { data } = response;
        setLogin(!login);
        setUser(data);
        console.log(user, 'inside login');
      })
      .then(() => {
        setLoggedin(true);
        alert("welcome");
      })
      .catch((error) => {
        console.log(error, "error in login");
        alert("User/Password is incorrect");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = { userId, password };
    logUser(loginInfo);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Id:
          <input
            type="text"
            value={userId}
            onChange={(e) => updateID(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => updatePW(e.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
        {/* redirect path if login is true to homepage */}
        {loggedIn ? (
          <Redirect
            from="/login"
            to={{
              pathname: "/info",
            }}
          />
        ) : null}
      </form>
    </div>
  );
};

export default Login;
