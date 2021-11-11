import React, { useState, useContext } from 'react';
import { UserContext } from './Context/UserContext';

const axios = require('axios');

const JournalForm = () => {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [emotion, setEmotion] = useState('');

  const { user } = useContext(UserContext);

  const saveEntry = (data) => {
    //create axios post here to save into users data; 
    axios.post(`/user/${user.id}/journal/`, data)
    .then((result) => {
        console.log(result);
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.title = title;
    data.entry = entry;
    data.feelings = emotion;
    saveEntry(data);
    alert('submit was pressed');
    setTitle('');
    setEntry('');
    setEmotion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <br />
        <textarea name="title" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Entry</label>
        <br />
        <textarea name="entry" placeholder="Write your thoughts" rows="5" value={entry} onChange={(e) => setEntry(e.target.value)} required />
      </div>
      <div>
        <label>Emotional Level of this Entry</label>
        <br />
        <select value={emotion} onChange={(e) => setEmotion(e.target.value)} required>
          <option></option>
          <option value="happy">Happy</option>
          <option value="neutral">Neutral</option>
          <option value="difficult">Difficult</option>
          <option value="dark">Deep Abyss</option>
        </select>
      </div>
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};

export default JournalForm;
