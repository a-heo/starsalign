import React, { useContext, useEffect } from 'react';
import JournalForm from './JournalForm';
import Entries from './Entries';
import { UserContext } from './Context/UserContext';

const Journal = () => {
  const { user, setUser } = useContext(UserContext);
  
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <h3>Journal Entry for {today}</h3>
      <JournalForm />
      <Entries />
    </div>
  );
};

export default Journal;