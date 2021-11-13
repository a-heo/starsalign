import React, { useContext, useState, useEffect } from 'react';
import JournalForm from './JournalForm';
import Entries from './Entries';
import { UserContext } from '../Context/UserContext';

const axios = require('axios');

const Journal = () => {
  const [entries, setEntries] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const today = new Date().toLocaleDateString();
  
  const getEntries = (id) => {
    axios.get(`/user/${id}/journal`)
    .then((result) => {
      //probably better storing all info into user so logout is cleaner?
      setEntries(result.data);
    })
    .catch((error) => {
      console.log(error, 'error in retrieving journal entries');
    });
  } 

  useEffect(() => {
    getEntries(user.id);
  }, []);

  //refactor code to delete entry from db and load new entries
  const deleteEntry = (journalId) => {
    axios.delete(`/user/${journalId}/journal`)
      .then(result => {
        getEntries(user.id);
      })
      .catch(error => {
      });
  };

  return (
    <div>
      <h3>
        Journal Entry for
        {today}
      </h3>
      <JournalForm setEntries={setEntries} />
      {entries
        ? (<Entries entries={entries} deleteEntry={deleteEntry} />)
        : null}
    </div>
  );
};

export default Journal;
