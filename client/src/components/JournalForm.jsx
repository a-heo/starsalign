import React from 'react';

const JournalForm = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <form>
      <label>Title</label>
      <label>Entry</label>
    </form>
  );
};

export default JournalForm;
