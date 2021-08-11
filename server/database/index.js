const Sequelize = require('sequelize');
const login = require('./login');

const sequelize = new Sequelize('starsalign', login.user, login.password, {
  host: 'localhost',
  dialect: 'mysql',
});
const Users = require('../model/user');

sequelize.authenticate()
  .then((result) => {
    console.log('mysql successfully connected');
    return Users.sync();
  })
  .then((result) => {
    console.log('table created');
    return result;
  })
  .catch((error) => {
    console.log('could not connect to mysql', error);
  });

module.exports = sequelize;
