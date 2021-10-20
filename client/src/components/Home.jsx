import React from 'react';

const Home = ({ userId, name, sign, horscope }) => {
    console.log(name, userId, sign, horscope, 'inside home after login');
    return (
        <h1>Stars Align {name ? name : null}</h1>
    );
};

export default Home;
