import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const axios = require('axios');

const Login = ({ login, setLogin }) => {
  const [userId, updateID] = useState('');
  const [password, updatePW] = useState('');
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [sign, setSign] = useState('');
  const [horscope, setHorscope] = useState('');
  const [lastlogin, setLastlogin] = useState('');
  const [loggedIn, setLoggedin] = useState(false);

  const logUser = (loginInfo) => {
    axios.post('/user/login', loginInfo)
      .then((response) => {
        setName({ firstName: response.data.firstName, lastName: response.data.lastName });
        setSign(response.data.sign);
        setHorscope(response.data.horscope);
        setLoggedin(true);
        setLogin(true);
        alert('welcome');
      })
      .catch((error) => {
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
        { loggedIn ? (
          <Redirect
            from="/login"
            to={{
              pathname: '/',
              state: {
                userId, name, sign, horscope,
              },
            }}
          />
        )
          : null}
      </form>
      {/* redirect path if login is true to homepage */}
    </div>
  );
};

export default Login;
