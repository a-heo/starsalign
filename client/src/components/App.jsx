import React, { useState } from 'react';

import Routes from './Navigation/Routes';
import Navigate from './Navigation/Navigate';

const axios = require('axios');

const App = () => {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [sign, setSign] = useState('');
  const [horscope, setHorscope] = useState('');
  const [password, setPassword] = useState('');

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
    axios.post('/user/login', loginInfo)
      .then((response) => {
        setUserInfo(response.data);
        console.log(userInfo, 'userinfo updated in states from logUser', response);
        alert("welcome");
        //transfer data to components
        setLogin(!login);
      })
      .then(() => {
        console.log(login, 'after userinfo saved');
      })
      .catch((error) => {
        console.log('error logging user', error);
        alert("User/Password is incorrect");
      });
  };

  return (
      <div>
        <Navigate login={login} />
        <Routes login={login} saveUser={saveUser} logUser={logUser}/>
      </div>
  );
};

export default App;
