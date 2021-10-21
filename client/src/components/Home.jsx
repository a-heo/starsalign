import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = (data) => {
  const [id, setId] = useState('');

  console.log(data);
  useEffect(() => {
    setId(data.location.query);
    axios.get('/user/info', id)
      .then((response) => {
        console.log(response, 'info retrieved');
      })
      .catch(error => {
        console.log(error, 'error from home retrieving userinfo');
      });
  });

  return (
    <h1>
      Stars Align
      {name || null}
    </h1>
  );
};

export default Home;
