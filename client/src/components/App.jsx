import React, { useState } from 'react';

import Routes from './Navigation/Routes';
import Navigate from './Navigation/Navigate';

const axios = require('axios');

const App = () => {
  const [login, setLogin] = useState(false);

  const saveUser = (data) => {
    console.log(data, 'inside saveuser');
    axios.post('/user', data)
      .then((response) => {
        console.log('successfully saved userinfo');
      })
      .catch((error) => {
        console.log('error in saving user info', error);
      });
  };

  const logUser = (loginInfo) => {
    console.log(loginInfo, 'inside log user');
    axios.get('/user', data)
      .then((response) => {
        alert("welcome");
        //transfer data to components
      })
      .catch((error) => {
        console.log('error logging user', error);
        alert("User/Password is incorrect");
      })
  };

  return (
      <div>
        <Navigate login={login} />
        <Routes login={login} saveUser={saveUser} logUser={logUser}/>
      </div>
  );
};

export default App;
