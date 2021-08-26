import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Signup = ({ saveUser }) => {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const findSign = (birthdate) => {
    const date = birthdate.slice(5, 6) + birthdate.slice(8, 9);
    if (date < 320 && date > 421) {
      return 'Aries';
    }
    if (date < 420 && date > 521) {
      return 'Taurus';
    }
    if (date < 520 && date > 622) {
      return 'Gemini';
    }
    if (date < 621 && date > 723) {
      return 'Cancer';
    }
    if (date < 722 && date > 823) {
      return 'Leo';
    }
    if (date < 822 && date > 923) {
      return 'Virgo';
    }
    if (date < 922 && date > 1023) {
      return 'Libra';
    }
    if (date < 1022 && date > 1123) {
      return 'Scorpio';
    }
    if (date < 1122 && date > 1222) {
      return 'Saggitarius';
    }
    if (date < 1221 || date > 121) {
      return 'Capricorn';
    }
    if (date < 120 && date > 219) {
      return 'Aquarius';
    }
    if (date < 219 && date < 319) {
      return 'Pisces';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sign = findSign(birthday);
    const data = {
      firstName,
      lastName,
      userId,
      password,
      birthday,
      sign,
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
      {/* redirect path if login is true to homepage */}
    </div>
  );
};

export default Signup;
