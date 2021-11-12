import React, { useContext, useState, useEffect } from 'react';
import JournalForm from './JournalForm';
import Entries from './Entries';
import { UserContext } from '../Context/UserContext';

const axios = require('axios');

const Journal = () => {
  const [entries, setEntries] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    axios.get(`/user/${user.id}/journal`)
      .then((result) => {
        setEntries(result.data);
      })
      .catch((error) => {
        console.log(error, 'error in retrieving journal entries');
      });
  }, []);

  return (
    <div>
      <h3>
        Journal Entry for
        {today}
      </h3>
      <JournalForm setEntries={setEntries} />
      {entries
        ? (<Entries entries={entries} />)
        : null}
    </div>
  );
};

export default Journal;
