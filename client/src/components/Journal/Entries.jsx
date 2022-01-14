import React from 'react';
import styled from 'styled-components';

const JournalBoxes = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-basis: auto;
  justify-content: space-between;
  ${'' /* flex: 1 1 auto; */}
`;

const JournalBox = styled.div`
  padding: 1vw;
  flex: 0 1 33%;
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
  &.entry {
    white-space: pre-line;
  }
`;

const Title = styled.b`
  color: #a06ee1;
`;
const Entries = ({ entries, deleteEntry, journalFilter }) => {
  const mapEntries = (posts) => posts.map((journal) => (
    <JournalBox key={journal.id}>
      <JournalEntry>
        <Title>
          {journal.title}
        </Title>
        <br />
        <JournalSection className="date">
          {journal.createdAt.slice(0, 10)}
        </JournalSection>
        <JournalSection className="entry">
          {journal.entry}
          {/* {journal.entry.replace(\n, '<br>')} */}
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
    <JournalBoxes>
      {journalFilter === 'all' ? (mapEntries(entries)) : (filteredEntries(entries))}
    </JournalBoxes>
  );
};

export default Entries;
