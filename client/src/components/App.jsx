import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import Routes from './Navigation/Routes';
import Navigate from './Navigation/Navigate';
import { UserContext } from './Context/UserContext';
import GlobalStyle from './theme/globalStyle';

const App = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);

  const handleLogout = () => {
    setUser('');
    setLogin(!login);
    //not working fix this
    return <Redirect to="/" />;
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <UserContext.Provider value={userInfo}>
          <Navigate login={login} handleLogout={handleLogout} />
          <Routes login={login} setLogin={setLogin} />
        </UserContext.Provider>
      </Router>
    </>
  );
};

export default App;
