import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ logUser, login }) => {
  const [userId, updateID] = useState('');
  const [password, updatePW] = useState('');

  useEffect(() => {
    console.log('login worked');
  }, [login]);

  const handleSubmit = () => {
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
      </form>
      { login ? <Redirect to="/" />
        : null}
      {/* redirect path if login is true to homepage */}
    </div>
  );
};

export default Login;
