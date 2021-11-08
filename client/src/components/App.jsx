import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Navigation/Routes';
import Navigate from './Navigation/Navigate';
import UserContext from './Context/UserContext';

const App = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser])
  
  return (
    <>
      <Router>
        <UserContext userInfo={userInfo}>
          <Navigate login={login} />
          <Routes login={login} setLogin={setLogin} />
        </UserContext>
      </Router>
    </>
  );
};

export default App;
