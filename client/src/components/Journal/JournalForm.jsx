import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
} from '../theme/modal';

const axios = require('axios');

const JournalForm = ({
  setEntries, setModal, modalOn, journal, getEntries,
}) => {
  const id = journal && journal.id ? journal.id : undefined;
  // these conditions aren't working --need to figure out why
  const [title, setTitle] = useState(id ? journal.title : '');
  const [entry, setEntry] = useState(id ? journal.entry : '');
  const [emotion, setEmotion] = useState(id ? journal.feelings : '');

  const { user } = useContext(UserContext);

  const today = new Date().toLocaleDateString();

  // brute force method for editing existing entry --need to fix
  useEffect(() => {
    if (journal) {
      setTitle(journal.title);
      setEntry(journal.entry);
      setEmotion(journal.feelings);
    } else {
      setTitle('');
      setEntry('');
      setEmotion('');
    }
  }, [journal]);

  const saveEntry = (data) => {
    axios.post(`/user/${user.id}/journal/`, data)
      .then((result) => {
        setEntries((oldEntries) => [...oldEntries, result.data]);
      })
      .then(setModal(false));
  };

  const updateEntryArray = (updated, existing) => {
    existing.title = updated.title;
    existing.entry = updated.entry;
    existing.feelings = updated.feelings;
  };

  const updateEntry = (data) => {
    axios.put(`/user/journal/${journal.id}`, data)
      .then((result) => {
        getEntries(user.id);
      })
      .then(setModal(false))
      .catch((error) => console.log(error, 'cannot update entry'));
  };

  // create one state where all info gets updated into that one obj state
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.title = title;
    data.entry = entry;
    data.feelings = emotion;
    id ? updateEntry(data) : saveEntry(data);
    setTitle('');
    setEntry('');
    setEmotion('');
  };

  return (
    <>
      {modalOn ? (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h3>
                {id ? 'Update entry'
                  : (`Journal Entry for ${today}`
                  )}
              </h3>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Title</label>
                  <br />
                  <textarea name="title" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
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
                    <option />
                    <option value="happy">Happy</option>
                    <option value="neutral">Neutral</option>
                    <option value="difficult">Difficult</option>
                    <option value="dark">Deep Abyss</option>
                  </select>
                </div>
                <br />
                <input type="submit" value={journal ? 'edit' : 'submit'} />
              </form>
            </ModalBody>
            <ModalFooter>
              <button onClick={() => { setModal(!modalOn); }}>Close</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default JournalForm;
