// const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');
const login = require('./login');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: login.user,
//   password: login.password,
//   database: 'starsalign',
// });

// connection.connect((err) => {
//     if (err) {
//       console.log('connection error', err);
//     } else {
//       console.log('mysql connected');
//     }
// });

// module.exports = { connection };

const sequelize = new Sequelize('starsalign', login.user, login.password, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
