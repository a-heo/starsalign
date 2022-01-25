import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const JournalBoxes = styled.div`
  display: flex;
  flex-flow: row wrap;
  ${'' /* justify-content: space-between; */}
`;

const JournalBox = styled.div`
  padding: 1vw;
  flex-basis: auto;
  flex: 0 1 30%;
  font-size: 3rem;
  text-align: left;
  border: .2vw solid #e5edc4;
  padding: .2vw;
  margin: .5em;
`;

const JournalSection = styled.div`
  &.date{
    color: #a06ee1;
    font-size: 1rem;
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
  &.entry {
    white-space: pre-line;
  }
`;

const Title = styled.b`
  color: #a06ee1;
  white-space: pre-line;
`;

const Entries = ({
  entries, deleteEntry, setModal, journalFilter, setEntryToChange,
}) => {
  const mapEntries = (posts) => posts.map((journal) => (
    <JournalBox key={journal.id}>
      <div>
        <Title>
          {journal.title}
        </Title>
        <br />
        <JournalSection className="date">
          Created:{' '}{journal.createdAt.slice(0, 10)}
        </JournalSection>
        <br />
        <JournalSection className="entry">
          {journal.entry}
        </JournalSection>
        <br />
        <JournalSection className="feelings">
          {journal.feelings}
        </JournalSection>
        <JournalSection className="lastupdated">
          Last Updated:{' '}{journal.updatedAt.slice(0, 10)}
        </JournalSection>
        <button
          type="button"
          onClick={() => {
            setEntryToChange(journal);
            setModal(true);
          }}
        >
          edit
        </button>
        <button type="button" onClick={() => deleteEntry(journal.id)}>delete</button>
      </div>
    </JournalBox>
  )).reverse();

  const filteredEntries = (postings) => {
    const post = postings.filter((posting) => posting.feelings === journalFilter);
    return mapEntries(post);
  };

  return (
    <JournalBoxes>
      {journalFilter === 'all' ? (mapEntries(entries)) : (filteredEntries(entries))}
    </JournalBoxes>
  );
};

export default Entries;
