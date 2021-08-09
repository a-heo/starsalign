import React, { useState } from 'react';

const Signup = ({ saveUser }) => {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      userId,
      password,
      birthday,
    };
    saveUser(data);
  };

  return (
    <div>
      <div>Hello Stranger</div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" id="firstname" value={firstName} onChange={(e) => setFirst(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLast(e.target.value)} />
        </label>
        <br />
        <label>
          User Id:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>Birthday:</label>
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Signup;
