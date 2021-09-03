import React, { useEffect, useState } from 'react';

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
  const [lastlogin, setLastlogin] = useState('');

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

  useEffect(() => {
    console.log(login, userId, name, sign, 'info changed');
  }, [login]);

  const logUser = (loginInfo) => {
    console.log(loginInfo, 'inside log user');
    axios.post('/user/login', loginInfo)
      .then((response) => {
        console.log('response worked', login, response.data);
        setLogin(true);
        setName({ firstName: response.data.firstName, lastName: response.data.lastName });
        setUserId(response.data.userId);
        setSign(response.data.sign);
        setPassword(response.data.password);
        setHorscope(response.data.horscope);
        alert('welcome');
      })
      .catch((error) => {
        console.log('error logging user', error);
        alert('User/Password is incorrect');
      });
  };

  return (
    <div>
      <Navigate login={login} />
      <Routes login={login} saveUser={saveUser} logUser={logUser} setLogin={setLogin} />
    </div>
  );
};

export default App;
