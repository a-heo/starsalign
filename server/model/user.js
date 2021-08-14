const { Sequelize, DataTypes } = require('sequelize');
const login = require('../database/login');

const sequelize = new Sequelize('starsalign', login.user, login.password, {
  host: 'localhost',
  dialect: 'mysql',
});

const Users = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sign: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  horsescope: {
    type: DataTypes.CHAR,
  },
  lastlogin: {
    type: DataTypes.DATE,
  },
});

module.exports = Users;
