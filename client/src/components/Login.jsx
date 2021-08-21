import React, { useState } from 'react';

const Login = () => {
  const [userId, updateID] = useState('');
  const [password, updatePW] = useState('');

  const handleSubmit = () => {
    console.log('submit Pressed');
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
      </form>
    </div>
  );
};

export default Login;
