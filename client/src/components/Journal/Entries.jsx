import React from 'react';
import styled from 'styled-components';

const JournalBox = styled.div`
  padding: 1vw;
`;

const JournalEntry = styled.div`
  font-size: 3rem;
  text-align: left;
  border: .2vw solid #e5edc4;
  padding: .2vw;
`;

const JournalSection = styled.div`
  &.date{
    color: #a06ee1;
    font-size: 2rem;
  }
  $.entry{
    color: #421b9b;
    padding: 1vw;
  }
  $.feelings{
    color: #cbbcf6;
    padding: 1vw;
    font-styling: italic;
    font-weight: bold;
  }
`;

const Title = styled.b`
  color: #a06ee1;
`;

const Entries = ({ entries, deleteEntry, journalFilter }) => {
  const mapEntries = (posts) => posts.map((journal) => (
    <JournalBox>
      <JournalEntry key={journal.id}>
        <Title>
          {journal.title}
        </Title>
        <br />
        <JournalSection className="date">
          {journal.createdAt}
        </JournalSection>
        <JournalSection className="entry">
          {journal.entry}
        </JournalSection>
        <JournalSection className="feelings">
          {journal.feelings}
        </JournalSection>
        <button type="button" onClick={() => deleteEntry(journal.id)}>delete</button>
      </JournalEntry>
    </JournalBox>
  ));

  const filteredEntries = (postings) => {
    const post = postings.filter((posting) => posting.feelings === journalFilter);
    return mapEntries(post);
  };

  return (
    <div>
      {journalFilter === '' ? (mapEntries(entries)) : (filteredEntries(entries))}
    </div>
  );
};

export default Entries;
