import React, { useState } from 'react';

const JournalForm = () => {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <form>
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
    </form>
  );
};

export default JournalForm;
