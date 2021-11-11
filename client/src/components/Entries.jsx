import React from 'react';

const Entries = ({ entries }) => (
  <div>
    {entries.map((journal) => (
      <div>
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
      </div>
    ))}
  </div>
);

export default Entries;
