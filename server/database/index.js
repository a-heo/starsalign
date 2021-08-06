const Sequelize = require('sequelize');
const login = require('./login');

const sequelize = new Sequelize('starsalign', login.user, login.password, {
  host: 'localhost',
  dialect: 'mysql',
});
const Users = require('../model/user');

// Users.sync({ force: true })

// try {
//     await sequelize.authenticate();
//     console.log('Connection successed for sequelize');
// } catch (error) {
//     console.log('sequelize did not connect', error);
// };

sequelize.authenticate()
  .then((result) => {
    console.log('mysql successfully connected');
    return Users.sync({ force: true });
  })
  .then((result) => {
    console.log('table created');
    return result;
  })
  .catch((error) => {
    console.log('could not connect to mysql', error);
  });

module.exports = sequelize;
