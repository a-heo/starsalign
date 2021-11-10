import axios from 'axios';
import React, { useEffect, useContext } from 'react';

import { UserContext } from './Context/UserContext';

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .post(
        `https://aztro.sameerkumar.website?sign=${user.sign}&day=today`,
      )
      .then((response) => {
        const { data } = response;
        setUser((info) => ({
          ...info,
          horoscope: {
            color: data.color,
            compatibility: data.compatibility,
            description: data.description,
            luckyNum: data.lucky_num,
            luckyTime: data.lucky_time,
            mood: data.mood,
          },
        }));
      })
      .catch((error) => {
        console.log(error, 'error retrieving horscope from aztro');
      });
  }, []);

  return (
    <>
      {' '}
      {
      user
        ? (
          <>
            <h2>
              Welcome
              {' '}
              {user.firstName}
              {' '}
              {user.lastName}
              !!
            </h2>
            <p>
              <b>Horoscope of the day:</b>
              <br />
              {user.horoscope ? user.horoscope.description : null}
            </p>
            <p>
              <b>Compatibility:</b>
              <br />
              {user.horoscope ? user.horoscope.compatibility : null}
            </p>
            <p>
              <b>Mood:</b>
              <br />
              {user.horoscope ? user.horoscope.mood : null}
            </p>
            <p>
              <b>Color:</b>
              <br />
              {user.horoscope ? user.horoscope.color : null}
            </p>
          </>
        )
        : null
    }
    </>
  );
};

export default Home;
