import React, { useContext, useEffect } from 'react';

import { UserContext } from './Context/UserContext';

const Journal = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      journal entries
    </div>
  );
};

export default Journal;