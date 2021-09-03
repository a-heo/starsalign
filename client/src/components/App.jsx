import React, { useEffect, useState } from 'react';

import Routes from './Navigation/Routes';
import Navigate from './Navigation/Navigate';

const axios = require('axios');

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <Navigate login={login} />
      <Routes login={login} setLogin={setLogin} />
    </div>
  );
};

export default App;
