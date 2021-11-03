import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Navigation/Routes';
import Navigate from './Navigation/Navigate';

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Router>
        <Navigate login={login} />
        <Routes login={login} setLogin={setLogin} />
      </Router>
    </>
  );
};

export default App;
