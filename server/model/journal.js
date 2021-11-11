module.exports = (sequelize, DataTypes, User) => sequelize.define('Journal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userCode: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  title: {
    type: DataTypes.TEXT('medium'),
    allowNull: false,
  },
  entry: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  feelings: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
});
