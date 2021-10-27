import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = (data) => {
  const { location } = data;
  const [id, setId] = useState('');

  // figure out how to call in props pre redirect after login
  console.log(id, 'id', location, location.name, 'data inside home');

  // causes login to fail no matter what...why?
  useEffect(() => {
    setId(location.userId);
  }, [location.userId, setId]);

  return (
    <div>
      <h1>
        Stars Align
      </h1>
      <h2>
        {location.name ? `Welcome ${location.name.firstName} ${location.name.lastName}!!` : null}
      </h2>
    </div>
  );
};

export default Home;
