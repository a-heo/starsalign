import React, { useContext, useEffect } from 'react';
import JournalForm from './JournalForm';
import Entries from './Entries';
import { UserContext } from './Context/UserContext';

const Journal = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <JournalForm />
      <Entries />
    </div>
  );
};

export default Journal;