import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import JournalForm from './JournalForm';
import Entries from './Entries';
import { UserContext } from '../Context/UserContext';

const axios = require('axios');

const JournalBox = styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 10vw;
`;

const Journal = () => {
  const [entries, setEntries] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const [journalFilter, setJournalFilter] = useState('all');

  const today = new Date().toLocaleDateString();

  const getEntries = (id) => {
    axios.get(`/user/${id}/journal`)
      .then((result) => {
      // probably better storing all info into user so logout is cleaner?
        setEntries(result.data.reverse());
      })
      .catch((error) => {
        console.log(error, 'error in retrieving journal entries');
      });
  };

  useEffect(() => {
    getEntries(user.id);
  }, []);

  const deleteEntry = (journalId) => {
    axios.delete(`/user/${journalId}/journal`)
      .then((result) => {
        getEntries(user.id);
      })
      .catch((error) => {
        console.log(error, 'error in deleteentry');
      });
  };

  return (
    <JournalBox>
      <h3>
        Journal Entry for{' '}
        {today}
      </h3>
      <JournalForm setEntries={setEntries} />
      <label htmlFor="options">Show</label>
      <select id="options" onChange={(e) => setJournalFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="happy">Happy</option>
        <option value="neutral">Neutral</option>
        <option value="difficult">Difficult</option>
        <option value="dark">Deep Abyss</option>
      </select>
      {entries
        ? (<Entries entries={entries} deleteEntry={deleteEntry} journalFilter={journalFilter}/>)
        : null}
    </JournalBox>
  );
};

export default Journal;
