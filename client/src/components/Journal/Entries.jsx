import React from 'react';

const Entries = ({ entries, deleteEntry }) => (
  <div>
    {entries.map((journal) => (
      <div key={journal.id}>
        <b>
          {journal.title}
        </b>
        <br />
        <div>
          {journal.createdAt}
        </div>
        <div>
          {journal.entry}
        </div>
        <div>
          {journal.feelings}
        </div>
        <button type="button" onClick={() => {deleteEntry(journal.id)}}>delete</button>
      </div>
    ))}
  </div>
);

export default Entries;
