import React, { useState } from 'react';
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
  entries, deleteEntry, setModal, journalFilter, setEntryToChange
}) => {

  // const updateEntry = (journal) => (
  //   <form>
  //     <div>
  //       <label for="title">Title</label>
  //       <br />
  //       <textarea name="title" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  //     </div>
  //     <div>
  //       <label for="entry">Entry</label>
  //       <br />
  //       <textarea name="entry" placeholder={journal.entry} rows="5" value={entry} onChange={(e) => setEntry(e.target.value)} required />
  //     </div>
  //     <div>
  //       <label for="emotions">Emotional Level of this Entry</label>
  //       <br />
  //       <select value={emotion} onChange={(e) => setEmotion(e.target.value)} required>
  //         <option />
  //         <option value="happy">Happy</option>
  //         <option value="neutral">Neutral</option>
  //         <option value="difficult">Difficult</option>
  //         <option value="dark">Deep Abyss</option>
  //       </select>
  //     </div>
  //     <br />
  //     <input type="submit" value="submit" />
  //   </form>
  // );

  const mapEntries = (posts) => posts.map((journal) => (
    <JournalBox key={journal.id}>
      <div>
        <Title>
          {journal.title}
        </Title>
        <br />
        <JournalSection className="date">
          {journal.createdAt.slice(0, 10)}
        </JournalSection>
        <br />
        <JournalSection className="entry">
          {journal.entry}
        </JournalSection>
        <br />
        <JournalSection className="feelings">
          {journal.feelings}
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
