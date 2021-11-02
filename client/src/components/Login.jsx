import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const axios = require('axios');

const Login = ({ login, setLogin }) => {
  const [userId, updateID] = useState('');
  const [password, updatePW] = useState('');
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [sign, setSign] = useState('');
  const [id, getId] = useState('');
  // const [horscope, setHorscope] = useState('');
  const [lastlogin, setLastlogin] = useState('');
  const [loggedIn, setLoggedin] = useState(false);

  const logUser = (loginInfo) => {
    axios.post('/user/login', loginInfo)
      .then((response) => {
        const { data } = response;
        console.log(data, 'axios request for user info inside login');
        setName({ firstName: data.firstName, lastName: data.lastName });
        setSign(data.sign);
        getId(data.id);
        // setHorscope(data.horscope);
        setLoggedin(true);
        setLogin(!login);
        alert('welcome');
      })
      .catch((error) => {
        console.log(error, 'error in login');
        alert('User/Password is incorrect');
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
          <input type="text" value={userId} onChange={(e) => updateID(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => updatePW(e.target.value)} />
        </label>
        <input type="submit" value="submit" />
        {/* redirect path if login is true to homepage */}
        { loggedIn ? (
          <Redirect
            from="/login"
            to={{
              pathname: '/',
              query:
                id, userId, name, sign, login
            }}
          />
        )
          : null}
      </form>
    </div>
  );
};

export default Login;
