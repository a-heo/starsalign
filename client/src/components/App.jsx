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

  return (
      <div>
        <Navigate login={login} />
        <Routes login={login} saveUser={saveUser} />
      </div>
  );
};

export default App;
