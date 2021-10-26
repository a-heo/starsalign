import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = (data) => {
  const [id, setId] = useState('');

  // figure out how to call in props pre redirect after login
  console.log(id, 'id', data.location, data.location.name, 'data inside home');

  // causes login to fail no matter what...why?
  useEffect(() => {
    setId(data.location.userId);
    // setId(data.location.query);
    // axios.get('/user/info', data.location.userId)
    //   .then((response) => {
    //     console.log(response, 'info retrieved');
    //   })
    //   .catch(error => {
    //     console.log(error, 'error from home retrieving userinfo');
    //   });
  }, [data.location.userId, setId]);

  return (
    <div>
      <h1>
        Stars Align
      </h1>
      <h2>
        {data.location.name ? `Welcome ${data.location.name.firstName} ${data.location.name.lastName}!!` : null}
      </h2>
    </div>
  );
};

export default Home;
