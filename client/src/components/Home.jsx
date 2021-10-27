import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = (data) => {
  const { location } = data;
  const [id, setId] = useState('');

  console.log(location, 'data inside home after login');
  // causes login to fail no matter what...why?
  useEffect(() => {
    setId(location.userId);
    axios.post(`https://aztro.sameerkumar.website?sign=${location.sign}&day=today`)
      .then((data) => {
        console.log(data, 'request horscope info from aztro');
      })
      .catch(error => {
        console.log(error, 'error retrieving horscope from aztro');
      });
  }, [location.userId, setId]);

  //h1 isn't correctly showing up
  return (
    <>
      <h1>
        Stars Align
      </h1>
      <h2>
        {location.name ? `Welcome ${location.name.firstName} ${location.name.lastName}!!` : null}
      </h2>
    </>
  );
};

export default Home;
