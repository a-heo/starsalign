const { Sequelize, DataTypes } = require('sequelize');
const login = require('./login');
const UserModel = require('../model/user');
const JournalModel = require('../model/journal');

const sequelize = new Sequelize('starsalign', login.user, login.password, {
  host: 'localhost',
  dialect: 'mysql',
});

const User = UserModel(sequelize, DataTypes);
const Journal = JournalModel(sequelize, DataTypes);

User.hasMany(Journal, {
  foreignKey: 'userCode',
  sourceKey: 'userId'
});
Journal.belongsTo(User, {
  foreignKey: 'userCode',
  targetKey: 'userId'
});

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
