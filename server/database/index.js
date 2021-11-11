const { Sequelize, DataTypes } = require("sequelize");
const login = require("./login");
const UserModel = require("../model/user");
const JournalModel = require("../model/journal");

const sequelize = new Sequelize("starsalign", login.user, login.password, {
  host: "localhost",
  dialect: "mysql",
});

const User = UserModel(sequelize, DataTypes);
const Journal = JournalModel(sequelize, DataTypes, User);

User.hasMany(Journal, {
  foreignKey: "userCode",
  sourceKey: "id",
});
Journal.belongsTo(User, {
  foreignKey: "userCode",
  targetKey: "id",
});

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   });

module.exports = { User, Journal };
