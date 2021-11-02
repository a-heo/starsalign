import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = (data) => {
  const { location } = data;
  const [id, setId] = useState('');
  const [color, setColor] = useState('');
  const [compatibility, setCompatibility] = useState('');
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState();
  const [mood, setMood] = useState('');

  console.log(location, 'location', id, 'id', 'data inside home after login');
  // causes login to fail no matter what...why?
  useEffect(() => {
    if (location.userId) {
      setId(location.userId);
      axios.post(`https://aztro.sameerkumar.website?sign=${location.sign}&day=today`)
        .then((response) => {
          const { data } = response;
          console.log(data, 'request horscope info from aztro');
          setNumber(data.lucky_number);
          setColor(data.color);
          setDescription(data.description);
          setCompatibility(data.compatibility);
          setMood(data.mood);
        })
        .catch((error) => {
          console.log(error, 'error retrieving horscope from aztro');
        });
    }
  }, [location.userId]);

  // h1 isn't correctly showing up
  return (
    <>
      <h1>
        Stars Align
      </h1>
      {location.name
        ? (
          <div>
            <h2>
              Welcome
              {' '}
              {location.name.firstName}
              {' '}
              {location.name.lastName}
              !!
            </h2>
            <p>
              <b>
                Horscope of the day:
              </b>
              <br />
              {description}
            </p>
          </div>
        )
        : null}
    </>
  );
};

export default Home;
